# Useful notes about this polyfill usage (and NextJS tips)

## How to make it work in NextJS (app router)
- We need to import it on client side, but it is not enough because polyfill uses global window object, which will throw on server-side during pre-render attempt. Usually, in NextJS we fix such problems using dynamic import (next/dynamic), but this would not work because [polyfill cant be loaded asynchronously](https://github.com/flackr/scroll-timeline/issues/260). So instead we need to import it using async import, wait until its ready and then "upgrade" our animations.
- Now we have a problem because we've loaded polyfill asynchronously, so it wasn't ready at the moment our animations "began". We need to manually "upgrade" our animations. [in this issue](https://github.com/flackr/scroll-timeline/issues/260) there are 3 main ideas how we can make it, but I've only managed to make first one work: mark all animated blocks with data-animated="true", query them all when polyfill loaded, find all animations and "upgrade" them - just restart. And final touch: do it inside of requestAnimationFrame callback, otherwise this won't work.

```tsx
<div 
    data-animated={"true"} // Mark your animated blocks like so
    className={s.oncomingCont}
/>
```

- We should remember not to do this stuff in browsers that already support CSS animation-timeline: scroll(). Yes, polyfill itself does that, but we also don't want to run our queries and do anything with animations in browsers like Chrome. It is possible with simple check `CSS.supports("animation-timeline: --works")`.
- Logic described above fits very well inside of custom hook, let me share some code:
```ts
'use client';

import { useState, useEffect } from 'react';

// These are our debug & logging libraries, you don't need them 
import Bugsnag from '@bugsnag/js';
import { CodeBud } from '@appklaar/codebud';

export type UseScrollTimelinePolyfillResult = 'polyfillNotNeeded' | 'polyfillApplied' | 'polyfillApplyingFailed';

/**
 * A custom hook that loads the ScrollTimeline polyfill and upgrades animations
 * on elements with the `data-animated="true"` attribute.
 * @returns {UseScrollTimelinePolyfillResult} Result status.
 *
 * @remarks
 * - Hook applies the polyfill only if 
 * - The polyfill is dynamically imported from the `scroll-timeline-polyfill` package.
 * - The hook uses `requestAnimationFrame` to ensure animations are upgraded in the next frame.
 * - Animations that are in the `finished` or `idle` state are reset and played again.
 */
export const useScrollTimelinePolyfill = (): UseScrollTimelinePolyfillResult => {
  const [status, setStatus] = useState<UseScrollTimelinePolyfillResult>('polyfillNotNeeded');

  useEffect(() => {
    const loadPolyfill = async () => {
      try {
        // Don't enable polyfill if browser claims support
        if (CSS.supports("animation-timeline: --works"))
          return;

        // Relative path is the only way scroll-timeline-polyfill/dist/scroll-timeline.js import works for me. Anyway, make sure that you pass correct path.
        await import('./../../node_modules/scroll-timeline-polyfill/dist/scroll-timeline.js' as any); // no TS declaration file, so as any
    
        // Regular NextJS check that we're not on server-side
        if (typeof window === 'undefined')
          return;

        if ('ScrollTimeline' in window) { // If polyfill applied
          console.log('ScrollTimeline is now available. Upgrading animations...');

          // Find all elements marked with data attribute "data-animated"
          const elements = document.querySelectorAll<HTMLElement>('[data-animated="true"]');
          // console.log('elements found:', elements.length);

          let animationsToUpgrade: Animation[] = [];

          elements.forEach((el, k) => {
            // Get all animations related to element
            const animations = el.getAnimations?.() || [];
            // console.log(`animations found(${k}):`, animations.length);
            animationsToUpgrade = animationsToUpgrade.concat(animations);
          });

          if (animationsToUpgrade.length > 0) {
            requestAnimationFrame(() => {
              animationsToUpgrade.forEach((anim) => {
                // console.log('Upgrading animation:', anim);
                if (anim.playState === 'finished' || anim.playState === 'idle') {
                  anim.cancel(); // Reset the animation
                } 
                anim.play();
              });
            });
          }

          setStatus('polyfillApplied');
          return;
        } else {
          throw new Error('Failed to import the scroll-timeline-polyfill: window.ScrollTimeline is still not available');
        }
      } catch (error) {
        CodeBud.captureEvent('Failed to load the ScrollTimeline polyfill', { error, where: 'useScrollTimelinePolyfill hook' });
        Bugsnag.leaveBreadcrumb('Failed to load the ScrollTimeline polyfill', { error });
        Bugsnag.notify('useScrollTimelinePolyfill failure');
        console.error('Failed to load the ScrollTimeline polyfill:', error);
        setStatus('polyfillApplyingFailed');
        return;
      }
    };
    
    loadPolyfill();
  }, []);

  return status;
};
```

- You may (and most likely will) want to apply polyfill inside of specific page / layout that would be server-side. In order to do this I recommend you simple Headless client-side component:
```tsx
'use client';

import { useScrollTimelinePolyfill } from '~/hooks/useScrollTimelinePolyfill';

export type HeadlessEnableScrollTimelinePolyfillProps = {};

const HeadlessEnableScrollTimelinePolyfill: React.FC<HeadlessEnableScrollTimelinePolyfillProps> = ({}) => {
  useScrollTimelinePolyfill();

  return null;
};

export { HeadlessEnableScrollTimelinePolyfill };
```

And use it inside your page / layout like so:
```tsx
import { HeadlessEnableScrollTimelinePolyfill } from '~/components/Utils/HeadlessEnableScrollTimelinePolyfill';

export default async function Home({ params }: HomeProps) {
  return (
    <div className={s.container}>
      <HeadlessEnableScrollTimelinePolyfill /> 
    </div>
  );
}
```

## Useful tips
- scroll-timeline-polyfill does not yet support animation-range in viewport units (like vh), so you must use percents (%). If it hurts, I suggest using CSS @supports rule and changing animation-range to percents for browsers that do not support animation-timeline: scroll() only.
- I didn't manage to make this polyfill work with style prop in React, so scroll-driven-animation related rules should be described in CSS only.
- Make sure to describe all scroll-driven-animation related CSS rules inside a single CSS selector. This does not mean that all your animated blocks must be styled with single classname. Just make sure that animation related rules are listed inside of single selector.
- It seems that currently this polyfill can't parse CSS @media and @supports (and probably others) at-rules. So if you need, for example, change animation-range from vh to % for Safari only, I suggest you to pass value in % as default one, and then change in to vh for browsers that support animation-timeline: scroll(), like so:
```CSS
.slide0AnimationPreset {
  animation-timeline: scroll(root block);
  animation-fill-mode: both;
  animation-duration: auto;
  animation-timing-function: linear;
  animation-range: 4% 90%; /* example value */
  animation-name: slideLeftChangeWithoutAppearingAnimation;
}

@supports (animation-timeline: scroll()) {
  .slide0AnimationPreset {
    animation-range-start: 10vh; /* example value */
    animation-range-end: 110vh; /* example value */
  }
}
```
- polyfill seems to know only animation-range rule, animation-range-start and animation-range-end did now work for me if polyfill was applied.

# Scroll-timeline Polyfill (original ReadMe begins)

A polyfill of ScrollTimeline and ViewTimeline as defined by the [spec](https://drafts.csswg.org/scroll-animations-1/).

View a [cool demo showing its usage](https://flackr.github.io/scroll-timeline/demo/parallax/)!

# Usage

To use this polyfill, import the module into your site and you can start creating animations that use a `ScrollTimeline` or `ViewTimeline`.

```js
import 'https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js';

document.getElementById('parallax').animate(
    { transform: ['translateY(0)', 'translateY(100px)']},
    { fill: 'both',
      timeline: new ScrollTimeline({
        source: document.documentElement,
      }),
      rangeStart: new CSSUnitValue(0, 'px'),
      rangeEnd: new CSSUnitValue(200, 'px'),
    });
```

Also works with CSS Animations that use a `view-timeline` or `scroll-timeline`

```html
<script src="https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js"></script>
```

```css
@keyframes parallax-effect {
  to { transform: translateY(100px) }
}
#parallax {
  animation: parallax-effect linear both;
  animation-timeline: scroll(block root);
  animation-range: 0px 200px;
}
```

Please ensure your CSS is hosted on the same domain as your website or included directly on the page within a <style> tag.

If you are loading stylesheets from other origins, the polyfill might not be able to fetch and apply them correctly, due to browser security restrictions.

For more details on and use-cases of scroll-driven animations, please refer to [https://developer.chrome.com/articles/scroll-driven-animations/](https://developer.chrome.com/articles/scroll-driven-animations/) and [https://scroll-driven-animations.style/](https://scroll-driven-animations.style/)

# Contributing
 
### 1. Polyfill dev 

Running a dev environment

```shell script
npm i
npm run dev 
```

Then open the browser `http://localhost:3000`, choose one of the demos (test) to see how your changes. 

### 2. Configure & Run Tests

Test configurations are available in: `test/tests.config.json` that file includes:

1. polyfillFiles: an array of our JS shim / polyfill files, those will be injected in WPT tests files.
2. harnessTests: an array of WPT harness tests we want to test the polyfill against.
3. browsers.local: Browser our local selenium-webdriver will test against
4. browsers.sauce: Browser our local selenium-webdriver will test against in Saucelabs / CI environment.   

#### Run the tests locally

Simple test will serve the WPT tests folder and intercepts requests, if the request path matches a harness test we are interested in polyfilling, it will inject the polyfill.

*Required environment variables:*

```dotenv
WPT_DIR=test/wpt #defaults to test/wpt
WPT_SERVER_PORT=8081 # choose any port available on your machine
```

*Command*

```shell script
npm run test:simple
```

Go to `localhost:8081/scroll-animations/current-time-nan.html` as an example.

#### Run the tests via Web Driver

##### Local web driver

*Required environment variables:*

```dotenv
WPT_DIR=test/wpt #defaults to test/wpt
WPT_SERVER_PORT=8081 # choose any port available on your machine
LOCAL_BROWSER=chrome # choose one of 'chrome', 'edge', 'firefox', 'safari'
LOCAL_WEBDRIVER_BIN=? #/path/to/webdriver-binaries
```

*Command*

```shell script
npm run test:wpt
```

##### SauceLabs / CI

*Required environment variables:*

```dotenv
TEST_ENV=sauce
WPT_DIR=test/wpt #defaults to test/wpt
WPT_SERVER_PORT=8081 # choose any port available on your machine
SC_TUNNEL_ID=sc-wpt-tunnel # please specify 'sc-wpt-tunnel' as a SauceConnect Proxy Tunnel ID

SAUCE_NAME=<secret> # Your saucelabs account username
SAUCE_KEY=<secret> # Your API key
```

*Command*

```shell script
TEST_ENV=sauce npm run test:wpt
```

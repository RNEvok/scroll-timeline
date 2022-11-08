!function(){function e(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function n(n,t,i){return t&&e(n.prototype,t),i&&e(n,i),n}function t(){return(t=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e}).apply(this,arguments)}function i(e,n){e.prototype=Object.create(n.prototype),e.prototype.constructor=e,r(e,n)}function r(e,n){return(r=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function o(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,i=new Array(n);t<n;t++)i[t]=e[t];return i}function l(e,n){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(t)return(t=t.call(e)).next.bind(t);if(Array.isArray(e)||(t=function(e,n){if(e){if("string"==typeof e)return o(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?o(e,n):void 0}}(e))||n&&e&&"number"==typeof e.length){t&&(e=t);var i=0;return function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}!function(){var e,t=new WeakMap;function r(e){for(var n,t=[],i=0;i<e.length;i++)t[i]="number"==typeof(n=e[i])?new CSSUnitValue(n,"number"):n;return t}var a=function(){function e(e,n,i,a){t.set(this,{values:r(e),operator:n,name:i||n,delimiter:a||", "})}return e.prototype.toString=function(){var e=t.get(this);return e.name+"("+e.values.join(e.delimiter)+")"},n(e,[{key:"operator",get:function(){return t.get(this).operator}},{key:"values",get:function(){return t.get(this).values}}]),e}(),o=((e={CSSUnitValue:function(){function e(e,n){t.set(this,{value:e,unit:n})}return e.prototype.toString=function(){var e=t.get(this);return""+e.value+function(e){switch(e){case"percent":return"%";case"number":return"";default:return e.toLowerCase()}}(e.unit)},n(e,[{key:"value",get:function(){return t.get(this).value},set:function(e){t.get(this).value=e}},{key:"unit",get:function(){return t.get(this).unit}}]),e}(),CSSKeywordValue:function(){function e(e){this.value=e}return e.prototype.toString=function(){return this.value.toString()},e}(),CSSMathSum:function(e){function n(n){return e.call(this,arguments,"sum","calc"," + ")||this}return i(n,e),n}(a),CSSMathProduct:function(e){function n(n){return e.call(this,arguments,"product","calc"," * ")||this}return i(n,e),n}(a),CSSMathNegate:function(e){function n(n){return e.call(this,[arguments[0]],"negate","-")||this}return i(n,e),n}(a)}).CSSMathNegate=function(e){function n(n){return e.call(this,[1,arguments[0]],"invert","calc"," / ")||this}return i(n,e),n}(a),e.CSSMathMax=function(e){function n(){return e.call(this,arguments,"max")||this}return i(n,e),n}(a),e.CSSMathMin=function(e){function n(){return e.call(this,arguments,"min")||this}return i(n,e),n}(a),e);if(!window.CSS&&!Reflect.defineProperty(window,"CSS",{value:{}}))throw Error("Error installing CSSOM support");for(var l in window.CSSUnitValue||["number","percent","em","ex","px","cm","mm","in","pt","pc","Q","vw","vh","vmin","vmax","rems","ch","deg","rad","grad","turn","ms","s","Hz","kHz","dppx","dpi","dpcm","fr"].forEach(function(e){if(!Reflect.defineProperty(CSS,e,{value:function(n){return new CSSUnitValue(n,e)}}))throw Error("Error installing CSS."+e)}),o)if(!(l in window)&&!Reflect.defineProperty(window,l,{value:o[l]}))throw Error("Error installing CSSOM support for "+l)}(),new CSSKeywordValue("auto");var s=new WeakMap;function u(e){return e===document.scrollingElement?document:e}function c(e){f(e);var n=s.get(e).animations;if(0!==n.length)for(var t=e.currentTime,i=0;i<n.length;i++)n[i].tickAnimation(t)}function m(e,n){if(!e)return null;var t="horizontal-tb"==getComputedStyle(e).writingMode,i=e.scrollTop;return("horizontal"==n||"inline"==n&&t||"block"==n&&!t)&&(i=Math.abs(e.scrollLeft)),i}function f(e){if(e instanceof N){var n=e.subject;n&&"none"!=getComputedStyle(n).display?h(e,E(n)):h(e,null)}else!function(e){var n=s.get(e);n.anonymousSource&&h(e,y(n.anonymousSource,n.anonymousTarget))}(e)}function h(e,n){var t=s.get(e),i=t.source,r=t.scrollListener;if(i!=n&&(i&&r&&u(i).removeEventListener("scroll",r),s.get(e).source=n,n)){var a=function(){c(e)};u(n).addEventListener("scroll",a),t.scrollListener=a}}function d(e,n){for(var t=s.get(e).animations,i=0;i<t.length;i++)t[i].animation==n&&t.splice(i,1)}function p(e,n,t){for(var i=s.get(e).animations,r=0;r<i.length;r++)if(i[r].animation==n)return;i.push({animation:n,tickAnimation:t}),c(e)}var v=function(){function e(e){s.set(this,{source:null,orientation:"block",anonymousSource:e?e.anonymousSource:null,anonymousTarget:e?e.anonymousTarget:null,subject:null,inset:e?e.inset:null,animations:[],scrollListener:null}),h(this,e&&void 0!==e.source?e.source:document.scrollingElement),this.orientation=e&&e.orientation||"block",c(this)}return n(e,[{key:"source",get:function(){return s.get(this).source},set:function(e){h(this,e),c(this)}},{key:"orientation",get:function(){return s.get(this).orientation},set:function(e){if(-1===["block","inline","horizontal","vertical"].indexOf(e))throw TypeError("Invalid orientation");s.get(this).orientation=e,c(this)}},{key:"duration",get:function(){return CSS.percent(100)}},{key:"phase",get:function(){var e=this.source;if(!e)return"inactive";var n=getComputedStyle(e);return"none"==n.display?"inactive":e==document.scrollingElement||"visible"!=n.overflow&&"clip"!=n.overflow?"active":"inactive"}},{key:"currentTime",get:function(){var e=this.source;if(!e)return null;if("inactive"==this.phase)return null;var n=this.orientation,t=m(e,n),i=function(e,n){var t="horizontal-tb"==getComputedStyle(e).writingMode;return"block"===n?n=t?"vertical":"horizontal":"inline"===n&&(n=t?"horizontal":"vertical"),"vertical"===n?e.scrollHeight-e.clientHeight:"horizontal"===n?e.scrollWidth-e.clientWidth:void 0}(e,n);return i>0?CSS.percent(100*t/i):CSS.percent(100)}},{key:"__polyfill",get:function(){return!0}}]),e}();function g(e,n){for(var t=e.parentElement;null!=t;){if(n(t))return t;t=t.parentElement}}function y(e,n){return"root"==e?document.scrollingElement:E(n)}function T(e){switch(getComputedStyle(e).display){case"block":case"inline-block":case"list-item":case"table":case"table-caption":case"flow-root":case"flex":case"grid":return!0}return!1}function S(e){var n=getComputedStyle(e);return"none"!=n.transform||"none"!=n.perspective||"transform"==n.willChange||"perspective"==n.willChange||"none"!=n.filter||"filter"==n.willChange||"none"!=n.backdropFilter}function b(e){return"static"!=getComputedStyle(e).position||S(e)}function k(e){switch(getComputedStyle(e).position){case"static":case"relative":case"sticky":return g(e,T);case"absolute":return g(e,b);case"fixed":return g(e,S)}}function E(e){if(e){for(;e=k(e);)switch(getComputedStyle(e)["overflow-x"]){case"auto":case"scroll":case"hidden":return e==document.body&&"visible"==getComputedStyle(document.scrollingElement).overflow?document.scrollingElement:e}return document.scrollingElement}}function w(e,n){var t=s.get(e);return"inactive"===e.phase?null:e instanceof N?x(n,e.source,e.subject,t.orientation,t.inset):null}function x(e,n,t,i,r){for(var a=0,o=0,l=t,s=n.offsetParent;l&&l!=s;)o+=l.offsetLeft,a+=l.offsetTop,l=l.offsetParent;o-=n.offsetLeft+n.clientLeft,a-=n.offsetTop+n.clientTop;var u=getComputedStyle(n),c="horizontal-tb"==u.writingMode,m=void 0,f=void 0,h=void 0;"horizontal"==i||"inline"==i&&c||"block"==i&&!c?(m=t.clientWidth,f=o,("rtl"==u.direction||"vertical-rl"==u.writingMode)&&(f+=n.scrollWidth-n.clientWidth),h=n.clientWidth):(m=t.clientHeight,f=a,h=n.clientHeight);var d=function(e,n){var t={start:0,end:0};if(!e)return t;var i=e.split(" "),r=[];if(i.forEach(function(e){e.endsWith("%")?r.push(n/100*parseFloat(e)):e.endsWith("px")?r.push(parseFloat(e)):"auto"===e&&r.push(0)}),r.length>2)throw TypeError("Invalid inset");return 1==r.length?(t.start=r[0],t.end=r[0]):2==r.length&&(t.start=r[0],t.end=r[1]),t}(r,h),p=f-h+d.end,v=f+m-d.start,g=p+m,y=v-m,T=Math.min(g,y),S=Math.max(g,y),b=void 0,k=void 0;switch(e){case"cover":b=p,k=v;break;case"contain":b=T,k=S;break;case"enter":b=p,k=T;break;case"exit":b=S,k=v}return{start:b,end:k}}function I(e,n,t){return M(w(e,n),t,w(e,"cover"))}function M(e,n,t){return e&&t?(n.value/100*(e.end-e.start)+e.start-t.start)/(t.end-t.start):0}var N=function(e){function t(n){var t;return n.axis&&(n.orientation=n.axis),t=e.call(this,n)||this,s.get(a(t)).subject=n&&n.subject?n.subject:void 0,f(a(t)),c(a(t)),t}return i(t,e),n(t,[{key:"source",get:function(){return f(this),s.get(this).source},set:function(e){throw new Error("Cannot set the source of a view timeline")}},{key:"subject",get:function(){return s.get(this).subject}},{key:"axis",get:function(){return s.get(this).orientation}},{key:"currentTime",get:function(){var e=null,n=m(this.source,this.orientation);if(n==e)return e;var t=w(this,"cover");return t?CSS.percent((n-t.start)/(t.end-t.start)*100):e}}]),t}(v),R=window.Element.prototype.animate,P=window.Animation,A=["enter","exit","cover","contain"],C=function(){function e(){var e=this;this.state="pending",this.nativeResolve=this.nativeReject=null,this.promise=new Promise(function(n,t){e.nativeResolve=n,e.nativeReject=t})}var n=e.prototype;return n.resolve=function(e){this.state="resolved",this.nativeResolve(e)},n.reject=function(e){this.state="rejected",this.promise.catch(function(){}),this.nativeReject(e)},e}();function O(e){e.readyPromise=new C,requestAnimationFrame(function(){null!==e.timeline.currentTime&&Q(e)})}function L(){return new DOMException("The user aborted a request","AbortError")}function W(e,n){if(null===n)return n;if("number"!=typeof n)throw new DOMException("Unexpected value: "+n+".  Cannot convert to CssNumberish","InvalidStateError");var t=F(e);return CSS.percent(t?100*n/t:0)}function _(e,n){if(e.timeline){if(null===n)return n;if("percent"===n.unit){var t=F(e);return n.value*t/100}throw new DOMException("CSSNumericValue must be a percentage for progress based animations.","NotSupportedError")}if(null==n||"number"==typeof n)return n;var i=n.to("ms");if(convertTime)return i.value;throw new DOMException("CSSNumericValue must be either a number or a time value for time based animations.","InvalidStateError")}function j(e){if(e.finishedPromise&&"pending"==e.finishedPromise.state&&"finished"==e.proxy.playState){e.finishedPromise.resolve(e.proxy),e.animation.pause();var n=new CustomEvent("finish",{detail:{currentTime:e.proxy.currentTime,timelineTime:e.proxy.timeline.currentTime}});Object.defineProperty(n,"currentTime",{get:function(){return this.detail.currentTime}}),Object.defineProperty(n,"timelineTime",{get:function(){return this.detail.timelineTime}}),requestAnimationFrame(function(){queueMicrotask(function(){e.animation.dispatchEvent(n)})})}}function V(e){return null!==e.pendingPlaybackRate?e.pendingPlaybackRate:e.animation.playbackRate}function D(e){null!==e.pendingPlaybackRate&&(e.animation.playbackRate=e.pendingPlaybackRate,e.pendingPlaybackRate=null)}function z(e){if(!e.timeline)return null;var n=_(e,e.timeline.currentTime);if(null===n)return null;if(null===e.startTime)return null;var t=(n-e.startTime)*e.animation.playbackRate;return-0==t&&(t=0),t}function U(e,n){if(!e.timeline)return null;var t=_(e,e.timeline.currentTime);return null==t?null:t-n/e.animation.playbackRate}function H(e,n,t){if(e.timeline){var i=n?_(e,e.proxy.currentTime):z(e);if(i&&null!=e.startTime&&!e.proxy.pending){var r=V(e),a=F(e),o=e.previousCurrentTime;r>0&&i>=a?((null===o||o<a)&&(o=a),e.holdTime=n?i:o):r<0&&i<=0?((null==o||o>0)&&(o=0),e.holdTime=n?i:o):0!=r&&(n&&null!==e.holdTime&&(e.startTime=U(e,e.holdTime)),e.holdTime=null)}B(e),e.previousCurrentTime=_(e,e.proxy.currentTime),"finished"==e.proxy.playState?(e.finishedPromise||(e.finishedPromise=new C),"pending"==e.finishedPromise.state&&(t?j(e):Promise.resolve().then(function(){j(e)}))):(e.finishedPromise&&"resolved"==e.finishedPromise.state&&(e.finishedPromise=new C),"paused"!=e.animation.playState&&e.animation.pause())}}function F(e){var n=function(e){var n=e.proxy.effect.getTiming();return e.normalizedTiming||n}(e);return Math.max(0,n.delay+n.endDelay+n.iterations*n.duration)}function B(e){if(e.timeline)if(null!==e.startTime){var n=e.timeline.currentTime;if(null==n)return;K(e,(_(e,n)-e.startTime)*e.animation.playbackRate)}else null!==e.holdTime&&K(e,e.holdTime)}function K(e,n){var t=e.timeline,i=e.animation.playbackRate;e.animation.currentTime=n+(t.currentTime&&t.currentTime.value==(i<0?0:100)?i<0?.001:-.001:0)}function q(e,n){if(e.timeline){var t="paused"==e.proxy.playState&&e.proxy.pending,i=!1,r=null,a=_(e,e.proxy.currentTime);e.resetCurrentTimeOnResume&&(a=null,e.resetCurrentTimeOnResume=!1);var o=V(e),l=F(e);if(o>0&&n&&(null==a||a<0||a>=l))r=0;else if(o<0&&n&&(null==a||a<=0||a>l)){if(Infinity==l)return void e.animation.play();r=l}else 0==o&&null==a&&(r=0);null!=r&&(e.startTime=r,e.holdTime=null,D(e)),p(e.timeline,e.animation,Y.bind(e.proxy)),e.holdTime&&(e.startTime=null),e.pendingTask&&(e.pendingTask=null,i=!0),(null!==e.holdTime||null!==r||t||null!==e.pendingPlaybackRate)&&(e.readyPromise&&!i&&(e.readyPromise=null),B(e),e.readyPromise||O(e),e.pendingTask="play",H(e,!1,!1))}}function Y(e){var n=G.get(this);if(null!=e){n.pendingTask&&Q(n);var t=this.playState;"running"!=t&&"finished"!=t||(K(n,(_(n,e)-_(n,this.startTime))*this.playbackRate),"finished"==t&&0!=V(n)&&(n.holdTime=null),H(n,!1,!1))}else"idle"!=n.animation.playState&&n.animation.cancel()}function Q(e){"pause"==e.pendingTask?function(e){var n=_(e,e.timeline.currentTime);null!=e.startTime&&null==e.holdTime&&(e.holdTime=(n-e.startTime)*e.animation.playbackRate),D(e),e.startTime=null,e.readyPromise.resolve(e.proxy),H(e,!1,!1),B(e),e.pendingTask=null}(e):"play"==e.pendingTask&&function(e){var n=_(e,e.timeline.currentTime);if(null!=e.holdTime)D(e),0==e.animation.playbackRate?e.startTime=n:(e.startTime=n-e.holdTime/e.animation.playbackRate,e.holdTime=null);else if(null!==e.startTime&&null!==e.pendingPlaybackRate){var t=(n-e.startTime)*e.animation.playbackRate;D(e);var i=e.animation.playbackRate;0==i?(e.holdTime=null,e.startTime=n):e.startTime=n-t/i}e.readyPromise&&"pending"==e.readyPromise.state&&e.readyPromise.resolve(e.proxy),H(e,!1,!1),B(e),e.pendingTask=null}(e)}var G=new WeakMap,X=function(){function e(e,n,t){void 0===t&&(t={});var i=e instanceof P?e:new P(e,a),r=n instanceof v,a=r?void 0:n;G.set(this,{animation:i,timeline:r?n:void 0,playState:r?"idle":null,readyPromise:null,finishedPromise:null,startTime:null,holdTime:null,previousCurrentTime:null,resetCurrentTimeOnResume:!1,pendingPlaybackRate:null,pendingTask:null,specifiedTiming:null,normalizedTiming:null,effect:null,timeRange:n instanceof ViewTimeline?ee(t):null,proxy:this})}var t=e.prototype;return t.finish=function(){var e=G.get(this);if(e.timeline){var n=V(e),t=F(e);if(0==n)throw new DOMException("Cannot finish Animation with a playbackRate of 0.","InvalidStateError");if(n>0&&Infinity==t)throw new DOMException("Cannot finish Animation with an infinite target effect end.","InvalidStateError");D(e);var i=n<0?0:t;this.currentTime=W(e,i);var r=_(e,e.timeline.currentTime);null===e.startTime&&null!==r&&(e.startTime=r-i/e.animation.playbackRate),"pause"==e.pendingTask&&null!==e.startTime&&(e.holdTime=null,e.pendingTask=null,e.readyPromise.resolve(this)),"play"==e.pendingTask&&null!==e.startTime&&(e.pendingTask=null,e.readyPromise.resolve(this)),H(e,!0,!0)}else e.animation.finish()},t.play=function(){var e=G.get(this);e.timeline?q(e,!0):e.animation.play()},t.pause=function(){var e=G.get(this);if(e.timeline){if("paused"!=this.playState){var n=null,t=e.animation.playbackRate,i=F(e);if(null===e.animation.currentTime)if(t>=0)n=0;else{if(Infinity==i)return void e.animation.pause();n=i}null!==n&&(e.startTime=n),"play"==e.pendingTask?e.pendingTask=null:e.readyPromise=null,e.readyPromise||O(e),e.pendingTask="pause"}}else e.animation.pause()},t.reverse=function(){var e=G.get(this),n=V(e),t=e.resetCurrentTimeOnResume?null:_(e,this.currentTime),i=Infinity==F(e),r=0!=n&&(n<0||t>0||!i);if(!e.timeline||!r)return r&&(e.pendingPlaybackRate=-V(e)),void e.animation.reverse();if("inactive"==e.timeline.phase)throw new DOMException("Cannot reverse an animation with no active timeline","InvalidStateError");this.updatePlaybackRate(-n),q(e,!0)},t.updatePlaybackRate=function(e){var n=G.get(this);if(n.pendingPlaybackRate=e,n.timeline){if(!n.readyPromise||"pending"!=n.readyPromise.state)switch(this.playState){case"idle":case"paused":D(n);break;case"finished":var t=_(n,n.timeline.currentTime),i=null!==t?(t-n.startTime)*n.animation.playbackRate:null;n.startTime=0==e?t:null!=t&&null!=i?(t-i)/e:null,D(n),H(n,!1,!1),B(n);break;default:q(n,!1)}}else n.animation.updatePlaybackRate(e)},t.persist=function(){G.get(this).animation.persist()},t.cancel=function(){var e=G.get(this);e.timeline?("idle"!=this.playState&&(function(e){e.pendingTask&&(e.pendingTask=null,D(e),e.readyPromise.reject(L()),O(e),e.readyPromise.resolve(e.proxy))}(e),e.finishedPromise&&"pending"==e.finishedPromise.state&&e.finishedPromise.reject(L()),e.finishedPromise=new C,e.animation.cancel()),e.startTime=null,e.holdTime=null,d(e.timeline,e.animation)):e.animation.cancel()},t.addEventListener=function(e,n,t){G.get(this).animation.addEventListener(e,n,t)},t.removeEventListener=function(e,n,t){G.get(this).animation.removeEventListener(e,n,t)},t.dispatchEvent=function(e){G.get(this).animation.dispatchEvent(e)},n(e,[{key:"effect",get:function(){var e=G.get(this);return e.timeline?(e.effect||(e.effect=function(e){var n=e.animation.effect,t=n.updateTiming,i={apply:function(t){n.getTiming();var i=t.apply(n);if(e.timeline){i.localTime=W(e,i.localTime),i.endTime=W(e,i.endTime),i.activeDuration=W(e,i.activeDuration);var r=F(e);i.duration=r?CSS.percent(100*(i.iterations?(r-i.delay-i.endDelay)/i.iterations:0)/r):CSS.percent(0),void 0===e.timeline.currentTime&&(i.localTime=null)}return i}},r={apply:function(i,r){var a=1e5;if(e.specifiedTiming)return e.specifiedTiming;e.specifiedTiming=i.apply(n);var o,l,s=Object.assign({},e.specifiedTiming),u=!1;return e.timeline instanceof ViewTimeline&&(o=function(e){if(!(e.timeline instanceof ViewTimeline))return 0;var n=e.timeRange.start;return I(e.timeline,n.name,n.offset)}(e),l=function(e){if(!(e.timeline instanceof ViewTimeline))return 0;var n=e.timeRange.end;return 1-I(e.timeline,n.name,n.offset)}(e),u=!0),(null===s.duration||"auto"===s.duration||u)&&e.timeline&&(u?(s.delay=o*a,s.endDelay=l*a):(s.delay=0,s.endDelay=0),s.duration=s.iterations?((s.iterations?a:0)-s.delay-s.endDelay)/s.iterations:0,t.apply(n,[s])),e.normalizedTiming=s,e.specifiedTiming}},a={apply:function(t,i,r){if(e.timeline){var a=r[0];if(Infinity===a.duration)throw TypeError("Effect duration cannot be Infinity when used with Scroll Timelines");if(Infinity===a.iterations)throw TypeError("Effect iterations cannot be Infinity when used with Scroll Timelines")}e.specifiedTiming&&t.apply(n,[e.specifiedTiming]),t.apply(n,r),e.specifiedTiming=null}},o=new Proxy(n,{get:function(e,t){var i=e[t];return"function"==typeof i?i.bind(n):i},set:function(e,n,t){return e[n]=t,!0}});return o.getComputedTiming=new Proxy(n.getComputedTiming,i),o.getTiming=new Proxy(n.getTiming,r),o.updateTiming=new Proxy(n.updateTiming,a),o}(e)),e.effect):e.animation.effect},set:function(e){G.get(this).animation.effect=e,details.effect=null}},{key:"timeline",get:function(){var e=G.get(this);return e.timeline||e.animation.timeline},set:function(e){var n=this.timeline;if(n!=e){var t=this.playState,i=this.currentTime,r=G.get(this),a=F(r),o=a>0?_(r,i)/a:0,l=n instanceof v,s=e instanceof v;r.resetCurrentTimeOnResume=!1;var u=this.pending;if(l&&d(r.timeline,r.animation),s){r.timeline=e,D(r);var c=r.animation.playbackRate>=0?0:F(r);switch(t){case"running":case"finished":r.startTime=c,p(r.timeline,r.animation,Y.bind(this));break;case"paused":r.resetCurrentTimeOnResume=!0,r.startTime=null,r.holdTime=_(r,CSS.percent(100*o));break;default:r.holdTime=null,r.startTime=null}return u&&(r.readyPromise&&"resolved"!=r.readyPromise.state||O(r),r.pendingTask="paused"==t?"pause":"play"),null!==r.startTime&&(r.holdTime=null),void H(r,!1,!1)}if(r.animation.timeline!=e)throw TypeError("Unsupported timeline: "+e);if(d(r.timeline,r.animation),r.timeline=null,l)switch(null!==i&&(r.animation.currentTime=o*F(r)),t){case"paused":r.animation.pause();break;case"running":case"finished":r.animation.play()}}}},{key:"startTime",get:function(){var e=G.get(this);return e.timeline?W(e,e.startTime):e.animation.startTime},set:function(e){var n=G.get(this);if(e=_(n,e),n.timeline){null==_(n,n.timeline.currentTime)&&null!=n.startTime&&(n.holdTime=null,B(n));var t=_(n,this.currentTime);D(n),n.startTime=e,n.resetCurrentTimeOnResume=!1,n.holdTime=null!==n.startTime&&0!=n.animation.playbackRate?null:t,n.pendingTask&&(n.pendingTask=null,n.readyPromise.resolve(this)),H(n,!0,!1),B(n)}else n.animation.startTime=e}},{key:"currentTime",get:function(){var e=G.get(this);return e.timeline?W(e,null!=e.holdTime?e.holdTime:z(e)):e.animation.currentTime},set:function(e){var n=G.get(this);if(e=_(n,e),n.timeline&&null!=e){var t=n.timeline.phase;null!==n.holdTime||null===n.startTime||"inactive"==t||0==n.animation.playbackRate?n.holdTime=e:n.startTime=U(n,e),n.resetCurrentTimeOnResume=!1,"inactive"==t&&(n.startTime=null),n.previousCurrentTime=null,"pause"==n.pendingTask&&(n.holdTime=e,D(n),n.startTime=null,n.pendingTask=null,n.readyPromise.resolve(this)),H(n,!0,!1)}else n.animation.currentTime=e}},{key:"playbackRate",get:function(){return G.get(this).animation.playbackRate},set:function(e){var n=G.get(this);if(n.timeline){n.pendingPlaybackRate=null;var t=this.currentTime;n.animation.playbackRate=e,null!==t&&(this.currentTime=t)}else n.animation.playbackRate=e}},{key:"playState",get:function(){var e=G.get(this);if(!e.timeline)return e.animation.playState;var n=_(e,this.currentTime);if(null===n&&null===e.startTime&&null==e.pendingTask)return"idle";if("pause"==e.pendingTask||null===e.startTime&&"play"!=e.pendingTask)return"paused";if(null!=n){if(e.animation.playbackRate>0&&n>=F(e))return"finished";if(e.animation.playbackRate<0&&n<=0)return"finished"}return"running"}},{key:"replaceState",get:function(){return G.get(this).animation.pending}},{key:"pending",get:function(){var e=G.get(this);return e.timeline?!!e.readyPromise&&"pending"==e.readyPromise.state:e.animation.pending}},{key:"id",get:function(){return G.get(this).animation.id}},{key:"onfinish",get:function(){return G.get(this).animation.onfinish},set:function(e){G.get(this).animation.onfinish=e}},{key:"oncancel",get:function(){return G.get(this).animation.oncancel},set:function(e){G.get(this).animation.oncancel=e}},{key:"onremove",get:function(){return G.get(this).animation.onremove},set:function(e){G.get(this).animation.onremove=e}},{key:"finished",get:function(){var e=G.get(this);return e.timeline?(e.finishedPromise||(e.finishedPromise=new C),e.finishedPromise.promise):e.animation.finished}},{key:"ready",get:function(){var e=G.get(this);return e.timeline?(e.readyPromise||(e.readyPromise=new C,e.readyPromise.resolve(this)),e.readyPromise.promise):e.animation.ready}}]),e}();function $(e,n){if(!e)return null;var t=e.split(" ");if(!A.includes(t[0])||2==t.length&&!t[1].endsWith("%"))throw TypeError("Invalid animation delay");var i=n;if(2==t.length){var r=parseFloat(t[1]);if(Number.isNaN(r))throw TypeError('"'+t[1]+'" is not a valid percentage for animation delay');i=CSS.percent(r)}return{name:t[0],offset:i}}function J(){return{name:"cover",offset:CSS.percent(0)}}function Z(){return{name:"cover",offset:CSS.percent(100)}}function ee(e){var n=ne(e["animation-time-range"]);return e["animation-delay"]&&(n.start=$(e["animation-delay"],J().offset)),e["animation-end-delay"]&&(n.end=$(e["animation-end-delay"],Z().offset)),n}function ne(e){var n={start:J(),end:Z()};if(!e)return n;var t=e.split(" "),i=[],r=[];if(t.forEach(function(e){e.endsWith("%")?r.push(parseFloat(e)):i.push(e)}),i.length>2||r.length>2||1==r.length)throw TypeError("Invalid time range");return i.length&&(n.start.name=i[0],n.end.name=i.length>1?i[1]:i[0]),r.length>1&&(n.start.offset=CSS.percent(r[0]),n.end.offset=CSS.percent(r[1])),n}var te={IDENTIFIER:/[\w\\\@_-]+/g,WHITE_SPACE:/\s*/g,NUMBER:/^[0-9]+/,TIME:/^[0-9]+(s|ms)/,VIEW_TIMELINE:/view-timeline\s*:([^;}]+)/,VIEW_TIMELINE_NAME:/view-timeline-name\s*:([^;}]+)/,VIEW_TIMELINE_AXIS:/view-timeline-axis\s*:([^;}]+)/,VIEW_TIMELINE_INSET:/view-timeline-inset\s*:([^;}]+)/,ANIMATION_TIMELINE:/animation-timeline\s*:([^;}]+)/,ANIMATION_DELAY:/animation-delay\s*:([^;}]+)/,ANIMATION_END_DELAY:/animation-end-delay\s*:([^;}]+)/,ANIMATION_TIME_RANGE:/animation-time-range\s*:([^;}]+)/,ANIMATION_NAME:/animation-name\s*:([^;}]+)/,ANIMATION:/animation\s*:([^;}]+)/,SOURCE_ELEMENT:/selector\(#([^)]+)\)/,ANONYMOUS_SCROLL:/scroll\(([^)]*)\)/},ie=["block","inline","vertical","horizontal"],re=["nearest","root"],ae=new(function(){function e(){this.cssRulesWithTimelineName=[],this.scrollTimelineOptions=new Map,this.nextAnonymousTimelineNameIndex=0,this.anonymousScrollTimelineOptions=new Map,this.subjectSelectorToViewTimeline=[],this.keyframeNamesSelectors=new Map}var n=e.prototype;return n.transpileStyleSheet=function(e,n,t){for(var i={sheetSrc:e,index:0,name:t};i.index<i.sheetSrc.length&&(this.eatWhitespace(i),!(i.index>=i.sheetSrc.length));)if(this.lookAhead("/*",i))for(;this.lookAhead("/*",i);)this.eatComment(i),this.eatWhitespace(i);else if(this.lookAhead("@scroll-timeline",i)){var r=this.parseScrollTimeline(i).scrollTimeline;n&&this.scrollTimelineOptions.set(r.name,r)}else{var a=this.parseQualifiedRule(i);if(!a)continue;n?this.parseKeyframesAndSaveNameMapping(a,i):this.handleScrollTimelineProps(a,i)}return i.sheetSrc},n.getAnimationTimelineOptions=function(e,n){for(var t=this.cssRulesWithTimelineName.length-1;t>=0;t--){var i=this.cssRulesWithTimelineName[t];if(n.matches(i.selector)&&(!i["animation-name"]||i["animation-name"]==e))return{"animation-timeline":i["animation-timeline"],"animation-delay":i["animation-delay"],"animation-end-delay":i["animation-end-delay"],"animation-time-range":i["animation-time-range"]}}return null},n.getSourceElement=function(e){var n=te.SOURCE_ELEMENT.exec(e);return n?document.getElementById(n[1]):"auto"===e?document.scrollingElement:null},n.getAnonymousScrollTimelineOptions=function(e,n){var t=this.anonymousScrollTimelineOptions.get(e);return t?{anonymousSource:t.source,anonymousTarget:n,source:y(t.source,n),orientation:t.orientation?t.orientation:"block"}:null},n.getScrollTimelineOptions=function(e,n){var i=this.getAnonymousScrollTimelineOptions(e,n);if(i)return i;var r=this.scrollTimelineOptions.get(e);if(null!=r&&r.source){var a=this.getSourceElement(r.source);return t({},a?{source:a}:{},"auto"!=r.orientation?{orientation:r.orientation}:{})}return null},n.findPreviousSiblingOrAncestorMatchingSelector=function(e,n){for(var t=e;t;){if(t.matches(n))return t;t=t.previousElementSibling||t.parentElement}return null},n.getViewTimelineOptions=function(e,n){for(var t=this.subjectSelectorToViewTimeline.length-1;t>=0;t--){var i=this.subjectSelectorToViewTimeline[t];if(i.name==e){var r=this.findPreviousSiblingOrAncestorMatchingSelector(n,i.selector);if(r)return{subject:r,axis:i.axis,inset:i.inset}}}return null},n.parseScrollTimeline=function(e){var n=e.index;this.assertString(e,"@scroll-timeline"),this.eatWhitespace(e);var t=this.parseIdentifier(e);this.eatWhitespace(e),this.assertString(e,"{"),this.eatWhitespace(e);for(var i={name:t,source:"auto",orientation:void 0};"}"!==this.peek(e);){var r=this.parseIdentifier(e);this.eatWhitespace(e),this.assertString(e,":"),this.eatWhitespace(e),i[r]=this.removeEnclosingDoubleQuotes(this.eatUntil(";",e)),this.assertString(e,";"),this.eatWhitespace(e)}this.assertString(e,"}");var a=e.index;return this.eatWhitespace(e),{scrollTimeline:i,startIndex:n,endIndex:a}},n.handleScrollTimelineProps=function(e,n){var t=this;if(!e.selector.includes("@keyframes")){var i=e.block.contents.includes("animation-name:"),r=e.block.contents.includes("animation-timeline:"),a=e.block.contents.includes("animation:");this.saveSubjectSelectorToViewTimeline(e);var o=[],l=[],s=!1;r&&(o=this.extractScrollTimelineNames(e.block.contents)),i&&(l=this.extractMatches(e.block.contents,te.ANIMATION_NAME)),r&&i||(a&&this.extractMatches(e.block.contents,te.ANIMATION).forEach(function(n){var i=t.extractTimelineName(n);i.timelineName&&o.push(i.timelineName);var a=t.extractAnimationName(n);a&&(i.timelineName||r)&&l.push(a),(i.timelineName||r)&&(t.hasDuration(n)||(e.block.contents=e.block.contents.replace(n," 1s "+n),s=!0)),i.toBeReplaced&&(e.block.contents=e.block.contents.replace(i.toBeReplaced," ".repeat(i.toBeReplaced.length)),s=!0)}),s&&this.replacePart(e.block.startIndex,e.block.endIndex,e.block.contents,n)),this.saveRelationInList(e,o,l)}},n.saveSubjectSelectorToViewTimeline=function(e){var n,t=e.block.contents.includes("view-timeline:"),i=e.block.contents.includes("view-timeline-name:"),r=e.block.contents.includes("view-timeline-axis:"),a=e.block.contents.includes("view-timeline-inset:");if(t||i){var o=[];if(t)for(var s,u=l(this.extractMatches(e.block.contents,te.VIEW_TIMELINE));!(s=u()).done;){parts=this.split(s.value);var c={selector:e.selector,name:"",inset:null};1==parts.length?c.name=parts[0]:2==parts.length&&(ie.includes(parts[0])?(c.axis=parts[0],c.name=parts[1]):(c.axis=parts[1],c.name=parts[0])),o.push(c)}if(i)for(var m=this.extractMatches(e.block.contents,te.VIEW_TIMELINE_NAME),f=0;f<m.length;f++)f<o.length?o[f].name=m[f]:o.push({selector:e.selector,name:m[f],inset:null});var h=[],d=[];a&&(h=this.extractMatches(e.block.contents,te.VIEW_TIMELINE_INSET)),r&&(d=(d=this.extractMatches(e.block.contents,te.VIEW_TIMELINE_AXIS)).filter(function(e){return ie.includes(e)}));for(var p=0;p<o.length;p++)h.length&&(o[p].inset=h[p%o.length]),d.length&&(o[p].axis=d[p%o.length]);(n=this.subjectSelectorToViewTimeline).push.apply(n,o)}},n.hasDuration=function(e){return e.split(" ").filter(function(e){return te.TIME.exec(e)}).length>=1},n.saveRelationInList=function(e,n,i){var r=e.block.contents.includes("animation-delay:"),a=e.block.contents.includes("animation-end-delay:"),o=e.block.contents.includes("animation-time-range:"),l=[],s=[],u=[];r&&(l=this.extractMatches(e.block.contents,te.ANIMATION_DELAY)),a&&(s=this.extractMatches(e.block.contents,te.ANIMATION_END_DELAY)),o&&(u=this.extractMatches(e.block.contents,te.ANIMATION_TIME_RANGE));for(var c=Math.max(n.length,i.length,l.length,s.length,u.length),m=0;m<c;m++)this.cssRulesWithTimelineName.push(t({selector:e.selector,"animation-timeline":n[m%n.length]},i.length?{"animation-name":i[m%i.length]}:{},l.length?{"animation-delay":l[m%l.length]}:{},s.length?{"animation-end-delay":s[m%s.length]}:{},u.length?{"animation-time-range":u[m%u.length]}:{}))},n.extractScrollTimelineNames=function(e){var n=this,t=te.ANIMATION_TIMELINE.exec(e)[1].trim(),i=[];return t.split(",").map(function(e){return e.trim()}).forEach(function(e){if(function(e){return e.startsWith("scroll")&&e.includes("(")}(e)){var t=n.saveAnonymousTimelineName(e);i.push(t)}else i.push(e)}),i},n.saveAnonymousTimelineName=function(e){var n=":t"+this.nextAnonymousTimelineNameIndex++;return this.anonymousScrollTimelineOptions.set(n,this.parseAnonymousTimeline(e)),n},n.parseAnonymousTimeline=function(e){var n=te.ANONYMOUS_SCROLL.exec(e);if(!n)return null;var t={};return n[1].split(" ").forEach(function(e){ie.includes(e)?t.orientation=e:re.includes(e)&&(t.source=e)}),t},n.extractAnimationName=function(e){return this.findMatchingEntryInContainer(e,this.keyframeNamesSelectors)},n.extractTimelineName=function(e){var n=null,t=null,i=te.ANONYMOUS_SCROLL.exec(e);if(i){var r=i[0];n=this.saveAnonymousTimelineName(r),t=r}else t=n=this.findMatchingEntryInContainer(e,this.scrollTimelineOptions);return{timelineName:n,toBeReplaced:t}},n.findMatchingEntryInContainer=function(e,n){var t=e.split(" ").filter(function(e){return n.has(e)});return t?t[0]:null},n.parseIdentifier=function(e){te.IDENTIFIER.lastIndex=e.index;var n=te.IDENTIFIER.exec(e.sheetSrc);if(!n)throw this.parseError(e,"Expected an identifier");return e.index+=n[0].length,n[0]},n.parseKeyframesAndSaveNameMapping=function(e,n){var t=this;if(e.selector.startsWith("@keyframes")){var i=this.replaceKeyframesAndGetMapping(e,n);e.selector.split(" ").forEach(function(e,n){n>0&&t.keyframeNamesSelectors.set(e,i)})}},n.replaceKeyframesAndGetMapping=function(e,n){var t=e.block.contents,i=function(e){for(var n=0,t=-1,i=[],r=0;r<e.length;r++)"{"==e[r]?n++:"}"==e[r]&&n--,1==n&&"{"!=e[r]&&"}"!=e[r]&&-1==t&&(t=r),2==n&&"{"==e[r]&&(i.push({start:t,end:r}),t=-1);return i}(t);if(0==i.length)return new Map;var r=new Map,a=!1,o=[];o.push(t.substring(0,i[0].start));for(var l=function(e){var n=t.substring(i[e].start,i[e].end),l=[];n.split(",").forEach(function(e){var n,t=e.split(" ").map(function(e){return e.trim()}).filter(function(e){return""!=e}).join(" "),i=r.size;r.set(i,t),l.push(i+"%"),n=t,A.some(function(e){return n.startsWith(e)})&&(a=!0)}),o.push(l.join(",")),o.push(e==i.length-1?t.substring(i[e].end):t.substring(i[e].end,i[e+1].start))},s=0;s<i.length;s++)l(s);return a?(e.block.contents=o.join(""),this.replacePart(e.block.startIndex,e.block.endIndex,e.block.contents,n),r):new Map},n.parseQualifiedRule=function(e){var n=e.index,t=this.parseSelector(e).trim();if(t)return{selector:t,block:this.eatBlock(e),startIndex:n,endIndex:e.index}},n.removeEnclosingDoubleQuotes=function(e){return e.substring('"'==e[0]?1:0,'"'==e[e.length-1]?e.length-1:e.length)},n.assertString=function(e,n){if(e.sheetSrc.substr(e.index,n.length)!=n)throw this.parseError(e,"Did not find expected sequence "+n);e.index+=n.length},n.replacePart=function(e,n,t,i){i.sheetSrc=i.sheetSrc.slice(0,e)+t+i.sheetSrc.slice(n),i.index>=n&&(i.index=e+t.length+(i.index-n))},n.eatComment=function(e){this.assertString(e,"/*"),this.eatUntil("*/",e,!0),this.assertString(e,"*/")},n.eatBlock=function(e){var n=e.index;this.assertString(e,"{");for(var t=1;0!=t;)this.lookAhead("/*",e)?this.eatComment(e):("{"===e.sheetSrc[e.index]?t++:"}"===e.sheetSrc[e.index]&&t--,this.advance(e));var i=e.index;return{startIndex:n,endIndex:i,contents:e.sheetSrc.slice(n,i)}},n.advance=function(e){if(e.index++,e.index>e.sheetSrc.length)throw this.parseError(e,"Advanced beyond the end")},n.eatUntil=function(e,n,t){void 0===t&&(t=!1);for(var i=n.index;!this.lookAhead(e,n);)this.advance(n);return t&&(n.sheetSrc=n.sheetSrc.slice(0,i)+" ".repeat(n.index-i)+n.sheetSrc.slice(n.index)),n.sheetSrc.slice(i,n.index)},n.parseSelector=function(e){var n=e.index;if(this.eatUntil("{",e),n===e.index)throw Error("Empty selector");return e.sheetSrc.slice(n,e.index)},n.eatWhitespace=function(e){te.WHITE_SPACE.lastIndex=e.index;var n=te.WHITE_SPACE.exec(e.sheetSrc);n&&(e.index+=n[0].length)},n.lookAhead=function(e,n){return n.sheetSrc.substr(n.index,e.length)==e},n.peek=function(e){return e.sheetSrc[e.index]},n.extractMatches=function(e,n,t){return void 0===t&&(t=","),n.exec(e)[1].trim().split(t).map(function(e){return e.trim()})},n.split=function(e){return e.split(" ").map(function(e){return e.trim()}).filter(function(e){return""!=e})},e}());function oe(e,n,t,i,r,a){return M(x(e,n,t,i,r),a,x("cover",n,t,i,r))}if(function(){if(!CSS.supports("animation-timeline: works")){!function(){function e(e){if(0!==e.innerHTML.trim().length){var n=ae.transpileStyleSheet(e.innerHTML,!0);n=ae.transpileStyleSheet(n,!1),e.innerHTML=n}}new MutationObserver(function(n){for(var t,i=l(n);!(t=i()).done;)for(var r,a=l(t.value.addedNodes);!(r=a()).done;){var o=r.value;o instanceof HTMLStyleElement&&e(o)}}).observe(document.documentElement,{childList:!0,subtree:!0}),document.querySelectorAll("style").forEach(function(n){return e(n)}),document.querySelectorAll("link").forEach(function(e){})}();var e=new WeakMap;window.addEventListener("animationstart",function(n){n.target.getAnimations().filter(function(e){return e.animationName===n.animationName}).forEach(function(t){e.has(n.target)||e.set(n.target,new Map);var i=e.get(n.target);if(!i.has(t.animationName)){var r=function(e,n,t){var i=ae.getAnimationTimelineOptions(n,t);if(!i)return null;var r=i["animation-timeline"];if(!r)return null;var a=ae.getScrollTimelineOptions(r,t)||ae.getViewTimelineOptions(r,t);return a?(a.subject&&function(e,n){var t=E(n.subject),i=n.axis||n.orientation,r=ae.keyframeNamesSelectors.get(e.animationName);if(r&&r.size){var a=[];e.effect.getKeyframes().forEach(function(e){var o=function(e,r){for(var a,o=null,s=l(e);!(a=s()).done;){var u=a.value,c=u[1];if(u[0]==100*r.offset){if("from"==c)o=0;else if("to"==c)o=100;else{var m=c.split(" ");o=1==m.length?parseFloat(m[0]):100*oe(m[0],t,n.subject,i,n.inset,CSS.percent(parseFloat(m[1])))}break}}return o}(r,e);null!==o&&o>=0&&o<=100&&(e.offset=o/100,a.push(e))});var o=a.sort(function(e,n){return e.offset<n.offset?-1:e.affset>n.offset?1:0});e.effect.setKeyframes(o)}}(e,a),{timeline:a.source?new v(a):new N(a),animOptions:i}):null}(t,t.animationName,n.target);i.set(t.animationName,r&&r.timeline&&t.timeline!=r.timeline?new X(t,r.timeline,r.animOptions):null)}var a=i.get(t.animationName);null!==a&&(t.pause(),a.play())})})}}(),[].concat(document.styleSheets).filter(function(e){return null!==e.href}).length&&console.warn("Non-Inline StyleSheets detected: ScrollTimeline polyfill currently only supports inline styles within style tags"),!Reflect.defineProperty(window,"ScrollTimeline",{value:v}))throw Error("Error installing ScrollTimeline polyfill: could not attach ScrollTimeline to window");if(!Reflect.defineProperty(window,"ViewTimeline",{value:N}))throw Error("Error installing ViewTimeline polyfill: could not attach ViewTimeline to window");if(!Reflect.defineProperty(Element.prototype,"animate",{value:function(e,n){var t=n.timeline;t instanceof v&&delete n.timeline;var i=function(e,n){if(n in e){var t=e[n];return"number"!=typeof t?(delete e[n],t):null}},r=function(e,n){n&&(n.phase&&(e.name=n.phase),n.percent&&(e.offset=n.percent))},a=i(n,"delay"),o=i(n,"endDelay"),l=R.apply(this,[e,n]),s=new X(l,t);if(t instanceof v){if(l.pause(),t instanceof ViewTimeline){var u=G.get(s);u.timeRange=ne(n.timeRange),r(u.timeRange.start,a),r(u.timeRange.end,o)}s.play()}return s}}))throw Error("Error installing ScrollTimeline polyfill: could not attach WAAPI's animate to DOM Element");if(!Reflect.defineProperty(window,"Animation",{value:X}))throw Error("Error installing Animation constructor.")}();
//# sourceMappingURL=scroll-timeline.js.map

(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9203],{23874:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/game",function(){return t(33206)}])},33206:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return c}});var r=t(85893),i=t(67294),a=t(97442),o=t(204),s=t(95518),u=t(87793),l=t(38101);function c(){(0,l.pX8)();let e=(0,l.SFn)(),{unityProvider:n,sendMessage:t}=new a.JM({loaderUrl:"./Megaman/Build/ApiChickyLastTestUnity.loader.js",dataUrl:"./Megaman/Build/ApiChickyLastTestUnity.data",frameworkUrl:"./Megaman/Build/ApiChickyLastTestUnity.framework.js",codeUrl:"./Megaman/Build/ApiChickyLastTestUnity.wasm"}),c=()=>{window.location.reload()},[d,f]=(0,i.useState)(!1),[v,y]=(0,i.useState)(!1),p=e=>{y(e)},g=()=>{y(!1)};return(0,r.jsx)(l.wyl,{activeChain:"arbitrum-goerli",supportedWallets:[(0,l.k9e)()],children:(0,r.jsxs)("div",{className:"about-background",children:[(0,r.jsxs)(o.k,{className:"BagelFatOne",justify:"space-between",align:"center",padding:"30px",children:[(0,r.jsx)(s.r,{href:"/",children:(0,r.jsx)(u.E,{src:"/images/LOGO.png",width:"175px",margin:"0 100px"})}),(0,r.jsxs)(o.k,{justify:"space-between",align:"center",padding:"30px",children:[[{name:"About",href:"/about"},{name:"Mint",href:"/mint"},{name:"Game",href:"/game"}].map((e,n)=>(0,r.jsx)("a",{href:e.href,style:{margin:"0 8px",padding:"10px 30px",backgroundColor:v===n?"#b1b8f2":"#929bed",color:v===n?"black":"white",cursor:"pointer",textDecoration:"none",borderRadius:"10%",fontSize:"20px",lineHeight:"0.75"},onMouseEnter:()=>p(n),onMouseLeave:g,children:e.name},n)),(0,r.jsx)(l.RZ8,{})]})]}),(0,r.jsx)("div",{className:"BagelFatOne",children:e?(0,r.jsxs)("div",{children:[e,(0,r.jsx)(a.Y4,{unityProvider:n,style:{justifySelf:"center",width:1920,alignSelf:"center"},disabledCanvasEvents:["dragstart","scroll"]}),void(console.log(e),t("LeaderBoard","SettingWalletAddress",e))]}):(0,r.jsxs)("div",{style:{textAlign:"center",padding:"0 20px"},children:["Please Connect your wallet.",(0,r.jsx)("div",{style:{textAlign:"center",padding:"0 20px"},children:"AND"}),(0,r.jsx)("div",{style:{textAlign:"center",padding:"0 20px"},children:"Press Play!"}),(0,r.jsx)("div",{style:{textAlign:"center",padding:"0 20px",boxSizing:"100px"},children:(0,r.jsx)("button",{className:"BagelFatOne",style:{fontSize:"50px",padding:"10px 25px",borderRadius:"20%"},onClick:c,children:"Play"})})]})}),(0,r.jsx)("div",{className:"footer",children:"\xa9 2023 CHICKY RUNNERS. All rights reserved."})]})})}},99929:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.Unity=void 0;var r=t(67294),i=t(67294),a=t(70025),o=t(75421),s=t(8396),u=t(72340),l=(0,i.forwardRef)(function(e,n){var t=(0,i.useRef)(null),l=(0,a.useUnityCanvasId)(),c=(0,s.useUnityArguments)(e),d=(0,u.useUnityLoader)(e.unityProvider.unityConfig);return(0,o.useUnityInstance)(d,t.current,c,e.unityProvider),(0,r.useImperativeHandle)(n,function(){return t.current}),(0,r.createElement)("canvas",{ref:t,id:l,style:e.style,className:e.className,tabIndex:e.tabIndex})});n.Unity=l},99090:function(e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.errorMessages=void 0,n.errorMessages={genericNoUnityInstance:"No Unity Instance found.",requestFullscreenNoUnityInstance:"Unable to Set Fullscreen while Unity is not Instantiated.",requestPointerLockNoUnityInstanceOrCanvas:"Unable to Request Pointer Lock while Unity is not Instantiated or the Canvas is not found.",sendMessageNoUnityInstance:"Unable to Send Message while Unity is not Instantiated.",quitNoUnityInstance:"Unable to Quit Unity while Unity is not Instantiated.",screenshotNoUnityInstanceOrCanvas:"Unable to Take Screenshot while Unity is not Instantiated or Canvas is not available.",noEventListener:"Unable to find Event Listener in Event System for Event"}},11539:function(e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.isBrowserEnvironment=void 0,n.isBrowserEnvironment="undefined"!=typeof window&&"undefined"!=typeof document},13896:function(e,n){"use strict";var t,r;Object.defineProperty(n,"__esModule",{value:!0}),n.UnityLoaderStatus=void 0,(r=t||(t={})).Idle="Idle",r.Loading="Loading",r.Loaded="Loaded",r.Error="Error",n.UnityLoaderStatus=t},97442:function(e,n,t){"use strict";n.JM=n.Y4=void 0;var r=t(99929);Object.defineProperty(n,"Y4",{enumerable:!0,get:function(){return r.Unity}});var i=t(47102);Object.defineProperty(n,"JM",{enumerable:!0,get:function(){return i.useUnityContext}})},45118:function(e,n,t){"use strict";var r=this&&this.__spreadArray||function(e,n,t){if(t||2==arguments.length)for(var r,i=0,a=n.length;i<a;i++)!r&&i in n||(r||(r=Array.prototype.slice.call(n,0,i)),r[i]=n[i]);return e.concat(r||Array.prototype.slice.call(n))};Object.defineProperty(n,"__esModule",{value:!0}),n.useEventSystem=void 0;var i=t(67294),a=t(99090),o=t(11539),s=[];!0===o.isBrowserEnvironment&&(window.dispatchReactUnityEvent=function(e){for(var n=[],t=1;t<arguments.length;t++)n[t-1]=arguments[t];var i=void 0;return s.forEach(function(t){i=t.apply(void 0,r([e],n,!1))}),i}),n.useEventSystem=function(){var e=(0,i.useRef)([]),n=(0,i.useCallback)(function(n,t){e.current=r(r([],e.current,!0),[{eventName:n,callback:t}],!1)},[e]),t=(0,i.useCallback)(function(n,t){e.current=e.current.filter(function(e){return e.eventName!==n&&e.callback!==t})},[e]),o=(0,i.useCallback)(function(n){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var i=e.current.find(function(e){return e.eventName===n});if(void 0===i){console.warn(a.errorMessages.noEventListener,{eventName:n});return}return i.callback.apply(i,t)},[e]);return(0,i.useEffect)(function(){return s.push(o),function(){s.splice(s.indexOf(o),1)}},[o]),{addEventListener:n,removeEventListener:t}}},62345:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.useNullableState=void 0;var r=t(67294);n.useNullableState=function(e){return(0,r.useState)(e||null)}},8396:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.useUnityArguments=void 0;var r=t(67294);n.useUnityArguments=function(e){return(0,r.useMemo)(function(){return{dataUrl:e.unityProvider.unityConfig.dataUrl,frameworkUrl:e.unityProvider.unityConfig.frameworkUrl,codeUrl:e.unityProvider.unityConfig.codeUrl,streamingAssetsUrl:e.unityProvider.unityConfig.streamingAssetsUrl,memoryUrl:e.unityProvider.unityConfig.memoryUrl,symbolsUrl:e.unityProvider.unityConfig.symbolsUrl,companyName:e.unityProvider.unityConfig.companyName,productName:e.unityProvider.unityConfig.productName,productVersion:e.unityProvider.unityConfig.productVersion,webglContextAttributes:e.unityProvider.unityConfig.webglContextAttributes||{},cacheControl:e.unityProvider.unityConfig.cacheControl||function(){return"must-revalidate"},devicePixelRatio:e.devicePixelRatio||1,matchWebGLToCanvasSize:"boolean"!=typeof e.matchWebGLToCanvasSize||e.matchWebGLToCanvasSize,disabledCanvasEvents:e.disabledCanvasEvents||["contextmenu","dragstart"],print:function(e){},printErr:function(e){}}},[])}},70025:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.useUnityCanvasId=void 0;var r=t(67294),i=0;n.useUnityCanvasId=function(){return(0,r.useMemo)(function(){return["react-unity-webgl-canvas",++i].join("-")},[])}},47102:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.useUnityContext=void 0;var r=t(67294),i=t(99090),a=t(45118),o=t(62345);n.useUnityContext=function(e){var n=(0,o.useNullableState)(),t=n[0],s=n[1],u=(0,r.useState)(0),l=u[0],c=u[1],d=(0,r.useState)(!1),f=d[0],v=d[1],y=(0,o.useNullableState)(),p=y[0],g=y[1],b=(0,a.useEventSystem)(),m=(0,r.useRef)({setLoadingProgression:c,setInitialisationError:g,setUnityInstance:s,setIsLoaded:v,unityConfig:e}),U=(0,r.useCallback)(function(e){if(null===t){console.warn(i.errorMessages.requestFullscreenNoUnityInstance);return}t.SetFullscreen(!0===e?1:0)},[t]),h=(0,r.useCallback)(function(){if(null===t||void 0===t.Module.canvas){console.warn(i.errorMessages.requestPointerLockNoUnityInstanceOrCanvas);return}return t.Module.canvas.requestPointerLock()},[t]),w=(0,r.useCallback)(function(e,n,r){if(null===t){console.warn(i.errorMessages.sendMessageNoUnityInstance);return}t.SendMessage(e,n,r)},[t]),x=(0,r.useCallback)(function(e,n){if(null===t||void 0===t.Module.canvas){console.warn(i.errorMessages.screenshotNoUnityInstanceOrCanvas);return}return t.Module.canvas.toDataURL(e,n)},[t]),C=(0,r.useCallback)(function(){return null===t?(console.warn(i.errorMessages.quitNoUnityInstance),Promise.reject()):t.Quit()},[t]);return(0,r.useEffect)(function(){v(1===l)},[l]),{unityProvider:m.current,loadingProgression:l,initialisationError:p,isLoaded:f,UNSAFE__unityInstance:t,requestFullscreen:U,requestPointerLock:h,sendMessage:w,unload:C,takeScreenshot:x,addEventListener:b.addEventListener,removeEventListener:b.removeEventListener}}},75421:function(e,n,t){"use strict";var r=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))(function(i,a){function o(e){try{u(r.next(e))}catch(n){a(n)}}function s(e){try{u(r.throw(e))}catch(n){a(n)}}function u(e){var n;e.done?i(e.value):((n=e.value)instanceof t?n:new t(function(e){e(n)})).then(o,s)}u((r=r.apply(e,n||[])).next())})},i=this&&this.__generator||function(e,n){var t,r,i,a,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(t)throw TypeError("Generator is already executing.");for(;o;)try{if(t=1,r&&(i=2&a[0]?r.return:a[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i;switch(r=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,r=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!(i=(i=o.trys).length>0&&i[i.length-1])&&(6===a[0]||2===a[0])){o=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){o.label=a[1];break}if(6===a[0]&&o.label<i[1]){o.label=i[1],i=a;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(a);break}i[2]&&o.ops.pop(),o.trys.pop();continue}a=n.call(e,o)}catch(s){a=[6,s],r=0}finally{t=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}};Object.defineProperty(n,"__esModule",{value:!0}),n.useUnityInstance=void 0;var a=t(67294),o=t(13896),s=t(11539);n.useUnityInstance=function(e,n,t,u){(0,a.useEffect)(function(){r(void 0,void 0,void 0,function(){var r,a;return i(this,function(i){switch(i.label){case 0:if(!1===s.isBrowserEnvironment)return[2];if(e!==o.UnityLoaderStatus.Loaded||null===n)return u.setUnityInstance(null),u.setInitialisationError(null),[2];i.label=1;case 1:return i.trys.push([1,3,,4]),[4,window.createUnityInstance(n,t,u.setLoadingProgression)];case 2:return r=i.sent(),u.setUnityInstance(r),u.setInitialisationError(null),[3,4];case 3:return a=i.sent(),u.setUnityInstance(null),u.setInitialisationError(a),[3,4];case 4:return[2]}})})},[e,n,t,u])}},72340:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.useUnityLoader=void 0;var r=t(67294),i=t(11539),a=t(13896);n.useUnityLoader=function(e){var n=(0,r.useState)(a.UnityLoaderStatus.Loading),t=n[0],o=n[1];return(0,r.useEffect)(function(){if(!1!==i.isBrowserEnvironment){if(null===e.loaderUrl){o(a.UnityLoaderStatus.Idle);return}var n=window.document.querySelector('script[src="'.concat(e.loaderUrl,'"]'));null===n?((n=window.document.createElement("script")).type="text/javascript",n.src=e.loaderUrl,n.async=!0,n.setAttribute("data-status","loading"),window.document.body.appendChild(n),n.addEventListener("load",function(){return null==n?void 0:n.setAttribute("data-status","loaded")}),n.addEventListener("error",function(){return null==n?void 0:n.setAttribute("data-status","error")})):o("loaded"===n.getAttribute("data-status")?a.UnityLoaderStatus.Loaded:a.UnityLoaderStatus.Error);var t=function(e){return o("load"===e.type?a.UnityLoaderStatus.Loaded:a.UnityLoaderStatus.Error)};return n.addEventListener("load",t),n.addEventListener("error",t),function(){null!==n&&(n.removeEventListener("load",t),n.removeEventListener("error",t),window.document.body.removeChild(n))}}},[e.loaderUrl]),t}}},function(e){e.O(0,[7781,9774,2888,179],function(){return e(e.s=23874)}),_N_E=e.O()}]);
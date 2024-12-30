"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[867],{4216:(e,t,r)=>{r.d(t,{A:()=>s});var n=r(4617),i=r.n(n),a=r(2115),o=r(1653),u=r(5155);let l=a.forwardRef((e,t)=>{let{bsPrefix:r,variant:n,animation:a="border",size:l,as:s="div",className:c,...d}=e;r=(0,o.oU)(r,"spinner");let f="".concat(r,"-").concat(a);return(0,u.jsx)(s,{ref:t,...d,className:i()(c,f,l&&"".concat(f,"-").concat(l),n&&"text-".concat(n))})});l.displayName="Spinner";let s=l},3027:(e,t,r)=>{var n=r(2115),i="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},a=n.useState,o=n.useEffect,u=n.useLayoutEffect,l=n.useDebugValue;function s(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!i(e,r)}catch(e){return!0}}var c="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var r=t(),n=a({inst:{value:r,getSnapshot:t}}),i=n[0].inst,c=n[1];return u(function(){i.value=r,i.getSnapshot=t,s(i)&&c({inst:i})},[e,r,t]),o(function(){return s(i)&&c({inst:i}),e(function(){s(i)&&c({inst:i})})},[e]),l(r),r};t.useSyncExternalStore=void 0!==n.useSyncExternalStore?n.useSyncExternalStore:c},4236:(e,t,r)=>{e.exports=r(3027)},9398:(e,t,r)=>{r.d(t,{B:()=>f,I:()=>S,O:()=>l,S:()=>B,U:()=>u,a:()=>c,b:()=>a,c:()=>W,d:()=>$,e:()=>s,f:()=>z,g:()=>J,h:()=>U,i:()=>p,m:()=>d,o:()=>F,p:()=>j,s:()=>x,t:()=>O,u:()=>T,v:()=>V,z:()=>y});var n=r(2115),i=Object.prototype.hasOwnProperty;let a=new WeakMap,o=()=>{},u=o(),l=Object,s=e=>e===u,c=e=>"function"==typeof e,d=(e,t)=>({...e,...t}),f=e=>c(e.then),g={},E={},h="undefined",p=typeof window!=h,v=typeof document!=h,w=()=>p&&typeof window.requestAnimationFrame!=h,y=(e,t)=>{let r=a.get(e);return[()=>!s(t)&&e.get(t)||g,n=>{if(!s(t)){let i=e.get(t);t in E||(E[t]=i),r[5](t,d(i,n),i||g)}},r[6],()=>!s(t)&&t in E?E[t]:!s(t)&&e.get(t)||g]},_=!0,[m,b]=p&&window.addEventListener?[window.addEventListener.bind(window),window.removeEventListener.bind(window)]:[o,o],R={initFocus:e=>(v&&document.addEventListener("visibilitychange",e),m("focus",e),()=>{v&&document.removeEventListener("visibilitychange",e),b("focus",e)}),initReconnect:e=>{let t=()=>{_=!0,e()},r=()=>{_=!1};return m("online",t),m("offline",r),()=>{b("online",t),b("offline",r)}}},S=!n.useId,O=!p||"Deno"in globalThis,T=e=>w()?window.requestAnimationFrame(e):setTimeout(e,1),V=O?n.useEffect:n.useLayoutEffect,k="undefined"!=typeof navigator&&navigator.connection,L=!O&&k&&(["slow-2g","2g"].includes(k.effectiveType)||k.saveData),C=new WeakMap,A=(e,t)=>l.prototype.toString.call(e)==="[object ".concat(t,"]"),N=0,D=e=>{let t,r;let n=typeof e,i=A(e,"Date"),a=A(e,"RegExp"),o=A(e,"Object");if(l(e)!==e||i||a)t=i?e.toJSON():"symbol"==n?e.toString():"string"==n?JSON.stringify(e):""+e;else{if(t=C.get(e))return t;if(t=++N+"~",C.set(e,t),Array.isArray(e)){for(r=0,t="@";r<e.length;r++)t+=D(e[r])+",";C.set(e,t)}if(o){t="#";let n=l.keys(e).sort();for(;!s(r=n.pop());)s(e[r])||(t+=r+":"+D(e[r])+",");C.set(e,t)}}return t},x=e=>{if(c(e))try{e=e()}catch(t){e=""}let t=e;return[e="string"==typeof e?e:(Array.isArray(e)?e.length:e)?D(e):"",t]},I=0,j=()=>++I;var U={__proto__:null,ERROR_REVALIDATE_EVENT:3,FOCUS_EVENT:0,MUTATE_EVENT:2,RECONNECT_EVENT:1};async function F(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];let[n,i,o,l]=t,g=d({populateCache:!0,throwOnError:!0},"boolean"==typeof l?{revalidate:l}:l||{}),E=g.populateCache,h=g.rollbackOnError,p=g.optimisticData,v=e=>"function"==typeof h?h(e):!1!==h,w=g.throwOnError;if(c(i)){let e=[];for(let t of n.keys())!/^\$(inf|sub)\$/.test(t)&&i(n.get(t)._k)&&e.push(t);return Promise.all(e.map(_))}return _(i);async function _(e){let r;let[i]=x(e);if(!i)return;let[l,d]=y(n,i),[h,_,m,b]=a.get(n),R=()=>{let t=h[i];return(c(g.revalidate)?g.revalidate(l().data,e):!1!==g.revalidate)&&(delete m[i],delete b[i],t&&t[0])?t[0](2).then(()=>l().data):l().data};if(t.length<3)return R();let S=o,O=j();_[i]=[O,0];let T=!s(p),V=l(),k=V.data,L=V._c,C=s(L)?k:L;if(T&&d({data:p=c(p)?p(C,k):p,_c:C}),c(S))try{S=S(C)}catch(e){r=e}if(S&&f(S)){if(S=await S.catch(e=>{r=e}),O!==_[i][0]){if(r)throw r;return S}r&&T&&v(r)&&(E=!0,d({data:C,_c:u}))}if(E&&!r&&(c(E)?d({data:E(S,C),error:u,_c:u}):d({data:S,error:u,_c:u})),_[i][1]=j(),Promise.resolve(R()).then(()=>{d({_c:u})}),r){if(w)throw r;return}return S}}let M=(e,t)=>{for(let r in e)e[r][0]&&e[r][0](t)},P=(e,t)=>{if(!a.has(e)){let r=d(R,t),n={},i=F.bind(u,e),l=o,s={},c=(e,t)=>{let r=s[e]||[];return s[e]=r,r.push(t),()=>r.splice(r.indexOf(t),1)},f=(t,r,n)=>{e.set(t,r);let i=s[t];if(i)for(let e of i)e(r,n)},g=()=>{if(!a.has(e)&&(a.set(e,[n,{},{},{},i,f,c]),!O)){let t=r.initFocus(setTimeout.bind(u,M.bind(u,n,0))),i=r.initReconnect(setTimeout.bind(u,M.bind(u,n,1)));l=()=>{t&&t(),i&&i(),a.delete(e)}}};return g(),[e,i,g,l]}return[e,a.get(e)[4]]},[W,q]=P(new Map),$=d({onLoadingSlow:o,onSuccess:o,onError:o,onErrorRetry:(e,t,r,n,i)=>{let a=r.errorRetryCount,o=i.retryCount,u=~~((Math.random()+.5)*(1<<(o<8?o:8)))*r.errorRetryInterval;(s(a)||!(o>a))&&setTimeout(n,u,i)},onDiscarded:o,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:L?1e4:5e3,focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:L?5e3:3e3,compare:function e(t,r){var n,a;if(t===r)return!0;if(t&&r&&(n=t.constructor)===r.constructor){if(n===Date)return t.getTime()===r.getTime();if(n===RegExp)return t.toString()===r.toString();if(n===Array){if((a=t.length)===r.length)for(;a--&&e(t[a],r[a]););return -1===a}if(!n||"object"==typeof t){for(n in a=0,t)if(i.call(t,n)&&++a&&!i.call(r,n)||!(n in r)||!e(t[n],r[n]))return!1;return Object.keys(r).length===a}}return t!=t&&r!=r},isPaused:()=>!1,cache:W,mutate:q,fallback:{}},{isOnline:()=>_,isVisible:()=>{let e=v&&document.visibilityState;return s(e)||"hidden"!==e}}),z=(e,t)=>{let r=d(e,t);if(t){let{use:n,fallback:i}=e,{use:a,fallback:o}=t;n&&a&&(r.use=n.concat(a)),i&&o&&(r.fallback=d(i,o))}return r},B=(0,n.createContext)({}),J=e=>{let{value:t}=e,r=(0,n.useContext)(B),i=c(t),a=(0,n.useMemo)(()=>i?t(r):t,[i,r,t]),o=(0,n.useMemo)(()=>i?a:z(r,a),[i,r,a]),l=a&&a.provider,s=(0,n.useRef)(u);l&&!s.current&&(s.current=P(l(o.cache||W),a));let f=s.current;return f&&(o.cache=f[0],o.mutate=f[1]),V(()=>{if(f)return f[2]&&f[2](),f[3]},[]),(0,n.createElement)(B.Provider,d(e,{value:o}))}},1862:(e,t,r)=>{r.d(t,{Ht:()=>f,aw:()=>d,qm:()=>c});var n=r(9398),i=r(2115);let a=n.i&&window.__SWR_DEVTOOLS_USE__,o=a?window.__SWR_DEVTOOLS_USE__:[],u=e=>(0,n.a)(e[1])?[e[0],e[1],e[2]||{}]:[e[0],null,(null===e[1]?e[2]:e[1])||{}],l=()=>(0,n.m)(n.d,(0,i.useContext)(n.S)),s=o.concat(e=>(t,r,i)=>{let a=r&&((...e)=>{let[i]=(0,n.s)(t),[,,,a]=n.b.get(n.c);if(i.startsWith("$inf$"))return r(...e);let o=a[i];return(0,n.e)(o)?r(...e):(delete a[i],o)});return e(t,a,i)}),c=e=>function(...t){let r=l(),[i,a,o]=u(t),c=(0,n.f)(r,o),d=e,{use:f}=c,g=(f||[]).concat(s);for(let e=g.length;e--;)d=g[e](d);return d(i,a||c.fetcher||null,c)},d=(e,t,r)=>{let n=t[e]||(t[e]=[]);return n.push(r),()=>{let e=n.indexOf(r);e>=0&&(n[e]=n[n.length-1],n.pop())}},f=(e,t)=>(...r)=>{let[n,i,a]=u(r),o=(a.use||[]).concat(t);return e(n,i,{...a,use:o})};a&&(window.__SWR_DEVTOOLS_REACT__=i)},7021:(e,t,r)=>{r.d(t,{Ay:()=>c});var n=r(2115),i=r(4236),a=r(9398),o=r(1862);let u=()=>{};u(),new WeakMap;let l=n.use||(e=>{switch(e.status){case"pending":throw e;case"fulfilled":return e.value;case"rejected":throw e.reason;default:throw e.status="pending",e.then(t=>{e.status="fulfilled",e.value=t},t=>{e.status="rejected",e.reason=t}),e}}),s={dedupe:!0};a.O.defineProperty(a.g,"defaultValue",{value:a.d});let c=(0,o.qm)((e,t,r)=>{let{cache:u,compare:c,suspense:d,fallbackData:f,revalidateOnMount:g,revalidateIfStale:E,refreshInterval:h,refreshWhenHidden:p,refreshWhenOffline:v,keepPreviousData:w}=r,[y,_,m,b]=a.b.get(u),[R,S]=(0,a.s)(e),O=(0,n.useRef)(!1),T=(0,n.useRef)(!1),V=(0,n.useRef)(R),k=(0,n.useRef)(t),L=(0,n.useRef)(r),C=()=>L.current,A=()=>C().isVisible()&&C().isOnline(),[N,D,x,I]=(0,a.z)(u,R),j=(0,n.useRef)({}).current,U=(0,a.e)(f)?(0,a.e)(r.fallback)?a.U:r.fallback[R]:f,F=(e,t)=>{for(let r in j)if("data"===r){if(!c(e[r],t[r])&&(!(0,a.e)(e[r])||!c(H,t[r])))return!1}else if(t[r]!==e[r])return!1;return!0},M=(0,n.useMemo)(()=>{let e=!!R&&!!t&&((0,a.e)(g)?!C().isPaused()&&!d&&!1!==E:g),r=t=>{let r=(0,a.m)(t);return(delete r._k,e)?{isValidating:!0,isLoading:!0,...r}:r},n=N(),i=I(),o=r(n),u=n===i?o:r(i),l=o;return[()=>{let e=r(N());return F(e,l)?(l.data=e.data,l.isLoading=e.isLoading,l.isValidating=e.isValidating,l.error=e.error,l):(l=e,e)},()=>u]},[u,R]),P=(0,i.useSyncExternalStore)((0,n.useCallback)(e=>x(R,(t,r)=>{F(r,t)||e()}),[u,R]),M[0],M[1]),W=!O.current,q=y[R]&&y[R].length>0,$=P.data,z=(0,a.e)($)?U&&(0,a.B)(U)?l(U):U:$,B=P.error,J=(0,n.useRef)(z),H=w?(0,a.e)($)?J.current:$:z,G=(!q||!!(0,a.e)(B))&&(W&&!(0,a.e)(g)?g:!C().isPaused()&&(d?!(0,a.e)(z)&&E:(0,a.e)(z)||E)),K=!!(R&&t&&W&&G),Q=(0,a.e)(P.isValidating)?K:P.isValidating,X=(0,a.e)(P.isLoading)?K:P.isLoading,Y=(0,n.useCallback)(async e=>{let t,n;let i=k.current;if(!R||!i||T.current||C().isPaused())return!1;let o=!0,u=e||{},l=!m[R]||!u.dedupe,s=()=>a.I?!T.current&&R===V.current&&O.current:R===V.current,d={isValidating:!1,isLoading:!1},f=()=>{D(d)},g=()=>{let e=m[R];e&&e[1]===n&&delete m[R]},E={isValidating:!0};(0,a.e)(N().data)&&(E.isLoading=!0);try{if(l&&(D(E),r.loadingTimeout&&(0,a.e)(N().data)&&setTimeout(()=>{o&&s()&&C().onLoadingSlow(R,r)},r.loadingTimeout),m[R]=[i(S),(0,a.p)()]),[t,n]=m[R],t=await t,l&&setTimeout(g,r.dedupingInterval),!m[R]||m[R][1]!==n)return l&&s()&&C().onDiscarded(R),!1;d.error=a.U;let e=_[R];if(!(0,a.e)(e)&&(n<=e[0]||n<=e[1]||0===e[1]))return f(),l&&s()&&C().onDiscarded(R),!1;let u=N().data;d.data=c(u,t)?u:t,l&&s()&&C().onSuccess(t,R,r)}catch(r){g();let e=C(),{shouldRetryOnError:t}=e;!e.isPaused()&&(d.error=r,l&&s()&&(e.onError(r,R,e),(!0===t||(0,a.a)(t)&&t(r))&&(!C().revalidateOnFocus||!C().revalidateOnReconnect||A())&&e.onErrorRetry(r,R,e,e=>{let t=y[R];t&&t[0]&&t[0](a.h.ERROR_REVALIDATE_EVENT,e)},{retryCount:(u.retryCount||0)+1,dedupe:!0})))}return o=!1,f(),!0},[R,u]),Z=(0,n.useCallback)((...e)=>(0,a.o)(u,V.current,...e),[]);if((0,a.v)(()=>{k.current=t,L.current=r,(0,a.e)($)||(J.current=$)}),(0,a.v)(()=>{if(!R)return;let e=Y.bind(a.U,s),t=0,r=(0,o.aw)(R,y,(r,n={})=>{if(r==a.h.FOCUS_EVENT){let r=Date.now();C().revalidateOnFocus&&r>t&&A()&&(t=r+C().focusThrottleInterval,e())}else if(r==a.h.RECONNECT_EVENT)C().revalidateOnReconnect&&A()&&e();else if(r==a.h.MUTATE_EVENT)return Y();else if(r==a.h.ERROR_REVALIDATE_EVENT)return Y(n)});return T.current=!1,V.current=R,O.current=!0,D({_k:S}),G&&((0,a.e)(z)||a.t?e():(0,a.u)(e)),()=>{T.current=!0,r()}},[R]),(0,a.v)(()=>{let e;function t(){let t=(0,a.a)(h)?h(N().data):h;t&&-1!==e&&(e=setTimeout(r,t))}function r(){!N().error&&(p||C().isVisible())&&(v||C().isOnline())?Y(s).then(t):t()}return t(),()=>{e&&(clearTimeout(e),e=-1)}},[h,p,v,R]),(0,n.useDebugValue)(H),d&&(0,a.e)(z)&&R){if(!a.I&&a.t)throw Error("Fallback data is required when using Suspense in SSR.");k.current=t,L.current=r,T.current=!1;let e=b[R];if((0,a.e)(e)||l(Z(e)),(0,a.e)(B)){let e=Y(s);(0,a.e)(H)||(e.status="fulfilled",e.value=!0),l(e)}else throw B}return{mutate:Z,get data(){return j.data=!0,H},get error(){return j.error=!0,B},get isValidating(){return j.isValidating=!0,Q},get isLoading(){return j.isLoading=!0,X}}})}}]);
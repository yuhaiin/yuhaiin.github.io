"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1617],{4492:(e,t,r)=>{var n=r(2265),i="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},o=n.useState,a=n.useEffect,u=n.useLayoutEffect,l=n.useDebugValue;function s(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!i(e,r)}catch(e){return!0}}var c="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var r=t(),n=o({inst:{value:r,getSnapshot:t}}),i=n[0].inst,c=n[1];return u(function(){i.value=r,i.getSnapshot=t,s(i)&&c({inst:i})},[e,r,t]),a(function(){return s(i)&&c({inst:i}),e(function(){s(i)&&c({inst:i})})},[e]),l(r),r};t.useSyncExternalStore=void 0!==n.useSyncExternalStore?n.useSyncExternalStore:c},554:(e,t,r)=>{e.exports=r(4492)},3791:(e,t,r)=>{r.d(t,{$l:()=>a,BN:()=>P,DY:()=>g,J$:()=>q,JN:()=>m,LI:()=>k,PM:()=>s,W6:()=>V,i_:()=>o,ko:()=>K,kw:()=>L,mf:()=>l,o8:()=>u,qC:()=>D,s6:()=>H,sj:()=>x,u3:()=>A,u_:()=>$,w6:()=>S,xD:()=>Q});var n=r(2265);let i=()=>{},o=i(),a=Object,u=e=>e===o,l=e=>"function"==typeof e,s=(e,t)=>({...e,...t}),c=e=>l(e.then),d=new WeakMap,f=0,E=e=>{let t,r;let n=typeof e,i=e&&e.constructor,o=i==Date;if(a(e)!==e||o||i==RegExp)t=o?e.toJSON():"symbol"==n?e.toString():"string"==n?JSON.stringify(e):""+e;else{if(t=d.get(e))return t;if(t=++f+"~",d.set(e,t),i==Array){for(r=0,t="@";r<e.length;r++)t+=E(e[r])+",";d.set(e,t)}if(i==a){t="#";let n=a.keys(e).sort();for(;!u(r=n.pop());)u(e[r])||(t+=r+":"+E(e[r])+",");d.set(e,t)}}return t},g=new WeakMap,w={},v={},_="undefined",h=typeof window!=_,p=typeof document!=_,y=()=>h&&typeof window.requestAnimationFrame!=_,m=(e,t)=>{let r=g.get(e);return[()=>!u(t)&&e.get(t)||w,n=>{if(!u(t)){let i=e.get(t);t in v||(v[t]=i),r[5](t,s(i,n),i||w)}},r[6],()=>!u(t)&&t in v?v[t]:!u(t)&&e.get(t)||w]},R=!0,[T,b]=h&&window.addEventListener?[window.addEventListener.bind(window),window.removeEventListener.bind(window)]:[i,i],O={initFocus:e=>(p&&document.addEventListener("visibilitychange",e),T("focus",e),()=>{p&&document.removeEventListener("visibilitychange",e),b("focus",e)}),initReconnect:e=>{let t=()=>{R=!0,e()},r=()=>{R=!1};return T("online",t),T("offline",r),()=>{b("online",t),b("offline",r)}}},S=!n.useId,V=!h||"Deno"in window,L=e=>y()?window.requestAnimationFrame(e):setTimeout(e,1),k=V?n.useEffect:n.useLayoutEffect,C="undefined"!=typeof navigator&&navigator.connection,N=!V&&C&&(["slow-2g","2g"].includes(C.effectiveType)||C.saveData),D=e=>{if(l(e))try{e=e()}catch(t){e=""}let t=e;return[e="string"==typeof e?e:(Array.isArray(e)?e.length:e)?E(e):"",t]},I=0,A=()=>++I;var x={__proto__:null,ERROR_REVALIDATE_EVENT:3,FOCUS_EVENT:0,MUTATE_EVENT:2,RECONNECT_EVENT:1};async function P(...e){let[t,r,n,i]=e,a=s({populateCache:!0,throwOnError:!0},"boolean"==typeof i?{revalidate:i}:i||{}),d=a.populateCache,f=a.rollbackOnError,E=a.optimisticData,w=e=>"function"==typeof f?f(e):!1!==f,v=a.throwOnError;if(l(r)){let e=[];for(let n of t.keys())!/^\$(inf|sub)\$/.test(n)&&r(t.get(n)._k)&&e.push(n);return Promise.all(e.map(_))}return _(r);async function _(r){let i;let[s]=D(r);if(!s)return;let[f,_]=m(t,s),[h,p,y,R]=g.get(t),T=()=>{let e=h[s];return(l(a.revalidate)?a.revalidate(f().data,r):!1!==a.revalidate)&&(delete y[s],delete R[s],e&&e[0])?e[0](2).then(()=>f().data):f().data};if(e.length<3)return T();let b=n,O=A();p[s]=[O,0];let S=!u(E),V=f(),L=V.data,k=V._c,C=u(k)?L:k;if(S&&_({data:E=l(E)?E(C,L):E,_c:C}),l(b))try{b=b(C)}catch(e){i=e}if(b&&c(b)){if(b=await b.catch(e=>{i=e}),O!==p[s][0]){if(i)throw i;return b}i&&S&&w(i)&&(d=!0,_({data:C,_c:o}))}if(d&&!i&&(l(d)?_({data:d(b,C),error:o,_c:o}):_({data:b,error:o,_c:o})),p[s][1]=A(),Promise.resolve(T()).then(()=>{_({_c:o})}),i){if(v)throw i;return}return b}}let j=(e,t)=>{for(let r in e)e[r][0]&&e[r][0](t)},M=(e,t)=>{if(!g.has(e)){let r=s(O,t),n={},a=P.bind(o,e),u=i,l={},c=(e,t)=>{let r=l[e]||[];return l[e]=r,r.push(t),()=>r.splice(r.indexOf(t),1)},d=(t,r,n)=>{e.set(t,r);let i=l[t];if(i)for(let e of i)e(r,n)},f=()=>{if(!g.has(e)&&(g.set(e,[n,{},{},{},a,d,c]),!V)){let t=r.initFocus(setTimeout.bind(o,j.bind(o,n,0))),i=r.initReconnect(setTimeout.bind(o,j.bind(o,n,1)));u=()=>{t&&t(),i&&i(),g.delete(e)}}};return f(),[e,a,f,u]}return[e,g.get(e)[4]]},[F,W]=M(new Map),$=s({onLoadingSlow:i,onSuccess:i,onError:i,onErrorRetry:(e,t,r,n,i)=>{let o=r.errorRetryCount,a=i.retryCount,l=~~((Math.random()+.5)*(1<<(a<8?a:8)))*r.errorRetryInterval;(u(o)||!(a>o))&&setTimeout(n,l,i)},onDiscarded:i,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:N?1e4:5e3,focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:N?5e3:3e3,compare:(e,t)=>E(e)==E(t),isPaused:()=>!1,cache:F,mutate:W,fallback:{}},{isOnline:()=>R,isVisible:()=>{let e=p&&document.visibilityState;return u(e)||"hidden"!==e}}),J=(e,t)=>{let r=s(e,t);if(t){let{use:n,fallback:i}=e,{use:o,fallback:a}=t;n&&o&&(r.use=n.concat(o)),i&&a&&(r.fallback=s(i,a))}return r},U=(0,n.createContext)({}),q=e=>{let{value:t}=e,r=(0,n.useContext)(U),i=l(t),a=(0,n.useMemo)(()=>i?t(r):t,[i,r,t]),u=(0,n.useMemo)(()=>i?a:J(r,a),[i,r,a]),c=a&&a.provider,d=(0,n.useRef)(o);c&&!d.current&&(d.current=M(c(u.cache||F),a));let f=d.current;return f&&(u.cache=f[0],u.mutate=f[1]),k(()=>{if(f)return f[2]&&f[2](),f[3]},[]),(0,n.createElement)(U.Provider,s(e,{value:u}))},B=h&&window.__SWR_DEVTOOLS_USE__,Y=B?window.__SWR_DEVTOOLS_USE__:[],Z=e=>l(e[1])?[e[0],e[1],e[2]||{}]:[e[0],null,(null===e[1]?e[2]:e[1])||{}],z=()=>s($,(0,n.useContext)(U)),G=Y.concat(e=>(t,r,n)=>{let i=r&&((...e)=>{let[n]=D(t),[,,,i]=g.get(F);if(n.startsWith("$inf$"))return r(...e);let o=i[n];return u(o)?r(...e):(delete i[n],o)});return e(t,i,n)}),H=e=>function(...t){let r=z(),[n,i,o]=Z(t),a=J(r,o),u=e,{use:l}=a,s=(l||[]).concat(G);for(let e=s.length;e--;)u=s[e](u);return u(n,i||a.fetcher||null,a)},K=(e,t,r)=>{let n=t[e]||(t[e]=[]);return n.push(r),()=>{let e=n.indexOf(r);e>=0&&(n[e]=n[n.length-1],n.pop())}},Q=(e,t)=>(...r)=>{let[n,i,o]=Z(r),a=(o.use||[]).concat(t);return e(n,i,{...o,use:a})};B&&(window.__SWR_DEVTOOLS_REACT__=n)},1617:(e,t,r)=>{r.d(t,{ZP:()=>l});var n=r(2265),i=r(554),o=r(3791);let a=n.use||(e=>{if("pending"===e.status)throw e;if("fulfilled"===e.status)return e.value;if("rejected"===e.status)throw e.reason;throw e.status="pending",e.then(t=>{e.status="fulfilled",e.value=t},t=>{e.status="rejected",e.reason=t}),e}),u={dedupe:!0};o.$l.defineProperty(o.J$,"defaultValue",{value:o.u_});let l=(0,o.s6)((e,t,r)=>{let{cache:l,compare:s,suspense:c,fallbackData:d,revalidateOnMount:f,revalidateIfStale:E,refreshInterval:g,refreshWhenHidden:w,refreshWhenOffline:v,keepPreviousData:_}=r,[h,p,y,m]=o.DY.get(l),[R,T]=(0,o.qC)(e),b=(0,n.useRef)(!1),O=(0,n.useRef)(!1),S=(0,n.useRef)(R),V=(0,n.useRef)(t),L=(0,n.useRef)(r),k=()=>L.current,C=()=>k().isVisible()&&k().isOnline(),[N,D,I,A]=(0,o.JN)(l,R),x=(0,n.useRef)({}).current,P=(0,o.o8)(d)?r.fallback[R]:d,j=(e,t)=>{for(let r in x)if("data"===r){if(!s(e[r],t[r])&&(!(0,o.o8)(e[r])||!s(Y,t[r])))return!1}else if(t[r]!==e[r])return!1;return!0},M=(0,n.useMemo)(()=>{let e=!!R&&!!t&&((0,o.o8)(f)?!k().isPaused()&&!c&&(!!(0,o.o8)(E)||E):f),r=t=>{let r=(0,o.PM)(t);return(delete r._k,e)?{isValidating:!0,isLoading:!0,...r}:r},n=N(),i=A(),a=r(n),u=n===i?a:r(i),l=a;return[()=>{let e=r(N());return j(e,l)?(l.data=e.data,l.isLoading=e.isLoading,l.isValidating=e.isValidating,l.error=e.error,l):(l=e,e)},()=>u]},[l,R]),F=(0,i.useSyncExternalStore)((0,n.useCallback)(e=>I(R,(t,r)=>{j(r,t)||e()}),[l,R]),M[0],M[1]),W=!b.current,$=h[R]&&h[R].length>0,J=F.data,U=(0,o.o8)(J)?P:J,q=F.error,B=(0,n.useRef)(U),Y=_?(0,o.o8)(J)?B.current:J:U,Z=(!$||!!(0,o.o8)(q))&&(W&&!(0,o.o8)(f)?f:!k().isPaused()&&(c?!(0,o.o8)(U)&&E:(0,o.o8)(U)||E)),z=!!(R&&t&&W&&Z),G=(0,o.o8)(F.isValidating)?z:F.isValidating,H=(0,o.o8)(F.isLoading)?z:F.isLoading,K=(0,n.useCallback)(async e=>{let t,n;let i=V.current;if(!R||!i||O.current||k().isPaused())return!1;let a=!0,u=e||{},l=!y[R]||!u.dedupe,c=()=>o.w6?!O.current&&R===S.current&&b.current:R===S.current,d={isValidating:!1,isLoading:!1},f=()=>{D(d)},E=()=>{let e=y[R];e&&e[1]===n&&delete y[R]},g={isValidating:!0};(0,o.o8)(N().data)&&(g.isLoading=!0);try{if(l&&(D(g),r.loadingTimeout&&(0,o.o8)(N().data)&&setTimeout(()=>{a&&c()&&k().onLoadingSlow(R,r)},r.loadingTimeout),y[R]=[i(T),(0,o.u3)()]),[t,n]=y[R],t=await t,l&&setTimeout(E,r.dedupingInterval),!y[R]||y[R][1]!==n)return l&&c()&&k().onDiscarded(R),!1;d.error=o.i_;let e=p[R];if(!(0,o.o8)(e)&&(n<=e[0]||n<=e[1]||0===e[1]))return f(),l&&c()&&k().onDiscarded(R),!1;let u=N().data;d.data=s(u,t)?u:t,l&&c()&&k().onSuccess(t,R,r)}catch(r){E();let e=k(),{shouldRetryOnError:t}=e;!e.isPaused()&&(d.error=r,l&&c()&&(e.onError(r,R,e),(!0===t||(0,o.mf)(t)&&t(r))&&(!k().revalidateOnFocus||!k().revalidateOnReconnect||C())&&e.onErrorRetry(r,R,e,e=>{let t=h[R];t&&t[0]&&t[0](o.sj.ERROR_REVALIDATE_EVENT,e)},{retryCount:(u.retryCount||0)+1,dedupe:!0})))}return a=!1,f(),!0},[R,l]),Q=(0,n.useCallback)((...e)=>(0,o.BN)(l,S.current,...e),[]);if((0,o.LI)(()=>{V.current=t,L.current=r,(0,o.o8)(J)||(B.current=J)}),(0,o.LI)(()=>{if(!R)return;let e=K.bind(o.i_,u),t=0,r=(0,o.ko)(R,h,(r,n={})=>{if(r==o.sj.FOCUS_EVENT){let r=Date.now();k().revalidateOnFocus&&r>t&&C()&&(t=r+k().focusThrottleInterval,e())}else if(r==o.sj.RECONNECT_EVENT)k().revalidateOnReconnect&&C()&&e();else if(r==o.sj.MUTATE_EVENT)return K();else if(r==o.sj.ERROR_REVALIDATE_EVENT)return K(n)});return O.current=!1,S.current=R,b.current=!0,D({_k:T}),Z&&((0,o.o8)(U)||o.W6?e():(0,o.kw)(e)),()=>{O.current=!0,r()}},[R]),(0,o.LI)(()=>{let e;function t(){let t=(0,o.mf)(g)?g(N().data):g;t&&-1!==e&&(e=setTimeout(r,t))}function r(){!N().error&&(w||k().isVisible())&&(v||k().isOnline())?K(u).then(t):t()}return t(),()=>{e&&(clearTimeout(e),e=-1)}},[g,w,v,R]),(0,n.useDebugValue)(Y),c&&(0,o.o8)(U)&&R){if(!o.w6&&o.W6)throw Error("Fallback data is required when using suspense in SSR.");V.current=t,L.current=r,O.current=!1;let e=m[R];if((0,o.o8)(e)||a(Q(e)),(0,o.o8)(q)){let e=K(u);(0,o.o8)(Y)||(e.status="fulfilled",e.value=!0),a(e)}else throw q}return{mutate:Q,get data(){return x.data=!0,Y},get error(){return x.error=!0,q},get isValidating(){return x.isValidating=!0,G},get isLoading(){return x.isLoading=!0,H}}})}}]);
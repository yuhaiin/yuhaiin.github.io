"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5118],{34:function(e,t,n){var r=n(2265),i="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},u=r.useState,o=r.useEffect,a=r.useLayoutEffect,l=r.useDebugValue;function s(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!i(e,n)}catch(e){return!0}}var c="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var n=t(),r=u({inst:{value:n,getSnapshot:t}}),i=r[0].inst,c=r[1];return a(function(){i.value=n,i.getSnapshot=t,s(i)&&c({inst:i})},[e,n,t]),o(function(){return s(i)&&c({inst:i}),e(function(){s(i)&&c({inst:i})})},[e]),l(n),n};t.useSyncExternalStore=void 0!==r.useSyncExternalStore?r.useSyncExternalStore:c},2558:function(e,t,n){e.exports=n(34)},2827:function(e,t,n){n.d(t,{$l:function(){return o},BN:function(){return P},DY:function(){return g},J$:function(){return q},JN:function(){return m},LI:function(){return k},PM:function(){return s},W6:function(){return V},i_:function(){return u},ko:function(){return K},kw:function(){return L},mf:function(){return l},o8:function(){return a},qC:function(){return D},s6:function(){return H},sj:function(){return x},u3:function(){return A},u_:function(){return $},w6:function(){return S},xD:function(){return Q}});var r=n(2265);let i=()=>{},u=i(),o=Object,a=e=>e===u,l=e=>"function"==typeof e,s=(e,t)=>({...e,...t}),c=e=>l(e.then),f=new WeakMap,d=0,E=e=>{let t,n;let r=typeof e,i=e&&e.constructor,u=i==Date;if(o(e)!==e||u||i==RegExp)t=u?e.toJSON():"symbol"==r?e.toString():"string"==r?JSON.stringify(e):""+e;else{if(t=f.get(e))return t;if(t=++d+"~",f.set(e,t),i==Array){for(n=0,t="@";n<e.length;n++)t+=E(e[n])+",";f.set(e,t)}if(i==o){t="#";let r=o.keys(e).sort();for(;!a(n=r.pop());)a(e[n])||(t+=n+":"+E(e[n])+",");f.set(e,t)}}return t},g=new WeakMap,w={},v={},_="undefined",h=typeof window!=_,p=typeof document!=_,y=()=>h&&typeof window.requestAnimationFrame!=_,m=(e,t)=>{let n=g.get(e);return[()=>!a(t)&&e.get(t)||w,r=>{if(!a(t)){let i=e.get(t);t in v||(v[t]=i),n[5](t,s(i,r),i||w)}},n[6],()=>!a(t)&&t in v?v[t]:!a(t)&&e.get(t)||w]},R=!0,[T,b]=h&&window.addEventListener?[window.addEventListener.bind(window),window.removeEventListener.bind(window)]:[i,i],O={initFocus:e=>(p&&document.addEventListener("visibilitychange",e),T("focus",e),()=>{p&&document.removeEventListener("visibilitychange",e),b("focus",e)}),initReconnect:e=>{let t=()=>{R=!0,e()},n=()=>{R=!1};return T("online",t),T("offline",n),()=>{b("online",t),b("offline",n)}}},S=!r.useId,V=!h||"Deno"in window,L=e=>y()?window.requestAnimationFrame(e):setTimeout(e,1),k=V?r.useEffect:r.useLayoutEffect,C="undefined"!=typeof navigator&&navigator.connection,N=!V&&C&&(["slow-2g","2g"].includes(C.effectiveType)||C.saveData),D=e=>{if(l(e))try{e=e()}catch(t){e=""}let t=e;return[e="string"==typeof e?e:(Array.isArray(e)?e.length:e)?E(e):"",t]},I=0,A=()=>++I;var x={__proto__:null,ERROR_REVALIDATE_EVENT:3,FOCUS_EVENT:0,MUTATE_EVENT:2,RECONNECT_EVENT:1};async function P(...e){let[t,n,r,i]=e,o=s({populateCache:!0,throwOnError:!0},"boolean"==typeof i?{revalidate:i}:i||{}),f=o.populateCache,d=o.rollbackOnError,E=o.optimisticData,w=e=>"function"==typeof d?d(e):!1!==d,v=o.throwOnError;if(l(n)){let e=[];for(let r of t.keys())!/^\$(inf|sub)\$/.test(r)&&n(t.get(r)._k)&&e.push(r);return Promise.all(e.map(_))}return _(n);async function _(n){let i;let[s]=D(n);if(!s)return;let[d,_]=m(t,s),[h,p,y,R]=g.get(t),T=()=>{let e=h[s];return(l(o.revalidate)?o.revalidate(d().data,n):!1!==o.revalidate)&&(delete y[s],delete R[s],e&&e[0])?e[0](2).then(()=>d().data):d().data};if(e.length<3)return T();let b=r,O=A();p[s]=[O,0];let S=!a(E),V=d(),L=V.data,k=V._c,C=a(k)?L:k;if(S&&_({data:E=l(E)?E(C,L):E,_c:C}),l(b))try{b=b(C)}catch(e){i=e}if(b&&c(b)){if(b=await b.catch(e=>{i=e}),O!==p[s][0]){if(i)throw i;return b}i&&S&&w(i)&&(f=!0,_({data:C,_c:u}))}if(f&&!i&&(l(f)?_({data:f(b,C),error:u,_c:u}):_({data:b,error:u,_c:u})),p[s][1]=A(),Promise.resolve(T()).then(()=>{_({_c:u})}),i){if(v)throw i;return}return b}}let j=(e,t)=>{for(let n in e)e[n][0]&&e[n][0](t)},M=(e,t)=>{if(!g.has(e)){let n=s(O,t),r={},o=P.bind(u,e),a=i,l={},c=(e,t)=>{let n=l[e]||[];return l[e]=n,n.push(t),()=>n.splice(n.indexOf(t),1)},f=(t,n,r)=>{e.set(t,n);let i=l[t];if(i)for(let e of i)e(n,r)},d=()=>{if(!g.has(e)&&(g.set(e,[r,{},{},{},o,f,c]),!V)){let t=n.initFocus(setTimeout.bind(u,j.bind(u,r,0))),i=n.initReconnect(setTimeout.bind(u,j.bind(u,r,1)));a=()=>{t&&t(),i&&i(),g.delete(e)}}};return d(),[e,o,d,a]}return[e,g.get(e)[4]]},[F,W]=M(new Map),$=s({onLoadingSlow:i,onSuccess:i,onError:i,onErrorRetry:(e,t,n,r,i)=>{let u=n.errorRetryCount,o=i.retryCount,l=~~((Math.random()+.5)*(1<<(o<8?o:8)))*n.errorRetryInterval;(a(u)||!(o>u))&&setTimeout(r,l,i)},onDiscarded:i,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:N?1e4:5e3,focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:N?5e3:3e3,compare:(e,t)=>E(e)==E(t),isPaused:()=>!1,cache:F,mutate:W,fallback:{}},{isOnline:()=>R,isVisible:()=>{let e=p&&document.visibilityState;return a(e)||"hidden"!==e}}),J=(e,t)=>{let n=s(e,t);if(t){let{use:r,fallback:i}=e,{use:u,fallback:o}=t;r&&u&&(n.use=r.concat(u)),i&&o&&(n.fallback=s(i,o))}return n},U=(0,r.createContext)({}),q=e=>{let{value:t}=e,n=(0,r.useContext)(U),i=l(t),o=(0,r.useMemo)(()=>i?t(n):t,[i,n,t]),a=(0,r.useMemo)(()=>i?o:J(n,o),[i,n,o]),c=o&&o.provider,f=(0,r.useRef)(u);c&&!f.current&&(f.current=M(c(a.cache||F),o));let d=f.current;return d&&(a.cache=d[0],a.mutate=d[1]),k(()=>{if(d)return d[2]&&d[2](),d[3]},[]),(0,r.createElement)(U.Provider,s(e,{value:a}))},B=h&&window.__SWR_DEVTOOLS_USE__,Y=B?window.__SWR_DEVTOOLS_USE__:[],Z=e=>l(e[1])?[e[0],e[1],e[2]||{}]:[e[0],null,(null===e[1]?e[2]:e[1])||{}],z=()=>s($,(0,r.useContext)(U)),G=Y.concat(e=>(t,n,r)=>{let i=n&&((...e)=>{let[r]=D(t),[,,,i]=g.get(F);if(r.startsWith("$inf$"))return n(...e);let u=i[r];return a(u)?n(...e):(delete i[r],u)});return e(t,i,r)}),H=e=>function(...t){let n=z(),[r,i,u]=Z(t),o=J(n,u),a=e,{use:l}=o,s=(l||[]).concat(G);for(let e=s.length;e--;)a=s[e](a);return a(r,i||o.fetcher||null,o)},K=(e,t,n)=>{let r=t[e]||(t[e]=[]);return r.push(n),()=>{let e=r.indexOf(n);e>=0&&(r[e]=r[r.length-1],r.pop())}},Q=(e,t)=>(...n)=>{let[r,i,u]=Z(n),o=(u.use||[]).concat(t);return e(r,i,{...u,use:o})};B&&(window.__SWR_DEVTOOLS_REACT__=r)},5118:function(e,t,n){n.d(t,{ZP:function(){return l}});var r=n(2265),i=n(2558),u=n(2827);let o=r.use||(e=>{if("pending"===e.status)throw e;if("fulfilled"===e.status)return e.value;if("rejected"===e.status)throw e.reason;throw e.status="pending",e.then(t=>{e.status="fulfilled",e.value=t},t=>{e.status="rejected",e.reason=t}),e}),a={dedupe:!0};u.$l.defineProperty(u.J$,"defaultValue",{value:u.u_});let l=(0,u.s6)((e,t,n)=>{let{cache:l,compare:s,suspense:c,fallbackData:f,revalidateOnMount:d,revalidateIfStale:E,refreshInterval:g,refreshWhenHidden:w,refreshWhenOffline:v,keepPreviousData:_}=n,[h,p,y,m]=u.DY.get(l),[R,T]=(0,u.qC)(e),b=(0,r.useRef)(!1),O=(0,r.useRef)(!1),S=(0,r.useRef)(R),V=(0,r.useRef)(t),L=(0,r.useRef)(n),k=()=>L.current,C=()=>k().isVisible()&&k().isOnline(),[N,D,I,A]=(0,u.JN)(l,R),x=(0,r.useRef)({}).current,P=(0,u.o8)(f)?n.fallback[R]:f,j=(e,t)=>{for(let n in x)if("data"===n){if(!s(e[n],t[n])&&(!(0,u.o8)(e[n])||!s(Y,t[n])))return!1}else if(t[n]!==e[n])return!1;return!0},M=(0,r.useMemo)(()=>{let e=!!R&&!!t&&((0,u.o8)(d)?!k().isPaused()&&!c&&(!!(0,u.o8)(E)||E):d),n=t=>{let n=(0,u.PM)(t);return(delete n._k,e)?{isValidating:!0,isLoading:!0,...n}:n},r=N(),i=A(),o=n(r),a=r===i?o:n(i),l=o;return[()=>{let e=n(N());return j(e,l)?(l.data=e.data,l.isLoading=e.isLoading,l.isValidating=e.isValidating,l.error=e.error,l):(l=e,e)},()=>a]},[l,R]),F=(0,i.useSyncExternalStore)((0,r.useCallback)(e=>I(R,(t,n)=>{j(n,t)||e()}),[l,R]),M[0],M[1]),W=!b.current,$=h[R]&&h[R].length>0,J=F.data,U=(0,u.o8)(J)?P:J,q=F.error,B=(0,r.useRef)(U),Y=_?(0,u.o8)(J)?B.current:J:U,Z=(!$||!!(0,u.o8)(q))&&(W&&!(0,u.o8)(d)?d:!k().isPaused()&&(c?!(0,u.o8)(U)&&E:(0,u.o8)(U)||E)),z=!!(R&&t&&W&&Z),G=(0,u.o8)(F.isValidating)?z:F.isValidating,H=(0,u.o8)(F.isLoading)?z:F.isLoading,K=(0,r.useCallback)(async e=>{let t,r;let i=V.current;if(!R||!i||O.current||k().isPaused())return!1;let o=!0,a=e||{},l=!y[R]||!a.dedupe,c=()=>u.w6?!O.current&&R===S.current&&b.current:R===S.current,f={isValidating:!1,isLoading:!1},d=()=>{D(f)},E=()=>{let e=y[R];e&&e[1]===r&&delete y[R]},g={isValidating:!0};(0,u.o8)(N().data)&&(g.isLoading=!0);try{if(l&&(D(g),n.loadingTimeout&&(0,u.o8)(N().data)&&setTimeout(()=>{o&&c()&&k().onLoadingSlow(R,n)},n.loadingTimeout),y[R]=[i(T),(0,u.u3)()]),[t,r]=y[R],t=await t,l&&setTimeout(E,n.dedupingInterval),!y[R]||y[R][1]!==r)return l&&c()&&k().onDiscarded(R),!1;f.error=u.i_;let e=p[R];if(!(0,u.o8)(e)&&(r<=e[0]||r<=e[1]||0===e[1]))return d(),l&&c()&&k().onDiscarded(R),!1;let a=N().data;f.data=s(a,t)?a:t,l&&c()&&k().onSuccess(t,R,n)}catch(n){E();let e=k(),{shouldRetryOnError:t}=e;!e.isPaused()&&(f.error=n,l&&c()&&(e.onError(n,R,e),(!0===t||(0,u.mf)(t)&&t(n))&&(!k().revalidateOnFocus||!k().revalidateOnReconnect||C())&&e.onErrorRetry(n,R,e,e=>{let t=h[R];t&&t[0]&&t[0](u.sj.ERROR_REVALIDATE_EVENT,e)},{retryCount:(a.retryCount||0)+1,dedupe:!0})))}return o=!1,d(),!0},[R,l]),Q=(0,r.useCallback)((...e)=>(0,u.BN)(l,S.current,...e),[]);if((0,u.LI)(()=>{V.current=t,L.current=n,(0,u.o8)(J)||(B.current=J)}),(0,u.LI)(()=>{if(!R)return;let e=K.bind(u.i_,a),t=0,n=(0,u.ko)(R,h,(n,r={})=>{if(n==u.sj.FOCUS_EVENT){let n=Date.now();k().revalidateOnFocus&&n>t&&C()&&(t=n+k().focusThrottleInterval,e())}else if(n==u.sj.RECONNECT_EVENT)k().revalidateOnReconnect&&C()&&e();else if(n==u.sj.MUTATE_EVENT)return K();else if(n==u.sj.ERROR_REVALIDATE_EVENT)return K(r)});return O.current=!1,S.current=R,b.current=!0,D({_k:T}),Z&&((0,u.o8)(U)||u.W6?e():(0,u.kw)(e)),()=>{O.current=!0,n()}},[R]),(0,u.LI)(()=>{let e;function t(){let t=(0,u.mf)(g)?g(N().data):g;t&&-1!==e&&(e=setTimeout(n,t))}function n(){!N().error&&(w||k().isVisible())&&(v||k().isOnline())?K(a).then(t):t()}return t(),()=>{e&&(clearTimeout(e),e=-1)}},[g,w,v,R]),(0,r.useDebugValue)(Y),c&&(0,u.o8)(U)&&R){if(!u.w6&&u.W6)throw Error("Fallback data is required when using suspense in SSR.");V.current=t,L.current=n,O.current=!1;let e=m[R];if((0,u.o8)(e)||o(Q(e)),(0,u.o8)(q)){let e=K(a);(0,u.o8)(Y)||(e.status="fulfilled",e.value=!0),o(e)}else throw q}return{mutate:Q,get data(){return x.data=!0,Y},get error(){return x.error=!0,q},get isValidating(){return x.isValidating=!0,G},get isLoading(){return x.isLoading=!0,H}}})}}]);
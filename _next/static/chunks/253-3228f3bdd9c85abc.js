"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[253],{8536:function(e,t,r){r.d(t,{Z:function(){return R}});var n=r(6760),a=r.n(n),i=r(2265),o=r(4230),l=r(7701),u=r(8066);function s(e,t){return Array.isArray(e)?e.includes(t):e===t}let d=i.createContext({});d.displayName="AccordionContext";var c=r(7437);let f=i.forwardRef((e,t)=>{let{as:r="div",bsPrefix:n,className:o,children:f,eventKey:v,...g}=e,{activeEventKey:b}=(0,i.useContext)(d);return n=(0,l.vE)(n,"accordion-collapse"),(0,c.jsx)(u.Z,{ref:t,in:s(b,v),...g,className:a()(o,n),children:(0,c.jsx)(r,{children:i.Children.only(f)})})});f.displayName="AccordionCollapse";let v=i.createContext({eventKey:""});v.displayName="AccordionItemContext";let g=i.forwardRef((e,t)=>{let{as:r="div",bsPrefix:n,className:o,onEnter:u,onEntering:s,onEntered:d,onExit:g,onExiting:b,onExited:E,...m}=e;n=(0,l.vE)(n,"accordion-body");let{eventKey:y}=(0,i.useContext)(v);return(0,c.jsx)(f,{eventKey:y,onEnter:u,onEntering:s,onEntered:d,onExit:g,onExiting:b,onExited:E,children:(0,c.jsx)(r,{ref:t,...m,className:a()(o,n)})})});g.displayName="AccordionBody";let b=i.forwardRef((e,t)=>{let{as:r="button",bsPrefix:n,className:o,onClick:u,...f}=e;n=(0,l.vE)(n,"accordion-button");let{eventKey:g}=(0,i.useContext)(v),b=function(e,t){let{activeEventKey:r,onSelect:n,alwaysOpen:a}=(0,i.useContext)(d);return i=>{let o=e===r?null:e;a&&(o=Array.isArray(r)?r.includes(e)?r.filter(t=>t!==e):[...r,e]:[e]),null==n||n(o,i),null==t||t(i)}}(g,u),{activeEventKey:E}=(0,i.useContext)(d);return"button"===r&&(f.type="button"),(0,c.jsx)(r,{ref:t,onClick:b,...f,"aria-expanded":Array.isArray(E)?E.includes(g):g===E,className:a()(o,n,!s(E,g)&&"collapsed")})});b.displayName="AccordionButton";let E=i.forwardRef((e,t)=>{let{as:r="h2",bsPrefix:n,className:i,children:o,onClick:u,...s}=e;return n=(0,l.vE)(n,"accordion-header"),(0,c.jsx)(r,{ref:t,...s,className:a()(i,n),children:(0,c.jsx)(b,{onClick:u,children:o})})});E.displayName="AccordionHeader";let m=i.forwardRef((e,t)=>{let{as:r="div",bsPrefix:n,className:o,eventKey:u,...s}=e;n=(0,l.vE)(n,"accordion-item");let d=(0,i.useMemo)(()=>({eventKey:u}),[u]);return(0,c.jsx)(v.Provider,{value:d,children:(0,c.jsx)(r,{ref:t,...s,className:a()(o,n)})})});m.displayName="AccordionItem";let y=i.forwardRef((e,t)=>{let{as:r="div",activeKey:n,bsPrefix:u,className:s,onSelect:f,flush:v,alwaysOpen:g,...b}=(0,o.Ch)(e,{activeKey:"onSelect"}),E=(0,l.vE)(u,"accordion"),m=(0,i.useMemo)(()=>({activeEventKey:n,onSelect:f,alwaysOpen:g}),[n,f,g]);return(0,c.jsx)(d.Provider,{value:m,children:(0,c.jsx)(r,{ref:t,...b,className:a()(s,E,v&&"".concat(E,"-flush"))})})});y.displayName="Accordion";var R=Object.assign(y,{Button:b,Collapse:f,Item:m,Header:E,Body:g})},5767:function(e,t,r){var n=r(6760),a=r.n(n),i=r(2265),o=r(7701),l=r(7437);let u=i.forwardRef((e,t)=>{let{bsPrefix:r,bg:n="primary",pill:i=!1,text:u,className:s,as:d="span",...c}=e,f=(0,o.vE)(r,"badge");return(0,l.jsx)(d,{ref:t,...c,className:a()(s,f,i&&"rounded-pill",u&&"text-".concat(u),n&&"bg-".concat(n))})});u.displayName="Badge",t.Z=u},1074:function(e,t,r){r.d(t,{K:function(){return i},O:function(){return o}});var n=r(7472),a=r(5369);let i=(0,n.l)("Ch9nb29nbGUvcHJvdG9idWYvdGltZXN0YW1wLnByb3RvEg9nb29nbGUucHJvdG9idWYiKwoJVGltZXN0YW1wEg8KB3NlY29uZHMYASABKAMSDQoFbmFub3MYAiABKAVChQEKE2NvbS5nb29nbGUucHJvdG9idWZCDlRpbWVzdGFtcFByb3RvUAFaMmdvb2dsZS5nb2xhbmcub3JnL3Byb3RvYnVmL3R5cGVzL2tub3duL3RpbWVzdGFtcHBi+AEBogIDR1BCqgIeR29vZ2xlLlByb3RvYnVmLldlbGxLbm93blR5cGVzYgZwcm90bzM"),o=(0,a.L)(i,0)},733:function(e,t,r){r.d(t,{Z:function(){return d}});var n=r(2265),a=r(2558),i=r(2827);let o=n.use||(e=>{if("pending"===e.status)throw e;if("fulfilled"===e.status)return e.value;if("rejected"===e.status)throw e.reason;throw e.status="pending",e.then(t=>{e.status="fulfilled",e.value=t},t=>{e.status="rejected",e.reason=t}),e}),l={dedupe:!0};i.$l.defineProperty(i.J$,"defaultValue",{value:i.u_});let u=(0,i.s6)((e,t,r)=>{let{cache:u,compare:s,suspense:d,fallbackData:c,revalidateOnMount:f,revalidateIfStale:v,refreshInterval:g,refreshWhenHidden:b,refreshWhenOffline:E,keepPreviousData:m}=r,[y,R,p,h]=i.DY.get(u),[x,N]=(0,i.qC)(e),C=(0,n.useRef)(!1),w=(0,n.useRef)(!1),V=(0,n.useRef)(x),A=(0,n.useRef)(t),L=(0,n.useRef)(r),j=()=>L.current,T=()=>j().isVisible()&&j().isOnline(),[k,B,_,G]=(0,i.JN)(u,x),I=(0,n.useRef)({}).current,M=(0,i.o8)(c)?r.fallback[x]:c,O=(e,t)=>{for(let r in I)if("data"===r){if(!s(e[r],t[r])&&(!(0,i.o8)(e[r])||!s(P,t[r])))return!1}else if(t[r]!==e[r])return!1;return!0},S=(0,n.useMemo)(()=>{let e=!!x&&!!t&&((0,i.o8)(f)?!j().isPaused()&&!d&&(!!(0,i.o8)(v)||v):f),r=t=>{let r=(0,i.PM)(t);return(delete r._k,e)?{isValidating:!0,isLoading:!0,...r}:r},n=k(),a=G(),o=r(n),l=n===a?o:r(a),u=o;return[()=>{let e=r(k());return O(e,u)?(u.data=e.data,u.isLoading=e.isLoading,u.isValidating=e.isValidating,u.error=e.error,u):(u=e,e)},()=>l]},[u,x]),D=(0,a.useSyncExternalStore)((0,n.useCallback)(e=>_(x,(t,r)=>{O(r,t)||e()}),[u,x]),S[0],S[1]),Y=!C.current,Z=y[x]&&y[x].length>0,F=D.data,K=(0,i.o8)(F)?M:F,W=D.error,J=(0,n.useRef)(K),P=m?(0,i.o8)(F)?J.current:F:K,H=(!Z||!!(0,i.o8)(W))&&(Y&&!(0,i.o8)(f)?f:!j().isPaused()&&(d?!(0,i.o8)(K)&&v:(0,i.o8)(K)||v)),U=!!(x&&t&&Y&&H),z=(0,i.o8)(D.isValidating)?U:D.isValidating,q=(0,i.o8)(D.isLoading)?U:D.isLoading,$=(0,n.useCallback)(async e=>{let t,n;let a=A.current;if(!x||!a||w.current||j().isPaused())return!1;let o=!0,l=e||{},u=!p[x]||!l.dedupe,d=()=>i.w6?!w.current&&x===V.current&&C.current:x===V.current,c={isValidating:!1,isLoading:!1},f=()=>{B(c)},v=()=>{let e=p[x];e&&e[1]===n&&delete p[x]},g={isValidating:!0};(0,i.o8)(k().data)&&(g.isLoading=!0);try{if(u&&(B(g),r.loadingTimeout&&(0,i.o8)(k().data)&&setTimeout(()=>{o&&d()&&j().onLoadingSlow(x,r)},r.loadingTimeout),p[x]=[a(N),(0,i.u3)()]),[t,n]=p[x],t=await t,u&&setTimeout(v,r.dedupingInterval),!p[x]||p[x][1]!==n)return u&&d()&&j().onDiscarded(x),!1;c.error=i.i_;let e=R[x];if(!(0,i.o8)(e)&&(n<=e[0]||n<=e[1]||0===e[1]))return f(),u&&d()&&j().onDiscarded(x),!1;let l=k().data;c.data=s(l,t)?l:t,u&&d()&&j().onSuccess(t,x,r)}catch(r){v();let e=j(),{shouldRetryOnError:t}=e;!e.isPaused()&&(c.error=r,u&&d()&&(e.onError(r,x,e),(!0===t||(0,i.mf)(t)&&t(r))&&(!j().revalidateOnFocus||!j().revalidateOnReconnect||T())&&e.onErrorRetry(r,x,e,e=>{let t=y[x];t&&t[0]&&t[0](i.sj.ERROR_REVALIDATE_EVENT,e)},{retryCount:(l.retryCount||0)+1,dedupe:!0})))}return o=!1,f(),!0},[x,u]),Q=(0,n.useCallback)((...e)=>(0,i.BN)(u,V.current,...e),[]);if((0,i.LI)(()=>{A.current=t,L.current=r,(0,i.o8)(F)||(J.current=F)}),(0,i.LI)(()=>{if(!x)return;let e=$.bind(i.i_,l),t=0,r=(0,i.ko)(x,y,(r,n={})=>{if(r==i.sj.FOCUS_EVENT){let r=Date.now();j().revalidateOnFocus&&r>t&&T()&&(t=r+j().focusThrottleInterval,e())}else if(r==i.sj.RECONNECT_EVENT)j().revalidateOnReconnect&&T()&&e();else if(r==i.sj.MUTATE_EVENT)return $();else if(r==i.sj.ERROR_REVALIDATE_EVENT)return $(n)});return w.current=!1,V.current=x,C.current=!0,B({_k:N}),H&&((0,i.o8)(K)||i.W6?e():(0,i.kw)(e)),()=>{w.current=!0,r()}},[x]),(0,i.LI)(()=>{let e;function t(){let t=(0,i.mf)(g)?g(k().data):g;t&&-1!==e&&(e=setTimeout(r,t))}function r(){!k().error&&(b||j().isVisible())&&(E||j().isOnline())?$(l).then(t):t()}return t(),()=>{e&&(clearTimeout(e),e=-1)}},[g,b,E,x]),(0,n.useDebugValue)(P),d&&(0,i.o8)(K)&&x){if(!i.w6&&i.W6)throw Error("Fallback data is required when using suspense in SSR.");A.current=t,L.current=r,w.current=!1;let e=h[x];if((0,i.o8)(e)||o(Q(e)),(0,i.o8)(W)){let e=$(l);(0,i.o8)(P)||(e.status="fulfilled",e.value=!0),o(e)}else throw W}return{mutate:Q,get data(){return I.data=!0,P},get error(){return I.error=!0,W},get isValidating(){return I.isValidating=!0,z},get isLoading(){return I.isLoading=!0,q}}}),s=new WeakMap,d=(0,i.xD)(u,e=>(t,r,n)=>{let[a,o]=(0,i.qC)(t),l=a?"$sub$"+a:void 0,u=e(l,null,n),{cache:d}=n;s.has(d)||s.set(d,[new Map,new Map]);let[c,f]=s.get(d);return(0,i.LI)(()=>{if(!l)return;let[,e]=(0,i.JN)(d,l),t=c.get(l)||0;if(c.set(l,t+1),!t){let t=r(o,{next:(t,r)=>{null!=t?e({error:t}):(e({error:void 0}),u.mutate(r,!1))}});if("function"!=typeof t)throw Error("The `subscribe` function must return a function to unsubscribe.");f.set(l,t)}return()=>{let e=c.get(l)-1;if(c.set(l,e),!e){let e=f.get(l);null==e||e()}}},[l]),{get data(){return u.data},get error(){return u.error}}})}}]);
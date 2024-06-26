"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[591],{2064:function(e,t,r){r.d(t,{Z:function(){return h}});var n=r(6800),a=r.n(n),i=r(2265),o=r(505),s=r(2574),l=r(7510);function u(e,t){return Array.isArray(e)?e.includes(t):e===t}let d=i.createContext({});d.displayName="AccordionContext";var c=r(7437);let f=i.forwardRef((e,t)=>{let{as:r="div",bsPrefix:n,className:o,children:f,eventKey:g,...E}=e,{activeEventKey:v}=(0,i.useContext)(d);return n=(0,s.vE)(n,"accordion-collapse"),(0,c.jsx)(l.Z,{ref:t,in:u(v,g),...E,className:a()(o,n),children:(0,c.jsx)(r,{children:i.Children.only(f)})})});f.displayName="AccordionCollapse";let g=i.createContext({eventKey:""});g.displayName="AccordionItemContext";let E=i.forwardRef((e,t)=>{let{as:r="div",bsPrefix:n,className:o,onEnter:l,onEntering:u,onEntered:d,onExit:E,onExiting:v,onExited:m,...p}=e;n=(0,s.vE)(n,"accordion-body");let{eventKey:y}=(0,i.useContext)(g);return(0,c.jsx)(f,{eventKey:y,onEnter:l,onEntering:u,onEntered:d,onExit:E,onExiting:v,onExited:m,children:(0,c.jsx)(r,{ref:t,...p,className:a()(o,n)})})});E.displayName="AccordionBody";let v=i.forwardRef((e,t)=>{let{as:r="button",bsPrefix:n,className:o,onClick:l,...f}=e;n=(0,s.vE)(n,"accordion-button");let{eventKey:E}=(0,i.useContext)(g),v=function(e,t){let{activeEventKey:r,onSelect:n,alwaysOpen:a}=(0,i.useContext)(d);return i=>{let o=e===r?null:e;a&&(o=Array.isArray(r)?r.includes(e)?r.filter(t=>t!==e):[...r,e]:[e]),null==n||n(o,i),null==t||t(i)}}(E,l),{activeEventKey:m}=(0,i.useContext)(d);return"button"===r&&(f.type="button"),(0,c.jsx)(r,{ref:t,onClick:v,...f,"aria-expanded":Array.isArray(m)?m.includes(E):E===m,className:a()(o,n,!u(m,E)&&"collapsed")})});v.displayName="AccordionButton";let m=i.forwardRef((e,t)=>{let{as:r="h2",bsPrefix:n,className:i,children:o,onClick:l,...u}=e;return n=(0,s.vE)(n,"accordion-header"),(0,c.jsx)(r,{ref:t,...u,className:a()(i,n),children:(0,c.jsx)(v,{onClick:l,children:o})})});m.displayName="AccordionHeader";let p=i.forwardRef((e,t)=>{let{as:r="div",bsPrefix:n,className:o,eventKey:l,...u}=e;n=(0,s.vE)(n,"accordion-item");let d=(0,i.useMemo)(()=>({eventKey:l}),[l]);return(0,c.jsx)(g.Provider,{value:d,children:(0,c.jsx)(r,{ref:t,...u,className:a()(o,n)})})});p.displayName="AccordionItem";let y=i.forwardRef((e,t)=>{let{as:r="div",activeKey:n,bsPrefix:l,className:u,onSelect:f,flush:g,alwaysOpen:E,...v}=(0,o.Ch)(e,{activeKey:"onSelect"}),m=(0,s.vE)(l,"accordion"),p=(0,i.useMemo)(()=>({activeEventKey:n,onSelect:f,alwaysOpen:E}),[n,f,E]);return(0,c.jsx)(d.Provider,{value:p,children:(0,c.jsx)(r,{ref:t,...v,className:a()(u,m,g&&"".concat(m,"-flush"))})})});y.displayName="Accordion";var h=Object.assign(y,{Button:v,Collapse:f,Item:p,Header:m,Body:E})},2098:function(e,t,r){var n=r(6800),a=r.n(n),i=r(2265),o=r(2574),s=r(7437);let l=i.forwardRef((e,t)=>{let{bsPrefix:r,bg:n="primary",pill:i=!1,text:l,className:u,as:d="span",...c}=e,f=(0,o.vE)(r,"badge");return(0,s.jsx)(d,{ref:t,...c,className:a()(u,f,i&&"rounded-pill",l&&"text-".concat(l),n&&"bg-".concat(n))})});l.displayName="Badge",t.Z=l},3656:function(e,t,r){r.d(t,{Z:function(){return d}});var n=r(2265),a=r(554),i=r(3791);let o=n.use||(e=>{if("pending"===e.status)throw e;if("fulfilled"===e.status)return e.value;if("rejected"===e.status)throw e.reason;throw e.status="pending",e.then(t=>{e.status="fulfilled",e.value=t},t=>{e.status="rejected",e.reason=t}),e}),s={dedupe:!0};i.$l.defineProperty(i.J$,"defaultValue",{value:i.u_});let l=(0,i.s6)((e,t,r)=>{let{cache:l,compare:u,suspense:d,fallbackData:c,revalidateOnMount:f,revalidateIfStale:g,refreshInterval:E,refreshWhenHidden:v,refreshWhenOffline:m,keepPreviousData:p}=r,[y,h,x,N]=i.DY.get(l),[C,R]=(0,i.qC)(e),w=(0,n.useRef)(!1),b=(0,n.useRef)(!1),j=(0,n.useRef)(C),V=(0,n.useRef)(t),A=(0,n.useRef)(r),T=()=>A.current,k=()=>T().isVisible()&&T().isOnline(),[L,_,I,O]=(0,i.JN)(l,C),D=(0,n.useRef)({}).current,M=(0,i.o8)(c)?r.fallback[C]:c,P=(e,t)=>{for(let r in D)if("data"===r){if(!u(e[r],t[r])&&(!(0,i.o8)(e[r])||!u(W,t[r])))return!1}else if(t[r]!==e[r])return!1;return!0},S=(0,n.useMemo)(()=>{let e=!!C&&!!t&&((0,i.o8)(f)?!T().isPaused()&&!d&&(!!(0,i.o8)(g)||g):f),r=t=>{let r=(0,i.PM)(t);return(delete r._k,e)?{isValidating:!0,isLoading:!0,...r}:r},n=L(),a=O(),o=r(n),s=n===a?o:r(a),l=o;return[()=>{let e=r(L());return P(e,l)?(l.data=e.data,l.isLoading=e.isLoading,l.isValidating=e.isValidating,l.error=e.error,l):(l=e,e)},()=>s]},[l,C]),B=(0,a.useSyncExternalStore)((0,n.useCallback)(e=>I(C,(t,r)=>{P(r,t)||e()}),[l,C]),S[0],S[1]),F=!w.current,K=y[C]&&y[C].length>0,Z=B.data,$=(0,i.o8)(Z)?M:Z,q=B.error,J=(0,n.useRef)($),W=p?(0,i.o8)(Z)?J.current:Z:$,H=(!K||!!(0,i.o8)(q))&&(F&&!(0,i.o8)(f)?f:!T().isPaused()&&(d?!(0,i.o8)($)&&g:(0,i.o8)($)||g)),U=!!(C&&t&&F&&H),Y=(0,i.o8)(B.isValidating)?U:B.isValidating,z=(0,i.o8)(B.isLoading)?U:B.isLoading,G=(0,n.useCallback)(async e=>{let t,n;let a=V.current;if(!C||!a||b.current||T().isPaused())return!1;let o=!0,s=e||{},l=!x[C]||!s.dedupe,d=()=>i.w6?!b.current&&C===j.current&&w.current:C===j.current,c={isValidating:!1,isLoading:!1},f=()=>{_(c)},g=()=>{let e=x[C];e&&e[1]===n&&delete x[C]},E={isValidating:!0};(0,i.o8)(L().data)&&(E.isLoading=!0);try{if(l&&(_(E),r.loadingTimeout&&(0,i.o8)(L().data)&&setTimeout(()=>{o&&d()&&T().onLoadingSlow(C,r)},r.loadingTimeout),x[C]=[a(R),(0,i.u3)()]),[t,n]=x[C],t=await t,l&&setTimeout(g,r.dedupingInterval),!x[C]||x[C][1]!==n)return l&&d()&&T().onDiscarded(C),!1;c.error=i.i_;let e=h[C];if(!(0,i.o8)(e)&&(n<=e[0]||n<=e[1]||0===e[1]))return f(),l&&d()&&T().onDiscarded(C),!1;let s=L().data;c.data=u(s,t)?s:t,l&&d()&&T().onSuccess(t,C,r)}catch(r){g();let e=T(),{shouldRetryOnError:t}=e;!e.isPaused()&&(c.error=r,l&&d()&&(e.onError(r,C,e),(!0===t||(0,i.mf)(t)&&t(r))&&(!T().revalidateOnFocus||!T().revalidateOnReconnect||k())&&e.onErrorRetry(r,C,e,e=>{let t=y[C];t&&t[0]&&t[0](i.sj.ERROR_REVALIDATE_EVENT,e)},{retryCount:(s.retryCount||0)+1,dedupe:!0})))}return o=!1,f(),!0},[C,l]),Q=(0,n.useCallback)((...e)=>(0,i.BN)(l,j.current,...e),[]);if((0,i.LI)(()=>{V.current=t,A.current=r,(0,i.o8)(Z)||(J.current=Z)}),(0,i.LI)(()=>{if(!C)return;let e=G.bind(i.i_,s),t=0,r=(0,i.ko)(C,y,(r,n={})=>{if(r==i.sj.FOCUS_EVENT){let r=Date.now();T().revalidateOnFocus&&r>t&&k()&&(t=r+T().focusThrottleInterval,e())}else if(r==i.sj.RECONNECT_EVENT)T().revalidateOnReconnect&&k()&&e();else if(r==i.sj.MUTATE_EVENT)return G();else if(r==i.sj.ERROR_REVALIDATE_EVENT)return G(n)});return b.current=!1,j.current=C,w.current=!0,_({_k:R}),H&&((0,i.o8)($)||i.W6?e():(0,i.kw)(e)),()=>{b.current=!0,r()}},[C]),(0,i.LI)(()=>{let e;function t(){let t=(0,i.mf)(E)?E(L().data):E;t&&-1!==e&&(e=setTimeout(r,t))}function r(){!L().error&&(v||T().isVisible())&&(m||T().isOnline())?G(s).then(t):t()}return t(),()=>{e&&(clearTimeout(e),e=-1)}},[E,v,m,C]),(0,n.useDebugValue)(W),d&&(0,i.o8)($)&&C){if(!i.w6&&i.W6)throw Error("Fallback data is required when using suspense in SSR.");V.current=t,A.current=r,b.current=!1;let e=N[C];if((0,i.o8)(e)||o(Q(e)),(0,i.o8)(q)){let e=G(s);(0,i.o8)(W)||(e.status="fulfilled",e.value=!0),o(e)}else throw q}return{mutate:Q,get data(){return D.data=!0,W},get error(){return D.error=!0,q},get isValidating(){return D.isValidating=!0,Y},get isLoading(){return D.isLoading=!0,z}}}),u=new WeakMap,d=(0,i.xD)(l,e=>(t,r,n)=>{let[a,o]=(0,i.qC)(t),s=a?"$sub$"+a:void 0,l=e(s,null,n),{cache:d}=n;u.has(d)||u.set(d,[new Map,new Map]);let[c,f]=u.get(d);return(0,i.LI)(()=>{if(!s)return;let[,e]=(0,i.JN)(d,s),t=c.get(s)||0;if(c.set(s,t+1),!t){let t=r(o,{next:(t,r)=>{null!=t?e({error:t}):(e({error:void 0}),l.mutate(r,!1))}});if("function"!=typeof t)throw Error("The `subscribe` function must return a function to unsubscribe.");f.set(s,t)}return()=>{let e=c.get(s)-1;if(c.set(s,e),!e){let e=f.get(s);null==e||e()}}},[s]),{get data(){return l.data},get error(){return l.error}}})}}]);
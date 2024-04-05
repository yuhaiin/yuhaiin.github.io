"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[589],{2093:function(e,t,r){r.d(t,{Z:function(){return T}});var n=r(6480),a=r.n(n),o=r(2265),i=r(2540),l=r(2865),s=r(1242),u=r(3968),c=r(3179),d=r(7233),f=r(7271),p=r(2703),g=r(7437);let m={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function E(e,t){let r=t["offset".concat(e[0].toUpperCase()).concat(e.slice(1))],n=m[e];return r+parseInt((0,s.Z)(t,n[0]),10)+parseInt((0,s.Z)(t,n[1]),10)}let y={[u.Wj]:"collapse",[u.Ix]:"collapsing",[u.d0]:"collapsing",[u.cn]:"collapse show"},h=o.forwardRef((e,t)=>{let{onEnter:r,onEntering:n,onEntered:i,onExit:l,onExiting:s,className:u,children:m,dimension:h="height",in:v=!1,timeout:x=300,mountOnEnter:w=!1,unmountOnExit:N=!1,appear:R=!1,getDimensionValue:C=E,...b}=e,j="function"==typeof h?h():h,A=(0,o.useMemo)(()=>(0,d.Z)(e=>{e.style[j]="0"},r),[j,r]),T=(0,o.useMemo)(()=>(0,d.Z)(e=>{let t="scroll".concat(j[0].toUpperCase()).concat(j.slice(1));e.style[j]="".concat(e[t],"px")},n),[j,n]),V=(0,o.useMemo)(()=>(0,d.Z)(e=>{e.style[j]=null},i),[j,i]),L=(0,o.useMemo)(()=>(0,d.Z)(e=>{e.style[j]="".concat(C(j,e),"px"),(0,f.Z)(e)},l),[l,C,j]),k=(0,o.useMemo)(()=>(0,d.Z)(e=>{e.style[j]=null},s),[j,s]);return(0,g.jsx)(p.Z,{ref:t,addEndListener:c.Z,...b,"aria-expanded":b.role?v:null,onEnter:A,onEntering:T,onEntered:V,onExit:L,onExiting:k,childRef:m.ref,in:v,timeout:x,mountOnEnter:w,unmountOnExit:N,appear:R,children:(e,t)=>o.cloneElement(m,{...t,className:a()(u,m.props.className,y[e],"width"===j&&"collapse-horizontal")})})});function v(e,t){return Array.isArray(e)?e.includes(t):e===t}let x=o.createContext({});x.displayName="AccordionContext";let w=o.forwardRef((e,t)=>{let{as:r="div",bsPrefix:n,className:i,children:s,eventKey:u,...c}=e,{activeEventKey:d}=(0,o.useContext)(x);return n=(0,l.vE)(n,"accordion-collapse"),(0,g.jsx)(h,{ref:t,in:v(d,u),...c,className:a()(i,n),children:(0,g.jsx)(r,{children:o.Children.only(s)})})});w.displayName="AccordionCollapse";let N=o.createContext({eventKey:""});N.displayName="AccordionItemContext";let R=o.forwardRef((e,t)=>{let{as:r="div",bsPrefix:n,className:i,onEnter:s,onEntering:u,onEntered:c,onExit:d,onExiting:f,onExited:p,...m}=e;n=(0,l.vE)(n,"accordion-body");let{eventKey:E}=(0,o.useContext)(N);return(0,g.jsx)(w,{eventKey:E,onEnter:s,onEntering:u,onEntered:c,onExit:d,onExiting:f,onExited:p,children:(0,g.jsx)(r,{ref:t,...m,className:a()(i,n)})})});R.displayName="AccordionBody";let C=o.forwardRef((e,t)=>{let{as:r="button",bsPrefix:n,className:i,onClick:s,...u}=e;n=(0,l.vE)(n,"accordion-button");let{eventKey:c}=(0,o.useContext)(N),d=function(e,t){let{activeEventKey:r,onSelect:n,alwaysOpen:a}=(0,o.useContext)(x);return o=>{let i=e===r?null:e;a&&(i=Array.isArray(r)?r.includes(e)?r.filter(t=>t!==e):[...r,e]:[e]),null==n||n(i,o),null==t||t(o)}}(c,s),{activeEventKey:f}=(0,o.useContext)(x);return"button"===r&&(u.type="button"),(0,g.jsx)(r,{ref:t,onClick:d,...u,"aria-expanded":Array.isArray(f)?f.includes(c):c===f,className:a()(i,n,!v(f,c)&&"collapsed")})});C.displayName="AccordionButton";let b=o.forwardRef((e,t)=>{let{as:r="h2",bsPrefix:n,className:o,children:i,onClick:s,...u}=e;return n=(0,l.vE)(n,"accordion-header"),(0,g.jsx)(r,{ref:t,...u,className:a()(o,n),children:(0,g.jsx)(C,{onClick:s,children:i})})});b.displayName="AccordionHeader";let j=o.forwardRef((e,t)=>{let{as:r="div",bsPrefix:n,className:i,eventKey:s,...u}=e;n=(0,l.vE)(n,"accordion-item");let c=(0,o.useMemo)(()=>({eventKey:s}),[s]);return(0,g.jsx)(N.Provider,{value:c,children:(0,g.jsx)(r,{ref:t,...u,className:a()(i,n)})})});j.displayName="AccordionItem";let A=o.forwardRef((e,t)=>{let{as:r="div",activeKey:n,bsPrefix:s,className:u,onSelect:c,flush:d,alwaysOpen:f,...p}=(0,i.Ch)(e,{activeKey:"onSelect"}),m=(0,l.vE)(s,"accordion"),E=(0,o.useMemo)(()=>({activeEventKey:n,onSelect:c,alwaysOpen:f}),[n,c,f]);return(0,g.jsx)(x.Provider,{value:E,children:(0,g.jsx)(r,{ref:t,...p,className:a()(u,m,d&&"".concat(m,"-flush"))})})});A.displayName="Accordion";var T=Object.assign(A,{Button:C,Collapse:w,Item:j,Header:b,Body:R})},5097:function(e,t,r){var n=r(6480),a=r.n(n),o=r(2265),i=r(2865),l=r(7437);let s=o.forwardRef((e,t)=>{let{bsPrefix:r,bg:n="primary",pill:o=!1,text:s,className:u,as:c="span",...d}=e,f=(0,i.vE)(r,"badge");return(0,l.jsx)(c,{ref:t,...d,className:a()(u,f,o&&"rounded-pill",s&&"text-".concat(s),n&&"bg-".concat(n))})});s.displayName="Badge",t.Z=s},7233:function(e,t){t.Z=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter(e=>null!=e).reduce((e,t)=>{if("function"!=typeof t)throw Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var r=arguments.length,n=Array(r),a=0;a<r;a++)n[a]=arguments[a];e.apply(this,n),t.apply(this,n)}},null)}},2837:function(e,t,r){r.d(t,{Z:function(){return c}});var n=r(2265),a=r(2362),o=r(9417);let i=n.use||(e=>{if("pending"===e.status)throw e;if("fulfilled"===e.status)return e.value;if("rejected"===e.status)throw e.reason;throw e.status="pending",e.then(t=>{e.status="fulfilled",e.value=t},t=>{e.status="rejected",e.reason=t}),e}),l={dedupe:!0};o.$l.defineProperty(o.J$,"defaultValue",{value:o.u_});let s=(0,o.s6)((e,t,r)=>{let{cache:s,compare:u,suspense:c,fallbackData:d,revalidateOnMount:f,revalidateIfStale:p,refreshInterval:g,refreshWhenHidden:m,refreshWhenOffline:E,keepPreviousData:y}=r,[h,v,x,w]=o.DY.get(s),[N,R]=(0,o.qC)(e),C=(0,n.useRef)(!1),b=(0,n.useRef)(!1),j=(0,n.useRef)(N),A=(0,n.useRef)(t),T=(0,n.useRef)(r),V=()=>T.current,L=()=>V().isVisible()&&V().isOnline(),[k,_,I,Z]=(0,o.JN)(s,N),M=(0,n.useRef)({}).current,O=(0,o.o8)(d)?r.fallback[N]:d,D=(e,t)=>{for(let r in M)if("data"===r){if(!u(e[r],t[r])&&(!(0,o.o8)(e[r])||!u(q,t[r])))return!1}else if(t[r]!==e[r])return!1;return!0},P=(0,n.useMemo)(()=>{let e=!!N&&!!t&&((0,o.o8)(f)?!V().isPaused()&&!c&&(!!(0,o.o8)(p)||p):f),r=t=>{let r=(0,o.PM)(t);return(delete r._k,e)?{isValidating:!0,isLoading:!0,...r}:r},n=k(),a=Z(),i=r(n),l=n===a?i:r(a),s=i;return[()=>{let e=r(k());return D(e,s)?(s.data=e.data,s.isLoading=e.isLoading,s.isValidating=e.isValidating,s.error=e.error,s):(s=e,e)},()=>l]},[s,N]),S=(0,a.useSyncExternalStore)((0,n.useCallback)(e=>I(N,(t,r)=>{D(r,t)||e()}),[s,N]),P[0],P[1]),B=!C.current,F=h[N]&&h[N].length>0,K=S.data,U=(0,o.o8)(K)?O:K,W=S.error,$=(0,n.useRef)(U),q=y?(0,o.o8)(K)?$.current:K:U,J=(!F||!!(0,o.o8)(W))&&(B&&!(0,o.o8)(f)?f:!V().isPaused()&&(c?!(0,o.o8)(U)&&p:(0,o.o8)(U)||p)),H=!!(N&&t&&B&&J),z=(0,o.o8)(S.isValidating)?H:S.isValidating,Y=(0,o.o8)(S.isLoading)?H:S.isLoading,G=(0,n.useCallback)(async e=>{let t,n;let a=A.current;if(!N||!a||b.current||V().isPaused())return!1;let i=!0,l=e||{},s=!x[N]||!l.dedupe,c=()=>o.w6?!b.current&&N===j.current&&C.current:N===j.current,d={isValidating:!1,isLoading:!1},f=()=>{_(d)},p=()=>{let e=x[N];e&&e[1]===n&&delete x[N]},g={isValidating:!0};(0,o.o8)(k().data)&&(g.isLoading=!0);try{if(s&&(_(g),r.loadingTimeout&&(0,o.o8)(k().data)&&setTimeout(()=>{i&&c()&&V().onLoadingSlow(N,r)},r.loadingTimeout),x[N]=[a(R),(0,o.u3)()]),[t,n]=x[N],t=await t,s&&setTimeout(p,r.dedupingInterval),!x[N]||x[N][1]!==n)return s&&c()&&V().onDiscarded(N),!1;d.error=o.i_;let e=v[N];if(!(0,o.o8)(e)&&(n<=e[0]||n<=e[1]||0===e[1]))return f(),s&&c()&&V().onDiscarded(N),!1;let l=k().data;d.data=u(l,t)?l:t,s&&c()&&V().onSuccess(t,N,r)}catch(r){p();let e=V(),{shouldRetryOnError:t}=e;!e.isPaused()&&(d.error=r,s&&c()&&(e.onError(r,N,e),(!0===t||(0,o.mf)(t)&&t(r))&&(!V().revalidateOnFocus||!V().revalidateOnReconnect||L())&&e.onErrorRetry(r,N,e,e=>{let t=h[N];t&&t[0]&&t[0](o.sj.ERROR_REVALIDATE_EVENT,e)},{retryCount:(l.retryCount||0)+1,dedupe:!0})))}return i=!1,f(),!0},[N,s]),Q=(0,n.useCallback)((...e)=>(0,o.BN)(s,j.current,...e),[]);if((0,o.LI)(()=>{A.current=t,T.current=r,(0,o.o8)(K)||($.current=K)}),(0,o.LI)(()=>{if(!N)return;let e=G.bind(o.i_,l),t=0,r=(0,o.ko)(N,h,(r,n={})=>{if(r==o.sj.FOCUS_EVENT){let r=Date.now();V().revalidateOnFocus&&r>t&&L()&&(t=r+V().focusThrottleInterval,e())}else if(r==o.sj.RECONNECT_EVENT)V().revalidateOnReconnect&&L()&&e();else if(r==o.sj.MUTATE_EVENT)return G();else if(r==o.sj.ERROR_REVALIDATE_EVENT)return G(n)});return b.current=!1,j.current=N,C.current=!0,_({_k:R}),J&&((0,o.o8)(U)||o.W6?e():(0,o.kw)(e)),()=>{b.current=!0,r()}},[N]),(0,o.LI)(()=>{let e;function t(){let t=(0,o.mf)(g)?g(k().data):g;t&&-1!==e&&(e=setTimeout(r,t))}function r(){!k().error&&(m||V().isVisible())&&(E||V().isOnline())?G(l).then(t):t()}return t(),()=>{e&&(clearTimeout(e),e=-1)}},[g,m,E,N]),(0,n.useDebugValue)(q),c&&(0,o.o8)(U)&&N){if(!o.w6&&o.W6)throw Error("Fallback data is required when using suspense in SSR.");A.current=t,T.current=r,b.current=!1;let e=w[N];if((0,o.o8)(e)||i(Q(e)),(0,o.o8)(W)){let e=G(l);(0,o.o8)(q)||(e.status="fulfilled",e.value=!0),i(e)}else throw W}return{mutate:Q,get data(){return M.data=!0,q},get error(){return M.error=!0,W},get isValidating(){return M.isValidating=!0,z},get isLoading(){return M.isLoading=!0,Y}}}),u=new WeakMap,c=(0,o.xD)(s,e=>(t,r,n)=>{let[a,i]=(0,o.qC)(t),l=a?"$sub$"+a:void 0,s=e(l,null,n),{cache:c}=n;u.has(c)||u.set(c,[new Map,new Map]);let[d,f]=u.get(c);return(0,o.LI)(()=>{if(!l)return;let[,e]=(0,o.JN)(c,l),t=d.get(l)||0;if(d.set(l,t+1),!t){let t=r(i,{next:(t,r)=>{null!=t?e({error:t}):(e({error:void 0}),s.mutate(r,!1))}});if("function"!=typeof t)throw Error("The `subscribe` function must return a function to unsubscribe.");f.set(l,t)}return()=>{let e=d.get(l)-1;if(d.set(l,e),!e){let e=f.get(l);null==e||e()}}},[l]),{get data(){return s.data},get error(){return s.error}}})}}]);
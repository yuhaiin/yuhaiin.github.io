(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[198],{5640:(e,t,n)=>{Promise.resolve().then(n.bind(n,304))},304:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>v});var r=n(5155),a=n(3577),o=n(9093),s=n(1936),l=n(2115),c=n(8003),i=n(6180),u=n(2963),d=n(2981),m=n(8927),p=n(148),f=n(6863);let v=function(){let e=(0,l.useContext)(p.u),[t,n]=(0,l.useState)(""),[v,x]=(0,l.useState)(void 0);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(c.A,{className:"mb-3",children:[(0,r.jsx)(i.A.Control,{placeholder:"www.example.com",value:t,onChange:e=>n(e.target.value)}),(0,r.jsx)(u.A,{variant:"outline-primary",onClick:()=>{""!==t&&(0,m.kP)(f.XH.method.test,"/bypass/test","POST",(0,a.v)(s.g8,{value:t})).then(async t=>{let{data:n,error:r}=t;r?e.Error("test failed ".concat(r.code,"| ").concat(r.msg)):x(n)})},children:"Test"})]}),v&&(0,r.jsx)(d.A,{className:"mb-3",children:(0,r.jsx)(d.A.Body,{children:(0,r.jsx)("pre",{children:(0,o.J7)(f.C$,v,{prettySpaces:2})})})})]})}},348:(e,t,n)=>{"use strict";n.d(t,{DH:()=>l,G_:()=>p,Ow:()=>d,Oz:()=>a,VN:()=>b,X3:()=>i,_s:()=>x,dp:()=>m,h$:()=>v,kP:()=>r,mv:()=>f,oH:()=>s,r3:()=>o,u1:()=>c});let r="",a="https://clients3.google.com/generate_204",o="dns.nextdns.io:853",s=!0,l="http://ip.sb",c="stun.syncthing.net:3478",i="stun.nextcloud.com:443",u=()=>{let e=localStorage.getItem("api_url");r=null!==e?e:"",e=localStorage.getItem("remote_bypass"),null!==(e=localStorage.getItem("latency_http_url"))&&(a=e),null!==(e=localStorage.getItem("latency_dns_url"))&&(o=e),null!==(e=localStorage.getItem("latency_ipv6"))&&(s="true"===e),null!==(e=localStorage.getItem("latency_ip_url"))&&(l=e),null!==(e=localStorage.getItem("latency_stun_url"))&&(c=e),null!==(e=localStorage.getItem("latency_stun_tcp_url"))&&(i=e)},d=e=>{g("api_url",e)},m=e=>{g("latency_dns_url",e)},p=e=>{g("latency_http_url",e)},f=e=>{g("latency_ipv6",e.toString())},v=e=>{g("latency_ip_url",e)},x=e=>{g("latency_stun_url",e)},b=e=>{g("latency_stun_tcp_url",e)},g=(e,t)=>{""===t?localStorage.removeItem(e):localStorage.setItem(e,t),u()};u()},8927:(e,t,n)=>{"use strict";n.d(t,{AD:()=>l,kP:()=>c,zZ:()=>i});var r=n(950),a=n(7558),o=n(6989),s=n(348);function l(e,t,n,l){return c=>l?(0,r.o)(e.output,l):fetch("".concat(s.kP).concat(c),{method:t,body:n?(0,a.R)(e.input,n):void 0}).then(async t=>{if(!t.ok)throw{code:t.status,msg:t.statusText,raw:t.text()};return(0,o.Er)(e.output,new Uint8Array(await t.arrayBuffer()))})}async function c(e,t,n,r){let l=await fetch("".concat(s.kP).concat(t),{method:n,body:r?(0,a.R)(e.input,r):void 0});return l.ok?{data:(0,o.Er)(e.output,new Uint8Array(await l.arrayBuffer()))}:{error:{code:l.status,msg:await l.text()}}}function i(e,t,n){let r,l=!1;return(c,i)=>{let{next:u}=i,d=new URL(""!==s.kP?s.kP:window.location.toString());d.pathname=c,d.protocol="https:"===d.protocol?"wss:":"ws:";let m=()=>{l||(console.log("connecting to: ".concat(d)),(r=new WebSocket(d)).binaryType="arraybuffer",r.addEventListener("open",n=>{console.log("connect to: ".concat(d,", event type: ").concat(n.type)),null==r||r.send((0,a.R)(e.input,t))}),r.addEventListener("message",t=>{let r=(0,o.Er)(e.output,new Uint8Array(t.data));u(null,e=>n(r,e))}),r.addEventListener("error",e=>{let t="websocket have some error";u({msg:t,code:500}),console.log(t,e.type)}),r.addEventListener("close",e=>{console.log("websocket closed, code: "+e.code),u(null,void 0),l||(console.log("reconnect after 1 seconds"),setTimeout(m,1e3))}))};return m(),()=>{l=!0,void 0!==r&&(console.log("close: ".concat(c)),r.close(),r=void 0)}}}},148:(e,t,n)=>{"use strict";n.d(t,{u:()=>l,y:()=>c});var r=n(5155),a=n(2115),o=n(1757),s=n(491);let l=(0,a.createContext)({Info:e=>{console.log(e)},Error:e=>{console.error(e)}}),c=e=>{let{children:t}=e,[n,c]=(0,a.useState)({value:{},index:0}),i=(e,t)=>c(n=>({value:{...n.value,[n.index]:{text:e,type:t}},index:n.index+1}));return(0,r.jsxs)(l.Provider,{value:{Info:e=>{console.log(e),i(e,"success")},Error:e=>{console.error(e),i(e,"danger")}},children:[(0,r.jsx)(o.A,{className:"p-3",position:"top-center",containerPosition:"fixed",style:{zIndex:999999},children:Object.entries(n.value).map(e=>{let[t,n]=e;return(0,r.jsxs)(s.A,{role:"alert","aria-live":"assertive",show:!0,bg:n.type,onClose:()=>{c(e=>{let n={...e.value};return delete n[t],{...e,value:n}})},"aria-atomic":"true",delay:4e3,autohide:!0,animation:!0,children:[(0,r.jsxs)(s.A.Header,{children:[(0,r.jsx)("strong",{className:"me-auto",children:"Notification"}),(0,r.jsx)("small",{className:"text-muted",children:"just now"})]}),(0,r.jsx)(s.A.Body,{className:"text-center",children:n.text})]},"toast"+t)})}),t]})}},8987:(e,t,n)=>{"use strict";n.d(t,{A:()=>a});var r=n(2115);function a(e){let t=function(e){let t=(0,r.useRef)(e);return t.current=e,t}(e);(0,r.useEffect)(()=>()=>t.current(),[])}},169:(e,t,n)=>{"use strict";n.d(t,{A:()=>d});var r=n(1996),a=n.n(r),o=n(2115),s=n(4617),l=n.n(s),c=n(5155);let i={"aria-label":a().string,onClick:a().func,variant:a().oneOf(["white"])},u=o.forwardRef((e,t)=>{let{className:n,variant:r,"aria-label":a="Close",...o}=e;return(0,c.jsx)("button",{ref:t,type:"button",className:l()("btn-close",r&&"btn-close-".concat(r),n),"aria-label":a,...o})});u.displayName="CloseButton",u.propTypes=i;let d=u},3281:(e,t,n)=>{"use strict";n.d(t,{A:()=>f});var r=n(4617),a=n.n(r),o=n(2115),s=n(2400),l=n(5998),c=n(4837),i=n(3557),u=n(4579),d=n(5155);let m={[s.ns]:"show",[s._K]:"show"},p=o.forwardRef((e,t)=>{let{className:n,children:r,transitionClasses:s={},onEnter:p,...f}=e,v={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,...f},x=(0,o.useCallback)((e,t)=>{(0,i.A)(e),null==p||p(e,t)},[p]);return(0,d.jsx)(u.A,{ref:t,addEndListener:c.A,...v,onEnter:x,childRef:(0,l.am)(r),children:(e,t)=>o.cloneElement(r,{...t,className:a()("fade",n,r.props.className,m[e],s[e])})})});p.displayName="Fade";let f=p},8003:(e,t,n)=>{"use strict";n.d(t,{A:()=>m});var r=n(4617),a=n.n(r),o=n(2115),s=n(1653),l=n(2389),c=n(2471),i=n(5155);let u=o.forwardRef((e,t)=>{let{className:n,bsPrefix:r,as:o="span",...l}=e;return r=(0,s.oU)(r,"input-group-text"),(0,i.jsx)(o,{ref:t,className:a()(n,r),...l})});u.displayName="InputGroupText";let d=o.forwardRef((e,t)=>{let{bsPrefix:n,size:r,hasValidation:l,className:u,as:d="div",...m}=e;n=(0,s.oU)(n,"input-group");let p=(0,o.useMemo)(()=>({}),[]);return(0,i.jsx)(c.A.Provider,{value:p,children:(0,i.jsx)(d,{ref:t,...m,className:a()(u,n,r&&"".concat(n,"-").concat(r),l&&"has-validation")})})});d.displayName="InputGroup";let m=Object.assign(d,{Text:u,Radio:e=>(0,i.jsx)(u,{children:(0,i.jsx)(l.A,{type:"radio",...e})}),Checkbox:e=>(0,i.jsx)(u,{children:(0,i.jsx)(l.A,{type:"checkbox",...e})})})},2471:(e,t,n)=>{"use strict";n.d(t,{A:()=>a});let r=n(2115).createContext(null);r.displayName="InputGroupContext";let a=r},491:(e,t,n)=>{"use strict";n.d(t,{A:()=>h});var r=n(2115),a=n(4617),o=n.n(a),s=n(8987);let l=0x80000000-1;var c=n(2400),i=n(3281),u=n(5155);let d={[c.ns]:"showing",[c.ze]:"showing show"},m=r.forwardRef((e,t)=>(0,u.jsx)(i.A,{...e,ref:t,transitionClasses:d}));m.displayName="ToastFade";var p=n(3853),f=n(1653),v=n(169);let x=r.createContext({onClose(){}}),b=r.forwardRef((e,t)=>{let{bsPrefix:n,closeLabel:a="Close",closeVariant:s,closeButton:l=!0,className:c,children:i,...d}=e;n=(0,f.oU)(n,"toast-header");let m=(0,r.useContext)(x),b=(0,p.A)(e=>{null==m||null==m.onClose||m.onClose(e)});return(0,u.jsxs)("div",{ref:t,...d,className:o()(n,c),children:[i,l&&(0,u.jsx)(v.A,{"aria-label":a,variant:s,onClick:b,"data-dismiss":"toast"})]})});b.displayName="ToastHeader";let g=r.forwardRef((e,t)=>{let{className:n,bsPrefix:r,as:a="div",...s}=e;return r=(0,f.oU)(r,"toast-body"),(0,u.jsx)(a,{ref:t,className:o()(n,r),...s})});g.displayName="ToastBody";let y=r.forwardRef((e,t)=>{let{bsPrefix:n,className:a,transition:c=m,show:i=!0,animation:d=!0,delay:p=5e3,autohide:v=!1,onClose:b,onEntered:g,onExit:y,onExiting:h,onEnter:w,onEntering:A,onExited:_,bg:j,...E}=e;n=(0,f.oU)(n,"toast");let N=(0,r.useRef)(p),R=(0,r.useRef)(b);(0,r.useEffect)(()=>{N.current=p,R.current=b},[p,b]);let C=function(){let e=function(){let e=(0,r.useRef)(!0),t=(0,r.useRef)(()=>e.current);return(0,r.useEffect)(()=>(e.current=!0,()=>{e.current=!1}),[]),t.current}(),t=(0,r.useRef)();return(0,s.A)(()=>clearTimeout(t.current)),(0,r.useMemo)(()=>{let n=()=>clearTimeout(t.current);return{set:function(r,a=0){e()&&(n(),a<=l?t.current=setTimeout(r,a):function e(t,n,r){let a=r-Date.now();t.current=a<=l?setTimeout(n,a):setTimeout(()=>e(t,n,r),l)}(t,r,Date.now()+a))},clear:n,handleRef:t}},[])}(),k=!!(v&&i),S=(0,r.useCallback)(()=>{k&&(null==R.current||R.current())},[k]);(0,r.useEffect)(()=>{C.set(S,N.current)},[C,S]);let I=(0,r.useMemo)(()=>({onClose:b}),[b]),T=!!(c&&d),B=(0,u.jsx)("div",{...E,ref:t,className:o()(n,a,j&&"bg-".concat(j),!T&&(i?"show":"hide")),role:"alert","aria-live":"assertive","aria-atomic":"true"});return(0,u.jsx)(x.Provider,{value:I,children:T&&c?(0,u.jsx)(c,{in:i,onEnter:w,onEntering:A,onEntered:g,onExit:y,onExiting:h,onExited:_,unmountOnExit:!0,children:B}):B})});y.displayName="Toast";let h=Object.assign(y,{Body:g,Header:b})},1757:(e,t,n)=>{"use strict";n.d(t,{A:()=>u});var r=n(4617),a=n.n(r),o=n(2115),s=n(1653),l=n(5155);let c={"top-start":"top-0 start-0","top-center":"top-0 start-50 translate-middle-x","top-end":"top-0 end-0","middle-start":"top-50 start-0 translate-middle-y","middle-center":"top-50 start-50 translate-middle","middle-end":"top-50 end-0 translate-middle-y","bottom-start":"bottom-0 start-0","bottom-center":"bottom-0 start-50 translate-middle-x","bottom-end":"bottom-0 end-0"},i=o.forwardRef((e,t)=>{let{bsPrefix:n,position:r,containerPosition:o,className:i,as:u="div",...d}=e;return n=(0,s.oU)(n,"toast-container"),(0,l.jsx)(u,{ref:t,...d,className:a()(n,r&&c[r],o&&"position-".concat(o),i)})});i.displayName="ToastContainer";let u=i},9537:(e,t,n)=>{"use strict";function r(e,t,...n){if(0==n.length)return e.enums[t];let a=n.pop();return n.reduce((e,t)=>e.nestedMessages[t],e.messages[t]).nestedEnums[a]}n.d(t,{R:()=>r})},9678:(e,t,n)=>{"use strict";n.d(t,{i:()=>o,w:()=>s});var r=n(6788),a=n(8123);let o=(0,r.w)("Ch9nb29nbGUvcHJvdG9idWYvdGltZXN0YW1wLnByb3RvEg9nb29nbGUucHJvdG9idWYiKwoJVGltZXN0YW1wEg8KB3NlY29uZHMYASABKAMSDQoFbmFub3MYAiABKAVChQEKE2NvbS5nb29nbGUucHJvdG9idWZCDlRpbWVzdGFtcFByb3RvUAFaMmdvb2dsZS5nb2xhbmcub3JnL3Byb3RvYnVmL3R5cGVzL2tub3duL3RpbWVzdGFtcHBi+AEBogIDR1BCqgIeR29vZ2xlLlByb3RvYnVmLldlbGxLbm93blR5cGVzYgZwcm90bzM"),s=(0,a.Z)(o,0)}},e=>{var t=t=>e(e.s=t);e.O(0,[295,306,920,340,863,441,517,358],()=>t(5640)),_N_E=e.O()}]);
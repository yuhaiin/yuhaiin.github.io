(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[943],{2673:(e,t,n)=>{Promise.resolve().then(n.bind(n,7981))},348:(e,t,n)=>{"use strict";n.d(t,{DH:()=>o,G_:()=>x,Ow:()=>u,Oz:()=>r,VN:()=>f,X3:()=>i,_s:()=>v,dp:()=>m,h$:()=>p,kP:()=>a,mv:()=>h,oH:()=>l,r3:()=>s,u1:()=>c});let a="",r="https://clients3.google.com/generate_204",s="dns.nextdns.io:853",l=!0,o="http://ip.sb",c="stun.syncthing.net:3478",i="stun.nextcloud.com:443",d=()=>{let e=localStorage.getItem("api_url");a=null!==e?e:"",e=localStorage.getItem("remote_bypass"),null!==(e=localStorage.getItem("latency_http_url"))&&(r=e),null!==(e=localStorage.getItem("latency_dns_url"))&&(s=e),null!==(e=localStorage.getItem("latency_ipv6"))&&(l="true"===e),null!==(e=localStorage.getItem("latency_ip_url"))&&(o=e),null!==(e=localStorage.getItem("latency_stun_url"))&&(c=e),null!==(e=localStorage.getItem("latency_stun_tcp_url"))&&(i=e)},u=e=>{g("api_url",e)},m=e=>{g("latency_dns_url",e)},x=e=>{g("latency_http_url",e)},h=e=>{g("latency_ipv6",e.toString())},p=e=>{g("latency_ip_url",e)},v=e=>{g("latency_stun_url",e)},f=e=>{g("latency_stun_tcp_url",e)},g=(e,t)=>{""===t?localStorage.removeItem(e):localStorage.setItem(e,t),d()};d()},9169:(e,t,n)=>{"use strict";n.d(t,{$:()=>s,A:()=>l});var a=n(5155),r=n(4216);let s=e=>{let{statusCode:t,title:n,raw:r}=e;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("p",{className:"fw-bold fs-3 text-center",children:[t," | ",(0,a.jsx)("a",{className:"text-reset text-decoration-none fs-6 fw-normal",children:n})]}),r&&(0,a.jsx)("pre",{className:"text-center my-2 text-danger lead",children:r})]})},l=function(e){return(0,a.jsxs)("div",{className:"z-1090 d-flex flex-column justify-content-center align-items-center",style:{height:"100px"},children:[void 0!==e.children&&(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(s,{statusCode:void 0!==e.code?e.code:500,title:e.children})}),(0,a.jsx)("div",{className:"p2",children:(0,a.jsx)(r.A,{})})]})}},8927:(e,t,n)=>{"use strict";n.d(t,{AD:()=>o,kP:()=>c,zZ:()=>i});var a=n(950),r=n(7558),s=n(6989),l=n(348);function o(e,t,n,o){return c=>o?(0,a.o)(e.output,o):fetch("".concat(l.kP).concat(c),{method:t,body:n?(0,r.R)(e.input,n):void 0}).then(async t=>{if(!t.ok)throw{code:t.status,msg:t.statusText,raw:t.text()};return(0,s.Er)(e.output,new Uint8Array(await t.arrayBuffer()))})}async function c(e,t,n,a){let o=await fetch("".concat(l.kP).concat(t),{method:n,body:a?(0,r.R)(e.input,a):void 0});return o.ok?{data:(0,s.Er)(e.output,new Uint8Array(await o.arrayBuffer()))}:{error:{code:o.status,msg:await o.text()}}}function i(e,t,n){let a,o=!1;return(c,i)=>{let{next:d}=i,u=new URL(""!==l.kP?l.kP:window.location.toString());u.pathname=c,u.protocol="https:"===u.protocol?"wss:":"ws:";let m=()=>{o||(console.log("connecting to: ".concat(u)),(a=new WebSocket(u)).binaryType="arraybuffer",a.addEventListener("open",n=>{console.log("connect to: ".concat(u,", event type: ").concat(n.type)),null==a||a.send((0,r.R)(e.input,t))}),a.addEventListener("message",t=>{let a=(0,s.Er)(e.output,new Uint8Array(t.data));d(null,e=>n(a,e))}),a.addEventListener("error",e=>{let t="websocket have some error";d({msg:t,code:500}),console.log(t,e.type)}),a.addEventListener("close",e=>{console.log("websocket closed, code: "+e.code),d(null,void 0),o||(console.log("reconnect after 1 seconds"),setTimeout(m,1e3))}))};return m(),()=>{o=!0,void 0!==a&&(console.log("close: ".concat(c)),a.close(),a=void 0)}}}},148:(e,t,n)=>{"use strict";n.d(t,{u:()=>o,y:()=>c});var a=n(5155),r=n(2115),s=n(1757),l=n(491);let o=(0,r.createContext)({Info:e=>{console.log(e)},Error:e=>{console.error(e)}}),c=e=>{let{children:t}=e,[n,c]=(0,r.useState)({value:{},index:0}),i=(e,t)=>c(n=>({value:{...n.value,[n.index]:{text:e,type:t}},index:n.index+1}));return(0,a.jsxs)(o.Provider,{value:{Info:e=>{console.log(e),i(e,"success")},Error:e=>{console.error(e),i(e,"danger")}},children:[(0,a.jsx)(s.A,{className:"p-3",position:"top-center",containerPosition:"fixed",style:{zIndex:999999},children:Object.entries(n.value).map(e=>{let[t,n]=e;return(0,a.jsxs)(l.A,{role:"alert","aria-live":"assertive",show:!0,bg:n.type,onClose:()=>{c(e=>{let n={...e.value};return delete n[t],{...e,value:n}})},"aria-atomic":"true",delay:4e3,autohide:!0,animation:!0,children:[(0,a.jsxs)(l.A.Header,{children:[(0,a.jsx)("strong",{className:"me-auto",children:"Notification"}),(0,a.jsx)("small",{className:"text-muted",children:"just now"})]}),(0,a.jsx)(l.A.Body,{className:"text-center",children:n.text})]},"toast"+t)})}),t]})}},7981:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>N});var a=n(5155),r=n(3577),s=n(5554),l=n.n(s),o=n(2115),c=n(6121),i=n(3667),d=n(2981),u=n(3614),m=n(2963),x=n(4216),h=n(8143),p=n(9637),v=n(2926),f=n(6180),g=n(7021),A=n(9169),y=n(8927),b=n(148),w=n(9969),j=n(4601);let N=function(){let[e,t]=(0,o.useState)({}),[n,s]=(0,o.useState)((0,r.v)(j.Yk,{name:"",url:"",type:j.NW.reserve})),{data:N,error:E,isLoading:C,mutate:k}=(0,g.Ay)("/sublist",(0,y.AD)(w.B1.method.get)),_=(0,o.useContext)(b.u);if(void 0!==E)return(0,a.jsx)(l(),{statusCode:E.code,title:E.msg});if(C||void 0===N)return(0,a.jsx)(A.A,{});let R=n=>{t({...e,[n]:!0}),(0,y.kP)(w.B1.method.update,"/sub","PATCH",(0,r.v)(w.tA,{names:[n]})).then(async a=>{let{error:r}=a;void 0!==r?_.Error("Update failed ".concat(r.code,"| ").concat(r.msg)):_.Info("Update successfully"),t({...e,[n]:!1})})},S=e=>{(0,y.kP)(w.B1.method.remove,"/sub","DELETE",(0,r.v)(w.tA,{names:[e]})).then(async t=>{let{error:n}=t;void 0!==n?_.Error("delete ".concat(e," failed, ").concat(n.code,"| ").concat(n.msg)):k()})};return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(c.A,{className:"row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4",children:[N.links&&Object.entries(N.links).sort((e,t)=>e<=t?-1:1).map(t=>{let[n,r]=t;return(0,a.jsx)(i.A,{className:"mb-3",children:(0,a.jsxs)(d.A,{className:"h-100",children:[(0,a.jsx)(d.A.Header,{children:r.name}),(0,a.jsx)(d.A.Body,{children:r.url}),(0,a.jsxs)(u.A,{as:d.A.Footer,className:"d-flex",children:[(0,a.jsxs)(m.A,{variant:"outline-primary",onClick:()=>R(r.name),disabled:e[r.name],className:"w-100",children:[e[r.name]&&(0,a.jsx)(x.A,{size:"sm",animation:"border",variant:"primary"}),"Update"]}),(0,a.jsxs)(h.A,{onSelect:e=>{"ok"===e&&S(r.name)},as:u.A,variant:"outline-danger",title:"Remove",className:"w-100",children:[(0,a.jsx)(p.A.Item,{eventKey:"ok",children:"OK"}),(0,a.jsx)(p.A.Item,{eventKey:"cancel",children:"Cancel"})]})]})]})},n)}),(0,a.jsx)(i.A,{className:"mb-3",children:(0,a.jsxs)(d.A,{className:"h-100",children:[(0,a.jsx)(d.A.Header,{children:"Add"}),(0,a.jsxs)(d.A.Body,{children:[(0,a.jsx)(v.A,{label:"Name",className:"mb-3",children:(0,a.jsx)(f.A.Control,{placeholder:"group1",value:n.name,onChange:e=>s((0,r.v)(j.Yk,{...n,name:e.target.value}))})}),(0,a.jsx)(v.A,{label:"Link",className:"mb-3",children:(0,a.jsx)(f.A.Control,{placeholder:"https://www.example.com",value:n.url,onChange:e=>s((0,r.v)(j.Yk,{...n,url:e.target.value}))})})]}),(0,a.jsx)(u.A,{as:d.A.Footer,children:(0,a.jsx)(m.A,{variant:"outline-primary",onClick:async()=>{""!==n.name&&""!==n.url&&(0,y.kP)(w.B1.method.save,"/sub","POST",(0,r.v)(w.bT,{links:[n]})).then(async e=>{let{error:t}=e;void 0!==t?_.Error("save link ".concat(n.url," failed, ").concat(t.code,"| ").concat(t.msg)):k()})},children:"ADD"})})]})})]})})}},8987:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});var a=n(2115);function r(e){let t=function(e){let t=(0,a.useRef)(e);return t.current=e,t}(e);(0,a.useEffect)(()=>()=>t.current(),[])}},3614:(e,t,n)=>{"use strict";n.d(t,{A:()=>i});var a=n(4617),r=n.n(a),s=n(2115),l=n(1653),o=n(5155);let c=s.forwardRef((e,t)=>{let{bsPrefix:n,size:a,vertical:s=!1,className:c,role:i="group",as:d="div",...u}=e,m=(0,l.oU)(n,"btn-group"),x=m;return s&&(x="".concat(m,"-vertical")),(0,o.jsx)(d,{...u,ref:t,role:i,className:r()(c,x,a&&"".concat(m,"-").concat(a))})});c.displayName="ButtonGroup";let i=c},169:(e,t,n)=>{"use strict";n.d(t,{A:()=>u});var a=n(1996),r=n.n(a),s=n(2115),l=n(4617),o=n.n(l),c=n(5155);let i={"aria-label":r().string,onClick:r().func,variant:r().oneOf(["white"])},d=s.forwardRef((e,t)=>{let{className:n,variant:a,"aria-label":r="Close",...s}=e;return(0,c.jsx)("button",{ref:t,type:"button",className:o()("btn-close",a&&"btn-close-".concat(a),n),"aria-label":r,...s})});d.displayName="CloseButton",d.propTypes=i;let u=d},3281:(e,t,n)=>{"use strict";n.d(t,{A:()=>h});var a=n(4617),r=n.n(a),s=n(2115),l=n(2400),o=n(5998),c=n(4837),i=n(3557),d=n(4579),u=n(5155);let m={[l.ns]:"show",[l._K]:"show"},x=s.forwardRef((e,t)=>{let{className:n,children:a,transitionClasses:l={},onEnter:x,...h}=e,p={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,...h},v=(0,s.useCallback)((e,t)=>{(0,i.A)(e),null==x||x(e,t)},[x]);return(0,u.jsx)(d.A,{ref:t,addEndListener:c.A,...p,onEnter:v,childRef:(0,o.am)(a),children:(e,t)=>s.cloneElement(a,{...t,className:r()("fade",n,a.props.className,m[e],l[e])})})});x.displayName="Fade";let h=x},6121:(e,t,n)=>{"use strict";n.d(t,{A:()=>i});var a=n(4617),r=n.n(a),s=n(2115),l=n(1653),o=n(5155);let c=s.forwardRef((e,t)=>{let{bsPrefix:n,className:a,as:s="div",...c}=e,i=(0,l.oU)(n,"row"),d=(0,l.gy)(),u=(0,l.Jm)(),m="".concat(i,"-cols"),x=[];return d.forEach(e=>{let t;let n=c[e];delete c[e],null!=n&&"object"==typeof n?{cols:t}=n:t=n,null!=t&&x.push("".concat(m).concat(e!==u?"-".concat(e):"","-").concat(t))}),(0,o.jsx)(s,{ref:t,...c,className:r()(a,i,...x)})});c.displayName="Row";let i=c},491:(e,t,n)=>{"use strict";n.d(t,{A:()=>y});var a=n(2115),r=n(4617),s=n.n(r),l=n(8987);let o=0x80000000-1;var c=n(2400),i=n(3281),d=n(5155);let u={[c.ns]:"showing",[c.ze]:"showing show"},m=a.forwardRef((e,t)=>(0,d.jsx)(i.A,{...e,ref:t,transitionClasses:u}));m.displayName="ToastFade";var x=n(3853),h=n(1653),p=n(169);let v=a.createContext({onClose(){}}),f=a.forwardRef((e,t)=>{let{bsPrefix:n,closeLabel:r="Close",closeVariant:l,closeButton:o=!0,className:c,children:i,...u}=e;n=(0,h.oU)(n,"toast-header");let m=(0,a.useContext)(v),f=(0,x.A)(e=>{null==m||null==m.onClose||m.onClose(e)});return(0,d.jsxs)("div",{ref:t,...u,className:s()(n,c),children:[i,o&&(0,d.jsx)(p.A,{"aria-label":r,variant:l,onClick:f,"data-dismiss":"toast"})]})});f.displayName="ToastHeader";let g=a.forwardRef((e,t)=>{let{className:n,bsPrefix:a,as:r="div",...l}=e;return a=(0,h.oU)(a,"toast-body"),(0,d.jsx)(r,{ref:t,className:s()(n,a),...l})});g.displayName="ToastBody";let A=a.forwardRef((e,t)=>{let{bsPrefix:n,className:r,transition:c=m,show:i=!0,animation:u=!0,delay:x=5e3,autohide:p=!1,onClose:f,onEntered:g,onExit:A,onExiting:y,onEnter:b,onEntering:w,onExited:j,bg:N,...E}=e;n=(0,h.oU)(n,"toast");let C=(0,a.useRef)(x),k=(0,a.useRef)(f);(0,a.useEffect)(()=>{C.current=x,k.current=f},[x,f]);let _=function(){let e=function(){let e=(0,a.useRef)(!0),t=(0,a.useRef)(()=>e.current);return(0,a.useEffect)(()=>(e.current=!0,()=>{e.current=!1}),[]),t.current}(),t=(0,a.useRef)();return(0,l.A)(()=>clearTimeout(t.current)),(0,a.useMemo)(()=>{let n=()=>clearTimeout(t.current);return{set:function(a,r=0){e()&&(n(),r<=o?t.current=setTimeout(a,r):function e(t,n,a){let r=a-Date.now();t.current=r<=o?setTimeout(n,r):setTimeout(()=>e(t,n,a),o)}(t,a,Date.now()+r))},clear:n,handleRef:t}},[])}(),R=!!(p&&i),S=(0,a.useCallback)(()=>{R&&(null==k.current||k.current())},[R]);(0,a.useEffect)(()=>{_.set(S,C.current)},[_,S]);let I=(0,a.useMemo)(()=>({onClose:f}),[f]),B=!!(c&&u),W=(0,d.jsx)("div",{...E,ref:t,className:s()(n,r,N&&"bg-".concat(N),!B&&(i?"show":"hide")),role:"alert","aria-live":"assertive","aria-atomic":"true"});return(0,d.jsx)(v.Provider,{value:I,children:B&&c?(0,d.jsx)(c,{in:i,onEnter:b,onEntering:w,onEntered:g,onExit:A,onExiting:y,onExited:j,unmountOnExit:!0,children:W}):W})});A.displayName="Toast";let y=Object.assign(A,{Body:g,Header:f})},1757:(e,t,n)=>{"use strict";n.d(t,{A:()=>d});var a=n(4617),r=n.n(a),s=n(2115),l=n(1653),o=n(5155);let c={"top-start":"top-0 start-0","top-center":"top-0 start-50 translate-middle-x","top-end":"top-0 end-0","middle-start":"top-50 start-0 translate-middle-y","middle-center":"top-50 start-50 translate-middle","middle-end":"top-50 end-0 translate-middle-y","bottom-start":"bottom-0 start-0","bottom-center":"bottom-0 start-50 translate-middle-x","bottom-end":"bottom-0 end-0"},i=s.forwardRef((e,t)=>{let{bsPrefix:n,position:a,containerPosition:s,className:i,as:d="div",...u}=e;return n=(0,l.oU)(n,"toast-container"),(0,o.jsx)(d,{ref:t,...u,className:r()(n,a&&c[a],s&&"position-".concat(s),i)})});i.displayName="ToastContainer";let d=i},1936:(e,t,n)=>{"use strict";n.d(t,{Ax:()=>s,g8:()=>l});var a=n(6788),r=n(8123);let s=(0,a.w)("Ch5nb29nbGUvcHJvdG9idWYvd3JhcHBlcnMucHJvdG8SD2dvb2dsZS5wcm90b2J1ZiIcCgtEb3VibGVWYWx1ZRINCgV2YWx1ZRgBIAEoASIbCgpGbG9hdFZhbHVlEg0KBXZhbHVlGAEgASgCIhsKCkludDY0VmFsdWUSDQoFdmFsdWUYASABKAMiHAoLVUludDY0VmFsdWUSDQoFdmFsdWUYASABKAQiGwoKSW50MzJWYWx1ZRINCgV2YWx1ZRgBIAEoBSIcCgtVSW50MzJWYWx1ZRINCgV2YWx1ZRgBIAEoDSIaCglCb29sVmFsdWUSDQoFdmFsdWUYASABKAgiHAoLU3RyaW5nVmFsdWUSDQoFdmFsdWUYASABKAkiGwoKQnl0ZXNWYWx1ZRINCgV2YWx1ZRgBIAEoDEKDAQoTY29tLmdvb2dsZS5wcm90b2J1ZkINV3JhcHBlcnNQcm90b1ABWjFnb29nbGUuZ29sYW5nLm9yZy9wcm90b2J1Zi90eXBlcy9rbm93bi93cmFwcGVyc3Bi+AEBogIDR1BCqgIeR29vZ2xlLlByb3RvYnVmLldlbGxLbm93blR5cGVzYgZwcm90bzM"),l=(0,r.Z)(s,7)}},e=>{var t=t=>e(e.s=t);e.O(0,[295,867,306,920,818,637,599,969,441,517,358],()=>t(2673)),_N_E=e.O()}]);
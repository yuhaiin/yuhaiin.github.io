(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[943],{2673:(e,t,n)=>{Promise.resolve().then(n.bind(n,7981))},744:(e,t,n)=>{"use strict";n.d(t,{DH:()=>r,G_:()=>h,Ow:()=>u,Oz:()=>s,VN:()=>A,X3:()=>i,_s:()=>b,dp:()=>m,h$:()=>v,kP:()=>l,mv:()=>g,oH:()=>a,r3:()=>o,u1:()=>c});var l="",s="https://clients3.google.com/generate_204",o="dns.nextdns.io:853",a=!0,r="http://ip.sb",c="stun.syncthing.net:3478",i="stun.nextcloud.com:443";let d=()=>{let e=localStorage.getItem("api_url");l=null!==e?e:"",e=localStorage.getItem("remote_bypass"),null!==(e=localStorage.getItem("latency_http_url"))&&(s=e),null!==(e=localStorage.getItem("latency_dns_url"))&&(o=e),null!==(e=localStorage.getItem("latency_ipv6"))&&(a="true"===e),null!==(e=localStorage.getItem("latency_ip_url"))&&(r=e),null!==(e=localStorage.getItem("latency_stun_url"))&&(c=e),null!==(e=localStorage.getItem("latency_stun_tcp_url"))&&(i=e)},u=e=>{p("api_url",e)},m=e=>{p("latency_dns_url",e)},h=e=>{p("latency_http_url",e)},g=e=>{p("latency_ipv6",e.toString())},v=e=>{p("latency_ip_url",e)},b=e=>{p("latency_stun_url",e)},A=e=>{p("latency_stun_tcp_url",e)},p=(e,t)=>{""===t?localStorage.removeItem(e):localStorage.setItem(e,t),d()};d()},9169:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});var l=n(5155),s=n(5554),o=n.n(s),a=n(4216);let r=function(e){return(0,l.jsxs)("div",{className:"z-1090 d-flex flex-column justify-content-center align-items-center",style:{height:"100px"},children:[void 0!==e.children&&(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(o(),{className:"p2",statusCode:void 0!==e.code?e.code:500,title:e.children})}),(0,l.jsx)("div",{className:"p2",children:(0,l.jsx)(a.A,{})})]})}},8927:(e,t,n)=>{"use strict";n.d(t,{AD:()=>r,kP:()=>c,zZ:()=>i});var l=n(950),s=n(7558),o=n(6989),a=n(744);function r(e,t,n,r){return c=>r?(0,l.o)(e.output,r):fetch("".concat(a.kP).concat(c),{method:t,body:n?(0,s.R)(e.input,n):void 0}).then(async t=>{if(!t.ok)throw{code:t.status,msg:t.statusText,raw:t.text()};return(0,o.Er)(e.output,new Uint8Array(await t.arrayBuffer()))})}async function c(e,t,n,l){let r=await fetch("".concat(a.kP).concat(t),{method:n,body:l?(0,s.R)(e.input,l):void 0});return r.ok?{data:(0,o.Er)(e.output,new Uint8Array(await r.arrayBuffer()))}:{error:{code:r.status,msg:await r.text()}}}function i(e,t,n){let l,r=!1;return(c,i)=>{let{next:d}=i,u=new URL(""!==a.kP?a.kP:window.location.toString());u.pathname=c,u.protocol="https:"===u.protocol?"wss:":"ws:";let m=()=>{r||(console.log("connecting to: ".concat(u)),(l=new WebSocket(u)).binaryType="arraybuffer",l.addEventListener("open",n=>{console.log("connect to: ".concat(u,", event type: ").concat(n.type)),null==l||l.send((0,s.R)(e.input,t))}),l.addEventListener("message",t=>{let l=(0,o.Er)(e.output,new Uint8Array(t.data));d(null,e=>n(l,e))}),l.addEventListener("error",e=>{let t="websocket have some error";d({msg:t,code:500}),console.log(t,e.type)}),l.addEventListener("close",e=>{console.log("websocket closed, code: "+e.code),d(null,void 0),r||(console.log("reconnect after 1 seconds"),setTimeout(m,1e3))}))};return m(),()=>{r=!0,void 0!==l&&(console.log("close: ".concat(c)),l.close(),l=void 0)}}}},148:(e,t,n)=>{"use strict";n.d(t,{u:()=>r,y:()=>c});var l=n(5155),s=n(2115),o=n(1757),a=n(491);let r=(0,s.createContext)({Info:e=>{},Error:e=>{}}),c=e=>{let{children:t}=e,[n,c]=(0,s.useState)([]),i=(e,t)=>c(n=>[...n,{text:e,type:t}]);return(0,l.jsxs)(r.Provider,{value:{Info:e=>{console.log(e),i(e,"success")},Error:e=>{console.error(e),i(e,"danger")}},children:[(0,l.jsx)(o.A,{className:"p-3",position:"top-center",containerPosition:"fixed",style:{zIndex:999999},children:n.map((e,t)=>(0,l.jsxs)(a.A,{role:"alert","aria-live":"assertive",show:!0,bg:e.type,onClose:()=>{c(e=>[...e.slice(0,t),...e.slice(t+1)])},"aria-atomic":"true",delay:4e3,autohide:!0,animation:!0,children:[(0,l.jsxs)(a.A.Header,{children:[(0,l.jsx)("strong",{className:"me-auto",children:"Notification"}),(0,l.jsx)("small",{className:"text-muted",children:"just now"})]}),(0,l.jsx)(a.A.Body,{className:"text-center",children:e.text})]},"toast"+t))}),t]})}},7981:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>N});var l=n(5155),s=n(3577),o=n(5554),a=n.n(o),r=n(2115),c=n(6121),i=n(3667),d=n(2981),u=n(3614),m=n(2963),h=n(4216),g=n(8143),v=n(9637),b=n(2926),A=n(6180),p=n(4995),x=n(9169),y=n(8927),f=n(148),w=n(9969),j=n(4601);let N=function(){let[e,t]=(0,r.useState)({}),[n,o]=(0,r.useState)((0,s.v)(j.Yk,{name:"",url:"",type:j.NW.reserve})),{data:N,error:S,isLoading:B,mutate:E}=(0,p.Ay)("/sublist",(0,y.AD)(w.B1.method.get)),_=(0,r.useContext)(f.u);if(void 0!==S)return(0,l.jsx)(a(),{statusCode:S.code,title:S.msg});if(B||void 0===N)return(0,l.jsx)(x.A,{});let k=n=>{t({...e,[n]:!0}),(0,y.kP)(w.B1.method.update,"/sub","PATCH",(0,s.v)(w.tA,{names:[n]})).then(async l=>{let{error:s}=l;void 0!==s?_.Error("Update failed ".concat(s.code,"| ").concat(s.msg)):_.Info("Update successfully"),t({...e,[n]:!1})})},C=e=>{(0,y.kP)(w.B1.method.remove,"/sub","DELETE",(0,s.v)(w.tA,{names:[e]})).then(async t=>{let{error:n}=t;void 0!==n?_.Error("delete ".concat(e," failed, ").concat(n.code,"| ").concat(n.msg)):E()})};return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(c.A,{className:"row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4",children:[N.links&&Object.entries(N.links).sort((e,t)=>e<=t?-1:1).map(t=>{let[n,s]=t;return(0,l.jsx)(i.A,{className:"mb-3",children:(0,l.jsxs)(d.A,{className:"h-100",children:[(0,l.jsx)(d.A.Header,{children:s.name}),(0,l.jsx)(d.A.Body,{children:s.url}),(0,l.jsxs)(u.A,{as:d.A.Footer,className:"d-flex",children:[(0,l.jsxs)(m.A,{variant:"outline-primary",onClick:()=>k(s.name),disabled:e[s.name],className:"w-100",children:[e[s.name]&&(0,l.jsx)(h.A,{size:"sm",animation:"border",variant:"primary"}),"Update"]}),(0,l.jsxs)(g.A,{onSelect:e=>{"ok"===e&&C(s.name)},as:u.A,variant:"outline-danger",title:"Remove",className:"w-100",children:[(0,l.jsx)(v.A.Item,{eventKey:"ok",children:"OK"}),(0,l.jsx)(v.A.Item,{eventKey:"cancel",children:"Cancel"})]})]})]})},n)}),(0,l.jsx)(i.A,{className:"mb-3",children:(0,l.jsxs)(d.A,{className:"h-100",children:[(0,l.jsx)(d.A.Header,{children:"Add"}),(0,l.jsxs)(d.A.Body,{children:[(0,l.jsx)(b.A,{label:"Name",className:"mb-3",children:(0,l.jsx)(A.A.Control,{placeholder:"group1",value:n.name,onChange:e=>o((0,s.v)(j.Yk,{...n,name:e.target.value}))})}),(0,l.jsx)(b.A,{label:"Link",className:"mb-3",children:(0,l.jsx)(A.A.Control,{placeholder:"https://www.example.com",value:n.url,onChange:e=>o((0,s.v)(j.Yk,{...n,url:e.target.value}))})})]}),(0,l.jsx)(u.A,{as:d.A.Footer,children:(0,l.jsx)(m.A,{variant:"outline-primary",onClick:async()=>{""!==n.name&&""!==n.url&&(0,y.kP)(w.B1.method.save,"/sub","POST",(0,s.v)(w.bT,{links:[n]})).then(async e=>{let{error:t}=e;void 0!==t?_.Error("save link ".concat(n.url," failed, ").concat(t.code,"| ").concat(t.msg)):E()})},children:"ADD"})})]})})]})})}},3614:(e,t,n)=>{"use strict";n.d(t,{A:()=>i});var l=n(4617),s=n.n(l),o=n(2115),a=n(1653),r=n(5155);let c=o.forwardRef((e,t)=>{let{bsPrefix:n,size:l,vertical:o=!1,className:c,role:i="group",as:d="div",...u}=e,m=(0,a.oU)(n,"btn-group"),h=m;return o&&(h="".concat(m,"-vertical")),(0,r.jsx)(d,{...u,ref:t,role:i,className:s()(c,h,l&&"".concat(m,"-").concat(l))})});c.displayName="ButtonGroup";let i=c},8143:(e,t,n)=>{"use strict";n.d(t,{A:()=>g});var l=n(2115),s=n(1996),o=n.n(s),a=n(9637),r=n(5570),c=n(3381);let i=o().oneOf(["start","end"]),d=o().oneOfType([i,o().shape({sm:i}),o().shape({md:i}),o().shape({lg:i}),o().shape({xl:i}),o().shape({xxl:i}),o().object]);var u=n(5155);let m={id:o().string,href:o().string,onClick:o().func,title:o().node.isRequired,disabled:o().bool,align:d,menuRole:o().string,renderMenuOnMount:o().bool,rootCloseEvent:o().string,menuVariant:o().oneOf(["dark"]),flip:o().bool,bsPrefix:o().string,variant:o().string,size:o().string},h=l.forwardRef((e,t)=>{let{title:n,children:l,bsPrefix:s,rootCloseEvent:o,variant:i,size:d,menuRole:m,renderMenuOnMount:h,disabled:g,href:v,id:b,menuVariant:A,flip:p,...x}=e;return(0,u.jsxs)(a.A,{ref:t,...x,children:[(0,u.jsx)(r.A,{id:b,href:v,size:d,variant:i,disabled:g,childBsPrefix:s,children:n}),(0,u.jsx)(c.A,{role:m,renderOnMount:h,rootCloseEvent:o,variant:A,flip:p,children:l})]})});h.displayName="DropdownButton",h.propTypes=m;let g=h},6121:(e,t,n)=>{"use strict";n.d(t,{A:()=>i});var l=n(4617),s=n.n(l),o=n(2115),a=n(1653),r=n(5155);let c=o.forwardRef((e,t)=>{let{bsPrefix:n,className:l,as:o="div",...c}=e,i=(0,a.oU)(n,"row"),d=(0,a.gy)(),u=(0,a.Jm)(),m="".concat(i,"-cols"),h=[];return d.forEach(e=>{let t;let n=c[e];delete c[e],null!=n&&"object"==typeof n?{cols:t}=n:t=n,null!=t&&h.push("".concat(m).concat(e!==u?"-".concat(e):"","-").concat(t))}),(0,r.jsx)(o,{ref:t,...c,className:s()(l,i,...h)})});c.displayName="Row";let i=c},3620:(e,t,n)=>{"use strict";n.d(t,{U:()=>l});let l=(0,n(6788).w)("Ch5nb29nbGUvcHJvdG9idWYvZHVyYXRpb24ucHJvdG8SD2dvb2dsZS5wcm90b2J1ZiIqCghEdXJhdGlvbhIPCgdzZWNvbmRzGAEgASgDEg0KBW5hbm9zGAIgASgFQoMBChNjb20uZ29vZ2xlLnByb3RvYnVmQg1EdXJhdGlvblByb3RvUAFaMWdvb2dsZS5nb2xhbmcub3JnL3Byb3RvYnVmL3R5cGVzL2tub3duL2R1cmF0aW9ucGL4AQGiAgNHUEKqAh5Hb29nbGUuUHJvdG9idWYuV2VsbEtub3duVHlwZXNiBnByb3RvMw")},1936:(e,t,n)=>{"use strict";n.d(t,{Ax:()=>o,g8:()=>a});var l=n(6788),s=n(8123);let o=(0,l.w)("Ch5nb29nbGUvcHJvdG9idWYvd3JhcHBlcnMucHJvdG8SD2dvb2dsZS5wcm90b2J1ZiIcCgtEb3VibGVWYWx1ZRINCgV2YWx1ZRgBIAEoASIbCgpGbG9hdFZhbHVlEg0KBXZhbHVlGAEgASgCIhsKCkludDY0VmFsdWUSDQoFdmFsdWUYASABKAMiHAoLVUludDY0VmFsdWUSDQoFdmFsdWUYASABKAQiGwoKSW50MzJWYWx1ZRINCgV2YWx1ZRgBIAEoBSIcCgtVSW50MzJWYWx1ZRINCgV2YWx1ZRgBIAEoDSIaCglCb29sVmFsdWUSDQoFdmFsdWUYASABKAgiHAoLU3RyaW5nVmFsdWUSDQoFdmFsdWUYASABKAkiGwoKQnl0ZXNWYWx1ZRINCgV2YWx1ZRgBIAEoDEKDAQoTY29tLmdvb2dsZS5wcm90b2J1ZkINV3JhcHBlcnNQcm90b1ABWjFnb29nbGUuZ29sYW5nLm9yZy9wcm90b2J1Zi90eXBlcy9rbm93bi93cmFwcGVyc3Bi+AEBogIDR1BCqgIeR29vZ2xlLlByb3RvYnVmLldlbGxLbm93blR5cGVzYgZwcm90bzM"),a=(0,s.Z)(o,7)}},e=>{var t=t=>e(e.s=t);e.O(0,[295,375,515,920,637,969,441,517,358],()=>t(2673)),_N_E=e.O()}]);
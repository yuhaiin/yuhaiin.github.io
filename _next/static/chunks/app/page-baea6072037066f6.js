(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{5049:function(e,t,r){Promise.resolve().then(r.bind(r,8745))},4971:function(e,t,r){"use strict";r.d(t,{$f:function(){return f},Mj:function(){return g},Ti:function(){return l},U9:function(){return y},XE:function(){return m},YO:function(){return c},Z5:function(){return s},dn:function(){return d},fG:function(){return n},gU:function(){return o},gW:function(){return v},q$:function(){return p},r:function(){return u},rQ:function(){return a}});var n="",a="https://clients3.google.com/generate_204",o="dns.nextdns.io:853",c=!0,l="http://ip.sb",s="stun.syncthing.net:3478",d="stun.nextcloud.com:443";let i=()=>{let e=localStorage.getItem("api_url");n=null!==e?e:"",e=localStorage.getItem("remote_bypass"),null!==(e=localStorage.getItem("latency_http_url"))&&(a=e),null!==(e=localStorage.getItem("latency_dns_url"))&&(o=e),null!==(e=localStorage.getItem("latency_ipv6"))&&(c="true"===e),null!==(e=localStorage.getItem("latency_ip_url"))&&(l=e),null!==(e=localStorage.getItem("latency_stun_url"))&&(s=e),null!==(e=localStorage.getItem("latency_stun_tcp_url"))&&(d=e)},u=e=>{h("api_url",e)},f=e=>{h("latency_dns_url",e)},m=e=>{h("latency_http_url",e)},v=e=>{h("latency_ipv6",e.toString())},y=e=>{h("latency_ip_url",e)},g=e=>{h("latency_stun_url",e)},p=e=>{h("latency_stun_tcp_url",e)},h=(e,t)=>{""===t?localStorage.removeItem(e):localStorage.setItem(e,t),i()};i()},716:function(e,t,r){"use strict";var n=r(7437),a=r(2514),o=r(6264),c=r.n(o);t.Z=function(e){return(0,n.jsxs)("div",{className:"z-1090 d-flex flex-column justify-content-center align-items-center",style:{height:"100px"},children:[void 0!==e.children&&(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(c(),{className:"p2",statusCode:void 0!==e.code?e.code:500,title:e.children})}),(0,n.jsx)("div",{className:"p2",children:(0,n.jsx)(a.Z,{})})]})}},879:function(e,t,r){"use strict";r.d(t,{D4:function(){return c},OV:function(){return l},Uo:function(){return s},o5:function(){return d}});var n=r(4971),a=r(4050),o=r(7764);function c(e,t,r,c){return l=>c?(0,a.d)(e,c):fetch("".concat(n.fG).concat(l),{method:t,body:r}).then(async t=>{if(!t.ok)throw{code:t.status,msg:t.statusText,raw:t.text()};return(0,o.h4)(e,new Uint8Array(await t.arrayBuffer()))})}function l(e,t,r,a){return c=>fetch("".concat(n.fG).concat(c),{method:r,body:a}).then(async r=>{if(!r.ok)throw{code:r.status,msg:r.statusText,raw:r.text()};return t((0,o.h4)(e,new Uint8Array(await r.arrayBuffer())))})}let s=async(e,t)=>{let r=await fetch("".concat(n.fG).concat(e),{method:void 0!==t.method?t.method:"POST",body:t.body});return r.ok?void 0===t.process?{}:{data:t.process(r)}:{error:{code:r.status,msg:r.text()}}};function d(e,t,r){return(a,c)=>{let l,{next:s}=c,d=new URL(""!==n.fG?n.fG:window.location.toString());d.pathname=a,d.protocol="https:"===d.protocol?"wss:":"ws:";let i=!1,u=()=>{i||(console.log("connecting to: ".concat(d)),(l=new WebSocket(d)).binaryType="arraybuffer",l.addEventListener("open",t=>{console.log("connect to: ".concat(d,", event type: ").concat(t.type)),null==l||l.send(e)}),l.addEventListener("message",e=>{let n=(0,o.h4)(t,new Uint8Array(e.data));s(null,e=>r(e,n))}),l.addEventListener("error",e=>{let t="websocket have some error";s({msg:t,code:500}),console.log(t,e.type)}),l.addEventListener("close",e=>{console.log("websocket closed, code: "+e.code),s(null,void 0),i||(console.log("reconnect after 1 seconds"),setTimeout(u,1e3))}))};return u(),()=>{i=!0,void 0!==l&&(console.log("close: ".concat(a)),l.close(),l=void 0)}}}},8745:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return y}});var n=r(7437),a=r(7185),o=r(716),c=r(1617),l=r(879),s=r(6264),d=r.n(s),i=r(3056),u=r(6361),f=r(8537),m=r(629),v=function(){var e,t;let{data:r,error:s,isLoading:v}=(0,c.ZP)("/node/now",(0,l.D4)(i.bP));return void 0!==s?(0,n.jsx)(d(),{statusCode:s.code,title:s.msg}):v||void 0===r?(0,n.jsx)(o.Z,{}):(0,n.jsxs)("div",{children:[(0,n.jsxs)(a.Z,{className:"mb-3",children:[(0,n.jsx)(a.Z.Header,{children:"TCP"}),(0,n.jsx)(a.Z.Body,{children:(0,n.jsx)("pre",{children:(0,u.LQ)(m.tQ,null!==(e=r.tcp)&&void 0!==e?e:(0,f.U)(m.tQ,{}),{prettySpaces:2})})})]}),(0,n.jsxs)(a.Z,{className:"mb-3",children:[(0,n.jsx)(a.Z.Header,{children:"UDP"}),(0,n.jsx)(a.Z.Body,{children:(0,n.jsx)("pre",{children:(0,u.LQ)(m.tQ,null!==(t=r.udp)&&void 0!==t?t:(0,f.U)(m.tQ,{}),{prettySpaces:2})})})]})]})};function y(){return(0,n.jsx)("div",{children:(0,n.jsx)(v,{})})}},7185:function(e,t,r){"use strict";r.d(t,{Z:function(){return w}});var n=r(6800),a=r.n(n),o=r(2265),c=r(2574),l=r(7437);let s=o.forwardRef((e,t)=>{let{className:r,bsPrefix:n,as:o="div",...s}=e;return n=(0,c.vE)(n,"card-body"),(0,l.jsx)(o,{ref:t,className:a()(r,n),...s})});s.displayName="CardBody";let d=o.forwardRef((e,t)=>{let{className:r,bsPrefix:n,as:o="div",...s}=e;return n=(0,c.vE)(n,"card-footer"),(0,l.jsx)(o,{ref:t,className:a()(r,n),...s})});d.displayName="CardFooter";var i=r(3011);let u=o.forwardRef((e,t)=>{let{bsPrefix:r,className:n,as:s="div",...d}=e,u=(0,c.vE)(r,"card-header"),f=(0,o.useMemo)(()=>({cardHeaderBsPrefix:u}),[u]);return(0,l.jsx)(i.Z.Provider,{value:f,children:(0,l.jsx)(s,{ref:t,...d,className:a()(n,u)})})});u.displayName="CardHeader";let f=o.forwardRef((e,t)=>{let{bsPrefix:r,className:n,variant:o,as:s="img",...d}=e,i=(0,c.vE)(r,"card-img");return(0,l.jsx)(s,{ref:t,className:a()(o?"".concat(i,"-").concat(o):i,n),...d})});f.displayName="CardImg";let m=o.forwardRef((e,t)=>{let{className:r,bsPrefix:n,as:o="div",...s}=e;return n=(0,c.vE)(n,"card-img-overlay"),(0,l.jsx)(o,{ref:t,className:a()(r,n),...s})});m.displayName="CardImgOverlay";let v=o.forwardRef((e,t)=>{let{className:r,bsPrefix:n,as:o="a",...s}=e;return n=(0,c.vE)(n,"card-link"),(0,l.jsx)(o,{ref:t,className:a()(r,n),...s})});v.displayName="CardLink";var y=r(5130);let g=(0,y.Z)("h6"),p=o.forwardRef((e,t)=>{let{className:r,bsPrefix:n,as:o=g,...s}=e;return n=(0,c.vE)(n,"card-subtitle"),(0,l.jsx)(o,{ref:t,className:a()(r,n),...s})});p.displayName="CardSubtitle";let h=o.forwardRef((e,t)=>{let{className:r,bsPrefix:n,as:o="p",...s}=e;return n=(0,c.vE)(n,"card-text"),(0,l.jsx)(o,{ref:t,className:a()(r,n),...s})});h.displayName="CardText";let x=(0,y.Z)("h5"),j=o.forwardRef((e,t)=>{let{className:r,bsPrefix:n,as:o=x,...s}=e;return n=(0,c.vE)(n,"card-title"),(0,l.jsx)(o,{ref:t,className:a()(r,n),...s})});j.displayName="CardTitle";let _=o.forwardRef((e,t)=>{let{bsPrefix:r,className:n,bg:o,text:d,border:i,body:u=!1,children:f,as:m="div",...v}=e,y=(0,c.vE)(r,"card");return(0,l.jsx)(m,{ref:t,...v,className:a()(n,y,o&&"bg-".concat(o),d&&"text-".concat(d),i&&"border-".concat(i)),children:u?(0,l.jsx)(s,{children:f}):f})});_.displayName="Card";var w=Object.assign(_,{Img:f,Title:j,Subtitle:p,Body:s,Link:v,Text:h,Header:u,Footer:d,ImgOverlay:m})},3011:function(e,t,r){"use strict";let n=r(2265).createContext(null);n.displayName="CardHeaderContext",t.Z=n},5130:function(e,t,r){"use strict";var n=r(2265),a=r(6800),o=r.n(a),c=r(7437);t.Z=e=>n.forwardRef((t,r)=>(0,c.jsx)("div",{...t,ref:r,className:o()(t.className,e)}))}},function(e){e.O(0,[817,485,356,56,971,23,744],function(){return e(e.s=5049)}),_N_E=e.O()}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[987],{7861:(e,t,n)=>{Promise.resolve().then(n.bind(n,7305))},744:(e,t,n)=>{"use strict";n.d(t,{DH:()=>c,G_:()=>h,Ow:()=>d,Oz:()=>a,VN:()=>v,X3:()=>i,_s:()=>g,dp:()=>m,h$:()=>p,kP:()=>l,mv:()=>x,oH:()=>r,r3:()=>s,u1:()=>o});var l="",a="https://clients3.google.com/generate_204",s="dns.nextdns.io:853",r=!0,c="http://ip.sb",o="stun.syncthing.net:3478",i="stun.nextcloud.com:443";let u=()=>{let e=localStorage.getItem("api_url");l=null!==e?e:"",e=localStorage.getItem("remote_bypass"),null!==(e=localStorage.getItem("latency_http_url"))&&(a=e),null!==(e=localStorage.getItem("latency_dns_url"))&&(s=e),null!==(e=localStorage.getItem("latency_ipv6"))&&(r="true"===e),null!==(e=localStorage.getItem("latency_ip_url"))&&(c=e),null!==(e=localStorage.getItem("latency_stun_url"))&&(o=e),null!==(e=localStorage.getItem("latency_stun_tcp_url"))&&(i=e)},d=e=>{f("api_url",e)},m=e=>{f("latency_dns_url",e)},h=e=>{f("latency_http_url",e)},x=e=>{f("latency_ipv6",e.toString())},p=e=>{f("latency_ip_url",e)},g=e=>{f("latency_stun_url",e)},v=e=>{f("latency_stun_tcp_url",e)},f=(e,t)=>{""===t?localStorage.removeItem(e):localStorage.setItem(e,t),u()};u()},2859:(e,t,n)=>{"use strict";n.d(t,{$d:()=>c});var l=n(5155);n(2115);var a=n(6180),s=n(6121),r=n(3667);let c=e=>(0,l.jsxs)(a.A.Group,{as:s.A,className:"mb-2",children:[(0,l.jsx)(a.A.Label,{column:!0,sm:2,children:e.label}),(0,l.jsx)(r.A,{sm:10,className:"d-flex align-items-center",children:(0,l.jsx)(a.A.Check,{className:"d-flex align-items-center",type:"switch",checked:e.checked,onChange:()=>e.onChange()})})]})},148:(e,t,n)=>{"use strict";n.d(t,{u:()=>c,y:()=>o});var l=n(5155),a=n(2115),s=n(1757),r=n(491);let c=(0,a.createContext)({Info:e=>{},Error:e=>{}}),o=e=>{let{children:t}=e,[n,o]=(0,a.useState)({value:{},index:0}),i=(e,t)=>o(n=>({value:{...n.value,[n.index]:{text:e,type:t}},index:n.index+1}));return(0,l.jsxs)(c.Provider,{value:{Info:e=>{console.log(e),i(e,"success")},Error:e=>{console.error(e),i(e,"danger")}},children:[(0,l.jsx)(s.A,{className:"p-3",position:"top-center",containerPosition:"fixed",style:{zIndex:999999},children:Object.entries(n.value).map(e=>{let[t,a]=e;return(0,l.jsxs)(r.A,{role:"alert","aria-live":"assertive",show:!0,bg:a.type,onClose:()=>{let e=n.value;delete e[t],o({...n,value:e})},"aria-atomic":"true",delay:4e3,autohide:!0,animation:!0,children:[(0,l.jsxs)(r.A.Header,{children:[(0,l.jsx)("strong",{className:"me-auto",children:"Notification"}),(0,l.jsx)("small",{className:"text-muted",children:"just now"})]}),(0,l.jsx)(r.A.Body,{className:"text-center",children:a.text})]},"toast"+t)})}),t]})}},7305:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>p});var l=n(5155),a=n(2115),s=n(6180),r=n(6121),c=n(3667),o=n(2963),i=n(4216),u=n(2981),d=n(744),m=n(148),h=n(2859);let x=e=>(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(s.A.Group,{as:r.A,className:"mb-1 ms-1",children:(0,l.jsxs)(r.A,{className:"g-2",children:[(0,l.jsx)(s.A.Label,{column:!0,sm:2,className:"nowrap",children:e.title}),(0,l.jsx)(c.A,{sm:6,children:(0,l.jsx)(s.A.Control,{value:e.value,onChange:t=>e.onChange(t.target.value),placeholder:e.placeholder})}),(0,l.jsx)(c.A,{sm:2,children:(0,l.jsxs)(o.A,{disabled:e.loading,onClick:()=>e.onClick(),variant:"outline-primary",children:[e.buttonText?e.buttonText:"Save",e.loading&&(0,l.jsx)(i.A,{size:"sm",animation:"border",variant:"primary"})]})})]})})}),p=function(){let e=(0,a.useContext)(m.u),[t,n]=(0,a.useState)(d.kP),[s,r]=(0,a.useState)(d.Oz),[c,o]=(0,a.useState)(d.r3),[i,p]=(0,a.useState)(d.oH),[g,v]=(0,a.useState)(d.DH),[f,y]=(0,a.useState)(d.u1),[S,j]=(0,a.useState)(d.X3);return(0,l.jsxs)(l.Fragment,{children:[" ",(0,l.jsx)(u.A,{className:"mb-3",children:(0,l.jsxs)(u.A.Body,{children:[(0,l.jsx)(x,{title:"API Host",value:t,onChange:n,placeholder:"http://127.0.0.1:50051",onClick:()=>{(0,d.Ow)(t),""!==t?e.Info("Set API Url: ".concat(t," success.")):e.Info("Remove API Url success."),console.log(t)},buttonText:"Save"}),(0,l.jsx)("hr",{}),(0,l.jsx)(u.A.Title,{className:"mb-2",children:"Latency"}),(0,l.jsx)(h.$d,{label:"IPv6",checked:i,onChange:()=>{p(!i),(0,d.mv)(!i)}}),(0,l.jsx)(x,{title:"HTTP(tcp)",placeholder:"https://clients3.google.com/generate_204",value:s,onChange:r,onClick:()=>{(0,d.G_)(s),""!==s?e.Info("Set Latency HTTP Url: ".concat(s," success.")):e.Info("Remove Latency HTTP Url success.")}}),(0,l.jsx)(x,{title:"DOQ(udp)",placeholder:"dns.adguard.com:853",value:c,onChange:o,onClick:()=>{(0,d.dp)(c),""!==c?e.Info("Set Latency DNS: ".concat(c," success.")):e.Info("Remove Latency DNS success.")}}),(0,l.jsx)(x,{title:"IP",placeholder:"http://ip.sb",value:g,onChange:v,onClick:()=>{(0,d.h$)(g),""!==g?e.Info("Set Latency IP Url: ".concat(g," success.")):e.Info("Remove Latency IP Url success.")}}),(0,l.jsx)(x,{title:"STUN",placeholder:"stun.syncthing.net:3478",value:f,onChange:y,onClick:()=>{(0,d._s)(f),""!==f?e.Info("Set Latency STUN Url: ".concat(f," success.")):e.Info("Remove Latency STUN Url success.")}}),(0,l.jsx)(x,{title:"STUN TCP",placeholder:"stun.syncthing.net:3478",value:S,onChange:j,onClick:()=>{(0,d.VN)(S),""!==S?e.Info("Set Latency STUN TCP Url: ".concat(S," success.")):e.Info("Remove Latency STUN TCP Url success.")}})]})})]})}},6121:(e,t,n)=>{"use strict";n.d(t,{A:()=>i});var l=n(4617),a=n.n(l),s=n(2115),r=n(1653),c=n(5155);let o=s.forwardRef((e,t)=>{let{bsPrefix:n,className:l,as:s="div",...o}=e,i=(0,r.oU)(n,"row"),u=(0,r.gy)(),d=(0,r.Jm)(),m="".concat(i,"-cols"),h=[];return u.forEach(e=>{let t;let n=o[e];delete o[e],null!=n&&"object"==typeof n?{cols:t}=n:t=n,null!=t&&h.push("".concat(m).concat(e!==d?"-".concat(e):"","-").concat(t))}),(0,c.jsx)(s,{ref:t,...o,className:a()(l,i,...h)})});o.displayName="Row";let i=o},4216:(e,t,n)=>{"use strict";n.d(t,{A:()=>i});var l=n(4617),a=n.n(l),s=n(2115),r=n(1653),c=n(5155);let o=s.forwardRef((e,t)=>{let{bsPrefix:n,variant:l,animation:s="border",size:o,as:i="div",className:u,...d}=e;n=(0,r.oU)(n,"spinner");let m="".concat(n,"-").concat(s);return(0,c.jsx)(i,{ref:t,...d,className:a()(u,m,o&&"".concat(m,"-").concat(o),l&&"text-".concat(l))})});o.displayName="Spinner";let i=o},1653:(e,t,n)=>{"use strict";n.d(t,{Jm:()=>d,Jy:()=>a,Wz:()=>m,ff:()=>s,gy:()=>u,oU:()=>i});var l=n(2115);n(5155);let a=["xxl","xl","lg","md","sm","xs"],s="xs",r=l.createContext({prefixes:{},breakpoints:a,minBreakpoint:s}),{Consumer:c,Provider:o}=r;function i(e,t){let{prefixes:n}=(0,l.useContext)(r);return e||n[t]||t}function u(){let{breakpoints:e}=(0,l.useContext)(r);return e}function d(){let{minBreakpoint:e}=(0,l.useContext)(r);return e}function m(){let{dir:e}=(0,l.useContext)(r);return"rtl"===e}},4617:(e,t)=>{var n;!function(){"use strict";var l={}.hasOwnProperty;function a(){for(var e="",t=0;t<arguments.length;t++){var n=arguments[t];n&&(e=s(e,function(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return a.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var n in e)l.call(e,n)&&e[n]&&(t=s(t,n));return t}(n)))}return e}function s(e,t){return t?e?e+" "+t:e+t:e}e.exports?(a.default=a,e.exports=a):void 0!==(n=(function(){return a}).apply(t,[]))&&(e.exports=n)}()}},e=>{var t=t=>e(e.s=t);e.O(0,[515,920,441,517,358],()=>t(7861)),_N_E=e.O()}]);
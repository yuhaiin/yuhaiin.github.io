(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3987],{1846:(e,t,n)=>{"use strict";n.d(t,{A:()=>i});var a=n(9300),l=n.n(a),r=n(2115),s=n(7390),o=n(5155);let c=r.forwardRef((e,t)=>{let{bsPrefix:n,className:a,as:r="div",...c}=e,i=(0,s.oU)(n,"row"),u=(0,s.gy)(),d=(0,s.Jm)(),m="".concat(i,"-cols"),p=[];return u.forEach(e=>{let t;let n=c[e];delete c[e],null!=n&&"object"==typeof n?{cols:t}=n:t=n,null!=t&&p.push("".concat(m).concat(e!==d?"-".concat(e):"","-").concat(t))}),(0,o.jsx)(r,{ref:t,...c,className:l()(a,i,...p)})});c.displayName="Row";let i=c},1867:(e,t,n)=>{"use strict";n.d(t,{A:()=>i});var a=n(9300),l=n.n(a),r=n(2115),s=n(7390),o=n(5155);let c=r.forwardRef((e,t)=>{let{bsPrefix:n,variant:a,animation:r="border",size:c,as:i="div",className:u,...d}=e;n=(0,s.oU)(n,"spinner");let m="".concat(n,"-").concat(r);return(0,o.jsx)(i,{ref:t,...d,className:l()(u,m,c&&"".concat(m,"-").concat(c),a&&"text-".concat(a))})});c.displayName="Spinner";let i=c},2358:(e,t,n)=>{"use strict";n.d(t,{$d:()=>o,FX:()=>u,Vx:()=>c,no:()=>i});var a=n(5155),l=n(8054),r=n(1846),s=n(8136);let o=e=>{let{label:t,checked:n,onChange:o,className:c}=e;return(0,a.jsxs)(l.A.Group,{as:r.A,className:c,children:[(0,a.jsx)(l.A.Label,{column:!0,sm:2,children:t}),(0,a.jsx)(s.A,{sm:10,className:"d-flex align-items-center",children:(0,a.jsx)(l.A.Check,{className:"d-flex align-items-center",type:"switch",checked:n,onChange:e=>o(e.target.checked)})})]})},c=e=>{var t;let{...n}=e;return(0,a.jsxs)(l.A.Group,{as:r.A,className:n.lastElem?"":"mb-2",children:[(0,a.jsx)(l.A.Label,{column:!0,sm:2,children:n.label}),(0,a.jsx)(s.A,{sm:10,children:(0,a.jsx)(l.A.Select,{value:n.value,onChange:e=>n.onChange(Number(e.target.value)),children:n.type.values.filter(null!==(t=n.filter)&&void 0!==t?t:()=>!0).map(e=>(0,a.jsx)("option",{value:e.number,children:n.format?n.format(e.number):e.name},e.number))})})]})},i=e=>{let{label:t,values:n,onChange:o,value:c,emptyChoose:i,lastElem:u}=e;return(0,a.jsxs)(l.A.Group,{as:r.A,className:u?"":"mb-2",children:[(0,a.jsx)(l.A.Label,{column:!0,sm:2,children:t}),(0,a.jsx)(s.A,{sm:10,children:(0,a.jsxs)(l.A.Select,{value:c,onChange:e=>o(e.target.value),children:[i&&(0,a.jsx)("option",{value:"",children:"Choose..."}),n.map(e=>(0,a.jsx)("option",{value:e,children:e},e))]})})]})},u=e=>{let{values:t,onChange:n,value:r,emptyChoose:s,format:o}=e;return(0,a.jsxs)(l.A.Select,{value:r,onChange:e=>n(e.target.value),children:[s&&(0,a.jsx)("option",{value:"",children:"Choose..."}),t.map(e=>{let t="string"==typeof e?e:e[0],n="string"==typeof e?e:e[1];return(0,a.jsx)("option",{value:n,children:o?o(t):t},t)})]})}},3641:(e,t,n)=>{"use strict";n.d(t,{DH:()=>o,G_:()=>p,Ow:()=>d,Oz:()=>l,VN:()=>v,X3:()=>i,_s:()=>h,dp:()=>m,h$:()=>x,kP:()=>a,mv:()=>f,oH:()=>s,r3:()=>r,u1:()=>c});let a="",l="https://clients3.google.com/generate_204",r="dns.nextdns.io:853",s=!0,o="http://ip.sb",c="stun.syncthing.net:3478",i="stun.nextcloud.com:443",u=()=>{let e=localStorage.getItem("api_url");a=null!==e?e:"",e=localStorage.getItem("remote_bypass"),null!==(e=localStorage.getItem("latency_http_url"))&&(l=e),null!==(e=localStorage.getItem("latency_dns_url"))&&(r=e),null!==(e=localStorage.getItem("latency_ipv6"))&&(s="true"===e),null!==(e=localStorage.getItem("latency_ip_url"))&&(o=e),null!==(e=localStorage.getItem("latency_stun_url"))&&(c=e),null!==(e=localStorage.getItem("latency_stun_tcp_url"))&&(i=e)},d=e=>{g("api_url",e)},m=e=>{g("latency_dns_url",e)},p=e=>{g("latency_http_url",e)},f=e=>{g("latency_ipv6",e.toString())},x=e=>{g("latency_ip_url",e)},h=e=>{g("latency_stun_url",e)},v=e=>{g("latency_stun_tcp_url",e)},g=(e,t)=>{""===t?localStorage.removeItem(e):localStorage.setItem(e,t),u()};u()},4748:(e,t,n)=>{"use strict";n.d(t,{A:()=>f});var a=n(9300),l=n.n(a),r=n(2115),s=n(9009),o=n(2489),c=n(4874),i=n(8283),u=n(4692),d=n(5155);let m={[s.ns]:"show",[s._K]:"show"},p=r.forwardRef((e,t)=>{let{className:n,children:a,transitionClasses:s={},onEnter:p,...f}=e,x={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,...f},h=(0,r.useCallback)((e,t)=>{(0,i.A)(e),null==p||p(e,t)},[p]);return(0,d.jsx)(u.A,{ref:t,addEndListener:c.A,...x,onEnter:h,childRef:(0,o.am)(a),children:(e,t)=>r.cloneElement(a,{...t,className:l()("fade",n,a.props.className,m[e],s[e])})})});p.displayName="Fade";let f=p},6215:(e,t,n)=>{"use strict";n.d(t,{A:()=>j});var a=n(2115),l=n(9300),r=n.n(l),s=n(8355);let o=0x80000000-1;var c=n(9009),i=n(4748),u=n(5155);let d={[c.ns]:"showing",[c.ze]:"showing show"},m=a.forwardRef((e,t)=>(0,u.jsx)(i.A,{...e,ref:t,transitionClasses:d}));m.displayName="ToastFade";var p=n(7150),f=n(7390),x=n(7706);let h=a.createContext({onClose(){}}),v=a.forwardRef((e,t)=>{let{bsPrefix:n,closeLabel:l="Close",closeVariant:s,closeButton:o=!0,className:c,children:i,...d}=e;n=(0,f.oU)(n,"toast-header");let m=(0,a.useContext)(h),v=(0,p.A)(e=>{null==m||null==m.onClose||m.onClose(e)});return(0,u.jsxs)("div",{ref:t,...d,className:r()(n,c),children:[i,o&&(0,u.jsx)(x.A,{"aria-label":l,variant:s,onClick:v,"data-dismiss":"toast"})]})});v.displayName="ToastHeader";let g=a.forwardRef((e,t)=>{let{className:n,bsPrefix:a,as:l="div",...s}=e;return a=(0,f.oU)(a,"toast-body"),(0,u.jsx)(l,{ref:t,className:r()(n,a),...s})});g.displayName="ToastBody";let y=a.forwardRef((e,t)=>{let{bsPrefix:n,className:l,transition:c=m,show:i=!0,animation:d=!0,delay:p=5e3,autohide:x=!1,onClose:v,onEntered:g,onExit:y,onExiting:j,onEnter:b,onEntering:C,onExited:N,bg:A,...S}=e;n=(0,f.oU)(n,"toast");let _=(0,a.useRef)(p),I=(0,a.useRef)(v);(0,a.useEffect)(()=>{_.current=p,I.current=v},[p,v]);let T=function(){let e=function(){let e=(0,a.useRef)(!0),t=(0,a.useRef)(()=>e.current);return(0,a.useEffect)(()=>(e.current=!0,()=>{e.current=!1}),[]),t.current}(),t=(0,a.useRef)();return(0,s.A)(()=>clearTimeout(t.current)),(0,a.useMemo)(()=>{let n=()=>clearTimeout(t.current);return{set:function(a,l=0){e()&&(n(),l<=o?t.current=setTimeout(a,l):function e(t,n,a){let l=a-Date.now();t.current=l<=o?setTimeout(n,l):setTimeout(()=>e(t,n,a),o)}(t,a,Date.now()+l))},clear:n,handleRef:t}},[])}(),w=!!(x&&i),k=(0,a.useCallback)(()=>{w&&(null==I.current||I.current())},[w]);(0,a.useEffect)(()=>{T.set(k,_.current)},[T,k]);let E=(0,a.useMemo)(()=>({onClose:v}),[v]),R=!!(c&&d),U=(0,u.jsx)("div",{...S,ref:t,className:r()(n,l,A&&"bg-".concat(A),!R&&(i?"show":"hide")),role:"alert","aria-live":"assertive","aria-atomic":"true"});return(0,u.jsx)(h.Provider,{value:E,children:R&&c?(0,u.jsx)(c,{in:i,onEnter:b,onEntering:C,onEntered:g,onExit:y,onExiting:j,onExited:N,unmountOnExit:!0,children:U}):U})});y.displayName="Toast";let j=Object.assign(y,{Body:g,Header:v})},6835:(e,t,n)=>{"use strict";n.d(t,{u:()=>o,y:()=>c});var a=n(5155),l=n(2115),r=n(9376),s=n(6215);let o=(0,l.createContext)({Info:e=>{console.log(e)},Error:e=>{console.error(e)}}),c=e=>{let{children:t}=e,[n,c]=(0,l.useState)({value:{},index:0}),i=(e,t)=>c(n=>({value:{...n.value,[n.index]:{text:e,type:t}},index:n.index+1}));return(0,a.jsxs)(o.Provider,{value:{Info:e=>{console.log(e),i(e,"success")},Error:e=>{console.error(e),i(e,"danger")}},children:[(0,a.jsx)(r.A,{className:"p-3",position:"top-center",containerPosition:"fixed",style:{zIndex:999999},children:Object.entries(n.value).map(e=>{let[t,n]=e;return(0,a.jsxs)(s.A,{role:"alert","aria-live":"assertive",show:!0,bg:n.type,onClose:()=>{c(e=>{let n={...e.value};return delete n[t],{...e,value:n}})},"aria-atomic":"true",delay:4e3,autohide:!0,animation:!0,children:[(0,a.jsxs)(s.A.Header,{children:[(0,a.jsx)("strong",{className:"me-auto",children:"Notification"}),(0,a.jsx)("small",{className:"text-muted",children:"just now"})]}),(0,a.jsx)(s.A.Body,{className:"text-center",children:n.text})]},"toast"+t)})}),t]})}},7390:(e,t,n)=>{"use strict";n.d(t,{Jm:()=>d,Jy:()=>l,Wz:()=>m,ff:()=>r,gy:()=>u,oU:()=>i});var a=n(2115);n(5155);let l=["xxl","xl","lg","md","sm","xs"],r="xs",s=a.createContext({prefixes:{},breakpoints:l,minBreakpoint:r}),{Consumer:o,Provider:c}=s;function i(e,t){let{prefixes:n}=(0,a.useContext)(s);return e||n[t]||t}function u(){let{breakpoints:e}=(0,a.useContext)(s);return e}function d(){let{minBreakpoint:e}=(0,a.useContext)(s);return e}function m(){let{dir:e}=(0,a.useContext)(s);return"rtl"===e}},7706:(e,t,n)=>{"use strict";n.d(t,{A:()=>d});var a=n(8637),l=n.n(a),r=n(2115),s=n(9300),o=n.n(s),c=n(5155);let i={"aria-label":l().string,onClick:l().func,variant:l().oneOf(["white"])},u=r.forwardRef((e,t)=>{let{className:n,variant:a,"aria-label":l="Close",...r}=e;return(0,c.jsx)("button",{ref:t,type:"button",className:o()("btn-close",a&&"btn-close-".concat(a),n),"aria-label":l,...r})});u.displayName="CloseButton",u.propTypes=i;let d=u},7861:(e,t,n)=>{Promise.resolve().then(n.bind(n,9334))},8355:(e,t,n)=>{"use strict";n.d(t,{A:()=>l});var a=n(2115);function l(e){let t=function(e){let t=(0,a.useRef)(e);return t.current=e,t}(e);(0,a.useEffect)(()=>()=>t.current(),[])}},9300:(e,t)=>{var n;!function(){"use strict";var a={}.hasOwnProperty;function l(){for(var e="",t=0;t<arguments.length;t++){var n=arguments[t];n&&(e=r(e,function(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return l.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var n in e)a.call(e,n)&&e[n]&&(t=r(t,n));return t}(n)))}return e}function r(e,t){return t?e?e+" "+t:e+t:e}e.exports?(l.default=l,e.exports=l):void 0!==(n=(function(){return l}).apply(t,[]))&&(e.exports=n)}()},9334:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>x});var a=n(5155),l=n(2115),r=n(8054),s=n(1846),o=n(8136),c=n(902),i=n(1867),u=n(6355),d=n(3641),m=n(2358),p=n(6835);let f=e=>(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(r.A.Group,{as:s.A,className:"ms-1"+(e.className?" "+e.className:""),children:(0,a.jsxs)(s.A,{children:[(0,a.jsx)(r.A.Label,{column:!0,sm:2,className:"nowrap",children:e.title}),(0,a.jsx)(o.A,{sm:6,children:(0,a.jsx)(r.A.Control,{value:e.value,onChange:t=>e.onChange(t.target.value),placeholder:e.placeholder})}),(0,a.jsx)(o.A,{sm:2,children:(0,a.jsxs)(c.A,{disabled:e.loading,onClick:()=>e.onClick(),variant:"outline-primary",children:[e.buttonText?e.buttonText:"Save",e.loading&&(0,a.jsx)(i.A,{size:"sm",animation:"border",variant:"primary"})]})})]})})}),x=function(){let e=(0,l.useContext)(p.u),[t,n]=(0,l.useState)(d.kP),[r,s]=(0,l.useState)(d.Oz),[o,c]=(0,l.useState)(d.r3),[i,x]=(0,l.useState)(d.oH),[h,v]=(0,l.useState)(d.DH),[g,y]=(0,l.useState)(d.u1),[j,b]=(0,l.useState)(d.X3);return(0,a.jsxs)(a.Fragment,{children:[" ",(0,a.jsx)(u.A,{className:"mb-3",children:(0,a.jsxs)(u.A.Body,{children:[(0,a.jsx)(f,{title:"API Host",value:t,onChange:n,placeholder:"http://127.0.0.1:50051",onClick:()=>{(0,d.Ow)(t),""!==t?e.Info("Set API Url: ".concat(t," success.")):e.Info("Remove API Url success."),console.log(t)},buttonText:"Save"}),(0,a.jsx)("hr",{}),(0,a.jsx)(u.A.Title,{className:"mb-2",children:"Latency"}),(0,a.jsx)(m.$d,{label:"IPv6",className:"mb-1 ms-1",checked:i,onChange:()=>{x(!i),(0,d.mv)(!i)}}),(0,a.jsx)(f,{title:"HTTP(tcp)",placeholder:"https://clients3.google.com/generate_204",value:r,className:"mb-2",onChange:s,onClick:()=>{(0,d.G_)(r),""!==r?e.Info("Set Latency HTTP Url: ".concat(r," success.")):e.Info("Remove Latency HTTP Url success.")}}),(0,a.jsx)(f,{title:"DOQ(udp)",placeholder:"dns.adguard.com:853",className:"mb-2",value:o,onChange:c,onClick:()=>{(0,d.dp)(o),""!==o?e.Info("Set Latency DNS: ".concat(o," success.")):e.Info("Remove Latency DNS success.")}}),(0,a.jsx)(f,{title:"IP",placeholder:"http://ip.sb",className:"mb-2",value:h,onChange:v,onClick:()=>{(0,d.h$)(h),""!==h?e.Info("Set Latency IP Url: ".concat(h," success.")):e.Info("Remove Latency IP Url success.")}}),(0,a.jsx)(f,{title:"STUN",placeholder:"stun.syncthing.net:3478",className:"mb-2",value:g,onChange:y,onClick:()=>{(0,d._s)(g),""!==g?e.Info("Set Latency STUN Url: ".concat(g," success.")):e.Info("Remove Latency STUN Url success.")}}),(0,a.jsx)(f,{title:"STUN TCP",placeholder:"stun.syncthing.net:3478",value:j,onChange:b,onClick:()=>{(0,d.VN)(j),""!==j?e.Info("Set Latency STUN TCP Url: ".concat(j," success.")):e.Info("Remove Latency STUN TCP Url success.")}})]})})]})}},9376:(e,t,n)=>{"use strict";n.d(t,{A:()=>u});var a=n(9300),l=n.n(a),r=n(2115),s=n(7390),o=n(5155);let c={"top-start":"top-0 start-0","top-center":"top-0 start-50 translate-middle-x","top-end":"top-0 end-0","middle-start":"top-50 start-0 translate-middle-y","middle-center":"top-50 start-50 translate-middle","middle-end":"top-50 end-0 translate-middle-y","bottom-start":"bottom-0 start-0","bottom-center":"bottom-0 start-50 translate-middle-x","bottom-end":"bottom-0 end-0"},i=r.forwardRef((e,t)=>{let{bsPrefix:n,position:a,containerPosition:r,className:i,as:u="div",...d}=e;return n=(0,s.oU)(n,"toast-container"),(0,o.jsx)(u,{ref:t,...d,className:l()(n,a&&c[a],r&&"position-".concat(r),i)})});i.displayName="ToastContainer";let u=i}},e=>{var t=t=>e(e.s=t);e.O(0,[9322,3779,8441,1684,7358],()=>t(7861)),_N_E=e.O()}]);
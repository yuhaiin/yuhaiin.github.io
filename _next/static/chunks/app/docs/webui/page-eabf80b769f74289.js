(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3987],{7861:(e,t,n)=>{Promise.resolve().then(n.bind(n,7305))},348:(e,t,n)=>{"use strict";n.d(t,{DH:()=>o,G_:()=>f,Ow:()=>d,Oz:()=>a,VN:()=>v,X3:()=>i,_s:()=>h,dp:()=>m,h$:()=>x,kP:()=>r,mv:()=>p,oH:()=>s,r3:()=>l,u1:()=>c});let r="",a="https://clients3.google.com/generate_204",l="dns.nextdns.io:853",s=!0,o="http://ip.sb",c="stun.syncthing.net:3478",i="stun.nextcloud.com:443",u=()=>{let e=localStorage.getItem("api_url");r=null!==e?e:"",e=localStorage.getItem("remote_bypass"),null!==(e=localStorage.getItem("latency_http_url"))&&(a=e),null!==(e=localStorage.getItem("latency_dns_url"))&&(l=e),null!==(e=localStorage.getItem("latency_ipv6"))&&(s="true"===e),null!==(e=localStorage.getItem("latency_ip_url"))&&(o=e),null!==(e=localStorage.getItem("latency_stun_url"))&&(c=e),null!==(e=localStorage.getItem("latency_stun_tcp_url"))&&(i=e)},d=e=>{g("api_url",e)},m=e=>{g("latency_dns_url",e)},f=e=>{g("latency_http_url",e)},p=e=>{g("latency_ipv6",e.toString())},x=e=>{g("latency_ip_url",e)},h=e=>{g("latency_stun_url",e)},v=e=>{g("latency_stun_tcp_url",e)},g=(e,t)=>{""===t?localStorage.removeItem(e):localStorage.setItem(e,t),u()};u()},2859:(e,t,n)=>{"use strict";n.d(t,{$d:()=>o,FX:()=>i,Vx:()=>c});var r=n(5155),a=n(6180),l=n(6121),s=n(3667);let o=e=>{let{label:t,checked:n,onChange:o}=e;return(0,r.jsxs)(a.A.Group,{as:l.A,className:"mb-2",children:[(0,r.jsx)(a.A.Label,{column:!0,sm:2,children:t}),(0,r.jsx)(s.A,{sm:10,className:"d-flex align-items-center",children:(0,r.jsx)(a.A.Check,{className:"d-flex align-items-center",type:"switch",checked:n,onChange:e=>o(e.target.checked)})})]})},c=e=>{var t;let{...n}=e;return(0,r.jsxs)(a.A.Group,{as:l.A,className:"mb-3",children:[(0,r.jsx)(a.A.Label,{column:!0,sm:2,children:n.label}),(0,r.jsx)(s.A,{sm:10,children:(0,r.jsx)(a.A.Select,{value:n.value,onChange:e=>n.onChange(Number(e.target.value)),children:n.type.values.filter(null!==(t=n.filter)&&void 0!==t?t:()=>!0).map(e=>(0,r.jsx)("option",{value:e.number,children:n.format?n.format(e.number):e.name},e.number))})})]})},i=e=>{let{values:t,onChange:n,value:l,emptyChoose:s,format:o}=e;return(0,r.jsxs)(a.A.Select,{value:l,onChange:e=>n(e.target.value),children:[s&&(0,r.jsx)("option",{value:"",children:"Choose..."}),t.map(e=>{let t="string"==typeof e?e:e[0],n="string"==typeof e?e:e[1];return(0,r.jsx)("option",{value:n,children:o?o(t):t},t)})]})}},148:(e,t,n)=>{"use strict";n.d(t,{u:()=>o,y:()=>c});var r=n(5155),a=n(2115),l=n(1757),s=n(491);let o=(0,a.createContext)({Info:e=>{console.log(e)},Error:e=>{console.error(e)}}),c=e=>{let{children:t}=e,[n,c]=(0,a.useState)({value:{},index:0}),i=(e,t)=>c(n=>({value:{...n.value,[n.index]:{text:e,type:t}},index:n.index+1}));return(0,r.jsxs)(o.Provider,{value:{Info:e=>{console.log(e),i(e,"success")},Error:e=>{console.error(e),i(e,"danger")}},children:[(0,r.jsx)(l.A,{className:"p-3",position:"top-center",containerPosition:"fixed",style:{zIndex:999999},children:Object.entries(n.value).map(e=>{let[t,n]=e;return(0,r.jsxs)(s.A,{role:"alert","aria-live":"assertive",show:!0,bg:n.type,onClose:()=>{c(e=>{let n={...e.value};return delete n[t],{...e,value:n}})},"aria-atomic":"true",delay:4e3,autohide:!0,animation:!0,children:[(0,r.jsxs)(s.A.Header,{children:[(0,r.jsx)("strong",{className:"me-auto",children:"Notification"}),(0,r.jsx)("small",{className:"text-muted",children:"just now"})]}),(0,r.jsx)(s.A.Body,{className:"text-center",children:n.text})]},"toast"+t)})}),t]})}},7305:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>x});var r=n(5155),a=n(2115),l=n(6180),s=n(6121),o=n(3667),c=n(2963),i=n(4216),u=n(2981),d=n(348),m=n(2859),f=n(148);let p=e=>(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(l.A.Group,{as:s.A,className:"mb-1 ms-1",children:(0,r.jsxs)(s.A,{className:"g-2",children:[(0,r.jsx)(l.A.Label,{column:!0,sm:2,className:"nowrap",children:e.title}),(0,r.jsx)(o.A,{sm:6,children:(0,r.jsx)(l.A.Control,{value:e.value,onChange:t=>e.onChange(t.target.value),placeholder:e.placeholder})}),(0,r.jsx)(o.A,{sm:2,children:(0,r.jsxs)(c.A,{disabled:e.loading,onClick:()=>e.onClick(),variant:"outline-primary",children:[e.buttonText?e.buttonText:"Save",e.loading&&(0,r.jsx)(i.A,{size:"sm",animation:"border",variant:"primary"})]})})]})})}),x=function(){let e=(0,a.useContext)(f.u),[t,n]=(0,a.useState)(d.kP),[l,s]=(0,a.useState)(d.Oz),[o,c]=(0,a.useState)(d.r3),[i,x]=(0,a.useState)(d.oH),[h,v]=(0,a.useState)(d.DH),[g,y]=(0,a.useState)(d.u1),[j,b]=(0,a.useState)(d.X3);return(0,r.jsxs)(r.Fragment,{children:[" ",(0,r.jsx)(u.A,{className:"mb-3",children:(0,r.jsxs)(u.A.Body,{children:[(0,r.jsx)(p,{title:"API Host",value:t,onChange:n,placeholder:"http://127.0.0.1:50051",onClick:()=>{(0,d.Ow)(t),""!==t?e.Info("Set API Url: ".concat(t," success.")):e.Info("Remove API Url success."),console.log(t)},buttonText:"Save"}),(0,r.jsx)("hr",{}),(0,r.jsx)(u.A.Title,{className:"mb-2",children:"Latency"}),(0,r.jsx)(m.$d,{label:"IPv6",checked:i,onChange:()=>{x(!i),(0,d.mv)(!i)}}),(0,r.jsx)(p,{title:"HTTP(tcp)",placeholder:"https://clients3.google.com/generate_204",value:l,onChange:s,onClick:()=>{(0,d.G_)(l),""!==l?e.Info("Set Latency HTTP Url: ".concat(l," success.")):e.Info("Remove Latency HTTP Url success.")}}),(0,r.jsx)(p,{title:"DOQ(udp)",placeholder:"dns.adguard.com:853",value:o,onChange:c,onClick:()=>{(0,d.dp)(o),""!==o?e.Info("Set Latency DNS: ".concat(o," success.")):e.Info("Remove Latency DNS success.")}}),(0,r.jsx)(p,{title:"IP",placeholder:"http://ip.sb",value:h,onChange:v,onClick:()=>{(0,d.h$)(h),""!==h?e.Info("Set Latency IP Url: ".concat(h," success.")):e.Info("Remove Latency IP Url success.")}}),(0,r.jsx)(p,{title:"STUN",placeholder:"stun.syncthing.net:3478",value:g,onChange:y,onClick:()=>{(0,d._s)(g),""!==g?e.Info("Set Latency STUN Url: ".concat(g," success.")):e.Info("Remove Latency STUN Url success.")}}),(0,r.jsx)(p,{title:"STUN TCP",placeholder:"stun.syncthing.net:3478",value:j,onChange:b,onClick:()=>{(0,d.VN)(j),""!==j?e.Info("Set Latency STUN TCP Url: ".concat(j," success.")):e.Info("Remove Latency STUN TCP Url success.")}})]})})]})}},8987:(e,t,n)=>{"use strict";n.d(t,{A:()=>a});var r=n(2115);function a(e){let t=function(e){let t=(0,r.useRef)(e);return t.current=e,t}(e);(0,r.useEffect)(()=>()=>t.current(),[])}},169:(e,t,n)=>{"use strict";n.d(t,{A:()=>d});var r=n(1996),a=n.n(r),l=n(2115),s=n(4617),o=n.n(s),c=n(5155);let i={"aria-label":a().string,onClick:a().func,variant:a().oneOf(["white"])},u=l.forwardRef((e,t)=>{let{className:n,variant:r,"aria-label":a="Close",...l}=e;return(0,c.jsx)("button",{ref:t,type:"button",className:o()("btn-close",r&&"btn-close-".concat(r),n),"aria-label":a,...l})});u.displayName="CloseButton",u.propTypes=i;let d=u},3281:(e,t,n)=>{"use strict";n.d(t,{A:()=>p});var r=n(4617),a=n.n(r),l=n(2115),s=n(2400),o=n(5998),c=n(4837),i=n(3557),u=n(4579),d=n(5155);let m={[s.ns]:"show",[s._K]:"show"},f=l.forwardRef((e,t)=>{let{className:n,children:r,transitionClasses:s={},onEnter:f,...p}=e,x={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,...p},h=(0,l.useCallback)((e,t)=>{(0,i.A)(e),null==f||f(e,t)},[f]);return(0,d.jsx)(u.A,{ref:t,addEndListener:c.A,...x,onEnter:h,childRef:(0,o.am)(r),children:(e,t)=>l.cloneElement(r,{...t,className:a()("fade",n,r.props.className,m[e],s[e])})})});f.displayName="Fade";let p=f},6121:(e,t,n)=>{"use strict";n.d(t,{A:()=>i});var r=n(4617),a=n.n(r),l=n(2115),s=n(1653),o=n(5155);let c=l.forwardRef((e,t)=>{let{bsPrefix:n,className:r,as:l="div",...c}=e,i=(0,s.oU)(n,"row"),u=(0,s.gy)(),d=(0,s.Jm)(),m="".concat(i,"-cols"),f=[];return u.forEach(e=>{let t;let n=c[e];delete c[e],null!=n&&"object"==typeof n?{cols:t}=n:t=n,null!=t&&f.push("".concat(m).concat(e!==d?"-".concat(e):"","-").concat(t))}),(0,o.jsx)(l,{ref:t,...c,className:a()(r,i,...f)})});c.displayName="Row";let i=c},4216:(e,t,n)=>{"use strict";n.d(t,{A:()=>i});var r=n(4617),a=n.n(r),l=n(2115),s=n(1653),o=n(5155);let c=l.forwardRef((e,t)=>{let{bsPrefix:n,variant:r,animation:l="border",size:c,as:i="div",className:u,...d}=e;n=(0,s.oU)(n,"spinner");let m="".concat(n,"-").concat(l);return(0,o.jsx)(i,{ref:t,...d,className:a()(u,m,c&&"".concat(m,"-").concat(c),r&&"text-".concat(r))})});c.displayName="Spinner";let i=c},1653:(e,t,n)=>{"use strict";n.d(t,{Jm:()=>d,Jy:()=>a,Wz:()=>m,ff:()=>l,gy:()=>u,oU:()=>i});var r=n(2115);n(5155);let a=["xxl","xl","lg","md","sm","xs"],l="xs",s=r.createContext({prefixes:{},breakpoints:a,minBreakpoint:l}),{Consumer:o,Provider:c}=s;function i(e,t){let{prefixes:n}=(0,r.useContext)(s);return e||n[t]||t}function u(){let{breakpoints:e}=(0,r.useContext)(s);return e}function d(){let{minBreakpoint:e}=(0,r.useContext)(s);return e}function m(){let{dir:e}=(0,r.useContext)(s);return"rtl"===e}},491:(e,t,n)=>{"use strict";n.d(t,{A:()=>j});var r=n(2115),a=n(4617),l=n.n(a),s=n(8987);let o=0x80000000-1;var c=n(2400),i=n(3281),u=n(5155);let d={[c.ns]:"showing",[c.ze]:"showing show"},m=r.forwardRef((e,t)=>(0,u.jsx)(i.A,{...e,ref:t,transitionClasses:d}));m.displayName="ToastFade";var f=n(3853),p=n(1653),x=n(169);let h=r.createContext({onClose(){}}),v=r.forwardRef((e,t)=>{let{bsPrefix:n,closeLabel:a="Close",closeVariant:s,closeButton:o=!0,className:c,children:i,...d}=e;n=(0,p.oU)(n,"toast-header");let m=(0,r.useContext)(h),v=(0,f.A)(e=>{null==m||null==m.onClose||m.onClose(e)});return(0,u.jsxs)("div",{ref:t,...d,className:l()(n,c),children:[i,o&&(0,u.jsx)(x.A,{"aria-label":a,variant:s,onClick:v,"data-dismiss":"toast"})]})});v.displayName="ToastHeader";let g=r.forwardRef((e,t)=>{let{className:n,bsPrefix:r,as:a="div",...s}=e;return r=(0,p.oU)(r,"toast-body"),(0,u.jsx)(a,{ref:t,className:l()(n,r),...s})});g.displayName="ToastBody";let y=r.forwardRef((e,t)=>{let{bsPrefix:n,className:a,transition:c=m,show:i=!0,animation:d=!0,delay:f=5e3,autohide:x=!1,onClose:v,onEntered:g,onExit:y,onExiting:j,onEnter:b,onEntering:C,onExited:A,bg:N,...S}=e;n=(0,p.oU)(n,"toast");let _=(0,r.useRef)(f),I=(0,r.useRef)(v);(0,r.useEffect)(()=>{_.current=f,I.current=v},[f,v]);let T=function(){let e=function(){let e=(0,r.useRef)(!0),t=(0,r.useRef)(()=>e.current);return(0,r.useEffect)(()=>(e.current=!0,()=>{e.current=!1}),[]),t.current}(),t=(0,r.useRef)();return(0,s.A)(()=>clearTimeout(t.current)),(0,r.useMemo)(()=>{let n=()=>clearTimeout(t.current);return{set:function(r,a=0){e()&&(n(),a<=o?t.current=setTimeout(r,a):function e(t,n,r){let a=r-Date.now();t.current=a<=o?setTimeout(n,a):setTimeout(()=>e(t,n,r),o)}(t,r,Date.now()+a))},clear:n,handleRef:t}},[])}(),w=!!(x&&i),k=(0,r.useCallback)(()=>{w&&(null==I.current||I.current())},[w]);(0,r.useEffect)(()=>{T.set(k,_.current)},[T,k]);let R=(0,r.useMemo)(()=>({onClose:v}),[v]),U=!!(c&&d),E=(0,u.jsx)("div",{...S,ref:t,className:l()(n,a,N&&"bg-".concat(N),!U&&(i?"show":"hide")),role:"alert","aria-live":"assertive","aria-atomic":"true"});return(0,u.jsx)(h.Provider,{value:R,children:U&&c?(0,u.jsx)(c,{in:i,onEnter:b,onEntering:C,onEntered:g,onExit:y,onExiting:j,onExited:A,unmountOnExit:!0,children:E}):E})});y.displayName="Toast";let j=Object.assign(y,{Body:g,Header:v})},1757:(e,t,n)=>{"use strict";n.d(t,{A:()=>u});var r=n(4617),a=n.n(r),l=n(2115),s=n(1653),o=n(5155);let c={"top-start":"top-0 start-0","top-center":"top-0 start-50 translate-middle-x","top-end":"top-0 end-0","middle-start":"top-50 start-0 translate-middle-y","middle-center":"top-50 start-50 translate-middle","middle-end":"top-50 end-0 translate-middle-y","bottom-start":"bottom-0 start-0","bottom-center":"bottom-0 start-50 translate-middle-x","bottom-end":"bottom-0 end-0"},i=l.forwardRef((e,t)=>{let{bsPrefix:n,position:r,containerPosition:l,className:i,as:u="div",...d}=e;return n=(0,s.oU)(n,"toast-container"),(0,o.jsx)(u,{ref:t,...d,className:a()(n,r&&c[r],l&&"position-".concat(l),i)})});i.displayName="ToastContainer";let u=i},4617:(e,t)=>{var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e="",t=0;t<arguments.length;t++){var n=arguments[t];n&&(e=l(e,function(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return a.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var n in e)r.call(e,n)&&e[n]&&(t=l(t,n));return t}(n)))}return e}function l(e,t){return t?e?e+" "+t:e+t:e}e.exports?(a.default=a,e.exports=a):void 0!==(n=(function(){return a}).apply(t,[]))&&(e.exports=n)}()}},e=>{var t=t=>e(e.s=t);e.O(0,[6306,8920,8441,1517,7358],()=>t(7861)),_N_E=e.O()}]);
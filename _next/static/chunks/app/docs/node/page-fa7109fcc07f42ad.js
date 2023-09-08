(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[23],{6356:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var a=n(2265),o=n(1823),s=n(8203);function r(){var e=(0,o.Z)(),t=(0,a.useRef)();return(0,s.Z)(function(){return clearTimeout(t.current)}),(0,a.useMemo)(function(){var n=function(){return clearTimeout(t.current)};return{set:function(a,o){void 0===o&&(o=0),e()&&(n(),o<=2147483647?t.current=setTimeout(a,o):function e(t,n,a){var o=a-Date.now();t.current=o<=2147483647?setTimeout(n,o):setTimeout(function(){return e(t,n,a)},2147483647)}(t,a,Date.now()+o))},clear:n}},[])}},2619:function(e,t,n){Promise.resolve().then(n.bind(n,1190))},4337:function(e,t,n){"use strict";let a;n.d(t,{f:function(){return o},r:function(){return s}});var o="";let s=e=>{""!==e?localStorage.setItem("api_url",e):localStorage.removeItem("api_url"),o=e};o=null!==(a=localStorage.getItem("api_url"))?a:""},6347:function(e,t,n){"use strict";n.d(t,{P:function(){return l},t:function(){return i}});var a=n(7437),o=n(2265),s=n(8215),r=n(9023);let l=(0,o.createContext)({Info:e=>{},Error:e=>{}}),i=e=>{let{children:t}=e,[n,i]=(0,o.useState)({value:{},index:0}),c=(e,t)=>{i(n=>(n.value[n.index]={text:e,type:t},n.index++,{...n}))};return(0,a.jsxs)(l.Provider,{value:{Info:e=>{console.log(e),c(e,"success")},Error:e=>{console.error(e),c(e,"danger")}},children:[(0,a.jsx)(r.Z,{className:"p-3",position:"top-center",containerPosition:"fixed",style:{zIndex:1},children:Object.entries(n.value).map(e=>{let[t,o]=e;return(0,a.jsxs)(s.Z,{role:"alert","aria-live":"assertive",show:!0,bg:o.type,onClose:()=>{let e=n.value;delete e[t],i({...n,value:e}),console.log("close: "+t)},"aria-atomic":"true",delay:4e3,autohide:!0,animation:!0,children:[(0,a.jsxs)(s.Z.Header,{children:[(0,a.jsx)("strong",{className:"me-auto",children:"Notification"}),(0,a.jsx)("small",{className:"text-muted",children:"just now"})]}),(0,a.jsx)(s.Z.Body,{className:"text-center",children:o.text})]},"toast"+t)})}),t]})}},1190:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return v}});var a=n(7437),o=n(2265),s=n(4297),r=n(733),l=n(3518),i=n(5503),c=n(3508),u=n(4337),d=n(6347);function v(){let[e,t]=(0,o.useState)({value:["simple"]}),[n,v]=(0,o.useState)({value:"simple"}),[m,f]=(0,o.useState)({value:""}),x=(0,o.useContext)(d.P);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l.Z,{className:"mb-3",children:(0,a.jsxs)(i.Z,{variant:"flush",children:[(0,a.jsx)(i.Z.Item,{children:(0,a.jsxs)(c.Z,{children:[(0,a.jsxs)(r.Z.Select,{value:n.value,onChange:e=>v({value:e.target.value}),children:[(0,a.jsx)("option",{value:"simple",children:"simple"}),(0,a.jsx)("option",{value:"direct",children:"direct"}),(0,a.jsx)("option",{value:"none",children:"none"}),(0,a.jsx)("option",{value:"websocket",children:"websocket"}),(0,a.jsx)("option",{value:"quic",children:"quic"}),(0,a.jsx)("option",{value:"shadowsocks",children:"shadowsocks"}),(0,a.jsx)("option",{value:"obfshttp",children:"obfshttp"}),(0,a.jsx)("option",{value:"shadowsocksr",children:"shadowsocksr"}),(0,a.jsx)("option",{value:"vmess",children:"vmess"}),(0,a.jsx)("option",{value:"trojan",children:"trojan"}),(0,a.jsx)("option",{value:"socks5",children:"socks5"}),(0,a.jsx)("option",{value:"http",children:"http"})]}),(0,a.jsx)(s.Z,{variant:"outline-secondary",onClick:()=>{let a=e.value;a.push(n.value),t({value:a})},children:"Add"}),(0,a.jsx)(s.Z,{variant:"outline-secondary",onClick:async()=>{let t=await fetch("".concat(u.f,"/node?page=generate_template&protocols=").concat(encodeURIComponent(JSON.stringify(e.value))),{method:"GET"});if(t.ok)console.log("get successful"),f({value:await t.text()});else{let e=await t.text();x.Error("Generate template failed. ".concat(e)),console.log(e)}},children:"Generate"})]})}),e.value.map((n,o)=>(0,a.jsx)(i.Z.Item,{children:(0,a.jsxs)("div",{className:"d-sm-flex",children:[(0,a.jsx)("div",{className:"endpoint-name flex-grow-1 notranslate",children:n}),(0,a.jsx)(s.Z,{variant:"outline-danger",className:"notranslate",onClick:()=>{let n=e.value;n.splice(o,1),t({value:n})},children:"Delete"})]})},o))]})}),(0,a.jsx)(l.Z,{className:"mb-3",children:(0,a.jsxs)(l.Z.Body,{children:[(0,a.jsx)(r.Z.Control,{as:"textarea",style:{height:"500px",fontFamily:"monospace"},className:"mb-3",value:m.value,onChange:e=>f({value:e.target.value})}),(0,a.jsx)(s.Z,{className:"outline-primary me-2",onClick:async()=>{let e=await fetch(u.f+"/node",{method:"POST",body:m.value});if(e.ok)x.Info("Add New Node Successful"),console.log("add successful");else{let t=await e.text();x.Error("Add New Node Failed. ".concat(t)),console.log(t)}},children:"Save"})]})})]})}},3508:function(e,t,n){"use strict";var a=n(4440),o=n.n(a),s=n(2265),r=n(499),l=n(6376),i=n(9062),c=n(7447),u=n(7437);let d=(0,r.Z)("input-group-text",{Component:"span"}),v=s.forwardRef((e,t)=>{let{bsPrefix:n,size:a,hasValidation:r,className:i,as:d="div",...v}=e;n=(0,l.vE)(n,"input-group");let m=(0,s.useMemo)(()=>({}),[]);return(0,u.jsx)(c.Z.Provider,{value:m,children:(0,u.jsx)(d,{ref:t,...v,className:o()(i,n,a&&"".concat(n,"-").concat(a),r&&"has-validation")})})});v.displayName="InputGroup",t.Z=Object.assign(v,{Text:d,Radio:e=>(0,u.jsx)(d,{children:(0,u.jsx)(i.Z,{type:"radio",...e})}),Checkbox:e=>(0,u.jsx)(d,{children:(0,u.jsx)(i.Z,{type:"checkbox",...e})})})},7447:function(e,t,n){"use strict";var a=n(2265);let o=a.createContext(null);o.displayName="InputGroupContext",t.Z=o},5503:function(e,t,n){"use strict";n.d(t,{Z:function(){return x}});var a=n(4440),o=n.n(a),s=n(2265);n(267);var r=n(4061),l=n(7194),i=n(6376),c=n(5113),u=n(1577),d=n(1066),v=n(7437);let m=s.forwardRef((e,t)=>{let{bsPrefix:n,active:a,disabled:s,eventKey:r,className:l,variant:m,action:f,as:x,...p}=e;n=(0,i.vE)(n,"list-group-item");let[h,j]=(0,u.v)({key:(0,d.h)(r,p.href),active:a,...p}),g=(0,c.Z)(e=>{if(s){e.preventDefault(),e.stopPropagation();return}h.onClick(e)});s&&void 0===p.tabIndex&&(p.tabIndex=-1,p["aria-disabled"]=!0);let Z=x||(f?p.href?"a":"button":"div");return(0,v.jsx)(Z,{ref:t,...p,...h,onClick:g,className:o()(l,n,j.isActive&&"active",s&&"disabled",m&&"".concat(n,"-").concat(m),f&&"".concat(n,"-action"))})});m.displayName="ListGroupItem";let f=s.forwardRef((e,t)=>{let n;let{className:a,bsPrefix:s,variant:c,horizontal:u,numbered:d,as:m="div",...f}=(0,r.Ch)(e,{activeKey:"onSelect"}),x=(0,i.vE)(s,"list-group");return u&&(n=!0===u?"horizontal":"horizontal-".concat(u)),(0,v.jsx)(l.Z,{ref:t,...f,as:m,className:o()(a,x,c&&"".concat(x,"-").concat(c),n&&"".concat(x,"-").concat(n),d&&"".concat(x,"-numbered"))})});f.displayName="ListGroup";var x=Object.assign(f,{Item:m})},8215:function(e,t,n){"use strict";n.d(t,{Z:function(){return g}});var a=n(2265),o=n(4440),s=n.n(o),r=n(6356),l=n(7496),i=n(985),c=n(7437);let u={[l.d0]:"showing",[l.Ix]:"showing show"},d=a.forwardRef((e,t)=>(0,c.jsx)(i.Z,{...e,ref:t,transitionClasses:u}));d.displayName="ToastFade";var v=n(5113),m=n(6376),f=n(6713);let x=a.createContext({onClose(){}}),p=a.forwardRef((e,t)=>{let{bsPrefix:n,closeLabel:o="Close",closeVariant:r,closeButton:l=!0,className:i,children:u,...d}=e;n=(0,m.vE)(n,"toast-header");let p=(0,a.useContext)(x),h=(0,v.Z)(e=>{null==p||null==p.onClose||p.onClose(e)});return(0,c.jsxs)("div",{ref:t,...d,className:s()(n,i),children:[u,l&&(0,c.jsx)(f.Z,{"aria-label":o,variant:r,onClick:h,"data-dismiss":"toast"})]})});p.displayName="ToastHeader";var h=(0,n(499).Z)("toast-body");let j=a.forwardRef((e,t)=>{let{bsPrefix:n,className:o,transition:l=d,show:i=!0,animation:u=!0,delay:v=5e3,autohide:f=!1,onClose:p,bg:h,...j}=e;n=(0,m.vE)(n,"toast");let g=(0,a.useRef)(v),Z=(0,a.useRef)(p);(0,a.useEffect)(()=>{g.current=v,Z.current=p},[v,p]);let b=(0,r.Z)(),N=!!(f&&i),w=(0,a.useCallback)(()=>{N&&(null==Z.current||Z.current())},[N]);(0,a.useEffect)(()=>{b.set(w,g.current)},[b,w]);let y=(0,a.useMemo)(()=>({onClose:p}),[p]),C=!!(l&&u),k=(0,c.jsx)("div",{...j,ref:t,className:s()(n,o,h&&"bg-".concat(h),!C&&(i?"show":"hide")),role:"alert","aria-live":"assertive","aria-atomic":"true"});return(0,c.jsx)(x.Provider,{value:y,children:C&&l?(0,c.jsx)(l,{in:i,unmountOnExit:!0,children:k}):k})});j.displayName="Toast";var g=Object.assign(j,{Body:h,Header:p})},9023:function(e,t,n){"use strict";var a=n(4440),o=n.n(a),s=n(2265),r=n(6376),l=n(7437);let i={"top-start":"top-0 start-0","top-center":"top-0 start-50 translate-middle-x","top-end":"top-0 end-0","middle-start":"top-50 start-0 translate-middle-y","middle-center":"top-50 start-50 translate-middle","middle-end":"top-50 end-0 translate-middle-y","bottom-start":"bottom-0 start-0","bottom-center":"bottom-0 start-50 translate-middle-x","bottom-end":"bottom-0 end-0"},c=s.forwardRef((e,t)=>{let{bsPrefix:n,position:a,containerPosition:s,className:c,as:u="div",...d}=e;return n=(0,r.vE)(n,"toast-container"),(0,l.jsx)(u,{ref:t,...d,className:o()(n,a&&i[a],s&&"position-".concat(s),c)})});c.displayName="ToastContainer",t.Z=c}},function(e){e.O(0,[701,331,521,971,596,744],function(){return e(e.s=2619)}),_N_E=e.O()}]);
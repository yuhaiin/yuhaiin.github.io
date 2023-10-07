(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[601],{8157:function(e,t,r){Promise.resolve().then(r.bind(r,281))},9124:function(e,t,r){"use strict";let a;r.d(t,{f:function(){return n},r:function(){return SetUrl}});var n="";let SetUrl=e=>{""!==e?localStorage.setItem("api_url",e):localStorage.removeItem("api_url"),n=e};n=null!==(a=localStorage.getItem("api_url"))?a:""},2159:function(e,t,r){"use strict";r.d(t,{P:function(){return o},t:function(){return GlobalToastProvider}});var a=r(7437),n=r(2265),s=r(5632),l=r(5140);let o=(0,n.createContext)({Info:e=>{},Error:e=>{}}),GlobalToastProvider=e=>{let{children:t}=e,[r,c]=(0,n.useState)({value:{},index:0}),msg=(e,t)=>{c(r=>(r.value[r.index]={text:e,type:t},r.index++,{...r}))};return(0,a.jsxs)(o.Provider,{value:{Info:e=>{console.log(e),msg(e,"success")},Error:e=>{console.error(e),msg(e,"danger")}},children:[(0,a.jsx)(l.Z,{className:"p-3",position:"top-center",containerPosition:"fixed",style:{zIndex:1},children:Object.entries(r.value).map(e=>{let[t,n]=e;return(0,a.jsxs)(s.Z,{role:"alert","aria-live":"assertive",show:!0,bg:n.type,onClose:()=>{let e=r.value;delete e[t],c({...r,value:e}),console.log("close: "+t)},"aria-atomic":"true",delay:4e3,autohide:!0,animation:!0,children:[(0,a.jsxs)(s.Z.Header,{children:[(0,a.jsx)("strong",{className:"me-auto",children:"Notification"}),(0,a.jsx)("small",{className:"text-muted",children:"just now"})]}),(0,a.jsx)(s.Z.Body,{className:"text-center",children:n.text})]},"toast"+t)})}),t]})}},281:function(e,t,r){"use strict";r.r(t);var a=r(7437),n=r(2265),s=r(2806),l=r(2154),o=r(7028),c=r(7017),i=r(2762),d=r(9124),u=r(2159);t.default=function(){let e=(0,n.useContext)(u.P),[t,r]=(0,n.useState)(d.f);return(0,a.jsx)(l.Z,{className:"mb-3",children:(0,a.jsx)(l.Z.Body,{children:(0,a.jsx)(c.Z.Group,{as:o.Z,className:"mb-3",children:(0,a.jsxs)(o.Z,{className:"g-2",children:[(0,a.jsx)(c.Z.Label,{column:!0,sm:1,class:"nowrap",children:"API url"}),(0,a.jsx)(i.Z,{sm:3,children:(0,a.jsx)(c.Z.Control,{value:t,onChange:e=>r(e.target.value)})}),(0,a.jsx)(i.Z,{sm:2,children:(0,a.jsx)(s.Z,{onClick:()=>{(0,d.r)(t),""!==t?e.Info("Set API Url: ".concat(t," success.")):e.Info("Remove API Url success.")},children:"Save"})})]})})})})}},2154:function(e,t,r){"use strict";r.d(t,{Z:function(){return b}});var a=r(4440),n=r.n(a),s=r(2265),l=r(1980),o=r(6552),c=r(898),i=r(7437);let d=s.forwardRef((e,t)=>{let{bsPrefix:r,className:a,variant:s,as:o="img",...c}=e,d=(0,l.vE)(r,"card-img");return(0,i.jsx)(o,{ref:t,className:n()(s?"".concat(d,"-").concat(s):d,a),...c})});d.displayName="CardImg";var u=r(2889);let m=(0,c.Z)("h5"),f=(0,c.Z)("h6"),v=(0,o.Z)("card-body"),x=(0,o.Z)("card-title",{Component:m}),h=(0,o.Z)("card-subtitle",{Component:f}),Z=(0,o.Z)("card-link",{Component:"a"}),j=(0,o.Z)("card-text",{Component:"p"}),p=(0,o.Z)("card-footer"),g=(0,o.Z)("card-img-overlay"),N=s.forwardRef((e,t)=>{let{bsPrefix:r,className:a,bg:s,text:o,border:c,body:d=!1,children:u,as:m="div",...f}=e,x=(0,l.vE)(r,"card");return(0,i.jsx)(m,{ref:t,...f,className:n()(a,x,s&&"bg-".concat(s),o&&"text-".concat(o),c&&"border-".concat(c)),children:d?(0,i.jsx)(v,{children:u}):u})});N.displayName="Card";var b=Object.assign(N,{Img:d,Title:x,Subtitle:h,Body:v,Link:Z,Text:j,Header:u.Z,Footer:p,ImgOverlay:g})},2889:function(e,t,r){"use strict";var a=r(4440),n=r.n(a),s=r(2265),l=r(1980),o=r(4068),c=r(7437);let i=s.forwardRef((e,t)=>{let{bsPrefix:r,className:a,as:i="div",...d}=e,u=(0,l.vE)(r,"card-header"),m=(0,s.useMemo)(()=>({cardHeaderBsPrefix:u}),[u]);return(0,c.jsx)(o.Z.Provider,{value:m,children:(0,c.jsx)(i,{ref:t,...d,className:n()(a,u)})})});i.displayName="CardHeader",t.Z=i},7028:function(e,t,r){"use strict";var a=r(4440),n=r.n(a),s=r(2265),l=r(1980),o=r(7437);let c=s.forwardRef((e,t)=>{let{bsPrefix:r,className:a,as:s="div",...c}=e,i=(0,l.vE)(r,"row"),d=(0,l.pi)(),u=(0,l.zG)(),m="".concat(i,"-cols"),f=[];return d.forEach(e=>{let t;let r=c[e];delete c[e],null!=r&&"object"==typeof r?{cols:t}=r:t=r;let a=e!==u?"-".concat(e):"";null!=t&&f.push("".concat(m).concat(a,"-").concat(t))}),(0,o.jsx)(s,{ref:t,...c,className:n()(a,i,...f)})});c.displayName="Row",t.Z=c},898:function(e,t,r){"use strict";var a=r(2265),n=r(4440),s=r.n(n),l=r(7437);t.Z=e=>a.forwardRef((t,r)=>(0,l.jsx)("div",{...t,ref:r,className:s()(t.className,e)}))}},function(e){e.O(0,[708,790,971,864,744],function(){return e(e.s=8157)}),_N_E=e.O()}]);
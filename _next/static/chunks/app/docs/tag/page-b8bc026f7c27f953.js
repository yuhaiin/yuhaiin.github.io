(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[966],{5120:function(e,t,n){Promise.resolve().then(n.bind(n,9566))},6491:function(e,t,n){"use strict";var a=n(7437),s=n(477),r=n(2283),o=n.n(r);t.Z=function(e){return(0,a.jsxs)("div",{className:"z-1090 d-flex flex-column justify-content-center align-items-center",style:{height:"100px"},children:[void 0!==e.children&&(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(o(),{className:"p2",statusCode:void 0!==e.code?e.code:500,title:e.children})}),(0,a.jsx)("div",{className:"p2",children:(0,a.jsx)(s.Z,{})})]})}},6756:function(e,t,n){"use strict";n.d(t,{P:function(){return i},t:function(){return l}});var a=n(7437),s=n(2265),r=n(4349),o=n(4051);let i=(0,s.createContext)({Info:e=>{},Error:e=>{}}),l=e=>{let{children:t}=e,[n,l]=(0,s.useState)({value:{},index:0}),c=(e,t)=>{l(n=>(n.value[n.index]={text:e,type:t},n.index++,{...n}))};return(0,a.jsxs)(i.Provider,{value:{Info:e=>{console.log(e),c(e,"success")},Error:e=>{console.error(e),c(e,"danger")}},children:[(0,a.jsx)(r.Z,{className:"p-3",position:"top-center",containerPosition:"fixed",style:{zIndex:1},children:Object.entries(n.value).map(e=>{let[t,s]=e;return(0,a.jsxs)(o.Z,{role:"alert","aria-live":"assertive",show:!0,bg:s.type,onClose:()=>{let e=n.value;delete e[t],l({...n,value:e}),console.log("close: "+t)},"aria-atomic":"true",delay:4e3,autohide:!0,animation:!0,children:[(0,a.jsxs)(o.Z.Header,{children:[(0,a.jsx)("strong",{className:"me-auto",children:"Notification"}),(0,a.jsx)("small",{className:"text-muted",children:"just now"})]}),(0,a.jsx)(o.Z.Body,{className:"text-center",children:s.text})]},"toast"+t)})}),t]})}},5952:function(e,t,n){"use strict";var a=n(7437),s=n(2265),r=n(6879),o=n(1355),i=n(9317),l=n(5097),c=n(1252),d=n(8224),u=n(6491),h=n(2283),x=n.n(h),v=n(6756),g=n(2520);let m=g.lk.protobuf.StringValue,f=g.yE.point.point;t.Z=function(e){let t=(0,s.useContext)(v.P),{data:n,error:h,isLoading:g,mutate:p}=(0,c.ZP)(!e.point&&e.hash?"/node":null,(0,d.Sh)(f,"POST",m.encode({value:e.hash}).finish())),[j,y]=(0,s.useState)({msg:"",code:0});return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(o.Z,{show:e.show,"aria-labelledby":"contained-modal-title-vcenter",size:"xl",onHide:()=>{e.onHide()},centered:!0,children:[(0,a.jsx)(o.Z.Header,{closeButton:!0,children:(0,a.jsx)(o.Z.Title,{id:"contained-modal-title-vcenter",children:e.hash})}),(0,a.jsx)(o.Z.Body,{children:h?(0,a.jsx)(x(),{statusCode:h.code,title:h.msg}):g?(0,a.jsx)(u.Z,{}):(0,a.jsx)(i.Z.Control,{as:"textarea",value:null!=n?n:e.point,style:{height:"65vh",fontFamily:"monospace"},readOnly:!e.editable,onChange:t=>{e.hash&&p(t.target.value,!1),e.point&&e.onChangePoint&&e.onChangePoint(t.target.value)}})}),(0,a.jsxs)(o.Z.Footer,{children:[j.msg&&(0,a.jsxs)(l.Z,{bg:"danger",children:[j.code," | ",j.msg]}),(0,a.jsx)(r.Z,{variant:"secondary",onClick:()=>{e.onHide()},children:"Close"}),(0,a.jsx)(()=>e.editable?(0,a.jsx)(r.Z,{variant:"primary",active:!g&&!h,onClick:()=>{var a;(0,d.Uo)("/node",{method:"PATCH",body:f.encode(f.fromObject(JSON.parse(null!==(a=null!=n?n:e.point)&&void 0!==a?a:"{}"))).finish()}).then(async n=>{let{error:a}=n;if(void 0===a)t.Info("save successful"),void 0!==e.onSave&&e.onSave(),e.onHide();else{let e=await a.msg;t.Error(e),y({msg:e,code:a.code}),setTimeout(()=>{y({msg:"",code:0})},5e3)}})},children:"Save"}):(0,a.jsx)(a.Fragment,{}),{})]})]})})}},9566:function(e,t,n){"use strict";n.r(t);var a=n(7437),s=n(2265),r=n(2389),o=n(5097),i=n(8168),l=n(9252),c=n(9317),d=n(8647),u=n(6879),h=n(6491),x=n(1252),v=n(8224),g=n(2283),m=n.n(g),f=n(5952),p=n(6756),j=n(2520);let y=j.lk.protobuf.StringValue,Z=j.yE.node.manager,b=j.yE.tag.tag_type;j.yE.tag.tags;let C=j.yE.protos.node.service.save_tag_req;t.default=function(){var e;let t=(0,s.useContext)(p.P),[n,g]=(0,s.useState)(""),[N,E]=(0,s.useState)(new j.yE.protos.node.service.save_tag_req({tag:"",hash:"",type:b.node})),{data:w,error:_,isLoading:k,mutate:S}=(0,x.ZP)("/nodes",(0,v.PJ)(Z)),[P,O]=(0,s.useState)({hash:""});if(void 0!==_)return(0,a.jsx)(m(),{statusCode:_.code,title:_.msg});if(k||void 0==w)return(0,a.jsx)(h.Z,{});let T=(e,n)=>(0,a.jsx)(r.Z.Item,{style:{border:"0ch",borderBottom:"1px solid #dee2e6"},children:(0,a.jsxs)("div",{className:"d-flex flex-wrap",children:[(0,a.jsx)("a",{className:"text-decoration-none",href:"#empty",onClick:t=>{t.preventDefault(),E(t=>new j.yE.protos.node.service.save_tag_req({...t,tag:e}))},children:e}),(0,a.jsx)(o.Z,{className:"rounded-pill bg-light text-dark text-truncate ms-1",children:0===n.hash.length||""===n.hash[0]?(0,a.jsxs)(a.Fragment,{children:["Fallback ",(0,a.jsx)("i",{className:"bi bi-heart-arrow"})," Global"]}):n.type===b.mirror?(0,a.jsxs)(a.Fragment,{children:["Mirror ",(0,a.jsx)("i",{className:"bi bi-arrow-right"})," ",n.hash]}):(0,a.jsxs)(a.Fragment,{children:["Target ",(0,a.jsx)("i",{className:"bi bi-arrow-right"}),(0,a.jsx)("a",{className:"text-truncate",href:"#",onClick:e=>{e.preventDefault(),O({hash:n.hash[0]})},children:n.hash})]})}),(0,a.jsxs)("a",{className:"text-decoration-none ms-auto text-truncate",href:"#empty",onClick:n=>{n.preventDefault(),(0,v.Uo)("/tag",{method:"DELETE",body:y.encode({value:e}).finish()}).then(async n=>{let{error:a}=n;void 0!==a?t.Error("delete tag ".concat(e," failed, ").concat(a.code,"| ").concat(await a.msg)):(t.Info("delete tag ".concat(e," success")),await S())})},children:[(0,a.jsx)("i",{className:"bi-trash"}),"DELETE"]})]})},e);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(f.Z,{show:""!==P.hash,hash:P.hash,onHide:()=>O({hash:""})}),(0,a.jsx)(i.Z,{className:"mb-3",children:(0,a.jsx)(r.Z,{variant:"flush",children:Object.entries(w.tags).sort((e,t)=>e<=t?-1:1).map(e=>{let[t,n]=e;return T(t,new j.yE.tag.tags(n))})})}),(0,a.jsx)(i.Z,{className:"mb-3",children:(0,a.jsxs)(i.Z.Body,{children:[(0,a.jsxs)(l.Z,{className:"mb-3",children:[(0,a.jsx)(c.Z.Check,{inline:!0,type:"radio",onChange:()=>{E(e=>new j.yE.protos.node.service.save_tag_req({...e,type:b.node,hash:""}))},checked:N.type===b.node,label:"Node"}),(0,a.jsx)(c.Z.Check,{inline:!0,type:"radio",onChange:()=>{E(e=>new j.yE.protos.node.service.save_tag_req({...e,type:b.mirror,hash:""}))},checked:N.type===b.mirror,label:"Mirror"})]}),(0,a.jsx)(d.Z,{label:"Tag",className:"mb-2",children:(0,a.jsx)(c.Z.Control,{placeholder:"Tag","aria-label":"Tag","aria-describedby":"basic-addon1",value:N.tag,onChange:e=>{E(t=>new j.yE.protos.node.service.save_tag_req({...t,tag:e.target.value}))}})}),N.type===b.node?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(d.Z,{label:"Group",className:"mb-2",children:(0,a.jsxs)(c.Z.Select,{defaultValue:"",onChange:e=>g(e.target.value),children:[(0,a.jsx)("option",{children:"Choose..."}),Object.keys(w.groupsV2).sort((e,t)=>e<=t?-1:1).map(e=>(0,a.jsx)("option",{value:e,children:e},e))]})}),(0,a.jsx)(d.Z,{label:"Node",className:"mb-2",children:(0,a.jsxs)(c.Z.Select,{defaultValue:"",onChange:e=>{E(t=>new j.yE.protos.node.service.save_tag_req({...t,hash:e.target.value}))},children:[(0,a.jsx)("option",{value:"",children:"Choose..."}),Object.entries((0,v.Sv)(null===(e=w.groupsV2[n])||void 0===e?void 0:e.nodesV2)).sort((e,t)=>e<=t?-1:1).map(e=>{let[t,n]=e;return(0,a.jsx)("option",{value:n,children:t},t)})]})})]}):(0,a.jsx)(d.Z,{label:"Mirror",className:"mb-2",children:(0,a.jsxs)(c.Z.Select,{defaultValue:"",onChange:e=>{E(t=>new j.yE.protos.node.service.save_tag_req({...t,hash:e.target.value}))},children:[(0,a.jsx)("option",{value:"",children:"Choose..."}),Object.keys(w.tags).sort((e,t)=>e<=t?-1:1).map(e=>(0,a.jsx)("option",{value:e,children:e},e))]})}),(0,a.jsx)(u.Z,{variant:"outline-primary",onClick:()=>{""!==N.tag&&""!==N.hash&&(0,v.Uo)("/tag",{body:C.encode(N).finish()}).then(async e=>{let{error:n}=e;void 0!==n?t.Error("save tag ".concat(N.tag," failed, ").concat(n.code,"| ").concat(await n.msg)):(t.Info("Set tag ".concat(N.tag," to ").concat(N.hash," successful")),await S())})},children:"Save"})]})})]})}},3756:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var a=n(2265);function s(){return(0,a.useState)(null)}},3106:function(e,t,n){"use strict";var a=n(2265);let s=void 0!==n.g&&n.g.navigator&&"ReactNative"===n.g.navigator.product;t.Z="undefined"!=typeof document||s?a.useLayoutEffect:a.useEffect},7531:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var a=n(2265);function s(e){let t=(0,a.useRef)(null);return(0,a.useEffect)(()=>{t.current=e}),t.current}},7848:function(e,t,n){"use strict";var a=n(9476),s=n(1564),r=n(2265);t.Z=function({children:e,in:t,onExited:n,mountOnEnter:o,unmountOnExit:i}){let l=(0,r.useRef)(null),c=(0,r.useRef)(t),d=(0,a.Z)(n);(0,r.useEffect)(()=>{t?c.current=!0:d(l.current)},[t,d]);let u=(0,s.Z)(l,e.ref),h=(0,r.cloneElement)(e,{ref:u});return t?h:i||!c.current&&o?null:h}},5324:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var a=n(2265),s=n(7550);let r=(0,a.createContext)(s.Z?window:void 0);function o(){return(0,a.useContext)(r)}r.Provider},4343:function(e,t,n){"use strict";function a(e,t){return e.contains?e.contains(t):e.compareDocumentPosition?e===t||!!(16&e.compareDocumentPosition(t)):void 0}n.d(t,{Z:function(){return a}})},9252:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var a=n(710),s=n.n(a),r=n(2265),o=n(2865),i=n(6183),l=n(1805),c=n(7437);let d=r.forwardRef((e,t)=>{let{className:n,bsPrefix:a,as:r="span",...i}=e;return a=(0,o.vE)(a,"input-group-text"),(0,c.jsx)(r,{ref:t,className:s()(n,a),...i})});d.displayName="InputGroupText";let u=r.forwardRef((e,t)=>{let{bsPrefix:n,size:a,hasValidation:i,className:d,as:u="div",...h}=e;n=(0,o.vE)(n,"input-group");let x=(0,r.useMemo)(()=>({}),[]);return(0,c.jsx)(l.Z.Provider,{value:x,children:(0,c.jsx)(u,{ref:t,...h,className:s()(d,n,a&&"".concat(n,"-").concat(a),i&&"has-validation")})})});u.displayName="InputGroup";var h=Object.assign(u,{Text:d,Radio:e=>(0,c.jsx)(d,{children:(0,c.jsx)(i.Z,{type:"radio",...e})}),Checkbox:e=>(0,c.jsx)(d,{children:(0,c.jsx)(i.Z,{type:"checkbox",...e})})})},1805:function(e,t,n){"use strict";let a=n(2265).createContext(null);a.displayName="InputGroupContext",t.Z=a}},function(e){e.O(0,[644,149,300,634,713,902,289,971,69,744],function(){return e(e.s=5120)}),_N_E=e.O()}]);
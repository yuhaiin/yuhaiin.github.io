(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[966],{5120:function(e,t,a){Promise.resolve().then(a.bind(a,7370))},9621:function(e,t,a){"use strict";var s=a(7437),n=a(7877),o=a(1375),r=a.n(o);t.Z=function(e){return(0,s.jsxs)("div",{className:"z-1090 d-flex flex-column justify-content-center align-items-center",style:{height:"100px"},children:[void 0!==e.children&&(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(r(),{className:"p2",statusCode:void 0!==e.code?e.code:500,title:e.children})}),(0,s.jsx)("div",{className:"p2",children:(0,s.jsx)(n.Z,{})})]})}},2159:function(e,t,a){"use strict";a.d(t,{P:function(){return l},t:function(){return GlobalToastProvider}});var s=a(7437),n=a(2265),o=a(5632),r=a(5140);let l=(0,n.createContext)({Info:e=>{},Error:e=>{}}),GlobalToastProvider=e=>{let{children:t}=e,[a,i]=(0,n.useState)({value:{},index:0}),msg=(e,t)=>{i(a=>(a.value[a.index]={text:e,type:t},a.index++,{...a}))};return(0,s.jsxs)(l.Provider,{value:{Info:e=>{console.log(e),msg(e,"success")},Error:e=>{console.error(e),msg(e,"danger")}},children:[(0,s.jsx)(r.Z,{className:"p-3",position:"top-center",containerPosition:"fixed",style:{zIndex:1},children:Object.entries(a.value).map(e=>{let[t,n]=e;return(0,s.jsxs)(o.Z,{role:"alert","aria-live":"assertive",show:!0,bg:n.type,onClose:()=>{let e=a.value;delete e[t],i({...a,value:e}),console.log("close: "+t)},"aria-atomic":"true",delay:4e3,autohide:!0,animation:!0,children:[(0,s.jsxs)(o.Z.Header,{children:[(0,s.jsx)("strong",{className:"me-auto",children:"Notification"}),(0,s.jsx)("small",{className:"text-muted",children:"just now"})]}),(0,s.jsx)(o.Z.Body,{className:"text-center",children:n.text})]},"toast"+t)})}),t]})}},9542:function(e,t,a){"use strict";var s=a(7437),n=a(2265),o=a(2806),r=a(1335),l=a(7017),i=a(1944),c=a(713),d=a(9226),h=a(9621),u=a(1375),x=a.n(u),g=a(2159),m=a(116);let v=m.lk.protobuf.StringValue,j=m.yE.point.point;t.Z=function(e){let t=(0,n.useContext)(g.P),{data:a,error:u,isLoading:m,mutate:p}=(0,c.ZP)(!e.point&&e.hash?"/node":null,(0,d.Sh)(j,"POST",v.encode({value:e.hash}).finish())),[f,y]=(0,n.useState)({msg:"",code:0});return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(r.Z,{show:e.show,"aria-labelledby":"contained-modal-title-vcenter",size:"xl",onHide:()=>{e.onHide()},centered:!0,children:[(0,s.jsx)(r.Z.Header,{closeButton:!0,children:(0,s.jsx)(r.Z.Title,{id:"contained-modal-title-vcenter",children:e.hash})}),(0,s.jsx)(r.Z.Body,{children:u?(0,s.jsx)(x(),{statusCode:u.code,title:u.msg}):m?(0,s.jsx)(h.Z,{}):(0,s.jsx)(l.Z.Control,{as:"textarea",value:null!=a?a:e.point,style:{height:"65vh",fontFamily:"monospace"},readOnly:!e.editable,onChange:t=>{e.hash&&p(t.target.value,!1),e.point&&e.onChangePoint&&e.onChangePoint(t.target.value)}})}),(0,s.jsxs)(r.Z.Footer,{children:[f.msg&&(0,s.jsxs)(i.Z,{bg:"danger",children:[f.code," | ",f.msg]}),(0,s.jsx)(o.Z,{variant:"secondary",onClick:()=>{e.onHide()},children:"Close"}),(0,s.jsx)(()=>e.editable?(0,s.jsx)(o.Z,{variant:"primary",active:!m&&!u,onClick:()=>{var s;(0,d.Uo)("/node",{method:"PATCH",body:j.encode(j.fromObject(JSON.parse(null!==(s=null!=a?a:e.point)&&void 0!==s?s:"{}"))).finish()}).then(async a=>{let{error:s}=a;if(void 0===s)t.Info("save successful"),void 0!==e.onSave&&e.onSave(),e.onHide();else{let e=await s.msg;t.Error(e),y({msg:e,code:s.code}),setTimeout(()=>{y({msg:"",code:0})},5e3)}})},children:"Save"}):(0,s.jsx)(s.Fragment,{}),{})]})]})})}},7370:function(e,t,a){"use strict";a.r(t);var s=a(7437),n=a(2265),o=a(1944),r=a(2806),l=a(2154),i=a(9781),c=a(7017),d=a(1567),h=a(8649),u=a(9621),x=a(713),g=a(9226),m=a(1375),v=a.n(m),j=a(9542),p=a(2159),f=a(116);let y=f.lk.protobuf.StringValue,b=f.yE.node.manager,Z=f.yE.tag.tag_type;f.yE.tag.tags;let C=f.yE.protos.node.service.save_tag_req;t.default=function(){var e;let t=(0,n.useContext)(p.P),[a,m]=(0,n.useState)(""),[N,E]=(0,n.useState)(new f.yE.protos.node.service.save_tag_req({tag:"",hash:"",type:Z.node})),{data:w,error:_,isLoading:k,mutate:S}=(0,x.ZP)("/nodes",(0,g.PJ)(b)),[P,T]=(0,n.useState)({hash:""});if(void 0!==_)return(0,s.jsx)(v(),{statusCode:_.code,title:_.msg});if(k||void 0==w)return(0,s.jsx)(u.Z,{});let TagItem=(e,a)=>(0,s.jsx)(h.Z.Item,{style:{border:"0ch",borderBottom:"1px solid #dee2e6"},children:(0,s.jsxs)("div",{className:"d-flex flex-wrap",children:[(0,s.jsx)("a",{className:"text-decoration-none",href:"#empty",onClick:t=>{t.preventDefault(),E(t=>new f.yE.protos.node.service.save_tag_req({...t,tag:e}))},children:e}),(0,s.jsx)(o.Z,{className:"rounded-pill bg-light text-dark text-truncate ms-1",children:0===a.hash.length||""===a.hash[0]?(0,s.jsxs)(s.Fragment,{children:["Fallback ",(0,s.jsx)("i",{className:"bi bi-heart-arrow"})," Global"]}):a.type===Z.mirror?(0,s.jsxs)(s.Fragment,{children:["Mirror ",(0,s.jsx)("i",{className:"bi bi-arrow-right"})," ",a.hash]}):(0,s.jsxs)(s.Fragment,{children:["Target ",(0,s.jsx)("i",{className:"bi bi-arrow-right"}),(0,s.jsx)("a",{className:"text-truncate",href:"#",onClick:e=>{e.preventDefault(),T({hash:a.hash[0]})},children:a.hash})]})}),(0,s.jsxs)("a",{className:"text-decoration-none ms-auto text-truncate",href:"#empty",onClick:a=>{a.preventDefault(),(0,g.Uo)("/tag",{method:"DELETE",body:y.encode({value:e}).finish()}).then(async a=>{let{error:s}=a;void 0!==s?t.Error("delete tag ".concat(e," failed, ").concat(s.code,"| ").concat(await s.msg)):(t.Info("delete tag ".concat(e," success")),await S())})},children:[(0,s.jsx)("i",{className:"bi-trash"}),"DELETE"]})]})},e);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(j.Z,{show:""!==P.hash,hash:P.hash,onHide:()=>T({hash:""})}),(0,s.jsx)(l.Z,{className:"mb-3",children:(0,s.jsx)(h.Z,{variant:"flush",children:Object.entries(w.tags).sort((e,t)=>e<=t?-1:1).map(e=>{let[t,a]=e;return TagItem(t,new f.yE.tag.tags(a))})})}),(0,s.jsx)(l.Z,{className:"mb-3",children:(0,s.jsxs)(l.Z.Body,{children:[(0,s.jsxs)(d.Z,{className:"mb-3",children:[(0,s.jsx)(c.Z.Check,{inline:!0,type:"radio",onChange:()=>{E(e=>new f.yE.protos.node.service.save_tag_req({...e,type:Z.node,hash:""}))},checked:N.type===Z.node,label:"Node"}),(0,s.jsx)(c.Z.Check,{inline:!0,type:"radio",onChange:()=>{E(e=>new f.yE.protos.node.service.save_tag_req({...e,type:Z.mirror,hash:""}))},checked:N.type===Z.mirror,label:"Mirror"})]}),(0,s.jsx)(i.Z,{label:"Tag",className:"mb-2",children:(0,s.jsx)(c.Z.Control,{placeholder:"Tag","aria-label":"Tag","aria-describedby":"basic-addon1",value:N.tag,onChange:e=>{E(t=>new f.yE.protos.node.service.save_tag_req({...t,tag:e.target.value}))}})}),N.type===Z.node?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.Z,{label:"Group",className:"mb-2",children:(0,s.jsxs)(c.Z.Select,{defaultValue:"",onChange:e=>m(e.target.value),children:[(0,s.jsx)("option",{children:"Choose..."}),Object.keys(w.groupsV2).sort((e,t)=>e<=t?-1:1).map(e=>(0,s.jsx)("option",{value:e,children:e},e))]})}),(0,s.jsx)(i.Z,{label:"Node",className:"mb-2",children:(0,s.jsxs)(c.Z.Select,{defaultValue:"",onChange:e=>{E(t=>new f.yE.protos.node.service.save_tag_req({...t,hash:e.target.value}))},children:[(0,s.jsx)("option",{value:"",children:"Choose..."}),Object.entries((0,g.Sv)(null===(e=w.groupsV2[a])||void 0===e?void 0:e.nodesV2)).sort((e,t)=>e<=t?-1:1).map(e=>{let[t,a]=e;return(0,s.jsx)("option",{value:a,children:t},t)})]})})]}):(0,s.jsx)(i.Z,{label:"Mirror",className:"mb-2",children:(0,s.jsxs)(c.Z.Select,{defaultValue:"",onChange:e=>{E(t=>new f.yE.protos.node.service.save_tag_req({...t,hash:e.target.value}))},children:[(0,s.jsx)("option",{value:"",children:"Choose..."}),Object.keys(w.tags).sort((e,t)=>e<=t?-1:1).map(e=>(0,s.jsx)("option",{value:e,children:e},e))]})}),(0,s.jsx)(r.Z,{variant:"outline-primary",onClick:()=>{""!==N.tag&&""!==N.hash&&(0,g.Uo)("/tag",{body:C.encode(N).finish()}).then(async e=>{let{error:a}=e;void 0!==a?t.Error("save tag ".concat(N.tag," failed, ").concat(a.code,"| ").concat(await a.msg)):(t.Info("Set tag ".concat(N.tag," to ").concat(N.hash," successful")),await S())})},children:"Save"})]})})]})}},1567:function(e,t,a){"use strict";var s=a(4440),n=a.n(s),o=a(2265),r=a(6552),l=a(1980),i=a(2811),c=a(1704),d=a(7437);let h=(0,r.Z)("input-group-text",{Component:"span"}),u=o.forwardRef((e,t)=>{let{bsPrefix:a,size:s,hasValidation:r,className:i,as:h="div",...u}=e;a=(0,l.vE)(a,"input-group");let x=(0,o.useMemo)(()=>({}),[]);return(0,d.jsx)(c.Z.Provider,{value:x,children:(0,d.jsx)(h,{ref:t,...u,className:n()(i,a,s&&"".concat(a,"-").concat(s),r&&"has-validation")})})});u.displayName="InputGroup",t.Z=Object.assign(u,{Text:h,Radio:e=>(0,d.jsx)(h,{children:(0,d.jsx)(i.Z,{type:"radio",...e})}),Checkbox:e=>(0,d.jsx)(h,{children:(0,d.jsx)(i.Z,{type:"checkbox",...e})})})},1704:function(e,t,a){"use strict";var s=a(2265);let n=s.createContext(null);n.displayName="InputGroupContext",t.Z=n}},function(e){e.O(0,[708,507,331,790,711,832,258,971,864,744],function(){return e(e.s=5120)}),_N_E=e.O()}]);
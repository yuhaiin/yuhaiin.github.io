(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[966],{5294:function(e,a,t){Promise.resolve().then(t.bind(t,1813))},1813:function(e,a,t){"use strict";t.r(a);var s=t(7437),n=t(2265),o=t(4694),r=t(2098),l=t(2808),i=t(7185),h=t(9882),d=t(3181),c=t(844),g=t(5374),u=t(7420),m=t(716),x=t(1617),j=t(879),v=t(6264),p=t.n(v),f=t(7833),b=t(1159),w=t(3056),C=t(5077),y=t(256),Z=t(8537),N=t(6878),k=t(3168);let F=e=>(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(h.Z,{show:e.show,onHide:()=>{e.onHide()},children:[(0,s.jsx)(h.Z.Header,{closeButton:!0,children:e.tag.tag}),(0,s.jsxs)(h.Z.Body,{children:[(0,s.jsxs)(d.Z,{className:"mb-3 d-flex",children:[(0,s.jsx)(c.Z,{id:"toggle-node",type:"radio",variant:"outline-primary",value:C.fY.node,onChange:()=>{e.tag.type=C.fY.node,e.onChangeTag(e.tag)},checked:e.tag.type===C.fY.node,children:"Node"}),(0,s.jsx)(c.Z,{id:"toggle-mirror",type:"radio",variant:"outline-primary",value:C.fY.mirror,onChange:()=>{e.tag.type=C.fY.mirror,e.onChangeTag(e.tag)},checked:e.tag.type===C.fY.mirror,children:"Mirror"})]}),e.new&&(0,s.jsx)(g.Z,{label:"Tag",className:"mb-2",children:(0,s.jsx)(u.Z.Control,{placeholder:"Tag","aria-label":"Tag","aria-describedby":"basic-addon1",value:e.tag.tag,onChange:a=>{e.tag.tag=a.target.value,e.onChangeTag(e.tag)}})}),e.tag.type==C.fY.mirror?(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(E,{data:e.data,value:e.tag.hash,onChangeMirror:a=>{e.tag.hash=a,e.onChangeTag(e.tag)}})}):(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(T,{data:e.data,hash:e.tag.hash,onChangeNode:a=>{e.tag.hash=a,e.onChangeTag(e.tag)}})})]}),(0,s.jsxs)(h.Z.Footer,{children:[(0,s.jsx)(l.Z,{variant:"outline-secondary",onClick:()=>{e.onHide()},children:"Close"}),(0,s.jsx)(l.Z,{variant:"outline-primary",onClick:()=>{e.onSave()},children:"Save"})]})]})}),T=e=>{var a,t,o,r;let[l,i]=(0,n.useState)({data:null!==(o=null===(a=e.data.nodes[e.hash])||void 0===a?void 0:a.group)&&void 0!==o?o:""});return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(g.Z,{label:"Group",className:"mb-2",children:(0,s.jsxs)(u.Z.Select,{defaultValue:l.data,onChange:e=>i({data:e.target.value}),children:[(0,s.jsx)("option",{children:"Choose..."}),Object.keys(e.data.groupsV2).sort((e,a)=>e<=a?-1:1).map(e=>(0,s.jsx)("option",{value:e,children:e},e))]})}),(0,s.jsx)(g.Z,{label:"Node",className:"mb-2",children:(0,s.jsxs)(u.Z.Select,{defaultValue:e.hash,onChange:a=>{e.onChangeNode(a.target.value)},children:[(0,s.jsx)("option",{value:"",children:"Choose..."}),Object.entries(null!==(r=null===(t=e.data.groupsV2[l.data])||void 0===t?void 0:t.nodesV2)&&void 0!==r?r:{}).sort((e,a)=>e<=a?-1:1).map(e=>{let[a,t]=e;return(0,s.jsx)("option",{value:t,children:a},a)})]})})]})},E=e=>(0,s.jsx)(g.Z,{label:"Mirror",className:"mb-2",children:(0,s.jsxs)(u.Z.Select,{defaultValue:e.value,onChange:a=>{e.onChangeMirror(a.target.value)},children:[(0,s.jsx)("option",{value:"",children:"Choose..."}),Object.keys(e.data.tags).sort((e,a)=>e<=a?-1:1).map(e=>(0,s.jsx)("option",{value:e,children:e},e))]})});a.default=function(){let e=(0,n.useContext)(b.P),{data:a,error:t,isLoading:h,mutate:d}=(0,x.ZP)("/nodes",(0,j.D)(y.Jq)),[c,g]=(0,n.useState)({hash:"",show:!1}),[u,v]=(0,n.useState)({show:!1,tag:(0,Z.U)(w.A9,{tag:"",hash:"",type:C.fY.node}),new:!0});if(void 0!==t)return(0,s.jsx)(p(),{statusCode:t.code,title:t.msg});if(h||void 0==a)return(0,s.jsx)(m.Z,{});let T=a=>(0,s.jsxs)(o.Z.Item,{className:"align-items-center d-flex justify-content-between",style:{border:"0ch",borderBottom:"1px solid #dee2e6"},action:!0,onClick:e=>{v({show:!0,tag:(0,Z.U)(w.A9,{tag:a.k,hash:a.v.hash[0],type:a.v.type}),new:!1})},children:[(0,s.jsxs)("div",{children:[a.k,(0,s.jsx)(r.Z,{className:"rounded-pill bg-light text-dark ms-1",children:0===a.v.hash.length||""===a.v.hash[0]?(0,s.jsxs)(s.Fragment,{children:["Fallback ",(0,s.jsx)("i",{className:"bi bi-heart-arrow"})," Global"]}):a.v.type===C.fY.mirror?(0,s.jsxs)(s.Fragment,{children:["Mirror ",(0,s.jsx)("i",{className:"bi bi-arrow-right"})," ",a.v.hash]}):(0,s.jsxs)(s.Fragment,{children:["Target ",(0,s.jsx)("i",{className:"bi bi-arrow-right"}),(0,s.jsx)("a",{className:"text-truncate",href:"#",onClick:e=>{e.preventDefault(),e.stopPropagation(),g({hash:a.v.hash[0],show:!0})},children:a.v.hash})]})})]}),(0,s.jsx)(l.Z,{variant:"outline-danger",as:"span",size:"sm",onClick:t=>{t.stopPropagation(),(0,j.U)("/tag",{method:"DELETE",body:(0,N.O)(k.mV,(0,Z.U)(k.mV,{value:a.k}))}).then(async t=>{let{error:s}=t;void 0!==s?e.Error("delete tag ".concat(a.k," failed, ").concat(s.code,"| ").concat(await s.msg)):(e.Info("delete tag ".concat(a.k," success")),await d())})},children:(0,s.jsx)("i",{className:"bi-trash"})})]},a.k);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(f.Z,{show:c.show,hash:c.hash,onHide:()=>g({...c,hash:"",show:!1})}),(0,s.jsx)(F,{show:u.show,data:a,tag:u.tag,onChangeTag:e=>v({...u,tag:e}),new:u.new,onHide:()=>v({...u,show:!1}),onSave:()=>{""!==u.tag.tag&&""!==u.tag.hash&&(0,j.U)("/tag",{body:(0,N.O)(w.A9,u.tag)}).then(async a=>{let{error:t}=a;void 0!==t?e.Error("save tag ".concat(u.tag.tag," failed, ").concat(t.code,"| ").concat(await t.msg)):(e.Info("Set tag ".concat(u.tag.tag," to ").concat(u.tag.hash," successful")),await d()),v({...u,show:!1})})}}),(0,s.jsx)(i.Z,{className:"mb-3",children:(0,s.jsxs)(o.Z,{variant:"flush",children:[Object.entries(a.tags).sort((e,a)=>e<=a?-1:1).map(e=>{let[a,t]=e;return(0,s.jsx)(T,{k:a,v:(0,Z.U)(C.td,t)},a)}),(0,s.jsx)(o.Z.Item,{className:"d-sm-flex",children:(0,s.jsxs)(l.Z,{variant:"outline-success",className:"flex-grow-1",onClick:()=>v({show:!0,tag:(0,Z.U)(w.A9,{tag:"new tag",hash:"",type:C.fY.node}),new:!0}),children:[(0,s.jsx)("i",{className:"bi bi-plus-lg"}),"New"]})})]})})]})}},2098:function(e,a,t){"use strict";var s=t(6800),n=t.n(s),o=t(2265),r=t(2574),l=t(7437);let i=o.forwardRef((e,a)=>{let{bsPrefix:t,bg:s="primary",pill:o=!1,text:i,className:h,as:d="span",...c}=e,g=(0,r.vE)(t,"badge");return(0,l.jsx)(d,{ref:a,...c,className:n()(h,g,o&&"rounded-pill",i&&"text-".concat(i),s&&"bg-".concat(s))})});i.displayName="Badge",a.Z=i},844:function(e,a,t){"use strict";var s=t(6800),n=t.n(s),o=t(2265),r=t(2574),l=t(2808),i=t(7437);let h=()=>void 0,d=o.forwardRef((e,a)=>{let{bsPrefix:t,name:s,className:o,checked:d,type:c,onChange:g,value:u,disabled:m,id:x,inputRef:j,...v}=e;return t=(0,r.vE)(t,"btn-check"),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("input",{className:t,name:s,type:c,value:u,ref:j,autoComplete:"off",checked:!!d,disabled:!!m,onChange:g||h,id:x}),(0,i.jsx)(l.Z,{...v,ref:a,className:n()(o,m&&"disabled"),type:void 0,role:void 0,as:"label",htmlFor:x})]})});d.displayName="ToggleButton",a.Z=d}},function(e){e.O(0,[988,113,481,466,262,364,672,361,732,784,688,833,971,23,744],function(){return e(e.s=5294)}),_N_E=e.O()}]);
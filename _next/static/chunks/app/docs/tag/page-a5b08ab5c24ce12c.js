(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[163],{7809:(e,a,t)=>{Promise.resolve().then(t.bind(t,3129))},3129:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>S});var s=t(5155),n=t(3577),r=t(1936),o=t(5554),l=t.n(o),i=t(2115),d=t(57),h=t(1566),c=t(2963),g=t(2981),m=t(0),u=t(3614),x=t(8627),v=t(2926),j=t(6180),p=t(4995),b=t(9169),f=t(8927),w=t(148),C=t(1731),y=t(9969),A=t(1649);let N=e=>(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(m.A,{show:e.show,onHide:()=>{e.onHide()},children:[(0,s.jsx)(m.A.Header,{closeButton:!0,children:e.tag.tag}),(0,s.jsxs)(m.A.Body,{children:[(0,s.jsxs)(u.A,{className:"mb-3 d-flex",children:[(0,s.jsx)(x.A,{id:"toggle-node",type:"radio",variant:"outline-primary",value:A.mm.node,onChange:()=>{e.tag.type=A.mm.node,e.onChangeTag(e.tag)},checked:e.tag.type===A.mm.node,children:"Node"}),(0,s.jsx)(x.A,{id:"toggle-mirror",type:"radio",variant:"outline-primary",value:A.mm.mirror,onChange:()=>{e.tag.type=A.mm.mirror,e.onChangeTag(e.tag)},checked:e.tag.type===A.mm.mirror,children:"Mirror"})]}),e.new&&(0,s.jsx)(v.A,{label:"Tag",className:"mb-2",children:(0,s.jsx)(j.A.Control,{placeholder:"Tag","aria-label":"Tag","aria-describedby":"basic-addon1",value:e.tag.tag,onChange:a=>{e.tag.tag=a.target.value,e.onChangeTag(e.tag)}})}),e.tag.type==A.mm.mirror?(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(F,{data:e.data,value:e.tag.hash,onChangeMirror:a=>{e.tag.hash=a,e.onChangeTag(e.tag)}})}):(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(T,{data:e.nodes,hash:e.tag.hash,onChangeNode:a=>{e.tag.hash=a,e.onChangeTag(e.tag)}})})]}),(0,s.jsxs)(m.A.Footer,{children:[(0,s.jsx)(c.A,{variant:"outline-secondary",onClick:()=>{e.onHide()},children:"Close"}),(0,s.jsx)(c.A,{variant:"outline-primary",onClick:()=>{e.onSave()},children:"Save"})]})]})}),k=(e,a)=>{if(void 0===a||""===e)return"";for(let t in a.groups)for(let s in a.groups[t].nodesV2)if(a.groups[t].nodesV2[s]===e)return t;return""},T=e=>{var a,t;let[n,r]=(0,i.useState)({data:k(e.hash,e.data)});return(0,i.useEffect)(()=>{r({data:k(e.hash,e.data)})},[e.hash,e.data]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(v.A,{label:"Group",className:"mb-2",children:(0,s.jsxs)(j.A.Select,{defaultValue:n.data,onChange:e=>r({data:e.target.value}),children:[(0,s.jsx)("option",{children:"Choose..."}),Object.keys(e.data?e.data.groups:{}).sort((e,a)=>e<=a?-1:1).map(e=>(0,s.jsx)("option",{value:e,children:e},e))]})}),(0,s.jsx)(v.A,{label:"Node",className:"mb-2",children:(0,s.jsxs)(j.A.Select,{defaultValue:e.hash,onChange:a=>{e.onChangeNode(a.target.value)},children:[(0,s.jsx)("option",{value:"",children:"Choose..."}),Object.entries(e.data&&null!==(t=null===(a=e.data.groups[n.data])||void 0===a?void 0:a.nodesV2)&&void 0!==t?t:{}).sort((e,a)=>e<=a?-1:1).map(e=>{let[a,t]=e;return(0,s.jsx)("option",{value:t,children:a},a)})]})})]})},F=e=>(0,s.jsx)(v.A,{label:"Mirror",className:"mb-2",children:(0,s.jsxs)(j.A.Select,{defaultValue:e.value,onChange:a=>{e.onChangeMirror(a.target.value)},children:[(0,s.jsx)("option",{value:"",children:"Choose..."}),Object.keys(e.data.tags).sort((e,a)=>e<=a?-1:1).map(e=>(0,s.jsx)("option",{value:e,children:e},e))]})}),S=function(){let e=(0,i.useContext)(w.u),{data:a,error:t,isLoading:o,mutate:m}=(0,p.Ay)("/tags",(0,f.AD)(y.Tc.method.list)),{data:u}=(0,p.Ay)("/nodes",(0,f.AD)(y.rH.method.list)),[x,v]=(0,i.useState)({hash:"",show:!1}),[j,k]=(0,i.useState)({show:!1,tag:(0,n.v)(y.hf,{tag:"",hash:"",type:A.mm.node}),new:!0});if(void 0!==t)return(0,s.jsx)(l(),{statusCode:t.code,title:t.msg});if(o||void 0==a)return(0,s.jsx)(b.A,{});let T=a=>(0,s.jsxs)(d.A.Item,{className:"align-items-center d-flex justify-content-between",style:{border:"0ch",borderBottom:"1px solid #dee2e6"},action:!0,onClick:e=>{k({show:!0,tag:(0,n.v)(y.hf,{tag:a.k,hash:a.v.hash[0],type:a.v.type}),new:!1})},children:[(0,s.jsxs)("div",{children:[a.k,(0,s.jsx)(h.A,{className:"rounded-pill bg-light text-dark ms-1",children:0===a.v.hash.length||""===a.v.hash[0]?(0,s.jsxs)(s.Fragment,{children:["Fallback ",(0,s.jsx)("i",{className:"bi bi-heart-arrow"})," Global"]}):a.v.type===A.mm.mirror?(0,s.jsxs)(s.Fragment,{children:["Mirror ",(0,s.jsx)("i",{className:"bi bi-arrow-right"})," ",a.v.hash]}):(0,s.jsxs)(s.Fragment,{children:["Target ",(0,s.jsx)("i",{className:"bi bi-arrow-right"}),(0,s.jsx)("a",{className:"text-truncate",href:"#",onClick:e=>{e.preventDefault(),e.stopPropagation(),v({hash:a.v.hash[0],show:!0})},children:a.v.hash})]})})]}),(0,s.jsx)(c.A,{variant:"outline-danger",as:"span",size:"sm",onClick:t=>{t.stopPropagation(),(0,f.kP)(y.Tc.method.remove,"/tag","DELETE",(0,n.v)(r.g8,{value:a.k})).then(async t=>{let{error:s}=t;void 0!==s?e.Error("delete tag ".concat(a.k," failed, ").concat(s.code,"| ").concat(s.msg)):(e.Info("delete tag ".concat(a.k," success")),await m())})},children:(0,s.jsx)("i",{className:"bi-trash"})})]},a.k);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(C.y,{show:x.show,hash:x.hash,onHide:()=>v({...x,show:!1})}),(0,s.jsx)(N,{show:j.show,nodes:u,data:a,tag:j.tag,onChangeTag:e=>k({...j,tag:e}),new:j.new,onHide:()=>k({...j,show:!1}),onSave:()=>{""!==j.tag.tag&&""!==j.tag.hash&&(0,f.kP)(y.Tc.method.save,"/tag","POST",j.tag).then(async a=>{let{error:t}=a;void 0!==t?e.Error("save tag ".concat(j.tag.tag," failed, ").concat(t.code,"| ").concat(t.msg)):(e.Info("Set tag ".concat(j.tag.tag," to ").concat(j.tag.hash," successful")),await m()),k({...j,show:!1})})}}),(0,s.jsx)(g.A,{className:"mb-3",children:(0,s.jsxs)(d.A,{variant:"flush",children:[Object.entries(a.tags).sort((e,a)=>e<=a?-1:1).map(e=>{let[a,t]=e;return(0,s.jsx)(T,{k:a,v:(0,n.v)(A.xN,t)},a)}),(0,s.jsx)(d.A.Item,{className:"d-sm-flex",children:(0,s.jsxs)(c.A,{variant:"outline-success",className:"flex-grow-1",onClick:()=>k({show:!0,tag:(0,n.v)(y.hf,{tag:"new tag",hash:"",type:A.mm.node}),new:!0}),children:[(0,s.jsx)("i",{className:"bi bi-plus-lg"}),"New"]})})]})})]})}},1566:(e,a,t)=>{"use strict";t.d(a,{A:()=>d});var s=t(4617),n=t.n(s),r=t(2115),o=t(1653),l=t(5155);let i=r.forwardRef((e,a)=>{let{bsPrefix:t,bg:s="primary",pill:r=!1,text:i,className:d,as:h="span",...c}=e,g=(0,o.oU)(t,"badge");return(0,l.jsx)(h,{ref:a,...c,className:n()(d,g,r&&"rounded-pill",i&&"text-".concat(i),s&&"bg-".concat(s))})});i.displayName="Badge";let d=i},8627:(e,a,t)=>{"use strict";t.d(a,{A:()=>c});var s=t(4617),n=t.n(s),r=t(2115),o=t(1653),l=t(2963),i=t(5155);let d=()=>void 0,h=r.forwardRef((e,a)=>{let{bsPrefix:t,name:s,className:r,checked:h,type:c,onChange:g,value:m,disabled:u,id:x,inputRef:v,...j}=e;return t=(0,o.oU)(t,"btn-check"),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("input",{className:t,name:s,type:c,value:m,ref:v,autoComplete:"off",checked:!!h,disabled:!!u,onChange:g||d,id:x}),(0,i.jsx)(l.A,{...j,ref:a,className:n()(r,u&&"disabled"),type:void 0,role:void 0,as:"label",htmlFor:x})]})});h.displayName="ToggleButton";let c=h}},e=>{var a=a=>e(e.s=a);e.O(0,[295,375,515,920,637,354,340,190,723,922,969,112,441,517,358],()=>a(7809)),_N_E=e.O()}]);
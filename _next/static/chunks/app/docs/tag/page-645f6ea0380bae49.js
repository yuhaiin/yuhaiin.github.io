(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[163],{7809:(e,a,t)=>{Promise.resolve().then(t.bind(t,3129))},3025:(e,a,t)=>{"use strict";t.d(a,{u:()=>o});var s=t(5155),n=t(0),r=t(2963);let o=e=>{let{onOk:a,content:t,show:o,onHide:l}=e;return(0,s.jsxs)(n.A,{show:o,onHide:l,centered:!0,children:[(0,s.jsx)(n.A.Body,{children:t}),(0,s.jsxs)(n.A.Footer,{children:[(0,s.jsx)(r.A,{variant:"outline-secondary",onClick:()=>{l()},children:"Cancel"}),(0,s.jsx)(r.A,{variant:"outline-danger",onClick:()=>{a(),l()},children:"OK"})]})]})}},3129:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>O});var s=t(5155),n=t(3577),r=t(1936),o=t(5554),l=t.n(o),i=t(2115),h=t(57),d=t(1566),c=t(2963),g=t(2981),m=t(0),u=t(3614),x=t(8627),j=t(2926),v=t(6180),p=t(7021),b=t(3025),w=t(9169),f=t(8927),y=t(2859),C=t(148),A=t(4778),N=t(9969),k=t(1649);let F=e=>(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(m.A,{show:e.show,onHide:()=>{e.onHide()},centered:!0,children:[(0,s.jsx)(m.A.Header,{closeButton:!0,children:e.tag.tag}),(0,s.jsxs)(m.A.Body,{children:[(0,s.jsxs)(u.A,{className:"mb-3 d-flex",children:[(0,s.jsx)(x.A,{id:"toggle-node",type:"radio",variant:"outline-primary",value:k.mm.node,onChange:()=>{e.tag.type=k.mm.node,e.onChangeTag(e.tag)},checked:e.tag.type===k.mm.node,children:"Node"}),(0,s.jsx)(x.A,{id:"toggle-mirror",type:"radio",variant:"outline-primary",value:k.mm.mirror,onChange:()=>{e.tag.type=k.mm.mirror,e.onChangeTag(e.tag)},checked:e.tag.type===k.mm.mirror,children:"Mirror"})]}),e.new&&(0,s.jsx)(j.A,{label:"Tag",className:"mb-2",children:(0,s.jsx)(v.A.Control,{placeholder:"Tag","aria-label":"Tag","aria-describedby":"basic-addon1",value:e.tag.tag,onChange:a=>{e.tag.tag=a.target.value,e.onChangeTag(e.tag)}})}),e.tag.type==k.mm.mirror?(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(H,{data:e.data,value:e.tag.hash,onChangeMirror:a=>{e.tag.hash=a,e.onChangeTag(e.tag)}})}):(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(E,{data:e.nodes,hash:e.tag.hash,onChangeNode:a=>{e.tag.hash=a,e.onChangeTag(e.tag)}})})]}),(0,s.jsxs)(m.A.Footer,{children:[(0,s.jsx)(c.A,{variant:"outline-secondary",onClick:()=>{e.onHide()},children:"Close"}),(0,s.jsx)(c.A,{variant:"outline-primary",onClick:()=>{e.onSave()},children:"Save"})]})]})}),T=(e,a)=>{if(void 0===a||""===e)return"";for(let t in a.groups)for(let s in a.groups[t].nodesV2)if(a.groups[t].nodesV2[s]===e)return t;return""},E=e=>{var a,t;let[n,r]=(0,i.useState)({data:T(e.hash,e.data)});return(0,i.useEffect)(()=>{e.hash&&r({data:T(e.hash,e.data)})},[e.hash,e.data]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(j.A,{label:"Group",className:"mb-2",children:(0,s.jsx)(y.FX,{emptyChoose:!0,value:n.data,onChange:e=>{r({data:e})},values:Object.keys(e.data?e.data.groups:{}).sort((e,a)=>e<=a?-1:1)})}),(0,s.jsx)(j.A,{label:"Node",children:(0,s.jsx)(y.FX,{emptyChoose:!0,value:e.hash,onChange:a=>{e.onChangeNode(a)},values:Object.entries(e.data&&null!==(t=null===(a=e.data.groups[n.data])||void 0===a?void 0:a.nodesV2)&&void 0!==t?t:{}).sort((e,a)=>e<=a?-1:1)})})]})},H=e=>(0,s.jsx)(j.A,{label:"Mirror",className:"mb-2",children:(0,s.jsx)(y.FX,{emptyChoose:!0,value:e.value,onChange:a=>{e.onChangeMirror(a)},values:Object.keys(e.data.tags).sort((e,a)=>e<=a?-1:1)})}),O=function(){let e=(0,i.useContext)(C.u),{data:a,error:t,isLoading:o,mutate:m}=(0,p.Ay)("/tags",(0,f.AD)(N.Tc.method.list)),{data:u}=(0,p.Ay)("/nodes",(0,f.AD)(N.rH.method.list)),[x,j]=(0,i.useState)({hash:"",show:!1}),[v,y]=(0,i.useState)({show:!1,tag:(0,n.v)(N.hf,{tag:"",hash:"",type:k.mm.node}),new:!0}),[T,E]=(0,i.useState)({show:!1,name:""});if(void 0!==t)return(0,s.jsx)(l(),{statusCode:t.code,title:t.msg});if(o||void 0==a)return(0,s.jsx)(w.A,{});let H=e=>{let{k:a,v:t}=e;return(0,s.jsxs)(h.A.Item,{className:"align-items-center d-flex justify-content-between",style:{border:"0ch",borderBottom:"1px solid #dee2e6"},action:!0,onClick:()=>{y({show:!0,tag:(0,n.v)(N.hf,{tag:a,hash:t.hash[0],type:t.type}),new:!1})},children:[(0,s.jsxs)("div",{children:[a,(0,s.jsx)(d.A,{className:"rounded-pill bg-light text-dark ms-1",children:0===t.hash.length||""===t.hash[0]?(0,s.jsxs)(s.Fragment,{children:["Fallback ",(0,s.jsx)("i",{className:"bi bi-heart-arrow"})," Global"]}):t.type===k.mm.mirror?(0,s.jsxs)(s.Fragment,{children:["Mirror ",(0,s.jsx)("i",{className:"bi bi-arrow-right"})," ",t.hash]}):(0,s.jsxs)(s.Fragment,{children:["Target ",(0,s.jsx)("i",{className:"bi bi-arrow-right"}),(0,s.jsx)("a",{className:"text-truncate",href:"#",onClick:e=>{e.preventDefault(),e.stopPropagation(),j({hash:t.hash[0],show:!0})},children:t.hash})]})})]}),(0,s.jsx)(c.A,{variant:"outline-danger",as:"span",size:"sm",onClick:e=>{e.stopPropagation(),E({show:!0,name:a})},children:(0,s.jsx)("i",{className:"bi-trash"})})]},a)};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(b.u,{show:T.show,content:(0,s.jsxs)("p",{children:["Delete tag ",T.name,"?"]}),onHide:()=>E({...T,show:!1}),onOk:()=>{(0,f.kP)(N.Tc.method.remove,"/tag","DELETE",(0,n.v)(r.g8,{value:T.name})).then(async a=>{let{error:t}=a;void 0!==t?e.Error("delete tag ".concat(T.name," failed, ").concat(t.code,"| ").concat(t.msg)):(e.Info("delete tag ".concat(T.name," success")),await m()),E({...T,show:!1})})}}),(0,s.jsx)(A.y,{show:x.show,hash:x.hash,onHide:()=>j({...x,show:!1})}),(0,s.jsx)(F,{show:v.show,nodes:u,data:a,tag:v.tag,onChangeTag:e=>y({...v,tag:e}),new:v.new,onHide:()=>y({...v,show:!1}),onSave:()=>{""!==v.tag.tag&&""!==v.tag.hash&&(0,f.kP)(N.Tc.method.save,"/tag","POST",v.tag).then(async a=>{let{error:t}=a;void 0!==t?e.Error("save tag ".concat(v.tag.tag," failed, ").concat(t.code,"| ").concat(t.msg)):(e.Info("Set tag ".concat(v.tag.tag," to ").concat(v.tag.hash," successful")),await m()),y({...v,show:!1})})}}),(0,s.jsx)(g.A,{className:"mb-3",children:(0,s.jsxs)(h.A,{variant:"flush",children:[Object.entries(a.tags).sort((e,a)=>e<=a?-1:1).map(e=>{let[a,t]=e;return(0,s.jsx)(H,{k:a,v:(0,n.v)(k.xN,t)},a)}),(0,s.jsx)(h.A.Item,{className:"d-sm-flex",children:(0,s.jsxs)(c.A,{variant:"outline-success",className:"flex-grow-1",onClick:()=>y({show:!0,tag:(0,n.v)(N.hf,{tag:"new tag",hash:"",type:k.mm.node}),new:!0}),children:[(0,s.jsx)("i",{className:"bi bi-plus-lg"}),"New"]})})]})})]})}},1566:(e,a,t)=>{"use strict";t.d(a,{A:()=>h});var s=t(4617),n=t.n(s),r=t(2115),o=t(1653),l=t(5155);let i=r.forwardRef((e,a)=>{let{bsPrefix:t,bg:s="primary",pill:r=!1,text:i,className:h,as:d="span",...c}=e,g=(0,o.oU)(t,"badge");return(0,l.jsx)(d,{ref:a,...c,className:n()(h,g,r&&"rounded-pill",i&&"text-".concat(i),s&&"bg-".concat(s))})});i.displayName="Badge";let h=i},8627:(e,a,t)=>{"use strict";t.d(a,{A:()=>c});var s=t(4617),n=t.n(s),r=t(2115),o=t(1653),l=t(2963),i=t(5155);let h=()=>void 0,d=r.forwardRef((e,a)=>{let{bsPrefix:t,name:s,className:r,checked:d,type:c,onChange:g,value:m,disabled:u,id:x,inputRef:j,...v}=e;return t=(0,o.oU)(t,"btn-check"),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("input",{className:t,name:s,type:c,value:m,ref:j,autoComplete:"off",checked:!!d,disabled:!!u,onChange:g||h,id:x}),(0,i.jsx)(l.A,{...v,ref:a,className:n()(r,u&&"disabled"),type:void 0,role:void 0,as:"label",htmlFor:x})]})});d.displayName="ToggleButton";let c=d}},e=>{var a=a=>e(e.s=a);e.O(0,[295,867,306,920,818,637,536,340,624,599,922,969,778,441,517,358],()=>a(7809)),_N_E=e.O()}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5163],{7809:(e,a,s)=>{Promise.resolve().then(s.bind(s,3129))},3025:(e,a,s)=>{"use strict";s.d(a,{u:()=>o});var t=s(5155),n=s(0),r=s(2963);let o=e=>{let{onOk:a,content:s,show:o,onHide:h}=e;return(0,t.jsxs)(n.A,{show:o,onHide:h,centered:!0,children:[(0,t.jsx)(n.A.Body,{children:s}),(0,t.jsxs)(n.A.Footer,{children:[(0,t.jsx)(r.A,{variant:"outline-secondary",onClick:()=>{h()},children:"Cancel"}),(0,t.jsx)(r.A,{variant:"outline-danger",onClick:()=>{a(),h()},children:"OK"})]})]})}},3129:(e,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>O});var t=s(5155),n=s(3577),r=s(1936),o=s(5554),h=s.n(o),l=s(2115),i=s(57),d=s(1566),c=s(2963),g=s(2981),m=s(0),u=s(3614),x=s(8627),j=s(2926),v=s(6180),p=s(7021),w=s(3025),b=s(9169),C=s(8927),y=s(2859),A=s(148),f=s(4778),N=s(9969),k=s(1649);let T=e=>(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(m.A,{show:e.show,onHide:()=>{e.onHide()},children:[(0,t.jsx)(m.A.Header,{closeButton:!0,children:e.tag.tag}),(0,t.jsxs)(m.A.Body,{children:[(0,t.jsxs)(u.A,{className:"mb-3 d-flex",children:[(0,t.jsx)(x.A,{id:"toggle-node",type:"radio",variant:"outline-primary",value:k.mm.node,onChange:()=>{e.tag.type=k.mm.node,e.onChangeTag(e.tag)},checked:e.tag.type===k.mm.node,children:"Node"}),(0,t.jsx)(x.A,{id:"toggle-mirror",type:"radio",variant:"outline-primary",value:k.mm.mirror,onChange:()=>{e.tag.type=k.mm.mirror,e.onChangeTag(e.tag)},checked:e.tag.type===k.mm.mirror,children:"Mirror"})]}),e.new&&(0,t.jsx)(j.A,{label:"Tag",className:"mb-2",children:(0,t.jsx)(v.A.Control,{placeholder:"Tag","aria-label":"Tag","aria-describedby":"basic-addon1",value:e.tag.tag,onChange:a=>{e.tag.tag=a.target.value,e.onChangeTag(e.tag)}})}),e.tag.type==k.mm.mirror?(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(H,{data:e.data,value:e.tag.hash,onChangeMirror:a=>{e.tag.hash=a,e.onChangeTag(e.tag)}})}):(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(E,{data:e.nodes,hash:e.tag.hash,onChangeNode:a=>{e.tag.hash=a,e.onChangeTag(e.tag)}})})]}),(0,t.jsxs)(m.A.Footer,{children:[(0,t.jsx)(c.A,{variant:"outline-secondary",onClick:()=>{e.onHide()},children:"Close"}),(0,t.jsx)(c.A,{variant:"outline-primary",onClick:()=>{e.onSave()},children:"Save"})]})]})}),F=(e,a)=>{if(void 0===a||""===e)return"";for(let s in a.groups)for(let t in a.groups[s].nodesV2)if(a.groups[s].nodesV2[t]===e)return s;return""},E=e=>{var a,s;let[n,r]=(0,l.useState)({data:F(e.hash,e.data)});return(0,l.useEffect)(()=>{e.hash&&r({data:F(e.hash,e.data)})},[e.hash,e.data]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(j.A,{label:"Group",className:"mb-2",children:(0,t.jsx)(y.FX,{emptyChoose:!0,value:n.data,onChange:e=>{r({data:e})},values:Object.keys(e.data?e.data.groups:{}).sort((e,a)=>e<=a?-1:1)})}),(0,t.jsx)(j.A,{label:"Node",children:(0,t.jsx)(y.FX,{emptyChoose:!0,value:e.hash,onChange:a=>{e.onChangeNode(a)},values:Object.entries(e.data&&null!==(s=null===(a=e.data.groups[n.data])||void 0===a?void 0:a.nodesV2)&&void 0!==s?s:{}).sort((e,a)=>e<=a?-1:1)})})]})},H=e=>(0,t.jsx)(j.A,{label:"Mirror",className:"mb-2",children:(0,t.jsx)(y.FX,{emptyChoose:!0,value:e.value,onChange:a=>{e.onChangeMirror(a)},values:Object.keys(e.data.tags).sort((e,a)=>e<=a?-1:1)})}),O=function(){let e=(0,l.useContext)(A.u),{data:a,error:s,isLoading:o,mutate:m}=(0,p.Ay)("/tags",(0,C.AD)(N.Tc.method.list)),{data:u}=(0,p.Ay)("/nodes",(0,C.AD)(N.rH.method.list)),[x,j]=(0,l.useState)({hash:"",show:!1}),[v,y]=(0,l.useState)({show:!1,tag:(0,n.v)(N.hf,{tag:"",hash:"",type:k.mm.node}),new:!0}),[F,E]=(0,l.useState)({show:!1,name:""});if(void 0!==s)return(0,t.jsx)(h(),{statusCode:s.code,title:s.msg});if(o||void 0==a)return(0,t.jsx)(b.A,{});let H=e=>{let{k:a,v:s}=e;return(0,t.jsxs)(i.A.Item,{className:"align-items-center d-flex justify-content-between",style:{border:"0ch",borderBottom:"1px solid #dee2e6"},action:!0,onClick:()=>{y({show:!0,tag:(0,n.v)(N.hf,{tag:a,hash:s.hash[0],type:s.type}),new:!1})},children:[(0,t.jsxs)("div",{children:[a,(0,t.jsx)(d.A,{className:"rounded-pill bg-light text-dark ms-1",children:0===s.hash.length||""===s.hash[0]?(0,t.jsxs)(t.Fragment,{children:["Fallback ",(0,t.jsx)("i",{className:"bi bi-heart-arrow"})," Global"]}):s.type===k.mm.mirror?(0,t.jsxs)(t.Fragment,{children:["Mirror ",(0,t.jsx)("i",{className:"bi bi-arrow-right"})," ",s.hash]}):(0,t.jsxs)(t.Fragment,{children:["Target ",(0,t.jsx)("i",{className:"bi bi-arrow-right"}),(0,t.jsx)("a",{className:"text-truncate",href:"#",onClick:e=>{e.preventDefault(),e.stopPropagation(),j({hash:s.hash[0],show:!0})},children:s.hash})]})})]}),(0,t.jsx)(c.A,{variant:"outline-danger",as:"span",size:"sm",onClick:e=>{e.stopPropagation(),E({show:!0,name:a})},children:(0,t.jsx)("i",{className:"bi-trash"})})]},a)};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(w.u,{show:F.show,content:(0,t.jsxs)("p",{children:["Delete tag ",F.name,"?"]}),onHide:()=>E({...F,show:!1}),onOk:()=>{(0,C.kP)(N.Tc.method.remove,"/tag","DELETE",(0,n.v)(r.g8,{value:F.name})).then(async a=>{let{error:s}=a;void 0!==s?e.Error("delete tag ".concat(F.name," failed, ").concat(s.code,"| ").concat(s.msg)):(e.Info("delete tag ".concat(F.name," success")),await m()),E({...F,show:!1})})}}),(0,t.jsx)(f.y,{show:x.show,hash:x.hash,onHide:()=>j({...x,show:!1})}),(0,t.jsx)(T,{show:v.show,nodes:u,data:a,tag:v.tag,onChangeTag:e=>y({...v,tag:e}),new:v.new,onHide:()=>y({...v,show:!1}),onSave:()=>{""!==v.tag.tag&&""!==v.tag.hash&&(0,C.kP)(N.Tc.method.save,"/tag","POST",v.tag).then(async a=>{let{error:s}=a;void 0!==s?e.Error("save tag ".concat(v.tag.tag," failed, ").concat(s.code,"| ").concat(s.msg)):(e.Info("Set tag ".concat(v.tag.tag," to ").concat(v.tag.hash," successful")),await m()),y({...v,show:!1})})}}),(0,t.jsx)(g.A,{className:"mb-3",children:(0,t.jsxs)(i.A,{variant:"flush",children:[Object.entries(a.tags).sort((e,a)=>e<=a?-1:1).map(e=>{let[a,s]=e;return(0,t.jsx)(H,{k:a,v:(0,n.v)(k.xN,s)},a)}),(0,t.jsx)(i.A.Item,{className:"d-sm-flex",children:(0,t.jsxs)(c.A,{variant:"outline-success",className:"flex-grow-1",onClick:()=>y({show:!0,tag:(0,n.v)(N.hf,{tag:"new tag",hash:"",type:k.mm.node}),new:!0}),children:[(0,t.jsx)("i",{className:"bi bi-plus-lg"}),"New"]})})]})})]})}}},e=>{var a=a=>e(e.s=a);e.O(0,[7295,867,6306,8920,9818,9637,4691,2340,1215,1326,3274,1922,9969,4778,8441,1517,7358],()=>a(7809)),_N_E=e.O()}]);
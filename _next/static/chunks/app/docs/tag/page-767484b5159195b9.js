(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[966],{5120:function(e,a,t){Promise.resolve().then(t.bind(t,9566))},9566:function(e,a,t){"use strict";t.r(a);var s=t(7437),n=t(2265),r=t(2389),l=t(5097),o=t(8168),c=t(9252),i=t(9317),h=t(8647),d=t(6879),u=t(6491),x=t(1252),m=t(8224),g=t(2283),j=t.n(g),b=t(5952),p=t(6756),f=t(5051),v=t(7682),y=t(4344),w=t(3525);a.default=function(){var e;let a=(0,n.useContext)(p.P),[t,g]=(0,n.useState)(""),[N,Z]=(0,n.useState)(new f.hr({tag:"",hash:"",type:v.f.node})),{data:C,error:k,isLoading:E,mutate:S}=(0,x.ZP)("/nodes",(0,m.D4)(new y.BP)),[D,F]=(0,n.useState)({hash:""});if(void 0!==k)return(0,s.jsx)(j(),{statusCode:k.code,title:k.msg});if(E||void 0==C)return(0,s.jsx)(u.Z,{});let O=(e,t)=>(0,s.jsx)(r.Z.Item,{style:{border:"0ch",borderBottom:"1px solid #dee2e6"},children:(0,s.jsxs)("div",{className:"d-flex flex-wrap",children:[(0,s.jsx)("a",{className:"text-decoration-none",href:"#empty",onClick:a=>{a.preventDefault(),Z(a=>new f.hr({...a,tag:e}))},children:e}),(0,s.jsx)(l.Z,{className:"rounded-pill bg-light text-dark text-truncate ms-1",children:0===t.hash.length||""===t.hash[0]?(0,s.jsxs)(s.Fragment,{children:["Fallback ",(0,s.jsx)("i",{className:"bi bi-heart-arrow"})," Global"]}):t.type===v.f.mirror?(0,s.jsxs)(s.Fragment,{children:["Mirror ",(0,s.jsx)("i",{className:"bi bi-arrow-right"})," ",t.hash]}):(0,s.jsxs)(s.Fragment,{children:["Target ",(0,s.jsx)("i",{className:"bi bi-arrow-right"}),(0,s.jsx)("a",{className:"text-truncate",href:"#",onClick:e=>{e.preventDefault(),F({hash:t.hash[0]})},children:t.hash})]})}),(0,s.jsxs)("a",{className:"text-decoration-none ms-auto text-truncate",href:"#empty",onClick:t=>{t.preventDefault(),(0,m.Uo)("/tag",{method:"DELETE",body:new w.Gm({value:e}).toBinary()}).then(async t=>{let{error:s}=t;void 0!==s?a.Error("delete tag ".concat(e," failed, ").concat(s.code,"| ").concat(await s.msg)):(a.Info("delete tag ".concat(e," success")),await S())})},children:[(0,s.jsx)("i",{className:"bi-trash"}),"DELETE"]})]})},e);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(b.Z,{show:""!==D.hash,hash:D.hash,onHide:()=>F({hash:""})}),(0,s.jsx)(o.Z,{className:"mb-3",children:(0,s.jsx)(r.Z,{variant:"flush",children:Object.entries(C.tags).sort((e,a)=>e<=a?-1:1).map(e=>{let[a,t]=e;return O(a,new v.p(t))})})}),(0,s.jsx)(o.Z,{className:"mb-3",children:(0,s.jsxs)(o.Z.Body,{children:[(0,s.jsxs)(c.Z,{className:"mb-3",children:[(0,s.jsx)(i.Z.Check,{inline:!0,type:"radio",onChange:()=>{Z(e=>new f.hr({...e,type:v.f.node,hash:""}))},checked:N.type===v.f.node,label:"Node"}),(0,s.jsx)(i.Z.Check,{inline:!0,type:"radio",onChange:()=>{Z(e=>new f.hr({...e,type:v.f.mirror,hash:""}))},checked:N.type===v.f.mirror,label:"Mirror"})]}),(0,s.jsx)(h.Z,{label:"Tag",className:"mb-2",children:(0,s.jsx)(i.Z.Control,{placeholder:"Tag","aria-label":"Tag","aria-describedby":"basic-addon1",value:N.tag,onChange:e=>{Z(a=>new f.hr({...a,tag:e.target.value}))}})}),N.type===v.f.node?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(h.Z,{label:"Group",className:"mb-2",children:(0,s.jsxs)(i.Z.Select,{defaultValue:"",onChange:e=>g(e.target.value),children:[(0,s.jsx)("option",{children:"Choose..."}),Object.keys(C.groupsV2).sort((e,a)=>e<=a?-1:1).map(e=>(0,s.jsx)("option",{value:e,children:e},e))]})}),(0,s.jsx)(h.Z,{label:"Node",className:"mb-2",children:(0,s.jsxs)(i.Z.Select,{defaultValue:"",onChange:e=>{Z(a=>new f.hr({...a,hash:e.target.value}))},children:[(0,s.jsx)("option",{value:"",children:"Choose..."}),Object.entries((0,m.Sv)(null===(e=C.groupsV2[t])||void 0===e?void 0:e.nodesV2)).sort((e,a)=>e<=a?-1:1).map(e=>{let[a,t]=e;return(0,s.jsx)("option",{value:t,children:a},a)})]})})]}):(0,s.jsx)(h.Z,{label:"Mirror",className:"mb-2",children:(0,s.jsxs)(i.Z.Select,{defaultValue:"",onChange:e=>{Z(a=>new f.hr({...a,hash:e.target.value}))},children:[(0,s.jsx)("option",{value:"",children:"Choose..."}),Object.keys(C.tags).sort((e,a)=>e<=a?-1:1).map(e=>(0,s.jsx)("option",{value:e,children:e},e))]})}),(0,s.jsx)(d.Z,{variant:"outline-primary",onClick:()=>{""!==N.tag&&""!==N.hash&&(0,m.Uo)("/tag",{body:N.toBinary()}).then(async e=>{let{error:t}=e;void 0!==t?a.Error("save tag ".concat(N.tag," failed, ").concat(t.code,"| ").concat(await t.msg)):(a.Info("Set tag ".concat(N.tag," to ").concat(N.hash," successful")),await S())})},children:"Save"})]})})]})}}},function(e){e.O(0,[465,149,329,728,414,713,111,860,178,186,971,69,744],function(){return e(e.s=5120)}),_N_E=e.O()}]);
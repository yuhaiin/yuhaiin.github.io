(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[129],{7752:function(e,n,s){Promise.resolve().then(s.bind(s,161))},6491:function(e,n,s){"use strict";var a=s(7437),l=s(477),t=s(2283),r=s.n(t);n.Z=function(e){return(0,a.jsxs)("div",{className:"z-1090 d-flex flex-column justify-content-center align-items-center",style:{height:"100px"},children:[void 0!==e.children&&(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(r(),{className:"p2",statusCode:void 0!==e.code?e.code:500,title:e.children})}),(0,a.jsx)("div",{className:"p2",children:(0,a.jsx)(l.Z,{})})]})}},6756:function(e,n,s){"use strict";s.d(n,{P:function(){return i},t:function(){return c}});var a=s(7437),l=s(2265),t=s(4349),r=s(4051);let i=(0,l.createContext)({Info:e=>{},Error:e=>{}}),c=e=>{let{children:n}=e,[s,c]=(0,l.useState)({value:{},index:0}),o=(e,n)=>{c(s=>(s.value[s.index]={text:e,type:n},s.index++,{...s}))};return(0,a.jsxs)(i.Provider,{value:{Info:e=>{console.log(e),o(e,"success")},Error:e=>{console.error(e),o(e,"danger")}},children:[(0,a.jsx)(t.Z,{className:"p-3",position:"top-center",containerPosition:"fixed",style:{zIndex:1},children:Object.entries(s.value).map(e=>{let[n,l]=e;return(0,a.jsxs)(r.Z,{role:"alert","aria-live":"assertive",show:!0,bg:l.type,onClose:()=>{let e=s.value;delete e[n],c({...s,value:e}),console.log("close: "+n)},"aria-atomic":"true",delay:4e3,autohide:!0,animation:!0,children:[(0,a.jsxs)(r.Z.Header,{children:[(0,a.jsx)("strong",{className:"me-auto",children:"Notification"}),(0,a.jsx)("small",{className:"text-muted",children:"just now"})]}),(0,a.jsx)(r.Z.Body,{className:"text-center",children:l.text})]},"toast"+n)})}),n]})}},9318:function(e,n,s){"use strict";s.d(n,{Jg:function(){return x},NZ:function(){return h},Vf:function(){return m},sr:function(){return b},yh:function(){return j}});var a=s(7437),l=s(7374),t=s(5107),r=s(9317),i=s(5914),c=s(590),o=s(9252),d=s(6879),u=s(2265);let m=e=>(0,a.jsxs)(r.Z.Group,{as:i.Z,className:e.mb?e.mb:"mb-2",children:[(0,a.jsx)(r.Z.Label,{column:!0,sm:2,className:"nowrap",children:e.label}),(0,a.jsx)(c.Z,{sm:10,children:(0,a.jsxs)(o.Z,{className:e.mb?e.mb:"mb-2",children:[e.reminds&&e.reminds.length?(0,a.jsx)(l.Z,{variant:"outline-secondary",title:"",children:e.reminds.map(n=>(0,a.jsxs)(t.Z,{onClick:()=>e.onChange&&e.onChange(n.value),children:[(0,a.jsx)("b",{children:n.label}),n.label_children&&n.label_children.map(e=>(0,a.jsx)("div",{children:(0,a.jsx)("span",{className:"text-body-secondary",children:e})},e))]},n.value))}):(0,a.jsx)(a.Fragment,{}),e.url?(0,a.jsx)("a",{className:"mt-1",href:e.url,target:"_blank",children:e.value}):(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(r.Z.Control,{value:null!==e.value?e.value:"",plaintext:e.plaintext,onChange:n=>void 0!==e.onChange&&e.onChange(n.target.value)})})]})})]}),h=e=>(0,a.jsxs)(r.Z.Group,{as:i.Z,className:"mb-2",children:[(0,a.jsx)(r.Z.Label,{column:!0,sm:2,className:"nowrap",children:e.label}),(0,a.jsx)(c.Z,{sm:10,children:(0,a.jsx)(r.Z.Control,{as:"textarea",rows:5,value:e.value,onChange:n=>e.onChange(n.target.value)})})]}),x=e=>(0,a.jsxs)(r.Z.Group,{as:i.Z,className:"mb-2",children:[(0,a.jsx)(r.Z.Label,{column:!0,sm:2,children:e.label}),(0,a.jsx)(c.Z,{sm:10,className:"d-flex align-items-center",children:(0,a.jsx)(r.Z.Check,{className:"d-flex align-items-center",type:"switch",checked:e.checked,onChange:()=>e.onChange()})})]});function j(e){var n;let[s,l]=(0,u.useState)({value:""});return(0,a.jsxs)(r.Z.Group,{as:i.Z,className:"mb-3",children:[(0,a.jsx)(r.Z.Label,{column:!0,sm:2,className:"nowrap",children:e.title}),e.data&&e.data.map((n,s)=>(0,a.jsx)(c.Z,{sm:{span:10,offset:0!==s?2:0},children:(0,a.jsxs)(o.Z,{className:"mb-2",children:[(0,a.jsx)(r.Z.Control,{value:n,onChange:n=>{e.data[s]=n.target.value,e.onChange(e.data)}}),(0,a.jsx)(d.Z,{variant:"outline-danger",onClick:()=>{e.data&&(e.data.splice(s,1),e.onChange(e.data))},children:(0,a.jsx)("i",{className:"bi bi-x-lg"})})]})},s)),(0,a.jsx)(c.Z,{sm:{span:10,offset:(null===(n=e.data)||void 0===n?void 0:n.length)!==0?2:0},children:(0,a.jsxs)(o.Z,{className:"mb-2",children:[(0,a.jsx)(r.Z.Control,{value:s.value,onChange:e=>l({value:e.target.value})}),(0,a.jsx)(d.Z,{variant:"outline-success",onClick:()=>{e.data?(e.data.push(s.value),e.onChange(e.data)):e.onChange([s.value])},children:(0,a.jsx)("i",{className:"bi bi-plus-lg"})})]})})]})}function b(e){return(0,a.jsxs)(r.Z.Group,{as:i.Z,className:e.mb?e.mb:"mb-2",children:[(0,a.jsx)(r.Z.Label,{column:!0,sm:2,className:"nowrap",children:e.title}),(0,a.jsx)(c.Z,{sm:{span:10,offset:0},children:(0,a.jsx)(o.Z,{className:e.mb?e.mb:"mb-2"})}),e.data&&e.data.map((n,s)=>(0,a.jsx)(c.Z,{sm:{span:10,offset:2},className:"mt-0",children:(0,a.jsx)(o.Z,{className:e.mb?e.mb:"mb-2",children:n})},s))]})}},161:function(e,n,s){"use strict";s.r(n);var a=s(7437),l=s(2265),t=s(8168),r=s(2389),i=s(9317),c=s(13),o=s(680),d=s(6879),u=s(477),m=s(4497),h=s(6491),x=s(9318),j=s(6756),b=s(1252),v=s(8224),Z=s(2283),f=s.n(Z),g=s(2520);let p=g.yE.subscribe.type,y=g.yE.protos.node.service.save_link_req,C=g.yE.protos.node.service.get_links_resp,N=g.yE.protos.node.service.link_req;n.default=function(){let[e,n]=(0,l.useState)({}),[s,Z]=(0,l.useState)({value:!1}),[k,E]=(0,l.useState)(new g.yE.subscribe.link({name:"",url:"",type:p.reserve})),{data:w,error:_,isLoading:P,mutate:L}=(0,b.ZP)("/sublist",(0,v.PJ)(C)),O=(0,l.useContext)(j.P);return void 0!==_?(0,a.jsx)(f(),{statusCode:_.code,title:_.msg}):P||void 0===w?(0,a.jsx)(h.Z,{}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.Z,{className:"mb-3",children:[(0,a.jsx)(r.Z,{variant:"flush",children:null!==w.links&&Object.entries(w.links).sort((e,n)=>e<=n?-1:1).map(s=>{let[l,t]=s,d=new g.yE.subscribe.link(t);return(0,a.jsxs)(r.Z.Item,{as:"label",style:{border:"0ch",borderBottom:"1px solid #dee2e6"},children:[(0,a.jsx)(i.Z.Check,{inline:!0,type:"checkbox",checked:void 0!==e[d.name]&&e[d.name],onChange:e=>{n(n=>(n[d.name]=e.target.checked,{...n}))}}),(0,a.jsx)(c.Z,{trigger:"click",placement:"auto-end",overlay:(0,a.jsx)(o.Z,{children:(0,a.jsx)(o.Z.Body,{children:d.url})}),children:(0,a.jsx)("span",{children:d.name})})]},d.name)})}),(0,a.jsxs)(m.Z,{children:[(0,a.jsxs)(d.Z,{variant:"outline-primary",className:"me-1",disabled:s.value,onClick:()=>{Z({value:!0}),(0,v.Uo)("/sub",{method:"PATCH",body:N.encode({names:Object.keys(e).filter(n=>e[n])}).finish()}).then(async e=>{let{error:n}=e;void 0!==n?O.Error("Update failed ".concat(n.code,"| ").concat(await n.msg)):O.Info("Update successfully"),Z({value:!1})})},children:[s.value&&(0,a.jsx)(u.Z,{animation:"border",size:"sm"}),"UPDATE"]}),(0,a.jsx)(d.Z,{variant:"outline-danger",onClick:()=>{(0,v.Uo)("/sub",{method:"DELETE",body:N.encode({names:Object.keys(e).filter(n=>e[n])}).finish()}).then(async n=>{let{error:s}=n;void 0!==s?O.Error("delete ".concat(Object.keys(e)," failed, ").concat(s.code,"| ").concat(await s.msg)):L()})},children:"DELETE"})]})]}),(0,a.jsx)(t.Z,{children:(0,a.jsxs)(t.Z.Body,{children:[(0,a.jsx)(x.Vf,{label:"Name",value:k.name,onChange:e=>E(new g.yE.subscribe.link({...k,name:e}))}),(0,a.jsx)(x.Vf,{label:"Link",value:k.url,onChange:e=>E(new g.yE.subscribe.link({...k,url:e}))}),(0,a.jsx)(d.Z,{variant:"outline-primary",onClick:async()=>{""!==k.name&&""!==k.url&&(0,v.Uo)("/sub",{body:y.encode({links:[k]}).finish()}).then(async e=>{let{error:n}=e;void 0!==n?O.Error("save link ".concat(k.url," failed, ").concat(n.code,"| ").concat(await n.msg)):L()})},children:"ADD"})]})})]})}}},function(e){e.O(0,[644,149,300,634,713,728,60,289,971,69,744],function(){return e(e.s=7752)}),_N_E=e.O()}]);
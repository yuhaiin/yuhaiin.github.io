(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[129],{7752:function(e,n,s){Promise.resolve().then(s.bind(s,1994))},4811:function(e,n,s){"use strict";var t=s(7437),a=s(7332),l=s(1375),r=s.n(l);n.Z=function(e){return(0,t.jsxs)("div",{className:"z-1090 d-flex flex-column justify-content-center align-items-center",style:{height:"100px"},children:[void 0!==e.children&&(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(r(),{className:"p2",statusCode:void 0!==e.code?e.code:500,title:e.children})}),(0,t.jsx)("div",{className:"p2",children:(0,t.jsx)(a.Z,{})})]})}},8029:function(e,n,s){"use strict";s.d(n,{P:function(){return i},t:function(){return c}});var t=s(7437),a=s(2265),l=s(5127),r=s(5278);let i=(0,a.createContext)({Info:e=>{},Error:e=>{}}),c=e=>{let{children:n}=e,[s,c]=(0,a.useState)({value:{},index:0}),o=(e,n)=>{c(s=>(s.value[s.index]={text:e,type:n},s.index++,{...s}))};return(0,t.jsxs)(i.Provider,{value:{Info:e=>{console.log(e),o(e,"success")},Error:e=>{console.error(e),o(e,"danger")}},children:[(0,t.jsx)(r.Z,{className:"p-3",position:"top-center",containerPosition:"fixed",style:{zIndex:1},children:Object.entries(s.value).map(e=>{let[n,a]=e;return(0,t.jsxs)(l.Z,{role:"alert","aria-live":"assertive",show:!0,bg:a.type,onClose:()=>{let e=s.value;delete e[n],c({...s,value:e}),console.log("close: "+n)},"aria-atomic":"true",delay:4e3,autohide:!0,animation:!0,children:[(0,t.jsxs)(l.Z.Header,{children:[(0,t.jsx)("strong",{className:"me-auto",children:"Notification"}),(0,t.jsx)("small",{className:"text-muted",children:"just now"})]}),(0,t.jsx)(l.Z.Body,{className:"text-center",children:a.text})]},"toast"+n)})}),n]})}},682:function(e,n,s){"use strict";s.d(n,{Jg:function(){return o},NZ:function(){return c},Vf:function(){return i}});var t=s(7437),a=s(5628),l=s(2789),r=s(5749);let i=e=>(0,t.jsxs)(a.Z.Group,{as:l.Z,className:"mb-3",children:[(0,t.jsx)(a.Z.Label,{column:!0,sm:2,className:"nowrap",children:e.label}),(0,t.jsx)(r.Z,{sm:10,children:(0,t.jsx)(a.Z.Control,{value:null!==e.value?e.value:"",plaintext:e.plaintext,onChange:n=>void 0!==e.onChange&&e.onChange(n.target.value)})})]}),c=e=>(0,t.jsxs)(a.Z.Group,{as:l.Z,className:"mb-3",children:[(0,t.jsx)(a.Z.Label,{column:!0,sm:2,className:"nowrap",children:e.label}),(0,t.jsx)(r.Z,{sm:10,children:(0,t.jsx)(a.Z.Control,{as:"textarea",rows:5,value:e.value,onChange:n=>e.onChange(n.target.value)})})]}),o=e=>(0,t.jsxs)(a.Z.Group,{as:l.Z,className:"mb-3",children:[(0,t.jsx)(a.Z.Label,{column:!0,sm:2,children:e.label}),(0,t.jsx)(r.Z,{sm:10,className:"d-flex align-items-center",children:(0,t.jsx)(a.Z.Check,{className:"d-flex align-items-center",type:"switch",checked:e.checked,onChange:()=>e.onChange()})})]})},1994:function(e,n,s){"use strict";s.r(n);var t=s(7437),a=s(2265),l=s(8490),r=s(1217),i=s(5628),c=s(5781),o=s(1017),d=s(7666),u=s(7332),h=s(534),m=s(4811),x=s(682),j=s(8029),v=s(713),b=s(2155),f=s(1375),Z=s.n(f),y=s(8597);let p=y.yE.subscribe.type,g=y.yE.protos.node.service.save_link_req,k=y.yE.protos.node.service.get_links_resp,C=y.yE.protos.node.service.link_req;n.default=function(){let[e,n]=(0,a.useState)({}),[s,f]=(0,a.useState)({value:!1}),[E,N]=(0,a.useState)(new y.yE.subscribe.link({name:"",url:"",type:p.reserve})),{data:w,error:_,isLoading:P,mutate:O}=(0,v.ZP)("/sublist",(0,b.PJ)(k)),L=(0,a.useContext)(j.P);return void 0!==_?(0,t.jsx)(Z(),{statusCode:_.code,title:_.msg}):P||void 0===w?(0,t.jsx)(m.Z,{}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.Z,{className:"mb-3",children:[(0,t.jsx)(c.Z,{variant:"flush",children:null!==w.links&&Object.entries(w.links).sort((e,n)=>e<=n?-1:1).map(s=>{let[a,l]=s,r=new y.yE.subscribe.link(l);return(0,t.jsxs)(c.Z.Item,{as:"label",style:{border:"0ch",borderBottom:"1px solid #dee2e6"},children:[(0,t.jsx)(i.Z.Check,{inline:!0,type:"checkbox",checked:void 0!==e[r.name]&&e[r.name],onChange:e=>{n(n=>(n[r.name]=e.target.checked,{...n}))}}),(0,t.jsx)(o.Z,{trigger:"click",placement:"auto-end",overlay:(0,t.jsx)(d.Z,{children:(0,t.jsx)(d.Z.Body,{children:r.url})}),children:(0,t.jsx)("span",{children:r.name})})]},r.name)})}),(0,t.jsxs)(h.Z,{children:[(0,t.jsxs)(l.Z,{variant:"outline-primary",className:"me-1",disabled:s.value,onClick:()=>{f({value:!0}),(0,b.Uo)("/sub",{method:"PATCH",body:C.encode({names:Object.keys(e).filter(n=>e[n])}).finish()}).then(async e=>{let{error:n}=e;void 0!==n?L.Error("Update failed ".concat(n.code,"| ").concat(await n.msg)):L.Info("Update successfully"),f({value:!1})})},children:[s.value&&(0,t.jsx)(u.Z,{animation:"border",size:"sm"}),"UPDATE"]}),(0,t.jsx)(l.Z,{variant:"outline-danger",onClick:()=>{(0,b.Uo)("/sub",{method:"DELETE",body:C.encode({names:Object.keys(e).filter(n=>e[n])}).finish()}).then(async n=>{let{error:s}=n;void 0!==s?L.Error("delete ".concat(Object.keys(e)," failed, ").concat(s.code,"| ").concat(await s.msg)):O()})},children:"DELETE"})]})]}),(0,t.jsx)(r.Z,{children:(0,t.jsxs)(r.Z.Body,{children:[(0,t.jsx)(x.Vf,{label:"Name",value:E.name,onChange:e=>N(new y.yE.subscribe.link({...E,name:e}))}),(0,t.jsx)(x.Vf,{label:"Link",value:E.url,onChange:e=>N(new y.yE.subscribe.link({...E,url:e}))}),(0,t.jsx)(l.Z,{variant:"outline-primary",onClick:async()=>{""!==E.name&&""!==E.url&&(0,b.Uo)("/sub",{body:g.encode({links:[E]}).finish()}).then(async e=>{let{error:n}=e;void 0!==n?L.Error("save link ".concat(E.url," failed, ").concat(n.code,"| ").concat(await n.msg)):O()})},children:"ADD"})]})})]})}}},function(e){e.O(0,[216,236,331,422,230,58,587,468,971,472,744],function(){return e(e.s=7752)}),_N_E=e.O()}]);
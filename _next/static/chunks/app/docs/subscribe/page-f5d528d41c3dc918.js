(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[129],{7752:function(e,n,t){Promise.resolve().then(t.bind(t,161))},6491:function(e,n,t){"use strict";var s=t(7437),a=t(477),r=t(2283),i=t.n(r);n.Z=function(e){return(0,s.jsxs)("div",{className:"z-1090 d-flex flex-column justify-content-center align-items-center",style:{height:"100px"},children:[void 0!==e.children&&(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(i(),{className:"p2",statusCode:void 0!==e.code?e.code:500,title:e.children})}),(0,s.jsx)("div",{className:"p2",children:(0,s.jsx)(a.Z,{})})]})}},6756:function(e,n,t){"use strict";t.d(n,{P:function(){return l},t:function(){return o}});var s=t(7437),a=t(2265),r=t(4349),i=t(4051);let l=(0,a.createContext)({Info:e=>{},Error:e=>{}}),o=e=>{let{children:n}=e,[t,o]=(0,a.useState)({value:{},index:0}),c=(e,n)=>o(t=>({value:{...t.value,[t.index]:{text:e,type:n}},index:t.index+1}));return(0,s.jsxs)(l.Provider,{value:{Info:e=>{console.log(e),c(e,"success")},Error:e=>{console.error(e),c(e,"danger")}},children:[(0,s.jsx)(r.Z,{className:"p-3",position:"top-center",containerPosition:"fixed",style:{zIndex:999999},children:Object.entries(t.value).map(e=>{let[n,a]=e;return(0,s.jsxs)(i.Z,{role:"alert","aria-live":"assertive",show:!0,bg:a.type,onClose:()=>{let e=t.value;delete e[n],o({...t,value:e}),console.log("close: "+n)},"aria-atomic":"true",delay:4e3,autohide:!0,animation:!0,children:[(0,s.jsxs)(i.Z.Header,{children:[(0,s.jsx)("strong",{className:"me-auto",children:"Notification"}),(0,s.jsx)("small",{className:"text-muted",children:"just now"})]}),(0,s.jsx)(i.Z.Body,{className:"text-center",children:a.text})]},"toast"+n)})}),n]})}},9318:function(e,n,t){"use strict";t.d(n,{CX:function(){return w},NZ:function(){return p},Vf:function(){return x},W2:function(){return g},sr:function(){return j},u5:function(){return f},yh:function(){return v}});var s=t(7437),a=t(7386),r=t(4370),i=t(5107),l=t(9317),o=t(5914),c=t(590),u=t(9252),d=t(6879),m=t(8168),h=t(2265);class f{constructor(e){this.label=e.label,this.value=e.value,this.label_children=e.label_children}}let x=e=>(0,s.jsxs)(l.Z.Group,{as:o.Z,className:e.mb?e.mb:"mb-2",children:[(0,s.jsx)(l.Z.Label,{column:!0,sm:2,className:"nowrap",children:e.label}),(0,s.jsx)(c.Z,{sm:10,children:(0,s.jsxs)(u.Z,{className:e.mb?e.mb:"mb-2",children:[e.reminds&&e.reminds.length?(0,s.jsxs)(a.Z,{children:[(0,s.jsx)(a.Z.Toggle,{variant:"outline-secondary",id:"dropdown-basic"}),(0,s.jsx)(r.Z,{style:{maxHeight:"300px",overflowY:"auto"},children:e.reminds.map(n=>(0,s.jsxs)(i.Z,{onClick:()=>e.onChange&&e.onChange(n.value),children:[(0,s.jsx)("b",{children:n.label}),n.label_children&&n.label_children.map(e=>(0,s.jsx)("div",{children:(0,s.jsx)("span",{className:"text-body-secondary",children:e})},e))]},n.value))})]}):(0,s.jsx)(s.Fragment,{}),e.url?(0,s.jsx)("a",{className:"mt-1",href:e.url,target:"_blank",children:e.value}):(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(l.Z.Control,{value:e.value,plaintext:e.plaintext,placeholder:e.placeholder,onChange:e.onChange?n=>{e.onChange(n.target.value)}:void 0})})]})})]}),p=e=>(0,s.jsxs)(l.Z.Group,{as:o.Z,className:"mb-2",children:[(0,s.jsx)(l.Z.Label,{column:!0,sm:2,className:"nowrap",children:e.label}),(0,s.jsx)(c.Z,{sm:10,children:(0,s.jsx)(l.Z.Control,{as:"textarea",rows:5,value:e.value,onChange:n=>e.onChange(n.target.value)})})]});function v(e){var n;let[t,a]=(0,h.useState)({value:""});return(0,s.jsxs)(l.Z.Group,{as:o.Z,className:"mb-3",children:[(0,s.jsx)(l.Z.Label,{column:!0,sm:2,className:"nowrap",children:e.title}),e.data&&e.data.map((n,t)=>(0,s.jsx)(c.Z,{sm:{span:10,offset:0!==t?2:0},children:(0,s.jsxs)(u.Z,{className:"mb-2",children:[(0,s.jsx)(l.Z.Control,{value:n,onChange:n=>{e.data[t]=n.target.value,e.onChange(e.data?e.data:[])}}),(0,s.jsx)(d.Z,{variant:"outline-danger",onClick:()=>{e.data&&(e.data.splice(t,1),e.onChange(e.data))},children:(0,s.jsx)("i",{className:"bi bi-x-lg"})})]})},t)),(0,s.jsx)(c.Z,{sm:{span:10,offset:(null===(n=e.data)||void 0===n?void 0:n.length)!==0?2:0},children:(0,s.jsxs)(u.Z,{className:"mb-2",children:[(0,s.jsx)(l.Z.Control,{value:t.value,onChange:e=>a({value:e.target.value})}),(0,s.jsx)(d.Z,{variant:"outline-success",onClick:()=>{e.data?(e.data.push(t.value),e.onChange(e.data)):e.onChange([t.value])},children:(0,s.jsx)("i",{className:"bi bi-plus-lg"})})]})})]})}function w(e){var n;let[t,a]=(0,h.useState)({value:""});return(0,s.jsxs)(l.Z.Group,{as:o.Z,className:"mb-3",children:[(0,s.jsx)(l.Z.Label,{column:!0,sm:2,className:"nowrap",children:e.title}),e.data&&e.data.map((n,t)=>(0,s.jsx)(c.Z,{sm:{span:10,offset:0!==t?2:0},children:(0,s.jsxs)(u.Z,{className:"mb-2",children:[(0,s.jsx)(l.Z.Control,{value:new TextDecoder().decode(n),as:e.textarea?"textarea":void 0,onChange:n=>{e.data[t]=new TextEncoder().encode(n.target.value),e.onChange(e.data?e.data:[])}}),(0,s.jsx)(d.Z,{variant:"outline-danger",onClick:()=>{e.data&&(e.data.splice(t,1),e.onChange(e.data))},children:(0,s.jsx)("i",{className:"bi bi-x-lg"})})]})},t)),(0,s.jsx)(c.Z,{sm:{span:10,offset:(null===(n=e.data)||void 0===n?void 0:n.length)!==0?2:0},children:(0,s.jsxs)(u.Z,{className:"mb-2",children:[(0,s.jsx)(l.Z.Control,{as:e.textarea?"textarea":void 0,value:t.value,onChange:e=>a({value:e.target.value})}),(0,s.jsx)(d.Z,{variant:"outline-success",onClick:()=>{let n=new TextEncoder().encode(t.value);e.data?e.data.push(n):e.data=[n],e.onChange(e.data)},children:(0,s.jsx)("i",{className:"bi bi-plus-lg"})})]})})]})}function j(e){return(0,s.jsxs)(l.Z.Group,{as:o.Z,className:e.mb?e.mb:"mb-2",children:[(0,s.jsx)(l.Z.Label,{column:!0,sm:2,className:"nowrap",children:e.title}),(0,s.jsx)(c.Z,{sm:{span:10,offset:0},children:(0,s.jsx)(u.Z,{className:e.mb?e.mb:"mb-2"})}),e.data&&e.data.map((n,t)=>(0,s.jsx)(c.Z,{sm:{span:10,offset:2},className:"mt-0",children:(0,s.jsx)(u.Z,{className:e.mb?e.mb:"mb-2",children:n})},t))]})}let g=e=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(m.Z,{className:"flex-grow-1 form-floating",children:[(0,s.jsxs)(m.Z.Header,{className:"d-flex justify-content-between",children:[e.title,!e.hideClose&&(0,s.jsxs)(d.Z,{variant:"outline-danger",size:"sm",onClick:e.onClose,children:[(0,s.jsx)("i",{className:"bi bi-x-lg"})," "]})]}),(0,s.jsx)(m.Z.Body,{children:e.children})]}),(0,s.jsx)("br",{})]})},5051:function(e,n,t){"use strict";t.d(n,{DL:function(){return d},Gy:function(){return c},O1:function(){return u},W:function(){return o},hr:function(){return h},pe:function(){return m}});var s=t(4272),a=t(7866),r=t(5299),i=t(7465),l=t(7682);class o extends s.v{static fromBinary(e,n){return new o().fromBinary(e,n)}static fromJson(e,n){return new o().fromJson(e,n)}static fromJsonString(e,n){return new o().fromJsonString(e,n)}static equals(e,n){return a.w.util.equals(o,e,n)}constructor(e){super(),a.w.util.initPartial(e,this)}}o.runtime=a.w,o.typeName="yuhaiin.protos.node.service.now_resp",o.fields=a.w.util.newFieldList(()=>[{no:1,name:"tcp",kind:"message",T:r.x},{no:2,name:"udp",kind:"message",T:r.x}]);class c extends s.v{static fromBinary(e,n){return new c().fromBinary(e,n)}static fromJson(e,n){return new c().fromJson(e,n)}static fromJsonString(e,n){return new c().fromJsonString(e,n)}static equals(e,n){return a.w.util.equals(c,e,n)}constructor(e){super(),this.tcp=!1,this.udp=!1,this.hash="",a.w.util.initPartial(e,this)}}c.runtime=a.w,c.typeName="yuhaiin.protos.node.service.use_req",c.fields=a.w.util.newFieldList(()=>[{no:1,name:"tcp",kind:"scalar",T:8},{no:2,name:"udp",kind:"scalar",T:8},{no:3,name:"hash",kind:"scalar",T:9}]);class u extends s.v{static fromBinary(e,n){return new u().fromBinary(e,n)}static fromJson(e,n){return new u().fromJson(e,n)}static fromJsonString(e,n){return new u().fromJsonString(e,n)}static equals(e,n){return a.w.util.equals(u,e,n)}constructor(e){super(),this.links=[],a.w.util.initPartial(e,this)}}u.runtime=a.w,u.typeName="yuhaiin.protos.node.service.save_link_req",u.fields=a.w.util.newFieldList(()=>[{no:1,name:"links",kind:"message",T:i.p,repeated:!0}]);class d extends s.v{static fromBinary(e,n){return new d().fromBinary(e,n)}static fromJson(e,n){return new d().fromJson(e,n)}static fromJsonString(e,n){return new d().fromJsonString(e,n)}static equals(e,n){return a.w.util.equals(d,e,n)}constructor(e){super(),this.names=[],a.w.util.initPartial(e,this)}}d.runtime=a.w,d.typeName="yuhaiin.protos.node.service.link_req",d.fields=a.w.util.newFieldList(()=>[{no:1,name:"names",kind:"scalar",T:9,repeated:!0}]);class m extends s.v{static fromBinary(e,n){return new m().fromBinary(e,n)}static fromJson(e,n){return new m().fromJson(e,n)}static fromJsonString(e,n){return new m().fromJsonString(e,n)}static equals(e,n){return a.w.util.equals(m,e,n)}constructor(e){super(),this.links={},a.w.util.initPartial(e,this)}}m.runtime=a.w,m.typeName="yuhaiin.protos.node.service.get_links_resp",m.fields=a.w.util.newFieldList(()=>[{no:1,name:"links",kind:"map",K:9,V:{kind:"message",T:i.p}}]);class h extends s.v{static fromBinary(e,n){return new h().fromBinary(e,n)}static fromJson(e,n){return new h().fromJson(e,n)}static fromJsonString(e,n){return new h().fromJsonString(e,n)}static equals(e,n){return a.w.util.equals(h,e,n)}constructor(e){super(),this.tag="",this.type=l.f.node,this.hash="",a.w.util.initPartial(e,this)}}h.runtime=a.w,h.typeName="yuhaiin.protos.node.service.save_tag_req",h.fields=a.w.util.newFieldList(()=>[{no:1,name:"tag",kind:"scalar",T:9},{no:3,name:"type",kind:"enum",T:a.w.getEnumType(l.f)},{no:2,name:"hash",kind:"scalar",T:9}])},7465:function(e,n,t){"use strict";t.d(n,{d:function(){return a},p:function(){return l}});var s,a,r=t(7866),i=t(4272);(s=a||(a={}))[s.reserve=0]="reserve",s[s.trojan=1]="trojan",s[s.vmess=2]="vmess",s[s.shadowsocks=3]="shadowsocks",s[s.shadowsocksr=4]="shadowsocksr",r.w.util.setEnumType(a,"yuhaiin.subscribe.type",[{no:0,name:"reserve"},{no:1,name:"trojan"},{no:2,name:"vmess"},{no:3,name:"shadowsocks"},{no:4,name:"shadowsocksr"}]);class l extends i.v{static fromBinary(e,n){return new l().fromBinary(e,n)}static fromJson(e,n){return new l().fromJson(e,n)}static fromJsonString(e,n){return new l().fromJsonString(e,n)}static equals(e,n){return r.w.util.equals(l,e,n)}constructor(e){super(),this.name="",this.type=0,this.url="",r.w.util.initPartial(e,this)}}l.runtime=r.w,l.typeName="yuhaiin.subscribe.link",l.fields=r.w.util.newFieldList(()=>[{no:1,name:"name",kind:"scalar",T:9},{no:2,name:"type",kind:"enum",T:r.w.getEnumType(a)},{no:3,name:"url",kind:"scalar",T:9}])},7682:function(e,n,t){"use strict";t.d(n,{f:function(){return a},p:function(){return l}});var s,a,r=t(7866),i=t(4272);(s=a||(a={}))[s.node=0]="node",s[s.mirror=1]="mirror",r.w.util.setEnumType(a,"yuhaiin.tag.tag_type",[{no:0,name:"node"},{no:1,name:"mirror"}]);class l extends i.v{static fromBinary(e,n){return new l().fromBinary(e,n)}static fromJson(e,n){return new l().fromJson(e,n)}static fromJsonString(e,n){return new l().fromJsonString(e,n)}static equals(e,n){return r.w.util.equals(l,e,n)}constructor(e){super(),this.tag="",this.type=0,this.hash=[],r.w.util.initPartial(e,this)}}l.runtime=r.w,l.typeName="yuhaiin.tag.tags",l.fields=r.w.util.newFieldList(()=>[{no:1,name:"tag",kind:"scalar",T:9},{no:3,name:"type",kind:"enum",T:r.w.getEnumType(a)},{no:2,name:"hash",kind:"scalar",T:9,repeated:!0}])},161:function(e,n,t){"use strict";t.r(n);var s=t(7437),a=t(2265),r=t(8168),i=t(2389),l=t(9317),o=t(13),c=t(680),u=t(6879),d=t(477),m=t(4497),h=t(6491),f=t(9318),x=t(6756),p=t(1252),v=t(8224),w=t(2283),j=t.n(w),g=t(7465),y=t(5051);n.default=function(){let[e,n]=(0,a.useState)({}),[t,w]=(0,a.useState)({value:!1}),[b,Z]=(0,a.useState)(new g.p({name:"",url:"",type:g.d.reserve})),{data:k,error:N,isLoading:C,mutate:J}=(0,p.ZP)("/sublist",(0,v.D4)(new y.pe)),T=(0,a.useContext)(x.P);return void 0!==N?(0,s.jsx)(j(),{statusCode:N.code,title:N.msg}):C||void 0===k?(0,s.jsx)(h.Z,{}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.Z,{className:"mb-3",children:[(0,s.jsx)(i.Z,{variant:"flush",children:null!==k.links&&Object.entries(k.links).sort((e,n)=>e<=n?-1:1).map(t=>{let[a,r]=t,u=new g.p(r);return(0,s.jsxs)(i.Z.Item,{style:{border:"0ch",borderBottom:"1px solid #dee2e6"},action:!0,as:"button",onClick:()=>{e[u.name]=!e[u.name],n({...e})},children:[(0,s.jsx)(l.Z.Check,{inline:!0,type:"checkbox",checked:e[u.name]}),(0,s.jsx)(o.Z,{trigger:"click",placement:"auto-end",overlay:(0,s.jsx)(c.Z,{children:(0,s.jsx)(c.Z.Body,{children:u.url})}),children:(0,s.jsx)("span",{children:u.name})})]},u.name)})}),(0,s.jsxs)(m.Z,{children:[(0,s.jsxs)(u.Z,{variant:"outline-primary",className:"me-1",disabled:t.value,onClick:()=>{w({value:!0}),(0,v.Uo)("/sub",{method:"PATCH",body:new y.DL({names:Object.keys(e).filter(n=>e[n])}).toBinary()}).then(async e=>{let{error:n}=e;void 0!==n?T.Error("Update failed ".concat(n.code,"| ").concat(await n.msg)):T.Info("Update successfully"),w({value:!1})})},children:[t.value&&(0,s.jsx)(d.Z,{animation:"border",size:"sm"}),"UPDATE"]}),(0,s.jsx)(u.Z,{variant:"outline-danger",onClick:()=>{(0,v.Uo)("/sub",{method:"DELETE",body:new y.DL({names:Object.keys(e).filter(n=>e[n])}).toBinary()}).then(async n=>{let{error:t}=n;void 0!==t?T.Error("delete ".concat(Object.keys(e)," failed, ").concat(t.code,"| ").concat(await t.msg)):J()})},children:"DELETE"})]})]}),(0,s.jsx)(r.Z,{children:(0,s.jsxs)(r.Z.Body,{children:[(0,s.jsx)(f.Vf,{label:"Name",value:b.name,onChange:e=>Z(new g.p({...b,name:e}))}),(0,s.jsx)(f.Vf,{label:"Link",value:b.url,onChange:e=>Z(new g.p({...b,url:e}))}),(0,s.jsx)(u.Z,{variant:"outline-primary",onClick:async()=>{""!==b.name&&""!==b.url&&(0,v.Uo)("/sub",{body:new y.O1({links:[b]}).toBinary()}).then(async e=>{let{error:n}=e;void 0!==n?T.Error("save link ".concat(b.url," failed, ").concat(n.code,"| ").concat(await n.msg)):J()})},children:"ADD"})]})})]})}}},function(e){e.O(0,[465,149,329,728,318,713,13,860,971,69,744],function(){return e(e.s=7752)}),_N_E=e.O()}]);
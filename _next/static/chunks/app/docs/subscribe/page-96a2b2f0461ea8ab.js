(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[129],{7752:function(e,n,t){Promise.resolve().then(t.bind(t,161))},6491:function(e,n,t){"use strict";var r=t(7437),s=t(477),i=t(2283),a=t.n(i);n.Z=function(e){return(0,r.jsxs)("div",{className:"z-1090 d-flex flex-column justify-content-center align-items-center",style:{height:"100px"},children:[void 0!==e.children&&(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(a(),{className:"p2",statusCode:void 0!==e.code?e.code:500,title:e.children})}),(0,r.jsx)("div",{className:"p2",children:(0,r.jsx)(s.Z,{})})]})}},6756:function(e,n,t){"use strict";t.d(n,{P:function(){return o},t:function(){return l}});var r=t(7437),s=t(2265),i=t(4349),a=t(7426);let o=(0,s.createContext)({Info:e=>{},Error:e=>{}}),l=e=>{let{children:n}=e,[t,l]=(0,s.useState)({value:{},index:0}),c=(e,n)=>l(t=>({value:{...t.value,[t.index]:{text:e,type:n}},index:t.index+1}));return(0,r.jsxs)(o.Provider,{value:{Info:e=>{console.log(e),c(e,"success")},Error:e=>{console.error(e),c(e,"danger")}},children:[(0,r.jsx)(i.Z,{className:"p-3",position:"top-center",containerPosition:"fixed",style:{zIndex:999999},children:Object.entries(t.value).map(e=>{let[n,s]=e;return(0,r.jsxs)(a.Z,{role:"alert","aria-live":"assertive",show:!0,bg:s.type,onClose:()=>{let e=t.value;delete e[n],l({...t,value:e}),console.log("close: "+n)},"aria-atomic":"true",delay:4e3,autohide:!0,animation:!0,children:[(0,r.jsxs)(a.Z.Header,{children:[(0,r.jsx)("strong",{className:"me-auto",children:"Notification"}),(0,r.jsx)("small",{className:"text-muted",children:"just now"})]}),(0,r.jsx)(a.Z.Body,{className:"text-center",children:s.text})]},"toast"+n)})}),n]})}},5051:function(e,n,t){"use strict";t.d(n,{DL:function(){return d},Gy:function(){return c},O1:function(){return u},W:function(){return l},hr:function(){return f},pe:function(){return m}});var r=t(4272),s=t(7866),i=t(5299),a=t(7465),o=t(7682);class l extends r.v{static fromBinary(e,n){return new l().fromBinary(e,n)}static fromJson(e,n){return new l().fromJson(e,n)}static fromJsonString(e,n){return new l().fromJsonString(e,n)}static equals(e,n){return s.w.util.equals(l,e,n)}constructor(e){super(),s.w.util.initPartial(e,this)}}l.runtime=s.w,l.typeName="yuhaiin.protos.node.service.now_resp",l.fields=s.w.util.newFieldList(()=>[{no:1,name:"tcp",kind:"message",T:i.x},{no:2,name:"udp",kind:"message",T:i.x}]);class c extends r.v{static fromBinary(e,n){return new c().fromBinary(e,n)}static fromJson(e,n){return new c().fromJson(e,n)}static fromJsonString(e,n){return new c().fromJsonString(e,n)}static equals(e,n){return s.w.util.equals(c,e,n)}constructor(e){super(),this.tcp=!1,this.udp=!1,this.hash="",s.w.util.initPartial(e,this)}}c.runtime=s.w,c.typeName="yuhaiin.protos.node.service.use_req",c.fields=s.w.util.newFieldList(()=>[{no:1,name:"tcp",kind:"scalar",T:8},{no:2,name:"udp",kind:"scalar",T:8},{no:3,name:"hash",kind:"scalar",T:9}]);class u extends r.v{static fromBinary(e,n){return new u().fromBinary(e,n)}static fromJson(e,n){return new u().fromJson(e,n)}static fromJsonString(e,n){return new u().fromJsonString(e,n)}static equals(e,n){return s.w.util.equals(u,e,n)}constructor(e){super(),this.links=[],s.w.util.initPartial(e,this)}}u.runtime=s.w,u.typeName="yuhaiin.protos.node.service.save_link_req",u.fields=s.w.util.newFieldList(()=>[{no:1,name:"links",kind:"message",T:a.p,repeated:!0}]);class d extends r.v{static fromBinary(e,n){return new d().fromBinary(e,n)}static fromJson(e,n){return new d().fromJson(e,n)}static fromJsonString(e,n){return new d().fromJsonString(e,n)}static equals(e,n){return s.w.util.equals(d,e,n)}constructor(e){super(),this.names=[],s.w.util.initPartial(e,this)}}d.runtime=s.w,d.typeName="yuhaiin.protos.node.service.link_req",d.fields=s.w.util.newFieldList(()=>[{no:1,name:"names",kind:"scalar",T:9,repeated:!0}]);class m extends r.v{static fromBinary(e,n){return new m().fromBinary(e,n)}static fromJson(e,n){return new m().fromJson(e,n)}static fromJsonString(e,n){return new m().fromJsonString(e,n)}static equals(e,n){return s.w.util.equals(m,e,n)}constructor(e){super(),this.links={},s.w.util.initPartial(e,this)}}m.runtime=s.w,m.typeName="yuhaiin.protos.node.service.get_links_resp",m.fields=s.w.util.newFieldList(()=>[{no:1,name:"links",kind:"map",K:9,V:{kind:"message",T:a.p}}]);class f extends r.v{static fromBinary(e,n){return new f().fromBinary(e,n)}static fromJson(e,n){return new f().fromJson(e,n)}static fromJsonString(e,n){return new f().fromJsonString(e,n)}static equals(e,n){return s.w.util.equals(f,e,n)}constructor(e){super(),this.tag="",this.type=o.f.node,this.hash="",s.w.util.initPartial(e,this)}}f.runtime=s.w,f.typeName="yuhaiin.protos.node.service.save_tag_req",f.fields=s.w.util.newFieldList(()=>[{no:1,name:"tag",kind:"scalar",T:9},{no:3,name:"type",kind:"enum",T:s.w.getEnumType(o.f)},{no:2,name:"hash",kind:"scalar",T:9}])},7465:function(e,n,t){"use strict";t.d(n,{d:function(){return s},p:function(){return o}});var r,s,i=t(7866),a=t(4272);(r=s||(s={}))[r.reserve=0]="reserve",r[r.trojan=1]="trojan",r[r.vmess=2]="vmess",r[r.shadowsocks=3]="shadowsocks",r[r.shadowsocksr=4]="shadowsocksr",i.w.util.setEnumType(s,"yuhaiin.subscribe.type",[{no:0,name:"reserve"},{no:1,name:"trojan"},{no:2,name:"vmess"},{no:3,name:"shadowsocks"},{no:4,name:"shadowsocksr"}]);class o extends a.v{static fromBinary(e,n){return new o().fromBinary(e,n)}static fromJson(e,n){return new o().fromJson(e,n)}static fromJsonString(e,n){return new o().fromJsonString(e,n)}static equals(e,n){return i.w.util.equals(o,e,n)}constructor(e){super(),this.name="",this.type=0,this.url="",i.w.util.initPartial(e,this)}}o.runtime=i.w,o.typeName="yuhaiin.subscribe.link",o.fields=i.w.util.newFieldList(()=>[{no:1,name:"name",kind:"scalar",T:9},{no:2,name:"type",kind:"enum",T:i.w.getEnumType(s)},{no:3,name:"url",kind:"scalar",T:9}])},7682:function(e,n,t){"use strict";t.d(n,{f:function(){return s},p:function(){return o}});var r,s,i=t(7866),a=t(4272);(r=s||(s={}))[r.node=0]="node",r[r.mirror=1]="mirror",i.w.util.setEnumType(s,"yuhaiin.tag.tag_type",[{no:0,name:"node"},{no:1,name:"mirror"}]);class o extends a.v{static fromBinary(e,n){return new o().fromBinary(e,n)}static fromJson(e,n){return new o().fromJson(e,n)}static fromJsonString(e,n){return new o().fromJsonString(e,n)}static equals(e,n){return i.w.util.equals(o,e,n)}constructor(e){super(),this.tag="",this.type=0,this.hash=[],i.w.util.initPartial(e,this)}}o.runtime=i.w,o.typeName="yuhaiin.tag.tags",o.fields=i.w.util.newFieldList(()=>[{no:1,name:"tag",kind:"scalar",T:9},{no:3,name:"type",kind:"enum",T:i.w.getEnumType(s)},{no:2,name:"hash",kind:"scalar",T:9,repeated:!0}])},161:function(e,n,t){"use strict";t.r(n);var r=t(7437),s=t(2265),i=t(5914),a=t(590),o=t(6459),l=t(3098),c=t(6879),u=t(477),d=t(7374),m=t(7386),f=t(8647),h=t(9317),w=t(6491),p=t(6756),y=t(1252),v=t(8224),x=t(2283),g=t.n(x),j=t(7465),k=t(5051);n.default=function(){let[e,n]=(0,s.useState)({}),[t,x]=(0,s.useState)(new j.p({name:"",url:"",type:j.d.reserve})),{data:Z,error:b,isLoading:N,mutate:J}=(0,y.ZP)("/sublist",(0,v.D4)(new k.pe)),T=(0,s.useContext)(p.P);if(void 0!==b)return(0,r.jsx)(g(),{statusCode:b.code,title:b.msg});if(N||void 0===Z)return(0,r.jsx)(w.Z,{});let B=t=>{n({...e,[t]:!0}),(0,v.Uo)("/sub",{method:"PATCH",body:new k.DL({names:[t]}).toBinary()}).then(async r=>{let{error:s}=r;void 0!==s?T.Error("Update failed ".concat(s.code,"| ").concat(await s.msg)):T.Info("Update successfully"),n({...e,[t]:!1})})},q=e=>{(0,v.Uo)("/sub",{method:"DELETE",body:new k.DL({names:[e]}).toBinary()}).then(async n=>{let{error:t}=n;void 0!==t?T.Error("delete ".concat(e," failed, ").concat(t.code,"| ").concat(await t.msg)):J()})};return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(i.Z,{className:"row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4",children:[Z.links&&Object.entries(Z.links).sort((e,n)=>e<=n?-1:1).map(n=>{let[t,s]=n;return(0,r.jsx)(a.Z,{className:"mb-3",children:(0,r.jsxs)(o.Z,{className:"h-100",children:[(0,r.jsx)(o.Z.Header,{children:s.name}),(0,r.jsx)(o.Z.Body,{children:s.url}),(0,r.jsxs)(l.Z,{as:o.Z.Footer,className:"d-flex",children:[(0,r.jsxs)(c.Z,{variant:"outline-primary",onClick:()=>B(s.name),disabled:e[s.name],className:"w-100",children:[e[s.name]&&(0,r.jsx)(u.Z,{size:"sm",animation:"border",variant:"success"}),"Update"]}),(0,r.jsxs)(d.Z,{onSelect:e=>{"ok"===e&&q(s.name)},as:l.Z,variant:"outline-danger",title:"Remove",className:"w-100",children:[(0,r.jsx)(m.Z.Item,{eventKey:"ok",children:"OK"}),(0,r.jsx)(m.Z.Item,{eventKey:"cancel",children:"Cancel"})]})]})]})})}),(0,r.jsx)(a.Z,{className:"mb-3",children:(0,r.jsxs)(o.Z,{className:"h-100",children:[(0,r.jsx)(o.Z.Header,{children:"Add"}),(0,r.jsxs)(o.Z.Body,{children:[(0,r.jsx)(f.Z,{label:"Name",className:"mb-3",children:(0,r.jsx)(h.Z.Control,{placeholder:"group1",value:t.name,onChange:e=>x(new j.p({...t,name:e.target.value}))})}),(0,r.jsx)(f.Z,{label:"Link",className:"mb-3",children:(0,r.jsx)(h.Z.Control,{placeholder:"https://www.example.com",value:t.url,onChange:e=>x(new j.p({...t,url:e.target.value}))})})]}),(0,r.jsx)(l.Z,{as:o.Z.Footer,children:(0,r.jsx)(c.Z,{variant:"outline-primary",onClick:async()=>{""!==t.name&&""!==t.url&&(0,v.Uo)("/sub",{body:new k.O1({links:[t]}).toBinary()}).then(async e=>{let{error:n}=e;void 0!==n?T.Error("save link ".concat(t.url," failed, ").concat(n.code,"| ").concat(await n.msg)):J()})},children:"ADD"})})]})})]})})}},3098:function(e,n,t){"use strict";var r=t(6480),s=t.n(r),i=t(2265),a=t(2865),o=t(7437);let l=i.forwardRef((e,n)=>{let{bsPrefix:t,size:r,vertical:i=!1,className:l,role:c="group",as:u="div",...d}=e,m=(0,a.vE)(t,"btn-group"),f=m;return i&&(f="".concat(m,"-vertical")),(0,o.jsx)(u,{...d,ref:n,role:c,className:s()(l,f,r&&"".concat(m,"-").concat(r))})});l.displayName="ButtonGroup",n.Z=l},7374:function(e,n,t){"use strict";t.d(n,{Z:function(){return h}});var r=t(2265),s=t(4404),i=t.n(s),a=t(7386),o=t(9538),l=t(4370);let c=i().oneOf(["start","end"]),u=i().oneOfType([c,i().shape({sm:c}),i().shape({md:c}),i().shape({lg:c}),i().shape({xl:c}),i().shape({xxl:c}),i().object]);var d=t(7437);let m={id:i().string,href:i().string,onClick:i().func,title:i().node.isRequired,disabled:i().bool,align:u,menuRole:i().string,renderMenuOnMount:i().bool,rootCloseEvent:i().string,menuVariant:i().oneOf(["dark"]),flip:i().bool,bsPrefix:i().string,variant:i().string,size:i().string},f=r.forwardRef((e,n)=>{let{title:t,children:r,bsPrefix:s,rootCloseEvent:i,variant:c,size:u,menuRole:m,renderMenuOnMount:f,disabled:h,href:w,id:p,menuVariant:y,flip:v,...x}=e;return(0,d.jsxs)(a.Z,{ref:n,...x,children:[(0,d.jsx)(o.Z,{id:p,href:w,size:u,variant:c,disabled:h,childBsPrefix:s,children:t}),(0,d.jsx)(l.Z,{role:m,renderOnMount:f,rootCloseEvent:i,variant:y,flip:v,children:r})]})});f.displayName="DropdownButton",f.propTypes=m;var h=f}},function(e){e.O(0,[453,154,633,728,386,713,860,971,69,744],function(){return e(e.s=7752)}),_N_E=e.O()}]);
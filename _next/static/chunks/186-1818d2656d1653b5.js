"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[186],{6491:function(n,e,t){var i=t(7437),s=t(477),r=t(2283),a=t.n(r);e.Z=function(n){return(0,i.jsxs)("div",{className:"z-1090 d-flex flex-column justify-content-center align-items-center",style:{height:"100px"},children:[void 0!==n.children&&(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(a(),{className:"p2",statusCode:void 0!==n.code?n.code:500,title:n.children})}),(0,i.jsx)("div",{className:"p2",children:(0,i.jsx)(s.Z,{})})]})}},5952:function(n,e,t){t.d(e,{b:function(){return v}});var i=t(7437),s=t(2265),r=t(6879),a=t(6060),o=t(7374),l=t(3098),u=t(7386),d=t(9317),c=t(1252),m=t(8224),h=t(6491),w=t(6756),f=t(5299),p=t(3525),y=t(1990);let v=n=>{let e=(0,s.useContext)(w.P),[t,o]=(0,s.useState)({data:""});return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(a.Z,{show:n.show,"aria-labelledby":"contained-modal-title-vcenter",size:"xl",onHide:()=>{n.onHide()},centered:!0,children:[!n.plaintext&&(0,i.jsx)(a.Z.Header,{closeButton:!0,children:(0,i.jsx)(a.Z.Title,{id:"contained-modal-title-vcenter",children:"Import JSON"})}),(0,i.jsx)(a.Z.Body,{children:(0,i.jsx)(d.Z.Control,{as:"textarea",readOnly:n.plaintext,value:n.data?n.data:t.data,style:{height:"65vh",fontFamily:"monospace"},onChange:n=>{o({data:n.target.value})}})}),(0,i.jsxs)(a.Z.Footer,{children:[(0,i.jsx)(r.Z,{variant:"outline-secondary",onClick:()=>{n.onHide()},children:"Close"}),(0,i.jsx)(()=>n.onSave?(0,i.jsx)(r.Z,{variant:"outline-primary",onClick:()=>{(0,m.Uo)("/node",{method:"PATCH",body:new f.x().fromJsonString(t.data).toBinary()}).then(async t=>{let{error:i}=t;if(void 0===i)e.Info("save successful"),void 0!==n.onSave&&n.onSave();else{let n=await i.msg;e.Error(n)}})},children:"Save"}):(0,i.jsx)(i.Fragment,{}),{})]})]})})};e.Z=function(n){var e;let t=(0,s.useContext)(w.P),[d,g]=(0,s.useState)({show:!1,data:""}),{data:x,error:k,isLoading:J,mutate:j}=(0,c.ZP)(!n.point&&n.hash?"/node":null,(0,m.D4)(new f.x,"POST",new p.Gm({value:n.hash}).toBinary()));return""===n.hash&&j(void 0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(v,{show:d.show,data:d.data,plaintext:!0,onHide:()=>g({...d,show:!1})}),(0,i.jsxs)(a.Z,{show:n.show,scrollable:!0,"aria-labelledby":"contained-modal-title-vcenter",size:"xl",onHide:()=>{n.onHide()},centered:!0,children:[(0,i.jsx)(a.Z.Header,{closeButton:!0,children:(0,i.jsx)(a.Z.Title,{id:"contained-modal-title-vcenter",children:n.hash})}),(0,i.jsx)(a.Z.Body,{children:(0,i.jsx)("fieldset",{disabled:!n.editable,children:k?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("h4",{className:"text-center my-2",children:[k.code," - ",k.msg]}),(0,i.jsx)("pre",{className:"text-center my-2 text-danger lead",children:k.raw})]}):J?(0,i.jsx)(h.Z,{}):(0,i.jsx)(y.E,{point:null!==(e=null!=x?x:n.point)&&void 0!==e?e:new f.x({}),groups:n.groups,onChange:n.editable?e=>{n.editable&&(n.hash&&j(e,!1),n.point&&n.onChangePoint&&n.onChangePoint(e))}:void 0})})}),(0,i.jsxs)(a.Z.Footer,{children:[n.onDelete&&(0,i.jsxs)(o.Z,{onSelect:e=>{"ok"===e&&n.onDelete&&(n.onHide(),n.onDelete())},as:l.Z,variant:"outline-danger",title:"Remove",children:[(0,i.jsx)(u.Z.Item,{eventKey:"ok",children:"OK"}),(0,i.jsx)(u.Z.Item,{eventKey:"cancel",children:"Cancel"})]}),!k&&!J&&(0,i.jsx)(r.Z,{variant:"outline-primary",onClick:()=>{var e,t,i;g({show:!0,data:(null!==(i=null!==(t=null==x?void 0:x.clone())&&void 0!==t?t:null===(e=n.point)||void 0===e?void 0:e.clone())&&void 0!==i?i:new f.x({})).toJsonString({prettySpaces:2})})},children:"JSON"}),(0,i.jsx)(r.Z,{variant:"outline-secondary",onClick:()=>{n.onHide()},children:"Close"}),(0,i.jsx)(()=>n.editable?(0,i.jsx)(r.Z,{variant:"outline-primary",disabled:J||k||!n.editable,onClick:()=>{var e;(0,m.Uo)("/node",{method:"PATCH",body:(null!==(e=null!=x?x:n.point)&&void 0!==e?e:new f.x({})).toBinary()}).then(async e=>{let{error:i}=e;if(void 0===i)t.Info("save successful"),void 0!==n.onSave&&n.onSave();else{let n=await i.msg;t.Error(n)}})},children:"Save"}):(0,i.jsx)(i.Fragment,{}),{})]})]})]})}},5051:function(n,e,t){t.d(e,{DL:function(){return c},Gy:function(){return u},O1:function(){return d},W:function(){return l},hr:function(){return h},pe:function(){return m}});var i=t(4272),s=t(7866),r=t(5299),a=t(7465),o=t(7682);class l extends i.v{static fromBinary(n,e){return new l().fromBinary(n,e)}static fromJson(n,e){return new l().fromJson(n,e)}static fromJsonString(n,e){return new l().fromJsonString(n,e)}static equals(n,e){return s.w.util.equals(l,n,e)}constructor(n){super(),s.w.util.initPartial(n,this)}}l.runtime=s.w,l.typeName="yuhaiin.protos.node.service.now_resp",l.fields=s.w.util.newFieldList(()=>[{no:1,name:"tcp",kind:"message",T:r.x},{no:2,name:"udp",kind:"message",T:r.x}]);class u extends i.v{static fromBinary(n,e){return new u().fromBinary(n,e)}static fromJson(n,e){return new u().fromJson(n,e)}static fromJsonString(n,e){return new u().fromJsonString(n,e)}static equals(n,e){return s.w.util.equals(u,n,e)}constructor(n){super(),this.tcp=!1,this.udp=!1,this.hash="",s.w.util.initPartial(n,this)}}u.runtime=s.w,u.typeName="yuhaiin.protos.node.service.use_req",u.fields=s.w.util.newFieldList(()=>[{no:1,name:"tcp",kind:"scalar",T:8},{no:2,name:"udp",kind:"scalar",T:8},{no:3,name:"hash",kind:"scalar",T:9}]);class d extends i.v{static fromBinary(n,e){return new d().fromBinary(n,e)}static fromJson(n,e){return new d().fromJson(n,e)}static fromJsonString(n,e){return new d().fromJsonString(n,e)}static equals(n,e){return s.w.util.equals(d,n,e)}constructor(n){super(),this.links=[],s.w.util.initPartial(n,this)}}d.runtime=s.w,d.typeName="yuhaiin.protos.node.service.save_link_req",d.fields=s.w.util.newFieldList(()=>[{no:1,name:"links",kind:"message",T:a.p,repeated:!0}]);class c extends i.v{static fromBinary(n,e){return new c().fromBinary(n,e)}static fromJson(n,e){return new c().fromJson(n,e)}static fromJsonString(n,e){return new c().fromJsonString(n,e)}static equals(n,e){return s.w.util.equals(c,n,e)}constructor(n){super(),this.names=[],s.w.util.initPartial(n,this)}}c.runtime=s.w,c.typeName="yuhaiin.protos.node.service.link_req",c.fields=s.w.util.newFieldList(()=>[{no:1,name:"names",kind:"scalar",T:9,repeated:!0}]);class m extends i.v{static fromBinary(n,e){return new m().fromBinary(n,e)}static fromJson(n,e){return new m().fromJson(n,e)}static fromJsonString(n,e){return new m().fromJsonString(n,e)}static equals(n,e){return s.w.util.equals(m,n,e)}constructor(n){super(),this.links={},s.w.util.initPartial(n,this)}}m.runtime=s.w,m.typeName="yuhaiin.protos.node.service.get_links_resp",m.fields=s.w.util.newFieldList(()=>[{no:1,name:"links",kind:"map",K:9,V:{kind:"message",T:a.p}}]);class h extends i.v{static fromBinary(n,e){return new h().fromBinary(n,e)}static fromJson(n,e){return new h().fromJson(n,e)}static fromJsonString(n,e){return new h().fromJsonString(n,e)}static equals(n,e){return s.w.util.equals(h,n,e)}constructor(n){super(),this.tag="",this.type=o.f.node,this.hash="",s.w.util.initPartial(n,this)}}h.runtime=s.w,h.typeName="yuhaiin.protos.node.service.save_tag_req",h.fields=s.w.util.newFieldList(()=>[{no:1,name:"tag",kind:"scalar",T:9},{no:3,name:"type",kind:"enum",T:s.w.getEnumType(o.f)},{no:2,name:"hash",kind:"scalar",T:9}])},4344:function(n,e,t){t.d(e,{BP:function(){return d}});var i=t(4272),s=t(7866),r=t(5299),a=t(7465),o=t(7682);class l extends i.v{static fromBinary(n,e){return new l().fromBinary(n,e)}static fromJson(n,e){return new l().fromJson(n,e)}static fromJsonString(n,e){return new l().fromJsonString(n,e)}static equals(n,e){return s.w.util.equals(l,n,e)}constructor(n){super(),this.links={},s.w.util.initPartial(n,this)}}l.runtime=s.w,l.typeName="yuhaiin.node.node",l.fields=s.w.util.newFieldList(()=>[{no:4,name:"tcp",kind:"message",T:r.x},{no:5,name:"udp",kind:"message",T:r.x},{no:2,name:"links",kind:"map",K:9,V:{kind:"message",T:a.p}},{no:3,name:"manager",kind:"message",T:d}]);class u extends i.v{static fromBinary(n,e){return new u().fromBinary(n,e)}static fromJson(n,e){return new u().fromJson(n,e)}static fromJsonString(n,e){return new u().fromJsonString(n,e)}static equals(n,e){return s.w.util.equals(u,n,e)}constructor(n){super(),this.nodesV2={},s.w.util.initPartial(n,this)}}u.runtime=s.w,u.typeName="yuhaiin.node.nodes",u.fields=s.w.util.newFieldList(()=>[{no:3,name:"nodesV2",jsonName:"node_hash_map",kind:"map",K:9,V:{kind:"scalar",T:9}}]);class d extends i.v{static fromBinary(n,e){return new d().fromBinary(n,e)}static fromJson(n,e){return new d().fromJson(n,e)}static fromJsonString(n,e){return new d().fromJsonString(n,e)}static equals(n,e){return s.w.util.equals(d,n,e)}constructor(n){super(),this.groupsV2={},this.nodes={},this.tags={},s.w.util.initPartial(n,this)}}d.runtime=s.w,d.typeName="yuhaiin.node.manager",d.fields=s.w.util.newFieldList(()=>[{no:2,name:"groupsV2",jsonName:"group_nodes_map",kind:"map",K:9,V:{kind:"message",T:u}},{no:3,name:"nodes",kind:"map",K:9,V:{kind:"message",T:r.x}},{no:4,name:"tags",kind:"map",K:9,V:{kind:"message",T:o.p}}])},7465:function(n,e,t){t.d(e,{d:function(){return s},p:function(){return o}});var i,s,r=t(7866),a=t(4272);(i=s||(s={}))[i.reserve=0]="reserve",i[i.trojan=1]="trojan",i[i.vmess=2]="vmess",i[i.shadowsocks=3]="shadowsocks",i[i.shadowsocksr=4]="shadowsocksr",r.w.util.setEnumType(s,"yuhaiin.subscribe.type",[{no:0,name:"reserve"},{no:1,name:"trojan"},{no:2,name:"vmess"},{no:3,name:"shadowsocks"},{no:4,name:"shadowsocksr"}]);class o extends a.v{static fromBinary(n,e){return new o().fromBinary(n,e)}static fromJson(n,e){return new o().fromJson(n,e)}static fromJsonString(n,e){return new o().fromJsonString(n,e)}static equals(n,e){return r.w.util.equals(o,n,e)}constructor(n){super(),this.name="",this.type=0,this.url="",r.w.util.initPartial(n,this)}}o.runtime=r.w,o.typeName="yuhaiin.subscribe.link",o.fields=r.w.util.newFieldList(()=>[{no:1,name:"name",kind:"scalar",T:9},{no:2,name:"type",kind:"enum",T:r.w.getEnumType(s)},{no:3,name:"url",kind:"scalar",T:9}])},7682:function(n,e,t){t.d(e,{f:function(){return s},p:function(){return o}});var i,s,r=t(7866),a=t(4272);(i=s||(s={}))[i.node=0]="node",i[i.mirror=1]="mirror",r.w.util.setEnumType(s,"yuhaiin.tag.tag_type",[{no:0,name:"node"},{no:1,name:"mirror"}]);class o extends a.v{static fromBinary(n,e){return new o().fromBinary(n,e)}static fromJson(n,e){return new o().fromJson(n,e)}static fromJsonString(n,e){return new o().fromJsonString(n,e)}static equals(n,e){return r.w.util.equals(o,n,e)}constructor(n){super(),this.tag="",this.type=0,this.hash=[],r.w.util.initPartial(n,this)}}o.runtime=r.w,o.typeName="yuhaiin.tag.tags",o.fields=r.w.util.newFieldList(()=>[{no:1,name:"tag",kind:"scalar",T:9},{no:3,name:"type",kind:"enum",T:r.w.getEnumType(s)},{no:2,name:"hash",kind:"scalar",T:9,repeated:!0}])}}]);
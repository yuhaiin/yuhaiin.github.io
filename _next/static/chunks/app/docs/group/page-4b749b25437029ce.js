(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[962],{9475:function(e,t,n){Promise.resolve().then(n.bind(n,1437))},1437:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return I}});var s=n(7437),r=n(2265),o=n(477),i=n(5097),a=n(8168),c=n(2389),l=n(5914),u=n(590),d=n(7386),m=n(6480),h=n.n(m),p=n(2865);let f=r.forwardRef((e,t)=>{let{bsPrefix:n,size:r,vertical:o=!1,className:i,role:a="group",as:c="div",...l}=e,u=(0,p.vE)(n,"btn-group"),d=u;return o&&(d="".concat(u,"-vertical")),(0,s.jsx)(c,{...l,ref:t,role:a,className:h()(i,d,r&&"".concat(u,"-").concat(r))})});f.displayName="ButtonGroup";var w=n(6879),g=n(5952),y=n(6491),v=n(6756),x=n(1252),j=n(8224),J=n(2283),N=n.n(J),b=n(9865),S=n(4344),k=n(4272),q=n(7866),B=n(5658);class T extends k.v{constructor(e){super(),this.seconds=B.q.zero,this.nanos=0,q.w.util.initPartial(e,this)}fromJson(e,t){if("string"!=typeof e)throw Error(`cannot decode google.protobuf.Duration from JSON: ${q.w.json.debug(e)}`);let n=e.match(/^(-?[0-9]+)(?:\.([0-9]+))?s/);if(null===n)throw Error(`cannot decode google.protobuf.Duration from JSON: ${q.w.json.debug(e)}`);let s=Number(n[1]);if(s>315576e6||s<-315576e6)throw Error(`cannot decode google.protobuf.Duration from JSON: ${q.w.json.debug(e)}`);if(this.seconds=B.q.parse(s),"string"==typeof n[2]){let e=n[2]+"0".repeat(9-n[2].length);this.nanos=parseInt(e),(s<0||Object.is(s,-0))&&(this.nanos=-this.nanos)}return this}toJson(e){if(Number(this.seconds)>315576e6||-315576e6>Number(this.seconds))throw Error("cannot encode google.protobuf.Duration to JSON: value out of range");let t=this.seconds.toString();if(0!==this.nanos){let e=Math.abs(this.nanos).toString();"000000"===(e="0".repeat(9-e.length)+e).substring(3)?e=e.substring(0,3):"000"===e.substring(6)&&(e=e.substring(0,6)),t+="."+e,this.nanos<0&&0==Number(this.seconds)&&(t="-"+t)}return t+"s"}static fromBinary(e,t){return new T().fromBinary(e,t)}static fromJson(e,t){return new T().fromJson(e,t)}static fromJsonString(e,t){return new T().fromJsonString(e,t)}static equals(e,t){return q.w.util.equals(T,e,t)}}T.runtime=q.w,T.typeName="google.protobuf.Duration",T.fields=q.w.util.newFieldList(()=>[{no:1,name:"seconds",kind:"scalar",T:3},{no:2,name:"nanos",kind:"scalar",T:5}]);class Z extends k.v{static fromBinary(e,t){return new Z().fromBinary(e,t)}static fromJson(e,t){return new Z().fromJson(e,t)}static fromJsonString(e,t){return new Z().fromJsonString(e,t)}static equals(e,t){return q.w.util.equals(Z,e,t)}constructor(e){super(),this.url="",q.w.util.initPartial(e,this)}}Z.runtime=q.w,Z.typeName="yuhaiin.latency.http",Z.fields=q.w.util.newFieldList(()=>[{no:1,name:"url",kind:"scalar",T:9}]);class _ extends k.v{static fromBinary(e,t){return new _().fromBinary(e,t)}static fromJson(e,t){return new _().fromJson(e,t)}static fromJsonString(e,t){return new _().fromJsonString(e,t)}static equals(e,t){return q.w.util.equals(_,e,t)}constructor(e){super(),this.host="",this.targetDomain="",q.w.util.initPartial(e,this)}}_.runtime=q.w,_.typeName="yuhaiin.latency.dns",_.fields=q.w.util.newFieldList(()=>[{no:1,name:"host",kind:"scalar",T:9},{no:2,name:"target_domain",jsonName:"target_name",kind:"scalar",T:9}]);class O extends k.v{static fromBinary(e,t){return new O().fromBinary(e,t)}static fromJson(e,t){return new O().fromJson(e,t)}static fromJsonString(e,t){return new O().fromJsonString(e,t)}static equals(e,t){return q.w.util.equals(O,e,t)}constructor(e){super(),this.host="",this.targetDomain="",q.w.util.initPartial(e,this)}}O.runtime=q.w,O.typeName="yuhaiin.latency.dns_over_quic",O.fields=q.w.util.newFieldList(()=>[{no:1,name:"host",kind:"scalar",T:9},{no:2,name:"target_domain",jsonName:"target_name",kind:"scalar",T:9}]);class P extends k.v{static fromBinary(e,t){return new P().fromBinary(e,t)}static fromJson(e,t){return new P().fromJson(e,t)}static fromJsonString(e,t){return new P().fromJsonString(e,t)}static equals(e,t){return q.w.util.equals(P,e,t)}constructor(e){super(),this.protocol={case:void 0},q.w.util.initPartial(e,this)}}P.runtime=q.w,P.typeName="yuhaiin.latency.protocol",P.fields=q.w.util.newFieldList(()=>[{no:1,name:"http",kind:"message",T:Z,oneof:"protocol"},{no:2,name:"dns",kind:"message",T:_,oneof:"protocol"},{no:3,name:"dns_over_quic",jsonName:"dns_over_quic",kind:"message",T:O,oneof:"protocol"}]);class L extends k.v{static fromBinary(e,t){return new L().fromBinary(e,t)}static fromJson(e,t){return new L().fromJson(e,t)}static fromJsonString(e,t){return new L().fromJsonString(e,t)}static equals(e,t){return q.w.util.equals(L,e,t)}constructor(e){super(),this.id="",this.hash="",this.ipv6=!1,q.w.util.initPartial(e,this)}}L.runtime=q.w,L.typeName="yuhaiin.latency.request",L.fields=q.w.util.newFieldList(()=>[{no:3,name:"id",kind:"scalar",T:9},{no:1,name:"hash",kind:"scalar",T:9},{no:4,name:"ipv6",kind:"scalar",T:8},{no:2,name:"protocol",kind:"message",T:P}]);class D extends k.v{static fromBinary(e,t){return new D().fromBinary(e,t)}static fromJson(e,t){return new D().fromJson(e,t)}static fromJsonString(e,t){return new D().fromJsonString(e,t)}static equals(e,t){return q.w.util.equals(D,e,t)}constructor(e){super(),this.requests=[],q.w.util.initPartial(e,this)}}D.runtime=q.w,D.typeName="yuhaiin.latency.requests",D.fields=q.w.util.newFieldList(()=>[{no:1,name:"requests",kind:"message",T:L,repeated:!0}]);class E extends k.v{static fromBinary(e,t){return new E().fromBinary(e,t)}static fromJson(e,t){return new E().fromJson(e,t)}static fromJsonString(e,t){return new E().fromJsonString(e,t)}static equals(e,t){return q.w.util.equals(E,e,t)}constructor(e){super(),this.idLatencyMap={},q.w.util.initPartial(e,this)}}E.runtime=q.w,E.typeName="yuhaiin.latency.response",E.fields=q.w.util.newFieldList(()=>[{no:1,name:"id_latency_map",jsonName:"id_latency_map",kind:"map",K:9,V:{kind:"message",T:T}}]);var C=n(5051),F=n(3525),I=function(){var e;let t=(0,r.useContext)(v.P),[n,m]=(0,r.useState)(""),[h,p]=(0,r.useState)("Select..."),[J,k]=(0,r.useState)({point:"",hash:""}),[q,B]=(0,r.useState)({}),{data:T,error:_,isLoading:L,mutate:I}=(0,x.ZP)("/nodes",(0,j.D4)(new S.BP));if(void 0!==_)return(0,s.jsx)(N(),{statusCode:_.code,title:_.msg});if(L||void 0===T)return(0,s.jsx)(y.Z,{});let U=r.memo(e=>{var t,n;let r=e=>void 0===e?"N/A":e,a=t=>{B(n=>{let s=n[e.hash];return null==s&&(s={tcp:"N/A",udp:"N/A"}),t(s),n[e.hash]=s,{...n}})},c=(t,n)=>{(0,j.Uo)("/latency",{body:new D({requests:[{hash:e.hash,id:"latency",ipv6:b.YO,protocol:t}]}).toBinary(),process:async e=>{let t=new E().fromBinary(new Uint8Array(await e.arrayBuffer())).idLatencyMap.latency;return t&&(0!==t.nanos||t.seconds!==BigInt(0))?function(e,t){let n=1e9*e+1*t;return n>=36e11?"".concat(n/36e11," h"):n>=6e10?"".concat(n/6e10," m"):n>=1e9?"".concat(n/1e9," s"):n>=1e6?"".concat(n/1e6," ms"):n>=1e3?"".concat(n/1e3," us"):"".concat(n/1," ns")}(Number(t.seconds),t.nanos):"timeout"}}).then(async e=>{let{data:t,error:s}=e,r="timeout";!s&&t&&(r=await t),n(r)})};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(i.Z,{className:"rounded-pill bg-light text-dark ms-1 text-uppercase",children:["tcp: ",r(null===(t=e.latency)||void 0===t?void 0:t.tcp)]}),(0,s.jsxs)(i.Z,{className:"rounded-pill bg-light text-dark ms-1 me-1 text-uppercase",children:["udp:",r(null===(n=e.latency)||void 0===n?void 0:n.udp)]}),(0,s.jsx)(()=>{var t,n;return(null===(t=e.latency)||void 0===t?void 0:t.tcpOnLoading)||(null===(n=e.latency)||void 0===n?void 0:n.udpOnLoading)?(0,s.jsx)(o.Z,{animation:"border",size:"sm"}):(0,s.jsx)("a",{href:"#empty",onClick:async()=>{a(e=>{e.tcpOnLoading=!0,e.udpOnLoading=!0}),c(new P({protocol:{case:"http",value:new Z({url:b.rQ})}}),e=>{a(async t=>{t.tcpOnLoading=!1,t.tcp=e})}),c(new P({protocol:{case:"dnsOverQuic",value:new O({host:b.gU,targetDomain:"www.google.com"})}}),e=>{a(async t=>{t.udpOnLoading=!1,t.udp=e})})},children:"Test"})},{})]})}),V=r.memo(e=>{let t=Object.entries(void 0!==e.nodes&&null!==e.nodes?e.nodes:{});return 0===t.length?(0,s.jsx)(a.Z.Body,{children:(0,s.jsx)("div",{className:"text-center my-2",style:{opacity:"0.4"},children:"グールプはまだ指定されていません。"})}):(0,s.jsx)(c.Z,{variant:"flush",children:t.sort((e,t)=>e<=t?-1:1).map(e=>{let[t,r]=e;return(0,s.jsxs)(c.Z.Item,{as:"label",style:{border:"0ch",borderBottom:"1px solid #dee2e6"},children:[(0,s.jsx)("input",{className:"form-check-input me-1",type:"radio",name:"select_node",value:r,onChange:e=>{m(e.target.value)},checked:n===r}),(0,s.jsx)("a",{href:"#",onClick:e=>{e.preventDefault(),T.nodes&&k({point:JSON.stringify(T.nodes[r].toJson({emitDefaultValues:!0}),null,"   "),hash:r})},children:t}),(0,s.jsx)(U,{hash:r,latency:q[r]})]},r)})})});return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(g.Z,{show:""!==J.point&&""!==J.hash,hash:J.hash,point:J.point,onChangePoint:e=>{k(t=>({...t,point:e}))},editable:!0,onHide:()=>k({point:"",hash:""}),onSave:()=>I()}),(0,s.jsxs)("div",{children:[(0,s.jsx)(l.Z,{children:(0,s.jsx)(u.Z,{className:"mb-4 d-flex",children:(0,s.jsxs)(d.Z,{onSelect:e=>{p(null!=e?e:"Select...")},children:[(0,s.jsx)(d.Z.Toggle,{variant:"light",children:null!=h?h:"GROUP"}),(0,s.jsxs)(d.Z.Menu,{children:[(0,s.jsx)(d.Z.Item,{eventKey:"Select...",children:"Select..."}),T.groupsV2&&Object.keys(T.groupsV2).sort((e,t)=>e<=t?-1:1).map(e=>(0,s.jsx)(d.Z.Item,{eventKey:e,children:e},e))]})]})})}),(0,s.jsxs)(a.Z,{className:"mb-3",children:[(0,s.jsx)(V,{nodes:h&&T.groupsV2?null===(e=T.groupsV2[h])||void 0===e?void 0:e.nodesV2:void 0}),(0,s.jsx)(a.Z.Header,{children:(0,s.jsx)(d.Z,{onSelect:async e=>{(0,j.Uo)("/node",{method:"PUT",body:new C.Gy({tcp:"tcp"===e||"tcpudp"===e,udp:"udp"===e||"tcpudp"===e,hash:n}).toBinary()}).then(async s=>{let{error:r}=s;void 0!==r?t.Error("change node failed, ".concat(r.code,"| ").concat(await r.msg)):t.Info("Change".concat(e," Node To ").concat(n," Successful"))})},children:(0,s.jsxs)(f,{children:[(0,s.jsxs)(f,{children:[(0,s.jsx)(d.Z.Toggle,{variant:"outline-primary",children:"USE"}),(0,s.jsxs)(d.Z.Menu,{children:[(0,s.jsx)(d.Z.Item,{eventKey:"tcpudp",children:"TCP&UDP"}),(0,s.jsx)(d.Z.Item,{eventKey:"tcp",children:"TCP"}),(0,s.jsx)(d.Z.Item,{eventKey:"udp",children:"UDP"})]})]}),(0,s.jsx)(w.Z,{variant:"outline-danger",onClick:()=>{(0,j.Uo)("/node",{method:"DELETE",body:new F.Gm({value:n}).toBinary()}).then(async e=>{let{error:s}=e;void 0!==s?t.Error("Delete Node ".concat(n," Failed ").concat(s.code,"| ").concat(await s.msg)):(t.Info("Delete Node ".concat(n," Successful.")),I())})},children:"DELETE"})]})})})]})]})]})}}},function(e){e.O(0,[465,149,300,634,713,728,111,860,186,971,69,744],function(){return e(e.s=9475)}),_N_E=e.O()}]);
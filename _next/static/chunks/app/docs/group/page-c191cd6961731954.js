(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[962],{7355:function(e,t,n){Promise.resolve().then(n.bind(n,5997))},5997:function(e,t,n){"use strict";n.r(t);var s,a,i=n(7437),l=n(2265),d=n(4670),c=n(9420),o=n(2510),r=n(2115),p=n(6926),u=n(4122),h=n(4076),m=n(279),x=n(4402),v=n(5e3),y=n(6263),g=n(4954),j=n(5118),N=n(5594),Z=n(914),w=n.n(Z),f=n(798),I=n(4752),b=n(6580),U=n(9862),P=n(8805),S=n(8560),T=n(9569),k=n(4504),_=n(6535);(s=a||(a={})).TCP="tcp",s.UDP="udp",s.IP="ip",s.STUN="stun",s.STUNTCP="stun-tcp";class A{haveLoading(){return this.tcp.loading||this.udp.loading||this.ip.loading||this.stun.loading||this.stun_tcp.loading}allLoading(){return this.tcp.loading&&this.udp.loading&&this.ip.loading&&this.stun.loading&&this.stun_tcp.loading}constructor(e){this.tcp={loading:!1},this.udp={loading:!1},this.ip={loading:!1},this.stun={loading:!1},this.stun_tcp={loading:!1},Object.assign(this,e)}}let C=e=>{switch(e){case b.Iq.NAT_UNKNOWN:return"unknown";case b.Iq.NAT_NO_RESULT:return"noresult";case b.Iq.NAT_AddressAndPortDependent:return"address-and-port-dependent";case b.Iq.NAT_AddressDependent:return"address-dependent";case b.Iq.NAT_EndpointIndependent:return"endpoint-independent";case b.Iq.NAT_EndpointIndependentNoNAT:return"endpoint-independent-no-nat";case b.Iq.NAT_ServerNotSupportChangePort:return"server-not-support";default:return"unknown"}},D=l.memo(e=>{var t,n;let s=(0,l.useContext)(g.P),a=t=>{t(e.latency),e.onChangeLatency(e.latency)},x=e=>{switch(e){case"tcp":a(e=>{e.tcp.loading=!0}),v((0,S.U)(b.n0,{protocol:{case:"http",value:(0,S.U)(b.Ii,{url:f.rQ})}}),e=>{a(async t=>{t.tcp={loading:!1,value:e.Latency}})});break;case"udp":a(e=>{e.udp.loading=!0}),v((0,S.U)(b.n0,{protocol:{case:"dnsOverQuic",value:(0,S.U)(b.aG,{host:f.gU,targetDomain:"www.google.com"})}}),e=>{a(async t=>{t.udp={loading:!1,value:e.Latency}})});break;case"ip":a(e=>{e.ip.loading=!0}),v((0,S.U)(b.n0,{protocol:{case:"ip",value:(0,S.U)(b.gy,{url:f.Ti})}}),e=>{a(async t=>{t.ip.loading=!1,t.ip.ipv4=e.IPv4,t.ip.ipv6=e.IPv6})});break;case"stun-tcp":a(e=>{e.stun_tcp.loading=!0}),v((0,S.U)(b.n0,{protocol:{case:"stun",value:(0,S.U)(b.XK,{host:f.dn,tcp:!0})}}),e=>{a(async t=>{var n;t.stun_tcp={loading:!1,ip:null===(n=e.Stun)||void 0===n?void 0:n.mappedAddress}})});break;case"stun":a(e=>{e.stun.loading=!0}),v((0,S.U)(b.n0,{protocol:{case:"stun",value:(0,S.U)(b.XK,{host:f.Z5})}}),e=>{a(async t=>{var n,s,a;t.stun={loading:!1,mapping:null===(n=e.Stun)||void 0===n?void 0:n.mapping,filtering:null===(s=e.Stun)||void 0===s?void 0:s.filter,mappedAddress:null===(a=e.Stun)||void 0===a?void 0:a.mappedAddress}})})}},v=(t,n)=>{(0,N.Uo)("/latency",{body:(0,T.O)(b.Fg,(0,S.U)(b.Fg,{requests:[{hash:e.hash,id:"latency",ipv6:f.YO,protocol:t}]})),process:async e=>{let t=(0,k.h4)(b.yJ,new Uint8Array(await e.arrayBuffer()));if(!t.idLatencyMap.latency)return{Latency:"timeout"};let n=t.idLatencyMap.latency.reply;switch(n.case){case"latency":return{Latency:function(e){if(0===e.nanos&&0===Number(e.seconds))return"timeout";let t=1e9*Number(e.seconds)+1*e.nanos;return t>=36e11?"".concat(t/36e11," h"):t>=6e10?"".concat(t/6e10," m"):t>=1e9?"".concat(t/1e9," s"):t>=1e6?"".concat(t/1e6," ms"):t>=1e3?"".concat(t/1e3," us"):"".concat(t/1," ns")}(n.value)};case"ip":return{IPv4:n.value.ipv4,IPv6:n.value.ipv6};case"stun":return{Stun:{mapping:C(n.value.Mapping),filter:C(n.value.Filtering),mappedAddress:n.value.mappedAddress}};default:return{Latency:"timeout"}}}}).then(async e=>{let{data:t,error:s}=e,a={Latency:"timeout"};!s&&t&&(a=await t),n(a)})};return(0,i.jsx)(d.Z,{className:"mb-3",children:(0,i.jsxs)(c.Z,{className:"h-100 shadow-sm",children:[(0,i.jsx)(c.Z.Header,{children:e.title}),(0,i.jsx)(c.Z.Body,{children:(0,i.jsxs)(o.Z,{variant:"flush",children:[(0,i.jsx)(o.Z.Item,{children:(0,i.jsxs)("div",{className:"d-xl-flex",children:[(0,i.jsx)("div",{className:"endpoint-name flex-grow-1 notranslate",children:"TCP"}),(0,i.jsx)("div",{className:"notranslate text-break",style:{opacity:.6},id:"statistic-download",children:null!==(t=e.latency.tcp.value)&&void 0!==t?t:"N/A"})]})}),(0,i.jsx)(o.Z.Item,{children:(0,i.jsxs)("div",{className:"d-xl-flex",children:[(0,i.jsx)("div",{className:"endpoint-name flex-grow-1 notranslate",children:"UDP"}),(0,i.jsx)("div",{className:"notranslate text-break",style:{opacity:.6},id:"statistic-upload",children:null!==(n=e.latency.udp.value)&&void 0!==n?n:"N/A"})]})}),e.latency.ip.ipv4&&(0,i.jsx)(o.Z.Item,{children:(0,i.jsxs)("div",{className:"d-xl-flex",children:[(0,i.jsx)("div",{className:"endpoint-name flex-grow-1 notranslate",children:"IPv4"}),(0,i.jsx)("div",{className:"notranslate text-break",style:{opacity:.6},id:"statistic-upload",children:e.latency.ip.ipv4})]})}),e.latency.ip.ipv6&&(0,i.jsx)(o.Z.Item,{children:(0,i.jsxs)("div",{className:"d-xl-flex",children:[(0,i.jsx)("div",{className:"endpoint-name flex-grow-1 notranslate",children:"IPv6"}),(0,i.jsx)("div",{className:"notranslate text-break",style:{opacity:.6},id:"statistic-upload",children:e.latency.ip.ipv6})]})}),e.latency.stun.mapping&&(0,i.jsx)(o.Z.Item,{children:(0,i.jsxs)("div",{className:"d-xl-flex text-truncate",children:[(0,i.jsx)("div",{className:"endpoint-name flex-grow-1 notranslate text-truncate",children:"Mapping"}),(0,i.jsx)("div",{className:"notranslate text-break",style:{opacity:.6},id:"statistic-upload",children:e.latency.stun.mapping})]})}),e.latency.stun.filtering&&(0,i.jsx)(o.Z.Item,{children:(0,i.jsxs)("div",{className:"d-xl-flex text-truncate",children:[(0,i.jsx)("div",{className:"endpoint-name flex-grow-1 notranslate text-truncate",children:"Filtering"}),(0,i.jsx)("div",{className:"notranslate text-break",style:{opacity:.6},id:"statistic-upload",children:e.latency.stun.filtering})]})}),e.latency.stun.mappedAddress&&(0,i.jsx)(o.Z.Item,{children:(0,i.jsxs)("div",{className:"d-xl-flex text-truncate",children:[(0,i.jsx)("div",{className:"endpoint-name flex-grow-1 notranslate text-truncate",children:"MappedAddress"}),(0,i.jsx)("div",{className:"notranslate text-break",style:{opacity:.6},id:"statistic-upload",children:e.latency.stun.mappedAddress})]})}),e.latency.stun_tcp.ip&&(0,i.jsx)(o.Z.Item,{children:(0,i.jsxs)("div",{className:"d-xl-flex text-truncate",children:[(0,i.jsx)("div",{className:"endpoint-name flex-grow-1 notranslate text-truncate",children:"STUN IP"}),(0,i.jsx)("div",{className:"notranslate text-break",style:{opacity:.6},id:"statistic-upload",children:e.latency.stun_tcp.ip})]})}),(0,i.jsx)(o.Z.Item,{className:"text-center text-break",children:(0,i.jsxs)(r.Z,{className:"d-xl-flex",children:[(0,i.jsxs)(p.Z,{onSelect:async t=>{(0,N.Uo)("/node",{method:"PUT",body:(0,T.O)(U.Fe,(0,S.U)(U.Fe,{tcp:"tcp"===t||"tcpudp"===t,udp:"udp"===t||"tcpudp"===t,hash:e.hash}))}).then(async n=>{let{error:a}=n;void 0!==a?s.Error("change node failed, ".concat(a.code,"| ").concat(await a.msg)):s.Info("Change ".concat(t," Node To ").concat(e.hash," Successful"))})},as:r.Z,variant:"outline-primary",title:"USE",children:[(0,i.jsx)(u.Z.Item,{eventKey:"tcpudp",children:"TCP and UDP"}),(0,i.jsx)(u.Z.Item,{eventKey:"tcp",children:"TCP"}),(0,i.jsx)(u.Z.Item,{eventKey:"udp",children:"UDP"})]}),(0,i.jsx)(h.Z,{variant:"outline-primary",className:"w-100",onClick:e.onClickEdit,children:"Edit"}),(0,i.jsxs)(p.Z,{onSelect:async e=>{x(e)},as:r.Z,variant:"outline-primary",title:(0,i.jsxs)(i.Fragment,{children:["Test",e.latency.haveLoading()&&(0,i.jsxs)(i.Fragment,{children:["\xa0",(0,i.jsx)(m.Z,{size:"sm",animation:"border"})]})]}),children:[(0,i.jsxs)(u.Z.Item,{disabled:e.latency.tcp.loading,eventKey:"tcp",children:["TCP\xa0",e.latency.tcp.loading&&(0,i.jsx)(m.Z,{size:"sm",animation:"border"})]}),(0,i.jsxs)(u.Z.Item,{disabled:e.latency.udp.loading,eventKey:"udp",children:["UDP\xa0",e.latency.udp.loading&&(0,i.jsx)(m.Z,{size:"sm",animation:"border"})," "]}),(0,i.jsxs)(u.Z.Item,{disabled:e.latency.stun.loading,eventKey:"stun",children:["STUN\xa0",e.latency.stun.loading&&(0,i.jsx)(m.Z,{size:"sm",animation:"border"})]}),(0,i.jsxs)(u.Z.Item,{disabled:e.latency.stun_tcp.loading,eventKey:"stun-tcp",children:["STUN TCP\xa0",e.latency.stun_tcp.loading&&(0,i.jsx)(m.Z,{size:"sm",animation:"border"})]}),(0,i.jsxs)(u.Z.Item,{disabled:e.latency.ip.loading,eventKey:"ip",children:["IP\xa0",e.latency.ip.loading&&(0,i.jsx)(m.Z,{size:"sm",animation:"border"})]})]})]})})]})})]})})});class E{constructor(e){var t,n,s;this.point=null!==(t=null==e?void 0:e.point)&&void 0!==t?t:(0,S.U)(P.tQ,{}),this.hash=null!==(n=null==e?void 0:e.hash)&&void 0!==n?n:"",this.show=null!==(s=null==e?void 0:e.show)&&void 0!==s&&s,this.onDelete=null==e?void 0:e.onDelete}}t.default=function(){let e=(0,l.useContext)(g.P),[t,n]=(0,l.useState)("Select..."),[s,a]=(0,l.useState)(new E),[c,o]=(0,l.useState)({data:!1}),[p,m]=(0,l.useState)({}),{data:Z,error:f,isLoading:b,mutate:U}=(0,j.ZP)("/nodes",(0,N.D4)(I.Jq));return void 0!==f?(0,i.jsx)(w(),{statusCode:f.code,title:f.msg}):b||void 0===Z?(0,i.jsx)(y.Z,{}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(v.c,{show:s.show,hash:s.hash,point:s.point,isNew:s.isNew,onDelete:s.onDelete,editable:!0,onHide:()=>a({...s,show:!1}),onSave:()=>U(),groups:Object.keys(Z.groupsV2).sort((e,t)=>e<=t?-1:1)}),(0,i.jsx)(v.b,{show:c.data,onSave:()=>U(),onHide:()=>o({data:!1}),isNew:!0}),(0,i.jsxs)("div",{children:[(0,i.jsx)(x.Z,{children:(0,i.jsxs)(d.Z,{className:"mb-4 d-flex",children:[(0,i.jsxs)(u.Z,{onSelect:e=>{n(null!=e?e:"Select...")},children:[(0,i.jsx)(u.Z.Toggle,{variant:"light",children:null!=t?t:"GROUP"}),(0,i.jsxs)(u.Z.Menu,{children:[(0,i.jsx)(u.Z.Item,{eventKey:"Select...",children:"Select..."}),Z.groupsV2&&Object.keys(Z.groupsV2).sort((e,t)=>e<=t?-1:1).map(e=>(0,i.jsx)(u.Z.Item,{eventKey:e,children:e},e))]})]}),(0,i.jsxs)(r.Z,{className:"ms-2 d-flex",children:[(0,i.jsx)(h.Z,{variant:"outline-success",className:"w-100",onClick:()=>{a({point:(0,S.U)(P.tQ,{group:"template_group",name:"template_name",origin:P.hW.manual}),hash:"new node",show:!0,onDelete:void 0,isNew:!0})},children:"New"}),(0,i.jsx)(h.Z,{variant:"outline-success",className:"w-100",onClick:()=>{o({data:!0})},children:"Import"})]})]})}),t&&Z.groupsV2&&Z.groupsV2[t]?(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(x.Z,{className:"row-cols-sm-1 row-cols-md-2 row-cols-xl-3 justify-content-md-center",children:Object.entries(Z.groupsV2[t].nodesV2).sort((e,t)=>e<=t?-1:1).map(t=>{var n;let[s,l]=t;return(0,i.jsx)(D,{hash:l,title:s,latency:null!==(n=p[l])&&void 0!==n?n:new A({}),onChangeLatency:e=>{m(t=>({...t,[l]:e}))},onClickEdit:()=>{Z.nodes&&a({point:Z.nodes[l],hash:l,show:!0,onDelete:()=>{(0,N.Uo)("/node",{method:"DELETE",body:(0,T.O)(_.mV,(0,S.U)(_.mV,{value:l}))}).then(async t=>{let{error:n}=t;void 0!==n?e.Error("Delete Node ".concat(l," Failed ").concat(n.code,"| ").concat(await n.msg)):(e.Info("Delete Node ".concat(l," Successful.")),U())})}})}},s)})})}):(0,i.jsx)(i.Fragment,{})]})]})}}},function(e){e.O(0,[439,795,982,773,122,930,366,131,601,424,862,0,971,117,744],function(){return e(e.s=7355)}),_N_E=e.O()}]);
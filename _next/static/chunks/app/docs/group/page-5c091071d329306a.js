(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[962],{9475:function(e,n,t){Promise.resolve().then(t.bind(t,4070))},6491:function(e,n,t){"use strict";var s=t(7437),o=t(477),a=t(2283),c=t.n(a);n.Z=function(e){return(0,s.jsxs)("div",{className:"z-1090 d-flex flex-column justify-content-center align-items-center",style:{height:"100px"},children:[void 0!==e.children&&(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(c(),{className:"p2",statusCode:void 0!==e.code?e.code:500,title:e.children})}),(0,s.jsx)("div",{className:"p2",children:(0,s.jsx)(o.Z,{})})]})}},6756:function(e,n,t){"use strict";t.d(n,{P:function(){return i},t:function(){return l}});var s=t(7437),o=t(2265),a=t(4349),c=t(4051);let i=(0,o.createContext)({Info:e=>{},Error:e=>{}}),l=e=>{let{children:n}=e,[t,l]=(0,o.useState)({value:{},index:0}),r=(e,n)=>{l(t=>(t.value[t.index]={text:e,type:n},t.index++,{...t}))};return(0,s.jsxs)(i.Provider,{value:{Info:e=>{console.log(e),r(e,"success")},Error:e=>{console.error(e),r(e,"danger")}},children:[(0,s.jsx)(a.Z,{className:"p-3",position:"top-center",containerPosition:"fixed",style:{zIndex:1},children:Object.entries(t.value).map(e=>{let[n,o]=e;return(0,s.jsxs)(c.Z,{role:"alert","aria-live":"assertive",show:!0,bg:o.type,onClose:()=>{let e=t.value;delete e[n],l({...t,value:e}),console.log("close: "+n)},"aria-atomic":"true",delay:4e3,autohide:!0,animation:!0,children:[(0,s.jsxs)(c.Z.Header,{children:[(0,s.jsx)("strong",{className:"me-auto",children:"Notification"}),(0,s.jsx)("small",{className:"text-muted",children:"just now"})]}),(0,s.jsx)(c.Z.Body,{className:"text-center",children:o.text})]},"toast"+n)})}),n]})}},4070:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return k}});var s=t(7437),o=t(2265),a=t(477),c=t(5097),i=t(8168),l=t(2389),r=t(5914),d=t(590),u=t(7386),h=t(710),p=t.n(h),x=t(2865);let m=o.forwardRef((e,n)=>{let{bsPrefix:t,size:o,vertical:a=!1,className:c,role:i="group",as:l="div",...r}=e,d=(0,x.vE)(t,"btn-group"),u=d;return a&&(u="".concat(d,"-vertical")),(0,s.jsx)(l,{...r,ref:n,role:i,className:p()(c,u,o&&"".concat(d,"-").concat(o))})});m.displayName="ButtonGroup";var v=t(6879),j=t(5952),g=t(6491),y=t(6756),f=t(1252),Z=t(8224),b=t(2283),N=t.n(b),C=t(2520);let S=C.yE.point.point,E=C.yE.protos.node.service.use_req,P=C.lk.protobuf.StringValue,w=C.yE.latency.requests,O=C.yE.latency.response;var k=function(){var e;let n=(0,o.useContext)(y.P),[t,h]=(0,o.useState)(""),[p,x]=(0,o.useState)("Select..."),[b,k]=(0,o.useState)({point:"",hash:""}),[T,_]=(0,o.useState)({}),{data:I,error:U,isLoading:H,mutate:D}=(0,f.ZP)("/nodes",(0,Z.PJ)(C.yE.node.manager));if(void 0!==U)return(0,s.jsx)(N(),{statusCode:U.code,title:U.msg});if(H||void 0===I)return(0,s.jsx)(g.Z,{});let F=o.memo(e=>{var n,t;let o=e=>void 0===e?"N/A":e,i=n=>{_(t=>{let s=t[e.hash];return null==s&&(s={tcp:"N/A",udp:"N/A"}),n(s),t[e.hash]=s,{...t}})},l=(n,t)=>{(0,Z.Uo)("/latency",{body:w.encode({requests:[{hash:e.hash,id:"latency",protocol:n}]}).finish(),process:async e=>{let n=O.decode(new Uint8Array(await e.arrayBuffer())),t=new C.lk.protobuf.Duration(n.id_latency_map.latency);return t&&(0!==t.nanos||0!==t.seconds)?function(e,n){let t=1e9*e+1*n;return t>=36e11?"".concat(t/36e11," h"):t>=6e10?"".concat(t/6e10," m"):t>=1e9?"".concat(t/1e9," s"):t>=1e6?"".concat(t/1e6," ms"):t>=1e3?"".concat(t/1e3," us"):"".concat(t/1," ns")}(t.seconds,t.nanos):"timeout"}}).then(async e=>{let{data:n,error:s}=e,o="timeout";!s&&n&&(o=await n),t(o)})};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(c.Z,{className:"rounded-pill bg-light text-dark ms-1 text-uppercase",children:["tcp: ",o(null===(n=e.latency)||void 0===n?void 0:n.tcp)]}),(0,s.jsxs)(c.Z,{className:"rounded-pill bg-light text-dark ms-1 me-1 text-uppercase",children:["udp:",o(null===(t=e.latency)||void 0===t?void 0:t.udp)]}),(0,s.jsx)(()=>{var n,t;return(null===(n=e.latency)||void 0===n?void 0:n.tcpOnLoading)||(null===(t=e.latency)||void 0===t?void 0:t.udpOnLoading)?(0,s.jsx)(a.Z,{animation:"border",size:"sm"}):(0,s.jsx)("a",{href:"#empty",onClick:async()=>{i(e=>{e.tcpOnLoading=!0,e.udpOnLoading=!0}),l({http:{url:"https://clients3.google.com/generate_204"}},e=>{i(async n=>{n.tcpOnLoading=!1,n.tcp=e})}),l({dns_over_quic:{host:"dns.nextdns.io:853",target_domain:"www.google.com"}},e=>{i(async n=>{n.udpOnLoading=!1,n.udp=e})})},children:"Test"})},{})]})}),L=o.memo(e=>{let n=Object.entries(void 0!==e.nodes&&null!==e.nodes?e.nodes:{});return 0===n.length?(0,s.jsx)(i.Z.Body,{children:(0,s.jsx)("div",{className:"text-center my-2",style:{opacity:"0.4"},children:"グールプはまだ指定されていません。"})}):(0,s.jsx)(l.Z,{variant:"flush",children:n.sort((e,n)=>e<=n?-1:1).map(e=>{let[n,o]=e;return(0,s.jsxs)(l.Z.Item,{as:"label",style:{border:"0ch",borderBottom:"1px solid #dee2e6"},children:[(0,s.jsx)("input",{className:"form-check-input me-1",type:"radio",name:"select_node",value:o,onChange:e=>{h(e.target.value)},checked:t===o}),(0,s.jsx)("a",{href:"#",onClick:e=>{if(e.preventDefault(),!I.nodes)return;let n=I.nodes[o];k({point:n?JSON.stringify(S.toObject(S.create(n),Z.Ts),null,"  "):"",hash:o})},children:n}),(0,s.jsx)(F,{hash:o,latency:T[o]})]},o)})})});return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(j.Z,{show:""!==b.point&&""!==b.hash,hash:b.hash,point:b.point,onChangePoint:e=>{k(n=>({...n,point:e}))},editable:!0,onHide:()=>k({point:"",hash:""}),onSave:()=>D()}),(0,s.jsxs)("div",{children:[(0,s.jsx)(r.Z,{children:(0,s.jsx)(d.Z,{className:"mb-4 d-flex",children:(0,s.jsxs)(u.Z,{onSelect:e=>{x(null!=e?e:"Select...")},children:[(0,s.jsx)(u.Z.Toggle,{variant:"light",children:null!=p?p:"GROUP"}),(0,s.jsxs)(u.Z.Menu,{children:[(0,s.jsx)(u.Z.Item,{eventKey:"Select...",children:"Select..."}),I.groupsV2&&Object.keys(I.groupsV2).sort((e,n)=>e<=n?-1:1).map(e=>(0,s.jsx)(u.Z.Item,{eventKey:e,children:e},e))]})]})})}),(0,s.jsxs)(i.Z,{className:"mb-3",children:[(0,s.jsx)(L,{nodes:p&&I.groupsV2?null===(e=I.groupsV2[p])||void 0===e?void 0:e.nodesV2:void 0}),(0,s.jsx)(i.Z.Header,{children:(0,s.jsx)(u.Z,{onSelect:async e=>{(0,Z.Uo)("/node",{method:"PUT",body:E.encode({tcp:"tcp"===e||"tcpudp"===e,udp:"udp"===e||"tcpudp"===e,hash:t}).finish()}).then(async s=>{let{error:o}=s;void 0!==o?n.Error("change node failed, ".concat(o.code,"| ").concat(await o.msg)):n.Info("Change".concat(e," Node To ").concat(t," Successful"))})},children:(0,s.jsxs)(m,{children:[(0,s.jsxs)(m,{children:[(0,s.jsx)(u.Z.Toggle,{variant:"outline-primary",children:"USE"}),(0,s.jsxs)(u.Z.Menu,{children:[(0,s.jsx)(u.Z.Item,{eventKey:"tcpudp",children:"TCP&UDP"}),(0,s.jsx)(u.Z.Item,{eventKey:"tcp",children:"TCP"}),(0,s.jsx)(u.Z.Item,{eventKey:"udp",children:"UDP"})]})]}),(0,s.jsx)(v.Z,{variant:"outline-danger",onClick:()=>{(0,Z.Uo)("/node",{method:"DELETE",body:P.encode({value:t}).finish()}).then(async e=>{let{error:s}=e;void 0!==s?n.Error("Delete Node ".concat(t," Failed ").concat(s.code,"| ").concat(await s.msg)):(n.Info("Delete Node ".concat(t," Successful.")),D())})},children:"DELETE"})]})})})]})]})]})}},5952:function(e,n,t){"use strict";var s=t(7437),o=t(2265),a=t(6879),c=t(1355),i=t(9317),l=t(5097),r=t(1252),d=t(8224),u=t(6491),h=t(2283),p=t.n(h),x=t(6756),m=t(2520);let v=m.lk.protobuf.StringValue,j=m.yE.point.point;n.Z=function(e){let n=(0,o.useContext)(x.P),{data:t,error:h,isLoading:m,mutate:g}=(0,r.ZP)(!e.point&&e.hash?"/node":null,(0,d.Sh)(j,"POST",v.encode({value:e.hash}).finish())),[y,f]=(0,o.useState)({msg:"",code:0});return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(c.Z,{show:e.show,"aria-labelledby":"contained-modal-title-vcenter",size:"xl",onHide:()=>{e.onHide()},centered:!0,children:[(0,s.jsx)(c.Z.Header,{closeButton:!0,children:(0,s.jsx)(c.Z.Title,{id:"contained-modal-title-vcenter",children:e.hash})}),(0,s.jsx)(c.Z.Body,{children:h?(0,s.jsx)(p(),{statusCode:h.code,title:h.msg}):m?(0,s.jsx)(u.Z,{}):(0,s.jsx)(i.Z.Control,{as:"textarea",value:null!=t?t:e.point,style:{height:"65vh",fontFamily:"monospace"},readOnly:!e.editable,onChange:n=>{e.hash&&g(n.target.value,!1),e.point&&e.onChangePoint&&e.onChangePoint(n.target.value)}})}),(0,s.jsxs)(c.Z.Footer,{children:[y.msg&&(0,s.jsxs)(l.Z,{bg:"danger",children:[y.code," | ",y.msg]}),(0,s.jsx)(a.Z,{variant:"secondary",onClick:()=>{e.onHide()},children:"Close"}),(0,s.jsx)(()=>e.editable?(0,s.jsx)(a.Z,{variant:"primary",active:!m&&!h,onClick:()=>{var s;(0,d.Uo)("/node",{method:"PATCH",body:j.encode(j.fromObject(JSON.parse(null!==(s=null!=t?t:e.point)&&void 0!==s?s:"{}"))).finish()}).then(async t=>{let{error:s}=t;if(void 0===s)n.Info("save successful"),void 0!==e.onSave&&e.onSave(),e.onHide();else{let e=await s.msg;n.Error(e),f({msg:e,code:s.code}),setTimeout(()=>{f({msg:"",code:0})},5e3)}})},children:"Save"}):(0,s.jsx)(s.Fragment,{}),{})]})]})})}}},function(e){e.O(0,[644,149,300,634,713,728,902,289,971,69,744],function(){return e(e.s=9475)}),_N_E=e.O()}]);
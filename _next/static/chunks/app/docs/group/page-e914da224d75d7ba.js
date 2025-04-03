(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[564],{5677:(e,t,n)=>{"use strict";n.d(t,{A:()=>A});var s=n(9300),a=n.n(s),l=n(2115),i=n(612),r=n(7390),d=n(8873);function o(e,t){return Array.isArray(e)?e.includes(t):e===t}let c=l.createContext({});c.displayName="AccordionContext";var u=n(5155);let p=l.forwardRef((e,t)=>{let{as:n="div",bsPrefix:s,className:i,children:p,eventKey:v,...x}=e,{activeEventKey:m}=(0,l.useContext)(c);return s=(0,r.oU)(s,"accordion-collapse"),(0,u.jsx)(d.A,{ref:t,in:o(m,v),...x,className:a()(i,s),children:(0,u.jsx)(n,{children:l.Children.only(p)})})});p.displayName="AccordionCollapse";let v=l.createContext({eventKey:""});v.displayName="AccordionItemContext";let x=l.forwardRef((e,t)=>{let{as:n="div",bsPrefix:s,className:i,onEnter:d,onEntering:o,onEntered:c,onExit:x,onExiting:m,onExited:h,...g}=e;s=(0,r.oU)(s,"accordion-body");let{eventKey:j}=(0,l.useContext)(v);return(0,u.jsx)(p,{eventKey:j,onEnter:d,onEntering:o,onEntered:c,onExit:x,onExiting:m,onExited:h,children:(0,u.jsx)(n,{ref:t,...g,className:a()(i,s)})})});x.displayName="AccordionBody";let m=l.forwardRef((e,t)=>{let{as:n="button",bsPrefix:s,className:i,onClick:d,...p}=e;s=(0,r.oU)(s,"accordion-button");let{eventKey:x}=(0,l.useContext)(v),m=function(e,t){let{activeEventKey:n,onSelect:s,alwaysOpen:a}=(0,l.useContext)(c);return l=>{let i=e===n?null:e;a&&(i=Array.isArray(n)?n.includes(e)?n.filter(t=>t!==e):[...n,e]:[e]),null==s||s(i,l),null==t||t(l)}}(x,d),{activeEventKey:h}=(0,l.useContext)(c);return"button"===n&&(p.type="button"),(0,u.jsx)(n,{ref:t,onClick:m,...p,"aria-expanded":Array.isArray(h)?h.includes(x):x===h,className:a()(i,s,!o(h,x)&&"collapsed")})});m.displayName="AccordionButton";let h=l.forwardRef((e,t)=>{let{as:n="h2","aria-controls":s,bsPrefix:l,className:i,children:d,onClick:o,...c}=e;return l=(0,r.oU)(l,"accordion-header"),(0,u.jsx)(n,{ref:t,...c,className:a()(i,l),children:(0,u.jsx)(m,{onClick:o,"aria-controls":s,children:d})})});h.displayName="AccordionHeader";let g=l.forwardRef((e,t)=>{let{as:n="div",bsPrefix:s,className:i,eventKey:d,...o}=e;s=(0,r.oU)(s,"accordion-item");let c=(0,l.useMemo)(()=>({eventKey:d}),[d]);return(0,u.jsx)(v.Provider,{value:c,children:(0,u.jsx)(n,{ref:t,...o,className:a()(i,s)})})});g.displayName="AccordionItem";let j=l.forwardRef((e,t)=>{let{as:n="div",activeKey:s,bsPrefix:d,className:o,onSelect:p,flush:v,alwaysOpen:x,...m}=(0,i.Zw)(e,{activeKey:"onSelect"}),h=(0,r.oU)(d,"accordion"),g=(0,l.useMemo)(()=>({activeEventKey:s,onSelect:p,alwaysOpen:x}),[s,p,x]);return(0,u.jsx)(c.Provider,{value:g,children:(0,u.jsx)(n,{ref:t,...m,className:a()(o,h,v&&"".concat(h,"-flush"))})})});j.displayName="Accordion";let A=Object.assign(j,{Button:m,Collapse:p,Item:g,Header:h,Body:x})},5880:(e,t,n)=>{Promise.resolve().then(n.bind(n,9553))},9553:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>T});var s=n(5155),a=n(960),l=n(6487),i=n(136),r=n.n(i),d=n(2115),o=n(1846),c=n(8136),u=n(2362),p=n(6449),v=n(902),x=n(5677),m=n(9056),h=n(9051),g=n(1867),j=n(3641),A=n(4086),y=n(7077),N=n(8508),f=n(6835),w=n(235),b=n(8580),C=n(5484),I=n(8408);function _(e){if(0===e.nanos&&0===Number(e.seconds))return"timeout";let t=1e9*Number(e.seconds)+ +e.nanos;return t>=36e11?"".concat(t/36e11," h"):t>=6e10?"".concat(t/6e10," m"):t>=1e9?"".concat(t/1e9," s"):t>=1e6?"".concat(t/1e6," ms"):t>=1e3?"".concat(t/1e3," us"):"".concat(t/1," ns")}var P=function(e){return e.TCP="tcp",e.UDP="udp",e.IP="ip",e.STUN="stun",e.STUNTCP="stun-tcp",e}(P||{});let k=e=>{switch(e){case C.HZ.NAT_UNKNOWN:return"unknown";case C.HZ.NAT_NO_RESULT:return"noresult";case C.HZ.NAT_AddressAndPortDependent:return"address-and-port-dependent";case C.HZ.NAT_AddressDependent:return"address-dependent";case C.HZ.NAT_EndpointIndependent:return"endpoint-independent";case C.HZ.NAT_EndpointIndependentNoNAT:return"endpoint-independent-no-nat";case C.HZ.NAT_ServerNotSupportChangePort:return"server-not-support";default:return"unknown"}};class S{constructor(e){var t,n;this.point=null==e?void 0:e.point,this.hash=null!==(t=null==e?void 0:e.hash)&&void 0!==t?t:"",this.show=null!==(n=null==e?void 0:e.show)&&void 0!==n&&n,this.onDelete=null==e?void 0:e.onDelete}}let T=function(){let e=(0,d.useContext)(f.u),[t,n]=(0,d.useState)("Select..."),[i,m]=(0,d.useState)(new S),[h,g]=(0,d.useState)({data:!1}),[j,C]=(0,d.useState)({}),{data:_,error:P,isLoading:k,mutate:T}=(0,N.mp)(b.rH.method.list);if(void 0!==P)return(0,s.jsx)(r(),{statusCode:P.code,title:P.msg});if(k||void 0===_)return(0,s.jsx)(A.A,{});let U=t=>{m({hash:t,show:!0,onDelete:()=>{(0,N.kP)(b.rH.method.remove,(0,a.v)(l.g8,{value:t})).then(async n=>{let{error:s}=n;void 0!==s?e.Error("Delete Node ".concat(t," Failed ").concat(s.code,"| ").concat(s.msg)):(e.Info("Delete Node ".concat(t," Successful.")),T())})}})};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(y.D,{value:_,children:[(0,s.jsx)(w.y,{show:i.show,hash:i.hash,point:i.point,isNew:i.isNew,onDelete:i.onDelete,editable:!0,onHide:()=>m({...i,show:!1}),onSave:()=>T(),groups:Object.keys(_.groups).sort((e,t)=>e<=t?-1:1)}),(0,s.jsx)(w.E,{show:h.data,onSave:()=>T(),onHide:()=>g({data:!1}),isNew:!0})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)(o.A,{children:(0,s.jsxs)(c.A,{className:"mb-4 d-flex",children:[(0,s.jsxs)(u.A,{onSelect:e=>{n(null!=e?e:"Select...")},children:[(0,s.jsx)(u.A.Toggle,{variant:"light",children:null!=t?t:"GROUP"}),(0,s.jsxs)(u.A.Menu,{children:[(0,s.jsx)(u.A.Item,{eventKey:"Select...",children:"Select..."}),_.groups&&Object.keys(_.groups).sort((e,t)=>e<=t?-1:1).map(e=>(0,s.jsx)(u.A.Item,{eventKey:e,children:e},e))]})]}),(0,s.jsxs)(p.A,{className:"ms-2 d-flex",children:[(0,s.jsx)(v.A,{variant:"outline-success",className:"w-100",onClick:()=>{m({point:(0,a.v)(I.Ac,{group:"template_group",name:"template_name",origin:I.TG.manual}),hash:"new node",show:!0,onDelete:void 0,isNew:!0})},children:"New"}),(0,s.jsx)(v.A,{variant:"outline-success",className:"w-100",onClick:()=>{g({data:!0})},children:"Import"})]})]})}),(0,s.jsx)(x.A,{className:"mb-3",alwaysOpen:!0,id:"connections",children:_.groups[t]&&Object.entries(_.groups[t].nodesV2).sort((e,t)=>e<=t?-1:1).map(e=>{var t;let[n,a]=e;return(0,s.jsx)(E,{hash:a,name:n,latency:null!==(t=j[a])&&void 0!==t?t:{tcp:{loading:!1,value:"N/A"},udp:{loading:!1,value:"N/A"}},onChangeLatency:e=>{C(t=>{var n;return{...t,[a]:e(null!==(n=t[a])&&void 0!==n?n:{tcp:{loading:!1,value:"N/A"},udp:{loading:!1,value:"N/A"}})}})},onClickEdit:()=>{U(a)}},a)})})]})]})},U=e=>{switch(e.case){case"http":return(0,a.v)(C._1,{protocol:{case:"http",value:(0,a.v)(C.UM,{url:e.url})}});case"dnsOverQuic":return(0,a.v)(C._1,{protocol:{case:"dnsOverQuic",value:(0,a.v)(C.Jc,{host:e.host,targetDomain:e.targetDomain})}});case"ip":return(0,a.v)(C._1,{protocol:{case:"ip",value:(0,a.v)(C.B$,{url:e.url,userAgent:e.userAgent})}});case"stun":return(0,a.v)(C._1,{protocol:{case:"stun",value:(0,a.v)(C._t,{host:e.host,tcp:e.tcp})}})}},D=(e,t,n)=>{switch(e){case"tcp":return{request:U({case:"http",url:j.Oz}),setLoading:(e,t)=>{n(t=>({...t,tcp:{...t.tcp,loading:e}})),t&&n(e=>({...e,tcp:{loading:!1,value:t}}))},setResult:e=>{if("latency"===e.reply.case){let t=_(e.reply.value);n(e=>({...e,tcp:{value:t,loading:!1}}))}}};case"udp":return{request:U({case:"dnsOverQuic",host:j.r3,targetDomain:"www.google.com"}),setLoading:(e,t)=>{n(t=>({...t,udp:{...t.udp,loading:e}})),t&&n(e=>({...e,udp:{loading:!1,value:t}}))},setResult:e=>{if("latency"===e.reply.case){let t=_(e.reply.value);n(e=>({...e,udp:{value:t,loading:!1}}))}}};case"ip":return{request:U({case:"ip",url:j.DH}),setLoading:(e,s)=>{n(n=>({...n,ip:{loading:e,ipv4:t.ip?t.ip.ipv4:"N/A",ipv6:t.ip?t.ip.ipv6:"N/A"}})),s&&n(e=>({...e,ip:{loading:!1,ipv4:s,ipv6:s}}))},setResult:e=>{if("ip"===e.reply.case){let t=e.reply.value.ipv4,s=e.reply.value.ipv6;n(e=>({...e,ip:{ipv4:t,ipv6:s,loading:!1}}))}}};case"stun-tcp":return{request:U({case:"stun",host:j.X3,tcp:!0}),setLoading:(e,s)=>{n(n=>({...n,stun_tcp:{loading:e,ip:t.stun_tcp?t.stun_tcp.ip:"N/A"}})),s&&n(e=>({...e,stun_tcp:{loading:!1,ip:s}}))},setResult:e=>{if("stun"===e.reply.case){let t=e.reply.value.mappedAddress;n(e=>({...e,stun_tcp:{ip:t,loading:!1}}))}}};case"stun":return{request:U({case:"stun",host:j.u1,tcp:!1}),setLoading:(e,s)=>{n(n=>({...n,stun:{loading:e,mappedAddress:t.stun?t.stun.mappedAddress:"N/A",mapping:t.stun?t.stun.mapping:"N/A",filtering:t.stun?t.stun.filtering:"N/A"}})),s&&n(e=>({...e,stun:{loading:!1,mappedAddress:s,mapping:s,filtering:s}}))},setResult:e=>{if("stun"===e.reply.case){let t=k(e.reply.value.Mapping),s=k(e.reply.value.Filtering),a=e.reply.value.mappedAddress;n(e=>({...e,stun:{loading:!1,mapping:t,filtering:s,mappedAddress:a}}))}}}}},E=e=>{var t,n,l,i,r,o;let{hash:c,name:A,onClickEdit:y,onChangeLatency:w,latency:I}=e,_=(0,d.useContext)(f.u),P=e=>{let{request:t,setLoading:n,setResult:s}=D(e,I,w);n(!0),(0,N.kP)(b.rH.method.latency,(0,a.v)(C.oL,{requests:[{hash:c,id:"latency",ipv6:j.oH,protocol:t}]})).then(async e=>{let{data:t,error:a}=e;if(a){console.log("test failed ".concat(a.code,"| ").concat(a.msg)),n(!1,"".concat(a.code,"| ").concat(a.msg));return}if(t&&t.idLatencyMap.latency){let e=t.idLatencyMap.latency;if("error"===e.reply.case){console.log("test failed ".concat(e.reply.value.msg)),n(!1,e.reply.value.msg);return}n(!1),s(e)}else n(!1,"timeout")})};return(0,s.jsxs)(x.A.Item,{eventKey:c,children:[(0,s.jsx)(x.A.Header,{children:A}),(0,s.jsx)(x.A.Body,{children:(0,s.jsxs)(m.A,{variant:"flush",children:[(0,s.jsx)(m.A.Item,{children:(0,s.jsxs)("div",{className:"d-xl-flex",children:[(0,s.jsx)("div",{className:"endpoint-name flex-grow-1 notranslate",children:"TCP"}),(0,s.jsx)("div",{className:"notranslate text-break",style:{opacity:.6},id:"statistic-download",children:I.tcp.value})]})}),(0,s.jsx)(m.A.Item,{children:(0,s.jsxs)("div",{className:"d-xl-flex",children:[(0,s.jsx)("div",{className:"endpoint-name flex-grow-1 notranslate",children:"UDP"}),(0,s.jsx)("div",{className:"notranslate text-break",style:{opacity:.6},id:"statistic-upload",children:I.udp.value})]})}),I.ip&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(m.A.Item,{children:(0,s.jsxs)("div",{className:"d-xl-flex",children:[(0,s.jsx)("div",{className:"endpoint-name flex-grow-1 notranslate",children:"IPv4"}),(0,s.jsx)("div",{className:"notranslate text-break",style:{opacity:.6},id:"statistic-upload",children:I.ip.ipv4})]})}),(0,s.jsx)(m.A.Item,{children:(0,s.jsxs)("div",{className:"d-xl-flex",children:[(0,s.jsx)("div",{className:"endpoint-name flex-grow-1 notranslate",children:"IPv6"}),(0,s.jsx)("div",{className:"notranslate text-break",style:{opacity:.6},id:"statistic-upload",children:I.ip.ipv6})]})})]}),I.stun&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(m.A.Item,{children:(0,s.jsxs)("div",{className:"d-xl-flex text-truncate",children:[(0,s.jsx)("div",{className:"endpoint-name flex-grow-1 notranslate text-truncate",children:"Mapping"}),(0,s.jsx)("div",{className:"notranslate text-break",style:{opacity:.6},id:"statistic-upload",children:I.stun.mapping})]})}),(0,s.jsx)(m.A.Item,{children:(0,s.jsxs)("div",{className:"d-xl-flex text-truncate",children:[(0,s.jsx)("div",{className:"endpoint-name flex-grow-1 notranslate text-truncate",children:"Filtering"}),(0,s.jsx)("div",{className:"notranslate text-break",style:{opacity:.6},id:"statistic-upload",children:I.stun.filtering})]})}),(0,s.jsx)(m.A.Item,{children:(0,s.jsxs)("div",{className:"d-xl-flex text-truncate",children:[(0,s.jsx)("div",{className:"endpoint-name flex-grow-1 notranslate text-truncate",children:"MappedAddress"}),(0,s.jsx)("div",{className:"notranslate text-break",style:{opacity:.6},id:"statistic-upload",children:I.stun.mappedAddress})]})})]}),I.stun_tcp&&(0,s.jsx)(m.A.Item,{children:(0,s.jsxs)("div",{className:"d-xl-flex text-truncate",children:[(0,s.jsx)("div",{className:"endpoint-name flex-grow-1 notranslate text-truncate",children:"STUN IP"}),(0,s.jsx)("div",{className:"notranslate text-break",style:{opacity:.6},id:"statistic-upload",children:I.stun_tcp.ip})]})}),(0,s.jsx)(m.A.Item,{className:"d-flex justify-content-center",children:(0,s.jsxs)(p.A,{children:[(0,s.jsxs)(h.A,{onSelect:async e=>{!function(e,t,n){(0,N.kP)(b.rH.method.use,(0,a.v)(b.q,{tcp:"tcp"===n||"tcpudp"===n,udp:"udp"===n||"tcpudp"===n,hash:t})).then(async s=>{let{error:a}=s;void 0!==a?e.Error("change node failed, ".concat(a.code,"| ").concat(a.msg)):e.Info("Change ".concat(n," Node To ").concat(t," Successful"))})}(_,c,e)},as:p.A,variant:"outline-primary",title:"USE",children:[(0,s.jsx)(u.A.Item,{eventKey:"tcpudp",children:"TCP and UDP"}),(0,s.jsx)(u.A.Item,{eventKey:"tcp",children:"TCP"}),(0,s.jsx)(u.A.Item,{eventKey:"udp",children:"UDP"})]}),(0,s.jsx)(v.A,{variant:"outline-primary",onClick:y,children:"Edit"}),(0,s.jsxs)(h.A,{onSelect:async e=>{P(e)},as:p.A,variant:"outline-primary",title:(0,s.jsxs)(s.Fragment,{children:["Test",function(e){var t,n,s;return e.tcp.loading||e.udp.loading||(null===(t=e.ip)||void 0===t?void 0:t.loading)||(null===(n=e.stun)||void 0===n?void 0:n.loading)||(null===(s=e.stun_tcp)||void 0===s?void 0:s.loading)||!1}(I)&&(0,s.jsxs)(s.Fragment,{children:["\xa0",(0,s.jsx)(g.A,{size:"sm",animation:"border"})]})]}),children:[(0,s.jsxs)(u.A.Item,{disabled:I.tcp.loading,eventKey:"tcp",children:["TCP\xa0",I.tcp.loading&&(0,s.jsx)(g.A,{size:"sm",animation:"border"})]}),(0,s.jsxs)(u.A.Item,{disabled:I.udp.loading,eventKey:"udp",children:["UDP\xa0",I.udp.loading&&(0,s.jsx)(g.A,{size:"sm",animation:"border"})," "]}),(0,s.jsxs)(u.A.Item,{disabled:null===(t=I.stun)||void 0===t?void 0:t.loading,eventKey:"stun",children:["STUN\xa0",(null===(n=I.stun)||void 0===n?void 0:n.loading)&&(0,s.jsx)(g.A,{size:"sm",animation:"border"})]}),(0,s.jsxs)(u.A.Item,{disabled:null===(l=I.stun_tcp)||void 0===l?void 0:l.loading,eventKey:"stun-tcp",children:["STUN TCP\xa0",(null===(i=I.stun_tcp)||void 0===i?void 0:i.loading)&&(0,s.jsx)(g.A,{size:"sm",animation:"border"})]}),(0,s.jsxs)(u.A.Item,{disabled:null===(r=I.ip)||void 0===r?void 0:r.loading,eventKey:"ip",children:["IP\xa0",(null===(o=I.ip)||void 0===o?void 0:o.loading)&&(0,s.jsx)(g.A,{size:"sm",animation:"border"})]})]})]})})]})})]})}}},e=>{var t=t=>e(e.s=t);e.O(0,[9279,9322,180,3779,5453,2362,2765,5402,8684,7397,5171,9631,626,8580,235,8441,1684,7358],()=>t(5880)),_N_E=e.O()}]);
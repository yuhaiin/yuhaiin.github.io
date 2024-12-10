(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[564],{5880:(e,t,n)=>{Promise.resolve().then(n.bind(n,8646))},8646:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>S});var s=n(5155),a=n(3577),l=n(1936),i=n(5554),o=n.n(i),r=n(2115),d=n(6121),c=n(3667),u=n(9637),p=n(3614),m=n(2963),x=n(8900),h=n(57),v=n(8143),A=n(4216),g=n(4995),y=n(744),j=n(9169),f=n(8927),N=n(148),w=n(1731),b=n(9969),I=n(2197),C=n(2049),_=function(e){return e.TCP="tcp",e.UDP="udp",e.IP="ip",e.STUN="stun",e.STUNTCP="stun-tcp",e}(_||{});let k=()=>({tcp:{loading:!1},udp:{loading:!1},ip:{loading:!1},stun:{loading:!1},stun_tcp:{loading:!1}}),E=e=>{switch(e){case I.HZ.NAT_UNKNOWN:return"unknown";case I.HZ.NAT_NO_RESULT:return"noresult";case I.HZ.NAT_AddressAndPortDependent:return"address-and-port-dependent";case I.HZ.NAT_AddressDependent:return"address-dependent";case I.HZ.NAT_EndpointIndependent:return"endpoint-independent";case I.HZ.NAT_EndpointIndependentNoNAT:return"endpoint-independent-no-nat";case I.HZ.NAT_ServerNotSupportChangePort:return"server-not-support";default:return"unknown"}};class P{constructor(e){var t,n;this.point=null==e?void 0:e.point,this.hash=null!==(t=null==e?void 0:e.hash)&&void 0!==t?t:"",this.show=null!==(n=null==e?void 0:e.show)&&void 0!==n&&n,this.onDelete=null==e?void 0:e.onDelete}}let S=function(){let e=(0,r.useContext)(N.u),[t,n]=(0,r.useState)("Select..."),[i,h]=(0,r.useState)(new P),[v,A]=(0,r.useState)({data:!1}),[y,I]=(0,r.useState)({}),{data:_,error:E,isLoading:S,mutate:U}=(0,g.Ay)("/nodes",(0,f.AD)(b.rH.method.list));if(void 0!==E)return(0,s.jsx)(o(),{statusCode:E.code,title:E.msg});if(S||void 0===_)return(0,s.jsx)(j.A,{});let D=t=>{h({hash:t,show:!0,onDelete:()=>{(0,f.kP)(b.rH.method.remove,"/node","DELETE",(0,a.v)(l.g8,{value:t})).then(async n=>{let{error:s}=n;void 0!==s?e.Error("Delete Node ".concat(t," Failed ").concat(s.code,"| ").concat(s.msg)):(e.Info("Delete Node ".concat(t," Successful.")),U())})}})};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(w.y,{show:i.show,hash:i.hash,point:i.point,isNew:i.isNew,onDelete:i.onDelete,editable:!0,onHide:()=>h({...i,show:!1}),onSave:()=>U(),groups:Object.keys(_.groups).sort((e,t)=>e<=t?-1:1)}),(0,s.jsx)(w.E,{show:v.data,onSave:()=>U(),onHide:()=>A({data:!1}),isNew:!0}),(0,s.jsxs)("div",{children:[(0,s.jsx)(d.A,{children:(0,s.jsxs)(c.A,{className:"mb-4 d-flex",children:[(0,s.jsxs)(u.A,{onSelect:e=>{n(null!=e?e:"Select...")},children:[(0,s.jsx)(u.A.Toggle,{variant:"light",children:null!=t?t:"GROUP"}),(0,s.jsxs)(u.A.Menu,{children:[(0,s.jsx)(u.A.Item,{eventKey:"Select...",children:"Select..."}),_.groups&&Object.keys(_.groups).sort((e,t)=>e<=t?-1:1).map(e=>(0,s.jsx)(u.A.Item,{eventKey:e,children:e},e))]})]}),(0,s.jsxs)(p.A,{className:"ms-2 d-flex",children:[(0,s.jsx)(m.A,{variant:"outline-success",className:"w-100",onClick:()=>{h({point:(0,a.v)(C.Ac,{group:"template_group",name:"template_name",origin:C.TG.manual}),hash:"new node",show:!0,onDelete:void 0,isNew:!0})},children:"New"}),(0,s.jsx)(m.A,{variant:"outline-success",className:"w-100",onClick:()=>{A({data:!0})},children:"Import"})]})]})}),(0,s.jsx)(x.A,{className:"mb-3",alwaysOpen:!0,id:"connections",children:_.groups[t]&&Object.entries(_.groups[t].nodesV2).sort((e,t)=>e<=t?-1:1).map(e=>{var t;let[n,a]=e;return(0,s.jsx)(T,{hash:a,name:n,latency:null!==(t=y[a])&&void 0!==t?t:k(),onChangeLatency:e=>{I(t=>({...t,[a]:e}))},onClickEdit:()=>{D(a)}},a)})})]})]})},T=e=>{var t,n;let{hash:l,name:i,onClickEdit:o,onChangeLatency:d,latency:c}=e,g=(0,r.useContext)(N.u),j=e=>{switch(e){case"tcp":d({...c,tcp:{...c.tcp,loading:!0}}),D(l,(0,a.v)(I._1,{protocol:{case:"http",value:(0,a.v)(I.UM,{url:y.Oz})}}),e=>{d({...c,tcp:{loading:!1,value:e.Latency}})});break;case"udp":d({...c,udp:{...c.udp,loading:!0}}),D(l,(0,a.v)(I._1,{protocol:{case:"dnsOverQuic",value:(0,a.v)(I.Jc,{host:y.r3,targetDomain:"www.google.com"})}}),e=>{d({...c,udp:{loading:!1,value:e.Latency}})});break;case"ip":d({...c,ip:{...c.ip,loading:!0}}),D(l,(0,a.v)(I._1,{protocol:{case:"ip",value:(0,a.v)(I.B$,{url:y.DH})}}),e=>{d({...c,ip:{loading:!1,ipv4:e.IPv4,ipv6:e.IPv6}})});break;case"stun-tcp":d({...c,stun_tcp:{...c.stun_tcp,loading:!0}}),D(l,(0,a.v)(I._1,{protocol:{case:"stun",value:(0,a.v)(I._t,{host:y.X3,tcp:!0})}}),e=>{var t;d({...c,stun_tcp:{loading:!1,ip:null===(t=e.Stun)||void 0===t?void 0:t.mappedAddress}})});break;case"stun":d({...c,stun:{...c.stun,loading:!0}}),D(l,(0,a.v)(I._1,{protocol:{case:"stun",value:(0,a.v)(I._t,{host:y.u1})}}),e=>{var t,n,s;d({...c,stun:{loading:!1,mapping:null===(t=e.Stun)||void 0===t?void 0:t.mapping,filtering:null===(n=e.Stun)||void 0===n?void 0:n.filter,mappedAddress:null===(s=e.Stun)||void 0===s?void 0:s.mappedAddress}})})}};return(0,s.jsxs)(x.A.Item,{eventKey:l,children:[(0,s.jsx)(x.A.Header,{children:i}),(0,s.jsx)(x.A.Body,{children:(0,s.jsxs)(h.A,{variant:"flush",children:[(0,s.jsx)(h.A.Item,{children:(0,s.jsxs)("div",{className:"d-xl-flex",children:[(0,s.jsx)("div",{className:"endpoint-name flex-grow-1 notranslate",children:"TCP"}),(0,s.jsx)("div",{className:"notranslate text-break",style:{opacity:.6},id:"statistic-download",children:null!==(t=c.tcp.value)&&void 0!==t?t:"N/A"})]})}),(0,s.jsx)(h.A.Item,{children:(0,s.jsxs)("div",{className:"d-xl-flex",children:[(0,s.jsx)("div",{className:"endpoint-name flex-grow-1 notranslate",children:"UDP"}),(0,s.jsx)("div",{className:"notranslate text-break",style:{opacity:.6},id:"statistic-upload",children:null!==(n=c.udp.value)&&void 0!==n?n:"N/A"})]})}),c.ip.ipv4&&(0,s.jsx)(h.A.Item,{children:(0,s.jsxs)("div",{className:"d-xl-flex",children:[(0,s.jsx)("div",{className:"endpoint-name flex-grow-1 notranslate",children:"IPv4"}),(0,s.jsx)("div",{className:"notranslate text-break",style:{opacity:.6},id:"statistic-upload",children:c.ip.ipv4})]})}),c.ip.ipv6&&(0,s.jsx)(h.A.Item,{children:(0,s.jsxs)("div",{className:"d-xl-flex",children:[(0,s.jsx)("div",{className:"endpoint-name flex-grow-1 notranslate",children:"IPv6"}),(0,s.jsx)("div",{className:"notranslate text-break",style:{opacity:.6},id:"statistic-upload",children:c.ip.ipv6})]})}),c.stun.mapping&&(0,s.jsx)(h.A.Item,{children:(0,s.jsxs)("div",{className:"d-xl-flex text-truncate",children:[(0,s.jsx)("div",{className:"endpoint-name flex-grow-1 notranslate text-truncate",children:"Mapping"}),(0,s.jsx)("div",{className:"notranslate text-break",style:{opacity:.6},id:"statistic-upload",children:c.stun.mapping})]})}),c.stun.filtering&&(0,s.jsx)(h.A.Item,{children:(0,s.jsxs)("div",{className:"d-xl-flex text-truncate",children:[(0,s.jsx)("div",{className:"endpoint-name flex-grow-1 notranslate text-truncate",children:"Filtering"}),(0,s.jsx)("div",{className:"notranslate text-break",style:{opacity:.6},id:"statistic-upload",children:c.stun.filtering})]})}),c.stun.mappedAddress&&(0,s.jsx)(h.A.Item,{children:(0,s.jsxs)("div",{className:"d-xl-flex text-truncate",children:[(0,s.jsx)("div",{className:"endpoint-name flex-grow-1 notranslate text-truncate",children:"MappedAddress"}),(0,s.jsx)("div",{className:"notranslate text-break",style:{opacity:.6},id:"statistic-upload",children:c.stun.mappedAddress})]})}),c.stun_tcp.ip&&(0,s.jsx)(h.A.Item,{children:(0,s.jsxs)("div",{className:"d-xl-flex text-truncate",children:[(0,s.jsx)("div",{className:"endpoint-name flex-grow-1 notranslate text-truncate",children:"STUN IP"}),(0,s.jsx)("div",{className:"notranslate text-break",style:{opacity:.6},id:"statistic-upload",children:c.stun_tcp.ip})]})}),(0,s.jsx)(h.A.Item,{className:"d-flex justify-content-center",children:(0,s.jsxs)(p.A,{children:[(0,s.jsxs)(v.A,{onSelect:async e=>{U(g,l,e)},as:p.A,variant:"outline-primary",title:"USE",children:[(0,s.jsx)(u.A.Item,{eventKey:"tcpudp",children:"TCP and UDP"}),(0,s.jsx)(u.A.Item,{eventKey:"tcp",children:"TCP"}),(0,s.jsx)(u.A.Item,{eventKey:"udp",children:"UDP"})]}),(0,s.jsx)(m.A,{variant:"outline-primary",onClick:o,children:"Edit"}),(0,s.jsxs)(v.A,{onSelect:async e=>{j(e)},as:p.A,variant:"outline-primary",title:(0,s.jsxs)(s.Fragment,{children:["Test",function(e){return e.tcp.loading||e.udp.loading||e.ip.loading||e.stun.loading||e.stun_tcp.loading}(c)&&(0,s.jsxs)(s.Fragment,{children:["\xa0",(0,s.jsx)(A.A,{size:"sm",animation:"border"})]})]}),children:[(0,s.jsxs)(u.A.Item,{disabled:c.tcp.loading,eventKey:"tcp",children:["TCP\xa0",c.tcp.loading&&(0,s.jsx)(A.A,{size:"sm",animation:"border"})]}),(0,s.jsxs)(u.A.Item,{disabled:c.udp.loading,eventKey:"udp",children:["UDP\xa0",c.udp.loading&&(0,s.jsx)(A.A,{size:"sm",animation:"border"})," "]}),(0,s.jsxs)(u.A.Item,{disabled:c.stun.loading,eventKey:"stun",children:["STUN\xa0",c.stun.loading&&(0,s.jsx)(A.A,{size:"sm",animation:"border"})]}),(0,s.jsxs)(u.A.Item,{disabled:c.stun_tcp.loading,eventKey:"stun-tcp",children:["STUN TCP\xa0",c.stun_tcp.loading&&(0,s.jsx)(A.A,{size:"sm",animation:"border"})]}),(0,s.jsxs)(u.A.Item,{disabled:c.ip.loading,eventKey:"ip",children:["IP\xa0",c.ip.loading&&(0,s.jsx)(A.A,{size:"sm",animation:"border"})]})]})]})})]})})]})},U=(e,t,n)=>{(0,f.kP)(b.rH.method.use,"/node","PUT",(0,a.v)(b.q,{tcp:"tcp"===n||"tcpudp"===n,udp:"udp"===n||"tcpudp"===n,hash:t})).then(async s=>{let{error:a}=s;void 0!==a?e.Error("change node failed, ".concat(a.code,"| ").concat(a.msg)):e.Info("Change ".concat(n," Node To ").concat(t," Successful"))})},D=(e,t,n)=>{(0,f.kP)(b.rH.method.latency,"/latency","POST",(0,a.v)(I.oL,{requests:[{hash:e,id:"latency",ipv6:y.oH,protocol:t}]})).then(async e=>{let{data:t,error:s}=e;s&&console.log("test failed ".concat(s.code,"| ").concat(s.msg));let a={Latency:"timeout"};if(t&&t.idLatencyMap.latency){let e=t.idLatencyMap.latency.reply;switch(e.case){case"latency":a={Latency:function(e){if(0===e.nanos&&0===Number(e.seconds))return"timeout";let t=1e9*Number(e.seconds)+1*e.nanos;return t>=36e11?"".concat(t/36e11," h"):t>=6e10?"".concat(t/6e10," m"):t>=1e9?"".concat(t/1e9," s"):t>=1e6?"".concat(t/1e6," ms"):t>=1e3?"".concat(t/1e3," us"):"".concat(t/1," ns")}(e.value)};break;case"ip":a={IPv4:e.value.ipv4,IPv6:e.value.ipv6};break;case"stun":a={Stun:{mapping:E(e.value.Mapping),filter:E(e.value.Filtering),mappedAddress:e.value.mappedAddress}}}}n(a)})}},8900:(e,t,n)=>{"use strict";n.d(t,{A:()=>y});var s=n(4617),a=n.n(s),l=n(2115),i=n(6647),o=n(1653),r=n(896);function d(e,t){return Array.isArray(e)?e.includes(t):e===t}let c=l.createContext({});c.displayName="AccordionContext";var u=n(5155);let p=l.forwardRef((e,t)=>{let{as:n="div",bsPrefix:s,className:i,children:p,eventKey:m,...x}=e,{activeEventKey:h}=(0,l.useContext)(c);return s=(0,o.oU)(s,"accordion-collapse"),(0,u.jsx)(r.A,{ref:t,in:d(h,m),...x,className:a()(i,s),children:(0,u.jsx)(n,{children:l.Children.only(p)})})});p.displayName="AccordionCollapse";let m=l.createContext({eventKey:""});m.displayName="AccordionItemContext";let x=l.forwardRef((e,t)=>{let{as:n="div",bsPrefix:s,className:i,onEnter:r,onEntering:d,onEntered:c,onExit:x,onExiting:h,onExited:v,...A}=e;s=(0,o.oU)(s,"accordion-body");let{eventKey:g}=(0,l.useContext)(m);return(0,u.jsx)(p,{eventKey:g,onEnter:r,onEntering:d,onEntered:c,onExit:x,onExiting:h,onExited:v,children:(0,u.jsx)(n,{ref:t,...A,className:a()(i,s)})})});x.displayName="AccordionBody";let h=l.forwardRef((e,t)=>{let{as:n="button",bsPrefix:s,className:i,onClick:r,...p}=e;s=(0,o.oU)(s,"accordion-button");let{eventKey:x}=(0,l.useContext)(m),h=function(e,t){let{activeEventKey:n,onSelect:s,alwaysOpen:a}=(0,l.useContext)(c);return l=>{let i=e===n?null:e;a&&(i=Array.isArray(n)?n.includes(e)?n.filter(t=>t!==e):[...n,e]:[e]),null==s||s(i,l),null==t||t(l)}}(x,r),{activeEventKey:v}=(0,l.useContext)(c);return"button"===n&&(p.type="button"),(0,u.jsx)(n,{ref:t,onClick:h,...p,"aria-expanded":Array.isArray(v)?v.includes(x):x===v,className:a()(i,s,!d(v,x)&&"collapsed")})});h.displayName="AccordionButton";let v=l.forwardRef((e,t)=>{let{as:n="h2","aria-controls":s,bsPrefix:l,className:i,children:r,onClick:d,...c}=e;return l=(0,o.oU)(l,"accordion-header"),(0,u.jsx)(n,{ref:t,...c,className:a()(i,l),children:(0,u.jsx)(h,{onClick:d,"aria-controls":s,children:r})})});v.displayName="AccordionHeader";let A=l.forwardRef((e,t)=>{let{as:n="div",bsPrefix:s,className:i,eventKey:r,...d}=e;s=(0,o.oU)(s,"accordion-item");let c=(0,l.useMemo)(()=>({eventKey:r}),[r]);return(0,u.jsx)(m.Provider,{value:c,children:(0,u.jsx)(n,{ref:t,...d,className:a()(i,s)})})});A.displayName="AccordionItem";let g=l.forwardRef((e,t)=>{let{as:n="div",activeKey:s,bsPrefix:r,className:d,onSelect:p,flush:m,alwaysOpen:x,...h}=(0,i.Zw)(e,{activeKey:"onSelect"}),v=(0,o.oU)(r,"accordion"),A=(0,l.useMemo)(()=>({activeEventKey:s,onSelect:p,alwaysOpen:x}),[s,p,x]);return(0,u.jsx)(c.Provider,{value:A,children:(0,u.jsx)(n,{ref:t,...h,className:a()(d,v,m&&"".concat(v,"-flush"))})})});g.displayName="Accordion";let y=Object.assign(g,{Button:h,Collapse:p,Item:A,Header:v,Body:x})},896:(e,t,n)=>{"use strict";n.d(t,{A:()=>A});var s=n(4617),a=n.n(s),l=n(3762),i=n(2115),o=n(2400),r=n(5998),d=n(4837),c=n(4309),u=n(3557),p=n(4579),m=n(5155);let x={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function h(e,t){let n=t["offset".concat(e[0].toUpperCase()).concat(e.slice(1))],s=x[e];return n+parseInt((0,l.A)(t,s[0]),10)+parseInt((0,l.A)(t,s[1]),10)}let v={[o.kp]:"collapse",[o.ze]:"collapsing",[o.ns]:"collapsing",[o._K]:"collapse show"},A=i.forwardRef((e,t)=>{let{onEnter:n,onEntering:s,onEntered:l,onExit:o,onExiting:x,className:A,children:g,dimension:y="height",in:j=!1,timeout:f=300,mountOnEnter:N=!1,unmountOnExit:w=!1,appear:b=!1,getDimensionValue:I=h,...C}=e,_="function"==typeof y?y():y,k=(0,i.useMemo)(()=>(0,c.A)(e=>{e.style[_]="0"},n),[_,n]),E=(0,i.useMemo)(()=>(0,c.A)(e=>{let t="scroll".concat(_[0].toUpperCase()).concat(_.slice(1));e.style[_]="".concat(e[t],"px")},s),[_,s]),P=(0,i.useMemo)(()=>(0,c.A)(e=>{e.style[_]=null},l),[_,l]),S=(0,i.useMemo)(()=>(0,c.A)(e=>{e.style[_]="".concat(I(_,e),"px"),(0,u.A)(e)},o),[o,I,_]),T=(0,i.useMemo)(()=>(0,c.A)(e=>{e.style[_]=null},x),[_,x]);return(0,m.jsx)(p.A,{ref:t,addEndListener:d.A,...C,"aria-expanded":C.role?j:null,onEnter:k,onEntering:E,onEntered:P,onExit:S,onExiting:T,childRef:(0,r.am)(g),in:j,timeout:f,mountOnEnter:N,unmountOnExit:w,appear:b,children:(e,t)=>i.cloneElement(g,{...t,className:a()(A,g.props.className,v[e],"width"===_&&"collapse-horizontal")})})})},4309:(e,t,n)=>{"use strict";n.d(t,{A:()=>s});let s=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(e=>null!=e).reduce((e,t)=>{if("function"!=typeof t)throw Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var n=arguments.length,s=Array(n),a=0;a<n;a++)s[a]=arguments[a];e.apply(this,s),t.apply(this,s)}},null)}}},e=>{var t=t=>e(e.s=t);e.O(0,[295,375,515,920,637,354,340,190,723,922,969,112,441,517,358],()=>t(5880)),_N_E=e.O()}]);
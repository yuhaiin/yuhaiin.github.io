"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[698],{2859:(e,o,n)=>{n.d(o,{$d:()=>r});var l=n(5155);n(2115);var a=n(6180),t=n(6121),s=n(3667);let r=e=>(0,l.jsxs)(a.A.Group,{as:t.A,className:"mb-2",children:[(0,l.jsx)(a.A.Label,{column:!0,sm:2,children:e.label}),(0,l.jsx)(s.A,{sm:10,className:"d-flex align-items-center",children:(0,l.jsx)(a.A.Check,{className:"d-flex align-items-center",type:"switch",checked:e.checked,onChange:()=>e.onChange()})})]})},148:(e,o,n)=>{n.d(o,{u:()=>r,y:()=>c});var l=n(5155),a=n(2115),t=n(1757),s=n(491);let r=(0,a.createContext)({Info:e=>{},Error:e=>{}}),c=e=>{let{children:o}=e,[n,c]=(0,a.useState)({value:{},index:0}),p=(e,o)=>c(n=>({value:{...n.value,[n.index]:{text:e,type:o}},index:n.index+1}));return(0,l.jsxs)(r.Provider,{value:{Info:e=>{console.log(e),p(e,"success")},Error:e=>{console.error(e),p(e,"danger")}},children:[(0,l.jsx)(t.A,{className:"p-3",position:"top-center",containerPosition:"fixed",style:{zIndex:999999},children:Object.entries(n.value).map(e=>{let[o,a]=e;return(0,l.jsxs)(s.A,{role:"alert","aria-live":"assertive",show:!0,bg:a.type,onClose:()=>{let e=n.value;delete e[o],c({...n,value:e})},"aria-atomic":"true",delay:4e3,autohide:!0,animation:!0,children:[(0,l.jsxs)(s.A.Header,{children:[(0,l.jsx)("strong",{className:"me-auto",children:"Notification"}),(0,l.jsx)("small",{className:"text-muted",children:"just now"})]}),(0,l.jsx)(s.A.Body,{className:"text-center",children:a.text})]},"toast"+o)})}),o]})}},698:(e,o,n)=>{n.d(o,{E:()=>er,y:()=>es});var l=n(5155),a=n(2115),t=n(2963),s=n(0),r=n(8143),c=n(3614),p=n(9637),i=n(6180),d=n(4995),h=n(8927),u=n(9169),v=n(148),m=n(2049),x=n(57),C=n(8003),g=n(6121),j=n(3667),w=n(1703),b=n(7204),y=n(2859),f=n(3577),A=n(6496);function D(e,o){return o?function(n){n(e),o(e)}:function(e){}}let U=a.forwardRef((e,o)=>{let n=D(e.point,e.onChange),s=e=>{n(o=>{o.protocols.splice(e,1)})};function r(o,l){e.onChange&&n(e=>{e.protocols[o].protocol.value=l})}let c=(o,l)=>{e.point.protocols.length<=1||o&&0===l||!o&&l===e.point.protocols.length-1||n(e=>{let n=e.protocols[l];e.protocols[l]=e.protocols[l+(o?-1:1)],e.protocols[l+(o?-1:1)]=n})},[p,d]=(0,a.useState)({value:"simple"});return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(b.a9,{label:"Name",value:e.point.name,onChange:e=>{n(o=>o.name=e)}}),(0,l.jsx)(b.a9,{label:"Group",value:e.point.group,onChange:e=>{n(o=>o.group=e)},reminds:e.groups?e.groups.map(e=>new b.mI({label:e,value:e})):void 0}),(0,l.jsx)(b.a9,{label:"Hash",value:e.point.hash,onChange:e=>{n(o=>o.hash=e)}}),e.point.protocols.map((o,n)=>{switch(o.protocol.case){case"simple":return(0,l.jsx)(S,{protocol:o.protocol.value,onChange:e=>r(n,e),onClose:()=>s(n),moveUpDown:new b.fH(e.point.protocols.length,n,e=>{c(e,n)})},n);case"websocket":return(0,l.jsx)(F,{protocol:o.protocol.value,onChange:e=>r(n,e),onClose:()=>s(n),moveUpDown:new b.fH(e.point.protocols.length,n,e=>{c(e,n)})},n);case"shadowsocks":return(0,l.jsx)(P,{protocol:o.protocol.value,onChange:e=>r(n,e),onClose:()=>s(n),moveUpDown:new b.fH(e.point.protocols.length,n,e=>{c(e,n)})},n);case"quic":return(0,l.jsx)(R,{protocol:o.protocol.value,onChange:e=>r(n,e),onClose:()=>s(n),moveUpDown:new b.fH(e.point.protocols.length,n,e=>{c(e,n)})},n);case"vless":return(0,l.jsx)(q,{protocol:o.protocol.value,onChange:e=>r(n,e),onClose:()=>s(n),moveUpDown:new b.fH(e.point.protocols.length,n,e=>{c(e,n)})},n);case"vmess":return(0,l.jsx)(Q,{protocol:o.protocol.value,onChange:e=>r(n,e),onClose:()=>s(n),moveUpDown:new b.fH(e.point.protocols.length,n,e=>{c(e,n)})},n);case"trojan":return(0,l.jsx)(Y,{protocol:o.protocol.value,onChange:e=>r(n,e),onClose:()=>s(n),moveUpDown:new b.fH(e.point.protocols.length,n,e=>{c(e,n)})},n);case"shadowsocksr":return(0,l.jsx)(W,{protocol:o.protocol.value,onChange:e=>r(n,e),onClose:()=>s(n),moveUpDown:new b.fH(e.point.protocols.length,n,e=>{c(e,n)})},n);case"obfsHttp":return(0,l.jsx)(_,{protocol:o.protocol.value,onChange:e=>r(n,e),onClose:()=>s(n),moveUpDown:new b.fH(e.point.protocols.length,n,e=>{c(e,n)})},n);case"none":return(0,l.jsx)(E,{onClose:()=>s(n),moveUpDown:new b.fH(e.point.protocols.length,n,e=>{c(e,n)})},n);case"socks5":return(0,l.jsx)(B,{protocol:o.protocol.value,onChange:e=>r(n,e),onClose:()=>s(n),moveUpDown:new b.fH(e.point.protocols.length,n,e=>{c(e,n)})},n);case"http":return(0,l.jsx)(Z,{protocol:o.protocol.value,onChange:e=>r(n,e),onClose:()=>s(n),moveUpDown:new b.fH(e.point.protocols.length,n,e=>{c(e,n)})},n);case"direct":return(0,l.jsx)(L,{protocol:o.protocol.value,onChange:e=>r(n,e),onClose:()=>s(n),moveUpDown:new b.fH(e.point.protocols.length,n,e=>{c(e,n)})},n);case"reject":return(0,l.jsx)(K,{protocol:o.protocol.value,onChange:e=>r(n,e),onClose:()=>s(n),moveUpDown:new b.fH(e.point.protocols.length,n,e=>{c(e,n)})},n);case"yuubinsya":return(0,l.jsx)(G,{protocol:o.protocol.value,onChange:e=>r(n,e),onClose:()=>s(n),moveUpDown:new b.fH(e.point.protocols.length,n,e=>{c(e,n)})},n);case"grpc":return(0,l.jsx)(V,{protocol:o.protocol.value,onChange:e=>r(n,e),onClose:()=>s(n),moveUpDown:new b.fH(e.point.protocols.length,n,e=>{c(e,n)})},n);case"http2":return(0,l.jsx)(J,{protocol:o.protocol.value,onChange:e=>r(n,e),onClose:()=>s(n),moveUpDown:new b.fH(e.point.protocols.length,n,e=>{c(e,n)})},n);case"reality":return(0,l.jsx)(z,{protocol:o.protocol.value,onChange:e=>r(n,e),onClose:()=>s(n),moveUpDown:new b.fH(e.point.protocols.length,n,e=>{c(e,n)})},n);case"tls":return(0,l.jsx)(T,{protocol:o.protocol.value,onChange:e=>r(n,e),onClose:()=>s(n),moveUpDown:new b.fH(e.point.protocols.length,n,e=>{c(e,n)})},n);case"wireguard":return(0,l.jsx)(k,{protocol:o.protocol.value,onChange:e=>r(n,e),onClose:()=>s(n),moveUpDown:new b.fH(e.point.protocols.length,n,e=>{c(e,n)})},n);case"mux":return(0,l.jsx)(M,{protocol:o.protocol.value,onChange:e=>r(n,e),onClose:()=>s(n),moveUpDown:new b.fH(e.point.protocols.length,n,e=>{c(e,n)})},n);case"drop":return(0,l.jsx)(X,{protocol:o.protocol.value,onChange:e=>r(n,e),onClose:()=>s(n),moveUpDown:new b.fH(e.point.protocols.length,n,e=>{c(e,n)})},n);default:return(0,l.jsx)(I,{onClose:()=>s(n),moveUpDown:new b.fH(e.point.protocols.length,n,e=>{c(e,n)})},n)}}),(0,l.jsx)(x.A,{variant:"flush",children:(0,l.jsx)(x.A.Item,{children:(0,l.jsxs)(C.A,{children:[(0,l.jsx)(i.A.Select,{value:p.value,onChange:e=>{d({value:e.target.value})},children:Object.keys(ee).map(e=>(0,l.jsx)("option",{value:e,children:e},e))}),(0,l.jsx)(t.A,{variant:"outline-secondary",onClick:()=>{n(e=>{e.protocols.push(ee[p.value])})},children:"Add"})]})})})]})});function N(e){var o;return(0,l.jsxs)(i.A.Group,{as:g.A,className:"mb-3",children:[(0,l.jsx)(i.A.Label,{column:!0,sm:2,className:"nowrap",children:e.title}),e.data&&e.data.map((o,n)=>(0,l.jsx)(j.A,{sm:{span:10,offset:0!==n?2:0},children:(0,l.jsx)(C.A,{className:"mb-2",children:(0,l.jsx)(b.mc,{title:"Peer",onClose:()=>{e.data&&(e.data.splice(n,1),e.onChange(e.data))},children:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(b.a9,{label:"Endpoint",value:o.endpoint,onChange:o=>{e.data&&(e.data[n].endpoint=o,e.onChange(e.data))}}),(0,l.jsx)(b.a9,{label:"PublicKey",value:o.publicKey,onChange:o=>{e.data&&(e.data[n].publicKey=o,e.onChange(e.data))}}),(0,l.jsx)(b.e9,{title:"AllowedIps",data:o.allowedIps,onChange:o=>{e.data&&(e.data[n].allowedIps=o,e.onChange(e.data))}})]})})})},n)),(0,l.jsx)(j.A,{sm:{span:10,offset:(null===(o=e.data)||void 0===o?void 0:o.length)!==0?2:0},children:(0,l.jsx)(C.A,{className:"mb-2 justify-content-md-end",children:(0,l.jsx)(t.A,{variant:"outline-success",onClick:()=>{let o=(0,f.v)(w.GL,{allowedIps:["0.0.0.0/0"],endpoint:"127.0.0.1:51820",publicKey:"SHVqHEGI7k2+OQ/oWMmWY2EQObbRQjRBdDPimh0h1WY="});e.data?(e.data.push(o),e.onChange(e.data)):e.onChange([o])},children:(0,l.jsx)("i",{className:"bi bi-plus-lg"})})})})]})}let k=e=>{let o=D(e.protocol,e.onChange);return(0,l.jsx)(b.mc,{title:"Wireguard",onClose:e.onClose,moveUpDown:e.moveUpDown,children:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(b.a9,{label:"SecretKey",value:e.protocol.secretKey,placeholder:"SHVqHEGI7k2+OQ/oWMmWY2EQObbRQjRBdDPimh0h1WY=",onChange:e=>{o(o=>o.secretKey=e)}}),(0,l.jsx)(b.a9,{label:"MTU",value:e.protocol.mtu,onChange:e=>{isNaN(Number(e))||o(o=>o.mtu=Number(e))}}),(0,l.jsx)(b.a9,{label:"IdleTimeout",value:e.protocol.idleTimeout,onChange:e=>{isNaN(Number(e))||o(o=>o.idleTimeout=Number(e))}}),(0,l.jsx)(b.a9,{label:"Reserved",value:btoa(String.fromCharCode.apply(null,e.protocol.reserved)),onChange:e=>{o(o=>o.reserved=Uint8Array.from(atob(e),e=>e.charCodeAt(0)))}}),(0,l.jsx)(b.e9,{title:"Endpoint",data:e.protocol.endpoint,onChange:e=>{o(o=>o.endpoint=e)}}),(0,l.jsx)(N,{title:"Peers",data:e.protocol.peers,onChange:e=>{o(o=>o.peers=e)}})]})})};function H(e){var o;return(0,l.jsxs)(i.A.Group,{as:g.A,className:"mb-3 flex-grow-1 overflow-auto",children:[(0,l.jsx)(i.A.Label,{column:!0,sm:2,className:"nowrap",children:e.title}),e.data&&e.data.map((o,n)=>(0,l.jsx)(j.A,{sm:{span:10,offset:0!==n?2:0},children:(0,l.jsx)(C.A,{className:"mb-2",children:(0,l.jsx)(b.mc,{title:"Host",onClose:()=>{e.data&&(e.data.splice(n,1),e.onChange(e.data))},children:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(b.a9,{label:"Host",value:o.host,onChange:o=>{e.data&&(e.data[n].host=o,e.onChange(e.data))}}),(0,l.jsx)(b.a9,{label:"Port",value:o.port,onChange:o=>{!isNaN(Number(o))&&e.data&&(e.data[n].port=Number(o),e.onChange(e.data))}})]})})})},n)),(0,l.jsx)(j.A,{sm:{span:10,offset:(null===(o=e.data)||void 0===o?void 0:o.length)!==0?2:0},children:(0,l.jsx)(C.A,{className:"mb-2 justify-content-md-end",children:(0,l.jsx)(t.A,{variant:"outline-success",onClick:()=>{let o=(0,f.v)(w.g3,{});e.data?(e.data.push(o),e.onChange(e.data)):e.onChange([o])},children:(0,l.jsx)("i",{className:"bi bi-plus-lg"})})})})]})}let S=e=>{let o=D(e.protocol,e.onChange),{data:n}=(0,d.Ay)("/interfaces",(0,h.AD)(A.Yl.method.get_interface),{revalidateOnFocus:!0});return(0,l.jsx)(b.mc,{title:"Simple",onClose:e.onClose,moveUpDown:e.moveUpDown,children:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(b.a9,{label:"Host",value:e.protocol.host,onChange:e=>{o(o=>o.host=e)}}),(0,l.jsx)(b.a9,{label:"Network Interface",value:e.protocol.networkInterface,onChange:e=>{o(o=>o.networkInterface=e)},reminds:null==n?void 0:n.interfaces.map(e=>{if(e.name){var o;return{label:e.name,value:e.name,label_children:null===(o=e.addresses)||void 0===o?void 0:o.map(e=>e||"")}}}).filter(e=>!!e)}),(0,l.jsx)(b.a9,{label:"Port",value:e.protocol.port,onChange:e=>{let n=Number(e);isNaN(n)||n>65535||n<0||o(e=>e.port=n)}}),(0,l.jsx)(H,{title:"AlternateHost",data:e.protocol.alternateHost,onChange:e=>{o(o=>o.alternateHost=e)}})]})})},E=e=>(0,l.jsx)(b.mc,{title:"None",onClose:e.onClose,moveUpDown:e.moveUpDown,children:(0,l.jsx)("div",{className:"text-center my-2",style:{opacity:"0.4"},children:"None"})}),I=e=>(0,l.jsx)(b.mc,{title:"Unknown",onClose:e.onClose,moveUpDown:e.moveUpDown,children:(0,l.jsx)("div",{className:"text-center my-2",style:{opacity:"0.4"},children:"Unknown"})}),F=e=>{let o=D(e.protocol,e.onChange);return(0,l.jsx)(b.mc,{title:"Websocket",onClose:e.onClose,moveUpDown:e.moveUpDown,children:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(b.a9,{label:"Host",value:e.protocol.host,onChange:e=>{o(o=>o.host=e)}}),(0,l.jsx)(b.a9,{label:"Path",value:e.protocol.path,onChange:e=>{o(o=>o.path=e)}})]})})},P=e=>{let o=D(e.protocol,e.onChange);return(0,l.jsx)(b.mc,{title:"Shadowsocks",onClose:e.onClose,moveUpDown:e.moveUpDown,children:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(b.a9,{label:"Method",value:e.protocol.method,onChange:e=>{o(o=>o.method=e)}}),(0,l.jsx)(b.a9,{label:"Password",value:e.protocol.password,onChange:e=>{o(o=>o.password=e)}})]})})},O=e=>{let o=D(e.tls,e.onChange);return(0,l.jsxs)(l.Fragment,{children:[(void 0===e.showEnabled||e.showEnabled)&&(0,l.jsx)(y.$d,{label:"TLS Enabled",checked:e.tls.enable,onChange:()=>{o(e=>e.enable=!e.enable)}}),(0,l.jsx)(y.$d,{label:"InsecureSkipVerify",checked:e.tls.insecureSkipVerify,onChange:()=>{o(e=>e.insecureSkipVerify=!e.insecureSkipVerify)}}),(0,l.jsx)(b.e9,{title:"ServerNames",data:e.tls.serverNames,onChange:e=>{o(o=>o.serverNames=e)}}),(0,l.jsx)(b.e9,{title:"NextProtos",data:e.tls.nextProtos,onChange:e=>{o(o=>o.nextProtos=e)}}),(0,l.jsx)(b.n4,{title:"CaCert",textarea:!0,data:e.tls.caCert,onChange:e=>{o(o=>o.caCert=e)}})]})},R=e=>{var o;let n=D(e.protocol,e.onChange);return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(b.mc,{title:"Quic",onClose:e.onClose,moveUpDown:e.moveUpDown,children:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(b.a9,{label:"Host",value:e.protocol.host,onChange:e=>{n(o=>o.host=e)}}),(0,l.jsx)(O,{showEnabled:!1,tls:null!==(o=e.protocol.tls)&&void 0!==o?o:(0,f.v)(w.Qi,{}),onChange:e=>{n(o=>o.tls=e)}})]})})})},W=e=>{let o=D(e.protocol,e.onChange);return(0,l.jsx)(b.mc,{title:"Shadowsocksr",onClose:e.onClose,moveUpDown:e.moveUpDown,children:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(b.a9,{label:"Server",value:e.protocol.server,onChange:e=>{o(o=>o.server=e)}}),(0,l.jsx)(b.a9,{label:"Port",value:e.protocol.port,onChange:e=>{o(o=>o.port=e)}}),(0,l.jsx)(b.a9,{label:"Method",value:e.protocol.method,placeholder:"chacha20-ietf",onChange:e=>{o(o=>o.method=e)}}),(0,l.jsx)(b.a9,{label:"Protocol",value:e.protocol.protocol,placeholder:"auth_aes128_sha1",onChange:e=>{o(o=>o.protocol=e)}}),(0,l.jsx)(b.a9,{label:"ProtocolParam",value:e.protocol.protoparam,onChange:e=>{o(o=>o.protoparam=e)}}),(0,l.jsx)(b.a9,{label:"Obfs",value:e.protocol.obfs,placeholder:"http_post",onChange:e=>{o(o=>o.obfs=e)}}),(0,l.jsx)(b.a9,{label:"ObfsParam",value:e.protocol.obfsparam,placeholder:"#name=v",onChange:e=>{o(o=>o.obfsparam=e)}})]})})},Q=e=>{let o=D(e.protocol,e.onChange);return(0,l.jsx)(b.mc,{title:"Vmess",onClose:e.onClose,moveUpDown:e.moveUpDown,children:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(b.a9,{label:"AlterId",value:e.protocol.alterId,onChange:e=>{o(o=>o.alterId=e)}}),(0,l.jsx)(b.a9,{label:"Security",value:e.protocol.security,placeholder:"chacha20-poly1305",onChange:e=>{o(o=>o.security=e)}}),(0,l.jsx)(b.a9,{label:"UUID",value:e.protocol.uuid,placeholder:"9d5031b6-4ef5-11ee-be56-0242ac120002",onChange:e=>{o(o=>o.uuid=e)}})]})})},Y=e=>{let o=D(e.protocol,e.onChange);return(0,l.jsx)(b.mc,{title:"Trojan",onClose:e.onClose,moveUpDown:e.moveUpDown,children:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(b.a9,{label:"Password",value:e.protocol.password,onChange:e=>{o(o=>o.password=e)}}),(0,l.jsx)(b.a9,{label:"Peer",value:e.protocol.peer,onChange:e=>{o(o=>o.peer=e)}})]})})},B=e=>{let o=D(e.protocol,e.onChange);return(0,l.jsx)(b.mc,{title:"Socks5",onClose:e.onClose,moveUpDown:e.moveUpDown,children:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(b.a9,{label:"Hostname",value:e.protocol.hostname,placeholder:"127.0.0.1",onChange:e=>{o(o=>o.hostname=e)}}),(0,l.jsx)(b.a9,{label:"User",value:e.protocol.user,onChange:e=>{o(o=>o.user=e)}}),(0,l.jsx)(b.a9,{label:"Password",value:e.protocol.password,onChange:e=>{o(o=>o.password=e)}}),(0,l.jsx)(b.a9,{label:"Override Port",value:e.protocol.overridePort,onChange:e=>{let n=Number(e);isNaN(n)||n>65535||n<0||o(e=>e.overridePort=n)}})]})})},Z=e=>{let o=D(e.protocol,e.onChange);return(0,l.jsx)(b.mc,{title:"HTTP",onClose:e.onClose,moveUpDown:e.moveUpDown,children:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(b.a9,{label:"User",value:e.protocol.user,onChange:e=>{o(o=>o.user=e)}}),(0,l.jsx)(b.a9,{label:"Password",value:e.protocol.password,onChange:e=>{o(o=>o.password=e)}})]})})},L=e=>{let o=D(e.protocol,e.onChange),{data:n}=(0,d.Ay)("/interfaces",(0,h.AD)(A.Yl.method.get_interface),{revalidateOnFocus:!0});return(0,l.jsx)(b.mc,{title:"Direct",onClose:e.onClose,moveUpDown:e.moveUpDown,children:(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(b.a9,{label:"Network Interface",value:e.protocol.networkInterface,onChange:e=>{o(o=>o.networkInterface=e)},reminds:null==n?void 0:n.interfaces.map(e=>{if(e.name){var o;return{label:e.name,value:e.name,label_children:null===(o=e.addresses)||void 0===o?void 0:o.map(e=>e||"")}}}).filter(e=>!!e)})})})},K=e=>(0,l.jsx)(b.mc,{title:"Reject",onClose:e.onClose,moveUpDown:e.moveUpDown,children:(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("div",{className:"text-center my-2",style:{opacity:"0.4"},children:"Reject"})})}),G=e=>{let o=D(e.protocol,e.onChange);return(0,l.jsx)(b.mc,{title:"Yuubinsya",onClose:e.onClose,moveUpDown:e.moveUpDown,children:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(y.$d,{label:"TCP Encrypt",checked:e.protocol.tcpEncrypt,onChange:()=>{o(e=>e.tcpEncrypt=!e.tcpEncrypt)}}),(0,l.jsx)(y.$d,{label:"UDP Encrypt",checked:e.protocol.udpEncrypt,onChange:()=>{o(e=>e.udpEncrypt=!e.udpEncrypt)}}),(0,l.jsx)(y.$d,{label:"UdpOverStream",checked:e.protocol.udpOverStream,onChange:()=>{o(e=>e.udpOverStream=!e.udpOverStream)}}),(0,l.jsx)(b.a9,{label:"Password",value:e.protocol.password,onChange:e=>{o(o=>o.password=e)}})]})})},T=e=>(0,l.jsx)(b.mc,{title:"Tls",onClose:e.onClose,moveUpDown:e.moveUpDown,children:(0,l.jsx)(O,{tls:e.protocol,onChange:e.onChange})}),M=e=>{let o=D(e.protocol,e.onChange);return(0,l.jsx)(b.mc,{title:"Mux",onClose:e.onClose,moveUpDown:e.moveUpDown,children:(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(b.a9,{label:"Concurrency",value:e.protocol.concurrency,onChange:e=>{isNaN(Number(e))||o(o=>o.concurrency=Number(e))}})})})},X=e=>(0,l.jsx)(b.mc,{title:"Drop",onClose:e.onClose,moveUpDown:e.moveUpDown,children:(0,l.jsx)("div",{className:"text-center my-2",style:{opacity:"0.4"},children:"Drop"})}),q=e=>{let o=D(e.protocol,e.onChange);return(0,l.jsx)(b.mc,{title:"Vless",onClose:e.onClose,moveUpDown:e.moveUpDown,children:(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(b.a9,{label:"UUID",value:e.protocol.uuid,onChange:e=>{o(o=>o.uuid=e)}})})})},_=e=>{let o=D(e.protocol,e.onChange);return(0,l.jsx)(b.mc,{title:"ObfsHttp",onClose:e.onClose,moveUpDown:e.moveUpDown,children:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(b.a9,{label:"Host",value:e.protocol.host,onChange:e=>{o(o=>o.host=e)}}),(0,l.jsx)(b.a9,{label:"Port",value:e.protocol.port,onChange:e=>{o(o=>o.port=e)}})]})})},V=e=>{var o;let n=D(e.protocol,e.onChange);return(0,l.jsx)(b.mc,{title:"Grpc",onClose:e.onClose,moveUpDown:e.moveUpDown,children:(0,l.jsx)(O,{tls:null!==(o=e.protocol.tls)&&void 0!==o?o:(0,f.v)(w.Qi,{}),onChange:e=>{n(o=>o.tls=e)}})})},J=e=>{let o=D(e.protocol,e.onChange);return(0,l.jsx)(b.mc,{title:"Http2",onClose:e.onClose,moveUpDown:e.moveUpDown,children:(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(b.a9,{label:"Concurrency",value:e.protocol.concurrency,onChange:e=>{isNaN(Number(e))||o(o=>o.concurrency=Number(e))}})})})},z=e=>{let o=D(e.protocol,e.onChange);return(0,l.jsx)(b.mc,{title:"Reality",onClose:e.onClose,moveUpDown:e.moveUpDown,children:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(y.$d,{label:"Debug",checked:e.protocol.debug,onChange:()=>{o(e=>e.debug=!e.debug)}}),(0,l.jsx)(b.a9,{label:"PublicKey",value:e.protocol.publicKey,onChange:e=>{o(o=>o.publicKey=e)}}),(0,l.jsx)(b.a9,{label:"ServerName",value:e.protocol.serverName,onChange:e=>{o(o=>o.serverName=e)}}),(0,l.jsx)(b.a9,{label:"ShortId",value:e.protocol.shortId,onChange:e=>{o(o=>o.shortId=e)}})]})})},$=(0,f.v)(w.Qi,{enable:!1,caCert:[new TextEncoder().encode("-----CERTIFICATE-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQD4MVvq8SAOzdeE\nSUfehAij/kdTYKPfuc+5SBTNSykilsGsY1mEu4qS6Abc/8bfRM7e9+4bAkA9rSma\np9Rza0YWNwdYQD3j3vuFlR6ic6tTYN7estRGGFOoI5MxA8OsYDbWNnO/3jYlErtn\nXUqDK5iABtBYNsSrLEc/Y2iISCm0zIT7Bfn3gzboggbqx5bpWjT5HmMRZmezl6EB\ny6HjCSIgZzP2v3yOfOVcu70vKABD3X1bzaKEn86rXNra0TZkqvB9vPv1PsBrELrO\nJxFRrAZylgeShzXgBXWjZKyj/toZ7FJLDv896sW/LuQarQufIcluisO++Xkz/EwQ\nVuXURFENAgMBAAECggEAIuOnaPfD+qjHiNZXVsmnQExswOUHLFpdv81I9VIBQpZA\nPAhMS3skoAGjg1omXfj5fsEKFPxkRPdMb6vzktUL6XALZYXEXX3ZTD456/rIJQSr\nV9F6Qy9ExVBY7u05SshMtSC69Ugawuvm8cEcyiMtASRUEe6DB5AGJPxHs863JC3M\nDcb5nNYPGjFCsahkwz4rQq/eQQI0j+8TZlHtPFjTCgqMblk2qR/vwkfTI6Wv/rO6\nYZ+M3xXpYc4j1qcHz5PFxIh3kZMgP/GdqLf+l5O4JaFv2aqxEmCjTHq3rAlxJeiV\ntCT5xYCwYzZtZkZq5jPP6CruNbO+L8iyLYHgLAgmsQKBgQD+Pw5nO2FR7arAMR4I\nK+bK2fFWfBTSkMRJrVqtbjr3LIjRGbGmqaF0HjR/8ZNxmyHBPmG35rfUw32NIAFc\nq9nqXVgeL07CXRadYaMoVys3mukMiQSnuycA5se5uNXk/8bulaudLX0Q605GDWto\n29W3CnWyuz1qNGRZHYZ0Duyk3QKBgQD5550WA/5Fwco2WosDqNBCetf3GZazwtKU\n46Dk1QEXeGYrw3p/o42+nNuawqqxbKhH/OJarir8oT4amXMaf60M3tRjj/DYRLx1\nWS9LkuU9bWSRFIpdJxC4BWi9IPCOsfbF0Cui9nD5dXCE6YwoQEXZ8OhE8+y+2fHU\nOULeYZVB8QKBgQDYtnrad3zuzry68aL9qB4jTj4uT7mX+hm2C3O9XLYaNfWw9ku9\nGd4rEgwB+rKJJYhSJZA5pwmO68s63csLaNhosoQHxp9FgP9jyvO90P9feEWpj6lO\nJ3KJjC02G10GwxaYCy+q3Dk8kLW5dHrXeHrkeJ/2Zy9kNaBLbaVLi+UeaQKBgQDo\n+GsRIxfgoBCLK019U9sSnsLGsSw02OLHuo07xvcFklBtbAa/BxIVKNXxKJlIXitj\nMPUz5Dpe2VK0KWmMwono/bKyPnYgp7OpEkNtCLx8z4Z5WdTDkq+bXi+OYS7hWDbd\nonuLqIMZi8ohnjfzLjfwPQ3LejqykStI1TjpZ79lgQKBgQDJAQe8Wnn2+QbWSbda\nNFGyG+hs7SkqqZmEQl3nA5kyAeOSsGtJG9tiLxDE52eMUM1iL6wNPQMDkROp3yRg\n7muJLMjiVeLFxXUyCXKj11W1VER5i16RsuWW3m5aGxumaXw4TJviJzT/dnwHe+x9\npWZqcBJfEUP6uTLSp3CmyEPcfA==\n-----CERTIFICATE-----")],insecureSkipVerify:!1,nextProtos:["h2"],serverNames:["www.example.com"]}),ee={simple:(0,f.v)(w._1,{protocol:{case:"simple",value:(0,f.v)(w.sT,{host:"",alternateHost:[],port:1080})}}),none:(0,f.v)(w._1,{protocol:{case:"none",value:(0,f.v)(w.YZ,{})}}),websocket:(0,f.v)(w._1,{protocol:{case:"websocket",value:(0,f.v)(w.BP,{host:"www.example.com",path:"/msg"})}}),quic:(0,f.v)(w._1,{protocol:{case:"quic",value:(0,f.v)(w.sn,{tls:$})}}),shadowsocks:(0,f.v)(w._1,{protocol:{case:"shadowsocks",value:(0,f.v)(w.t0,{method:"CHACHA20-IETF-POLY1305",password:"password"})}}),obfshttp:(0,f.v)(w._1,{protocol:{case:"obfsHttp",value:(0,f.v)(w.F7,{host:"www.example.com",port:"443"})}}),shadowsocksr:(0,f.v)(w._1,{protocol:{case:"shadowsocksr",value:(0,f.v)(w.hX,{method:"chacha20-ietf",obfs:"http_post",obfsparam:"#name=v",password:"password",port:"1080",protocol:"auth_aes128_sha1",protoparam:"",server:"127.0.0.1"})}}),vmess:(0,f.v)(w._1,{protocol:{case:"vmess",value:(0,f.v)(w.s2,{alterId:"0",security:"chacha20-poly1305",uuid:"9d5031b6-4ef5-11ee-be56-0242ac120002"})}}),trojan:(0,f.v)(w._1,{protocol:{case:"trojan",value:(0,f.v)(w.SD,{password:"password",peer:"peer"})}}),socks5:(0,f.v)(w._1,{protocol:{case:"socks5",value:(0,f.v)(w.AK,{hostname:"127.0.0.1:1080",password:"password",user:"username"})}}),http:(0,f.v)(w._1,{protocol:{case:"http",value:(0,f.v)(w.UM,{password:"password",user:"username"})}}),direct:(0,f.v)(w._1,{protocol:{case:"direct",value:(0,f.v)(w.bw,{})}}),yuubinsya:(0,f.v)(w._1,{protocol:{case:"yuubinsya",value:(0,f.v)(w.lA,{tcpEncrypt:!0,udpEncrypt:!0,password:"password",udpOverStream:!1})}}),tls:(0,f.v)(w._1,{protocol:{case:"tls",value:$}}),wireguard:(0,f.v)(w._1,{protocol:{case:"wireguard",value:(0,f.v)(w.g2,{endpoint:["10.0.0.2/32"],mtu:1500,idleTimeout:3,reserved:new Uint8Array([0,0,0]),secretKey:"SHVqHEGI7k2+OQ/oWMmWY2EQObbRQjRBdDPimh0h1WY=",peers:[{allowedIps:["0.0.0.0/0"],endpoint:"127.0.0.1:51820",publicKey:"SHVqHEGI7k2+OQ/oWMmWY2EQObbRQjRBdDPimh0h1WY="}]})}}),mux:(0,f.v)(w._1,{protocol:{case:"mux",value:(0,f.v)(w.gE,{concurrency:8})}}),drop:(0,f.v)(w._1,{protocol:{case:"drop",value:(0,f.v)(w.fO,{})}}),vless:(0,f.v)(w._1,{protocol:{case:"vless",value:(0,f.v)(w.X_,{uuid:"c48619fe-8f02-49e0-b9e9-edf763e17e21"})}}),grpc:(0,f.v)(w._1,{protocol:{case:"grpc",value:(0,f.v)(w.E_,{tls:$})}}),http2:(0,f.v)(w._1,{protocol:{case:"http2",value:(0,f.v)(w.ql,{concurrency:8})}}),reality:(0,f.v)(w._1,{protocol:{case:"reality",value:(0,f.v)(w.K0,{debug:!1,publicKey:"SHVqHEGI7k2+OQ/oWMmWY2EQObbRQjRBdDPimh0h1WY=",serverName:"127.0.0.1",shortId:"9d5031b6-4ef5-11ee-be56-0242ac120002"})}})};var eo=n(950),en=n(9093),el=n(4504),ea=n(1936),et=n(9969);function es(e){let o=(0,a.useContext)(v.u),[n,i]=(0,a.useState)({show:!1,data:""}),{data:x,error:C,isLoading:g,isValidating:j,mutate:w}=(0,d.Ay)(""===e.hash?void 0:"/node",(0,h.AD)(et.rH.method.get,"POST",(0,f.v)(ea.g8,{value:e.hash}),e.point),{shouldRetryOnError:!1,keepPreviousData:!1,revalidateOnFocus:!1});return(0,a.useEffect)(()=>{w()},[e.hash]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(er,{show:n.show,data:n.data,plaintext:!0,onHide:()=>i({...n,show:!1})}),(0,l.jsxs)(s.A,{show:!n.show&&e.show,scrollable:!0,"aria-labelledby":"contained-modal-title-vcenter",size:"xl",onHide:()=>{e.onHide()},centered:!0,children:[(0,l.jsx)(s.A.Header,{closeButton:!0,children:(0,l.jsx)(s.A.Title,{id:"contained-modal-title-vcenter",children:e.hash})}),(0,l.jsx)(s.A.Body,{children:(0,l.jsx)("fieldset",{disabled:!e.editable,children:C?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("h4",{className:"text-center my-2",children:[C.code," - ",C.msg]}),(0,l.jsx)("pre",{className:"text-center my-2 text-danger lead",children:C.raw})]}):j||g||!x?(0,l.jsx)(u.A,{}):(0,l.jsx)(U,{point:x,groups:e.groups,onChange:o=>{e.editable&&w((0,eo.o)(m.Ac,o),!1)}})})}),(0,l.jsxs)(s.A.Footer,{children:[e.onDelete&&(0,l.jsxs)(r.A,{onSelect:o=>{"ok"===o&&e.onDelete&&(e.onHide(),e.onDelete())},as:c.A,variant:"outline-danger",title:"Remove",children:[(0,l.jsx)(p.A.Item,{eventKey:"ok",children:"OK"}),(0,l.jsx)(p.A.Item,{eventKey:"cancel",children:"Cancel"})]}),!C&&!j&&!g&&x&&(0,l.jsx)(t.A,{variant:"outline-primary",onClick:()=>{i({show:!0,data:(0,en.J7)(m.Ac,x,{prettySpaces:2})})},children:"JSON"}),(0,l.jsx)(t.A,{variant:"outline-secondary",onClick:()=>{e.onHide()},children:"Close"}),(0,l.jsx)(()=>e.editable?(0,l.jsx)(t.A,{variant:"outline-primary",disabled:j||g||C||!e.editable,onClick:()=>{x&&(e.isNew&&(x.hash=""),(0,h.kP)(et.rH.method.save,"/node","PATCH",x).then(async n=>{let{error:l}=n;l?o.Error(l.msg):(o.Info("save successful"),e.onSave&&e.onSave())}))},children:"Save"}):(0,l.jsx)(l.Fragment,{}),{})]})]})]})}let er=e=>{let o=(0,a.useContext)(v.u),[n,r]=(0,a.useState)({data:""});return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(s.A,{show:e.show,"aria-labelledby":"contained-modal-title-vcenter",size:"xl",onHide:()=>{e.onHide()},centered:!0,children:[!e.plaintext&&(0,l.jsx)(s.A.Header,{closeButton:!0,children:(0,l.jsx)(s.A.Title,{id:"contained-modal-title-vcenter",children:"Import JSON"})}),(0,l.jsx)(s.A.Body,{children:(0,l.jsx)(i.A.Control,{as:"textarea",readOnly:e.plaintext,value:e.data?e.data:n.data,style:{height:"65vh",fontFamily:"monospace"},onChange:e=>{r({data:e.target.value})}})}),(0,l.jsxs)(s.A.Footer,{children:[(0,l.jsx)(t.A,{variant:"outline-secondary",onClick:()=>{e.onHide()},children:"Close"}),(0,l.jsx)(()=>e.onSave?(0,l.jsx)(t.A,{variant:"outline-primary",onClick:()=>{let l=(0,el.mj)(m.Ac,n.data);e.isNew&&(l.hash=""),(0,h.kP)(et.rH.method.save,"/node","PATCH",l).then(async n=>{let{error:l}=n;void 0===l?(o.Info("save successful"),void 0!==e.onSave&&e.onSave()):o.Error(l.msg)})},children:"Save"}):(0,l.jsx)(l.Fragment,{}),{})]})]})})}},6496:(e,o,n)=>{n.d(o,{Yl:()=>r});var l=n(6788),a=n(4395),t=n(9297);let s=(0,l.w)("ChF0b29scy90b29scy5wcm90bxINeXVoYWlpbi50b29scyI6CgpJbnRlcmZhY2VzEiwKCmludGVyZmFjZXMYASADKAsyGC55dWhhaWluLnRvb2xzLkludGVyZmFjZSIsCglJbnRlcmZhY2USDAoEbmFtZRgBIAEoCRIRCglhZGRyZXNzZXMYAiADKAkySwoFdG9vbHMSQgoNZ2V0X2ludGVyZmFjZRIWLmdvb2dsZS5wcm90b2J1Zi5FbXB0eRoZLnl1aGFpaW4udG9vbHMuSW50ZXJmYWNlc0IvWi1naXRodWIuY29tL0FzdXRvcnVmYS95dWhhaWluL3BrZy9wcm90b3MvdG9vbHNiBnByb3RvMw",[t.t]),r=(0,a.Z)(s,0)}}]);
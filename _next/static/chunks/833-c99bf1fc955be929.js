"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[833],{7833:function(e,o,n){n.d(o,{b:function(){return eo},Z:function(){return en}});var l=n(7437),t=n(2265),a=n(2808),s=n(9882),r=n(7510),c=n(8785),p=n(3181),i=n(5554),h=n(7420),d=n(1617),u=n(879),v=n(716),x=n(1159),m=n(629),w=n(6541),C=n(4694),g=n(2312),j=n(358),b=n(6712),f=n(8401),y=n(8727),D=n(6601);function k(e,o){return o?function(n){n(e),o(e)}:function(e){}}let U=e=>{let o=k(e.point,e.onChange),n=e=>{o(o=>{o.protocols.splice(e,1)})},s=(n,l)=>{e.onChange&&o(e=>{e.protocols[n].protocol.value=l})},r=(n,l)=>{e.point.protocols.length<=1||n&&0===l||!n&&l===e.point.protocols.length-1||o(e=>{let o=e.protocols[l];e.protocols[l]=e.protocols[l+(n?-1:1)],e.protocols[l+(n?-1:1)]=o})},[c,p]=(0,t.useState)({value:"simple"});return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(y.Vf,{label:"Name",value:e.point.name,onChange:e=>{o(o=>o.name=e)}}),(0,l.jsx)(y.Vf,{label:"Group",value:e.point.group,onChange:e=>{o(o=>o.group=e)},reminds:e.groups?e.groups.map(e=>new y.u5({label:e,value:e})):void 0}),e.point.protocols.map((o,t)=>{switch(o.protocol.case){case"simple":return(0,l.jsx)(S,{protocol:o.protocol.value,onChange:e=>s(t,e),onClose:()=>n(t),moveUpDown:new y.kx(e.point.protocols.length,t,e=>{r(e,t)})},t);case"websocket":return(0,l.jsx)(W,{protocol:o.protocol.value,onChange:e=>s(t,e),onClose:()=>n(t),moveUpDown:new y.kx(e.point.protocols.length,t,e=>{r(e,t)})},t);case"shadowsocks":return(0,l.jsx)(P,{protocol:o.protocol.value,onChange:e=>s(t,e),onClose:()=>n(t),moveUpDown:new y.kx(e.point.protocols.length,t,e=>{r(e,t)})},t);case"quic":return(0,l.jsx)(I,{protocol:o.protocol.value,onChange:e=>s(t,e),onClose:()=>n(t),moveUpDown:new y.kx(e.point.protocols.length,t,e=>{r(e,t)})},t);case"vless":return(0,l.jsx)(M,{protocol:o.protocol.value,onChange:e=>s(t,e),onClose:()=>n(t),moveUpDown:new y.kx(e.point.protocols.length,t,e=>{r(e,t)})},t);case"vmess":return(0,l.jsx)(O,{protocol:o.protocol.value,onChange:e=>s(t,e),onClose:()=>n(t),moveUpDown:new y.kx(e.point.protocols.length,t,e=>{r(e,t)})},t);case"trojan":return(0,l.jsx)(A,{protocol:o.protocol.value,onChange:e=>s(t,e),onClose:()=>n(t),moveUpDown:new y.kx(e.point.protocols.length,t,e=>{r(e,t)})},t);case"shadowsocksr":return(0,l.jsx)(H,{protocol:o.protocol.value,onChange:e=>s(t,e),onClose:()=>n(t),moveUpDown:new y.kx(e.point.protocols.length,t,e=>{r(e,t)})},t);case"obfsHttp":return(0,l.jsx)(J,{protocol:o.protocol.value,onChange:e=>s(t,e),onClose:()=>n(t),moveUpDown:new y.kx(e.point.protocols.length,t,e=>{r(e,t)})},t);case"none":return(0,l.jsx)(V,{onClose:()=>n(t),moveUpDown:new y.kx(e.point.protocols.length,t,e=>{r(e,t)})},t);case"socks5":return(0,l.jsx)(Q,{protocol:o.protocol.value,onChange:e=>s(t,e),onClose:()=>n(t),moveUpDown:new y.kx(e.point.protocols.length,t,e=>{r(e,t)})},t);case"http":return(0,l.jsx)(B,{protocol:o.protocol.value,onChange:e=>s(t,e),onClose:()=>n(t),moveUpDown:new y.kx(e.point.protocols.length,t,e=>{r(e,t)})},t);case"direct":return(0,l.jsx)(Y,{protocol:o.protocol.value,onChange:e=>s(t,e),onClose:()=>n(t),moveUpDown:new y.kx(e.point.protocols.length,t,e=>{r(e,t)})},t);case"reject":return(0,l.jsx)(K,{protocol:o.protocol.value,onChange:e=>s(t,e),onClose:()=>n(t),moveUpDown:new y.kx(e.point.protocols.length,t,e=>{r(e,t)})},t);case"yuubinsya":return(0,l.jsx)(R,{protocol:o.protocol.value,onChange:e=>s(t,e),onClose:()=>n(t),moveUpDown:new y.kx(e.point.protocols.length,t,e=>{r(e,t)})},t);case"grpc":return(0,l.jsx)(X,{protocol:o.protocol.value,onChange:e=>s(t,e),onClose:()=>n(t),moveUpDown:new y.kx(e.point.protocols.length,t,e=>{r(e,t)})},t);case"http2":return(0,l.jsx)(z,{protocol:o.protocol.value,onChange:e=>s(t,e),onClose:()=>n(t),moveUpDown:new y.kx(e.point.protocols.length,t,e=>{r(e,t)})},t);case"reality":return(0,l.jsx)(_,{protocol:o.protocol.value,onChange:e=>s(t,e),onClose:()=>n(t),moveUpDown:new y.kx(e.point.protocols.length,t,e=>{r(e,t)})},t);case"tls":return(0,l.jsx)(q,{protocol:o.protocol.value,onChange:e=>s(t,e),onClose:()=>n(t),moveUpDown:new y.kx(e.point.protocols.length,t,e=>{r(e,t)})},t);case"wireguard":return(0,l.jsx)(F,{protocol:o.protocol.value,onChange:e=>s(t,e),onClose:()=>n(t),moveUpDown:new y.kx(e.point.protocols.length,t,e=>{r(e,t)})},t);case"mux":return(0,l.jsx)(L,{protocol:o.protocol.value,onChange:e=>s(t,e),onClose:()=>n(t),moveUpDown:new y.kx(e.point.protocols.length,t,e=>{r(e,t)})},t);case"drop":return(0,l.jsx)(G,{protocol:o.protocol.value,onChange:e=>s(t,e),onClose:()=>n(t),moveUpDown:new y.kx(e.point.protocols.length,t,e=>{r(e,t)})},t);default:return(0,l.jsx)(E,{onClose:()=>n(t),moveUpDown:new y.kx(e.point.protocols.length,t,e=>{r(e,t)})},t)}}),(0,l.jsx)(C.Z,{variant:"flush",children:(0,l.jsx)(C.Z.Item,{children:(0,l.jsxs)(g.Z,{children:[(0,l.jsx)(h.Z.Select,{value:c.value,onChange:e=>p({value:e.target.value}),children:Object.keys(ee).map(e=>(0,l.jsx)("option",{value:e,children:e},e))}),(0,l.jsx)(a.Z,{variant:"outline-secondary",onClick:()=>o(e=>{e.protocols.push(ee[c.value])}),children:"Add"})]})})})]})};function N(e){var o;return(0,l.jsxs)(h.Z.Group,{as:j.Z,className:"mb-3",children:[(0,l.jsx)(h.Z.Label,{column:!0,sm:2,className:"nowrap",children:e.title}),e.data&&e.data.map((o,n)=>(0,l.jsx)(b.Z,{sm:{span:10,offset:0!==n?2:0},children:(0,l.jsx)(g.Z,{className:"mb-2",children:(0,l.jsx)(y.W2,{title:"Peer",onClose:()=>{e.data&&(e.data.splice(n,1),e.onChange(e.data))},children:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(y.Vf,{label:"Endpoint",value:o.endpoint,onChange:o=>{e.data&&(e.data[n].endpoint=o,e.onChange(e.data))}}),(0,l.jsx)(y.Vf,{label:"PublicKey",value:o.publicKey,onChange:o=>{e.data&&(e.data[n].publicKey=o,e.onChange(e.data))}}),(0,l.jsx)(y.yh,{title:"AllowedIps",data:o.allowedIps,onChange:o=>{e.data&&(e.data[n].allowedIps=o,e.onChange(e.data))}})]})})})},n)),(0,l.jsx)(b.Z,{sm:{span:10,offset:(null===(o=e.data)||void 0===o?void 0:o.length)!==0?2:0},children:(0,l.jsx)(g.Z,{className:"mb-2 justify-content-md-end",children:(0,l.jsx)(a.Z,{variant:"outline-success",onClick:()=>{let o=new f.E1({allowedIps:["0.0.0.0/0"],endpoint:"127.0.0.1:51820",publicKey:"SHVqHEGI7k2+OQ/oWMmWY2EQObbRQjRBdDPimh0h1WY="});e.data?(e.data.push(o),e.onChange(e.data)):e.onChange([o])},children:(0,l.jsx)("i",{className:"bi bi-plus-lg"})})})})]})}let F=e=>{let o=k(e.protocol,e.onChange);return(0,l.jsx)(y.W2,{title:"Wireguard",onClose:e.onClose,moveUpDown:e.moveUpDown,children:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(y.Vf,{label:"SecretKey",value:e.protocol.secretKey,placeholder:"SHVqHEGI7k2+OQ/oWMmWY2EQObbRQjRBdDPimh0h1WY=",onChange:e=>{o(o=>o.secretKey=e)}}),(0,l.jsx)(y.Vf,{label:"MTU",value:e.protocol.mtu,onChange:e=>{isNaN(Number(e))||o(o=>o.mtu=Number(e))}}),(0,l.jsx)(y.Vf,{label:"IdleTimeout",value:e.protocol.idleTimeout,onChange:e=>{isNaN(Number(e))||o(o=>o.idleTimeout=Number(e))}}),(0,l.jsx)(y.Vf,{label:"Reserved",value:btoa(new TextDecoder().decode(e.protocol.reserved)),onChange:e=>{o(o=>o.reserved=new TextEncoder().encode(atob(e)))}}),(0,l.jsx)(y.yh,{title:"Endpoint",data:e.protocol.endpoint,onChange:e=>{o(o=>o.endpoint=e)}}),(0,l.jsx)(N,{title:"Peers",data:e.protocol.peers,onChange:e=>{o(o=>o.peers=e)}})]})})};function Z(e){var o;return(0,l.jsxs)(h.Z.Group,{as:j.Z,className:"mb-3 flex-grow-1 overflow-auto",children:[(0,l.jsx)(h.Z.Label,{column:!0,sm:2,className:"nowrap",children:e.title}),e.data&&e.data.map((o,n)=>(0,l.jsx)(b.Z,{sm:{span:10,offset:0!==n?2:0},children:(0,l.jsx)(g.Z,{className:"mb-2",children:(0,l.jsx)(y.W2,{title:"Host",onClose:()=>{e.data&&(e.data.splice(n,1),e.onChange(e.data))},children:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(y.Vf,{label:"Host",value:o.host,onChange:o=>{e.data&&(e.data[n].host=o,e.onChange(e.data))}}),(0,l.jsx)(y.Vf,{label:"Port",value:o.port,onChange:o=>{!isNaN(Number(o))&&e.data&&(e.data[n].port=Number(o),e.onChange(e.data))}})]})})})},n)),(0,l.jsx)(b.Z,{sm:{span:10,offset:(null===(o=e.data)||void 0===o?void 0:o.length)!==0?2:0},children:(0,l.jsx)(g.Z,{className:"mb-2 justify-content-md-end",children:(0,l.jsx)(a.Z,{variant:"outline-success",onClick:()=>{let o=new f.ho({});e.data?(e.data.push(o),e.onChange(e.data)):e.onChange([o])},children:(0,l.jsx)("i",{className:"bi bi-plus-lg"})})})})]})}let S=e=>{let o=k(e.protocol,e.onChange);return(0,l.jsx)(y.W2,{title:"Simple",onClose:e.onClose,moveUpDown:e.moveUpDown,children:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(y.Vf,{label:"Host",value:e.protocol.host,onChange:e=>{o(o=>o.host=e)}}),(0,l.jsx)(y.Vf,{label:"Port",value:e.protocol.port,onChange:e=>{let n=Number(e);isNaN(n)||n>65535||n<0||o(e=>e.port=n)}}),(0,l.jsx)(Z,{title:"AlternateHost",data:e.protocol.alternateHost,onChange:e=>{o(o=>o.alternateHost=e)}})]})})},V=e=>(0,l.jsx)(y.W2,{title:"None",onClose:e.onClose,moveUpDown:e.moveUpDown,children:(0,l.jsx)("div",{className:"text-center my-2",style:{opacity:"0.4"},children:"None"})}),E=e=>(0,l.jsx)(y.W2,{title:"Unknown",onClose:e.onClose,moveUpDown:e.moveUpDown,children:(0,l.jsx)("div",{className:"text-center my-2",style:{opacity:"0.4"},children:"Unknown"})}),W=e=>{let o=k(e.protocol,e.onChange);return(0,l.jsx)(y.W2,{title:"Websocket",onClose:e.onClose,moveUpDown:e.moveUpDown,children:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(y.Vf,{label:"Host",value:e.protocol.host,onChange:e=>{o(o=>o.host=e)}}),(0,l.jsx)(y.Vf,{label:"Path",value:e.protocol.path,onChange:e=>{o(o=>o.path=e)}})]})})},P=e=>{let o=k(e.protocol,e.onChange);return(0,l.jsx)(y.W2,{title:"Shadowsocks",onClose:e.onClose,moveUpDown:e.moveUpDown,children:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(y.Vf,{label:"Method",value:e.protocol.method,onChange:e=>{o(o=>o.method=e)}}),(0,l.jsx)(y.Vf,{label:"Password",value:e.protocol.password,onChange:e=>{o(o=>o.password=e)}})]})})},T=e=>{let o=k(e.tls,e.onChange);return(0,l.jsxs)(l.Fragment,{children:[(void 0===e.showEnabled||e.showEnabled)&&(0,l.jsx)(D.J,{label:"TLS Enabled",checked:e.tls.enable,onChange:()=>{o(e=>e.enable=!e.enable)}}),(0,l.jsx)(D.J,{label:"InsecureSkipVerify",checked:e.tls.insecureSkipVerify,onChange:()=>{o(e=>e.insecureSkipVerify=!e.insecureSkipVerify)}}),(0,l.jsx)(y.yh,{title:"ServerNames",data:e.tls.serverNames,onChange:e=>{o(o=>o.serverNames=e)}}),(0,l.jsx)(y.yh,{title:"NextProtos",data:e.tls.nextProtos,onChange:e=>{o(o=>o.nextProtos=e)}}),(0,l.jsx)(y.CX,{title:"CaCert",textarea:!0,data:e.tls.caCert,onChange:e=>{o(o=>o.caCert=e)}})]})},I=e=>{var o;let n=k(e.protocol,e.onChange);return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(y.W2,{title:"Quic",onClose:e.onClose,moveUpDown:e.moveUpDown,children:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(y.Vf,{label:"Host",value:e.protocol.host,onChange:e=>{n(o=>o.host=e)}}),(0,l.jsx)(T,{showEnabled:!1,tls:null!==(o=e.protocol.tls)&&void 0!==o?o:new f.Gf({}),onChange:e=>{n(o=>o.tls=e)}})]})})})},H=e=>{let o=k(e.protocol,e.onChange);return(0,l.jsx)(y.W2,{title:"Shadowsocksr",onClose:e.onClose,moveUpDown:e.moveUpDown,children:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(y.Vf,{label:"Server",value:e.protocol.server,onChange:e=>{o(o=>o.server=e)}}),(0,l.jsx)(y.Vf,{label:"Port",value:e.protocol.port,onChange:e=>{o(o=>o.port=e)}}),(0,l.jsx)(y.Vf,{label:"Method",value:e.protocol.method,placeholder:"chacha20-ietf",onChange:e=>{o(o=>o.method=e)}}),(0,l.jsx)(y.Vf,{label:"Protocol",value:e.protocol.protocol,placeholder:"auth_aes128_sha1",onChange:e=>{o(o=>o.protocol=e)}}),(0,l.jsx)(y.Vf,{label:"ProtocolParam",value:e.protocol.protoparam,onChange:e=>{o(o=>o.protoparam=e)}}),(0,l.jsx)(y.Vf,{label:"Obfs",value:e.protocol.obfs,placeholder:"http_post",onChange:e=>{o(o=>o.obfs=e)}}),(0,l.jsx)(y.Vf,{label:"ObfsParam",value:e.protocol.obfsparam,placeholder:"#name=v",onChange:e=>{o(o=>o.obfsparam=e)}})]})})},O=e=>{let o=k(e.protocol,e.onChange);return(0,l.jsx)(y.W2,{title:"Vmess",onClose:e.onClose,moveUpDown:e.moveUpDown,children:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(y.Vf,{label:"AlterId",value:e.protocol.alterId,onChange:e=>{o(o=>o.alterId=e)}}),(0,l.jsx)(y.Vf,{label:"Security",value:e.protocol.security,placeholder:"chacha20-poly1305",onChange:e=>{o(o=>o.security=e)}}),(0,l.jsx)(y.Vf,{label:"UUID",value:e.protocol.uuid,placeholder:"9d5031b6-4ef5-11ee-be56-0242ac120002",onChange:e=>{o(o=>o.uuid=e)}})]})})},A=e=>{let o=k(e.protocol,e.onChange);return(0,l.jsx)(y.W2,{title:"Trojan",onClose:e.onClose,moveUpDown:e.moveUpDown,children:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(y.Vf,{label:"Password",value:e.protocol.password,onChange:e=>{o(o=>o.password=e)}}),(0,l.jsx)(y.Vf,{label:"Peer",value:e.protocol.peer,onChange:e=>{o(o=>o.peer=e)}})]})})},Q=e=>{let o=k(e.protocol,e.onChange);return(0,l.jsx)(y.W2,{title:"Socks5",onClose:e.onClose,moveUpDown:e.moveUpDown,children:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(y.Vf,{label:"Hostname",value:e.protocol.hostname,placeholder:"127.0.0.1",onChange:e=>{o(o=>o.hostname=e)}}),(0,l.jsx)(y.Vf,{label:"User",value:e.protocol.user,onChange:e=>{o(o=>o.user=e)}}),(0,l.jsx)(y.Vf,{label:"Password",value:e.protocol.password,onChange:e=>{o(o=>o.password=e)}})]})})},B=e=>{let o=k(e.protocol,e.onChange);return(0,l.jsx)(y.W2,{title:"HTTP",onClose:e.onClose,moveUpDown:e.moveUpDown,children:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(y.Vf,{label:"User",value:e.protocol.user,onChange:e=>{o(o=>o.user=e)}}),(0,l.jsx)(y.Vf,{label:"Password",value:e.protocol.password,onChange:e=>{o(o=>o.password=e)}})]})})},Y=e=>(k(e.protocol,e.onChange),(0,l.jsx)(y.W2,{title:"Direct",onClose:e.onClose,moveUpDown:e.moveUpDown,children:(0,l.jsx)(l.Fragment,{})})),K=e=>(0,l.jsx)(y.W2,{title:"Reject",onClose:e.onClose,moveUpDown:e.moveUpDown,children:(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("div",{className:"text-center my-2",style:{opacity:"0.4"},children:"Reject"})})}),R=e=>{let o=k(e.protocol,e.onChange);return(0,l.jsx)(y.W2,{title:"Yuubinsya",onClose:e.onClose,moveUpDown:e.moveUpDown,children:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(D.J,{label:"TCP Encrypt",checked:e.protocol.tcpEncrypt,onChange:()=>{o(e=>e.tcpEncrypt=!e.tcpEncrypt)}}),(0,l.jsx)(D.J,{label:"UDP Encrypt",checked:e.protocol.udpEncrypt,onChange:()=>{o(e=>e.udpEncrypt=!e.udpEncrypt)}}),(0,l.jsx)(D.J,{label:"UdpOverStream",checked:e.protocol.udpOverStream,onChange:()=>{o(e=>e.udpOverStream=!e.udpOverStream)}}),(0,l.jsx)(y.Vf,{label:"Password",value:e.protocol.password,onChange:e=>{o(o=>o.password=e)}})]})})},q=e=>(0,l.jsx)(y.W2,{title:"Tls",onClose:e.onClose,moveUpDown:e.moveUpDown,children:(0,l.jsx)(T,{tls:e.protocol,onChange:e.onChange})}),L=e=>{let o=k(e.protocol,e.onChange);return(0,l.jsx)(y.W2,{title:"Mux",onClose:e.onClose,moveUpDown:e.moveUpDown,children:(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(y.Vf,{label:"Concurrency",value:e.protocol.concurrency,onChange:e=>{isNaN(Number(e))||o(o=>o.concurrency=Number(e))}})})})},G=e=>(0,l.jsx)(y.W2,{title:"Drop",onClose:e.onClose,moveUpDown:e.moveUpDown,children:(0,l.jsx)("div",{className:"text-center my-2",style:{opacity:"0.4"},children:"Drop"})}),M=e=>{let o=k(e.protocol,e.onChange);return(0,l.jsx)(y.W2,{title:"Vless",onClose:e.onClose,moveUpDown:e.moveUpDown,children:(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(y.Vf,{label:"UUID",value:e.protocol.uuid,onChange:e=>{o(o=>o.uuid=e)}})})})},J=e=>{let o=k(e.protocol,e.onChange);return(0,l.jsx)(y.W2,{title:"ObfsHttp",onClose:e.onClose,moveUpDown:e.moveUpDown,children:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(y.Vf,{label:"Host",value:e.protocol.host,onChange:e=>{o(o=>o.host=e)}}),(0,l.jsx)(y.Vf,{label:"Port",value:e.protocol.port,onChange:e=>{o(o=>o.port=e)}})]})})},X=e=>{var o;let n=k(e.protocol,e.onChange);return(0,l.jsx)(y.W2,{title:"Grpc",onClose:e.onClose,moveUpDown:e.moveUpDown,children:(0,l.jsx)(T,{tls:null!==(o=e.protocol.tls)&&void 0!==o?o:new f.Gf({}),onChange:e=>{n(o=>o.tls=e)}})})},z=e=>{let o=k(e.protocol,e.onChange);return(0,l.jsx)(y.W2,{title:"Http2",onClose:e.onClose,moveUpDown:e.moveUpDown,children:(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(y.Vf,{label:"Concurrency",value:e.protocol.concurrency,onChange:e=>{isNaN(Number(e))||o(o=>o.concurrency=Number(e))}})})})},_=e=>{let o=k(e.protocol,e.onChange);return(0,l.jsx)(y.W2,{title:"Reality",onClose:e.onClose,moveUpDown:e.moveUpDown,children:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(D.J,{label:"Debug",checked:e.protocol.debug,onChange:()=>{o(e=>e.debug=!e.debug)}}),(0,l.jsx)(y.Vf,{label:"PublicKey",value:e.protocol.publicKey,onChange:e=>{o(o=>o.publicKey=e)}}),(0,l.jsx)(y.Vf,{label:"ServerName",value:e.protocol.serverName,onChange:e=>{o(o=>o.serverName=e)}}),(0,l.jsx)(y.Vf,{label:"ShortId",value:e.protocol.shortId,onChange:e=>{o(o=>o.shortId=e)}})]})})},$=new f.Gf({enable:!1,caCert:[new TextEncoder().encode("-----CERTIFICATE-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQD4MVvq8SAOzdeE\nSUfehAij/kdTYKPfuc+5SBTNSykilsGsY1mEu4qS6Abc/8bfRM7e9+4bAkA9rSma\np9Rza0YWNwdYQD3j3vuFlR6ic6tTYN7estRGGFOoI5MxA8OsYDbWNnO/3jYlErtn\nXUqDK5iABtBYNsSrLEc/Y2iISCm0zIT7Bfn3gzboggbqx5bpWjT5HmMRZmezl6EB\ny6HjCSIgZzP2v3yOfOVcu70vKABD3X1bzaKEn86rXNra0TZkqvB9vPv1PsBrELrO\nJxFRrAZylgeShzXgBXWjZKyj/toZ7FJLDv896sW/LuQarQufIcluisO++Xkz/EwQ\nVuXURFENAgMBAAECggEAIuOnaPfD+qjHiNZXVsmnQExswOUHLFpdv81I9VIBQpZA\nPAhMS3skoAGjg1omXfj5fsEKFPxkRPdMb6vzktUL6XALZYXEXX3ZTD456/rIJQSr\nV9F6Qy9ExVBY7u05SshMtSC69Ugawuvm8cEcyiMtASRUEe6DB5AGJPxHs863JC3M\nDcb5nNYPGjFCsahkwz4rQq/eQQI0j+8TZlHtPFjTCgqMblk2qR/vwkfTI6Wv/rO6\nYZ+M3xXpYc4j1qcHz5PFxIh3kZMgP/GdqLf+l5O4JaFv2aqxEmCjTHq3rAlxJeiV\ntCT5xYCwYzZtZkZq5jPP6CruNbO+L8iyLYHgLAgmsQKBgQD+Pw5nO2FR7arAMR4I\nK+bK2fFWfBTSkMRJrVqtbjr3LIjRGbGmqaF0HjR/8ZNxmyHBPmG35rfUw32NIAFc\nq9nqXVgeL07CXRadYaMoVys3mukMiQSnuycA5se5uNXk/8bulaudLX0Q605GDWto\n29W3CnWyuz1qNGRZHYZ0Duyk3QKBgQD5550WA/5Fwco2WosDqNBCetf3GZazwtKU\n46Dk1QEXeGYrw3p/o42+nNuawqqxbKhH/OJarir8oT4amXMaf60M3tRjj/DYRLx1\nWS9LkuU9bWSRFIpdJxC4BWi9IPCOsfbF0Cui9nD5dXCE6YwoQEXZ8OhE8+y+2fHU\nOULeYZVB8QKBgQDYtnrad3zuzry68aL9qB4jTj4uT7mX+hm2C3O9XLYaNfWw9ku9\nGd4rEgwB+rKJJYhSJZA5pwmO68s63csLaNhosoQHxp9FgP9jyvO90P9feEWpj6lO\nJ3KJjC02G10GwxaYCy+q3Dk8kLW5dHrXeHrkeJ/2Zy9kNaBLbaVLi+UeaQKBgQDo\n+GsRIxfgoBCLK019U9sSnsLGsSw02OLHuo07xvcFklBtbAa/BxIVKNXxKJlIXitj\nMPUz5Dpe2VK0KWmMwono/bKyPnYgp7OpEkNtCLx8z4Z5WdTDkq+bXi+OYS7hWDbd\nonuLqIMZi8ohnjfzLjfwPQ3LejqykStI1TjpZ79lgQKBgQDJAQe8Wnn2+QbWSbda\nNFGyG+hs7SkqqZmEQl3nA5kyAeOSsGtJG9tiLxDE52eMUM1iL6wNPQMDkROp3yRg\n7muJLMjiVeLFxXUyCXKj11W1VER5i16RsuWW3m5aGxumaXw4TJviJzT/dnwHe+x9\npWZqcBJfEUP6uTLSp3CmyEPcfA==\n-----CERTIFICATE-----")],insecureSkipVerify:!1,nextProtos:["h2"],serverNames:["www.example.com"]}),ee={simple:new f.TF({protocol:{case:"simple",value:new f.lC({host:"",alternateHost:[],port:1080})}}),none:new f.TF({protocol:{case:"none",value:new f.YP({})}}),websocket:new f.TF({protocol:{case:"websocket",value:new f.If({host:"www.example.com",path:"/msg"})}}),quic:new f.TF({protocol:{case:"quic",value:new f.Yo({tls:$})}}),shadowsocks:new f.TF({protocol:{case:"shadowsocks",value:new f.Vh({method:"CHACHA20-IETF-POLY1305",password:"password"})}}),obfshttp:new f.TF({protocol:{case:"obfsHttp",value:new f.Zl({host:"www.example.com",port:"443"})}}),shadowsocksr:new f.TF({protocol:{case:"shadowsocksr",value:new f.fW({method:"chacha20-ietf",obfs:"http_post",obfsparam:"#name=v",password:"password",port:"1080",protocol:"auth_aes128_sha1",protoparam:"",server:"127.0.0.1"})}}),vmess:new f.TF({protocol:{case:"vmess",value:new f.nB({alterId:"0",security:"chacha20-poly1305",uuid:"9d5031b6-4ef5-11ee-be56-0242ac120002"})}}),trojan:new f.TF({protocol:{case:"trojan",value:new f.N4({password:"password",peer:"peer"})}}),socks5:new f.TF({protocol:{case:"socks5",value:new f.Qz({hostname:"127.0.0.1",password:"password",user:"username"})}}),http:new f.TF({protocol:{case:"http",value:new f.dJ({password:"password",user:"username"})}}),direct:new f.TF({protocol:{case:"direct",value:new f.U$({})}}),yuubinsya:new f.TF({protocol:{case:"yuubinsya",value:new f.MY({tcpEncrypt:!0,udpEncrypt:!0,password:"password",udpOverStream:!1})}}),tls:new f.TF({protocol:{case:"tls",value:$}}),wireguard:new f.TF({protocol:{case:"wireguard",value:new f.To({endpoint:["10.0.0.2/32"],mtu:1500,idleTimeout:3,reserved:new Uint8Array([0,0,0]),secretKey:"SHVqHEGI7k2+OQ/oWMmWY2EQObbRQjRBdDPimh0h1WY=",peers:[{allowedIps:["0.0.0.0/0"],endpoint:"127.0.0.1:51820",publicKey:"SHVqHEGI7k2+OQ/oWMmWY2EQObbRQjRBdDPimh0h1WY="}]})}}),mux:new f.TF({protocol:{case:"mux",value:new f.fg({concurrency:8})}}),drop:new f.TF({protocol:{case:"drop",value:new f.Cw({})}}),vless:new f.TF({protocol:{case:"vless",value:new f.kY({uuid:"c48619fe-8f02-49e0-b9e9-edf763e17e21"})}}),grpc:new f.TF({protocol:{case:"grpc",value:new f.ZK({tls:$})}}),http2:new f.TF({protocol:{case:"http2",value:new f.i5({concurrency:8})}}),reality:new f.TF({protocol:{case:"reality",value:new f.Fr({debug:!1,publicKey:"SHVqHEGI7k2+OQ/oWMmWY2EQObbRQjRBdDPimh0h1WY=",serverName:"127.0.0.1",shortId:"9d5031b6-4ef5-11ee-be56-0242ac120002"})}})},eo=e=>{let o=(0,t.useContext)(x.P),[n,r]=(0,t.useState)({data:""});return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(s.Z,{show:e.show,"aria-labelledby":"contained-modal-title-vcenter",size:"xl",onHide:()=>{e.onHide()},centered:!0,children:[!e.plaintext&&(0,l.jsx)(s.Z.Header,{closeButton:!0,children:(0,l.jsx)(s.Z.Title,{id:"contained-modal-title-vcenter",children:"Import JSON"})}),(0,l.jsx)(s.Z.Body,{children:(0,l.jsx)(h.Z.Control,{as:"textarea",readOnly:e.plaintext,value:e.data?e.data:n.data,style:{height:"65vh",fontFamily:"monospace"},onChange:e=>{r({data:e.target.value})}})}),(0,l.jsxs)(s.Z.Footer,{children:[(0,l.jsx)(a.Z,{variant:"outline-secondary",onClick:()=>{e.onHide()},children:"Close"}),(0,l.jsx)(()=>e.onSave?(0,l.jsx)(a.Z,{variant:"outline-primary",onClick:()=>{let l=new m.x().fromJsonString(n.data);e.isNew&&(l.hash=""),(0,u.U)("/node",{method:"PATCH",body:l.toBinary()}).then(async n=>{let{error:l}=n;if(void 0===l)o.Info("save successful"),void 0!==e.onSave&&e.onSave();else{let e=await l.msg;o.Error(e)}})},children:"Save"}):(0,l.jsx)(l.Fragment,{}),{})]})]})})};var en=function(e){var o;let n=(0,t.useContext)(x.P),[h,C]=(0,t.useState)({show:!1,data:""}),{data:g,error:j,isLoading:b,mutate:f}=(0,d.ZP)(!e.point&&e.hash?"/node":null,(0,u.D)(new m.x,"POST",new w.Gm({value:e.hash}).toBinary()));return e.show||""!==e.hash||f(void 0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(eo,{show:h.show,data:h.data,plaintext:!0,onHide:()=>C({...h,show:!1})}),(0,l.jsxs)(s.Z,{show:!h.show&&e.show,scrollable:!0,"aria-labelledby":"contained-modal-title-vcenter",size:"xl",onHide:()=>{e.onHide()},centered:!0,children:[(0,l.jsx)(s.Z.Header,{closeButton:!0,children:(0,l.jsx)(s.Z.Title,{id:"contained-modal-title-vcenter",children:e.hash})}),(0,l.jsx)(s.Z.Body,{children:(0,l.jsx)("fieldset",{disabled:!e.editable,children:j?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("h4",{className:"text-center my-2",children:[j.code," - ",j.msg]}),(0,l.jsx)("pre",{className:"text-center my-2 text-danger lead",children:j.raw})]}):b?(0,l.jsx)(v.Z,{}):(0,l.jsx)(r.Z,{in:!j&&!b,children:(0,l.jsx)(U,{point:null!==(o=null!=g?g:e.point)&&void 0!==o?o:new m.x({}),groups:e.groups,onChange:e.editable?o=>{e.editable&&(e.hash&&f(o,!1),e.point&&e.onChangePoint&&e.onChangePoint(o))}:void 0})})})}),(0,l.jsxs)(s.Z.Footer,{children:[e.onDelete&&(0,l.jsxs)(c.Z,{onSelect:o=>{"ok"===o&&e.onDelete&&(e.onHide(),e.onDelete())},as:p.Z,variant:"outline-danger",title:"Remove",children:[(0,l.jsx)(i.Z.Item,{eventKey:"ok",children:"OK"}),(0,l.jsx)(i.Z.Item,{eventKey:"cancel",children:"Cancel"})]}),!j&&!b&&(0,l.jsx)(a.Z,{variant:"outline-primary",onClick:()=>{var o,n,l;C({show:!0,data:(null!==(l=null!==(n=null==g?void 0:g.clone())&&void 0!==n?n:null===(o=e.point)||void 0===o?void 0:o.clone())&&void 0!==l?l:new m.x({})).toJsonString({prettySpaces:2})})},children:"JSON"}),(0,l.jsx)(a.Z,{variant:"outline-secondary",onClick:()=>{e.onHide()},children:"Close"}),(0,l.jsx)(()=>e.editable?(0,l.jsx)(a.Z,{variant:"outline-primary",disabled:b||j||!e.editable,onClick:()=>{var o;let l=null!==(o=null!=g?g:e.point)&&void 0!==o?o:new m.x({});e.isNew&&(l.hash=""),(0,u.U)("/node",{method:"PATCH",body:l.toBinary()}).then(async o=>{let{error:l}=o;if(void 0===l)n.Info("save successful"),void 0!==e.onSave&&e.onSave();else{let e=await l.msg;n.Error(e)}})},children:"Save"}):(0,l.jsx)(l.Fragment,{}),{})]})]})]})}}}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[930],{4784:(e,n,a)=>{Promise.resolve().then(a.bind(a,1404))},2859:(e,n,a)=>{"use strict";a.d(n,{$d:()=>o,FX:()=>u,Vx:()=>c,no:()=>i});var s=a(5155),t=a(6180),r=a(6121),l=a(3667);let o=e=>{let{label:n,checked:a,onChange:o,className:c}=e;return(0,s.jsxs)(t.A.Group,{as:r.A,className:c,children:[(0,s.jsx)(t.A.Label,{column:!0,sm:2,children:n}),(0,s.jsx)(l.A,{sm:10,className:"d-flex align-items-center",children:(0,s.jsx)(t.A.Check,{className:"d-flex align-items-center",type:"switch",checked:a,onChange:e=>o(e.target.checked)})})]})},c=e=>{var n;let{...a}=e;return(0,s.jsxs)(t.A.Group,{as:r.A,className:a.lastElem?"":"mb-2",children:[(0,s.jsx)(t.A.Label,{column:!0,sm:2,children:a.label}),(0,s.jsx)(l.A,{sm:10,children:(0,s.jsx)(t.A.Select,{value:a.value,onChange:e=>a.onChange(Number(e.target.value)),children:a.type.values.filter(null!==(n=a.filter)&&void 0!==n?n:()=>!0).map(e=>(0,s.jsx)("option",{value:e.number,children:a.format?a.format(e.number):e.name},e.number))})})]})},i=e=>{let{label:n,values:a,onChange:o,value:c,emptyChoose:i,lastElem:u}=e;return(0,s.jsxs)(t.A.Group,{as:r.A,className:u?"":"mb-2",children:[(0,s.jsx)(t.A.Label,{column:!0,sm:2,children:n}),(0,s.jsx)(l.A,{sm:10,children:(0,s.jsxs)(t.A.Select,{value:c,onChange:e=>o(e.target.value),children:[i&&(0,s.jsx)("option",{value:"",children:"Choose..."}),a.map(e=>(0,s.jsx)("option",{value:e,children:e},e))]})})]})},u=e=>{let{values:n,onChange:a,value:r,emptyChoose:l,format:o}=e;return(0,s.jsxs)(t.A.Select,{value:r,onChange:e=>a(e.target.value),children:[l&&(0,s.jsx)("option",{value:"",children:"Choose..."}),n.map(e=>{let n="string"==typeof e?e:e[0],a="string"==typeof e?e:e[1];return(0,s.jsx)("option",{value:a,children:o?o(n):n},n)})]})}},148:(e,n,a)=>{"use strict";a.d(n,{u:()=>o,y:()=>c});var s=a(5155),t=a(2115),r=a(1757),l=a(491);let o=(0,t.createContext)({Info:e=>{console.log(e)},Error:e=>{console.error(e)}}),c=e=>{let{children:n}=e,[a,c]=(0,t.useState)({value:{},index:0}),i=(e,n)=>c(a=>({value:{...a.value,[a.index]:{text:e,type:n}},index:a.index+1}));return(0,s.jsxs)(o.Provider,{value:{Info:e=>{console.log(e),i(e,"success")},Error:e=>{console.error(e),i(e,"danger")}},children:[(0,s.jsx)(r.A,{className:"p-3",position:"top-center",containerPosition:"fixed",style:{zIndex:999999},children:Object.entries(a.value).map(e=>{let[n,a]=e;return(0,s.jsxs)(l.A,{role:"alert","aria-live":"assertive",show:!0,bg:a.type,onClose:()=>{c(e=>{let a={...e.value};return delete a[n],{...e,value:a}})},"aria-atomic":"true",delay:4e3,autohide:!0,animation:!0,children:[(0,s.jsxs)(l.A.Header,{children:[(0,s.jsx)("strong",{className:"me-auto",children:"Notification"}),(0,s.jsx)("small",{className:"text-muted",children:"just now"})]}),(0,s.jsx)(l.A.Body,{className:"text-center",children:a.text})]},"toast"+n)})}),n]})}},1404:(e,n,a)=>{"use strict";a.r(n),a.d(n,{default:()=>X});var s=a(5155),t=a(3577),r=a(950),l=a(1936),o=a(2115),c=a(0),i=a(2963),u=a(2981),d=a(57),h=a(8003),v=a(6180),x=a(7021),p=a(9169),m=a(8927),g=a(148),j=a(6863),b=a(7641),C=a(2859),y=a(7204),k=a(6121),A=a(3667),N=a(2273);let f=e=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(y.a9,{label:"Username",value:e.http.username,onChange:n=>e.onChange({...e.http,username:n})}),(0,s.jsx)(y.a9,{label:"Password",value:e.http.password,onChange:n=>e.onChange({...e.http,password:n})})]}),w=e=>(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(y.a9,{label:"Url",value:e.reverse_http.url,onChange:n=>e.onChange({...e.reverse_http,url:n})})}),F=e=>(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(y.a9,{label:"Host",value:e.reverse_tcp.host,onChange:n=>e.onChange({...e.reverse_tcp,host:n})})}),P=e=>(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(y.a9,{label:"Host",value:e.redir.host,onChange:n=>e.onChange({...e.redir,host:n})})}),S=e=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(C.$d,{label:"DNS Hijacking",checked:e.tproxy.dnsHijacking,onChange:()=>e.onChange({...e.tproxy,dnsHijacking:!e.tproxy.dnsHijacking})}),(0,s.jsx)(C.$d,{label:"Force Fake IP",checked:e.tproxy.forceFakeip,onChange:()=>e.onChange({...e.tproxy,forceFakeip:!e.tproxy.forceFakeip})}),(0,s.jsx)(y.a9,{label:"Host",value:e.tproxy.host,onChange:n=>e.onChange({...e.tproxy,host:n})})]}),E=e=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(y.a9,{label:"Username",value:e.socks5.username,onChange:n=>e.onChange({...e.socks5,username:n})}),(0,s.jsx)(y.a9,{label:"Password",value:e.socks5.password,onChange:n=>e.onChange({...e.socks5,password:n})})]}),I=e=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(y.a9,{label:"Username",value:e.mixed.username,onChange:n=>e.onChange({...e.mixed,username:n})}),(0,s.jsx)(y.a9,{label:"Password",value:e.mixed.password,onChange:n=>e.onChange({...e.mixed,password:n})})]}),H=e=>{var n,a;let[r,l]=(0,o.useState)((0,N.fj)(e.tun.postUp)),[c,i]=(0,o.useState)((0,N.fj)(e.tun.postDown));return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(C.$d,{checked:e.tun.skipMulticast,onChange:()=>e.onChange({...e.tun,skipMulticast:!e.tun.skipMulticast}),label:"Skip Multicast"}),(0,s.jsx)(y.a9,{label:"Name",value:e.tun.name,onChange:n=>e.onChange({...e.tun,name:n})}),(0,s.jsx)(y.a9,{label:"MTU",value:e.tun.mtu,onChange:n=>{isNaN(Number(n))||e.onChange({...e.tun,mtu:Number(n)})}}),(0,s.jsx)(y.a9,{label:"IPv4",value:e.tun.portal,onChange:n=>e.onChange({...e.tun,portal:n})}),(0,s.jsx)(y.a9,{label:"IPv6",value:e.tun.portalV6,onChange:n=>e.onChange({...e.tun,portalV6:n})}),(0,s.jsx)(y.a9,{label:"Post Up",value:r,onChange:n=>{l(n);try{let a=(0,N.lD)(n);e.onChange({...e.tun,postUp:a})}catch(e){console.log(e)}}}),(0,s.jsx)(y.a9,{label:"Post Down",value:c,onChange:n=>{i(n);try{let a=(0,N.lD)(n);e.onChange({...e.tun,postDown:a})}catch(e){console.log(e)}}}),(0,s.jsx)(C.Vx,{label:"Stack",type:b.mM,value:e.tun.driver,onChange:n=>e.onChange({...e.tun,driver:n})}),(0,s.jsx)(y.e9,{title:"Routes",data:null!==(a=null===(n=e.tun.route)||void 0===n?void 0:n.routes)&&void 0!==a?a:[],onChange:n=>{let a={...e.tun};a.route||(a.route=(0,t.v)(b.l,{})),n||(n=[]),a.route&&(a.route.routes=n),e.onChange({...a})}})]})},T=e=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(y.jU,{label:"Cert",value:new TextDecoder().decode(e.cert.cert),onChange:n=>e.onChange({...e.cert,cert:new TextEncoder().encode(n)})}),(0,s.jsx)(y.jU,{label:"Key",value:new TextDecoder().decode(e.cert.key),onChange:n=>e.onChange({...e.cert,key:new TextEncoder().encode(n)})}),(0,s.jsx)(y.a9,{label:"Cert File",value:e.cert.certFilePath,onChange:n=>e.onChange({...e.cert,certFilePath:n})}),(0,s.jsx)(y.a9,{label:"Key File",value:e.cert.keyFilePath,onChange:n=>e.onChange({...e.cert,keyFilePath:n})})]}),U=e=>{var n,a;let[r,l]=(0,o.useState)("www.example.com");return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(y.e9,{title:"Next Protos",className:"mb-2",data:null!==(a=null===(n=e.tls)||void 0===n?void 0:n.nextProtos)&&void 0!==a?a:[],onChange:n=>e.onChange({...e.tls,nextProtos:n})}),e.tls&&e.tls.certificates.map((n,a)=>(0,s.jsx)(u.A,{className:"mb-2",children:(0,s.jsxs)(u.A.Body,{children:[(0,s.jsx)(u.A.Title,{className:"d-flex justify-content-end align-items-center",children:(0,s.jsx)(i.A,{variant:"outline-danger",onClick:()=>e.onChange({...e.tls,certificates:e.tls.certificates.filter((e,n)=>n!==a)}),children:(0,s.jsx)("i",{className:"bi bi-x-lg"})})}),(0,s.jsx)(T,{cert:(0,t.v)(b.f6,n),onChange:n=>{e.onChange({...e.tls,certificates:[...e.tls.certificates.slice(0,a),n,...e.tls.certificates.slice(a+1)]})}})]})},"tls_certificates"+a)),(0,s.jsx)(h.A,{className:"d-flex justify-content-end mb-2",children:(0,s.jsxs)(i.A,{variant:"outline-success",onClick:()=>e.onChange({...e.tls,certificates:[...e.tls.certificates,(0,t.v)(b.f6,{cert:new Uint8Array(0),key:new Uint8Array(0),certFilePath:"",keyFilePath:""})]}),children:[(0,s.jsx)("i",{className:"bi bi-plus-lg"}),"New Certificate"]})}),e.tls&&e.tls.serverNameCertificate&&Object.entries(e.tls.serverNameCertificate).map(n=>{let[a,r]=n;return(0,s.jsx)(u.A,{className:"mb-2",children:(0,s.jsxs)(u.A.Body,{children:[(0,s.jsxs)(u.A.Title,{className:"d-flex justify-content-between align-items-center",children:[a,(0,s.jsx)(i.A,{variant:"outline-danger",onClick:()=>{let n={...e.tls.serverNameCertificate};delete n[a],e.onChange({...e.tls,serverNameCertificate:n})},children:(0,s.jsx)("i",{className:"bi bi-x-lg"})})]}),(0,s.jsx)(T,{cert:(0,t.v)(b.f6,r),onChange:n=>{e.onChange({...e.tls,serverNameCertificate:{...e.tls.serverNameCertificate,[a]:n}})}})]})},"server_name_certificate"+a)}),(0,s.jsxs)(h.A,{className:"d-flex justify-content-end",children:[(0,s.jsx)(v.A.Control,{value:r,onChange:e=>l(e.target.value)}),(0,s.jsxs)(i.A,{variant:"outline-success",onClick:()=>{r&&e.onChange({...e.tls,serverNameCertificate:{...e.tls.serverNameCertificate,[r]:(0,t.v)(b.f6,{})}})},children:[(0,s.jsx)("i",{className:"bi bi-plus-lg"}),"New SNI Certificate"]})]})]})},_=e=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(y.a9,{label:"Host",onChange:n=>e.onChange({...e.quic,host:n}),value:e.quic.host}),(0,s.jsx)(U,{tls:(0,t.v)(b.Qi,e.quic.tls?e.quic.tls:void 0),onChange:n=>e.onChange({...e.quic,tls:n})})]}),q=e=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(y.a9,{plaintext:!0,label:"Protocol",value:"TLS"}),e.tls.tls&&(0,s.jsx)(U,{tls:(0,t.v)(b.Qi,e.tls.tls),onChange:n=>e.onChange({...e.tls,tls:n})})]}),D=e=>{let[n,a]=(0,o.useState)({value:""}),[t,r]=(0,o.useState)({value:""});return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(y.a9,{plaintext:!0,label:"Protocol",value:"Reality"}),(0,s.jsx)(y.a9,{label:"Dest",value:e.reality.dest,onChange:n=>e.onChange({...e.reality,dest:n})}),(0,s.jsx)(y.a9,{label:"Private Key",value:e.reality.privateKey,onChange:n=>e.onChange({...e.reality,privateKey:n})}),(0,s.jsxs)(v.A.Group,{as:k.A,className:"mb-3",children:[(0,s.jsx)(v.A.Label,{column:!0,sm:2,className:"nowrap",children:"Short ID"}),e.reality.shortId.map((n,a)=>(0,s.jsx)(A.A,{sm:{span:10,offset:0!==a?2:0},children:(0,s.jsxs)(h.A,{className:"mb-2",children:[(0,s.jsx)(v.A.Control,{value:n,onChange:n=>e.onChange({...e.reality,shortId:[...e.reality.shortId.slice(0,a),n.target.value,...e.reality.shortId.slice(a+1)]})}),(0,s.jsx)(i.A,{variant:"outline-danger",onClick:()=>e.onChange({...e.reality,shortId:[...e.reality.shortId.slice(0,a),...e.reality.shortId.slice(a+1)]}),children:(0,s.jsx)("i",{className:"bi bi-x-lg"})})]})},a)),(0,s.jsx)(A.A,{sm:{span:10,offset:0!==e.reality.shortId.length?2:0},children:(0,s.jsxs)(h.A,{className:"mb-2",children:[(0,s.jsx)(v.A.Control,{value:n.value,onChange:e=>a({value:e.target.value})}),(0,s.jsx)(i.A,{variant:"outline-success",onClick:()=>e.onChange({...e.reality,shortId:[...e.reality.shortId,n.value]}),children:(0,s.jsx)("i",{className:"bi bi-plus-lg"})})]})})]}),(0,s.jsxs)(v.A.Group,{as:k.A,className:"mb-3",children:[(0,s.jsx)(v.A.Label,{column:!0,sm:2,className:"nowrap",children:"Server Name"}),e.reality.serverName.map((n,a)=>(0,s.jsx)(A.A,{sm:{span:10,offset:0!==a?2:0},children:(0,s.jsxs)(h.A,{className:"mb-2",children:[(0,s.jsx)(v.A.Control,{value:n,onChange:n=>e.onChange({...e.reality,serverName:[...e.reality.serverName.slice(0,a),n.target.value,...e.reality.serverName.slice(a+1)]})}),(0,s.jsx)(i.A,{variant:"outline-danger",onClick:()=>e.onChange({...e.reality,serverName:[...e.reality.serverName.slice(0,a),...e.reality.serverName.slice(a+1)]}),children:(0,s.jsx)("i",{className:"bi bi-x-lg"})})]})},a)),(0,s.jsx)(A.A,{sm:{span:10,offset:0!==e.reality.serverName.length?2:0},children:(0,s.jsxs)(h.A,{className:"mb-2",children:[(0,s.jsx)(v.A.Control,{value:t.value,onChange:e=>r({value:e.target.value})}),(0,s.jsx)(i.A,{variant:"outline-success",onClick:()=>e.onChange({...e.reality,serverName:[...e.reality.serverName,t.value]}),children:(0,s.jsx)("i",{className:"bi bi-plus-lg"})})]})})]})]})},M=e=>{let[n,a]=(0,o.useState)({value:"normal"});return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(C.$d,{label:"Enabled",checked:e.inbound.enabled,onChange:()=>{e.onChange({...e.inbound,enabled:!e.inbound.enabled})}}),(0,s.jsx)(y.mc,{title:"Network",className:"mb-2",hideClose:!0,children:(0,s.jsx)(z,{inbound:e.inbound,onChange:n=>{e.onChange({...n})}})}),(0,s.jsx)(y.mc,{title:"Transport",className:"mb-2",hideClose:!0,children:(0,s.jsxs)(s.Fragment,{children:[e.inbound.transport.map((n,a)=>{var t,r;return(0,s.jsx)(y.mc,{className:0!==a?"mt-2":"",title:null!==(r=null===(t=n.transport.case)||void 0===t?void 0:t.toString())&&void 0!==r?r:"",onClose:()=>{e.onChange({...e.inbound,transport:[...e.inbound.transport.slice(0,a),...e.inbound.transport.slice(a+1)]})},moveUpDown:new y.fH(e.inbound.transport,a,n=>e.onChange({...e.inbound,transport:n})),children:(0,s.jsx)($,{transport:n,onChange:n=>{e.onChange({...e.inbound,transport:[...e.inbound.transport.slice(0,a),n,...e.inbound.transport.slice(a+1)]})}},a)},a)}),(0,s.jsx)(d.A,{variant:"flush",children:(0,s.jsx)(d.A.Item,{children:(0,s.jsxs)(h.A,{children:[(0,s.jsx)(C.FX,{value:n.value,values:["normal","tls","mux","http2","websocket","grpc","reality"],onChange:e=>a({value:e})}),(0,s.jsxs)(i.A,{variant:"outline-success",onClick:()=>{let a={...e.inbound,transport:[...e.inbound.transport]};switch(n.value){case"normal":a.transport.push((0,t.v)(b.ls,{transport:{case:"normal",value:(0,t.v)(b.Rc,{})}}));break;case"tls":a.transport.push((0,t.v)(b.ls,{transport:{case:"tls",value:(0,t.v)(b.fx,{tls:(0,t.v)(b.Qi,{})})}}));break;case"mux":a.transport.push((0,t.v)(b.ls,{transport:{case:"mux",value:(0,t.v)(b.gE,{})}}));break;case"http2":a.transport.push((0,t.v)(b.ls,{transport:{case:"http2",value:(0,t.v)(b.ql,{})}}));break;case"websocket":a.transport.push((0,t.v)(b.ls,{transport:{case:"websocket",value:(0,t.v)(b.BP,{})}}));break;case"grpc":a.transport.push((0,t.v)(b.ls,{transport:{case:"grpc",value:(0,t.v)(b.E_,{})}}));break;case"reality":a.transport.push((0,t.v)(b.ls,{transport:{case:"reality",value:(0,t.v)(b.K0,{})}}))}e.onChange(a)},children:[(0,s.jsx)("i",{className:"bi bi-plus-lg"}),"Add"]})]})})})]})}),(0,s.jsx)(y.mc,{title:"Protocol",hideClose:!0,children:(0,s.jsx)(L,{inbound:e.inbound,onChange:n=>{e.onChange({...n})}})})]})},z=e=>{var n,a;let[r,l]=(0,o.useState)({value:null!==(a=null===(n=e.inbound.network.case)||void 0===n?void 0:n.toString())&&void 0!==a?a:"tcpudp"});return(0,o.useEffect)(()=>{l({value:e.inbound.network.case?e.inbound.network.case.toString():"tcpudp"})},[e.inbound]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(d.A,{variant:"flush",children:(0,s.jsx)(d.A.Item,{children:(0,s.jsxs)(h.A,{children:[(0,s.jsx)(C.FX,{value:r.value,values:["empty","tcpudp","quic"],onChange:e=>l({value:e})}),(0,s.jsx)(i.A,{variant:"outline-success",onClick:()=>{let n={...e.inbound};switch(r.value){case"tcpudp":n.network={case:"tcpudp",value:(0,t.v)(b.as,{})};break;case"quic":n.network={case:"quic",value:(0,t.v)(b.sn,{})};break;case"empty":n.network={case:"empty",value:(0,t.v)(b.bN,{})}}e.onChange({...n})},children:"Use"})]})})}),(0,s.jsx)("br",{}),(0,s.jsx)(B,{inbound:e.inbound,onChange:e.onChange})]})},B=e=>{switch(e.inbound.network.case){case"tcpudp":return(0,s.jsx)(O,{protocol:e.inbound.network.value,onChange:n=>{e.onChange({...e.inbound,network:{case:"tcpudp",value:n}})}});case"quic":return(0,s.jsx)(_,{quic:e.inbound.network.value,onChange:n=>{e.onChange({...e.inbound,network:{case:"quic",value:n}})}});case"empty":return(0,s.jsx)(s.Fragment,{})}},$=e=>{switch(e.transport.transport.case){case"normal":return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:"text-center",style:{opacity:"0.4"},children:"Normal"})});case"tls":return(0,s.jsx)(q,{tls:e.transport.transport.value,onChange:n=>{e.onChange({...e.transport,transport:{case:"tls",value:n}})}});case"mux":return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:"text-center",style:{opacity:"0.4"},children:"Mux"})});case"http2":return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:"text-center",style:{opacity:"0.4"},children:"HTTP2"})});case"websocket":return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:"text-center",style:{opacity:"0.4"},children:"Websocket"})});case"grpc":return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:"text-center",style:{opacity:"0.4"},children:"Grpc"})});case"reality":return(0,s.jsx)(D,{reality:e.transport.transport.value,onChange:n=>{e.onChange({...e.transport,transport:{case:"reality",value:n}})}})}},K=e=>{switch(e.inbound.protocol.case){case"http":return(0,s.jsx)(f,{http:e.inbound.protocol.value,onChange:n=>{e.onChange({...e.inbound,protocol:{case:"http",value:n}})}});case"reverseHttp":return(0,s.jsx)(w,{reverse_http:e.inbound.protocol.value,onChange:n=>{e.onChange({...e.inbound,protocol:{case:"reverseHttp",value:n}})}});case"reverseTcp":return(0,s.jsx)(F,{reverse_tcp:e.inbound.protocol.value,onChange:n=>{e.onChange({...e.inbound,protocol:{case:"reverseTcp",value:n}})}});case"socks5":return(0,s.jsx)(E,{socks5:e.inbound.protocol.value,onChange:n=>{e.onChange({...e.inbound,protocol:{case:"socks5",value:n}})}});case"socks4a":return(0,s.jsx)(s.Fragment,{});case"mix":return(0,s.jsx)(I,{mixed:e.inbound.protocol.value,onChange:n=>{e.onChange({...e.inbound,protocol:{case:"mix",value:n}})}});case"redir":return(0,s.jsx)(P,{redir:e.inbound.protocol.value,onChange:n=>{e.onChange({...e.inbound,protocol:{case:"redir",value:n}})}});case"tun":return(0,s.jsx)(H,{tun:e.inbound.protocol.value,onChange:n=>{e.onChange({...e.inbound,protocol:{case:"tun",value:n}})}});case"yuubinsya":return(0,s.jsx)(G,{yuubinsya:e.inbound.protocol.value,onChange:n=>{e.onChange({...e.inbound,protocol:{case:"yuubinsya",value:n}})}});case"tproxy":return(0,s.jsx)(S,{tproxy:e.inbound.protocol.value,onChange:n=>{e.onChange({...e.inbound,protocol:{case:"tproxy",value:n}})}})}},L=e=>{let[n,a]=(0,o.useState)({value:e.inbound.protocol.case?e.inbound.protocol.case.toString():"yuubinsya"});return(0,o.useEffect)(()=>{a({value:e.inbound.protocol.case?e.inbound.protocol.case.toString():"yuubinsya"})},[e.inbound]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(d.A,{variant:"flush",children:(0,s.jsx)(d.A.Item,{children:(0,s.jsxs)(h.A,{children:[(0,s.jsx)(C.FX,{value:n.value,values:["http","reverseHttp","reverseTcp","socks5","mix","redir","tun","yuubinsya","tproxy"],onChange:e=>a({value:e})}),(0,s.jsx)(i.A,{variant:"outline-success",onClick:()=>{let a={...e.inbound};switch(n.value){case"http":a.protocol={case:"http",value:(0,t.v)(b.UM,{})};break;case"reverseHttp":a.protocol={case:"reverseHttp",value:(0,t.v)(b.l0,{})};break;case"reverseTcp":a.protocol={case:"reverseTcp",value:(0,t.v)(b.A0,{})};break;case"socks5":a.protocol={case:"socks5",value:(0,t.v)(b.AK,{})};break;case"mix":a.protocol={case:"mix",value:(0,t.v)(b.JX,{})};break;case"redir":a.protocol={case:"redir",value:(0,t.v)(b.Q9,{})};break;case"tun":a.protocol={case:"tun",value:(0,t.v)(b.vC,{})};break;case"yuubinsya":a.protocol={case:"yuubinsya",value:(0,t.v)(b.lA,{})};break;case"tproxy":a.protocol={case:"tproxy",value:(0,t.v)(b.SL,{})}}e.onChange({...a})},children:"Use"})]})})}),(0,s.jsx)("br",{}),(0,s.jsx)(K,{inbound:e.inbound,onChange:n=>{e.onChange({...n})}})]})},G=e=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(C.$d,{label:"TCP Encrypt",checked:e.yuubinsya.tcpEncrypt,onChange:()=>{e.onChange({...e.yuubinsya,tcpEncrypt:!e.yuubinsya.tcpEncrypt})}}),(0,s.jsx)(C.$d,{label:"UDP Encrypt",checked:e.yuubinsya.udpEncrypt,onChange:()=>{e.onChange({...e.yuubinsya,udpEncrypt:!e.yuubinsya.udpEncrypt})}}),(0,s.jsx)(y.a9,{label:"Password",value:e.yuubinsya.password,onChange:n=>{e.onChange({...e.yuubinsya,password:n})}})]}),O=e=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(y.a9,{label:"Host",value:e.protocol.host,onChange:n=>{e.onChange({...e.protocol,host:n})}}),(0,s.jsx)(C.Vx,{label:"Control",type:b.JM,value:e.protocol.control,onChange:n=>{e.onChange({...e.protocol,control:n})}})]}),V=e=>{let n=(0,o.useContext)(g.u),{data:a,error:u,isLoading:d,isValidating:h,mutate:v}=(0,x.Ay)(""===e.name?void 0:(0,m.cY)(j.mz.method.get),(0,m.AD)(j.mz.method.get,(0,t.v)(l.g8,{value:e.name}),e.isNew?(0,t.v)(b.Zq,{name:e.name,enabled:!1}):void 0),{shouldRetryOnError:!1,keepPreviousData:!1,revalidateOnFocus:!1});return(0,o.useEffect)(()=>{v()},[e.name,e.isNew,v]),(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(c.A,{show:e.show,scrollable:!0,"aria-labelledby":"contained-modal-title-vcenter",size:"xl",onHide:()=>{e.onHide()},centered:!0,children:[(0,s.jsx)(c.A.Header,{children:(0,s.jsx)(c.A.Title,{id:"contained-modal-title-vcenter",children:e.name})}),(0,s.jsx)(c.A.Body,{children:u?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("h4",{className:"text-center my-2",children:[u.code," - ",u.msg]}),(0,s.jsx)("pre",{className:"text-center my-2 text-danger lead",children:u.raw})]}):h||d||!a?(0,s.jsx)(p.A,{}):(0,s.jsx)(M,{inbound:a,onChange:e=>{v((0,r.o)(b.Zq,e),!1)}})}),(0,s.jsxs)(c.A.Footer,{children:[(0,s.jsx)(i.A,{variant:"outline-secondary",onClick:()=>{e.onHide()},children:"Close"}),(0,s.jsx)(i.A,{variant:"outline-primary",onClick:()=>{a.name=e.name,(0,m.kP)(j.mz.method.save,a).then(async a=>{let{error:s}=a;if(void 0===s)n.Info("save successful"),e.onHide(!0);else{let e=s.msg;n.Error(e),console.error(s.code,e)}})},children:"Save"})]})]})})},X=function(){let e=(0,o.useContext)(g.u),{data:n,error:a,isLoading:r,mutate:c}=(0,m.mp)(j.mz.method.list),[x,b]=(0,o.useState)({show:!1,name:"",new:!1}),[C,y]=(0,o.useState)({value:""});if(void 0!==a)return(0,s.jsx)(p.$,{statusCode:a.code,title:a.msg});if(r||void 0===n)return(0,s.jsx)(p.A,{});let k=n=>{(0,m.kP)(j.mz.method.remove,(0,t.v)(l.g8,{value:n})).then(async n=>{let{error:a}=n;if(void 0===a)e.Info("remove successful"),c();else{let n=a.msg;e.Error(n),console.error(a.code,n)}})};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(V,{show:x.show,name:x.name,onHide:e=>{e&&c(),b({...x,show:!1})},isNew:x.new}),(0,s.jsxs)(u.A,{children:[0===n.names.length&&(0,s.jsxs)(u.A.Body,{children:[(0,s.jsx)("div",{className:"text-center my-2",style:{opacity:"0.4"},children:"No Inbounds"}),"  "]}),0!==n.names.length&&(0,s.jsx)(d.A,{variant:"flush",style:{borderBottom:"none"},children:n.names.sort((e,n)=>e<=n?-1:1).map((e,n)=>(0,s.jsx)(o.Fragment,{children:(0,s.jsxs)(d.A.Item,{action:!0,className:"d-flex justify-content-between align-items-center",style:{border:"0ch",borderBottom:"1px solid #dee2e6"},onClick:n=>{n.stopPropagation(),b({show:!0,name:e,new:!1})},children:[e,(0,s.jsx)(i.A,{variant:"outline-danger",size:"sm",as:"span",onClick:n=>{n.stopPropagation(),k(e)},children:(0,s.jsx)("i",{className:"bi bi-x-lg"})},n+"span-button")]})},"inbounds-"+n))}),(0,s.jsx)(u.A.Footer,{children:(0,s.jsxs)(h.A,{className:"d-flex justify-content-end",children:[(0,s.jsx)(v.A.Control,{value:C.value,onChange:e=>y({value:e.target.value})}),(0,s.jsxs)(i.A,{variant:"outline-success",onClick:()=>{!C.value||n.names.includes(C.value)||(x.name===C.value&&x.new?b(e=>({...e,show:!0})):b({show:!0,name:C.value,new:!0}))},children:[(0,s.jsx)("i",{className:"bi bi-plus-lg"}),"New "]})]})})]})]})}}},e=>{var n=n=>e(e.s=n);e.O(0,[100,306,920,818,869,993,840,912,863,441,517,358],()=>n(4784)),_N_E=e.O()}]);
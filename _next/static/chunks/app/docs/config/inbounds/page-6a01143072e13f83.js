(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5930],{4784:(e,n,a)=>{Promise.resolve().then(a.bind(a,1404))},2859:(e,n,a)=>{"use strict";a.d(n,{$d:()=>o,FX:()=>u,Vx:()=>i,no:()=>c});var s=a(5155),t=a(6180),r=a(6121),l=a(3667);let o=e=>{let{label:n,checked:a,onChange:o}=e;return(0,s.jsxs)(t.A.Group,{as:r.A,className:"mb-2",children:[(0,s.jsx)(t.A.Label,{column:!0,sm:2,children:n}),(0,s.jsx)(l.A,{sm:10,className:"d-flex align-items-center",children:(0,s.jsx)(t.A.Check,{className:"d-flex align-items-center",type:"switch",checked:a,onChange:e=>o(e.target.checked)})})]})},i=e=>{var n;let{...a}=e;return(0,s.jsxs)(t.A.Group,{as:r.A,className:"mb-3",children:[(0,s.jsx)(t.A.Label,{column:!0,sm:2,children:a.label}),(0,s.jsx)(l.A,{sm:10,children:(0,s.jsx)(t.A.Select,{value:a.value,onChange:e=>a.onChange(Number(e.target.value)),children:a.type.values.filter(null!==(n=a.filter)&&void 0!==n?n:()=>!0).map(e=>(0,s.jsx)("option",{value:e.number,children:a.format?a.format(e.number):e.name},e.number))})})]})},c=e=>{let{label:n,values:a,onChange:o,value:i,emptyChoose:c}=e;return(0,s.jsxs)(t.A.Group,{as:r.A,className:"mb-2",children:[(0,s.jsx)(t.A.Label,{column:!0,sm:2,children:n}),(0,s.jsx)(l.A,{sm:10,children:(0,s.jsxs)(t.A.Select,{value:i,onChange:e=>o(e.target.value),children:[c&&(0,s.jsx)("option",{value:"",children:"Choose..."}),a.map(e=>(0,s.jsx)("option",{value:e,children:e},e))]})})]})},u=e=>{let{values:n,onChange:a,value:r,emptyChoose:l,format:o}=e;return(0,s.jsxs)(t.A.Select,{value:r,onChange:e=>a(e.target.value),children:[l&&(0,s.jsx)("option",{value:"",children:"Choose..."}),n.map(e=>{let n="string"==typeof e?e:e[0],a="string"==typeof e?e:e[1];return(0,s.jsx)("option",{value:a,children:o?o(n):n},n)})]})}},148:(e,n,a)=>{"use strict";a.d(n,{u:()=>o,y:()=>i});var s=a(5155),t=a(2115),r=a(1757),l=a(491);let o=(0,t.createContext)({Info:e=>{console.log(e)},Error:e=>{console.error(e)}}),i=e=>{let{children:n}=e,[a,i]=(0,t.useState)({value:{},index:0}),c=(e,n)=>i(a=>({value:{...a.value,[a.index]:{text:e,type:n}},index:a.index+1}));return(0,s.jsxs)(o.Provider,{value:{Info:e=>{console.log(e),c(e,"success")},Error:e=>{console.error(e),c(e,"danger")}},children:[(0,s.jsx)(r.A,{className:"p-3",position:"top-center",containerPosition:"fixed",style:{zIndex:999999},children:Object.entries(a.value).map(e=>{let[n,a]=e;return(0,s.jsxs)(l.A,{role:"alert","aria-live":"assertive",show:!0,bg:a.type,onClose:()=>{i(e=>{let a={...e.value};return delete a[n],{...e,value:a}})},"aria-atomic":"true",delay:4e3,autohide:!0,animation:!0,children:[(0,s.jsxs)(l.A.Header,{children:[(0,s.jsx)("strong",{className:"me-auto",children:"Notification"}),(0,s.jsx)("small",{className:"text-muted",children:"just now"})]}),(0,s.jsx)(l.A.Body,{className:"text-center",children:a.text})]},"toast"+n)})}),n]})}},1404:(e,n,a)=>{"use strict";a.r(n),a.d(n,{default:()=>R});var s=a(5155),t=a(3577),r=a(950),l=a(1936),o=a(5554),i=a.n(o),c=a(2115),u=a(0),d=a(2963),h=a(2981),v=a(57),x=a(8003),p=a(6180),g=a(7021),m=a(9169),j=a(8927),b=a(148),C=a(6863),y=a(7641),A=a(2859),k=a(7204),N=a(6121),f=a(3667),w=a(2273);let F=e=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(k.a9,{label:"Username",value:e.http.username,onChange:n=>e.onChange({...e.http,username:n})}),(0,s.jsx)(k.a9,{label:"Password",value:e.http.password,onChange:n=>e.onChange({...e.http,password:n})})]}),P=e=>(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(k.a9,{label:"Url",value:e.reverse_http.url,onChange:n=>e.onChange({...e.reverse_http,url:n})})}),S=e=>(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(k.a9,{label:"Host",value:e.reverse_tcp.host,onChange:n=>e.onChange({...e.reverse_tcp,host:n})})}),E=e=>(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(k.a9,{label:"Host",value:e.redir.host,onChange:n=>e.onChange({...e.redir,host:n})})}),I=e=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(A.$d,{label:"DNS Hijacking",checked:e.tproxy.dnsHijacking,onChange:()=>e.onChange({...e.tproxy,dnsHijacking:!e.tproxy.dnsHijacking})}),(0,s.jsx)(A.$d,{label:"Force Fake IP",checked:e.tproxy.forceFakeip,onChange:()=>e.onChange({...e.tproxy,forceFakeip:!e.tproxy.forceFakeip})}),(0,s.jsx)(k.a9,{label:"Host",value:e.tproxy.host,onChange:n=>e.onChange({...e.tproxy,host:n})})]}),H=e=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(k.a9,{label:"Username",value:e.socks5.username,onChange:n=>e.onChange({...e.socks5,username:n})}),(0,s.jsx)(k.a9,{label:"Password",value:e.socks5.password,onChange:n=>e.onChange({...e.socks5,password:n})})]}),T=e=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(k.a9,{label:"Username",value:e.mixed.username,onChange:n=>e.onChange({...e.mixed,username:n})}),(0,s.jsx)(k.a9,{label:"Password",value:e.mixed.password,onChange:n=>e.onChange({...e.mixed,password:n})})]}),U=e=>{var n,a;let[r,l]=(0,c.useState)((0,w.fj)(e.tun.postUp)),[o,i]=(0,c.useState)((0,w.fj)(e.tun.postDown));return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(A.$d,{checked:e.tun.skipMulticast,onChange:()=>e.onChange({...e.tun,skipMulticast:!e.tun.skipMulticast}),label:"Skip Multicast"}),(0,s.jsx)(k.a9,{label:"Name",value:e.tun.name,onChange:n=>e.onChange({...e.tun,name:n})}),(0,s.jsx)(k.a9,{label:"MTU",value:e.tun.mtu,onChange:n=>{isNaN(Number(n))||e.onChange({...e.tun,mtu:Number(n)})}}),(0,s.jsx)(k.a9,{label:"IPv4",value:e.tun.portal,onChange:n=>e.onChange({...e.tun,portal:n})}),(0,s.jsx)(k.a9,{label:"IPv6",value:e.tun.portalV6,onChange:n=>e.onChange({...e.tun,portalV6:n})}),(0,s.jsx)(k.a9,{label:"Post Up",value:r,onChange:n=>{l(n);try{let a=(0,w.lD)(n);e.onChange({...e.tun,postUp:a})}catch(e){console.log(e)}}}),(0,s.jsx)(k.a9,{label:"Post Down",value:o,onChange:n=>{i(n);try{let a=(0,w.lD)(n);e.onChange({...e.tun,postDown:a})}catch(e){console.log(e)}}}),(0,s.jsx)(A.Vx,{label:"Stack",type:y.mM,value:e.tun.driver,onChange:n=>e.onChange({...e.tun,driver:n})}),(0,s.jsx)(k.e9,{title:"Routes",data:null!==(a=null===(n=e.tun.route)||void 0===n?void 0:n.routes)&&void 0!==a?a:[],onChange:n=>{let a={...e.tun};a.route||(a.route=(0,t.v)(y.l,{})),n||(n=[]),a.route&&(a.route.routes=n),e.onChange({...a})}})]})},D=e=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(k.jU,{label:"Cert",value:new TextDecoder().decode(e.cert.cert),onChange:n=>e.onChange({...e.cert,cert:new TextEncoder().encode(n)})}),(0,s.jsx)(k.jU,{label:"Key",value:new TextDecoder().decode(e.cert.key),onChange:n=>e.onChange({...e.cert,key:new TextEncoder().encode(n)})}),(0,s.jsx)(k.a9,{label:"Cert File",value:e.cert.certFilePath,onChange:n=>e.onChange({...e.cert,certFilePath:n})}),(0,s.jsx)(k.a9,{label:"Key File",value:e.cert.keyFilePath,onChange:n=>e.onChange({...e.cert,keyFilePath:n})})]}),_=e=>{var n,a;let[r,l]=(0,c.useState)("www.example.com");return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(k.e9,{title:"Next Protos",data:null!==(a=null===(n=e.tls)||void 0===n?void 0:n.nextProtos)&&void 0!==a?a:[],onChange:n=>e.onChange({...e.tls,nextProtos:n})}),e.tls&&e.tls.certificates.map((n,a)=>(0,s.jsx)(h.A,{className:"mb-2",children:(0,s.jsxs)(h.A.Body,{children:[(0,s.jsx)(h.A.Title,{className:"d-flex justify-content-end align-items-center",children:(0,s.jsx)(d.A,{variant:"outline-danger",onClick:()=>e.onChange({...e.tls,certificates:e.tls.certificates.filter((e,n)=>n!==a)}),children:(0,s.jsx)("i",{className:"bi bi-x-lg"})})}),(0,s.jsx)(D,{cert:(0,t.v)(y.f6,n),onChange:n=>{e.onChange({...e.tls,certificates:[...e.tls.certificates.slice(0,a),n,...e.tls.certificates.slice(a+1)]})}})]})},"tls_certificates"+a)),(0,s.jsx)(x.A,{className:"d-flex justify-content-end mb-2",children:(0,s.jsxs)(d.A,{variant:"outline-success",onClick:()=>e.onChange({...e.tls,certificates:[...e.tls.certificates,(0,t.v)(y.f6,{cert:new Uint8Array(0),key:new Uint8Array(0),certFilePath:"",keyFilePath:""})]}),children:[(0,s.jsx)("i",{className:"bi bi-plus-lg"}),"New Certificate"]})}),e.tls&&e.tls.serverNameCertificate&&Object.entries(e.tls.serverNameCertificate).map(n=>{let[a,r]=n;return(0,s.jsx)(h.A,{className:"mb-2",children:(0,s.jsxs)(h.A.Body,{children:[(0,s.jsxs)(h.A.Title,{className:"d-flex justify-content-between align-items-center",children:[a,(0,s.jsx)(d.A,{variant:"outline-danger",onClick:()=>{let n={...e.tls.serverNameCertificate};delete n[a],e.onChange({...e.tls,serverNameCertificate:n})},children:(0,s.jsx)("i",{className:"bi bi-x-lg"})})]}),(0,s.jsx)(D,{cert:(0,t.v)(y.f6,r),onChange:n=>{e.onChange({...e.tls,serverNameCertificate:{...e.tls.serverNameCertificate,[a]:n}})}})]})},"server_name_certificate"+a)}),(0,s.jsxs)(x.A,{className:"d-flex justify-content-end",children:[(0,s.jsx)(p.A.Control,{value:r,onChange:e=>l(e.target.value)}),(0,s.jsxs)(d.A,{variant:"outline-success",onClick:()=>{r&&e.onChange({...e.tls,serverNameCertificate:{...e.tls.serverNameCertificate,[r]:(0,t.v)(y.f6,{})}})},children:[(0,s.jsx)("i",{className:"bi bi-plus-lg"}),"New SNI Certificate"]})]})]})},q=e=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(k.a9,{label:"Host",onChange:n=>e.onChange({...e.quic,host:n}),value:e.quic.host}),e.quic.tls&&(0,s.jsx)(_,{tls:(0,t.v)(y.Qi,null!==e.quic.tls?e.quic.tls:void 0),onChange:n=>e.onChange({...e.quic,tls:n})})]}),M=e=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(k.a9,{plaintext:!0,label:"Protocol",value:"TLS"}),e.tls.tls&&(0,s.jsx)(_,{tls:(0,t.v)(y.Qi,e.tls.tls),onChange:n=>e.onChange({...e.tls,tls:n})})]}),L=e=>{let[n,a]=(0,c.useState)({value:""}),[t,r]=(0,c.useState)({value:""});return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(k.a9,{plaintext:!0,label:"Protocol",value:"Reality"}),(0,s.jsx)(k.a9,{label:"Dest",value:e.reality.dest,onChange:n=>e.onChange({...e.reality,dest:n})}),(0,s.jsx)(k.a9,{label:"Private Key",value:e.reality.privateKey,onChange:n=>e.onChange({...e.reality,privateKey:n})}),(0,s.jsxs)(p.A.Group,{as:N.A,className:"mb-3",children:[(0,s.jsx)(p.A.Label,{column:!0,sm:2,className:"nowrap",children:"Short ID"}),e.reality.shortId.map((n,a)=>(0,s.jsx)(f.A,{sm:{span:10,offset:0!==a?2:0},children:(0,s.jsxs)(x.A,{className:"mb-2",children:[(0,s.jsx)(p.A.Control,{value:n,onChange:n=>e.onChange({...e.reality,shortId:[...e.reality.shortId.slice(0,a),n.target.value,...e.reality.shortId.slice(a+1)]})}),(0,s.jsx)(d.A,{variant:"outline-danger",onClick:()=>e.onChange({...e.reality,shortId:[...e.reality.shortId.slice(0,a),...e.reality.shortId.slice(a+1)]}),children:(0,s.jsx)("i",{className:"bi bi-x-lg"})})]})},a)),(0,s.jsx)(f.A,{sm:{span:10,offset:0!==e.reality.shortId.length?2:0},children:(0,s.jsxs)(x.A,{className:"mb-2",children:[(0,s.jsx)(p.A.Control,{value:n.value,onChange:e=>a({value:e.target.value})}),(0,s.jsx)(d.A,{variant:"outline-success",onClick:()=>e.onChange({...e.reality,shortId:[...e.reality.shortId,n.value]}),children:(0,s.jsx)("i",{className:"bi bi-plus-lg"})})]})})]}),(0,s.jsxs)(p.A.Group,{as:N.A,className:"mb-3",children:[(0,s.jsx)(p.A.Label,{column:!0,sm:2,className:"nowrap",children:"Server Name"}),e.reality.serverName.map((n,a)=>(0,s.jsx)(f.A,{sm:{span:10,offset:0!==a?2:0},children:(0,s.jsxs)(x.A,{className:"mb-2",children:[(0,s.jsx)(p.A.Control,{value:n,onChange:n=>e.onChange({...e.reality,serverName:[...e.reality.serverName.slice(0,a),n.target.value,...e.reality.serverName.slice(a+1)]})}),(0,s.jsx)(d.A,{variant:"outline-danger",onClick:()=>e.onChange({...e.reality,serverName:[...e.reality.serverName.slice(0,a),...e.reality.serverName.slice(a+1)]}),children:(0,s.jsx)("i",{className:"bi bi-x-lg"})})]})},a)),(0,s.jsx)(f.A,{sm:{span:10,offset:0!==e.reality.serverName.length?2:0},children:(0,s.jsxs)(x.A,{className:"mb-2",children:[(0,s.jsx)(p.A.Control,{value:t.value,onChange:e=>r({value:e.target.value})}),(0,s.jsx)(d.A,{variant:"outline-success",onClick:()=>e.onChange({...e.reality,serverName:[...e.reality.serverName,t.value]}),children:(0,s.jsx)("i",{className:"bi bi-plus-lg"})})]})})]})]})},z=e=>{let[n,a]=(0,c.useState)({value:"normal"});return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(A.$d,{label:"Enabled",checked:e.inbound.enabled,onChange:()=>{e.onChange({...e.inbound,enabled:!e.inbound.enabled})}}),(0,s.jsx)(k.a9,{label:"Name",value:e.inbound.name,onChange:n=>{e.onChange({...e.inbound,name:n})}}),(0,s.jsx)(k.mc,{title:"Network",hideClose:!0,children:(0,s.jsx)(B,{inbound:e.inbound,onChange:n=>{e.onChange({...n})}})}),(0,s.jsx)(k.mc,{title:"Transport",hideClose:!0,children:(0,s.jsxs)(s.Fragment,{children:[e.inbound.transport.map((n,a)=>{var t,r;return(0,s.jsx)(k.mc,{title:null!==(r=null===(t=n.transport.case)||void 0===t?void 0:t.toString())&&void 0!==r?r:"",onClose:()=>{e.onChange({...e.inbound,transport:[...e.inbound.transport.slice(0,a),...e.inbound.transport.slice(a+1)]})},moveUpDown:new k.fH(e.inbound.transport,a,n=>e.onChange({...e.inbound,transport:n})),children:(0,s.jsx)(O,{transport:n,onChange:n=>{e.onChange({...e.inbound,transport:[...e.inbound.transport.slice(0,a),n,...e.inbound.transport.slice(a+1)]})}},a)},a)}),(0,s.jsx)(v.A,{variant:"flush",children:(0,s.jsx)(v.A.Item,{children:(0,s.jsxs)(x.A,{children:[(0,s.jsx)(A.FX,{value:n.value,values:["normal","tls","mux","http2","websocket","grpc","reality"],onChange:e=>a({value:e})}),(0,s.jsxs)(d.A,{variant:"outline-success",onClick:()=>{let a={...e.inbound};switch(n.value){case"normal":a.transport.push((0,t.v)(y.ls,{transport:{case:"normal",value:(0,t.v)(y.Rc,{})}}));break;case"tls":a.transport.push((0,t.v)(y.ls,{transport:{case:"tls",value:(0,t.v)(y.fx,{tls:(0,t.v)(y.Qi,{})})}}));break;case"mux":a.transport.push((0,t.v)(y.ls,{transport:{case:"mux",value:(0,t.v)(y.gE,{})}}));break;case"http2":a.transport.push((0,t.v)(y.ls,{transport:{case:"http2",value:(0,t.v)(y.ql,{})}}));break;case"websocket":a.transport.push((0,t.v)(y.ls,{transport:{case:"websocket",value:(0,t.v)(y.BP,{})}}));break;case"grpc":a.transport.push((0,t.v)(y.ls,{transport:{case:"grpc",value:(0,t.v)(y.E_,{})}}));break;case"reality":a.transport.push((0,t.v)(y.ls,{transport:{case:"reality",value:(0,t.v)(y.K0,{})}}))}e.onChange(a)},children:[(0,s.jsx)("i",{className:"bi bi-plus-lg"}),"Add"]})]})})})]})}),(0,s.jsx)(k.mc,{title:"Protocol",hideClose:!0,children:(0,s.jsx)(G,{inbound:e.inbound,onChange:n=>{e.onChange({...n})}})})]})},B=e=>{var n,a;let[r,l]=(0,c.useState)({value:null!==(a=null===(n=e.inbound.network.case)||void 0===n?void 0:n.toString())&&void 0!==a?a:"tcpudp"});return(0,c.useEffect)(()=>{l({value:e.inbound.network.case?e.inbound.network.case.toString():"tcpudp"})},[e.inbound]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(v.A,{variant:"flush",children:(0,s.jsx)(v.A.Item,{children:(0,s.jsxs)(x.A,{children:[(0,s.jsx)(A.FX,{value:r.value,values:["empty","tcpudp","quic"],onChange:e=>l({value:e})}),(0,s.jsx)(d.A,{variant:"outline-success",onClick:()=>{let n={...e.inbound};switch(r.value){case"tcpudp":n.network={case:"tcpudp",value:(0,t.v)(y.as,{})};break;case"quic":n.network={case:"quic",value:(0,t.v)(y.sn,{})};break;case"empty":n.network={case:"empty",value:(0,t.v)(y.bN,{})}}e.onChange({...n})},children:"Use"})]})})}),(0,s.jsx)("br",{}),(0,s.jsx)(K,{inbound:e.inbound,onChange:e.onChange})]})},K=e=>{switch(e.inbound.network.case){case"tcpudp":return(0,s.jsx)(X,{protocol:e.inbound.network.value,onChange:n=>{e.onChange({...e.inbound,network:{case:"tcpudp",value:n}})}});case"quic":return(0,s.jsx)(q,{quic:e.inbound.network.value,onChange:n=>{e.onChange({...e.inbound,network:{case:"quic",value:n}})}});case"empty":return(0,s.jsx)(s.Fragment,{})}},O=e=>{switch(e.transport.transport.case){case"normal":return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:"text-center",style:{opacity:"0.4"},children:"Normal"})});case"tls":return(0,s.jsx)(M,{tls:e.transport.transport.value,onChange:n=>{e.onChange({...e.transport,transport:{case:"tls",value:n}})}});case"mux":return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:"text-center",style:{opacity:"0.4"},children:"Mux"})});case"http2":return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:"text-center",style:{opacity:"0.4"},children:"HTTP2"})});case"websocket":return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:"text-center",style:{opacity:"0.4"},children:"Websocket"})});case"grpc":return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:"text-center",style:{opacity:"0.4"},children:"Grpc"})});case"reality":return(0,s.jsx)(L,{reality:e.transport.transport.value,onChange:n=>{e.onChange({...e.transport,transport:{case:"reality",value:n}})}})}},$=e=>{switch(e.inbound.protocol.case){case"http":return(0,s.jsx)(F,{http:e.inbound.protocol.value,onChange:n=>{e.onChange({...e.inbound,protocol:{case:"http",value:n}})}});case"reverseHttp":return(0,s.jsx)(P,{reverse_http:e.inbound.protocol.value,onChange:n=>{e.onChange({...e.inbound,protocol:{case:"reverseHttp",value:n}})}});case"reverseTcp":return(0,s.jsx)(S,{reverse_tcp:e.inbound.protocol.value,onChange:n=>{e.onChange({...e.inbound,protocol:{case:"reverseTcp",value:n}})}});case"socks5":return(0,s.jsx)(H,{socks5:e.inbound.protocol.value,onChange:n=>{e.onChange({...e.inbound,protocol:{case:"socks5",value:n}})}});case"socks4a":return(0,s.jsx)(s.Fragment,{});case"mix":return(0,s.jsx)(T,{mixed:e.inbound.protocol.value,onChange:n=>{e.onChange({...e.inbound,protocol:{case:"mix",value:n}})}});case"redir":return(0,s.jsx)(E,{redir:e.inbound.protocol.value,onChange:n=>{e.onChange({...e.inbound,protocol:{case:"redir",value:n}})}});case"tun":return(0,s.jsx)(U,{tun:e.inbound.protocol.value,onChange:n=>{e.onChange({...e.inbound,protocol:{case:"tun",value:n}})}});case"yuubinsya":return(0,s.jsx)(V,{yuubinsya:e.inbound.protocol.value,onChange:n=>{e.onChange({...e.inbound,protocol:{case:"yuubinsya",value:n}})}});case"tproxy":return(0,s.jsx)(I,{tproxy:e.inbound.protocol.value,onChange:n=>{e.onChange({...e.inbound,protocol:{case:"tproxy",value:n}})}})}},G=e=>{let[n,a]=(0,c.useState)({value:e.inbound.protocol.case?e.inbound.protocol.case.toString():"yuubinsya"});return(0,c.useEffect)(()=>{a({value:e.inbound.protocol.case?e.inbound.protocol.case.toString():"yuubinsya"})},[e.inbound]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(v.A,{variant:"flush",children:(0,s.jsx)(v.A.Item,{children:(0,s.jsxs)(x.A,{children:[(0,s.jsx)(A.FX,{value:n.value,values:["http","reverseHttp","reverseTcp","socks5","mix","redir","tun","yuubinsya","tproxy"],onChange:e=>a({value:e})}),(0,s.jsx)(d.A,{variant:"outline-success",onClick:()=>{let a={...e.inbound};switch(n.value){case"http":a.protocol={case:"http",value:(0,t.v)(y.UM,{})};break;case"reverseHttp":a.protocol={case:"reverseHttp",value:(0,t.v)(y.l0,{})};break;case"reverseTcp":a.protocol={case:"reverseTcp",value:(0,t.v)(y.A0,{})};break;case"socks5":a.protocol={case:"socks5",value:(0,t.v)(y.AK,{})};break;case"mix":a.protocol={case:"mix",value:(0,t.v)(y.JX,{})};break;case"redir":a.protocol={case:"redir",value:(0,t.v)(y.Q9,{})};break;case"tun":a.protocol={case:"tun",value:(0,t.v)(y.vC,{})};break;case"yuubinsya":a.protocol={case:"yuubinsya",value:(0,t.v)(y.lA,{})};break;case"tproxy":a.protocol={case:"tproxy",value:(0,t.v)(y.SL,{})}}e.onChange({...a})},children:"Use"})]})})}),(0,s.jsx)("br",{}),(0,s.jsx)($,{inbound:e.inbound,onChange:n=>{e.onChange({...n})}})]})},V=e=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(A.$d,{label:"TCP Encrypt",checked:e.yuubinsya.tcpEncrypt,onChange:()=>{e.onChange({...e.yuubinsya,tcpEncrypt:!e.yuubinsya.tcpEncrypt})}}),(0,s.jsx)(A.$d,{label:"UDP Encrypt",checked:e.yuubinsya.udpEncrypt,onChange:()=>{e.onChange({...e.yuubinsya,udpEncrypt:!e.yuubinsya.udpEncrypt})}}),(0,s.jsx)(k.a9,{label:"Password",value:e.yuubinsya.password,onChange:n=>{e.onChange({...e.yuubinsya,password:n})}})]}),X=e=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(k.a9,{label:"Host",value:e.protocol.host,onChange:n=>{e.onChange({...e.protocol,host:n})}}),(0,s.jsx)(A.Vx,{label:"Control",type:y.JM,value:e.protocol.control,onChange:n=>{e.onChange({...e.protocol,control:n})}})]}),Q=e=>{let n=(0,c.useContext)(b.u),{data:a,error:o,isLoading:i,isValidating:h,mutate:v}=(0,g.Ay)(""===e.name?void 0:"/inbound",(0,j.AD)(C.mz.method.get,"POST",(0,t.v)(l.g8,{value:e.name}),e.isNew?(0,t.v)(y.Zq,{name:e.name,enabled:!1}):void 0),{shouldRetryOnError:!1,keepPreviousData:!1,revalidateOnFocus:!1});return(0,c.useEffect)(()=>{v()},[e.name,e.isNew,v]),(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(u.A,{show:e.show,scrollable:!0,"aria-labelledby":"contained-modal-title-vcenter",size:"xl",onHide:()=>{e.onHide()},centered:!0,children:[(0,s.jsx)(u.A.Header,{children:(0,s.jsx)(u.A.Title,{id:"contained-modal-title-vcenter",children:e.name})}),(0,s.jsx)(u.A.Body,{children:o?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("h4",{className:"text-center my-2",children:[o.code," - ",o.msg]}),(0,s.jsx)("pre",{className:"text-center my-2 text-danger lead",children:o.raw})]}):h||i||!a?(0,s.jsx)(m.A,{}):(0,s.jsx)(z,{inbound:a,onChange:e=>{v((0,r.o)(y.Zq,e),!1)}})}),(0,s.jsxs)(u.A.Footer,{children:[(0,s.jsx)(d.A,{variant:"outline-secondary",onClick:()=>{e.onHide()},children:"Close"}),(0,s.jsx)(d.A,{variant:"outline-primary",onClick:()=>{(0,j.kP)(C.mz.method.save,"/inbound","PATCH",a).then(async a=>{let{error:s}=a;if(void 0===s)n.Info("save successful"),e.onHide(!0);else{let e=s.msg;n.Error(e),console.error(s.code,e)}})},children:"Save"})]})]})})},R=function(){let e=(0,c.useContext)(b.u),{data:n,error:a,isLoading:r,mutate:o}=(0,g.Ay)("/inbounds",(0,j.AD)(C.mz.method.list)),[u,y]=(0,c.useState)({show:!1,name:"",new:!1}),[A,k]=(0,c.useState)({value:""});if(void 0!==a)return(0,s.jsx)(i(),{statusCode:a.code,title:a.msg});if(r||void 0===n)return(0,s.jsx)(m.A,{});let N=n=>{(0,j.kP)(C.mz.method.remove,"/inbound","DELETE",(0,t.v)(l.g8,{value:n})).then(async n=>{let{error:a}=n;if(void 0===a)e.Info("remove successful"),o();else{let n=a.msg;e.Error(n),console.error(a.code,n)}})};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(Q,{show:u.show,name:u.name,onHide:e=>{e&&o(),y({...u,show:!1})},isNew:u.new}),(0,s.jsxs)(h.A,{children:[0===n.names.length&&(0,s.jsxs)(h.A.Body,{children:[(0,s.jsx)("div",{className:"text-center my-2",style:{opacity:"0.4"},children:"No Inbounds"}),"  "]}),0!==n.names.length&&(0,s.jsx)(v.A,{variant:"flush",children:n.names.sort((e,n)=>e<=n?-1:1).map((e,n)=>(0,s.jsx)(c.Fragment,{children:(0,s.jsxs)(v.A.Item,{action:!0,className:"d-flex justify-content-between align-items-center",style:{border:"0ch",borderBottom:"1px solid #dee2e6"},onClick:n=>{n.stopPropagation(),y({show:!0,name:e,new:!1})},children:[e,(0,s.jsx)(d.A,{variant:"outline-danger",size:"sm",as:"span",onClick:n=>{n.stopPropagation(),N(e)},children:(0,s.jsx)("i",{className:"bi bi-x-lg"})},n+"span-button")]})},"inbounds-"+n))}),(0,s.jsx)(h.A.Footer,{children:(0,s.jsxs)(x.A,{className:"d-flex justify-content-end",children:[(0,s.jsx)(p.A.Control,{value:A.value,onChange:e=>k({value:e.target.value})}),(0,s.jsxs)(d.A,{variant:"outline-success",onClick:()=>{!A.value||n.names.includes(A.value)||(u.name===A.value&&u.new?y(e=>({...e,show:!0})):y({show:!0,name:A.value,new:!0}))},children:[(0,s.jsx)("i",{className:"bi bi-plus-lg"}),"New "]})]})})]})]})}}},e=>{var n=n=>e(e.s=n);e.O(0,[7295,867,6306,8920,9818,9637,6536,52,1922,6863,8441,1517,7358],()=>n(4784)),_N_E=e.O()}]);
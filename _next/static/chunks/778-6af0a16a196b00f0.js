"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[778],{7294:(e,a,s)=>{s.d(a,{R:()=>h,O:()=>d});var l=s(2115),r=s(7021),n=s(6788),t=s(4395),o=s(9297);let c=(0,n.w)("ChF0b29scy90b29scy5wcm90bxINeXVoYWlpbi50b29scyI6CgpJbnRlcmZhY2VzEiwKCmludGVyZmFjZXMYASADKAsyGC55dWhhaWluLnRvb2xzLkludGVyZmFjZSIsCglJbnRlcmZhY2USDAoEbmFtZRgBIAEoCRIRCglhZGRyZXNzZXMYAiADKAkySwoFdG9vbHMSQgoNZ2V0X2ludGVyZmFjZRIWLmdvb2dsZS5wcm90b2J1Zi5FbXB0eRoZLnl1aGFpaW4udG9vbHMuSW50ZXJmYWNlc0IvWi1naXRodWIuY29tL0FzdXRvcnVmYS95dWhhaWluL3BrZy9wcm90b3MvdG9vbHNiBnByb3RvMw",[o.t]),u=(0,t.Z)(c,0);var i=s(8927);let d=(0,l.createContext)([]);function h(){let{data:e}=(0,r.Ay)("/interfaces",(0,i.AD)(u.method.get_interface),{revalidateOnFocus:!1});return e?e.interfaces:[]}},2859:(e,a,s)=>{s.d(a,{$d:()=>o,FX:()=>i,Vx:()=>c,no:()=>u});var l=s(5155),r=s(6180),n=s(6121),t=s(3667);let o=e=>{let{label:a,checked:s,onChange:o,className:c}=e;return(0,l.jsxs)(r.A.Group,{as:n.A,className:c,children:[(0,l.jsx)(r.A.Label,{column:!0,sm:2,children:a}),(0,l.jsx)(t.A,{sm:10,className:"d-flex align-items-center",children:(0,l.jsx)(r.A.Check,{className:"d-flex align-items-center",type:"switch",checked:s,onChange:e=>o(e.target.checked)})})]})},c=e=>{var a;let{...s}=e;return(0,l.jsxs)(r.A.Group,{as:n.A,className:s.lastElem?"":"mb-2",children:[(0,l.jsx)(r.A.Label,{column:!0,sm:2,children:s.label}),(0,l.jsx)(t.A,{sm:10,children:(0,l.jsx)(r.A.Select,{value:s.value,onChange:e=>s.onChange(Number(e.target.value)),children:s.type.values.filter(null!==(a=s.filter)&&void 0!==a?a:()=>!0).map(e=>(0,l.jsx)("option",{value:e.number,children:s.format?s.format(e.number):e.name},e.number))})})]})},u=e=>{let{label:a,values:s,onChange:o,value:c,emptyChoose:u,lastElem:i}=e;return(0,l.jsxs)(r.A.Group,{as:n.A,className:i?"":"mb-2",children:[(0,l.jsx)(r.A.Label,{column:!0,sm:2,children:a}),(0,l.jsx)(t.A,{sm:10,children:(0,l.jsxs)(r.A.Select,{value:c,onChange:e=>o(e.target.value),children:[u&&(0,l.jsx)("option",{value:"",children:"Choose..."}),s.map(e=>(0,l.jsx)("option",{value:e,children:e},e))]})})]})},i=e=>{let{values:a,onChange:s,value:n,emptyChoose:t,format:o}=e;return(0,l.jsxs)(r.A.Select,{value:n,onChange:e=>s(e.target.value),children:[t&&(0,l.jsx)("option",{value:"",children:"Choose..."}),a.map(e=>{let a="string"==typeof e?e:e[0],s="string"==typeof e?e:e[1];return(0,l.jsx)("option",{value:s,children:o?o(a):a},a)})]})}},148:(e,a,s)=>{s.d(a,{u:()=>o,y:()=>c});var l=s(5155),r=s(2115),n=s(1757),t=s(491);let o=(0,r.createContext)({Info:e=>{console.log(e)},Error:e=>{console.error(e)}}),c=e=>{let{children:a}=e,[s,c]=(0,r.useState)({value:{},index:0}),u=(e,a)=>c(s=>({value:{...s.value,[s.index]:{text:e,type:a}},index:s.index+1}));return(0,l.jsxs)(o.Provider,{value:{Info:e=>{console.log(e),u(e,"success")},Error:e=>{console.error(e),u(e,"danger")}},children:[(0,l.jsx)(n.A,{className:"p-3",position:"top-center",containerPosition:"fixed",style:{zIndex:999999},children:Object.entries(s.value).map(e=>{let[a,s]=e;return(0,l.jsxs)(t.A,{role:"alert","aria-live":"assertive",show:!0,bg:s.type,onClose:()=>{c(e=>{let s={...e.value};return delete s[a],{...e,value:s}})},"aria-atomic":"true",delay:4e3,autohide:!0,animation:!0,children:[(0,l.jsxs)(t.A.Header,{children:[(0,l.jsx)("strong",{className:"me-auto",children:"Notification"}),(0,l.jsx)("small",{className:"text-muted",children:"just now"})]}),(0,l.jsx)(t.A.Body,{className:"text-center",children:s.text})]},"toast"+a)})}),a]})}},4778:(e,a,s)=>{s.d(a,{E:()=>eo,y:()=>et});var l=s(5155),r=s(3577),n=s(9093),t=s(4504),o=s(1936),c=s(2115),u=s(2963),i=s(0),d=s(8143),h=s(3614),v=s(9637),m=s(6180),p=s(7021),x=s(7294),j=s(9169),b=s(8927),g=s(148),C=s(9969),y=s(2049),A=s(57),w=s(8003),f=s(2859),N=s(7204),k=s(1703);let E=e=>{let{value:a,onChange:s}=e,r=(0,c.useContext)(x.O);return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(N.a9,{label:"Network Interface",value:a.networkInterface,onChange:e=>{s({...a,networkInterface:e})},reminds:r.map(e=>{var a;if(e.name)return{label:e.name,value:e.name,label_children:null===(a=e.addresses)||void 0===a?void 0:a.map(e=>e||"")}}).filter(e=>!!e)})})},S=(0,l.jsx)("div",{className:"text-center my-2",style:{opacity:"0.4"},children:" Drop"}),I=e=>(0,l.jsx)(F,{value:e.value,onChange:e.onChange}),F=e=>{let{value:a,onChange:s,showEnabled:r}=e;return(0,l.jsxs)(l.Fragment,{children:[(void 0===r||r)&&(0,l.jsx)(f.$d,{label:"TLS Enabled",checked:a.enable,onChange:()=>{s({...a,enable:!a.enable})}}),(0,l.jsx)(f.$d,{label:"InsecureSkipVerify",checked:a.insecureSkipVerify,onChange:()=>{s({...a,insecureSkipVerify:!a.insecureSkipVerify})}}),(0,l.jsx)(N.e9,{title:"ServerNames",data:a.serverNames,onChange:e=>{s({...a,serverNames:e})}}),(0,l.jsx)(N.e9,{title:"NextProtos",data:a.nextProtos,onChange:e=>{s({...a,nextProtos:e})}}),(0,l.jsx)(N.n4,{title:"CaCert",textarea:!0,data:a.caCert,onChange:e=>{s({...a,caCert:e})}})]})},P=e=>{var a;let{value:s,onChange:n}=e;return(0,l.jsx)(F,{value:null!==(a=s.tls)&&void 0!==a?a:(0,r.v)(k.Qi,{}),onChange:e=>{n({...s,tls:e})}})},H=e=>{let{value:a,onChange:s}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(N.a9,{label:"User",value:a.user,onChange:e=>{s({...a,user:e})}}),(0,l.jsx)(N.a9,{label:"Password",value:a.password,onChange:e=>{s({...a,password:e})}})]})},O=e=>{let{value:a,onChange:s}=e;return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(N.a9,{label:"Concurrency",value:a.concurrency,onChange:e=>{isNaN(Number(e))||s({...a,concurrency:Number(e)})}})})},R=e=>{let{value:a,onChange:s}=e;return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(N.a9,{label:"Concurrency",value:a.concurrency,onChange:e=>{isNaN(Number(e))||s({...a,concurrency:Number(e)})}})})},W=(0,l.jsx)("div",{className:"text-center my-2",style:{opacity:"0.4"},children:"None"}),Q=e=>{var a;let{value:s,onChange:n}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(N.a9,{label:"Host",value:s.host,onChange:e=>{n({...s,host:e})}}),(0,l.jsx)(F,{showEnabled:!1,value:null!==(a=s.tls)&&void 0!==a?a:(0,r.v)(k.Qi,{}),onChange:e=>{n({...s,tls:e})}})]})},B=e=>{let{value:a,onChange:s}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(f.$d,{label:"Debug",checked:a.debug,onChange:()=>{s({...a,debug:!a.debug})}}),(0,l.jsx)(N.a9,{label:"PublicKey",value:a.publicKey,onChange:e=>{s({...a,publicKey:e})}}),(0,l.jsx)(N.a9,{label:"ServerName",value:a.serverName,onChange:e=>{s({...a,serverName:e})}}),(0,l.jsx)(N.a9,{label:"ShortId",value:a.shortId,onChange:e=>{s({...a,shortId:e})}})]})},L=(0,l.jsx)("div",{className:"text-center my-2",style:{opacity:"0.4"},children:"Reject"}),Y=e=>{let{value:a,onChange:s}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(N.a9,{label:"Method",value:a.method,onChange:e=>{s({...a,method:e})}}),(0,l.jsx)(N.a9,{label:"Password",value:a.password,onChange:e=>{s({...a,password:e})}})]})},Z=e=>{let{value:a,onChange:s}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(N.a9,{label:"Host",value:a.host,onChange:e=>{s({...a,host:e})}}),(0,l.jsx)(N.a9,{label:"Port",value:a.port,onChange:e=>{s({...a,port:e})}})]})},D=e=>{let{value:a,onChange:s}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(N.a9,{label:"Server",value:a.server,onChange:e=>{s({...a,server:e})}}),(0,l.jsx)(N.a9,{label:"Port",value:a.port,onChange:e=>{s({...a,port:e})}}),(0,l.jsx)(N.a9,{label:"Method",value:a.method,placeholder:"chacha20-ietf",onChange:e=>{s({...a,method:e})}}),(0,l.jsx)(N.a9,{label:"Protocol",value:a.protocol,placeholder:"auth_aes128_sha1",onChange:e=>{s({...a,protocol:e})}}),(0,l.jsx)(N.a9,{label:"ProtocolParam",value:a.protoparam,onChange:e=>{s({...a,protoparam:e})}}),(0,l.jsx)(N.a9,{label:"Obfs",value:a.obfs,placeholder:"http_post",onChange:e=>{s({...a,obfs:e})}}),(0,l.jsx)(N.a9,{label:"ObfsParam",value:a.obfsparam,placeholder:"#name=v",onChange:e=>{s({...a,obfsparam:e})}})]})};var G=s(6121),K=s(3667);let X=e=>{let{title:a,data:s,onChange:n}=e;return(0,l.jsxs)(m.A.Group,{as:G.A,className:"mb-3 flex-grow-1 overflow-auto",children:[(0,l.jsx)(m.A.Label,{column:!0,sm:2,className:"nowrap",children:a}),s&&s.map((e,a)=>(0,l.jsx)(K.A,{sm:{span:10,offset:0!==a?2:0},children:(0,l.jsx)(w.A,{className:"mb-2",children:(0,l.jsx)(N.mc,{title:"Host",onClose:()=>{s&&n([...s.slice(0,a),...s.slice(a+1)])},children:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(N.a9,{label:"Host",value:e.host,onChange:l=>{n([...s.slice(0,a),{...e,host:l},...s.slice(a+1)])}}),(0,l.jsx)(N.a9,{label:"Port",value:e.port,onChange:l=>{isNaN(Number(l))||0>Number(l)||Number(l)>65535||n([...s.slice(0,a),{...e,port:Number(l)},...s.slice(a+1)])}})]})})})},a)),(0,l.jsx)(K.A,{sm:{span:10,offset:(null==s?void 0:s.length)!==0?2:0},children:(0,l.jsx)(w.A,{className:"mb-2 justify-content-md-end",children:(0,l.jsx)(u.A,{variant:"outline-success",onClick:()=>{n([...s,(0,r.v)(k.g3,{})])},children:(0,l.jsx)("i",{className:"bi bi-plus-lg"})})})})]})},M=e=>{let{value:a,onChange:s}=e,r=(0,c.useContext)(x.O);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(N.a9,{label:"Host",value:a.host,onChange:e=>{s({...a,host:e})}}),(0,l.jsx)(N.a9,{label:"Network Interface",value:a.networkInterface,onChange:e=>{s({...a,networkInterface:e})},reminds:r.map(e=>{var a;if(e.name)return{label:e.name,value:e.name,label_children:null===(a=e.addresses)||void 0===a?void 0:a.map(e=>e||"")}}).filter(e=>!!e)}),(0,l.jsx)(N.a9,{label:"Port",value:a.port,onChange:e=>{let l=Number(e);isNaN(l)||l>65535||l<0||s({...a,port:l})}}),(0,l.jsx)(X,{title:"AlternateHost",data:a.alternateHost,onChange:e=>{s({...a,alternateHost:e})}})]})},q=e=>{let{value:a,onChange:s}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(N.a9,{label:"Hostname",value:a.hostname,placeholder:"127.0.0.1",onChange:e=>{s({...a,hostname:e})}}),(0,l.jsx)(N.a9,{label:"User",value:a.user,onChange:e=>{s({...a,user:e})}}),(0,l.jsx)(N.a9,{label:"Password",value:a.password,onChange:e=>{s({...a,password:e})}}),(0,l.jsx)(N.a9,{label:"Override Port",value:a.overridePort,onChange:e=>{let l=Number(e);isNaN(l)||l>65535||l<0||s({...a,overridePort:l})}})]})},T=e=>{let{value:a,onChange:s}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(N.a9,{label:"Password",value:a.password,onChange:e=>{s({...a,password:e})}}),(0,l.jsx)(N.a9,{label:"Peer",value:a.peer,onChange:e=>{s({...a,peer:e})}})]})},_=e=>{let{value:a,onChange:s}=e;return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(N.a9,{label:"UUID",value:a.uuid,onChange:e=>{s({...a,uuid:e})}})})},V=e=>{let{value:a,onChange:s}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(N.a9,{label:"AlterId",value:a.alterId,onChange:e=>{s({...a,alterId:e})}}),(0,l.jsx)(N.a9,{label:"Security",value:a.security,placeholder:"chacha20-poly1305",onChange:e=>{s({...a,security:e})}}),(0,l.jsx)(N.a9,{label:"UUID",value:a.uuid,placeholder:"9d5031b6-4ef5-11ee-be56-0242ac120002",onChange:e=>{s({...a,uuid:e})}})]})},U=e=>{let{value:a,onChange:s}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(N.a9,{label:"Host",value:a.host,onChange:e=>{s({...a,host:e})}}),(0,l.jsx)(N.a9,{label:"Path",value:a.path,onChange:e=>{s({...a,path:e})}})]})},J=e=>{let{title:a,data:s,onChange:n}=e;return(0,l.jsxs)(m.A.Group,{as:G.A,className:"mb-3",children:[(0,l.jsx)(m.A.Label,{column:!0,sm:2,className:"nowrap",children:a}),s&&s.map((e,a)=>(0,l.jsx)(K.A,{sm:{span:10,offset:0!==a?2:0},children:(0,l.jsx)(w.A,{className:"mb-2",children:(0,l.jsx)(N.mc,{title:"Peer",onClose:()=>{n([...s.slice(0,a),...s.slice(a+1)])},children:(0,l.jsx)(z,{value:e,onChange:e=>{n([...s.slice(0,a),e,...s.slice(a+1)])}})})})},a)),(0,l.jsx)(K.A,{sm:{span:10,offset:(null==s?void 0:s.length)!==0?2:0},children:(0,l.jsx)(w.A,{className:"mb-2 justify-content-md-end",children:(0,l.jsx)(u.A,{variant:"outline-success",onClick:()=>{n([...s,(0,r.v)(k.GL,{allowedIps:["0.0.0.0/0"],endpoint:"127.0.0.1:51820",publicKey:"SHVqHEGI7k2+OQ/oWMmWY2EQObbRQjRBdDPimh0h1WY="})])},children:(0,l.jsx)("i",{className:"bi bi-plus-lg"})})})})]})},z=e=>{let{value:a,onChange:s}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(N.a9,{label:"Endpoint",value:a.endpoint,onChange:e=>{s({...a,endpoint:e})}}),(0,l.jsx)(N.a9,{label:"PublicKey",value:a.publicKey,onChange:e=>{s({...a,publicKey:e})}}),(0,l.jsx)(N.e9,{title:"AllowedIps",data:a.allowedIps,onChange:e=>{s({...a,allowedIps:e})}})]})},$=e=>{let{value:a,onChange:s}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(N.a9,{label:"SecretKey",value:a.secretKey,placeholder:"SHVqHEGI7k2+OQ/oWMmWY2EQObbRQjRBdDPimh0h1WY=",onChange:e=>{s({...a,secretKey:e})}}),(0,l.jsx)(N.a9,{label:"MTU",value:a.mtu,onChange:e=>{isNaN(Number(e))||s({...a,mtu:Number(e)})}}),(0,l.jsx)(N.a9,{label:"IdleTimeout",value:a.idleTimeout,onChange:e=>{isNaN(Number(e))||s({...a,idleTimeout:Number(e)})}}),(0,l.jsx)(N.a9,{label:"Reserved",value:btoa(String.fromCharCode.apply(null,Array.from(a.reserved))),onChange:e=>{s({...a,reserved:Uint8Array.from(atob(e),e=>e.charCodeAt(0))})}}),(0,l.jsx)(N.e9,{title:"Endpoint",data:a.endpoint,onChange:e=>{s({...a,endpoint:e})}}),(0,l.jsx)(J,{title:"Peers",data:a.peers,onChange:e=>{s({...a,peers:e})}})]})},ee=e=>{let{value:a,onChange:s}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(f.$d,{label:"TCP Encrypt",checked:a.tcpEncrypt,onChange:()=>{s({...a,tcpEncrypt:!a.tcpEncrypt})}}),(0,l.jsx)(f.$d,{label:"UDP Encrypt",checked:a.udpEncrypt,onChange:()=>{s({...a,udpEncrypt:!a.udpEncrypt})}}),(0,l.jsx)(f.$d,{label:"UdpOverStream",checked:a.udpOverStream,onChange:()=>{s({...a,udpOverStream:!a.udpOverStream})}}),(0,l.jsx)(N.a9,{label:"Password",value:a.password,onChange:e=>{s({...a,password:e})}})]})},ea=e=>{let{value:a,onChange:s,groups:r}=e,[n,t]=(0,c.useState)({value:"simple"});return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(N.a9,{label:"Name",value:a.name,onChange:e=>{s({...a,name:e})}}),(0,l.jsx)(N.a9,{label:"Group",value:a.group,onChange:e=>{s({...a,group:e})},reminds:r?r.map(e=>new N.mI({label:e,value:e})):void 0}),(0,l.jsx)(N.a9,{label:"Hash",value:a.hash,onChange:e=>{s({...a,hash:e})}}),a.protocols.map((e,r)=>{var n;return(0,l.jsx)(N.mc,{title:null!==(n=e.protocol.case)&&void 0!==n?n:"Unknown",onClose:()=>s({...a,protocols:[...a.protocols.slice(0,r),...a.protocols.slice(r+1)]}),moveUpDown:new N.fH(a.protocols,r,e=>{s({...a,protocols:e})}),children:(0,l.jsx)(es,{value:a.protocols[r],onChange:e=>{s({...a,protocols:[...a.protocols.slice(0,r),e,...a.protocols.slice(r+1)]})}})},r)}),(0,l.jsx)(A.A,{variant:"flush",children:(0,l.jsx)(A.A.Item,{children:(0,l.jsxs)(w.A,{children:[(0,l.jsx)(f.FX,{value:n.value,values:Object.keys(en),onChange:e=>t({value:e})}),(0,l.jsx)(u.A,{variant:"outline-secondary",onClick:()=>{s({...a,protocols:[...a.protocols,en[n.value]]})},children:"Add"})]})})})]})},es=e=>{let{value:a,onChange:s}=e,r=e=>s({...a,protocol:{case:a.protocol.case,value:e}}),n=a.protocol;switch(n.case){case"simple":return(0,l.jsx)(M,{value:n.value,onChange:e=>r(e)});case"direct":return(0,l.jsx)(E,{value:n.value,onChange:e=>r(e)});case"drop":return S;case"tls":return(0,l.jsx)(I,{value:n.value,onChange:e=>r(e)});case"websocket":return(0,l.jsx)(U,{value:n.value,onChange:e=>r(e)});case"shadowsocks":return(0,l.jsx)(Y,{value:n.value,onChange:e=>r(e)});case"quic":return(0,l.jsx)(Q,{value:n.value,onChange:e=>r(e)});case"vless":return(0,l.jsx)(_,{value:n.value,onChange:e=>r(e)});case"vmess":return(0,l.jsx)(V,{value:n.value,onChange:e=>r(e)});case"trojan":return(0,l.jsx)(T,{value:n.value,onChange:e=>r(e)});case"shadowsocksr":return(0,l.jsx)(D,{value:n.value,onChange:e=>r(e)});case"obfsHttp":return(0,l.jsx)(Z,{value:n.value,onChange:e=>r(e)});case"none":return W;case"socks5":return(0,l.jsx)(q,{value:n.value,onChange:e=>r(e)});case"http":return(0,l.jsx)(H,{value:n.value,onChange:e=>r(e)});case"reject":return L;case"yuubinsya":return(0,l.jsx)(ee,{value:n.value,onChange:e=>r(e)});case"grpc":return(0,l.jsx)(P,{value:n.value,onChange:e=>r(e)});case"http2":return(0,l.jsx)(O,{value:n.value,onChange:e=>r(e)});case"reality":return(0,l.jsx)(B,{value:n.value,onChange:e=>r(e)});case"wireguard":return(0,l.jsx)($,{value:n.value,onChange:e=>r(e)});case"mux":return(0,l.jsx)(R,{value:n.value,onChange:e=>r(e)});default:return el}},el=(0,l.jsx)("div",{className:"text-center my-2",style:{opacity:"0.4"},children:"Not Implement"}),er=(0,r.v)(k.Qi,{enable:!1,caCert:[new TextEncoder().encode("-----CERTIFICATE-----\n        MIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQD4MVvq8SAOzdeE\n        SUfehAij/kdTYKPfuc+5SBTNSykilsGsY1mEu4qS6Abc/8bfRM7e9+4bAkA9rSma\n        p9Rza0YWNwdYQD3j3vuFlR6ic6tTYN7estRGGFOoI5MxA8OsYDbWNnO/3jYlErtn\n        XUqDK5iABtBYNsSrLEc/Y2iISCm0zIT7Bfn3gzboggbqx5bpWjT5HmMRZmezl6EB\n        y6HjCSIgZzP2v3yOfOVcu70vKABD3X1bzaKEn86rXNra0TZkqvB9vPv1PsBrELrO\n        JxFRrAZylgeShzXgBXWjZKyj/toZ7FJLDv896sW/LuQarQufIcluisO++Xkz/EwQ\n        VuXURFENAgMBAAECggEAIuOnaPfD+qjHiNZXVsmnQExswOUHLFpdv81I9VIBQpZA\n        PAhMS3skoAGjg1omXfj5fsEKFPxkRPdMb6vzktUL6XALZYXEXX3ZTD456/rIJQSr\n        V9F6Qy9ExVBY7u05SshMtSC69Ugawuvm8cEcyiMtASRUEe6DB5AGJPxHs863JC3M\n        Dcb5nNYPGjFCsahkwz4rQq/eQQI0j+8TZlHtPFjTCgqMblk2qR/vwkfTI6Wv/rO6\n        YZ+M3xXpYc4j1qcHz5PFxIh3kZMgP/GdqLf+l5O4JaFv2aqxEmCjTHq3rAlxJeiV\n        tCT5xYCwYzZtZkZq5jPP6CruNbO+L8iyLYHgLAgmsQKBgQD+Pw5nO2FR7arAMR4I\n        K+bK2fFWfBTSkMRJrVqtbjr3LIjRGbGmqaF0HjR/8ZNxmyHBPmG35rfUw32NIAFc\n        q9nqXVgeL07CXRadYaMoVys3mukMiQSnuycA5se5uNXk/8bulaudLX0Q605GDWto\n        29W3CnWyuz1qNGRZHYZ0Duyk3QKBgQD5550WA/5Fwco2WosDqNBCetf3GZazwtKU\n        46Dk1QEXeGYrw3p/o42+nNuawqqxbKhH/OJarir8oT4amXMaf60M3tRjj/DYRLx1\n        WS9LkuU9bWSRFIpdJxC4BWi9IPCOsfbF0Cui9nD5dXCE6YwoQEXZ8OhE8+y+2fHU\n        OULeYZVB8QKBgQDYtnrad3zuzry68aL9qB4jTj4uT7mX+hm2C3O9XLYaNfWw9ku9\n        Gd4rEgwB+rKJJYhSJZA5pwmO68s63csLaNhosoQHxp9FgP9jyvO90P9feEWpj6lO\n        J3KJjC02G10GwxaYCy+q3Dk8kLW5dHrXeHrkeJ/2Zy9kNaBLbaVLi+UeaQKBgQDo\n        +GsRIxfgoBCLK019U9sSnsLGsSw02OLHuo07xvcFklBtbAa/BxIVKNXxKJlIXitj\n        MPUz5Dpe2VK0KWmMwono/bKyPnYgp7OpEkNtCLx8z4Z5WdTDkq+bXi+OYS7hWDbd\n        onuLqIMZi8ohnjfzLjfwPQ3LejqykStI1TjpZ79lgQKBgQDJAQe8Wnn2+QbWSbda\n        NFGyG+hs7SkqqZmEQl3nA5kyAeOSsGtJG9tiLxDE52eMUM1iL6wNPQMDkROp3yRg\n        7muJLMjiVeLFxXUyCXKj11W1VER5i16RsuWW3m5aGxumaXw4TJviJzT/dnwHe+x9\n        pWZqcBJfEUP6uTLSp3CmyEPcfA==\n        -----CERTIFICATE-----")],insecureSkipVerify:!1,nextProtos:["h2"],serverNames:["www.example.com"]}),en={simple:(0,r.v)(k._1,{protocol:{case:"simple",value:(0,r.v)(k.sT,{host:"",alternateHost:[],port:1080})}}),none:(0,r.v)(k._1,{protocol:{case:"none",value:(0,r.v)(k.YZ,{})}}),websocket:(0,r.v)(k._1,{protocol:{case:"websocket",value:(0,r.v)(k.BP,{host:"www.example.com",path:"/msg"})}}),quic:(0,r.v)(k._1,{protocol:{case:"quic",value:(0,r.v)(k.sn,{tls:er})}}),shadowsocks:(0,r.v)(k._1,{protocol:{case:"shadowsocks",value:(0,r.v)(k.t0,{method:"CHACHA20-IETF-POLY1305",password:"password"})}}),obfshttp:(0,r.v)(k._1,{protocol:{case:"obfsHttp",value:(0,r.v)(k.F7,{host:"www.example.com",port:"443"})}}),shadowsocksr:(0,r.v)(k._1,{protocol:{case:"shadowsocksr",value:(0,r.v)(k.hX,{method:"chacha20-ietf",obfs:"http_post",obfsparam:"#name=v",password:"password",port:"1080",protocol:"auth_aes128_sha1",protoparam:"",server:"127.0.0.1"})}}),vmess:(0,r.v)(k._1,{protocol:{case:"vmess",value:(0,r.v)(k.s2,{alterId:"0",security:"chacha20-poly1305",uuid:"9d5031b6-4ef5-11ee-be56-0242ac120002"})}}),trojan:(0,r.v)(k._1,{protocol:{case:"trojan",value:(0,r.v)(k.SD,{password:"password",peer:"peer"})}}),socks5:(0,r.v)(k._1,{protocol:{case:"socks5",value:(0,r.v)(k.AK,{hostname:"127.0.0.1:1080",password:"password",user:"username"})}}),http:(0,r.v)(k._1,{protocol:{case:"http",value:(0,r.v)(k.UM,{password:"password",user:"username"})}}),direct:(0,r.v)(k._1,{protocol:{case:"direct",value:(0,r.v)(k.bw,{})}}),yuubinsya:(0,r.v)(k._1,{protocol:{case:"yuubinsya",value:(0,r.v)(k.lA,{tcpEncrypt:!0,udpEncrypt:!0,password:"password",udpOverStream:!1})}}),tls:(0,r.v)(k._1,{protocol:{case:"tls",value:er}}),wireguard:(0,r.v)(k._1,{protocol:{case:"wireguard",value:(0,r.v)(k.g2,{endpoint:["10.0.0.2/32"],mtu:1500,idleTimeout:3,reserved:new Uint8Array([0,0,0]),secretKey:"SHVqHEGI7k2+OQ/oWMmWY2EQObbRQjRBdDPimh0h1WY=",peers:[{allowedIps:["0.0.0.0/0"],endpoint:"127.0.0.1:51820",publicKey:"SHVqHEGI7k2+OQ/oWMmWY2EQObbRQjRBdDPimh0h1WY="}]})}}),mux:(0,r.v)(k._1,{protocol:{case:"mux",value:(0,r.v)(k.gE,{concurrency:8})}}),drop:(0,r.v)(k._1,{protocol:{case:"drop",value:(0,r.v)(k.fO,{})}}),vless:(0,r.v)(k._1,{protocol:{case:"vless",value:(0,r.v)(k.X_,{uuid:"c48619fe-8f02-49e0-b9e9-edf763e17e21"})}}),grpc:(0,r.v)(k._1,{protocol:{case:"grpc",value:(0,r.v)(k.E_,{tls:er})}}),http2:(0,r.v)(k._1,{protocol:{case:"http2",value:(0,r.v)(k.ql,{concurrency:8})}}),reality:(0,r.v)(k._1,{protocol:{case:"reality",value:(0,r.v)(k.K0,{debug:!1,publicKey:"SHVqHEGI7k2+OQ/oWMmWY2EQObbRQjRBdDPimh0h1WY=",serverName:"127.0.0.1",shortId:"9d5031b6-4ef5-11ee-be56-0242ac120002"})}})},et=e=>{let{hash:a,point:s,editable:t,show:m,onHide:A,onSave:w,groups:f,onDelete:N,isNew:k}=e,E=(0,c.useContext)(g.u),[S,I]=(0,c.useState)({show:!1,data:""}),F=(0,x.R)(),{data:P,error:H,isLoading:O,isValidating:R,mutate:W}=(0,p.Ay)(""===a?void 0:"/node",(0,b.AD)(C.rH.method.get,"POST",(0,r.v)(o.g8,{value:a}),s),{shouldRetryOnError:!1,keepPreviousData:!1,revalidateOnFocus:!1});return(0,c.useEffect)(()=>{W()},[a,W]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(eo,{show:S.show,data:S.data,plaintext:!0,onHide:()=>I({...S,show:!1})}),(0,l.jsxs)(i.A,{show:!S.show&&m,scrollable:!0,"aria-labelledby":"contained-modal-title-vcenter",size:"xl",onHide:()=>{A()},centered:!0,children:[(0,l.jsx)(i.A.Header,{closeButton:!0,children:(0,l.jsx)(i.A.Title,{id:"contained-modal-title-vcenter",children:a})}),(0,l.jsx)(i.A.Body,{children:(0,l.jsx)("fieldset",{disabled:!t,children:H?(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(j.$,{statusCode:H.code,title:H.msg,raw:H.raw})}):R||O||!P?(0,l.jsx)(j.A,{}):(0,l.jsx)(x.O,{value:F,children:(0,l.jsx)(ea,{value:P,groups:f,onChange:e=>{t&&W(e,!1)}})})})}),(0,l.jsxs)(i.A.Footer,{children:[N&&(0,l.jsxs)(d.A,{onSelect:e=>{"ok"===e&&N&&(A(),N())},as:h.A,variant:"outline-danger",title:"Remove",children:[(0,l.jsx)(v.A.Item,{eventKey:"ok",children:"OK"}),(0,l.jsx)(v.A.Item,{eventKey:"cancel",children:"Cancel"})]}),!H&&!R&&!O&&P&&(0,l.jsx)(u.A,{variant:"outline-primary",onClick:()=>{I({show:!0,data:(0,n.J7)(y.Ac,P,{prettySpaces:2})})},children:"JSON"}),(0,l.jsx)(u.A,{variant:"outline-secondary",onClick:()=>{A()},children:"Close"}),(0,l.jsx)(()=>t?(0,l.jsx)(u.A,{variant:"outline-primary",disabled:R||O||H||!t,onClick:()=>{P&&(k&&(P.hash=""),(0,b.kP)(C.rH.method.save,"/node","PATCH",P).then(async e=>{let{error:a}=e;a?E.Error(a.msg):(E.Info("save successful"),w&&w())}))},children:"Save"}):(0,l.jsx)(l.Fragment,{}),{})]})]})]})},eo=e=>{let a=(0,c.useContext)(g.u),[s,r]=(0,c.useState)({data:""});return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(i.A,{show:e.show,"aria-labelledby":"contained-modal-title-vcenter",size:"xl",onHide:()=>{e.onHide()},centered:!0,children:[!e.plaintext&&(0,l.jsx)(i.A.Header,{closeButton:!0,children:(0,l.jsx)(i.A.Title,{id:"contained-modal-title-vcenter",children:"Import JSON"})}),(0,l.jsx)(i.A.Body,{children:(0,l.jsx)(m.A.Control,{as:"textarea",readOnly:e.plaintext,value:e.data?e.data:s.data,style:{height:"65vh",fontFamily:"monospace"},onChange:e=>{r({data:e.target.value})}})}),(0,l.jsxs)(i.A.Footer,{children:[(0,l.jsx)(u.A,{variant:"outline-secondary",onClick:()=>{e.onHide()},children:"Close"}),(0,l.jsx)(()=>e.onSave?(0,l.jsx)(u.A,{variant:"outline-primary",onClick:()=>{let l=(0,t.mj)(y.Ac,s.data);e.isNew&&(l.hash=""),(0,b.kP)(C.rH.method.save,"/node","PATCH",l).then(async s=>{let{error:l}=s;void 0===l?(a.Info("save successful"),void 0!==e.onSave&&e.onSave()):a.Error(l.msg)})},children:"Save"}):(0,l.jsx)(l.Fragment,{}),{})]})]})})}}}]);
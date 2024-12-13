"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[112],{7294:(e,a,s)=>{s.d(a,{R:()=>h,O:()=>d});var l=s(2115),r=s(4995),n=s(6788),t=s(4395),o=s(9297);let c=(0,n.w)("ChF0b29scy90b29scy5wcm90bxINeXVoYWlpbi50b29scyI6CgpJbnRlcmZhY2VzEiwKCmludGVyZmFjZXMYASADKAsyGC55dWhhaWluLnRvb2xzLkludGVyZmFjZSIsCglJbnRlcmZhY2USDAoEbmFtZRgBIAEoCRIRCglhZGRyZXNzZXMYAiADKAkySwoFdG9vbHMSQgoNZ2V0X2ludGVyZmFjZRIWLmdvb2dsZS5wcm90b2J1Zi5FbXB0eRoZLnl1aGFpaW4udG9vbHMuSW50ZXJmYWNlc0IvWi1naXRodWIuY29tL0FzdXRvcnVmYS95dWhhaWluL3BrZy9wcm90b3MvdG9vbHNiBnByb3RvMw",[o.t]),u=(0,t.Z)(c,0);var i=s(8927);let d=(0,l.createContext)([]);function h(){let{data:e}=(0,r.Ay)("/interfaces",(0,i.AD)(u.method.get_interface),{revalidateOnFocus:!1});return e?e.interfaces:[]}},2859:(e,a,s)=>{s.d(a,{$:()=>o});var l=s(5155),r=s(6180),n=s(6121),t=s(3667);let o=e=>{let{label:a,checked:s,onChange:o}=e;return(0,l.jsxs)(r.A.Group,{as:n.A,className:"mb-2",children:[(0,l.jsx)(r.A.Label,{column:!0,sm:2,children:a}),(0,l.jsx)(t.A,{sm:10,className:"d-flex align-items-center",children:(0,l.jsx)(r.A.Check,{className:"d-flex align-items-center",type:"switch",checked:s,onChange:e=>o(e.target.checked)})})]})}},148:(e,a,s)=>{s.d(a,{u:()=>o,y:()=>c});var l=s(5155),r=s(2115),n=s(1757),t=s(491);let o=(0,r.createContext)({Info:e=>{},Error:e=>{}}),c=e=>{let{children:a}=e,[s,c]=(0,r.useState)([]),u=(e,a)=>c(s=>[...s,{text:e,type:a}]);return(0,l.jsxs)(o.Provider,{value:{Info:e=>{console.log(e),u(e,"success")},Error:e=>{console.error(e),u(e,"danger")}},children:[(0,l.jsx)(n.A,{className:"p-3",position:"top-center",containerPosition:"fixed",style:{zIndex:999999},children:s.map((e,a)=>(0,l.jsxs)(t.A,{role:"alert","aria-live":"assertive",show:!0,bg:e.type,onClose:()=>{c(e=>[...e.slice(0,a),...e.slice(a+1)])},"aria-atomic":"true",delay:4e3,autohide:!0,animation:!0,children:[(0,l.jsxs)(t.A.Header,{children:[(0,l.jsx)("strong",{className:"me-auto",children:"Notification"}),(0,l.jsx)("small",{className:"text-muted",children:"just now"})]}),(0,l.jsx)(t.A.Body,{className:"text-center",children:e.text})]},"toast"+a))}),a]})}},1731:(e,a,s)=>{s.d(a,{E:()=>eo,y:()=>et});var l=s(5155),r=s(3577),n=s(9093),t=s(4504),o=s(1936),c=s(2115),u=s(2963),i=s(0),d=s(8143),h=s(3614),v=s(9637),m=s(6180),p=s(4995),x=s(7294),j=s(9169),b=s(8927),g=s(148),C=s(57),y=s(8003),w=s(7204),A=s(1703);let N=e=>{let{value:a,onChange:s}=e,r=(0,c.useContext)(x.O);return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(w.a9,{label:"Network Interface",value:a.networkInterface,onChange:e=>{s({...a,networkInterface:e})},reminds:r.map(e=>{if(e.name){var a;return{label:e.name,value:e.name,label_children:null===(a=e.addresses)||void 0===a?void 0:a.map(e=>e||"")}}}).filter(e=>!!e)})})},f=(0,l.jsx)("div",{className:"text-center my-2",style:{opacity:"0.4"},children:" Drop"});var k=s(2859);let I=e=>(0,l.jsx)(E,{value:e.value,onChange:e.onChange}),E=e=>{let{value:a,onChange:s,showEnabled:r}=e;return(0,l.jsxs)(l.Fragment,{children:[(void 0===r||r)&&(0,l.jsx)(k.$,{label:"TLS Enabled",checked:a.enable,onChange:()=>{s({...a,enable:!a.enable})}}),(0,l.jsx)(k.$,{label:"InsecureSkipVerify",checked:a.insecureSkipVerify,onChange:()=>{s({...a,insecureSkipVerify:!a.insecureSkipVerify})}}),(0,l.jsx)(w.e9,{title:"ServerNames",data:a.serverNames,onChange:e=>{s({...a,serverNames:e})}}),(0,l.jsx)(w.e9,{title:"NextProtos",data:a.nextProtos,onChange:e=>{s({...a,nextProtos:e})}}),(0,l.jsx)(w.n4,{title:"CaCert",textarea:!0,data:a.caCert,onChange:e=>{s({...a,caCert:e})}})]})},S=e=>{var a;let{value:s,onChange:n}=e;return(0,l.jsx)(E,{value:null!==(a=s.tls)&&void 0!==a?a:(0,r.v)(A.Qi,{}),onChange:e=>{n({...s,tls:e})}})},P=e=>{let{value:a,onChange:s}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(w.a9,{label:"User",value:a.user,onChange:e=>{s({...a,user:e})}}),(0,l.jsx)(w.a9,{label:"Password",value:a.password,onChange:e=>{s({...a,password:e})}})]})},F=e=>{let{value:a,onChange:s}=e;return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(w.a9,{label:"Concurrency",value:a.concurrency,onChange:e=>{isNaN(Number(e))||s({...a,concurrency:Number(e)})}})})},H=e=>{let{value:a,onChange:s}=e;return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(w.a9,{label:"Concurrency",value:a.concurrency,onChange:e=>{isNaN(Number(e))||s({...a,concurrency:Number(e)})}})})},O=(0,l.jsx)("div",{className:"text-center my-2",style:{opacity:"0.4"},children:"None"}),R=e=>{var a;let{value:s,onChange:n}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(w.a9,{label:"Host",value:s.host,onChange:e=>{n({...s,host:e})}}),(0,l.jsx)(E,{showEnabled:!1,value:null!==(a=s.tls)&&void 0!==a?a:(0,r.v)(A.Qi,{}),onChange:e=>{n({...s,tls:e})}})]})},W=e=>{let{value:a,onChange:s}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(k.$,{label:"Debug",checked:a.debug,onChange:()=>{s({...a,debug:!a.debug})}}),(0,l.jsx)(w.a9,{label:"PublicKey",value:a.publicKey,onChange:e=>{s({...a,publicKey:e})}}),(0,l.jsx)(w.a9,{label:"ServerName",value:a.serverName,onChange:e=>{s({...a,serverName:e})}}),(0,l.jsx)(w.a9,{label:"ShortId",value:a.shortId,onChange:e=>{s({...a,shortId:e})}})]})},Q=(0,l.jsx)("div",{className:"text-center my-2",style:{opacity:"0.4"},children:"Reject"}),B=e=>{let{value:a,onChange:s}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(w.a9,{label:"Method",value:a.method,onChange:e=>{s({...a,method:e})}}),(0,l.jsx)(w.a9,{label:"Password",value:a.password,onChange:e=>{s({...a,password:e})}})]})},Y=e=>{let{value:a,onChange:s}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(w.a9,{label:"Host",value:a.host,onChange:e=>{s({...a,host:e})}}),(0,l.jsx)(w.a9,{label:"Port",value:a.port,onChange:e=>{s({...a,port:e})}})]})},Z=e=>{let{value:a,onChange:s}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(w.a9,{label:"Server",value:a.server,onChange:e=>{s({...a,server:e})}}),(0,l.jsx)(w.a9,{label:"Port",value:a.port,onChange:e=>{s({...a,port:e})}}),(0,l.jsx)(w.a9,{label:"Method",value:a.method,placeholder:"chacha20-ietf",onChange:e=>{s({...a,method:e})}}),(0,l.jsx)(w.a9,{label:"Protocol",value:a.protocol,placeholder:"auth_aes128_sha1",onChange:e=>{s({...a,protocol:e})}}),(0,l.jsx)(w.a9,{label:"ProtocolParam",value:a.protoparam,onChange:e=>{s({...a,protoparam:e})}}),(0,l.jsx)(w.a9,{label:"Obfs",value:a.obfs,placeholder:"http_post",onChange:e=>{s({...a,obfs:e})}}),(0,l.jsx)(w.a9,{label:"ObfsParam",value:a.obfsparam,placeholder:"#name=v",onChange:e=>{s({...a,obfsparam:e})}})]})};var L=s(6121),D=s(3667);let K=e=>{let{title:a,data:s,onChange:n}=e;return(0,l.jsxs)(m.A.Group,{as:L.A,className:"mb-3 flex-grow-1 overflow-auto",children:[(0,l.jsx)(m.A.Label,{column:!0,sm:2,className:"nowrap",children:a}),s&&s.map((e,a)=>(0,l.jsx)(D.A,{sm:{span:10,offset:0!==a?2:0},children:(0,l.jsx)(y.A,{className:"mb-2",children:(0,l.jsx)(w.mc,{title:"Host",onClose:()=>{s&&n([...s.slice(0,a),...s.slice(a+1)])},children:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(w.a9,{label:"Host",value:e.host,onChange:l=>{n([...s.slice(0,a),{...e,host:l},...s.slice(a+1)])}}),(0,l.jsx)(w.a9,{label:"Port",value:e.port,onChange:l=>{isNaN(Number(l))||0>Number(l)||Number(l)>65535||n([...s.slice(0,a),{...e,port:Number(l)},...s.slice(a+1)])}})]})})})},a)),(0,l.jsx)(D.A,{sm:{span:10,offset:(null==s?void 0:s.length)!==0?2:0},children:(0,l.jsx)(y.A,{className:"mb-2 justify-content-md-end",children:(0,l.jsx)(u.A,{variant:"outline-success",onClick:()=>{n([...s,(0,r.v)(A.g3,{})])},children:(0,l.jsx)("i",{className:"bi bi-plus-lg"})})})})]})},G=e=>{let{value:a,onChange:s}=e,r=(0,c.useContext)(x.O);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(w.a9,{label:"Host",value:a.host,onChange:e=>{s({...a,host:e})}}),(0,l.jsx)(w.a9,{label:"Network Interface",value:a.networkInterface,onChange:e=>{s({...a,networkInterface:e})},reminds:r.map(e=>{if(e.name){var a;return{label:e.name,value:e.name,label_children:null===(a=e.addresses)||void 0===a?void 0:a.map(e=>e||"")}}}).filter(e=>!!e)}),(0,l.jsx)(w.a9,{label:"Port",value:a.port,onChange:e=>{let l=Number(e);isNaN(l)||l>65535||l<0||s({...a,port:l})}}),(0,l.jsx)(K,{title:"AlternateHost",data:a.alternateHost,onChange:e=>{s({...a,alternateHost:e})}})]})},M=e=>{let{value:a,onChange:s}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(w.a9,{label:"Hostname",value:a.hostname,placeholder:"127.0.0.1",onChange:e=>{s({...a,hostname:e})}}),(0,l.jsx)(w.a9,{label:"User",value:a.user,onChange:e=>{s({...a,user:e})}}),(0,l.jsx)(w.a9,{label:"Password",value:a.password,onChange:e=>{s({...a,password:e})}}),(0,l.jsx)(w.a9,{label:"Override Port",value:a.overridePort,onChange:e=>{let l=Number(e);isNaN(l)||l>65535||l<0||s({...a,overridePort:l})}})]})},X=e=>{let{value:a,onChange:s}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(w.a9,{label:"Password",value:a.password,onChange:e=>{s({...a,password:e})}}),(0,l.jsx)(w.a9,{label:"Peer",value:a.peer,onChange:e=>{s({...a,peer:e})}})]})},q=e=>{let{value:a,onChange:s}=e;return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(w.a9,{label:"UUID",value:a.uuid,onChange:e=>{s({...a,uuid:e})}})})},T=e=>{let{value:a,onChange:s}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(w.a9,{label:"AlterId",value:a.alterId,onChange:e=>{s({...a,alterId:e})}}),(0,l.jsx)(w.a9,{label:"Security",value:a.security,placeholder:"chacha20-poly1305",onChange:e=>{s({...a,security:e})}}),(0,l.jsx)(w.a9,{label:"UUID",value:a.uuid,placeholder:"9d5031b6-4ef5-11ee-be56-0242ac120002",onChange:e=>{s({...a,uuid:e})}})]})},_=e=>{let{value:a,onChange:s}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(w.a9,{label:"Host",value:a.host,onChange:e=>{s({...a,host:e})}}),(0,l.jsx)(w.a9,{label:"Path",value:a.path,onChange:e=>{s({...a,path:e})}})]})},V=e=>{let{title:a,data:s,onChange:n}=e;return(0,l.jsxs)(m.A.Group,{as:L.A,className:"mb-3",children:[(0,l.jsx)(m.A.Label,{column:!0,sm:2,className:"nowrap",children:a}),s&&s.map((e,a)=>(0,l.jsx)(D.A,{sm:{span:10,offset:0!==a?2:0},children:(0,l.jsx)(y.A,{className:"mb-2",children:(0,l.jsx)(w.mc,{title:"Peer",onClose:()=>{n([...s.slice(0,a),...s.slice(a+1)])},children:(0,l.jsx)(U,{value:e,onChange:e=>{n([...s.slice(0,a),e,...s.slice(a+1)])}})})})},a)),(0,l.jsx)(D.A,{sm:{span:10,offset:(null==s?void 0:s.length)!==0?2:0},children:(0,l.jsx)(y.A,{className:"mb-2 justify-content-md-end",children:(0,l.jsx)(u.A,{variant:"outline-success",onClick:()=>{n([...s,(0,r.v)(A.GL,{allowedIps:["0.0.0.0/0"],endpoint:"127.0.0.1:51820",publicKey:"SHVqHEGI7k2+OQ/oWMmWY2EQObbRQjRBdDPimh0h1WY="})])},children:(0,l.jsx)("i",{className:"bi bi-plus-lg"})})})})]})},U=e=>{let{value:a,onChange:s}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(w.a9,{label:"Endpoint",value:a.endpoint,onChange:e=>{s({...a,endpoint:e})}}),(0,l.jsx)(w.a9,{label:"PublicKey",value:a.publicKey,onChange:e=>{s({...a,publicKey:e})}}),(0,l.jsx)(w.e9,{title:"AllowedIps",data:a.allowedIps,onChange:e=>{s({...a,allowedIps:e})}})]})},J=e=>{let{value:a,onChange:s}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(w.a9,{label:"SecretKey",value:a.secretKey,placeholder:"SHVqHEGI7k2+OQ/oWMmWY2EQObbRQjRBdDPimh0h1WY=",onChange:e=>{s({...a,secretKey:e})}}),(0,l.jsx)(w.a9,{label:"MTU",value:a.mtu,onChange:e=>{isNaN(Number(e))||s({...a,mtu:Number(e)})}}),(0,l.jsx)(w.a9,{label:"IdleTimeout",value:a.idleTimeout,onChange:e=>{isNaN(Number(e))||s({...a,idleTimeout:Number(e)})}}),(0,l.jsx)(w.a9,{label:"Reserved",value:btoa(String.fromCharCode.apply(null,a.reserved)),onChange:e=>{s({...a,reserved:Uint8Array.from(atob(e),e=>e.charCodeAt(0))})}}),(0,l.jsx)(w.e9,{title:"Endpoint",data:a.endpoint,onChange:e=>{s({...a,endpoint:e})}}),(0,l.jsx)(V,{title:"Peers",data:a.peers,onChange:e=>{s({...a,peers:e})}})]})},z=e=>{let{value:a,onChange:s}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(k.$,{label:"TCP Encrypt",checked:a.tcpEncrypt,onChange:()=>{s({...a,tcpEncrypt:!a.tcpEncrypt})}}),(0,l.jsx)(k.$,{label:"UDP Encrypt",checked:a.udpEncrypt,onChange:()=>{s({...a,udpEncrypt:!a.udpEncrypt})}}),(0,l.jsx)(k.$,{label:"UdpOverStream",checked:a.udpOverStream,onChange:()=>{s({...a,udpOverStream:!a.udpOverStream})}}),(0,l.jsx)(w.a9,{label:"Password",value:a.password,onChange:e=>{s({...a,password:e})}})]})},$=e=>{let{value:a,onChange:s,groups:r}=e,[n,t]=(0,c.useState)({value:"simple"});return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(w.a9,{label:"Name",value:a.name,onChange:e=>{s({...a,name:e})}}),(0,l.jsx)(w.a9,{label:"Group",value:a.group,onChange:e=>{s({...a,group:e})},reminds:r?r.map(e=>new w.mI({label:e,value:e})):void 0}),(0,l.jsx)(w.a9,{label:"Hash",value:a.hash,onChange:e=>{s({...a,hash:e})}}),a.protocols.map((e,r)=>{var n;return(0,l.jsx)(w.mc,{title:null!==(n=e.protocol.case)&&void 0!==n?n:"Unknown",onClose:()=>s({...a,protocols:[...a.protocols.slice(0,r),...a.protocols.slice(r+1)]}),moveUpDown:new w.fH(a.protocols,r,e=>{s({...a,protocols:e})}),children:(0,l.jsx)(ee,{value:a.protocols[r],onChange:e=>{s({...a,protocols:[...a.protocols.slice(0,r),e,...a.protocols.slice(r+1)]})}})},r)}),(0,l.jsx)(C.A,{variant:"flush",children:(0,l.jsx)(C.A.Item,{children:(0,l.jsxs)(y.A,{children:[(0,l.jsx)(m.A.Select,{value:n.value,onChange:e=>{t({value:e.target.value})},children:Object.keys(el).map(e=>(0,l.jsx)("option",{value:e,children:e},e))}),(0,l.jsx)(u.A,{variant:"outline-secondary",onClick:()=>{console.log("click adddd"),s({...a,protocols:[...a.protocols,el[n.value]]})},children:"Add"})]})})})]})},ee=e=>{let{value:a,onChange:s}=e,r=e=>s({...a,protocol:{case:a.protocol.case,value:e}}),n=a.protocol;switch(n.case){case"simple":return(0,l.jsx)(G,{value:n.value,onChange:e=>r(e)});case"direct":return(0,l.jsx)(N,{value:n.value,onChange:e=>r(e)});case"drop":return f;case"tls":return(0,l.jsx)(I,{value:n.value,onChange:e=>r(e)});case"websocket":return(0,l.jsx)(_,{value:n.value,onChange:e=>r(e)});case"shadowsocks":return(0,l.jsx)(B,{value:n.value,onChange:e=>r(e)});case"quic":return(0,l.jsx)(R,{value:n.value,onChange:e=>r(e)});case"vless":return(0,l.jsx)(q,{value:n.value,onChange:e=>r(e)});case"vmess":return(0,l.jsx)(T,{value:n.value,onChange:e=>r(e)});case"trojan":return(0,l.jsx)(X,{value:n.value,onChange:e=>r(e)});case"shadowsocksr":return(0,l.jsx)(Z,{value:n.value,onChange:e=>r(e)});case"obfsHttp":return(0,l.jsx)(Y,{value:n.value,onChange:e=>r(e)});case"none":return O;case"socks5":return(0,l.jsx)(M,{value:n.value,onChange:e=>r(e)});case"http":return(0,l.jsx)(P,{value:n.value,onChange:e=>r(e)});case"reject":return Q;case"yuubinsya":return(0,l.jsx)(z,{value:n.value,onChange:e=>r(e)});case"grpc":return(0,l.jsx)(S,{value:n.value,onChange:e=>r(e)});case"http2":return(0,l.jsx)(F,{value:n.value,onChange:e=>r(e)});case"reality":return(0,l.jsx)(W,{value:n.value,onChange:e=>r(e)});case"wireguard":return(0,l.jsx)(J,{value:n.value,onChange:e=>r(e)});case"mux":return(0,l.jsx)(H,{value:n.value,onChange:e=>r(e)});default:return ea}},ea=(0,l.jsx)("div",{className:"text-center my-2",style:{opacity:"0.4"},children:"Not Implement"}),es=(0,r.v)(A.Qi,{enable:!1,caCert:[new TextEncoder().encode("-----CERTIFICATE-----\n        MIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQD4MVvq8SAOzdeE\n        SUfehAij/kdTYKPfuc+5SBTNSykilsGsY1mEu4qS6Abc/8bfRM7e9+4bAkA9rSma\n        p9Rza0YWNwdYQD3j3vuFlR6ic6tTYN7estRGGFOoI5MxA8OsYDbWNnO/3jYlErtn\n        XUqDK5iABtBYNsSrLEc/Y2iISCm0zIT7Bfn3gzboggbqx5bpWjT5HmMRZmezl6EB\n        y6HjCSIgZzP2v3yOfOVcu70vKABD3X1bzaKEn86rXNra0TZkqvB9vPv1PsBrELrO\n        JxFRrAZylgeShzXgBXWjZKyj/toZ7FJLDv896sW/LuQarQufIcluisO++Xkz/EwQ\n        VuXURFENAgMBAAECggEAIuOnaPfD+qjHiNZXVsmnQExswOUHLFpdv81I9VIBQpZA\n        PAhMS3skoAGjg1omXfj5fsEKFPxkRPdMb6vzktUL6XALZYXEXX3ZTD456/rIJQSr\n        V9F6Qy9ExVBY7u05SshMtSC69Ugawuvm8cEcyiMtASRUEe6DB5AGJPxHs863JC3M\n        Dcb5nNYPGjFCsahkwz4rQq/eQQI0j+8TZlHtPFjTCgqMblk2qR/vwkfTI6Wv/rO6\n        YZ+M3xXpYc4j1qcHz5PFxIh3kZMgP/GdqLf+l5O4JaFv2aqxEmCjTHq3rAlxJeiV\n        tCT5xYCwYzZtZkZq5jPP6CruNbO+L8iyLYHgLAgmsQKBgQD+Pw5nO2FR7arAMR4I\n        K+bK2fFWfBTSkMRJrVqtbjr3LIjRGbGmqaF0HjR/8ZNxmyHBPmG35rfUw32NIAFc\n        q9nqXVgeL07CXRadYaMoVys3mukMiQSnuycA5se5uNXk/8bulaudLX0Q605GDWto\n        29W3CnWyuz1qNGRZHYZ0Duyk3QKBgQD5550WA/5Fwco2WosDqNBCetf3GZazwtKU\n        46Dk1QEXeGYrw3p/o42+nNuawqqxbKhH/OJarir8oT4amXMaf60M3tRjj/DYRLx1\n        WS9LkuU9bWSRFIpdJxC4BWi9IPCOsfbF0Cui9nD5dXCE6YwoQEXZ8OhE8+y+2fHU\n        OULeYZVB8QKBgQDYtnrad3zuzry68aL9qB4jTj4uT7mX+hm2C3O9XLYaNfWw9ku9\n        Gd4rEgwB+rKJJYhSJZA5pwmO68s63csLaNhosoQHxp9FgP9jyvO90P9feEWpj6lO\n        J3KJjC02G10GwxaYCy+q3Dk8kLW5dHrXeHrkeJ/2Zy9kNaBLbaVLi+UeaQKBgQDo\n        +GsRIxfgoBCLK019U9sSnsLGsSw02OLHuo07xvcFklBtbAa/BxIVKNXxKJlIXitj\n        MPUz5Dpe2VK0KWmMwono/bKyPnYgp7OpEkNtCLx8z4Z5WdTDkq+bXi+OYS7hWDbd\n        onuLqIMZi8ohnjfzLjfwPQ3LejqykStI1TjpZ79lgQKBgQDJAQe8Wnn2+QbWSbda\n        NFGyG+hs7SkqqZmEQl3nA5kyAeOSsGtJG9tiLxDE52eMUM1iL6wNPQMDkROp3yRg\n        7muJLMjiVeLFxXUyCXKj11W1VER5i16RsuWW3m5aGxumaXw4TJviJzT/dnwHe+x9\n        pWZqcBJfEUP6uTLSp3CmyEPcfA==\n        -----CERTIFICATE-----")],insecureSkipVerify:!1,nextProtos:["h2"],serverNames:["www.example.com"]}),el={simple:(0,r.v)(A._1,{protocol:{case:"simple",value:(0,r.v)(A.sT,{host:"",alternateHost:[],port:1080})}}),none:(0,r.v)(A._1,{protocol:{case:"none",value:(0,r.v)(A.YZ,{})}}),websocket:(0,r.v)(A._1,{protocol:{case:"websocket",value:(0,r.v)(A.BP,{host:"www.example.com",path:"/msg"})}}),quic:(0,r.v)(A._1,{protocol:{case:"quic",value:(0,r.v)(A.sn,{tls:es})}}),shadowsocks:(0,r.v)(A._1,{protocol:{case:"shadowsocks",value:(0,r.v)(A.t0,{method:"CHACHA20-IETF-POLY1305",password:"password"})}}),obfshttp:(0,r.v)(A._1,{protocol:{case:"obfsHttp",value:(0,r.v)(A.F7,{host:"www.example.com",port:"443"})}}),shadowsocksr:(0,r.v)(A._1,{protocol:{case:"shadowsocksr",value:(0,r.v)(A.hX,{method:"chacha20-ietf",obfs:"http_post",obfsparam:"#name=v",password:"password",port:"1080",protocol:"auth_aes128_sha1",protoparam:"",server:"127.0.0.1"})}}),vmess:(0,r.v)(A._1,{protocol:{case:"vmess",value:(0,r.v)(A.s2,{alterId:"0",security:"chacha20-poly1305",uuid:"9d5031b6-4ef5-11ee-be56-0242ac120002"})}}),trojan:(0,r.v)(A._1,{protocol:{case:"trojan",value:(0,r.v)(A.SD,{password:"password",peer:"peer"})}}),socks5:(0,r.v)(A._1,{protocol:{case:"socks5",value:(0,r.v)(A.AK,{hostname:"127.0.0.1:1080",password:"password",user:"username"})}}),http:(0,r.v)(A._1,{protocol:{case:"http",value:(0,r.v)(A.UM,{password:"password",user:"username"})}}),direct:(0,r.v)(A._1,{protocol:{case:"direct",value:(0,r.v)(A.bw,{})}}),yuubinsya:(0,r.v)(A._1,{protocol:{case:"yuubinsya",value:(0,r.v)(A.lA,{tcpEncrypt:!0,udpEncrypt:!0,password:"password",udpOverStream:!1})}}),tls:(0,r.v)(A._1,{protocol:{case:"tls",value:es}}),wireguard:(0,r.v)(A._1,{protocol:{case:"wireguard",value:(0,r.v)(A.g2,{endpoint:["10.0.0.2/32"],mtu:1500,idleTimeout:3,reserved:new Uint8Array([0,0,0]),secretKey:"SHVqHEGI7k2+OQ/oWMmWY2EQObbRQjRBdDPimh0h1WY=",peers:[{allowedIps:["0.0.0.0/0"],endpoint:"127.0.0.1:51820",publicKey:"SHVqHEGI7k2+OQ/oWMmWY2EQObbRQjRBdDPimh0h1WY="}]})}}),mux:(0,r.v)(A._1,{protocol:{case:"mux",value:(0,r.v)(A.gE,{concurrency:8})}}),drop:(0,r.v)(A._1,{protocol:{case:"drop",value:(0,r.v)(A.fO,{})}}),vless:(0,r.v)(A._1,{protocol:{case:"vless",value:(0,r.v)(A.X_,{uuid:"c48619fe-8f02-49e0-b9e9-edf763e17e21"})}}),grpc:(0,r.v)(A._1,{protocol:{case:"grpc",value:(0,r.v)(A.E_,{tls:es})}}),http2:(0,r.v)(A._1,{protocol:{case:"http2",value:(0,r.v)(A.ql,{concurrency:8})}}),reality:(0,r.v)(A._1,{protocol:{case:"reality",value:(0,r.v)(A.K0,{debug:!1,publicKey:"SHVqHEGI7k2+OQ/oWMmWY2EQObbRQjRBdDPimh0h1WY=",serverName:"127.0.0.1",shortId:"9d5031b6-4ef5-11ee-be56-0242ac120002"})}})};var er=s(9969),en=s(2049);let et=e=>{let{hash:a,point:s,editable:t,show:m,onHide:C,onSave:y,groups:w,onDelete:A,isNew:N}=e,f=(0,c.useContext)(g.u),[k,I]=(0,c.useState)({show:!1,data:""}),E=(0,x.R)(),{data:S,error:P,isLoading:F,isValidating:H,mutate:O}=(0,p.Ay)(""===a?void 0:"/node",(0,b.AD)(er.rH.method.get,"POST",(0,r.v)(o.g8,{value:a}),s),{shouldRetryOnError:!1,keepPreviousData:!1,revalidateOnFocus:!1});return(0,c.useEffect)(()=>{O()},[a]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(eo,{show:k.show,data:k.data,plaintext:!0,onHide:()=>I({...k,show:!1})}),(0,l.jsxs)(i.A,{show:!k.show&&m,scrollable:!0,"aria-labelledby":"contained-modal-title-vcenter",size:"xl",onHide:()=>{C()},centered:!0,children:[(0,l.jsx)(i.A.Header,{closeButton:!0,children:(0,l.jsx)(i.A.Title,{id:"contained-modal-title-vcenter",children:a})}),(0,l.jsx)(i.A.Body,{children:(0,l.jsx)("fieldset",{disabled:!t,children:P?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("h4",{className:"text-center my-2",children:[P.code," - ",P.msg]}),(0,l.jsx)("pre",{className:"text-center my-2 text-danger lead",children:P.raw})]}):H||F||!S?(0,l.jsx)(j.A,{}):(0,l.jsx)(x.O,{value:E,children:(0,l.jsx)($,{value:S,groups:w,onChange:e=>{t&&O(e,!1)}})})})}),(0,l.jsxs)(i.A.Footer,{children:[A&&(0,l.jsxs)(d.A,{onSelect:e=>{"ok"===e&&A&&(C(),A())},as:h.A,variant:"outline-danger",title:"Remove",children:[(0,l.jsx)(v.A.Item,{eventKey:"ok",children:"OK"}),(0,l.jsx)(v.A.Item,{eventKey:"cancel",children:"Cancel"})]}),!P&&!H&&!F&&S&&(0,l.jsx)(u.A,{variant:"outline-primary",onClick:()=>{I({show:!0,data:(0,n.J7)(en.Ac,S,{prettySpaces:2})})},children:"JSON"}),(0,l.jsx)(u.A,{variant:"outline-secondary",onClick:()=>{C()},children:"Close"}),(0,l.jsx)(()=>t?(0,l.jsx)(u.A,{variant:"outline-primary",disabled:H||F||P||!t,onClick:()=>{S&&(N&&(S.hash=""),(0,b.kP)(er.rH.method.save,"/node","PATCH",S).then(async e=>{let{error:a}=e;a?f.Error(a.msg):(f.Info("save successful"),y&&y())}))},children:"Save"}):(0,l.jsx)(l.Fragment,{}),{})]})]})]})},eo=e=>{let a=(0,c.useContext)(g.u),[s,r]=(0,c.useState)({data:""});return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(i.A,{show:e.show,"aria-labelledby":"contained-modal-title-vcenter",size:"xl",onHide:()=>{e.onHide()},centered:!0,children:[!e.plaintext&&(0,l.jsx)(i.A.Header,{closeButton:!0,children:(0,l.jsx)(i.A.Title,{id:"contained-modal-title-vcenter",children:"Import JSON"})}),(0,l.jsx)(i.A.Body,{children:(0,l.jsx)(m.A.Control,{as:"textarea",readOnly:e.plaintext,value:e.data?e.data:s.data,style:{height:"65vh",fontFamily:"monospace"},onChange:e=>{r({data:e.target.value})}})}),(0,l.jsxs)(i.A.Footer,{children:[(0,l.jsx)(u.A,{variant:"outline-secondary",onClick:()=>{e.onHide()},children:"Close"}),(0,l.jsx)(()=>e.onSave?(0,l.jsx)(u.A,{variant:"outline-primary",onClick:()=>{let l=(0,t.mj)(en.Ac,s.data);e.isNew&&(l.hash=""),(0,b.kP)(er.rH.method.save,"/node","PATCH",l).then(async s=>{let{error:l}=s;void 0===l?(a.Info("save successful"),void 0!==e.onSave&&e.onSave()):a.Error(l.msg)})},children:"Save"}):(0,l.jsx)(l.Fragment,{}),{})]})]})})}}}]);
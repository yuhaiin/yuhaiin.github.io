"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[778],{7294:(e,a,s)=>{s.d(a,{R:()=>h,O:()=>d});var l=s(2115),r=s(4995),n=s(6788),t=s(4395),o=s(9297);let c=(0,n.w)("ChF0b29scy90b29scy5wcm90bxINeXVoYWlpbi50b29scyI6CgpJbnRlcmZhY2VzEiwKCmludGVyZmFjZXMYASADKAsyGC55dWhhaWluLnRvb2xzLkludGVyZmFjZSIsCglJbnRlcmZhY2USDAoEbmFtZRgBIAEoCRIRCglhZGRyZXNzZXMYAiADKAkySwoFdG9vbHMSQgoNZ2V0X2ludGVyZmFjZRIWLmdvb2dsZS5wcm90b2J1Zi5FbXB0eRoZLnl1aGFpaW4udG9vbHMuSW50ZXJmYWNlc0IvWi1naXRodWIuY29tL0FzdXRvcnVmYS95dWhhaWluL3BrZy9wcm90b3MvdG9vbHNiBnByb3RvMw",[o.t]),u=(0,t.Z)(c,0);var i=s(8927);let d=(0,l.createContext)([]);function h(){let{data:e}=(0,r.Ay)("/interfaces",(0,i.AD)(u.method.get_interface),{revalidateOnFocus:!1});return e?e.interfaces:[]}},2859:(e,a,s)=>{s.d(a,{$:()=>o});var l=s(5155),r=s(6180),n=s(6121),t=s(3667);let o=e=>{let{label:a,checked:s,onChange:o}=e;return(0,l.jsxs)(r.A.Group,{as:n.A,className:"mb-2",children:[(0,l.jsx)(r.A.Label,{column:!0,sm:2,children:a}),(0,l.jsx)(t.A,{sm:10,className:"d-flex align-items-center",children:(0,l.jsx)(r.A.Check,{className:"d-flex align-items-center",type:"switch",checked:s,onChange:e=>o(e.target.checked)})})]})}},148:(e,a,s)=>{s.d(a,{u:()=>o,y:()=>c});var l=s(5155),r=s(2115),n=s(1757),t=s(491);let o=(0,r.createContext)({Info:e=>{},Error:e=>{}}),c=e=>{let{children:a}=e,[s,c]=(0,r.useState)([]),u=(e,a)=>c(s=>[...s,{text:e,type:a}]);return(0,l.jsxs)(o.Provider,{value:{Info:e=>{console.log(e),u(e,"success")},Error:e=>{console.error(e),u(e,"danger")}},children:[(0,l.jsx)(n.A,{className:"p-3",position:"top-center",containerPosition:"fixed",style:{zIndex:999999},children:s.map((e,a)=>(0,l.jsxs)(t.A,{role:"alert","aria-live":"assertive",show:!0,bg:e.type,onClose:()=>{c(e=>[...e.slice(0,a),...e.slice(a+1)])},"aria-atomic":"true",delay:4e3,autohide:!0,animation:!0,children:[(0,l.jsxs)(t.A.Header,{children:[(0,l.jsx)("strong",{className:"me-auto",children:"Notification"}),(0,l.jsx)("small",{className:"text-muted",children:"just now"})]}),(0,l.jsx)(t.A.Body,{className:"text-center",children:e.text})]},"toast"+a))}),a]})}},4778:(e,a,s)=>{s.d(a,{E:()=>eo,y:()=>et});var l=s(5155),r=s(3577),n=s(9093),t=s(4504),o=s(1936),c=s(2115),u=s(2963),i=s(0),d=s(8143),h=s(3614),v=s(9637),m=s(6180),p=s(4995),x=s(7294),j=s(9169),b=s(8927),g=s(148),C=s(9969),y=s(2049),w=s(57),A=s(8003),N=s(7204),f=s(1703);let k=e=>{let{value:a,onChange:s}=e,r=(0,c.useContext)(x.O);return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(N.a9,{label:"Network Interface",value:a.networkInterface,onChange:e=>{s({...a,networkInterface:e})},reminds:r.map(e=>{if(e.name){var a;return{label:e.name,value:e.name,label_children:null===(a=e.addresses)||void 0===a?void 0:a.map(e=>e||"")}}}).filter(e=>!!e)})})},I=(0,l.jsx)("div",{className:"text-center my-2",style:{opacity:"0.4"},children:" Drop"});var E=s(2859);let S=e=>(0,l.jsx)(P,{value:e.value,onChange:e.onChange}),P=e=>{let{value:a,onChange:s,showEnabled:r}=e;return(0,l.jsxs)(l.Fragment,{children:[(void 0===r||r)&&(0,l.jsx)(E.$,{label:"TLS Enabled",checked:a.enable,onChange:()=>{s({...a,enable:!a.enable})}}),(0,l.jsx)(E.$,{label:"InsecureSkipVerify",checked:a.insecureSkipVerify,onChange:()=>{s({...a,insecureSkipVerify:!a.insecureSkipVerify})}}),(0,l.jsx)(N.e9,{title:"ServerNames",data:a.serverNames,onChange:e=>{s({...a,serverNames:e})}}),(0,l.jsx)(N.e9,{title:"NextProtos",data:a.nextProtos,onChange:e=>{s({...a,nextProtos:e})}}),(0,l.jsx)(N.n4,{title:"CaCert",textarea:!0,data:a.caCert,onChange:e=>{s({...a,caCert:e})}})]})},F=e=>{var a;let{value:s,onChange:n}=e;return(0,l.jsx)(P,{value:null!==(a=s.tls)&&void 0!==a?a:(0,r.v)(f.Qi,{}),onChange:e=>{n({...s,tls:e})}})},H=e=>{let{value:a,onChange:s}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(N.a9,{label:"User",value:a.user,onChange:e=>{s({...a,user:e})}}),(0,l.jsx)(N.a9,{label:"Password",value:a.password,onChange:e=>{s({...a,password:e})}})]})},O=e=>{let{value:a,onChange:s}=e;return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(N.a9,{label:"Concurrency",value:a.concurrency,onChange:e=>{isNaN(Number(e))||s({...a,concurrency:Number(e)})}})})},R=e=>{let{value:a,onChange:s}=e;return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(N.a9,{label:"Concurrency",value:a.concurrency,onChange:e=>{isNaN(Number(e))||s({...a,concurrency:Number(e)})}})})},W=(0,l.jsx)("div",{className:"text-center my-2",style:{opacity:"0.4"},children:"None"}),Q=e=>{var a;let{value:s,onChange:n}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(N.a9,{label:"Host",value:s.host,onChange:e=>{n({...s,host:e})}}),(0,l.jsx)(P,{showEnabled:!1,value:null!==(a=s.tls)&&void 0!==a?a:(0,r.v)(f.Qi,{}),onChange:e=>{n({...s,tls:e})}})]})},B=e=>{let{value:a,onChange:s}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(E.$,{label:"Debug",checked:a.debug,onChange:()=>{s({...a,debug:!a.debug})}}),(0,l.jsx)(N.a9,{label:"PublicKey",value:a.publicKey,onChange:e=>{s({...a,publicKey:e})}}),(0,l.jsx)(N.a9,{label:"ServerName",value:a.serverName,onChange:e=>{s({...a,serverName:e})}}),(0,l.jsx)(N.a9,{label:"ShortId",value:a.shortId,onChange:e=>{s({...a,shortId:e})}})]})},Y=(0,l.jsx)("div",{className:"text-center my-2",style:{opacity:"0.4"},children:"Reject"}),Z=e=>{let{value:a,onChange:s}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(N.a9,{label:"Method",value:a.method,onChange:e=>{s({...a,method:e})}}),(0,l.jsx)(N.a9,{label:"Password",value:a.password,onChange:e=>{s({...a,password:e})}})]})},L=e=>{let{value:a,onChange:s}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(N.a9,{label:"Host",value:a.host,onChange:e=>{s({...a,host:e})}}),(0,l.jsx)(N.a9,{label:"Port",value:a.port,onChange:e=>{s({...a,port:e})}})]})},D=e=>{let{value:a,onChange:s}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(N.a9,{label:"Server",value:a.server,onChange:e=>{s({...a,server:e})}}),(0,l.jsx)(N.a9,{label:"Port",value:a.port,onChange:e=>{s({...a,port:e})}}),(0,l.jsx)(N.a9,{label:"Method",value:a.method,placeholder:"chacha20-ietf",onChange:e=>{s({...a,method:e})}}),(0,l.jsx)(N.a9,{label:"Protocol",value:a.protocol,placeholder:"auth_aes128_sha1",onChange:e=>{s({...a,protocol:e})}}),(0,l.jsx)(N.a9,{label:"ProtocolParam",value:a.protoparam,onChange:e=>{s({...a,protoparam:e})}}),(0,l.jsx)(N.a9,{label:"Obfs",value:a.obfs,placeholder:"http_post",onChange:e=>{s({...a,obfs:e})}}),(0,l.jsx)(N.a9,{label:"ObfsParam",value:a.obfsparam,placeholder:"#name=v",onChange:e=>{s({...a,obfsparam:e})}})]})};var K=s(6121),G=s(3667);let M=e=>{let{title:a,data:s,onChange:n}=e;return(0,l.jsxs)(m.A.Group,{as:K.A,className:"mb-3 flex-grow-1 overflow-auto",children:[(0,l.jsx)(m.A.Label,{column:!0,sm:2,className:"nowrap",children:a}),s&&s.map((e,a)=>(0,l.jsx)(G.A,{sm:{span:10,offset:0!==a?2:0},children:(0,l.jsx)(A.A,{className:"mb-2",children:(0,l.jsx)(N.mc,{title:"Host",onClose:()=>{s&&n([...s.slice(0,a),...s.slice(a+1)])},children:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(N.a9,{label:"Host",value:e.host,onChange:l=>{n([...s.slice(0,a),{...e,host:l},...s.slice(a+1)])}}),(0,l.jsx)(N.a9,{label:"Port",value:e.port,onChange:l=>{isNaN(Number(l))||0>Number(l)||Number(l)>65535||n([...s.slice(0,a),{...e,port:Number(l)},...s.slice(a+1)])}})]})})})},a)),(0,l.jsx)(G.A,{sm:{span:10,offset:(null==s?void 0:s.length)!==0?2:0},children:(0,l.jsx)(A.A,{className:"mb-2 justify-content-md-end",children:(0,l.jsx)(u.A,{variant:"outline-success",onClick:()=>{n([...s,(0,r.v)(f.g3,{})])},children:(0,l.jsx)("i",{className:"bi bi-plus-lg"})})})})]})},X=e=>{let{value:a,onChange:s}=e,r=(0,c.useContext)(x.O);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(N.a9,{label:"Host",value:a.host,onChange:e=>{s({...a,host:e})}}),(0,l.jsx)(N.a9,{label:"Network Interface",value:a.networkInterface,onChange:e=>{s({...a,networkInterface:e})},reminds:r.map(e=>{if(e.name){var a;return{label:e.name,value:e.name,label_children:null===(a=e.addresses)||void 0===a?void 0:a.map(e=>e||"")}}}).filter(e=>!!e)}),(0,l.jsx)(N.a9,{label:"Port",value:a.port,onChange:e=>{let l=Number(e);isNaN(l)||l>65535||l<0||s({...a,port:l})}}),(0,l.jsx)(M,{title:"AlternateHost",data:a.alternateHost,onChange:e=>{s({...a,alternateHost:e})}})]})},q=e=>{let{value:a,onChange:s}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(N.a9,{label:"Hostname",value:a.hostname,placeholder:"127.0.0.1",onChange:e=>{s({...a,hostname:e})}}),(0,l.jsx)(N.a9,{label:"User",value:a.user,onChange:e=>{s({...a,user:e})}}),(0,l.jsx)(N.a9,{label:"Password",value:a.password,onChange:e=>{s({...a,password:e})}}),(0,l.jsx)(N.a9,{label:"Override Port",value:a.overridePort,onChange:e=>{let l=Number(e);isNaN(l)||l>65535||l<0||s({...a,overridePort:l})}})]})},T=e=>{let{value:a,onChange:s}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(N.a9,{label:"Password",value:a.password,onChange:e=>{s({...a,password:e})}}),(0,l.jsx)(N.a9,{label:"Peer",value:a.peer,onChange:e=>{s({...a,peer:e})}})]})},_=e=>{let{value:a,onChange:s}=e;return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(N.a9,{label:"UUID",value:a.uuid,onChange:e=>{s({...a,uuid:e})}})})},V=e=>{let{value:a,onChange:s}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(N.a9,{label:"AlterId",value:a.alterId,onChange:e=>{s({...a,alterId:e})}}),(0,l.jsx)(N.a9,{label:"Security",value:a.security,placeholder:"chacha20-poly1305",onChange:e=>{s({...a,security:e})}}),(0,l.jsx)(N.a9,{label:"UUID",value:a.uuid,placeholder:"9d5031b6-4ef5-11ee-be56-0242ac120002",onChange:e=>{s({...a,uuid:e})}})]})},U=e=>{let{value:a,onChange:s}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(N.a9,{label:"Host",value:a.host,onChange:e=>{s({...a,host:e})}}),(0,l.jsx)(N.a9,{label:"Path",value:a.path,onChange:e=>{s({...a,path:e})}})]})},J=e=>{let{title:a,data:s,onChange:n}=e;return(0,l.jsxs)(m.A.Group,{as:K.A,className:"mb-3",children:[(0,l.jsx)(m.A.Label,{column:!0,sm:2,className:"nowrap",children:a}),s&&s.map((e,a)=>(0,l.jsx)(G.A,{sm:{span:10,offset:0!==a?2:0},children:(0,l.jsx)(A.A,{className:"mb-2",children:(0,l.jsx)(N.mc,{title:"Peer",onClose:()=>{n([...s.slice(0,a),...s.slice(a+1)])},children:(0,l.jsx)(z,{value:e,onChange:e=>{n([...s.slice(0,a),e,...s.slice(a+1)])}})})})},a)),(0,l.jsx)(G.A,{sm:{span:10,offset:(null==s?void 0:s.length)!==0?2:0},children:(0,l.jsx)(A.A,{className:"mb-2 justify-content-md-end",children:(0,l.jsx)(u.A,{variant:"outline-success",onClick:()=>{n([...s,(0,r.v)(f.GL,{allowedIps:["0.0.0.0/0"],endpoint:"127.0.0.1:51820",publicKey:"SHVqHEGI7k2+OQ/oWMmWY2EQObbRQjRBdDPimh0h1WY="})])},children:(0,l.jsx)("i",{className:"bi bi-plus-lg"})})})})]})},z=e=>{let{value:a,onChange:s}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(N.a9,{label:"Endpoint",value:a.endpoint,onChange:e=>{s({...a,endpoint:e})}}),(0,l.jsx)(N.a9,{label:"PublicKey",value:a.publicKey,onChange:e=>{s({...a,publicKey:e})}}),(0,l.jsx)(N.e9,{title:"AllowedIps",data:a.allowedIps,onChange:e=>{s({...a,allowedIps:e})}})]})},$=e=>{let{value:a,onChange:s}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(N.a9,{label:"SecretKey",value:a.secretKey,placeholder:"SHVqHEGI7k2+OQ/oWMmWY2EQObbRQjRBdDPimh0h1WY=",onChange:e=>{s({...a,secretKey:e})}}),(0,l.jsx)(N.a9,{label:"MTU",value:a.mtu,onChange:e=>{isNaN(Number(e))||s({...a,mtu:Number(e)})}}),(0,l.jsx)(N.a9,{label:"IdleTimeout",value:a.idleTimeout,onChange:e=>{isNaN(Number(e))||s({...a,idleTimeout:Number(e)})}}),(0,l.jsx)(N.a9,{label:"Reserved",value:btoa(String.fromCharCode.apply(null,Array.from(a.reserved))),onChange:e=>{s({...a,reserved:Uint8Array.from(atob(e),e=>e.charCodeAt(0))})}}),(0,l.jsx)(N.e9,{title:"Endpoint",data:a.endpoint,onChange:e=>{s({...a,endpoint:e})}}),(0,l.jsx)(J,{title:"Peers",data:a.peers,onChange:e=>{s({...a,peers:e})}})]})},ee=e=>{let{value:a,onChange:s}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(E.$,{label:"TCP Encrypt",checked:a.tcpEncrypt,onChange:()=>{s({...a,tcpEncrypt:!a.tcpEncrypt})}}),(0,l.jsx)(E.$,{label:"UDP Encrypt",checked:a.udpEncrypt,onChange:()=>{s({...a,udpEncrypt:!a.udpEncrypt})}}),(0,l.jsx)(E.$,{label:"UdpOverStream",checked:a.udpOverStream,onChange:()=>{s({...a,udpOverStream:!a.udpOverStream})}}),(0,l.jsx)(N.a9,{label:"Password",value:a.password,onChange:e=>{s({...a,password:e})}})]})},ea=e=>{let{value:a,onChange:s,groups:r}=e,[n,t]=(0,c.useState)({value:"simple"});return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(N.a9,{label:"Name",value:a.name,onChange:e=>{s({...a,name:e})}}),(0,l.jsx)(N.a9,{label:"Group",value:a.group,onChange:e=>{s({...a,group:e})},reminds:r?r.map(e=>new N.mI({label:e,value:e})):void 0}),(0,l.jsx)(N.a9,{label:"Hash",value:a.hash,onChange:e=>{s({...a,hash:e})}}),a.protocols.map((e,r)=>{var n;return(0,l.jsx)(N.mc,{title:null!==(n=e.protocol.case)&&void 0!==n?n:"Unknown",onClose:()=>s({...a,protocols:[...a.protocols.slice(0,r),...a.protocols.slice(r+1)]}),moveUpDown:new N.fH(a.protocols,r,e=>{s({...a,protocols:e})}),children:(0,l.jsx)(es,{value:a.protocols[r],onChange:e=>{s({...a,protocols:[...a.protocols.slice(0,r),e,...a.protocols.slice(r+1)]})}})},r)}),(0,l.jsx)(w.A,{variant:"flush",children:(0,l.jsx)(w.A.Item,{children:(0,l.jsxs)(A.A,{children:[(0,l.jsx)(m.A.Select,{value:n.value,onChange:e=>{t({value:e.target.value})},children:Object.keys(en).map(e=>(0,l.jsx)("option",{value:e,children:e},e))}),(0,l.jsx)(u.A,{variant:"outline-secondary",onClick:()=>{console.log("click adddd"),s({...a,protocols:[...a.protocols,en[n.value]]})},children:"Add"})]})})})]})},es=e=>{let{value:a,onChange:s}=e,r=e=>s({...a,protocol:{case:a.protocol.case,value:e}}),n=a.protocol;switch(n.case){case"simple":return(0,l.jsx)(X,{value:n.value,onChange:e=>r(e)});case"direct":return(0,l.jsx)(k,{value:n.value,onChange:e=>r(e)});case"drop":return I;case"tls":return(0,l.jsx)(S,{value:n.value,onChange:e=>r(e)});case"websocket":return(0,l.jsx)(U,{value:n.value,onChange:e=>r(e)});case"shadowsocks":return(0,l.jsx)(Z,{value:n.value,onChange:e=>r(e)});case"quic":return(0,l.jsx)(Q,{value:n.value,onChange:e=>r(e)});case"vless":return(0,l.jsx)(_,{value:n.value,onChange:e=>r(e)});case"vmess":return(0,l.jsx)(V,{value:n.value,onChange:e=>r(e)});case"trojan":return(0,l.jsx)(T,{value:n.value,onChange:e=>r(e)});case"shadowsocksr":return(0,l.jsx)(D,{value:n.value,onChange:e=>r(e)});case"obfsHttp":return(0,l.jsx)(L,{value:n.value,onChange:e=>r(e)});case"none":return W;case"socks5":return(0,l.jsx)(q,{value:n.value,onChange:e=>r(e)});case"http":return(0,l.jsx)(H,{value:n.value,onChange:e=>r(e)});case"reject":return Y;case"yuubinsya":return(0,l.jsx)(ee,{value:n.value,onChange:e=>r(e)});case"grpc":return(0,l.jsx)(F,{value:n.value,onChange:e=>r(e)});case"http2":return(0,l.jsx)(O,{value:n.value,onChange:e=>r(e)});case"reality":return(0,l.jsx)(B,{value:n.value,onChange:e=>r(e)});case"wireguard":return(0,l.jsx)($,{value:n.value,onChange:e=>r(e)});case"mux":return(0,l.jsx)(R,{value:n.value,onChange:e=>r(e)});default:return el}},el=(0,l.jsx)("div",{className:"text-center my-2",style:{opacity:"0.4"},children:"Not Implement"}),er=(0,r.v)(f.Qi,{enable:!1,caCert:[new TextEncoder().encode("-----CERTIFICATE-----\n        MIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQD4MVvq8SAOzdeE\n        SUfehAij/kdTYKPfuc+5SBTNSykilsGsY1mEu4qS6Abc/8bfRM7e9+4bAkA9rSma\n        p9Rza0YWNwdYQD3j3vuFlR6ic6tTYN7estRGGFOoI5MxA8OsYDbWNnO/3jYlErtn\n        XUqDK5iABtBYNsSrLEc/Y2iISCm0zIT7Bfn3gzboggbqx5bpWjT5HmMRZmezl6EB\n        y6HjCSIgZzP2v3yOfOVcu70vKABD3X1bzaKEn86rXNra0TZkqvB9vPv1PsBrELrO\n        JxFRrAZylgeShzXgBXWjZKyj/toZ7FJLDv896sW/LuQarQufIcluisO++Xkz/EwQ\n        VuXURFENAgMBAAECggEAIuOnaPfD+qjHiNZXVsmnQExswOUHLFpdv81I9VIBQpZA\n        PAhMS3skoAGjg1omXfj5fsEKFPxkRPdMb6vzktUL6XALZYXEXX3ZTD456/rIJQSr\n        V9F6Qy9ExVBY7u05SshMtSC69Ugawuvm8cEcyiMtASRUEe6DB5AGJPxHs863JC3M\n        Dcb5nNYPGjFCsahkwz4rQq/eQQI0j+8TZlHtPFjTCgqMblk2qR/vwkfTI6Wv/rO6\n        YZ+M3xXpYc4j1qcHz5PFxIh3kZMgP/GdqLf+l5O4JaFv2aqxEmCjTHq3rAlxJeiV\n        tCT5xYCwYzZtZkZq5jPP6CruNbO+L8iyLYHgLAgmsQKBgQD+Pw5nO2FR7arAMR4I\n        K+bK2fFWfBTSkMRJrVqtbjr3LIjRGbGmqaF0HjR/8ZNxmyHBPmG35rfUw32NIAFc\n        q9nqXVgeL07CXRadYaMoVys3mukMiQSnuycA5se5uNXk/8bulaudLX0Q605GDWto\n        29W3CnWyuz1qNGRZHYZ0Duyk3QKBgQD5550WA/5Fwco2WosDqNBCetf3GZazwtKU\n        46Dk1QEXeGYrw3p/o42+nNuawqqxbKhH/OJarir8oT4amXMaf60M3tRjj/DYRLx1\n        WS9LkuU9bWSRFIpdJxC4BWi9IPCOsfbF0Cui9nD5dXCE6YwoQEXZ8OhE8+y+2fHU\n        OULeYZVB8QKBgQDYtnrad3zuzry68aL9qB4jTj4uT7mX+hm2C3O9XLYaNfWw9ku9\n        Gd4rEgwB+rKJJYhSJZA5pwmO68s63csLaNhosoQHxp9FgP9jyvO90P9feEWpj6lO\n        J3KJjC02G10GwxaYCy+q3Dk8kLW5dHrXeHrkeJ/2Zy9kNaBLbaVLi+UeaQKBgQDo\n        +GsRIxfgoBCLK019U9sSnsLGsSw02OLHuo07xvcFklBtbAa/BxIVKNXxKJlIXitj\n        MPUz5Dpe2VK0KWmMwono/bKyPnYgp7OpEkNtCLx8z4Z5WdTDkq+bXi+OYS7hWDbd\n        onuLqIMZi8ohnjfzLjfwPQ3LejqykStI1TjpZ79lgQKBgQDJAQe8Wnn2+QbWSbda\n        NFGyG+hs7SkqqZmEQl3nA5kyAeOSsGtJG9tiLxDE52eMUM1iL6wNPQMDkROp3yRg\n        7muJLMjiVeLFxXUyCXKj11W1VER5i16RsuWW3m5aGxumaXw4TJviJzT/dnwHe+x9\n        pWZqcBJfEUP6uTLSp3CmyEPcfA==\n        -----CERTIFICATE-----")],insecureSkipVerify:!1,nextProtos:["h2"],serverNames:["www.example.com"]}),en={simple:(0,r.v)(f._1,{protocol:{case:"simple",value:(0,r.v)(f.sT,{host:"",alternateHost:[],port:1080})}}),none:(0,r.v)(f._1,{protocol:{case:"none",value:(0,r.v)(f.YZ,{})}}),websocket:(0,r.v)(f._1,{protocol:{case:"websocket",value:(0,r.v)(f.BP,{host:"www.example.com",path:"/msg"})}}),quic:(0,r.v)(f._1,{protocol:{case:"quic",value:(0,r.v)(f.sn,{tls:er})}}),shadowsocks:(0,r.v)(f._1,{protocol:{case:"shadowsocks",value:(0,r.v)(f.t0,{method:"CHACHA20-IETF-POLY1305",password:"password"})}}),obfshttp:(0,r.v)(f._1,{protocol:{case:"obfsHttp",value:(0,r.v)(f.F7,{host:"www.example.com",port:"443"})}}),shadowsocksr:(0,r.v)(f._1,{protocol:{case:"shadowsocksr",value:(0,r.v)(f.hX,{method:"chacha20-ietf",obfs:"http_post",obfsparam:"#name=v",password:"password",port:"1080",protocol:"auth_aes128_sha1",protoparam:"",server:"127.0.0.1"})}}),vmess:(0,r.v)(f._1,{protocol:{case:"vmess",value:(0,r.v)(f.s2,{alterId:"0",security:"chacha20-poly1305",uuid:"9d5031b6-4ef5-11ee-be56-0242ac120002"})}}),trojan:(0,r.v)(f._1,{protocol:{case:"trojan",value:(0,r.v)(f.SD,{password:"password",peer:"peer"})}}),socks5:(0,r.v)(f._1,{protocol:{case:"socks5",value:(0,r.v)(f.AK,{hostname:"127.0.0.1:1080",password:"password",user:"username"})}}),http:(0,r.v)(f._1,{protocol:{case:"http",value:(0,r.v)(f.UM,{password:"password",user:"username"})}}),direct:(0,r.v)(f._1,{protocol:{case:"direct",value:(0,r.v)(f.bw,{})}}),yuubinsya:(0,r.v)(f._1,{protocol:{case:"yuubinsya",value:(0,r.v)(f.lA,{tcpEncrypt:!0,udpEncrypt:!0,password:"password",udpOverStream:!1})}}),tls:(0,r.v)(f._1,{protocol:{case:"tls",value:er}}),wireguard:(0,r.v)(f._1,{protocol:{case:"wireguard",value:(0,r.v)(f.g2,{endpoint:["10.0.0.2/32"],mtu:1500,idleTimeout:3,reserved:new Uint8Array([0,0,0]),secretKey:"SHVqHEGI7k2+OQ/oWMmWY2EQObbRQjRBdDPimh0h1WY=",peers:[{allowedIps:["0.0.0.0/0"],endpoint:"127.0.0.1:51820",publicKey:"SHVqHEGI7k2+OQ/oWMmWY2EQObbRQjRBdDPimh0h1WY="}]})}}),mux:(0,r.v)(f._1,{protocol:{case:"mux",value:(0,r.v)(f.gE,{concurrency:8})}}),drop:(0,r.v)(f._1,{protocol:{case:"drop",value:(0,r.v)(f.fO,{})}}),vless:(0,r.v)(f._1,{protocol:{case:"vless",value:(0,r.v)(f.X_,{uuid:"c48619fe-8f02-49e0-b9e9-edf763e17e21"})}}),grpc:(0,r.v)(f._1,{protocol:{case:"grpc",value:(0,r.v)(f.E_,{tls:er})}}),http2:(0,r.v)(f._1,{protocol:{case:"http2",value:(0,r.v)(f.ql,{concurrency:8})}}),reality:(0,r.v)(f._1,{protocol:{case:"reality",value:(0,r.v)(f.K0,{debug:!1,publicKey:"SHVqHEGI7k2+OQ/oWMmWY2EQObbRQjRBdDPimh0h1WY=",serverName:"127.0.0.1",shortId:"9d5031b6-4ef5-11ee-be56-0242ac120002"})}})},et=e=>{let{hash:a,point:s,editable:t,show:m,onHide:w,onSave:A,groups:N,onDelete:f,isNew:k}=e,I=(0,c.useContext)(g.u),[E,S]=(0,c.useState)({show:!1,data:""}),P=(0,x.R)(),{data:F,error:H,isLoading:O,isValidating:R,mutate:W}=(0,p.Ay)(""===a?void 0:"/node",(0,b.AD)(C.rH.method.get,"POST",(0,r.v)(o.g8,{value:a}),s),{shouldRetryOnError:!1,keepPreviousData:!1,revalidateOnFocus:!1});return(0,c.useEffect)(()=>{W()},[a]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(eo,{show:E.show,data:E.data,plaintext:!0,onHide:()=>S({...E,show:!1})}),(0,l.jsxs)(i.A,{show:!E.show&&m,scrollable:!0,"aria-labelledby":"contained-modal-title-vcenter",size:"xl",onHide:()=>{w()},centered:!0,children:[(0,l.jsx)(i.A.Header,{closeButton:!0,children:(0,l.jsx)(i.A.Title,{id:"contained-modal-title-vcenter",children:a})}),(0,l.jsx)(i.A.Body,{children:(0,l.jsx)("fieldset",{disabled:!t,children:H?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("h4",{className:"text-center my-2",children:[H.code," - ",H.msg]}),(0,l.jsx)("pre",{className:"text-center my-2 text-danger lead",children:H.raw})]}):R||O||!F?(0,l.jsx)(j.A,{}):(0,l.jsx)(x.O,{value:P,children:(0,l.jsx)(ea,{value:F,groups:N,onChange:e=>{t&&W(e,!1)}})})})}),(0,l.jsxs)(i.A.Footer,{children:[f&&(0,l.jsxs)(d.A,{onSelect:e=>{"ok"===e&&f&&(w(),f())},as:h.A,variant:"outline-danger",title:"Remove",children:[(0,l.jsx)(v.A.Item,{eventKey:"ok",children:"OK"}),(0,l.jsx)(v.A.Item,{eventKey:"cancel",children:"Cancel"})]}),!H&&!R&&!O&&F&&(0,l.jsx)(u.A,{variant:"outline-primary",onClick:()=>{S({show:!0,data:(0,n.J7)(y.Ac,F,{prettySpaces:2})})},children:"JSON"}),(0,l.jsx)(u.A,{variant:"outline-secondary",onClick:()=>{w()},children:"Close"}),(0,l.jsx)(()=>t?(0,l.jsx)(u.A,{variant:"outline-primary",disabled:R||O||H||!t,onClick:()=>{F&&(k&&(F.hash=""),(0,b.kP)(C.rH.method.save,"/node","PATCH",F).then(async e=>{let{error:a}=e;a?I.Error(a.msg):(I.Info("save successful"),A&&A())}))},children:"Save"}):(0,l.jsx)(l.Fragment,{}),{})]})]})]})},eo=e=>{let a=(0,c.useContext)(g.u),[s,r]=(0,c.useState)({data:""});return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(i.A,{show:e.show,"aria-labelledby":"contained-modal-title-vcenter",size:"xl",onHide:()=>{e.onHide()},centered:!0,children:[!e.plaintext&&(0,l.jsx)(i.A.Header,{closeButton:!0,children:(0,l.jsx)(i.A.Title,{id:"contained-modal-title-vcenter",children:"Import JSON"})}),(0,l.jsx)(i.A.Body,{children:(0,l.jsx)(m.A.Control,{as:"textarea",readOnly:e.plaintext,value:e.data?e.data:s.data,style:{height:"65vh",fontFamily:"monospace"},onChange:e=>{r({data:e.target.value})}})}),(0,l.jsxs)(i.A.Footer,{children:[(0,l.jsx)(u.A,{variant:"outline-secondary",onClick:()=>{e.onHide()},children:"Close"}),(0,l.jsx)(()=>e.onSave?(0,l.jsx)(u.A,{variant:"outline-primary",onClick:()=>{let l=(0,t.mj)(y.Ac,s.data);e.isNew&&(l.hash=""),(0,b.kP)(C.rH.method.save,"/node","PATCH",l).then(async s=>{let{error:l}=s;void 0===l?(a.Info("save successful"),void 0!==e.onSave&&e.onSave()):a.Error(l.msg)})},children:"Save"}):(0,l.jsx)(l.Fragment,{}),{})]})]})})}}}]);
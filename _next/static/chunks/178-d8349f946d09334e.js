"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[178],{3227:function(e,o,a){a.d(o,{J:function(){return r}});var n=a(7437);a(2265);var l=a(9317),s=a(5914),t=a(590);let r=e=>(0,n.jsxs)(l.Z.Group,{as:s.Z,className:"mb-2",children:[(0,n.jsx)(l.Z.Label,{column:!0,sm:2,children:e.label}),(0,n.jsx)(t.Z,{sm:10,className:"d-flex align-items-center",children:(0,n.jsx)(l.Z.Check,{className:"d-flex align-items-center",type:"switch",checked:e.checked,onChange:()=>e.onChange()})})]})},6756:function(e,o,a){a.d(o,{P:function(){return r},t:function(){return c}});var n=a(7437),l=a(2265),s=a(4349),t=a(7426);let r=(0,l.createContext)({Info:e=>{},Error:e=>{}}),c=e=>{let{children:o}=e,[a,c]=(0,l.useState)({value:{},index:0}),i=(e,o)=>c(a=>({value:{...a.value,[a.index]:{text:e,type:o}},index:a.index+1}));return(0,n.jsxs)(r.Provider,{value:{Info:e=>{console.log(e),i(e,"success")},Error:e=>{console.error(e),i(e,"danger")}},children:[(0,n.jsx)(s.Z,{className:"p-3",position:"top-center",containerPosition:"fixed",style:{zIndex:999999},children:Object.entries(a.value).map(e=>{let[o,l]=e;return(0,n.jsxs)(t.Z,{role:"alert","aria-live":"assertive",show:!0,bg:l.type,onClose:()=>{let e=a.value;delete e[o],c({...a,value:e}),console.log("close: "+o)},"aria-atomic":"true",delay:4e3,autohide:!0,animation:!0,children:[(0,n.jsxs)(t.Z.Header,{children:[(0,n.jsx)("strong",{className:"me-auto",children:"Notification"}),(0,n.jsx)("small",{className:"text-muted",children:"just now"})]}),(0,n.jsx)(t.Z.Body,{className:"text-center",children:l.text})]},"toast"+o)})}),o]})}},9318:function(e,o,a){a.d(o,{CX:function(){return g},NZ:function(){return j},Vf:function(){return m},W2:function(){return v},sr:function(){return b},u5:function(){return x},yh:function(){return C}});var n=a(7437),l=a(7386),s=a(4370),t=a(5107),r=a(9317),c=a(5914),i=a(590),u=a(9252),d=a(6879),h=a(6459),p=a(2265);class x{constructor(e){this.label=e.label,this.value=e.value,this.label_children=e.label_children}}let m=e=>(0,n.jsxs)(r.Z.Group,{as:c.Z,className:e.mb?e.mb:"mb-2",children:[(0,n.jsx)(r.Z.Label,{column:!0,sm:2,className:"nowrap",children:e.label}),(0,n.jsx)(i.Z,{sm:10,children:(0,n.jsxs)(u.Z,{className:e.mb?e.mb:"mb-2",children:[e.reminds&&e.reminds.length?(0,n.jsxs)(l.Z,{children:[(0,n.jsx)(l.Z.Toggle,{variant:"outline-secondary",id:"dropdown-basic"}),(0,n.jsx)(s.Z,{style:{maxHeight:"300px",overflowY:"auto"},children:e.reminds.map(o=>(0,n.jsxs)(t.Z,{onClick:()=>e.onChange&&e.onChange(o.value),children:[(0,n.jsx)("b",{children:o.label}),o.label_children&&o.label_children.map(e=>(0,n.jsx)("div",{children:(0,n.jsx)("span",{className:"text-body-secondary",children:e})},e))]},o.value))})]}):(0,n.jsx)(n.Fragment,{}),e.url?(0,n.jsx)("a",{className:"mt-1",href:e.url,target:"_blank",children:e.value}):(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(r.Z.Control,{value:e.value,plaintext:e.plaintext,placeholder:e.placeholder,onChange:o=>{e.onChange&&e.onChange(o.target.value)}})})]})})]}),j=e=>(0,n.jsxs)(r.Z.Group,{as:c.Z,className:"mb-2",children:[(0,n.jsx)(r.Z.Label,{column:!0,sm:2,className:"nowrap",children:e.label}),(0,n.jsx)(i.Z,{sm:10,children:(0,n.jsx)(r.Z.Control,{as:"textarea",rows:5,value:e.value,onChange:o=>e.onChange(o.target.value)})})]});function C(e){var o;let[a,l]=(0,p.useState)({value:""});return(0,n.jsxs)(r.Z.Group,{as:c.Z,className:"mb-3",children:[(0,n.jsx)(r.Z.Label,{column:!0,sm:2,className:"nowrap",children:e.title}),e.data&&e.data.map((o,a)=>(0,n.jsx)(i.Z,{sm:{span:10,offset:0!==a?2:0},children:(0,n.jsxs)(u.Z,{className:"mb-2",children:[(0,n.jsx)(r.Z.Control,{onChange:o=>{e.data&&(e.data[a]=o.target.value,e.onChange(e.data))},value:o}),(0,n.jsx)(d.Z,{variant:"outline-danger",onClick:()=>{e.data&&(e.data.splice(a,1),e.onChange(e.data))},children:(0,n.jsx)("i",{className:"bi bi-x-lg"})})]})},a)),(0,n.jsx)(i.Z,{sm:{span:10,offset:(null===(o=e.data)||void 0===o?void 0:o.length)!==0?2:0},children:(0,n.jsxs)(u.Z,{className:"mb-2",children:[(0,n.jsx)(r.Z.Control,{value:a.value,onChange:e=>l({value:e.target.value})}),(0,n.jsx)(d.Z,{variant:"outline-success",onClick:()=>{e.data.push(a.value),e.onChange(e.data)},children:(0,n.jsx)("i",{className:"bi bi-plus-lg"})})]})})]})}function g(e){var o;let[a,l]=(0,p.useState)({value:""});return(0,n.jsxs)(r.Z.Group,{as:c.Z,className:"mb-3",children:[(0,n.jsx)(r.Z.Label,{column:!0,sm:2,className:"nowrap",children:e.title}),e.data&&e.data.map((o,a)=>(0,n.jsx)(i.Z,{sm:{span:10,offset:0!==a?2:0},children:(0,n.jsxs)(u.Z,{className:"mb-2",children:[(0,n.jsx)(r.Z.Control,{value:new TextDecoder().decode(o),as:e.textarea?"textarea":void 0,onChange:o=>{e.data[a]=new TextEncoder().encode(o.target.value),e.onChange(e.data?e.data:[])}}),(0,n.jsx)(d.Z,{variant:"outline-danger",onClick:()=>{e.data&&(e.data.splice(a,1),e.onChange(e.data))},children:(0,n.jsx)("i",{className:"bi bi-x-lg"})})]})},"bi-"+a)),(0,n.jsx)(i.Z,{sm:{span:10,offset:(null===(o=e.data)||void 0===o?void 0:o.length)!==0?2:0},children:(0,n.jsxs)(u.Z,{className:"mb-2",children:[(0,n.jsx)(r.Z.Control,{as:e.textarea?"textarea":void 0,value:a.value,onChange:e=>l({value:e.target.value})}),(0,n.jsx)(d.Z,{variant:"outline-success",onClick:()=>{let o=new TextEncoder().encode(a.value);e.data?e.data.push(o):e.data=[o],e.onChange(e.data)},children:(0,n.jsx)("i",{className:"bi bi-plus-lg"})})]})})]})}function b(e){return(0,n.jsxs)(r.Z.Group,{as:c.Z,className:e.mb?e.mb:"mb-2",children:[(0,n.jsx)(r.Z.Label,{column:!0,sm:2,className:"nowrap",children:e.title}),(0,n.jsx)(i.Z,{sm:{span:10,offset:0},children:(0,n.jsx)(u.Z,{className:e.mb?e.mb:"mb-2"})}),e.data&&e.data.map((o,a)=>(0,n.jsx)(i.Z,{sm:{span:10,offset:2},className:"mt-0",children:(0,n.jsx)(u.Z,{className:e.mb?e.mb:"mb-2",children:o})},a))]})}let v=e=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(h.Z,{className:"flex-grow-1 form-floating",children:[(0,n.jsxs)(h.Z.Header,{className:"d-flex justify-content-between",children:[e.title,!e.hideClose&&(0,n.jsxs)(d.Z,{variant:"outline-danger",size:"sm",onClick:e.onClose,children:[(0,n.jsx)("i",{className:"bi bi-x-lg"})," "]})]}),(0,n.jsx)(h.Z.Body,{children:e.children})]}),(0,n.jsx)("br",{})]})},1990:function(e,o,a){a.d(o,{E:function(){return m}});var n=a(7437),l=a(2389),s=a(9252),t=a(9317),r=a(6879),c=a(5914),i=a(590),u=a(7276),d=a(9318),h=a(3227),p=a(2265);function x(e,o){return o?function(a){a(e),o(e)}:function(e){}}let m=e=>{let o=x(e.point,e.onChange),a=e=>{o(o=>{o.protocols.splice(e,1)})},c=(a,n)=>{e.onChange&&o(e=>{e.protocols[a].protocol.value=n})},[i,u]=(0,p.useState)({value:"simple"});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d.Vf,{label:"Name",value:e.point.name,onChange:e=>{o(o=>o.name=e)}}),(0,n.jsx)(d.Vf,{label:"Group",value:e.point.group,onChange:e=>{o(o=>o.group=e)},reminds:e.groups?e.groups.map(e=>new d.u5({label:e,value:e})):void 0}),(0,n.jsx)(d.Vf,{label:"Hash",value:e.point.hash,onChange:e=>{o(o=>o.hash=e)}}),e.point.protocols.map((e,o)=>{switch(e.protocol.case){case"simple":return(0,n.jsx)(C,{protocol:e.protocol.value,onChange:e=>c(o,e),onClose:()=>a(o)},o);case"websocket":return(0,n.jsx)(v,{protocol:e.protocol.value,onChange:e=>c(o,e),onClose:()=>a(o)},o);case"shadowsocks":return(0,n.jsx)(f,{protocol:e.protocol.value,onChange:e=>c(o,e),onClose:()=>a(o)},o);case"quic":return(0,n.jsx)(N,{protocol:e.protocol.value,onChange:e=>c(o,e),onClose:()=>a(o)},o);case"vless":return(0,n.jsx)(H,{protocol:e.protocol.value,onChange:e=>c(o,e),onClose:()=>a(o)},o);case"vmess":return(0,n.jsx)(y,{protocol:e.protocol.value,onChange:e=>c(o,e),onClose:()=>a(o)},o);case"trojan":return(0,n.jsx)(k,{protocol:e.protocol.value,onChange:e=>c(o,e),onClose:()=>a(o)},o);case"shadowsocksr":return(0,n.jsx)(Z,{protocol:e.protocol.value,onChange:e=>c(o,e),onClose:()=>a(o)},o);case"obfsHttp":return(0,n.jsx)(Q,{protocol:e.protocol.value,onChange:e=>c(o,e),onClose:()=>a(o)},o);case"none":return(0,n.jsx)(g,{onClose:()=>a(o)},o);case"socks5":return(0,n.jsx)(V,{protocol:e.protocol.value,onChange:e=>c(o,e),onClose:()=>a(o)},o);case"http":return(0,n.jsx)(F,{protocol:e.protocol.value,onChange:e=>c(o,e),onClose:()=>a(o)},o);case"direct":return(0,n.jsx)(W,{protocol:e.protocol.value,onChange:e=>c(o,e),onClose:()=>a(o)},o);case"reject":return(0,n.jsx)(T,{protocol:e.protocol.value,onChange:e=>c(o,e),onClose:()=>a(o)},o);case"yuubinsya":return(0,n.jsx)(E,{protocol:e.protocol.value,onChange:e=>c(o,e),onClose:()=>a(o)},o);case"grpc":return(0,n.jsx)(A,{protocol:e.protocol.value,onChange:e=>c(o,e),onClose:()=>a(o)},o);case"http2":return(0,n.jsx)(O,{protocol:e.protocol.value,onChange:e=>c(o,e),onClose:()=>a(o)},o);case"reality":return(0,n.jsx)(B,{protocol:e.protocol.value,onChange:e=>c(o,e),onClose:()=>a(o)},o);case"tls":return(0,n.jsx)(I,{protocol:e.protocol.value,onChange:e=>c(o,e),onClose:()=>a(o)},o);case"wireguard":return(0,n.jsx)(j,{protocol:e.protocol.value,onChange:e=>c(o,e),onClose:()=>a(o)},o);case"mux":return(0,n.jsx)(S,{protocol:e.protocol.value,onChange:e=>c(o,e),onClose:()=>a(o)},o);case"drop":return(0,n.jsx)(P,{protocol:e.protocol.value,onChange:e=>c(o,e),onClose:()=>a(o)},o);default:return(0,n.jsx)(b,{onClose:()=>a(o)},o)}}),(0,n.jsx)(l.Z,{variant:"flush",children:(0,n.jsx)(l.Z.Item,{children:(0,n.jsxs)(s.Z,{children:[(0,n.jsx)(t.Z.Select,{value:i.value,onChange:e=>u({value:e.target.value}),children:Object.keys(L).map(e=>(0,n.jsx)("option",{value:e,children:e},e))}),(0,n.jsx)(r.Z,{variant:"outline-secondary",onClick:()=>o(e=>{e.protocols.push(L[i.value])}),children:"Add"})]})})})]})},j=e=>{let o=x(e.protocol,e.onChange);return(0,n.jsx)(d.W2,{title:"Wireguard",onClose:e.onClose,children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d.Vf,{label:"SecretKey",value:e.protocol.secretKey,placeholder:"SHVqHEGI7k2+OQ/oWMmWY2EQObbRQjRBdDPimh0h1WY=",onChange:e=>{o(o=>o.secretKey=e)}}),(0,n.jsx)(d.Vf,{label:"MTU",value:e.protocol.mtu,onChange:e=>{isNaN(Number(e))||o(o=>o.mtu=Number(e))}}),(0,n.jsx)(d.Vf,{label:"IdleTimeout",value:e.protocol.idleTimeout,onChange:e=>{isNaN(Number(e))||o(o=>o.idleTimeout=Number(e))}}),(0,n.jsx)(d.Vf,{label:"Reserved",value:btoa(new TextDecoder().decode(e.protocol.reserved)),onChange:e=>{o(o=>o.reserved=new TextEncoder().encode(atob(e)))}}),(0,n.jsx)(d.yh,{title:"Endpoint",data:e.protocol.endpoint,onChange:e=>{o(o=>o.endpoint=e)}}),(0,n.jsx)(function(e){var o;return(0,n.jsxs)(t.Z.Group,{as:c.Z,className:"mb-3",children:[(0,n.jsx)(t.Z.Label,{column:!0,sm:2,className:"nowrap",children:e.title}),e.data&&e.data.map((o,a)=>(0,n.jsx)(i.Z,{sm:{span:10,offset:0!==a?2:0},children:(0,n.jsx)(s.Z,{className:"mb-2",children:(0,n.jsx)(d.W2,{title:"Peer",onClose:()=>{e.data&&(e.data.splice(a,1),e.onChange(e.data))},children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d.Vf,{label:"Endpoint",value:o.endpoint,onChange:o=>{e.data&&(e.data[a].endpoint=o,e.onChange(e.data))}}),(0,n.jsx)(d.Vf,{label:"PublicKey",value:o.publicKey,onChange:o=>{e.data&&(e.data[a].publicKey=o,e.onChange(e.data))}}),(0,n.jsx)(d.yh,{title:"AllowedIps",data:o.allowedIps,onChange:o=>{e.data&&(e.data[a].allowedIps=o,e.onChange(e.data))}})]})})})},a)),(0,n.jsx)(i.Z,{sm:{span:10,offset:(null===(o=e.data)||void 0===o?void 0:o.length)!==0?2:0},children:(0,n.jsx)(s.Z,{className:"mb-2 justify-content-md-end",children:(0,n.jsx)(r.Z,{variant:"outline-success",onClick:()=>{let o=new u.E1({allowedIps:["0.0.0.0/0"],endpoint:"127.0.0.1:51820",publicKey:"SHVqHEGI7k2+OQ/oWMmWY2EQObbRQjRBdDPimh0h1WY="});e.data?(e.data.push(o),e.onChange(e.data)):e.onChange([o])},children:(0,n.jsx)("i",{className:"bi bi-plus-lg"})})})})]})},{title:"Peers",data:e.protocol.peers,onChange:e=>{o(o=>o.peers=e)}})]})})},C=e=>{let o=x(e.protocol,e.onChange);return(0,n.jsx)(d.W2,{title:"Simple",onClose:e.onClose,children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d.Vf,{label:"Host",value:e.protocol.host,onChange:e=>{o(o=>o.host=e)}}),(0,n.jsx)(d.Vf,{label:"Port",value:e.protocol.port,onChange:e=>{let a=Number(e);isNaN(a)||a>65535||a<0||o(e=>e.port=a)}}),(0,n.jsx)(d.Vf,{label:"Timeout",value:Number(e.protocol.timeout),onChange:e=>{let a=Number(e);isNaN(a)||o(e=>e.timeout=BigInt(a))}}),(0,n.jsx)(function(e){var o;return(0,n.jsxs)(t.Z.Group,{as:c.Z,className:"mb-3 flex-grow-1 overflow-auto",children:[(0,n.jsx)(t.Z.Label,{column:!0,sm:2,className:"nowrap",children:e.title}),e.data&&e.data.map((o,a)=>(0,n.jsx)(i.Z,{sm:{span:10,offset:0!==a?2:0},children:(0,n.jsx)(s.Z,{className:"mb-2",children:(0,n.jsx)(d.W2,{title:"Host",onClose:()=>{e.data&&(e.data.splice(a,1),e.onChange(e.data))},children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d.Vf,{label:"Host",value:o.host,onChange:o=>{e.data&&(e.data[a].host=o,e.onChange(e.data))}}),(0,n.jsx)(d.Vf,{label:"Port",value:o.port,onChange:o=>{!isNaN(Number(o))&&e.data&&(e.data[a].port=Number(o),e.onChange(e.data))}})]})})})},a)),(0,n.jsx)(i.Z,{sm:{span:10,offset:(null===(o=e.data)||void 0===o?void 0:o.length)!==0?2:0},children:(0,n.jsx)(s.Z,{className:"mb-2 justify-content-md-end",children:(0,n.jsx)(r.Z,{variant:"outline-success",onClick:()=>{let o=new u.ho({});e.data?(e.data.push(o),e.onChange(e.data)):e.onChange([o])},children:(0,n.jsx)("i",{className:"bi bi-plus-lg"})})})})]})},{title:"AlternateHost",data:e.protocol.alternateHost,onChange:e=>{o(o=>o.alternateHost=e)}})]})})},g=e=>(0,n.jsx)(d.W2,{title:"None",onClose:e.onClose,children:(0,n.jsx)("div",{className:"text-center my-2",style:{opacity:"0.4"},children:"None"})}),b=e=>(0,n.jsx)(d.W2,{title:"Unknown",onClose:e.onClose,children:(0,n.jsx)("div",{className:"text-center my-2",style:{opacity:"0.4"},children:"Unknown"})}),v=e=>{let o=x(e.protocol,e.onChange);return(0,n.jsx)(d.W2,{title:"Websocket",onClose:e.onClose,children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d.Vf,{label:"Host",value:e.protocol.host,onChange:e=>{o(o=>o.host=e)}}),(0,n.jsx)(d.Vf,{label:"Path",value:e.protocol.path,onChange:e=>{o(o=>o.path=e)}})]})})},f=e=>{let o=x(e.protocol,e.onChange);return(0,n.jsx)(d.W2,{title:"Shadowsocks",onClose:e.onClose,children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d.Vf,{label:"Method",value:e.protocol.method,onChange:e=>{o(o=>o.method=e)}}),(0,n.jsx)(d.Vf,{label:"Password",value:e.protocol.password,onChange:e=>{o(o=>o.password=e)}})]})})},w=e=>{let o=x(e.tls,e.onChange);return(0,n.jsxs)(n.Fragment,{children:[(void 0===e.showEnabled||e.showEnabled)&&(0,n.jsx)(h.J,{label:"TLS Enabled",checked:e.tls.enable,onChange:()=>{o(e=>e.enable=!e.enable)}}),(0,n.jsx)(h.J,{label:"InsecureSkipVerify",checked:e.tls.insecureSkipVerify,onChange:()=>{o(e=>e.insecureSkipVerify=!e.insecureSkipVerify)}}),(0,n.jsx)(d.yh,{title:"ServerNames",data:e.tls.serverNames,onChange:e=>{o(o=>o.serverNames=e)}}),(0,n.jsx)(d.yh,{title:"NextProtos",data:e.tls.nextProtos,onChange:e=>{o(o=>o.nextProtos=e)}}),(0,n.jsx)(d.CX,{title:"CaCert",textarea:!0,data:e.tls.caCert,onChange:e=>{o(o=>o.caCert=e)}})]})},N=e=>{var o;let a=x(e.protocol,e.onChange);return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(d.W2,{title:"Quic",onClose:e.onClose,children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d.Vf,{label:"Host",value:e.protocol.host,onChange:e=>{a(o=>o.host=e)}}),(0,n.jsx)(w,{showEnabled:!1,tls:null!==(o=e.protocol.tls)&&void 0!==o?o:new u.Gf({}),onChange:e=>{a(o=>o.tls=e)}})]})})})},Z=e=>{let o=x(e.protocol,e.onChange);return(0,n.jsx)(d.W2,{title:"Shadowsocksr",onClose:e.onClose,children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d.Vf,{label:"Server",value:e.protocol.server,onChange:e=>{o(o=>o.server=e)}}),(0,n.jsx)(d.Vf,{label:"Port",value:e.protocol.port,onChange:e=>{o(o=>o.port=e)}}),(0,n.jsx)(d.Vf,{label:"Method",value:e.protocol.method,placeholder:"chacha20-ietf",onChange:e=>{o(o=>o.method=e)}}),(0,n.jsx)(d.Vf,{label:"Protocol",value:e.protocol.protocol,placeholder:"auth_aes128_sha1",onChange:e=>{o(o=>o.protocol=e)}}),(0,n.jsx)(d.Vf,{label:"ProtocolParam",value:e.protocol.protoparam,onChange:e=>{o(o=>o.protoparam=e)}}),(0,n.jsx)(d.Vf,{label:"Obfs",value:e.protocol.obfs,placeholder:"http_post",onChange:e=>{o(o=>o.obfs=e)}}),(0,n.jsx)(d.Vf,{label:"ObfsParam",value:e.protocol.obfsparam,placeholder:"#name=v",onChange:e=>{o(o=>o.obfsparam=e)}})]})})},y=e=>{let o=x(e.protocol,e.onChange);return(0,n.jsx)(d.W2,{title:"Vmess",onClose:e.onClose,children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d.Vf,{label:"AlterId",value:e.protocol.alterId,onChange:e=>{o(o=>o.alterId=e)}}),(0,n.jsx)(d.Vf,{label:"Security",value:e.protocol.security,placeholder:"chacha20-poly1305",onChange:e=>{o(o=>o.security=e)}}),(0,n.jsx)(d.Vf,{label:"UUID",value:e.protocol.uuid,placeholder:"9d5031b6-4ef5-11ee-be56-0242ac120002",onChange:e=>{o(o=>o.uuid=e)}})]})})},k=e=>{let o=x(e.protocol,e.onChange);return(0,n.jsx)(d.W2,{title:"Trojan",onClose:e.onClose,children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d.Vf,{label:"Password",value:e.protocol.password,onChange:e=>{o(o=>o.password=e)}}),(0,n.jsx)(d.Vf,{label:"Peer",value:e.protocol.peer,onChange:e=>{o(o=>o.peer=e)}})]})})},V=e=>{let o=x(e.protocol,e.onChange);return(0,n.jsx)(d.W2,{title:"Socks5",onClose:e.onClose,children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d.Vf,{label:"Hostname",value:e.protocol.hostname,placeholder:"127.0.0.1",onChange:e=>{o(o=>o.hostname=e)}}),(0,n.jsx)(d.Vf,{label:"User",value:e.protocol.user,onChange:e=>{o(o=>o.user=e)}}),(0,n.jsx)(d.Vf,{label:"Password",value:e.protocol.password,onChange:e=>{o(o=>o.password=e)}})]})})},F=e=>{let o=x(e.protocol,e.onChange);return(0,n.jsx)(d.W2,{title:"HTTP",onClose:e.onClose,children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d.Vf,{label:"User",value:e.protocol.user,onChange:e=>{o(o=>o.user=e)}}),(0,n.jsx)(d.Vf,{label:"Password",value:e.protocol.password,onChange:e=>{o(o=>o.password=e)}})]})})},W=e=>{let o=x(e.protocol,e.onChange);return(0,n.jsx)(d.W2,{title:"Direct",onClose:e.onClose,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(d.Vf,{label:"Timeout",value:Number(e.protocol.timeout),onChange:e=>{o(o=>{isNaN(Number(e))||(o.timeout=BigInt(e))})}})})})},T=e=>(0,n.jsx)(d.W2,{title:"Reject",onClose:e.onClose,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:"text-center my-2",style:{opacity:"0.4"},children:"Reject"})})}),E=e=>{let o=x(e.protocol,e.onChange);return(0,n.jsx)(d.W2,{title:"Yuubinsya",onClose:e.onClose,children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(h.J,{label:"Encrypted",checked:e.protocol.encrypted,onChange:()=>{o(e=>e.encrypted=!e.encrypted)}}),(0,n.jsx)(h.J,{label:"UdpOverStream",checked:e.protocol.udpOverStream,onChange:()=>{o(e=>e.udpOverStream=!e.udpOverStream)}}),(0,n.jsx)(d.Vf,{label:"Password",value:e.protocol.password,onChange:e=>{o(o=>o.password=e)}})]})})},I=e=>(0,n.jsx)(d.W2,{title:"Tls",onClose:e.onClose,children:(0,n.jsx)(w,{tls:e.protocol,onChange:e.onChange})}),S=e=>{let o=x(e.protocol,e.onChange);return(0,n.jsx)(d.W2,{title:"Mux",onClose:e.onClose,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(d.Vf,{label:"Concurrency",value:e.protocol.concurrency,onChange:e=>{isNaN(Number(e))||o(o=>o.concurrency=Number(e))}})})})},P=e=>(0,n.jsx)(d.W2,{title:"Drop",onClose:e.onClose,children:(0,n.jsx)("div",{className:"text-center my-2",style:{opacity:"0.4"},children:"Drop"})}),H=e=>{let o=x(e.protocol,e.onChange);return(0,n.jsx)(d.W2,{title:"Vless",onClose:e.onClose,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(d.Vf,{label:"UUID",value:e.protocol.uuid,onChange:e=>{o(o=>o.uuid=e)}})})})},Q=e=>{let o=x(e.protocol,e.onChange);return(0,n.jsx)(d.W2,{title:"ObfsHttp",onClose:e.onClose,children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d.Vf,{label:"Host",value:e.protocol.host,onChange:e=>{o(o=>o.host=e)}}),(0,n.jsx)(d.Vf,{label:"Port",value:e.protocol.port,onChange:e=>{o(o=>o.port=e)}})]})})},A=e=>{var o;let a=x(e.protocol,e.onChange);return(0,n.jsx)(d.W2,{title:"Grpc",onClose:e.onClose,children:(0,n.jsx)(w,{tls:null!==(o=e.protocol.tls)&&void 0!==o?o:new u.Gf({}),onChange:e=>{a(o=>o.tls=e)}})})},O=e=>{let o=x(e.protocol,e.onChange);return(0,n.jsx)(d.W2,{title:"Http2",onClose:e.onClose,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(d.Vf,{label:"Concurrency",value:e.protocol.concurrency,onChange:e=>{isNaN(Number(e))||o(o=>o.concurrency=Number(e))}})})})},B=e=>{let o=x(e.protocol,e.onChange);return(0,n.jsx)(d.W2,{title:"Reality",onClose:e.onClose,children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(h.J,{label:"Debug",checked:e.protocol.debug,onChange:()=>{o(e=>e.debug=!e.debug)}}),(0,n.jsx)(d.Vf,{label:"PublicKey",value:e.protocol.publicKey,onChange:e=>{o(o=>o.publicKey=e)}}),(0,n.jsx)(d.Vf,{label:"ServerName",value:e.protocol.serverName,onChange:e=>{o(o=>o.serverName=e)}}),(0,n.jsx)(d.Vf,{label:"ShortId",value:e.protocol.shortId,onChange:e=>{o(o=>o.shortId=e)}})]})})},Y=new u.Gf({enable:!1,caCert:[new TextEncoder().encode("-----CERTIFICATE-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQD4MVvq8SAOzdeE\nSUfehAij/kdTYKPfuc+5SBTNSykilsGsY1mEu4qS6Abc/8bfRM7e9+4bAkA9rSma\np9Rza0YWNwdYQD3j3vuFlR6ic6tTYN7estRGGFOoI5MxA8OsYDbWNnO/3jYlErtn\nXUqDK5iABtBYNsSrLEc/Y2iISCm0zIT7Bfn3gzboggbqx5bpWjT5HmMRZmezl6EB\ny6HjCSIgZzP2v3yOfOVcu70vKABD3X1bzaKEn86rXNra0TZkqvB9vPv1PsBrELrO\nJxFRrAZylgeShzXgBXWjZKyj/toZ7FJLDv896sW/LuQarQufIcluisO++Xkz/EwQ\nVuXURFENAgMBAAECggEAIuOnaPfD+qjHiNZXVsmnQExswOUHLFpdv81I9VIBQpZA\nPAhMS3skoAGjg1omXfj5fsEKFPxkRPdMb6vzktUL6XALZYXEXX3ZTD456/rIJQSr\nV9F6Qy9ExVBY7u05SshMtSC69Ugawuvm8cEcyiMtASRUEe6DB5AGJPxHs863JC3M\nDcb5nNYPGjFCsahkwz4rQq/eQQI0j+8TZlHtPFjTCgqMblk2qR/vwkfTI6Wv/rO6\nYZ+M3xXpYc4j1qcHz5PFxIh3kZMgP/GdqLf+l5O4JaFv2aqxEmCjTHq3rAlxJeiV\ntCT5xYCwYzZtZkZq5jPP6CruNbO+L8iyLYHgLAgmsQKBgQD+Pw5nO2FR7arAMR4I\nK+bK2fFWfBTSkMRJrVqtbjr3LIjRGbGmqaF0HjR/8ZNxmyHBPmG35rfUw32NIAFc\nq9nqXVgeL07CXRadYaMoVys3mukMiQSnuycA5se5uNXk/8bulaudLX0Q605GDWto\n29W3CnWyuz1qNGRZHYZ0Duyk3QKBgQD5550WA/5Fwco2WosDqNBCetf3GZazwtKU\n46Dk1QEXeGYrw3p/o42+nNuawqqxbKhH/OJarir8oT4amXMaf60M3tRjj/DYRLx1\nWS9LkuU9bWSRFIpdJxC4BWi9IPCOsfbF0Cui9nD5dXCE6YwoQEXZ8OhE8+y+2fHU\nOULeYZVB8QKBgQDYtnrad3zuzry68aL9qB4jTj4uT7mX+hm2C3O9XLYaNfWw9ku9\nGd4rEgwB+rKJJYhSJZA5pwmO68s63csLaNhosoQHxp9FgP9jyvO90P9feEWpj6lO\nJ3KJjC02G10GwxaYCy+q3Dk8kLW5dHrXeHrkeJ/2Zy9kNaBLbaVLi+UeaQKBgQDo\n+GsRIxfgoBCLK019U9sSnsLGsSw02OLHuo07xvcFklBtbAa/BxIVKNXxKJlIXitj\nMPUz5Dpe2VK0KWmMwono/bKyPnYgp7OpEkNtCLx8z4Z5WdTDkq+bXi+OYS7hWDbd\nonuLqIMZi8ohnjfzLjfwPQ3LejqykStI1TjpZ79lgQKBgQDJAQe8Wnn2+QbWSbda\nNFGyG+hs7SkqqZmEQl3nA5kyAeOSsGtJG9tiLxDE52eMUM1iL6wNPQMDkROp3yRg\n7muJLMjiVeLFxXUyCXKj11W1VER5i16RsuWW3m5aGxumaXw4TJviJzT/dnwHe+x9\npWZqcBJfEUP6uTLSp3CmyEPcfA==\n-----CERTIFICATE-----")],insecureSkipVerify:!1,nextProtos:["h2"],serverNames:["www.example.com"]}),L={simple:new u.TF({protocol:{case:"simple",value:new u.lC({host:"",alternateHost:[],port:1080,timeout:BigInt(0)})}}),none:new u.TF({protocol:{case:"none",value:new u.YP({})}}),websocket:new u.TF({protocol:{case:"websocket",value:new u.If({host:"www.example.com",path:"/msg"})}}),quic:new u.TF({protocol:{case:"quic",value:new u.Yo({tls:Y})}}),shadowsocks:new u.TF({protocol:{case:"shadowsocks",value:new u.Vh({method:"CHACHA20-IETF-POLY1305",password:"password"})}}),obfshttp:new u.TF({protocol:{case:"obfsHttp",value:new u.Zl({host:"www.example.com",port:"443"})}}),shadowsocksr:new u.TF({protocol:{case:"shadowsocksr",value:new u.fW({method:"chacha20-ietf",obfs:"http_post",obfsparam:"#name=v",password:"password",port:"1080",protocol:"auth_aes128_sha1",protoparam:"",server:"127.0.0.1"})}}),vmess:new u.TF({protocol:{case:"vmess",value:new u.nB({alterId:"0",security:"chacha20-poly1305",uuid:"9d5031b6-4ef5-11ee-be56-0242ac120002"})}}),trojan:new u.TF({protocol:{case:"trojan",value:new u.N4({password:"password",peer:"peer"})}}),socks5:new u.TF({protocol:{case:"socks5",value:new u.Qz({hostname:"127.0.0.1",password:"password",user:"username"})}}),http:new u.TF({protocol:{case:"http",value:new u.dJ({password:"password",user:"username"})}}),direct:new u.TF({protocol:{case:"direct",value:new u.U$({})}}),yuubinsya:new u.TF({protocol:{case:"yuubinsya",value:new u.MY({encrypted:!0,password:"password",udpOverStream:!1})}}),tls:new u.TF({protocol:{case:"tls",value:Y}}),wireguard:new u.TF({protocol:{case:"wireguard",value:new u.To({endpoint:["10.0.0.2/32"],mtu:1500,idleTimeout:3,reserved:new Uint8Array([0,0,0]),secretKey:"SHVqHEGI7k2+OQ/oWMmWY2EQObbRQjRBdDPimh0h1WY=",peers:[{allowedIps:["0.0.0.0/0"],endpoint:"127.0.0.1:51820",publicKey:"SHVqHEGI7k2+OQ/oWMmWY2EQObbRQjRBdDPimh0h1WY="}]})}}),mux:new u.TF({protocol:{case:"mux",value:new u.fg({concurrency:8})}}),drop:new u.TF({protocol:{case:"drop",value:new u.Cw({})}}),vless:new u.TF({protocol:{case:"vless",value:new u.kY({uuid:"c48619fe-8f02-49e0-b9e9-edf763e17e21"})}}),grpc:new u.TF({protocol:{case:"grpc",value:new u.ZK({tls:Y})}}),http2:new u.TF({protocol:{case:"http2",value:new u.i5({concurrency:8})}}),reality:new u.TF({protocol:{case:"reality",value:new u.Fr({debug:!1,publicKey:"SHVqHEGI7k2+OQ/oWMmWY2EQObbRQjRBdDPimh0h1WY=",serverName:"127.0.0.1",shortId:"9d5031b6-4ef5-11ee-be56-0242ac120002"})}})}}}]);
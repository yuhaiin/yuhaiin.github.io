(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[23],{4667:function(e,a,t){Promise.resolve().then(t.bind(t,2115))},6756:function(e,a,t){"use strict";t.d(a,{P:function(){return l},t:function(){return c}});var o=t(7437),s=t(2265),n=t(4349),r=t(4051);let l=(0,s.createContext)({Info:e=>{},Error:e=>{}}),c=e=>{let{children:a}=e,[t,c]=(0,s.useState)({value:{},index:0}),i=(e,a)=>c(t=>({value:{...t.value,[t.index]:{text:e,type:a}},index:t.index+1}));return(0,o.jsxs)(l.Provider,{value:{Info:e=>{console.log(e),i(e,"success")},Error:e=>{console.error(e),i(e,"danger")}},children:[(0,o.jsx)(n.Z,{className:"p-3",position:"top-center",containerPosition:"fixed",style:{zIndex:1},children:Object.entries(t.value).map(e=>{let[a,s]=e;return(0,o.jsxs)(r.Z,{role:"alert","aria-live":"assertive",show:!0,bg:s.type,onClose:()=>{let e=t.value;delete e[a],c({...t,value:e}),console.log("close: "+a)},"aria-atomic":"true",delay:4e3,autohide:!0,animation:!0,children:[(0,o.jsxs)(r.Z.Header,{children:[(0,o.jsx)("strong",{className:"me-auto",children:"Notification"}),(0,o.jsx)("small",{className:"text-muted",children:"just now"})]}),(0,o.jsx)(r.Z.Body,{className:"text-center",children:s.text})]},"toast"+a)})}),a]})}},2115:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return m}});var o=t(7437),s=t(2265),n=t(8168),r=t(2389),l=t(9252),c=t(9317),i=t(6879),u=t(6756),d=t(8224),p=t(5299),v=t(7276);function m(){let[e,a]=(0,s.useState)({value:["simple"]}),[t,v]=(0,s.useState)({value:"simple"}),[m,w]=(0,s.useState)({value:""}),x=(0,s.useContext)(u.P);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.Z,{className:"mb-3",children:(0,o.jsxs)(r.Z,{variant:"flush",children:[(0,o.jsx)(r.Z.Item,{children:(0,o.jsxs)(l.Z,{children:[(0,o.jsx)(c.Z.Select,{value:t.value,onChange:e=>v({value:e.target.value}),children:Object.keys(h).map(e=>(0,o.jsx)("option",{value:e,children:e},e))}),(0,o.jsx)(i.Z,{variant:"outline-secondary",onClick:()=>{let o=e.value;o.push(t.value),a({value:o})},children:"Add"}),(0,o.jsx)(i.Z,{variant:"outline-secondary",onClick:async()=>{let a=new p.x({group:"template_group",name:"template_name",origin:p.h.manual});e.value.map(e=>{let t=h[e];t&&a.protocols.push(t)}),w({value:JSON.stringify(a.toJson({emitDefaultValues:!0}),null,"   ")})},children:"Generate"})]})}),e.value.map((t,s)=>(0,o.jsx)(r.Z.Item,{children:(0,o.jsxs)("div",{className:"d-sm-flex",children:[(0,o.jsx)("div",{className:"endpoint-name flex-grow-1 notranslate",children:t}),(0,o.jsx)(i.Z,{variant:"outline-danger",className:"notranslate",onClick:()=>{let t=e.value;t.splice(s,1),a({value:t})},children:"Delete"})]})},s))]})}),(0,o.jsx)(n.Z,{className:"mb-3",children:(0,o.jsxs)(n.Z.Body,{children:[(0,o.jsx)(c.Z.Control,{as:"textarea",style:{height:"500px",fontFamily:"monospace"},className:"mb-3",value:m.value,onChange:e=>w({value:e.target.value})}),(0,o.jsx)(i.Z,{className:"outline-primary me-2",onClick:async()=>{let{error:e}=await (0,d.Uo)("/node",{method:"PATCH",body:new p.x().fromJson(m.value).toBinary()});e?x.Error("Add new node failed ".concat(e.code,"| ").concat(await e.msg,".")):x.Info("Add New Node Successful")},children:"Save"})]})})]})}let w=new v.Gf({enable:!1,caCert:[new Uint8Array([0,1,2,3,4,5,6,7,8,9,0])],insecureSkipVerify:!1,nextProtos:["h2"],serverNames:["www.example.com"]}),h={simple:new v.TF({protocol:{case:"simple",value:new v.lC({host:"",alternateHost:[],port:1080,timeout:BigInt(0)})}}),none:new v.TF({protocol:{case:"none",value:new v.YP({})}}),websocket:new v.TF({protocol:{case:"websocket",value:new v.If({host:"www.example.com",path:"/msg"})}}),quic:new v.TF({protocol:{case:"quic",value:new v.Yo({tls:w})}}),shadowsocks:new v.TF({protocol:{case:"shadowsocks",value:new v.Vh({method:"CHACHA20-IETF-POLY1305",password:"password"})}}),obfshttp:new v.TF({protocol:{case:"obfsHttp",value:new v.Zl({host:"www.example.com",port:"443"})}}),shadowsocksr:new v.TF({protocol:{case:"shadowsocksr",value:new v.fW({method:"chacha20-ietf",obfs:"http_post",obfsparam:"#name=v",password:"password",port:"1080",protocol:"auth_aes128_sha1",protoparam:"",server:"127.0.0.1"})}}),vmess:new v.TF({protocol:{case:"vmess",value:new v.nB({alterId:"0",security:"chacha20-poly1305",uuid:"9d5031b6-4ef5-11ee-be56-0242ac120002"})}}),trojan:new v.TF({protocol:{case:"trojan",value:new v.N4({password:"password",peer:"peer"})}}),socks5:new v.TF({protocol:{case:"socks5",value:new v.Qz({hostname:"127.0.0.1:1080",password:"password",user:"username"})}}),http:new v.TF({protocol:{case:"http",value:new v.dJ({password:"password",user:"username"})}}),direct:new v.TF({protocol:{case:"direct",value:new v.U$({})}}),yuubinsya:new v.TF({protocol:{case:"yuubinsya",value:new v.MY({encrypted:!0,password:"password"})}}),tls:new v.TF({protocol:{case:"tls",value:new v.Gf(w)}}),wireguard:new v.TF({protocol:{case:"wireguard",value:new v.To({endpoint:["10.0.0.2/32"],mtu:1500,idleTimeout:3,reserved:new Uint8Array([0,0,0]),secretKey:"SHVqHEGI7k2+OQ/oWMmWY2EQObbRQjRBdDPimh0h1WY=",peers:[{allowedIps:["0.0.0.0/0"],endpoint:"127.0.0.1:51820",publicKey:"SHVqHEGI7k2+OQ/oWMmWY2EQObbRQjRBdDPimh0h1WY="}]})}}),mux:new v.TF({protocol:{case:"mux",value:new v.fg({concurrency:8})}}),drop:new v.TF({protocol:{case:"drop",value:new v.Cw({})}}),vless:new v.TF({protocol:{case:"vless",value:new v.kY({uuid:"c48619fe-8f02-49e0-b9e9-edf763e17e21"})}})}},9252:function(e,a,t){"use strict";t.d(a,{Z:function(){return p}});var o=t(6480),s=t.n(o),n=t(2265),r=t(2865),l=t(6183),c=t(1805),i=t(7437);let u=n.forwardRef((e,a)=>{let{className:t,bsPrefix:o,as:n="span",...l}=e;return o=(0,r.vE)(o,"input-group-text"),(0,i.jsx)(n,{ref:a,className:s()(t,o),...l})});u.displayName="InputGroupText";let d=n.forwardRef((e,a)=>{let{bsPrefix:t,size:o,hasValidation:l,className:u,as:d="div",...p}=e;t=(0,r.vE)(t,"input-group");let v=(0,n.useMemo)(()=>({}),[]);return(0,i.jsx)(c.Z.Provider,{value:v,children:(0,i.jsx)(d,{ref:a,...p,className:s()(u,t,o&&"".concat(t,"-").concat(o),l&&"has-validation")})})});d.displayName="InputGroup";var p=Object.assign(d,{Text:u,Radio:e=>(0,i.jsx)(u,{children:(0,i.jsx)(l.Z,{type:"radio",...e})}),Checkbox:e=>(0,i.jsx)(u,{children:(0,i.jsx)(l.Z,{type:"checkbox",...e})})})},1805:function(e,a,t){"use strict";let o=t(2265).createContext(null);o.displayName="InputGroupContext",a.Z=o},2389:function(e,a,t){"use strict";t.d(a,{Z:function(){return w}});var o=t(6480),s=t.n(o),n=t(2265);t(5858);var r=t(2540),l=t(7841),c=t(2865),i=t(9476),u=t(9396),d=t(5450),p=t(7437);let v=n.forwardRef((e,a)=>{let{bsPrefix:t,active:o,disabled:n,eventKey:r,className:l,variant:v,action:m,as:w,...h}=e;t=(0,c.vE)(t,"list-group-item");let[x,f]=(0,u.v)({key:(0,d.h)(r,h.href),active:o,...h}),j=(0,i.Z)(e=>{if(n){e.preventDefault(),e.stopPropagation();return}x.onClick(e)});n&&void 0===h.tabIndex&&(h.tabIndex=-1,h["aria-disabled"]=!0);let y=w||(m?h.href?"a":"button":"div");return(0,p.jsx)(y,{ref:a,...h,...x,onClick:j,className:s()(l,t,f.isActive&&"active",n&&"disabled",v&&"".concat(t,"-").concat(v),m&&"".concat(t,"-action"))})});v.displayName="ListGroupItem";let m=n.forwardRef((e,a)=>{let t;let{className:o,bsPrefix:n,variant:i,horizontal:u,numbered:d,as:v="div",...m}=(0,r.Ch)(e,{activeKey:"onSelect"}),w=(0,c.vE)(n,"list-group");return u&&(t=!0===u?"horizontal":"horizontal-".concat(u)),(0,p.jsx)(l.Z,{ref:a,...m,as:v,className:s()(o,w,i&&"".concat(w,"-").concat(i),t&&"".concat(w,"-").concat(t),d&&"".concat(w,"-numbered"))})});m.displayName="ListGroup";var w=Object.assign(m,{Item:v})}},function(e){e.O(0,[465,149,300,634,860,971,69,744],function(){return e(e.s=4667)}),_N_E=e.O()}]);
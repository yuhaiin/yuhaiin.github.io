(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[23],{4667:function(e,t,s){Promise.resolve().then(s.bind(s,2115))},6756:function(e,t,s){"use strict";s.d(t,{P:function(){return l},t:function(){return i}});var a=s(7437),n=s(2265),o=s(4349),r=s(4051);let l=(0,n.createContext)({Info:e=>{},Error:e=>{}}),i=e=>{let{children:t}=e,[s,i]=(0,n.useState)({value:{},index:0}),c=(e,t)=>i(s=>({value:{...s.value,[s.index]:{text:e,type:t}},index:s.index+1}));return(0,a.jsxs)(l.Provider,{value:{Info:e=>{console.log(e),c(e,"success")},Error:e=>{console.error(e),c(e,"danger")}},children:[(0,a.jsx)(o.Z,{className:"p-3",position:"top-center",containerPosition:"fixed",style:{zIndex:1},children:Object.entries(s.value).map(e=>{let[t,n]=e;return(0,a.jsxs)(r.Z,{role:"alert","aria-live":"assertive",show:!0,bg:n.type,onClose:()=>{let e=s.value;delete e[t],i({...s,value:e}),console.log("close: "+t)},"aria-atomic":"true",delay:4e3,autohide:!0,animation:!0,children:[(0,a.jsxs)(r.Z.Header,{children:[(0,a.jsx)("strong",{className:"me-auto",children:"Notification"}),(0,a.jsx)("small",{className:"text-muted",children:"just now"})]}),(0,a.jsx)(r.Z.Body,{className:"text-center",children:n.text})]},"toast"+t)})}),t]})}},2115:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return v}});var a=s(7437),n=s(2265),o=s(8168),r=s(2389),l=s(9252),i=s(9317),c=s(6879),u=s(6756),d=s(8224),p=s(2520);let m=p.yE.point.point,h=p.yE.point.origin;function v(){let[e,t]=(0,n.useState)({value:["simple"]}),[s,v]=(0,n.useState)({value:"simple"}),[x,w]=(0,n.useState)({value:""}),j=(0,n.useContext)(u.P);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.Z,{className:"mb-3",children:(0,a.jsxs)(r.Z,{variant:"flush",children:[(0,a.jsx)(r.Z.Item,{children:(0,a.jsxs)(l.Z,{children:[(0,a.jsx)(i.Z.Select,{value:s.value,onChange:e=>v({value:e.target.value}),children:Object.keys(f).map(e=>(0,a.jsx)("option",{value:e,children:e},e))}),(0,a.jsx)(c.Z,{variant:"outline-secondary",onClick:()=>{let a=e.value;a.push(s.value),t({value:a})},children:"Add"}),(0,a.jsx)(c.Z,{variant:"outline-secondary",onClick:async()=>{let t=new p.yE.point.point({group:"template_group",name:"template_name",origin:h.manual});e.value.map(e=>{let s=f[e];s&&t.protocols.push(s)}),w({value:JSON.stringify(m.toObject(t,d.Ts),null,"   ")})},children:"Generate"})]})}),e.value.map((s,n)=>(0,a.jsx)(r.Z.Item,{children:(0,a.jsxs)("div",{className:"d-sm-flex",children:[(0,a.jsx)("div",{className:"endpoint-name flex-grow-1 notranslate",children:s}),(0,a.jsx)(c.Z,{variant:"outline-danger",className:"notranslate",onClick:()=>{let s=e.value;s.splice(n,1),t({value:s})},children:"Delete"})]})},n))]})}),(0,a.jsx)(o.Z,{className:"mb-3",children:(0,a.jsxs)(o.Z.Body,{children:[(0,a.jsx)(i.Z.Control,{as:"textarea",style:{height:"500px",fontFamily:"monospace"},className:"mb-3",value:x.value,onChange:e=>w({value:e.target.value})}),(0,a.jsx)(c.Z,{className:"outline-primary me-2",onClick:async()=>{let{error:e}=await (0,d.Uo)("/node",{method:"PATCH",body:m.encode(m.fromObject(JSON.parse(x.value))).finish()});e?j.Error("Add new node failed ".concat(e.code,"| ").concat(await e.msg,".")):j.Info("Add New Node Successful")},children:"Save"})]})})]})}let x=new p.yE.protocol.tls_config({enable:!1,ca_cert:[new Uint8Array([0,1,2,3,4,5,6,7,8,9,0])],insecure_skip_verify:!1,next_protos:["h2"],server_names:["www.example.com"]}),f={simple:{simple:{host:"",alternate_host:[],port:1080,timeout:0,tls:void 0}},none:{none:{}},websocket:{websocket:{host:"www.example.com",path:"/msg",tls_enabled:!1}},quic:{quic:{tls:x}},shadowsocks:{shadowsocks:{method:"CHACHA20-IETF-POLY1305",password:"password"}},obfshttp:{obfs_http:{host:"www.example.com",port:"443"}},shadowsocksr:{shadowsocksr:{method:"chacha20-ietf",obfs:"http_post",obfsparam:"#name=v",password:"password",port:"1080",protocol:"auth_aes128_sha1",protoparam:"",server:"127.0.0.1"}},vmess:{vmess:{alter_id:"0",security:"chacha20-poly1305",uuid:"9d5031b6-4ef5-11ee-be56-0242ac120002"}},trojan:{trojan:{password:"password",peer:"peer"}},socks5:{socks5:{hostname:"127.0.0.1:1080",password:"password",user:"username"}},http:{http:{password:"password",user:"username"}},direct:{direct:{}},yuubinsya:{yuubinsya:{encrypted:!0,password:"password"}},tls:{tls:x},wireguard:{wireguard:{endpoint:["10.0.0.2/32"],mtu:1500,idle_timeout:3,reserved:new Uint8Array([0,0,0]),secret_key:"SHVqHEGI7k2+OQ/oWMmWY2EQObbRQjRBdDPimh0h1WY=",peers:[{allowed_ips:["0.0.0.0/0"],endpoint:"127.0.0.1:51820",public_key:"SHVqHEGI7k2+OQ/oWMmWY2EQObbRQjRBdDPimh0h1WY="}]}},mux:{mux:{concurrency:8}},drop:{drop:{}},vless:{vless:{uuid:"c48619fe-8f02-49e0-b9e9-edf763e17e21"}}}},9252:function(e,t,s){"use strict";s.d(t,{Z:function(){return p}});var a=s(710),n=s.n(a),o=s(2265),r=s(2865),l=s(6183),i=s(1805),c=s(7437);let u=o.forwardRef((e,t)=>{let{className:s,bsPrefix:a,as:o="span",...l}=e;return a=(0,r.vE)(a,"input-group-text"),(0,c.jsx)(o,{ref:t,className:n()(s,a),...l})});u.displayName="InputGroupText";let d=o.forwardRef((e,t)=>{let{bsPrefix:s,size:a,hasValidation:l,className:u,as:d="div",...p}=e;s=(0,r.vE)(s,"input-group");let m=(0,o.useMemo)(()=>({}),[]);return(0,c.jsx)(i.Z.Provider,{value:m,children:(0,c.jsx)(d,{ref:t,...p,className:n()(u,s,a&&"".concat(s,"-").concat(a),l&&"has-validation")})})});d.displayName="InputGroup";var p=Object.assign(d,{Text:u,Radio:e=>(0,c.jsx)(u,{children:(0,c.jsx)(l.Z,{type:"radio",...e})}),Checkbox:e=>(0,c.jsx)(u,{children:(0,c.jsx)(l.Z,{type:"checkbox",...e})})})},1805:function(e,t,s){"use strict";let a=s(2265).createContext(null);a.displayName="InputGroupContext",t.Z=a},2389:function(e,t,s){"use strict";s.d(t,{Z:function(){return v}});var a=s(710),n=s.n(a),o=s(2265);s(5858);var r=s(2540),l=s(7841),i=s(2865),c=s(9476),u=s(9396),d=s(5450),p=s(7437);let m=o.forwardRef((e,t)=>{let{bsPrefix:s,active:a,disabled:o,eventKey:r,className:l,variant:m,action:h,as:v,...x}=e;s=(0,i.vE)(s,"list-group-item");let[f,w]=(0,u.v)({key:(0,d.h)(r,x.href),active:a,...x}),j=(0,c.Z)(e=>{if(o){e.preventDefault(),e.stopPropagation();return}f.onClick(e)});o&&void 0===x.tabIndex&&(x.tabIndex=-1,x["aria-disabled"]=!0);let y=v||(h?x.href?"a":"button":"div");return(0,p.jsx)(y,{ref:t,...x,...f,onClick:j,className:n()(l,s,w.isActive&&"active",o&&"disabled",m&&"".concat(s,"-").concat(m),h&&"".concat(s,"-action"))})});m.displayName="ListGroupItem";let h=o.forwardRef((e,t)=>{let s;let{className:a,bsPrefix:o,variant:c,horizontal:u,numbered:d,as:m="div",...h}=(0,r.Ch)(e,{activeKey:"onSelect"}),v=(0,i.vE)(o,"list-group");return u&&(s=!0===u?"horizontal":"horizontal-".concat(u)),(0,p.jsx)(l.Z,{ref:t,...h,as:m,className:n()(a,v,c&&"".concat(v,"-").concat(c),s&&"".concat(v,"-").concat(s),d&&"".concat(v,"-numbered"))})});h.displayName="ListGroup";var v=Object.assign(h,{Item:m})}},function(e){e.O(0,[644,149,300,634,289,971,69,744],function(){return e(e.s=4667)}),_N_E=e.O()}]);
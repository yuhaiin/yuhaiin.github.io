(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[23],{4667:function(e,t,a){Promise.resolve().then(a.bind(a,1190))},6347:function(e,t,a){"use strict";a.d(t,{P:function(){return l},t:function(){return i}});var s=a(7437),n=a(2265),o=a(8215),r=a(9023);let l=(0,n.createContext)({Info:e=>{},Error:e=>{}}),i=e=>{let{children:t}=e,[a,i]=(0,n.useState)({value:{},index:0}),c=(e,t)=>{i(a=>(a.value[a.index]={text:e,type:t},a.index++,{...a}))};return(0,s.jsxs)(l.Provider,{value:{Info:e=>{console.log(e),c(e,"success")},Error:e=>{console.error(e),c(e,"danger")}},children:[(0,s.jsx)(r.Z,{className:"p-3",position:"top-center",containerPosition:"fixed",style:{zIndex:1},children:Object.entries(a.value).map(e=>{let[t,n]=e;return(0,s.jsxs)(o.Z,{role:"alert","aria-live":"assertive",show:!0,bg:n.type,onClose:()=>{let e=a.value;delete e[t],i({...a,value:e}),console.log("close: "+t)},"aria-atomic":"true",delay:4e3,autohide:!0,animation:!0,children:[(0,s.jsxs)(o.Z.Header,{children:[(0,s.jsx)("strong",{className:"me-auto",children:"Notification"}),(0,s.jsx)("small",{className:"text-muted",children:"just now"})]}),(0,s.jsx)(o.Z.Body,{className:"text-center",children:n.text})]},"toast"+t)})}),t]})}},1190:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return v}});var s=a(7437),n=a(2265),o=a(4297),r=a(733),l=a(3518),i=a(5503),c=a(3508),u=a(6347),d=a(6934),p=a(8640);let m=p.yE.point.point,h=p.yE.point.origin;function v(){let[e,t]=(0,n.useState)({value:["simple"]}),[a,v]=(0,n.useState)({value:"simple"}),[x,w]=(0,n.useState)({value:""}),j=(0,n.useContext)(u.P);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l.Z,{className:"mb-3",children:(0,s.jsxs)(i.Z,{variant:"flush",children:[(0,s.jsx)(i.Z.Item,{children:(0,s.jsxs)(c.Z,{children:[(0,s.jsx)(r.Z.Select,{value:a.value,onChange:e=>v({value:e.target.value}),children:Object.keys(f).map(e=>(0,s.jsx)("option",{value:e,children:e}))}),(0,s.jsx)(o.Z,{variant:"outline-secondary",onClick:()=>{let s=e.value;s.push(a.value),t({value:s})},children:"Add"}),(0,s.jsx)(o.Z,{variant:"outline-secondary",onClick:async()=>{let t=new p.yE.point.point({group:"template_group",name:"template_name",origin:h.manual});e.value.map(e=>{void 0!==f[e]&&t.protocols.push(f[e])}),w({value:JSON.stringify(m.toObject(t,d.Ts),null,"   ")})},children:"Generate"})]})}),e.value.map((a,n)=>(0,s.jsx)(i.Z.Item,{children:(0,s.jsxs)("div",{className:"d-sm-flex",children:[(0,s.jsx)("div",{className:"endpoint-name flex-grow-1 notranslate",children:a}),(0,s.jsx)(o.Z,{variant:"outline-danger",className:"notranslate",onClick:()=>{let a=e.value;a.splice(n,1),t({value:a})},children:"Delete"})]})},n))]})}),(0,s.jsx)(l.Z,{className:"mb-3",children:(0,s.jsxs)(l.Z.Body,{children:[(0,s.jsx)(r.Z.Control,{as:"textarea",style:{height:"500px",fontFamily:"monospace"},className:"mb-3",value:x.value,onChange:e=>w({value:e.target.value})}),(0,s.jsx)(o.Z,{className:"outline-primary me-2",onClick:async()=>{let{error:e}=await (0,d.Uo)("/node",{method:"PATCH",body:m.encode(m.fromObject(JSON.parse(x.value))).finish()});void 0!==e?j.Error("Add new node failed ".concat(e.code,"| ").concat(await e.msg,".")):j.Info("Add New Node Successful")},children:"Save"})]})})]})}let x=new p.yE.protocol.tls_config({enable:!1,ca_cert:[new Uint8Array([0,1,2,3,4,5,6,7,8,9,0])],insecure_skip_verify:!1,next_protos:["h2"],server_names:["www.example.com"]}),f={simple:{simple:{host:"",alternate_host:[],port:1080,packet_conn_direct:!1,timeout:0,tls:x}},none:{none:{}},websocket:{websocket:{host:"www.example.com",path:"/msg",tls_enabled:!1}},quic:{quic:{tls:x}},shadowsocks:{shadowsocks:{method:"CHACHA20-IETF-POLY1305",password:"password"}},obfshttp:{obfs_http:{host:"www.example.com",port:"443"}},shadowsocksr:{shadowsocksr:{method:"chacha20-ietf",obfs:"http_post",obfsparam:"#name=v",password:"password",port:"1080",protocol:"auth_aes128_sha1",protoparam:"",server:"127.0.0.1"}},vmess:{vmess:{alter_id:"0",security:"chacha20-poly1305",uuid:"9d5031b6-4ef5-11ee-be56-0242ac120002"}},trojan:{trojan:{password:"password",peer:"peer"}},socks5:{socks5:{hostname:"127.0.0.1:1080",password:"password",user:"username"}},http:{http:{password:"password",user:"username"}},direct:{direct:{}},yuubinsya:{yuubinsya:{encrypted:!0,password:"password"}}}},3508:function(e,t,a){"use strict";var s=a(4440),n=a.n(s),o=a(2265),r=a(499),l=a(6376),i=a(9062),c=a(7447),u=a(7437);let d=(0,r.Z)("input-group-text",{Component:"span"}),p=o.forwardRef((e,t)=>{let{bsPrefix:a,size:s,hasValidation:r,className:i,as:d="div",...p}=e;a=(0,l.vE)(a,"input-group");let m=(0,o.useMemo)(()=>({}),[]);return(0,u.jsx)(c.Z.Provider,{value:m,children:(0,u.jsx)(d,{ref:t,...p,className:n()(i,a,s&&"".concat(a,"-").concat(s),r&&"has-validation")})})});p.displayName="InputGroup",t.Z=Object.assign(p,{Text:d,Radio:e=>(0,u.jsx)(d,{children:(0,u.jsx)(i.Z,{type:"radio",...e})}),Checkbox:e=>(0,u.jsx)(d,{children:(0,u.jsx)(i.Z,{type:"checkbox",...e})})})},7447:function(e,t,a){"use strict";var s=a(2265);let n=s.createContext(null);n.displayName="InputGroupContext",t.Z=n},5503:function(e,t,a){"use strict";a.d(t,{Z:function(){return v}});var s=a(4440),n=a.n(s),o=a(2265);a(267);var r=a(4061),l=a(7194),i=a(6376),c=a(5113),u=a(1577),d=a(1066),p=a(7437);let m=o.forwardRef((e,t)=>{let{bsPrefix:a,active:s,disabled:o,eventKey:r,className:l,variant:m,action:h,as:v,...x}=e;a=(0,i.vE)(a,"list-group-item");let[f,w]=(0,u.v)({key:(0,d.h)(r,x.href),active:s,...x}),j=(0,c.Z)(e=>{if(o){e.preventDefault(),e.stopPropagation();return}f.onClick(e)});o&&void 0===x.tabIndex&&(x.tabIndex=-1,x["aria-disabled"]=!0);let y=v||(h?x.href?"a":"button":"div");return(0,p.jsx)(y,{ref:t,...x,...f,onClick:j,className:n()(l,a,w.isActive&&"active",o&&"disabled",m&&"".concat(a,"-").concat(m),h&&"".concat(a,"-action"))})});m.displayName="ListGroupItem";let h=o.forwardRef((e,t)=>{let a;let{className:s,bsPrefix:o,variant:c,horizontal:u,numbered:d,as:m="div",...h}=(0,r.Ch)(e,{activeKey:"onSelect"}),v=(0,i.vE)(o,"list-group");return u&&(a=!0===u?"horizontal":"horizontal-".concat(u)),(0,p.jsx)(l.Z,{ref:t,...h,as:m,className:n()(s,v,c&&"".concat(v,"-").concat(c),a&&"".concat(v,"-").concat(a),d&&"".concat(v,"-numbered"))})});h.displayName="ListGroup";var v=Object.assign(h,{Item:m})}},function(e){e.O(0,[359,441,331,895,419,971,596,744],function(){return e(e.s=4667)}),_N_E=e.O()}]);
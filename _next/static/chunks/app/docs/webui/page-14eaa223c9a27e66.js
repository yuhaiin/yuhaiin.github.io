(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[214],{9771:function(e,t,n){Promise.resolve().then(n.bind(n,6660))},4971:function(e,t,n){"use strict";n.d(t,{$f:function(){return f},Mj:function(){return x},Ti:function(){return l},U9:function(){return y},XE:function(){return g},YO:function(){return s},Z5:function(){return u},dn:function(){return i},fG:function(){return o},gU:function(){return r},gW:function(){return p},q$:function(){return v},qQ:function(){return c},r:function(){return h},rQ:function(){return a},zP:function(){return m}});var o="",c="https://raw.githubusercontent.com/yuhaiin/kitte/main/yuhaiin/remote.conf",a="https://clients3.google.com/generate_204",r="dns.nextdns.io:853",s=!0,l="http://ip.sb",u="stun.syncthing.net:3478",i="stun.nextcloud.com:443";let d=()=>{let e=localStorage.getItem("api_url");o=null!==e?e:"",null!==(e=localStorage.getItem("remote_bypass"))&&(c=e),null!==(e=localStorage.getItem("latency_http_url"))&&(a=e),null!==(e=localStorage.getItem("latency_dns_url"))&&(r=e),null!==(e=localStorage.getItem("latency_ipv6"))&&(s="true"===e),null!==(e=localStorage.getItem("latency_ip_url"))&&(l=e),null!==(e=localStorage.getItem("latency_stun_url"))&&(u=e),null!==(e=localStorage.getItem("latency_stun_tcp_url"))&&(i=e)},h=e=>{S("api_url",e)},m=e=>{S("remote_bypass",e)},f=e=>{S("latency_dns_url",e)},g=e=>{S("latency_http_url",e)},p=e=>{S("latency_ipv6",e.toString())},y=e=>{S("latency_ip_url",e)},x=e=>{S("latency_stun_url",e)},v=e=>{S("latency_stun_tcp_url",e)},S=(e,t)=>{""===t?localStorage.removeItem(e):localStorage.setItem(e,t),d()};d()},879:function(e,t,n){"use strict";n.d(t,{D4:function(){return r},OV:function(){return s},Uo:function(){return l},o5:function(){return u}});var o=n(4971),c=n(4050),a=n(7764);function r(e,t,n,r){return s=>r?(0,c.d)(e,r):fetch("".concat(o.fG).concat(s),{method:t,body:n}).then(async t=>{if(!t.ok)throw{code:t.status,msg:t.statusText,raw:t.text()};return(0,a.h4)(e,new Uint8Array(await t.arrayBuffer()))})}function s(e,t,n,c){return r=>fetch("".concat(o.fG).concat(r),{method:n,body:c}).then(async n=>{if(!n.ok)throw{code:n.status,msg:n.statusText,raw:n.text()};return t((0,a.h4)(e,new Uint8Array(await n.arrayBuffer())))})}let l=async(e,t)=>{let n=await fetch("".concat(o.fG).concat(e),{method:void 0!==t.method?t.method:"POST",body:t.body});return n.ok?void 0===t.process?{}:{data:t.process(n)}:{error:{code:n.status,msg:n.text()}}};function u(e,t,n){return(c,r)=>{let s,{next:l}=r,u=new URL(""!==o.fG?o.fG:window.location.toString());u.pathname=c,u.protocol="https:"===u.protocol?"wss:":"ws:";let i=!1,d=()=>{i||(console.log("connecting to: ".concat(u)),(s=new WebSocket(u)).binaryType="arraybuffer",s.addEventListener("open",t=>{console.log("connect to: ".concat(u,", event type: ").concat(t.type)),null==s||s.send(e)}),s.addEventListener("message",e=>{let o=(0,a.h4)(t,new Uint8Array(e.data));l(null,e=>n(e,o))}),s.addEventListener("error",e=>{let t="websocket have some error";l({msg:t,code:500}),console.log(t,e.type)}),s.addEventListener("close",e=>{console.log("websocket closed, code: "+e.code),l(null,void 0),i||(console.log("reconnect after 1 seconds"),setTimeout(d,1e3))}))};return d(),()=>{i=!0,void 0!==s&&(console.log("close: ".concat(c)),s.close(),s=void 0)}}}},6601:function(e,t,n){"use strict";n.d(t,{J:function(){return s}});var o=n(7437);n(2265);var c=n(7420),a=n(358),r=n(6712);let s=e=>(0,o.jsxs)(c.Z.Group,{as:a.Z,className:"mb-2",children:[(0,o.jsx)(c.Z.Label,{column:!0,sm:2,children:e.label}),(0,o.jsx)(r.Z,{sm:10,className:"d-flex align-items-center",children:(0,o.jsx)(c.Z.Check,{className:"d-flex align-items-center",type:"switch",checked:e.checked,onChange:()=>e.onChange()})})]})},1159:function(e,t,n){"use strict";n.d(t,{P:function(){return s},t:function(){return l}});var o=n(7437),c=n(2265),a=n(8620),r=n(1529);let s=(0,c.createContext)({Info:e=>{},Error:e=>{}}),l=e=>{let{children:t}=e,[n,l]=(0,c.useState)({value:{},index:0}),u=(e,t)=>l(n=>({value:{...n.value,[n.index]:{text:e,type:t}},index:n.index+1}));return(0,o.jsxs)(s.Provider,{value:{Info:e=>{console.log(e),u(e,"success")},Error:e=>{console.error(e),u(e,"danger")}},children:[(0,o.jsx)(a.Z,{className:"p-3",position:"top-center",containerPosition:"fixed",style:{zIndex:999999},children:Object.entries(n.value).map(e=>{let[t,c]=e;return(0,o.jsxs)(r.Z,{role:"alert","aria-live":"assertive",show:!0,bg:c.type,onClose:()=>{let e=n.value;delete e[t],l({...n,value:e}),console.log("close: "+t)},"aria-atomic":"true",delay:4e3,autohide:!0,animation:!0,children:[(0,o.jsxs)(r.Z.Header,{children:[(0,o.jsx)("strong",{className:"me-auto",children:"Notification"}),(0,o.jsx)("small",{className:"text-muted",children:"just now"})]}),(0,o.jsx)(r.Z.Body,{className:"text-center",children:c.text})]},"toast"+t)})}),t]})}},6660:function(e,t,n){"use strict";n.r(t);var o=n(7437),c=n(2265),a=n(7420),r=n(358),s=n(6712),l=n(2808),u=n(2514),i=n(7185),d=n(4971),h=n(1159),m=n(6601),f=n(879),g=n(6878),p=n(8537),y=n(3168);let x=e=>(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(a.Z.Group,{as:r.Z,className:"mb-1 ms-1",children:(0,o.jsxs)(r.Z,{className:"g-2",children:[(0,o.jsx)(a.Z.Label,{column:!0,sm:2,className:"nowrap",children:e.title}),(0,o.jsx)(s.Z,{sm:6,children:(0,o.jsx)(a.Z.Control,{value:e.value,onChange:t=>e.onChange(t.target.value),placeholder:e.placeholder})}),(0,o.jsx)(s.Z,{sm:2,children:(0,o.jsxs)(l.Z,{disabled:e.loading,onClick:()=>e.onClick(),variant:"outline-primary",children:[e.buttonText?e.buttonText:"Save",e.loading&&(0,o.jsx)(u.Z,{size:"sm",animation:"border",variant:"primary"})]})})]})})});t.default=function(){let e=(0,c.useContext)(h.P),[t,n]=(0,c.useState)(d.fG),[a,r]=(0,c.useState)(d.qQ),[s,l]=(0,c.useState)(!1),[u,v]=(0,c.useState)(d.rQ),[S,j]=(0,c.useState)(d.gU),[_,b]=(0,c.useState)(d.YO),[I,C]=(0,c.useState)(d.Ti),[U,T]=(0,c.useState)(d.Z5),[w,k]=(0,c.useState)(d.dn);return(0,o.jsxs)(o.Fragment,{children:[" ",(0,o.jsx)(i.Z,{className:"mb-3",children:(0,o.jsxs)(i.Z.Body,{children:[(0,o.jsx)(x,{title:"API Host",value:t,onChange:n,placeholder:"http://127.0.0.1:50051",onClick:()=>{(0,d.r)(t),""!==t?e.Info("Set API Url: ".concat(t," success.")):e.Info("Remove API Url success."),console.log(t)},buttonText:"Save"}),(0,o.jsx)(x,{title:"Remote Rule",value:a,onChange:r,buttonText:"Update",loading:s,onClick:()=>{(0,d.zP)(a),""!==a&&(l(!0),(0,f.Uo)("/bypass",{body:(0,g.O)(y.mV,(0,p.U)(y.mV,{value:a}))}).then(async t=>{let{error:n}=t;void 0!==n?e.Error("update remote rule ".concat(a," failed, ").concat(n.code,"| ").concat(await n.msg)):e.Info("update remote rule ".concat(a," success")),l(!1)}))}}),(0,o.jsx)("hr",{}),(0,o.jsx)(i.Z.Title,{className:"mb-2",children:"Latency"}),(0,o.jsx)(m.J,{label:"IPv6",checked:_,onChange:()=>{b(!_),(0,d.gW)(!_)}}),(0,o.jsx)(x,{title:"HTTP(tcp)",placeholder:"https://clients3.google.com/generate_204",value:u,onChange:v,onClick:()=>{(0,d.XE)(u),""!==u?e.Info("Set Latency HTTP Url: ".concat(u," success.")):e.Info("Remove Latency HTTP Url success.")}}),(0,o.jsx)(x,{title:"DOQ(udp)",placeholder:"dns.adguard.com:853",value:S,onChange:j,onClick:()=>{(0,d.$f)(S),""!==S?e.Info("Set Latency DNS: ".concat(S," success.")):e.Info("Remove Latency DNS success.")}}),(0,o.jsx)(x,{title:"IP",placeholder:"http://ip.sb",value:I,onChange:C,onClick:()=>{(0,d.U9)(I),""!==I?e.Info("Set Latency IP Url: ".concat(I," success.")):e.Info("Remove Latency IP Url success.")}}),(0,o.jsx)(x,{title:"STUN",placeholder:"stun.syncthing.net:3478",value:U,onChange:T,onClick:()=>{(0,d.Mj)(U),""!==U?e.Info("Set Latency STUN Url: ".concat(U," success.")):e.Info("Remove Latency STUN Url success.")}}),(0,o.jsx)(x,{title:"STUN TCP",placeholder:"stun.syncthing.net:3478",value:w,onChange:k,onClick:()=>{(0,d.q$)(w),""!==w?e.Info("Set Latency STUN TCP Url: ".concat(w," success.")):e.Info("Remove Latency STUN TCP Url success.")}})]})})]})}}},function(e){e.O(0,[823,113,262,971,23,744],function(){return e(e.s=9771)}),_N_E=e.O()}]);
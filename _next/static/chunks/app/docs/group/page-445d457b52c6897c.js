(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[962],{9989:function(e,t,n){Promise.resolve().then(n.bind(n,5752))},4337:function(e,t,n){"use strict";let a;n.d(t,{f:function(){return s},r:function(){return c}});var s="";let c=e=>{""!==e?localStorage.setItem("api_url",e):localStorage.removeItem("api_url"),s=e};s=null!==(a=localStorage.getItem("api_url"))?a:""},1308:function(e,t,n){"use strict";var a=n(7437),s=n(4860),c=n(1375),o=n.n(c);t.Z=function(e){return(0,a.jsxs)("div",{className:"z-1090 d-flex flex-column justify-content-center align-items-center",style:{height:"100px"},children:[void 0!==e.children&&(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(o(),{className:"p2",statusCode:void 0!==e.code?e.code:500,title:e.children})}),(0,a.jsx)("div",{className:"p2",children:(0,a.jsx)(s.Z,{})})]})}},6934:function(e,t,n){"use strict";n.d(t,{$7:function(){return c},Q3:function(){return o},hW:function(){return s}});var a=n(4337);function s(e){return t=>fetch("".concat(a.f).concat(t)).then(async t=>{if(!t.ok)throw{code:t.status,msg:t.statusText,raw:t.text()};return e.decode(new Uint8Array(await t.arrayBuffer()))})}let c=e=>fetch("".concat(a.f).concat(e)).then(e=>{if(!e.ok)throw{code:e.status,msg:e.statusText,raw:e.text()};return e.json()}),o=e=>fetch("".concat(a.f).concat(e)).then(async e=>{if(!e.ok)throw{code:e.status,msg:e.statusText,raw:e.text()};return JSON.stringify(await e.json(),null,"  ")})},6347:function(e,t,n){"use strict";n.d(t,{P:function(){return l},t:function(){return r}});var a=n(7437),s=n(2265),c=n(8215),o=n(9023);let l=(0,s.createContext)({Info:e=>{},Error:e=>{}}),r=e=>{let{children:t}=e,[n,r]=(0,s.useState)({value:{},index:0}),i=(e,t)=>{r(n=>(n.value[n.index]={text:e,type:t},n.index++,{...n}))};return(0,a.jsxs)(l.Provider,{value:{Info:e=>{console.log(e),i(e,"success")},Error:e=>{console.error(e),i(e,"danger")}},children:[(0,a.jsx)(o.Z,{className:"p-3",position:"top-center",containerPosition:"fixed",style:{zIndex:1},children:Object.entries(n.value).map(e=>{let[t,s]=e;return(0,a.jsxs)(c.Z,{role:"alert","aria-live":"assertive",show:!0,bg:s.type,onClose:()=>{let e=n.value;delete e[t],r({...n,value:e}),console.log("close: "+t)},"aria-atomic":"true",delay:4e3,autohide:!0,animation:!0,children:[(0,a.jsxs)(c.Z.Header,{children:[(0,a.jsx)("strong",{className:"me-auto",children:"Notification"}),(0,a.jsx)("small",{className:"text-muted",children:"just now"})]}),(0,a.jsx)(c.Z.Body,{className:"text-center",children:s.text})]},"toast"+t)})}),t]})}},5752:function(e,t,n){"use strict";n.r(t);var a=n(7437),s=n(2265),c=n(1329),o=n(4665),l=n(3572),r=n(4297),i=n(8036),d=n(3518),u=n(5503),h=n(6879),x=n(4860),m=n(4337),v=n(6168),f=n(1308),j=n(6347),p=n(713),g=n(6934),y=n(1375),Z=n.n(y);t.default=function(){let e=(0,s.useContext)(j.P),[t,n]=(0,s.useState)(""),[y,N]=(0,s.useState)({value:""}),[w,b]=(0,s.useState)({hash:""}),{data:k,error:C,isLoading:S}=(0,p.ZP)("/grouplist",g.$7),{data:P,mutate:T}=(0,p.ZP)(""!==y.value?"/group?name=".concat(y.value):null,g.$7),[I,O]=(0,s.useState)({});if(void 0!==C)return(0,a.jsx)(Z(),{statusCode:C.code,title:C.msg});if(S&&void 0===k)return(0,a.jsx)(f.Z,{});let E=s.memo(e=>{var t,n;let s=e=>void 0===e?"N/A":e,c=t=>{O(n=>{let a=n[e.hash];return null==a&&(a={tcp:"N/A",udp:"N/A"}),t(a),n[e.hash]=a,{...n}})};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(h.Z,{className:"rounded-pill bg-light text-dark ms-1 text-uppercase",children:["tcp: ",s(null===(t=e.latency)||void 0===t?void 0:t.tcp)]}),(0,a.jsxs)(h.Z,{className:"rounded-pill bg-light text-dark ms-1 me-1 text-uppercase",children:["udp:",s(null===(n=e.latency)||void 0===n?void 0:n.udp)]}),(0,a.jsx)(()=>{var t,n;return(null===(t=e.latency)||void 0===t?void 0:t.tcpOnLoading)||(null===(n=e.latency)||void 0===n?void 0:n.udpOnLoading)?(0,a.jsx)(x.Z,{animation:"border",size:"sm"}):(0,a.jsx)("a",{href:"#empty",onClick:async()=>{c(e=>{e.tcpOnLoading=!0,e.udpOnLoading=!0}),fetch("".concat(m.f,"/latency?hash=").concat(e.hash,"&type=tcp")).then(async e=>{let t=e.ok?await e.text():"timeout";c(async e=>{e.tcpOnLoading=!1,e.tcp=t})}),fetch("".concat(m.f,"/latency?hash=").concat(e.hash,"&type=udp")).then(async e=>{let t=e.ok?await e.text():"timeout";c(async e=>{e.udpOnLoading=!1,e.udp=t})})},children:"Test"})},{})]})}),_=s.memo(e=>{let s=Object.entries(e.nodes);return 0===s.length?(0,a.jsx)(d.Z.Body,{children:(0,a.jsx)("div",{className:"text-center my-2",style:{opacity:"0.4"},children:"グールプはまだ指定されていません。"})}):(0,a.jsx)(u.Z,{variant:"flush",children:s.map(e=>{let[s,c]=e;return(0,a.jsxs)(u.Z.Item,{as:"label",style:{border:"0ch",borderBottom:"1px solid #dee2e6"},children:[(0,a.jsx)("input",{className:"form-check-input me-1",type:"radio",name:"select_node",value:c,onChange:e=>{console.log(e.target.value),n(e.target.value)},checked:t===c}),(0,a.jsx)("a",{href:"#empty",onClick:e=>{e.preventDefault(),b({hash:c})},children:s}),(0,a.jsx)(E,{hash:c,latency:I[c]})]},c)})})});return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(v.Z,{show:""!==w.hash,hash:w.hash,editable:!0,onHide:()=>b({hash:""}),onSave:()=>T()}),(0,a.jsxs)("div",{children:[(0,a.jsx)(c.Z,{children:(0,a.jsx)(o.Z,{className:"mb-4 d-flex",children:(0,a.jsxs)(i.Z,{onSelect:e=>{N({value:null!=e?e:""}),T()},children:[(0,a.jsx)(i.Z.Toggle,{variant:"light",children:"GROUP"}),(0,a.jsxs)(i.Z.Menu,{children:[(0,a.jsx)(i.Z.Item,{eventKey:"",children:"Select..."}),null==k?void 0:k.map(e=>(0,a.jsx)(i.Z.Item,{eventKey:e,children:e},e))]})]})})}),(0,a.jsxs)(d.Z,{className:"mb-3",children:[(0,a.jsx)(_,{nodes:void 0!==P?P:{}}),(0,a.jsx)(d.Z.Header,{children:(0,a.jsx)(i.Z,{onSelect:async n=>{fetch("".concat(m.f,"/node?hash=").concat(t,"&&net=").concat(n),{method:"PUT"}).then(async a=>{if(a.ok){let a="tcp"===n?"TCP":"UDP";e.Info("Change".concat(a," Node To ").concat(t," Successful")),console.log("change node successfully")}else console.log(await a.text())})},children:(0,a.jsxs)(l.Z,{children:[(0,a.jsxs)(l.Z,{children:[(0,a.jsx)(i.Z.Toggle,{variant:"outline-primary",children:"USE"}),(0,a.jsxs)(i.Z.Menu,{children:[(0,a.jsx)(i.Z.Item,{eventKey:"tcpudp",children:"TCP&UDP"}),(0,a.jsx)(i.Z.Item,{eventKey:"tcp",children:"TCP"}),(0,a.jsx)(i.Z.Item,{eventKey:"udp",children:"UDP"})]})]}),(0,a.jsx)(r.Z,{variant:"outline-danger",onClick:()=>{fetch("".concat(m.f,"/node?hash=").concat(t),{method:"DELETE"}).then(async n=>{if(n.ok)console.log("delete successful"),e.Info("Delete Node ".concat(t," Successful.")),T();else{let a=await n.text();console.log(a),e.Error("Delete Node ".concat(t," Failed. ").concat(a))}})},children:"DELETE"})]})})})]})]})]})}},6168:function(e,t,n){"use strict";var a=n(7437),s=n(4297),c=n(1701),o=n(733),l=n(4337),r=n(713),i=n(6934),d=n(1308),u=n(1375),h=n.n(u);t.Z=function(e){let{data:t,error:n,isLoading:u,mutate:x}=(0,r.ZP)(""!==e.hash?"/node?hash=".concat(e.hash):null,i.Q3);return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(c.Z,{show:e.show,"aria-labelledby":"contained-modal-title-vcenter",size:"xl",onHide:()=>{e.onHide()},centered:!0,children:[(0,a.jsx)(c.Z.Header,{closeButton:!0,children:(0,a.jsx)(c.Z.Title,{id:"contained-modal-title-vcenter",children:e.hash})}),(0,a.jsx)(c.Z.Body,{children:void 0!==n?(0,a.jsx)(h(),{statusCode:n.code,title:n.msg}):u?(0,a.jsx)(d.Z,{}):(0,a.jsx)(o.Z.Control,{as:"textarea",value:t,style:{height:"65vh",fontFamily:"monospace"},readOnly:!e.editable,onChange:e=>x(e.target.value,!1)})}),(0,a.jsxs)(c.Z.Footer,{children:[(0,a.jsx)(s.Z,{variant:"secondary",onClick:()=>{e.onHide()},children:"Close"}),(0,a.jsx)(()=>void 0!==e.editable&&e.editable?(0,a.jsx)(s.Z,{variant:"primary",active:!u&&void 0===n,onClick:async()=>{let n=await fetch(l.f+"/node",{method:"POST",headers:{"content-type":"application/json;charset=UTF-8"},body:t});n.ok?(console.log("save successful"),void 0!==e.onSave&&e.onSave(),e.onHide()):console.log(await n.text())},children:"Save"}):(0,a.jsx)(a.Fragment,{}),{})]})]})})}}},function(e){e.O(0,[701,331,521,8,946,735,337,971,596,744],function(){return e(e.s=9989)}),_N_E=e.O()}]);
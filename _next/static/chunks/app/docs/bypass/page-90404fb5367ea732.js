(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1871],{2824:(e,l,a)=>{Promise.resolve().then(a.bind(a,5734))},4971:(e,l,a)=>{"use strict";a.d(l,{$f:()=>h,Mj:()=>v,Ti:()=>r,U9:()=>x,XE:()=>m,YO:()=>o,Z5:()=>c,dn:()=>i,fG:()=>s,gU:()=>t,gW:()=>g,q$:()=>p,r:()=>u,rQ:()=>n});var s="",n="https://clients3.google.com/generate_204",t="dns.nextdns.io:853",o=!0,r="http://ip.sb",c="stun.syncthing.net:3478",i="stun.nextcloud.com:443";let d=()=>{let e=localStorage.getItem("api_url");s=null!==e?e:"",e=localStorage.getItem("remote_bypass"),null!==(e=localStorage.getItem("latency_http_url"))&&(n=e),null!==(e=localStorage.getItem("latency_dns_url"))&&(t=e),null!==(e=localStorage.getItem("latency_ipv6"))&&(o="true"===e),null!==(e=localStorage.getItem("latency_ip_url"))&&(r=e),null!==(e=localStorage.getItem("latency_stun_url"))&&(c=e),null!==(e=localStorage.getItem("latency_stun_tcp_url"))&&(i=e)},u=e=>{b("api_url",e)},h=e=>{b("latency_dns_url",e)},m=e=>{b("latency_http_url",e)},g=e=>{b("latency_ipv6",e.toString())},x=e=>{b("latency_ip_url",e)},v=e=>{b("latency_stun_url",e)},p=e=>{b("latency_stun_tcp_url",e)},b=(e,l)=>{""===l?localStorage.removeItem(e):localStorage.setItem(e,l),d()};d()},5734:(e,l,a)=>{"use strict";a.r(l),a.d(l,{default:()=>R});var s=a(7437),n=a(1617),t=a(2265),o=a(7185),r=a(2808),c=a(7420),i=a(358),d=a(6712),u=a(8727),h=a(1170),m=a(6601),g=a(8537);(0,g.U)(h.jS,{tcp:h.xJ.bypass,udp:h.xJ.bypass,bypassFile:"yuhaiin.conf",customRuleV3:[]});let x=t.memo(e=>{let l=(0,g.U)(h.sj,{hostname:["www.example.com"],mode:h.xJ.proxy,tag:"",resolveStrategy:h.AQ.default}),a=(0,g.U)(h.R3,{name:"my rule",enabled:!1,object:{case:"file",value:(0,g.U)(h.aq,{})}}),n=l=>{l(e.bypass),e.onChange(e.bypass)};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.Z,{className:"mb-3",children:(0,s.jsxs)(o.Z.Body,{children:[(0,s.jsx)(b,{label:"TCP",network:!0,value:e.bypass.tcp,onChange:e=>n(l=>l.tcp=e)}),(0,s.jsx)(b,{label:"UDP",network:!0,value:e.bypass.udp,onChange:e=>n(l=>l.udp=e)}),(0,s.jsx)(m.Jg,{label:"Resolve Locally",checked:e.bypass.resolveLocally,onChange:()=>n(e=>e.resolveLocally=!e.resolveLocally)}),(0,s.jsx)(m.Jg,{label:"Udp proxy Fqdn",checked:e.bypass.udpProxyFqdn===h.q6.skip_resolve,onChange:()=>n(e=>e.udpProxyFqdn=e.udpProxyFqdn===h.q6.skip_resolve?h.q6.resolve:h.q6.skip_resolve)})]})}),e.bypass.remoteRules.map((e,l)=>(0,s.jsx)(u.W2,{title:e.name,onClose:()=>n(e=>e.remoteRules.splice(l,1)),children:(0,s.jsx)(p,{config:e,onChange:e=>n(a=>a.remoteRules[l]=e)})},"remote_rules"+l)),(0,s.jsx)("div",{className:"d-flex mb-2",children:(0,s.jsxs)(r.Z,{className:"flex-grow-1",variant:"outline-success",onClick:()=>n(e=>e.remoteRules.push(a)),children:[(0,s.jsx)("i",{className:"bi bi-plus-lg mb-2"}),"New Remote Rule"]})}),(0,s.jsx)("hr",{}),e.bypass.customRuleV3.map((e,l)=>(0,s.jsx)(u.W2,{title:""!==e.tag?e.tag:h.xJ[e.mode],onClose:()=>n(e=>e.customRuleV3.splice(l,1)),children:(0,s.jsx)(v,{config:e,onChange:e=>n(a=>a.customRuleV3[l]=e)})},"rule"+l)),(0,s.jsx)("div",{className:"d-flex mb-2",children:(0,s.jsxs)(r.Z,{className:"flex-grow-1",variant:"outline-success",onClick:()=>n(e=>e.customRuleV3.push(l)),children:[(0,s.jsx)("i",{className:"bi bi-plus-lg mb-2"}),"New Rule"]})})]})}),v=e=>{let l=l=>{l(e.config),e.onChange(e.config)};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(b,{label:"Mode",network:!1,value:e.config.mode,onChange:e=>l(l=>l.mode=e)}),(0,s.jsx)(u.Vf,{label:"Tag",value:e.config.tag,onChange:e=>l(l=>l.tag=e)}),(0,s.jsx)(Z,{label:"Resolve Strategy",value:e.config.resolveStrategy,onChange:e=>l(l=>l.resolveStrategy=e)}),(0,s.jsx)(j,{label:"UDP proxy Fqdn",value:e.config.udpProxyFqdnStrategy,onChange:e=>l(l=>l.udpProxyFqdnStrategy=e)}),(0,s.jsx)(u.yh,{title:"IP/DOMAIN",data:e.config.hostname,onChange:e=>l(l=>{e&&(l.hostname=e)}),errorMsgs:e.config.errorMsgs})]})},p=e=>{let l=l=>{l(e.config),e.onChange(e.config)},a=()=>{switch(e.config.object.case){case"file":return"file";case"http":return"http";default:return""}},n=(e,l)=>{switch(e.object.case){case"file":e.object.value.path=l;break;case"http":e.object.value.url=l}};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(m.Jg,{label:"Enabled",checked:e.config.enabled,onChange:()=>l(e=>e.enabled=!e.enabled)}),(0,s.jsx)(u.Vf,{label:"Name",value:e.config.name,onChange:e=>l(l=>l.name=e)}),(0,s.jsxs)(c.Z.Group,{as:i.Z,className:"mb-3",children:[(0,s.jsx)(c.Z.Label,{column:!0,sm:2,children:"Type"}),(0,s.jsx)(d.Z,{sm:10,children:(0,s.jsxs)(c.Z.Select,{value:a(),onChange:e=>l(l=>{if(a()!=e.target.value)switch(e.target.value){case"file":l.object={case:"file",value:(0,g.U)(h.aq,{})};break;case"http":l.object={case:"http",value:(0,g.U)(h.c0,{})}}}),children:[(0,s.jsx)("option",{value:"file",children:"file"}),(0,s.jsx)("option",{value:"http",children:"http"})]})})]}),(0,s.jsx)(u.Vf,{label:"Value",value:(()=>{switch(e.config.object.case){case"file":return e.config.object.value.path;case"http":return e.config.object.value.url;default:return""}})(),errorMsg:e.config.errorMsg,onChange:e=>l(l=>n(l,e))})]})};function b(e){return(0,s.jsxs)(c.Z.Group,{as:i.Z,className:"mb-3",children:[(0,s.jsx)(c.Z.Label,{column:!0,sm:2,children:e.label}),(0,s.jsx)(d.Z,{sm:10,children:(0,s.jsxs)(c.Z.Select,{value:h.xJ[e.value],onChange:l=>e.onChange(h.xJ[l.target.value]),children:[e.network&&(0,s.jsx)("option",{value:h.xJ[h.xJ.bypass],children:"BYPASS"}),(0,s.jsx)("option",{value:h.xJ[h.xJ.direct],children:"DIRECT"}),(0,s.jsx)("option",{value:h.xJ[h.xJ.proxy],children:"PROXY"}),(0,s.jsx)("option",{value:h.xJ[h.xJ.block],children:"BLOCK"})]})})]})}function j(e){return(0,s.jsxs)(c.Z.Group,{as:i.Z,className:"mb-3",children:[(0,s.jsx)(c.Z.Label,{column:!0,sm:2,children:e.label}),(0,s.jsx)(d.Z,{sm:10,children:(0,s.jsxs)(c.Z.Select,{value:h.q6[e.value],onChange:l=>e.onChange(h.q6[l.target.value]),children:[(0,s.jsx)("option",{value:h.q6[h.q6.udp_proxy_fqdn_strategy_default],children:"Global"}),(0,s.jsx)("option",{value:h.q6[h.q6.resolve],children:"Resolve"}),(0,s.jsx)("option",{value:h.q6[h.q6.skip_resolve],children:"Skip"})]})})]})}function Z(e){return(0,s.jsxs)(c.Z.Group,{as:i.Z,className:"mb-3",children:[(0,s.jsx)(c.Z.Label,{column:!0,sm:2,children:e.label}),(0,s.jsx)(d.Z,{sm:10,children:(0,s.jsxs)(c.Z.Select,{value:h.AQ[e.value],onChange:l=>e.onChange(h.AQ[l.target.value]),children:[(0,s.jsx)("option",{value:h.AQ[h.AQ.default],children:"default"}),(0,s.jsx)("option",{value:h.AQ[h.AQ.prefer_ipv4],children:"prefer_ipv4"}),(0,s.jsx)("option",{value:h.AQ[h.AQ.only_ipv4],children:"only_ipv4"}),(0,s.jsx)("option",{value:h.AQ[h.AQ.prefer_ipv6],children:"prefer_ipv6"}),(0,s.jsx)("option",{value:h.AQ[h.AQ.only_ipv6],children:"only_ipv6"})]})})]})}var f=a(879),y=a(716),C=a(4050),A=a(6878),w=a(1159),N=a(7308),_=a(2514);let R=function(){let e=(0,t.useContext)(w.P),[l,a]=(0,t.useState)(!1),[o,c]=(0,t.useState)(!1),{data:i,error:d,isLoading:u,mutate:m}=(0,n.ZP)("/bypass",(0,f.D4)(h.jS),{revalidateOnFocus:!1});return d?(0,s.jsx)(y.Z,{code:d.code,children:d.msg}):u||!i?(0,s.jsx)(y.Z,{}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(x,{bypass:(0,C.d)(h.jS,i),onChange:e=>{m(e,!1)}}),(0,s.jsx)("hr",{}),(0,s.jsxs)(N.Z,{gap:1,direction:"horizontal",children:[(0,s.jsxs)(r.Z,{variant:"outline-primary",disabled:l,onClick:()=>{a(!0),(0,f.Uo)("/bypass",{body:(0,A.O)(h.jS,i),method:"PATCH"}).then(async l=>{let{error:s}=l;void 0!==s?e.Error("save config failed, ".concat(s.code,"| ").concat(await s.msg)):(e.Info("Save Successfully"),m()),a(!1)})},children:["Save",l&&(0,s.jsxs)(s.Fragment,{children:["\xa0",(0,s.jsx)(_.Z,{size:"sm",animation:"border",variant:"primary"})]})]}),(0,s.jsxs)(r.Z,{variant:"outline-primary",disabled:o,onClick:()=>{c(!0),(0,f.Uo)("/bypass/reload",{method:"POST"}).then(async l=>{let{error:a}=l;void 0!==a?e.Error("reload failed, ".concat(a.code,"| ").concat(await a.msg)):(e.Info("Reload Successfully"),m()),c(!1)})},children:["Refresh Now",o&&(0,s.jsxs)(s.Fragment,{children:["\xa0",(0,s.jsx)(_.Z,{size:"sm",animation:"border",variant:"primary"})]})]})]})]})}},716:(e,l,a)=>{"use strict";a.d(l,{Z:()=>r});var s=a(7437),n=a(2514),t=a(6264),o=a.n(t);let r=function(e){return(0,s.jsxs)("div",{className:"z-1090 d-flex flex-column justify-content-center align-items-center",style:{height:"100px"},children:[void 0!==e.children&&(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(o(),{className:"p2",statusCode:void 0!==e.code?e.code:500,title:e.children})}),(0,s.jsx)("div",{className:"p2",children:(0,s.jsx)(n.Z,{})})]})}},879:(e,l,a)=>{"use strict";a.d(l,{D4:()=>o,OV:()=>r,Uo:()=>c,o5:()=>i});var s=a(4971),n=a(4050),t=a(7764);function o(e,l,a,o){return r=>o?(0,n.d)(e,o):fetch("".concat(s.fG).concat(r),{method:l,body:a}).then(async l=>{if(!l.ok)throw{code:l.status,msg:l.statusText,raw:l.text()};return(0,t.h4)(e,new Uint8Array(await l.arrayBuffer()))})}function r(e,l,a,n){return o=>fetch("".concat(s.fG).concat(o),{method:a,body:n}).then(async a=>{if(!a.ok)throw{code:a.status,msg:a.statusText,raw:a.text()};return l((0,t.h4)(e,new Uint8Array(await a.arrayBuffer())))})}let c=async(e,l)=>{let a=await fetch("".concat(s.fG).concat(e),{method:void 0!==l.method?l.method:"POST",body:l.body});return a.ok?void 0===l.process?{}:{data:l.process(a)}:{error:{code:a.status,msg:a.text()}}};function i(e,l,a){return(n,o)=>{let r,{next:c}=o,i=new URL(""!==s.fG?s.fG:window.location.toString());i.pathname=n,i.protocol="https:"===i.protocol?"wss:":"ws:";let d=!1,u=()=>{d||(console.log("connecting to: ".concat(i)),(r=new WebSocket(i)).binaryType="arraybuffer",r.addEventListener("open",l=>{console.log("connect to: ".concat(i,", event type: ").concat(l.type)),null==r||r.send(e)}),r.addEventListener("message",e=>{let s=(0,t.h4)(l,new Uint8Array(e.data));c(null,e=>a(e,s))}),r.addEventListener("error",e=>{let l="websocket have some error";c({msg:l,code:500}),console.log(l,e.type)}),r.addEventListener("close",e=>{console.log("websocket closed, code: "+e.code),c(null,void 0),d||(console.log("reconnect after 1 seconds"),setTimeout(u,1e3))}))};return u(),()=>{d=!0,void 0!==r&&(console.log("close: ".concat(n)),r.close(),r=void 0)}}}},6601:(e,l,a)=>{"use strict";a.d(l,{Jg:()=>r});var s=a(7437);a(2265);var n=a(7420),t=a(358),o=a(6712);let r=e=>(0,s.jsxs)(n.Z.Group,{as:t.Z,className:"mb-2",children:[(0,s.jsx)(n.Z.Label,{column:!0,sm:2,children:e.label}),(0,s.jsx)(o.Z,{sm:10,className:"d-flex align-items-center",children:(0,s.jsx)(n.Z.Check,{className:"d-flex align-items-center",type:"switch",checked:e.checked,onChange:()=>e.onChange()})})]})},1159:(e,l,a)=>{"use strict";a.d(l,{P:()=>r,t:()=>c});var s=a(7437),n=a(2265),t=a(8620),o=a(1529);let r=(0,n.createContext)({Info:e=>{},Error:e=>{}}),c=e=>{let{children:l}=e,[a,c]=(0,n.useState)({value:{},index:0}),i=(e,l)=>c(a=>({value:{...a.value,[a.index]:{text:e,type:l}},index:a.index+1}));return(0,s.jsxs)(r.Provider,{value:{Info:e=>{console.log(e),i(e,"success")},Error:e=>{console.error(e),i(e,"danger")}},children:[(0,s.jsx)(t.Z,{className:"p-3",position:"top-center",containerPosition:"fixed",style:{zIndex:999999},children:Object.entries(a.value).map(e=>{let[l,n]=e;return(0,s.jsxs)(o.Z,{role:"alert","aria-live":"assertive",show:!0,bg:n.type,onClose:()=>{let e=a.value;delete e[l],c({...a,value:e}),console.log("close: "+l)},"aria-atomic":"true",delay:4e3,autohide:!0,animation:!0,children:[(0,s.jsxs)(o.Z.Header,{children:[(0,s.jsx)("strong",{className:"me-auto",children:"Notification"}),(0,s.jsx)("small",{className:"text-muted",children:"just now"})]}),(0,s.jsx)(o.Z.Body,{className:"text-center",children:n.text})]},"toast"+l)})}),l]})}},8727:(e,l,a)=>{"use strict";a.d(l,{CX:()=>j,NZ:()=>p,Vf:()=>v,W2:()=>y,kx:()=>f,sr:()=>Z,u5:()=>x,yh:()=>b});var s=a(7437),n=a(5554),t=a(6852),o=a(473),r=a(7420),c=a(358),i=a(6712),d=a(2312),u=a(2808),h=a(7185),m=a(3181),g=a(2265);class x{constructor(e){this.label=e.label,this.value=e.value,this.label_children=e.label_children}}let v=g.memo(e=>(0,s.jsxs)(r.Z.Group,{as:c.Z,className:e.mb?e.mb:"mb-2",children:[(0,s.jsx)(r.Z.Label,{column:!0,sm:2,className:"nowrap",children:e.label}),(0,s.jsx)(i.Z,{sm:10,children:(0,s.jsxs)(d.Z,{className:e.mb?e.mb:"mb-2",hasValidation:!!e.errorMsg,children:[e.reminds&&e.reminds.length?(0,s.jsxs)(n.Z,{children:[(0,s.jsx)(n.Z.Toggle,{variant:"outline-secondary",id:"dropdown-basic"}),(0,s.jsx)(t.Z,{style:{maxHeight:"300px",overflowY:"auto"},children:e.reminds.map(l=>(0,s.jsxs)(o.Z,{onClick:()=>e.onChange&&e.onChange(l.value),children:[(0,s.jsx)("b",{children:l.label}),l.label_children&&l.label_children.map(e=>(0,s.jsx)("div",{children:(0,s.jsx)("span",{className:"text-body-secondary",children:e})},e))]},l.value))})]}):(0,s.jsx)(s.Fragment,{}),e.url?(0,s.jsx)("a",{className:"mt-1",href:e.url,target:"_blank",children:e.value}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.Z.Control,{value:e.value,plaintext:e.plaintext,placeholder:e.placeholder,isInvalid:!!e.errorMsg,onChange:l=>{e.onChange&&e.onChange(l.target.value)}}),e.errorMsg&&(0,s.jsx)(r.Z.Control.Feedback,{type:"invalid",children:e.errorMsg})]})]})})]})),p=e=>(0,s.jsxs)(r.Z.Group,{as:c.Z,className:"mb-2",children:[(0,s.jsx)(r.Z.Label,{column:!0,sm:2,className:"nowrap",children:e.label}),(0,s.jsx)(i.Z,{sm:10,children:(0,s.jsx)(r.Z.Control,{as:"textarea",rows:5,value:e.value,onChange:l=>e.onChange(l.target.value)})})]});function b(e){var l;let[a,n]=(0,g.useState)({value:""});return(0,s.jsxs)(r.Z.Group,{as:c.Z,className:"mb-3",children:[(0,s.jsx)(r.Z.Label,{column:!0,sm:2,className:"nowrap",children:e.title}),e.data&&e.data.map((l,a)=>(0,s.jsx)(i.Z,{sm:{span:10,offset:0!==a?2:0},children:(0,s.jsxs)(d.Z,{className:"mb-2",hasValidation:!!e.errorMsgs&&!!e.errorMsgs[l],children:[(0,s.jsx)(r.Z.Control,{onChange:l=>{e.data&&(e.data[a]=l.target.value,e.onChange(e.data))},isInvalid:!!e.errorMsgs&&!!e.errorMsgs[l],value:l}),(0,s.jsx)(u.Z,{variant:"outline-danger",onClick:()=>{e.data&&(e.data.splice(a,1),e.onChange(e.data))},children:(0,s.jsx)("i",{className:"bi bi-x-lg"})}),e.errorMsgs&&e.errorMsgs[l]&&(0,s.jsx)(r.Z.Control.Feedback,{type:"invalid",children:e.errorMsgs[l]})]})},a)),(0,s.jsx)(i.Z,{sm:{span:10,offset:(null===(l=e.data)||void 0===l?void 0:l.length)!==0?2:0},children:(0,s.jsxs)(d.Z,{className:"mb-2",children:[(0,s.jsx)(r.Z.Control,{value:a.value,onChange:e=>n({value:e.target.value})}),(0,s.jsx)(u.Z,{variant:"outline-success",onClick:()=>{e.data.push(a.value),e.onChange(e.data)},children:(0,s.jsx)("i",{className:"bi bi-plus-lg"})})]})})]})}function j(e){var l;let[a,n]=(0,g.useState)({value:""});return(0,s.jsxs)(r.Z.Group,{as:c.Z,className:"mb-3",children:[(0,s.jsx)(r.Z.Label,{column:!0,sm:2,className:"nowrap",children:e.title}),e.data&&e.data.map((l,a)=>(0,s.jsx)(i.Z,{sm:{span:10,offset:0!==a?2:0},children:(0,s.jsxs)(d.Z,{className:"mb-2",children:[(0,s.jsx)(r.Z.Control,{value:new TextDecoder().decode(l),as:e.textarea?"textarea":void 0,onChange:l=>{e.data[a]=new TextEncoder().encode(l.target.value),e.onChange(e.data?e.data:[])}}),(0,s.jsx)(u.Z,{variant:"outline-danger",onClick:()=>{e.data&&(e.data.splice(a,1),e.onChange(e.data))},children:(0,s.jsx)("i",{className:"bi bi-x-lg"})})]})},"bi-"+a)),(0,s.jsx)(i.Z,{sm:{span:10,offset:(null===(l=e.data)||void 0===l?void 0:l.length)!==0?2:0},children:(0,s.jsxs)(d.Z,{className:"mb-2",children:[(0,s.jsx)(r.Z.Control,{as:e.textarea?"textarea":void 0,value:a.value,onChange:e=>n({value:e.target.value})}),(0,s.jsx)(u.Z,{variant:"outline-success",onClick:()=>{let l=new TextEncoder().encode(a.value);e.data?e.data.push(l):e.data=[l],e.onChange(e.data)},children:(0,s.jsx)("i",{className:"bi bi-plus-lg"})})]})})]})}function Z(e){return(0,s.jsxs)(r.Z.Group,{as:c.Z,className:e.mb?e.mb:"mb-2",children:[(0,s.jsx)(r.Z.Label,{column:!0,sm:2,className:"nowrap",children:e.title}),(0,s.jsx)(i.Z,{sm:{span:10,offset:0},children:(0,s.jsx)(d.Z,{className:e.mb?e.mb:"mb-2"})}),e.data&&e.data.map((l,a)=>(0,s.jsx)(i.Z,{sm:{span:10,offset:2},className:"mt-0",children:(0,s.jsx)(d.Z,{className:e.mb?e.mb:"mb-2",children:l})},a))]})}class f{constructor(e,l,a){this.length=e,this.current=l,this.onmove=a}}let y=e=>{var l,a,n,t,o,r;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(h.Z,{className:"flex-grow-1 form-floating",children:[(0,s.jsxs)(h.Z.Header,{className:"d-flex justify-content-between",children:[e.title,(!e.hideClose||(null!==(o=null===(l=e.moveUpDown)||void 0===l?void 0:l.length)&&void 0!==o?o:0)>1)&&(0,s.jsxs)(m.Z,{children:[(null!==(r=null===(a=e.moveUpDown)||void 0===a?void 0:a.length)&&void 0!==r?r:0)>1&&(0,s.jsxs)(s.Fragment,{children:[(null===(n=e.moveUpDown)||void 0===n?void 0:n.current)!=0&&(0,s.jsx)(u.Z,{variant:"outline-primary",size:"sm",onClick:()=>e.moveUpDown.onmove(!0),children:(0,s.jsx)("i",{className:"bi bi-arrow-up"})}),(null===(t=e.moveUpDown)||void 0===t?void 0:t.current)!=e.moveUpDown.length-1&&(0,s.jsx)(u.Z,{variant:"outline-primary",size:"sm",onClick:()=>e.moveUpDown.onmove(!1),children:(0,s.jsx)("i",{className:"bi bi-arrow-down"})})]}),!e.hideClose&&(0,s.jsx)(u.Z,{variant:"outline-danger",size:"sm",onClick:e.onClose,children:(0,s.jsx)("i",{className:"bi bi-x-lg"})})]})]}),(0,s.jsx)(h.Z.Body,{children:e.children})]}),(0,s.jsx)("br",{})]})}},1170:(e,l,a)=>{"use strict";a.d(l,{AQ:()=>n,GZ:()=>c,R3:()=>u,aq:()=>h,c0:()=>m,jS:()=>i,q6:()=>t,sj:()=>d,xJ:()=>s});var s,n,t,o=a(200),r=a(9320);let c=(0,o.l)("Chpjb25maWcvYnlwYXNzL2J5cGFzcy5wcm90bxIOeXVoYWlpbi5ieXBhc3Mi9QIKBmNvbmZpZxIhCgN0Y3AYAyABKA4yFC55dWhhaWluLmJ5cGFzcy5tb2RlEiEKA3VkcBgEIAEoDjIULnl1aGFpaW4uYnlwYXNzLm1vZGUSJAoLYnlwYXNzX2ZpbGUYAiABKAlCAhgBUgtieXBhc3NfZmlsZRJPCg51ZHBfcHJveHlfZnFkbhgGIAEoDjInLnl1aGFpaW4uYnlwYXNzLnVkcF9wcm94eV9mcWRuX3N0cmF0ZWd5Ug51ZHBfcHJveHlfZnFkbhJDCg5jdXN0b21fcnVsZV92MxgHIAMoCzIbLnl1aGFpaW4uYnlwYXNzLm1vZGVfY29uZmlnUg5jdXN0b21fcnVsZV92MxI/CgxyZW1vdGVfcnVsZXMYCCADKAsyGy55dWhhaWluLmJ5cGFzcy5yZW1vdGVfcnVsZVIMcmVtb3RlX3J1bGVzEigKD3Jlc29sdmVfbG9jYWxseRgJIAEoCFIPcmVzb2x2ZV9sb2NhbGx5IpQDCgttb2RlX2NvbmZpZxIiCgRtb2RlGAEgASgOMhQueXVoYWlpbi5ieXBhc3MubW9kZRILCgN0YWcYAiABKAkSEAoIaG9zdG5hbWUYAyADKAkSTAoQcmVzb2x2ZV9zdHJhdGVneRgEIAEoDjIgLnl1aGFpaW4uYnlwYXNzLnJlc29sdmVfc3RyYXRlZ3lSEHJlc29sdmVfc3RyYXRlZ3kSYQoXdWRwX3Byb3h5X2ZxZG5fc3RyYXRlZ3kYBiABKA4yJy55dWhhaWluLmJ5cGFzcy51ZHBfcHJveHlfZnFkbl9zdHJhdGVneVIXdWRwX3Byb3h5X2ZxZG5fc3RyYXRlZ3kSSQoKZXJyb3JfbXNncxgHIAMoCzIqLnl1aGFpaW4uYnlwYXNzLm1vZGVfY29uZmlnLkVycm9yTXNnc0VudHJ5UgllcnJvcl9tc2caMAoORXJyb3JNc2dzRW50cnkSCwoDa2V5GAEgASgJEg0KBXZhbHVlGAIgASgJOgI4AUoECAUQBlIOdWRwX3Byb3h5X2ZxZG4i+QEKC3JlbW90ZV9ydWxlEg8KB2VuYWJsZWQYASABKAgSDAoEbmFtZRgCIAEoCRIwCgRmaWxlGAMgASgLMiAueXVoYWlpbi5ieXBhc3MucmVtb3RlX3J1bGVfZmlsZUgAEjAKBGh0dHAYBCABKAsyIC55dWhhaWluLmJ5cGFzcy5yZW1vdGVfcnVsZV9odHRwSAASHAoJZXJyb3JfbXNnGAUgASgJUgllcnJvcl9tc2cSPwoMZGVmYXVsdF9tb2RlGAYgASgLMhsueXVoYWlpbi5ieXBhc3MubW9kZV9jb25maWdSDGRlZmF1bHRfbW9kZUIICgZvYmplY3QiIAoQcmVtb3RlX3J1bGVfZmlsZRIMCgRwYXRoGAEgASgJIi8KEHJlbW90ZV9ydWxlX2h0dHASCwoDdXJsGAEgASgJEg4KBm1ldGhvZBgCIAEoCSo0CgRtb2RlEgoKBmJ5cGFzcxAAEgoKBmRpcmVjdBABEgkKBXByb3h5EAISCQoFYmxvY2sQAypfChByZXNvbHZlX3N0cmF0ZWd5EgsKB2RlZmF1bHQQABIPCgtwcmVmZXJfaXB2NBABEg0KCW9ubHlfaXB2NBACEg8KC3ByZWZlcl9pcHY2EAMSDQoJb25seV9pcHY2EAQqXQoXdWRwX3Byb3h5X2ZxZG5fc3RyYXRlZ3kSIwofdWRwX3Byb3h5X2ZxZG5fc3RyYXRlZ3lfZGVmYXVsdBAAEgsKB3Jlc29sdmUQARIQCgxza2lwX3Jlc29sdmUQAkI3WjVnaXRodWIuY29tL0FzdXRvcnVmYS95dWhhaWluL3BrZy9wcm90b3MvY29uZmlnL2J5cGFzc2IGcHJvdG8z"),i=(0,r.L)(c,0),d=(0,r.L)(c,1),u=(0,r.L)(c,2),h=(0,r.L)(c,3),m=(0,r.L)(c,4);!function(e){e[e.bypass=0]="bypass",e[e.direct=1]="direct",e[e.proxy=2]="proxy",e[e.block=3]="block"}(s||(s={})),function(e){e[e.default=0]="default",e[e.prefer_ipv4=1]="prefer_ipv4",e[e.only_ipv4=2]="only_ipv4",e[e.prefer_ipv6=3]="prefer_ipv6",e[e.only_ipv6=4]="only_ipv6"}(n||(n={})),function(e){e[e.udp_proxy_fqdn_strategy_default=0]="udp_proxy_fqdn_strategy_default",e[e.resolve=1]="resolve",e[e.skip_resolve=2]="skip_resolve"}(t||(t={}))}},e=>{var l=l=>e(e.s=l);e.O(0,[8817,1617,548,5554,9768,9169,7130,6215,1744],()=>l(2824)),_N_E=e.O()}]);
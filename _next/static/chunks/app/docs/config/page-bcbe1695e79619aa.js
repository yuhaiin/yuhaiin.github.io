(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1347],{2280:function(e,n,a){Promise.resolve().then(a.bind(a,2966))},6263:function(e,n,a){"use strict";var s=a(7437),l=a(279),t=a(914),r=a.n(t);n.Z=function(e){return(0,s.jsxs)("div",{className:"z-1090 d-flex flex-column justify-content-center align-items-center",style:{height:"100px"},children:[void 0!==e.children&&(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(r(),{className:"p2",statusCode:void 0!==e.code?e.code:500,title:e.children})}),(0,s.jsx)("div",{className:"p2",children:(0,s.jsx)(l.Z,{})})]})}},7463:function(e,n,a){"use strict";a.d(n,{Jg:function(){return o}});var s=a(7437);a(2265);var l=a(1593),t=a(4402),r=a(4670);let o=e=>(0,s.jsxs)(l.Z.Group,{as:t.Z,className:"mb-2",children:[(0,s.jsx)(l.Z.Label,{column:!0,sm:2,children:e.label}),(0,s.jsx)(r.Z,{sm:10,className:"d-flex align-items-center",children:(0,s.jsx)(l.Z.Check,{className:"d-flex align-items-center",type:"switch",checked:e.checked,onChange:()=>e.onChange()})})]})},4954:function(e,n,a){"use strict";a.d(n,{P:function(){return o},t:function(){return i}});var s=a(7437),l=a(2265),t=a(2230),r=a(6647);let o=(0,l.createContext)({Info:e=>{},Error:e=>{}}),i=e=>{let{children:n}=e,[a,i]=(0,l.useState)({value:{},index:0}),c=(e,n)=>i(a=>({value:{...a.value,[a.index]:{text:e,type:n}},index:a.index+1}));return(0,s.jsxs)(o.Provider,{value:{Info:e=>{console.log(e),c(e,"success")},Error:e=>{console.error(e),c(e,"danger")}},children:[(0,s.jsx)(t.Z,{className:"p-3",position:"top-center",containerPosition:"fixed",style:{zIndex:999999},children:Object.entries(a.value).map(e=>{let[n,l]=e;return(0,s.jsxs)(r.Z,{role:"alert","aria-live":"assertive",show:!0,bg:l.type,onClose:()=>{let e=a.value;delete e[n],i({...a,value:e}),console.log("close: "+n)},"aria-atomic":"true",delay:4e3,autohide:!0,animation:!0,children:[(0,s.jsxs)(r.Z.Header,{children:[(0,s.jsx)("strong",{className:"me-auto",children:"Notification"}),(0,s.jsx)("small",{className:"text-muted",children:"just now"})]}),(0,s.jsx)(r.Z.Body,{className:"text-center",children:l.text})]},"toast"+n)})}),n]})}},7380:function(e,n,a){"use strict";a.d(n,{CX:function(){return g},NZ:function(){return p},Vf:function(){return j},W2:function(){return f},kx:function(){return Z},sr:function(){return C},u5:function(){return m},yh:function(){return b}});var s=a(7437),l=a(4122),t=a(795),r=a(6945),o=a(1593),i=a(4402),c=a(4670),d=a(36),u=a(4076),h=a(9420),v=a(2115),x=a(2265);class m{constructor(e){this.label=e.label,this.value=e.value,this.label_children=e.label_children}}let j=x.memo(e=>(0,s.jsxs)(o.Z.Group,{as:i.Z,className:e.mb?e.mb:"mb-2",children:[(0,s.jsx)(o.Z.Label,{column:!0,sm:2,className:"nowrap",children:e.label}),(0,s.jsx)(c.Z,{sm:10,children:(0,s.jsxs)(d.Z,{className:e.mb?e.mb:"mb-2",hasValidation:!!e.errorMsg,children:[e.reminds&&e.reminds.length?(0,s.jsxs)(l.Z,{children:[(0,s.jsx)(l.Z.Toggle,{variant:"outline-secondary",id:"dropdown-basic"}),(0,s.jsx)(t.Z,{style:{maxHeight:"300px",overflowY:"auto"},children:e.reminds.map(n=>(0,s.jsxs)(r.Z,{onClick:()=>e.onChange&&e.onChange(n.value),children:[(0,s.jsx)("b",{children:n.label}),n.label_children&&n.label_children.map(e=>(0,s.jsx)("div",{children:(0,s.jsx)("span",{className:"text-body-secondary",children:e})},e))]},n.value))})]}):(0,s.jsx)(s.Fragment,{}),e.url?(0,s.jsx)("a",{className:"mt-1",href:e.url,target:"_blank",children:e.value}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.Z.Control,{value:e.value,plaintext:e.plaintext,placeholder:e.placeholder,isInvalid:!!e.errorMsg,onChange:n=>{e.onChange&&e.onChange(n.target.value)}}),e.errorMsg&&(0,s.jsx)(o.Z.Control.Feedback,{type:"invalid",children:e.errorMsg})]})]})})]})),p=e=>(0,s.jsxs)(o.Z.Group,{as:i.Z,className:"mb-2",children:[(0,s.jsx)(o.Z.Label,{column:!0,sm:2,className:"nowrap",children:e.label}),(0,s.jsx)(c.Z,{sm:10,children:(0,s.jsx)(o.Z.Control,{as:"textarea",rows:5,value:e.value,onChange:n=>e.onChange(n.target.value)})})]});function b(e){var n;let[a,l]=(0,x.useState)({value:""});return(0,s.jsxs)(o.Z.Group,{as:i.Z,className:"mb-3",children:[(0,s.jsx)(o.Z.Label,{column:!0,sm:2,className:"nowrap",children:e.title}),e.data&&e.data.map((n,a)=>(0,s.jsx)(c.Z,{sm:{span:10,offset:0!==a?2:0},children:(0,s.jsxs)(d.Z,{className:"mb-2",hasValidation:!!e.errorMsgs&&!!e.errorMsgs[n],children:[(0,s.jsx)(o.Z.Control,{onChange:n=>{e.data&&(e.data[a]=n.target.value,e.onChange(e.data))},isInvalid:!!e.errorMsgs&&!!e.errorMsgs[n],value:n}),(0,s.jsx)(u.Z,{variant:"outline-danger",onClick:()=>{e.data&&(e.data.splice(a,1),e.onChange(e.data))},children:(0,s.jsx)("i",{className:"bi bi-x-lg"})}),e.errorMsgs&&e.errorMsgs[n]&&(0,s.jsx)(o.Z.Control.Feedback,{type:"invalid",children:e.errorMsgs[n]})]})},a)),(0,s.jsx)(c.Z,{sm:{span:10,offset:(null===(n=e.data)||void 0===n?void 0:n.length)!==0?2:0},children:(0,s.jsxs)(d.Z,{className:"mb-2",children:[(0,s.jsx)(o.Z.Control,{value:a.value,onChange:e=>l({value:e.target.value})}),(0,s.jsx)(u.Z,{variant:"outline-success",onClick:()=>{e.data.push(a.value),e.onChange(e.data)},children:(0,s.jsx)("i",{className:"bi bi-plus-lg"})})]})})]})}function g(e){var n;let[a,l]=(0,x.useState)({value:""});return(0,s.jsxs)(o.Z.Group,{as:i.Z,className:"mb-3",children:[(0,s.jsx)(o.Z.Label,{column:!0,sm:2,className:"nowrap",children:e.title}),e.data&&e.data.map((n,a)=>(0,s.jsx)(c.Z,{sm:{span:10,offset:0!==a?2:0},children:(0,s.jsxs)(d.Z,{className:"mb-2",children:[(0,s.jsx)(o.Z.Control,{value:new TextDecoder().decode(n),as:e.textarea?"textarea":void 0,onChange:n=>{e.data[a]=new TextEncoder().encode(n.target.value),e.onChange(e.data?e.data:[])}}),(0,s.jsx)(u.Z,{variant:"outline-danger",onClick:()=>{e.data&&(e.data.splice(a,1),e.onChange(e.data))},children:(0,s.jsx)("i",{className:"bi bi-x-lg"})})]})},"bi-"+a)),(0,s.jsx)(c.Z,{sm:{span:10,offset:(null===(n=e.data)||void 0===n?void 0:n.length)!==0?2:0},children:(0,s.jsxs)(d.Z,{className:"mb-2",children:[(0,s.jsx)(o.Z.Control,{as:e.textarea?"textarea":void 0,value:a.value,onChange:e=>l({value:e.target.value})}),(0,s.jsx)(u.Z,{variant:"outline-success",onClick:()=>{let n=new TextEncoder().encode(a.value);e.data?e.data.push(n):e.data=[n],e.onChange(e.data)},children:(0,s.jsx)("i",{className:"bi bi-plus-lg"})})]})})]})}function C(e){return(0,s.jsxs)(o.Z.Group,{as:i.Z,className:e.mb?e.mb:"mb-2",children:[(0,s.jsx)(o.Z.Label,{column:!0,sm:2,className:"nowrap",children:e.title}),(0,s.jsx)(c.Z,{sm:{span:10,offset:0},children:(0,s.jsx)(d.Z,{className:e.mb?e.mb:"mb-2"})}),e.data&&e.data.map((n,a)=>(0,s.jsx)(c.Z,{sm:{span:10,offset:2},className:"mt-0",children:(0,s.jsx)(d.Z,{className:e.mb?e.mb:"mb-2",children:n})},a))]})}class Z{constructor(e,n,a){this.length=e,this.current=n,this.onmove=a}}let f=e=>{var n,a,l,t,r,o;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(h.Z,{className:"flex-grow-1 form-floating",children:[(0,s.jsxs)(h.Z.Header,{className:"d-flex justify-content-between",children:[e.title,(!e.hideClose||(null!==(r=null===(n=e.moveUpDown)||void 0===n?void 0:n.length)&&void 0!==r?r:0)>1)&&(0,s.jsxs)(v.Z,{children:[(null!==(o=null===(a=e.moveUpDown)||void 0===a?void 0:a.length)&&void 0!==o?o:0)>1&&(0,s.jsxs)(s.Fragment,{children:[(null===(l=e.moveUpDown)||void 0===l?void 0:l.current)!=0&&(0,s.jsx)(u.Z,{variant:"outline-primary",size:"sm",onClick:()=>e.moveUpDown.onmove(!0),children:(0,s.jsx)("i",{className:"bi bi-arrow-up"})}),(null===(t=e.moveUpDown)||void 0===t?void 0:t.current)!=e.moveUpDown.length-1&&(0,s.jsx)(u.Z,{variant:"outline-primary",size:"sm",onClick:()=>e.moveUpDown.onmove(!1),children:(0,s.jsx)("i",{className:"bi bi-arrow-down"})})]}),!e.hideClose&&(0,s.jsx)(u.Z,{variant:"outline-danger",size:"sm",onClick:e.onClose,children:(0,s.jsx)("i",{className:"bi bi-x-lg"})})]})]}),(0,s.jsx)(h.Z.Body,{children:e.children})]}),(0,s.jsx)("br",{})]})}},2966:function(e,n,a){"use strict";a.r(n),a.d(n,{default:function(){return eh}});var s=a(7437),l=a(2265),t=a(9953),r=a(9420),o=a(6135),i=a(1593),c=a(4402),d=a(4670),u=a(3770),h=a(7706),v=a(4076),x=a(36),m=a(7380),j=a(7463),p=a(9675);let b=l.memo(e=>{var n,a,t,r,o,c,d,u,h,p,b,C,Z,f,y,k,N,w,F,S,U;let[V,I]=(0,l.useState)({key:"",value:""}),P=n=>{n(e.data),e.onChange(e.data)};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(m.Vf,{label:"Server",value:e.data.server,onChange:e=>P(n=>n.server=e)}),(0,s.jsx)(m.W2,{title:"FakeDNS",hideClose:!0,children:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(j.Jg,{label:"Enabled",checked:e.data.fakedns,onChange:()=>P(e=>e.fakedns=!e.fakedns)}),(0,s.jsx)(m.Vf,{label:"IPv4 Range",value:e.data.fakednsIpRange,onChange:e=>P(n=>n.fakednsIpRange=e)}),(0,s.jsx)(m.Vf,{label:"IPv6 Range",value:e.data.fakednsIpv6Range,onChange:e=>P(n=>n.fakednsIpv6Range=e)}),(0,s.jsx)(m.yh,{title:"Whitelist",data:e.data.fakednsWhitelist,onChange:e=>P(n=>{e&&(n.fakednsWhitelist=e)})})]})}),(0,s.jsx)(m.W2,{title:"Local DNS",hideClose:!0,children:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(m.Vf,{label:"Host",value:null!==(Z=null===(n=e.data.local)||void 0===n?void 0:n.host)&&void 0!==Z?Z:"",onChange:e=>P(n=>{void 0!==n.local&&(n.local.host=e)})}),(0,s.jsx)(g,{label:"Type",value:null===(a=e.data.local)||void 0===a?void 0:a.type,onChange:e=>P(n=>{void 0!==n.local&&(n.local.type=e)})}),(0,s.jsx)(m.Vf,{label:"Subnet",value:null!==(f=null===(t=e.data.local)||void 0===t?void 0:t.subnet)&&void 0!==f?f:"",onChange:e=>P(n=>{void 0!==n.local&&(n.local.subnet=e)})}),(0,s.jsx)(m.Vf,{label:"SNI",value:null!==(y=null===(r=e.data.local)||void 0===r?void 0:r.tlsServername)&&void 0!==y?y:"",onChange:e=>P(n=>{void 0!==n.local&&(n.local.tlsServername=e)})})]})}),(0,s.jsx)(m.W2,{title:"Remote DNS",hideClose:!0,children:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(m.Vf,{label:"Host",value:null!==(k=null===(o=e.data.remote)||void 0===o?void 0:o.host)&&void 0!==k?k:"",onChange:e=>P(n=>{void 0!==n.remote&&(n.remote.host=e)})}),(0,s.jsx)(g,{label:"Type",value:null===(c=e.data.remote)||void 0===c?void 0:c.type,onChange:e=>P(n=>{void 0!==n.remote&&(n.remote.type=e)})}),(0,s.jsx)(m.Vf,{label:"Subnet",value:null!==(N=null===(d=e.data.remote)||void 0===d?void 0:d.subnet)&&void 0!==N?N:"",onChange:e=>P(n=>{void 0!==n.remote&&(n.remote.subnet=e)})}),(0,s.jsx)(m.Vf,{label:"SNI",value:null!==(w=null===(u=e.data.remote)||void 0===u?void 0:u.tlsServername)&&void 0!==w?w:"",onChange:e=>P(n=>{void 0!==n.remote&&(n.remote.tlsServername=e)})})]})}),(0,s.jsx)(m.W2,{title:"Bootstrap DNS",hideClose:!0,children:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(m.Vf,{label:"Host",value:null!==(F=null===(h=e.data.bootstrap)||void 0===h?void 0:h.host)&&void 0!==F?F:"",onChange:e=>P(n=>{void 0!==n.bootstrap&&(n.bootstrap.host=e)})}),(0,s.jsx)(g,{label:"Type",value:null===(p=e.data.bootstrap)||void 0===p?void 0:p.type,onChange:e=>P(n=>{void 0!==n.bootstrap&&(n.bootstrap.type=e)})}),(0,s.jsx)(m.Vf,{label:"Subnet",value:null!==(S=null===(b=e.data.bootstrap)||void 0===b?void 0:b.subnet)&&void 0!==S?S:"",onChange:e=>P(n=>{void 0!==n.bootstrap&&(n.bootstrap.subnet=e)})}),(0,s.jsx)(m.Vf,{label:"SNI",value:null!==(U=null===(C=e.data.bootstrap)||void 0===C?void 0:C.tlsServername)&&void 0!==U?U:"",onChange:e=>P(n=>{void 0!==n.bootstrap&&(n.bootstrap.tlsServername=e)})})]})}),(0,s.jsx)(m.W2,{title:"Hosts",hideClose:!0,children:(0,s.jsxs)(s.Fragment,{children:[Object.entries(e.data.hosts).sort((e,n)=>{let[a]=e,[s]=n;return a>s?-1:1}).map(e=>{let[n,a]=e;return(0,s.jsxs)(x.Z,{className:"mb-2",children:[(0,s.jsx)(i.Z.Control,{readOnly:!0,value:n}),(0,s.jsx)(x.Z.Text,{children:(0,s.jsx)("i",{className:"bi bi-arrow-right"})}),(0,s.jsx)(i.Z.Control,{value:a,onChange:e=>P(a=>a.hosts[n]=e.target.value)}),(0,s.jsx)(v.Z,{variant:"outline-danger",onClick:()=>P(e=>delete e.hosts[n]),children:(0,s.jsx)("i",{className:"bi bi-x-lg"})})]},"hosts"+n)}),(0,s.jsxs)(x.Z,{className:"mb-2",children:[(0,s.jsx)(i.Z.Control,{value:V.key,onChange:e=>I({...V,key:e.target.value})}),(0,s.jsx)(x.Z.Text,{children:(0,s.jsx)("i",{className:"bi bi-arrow-right"})}),(0,s.jsx)(i.Z.Control,{value:V.value,onChange:e=>I({...V,value:e.target.value})}),(0,s.jsx)(v.Z,{variant:"outline-success",onClick:()=>{""!==V.key&&void 0===e.data.hosts[V.key]&&P(e=>e.hosts[V.key]=V.value)},children:(0,s.jsx)("i",{className:"bi bi-plus-lg"})})]})]})})]})});function g(e){var n;return(0,s.jsxs)(i.Z.Group,{as:c.Z,className:"mb-3",children:[(0,s.jsx)(i.Z.Label,{column:!0,sm:2,children:e.label}),(0,s.jsx)(d.Z,{sm:10,children:(0,s.jsx)(i.Z.Select,{value:p.dt[null!==(n=e.value)&&void 0!==n?n:p.dt.udp],onChange:n=>e.onChange(p.dt[n.target.value]),children:p.PW.values.filter(e=>0!==e.number).map(e=>(0,s.jsx)("option",{value:p.dt[e.number],children:e.name},e.number))})})]})}var C=a(6263),Z=a(4954),f=a(5118),y=a(5594),k=a(914),N=a.n(k),w=a(5043),F=a(7472),S=a(5369),U=a(2854);let V=(0,F.l)("ChF0b29scy90b29scy5wcm90bxINeXVoYWlpbi50b29scyI6CgpJbnRlcmZhY2VzEiwKCmludGVyZmFjZXMYASADKAsyGC55dWhhaWluLnRvb2xzLkludGVyZmFjZSIsCglJbnRlcmZhY2USDAoEbmFtZRgBIAEoCRIRCglhZGRyZXNzZXMYAiADKAkySwoFdG9vbHMSQgoNZ2V0X2ludGVyZmFjZRIWLmdvb2dsZS5wcm90b2J1Zi5FbXB0eRoZLnl1aGFpaW4udG9vbHMuSW50ZXJmYWNlc0IvWi1naXRodWIuY29tL0FzdXRvcnVmYS95dWhhaWluL3BrZy9wcm90b3MvdG9vbHNiBnByb3RvMw",[U.r]),I=(0,S.L)(V,0);var P=a(8312),L=a(3334),T=a(8560),D=a(8225),H=a(3801),M=a(2510),W=a(9570);let E=l.memo(e=>{let n=n=>{n(e.http),e.onChange(e.http)};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(m.Vf,{label:"Username",value:e.http.username,onChange:e=>n(n=>n.username=e)}),(0,s.jsx)(m.Vf,{label:"Password",value:e.http.password,onChange:e=>n(n=>n.password=e)})]})}),_=l.memo(e=>{let n=n=>{n(e.reverse_http),e.onChange(e.reverse_http)};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(m.Vf,{label:"Url",value:e.reverse_http.url,onChange:e=>n(n=>n.url=e)})})}),R=l.memo(e=>{let n=n=>{n(e.reverse_tcp),e.onChange(e.reverse_tcp)};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(m.Vf,{label:"Host",value:e.reverse_tcp.host,onChange:e=>n(n=>n.host=e)})})}),G=l.memo(e=>{let n=n=>{n(e.redir),e.onChange(e.redir)};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(m.Vf,{label:"Host",value:e.redir.host,onChange:e=>n(n=>n.host=e)})})}),A=l.memo(e=>{let n=n=>{n(e.tproxy),e.onChange(e.tproxy)};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(j.Jg,{label:"DNS Hijacking",checked:e.tproxy.dnsHijacking,onChange:()=>n(e=>e.dnsHijacking=!e.dnsHijacking)}),(0,s.jsx)(j.Jg,{label:"Force Fake IP",checked:e.tproxy.forceFakeip,onChange:()=>n(e=>e.forceFakeip=!e.forceFakeip)}),(0,s.jsx)(m.Vf,{label:"Host",value:e.tproxy.host,onChange:e=>n(n=>n.host=e)})]})}),J=l.memo(e=>{let n=n=>{n(e.socks5),e.onChange(e.socks5)};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(m.Vf,{label:"Username",value:e.socks5.username,onChange:e=>n(n=>n.username=e)}),(0,s.jsx)(m.Vf,{label:"Password",value:e.socks5.password,onChange:e=>n(n=>n.password=e)})]})}),O=l.memo(e=>{let n=n=>{n(e.mixed),e.onChange(e.mixed)};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(m.Vf,{label:"Username",value:e.mixed.username,onChange:e=>n(n=>n.username=e)}),(0,s.jsx)(m.Vf,{label:"Password",value:e.mixed.password,onChange:e=>n(n=>n.password=e)})]})}),B=l.memo(e=>{var n,a;let t=n=>{n(e.tun),e.onChange(e.tun)},[r,o]=(0,l.useState)((0,W.v_)(e.tun.postUp)),[u,h]=(0,l.useState)((0,W.v_)(e.tun.postDown));return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(j.Jg,{checked:e.tun.skipMulticast,onChange:()=>t(e=>e.skipMulticast=!e.skipMulticast),label:"Skip Multicast"}),(0,s.jsx)(m.Vf,{label:"Name",value:e.tun.name,onChange:e=>t(n=>n.name=e)}),(0,s.jsx)(m.Vf,{label:"MTU",value:e.tun.mtu,onChange:e=>t(n=>n.mtu=isNaN(Number(e))?n.mtu:Number(e))}),(0,s.jsx)(m.Vf,{label:"IPv4",value:e.tun.portal,onChange:e=>t(n=>n.portal=e)}),(0,s.jsx)(m.Vf,{label:"IPv6",value:e.tun.portalV6,onChange:e=>t(n=>n.portalV6=e)}),(0,s.jsx)(m.Vf,{label:"Post Up",value:r,onChange:e=>{o(e);try{let n=(0,W.Vl)(e);t(e=>e.postUp=n)}catch(e){console.log(e)}}}),(0,s.jsx)(m.Vf,{label:"Post Down",value:u,onChange:e=>{h(e);try{let n=(0,W.Vl)(e);t(e=>e.postDown=n)}catch(e){console.log(e)}}}),(0,s.jsx)(function(e){return(0,s.jsxs)(i.Z.Group,{as:c.Z,className:"mb-3",children:[(0,s.jsx)(i.Z.Label,{column:!0,sm:2,children:e.label}),(0,s.jsx)(d.Z,{sm:10,children:(0,s.jsxs)(i.Z.Select,{value:D.cn[void 0===e.value||null===e.value?D.cn.fdbased:e.value],onChange:n=>e.onChange(D.cn[n.target.value]),children:[(0,s.jsx)("option",{value:D.cn[D.cn.fdbased],children:"Fdbased"}),(0,s.jsx)("option",{value:D.cn[D.cn.channel],children:"Channel"}),(0,s.jsx)("option",{value:D.cn[D.cn.system_gvisor],children:"System"})]})})]})},{label:"Stack",value:e.tun.driver,onChange:e=>t(n=>n.driver=e)}),(0,s.jsx)(m.yh,{title:"Routes",data:null!==(a=null===(n=e.tun.route)||void 0===n?void 0:n.routes)&&void 0!==a?a:[],onChange:e=>t(n=>{n.route||(n.route=(0,T.U)(D.L8,{})),e||(e=[]),n.route&&(n.route.routes=e)})})]})}),z=e=>null==e||void 0===e.certificates&&void 0===e.nextProtos&&void 0===e.serverNameCertificate,K=l.memo(e=>{let n=n=>{n(e.cert),e.onChange(e.cert)};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(m.NZ,{label:"Cert",value:new TextDecoder().decode(e.cert.cert),onChange:e=>n(n=>{n.cert=new TextEncoder().encode(e)})}),(0,s.jsx)(m.NZ,{label:"Key",value:new TextDecoder().decode(e.cert.key),onChange:e=>n(n=>{n.key=new TextEncoder().encode(e)})}),(0,s.jsx)(m.Vf,{label:"Cert File",value:e.cert.certFilePath,onChange:e=>n(n=>{n.certFilePath=e})}),(0,s.jsx)(m.Vf,{label:"Key File",value:e.cert.keyFilePath,onChange:e=>n(n=>{n.keyFilePath=e})})]})}),q=l.memo(e=>{var n,a;let[t,o]=(0,l.useState)("www.example.com"),c=n=>{n(e.tls),e.onChange(e.tls)};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(m.yh,{title:"Next Protos",data:null!==(a=null===(n=e.tls)||void 0===n?void 0:n.nextProtos)&&void 0!==a?a:[],onChange:e=>c(n=>{e&&(n.nextProtos=e)})}),e.tls&&e.tls.certificates.map((e,n)=>(0,s.jsx)(r.Z,{className:"mb-2",children:(0,s.jsxs)(r.Z.Body,{children:[(0,s.jsx)(r.Z.Title,{className:"d-flex justify-content-end align-items-center",children:(0,s.jsx)(v.Z,{variant:"outline-danger",onClick:()=>c(e=>{(null==e?void 0:e.certificates)!==void 0&&e.certificates.splice(n,1)}),children:(0,s.jsx)("i",{className:"bi bi-x-lg"})})}),(0,s.jsx)(K,{cert:(0,T.U)(D.OC,e),onChange:e=>c(a=>{(null==a?void 0:a.certificates)!==void 0&&(a.certificates[n]=e)})})]})},"tls_certificates"+n)),(0,s.jsx)(x.Z,{className:"d-flex justify-content-end mb-2",children:(0,s.jsxs)(v.Z,{variant:"outline-success",onClick:()=>c(e=>{e.certificates.push((0,T.U)(D.OC,{cert:new Uint8Array(0),key:new Uint8Array(0),certFilePath:"",keyFilePath:""}))}),children:[(0,s.jsx)("i",{className:"bi bi-plus-lg"}),"New Certificate"]})}),e.tls&&e.tls.serverNameCertificate&&Object.entries(e.tls.serverNameCertificate).map(e=>{let[n,a]=e;return(0,s.jsx)(r.Z,{className:"mb-2",children:(0,s.jsxs)(r.Z.Body,{children:[(0,s.jsxs)(r.Z.Title,{className:"d-flex justify-content-between align-items-center",children:[n,(0,s.jsx)(v.Z,{variant:"outline-danger",onClick:()=>c(e=>{null==e||delete e.serverNameCertificate[n]}),children:(0,s.jsx)("i",{className:"bi bi-x-lg"})})]}),(0,s.jsx)(K,{cert:(0,T.U)(D.OC,a),onChange:e=>c(a=>{a.serverNameCertificate[n]=e})})]})},"server_name_certificate"+n)}),(0,s.jsxs)(x.Z,{className:"d-flex justify-content-end",children:[(0,s.jsx)(i.Z.Control,{value:t,onChange:e=>o(e.target.value)}),(0,s.jsxs)(v.Z,{variant:"outline-success",onClick:()=>c(e=>{""!==t&&(e.serverNameCertificate[t]=(0,T.U)(D.OC,{}))}),children:[(0,s.jsx)("i",{className:"bi bi-plus-lg"}),"New SNI Certificate"]})]})]})}),X=l.memo(e=>{let n=n=>{z(e.quic.tls)&&(e.quic.tls=void 0),n(e.quic),e.onChange(e.quic)};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(m.Vf,{label:"Host",onChange:e=>n(n=>n.host=e),value:e.quic.host}),e.quic.tls&&(0,s.jsx)(q,{tls:(0,T.U)(D.pj,null!==e.quic.tls?e.quic.tls:void 0),onChange:e=>n(n=>n.tls=e)})]})}),Y=l.memo(e=>{let n=n=>{z(e.tls.tls)&&(e.tls.tls=void 0),n(e.tls),e.onChange(e.tls)};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(m.Vf,{plaintext:!0,label:"Protocol",value:"TLS"}),e.tls.tls&&(0,s.jsx)(q,{tls:(0,T.U)(D.pj,e.tls.tls),onChange:e=>n(n=>n.tls=e)})]})}),Q=l.memo(e=>{let n=n=>{n(e.reality),e.onChange(e.reality)},[a,t]=(0,l.useState)({value:""}),[r,o]=(0,l.useState)({value:""});return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(m.Vf,{plaintext:!0,label:"Protocol",value:"Reality"}),(0,s.jsx)(m.Vf,{label:"Dest",value:e.reality.dest,onChange:e=>n(n=>n.dest=e)}),(0,s.jsx)(m.Vf,{label:"Private Key",value:e.reality.privateKey,onChange:e=>n(n=>n.privateKey=e)}),(0,s.jsxs)(i.Z.Group,{as:c.Z,className:"mb-3",children:[(0,s.jsx)(i.Z.Label,{column:!0,sm:2,className:"nowrap",children:"Short ID"}),e.reality.shortId.map((e,a)=>(0,s.jsx)(d.Z,{sm:{span:10,offset:0!==a?2:0},children:(0,s.jsxs)(x.Z,{className:"mb-2",children:[(0,s.jsx)(i.Z.Control,{value:e,onChange:e=>n(n=>{n.shortId[a]=e.target.value})}),(0,s.jsx)(v.Z,{variant:"outline-danger",onClick:()=>n(e=>{e.shortId.splice(a,1)}),children:(0,s.jsx)("i",{className:"bi bi-x-lg"})})]})},a)),(0,s.jsx)(d.Z,{sm:{span:10,offset:0!==e.reality.shortId.length?2:0},children:(0,s.jsxs)(x.Z,{className:"mb-2",children:[(0,s.jsx)(i.Z.Control,{value:a.value,onChange:e=>t({value:e.target.value})}),(0,s.jsx)(v.Z,{variant:"outline-success",onClick:()=>n(e=>{e.shortId.push(a.value)}),children:(0,s.jsx)("i",{className:"bi bi-plus-lg"})})]})})]}),(0,s.jsxs)(i.Z.Group,{as:c.Z,className:"mb-3",children:[(0,s.jsx)(i.Z.Label,{column:!0,sm:2,className:"nowrap",children:"Server Name"}),e.reality.serverName.map((e,a)=>(0,s.jsx)(d.Z,{sm:{span:10,offset:0!==a?2:0},children:(0,s.jsxs)(x.Z,{className:"mb-2",children:[(0,s.jsx)(i.Z.Control,{value:e,onChange:e=>n(n=>{n.serverName[a]=e.target.value})}),(0,s.jsx)(v.Z,{variant:"outline-danger",onClick:()=>n(e=>{e.serverName.splice(a,1)}),children:(0,s.jsx)("i",{className:"bi bi-x-lg"})})]})},a)),(0,s.jsx)(d.Z,{sm:{span:10,offset:0!==e.reality.serverName.length?2:0},children:(0,s.jsxs)(x.Z,{className:"mb-2",children:[(0,s.jsx)(i.Z.Control,{value:r.value,onChange:e=>o({value:e.target.value})}),(0,s.jsx)(v.Z,{variant:"outline-success",onClick:()=>n(e=>{e.serverName.push(r.value)}),children:(0,s.jsx)("i",{className:"bi bi-plus-lg"})})]})})]})]})});function $(e,n,a){return a?function(e){e(n),a(n)}:function(e){}}let ee=e=>{let[n,a]=(0,l.useState)((0,L.d)(D.T5,e.value));return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(H.Z,{show:e.show,scrollable:!0,"aria-labelledby":"contained-modal-title-vcenter",size:"xl",onHide:()=>{e.onHide()},onShow:()=>{a((0,L.d)(D.T5,e.value))},centered:!0,children:[(0,s.jsx)(H.Z.Header,{children:(0,s.jsx)(H.Z.Title,{id:"contained-modal-title-vcenter",children:e.value.name})}),(0,s.jsx)(H.Z.Body,{children:(0,s.jsx)(ea,{inbound:n,onChange:e=>{a((0,L.d)(D.T5,e))}})}),(0,s.jsxs)(H.Z.Footer,{children:[(0,s.jsx)(v.Z,{variant:"outline-secondary",onClick:()=>{e.onHide()},children:"Close"}),(0,s.jsx)(v.Z,{variant:"outline-primary",onClick:()=>{e.onChange(n),e.onHide()},children:"Save"})]})]})})},en=l.memo(e=>{var n;let a=$(D.yz,e.inbounds,e.onChange),[t,o]=(0,l.useState)({show:!1,inbound:(0,T.U)(D.T5,{}),onChange:e=>{}}),[c,d]=(0,l.useState)({value:""});return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(ee,{show:t.show,value:t.inbound,onHide:()=>{o({...t,show:!1})},onChange:t.onChange}),(0,s.jsx)(j.Jg,{label:"DNS Hijack",checked:!!e.inbounds.hijackDns,onChange:()=>a(e=>e.hijackDns=!e.hijackDns)}),(0,s.jsx)(j.Jg,{label:"Fakedns",checked:!!e.inbounds.hijackDnsFakeip,onChange:()=>a(e=>e.hijackDnsFakeip=!e.hijackDnsFakeip)}),(0,s.jsx)(j.Jg,{label:"Sniff",checked:null!==(n=e.inbounds.sniff)&&void 0!==n&&!!n.enabled,onChange:()=>a(e=>{var n;return e.sniff=(0,T.U)(D._Z,{enabled:!(null===(n=e.sniff)||void 0===n?void 0:n.enabled)})})}),(0,s.jsx)("hr",{}),(0,s.jsxs)(r.Z,{children:[(0,s.jsx)(r.Z.Header,{children:"Inbounds"}),0===Object.keys(e.inbounds.inbounds).length?(0,s.jsx)(r.Z.Body,{children:(0,s.jsx)("div",{className:"text-center my-2",style:{opacity:"0.4"},children:"No Inbounds"})}):(0,s.jsx)(M.Z,{variant:"flush",children:Object.entries(e.inbounds.inbounds).sort((e,n)=>e[0]<=n[0]?-1:1).map(e=>{let[n,t]=e;return(0,s.jsx)(l.Fragment,{children:(0,s.jsxs)(M.Z.Item,{action:!0,className:"d-flex justify-content-between align-items-center",style:{border:"0ch",borderBottom:"1px solid #dee2e6"},onClick:e=>{e.stopPropagation(),o({show:!0,inbound:t,onChange:e=>{a(a=>{a.inbounds[n]=e})}})},children:[n,(0,s.jsx)(v.Z,{variant:"outline-danger",size:"sm",as:"span",onClick:e=>{e.stopPropagation(),a(e=>{delete e.inbounds[n]})},children:(0,s.jsx)("i",{className:"bi bi-x-lg"})},n+"span-button")]})},"inbounds-"+n)})}),(0,s.jsx)(r.Z.Footer,{children:(0,s.jsxs)(x.Z,{className:"d-flex justify-content-end",children:[(0,s.jsx)(i.Z.Control,{value:c.value,onChange:e=>d({value:e.target.value})}),(0,s.jsxs)(v.Z,{variant:"outline-success",onClick:()=>{""!==c.value&&void 0===e.inbounds.inbounds[c.value]&&a(e=>e.inbounds[c.value]=(0,T.U)(D.T5,{name:c.value}))},children:[(0,s.jsx)("i",{className:"bi bi-plus-lg"}),"New "]})]})})]})]})}),ea=e=>{let n=$(D.T5,e.inbound,e.onChange),a=(a,s)=>{e.inbound.transport.length<=1||a&&0===s||!a&&s===e.inbound.transport.length-1||n(e=>{let n=e.transport[s];e.transport[s]=e.transport[s+(a?-1:1)],e.transport[s+(a?-1:1)]=n})},[t,r]=(0,l.useState)({value:"normal"});return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(j.Jg,{label:"Enabled",checked:e.inbound.enabled,onChange:()=>{n(e=>e.enabled=!e.enabled)}}),(0,s.jsx)(m.Vf,{label:"Name",value:e.inbound.name,onChange:e=>{n(n=>n.name=e)}}),(0,s.jsx)(m.W2,{title:"Network",hideClose:!0,children:(0,s.jsx)(es,{inbound:e.inbound,onChange:e=>{n(n=>e)}})}),(0,s.jsx)(m.W2,{title:"Transport",hideClose:!0,children:(0,s.jsxs)(s.Fragment,{children:[e.inbound.transport.map((l,t)=>{var r,o;return(0,s.jsx)(m.W2,{title:null!==(o=null===(r=l.transport.case)||void 0===r?void 0:r.toString())&&void 0!==o?o:"",onClose:()=>{n(e=>e.transport.splice(t,1))},moveUpDown:new m.kx(e.inbound.transport.length,t,e=>a(e,t)),children:(0,s.jsx)(et,{transport:l,onChange:e=>{n(n=>n.transport[t]=e)}},t)},t)}),(0,s.jsx)(M.Z,{variant:"flush",children:(0,s.jsx)(M.Z.Item,{children:(0,s.jsxs)(x.Z,{children:[(0,s.jsx)(i.Z.Select,{value:t.value,onChange:e=>r({value:e.target.value}),children:["normal","tls","mux","http2","websocket","grpc","reality"].map(e=>(0,s.jsx)("option",{value:e,children:e},e))}),(0,s.jsxs)(v.Z,{variant:"outline-success",onClick:()=>n(e=>{switch(t.value){case"normal":e.transport.push((0,T.U)(D.mM,{transport:{case:"normal",value:(0,T.U)(D.oe,{})}}));break;case"tls":e.transport.push((0,T.U)(D.mM,{transport:{case:"tls",value:(0,T.U)(D.CE,{tls:(0,T.U)(D.pj,{})})}}));break;case"mux":e.transport.push((0,T.U)(D.mM,{transport:{case:"mux",value:(0,T.U)(D.dN,{})}}));break;case"http2":e.transport.push((0,T.U)(D.mM,{transport:{case:"http2",value:(0,T.U)(D.rg,{})}}));break;case"websocket":e.transport.push((0,T.U)(D.mM,{transport:{case:"websocket",value:(0,T.U)(D.Mw,{})}}));break;case"grpc":e.transport.push((0,T.U)(D.mM,{transport:{case:"grpc",value:(0,T.U)(D.zW,{})}}));break;case"reality":e.transport.push((0,T.U)(D.mM,{transport:{case:"reality",value:(0,T.U)(D.Q4,{})}}))}}),children:[(0,s.jsx)("i",{className:"bi bi-plus-lg"}),"Add"]})]})})})]})}),(0,s.jsx)(m.W2,{title:"Protocol",hideClose:!0,children:(0,s.jsx)(eo,{inbound:e.inbound,onChange:e=>{n(n=>e)}})})]})},es=e=>{var n,a;let t=$(D.T5,e.inbound,e.onChange),[r,o]=(0,l.useState)({value:null!==(a=null===(n=e.inbound.network.case)||void 0===n?void 0:n.toString())&&void 0!==a?a:"tcpudp"});return(0,l.useEffect)(()=>{o({value:e.inbound.network.case?e.inbound.network.case.toString():"tcpudp"})},[e.inbound]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(M.Z,{variant:"flush",children:(0,s.jsx)(M.Z.Item,{children:(0,s.jsxs)(x.Z,{children:[(0,s.jsx)(i.Z.Select,{value:r.value,onChange:e=>o({value:e.target.value}),children:["empty","tcpudp","quic"].map(e=>(0,s.jsx)("option",{value:e,children:e},e))}),(0,s.jsx)(v.Z,{variant:"outline-success",onClick:()=>t(e=>{switch(r.value){case"tcpudp":e.network={case:"tcpudp",value:(0,T.U)(D.pr,{})};break;case"quic":e.network={case:"quic",value:(0,T.U)(D.jS,{})};break;case"empty":e.network={case:"empty",value:(0,T.U)(D.b3,{})}}}),children:"Use"})]})})}),(0,s.jsx)("br",{}),(0,s.jsx)(el,{inbound:e.inbound,onChange:e.onChange})]})},el=e=>{let n=$(D.T5,e.inbound,e.onChange);switch(e.inbound.network.case){case"tcpudp":return(0,s.jsx)(ec,{protocol:e.inbound.network.value,onChange:e=>{n(n=>n.network.value=e)}});case"quic":return(0,s.jsx)(X,{quic:e.inbound.network.value,onChange:e=>{n(n=>n.network.value=e)}});case"empty":return(0,s.jsx)(s.Fragment,{})}},et=e=>{let n=$(D.mM,e.transport,e.onChange);switch(e.transport.transport.case){case"normal":return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:"text-center",style:{opacity:"0.4"},children:"Normal"})});case"tls":return(0,s.jsx)(Y,{tls:e.transport.transport.value,onChange:e=>{n(n=>n.transport.value=e)}});case"mux":return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:"text-center",style:{opacity:"0.4"},children:"Mux"})});case"http2":return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:"text-center",style:{opacity:"0.4"},children:"HTTP2"})});case"websocket":return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:"text-center",style:{opacity:"0.4"},children:"Websocket"})});case"grpc":return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:"text-center",style:{opacity:"0.4"},children:"Grpc"})});case"reality":return(0,s.jsx)(Q,{reality:e.transport.transport.value,onChange:e=>{n(n=>n.transport.value=e)}})}},er=e=>{let n=$(D.T5,e.inbound,e.onChange);switch(e.inbound.protocol.case){case"http":return(0,s.jsx)(E,{http:e.inbound.protocol.value,onChange:e=>{n(n=>n.protocol.value=e)}});case"reverseHttp":return(0,s.jsx)(_,{reverse_http:e.inbound.protocol.value,onChange:e=>{n(n=>n.protocol.value=e)}});case"reverseTcp":return(0,s.jsx)(R,{reverse_tcp:e.inbound.protocol.value,onChange:e=>{n(n=>n.protocol.value=e)}});case"socks5":return(0,s.jsx)(J,{socks5:e.inbound.protocol.value,onChange:e=>{n(n=>n.protocol.value=e)}});case"socks4a":return(0,s.jsx)(s.Fragment,{});case"mix":return(0,s.jsx)(O,{mixed:e.inbound.protocol.value,onChange:e=>{n(n=>n.protocol.value=e)}});case"redir":return(0,s.jsx)(G,{redir:e.inbound.protocol.value,onChange:e=>{n(n=>n.protocol.value=e)}});case"tun":return(0,s.jsx)(B,{tun:e.inbound.protocol.value,onChange:e=>{n(n=>n.protocol.value=e)}});case"yuubinsya":return(0,s.jsx)(ei,{yuubinsya:e.inbound.protocol.value,onChange:e=>{n(n=>n.protocol.value=e)}});case"tproxy":return(0,s.jsx)(A,{tproxy:e.inbound.protocol.value,onChange:e=>{n(n=>n.protocol.value=e)}})}},eo=e=>{let n=$(D.T5,e.inbound,e.onChange),[a,t]=(0,l.useState)({value:e.inbound.protocol.case?e.inbound.protocol.case.toString():"yuubinsya"});return(0,l.useEffect)(()=>{t({value:e.inbound.protocol.case?e.inbound.protocol.case.toString():"yuubinsya"})},[e.inbound]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(M.Z,{variant:"flush",children:(0,s.jsx)(M.Z.Item,{children:(0,s.jsxs)(x.Z,{children:[(0,s.jsx)(i.Z.Select,{value:a.value,onChange:e=>t({value:e.target.value}),children:["http","reverseHttp","reverseTcp","socks5","mix","redir","tun","yuubinsya","tproxy"].map(e=>(0,s.jsx)("option",{value:e,children:e},e))}),(0,s.jsx)(v.Z,{variant:"outline-success",onClick:()=>n(e=>{switch(a.value){case"http":e.protocol={case:"http",value:(0,T.U)(D.Ii,{})};break;case"reverseHttp":e.protocol={case:"reverseHttp",value:(0,T.U)(D.Sx,{})};break;case"reverseTcp":e.protocol={case:"reverseTcp",value:(0,T.U)(D.Nr,{})};break;case"socks5":e.protocol={case:"socks5",value:(0,T.U)(D.pJ,{})};break;case"mix":e.protocol={case:"mix",value:(0,T.U)(D.BB,{})};break;case"redir":e.protocol={case:"redir",value:(0,T.U)(D._9,{})};break;case"tun":e.protocol={case:"tun",value:(0,T.U)(D.S7,{})};break;case"yuubinsya":e.protocol={case:"yuubinsya",value:(0,T.U)(D.UM,{})};break;case"tproxy":e.protocol={case:"tproxy",value:(0,T.U)(D.zt,{})}}}),children:"Use"})]})})}),(0,s.jsx)("br",{}),(0,s.jsx)(er,{inbound:e.inbound,onChange:e=>{n(n=>e)}})]})},ei=e=>{let n=$(D.UM,e.yuubinsya,e.onChange);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(j.Jg,{label:"TCP Encrypt",checked:e.yuubinsya.tcpEncrypt,onChange:()=>{n(e=>e.tcpEncrypt=!e.tcpEncrypt)}}),(0,s.jsx)(j.Jg,{label:"UDP Encrypt",checked:e.yuubinsya.udpEncrypt,onChange:()=>{n(e=>e.udpEncrypt=!e.udpEncrypt)}}),(0,s.jsx)(m.Vf,{label:"Password",value:e.yuubinsya.password,onChange:e=>{n(n=>n.password=e)}})]})},ec=e=>{let n=$(D.pr,e.protocol,e.onChange);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(m.Vf,{label:"Host",value:e.protocol.host,onChange:e=>{n(n=>n.host=e)}}),(0,s.jsx)(ed,{label:"Control",type:D.Dk,value:e.protocol.control,onChange:e=>{n(n=>{n.control=e})}})]})};function ed(e){var n;return(0,s.jsxs)(i.Z.Group,{as:c.Z,className:"mb-3",children:[(0,s.jsx)(i.Z.Label,{column:!0,sm:2,children:e.label}),(0,s.jsx)(d.Z,{sm:10,children:(0,s.jsx)(i.Z.Select,{value:e.value,onChange:n=>e.onChange(Number(n.target.value)),children:e.type.values.filter(null!==(n=e.filter)&&void 0!==n?n:()=>!0).map(e=>(0,s.jsx)("option",{value:e.number,children:e.name},e.number))})})]})}var eu=a(9569),eh=function(){var e,n,a,x,g;let k=(0,l.useContext)(Z.P),{data:F,error:S,isLoading:U,mutate:V}=(0,f.ZP)("/config",(0,y.D4)(w.FL),{revalidateOnFocus:!1}),{data:P}=(0,f.ZP)((null==F?void 0:null===(e=F.platform)||void 0===e?void 0:e.androidApp)?null:"/interfaces",(0,y.D4)(I),{revalidateOnFocus:!0});if(void 0!==S)return(0,s.jsx)(N(),{statusCode:S.code,title:S.msg});if(U||void 0===F)return(0,s.jsx)(C.Z,{});let H=e=>{V(n=>{let a=(0,L.d)(w.FL,n);return e(a),a},!1)},M=e=>{var n,a,s=[];return(null===(n=e.systemProxy)||void 0===n?void 0:n.http)&&s.push(1),(null===(a=e.systemProxy)||void 0===a?void 0:a.socks5)&&s.push(2),s};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(t.Z.Container,{defaultActiveKey:"home",children:(0,s.jsxs)(r.Z,{className:"mb-3",children:[(0,s.jsx)(r.Z.Header,{children:(0,s.jsxs)(o.Z,{variant:"tabs",style:{flexWrap:"nowrap",overflow:"auto hidden"},children:[(0,s.jsx)(o.Z.Item,{children:(0,s.jsx)(o.Z.Link,{eventKey:"home",children:"Setting"})}),(0,s.jsx)(o.Z.Item,{children:(0,s.jsx)(o.Z.Link,{eventKey:"dns",children:"DNS"})}),(0,s.jsx)(o.Z.Item,{children:(0,s.jsx)(o.Z.Link,{eventKey:"inbound",children:"Inbound"})})]})}),(0,s.jsx)(r.Z.Body,{children:(0,s.jsxs)(t.Z.Content,{children:[(0,s.jsx)(t.Z.Pane,{eventKey:"home",children:(0,s.jsxs)("fieldset",{disabled:null===(n=F.platform)||void 0===n?void 0:n.androidApp,children:[(0,s.jsx)(j.Jg,{label:"IPv6",checked:F.ipv6,onChange:()=>V((0,T.U)(w.FL,{...F,ipv6:!F.ipv6}),!1)}),(0,s.jsx)(m.Vf,{label:"Network Interface",value:F.netInterface,onChange:e=>H(n=>n.netInterface=e),reminds:null==P?void 0:P.interfaces.map(e=>{if(e.name){var n;return{label:e.name,value:e.name,label_children:null===(n=e.addresses)||void 0===n?void 0:n.map(e=>e||"")}}}).filter(e=>!!e)}),(0,s.jsxs)(i.Z.Group,{as:c.Z,className:"mb-2",children:[(0,s.jsx)(i.Z.Label,{column:!0,sm:2,className:"nowrap",children:"System Proxy"}),(0,s.jsx)(d.Z,{sm:10,children:(0,s.jsxs)(u.Z,{type:"checkbox",className:"d-flex",defaultValue:M(F),value:M(F),onChange:e=>{let n=!1,a=!1;for(var s of e)1===s&&(n=!0),2===s&&(a=!0);H(e=>{e.systemProxy=(0,T.U)(w.uh,{http:n,socks5:a})})},children:[(0,s.jsx)(h.Z,{variant:"outline-primary",className:"w-100",id:"system-proxy-tbg-btn-1",value:1,children:"HTTP"}),(0,s.jsx)(h.Z,{variant:"outline-primary",className:"w-100",id:"system-proxy-tbg-btn-2",value:2,children:"SOCKS5"})]})})]}),(0,s.jsx)("hr",{}),(0,s.jsx)(r.Z.Title,{className:"mb-2",children:"Logcat"}),(0,s.jsx)(j.Jg,{label:"Save",checked:F.logcat.save,onChange:()=>H(e=>e.logcat.save=!e.logcat.save)}),(0,s.jsx)(ev,{label:"Level",value:F.logcat.level,onChange:e=>H(n=>{n.logcat.level=e})})]})}),(0,s.jsx)(t.Z.Pane,{eventKey:"dns",title:"DNS",children:(0,s.jsx)("fieldset",{disabled:null===(a=F.platform)||void 0===a?void 0:a.androidApp,children:(0,s.jsx)(b,{data:(0,T.U)(p.X0,F.dns),onChange:e=>H(n=>n.dns=(0,L.d)(p.X0,e))})})}),(0,s.jsx)(t.Z.Pane,{eventKey:"inbound",title:"Inbound",children:(0,s.jsx)("fieldset",{disabled:null===(x=F.platform)||void 0===x?void 0:x.androidApp,children:(0,s.jsx)(en,{inbounds:(0,T.U)(D.yz,F.server),onChange:e=>H(n=>n.server=(0,L.d)(D.yz,e))})})})]})}),!(null===(g=F.platform)||void 0===g?void 0:g.androidApp)&&(0,s.jsx)(r.Z.Footer,{className:"d-flex justify-content-md-end",children:(0,s.jsx)(v.Z,{variant:"outline-primary",onClick:()=>{(0,y.Uo)("/config",{body:(0,eu.O)(w.FL,F)}).then(async e=>{let{error:n}=e;void 0!==n?k.Error("save config failed, ".concat(n.code,"| ").concat(await n.msg)):(k.Info("Save Config Successfully"),V())})},children:"Save"})})]})})})};function ev(e){return(0,s.jsxs)(i.Z.Group,{as:c.Z,className:"mb-3",children:[(0,s.jsx)(i.Z.Label,{column:!0,sm:2,children:e.label}),(0,s.jsx)(d.Z,{sm:10,children:(0,s.jsxs)(i.Z.Select,{value:P.LC[e.value],onChange:n=>e.onChange(P.LC[n.target.value]),children:[(0,s.jsx)("option",{value:P.LC[P.LC.debug],children:"DEBUG"}),(0,s.jsx)("option",{value:P.LC[P.LC.info],children:"INFO"}),(0,s.jsx)("option",{value:P.LC[P.LC.warning],children:"WARN"}),(0,s.jsx)("option",{value:P.LC[P.LC.error],children:"ERROR"})]})})]})}}},function(e){e.O(0,[7439,5118,5982,4122,1253,611,6537,2722,9771,1246,2971,2117,1744],function(){return e(e.s=2280)}),_N_E=e.O()}]);
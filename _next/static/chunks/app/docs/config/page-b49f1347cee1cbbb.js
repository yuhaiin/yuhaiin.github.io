(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[347],{6320:function(e,s,n){Promise.resolve().then(n.bind(n,3598))},4811:function(e,s,n){"use strict";var a=n(7437),l=n(7332),t=n(1375),r=n.n(t);s.Z=function(e){return(0,a.jsxs)("div",{className:"z-1090 d-flex flex-column justify-content-center align-items-center",style:{height:"100px"},children:[void 0!==e.children&&(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(r(),{className:"p2",statusCode:void 0!==e.code?e.code:500,title:e.children})}),(0,a.jsx)("div",{className:"p2",children:(0,a.jsx)(l.Z,{})})]})}},8029:function(e,s,n){"use strict";n.d(s,{P:function(){return o},t:function(){return i}});var a=n(7437),l=n(2265),t=n(5127),r=n(5278);let o=(0,l.createContext)({Info:e=>{},Error:e=>{}}),i=e=>{let{children:s}=e,[n,i]=(0,l.useState)({value:{},index:0}),c=(e,s)=>{i(n=>(n.value[n.index]={text:e,type:s},n.index++,{...n}))};return(0,a.jsxs)(o.Provider,{value:{Info:e=>{console.log(e),c(e,"success")},Error:e=>{console.error(e),c(e,"danger")}},children:[(0,a.jsx)(r.Z,{className:"p-3",position:"top-center",containerPosition:"fixed",style:{zIndex:1},children:Object.entries(n.value).map(e=>{let[s,l]=e;return(0,a.jsxs)(t.Z,{role:"alert","aria-live":"assertive",show:!0,bg:l.type,onClose:()=>{let e=n.value;delete e[s],i({...n,value:e}),console.log("close: "+s)},"aria-atomic":"true",delay:4e3,autohide:!0,animation:!0,children:[(0,a.jsxs)(t.Z.Header,{children:[(0,a.jsx)("strong",{className:"me-auto",children:"Notification"}),(0,a.jsx)("small",{className:"text-muted",children:"just now"})]}),(0,a.jsx)(t.Z.Body,{className:"text-center",children:l.text})]},"toast"+s)})}),s]})}},682:function(e,s,n){"use strict";n.d(s,{Jg:function(){return c},NZ:function(){return i},Vf:function(){return o}});var a=n(7437),l=n(5628),t=n(2789),r=n(5749);let o=e=>(0,a.jsxs)(l.Z.Group,{as:t.Z,className:"mb-3",children:[(0,a.jsx)(l.Z.Label,{column:!0,sm:2,className:"nowrap",children:e.label}),(0,a.jsx)(r.Z,{sm:10,children:(0,a.jsx)(l.Z.Control,{value:null!==e.value?e.value:"",plaintext:e.plaintext,onChange:s=>void 0!==e.onChange&&e.onChange(s.target.value)})})]}),i=e=>(0,a.jsxs)(l.Z.Group,{as:t.Z,className:"mb-3",children:[(0,a.jsx)(l.Z.Label,{column:!0,sm:2,className:"nowrap",children:e.label}),(0,a.jsx)(r.Z,{sm:10,children:(0,a.jsx)(l.Z.Control,{as:"textarea",rows:5,value:e.value,onChange:s=>e.onChange(s.target.value)})})]}),c=e=>(0,a.jsxs)(l.Z.Group,{as:t.Z,className:"mb-3",children:[(0,a.jsx)(l.Z.Label,{column:!0,sm:2,children:e.label}),(0,a.jsx)(r.Z,{sm:10,className:"d-flex align-items-center",children:(0,a.jsx)(l.Z.Check,{className:"d-flex align-items-center",type:"switch",checked:e.checked,onChange:()=>e.onChange()})})]})},3598:function(e,s,n){"use strict";n.r(s),n.d(s,{default:function(){return z}});var a=n(7437),l=n(2265),t=n(5628),r=n(1217),o=n(2789),i=n(5749),c=n(8490),u=n(983),d=n(543),h=n(5397),x=n(682),v=n(8597);let m=l.memo(e=>{var s,n,o,i,u,d,v,m,j,g,b,y;let[f,C]=(0,l.useState)({key:"",value:""}),_=s=>{s(e.data),e.onChange(e.data)};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(x.Vf,{label:"Server",value:e.data.server,onChange:e=>_(s=>s.server=e)}),(0,a.jsx)("hr",{}),(0,a.jsx)(r.Z.Title,{children:"FakeDNS"}),(0,a.jsx)(x.Jg,{label:"Enabled",checked:e.data.fakedns,onChange:()=>_(e=>e.fakedns=!e.fakedns)}),(0,a.jsx)(x.Vf,{label:"Fake IP Range",value:e.data.fakedns_ip_range,onChange:e=>_(s=>s.fakedns_ip_range=e)}),(0,a.jsx)("hr",{}),(0,a.jsx)(r.Z.Title,{children:"Local DNS"}),(0,a.jsx)(x.Vf,{label:"Host",value:null===(s=e.data.local)||void 0===s?void 0:s.host,onChange:e=>_(s=>{void 0!==s.local&&(s.local.host=e)})}),(0,a.jsx)(p,{label:"Type",value:null===(n=e.data.local)||void 0===n?void 0:n.type,onChange:e=>_(s=>{void 0!==s.local&&(s.local.type=e)})}),(0,a.jsx)(x.Vf,{label:"Subnet",value:null===(o=e.data.local)||void 0===o?void 0:o.subnet,onChange:e=>_(s=>{void 0!==s.local&&(s.local.subnet=e)})}),(0,a.jsx)(x.Vf,{label:"SNI",value:null===(i=e.data.local)||void 0===i?void 0:i.tls_servername,onChange:e=>_(s=>{void 0!==s.local&&(s.local.tls_servername=e)})}),(0,a.jsx)("hr",{}),(0,a.jsx)(r.Z.Title,{children:"Remote DNS"}),(0,a.jsx)(x.Jg,{label:"Use IP",checked:e.data.resolve_remote_domain,onChange:()=>_(e=>e.resolve_remote_domain=!e.resolve_remote_domain)}),(0,a.jsx)(x.Vf,{label:"Host",value:null===(u=e.data.remote)||void 0===u?void 0:u.host,onChange:e=>_(s=>{void 0!==s.remote&&(s.remote.host=e)})}),(0,a.jsx)(p,{label:"Type",value:null===(d=e.data.remote)||void 0===d?void 0:d.type,onChange:e=>_(s=>{void 0!==s.remote&&(s.remote.type=e)})}),(0,a.jsx)(x.Vf,{label:"Subnet",value:null===(v=e.data.remote)||void 0===v?void 0:v.subnet,onChange:e=>_(s=>{void 0!==s.remote&&(s.remote.subnet=e)})}),(0,a.jsx)(x.Vf,{label:"SNI",value:null===(m=e.data.remote)||void 0===m?void 0:m.tls_servername,onChange:e=>_(s=>{void 0!==s.remote&&(s.remote.tls_servername=e)})}),(0,a.jsx)("hr",{}),(0,a.jsx)(r.Z.Title,{children:"Bootstrap DNS"}),(0,a.jsx)(x.Vf,{label:"Host",value:null===(j=e.data.bootstrap)||void 0===j?void 0:j.host,onChange:e=>_(s=>{void 0!==s.bootstrap&&(s.bootstrap.host=e)})}),(0,a.jsx)(p,{label:"Type",value:null===(g=e.data.bootstrap)||void 0===g?void 0:g.type,onChange:e=>_(s=>{void 0!==s.bootstrap&&(s.bootstrap.type=e)})}),(0,a.jsx)(x.Vf,{label:"Subnet",value:null===(b=e.data.bootstrap)||void 0===b?void 0:b.subnet,onChange:e=>_(s=>{void 0!==s.bootstrap&&(s.bootstrap.subnet=e)})}),(0,a.jsx)(x.Vf,{label:"SNI",value:null===(y=e.data.bootstrap)||void 0===y?void 0:y.tls_servername,onChange:e=>_(s=>{void 0!==s.bootstrap&&(s.bootstrap.tls_servername=e)})}),(0,a.jsx)("hr",{}),(0,a.jsx)(r.Z.Title,{children:"Hosts"}),Object.entries(e.data.hosts).map(e=>{let[s,n]=e;return(0,a.jsxs)(h.Z,{className:"mb-2",children:[(0,a.jsx)(t.Z.Control,{readOnly:!0,value:s}),(0,a.jsx)(h.Z.Text,{children:(0,a.jsx)("i",{className:"bi bi-arrow-right"})}),(0,a.jsx)(t.Z.Control,{value:n,onChange:e=>_(n=>n.hosts[s]=e.target.value)}),(0,a.jsx)(c.Z,{variant:"outline-danger",onClick:()=>_(e=>delete e.hosts[s]),children:(0,a.jsx)("i",{className:"bi bi-x-lg"})})]},"hosts"+s)}),(0,a.jsxs)(h.Z,{className:"mb-2",children:[(0,a.jsx)(t.Z.Control,{value:f.key,onChange:e=>C({...f,key:e.target.value})}),(0,a.jsx)(h.Z.Text,{children:(0,a.jsx)("i",{className:"bi bi-arrow-right"})}),(0,a.jsx)(t.Z.Control,{value:f.value,onChange:e=>C({...f,value:e.target.value})}),(0,a.jsx)(c.Z,{variant:"outline-success",onClick:()=>{""!==f.key&&void 0===e.data.hosts[f.key]&&_(e=>e.hosts[f.key]=f.value)},children:(0,a.jsx)("i",{className:"bi bi-plus-lg"})})]})]})}),j=v.yE.dns.type;function p(e){return(0,a.jsxs)(t.Z.Group,{as:o.Z,className:"mb-3",children:[(0,a.jsx)(t.Z.Label,{column:!0,sm:2,children:e.label}),(0,a.jsx)(i.Z,{sm:10,children:(0,a.jsxs)(t.Z.Select,{value:j[void 0===e.value||null===e.value?j.udp:e.value],onChange:s=>e.onChange(j[s.target.value]),children:[(0,a.jsx)("option",{value:j[j.udp],children:"UDP"}),(0,a.jsx)("option",{value:j[j.tcp],children:"TCP"}),(0,a.jsx)("option",{value:j[j.doh],children:"DOH"}),(0,a.jsx)("option",{value:j[j.dot],children:"DOT"}),(0,a.jsx)("option",{value:j[j.doq],children:"DOQ"}),(0,a.jsx)("option",{value:j[j.doh3],children:"DOH3"})]})})]})}let g=v.yE.bypass.mode,b=v.yE.bypass.resolve_strategy;g.bypass,g.bypass;let y=l.memo(e=>{let s={hostname:["www.example.com"],mode:g.proxy,tag:"",resolve_strategy:b.default},n=s=>{s(e.bypass),e.onChange(e.bypass)};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(C,{label:"TCP",network:!0,value:e.bypass.tcp,onChange:e=>n(s=>s.tcp=e)}),(0,a.jsx)(C,{label:"UDP",network:!0,value:e.bypass.udp,onChange:e=>n(s=>s.udp=e)}),(0,a.jsx)(x.Vf,{label:"Bypass File",value:e.bypass.bypass_file,onChange:e=>n(s=>s.bypass_file=e)}),(0,a.jsx)("hr",{}),"Custom Rules",e.bypass.custom_rule_v3.map((e,s)=>(0,a.jsxs)("div",{className:"mb-3",children:[(0,a.jsx)("hr",{}),(0,a.jsx)(f,{config:new v.yE.bypass.mode_config(e),onChange:e=>n(n=>n.custom_rule_v3[s]=e)}),(0,a.jsxs)(c.Z,{variant:"outline-danger",onClick:()=>n(e=>e.custom_rule_v3.splice(s,1)),children:[(0,a.jsx)("i",{className:"bi bi-x-lg"}),"Remove Current Rule"]})]},"custom_rule_v3"+s)),(0,a.jsx)("hr",{}),(0,a.jsx)("div",{className:"d-flex mb-2",children:(0,a.jsxs)(c.Z,{className:"flex-grow-1",variant:"outline-success",onClick:()=>n(e=>e.custom_rule_v3.push(s)),children:[(0,a.jsx)("i",{className:"bi bi-plus-lg mb-2"}),"New Rule"]})})]})}),f=e=>{let s=s=>{s(e.config),e.onChange(e.config)},[n,r]=(0,l.useState)({value:""});return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(C,{label:"Mode",network:!1,value:e.config.mode,onChange:e=>s(s=>s.mode=e)}),(0,a.jsx)(x.Vf,{label:"Tag",value:e.config.tag,onChange:e=>s(s=>s.tag=e)}),(0,a.jsx)(_,{label:"Resolve Strategy",value:e.config.resolve_strategy,onChange:e=>s(s=>s.resolve_strategy=e)}),(0,a.jsxs)(t.Z.Group,{as:o.Z,className:"mb-3",children:[(0,a.jsx)(t.Z.Label,{column:!0,sm:2,className:"nowrap",children:"IP/DOMAIN"}),e.config.hostname.map((e,n)=>(0,a.jsx)(i.Z,{sm:{span:10,offset:0!==n?2:0},children:(0,a.jsxs)(h.Z,{className:"mb-2",children:[(0,a.jsx)(t.Z.Control,{value:e,onChange:e=>s(s=>s.hostname[n]=e.target.value)}),(0,a.jsx)(c.Z,{variant:"outline-danger",onClick:()=>s(e=>e.hostname.splice(n,1)),children:(0,a.jsx)("i",{className:"bi bi-x-lg"})})]})},n)),(0,a.jsx)(i.Z,{sm:{span:10,offset:0!==e.config.hostname.length?2:0},children:(0,a.jsxs)(h.Z,{className:"mb-2",children:[(0,a.jsx)(t.Z.Control,{value:n.value,onChange:e=>r({value:e.target.value})}),(0,a.jsx)(c.Z,{variant:"outline-success",onClick:()=>s(e=>e.hostname.push(n.value)),children:(0,a.jsx)("i",{className:"bi bi-plus-lg"})})]})})]})]})};function C(e){return(0,a.jsxs)(t.Z.Group,{as:o.Z,className:"mb-3",children:[(0,a.jsx)(t.Z.Label,{column:!0,sm:2,children:e.label}),(0,a.jsx)(i.Z,{sm:10,children:(0,a.jsxs)(t.Z.Select,{value:g[e.value],onChange:s=>e.onChange(g[s.target.value]),children:[e.network&&(0,a.jsx)("option",{value:g[g.bypass],children:"BYPASS"}),(0,a.jsx)("option",{value:g[g.direct],children:"DIRECT"}),(0,a.jsx)("option",{value:g[g.proxy],children:"PROXY"}),(0,a.jsx)("option",{value:g[g.block],children:"BLOCK"})]})})]})}function _(e){return(0,a.jsxs)(t.Z.Group,{as:o.Z,className:"mb-3",children:[(0,a.jsx)(t.Z.Label,{column:!0,sm:2,children:e.label}),(0,a.jsx)(i.Z,{sm:10,children:(0,a.jsxs)(t.Z.Select,{value:b[e.value],onChange:s=>e.onChange(b[s.target.value]),children:[(0,a.jsx)("option",{value:b[b.default],children:"default"}),(0,a.jsx)("option",{value:b[b.prefer_ipv4],children:"prefer_ipv4"}),(0,a.jsx)("option",{value:b[b.only_ipv4],children:"only_ipv4"}),(0,a.jsx)("option",{value:b[b.prefer_ipv6],children:"prefer_ipv6"}),(0,a.jsx)("option",{value:b[b.only_ipv6],children:"only_ipv6"})]})})]})}var Z=n(2180);let k=l.memo(e=>{let s=s=>{s(e.http),e.onChange(e.http)};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(x.Vf,{label:"Host",value:e.http.host,onChange:e=>s(s=>s.host=e)}),(0,a.jsx)(x.Vf,{label:"Username",value:e.http.username,onChange:e=>s(s=>s.username=e)}),(0,a.jsx)(x.Vf,{label:"Password",value:e.http.password,onChange:e=>s(s=>s.password=e)})]})}),w=l.memo(e=>{let s=s=>{s(e.redir),e.onChange(e.redir)};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(x.Vf,{label:"Host",value:e.redir.host,onChange:e=>s(s=>s.host=e)})})}),N=l.memo(e=>{let s=s=>{s(e.tproxy),e.onChange(e.tproxy)};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(x.Jg,{label:"DNS Hijacking",checked:e.tproxy.dns_hijacking,onChange:()=>s(e=>e.dns_hijacking=!e.dns_hijacking)}),(0,a.jsx)(x.Jg,{label:"Force Fake IP",checked:e.tproxy.force_fakeip,onChange:()=>s(e=>e.force_fakeip=!e.force_fakeip)}),(0,a.jsx)(x.Vf,{label:"Host",value:e.tproxy.host,onChange:e=>s(s=>s.host=e)})]})}),E=l.memo(e=>{let s=s=>{s(e.socks5),e.onChange(e.socks5)};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(x.Vf,{label:"Host",value:e.socks5.host,onChange:e=>s(s=>s.host=e)}),(0,a.jsx)(x.Vf,{label:"Username",value:e.socks5.username,onChange:e=>s(s=>s.username=e)}),(0,a.jsx)(x.Vf,{label:"Password",value:e.socks5.password,onChange:e=>s(s=>s.password=e)})]})}),S=l.memo(e=>{let s=s=>{s(e.mixed),e.onChange(e.mixed)};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(x.Vf,{label:"Host",value:e.mixed.host,onChange:e=>s(s=>s.host=e)}),(0,a.jsx)(x.Vf,{label:"Username",value:e.mixed.username,onChange:e=>s(s=>s.username=e)}),(0,a.jsx)(x.Vf,{label:"Password",value:e.mixed.password,onChange:e=>s(s=>s.password=e)})]})}),V=l.memo(e=>{let s=s=>{s(e.tun),e.onChange(e.tun)};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(x.Jg,{label:"DNS Hijacking",checked:e.tun.dns_hijacking,onChange:()=>s(e=>e.dns_hijacking=!e.dns_hijacking)}),(0,a.jsx)(x.Jg,{checked:e.tun.skip_multicast,onChange:()=>s(e=>e.skip_multicast=!e.skip_multicast),label:"Skip Multicast"}),(0,a.jsx)(x.Vf,{label:"Name",value:e.tun.name,onChange:e=>s(s=>s.name=e)}),(0,a.jsx)(x.Vf,{label:"Mtu",value:e.tun.mtu,onChange:e=>s(s=>s.mtu=isNaN(Number(e))?s.mtu:Number(e))}),(0,a.jsx)(x.Vf,{label:"Gateway",value:e.tun.gateway,onChange:e=>s(s=>s.gateway=e)}),(0,a.jsx)(x.Vf,{label:"Portal",value:e.tun.portal,onChange:e=>s(s=>s.portal=e)}),(0,a.jsxs)(t.Z.Group,{as:o.Z,className:"mb-3",children:[(0,a.jsx)(t.Z.Label,{column:!0,sm:2,children:"Driver"}),(0,a.jsx)(i.Z,{sm:10,children:(0,a.jsxs)(t.Z.Select,{value:e.tun.driver,onChange:e=>s(s=>s.driver=v.yE.listener.tun.endpoint_driver[e.target.value]),children:[(0,a.jsx)("option",{value:v.yE.listener.tun.endpoint_driver[v.yE.listener.tun.endpoint_driver.fdbased],children:"Fdbased"}),(0,a.jsx)("option",{value:v.yE.listener.tun.endpoint_driver[v.yE.listener.tun.endpoint_driver.channel],children:"Channel"}),(0,a.jsx)("option",{value:v.yE.listener.tun.endpoint_driver[v.yE.listener.tun.endpoint_driver.system_gvisor],children:"System"})]})})]})]})}),P=e=>null==e||void 0===e.certificates&&void 0===e.next_protos&&void 0===e.server_name_certificate,T=l.memo(e=>{let s=s=>{s(e.cert),e.onChange(e.cert)};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(x.NZ,{label:"Cert",value:new TextDecoder().decode(e.cert.cert),onChange:e=>s(s=>{s.cert=new TextEncoder().encode(e)})}),(0,a.jsx)(x.NZ,{label:"Key",value:new TextDecoder().decode(e.cert.key),onChange:e=>s(s=>{s.key=new TextEncoder().encode(e)})}),(0,a.jsx)(x.Vf,{label:"Cert File",value:e.cert.cert_file_path,onChange:e=>s(s=>{s.cert_file_path=e})}),(0,a.jsx)(x.Vf,{label:"Key File",value:e.cert.key_file_path,onChange:e=>s(s=>{s.key_file_path=e})})]})}),F=l.memo(e=>{var s;let[n,u]=(0,l.useState)("www.example.com"),[d,x]=(0,l.useState)({value:""}),m=s=>{s(e.tls),e.onChange(e.tls)};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.Z.Group,{as:o.Z,className:"mb-3",children:[(0,a.jsx)(t.Z.Label,{column:!0,sm:2,className:"nowrap",children:"Next Protos"}),e.tls&&e.tls.next_protos.map((e,s)=>(0,a.jsx)(i.Z,{sm:{span:10,offset:0!==s?2:0},children:(0,a.jsxs)(h.Z,{className:"mb-2",children:[(0,a.jsx)(t.Z.Control,{value:e,onChange:e=>m(n=>{null!==n&&void 0!==n.next_protos&&(n.next_protos[s]=e.target.value)})}),(0,a.jsx)(c.Z,{variant:"outline-danger",onClick:()=>m(e=>{null!==e&&void 0!==e.next_protos&&(null==e||e.next_protos.splice(s,1))}),children:(0,a.jsx)("i",{className:"bi bi-x-lg"})})]})},s)),(0,a.jsx)(i.Z,{sm:{span:10,offset:e.tls&&(null===(s=e.tls.next_protos)||void 0===s?void 0:s.length)!==0?2:0},children:(0,a.jsxs)(h.Z,{className:"mb-2",children:[(0,a.jsx)(t.Z.Control,{value:d.value,onChange:e=>x({value:e.target.value})}),(0,a.jsx)(c.Z,{variant:"outline-success",onClick:()=>m(e=>{e.next_protos.push(d.value)}),children:(0,a.jsx)("i",{className:"bi bi-plus-lg"})})]})})]}),e.tls&&e.tls.certificates.map((e,s)=>(0,a.jsx)(r.Z,{className:"mb-2",children:(0,a.jsxs)(r.Z.Body,{children:[(0,a.jsx)(r.Z.Title,{className:"d-flex justify-content-end align-items-center",children:(0,a.jsx)(c.Z,{variant:"outline-danger",onClick:()=>m(e=>{(null==e?void 0:e.certificates)!==void 0&&e.certificates.splice(s,1)}),children:(0,a.jsx)("i",{className:"bi bi-x-lg"})})}),(0,a.jsx)(T,{cert:new v.yE.listener.certificate(e),onChange:e=>m(n=>{(null==n?void 0:n.certificates)!==void 0&&(n.certificates[s]=e)})})]})},"tls_certificates"+s)),(0,a.jsx)(h.Z,{className:"d-flex justify-content-end mb-2",children:(0,a.jsxs)(c.Z,{variant:"outline-success",onClick:()=>m(e=>{e.certificates.push({cert:new Uint8Array(0),key:new Uint8Array(0),cert_file_path:"",key_file_path:""})}),children:[(0,a.jsx)("i",{className:"bi bi-plus-lg"}),"New Certificate"]})}),e.tls&&e.tls.server_name_certificate&&Object.entries(e.tls.server_name_certificate).map(e=>{let[s,n]=e;return(0,a.jsx)(r.Z,{className:"mb-2",children:(0,a.jsxs)(r.Z.Body,{children:[(0,a.jsxs)(r.Z.Title,{className:"d-flex justify-content-between align-items-center",children:[s,(0,a.jsx)(c.Z,{variant:"outline-danger",onClick:()=>m(e=>{(null==e?void 0:e.server_name_certificate)!==void 0&&(null==e||delete e.server_name_certificate[s])}),children:(0,a.jsx)("i",{className:"bi bi-x-lg"})})]}),(0,a.jsx)(T,{cert:new v.yE.listener.certificate(n),onChange:e=>m(n=>{(null==n?void 0:n.server_name_certificate)!==void 0&&(n.server_name_certificate[s]=e)})})]})},"server_name_certificate"+s)}),(0,a.jsxs)(h.Z,{className:"d-flex justify-content-end",children:[(0,a.jsx)(t.Z.Control,{value:n,onChange:e=>u(e.target.value)}),(0,a.jsxs)(c.Z,{variant:"outline-success",onClick:()=>m(e=>{""!==n&&(e.server_name_certificate[n]={})}),children:[(0,a.jsx)("i",{className:"bi bi-plus-lg"}),"New SNI Certificate"]})]})]})}),I=l.memo(e=>{var s;let n=s=>{P(e.websocket.tls)&&(e.websocket.tls=void 0),s(e.websocket),e.onChange(e.websocket)};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(x.Vf,{plaintext:!0,label:"Protocol",value:"Websocket"}),e.websocket.tls&&(0,a.jsx)(F,{tls:new v.yE.listener.tls_config(null!==(s=e.websocket.tls)&&void 0!==s?s:void 0),onChange:e=>n(s=>s.tls=e)})]})}),D=l.memo(e=>{let s=s=>{P(e.quic.tls)&&(e.quic.tls=void 0),s(e.quic),e.onChange(e.quic)};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(x.Vf,{plaintext:!0,label:"Protocol",value:"QUIC"}),e.quic.tls&&(0,a.jsx)(F,{tls:new v.yE.listener.tls_config(null!==e.quic.tls?e.quic.tls:void 0),onChange:e=>s(s=>s.tls=e)})]})}),H=l.memo(e=>{let s=s=>{P(e.grpc.tls)&&(e.grpc.tls=void 0),s(e.grpc),e.onChange(e.grpc)};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(x.Vf,{plaintext:!0,label:"Protocol",value:"GRPC"}),e.grpc.tls&&(0,a.jsx)(F,{tls:new v.yE.listener.tls_config(e.grpc.tls),onChange:e=>s(s=>s.tls=e)})]})}),O=l.memo(e=>{let s=s=>{P(e.tls.tls)&&(e.tls.tls=void 0),s(e.tls),e.onChange(e.tls)};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(x.Vf,{plaintext:!0,label:"Protocol",value:"TLS"}),e.tls.tls&&(0,a.jsx)(F,{tls:new v.yE.listener.tls_config(e.tls.tls),onChange:e=>s(s=>s.tls=e)})]})}),L=l.memo(e=>{let s=s=>{P(e.http2.tls)&&(e.http2.tls=void 0),s(e.http2),e.onChange(e.http2)};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(x.Vf,{plaintext:!0,label:"Protocol",value:"HTTP2"}),e.http2.tls&&(0,a.jsx)(F,{tls:new v.yE.listener.tls_config(e.http2.tls),onChange:e=>s(s=>s.tls=e)})]})}),R=l.memo(e=>{let s=s=>{s(e.reality),e.onChange(e.reality)},[n,r]=(0,l.useState)({value:""}),[u,d]=(0,l.useState)({value:""});return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(x.Vf,{plaintext:!0,label:"Protocol",value:"Reality"}),(0,a.jsx)(x.Vf,{label:"Dest",value:e.reality.dest,onChange:e=>s(s=>s.dest=e)}),(0,a.jsx)(x.Vf,{label:"Private Key",value:e.reality.private_key,onChange:e=>s(s=>s.private_key=e)}),(0,a.jsxs)(t.Z.Group,{as:o.Z,className:"mb-3",children:[(0,a.jsx)(t.Z.Label,{column:!0,sm:2,className:"nowrap",children:"Short ID"}),e.reality.short_id.map((e,n)=>(0,a.jsx)(i.Z,{sm:{span:10,offset:0!==n?2:0},children:(0,a.jsxs)(h.Z,{className:"mb-2",children:[(0,a.jsx)(t.Z.Control,{value:e,onChange:e=>s(s=>{s.short_id[n]=e.target.value})}),(0,a.jsx)(c.Z,{variant:"outline-danger",onClick:()=>s(e=>{e.short_id.splice(n,1)}),children:(0,a.jsx)("i",{className:"bi bi-x-lg"})})]})},n)),(0,a.jsx)(i.Z,{sm:{span:10,offset:0!==e.reality.short_id.length?2:0},children:(0,a.jsxs)(h.Z,{className:"mb-2",children:[(0,a.jsx)(t.Z.Control,{value:n.value,onChange:e=>r({value:e.target.value})}),(0,a.jsx)(c.Z,{variant:"outline-success",onClick:()=>s(e=>{e.short_id.push(n.value)}),children:(0,a.jsx)("i",{className:"bi bi-plus-lg"})})]})})]}),(0,a.jsxs)(t.Z.Group,{as:o.Z,className:"mb-3",children:[(0,a.jsx)(t.Z.Label,{column:!0,sm:2,className:"nowrap",children:"Server Name"}),e.reality.server_name.map((e,n)=>(0,a.jsx)(i.Z,{sm:{span:10,offset:0!==n?2:0},children:(0,a.jsxs)(h.Z,{className:"mb-2",children:[(0,a.jsx)(t.Z.Control,{value:e,onChange:e=>s(s=>{s.server_name[n]=e.target.value})}),(0,a.jsx)(c.Z,{variant:"outline-danger",onClick:()=>s(e=>{e.server_name.splice(n,1)}),children:(0,a.jsx)("i",{className:"bi bi-x-lg"})})]})},n)),(0,a.jsx)(i.Z,{sm:{span:10,offset:0!==e.reality.server_name.length?2:0},children:(0,a.jsxs)(h.Z,{className:"mb-2",children:[(0,a.jsx)(t.Z.Control,{value:u.value,onChange:e=>d({value:e.target.value})}),(0,a.jsx)(c.Z,{variant:"outline-success",onClick:()=>s(e=>{e.server_name.push(u.value)}),children:(0,a.jsx)("i",{className:"bi bi-plus-lg"})})]})})]})]})}),q=l.memo(e=>{let s=s=>{s(e.yuubinsya),e.onChange(e.yuubinsya)};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(x.Jg,{label:"Force Disable Encrypt",checked:e.yuubinsya.force_disable_encrypt,onChange:()=>s(e=>e.force_disable_encrypt=!e.force_disable_encrypt)}),(0,a.jsx)(x.Vf,{label:"Host",value:e.yuubinsya.host,onChange:e=>s(s=>s.host=e)}),(0,a.jsx)(x.Vf,{label:"Password",value:e.yuubinsya.password,onChange:e=>s(s=>s.password=e)}),(()=>{switch(e.yuubinsya.protocol){case"websocket":return(0,a.jsx)(I,{websocket:new v.yE.listener.websocket(e.yuubinsya.websocket),onChange:e=>s(s=>s.websocket=e)});case"quic":return(0,a.jsx)(D,{quic:new v.yE.listener.quic(e.yuubinsya.quic),onChange:e=>s(s=>s.quic=e)});case"grpc":return(0,a.jsx)(H,{grpc:new v.yE.listener.grpc(e.yuubinsya.grpc),onChange:e=>s(s=>s.grpc=e)});case"http2":return(0,a.jsx)(L,{http2:new v.yE.listener.http2(e.yuubinsya.http2),onChange:e=>s(s=>s.http2=e)});case"reality":return(0,a.jsx)(R,{reality:new v.yE.listener.reality(e.yuubinsya.reality),onChange:e=>s(s=>s.reality=e)});case"tls":return(0,a.jsx)(O,{tls:new v.yE.listener.tls(e.yuubinsya.tls),onChange:e=>s(s=>s.tls=e)})}})()]})}),G=l.memo(e=>{let s=s=>{s(e.protocol),e.onChange(e.protocol)};switch(e.protocol.protocol){case"http":return(0,a.jsx)(k,{http:new v.yE.listener.http(e.protocol.http),onChange:e=>s(s=>s.http=e)});case"socks5":return(0,a.jsx)(E,{socks5:new v.yE.listener.socks5(e.protocol.socks5),onChange:e=>s(s=>s.socks5=e)});case"mix":return(0,a.jsx)(S,{mixed:new v.yE.listener.mixed(e.protocol.mix),onChange:e=>s(s=>s.mix=e)});case"redir":return(0,a.jsx)(w,{redir:new v.yE.listener.redir(e.protocol.redir),onChange:e=>s(s=>s.redir=e)});case"tun":return(0,a.jsx)(V,{tun:new v.yE.listener.tun(e.protocol.tun),onChange:e=>s(s=>s.tun=e)});case"yuubinsya":return(0,a.jsx)(q,{yuubinsya:new v.yE.listener.yuubinsya(e.protocol.yuubinsya),onChange:e=>s(s=>s.yuubinsya=e)});case"tproxy":return(0,a.jsx)(N,{tproxy:new v.yE.listener.tproxy(e.protocol.tproxy),onChange:e=>s(s=>s.tproxy=e)})}return(0,a.jsx)(a.Fragment,{})}),J=l.memo(e=>{let[s,n]=(0,l.useState)({value:"http",name:""}),o=s=>{s(e.server),e.onChange(e.server)};return(0,a.jsxs)(a.Fragment,{children:[Object.entries(e.server).sort((e,s)=>e[0]<=s[0]?-1:1).map(e=>{let[s,n]=e;return(0,a.jsxs)("div",{children:[(0,a.jsxs)(r.Z.Title,{className:"d-flex justify-content-between align-items-center",children:[s,(0,a.jsx)(c.Z,{variant:"outline-danger",onClick:()=>o(e=>{delete e[s]}),children:(0,a.jsx)("i",{className:"bi bi-x-lg"})})]}),(0,a.jsx)(x.Jg,{label:"Enabled",checked:n.enabled,onChange:()=>o(e=>e[s].enabled=!e[s].enabled)}),(0,a.jsx)(G,{protocol:new v.yE.listener.protocol(n),onChange:e=>o(n=>n[s]=e)}),(0,a.jsx)("hr",{})]},s)}),(0,a.jsx)(r.Z,{className:"mb-2",children:(0,a.jsxs)(r.Z.Body,{children:[(0,a.jsx)(r.Z.Title,{children:"New Inbound"}),(0,a.jsx)(Z.Z,{label:"Protocol",className:"mb-2",children:(0,a.jsxs)(t.Z.Select,{value:s.value,onChange:e=>n({...s,value:e.target.value}),children:[(0,a.jsx)("option",{value:"mix",children:"Mixed"}),(0,a.jsx)("option",{value:"http",children:"HTTP"}),(0,a.jsx)("option",{value:"socks5",children:"SOCKS5"}),(0,a.jsx)("option",{value:"tun",children:"TUN"}),(0,a.jsx)("option",{value:"redir",children:"Redir"}),(0,a.jsx)("option",{value:"tproxy",children:"TProxy"}),(0,a.jsx)("option",{value:"yuubinsya",children:"Yuubinsya"}),(0,a.jsx)("option",{value:"yuubinsya-websocket",children:"Yuubinsya Websocket"}),(0,a.jsx)("option",{value:"yuubinsya-tls",children:"Yuubinsya TLS"}),(0,a.jsx)("option",{value:"yuubinsya-grpc",children:"Yuubinsya GRPC"}),(0,a.jsx)("option",{value:"yuubinsya-quic",children:"Yuubinsya QUIC"}),(0,a.jsx)("option",{value:"yuubinsya-http2",children:"Yuubinsya HTTP2"}),(0,a.jsx)("option",{value:"yuubinsya-reality",children:"Yuubinsya Reality"})]})}),(0,a.jsxs)(h.Z,{className:"d-flex justify-content-end",children:[(0,a.jsx)(t.Z.Control,{value:s.name,onChange:e=>n({...s,name:e.target.value})}),(0,a.jsxs)(c.Z,{variant:"outline-success",onClick:()=>o(e=>{console.log(s),U(e,s.name,s.value)}),children:[(0,a.jsx)("i",{className:"bi bi-plus-lg"}),"New Inbound"]})]})]})})]})}),U=(e,s,n)=>{if(""===s||void 0!==e[s])return;let a={name:s,enabled:!1};switch(n){case"http":a.http={host:":8188",username:"",password:""};break;case"socks5":a.socks5={host:":1080",password:"",username:""};break;case"mix":a.mix={host:":1080",password:"",username:""};break;case"tun":a.tun={name:"tun://tun0",mtu:1500,gateway:"172.16.0.1",dns_hijacking:!0,skip_multicast:!1,driver:v.yE.listener.tun.endpoint_driver.system_gvisor,portal:"172.16.0.2"};break;case"redir":a.redir={host:":8088"};break;case"yuubinsya":a.yuubinsya={host:":2096",force_disable_encrypt:!1,password:"password",normal:{}};break;case"yuubinsya-websocket":a.yuubinsya={host:":2096",force_disable_encrypt:!1,password:"password",websocket:{tls:void 0}};break;case"yuubinsya-tls":a.yuubinsya={host:":2096",force_disable_encrypt:!1,password:"password",tls:{tls:void 0}};break;case"yuubinsya-grpc":a.yuubinsya={host:":2096",force_disable_encrypt:!1,password:"password",grpc:{tls:void 0}};break;case"yuubinsya-quic":a.yuubinsya={host:":2096",force_disable_encrypt:!1,password:"password",quic:{tls:void 0}};break;case"yuubinsya-http2":a.yuubinsya={host:":2096",force_disable_encrypt:!1,password:"password",http2:{tls:void 0}};break;case"yuubinsya-reality":a.yuubinsya={host:":2096",force_disable_encrypt:!1,password:"password",reality:{short_id:["123456"],server_name:["www.example.com"],private_key:"",dest:"dl.google.com:443",debug:!1}};break;case"tproxy":a.tproxy={host:"0.0.0.0:8083"};break;default:return}e[s]=new v.yE.listener.protocol(a)};var B=n(4811),K=n(8029),Y=n(713),A=n(2155),M=n(1375),Q=n.n(M);let W=v.yE.log.log_level;var z=function(){let e=(0,l.useContext)(K.P),{data:s,error:n,isLoading:t,mutate:o}=(0,Y.ZP)("/config",(0,A.PJ)(v.yE.config.setting),{revalidateOnFocus:!1});if(void 0!==n)return(0,a.jsx)(Q(),{statusCode:n.code,title:n.msg});if(t||void 0===s)return(0,a.jsx)(B.Z,{});let i=e=>{o(s=>{let n=v.yE.config.setting.create(s);return e(n),n},!1)};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(r.Z,{className:"mb-3",children:(0,a.jsxs)(r.Z.Body,{children:[(0,a.jsxs)(u.Z,{defaultActiveKey:"home",className:"mb-3",children:[(0,a.jsxs)(d.Z,{eventKey:"home",title:"Home",children:[(0,a.jsx)(x.Jg,{label:"IPv6",checked:s.ipv6,onChange:()=>o(v.yE.config.setting.create({...s,ipv6:!s.ipv6}),!1)}),(0,a.jsx)(x.Vf,{label:"Network Interface",value:s.net_interface,onChange:e=>i(s=>s.net_interface=e)}),(0,a.jsx)("hr",{}),(0,a.jsx)(r.Z.Title,{className:"mb-2",children:"System Proxy"}),(0,a.jsx)(x.Jg,{label:"SOCKS5",checked:s.system_proxy.socks5,onChange:()=>i(e=>{var s;return e.system_proxy.socks5=!(null===(s=e.system_proxy)||void 0===s?void 0:s.socks5)})}),(0,a.jsx)(x.Jg,{label:"HTTP",checked:s.system_proxy.http,onChange:()=>i(e=>e.system_proxy.http=!e.system_proxy.http)}),(0,a.jsx)("hr",{}),(0,a.jsx)(r.Z.Title,{className:"mb-2",children:"Logcat"}),(0,a.jsx)(x.Jg,{label:"Save",checked:s.logcat.save,onChange:()=>i(e=>e.logcat.save=!e.logcat.save)}),(0,a.jsx)(X,{label:"Level",value:s.logcat.level,onChange:e=>i(s=>{s.logcat.level=e})})]}),(0,a.jsx)(d.Z,{eventKey:"bypass",title:"Bypass",children:(0,a.jsx)(y,{bypass:new v.yE.bypass.bypass_config(s.bypass),onChange:e=>i(s=>s.bypass=e)})}),(0,a.jsx)(d.Z,{eventKey:"dns",title:"DNS",children:(0,a.jsx)(m,{data:new v.yE.dns.dns_config(s.dns),onChange:e=>i(s=>s.dns=e)})}),(0,a.jsx)(d.Z,{eventKey:"inbound",title:"Inbound",children:(0,a.jsx)(J,{server:s.server.servers,onChange:e=>i(s=>s.server.servers=e)})})]}),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("hr",{}),(0,a.jsx)(c.Z,{onClick:()=>{(0,A.Uo)("/config",{body:v.yE.config.setting.encode(s).finish()}).then(async s=>{let{error:n}=s;void 0!==n?e.Error("save config failed, ".concat(n.code,"| ").concat(await n.msg)):(e.Info("Save Config Successfully"),o())})},children:"Save"})]})]})})})};function X(e){return(0,a.jsxs)(t.Z.Group,{as:o.Z,className:"mb-3",children:[(0,a.jsx)(t.Z.Label,{column:!0,sm:2,children:e.label}),(0,a.jsx)(i.Z,{sm:10,children:(0,a.jsxs)(t.Z.Select,{value:W[e.value],onChange:s=>e.onChange(W[s.target.value]),children:[(0,a.jsx)("option",{value:W[W.debug],children:"DEBUG"}),(0,a.jsx)("option",{value:W[W.info],children:"INFO"}),(0,a.jsx)("option",{value:W[W.warning],children:"WARN"}),(0,a.jsx)("option",{value:W[W.error],children:"ERROR"})]})})]})}}},function(e){e.O(0,[216,236,331,422,230,623,791,468,971,472,744],function(){return e(e.s=6320)}),_N_E=e.O()}]);
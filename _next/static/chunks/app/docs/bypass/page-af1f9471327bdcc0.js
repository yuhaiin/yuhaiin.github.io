(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[871],{2824:function(e,n,a){Promise.resolve().then(a.bind(a,7067))},7067:function(e,n,a){"use strict";a.r(n),a.d(n,{default:function(){return E}});var l=a(7437),s=a(5118),t=a(2265),c=a(9420),o=a(4076),r=a(1593),i=a(4402),u=a(4670),d=a(7380),f=a(9301),g=a(7463),b=a(8560);(0,b.U)(f.jS,{tcp:f.xJ.bypass,udp:f.xJ.bypass,bypassFile:"yuhaiin.conf",customRuleV3:[]});let h=t.memo(e=>{let n=(0,b.U)(f.sj,{hostname:["www.example.com"],mode:f.xJ.proxy,tag:"",resolveStrategy:f.AQ.default}),a=(0,b.U)(f.R3,{name:"my rule",enabled:!1,object:{case:"file",value:(0,b.U)(f.aq,{})}}),s=n=>{n(e.bypass),e.onChange(e.bypass)};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(c.Z,{className:"mb-3",children:(0,l.jsxs)(c.Z.Body,{children:[(0,l.jsx)(x,{label:"TCP",network:!0,value:e.bypass.tcp,onChange:e=>s(n=>n.tcp=e)}),(0,l.jsx)(x,{label:"UDP",network:!0,value:e.bypass.udp,onChange:e=>s(n=>n.udp=e)}),(0,l.jsx)(g.Jg,{label:"Resolve Locally",checked:e.bypass.resolveLocally,onChange:()=>s(e=>e.resolveLocally=!e.resolveLocally)}),(0,l.jsx)(g.Jg,{label:"Udp proxy Fqdn",checked:e.bypass.udpProxyFqdn===f.q6.skip_resolve,onChange:()=>s(e=>e.udpProxyFqdn=e.udpProxyFqdn===f.q6.skip_resolve?f.q6.resolve:f.q6.skip_resolve)})]})}),e.bypass.remoteRules.map((e,n)=>(0,l.jsx)(d.W2,{title:e.name,onClose:()=>s(e=>e.remoteRules.splice(n,1)),children:(0,l.jsx)(m,{config:e,onChange:e=>s(a=>a.remoteRules[n]=e)})},"remote_rules"+n)),(0,l.jsx)("div",{className:"d-flex mb-2",children:(0,l.jsxs)(o.Z,{className:"flex-grow-1",variant:"outline-success",onClick:()=>s(e=>e.remoteRules.push(a)),children:[(0,l.jsx)("i",{className:"bi bi-plus-lg mb-2"}),"New Remote Rule"]})}),(0,l.jsx)("hr",{}),e.bypass.customRuleV3.map((e,n)=>(0,l.jsx)(d.W2,{title:""!==e.tag?e.tag:f.xJ[e.mode],onClose:()=>s(e=>e.customRuleV3.splice(n,1)),children:(0,l.jsx)(p,{config:e,onChange:e=>s(a=>a.customRuleV3[n]=e)})},"rule"+n)),(0,l.jsx)("div",{className:"d-flex mb-2",children:(0,l.jsxs)(o.Z,{className:"flex-grow-1",variant:"outline-success",onClick:()=>s(e=>e.customRuleV3.push(n)),children:[(0,l.jsx)("i",{className:"bi bi-plus-lg mb-2"}),"New Rule"]})})]})}),p=e=>{let n=n=>{n(e.config),e.onChange(e.config)};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(x,{label:"Mode",network:!1,value:e.config.mode,onChange:e=>n(n=>n.mode=e)}),(0,l.jsx)(d.Vf,{label:"Tag",value:e.config.tag,onChange:e=>n(n=>n.tag=e)}),(0,l.jsx)(y,{label:"Resolve Strategy",value:e.config.resolveStrategy,onChange:e=>n(n=>n.resolveStrategy=e)}),(0,l.jsx)(v,{label:"UDP proxy Fqdn",value:e.config.udpProxyFqdnStrategy,onChange:e=>n(n=>n.udpProxyFqdnStrategy=e)}),(0,l.jsx)(d.yh,{title:"IP/DOMAIN",data:e.config.hostname,onChange:e=>n(n=>{e&&(n.hostname=e)}),errorMsgs:e.config.errorMsgs})]})},m=e=>{let n=n=>{n(e.config),e.onChange(e.config)},a=()=>{switch(e.config.object.case){case"file":return"file";case"http":return"http";default:return""}},s=(e,n)=>{switch(e.object.case){case"file":e.object.value.path=n;break;case"http":e.object.value.url=n}};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(g.Jg,{label:"Enabled",checked:e.config.enabled,onChange:()=>n(e=>e.enabled=!e.enabled)}),(0,l.jsx)(d.Vf,{label:"Name",value:e.config.name,onChange:e=>n(n=>n.name=e)}),(0,l.jsxs)(r.Z.Group,{as:i.Z,className:"mb-3",children:[(0,l.jsx)(r.Z.Label,{column:!0,sm:2,children:"Type"}),(0,l.jsx)(u.Z,{sm:10,children:(0,l.jsxs)(r.Z.Select,{value:a(),onChange:e=>n(n=>{if(a()!=e.target.value)switch(e.target.value){case"file":n.object={case:"file",value:(0,b.U)(f.aq,{})};break;case"http":n.object={case:"http",value:(0,b.U)(f.c0,{})}}}),children:[(0,l.jsx)("option",{value:"file",children:"file"}),(0,l.jsx)("option",{value:"http",children:"http"})]})})]}),(0,l.jsx)(d.Vf,{label:"Value",value:(()=>{switch(e.config.object.case){case"file":return e.config.object.value.path;case"http":return e.config.object.value.url;default:return""}})(),errorMsg:e.config.errorMsg,onChange:e=>n(n=>s(n,e))})]})};function x(e){return(0,l.jsxs)(r.Z.Group,{as:i.Z,className:"mb-3",children:[(0,l.jsx)(r.Z.Label,{column:!0,sm:2,children:e.label}),(0,l.jsx)(u.Z,{sm:10,children:(0,l.jsxs)(r.Z.Select,{value:f.xJ[e.value],onChange:n=>e.onChange(f.xJ[n.target.value]),children:[e.network&&(0,l.jsx)("option",{value:f.xJ[f.xJ.bypass],children:"BYPASS"}),(0,l.jsx)("option",{value:f.xJ[f.xJ.direct],children:"DIRECT"}),(0,l.jsx)("option",{value:f.xJ[f.xJ.proxy],children:"PROXY"}),(0,l.jsx)("option",{value:f.xJ[f.xJ.block],children:"BLOCK"})]})})]})}function v(e){return(0,l.jsxs)(r.Z.Group,{as:i.Z,className:"mb-3",children:[(0,l.jsx)(r.Z.Label,{column:!0,sm:2,children:e.label}),(0,l.jsx)(u.Z,{sm:10,children:(0,l.jsxs)(r.Z.Select,{value:f.q6[e.value],onChange:n=>e.onChange(f.q6[n.target.value]),children:[(0,l.jsx)("option",{value:f.q6[f.q6.udp_proxy_fqdn_strategy_default],children:"Global"}),(0,l.jsx)("option",{value:f.q6[f.q6.resolve],children:"Resolve"}),(0,l.jsx)("option",{value:f.q6[f.q6.skip_resolve],children:"Skip"})]})})]})}function y(e){return(0,l.jsxs)(r.Z.Group,{as:i.Z,className:"mb-3",children:[(0,l.jsx)(r.Z.Label,{column:!0,sm:2,children:e.label}),(0,l.jsx)(u.Z,{sm:10,children:(0,l.jsxs)(r.Z.Select,{value:f.AQ[e.value],onChange:n=>e.onChange(f.AQ[n.target.value]),children:[(0,l.jsx)("option",{value:f.AQ[f.AQ.default],children:"default"}),(0,l.jsx)("option",{value:f.AQ[f.AQ.prefer_ipv4],children:"prefer_ipv4"}),(0,l.jsx)("option",{value:f.AQ[f.AQ.only_ipv4],children:"only_ipv4"}),(0,l.jsx)("option",{value:f.AQ[f.AQ.prefer_ipv6],children:"prefer_ipv6"}),(0,l.jsx)("option",{value:f.AQ[f.AQ.only_ipv6],children:"only_ipv6"})]})})]})}var j=a(5594),Z=a(6263),A=a(3334),w=a(9569),R=a(4954),k=a(6760),C=a.n(k),X=a(7701);let I=t.forwardRef((e,n)=>{let{as:a="div",bsPrefix:s,className:t,direction:c,gap:o,...r}=e;s=(0,X.vE)(s,"horizontal"===c?"hstack":"vstack");let i=(0,X.pi)(),u=(0,X.zG)();return(0,l.jsx)(a,{...r,ref:n,className:C()(t,s,...function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:X.Hz,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:X.cs,l=[];return Object.entries(e).forEach(e=>{let[s,t]=e;null!=t&&("object"==typeof t?n.forEach(e=>{let n=t[e];null!=n&&l.push("".concat(s).concat(e!==a?"-".concat(e):"","-").concat(n))}):l.push("".concat(s,"-").concat(t)))}),l}({gap:o},i,u))})});I.displayName="Stack";var S=a(279),E=function(){let e=(0,t.useContext)(R.P),[n,a]=(0,t.useState)(!1),[c,r]=(0,t.useState)(!1),{data:i,error:u,isLoading:d,mutate:g}=(0,s.ZP)("/bypass",(0,j.D4)(f.jS),{revalidateOnFocus:!1});return u?(0,l.jsx)(Z.Z,{code:u.code,children:u.msg}):d||!i?(0,l.jsx)(Z.Z,{}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(h,{bypass:(0,A.d)(f.jS,i),onChange:e=>{g(e,!1)}}),(0,l.jsx)("hr",{}),(0,l.jsxs)(I,{gap:1,direction:"horizontal",children:[(0,l.jsxs)(o.Z,{variant:"outline-primary",disabled:n,onClick:()=>{a(!0),(0,j.Uo)("/bypass",{body:(0,w.O)(f.jS,i),method:"PATCH"}).then(async n=>{let{error:l}=n;void 0!==l?e.Error("save config failed, ".concat(l.code,"| ").concat(await l.msg)):(e.Info("Save Successfully"),g()),a(!1)})},children:["Save",n&&(0,l.jsxs)(l.Fragment,{children:["\xa0",(0,l.jsx)(S.Z,{size:"sm",animation:"border",variant:"primary"})]})]}),(0,l.jsxs)(o.Z,{variant:"outline-primary",disabled:c,onClick:()=>{r(!0),(0,j.Uo)("/bypass/reload",{method:"POST"}).then(async n=>{let{error:a}=n;void 0!==a?e.Error("reload failed, ".concat(a.code,"| ").concat(await a.msg)):(e.Info("Reload Successfully"),g()),r(!1)})},children:["Refresh Now",c&&(0,l.jsxs)(l.Fragment,{children:["\xa0",(0,l.jsx)(S.Z,{size:"sm",animation:"border",variant:"primary"})]})]})]})]})}},9301:function(e,n,a){"use strict";a.d(n,{AQ:function(){return o},GZ:function(){return d},R3:function(){return b},aq:function(){return h},c0:function(){return p},jS:function(){return f},q6:function(){return r},sj:function(){return g},xJ:function(){return c}});var l,s,t,c,o,r,i=a(7472),u=a(5369);let d=(0,i.l)("Chpjb25maWcvYnlwYXNzL2J5cGFzcy5wcm90bxIOeXVoYWlpbi5ieXBhc3Mi9QIKBmNvbmZpZxIhCgN0Y3AYAyABKA4yFC55dWhhaWluLmJ5cGFzcy5tb2RlEiEKA3VkcBgEIAEoDjIULnl1aGFpaW4uYnlwYXNzLm1vZGUSJAoLYnlwYXNzX2ZpbGUYAiABKAlCAhgBUgtieXBhc3NfZmlsZRJPCg51ZHBfcHJveHlfZnFkbhgGIAEoDjInLnl1aGFpaW4uYnlwYXNzLnVkcF9wcm94eV9mcWRuX3N0cmF0ZWd5Ug51ZHBfcHJveHlfZnFkbhJDCg5jdXN0b21fcnVsZV92MxgHIAMoCzIbLnl1aGFpaW4uYnlwYXNzLm1vZGVfY29uZmlnUg5jdXN0b21fcnVsZV92MxI/CgxyZW1vdGVfcnVsZXMYCCADKAsyGy55dWhhaWluLmJ5cGFzcy5yZW1vdGVfcnVsZVIMcmVtb3RlX3J1bGVzEigKD3Jlc29sdmVfbG9jYWxseRgJIAEoCFIPcmVzb2x2ZV9sb2NhbGx5IpQDCgttb2RlX2NvbmZpZxIiCgRtb2RlGAEgASgOMhQueXVoYWlpbi5ieXBhc3MubW9kZRILCgN0YWcYAiABKAkSEAoIaG9zdG5hbWUYAyADKAkSTAoQcmVzb2x2ZV9zdHJhdGVneRgEIAEoDjIgLnl1aGFpaW4uYnlwYXNzLnJlc29sdmVfc3RyYXRlZ3lSEHJlc29sdmVfc3RyYXRlZ3kSYQoXdWRwX3Byb3h5X2ZxZG5fc3RyYXRlZ3kYBiABKA4yJy55dWhhaWluLmJ5cGFzcy51ZHBfcHJveHlfZnFkbl9zdHJhdGVneVIXdWRwX3Byb3h5X2ZxZG5fc3RyYXRlZ3kSSQoKZXJyb3JfbXNncxgHIAMoCzIqLnl1aGFpaW4uYnlwYXNzLm1vZGVfY29uZmlnLkVycm9yTXNnc0VudHJ5UgllcnJvcl9tc2caMAoORXJyb3JNc2dzRW50cnkSCwoDa2V5GAEgASgJEg0KBXZhbHVlGAIgASgJOgI4AUoECAUQBlIOdWRwX3Byb3h5X2ZxZG4i+QEKC3JlbW90ZV9ydWxlEg8KB2VuYWJsZWQYASABKAgSDAoEbmFtZRgCIAEoCRIwCgRmaWxlGAMgASgLMiAueXVoYWlpbi5ieXBhc3MucmVtb3RlX3J1bGVfZmlsZUgAEjAKBGh0dHAYBCABKAsyIC55dWhhaWluLmJ5cGFzcy5yZW1vdGVfcnVsZV9odHRwSAASHAoJZXJyb3JfbXNnGAUgASgJUgllcnJvcl9tc2cSPwoMZGVmYXVsdF9tb2RlGAYgASgLMhsueXVoYWlpbi5ieXBhc3MubW9kZV9jb25maWdSDGRlZmF1bHRfbW9kZUIICgZvYmplY3QiIAoQcmVtb3RlX3J1bGVfZmlsZRIMCgRwYXRoGAEgASgJIi8KEHJlbW90ZV9ydWxlX2h0dHASCwoDdXJsGAEgASgJEg4KBm1ldGhvZBgCIAEoCSo0CgRtb2RlEgoKBmJ5cGFzcxAAEgoKBmRpcmVjdBABEgkKBXByb3h5EAISCQoFYmxvY2sQAypfChByZXNvbHZlX3N0cmF0ZWd5EgsKB2RlZmF1bHQQABIPCgtwcmVmZXJfaXB2NBABEg0KCW9ubHlfaXB2NBACEg8KC3ByZWZlcl9pcHY2EAMSDQoJb25seV9pcHY2EAQqXQoXdWRwX3Byb3h5X2ZxZG5fc3RyYXRlZ3kSIwofdWRwX3Byb3h5X2ZxZG5fc3RyYXRlZ3lfZGVmYXVsdBAAEgsKB3Jlc29sdmUQARIQCgxza2lwX3Jlc29sdmUQAkI3WjVnaXRodWIuY29tL0FzdXRvcnVmYS95dWhhaWluL3BrZy9wcm90b3MvY29uZmlnL2J5cGFzc2IGcHJvdG8z"),f=(0,u.L)(d,0),g=(0,u.L)(d,1),b=(0,u.L)(d,2),h=(0,u.L)(d,3),p=(0,u.L)(d,4);(l=c||(c={}))[l.bypass=0]="bypass",l[l.direct=1]="direct",l[l.proxy=2]="proxy",l[l.block=3]="block",(s=o||(o={}))[s.default=0]="default",s[s.prefer_ipv4=1]="prefer_ipv4",s[s.only_ipv4=2]="only_ipv4",s[s.prefer_ipv6=3]="prefer_ipv6",s[s.only_ipv6=4]="only_ipv6",(t=r||(r={}))[t.udp_proxy_fqdn_strategy_default=0]="udp_proxy_fqdn_strategy_default",t[t.resolve=1]="resolve",t[t.skip_resolve=2]="skip_resolve"},2115:function(e,n,a){"use strict";var l=a(6760),s=a.n(l),t=a(2265),c=a(7701),o=a(7437);let r=t.forwardRef((e,n)=>{let{bsPrefix:a,size:l,vertical:t=!1,className:r,role:i="group",as:u="div",...d}=e,f=(0,c.vE)(a,"btn-group"),g=f;return t&&(g="".concat(f,"-vertical")),(0,o.jsx)(u,{...d,ref:n,role:i,className:s()(r,g,l&&"".concat(f,"-").concat(l))})});r.displayName="ButtonGroup",n.Z=r},36:function(e,n,a){"use strict";a.d(n,{Z:function(){return f}});var l=a(6760),s=a.n(l),t=a(2265),c=a(7701),o=a(8440),r=a(6289),i=a(7437);let u=t.forwardRef((e,n)=>{let{className:a,bsPrefix:l,as:t="span",...o}=e;return l=(0,c.vE)(l,"input-group-text"),(0,i.jsx)(t,{ref:n,className:s()(a,l),...o})});u.displayName="InputGroupText";let d=t.forwardRef((e,n)=>{let{bsPrefix:a,size:l,hasValidation:o,className:u,as:d="div",...f}=e;a=(0,c.vE)(a,"input-group");let g=(0,t.useMemo)(()=>({}),[]);return(0,i.jsx)(r.Z.Provider,{value:g,children:(0,i.jsx)(d,{ref:n,...f,className:s()(u,a,l&&"".concat(a,"-").concat(l),o&&"has-validation")})})});d.displayName="InputGroup";var f=Object.assign(d,{Text:u,Radio:e=>(0,i.jsx)(u,{children:(0,i.jsx)(o.Z,{type:"radio",...e})}),Checkbox:e=>(0,i.jsx)(u,{children:(0,i.jsx)(o.Z,{type:"checkbox",...e})})})},4402:function(e,n,a){"use strict";var l=a(6760),s=a.n(l),t=a(2265),c=a(7701),o=a(7437);let r=t.forwardRef((e,n)=>{let{bsPrefix:a,className:l,as:t="div",...r}=e,i=(0,c.vE)(a,"row"),u=(0,c.pi)(),d=(0,c.zG)(),f="".concat(i,"-cols"),g=[];return u.forEach(e=>{let n;let a=r[e];delete r[e],null!=a&&"object"==typeof a?{cols:n}=a:n=a,null!=n&&g.push("".concat(f).concat(e!==d?"-".concat(e):"","-").concat(n))}),(0,o.jsx)(t,{ref:n,...r,className:s()(l,i,...g)})});r.displayName="Row",n.Z=r},9569:function(e,n,a){"use strict";a.d(n,{O:function(){return o},d:function(){return i}});var l=a(5576),s=a(4862),t=a(8553);let c={writeUnknownFields:!0};function o(e,n,a){return r(new s.Lt,a?Object.assign(Object.assign({},c),a):c,(0,l.SC)(e,n)).finish()}function r(e,n,a){var l;for(let l of a.sortedFields){if(!a.isSet(l)){if(3==l.presence)throw Error(`cannot encode field ${a.desc.typeName}.${l.name} to binary: required field not set`);continue}i(e,n,a,l)}if(n.writeUnknownFields)for(let{no:n,wireType:s,data:t}of null!==(l=a.getUnknown())&&void 0!==l?l:[])e.tag(n,s).raw(t);return e}function i(e,n,a,l){var c;switch(l.fieldKind){case"scalar":case"enum":u(e,null!==(c=l.scalar)&&void 0!==c?c:t.w.INT32,l.number,a.get(l));break;case"list":!function(e,n,a,l){var c;if("message"==a.listKind){for(let s of l)d(e,n,a,s);return}let o=null!==(c=a.scalar)&&void 0!==c?c:t.w.INT32;if(a.packed){if(!l.size)return;for(let n of(e.tag(a.number,s.TD.LengthDelimited).fork(),l))f(e,o,n);e.join();return}for(let n of l)u(e,o,a.number,n)}(e,n,l,a.get(l));break;case"message":d(e,n,l,a.get(l));break;case"map":for(let[c,o]of a.get(l))!function(e,n,a,l,c){var o;switch(e.tag(a.number,s.TD.LengthDelimited).fork(),u(e,a.mapKey,1,l),a.mapKind){case"scalar":case"enum":u(e,null!==(o=a.scalar)&&void 0!==o?o:t.w.INT32,2,c);break;case"message":r(e.tag(2,s.TD.LengthDelimited).fork(),n,c).join()}e.join()}(e,n,l,c,o)}}function u(e,n,a,l){f(e.tag(a,function(e){switch(e){case t.w.BYTES:case t.w.STRING:return s.TD.LengthDelimited;case t.w.DOUBLE:case t.w.FIXED64:case t.w.SFIXED64:return s.TD.Bit64;case t.w.FIXED32:case t.w.SFIXED32:case t.w.FLOAT:return s.TD.Bit32;default:return s.TD.Varint}}(n)),n,l)}function d(e,n,a,l){a.delimitedEncoding?r(e.tag(a.number,s.TD.StartGroup),n,l).tag(a.number,s.TD.EndGroup):r(e.tag(a.number,s.TD.LengthDelimited).fork(),n,l).join()}function f(e,n,a){switch(n){case t.w.STRING:e.string(a);break;case t.w.BOOL:e.bool(a);break;case t.w.DOUBLE:e.double(a);break;case t.w.FLOAT:e.float(a);break;case t.w.INT32:e.int32(a);break;case t.w.INT64:e.int64(a);break;case t.w.UINT64:e.uint64(a);break;case t.w.FIXED64:e.fixed64(a);break;case t.w.BYTES:e.bytes(a);break;case t.w.FIXED32:e.fixed32(a);break;case t.w.SFIXED32:e.sfixed32(a);break;case t.w.SFIXED64:e.sfixed64(a);break;case t.w.SINT64:e.sint64(a);break;case t.w.UINT32:e.uint32(a);break;case t.w.SINT32:e.sint32(a)}}}},function(e){e.O(0,[439,795,982,773,122,424,971,117,744],function(){return e(e.s=2824)}),_N_E=e.O()}]);
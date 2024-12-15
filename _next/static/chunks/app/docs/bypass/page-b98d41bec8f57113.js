(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[753],{1103:(e,s,a)=>{Promise.resolve().then(a.bind(a,7806))},7806:(e,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>V});var n=a(5155),l=a(950),o=a(4504),t=a(9093),r=a(2115),c=a(4617),i=a.n(c),d=a(1653);let u=r.forwardRef((e,s)=>{let{as:a="div",bsPrefix:l,className:o,direction:t,gap:r,...c}=e;l=(0,d.oU)(l,"horizontal"===t?"hstack":"vstack");let u=(0,d.gy)(),h=(0,d.Jm)();return(0,n.jsx)(a,{...c,ref:s,className:i()(o,l,...function(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:d.Jy,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:d.ff,n=[];return Object.entries(e).forEach(e=>{let[l,o]=e;null!=o&&("object"==typeof o?s.forEach(e=>{let s=o[e];null!=s&&n.push("".concat(l).concat(e!==a?"-".concat(e):"","-").concat(s))}):n.push("".concat(l,"-").concat(o)))}),n}({gap:r},u,h))})});u.displayName="Stack";var h=a(3614),p=a(2963),m=a(4216),x=a(4995),b=a(9169),g=a(8927),v=a(148),j=a(4805),f=a(6863),y=a(3577),C=a(2981),A=a(6180),w=a(6121),N=a(3667),R=a(2859),k=a(7204);let S=e=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(I,{label:"Mode",network:!1,value:e.config.mode,onChange:s=>e.onChange({...e.config,mode:s})}),(0,n.jsx)(k.a9,{label:"Tag",value:e.config.tag,onChange:s=>e.onChange({...e.config,tag:s})}),(0,n.jsx)(_,{label:"Resolve Strategy",value:e.config.resolveStrategy,onChange:s=>e.onChange({...e.config,resolveStrategy:s})}),(0,n.jsx)(F,{label:"UDP proxy Fqdn",value:e.config.udpProxyFqdnStrategy,onChange:s=>e.onChange({...e.config,udpProxyFqdnStrategy:s})}),(0,n.jsx)(k.e9,{title:"IP/DOMAIN",data:e.config.hostname,onChange:s=>e.onChange({...e.config,hostname:s}),errorMsgs:e.config.errorMsgs,beforeContent:(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(h.A,{className:"mb-2 w-100",children:[(0,n.jsxs)(p.A,{variant:"outline-success",onClick:()=>{e.setModalData({show:!0,import:!0,data:void 0,onSave:s=>{let a=JSON.parse(s);e.onChange({...e.config,hostname:[...e.config.hostname,...a]}),e.setModalData(e=>({...e,show:!1}))}})},children:[(0,n.jsx)("i",{className:"bi bi-box-arrow-in-down"})," Import"]}),(0,n.jsxs)(p.A,{variant:"outline-success",onClick:()=>{e.setModalData({show:!0,data:JSON.stringify(e.config.hostname,null,4),import:!1})},children:[(0,n.jsx)("i",{className:"bi bi-box-arrow-in-up"})," Export"]})]})})})]}),M=e=>{let s=()=>{switch(e.config.object.case){case"file":return"file";case"http":return"http";default:return""}},a=(e,s)=>{switch(e.object.case){case"file":e.object.value={...e.object.value,path:s};break;case"http":e.object.value={...e.object.value,url:s}}};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(R.$,{label:"Enabled",checked:e.config.enabled,onChange:()=>e.onChange({...e.config,enabled:!e.config.enabled})}),(0,n.jsx)(k.a9,{label:"Name",value:e.config.name,onChange:s=>e.onChange({...e.config,name:s})}),(0,n.jsxs)(A.A.Group,{as:w.A,className:"mb-3",children:[(0,n.jsx)(A.A.Label,{column:!0,sm:2,children:"Type"}),(0,n.jsx)(N.A,{sm:10,children:(0,n.jsxs)(A.A.Select,{value:s(),onChange:a=>{if(s()==a.target.value)return;let n={...e.config};switch(a.target.value){case"file":n.object={case:"file",value:(0,y.v)(j.Uu,{})};break;case"http":n.object={case:"http",value:(0,y.v)(j.ie,{})}}e.onChange(n)},children:[(0,n.jsx)("option",{value:"file",children:"file"}),(0,n.jsx)("option",{value:"http",children:"http"})]})})]}),(0,n.jsx)(k.a9,{label:"Value",value:(()=>{switch(e.config.object.case){case"file":return e.config.object.value.path;case"http":return e.config.object.value.url;default:return""}})(),errorMsg:e.config.errorMsg,onChange:s=>{let n={...e.config};a(n,s),e.onChange(n)}})]})};function I(e){return(0,n.jsxs)(A.A.Group,{as:w.A,className:"mb-3",children:[(0,n.jsx)(A.A.Label,{column:!0,sm:2,children:e.label}),(0,n.jsx)(N.A,{sm:10,children:(0,n.jsxs)(A.A.Select,{value:j.Mq[e.value],onChange:s=>e.onChange(j.Mq[s.target.value]),children:[e.network&&(0,n.jsx)("option",{value:j.Mq[j.Mq.bypass],children:"BYPASS"}),(0,n.jsx)("option",{value:j.Mq[j.Mq.direct],children:"DIRECT"}),(0,n.jsx)("option",{value:j.Mq[j.Mq.proxy],children:"PROXY"}),(0,n.jsx)("option",{value:j.Mq[j.Mq.block],children:"BLOCK"})]})})]})}function F(e){return(0,n.jsxs)(A.A.Group,{as:w.A,className:"mb-3",children:[(0,n.jsx)(A.A.Label,{column:!0,sm:2,children:e.label}),(0,n.jsx)(N.A,{sm:10,children:(0,n.jsxs)(A.A.Select,{value:j.f5[e.value],onChange:s=>e.onChange(j.f5[s.target.value]),children:[(0,n.jsx)("option",{value:j.f5[j.f5.udp_proxy_fqdn_strategy_default],children:"Global"}),(0,n.jsx)("option",{value:j.f5[j.f5.resolve],children:"Resolve"}),(0,n.jsx)("option",{value:j.f5[j.f5.skip_resolve],children:"Skip"})]})})]})}function _(e){return(0,n.jsxs)(A.A.Group,{as:w.A,className:"mb-3",children:[(0,n.jsx)(A.A.Label,{column:!0,sm:2,children:e.label}),(0,n.jsx)(N.A,{sm:10,children:(0,n.jsxs)(A.A.Select,{value:j.pI[e.value],onChange:s=>e.onChange(j.pI[s.target.value]),children:[(0,n.jsx)("option",{value:j.pI[j.pI.default],children:"default"}),(0,n.jsx)("option",{value:j.pI[j.pI.prefer_ipv4],children:"prefer_ipv4"}),(0,n.jsx)("option",{value:j.pI[j.pI.only_ipv4],children:"only_ipv4"}),(0,n.jsx)("option",{value:j.pI[j.pI.prefer_ipv6],children:"prefer_ipv6"}),(0,n.jsx)("option",{value:j.pI[j.pI.only_ipv6],children:"only_ipv6"})]})})]})}let q=e=>{let s=(0,y.v)(j.eT,{hostname:["www.example.com"],mode:j.Mq.proxy,tag:"",resolveStrategy:j.pI.default}),a=(0,y.v)(j.Nm,{name:"my rule",enabled:!1,object:{case:"file",value:(0,y.v)(j.Uu,{})}});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(C.A,{className:"mb-3",children:(0,n.jsxs)(C.A.Body,{children:[(0,n.jsx)(I,{label:"TCP",network:!0,value:e.bypass.tcp,onChange:s=>e.onChange({...e.bypass,tcp:s})}),(0,n.jsx)(I,{label:"UDP",network:!0,value:e.bypass.udp,onChange:s=>e.onChange({...e.bypass,udp:s})}),(0,n.jsx)(R.$,{label:"Resolve Locally",checked:e.bypass.resolveLocally,onChange:()=>e.onChange({...e.bypass,resolveLocally:!e.bypass.resolveLocally})}),(0,n.jsx)(R.$,{label:"Udp proxy Fqdn",checked:e.bypass.udpProxyFqdn===j.f5.skip_resolve,onChange:()=>e.onChange({...e.bypass,udpProxyFqdn:e.bypass.udpProxyFqdn===j.f5.skip_resolve?j.f5.resolve:j.f5.skip_resolve})})]})}),e.bypass.remoteRules.map((s,a)=>(0,n.jsx)(k.mc,{title:s.name,onClose:()=>e.onChange({...e.bypass,remoteRules:e.bypass.remoteRules.filter((e,s)=>s!==a)}),moveUpDown:new k.fH(e.bypass.remoteRules,a,s=>e.onChange({...e.bypass,remoteRules:s})),children:(0,n.jsx)(M,{config:s,onChange:s=>e.onChange({...e.bypass,remoteRules:[...e.bypass.remoteRules.slice(0,a),s,...e.bypass.remoteRules.slice(a+1)]})})},"remote_rules"+a)),(0,n.jsx)("div",{className:"d-flex mb-2",children:(0,n.jsxs)(p.A,{className:"flex-grow-1",variant:"outline-success",onClick:()=>e.onChange({...e.bypass,remoteRules:[...e.bypass.remoteRules,a]}),children:[(0,n.jsx)("i",{className:"bi bi-plus-lg mb-2"}),"New Remote Rule"]})}),(0,n.jsx)("hr",{}),e.bypass.customRuleV3.map((s,a)=>(0,n.jsx)(k.mc,{title:""!==s.tag?s.tag:j.Mq[s.mode],onClose:()=>e.onChange({...e.bypass,customRuleV3:e.bypass.customRuleV3.filter((e,s)=>s!==a)}),moveUpDown:new k.fH(e.bypass.customRuleV3,a,s=>e.onChange({...e.bypass,customRuleV3:s})),children:(0,n.jsx)(S,{config:s,onChange:s=>e.onChange({...e.bypass,customRuleV3:[...e.bypass.customRuleV3.slice(0,a),s,...e.bypass.customRuleV3.slice(a+1)]}),setModalData:e.setModalData})},"rule"+a)),(0,n.jsx)("div",{className:"d-flex mb-2",children:(0,n.jsxs)(p.A,{className:"flex-grow-1",variant:"outline-success",onClick:()=>e.onChange({...e.bypass,customRuleV3:[...e.bypass.customRuleV3,s]}),children:[(0,n.jsx)("i",{className:"bi bi-plus-lg mb-2"}),"New Rule"]})})]})};var E=a(0);let G=e=>{let{show:s,plaintext:a,data:l,onSave:o,onHide:t}=e,[c,i]=(0,r.useState)({data:""});return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(E.A,{show:s,"aria-labelledby":"contained-modal-title-vcenter",size:"xl",onHide:()=>{t()},centered:!0,children:[!a&&(0,n.jsx)(E.A.Header,{closeButton:!0,children:(0,n.jsx)(E.A.Title,{id:"contained-modal-title-vcenter",children:"Import JSON"})}),(0,n.jsx)(E.A.Body,{children:(0,n.jsx)(A.A.Control,{as:"textarea",readOnly:a,value:l||c.data,style:{height:"65vh",fontFamily:"monospace"},onChange:e=>{i({data:e.target.value})}})}),(0,n.jsxs)(E.A.Footer,{children:[(0,n.jsx)(p.A,{variant:"outline-secondary",onClick:()=>{t()},children:"Close"}),(0,n.jsx)(()=>o?(0,n.jsx)(p.A,{variant:"outline-primary",onClick:()=>{o&&o(c.data)},children:"Save"}):(0,n.jsx)(n.Fragment,{}),{})]})]})})},V=function(){let e=(0,r.useContext)(v.u),[s,a]=(0,r.useState)(!1),[c,i]=(0,r.useState)(!1),[d,y]=(0,r.useState)({show:!1}),{data:C,error:A,isLoading:w,mutate:N}=(0,x.Ay)("/bypass",(0,g.AD)(f.XH.method.load),{revalidateOnFocus:!1});return A?(0,n.jsx)(b.A,{code:A.code,children:A.msg}):w||!C?(0,n.jsx)(b.A,{}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(G,{onHide:()=>{y(e=>({...e,show:!1}))},show:d.show,plaintext:!d.import,data:d.data,onSave:d.onSave}),(0,n.jsx)(q,{bypass:(0,l.o)(j.Qn,C),onChange:e=>{N(e,!1)},setModalData:y}),(0,n.jsx)("hr",{}),(0,n.jsxs)(u,{gap:1,direction:"horizontal",children:[(0,n.jsxs)(h.A,{children:[(0,n.jsxs)(p.A,{variant:"outline-primary",disabled:s,onClick:()=>{a(!0),(0,g.kP)(f.XH.method.save,"/bypass","PATCH",C).then(async s=>{let{error:n}=s;void 0!==n?e.Error("save config failed, ".concat(n.code,"| ").concat(n.msg)):(e.Info("Save Successfully"),N()),a(!1)})},children:[(0,n.jsx)("i",{className:"bi bi-floppy"})," Save",s&&(0,n.jsxs)(n.Fragment,{children:["\xa0",(0,n.jsx)(m.A,{size:"sm",animation:"border",variant:"primary"})]})]}),(0,n.jsxs)(p.A,{variant:"outline-primary",disabled:c,onClick:()=>{i(!0),(0,g.kP)(f.XH.method.reload,"/bypass/reload","POST").then(async s=>{let{error:a}=s;void 0!==a?e.Error("reload failed, ".concat(a.code,"| ").concat(a.msg)):(e.Info("Reload Successfully"),N()),i(!1)})},children:[(0,n.jsx)("i",{className:"bi bi-arrow-clockwise"})," Refresh Now",c&&(0,n.jsxs)(n.Fragment,{children:["\xa0",(0,n.jsx)(m.A,{size:"sm",animation:"border",variant:"primary"})]})]})]}),(0,n.jsxs)(h.A,{children:[(0,n.jsxs)(p.A,{variant:"outline-success",onClick:()=>{y({show:!0,import:!0,onSave:e=>{N((0,o.mj)(j.Qn,e),!1),y(e=>({...e,show:!1}))}})},children:[(0,n.jsx)("i",{className:"bi bi-box-arrow-in-down"})," Import"]}),(0,n.jsxs)(p.A,{variant:"outline-success",onClick:()=>{y({show:!0,data:(0,t.J7)(j.Qn,C,{prettySpaces:2})})},children:[(0,n.jsx)("i",{className:"bi bi-box-arrow-in-up"})," Export"]})]})]})]})}},2859:(e,s,a)=>{"use strict";a.d(s,{$:()=>r});var n=a(5155),l=a(6180),o=a(6121),t=a(3667);let r=e=>{let{label:s,checked:a,onChange:r}=e;return(0,n.jsxs)(l.A.Group,{as:o.A,className:"mb-2",children:[(0,n.jsx)(l.A.Label,{column:!0,sm:2,children:s}),(0,n.jsx)(t.A,{sm:10,className:"d-flex align-items-center",children:(0,n.jsx)(l.A.Check,{className:"d-flex align-items-center",type:"switch",checked:a,onChange:e=>r(e.target.checked)})})]})}},148:(e,s,a)=>{"use strict";a.d(s,{u:()=>r,y:()=>c});var n=a(5155),l=a(2115),o=a(1757),t=a(491);let r=(0,l.createContext)({Info:e=>{},Error:e=>{}}),c=e=>{let{children:s}=e,[a,c]=(0,l.useState)([]),i=(e,s)=>c(a=>[...a,{text:e,type:s}]);return(0,n.jsxs)(r.Provider,{value:{Info:e=>{console.log(e),i(e,"success")},Error:e=>{console.error(e),i(e,"danger")}},children:[(0,n.jsx)(o.A,{className:"p-3",position:"top-center",containerPosition:"fixed",style:{zIndex:999999},children:a.map((e,s)=>(0,n.jsxs)(t.A,{role:"alert","aria-live":"assertive",show:!0,bg:e.type,onClose:()=>{c(e=>[...e.slice(0,s),...e.slice(s+1)])},"aria-atomic":"true",delay:4e3,autohide:!0,animation:!0,children:[(0,n.jsxs)(t.A.Header,{children:[(0,n.jsx)("strong",{className:"me-auto",children:"Notification"}),(0,n.jsx)("small",{className:"text-muted",children:"just now"})]}),(0,n.jsx)(t.A.Body,{className:"text-center",children:e.text})]},"toast"+s))}),s]})}},9537:(e,s,a)=>{"use strict";function n(e,s,...a){if(0==a.length)return e.enums[s];let l=a.pop();return a.reduce((e,s)=>e.nestedMessages[s],e.messages[s]).nestedEnums[l]}a.d(s,{R:()=>n})},9678:(e,s,a)=>{"use strict";a.d(s,{i:()=>o,w:()=>t});var n=a(6788),l=a(8123);let o=(0,n.w)("Ch9nb29nbGUvcHJvdG9idWYvdGltZXN0YW1wLnByb3RvEg9nb29nbGUucHJvdG9idWYiKwoJVGltZXN0YW1wEg8KB3NlY29uZHMYASABKAMSDQoFbmFub3MYAiABKAVChQEKE2NvbS5nb29nbGUucHJvdG9idWZCDlRpbWVzdGFtcFByb3RvUAFaMmdvb2dsZS5nb2xhbmcub3JnL3Byb3RvYnVmL3R5cGVzL2tub3duL3RpbWVzdGFtcHBi+AEBogIDR1BCqgIeR29vZ2xlLlByb3RvYnVmLldlbGxLbm93blR5cGVzYgZwcm90bzM"),t=(0,l.Z)(o,0)}},e=>{var s=s=>e(e.s=s);e.O(0,[295,375,515,920,637,340,57,214,922,863,441,517,358],()=>s(1103)),_N_E=e.O()}]);
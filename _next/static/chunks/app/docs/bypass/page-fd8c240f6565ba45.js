(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5753],{1103:(e,s,a)=>{Promise.resolve().then(a.bind(a,7806))},7806:(e,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>M});var l=a(5155),t=a(950),r=a(4504),n=a(9093),o=a(2115),c=a(4617),i=a.n(c),d=a(1653);let u=o.forwardRef((e,s)=>{let{as:a="div",bsPrefix:t,className:r,direction:n,gap:o,...c}=e;t=(0,d.oU)(t,"horizontal"===n?"hstack":"vstack");let u=(0,d.gy)(),m=(0,d.Jm)();return(0,l.jsx)(a,{...c,ref:s,className:i()(r,t,...function(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:d.Jy,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:d.ff,l=[];return Object.entries(e).forEach(e=>{let[t,r]=e;null!=r&&("object"==typeof r?s.forEach(e=>{let s=r[e];null!=s&&l.push("".concat(t).concat(e!==a?"-".concat(e):"","-").concat(s))}):l.push("".concat(t,"-").concat(r)))}),l}({gap:o},u,m))})});u.displayName="Stack";var m=a(3614),h=a(2963),x=a(4216),v=a(7021),j=a(9169),b=a(8927),p=a(148),g=a(4805),y=a(6863),f=a(3577),A=a(2981),C=a(57),R=a(6180),w=a(6121),N=a(3667),S=a(2859),k=a(7204);let F=e=>{let{config:s,onChange:a,setModalData:t,resolvers:r}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(S.Vx,{label:"Mode",type:g.Ni,filter:e=>e.number!==g.Mq.bypass,value:s.mode,onChange:e=>a({...s,mode:e})}),(0,l.jsx)(k.a9,{label:"Tag",value:s.tag,onChange:e=>a({...s,tag:e})}),(0,l.jsx)(S.Vx,{label:"Resolve Strategy",type:g.kw,value:s.resolveStrategy,onChange:e=>a({...s,resolveStrategy:e})}),(0,l.jsx)(S.Vx,{label:"UDP proxy Fqdn",type:g.ml,format:e=>e===g.f5.udp_proxy_fqdn_strategy_default?"global":g.f5[e],value:s.udpProxyFqdnStrategy,onChange:e=>a({...s,udpProxyFqdnStrategy:e})}),(0,l.jsx)(S.no,{value:s.resolver,values:r,label:"Resolver",onChange:e=>a({...s,resolver:e}),emptyChoose:!0}),(0,l.jsx)(k.e9,{title:"IP/DOMAIN",data:s.hostname,onChange:e=>a({...s,hostname:e}),errorMsgs:s.errorMsgs,beforeContent:(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(m.A,{className:"mb-2 w-100",children:[(0,l.jsxs)(h.A,{variant:"outline-success",onClick:()=>{t({show:!0,import:!0,data:void 0,onSave:e=>{let l=JSON.parse(e);a({...s,hostname:[...s.hostname,...l]}),t(e=>({...e,show:!1}))}})},children:[(0,l.jsx)("i",{className:"bi bi-box-arrow-in-down"})," Import"]}),(0,l.jsxs)(h.A,{variant:"outline-success",onClick:()=>{t({show:!0,data:JSON.stringify(s.hostname,null,4),import:!1})},children:[(0,l.jsx)("i",{className:"bi bi-box-arrow-in-up"})," Export"]})]})})})]})},V=e=>{let{config:s,onChange:a}=e,t=()=>{switch(s.object.case){case"file":return"file";case"http":return"http";default:return""}},r=(e,s)=>{switch(e.object.case){case"file":e.object.value={...e.object.value,path:s};break;case"http":e.object.value={...e.object.value,url:s}}};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(S.$d,{label:"Enabled",checked:s.enabled,onChange:()=>a({...s,enabled:!s.enabled})}),(0,l.jsx)(k.a9,{label:"Name",value:s.name,onChange:e=>a({...s,name:e})}),(0,l.jsxs)(R.A.Group,{as:w.A,className:"mb-3",children:[(0,l.jsx)(R.A.Label,{column:!0,sm:2,children:"Type"}),(0,l.jsx)(N.A,{sm:10,children:(0,l.jsx)(S.FX,{value:t(),values:["file","http"],onChange:e=>{if(t()==e)return;let l={...s};switch(e){case"file":l.object={case:"file",value:(0,f.v)(g.Uu,{})};break;case"http":l.object={case:"http",value:(0,f.v)(g.ie,{})}}a(l)}})})]}),(0,l.jsx)(k.a9,{mb:"",label:"Value",value:(()=>{switch(s.object.case){case"file":return s.object.value.path;case"http":return s.object.value.url;default:return""}})(),errorMsg:s.errorMsg,onChange:e=>{let l={...s};r(l,e),a(l)}})]})},E=e=>{let{bypass:s,onChange:a,setModalData:t}=e,{data:r}=(0,v.Ay)("/resolvers",(0,b.AD)(y.L2.method.list)),n=()=>r?r.names.sort((e,s)=>e.localeCompare(s)):[],c=(0,f.v)(g.eT,{hostname:["www.example.com"],mode:g.Mq.proxy,tag:"",resolveStrategy:g.pI.default}),i=(0,f.v)(g.Nm,{name:"my rule",enabled:!1,object:{case:"file",value:(0,f.v)(g.Uu,{})}}),[d,u]=(0,o.useState)({start:-1});return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(A.A,{className:"mb-3",children:(0,l.jsxs)(A.A.Body,{children:[(0,l.jsx)(S.Vx,{label:"TCP",type:g.Ni,value:s.tcp,onChange:e=>a({...s,tcp:e})}),(0,l.jsx)(S.Vx,{lastElem:!0,label:"UDP",type:g.Ni,value:s.udp,onChange:e=>a({...s,udp:e})})]})}),(0,l.jsx)(A.A,{className:"mb-3",children:(0,l.jsxs)(A.A.Body,{children:[(0,l.jsx)(S.$d,{label:"Resolve Locally",checked:s.resolveLocally,onChange:()=>a({...s,resolveLocally:!s.resolveLocally})}),(0,l.jsx)(S.$d,{label:"Udp proxy Fqdn",checked:s.udpProxyFqdn===g.f5.skip_resolve,onChange:()=>a({...s,udpProxyFqdn:s.udpProxyFqdn===g.f5.skip_resolve?g.f5.resolve:g.f5.skip_resolve})}),(0,l.jsx)(S.no,{value:s.directResolver?s.directResolver:"direct",values:n(),label:"Direct Resolver",onChange:e=>a({...s,directResolver:e})}),(0,l.jsx)(S.no,{lastElem:!0,value:s.proxyResolver?s.proxyResolver:"proxy",values:n(),label:"Proxy Resolver",onChange:e=>a({...s,proxyResolver:e})})]})}),(0,l.jsx)(A.A,{children:(0,l.jsxs)(C.A,{variant:"flush",children:[s.remoteRules.map((e,t)=>(0,l.jsx)(o.Fragment,{children:(0,l.jsx)(k.mc,{as:C.A.Item,fold:!0,title:e.name,onClose:()=>a({...s,remoteRules:s.remoteRules.filter((e,s)=>s!==t)}),moveUpDown:new k.fH(s.remoteRules,t,e=>a({...s,remoteRules:e})),children:(0,l.jsx)(V,{config:e,onChange:e=>a({...s,remoteRules:[...s.remoteRules.slice(0,t),e,...s.remoteRules.slice(t+1)]})})})},"remote_rules"+t)),(0,l.jsx)(C.A.Item,{className:"d-flex",children:(0,l.jsxs)(h.A,{className:"flex-grow-1",variant:"outline-success",onClick:()=>a({...s,remoteRules:[...s.remoteRules,i]}),children:[(0,l.jsx)("i",{className:"bi bi-plus-lg mb-2"}),"New Remote Rule"]})})]})}),(0,l.jsx)(A.A,{className:"mt-3",children:(0,l.jsxs)(C.A,{variant:"flush",children:[s.customRuleV3.map((e,r)=>(0,l.jsx)(o.Fragment,{children:(0,l.jsx)(k.mc,{as:C.A.Item,fold:!0,title:""!==e.tag?e.tag:g.Mq[e.mode],onClose:()=>a({...s,customRuleV3:s.customRuleV3.filter((e,s)=>s!==r)}),moveUpDown:new k.fH(s.customRuleV3,r,e=>a({...s,customRuleV3:e}),{draggable:!0,onDrop:e=>{if(d.start!==e){let l=[...s.customRuleV3],t=l[d.start];l[d.start]=l[e],l[e]=t,a({...s,customRuleV3:l})}},onDragStart:e=>{u({start:e})}}),children:(0,l.jsx)(F,{config:e,onChange:e=>a({...s,customRuleV3:[...s.customRuleV3.slice(0,r),e,...s.customRuleV3.slice(r+1)]}),setModalData:t,resolvers:n()})})},"rule"+r)),(0,l.jsx)(C.A.Item,{className:"d-flex",children:(0,l.jsxs)(h.A,{className:"flex-grow-1",variant:"outline-success",onClick:()=>a({...s,customRuleV3:[...s.customRuleV3,c]}),children:[(0,l.jsx)("i",{className:"bi bi-plus-lg mb-2"}),"New Rule"]})})]})})]})};var G=a(0);let L=e=>{let{show:s,plaintext:a,data:t,onSave:r,onHide:n}=e,[c,i]=(0,o.useState)({data:""});return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(G.A,{show:s,"aria-labelledby":"contained-modal-title-vcenter",size:"xl",onHide:()=>{n()},centered:!0,children:[(0,l.jsx)(G.A.Body,{children:(0,l.jsx)(R.A.Control,{as:"textarea",readOnly:a,value:t||c.data,style:{height:"65vh",fontFamily:"monospace"},onChange:e=>{i({data:e.target.value})}})}),(0,l.jsxs)(G.A.Footer,{children:[(0,l.jsx)(h.A,{variant:"outline-secondary",onClick:()=>{n()},children:"Close"}),(0,l.jsx)(()=>r?(0,l.jsx)(h.A,{variant:"outline-primary",onClick:()=>{r&&r(c.data)},children:"Save"}):(0,l.jsx)(l.Fragment,{}),{})]})]})})},M=function(){let e=(0,o.useContext)(p.u),[s,a]=(0,o.useState)(!1),[c,i]=(0,o.useState)(!1),[d,f]=(0,o.useState)({show:!1}),{data:A,error:C,isLoading:R,mutate:w}=(0,v.Ay)("/bypass",(0,b.AD)(y.XH.method.load),{revalidateOnFocus:!1});return C?(0,l.jsx)(j.A,{code:C.code,children:C.msg}):R||!A?(0,l.jsx)(j.A,{}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(L,{onHide:()=>{f(e=>({...e,show:!1}))},show:d.show,plaintext:!d.import,data:d.data,onSave:d.onSave}),(0,l.jsx)(E,{bypass:(0,t.o)(g.Qn,A),onChange:e=>{w(e,!1)},setModalData:f}),(0,l.jsxs)(u,{gap:1,direction:"horizontal",className:"mt-2",children:[(0,l.jsxs)(m.A,{children:[(0,l.jsxs)(h.A,{variant:"outline-primary",disabled:s,onClick:()=>{a(!0),(0,b.kP)(y.XH.method.save,"/bypass","PATCH",A).then(async s=>{let{error:l}=s;void 0!==l?e.Error("save config failed, ".concat(l.code,"| ").concat(l.msg)):(e.Info("Save Successfully"),w()),a(!1)})},children:[(0,l.jsx)("i",{className:"bi bi-floppy"})," Save",s&&(0,l.jsxs)(l.Fragment,{children:["\xa0",(0,l.jsx)(x.A,{size:"sm",animation:"border",variant:"primary"})]})]}),(0,l.jsxs)(h.A,{variant:"outline-primary",disabled:c,onClick:()=>{i(!0),(0,b.kP)(y.XH.method.reload,"/bypass/reload","POST").then(async s=>{let{error:a}=s;void 0!==a?e.Error("reload failed, ".concat(a.code,"| ").concat(a.msg)):(e.Info("Reload Successfully"),w()),i(!1)})},children:[(0,l.jsx)("i",{className:"bi bi-arrow-clockwise"})," Refresh Now",c&&(0,l.jsxs)(l.Fragment,{children:["\xa0",(0,l.jsx)(x.A,{size:"sm",animation:"border",variant:"primary"})]})]})]}),(0,l.jsxs)(m.A,{children:[(0,l.jsxs)(h.A,{variant:"outline-success",onClick:()=>{f({show:!0,import:!0,onSave:e=>{w((0,r.mj)(g.Qn,e),!1),f(e=>({...e,show:!1}))}})},children:[(0,l.jsx)("i",{className:"bi bi-box-arrow-in-down"})," Import"]}),(0,l.jsxs)(h.A,{variant:"outline-success",onClick:()=>{f({show:!0,data:(0,n.J7)(g.Qn,A,{prettySpaces:2})})},children:[(0,l.jsx)("i",{className:"bi bi-box-arrow-in-up"})," Export"]})]})]})]})}},2859:(e,s,a)=>{"use strict";a.d(s,{$d:()=>o,FX:()=>d,Vx:()=>c,no:()=>i});var l=a(5155),t=a(6180),r=a(6121),n=a(3667);let o=e=>{let{label:s,checked:a,onChange:o}=e;return(0,l.jsxs)(t.A.Group,{as:r.A,className:"mb-2",children:[(0,l.jsx)(t.A.Label,{column:!0,sm:2,children:s}),(0,l.jsx)(n.A,{sm:10,className:"d-flex align-items-center",children:(0,l.jsx)(t.A.Check,{className:"d-flex align-items-center",type:"switch",checked:a,onChange:e=>o(e.target.checked)})})]})},c=e=>{var s;let{...a}=e;return(0,l.jsxs)(t.A.Group,{as:r.A,className:a.lastElem?"":"mb-2",children:[(0,l.jsx)(t.A.Label,{column:!0,sm:2,children:a.label}),(0,l.jsx)(n.A,{sm:10,children:(0,l.jsx)(t.A.Select,{value:a.value,onChange:e=>a.onChange(Number(e.target.value)),children:a.type.values.filter(null!==(s=a.filter)&&void 0!==s?s:()=>!0).map(e=>(0,l.jsx)("option",{value:e.number,children:a.format?a.format(e.number):e.name},e.number))})})]})},i=e=>{let{label:s,values:a,onChange:o,value:c,emptyChoose:i,lastElem:d}=e;return(0,l.jsxs)(t.A.Group,{as:r.A,className:d?"":"mb-2",children:[(0,l.jsx)(t.A.Label,{column:!0,sm:2,children:s}),(0,l.jsx)(n.A,{sm:10,children:(0,l.jsxs)(t.A.Select,{value:c,onChange:e=>o(e.target.value),children:[i&&(0,l.jsx)("option",{value:"",children:"Choose..."}),a.map(e=>(0,l.jsx)("option",{value:e,children:e},e))]})})]})},d=e=>{let{values:s,onChange:a,value:r,emptyChoose:n,format:o}=e;return(0,l.jsxs)(t.A.Select,{value:r,onChange:e=>a(e.target.value),children:[n&&(0,l.jsx)("option",{value:"",children:"Choose..."}),s.map(e=>{let s="string"==typeof e?e:e[0],a="string"==typeof e?e:e[1];return(0,l.jsx)("option",{value:a,children:o?o(s):s},s)})]})}},148:(e,s,a)=>{"use strict";a.d(s,{u:()=>o,y:()=>c});var l=a(5155),t=a(2115),r=a(1757),n=a(491);let o=(0,t.createContext)({Info:e=>{console.log(e)},Error:e=>{console.error(e)}}),c=e=>{let{children:s}=e,[a,c]=(0,t.useState)({value:{},index:0}),i=(e,s)=>c(a=>({value:{...a.value,[a.index]:{text:e,type:s}},index:a.index+1}));return(0,l.jsxs)(o.Provider,{value:{Info:e=>{console.log(e),i(e,"success")},Error:e=>{console.error(e),i(e,"danger")}},children:[(0,l.jsx)(r.A,{className:"p-3",position:"top-center",containerPosition:"fixed",style:{zIndex:999999},children:Object.entries(a.value).map(e=>{let[s,a]=e;return(0,l.jsxs)(n.A,{role:"alert","aria-live":"assertive",show:!0,bg:a.type,onClose:()=>{c(e=>{let a={...e.value};return delete a[s],{...e,value:a}})},"aria-atomic":"true",delay:4e3,autohide:!0,animation:!0,children:[(0,l.jsxs)(n.A.Header,{children:[(0,l.jsx)("strong",{className:"me-auto",children:"Notification"}),(0,l.jsx)("small",{className:"text-muted",children:"just now"})]}),(0,l.jsx)(n.A.Body,{className:"text-center",children:a.text})]},"toast"+s)})}),s]})}},9537:(e,s,a)=>{"use strict";function l(e,s,...a){if(0==a.length)return e.enums[s];let t=a.pop();return a.reduce((e,s)=>e.nestedMessages[s],e.messages[s]).nestedEnums[t]}a.d(s,{R:()=>l})},9678:(e,s,a)=>{"use strict";a.d(s,{i:()=>r,w:()=>n});var l=a(6788),t=a(8123);let r=(0,l.w)("Ch9nb29nbGUvcHJvdG9idWYvdGltZXN0YW1wLnByb3RvEg9nb29nbGUucHJvdG9idWYiKwoJVGltZXN0YW1wEg8KB3NlY29uZHMYASABKAMSDQoFbmFub3MYAiABKAVChQEKE2NvbS5nb29nbGUucHJvdG9idWZCDlRpbWVzdGFtcFByb3RvUAFaMmdvb2dsZS5nb2xhbmcub3JnL3Byb3RvYnVmL3R5cGVzL2tub3duL3RpbWVzdGFtcHBi+AEBogIDR1BCqgIeR29vZ2xlLlByb3RvYnVmLldlbGxLbm93blR5cGVzYgZwcm90bzM"),n=(0,t.Z)(r,0)}},e=>{var s=s=>e(e.s=s);e.O(0,[7295,867,6306,8920,9818,9637,6536,2340,5624,1922,6863,8441,1517,7358],()=>s(1103)),_N_E=e.O()}]);
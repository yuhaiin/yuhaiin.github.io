(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[779],{6381:(e,a,l)=>{Promise.resolve().then(l.bind(l,8017))},395:(e,a,l)=>{"use strict";l.d(a,{O:()=>t,R:()=>i});var n=l(2115),s=l(6496),r=l(8927);let t=(0,n.createContext)([]);function i(){let{data:e}=(0,r.mp)(s.Yl.method.get_interface,{revalidateOnFocus:!1});return e?e.interfaces:[]}},2859:(e,a,l)=>{"use strict";l.d(a,{$d:()=>i,FX:()=>o,Vx:()=>d,no:()=>c});var n=l(5155),s=l(6180),r=l(6121),t=l(3667);let i=e=>{let{label:a,checked:l,onChange:i,className:d}=e;return(0,n.jsxs)(s.A.Group,{as:r.A,className:d,children:[(0,n.jsx)(s.A.Label,{column:!0,sm:2,children:a}),(0,n.jsx)(t.A,{sm:10,className:"d-flex align-items-center",children:(0,n.jsx)(s.A.Check,{className:"d-flex align-items-center",type:"switch",checked:l,onChange:e=>i(e.target.checked)})})]})},d=e=>{var a;let{...l}=e;return(0,n.jsxs)(s.A.Group,{as:r.A,className:l.lastElem?"":"mb-2",children:[(0,n.jsx)(s.A.Label,{column:!0,sm:2,children:l.label}),(0,n.jsx)(t.A,{sm:10,children:(0,n.jsx)(s.A.Select,{value:l.value,onChange:e=>l.onChange(Number(e.target.value)),children:l.type.values.filter(null!==(a=l.filter)&&void 0!==a?a:()=>!0).map(e=>(0,n.jsx)("option",{value:e.number,children:l.format?l.format(e.number):e.name},e.number))})})]})},c=e=>{let{label:a,values:l,onChange:i,value:d,emptyChoose:c,lastElem:o}=e;return(0,n.jsxs)(s.A.Group,{as:r.A,className:o?"":"mb-2",children:[(0,n.jsx)(s.A.Label,{column:!0,sm:2,children:a}),(0,n.jsx)(t.A,{sm:10,children:(0,n.jsxs)(s.A.Select,{value:d,onChange:e=>i(e.target.value),children:[c&&(0,n.jsx)("option",{value:"",children:"Choose..."}),l.map(e=>(0,n.jsx)("option",{value:e,children:e},e))]})})]})},o=e=>{let{values:a,onChange:l,value:r,emptyChoose:t,format:i}=e;return(0,n.jsxs)(s.A.Select,{value:r,onChange:e=>l(e.target.value),children:[t&&(0,n.jsx)("option",{value:"",children:"Choose..."}),a.map(e=>{let a="string"==typeof e?e:e[0],l="string"==typeof e?e:e[1];return(0,n.jsx)("option",{value:l,children:i?i(a):a},a)})]})}},148:(e,a,l)=>{"use strict";l.d(a,{u:()=>i,y:()=>d});var n=l(5155),s=l(2115),r=l(1757),t=l(491);let i=(0,s.createContext)({Info:e=>{console.log(e)},Error:e=>{console.error(e)}}),d=e=>{let{children:a}=e,[l,d]=(0,s.useState)({value:{},index:0}),c=(e,a)=>d(l=>({value:{...l.value,[l.index]:{text:e,type:a}},index:l.index+1}));return(0,n.jsxs)(i.Provider,{value:{Info:e=>{console.log(e),c(e,"success")},Error:e=>{console.error(e),c(e,"danger")}},children:[(0,n.jsx)(r.A,{className:"p-3",position:"top-center",containerPosition:"fixed",style:{zIndex:999999},children:Object.entries(l.value).map(e=>{let[a,l]=e;return(0,n.jsxs)(t.A,{role:"alert","aria-live":"assertive",show:!0,bg:l.type,onClose:()=>{d(e=>{let l={...e.value};return delete l[a],{...e,value:l}})},"aria-atomic":"true",delay:4e3,autohide:!0,animation:!0,children:[(0,n.jsxs)(t.A.Header,{children:[(0,n.jsx)("strong",{className:"me-auto",children:"Notification"}),(0,n.jsx)("small",{className:"text-muted",children:"just now"})]}),(0,n.jsx)(t.A.Body,{className:"text-center",children:l.text})]},"toast"+a)})}),a]})}},8017:(e,a,l)=>{"use strict";l.r(a),l.d(a,{default:()=>C});var n=l(5155),s=l(3577),r=l(2115),t=l(2981),i=l(6180),d=l(6121),c=l(3667),o=l(5166),u=l(8627),v=l(2963),h=l(395),m=l(9169),f=l(8927),x=l(2859),b=l(148),g=l(878),j=l(6863),A=l(4431),p=l(7204);let C=function(){var e,a,l,C,y,N,k,S;let I=(0,r.useContext)(b.u),{data:G,error:W,isLoading:Z,mutate:z}=(0,f.mp)(j.hF.method.load,{revalidateOnFocus:!1}),B=(0,h.R)();if(void 0!==W)return(0,n.jsx)(m.$,{statusCode:W.code,title:W.msg});if(Z||void 0===G)return(0,n.jsx)(m.A,{});let D=e=>{var a,l;let n=[];return(null===(a=e.systemProxy)||void 0===a?void 0:a.http)&&n.push(1),(null===(l=e.systemProxy)||void 0===l?void 0:l.socks5)&&n.push(2),n};return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(t.A,{className:"mb-3",children:[(0,n.jsx)(t.A.Body,{children:(0,n.jsxs)("fieldset",{disabled:null===(e=G.platform)||void 0===e?void 0:e.androidApp,children:[(0,n.jsx)(x.$d,{label:"IPv6",checked:G.ipv6,onChange:()=>z({...G,ipv6:!G.ipv6},!1)}),(0,n.jsx)(x.$d,{label:"Use Default Interface",checked:G.useDefaultInterface,onChange:()=>z({...G,useDefaultInterface:!G.useDefaultInterface},!1)}),!G.useDefaultInterface&&(0,n.jsx)(p.a9,{label:"Network Interface",value:G.netInterface,onChange:e=>z({...G,netInterface:e},!1),reminds:B.map(e=>{var a;if(e.name)return{label:e.name,value:e.name,label_children:null===(a=e.addresses)||void 0===a?void 0:a.map(e=>e||"")}}).filter(e=>!!e)}),(0,n.jsxs)(i.A.Group,{as:d.A,className:"mb-2",children:[(0,n.jsx)(i.A.Label,{column:!0,sm:2,className:"nowrap",children:"System Proxy"}),(0,n.jsx)(c.A,{sm:10,children:(0,n.jsxs)(o.A,{type:"checkbox",className:"d-flex",defaultValue:D(G),value:D(G),onChange:e=>{let a=!1,l=!1;for(let n of e)1===n&&(a=!0),2===n&&(l=!0);z({...G,systemProxy:(0,s.v)(g.Oe,{http:a,socks5:l})},!1)},children:[(0,n.jsx)(u.A,{variant:"outline-primary",className:"w-100",id:"system-proxy-tbg-btn-1",value:1,children:"HTTP"}),(0,n.jsx)(u.A,{variant:"outline-primary",className:"w-100",id:"system-proxy-tbg-btn-2",value:2,children:"SOCKS5"})]})})]}),(0,n.jsx)("hr",{}),(0,n.jsx)(t.A.Title,{className:"mb-2",children:"Inbound"}),(0,n.jsx)(x.$d,{label:"DNS Hijack",checked:null!==(a=G.server)&&void 0!==a&&!!a.hijackDns,onChange:()=>z({...G,server:{...G.server,hijackDns:!G.server.hijackDns}},!1)}),(0,n.jsx)(x.$d,{label:"Fakedns",checked:null!==(l=G.server)&&void 0!==l&&!!l.hijackDnsFakeip,onChange:()=>z({...G,server:{...G.server,hijackDnsFakeip:!G.server.hijackDnsFakeip}},!1)}),(0,n.jsx)(x.$d,{label:"Sniff",checked:null!==(y=G.server)&&void 0!==y&&null!==(C=y.sniff)&&void 0!==C&&!!C.enabled,onChange:()=>z({...G,server:{...G.server,sniff:{...G.server.sniff,enabled:!G.server.sniff.enabled}}},!1)}),(0,n.jsx)("hr",{}),(0,n.jsx)(t.A.Title,{className:"mb-2",children:"DNS"}),(0,n.jsx)(p.a9,{label:"DNS Server",value:(null===(N=G.dns)||void 0===N?void 0:N.server)?null===(k=G.dns)||void 0===k?void 0:k.server:"",onChange:e=>z({...G,dns:{...G.dns,server:e}},!1)}),(0,n.jsx)("hr",{}),(0,n.jsx)(t.A.Title,{className:"mb-2",children:"Logcat"}),(0,n.jsx)(x.$d,{label:"Save",checked:G.logcat.save,onChange:e=>z({...G,logcat:{...G.logcat,save:e}},!1)}),(0,n.jsx)(x.Vx,{label:"Level",type:A.LM,value:G.logcat.level,filter:e=>e.number!==A.cP.verbose&&e.number!==A.cP.fatal,onChange:e=>z({...G,logcat:{...G.logcat,level:e}},!1)}),(0,n.jsx)("hr",{}),(0,n.jsx)(t.A.Title,{className:"mb-2",children:"Advanced"}),(0,n.jsxs)(i.A.Label,{children:["UDP Buffer Size (",G.advancedConfig?G.advancedConfig.udpBufferSize:2048," Bytes)"]}),(0,n.jsx)(i.A.Range,{value:G.advancedConfig?G.advancedConfig.udpBufferSize:2048,min:2048,max:65535,onChange:e=>{z(a=>{let l={...a};return l.advancedConfig?l.advancedConfig={...l.advancedConfig,udpBufferSize:e.target.valueAsNumber}:l.advancedConfig=(0,s.v)(g.vx,{udpBufferSize:e.target.valueAsNumber,relayBufferSize:4096}),l},!1)}}),(0,n.jsxs)(i.A.Label,{children:["Relay Buffer Size (",G.advancedConfig?G.advancedConfig.relayBufferSize:4096," Bytes)"]}),(0,n.jsx)(i.A.Range,{value:G.advancedConfig?G.advancedConfig.relayBufferSize:4096,min:2048,max:65535,onChange:e=>z(a=>{let l={...a};return l.advancedConfig?l.advancedConfig={...l.advancedConfig,relayBufferSize:e.target.valueAsNumber}:l.advancedConfig=(0,s.v)(g.vx,{relayBufferSize:e.target.valueAsNumber,udpBufferSize:2048}),l},!1)})]})}),!(null===(S=G.platform)||void 0===S?void 0:S.androidApp)&&(0,n.jsx)(t.A.Footer,{className:"d-flex justify-content-md-end",children:(0,n.jsx)(v.A,{variant:"outline-primary",onClick:()=>{(0,f.kP)(j.hF.method.save,G).then(async e=>{let{error:a}=e;void 0!==a?I.Error("save config failed, ".concat(a.code,"| ").concat(await a.msg)):(I.Info("Save Config Successfully"),z())})},children:"Save"})})]})})}},6496:(e,a,l)=>{"use strict";l.d(a,{Yl:()=>d});var n=l(7570),s=l(4395),r=l(9297),t=l(1429);let i=(0,n.w)("ChF0b29scy90b29scy5wcm90bxINeXVoYWlpbi50b29scyI6CgpJbnRlcmZhY2VzEiwKCmludGVyZmFjZXMYASADKAsyGC55dWhhaWluLnRvb2xzLkludGVyZmFjZSIsCglJbnRlcmZhY2USDAoEbmFtZRgBIAEoCRIRCglhZGRyZXNzZXMYAiADKAkiXAoITGljZW5zZXMSJwoHeXVoYWlpbhgBIAMoCzIWLnl1aGFpaW4udG9vbHMuTGljZW5zZRInCgdhbmRyb2lkGAIgAygLMhYueXVoYWlpbi50b29scy5MaWNlbnNlIlcKB0xpY2Vuc2USDAoEbmFtZRgBIAEoCRILCgN1cmwYAiABKAkSDwoHbGljZW5zZRgDIAEoCRIgCgtsaWNlbnNlX3VybBgEIAEoCVILbGljZW5zZV91cmwyiAEKBXRvb2xzEkIKDWdldF9pbnRlcmZhY2USFi5nb29nbGUucHJvdG9idWYuRW1wdHkaGS55dWhhaWluLnRvb2xzLkludGVyZmFjZXMSOwoIbGljZW5zZXMSFi5nb29nbGUucHJvdG9idWYuRW1wdHkaFy55dWhhaWluLnRvb2xzLkxpY2Vuc2VzQjdaLWdpdGh1Yi5jb20vQXN1dG9ydWZhL3l1aGFpaW4vcGtnL3Byb3Rvcy90b29sc5IDBdI+AhADYghlZGl0aW9uc3DoBw",[r.t,t.AT]),d=(0,s.Z)(i,0)}},e=>{var a=a=>e(e.s=a);e.O(0,[100,255,272,430,766,637,286,912,863,441,517,358],()=>a(6381)),_N_E=e.O()}]);
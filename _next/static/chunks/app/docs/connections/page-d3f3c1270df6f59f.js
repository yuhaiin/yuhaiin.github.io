(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[706],{8438:(a,d,l)=>{Promise.resolve().then(l.bind(l,2988))},425:(a,d,l)=>{"use strict";l.d(d,{H:()=>t,T:()=>c});var e=l(5155),n=l(57),o=l(6342);let t=a=>(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(n.A.Item,{children:(0,e.jsxs)("div",{className:"d-sm-flex",children:[(0,e.jsx)("div",{className:"endpoint-name flex-grow-1 notranslate",children:a.itemKey}),(0,e.jsx)("div",{className:"notranslate text-break",style:{opacity:.6},children:"Hash"===a.itemKey&&a.showModal?(0,e.jsx)("a",{href:"#",onClick:d=>{d.preventDefault(),a.showModal&&a.showModal(a.itemValue)},children:a.itemValue}):a.itemValue})]})})}),c=a=>{var d,l,c,s;let{value:i,endContent:u,showModal:m}=a;return(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)(n.A,{variant:"flush",children:[(0,e.jsx)(t,{itemKey:"Addr",itemValue:i.addr}),(0,e.jsx)(t,{itemKey:"Type",itemValue:o.NW[null!==(c=null===(d=i.type)||void 0===d?void 0:d.connType)&&void 0!==c?c:0]}),(0,e.jsx)(t,{itemKey:"Underlying",itemValue:o.NW[null!==(s=null===(l=i.type)||void 0===l?void 0:l.underlyingType)&&void 0!==s?s:0]}),Object.entries(i.extra).sort((a,d)=>a<=d?-1:1).map(a=>{let[d,l]=a;return(0,e.jsx)(t,{itemKey:d,itemValue:l,showModal:m},d)}),u]})})}},2988:(a,d,l)=>{"use strict";l.r(d),l.d(d,{default:()=>Z});var e=l(5155),n=l(3577),o=l(9297),t=l(2115),c=l(2981),s=l(57),i=l(8900),u=l(1566),m=l(2963),r=l(4216),h=l(7021),b=l(1149),p=l(9169),v=l(8927),A=l(148),g=l(4778),G=l(6342),W=l(6903),R=l(425);let x=function(){let a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,d=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;if(!+a)return"0B";let l=Math.floor(Math.log(a)/Math.log(1024)),e=parseFloat((a/Math.pow(1024,l)).toFixed(0>d?0:d)),n=["B","KB","MB","GB","TB","PB","EB","ZB","YB"][l];return isNaN(e)||void 0===n?"":"".concat(e).concat(n)},Y=(a,d)=>{let l=(a.download-(d.download!==BigInt(0)?d.download:a.download))/BigInt(2),e=(a.upload-(d.upload!==BigInt(0)?d.upload:a.upload))/BigInt(2);return{download:"(".concat(x(Number(a.download)),"): ").concat(x(Number(l)),"/S"),upload:"(".concat(x(Number(a.upload)),"): ").concat(x(Number(e)),"/S")}},N=a=>{var d,l;let o=(0,t.useContext)(A.u),[c,h]=(0,t.useState)(!1);return(0,e.jsxs)(i.A.Item,{eventKey:a.data.id.toString(),children:[(0,e.jsx)(i.A.Header,{children:(0,e.jsxs)("div",{className:"d-line text-break",children:[(0,e.jsx)("code",{className:"ms-2",children:a.data.id.toString()}),(0,e.jsx)("span",{className:"ms-2",children:a.data.addr}),(0,e.jsx)(u.A,{className:"bg-light rounded-pill text-dark ms-1 text-uppercase",children:a.data.extra.MODE}),(0,e.jsx)(u.A,{className:"bg-light rounded-pill text-dark ms-1 text-uppercase",children:G.NW[null!==(l=null===(d=a.data.type)||void 0===d?void 0:d.connType)&&void 0!==l?l:0]}),void 0!==a.data.extra.Tag&&(0,e.jsx)(u.A,{className:"bg-light rounded-pill text-dark ms-1 text-uppercase",children:a.data.extra.Tag})]})}),(0,e.jsx)(i.A.Body,{children:(0,e.jsx)(R.T,{value:a.data,showModal:a.showModal,endContent:(0,e.jsx)(s.A.Item,{children:(0,e.jsx)("div",{className:"d-sm-flex",children:(0,e.jsxs)(m.A,{variant:"outline-danger",className:"flex-grow-1 notranslate",disabled:c,onClick:()=>{h(!0),(0,v.kP)(W.oQ.method.close_conn,(0,n.v)(W.SE,{ids:[a.data.id]})).then(async d=>{let{error:l}=d;l?(o.Error("code ".concat(a.data.id," failed, ").concat(l.code,"| ").concat(l.msg)),h(!1)):setTimeout(()=>{h(!1)},5e3)})},children:["Close",c&&(0,e.jsxs)(e.Fragment,{children:["\xa0",(0,e.jsx)(r.A,{size:"sm",animation:"border",variant:"danger"})]})]})})})})})]},a.data.id)},Z=function(){let[a,d]=(0,t.useState)({show:!1,hash:""}),[l,u]=(0,t.useState)({download:BigInt(0),upload:BigInt(0)}),{data:m,error:r}=(0,h.Ay)("/flow/total",async()=>(0,v.kP)(W.oQ.method.total).then(async a=>{let{data:d,error:e}=a;if(e)throw e;if(d){let a=Y(d,{download:l.download,upload:l.upload});return u({download:d.download,upload:d.upload}),a}}),{refreshInterval:2e3}),{data:A,error:G}=(0,b.A)((0,v.cY)(W.oQ.method.notify),(0,v.zZ)(W.oQ.method.notify,(0,n.v)(o.v,{}),(a,d)=>{switch(void 0===d&&(d=new Map),a.data.case){case"notifyNewConnections":a.data.value.connections.sort((a,d)=>a.id>d.id?1:-1).forEach(a=>{d.set(a.id,a)});break;case"notifyRemoveConnections":a.data.value.ids.forEach(a=>{d.delete(a)})}return d}),{});return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(g.y,{show:a.show,hash:a.hash,editable:!1,onHide:()=>d({...a,show:!1})}),(0,e.jsx)(c.A,{className:"mb-3",children:(0,e.jsxs)(s.A,{variant:"flush",children:[(0,e.jsx)(s.A.Item,{children:(0,e.jsxs)("div",{className:"d-sm-flex",children:[(0,e.jsx)("div",{className:"endpoint-name flex-grow-1 notranslate",children:"Download"}),(0,e.jsx)("div",{className:"notranslate",style:{opacity:.6},id:"statistic-download",children:m?m.download:void 0!==r?r.msg:"Loading..."})]})}),(0,e.jsx)(s.A.Item,{children:(0,e.jsxs)("div",{className:"d-sm-flex",children:[(0,e.jsx)("div",{className:"endpoint-name flex-grow-1 notranslate",children:"Upload"}),(0,e.jsx)("div",{className:"notranslate",style:{opacity:.6},id:"statistic-upload",children:m?m.upload:void 0!==r?r.msg:"Loading..."})]})})]})}),void 0!==G?(0,e.jsx)(p.A,{code:G.code,children:G.msg}):void 0===A?(0,e.jsx)(p.A,{}):(0,e.jsx)(i.A,{className:"mb-3",alwaysOpen:!0,id:"connections",children:[...A.values()].reverse().map(a=>(0,e.jsx)(N,{data:a,showModal:a=>d({show:!0,hash:a})},a.id))})]})}},6342:(a,d,l)=>{"use strict";l.d(d,{L9:()=>t,NW:()=>s,mR:()=>c});var e=l(7570),n=l(8123),o=l(1429);let t=(0,e.w)("ChZzdGF0aXN0aWMvY29uZmlnLnByb3RvEhF5dWhhaWluLnN0YXRpc3RpYyKEAQoIbmV0X3R5cGUSNQoJY29ubl90eXBlGAEgASgOMhcueXVoYWlpbi5zdGF0aXN0aWMudHlwZVIJY29ubl90eXBlEkEKD3VuZGVybHlpbmdfdHlwZRgCIAEoDjIXLnl1aGFpaW4uc3RhdGlzdGljLnR5cGVSD3VuZGVybHlpbmdfdHlwZSK8AQoKY29ubmVjdGlvbhIMCgRhZGRyGAEgASgJEgoKAmlkGAIgASgEEikKBHR5cGUYAyABKAsyGy55dWhhaWluLnN0YXRpc3RpYy5uZXRfdHlwZRI7CgVleHRyYRgEIAMoCzIoLnl1aGFpaW4uc3RhdGlzdGljLmNvbm5lY3Rpb24uRXh0cmFFbnRyeUICKAEaLAoKRXh0cmFFbnRyeRILCgNrZXkYASABKAkSDQoFdmFsdWUYAiABKAk6AjgBKo8BCgR0eXBlEgsKB3Vua25vd24QABIHCgN0Y3AQARIICgR0Y3A0EAISCAoEdGNwNhADEgcKA3VkcBAEEggKBHVkcDQQBRIICgR1ZHA2EAYSBgoCaXAQBxIHCgNpcDQQCBIHCgNpcDYQCRIICgR1bml4EAoSDAoIdW5peGdyYW0QCxIOCgp1bml4cGFja2V0EAxCO1oxZ2l0aHViLmNvbS9Bc3V0b3J1ZmEveXVoYWlpbi9wa2cvcHJvdG9zL3N0YXRpc3RpY5IDBdI+AhADYghlZGl0aW9uc3DoBw",[o.AT]),c=(0,n.Z)(t,1);var s=function(a){return a[a.unknown=0]="unknown",a[a.tcp=1]="tcp",a[a.tcp4=2]="tcp4",a[a.tcp6=3]="tcp6",a[a.udp=4]="udp",a[a.udp4=5]="udp4",a[a.udp6=6]="udp6",a[a.ip=7]="ip",a[a.ip4=8]="ip4",a[a.ip6=9]="ip6",a[a.unix=10]="unix",a[a.unixgram=11]="unixgram",a[a.unixpacket=12]="unixpacket",a}({})},6903:(a,d,l)=>{"use strict";l.d(d,{SE:()=>m,oQ:()=>r});var e=l(7570),n=l(8123),o=l(4395),t=l(9297),c=l(9678),s=l(6342),i=l(1429);let u=(0,e.w)("ChtzdGF0aXN0aWMvZ3JwYy9jb25maWcucHJvdG8SIHl1aGFpaW4ucHJvdG9zLnN0YXRpc3RpYy5zZXJ2aWNlIi4KCnRvdGFsX2Zsb3cSEAoIZG93bmxvYWQYASABKAQSDgoGdXBsb2FkGAIgASgEIpcCCgtub3RpZnlfZGF0YRJCCgp0b3RhbF9mbG93GAMgASgLMiwueXVoYWlpbi5wcm90b3Muc3RhdGlzdGljLnNlcnZpY2UudG90YWxfZmxvd0gAEloKFm5vdGlmeV9uZXdfY29ubmVjdGlvbnMYASABKAsyOC55dWhhaWluLnByb3Rvcy5zdGF0aXN0aWMuc2VydmljZS5ub3RpZnlfbmV3X2Nvbm5lY3Rpb25zSAASYAoZbm90aWZ5X3JlbW92ZV9jb25uZWN0aW9ucxgCIAEoCzI7Lnl1aGFpaW4ucHJvdG9zLnN0YXRpc3RpYy5zZXJ2aWNlLm5vdGlmeV9yZW1vdmVfY29ubmVjdGlvbnNIAEIGCgRkYXRhIkwKFm5vdGlmeV9uZXdfY29ubmVjdGlvbnMSMgoLY29ubmVjdGlvbnMYASADKAsyHS55dWhhaWluLnN0YXRpc3RpYy5jb25uZWN0aW9uIigKGW5vdGlmeV9yZW1vdmVfY29ubmVjdGlvbnMSCwoDaWRzGAEgAygEIp4BCg5mYWlsZWRfaGlzdG9yeRIQCghwcm90b2NvbBgBIAEoCRIMCgRob3N0GAIgASgJEg0KBWVycm9yGAMgASgJEg8KB3Byb2Nlc3MYBCABKAkSKAoEdGltZRgFIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXASIgoMZmFpbGVkX2NvdW50GAYgASgEUgxmYWlsZWRfY291bnQijAEKE2ZhaWxlZF9oaXN0b3J5X2xpc3QSQQoHb2JqZWN0cxgBIAMoCzIwLnl1aGFpaW4ucHJvdG9zLnN0YXRpc3RpYy5zZXJ2aWNlLmZhaWxlZF9oaXN0b3J5EjIKFGR1bXBfcHJvY2Vzc19lbmFibGVkGAIgASgIUhRkdW1wX3Byb2Nlc3NfZW5hYmxlZCJ5CgthbGxfaGlzdG9yeRIxCgpjb25uZWN0aW9uGAEgASgLMh0ueXVoYWlpbi5zdGF0aXN0aWMuY29ubmVjdGlvbhINCgVjb3VudBgCIAEoBBIoCgR0aW1lGAMgASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcCKGAQoQYWxsX2hpc3RvcnlfbGlzdBI+CgdvYmplY3RzGAEgAygLMi0ueXVoYWlpbi5wcm90b3Muc3RhdGlzdGljLnNlcnZpY2UuYWxsX2hpc3RvcnkSMgoUZHVtcF9wcm9jZXNzX2VuYWJsZWQYAiABKAhSFGR1bXBfcHJvY2Vzc19lbmFibGVkMqkECgtjb25uZWN0aW9ucxJZCgVjb25ucxIWLmdvb2dsZS5wcm90b2J1Zi5FbXB0eRo4Lnl1aGFpaW4ucHJvdG9zLnN0YXRpc3RpYy5zZXJ2aWNlLm5vdGlmeV9uZXdfY29ubmVjdGlvbnMSYQoKY2xvc2VfY29ubhI7Lnl1aGFpaW4ucHJvdG9zLnN0YXRpc3RpYy5zZXJ2aWNlLm5vdGlmeV9yZW1vdmVfY29ubmVjdGlvbnMaFi5nb29nbGUucHJvdG9idWYuRW1wdHkSTQoFdG90YWwSFi5nb29nbGUucHJvdG9idWYuRW1wdHkaLC55dWhhaWluLnByb3Rvcy5zdGF0aXN0aWMuc2VydmljZS50b3RhbF9mbG93ElEKBm5vdGlmeRIWLmdvb2dsZS5wcm90b2J1Zi5FbXB0eRotLnl1aGFpaW4ucHJvdG9zLnN0YXRpc3RpYy5zZXJ2aWNlLm5vdGlmeV9kYXRhMAESXwoOZmFpbGVkX2hpc3RvcnkSFi5nb29nbGUucHJvdG9idWYuRW1wdHkaNS55dWhhaWluLnByb3Rvcy5zdGF0aXN0aWMuc2VydmljZS5mYWlsZWRfaGlzdG9yeV9saXN0ElkKC2FsbF9oaXN0b3J5EhYuZ29vZ2xlLnByb3RvYnVmLkVtcHR5GjIueXVoYWlpbi5wcm90b3Muc3RhdGlzdGljLnNlcnZpY2UuYWxsX2hpc3RvcnlfbGlzdEJDWjlnaXRodWIuY29tL0FzdXRvcnVmYS95dWhhaWluL3BrZy9wcm90b3Mvc3RhdGlzdGljL3NlcnZpY2WSAwXSPgIQA2IIZWRpdGlvbnNw6Ac",[t.t,s.L9,c.i,i.AT]),m=(0,n.Z)(u,3),r=(0,o.Z)(u,0)}},a=>{var d=d=>a(a.s=d);a.O(0,[100,306,920,818,869,993,340,935,719,912,969,778,441,517,358],()=>d(8438)),_N_E=a.O()}]);
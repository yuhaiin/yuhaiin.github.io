(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8706],{8438:(d,a,l)=>{Promise.resolve().then(l.bind(l,2988))},425:(d,a,l)=>{"use strict";l.d(a,{H:()=>o,T:()=>c});var e=l(5155),n=l(57),t=l(6342);let o=d=>(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(n.A.Item,{children:(0,e.jsxs)("div",{className:"d-sm-flex",children:[(0,e.jsx)("div",{className:"endpoint-name flex-grow-1 notranslate",children:d.itemKey}),(0,e.jsx)("div",{className:"notranslate text-break",style:{opacity:.6},children:"Hash"===d.itemKey&&d.showModal?(0,e.jsx)("a",{href:"#",onClick:a=>{a.preventDefault(),d.showModal&&d.showModal(d.itemValue)},children:d.itemValue}):d.itemValue})]})})}),c=d=>{var a,l,c,s;let{value:i,endContent:u,showModal:m}=d;return(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)(n.A,{variant:"flush",children:[(0,e.jsx)(o,{itemKey:"Addr",itemValue:i.addr}),(0,e.jsx)(o,{itemKey:"Type",itemValue:t.NW[null!==(c=null===(a=i.type)||void 0===a?void 0:a.connType)&&void 0!==c?c:0]}),(0,e.jsx)(o,{itemKey:"Underlying",itemValue:t.NW[null!==(s=null===(l=i.type)||void 0===l?void 0:l.underlyingType)&&void 0!==s?s:0]}),Object.entries(i.extra).sort((d,a)=>d<=a?-1:1).map(d=>{let[a,l]=d;return(0,e.jsx)(o,{itemKey:a,itemValue:l,showModal:m},a)}),u]})})}},2988:(d,a,l)=>{"use strict";l.r(a),l.d(a,{default:()=>Z});var e=l(5155),n=l(3577),t=l(9297),o=l(2115),c=l(2981),s=l(57),i=l(8900),u=l(1566),m=l(2963),r=l(4216),h=l(7021),b=l(1149),p=l(9169),g=l(8927),v=l(148),G=l(4778),A=l(6342),W=l(6903),R=l(425);let x=function(){let d=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;if(!+d)return"0B";let l=Math.floor(Math.log(d)/Math.log(1024)),e=parseFloat((d/Math.pow(1024,l)).toFixed(0>a?0:a)),n=["B","KB","MB","GB","TB","PB","EB","ZB","YB"][l];return isNaN(e)||void 0===n?"":"".concat(e).concat(n)},Y=(d,a)=>{let l=(d.download-(a.download!==BigInt(0)?a.download:d.download))/BigInt(2),e=(d.upload-(a.upload!==BigInt(0)?a.upload:d.upload))/BigInt(2);return{download:"(".concat(x(Number(d.download)),"): ").concat(x(Number(l)),"/S"),upload:"(".concat(x(Number(d.upload)),"): ").concat(x(Number(e)),"/S")}},N=d=>{var a,l;let t=(0,o.useContext)(v.u),[c,h]=(0,o.useState)(!1);return(0,e.jsxs)(i.A.Item,{eventKey:d.data.id.toString(),children:[(0,e.jsx)(i.A.Header,{children:(0,e.jsxs)("div",{className:"d-line text-break",children:[(0,e.jsx)("code",{className:"ms-2",children:d.data.id.toString()}),(0,e.jsx)("span",{className:"ms-2",children:d.data.addr}),(0,e.jsx)(u.A,{className:"bg-light rounded-pill text-dark ms-1 text-uppercase",children:d.data.extra.MODE}),(0,e.jsx)(u.A,{className:"bg-light rounded-pill text-dark ms-1 text-uppercase",children:A.NW[null!==(l=null===(a=d.data.type)||void 0===a?void 0:a.connType)&&void 0!==l?l:0]}),void 0!==d.data.extra.Tag&&(0,e.jsx)(u.A,{className:"bg-light rounded-pill text-dark ms-1 text-uppercase",children:d.data.extra.Tag})]})}),(0,e.jsx)(i.A.Body,{children:(0,e.jsx)(R.T,{value:d.data,showModal:d.showModal,endContent:(0,e.jsx)(s.A.Item,{children:(0,e.jsx)("div",{className:"d-sm-flex",children:(0,e.jsxs)(m.A,{variant:"outline-danger",className:"flex-grow-1 notranslate",disabled:c,onClick:()=>{h(!0),(0,g.kP)(W.oQ.method.close_conn,"/conn","DELETE",(0,n.v)(W.SE,{ids:[d.data.id]})).then(async a=>{let{error:l}=a;l?(t.Error("code ".concat(d.data.id," failed, ").concat(l.code,"| ").concat(l.msg)),h(!1)):setTimeout(()=>{h(!1)},5e3)})},children:["Close",c&&(0,e.jsxs)(e.Fragment,{children:["\xa0",(0,e.jsx)(r.A,{size:"sm",animation:"border",variant:"danger"})]})]})})})})})]},d.data.id)},Z=function(){let[d,a]=(0,o.useState)({show:!1,hash:""}),[l,u]=(0,o.useState)({download:BigInt(0),upload:BigInt(0)}),{data:m,error:r}=(0,h.Ay)("/flow/total",async d=>(0,g.kP)(W.oQ.method.total,d).then(async d=>{let{data:a,error:e}=d;if(e)throw e;if(a){let d=Y(a,{download:l.download,upload:l.upload});return u({download:a.download,upload:a.upload}),d}}),{refreshInterval:2e3}),{data:v,error:A}=(0,b.A)("/conn",(0,g.zZ)(W.oQ.method.notify,(0,n.v)(t.v,{}),(d,a)=>{switch(void 0===a&&(a=new Map),d.data.case){case"notifyNewConnections":d.data.value.connections.sort((d,a)=>d.id>a.id?1:-1).forEach(d=>{a.set(d.id,d)});break;case"notifyRemoveConnections":d.data.value.ids.forEach(d=>{a.delete(d)})}return a}));return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(G.y,{show:d.show,hash:d.hash,editable:!1,onHide:()=>a({...d,show:!1})}),(0,e.jsx)(c.A,{className:"mb-3",children:(0,e.jsxs)(s.A,{variant:"flush",children:[(0,e.jsx)(s.A.Item,{children:(0,e.jsxs)("div",{className:"d-sm-flex",children:[(0,e.jsx)("div",{className:"endpoint-name flex-grow-1 notranslate",children:"Download"}),(0,e.jsx)("div",{className:"notranslate",style:{opacity:.6},id:"statistic-download",children:m?m.download:void 0!==r?r.msg:"Loading..."})]})}),(0,e.jsx)(s.A.Item,{children:(0,e.jsxs)("div",{className:"d-sm-flex",children:[(0,e.jsx)("div",{className:"endpoint-name flex-grow-1 notranslate",children:"Upload"}),(0,e.jsx)("div",{className:"notranslate",style:{opacity:.6},id:"statistic-upload",children:m?m.upload:void 0!==r?r.msg:"Loading..."})]})})]})}),void 0!==A?(0,e.jsx)(p.A,{code:A.code,children:A.msg}):void 0===v?(0,e.jsx)(p.A,{}):(0,e.jsx)(i.A,{className:"mb-3",alwaysOpen:!0,id:"connections",children:[...v.values()].reverse().map(d=>(0,e.jsx)(N,{data:d,showModal:d=>a({show:!0,hash:d})},d.id))})]})}},6342:(d,a,l)=>{"use strict";l.d(a,{L9:()=>t,NW:()=>c,mR:()=>o});var e=l(6788),n=l(8123);let t=(0,e.w)("ChZzdGF0aXN0aWMvY29uZmlnLnByb3RvEhF5dWhhaWluLnN0YXRpc3RpYyKEAQoIbmV0X3R5cGUSNQoJY29ubl90eXBlGAEgASgOMhcueXVoYWlpbi5zdGF0aXN0aWMudHlwZVIJY29ubl90eXBlEkEKD3VuZGVybHlpbmdfdHlwZRgCIAEoDjIXLnl1aGFpaW4uc3RhdGlzdGljLnR5cGVSD3VuZGVybHlpbmdfdHlwZSK4AQoKY29ubmVjdGlvbhIMCgRhZGRyGAEgASgJEgoKAmlkGAIgASgEEikKBHR5cGUYAyABKAsyGy55dWhhaWluLnN0YXRpc3RpYy5uZXRfdHlwZRI3CgVleHRyYRgEIAMoCzIoLnl1aGFpaW4uc3RhdGlzdGljLmNvbm5lY3Rpb24uRXh0cmFFbnRyeRosCgpFeHRyYUVudHJ5EgsKA2tleRgBIAEoCRINCgV2YWx1ZRgCIAEoCToCOAEqjwEKBHR5cGUSCwoHdW5rbm93bhAAEgcKA3RjcBABEggKBHRjcDQQAhIICgR0Y3A2EAMSBwoDdWRwEAQSCAoEdWRwNBAFEggKBHVkcDYQBhIGCgJpcBAHEgcKA2lwNBAIEgcKA2lwNhAJEggKBHVuaXgQChIMCgh1bml4Z3JhbRALEg4KCnVuaXhwYWNrZXQQDEIzWjFnaXRodWIuY29tL0FzdXRvcnVmYS95dWhhaWluL3BrZy9wcm90b3Mvc3RhdGlzdGljYgZwcm90bzM"),o=(0,n.Z)(t,1);var c=function(d){return d[d.unknown=0]="unknown",d[d.tcp=1]="tcp",d[d.tcp4=2]="tcp4",d[d.tcp6=3]="tcp6",d[d.udp=4]="udp",d[d.udp4=5]="udp4",d[d.udp6=6]="udp6",d[d.ip=7]="ip",d[d.ip4=8]="ip4",d[d.ip6=9]="ip6",d[d.unix=10]="unix",d[d.unixgram=11]="unixgram",d[d.unixpacket=12]="unixpacket",d}({})},6903:(d,a,l)=>{"use strict";l.d(a,{SE:()=>u,oQ:()=>m});var e=l(6788),n=l(8123),t=l(4395),o=l(9297),c=l(9678),s=l(6342);let i=(0,e.w)("ChtzdGF0aXN0aWMvZ3JwYy9jb25maWcucHJvdG8SIHl1aGFpaW4ucHJvdG9zLnN0YXRpc3RpYy5zZXJ2aWNlIi4KCnRvdGFsX2Zsb3cSEAoIZG93bmxvYWQYASABKAQSDgoGdXBsb2FkGAIgASgEIpcCCgtub3RpZnlfZGF0YRJCCgp0b3RhbF9mbG93GAMgASgLMiwueXVoYWlpbi5wcm90b3Muc3RhdGlzdGljLnNlcnZpY2UudG90YWxfZmxvd0gAEloKFm5vdGlmeV9uZXdfY29ubmVjdGlvbnMYASABKAsyOC55dWhhaWluLnByb3Rvcy5zdGF0aXN0aWMuc2VydmljZS5ub3RpZnlfbmV3X2Nvbm5lY3Rpb25zSAASYAoZbm90aWZ5X3JlbW92ZV9jb25uZWN0aW9ucxgCIAEoCzI7Lnl1aGFpaW4ucHJvdG9zLnN0YXRpc3RpYy5zZXJ2aWNlLm5vdGlmeV9yZW1vdmVfY29ubmVjdGlvbnNIAEIGCgRkYXRhIkwKFm5vdGlmeV9uZXdfY29ubmVjdGlvbnMSMgoLY29ubmVjdGlvbnMYASADKAsyHS55dWhhaWluLnN0YXRpc3RpYy5jb25uZWN0aW9uIigKGW5vdGlmeV9yZW1vdmVfY29ubmVjdGlvbnMSCwoDaWRzGAEgAygEIp4BCg5mYWlsZWRfaGlzdG9yeRIQCghwcm90b2NvbBgBIAEoCRIMCgRob3N0GAIgASgJEg0KBWVycm9yGAMgASgJEg8KB3Byb2Nlc3MYBCABKAkSKAoEdGltZRgFIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXASIgoMZmFpbGVkX2NvdW50GAYgASgEUgxmYWlsZWRfY291bnQijAEKE2ZhaWxlZF9oaXN0b3J5X2xpc3QSQQoHb2JqZWN0cxgBIAMoCzIwLnl1aGFpaW4ucHJvdG9zLnN0YXRpc3RpYy5zZXJ2aWNlLmZhaWxlZF9oaXN0b3J5EjIKFGR1bXBfcHJvY2Vzc19lbmFibGVkGAIgASgIUhRkdW1wX3Byb2Nlc3NfZW5hYmxlZCJ5CgthbGxfaGlzdG9yeRIxCgpjb25uZWN0aW9uGAEgASgLMh0ueXVoYWlpbi5zdGF0aXN0aWMuY29ubmVjdGlvbhINCgVjb3VudBgCIAEoBBIoCgR0aW1lGAMgASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcCKGAQoQYWxsX2hpc3RvcnlfbGlzdBI+CgdvYmplY3RzGAEgAygLMi0ueXVoYWlpbi5wcm90b3Muc3RhdGlzdGljLnNlcnZpY2UuYWxsX2hpc3RvcnkSMgoUZHVtcF9wcm9jZXNzX2VuYWJsZWQYAiABKAhSFGR1bXBfcHJvY2Vzc19lbmFibGVkMqkECgtjb25uZWN0aW9ucxJZCgVjb25ucxIWLmdvb2dsZS5wcm90b2J1Zi5FbXB0eRo4Lnl1aGFpaW4ucHJvdG9zLnN0YXRpc3RpYy5zZXJ2aWNlLm5vdGlmeV9uZXdfY29ubmVjdGlvbnMSYQoKY2xvc2VfY29ubhI7Lnl1aGFpaW4ucHJvdG9zLnN0YXRpc3RpYy5zZXJ2aWNlLm5vdGlmeV9yZW1vdmVfY29ubmVjdGlvbnMaFi5nb29nbGUucHJvdG9idWYuRW1wdHkSTQoFdG90YWwSFi5nb29nbGUucHJvdG9idWYuRW1wdHkaLC55dWhhaWluLnByb3Rvcy5zdGF0aXN0aWMuc2VydmljZS50b3RhbF9mbG93ElEKBm5vdGlmeRIWLmdvb2dsZS5wcm90b2J1Zi5FbXB0eRotLnl1aGFpaW4ucHJvdG9zLnN0YXRpc3RpYy5zZXJ2aWNlLm5vdGlmeV9kYXRhMAESXwoOZmFpbGVkX2hpc3RvcnkSFi5nb29nbGUucHJvdG9idWYuRW1wdHkaNS55dWhhaWluLnByb3Rvcy5zdGF0aXN0aWMuc2VydmljZS5mYWlsZWRfaGlzdG9yeV9saXN0ElkKC2FsbF9oaXN0b3J5EhYuZ29vZ2xlLnByb3RvYnVmLkVtcHR5GjIueXVoYWlpbi5wcm90b3Muc3RhdGlzdGljLnNlcnZpY2UuYWxsX2hpc3RvcnlfbGlzdEI7WjlnaXRodWIuY29tL0FzdXRvcnVmYS95dWhhaWluL3BrZy9wcm90b3Mvc3RhdGlzdGljL3NlcnZpY2ViBnByb3RvMw",[o.t,s.L9,c.i]),u=(0,n.Z)(i,3),m=(0,t.Z)(i,0)}},d=>{var a=a=>d(d.s=a);d.O(0,[7295,867,6306,8920,9818,9637,4691,2340,1215,1326,9719,1922,9969,4778,8441,1517,7358],()=>a(8438)),_N_E=d.O()}]);
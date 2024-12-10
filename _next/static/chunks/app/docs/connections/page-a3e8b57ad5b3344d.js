(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[706],{8438:(a,d,l)=>{Promise.resolve().then(l.bind(l,2988))},2988:(a,d,l)=>{"use strict";l.r(d),l.d(d,{default:()=>Z});var e=l(5155),n=l(3577),o=l(9297),t=l(2115),s=l(2981),c=l(57),i=l(8900),u=l(1566),m=l(2963),r=l(4216),h=l(4995),b=l(1149),p=l(9169),g=l(8927),v=l(148),A=l(1731),R=l(6342),G=l(6903);let x=function(){let a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,d=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;if(!+a)return"0B";let l=Math.floor(Math.log(a)/Math.log(1024)),e=parseFloat((a/Math.pow(1024,l)).toFixed(0>d?0:d)),n=["B","KB","MB","GB","TB","PB","EB","ZB","YB"][l];return isNaN(e)||void 0===n?"":"".concat(e).concat(n)},W=(a,d)=>{let l=(a.download-(d.download!==BigInt(0)?d.download:a.download))/BigInt(2),e=(a.upload-(d.upload!==BigInt(0)?d.upload:a.upload))/BigInt(2);return{download:"(".concat(x(Number(a.download)),"): ").concat(x(Number(l)),"/S"),upload:"(".concat(x(Number(a.upload)),"): ").concat(x(Number(e)),"/S")}},N=t.memo(a=>(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(c.A.Item,{children:(0,e.jsxs)("div",{className:"d-sm-flex",children:[(0,e.jsx)("div",{className:"endpoint-name flex-grow-1 notranslate",children:a.itemKey}),(0,e.jsx)("div",{className:"notranslate text-break",style:{opacity:.6},children:"Hash"!==a.itemKey?a.itemValue:(0,e.jsx)("a",{href:"#",onClick:d=>{d.preventDefault(),a.showModal(a.itemValue)},children:a.itemValue})})]})})})),y=t.memo(a=>{var d,l,o,s,h,b;let p=(0,t.useContext)(v.u),[A,x]=(0,t.useState)(!1);return(0,e.jsxs)(i.A.Item,{eventKey:a.data.id.toString(),children:[(0,e.jsx)(i.A.Header,{children:(0,e.jsxs)("div",{className:"d-line text-break",children:[(0,e.jsx)("code",{className:"ms-2",children:a.data.id.toString()}),(0,e.jsx)("span",{className:"ms-2",children:a.data.addr}),(0,e.jsx)(u.A,{className:"bg-light rounded-pill text-dark ms-1 text-uppercase",children:a.data.extra.MODE}),(0,e.jsx)(u.A,{className:"bg-light rounded-pill text-dark ms-1 text-uppercase",children:R.NW[null!==(s=null===(d=a.data.type)||void 0===d?void 0:d.connType)&&void 0!==s?s:0]}),void 0!==a.data.extra.Tag&&(0,e.jsx)(u.A,{className:"bg-light rounded-pill text-dark ms-1 text-uppercase",children:a.data.extra.Tag})]})}),(0,e.jsx)(i.A.Body,{children:(0,e.jsxs)(c.A,{variant:"flush",children:[(0,e.jsx)(N,{itemKey:"Type",itemValue:R.NW[null!==(h=null===(l=a.data.type)||void 0===l?void 0:l.connType)&&void 0!==h?h:0],showModal:a.showModal}),(0,e.jsx)(N,{itemKey:"Underlying",itemValue:R.NW[null!==(b=null===(o=a.data.type)||void 0===o?void 0:o.underlyingType)&&void 0!==b?b:0],showModal:a.showModal}),Object.entries(a.data.extra).sort((a,d)=>a<=d?-1:1).map(d=>{let[l,n]=d;return(0,e.jsx)(N,{itemKey:l,itemValue:n,showModal:a.showModal},l)}),(0,e.jsx)(c.A.Item,{children:(0,e.jsx)("div",{className:"d-sm-flex",children:(0,e.jsxs)(m.A,{variant:"outline-danger",className:"flex-grow-1 notranslate",disabled:A,onClick:()=>{x(!0),(0,g.kP)(G.oQ.method.close_conn,"/conn","DELETE",(0,n.v)(G.SE,{ids:[a.data.id]})).then(async d=>{let{error:l}=d;l?(p.Error("code ".concat(a.data.id," failed, ").concat(l.code,"| ").concat(l.msg)),x(!1)):setTimeout(()=>{x(!1)},5e3)})},children:["Close",A&&(0,e.jsxs)(e.Fragment,{children:["\xa0",(0,e.jsx)(r.A,{size:"sm",animation:"border",variant:"danger"})]})]})})})]})})]},a.data.id)}),Z=function(){let[a,d]=(0,t.useState)({show:!1,hash:""}),[l,u]=(0,t.useState)({download:BigInt(0),upload:BigInt(0)}),{data:m,error:r}=(0,h.Ay)("/flow/total",async a=>(0,g.kP)(G.oQ.method.total,a).then(async a=>{let{data:d,error:e}=a;if(e)throw e;if(d){let a=W(d,{download:l.download,upload:l.upload});return u({download:d.download,upload:d.upload}),a}}),{refreshInterval:2e3}),{data:v,error:R}=(0,b.A)("/conn",(0,g.zZ)(G.oQ.method.notify,(0,n.v)(o.v,{}),(a,d)=>{switch(void 0===d&&(d=new Map),a.data.case){case"notifyNewConnections":a.data.value.connections.sort((a,d)=>a.id>d.id?1:-1).forEach(a=>{d.set(a.id,a)});break;case"notifyRemoveConnections":a.data.value.ids.forEach(a=>{d.delete(a)})}return d}));return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(A.y,{show:a.show,hash:a.hash,editable:!1,onHide:()=>d({...a,show:!1})}),(0,e.jsx)(s.A,{className:"mb-3",children:(0,e.jsxs)(c.A,{variant:"flush",children:[(0,e.jsx)(c.A.Item,{children:(0,e.jsxs)("div",{className:"d-sm-flex",children:[(0,e.jsx)("div",{className:"endpoint-name flex-grow-1 notranslate",children:"Download"}),(0,e.jsx)("div",{className:"notranslate",style:{opacity:.6},id:"statistic-download",children:m?m.download:void 0!==r?r.msg:"Loading..."})]})}),(0,e.jsx)(c.A.Item,{children:(0,e.jsxs)("div",{className:"d-sm-flex",children:[(0,e.jsx)("div",{className:"endpoint-name flex-grow-1 notranslate",children:"Upload"}),(0,e.jsx)("div",{className:"notranslate",style:{opacity:.6},id:"statistic-upload",children:m?m.upload:void 0!==r?r.msg:"Loading..."})]})})]})}),void 0!==R?(0,e.jsx)(p.A,{code:R.code,children:R.msg}):void 0===v?(0,e.jsx)(p.A,{}):(0,e.jsx)(i.A,{className:"mb-3",alwaysOpen:!0,id:"connections",children:[...v.values()].reverse().map(a=>(0,e.jsx)(y,{data:a,showModal:a=>d({show:!0,hash:a})},a.id))})]})}},6342:(a,d,l)=>{"use strict";l.d(d,{L9:()=>e,NW:()=>n});let e=(0,l(6788).w)("ChZzdGF0aXN0aWMvY29uZmlnLnByb3RvEhF5dWhhaWluLnN0YXRpc3RpYyKEAQoIbmV0X3R5cGUSNQoJY29ubl90eXBlGAEgASgOMhcueXVoYWlpbi5zdGF0aXN0aWMudHlwZVIJY29ubl90eXBlEkEKD3VuZGVybHlpbmdfdHlwZRgCIAEoDjIXLnl1aGFpaW4uc3RhdGlzdGljLnR5cGVSD3VuZGVybHlpbmdfdHlwZSK4AQoKY29ubmVjdGlvbhIMCgRhZGRyGAEgASgJEgoKAmlkGAIgASgEEikKBHR5cGUYAyABKAsyGy55dWhhaWluLnN0YXRpc3RpYy5uZXRfdHlwZRI3CgVleHRyYRgEIAMoCzIoLnl1aGFpaW4uc3RhdGlzdGljLmNvbm5lY3Rpb24uRXh0cmFFbnRyeRosCgpFeHRyYUVudHJ5EgsKA2tleRgBIAEoCRINCgV2YWx1ZRgCIAEoCToCOAEqjwEKBHR5cGUSCwoHdW5rbm93bhAAEgcKA3RjcBABEggKBHRjcDQQAhIICgR0Y3A2EAMSBwoDdWRwEAQSCAoEdWRwNBAFEggKBHVkcDYQBhIGCgJpcBAHEgcKA2lwNBAIEgcKA2lwNhAJEggKBHVuaXgQChIMCgh1bml4Z3JhbRALEg4KCnVuaXhwYWNrZXQQDEIzWjFnaXRodWIuY29tL0FzdXRvcnVmYS95dWhhaWluL3BrZy9wcm90b3Mvc3RhdGlzdGljYgZwcm90bzM");var n=function(a){return a[a.unknown=0]="unknown",a[a.tcp=1]="tcp",a[a.tcp4=2]="tcp4",a[a.tcp6=3]="tcp6",a[a.udp=4]="udp",a[a.udp4=5]="udp4",a[a.udp6=6]="udp6",a[a.ip=7]="ip",a[a.ip4=8]="ip4",a[a.ip6=9]="ip6",a[a.unix=10]="unix",a[a.unixgram=11]="unixgram",a[a.unixpacket=12]="unixpacket",a}({})},6903:(a,d,l)=>{"use strict";l.d(d,{SE:()=>u,oQ:()=>m});var e=l(6788),n=l(8123),o=l(4395),t=l(9297),s=l(9678),c=l(6342);let i=(0,e.w)("ChtzdGF0aXN0aWMvZ3JwYy9jb25maWcucHJvdG8SIHl1aGFpaW4ucHJvdG9zLnN0YXRpc3RpYy5zZXJ2aWNlIi4KCnRvdGFsX2Zsb3cSEAoIZG93bmxvYWQYASABKAQSDgoGdXBsb2FkGAIgASgEIpcCCgtub3RpZnlfZGF0YRJCCgp0b3RhbF9mbG93GAMgASgLMiwueXVoYWlpbi5wcm90b3Muc3RhdGlzdGljLnNlcnZpY2UudG90YWxfZmxvd0gAEloKFm5vdGlmeV9uZXdfY29ubmVjdGlvbnMYASABKAsyOC55dWhhaWluLnByb3Rvcy5zdGF0aXN0aWMuc2VydmljZS5ub3RpZnlfbmV3X2Nvbm5lY3Rpb25zSAASYAoZbm90aWZ5X3JlbW92ZV9jb25uZWN0aW9ucxgCIAEoCzI7Lnl1aGFpaW4ucHJvdG9zLnN0YXRpc3RpYy5zZXJ2aWNlLm5vdGlmeV9yZW1vdmVfY29ubmVjdGlvbnNIAEIGCgRkYXRhIkwKFm5vdGlmeV9uZXdfY29ubmVjdGlvbnMSMgoLY29ubmVjdGlvbnMYASADKAsyHS55dWhhaWluLnN0YXRpc3RpYy5jb25uZWN0aW9uIigKGW5vdGlmeV9yZW1vdmVfY29ubmVjdGlvbnMSCwoDaWRzGAEgAygEIp4BCg5mYWlsZWRfaGlzdG9yeRIQCghwcm90b2NvbBgBIAEoCRIMCgRob3N0GAIgASgJEg0KBWVycm9yGAMgASgJEg8KB3Byb2Nlc3MYBCABKAkSKAoEdGltZRgFIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXASIgoMZmFpbGVkX2NvdW50GAYgASgEUgxmYWlsZWRfY291bnQijAEKE2ZhaWxlZF9oaXN0b3J5X2xpc3QSQQoHb2JqZWN0cxgBIAMoCzIwLnl1aGFpaW4ucHJvdG9zLnN0YXRpc3RpYy5zZXJ2aWNlLmZhaWxlZF9oaXN0b3J5EjIKFGR1bXBfcHJvY2Vzc19lbmFibGVkGAIgASgIUhRkdW1wX3Byb2Nlc3NfZW5hYmxlZDLOAwoLY29ubmVjdGlvbnMSWQoFY29ubnMSFi5nb29nbGUucHJvdG9idWYuRW1wdHkaOC55dWhhaWluLnByb3Rvcy5zdGF0aXN0aWMuc2VydmljZS5ub3RpZnlfbmV3X2Nvbm5lY3Rpb25zEmEKCmNsb3NlX2Nvbm4SOy55dWhhaWluLnByb3Rvcy5zdGF0aXN0aWMuc2VydmljZS5ub3RpZnlfcmVtb3ZlX2Nvbm5lY3Rpb25zGhYuZ29vZ2xlLnByb3RvYnVmLkVtcHR5Ek0KBXRvdGFsEhYuZ29vZ2xlLnByb3RvYnVmLkVtcHR5GiwueXVoYWlpbi5wcm90b3Muc3RhdGlzdGljLnNlcnZpY2UudG90YWxfZmxvdxJRCgZub3RpZnkSFi5nb29nbGUucHJvdG9idWYuRW1wdHkaLS55dWhhaWluLnByb3Rvcy5zdGF0aXN0aWMuc2VydmljZS5ub3RpZnlfZGF0YTABEl8KDmZhaWxlZF9oaXN0b3J5EhYuZ29vZ2xlLnByb3RvYnVmLkVtcHR5GjUueXVoYWlpbi5wcm90b3Muc3RhdGlzdGljLnNlcnZpY2UuZmFpbGVkX2hpc3RvcnlfbGlzdEI7WjlnaXRodWIuY29tL0FzdXRvcnVmYS95dWhhaWluL3BrZy9wcm90b3Mvc3RhdGlzdGljL3NlcnZpY2ViBnByb3RvMw",[t.t,c.L9,s.i]),u=(0,n.Z)(i,3),m=(0,o.Z)(i,0)}},a=>{var d=d=>a(a.s=d);a.O(0,[295,375,515,920,637,354,340,190,723,424,922,969,112,441,517,358],()=>d(8438)),_N_E=a.O()}]);
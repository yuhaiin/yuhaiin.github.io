(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1146],{1408:(e,s,n)=>{Promise.resolve().then(n.bind(n,5996))},3025:(e,s,n)=>{"use strict";n.d(s,{u:()=>r});var t=n(5155),l=n(0),a=n(2963);let r=e=>{let{onOk:s,content:n,show:r,onHide:o}=e;return(0,t.jsxs)(l.A,{show:r,onHide:o,centered:!0,children:[(0,t.jsx)(l.A.Body,{children:n}),(0,t.jsxs)(l.A.Footer,{children:[(0,t.jsx)(a.A,{variant:"outline-secondary",onClick:()=>{o()},children:"Cancel"}),(0,t.jsx)(a.A,{variant:"outline-danger",onClick:()=>{s(),o()},children:"OK"})]})]})}},2859:(e,s,n)=>{"use strict";n.d(s,{$d:()=>o,FX:()=>d,Vx:()=>i,no:()=>c});var t=n(5155),l=n(6180),a=n(6121),r=n(3667);let o=e=>{let{label:s,checked:n,onChange:o,className:i}=e;return(0,t.jsxs)(l.A.Group,{as:a.A,className:i,children:[(0,t.jsx)(l.A.Label,{column:!0,sm:2,children:s}),(0,t.jsx)(r.A,{sm:10,className:"d-flex align-items-center",children:(0,t.jsx)(l.A.Check,{className:"d-flex align-items-center",type:"switch",checked:n,onChange:e=>o(e.target.checked)})})]})},i=e=>{var s;let{...n}=e;return(0,t.jsxs)(l.A.Group,{as:a.A,className:n.lastElem?"":"mb-2",children:[(0,t.jsx)(l.A.Label,{column:!0,sm:2,children:n.label}),(0,t.jsx)(r.A,{sm:10,children:(0,t.jsx)(l.A.Select,{value:n.value,onChange:e=>n.onChange(Number(e.target.value)),children:n.type.values.filter(null!==(s=n.filter)&&void 0!==s?s:()=>!0).map(e=>(0,t.jsx)("option",{value:e.number,children:n.format?n.format(e.number):e.name},e.number))})})]})},c=e=>{let{label:s,values:n,onChange:o,value:i,emptyChoose:c,lastElem:d}=e;return(0,t.jsxs)(l.A.Group,{as:a.A,className:d?"":"mb-2",children:[(0,t.jsx)(l.A.Label,{column:!0,sm:2,children:s}),(0,t.jsx)(r.A,{sm:10,children:(0,t.jsxs)(l.A.Select,{value:i,onChange:e=>o(e.target.value),children:[c&&(0,t.jsx)("option",{value:"",children:"Choose..."}),n.map(e=>(0,t.jsx)("option",{value:e,children:e},e))]})})]})},d=e=>{let{values:s,onChange:n,value:a,emptyChoose:r,format:o}=e;return(0,t.jsxs)(l.A.Select,{value:a,onChange:e=>n(e.target.value),children:[r&&(0,t.jsx)("option",{value:"",children:"Choose..."}),s.map(e=>{let s="string"==typeof e?e:e[0],n="string"==typeof e?e:e[1];return(0,t.jsx)("option",{value:n,children:o?o(s):s},s)})]})}},148:(e,s,n)=>{"use strict";n.d(s,{u:()=>o,y:()=>i});var t=n(5155),l=n(2115),a=n(1757),r=n(491);let o=(0,l.createContext)({Info:e=>{console.log(e)},Error:e=>{console.error(e)}}),i=e=>{let{children:s}=e,[n,i]=(0,l.useState)({value:{},index:0}),c=(e,s)=>i(n=>({value:{...n.value,[n.index]:{text:e,type:s}},index:n.index+1}));return(0,t.jsxs)(o.Provider,{value:{Info:e=>{console.log(e),c(e,"success")},Error:e=>{console.error(e),c(e,"danger")}},children:[(0,t.jsx)(a.A,{className:"p-3",position:"top-center",containerPosition:"fixed",style:{zIndex:999999},children:Object.entries(n.value).map(e=>{let[s,n]=e;return(0,t.jsxs)(r.A,{role:"alert","aria-live":"assertive",show:!0,bg:n.type,onClose:()=>{i(e=>{let n={...e.value};return delete n[s],{...e,value:n}})},"aria-atomic":"true",delay:4e3,autohide:!0,animation:!0,children:[(0,t.jsxs)(r.A.Header,{children:[(0,t.jsx)("strong",{className:"me-auto",children:"Notification"}),(0,t.jsx)("small",{className:"text-muted",children:"just now"})]}),(0,t.jsx)(r.A.Body,{className:"text-center",children:n.text})]},"toast"+s)})}),s]})}},5996:(e,s,n)=>{"use strict";n.r(s),n.d(s,{default:()=>f});var t=n(5155),l=n(3577),a=n(1936),r=n(2115),o=n(2981),i=n(57),c=n(2963),d=n(8003),h=n(6180),u=n(4216),x=n(0),m=n(7021),j=n(3025),v=n(9169),g=n(8927),A=n(2859),b=n(148),p=n(1463),y=n(6863),C=n(7204);function f(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:"mb-3",children:(0,t.jsx)(N,{})}),(0,t.jsx)("div",{className:"mb-3",children:(0,t.jsx)(k,{})}),(0,t.jsx)(S,{})]})}function N(){let e=(0,r.useContext)(b.u),{data:s,error:n,isLoading:u,mutate:x}=(0,g.mp)(y.L2.method.list),[m,A]=(0,r.useState)({show:!1,name:"",new:!1}),[p,C]=(0,r.useState)({show:!1,name:""}),[f,N]=(0,r.useState)({value:""});if(void 0!==n)return(0,t.jsx)(o.A,{className:"align-items-center",children:(0,t.jsx)(o.A.Body,{children:(0,t.jsx)(v.$,{statusCode:n.code,title:n.msg})})});if(u||void 0===s)return(0,t.jsx)(o.A,{className:"align-items-center",children:(0,t.jsx)(o.A.Body,{children:(0,t.jsx)(v.A,{})})});let k=s=>{(0,g.kP)(y.L2.method.remove,(0,l.v)(a.g8,{value:s})).then(async s=>{let{error:n}=s;if(void 0===n)e.Info("remove successful"),x();else{let s=n.msg;e.Error(s),console.error(n.code,s)}})};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(j.u,{show:p.show,content:(0,t.jsxs)(t.Fragment,{children:["Are you sure to delete ",p.name,"?"]}),onOk:()=>{k(p.name),C(e=>({...e,show:!1}))},onHide:()=>{C(e=>({...e,show:!1}))}}),(0,t.jsx)(w,{name:m.name,show:m.show,isNew:m.new,onHide:e=>{e&&x(),A(e=>({...e,show:!1}))}}),(0,t.jsxs)(o.A,{children:[0!==s.names.length&&(0,t.jsx)(i.A,{variant:"flush",style:{borderBottom:"none"},children:s.names.sort((e,s)=>e<=s?-1:1).map((e,s)=>(0,t.jsx)(r.Fragment,{children:(0,t.jsxs)(i.A.Item,{action:!0,className:"d-flex justify-content-between align-items-center",style:{border:"0ch",borderBottom:"1px solid #dee2e6"},onClick:s=>{s.stopPropagation(),A({show:!0,name:e,new:!1})},children:[e,"bootstrap"!==e&&(0,t.jsx)(c.A,{variant:"outline-danger",disabled:"bootstrap"===e,size:"sm",as:"span",onClick:s=>{s.stopPropagation(),C({show:!0,name:e})},children:(0,t.jsx)("i",{className:"bi bi-x-lg"})},s+"span-button")]})},"resolvers-"+s))}),(0,t.jsx)(o.A.Footer,{children:(0,t.jsxs)(d.A,{className:"d-flex justify-content-end",children:[(0,t.jsx)(h.A.Control,{value:f.value,onChange:e=>N({value:e.target.value})}),(0,t.jsxs)(c.A,{variant:"outline-success",onClick:()=>{!f.value||s.names.includes(f.value)||(m.name===f.value&&m.new?A(e=>({...e,show:!0})):A({show:!0,name:f.value,new:!0}))},children:[(0,t.jsx)("i",{className:"bi bi-plus-lg"}),"New "]})]})})]})]})}let k=()=>{let e=(0,r.useContext)(b.u),[s,n]=(0,r.useState)({key:"",value:""}),[l,a]=(0,r.useState)(!1),{data:i,error:x,isLoading:m,mutate:j}=(0,g.mp)(y.L2.method.hosts);return void 0!==x?(0,t.jsx)(o.A,{className:"align-items-center",children:(0,t.jsx)(o.A.Body,{children:(0,t.jsx)(v.$,{statusCode:x.code,title:x.msg})})}):m||void 0===i?(0,t.jsx)(o.A,{className:"align-items-center",children:(0,t.jsx)(o.A.Body,{children:(0,t.jsx)(v.A,{})})}):(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(o.A,{children:[(0,t.jsxs)(o.A.Body,{children:[Object.entries(i.hosts).sort((e,s)=>{let[n]=e,[t]=s;return n>t?-1:1}).map((e,s)=>{let[n,l]=e;return(0,t.jsxs)(d.A,{className:0!==s?"mt-2":"",children:[(0,t.jsx)(h.A.Control,{readOnly:!0,value:n}),(0,t.jsx)(d.A.Text,{children:(0,t.jsx)("i",{className:"bi bi-arrow-right"})}),(0,t.jsx)(h.A.Control,{value:l,onChange:e=>j(s=>({...s,hosts:{...s.hosts,[n]:e.target.value}}),!1)}),(0,t.jsx)(c.A,{variant:"outline-danger",onClick:()=>{let e={...i.hosts};delete e[n],j({...i,hosts:e},!1)},children:(0,t.jsx)("i",{className:"bi bi-x-lg"})})]},"hosts"+n)}),(0,t.jsxs)(d.A,{className:"mt-2",children:[(0,t.jsx)(h.A.Control,{value:s.key,onChange:e=>n({...s,key:e.target.value})}),(0,t.jsx)(d.A.Text,{children:(0,t.jsx)("i",{className:"bi bi-arrow-right"})}),(0,t.jsx)(h.A.Control,{value:s.value,onChange:e=>n({...s,value:e.target.value})}),(0,t.jsx)(c.A,{variant:"outline-success",onClick:()=>{""!==s.key&&void 0===i.hosts[s.key]&&j({...i,hosts:{...i.hosts,[s.key]:s.value}},!1)},children:(0,t.jsx)("i",{className:"bi bi-plus-lg"})})]})]}),(0,t.jsx)(o.A.Footer,{className:"d-flex justify-content-end",children:(0,t.jsxs)(c.A,{variant:"outline-primary",disabled:l,onClick:()=>{a(!0),(0,g.kP)(y.L2.method.save_hosts,i).then(async s=>{let{error:n}=s;if(void 0===n)e.Info("save hosts successful");else{let s=n.msg;e.Error(s),console.error(n.code,s)}j(),a(!1)})},children:["Save",l&&(0,t.jsxs)(t.Fragment,{children:["\xa0",(0,t.jsx)(u.A,{size:"sm",animation:"border"})]})]})})]})})},w=e=>{let{name:s,show:n,isNew:o,onHide:i}=e,d=(0,r.useContext)(b.u),{data:h,error:u,isLoading:j,isValidating:A,mutate:C}=(0,m.Ay)(""===s?void 0:(0,g.cY)(y.L2.method.get),(0,g.AD)(y.L2.method.get,(0,l.v)(a.g8,{value:s}),o?(0,l.v)(p.Rx,{host:"8.8.8.8",type:p.NW.udp}):void 0),{shouldRetryOnError:!1,keepPreviousData:!1,revalidateOnFocus:!1});return(0,r.useEffect)(()=>{C()},[s,o,C]),(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(x.A,{show:n,onHide:i,centered:!0,children:[(0,t.jsx)(x.A.Header,{children:s}),(0,t.jsx)(x.A.Body,{children:u?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("h4",{className:"text-center my-2",children:[u.code," - ",u.msg]}),(0,t.jsx)("pre",{className:"text-center my-2 text-danger lead",children:u.raw})]}):A||j||!h?(0,t.jsx)(v.A,{}):(0,t.jsx)(F,{value:h,onChange:e=>{C(e,!1)}})}),(0,t.jsxs)(x.A.Footer,{children:[(0,t.jsx)(c.A,{variant:"outline-secondary",onClick:()=>{i()},children:"Close"}),(0,t.jsx)(c.A,{variant:"outline-primary",onClick:()=>{(0,g.kP)(y.L2.method.save,(0,l.v)(y.kB,{name:s,resolver:h})).then(async e=>{let{error:s}=e;if(void 0===s)d.Info("save successful"),i(!0);else{let e=s.msg;d.Error(e),console.error(s.code,e)}})},children:"Save"})]})]})})},F=e=>{let{value:s,onChange:n}=e;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(C.a9,{label:"Host",value:s.host,onChange:e=>n({...s,host:e})}),(0,t.jsx)(A.Vx,{label:"Type",type:p.m9,value:s.type,onChange:e=>n({...s,type:e})}),(0,t.jsx)(C.a9,{label:"Subnet",value:s.subnet,onChange:e=>n({...s,subnet:e})}),(0,t.jsx)(C.a9,{className:"",label:"SNI",value:s.tlsServername,onChange:e=>n({...s,tlsServername:e})})]})},S=()=>{let e=(0,r.useContext)(b.u),[s,n]=(0,r.useState)(!1),{data:l,error:a,isLoading:i,mutate:d}=(0,g.mp)(y.L2.method.fakedns);return void 0!==a?(0,t.jsx)(o.A,{className:"align-items-center",children:(0,t.jsx)(o.A.Body,{children:(0,t.jsx)(v.$,{statusCode:a.code,title:a.msg})})}):i||void 0===l?(0,t.jsx)(o.A,{className:"align-items-center",children:(0,t.jsx)(o.A.Body,{children:(0,t.jsx)(v.A,{})})}):(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(o.A,{children:[(0,t.jsxs)(o.A.Body,{children:[(0,t.jsx)(A.$d,{label:"Enabled",checked:l.enabled,onChange:()=>d(e=>({...e,enabled:!e.enabled}),!1)}),(0,t.jsx)(C.a9,{label:"IPv4 Range",value:l.ipv4Range,onChange:e=>d(s=>({...s,ipv4Range:e}),!1)}),(0,t.jsx)(C.a9,{label:"IPv6 Range",value:l.ipv6Range,onChange:e=>d(s=>({...s,ipv6Range:e}),!1)}),(0,t.jsx)(C.e9,{title:"Whitelist",data:l.whitelist,onChange:e=>d(s=>({...s,whitelist:e}),!1)})]}),(0,t.jsx)(o.A.Footer,{className:"d-flex justify-content-end",children:(0,t.jsxs)(c.A,{variant:"outline-primary",disabled:s,onClick:()=>{n(!0),(0,g.kP)(y.L2.method.save_fakedns,l).then(async s=>{let{error:t}=s;if(void 0===t)e.Info("save fakedns successful");else{let s=t.msg;e.Error(s),console.error(t.code,s)}d(),n(!1)})},children:["Save",s&&(0,t.jsxs)(t.Fragment,{children:["\xa0",(0,t.jsx)(u.A,{size:"sm",animation:"border"})]})]})})]})})}}},e=>{var s=s=>e(e.s=s);e.O(0,[5100,9636,9272,1430,9766,9637,6536,1360,8533,8912,6863,8441,1517,7358],()=>s(1408)),_N_E=e.O()}]);
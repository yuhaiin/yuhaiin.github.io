"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1246],{798:function(n,c,l){l.d(c,{$f:function(){return a},Mj:function(){return i},Ti:function(){return g},U9:function(){return m},XE:function(){return r},YO:function(){return u},Z5:function(){return e},dn:function(){return b},fG:function(){return A},gU:function(){return t},gW:function(){return G},q$:function(){return I},r:function(){return d},rQ:function(){return o}});var A="",o="https://clients3.google.com/generate_204",t="dns.nextdns.io:853",u=!0,g="http://ip.sb",e="stun.syncthing.net:3478",b="stun.nextcloud.com:443";let Z=()=>{let n=localStorage.getItem("api_url");A=null!==n?n:"",n=localStorage.getItem("remote_bypass"),null!==(n=localStorage.getItem("latency_http_url"))&&(o=n),null!==(n=localStorage.getItem("latency_dns_url"))&&(t=n),null!==(n=localStorage.getItem("latency_ipv6"))&&(u="true"===n),null!==(n=localStorage.getItem("latency_ip_url"))&&(g=n),null!==(n=localStorage.getItem("latency_stun_url"))&&(e=n),null!==(n=localStorage.getItem("latency_stun_tcp_url"))&&(b=n)},d=n=>{X("api_url",n)},a=n=>{X("latency_dns_url",n)},r=n=>{X("latency_http_url",n)},G=n=>{X("latency_ipv6",n.toString())},m=n=>{X("latency_ip_url",n)},i=n=>{X("latency_stun_url",n)},I=n=>{X("latency_stun_tcp_url",n)},X=(n,c)=>{""===c?localStorage.removeItem(n):localStorage.setItem(n,c),Z()};Z()},5594:function(n,c,l){l.d(c,{D4:function(){return u},OV:function(){return g},Uo:function(){return e},o5:function(){return b}});var A=l(798),o=l(3334),t=l(4504);function u(n,c,l,u){return g=>u?(0,o.d)(n,u):fetch("".concat(A.fG).concat(g),{method:c,body:l}).then(async c=>{if(!c.ok)throw{code:c.status,msg:c.statusText,raw:c.text()};return(0,t.h4)(n,new Uint8Array(await c.arrayBuffer()))})}function g(n,c,l,o){return u=>fetch("".concat(A.fG).concat(u),{method:l,body:o}).then(async l=>{if(!l.ok)throw{code:l.status,msg:l.statusText,raw:l.text()};return c((0,t.h4)(n,new Uint8Array(await l.arrayBuffer())))})}let e=async(n,c)=>{let l=await fetch("".concat(A.fG).concat(n),{method:void 0!==c.method?c.method:"POST",body:c.body});return l.ok?void 0===c.process?{}:{data:c.process(l)}:{error:{code:l.status,msg:l.text()}}};function b(n,c,l){return(o,u)=>{let g,{next:e}=u,b=new URL(""!==A.fG?A.fG:window.location.toString());b.pathname=o,b.protocol="https:"===b.protocol?"wss:":"ws:";let Z=!1,d=()=>{Z||(console.log("connecting to: ".concat(b)),(g=new WebSocket(b)).binaryType="arraybuffer",g.addEventListener("open",c=>{console.log("connect to: ".concat(b,", event type: ").concat(c.type)),null==g||g.send(n)}),g.addEventListener("message",n=>{let A=(0,t.h4)(c,new Uint8Array(n.data));e(null,n=>l(n,A))}),g.addEventListener("error",n=>{let c="websocket have some error";e({msg:c,code:500}),console.log(c,n.type)}),g.addEventListener("close",n=>{console.log("websocket closed, code: "+n.code),e(null,void 0),Z||(console.log("reconnect after 1 seconds"),setTimeout(d,1e3))}))};return d(),()=>{Z=!0,void 0!==g&&(console.log("close: ".concat(o)),g.close(),g=void 0)}}}},9301:function(n,c,l){l.d(c,{AQ:function(){return g},GZ:function(){return d},R3:function(){return G},aq:function(){return m},c0:function(){return i},jS:function(){return a},q6:function(){return e},sj:function(){return r},xJ:function(){return u}});var A,o,t,u,g,e,b=l(7472),Z=l(5369);let d=(0,b.l)("Chpjb25maWcvYnlwYXNzL2J5cGFzcy5wcm90bxIOeXVoYWlpbi5ieXBhc3Mi9QIKBmNvbmZpZxIhCgN0Y3AYAyABKA4yFC55dWhhaWluLmJ5cGFzcy5tb2RlEiEKA3VkcBgEIAEoDjIULnl1aGFpaW4uYnlwYXNzLm1vZGUSJAoLYnlwYXNzX2ZpbGUYAiABKAlCAhgBUgtieXBhc3NfZmlsZRJPCg51ZHBfcHJveHlfZnFkbhgGIAEoDjInLnl1aGFpaW4uYnlwYXNzLnVkcF9wcm94eV9mcWRuX3N0cmF0ZWd5Ug51ZHBfcHJveHlfZnFkbhJDCg5jdXN0b21fcnVsZV92MxgHIAMoCzIbLnl1aGFpaW4uYnlwYXNzLm1vZGVfY29uZmlnUg5jdXN0b21fcnVsZV92MxI/CgxyZW1vdGVfcnVsZXMYCCADKAsyGy55dWhhaWluLmJ5cGFzcy5yZW1vdGVfcnVsZVIMcmVtb3RlX3J1bGVzEigKD3Jlc29sdmVfbG9jYWxseRgJIAEoCFIPcmVzb2x2ZV9sb2NhbGx5IpQDCgttb2RlX2NvbmZpZxIiCgRtb2RlGAEgASgOMhQueXVoYWlpbi5ieXBhc3MubW9kZRILCgN0YWcYAiABKAkSEAoIaG9zdG5hbWUYAyADKAkSTAoQcmVzb2x2ZV9zdHJhdGVneRgEIAEoDjIgLnl1aGFpaW4uYnlwYXNzLnJlc29sdmVfc3RyYXRlZ3lSEHJlc29sdmVfc3RyYXRlZ3kSYQoXdWRwX3Byb3h5X2ZxZG5fc3RyYXRlZ3kYBiABKA4yJy55dWhhaWluLmJ5cGFzcy51ZHBfcHJveHlfZnFkbl9zdHJhdGVneVIXdWRwX3Byb3h5X2ZxZG5fc3RyYXRlZ3kSSQoKZXJyb3JfbXNncxgHIAMoCzIqLnl1aGFpaW4uYnlwYXNzLm1vZGVfY29uZmlnLkVycm9yTXNnc0VudHJ5UgllcnJvcl9tc2caMAoORXJyb3JNc2dzRW50cnkSCwoDa2V5GAEgASgJEg0KBXZhbHVlGAIgASgJOgI4AUoECAUQBlIOdWRwX3Byb3h5X2ZxZG4i+QEKC3JlbW90ZV9ydWxlEg8KB2VuYWJsZWQYASABKAgSDAoEbmFtZRgCIAEoCRIwCgRmaWxlGAMgASgLMiAueXVoYWlpbi5ieXBhc3MucmVtb3RlX3J1bGVfZmlsZUgAEjAKBGh0dHAYBCABKAsyIC55dWhhaWluLmJ5cGFzcy5yZW1vdGVfcnVsZV9odHRwSAASHAoJZXJyb3JfbXNnGAUgASgJUgllcnJvcl9tc2cSPwoMZGVmYXVsdF9tb2RlGAYgASgLMhsueXVoYWlpbi5ieXBhc3MubW9kZV9jb25maWdSDGRlZmF1bHRfbW9kZUIICgZvYmplY3QiIAoQcmVtb3RlX3J1bGVfZmlsZRIMCgRwYXRoGAEgASgJIi8KEHJlbW90ZV9ydWxlX2h0dHASCwoDdXJsGAEgASgJEg4KBm1ldGhvZBgCIAEoCSo0CgRtb2RlEgoKBmJ5cGFzcxAAEgoKBmRpcmVjdBABEgkKBXByb3h5EAISCQoFYmxvY2sQAypfChByZXNvbHZlX3N0cmF0ZWd5EgsKB2RlZmF1bHQQABIPCgtwcmVmZXJfaXB2NBABEg0KCW9ubHlfaXB2NBACEg8KC3ByZWZlcl9pcHY2EAMSDQoJb25seV9pcHY2EAQqXQoXdWRwX3Byb3h5X2ZxZG5fc3RyYXRlZ3kSIwofdWRwX3Byb3h5X2ZxZG5fc3RyYXRlZ3lfZGVmYXVsdBAAEgsKB3Jlc29sdmUQARIQCgxza2lwX3Jlc29sdmUQAkI3WjVnaXRodWIuY29tL0FzdXRvcnVmYS95dWhhaWluL3BrZy9wcm90b3MvY29uZmlnL2J5cGFzc2IGcHJvdG8z"),a=(0,Z.L)(d,0),r=(0,Z.L)(d,1),G=(0,Z.L)(d,2),m=(0,Z.L)(d,3),i=(0,Z.L)(d,4);(A=u||(u={}))[A.bypass=0]="bypass",A[A.direct=1]="direct",A[A.proxy=2]="proxy",A[A.block=3]="block",(o=g||(g={}))[o.default=0]="default",o[o.prefer_ipv4=1]="prefer_ipv4",o[o.only_ipv4=2]="only_ipv4",o[o.prefer_ipv6=3]="prefer_ipv6",o[o.only_ipv6=4]="only_ipv6",(t=e||(e={}))[t.udp_proxy_fqdn_strategy_default=0]="udp_proxy_fqdn_strategy_default",t[t.resolve=1]="resolve",t[t.skip_resolve=2]="skip_resolve"},5043:function(n,c,l){l.d(c,{FL:function(){return Z},Zz:function(){return a},rx:function(){return b},uh:function(){return d}});var A=l(7472),o=l(5369),t=l(8312),u=l(9301),g=l(9675),e=l(8225);let b=(0,A.l)("ChNjb25maWcvY29uZmlnLnByb3RvEg55dWhhaWluLmNvbmZpZyLgAwoHc2V0dGluZxIMCgRpcHY2GAcgASgIEkYKHmlwdjZfbG9jYWxfYWRkcl9wcmVmZXJfdW5pY2FzdBgKIAEoCFIeaXB2Nl9sb2NhbF9hZGRyX3ByZWZlcl91bmljYXN0EiQKDW5ldF9pbnRlcmZhY2UYBiABKAlSDW5ldF9pbnRlcmZhY2USQAoMc3lzdGVtX3Byb3h5GAEgASgLMhwueXVoYWlpbi5jb25maWcuc3lzdGVtX3Byb3h5UgxzeXN0ZW1fcHJveHkSJgoGYnlwYXNzGAIgASgLMhYueXVoYWlpbi5ieXBhc3MuY29uZmlnEiQKA2RucxgEIAEoCzIXLnl1aGFpaW4uZG5zLmRuc19jb25maWcSMAoGc2VydmVyGAUgASgLMiAueXVoYWlpbi5saXN0ZW5lci5pbmJvdW5kX2NvbmZpZxIjCgZsb2djYXQYCCABKAsyEy55dWhhaWluLmxvZy5sb2djYXQSRgoOY29uZmlnX3ZlcnNpb24YCSABKAsyHi55dWhhaWluLmNvbmZpZy5jb25maWdfdmVyc2lvblIOY29uZmlnX3ZlcnNpb24SKgoIcGxhdGZvcm0YCyABKAsyGC55dWhhaWluLmNvbmZpZy5wbGF0Zm9ybSIsCgxzeXN0ZW1fcHJveHkSDAoEaHR0cBgCIAEoCBIOCgZzb2NrczUYAyABKAgitAEKBGluZm8SDwoHdmVyc2lvbhgBIAEoCRIOCgZjb21taXQYAiABKAkSHgoKYnVpbGRfdGltZRgDIAEoCVIKYnVpbGRfdGltZRIeCgpnb192ZXJzaW9uGAQgASgJUgpnb192ZXJzaW9uEgwKBGFyY2gYBSABKAkSEAoIcGxhdGZvcm0YBiABKAkSCgoCb3MYByABKAkSEAoIY29tcGlsZXIYCCABKAkSDQoFYnVpbGQYCSADKAkiIQoOY29uZmlnX3ZlcnNpb24SDwoHdmVyc2lvbhgBIAEoBCIsCghwbGF0Zm9ybRIgCgthbmRyb2lkX2FwcBgBIAEoCFILYW5kcm9pZF9hcHBCMFouZ2l0aHViLmNvbS9Bc3V0b3J1ZmEveXVoYWlpbi9wa2cvcHJvdG9zL2NvbmZpZ2IGcHJvdG8z",[t.sU,u.GZ,g.Tq,e.vG]),Z=(0,o.L)(b,0),d=(0,o.L)(b,1),a=(0,o.L)(b,2)},9675:function(n,c,l){l.d(c,{PW:function(){return Z},Tq:function(){return e},X0:function(){return b},dt:function(){return o}});var A,o,t=l(7472),u=l(5369),g=l(3639);let e=(0,t.l)("ChRjb25maWcvZG5zL2Rucy5wcm90bxILeXVoYWlpbi5kbnMibAoDZG5zEgwKBGhvc3QYASABKAkSHwoEdHlwZRgFIAEoDjIRLnl1aGFpaW4uZG5zLnR5cGUSDgoGc3VibmV0GAQgASgJEiYKDnRsc19zZXJ2ZXJuYW1lGAIgASgJUg50bHNfc2VydmVybmFtZSKZBAoKZG5zX2NvbmZpZxIOCgZzZXJ2ZXIYBCABKAkSDwoHZmFrZWRucxgFIAEoCBIqChBmYWtlZG5zX2lwX3JhbmdlGAYgASgJUhBmYWtlZG5zX2lwX3JhbmdlEi4KEmZha2VkbnNfaXB2Nl9yYW5nZRgNIAEoCVISZmFrZWRuc19pcHY2X3JhbmdlEiwKEWZha2VkbnNfd2hpdGVsaXN0GAkgAygJUhFmYWtlZG5zX3doaXRlbGlzdBIgCgZyZW1vdGUYASABKAsyEC55dWhhaWluLmRucy5kbnMSHwoFbG9jYWwYAiABKAsyEC55dWhhaWluLmRucy5kbnMSIwoJYm9vdHN0cmFwGAMgASgLMhAueXVoYWlpbi5kbnMuZG5zEjEKBWhvc3RzGAggAygLMiIueXVoYWlpbi5kbnMuZG5zX2NvbmZpZy5Ib3N0c0VudHJ5EjcKCHJlc29sdmVyGAogAygLMiUueXVoYWlpbi5kbnMuZG5zX2NvbmZpZy5SZXNvbHZlckVudHJ5GiwKCkhvc3RzRW50cnkSCwoDa2V5GAEgASgJEg0KBXZhbHVlGAIgASgJOgI4ARpBCg1SZXNvbHZlckVudHJ5EgsKA2tleRgBIAEoCRIfCgV2YWx1ZRgCIAEoCzIQLnl1aGFpaW4uZG5zLmRuczoCOAFKBAgHEAhSFXJlc29sdmVfcmVtb3RlX2RvbWFpbipKCgR0eXBlEgsKB3Jlc2VydmUQABIHCgN1ZHAQARIHCgN0Y3AQAhIHCgNkb2gQAxIHCgNkb3QQBBIHCgNkb3EQBRIICgRkb2gzEAZCNFoyZ2l0aHViLmNvbS9Bc3V0b3J1ZmEveXVoYWlpbi9wa2cvcHJvdG9zL2NvbmZpZy9kbnNiBnByb3RvMw"),b=(0,u.L)(e,1);(A=o||(o={}))[A.reserve=0]="reserve",A[A.udp=1]="udp",A[A.tcp=2]="tcp",A[A.doh=3]="doh",A[A.dot=4]="dot",A[A.doq=5]="doq",A[A.doh3=6]="doh3";let Z=(0,g.i)(e,0)},8225:function(n,c,l){l.d(c,{BB:function(){return B},CE:function(){return R},Dk:function(){return z},Ii:function(){return X},L8:function(){return h},Mw:function(){return p},Nr:function(){return v},OC:function(){return L},Q4:function(){return f},S7:function(){return C},Sx:function(){return N},T5:function(){return a},UM:function(){return E},_9:function(){return Y},_Z:function(){return K},b3:function(){return G},cn:function(){return t},dN:function(){return m},jS:function(){return I},mM:function(){return r},oe:function(){return y},pJ:function(){return V},pj:function(){return J},pr:function(){return i},rg:function(){return S},vG:function(){return Z},yz:function(){return d},zW:function(){return s},zt:function(){return W}});var A,o,t,u,g=l(7472),e=l(5369),b=l(3639);let Z=(0,g.l)("Ch5jb25maWcvbGlzdGVuZXIvbGlzdGVuZXIucHJvdG8SEHl1aGFpaW4ubGlzdGVuZXIiowIKDmluYm91bmRfY29uZmlnEh4KCmhpamFja19kbnMYAiABKAhSCmhpamFja19kbnMSLAoRaGlqYWNrX2Ruc19mYWtlaXAYAyABKAhSEWhpamFja19kbnNfZmFrZWlwEkAKCGluYm91bmRzGAEgAygLMi4ueXVoYWlpbi5saXN0ZW5lci5pbmJvdW5kX2NvbmZpZy5JbmJvdW5kc0VudHJ5EiYKBXNuaWZmGAQgASgLMhcueXVoYWlpbi5saXN0ZW5lci5zbmlmZhpKCg1JbmJvdW5kc0VudHJ5EgsKA2tleRgBIAEoCRIoCgV2YWx1ZRgCIAEoCzIZLnl1aGFpaW4ubGlzdGVuZXIuaW5ib3VuZDoCOAFKBAgFEAZSB3NlcnZlcnMi4QUKB2luYm91bmQSDAoEbmFtZRgNIAEoCRIPCgdlbmFibGVkGA4gASgIEigKBWVtcHR5GBUgASgLMhcueXVoYWlpbi5saXN0ZW5lci5lbXB0eUgAEioKBnRjcHVkcBgPIAEoCzIYLnl1aGFpaW4ubGlzdGVuZXIudGNwdWRwSAASJgoEcXVpYxgQIAEoCzIWLnl1aGFpaW4ubGlzdGVuZXIucXVpY0gAEi4KCXRyYW5zcG9ydBgCIAMoCzIbLnl1aGFpaW4ubGlzdGVuZXIudHJhbnNwb3J0EiYKBGh0dHAYAyABKAsyFi55dWhhaWluLmxpc3RlbmVyLmh0dHBIARIqCgZzb2NrczUYBCABKAsyGC55dWhhaWluLmxpc3RlbmVyLnNvY2tzNUgBEjAKCXl1dWJpbnN5YRgHIAEoCzIbLnl1aGFpaW4ubGlzdGVuZXIueXV1Ymluc3lhSAESLQoDbWl4GAggASgLMhcueXVoYWlpbi5saXN0ZW5lci5taXhlZEgBUgVtaXhlZBIsCgdzb2NrczRhGAkgASgLMhkueXVoYWlpbi5saXN0ZW5lci5zb2NrczRhSAESKgoGdHByb3h5GBQgASgLMhgueXVoYWlpbi5saXN0ZW5lci50cHJveHlIARIoCgVyZWRpchgSIAEoCzIXLnl1aGFpaW4ubGlzdGVuZXIucmVkaXJIARIkCgN0dW4YEyABKAsyFS55dWhhaWluLmxpc3RlbmVyLnR1bkgBEkQKDHJldmVyc2VfaHR0cBgWIAEoCzIeLnl1aGFpaW4ubGlzdGVuZXIucmV2ZXJzZV9odHRwSAFSDHJldmVyc2VfaHR0cBJBCgtyZXZlcnNlX3RjcBgXIAEoCzIdLnl1aGFpaW4ubGlzdGVuZXIucmV2ZXJzZV90Y3BIAVILcmV2ZXJzZV90Y3BCCQoHbmV0d29ya0IKCghwcm90b2NvbEoECBEQElIESVB2NiLCAgoJdHJhbnNwb3J0EioKBm5vcm1hbBgMIAEoCzIYLnl1aGFpaW4ubGlzdGVuZXIubm9ybWFsSAASJAoDdGxzGAEgASgLMhUueXVoYWlpbi5saXN0ZW5lci50bHNIABIkCgNtdXgYAiABKAsyFS55dWhhaWluLmxpc3RlbmVyLm11eEgAEigKBWh0dHAyGAUgASgLMhcueXVoYWlpbi5saXN0ZW5lci5odHRwMkgAEjAKCXdlYnNvY2tldBgGIAEoCzIbLnl1aGFpaW4ubGlzdGVuZXIud2Vic29ja2V0SAASJgoEZ3JwYxgLIAEoCzIWLnl1aGFpaW4ubGlzdGVuZXIuZ3JwY0gAEiwKB3JlYWxpdHkYCiABKAsyGS55dWhhaWluLmxpc3RlbmVyLnJlYWxpdHlIAEILCgl0cmFuc3BvcnQiBwoFZW1wdHkiBQoDbXV4IkoKBnRjcHVkcBIMCgRob3N0GAEgASgJEjIKB2NvbnRyb2wYAiABKA4yIS55dWhhaWluLmxpc3RlbmVyLnRjcF91ZHBfY29udHJvbCI/CgRxdWljEgwKBGhvc3QYASABKAkSKQoDdGxzGAMgASgLMhwueXVoYWlpbi5saXN0ZW5lci50bHNfY29uZmlnIjYKBGh0dHASEAoIdXNlcm5hbWUYAyABKAkSEAoIcGFzc3dvcmQYBCABKAlKBAgBEAJSBGhvc3QiRQoGc29ja3M1EhAKCHVzZXJuYW1lGAMgASgJEhAKCHBhc3N3b3JkGAQgASgJEgsKA3VkcBgFIAEoCEoECAEQAlIEaG9zdCInCgdzb2NrczRhEhAKCHVzZXJuYW1lGAIgASgJSgQIARACUgRob3N0IjcKBW1peGVkEhAKCHVzZXJuYW1lGAMgASgJEhAKCHBhc3N3b3JkGAQgASgJSgQIARACUgRob3N0IhUKBXJlZGlyEgwKBGhvc3QYASABKAkiYAoGdHByb3h5EgwKBGhvc3QYASABKAkSJAoNZG5zX2hpamFja2luZxgCIAEoCFINZG5zX2hpamFja2luZxIiCgxmb3JjZV9mYWtlaXAYAyABKAhSDGZvcmNlX2Zha2VpcCKVAwoDdHVuEgwKBG5hbWUYASABKAkSCwoDbXR1GAIgASgFEiIKDGZvcmNlX2Zha2VpcBgJIAEoCFIMZm9yY2VfZmFrZWlwEiYKDnNraXBfbXVsdGljYXN0GAYgASgIUg5za2lwX211bHRpY2FzdBI1CgZkcml2ZXIYByABKA4yJS55dWhhaWluLmxpc3RlbmVyLnR1bi5lbmRwb2ludF9kcml2ZXISDgoGcG9ydGFsGAggASgJEhwKCXBvcnRhbF92NhgLIAEoCVIJcG9ydGFsX3Y2EiYKBXJvdXRlGAogASgLMhcueXVoYWlpbi5saXN0ZW5lci5yb3V0ZRIYCgdwb3N0X3VwGAwgAygJUgdwb3N0X3VwEhwKCXBvc3RfZG93bhgNIAMoCVIJcG9zdF9kb3duIj4KD2VuZHBvaW50X2RyaXZlchILCgdmZGJhc2VkEAASCwoHY2hhbm5lbBABEhEKDXN5c3RlbV9ndmlzb3IQAkoECAMQBEoECAQQBVIHZ2F0ZXdheVINZG5zX2hpamFja2luZyIpCgVyb3V0ZRIOCgZyb3V0ZXMYASADKAkSEAoIZXhjbHVkZXMYAiADKAki9QEKCXl1dWJpbnN5YRIQCghwYXNzd29yZBgCIAEoCRIgCgt0Y3BfZW5jcnlwdBgMIAEoCFILdGNwX2VuY3J5cHQSIAoLdWRwX2VuY3J5cHQYDSABKAhSC3VkcF9lbmNyeXB0EgsKA211eBgLIAEoCEoECAEQAkoECAMQBEoECAQQBUoECAUQBkoECAYQB0oECAcQCEoECAgQCUoECAkQCkoECAoQC1IEaG9zdFIVZm9yY2VfZGlzYWJsZV9lbmNyeXB0UgZub3JtYWxSA3Rsc1IEcXVpY1IJd2Vic29ja2V0UgRncnBjUgVodHRwMlIHcmVhbGl0eSIICgZub3JtYWwiFgoJd2Vic29ja2V0SgQIARACUgN0bHMiMAoDdGxzEikKA3RscxgBIAEoCzIcLnl1aGFpaW4ubGlzdGVuZXIudGxzX2NvbmZpZyIRCgRncnBjSgQIARACUgN0bHMiEgoFaHR0cDJKBAgBEAJSA3RscyKGAQoHcmVhbGl0eRIaCghzaG9ydF9pZBgBIAMoCVIIc2hvcnRfaWQSIAoLc2VydmVyX25hbWUYAiADKAlSC3NlcnZlcl9uYW1lEgwKBGRlc3QYAyABKAkSIAoLcHJpdmF0ZV9rZXkYBCABKAlSC3ByaXZhdGVfa2V5Eg0KBWRlYnVnGAUgASgIIrMCCgp0bHNfY29uZmlnEjMKDGNlcnRpZmljYXRlcxgBIAMoCzIdLnl1aGFpaW4ubGlzdGVuZXIuY2VydGlmaWNhdGUSIAoLbmV4dF9wcm90b3MYAyADKAlSC25leHRfcHJvdG9zEnEKF3NlcnZlcl9uYW1lX2NlcnRpZmljYXRlGAQgAygLMjcueXVoYWlpbi5saXN0ZW5lci50bHNfY29uZmlnLlNlcnZlck5hbWVDZXJ0aWZpY2F0ZUVudHJ5UhdzZXJ2ZXJfbmFtZV9jZXJ0aWZpY2F0ZRpbChpTZXJ2ZXJOYW1lQ2VydGlmaWNhdGVFbnRyeRILCgNrZXkYASABKAkSLAoFdmFsdWUYAiABKAsyHS55dWhhaWluLmxpc3RlbmVyLmNlcnRpZmljYXRlOgI4ASJ2CgtjZXJ0aWZpY2F0ZRIMCgRjZXJ0GAEgASgMEgsKA2tleRgCIAEoDBImCg5jZXJ0X2ZpbGVfcGF0aBgDIAEoCVIOY2VydF9maWxlX3BhdGgSJAoNa2V5X2ZpbGVfcGF0aBgEIAEoCVINa2V5X2ZpbGVfcGF0aCIYCgVzbmlmZhIPCgdlbmFibGVkGAEgASgIIhsKDHJldmVyc2VfaHR0cBILCgN1cmwYASABKAkiGwoLcmV2ZXJzZV90Y3ASDAoEaG9zdBgBIAEoCSpMCg90Y3BfdWRwX2NvbnRyb2wSFwoTdGNwX3VkcF9jb250cm9sX2FsbBAAEg8KC2Rpc2FibGVfdGNwEAESDwoLZGlzYWJsZV91ZHAQAkI5WjdnaXRodWIuY29tL0FzdXRvcnVmYS95dWhhaWluL3BrZy9wcm90b3MvY29uZmlnL2xpc3RlbmVyYgZwcm90bzM"),d=(0,e.L)(Z,0),a=(0,e.L)(Z,1),r=(0,e.L)(Z,2),G=(0,e.L)(Z,3),m=(0,e.L)(Z,4),i=(0,e.L)(Z,5),I=(0,e.L)(Z,6),X=(0,e.L)(Z,7),V=(0,e.L)(Z,8),B=(0,e.L)(Z,10),Y=(0,e.L)(Z,11),W=(0,e.L)(Z,12),C=(0,e.L)(Z,13);(A=t||(t={}))[A.fdbased=0]="fdbased",A[A.channel=1]="channel",A[A.system_gvisor=2]="system_gvisor";let h=(0,e.L)(Z,14),E=(0,e.L)(Z,15),y=(0,e.L)(Z,16),p=(0,e.L)(Z,17),R=(0,e.L)(Z,18),s=(0,e.L)(Z,19),S=(0,e.L)(Z,20),f=(0,e.L)(Z,21),J=(0,e.L)(Z,22),L=(0,e.L)(Z,23),K=(0,e.L)(Z,24),N=(0,e.L)(Z,25),v=(0,e.L)(Z,26);(o=u||(u={}))[o.tcp_udp_control_all=0]="tcp_udp_control_all",o[o.disable_tcp=1]="disable_tcp",o[o.disable_udp=2]="disable_udp";let z=(0,b.i)(Z,0)},8312:function(n,c,l){var A,o;l.d(c,{LC:function(){return A},sU:function(){return t}});let t=(0,l(7472).l)("ChRjb25maWcvbG9nL2xvZy5wcm90bxILeXVoYWlpbi5sb2ciPQoGbG9nY2F0EiUKBWxldmVsGAEgASgOMhYueXVoYWlpbi5sb2cubG9nX2xldmVsEgwKBHNhdmUYAiABKAgqUAoJbG9nX2xldmVsEgsKB3ZlcmJvc2UQABIJCgVkZWJ1ZxABEggKBGluZm8QAhILCgd3YXJuaW5nEAMSCQoFZXJyb3IQBBIJCgVmYXRhbBAFQjRaMmdpdGh1Yi5jb20vQXN1dG9ydWZhL3l1aGFpaW4vcGtnL3Byb3Rvcy9jb25maWcvbG9nYgZwcm90bzM");(o=A||(A={}))[o.verbose=0]="verbose",o[o.debug=1]="debug",o[o.info=2]="info",o[o.warning=3]="warning",o[o.error=4]="error",o[o.fatal=5]="fatal"}}]);
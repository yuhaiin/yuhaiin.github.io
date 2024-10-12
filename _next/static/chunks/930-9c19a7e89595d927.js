"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[930],{6440:function(e,n,t){t.d(n,{Js:function(){return f},RT:function(){return l},sp:function(){return d}});var r=t(8560),o=t(4504),i=t(5576),s=t(5790),a=t(9569),u=t(4862),c=t(5988);function l(e,n){g(n,e);let t=function(e,n){if(void 0===e)return[];if("enum"===n.fieldKind||"scalar"===n.fieldKind){for(let t=e.length-1;t>=0;--t)if(e[t].no==n.number)return[e[t]];return[]}return e.filter(e=>e.no===n.number)}(e.$unknown,n),[r,i,s]=d(n);for(let e of t)(0,o.MH)(r,new u.oP(e.data),i,e.wireType,{readUnknownFields:!1});return s()}function f(e,n,t){var r;g(n,e);let o=(null!==(r=e.$unknown)&&void 0!==r?r:[]).filter(e=>e.no!==n.number),[i,s]=d(n,t),c=new u.Lt;(0,a.d)(c,{writeUnknownFields:!1},i,s);let l=new u.oP(c.finish());for(;l.pos<l.len;){let[e,n]=l.tag(),t=l.skip(n,e);o.push({no:e,wireType:n,data:t})}e.$unknown=o}function d(e,n){let t=e.typeName,o=Object.assign(Object.assign({},e),{kind:"field",parent:e.extendee,localName:t}),a=Object.assign(Object.assign({},e.extendee),{fields:[o],members:[o],oneofs:[]}),u=(0,r.U)(a,void 0!==n?{[t]:n}:void 0);return[(0,i.SC)(a,u),o,()=>{let n=u[t];if(void 0===n){let n=e.message;return(0,c.A)(n)?(0,s.jW)(n.fields[0].scalar,n.fields[0].longAsString):(0,r.U)(n)}return n}]}function g(e,n){if(e.extendee.typeName!=n.$typeName)throw Error(`extension ${e.typeName} can only be applied to message ${e.extendee.typeName}`)}},9569:function(e,n,t){t.d(n,{O:function(){return a},d:function(){return c}});var r=t(5576),o=t(4862),i=t(8553);let s={writeUnknownFields:!0};function a(e,n,t){return u(new o.Lt,t?Object.assign(Object.assign({},s),t):s,(0,r.SC)(e,n)).finish()}function u(e,n,t){var r;for(let r of t.sortedFields){if(!t.isSet(r)){if(3==r.presence)throw Error(`cannot encode field ${t.desc.typeName}.${r.name} to binary: required field not set`);continue}c(e,n,t,r)}if(n.writeUnknownFields)for(let{no:n,wireType:o,data:i}of null!==(r=t.getUnknown())&&void 0!==r?r:[])e.tag(n,o).raw(i);return e}function c(e,n,t,r){var s;switch(r.fieldKind){case"scalar":case"enum":l(e,null!==(s=r.scalar)&&void 0!==s?s:i.w.INT32,r.number,t.get(r));break;case"list":!function(e,n,t,r){var s;if("message"==t.listKind){for(let o of r)f(e,n,t,o);return}let a=null!==(s=t.scalar)&&void 0!==s?s:i.w.INT32;if(t.packed){if(!r.size)return;for(let n of(e.tag(t.number,o.TD.LengthDelimited).fork(),r))d(e,a,n);e.join();return}for(let n of r)l(e,a,t.number,n)}(e,n,r,t.get(r));break;case"message":f(e,n,r,t.get(r));break;case"map":for(let[s,a]of t.get(r))!function(e,n,t,r,s){var a;switch(e.tag(t.number,o.TD.LengthDelimited).fork(),l(e,t.mapKey,1,r),t.mapKind){case"scalar":case"enum":l(e,null!==(a=t.scalar)&&void 0!==a?a:i.w.INT32,2,s);break;case"message":u(e.tag(2,o.TD.LengthDelimited).fork(),n,s).join()}e.join()}(e,n,r,s,a)}}function l(e,n,t,r){d(e.tag(t,function(e){switch(e){case i.w.BYTES:case i.w.STRING:return o.TD.LengthDelimited;case i.w.DOUBLE:case i.w.FIXED64:case i.w.SFIXED64:return o.TD.Bit64;case i.w.FIXED32:case i.w.SFIXED32:case i.w.FLOAT:return o.TD.Bit32;default:return o.TD.Varint}}(n)),n,r)}function f(e,n,t,r){t.delimitedEncoding?u(e.tag(t.number,o.TD.StartGroup),n,r).tag(t.number,o.TD.EndGroup):u(e.tag(t.number,o.TD.LengthDelimited).fork(),n,r).join()}function d(e,n,t){switch(n){case i.w.STRING:e.string(t);break;case i.w.BOOL:e.bool(t);break;case i.w.DOUBLE:e.double(t);break;case i.w.FLOAT:e.float(t);break;case i.w.INT32:e.int32(t);break;case i.w.INT64:e.int64(t);break;case i.w.UINT64:e.uint64(t);break;case i.w.FIXED64:e.fixed64(t);break;case i.w.BYTES:e.bytes(t);break;case i.w.FIXED32:e.fixed32(t);break;case i.w.SFIXED32:e.sfixed32(t);break;case i.w.SFIXED64:e.sfixed64(t);break;case i.w.SINT64:e.sint64(t);break;case i.w.UINT32:e.uint32(t);break;case i.w.SINT32:e.sint32(t)}}},6256:function(e,n,t){t.d(n,{LQ:function(){return d}});var r=t(8553),o=t(7346),i=t(5576),s=t(5003),a=t(5988),u=t(1417),c=t(6440),l=t(2096);let f={alwaysEmitImplicit:!1,enumAsInteger:!1,useProtoFieldName:!1};function d(e,n,t){var r;return JSON.stringify(g((0,i.SC)(e,n),t?Object.assign(Object.assign({},f),t):f),null,null!==(r=null==t?void 0:t.prettySpaces)&&void 0!==r?r:0)}function g(e,n){var t;let r=function(e,n){if(e.desc.typeName.startsWith("google.protobuf."))switch(e.desc.typeName){case"google.protobuf.Any":return function(e,n){let t,r;if(""===e.typeUrl)return{};let{registry:o}=n;if(o&&(t=(0,s.RH)(e,o))&&(r=o.getMessage(t.$typeName)),!r||!t)throw Error(`cannot encode message ${e.$typeName} to JSON: "${e.typeUrl}" is not in the type registry`);let a=g((0,i.SC)(r,t),n);return(r.typeName.startsWith("google.protobuf.")||null===a||Array.isArray(a)||"object"!=typeof a)&&(a={value:a}),a["@type"]=e.typeUrl,a}(e.message,n);case"google.protobuf.Timestamp":return function(e){let n=1e3*Number(e.seconds);if(n<Date.parse("0001-01-01T00:00:00Z")||n>Date.parse("9999-12-31T23:59:59Z"))throw Error(`cannot encode message ${e.$typeName} to JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive`);if(e.nanos<0)throw Error(`cannot encode message ${e.$typeName} to JSON: nanos must not be negative`);let t="Z";if(e.nanos>0){let n=(e.nanos+1e9).toString().substring(1);t="000000"===n.substring(3)?"."+n.substring(0,3)+"Z":"000"===n.substring(6)?"."+n.substring(0,6)+"Z":"."+n+"Z"}return new Date(n).toISOString().replace(".000Z",t)}(e.message);case"google.protobuf.Duration":return function(e){if(Number(e.seconds)>315576e6||-315576e6>Number(e.seconds))throw Error(`cannot encode message ${e.$typeName} to JSON: value out of range`);let n=e.seconds.toString();if(0!==e.nanos){let t=Math.abs(e.nanos).toString();"000000"===(t="0".repeat(9-t.length)+t).substring(3)?t=t.substring(0,3):"000"===t.substring(6)&&(t=t.substring(0,6)),n+="."+t,e.nanos<0&&0==Number(e.seconds)&&(n="-"+n)}return n+"s"}(e.message);case"google.protobuf.FieldMask":var t;return(t=e.message).paths.map(e=>{if(e.match(/_[0-9]?_/g)||e.match(/[A-Z]/g))throw Error(`cannot encode message ${t.$typeName} to JSON: lowerCamelCase of path name "`+e+'" is irreversible');return(0,o.f)(e)}).join(",");case"google.protobuf.Struct":return v(e.message);case"google.protobuf.Value":return p(e.message);case"google.protobuf.ListValue":return N(e.message);default:if((0,a.A)(e.desc)){let n=e.desc.fields[0];return w(n,e.get(n))}return}}(e,n);if(void 0!==r)return r;let u={};for(let t of e.sortedFields){if(!e.isSet(t)){if(3==t.presence)throw Error(`cannot encode field ${e.desc.typeName}.${t.name} to JSON: required field not set`);if(!n.alwaysEmitImplicit||2!==t.presence)continue}let r=b(t,e.get(t),n);void 0!==r&&(u[n.useProtoFieldName?t.name:t.jsonName]=r)}if(n.registry){let r=new Set;for(let o of null!==(t=e.getUnknown())&&void 0!==t?t:[]){if(r.has(o.no))continue;let t=n.registry.getExtensionFor(e.desc,o.no);if(!t)continue;let i=(0,c.RT)(e.message,t),[s,a]=(0,c.sp)(t,i),l=b(a,s.get(a),n);void 0!==l&&(u[t.jsonName]=l)}}return u}function b(e,n,t){switch(e.fieldKind){case"scalar":return w(e,n);case"message":return g(n,t);case"enum":return m(e.enum,n,t.enumAsInteger);case"list":return function(e,n){let t=e.field(),r=[];switch(t.listKind){case"scalar":for(let n of e)r.push(w(t,n));break;case"enum":for(let o of e)r.push(m(t.enum,o,n.enumAsInteger));break;case"message":for(let t of e)r.push(g(t,n))}return n.alwaysEmitImplicit||r.length>0?r:void 0}(n,t);case"map":return function(e,n){let t=e.field(),r={};switch(t.mapKind){case"scalar":for(let[n,o]of e)r[n]=w(t,o);break;case"message":for(let[t,o]of e)r[t]=g(o,n);break;case"enum":for(let[o,i]of e)r[o]=m(t.enum,i,n.enumAsInteger)}return n.alwaysEmitImplicit||e.size>0?r:void 0}(n,t)}}function m(e,n,t){var r;if("number"!=typeof n)throw Error(`cannot encode ${e} to JSON: expected number, got ${(0,l.DP)(n)}`);if("google.protobuf.NullValue"==e.typeName)return null;if(t)return n;let o=e.value[n];return null!==(r=null==o?void 0:o.name)&&void 0!==r?r:n}function w(e,n){var t,o,i,s,a,c;switch(e.scalar){case r.w.INT32:case r.w.SFIXED32:case r.w.SINT32:case r.w.FIXED32:case r.w.UINT32:if("number"!=typeof n)throw Error(`cannot encode ${e} to JSON: ${null===(t=(0,l.Gr)(e,n))||void 0===t?void 0:t.message}`);return n;case r.w.FLOAT:case r.w.DOUBLE:if("number"!=typeof n)throw Error(`cannot encode ${e} to JSON: ${null===(o=(0,l.Gr)(e,n))||void 0===o?void 0:o.message}`);if(isNaN(n))return"NaN";if(n===Number.POSITIVE_INFINITY)return"Infinity";if(n===Number.NEGATIVE_INFINITY)return"-Infinity";return n;case r.w.STRING:if("string"!=typeof n)throw Error(`cannot encode ${e} to JSON: ${null===(i=(0,l.Gr)(e,n))||void 0===i?void 0:i.message}`);return n;case r.w.BOOL:if("boolean"!=typeof n)throw Error(`cannot encode ${e} to JSON: ${null===(s=(0,l.Gr)(e,n))||void 0===s?void 0:s.message}`);return n;case r.w.UINT64:case r.w.FIXED64:case r.w.INT64:case r.w.SFIXED64:case r.w.SINT64:if("bigint"!=typeof n&&"string"!=typeof n)throw Error(`cannot encode ${e} to JSON: ${null===(a=(0,l.Gr)(e,n))||void 0===a?void 0:a.message}`);return n.toString();case r.w.BYTES:if(n instanceof Uint8Array)return(0,u.h)(n);throw Error(`cannot encode ${e} to JSON: ${null===(c=(0,l.Gr)(e,n))||void 0===c?void 0:c.message}`)}}function v(e){let n={};for(let[t,r]of Object.entries(e.fields))n[t]=p(r);return n}function p(e){switch(e.kind.case){case"nullValue":return null;case"numberValue":if(!Number.isFinite(e.kind.value))throw Error(`${e.$typeName} cannot be NaN or Infinity`);return e.kind.value;case"boolValue":case"stringValue":return e.kind.value;case"structValue":return v(e.kind.value);case"listValue":return N(e.kind.value);default:throw Error(`${e.$typeName} must have a value`)}}function N(e){return e.values.map(p)}},5003:function(e,n,t){t.d(n,{rE:function(){return l},RH:function(){return f}});var r=t(7472),o=t(5369);let i=(0,r.l)("Chlnb29nbGUvcHJvdG9idWYvYW55LnByb3RvEg9nb29nbGUucHJvdG9idWYiJgoDQW55EhAKCHR5cGVfdXJsGAEgASgJEg0KBXZhbHVlGAIgASgMQnYKE2NvbS5nb29nbGUucHJvdG9idWZCCEFueVByb3RvUAFaLGdvb2dsZS5nb2xhbmcub3JnL3Byb3RvYnVmL3R5cGVzL2tub3duL2FueXBiogIDR1BCqgIeR29vZ2xlLlByb3RvYnVmLldlbGxLbm93blR5cGVzYgZwcm90bzM"),s=(0,o.L)(i,0);var a=t(8560),u=t(9569),c=t(4504);function l(e,n,t){var r;let o=!1;return t||(t=(0,a.U)(s),o=!0),t.value=(0,u.O)(e,n),t.typeUrl=(r=n.$typeName,`type.googleapis.com/${r}`),o?t:void 0}function f(e,n){if(""===e.typeUrl)return;let t="message"==n.kind?n:n.getMessage(function(e){let n=e.lastIndexOf("/"),t=n>=0?e.substring(n+1):e;if(!t.length)throw Error(`invalid type url: ${e}`);return t}(e.typeUrl));if(t)return(0,c.h4)(t,e.value)}},2854:function(e,n,t){t.d(n,{r:function(){return i},u:function(){return s}});var r=t(7472),o=t(5369);let i=(0,r.l)("Chtnb29nbGUvcHJvdG9idWYvZW1wdHkucHJvdG8SD2dvb2dsZS5wcm90b2J1ZiIHCgVFbXB0eUJ9ChNjb20uZ29vZ2xlLnByb3RvYnVmQgpFbXB0eVByb3RvUAFaLmdvb2dsZS5nb2xhbmcub3JnL3Byb3RvYnVmL3R5cGVzL2tub3duL2VtcHR5cGL4AQGiAgNHUEKqAh5Hb29nbGUuUHJvdG9idWYuV2VsbEtub3duVHlwZXNiBnByb3RvMw"),s=(0,o.L)(i,0)},6535:function(e,n,t){t.d(n,{hD:function(){return i},mV:function(){return s}});var r=t(7472),o=t(5369);let i=(0,r.l)("Ch5nb29nbGUvcHJvdG9idWYvd3JhcHBlcnMucHJvdG8SD2dvb2dsZS5wcm90b2J1ZiIcCgtEb3VibGVWYWx1ZRINCgV2YWx1ZRgBIAEoASIbCgpGbG9hdFZhbHVlEg0KBXZhbHVlGAEgASgCIhsKCkludDY0VmFsdWUSDQoFdmFsdWUYASABKAMiHAoLVUludDY0VmFsdWUSDQoFdmFsdWUYASABKAQiGwoKSW50MzJWYWx1ZRINCgV2YWx1ZRgBIAEoBSIcCgtVSW50MzJWYWx1ZRINCgV2YWx1ZRgBIAEoDSIaCglCb29sVmFsdWUSDQoFdmFsdWUYASABKAgiHAoLU3RyaW5nVmFsdWUSDQoFdmFsdWUYASABKAkiGwoKQnl0ZXNWYWx1ZRINCgV2YWx1ZRgBIAEoDEKDAQoTY29tLmdvb2dsZS5wcm90b2J1ZkINV3JhcHBlcnNQcm90b1ABWjFnb29nbGUuZ29sYW5nLm9yZy9wcm90b2J1Zi90eXBlcy9rbm93bi93cmFwcGVyc3Bi+AEBogIDR1BCqgIeR29vZ2xlLlByb3RvYnVmLldlbGxLbm93blR5cGVzYgZwcm90bzM"),s=(0,o.L)(i,7)}}]);
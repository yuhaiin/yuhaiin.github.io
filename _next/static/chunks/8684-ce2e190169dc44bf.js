"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8684],{2750:(e,t,n)=>{n.d(t,{G6:()=>d,uQ:()=>c,z3:()=>g});var r=n(960),o=n(6398),s=n(7167),a=n(8042),i=n(9586),l=n(8503),u=n(2247);function c(e,t){f(t,e);let n=function(e,t){if(void 0===e)return[];if("enum"===t.fieldKind||"scalar"===t.fieldKind){for(let n=e.length-1;n>=0;--n)if(e[n].no==t.number)return[e[n]];return[]}return e.filter(e=>e.no===t.number)}(e.$unknown,t),[r,s,a]=g(t);for(let e of n)(0,o.dR)(r,new l.V5(e.data),s,e.wireType,{readUnknownFields:!0});return a()}function d(e,t,n){var r;f(t,e);let o=(null!==(r=e.$unknown)&&void 0!==r?r:[]).filter(e=>e.no!==t.number),[s,a]=g(t,n),u=new l.fI;(0,i.Y)(u,{writeUnknownFields:!0},s,a);let c=new l.V5(u.finish());for(;c.pos<c.len;){let[e,t]=c.tag(),n=c.skip(t,e);o.push({no:e,wireType:t,data:n})}e.$unknown=o}function g(e,t){let n=e.typeName,o=Object.assign(Object.assign({},e),{kind:"field",parent:e.extendee,localName:n}),i=Object.assign(Object.assign({},e.extendee),{fields:[o],members:[o],oneofs:[]}),l=(0,r.v)(i,void 0!==t?{[n]:t}:void 0);return[(0,s.E4)(i,l),o,()=>{let t=l[n];if(void 0===t){let t=e.message;return(0,u.l)(t)?(0,a.M7)(t.fields[0].scalar,t.fields[0].longAsString):(0,r.v)(t)}return t}]}function f(e,t){if(e.extendee.typeName!=t.$typeName)throw Error(`extension ${e.typeName} can only be applied to message ${e.extendee.typeName}`)}},2902:(e,t,n)=>{n.d(t,{J7:()=>g});var r=n(9666),o=n(2038),s=n(7167),a=n(7045),i=n(2247),l=n(6541),u=n(2750),c=n(1734);let d={alwaysEmitImplicit:!1,enumAsInteger:!1,useProtoFieldName:!1};function g(e,t,n){var r;return JSON.stringify(f((0,s.E4)(e,t),n?Object.assign(Object.assign({},d),n):d),null,null!==(r=null==n?void 0:n.prettySpaces)&&void 0!==r?r:0)}function f(e,t){var n,r;let l=function(e,t){if(e.desc.typeName.startsWith("google.protobuf."))switch(e.desc.typeName){case"google.protobuf.Any":return function(e,t){let n,r;if(""===e.typeUrl)return{};let{registry:o}=t;if(o&&(n=(0,a.rW)(e,o))&&(r=o.getMessage(n.$typeName)),!r||!n)throw Error(`cannot encode message ${e.$typeName} to JSON: "${e.typeUrl}" is not in the type registry`);let i=f((0,s.E4)(r,n),t);return(r.typeName.startsWith("google.protobuf.")||null===i||Array.isArray(i)||"object"!=typeof i)&&(i={value:i}),i["@type"]=e.typeUrl,i}(e.message,t);case"google.protobuf.Timestamp":return function(e){let t=1e3*Number(e.seconds);if(t<Date.parse("0001-01-01T00:00:00Z")||t>Date.parse("9999-12-31T23:59:59Z"))throw Error(`cannot encode message ${e.$typeName} to JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive`);if(e.nanos<0)throw Error(`cannot encode message ${e.$typeName} to JSON: nanos must not be negative`);let n="Z";if(e.nanos>0){let t=(e.nanos+1e9).toString().substring(1);n="000000"===t.substring(3)?"."+t.substring(0,3)+"Z":"000"===t.substring(6)?"."+t.substring(0,6)+"Z":"."+t+"Z"}return new Date(t).toISOString().replace(".000Z",n)}(e.message);case"google.protobuf.Duration":var n,r=e.message;if(Number(r.seconds)>315576e6||-315576e6>Number(r.seconds))throw Error(`cannot encode message ${r.$typeName} to JSON: value out of range`);let l=r.seconds.toString();if(0!==r.nanos){let e=Math.abs(r.nanos).toString();"000000"===(e="0".repeat(9-e.length)+e).substring(3)?e=e.substring(0,3):"000"===e.substring(6)&&(e=e.substring(0,6)),l+="."+e,r.nanos<0&&0==Number(r.seconds)&&(l="-"+l)}return l+"s";case"google.protobuf.FieldMask":return(n=e.message).paths.map(e=>{if(e.match(/_[0-9]?_/g)||e.match(/[A-Z]/g))throw Error(`cannot encode message ${n.$typeName} to JSON: lowerCamelCase of path name "`+e+'" is irreversible');return(0,o.R)(e)}).join(",");case"google.protobuf.Struct":return v(e.message);case"google.protobuf.Value":return N(e.message);case"google.protobuf.ListValue":return y(e.message);default:if((0,i.l)(e.desc)){let t=e.desc.fields[0];return p(t,e.get(t))}return}}(e,t);if(void 0!==l)return l;let c={};for(let n of e.sortedFields){if(!e.isSet(n)){if(3==n.presence)throw Error(`cannot encode field ${e.desc.typeName}.${n.name} to JSON: required field not set`);if(!t.alwaysEmitImplicit||2!==n.presence)continue}let o=m(n,e.get(n),t);void 0!==o&&(c[r=n,t.useProtoFieldName?r.name:r.jsonName]=o)}if(t.registry){let r=new Set;for(let o of null!==(n=e.getUnknown())&&void 0!==n?n:[]){if(r.has(o.no))continue;let n=t.registry.getExtensionFor(e.desc,o.no);if(!n)continue;let s=(0,u.uQ)(e.message,n),[a,i]=(0,u.z3)(n,s),l=m(i,a.get(i),t);void 0!==l&&(c[n.jsonName]=l)}}return c}function m(e,t,n){switch(e.fieldKind){case"scalar":return p(e,t);case"message":return f(t,n);case"enum":return b(e.enum,t,n.enumAsInteger);case"list":var r=t,o=n;let s=r.field(),a=[];switch(s.listKind){case"scalar":for(let e of r)a.push(p(s,e));break;case"enum":for(let e of r)a.push(b(s.enum,e,o.enumAsInteger));break;case"message":for(let e of r)a.push(f(e,o))}return o.alwaysEmitImplicit||a.length>0?a:void 0;case"map":var i=t,l=n;let u=i.field(),c={};switch(u.mapKind){case"scalar":for(let[e,t]of i)c[e]=p(u,t);break;case"message":for(let[e,t]of i)c[e]=f(t,l);break;case"enum":for(let[e,t]of i)c[e]=b(u.enum,t,l.enumAsInteger)}return l.alwaysEmitImplicit||i.size>0?c:void 0}}function b(e,t,n){var r;if("number"!=typeof t)throw Error(`cannot encode ${e} to JSON: expected number, got ${(0,c.$L)(t)}`);if("google.protobuf.NullValue"==e.typeName)return null;if(n)return t;let o=e.value[t];return null!==(r=null==o?void 0:o.name)&&void 0!==r?r:t}function p(e,t){var n,o,s,a,i,u;switch(e.scalar){case r.L.INT32:case r.L.SFIXED32:case r.L.SINT32:case r.L.FIXED32:case r.L.UINT32:if("number"!=typeof t)throw Error(`cannot encode ${e} to JSON: ${null===(n=(0,c.PZ)(e,t))||void 0===n?void 0:n.message}`);return t;case r.L.FLOAT:case r.L.DOUBLE:if("number"!=typeof t)throw Error(`cannot encode ${e} to JSON: ${null===(o=(0,c.PZ)(e,t))||void 0===o?void 0:o.message}`);if(isNaN(t))return"NaN";if(t===Number.POSITIVE_INFINITY)return"Infinity";if(t===Number.NEGATIVE_INFINITY)return"-Infinity";return t;case r.L.STRING:if("string"!=typeof t)throw Error(`cannot encode ${e} to JSON: ${null===(s=(0,c.PZ)(e,t))||void 0===s?void 0:s.message}`);return t;case r.L.BOOL:if("boolean"!=typeof t)throw Error(`cannot encode ${e} to JSON: ${null===(a=(0,c.PZ)(e,t))||void 0===a?void 0:a.message}`);return t;case r.L.UINT64:case r.L.FIXED64:case r.L.INT64:case r.L.SFIXED64:case r.L.SINT64:if("bigint"!=typeof t&&"string"!=typeof t)throw Error(`cannot encode ${e} to JSON: ${null===(i=(0,c.PZ)(e,t))||void 0===i?void 0:i.message}`);return t.toString();case r.L.BYTES:if(t instanceof Uint8Array)return(0,l.K)(t);throw Error(`cannot encode ${e} to JSON: ${null===(u=(0,c.PZ)(e,t))||void 0===u?void 0:u.message}`)}}function v(e){let t={};for(let[n,r]of Object.entries(e.fields))t[n]=N(r);return t}function N(e){switch(e.kind.case){case"nullValue":return null;case"numberValue":if(!Number.isFinite(e.kind.value))throw Error(`${e.$typeName} cannot be NaN or Infinity`);return e.kind.value;case"boolValue":case"stringValue":return e.kind.value;case"structValue":return v(e.kind.value);case"listValue":return y(e.kind.value);default:throw Error(`${e.$typeName} must have a value`)}}function y(e){return e.values.map(N)}},6487:(e,t,n)=>{n.d(t,{Ax:()=>s,g8:()=>a});var r=n(131),o=n(928);let s=(0,r.w)("Ch5nb29nbGUvcHJvdG9idWYvd3JhcHBlcnMucHJvdG8SD2dvb2dsZS5wcm90b2J1ZiIcCgtEb3VibGVWYWx1ZRINCgV2YWx1ZRgBIAEoASIbCgpGbG9hdFZhbHVlEg0KBXZhbHVlGAEgASgCIhsKCkludDY0VmFsdWUSDQoFdmFsdWUYASABKAMiHAoLVUludDY0VmFsdWUSDQoFdmFsdWUYASABKAQiGwoKSW50MzJWYWx1ZRINCgV2YWx1ZRgBIAEoBSIcCgtVSW50MzJWYWx1ZRINCgV2YWx1ZRgBIAEoDSIaCglCb29sVmFsdWUSDQoFdmFsdWUYASABKAgiHAoLU3RyaW5nVmFsdWUSDQoFdmFsdWUYASABKAkiGwoKQnl0ZXNWYWx1ZRINCgV2YWx1ZRgBIAEoDEKDAQoTY29tLmdvb2dsZS5wcm90b2J1ZkINV3JhcHBlcnNQcm90b1ABWjFnb29nbGUuZ29sYW5nLm9yZy9wcm90b2J1Zi90eXBlcy9rbm93bi93cmFwcGVyc3Bi+AEBogIDR1BCqgIeR29vZ2xlLlByb3RvYnVmLldlbGxLbm93blR5cGVzYgZwcm90bzM"),a=(0,o.Z)(s,7)},7045:(e,t,n)=>{n.d(t,{G0:()=>c,rW:()=>d});var r=n(131),o=n(928);let s=(0,r.w)("Chlnb29nbGUvcHJvdG9idWYvYW55LnByb3RvEg9nb29nbGUucHJvdG9idWYiJgoDQW55EhAKCHR5cGVfdXJsGAEgASgJEg0KBXZhbHVlGAIgASgMQnYKE2NvbS5nb29nbGUucHJvdG9idWZCCEFueVByb3RvUAFaLGdvb2dsZS5nb2xhbmcub3JnL3Byb3RvYnVmL3R5cGVzL2tub3duL2FueXBiogIDR1BCqgIeR29vZ2xlLlByb3RvYnVmLldlbGxLbm93blR5cGVzYgZwcm90bzM"),a=(0,o.Z)(s,0);var i=n(960),l=n(9586),u=n(6398);function c(e,t,n){var r;let o=!1;return n||(n=(0,i.v)(a),o=!0),n.value=(0,l.R)(e,t),n.typeUrl=(r=t.$typeName,`type.googleapis.com/${r}`),o?n:void 0}function d(e,t){var n,r;if(""===e.typeUrl)return;let o="message"==t.kind?t:t.getMessage(g(e.typeUrl));if(o&&(n=e,r=o,""!==n.typeUrl&&("string"==typeof r?r:r.typeName)===g(n.typeUrl)))return(0,u.Er)(o,e.value)}function g(e){let t=e.lastIndexOf("/"),n=t>=0?e.substring(t+1):e;if(!n.length)throw Error(`invalid type url: ${e}`);return n}}}]);
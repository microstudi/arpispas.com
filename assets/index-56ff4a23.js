(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function lv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var PS={exports:{}},Md={},DS={exports:{}},xt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tu=Symbol.for("react.element"),DT=Symbol.for("react.portal"),LT=Symbol.for("react.fragment"),NT=Symbol.for("react.strict_mode"),IT=Symbol.for("react.profiler"),UT=Symbol.for("react.provider"),bT=Symbol.for("react.context"),FT=Symbol.for("react.forward_ref"),OT=Symbol.for("react.suspense"),kT=Symbol.for("react.memo"),zT=Symbol.for("react.lazy"),J_=Symbol.iterator;function BT(t){return t===null||typeof t!="object"?null:(t=J_&&t[J_]||t["@@iterator"],typeof t=="function"?t:null)}var LS={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},NS=Object.assign,IS={};function Ja(t,e,n){this.props=t,this.context=e,this.refs=IS,this.updater=n||LS}Ja.prototype.isReactComponent={};Ja.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ja.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function US(){}US.prototype=Ja.prototype;function uv(t,e,n){this.props=t,this.context=e,this.refs=IS,this.updater=n||LS}var cv=uv.prototype=new US;cv.constructor=uv;NS(cv,Ja.prototype);cv.isPureReactComponent=!0;var ey=Array.isArray,bS=Object.prototype.hasOwnProperty,fv={current:null},FS={key:!0,ref:!0,__self:!0,__source:!0};function OS(t,e,n){var i,r={},s=null,l=null;if(e!=null)for(i in e.ref!==void 0&&(l=e.ref),e.key!==void 0&&(s=""+e.key),e)bS.call(e,i)&&!FS.hasOwnProperty(i)&&(r[i]=e[i]);var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){for(var f=Array(u),d=0;d<u;d++)f[d]=arguments[d+2];r.children=f}if(t&&t.defaultProps)for(i in u=t.defaultProps,u)r[i]===void 0&&(r[i]=u[i]);return{$$typeof:Tu,type:t,key:s,ref:l,props:r,_owner:fv.current}}function HT(t,e){return{$$typeof:Tu,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function dv(t){return typeof t=="object"&&t!==null&&t.$$typeof===Tu}function VT(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var ty=/\/+/g;function ip(t,e){return typeof t=="object"&&t!==null&&t.key!=null?VT(""+t.key):e.toString(36)}function wf(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var l=!1;if(t===null)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(t.$$typeof){case Tu:case DT:l=!0}}if(l)return l=t,r=r(l),t=i===""?"."+ip(l,0):i,ey(r)?(n="",t!=null&&(n=t.replace(ty,"$&/")+"/"),wf(r,e,n,"",function(d){return d})):r!=null&&(dv(r)&&(r=HT(r,n+(!r.key||l&&l.key===r.key?"":(""+r.key).replace(ty,"$&/")+"/")+t)),e.push(r)),1;if(l=0,i=i===""?".":i+":",ey(t))for(var u=0;u<t.length;u++){s=t[u];var f=i+ip(s,u);l+=wf(s,e,n,f,r)}else if(f=BT(t),typeof f=="function")for(t=f.call(t),u=0;!(s=t.next()).done;)s=s.value,f=i+ip(s,u++),l+=wf(s,e,n,f,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return l}function Ic(t,e,n){if(t==null)return t;var i=[],r=0;return wf(t,i,"","",function(s){return e.call(n,s,r++)}),i}function GT(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ni={current:null},Af={transition:null},WT={ReactCurrentDispatcher:ni,ReactCurrentBatchConfig:Af,ReactCurrentOwner:fv};function kS(){throw Error("act(...) is not supported in production builds of React.")}xt.Children={map:Ic,forEach:function(t,e,n){Ic(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ic(t,function(){e++}),e},toArray:function(t){return Ic(t,function(e){return e})||[]},only:function(t){if(!dv(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};xt.Component=Ja;xt.Fragment=LT;xt.Profiler=IT;xt.PureComponent=uv;xt.StrictMode=NT;xt.Suspense=OT;xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=WT;xt.act=kS;xt.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=NS({},t.props),r=t.key,s=t.ref,l=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,l=fv.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var u=t.type.defaultProps;for(f in e)bS.call(e,f)&&!FS.hasOwnProperty(f)&&(i[f]=e[f]===void 0&&u!==void 0?u[f]:e[f])}var f=arguments.length-2;if(f===1)i.children=n;else if(1<f){u=Array(f);for(var d=0;d<f;d++)u[d]=arguments[d+2];i.children=u}return{$$typeof:Tu,type:t.type,key:r,ref:s,props:i,_owner:l}};xt.createContext=function(t){return t={$$typeof:bT,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:UT,_context:t},t.Consumer=t};xt.createElement=OS;xt.createFactory=function(t){var e=OS.bind(null,t);return e.type=t,e};xt.createRef=function(){return{current:null}};xt.forwardRef=function(t){return{$$typeof:FT,render:t}};xt.isValidElement=dv;xt.lazy=function(t){return{$$typeof:zT,_payload:{_status:-1,_result:t},_init:GT}};xt.memo=function(t,e){return{$$typeof:kT,type:t,compare:e===void 0?null:e}};xt.startTransition=function(t){var e=Af.transition;Af.transition={};try{t()}finally{Af.transition=e}};xt.unstable_act=kS;xt.useCallback=function(t,e){return ni.current.useCallback(t,e)};xt.useContext=function(t){return ni.current.useContext(t)};xt.useDebugValue=function(){};xt.useDeferredValue=function(t){return ni.current.useDeferredValue(t)};xt.useEffect=function(t,e){return ni.current.useEffect(t,e)};xt.useId=function(){return ni.current.useId()};xt.useImperativeHandle=function(t,e,n){return ni.current.useImperativeHandle(t,e,n)};xt.useInsertionEffect=function(t,e){return ni.current.useInsertionEffect(t,e)};xt.useLayoutEffect=function(t,e){return ni.current.useLayoutEffect(t,e)};xt.useMemo=function(t,e){return ni.current.useMemo(t,e)};xt.useReducer=function(t,e,n){return ni.current.useReducer(t,e,n)};xt.useRef=function(t){return ni.current.useRef(t)};xt.useState=function(t){return ni.current.useState(t)};xt.useSyncExternalStore=function(t,e,n){return ni.current.useSyncExternalStore(t,e,n)};xt.useTransition=function(){return ni.current.useTransition()};xt.version="18.3.1";DS.exports=xt;var We=DS.exports;const jf=lv(We);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var XT=We,jT=Symbol.for("react.element"),YT=Symbol.for("react.fragment"),qT=Object.prototype.hasOwnProperty,KT=XT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,QT={key:!0,ref:!0,__self:!0,__source:!0};function zS(t,e,n){var i,r={},s=null,l=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(l=e.ref);for(i in e)qT.call(e,i)&&!QT.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:jT,type:t,key:s,ref:l,props:r,_owner:KT.current}}Md.Fragment=YT;Md.jsx=zS;Md.jsxs=zS;PS.exports=Md;var tt=PS.exports,BS={exports:{}},Li={},HS={exports:{}},VS={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(b,j){var q=b.length;b.push(j);e:for(;0<q;){var oe=q-1>>>1,ye=b[oe];if(0<r(ye,j))b[oe]=j,b[q]=ye,q=oe;else break e}}function n(b){return b.length===0?null:b[0]}function i(b){if(b.length===0)return null;var j=b[0],q=b.pop();if(q!==j){b[0]=q;e:for(var oe=0,ye=b.length,qe=ye>>>1;oe<qe;){var te=2*(oe+1)-1,pe=b[te],Ae=te+1,xe=b[Ae];if(0>r(pe,q))Ae<ye&&0>r(xe,pe)?(b[oe]=xe,b[Ae]=q,oe=Ae):(b[oe]=pe,b[te]=q,oe=te);else if(Ae<ye&&0>r(xe,q))b[oe]=xe,b[Ae]=q,oe=Ae;else break e}}return j}function r(b,j){var q=b.sortIndex-j.sortIndex;return q!==0?q:b.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var l=Date,u=l.now();t.unstable_now=function(){return l.now()-u}}var f=[],d=[],h=1,m=null,v=3,_=!1,x=!1,w=!1,E=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,S=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function M(b){for(var j=n(d);j!==null;){if(j.callback===null)i(d);else if(j.startTime<=b)i(d),j.sortIndex=j.expirationTime,e(f,j);else break;j=n(d)}}function A(b){if(w=!1,M(b),!x)if(n(f)!==null)x=!0,ie(I);else{var j=n(d);j!==null&&ce(A,j.startTime-b)}}function I(b,j){x=!1,w&&(w=!1,g(O),O=-1),_=!0;var q=v;try{for(M(j),m=n(f);m!==null&&(!(m.expirationTime>j)||b&&!U());){var oe=m.callback;if(typeof oe=="function"){m.callback=null,v=m.priorityLevel;var ye=oe(m.expirationTime<=j);j=t.unstable_now(),typeof ye=="function"?m.callback=ye:m===n(f)&&i(f),M(j)}else i(f);m=n(f)}if(m!==null)var qe=!0;else{var te=n(d);te!==null&&ce(A,te.startTime-j),qe=!1}return qe}finally{m=null,v=q,_=!1}}var N=!1,L=null,O=-1,P=5,C=-1;function U(){return!(t.unstable_now()-C<P)}function K(){if(L!==null){var b=t.unstable_now();C=b;var j=!0;try{j=L(!0,b)}finally{j?Y():(N=!1,L=null)}}else N=!1}var Y;if(typeof S=="function")Y=function(){S(K)};else if(typeof MessageChannel<"u"){var se=new MessageChannel,le=se.port2;se.port1.onmessage=K,Y=function(){le.postMessage(null)}}else Y=function(){E(K,0)};function ie(b){L=b,N||(N=!0,Y())}function ce(b,j){O=E(function(){b(t.unstable_now())},j)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(b){b.callback=null},t.unstable_continueExecution=function(){x||_||(x=!0,ie(I))},t.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<b?Math.floor(1e3/b):5},t.unstable_getCurrentPriorityLevel=function(){return v},t.unstable_getFirstCallbackNode=function(){return n(f)},t.unstable_next=function(b){switch(v){case 1:case 2:case 3:var j=3;break;default:j=v}var q=v;v=j;try{return b()}finally{v=q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(b,j){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var q=v;v=b;try{return j()}finally{v=q}},t.unstable_scheduleCallback=function(b,j,q){var oe=t.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?oe+q:oe):q=oe,b){case 1:var ye=-1;break;case 2:ye=250;break;case 5:ye=1073741823;break;case 4:ye=1e4;break;default:ye=5e3}return ye=q+ye,b={id:h++,callback:j,priorityLevel:b,startTime:q,expirationTime:ye,sortIndex:-1},q>oe?(b.sortIndex=q,e(d,b),n(f)===null&&b===n(d)&&(w?(g(O),O=-1):w=!0,ce(A,q-oe))):(b.sortIndex=ye,e(f,b),x||_||(x=!0,ie(I))),b},t.unstable_shouldYield=U,t.unstable_wrapCallback=function(b){var j=v;return function(){var q=v;v=j;try{return b.apply(this,arguments)}finally{v=q}}}})(VS);HS.exports=VS;var ZT=HS.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $T=We,Di=ZT;function ve(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var GS=new Set,iu={};function Po(t,e){ka(t,e),ka(t+"Capture",e)}function ka(t,e){for(iu[t]=e,t=0;t<e.length;t++)GS.add(e[t])}var Zr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Em=Object.prototype.hasOwnProperty,JT=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ny={},iy={};function ew(t){return Em.call(iy,t)?!0:Em.call(ny,t)?!1:JT.test(t)?iy[t]=!0:(ny[t]=!0,!1)}function tw(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function nw(t,e,n,i){if(e===null||typeof e>"u"||tw(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ii(t,e,n,i,r,s,l){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=l}var bn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){bn[t]=new ii(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];bn[e]=new ii(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){bn[t]=new ii(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){bn[t]=new ii(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){bn[t]=new ii(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){bn[t]=new ii(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){bn[t]=new ii(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){bn[t]=new ii(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){bn[t]=new ii(t,5,!1,t.toLowerCase(),null,!1,!1)});var hv=/[\-:]([a-z])/g;function pv(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(hv,pv);bn[e]=new ii(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(hv,pv);bn[e]=new ii(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(hv,pv);bn[e]=new ii(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){bn[t]=new ii(t,1,!1,t.toLowerCase(),null,!1,!1)});bn.xlinkHref=new ii("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){bn[t]=new ii(t,1,!1,t.toLowerCase(),null,!0,!0)});function mv(t,e,n,i){var r=bn.hasOwnProperty(e)?bn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(nw(e,n,r,i)&&(n=null),i||r===null?ew(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var is=$T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Uc=Symbol.for("react.element"),pa=Symbol.for("react.portal"),ma=Symbol.for("react.fragment"),gv=Symbol.for("react.strict_mode"),Mm=Symbol.for("react.profiler"),WS=Symbol.for("react.provider"),XS=Symbol.for("react.context"),vv=Symbol.for("react.forward_ref"),Tm=Symbol.for("react.suspense"),wm=Symbol.for("react.suspense_list"),_v=Symbol.for("react.memo"),ws=Symbol.for("react.lazy"),jS=Symbol.for("react.offscreen"),ry=Symbol.iterator;function Ml(t){return t===null||typeof t!="object"?null:(t=ry&&t[ry]||t["@@iterator"],typeof t=="function"?t:null)}var tn=Object.assign,rp;function Bl(t){if(rp===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);rp=e&&e[1]||""}return`
`+rp+t}var sp=!1;function op(t,e){if(!t||sp)return"";sp=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(d){var i=d}Reflect.construct(t,[],e)}else{try{e.call()}catch(d){i=d}t.call(e.prototype)}else{try{throw Error()}catch(d){i=d}t()}}catch(d){if(d&&i&&typeof d.stack=="string"){for(var r=d.stack.split(`
`),s=i.stack.split(`
`),l=r.length-1,u=s.length-1;1<=l&&0<=u&&r[l]!==s[u];)u--;for(;1<=l&&0<=u;l--,u--)if(r[l]!==s[u]){if(l!==1||u!==1)do if(l--,u--,0>u||r[l]!==s[u]){var f=`
`+r[l].replace(" at new "," at ");return t.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",t.displayName)),f}while(1<=l&&0<=u);break}}}finally{sp=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Bl(t):""}function iw(t){switch(t.tag){case 5:return Bl(t.type);case 16:return Bl("Lazy");case 13:return Bl("Suspense");case 19:return Bl("SuspenseList");case 0:case 2:case 15:return t=op(t.type,!1),t;case 11:return t=op(t.type.render,!1),t;case 1:return t=op(t.type,!0),t;default:return""}}function Am(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ma:return"Fragment";case pa:return"Portal";case Mm:return"Profiler";case gv:return"StrictMode";case Tm:return"Suspense";case wm:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case XS:return(t.displayName||"Context")+".Consumer";case WS:return(t._context.displayName||"Context")+".Provider";case vv:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case _v:return e=t.displayName||null,e!==null?e:Am(t.type)||"Memo";case ws:e=t._payload,t=t._init;try{return Am(t(e))}catch{}}return null}function rw(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Am(e);case 8:return e===gv?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function zs(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function YS(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function sw(t){var e=YS(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(l){i=""+l,s.call(this,l)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(l){i=""+l},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function bc(t){t._valueTracker||(t._valueTracker=sw(t))}function qS(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=YS(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Yf(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Cm(t,e){var n=e.checked;return tn({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function sy(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=zs(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function KS(t,e){e=e.checked,e!=null&&mv(t,"checked",e,!1)}function Rm(t,e){KS(t,e);var n=zs(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Pm(t,e.type,n):e.hasOwnProperty("defaultValue")&&Pm(t,e.type,zs(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function oy(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Pm(t,e,n){(e!=="number"||Yf(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Hl=Array.isArray;function Ra(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+zs(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Dm(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ve(91));return tn({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ay(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ve(92));if(Hl(n)){if(1<n.length)throw Error(ve(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:zs(n)}}function QS(t,e){var n=zs(e.value),i=zs(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function ly(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function ZS(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Lm(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?ZS(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Fc,$S=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Fc=Fc||document.createElement("div"),Fc.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Fc.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ru(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var jl={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ow=["Webkit","ms","Moz","O"];Object.keys(jl).forEach(function(t){ow.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),jl[e]=jl[t]})});function JS(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||jl.hasOwnProperty(t)&&jl[t]?(""+e).trim():e+"px"}function eE(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=JS(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var aw=tn({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Nm(t,e){if(e){if(aw[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ve(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ve(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ve(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ve(62))}}function Im(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Um=null;function yv(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var bm=null,Pa=null,Da=null;function uy(t){if(t=Cu(t)){if(typeof bm!="function")throw Error(ve(280));var e=t.stateNode;e&&(e=Rd(e),bm(t.stateNode,t.type,e))}}function tE(t){Pa?Da?Da.push(t):Da=[t]:Pa=t}function nE(){if(Pa){var t=Pa,e=Da;if(Da=Pa=null,uy(t),e)for(t=0;t<e.length;t++)uy(e[t])}}function iE(t,e){return t(e)}function rE(){}var ap=!1;function sE(t,e,n){if(ap)return t(e,n);ap=!0;try{return iE(t,e,n)}finally{ap=!1,(Pa!==null||Da!==null)&&(rE(),nE())}}function su(t,e){var n=t.stateNode;if(n===null)return null;var i=Rd(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ve(231,e,typeof n));return n}var Fm=!1;if(Zr)try{var Tl={};Object.defineProperty(Tl,"passive",{get:function(){Fm=!0}}),window.addEventListener("test",Tl,Tl),window.removeEventListener("test",Tl,Tl)}catch{Fm=!1}function lw(t,e,n,i,r,s,l,u,f){var d=Array.prototype.slice.call(arguments,3);try{e.apply(n,d)}catch(h){this.onError(h)}}var Yl=!1,qf=null,Kf=!1,Om=null,uw={onError:function(t){Yl=!0,qf=t}};function cw(t,e,n,i,r,s,l,u,f){Yl=!1,qf=null,lw.apply(uw,arguments)}function fw(t,e,n,i,r,s,l,u,f){if(cw.apply(this,arguments),Yl){if(Yl){var d=qf;Yl=!1,qf=null}else throw Error(ve(198));Kf||(Kf=!0,Om=d)}}function Do(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function oE(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function cy(t){if(Do(t)!==t)throw Error(ve(188))}function dw(t){var e=t.alternate;if(!e){if(e=Do(t),e===null)throw Error(ve(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return cy(r),t;if(s===i)return cy(r),e;s=s.sibling}throw Error(ve(188))}if(n.return!==i.return)n=r,i=s;else{for(var l=!1,u=r.child;u;){if(u===n){l=!0,n=r,i=s;break}if(u===i){l=!0,i=r,n=s;break}u=u.sibling}if(!l){for(u=s.child;u;){if(u===n){l=!0,n=s,i=r;break}if(u===i){l=!0,i=s,n=r;break}u=u.sibling}if(!l)throw Error(ve(189))}}if(n.alternate!==i)throw Error(ve(190))}if(n.tag!==3)throw Error(ve(188));return n.stateNode.current===n?t:e}function aE(t){return t=dw(t),t!==null?lE(t):null}function lE(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=lE(t);if(e!==null)return e;t=t.sibling}return null}var uE=Di.unstable_scheduleCallback,fy=Di.unstable_cancelCallback,hw=Di.unstable_shouldYield,pw=Di.unstable_requestPaint,an=Di.unstable_now,mw=Di.unstable_getCurrentPriorityLevel,xv=Di.unstable_ImmediatePriority,cE=Di.unstable_UserBlockingPriority,Qf=Di.unstable_NormalPriority,gw=Di.unstable_LowPriority,fE=Di.unstable_IdlePriority,Td=null,Cr=null;function vw(t){if(Cr&&typeof Cr.onCommitFiberRoot=="function")try{Cr.onCommitFiberRoot(Td,t,void 0,(t.current.flags&128)===128)}catch{}}var lr=Math.clz32?Math.clz32:xw,_w=Math.log,yw=Math.LN2;function xw(t){return t>>>=0,t===0?32:31-(_w(t)/yw|0)|0}var Oc=64,kc=4194304;function Vl(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Zf(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,l=n&268435455;if(l!==0){var u=l&~r;u!==0?i=Vl(u):(s&=l,s!==0&&(i=Vl(s)))}else l=n&~r,l!==0?i=Vl(l):s!==0&&(i=Vl(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-lr(e),r=1<<n,i|=t[n],e&=~r;return i}function Sw(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ew(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var l=31-lr(s),u=1<<l,f=r[l];f===-1?(!(u&n)||u&i)&&(r[l]=Sw(u,e)):f<=e&&(t.expiredLanes|=u),s&=~u}}function km(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function dE(){var t=Oc;return Oc<<=1,!(Oc&4194240)&&(Oc=64),t}function lp(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function wu(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-lr(e),t[e]=n}function Mw(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-lr(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Sv(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-lr(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var kt=0;function hE(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var pE,Ev,mE,gE,vE,zm=!1,zc=[],Ls=null,Ns=null,Is=null,ou=new Map,au=new Map,Cs=[],Tw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function dy(t,e){switch(t){case"focusin":case"focusout":Ls=null;break;case"dragenter":case"dragleave":Ns=null;break;case"mouseover":case"mouseout":Is=null;break;case"pointerover":case"pointerout":ou.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":au.delete(e.pointerId)}}function wl(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Cu(e),e!==null&&Ev(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function ww(t,e,n,i,r){switch(e){case"focusin":return Ls=wl(Ls,t,e,n,i,r),!0;case"dragenter":return Ns=wl(Ns,t,e,n,i,r),!0;case"mouseover":return Is=wl(Is,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return ou.set(s,wl(ou.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,au.set(s,wl(au.get(s)||null,t,e,n,i,r)),!0}return!1}function _E(t){var e=go(t.target);if(e!==null){var n=Do(e);if(n!==null){if(e=n.tag,e===13){if(e=oE(n),e!==null){t.blockedOn=e,vE(t.priority,function(){mE(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Cf(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Bm(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Um=i,n.target.dispatchEvent(i),Um=null}else return e=Cu(n),e!==null&&Ev(e),t.blockedOn=n,!1;e.shift()}return!0}function hy(t,e,n){Cf(t)&&n.delete(e)}function Aw(){zm=!1,Ls!==null&&Cf(Ls)&&(Ls=null),Ns!==null&&Cf(Ns)&&(Ns=null),Is!==null&&Cf(Is)&&(Is=null),ou.forEach(hy),au.forEach(hy)}function Al(t,e){t.blockedOn===e&&(t.blockedOn=null,zm||(zm=!0,Di.unstable_scheduleCallback(Di.unstable_NormalPriority,Aw)))}function lu(t){function e(r){return Al(r,t)}if(0<zc.length){Al(zc[0],t);for(var n=1;n<zc.length;n++){var i=zc[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Ls!==null&&Al(Ls,t),Ns!==null&&Al(Ns,t),Is!==null&&Al(Is,t),ou.forEach(e),au.forEach(e),n=0;n<Cs.length;n++)i=Cs[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Cs.length&&(n=Cs[0],n.blockedOn===null);)_E(n),n.blockedOn===null&&Cs.shift()}var La=is.ReactCurrentBatchConfig,$f=!0;function Cw(t,e,n,i){var r=kt,s=La.transition;La.transition=null;try{kt=1,Mv(t,e,n,i)}finally{kt=r,La.transition=s}}function Rw(t,e,n,i){var r=kt,s=La.transition;La.transition=null;try{kt=4,Mv(t,e,n,i)}finally{kt=r,La.transition=s}}function Mv(t,e,n,i){if($f){var r=Bm(t,e,n,i);if(r===null)_p(t,e,i,Jf,n),dy(t,i);else if(ww(r,t,e,n,i))i.stopPropagation();else if(dy(t,i),e&4&&-1<Tw.indexOf(t)){for(;r!==null;){var s=Cu(r);if(s!==null&&pE(s),s=Bm(t,e,n,i),s===null&&_p(t,e,i,Jf,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else _p(t,e,i,null,n)}}var Jf=null;function Bm(t,e,n,i){if(Jf=null,t=yv(i),t=go(t),t!==null)if(e=Do(t),e===null)t=null;else if(n=e.tag,n===13){if(t=oE(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Jf=t,null}function yE(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(mw()){case xv:return 1;case cE:return 4;case Qf:case gw:return 16;case fE:return 536870912;default:return 16}default:return 16}}var Ps=null,Tv=null,Rf=null;function xE(){if(Rf)return Rf;var t,e=Tv,n=e.length,i,r="value"in Ps?Ps.value:Ps.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var l=n-t;for(i=1;i<=l&&e[n-i]===r[s-i];i++);return Rf=r.slice(t,1<i?1-i:void 0)}function Pf(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Bc(){return!0}function py(){return!1}function Ni(t){function e(n,i,r,s,l){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=l,this.currentTarget=null;for(var u in t)t.hasOwnProperty(u)&&(n=t[u],this[u]=n?n(s):s[u]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Bc:py,this.isPropagationStopped=py,this}return tn(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Bc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Bc)},persist:function(){},isPersistent:Bc}),e}var el={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wv=Ni(el),Au=tn({},el,{view:0,detail:0}),Pw=Ni(Au),up,cp,Cl,wd=tn({},Au,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Av,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Cl&&(Cl&&t.type==="mousemove"?(up=t.screenX-Cl.screenX,cp=t.screenY-Cl.screenY):cp=up=0,Cl=t),up)},movementY:function(t){return"movementY"in t?t.movementY:cp}}),my=Ni(wd),Dw=tn({},wd,{dataTransfer:0}),Lw=Ni(Dw),Nw=tn({},Au,{relatedTarget:0}),fp=Ni(Nw),Iw=tn({},el,{animationName:0,elapsedTime:0,pseudoElement:0}),Uw=Ni(Iw),bw=tn({},el,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Fw=Ni(bw),Ow=tn({},el,{data:0}),gy=Ni(Ow),kw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Bw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Hw(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Bw[t])?!!e[t]:!1}function Av(){return Hw}var Vw=tn({},Au,{key:function(t){if(t.key){var e=kw[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Pf(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?zw[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Av,charCode:function(t){return t.type==="keypress"?Pf(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Pf(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Gw=Ni(Vw),Ww=tn({},wd,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vy=Ni(Ww),Xw=tn({},Au,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Av}),jw=Ni(Xw),Yw=tn({},el,{propertyName:0,elapsedTime:0,pseudoElement:0}),qw=Ni(Yw),Kw=tn({},wd,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Qw=Ni(Kw),Zw=[9,13,27,32],Cv=Zr&&"CompositionEvent"in window,ql=null;Zr&&"documentMode"in document&&(ql=document.documentMode);var $w=Zr&&"TextEvent"in window&&!ql,SE=Zr&&(!Cv||ql&&8<ql&&11>=ql),_y=String.fromCharCode(32),yy=!1;function EE(t,e){switch(t){case"keyup":return Zw.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ME(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ga=!1;function Jw(t,e){switch(t){case"compositionend":return ME(e);case"keypress":return e.which!==32?null:(yy=!0,_y);case"textInput":return t=e.data,t===_y&&yy?null:t;default:return null}}function eA(t,e){if(ga)return t==="compositionend"||!Cv&&EE(t,e)?(t=xE(),Rf=Tv=Ps=null,ga=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return SE&&e.locale!=="ko"?null:e.data;default:return null}}var tA={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xy(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!tA[t.type]:e==="textarea"}function TE(t,e,n,i){tE(i),e=ed(e,"onChange"),0<e.length&&(n=new wv("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Kl=null,uu=null;function nA(t){bE(t,0)}function Ad(t){var e=ya(t);if(qS(e))return t}function iA(t,e){if(t==="change")return e}var wE=!1;if(Zr){var dp;if(Zr){var hp="oninput"in document;if(!hp){var Sy=document.createElement("div");Sy.setAttribute("oninput","return;"),hp=typeof Sy.oninput=="function"}dp=hp}else dp=!1;wE=dp&&(!document.documentMode||9<document.documentMode)}function Ey(){Kl&&(Kl.detachEvent("onpropertychange",AE),uu=Kl=null)}function AE(t){if(t.propertyName==="value"&&Ad(uu)){var e=[];TE(e,uu,t,yv(t)),sE(nA,e)}}function rA(t,e,n){t==="focusin"?(Ey(),Kl=e,uu=n,Kl.attachEvent("onpropertychange",AE)):t==="focusout"&&Ey()}function sA(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ad(uu)}function oA(t,e){if(t==="click")return Ad(e)}function aA(t,e){if(t==="input"||t==="change")return Ad(e)}function lA(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var cr=typeof Object.is=="function"?Object.is:lA;function cu(t,e){if(cr(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Em.call(e,r)||!cr(t[r],e[r]))return!1}return!0}function My(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ty(t,e){var n=My(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=My(n)}}function CE(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?CE(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function RE(){for(var t=window,e=Yf();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Yf(t.document)}return e}function Rv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function uA(t){var e=RE(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&CE(n.ownerDocument.documentElement,n)){if(i!==null&&Rv(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Ty(n,s);var l=Ty(n,i);r&&l&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==l.node||t.focusOffset!==l.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(l.node,l.offset)):(e.setEnd(l.node,l.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var cA=Zr&&"documentMode"in document&&11>=document.documentMode,va=null,Hm=null,Ql=null,Vm=!1;function wy(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Vm||va==null||va!==Yf(i)||(i=va,"selectionStart"in i&&Rv(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ql&&cu(Ql,i)||(Ql=i,i=ed(Hm,"onSelect"),0<i.length&&(e=new wv("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=va)))}function Hc(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var _a={animationend:Hc("Animation","AnimationEnd"),animationiteration:Hc("Animation","AnimationIteration"),animationstart:Hc("Animation","AnimationStart"),transitionend:Hc("Transition","TransitionEnd")},pp={},PE={};Zr&&(PE=document.createElement("div").style,"AnimationEvent"in window||(delete _a.animationend.animation,delete _a.animationiteration.animation,delete _a.animationstart.animation),"TransitionEvent"in window||delete _a.transitionend.transition);function Cd(t){if(pp[t])return pp[t];if(!_a[t])return t;var e=_a[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in PE)return pp[t]=e[n];return t}var DE=Cd("animationend"),LE=Cd("animationiteration"),NE=Cd("animationstart"),IE=Cd("transitionend"),UE=new Map,Ay="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Gs(t,e){UE.set(t,e),Po(e,[t])}for(var mp=0;mp<Ay.length;mp++){var gp=Ay[mp],fA=gp.toLowerCase(),dA=gp[0].toUpperCase()+gp.slice(1);Gs(fA,"on"+dA)}Gs(DE,"onAnimationEnd");Gs(LE,"onAnimationIteration");Gs(NE,"onAnimationStart");Gs("dblclick","onDoubleClick");Gs("focusin","onFocus");Gs("focusout","onBlur");Gs(IE,"onTransitionEnd");ka("onMouseEnter",["mouseout","mouseover"]);ka("onMouseLeave",["mouseout","mouseover"]);ka("onPointerEnter",["pointerout","pointerover"]);ka("onPointerLeave",["pointerout","pointerover"]);Po("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Po("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Po("onBeforeInput",["compositionend","keypress","textInput","paste"]);Po("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Po("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Po("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Gl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hA=new Set("cancel close invalid load scroll toggle".split(" ").concat(Gl));function Cy(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,fw(i,e,void 0,t),t.currentTarget=null}function bE(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var l=i.length-1;0<=l;l--){var u=i[l],f=u.instance,d=u.currentTarget;if(u=u.listener,f!==s&&r.isPropagationStopped())break e;Cy(r,u,d),s=f}else for(l=0;l<i.length;l++){if(u=i[l],f=u.instance,d=u.currentTarget,u=u.listener,f!==s&&r.isPropagationStopped())break e;Cy(r,u,d),s=f}}}if(Kf)throw t=Om,Kf=!1,Om=null,t}function jt(t,e){var n=e[Ym];n===void 0&&(n=e[Ym]=new Set);var i=t+"__bubble";n.has(i)||(FE(e,t,2,!1),n.add(i))}function vp(t,e,n){var i=0;e&&(i|=4),FE(n,t,i,e)}var Vc="_reactListening"+Math.random().toString(36).slice(2);function fu(t){if(!t[Vc]){t[Vc]=!0,GS.forEach(function(n){n!=="selectionchange"&&(hA.has(n)||vp(n,!1,t),vp(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Vc]||(e[Vc]=!0,vp("selectionchange",!1,e))}}function FE(t,e,n,i){switch(yE(e)){case 1:var r=Cw;break;case 4:r=Rw;break;default:r=Mv}n=r.bind(null,e,n,t),r=void 0,!Fm||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function _p(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var l=i.tag;if(l===3||l===4){var u=i.stateNode.containerInfo;if(u===r||u.nodeType===8&&u.parentNode===r)break;if(l===4)for(l=i.return;l!==null;){var f=l.tag;if((f===3||f===4)&&(f=l.stateNode.containerInfo,f===r||f.nodeType===8&&f.parentNode===r))return;l=l.return}for(;u!==null;){if(l=go(u),l===null)return;if(f=l.tag,f===5||f===6){i=s=l;continue e}u=u.parentNode}}i=i.return}sE(function(){var d=s,h=yv(n),m=[];e:{var v=UE.get(t);if(v!==void 0){var _=wv,x=t;switch(t){case"keypress":if(Pf(n)===0)break e;case"keydown":case"keyup":_=Gw;break;case"focusin":x="focus",_=fp;break;case"focusout":x="blur",_=fp;break;case"beforeblur":case"afterblur":_=fp;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=my;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=Lw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=jw;break;case DE:case LE:case NE:_=Uw;break;case IE:_=qw;break;case"scroll":_=Pw;break;case"wheel":_=Qw;break;case"copy":case"cut":case"paste":_=Fw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=vy}var w=(e&4)!==0,E=!w&&t==="scroll",g=w?v!==null?v+"Capture":null:v;w=[];for(var S=d,M;S!==null;){M=S;var A=M.stateNode;if(M.tag===5&&A!==null&&(M=A,g!==null&&(A=su(S,g),A!=null&&w.push(du(S,A,M)))),E)break;S=S.return}0<w.length&&(v=new _(v,x,null,n,h),m.push({event:v,listeners:w}))}}if(!(e&7)){e:{if(v=t==="mouseover"||t==="pointerover",_=t==="mouseout"||t==="pointerout",v&&n!==Um&&(x=n.relatedTarget||n.fromElement)&&(go(x)||x[$r]))break e;if((_||v)&&(v=h.window===h?h:(v=h.ownerDocument)?v.defaultView||v.parentWindow:window,_?(x=n.relatedTarget||n.toElement,_=d,x=x?go(x):null,x!==null&&(E=Do(x),x!==E||x.tag!==5&&x.tag!==6)&&(x=null)):(_=null,x=d),_!==x)){if(w=my,A="onMouseLeave",g="onMouseEnter",S="mouse",(t==="pointerout"||t==="pointerover")&&(w=vy,A="onPointerLeave",g="onPointerEnter",S="pointer"),E=_==null?v:ya(_),M=x==null?v:ya(x),v=new w(A,S+"leave",_,n,h),v.target=E,v.relatedTarget=M,A=null,go(h)===d&&(w=new w(g,S+"enter",x,n,h),w.target=M,w.relatedTarget=E,A=w),E=A,_&&x)t:{for(w=_,g=x,S=0,M=w;M;M=jo(M))S++;for(M=0,A=g;A;A=jo(A))M++;for(;0<S-M;)w=jo(w),S--;for(;0<M-S;)g=jo(g),M--;for(;S--;){if(w===g||g!==null&&w===g.alternate)break t;w=jo(w),g=jo(g)}w=null}else w=null;_!==null&&Ry(m,v,_,w,!1),x!==null&&E!==null&&Ry(m,E,x,w,!0)}}e:{if(v=d?ya(d):window,_=v.nodeName&&v.nodeName.toLowerCase(),_==="select"||_==="input"&&v.type==="file")var I=iA;else if(xy(v))if(wE)I=aA;else{I=sA;var N=rA}else(_=v.nodeName)&&_.toLowerCase()==="input"&&(v.type==="checkbox"||v.type==="radio")&&(I=oA);if(I&&(I=I(t,d))){TE(m,I,n,h);break e}N&&N(t,v,d),t==="focusout"&&(N=v._wrapperState)&&N.controlled&&v.type==="number"&&Pm(v,"number",v.value)}switch(N=d?ya(d):window,t){case"focusin":(xy(N)||N.contentEditable==="true")&&(va=N,Hm=d,Ql=null);break;case"focusout":Ql=Hm=va=null;break;case"mousedown":Vm=!0;break;case"contextmenu":case"mouseup":case"dragend":Vm=!1,wy(m,n,h);break;case"selectionchange":if(cA)break;case"keydown":case"keyup":wy(m,n,h)}var L;if(Cv)e:{switch(t){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else ga?EE(t,n)&&(O="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(SE&&n.locale!=="ko"&&(ga||O!=="onCompositionStart"?O==="onCompositionEnd"&&ga&&(L=xE()):(Ps=h,Tv="value"in Ps?Ps.value:Ps.textContent,ga=!0)),N=ed(d,O),0<N.length&&(O=new gy(O,t,null,n,h),m.push({event:O,listeners:N}),L?O.data=L:(L=ME(n),L!==null&&(O.data=L)))),(L=$w?Jw(t,n):eA(t,n))&&(d=ed(d,"onBeforeInput"),0<d.length&&(h=new gy("onBeforeInput","beforeinput",null,n,h),m.push({event:h,listeners:d}),h.data=L))}bE(m,e)})}function du(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ed(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=su(t,n),s!=null&&i.unshift(du(t,s,r)),s=su(t,e),s!=null&&i.push(du(t,s,r))),t=t.return}return i}function jo(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Ry(t,e,n,i,r){for(var s=e._reactName,l=[];n!==null&&n!==i;){var u=n,f=u.alternate,d=u.stateNode;if(f!==null&&f===i)break;u.tag===5&&d!==null&&(u=d,r?(f=su(n,s),f!=null&&l.unshift(du(n,f,u))):r||(f=su(n,s),f!=null&&l.push(du(n,f,u)))),n=n.return}l.length!==0&&t.push({event:e,listeners:l})}var pA=/\r\n?/g,mA=/\u0000|\uFFFD/g;function Py(t){return(typeof t=="string"?t:""+t).replace(pA,`
`).replace(mA,"")}function Gc(t,e,n){if(e=Py(e),Py(t)!==e&&n)throw Error(ve(425))}function td(){}var Gm=null,Wm=null;function Xm(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var jm=typeof setTimeout=="function"?setTimeout:void 0,gA=typeof clearTimeout=="function"?clearTimeout:void 0,Dy=typeof Promise=="function"?Promise:void 0,vA=typeof queueMicrotask=="function"?queueMicrotask:typeof Dy<"u"?function(t){return Dy.resolve(null).then(t).catch(_A)}:jm;function _A(t){setTimeout(function(){throw t})}function yp(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),lu(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);lu(e)}function Us(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Ly(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var tl=Math.random().toString(36).slice(2),Tr="__reactFiber$"+tl,hu="__reactProps$"+tl,$r="__reactContainer$"+tl,Ym="__reactEvents$"+tl,yA="__reactListeners$"+tl,xA="__reactHandles$"+tl;function go(t){var e=t[Tr];if(e)return e;for(var n=t.parentNode;n;){if(e=n[$r]||n[Tr]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Ly(t);t!==null;){if(n=t[Tr])return n;t=Ly(t)}return e}t=n,n=t.parentNode}return null}function Cu(t){return t=t[Tr]||t[$r],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ya(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ve(33))}function Rd(t){return t[hu]||null}var qm=[],xa=-1;function Ws(t){return{current:t}}function Yt(t){0>xa||(t.current=qm[xa],qm[xa]=null,xa--)}function Xt(t,e){xa++,qm[xa]=t.current,t.current=e}var Bs={},jn=Ws(Bs),pi=Ws(!1),To=Bs;function za(t,e){var n=t.type.contextTypes;if(!n)return Bs;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function mi(t){return t=t.childContextTypes,t!=null}function nd(){Yt(pi),Yt(jn)}function Ny(t,e,n){if(jn.current!==Bs)throw Error(ve(168));Xt(jn,e),Xt(pi,n)}function OE(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ve(108,rw(t)||"Unknown",r));return tn({},n,i)}function id(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Bs,To=jn.current,Xt(jn,t),Xt(pi,pi.current),!0}function Iy(t,e,n){var i=t.stateNode;if(!i)throw Error(ve(169));n?(t=OE(t,e,To),i.__reactInternalMemoizedMergedChildContext=t,Yt(pi),Yt(jn),Xt(jn,t)):Yt(pi),Xt(pi,n)}var Wr=null,Pd=!1,xp=!1;function kE(t){Wr===null?Wr=[t]:Wr.push(t)}function SA(t){Pd=!0,kE(t)}function Xs(){if(!xp&&Wr!==null){xp=!0;var t=0,e=kt;try{var n=Wr;for(kt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Wr=null,Pd=!1}catch(r){throw Wr!==null&&(Wr=Wr.slice(t+1)),uE(xv,Xs),r}finally{kt=e,xp=!1}}return null}var Sa=[],Ea=0,rd=null,sd=0,Gi=[],Wi=0,wo=null,Xr=1,jr="";function uo(t,e){Sa[Ea++]=sd,Sa[Ea++]=rd,rd=t,sd=e}function zE(t,e,n){Gi[Wi++]=Xr,Gi[Wi++]=jr,Gi[Wi++]=wo,wo=t;var i=Xr;t=jr;var r=32-lr(i)-1;i&=~(1<<r),n+=1;var s=32-lr(e)+r;if(30<s){var l=r-r%5;s=(i&(1<<l)-1).toString(32),i>>=l,r-=l,Xr=1<<32-lr(e)+r|n<<r|i,jr=s+t}else Xr=1<<s|n<<r|i,jr=t}function Pv(t){t.return!==null&&(uo(t,1),zE(t,1,0))}function Dv(t){for(;t===rd;)rd=Sa[--Ea],Sa[Ea]=null,sd=Sa[--Ea],Sa[Ea]=null;for(;t===wo;)wo=Gi[--Wi],Gi[Wi]=null,jr=Gi[--Wi],Gi[Wi]=null,Xr=Gi[--Wi],Gi[Wi]=null}var Pi=null,Ci=null,Qt=!1,sr=null;function BE(t,e){var n=Xi(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Uy(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Pi=t,Ci=Us(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Pi=t,Ci=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=wo!==null?{id:Xr,overflow:jr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Xi(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Pi=t,Ci=null,!0):!1;default:return!1}}function Km(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Qm(t){if(Qt){var e=Ci;if(e){var n=e;if(!Uy(t,e)){if(Km(t))throw Error(ve(418));e=Us(n.nextSibling);var i=Pi;e&&Uy(t,e)?BE(i,n):(t.flags=t.flags&-4097|2,Qt=!1,Pi=t)}}else{if(Km(t))throw Error(ve(418));t.flags=t.flags&-4097|2,Qt=!1,Pi=t}}}function by(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Pi=t}function Wc(t){if(t!==Pi)return!1;if(!Qt)return by(t),Qt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Xm(t.type,t.memoizedProps)),e&&(e=Ci)){if(Km(t))throw HE(),Error(ve(418));for(;e;)BE(t,e),e=Us(e.nextSibling)}if(by(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ve(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ci=Us(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ci=null}}else Ci=Pi?Us(t.stateNode.nextSibling):null;return!0}function HE(){for(var t=Ci;t;)t=Us(t.nextSibling)}function Ba(){Ci=Pi=null,Qt=!1}function Lv(t){sr===null?sr=[t]:sr.push(t)}var EA=is.ReactCurrentBatchConfig;function Rl(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ve(309));var i=n.stateNode}if(!i)throw Error(ve(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(l){var u=r.refs;l===null?delete u[s]:u[s]=l},e._stringRef=s,e)}if(typeof t!="string")throw Error(ve(284));if(!n._owner)throw Error(ve(290,t))}return t}function Xc(t,e){throw t=Object.prototype.toString.call(e),Error(ve(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Fy(t){var e=t._init;return e(t._payload)}function VE(t){function e(g,S){if(t){var M=g.deletions;M===null?(g.deletions=[S],g.flags|=16):M.push(S)}}function n(g,S){if(!t)return null;for(;S!==null;)e(g,S),S=S.sibling;return null}function i(g,S){for(g=new Map;S!==null;)S.key!==null?g.set(S.key,S):g.set(S.index,S),S=S.sibling;return g}function r(g,S){return g=ks(g,S),g.index=0,g.sibling=null,g}function s(g,S,M){return g.index=M,t?(M=g.alternate,M!==null?(M=M.index,M<S?(g.flags|=2,S):M):(g.flags|=2,S)):(g.flags|=1048576,S)}function l(g){return t&&g.alternate===null&&(g.flags|=2),g}function u(g,S,M,A){return S===null||S.tag!==6?(S=Cp(M,g.mode,A),S.return=g,S):(S=r(S,M),S.return=g,S)}function f(g,S,M,A){var I=M.type;return I===ma?h(g,S,M.props.children,A,M.key):S!==null&&(S.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===ws&&Fy(I)===S.type)?(A=r(S,M.props),A.ref=Rl(g,S,M),A.return=g,A):(A=Ff(M.type,M.key,M.props,null,g.mode,A),A.ref=Rl(g,S,M),A.return=g,A)}function d(g,S,M,A){return S===null||S.tag!==4||S.stateNode.containerInfo!==M.containerInfo||S.stateNode.implementation!==M.implementation?(S=Rp(M,g.mode,A),S.return=g,S):(S=r(S,M.children||[]),S.return=g,S)}function h(g,S,M,A,I){return S===null||S.tag!==7?(S=Mo(M,g.mode,A,I),S.return=g,S):(S=r(S,M),S.return=g,S)}function m(g,S,M){if(typeof S=="string"&&S!==""||typeof S=="number")return S=Cp(""+S,g.mode,M),S.return=g,S;if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Uc:return M=Ff(S.type,S.key,S.props,null,g.mode,M),M.ref=Rl(g,null,S),M.return=g,M;case pa:return S=Rp(S,g.mode,M),S.return=g,S;case ws:var A=S._init;return m(g,A(S._payload),M)}if(Hl(S)||Ml(S))return S=Mo(S,g.mode,M,null),S.return=g,S;Xc(g,S)}return null}function v(g,S,M,A){var I=S!==null?S.key:null;if(typeof M=="string"&&M!==""||typeof M=="number")return I!==null?null:u(g,S,""+M,A);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case Uc:return M.key===I?f(g,S,M,A):null;case pa:return M.key===I?d(g,S,M,A):null;case ws:return I=M._init,v(g,S,I(M._payload),A)}if(Hl(M)||Ml(M))return I!==null?null:h(g,S,M,A,null);Xc(g,M)}return null}function _(g,S,M,A,I){if(typeof A=="string"&&A!==""||typeof A=="number")return g=g.get(M)||null,u(S,g,""+A,I);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case Uc:return g=g.get(A.key===null?M:A.key)||null,f(S,g,A,I);case pa:return g=g.get(A.key===null?M:A.key)||null,d(S,g,A,I);case ws:var N=A._init;return _(g,S,M,N(A._payload),I)}if(Hl(A)||Ml(A))return g=g.get(M)||null,h(S,g,A,I,null);Xc(S,A)}return null}function x(g,S,M,A){for(var I=null,N=null,L=S,O=S=0,P=null;L!==null&&O<M.length;O++){L.index>O?(P=L,L=null):P=L.sibling;var C=v(g,L,M[O],A);if(C===null){L===null&&(L=P);break}t&&L&&C.alternate===null&&e(g,L),S=s(C,S,O),N===null?I=C:N.sibling=C,N=C,L=P}if(O===M.length)return n(g,L),Qt&&uo(g,O),I;if(L===null){for(;O<M.length;O++)L=m(g,M[O],A),L!==null&&(S=s(L,S,O),N===null?I=L:N.sibling=L,N=L);return Qt&&uo(g,O),I}for(L=i(g,L);O<M.length;O++)P=_(L,g,O,M[O],A),P!==null&&(t&&P.alternate!==null&&L.delete(P.key===null?O:P.key),S=s(P,S,O),N===null?I=P:N.sibling=P,N=P);return t&&L.forEach(function(U){return e(g,U)}),Qt&&uo(g,O),I}function w(g,S,M,A){var I=Ml(M);if(typeof I!="function")throw Error(ve(150));if(M=I.call(M),M==null)throw Error(ve(151));for(var N=I=null,L=S,O=S=0,P=null,C=M.next();L!==null&&!C.done;O++,C=M.next()){L.index>O?(P=L,L=null):P=L.sibling;var U=v(g,L,C.value,A);if(U===null){L===null&&(L=P);break}t&&L&&U.alternate===null&&e(g,L),S=s(U,S,O),N===null?I=U:N.sibling=U,N=U,L=P}if(C.done)return n(g,L),Qt&&uo(g,O),I;if(L===null){for(;!C.done;O++,C=M.next())C=m(g,C.value,A),C!==null&&(S=s(C,S,O),N===null?I=C:N.sibling=C,N=C);return Qt&&uo(g,O),I}for(L=i(g,L);!C.done;O++,C=M.next())C=_(L,g,O,C.value,A),C!==null&&(t&&C.alternate!==null&&L.delete(C.key===null?O:C.key),S=s(C,S,O),N===null?I=C:N.sibling=C,N=C);return t&&L.forEach(function(K){return e(g,K)}),Qt&&uo(g,O),I}function E(g,S,M,A){if(typeof M=="object"&&M!==null&&M.type===ma&&M.key===null&&(M=M.props.children),typeof M=="object"&&M!==null){switch(M.$$typeof){case Uc:e:{for(var I=M.key,N=S;N!==null;){if(N.key===I){if(I=M.type,I===ma){if(N.tag===7){n(g,N.sibling),S=r(N,M.props.children),S.return=g,g=S;break e}}else if(N.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===ws&&Fy(I)===N.type){n(g,N.sibling),S=r(N,M.props),S.ref=Rl(g,N,M),S.return=g,g=S;break e}n(g,N);break}else e(g,N);N=N.sibling}M.type===ma?(S=Mo(M.props.children,g.mode,A,M.key),S.return=g,g=S):(A=Ff(M.type,M.key,M.props,null,g.mode,A),A.ref=Rl(g,S,M),A.return=g,g=A)}return l(g);case pa:e:{for(N=M.key;S!==null;){if(S.key===N)if(S.tag===4&&S.stateNode.containerInfo===M.containerInfo&&S.stateNode.implementation===M.implementation){n(g,S.sibling),S=r(S,M.children||[]),S.return=g,g=S;break e}else{n(g,S);break}else e(g,S);S=S.sibling}S=Rp(M,g.mode,A),S.return=g,g=S}return l(g);case ws:return N=M._init,E(g,S,N(M._payload),A)}if(Hl(M))return x(g,S,M,A);if(Ml(M))return w(g,S,M,A);Xc(g,M)}return typeof M=="string"&&M!==""||typeof M=="number"?(M=""+M,S!==null&&S.tag===6?(n(g,S.sibling),S=r(S,M),S.return=g,g=S):(n(g,S),S=Cp(M,g.mode,A),S.return=g,g=S),l(g)):n(g,S)}return E}var Ha=VE(!0),GE=VE(!1),od=Ws(null),ad=null,Ma=null,Nv=null;function Iv(){Nv=Ma=ad=null}function Uv(t){var e=od.current;Yt(od),t._currentValue=e}function Zm(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Na(t,e){ad=t,Nv=Ma=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(di=!0),t.firstContext=null)}function qi(t){var e=t._currentValue;if(Nv!==t)if(t={context:t,memoizedValue:e,next:null},Ma===null){if(ad===null)throw Error(ve(308));Ma=t,ad.dependencies={lanes:0,firstContext:t}}else Ma=Ma.next=t;return e}var vo=null;function bv(t){vo===null?vo=[t]:vo.push(t)}function WE(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,bv(e)):(n.next=r.next,r.next=n),e.interleaved=n,Jr(t,i)}function Jr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var As=!1;function Fv(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function XE(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function qr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function bs(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Pt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Jr(t,n)}return r=i.interleaved,r===null?(e.next=e,bv(i)):(e.next=r.next,r.next=e),i.interleaved=e,Jr(t,n)}function Df(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Sv(t,n)}}function Oy(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=l:s=s.next=l,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ld(t,e,n,i){var r=t.updateQueue;As=!1;var s=r.firstBaseUpdate,l=r.lastBaseUpdate,u=r.shared.pending;if(u!==null){r.shared.pending=null;var f=u,d=f.next;f.next=null,l===null?s=d:l.next=d,l=f;var h=t.alternate;h!==null&&(h=h.updateQueue,u=h.lastBaseUpdate,u!==l&&(u===null?h.firstBaseUpdate=d:u.next=d,h.lastBaseUpdate=f))}if(s!==null){var m=r.baseState;l=0,h=d=f=null,u=s;do{var v=u.lane,_=u.eventTime;if((i&v)===v){h!==null&&(h=h.next={eventTime:_,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var x=t,w=u;switch(v=e,_=n,w.tag){case 1:if(x=w.payload,typeof x=="function"){m=x.call(_,m,v);break e}m=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=w.payload,v=typeof x=="function"?x.call(_,m,v):x,v==null)break e;m=tn({},m,v);break e;case 2:As=!0}}u.callback!==null&&u.lane!==0&&(t.flags|=64,v=r.effects,v===null?r.effects=[u]:v.push(u))}else _={eventTime:_,lane:v,tag:u.tag,payload:u.payload,callback:u.callback,next:null},h===null?(d=h=_,f=m):h=h.next=_,l|=v;if(u=u.next,u===null){if(u=r.shared.pending,u===null)break;v=u,u=v.next,v.next=null,r.lastBaseUpdate=v,r.shared.pending=null}}while(1);if(h===null&&(f=m),r.baseState=f,r.firstBaseUpdate=d,r.lastBaseUpdate=h,e=r.shared.interleaved,e!==null){r=e;do l|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Co|=l,t.lanes=l,t.memoizedState=m}}function ky(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ve(191,r));r.call(i)}}}var Ru={},Rr=Ws(Ru),pu=Ws(Ru),mu=Ws(Ru);function _o(t){if(t===Ru)throw Error(ve(174));return t}function Ov(t,e){switch(Xt(mu,e),Xt(pu,t),Xt(Rr,Ru),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Lm(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Lm(e,t)}Yt(Rr),Xt(Rr,e)}function Va(){Yt(Rr),Yt(pu),Yt(mu)}function jE(t){_o(mu.current);var e=_o(Rr.current),n=Lm(e,t.type);e!==n&&(Xt(pu,t),Xt(Rr,n))}function kv(t){pu.current===t&&(Yt(Rr),Yt(pu))}var $t=Ws(0);function ud(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Sp=[];function zv(){for(var t=0;t<Sp.length;t++)Sp[t]._workInProgressVersionPrimary=null;Sp.length=0}var Lf=is.ReactCurrentDispatcher,Ep=is.ReactCurrentBatchConfig,Ao=0,en=null,mn=null,wn=null,cd=!1,Zl=!1,gu=0,MA=0;function Hn(){throw Error(ve(321))}function Bv(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!cr(t[n],e[n]))return!1;return!0}function Hv(t,e,n,i,r,s){if(Ao=s,en=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Lf.current=t===null||t.memoizedState===null?CA:RA,t=n(i,r),Zl){s=0;do{if(Zl=!1,gu=0,25<=s)throw Error(ve(301));s+=1,wn=mn=null,e.updateQueue=null,Lf.current=PA,t=n(i,r)}while(Zl)}if(Lf.current=fd,e=mn!==null&&mn.next!==null,Ao=0,wn=mn=en=null,cd=!1,e)throw Error(ve(300));return t}function Vv(){var t=gu!==0;return gu=0,t}function Sr(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return wn===null?en.memoizedState=wn=t:wn=wn.next=t,wn}function Ki(){if(mn===null){var t=en.alternate;t=t!==null?t.memoizedState:null}else t=mn.next;var e=wn===null?en.memoizedState:wn.next;if(e!==null)wn=e,mn=t;else{if(t===null)throw Error(ve(310));mn=t,t={memoizedState:mn.memoizedState,baseState:mn.baseState,baseQueue:mn.baseQueue,queue:mn.queue,next:null},wn===null?en.memoizedState=wn=t:wn=wn.next=t}return wn}function vu(t,e){return typeof e=="function"?e(t):e}function Mp(t){var e=Ki(),n=e.queue;if(n===null)throw Error(ve(311));n.lastRenderedReducer=t;var i=mn,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var l=r.next;r.next=s.next,s.next=l}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var u=l=null,f=null,d=s;do{var h=d.lane;if((Ao&h)===h)f!==null&&(f=f.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),i=d.hasEagerState?d.eagerState:t(i,d.action);else{var m={lane:h,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};f===null?(u=f=m,l=i):f=f.next=m,en.lanes|=h,Co|=h}d=d.next}while(d!==null&&d!==s);f===null?l=i:f.next=u,cr(i,e.memoizedState)||(di=!0),e.memoizedState=i,e.baseState=l,e.baseQueue=f,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,en.lanes|=s,Co|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Tp(t){var e=Ki(),n=e.queue;if(n===null)throw Error(ve(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var l=r=r.next;do s=t(s,l.action),l=l.next;while(l!==r);cr(s,e.memoizedState)||(di=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function YE(){}function qE(t,e){var n=en,i=Ki(),r=e(),s=!cr(i.memoizedState,r);if(s&&(i.memoizedState=r,di=!0),i=i.queue,Gv(ZE.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||wn!==null&&wn.memoizedState.tag&1){if(n.flags|=2048,_u(9,QE.bind(null,n,i,r,e),void 0,null),Cn===null)throw Error(ve(349));Ao&30||KE(n,e,r)}return r}function KE(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=en.updateQueue,e===null?(e={lastEffect:null,stores:null},en.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function QE(t,e,n,i){e.value=n,e.getSnapshot=i,$E(e)&&JE(t)}function ZE(t,e,n){return n(function(){$E(e)&&JE(t)})}function $E(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!cr(t,n)}catch{return!0}}function JE(t){var e=Jr(t,1);e!==null&&ur(e,t,1,-1)}function zy(t){var e=Sr();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:vu,lastRenderedState:t},e.queue=t,t=t.dispatch=AA.bind(null,en,t),[e.memoizedState,t]}function _u(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=en.updateQueue,e===null?(e={lastEffect:null,stores:null},en.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function eM(){return Ki().memoizedState}function Nf(t,e,n,i){var r=Sr();en.flags|=t,r.memoizedState=_u(1|e,n,void 0,i===void 0?null:i)}function Dd(t,e,n,i){var r=Ki();i=i===void 0?null:i;var s=void 0;if(mn!==null){var l=mn.memoizedState;if(s=l.destroy,i!==null&&Bv(i,l.deps)){r.memoizedState=_u(e,n,s,i);return}}en.flags|=t,r.memoizedState=_u(1|e,n,s,i)}function By(t,e){return Nf(8390656,8,t,e)}function Gv(t,e){return Dd(2048,8,t,e)}function tM(t,e){return Dd(4,2,t,e)}function nM(t,e){return Dd(4,4,t,e)}function iM(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function rM(t,e,n){return n=n!=null?n.concat([t]):null,Dd(4,4,iM.bind(null,e,t),n)}function Wv(){}function sM(t,e){var n=Ki();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Bv(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function oM(t,e){var n=Ki();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Bv(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function aM(t,e,n){return Ao&21?(cr(n,e)||(n=dE(),en.lanes|=n,Co|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,di=!0),t.memoizedState=n)}function TA(t,e){var n=kt;kt=n!==0&&4>n?n:4,t(!0);var i=Ep.transition;Ep.transition={};try{t(!1),e()}finally{kt=n,Ep.transition=i}}function lM(){return Ki().memoizedState}function wA(t,e,n){var i=Os(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},uM(t))cM(e,n);else if(n=WE(t,e,n,i),n!==null){var r=$n();ur(n,t,i,r),fM(n,e,i)}}function AA(t,e,n){var i=Os(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(uM(t))cM(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var l=e.lastRenderedState,u=s(l,n);if(r.hasEagerState=!0,r.eagerState=u,cr(u,l)){var f=e.interleaved;f===null?(r.next=r,bv(e)):(r.next=f.next,f.next=r),e.interleaved=r;return}}catch{}finally{}n=WE(t,e,r,i),n!==null&&(r=$n(),ur(n,t,i,r),fM(n,e,i))}}function uM(t){var e=t.alternate;return t===en||e!==null&&e===en}function cM(t,e){Zl=cd=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function fM(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Sv(t,n)}}var fd={readContext:qi,useCallback:Hn,useContext:Hn,useEffect:Hn,useImperativeHandle:Hn,useInsertionEffect:Hn,useLayoutEffect:Hn,useMemo:Hn,useReducer:Hn,useRef:Hn,useState:Hn,useDebugValue:Hn,useDeferredValue:Hn,useTransition:Hn,useMutableSource:Hn,useSyncExternalStore:Hn,useId:Hn,unstable_isNewReconciler:!1},CA={readContext:qi,useCallback:function(t,e){return Sr().memoizedState=[t,e===void 0?null:e],t},useContext:qi,useEffect:By,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Nf(4194308,4,iM.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Nf(4194308,4,t,e)},useInsertionEffect:function(t,e){return Nf(4,2,t,e)},useMemo:function(t,e){var n=Sr();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Sr();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=wA.bind(null,en,t),[i.memoizedState,t]},useRef:function(t){var e=Sr();return t={current:t},e.memoizedState=t},useState:zy,useDebugValue:Wv,useDeferredValue:function(t){return Sr().memoizedState=t},useTransition:function(){var t=zy(!1),e=t[0];return t=TA.bind(null,t[1]),Sr().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=en,r=Sr();if(Qt){if(n===void 0)throw Error(ve(407));n=n()}else{if(n=e(),Cn===null)throw Error(ve(349));Ao&30||KE(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,By(ZE.bind(null,i,s,t),[t]),i.flags|=2048,_u(9,QE.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Sr(),e=Cn.identifierPrefix;if(Qt){var n=jr,i=Xr;n=(i&~(1<<32-lr(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=gu++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=MA++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},RA={readContext:qi,useCallback:sM,useContext:qi,useEffect:Gv,useImperativeHandle:rM,useInsertionEffect:tM,useLayoutEffect:nM,useMemo:oM,useReducer:Mp,useRef:eM,useState:function(){return Mp(vu)},useDebugValue:Wv,useDeferredValue:function(t){var e=Ki();return aM(e,mn.memoizedState,t)},useTransition:function(){var t=Mp(vu)[0],e=Ki().memoizedState;return[t,e]},useMutableSource:YE,useSyncExternalStore:qE,useId:lM,unstable_isNewReconciler:!1},PA={readContext:qi,useCallback:sM,useContext:qi,useEffect:Gv,useImperativeHandle:rM,useInsertionEffect:tM,useLayoutEffect:nM,useMemo:oM,useReducer:Tp,useRef:eM,useState:function(){return Tp(vu)},useDebugValue:Wv,useDeferredValue:function(t){var e=Ki();return mn===null?e.memoizedState=t:aM(e,mn.memoizedState,t)},useTransition:function(){var t=Tp(vu)[0],e=Ki().memoizedState;return[t,e]},useMutableSource:YE,useSyncExternalStore:qE,useId:lM,unstable_isNewReconciler:!1};function ir(t,e){if(t&&t.defaultProps){e=tn({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function $m(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:tn({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ld={isMounted:function(t){return(t=t._reactInternals)?Do(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=$n(),r=Os(t),s=qr(i,r);s.payload=e,n!=null&&(s.callback=n),e=bs(t,s,r),e!==null&&(ur(e,t,r,i),Df(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=$n(),r=Os(t),s=qr(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=bs(t,s,r),e!==null&&(ur(e,t,r,i),Df(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=$n(),i=Os(t),r=qr(n,i);r.tag=2,e!=null&&(r.callback=e),e=bs(t,r,i),e!==null&&(ur(e,t,i,n),Df(e,t,i))}};function Hy(t,e,n,i,r,s,l){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,l):e.prototype&&e.prototype.isPureReactComponent?!cu(n,i)||!cu(r,s):!0}function dM(t,e,n){var i=!1,r=Bs,s=e.contextType;return typeof s=="object"&&s!==null?s=qi(s):(r=mi(e)?To:jn.current,i=e.contextTypes,s=(i=i!=null)?za(t,r):Bs),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ld,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Vy(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Ld.enqueueReplaceState(e,e.state,null)}function Jm(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Fv(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=qi(s):(s=mi(e)?To:jn.current,r.context=za(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&($m(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Ld.enqueueReplaceState(r,r.state,null),ld(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ga(t,e){try{var n="",i=e;do n+=iw(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function wp(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function eg(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var DA=typeof WeakMap=="function"?WeakMap:Map;function hM(t,e,n){n=qr(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){hd||(hd=!0,cg=i),eg(t,e)},n}function pM(t,e,n){n=qr(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){eg(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){eg(t,e),typeof i!="function"&&(Fs===null?Fs=new Set([this]):Fs.add(this));var l=e.stack;this.componentDidCatch(e.value,{componentStack:l!==null?l:""})}),n}function Gy(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new DA;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=WA.bind(null,t,e,n),e.then(t,t))}function Wy(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Xy(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=qr(-1,1),e.tag=2,bs(n,e,1))),n.lanes|=1),t)}var LA=is.ReactCurrentOwner,di=!1;function Zn(t,e,n,i){e.child=t===null?GE(e,null,n,i):Ha(e,t.child,n,i)}function jy(t,e,n,i,r){n=n.render;var s=e.ref;return Na(e,r),i=Hv(t,e,n,i,s,r),n=Vv(),t!==null&&!di?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,es(t,e,r)):(Qt&&n&&Pv(e),e.flags|=1,Zn(t,e,i,r),e.child)}function Yy(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!$v(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,mM(t,e,s,i,r)):(t=Ff(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var l=s.memoizedProps;if(n=n.compare,n=n!==null?n:cu,n(l,i)&&t.ref===e.ref)return es(t,e,r)}return e.flags|=1,t=ks(s,i),t.ref=e.ref,t.return=e,e.child=t}function mM(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(cu(s,i)&&t.ref===e.ref)if(di=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(di=!0);else return e.lanes=t.lanes,es(t,e,r)}return tg(t,e,n,i,r)}function gM(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Xt(wa,wi),wi|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Xt(wa,wi),wi|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,Xt(wa,wi),wi|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,Xt(wa,wi),wi|=i;return Zn(t,e,r,n),e.child}function vM(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function tg(t,e,n,i,r){var s=mi(n)?To:jn.current;return s=za(e,s),Na(e,r),n=Hv(t,e,n,i,s,r),i=Vv(),t!==null&&!di?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,es(t,e,r)):(Qt&&i&&Pv(e),e.flags|=1,Zn(t,e,n,r),e.child)}function qy(t,e,n,i,r){if(mi(n)){var s=!0;id(e)}else s=!1;if(Na(e,r),e.stateNode===null)If(t,e),dM(e,n,i),Jm(e,n,i,r),i=!0;else if(t===null){var l=e.stateNode,u=e.memoizedProps;l.props=u;var f=l.context,d=n.contextType;typeof d=="object"&&d!==null?d=qi(d):(d=mi(n)?To:jn.current,d=za(e,d));var h=n.getDerivedStateFromProps,m=typeof h=="function"||typeof l.getSnapshotBeforeUpdate=="function";m||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u!==i||f!==d)&&Vy(e,l,i,d),As=!1;var v=e.memoizedState;l.state=v,ld(e,i,l,r),f=e.memoizedState,u!==i||v!==f||pi.current||As?(typeof h=="function"&&($m(e,n,h,i),f=e.memoizedState),(u=As||Hy(e,n,u,i,v,f,d))?(m||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(e.flags|=4194308)):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=f),l.props=i,l.state=f,l.context=d,i=u):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{l=e.stateNode,XE(t,e),u=e.memoizedProps,d=e.type===e.elementType?u:ir(e.type,u),l.props=d,m=e.pendingProps,v=l.context,f=n.contextType,typeof f=="object"&&f!==null?f=qi(f):(f=mi(n)?To:jn.current,f=za(e,f));var _=n.getDerivedStateFromProps;(h=typeof _=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u!==m||v!==f)&&Vy(e,l,i,f),As=!1,v=e.memoizedState,l.state=v,ld(e,i,l,r);var x=e.memoizedState;u!==m||v!==x||pi.current||As?(typeof _=="function"&&($m(e,n,_,i),x=e.memoizedState),(d=As||Hy(e,n,d,i,v,x,f)||!1)?(h||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(i,x,f),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(i,x,f)),typeof l.componentDidUpdate=="function"&&(e.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof l.componentDidUpdate!="function"||u===t.memoizedProps&&v===t.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&v===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),l.props=i,l.state=x,l.context=f,i=d):(typeof l.componentDidUpdate!="function"||u===t.memoizedProps&&v===t.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&v===t.memoizedState||(e.flags|=1024),i=!1)}return ng(t,e,n,i,s,r)}function ng(t,e,n,i,r,s){vM(t,e);var l=(e.flags&128)!==0;if(!i&&!l)return r&&Iy(e,n,!1),es(t,e,s);i=e.stateNode,LA.current=e;var u=l&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&l?(e.child=Ha(e,t.child,null,s),e.child=Ha(e,null,u,s)):Zn(t,e,u,s),e.memoizedState=i.state,r&&Iy(e,n,!0),e.child}function _M(t){var e=t.stateNode;e.pendingContext?Ny(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Ny(t,e.context,!1),Ov(t,e.containerInfo)}function Ky(t,e,n,i,r){return Ba(),Lv(r),e.flags|=256,Zn(t,e,n,i),e.child}var ig={dehydrated:null,treeContext:null,retryLane:0};function rg(t){return{baseLanes:t,cachePool:null,transitions:null}}function yM(t,e,n){var i=e.pendingProps,r=$t.current,s=!1,l=(e.flags&128)!==0,u;if((u=l)||(u=t!==null&&t.memoizedState===null?!1:(r&2)!==0),u?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),Xt($t,r&1),t===null)return Qm(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(l=i.children,t=i.fallback,s?(i=e.mode,s=e.child,l={mode:"hidden",children:l},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=l):s=Ud(l,i,0,null),t=Mo(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=rg(n),e.memoizedState=ig,t):Xv(e,l));if(r=t.memoizedState,r!==null&&(u=r.dehydrated,u!==null))return NA(t,e,l,i,u,r,n);if(s){s=i.fallback,l=e.mode,r=t.child,u=r.sibling;var f={mode:"hidden",children:i.children};return!(l&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=f,e.deletions=null):(i=ks(r,f),i.subtreeFlags=r.subtreeFlags&14680064),u!==null?s=ks(u,s):(s=Mo(s,l,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,l=t.child.memoizedState,l=l===null?rg(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},s.memoizedState=l,s.childLanes=t.childLanes&~n,e.memoizedState=ig,i}return s=t.child,t=s.sibling,i=ks(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Xv(t,e){return e=Ud({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function jc(t,e,n,i){return i!==null&&Lv(i),Ha(e,t.child,null,n),t=Xv(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function NA(t,e,n,i,r,s,l){if(n)return e.flags&256?(e.flags&=-257,i=wp(Error(ve(422))),jc(t,e,l,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Ud({mode:"visible",children:i.children},r,0,null),s=Mo(s,r,l,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Ha(e,t.child,null,l),e.child.memoizedState=rg(l),e.memoizedState=ig,s);if(!(e.mode&1))return jc(t,e,l,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var u=i.dgst;return i=u,s=Error(ve(419)),i=wp(s,i,void 0),jc(t,e,l,i)}if(u=(l&t.childLanes)!==0,di||u){if(i=Cn,i!==null){switch(l&-l){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|l)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Jr(t,r),ur(i,t,r,-1))}return Zv(),i=wp(Error(ve(421))),jc(t,e,l,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=XA.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Ci=Us(r.nextSibling),Pi=e,Qt=!0,sr=null,t!==null&&(Gi[Wi++]=Xr,Gi[Wi++]=jr,Gi[Wi++]=wo,Xr=t.id,jr=t.overflow,wo=e),e=Xv(e,i.children),e.flags|=4096,e)}function Qy(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Zm(t.return,e,n)}function Ap(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function xM(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Zn(t,e,i.children,n),i=$t.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Qy(t,n,e);else if(t.tag===19)Qy(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(Xt($t,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&ud(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Ap(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&ud(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Ap(e,!0,n,null,s);break;case"together":Ap(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function If(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function es(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Co|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ve(153));if(e.child!==null){for(t=e.child,n=ks(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ks(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function IA(t,e,n){switch(e.tag){case 3:_M(e),Ba();break;case 5:jE(e);break;case 1:mi(e.type)&&id(e);break;case 4:Ov(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Xt(od,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Xt($t,$t.current&1),e.flags|=128,null):n&e.child.childLanes?yM(t,e,n):(Xt($t,$t.current&1),t=es(t,e,n),t!==null?t.sibling:null);Xt($t,$t.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return xM(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Xt($t,$t.current),i)break;return null;case 22:case 23:return e.lanes=0,gM(t,e,n)}return es(t,e,n)}var SM,sg,EM,MM;SM=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};sg=function(){};EM=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,_o(Rr.current);var s=null;switch(n){case"input":r=Cm(t,r),i=Cm(t,i),s=[];break;case"select":r=tn({},r,{value:void 0}),i=tn({},i,{value:void 0}),s=[];break;case"textarea":r=Dm(t,r),i=Dm(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=td)}Nm(n,i);var l;n=null;for(d in r)if(!i.hasOwnProperty(d)&&r.hasOwnProperty(d)&&r[d]!=null)if(d==="style"){var u=r[d];for(l in u)u.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(iu.hasOwnProperty(d)?s||(s=[]):(s=s||[]).push(d,null));for(d in i){var f=i[d];if(u=r!=null?r[d]:void 0,i.hasOwnProperty(d)&&f!==u&&(f!=null||u!=null))if(d==="style")if(u){for(l in u)!u.hasOwnProperty(l)||f&&f.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in f)f.hasOwnProperty(l)&&u[l]!==f[l]&&(n||(n={}),n[l]=f[l])}else n||(s||(s=[]),s.push(d,n)),n=f;else d==="dangerouslySetInnerHTML"?(f=f?f.__html:void 0,u=u?u.__html:void 0,f!=null&&u!==f&&(s=s||[]).push(d,f)):d==="children"?typeof f!="string"&&typeof f!="number"||(s=s||[]).push(d,""+f):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(iu.hasOwnProperty(d)?(f!=null&&d==="onScroll"&&jt("scroll",t),s||u===f||(s=[])):(s=s||[]).push(d,f))}n&&(s=s||[]).push("style",n);var d=s;(e.updateQueue=d)&&(e.flags|=4)}};MM=function(t,e,n,i){n!==i&&(e.flags|=4)};function Pl(t,e){if(!Qt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Vn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function UA(t,e,n){var i=e.pendingProps;switch(Dv(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Vn(e),null;case 1:return mi(e.type)&&nd(),Vn(e),null;case 3:return i=e.stateNode,Va(),Yt(pi),Yt(jn),zv(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Wc(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,sr!==null&&(hg(sr),sr=null))),sg(t,e),Vn(e),null;case 5:kv(e);var r=_o(mu.current);if(n=e.type,t!==null&&e.stateNode!=null)EM(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ve(166));return Vn(e),null}if(t=_o(Rr.current),Wc(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Tr]=e,i[hu]=s,t=(e.mode&1)!==0,n){case"dialog":jt("cancel",i),jt("close",i);break;case"iframe":case"object":case"embed":jt("load",i);break;case"video":case"audio":for(r=0;r<Gl.length;r++)jt(Gl[r],i);break;case"source":jt("error",i);break;case"img":case"image":case"link":jt("error",i),jt("load",i);break;case"details":jt("toggle",i);break;case"input":sy(i,s),jt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},jt("invalid",i);break;case"textarea":ay(i,s),jt("invalid",i)}Nm(n,s),r=null;for(var l in s)if(s.hasOwnProperty(l)){var u=s[l];l==="children"?typeof u=="string"?i.textContent!==u&&(s.suppressHydrationWarning!==!0&&Gc(i.textContent,u,t),r=["children",u]):typeof u=="number"&&i.textContent!==""+u&&(s.suppressHydrationWarning!==!0&&Gc(i.textContent,u,t),r=["children",""+u]):iu.hasOwnProperty(l)&&u!=null&&l==="onScroll"&&jt("scroll",i)}switch(n){case"input":bc(i),oy(i,s,!0);break;case"textarea":bc(i),ly(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=td)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{l=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=ZS(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=l.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=l.createElement(n,{is:i.is}):(t=l.createElement(n),n==="select"&&(l=t,i.multiple?l.multiple=!0:i.size&&(l.size=i.size))):t=l.createElementNS(t,n),t[Tr]=e,t[hu]=i,SM(t,e,!1,!1),e.stateNode=t;e:{switch(l=Im(n,i),n){case"dialog":jt("cancel",t),jt("close",t),r=i;break;case"iframe":case"object":case"embed":jt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Gl.length;r++)jt(Gl[r],t);r=i;break;case"source":jt("error",t),r=i;break;case"img":case"image":case"link":jt("error",t),jt("load",t),r=i;break;case"details":jt("toggle",t),r=i;break;case"input":sy(t,i),r=Cm(t,i),jt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=tn({},i,{value:void 0}),jt("invalid",t);break;case"textarea":ay(t,i),r=Dm(t,i),jt("invalid",t);break;default:r=i}Nm(n,r),u=r;for(s in u)if(u.hasOwnProperty(s)){var f=u[s];s==="style"?eE(t,f):s==="dangerouslySetInnerHTML"?(f=f?f.__html:void 0,f!=null&&$S(t,f)):s==="children"?typeof f=="string"?(n!=="textarea"||f!=="")&&ru(t,f):typeof f=="number"&&ru(t,""+f):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(iu.hasOwnProperty(s)?f!=null&&s==="onScroll"&&jt("scroll",t):f!=null&&mv(t,s,f,l))}switch(n){case"input":bc(t),oy(t,i,!1);break;case"textarea":bc(t),ly(t);break;case"option":i.value!=null&&t.setAttribute("value",""+zs(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Ra(t,!!i.multiple,s,!1):i.defaultValue!=null&&Ra(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=td)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Vn(e),null;case 6:if(t&&e.stateNode!=null)MM(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ve(166));if(n=_o(mu.current),_o(Rr.current),Wc(e)){if(i=e.stateNode,n=e.memoizedProps,i[Tr]=e,(s=i.nodeValue!==n)&&(t=Pi,t!==null))switch(t.tag){case 3:Gc(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Gc(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Tr]=e,e.stateNode=i}return Vn(e),null;case 13:if(Yt($t),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Qt&&Ci!==null&&e.mode&1&&!(e.flags&128))HE(),Ba(),e.flags|=98560,s=!1;else if(s=Wc(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ve(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ve(317));s[Tr]=e}else Ba(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Vn(e),s=!1}else sr!==null&&(hg(sr),sr=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||$t.current&1?gn===0&&(gn=3):Zv())),e.updateQueue!==null&&(e.flags|=4),Vn(e),null);case 4:return Va(),sg(t,e),t===null&&fu(e.stateNode.containerInfo),Vn(e),null;case 10:return Uv(e.type._context),Vn(e),null;case 17:return mi(e.type)&&nd(),Vn(e),null;case 19:if(Yt($t),s=e.memoizedState,s===null)return Vn(e),null;if(i=(e.flags&128)!==0,l=s.rendering,l===null)if(i)Pl(s,!1);else{if(gn!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(l=ud(t),l!==null){for(e.flags|=128,Pl(s,!1),i=l.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,l=s.alternate,l===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=l.childLanes,s.lanes=l.lanes,s.child=l.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=l.memoizedProps,s.memoizedState=l.memoizedState,s.updateQueue=l.updateQueue,s.type=l.type,t=l.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Xt($t,$t.current&1|2),e.child}t=t.sibling}s.tail!==null&&an()>Wa&&(e.flags|=128,i=!0,Pl(s,!1),e.lanes=4194304)}else{if(!i)if(t=ud(l),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Pl(s,!0),s.tail===null&&s.tailMode==="hidden"&&!l.alternate&&!Qt)return Vn(e),null}else 2*an()-s.renderingStartTime>Wa&&n!==1073741824&&(e.flags|=128,i=!0,Pl(s,!1),e.lanes=4194304);s.isBackwards?(l.sibling=e.child,e.child=l):(n=s.last,n!==null?n.sibling=l:e.child=l,s.last=l)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=an(),e.sibling=null,n=$t.current,Xt($t,i?n&1|2:n&1),e):(Vn(e),null);case 22:case 23:return Qv(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?wi&1073741824&&(Vn(e),e.subtreeFlags&6&&(e.flags|=8192)):Vn(e),null;case 24:return null;case 25:return null}throw Error(ve(156,e.tag))}function bA(t,e){switch(Dv(e),e.tag){case 1:return mi(e.type)&&nd(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Va(),Yt(pi),Yt(jn),zv(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return kv(e),null;case 13:if(Yt($t),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ve(340));Ba()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Yt($t),null;case 4:return Va(),null;case 10:return Uv(e.type._context),null;case 22:case 23:return Qv(),null;case 24:return null;default:return null}}var Yc=!1,Xn=!1,FA=typeof WeakSet=="function"?WeakSet:Set,Ne=null;function Ta(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){rn(t,e,i)}else n.current=null}function og(t,e,n){try{n()}catch(i){rn(t,e,i)}}var Zy=!1;function OA(t,e){if(Gm=$f,t=RE(),Rv(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var l=0,u=-1,f=-1,d=0,h=0,m=t,v=null;t:for(;;){for(var _;m!==n||r!==0&&m.nodeType!==3||(u=l+r),m!==s||i!==0&&m.nodeType!==3||(f=l+i),m.nodeType===3&&(l+=m.nodeValue.length),(_=m.firstChild)!==null;)v=m,m=_;for(;;){if(m===t)break t;if(v===n&&++d===r&&(u=l),v===s&&++h===i&&(f=l),(_=m.nextSibling)!==null)break;m=v,v=m.parentNode}m=_}n=u===-1||f===-1?null:{start:u,end:f}}else n=null}n=n||{start:0,end:0}}else n=null;for(Wm={focusedElem:t,selectionRange:n},$f=!1,Ne=e;Ne!==null;)if(e=Ne,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Ne=t;else for(;Ne!==null;){e=Ne;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var w=x.memoizedProps,E=x.memoizedState,g=e.stateNode,S=g.getSnapshotBeforeUpdate(e.elementType===e.type?w:ir(e.type,w),E);g.__reactInternalSnapshotBeforeUpdate=S}break;case 3:var M=e.stateNode.containerInfo;M.nodeType===1?M.textContent="":M.nodeType===9&&M.documentElement&&M.removeChild(M.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ve(163))}}catch(A){rn(e,e.return,A)}if(t=e.sibling,t!==null){t.return=e.return,Ne=t;break}Ne=e.return}return x=Zy,Zy=!1,x}function $l(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&og(e,n,s)}r=r.next}while(r!==i)}}function Nd(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function ag(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function TM(t){var e=t.alternate;e!==null&&(t.alternate=null,TM(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Tr],delete e[hu],delete e[Ym],delete e[yA],delete e[xA])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function wM(t){return t.tag===5||t.tag===3||t.tag===4}function $y(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||wM(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function lg(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=td));else if(i!==4&&(t=t.child,t!==null))for(lg(t,e,n),t=t.sibling;t!==null;)lg(t,e,n),t=t.sibling}function ug(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(ug(t,e,n),t=t.sibling;t!==null;)ug(t,e,n),t=t.sibling}var In=null,rr=!1;function vs(t,e,n){for(n=n.child;n!==null;)AM(t,e,n),n=n.sibling}function AM(t,e,n){if(Cr&&typeof Cr.onCommitFiberUnmount=="function")try{Cr.onCommitFiberUnmount(Td,n)}catch{}switch(n.tag){case 5:Xn||Ta(n,e);case 6:var i=In,r=rr;In=null,vs(t,e,n),In=i,rr=r,In!==null&&(rr?(t=In,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):In.removeChild(n.stateNode));break;case 18:In!==null&&(rr?(t=In,n=n.stateNode,t.nodeType===8?yp(t.parentNode,n):t.nodeType===1&&yp(t,n),lu(t)):yp(In,n.stateNode));break;case 4:i=In,r=rr,In=n.stateNode.containerInfo,rr=!0,vs(t,e,n),In=i,rr=r;break;case 0:case 11:case 14:case 15:if(!Xn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,l=s.destroy;s=s.tag,l!==void 0&&(s&2||s&4)&&og(n,e,l),r=r.next}while(r!==i)}vs(t,e,n);break;case 1:if(!Xn&&(Ta(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(u){rn(n,e,u)}vs(t,e,n);break;case 21:vs(t,e,n);break;case 22:n.mode&1?(Xn=(i=Xn)||n.memoizedState!==null,vs(t,e,n),Xn=i):vs(t,e,n);break;default:vs(t,e,n)}}function Jy(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new FA),e.forEach(function(i){var r=jA.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Ji(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,l=e,u=l;e:for(;u!==null;){switch(u.tag){case 5:In=u.stateNode,rr=!1;break e;case 3:In=u.stateNode.containerInfo,rr=!0;break e;case 4:In=u.stateNode.containerInfo,rr=!0;break e}u=u.return}if(In===null)throw Error(ve(160));AM(s,l,r),In=null,rr=!1;var f=r.alternate;f!==null&&(f.return=null),r.return=null}catch(d){rn(r,e,d)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)CM(e,t),e=e.sibling}function CM(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ji(e,t),xr(t),i&4){try{$l(3,t,t.return),Nd(3,t)}catch(w){rn(t,t.return,w)}try{$l(5,t,t.return)}catch(w){rn(t,t.return,w)}}break;case 1:Ji(e,t),xr(t),i&512&&n!==null&&Ta(n,n.return);break;case 5:if(Ji(e,t),xr(t),i&512&&n!==null&&Ta(n,n.return),t.flags&32){var r=t.stateNode;try{ru(r,"")}catch(w){rn(t,t.return,w)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,l=n!==null?n.memoizedProps:s,u=t.type,f=t.updateQueue;if(t.updateQueue=null,f!==null)try{u==="input"&&s.type==="radio"&&s.name!=null&&KS(r,s),Im(u,l);var d=Im(u,s);for(l=0;l<f.length;l+=2){var h=f[l],m=f[l+1];h==="style"?eE(r,m):h==="dangerouslySetInnerHTML"?$S(r,m):h==="children"?ru(r,m):mv(r,h,m,d)}switch(u){case"input":Rm(r,s);break;case"textarea":QS(r,s);break;case"select":var v=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var _=s.value;_!=null?Ra(r,!!s.multiple,_,!1):v!==!!s.multiple&&(s.defaultValue!=null?Ra(r,!!s.multiple,s.defaultValue,!0):Ra(r,!!s.multiple,s.multiple?[]:"",!1))}r[hu]=s}catch(w){rn(t,t.return,w)}}break;case 6:if(Ji(e,t),xr(t),i&4){if(t.stateNode===null)throw Error(ve(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(w){rn(t,t.return,w)}}break;case 3:if(Ji(e,t),xr(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{lu(e.containerInfo)}catch(w){rn(t,t.return,w)}break;case 4:Ji(e,t),xr(t);break;case 13:Ji(e,t),xr(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(qv=an())),i&4&&Jy(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(Xn=(d=Xn)||h,Ji(e,t),Xn=d):Ji(e,t),xr(t),i&8192){if(d=t.memoizedState!==null,(t.stateNode.isHidden=d)&&!h&&t.mode&1)for(Ne=t,h=t.child;h!==null;){for(m=Ne=h;Ne!==null;){switch(v=Ne,_=v.child,v.tag){case 0:case 11:case 14:case 15:$l(4,v,v.return);break;case 1:Ta(v,v.return);var x=v.stateNode;if(typeof x.componentWillUnmount=="function"){i=v,n=v.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(w){rn(i,n,w)}}break;case 5:Ta(v,v.return);break;case 22:if(v.memoizedState!==null){tx(m);continue}}_!==null?(_.return=v,Ne=_):tx(m)}h=h.sibling}e:for(h=null,m=t;;){if(m.tag===5){if(h===null){h=m;try{r=m.stateNode,d?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(u=m.stateNode,f=m.memoizedProps.style,l=f!=null&&f.hasOwnProperty("display")?f.display:null,u.style.display=JS("display",l))}catch(w){rn(t,t.return,w)}}}else if(m.tag===6){if(h===null)try{m.stateNode.nodeValue=d?"":m.memoizedProps}catch(w){rn(t,t.return,w)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;h===m&&(h=null),m=m.return}h===m&&(h=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Ji(e,t),xr(t),i&4&&Jy(t);break;case 21:break;default:Ji(e,t),xr(t)}}function xr(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(wM(n)){var i=n;break e}n=n.return}throw Error(ve(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ru(r,""),i.flags&=-33);var s=$y(t);ug(t,s,r);break;case 3:case 4:var l=i.stateNode.containerInfo,u=$y(t);lg(t,u,l);break;default:throw Error(ve(161))}}catch(f){rn(t,t.return,f)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function kA(t,e,n){Ne=t,RM(t)}function RM(t,e,n){for(var i=(t.mode&1)!==0;Ne!==null;){var r=Ne,s=r.child;if(r.tag===22&&i){var l=r.memoizedState!==null||Yc;if(!l){var u=r.alternate,f=u!==null&&u.memoizedState!==null||Xn;u=Yc;var d=Xn;if(Yc=l,(Xn=f)&&!d)for(Ne=r;Ne!==null;)l=Ne,f=l.child,l.tag===22&&l.memoizedState!==null?nx(r):f!==null?(f.return=l,Ne=f):nx(r);for(;s!==null;)Ne=s,RM(s),s=s.sibling;Ne=r,Yc=u,Xn=d}ex(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Ne=s):ex(t)}}function ex(t){for(;Ne!==null;){var e=Ne;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Xn||Nd(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Xn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:ir(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&ky(e,s,i);break;case 3:var l=e.updateQueue;if(l!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}ky(e,l,n)}break;case 5:var u=e.stateNode;if(n===null&&e.flags&4){n=u;var f=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":f.autoFocus&&n.focus();break;case"img":f.src&&(n.src=f.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var d=e.alternate;if(d!==null){var h=d.memoizedState;if(h!==null){var m=h.dehydrated;m!==null&&lu(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ve(163))}Xn||e.flags&512&&ag(e)}catch(v){rn(e,e.return,v)}}if(e===t){Ne=null;break}if(n=e.sibling,n!==null){n.return=e.return,Ne=n;break}Ne=e.return}}function tx(t){for(;Ne!==null;){var e=Ne;if(e===t){Ne=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Ne=n;break}Ne=e.return}}function nx(t){for(;Ne!==null;){var e=Ne;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Nd(4,e)}catch(f){rn(e,n,f)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(f){rn(e,r,f)}}var s=e.return;try{ag(e)}catch(f){rn(e,s,f)}break;case 5:var l=e.return;try{ag(e)}catch(f){rn(e,l,f)}}}catch(f){rn(e,e.return,f)}if(e===t){Ne=null;break}var u=e.sibling;if(u!==null){u.return=e.return,Ne=u;break}Ne=e.return}}var zA=Math.ceil,dd=is.ReactCurrentDispatcher,jv=is.ReactCurrentOwner,Yi=is.ReactCurrentBatchConfig,Pt=0,Cn=null,dn=null,Un=0,wi=0,wa=Ws(0),gn=0,yu=null,Co=0,Id=0,Yv=0,Jl=null,ci=null,qv=0,Wa=1/0,Gr=null,hd=!1,cg=null,Fs=null,qc=!1,Ds=null,pd=0,eu=0,fg=null,Uf=-1,bf=0;function $n(){return Pt&6?an():Uf!==-1?Uf:Uf=an()}function Os(t){return t.mode&1?Pt&2&&Un!==0?Un&-Un:EA.transition!==null?(bf===0&&(bf=dE()),bf):(t=kt,t!==0||(t=window.event,t=t===void 0?16:yE(t.type)),t):1}function ur(t,e,n,i){if(50<eu)throw eu=0,fg=null,Error(ve(185));wu(t,n,i),(!(Pt&2)||t!==Cn)&&(t===Cn&&(!(Pt&2)&&(Id|=n),gn===4&&Rs(t,Un)),gi(t,i),n===1&&Pt===0&&!(e.mode&1)&&(Wa=an()+500,Pd&&Xs()))}function gi(t,e){var n=t.callbackNode;Ew(t,e);var i=Zf(t,t===Cn?Un:0);if(i===0)n!==null&&fy(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&fy(n),e===1)t.tag===0?SA(ix.bind(null,t)):kE(ix.bind(null,t)),vA(function(){!(Pt&6)&&Xs()}),n=null;else{switch(hE(i)){case 1:n=xv;break;case 4:n=cE;break;case 16:n=Qf;break;case 536870912:n=fE;break;default:n=Qf}n=FM(n,PM.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function PM(t,e){if(Uf=-1,bf=0,Pt&6)throw Error(ve(327));var n=t.callbackNode;if(Ia()&&t.callbackNode!==n)return null;var i=Zf(t,t===Cn?Un:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=md(t,i);else{e=i;var r=Pt;Pt|=2;var s=LM();(Cn!==t||Un!==e)&&(Gr=null,Wa=an()+500,Eo(t,e));do try{VA();break}catch(u){DM(t,u)}while(1);Iv(),dd.current=s,Pt=r,dn!==null?e=0:(Cn=null,Un=0,e=gn)}if(e!==0){if(e===2&&(r=km(t),r!==0&&(i=r,e=dg(t,r))),e===1)throw n=yu,Eo(t,0),Rs(t,i),gi(t,an()),n;if(e===6)Rs(t,i);else{if(r=t.current.alternate,!(i&30)&&!BA(r)&&(e=md(t,i),e===2&&(s=km(t),s!==0&&(i=s,e=dg(t,s))),e===1))throw n=yu,Eo(t,0),Rs(t,i),gi(t,an()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ve(345));case 2:co(t,ci,Gr);break;case 3:if(Rs(t,i),(i&130023424)===i&&(e=qv+500-an(),10<e)){if(Zf(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){$n(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=jm(co.bind(null,t,ci,Gr),e);break}co(t,ci,Gr);break;case 4:if(Rs(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var l=31-lr(i);s=1<<l,l=e[l],l>r&&(r=l),i&=~s}if(i=r,i=an()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*zA(i/1960))-i,10<i){t.timeoutHandle=jm(co.bind(null,t,ci,Gr),i);break}co(t,ci,Gr);break;case 5:co(t,ci,Gr);break;default:throw Error(ve(329))}}}return gi(t,an()),t.callbackNode===n?PM.bind(null,t):null}function dg(t,e){var n=Jl;return t.current.memoizedState.isDehydrated&&(Eo(t,e).flags|=256),t=md(t,e),t!==2&&(e=ci,ci=n,e!==null&&hg(e)),t}function hg(t){ci===null?ci=t:ci.push.apply(ci,t)}function BA(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!cr(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Rs(t,e){for(e&=~Yv,e&=~Id,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-lr(e),i=1<<n;t[n]=-1,e&=~i}}function ix(t){if(Pt&6)throw Error(ve(327));Ia();var e=Zf(t,0);if(!(e&1))return gi(t,an()),null;var n=md(t,e);if(t.tag!==0&&n===2){var i=km(t);i!==0&&(e=i,n=dg(t,i))}if(n===1)throw n=yu,Eo(t,0),Rs(t,e),gi(t,an()),n;if(n===6)throw Error(ve(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,co(t,ci,Gr),gi(t,an()),null}function Kv(t,e){var n=Pt;Pt|=1;try{return t(e)}finally{Pt=n,Pt===0&&(Wa=an()+500,Pd&&Xs())}}function Ro(t){Ds!==null&&Ds.tag===0&&!(Pt&6)&&Ia();var e=Pt;Pt|=1;var n=Yi.transition,i=kt;try{if(Yi.transition=null,kt=1,t)return t()}finally{kt=i,Yi.transition=n,Pt=e,!(Pt&6)&&Xs()}}function Qv(){wi=wa.current,Yt(wa)}function Eo(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,gA(n)),dn!==null)for(n=dn.return;n!==null;){var i=n;switch(Dv(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&nd();break;case 3:Va(),Yt(pi),Yt(jn),zv();break;case 5:kv(i);break;case 4:Va();break;case 13:Yt($t);break;case 19:Yt($t);break;case 10:Uv(i.type._context);break;case 22:case 23:Qv()}n=n.return}if(Cn=t,dn=t=ks(t.current,null),Un=wi=e,gn=0,yu=null,Yv=Id=Co=0,ci=Jl=null,vo!==null){for(e=0;e<vo.length;e++)if(n=vo[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var l=s.next;s.next=r,i.next=l}n.pending=i}vo=null}return t}function DM(t,e){do{var n=dn;try{if(Iv(),Lf.current=fd,cd){for(var i=en.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}cd=!1}if(Ao=0,wn=mn=en=null,Zl=!1,gu=0,jv.current=null,n===null||n.return===null){gn=1,yu=e,dn=null;break}e:{var s=t,l=n.return,u=n,f=e;if(e=Un,u.flags|=32768,f!==null&&typeof f=="object"&&typeof f.then=="function"){var d=f,h=u,m=h.tag;if(!(h.mode&1)&&(m===0||m===11||m===15)){var v=h.alternate;v?(h.updateQueue=v.updateQueue,h.memoizedState=v.memoizedState,h.lanes=v.lanes):(h.updateQueue=null,h.memoizedState=null)}var _=Wy(l);if(_!==null){_.flags&=-257,Xy(_,l,u,s,e),_.mode&1&&Gy(s,d,e),e=_,f=d;var x=e.updateQueue;if(x===null){var w=new Set;w.add(f),e.updateQueue=w}else x.add(f);break e}else{if(!(e&1)){Gy(s,d,e),Zv();break e}f=Error(ve(426))}}else if(Qt&&u.mode&1){var E=Wy(l);if(E!==null){!(E.flags&65536)&&(E.flags|=256),Xy(E,l,u,s,e),Lv(Ga(f,u));break e}}s=f=Ga(f,u),gn!==4&&(gn=2),Jl===null?Jl=[s]:Jl.push(s),s=l;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var g=hM(s,f,e);Oy(s,g);break e;case 1:u=f;var S=s.type,M=s.stateNode;if(!(s.flags&128)&&(typeof S.getDerivedStateFromError=="function"||M!==null&&typeof M.componentDidCatch=="function"&&(Fs===null||!Fs.has(M)))){s.flags|=65536,e&=-e,s.lanes|=e;var A=pM(s,u,e);Oy(s,A);break e}}s=s.return}while(s!==null)}IM(n)}catch(I){e=I,dn===n&&n!==null&&(dn=n=n.return);continue}break}while(1)}function LM(){var t=dd.current;return dd.current=fd,t===null?fd:t}function Zv(){(gn===0||gn===3||gn===2)&&(gn=4),Cn===null||!(Co&268435455)&&!(Id&268435455)||Rs(Cn,Un)}function md(t,e){var n=Pt;Pt|=2;var i=LM();(Cn!==t||Un!==e)&&(Gr=null,Eo(t,e));do try{HA();break}catch(r){DM(t,r)}while(1);if(Iv(),Pt=n,dd.current=i,dn!==null)throw Error(ve(261));return Cn=null,Un=0,gn}function HA(){for(;dn!==null;)NM(dn)}function VA(){for(;dn!==null&&!hw();)NM(dn)}function NM(t){var e=bM(t.alternate,t,wi);t.memoizedProps=t.pendingProps,e===null?IM(t):dn=e,jv.current=null}function IM(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=bA(n,e),n!==null){n.flags&=32767,dn=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{gn=6,dn=null;return}}else if(n=UA(n,e,wi),n!==null){dn=n;return}if(e=e.sibling,e!==null){dn=e;return}dn=e=t}while(e!==null);gn===0&&(gn=5)}function co(t,e,n){var i=kt,r=Yi.transition;try{Yi.transition=null,kt=1,GA(t,e,n,i)}finally{Yi.transition=r,kt=i}return null}function GA(t,e,n,i){do Ia();while(Ds!==null);if(Pt&6)throw Error(ve(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ve(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Mw(t,s),t===Cn&&(dn=Cn=null,Un=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||qc||(qc=!0,FM(Qf,function(){return Ia(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Yi.transition,Yi.transition=null;var l=kt;kt=1;var u=Pt;Pt|=4,jv.current=null,OA(t,n),CM(n,t),uA(Wm),$f=!!Gm,Wm=Gm=null,t.current=n,kA(n),pw(),Pt=u,kt=l,Yi.transition=s}else t.current=n;if(qc&&(qc=!1,Ds=t,pd=r),s=t.pendingLanes,s===0&&(Fs=null),vw(n.stateNode),gi(t,an()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(hd)throw hd=!1,t=cg,cg=null,t;return pd&1&&t.tag!==0&&Ia(),s=t.pendingLanes,s&1?t===fg?eu++:(eu=0,fg=t):eu=0,Xs(),null}function Ia(){if(Ds!==null){var t=hE(pd),e=Yi.transition,n=kt;try{if(Yi.transition=null,kt=16>t?16:t,Ds===null)var i=!1;else{if(t=Ds,Ds=null,pd=0,Pt&6)throw Error(ve(331));var r=Pt;for(Pt|=4,Ne=t.current;Ne!==null;){var s=Ne,l=s.child;if(Ne.flags&16){var u=s.deletions;if(u!==null){for(var f=0;f<u.length;f++){var d=u[f];for(Ne=d;Ne!==null;){var h=Ne;switch(h.tag){case 0:case 11:case 15:$l(8,h,s)}var m=h.child;if(m!==null)m.return=h,Ne=m;else for(;Ne!==null;){h=Ne;var v=h.sibling,_=h.return;if(TM(h),h===d){Ne=null;break}if(v!==null){v.return=_,Ne=v;break}Ne=_}}}var x=s.alternate;if(x!==null){var w=x.child;if(w!==null){x.child=null;do{var E=w.sibling;w.sibling=null,w=E}while(w!==null)}}Ne=s}}if(s.subtreeFlags&2064&&l!==null)l.return=s,Ne=l;else e:for(;Ne!==null;){if(s=Ne,s.flags&2048)switch(s.tag){case 0:case 11:case 15:$l(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,Ne=g;break e}Ne=s.return}}var S=t.current;for(Ne=S;Ne!==null;){l=Ne;var M=l.child;if(l.subtreeFlags&2064&&M!==null)M.return=l,Ne=M;else e:for(l=S;Ne!==null;){if(u=Ne,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:Nd(9,u)}}catch(I){rn(u,u.return,I)}if(u===l){Ne=null;break e}var A=u.sibling;if(A!==null){A.return=u.return,Ne=A;break e}Ne=u.return}}if(Pt=r,Xs(),Cr&&typeof Cr.onPostCommitFiberRoot=="function")try{Cr.onPostCommitFiberRoot(Td,t)}catch{}i=!0}return i}finally{kt=n,Yi.transition=e}}return!1}function rx(t,e,n){e=Ga(n,e),e=hM(t,e,1),t=bs(t,e,1),e=$n(),t!==null&&(wu(t,1,e),gi(t,e))}function rn(t,e,n){if(t.tag===3)rx(t,t,n);else for(;e!==null;){if(e.tag===3){rx(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Fs===null||!Fs.has(i))){t=Ga(n,t),t=pM(e,t,1),e=bs(e,t,1),t=$n(),e!==null&&(wu(e,1,t),gi(e,t));break}}e=e.return}}function WA(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=$n(),t.pingedLanes|=t.suspendedLanes&n,Cn===t&&(Un&n)===n&&(gn===4||gn===3&&(Un&130023424)===Un&&500>an()-qv?Eo(t,0):Yv|=n),gi(t,e)}function UM(t,e){e===0&&(t.mode&1?(e=kc,kc<<=1,!(kc&130023424)&&(kc=4194304)):e=1);var n=$n();t=Jr(t,e),t!==null&&(wu(t,e,n),gi(t,n))}function XA(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),UM(t,n)}function jA(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ve(314))}i!==null&&i.delete(e),UM(t,n)}var bM;bM=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||pi.current)di=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return di=!1,IA(t,e,n);di=!!(t.flags&131072)}else di=!1,Qt&&e.flags&1048576&&zE(e,sd,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;If(t,e),t=e.pendingProps;var r=za(e,jn.current);Na(e,n),r=Hv(null,e,i,t,r,n);var s=Vv();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,mi(i)?(s=!0,id(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Fv(e),r.updater=Ld,e.stateNode=r,r._reactInternals=e,Jm(e,i,t,n),e=ng(null,e,i,!0,s,n)):(e.tag=0,Qt&&s&&Pv(e),Zn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(If(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=qA(i),t=ir(i,t),r){case 0:e=tg(null,e,i,t,n);break e;case 1:e=qy(null,e,i,t,n);break e;case 11:e=jy(null,e,i,t,n);break e;case 14:e=Yy(null,e,i,ir(i.type,t),n);break e}throw Error(ve(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ir(i,r),tg(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ir(i,r),qy(t,e,i,r,n);case 3:e:{if(_M(e),t===null)throw Error(ve(387));i=e.pendingProps,s=e.memoizedState,r=s.element,XE(t,e),ld(e,i,null,n);var l=e.memoizedState;if(i=l.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ga(Error(ve(423)),e),e=Ky(t,e,i,n,r);break e}else if(i!==r){r=Ga(Error(ve(424)),e),e=Ky(t,e,i,n,r);break e}else for(Ci=Us(e.stateNode.containerInfo.firstChild),Pi=e,Qt=!0,sr=null,n=GE(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ba(),i===r){e=es(t,e,n);break e}Zn(t,e,i,n)}e=e.child}return e;case 5:return jE(e),t===null&&Qm(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,l=r.children,Xm(i,r)?l=null:s!==null&&Xm(i,s)&&(e.flags|=32),vM(t,e),Zn(t,e,l,n),e.child;case 6:return t===null&&Qm(e),null;case 13:return yM(t,e,n);case 4:return Ov(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Ha(e,null,i,n):Zn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ir(i,r),jy(t,e,i,r,n);case 7:return Zn(t,e,e.pendingProps,n),e.child;case 8:return Zn(t,e,e.pendingProps.children,n),e.child;case 12:return Zn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,l=r.value,Xt(od,i._currentValue),i._currentValue=l,s!==null)if(cr(s.value,l)){if(s.children===r.children&&!pi.current){e=es(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var u=s.dependencies;if(u!==null){l=s.child;for(var f=u.firstContext;f!==null;){if(f.context===i){if(s.tag===1){f=qr(-1,n&-n),f.tag=2;var d=s.updateQueue;if(d!==null){d=d.shared;var h=d.pending;h===null?f.next=f:(f.next=h.next,h.next=f),d.pending=f}}s.lanes|=n,f=s.alternate,f!==null&&(f.lanes|=n),Zm(s.return,n,e),u.lanes|=n;break}f=f.next}}else if(s.tag===10)l=s.type===e.type?null:s.child;else if(s.tag===18){if(l=s.return,l===null)throw Error(ve(341));l.lanes|=n,u=l.alternate,u!==null&&(u.lanes|=n),Zm(l,n,e),l=s.sibling}else l=s.child;if(l!==null)l.return=s;else for(l=s;l!==null;){if(l===e){l=null;break}if(s=l.sibling,s!==null){s.return=l.return,l=s;break}l=l.return}s=l}Zn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Na(e,n),r=qi(r),i=i(r),e.flags|=1,Zn(t,e,i,n),e.child;case 14:return i=e.type,r=ir(i,e.pendingProps),r=ir(i.type,r),Yy(t,e,i,r,n);case 15:return mM(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ir(i,r),If(t,e),e.tag=1,mi(i)?(t=!0,id(e)):t=!1,Na(e,n),dM(e,i,r),Jm(e,i,r,n),ng(null,e,i,!0,t,n);case 19:return xM(t,e,n);case 22:return gM(t,e,n)}throw Error(ve(156,e.tag))};function FM(t,e){return uE(t,e)}function YA(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xi(t,e,n,i){return new YA(t,e,n,i)}function $v(t){return t=t.prototype,!(!t||!t.isReactComponent)}function qA(t){if(typeof t=="function")return $v(t)?1:0;if(t!=null){if(t=t.$$typeof,t===vv)return 11;if(t===_v)return 14}return 2}function ks(t,e){var n=t.alternate;return n===null?(n=Xi(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ff(t,e,n,i,r,s){var l=2;if(i=t,typeof t=="function")$v(t)&&(l=1);else if(typeof t=="string")l=5;else e:switch(t){case ma:return Mo(n.children,r,s,e);case gv:l=8,r|=8;break;case Mm:return t=Xi(12,n,e,r|2),t.elementType=Mm,t.lanes=s,t;case Tm:return t=Xi(13,n,e,r),t.elementType=Tm,t.lanes=s,t;case wm:return t=Xi(19,n,e,r),t.elementType=wm,t.lanes=s,t;case jS:return Ud(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case WS:l=10;break e;case XS:l=9;break e;case vv:l=11;break e;case _v:l=14;break e;case ws:l=16,i=null;break e}throw Error(ve(130,t==null?t:typeof t,""))}return e=Xi(l,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Mo(t,e,n,i){return t=Xi(7,t,i,e),t.lanes=n,t}function Ud(t,e,n,i){return t=Xi(22,t,i,e),t.elementType=jS,t.lanes=n,t.stateNode={isHidden:!1},t}function Cp(t,e,n){return t=Xi(6,t,null,e),t.lanes=n,t}function Rp(t,e,n){return e=Xi(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function KA(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=lp(0),this.expirationTimes=lp(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=lp(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Jv(t,e,n,i,r,s,l,u,f){return t=new KA(t,e,n,u,f),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Xi(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Fv(s),t}function QA(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:pa,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function OM(t){if(!t)return Bs;t=t._reactInternals;e:{if(Do(t)!==t||t.tag!==1)throw Error(ve(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(mi(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ve(171))}if(t.tag===1){var n=t.type;if(mi(n))return OE(t,n,e)}return e}function kM(t,e,n,i,r,s,l,u,f){return t=Jv(n,i,!0,t,r,s,l,u,f),t.context=OM(null),n=t.current,i=$n(),r=Os(n),s=qr(i,r),s.callback=e??null,bs(n,s,r),t.current.lanes=r,wu(t,r,i),gi(t,i),t}function bd(t,e,n,i){var r=e.current,s=$n(),l=Os(r);return n=OM(n),e.context===null?e.context=n:e.pendingContext=n,e=qr(s,l),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=bs(r,e,l),t!==null&&(ur(t,r,l,s),Df(t,r,l)),l}function gd(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function sx(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function e0(t,e){sx(t,e),(t=t.alternate)&&sx(t,e)}function ZA(){return null}var zM=typeof reportError=="function"?reportError:function(t){console.error(t)};function t0(t){this._internalRoot=t}Fd.prototype.render=t0.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ve(409));bd(t,e,null,null)};Fd.prototype.unmount=t0.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ro(function(){bd(null,t,null,null)}),e[$r]=null}};function Fd(t){this._internalRoot=t}Fd.prototype.unstable_scheduleHydration=function(t){if(t){var e=gE();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Cs.length&&e!==0&&e<Cs[n].priority;n++);Cs.splice(n,0,t),n===0&&_E(t)}};function n0(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Od(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function ox(){}function $A(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var d=gd(l);s.call(d)}}var l=kM(e,i,t,0,null,!1,!1,"",ox);return t._reactRootContainer=l,t[$r]=l.current,fu(t.nodeType===8?t.parentNode:t),Ro(),l}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var u=i;i=function(){var d=gd(f);u.call(d)}}var f=Jv(t,0,!1,null,null,!1,!1,"",ox);return t._reactRootContainer=f,t[$r]=f.current,fu(t.nodeType===8?t.parentNode:t),Ro(function(){bd(e,f,n,i)}),f}function kd(t,e,n,i,r){var s=n._reactRootContainer;if(s){var l=s;if(typeof r=="function"){var u=r;r=function(){var f=gd(l);u.call(f)}}bd(e,l,t,r)}else l=$A(n,e,t,r,i);return gd(l)}pE=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Vl(e.pendingLanes);n!==0&&(Sv(e,n|1),gi(e,an()),!(Pt&6)&&(Wa=an()+500,Xs()))}break;case 13:Ro(function(){var i=Jr(t,1);if(i!==null){var r=$n();ur(i,t,1,r)}}),e0(t,1)}};Ev=function(t){if(t.tag===13){var e=Jr(t,134217728);if(e!==null){var n=$n();ur(e,t,134217728,n)}e0(t,134217728)}};mE=function(t){if(t.tag===13){var e=Os(t),n=Jr(t,e);if(n!==null){var i=$n();ur(n,t,e,i)}e0(t,e)}};gE=function(){return kt};vE=function(t,e){var n=kt;try{return kt=t,e()}finally{kt=n}};bm=function(t,e,n){switch(e){case"input":if(Rm(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Rd(i);if(!r)throw Error(ve(90));qS(i),Rm(i,r)}}}break;case"textarea":QS(t,n);break;case"select":e=n.value,e!=null&&Ra(t,!!n.multiple,e,!1)}};iE=Kv;rE=Ro;var JA={usingClientEntryPoint:!1,Events:[Cu,ya,Rd,tE,nE,Kv]},Dl={findFiberByHostInstance:go,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},eC={bundleType:Dl.bundleType,version:Dl.version,rendererPackageName:Dl.rendererPackageName,rendererConfig:Dl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:is.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=aE(t),t===null?null:t.stateNode},findFiberByHostInstance:Dl.findFiberByHostInstance||ZA,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Kc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Kc.isDisabled&&Kc.supportsFiber)try{Td=Kc.inject(eC),Cr=Kc}catch{}}Li.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=JA;Li.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!n0(e))throw Error(ve(200));return QA(t,e,null,n)};Li.createRoot=function(t,e){if(!n0(t))throw Error(ve(299));var n=!1,i="",r=zM;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Jv(t,1,!1,null,null,n,!1,i,r),t[$r]=e.current,fu(t.nodeType===8?t.parentNode:t),new t0(e)};Li.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ve(188)):(t=Object.keys(t).join(","),Error(ve(268,t)));return t=aE(e),t=t===null?null:t.stateNode,t};Li.flushSync=function(t){return Ro(t)};Li.hydrate=function(t,e,n){if(!Od(e))throw Error(ve(200));return kd(null,t,e,!0,n)};Li.hydrateRoot=function(t,e,n){if(!n0(t))throw Error(ve(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",l=zM;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),e=kM(e,null,t,1,n??null,r,!1,s,l),t[$r]=e.current,fu(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Fd(e)};Li.render=function(t,e,n){if(!Od(e))throw Error(ve(200));return kd(null,t,e,!1,n)};Li.unmountComponentAtNode=function(t){if(!Od(t))throw Error(ve(40));return t._reactRootContainer?(Ro(function(){kd(null,null,t,!1,function(){t._reactRootContainer=null,t[$r]=null})}),!0):!1};Li.unstable_batchedUpdates=Kv;Li.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Od(n))throw Error(ve(200));if(t==null||t._reactInternals===void 0)throw Error(ve(38));return kd(t,e,n,!1,i)};Li.version="18.3.1-next-f1338f8080-20240426";function BM(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(BM)}catch(t){console.error(t)}}BM(),BS.exports=Li;var tC=BS.exports,HM,ax=tC;HM=ax.createRoot,ax.hydrateRoot;const lx=t=>{let e;const n=new Set,i=(h,m)=>{const v=typeof h=="function"?h(e):h;if(!Object.is(v,e)){const _=e;e=m??(typeof v!="object"||v===null)?v:Object.assign({},e,v),n.forEach(x=>x(e,_))}},r=()=>e,f={setState:i,getState:r,getInitialState:()=>d,subscribe:h=>(n.add(h),()=>n.delete(h)),destroy:()=>{n.clear()}},d=e=t(i,r,f);return f},nC=t=>t?lx(t):lx;var VM={exports:{}},GM={},WM={exports:{}},XM={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xa=We;function iC(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var rC=typeof Object.is=="function"?Object.is:iC,sC=Xa.useState,oC=Xa.useEffect,aC=Xa.useLayoutEffect,lC=Xa.useDebugValue;function uC(t,e){var n=e(),i=sC({inst:{value:n,getSnapshot:e}}),r=i[0].inst,s=i[1];return aC(function(){r.value=n,r.getSnapshot=e,Pp(r)&&s({inst:r})},[t,n,e]),oC(function(){return Pp(r)&&s({inst:r}),t(function(){Pp(r)&&s({inst:r})})},[t]),lC(n),n}function Pp(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!rC(t,n)}catch{return!0}}function cC(t,e){return e()}var fC=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?cC:uC;XM.useSyncExternalStore=Xa.useSyncExternalStore!==void 0?Xa.useSyncExternalStore:fC;WM.exports=XM;var dC=WM.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zd=We,hC=dC;function pC(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var mC=typeof Object.is=="function"?Object.is:pC,gC=hC.useSyncExternalStore,vC=zd.useRef,_C=zd.useEffect,yC=zd.useMemo,xC=zd.useDebugValue;GM.useSyncExternalStoreWithSelector=function(t,e,n,i,r){var s=vC(null);if(s.current===null){var l={hasValue:!1,value:null};s.current=l}else l=s.current;s=yC(function(){function f(_){if(!d){if(d=!0,h=_,_=i(_),r!==void 0&&l.hasValue){var x=l.value;if(r(x,_))return m=x}return m=_}if(x=m,mC(h,_))return x;var w=i(_);return r!==void 0&&r(x,w)?(h=_,x):(h=_,m=w)}var d=!1,h,m,v=n===void 0?null:n;return[function(){return f(e())},v===null?void 0:function(){return f(v())}]},[e,n,i,r]);var u=gC(t,s[0],s[1]);return _C(function(){l.hasValue=!0,l.value=u},[u]),xC(u),u};VM.exports=GM;var SC=VM.exports;const EC=lv(SC),{useDebugValue:MC}=jf,{useSyncExternalStoreWithSelector:TC}=EC;const wC=t=>t;function AC(t,e=wC,n){const i=TC(t.subscribe,t.getState,t.getServerState||t.getInitialState,e,n);return MC(i),i}const ux=t=>{const e=typeof t=="function"?nC(t):t,n=(i,r)=>AC(e,i,r);return Object.assign(n,e),n},CC=t=>t?ux(t):ux;function RC(){return tt.jsxs(tt.Fragment,{children:[tt.jsxs("nav",{className:"nav",children:[tt.jsx("a",{href:"#",children:"D'On Venim"}),tt.jsx("a",{href:"#",children:"Qui Sóm"}),tt.jsx("a",{href:"#",children:"Què Fem"}),tt.jsx("a",{href:"#",children:"Espectacles"}),tt.jsx("a",{href:"#",children:"Contacte"})]}),tt.jsxs("div",{className:"bottom",children:[tt.jsx("a",{href:"https://github.com/microstudi/arpispas.com",className:"bottom-right",children:"<Source />"}),tt.jsx("a",{href:"https://www.instagram.com/arpispas",className:"bottom-left"})]}),tt.jsx("span",{className:"header-left",children:tt.jsx("img",{src:"/arpispas.svg",alt:"Arpispas Teatre",style:{width:"120px",height:"120px"}})})]})}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Pu="178",PC=0,cx=1,DC=2,LC=0,i0=1,Of=2,Er=3,ts=0,An=1,Ai=2,Jn=0,Ua=1,fx=2,dx=3,hx=4,NC=5,po=100,IC=101,UC=102,bC=103,FC=104,OC=200,kC=201,zC=202,BC=203,pg=204,mg=205,HC=206,VC=207,GC=208,WC=209,XC=210,jC=211,YC=212,qC=213,KC=214,gg=0,vg=1,_g=2,ja=3,yg=4,xg=5,Sg=6,Eg=7,jM=0,QC=1,ZC=2,Pr=0,$C=1,JC=2,eR=3,YM=4,tR=5,nR=6,iR=7,qM=300,Ya=301,qa=302,Mg=303,Tg=304,Bd=306,wg=1e3,yo=1001,Ag=1002,ei=1003,rR=1004,Qc=1005,hi=1006,Dp=1007,xo=1008,Rn=1009,KM=1010,QM=1011,xu=1012,r0=1013,Hs=1014,Ar=1015,nl=1016,s0=1017,o0=1018,Ka=1020,ZM=35902,$M=1021,JM=1022,ji=1023,Su=1026,Qa=1027,e1=1028,a0=1029,t1=1030,l0=1031,u0=1033,kf=33776,zf=33777,Bf=33778,Hf=33779,Cg=35840,Rg=35841,Pg=35842,Dg=35843,Lg=36196,Ng=37492,Ig=37496,Ug=37808,bg=37809,Fg=37810,Og=37811,kg=37812,zg=37813,Bg=37814,Hg=37815,Vg=37816,Gg=37817,Wg=37818,Xg=37819,jg=37820,Yg=37821,Vf=36492,qg=36494,Kg=36495,n1=36283,Qg=36284,Zg=36285,$g=36286,rs=3200,sR=3201,i1=0,oR=1,wr="",Ot="srgb",Vs="srgb-linear",vd="linear",Vt="srgb",Yo=7680,px=519,aR=512,lR=513,uR=514,r1=515,cR=516,fR=517,dR=518,hR=519,mx=35044,gx="300 es",Yr=2e3,_d=2001;class ss{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,l=r.length;s<l;s++)r[s].call(this,e);e.target=null}}}const Gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let vx=1234567;const tu=Math.PI/180,Eu=180/Math.PI;function il(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Gn[t&255]+Gn[t>>8&255]+Gn[t>>16&255]+Gn[t>>24&255]+"-"+Gn[e&255]+Gn[e>>8&255]+"-"+Gn[e>>16&15|64]+Gn[e>>24&255]+"-"+Gn[n&63|128]+Gn[n>>8&255]+"-"+Gn[n>>16&255]+Gn[n>>24&255]+Gn[i&255]+Gn[i>>8&255]+Gn[i>>16&255]+Gn[i>>24&255]).toLowerCase()}function vt(t,e,n){return Math.max(e,Math.min(n,t))}function c0(t,e){return(t%e+e)%e}function pR(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function mR(t,e,n){return t!==e?(n-t)/(e-t):0}function nu(t,e,n){return(1-n)*t+n*e}function gR(t,e,n,i){return nu(t,e,1-Math.exp(-n*i))}function vR(t,e=1){return e-Math.abs(c0(t,e*2)-e)}function _R(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function yR(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function xR(t,e){return t+Math.floor(Math.random()*(e-t+1))}function SR(t,e){return t+Math.random()*(e-t)}function ER(t){return t*(.5-Math.random())}function MR(t){t!==void 0&&(vx=t);let e=vx+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function TR(t){return t*tu}function wR(t){return t*Eu}function AR(t){return(t&t-1)===0&&t!==0}function CR(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function RR(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function PR(t,e,n,i,r){const s=Math.cos,l=Math.sin,u=s(n/2),f=l(n/2),d=s((e+i)/2),h=l((e+i)/2),m=s((e-i)/2),v=l((e-i)/2),_=s((i-e)/2),x=l((i-e)/2);switch(r){case"XYX":t.set(u*h,f*m,f*v,u*d);break;case"YZY":t.set(f*v,u*h,f*m,u*d);break;case"ZXZ":t.set(f*m,f*v,u*h,u*d);break;case"XZX":t.set(u*h,f*x,f*_,u*d);break;case"YXY":t.set(f*_,u*h,f*x,u*d);break;case"ZYZ":t.set(f*x,f*_,u*h,u*d);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function fa(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Kn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const Gf={DEG2RAD:tu,RAD2DEG:Eu,generateUUID:il,clamp:vt,euclideanModulo:c0,mapLinear:pR,inverseLerp:mR,lerp:nu,damp:gR,pingpong:vR,smoothstep:_R,smootherstep:yR,randInt:xR,randFloat:SR,randFloatSpread:ER,seededRandom:MR,degToRad:TR,radToDeg:wR,isPowerOfTwo:AR,ceilPowerOfTwo:CR,floorPowerOfTwo:RR,setQuaternionFromProperEuler:PR,normalize:Kn,denormalize:fa};class nt{constructor(e=0,n=0){nt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=vt(this.x,e.x,n.x),this.y=vt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=vt(this.x,e,n),this.y=vt(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(vt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(vt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,l=this.y-e.y;return this.x=s*i-l*r+e.x,this.y=s*r+l*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Du{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,l,u){let f=i[r+0],d=i[r+1],h=i[r+2],m=i[r+3];const v=s[l+0],_=s[l+1],x=s[l+2],w=s[l+3];if(u===0){e[n+0]=f,e[n+1]=d,e[n+2]=h,e[n+3]=m;return}if(u===1){e[n+0]=v,e[n+1]=_,e[n+2]=x,e[n+3]=w;return}if(m!==w||f!==v||d!==_||h!==x){let E=1-u;const g=f*v+d*_+h*x+m*w,S=g>=0?1:-1,M=1-g*g;if(M>Number.EPSILON){const I=Math.sqrt(M),N=Math.atan2(I,g*S);E=Math.sin(E*N)/I,u=Math.sin(u*N)/I}const A=u*S;if(f=f*E+v*A,d=d*E+_*A,h=h*E+x*A,m=m*E+w*A,E===1-u){const I=1/Math.sqrt(f*f+d*d+h*h+m*m);f*=I,d*=I,h*=I,m*=I}}e[n]=f,e[n+1]=d,e[n+2]=h,e[n+3]=m}static multiplyQuaternionsFlat(e,n,i,r,s,l){const u=i[r],f=i[r+1],d=i[r+2],h=i[r+3],m=s[l],v=s[l+1],_=s[l+2],x=s[l+3];return e[n]=u*x+h*m+f*_-d*v,e[n+1]=f*x+h*v+d*m-u*_,e[n+2]=d*x+h*_+u*v-f*m,e[n+3]=h*x-u*m-f*v-d*_,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,l=e._order,u=Math.cos,f=Math.sin,d=u(i/2),h=u(r/2),m=u(s/2),v=f(i/2),_=f(r/2),x=f(s/2);switch(l){case"XYZ":this._x=v*h*m+d*_*x,this._y=d*_*m-v*h*x,this._z=d*h*x+v*_*m,this._w=d*h*m-v*_*x;break;case"YXZ":this._x=v*h*m+d*_*x,this._y=d*_*m-v*h*x,this._z=d*h*x-v*_*m,this._w=d*h*m+v*_*x;break;case"ZXY":this._x=v*h*m-d*_*x,this._y=d*_*m+v*h*x,this._z=d*h*x+v*_*m,this._w=d*h*m-v*_*x;break;case"ZYX":this._x=v*h*m-d*_*x,this._y=d*_*m+v*h*x,this._z=d*h*x-v*_*m,this._w=d*h*m+v*_*x;break;case"YZX":this._x=v*h*m+d*_*x,this._y=d*_*m+v*h*x,this._z=d*h*x-v*_*m,this._w=d*h*m-v*_*x;break;case"XZY":this._x=v*h*m-d*_*x,this._y=d*_*m-v*h*x,this._z=d*h*x+v*_*m,this._w=d*h*m+v*_*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+l)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],l=n[1],u=n[5],f=n[9],d=n[2],h=n[6],m=n[10],v=i+u+m;if(v>0){const _=.5/Math.sqrt(v+1);this._w=.25/_,this._x=(h-f)*_,this._y=(s-d)*_,this._z=(l-r)*_}else if(i>u&&i>m){const _=2*Math.sqrt(1+i-u-m);this._w=(h-f)/_,this._x=.25*_,this._y=(r+l)/_,this._z=(s+d)/_}else if(u>m){const _=2*Math.sqrt(1+u-i-m);this._w=(s-d)/_,this._x=(r+l)/_,this._y=.25*_,this._z=(f+h)/_}else{const _=2*Math.sqrt(1+m-i-u);this._w=(l-r)/_,this._x=(s+d)/_,this._y=(f+h)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,l=e._w,u=n._x,f=n._y,d=n._z,h=n._w;return this._x=i*h+l*u+r*d-s*f,this._y=r*h+l*f+s*u-i*d,this._z=s*h+l*d+i*f-r*u,this._w=l*h-i*u-r*f-s*d,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,l=this._w;let u=l*e._w+i*e._x+r*e._y+s*e._z;if(u<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,u=-u):this.copy(e),u>=1)return this._w=l,this._x=i,this._y=r,this._z=s,this;const f=1-u*u;if(f<=Number.EPSILON){const _=1-n;return this._w=_*l+n*this._w,this._x=_*i+n*this._x,this._y=_*r+n*this._y,this._z=_*s+n*this._z,this.normalize(),this}const d=Math.sqrt(f),h=Math.atan2(d,u),m=Math.sin((1-n)*h)/d,v=Math.sin(n*h)/d;return this._w=l*m+this._w*v,this._x=i*m+this._x*v,this._y=r*m+this._y*v,this._z=s*m+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,n=0,i=0){X.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(_x.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(_x.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,l=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*l,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*l,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*l,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,l=e.y,u=e.z,f=e.w,d=2*(l*r-u*i),h=2*(u*n-s*r),m=2*(s*i-l*n);return this.x=n+f*d+l*m-u*h,this.y=i+f*h+u*d-s*m,this.z=r+f*m+s*h-l*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=vt(this.x,e.x,n.x),this.y=vt(this.y,e.y,n.y),this.z=vt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=vt(this.x,e,n),this.y=vt(this.y,e,n),this.z=vt(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(vt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,l=n.x,u=n.y,f=n.z;return this.x=r*f-s*u,this.y=s*l-i*f,this.z=i*u-r*l,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Lp.copy(this).projectOnVector(e),this.sub(Lp)}reflect(e){return this.sub(Lp.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(vt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Lp=new X,_x=new Du;class ut{constructor(e,n,i,r,s,l,u,f,d){ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,l,u,f,d)}set(e,n,i,r,s,l,u,f,d){const h=this.elements;return h[0]=e,h[1]=r,h[2]=u,h[3]=n,h[4]=s,h[5]=f,h[6]=i,h[7]=l,h[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,l=i[0],u=i[3],f=i[6],d=i[1],h=i[4],m=i[7],v=i[2],_=i[5],x=i[8],w=r[0],E=r[3],g=r[6],S=r[1],M=r[4],A=r[7],I=r[2],N=r[5],L=r[8];return s[0]=l*w+u*S+f*I,s[3]=l*E+u*M+f*N,s[6]=l*g+u*A+f*L,s[1]=d*w+h*S+m*I,s[4]=d*E+h*M+m*N,s[7]=d*g+h*A+m*L,s[2]=v*w+_*S+x*I,s[5]=v*E+_*M+x*N,s[8]=v*g+_*A+x*L,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],l=e[4],u=e[5],f=e[6],d=e[7],h=e[8];return n*l*h-n*u*d-i*s*h+i*u*f+r*s*d-r*l*f}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],l=e[4],u=e[5],f=e[6],d=e[7],h=e[8],m=h*l-u*d,v=u*f-h*s,_=d*s-l*f,x=n*m+i*v+r*_;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/x;return e[0]=m*w,e[1]=(r*d-h*i)*w,e[2]=(u*i-r*l)*w,e[3]=v*w,e[4]=(h*n-r*f)*w,e[5]=(r*s-u*n)*w,e[6]=_*w,e[7]=(i*f-d*n)*w,e[8]=(l*n-i*s)*w,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,l,u){const f=Math.cos(s),d=Math.sin(s);return this.set(i*f,i*d,-i*(f*l+d*u)+l+e,-r*d,r*f,-r*(-d*l+f*u)+u+n,0,0,1),this}scale(e,n){return this.premultiply(Np.makeScale(e,n)),this}rotate(e){return this.premultiply(Np.makeRotation(-e)),this}translate(e,n){return this.premultiply(Np.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Np=new ut;function s1(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Mu(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function DR(){const t=Mu("canvas");return t.style.display="block",t}const yx={};function ba(t){t in yx||(yx[t]=!0,console.warn(t))}function LR(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function NR(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function IR(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const xx=new ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Sx=new ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function UR(){const t={enabled:!0,workingColorSpace:Vs,spaces:{},convert:function(r,s,l){return this.enabled===!1||s===l||!s||!l||(this.spaces[s].transfer===Vt&&(r.r=Kr(r.r),r.g=Kr(r.g),r.b=Kr(r.b)),this.spaces[s].primaries!==this.spaces[l].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[l].fromXYZ)),this.spaces[l].transfer===Vt&&(r.r=Fa(r.r),r.g=Fa(r.g),r.b=Fa(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===wr?vd:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,l){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[l].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return ba("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return ba("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Vs]:{primaries:e,whitePoint:i,transfer:vd,toXYZ:xx,fromXYZ:Sx,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Ot},outputColorSpaceConfig:{drawingBufferColorSpace:Ot}},[Ot]:{primaries:e,whitePoint:i,transfer:Vt,toXYZ:xx,fromXYZ:Sx,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Ot}}}),t}const Ut=UR();function Kr(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Fa(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let qo;class bR{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{qo===void 0&&(qo=Mu("canvas")),qo.width=e.width,qo.height=e.height;const r=qo.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=qo}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Mu("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let l=0;l<s.length;l++)s[l]=Kr(s[l]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Kr(n[i]/255)*255):n[i]=Kr(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let FR=0;class f0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:FR++}),this.uuid=il(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let l=0,u=r.length;l<u;l++)r[l].isDataTexture?s.push(Ip(r[l].image)):s.push(Ip(r[l]))}else s=Ip(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Ip(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?bR.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let OR=0;const Up=new X;class vn extends ss{constructor(e=vn.DEFAULT_IMAGE,n=vn.DEFAULT_MAPPING,i=yo,r=yo,s=hi,l=xo,u=ji,f=Rn,d=vn.DEFAULT_ANISOTROPY,h=wr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:OR++}),this.uuid=il(),this.name="",this.source=new f0(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=l,this.anisotropy=d,this.format=u,this.internalFormat=null,this.type=f,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Up).x}get height(){return this.source.getSize(Up).y}get depth(){return this.source.getSize(Up).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==qM)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case wg:e.x=e.x-Math.floor(e.x);break;case yo:e.x=e.x<0?0:1;break;case Ag:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case wg:e.y=e.y-Math.floor(e.y);break;case yo:e.y=e.y<0?0:1;break;case Ag:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}vn.DEFAULT_IMAGE=null;vn.DEFAULT_MAPPING=qM;vn.DEFAULT_ANISOTROPY=1;class Jt{constructor(e=0,n=0,i=0,r=1){Jt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,l=e.elements;return this.x=l[0]*n+l[4]*i+l[8]*r+l[12]*s,this.y=l[1]*n+l[5]*i+l[9]*r+l[13]*s,this.z=l[2]*n+l[6]*i+l[10]*r+l[14]*s,this.w=l[3]*n+l[7]*i+l[11]*r+l[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const f=e.elements,d=f[0],h=f[4],m=f[8],v=f[1],_=f[5],x=f[9],w=f[2],E=f[6],g=f[10];if(Math.abs(h-v)<.01&&Math.abs(m-w)<.01&&Math.abs(x-E)<.01){if(Math.abs(h+v)<.1&&Math.abs(m+w)<.1&&Math.abs(x+E)<.1&&Math.abs(d+_+g-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const M=(d+1)/2,A=(_+1)/2,I=(g+1)/2,N=(h+v)/4,L=(m+w)/4,O=(x+E)/4;return M>A&&M>I?M<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(M),r=N/i,s=L/i):A>I?A<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(A),i=N/r,s=O/r):I<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(I),i=L/s,r=O/s),this.set(i,r,s,n),this}let S=Math.sqrt((E-x)*(E-x)+(m-w)*(m-w)+(v-h)*(v-h));return Math.abs(S)<.001&&(S=1),this.x=(E-x)/S,this.y=(m-w)/S,this.z=(v-h)/S,this.w=Math.acos((d+_+g-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=vt(this.x,e.x,n.x),this.y=vt(this.y,e.y,n.y),this.z=vt(this.z,e.z,n.z),this.w=vt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=vt(this.x,e,n),this.y=vt(this.y,e,n),this.z=vt(this.z,e,n),this.w=vt(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(vt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class kR extends ss{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Jt(0,0,e,n),this.scissorTest=!1,this.viewport=new Jt(0,0,e,n);const r={width:e,height:n,depth:i.depth},s=new vn(r);this.textures=[];const l=i.count;for(let u=0;u<l;u++)this.textures[u]=s.clone(),this.textures[u].isRenderTargetTexture=!0,this.textures[u].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:hi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new f0(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ti extends kR{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class o1 extends vn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=ei,this.minFilter=ei,this.wrapR=yo,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class zR extends vn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=ei,this.minFilter=ei,this.wrapR=yo,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Lu{constructor(e=new X(1/0,1/0,1/0),n=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(er.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(er.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=er.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let l=0,u=s.count;l<u;l++)e.isMesh===!0?e.getVertexPosition(l,er):er.fromBufferAttribute(s,l),er.applyMatrix4(e.matrixWorld),this.expandByPoint(er);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Zc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Zc.copy(i.boundingBox)),Zc.applyMatrix4(e.matrixWorld),this.union(Zc)}const r=e.children;for(let s=0,l=r.length;s<l;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,er),er.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ll),$c.subVectors(this.max,Ll),Ko.subVectors(e.a,Ll),Qo.subVectors(e.b,Ll),Zo.subVectors(e.c,Ll),_s.subVectors(Qo,Ko),ys.subVectors(Zo,Qo),io.subVectors(Ko,Zo);let n=[0,-_s.z,_s.y,0,-ys.z,ys.y,0,-io.z,io.y,_s.z,0,-_s.x,ys.z,0,-ys.x,io.z,0,-io.x,-_s.y,_s.x,0,-ys.y,ys.x,0,-io.y,io.x,0];return!bp(n,Ko,Qo,Zo,$c)||(n=[1,0,0,0,1,0,0,0,1],!bp(n,Ko,Qo,Zo,$c))?!1:(Jc.crossVectors(_s,ys),n=[Jc.x,Jc.y,Jc.z],bp(n,Ko,Qo,Zo,$c))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,er).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(er).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(kr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),kr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),kr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),kr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),kr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),kr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),kr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),kr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(kr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const kr=[new X,new X,new X,new X,new X,new X,new X,new X],er=new X,Zc=new Lu,Ko=new X,Qo=new X,Zo=new X,_s=new X,ys=new X,io=new X,Ll=new X,$c=new X,Jc=new X,ro=new X;function bp(t,e,n,i,r){for(let s=0,l=t.length-3;s<=l;s+=3){ro.fromArray(t,s);const u=r.x*Math.abs(ro.x)+r.y*Math.abs(ro.y)+r.z*Math.abs(ro.z),f=e.dot(ro),d=n.dot(ro),h=i.dot(ro);if(Math.max(-Math.max(f,d,h),Math.min(f,d,h))>u)return!1}return!0}const BR=new Lu,Nl=new X,Fp=new X;class Nu{constructor(e=new X,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):BR.setFromPoints(e).getCenter(i);let r=0;for(let s=0,l=e.length;s<l;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Nl.subVectors(e,this.center);const n=Nl.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Nl,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fp.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Nl.copy(e.center).add(Fp)),this.expandByPoint(Nl.copy(e.center).sub(Fp))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const zr=new X,Op=new X,ef=new X,xs=new X,kp=new X,tf=new X,zp=new X;class Hd{constructor(e=new X,n=new X(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zr)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=zr.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(zr.copy(this.origin).addScaledVector(this.direction,n),zr.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Op.copy(e).add(n).multiplyScalar(.5),ef.copy(n).sub(e).normalize(),xs.copy(this.origin).sub(Op);const s=e.distanceTo(n)*.5,l=-this.direction.dot(ef),u=xs.dot(this.direction),f=-xs.dot(ef),d=xs.lengthSq(),h=Math.abs(1-l*l);let m,v,_,x;if(h>0)if(m=l*f-u,v=l*u-f,x=s*h,m>=0)if(v>=-x)if(v<=x){const w=1/h;m*=w,v*=w,_=m*(m+l*v+2*u)+v*(l*m+v+2*f)+d}else v=s,m=Math.max(0,-(l*v+u)),_=-m*m+v*(v+2*f)+d;else v=-s,m=Math.max(0,-(l*v+u)),_=-m*m+v*(v+2*f)+d;else v<=-x?(m=Math.max(0,-(-l*s+u)),v=m>0?-s:Math.min(Math.max(-s,-f),s),_=-m*m+v*(v+2*f)+d):v<=x?(m=0,v=Math.min(Math.max(-s,-f),s),_=v*(v+2*f)+d):(m=Math.max(0,-(l*s+u)),v=m>0?s:Math.min(Math.max(-s,-f),s),_=-m*m+v*(v+2*f)+d);else v=l>0?-s:s,m=Math.max(0,-(l*v+u)),_=-m*m+v*(v+2*f)+d;return i&&i.copy(this.origin).addScaledVector(this.direction,m),r&&r.copy(Op).addScaledVector(ef,v),_}intersectSphere(e,n){zr.subVectors(e.center,this.origin);const i=zr.dot(this.direction),r=zr.dot(zr)-i*i,s=e.radius*e.radius;if(r>s)return null;const l=Math.sqrt(s-r),u=i-l,f=i+l;return f<0?null:u<0?this.at(f,n):this.at(u,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,l,u,f;const d=1/this.direction.x,h=1/this.direction.y,m=1/this.direction.z,v=this.origin;return d>=0?(i=(e.min.x-v.x)*d,r=(e.max.x-v.x)*d):(i=(e.max.x-v.x)*d,r=(e.min.x-v.x)*d),h>=0?(s=(e.min.y-v.y)*h,l=(e.max.y-v.y)*h):(s=(e.max.y-v.y)*h,l=(e.min.y-v.y)*h),i>l||s>r||((s>i||isNaN(i))&&(i=s),(l<r||isNaN(r))&&(r=l),m>=0?(u=(e.min.z-v.z)*m,f=(e.max.z-v.z)*m):(u=(e.max.z-v.z)*m,f=(e.min.z-v.z)*m),i>f||u>r)||((u>i||i!==i)&&(i=u),(f<r||r!==r)&&(r=f),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,zr)!==null}intersectTriangle(e,n,i,r,s){kp.subVectors(n,e),tf.subVectors(i,e),zp.crossVectors(kp,tf);let l=this.direction.dot(zp),u;if(l>0){if(r)return null;u=1}else if(l<0)u=-1,l=-l;else return null;xs.subVectors(this.origin,e);const f=u*this.direction.dot(tf.crossVectors(xs,tf));if(f<0)return null;const d=u*this.direction.dot(kp.cross(xs));if(d<0||f+d>l)return null;const h=-u*xs.dot(zp);return h<0?null:this.at(h/l,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class qt{constructor(e,n,i,r,s,l,u,f,d,h,m,v,_,x,w,E){qt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,l,u,f,d,h,m,v,_,x,w,E)}set(e,n,i,r,s,l,u,f,d,h,m,v,_,x,w,E){const g=this.elements;return g[0]=e,g[4]=n,g[8]=i,g[12]=r,g[1]=s,g[5]=l,g[9]=u,g[13]=f,g[2]=d,g[6]=h,g[10]=m,g[14]=v,g[3]=_,g[7]=x,g[11]=w,g[15]=E,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/$o.setFromMatrixColumn(e,0).length(),s=1/$o.setFromMatrixColumn(e,1).length(),l=1/$o.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*l,n[9]=i[9]*l,n[10]=i[10]*l,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,l=Math.cos(i),u=Math.sin(i),f=Math.cos(r),d=Math.sin(r),h=Math.cos(s),m=Math.sin(s);if(e.order==="XYZ"){const v=l*h,_=l*m,x=u*h,w=u*m;n[0]=f*h,n[4]=-f*m,n[8]=d,n[1]=_+x*d,n[5]=v-w*d,n[9]=-u*f,n[2]=w-v*d,n[6]=x+_*d,n[10]=l*f}else if(e.order==="YXZ"){const v=f*h,_=f*m,x=d*h,w=d*m;n[0]=v+w*u,n[4]=x*u-_,n[8]=l*d,n[1]=l*m,n[5]=l*h,n[9]=-u,n[2]=_*u-x,n[6]=w+v*u,n[10]=l*f}else if(e.order==="ZXY"){const v=f*h,_=f*m,x=d*h,w=d*m;n[0]=v-w*u,n[4]=-l*m,n[8]=x+_*u,n[1]=_+x*u,n[5]=l*h,n[9]=w-v*u,n[2]=-l*d,n[6]=u,n[10]=l*f}else if(e.order==="ZYX"){const v=l*h,_=l*m,x=u*h,w=u*m;n[0]=f*h,n[4]=x*d-_,n[8]=v*d+w,n[1]=f*m,n[5]=w*d+v,n[9]=_*d-x,n[2]=-d,n[6]=u*f,n[10]=l*f}else if(e.order==="YZX"){const v=l*f,_=l*d,x=u*f,w=u*d;n[0]=f*h,n[4]=w-v*m,n[8]=x*m+_,n[1]=m,n[5]=l*h,n[9]=-u*h,n[2]=-d*h,n[6]=_*m+x,n[10]=v-w*m}else if(e.order==="XZY"){const v=l*f,_=l*d,x=u*f,w=u*d;n[0]=f*h,n[4]=-m,n[8]=d*h,n[1]=v*m+w,n[5]=l*h,n[9]=_*m-x,n[2]=x*m-_,n[6]=u*h,n[10]=w*m+v}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(HR,e,VR)}lookAt(e,n,i){const r=this.elements;return Mi.subVectors(e,n),Mi.lengthSq()===0&&(Mi.z=1),Mi.normalize(),Ss.crossVectors(i,Mi),Ss.lengthSq()===0&&(Math.abs(i.z)===1?Mi.x+=1e-4:Mi.z+=1e-4,Mi.normalize(),Ss.crossVectors(i,Mi)),Ss.normalize(),nf.crossVectors(Mi,Ss),r[0]=Ss.x,r[4]=nf.x,r[8]=Mi.x,r[1]=Ss.y,r[5]=nf.y,r[9]=Mi.y,r[2]=Ss.z,r[6]=nf.z,r[10]=Mi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,l=i[0],u=i[4],f=i[8],d=i[12],h=i[1],m=i[5],v=i[9],_=i[13],x=i[2],w=i[6],E=i[10],g=i[14],S=i[3],M=i[7],A=i[11],I=i[15],N=r[0],L=r[4],O=r[8],P=r[12],C=r[1],U=r[5],K=r[9],Y=r[13],se=r[2],le=r[6],ie=r[10],ce=r[14],b=r[3],j=r[7],q=r[11],oe=r[15];return s[0]=l*N+u*C+f*se+d*b,s[4]=l*L+u*U+f*le+d*j,s[8]=l*O+u*K+f*ie+d*q,s[12]=l*P+u*Y+f*ce+d*oe,s[1]=h*N+m*C+v*se+_*b,s[5]=h*L+m*U+v*le+_*j,s[9]=h*O+m*K+v*ie+_*q,s[13]=h*P+m*Y+v*ce+_*oe,s[2]=x*N+w*C+E*se+g*b,s[6]=x*L+w*U+E*le+g*j,s[10]=x*O+w*K+E*ie+g*q,s[14]=x*P+w*Y+E*ce+g*oe,s[3]=S*N+M*C+A*se+I*b,s[7]=S*L+M*U+A*le+I*j,s[11]=S*O+M*K+A*ie+I*q,s[15]=S*P+M*Y+A*ce+I*oe,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],l=e[1],u=e[5],f=e[9],d=e[13],h=e[2],m=e[6],v=e[10],_=e[14],x=e[3],w=e[7],E=e[11],g=e[15];return x*(+s*f*m-r*d*m-s*u*v+i*d*v+r*u*_-i*f*_)+w*(+n*f*_-n*d*v+s*l*v-r*l*_+r*d*h-s*f*h)+E*(+n*d*m-n*u*_-s*l*m+i*l*_+s*u*h-i*d*h)+g*(-r*u*h-n*f*m+n*u*v+r*l*m-i*l*v+i*f*h)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],l=e[4],u=e[5],f=e[6],d=e[7],h=e[8],m=e[9],v=e[10],_=e[11],x=e[12],w=e[13],E=e[14],g=e[15],S=m*E*d-w*v*d+w*f*_-u*E*_-m*f*g+u*v*g,M=x*v*d-h*E*d-x*f*_+l*E*_+h*f*g-l*v*g,A=h*w*d-x*m*d+x*u*_-l*w*_-h*u*g+l*m*g,I=x*m*f-h*w*f-x*u*v+l*w*v+h*u*E-l*m*E,N=n*S+i*M+r*A+s*I;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/N;return e[0]=S*L,e[1]=(w*v*s-m*E*s-w*r*_+i*E*_+m*r*g-i*v*g)*L,e[2]=(u*E*s-w*f*s+w*r*d-i*E*d-u*r*g+i*f*g)*L,e[3]=(m*f*s-u*v*s-m*r*d+i*v*d+u*r*_-i*f*_)*L,e[4]=M*L,e[5]=(h*E*s-x*v*s+x*r*_-n*E*_-h*r*g+n*v*g)*L,e[6]=(x*f*s-l*E*s-x*r*d+n*E*d+l*r*g-n*f*g)*L,e[7]=(l*v*s-h*f*s+h*r*d-n*v*d-l*r*_+n*f*_)*L,e[8]=A*L,e[9]=(x*m*s-h*w*s-x*i*_+n*w*_+h*i*g-n*m*g)*L,e[10]=(l*w*s-x*u*s+x*i*d-n*w*d-l*i*g+n*u*g)*L,e[11]=(h*u*s-l*m*s-h*i*d+n*m*d+l*i*_-n*u*_)*L,e[12]=I*L,e[13]=(h*w*r-x*m*r+x*i*v-n*w*v-h*i*E+n*m*E)*L,e[14]=(x*u*r-l*w*r-x*i*f+n*w*f+l*i*E-n*u*E)*L,e[15]=(l*m*r-h*u*r+h*i*f-n*m*f-l*i*v+n*u*v)*L,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,l=e.x,u=e.y,f=e.z,d=s*l,h=s*u;return this.set(d*l+i,d*u-r*f,d*f+r*u,0,d*u+r*f,h*u+i,h*f-r*l,0,d*f-r*u,h*f+r*l,s*f*f+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,l){return this.set(1,i,s,0,e,1,l,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,l=n._y,u=n._z,f=n._w,d=s+s,h=l+l,m=u+u,v=s*d,_=s*h,x=s*m,w=l*h,E=l*m,g=u*m,S=f*d,M=f*h,A=f*m,I=i.x,N=i.y,L=i.z;return r[0]=(1-(w+g))*I,r[1]=(_+A)*I,r[2]=(x-M)*I,r[3]=0,r[4]=(_-A)*N,r[5]=(1-(v+g))*N,r[6]=(E+S)*N,r[7]=0,r[8]=(x+M)*L,r[9]=(E-S)*L,r[10]=(1-(v+w))*L,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=$o.set(r[0],r[1],r[2]).length();const l=$o.set(r[4],r[5],r[6]).length(),u=$o.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],tr.copy(this);const d=1/s,h=1/l,m=1/u;return tr.elements[0]*=d,tr.elements[1]*=d,tr.elements[2]*=d,tr.elements[4]*=h,tr.elements[5]*=h,tr.elements[6]*=h,tr.elements[8]*=m,tr.elements[9]*=m,tr.elements[10]*=m,n.setFromRotationMatrix(tr),i.x=s,i.y=l,i.z=u,this}makePerspective(e,n,i,r,s,l,u=Yr){const f=this.elements,d=2*s/(n-e),h=2*s/(i-r),m=(n+e)/(n-e),v=(i+r)/(i-r);let _,x;if(u===Yr)_=-(l+s)/(l-s),x=-2*l*s/(l-s);else if(u===_d)_=-l/(l-s),x=-l*s/(l-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return f[0]=d,f[4]=0,f[8]=m,f[12]=0,f[1]=0,f[5]=h,f[9]=v,f[13]=0,f[2]=0,f[6]=0,f[10]=_,f[14]=x,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(e,n,i,r,s,l,u=Yr){const f=this.elements,d=1/(n-e),h=1/(i-r),m=1/(l-s),v=(n+e)*d,_=(i+r)*h;let x,w;if(u===Yr)x=(l+s)*m,w=-2*m;else if(u===_d)x=s*m,w=-1*m;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return f[0]=2*d,f[4]=0,f[8]=0,f[12]=-v,f[1]=0,f[5]=2*h,f[9]=0,f[13]=-_,f[2]=0,f[6]=0,f[10]=w,f[14]=-x,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const $o=new X,tr=new qt,HR=new X(0,0,0),VR=new X(1,1,1),Ss=new X,nf=new X,Mi=new X,Ex=new qt,Mx=new Du;class ns{constructor(e=0,n=0,i=0,r=ns.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],l=r[4],u=r[8],f=r[1],d=r[5],h=r[9],m=r[2],v=r[6],_=r[10];switch(n){case"XYZ":this._y=Math.asin(vt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-h,_),this._z=Math.atan2(-l,s)):(this._x=Math.atan2(v,d),this._z=0);break;case"YXZ":this._x=Math.asin(-vt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(u,_),this._z=Math.atan2(f,d)):(this._y=Math.atan2(-m,s),this._z=0);break;case"ZXY":this._x=Math.asin(vt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-m,_),this._z=Math.atan2(-l,d)):(this._y=0,this._z=Math.atan2(f,s));break;case"ZYX":this._y=Math.asin(-vt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(v,_),this._z=Math.atan2(f,s)):(this._x=0,this._z=Math.atan2(-l,d));break;case"YZX":this._z=Math.asin(vt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-h,d),this._y=Math.atan2(-m,s)):(this._x=0,this._y=Math.atan2(u,_));break;case"XZY":this._z=Math.asin(-vt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(v,d),this._y=Math.atan2(u,s)):(this._x=Math.atan2(-h,_),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Ex.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ex,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Mx.setFromEuler(this),this.setFromQuaternion(Mx,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ns.DEFAULT_ORDER="XYZ";class Oa{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let GR=0;const Tx=new X,Jo=new Du,Br=new qt,rf=new X,Il=new X,WR=new X,XR=new Du,wx=new X(1,0,0),Ax=new X(0,1,0),Cx=new X(0,0,1),Rx={type:"added"},jR={type:"removed"},ea={type:"childadded",child:null},Bp={type:"childremoved",child:null};class vi extends ss{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:GR++}),this.uuid=il(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vi.DEFAULT_UP.clone();const e=new X,n=new ns,i=new Du,r=new X(1,1,1);function s(){i.setFromEuler(n,!1)}function l(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new qt},normalMatrix:{value:new ut}}),this.matrix=new qt,this.matrixWorld=new qt,this.matrixAutoUpdate=vi.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=vi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Oa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Jo.setFromAxisAngle(e,n),this.quaternion.multiply(Jo),this}rotateOnWorldAxis(e,n){return Jo.setFromAxisAngle(e,n),this.quaternion.premultiply(Jo),this}rotateX(e){return this.rotateOnAxis(wx,e)}rotateY(e){return this.rotateOnAxis(Ax,e)}rotateZ(e){return this.rotateOnAxis(Cx,e)}translateOnAxis(e,n){return Tx.copy(e).applyQuaternion(this.quaternion),this.position.add(Tx.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(wx,e)}translateY(e){return this.translateOnAxis(Ax,e)}translateZ(e){return this.translateOnAxis(Cx,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Br.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?rf.copy(e):rf.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Il.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Br.lookAt(Il,rf,this.up):Br.lookAt(rf,Il,this.up),this.quaternion.setFromRotationMatrix(Br),r&&(Br.extractRotation(r.matrixWorld),Jo.setFromRotationMatrix(Br),this.quaternion.premultiply(Jo.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Rx),ea.child=e,this.dispatchEvent(ea),ea.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(jR),Bp.child=e,this.dispatchEvent(Bp),Bp.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Br.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Br.multiply(e.parent.matrixWorld)),e.applyMatrix4(Br),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Rx),ea.child=e,this.dispatchEvent(ea),ea.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const l=this.children[i].getObjectByProperty(e,n);if(l!==void 0)return l}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,l=r.length;s<l;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Il,e,WR),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Il,XR,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,l=r.length;s<l;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(u=>({...u,boundingBox:u.boundingBox?u.boundingBox.toJSON():void 0,boundingSphere:u.boundingSphere?u.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(u=>({...u})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(u,f){return u[f.uuid]===void 0&&(u[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const f=u.shapes;if(Array.isArray(f))for(let d=0,h=f.length;d<h;d++){const m=f[d];s(e.shapes,m)}else s(e.shapes,f)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let f=0,d=this.material.length;f<d;f++)u.push(s(e.materials,this.material[f]));r.material=u}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let u=0;u<this.children.length;u++)r.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let u=0;u<this.animations.length;u++){const f=this.animations[u];r.animations.push(s(e.animations,f))}}if(n){const u=l(e.geometries),f=l(e.materials),d=l(e.textures),h=l(e.images),m=l(e.shapes),v=l(e.skeletons),_=l(e.animations),x=l(e.nodes);u.length>0&&(i.geometries=u),f.length>0&&(i.materials=f),d.length>0&&(i.textures=d),h.length>0&&(i.images=h),m.length>0&&(i.shapes=m),v.length>0&&(i.skeletons=v),_.length>0&&(i.animations=_),x.length>0&&(i.nodes=x)}return i.object=r,i;function l(u){const f=[];for(const d in u){const h=u[d];delete h.metadata,f.push(h)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}vi.DEFAULT_UP=new X(0,1,0);vi.DEFAULT_MATRIX_AUTO_UPDATE=!0;vi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const nr=new X,Hr=new X,Hp=new X,Vr=new X,ta=new X,na=new X,Px=new X,Vp=new X,Gp=new X,Wp=new X,Xp=new Jt,jp=new Jt,Yp=new Jt;class or{constructor(e=new X,n=new X,i=new X){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),nr.subVectors(e,n),r.cross(nr);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){nr.subVectors(r,n),Hr.subVectors(i,n),Hp.subVectors(e,n);const l=nr.dot(nr),u=nr.dot(Hr),f=nr.dot(Hp),d=Hr.dot(Hr),h=Hr.dot(Hp),m=l*d-u*u;if(m===0)return s.set(0,0,0),null;const v=1/m,_=(d*f-u*h)*v,x=(l*h-u*f)*v;return s.set(1-_-x,x,_)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Vr)===null?!1:Vr.x>=0&&Vr.y>=0&&Vr.x+Vr.y<=1}static getInterpolation(e,n,i,r,s,l,u,f){return this.getBarycoord(e,n,i,r,Vr)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(s,Vr.x),f.addScaledVector(l,Vr.y),f.addScaledVector(u,Vr.z),f)}static getInterpolatedAttribute(e,n,i,r,s,l){return Xp.setScalar(0),jp.setScalar(0),Yp.setScalar(0),Xp.fromBufferAttribute(e,n),jp.fromBufferAttribute(e,i),Yp.fromBufferAttribute(e,r),l.setScalar(0),l.addScaledVector(Xp,s.x),l.addScaledVector(jp,s.y),l.addScaledVector(Yp,s.z),l}static isFrontFacing(e,n,i,r){return nr.subVectors(i,n),Hr.subVectors(e,n),nr.cross(Hr).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return nr.subVectors(this.c,this.b),Hr.subVectors(this.a,this.b),nr.cross(Hr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return or.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return or.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return or.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return or.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return or.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let l,u;ta.subVectors(r,i),na.subVectors(s,i),Vp.subVectors(e,i);const f=ta.dot(Vp),d=na.dot(Vp);if(f<=0&&d<=0)return n.copy(i);Gp.subVectors(e,r);const h=ta.dot(Gp),m=na.dot(Gp);if(h>=0&&m<=h)return n.copy(r);const v=f*m-h*d;if(v<=0&&f>=0&&h<=0)return l=f/(f-h),n.copy(i).addScaledVector(ta,l);Wp.subVectors(e,s);const _=ta.dot(Wp),x=na.dot(Wp);if(x>=0&&_<=x)return n.copy(s);const w=_*d-f*x;if(w<=0&&d>=0&&x<=0)return u=d/(d-x),n.copy(i).addScaledVector(na,u);const E=h*x-_*m;if(E<=0&&m-h>=0&&_-x>=0)return Px.subVectors(s,r),u=(m-h)/(m-h+(_-x)),n.copy(r).addScaledVector(Px,u);const g=1/(E+w+v);return l=w*g,u=v*g,n.copy(i).addScaledVector(ta,l).addScaledVector(na,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const a1={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Es={h:0,s:0,l:0},sf={h:0,s:0,l:0};function qp(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ct{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Ot){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ut.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=Ut.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ut.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=Ut.workingColorSpace){if(e=c0(e,1),n=vt(n,0,1),i=vt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,l=2*i-s;this.r=qp(l,s,e+1/3),this.g=qp(l,s,e),this.b=qp(l,s,e-1/3)}return Ut.colorSpaceToWorking(this,r),this}setStyle(e,n=Ot){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const l=r[1],u=r[2];switch(l){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],l=s.length;if(l===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(l===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Ot){const i=a1[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Kr(e.r),this.g=Kr(e.g),this.b=Kr(e.b),this}copyLinearToSRGB(e){return this.r=Fa(e.r),this.g=Fa(e.g),this.b=Fa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ot){return Ut.workingToColorSpace(Wn.copy(this),e),Math.round(vt(Wn.r*255,0,255))*65536+Math.round(vt(Wn.g*255,0,255))*256+Math.round(vt(Wn.b*255,0,255))}getHexString(e=Ot){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ut.workingColorSpace){Ut.workingToColorSpace(Wn.copy(this),n);const i=Wn.r,r=Wn.g,s=Wn.b,l=Math.max(i,r,s),u=Math.min(i,r,s);let f,d;const h=(u+l)/2;if(u===l)f=0,d=0;else{const m=l-u;switch(d=h<=.5?m/(l+u):m/(2-l-u),l){case i:f=(r-s)/m+(r<s?6:0);break;case r:f=(s-i)/m+2;break;case s:f=(i-r)/m+4;break}f/=6}return e.h=f,e.s=d,e.l=h,e}getRGB(e,n=Ut.workingColorSpace){return Ut.workingToColorSpace(Wn.copy(this),n),e.r=Wn.r,e.g=Wn.g,e.b=Wn.b,e}getStyle(e=Ot){Ut.workingToColorSpace(Wn.copy(this),e);const n=Wn.r,i=Wn.g,r=Wn.b;return e!==Ot?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Es),this.setHSL(Es.h+e,Es.s+n,Es.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Es),e.getHSL(sf);const i=nu(Es.h,sf.h,n),r=nu(Es.s,sf.s,n),s=nu(Es.l,sf.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Wn=new Ct;Ct.NAMES=a1;let YR=0;class js extends ss{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:YR++}),this.uuid=il(),this.name="",this.type="Material",this.blending=Ua,this.side=ts,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=pg,this.blendDst=mg,this.blendEquation=po,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ct(0,0,0),this.blendAlpha=0,this.depthFunc=ja,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=px,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yo,this.stencilZFail=Yo,this.stencilZPass=Yo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ua&&(i.blending=this.blending),this.side!==ts&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==pg&&(i.blendSrc=this.blendSrc),this.blendDst!==mg&&(i.blendDst=this.blendDst),this.blendEquation!==po&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ja&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==px&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yo&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Yo&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Yo&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const l=[];for(const u in s){const f=s[u];delete f.metadata,l.push(f)}return l}if(n){const s=r(e.textures),l=r(e.images);s.length>0&&(i.textures=s),l.length>0&&(i.images=l)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class l1 extends js{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ns,this.combine=jM,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const cn=new X,of=new nt;let qR=0;class fn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:qR++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=mx,this.updateRanges=[],this.gpuType=Ar,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)of.fromBufferAttribute(this,n),of.applyMatrix3(e),this.setXY(n,of.x,of.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)cn.fromBufferAttribute(this,n),cn.applyMatrix3(e),this.setXYZ(n,cn.x,cn.y,cn.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)cn.fromBufferAttribute(this,n),cn.applyMatrix4(e),this.setXYZ(n,cn.x,cn.y,cn.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)cn.fromBufferAttribute(this,n),cn.applyNormalMatrix(e),this.setXYZ(n,cn.x,cn.y,cn.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)cn.fromBufferAttribute(this,n),cn.transformDirection(e),this.setXYZ(n,cn.x,cn.y,cn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=fa(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Kn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=fa(n,this.array)),n}setX(e,n){return this.normalized&&(n=Kn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=fa(n,this.array)),n}setY(e,n){return this.normalized&&(n=Kn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=fa(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Kn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=fa(n,this.array)),n}setW(e,n){return this.normalized&&(n=Kn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Kn(n,this.array),i=Kn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Kn(n,this.array),i=Kn(i,this.array),r=Kn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Kn(n,this.array),i=Kn(i,this.array),r=Kn(r,this.array),s=Kn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==mx&&(e.usage=this.usage),e}}class u1 extends fn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class c1 extends fn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Qr extends fn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let KR=0;const Vi=new qt,Kp=new vi,ia=new X,Ti=new Lu,Ul=new Lu,Tn=new X;class fr extends ss{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:KR++}),this.uuid=il(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(s1(e)?c1:u1)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ut().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Vi.makeRotationFromQuaternion(e),this.applyMatrix4(Vi),this}rotateX(e){return Vi.makeRotationX(e),this.applyMatrix4(Vi),this}rotateY(e){return Vi.makeRotationY(e),this.applyMatrix4(Vi),this}rotateZ(e){return Vi.makeRotationZ(e),this.applyMatrix4(Vi),this}translate(e,n,i){return Vi.makeTranslation(e,n,i),this.applyMatrix4(Vi),this}scale(e,n,i){return Vi.makeScale(e,n,i),this.applyMatrix4(Vi),this}lookAt(e){return Kp.lookAt(e),Kp.updateMatrix(),this.applyMatrix4(Kp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ia).negate(),this.translate(ia.x,ia.y,ia.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const l=e[r];i.push(l.x,l.y,l.z||0)}this.setAttribute("position",new Qr(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Lu);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Ti.setFromBufferAttribute(s),this.morphTargetsRelative?(Tn.addVectors(this.boundingBox.min,Ti.min),this.boundingBox.expandByPoint(Tn),Tn.addVectors(this.boundingBox.max,Ti.max),this.boundingBox.expandByPoint(Tn)):(this.boundingBox.expandByPoint(Ti.min),this.boundingBox.expandByPoint(Ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nu);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){const i=this.boundingSphere.center;if(Ti.setFromBufferAttribute(e),n)for(let s=0,l=n.length;s<l;s++){const u=n[s];Ul.setFromBufferAttribute(u),this.morphTargetsRelative?(Tn.addVectors(Ti.min,Ul.min),Ti.expandByPoint(Tn),Tn.addVectors(Ti.max,Ul.max),Ti.expandByPoint(Tn)):(Ti.expandByPoint(Ul.min),Ti.expandByPoint(Ul.max))}Ti.getCenter(i);let r=0;for(let s=0,l=e.count;s<l;s++)Tn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Tn));if(n)for(let s=0,l=n.length;s<l;s++){const u=n[s],f=this.morphTargetsRelative;for(let d=0,h=u.count;d<h;d++)Tn.fromBufferAttribute(u,d),f&&(ia.fromBufferAttribute(e,d),Tn.add(ia)),r=Math.max(r,i.distanceToSquared(Tn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fn(new Float32Array(4*i.count),4));const l=this.getAttribute("tangent"),u=[],f=[];for(let O=0;O<i.count;O++)u[O]=new X,f[O]=new X;const d=new X,h=new X,m=new X,v=new nt,_=new nt,x=new nt,w=new X,E=new X;function g(O,P,C){d.fromBufferAttribute(i,O),h.fromBufferAttribute(i,P),m.fromBufferAttribute(i,C),v.fromBufferAttribute(s,O),_.fromBufferAttribute(s,P),x.fromBufferAttribute(s,C),h.sub(d),m.sub(d),_.sub(v),x.sub(v);const U=1/(_.x*x.y-x.x*_.y);isFinite(U)&&(w.copy(h).multiplyScalar(x.y).addScaledVector(m,-_.y).multiplyScalar(U),E.copy(m).multiplyScalar(_.x).addScaledVector(h,-x.x).multiplyScalar(U),u[O].add(w),u[P].add(w),u[C].add(w),f[O].add(E),f[P].add(E),f[C].add(E))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let O=0,P=S.length;O<P;++O){const C=S[O],U=C.start,K=C.count;for(let Y=U,se=U+K;Y<se;Y+=3)g(e.getX(Y+0),e.getX(Y+1),e.getX(Y+2))}const M=new X,A=new X,I=new X,N=new X;function L(O){I.fromBufferAttribute(r,O),N.copy(I);const P=u[O];M.copy(P),M.sub(I.multiplyScalar(I.dot(P))).normalize(),A.crossVectors(N,P);const U=A.dot(f[O])<0?-1:1;l.setXYZW(O,M.x,M.y,M.z,U)}for(let O=0,P=S.length;O<P;++O){const C=S[O],U=C.start,K=C.count;for(let Y=U,se=U+K;Y<se;Y+=3)L(e.getX(Y+0)),L(e.getX(Y+1)),L(e.getX(Y+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new fn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let v=0,_=i.count;v<_;v++)i.setXYZ(v,0,0,0);const r=new X,s=new X,l=new X,u=new X,f=new X,d=new X,h=new X,m=new X;if(e)for(let v=0,_=e.count;v<_;v+=3){const x=e.getX(v+0),w=e.getX(v+1),E=e.getX(v+2);r.fromBufferAttribute(n,x),s.fromBufferAttribute(n,w),l.fromBufferAttribute(n,E),h.subVectors(l,s),m.subVectors(r,s),h.cross(m),u.fromBufferAttribute(i,x),f.fromBufferAttribute(i,w),d.fromBufferAttribute(i,E),u.add(h),f.add(h),d.add(h),i.setXYZ(x,u.x,u.y,u.z),i.setXYZ(w,f.x,f.y,f.z),i.setXYZ(E,d.x,d.y,d.z)}else for(let v=0,_=n.count;v<_;v+=3)r.fromBufferAttribute(n,v+0),s.fromBufferAttribute(n,v+1),l.fromBufferAttribute(n,v+2),h.subVectors(l,s),m.subVectors(r,s),h.cross(m),i.setXYZ(v+0,h.x,h.y,h.z),i.setXYZ(v+1,h.x,h.y,h.z),i.setXYZ(v+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Tn.fromBufferAttribute(e,n),Tn.normalize(),e.setXYZ(n,Tn.x,Tn.y,Tn.z)}toNonIndexed(){function e(u,f){const d=u.array,h=u.itemSize,m=u.normalized,v=new d.constructor(f.length*h);let _=0,x=0;for(let w=0,E=f.length;w<E;w++){u.isInterleavedBufferAttribute?_=f[w]*u.data.stride+u.offset:_=f[w]*h;for(let g=0;g<h;g++)v[x++]=d[_++]}return new fn(v,h,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new fr,i=this.index.array,r=this.attributes;for(const u in r){const f=r[u],d=e(f,i);n.setAttribute(u,d)}const s=this.morphAttributes;for(const u in s){const f=[],d=s[u];for(let h=0,m=d.length;h<m;h++){const v=d[h],_=e(v,i);f.push(_)}n.morphAttributes[u]=f}n.morphTargetsRelative=this.morphTargetsRelative;const l=this.groups;for(let u=0,f=l.length;u<f;u++){const d=l[u];n.addGroup(d.start,d.count,d.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const d in f)f[d]!==void 0&&(e[d]=f[d]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const f in i){const d=i[f];e.data.attributes[f]=d.toJSON(e.data)}const r={};let s=!1;for(const f in this.morphAttributes){const d=this.morphAttributes[f],h=[];for(let m=0,v=d.length;m<v;m++){const _=d[m];h.push(_.toJSON(e.data))}h.length>0&&(r[f]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const l=this.groups;l.length>0&&(e.data.groups=JSON.parse(JSON.stringify(l)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere=u.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const d in r){const h=r[d];this.setAttribute(d,h.clone(n))}const s=e.morphAttributes;for(const d in s){const h=[],m=s[d];for(let v=0,_=m.length;v<_;v++)h.push(m[v].clone(n));this.morphAttributes[d]=h}this.morphTargetsRelative=e.morphTargetsRelative;const l=e.groups;for(let d=0,h=l.length;d<h;d++){const m=l[d];this.addGroup(m.start,m.count,m.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Dx=new qt,so=new Hd,af=new Nu,Lx=new X,lf=new X,uf=new X,cf=new X,Qp=new X,ff=new X,Nx=new X,df=new X;class ar extends vi{constructor(e=new fr,n=new l1){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,l=r.length;s<l;s++){const u=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,l=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const u=this.morphTargetInfluences;if(s&&u){ff.set(0,0,0);for(let f=0,d=s.length;f<d;f++){const h=u[f],m=s[f];h!==0&&(Qp.fromBufferAttribute(m,e),l?ff.addScaledVector(Qp,h):ff.addScaledVector(Qp.sub(n),h))}n.add(ff)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),af.copy(i.boundingSphere),af.applyMatrix4(s),so.copy(e.ray).recast(e.near),!(af.containsPoint(so.origin)===!1&&(so.intersectSphere(af,Lx)===null||so.origin.distanceToSquared(Lx)>(e.far-e.near)**2))&&(Dx.copy(s).invert(),so.copy(e.ray).applyMatrix4(Dx),!(i.boundingBox!==null&&so.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,so)))}_computeIntersections(e,n,i){let r;const s=this.geometry,l=this.material,u=s.index,f=s.attributes.position,d=s.attributes.uv,h=s.attributes.uv1,m=s.attributes.normal,v=s.groups,_=s.drawRange;if(u!==null)if(Array.isArray(l))for(let x=0,w=v.length;x<w;x++){const E=v[x],g=l[E.materialIndex],S=Math.max(E.start,_.start),M=Math.min(u.count,Math.min(E.start+E.count,_.start+_.count));for(let A=S,I=M;A<I;A+=3){const N=u.getX(A),L=u.getX(A+1),O=u.getX(A+2);r=hf(this,g,e,i,d,h,m,N,L,O),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=E.materialIndex,n.push(r))}}else{const x=Math.max(0,_.start),w=Math.min(u.count,_.start+_.count);for(let E=x,g=w;E<g;E+=3){const S=u.getX(E),M=u.getX(E+1),A=u.getX(E+2);r=hf(this,l,e,i,d,h,m,S,M,A),r&&(r.faceIndex=Math.floor(E/3),n.push(r))}}else if(f!==void 0)if(Array.isArray(l))for(let x=0,w=v.length;x<w;x++){const E=v[x],g=l[E.materialIndex],S=Math.max(E.start,_.start),M=Math.min(f.count,Math.min(E.start+E.count,_.start+_.count));for(let A=S,I=M;A<I;A+=3){const N=A,L=A+1,O=A+2;r=hf(this,g,e,i,d,h,m,N,L,O),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=E.materialIndex,n.push(r))}}else{const x=Math.max(0,_.start),w=Math.min(f.count,_.start+_.count);for(let E=x,g=w;E<g;E+=3){const S=E,M=E+1,A=E+2;r=hf(this,l,e,i,d,h,m,S,M,A),r&&(r.faceIndex=Math.floor(E/3),n.push(r))}}}}function QR(t,e,n,i,r,s,l,u){let f;if(e.side===An?f=i.intersectTriangle(l,s,r,!0,u):f=i.intersectTriangle(r,s,l,e.side===ts,u),f===null)return null;df.copy(u),df.applyMatrix4(t.matrixWorld);const d=n.ray.origin.distanceTo(df);return d<n.near||d>n.far?null:{distance:d,point:df.clone(),object:t}}function hf(t,e,n,i,r,s,l,u,f,d){t.getVertexPosition(u,lf),t.getVertexPosition(f,uf),t.getVertexPosition(d,cf);const h=QR(t,e,n,i,lf,uf,cf,Nx);if(h){const m=new X;or.getBarycoord(Nx,lf,uf,cf,m),r&&(h.uv=or.getInterpolatedAttribute(r,u,f,d,m,new nt)),s&&(h.uv1=or.getInterpolatedAttribute(s,u,f,d,m,new nt)),l&&(h.normal=or.getInterpolatedAttribute(l,u,f,d,m,new X),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const v={a:u,b:f,c:d,normal:new X,materialIndex:0};or.getNormal(lf,uf,cf,v.normal),h.face=v,h.barycoord=m}return h}class Iu extends fr{constructor(e=1,n=1,i=1,r=1,s=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:l};const u=this;r=Math.floor(r),s=Math.floor(s),l=Math.floor(l);const f=[],d=[],h=[],m=[];let v=0,_=0;x("z","y","x",-1,-1,i,n,e,l,s,0),x("z","y","x",1,-1,i,n,-e,l,s,1),x("x","z","y",1,1,e,i,n,r,l,2),x("x","z","y",1,-1,e,i,-n,r,l,3),x("x","y","z",1,-1,e,n,i,r,s,4),x("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(f),this.setAttribute("position",new Qr(d,3)),this.setAttribute("normal",new Qr(h,3)),this.setAttribute("uv",new Qr(m,2));function x(w,E,g,S,M,A,I,N,L,O,P){const C=A/L,U=I/O,K=A/2,Y=I/2,se=N/2,le=L+1,ie=O+1;let ce=0,b=0;const j=new X;for(let q=0;q<ie;q++){const oe=q*U-Y;for(let ye=0;ye<le;ye++){const qe=ye*C-K;j[w]=qe*S,j[E]=oe*M,j[g]=se,d.push(j.x,j.y,j.z),j[w]=0,j[E]=0,j[g]=N>0?1:-1,h.push(j.x,j.y,j.z),m.push(ye/L),m.push(1-q/O),ce+=1}}for(let q=0;q<O;q++)for(let oe=0;oe<L;oe++){const ye=v+oe+le*q,qe=v+oe+le*(q+1),te=v+(oe+1)+le*(q+1),pe=v+(oe+1)+le*q;f.push(ye,qe,pe),f.push(qe,te,pe),b+=6}u.addGroup(_,b,P),_+=b,v+=ce}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Iu(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Za(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Qn(t){const e={};for(let n=0;n<t.length;n++){const i=Za(t[n]);for(const r in i)e[r]=i[r]}return e}function ZR(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function f1(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ut.workingColorSpace}const d1={clone:Za,merge:Qn};var $R=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,JR=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pn extends js{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$R,this.fragmentShader=JR,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Za(e.uniforms),this.uniformsGroups=ZR(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const l=this.uniforms[r].value;l&&l.isTexture?n.uniforms[r]={type:"t",value:l.toJSON(e).uuid}:l&&l.isColor?n.uniforms[r]={type:"c",value:l.getHex()}:l&&l.isVector2?n.uniforms[r]={type:"v2",value:l.toArray()}:l&&l.isVector3?n.uniforms[r]={type:"v3",value:l.toArray()}:l&&l.isVector4?n.uniforms[r]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?n.uniforms[r]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?n.uniforms[r]={type:"m4",value:l.toArray()}:n.uniforms[r]={value:l}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Vd extends vi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qt,this.projectionMatrix=new qt,this.projectionMatrixInverse=new qt,this.coordinateSystem=Yr}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ms=new X,Ix=new nt,Ux=new nt;class fi extends Vd{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Eu*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(tu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Eu*2*Math.atan(Math.tan(tu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Ms.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ms.x,Ms.y).multiplyScalar(-e/Ms.z),Ms.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ms.x,Ms.y).multiplyScalar(-e/Ms.z)}getViewSize(e,n){return this.getViewBounds(e,Ix,Ux),n.subVectors(Ux,Ix)}setViewOffset(e,n,i,r,s,l){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(tu*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const l=this.view;if(this.view!==null&&this.view.enabled){const f=l.fullWidth,d=l.fullHeight;s+=l.offsetX*r/f,n-=l.offsetY*i/d,r*=l.width/f,i*=l.height/d}const u=this.filmOffset;u!==0&&(s+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const ra=-90,sa=1;class e2 extends vi{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new fi(ra,sa,e,n);r.layers=this.layers,this.add(r);const s=new fi(ra,sa,e,n);s.layers=this.layers,this.add(s);const l=new fi(ra,sa,e,n);l.layers=this.layers,this.add(l);const u=new fi(ra,sa,e,n);u.layers=this.layers,this.add(u);const f=new fi(ra,sa,e,n);f.layers=this.layers,this.add(f);const d=new fi(ra,sa,e,n);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,l,u,f]=n;for(const d of n)this.remove(d);if(e===Yr)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),l.up.set(0,0,1),l.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===_d)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),l.up.set(0,0,-1),l.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of n)this.add(d),d.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,l,u,f,d,h]=this.children,m=e.getRenderTarget(),v=e.getActiveCubeFace(),_=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const w=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,l),e.setRenderTarget(i,2,r),e.render(n,u),e.setRenderTarget(i,3,r),e.render(n,f),e.setRenderTarget(i,4,r),e.render(n,d),i.texture.generateMipmaps=w,e.setRenderTarget(i,5,r),e.render(n,h),e.setRenderTarget(m,v,_),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class h1 extends vn{constructor(e=[],n=Ya,i,r,s,l,u,f,d,h){super(e,n,i,r,s,l,u,f,d,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class t2 extends ti{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new h1(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Iu(5,5,5),s=new Pn({name:"CubemapFromEquirect",uniforms:Za(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:An,blending:Jn});s.uniforms.tEquirect.value=n;const l=new ar(r,s),u=n.minFilter;return n.minFilter===xo&&(n.minFilter=hi),new e2(1,10,this).update(e,l),n.minFilter=u,l.geometry.dispose(),l.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let l=0;l<6;l++)e.setRenderTarget(this,l),e.clear(n,i,r);e.setRenderTarget(s)}}class Wl extends vi{constructor(){super(),this.isGroup=!0,this.type="Group"}}const n2={type:"move"};class Zp{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,l=null;const u=this._targetRay,f=this._grip,d=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(d&&e.hand){l=!0;for(const w of e.hand.values()){const E=n.getJointPose(w,i),g=this._getHandJoint(d,w);E!==null&&(g.matrix.fromArray(E.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=E.radius),g.visible=E!==null}const h=d.joints["index-finger-tip"],m=d.joints["thumb-tip"],v=h.position.distanceTo(m.position),_=.02,x=.005;d.inputState.pinching&&v>_+x?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&v<=_-x&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(f.matrix.fromArray(s.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,s.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(s.linearVelocity)):f.hasLinearVelocity=!1,s.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(s.angularVelocity)):f.hasAngularVelocity=!1));u!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(u.matrix.fromArray(r.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,r.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(r.linearVelocity)):u.hasLinearVelocity=!1,r.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(r.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(n2)))}return u!==null&&(u.visible=r!==null),f!==null&&(f.visible=s!==null),d!==null&&(d.visible=l!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Wl;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}let Jg=class extends vi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ns,this.environmentIntensity=1,this.environmentRotation=new ns,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}};const $p=new X,i2=new X,r2=new ut;let fo=class{constructor(e=new X(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=$p.subVectors(i,n).cross(i2.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta($p),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||r2.getNormalMatrix(e),r=this.coplanarPoint($p).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}};const oo=new Nu,s2=new nt(.5,.5),pf=new X;class p1{constructor(e=new fo,n=new fo,i=new fo,r=new fo,s=new fo,l=new fo){this.planes=[e,n,i,r,s,l]}set(e,n,i,r,s,l){const u=this.planes;return u[0].copy(e),u[1].copy(n),u[2].copy(i),u[3].copy(r),u[4].copy(s),u[5].copy(l),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Yr){const i=this.planes,r=e.elements,s=r[0],l=r[1],u=r[2],f=r[3],d=r[4],h=r[5],m=r[6],v=r[7],_=r[8],x=r[9],w=r[10],E=r[11],g=r[12],S=r[13],M=r[14],A=r[15];if(i[0].setComponents(f-s,v-d,E-_,A-g).normalize(),i[1].setComponents(f+s,v+d,E+_,A+g).normalize(),i[2].setComponents(f+l,v+h,E+x,A+S).normalize(),i[3].setComponents(f-l,v-h,E-x,A-S).normalize(),i[4].setComponents(f-u,v-m,E-w,A-M).normalize(),n===Yr)i[5].setComponents(f+u,v+m,E+w,A+M).normalize();else if(n===_d)i[5].setComponents(u,m,w,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),oo.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),oo.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(oo)}intersectsSprite(e){oo.center.set(0,0,0);const n=s2.distanceTo(e.center);return oo.radius=.7071067811865476+n,oo.applyMatrix4(e.matrixWorld),this.intersectsSphere(oo)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(pf.x=r.normal.x>0?e.max.x:e.min.x,pf.y=r.normal.y>0?e.max.y:e.min.y,pf.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(pf)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class o2 extends js{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ct(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const yd=new X,xd=new X,bx=new qt,bl=new Hd,mf=new Nu,Jp=new X,Fx=new X;class a2 extends vi{constructor(e=new fr,n=new o2){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)yd.fromBufferAttribute(n,r-1),xd.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=yd.distanceTo(xd);e.setAttribute("lineDistance",new Qr(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,l=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),mf.copy(i.boundingSphere),mf.applyMatrix4(r),mf.radius+=s,e.ray.intersectsSphere(mf)===!1)return;bx.copy(r).invert(),bl.copy(e.ray).applyMatrix4(bx);const u=s/((this.scale.x+this.scale.y+this.scale.z)/3),f=u*u,d=this.isLineSegments?2:1,h=i.index,v=i.attributes.position;if(h!==null){const _=Math.max(0,l.start),x=Math.min(h.count,l.start+l.count);for(let w=_,E=x-1;w<E;w+=d){const g=h.getX(w),S=h.getX(w+1),M=gf(this,e,bl,f,g,S,w);M&&n.push(M)}if(this.isLineLoop){const w=h.getX(x-1),E=h.getX(_),g=gf(this,e,bl,f,w,E,x-1);g&&n.push(g)}}else{const _=Math.max(0,l.start),x=Math.min(v.count,l.start+l.count);for(let w=_,E=x-1;w<E;w+=d){const g=gf(this,e,bl,f,w,w+1,w);g&&n.push(g)}if(this.isLineLoop){const w=gf(this,e,bl,f,x-1,_,x-1);w&&n.push(w)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,l=r.length;s<l;s++){const u=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=s}}}}}function gf(t,e,n,i,r,s,l){const u=t.geometry.attributes.position;if(yd.fromBufferAttribute(u,r),xd.fromBufferAttribute(u,s),n.distanceSqToSegment(yd,xd,Jp,Fx)>i)return;Jp.applyMatrix4(t.matrixWorld);const d=e.ray.origin.distanceTo(Jp);if(!(d<e.near||d>e.far))return{distance:d,point:Fx.clone().applyMatrix4(t.matrixWorld),index:l,face:null,faceIndex:null,barycoord:null,object:t}}const Ox=new X,kx=new X;class l2 extends a2{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)Ox.fromBufferAttribute(n,r),kx.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Ox.distanceTo(kx);e.setAttribute("lineDistance",new Qr(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class d0 extends vn{constructor(e,n,i=Hs,r,s,l,u=ei,f=ei,d,h=Su,m=1){if(h!==Su&&h!==Qa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:n,depth:m};super(v,r,s,l,u,f,h,i,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new f0(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class u2{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let l=1;l<=e;l++)i=this.getPoint(l/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n=null){const i=this.getLengths();let r=0;const s=i.length;let l;n?l=n:l=e*i[s-1];let u=0,f=s-1,d;for(;u<=f;)if(r=Math.floor(u+(f-u)/2),d=i[r]-l,d<0)u=r+1;else if(d>0)f=r-1;else{f=r;break}if(r=f,i[r]===l)return r/(s-1);const h=i[r],v=i[r+1]-h,_=(l-h)/v;return(r+_)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const l=this.getPoint(r),u=this.getPoint(s),f=n||(l.isVector2?new nt:new X);return f.copy(u).sub(l).normalize(),f}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n=!1){const i=new X,r=[],s=[],l=[],u=new X,f=new qt;for(let _=0;_<=e;_++){const x=_/e;r[_]=this.getTangentAt(x,new X)}s[0]=new X,l[0]=new X;let d=Number.MAX_VALUE;const h=Math.abs(r[0].x),m=Math.abs(r[0].y),v=Math.abs(r[0].z);h<=d&&(d=h,i.set(1,0,0)),m<=d&&(d=m,i.set(0,1,0)),v<=d&&i.set(0,0,1),u.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],u),l[0].crossVectors(r[0],s[0]);for(let _=1;_<=e;_++){if(s[_]=s[_-1].clone(),l[_]=l[_-1].clone(),u.crossVectors(r[_-1],r[_]),u.length()>Number.EPSILON){u.normalize();const x=Math.acos(vt(r[_-1].dot(r[_]),-1,1));s[_].applyMatrix4(f.makeRotationAxis(u,x))}l[_].crossVectors(r[_],s[_])}if(n===!0){let _=Math.acos(vt(s[0].dot(s[e]),-1,1));_/=e,r[0].dot(u.crossVectors(s[0],s[e]))>0&&(_=-_);for(let x=1;x<=e;x++)s[x].applyMatrix4(f.makeRotationAxis(r[x],_*x)),l[x].crossVectors(r[x],s[x])}return{tangents:r,normals:s,binormals:l}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function h0(){let t=0,e=0,n=0,i=0;function r(s,l,u,f){t=s,e=u,n=-3*s+3*l-2*u-f,i=2*s-2*l+u+f}return{initCatmullRom:function(s,l,u,f,d){r(l,u,d*(u-s),d*(f-l))},initNonuniformCatmullRom:function(s,l,u,f,d,h,m){let v=(l-s)/d-(u-s)/(d+h)+(u-l)/h,_=(u-l)/h-(f-l)/(h+m)+(f-u)/m;v*=h,_*=h,r(l,u,v,_)},calc:function(s){const l=s*s,u=l*s;return t+e*s+n*l+i*u}}}const vf=new X,em=new h0,tm=new h0,nm=new h0;class c2 extends u2{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new X){const i=n,r=this.points,s=r.length,l=(s-(this.closed?0:1))*e;let u=Math.floor(l),f=l-u;this.closed?u+=u>0?0:(Math.floor(Math.abs(u)/s)+1)*s:f===0&&u===s-1&&(u=s-2,f=1);let d,h;this.closed||u>0?d=r[(u-1)%s]:(vf.subVectors(r[0],r[1]).add(r[0]),d=vf);const m=r[u%s],v=r[(u+1)%s];if(this.closed||u+2<s?h=r[(u+2)%s]:(vf.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=vf),this.curveType==="centripetal"||this.curveType==="chordal"){const _=this.curveType==="chordal"?.5:.25;let x=Math.pow(d.distanceToSquared(m),_),w=Math.pow(m.distanceToSquared(v),_),E=Math.pow(v.distanceToSquared(h),_);w<1e-4&&(w=1),x<1e-4&&(x=w),E<1e-4&&(E=w),em.initNonuniformCatmullRom(d.x,m.x,v.x,h.x,x,w,E),tm.initNonuniformCatmullRom(d.y,m.y,v.y,h.y,x,w,E),nm.initNonuniformCatmullRom(d.z,m.z,v.z,h.z,x,w,E)}else this.curveType==="catmullrom"&&(em.initCatmullRom(d.x,m.x,v.x,h.x,this.tension),tm.initCatmullRom(d.y,m.y,v.y,h.y,this.tension),nm.initCatmullRom(d.z,m.z,v.z,h.z,this.tension));return i.set(em.calc(f),tm.calc(f),nm.calc(f)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new X().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}class Uu extends fr{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,l=n/2,u=Math.floor(i),f=Math.floor(r),d=u+1,h=f+1,m=e/u,v=n/f,_=[],x=[],w=[],E=[];for(let g=0;g<h;g++){const S=g*v-l;for(let M=0;M<d;M++){const A=M*m-s;x.push(A,-S,0),w.push(0,0,1),E.push(M/u),E.push(1-g/f)}}for(let g=0;g<f;g++)for(let S=0;S<u;S++){const M=S+d*g,A=S+d*(g+1),I=S+1+d*(g+1),N=S+1+d*g;_.push(M,A,N),_.push(A,I,N)}this.setIndex(_),this.setAttribute("position",new Qr(x,3)),this.setAttribute("normal",new Qr(w,3)),this.setAttribute("uv",new Qr(E,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Uu(e.width,e.height,e.widthSegments,e.heightSegments)}}class f2 extends js{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=i1,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class d2 extends js{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rs,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class h2 extends js{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const im={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class p2{constructor(e,n,i){const r=this;let s=!1,l=0,u=0,f;const d=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(h){u++,s===!1&&r.onStart!==void 0&&r.onStart(h,l,u),s=!0},this.itemEnd=function(h){l++,r.onProgress!==void 0&&r.onProgress(h,l,u),l===u&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return f?f(h):h},this.setURLModifier=function(h){return f=h,this},this.addHandler=function(h,m){return d.push(h,m),this},this.removeHandler=function(h){const m=d.indexOf(h);return m!==-1&&d.splice(m,2),this},this.getHandler=function(h){for(let m=0,v=d.length;m<v;m+=2){const _=d[m],x=d[m+1];if(_.global&&(_.lastIndex=0),_.test(h))return x}return null}}}const m2=new p2;class p0{constructor(e){this.manager=e!==void 0?e:m2,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}p0.DEFAULT_MATERIAL_NAME="__DEFAULT";const oa=new WeakMap;class g2 extends p0{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,l=im.get(`image:${e}`);if(l!==void 0){if(l.complete===!0)s.manager.itemStart(e),setTimeout(function(){n&&n(l),s.manager.itemEnd(e)},0);else{let m=oa.get(l);m===void 0&&(m=[],oa.set(l,m)),m.push({onLoad:n,onError:r})}return l}const u=Mu("img");function f(){h(),n&&n(this);const m=oa.get(this)||[];for(let v=0;v<m.length;v++){const _=m[v];_.onLoad&&_.onLoad(this)}oa.delete(this),s.manager.itemEnd(e)}function d(m){h(),r&&r(m),im.remove(`image:${e}`);const v=oa.get(this)||[];for(let _=0;_<v.length;_++){const x=v[_];x.onError&&x.onError(m)}oa.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){u.removeEventListener("load",f,!1),u.removeEventListener("error",d,!1)}return u.addEventListener("load",f,!1),u.addEventListener("error",d,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(u.crossOrigin=this.crossOrigin),im.add(`image:${e}`,u),s.manager.itemStart(e),u.src=e,u}}class m0 extends p0{constructor(e){super(e)}load(e,n,i,r){const s=new vn,l=new g2(this.manager);return l.setCrossOrigin(this.crossOrigin),l.setPath(this.path),l.load(e,function(u){s.image=u,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class m1 extends Vd{constructor(e=-1,n=1,i=1,r=-1,s=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=l,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,l=i+e,u=r+n,f=r-n;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=d*this.view.offsetX,l=s+d*this.view.width,u-=h*this.view.offsetY,f=u-h*this.view.height}this.projectionMatrix.makeOrthographic(s,l,u,f,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class v2 extends fi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class _2{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}class ct{constructor(e){this.value=e}clone(){return new ct(this.value.clone===void 0?this.value:this.value.clone())}}const zx=new qt;class y2{constructor(e,n,i=0,r=1/0){this.ray=new Hd(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new Oa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return zx.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(zx),this}intersectObject(e,n=!0,i=[]){return ev(e,this,i,n),i.sort(Bx),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)ev(e[r],this,i,n);return i.sort(Bx),i}}function Bx(t,e){return t.distance-e.distance}function ev(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let l=0,u=s.length;l<u;l++)ev(s[l],e,n,!0)}}function Hx(t,e,n,i){const r=x2(i);switch(n){case $M:return t*e;case e1:return t*e/r.components*r.byteLength;case a0:return t*e/r.components*r.byteLength;case t1:return t*e*2/r.components*r.byteLength;case l0:return t*e*2/r.components*r.byteLength;case JM:return t*e*3/r.components*r.byteLength;case ji:return t*e*4/r.components*r.byteLength;case u0:return t*e*4/r.components*r.byteLength;case kf:case zf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Bf:case Hf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Rg:case Dg:return Math.max(t,16)*Math.max(e,8)/4;case Cg:case Pg:return Math.max(t,8)*Math.max(e,8)/2;case Lg:case Ng:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Ig:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ug:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case bg:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Fg:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Og:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case kg:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case zg:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Bg:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Hg:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Vg:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Gg:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Wg:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Xg:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case jg:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Yg:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Vf:case qg:case Kg:return Math.ceil(t/4)*Math.ceil(e/4)*16;case n1:case Qg:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Zg:case $g:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function x2(t){switch(t){case Rn:case KM:return{byteLength:1,components:1};case xu:case QM:case nl:return{byteLength:2,components:1};case s0:case o0:return{byteLength:2,components:4};case Hs:case r0:case Ar:return{byteLength:4,components:1};case ZM:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Pu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Pu);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function g1(){let t=null,e=!1,n=null,i=null;function r(s,l){n(s,l),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function S2(t){const e=new WeakMap;function n(u,f){const d=u.array,h=u.usage,m=d.byteLength,v=t.createBuffer();t.bindBuffer(f,v),t.bufferData(f,d,h),u.onUploadCallback();let _;if(d instanceof Float32Array)_=t.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)_=t.HALF_FLOAT;else if(d instanceof Uint16Array)u.isFloat16BufferAttribute?_=t.HALF_FLOAT:_=t.UNSIGNED_SHORT;else if(d instanceof Int16Array)_=t.SHORT;else if(d instanceof Uint32Array)_=t.UNSIGNED_INT;else if(d instanceof Int32Array)_=t.INT;else if(d instanceof Int8Array)_=t.BYTE;else if(d instanceof Uint8Array)_=t.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)_=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:v,type:_,bytesPerElement:d.BYTES_PER_ELEMENT,version:u.version,size:m}}function i(u,f,d){const h=f.array,m=f.updateRanges;if(t.bindBuffer(d,u),m.length===0)t.bufferSubData(d,0,h);else{m.sort((_,x)=>_.start-x.start);let v=0;for(let _=1;_<m.length;_++){const x=m[v],w=m[_];w.start<=x.start+x.count+1?x.count=Math.max(x.count,w.start+w.count-x.start):(++v,m[v]=w)}m.length=v+1;for(let _=0,x=m.length;_<x;_++){const w=m[_];t.bufferSubData(d,w.start*h.BYTES_PER_ELEMENT,h,w.start,w.count)}f.clearUpdateRanges()}f.onUploadCallback()}function r(u){return u.isInterleavedBufferAttribute&&(u=u.data),e.get(u)}function s(u){u.isInterleavedBufferAttribute&&(u=u.data);const f=e.get(u);f&&(t.deleteBuffer(f.buffer),e.delete(u))}function l(u,f){if(u.isInterleavedBufferAttribute&&(u=u.data),u.isGLBufferAttribute){const h=e.get(u);(!h||h.version<u.version)&&e.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}const d=e.get(u);if(d===void 0)e.set(u,n(u,f));else if(d.version<u.version){if(d.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(d.buffer,u,f),d.version=u.version}}return{get:r,remove:s,update:l}}var E2=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,M2=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,T2=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,w2=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,A2=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,C2=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,R2=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,P2=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,D2=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,L2=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,N2=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,I2=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,U2=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,b2=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,F2=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,O2=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,k2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,z2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,B2=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,H2=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,V2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,G2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,W2=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,X2=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,j2=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Y2=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,q2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,K2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Q2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Z2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$2="gl_FragColor = linearToOutputTexel( gl_FragColor );",J2=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,eP=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,tP=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,nP=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,iP=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rP=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,sP=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,oP=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,aP=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lP=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,uP=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,cP=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fP=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dP=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hP=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,pP=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,mP=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gP=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vP=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_P=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yP=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,xP=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,SP=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,EP=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,MP=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,TP=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wP=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,AP=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,CP=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,RP=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,PP=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,DP=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,LP=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,NP=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,IP=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,UP=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,bP=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,FP=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,OP=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,kP=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zP=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,BP=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,HP=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,VP=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,GP=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,WP=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,XP=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jP=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,YP=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qP=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,KP=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,QP=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,ZP=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$P=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,JP=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,eD=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tD=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nD=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,iD=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,rD=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,sD=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,oD=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,aD=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lD=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,uD=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cD=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,fD=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dD=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hD=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pD=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,mD=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,gD=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,vD=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_D=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,yD=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,xD=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const SD=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ED=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,MD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,TD=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,AD=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CD=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,RD=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,PD=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,DD=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,LD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ND=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ID=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,UD=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bD=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,FD=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OD=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kD=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zD=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,BD=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HD=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,VD=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,GD=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,WD=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XD=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,jD=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YD=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qD=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KD=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,QD=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ZD=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$D=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,JD=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,e3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ht={alphahash_fragment:E2,alphahash_pars_fragment:M2,alphamap_fragment:T2,alphamap_pars_fragment:w2,alphatest_fragment:A2,alphatest_pars_fragment:C2,aomap_fragment:R2,aomap_pars_fragment:P2,batching_pars_vertex:D2,batching_vertex:L2,begin_vertex:N2,beginnormal_vertex:I2,bsdfs:U2,iridescence_fragment:b2,bumpmap_pars_fragment:F2,clipping_planes_fragment:O2,clipping_planes_pars_fragment:k2,clipping_planes_pars_vertex:z2,clipping_planes_vertex:B2,color_fragment:H2,color_pars_fragment:V2,color_pars_vertex:G2,color_vertex:W2,common:X2,cube_uv_reflection_fragment:j2,defaultnormal_vertex:Y2,displacementmap_pars_vertex:q2,displacementmap_vertex:K2,emissivemap_fragment:Q2,emissivemap_pars_fragment:Z2,colorspace_fragment:$2,colorspace_pars_fragment:J2,envmap_fragment:eP,envmap_common_pars_fragment:tP,envmap_pars_fragment:nP,envmap_pars_vertex:iP,envmap_physical_pars_fragment:pP,envmap_vertex:rP,fog_vertex:sP,fog_pars_vertex:oP,fog_fragment:aP,fog_pars_fragment:lP,gradientmap_pars_fragment:uP,lightmap_pars_fragment:cP,lights_lambert_fragment:fP,lights_lambert_pars_fragment:dP,lights_pars_begin:hP,lights_toon_fragment:mP,lights_toon_pars_fragment:gP,lights_phong_fragment:vP,lights_phong_pars_fragment:_P,lights_physical_fragment:yP,lights_physical_pars_fragment:xP,lights_fragment_begin:SP,lights_fragment_maps:EP,lights_fragment_end:MP,logdepthbuf_fragment:TP,logdepthbuf_pars_fragment:wP,logdepthbuf_pars_vertex:AP,logdepthbuf_vertex:CP,map_fragment:RP,map_pars_fragment:PP,map_particle_fragment:DP,map_particle_pars_fragment:LP,metalnessmap_fragment:NP,metalnessmap_pars_fragment:IP,morphinstance_vertex:UP,morphcolor_vertex:bP,morphnormal_vertex:FP,morphtarget_pars_vertex:OP,morphtarget_vertex:kP,normal_fragment_begin:zP,normal_fragment_maps:BP,normal_pars_fragment:HP,normal_pars_vertex:VP,normal_vertex:GP,normalmap_pars_fragment:WP,clearcoat_normal_fragment_begin:XP,clearcoat_normal_fragment_maps:jP,clearcoat_pars_fragment:YP,iridescence_pars_fragment:qP,opaque_fragment:KP,packing:QP,premultiplied_alpha_fragment:ZP,project_vertex:$P,dithering_fragment:JP,dithering_pars_fragment:eD,roughnessmap_fragment:tD,roughnessmap_pars_fragment:nD,shadowmap_pars_fragment:iD,shadowmap_pars_vertex:rD,shadowmap_vertex:sD,shadowmask_pars_fragment:oD,skinbase_vertex:aD,skinning_pars_vertex:lD,skinning_vertex:uD,skinnormal_vertex:cD,specularmap_fragment:fD,specularmap_pars_fragment:dD,tonemapping_fragment:hD,tonemapping_pars_fragment:pD,transmission_fragment:mD,transmission_pars_fragment:gD,uv_pars_fragment:vD,uv_pars_vertex:_D,uv_vertex:yD,worldpos_vertex:xD,background_vert:SD,background_frag:ED,backgroundCube_vert:MD,backgroundCube_frag:TD,cube_vert:wD,cube_frag:AD,depth_vert:CD,depth_frag:RD,distanceRGBA_vert:PD,distanceRGBA_frag:DD,equirect_vert:LD,equirect_frag:ND,linedashed_vert:ID,linedashed_frag:UD,meshbasic_vert:bD,meshbasic_frag:FD,meshlambert_vert:OD,meshlambert_frag:kD,meshmatcap_vert:zD,meshmatcap_frag:BD,meshnormal_vert:HD,meshnormal_frag:VD,meshphong_vert:GD,meshphong_frag:WD,meshphysical_vert:XD,meshphysical_frag:jD,meshtoon_vert:YD,meshtoon_frag:qD,points_vert:KD,points_frag:QD,shadow_vert:ZD,shadow_frag:$D,sprite_vert:JD,sprite_frag:e3},we={common:{diffuse:{value:new Ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new Ct(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},Mr={basic:{uniforms:Qn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:Qn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new Ct(0)}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:Qn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new Ct(0)},specular:{value:new Ct(1118481)},shininess:{value:30}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:Qn([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new Ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:Qn([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new Ct(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:Qn([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:Qn([we.points,we.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:Qn([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:Qn([we.common,we.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:Qn([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:Qn([we.sprite,we.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distanceRGBA:{uniforms:Qn([we.common,we.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distanceRGBA_vert,fragmentShader:ht.distanceRGBA_frag},shadow:{uniforms:Qn([we.lights,we.fog,{color:{value:new Ct(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};Mr.physical={uniforms:Qn([Mr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new Ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new Ct(0)},specularColor:{value:new Ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};const _f={r:0,b:0,g:0},ao=new ns,t3=new qt;function n3(t,e,n,i,r,s,l){const u=new Ct(0);let f=s===!0?0:1,d,h,m=null,v=0,_=null;function x(M){let A=M.isScene===!0?M.background:null;return A&&A.isTexture&&(A=(M.backgroundBlurriness>0?n:e).get(A)),A}function w(M){let A=!1;const I=x(M);I===null?g(u,f):I&&I.isColor&&(g(I,1),A=!0);const N=t.xr.getEnvironmentBlendMode();N==="additive"?i.buffers.color.setClear(0,0,0,1,l):N==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,l),(t.autoClear||A)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function E(M,A){const I=x(A);I&&(I.isCubeTexture||I.mapping===Bd)?(h===void 0&&(h=new ar(new Iu(1,1,1),new Pn({name:"BackgroundCubeMaterial",uniforms:Za(Mr.backgroundCube.uniforms),vertexShader:Mr.backgroundCube.vertexShader,fragmentShader:Mr.backgroundCube.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(N,L,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),ao.copy(A.backgroundRotation),ao.x*=-1,ao.y*=-1,ao.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(ao.y*=-1,ao.z*=-1),h.material.uniforms.envMap.value=I,h.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(t3.makeRotationFromEuler(ao)),h.material.toneMapped=Ut.getTransfer(I.colorSpace)!==Vt,(m!==I||v!==I.version||_!==t.toneMapping)&&(h.material.needsUpdate=!0,m=I,v=I.version,_=t.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):I&&I.isTexture&&(d===void 0&&(d=new ar(new Uu(2,2),new Pn({name:"BackgroundMaterial",uniforms:Za(Mr.background.uniforms),vertexShader:Mr.background.vertexShader,fragmentShader:Mr.background.fragmentShader,side:ts,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(d)),d.material.uniforms.t2D.value=I,d.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,d.material.toneMapped=Ut.getTransfer(I.colorSpace)!==Vt,I.matrixAutoUpdate===!0&&I.updateMatrix(),d.material.uniforms.uvTransform.value.copy(I.matrix),(m!==I||v!==I.version||_!==t.toneMapping)&&(d.material.needsUpdate=!0,m=I,v=I.version,_=t.toneMapping),d.layers.enableAll(),M.unshift(d,d.geometry,d.material,0,0,null))}function g(M,A){M.getRGB(_f,f1(t)),i.buffers.color.setClear(_f.r,_f.g,_f.b,A,l)}function S(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return u},setClearColor:function(M,A=1){u.set(M),f=A,g(u,f)},getClearAlpha:function(){return f},setClearAlpha:function(M){f=M,g(u,f)},render:w,addToRenderList:E,dispose:S}}function i3(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=v(null);let s=r,l=!1;function u(C,U,K,Y,se){let le=!1;const ie=m(Y,K,U);s!==ie&&(s=ie,d(s.object)),le=_(C,Y,K,se),le&&x(C,Y,K,se),se!==null&&e.update(se,t.ELEMENT_ARRAY_BUFFER),(le||l)&&(l=!1,A(C,U,K,Y),se!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(se).buffer))}function f(){return t.createVertexArray()}function d(C){return t.bindVertexArray(C)}function h(C){return t.deleteVertexArray(C)}function m(C,U,K){const Y=K.wireframe===!0;let se=i[C.id];se===void 0&&(se={},i[C.id]=se);let le=se[U.id];le===void 0&&(le={},se[U.id]=le);let ie=le[Y];return ie===void 0&&(ie=v(f()),le[Y]=ie),ie}function v(C){const U=[],K=[],Y=[];for(let se=0;se<n;se++)U[se]=0,K[se]=0,Y[se]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:K,attributeDivisors:Y,object:C,attributes:{},index:null}}function _(C,U,K,Y){const se=s.attributes,le=U.attributes;let ie=0;const ce=K.getAttributes();for(const b in ce)if(ce[b].location>=0){const q=se[b];let oe=le[b];if(oe===void 0&&(b==="instanceMatrix"&&C.instanceMatrix&&(oe=C.instanceMatrix),b==="instanceColor"&&C.instanceColor&&(oe=C.instanceColor)),q===void 0||q.attribute!==oe||oe&&q.data!==oe.data)return!0;ie++}return s.attributesNum!==ie||s.index!==Y}function x(C,U,K,Y){const se={},le=U.attributes;let ie=0;const ce=K.getAttributes();for(const b in ce)if(ce[b].location>=0){let q=le[b];q===void 0&&(b==="instanceMatrix"&&C.instanceMatrix&&(q=C.instanceMatrix),b==="instanceColor"&&C.instanceColor&&(q=C.instanceColor));const oe={};oe.attribute=q,q&&q.data&&(oe.data=q.data),se[b]=oe,ie++}s.attributes=se,s.attributesNum=ie,s.index=Y}function w(){const C=s.newAttributes;for(let U=0,K=C.length;U<K;U++)C[U]=0}function E(C){g(C,0)}function g(C,U){const K=s.newAttributes,Y=s.enabledAttributes,se=s.attributeDivisors;K[C]=1,Y[C]===0&&(t.enableVertexAttribArray(C),Y[C]=1),se[C]!==U&&(t.vertexAttribDivisor(C,U),se[C]=U)}function S(){const C=s.newAttributes,U=s.enabledAttributes;for(let K=0,Y=U.length;K<Y;K++)U[K]!==C[K]&&(t.disableVertexAttribArray(K),U[K]=0)}function M(C,U,K,Y,se,le,ie){ie===!0?t.vertexAttribIPointer(C,U,K,se,le):t.vertexAttribPointer(C,U,K,Y,se,le)}function A(C,U,K,Y){w();const se=Y.attributes,le=K.getAttributes(),ie=U.defaultAttributeValues;for(const ce in le){const b=le[ce];if(b.location>=0){let j=se[ce];if(j===void 0&&(ce==="instanceMatrix"&&C.instanceMatrix&&(j=C.instanceMatrix),ce==="instanceColor"&&C.instanceColor&&(j=C.instanceColor)),j!==void 0){const q=j.normalized,oe=j.itemSize,ye=e.get(j);if(ye===void 0)continue;const qe=ye.buffer,te=ye.type,pe=ye.bytesPerElement,Ae=te===t.INT||te===t.UNSIGNED_INT||j.gpuType===r0;if(j.isInterleavedBufferAttribute){const xe=j.data,Ye=xe.stride,Et=j.offset;if(xe.isInstancedInterleavedBuffer){for(let Ze=0;Ze<b.locationSize;Ze++)g(b.location+Ze,xe.meshPerAttribute);C.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let Ze=0;Ze<b.locationSize;Ze++)E(b.location+Ze);t.bindBuffer(t.ARRAY_BUFFER,qe);for(let Ze=0;Ze<b.locationSize;Ze++)M(b.location+Ze,oe/b.locationSize,te,q,Ye*pe,(Et+oe/b.locationSize*Ze)*pe,Ae)}else{if(j.isInstancedBufferAttribute){for(let xe=0;xe<b.locationSize;xe++)g(b.location+xe,j.meshPerAttribute);C.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let xe=0;xe<b.locationSize;xe++)E(b.location+xe);t.bindBuffer(t.ARRAY_BUFFER,qe);for(let xe=0;xe<b.locationSize;xe++)M(b.location+xe,oe/b.locationSize,te,q,oe*pe,oe/b.locationSize*xe*pe,Ae)}}else if(ie!==void 0){const q=ie[ce];if(q!==void 0)switch(q.length){case 2:t.vertexAttrib2fv(b.location,q);break;case 3:t.vertexAttrib3fv(b.location,q);break;case 4:t.vertexAttrib4fv(b.location,q);break;default:t.vertexAttrib1fv(b.location,q)}}}}S()}function I(){O();for(const C in i){const U=i[C];for(const K in U){const Y=U[K];for(const se in Y)h(Y[se].object),delete Y[se];delete U[K]}delete i[C]}}function N(C){if(i[C.id]===void 0)return;const U=i[C.id];for(const K in U){const Y=U[K];for(const se in Y)h(Y[se].object),delete Y[se];delete U[K]}delete i[C.id]}function L(C){for(const U in i){const K=i[U];if(K[C.id]===void 0)continue;const Y=K[C.id];for(const se in Y)h(Y[se].object),delete Y[se];delete K[C.id]}}function O(){P(),l=!0,s!==r&&(s=r,d(s.object))}function P(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:u,reset:O,resetDefaultState:P,dispose:I,releaseStatesOfGeometry:N,releaseStatesOfProgram:L,initAttributes:w,enableAttribute:E,disableUnusedAttributes:S}}function r3(t,e,n){let i;function r(d){i=d}function s(d,h){t.drawArrays(i,d,h),n.update(h,i,1)}function l(d,h,m){m!==0&&(t.drawArraysInstanced(i,d,h,m),n.update(h,i,m))}function u(d,h,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,d,0,h,0,m);let _=0;for(let x=0;x<m;x++)_+=h[x];n.update(_,i,1)}function f(d,h,m,v){if(m===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let x=0;x<d.length;x++)l(d[x],h[x],v[x]);else{_.multiDrawArraysInstancedWEBGL(i,d,0,h,0,v,0,m);let x=0;for(let w=0;w<m;w++)x+=h[w]*v[w];n.update(x,i,1)}}this.setMode=r,this.render=s,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function s3(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function l(L){return!(L!==ji&&i.convert(L)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function u(L){const O=L===nl&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==Rn&&i.convert(L)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==Ar&&!O)}function f(L){if(L==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=n.precision!==void 0?n.precision:"highp";const h=f(d);h!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",h,"instead."),d=h);const m=n.logarithmicDepthBuffer===!0,v=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),_=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=t.getParameter(t.MAX_TEXTURE_SIZE),E=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),g=t.getParameter(t.MAX_VERTEX_ATTRIBS),S=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),M=t.getParameter(t.MAX_VARYING_VECTORS),A=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),I=x>0,N=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:f,textureFormatReadable:l,textureTypeReadable:u,precision:d,logarithmicDepthBuffer:m,reverseDepthBuffer:v,maxTextures:_,maxVertexTextures:x,maxTextureSize:w,maxCubemapSize:E,maxAttributes:g,maxVertexUniforms:S,maxVaryings:M,maxFragmentUniforms:A,vertexTextures:I,maxSamples:N}}function o3(t){const e=this;let n=null,i=0,r=!1,s=!1;const l=new fo,u=new ut,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(m,v){const _=m.length!==0||v||i!==0||r;return r=v,i=m.length,_},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(m,v){n=h(m,v,0)},this.setState=function(m,v,_){const x=m.clippingPlanes,w=m.clipIntersection,E=m.clipShadows,g=t.get(m);if(!r||x===null||x.length===0||s&&!E)s?h(null):d();else{const S=s?0:i,M=S*4;let A=g.clippingState||null;f.value=A,A=h(x,v,M,_);for(let I=0;I!==M;++I)A[I]=n[I];g.clippingState=A,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=S}};function d(){f.value!==n&&(f.value=n,f.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(m,v,_,x){const w=m!==null?m.length:0;let E=null;if(w!==0){if(E=f.value,x!==!0||E===null){const g=_+w*4,S=v.matrixWorldInverse;u.getNormalMatrix(S),(E===null||E.length<g)&&(E=new Float32Array(g));for(let M=0,A=_;M!==w;++M,A+=4)l.copy(m[M]).applyMatrix4(S,u),l.normal.toArray(E,A),E[A+3]=l.constant}f.value=E,f.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,E}}function a3(t){let e=new WeakMap;function n(l,u){return u===Mg?l.mapping=Ya:u===Tg&&(l.mapping=qa),l}function i(l){if(l&&l.isTexture){const u=l.mapping;if(u===Mg||u===Tg)if(e.has(l)){const f=e.get(l).texture;return n(f,l.mapping)}else{const f=l.image;if(f&&f.height>0){const d=new t2(f.height);return d.fromEquirectangularTexture(t,l),e.set(l,d),l.addEventListener("dispose",r),n(d.texture,l.mapping)}else return null}}return l}function r(l){const u=l.target;u.removeEventListener("dispose",r);const f=e.get(u);f!==void 0&&(e.delete(u),f.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const Aa=4,Vx=[.125,.215,.35,.446,.526,.582],mo=20,rm=new m1,Gx=new Ct;let sm=null,om=0,am=0,lm=!1;const ho=(1+Math.sqrt(5))/2,aa=1/ho,Wx=[new X(-ho,aa,0),new X(ho,aa,0),new X(-aa,0,ho),new X(aa,0,ho),new X(0,ho,-aa),new X(0,ho,aa),new X(-1,1,-1),new X(1,1,-1),new X(-1,1,1),new X(1,1,1)],l3=new X;class Xx{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100,s={}){const{size:l=256,position:u=l3}=s;sm=this._renderer.getRenderTarget(),om=this._renderer.getActiveCubeFace(),am=this._renderer.getActiveMipmapLevel(),lm=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(l);const f=this._allocateTargets();return f.depthBuffer=!0,this._sceneToCubeUV(e,i,r,f,u),n>0&&this._blur(f,0,0,n),this._applyPMREM(f),this._cleanup(f),f}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(sm,om,am),this._renderer.xr.enabled=lm,e.scissorTest=!1,yf(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ya||e.mapping===qa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),sm=this._renderer.getRenderTarget(),om=this._renderer.getActiveCubeFace(),am=this._renderer.getActiveMipmapLevel(),lm=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:hi,minFilter:hi,generateMipmaps:!1,type:nl,format:ji,colorSpace:Vs,depthBuffer:!1},r=jx(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jx(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=u3(s)),this._blurMaterial=c3(s,e,n)}return r}_compileMaterial(e){const n=new ar(this._lodPlanes[0],e);this._renderer.compile(n,rm)}_sceneToCubeUV(e,n,i,r,s){const f=new fi(90,1,n,i),d=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],m=this._renderer,v=m.autoClear,_=m.toneMapping;m.getClearColor(Gx),m.toneMapping=Pr,m.autoClear=!1;const x=new l1({name:"PMREM.Background",side:An,depthWrite:!1,depthTest:!1}),w=new ar(new Iu,x);let E=!1;const g=e.background;g?g.isColor&&(x.color.copy(g),e.background=null,E=!0):(x.color.copy(Gx),E=!0);for(let S=0;S<6;S++){const M=S%3;M===0?(f.up.set(0,d[S],0),f.position.set(s.x,s.y,s.z),f.lookAt(s.x+h[S],s.y,s.z)):M===1?(f.up.set(0,0,d[S]),f.position.set(s.x,s.y,s.z),f.lookAt(s.x,s.y+h[S],s.z)):(f.up.set(0,d[S],0),f.position.set(s.x,s.y,s.z),f.lookAt(s.x,s.y,s.z+h[S]));const A=this._cubeSize;yf(r,M*A,S>2?A:0,A,A),m.setRenderTarget(r),E&&m.render(w,f),m.render(e,f)}w.geometry.dispose(),w.material.dispose(),m.toneMapping=_,m.autoClear=v,e.background=g}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Ya||e.mapping===qa;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=qx()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Yx());const s=r?this._cubemapMaterial:this._equirectMaterial,l=new ar(this._lodPlanes[0],s),u=s.uniforms;u.envMap.value=e;const f=this._cubeSize;yf(n,0,0,3*f,2*f),i.setRenderTarget(n),i.render(l,rm)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const l=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),u=Wx[(r-s-1)%Wx.length];this._blur(e,s-1,s,l,u)}n.autoClear=i}_blur(e,n,i,r,s){const l=this._pingPongRenderTarget;this._halfBlur(e,l,n,i,r,"latitudinal",s),this._halfBlur(l,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,l,u){const f=this._renderer,d=this._blurMaterial;l!=="latitudinal"&&l!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,m=new ar(this._lodPlanes[r],d),v=d.uniforms,_=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*_):2*Math.PI/(2*mo-1),w=s/x,E=isFinite(s)?1+Math.floor(h*w):mo;E>mo&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${E} samples when the maximum is set to ${mo}`);const g=[];let S=0;for(let L=0;L<mo;++L){const O=L/w,P=Math.exp(-O*O/2);g.push(P),L===0?S+=P:L<E&&(S+=2*P)}for(let L=0;L<g.length;L++)g[L]=g[L]/S;v.envMap.value=e.texture,v.samples.value=E,v.weights.value=g,v.latitudinal.value=l==="latitudinal",u&&(v.poleAxis.value=u);const{_lodMax:M}=this;v.dTheta.value=x,v.mipInt.value=M-i;const A=this._sizeLods[r],I=3*A*(r>M-Aa?r-M+Aa:0),N=4*(this._cubeSize-A);yf(n,I,N,3*A,2*A),f.setRenderTarget(n),f.render(m,rm)}}function u3(t){const e=[],n=[],i=[];let r=t;const s=t-Aa+1+Vx.length;for(let l=0;l<s;l++){const u=Math.pow(2,r);n.push(u);let f=1/u;l>t-Aa?f=Vx[l-t+Aa-1]:l===0&&(f=0),i.push(f);const d=1/(u-2),h=-d,m=1+d,v=[h,h,m,h,m,m,h,h,m,m,h,m],_=6,x=6,w=3,E=2,g=1,S=new Float32Array(w*x*_),M=new Float32Array(E*x*_),A=new Float32Array(g*x*_);for(let N=0;N<_;N++){const L=N%3*2/3-1,O=N>2?0:-1,P=[L,O,0,L+2/3,O,0,L+2/3,O+1,0,L,O,0,L+2/3,O+1,0,L,O+1,0];S.set(P,w*x*N),M.set(v,E*x*N);const C=[N,N,N,N,N,N];A.set(C,g*x*N)}const I=new fr;I.setAttribute("position",new fn(S,w)),I.setAttribute("uv",new fn(M,E)),I.setAttribute("faceIndex",new fn(A,g)),e.push(I),r>Aa&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function jx(t,e,n){const i=new ti(t,e,n);return i.texture.mapping=Bd,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function yf(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function c3(t,e,n){const i=new Float32Array(mo),r=new X(0,1,0);return new Pn({name:"SphericalGaussianBlur",defines:{n:mo,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:g0(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function Yx(){return new Pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:g0(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function qx(){return new Pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:g0(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function g0(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function f3(t){let e=new WeakMap,n=null;function i(u){if(u&&u.isTexture){const f=u.mapping,d=f===Mg||f===Tg,h=f===Ya||f===qa;if(d||h){let m=e.get(u);const v=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==v)return n===null&&(n=new Xx(t)),m=d?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{const _=u.image;return d&&_&&_.height>0||h&&_&&r(_)?(n===null&&(n=new Xx(t)),m=d?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",s),m.texture):null}}}return u}function r(u){let f=0;const d=6;for(let h=0;h<d;h++)u[h]!==void 0&&f++;return f===d}function s(u){const f=u.target;f.removeEventListener("dispose",s);const d=e.get(f);d!==void 0&&(e.delete(f),d.dispose())}function l(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:l}}function d3(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&ba("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function h3(t,e,n,i){const r={},s=new WeakMap;function l(m){const v=m.target;v.index!==null&&e.remove(v.index);for(const x in v.attributes)e.remove(v.attributes[x]);v.removeEventListener("dispose",l),delete r[v.id];const _=s.get(v);_&&(e.remove(_),s.delete(v)),i.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,n.memory.geometries--}function u(m,v){return r[v.id]===!0||(v.addEventListener("dispose",l),r[v.id]=!0,n.memory.geometries++),v}function f(m){const v=m.attributes;for(const _ in v)e.update(v[_],t.ARRAY_BUFFER)}function d(m){const v=[],_=m.index,x=m.attributes.position;let w=0;if(_!==null){const S=_.array;w=_.version;for(let M=0,A=S.length;M<A;M+=3){const I=S[M+0],N=S[M+1],L=S[M+2];v.push(I,N,N,L,L,I)}}else if(x!==void 0){const S=x.array;w=x.version;for(let M=0,A=S.length/3-1;M<A;M+=3){const I=M+0,N=M+1,L=M+2;v.push(I,N,N,L,L,I)}}else return;const E=new(s1(v)?c1:u1)(v,1);E.version=w;const g=s.get(m);g&&e.remove(g),s.set(m,E)}function h(m){const v=s.get(m);if(v){const _=m.index;_!==null&&v.version<_.version&&d(m)}else d(m);return s.get(m)}return{get:u,update:f,getWireframeAttribute:h}}function p3(t,e,n){let i;function r(v){i=v}let s,l;function u(v){s=v.type,l=v.bytesPerElement}function f(v,_){t.drawElements(i,_,s,v*l),n.update(_,i,1)}function d(v,_,x){x!==0&&(t.drawElementsInstanced(i,_,s,v*l,x),n.update(_,i,x))}function h(v,_,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,_,0,s,v,0,x);let E=0;for(let g=0;g<x;g++)E+=_[g];n.update(E,i,1)}function m(v,_,x,w){if(x===0)return;const E=e.get("WEBGL_multi_draw");if(E===null)for(let g=0;g<v.length;g++)d(v[g]/l,_[g],w[g]);else{E.multiDrawElementsInstancedWEBGL(i,_,0,s,v,0,w,0,x);let g=0;for(let S=0;S<x;S++)g+=_[S]*w[S];n.update(g,i,1)}}this.setMode=r,this.setIndex=u,this.render=f,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function m3(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,l,u){switch(n.calls++,l){case t.TRIANGLES:n.triangles+=u*(s/3);break;case t.LINES:n.lines+=u*(s/2);break;case t.LINE_STRIP:n.lines+=u*(s-1);break;case t.LINE_LOOP:n.lines+=u*s;break;case t.POINTS:n.points+=u*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",l);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function g3(t,e,n){const i=new WeakMap,r=new Jt;function s(l,u,f){const d=l.morphTargetInfluences,h=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,m=h!==void 0?h.length:0;let v=i.get(u);if(v===void 0||v.count!==m){let C=function(){O.dispose(),i.delete(u),u.removeEventListener("dispose",C)};var _=C;v!==void 0&&v.texture.dispose();const x=u.morphAttributes.position!==void 0,w=u.morphAttributes.normal!==void 0,E=u.morphAttributes.color!==void 0,g=u.morphAttributes.position||[],S=u.morphAttributes.normal||[],M=u.morphAttributes.color||[];let A=0;x===!0&&(A=1),w===!0&&(A=2),E===!0&&(A=3);let I=u.attributes.position.count*A,N=1;I>e.maxTextureSize&&(N=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const L=new Float32Array(I*N*4*m),O=new o1(L,I,N,m);O.type=Ar,O.needsUpdate=!0;const P=A*4;for(let U=0;U<m;U++){const K=g[U],Y=S[U],se=M[U],le=I*N*4*U;for(let ie=0;ie<K.count;ie++){const ce=ie*P;x===!0&&(r.fromBufferAttribute(K,ie),L[le+ce+0]=r.x,L[le+ce+1]=r.y,L[le+ce+2]=r.z,L[le+ce+3]=0),w===!0&&(r.fromBufferAttribute(Y,ie),L[le+ce+4]=r.x,L[le+ce+5]=r.y,L[le+ce+6]=r.z,L[le+ce+7]=0),E===!0&&(r.fromBufferAttribute(se,ie),L[le+ce+8]=r.x,L[le+ce+9]=r.y,L[le+ce+10]=r.z,L[le+ce+11]=se.itemSize===4?r.w:1)}}v={count:m,texture:O,size:new nt(I,N)},i.set(u,v),u.addEventListener("dispose",C)}if(l.isInstancedMesh===!0&&l.morphTexture!==null)f.getUniforms().setValue(t,"morphTexture",l.morphTexture,n);else{let x=0;for(let E=0;E<d.length;E++)x+=d[E];const w=u.morphTargetsRelative?1:1-x;f.getUniforms().setValue(t,"morphTargetBaseInfluence",w),f.getUniforms().setValue(t,"morphTargetInfluences",d)}f.getUniforms().setValue(t,"morphTargetsTexture",v.texture,n),f.getUniforms().setValue(t,"morphTargetsTextureSize",v.size)}return{update:s}}function v3(t,e,n,i){let r=new WeakMap;function s(f){const d=i.render.frame,h=f.geometry,m=e.get(f,h);if(r.get(m)!==d&&(e.update(m),r.set(m,d)),f.isInstancedMesh&&(f.hasEventListener("dispose",u)===!1&&f.addEventListener("dispose",u),r.get(f)!==d&&(n.update(f.instanceMatrix,t.ARRAY_BUFFER),f.instanceColor!==null&&n.update(f.instanceColor,t.ARRAY_BUFFER),r.set(f,d))),f.isSkinnedMesh){const v=f.skeleton;r.get(v)!==d&&(v.update(),r.set(v,d))}return m}function l(){r=new WeakMap}function u(f){const d=f.target;d.removeEventListener("dispose",u),n.remove(d.instanceMatrix),d.instanceColor!==null&&n.remove(d.instanceColor)}return{update:s,dispose:l}}const v1=new vn,Kx=new d0(1,1),_1=new o1,y1=new zR,x1=new h1,Qx=[],Zx=[],$x=new Float32Array(16),Jx=new Float32Array(9),eS=new Float32Array(4);function rl(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Qx[r];if(s===void 0&&(s=new Float32Array(r),Qx[r]=s),e!==0){i.toArray(s,0);for(let l=1,u=0;l!==e;++l)u+=n,t[l].toArray(s,u)}return s}function _n(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function yn(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Gd(t,e){let n=Zx[e];n===void 0&&(n=new Int32Array(e),Zx[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function _3(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function y3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(_n(n,e))return;t.uniform2fv(this.addr,e),yn(n,e)}}function x3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(_n(n,e))return;t.uniform3fv(this.addr,e),yn(n,e)}}function S3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(_n(n,e))return;t.uniform4fv(this.addr,e),yn(n,e)}}function E3(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(_n(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),yn(n,e)}else{if(_n(n,i))return;eS.set(i),t.uniformMatrix2fv(this.addr,!1,eS),yn(n,i)}}function M3(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(_n(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),yn(n,e)}else{if(_n(n,i))return;Jx.set(i),t.uniformMatrix3fv(this.addr,!1,Jx),yn(n,i)}}function T3(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(_n(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),yn(n,e)}else{if(_n(n,i))return;$x.set(i),t.uniformMatrix4fv(this.addr,!1,$x),yn(n,i)}}function w3(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function A3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(_n(n,e))return;t.uniform2iv(this.addr,e),yn(n,e)}}function C3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(_n(n,e))return;t.uniform3iv(this.addr,e),yn(n,e)}}function R3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(_n(n,e))return;t.uniform4iv(this.addr,e),yn(n,e)}}function P3(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function D3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(_n(n,e))return;t.uniform2uiv(this.addr,e),yn(n,e)}}function L3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(_n(n,e))return;t.uniform3uiv(this.addr,e),yn(n,e)}}function N3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(_n(n,e))return;t.uniform4uiv(this.addr,e),yn(n,e)}}function I3(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Kx.compareFunction=r1,s=Kx):s=v1,n.setTexture2D(e||s,r)}function U3(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||y1,r)}function b3(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||x1,r)}function F3(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||_1,r)}function O3(t){switch(t){case 5126:return _3;case 35664:return y3;case 35665:return x3;case 35666:return S3;case 35674:return E3;case 35675:return M3;case 35676:return T3;case 5124:case 35670:return w3;case 35667:case 35671:return A3;case 35668:case 35672:return C3;case 35669:case 35673:return R3;case 5125:return P3;case 36294:return D3;case 36295:return L3;case 36296:return N3;case 35678:case 36198:case 36298:case 36306:case 35682:return I3;case 35679:case 36299:case 36307:return U3;case 35680:case 36300:case 36308:case 36293:return b3;case 36289:case 36303:case 36311:case 36292:return F3}}function k3(t,e){t.uniform1fv(this.addr,e)}function z3(t,e){const n=rl(e,this.size,2);t.uniform2fv(this.addr,n)}function B3(t,e){const n=rl(e,this.size,3);t.uniform3fv(this.addr,n)}function H3(t,e){const n=rl(e,this.size,4);t.uniform4fv(this.addr,n)}function V3(t,e){const n=rl(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function G3(t,e){const n=rl(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function W3(t,e){const n=rl(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function X3(t,e){t.uniform1iv(this.addr,e)}function j3(t,e){t.uniform2iv(this.addr,e)}function Y3(t,e){t.uniform3iv(this.addr,e)}function q3(t,e){t.uniform4iv(this.addr,e)}function K3(t,e){t.uniform1uiv(this.addr,e)}function Q3(t,e){t.uniform2uiv(this.addr,e)}function Z3(t,e){t.uniform3uiv(this.addr,e)}function $3(t,e){t.uniform4uiv(this.addr,e)}function J3(t,e,n){const i=this.cache,r=e.length,s=Gd(n,r);_n(i,s)||(t.uniform1iv(this.addr,s),yn(i,s));for(let l=0;l!==r;++l)n.setTexture2D(e[l]||v1,s[l])}function eL(t,e,n){const i=this.cache,r=e.length,s=Gd(n,r);_n(i,s)||(t.uniform1iv(this.addr,s),yn(i,s));for(let l=0;l!==r;++l)n.setTexture3D(e[l]||y1,s[l])}function tL(t,e,n){const i=this.cache,r=e.length,s=Gd(n,r);_n(i,s)||(t.uniform1iv(this.addr,s),yn(i,s));for(let l=0;l!==r;++l)n.setTextureCube(e[l]||x1,s[l])}function nL(t,e,n){const i=this.cache,r=e.length,s=Gd(n,r);_n(i,s)||(t.uniform1iv(this.addr,s),yn(i,s));for(let l=0;l!==r;++l)n.setTexture2DArray(e[l]||_1,s[l])}function iL(t){switch(t){case 5126:return k3;case 35664:return z3;case 35665:return B3;case 35666:return H3;case 35674:return V3;case 35675:return G3;case 35676:return W3;case 5124:case 35670:return X3;case 35667:case 35671:return j3;case 35668:case 35672:return Y3;case 35669:case 35673:return q3;case 5125:return K3;case 36294:return Q3;case 36295:return Z3;case 36296:return $3;case 35678:case 36198:case 36298:case 36306:case 35682:return J3;case 35679:case 36299:case 36307:return eL;case 35680:case 36300:case 36308:case 36293:return tL;case 36289:case 36303:case 36311:case 36292:return nL}}class rL{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=O3(n.type)}}class sL{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=iL(n.type)}}class oL{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,l=r.length;s!==l;++s){const u=r[s];u.setValue(e,n[u.id],i)}}}const um=/(\w+)(\])?(\[|\.)?/g;function tS(t,e){t.seq.push(e),t.map[e.id]=e}function aL(t,e,n){const i=t.name,r=i.length;for(um.lastIndex=0;;){const s=um.exec(i),l=um.lastIndex;let u=s[1];const f=s[2]==="]",d=s[3];if(f&&(u=u|0),d===void 0||d==="["&&l+2===r){tS(n,d===void 0?new rL(u,t,e):new sL(u,t,e));break}else{let m=n.map[u];m===void 0&&(m=new oL(u),tS(n,m)),n=m}}}class Wf{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),l=e.getUniformLocation(n,s.name);aL(s,l,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,l=n.length;s!==l;++s){const u=n[s],f=i[u.id];f.needsUpdate!==!1&&u.setValue(e,f.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const l=e[r];l.id in n&&i.push(l)}return i}}function nS(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const lL=37297;let uL=0;function cL(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let l=r;l<s;l++){const u=l+1;i.push(`${u===e?">":" "} ${u}: ${n[l]}`)}return i.join(`
`)}const iS=new ut;function fL(t){Ut._getMatrix(iS,Ut.workingColorSpace,t);const e=`mat3( ${iS.elements.map(n=>n.toFixed(4))} )`;switch(Ut.getTransfer(t)){case vd:return[e,"LinearTransferOETF"];case Vt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function rS(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const l=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+cL(t.getShaderSource(e),l)}else return r}function dL(t,e){const n=fL(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function hL(t,e){let n;switch(e){case $C:n="Linear";break;case JC:n="Reinhard";break;case eR:n="Cineon";break;case YM:n="ACESFilmic";break;case nR:n="AgX";break;case iR:n="Neutral";break;case tR:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const xf=new X;function pL(){Ut.getLuminanceCoefficients(xf);const t=xf.x.toFixed(4),e=xf.y.toFixed(4),n=xf.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function mL(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xl).join(`
`)}function gL(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function vL(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),l=s.name;let u=1;s.type===t.FLOAT_MAT2&&(u=2),s.type===t.FLOAT_MAT3&&(u=3),s.type===t.FLOAT_MAT4&&(u=4),n[l]={type:s.type,location:t.getAttribLocation(e,l),locationSize:u}}return n}function Xl(t){return t!==""}function sS(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function oS(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const _L=/^[ \t]*#include +<([\w\d./]+)>/gm;function tv(t){return t.replace(_L,xL)}const yL=new Map;function xL(t,e){let n=ht[e];if(n===void 0){const i=yL.get(e);if(i!==void 0)n=ht[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return tv(n)}const SL=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function aS(t){return t.replace(SL,EL)}function EL(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function lS(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ML(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===i0?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Of?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Er&&(e="SHADOWMAP_TYPE_VSM"),e}function TL(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Ya:case qa:e="ENVMAP_TYPE_CUBE";break;case Bd:e="ENVMAP_TYPE_CUBE_UV";break}return e}function wL(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case qa:e="ENVMAP_MODE_REFRACTION";break}return e}function AL(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case jM:e="ENVMAP_BLENDING_MULTIPLY";break;case QC:e="ENVMAP_BLENDING_MIX";break;case ZC:e="ENVMAP_BLENDING_ADD";break}return e}function CL(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function RL(t,e,n,i){const r=t.getContext(),s=n.defines;let l=n.vertexShader,u=n.fragmentShader;const f=ML(n),d=TL(n),h=wL(n),m=AL(n),v=CL(n),_=mL(n),x=gL(s),w=r.createProgram();let E,g,S=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(E=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Xl).join(`
`),E.length>0&&(E+=`
`),g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Xl).join(`
`),g.length>0&&(g+=`
`)):(E=[lS(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+f:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xl).join(`
`),g=[lS(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.envMap?"#define "+h:"",n.envMap?"#define "+m:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+f:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Pr?"#define TONE_MAPPING":"",n.toneMapping!==Pr?ht.tonemapping_pars_fragment:"",n.toneMapping!==Pr?hL("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,dL("linearToOutputTexel",n.outputColorSpace),pL(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Xl).join(`
`)),l=tv(l),l=sS(l,n),l=oS(l,n),u=tv(u),u=sS(u,n),u=oS(u,n),l=aS(l),u=aS(u),n.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,E=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+E,g=["#define varying in",n.glslVersion===gx?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===gx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const M=S+E+l,A=S+g+u,I=nS(r,r.VERTEX_SHADER,M),N=nS(r,r.FRAGMENT_SHADER,A);r.attachShader(w,I),r.attachShader(w,N),n.index0AttributeName!==void 0?r.bindAttribLocation(w,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(w,0,"position"),r.linkProgram(w);function L(U){if(t.debug.checkShaderErrors){const K=r.getProgramInfoLog(w).trim(),Y=r.getShaderInfoLog(I).trim(),se=r.getShaderInfoLog(N).trim();let le=!0,ie=!0;if(r.getProgramParameter(w,r.LINK_STATUS)===!1)if(le=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,w,I,N);else{const ce=rS(r,I,"vertex"),b=rS(r,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(w,r.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+K+`
`+ce+`
`+b)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(Y===""||se==="")&&(ie=!1);ie&&(U.diagnostics={runnable:le,programLog:K,vertexShader:{log:Y,prefix:E},fragmentShader:{log:se,prefix:g}})}r.deleteShader(I),r.deleteShader(N),O=new Wf(r,w),P=vL(r,w)}let O;this.getUniforms=function(){return O===void 0&&L(this),O};let P;this.getAttributes=function(){return P===void 0&&L(this),P};let C=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=r.getProgramParameter(w,lL)),C},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(w),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=uL++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=I,this.fragmentShader=N,this}let PL=0;class DL{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),l=this._getShaderCacheForMaterial(e);return l.has(r)===!1&&(l.add(r),r.usedTimes++),l.has(s)===!1&&(l.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new LL(e),n.set(e,i)),i}}class LL{constructor(e){this.id=PL++,this.code=e,this.usedTimes=0}}function NL(t,e,n,i,r,s,l){const u=new Oa,f=new DL,d=new Set,h=[],m=r.logarithmicDepthBuffer,v=r.vertexTextures;let _=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(P){return d.add(P),P===0?"uv":`uv${P}`}function E(P,C,U,K,Y){const se=K.fog,le=Y.geometry,ie=P.isMeshStandardMaterial?K.environment:null,ce=(P.isMeshStandardMaterial?n:e).get(P.envMap||ie),b=ce&&ce.mapping===Bd?ce.image.height:null,j=x[P.type];P.precision!==null&&(_=r.getMaxPrecision(P.precision),_!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",_,"instead."));const q=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,oe=q!==void 0?q.length:0;let ye=0;le.morphAttributes.position!==void 0&&(ye=1),le.morphAttributes.normal!==void 0&&(ye=2),le.morphAttributes.color!==void 0&&(ye=3);let qe,te,pe,Ae;if(j){const Dt=Mr[j];qe=Dt.vertexShader,te=Dt.fragmentShader}else qe=P.vertexShader,te=P.fragmentShader,f.update(P),pe=f.getVertexShaderID(P),Ae=f.getFragmentShaderID(P);const xe=t.getRenderTarget(),Ye=t.state.buffers.depth.getReversed(),Et=Y.isInstancedMesh===!0,Ze=Y.isBatchedMesh===!0,Mt=!!P.map,zt=!!P.matcap,rt=!!ce,z=!!P.aoMap,Dn=!!P.lightMap,Rt=!!P.bumpMap,Bt=!!P.normalMap,ze=!!P.displacementMap,At=!!P.emissiveMap,Xe=!!P.metalnessMap,lt=!!P.roughnessMap,sn=P.anisotropy>0,k=P.clearcoat>0,R=P.dispersion>0,Q=P.iridescence>0,ae=P.sheen>0,fe=P.transmission>0,re=sn&&!!P.anisotropyMap,Be=k&&!!P.clearcoatMap,Me=k&&!!P.clearcoatNormalMap,ke=k&&!!P.clearcoatRoughnessMap,He=Q&&!!P.iridescenceMap,de=Q&&!!P.iridescenceThicknessMap,Le=ae&&!!P.sheenColorMap,et=ae&&!!P.sheenRoughnessMap,$e=!!P.specularMap,Ee=!!P.specularColorMap,it=!!P.specularIntensityMap,B=fe&&!!P.transmissionMap,Ce=fe&&!!P.thicknessMap,he=!!P.gradientMap,Ie=!!P.alphaMap,ge=P.alphaTest>0,ue=!!P.alphaHash,be=!!P.extensions;let st=Pr;P.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(st=t.toneMapping);const Ht={shaderID:j,shaderType:P.type,shaderName:P.name,vertexShader:qe,fragmentShader:te,defines:P.defines,customVertexShaderID:pe,customFragmentShaderID:Ae,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:_,batching:Ze,batchingColor:Ze&&Y._colorsTexture!==null,instancing:Et,instancingColor:Et&&Y.instanceColor!==null,instancingMorph:Et&&Y.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:xe===null?t.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:Vs,alphaToCoverage:!!P.alphaToCoverage,map:Mt,matcap:zt,envMap:rt,envMapMode:rt&&ce.mapping,envMapCubeUVHeight:b,aoMap:z,lightMap:Dn,bumpMap:Rt,normalMap:Bt,displacementMap:v&&ze,emissiveMap:At,normalMapObjectSpace:Bt&&P.normalMapType===oR,normalMapTangentSpace:Bt&&P.normalMapType===i1,metalnessMap:Xe,roughnessMap:lt,anisotropy:sn,anisotropyMap:re,clearcoat:k,clearcoatMap:Be,clearcoatNormalMap:Me,clearcoatRoughnessMap:ke,dispersion:R,iridescence:Q,iridescenceMap:He,iridescenceThicknessMap:de,sheen:ae,sheenColorMap:Le,sheenRoughnessMap:et,specularMap:$e,specularColorMap:Ee,specularIntensityMap:it,transmission:fe,transmissionMap:B,thicknessMap:Ce,gradientMap:he,opaque:P.transparent===!1&&P.blending===Ua&&P.alphaToCoverage===!1,alphaMap:Ie,alphaTest:ge,alphaHash:ue,combine:P.combine,mapUv:Mt&&w(P.map.channel),aoMapUv:z&&w(P.aoMap.channel),lightMapUv:Dn&&w(P.lightMap.channel),bumpMapUv:Rt&&w(P.bumpMap.channel),normalMapUv:Bt&&w(P.normalMap.channel),displacementMapUv:ze&&w(P.displacementMap.channel),emissiveMapUv:At&&w(P.emissiveMap.channel),metalnessMapUv:Xe&&w(P.metalnessMap.channel),roughnessMapUv:lt&&w(P.roughnessMap.channel),anisotropyMapUv:re&&w(P.anisotropyMap.channel),clearcoatMapUv:Be&&w(P.clearcoatMap.channel),clearcoatNormalMapUv:Me&&w(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ke&&w(P.clearcoatRoughnessMap.channel),iridescenceMapUv:He&&w(P.iridescenceMap.channel),iridescenceThicknessMapUv:de&&w(P.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&w(P.sheenColorMap.channel),sheenRoughnessMapUv:et&&w(P.sheenRoughnessMap.channel),specularMapUv:$e&&w(P.specularMap.channel),specularColorMapUv:Ee&&w(P.specularColorMap.channel),specularIntensityMapUv:it&&w(P.specularIntensityMap.channel),transmissionMapUv:B&&w(P.transmissionMap.channel),thicknessMapUv:Ce&&w(P.thicknessMap.channel),alphaMapUv:Ie&&w(P.alphaMap.channel),vertexTangents:!!le.attributes.tangent&&(Bt||sn),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!le.attributes.uv&&(Mt||Ie),fog:!!se,useFog:P.fog===!0,fogExp2:!!se&&se.isFogExp2,flatShading:P.flatShading===!0&&P.wireframe===!1,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:m,reverseDepthBuffer:Ye,skinning:Y.isSkinnedMesh===!0,morphTargets:le.morphAttributes.position!==void 0,morphNormals:le.morphAttributes.normal!==void 0,morphColors:le.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:ye,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:P.dithering,shadowMapEnabled:t.shadowMap.enabled&&U.length>0,shadowMapType:t.shadowMap.type,toneMapping:st,decodeVideoTexture:Mt&&P.map.isVideoTexture===!0&&Ut.getTransfer(P.map.colorSpace)===Vt,decodeVideoTextureEmissive:At&&P.emissiveMap.isVideoTexture===!0&&Ut.getTransfer(P.emissiveMap.colorSpace)===Vt,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===Ai,flipSided:P.side===An,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:be&&P.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(be&&P.extensions.multiDraw===!0||Ze)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return Ht.vertexUv1s=d.has(1),Ht.vertexUv2s=d.has(2),Ht.vertexUv3s=d.has(3),d.clear(),Ht}function g(P){const C=[];if(P.shaderID?C.push(P.shaderID):(C.push(P.customVertexShaderID),C.push(P.customFragmentShaderID)),P.defines!==void 0)for(const U in P.defines)C.push(U),C.push(P.defines[U]);return P.isRawShaderMaterial===!1&&(S(C,P),M(C,P),C.push(t.outputColorSpace)),C.push(P.customProgramCacheKey),C.join()}function S(P,C){P.push(C.precision),P.push(C.outputColorSpace),P.push(C.envMapMode),P.push(C.envMapCubeUVHeight),P.push(C.mapUv),P.push(C.alphaMapUv),P.push(C.lightMapUv),P.push(C.aoMapUv),P.push(C.bumpMapUv),P.push(C.normalMapUv),P.push(C.displacementMapUv),P.push(C.emissiveMapUv),P.push(C.metalnessMapUv),P.push(C.roughnessMapUv),P.push(C.anisotropyMapUv),P.push(C.clearcoatMapUv),P.push(C.clearcoatNormalMapUv),P.push(C.clearcoatRoughnessMapUv),P.push(C.iridescenceMapUv),P.push(C.iridescenceThicknessMapUv),P.push(C.sheenColorMapUv),P.push(C.sheenRoughnessMapUv),P.push(C.specularMapUv),P.push(C.specularColorMapUv),P.push(C.specularIntensityMapUv),P.push(C.transmissionMapUv),P.push(C.thicknessMapUv),P.push(C.combine),P.push(C.fogExp2),P.push(C.sizeAttenuation),P.push(C.morphTargetsCount),P.push(C.morphAttributeCount),P.push(C.numDirLights),P.push(C.numPointLights),P.push(C.numSpotLights),P.push(C.numSpotLightMaps),P.push(C.numHemiLights),P.push(C.numRectAreaLights),P.push(C.numDirLightShadows),P.push(C.numPointLightShadows),P.push(C.numSpotLightShadows),P.push(C.numSpotLightShadowsWithMaps),P.push(C.numLightProbes),P.push(C.shadowMapType),P.push(C.toneMapping),P.push(C.numClippingPlanes),P.push(C.numClipIntersection),P.push(C.depthPacking)}function M(P,C){u.disableAll(),C.supportsVertexTextures&&u.enable(0),C.instancing&&u.enable(1),C.instancingColor&&u.enable(2),C.instancingMorph&&u.enable(3),C.matcap&&u.enable(4),C.envMap&&u.enable(5),C.normalMapObjectSpace&&u.enable(6),C.normalMapTangentSpace&&u.enable(7),C.clearcoat&&u.enable(8),C.iridescence&&u.enable(9),C.alphaTest&&u.enable(10),C.vertexColors&&u.enable(11),C.vertexAlphas&&u.enable(12),C.vertexUv1s&&u.enable(13),C.vertexUv2s&&u.enable(14),C.vertexUv3s&&u.enable(15),C.vertexTangents&&u.enable(16),C.anisotropy&&u.enable(17),C.alphaHash&&u.enable(18),C.batching&&u.enable(19),C.dispersion&&u.enable(20),C.batchingColor&&u.enable(21),C.gradientMap&&u.enable(22),P.push(u.mask),u.disableAll(),C.fog&&u.enable(0),C.useFog&&u.enable(1),C.flatShading&&u.enable(2),C.logarithmicDepthBuffer&&u.enable(3),C.reverseDepthBuffer&&u.enable(4),C.skinning&&u.enable(5),C.morphTargets&&u.enable(6),C.morphNormals&&u.enable(7),C.morphColors&&u.enable(8),C.premultipliedAlpha&&u.enable(9),C.shadowMapEnabled&&u.enable(10),C.doubleSided&&u.enable(11),C.flipSided&&u.enable(12),C.useDepthPacking&&u.enable(13),C.dithering&&u.enable(14),C.transmission&&u.enable(15),C.sheen&&u.enable(16),C.opaque&&u.enable(17),C.pointsUvs&&u.enable(18),C.decodeVideoTexture&&u.enable(19),C.decodeVideoTextureEmissive&&u.enable(20),C.alphaToCoverage&&u.enable(21),P.push(u.mask)}function A(P){const C=x[P.type];let U;if(C){const K=Mr[C];U=d1.clone(K.uniforms)}else U=P.uniforms;return U}function I(P,C){let U;for(let K=0,Y=h.length;K<Y;K++){const se=h[K];if(se.cacheKey===C){U=se,++U.usedTimes;break}}return U===void 0&&(U=new RL(t,C,P,s),h.push(U)),U}function N(P){if(--P.usedTimes===0){const C=h.indexOf(P);h[C]=h[h.length-1],h.pop(),P.destroy()}}function L(P){f.remove(P)}function O(){f.dispose()}return{getParameters:E,getProgramCacheKey:g,getUniforms:A,acquireProgram:I,releaseProgram:N,releaseShaderCache:L,programs:h,dispose:O}}function IL(){let t=new WeakMap;function e(l){return t.has(l)}function n(l){let u=t.get(l);return u===void 0&&(u={},t.set(l,u)),u}function i(l){t.delete(l)}function r(l,u,f){t.get(l)[u]=f}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function UL(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function uS(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function cS(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function l(m,v,_,x,w,E){let g=t[e];return g===void 0?(g={id:m.id,object:m,geometry:v,material:_,groupOrder:x,renderOrder:m.renderOrder,z:w,group:E},t[e]=g):(g.id=m.id,g.object=m,g.geometry=v,g.material=_,g.groupOrder=x,g.renderOrder=m.renderOrder,g.z=w,g.group=E),e++,g}function u(m,v,_,x,w,E){const g=l(m,v,_,x,w,E);_.transmission>0?i.push(g):_.transparent===!0?r.push(g):n.push(g)}function f(m,v,_,x,w,E){const g=l(m,v,_,x,w,E);_.transmission>0?i.unshift(g):_.transparent===!0?r.unshift(g):n.unshift(g)}function d(m,v){n.length>1&&n.sort(m||UL),i.length>1&&i.sort(v||uS),r.length>1&&r.sort(v||uS)}function h(){for(let m=e,v=t.length;m<v;m++){const _=t[m];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:u,unshift:f,finish:h,sort:d}}function bL(){let t=new WeakMap;function e(i,r){const s=t.get(i);let l;return s===void 0?(l=new cS,t.set(i,[l])):r>=s.length?(l=new cS,s.push(l)):l=s[r],l}function n(){t=new WeakMap}return{get:e,dispose:n}}function FL(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new X,color:new Ct};break;case"SpotLight":n={position:new X,direction:new X,color:new Ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new X,color:new Ct,distance:0,decay:0};break;case"HemisphereLight":n={direction:new X,skyColor:new Ct,groundColor:new Ct};break;case"RectAreaLight":n={color:new Ct,position:new X,halfWidth:new X,halfHeight:new X};break}return t[e.id]=n,n}}}function OL(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let kL=0;function zL(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function BL(t){const e=new FL,n=OL(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)i.probe.push(new X);const r=new X,s=new qt,l=new qt;function u(d){let h=0,m=0,v=0;for(let P=0;P<9;P++)i.probe[P].set(0,0,0);let _=0,x=0,w=0,E=0,g=0,S=0,M=0,A=0,I=0,N=0,L=0;d.sort(zL);for(let P=0,C=d.length;P<C;P++){const U=d[P],K=U.color,Y=U.intensity,se=U.distance,le=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)h+=K.r*Y,m+=K.g*Y,v+=K.b*Y;else if(U.isLightProbe){for(let ie=0;ie<9;ie++)i.probe[ie].addScaledVector(U.sh.coefficients[ie],Y);L++}else if(U.isDirectionalLight){const ie=e.get(U);if(ie.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const ce=U.shadow,b=n.get(U);b.shadowIntensity=ce.intensity,b.shadowBias=ce.bias,b.shadowNormalBias=ce.normalBias,b.shadowRadius=ce.radius,b.shadowMapSize=ce.mapSize,i.directionalShadow[_]=b,i.directionalShadowMap[_]=le,i.directionalShadowMatrix[_]=U.shadow.matrix,S++}i.directional[_]=ie,_++}else if(U.isSpotLight){const ie=e.get(U);ie.position.setFromMatrixPosition(U.matrixWorld),ie.color.copy(K).multiplyScalar(Y),ie.distance=se,ie.coneCos=Math.cos(U.angle),ie.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),ie.decay=U.decay,i.spot[w]=ie;const ce=U.shadow;if(U.map&&(i.spotLightMap[I]=U.map,I++,ce.updateMatrices(U),U.castShadow&&N++),i.spotLightMatrix[w]=ce.matrix,U.castShadow){const b=n.get(U);b.shadowIntensity=ce.intensity,b.shadowBias=ce.bias,b.shadowNormalBias=ce.normalBias,b.shadowRadius=ce.radius,b.shadowMapSize=ce.mapSize,i.spotShadow[w]=b,i.spotShadowMap[w]=le,A++}w++}else if(U.isRectAreaLight){const ie=e.get(U);ie.color.copy(K).multiplyScalar(Y),ie.halfWidth.set(U.width*.5,0,0),ie.halfHeight.set(0,U.height*.5,0),i.rectArea[E]=ie,E++}else if(U.isPointLight){const ie=e.get(U);if(ie.color.copy(U.color).multiplyScalar(U.intensity),ie.distance=U.distance,ie.decay=U.decay,U.castShadow){const ce=U.shadow,b=n.get(U);b.shadowIntensity=ce.intensity,b.shadowBias=ce.bias,b.shadowNormalBias=ce.normalBias,b.shadowRadius=ce.radius,b.shadowMapSize=ce.mapSize,b.shadowCameraNear=ce.camera.near,b.shadowCameraFar=ce.camera.far,i.pointShadow[x]=b,i.pointShadowMap[x]=le,i.pointShadowMatrix[x]=U.shadow.matrix,M++}i.point[x]=ie,x++}else if(U.isHemisphereLight){const ie=e.get(U);ie.skyColor.copy(U.color).multiplyScalar(Y),ie.groundColor.copy(U.groundColor).multiplyScalar(Y),i.hemi[g]=ie,g++}}E>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=we.LTC_FLOAT_1,i.rectAreaLTC2=we.LTC_FLOAT_2):(i.rectAreaLTC1=we.LTC_HALF_1,i.rectAreaLTC2=we.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=m,i.ambient[2]=v;const O=i.hash;(O.directionalLength!==_||O.pointLength!==x||O.spotLength!==w||O.rectAreaLength!==E||O.hemiLength!==g||O.numDirectionalShadows!==S||O.numPointShadows!==M||O.numSpotShadows!==A||O.numSpotMaps!==I||O.numLightProbes!==L)&&(i.directional.length=_,i.spot.length=w,i.rectArea.length=E,i.point.length=x,i.hemi.length=g,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=A+I-N,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=N,i.numLightProbes=L,O.directionalLength=_,O.pointLength=x,O.spotLength=w,O.rectAreaLength=E,O.hemiLength=g,O.numDirectionalShadows=S,O.numPointShadows=M,O.numSpotShadows=A,O.numSpotMaps=I,O.numLightProbes=L,i.version=kL++)}function f(d,h){let m=0,v=0,_=0,x=0,w=0;const E=h.matrixWorldInverse;for(let g=0,S=d.length;g<S;g++){const M=d[g];if(M.isDirectionalLight){const A=i.directional[m];A.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(E),m++}else if(M.isSpotLight){const A=i.spot[_];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(E),A.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(E),_++}else if(M.isRectAreaLight){const A=i.rectArea[x];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(E),l.identity(),s.copy(M.matrixWorld),s.premultiply(E),l.extractRotation(s),A.halfWidth.set(M.width*.5,0,0),A.halfHeight.set(0,M.height*.5,0),A.halfWidth.applyMatrix4(l),A.halfHeight.applyMatrix4(l),x++}else if(M.isPointLight){const A=i.point[v];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(E),v++}else if(M.isHemisphereLight){const A=i.hemi[w];A.direction.setFromMatrixPosition(M.matrixWorld),A.direction.transformDirection(E),w++}}}return{setup:u,setupView:f,state:i}}function fS(t){const e=new BL(t),n=[],i=[];function r(h){d.camera=h,n.length=0,i.length=0}function s(h){n.push(h)}function l(h){i.push(h)}function u(){e.setup(n)}function f(h){e.setupView(n,h)}const d={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:d,setupLights:u,setupLightsView:f,pushLight:s,pushShadow:l}}function HL(t){let e=new WeakMap;function n(r,s=0){const l=e.get(r);let u;return l===void 0?(u=new fS(t),e.set(r,[u])):s>=l.length?(u=new fS(t),l.push(u)):u=l[s],u}function i(){e=new WeakMap}return{get:n,dispose:i}}const VL=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,GL=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function WL(t,e,n){let i=new p1;const r=new nt,s=new nt,l=new Jt,u=new d2({depthPacking:sR}),f=new h2,d={},h=n.maxTextureSize,m={[ts]:An,[An]:ts,[Ai]:Ai},v=new Pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:VL,fragmentShader:GL}),_=v.clone();_.defines.HORIZONTAL_PASS=1;const x=new fr;x.setAttribute("position",new fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new ar(x,v),E=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=i0;let g=this.type;this.render=function(N,L,O){if(E.enabled===!1||E.autoUpdate===!1&&E.needsUpdate===!1||N.length===0)return;const P=t.getRenderTarget(),C=t.getActiveCubeFace(),U=t.getActiveMipmapLevel(),K=t.state;K.setBlending(Jn),K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const Y=g!==Er&&this.type===Er,se=g===Er&&this.type!==Er;for(let le=0,ie=N.length;le<ie;le++){const ce=N[le],b=ce.shadow;if(b===void 0){console.warn("THREE.WebGLShadowMap:",ce,"has no shadow.");continue}if(b.autoUpdate===!1&&b.needsUpdate===!1)continue;r.copy(b.mapSize);const j=b.getFrameExtents();if(r.multiply(j),s.copy(b.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/j.x),r.x=s.x*j.x,b.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/j.y),r.y=s.y*j.y,b.mapSize.y=s.y)),b.map===null||Y===!0||se===!0){const oe=this.type!==Er?{minFilter:ei,magFilter:ei}:{};b.map!==null&&b.map.dispose(),b.map=new ti(r.x,r.y,oe),b.map.texture.name=ce.name+".shadowMap",b.camera.updateProjectionMatrix()}t.setRenderTarget(b.map),t.clear();const q=b.getViewportCount();for(let oe=0;oe<q;oe++){const ye=b.getViewport(oe);l.set(s.x*ye.x,s.y*ye.y,s.x*ye.z,s.y*ye.w),K.viewport(l),b.updateMatrices(ce,oe),i=b.getFrustum(),A(L,O,b.camera,ce,this.type)}b.isPointLightShadow!==!0&&this.type===Er&&S(b,O),b.needsUpdate=!1}g=this.type,E.needsUpdate=!1,t.setRenderTarget(P,C,U)};function S(N,L){const O=e.update(w);v.defines.VSM_SAMPLES!==N.blurSamples&&(v.defines.VSM_SAMPLES=N.blurSamples,_.defines.VSM_SAMPLES=N.blurSamples,v.needsUpdate=!0,_.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new ti(r.x,r.y)),v.uniforms.shadow_pass.value=N.map.texture,v.uniforms.resolution.value=N.mapSize,v.uniforms.radius.value=N.radius,t.setRenderTarget(N.mapPass),t.clear(),t.renderBufferDirect(L,null,O,v,w,null),_.uniforms.shadow_pass.value=N.mapPass.texture,_.uniforms.resolution.value=N.mapSize,_.uniforms.radius.value=N.radius,t.setRenderTarget(N.map),t.clear(),t.renderBufferDirect(L,null,O,_,w,null)}function M(N,L,O,P){let C=null;const U=O.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(U!==void 0)C=U;else if(C=O.isPointLight===!0?f:u,t.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){const K=C.uuid,Y=L.uuid;let se=d[K];se===void 0&&(se={},d[K]=se);let le=se[Y];le===void 0&&(le=C.clone(),se[Y]=le,L.addEventListener("dispose",I)),C=le}if(C.visible=L.visible,C.wireframe=L.wireframe,P===Er?C.side=L.shadowSide!==null?L.shadowSide:L.side:C.side=L.shadowSide!==null?L.shadowSide:m[L.side],C.alphaMap=L.alphaMap,C.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,C.map=L.map,C.clipShadows=L.clipShadows,C.clippingPlanes=L.clippingPlanes,C.clipIntersection=L.clipIntersection,C.displacementMap=L.displacementMap,C.displacementScale=L.displacementScale,C.displacementBias=L.displacementBias,C.wireframeLinewidth=L.wireframeLinewidth,C.linewidth=L.linewidth,O.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const K=t.properties.get(C);K.light=O}return C}function A(N,L,O,P,C){if(N.visible===!1)return;if(N.layers.test(L.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&C===Er)&&(!N.frustumCulled||i.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,N.matrixWorld);const Y=e.update(N),se=N.material;if(Array.isArray(se)){const le=Y.groups;for(let ie=0,ce=le.length;ie<ce;ie++){const b=le[ie],j=se[b.materialIndex];if(j&&j.visible){const q=M(N,j,P,C);N.onBeforeShadow(t,N,L,O,Y,q,b),t.renderBufferDirect(O,null,Y,q,N,b),N.onAfterShadow(t,N,L,O,Y,q,b)}}}else if(se.visible){const le=M(N,se,P,C);N.onBeforeShadow(t,N,L,O,Y,le,null),t.renderBufferDirect(O,null,Y,le,N,null),N.onAfterShadow(t,N,L,O,Y,le,null)}}const K=N.children;for(let Y=0,se=K.length;Y<se;Y++)A(K[Y],L,O,P,C)}function I(N){N.target.removeEventListener("dispose",I);for(const O in d){const P=d[O],C=N.target.uuid;C in P&&(P[C].dispose(),delete P[C])}}}const XL={[gg]:vg,[_g]:Sg,[yg]:Eg,[ja]:xg,[vg]:gg,[Sg]:_g,[Eg]:yg,[xg]:ja};function jL(t,e){function n(){let B=!1;const Ce=new Jt;let he=null;const Ie=new Jt(0,0,0,0);return{setMask:function(ge){he!==ge&&!B&&(t.colorMask(ge,ge,ge,ge),he=ge)},setLocked:function(ge){B=ge},setClear:function(ge,ue,be,st,Ht){Ht===!0&&(ge*=st,ue*=st,be*=st),Ce.set(ge,ue,be,st),Ie.equals(Ce)===!1&&(t.clearColor(ge,ue,be,st),Ie.copy(Ce))},reset:function(){B=!1,he=null,Ie.set(-1,0,0,0)}}}function i(){let B=!1,Ce=!1,he=null,Ie=null,ge=null;return{setReversed:function(ue){if(Ce!==ue){const be=e.get("EXT_clip_control");ue?be.clipControlEXT(be.LOWER_LEFT_EXT,be.ZERO_TO_ONE_EXT):be.clipControlEXT(be.LOWER_LEFT_EXT,be.NEGATIVE_ONE_TO_ONE_EXT),Ce=ue;const st=ge;ge=null,this.setClear(st)}},getReversed:function(){return Ce},setTest:function(ue){ue?xe(t.DEPTH_TEST):Ye(t.DEPTH_TEST)},setMask:function(ue){he!==ue&&!B&&(t.depthMask(ue),he=ue)},setFunc:function(ue){if(Ce&&(ue=XL[ue]),Ie!==ue){switch(ue){case gg:t.depthFunc(t.NEVER);break;case vg:t.depthFunc(t.ALWAYS);break;case _g:t.depthFunc(t.LESS);break;case ja:t.depthFunc(t.LEQUAL);break;case yg:t.depthFunc(t.EQUAL);break;case xg:t.depthFunc(t.GEQUAL);break;case Sg:t.depthFunc(t.GREATER);break;case Eg:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Ie=ue}},setLocked:function(ue){B=ue},setClear:function(ue){ge!==ue&&(Ce&&(ue=1-ue),t.clearDepth(ue),ge=ue)},reset:function(){B=!1,he=null,Ie=null,ge=null,Ce=!1}}}function r(){let B=!1,Ce=null,he=null,Ie=null,ge=null,ue=null,be=null,st=null,Ht=null;return{setTest:function(Dt){B||(Dt?xe(t.STENCIL_TEST):Ye(t.STENCIL_TEST))},setMask:function(Dt){Ce!==Dt&&!B&&(t.stencilMask(Dt),Ce=Dt)},setFunc:function(Dt,ri,Qi){(he!==Dt||Ie!==ri||ge!==Qi)&&(t.stencilFunc(Dt,ri,Qi),he=Dt,Ie=ri,ge=Qi)},setOp:function(Dt,ri,Qi){(ue!==Dt||be!==ri||st!==Qi)&&(t.stencilOp(Dt,ri,Qi),ue=Dt,be=ri,st=Qi)},setLocked:function(Dt){B=Dt},setClear:function(Dt){Ht!==Dt&&(t.clearStencil(Dt),Ht=Dt)},reset:function(){B=!1,Ce=null,he=null,Ie=null,ge=null,ue=null,be=null,st=null,Ht=null}}}const s=new n,l=new i,u=new r,f=new WeakMap,d=new WeakMap;let h={},m={},v=new WeakMap,_=[],x=null,w=!1,E=null,g=null,S=null,M=null,A=null,I=null,N=null,L=new Ct(0,0,0),O=0,P=!1,C=null,U=null,K=null,Y=null,se=null;const le=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ie=!1,ce=0;const b=t.getParameter(t.VERSION);b.indexOf("WebGL")!==-1?(ce=parseFloat(/^WebGL (\d)/.exec(b)[1]),ie=ce>=1):b.indexOf("OpenGL ES")!==-1&&(ce=parseFloat(/^OpenGL ES (\d)/.exec(b)[1]),ie=ce>=2);let j=null,q={};const oe=t.getParameter(t.SCISSOR_BOX),ye=t.getParameter(t.VIEWPORT),qe=new Jt().fromArray(oe),te=new Jt().fromArray(ye);function pe(B,Ce,he,Ie){const ge=new Uint8Array(4),ue=t.createTexture();t.bindTexture(B,ue),t.texParameteri(B,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(B,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let be=0;be<he;be++)B===t.TEXTURE_3D||B===t.TEXTURE_2D_ARRAY?t.texImage3D(Ce,0,t.RGBA,1,1,Ie,0,t.RGBA,t.UNSIGNED_BYTE,ge):t.texImage2D(Ce+be,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ge);return ue}const Ae={};Ae[t.TEXTURE_2D]=pe(t.TEXTURE_2D,t.TEXTURE_2D,1),Ae[t.TEXTURE_CUBE_MAP]=pe(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ae[t.TEXTURE_2D_ARRAY]=pe(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Ae[t.TEXTURE_3D]=pe(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),l.setClear(1),u.setClear(0),xe(t.DEPTH_TEST),l.setFunc(ja),Rt(!1),Bt(cx),xe(t.CULL_FACE),z(Jn);function xe(B){h[B]!==!0&&(t.enable(B),h[B]=!0)}function Ye(B){h[B]!==!1&&(t.disable(B),h[B]=!1)}function Et(B,Ce){return m[B]!==Ce?(t.bindFramebuffer(B,Ce),m[B]=Ce,B===t.DRAW_FRAMEBUFFER&&(m[t.FRAMEBUFFER]=Ce),B===t.FRAMEBUFFER&&(m[t.DRAW_FRAMEBUFFER]=Ce),!0):!1}function Ze(B,Ce){let he=_,Ie=!1;if(B){he=v.get(Ce),he===void 0&&(he=[],v.set(Ce,he));const ge=B.textures;if(he.length!==ge.length||he[0]!==t.COLOR_ATTACHMENT0){for(let ue=0,be=ge.length;ue<be;ue++)he[ue]=t.COLOR_ATTACHMENT0+ue;he.length=ge.length,Ie=!0}}else he[0]!==t.BACK&&(he[0]=t.BACK,Ie=!0);Ie&&t.drawBuffers(he)}function Mt(B){return x!==B?(t.useProgram(B),x=B,!0):!1}const zt={[po]:t.FUNC_ADD,[IC]:t.FUNC_SUBTRACT,[UC]:t.FUNC_REVERSE_SUBTRACT};zt[bC]=t.MIN,zt[FC]=t.MAX;const rt={[OC]:t.ZERO,[kC]:t.ONE,[zC]:t.SRC_COLOR,[pg]:t.SRC_ALPHA,[XC]:t.SRC_ALPHA_SATURATE,[GC]:t.DST_COLOR,[HC]:t.DST_ALPHA,[BC]:t.ONE_MINUS_SRC_COLOR,[mg]:t.ONE_MINUS_SRC_ALPHA,[WC]:t.ONE_MINUS_DST_COLOR,[VC]:t.ONE_MINUS_DST_ALPHA,[jC]:t.CONSTANT_COLOR,[YC]:t.ONE_MINUS_CONSTANT_COLOR,[qC]:t.CONSTANT_ALPHA,[KC]:t.ONE_MINUS_CONSTANT_ALPHA};function z(B,Ce,he,Ie,ge,ue,be,st,Ht,Dt){if(B===Jn){w===!0&&(Ye(t.BLEND),w=!1);return}if(w===!1&&(xe(t.BLEND),w=!0),B!==NC){if(B!==E||Dt!==P){if((g!==po||A!==po)&&(t.blendEquation(t.FUNC_ADD),g=po,A=po),Dt)switch(B){case Ua:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case fx:t.blendFunc(t.ONE,t.ONE);break;case dx:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case hx:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case Ua:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case fx:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case dx:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case hx:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}S=null,M=null,I=null,N=null,L.set(0,0,0),O=0,E=B,P=Dt}return}ge=ge||Ce,ue=ue||he,be=be||Ie,(Ce!==g||ge!==A)&&(t.blendEquationSeparate(zt[Ce],zt[ge]),g=Ce,A=ge),(he!==S||Ie!==M||ue!==I||be!==N)&&(t.blendFuncSeparate(rt[he],rt[Ie],rt[ue],rt[be]),S=he,M=Ie,I=ue,N=be),(st.equals(L)===!1||Ht!==O)&&(t.blendColor(st.r,st.g,st.b,Ht),L.copy(st),O=Ht),E=B,P=!1}function Dn(B,Ce){B.side===Ai?Ye(t.CULL_FACE):xe(t.CULL_FACE);let he=B.side===An;Ce&&(he=!he),Rt(he),B.blending===Ua&&B.transparent===!1?z(Jn):z(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),l.setFunc(B.depthFunc),l.setTest(B.depthTest),l.setMask(B.depthWrite),s.setMask(B.colorWrite);const Ie=B.stencilWrite;u.setTest(Ie),Ie&&(u.setMask(B.stencilWriteMask),u.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),u.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),At(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?xe(t.SAMPLE_ALPHA_TO_COVERAGE):Ye(t.SAMPLE_ALPHA_TO_COVERAGE)}function Rt(B){C!==B&&(B?t.frontFace(t.CW):t.frontFace(t.CCW),C=B)}function Bt(B){B!==PC?(xe(t.CULL_FACE),B!==U&&(B===cx?t.cullFace(t.BACK):B===DC?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ye(t.CULL_FACE),U=B}function ze(B){B!==K&&(ie&&t.lineWidth(B),K=B)}function At(B,Ce,he){B?(xe(t.POLYGON_OFFSET_FILL),(Y!==Ce||se!==he)&&(t.polygonOffset(Ce,he),Y=Ce,se=he)):Ye(t.POLYGON_OFFSET_FILL)}function Xe(B){B?xe(t.SCISSOR_TEST):Ye(t.SCISSOR_TEST)}function lt(B){B===void 0&&(B=t.TEXTURE0+le-1),j!==B&&(t.activeTexture(B),j=B)}function sn(B,Ce,he){he===void 0&&(j===null?he=t.TEXTURE0+le-1:he=j);let Ie=q[he];Ie===void 0&&(Ie={type:void 0,texture:void 0},q[he]=Ie),(Ie.type!==B||Ie.texture!==Ce)&&(j!==he&&(t.activeTexture(he),j=he),t.bindTexture(B,Ce||Ae[B]),Ie.type=B,Ie.texture=Ce)}function k(){const B=q[j];B!==void 0&&B.type!==void 0&&(t.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function R(){try{t.compressedTexImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Q(){try{t.compressedTexImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ae(){try{t.texSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function fe(){try{t.texSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function re(){try{t.compressedTexSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Be(){try{t.compressedTexSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Me(){try{t.texStorage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ke(){try{t.texStorage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function He(){try{t.texImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function de(){try{t.texImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Le(B){qe.equals(B)===!1&&(t.scissor(B.x,B.y,B.z,B.w),qe.copy(B))}function et(B){te.equals(B)===!1&&(t.viewport(B.x,B.y,B.z,B.w),te.copy(B))}function $e(B,Ce){let he=d.get(Ce);he===void 0&&(he=new WeakMap,d.set(Ce,he));let Ie=he.get(B);Ie===void 0&&(Ie=t.getUniformBlockIndex(Ce,B.name),he.set(B,Ie))}function Ee(B,Ce){const Ie=d.get(Ce).get(B);f.get(Ce)!==Ie&&(t.uniformBlockBinding(Ce,Ie,B.__bindingPointIndex),f.set(Ce,Ie))}function it(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),l.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},j=null,q={},m={},v=new WeakMap,_=[],x=null,w=!1,E=null,g=null,S=null,M=null,A=null,I=null,N=null,L=new Ct(0,0,0),O=0,P=!1,C=null,U=null,K=null,Y=null,se=null,qe.set(0,0,t.canvas.width,t.canvas.height),te.set(0,0,t.canvas.width,t.canvas.height),s.reset(),l.reset(),u.reset()}return{buffers:{color:s,depth:l,stencil:u},enable:xe,disable:Ye,bindFramebuffer:Et,drawBuffers:Ze,useProgram:Mt,setBlending:z,setMaterial:Dn,setFlipSided:Rt,setCullFace:Bt,setLineWidth:ze,setPolygonOffset:At,setScissorTest:Xe,activeTexture:lt,bindTexture:sn,unbindTexture:k,compressedTexImage2D:R,compressedTexImage3D:Q,texImage2D:He,texImage3D:de,updateUBOMapping:$e,uniformBlockBinding:Ee,texStorage2D:Me,texStorage3D:ke,texSubImage2D:ae,texSubImage3D:fe,compressedTexSubImage2D:re,compressedTexSubImage3D:Be,scissor:Le,viewport:et,reset:it}}function YL(t,e,n,i,r,s,l){const u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new nt,h=new WeakMap;let m;const v=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(k,R){return _?new OffscreenCanvas(k,R):Mu("canvas")}function w(k,R,Q){let ae=1;const fe=sn(k);if((fe.width>Q||fe.height>Q)&&(ae=Q/Math.max(fe.width,fe.height)),ae<1)if(typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&k instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&k instanceof ImageBitmap||typeof VideoFrame<"u"&&k instanceof VideoFrame){const re=Math.floor(ae*fe.width),Be=Math.floor(ae*fe.height);m===void 0&&(m=x(re,Be));const Me=R?x(re,Be):m;return Me.width=re,Me.height=Be,Me.getContext("2d").drawImage(k,0,0,re,Be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+fe.width+"x"+fe.height+") to ("+re+"x"+Be+")."),Me}else return"data"in k&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+fe.width+"x"+fe.height+")."),k;return k}function E(k){return k.generateMipmaps}function g(k){t.generateMipmap(k)}function S(k){return k.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:k.isWebGL3DRenderTarget?t.TEXTURE_3D:k.isWebGLArrayRenderTarget||k.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function M(k,R,Q,ae,fe=!1){if(k!==null){if(t[k]!==void 0)return t[k];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+k+"'")}let re=R;if(R===t.RED&&(Q===t.FLOAT&&(re=t.R32F),Q===t.HALF_FLOAT&&(re=t.R16F),Q===t.UNSIGNED_BYTE&&(re=t.R8)),R===t.RED_INTEGER&&(Q===t.UNSIGNED_BYTE&&(re=t.R8UI),Q===t.UNSIGNED_SHORT&&(re=t.R16UI),Q===t.UNSIGNED_INT&&(re=t.R32UI),Q===t.BYTE&&(re=t.R8I),Q===t.SHORT&&(re=t.R16I),Q===t.INT&&(re=t.R32I)),R===t.RG&&(Q===t.FLOAT&&(re=t.RG32F),Q===t.HALF_FLOAT&&(re=t.RG16F),Q===t.UNSIGNED_BYTE&&(re=t.RG8)),R===t.RG_INTEGER&&(Q===t.UNSIGNED_BYTE&&(re=t.RG8UI),Q===t.UNSIGNED_SHORT&&(re=t.RG16UI),Q===t.UNSIGNED_INT&&(re=t.RG32UI),Q===t.BYTE&&(re=t.RG8I),Q===t.SHORT&&(re=t.RG16I),Q===t.INT&&(re=t.RG32I)),R===t.RGB_INTEGER&&(Q===t.UNSIGNED_BYTE&&(re=t.RGB8UI),Q===t.UNSIGNED_SHORT&&(re=t.RGB16UI),Q===t.UNSIGNED_INT&&(re=t.RGB32UI),Q===t.BYTE&&(re=t.RGB8I),Q===t.SHORT&&(re=t.RGB16I),Q===t.INT&&(re=t.RGB32I)),R===t.RGBA_INTEGER&&(Q===t.UNSIGNED_BYTE&&(re=t.RGBA8UI),Q===t.UNSIGNED_SHORT&&(re=t.RGBA16UI),Q===t.UNSIGNED_INT&&(re=t.RGBA32UI),Q===t.BYTE&&(re=t.RGBA8I),Q===t.SHORT&&(re=t.RGBA16I),Q===t.INT&&(re=t.RGBA32I)),R===t.RGB&&Q===t.UNSIGNED_INT_5_9_9_9_REV&&(re=t.RGB9_E5),R===t.RGBA){const Be=fe?vd:Ut.getTransfer(ae);Q===t.FLOAT&&(re=t.RGBA32F),Q===t.HALF_FLOAT&&(re=t.RGBA16F),Q===t.UNSIGNED_BYTE&&(re=Be===Vt?t.SRGB8_ALPHA8:t.RGBA8),Q===t.UNSIGNED_SHORT_4_4_4_4&&(re=t.RGBA4),Q===t.UNSIGNED_SHORT_5_5_5_1&&(re=t.RGB5_A1)}return(re===t.R16F||re===t.R32F||re===t.RG16F||re===t.RG32F||re===t.RGBA16F||re===t.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function A(k,R){let Q;return k?R===null||R===Hs||R===Ka?Q=t.DEPTH24_STENCIL8:R===Ar?Q=t.DEPTH32F_STENCIL8:R===xu&&(Q=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===Hs||R===Ka?Q=t.DEPTH_COMPONENT24:R===Ar?Q=t.DEPTH_COMPONENT32F:R===xu&&(Q=t.DEPTH_COMPONENT16),Q}function I(k,R){return E(k)===!0||k.isFramebufferTexture&&k.minFilter!==ei&&k.minFilter!==hi?Math.log2(Math.max(R.width,R.height))+1:k.mipmaps!==void 0&&k.mipmaps.length>0?k.mipmaps.length:k.isCompressedTexture&&Array.isArray(k.image)?R.mipmaps.length:1}function N(k){const R=k.target;R.removeEventListener("dispose",N),O(R),R.isVideoTexture&&h.delete(R)}function L(k){const R=k.target;R.removeEventListener("dispose",L),C(R)}function O(k){const R=i.get(k);if(R.__webglInit===void 0)return;const Q=k.source,ae=v.get(Q);if(ae){const fe=ae[R.__cacheKey];fe.usedTimes--,fe.usedTimes===0&&P(k),Object.keys(ae).length===0&&v.delete(Q)}i.remove(k)}function P(k){const R=i.get(k);t.deleteTexture(R.__webglTexture);const Q=k.source,ae=v.get(Q);delete ae[R.__cacheKey],l.memory.textures--}function C(k){const R=i.get(k);if(k.depthTexture&&(k.depthTexture.dispose(),i.remove(k.depthTexture)),k.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(R.__webglFramebuffer[ae]))for(let fe=0;fe<R.__webglFramebuffer[ae].length;fe++)t.deleteFramebuffer(R.__webglFramebuffer[ae][fe]);else t.deleteFramebuffer(R.__webglFramebuffer[ae]);R.__webglDepthbuffer&&t.deleteRenderbuffer(R.__webglDepthbuffer[ae])}else{if(Array.isArray(R.__webglFramebuffer))for(let ae=0;ae<R.__webglFramebuffer.length;ae++)t.deleteFramebuffer(R.__webglFramebuffer[ae]);else t.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&t.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&t.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let ae=0;ae<R.__webglColorRenderbuffer.length;ae++)R.__webglColorRenderbuffer[ae]&&t.deleteRenderbuffer(R.__webglColorRenderbuffer[ae]);R.__webglDepthRenderbuffer&&t.deleteRenderbuffer(R.__webglDepthRenderbuffer)}const Q=k.textures;for(let ae=0,fe=Q.length;ae<fe;ae++){const re=i.get(Q[ae]);re.__webglTexture&&(t.deleteTexture(re.__webglTexture),l.memory.textures--),i.remove(Q[ae])}i.remove(k)}let U=0;function K(){U=0}function Y(){const k=U;return k>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+k+" texture units while this GPU supports only "+r.maxTextures),U+=1,k}function se(k){const R=[];return R.push(k.wrapS),R.push(k.wrapT),R.push(k.wrapR||0),R.push(k.magFilter),R.push(k.minFilter),R.push(k.anisotropy),R.push(k.internalFormat),R.push(k.format),R.push(k.type),R.push(k.generateMipmaps),R.push(k.premultiplyAlpha),R.push(k.flipY),R.push(k.unpackAlignment),R.push(k.colorSpace),R.join()}function le(k,R){const Q=i.get(k);if(k.isVideoTexture&&Xe(k),k.isRenderTargetTexture===!1&&k.version>0&&Q.__version!==k.version){const ae=k.image;if(ae===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ae(Q,k,R);return}}n.bindTexture(t.TEXTURE_2D,Q.__webglTexture,t.TEXTURE0+R)}function ie(k,R){const Q=i.get(k);if(k.version>0&&Q.__version!==k.version){Ae(Q,k,R);return}n.bindTexture(t.TEXTURE_2D_ARRAY,Q.__webglTexture,t.TEXTURE0+R)}function ce(k,R){const Q=i.get(k);if(k.version>0&&Q.__version!==k.version){Ae(Q,k,R);return}n.bindTexture(t.TEXTURE_3D,Q.__webglTexture,t.TEXTURE0+R)}function b(k,R){const Q=i.get(k);if(k.version>0&&Q.__version!==k.version){xe(Q,k,R);return}n.bindTexture(t.TEXTURE_CUBE_MAP,Q.__webglTexture,t.TEXTURE0+R)}const j={[wg]:t.REPEAT,[yo]:t.CLAMP_TO_EDGE,[Ag]:t.MIRRORED_REPEAT},q={[ei]:t.NEAREST,[rR]:t.NEAREST_MIPMAP_NEAREST,[Qc]:t.NEAREST_MIPMAP_LINEAR,[hi]:t.LINEAR,[Dp]:t.LINEAR_MIPMAP_NEAREST,[xo]:t.LINEAR_MIPMAP_LINEAR},oe={[aR]:t.NEVER,[hR]:t.ALWAYS,[lR]:t.LESS,[r1]:t.LEQUAL,[uR]:t.EQUAL,[dR]:t.GEQUAL,[cR]:t.GREATER,[fR]:t.NOTEQUAL};function ye(k,R){if(R.type===Ar&&e.has("OES_texture_float_linear")===!1&&(R.magFilter===hi||R.magFilter===Dp||R.magFilter===Qc||R.magFilter===xo||R.minFilter===hi||R.minFilter===Dp||R.minFilter===Qc||R.minFilter===xo)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(k,t.TEXTURE_WRAP_S,j[R.wrapS]),t.texParameteri(k,t.TEXTURE_WRAP_T,j[R.wrapT]),(k===t.TEXTURE_3D||k===t.TEXTURE_2D_ARRAY)&&t.texParameteri(k,t.TEXTURE_WRAP_R,j[R.wrapR]),t.texParameteri(k,t.TEXTURE_MAG_FILTER,q[R.magFilter]),t.texParameteri(k,t.TEXTURE_MIN_FILTER,q[R.minFilter]),R.compareFunction&&(t.texParameteri(k,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(k,t.TEXTURE_COMPARE_FUNC,oe[R.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===ei||R.minFilter!==Qc&&R.minFilter!==xo||R.type===Ar&&e.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||i.get(R).__currentAnisotropy){const Q=e.get("EXT_texture_filter_anisotropic");t.texParameterf(k,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,r.getMaxAnisotropy())),i.get(R).__currentAnisotropy=R.anisotropy}}}function qe(k,R){let Q=!1;k.__webglInit===void 0&&(k.__webglInit=!0,R.addEventListener("dispose",N));const ae=R.source;let fe=v.get(ae);fe===void 0&&(fe={},v.set(ae,fe));const re=se(R);if(re!==k.__cacheKey){fe[re]===void 0&&(fe[re]={texture:t.createTexture(),usedTimes:0},l.memory.textures++,Q=!0),fe[re].usedTimes++;const Be=fe[k.__cacheKey];Be!==void 0&&(fe[k.__cacheKey].usedTimes--,Be.usedTimes===0&&P(R)),k.__cacheKey=re,k.__webglTexture=fe[re].texture}return Q}function te(k,R,Q){return Math.floor(Math.floor(k/Q)/R)}function pe(k,R,Q,ae){const re=k.updateRanges;if(re.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,R.width,R.height,Q,ae,R.data);else{re.sort((de,Le)=>de.start-Le.start);let Be=0;for(let de=1;de<re.length;de++){const Le=re[Be],et=re[de],$e=Le.start+Le.count,Ee=te(et.start,R.width,4),it=te(Le.start,R.width,4);et.start<=$e+1&&Ee===it&&te(et.start+et.count-1,R.width,4)===Ee?Le.count=Math.max(Le.count,et.start+et.count-Le.start):(++Be,re[Be]=et)}re.length=Be+1;const Me=t.getParameter(t.UNPACK_ROW_LENGTH),ke=t.getParameter(t.UNPACK_SKIP_PIXELS),He=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,R.width);for(let de=0,Le=re.length;de<Le;de++){const et=re[de],$e=Math.floor(et.start/4),Ee=Math.ceil(et.count/4),it=$e%R.width,B=Math.floor($e/R.width),Ce=Ee,he=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,it),t.pixelStorei(t.UNPACK_SKIP_ROWS,B),n.texSubImage2D(t.TEXTURE_2D,0,it,B,Ce,he,Q,ae,R.data)}k.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,Me),t.pixelStorei(t.UNPACK_SKIP_PIXELS,ke),t.pixelStorei(t.UNPACK_SKIP_ROWS,He)}}function Ae(k,R,Q){let ae=t.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(ae=t.TEXTURE_2D_ARRAY),R.isData3DTexture&&(ae=t.TEXTURE_3D);const fe=qe(k,R),re=R.source;n.bindTexture(ae,k.__webglTexture,t.TEXTURE0+Q);const Be=i.get(re);if(re.version!==Be.__version||fe===!0){n.activeTexture(t.TEXTURE0+Q);const Me=Ut.getPrimaries(Ut.workingColorSpace),ke=R.colorSpace===wr?null:Ut.getPrimaries(R.colorSpace),He=R.colorSpace===wr||Me===ke?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,R.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,R.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);let de=w(R.image,!1,r.maxTextureSize);de=lt(R,de);const Le=s.convert(R.format,R.colorSpace),et=s.convert(R.type);let $e=M(R.internalFormat,Le,et,R.colorSpace,R.isVideoTexture);ye(ae,R);let Ee;const it=R.mipmaps,B=R.isVideoTexture!==!0,Ce=Be.__version===void 0||fe===!0,he=re.dataReady,Ie=I(R,de);if(R.isDepthTexture)$e=A(R.format===Qa,R.type),Ce&&(B?n.texStorage2D(t.TEXTURE_2D,1,$e,de.width,de.height):n.texImage2D(t.TEXTURE_2D,0,$e,de.width,de.height,0,Le,et,null));else if(R.isDataTexture)if(it.length>0){B&&Ce&&n.texStorage2D(t.TEXTURE_2D,Ie,$e,it[0].width,it[0].height);for(let ge=0,ue=it.length;ge<ue;ge++)Ee=it[ge],B?he&&n.texSubImage2D(t.TEXTURE_2D,ge,0,0,Ee.width,Ee.height,Le,et,Ee.data):n.texImage2D(t.TEXTURE_2D,ge,$e,Ee.width,Ee.height,0,Le,et,Ee.data);R.generateMipmaps=!1}else B?(Ce&&n.texStorage2D(t.TEXTURE_2D,Ie,$e,de.width,de.height),he&&pe(R,de,Le,et)):n.texImage2D(t.TEXTURE_2D,0,$e,de.width,de.height,0,Le,et,de.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){B&&Ce&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ie,$e,it[0].width,it[0].height,de.depth);for(let ge=0,ue=it.length;ge<ue;ge++)if(Ee=it[ge],R.format!==ji)if(Le!==null)if(B){if(he)if(R.layerUpdates.size>0){const be=Hx(Ee.width,Ee.height,R.format,R.type);for(const st of R.layerUpdates){const Ht=Ee.data.subarray(st*be/Ee.data.BYTES_PER_ELEMENT,(st+1)*be/Ee.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ge,0,0,st,Ee.width,Ee.height,1,Le,Ht)}R.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ge,0,0,0,Ee.width,Ee.height,de.depth,Le,Ee.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ge,$e,Ee.width,Ee.height,de.depth,0,Ee.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else B?he&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ge,0,0,0,Ee.width,Ee.height,de.depth,Le,et,Ee.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ge,$e,Ee.width,Ee.height,de.depth,0,Le,et,Ee.data)}else{B&&Ce&&n.texStorage2D(t.TEXTURE_2D,Ie,$e,it[0].width,it[0].height);for(let ge=0,ue=it.length;ge<ue;ge++)Ee=it[ge],R.format!==ji?Le!==null?B?he&&n.compressedTexSubImage2D(t.TEXTURE_2D,ge,0,0,Ee.width,Ee.height,Le,Ee.data):n.compressedTexImage2D(t.TEXTURE_2D,ge,$e,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):B?he&&n.texSubImage2D(t.TEXTURE_2D,ge,0,0,Ee.width,Ee.height,Le,et,Ee.data):n.texImage2D(t.TEXTURE_2D,ge,$e,Ee.width,Ee.height,0,Le,et,Ee.data)}else if(R.isDataArrayTexture)if(B){if(Ce&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ie,$e,de.width,de.height,de.depth),he)if(R.layerUpdates.size>0){const ge=Hx(de.width,de.height,R.format,R.type);for(const ue of R.layerUpdates){const be=de.data.subarray(ue*ge/de.data.BYTES_PER_ELEMENT,(ue+1)*ge/de.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ue,de.width,de.height,1,Le,et,be)}R.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,Le,et,de.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,$e,de.width,de.height,de.depth,0,Le,et,de.data);else if(R.isData3DTexture)B?(Ce&&n.texStorage3D(t.TEXTURE_3D,Ie,$e,de.width,de.height,de.depth),he&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,Le,et,de.data)):n.texImage3D(t.TEXTURE_3D,0,$e,de.width,de.height,de.depth,0,Le,et,de.data);else if(R.isFramebufferTexture){if(Ce)if(B)n.texStorage2D(t.TEXTURE_2D,Ie,$e,de.width,de.height);else{let ge=de.width,ue=de.height;for(let be=0;be<Ie;be++)n.texImage2D(t.TEXTURE_2D,be,$e,ge,ue,0,Le,et,null),ge>>=1,ue>>=1}}else if(it.length>0){if(B&&Ce){const ge=sn(it[0]);n.texStorage2D(t.TEXTURE_2D,Ie,$e,ge.width,ge.height)}for(let ge=0,ue=it.length;ge<ue;ge++)Ee=it[ge],B?he&&n.texSubImage2D(t.TEXTURE_2D,ge,0,0,Le,et,Ee):n.texImage2D(t.TEXTURE_2D,ge,$e,Le,et,Ee);R.generateMipmaps=!1}else if(B){if(Ce){const ge=sn(de);n.texStorage2D(t.TEXTURE_2D,Ie,$e,ge.width,ge.height)}he&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Le,et,de)}else n.texImage2D(t.TEXTURE_2D,0,$e,Le,et,de);E(R)&&g(ae),Be.__version=re.version,R.onUpdate&&R.onUpdate(R)}k.__version=R.version}function xe(k,R,Q){if(R.image.length!==6)return;const ae=qe(k,R),fe=R.source;n.bindTexture(t.TEXTURE_CUBE_MAP,k.__webglTexture,t.TEXTURE0+Q);const re=i.get(fe);if(fe.version!==re.__version||ae===!0){n.activeTexture(t.TEXTURE0+Q);const Be=Ut.getPrimaries(Ut.workingColorSpace),Me=R.colorSpace===wr?null:Ut.getPrimaries(R.colorSpace),ke=R.colorSpace===wr||Be===Me?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,R.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,R.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);const He=R.isCompressedTexture||R.image[0].isCompressedTexture,de=R.image[0]&&R.image[0].isDataTexture,Le=[];for(let ue=0;ue<6;ue++)!He&&!de?Le[ue]=w(R.image[ue],!0,r.maxCubemapSize):Le[ue]=de?R.image[ue].image:R.image[ue],Le[ue]=lt(R,Le[ue]);const et=Le[0],$e=s.convert(R.format,R.colorSpace),Ee=s.convert(R.type),it=M(R.internalFormat,$e,Ee,R.colorSpace),B=R.isVideoTexture!==!0,Ce=re.__version===void 0||ae===!0,he=fe.dataReady;let Ie=I(R,et);ye(t.TEXTURE_CUBE_MAP,R);let ge;if(He){B&&Ce&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Ie,it,et.width,et.height);for(let ue=0;ue<6;ue++){ge=Le[ue].mipmaps;for(let be=0;be<ge.length;be++){const st=ge[be];R.format!==ji?$e!==null?B?he&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,be,0,0,st.width,st.height,$e,st.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,be,it,st.width,st.height,0,st.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?he&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,be,0,0,st.width,st.height,$e,Ee,st.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,be,it,st.width,st.height,0,$e,Ee,st.data)}}}else{if(ge=R.mipmaps,B&&Ce){ge.length>0&&Ie++;const ue=sn(Le[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Ie,it,ue.width,ue.height)}for(let ue=0;ue<6;ue++)if(de){B?he&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,Le[ue].width,Le[ue].height,$e,Ee,Le[ue].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,it,Le[ue].width,Le[ue].height,0,$e,Ee,Le[ue].data);for(let be=0;be<ge.length;be++){const Ht=ge[be].image[ue].image;B?he&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,be+1,0,0,Ht.width,Ht.height,$e,Ee,Ht.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,be+1,it,Ht.width,Ht.height,0,$e,Ee,Ht.data)}}else{B?he&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,$e,Ee,Le[ue]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,it,$e,Ee,Le[ue]);for(let be=0;be<ge.length;be++){const st=ge[be];B?he&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,be+1,0,0,$e,Ee,st.image[ue]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,be+1,it,$e,Ee,st.image[ue])}}}E(R)&&g(t.TEXTURE_CUBE_MAP),re.__version=fe.version,R.onUpdate&&R.onUpdate(R)}k.__version=R.version}function Ye(k,R,Q,ae,fe,re){const Be=s.convert(Q.format,Q.colorSpace),Me=s.convert(Q.type),ke=M(Q.internalFormat,Be,Me,Q.colorSpace),He=i.get(R),de=i.get(Q);if(de.__renderTarget=R,!He.__hasExternalTextures){const Le=Math.max(1,R.width>>re),et=Math.max(1,R.height>>re);fe===t.TEXTURE_3D||fe===t.TEXTURE_2D_ARRAY?n.texImage3D(fe,re,ke,Le,et,R.depth,0,Be,Me,null):n.texImage2D(fe,re,ke,Le,et,0,Be,Me,null)}n.bindFramebuffer(t.FRAMEBUFFER,k),At(R)?u.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ae,fe,de.__webglTexture,0,ze(R)):(fe===t.TEXTURE_2D||fe>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&fe<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ae,fe,de.__webglTexture,re),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Et(k,R,Q){if(t.bindRenderbuffer(t.RENDERBUFFER,k),R.depthBuffer){const ae=R.depthTexture,fe=ae&&ae.isDepthTexture?ae.type:null,re=A(R.stencilBuffer,fe),Be=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Me=ze(R);At(R)?u.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Me,re,R.width,R.height):Q?t.renderbufferStorageMultisample(t.RENDERBUFFER,Me,re,R.width,R.height):t.renderbufferStorage(t.RENDERBUFFER,re,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Be,t.RENDERBUFFER,k)}else{const ae=R.textures;for(let fe=0;fe<ae.length;fe++){const re=ae[fe],Be=s.convert(re.format,re.colorSpace),Me=s.convert(re.type),ke=M(re.internalFormat,Be,Me,re.colorSpace),He=ze(R);Q&&At(R)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,He,ke,R.width,R.height):At(R)?u.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,He,ke,R.width,R.height):t.renderbufferStorage(t.RENDERBUFFER,ke,R.width,R.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ze(k,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,k),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ae=i.get(R.depthTexture);ae.__renderTarget=R,(!ae.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),le(R.depthTexture,0);const fe=ae.__webglTexture,re=ze(R);if(R.depthTexture.format===Su)At(R)?u.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,fe,0,re):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,fe,0);else if(R.depthTexture.format===Qa)At(R)?u.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,fe,0,re):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,fe,0);else throw new Error("Unknown depthTexture format")}function Mt(k){const R=i.get(k),Q=k.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==k.depthTexture){const ae=k.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),ae){const fe=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,ae.removeEventListener("dispose",fe)};ae.addEventListener("dispose",fe),R.__depthDisposeCallback=fe}R.__boundDepthTexture=ae}if(k.depthTexture&&!R.__autoAllocateDepthBuffer){if(Q)throw new Error("target.depthTexture not supported in Cube render targets");const ae=k.texture.mipmaps;ae&&ae.length>0?Ze(R.__webglFramebuffer[0],k):Ze(R.__webglFramebuffer,k)}else if(Q){R.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)if(n.bindFramebuffer(t.FRAMEBUFFER,R.__webglFramebuffer[ae]),R.__webglDepthbuffer[ae]===void 0)R.__webglDepthbuffer[ae]=t.createRenderbuffer(),Et(R.__webglDepthbuffer[ae],k,!1);else{const fe=k.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,re=R.__webglDepthbuffer[ae];t.bindRenderbuffer(t.RENDERBUFFER,re),t.framebufferRenderbuffer(t.FRAMEBUFFER,fe,t.RENDERBUFFER,re)}}else{const ae=k.texture.mipmaps;if(ae&&ae.length>0?n.bindFramebuffer(t.FRAMEBUFFER,R.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=t.createRenderbuffer(),Et(R.__webglDepthbuffer,k,!1);else{const fe=k.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,re=R.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,re),t.framebufferRenderbuffer(t.FRAMEBUFFER,fe,t.RENDERBUFFER,re)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function zt(k,R,Q){const ae=i.get(k);R!==void 0&&Ye(ae.__webglFramebuffer,k,k.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),Q!==void 0&&Mt(k)}function rt(k){const R=k.texture,Q=i.get(k),ae=i.get(R);k.addEventListener("dispose",L);const fe=k.textures,re=k.isWebGLCubeRenderTarget===!0,Be=fe.length>1;if(Be||(ae.__webglTexture===void 0&&(ae.__webglTexture=t.createTexture()),ae.__version=R.version,l.memory.textures++),re){Q.__webglFramebuffer=[];for(let Me=0;Me<6;Me++)if(R.mipmaps&&R.mipmaps.length>0){Q.__webglFramebuffer[Me]=[];for(let ke=0;ke<R.mipmaps.length;ke++)Q.__webglFramebuffer[Me][ke]=t.createFramebuffer()}else Q.__webglFramebuffer[Me]=t.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){Q.__webglFramebuffer=[];for(let Me=0;Me<R.mipmaps.length;Me++)Q.__webglFramebuffer[Me]=t.createFramebuffer()}else Q.__webglFramebuffer=t.createFramebuffer();if(Be)for(let Me=0,ke=fe.length;Me<ke;Me++){const He=i.get(fe[Me]);He.__webglTexture===void 0&&(He.__webglTexture=t.createTexture(),l.memory.textures++)}if(k.samples>0&&At(k)===!1){Q.__webglMultisampledFramebuffer=t.createFramebuffer(),Q.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let Me=0;Me<fe.length;Me++){const ke=fe[Me];Q.__webglColorRenderbuffer[Me]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,Q.__webglColorRenderbuffer[Me]);const He=s.convert(ke.format,ke.colorSpace),de=s.convert(ke.type),Le=M(ke.internalFormat,He,de,ke.colorSpace,k.isXRRenderTarget===!0),et=ze(k);t.renderbufferStorageMultisample(t.RENDERBUFFER,et,Le,k.width,k.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Me,t.RENDERBUFFER,Q.__webglColorRenderbuffer[Me])}t.bindRenderbuffer(t.RENDERBUFFER,null),k.depthBuffer&&(Q.__webglDepthRenderbuffer=t.createRenderbuffer(),Et(Q.__webglDepthRenderbuffer,k,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(re){n.bindTexture(t.TEXTURE_CUBE_MAP,ae.__webglTexture),ye(t.TEXTURE_CUBE_MAP,R);for(let Me=0;Me<6;Me++)if(R.mipmaps&&R.mipmaps.length>0)for(let ke=0;ke<R.mipmaps.length;ke++)Ye(Q.__webglFramebuffer[Me][ke],k,R,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Me,ke);else Ye(Q.__webglFramebuffer[Me],k,R,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0);E(R)&&g(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Be){for(let Me=0,ke=fe.length;Me<ke;Me++){const He=fe[Me],de=i.get(He);n.bindTexture(t.TEXTURE_2D,de.__webglTexture),ye(t.TEXTURE_2D,He),Ye(Q.__webglFramebuffer,k,He,t.COLOR_ATTACHMENT0+Me,t.TEXTURE_2D,0),E(He)&&g(t.TEXTURE_2D)}n.unbindTexture()}else{let Me=t.TEXTURE_2D;if((k.isWebGL3DRenderTarget||k.isWebGLArrayRenderTarget)&&(Me=k.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Me,ae.__webglTexture),ye(Me,R),R.mipmaps&&R.mipmaps.length>0)for(let ke=0;ke<R.mipmaps.length;ke++)Ye(Q.__webglFramebuffer[ke],k,R,t.COLOR_ATTACHMENT0,Me,ke);else Ye(Q.__webglFramebuffer,k,R,t.COLOR_ATTACHMENT0,Me,0);E(R)&&g(Me),n.unbindTexture()}k.depthBuffer&&Mt(k)}function z(k){const R=k.textures;for(let Q=0,ae=R.length;Q<ae;Q++){const fe=R[Q];if(E(fe)){const re=S(k),Be=i.get(fe).__webglTexture;n.bindTexture(re,Be),g(re),n.unbindTexture()}}}const Dn=[],Rt=[];function Bt(k){if(k.samples>0){if(At(k)===!1){const R=k.textures,Q=k.width,ae=k.height;let fe=t.COLOR_BUFFER_BIT;const re=k.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Be=i.get(k),Me=R.length>1;if(Me)for(let He=0;He<R.length;He++)n.bindFramebuffer(t.FRAMEBUFFER,Be.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+He,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Be.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+He,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Be.__webglMultisampledFramebuffer);const ke=k.texture.mipmaps;ke&&ke.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Be.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Be.__webglFramebuffer);for(let He=0;He<R.length;He++){if(k.resolveDepthBuffer&&(k.depthBuffer&&(fe|=t.DEPTH_BUFFER_BIT),k.stencilBuffer&&k.resolveStencilBuffer&&(fe|=t.STENCIL_BUFFER_BIT)),Me){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Be.__webglColorRenderbuffer[He]);const de=i.get(R[He]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,de,0)}t.blitFramebuffer(0,0,Q,ae,0,0,Q,ae,fe,t.NEAREST),f===!0&&(Dn.length=0,Rt.length=0,Dn.push(t.COLOR_ATTACHMENT0+He),k.depthBuffer&&k.resolveDepthBuffer===!1&&(Dn.push(re),Rt.push(re),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Rt)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Dn))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Me)for(let He=0;He<R.length;He++){n.bindFramebuffer(t.FRAMEBUFFER,Be.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+He,t.RENDERBUFFER,Be.__webglColorRenderbuffer[He]);const de=i.get(R[He]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Be.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+He,t.TEXTURE_2D,de,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Be.__webglMultisampledFramebuffer)}else if(k.depthBuffer&&k.resolveDepthBuffer===!1&&f){const R=k.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[R])}}}function ze(k){return Math.min(r.maxSamples,k.samples)}function At(k){const R=i.get(k);return k.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function Xe(k){const R=l.render.frame;h.get(k)!==R&&(h.set(k,R),k.update())}function lt(k,R){const Q=k.colorSpace,ae=k.format,fe=k.type;return k.isCompressedTexture===!0||k.isVideoTexture===!0||Q!==Vs&&Q!==wr&&(Ut.getTransfer(Q)===Vt?(ae!==ji||fe!==Rn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Q)),R}function sn(k){return typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement?(d.width=k.naturalWidth||k.width,d.height=k.naturalHeight||k.height):typeof VideoFrame<"u"&&k instanceof VideoFrame?(d.width=k.displayWidth,d.height=k.displayHeight):(d.width=k.width,d.height=k.height),d}this.allocateTextureUnit=Y,this.resetTextureUnits=K,this.setTexture2D=le,this.setTexture2DArray=ie,this.setTexture3D=ce,this.setTextureCube=b,this.rebindTextures=zt,this.setupRenderTarget=rt,this.updateRenderTargetMipmap=z,this.updateMultisampleRenderTarget=Bt,this.setupDepthRenderbuffer=Mt,this.setupFrameBufferTexture=Ye,this.useMultisampledRTT=At}function qL(t,e){function n(i,r=wr){let s;const l=Ut.getTransfer(r);if(i===Rn)return t.UNSIGNED_BYTE;if(i===s0)return t.UNSIGNED_SHORT_4_4_4_4;if(i===o0)return t.UNSIGNED_SHORT_5_5_5_1;if(i===ZM)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===KM)return t.BYTE;if(i===QM)return t.SHORT;if(i===xu)return t.UNSIGNED_SHORT;if(i===r0)return t.INT;if(i===Hs)return t.UNSIGNED_INT;if(i===Ar)return t.FLOAT;if(i===nl)return t.HALF_FLOAT;if(i===$M)return t.ALPHA;if(i===JM)return t.RGB;if(i===ji)return t.RGBA;if(i===Su)return t.DEPTH_COMPONENT;if(i===Qa)return t.DEPTH_STENCIL;if(i===e1)return t.RED;if(i===a0)return t.RED_INTEGER;if(i===t1)return t.RG;if(i===l0)return t.RG_INTEGER;if(i===u0)return t.RGBA_INTEGER;if(i===kf||i===zf||i===Bf||i===Hf)if(l===Vt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===kf)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===zf)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Bf)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Hf)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===kf)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===zf)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Bf)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Hf)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Cg||i===Rg||i===Pg||i===Dg)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Cg)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Rg)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Pg)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Dg)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Lg||i===Ng||i===Ig)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Lg||i===Ng)return l===Vt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Ig)return l===Vt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ug||i===bg||i===Fg||i===Og||i===kg||i===zg||i===Bg||i===Hg||i===Vg||i===Gg||i===Wg||i===Xg||i===jg||i===Yg)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Ug)return l===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===bg)return l===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Fg)return l===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Og)return l===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===kg)return l===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===zg)return l===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Bg)return l===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Hg)return l===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Vg)return l===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Gg)return l===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Wg)return l===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Xg)return l===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===jg)return l===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Yg)return l===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Vf||i===qg||i===Kg)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Vf)return l===Vt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===qg)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Kg)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===n1||i===Qg||i===Zg||i===$g)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Vf)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Qg)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Zg)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===$g)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ka?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const KL=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,QL=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class ZL{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new vn,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!==i.depthNear||n.depthFar!==i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Pn({vertexShader:KL,fragmentShader:QL,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ar(new Uu(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $L extends ss{constructor(e,n){super();const i=this;let r=null,s=1,l=null,u="local-floor",f=1,d=null,h=null,m=null,v=null,_=null,x=null;const w=new ZL,E=n.getContextAttributes();let g=null,S=null;const M=[],A=[],I=new nt;let N=null;const L=new fi;L.viewport=new Jt;const O=new fi;O.viewport=new Jt;const P=[L,O],C=new v2;let U=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let pe=M[te];return pe===void 0&&(pe=new Zp,M[te]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(te){let pe=M[te];return pe===void 0&&(pe=new Zp,M[te]=pe),pe.getGripSpace()},this.getHand=function(te){let pe=M[te];return pe===void 0&&(pe=new Zp,M[te]=pe),pe.getHandSpace()};function Y(te){const pe=A.indexOf(te.inputSource);if(pe===-1)return;const Ae=M[pe];Ae!==void 0&&(Ae.update(te.inputSource,te.frame,d||l),Ae.dispatchEvent({type:te.type,data:te.inputSource}))}function se(){r.removeEventListener("select",Y),r.removeEventListener("selectstart",Y),r.removeEventListener("selectend",Y),r.removeEventListener("squeeze",Y),r.removeEventListener("squeezestart",Y),r.removeEventListener("squeezeend",Y),r.removeEventListener("end",se),r.removeEventListener("inputsourceschange",le);for(let te=0;te<M.length;te++){const pe=A[te];pe!==null&&(A[te]=null,M[te].disconnect(pe))}U=null,K=null,w.reset(),e.setRenderTarget(g),_=null,v=null,m=null,r=null,S=null,qe.stop(),i.isPresenting=!1,e.setPixelRatio(N),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){s=te,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){u=te,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||l},this.setReferenceSpace=function(te){d=te},this.getBaseLayer=function(){return v!==null?v:_},this.getBinding=function(){return m},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(te){if(r=te,r!==null){if(g=e.getRenderTarget(),r.addEventListener("select",Y),r.addEventListener("selectstart",Y),r.addEventListener("selectend",Y),r.addEventListener("squeeze",Y),r.addEventListener("squeezestart",Y),r.addEventListener("squeezeend",Y),r.addEventListener("end",se),r.addEventListener("inputsourceschange",le),E.xrCompatible!==!0&&await n.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(I),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ae=null,xe=null,Ye=null;E.depth&&(Ye=E.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Ae=E.stencil?Qa:Su,xe=E.stencil?Ka:Hs);const Et={colorFormat:n.RGBA8,depthFormat:Ye,scaleFactor:s};m=new XRWebGLBinding(r,n),v=m.createProjectionLayer(Et),r.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),S=new ti(v.textureWidth,v.textureHeight,{format:ji,type:Rn,depthTexture:new d0(v.textureWidth,v.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,Ae),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const Ae={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:s};_=new XRWebGLLayer(r,n,Ae),r.updateRenderState({baseLayer:_}),e.setPixelRatio(1),e.setSize(_.framebufferWidth,_.framebufferHeight,!1),S=new ti(_.framebufferWidth,_.framebufferHeight,{format:ji,type:Rn,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(f),d=null,l=await r.requestReferenceSpace(u),qe.setContext(r),qe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return w.getDepthTexture()};function le(te){for(let pe=0;pe<te.removed.length;pe++){const Ae=te.removed[pe],xe=A.indexOf(Ae);xe>=0&&(A[xe]=null,M[xe].disconnect(Ae))}for(let pe=0;pe<te.added.length;pe++){const Ae=te.added[pe];let xe=A.indexOf(Ae);if(xe===-1){for(let Et=0;Et<M.length;Et++)if(Et>=A.length){A.push(Ae),xe=Et;break}else if(A[Et]===null){A[Et]=Ae,xe=Et;break}if(xe===-1)break}const Ye=M[xe];Ye&&Ye.connect(Ae)}}const ie=new X,ce=new X;function b(te,pe,Ae){ie.setFromMatrixPosition(pe.matrixWorld),ce.setFromMatrixPosition(Ae.matrixWorld);const xe=ie.distanceTo(ce),Ye=pe.projectionMatrix.elements,Et=Ae.projectionMatrix.elements,Ze=Ye[14]/(Ye[10]-1),Mt=Ye[14]/(Ye[10]+1),zt=(Ye[9]+1)/Ye[5],rt=(Ye[9]-1)/Ye[5],z=(Ye[8]-1)/Ye[0],Dn=(Et[8]+1)/Et[0],Rt=Ze*z,Bt=Ze*Dn,ze=xe/(-z+Dn),At=ze*-z;if(pe.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(At),te.translateZ(ze),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),Ye[10]===-1)te.projectionMatrix.copy(pe.projectionMatrix),te.projectionMatrixInverse.copy(pe.projectionMatrixInverse);else{const Xe=Ze+ze,lt=Mt+ze,sn=Rt-At,k=Bt+(xe-At),R=zt*Mt/lt*Xe,Q=rt*Mt/lt*Xe;te.projectionMatrix.makePerspective(sn,k,R,Q,Xe,lt),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function j(te,pe){pe===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(pe.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(r===null)return;let pe=te.near,Ae=te.far;w.texture!==null&&(w.depthNear>0&&(pe=w.depthNear),w.depthFar>0&&(Ae=w.depthFar)),C.near=O.near=L.near=pe,C.far=O.far=L.far=Ae,(U!==C.near||K!==C.far)&&(r.updateRenderState({depthNear:C.near,depthFar:C.far}),U=C.near,K=C.far),L.layers.mask=te.layers.mask|2,O.layers.mask=te.layers.mask|4,C.layers.mask=L.layers.mask|O.layers.mask;const xe=te.parent,Ye=C.cameras;j(C,xe);for(let Et=0;Et<Ye.length;Et++)j(Ye[Et],xe);Ye.length===2?b(C,L,O):C.projectionMatrix.copy(L.projectionMatrix),q(te,C,xe)};function q(te,pe,Ae){Ae===null?te.matrix.copy(pe.matrixWorld):(te.matrix.copy(Ae.matrixWorld),te.matrix.invert(),te.matrix.multiply(pe.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(pe.projectionMatrix),te.projectionMatrixInverse.copy(pe.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=Eu*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(v===null&&_===null))return f},this.setFoveation=function(te){f=te,v!==null&&(v.fixedFoveation=te),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=te)},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(C)};let oe=null;function ye(te,pe){if(h=pe.getViewerPose(d||l),x=pe,h!==null){const Ae=h.views;_!==null&&(e.setRenderTargetFramebuffer(S,_.framebuffer),e.setRenderTarget(S));let xe=!1;Ae.length!==C.cameras.length&&(C.cameras.length=0,xe=!0);for(let Ze=0;Ze<Ae.length;Ze++){const Mt=Ae[Ze];let zt=null;if(_!==null)zt=_.getViewport(Mt);else{const z=m.getViewSubImage(v,Mt);zt=z.viewport,Ze===0&&(e.setRenderTargetTextures(S,z.colorTexture,z.depthStencilTexture),e.setRenderTarget(S))}let rt=P[Ze];rt===void 0&&(rt=new fi,rt.layers.enable(Ze),rt.viewport=new Jt,P[Ze]=rt),rt.matrix.fromArray(Mt.transform.matrix),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale),rt.projectionMatrix.fromArray(Mt.projectionMatrix),rt.projectionMatrixInverse.copy(rt.projectionMatrix).invert(),rt.viewport.set(zt.x,zt.y,zt.width,zt.height),Ze===0&&(C.matrix.copy(rt.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),xe===!0&&C.cameras.push(rt)}const Ye=r.enabledFeatures;if(Ye&&Ye.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&m){const Ze=m.getDepthInformation(Ae[0]);Ze&&Ze.isValid&&Ze.texture&&w.init(e,Ze,r.renderState)}}for(let Ae=0;Ae<M.length;Ae++){const xe=A[Ae],Ye=M[Ae];xe!==null&&Ye!==void 0&&Ye.update(xe,pe,d||l)}oe&&oe(te,pe),pe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:pe}),x=null}const qe=new g1;qe.setAnimationLoop(ye),this.setAnimationLoop=function(te){oe=te},this.dispose=function(){}}}const lo=new ns,JL=new qt;function eN(t,e){function n(E,g){E.matrixAutoUpdate===!0&&E.updateMatrix(),g.value.copy(E.matrix)}function i(E,g){g.color.getRGB(E.fogColor.value,f1(t)),g.isFog?(E.fogNear.value=g.near,E.fogFar.value=g.far):g.isFogExp2&&(E.fogDensity.value=g.density)}function r(E,g,S,M,A){g.isMeshBasicMaterial||g.isMeshLambertMaterial?s(E,g):g.isMeshToonMaterial?(s(E,g),m(E,g)):g.isMeshPhongMaterial?(s(E,g),h(E,g)):g.isMeshStandardMaterial?(s(E,g),v(E,g),g.isMeshPhysicalMaterial&&_(E,g,A)):g.isMeshMatcapMaterial?(s(E,g),x(E,g)):g.isMeshDepthMaterial?s(E,g):g.isMeshDistanceMaterial?(s(E,g),w(E,g)):g.isMeshNormalMaterial?s(E,g):g.isLineBasicMaterial?(l(E,g),g.isLineDashedMaterial&&u(E,g)):g.isPointsMaterial?f(E,g,S,M):g.isSpriteMaterial?d(E,g):g.isShadowMaterial?(E.color.value.copy(g.color),E.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(E,g){E.opacity.value=g.opacity,g.color&&E.diffuse.value.copy(g.color),g.emissive&&E.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(E.map.value=g.map,n(g.map,E.mapTransform)),g.alphaMap&&(E.alphaMap.value=g.alphaMap,n(g.alphaMap,E.alphaMapTransform)),g.bumpMap&&(E.bumpMap.value=g.bumpMap,n(g.bumpMap,E.bumpMapTransform),E.bumpScale.value=g.bumpScale,g.side===An&&(E.bumpScale.value*=-1)),g.normalMap&&(E.normalMap.value=g.normalMap,n(g.normalMap,E.normalMapTransform),E.normalScale.value.copy(g.normalScale),g.side===An&&E.normalScale.value.negate()),g.displacementMap&&(E.displacementMap.value=g.displacementMap,n(g.displacementMap,E.displacementMapTransform),E.displacementScale.value=g.displacementScale,E.displacementBias.value=g.displacementBias),g.emissiveMap&&(E.emissiveMap.value=g.emissiveMap,n(g.emissiveMap,E.emissiveMapTransform)),g.specularMap&&(E.specularMap.value=g.specularMap,n(g.specularMap,E.specularMapTransform)),g.alphaTest>0&&(E.alphaTest.value=g.alphaTest);const S=e.get(g),M=S.envMap,A=S.envMapRotation;M&&(E.envMap.value=M,lo.copy(A),lo.x*=-1,lo.y*=-1,lo.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(lo.y*=-1,lo.z*=-1),E.envMapRotation.value.setFromMatrix4(JL.makeRotationFromEuler(lo)),E.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,E.reflectivity.value=g.reflectivity,E.ior.value=g.ior,E.refractionRatio.value=g.refractionRatio),g.lightMap&&(E.lightMap.value=g.lightMap,E.lightMapIntensity.value=g.lightMapIntensity,n(g.lightMap,E.lightMapTransform)),g.aoMap&&(E.aoMap.value=g.aoMap,E.aoMapIntensity.value=g.aoMapIntensity,n(g.aoMap,E.aoMapTransform))}function l(E,g){E.diffuse.value.copy(g.color),E.opacity.value=g.opacity,g.map&&(E.map.value=g.map,n(g.map,E.mapTransform))}function u(E,g){E.dashSize.value=g.dashSize,E.totalSize.value=g.dashSize+g.gapSize,E.scale.value=g.scale}function f(E,g,S,M){E.diffuse.value.copy(g.color),E.opacity.value=g.opacity,E.size.value=g.size*S,E.scale.value=M*.5,g.map&&(E.map.value=g.map,n(g.map,E.uvTransform)),g.alphaMap&&(E.alphaMap.value=g.alphaMap,n(g.alphaMap,E.alphaMapTransform)),g.alphaTest>0&&(E.alphaTest.value=g.alphaTest)}function d(E,g){E.diffuse.value.copy(g.color),E.opacity.value=g.opacity,E.rotation.value=g.rotation,g.map&&(E.map.value=g.map,n(g.map,E.mapTransform)),g.alphaMap&&(E.alphaMap.value=g.alphaMap,n(g.alphaMap,E.alphaMapTransform)),g.alphaTest>0&&(E.alphaTest.value=g.alphaTest)}function h(E,g){E.specular.value.copy(g.specular),E.shininess.value=Math.max(g.shininess,1e-4)}function m(E,g){g.gradientMap&&(E.gradientMap.value=g.gradientMap)}function v(E,g){E.metalness.value=g.metalness,g.metalnessMap&&(E.metalnessMap.value=g.metalnessMap,n(g.metalnessMap,E.metalnessMapTransform)),E.roughness.value=g.roughness,g.roughnessMap&&(E.roughnessMap.value=g.roughnessMap,n(g.roughnessMap,E.roughnessMapTransform)),g.envMap&&(E.envMapIntensity.value=g.envMapIntensity)}function _(E,g,S){E.ior.value=g.ior,g.sheen>0&&(E.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),E.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(E.sheenColorMap.value=g.sheenColorMap,n(g.sheenColorMap,E.sheenColorMapTransform)),g.sheenRoughnessMap&&(E.sheenRoughnessMap.value=g.sheenRoughnessMap,n(g.sheenRoughnessMap,E.sheenRoughnessMapTransform))),g.clearcoat>0&&(E.clearcoat.value=g.clearcoat,E.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(E.clearcoatMap.value=g.clearcoatMap,n(g.clearcoatMap,E.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(E.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,n(g.clearcoatRoughnessMap,E.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(E.clearcoatNormalMap.value=g.clearcoatNormalMap,n(g.clearcoatNormalMap,E.clearcoatNormalMapTransform),E.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===An&&E.clearcoatNormalScale.value.negate())),g.dispersion>0&&(E.dispersion.value=g.dispersion),g.iridescence>0&&(E.iridescence.value=g.iridescence,E.iridescenceIOR.value=g.iridescenceIOR,E.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],E.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(E.iridescenceMap.value=g.iridescenceMap,n(g.iridescenceMap,E.iridescenceMapTransform)),g.iridescenceThicknessMap&&(E.iridescenceThicknessMap.value=g.iridescenceThicknessMap,n(g.iridescenceThicknessMap,E.iridescenceThicknessMapTransform))),g.transmission>0&&(E.transmission.value=g.transmission,E.transmissionSamplerMap.value=S.texture,E.transmissionSamplerSize.value.set(S.width,S.height),g.transmissionMap&&(E.transmissionMap.value=g.transmissionMap,n(g.transmissionMap,E.transmissionMapTransform)),E.thickness.value=g.thickness,g.thicknessMap&&(E.thicknessMap.value=g.thicknessMap,n(g.thicknessMap,E.thicknessMapTransform)),E.attenuationDistance.value=g.attenuationDistance,E.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(E.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(E.anisotropyMap.value=g.anisotropyMap,n(g.anisotropyMap,E.anisotropyMapTransform))),E.specularIntensity.value=g.specularIntensity,E.specularColor.value.copy(g.specularColor),g.specularColorMap&&(E.specularColorMap.value=g.specularColorMap,n(g.specularColorMap,E.specularColorMapTransform)),g.specularIntensityMap&&(E.specularIntensityMap.value=g.specularIntensityMap,n(g.specularIntensityMap,E.specularIntensityMapTransform))}function x(E,g){g.matcap&&(E.matcap.value=g.matcap)}function w(E,g){const S=e.get(g).light;E.referencePosition.value.setFromMatrixPosition(S.matrixWorld),E.nearDistance.value=S.shadow.camera.near,E.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function tN(t,e,n,i){let r={},s={},l=[];const u=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function f(S,M){const A=M.program;i.uniformBlockBinding(S,A)}function d(S,M){let A=r[S.id];A===void 0&&(x(S),A=h(S),r[S.id]=A,S.addEventListener("dispose",E));const I=M.program;i.updateUBOMapping(S,I);const N=e.render.frame;s[S.id]!==N&&(v(S),s[S.id]=N)}function h(S){const M=m();S.__bindingPointIndex=M;const A=t.createBuffer(),I=S.__size,N=S.usage;return t.bindBuffer(t.UNIFORM_BUFFER,A),t.bufferData(t.UNIFORM_BUFFER,I,N),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,M,A),A}function m(){for(let S=0;S<u;S++)if(l.indexOf(S)===-1)return l.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(S){const M=r[S.id],A=S.uniforms,I=S.__cache;t.bindBuffer(t.UNIFORM_BUFFER,M);for(let N=0,L=A.length;N<L;N++){const O=Array.isArray(A[N])?A[N]:[A[N]];for(let P=0,C=O.length;P<C;P++){const U=O[P];if(_(U,N,P,I)===!0){const K=U.__offset,Y=Array.isArray(U.value)?U.value:[U.value];let se=0;for(let le=0;le<Y.length;le++){const ie=Y[le],ce=w(ie);typeof ie=="number"||typeof ie=="boolean"?(U.__data[0]=ie,t.bufferSubData(t.UNIFORM_BUFFER,K+se,U.__data)):ie.isMatrix3?(U.__data[0]=ie.elements[0],U.__data[1]=ie.elements[1],U.__data[2]=ie.elements[2],U.__data[3]=0,U.__data[4]=ie.elements[3],U.__data[5]=ie.elements[4],U.__data[6]=ie.elements[5],U.__data[7]=0,U.__data[8]=ie.elements[6],U.__data[9]=ie.elements[7],U.__data[10]=ie.elements[8],U.__data[11]=0):(ie.toArray(U.__data,se),se+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,K,U.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function _(S,M,A,I){const N=S.value,L=M+"_"+A;if(I[L]===void 0)return typeof N=="number"||typeof N=="boolean"?I[L]=N:I[L]=N.clone(),!0;{const O=I[L];if(typeof N=="number"||typeof N=="boolean"){if(O!==N)return I[L]=N,!0}else if(O.equals(N)===!1)return O.copy(N),!0}return!1}function x(S){const M=S.uniforms;let A=0;const I=16;for(let L=0,O=M.length;L<O;L++){const P=Array.isArray(M[L])?M[L]:[M[L]];for(let C=0,U=P.length;C<U;C++){const K=P[C],Y=Array.isArray(K.value)?K.value:[K.value];for(let se=0,le=Y.length;se<le;se++){const ie=Y[se],ce=w(ie),b=A%I,j=b%ce.boundary,q=b+j;A+=j,q!==0&&I-q<ce.storage&&(A+=I-q),K.__data=new Float32Array(ce.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=A,A+=ce.storage}}}const N=A%I;return N>0&&(A+=I-N),S.__size=A,S.__cache={},this}function w(S){const M={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(M.boundary=4,M.storage=4):S.isVector2?(M.boundary=8,M.storage=8):S.isVector3||S.isColor?(M.boundary=16,M.storage=12):S.isVector4?(M.boundary=16,M.storage=16):S.isMatrix3?(M.boundary=48,M.storage=48):S.isMatrix4?(M.boundary=64,M.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),M}function E(S){const M=S.target;M.removeEventListener("dispose",E);const A=l.indexOf(M.__bindingPointIndex);l.splice(A,1),t.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function g(){for(const S in r)t.deleteBuffer(r[S]);l=[],r={},s={}}return{bind:f,update:d,dispose:g}}class nN{constructor(e={}){const{canvas:n=DR(),context:i=null,depth:r=!0,stencil:s=!1,alpha:l=!1,antialias:u=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:d=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:m=!1,reverseDepthBuffer:v=!1}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=l;const x=new Uint32Array(4),w=new Int32Array(4);let E=null,g=null;const S=[],M=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Pr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let I=!1;this._outputColorSpace=Ot;let N=0,L=0,O=null,P=-1,C=null;const U=new Jt,K=new Jt;let Y=null;const se=new Ct(0);let le=0,ie=n.width,ce=n.height,b=1,j=null,q=null;const oe=new Jt(0,0,ie,ce),ye=new Jt(0,0,ie,ce);let qe=!1;const te=new p1;let pe=!1,Ae=!1;const xe=new qt,Ye=new qt,Et=new X,Ze=new Jt,Mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let zt=!1;function rt(){return O===null?b:1}let z=i;function Dn(D,W){return n.getContext(D,W)}try{const D={alpha:!0,depth:r,stencil:s,antialias:u,premultipliedAlpha:f,preserveDrawingBuffer:d,powerPreference:h,failIfMajorPerformanceCaveat:m};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Pu}`),n.addEventListener("webglcontextlost",Ie,!1),n.addEventListener("webglcontextrestored",ge,!1),n.addEventListener("webglcontextcreationerror",ue,!1),z===null){const W="webgl2";if(z=Dn(W,D),z===null)throw Dn(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let Rt,Bt,ze,At,Xe,lt,sn,k,R,Q,ae,fe,re,Be,Me,ke,He,de,Le,et,$e,Ee,it,B;function Ce(){Rt=new d3(z),Rt.init(),Ee=new qL(z,Rt),Bt=new s3(z,Rt,e,Ee),ze=new jL(z,Rt),Bt.reverseDepthBuffer&&v&&ze.buffers.depth.setReversed(!0),At=new m3(z),Xe=new IL,lt=new YL(z,Rt,ze,Xe,Bt,Ee,At),sn=new a3(A),k=new f3(A),R=new S2(z),it=new i3(z,R),Q=new h3(z,R,At,it),ae=new v3(z,Q,R,At),Le=new g3(z,Bt,lt),ke=new o3(Xe),fe=new NL(A,sn,k,Rt,Bt,it,ke),re=new eN(A,Xe),Be=new bL,Me=new HL(Rt),de=new n3(A,sn,k,ze,ae,_,f),He=new WL(A,ae,Bt),B=new tN(z,At,Bt,ze),et=new r3(z,Rt,At),$e=new p3(z,Rt,At),At.programs=fe.programs,A.capabilities=Bt,A.extensions=Rt,A.properties=Xe,A.renderLists=Be,A.shadowMap=He,A.state=ze,A.info=At}Ce();const he=new $L(A,z);this.xr=he,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const D=Rt.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=Rt.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return b},this.setPixelRatio=function(D){D!==void 0&&(b=D,this.setSize(ie,ce,!1))},this.getSize=function(D){return D.set(ie,ce)},this.setSize=function(D,W,$=!0){if(he.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ie=D,ce=W,n.width=Math.floor(D*b),n.height=Math.floor(W*b),$===!0&&(n.style.width=D+"px",n.style.height=W+"px"),this.setViewport(0,0,D,W)},this.getDrawingBufferSize=function(D){return D.set(ie*b,ce*b).floor()},this.setDrawingBufferSize=function(D,W,$){ie=D,ce=W,b=$,n.width=Math.floor(D*$),n.height=Math.floor(W*$),this.setViewport(0,0,D,W)},this.getCurrentViewport=function(D){return D.copy(U)},this.getViewport=function(D){return D.copy(oe)},this.setViewport=function(D,W,$,J){D.isVector4?oe.set(D.x,D.y,D.z,D.w):oe.set(D,W,$,J),ze.viewport(U.copy(oe).multiplyScalar(b).round())},this.getScissor=function(D){return D.copy(ye)},this.setScissor=function(D,W,$,J){D.isVector4?ye.set(D.x,D.y,D.z,D.w):ye.set(D,W,$,J),ze.scissor(K.copy(ye).multiplyScalar(b).round())},this.getScissorTest=function(){return qe},this.setScissorTest=function(D){ze.setScissorTest(qe=D)},this.setOpaqueSort=function(D){j=D},this.setTransparentSort=function(D){q=D},this.getClearColor=function(D){return D.copy(de.getClearColor())},this.setClearColor=function(){de.setClearColor(...arguments)},this.getClearAlpha=function(){return de.getClearAlpha()},this.setClearAlpha=function(){de.setClearAlpha(...arguments)},this.clear=function(D=!0,W=!0,$=!0){let J=0;if(D){let G=!1;if(O!==null){const me=O.texture.format;G=me===u0||me===l0||me===a0}if(G){const me=O.texture.type,Te=me===Rn||me===Hs||me===xu||me===Ka||me===s0||me===o0,Fe=de.getClearColor(),De=de.getClearAlpha(),Qe=Fe.r,Ke=Fe.g,Se=Fe.b;Te?(x[0]=Qe,x[1]=Ke,x[2]=Se,x[3]=De,z.clearBufferuiv(z.COLOR,0,x)):(w[0]=Qe,w[1]=Ke,w[2]=Se,w[3]=De,z.clearBufferiv(z.COLOR,0,w))}else J|=z.COLOR_BUFFER_BIT}W&&(J|=z.DEPTH_BUFFER_BIT),$&&(J|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Ie,!1),n.removeEventListener("webglcontextrestored",ge,!1),n.removeEventListener("webglcontextcreationerror",ue,!1),de.dispose(),Be.dispose(),Me.dispose(),Xe.dispose(),sn.dispose(),k.dispose(),ae.dispose(),it.dispose(),B.dispose(),fe.dispose(),he.dispose(),he.removeEventListener("sessionstart",Fu),he.removeEventListener("sessionend",Ou),dr.stop()};function Ie(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function ge(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const D=At.autoReset,W=He.enabled,$=He.autoUpdate,J=He.needsUpdate,G=He.type;Ce(),At.autoReset=D,He.enabled=W,He.autoUpdate=$,He.needsUpdate=J,He.type=G}function ue(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function be(D){const W=D.target;W.removeEventListener("dispose",be),st(W)}function st(D){Ht(D),Xe.remove(D)}function Ht(D){const W=Xe.get(D).programs;W!==void 0&&(W.forEach(function($){fe.releaseProgram($)}),D.isShaderMaterial&&fe.releaseShaderCache(D))}this.renderBufferDirect=function(D,W,$,J,G,me){W===null&&(W=Mt);const Te=G.isMesh&&G.matrixWorld.determinant()<0,Fe=qd(D,W,$,J,G);ze.setMaterial(J,Te);let De=$.index,Qe=1;if(J.wireframe===!0){if(De=Q.getWireframeAttribute($),De===void 0)return;Qe=2}const Ke=$.drawRange,Se=$.attributes.position;let Oe=Ke.start*Qe,_t=(Ke.start+Ke.count)*Qe;me!==null&&(Oe=Math.max(Oe,me.start*Qe),_t=Math.min(_t,(me.start+me.count)*Qe)),De!==null?(Oe=Math.max(Oe,0),_t=Math.min(_t,De.count)):Se!=null&&(Oe=Math.max(Oe,0),_t=Math.min(_t,Se.count));const pt=_t-Oe;if(pt<0||pt===1/0)return;it.setup(G,J,Fe,$,De);let ft,Tt=et;if(De!==null&&(ft=R.get(De),Tt=$e,Tt.setIndex(ft)),G.isMesh)J.wireframe===!0?(ze.setLineWidth(J.wireframeLinewidth*rt()),Tt.setMode(z.LINES)):Tt.setMode(z.TRIANGLES);else if(G.isLine){let Ve=J.linewidth;Ve===void 0&&(Ve=1),ze.setLineWidth(Ve*rt()),G.isLineSegments?Tt.setMode(z.LINES):G.isLineLoop?Tt.setMode(z.LINE_LOOP):Tt.setMode(z.LINE_STRIP)}else G.isPoints?Tt.setMode(z.POINTS):G.isSprite&&Tt.setMode(z.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)ba("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Tt.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(Rt.get("WEBGL_multi_draw"))Tt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Ve=G._multiDrawStarts,gt=G._multiDrawCounts,yt=G._multiDrawCount,Fn=De?R.get(De).bytesPerElement:1,Lr=Xe.get(J).currentProgram.getUniforms();for(let xn=0;xn<yt;xn++)Lr.setValue(z,"_gl_DrawID",xn),Tt.render(Ve[xn]/Fn,gt[xn])}else if(G.isInstancedMesh)Tt.renderInstances(Oe,pt,G.count);else if($.isInstancedBufferGeometry){const Ve=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,gt=Math.min($.instanceCount,Ve);Tt.renderInstances(Oe,pt,gt)}else Tt.render(Oe,pt)};function Dt(D,W,$){D.transparent===!0&&D.side===Ai&&D.forceSinglePass===!1?(D.side=An,D.needsUpdate=!0,Io(D,W,$),D.side=ts,D.needsUpdate=!0,Io(D,W,$),D.side=Ai):Io(D,W,$)}this.compile=function(D,W,$=null){$===null&&($=D),g=Me.get($),g.init(W),M.push(g),$.traverseVisible(function(G){G.isLight&&G.layers.test(W.layers)&&(g.pushLight(G),G.castShadow&&g.pushShadow(G))}),D!==$&&D.traverseVisible(function(G){G.isLight&&G.layers.test(W.layers)&&(g.pushLight(G),G.castShadow&&g.pushShadow(G))}),g.setupLights();const J=new Set;return D.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const me=G.material;if(me)if(Array.isArray(me))for(let Te=0;Te<me.length;Te++){const Fe=me[Te];Dt(Fe,$,G),J.add(Fe)}else Dt(me,$,G),J.add(me)}),g=M.pop(),J},this.compileAsync=function(D,W,$=null){const J=this.compile(D,W,$);return new Promise(G=>{function me(){if(J.forEach(function(Te){Xe.get(Te).currentProgram.isReady()&&J.delete(Te)}),J.size===0){G(D);return}setTimeout(me,10)}Rt.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let ri=null;function Qi(D){ri&&ri(D)}function Fu(){dr.stop()}function Ou(){dr.start()}const dr=new g1;dr.setAnimationLoop(Qi),typeof self<"u"&&dr.setContext(self),this.setAnimationLoop=function(D){ri=D,he.setAnimationLoop(D),D===null?dr.stop():dr.start()},he.addEventListener("sessionstart",Fu),he.addEventListener("sessionend",Ou),this.render=function(D,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(he.cameraAutoUpdate===!0&&he.updateCamera(W),W=he.getCamera()),D.isScene===!0&&D.onBeforeRender(A,D,W,O),g=Me.get(D,M.length),g.init(W),M.push(g),Ye.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),te.setFromProjectionMatrix(Ye),Ae=this.localClippingEnabled,pe=ke.init(this.clippingPlanes,Ae),E=Be.get(D,S.length),E.init(),S.push(E),he.enabled===!0&&he.isPresenting===!0){const me=A.xr.getDepthSensingMesh();me!==null&&Ys(me,W,-1/0,A.sortObjects)}Ys(D,W,0,A.sortObjects),E.finish(),A.sortObjects===!0&&E.sort(j,q),zt=he.enabled===!1||he.isPresenting===!1||he.hasDepthSensing()===!1,zt&&de.addToRenderList(E,D),this.info.render.frame++,pe===!0&&ke.beginShadows();const $=g.state.shadowsArray;He.render($,D,W),pe===!0&&ke.endShadows(),this.info.autoReset===!0&&this.info.reset();const J=E.opaque,G=E.transmissive;if(g.setupLights(),W.isArrayCamera){const me=W.cameras;if(G.length>0)for(let Te=0,Fe=me.length;Te<Fe;Te++){const De=me[Te];os(J,G,D,De)}zt&&de.render(D);for(let Te=0,Fe=me.length;Te<Fe;Te++){const De=me[Te];ku(E,D,De,De.viewport)}}else G.length>0&&os(J,G,D,W),zt&&de.render(D),ku(E,D,W);O!==null&&L===0&&(lt.updateMultisampleRenderTarget(O),lt.updateRenderTargetMipmap(O)),D.isScene===!0&&D.onAfterRender(A,D,W),it.resetDefaultState(),P=-1,C=null,M.pop(),M.length>0?(g=M[M.length-1],pe===!0&&ke.setGlobalState(A.clippingPlanes,g.state.camera)):g=null,S.pop(),S.length>0?E=S[S.length-1]:E=null};function Ys(D,W,$,J){if(D.visible===!1)return;if(D.layers.test(W.layers)){if(D.isGroup)$=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(W);else if(D.isLight)g.pushLight(D),D.castShadow&&g.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||te.intersectsSprite(D)){J&&Ze.setFromMatrixPosition(D.matrixWorld).applyMatrix4(Ye);const Te=ae.update(D),Fe=D.material;Fe.visible&&E.push(D,Te,Fe,$,Ze.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||te.intersectsObject(D))){const Te=ae.update(D),Fe=D.material;if(J&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),Ze.copy(D.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),Ze.copy(Te.boundingSphere.center)),Ze.applyMatrix4(D.matrixWorld).applyMatrix4(Ye)),Array.isArray(Fe)){const De=Te.groups;for(let Qe=0,Ke=De.length;Qe<Ke;Qe++){const Se=De[Qe],Oe=Fe[Se.materialIndex];Oe&&Oe.visible&&E.push(D,Te,Oe,$,Ze.z,Se)}}else Fe.visible&&E.push(D,Te,Fe,$,Ze.z,null)}}const me=D.children;for(let Te=0,Fe=me.length;Te<Fe;Te++)Ys(me[Te],W,$,J)}function ku(D,W,$,J){const G=D.opaque,me=D.transmissive,Te=D.transparent;g.setupLightsView($),pe===!0&&ke.setGlobalState(A.clippingPlanes,$),J&&ze.viewport(U.copy(J)),G.length>0&&No(G,W,$),me.length>0&&No(me,W,$),Te.length>0&&No(Te,W,$),ze.buffers.depth.setTest(!0),ze.buffers.depth.setMask(!0),ze.buffers.color.setMask(!0),ze.setPolygonOffset(!1)}function os(D,W,$,J){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[J.id]===void 0&&(g.state.transmissionRenderTarget[J.id]=new ti(1,1,{generateMipmaps:!0,type:Rt.has("EXT_color_buffer_half_float")||Rt.has("EXT_color_buffer_float")?nl:Rn,minFilter:xo,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ut.workingColorSpace}));const me=g.state.transmissionRenderTarget[J.id],Te=J.viewport||U;me.setSize(Te.z*A.transmissionResolutionScale,Te.w*A.transmissionResolutionScale);const Fe=A.getRenderTarget(),De=A.getActiveCubeFace(),Qe=A.getActiveMipmapLevel();A.setRenderTarget(me),A.getClearColor(se),le=A.getClearAlpha(),le<1&&A.setClearColor(16777215,.5),A.clear(),zt&&de.render($);const Ke=A.toneMapping;A.toneMapping=Pr;const Se=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),g.setupLightsView(J),pe===!0&&ke.setGlobalState(A.clippingPlanes,J),No(D,$,J),lt.updateMultisampleRenderTarget(me),lt.updateRenderTargetMipmap(me),Rt.has("WEBGL_multisampled_render_to_texture")===!1){let Oe=!1;for(let _t=0,pt=W.length;_t<pt;_t++){const ft=W[_t],Tt=ft.object,Ve=ft.geometry,gt=ft.material,yt=ft.group;if(gt.side===Ai&&Tt.layers.test(J.layers)){const Fn=gt.side;gt.side=An,gt.needsUpdate=!0,zu(Tt,$,J,Ve,gt,yt),gt.side=Fn,gt.needsUpdate=!0,Oe=!0}}Oe===!0&&(lt.updateMultisampleRenderTarget(me),lt.updateRenderTargetMipmap(me))}A.setRenderTarget(Fe,De,Qe),A.setClearColor(se,le),Se!==void 0&&(J.viewport=Se),A.toneMapping=Ke}function No(D,W,$){const J=W.isScene===!0?W.overrideMaterial:null;for(let G=0,me=D.length;G<me;G++){const Te=D[G],Fe=Te.object,De=Te.geometry,Qe=Te.group;let Ke=Te.material;Ke.allowOverride===!0&&J!==null&&(Ke=J),Fe.layers.test($.layers)&&zu(Fe,W,$,De,Ke,Qe)}}function zu(D,W,$,J,G,me){D.onBeforeRender(A,W,$,J,G,me),D.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),G.onBeforeRender(A,W,$,J,D,me),G.transparent===!0&&G.side===Ai&&G.forceSinglePass===!1?(G.side=An,G.needsUpdate=!0,A.renderBufferDirect($,W,J,G,D,me),G.side=ts,G.needsUpdate=!0,A.renderBufferDirect($,W,J,G,D,me),G.side=Ai):A.renderBufferDirect($,W,J,G,D,me),D.onAfterRender(A,W,$,J,G,me)}function Io(D,W,$){W.isScene!==!0&&(W=Mt);const J=Xe.get(D),G=g.state.lights,me=g.state.shadowsArray,Te=G.state.version,Fe=fe.getParameters(D,G.state,me,W,$),De=fe.getProgramCacheKey(Fe);let Qe=J.programs;J.environment=D.isMeshStandardMaterial?W.environment:null,J.fog=W.fog,J.envMap=(D.isMeshStandardMaterial?k:sn).get(D.envMap||J.environment),J.envMapRotation=J.environment!==null&&D.envMap===null?W.environmentRotation:D.envMapRotation,Qe===void 0&&(D.addEventListener("dispose",be),Qe=new Map,J.programs=Qe);let Ke=Qe.get(De);if(Ke!==void 0){if(J.currentProgram===Ke&&J.lightsStateVersion===Te)return Hu(D,Fe),Ke}else Fe.uniforms=fe.getUniforms(D),D.onBeforeCompile(Fe,A),Ke=fe.acquireProgram(Fe,De),Qe.set(De,Ke),J.uniforms=Fe.uniforms;const Se=J.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(Se.clippingPlanes=ke.uniform),Hu(D,Fe),J.needsLights=Vu(D),J.lightsStateVersion=Te,J.needsLights&&(Se.ambientLightColor.value=G.state.ambient,Se.lightProbe.value=G.state.probe,Se.directionalLights.value=G.state.directional,Se.directionalLightShadows.value=G.state.directionalShadow,Se.spotLights.value=G.state.spot,Se.spotLightShadows.value=G.state.spotShadow,Se.rectAreaLights.value=G.state.rectArea,Se.ltc_1.value=G.state.rectAreaLTC1,Se.ltc_2.value=G.state.rectAreaLTC2,Se.pointLights.value=G.state.point,Se.pointLightShadows.value=G.state.pointShadow,Se.hemisphereLights.value=G.state.hemi,Se.directionalShadowMap.value=G.state.directionalShadowMap,Se.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Se.spotShadowMap.value=G.state.spotShadowMap,Se.spotLightMatrix.value=G.state.spotLightMatrix,Se.spotLightMap.value=G.state.spotLightMap,Se.pointShadowMap.value=G.state.pointShadowMap,Se.pointShadowMatrix.value=G.state.pointShadowMatrix),J.currentProgram=Ke,J.uniformsList=null,Ke}function Bu(D){if(D.uniformsList===null){const W=D.currentProgram.getUniforms();D.uniformsList=Wf.seqWithValue(W.seq,D.uniforms)}return D.uniformsList}function Hu(D,W){const $=Xe.get(D);$.outputColorSpace=W.outputColorSpace,$.batching=W.batching,$.batchingColor=W.batchingColor,$.instancing=W.instancing,$.instancingColor=W.instancingColor,$.instancingMorph=W.instancingMorph,$.skinning=W.skinning,$.morphTargets=W.morphTargets,$.morphNormals=W.morphNormals,$.morphColors=W.morphColors,$.morphTargetsCount=W.morphTargetsCount,$.numClippingPlanes=W.numClippingPlanes,$.numIntersection=W.numClipIntersection,$.vertexAlphas=W.vertexAlphas,$.vertexTangents=W.vertexTangents,$.toneMapping=W.toneMapping}function qd(D,W,$,J,G){W.isScene!==!0&&(W=Mt),lt.resetTextureUnits();const me=W.fog,Te=J.isMeshStandardMaterial?W.environment:null,Fe=O===null?A.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:Vs,De=(J.isMeshStandardMaterial?k:sn).get(J.envMap||Te),Qe=J.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Ke=!!$.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Se=!!$.morphAttributes.position,Oe=!!$.morphAttributes.normal,_t=!!$.morphAttributes.color;let pt=Pr;J.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(pt=A.toneMapping);const ft=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Tt=ft!==void 0?ft.length:0,Ve=Xe.get(J),gt=g.state.lights;if(pe===!0&&(Ae===!0||D!==C)){const Ln=D===C&&J.id===P;ke.setState(J,D,Ln)}let yt=!1;J.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==gt.state.version||Ve.outputColorSpace!==Fe||G.isBatchedMesh&&Ve.batching===!1||!G.isBatchedMesh&&Ve.batching===!0||G.isBatchedMesh&&Ve.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Ve.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Ve.instancing===!1||!G.isInstancedMesh&&Ve.instancing===!0||G.isSkinnedMesh&&Ve.skinning===!1||!G.isSkinnedMesh&&Ve.skinning===!0||G.isInstancedMesh&&Ve.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Ve.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Ve.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Ve.instancingMorph===!1&&G.morphTexture!==null||Ve.envMap!==De||J.fog===!0&&Ve.fog!==me||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==ke.numPlanes||Ve.numIntersection!==ke.numIntersection)||Ve.vertexAlphas!==Qe||Ve.vertexTangents!==Ke||Ve.morphTargets!==Se||Ve.morphNormals!==Oe||Ve.morphColors!==_t||Ve.toneMapping!==pt||Ve.morphTargetsCount!==Tt)&&(yt=!0):(yt=!0,Ve.__version=J.version);let Fn=Ve.currentProgram;yt===!0&&(Fn=Io(J,W,G));let Lr=!1,xn=!1,as=!1;const St=Fn.getUniforms(),si=Ve.uniforms;if(ze.useProgram(Fn.program)&&(Lr=!0,xn=!0,as=!0),J.id!==P&&(P=J.id,xn=!0),Lr||C!==D){ze.buffers.depth.getReversed()?(xe.copy(D.projectionMatrix),NR(xe),IR(xe),St.setValue(z,"projectionMatrix",xe)):St.setValue(z,"projectionMatrix",D.projectionMatrix),St.setValue(z,"viewMatrix",D.matrixWorldInverse);const hn=St.map.cameraPosition;hn!==void 0&&hn.setValue(z,Et.setFromMatrixPosition(D.matrixWorld)),Bt.logarithmicDepthBuffer&&St.setValue(z,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&St.setValue(z,"isOrthographic",D.isOrthographicCamera===!0),C!==D&&(C=D,xn=!0,as=!0)}if(G.isSkinnedMesh){St.setOptional(z,G,"bindMatrix"),St.setOptional(z,G,"bindMatrixInverse");const Ln=G.skeleton;Ln&&(Ln.boneTexture===null&&Ln.computeBoneTexture(),St.setValue(z,"boneTexture",Ln.boneTexture,lt))}G.isBatchedMesh&&(St.setOptional(z,G,"batchingTexture"),St.setValue(z,"batchingTexture",G._matricesTexture,lt),St.setOptional(z,G,"batchingIdTexture"),St.setValue(z,"batchingIdTexture",G._indirectTexture,lt),St.setOptional(z,G,"batchingColorTexture"),G._colorsTexture!==null&&St.setValue(z,"batchingColorTexture",G._colorsTexture,lt));const oi=$.morphAttributes;if((oi.position!==void 0||oi.normal!==void 0||oi.color!==void 0)&&Le.update(G,$,Fn),(xn||Ve.receiveShadow!==G.receiveShadow)&&(Ve.receiveShadow=G.receiveShadow,St.setValue(z,"receiveShadow",G.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(si.envMap.value=De,si.flipEnvMap.value=De.isCubeTexture&&De.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&W.environment!==null&&(si.envMapIntensity.value=W.environmentIntensity),xn&&(St.setValue(z,"toneMappingExposure",A.toneMappingExposure),Ve.needsLights&&Kd(si,as),me&&J.fog===!0&&re.refreshFogUniforms(si,me),re.refreshMaterialUniforms(si,J,b,ce,g.state.transmissionRenderTarget[D.id]),Wf.upload(z,Bu(Ve),si,lt)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Wf.upload(z,Bu(Ve),si,lt),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&St.setValue(z,"center",G.center),St.setValue(z,"modelViewMatrix",G.modelViewMatrix),St.setValue(z,"normalMatrix",G.normalMatrix),St.setValue(z,"modelMatrix",G.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const Ln=J.uniformsGroups;for(let hn=0,ls=Ln.length;hn<ls;hn++){const _i=Ln[hn];B.update(_i,Fn),B.bind(_i,Fn)}}return Fn}function Kd(D,W){D.ambientLightColor.needsUpdate=W,D.lightProbe.needsUpdate=W,D.directionalLights.needsUpdate=W,D.directionalLightShadows.needsUpdate=W,D.pointLights.needsUpdate=W,D.pointLightShadows.needsUpdate=W,D.spotLights.needsUpdate=W,D.spotLightShadows.needsUpdate=W,D.rectAreaLights.needsUpdate=W,D.hemisphereLights.needsUpdate=W}function Vu(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(D,W,$){const J=Xe.get(D);J.__autoAllocateDepthBuffer=D.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),Xe.get(D.texture).__webglTexture=W,Xe.get(D.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:$,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(D,W){const $=Xe.get(D);$.__webglFramebuffer=W,$.__useDefaultFramebuffer=W===void 0};const Qd=z.createFramebuffer();this.setRenderTarget=function(D,W=0,$=0){O=D,N=W,L=$;let J=!0,G=null,me=!1,Te=!1;if(D){const De=Xe.get(D);if(De.__useDefaultFramebuffer!==void 0)ze.bindFramebuffer(z.FRAMEBUFFER,null),J=!1;else if(De.__webglFramebuffer===void 0)lt.setupRenderTarget(D);else if(De.__hasExternalTextures)lt.rebindTextures(D,Xe.get(D.texture).__webglTexture,Xe.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){const Se=D.depthTexture;if(De.__boundDepthTexture!==Se){if(Se!==null&&Xe.has(Se)&&(D.width!==Se.image.width||D.height!==Se.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");lt.setupDepthRenderbuffer(D)}}const Qe=D.texture;(Qe.isData3DTexture||Qe.isDataArrayTexture||Qe.isCompressedArrayTexture)&&(Te=!0);const Ke=Xe.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(Ke[W])?G=Ke[W][$]:G=Ke[W],me=!0):D.samples>0&&lt.useMultisampledRTT(D)===!1?G=Xe.get(D).__webglMultisampledFramebuffer:Array.isArray(Ke)?G=Ke[$]:G=Ke,U.copy(D.viewport),K.copy(D.scissor),Y=D.scissorTest}else U.copy(oe).multiplyScalar(b).floor(),K.copy(ye).multiplyScalar(b).floor(),Y=qe;if($!==0&&(G=Qd),ze.bindFramebuffer(z.FRAMEBUFFER,G)&&J&&ze.drawBuffers(D,G),ze.viewport(U),ze.scissor(K),ze.setScissorTest(Y),me){const De=Xe.get(D.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+W,De.__webglTexture,$)}else if(Te){const De=Xe.get(D.texture),Qe=W;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,De.__webglTexture,$,Qe)}else if(D!==null&&$!==0){const De=Xe.get(D.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,De.__webglTexture,$)}P=-1},this.readRenderTargetPixels=function(D,W,$,J,G,me,Te,Fe=0){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=Xe.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Te!==void 0&&(De=De[Te]),De){ze.bindFramebuffer(z.FRAMEBUFFER,De);try{const Qe=D.textures[Fe],Ke=Qe.format,Se=Qe.type;if(!Bt.textureFormatReadable(Ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Bt.textureTypeReadable(Se)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=D.width-J&&$>=0&&$<=D.height-G&&(D.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Fe),z.readPixels(W,$,J,G,Ee.convert(Ke),Ee.convert(Se),me))}finally{const Qe=O!==null?Xe.get(O).__webglFramebuffer:null;ze.bindFramebuffer(z.FRAMEBUFFER,Qe)}}},this.readRenderTargetPixelsAsync=async function(D,W,$,J,G,me,Te,Fe=0){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=Xe.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Te!==void 0&&(De=De[Te]),De)if(W>=0&&W<=D.width-J&&$>=0&&$<=D.height-G){ze.bindFramebuffer(z.FRAMEBUFFER,De);const Qe=D.textures[Fe],Ke=Qe.format,Se=Qe.type;if(!Bt.textureFormatReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Bt.textureTypeReadable(Se))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Oe=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,Oe),z.bufferData(z.PIXEL_PACK_BUFFER,me.byteLength,z.STREAM_READ),D.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Fe),z.readPixels(W,$,J,G,Ee.convert(Ke),Ee.convert(Se),0);const _t=O!==null?Xe.get(O).__webglFramebuffer:null;ze.bindFramebuffer(z.FRAMEBUFFER,_t);const pt=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await LR(z,pt,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,Oe),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,me),z.deleteBuffer(Oe),z.deleteSync(pt),me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(D,W=null,$=0){const J=Math.pow(2,-$),G=Math.floor(D.image.width*J),me=Math.floor(D.image.height*J),Te=W!==null?W.x:0,Fe=W!==null?W.y:0;lt.setTexture2D(D,0),z.copyTexSubImage2D(z.TEXTURE_2D,$,0,0,Te,Fe,G,me),ze.unbindTexture()};const Zd=z.createFramebuffer(),$d=z.createFramebuffer();this.copyTextureToTexture=function(D,W,$=null,J=null,G=0,me=null){me===null&&(G!==0?(ba("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),me=G,G=0):me=0);let Te,Fe,De,Qe,Ke,Se,Oe,_t,pt;const ft=D.isCompressedTexture?D.mipmaps[me]:D.image;if($!==null)Te=$.max.x-$.min.x,Fe=$.max.y-$.min.y,De=$.isBox3?$.max.z-$.min.z:1,Qe=$.min.x,Ke=$.min.y,Se=$.isBox3?$.min.z:0;else{const oi=Math.pow(2,-G);Te=Math.floor(ft.width*oi),Fe=Math.floor(ft.height*oi),D.isDataArrayTexture?De=ft.depth:D.isData3DTexture?De=Math.floor(ft.depth*oi):De=1,Qe=0,Ke=0,Se=0}J!==null?(Oe=J.x,_t=J.y,pt=J.z):(Oe=0,_t=0,pt=0);const Tt=Ee.convert(W.format),Ve=Ee.convert(W.type);let gt;W.isData3DTexture?(lt.setTexture3D(W,0),gt=z.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(lt.setTexture2DArray(W,0),gt=z.TEXTURE_2D_ARRAY):(lt.setTexture2D(W,0),gt=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,W.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,W.unpackAlignment);const yt=z.getParameter(z.UNPACK_ROW_LENGTH),Fn=z.getParameter(z.UNPACK_IMAGE_HEIGHT),Lr=z.getParameter(z.UNPACK_SKIP_PIXELS),xn=z.getParameter(z.UNPACK_SKIP_ROWS),as=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,ft.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ft.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Qe),z.pixelStorei(z.UNPACK_SKIP_ROWS,Ke),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Se);const St=D.isDataArrayTexture||D.isData3DTexture,si=W.isDataArrayTexture||W.isData3DTexture;if(D.isDepthTexture){const oi=Xe.get(D),Ln=Xe.get(W),hn=Xe.get(oi.__renderTarget),ls=Xe.get(Ln.__renderTarget);ze.bindFramebuffer(z.READ_FRAMEBUFFER,hn.__webglFramebuffer),ze.bindFramebuffer(z.DRAW_FRAMEBUFFER,ls.__webglFramebuffer);for(let _i=0;_i<De;_i++)St&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Xe.get(D).__webglTexture,G,Se+_i),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Xe.get(W).__webglTexture,me,pt+_i)),z.blitFramebuffer(Qe,Ke,Te,Fe,Oe,_t,Te,Fe,z.DEPTH_BUFFER_BIT,z.NEAREST);ze.bindFramebuffer(z.READ_FRAMEBUFFER,null),ze.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(G!==0||D.isRenderTargetTexture||Xe.has(D)){const oi=Xe.get(D),Ln=Xe.get(W);ze.bindFramebuffer(z.READ_FRAMEBUFFER,Zd),ze.bindFramebuffer(z.DRAW_FRAMEBUFFER,$d);for(let hn=0;hn<De;hn++)St?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,oi.__webglTexture,G,Se+hn):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,oi.__webglTexture,G),si?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ln.__webglTexture,me,pt+hn):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Ln.__webglTexture,me),G!==0?z.blitFramebuffer(Qe,Ke,Te,Fe,Oe,_t,Te,Fe,z.COLOR_BUFFER_BIT,z.NEAREST):si?z.copyTexSubImage3D(gt,me,Oe,_t,pt+hn,Qe,Ke,Te,Fe):z.copyTexSubImage2D(gt,me,Oe,_t,Qe,Ke,Te,Fe);ze.bindFramebuffer(z.READ_FRAMEBUFFER,null),ze.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else si?D.isDataTexture||D.isData3DTexture?z.texSubImage3D(gt,me,Oe,_t,pt,Te,Fe,De,Tt,Ve,ft.data):W.isCompressedArrayTexture?z.compressedTexSubImage3D(gt,me,Oe,_t,pt,Te,Fe,De,Tt,ft.data):z.texSubImage3D(gt,me,Oe,_t,pt,Te,Fe,De,Tt,Ve,ft):D.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,me,Oe,_t,Te,Fe,Tt,Ve,ft.data):D.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,me,Oe,_t,ft.width,ft.height,Tt,ft.data):z.texSubImage2D(z.TEXTURE_2D,me,Oe,_t,Te,Fe,Tt,Ve,ft);z.pixelStorei(z.UNPACK_ROW_LENGTH,yt),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Fn),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Lr),z.pixelStorei(z.UNPACK_SKIP_ROWS,xn),z.pixelStorei(z.UNPACK_SKIP_IMAGES,as),me===0&&W.generateMipmaps&&z.generateMipmap(gt),ze.unbindTexture()},this.copyTextureToTexture3D=function(D,W,$=null,J=null,G=0){return ba('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(D,W,$,J,G)},this.initRenderTarget=function(D){Xe.get(D).__webglFramebuffer===void 0&&lt.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?lt.setTextureCube(D,0):D.isData3DTexture?lt.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?lt.setTexture2DArray(D,0):lt.setTexture2D(D,0),ze.unbindTexture()},this.resetState=function(){N=0,L=0,O=null,ze.reset(),it.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Ut._getDrawingBufferColorSpace(e),n.unpackColorSpace=Ut._getUnpackColorSpace()}}var S1={exports:{}},Lo={};/**
 * @license React
 * react-reconciler-constants.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */Lo.ConcurrentRoot=1;Lo.ContinuousEventPriority=4;Lo.DefaultEventPriority=16;Lo.DiscreteEventPriority=1;Lo.IdleEventPriority=536870912;Lo.LegacyRoot=0;S1.exports=Lo;var Ca=S1.exports;function iN(t){let e;const n=new Set,i=(d,h)=>{const m=typeof d=="function"?d(e):d;if(m!==e){const v=e;e=h?m:Object.assign({},e,m),n.forEach(_=>_(e,v))}},r=()=>e,s=(d,h=r,m=Object.is)=>{console.warn("[DEPRECATED] Please use `subscribeWithSelector` middleware");let v=h(e);function _(){const x=h(e);if(!m(v,x)){const w=v;d(v=x,w)}}return n.add(_),()=>n.delete(_)},f={setState:i,getState:r,subscribe:(d,h,m)=>h||m?s(d,h,m):(n.add(d),()=>n.delete(d)),destroy:()=>n.clear()};return e=t(i,r,f),f}const rN=typeof window>"u"||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),dS=rN?We.useEffect:We.useLayoutEffect;function sN(t){const e=typeof t=="function"?iN(t):t,n=(i=e.getState,r=Object.is)=>{const[,s]=We.useReducer(E=>E+1,0),l=e.getState(),u=We.useRef(l),f=We.useRef(i),d=We.useRef(r),h=We.useRef(!1),m=We.useRef();m.current===void 0&&(m.current=i(l));let v,_=!1;(u.current!==l||f.current!==i||d.current!==r||h.current)&&(v=i(l),_=!r(m.current,v)),dS(()=>{_&&(m.current=v),u.current=l,f.current=i,d.current=r,h.current=!1});const x=We.useRef(l);dS(()=>{const E=()=>{try{const S=e.getState(),M=f.current(S);d.current(m.current,M)||(u.current=S,m.current=M,s())}catch{h.current=!0,s()}},g=e.subscribe(E);return e.getState()!==x.current&&E(),g},[]);const w=_?v:m.current;return We.useDebugValue(w),w};return Object.assign(n,e),n[Symbol.iterator]=function(){console.warn("[useStore, api] = create() is deprecated and will be removed in v4");const i=[n,e];return{next(){const r=i.length<=0;return{value:i.shift(),done:r}}}},n}const oN=t=>typeof t=="object"&&typeof t.then=="function",So=[];function E1(t,e,n=(i,r)=>i===r){if(t===e)return!0;if(!t||!e)return!1;const i=t.length;if(e.length!==i)return!1;for(let r=0;r<i;r++)if(!n(t[r],e[r]))return!1;return!0}function M1(t,e=null,n=!1,i={}){e===null&&(e=[t]);for(const s of So)if(E1(e,s.keys,s.equal)){if(n)return;if(Object.prototype.hasOwnProperty.call(s,"error"))throw s.error;if(Object.prototype.hasOwnProperty.call(s,"response"))return i.lifespan&&i.lifespan>0&&(s.timeout&&clearTimeout(s.timeout),s.timeout=setTimeout(s.remove,i.lifespan)),s.response;if(!n)throw s.promise}const r={keys:e,equal:i.equal,remove:()=>{const s=So.indexOf(r);s!==-1&&So.splice(s,1)},promise:(oN(t)?t:t(...e)).then(s=>{r.response=s,i.lifespan&&i.lifespan>0&&(r.timeout=setTimeout(r.remove,i.lifespan))}).catch(s=>r.error=s)};if(So.push(r),!n)throw r.promise}const aN=(t,e,n)=>M1(t,e,!1,n),lN=(t,e,n)=>void M1(t,e,!0,n),uN=t=>{if(t===void 0||t.length===0)So.splice(0,So.length);else{const e=So.find(n=>E1(t,n.keys,n.equal));e&&e.remove()}};var T1={exports:{}},w1={exports:{}},A1={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(b,j){var q=b.length;b.push(j);e:for(;0<q;){var oe=q-1>>>1,ye=b[oe];if(0<r(ye,j))b[oe]=j,b[q]=ye,q=oe;else break e}}function n(b){return b.length===0?null:b[0]}function i(b){if(b.length===0)return null;var j=b[0],q=b.pop();if(q!==j){b[0]=q;e:for(var oe=0,ye=b.length,qe=ye>>>1;oe<qe;){var te=2*(oe+1)-1,pe=b[te],Ae=te+1,xe=b[Ae];if(0>r(pe,q))Ae<ye&&0>r(xe,pe)?(b[oe]=xe,b[Ae]=q,oe=Ae):(b[oe]=pe,b[te]=q,oe=te);else if(Ae<ye&&0>r(xe,q))b[oe]=xe,b[Ae]=q,oe=Ae;else break e}}return j}function r(b,j){var q=b.sortIndex-j.sortIndex;return q!==0?q:b.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var l=Date,u=l.now();t.unstable_now=function(){return l.now()-u}}var f=[],d=[],h=1,m=null,v=3,_=!1,x=!1,w=!1,E=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,S=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function M(b){for(var j=n(d);j!==null;){if(j.callback===null)i(d);else if(j.startTime<=b)i(d),j.sortIndex=j.expirationTime,e(f,j);else break;j=n(d)}}function A(b){if(w=!1,M(b),!x)if(n(f)!==null)x=!0,ie(I);else{var j=n(d);j!==null&&ce(A,j.startTime-b)}}function I(b,j){x=!1,w&&(w=!1,g(O),O=-1),_=!0;var q=v;try{for(M(j),m=n(f);m!==null&&(!(m.expirationTime>j)||b&&!U());){var oe=m.callback;if(typeof oe=="function"){m.callback=null,v=m.priorityLevel;var ye=oe(m.expirationTime<=j);j=t.unstable_now(),typeof ye=="function"?m.callback=ye:m===n(f)&&i(f),M(j)}else i(f);m=n(f)}if(m!==null)var qe=!0;else{var te=n(d);te!==null&&ce(A,te.startTime-j),qe=!1}return qe}finally{m=null,v=q,_=!1}}var N=!1,L=null,O=-1,P=5,C=-1;function U(){return!(t.unstable_now()-C<P)}function K(){if(L!==null){var b=t.unstable_now();C=b;var j=!0;try{j=L(!0,b)}finally{j?Y():(N=!1,L=null)}}else N=!1}var Y;if(typeof S=="function")Y=function(){S(K)};else if(typeof MessageChannel<"u"){var se=new MessageChannel,le=se.port2;se.port1.onmessage=K,Y=function(){le.postMessage(null)}}else Y=function(){E(K,0)};function ie(b){L=b,N||(N=!0,Y())}function ce(b,j){O=E(function(){b(t.unstable_now())},j)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(b){b.callback=null},t.unstable_continueExecution=function(){x||_||(x=!0,ie(I))},t.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<b?Math.floor(1e3/b):5},t.unstable_getCurrentPriorityLevel=function(){return v},t.unstable_getFirstCallbackNode=function(){return n(f)},t.unstable_next=function(b){switch(v){case 1:case 2:case 3:var j=3;break;default:j=v}var q=v;v=j;try{return b()}finally{v=q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(b,j){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var q=v;v=b;try{return j()}finally{v=q}},t.unstable_scheduleCallback=function(b,j,q){var oe=t.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?oe+q:oe):q=oe,b){case 1:var ye=-1;break;case 2:ye=250;break;case 5:ye=1073741823;break;case 4:ye=1e4;break;default:ye=5e3}return ye=q+ye,b={id:h++,callback:j,priorityLevel:b,startTime:q,expirationTime:ye,sortIndex:-1},q>oe?(b.sortIndex=q,e(d,b),n(f)===null&&b===n(d)&&(w?(g(O),O=-1):w=!0,ce(A,q-oe))):(b.sortIndex=ye,e(f,b),x||_||(x=!0,ie(I))),b},t.unstable_shouldYield=U,t.unstable_wrapCallback=function(b){var j=v;return function(){var q=v;v=j;try{return b.apply(this,arguments)}finally{v=q}}}})(A1);w1.exports=A1;var nv=w1.exports;/**
 * @license React
 * react-reconciler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cN=function(e){var n={},i=We,r=nv,s=Object.assign;function l(o){for(var a="https://reactjs.org/docs/error-decoder.html?invariant="+o,c=1;c<arguments.length;c++)a+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+o+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var u=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,f=Symbol.for("react.element"),d=Symbol.for("react.portal"),h=Symbol.for("react.fragment"),m=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),_=Symbol.for("react.provider"),x=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),E=Symbol.for("react.suspense"),g=Symbol.for("react.suspense_list"),S=Symbol.for("react.memo"),M=Symbol.for("react.lazy"),A=Symbol.for("react.offscreen"),I=Symbol.iterator;function N(o){return o===null||typeof o!="object"?null:(o=I&&o[I]||o["@@iterator"],typeof o=="function"?o:null)}function L(o){if(o==null)return null;if(typeof o=="function")return o.displayName||o.name||null;if(typeof o=="string")return o;switch(o){case h:return"Fragment";case d:return"Portal";case v:return"Profiler";case m:return"StrictMode";case E:return"Suspense";case g:return"SuspenseList"}if(typeof o=="object")switch(o.$$typeof){case x:return(o.displayName||"Context")+".Consumer";case _:return(o._context.displayName||"Context")+".Provider";case w:var a=o.render;return o=o.displayName,o||(o=a.displayName||a.name||"",o=o!==""?"ForwardRef("+o+")":"ForwardRef"),o;case S:return a=o.displayName||null,a!==null?a:L(o.type)||"Memo";case M:a=o._payload,o=o._init;try{return L(o(a))}catch{}}return null}function O(o){var a=o.type;switch(o.tag){case 24:return"Cache";case 9:return(a.displayName||"Context")+".Consumer";case 10:return(a._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return o=a.render,o=o.displayName||o.name||"",a.displayName||(o!==""?"ForwardRef("+o+")":"ForwardRef");case 7:return"Fragment";case 5:return a;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return L(a);case 8:return a===m?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof a=="function")return a.displayName||a.name||null;if(typeof a=="string")return a}return null}function P(o){var a=o,c=o;if(o.alternate)for(;a.return;)a=a.return;else{o=a;do a=o,a.flags&4098&&(c=a.return),o=a.return;while(o)}return a.tag===3?c:null}function C(o){if(P(o)!==o)throw Error(l(188))}function U(o){var a=o.alternate;if(!a){if(a=P(o),a===null)throw Error(l(188));return a!==o?null:o}for(var c=o,p=a;;){var y=c.return;if(y===null)break;var T=y.alternate;if(T===null){if(p=y.return,p!==null){c=p;continue}break}if(y.child===T.child){for(T=y.child;T;){if(T===c)return C(y),o;if(T===p)return C(y),a;T=T.sibling}throw Error(l(188))}if(c.return!==p.return)c=y,p=T;else{for(var F=!1,H=y.child;H;){if(H===c){F=!0,c=y,p=T;break}if(H===p){F=!0,p=y,c=T;break}H=H.sibling}if(!F){for(H=T.child;H;){if(H===c){F=!0,c=T,p=y;break}if(H===p){F=!0,p=T,c=y;break}H=H.sibling}if(!F)throw Error(l(189))}}if(c.alternate!==p)throw Error(l(190))}if(c.tag!==3)throw Error(l(188));return c.stateNode.current===c?o:a}function K(o){return o=U(o),o!==null?Y(o):null}function Y(o){if(o.tag===5||o.tag===6)return o;for(o=o.child;o!==null;){var a=Y(o);if(a!==null)return a;o=o.sibling}return null}function se(o){if(o.tag===5||o.tag===6)return o;for(o=o.child;o!==null;){if(o.tag!==4){var a=se(o);if(a!==null)return a}o=o.sibling}return null}var le=Array.isArray,ie=e.getPublicInstance,ce=e.getRootHostContext,b=e.getChildHostContext,j=e.prepareForCommit,q=e.resetAfterCommit,oe=e.createInstance,ye=e.appendInitialChild,qe=e.finalizeInitialChildren,te=e.prepareUpdate,pe=e.shouldSetTextContent,Ae=e.createTextInstance,xe=e.scheduleTimeout,Ye=e.cancelTimeout,Et=e.noTimeout,Ze=e.isPrimaryRenderer,Mt=e.supportsMutation,zt=e.supportsPersistence,rt=e.supportsHydration,z=e.getInstanceFromNode,Dn=e.preparePortalMount,Rt=e.getCurrentEventPriority,Bt=e.detachDeletedInstance,ze=e.supportsMicrotasks,At=e.scheduleMicrotask,Xe=e.supportsTestSelectors,lt=e.findFiberRoot,sn=e.getBoundingRect,k=e.getTextContent,R=e.isHiddenSubtree,Q=e.matchAccessibilityRole,ae=e.setFocusIfFocusable,fe=e.setupIntersectionObserver,re=e.appendChild,Be=e.appendChildToContainer,Me=e.commitTextUpdate,ke=e.commitMount,He=e.commitUpdate,de=e.insertBefore,Le=e.insertInContainerBefore,et=e.removeChild,$e=e.removeChildFromContainer,Ee=e.resetTextContent,it=e.hideInstance,B=e.hideTextInstance,Ce=e.unhideInstance,he=e.unhideTextInstance,Ie=e.clearContainer,ge=e.cloneInstance,ue=e.createContainerChildSet,be=e.appendChildToContainerChildSet,st=e.finalizeContainerChildren,Ht=e.replaceContainerChildren,Dt=e.cloneHiddenInstance,ri=e.cloneHiddenTextInstance,Qi=e.canHydrateInstance,Fu=e.canHydrateTextInstance,Ou=e.canHydrateSuspenseInstance,dr=e.isSuspenseInstancePending,Ys=e.isSuspenseInstanceFallback,ku=e.registerSuspenseInstanceRetry,os=e.getNextHydratableSibling,No=e.getFirstHydratableChild,zu=e.getFirstHydratableChildWithinContainer,Io=e.getFirstHydratableChildWithinSuspenseInstance,Bu=e.hydrateInstance,Hu=e.hydrateTextInstance,qd=e.hydrateSuspenseInstance,Kd=e.getNextHydratableInstanceAfterSuspenseInstance,Vu=e.commitHydratedContainer,Qd=e.commitHydratedSuspenseInstance,Zd=e.clearSuspenseBoundary,$d=e.clearSuspenseBoundaryFromContainer,D=e.shouldDeleteUnhydratedTailInstances,W=e.didNotMatchHydratedContainerTextInstance,$=e.didNotMatchHydratedTextInstance,J;function G(o){if(J===void 0)try{throw Error()}catch(c){var a=c.stack.trim().match(/\n( *(at )?)/);J=a&&a[1]||""}return`
`+J+o}var me=!1;function Te(o,a){if(!o||me)return"";me=!0;var c=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(a)if(a=function(){throw Error()},Object.defineProperty(a.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(a,[])}catch(_e){var p=_e}Reflect.construct(o,[],a)}else{try{a.call()}catch(_e){p=_e}o.call(a.prototype)}else{try{throw Error()}catch(_e){p=_e}o()}}catch(_e){if(_e&&p&&typeof _e.stack=="string"){for(var y=_e.stack.split(`
`),T=p.stack.split(`
`),F=y.length-1,H=T.length-1;1<=F&&0<=H&&y[F]!==T[H];)H--;for(;1<=F&&0<=H;F--,H--)if(y[F]!==T[H]){if(F!==1||H!==1)do if(F--,H--,0>H||y[F]!==T[H]){var ne=`
`+y[F].replace(" at new "," at ");return o.displayName&&ne.includes("<anonymous>")&&(ne=ne.replace("<anonymous>",o.displayName)),ne}while(1<=F&&0<=H);break}}}finally{me=!1,Error.prepareStackTrace=c}return(o=o?o.displayName||o.name:"")?G(o):""}var Fe=Object.prototype.hasOwnProperty,De=[],Qe=-1;function Ke(o){return{current:o}}function Se(o){0>Qe||(o.current=De[Qe],De[Qe]=null,Qe--)}function Oe(o,a){Qe++,De[Qe]=o.current,o.current=a}var _t={},pt=Ke(_t),ft=Ke(!1),Tt=_t;function Ve(o,a){var c=o.type.contextTypes;if(!c)return _t;var p=o.stateNode;if(p&&p.__reactInternalMemoizedUnmaskedChildContext===a)return p.__reactInternalMemoizedMaskedChildContext;var y={},T;for(T in c)y[T]=a[T];return p&&(o=o.stateNode,o.__reactInternalMemoizedUnmaskedChildContext=a,o.__reactInternalMemoizedMaskedChildContext=y),y}function gt(o){return o=o.childContextTypes,o!=null}function yt(){Se(ft),Se(pt)}function Fn(o,a,c){if(pt.current!==_t)throw Error(l(168));Oe(pt,a),Oe(ft,c)}function Lr(o,a,c){var p=o.stateNode;if(a=a.childContextTypes,typeof p.getChildContext!="function")return c;p=p.getChildContext();for(var y in p)if(!(y in a))throw Error(l(108,O(o)||"Unknown",y));return s({},c,p)}function xn(o){return o=(o=o.stateNode)&&o.__reactInternalMemoizedMergedChildContext||_t,Tt=pt.current,Oe(pt,o),Oe(ft,ft.current),!0}function as(o,a,c){var p=o.stateNode;if(!p)throw Error(l(169));c?(o=Lr(o,a,Tt),p.__reactInternalMemoizedMergedChildContext=o,Se(ft),Se(pt),Oe(pt,o)):Se(ft),Oe(ft,c)}var St=Math.clz32?Math.clz32:Ln,si=Math.log,oi=Math.LN2;function Ln(o){return o>>>=0,o===0?32:31-(si(o)/oi|0)|0}var hn=64,ls=4194304;function _i(o){switch(o&-o){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return o&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return o&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return o}}function Gu(o,a){var c=o.pendingLanes;if(c===0)return 0;var p=0,y=o.suspendedLanes,T=o.pingedLanes,F=c&268435455;if(F!==0){var H=F&~y;H!==0?p=_i(H):(T&=F,T!==0&&(p=_i(T)))}else F=c&~y,F!==0?p=_i(F):T!==0&&(p=_i(T));if(p===0)return 0;if(a!==0&&a!==p&&!(a&y)&&(y=p&-p,T=a&-a,y>=T||y===16&&(T&4194240)!==0))return a;if(p&4&&(p|=c&16),a=o.entangledLanes,a!==0)for(o=o.entanglements,a&=p;0<a;)c=31-St(a),y=1<<c,p|=o[c],a&=~y;return p}function V1(o,a){switch(o){case 1:case 2:case 4:return a+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function G1(o,a){for(var c=o.suspendedLanes,p=o.pingedLanes,y=o.expirationTimes,T=o.pendingLanes;0<T;){var F=31-St(T),H=1<<F,ne=y[F];ne===-1?(!(H&c)||H&p)&&(y[F]=V1(H,a)):ne<=a&&(o.expiredLanes|=H),T&=~H}}function Jd(o){return o=o.pendingLanes&-1073741825,o!==0?o:o&1073741824?1073741824:0}function eh(o){for(var a=[],c=0;31>c;c++)a.push(o);return a}function sl(o,a,c){o.pendingLanes|=a,a!==536870912&&(o.suspendedLanes=0,o.pingedLanes=0),o=o.eventTimes,a=31-St(a),o[a]=c}function W1(o,a){var c=o.pendingLanes&~a;o.pendingLanes=a,o.suspendedLanes=0,o.pingedLanes=0,o.expiredLanes&=a,o.mutableReadLanes&=a,o.entangledLanes&=a,a=o.entanglements;var p=o.eventTimes;for(o=o.expirationTimes;0<c;){var y=31-St(c),T=1<<y;a[y]=0,p[y]=-1,o[y]=-1,c&=~T}}function th(o,a){var c=o.entangledLanes|=a;for(o=o.entanglements;c;){var p=31-St(c),y=1<<p;y&a|o[p]&a&&(o[p]|=a),c&=~y}}var Lt=0;function E0(o){return o&=-o,1<o?4<o?o&268435455?16:536870912:4:1}var nh=r.unstable_scheduleCallback,M0=r.unstable_cancelCallback,X1=r.unstable_shouldYield,j1=r.unstable_requestPaint,Sn=r.unstable_now,ih=r.unstable_ImmediatePriority,Y1=r.unstable_UserBlockingPriority,rh=r.unstable_NormalPriority,q1=r.unstable_IdlePriority,Wu=null,hr=null;function K1(o){if(hr&&typeof hr.onCommitFiberRoot=="function")try{hr.onCommitFiberRoot(Wu,o,void 0,(o.current.flags&128)===128)}catch{}}function Q1(o,a){return o===a&&(o!==0||1/o===1/a)||o!==o&&a!==a}var pr=typeof Object.is=="function"?Object.is:Q1,Nr=null,Xu=!1,sh=!1;function T0(o){Nr===null?Nr=[o]:Nr.push(o)}function Z1(o){Xu=!0,T0(o)}function mr(){if(!sh&&Nr!==null){sh=!0;var o=0,a=Lt;try{var c=Nr;for(Lt=1;o<c.length;o++){var p=c[o];do p=p(!0);while(p!==null)}Nr=null,Xu=!1}catch(y){throw Nr!==null&&(Nr=Nr.slice(o+1)),nh(ih,mr),y}finally{Lt=a,sh=!1}}return null}var $1=u.ReactCurrentBatchConfig;function ju(o,a){if(pr(o,a))return!0;if(typeof o!="object"||o===null||typeof a!="object"||a===null)return!1;var c=Object.keys(o),p=Object.keys(a);if(c.length!==p.length)return!1;for(p=0;p<c.length;p++){var y=c[p];if(!Fe.call(a,y)||!pr(o[y],a[y]))return!1}return!0}function J1(o){switch(o.tag){case 5:return G(o.type);case 16:return G("Lazy");case 13:return G("Suspense");case 19:return G("SuspenseList");case 0:case 2:case 15:return o=Te(o.type,!1),o;case 11:return o=Te(o.type.render,!1),o;case 1:return o=Te(o.type,!0),o;default:return""}}function Zi(o,a){if(o&&o.defaultProps){a=s({},a),o=o.defaultProps;for(var c in o)a[c]===void 0&&(a[c]=o[c]);return a}return a}var Yu=Ke(null),qu=null,Uo=null,oh=null;function ah(){oh=Uo=qu=null}function w0(o,a,c){Ze?(Oe(Yu,a._currentValue),a._currentValue=c):(Oe(Yu,a._currentValue2),a._currentValue2=c)}function lh(o){var a=Yu.current;Se(Yu),Ze?o._currentValue=a:o._currentValue2=a}function uh(o,a,c){for(;o!==null;){var p=o.alternate;if((o.childLanes&a)!==a?(o.childLanes|=a,p!==null&&(p.childLanes|=a)):p!==null&&(p.childLanes&a)!==a&&(p.childLanes|=a),o===c)break;o=o.return}}function bo(o,a){qu=o,oh=Uo=null,o=o.dependencies,o!==null&&o.firstContext!==null&&(o.lanes&a&&(Si=!0),o.firstContext=null)}function Ui(o){var a=Ze?o._currentValue:o._currentValue2;if(oh!==o)if(o={context:o,memoizedValue:a,next:null},Uo===null){if(qu===null)throw Error(l(308));Uo=o,qu.dependencies={lanes:0,firstContext:o}}else Uo=Uo.next=o;return a}var gr=null,us=!1;function ch(o){o.updateQueue={baseState:o.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function A0(o,a){o=o.updateQueue,a.updateQueue===o&&(a.updateQueue={baseState:o.baseState,firstBaseUpdate:o.firstBaseUpdate,lastBaseUpdate:o.lastBaseUpdate,shared:o.shared,effects:o.effects})}function Ir(o,a){return{eventTime:o,lane:a,tag:0,payload:null,callback:null,next:null}}function cs(o,a){var c=o.updateQueue;c!==null&&(c=c.shared,ln!==null&&o.mode&1&&!(mt&2)?(o=c.interleaved,o===null?(a.next=a,gr===null?gr=[c]:gr.push(c)):(a.next=o.next,o.next=a),c.interleaved=a):(o=c.pending,o===null?a.next=a:(a.next=o.next,o.next=a),c.pending=a))}function Ku(o,a,c){if(a=a.updateQueue,a!==null&&(a=a.shared,(c&4194240)!==0)){var p=a.lanes;p&=o.pendingLanes,c|=p,a.lanes=c,th(o,c)}}function C0(o,a){var c=o.updateQueue,p=o.alternate;if(p!==null&&(p=p.updateQueue,c===p)){var y=null,T=null;if(c=c.firstBaseUpdate,c!==null){do{var F={eventTime:c.eventTime,lane:c.lane,tag:c.tag,payload:c.payload,callback:c.callback,next:null};T===null?y=T=F:T=T.next=F,c=c.next}while(c!==null);T===null?y=T=a:T=T.next=a}else y=T=a;c={baseState:p.baseState,firstBaseUpdate:y,lastBaseUpdate:T,shared:p.shared,effects:p.effects},o.updateQueue=c;return}o=c.lastBaseUpdate,o===null?c.firstBaseUpdate=a:o.next=a,c.lastBaseUpdate=a}function Qu(o,a,c,p){var y=o.updateQueue;us=!1;var T=y.firstBaseUpdate,F=y.lastBaseUpdate,H=y.shared.pending;if(H!==null){y.shared.pending=null;var ne=H,_e=ne.next;ne.next=null,F===null?T=_e:F.next=_e,F=ne;var Ue=o.alternate;Ue!==null&&(Ue=Ue.updateQueue,H=Ue.lastBaseUpdate,H!==F&&(H===null?Ue.firstBaseUpdate=_e:H.next=_e,Ue.lastBaseUpdate=ne))}if(T!==null){var ot=y.baseState;F=0,Ue=_e=ne=null,H=T;do{var Je=H.lane,Gt=H.eventTime;if((p&Je)===Je){Ue!==null&&(Ue=Ue.next={eventTime:Gt,lane:0,tag:H.tag,payload:H.payload,callback:H.callback,next:null});e:{var je=o,Bn=H;switch(Je=a,Gt=c,Bn.tag){case 1:if(je=Bn.payload,typeof je=="function"){ot=je.call(Gt,ot,Je);break e}ot=je;break e;case 3:je.flags=je.flags&-65537|128;case 0:if(je=Bn.payload,Je=typeof je=="function"?je.call(Gt,ot,Je):je,Je==null)break e;ot=s({},ot,Je);break e;case 2:us=!0}}H.callback!==null&&H.lane!==0&&(o.flags|=64,Je=y.effects,Je===null?y.effects=[H]:Je.push(H))}else Gt={eventTime:Gt,lane:Je,tag:H.tag,payload:H.payload,callback:H.callback,next:null},Ue===null?(_e=Ue=Gt,ne=ot):Ue=Ue.next=Gt,F|=Je;if(H=H.next,H===null){if(H=y.shared.pending,H===null)break;Je=H,H=Je.next,Je.next=null,y.lastBaseUpdate=Je,y.shared.pending=null}}while(1);if(Ue===null&&(ne=ot),y.baseState=ne,y.firstBaseUpdate=_e,y.lastBaseUpdate=Ue,a=y.shared.interleaved,a!==null){y=a;do F|=y.lane,y=y.next;while(y!==a)}else T===null&&(y.shared.lanes=0);Wo|=F,o.lanes=F,o.memoizedState=ot}}function R0(o,a,c){if(o=a.effects,a.effects=null,o!==null)for(a=0;a<o.length;a++){var p=o[a],y=p.callback;if(y!==null){if(p.callback=null,p=c,typeof y!="function")throw Error(l(191,y));y.call(p)}}}var P0=new i.Component().refs;function fh(o,a,c,p){a=o.memoizedState,c=c(p,a),c=c==null?a:s({},a,c),o.memoizedState=c,o.lanes===0&&(o.updateQueue.baseState=c)}var Zu={isMounted:function(o){return(o=o._reactInternals)?P(o)===o:!1},enqueueSetState:function(o,a,c){o=o._reactInternals;var p=qn(),y=hs(o),T=Ir(p,y);T.payload=a,c!=null&&(T.callback=c),cs(o,T),a=zi(o,y,p),a!==null&&Ku(a,o,y)},enqueueReplaceState:function(o,a,c){o=o._reactInternals;var p=qn(),y=hs(o),T=Ir(p,y);T.tag=1,T.payload=a,c!=null&&(T.callback=c),cs(o,T),a=zi(o,y,p),a!==null&&Ku(a,o,y)},enqueueForceUpdate:function(o,a){o=o._reactInternals;var c=qn(),p=hs(o),y=Ir(c,p);y.tag=2,a!=null&&(y.callback=a),cs(o,y),a=zi(o,p,c),a!==null&&Ku(a,o,p)}};function D0(o,a,c,p,y,T,F){return o=o.stateNode,typeof o.shouldComponentUpdate=="function"?o.shouldComponentUpdate(p,T,F):a.prototype&&a.prototype.isPureReactComponent?!ju(c,p)||!ju(y,T):!0}function L0(o,a,c){var p=!1,y=_t,T=a.contextType;return typeof T=="object"&&T!==null?T=Ui(T):(y=gt(a)?Tt:pt.current,p=a.contextTypes,T=(p=p!=null)?Ve(o,y):_t),a=new a(c,T),o.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Zu,o.stateNode=a,a._reactInternals=o,p&&(o=o.stateNode,o.__reactInternalMemoizedUnmaskedChildContext=y,o.__reactInternalMemoizedMaskedChildContext=T),a}function N0(o,a,c,p){o=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(c,p),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(c,p),a.state!==o&&Zu.enqueueReplaceState(a,a.state,null)}function dh(o,a,c,p){var y=o.stateNode;y.props=c,y.state=o.memoizedState,y.refs=P0,ch(o);var T=a.contextType;typeof T=="object"&&T!==null?y.context=Ui(T):(T=gt(a)?Tt:pt.current,y.context=Ve(o,T)),y.state=o.memoizedState,T=a.getDerivedStateFromProps,typeof T=="function"&&(fh(o,a,T,c),y.state=o.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof y.getSnapshotBeforeUpdate=="function"||typeof y.UNSAFE_componentWillMount!="function"&&typeof y.componentWillMount!="function"||(a=y.state,typeof y.componentWillMount=="function"&&y.componentWillMount(),typeof y.UNSAFE_componentWillMount=="function"&&y.UNSAFE_componentWillMount(),a!==y.state&&Zu.enqueueReplaceState(y,y.state,null),Qu(o,c,y,p),y.state=o.memoizedState),typeof y.componentDidMount=="function"&&(o.flags|=4194308)}var Fo=[],Oo=0,$u=null,Ju=0,bi=[],Fi=0,qs=null,Ur=1,br="";function Ks(o,a){Fo[Oo++]=Ju,Fo[Oo++]=$u,$u=o,Ju=a}function I0(o,a,c){bi[Fi++]=Ur,bi[Fi++]=br,bi[Fi++]=qs,qs=o;var p=Ur;o=br;var y=32-St(p)-1;p&=~(1<<y),c+=1;var T=32-St(a)+y;if(30<T){var F=y-y%5;T=(p&(1<<F)-1).toString(32),p>>=F,y-=F,Ur=1<<32-St(a)+y|c<<y|p,br=T+o}else Ur=1<<T|c<<y|p,br=o}function hh(o){o.return!==null&&(Ks(o,1),I0(o,1,0))}function ph(o){for(;o===$u;)$u=Fo[--Oo],Fo[Oo]=null,Ju=Fo[--Oo],Fo[Oo]=null;for(;o===qs;)qs=bi[--Fi],bi[Fi]=null,br=bi[--Fi],bi[Fi]=null,Ur=bi[--Fi],bi[Fi]=null}var yi=null,xi=null,Kt=!1,ol=!1,$i=null;function U0(o,a){var c=Bi(5,null,null,0);c.elementType="DELETED",c.stateNode=a,c.return=o,a=o.deletions,a===null?(o.deletions=[c],o.flags|=16):a.push(c)}function b0(o,a){switch(o.tag){case 5:return a=Qi(a,o.type,o.pendingProps),a!==null?(o.stateNode=a,yi=o,xi=No(a),!0):!1;case 6:return a=Fu(a,o.pendingProps),a!==null?(o.stateNode=a,yi=o,xi=null,!0):!1;case 13:if(a=Ou(a),a!==null){var c=qs!==null?{id:Ur,overflow:br}:null;return o.memoizedState={dehydrated:a,treeContext:c,retryLane:1073741824},c=Bi(18,null,null,0),c.stateNode=a,c.return=o,o.child=c,yi=o,xi=null,!0}return!1;default:return!1}}function mh(o){return(o.mode&1)!==0&&(o.flags&128)===0}function gh(o){if(Kt){var a=xi;if(a){var c=a;if(!b0(o,a)){if(mh(o))throw Error(l(418));a=os(c);var p=yi;a&&b0(o,a)?U0(p,c):(o.flags=o.flags&-4097|2,Kt=!1,yi=o)}}else{if(mh(o))throw Error(l(418));o.flags=o.flags&-4097|2,Kt=!1,yi=o}}}function F0(o){for(o=o.return;o!==null&&o.tag!==5&&o.tag!==3&&o.tag!==13;)o=o.return;yi=o}function al(o){if(!rt||o!==yi)return!1;if(!Kt)return F0(o),Kt=!0,!1;if(o.tag!==3&&(o.tag!==5||D(o.type)&&!pe(o.type,o.memoizedProps))){var a=xi;if(a){if(mh(o)){for(o=xi;o;)o=os(o);throw Error(l(418))}for(;a;)U0(o,a),a=os(a)}}if(F0(o),o.tag===13){if(!rt)throw Error(l(316));if(o=o.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(l(317));xi=Kd(o)}else xi=yi?os(o.stateNode):null;return!0}function ko(){rt&&(xi=yi=null,ol=Kt=!1)}function vh(o){$i===null?$i=[o]:$i.push(o)}function ll(o,a,c){if(o=c.ref,o!==null&&typeof o!="function"&&typeof o!="object"){if(c._owner){if(c=c._owner,c){if(c.tag!==1)throw Error(l(309));var p=c.stateNode}if(!p)throw Error(l(147,o));var y=p,T=""+o;return a!==null&&a.ref!==null&&typeof a.ref=="function"&&a.ref._stringRef===T?a.ref:(a=function(F){var H=y.refs;H===P0&&(H=y.refs={}),F===null?delete H[T]:H[T]=F},a._stringRef=T,a)}if(typeof o!="string")throw Error(l(284));if(!c._owner)throw Error(l(290,o))}return o}function ec(o,a){throw o=Object.prototype.toString.call(a),Error(l(31,o==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":o))}function O0(o){var a=o._init;return a(o._payload)}function k0(o){function a(Z,V){if(o){var ee=Z.deletions;ee===null?(Z.deletions=[V],Z.flags|=16):ee.push(V)}}function c(Z,V){if(!o)return null;for(;V!==null;)a(Z,V),V=V.sibling;return null}function p(Z,V){for(Z=new Map;V!==null;)V.key!==null?Z.set(V.key,V):Z.set(V.index,V),V=V.sibling;return Z}function y(Z,V){return Z=ms(Z,V),Z.index=0,Z.sibling=null,Z}function T(Z,V,ee){return Z.index=ee,o?(ee=Z.alternate,ee!==null?(ee=ee.index,ee<V?(Z.flags|=2,V):ee):(Z.flags|=2,V)):(Z.flags|=1048576,V)}function F(Z){return o&&Z.alternate===null&&(Z.flags|=2),Z}function H(Z,V,ee,Pe){return V===null||V.tag!==6?(V=ep(ee,Z.mode,Pe),V.return=Z,V):(V=y(V,ee),V.return=Z,V)}function ne(Z,V,ee,Pe){var Ge=ee.type;return Ge===h?Ue(Z,V,ee.props.children,Pe,ee.key):V!==null&&(V.elementType===Ge||typeof Ge=="object"&&Ge!==null&&Ge.$$typeof===M&&O0(Ge)===V.type)?(Pe=y(V,ee.props),Pe.ref=ll(Z,V,ee),Pe.return=Z,Pe):(Pe=Lc(ee.type,ee.key,ee.props,null,Z.mode,Pe),Pe.ref=ll(Z,V,ee),Pe.return=Z,Pe)}function _e(Z,V,ee,Pe){return V===null||V.tag!==4||V.stateNode.containerInfo!==ee.containerInfo||V.stateNode.implementation!==ee.implementation?(V=tp(ee,Z.mode,Pe),V.return=Z,V):(V=y(V,ee.children||[]),V.return=Z,V)}function Ue(Z,V,ee,Pe,Ge){return V===null||V.tag!==7?(V=no(ee,Z.mode,Pe,Ge),V.return=Z,V):(V=y(V,ee),V.return=Z,V)}function ot(Z,V,ee){if(typeof V=="string"&&V!==""||typeof V=="number")return V=ep(""+V,Z.mode,ee),V.return=Z,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case f:return ee=Lc(V.type,V.key,V.props,null,Z.mode,ee),ee.ref=ll(Z,null,V),ee.return=Z,ee;case d:return V=tp(V,Z.mode,ee),V.return=Z,V;case M:var Pe=V._init;return ot(Z,Pe(V._payload),ee)}if(le(V)||N(V))return V=no(V,Z.mode,ee,null),V.return=Z,V;ec(Z,V)}return null}function Je(Z,V,ee,Pe){var Ge=V!==null?V.key:null;if(typeof ee=="string"&&ee!==""||typeof ee=="number")return Ge!==null?null:H(Z,V,""+ee,Pe);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case f:return ee.key===Ge?ne(Z,V,ee,Pe):null;case d:return ee.key===Ge?_e(Z,V,ee,Pe):null;case M:return Ge=ee._init,Je(Z,V,Ge(ee._payload),Pe)}if(le(ee)||N(ee))return Ge!==null?null:Ue(Z,V,ee,Pe,null);ec(Z,ee)}return null}function Gt(Z,V,ee,Pe,Ge){if(typeof Pe=="string"&&Pe!==""||typeof Pe=="number")return Z=Z.get(ee)||null,H(V,Z,""+Pe,Ge);if(typeof Pe=="object"&&Pe!==null){switch(Pe.$$typeof){case f:return Z=Z.get(Pe.key===null?ee:Pe.key)||null,ne(V,Z,Pe,Ge);case d:return Z=Z.get(Pe.key===null?ee:Pe.key)||null,_e(V,Z,Pe,Ge);case M:var dt=Pe._init;return Gt(Z,V,ee,dt(Pe._payload),Ge)}if(le(Pe)||N(Pe))return Z=Z.get(ee)||null,Ue(V,Z,Pe,Ge,null);ec(V,Pe)}return null}function je(Z,V,ee,Pe){for(var Ge=null,dt=null,at=V,Nt=V=0,Mn=null;at!==null&&Nt<ee.length;Nt++){at.index>Nt?(Mn=at,at=null):Mn=at.sibling;var It=Je(Z,at,ee[Nt],Pe);if(It===null){at===null&&(at=Mn);break}o&&at&&It.alternate===null&&a(Z,at),V=T(It,V,Nt),dt===null?Ge=It:dt.sibling=It,dt=It,at=Mn}if(Nt===ee.length)return c(Z,at),Kt&&Ks(Z,Nt),Ge;if(at===null){for(;Nt<ee.length;Nt++)at=ot(Z,ee[Nt],Pe),at!==null&&(V=T(at,V,Nt),dt===null?Ge=at:dt.sibling=at,dt=at);return Kt&&Ks(Z,Nt),Ge}for(at=p(Z,at);Nt<ee.length;Nt++)Mn=Gt(at,Z,Nt,ee[Nt],Pe),Mn!==null&&(o&&Mn.alternate!==null&&at.delete(Mn.key===null?Nt:Mn.key),V=T(Mn,V,Nt),dt===null?Ge=Mn:dt.sibling=Mn,dt=Mn);return o&&at.forEach(function(gs){return a(Z,gs)}),Kt&&Ks(Z,Nt),Ge}function Bn(Z,V,ee,Pe){var Ge=N(ee);if(typeof Ge!="function")throw Error(l(150));if(ee=Ge.call(ee),ee==null)throw Error(l(151));for(var dt=Ge=null,at=V,Nt=V=0,Mn=null,It=ee.next();at!==null&&!It.done;Nt++,It=ee.next()){at.index>Nt?(Mn=at,at=null):Mn=at.sibling;var gs=Je(Z,at,It.value,Pe);if(gs===null){at===null&&(at=Mn);break}o&&at&&gs.alternate===null&&a(Z,at),V=T(gs,V,Nt),dt===null?Ge=gs:dt.sibling=gs,dt=gs,at=Mn}if(It.done)return c(Z,at),Kt&&Ks(Z,Nt),Ge;if(at===null){for(;!It.done;Nt++,It=ee.next())It=ot(Z,It.value,Pe),It!==null&&(V=T(It,V,Nt),dt===null?Ge=It:dt.sibling=It,dt=It);return Kt&&Ks(Z,Nt),Ge}for(at=p(Z,at);!It.done;Nt++,It=ee.next())It=Gt(at,Z,Nt,It.value,Pe),It!==null&&(o&&It.alternate!==null&&at.delete(It.key===null?Nt:It.key),V=T(It,V,Nt),dt===null?Ge=It:dt.sibling=It,dt=It);return o&&at.forEach(function(PT){return a(Z,PT)}),Kt&&Ks(Z,Nt),Ge}function Hi(Z,V,ee,Pe){if(typeof ee=="object"&&ee!==null&&ee.type===h&&ee.key===null&&(ee=ee.props.children),typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case f:e:{for(var Ge=ee.key,dt=V;dt!==null;){if(dt.key===Ge){if(Ge=ee.type,Ge===h){if(dt.tag===7){c(Z,dt.sibling),V=y(dt,ee.props.children),V.return=Z,Z=V;break e}}else if(dt.elementType===Ge||typeof Ge=="object"&&Ge!==null&&Ge.$$typeof===M&&O0(Ge)===dt.type){c(Z,dt.sibling),V=y(dt,ee.props),V.ref=ll(Z,dt,ee),V.return=Z,Z=V;break e}c(Z,dt);break}else a(Z,dt);dt=dt.sibling}ee.type===h?(V=no(ee.props.children,Z.mode,Pe,ee.key),V.return=Z,Z=V):(Pe=Lc(ee.type,ee.key,ee.props,null,Z.mode,Pe),Pe.ref=ll(Z,V,ee),Pe.return=Z,Z=Pe)}return F(Z);case d:e:{for(dt=ee.key;V!==null;){if(V.key===dt)if(V.tag===4&&V.stateNode.containerInfo===ee.containerInfo&&V.stateNode.implementation===ee.implementation){c(Z,V.sibling),V=y(V,ee.children||[]),V.return=Z,Z=V;break e}else{c(Z,V);break}else a(Z,V);V=V.sibling}V=tp(ee,Z.mode,Pe),V.return=Z,Z=V}return F(Z);case M:return dt=ee._init,Hi(Z,V,dt(ee._payload),Pe)}if(le(ee))return je(Z,V,ee,Pe);if(N(ee))return Bn(Z,V,ee,Pe);ec(Z,ee)}return typeof ee=="string"&&ee!==""||typeof ee=="number"?(ee=""+ee,V!==null&&V.tag===6?(c(Z,V.sibling),V=y(V,ee),V.return=Z,Z=V):(c(Z,V),V=ep(ee,Z.mode,Pe),V.return=Z,Z=V),F(Z)):c(Z,V)}return Hi}var zo=k0(!0),z0=k0(!1),ul={},Oi=Ke(ul),cl=Ke(ul),Bo=Ke(ul);function vr(o){if(o===ul)throw Error(l(174));return o}function _h(o,a){Oe(Bo,a),Oe(cl,o),Oe(Oi,ul),o=ce(a),Se(Oi),Oe(Oi,o)}function Ho(){Se(Oi),Se(cl),Se(Bo)}function B0(o){var a=vr(Bo.current),c=vr(Oi.current);a=b(c,o.type,a),c!==a&&(Oe(cl,o),Oe(Oi,a))}function yh(o){cl.current===o&&(Se(Oi),Se(cl))}var Zt=Ke(0);function tc(o){for(var a=o;a!==null;){if(a.tag===13){var c=a.memoizedState;if(c!==null&&(c=c.dehydrated,c===null||dr(c)||Ys(c)))return a}else if(a.tag===19&&a.memoizedProps.revealOrder!==void 0){if(a.flags&128)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===o)break;for(;a.sibling===null;){if(a.return===null||a.return===o)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var xh=[];function Sh(){for(var o=0;o<xh.length;o++){var a=xh[o];Ze?a._workInProgressVersionPrimary=null:a._workInProgressVersionSecondary=null}xh.length=0}var nc=u.ReactCurrentDispatcher,ki=u.ReactCurrentBatchConfig,Vo=0,nn=null,On=null,En=null,ic=!1,fl=!1,dl=0,eT=0;function kn(){throw Error(l(321))}function Eh(o,a){if(a===null)return!1;for(var c=0;c<a.length&&c<o.length;c++)if(!pr(o[c],a[c]))return!1;return!0}function Mh(o,a,c,p,y,T){if(Vo=T,nn=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,nc.current=o===null||o.memoizedState===null?rT:sT,o=c(p,y),fl){T=0;do{if(fl=!1,dl=0,25<=T)throw Error(l(301));T+=1,En=On=null,a.updateQueue=null,nc.current=oT,o=c(p,y)}while(fl)}if(nc.current=lc,a=On!==null&&On.next!==null,Vo=0,En=On=nn=null,ic=!1,a)throw Error(l(300));return o}function Th(){var o=dl!==0;return dl=0,o}function Fr(){var o={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return En===null?nn.memoizedState=En=o:En=En.next=o,En}function _r(){if(On===null){var o=nn.alternate;o=o!==null?o.memoizedState:null}else o=On.next;var a=En===null?nn.memoizedState:En.next;if(a!==null)En=a,On=o;else{if(o===null)throw Error(l(310));On=o,o={memoizedState:On.memoizedState,baseState:On.baseState,baseQueue:On.baseQueue,queue:On.queue,next:null},En===null?nn.memoizedState=En=o:En=En.next=o}return En}function Qs(o,a){return typeof a=="function"?a(o):a}function rc(o){var a=_r(),c=a.queue;if(c===null)throw Error(l(311));c.lastRenderedReducer=o;var p=On,y=p.baseQueue,T=c.pending;if(T!==null){if(y!==null){var F=y.next;y.next=T.next,T.next=F}p.baseQueue=y=T,c.pending=null}if(y!==null){T=y.next,p=p.baseState;var H=F=null,ne=null,_e=T;do{var Ue=_e.lane;if((Vo&Ue)===Ue)ne!==null&&(ne=ne.next={lane:0,action:_e.action,hasEagerState:_e.hasEagerState,eagerState:_e.eagerState,next:null}),p=_e.hasEagerState?_e.eagerState:o(p,_e.action);else{var ot={lane:Ue,action:_e.action,hasEagerState:_e.hasEagerState,eagerState:_e.eagerState,next:null};ne===null?(H=ne=ot,F=p):ne=ne.next=ot,nn.lanes|=Ue,Wo|=Ue}_e=_e.next}while(_e!==null&&_e!==T);ne===null?F=p:ne.next=H,pr(p,a.memoizedState)||(Si=!0),a.memoizedState=p,a.baseState=F,a.baseQueue=ne,c.lastRenderedState=p}if(o=c.interleaved,o!==null){y=o;do T=y.lane,nn.lanes|=T,Wo|=T,y=y.next;while(y!==o)}else y===null&&(c.lanes=0);return[a.memoizedState,c.dispatch]}function sc(o){var a=_r(),c=a.queue;if(c===null)throw Error(l(311));c.lastRenderedReducer=o;var p=c.dispatch,y=c.pending,T=a.memoizedState;if(y!==null){c.pending=null;var F=y=y.next;do T=o(T,F.action),F=F.next;while(F!==y);pr(T,a.memoizedState)||(Si=!0),a.memoizedState=T,a.baseQueue===null&&(a.baseState=T),c.lastRenderedState=T}return[T,p]}function H0(){}function V0(o,a){var c=nn,p=_r(),y=a(),T=!pr(p.memoizedState,y);if(T&&(p.memoizedState=y,Si=!0),p=p.queue,pl(X0.bind(null,c,p,o),[o]),p.getSnapshot!==a||T||En!==null&&En.memoizedState.tag&1){if(c.flags|=2048,hl(9,W0.bind(null,c,p,y,a),void 0,null),ln===null)throw Error(l(349));Vo&30||G0(c,a,y)}return y}function G0(o,a,c){o.flags|=16384,o={getSnapshot:a,value:c},a=nn.updateQueue,a===null?(a={lastEffect:null,stores:null},nn.updateQueue=a,a.stores=[o]):(c=a.stores,c===null?a.stores=[o]:c.push(o))}function W0(o,a,c,p){a.value=c,a.getSnapshot=p,j0(a)&&zi(o,1,-1)}function X0(o,a,c){return c(function(){j0(a)&&zi(o,1,-1)})}function j0(o){var a=o.getSnapshot;o=o.value;try{var c=a();return!pr(o,c)}catch{return!0}}function wh(o){var a=Fr();return typeof o=="function"&&(o=o()),a.memoizedState=a.baseState=o,o={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Qs,lastRenderedState:o},a.queue=o,o=o.dispatch=iT.bind(null,nn,o),[a.memoizedState,o]}function hl(o,a,c,p){return o={tag:o,create:a,destroy:c,deps:p,next:null},a=nn.updateQueue,a===null?(a={lastEffect:null,stores:null},nn.updateQueue=a,a.lastEffect=o.next=o):(c=a.lastEffect,c===null?a.lastEffect=o.next=o:(p=c.next,c.next=o,o.next=p,a.lastEffect=o)),o}function Y0(){return _r().memoizedState}function oc(o,a,c,p){var y=Fr();nn.flags|=o,y.memoizedState=hl(1|a,c,void 0,p===void 0?null:p)}function ac(o,a,c,p){var y=_r();p=p===void 0?null:p;var T=void 0;if(On!==null){var F=On.memoizedState;if(T=F.destroy,p!==null&&Eh(p,F.deps)){y.memoizedState=hl(a,c,T,p);return}}nn.flags|=o,y.memoizedState=hl(1|a,c,T,p)}function Ah(o,a){return oc(8390656,8,o,a)}function pl(o,a){return ac(2048,8,o,a)}function q0(o,a){return ac(4,2,o,a)}function K0(o,a){return ac(4,4,o,a)}function Q0(o,a){if(typeof a=="function")return o=o(),a(o),function(){a(null)};if(a!=null)return o=o(),a.current=o,function(){a.current=null}}function Z0(o,a,c){return c=c!=null?c.concat([o]):null,ac(4,4,Q0.bind(null,a,o),c)}function Ch(){}function $0(o,a){var c=_r();a=a===void 0?null:a;var p=c.memoizedState;return p!==null&&a!==null&&Eh(a,p[1])?p[0]:(c.memoizedState=[o,a],o)}function J0(o,a){var c=_r();a=a===void 0?null:a;var p=c.memoizedState;return p!==null&&a!==null&&Eh(a,p[1])?p[0]:(o=o(),c.memoizedState=[o,a],o)}function tT(o,a){var c=Lt;Lt=c!==0&&4>c?c:4,o(!0);var p=ki.transition;ki.transition={};try{o(!1),a()}finally{Lt=c,ki.transition=p}}function e_(){return _r().memoizedState}function nT(o,a,c){var p=hs(o);c={lane:p,action:c,hasEagerState:!1,eagerState:null,next:null},t_(o)?n_(a,c):(i_(o,a,c),c=qn(),o=zi(o,p,c),o!==null&&r_(o,a,p))}function iT(o,a,c){var p=hs(o),y={lane:p,action:c,hasEagerState:!1,eagerState:null,next:null};if(t_(o))n_(a,y);else{i_(o,a,y);var T=o.alternate;if(o.lanes===0&&(T===null||T.lanes===0)&&(T=a.lastRenderedReducer,T!==null))try{var F=a.lastRenderedState,H=T(F,c);if(y.hasEagerState=!0,y.eagerState=H,pr(H,F))return}catch{}finally{}c=qn(),o=zi(o,p,c),o!==null&&r_(o,a,p)}}function t_(o){var a=o.alternate;return o===nn||a!==null&&a===nn}function n_(o,a){fl=ic=!0;var c=o.pending;c===null?a.next=a:(a.next=c.next,c.next=a),o.pending=a}function i_(o,a,c){ln!==null&&o.mode&1&&!(mt&2)?(o=a.interleaved,o===null?(c.next=c,gr===null?gr=[a]:gr.push(a)):(c.next=o.next,o.next=c),a.interleaved=c):(o=a.pending,o===null?c.next=c:(c.next=o.next,o.next=c),a.pending=c)}function r_(o,a,c){if(c&4194240){var p=a.lanes;p&=o.pendingLanes,c|=p,a.lanes=c,th(o,c)}}var lc={readContext:Ui,useCallback:kn,useContext:kn,useEffect:kn,useImperativeHandle:kn,useInsertionEffect:kn,useLayoutEffect:kn,useMemo:kn,useReducer:kn,useRef:kn,useState:kn,useDebugValue:kn,useDeferredValue:kn,useTransition:kn,useMutableSource:kn,useSyncExternalStore:kn,useId:kn,unstable_isNewReconciler:!1},rT={readContext:Ui,useCallback:function(o,a){return Fr().memoizedState=[o,a===void 0?null:a],o},useContext:Ui,useEffect:Ah,useImperativeHandle:function(o,a,c){return c=c!=null?c.concat([o]):null,oc(4194308,4,Q0.bind(null,a,o),c)},useLayoutEffect:function(o,a){return oc(4194308,4,o,a)},useInsertionEffect:function(o,a){return oc(4,2,o,a)},useMemo:function(o,a){var c=Fr();return a=a===void 0?null:a,o=o(),c.memoizedState=[o,a],o},useReducer:function(o,a,c){var p=Fr();return a=c!==void 0?c(a):a,p.memoizedState=p.baseState=a,o={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:o,lastRenderedState:a},p.queue=o,o=o.dispatch=nT.bind(null,nn,o),[p.memoizedState,o]},useRef:function(o){var a=Fr();return o={current:o},a.memoizedState=o},useState:wh,useDebugValue:Ch,useDeferredValue:function(o){var a=wh(o),c=a[0],p=a[1];return Ah(function(){var y=ki.transition;ki.transition={};try{p(o)}finally{ki.transition=y}},[o]),c},useTransition:function(){var o=wh(!1),a=o[0];return o=tT.bind(null,o[1]),Fr().memoizedState=o,[a,o]},useMutableSource:function(){},useSyncExternalStore:function(o,a,c){var p=nn,y=Fr();if(Kt){if(c===void 0)throw Error(l(407));c=c()}else{if(c=a(),ln===null)throw Error(l(349));Vo&30||G0(p,a,c)}y.memoizedState=c;var T={value:c,getSnapshot:a};return y.queue=T,Ah(X0.bind(null,p,T,o),[o]),p.flags|=2048,hl(9,W0.bind(null,p,T,c,a),void 0,null),c},useId:function(){var o=Fr(),a=ln.identifierPrefix;if(Kt){var c=br,p=Ur;c=(p&~(1<<32-St(p)-1)).toString(32)+c,a=":"+a+"R"+c,c=dl++,0<c&&(a+="H"+c.toString(32)),a+=":"}else c=eT++,a=":"+a+"r"+c.toString(32)+":";return o.memoizedState=a},unstable_isNewReconciler:!1},sT={readContext:Ui,useCallback:$0,useContext:Ui,useEffect:pl,useImperativeHandle:Z0,useInsertionEffect:q0,useLayoutEffect:K0,useMemo:J0,useReducer:rc,useRef:Y0,useState:function(){return rc(Qs)},useDebugValue:Ch,useDeferredValue:function(o){var a=rc(Qs),c=a[0],p=a[1];return pl(function(){var y=ki.transition;ki.transition={};try{p(o)}finally{ki.transition=y}},[o]),c},useTransition:function(){var o=rc(Qs)[0],a=_r().memoizedState;return[o,a]},useMutableSource:H0,useSyncExternalStore:V0,useId:e_,unstable_isNewReconciler:!1},oT={readContext:Ui,useCallback:$0,useContext:Ui,useEffect:pl,useImperativeHandle:Z0,useInsertionEffect:q0,useLayoutEffect:K0,useMemo:J0,useReducer:sc,useRef:Y0,useState:function(){return sc(Qs)},useDebugValue:Ch,useDeferredValue:function(o){var a=sc(Qs),c=a[0],p=a[1];return pl(function(){var y=ki.transition;ki.transition={};try{p(o)}finally{ki.transition=y}},[o]),c},useTransition:function(){var o=sc(Qs)[0],a=_r().memoizedState;return[o,a]},useMutableSource:H0,useSyncExternalStore:V0,useId:e_,unstable_isNewReconciler:!1};function Rh(o,a){try{var c="",p=a;do c+=J1(p),p=p.return;while(p);var y=c}catch(T){y=`
Error generating stack: `+T.message+`
`+T.stack}return{value:o,source:a,stack:y}}function Ph(o,a){try{console.error(a.value)}catch(c){setTimeout(function(){throw c})}}var aT=typeof WeakMap=="function"?WeakMap:Map;function s_(o,a,c){c=Ir(-1,c),c.tag=3,c.payload={element:null};var p=a.value;return c.callback=function(){Tc||(Tc=!0,Yh=p),Ph(o,a)},c}function o_(o,a,c){c=Ir(-1,c),c.tag=3;var p=o.type.getDerivedStateFromError;if(typeof p=="function"){var y=a.value;c.payload=function(){return p(y)},c.callback=function(){Ph(o,a)}}var T=o.stateNode;return T!==null&&typeof T.componentDidCatch=="function"&&(c.callback=function(){Ph(o,a),typeof p!="function"&&(fs===null?fs=new Set([this]):fs.add(this));var F=a.stack;this.componentDidCatch(a.value,{componentStack:F!==null?F:""})}),c}function a_(o,a,c){var p=o.pingCache;if(p===null){p=o.pingCache=new aT;var y=new Set;p.set(a,y)}else y=p.get(a),y===void 0&&(y=new Set,p.set(a,y));y.has(c)||(y.add(c),o=ST.bind(null,o,a,c),a.then(o,o))}function l_(o){do{var a;if((a=o.tag===13)&&(a=o.memoizedState,a=a!==null?a.dehydrated!==null:!0),a)return o;o=o.return}while(o!==null);return null}function u_(o,a,c,p,y){return o.mode&1?(o.flags|=65536,o.lanes=y,o):(o===a?o.flags|=65536:(o.flags|=128,c.flags|=131072,c.flags&=-52805,c.tag===1&&(c.alternate===null?c.tag=17:(a=Ir(-1,1),a.tag=2,cs(c,a))),c.lanes|=1),o)}function yr(o){o.flags|=4}function c_(o,a){if(o!==null&&o.child===a.child)return!0;if(a.flags&16)return!1;for(o=a.child;o!==null;){if(o.flags&12854||o.subtreeFlags&12854)return!1;o=o.sibling}return!0}var ml,gl,uc,cc;if(Mt)ml=function(o,a){for(var c=a.child;c!==null;){if(c.tag===5||c.tag===6)ye(o,c.stateNode);else if(c.tag!==4&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===a)break;for(;c.sibling===null;){if(c.return===null||c.return===a)return;c=c.return}c.sibling.return=c.return,c=c.sibling}},gl=function(){},uc=function(o,a,c,p,y){if(o=o.memoizedProps,o!==p){var T=a.stateNode,F=vr(Oi.current);c=te(T,c,o,p,y,F),(a.updateQueue=c)&&yr(a)}},cc=function(o,a,c,p){c!==p&&yr(a)};else if(zt){ml=function(o,a,c,p){for(var y=a.child;y!==null;){if(y.tag===5){var T=y.stateNode;c&&p&&(T=Dt(T,y.type,y.memoizedProps,y)),ye(o,T)}else if(y.tag===6)T=y.stateNode,c&&p&&(T=ri(T,y.memoizedProps,y)),ye(o,T);else if(y.tag!==4){if(y.tag===22&&y.memoizedState!==null)T=y.child,T!==null&&(T.return=y),ml(o,y,!0,!0);else if(y.child!==null){y.child.return=y,y=y.child;continue}}if(y===a)break;for(;y.sibling===null;){if(y.return===null||y.return===a)return;y=y.return}y.sibling.return=y.return,y=y.sibling}};var f_=function(o,a,c,p){for(var y=a.child;y!==null;){if(y.tag===5){var T=y.stateNode;c&&p&&(T=Dt(T,y.type,y.memoizedProps,y)),be(o,T)}else if(y.tag===6)T=y.stateNode,c&&p&&(T=ri(T,y.memoizedProps,y)),be(o,T);else if(y.tag!==4){if(y.tag===22&&y.memoizedState!==null)T=y.child,T!==null&&(T.return=y),f_(o,y,!0,!0);else if(y.child!==null){y.child.return=y,y=y.child;continue}}if(y===a)break;for(;y.sibling===null;){if(y.return===null||y.return===a)return;y=y.return}y.sibling.return=y.return,y=y.sibling}};gl=function(o,a){var c=a.stateNode;if(!c_(o,a)){o=c.containerInfo;var p=ue(o);f_(p,a,!1,!1),c.pendingChildren=p,yr(a),st(o,p)}},uc=function(o,a,c,p,y){var T=o.stateNode,F=o.memoizedProps;if((o=c_(o,a))&&F===p)a.stateNode=T;else{var H=a.stateNode,ne=vr(Oi.current),_e=null;F!==p&&(_e=te(H,c,F,p,y,ne)),o&&_e===null?a.stateNode=T:(T=ge(T,_e,c,F,p,a,o,H),qe(T,c,p,y,ne)&&yr(a),a.stateNode=T,o?yr(a):ml(T,a,!1,!1))}},cc=function(o,a,c,p){c!==p?(o=vr(Bo.current),c=vr(Oi.current),a.stateNode=Ae(p,o,c,a),yr(a)):a.stateNode=o.stateNode}}else gl=function(){},uc=function(){},cc=function(){};function vl(o,a){if(!Kt)switch(o.tailMode){case"hidden":a=o.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?o.tail=null:c.sibling=null;break;case"collapsed":c=o.tail;for(var p=null;c!==null;)c.alternate!==null&&(p=c),c=c.sibling;p===null?a||o.tail===null?o.tail=null:o.tail.sibling=null:p.sibling=null}}function zn(o){var a=o.alternate!==null&&o.alternate.child===o.child,c=0,p=0;if(a)for(var y=o.child;y!==null;)c|=y.lanes|y.childLanes,p|=y.subtreeFlags&14680064,p|=y.flags&14680064,y.return=o,y=y.sibling;else for(y=o.child;y!==null;)c|=y.lanes|y.childLanes,p|=y.subtreeFlags,p|=y.flags,y.return=o,y=y.sibling;return o.subtreeFlags|=p,o.childLanes=c,a}function lT(o,a,c){var p=a.pendingProps;switch(ph(a),a.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return zn(a),null;case 1:return gt(a.type)&&yt(),zn(a),null;case 3:return p=a.stateNode,Ho(),Se(ft),Se(pt),Sh(),p.pendingContext&&(p.context=p.pendingContext,p.pendingContext=null),(o===null||o.child===null)&&(al(a)?yr(a):o===null||o.memoizedState.isDehydrated&&!(a.flags&256)||(a.flags|=1024,$i!==null&&(Qh($i),$i=null))),gl(o,a),zn(a),null;case 5:yh(a),c=vr(Bo.current);var y=a.type;if(o!==null&&a.stateNode!=null)uc(o,a,y,p,c),o.ref!==a.ref&&(a.flags|=512,a.flags|=2097152);else{if(!p){if(a.stateNode===null)throw Error(l(166));return zn(a),null}if(o=vr(Oi.current),al(a)){if(!rt)throw Error(l(175));o=Bu(a.stateNode,a.type,a.memoizedProps,c,o,a,!ol),a.updateQueue=o,o!==null&&yr(a)}else{var T=oe(y,p,c,o,a);ml(T,a,!1,!1),a.stateNode=T,qe(T,y,p,c,o)&&yr(a)}a.ref!==null&&(a.flags|=512,a.flags|=2097152)}return zn(a),null;case 6:if(o&&a.stateNode!=null)cc(o,a,o.memoizedProps,p);else{if(typeof p!="string"&&a.stateNode===null)throw Error(l(166));if(o=vr(Bo.current),c=vr(Oi.current),al(a)){if(!rt)throw Error(l(176));if(o=a.stateNode,p=a.memoizedProps,(c=Hu(o,p,a,!ol))&&(y=yi,y!==null))switch(T=(y.mode&1)!==0,y.tag){case 3:W(y.stateNode.containerInfo,o,p,T);break;case 5:$(y.type,y.memoizedProps,y.stateNode,o,p,T)}c&&yr(a)}else a.stateNode=Ae(p,o,c,a)}return zn(a),null;case 13:if(Se(Zt),p=a.memoizedState,Kt&&xi!==null&&a.mode&1&&!(a.flags&128)){for(o=xi;o;)o=os(o);return ko(),a.flags|=98560,a}if(p!==null&&p.dehydrated!==null){if(p=al(a),o===null){if(!p)throw Error(l(318));if(!rt)throw Error(l(344));if(o=a.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(l(317));qd(o,a)}else ko(),!(a.flags&128)&&(a.memoizedState=null),a.flags|=4;return zn(a),null}return $i!==null&&(Qh($i),$i=null),a.flags&128?(a.lanes=c,a):(p=p!==null,c=!1,o===null?al(a):c=o.memoizedState!==null,p&&!c&&(a.child.flags|=8192,a.mode&1&&(o===null||Zt.current&1?pn===0&&(pn=3):$h())),a.updateQueue!==null&&(a.flags|=4),zn(a),null);case 4:return Ho(),gl(o,a),o===null&&Dn(a.stateNode.containerInfo),zn(a),null;case 10:return lh(a.type._context),zn(a),null;case 17:return gt(a.type)&&yt(),zn(a),null;case 19:if(Se(Zt),y=a.memoizedState,y===null)return zn(a),null;if(p=(a.flags&128)!==0,T=y.rendering,T===null)if(p)vl(y,!1);else{if(pn!==0||o!==null&&o.flags&128)for(o=a.child;o!==null;){if(T=tc(o),T!==null){for(a.flags|=128,vl(y,!1),o=T.updateQueue,o!==null&&(a.updateQueue=o,a.flags|=4),a.subtreeFlags=0,o=c,p=a.child;p!==null;)c=p,y=o,c.flags&=14680066,T=c.alternate,T===null?(c.childLanes=0,c.lanes=y,c.child=null,c.subtreeFlags=0,c.memoizedProps=null,c.memoizedState=null,c.updateQueue=null,c.dependencies=null,c.stateNode=null):(c.childLanes=T.childLanes,c.lanes=T.lanes,c.child=T.child,c.subtreeFlags=0,c.deletions=null,c.memoizedProps=T.memoizedProps,c.memoizedState=T.memoizedState,c.updateQueue=T.updateQueue,c.type=T.type,y=T.dependencies,c.dependencies=y===null?null:{lanes:y.lanes,firstContext:y.firstContext}),p=p.sibling;return Oe(Zt,Zt.current&1|2),a.child}o=o.sibling}y.tail!==null&&Sn()>jh&&(a.flags|=128,p=!0,vl(y,!1),a.lanes=4194304)}else{if(!p)if(o=tc(T),o!==null){if(a.flags|=128,p=!0,o=o.updateQueue,o!==null&&(a.updateQueue=o,a.flags|=4),vl(y,!0),y.tail===null&&y.tailMode==="hidden"&&!T.alternate&&!Kt)return zn(a),null}else 2*Sn()-y.renderingStartTime>jh&&c!==1073741824&&(a.flags|=128,p=!0,vl(y,!1),a.lanes=4194304);y.isBackwards?(T.sibling=a.child,a.child=T):(o=y.last,o!==null?o.sibling=T:a.child=T,y.last=T)}return y.tail!==null?(a=y.tail,y.rendering=a,y.tail=a.sibling,y.renderingStartTime=Sn(),a.sibling=null,o=Zt.current,Oe(Zt,p?o&1|2:o&1),a):(zn(a),null);case 22:case 23:return Zh(),p=a.memoizedState!==null,o!==null&&o.memoizedState!==null!==p&&(a.flags|=8192),p&&a.mode&1?Ei&1073741824&&(zn(a),Mt&&a.subtreeFlags&6&&(a.flags|=8192)):zn(a),null;case 24:return null;case 25:return null}throw Error(l(156,a.tag))}var uT=u.ReactCurrentOwner,Si=!1;function Yn(o,a,c,p){a.child=o===null?z0(a,null,c,p):zo(a,o.child,c,p)}function d_(o,a,c,p,y){c=c.render;var T=a.ref;return bo(a,y),p=Mh(o,a,c,p,T,y),c=Th(),o!==null&&!Si?(a.updateQueue=o.updateQueue,a.flags&=-2053,o.lanes&=~y,Or(o,a,y)):(Kt&&c&&hh(a),a.flags|=1,Yn(o,a,p,y),a.child)}function h_(o,a,c,p,y){if(o===null){var T=c.type;return typeof T=="function"&&!Jh(T)&&T.defaultProps===void 0&&c.compare===null&&c.defaultProps===void 0?(a.tag=15,a.type=T,p_(o,a,T,p,y)):(o=Lc(c.type,null,p,a,a.mode,y),o.ref=a.ref,o.return=a,a.child=o)}if(T=o.child,!(o.lanes&y)){var F=T.memoizedProps;if(c=c.compare,c=c!==null?c:ju,c(F,p)&&o.ref===a.ref)return Or(o,a,y)}return a.flags|=1,o=ms(T,p),o.ref=a.ref,o.return=a,a.child=o}function p_(o,a,c,p,y){if(o!==null&&ju(o.memoizedProps,p)&&o.ref===a.ref)if(Si=!1,(o.lanes&y)!==0)o.flags&131072&&(Si=!0);else return a.lanes=o.lanes,Or(o,a,y);return Dh(o,a,c,p,y)}function m_(o,a,c){var p=a.pendingProps,y=p.children,T=o!==null?o.memoizedState:null;if(p.mode==="hidden")if(!(a.mode&1))a.memoizedState={baseLanes:0,cachePool:null},Oe(Go,Ei),Ei|=c;else if(c&1073741824)a.memoizedState={baseLanes:0,cachePool:null},p=T!==null?T.baseLanes:c,Oe(Go,Ei),Ei|=p;else return o=T!==null?T.baseLanes|c:c,a.lanes=a.childLanes=1073741824,a.memoizedState={baseLanes:o,cachePool:null},a.updateQueue=null,Oe(Go,Ei),Ei|=o,null;else T!==null?(p=T.baseLanes|c,a.memoizedState=null):p=c,Oe(Go,Ei),Ei|=p;return Yn(o,a,y,c),a.child}function g_(o,a){var c=a.ref;(o===null&&c!==null||o!==null&&o.ref!==c)&&(a.flags|=512,a.flags|=2097152)}function Dh(o,a,c,p,y){var T=gt(c)?Tt:pt.current;return T=Ve(a,T),bo(a,y),c=Mh(o,a,c,p,T,y),p=Th(),o!==null&&!Si?(a.updateQueue=o.updateQueue,a.flags&=-2053,o.lanes&=~y,Or(o,a,y)):(Kt&&p&&hh(a),a.flags|=1,Yn(o,a,c,y),a.child)}function v_(o,a,c,p,y){if(gt(c)){var T=!0;xn(a)}else T=!1;if(bo(a,y),a.stateNode===null)o!==null&&(o.alternate=null,a.alternate=null,a.flags|=2),L0(a,c,p),dh(a,c,p,y),p=!0;else if(o===null){var F=a.stateNode,H=a.memoizedProps;F.props=H;var ne=F.context,_e=c.contextType;typeof _e=="object"&&_e!==null?_e=Ui(_e):(_e=gt(c)?Tt:pt.current,_e=Ve(a,_e));var Ue=c.getDerivedStateFromProps,ot=typeof Ue=="function"||typeof F.getSnapshotBeforeUpdate=="function";ot||typeof F.UNSAFE_componentWillReceiveProps!="function"&&typeof F.componentWillReceiveProps!="function"||(H!==p||ne!==_e)&&N0(a,F,p,_e),us=!1;var Je=a.memoizedState;F.state=Je,Qu(a,p,F,y),ne=a.memoizedState,H!==p||Je!==ne||ft.current||us?(typeof Ue=="function"&&(fh(a,c,Ue,p),ne=a.memoizedState),(H=us||D0(a,c,H,p,Je,ne,_e))?(ot||typeof F.UNSAFE_componentWillMount!="function"&&typeof F.componentWillMount!="function"||(typeof F.componentWillMount=="function"&&F.componentWillMount(),typeof F.UNSAFE_componentWillMount=="function"&&F.UNSAFE_componentWillMount()),typeof F.componentDidMount=="function"&&(a.flags|=4194308)):(typeof F.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=p,a.memoizedState=ne),F.props=p,F.state=ne,F.context=_e,p=H):(typeof F.componentDidMount=="function"&&(a.flags|=4194308),p=!1)}else{F=a.stateNode,A0(o,a),H=a.memoizedProps,_e=a.type===a.elementType?H:Zi(a.type,H),F.props=_e,ot=a.pendingProps,Je=F.context,ne=c.contextType,typeof ne=="object"&&ne!==null?ne=Ui(ne):(ne=gt(c)?Tt:pt.current,ne=Ve(a,ne));var Gt=c.getDerivedStateFromProps;(Ue=typeof Gt=="function"||typeof F.getSnapshotBeforeUpdate=="function")||typeof F.UNSAFE_componentWillReceiveProps!="function"&&typeof F.componentWillReceiveProps!="function"||(H!==ot||Je!==ne)&&N0(a,F,p,ne),us=!1,Je=a.memoizedState,F.state=Je,Qu(a,p,F,y);var je=a.memoizedState;H!==ot||Je!==je||ft.current||us?(typeof Gt=="function"&&(fh(a,c,Gt,p),je=a.memoizedState),(_e=us||D0(a,c,_e,p,Je,je,ne)||!1)?(Ue||typeof F.UNSAFE_componentWillUpdate!="function"&&typeof F.componentWillUpdate!="function"||(typeof F.componentWillUpdate=="function"&&F.componentWillUpdate(p,je,ne),typeof F.UNSAFE_componentWillUpdate=="function"&&F.UNSAFE_componentWillUpdate(p,je,ne)),typeof F.componentDidUpdate=="function"&&(a.flags|=4),typeof F.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof F.componentDidUpdate!="function"||H===o.memoizedProps&&Je===o.memoizedState||(a.flags|=4),typeof F.getSnapshotBeforeUpdate!="function"||H===o.memoizedProps&&Je===o.memoizedState||(a.flags|=1024),a.memoizedProps=p,a.memoizedState=je),F.props=p,F.state=je,F.context=ne,p=_e):(typeof F.componentDidUpdate!="function"||H===o.memoizedProps&&Je===o.memoizedState||(a.flags|=4),typeof F.getSnapshotBeforeUpdate!="function"||H===o.memoizedProps&&Je===o.memoizedState||(a.flags|=1024),p=!1)}return Lh(o,a,c,p,T,y)}function Lh(o,a,c,p,y,T){g_(o,a);var F=(a.flags&128)!==0;if(!p&&!F)return y&&as(a,c,!1),Or(o,a,T);p=a.stateNode,uT.current=a;var H=F&&typeof c.getDerivedStateFromError!="function"?null:p.render();return a.flags|=1,o!==null&&F?(a.child=zo(a,o.child,null,T),a.child=zo(a,null,H,T)):Yn(o,a,H,T),a.memoizedState=p.state,y&&as(a,c,!0),a.child}function __(o){var a=o.stateNode;a.pendingContext?Fn(o,a.pendingContext,a.pendingContext!==a.context):a.context&&Fn(o,a.context,!1),_h(o,a.containerInfo)}function y_(o,a,c,p,y){return ko(),vh(y),a.flags|=256,Yn(o,a,c,p),a.child}var fc={dehydrated:null,treeContext:null,retryLane:0};function dc(o){return{baseLanes:o,cachePool:null}}function x_(o,a,c){var p=a.pendingProps,y=Zt.current,T=!1,F=(a.flags&128)!==0,H;if((H=F)||(H=o!==null&&o.memoizedState===null?!1:(y&2)!==0),H?(T=!0,a.flags&=-129):(o===null||o.memoizedState!==null)&&(y|=1),Oe(Zt,y&1),o===null)return gh(a),o=a.memoizedState,o!==null&&(o=o.dehydrated,o!==null)?(a.mode&1?Ys(o)?a.lanes=8:a.lanes=1073741824:a.lanes=1,null):(y=p.children,o=p.fallback,T?(p=a.mode,T=a.child,y={mode:"hidden",children:y},!(p&1)&&T!==null?(T.childLanes=0,T.pendingProps=y):T=Nc(y,p,0,null),o=no(o,p,c,null),T.return=a,o.return=a,T.sibling=o,a.child=T,a.child.memoizedState=dc(c),a.memoizedState=fc,o):Nh(a,y));if(y=o.memoizedState,y!==null){if(H=y.dehydrated,H!==null){if(F)return a.flags&256?(a.flags&=-257,hc(o,a,c,Error(l(422)))):a.memoizedState!==null?(a.child=o.child,a.flags|=128,null):(T=p.fallback,y=a.mode,p=Nc({mode:"visible",children:p.children},y,0,null),T=no(T,y,c,null),T.flags|=2,p.return=a,T.return=a,p.sibling=T,a.child=p,a.mode&1&&zo(a,o.child,null,c),a.child.memoizedState=dc(c),a.memoizedState=fc,T);if(!(a.mode&1))a=hc(o,a,c,null);else if(Ys(H))a=hc(o,a,c,Error(l(419)));else if(p=(c&o.childLanes)!==0,Si||p){if(p=ln,p!==null){switch(c&-c){case 4:T=2;break;case 16:T=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:T=32;break;case 536870912:T=268435456;break;default:T=0}p=T&(p.suspendedLanes|c)?0:T,p!==0&&p!==y.retryLane&&(y.retryLane=p,zi(o,p,-1))}$h(),a=hc(o,a,c,Error(l(421)))}else dr(H)?(a.flags|=128,a.child=o.child,a=ET.bind(null,o),ku(H,a),a=null):(c=y.treeContext,rt&&(xi=Io(H),yi=a,Kt=!0,$i=null,ol=!1,c!==null&&(bi[Fi++]=Ur,bi[Fi++]=br,bi[Fi++]=qs,Ur=c.id,br=c.overflow,qs=a)),a=Nh(a,a.pendingProps.children),a.flags|=4096);return a}return T?(p=E_(o,a,p.children,p.fallback,c),T=a.child,y=o.child.memoizedState,T.memoizedState=y===null?dc(c):{baseLanes:y.baseLanes|c,cachePool:null},T.childLanes=o.childLanes&~c,a.memoizedState=fc,p):(c=S_(o,a,p.children,c),a.memoizedState=null,c)}return T?(p=E_(o,a,p.children,p.fallback,c),T=a.child,y=o.child.memoizedState,T.memoizedState=y===null?dc(c):{baseLanes:y.baseLanes|c,cachePool:null},T.childLanes=o.childLanes&~c,a.memoizedState=fc,p):(c=S_(o,a,p.children,c),a.memoizedState=null,c)}function Nh(o,a){return a=Nc({mode:"visible",children:a},o.mode,0,null),a.return=o,o.child=a}function S_(o,a,c,p){var y=o.child;return o=y.sibling,c=ms(y,{mode:"visible",children:c}),!(a.mode&1)&&(c.lanes=p),c.return=a,c.sibling=null,o!==null&&(p=a.deletions,p===null?(a.deletions=[o],a.flags|=16):p.push(o)),a.child=c}function E_(o,a,c,p,y){var T=a.mode;o=o.child;var F=o.sibling,H={mode:"hidden",children:c};return!(T&1)&&a.child!==o?(c=a.child,c.childLanes=0,c.pendingProps=H,a.deletions=null):(c=ms(o,H),c.subtreeFlags=o.subtreeFlags&14680064),F!==null?p=ms(F,p):(p=no(p,T,y,null),p.flags|=2),p.return=a,c.return=a,c.sibling=p,a.child=c,p}function hc(o,a,c,p){return p!==null&&vh(p),zo(a,o.child,null,c),o=Nh(a,a.pendingProps.children),o.flags|=2,a.memoizedState=null,o}function M_(o,a,c){o.lanes|=a;var p=o.alternate;p!==null&&(p.lanes|=a),uh(o.return,a,c)}function Ih(o,a,c,p,y){var T=o.memoizedState;T===null?o.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:p,tail:c,tailMode:y}:(T.isBackwards=a,T.rendering=null,T.renderingStartTime=0,T.last=p,T.tail=c,T.tailMode=y)}function T_(o,a,c){var p=a.pendingProps,y=p.revealOrder,T=p.tail;if(Yn(o,a,p.children,c),p=Zt.current,p&2)p=p&1|2,a.flags|=128;else{if(o!==null&&o.flags&128)e:for(o=a.child;o!==null;){if(o.tag===13)o.memoizedState!==null&&M_(o,c,a);else if(o.tag===19)M_(o,c,a);else if(o.child!==null){o.child.return=o,o=o.child;continue}if(o===a)break e;for(;o.sibling===null;){if(o.return===null||o.return===a)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}p&=1}if(Oe(Zt,p),!(a.mode&1))a.memoizedState=null;else switch(y){case"forwards":for(c=a.child,y=null;c!==null;)o=c.alternate,o!==null&&tc(o)===null&&(y=c),c=c.sibling;c=y,c===null?(y=a.child,a.child=null):(y=c.sibling,c.sibling=null),Ih(a,!1,y,c,T);break;case"backwards":for(c=null,y=a.child,a.child=null;y!==null;){if(o=y.alternate,o!==null&&tc(o)===null){a.child=y;break}o=y.sibling,y.sibling=c,c=y,y=o}Ih(a,!0,c,null,T);break;case"together":Ih(a,!1,null,null,void 0);break;default:a.memoizedState=null}return a.child}function Or(o,a,c){if(o!==null&&(a.dependencies=o.dependencies),Wo|=a.lanes,!(c&a.childLanes))return null;if(o!==null&&a.child!==o.child)throw Error(l(153));if(a.child!==null){for(o=a.child,c=ms(o,o.pendingProps),a.child=c,c.return=a;o.sibling!==null;)o=o.sibling,c=c.sibling=ms(o,o.pendingProps),c.return=a;c.sibling=null}return a.child}function cT(o,a,c){switch(a.tag){case 3:__(a),ko();break;case 5:B0(a);break;case 1:gt(a.type)&&xn(a);break;case 4:_h(a,a.stateNode.containerInfo);break;case 10:w0(a,a.type._context,a.memoizedProps.value);break;case 13:var p=a.memoizedState;if(p!==null)return p.dehydrated!==null?(Oe(Zt,Zt.current&1),a.flags|=128,null):c&a.child.childLanes?x_(o,a,c):(Oe(Zt,Zt.current&1),o=Or(o,a,c),o!==null?o.sibling:null);Oe(Zt,Zt.current&1);break;case 19:if(p=(c&a.childLanes)!==0,o.flags&128){if(p)return T_(o,a,c);a.flags|=128}var y=a.memoizedState;if(y!==null&&(y.rendering=null,y.tail=null,y.lastEffect=null),Oe(Zt,Zt.current),p)break;return null;case 22:case 23:return a.lanes=0,m_(o,a,c)}return Or(o,a,c)}function fT(o,a){switch(ph(a),a.tag){case 1:return gt(a.type)&&yt(),o=a.flags,o&65536?(a.flags=o&-65537|128,a):null;case 3:return Ho(),Se(ft),Se(pt),Sh(),o=a.flags,o&65536&&!(o&128)?(a.flags=o&-65537|128,a):null;case 5:return yh(a),null;case 13:if(Se(Zt),o=a.memoizedState,o!==null&&o.dehydrated!==null){if(a.alternate===null)throw Error(l(340));ko()}return o=a.flags,o&65536?(a.flags=o&-65537|128,a):null;case 19:return Se(Zt),null;case 4:return Ho(),null;case 10:return lh(a.type._context),null;case 22:case 23:return Zh(),null;case 24:return null;default:return null}}var pc=!1,Zs=!1,dT=typeof WeakSet=="function"?WeakSet:Set,Re=null;function mc(o,a){var c=o.ref;if(c!==null)if(typeof c=="function")try{c(null)}catch(p){ui(o,a,p)}else c.current=null}function Uh(o,a,c){try{c()}catch(p){ui(o,a,p)}}var w_=!1;function hT(o,a){for(j(o.containerInfo),Re=a;Re!==null;)if(o=Re,a=o.child,(o.subtreeFlags&1028)!==0&&a!==null)a.return=o,Re=a;else for(;Re!==null;){o=Re;try{var c=o.alternate;if(o.flags&1024)switch(o.tag){case 0:case 11:case 15:break;case 1:if(c!==null){var p=c.memoizedProps,y=c.memoizedState,T=o.stateNode,F=T.getSnapshotBeforeUpdate(o.elementType===o.type?p:Zi(o.type,p),y);T.__reactInternalSnapshotBeforeUpdate=F}break;case 3:Mt&&Ie(o.stateNode.containerInfo);break;case 5:case 6:case 4:case 17:break;default:throw Error(l(163))}}catch(H){ui(o,o.return,H)}if(a=o.sibling,a!==null){a.return=o.return,Re=a;break}Re=o.return}return c=w_,w_=!1,c}function $s(o,a,c){var p=a.updateQueue;if(p=p!==null?p.lastEffect:null,p!==null){var y=p=p.next;do{if((y.tag&o)===o){var T=y.destroy;y.destroy=void 0,T!==void 0&&Uh(a,c,T)}y=y.next}while(y!==p)}}function _l(o,a){if(a=a.updateQueue,a=a!==null?a.lastEffect:null,a!==null){var c=a=a.next;do{if((c.tag&o)===o){var p=c.create;c.destroy=p()}c=c.next}while(c!==a)}}function bh(o){var a=o.ref;if(a!==null){var c=o.stateNode;switch(o.tag){case 5:o=ie(c);break;default:o=c}typeof a=="function"?a(o):a.current=o}}function A_(o,a,c){if(hr&&typeof hr.onCommitFiberUnmount=="function")try{hr.onCommitFiberUnmount(Wu,a)}catch{}switch(a.tag){case 0:case 11:case 14:case 15:if(o=a.updateQueue,o!==null&&(o=o.lastEffect,o!==null)){var p=o=o.next;do{var y=p,T=y.destroy;y=y.tag,T!==void 0&&(y&2||y&4)&&Uh(a,c,T),p=p.next}while(p!==o)}break;case 1:if(mc(a,c),o=a.stateNode,typeof o.componentWillUnmount=="function")try{o.props=a.memoizedProps,o.state=a.memoizedState,o.componentWillUnmount()}catch(F){ui(a,c,F)}break;case 5:mc(a,c);break;case 4:Mt?N_(o,a,c):zt&&zt&&(a=a.stateNode.containerInfo,c=ue(a),Ht(a,c))}}function C_(o,a,c){for(var p=a;;)if(A_(o,p,c),p.child===null||Mt&&p.tag===4){if(p===a)break;for(;p.sibling===null;){if(p.return===null||p.return===a)return;p=p.return}p.sibling.return=p.return,p=p.sibling}else p.child.return=p,p=p.child}function R_(o){var a=o.alternate;a!==null&&(o.alternate=null,R_(a)),o.child=null,o.deletions=null,o.sibling=null,o.tag===5&&(a=o.stateNode,a!==null&&Bt(a)),o.stateNode=null,o.return=null,o.dependencies=null,o.memoizedProps=null,o.memoizedState=null,o.pendingProps=null,o.stateNode=null,o.updateQueue=null}function P_(o){return o.tag===5||o.tag===3||o.tag===4}function D_(o){e:for(;;){for(;o.sibling===null;){if(o.return===null||P_(o.return))return null;o=o.return}for(o.sibling.return=o.return,o=o.sibling;o.tag!==5&&o.tag!==6&&o.tag!==18;){if(o.flags&2||o.child===null||o.tag===4)continue e;o.child.return=o,o=o.child}if(!(o.flags&2))return o.stateNode}}function L_(o){if(Mt){e:{for(var a=o.return;a!==null;){if(P_(a))break e;a=a.return}throw Error(l(160))}var c=a;switch(c.tag){case 5:a=c.stateNode,c.flags&32&&(Ee(a),c.flags&=-33),c=D_(o),Oh(o,c,a);break;case 3:case 4:a=c.stateNode.containerInfo,c=D_(o),Fh(o,c,a);break;default:throw Error(l(161))}}}function Fh(o,a,c){var p=o.tag;if(p===5||p===6)o=o.stateNode,a?Le(c,o,a):Be(c,o);else if(p!==4&&(o=o.child,o!==null))for(Fh(o,a,c),o=o.sibling;o!==null;)Fh(o,a,c),o=o.sibling}function Oh(o,a,c){var p=o.tag;if(p===5||p===6)o=o.stateNode,a?de(c,o,a):re(c,o);else if(p!==4&&(o=o.child,o!==null))for(Oh(o,a,c),o=o.sibling;o!==null;)Oh(o,a,c),o=o.sibling}function N_(o,a,c){for(var p=a,y=!1,T,F;;){if(!y){y=p.return;e:for(;;){if(y===null)throw Error(l(160));switch(T=y.stateNode,y.tag){case 5:F=!1;break e;case 3:T=T.containerInfo,F=!0;break e;case 4:T=T.containerInfo,F=!0;break e}y=y.return}y=!0}if(p.tag===5||p.tag===6)C_(o,p,c),F?$e(T,p.stateNode):et(T,p.stateNode);else if(p.tag===18)F?$d(T,p.stateNode):Zd(T,p.stateNode);else if(p.tag===4){if(p.child!==null){T=p.stateNode.containerInfo,F=!0,p.child.return=p,p=p.child;continue}}else if(A_(o,p,c),p.child!==null){p.child.return=p,p=p.child;continue}if(p===a)break;for(;p.sibling===null;){if(p.return===null||p.return===a)return;p=p.return,p.tag===4&&(y=!1)}p.sibling.return=p.return,p=p.sibling}}function kh(o,a){if(Mt){switch(a.tag){case 0:case 11:case 14:case 15:$s(3,a,a.return),_l(3,a),$s(5,a,a.return);return;case 1:return;case 5:var c=a.stateNode;if(c!=null){var p=a.memoizedProps;o=o!==null?o.memoizedProps:p;var y=a.type,T=a.updateQueue;a.updateQueue=null,T!==null&&He(c,T,y,o,p,a)}return;case 6:if(a.stateNode===null)throw Error(l(162));c=a.memoizedProps,Me(a.stateNode,o!==null?o.memoizedProps:c,c);return;case 3:rt&&o!==null&&o.memoizedState.isDehydrated&&Vu(a.stateNode.containerInfo);return;case 12:return;case 13:gc(a);return;case 19:gc(a);return;case 17:return}throw Error(l(163))}switch(a.tag){case 0:case 11:case 14:case 15:$s(3,a,a.return),_l(3,a),$s(5,a,a.return);return;case 12:return;case 13:gc(a);return;case 19:gc(a);return;case 3:rt&&o!==null&&o.memoizedState.isDehydrated&&Vu(a.stateNode.containerInfo);break;case 22:case 23:return}e:if(zt){switch(a.tag){case 1:case 5:case 6:break e;case 3:case 4:a=a.stateNode,Ht(a.containerInfo,a.pendingChildren);break e}throw Error(l(163))}}function gc(o){var a=o.updateQueue;if(a!==null){o.updateQueue=null;var c=o.stateNode;c===null&&(c=o.stateNode=new dT),a.forEach(function(p){var y=MT.bind(null,o,p);c.has(p)||(c.add(p),p.then(y,y))})}}function pT(o,a){for(Re=a;Re!==null;){a=Re;var c=a.deletions;if(c!==null)for(var p=0;p<c.length;p++){var y=c[p];try{var T=o;Mt?N_(T,y,a):C_(T,y,a);var F=y.alternate;F!==null&&(F.return=null),y.return=null}catch(Ge){ui(y,a,Ge)}}if(c=a.child,a.subtreeFlags&12854&&c!==null)c.return=a,Re=c;else for(;Re!==null;){a=Re;try{var H=a.flags;if(H&32&&Mt&&Ee(a.stateNode),H&512){var ne=a.alternate;if(ne!==null){var _e=ne.ref;_e!==null&&(typeof _e=="function"?_e(null):_e.current=null)}}if(H&8192)switch(a.tag){case 13:if(a.memoizedState!==null){var Ue=a.alternate;(Ue===null||Ue.memoizedState===null)&&(Xh=Sn())}break;case 22:var ot=a.memoizedState!==null,Je=a.alternate,Gt=Je!==null&&Je.memoizedState!==null;if(c=a,Mt){e:if(p=c,y=ot,T=null,Mt)for(var je=p;;){if(je.tag===5){if(T===null){T=je;var Bn=je.stateNode;y?it(Bn):Ce(je.stateNode,je.memoizedProps)}}else if(je.tag===6){if(T===null){var Hi=je.stateNode;y?B(Hi):he(Hi,je.memoizedProps)}}else if((je.tag!==22&&je.tag!==23||je.memoizedState===null||je===p)&&je.child!==null){je.child.return=je,je=je.child;continue}if(je===p)break;for(;je.sibling===null;){if(je.return===null||je.return===p)break e;T===je&&(T=null),je=je.return}T===je&&(T=null),je.sibling.return=je.return,je=je.sibling}}if(ot&&!Gt&&c.mode&1){Re=c;for(var Z=c.child;Z!==null;){for(c=Re=Z;Re!==null;){p=Re;var V=p.child;switch(p.tag){case 0:case 11:case 14:case 15:$s(4,p,p.return);break;case 1:mc(p,p.return);var ee=p.stateNode;if(typeof ee.componentWillUnmount=="function"){var Pe=p.return;try{ee.props=p.memoizedProps,ee.state=p.memoizedState,ee.componentWillUnmount()}catch(Ge){ui(p,Pe,Ge)}}break;case 5:mc(p,p.return);break;case 22:if(p.memoizedState!==null){b_(c);continue}}V!==null?(V.return=p,Re=V):b_(c)}Z=Z.sibling}}}switch(H&4102){case 2:L_(a),a.flags&=-3;break;case 6:L_(a),a.flags&=-3,kh(a.alternate,a);break;case 4096:a.flags&=-4097;break;case 4100:a.flags&=-4097,kh(a.alternate,a);break;case 4:kh(a.alternate,a)}}catch(Ge){ui(a,a.return,Ge)}if(c=a.sibling,c!==null){c.return=a.return,Re=c;break}Re=a.return}}}function mT(o,a,c){Re=o,I_(o)}function I_(o,a,c){for(var p=(o.mode&1)!==0;Re!==null;){var y=Re,T=y.child;if(y.tag===22&&p){var F=y.memoizedState!==null||pc;if(!F){var H=y.alternate,ne=H!==null&&H.memoizedState!==null||Zs;H=pc;var _e=Zs;if(pc=F,(Zs=ne)&&!_e)for(Re=y;Re!==null;)F=Re,ne=F.child,F.tag===22&&F.memoizedState!==null?F_(y):ne!==null?(ne.return=F,Re=ne):F_(y);for(;T!==null;)Re=T,I_(T),T=T.sibling;Re=y,pc=H,Zs=_e}U_(o)}else y.subtreeFlags&8772&&T!==null?(T.return=y,Re=T):U_(o)}}function U_(o){for(;Re!==null;){var a=Re;if(a.flags&8772){var c=a.alternate;try{if(a.flags&8772)switch(a.tag){case 0:case 11:case 15:Zs||_l(5,a);break;case 1:var p=a.stateNode;if(a.flags&4&&!Zs)if(c===null)p.componentDidMount();else{var y=a.elementType===a.type?c.memoizedProps:Zi(a.type,c.memoizedProps);p.componentDidUpdate(y,c.memoizedState,p.__reactInternalSnapshotBeforeUpdate)}var T=a.updateQueue;T!==null&&R0(a,T,p);break;case 3:var F=a.updateQueue;if(F!==null){if(c=null,a.child!==null)switch(a.child.tag){case 5:c=ie(a.child.stateNode);break;case 1:c=a.child.stateNode}R0(a,F,c)}break;case 5:var H=a.stateNode;c===null&&a.flags&4&&ke(H,a.type,a.memoizedProps,a);break;case 6:break;case 4:break;case 12:break;case 13:if(rt&&a.memoizedState===null){var ne=a.alternate;if(ne!==null){var _e=ne.memoizedState;if(_e!==null){var Ue=_e.dehydrated;Ue!==null&&Qd(Ue)}}}break;case 19:case 17:case 21:case 22:case 23:break;default:throw Error(l(163))}Zs||a.flags&512&&bh(a)}catch(ot){ui(a,a.return,ot)}}if(a===o){Re=null;break}if(c=a.sibling,c!==null){c.return=a.return,Re=c;break}Re=a.return}}function b_(o){for(;Re!==null;){var a=Re;if(a===o){Re=null;break}var c=a.sibling;if(c!==null){c.return=a.return,Re=c;break}Re=a.return}}function F_(o){for(;Re!==null;){var a=Re;try{switch(a.tag){case 0:case 11:case 15:var c=a.return;try{_l(4,a)}catch(ne){ui(a,c,ne)}break;case 1:var p=a.stateNode;if(typeof p.componentDidMount=="function"){var y=a.return;try{p.componentDidMount()}catch(ne){ui(a,y,ne)}}var T=a.return;try{bh(a)}catch(ne){ui(a,T,ne)}break;case 5:var F=a.return;try{bh(a)}catch(ne){ui(a,F,ne)}}}catch(ne){ui(a,a.return,ne)}if(a===o){Re=null;break}var H=a.sibling;if(H!==null){H.return=a.return,Re=H;break}Re=a.return}}var vc=0,_c=1,yc=2,xc=3,Sc=4;if(typeof Symbol=="function"&&Symbol.for){var yl=Symbol.for;vc=yl("selector.component"),_c=yl("selector.has_pseudo_class"),yc=yl("selector.role"),xc=yl("selector.test_id"),Sc=yl("selector.text")}function zh(o){var a=z(o);if(a!=null){if(typeof a.memoizedProps["data-testname"]!="string")throw Error(l(364));return a}if(o=lt(o),o===null)throw Error(l(362));return o.stateNode.current}function Bh(o,a){switch(a.$$typeof){case vc:if(o.type===a.value)return!0;break;case _c:e:{a=a.value,o=[o,0];for(var c=0;c<o.length;){var p=o[c++],y=o[c++],T=a[y];if(p.tag!==5||!R(p)){for(;T!=null&&Bh(p,T);)y++,T=a[y];if(y===a.length){a=!0;break e}else for(p=p.child;p!==null;)o.push(p,y),p=p.sibling}}a=!1}return a;case yc:if(o.tag===5&&Q(o.stateNode,a.value))return!0;break;case Sc:if((o.tag===5||o.tag===6)&&(o=k(o),o!==null&&0<=o.indexOf(a.value)))return!0;break;case xc:if(o.tag===5&&(o=o.memoizedProps["data-testname"],typeof o=="string"&&o.toLowerCase()===a.value.toLowerCase()))return!0;break;default:throw Error(l(365))}return!1}function Hh(o){switch(o.$$typeof){case vc:return"<"+(L(o.value)||"Unknown")+">";case _c:return":has("+(Hh(o)||"")+")";case yc:return'[role="'+o.value+'"]';case Sc:return'"'+o.value+'"';case xc:return'[data-testname="'+o.value+'"]';default:throw Error(l(365))}}function O_(o,a){var c=[];o=[o,0];for(var p=0;p<o.length;){var y=o[p++],T=o[p++],F=a[T];if(y.tag!==5||!R(y)){for(;F!=null&&Bh(y,F);)T++,F=a[T];if(T===a.length)c.push(y);else for(y=y.child;y!==null;)o.push(y,T),y=y.sibling}}return c}function Vh(o,a){if(!Xe)throw Error(l(363));o=zh(o),o=O_(o,a),a=[],o=Array.from(o);for(var c=0;c<o.length;){var p=o[c++];if(p.tag===5)R(p)||a.push(p.stateNode);else for(p=p.child;p!==null;)o.push(p),p=p.sibling}return a}var gT=Math.ceil,Ec=u.ReactCurrentDispatcher,Gh=u.ReactCurrentOwner,on=u.ReactCurrentBatchConfig,mt=0,ln=null,un=null,Nn=0,Ei=0,Go=Ke(0),pn=0,xl=null,Wo=0,Mc=0,Wh=0,Sl=null,ai=null,Xh=0,jh=1/0;function Xo(){jh=Sn()+500}var Tc=!1,Yh=null,fs=null,wc=!1,ds=null,Ac=0,El=0,qh=null,Cc=-1,Rc=0;function qn(){return mt&6?Sn():Cc!==-1?Cc:Cc=Sn()}function hs(o){return o.mode&1?mt&2&&Nn!==0?Nn&-Nn:$1.transition!==null?(Rc===0&&(o=hn,hn<<=1,!(hn&4194240)&&(hn=64),Rc=o),Rc):(o=Lt,o!==0?o:Rt()):1}function zi(o,a,c){if(50<El)throw El=0,qh=null,Error(l(185));var p=Pc(o,a);return p===null?null:(sl(p,a,c),(!(mt&2)||p!==ln)&&(p===ln&&(!(mt&2)&&(Mc|=a),pn===4&&ps(p,Nn)),li(p,c),a===1&&mt===0&&!(o.mode&1)&&(Xo(),Xu&&mr())),p)}function Pc(o,a){o.lanes|=a;var c=o.alternate;for(c!==null&&(c.lanes|=a),c=o,o=o.return;o!==null;)o.childLanes|=a,c=o.alternate,c!==null&&(c.childLanes|=a),c=o,o=o.return;return c.tag===3?c.stateNode:null}function li(o,a){var c=o.callbackNode;G1(o,a);var p=Gu(o,o===ln?Nn:0);if(p===0)c!==null&&M0(c),o.callbackNode=null,o.callbackPriority=0;else if(a=p&-p,o.callbackPriority!==a){if(c!=null&&M0(c),a===1)o.tag===0?Z1(z_.bind(null,o)):T0(z_.bind(null,o)),ze?At(function(){mt===0&&mr()}):nh(ih,mr),c=null;else{switch(E0(p)){case 1:c=ih;break;case 4:c=Y1;break;case 16:c=rh;break;case 536870912:c=q1;break;default:c=rh}c=q_(c,k_.bind(null,o))}o.callbackPriority=a,o.callbackNode=c}}function k_(o,a){if(Cc=-1,Rc=0,mt&6)throw Error(l(327));var c=o.callbackNode;if(to()&&o.callbackNode!==c)return null;var p=Gu(o,o===ln?Nn:0);if(p===0)return null;if(p&30||p&o.expiredLanes||a)a=Dc(o,p);else{a=p;var y=mt;mt|=2;var T=V_();(ln!==o||Nn!==a)&&(Xo(),Js(o,a));do try{yT();break}catch(H){H_(o,H)}while(1);ah(),Ec.current=T,mt=y,un!==null?a=0:(ln=null,Nn=0,a=pn)}if(a!==0){if(a===2&&(y=Jd(o),y!==0&&(p=y,a=Kh(o,y))),a===1)throw c=xl,Js(o,0),ps(o,p),li(o,Sn()),c;if(a===6)ps(o,p);else{if(y=o.current.alternate,!(p&30)&&!vT(y)&&(a=Dc(o,p),a===2&&(T=Jd(o),T!==0&&(p=T,a=Kh(o,T))),a===1))throw c=xl,Js(o,0),ps(o,p),li(o,Sn()),c;switch(o.finishedWork=y,o.finishedLanes=p,a){case 0:case 1:throw Error(l(345));case 2:eo(o,ai);break;case 3:if(ps(o,p),(p&130023424)===p&&(a=Xh+500-Sn(),10<a)){if(Gu(o,0)!==0)break;if(y=o.suspendedLanes,(y&p)!==p){qn(),o.pingedLanes|=o.suspendedLanes&y;break}o.timeoutHandle=xe(eo.bind(null,o,ai),a);break}eo(o,ai);break;case 4:if(ps(o,p),(p&4194240)===p)break;for(a=o.eventTimes,y=-1;0<p;){var F=31-St(p);T=1<<F,F=a[F],F>y&&(y=F),p&=~T}if(p=y,p=Sn()-p,p=(120>p?120:480>p?480:1080>p?1080:1920>p?1920:3e3>p?3e3:4320>p?4320:1960*gT(p/1960))-p,10<p){o.timeoutHandle=xe(eo.bind(null,o,ai),p);break}eo(o,ai);break;case 5:eo(o,ai);break;default:throw Error(l(329))}}}return li(o,Sn()),o.callbackNode===c?k_.bind(null,o):null}function Kh(o,a){var c=Sl;return o.current.memoizedState.isDehydrated&&(Js(o,a).flags|=256),o=Dc(o,a),o!==2&&(a=ai,ai=c,a!==null&&Qh(a)),o}function Qh(o){ai===null?ai=o:ai.push.apply(ai,o)}function vT(o){for(var a=o;;){if(a.flags&16384){var c=a.updateQueue;if(c!==null&&(c=c.stores,c!==null))for(var p=0;p<c.length;p++){var y=c[p],T=y.getSnapshot;y=y.value;try{if(!pr(T(),y))return!1}catch{return!1}}}if(c=a.child,a.subtreeFlags&16384&&c!==null)c.return=a,a=c;else{if(a===o)break;for(;a.sibling===null;){if(a.return===null||a.return===o)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function ps(o,a){for(a&=~Wh,a&=~Mc,o.suspendedLanes|=a,o.pingedLanes&=~a,o=o.expirationTimes;0<a;){var c=31-St(a),p=1<<c;o[c]=-1,a&=~p}}function z_(o){if(mt&6)throw Error(l(327));to();var a=Gu(o,0);if(!(a&1))return li(o,Sn()),null;var c=Dc(o,a);if(o.tag!==0&&c===2){var p=Jd(o);p!==0&&(a=p,c=Kh(o,p))}if(c===1)throw c=xl,Js(o,0),ps(o,a),li(o,Sn()),c;if(c===6)throw Error(l(345));return o.finishedWork=o.current.alternate,o.finishedLanes=a,eo(o,ai),li(o,Sn()),null}function B_(o){ds!==null&&ds.tag===0&&!(mt&6)&&to();var a=mt;mt|=1;var c=on.transition,p=Lt;try{if(on.transition=null,Lt=1,o)return o()}finally{Lt=p,on.transition=c,mt=a,!(mt&6)&&mr()}}function Zh(){Ei=Go.current,Se(Go)}function Js(o,a){o.finishedWork=null,o.finishedLanes=0;var c=o.timeoutHandle;if(c!==Et&&(o.timeoutHandle=Et,Ye(c)),un!==null)for(c=un.return;c!==null;){var p=c;switch(ph(p),p.tag){case 1:p=p.type.childContextTypes,p!=null&&yt();break;case 3:Ho(),Se(ft),Se(pt),Sh();break;case 5:yh(p);break;case 4:Ho();break;case 13:Se(Zt);break;case 19:Se(Zt);break;case 10:lh(p.type._context);break;case 22:case 23:Zh()}c=c.return}if(ln=o,un=o=ms(o.current,null),Nn=Ei=a,pn=0,xl=null,Wh=Mc=Wo=0,ai=Sl=null,gr!==null){for(a=0;a<gr.length;a++)if(c=gr[a],p=c.interleaved,p!==null){c.interleaved=null;var y=p.next,T=c.pending;if(T!==null){var F=T.next;T.next=y,p.next=F}c.pending=p}gr=null}return o}function H_(o,a){do{var c=un;try{if(ah(),nc.current=lc,ic){for(var p=nn.memoizedState;p!==null;){var y=p.queue;y!==null&&(y.pending=null),p=p.next}ic=!1}if(Vo=0,En=On=nn=null,fl=!1,dl=0,Gh.current=null,c===null||c.return===null){pn=1,xl=a,un=null;break}e:{var T=o,F=c.return,H=c,ne=a;if(a=Nn,H.flags|=32768,ne!==null&&typeof ne=="object"&&typeof ne.then=="function"){var _e=ne,Ue=H,ot=Ue.tag;if(!(Ue.mode&1)&&(ot===0||ot===11||ot===15)){var Je=Ue.alternate;Je?(Ue.updateQueue=Je.updateQueue,Ue.memoizedState=Je.memoizedState,Ue.lanes=Je.lanes):(Ue.updateQueue=null,Ue.memoizedState=null)}var Gt=l_(F);if(Gt!==null){Gt.flags&=-257,u_(Gt,F,H,T,a),Gt.mode&1&&a_(T,_e,a),a=Gt,ne=_e;var je=a.updateQueue;if(je===null){var Bn=new Set;Bn.add(ne),a.updateQueue=Bn}else je.add(ne);break e}else{if(!(a&1)){a_(T,_e,a),$h();break e}ne=Error(l(426))}}else if(Kt&&H.mode&1){var Hi=l_(F);if(Hi!==null){!(Hi.flags&65536)&&(Hi.flags|=256),u_(Hi,F,H,T,a),vh(ne);break e}}T=ne,pn!==4&&(pn=2),Sl===null?Sl=[T]:Sl.push(T),ne=Rh(ne,H),H=F;do{switch(H.tag){case 3:H.flags|=65536,a&=-a,H.lanes|=a;var Z=s_(H,ne,a);C0(H,Z);break e;case 1:T=ne;var V=H.type,ee=H.stateNode;if(!(H.flags&128)&&(typeof V.getDerivedStateFromError=="function"||ee!==null&&typeof ee.componentDidCatch=="function"&&(fs===null||!fs.has(ee)))){H.flags|=65536,a&=-a,H.lanes|=a;var Pe=o_(H,T,a);C0(H,Pe);break e}}H=H.return}while(H!==null)}W_(c)}catch(Ge){a=Ge,un===c&&c!==null&&(un=c=c.return);continue}break}while(1)}function V_(){var o=Ec.current;return Ec.current=lc,o===null?lc:o}function $h(){(pn===0||pn===3||pn===2)&&(pn=4),ln===null||!(Wo&268435455)&&!(Mc&268435455)||ps(ln,Nn)}function Dc(o,a){var c=mt;mt|=2;var p=V_();ln===o&&Nn===a||Js(o,a);do try{_T();break}catch(y){H_(o,y)}while(1);if(ah(),mt=c,Ec.current=p,un!==null)throw Error(l(261));return ln=null,Nn=0,pn}function _T(){for(;un!==null;)G_(un)}function yT(){for(;un!==null&&!X1();)G_(un)}function G_(o){var a=Y_(o.alternate,o,Ei);o.memoizedProps=o.pendingProps,a===null?W_(o):un=a,Gh.current=null}function W_(o){var a=o;do{var c=a.alternate;if(o=a.return,a.flags&32768){if(c=fT(c,a),c!==null){c.flags&=32767,un=c;return}if(o!==null)o.flags|=32768,o.subtreeFlags=0,o.deletions=null;else{pn=6,un=null;return}}else if(c=lT(c,a,Ei),c!==null){un=c;return}if(a=a.sibling,a!==null){un=a;return}un=a=o}while(a!==null);pn===0&&(pn=5)}function eo(o,a){var c=Lt,p=on.transition;try{on.transition=null,Lt=1,xT(o,a,c)}finally{on.transition=p,Lt=c}return null}function xT(o,a,c){do to();while(ds!==null);if(mt&6)throw Error(l(327));var p=o.finishedWork,y=o.finishedLanes;if(p===null)return null;if(o.finishedWork=null,o.finishedLanes=0,p===o.current)throw Error(l(177));o.callbackNode=null,o.callbackPriority=0;var T=p.lanes|p.childLanes;if(W1(o,T),o===ln&&(un=ln=null,Nn=0),!(p.subtreeFlags&2064)&&!(p.flags&2064)||wc||(wc=!0,q_(rh,function(){return to(),null})),T=(p.flags&15990)!==0,p.subtreeFlags&15990||T){T=on.transition,on.transition=null;var F=Lt;Lt=1;var H=mt;mt|=4,Gh.current=null,hT(o,p),pT(o,p),q(o.containerInfo),o.current=p,mT(p),j1(),mt=H,Lt=F,on.transition=T}else o.current=p;if(wc&&(wc=!1,ds=o,Ac=y),T=o.pendingLanes,T===0&&(fs=null),K1(p.stateNode),li(o,Sn()),a!==null)for(c=o.onRecoverableError,p=0;p<a.length;p++)c(a[p]);if(Tc)throw Tc=!1,o=Yh,Yh=null,o;return Ac&1&&o.tag!==0&&to(),T=o.pendingLanes,T&1?o===qh?El++:(El=0,qh=o):El=0,mr(),null}function to(){if(ds!==null){var o=E0(Ac),a=on.transition,c=Lt;try{if(on.transition=null,Lt=16>o?16:o,ds===null)var p=!1;else{if(o=ds,ds=null,Ac=0,mt&6)throw Error(l(331));var y=mt;for(mt|=4,Re=o.current;Re!==null;){var T=Re,F=T.child;if(Re.flags&16){var H=T.deletions;if(H!==null){for(var ne=0;ne<H.length;ne++){var _e=H[ne];for(Re=_e;Re!==null;){var Ue=Re;switch(Ue.tag){case 0:case 11:case 15:$s(8,Ue,T)}var ot=Ue.child;if(ot!==null)ot.return=Ue,Re=ot;else for(;Re!==null;){Ue=Re;var Je=Ue.sibling,Gt=Ue.return;if(R_(Ue),Ue===_e){Re=null;break}if(Je!==null){Je.return=Gt,Re=Je;break}Re=Gt}}}var je=T.alternate;if(je!==null){var Bn=je.child;if(Bn!==null){je.child=null;do{var Hi=Bn.sibling;Bn.sibling=null,Bn=Hi}while(Bn!==null)}}Re=T}}if(T.subtreeFlags&2064&&F!==null)F.return=T,Re=F;else e:for(;Re!==null;){if(T=Re,T.flags&2048)switch(T.tag){case 0:case 11:case 15:$s(9,T,T.return)}var Z=T.sibling;if(Z!==null){Z.return=T.return,Re=Z;break e}Re=T.return}}var V=o.current;for(Re=V;Re!==null;){F=Re;var ee=F.child;if(F.subtreeFlags&2064&&ee!==null)ee.return=F,Re=ee;else e:for(F=V;Re!==null;){if(H=Re,H.flags&2048)try{switch(H.tag){case 0:case 11:case 15:_l(9,H)}}catch(Ge){ui(H,H.return,Ge)}if(H===F){Re=null;break e}var Pe=H.sibling;if(Pe!==null){Pe.return=H.return,Re=Pe;break e}Re=H.return}}if(mt=y,mr(),hr&&typeof hr.onPostCommitFiberRoot=="function")try{hr.onPostCommitFiberRoot(Wu,o)}catch{}p=!0}return p}finally{Lt=c,on.transition=a}}return!1}function X_(o,a,c){a=Rh(c,a),a=s_(o,a,1),cs(o,a),a=qn(),o=Pc(o,1),o!==null&&(sl(o,1,a),li(o,a))}function ui(o,a,c){if(o.tag===3)X_(o,o,c);else for(;a!==null;){if(a.tag===3){X_(a,o,c);break}else if(a.tag===1){var p=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof p.componentDidCatch=="function"&&(fs===null||!fs.has(p))){o=Rh(c,o),o=o_(a,o,1),cs(a,o),o=qn(),a=Pc(a,1),a!==null&&(sl(a,1,o),li(a,o));break}}a=a.return}}function ST(o,a,c){var p=o.pingCache;p!==null&&p.delete(a),a=qn(),o.pingedLanes|=o.suspendedLanes&c,ln===o&&(Nn&c)===c&&(pn===4||pn===3&&(Nn&130023424)===Nn&&500>Sn()-Xh?Js(o,0):Wh|=c),li(o,a)}function j_(o,a){a===0&&(o.mode&1?(a=ls,ls<<=1,!(ls&130023424)&&(ls=4194304)):a=1);var c=qn();o=Pc(o,a),o!==null&&(sl(o,a,c),li(o,c))}function ET(o){var a=o.memoizedState,c=0;a!==null&&(c=a.retryLane),j_(o,c)}function MT(o,a){var c=0;switch(o.tag){case 13:var p=o.stateNode,y=o.memoizedState;y!==null&&(c=y.retryLane);break;case 19:p=o.stateNode;break;default:throw Error(l(314))}p!==null&&p.delete(a),j_(o,c)}var Y_;Y_=function(o,a,c){if(o!==null)if(o.memoizedProps!==a.pendingProps||ft.current)Si=!0;else{if(!(o.lanes&c)&&!(a.flags&128))return Si=!1,cT(o,a,c);Si=!!(o.flags&131072)}else Si=!1,Kt&&a.flags&1048576&&I0(a,Ju,a.index);switch(a.lanes=0,a.tag){case 2:var p=a.type;o!==null&&(o.alternate=null,a.alternate=null,a.flags|=2),o=a.pendingProps;var y=Ve(a,pt.current);bo(a,c),y=Mh(null,a,p,o,y,c);var T=Th();return a.flags|=1,typeof y=="object"&&y!==null&&typeof y.render=="function"&&y.$$typeof===void 0?(a.tag=1,a.memoizedState=null,a.updateQueue=null,gt(p)?(T=!0,xn(a)):T=!1,a.memoizedState=y.state!==null&&y.state!==void 0?y.state:null,ch(a),y.updater=Zu,a.stateNode=y,y._reactInternals=a,dh(a,p,o,c),a=Lh(null,a,p,!0,T,c)):(a.tag=0,Kt&&T&&hh(a),Yn(null,a,y,c),a=a.child),a;case 16:p=a.elementType;e:{switch(o!==null&&(o.alternate=null,a.alternate=null,a.flags|=2),o=a.pendingProps,y=p._init,p=y(p._payload),a.type=p,y=a.tag=wT(p),o=Zi(p,o),y){case 0:a=Dh(null,a,p,o,c);break e;case 1:a=v_(null,a,p,o,c);break e;case 11:a=d_(null,a,p,o,c);break e;case 14:a=h_(null,a,p,Zi(p.type,o),c);break e}throw Error(l(306,p,""))}return a;case 0:return p=a.type,y=a.pendingProps,y=a.elementType===p?y:Zi(p,y),Dh(o,a,p,y,c);case 1:return p=a.type,y=a.pendingProps,y=a.elementType===p?y:Zi(p,y),v_(o,a,p,y,c);case 3:e:{if(__(a),o===null)throw Error(l(387));p=a.pendingProps,T=a.memoizedState,y=T.element,A0(o,a),Qu(a,p,null,c);var F=a.memoizedState;if(p=F.element,rt&&T.isDehydrated)if(T={element:p,isDehydrated:!1,cache:F.cache,transitions:F.transitions},a.updateQueue.baseState=T,a.memoizedState=T,a.flags&256){y=Error(l(423)),a=y_(o,a,p,c,y);break e}else if(p!==y){y=Error(l(424)),a=y_(o,a,p,c,y);break e}else for(rt&&(xi=zu(a.stateNode.containerInfo),yi=a,Kt=!0,$i=null,ol=!1),c=z0(a,null,p,c),a.child=c;c;)c.flags=c.flags&-3|4096,c=c.sibling;else{if(ko(),p===y){a=Or(o,a,c);break e}Yn(o,a,p,c)}a=a.child}return a;case 5:return B0(a),o===null&&gh(a),p=a.type,y=a.pendingProps,T=o!==null?o.memoizedProps:null,F=y.children,pe(p,y)?F=null:T!==null&&pe(p,T)&&(a.flags|=32),g_(o,a),Yn(o,a,F,c),a.child;case 6:return o===null&&gh(a),null;case 13:return x_(o,a,c);case 4:return _h(a,a.stateNode.containerInfo),p=a.pendingProps,o===null?a.child=zo(a,null,p,c):Yn(o,a,p,c),a.child;case 11:return p=a.type,y=a.pendingProps,y=a.elementType===p?y:Zi(p,y),d_(o,a,p,y,c);case 7:return Yn(o,a,a.pendingProps,c),a.child;case 8:return Yn(o,a,a.pendingProps.children,c),a.child;case 12:return Yn(o,a,a.pendingProps.children,c),a.child;case 10:e:{if(p=a.type._context,y=a.pendingProps,T=a.memoizedProps,F=y.value,w0(a,p,F),T!==null)if(pr(T.value,F)){if(T.children===y.children&&!ft.current){a=Or(o,a,c);break e}}else for(T=a.child,T!==null&&(T.return=a);T!==null;){var H=T.dependencies;if(H!==null){F=T.child;for(var ne=H.firstContext;ne!==null;){if(ne.context===p){if(T.tag===1){ne=Ir(-1,c&-c),ne.tag=2;var _e=T.updateQueue;if(_e!==null){_e=_e.shared;var Ue=_e.pending;Ue===null?ne.next=ne:(ne.next=Ue.next,Ue.next=ne),_e.pending=ne}}T.lanes|=c,ne=T.alternate,ne!==null&&(ne.lanes|=c),uh(T.return,c,a),H.lanes|=c;break}ne=ne.next}}else if(T.tag===10)F=T.type===a.type?null:T.child;else if(T.tag===18){if(F=T.return,F===null)throw Error(l(341));F.lanes|=c,H=F.alternate,H!==null&&(H.lanes|=c),uh(F,c,a),F=T.sibling}else F=T.child;if(F!==null)F.return=T;else for(F=T;F!==null;){if(F===a){F=null;break}if(T=F.sibling,T!==null){T.return=F.return,F=T;break}F=F.return}T=F}Yn(o,a,y.children,c),a=a.child}return a;case 9:return y=a.type,p=a.pendingProps.children,bo(a,c),y=Ui(y),p=p(y),a.flags|=1,Yn(o,a,p,c),a.child;case 14:return p=a.type,y=Zi(p,a.pendingProps),y=Zi(p.type,y),h_(o,a,p,y,c);case 15:return p_(o,a,a.type,a.pendingProps,c);case 17:return p=a.type,y=a.pendingProps,y=a.elementType===p?y:Zi(p,y),o!==null&&(o.alternate=null,a.alternate=null,a.flags|=2),a.tag=1,gt(p)?(o=!0,xn(a)):o=!1,bo(a,c),L0(a,p,y),dh(a,p,y,c),Lh(null,a,p,!0,o,c);case 19:return T_(o,a,c);case 22:return m_(o,a,c)}throw Error(l(156,a.tag))};function q_(o,a){return nh(o,a)}function TT(o,a,c,p){this.tag=o,this.key=c,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=p,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Bi(o,a,c,p){return new TT(o,a,c,p)}function Jh(o){return o=o.prototype,!(!o||!o.isReactComponent)}function wT(o){if(typeof o=="function")return Jh(o)?1:0;if(o!=null){if(o=o.$$typeof,o===w)return 11;if(o===S)return 14}return 2}function ms(o,a){var c=o.alternate;return c===null?(c=Bi(o.tag,a,o.key,o.mode),c.elementType=o.elementType,c.type=o.type,c.stateNode=o.stateNode,c.alternate=o,o.alternate=c):(c.pendingProps=a,c.type=o.type,c.flags=0,c.subtreeFlags=0,c.deletions=null),c.flags=o.flags&14680064,c.childLanes=o.childLanes,c.lanes=o.lanes,c.child=o.child,c.memoizedProps=o.memoizedProps,c.memoizedState=o.memoizedState,c.updateQueue=o.updateQueue,a=o.dependencies,c.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},c.sibling=o.sibling,c.index=o.index,c.ref=o.ref,c}function Lc(o,a,c,p,y,T){var F=2;if(p=o,typeof o=="function")Jh(o)&&(F=1);else if(typeof o=="string")F=5;else e:switch(o){case h:return no(c.children,y,T,a);case m:F=8,y|=8;break;case v:return o=Bi(12,c,a,y|2),o.elementType=v,o.lanes=T,o;case E:return o=Bi(13,c,a,y),o.elementType=E,o.lanes=T,o;case g:return o=Bi(19,c,a,y),o.elementType=g,o.lanes=T,o;case A:return Nc(c,y,T,a);default:if(typeof o=="object"&&o!==null)switch(o.$$typeof){case _:F=10;break e;case x:F=9;break e;case w:F=11;break e;case S:F=14;break e;case M:F=16,p=null;break e}throw Error(l(130,o==null?o:typeof o,""))}return a=Bi(F,c,a,y),a.elementType=o,a.type=p,a.lanes=T,a}function no(o,a,c,p){return o=Bi(7,o,p,a),o.lanes=c,o}function Nc(o,a,c,p){return o=Bi(22,o,p,a),o.elementType=A,o.lanes=c,o.stateNode={},o}function ep(o,a,c){return o=Bi(6,o,null,a),o.lanes=c,o}function tp(o,a,c){return a=Bi(4,o.children!==null?o.children:[],o.key,a),a.lanes=c,a.stateNode={containerInfo:o.containerInfo,pendingChildren:null,implementation:o.implementation},a}function AT(o,a,c,p,y){this.tag=a,this.containerInfo=o,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=Et,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=eh(0),this.expirationTimes=eh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=eh(0),this.identifierPrefix=p,this.onRecoverableError=y,rt&&(this.mutableSourceEagerHydrationData=null)}function K_(o,a,c,p,y,T,F,H,ne){return o=new AT(o,a,c,H,ne),a===1?(a=1,T===!0&&(a|=8)):a=0,T=Bi(3,null,null,a),o.current=T,T.stateNode=o,T.memoizedState={element:p,isDehydrated:c,cache:null,transitions:null},ch(T),o}function Q_(o){if(!o)return _t;o=o._reactInternals;e:{if(P(o)!==o||o.tag!==1)throw Error(l(170));var a=o;do{switch(a.tag){case 3:a=a.stateNode.context;break e;case 1:if(gt(a.type)){a=a.stateNode.__reactInternalMemoizedMergedChildContext;break e}}a=a.return}while(a!==null);throw Error(l(171))}if(o.tag===1){var c=o.type;if(gt(c))return Lr(o,c,a)}return a}function Z_(o){var a=o._reactInternals;if(a===void 0)throw typeof o.render=="function"?Error(l(188)):(o=Object.keys(o).join(","),Error(l(268,o)));return o=K(a),o===null?null:o.stateNode}function $_(o,a){if(o=o.memoizedState,o!==null&&o.dehydrated!==null){var c=o.retryLane;o.retryLane=c!==0&&c<a?c:a}}function np(o,a){$_(o,a),(o=o.alternate)&&$_(o,a)}function CT(o){return o=K(o),o===null?null:o.stateNode}function RT(){return null}return n.attemptContinuousHydration=function(o){if(o.tag===13){var a=qn();zi(o,134217728,a),np(o,134217728)}},n.attemptHydrationAtCurrentPriority=function(o){if(o.tag===13){var a=qn(),c=hs(o);zi(o,c,a),np(o,c)}},n.attemptSynchronousHydration=function(o){switch(o.tag){case 3:var a=o.stateNode;if(a.current.memoizedState.isDehydrated){var c=_i(a.pendingLanes);c!==0&&(th(a,c|1),li(a,Sn()),!(mt&6)&&(Xo(),mr()))}break;case 13:var p=qn();B_(function(){return zi(o,1,p)}),np(o,1)}},n.batchedUpdates=function(o,a){var c=mt;mt|=1;try{return o(a)}finally{mt=c,mt===0&&(Xo(),Xu&&mr())}},n.createComponentSelector=function(o){return{$$typeof:vc,value:o}},n.createContainer=function(o,a,c,p,y,T,F){return K_(o,a,!1,null,c,p,y,T,F)},n.createHasPseudoClassSelector=function(o){return{$$typeof:_c,value:o}},n.createHydrationContainer=function(o,a,c,p,y,T,F,H,ne){return o=K_(c,p,!0,o,y,T,F,H,ne),o.context=Q_(null),c=o.current,p=qn(),y=hs(c),T=Ir(p,y),T.callback=a??null,cs(c,T),o.current.lanes=y,sl(o,y,p),li(o,p),o},n.createPortal=function(o,a,c){var p=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:p==null?null:""+p,children:o,containerInfo:a,implementation:c}},n.createRoleSelector=function(o){return{$$typeof:yc,value:o}},n.createTestNameSelector=function(o){return{$$typeof:xc,value:o}},n.createTextSelector=function(o){return{$$typeof:Sc,value:o}},n.deferredUpdates=function(o){var a=Lt,c=on.transition;try{return on.transition=null,Lt=16,o()}finally{Lt=a,on.transition=c}},n.discreteUpdates=function(o,a,c,p,y){var T=Lt,F=on.transition;try{return on.transition=null,Lt=1,o(a,c,p,y)}finally{Lt=T,on.transition=F,mt===0&&Xo()}},n.findAllNodes=Vh,n.findBoundingRects=function(o,a){if(!Xe)throw Error(l(363));a=Vh(o,a),o=[];for(var c=0;c<a.length;c++)o.push(sn(a[c]));for(a=o.length-1;0<a;a--){c=o[a];for(var p=c.x,y=p+c.width,T=c.y,F=T+c.height,H=a-1;0<=H;H--)if(a!==H){var ne=o[H],_e=ne.x,Ue=_e+ne.width,ot=ne.y,Je=ot+ne.height;if(p>=_e&&T>=ot&&y<=Ue&&F<=Je){o.splice(a,1);break}else if(p!==_e||c.width!==ne.width||Je<T||ot>F){if(!(T!==ot||c.height!==ne.height||Ue<p||_e>y)){_e>p&&(ne.width+=_e-p,ne.x=p),Ue<y&&(ne.width=y-_e),o.splice(a,1);break}}else{ot>T&&(ne.height+=ot-T,ne.y=T),Je<F&&(ne.height=F-ot),o.splice(a,1);break}}}return o},n.findHostInstance=Z_,n.findHostInstanceWithNoPortals=function(o){return o=U(o),o=o!==null?se(o):null,o===null?null:o.stateNode},n.findHostInstanceWithWarning=function(o){return Z_(o)},n.flushControlled=function(o){var a=mt;mt|=1;var c=on.transition,p=Lt;try{on.transition=null,Lt=1,o()}finally{Lt=p,on.transition=c,mt=a,mt===0&&(Xo(),mr())}},n.flushPassiveEffects=to,n.flushSync=B_,n.focusWithin=function(o,a){if(!Xe)throw Error(l(363));for(o=zh(o),a=O_(o,a),a=Array.from(a),o=0;o<a.length;){var c=a[o++];if(!R(c)){if(c.tag===5&&ae(c.stateNode))return!0;for(c=c.child;c!==null;)a.push(c),c=c.sibling}}return!1},n.getCurrentUpdatePriority=function(){return Lt},n.getFindAllNodesFailureDescription=function(o,a){if(!Xe)throw Error(l(363));var c=0,p=[];o=[zh(o),0];for(var y=0;y<o.length;){var T=o[y++],F=o[y++],H=a[F];if((T.tag!==5||!R(T))&&(Bh(T,H)&&(p.push(Hh(H)),F++,F>c&&(c=F)),F<a.length))for(T=T.child;T!==null;)o.push(T,F),T=T.sibling}if(c<a.length){for(o=[];c<a.length;c++)o.push(Hh(a[c]));return`findAllNodes was able to match part of the selector:
  `+(p.join(" > ")+`

No matching component was found for:
  `)+o.join(" > ")}return null},n.getPublicRootInstance=function(o){if(o=o.current,!o.child)return null;switch(o.child.tag){case 5:return ie(o.child.stateNode);default:return o.child.stateNode}},n.injectIntoDevTools=function(o){if(o={bundleType:o.bundleType,version:o.version,rendererPackageName:o.rendererPackageName,rendererConfig:o.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:u.ReactCurrentDispatcher,findHostInstanceByFiber:CT,findFiberByHostInstance:o.findFiberByHostInstance||RT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.0.0-fc46dba67-20220329"},typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u")o=!1;else{var a=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(a.isDisabled||!a.supportsFiber)o=!0;else{try{Wu=a.inject(o),hr=a}catch{}o=!!a.checkDCE}}return o},n.isAlreadyRendering=function(){return!1},n.observeVisibleRects=function(o,a,c,p){if(!Xe)throw Error(l(363));o=Vh(o,a);var y=fe(o,c,p).disconnect;return{disconnect:function(){y()}}},n.registerMutableSourceForHydration=function(o,a){var c=a._getVersion;c=c(a._source),o.mutableSourceEagerHydrationData==null?o.mutableSourceEagerHydrationData=[a,c]:o.mutableSourceEagerHydrationData.push(a,c)},n.runWithPriority=function(o,a){var c=Lt;try{return Lt=o,a()}finally{Lt=c}},n.shouldError=function(){return null},n.shouldSuspend=function(){return!1},n.updateContainer=function(o,a,c,p){var y=a.current,T=qn(),F=hs(y);return c=Q_(c),a.context===null?a.context=c:a.pendingContext=c,a=Ir(T,F),a.payload={element:o},p=p===void 0?null:p,p!==null&&(a.callback=p),cs(y,a),o=zi(y,F,T),o!==null&&Ku(o,y,F),F},n};T1.exports=cN;var fN=T1.exports;const dN=lv(fN),v0={},Wd=t=>void Object.assign(v0,t);function hN(t,e){function n(h,{args:m=[],attach:v,..._},x){let w=`${h[0].toUpperCase()}${h.slice(1)}`,E;if(h==="primitive"){if(_.object===void 0)throw new Error("R3F: Primitives without 'object' are invalid!");const g=_.object;E=da(g,{type:h,root:x,attach:v,primitive:!0})}else{const g=v0[w];if(!g)throw new Error(`R3F: ${w} is not part of the THREE namespace! Did you forget to extend? See: https://docs.pmnd.rs/react-three-fiber/api/objects#using-3rd-party-objects-declaratively`);if(!Array.isArray(m))throw new Error("R3F: The args prop must be an array!");E=da(new g(...m),{type:h,root:x,attach:v,memoizedProps:{args:m}})}return E.__r3f.attach===void 0&&(E.isBufferGeometry?E.__r3f.attach="geometry":E.isMaterial&&(E.__r3f.attach="material")),w!=="inject"&&dm(E,_),E}function i(h,m){let v=!1;if(m){var _,x;(_=m.__r3f)!=null&&_.attach?fm(h,m,m.__r3f.attach):m.isObject3D&&h.isObject3D&&(h.add(m),v=!0),v||(x=h.__r3f)==null||x.objects.push(m),m.__r3f||da(m,{}),m.__r3f.parent=h,rv(m),ha(m)}}function r(h,m,v){let _=!1;if(m){var x,w;if((x=m.__r3f)!=null&&x.attach)fm(h,m,m.__r3f.attach);else if(m.isObject3D&&h.isObject3D){m.parent=h,m.dispatchEvent({type:"added"}),h.dispatchEvent({type:"childadded",child:m});const E=h.children.filter(S=>S!==m),g=E.indexOf(v);h.children=[...E.slice(0,g),m,...E.slice(g)],_=!0}_||(w=h.__r3f)==null||w.objects.push(m),m.__r3f||da(m,{}),m.__r3f.parent=h,rv(m),ha(m)}}function s(h,m,v=!1){h&&[...h].forEach(_=>l(m,_,v))}function l(h,m,v){if(m){var _,x,w;if(m.__r3f&&(m.__r3f.parent=null),(_=h.__r3f)!=null&&_.objects&&(h.__r3f.objects=h.__r3f.objects.filter(A=>A!==m)),(x=m.__r3f)!=null&&x.attach)vS(h,m,m.__r3f.attach);else if(m.isObject3D&&h.isObject3D){var E;h.remove(m),(E=m.__r3f)!=null&&E.root&&EN(Xf(m),m)}const S=(w=m.__r3f)==null?void 0:w.primitive,M=!S&&(v===void 0?m.dispose!==null:v);if(!S){var g;s((g=m.__r3f)==null?void 0:g.objects,m,M),s(m.children,m,M)}if(delete m.__r3f,M&&m.dispose&&m.type!=="Scene"){const A=()=>{try{m.dispose()}catch{}};typeof IS_REACT_ACT_ENVIRONMENT>"u"?nv.unstable_scheduleCallback(nv.unstable_IdlePriority,A):A()}ha(h)}}function u(h,m,v,_){var x;const w=(x=h.__r3f)==null?void 0:x.parent;if(!w)return;const E=n(m,v,h.__r3f.root);if(h.children){for(const g of h.children)g.__r3f&&i(E,g);h.children=h.children.filter(g=>!g.__r3f)}h.__r3f.objects.forEach(g=>i(E,g)),h.__r3f.objects=[],h.__r3f.autoRemovedBeforeAppend||l(w,h),E.parent&&(E.__r3f.autoRemovedBeforeAppend=!0),i(w,E),E.raycast&&E.__r3f.eventCount&&Xf(E).getState().internal.interaction.push(E),[_,_.alternate].forEach(g=>{g!==null&&(g.stateNode=E,g.ref&&(typeof g.ref=="function"?g.ref(E):g.ref.current=E))})}const f=()=>{};return{reconciler:dN({createInstance:n,removeChild:l,appendChild:i,appendInitialChild:i,insertBefore:r,supportsMutation:!0,isPrimaryRenderer:!1,supportsPersistence:!1,supportsHydration:!1,noTimeout:-1,appendChildToContainer:(h,m)=>{if(!m)return;const v=h.getState().scene;v.__r3f&&(v.__r3f.root=h,i(v,m))},removeChildFromContainer:(h,m)=>{m&&l(h.getState().scene,m)},insertInContainerBefore:(h,m,v)=>{if(!m||!v)return;const _=h.getState().scene;_.__r3f&&r(_,m,v)},getRootHostContext:()=>null,getChildHostContext:h=>h,finalizeInitialChildren(h){var m;return!!((m=h==null?void 0:h.__r3f)!=null?m:{}).handlers},prepareUpdate(h,m,v,_){var x;if(((x=h==null?void 0:h.__r3f)!=null?x:{}).primitive&&_.object&&_.object!==h)return[!0];{const{args:E=[],children:g,...S}=_,{args:M=[],children:A,...I}=v;if(!Array.isArray(E))throw new Error("R3F: the args prop must be an array!");if(E.some((L,O)=>L!==M[O]))return[!0];const N=L1(h,S,I,!0);return N.changes.length?[!1,N]:null}},commitUpdate(h,[m,v],_,x,w,E){m?u(h,_,w,E):dm(h,v)},commitMount(h,m,v,_){var x;const w=(x=h.__r3f)!=null?x:{};h.raycast&&w.handlers&&w.eventCount&&Xf(h).getState().internal.interaction.push(h)},getPublicInstance:h=>h,prepareForCommit:()=>null,preparePortalMount:h=>da(h.getState().scene),resetAfterCommit:()=>{},shouldSetTextContent:()=>!1,clearContainer:()=>!1,hideInstance(h){var m;const{attach:v,parent:_}=(m=h.__r3f)!=null?m:{};v&&_&&vS(_,h,v),h.isObject3D&&(h.visible=!1),ha(h)},unhideInstance(h,m){var v;const{attach:_,parent:x}=(v=h.__r3f)!=null?v:{};_&&x&&fm(x,h,_),(h.isObject3D&&m.visible==null||m.visible)&&(h.visible=!0),ha(h)},createTextInstance:f,hideTextInstance:f,unhideTextInstance:f,getCurrentEventPriority:()=>e?e():Ca.DefaultEventPriority,beforeActiveInstanceBlur:()=>{},afterActiveInstanceBlur:()=>{},detachDeletedInstance:()=>{},now:typeof performance<"u"&&Wt.fun(performance.now)?performance.now:Wt.fun(Date.now)?Date.now:()=>0,scheduleTimeout:Wt.fun(setTimeout)?setTimeout:void 0,cancelTimeout:Wt.fun(clearTimeout)?clearTimeout:void 0}),applyProps:dm}}var hS,pS;const cm=t=>"colorSpace"in t||"outputColorSpace"in t,C1=()=>{var t;return(t=v0.ColorManagement)!=null?t:null},R1=t=>t&&t.isOrthographicCamera,_0=typeof window<"u"&&((hS=window.document)!=null&&hS.createElement||((pS=window.navigator)==null?void 0:pS.product)==="ReactNative")?We.useLayoutEffect:We.useEffect;function pN(t){const e=We.useRef(t);return _0(()=>void(e.current=t),[t]),e}class mN extends We.Component{constructor(...e){super(...e),this.state={error:!1}}componentDidCatch(e){this.props.set(e)}render(){return this.state.error?null:this.props.children}}mN.getDerivedStateFromError=()=>({error:!0});const P1="__default",mS=new Map,gN=t=>t&&!!t.memoized&&!!t.changes;function D1(t){var e;const n=typeof window<"u"?(e=window.devicePixelRatio)!=null?e:2:1;return Array.isArray(t)?Math.min(Math.max(t[0],n),t[1]):t}const Fl=t=>{var e;return(e=t.__r3f)==null?void 0:e.root.getState()};function Xf(t){let e=t.__r3f.root;for(;e.getState().previousRoot;)e=e.getState().previousRoot;return e}const Wt={obj:t=>t===Object(t)&&!Wt.arr(t)&&typeof t!="function",fun:t=>typeof t=="function",str:t=>typeof t=="string",num:t=>typeof t=="number",boo:t=>typeof t=="boolean",und:t=>t===void 0,arr:t=>Array.isArray(t),equ(t,e,{arrays:n="shallow",objects:i="reference",strict:r=!0}={}){if(typeof t!=typeof e||!!t!=!!e)return!1;if(Wt.str(t)||Wt.num(t)||Wt.boo(t))return t===e;const s=Wt.obj(t);if(s&&i==="reference")return t===e;const l=Wt.arr(t);if(l&&n==="reference")return t===e;if((l||s)&&t===e)return!0;let u;for(u in t)if(!(u in e))return!1;if(s&&n==="shallow"&&i==="shallow"){for(u in r?e:t)if(!Wt.equ(t[u],e[u],{strict:r,objects:"reference"}))return!1}else for(u in r?e:t)if(t[u]!==e[u])return!1;if(Wt.und(u)){if(l&&t.length===0&&e.length===0||s&&Object.keys(t).length===0&&Object.keys(e).length===0)return!0;if(t!==e)return!1}return!0}};function vN(t){const e={nodes:{},materials:{}};return t&&t.traverse(n=>{n.name&&(e.nodes[n.name]=n),n.material&&!e.materials[n.material.name]&&(e.materials[n.material.name]=n.material)}),e}function _N(t){t.dispose&&t.type!=="Scene"&&t.dispose();for(const e in t)e.dispose==null||e.dispose(),delete t[e]}function da(t,e){const n=t;return n.__r3f={type:"",root:null,previousAttach:null,memoizedProps:{},eventCount:0,handlers:{},objects:[],parent:null,...e},t}function iv(t,e){let n=t;if(e.includes("-")){const i=e.split("-"),r=i.pop();return n=i.reduce((s,l)=>s[l],t),{target:n,key:r}}else return{target:n,key:e}}const gS=/-\d+$/;function fm(t,e,n){if(Wt.str(n)){if(gS.test(n)){const s=n.replace(gS,""),{target:l,key:u}=iv(t,s);Array.isArray(l[u])||(l[u]=[])}const{target:i,key:r}=iv(t,n);e.__r3f.previousAttach=i[r],i[r]=e}else e.__r3f.previousAttach=n(t,e)}function vS(t,e,n){var i,r;if(Wt.str(n)){const{target:s,key:l}=iv(t,n),u=e.__r3f.previousAttach;u===void 0?delete s[l]:s[l]=u}else(i=e.__r3f)==null||i.previousAttach==null||i.previousAttach(t,e);(r=e.__r3f)==null||delete r.previousAttach}function L1(t,{children:e,key:n,ref:i,...r},{children:s,key:l,ref:u,...f}={},d=!1){const h=t.__r3f,m=Object.entries(r),v=[];if(d){const x=Object.keys(f);for(let w=0;w<x.length;w++)r.hasOwnProperty(x[w])||m.unshift([x[w],P1+"remove"])}m.forEach(([x,w])=>{var E;if((E=t.__r3f)!=null&&E.primitive&&x==="object"||Wt.equ(w,f[x]))return;if(/^on(Pointer|Click|DoubleClick|ContextMenu|Wheel)/.test(x))return v.push([x,w,!0,[]]);let g=[];x.includes("-")&&(g=x.split("-")),v.push([x,w,!1,g]);for(const S in r){const M=r[S];S.startsWith(`${x}-`)&&v.push([S,M,!1,S.split("-")])}});const _={...r};return h!=null&&h.memoizedProps&&h!=null&&h.memoizedProps.args&&(_.args=h.memoizedProps.args),h!=null&&h.memoizedProps&&h!=null&&h.memoizedProps.attach&&(_.attach=h.memoizedProps.attach),{memoized:_,changes:v}}const yN=typeof process<"u"&&!1;function dm(t,e){var n;const i=t.__r3f,r=i==null?void 0:i.root,s=r==null||r.getState==null?void 0:r.getState(),{memoized:l,changes:u}=gN(e)?e:L1(t,e),f=i==null?void 0:i.eventCount;t.__r3f&&(t.__r3f.memoizedProps=l);for(let v=0;v<u.length;v++){let[_,x,w,E]=u[v];if(cm(t)){const A="srgb",I="srgb-linear";_==="encoding"?(_="colorSpace",x=x===3001?A:I):_==="outputEncoding"&&(_="outputColorSpace",x=x===3001?A:I)}let g=t,S=g[_];if(E.length&&(S=E.reduce((M,A)=>M[A],t),!(S&&S.set))){const[M,...A]=E.reverse();g=A.reverse().reduce((I,N)=>I[N],t),_=M}if(x===P1+"remove")if(g.constructor){let M=mS.get(g.constructor);M||(M=new g.constructor,mS.set(g.constructor,M)),x=M[_]}else x=0;if(w&&i)x?i.handlers[_]=x:delete i.handlers[_],i.eventCount=Object.keys(i.handlers).length;else if(S&&S.set&&(S.copy||S instanceof Oa)){if(Array.isArray(x))S.fromArray?S.fromArray(x):S.set(...x);else if(S.copy&&x&&x.constructor&&(yN?S.constructor.name===x.constructor.name:S.constructor===x.constructor))S.copy(x);else if(x!==void 0){var d;const M=(d=S)==null?void 0:d.isColor;!M&&S.setScalar?S.setScalar(x):S instanceof Oa&&x instanceof Oa?S.mask=x.mask:S.set(x),!C1()&&s&&!s.linear&&M&&S.convertSRGBToLinear()}}else{var h;if(g[_]=x,(h=g[_])!=null&&h.isTexture&&g[_].format===ji&&g[_].type===Rn&&s){const M=g[_];cm(M)&&cm(s.gl)?M.colorSpace=s.gl.outputColorSpace:M.encoding=s.gl.outputEncoding}}ha(t)}if(i&&i.parent&&t.raycast&&f!==i.eventCount){const v=Xf(t).getState().internal,_=v.interaction.indexOf(t);_>-1&&v.interaction.splice(_,1),i.eventCount&&v.interaction.push(t)}return!(u.length===1&&u[0][0]==="onUpdate")&&u.length&&(n=t.__r3f)!=null&&n.parent&&rv(t),t}function ha(t){var e,n;const i=(e=t.__r3f)==null||(n=e.root)==null||n.getState==null?void 0:n.getState();i&&i.internal.frames===0&&i.invalidate()}function rv(t){t.onUpdate==null||t.onUpdate(t)}function xN(t,e){t.manual||(R1(t)?(t.left=e.width/-2,t.right=e.width/2,t.top=e.height/2,t.bottom=e.height/-2):t.aspect=e.width/e.height,t.updateProjectionMatrix(),t.updateMatrixWorld())}function Sf(t){return(t.eventObject||t.object).uuid+"/"+t.index+t.instanceId}function SN(){var t;const e=typeof self<"u"&&self||typeof window<"u"&&window;if(!e)return Ca.DefaultEventPriority;switch((t=e.event)==null?void 0:t.type){case"click":case"contextmenu":case"dblclick":case"pointercancel":case"pointerdown":case"pointerup":return Ca.DiscreteEventPriority;case"pointermove":case"pointerout":case"pointerover":case"pointerenter":case"pointerleave":case"wheel":return Ca.ContinuousEventPriority;default:return Ca.DefaultEventPriority}}function N1(t,e,n,i){const r=n.get(e);r&&(n.delete(e),n.size===0&&(t.delete(i),r.target.releasePointerCapture(i)))}function EN(t,e){const{internal:n}=t.getState();n.interaction=n.interaction.filter(i=>i!==e),n.initialHits=n.initialHits.filter(i=>i!==e),n.hovered.forEach((i,r)=>{(i.eventObject===e||i.object===e)&&n.hovered.delete(r)}),n.capturedMap.forEach((i,r)=>{N1(n.capturedMap,e,i,r)})}function MN(t){function e(f){const{internal:d}=t.getState(),h=f.offsetX-d.initialClick[0],m=f.offsetY-d.initialClick[1];return Math.round(Math.sqrt(h*h+m*m))}function n(f){return f.filter(d=>["Move","Over","Enter","Out","Leave"].some(h=>{var m;return(m=d.__r3f)==null?void 0:m.handlers["onPointer"+h]}))}function i(f,d){const h=t.getState(),m=new Set,v=[],_=d?d(h.internal.interaction):h.internal.interaction;for(let g=0;g<_.length;g++){const S=Fl(_[g]);S&&(S.raycaster.camera=void 0)}h.previousRoot||h.events.compute==null||h.events.compute(f,h);function x(g){const S=Fl(g);if(!S||!S.events.enabled||S.raycaster.camera===null)return[];if(S.raycaster.camera===void 0){var M;S.events.compute==null||S.events.compute(f,S,(M=S.previousRoot)==null?void 0:M.getState()),S.raycaster.camera===void 0&&(S.raycaster.camera=null)}return S.raycaster.camera?S.raycaster.intersectObject(g,!0):[]}let w=_.flatMap(x).sort((g,S)=>{const M=Fl(g.object),A=Fl(S.object);return!M||!A?g.distance-S.distance:A.events.priority-M.events.priority||g.distance-S.distance}).filter(g=>{const S=Sf(g);return m.has(S)?!1:(m.add(S),!0)});h.events.filter&&(w=h.events.filter(w,h));for(const g of w){let S=g.object;for(;S;){var E;(E=S.__r3f)!=null&&E.eventCount&&v.push({...g,eventObject:S}),S=S.parent}}if("pointerId"in f&&h.internal.capturedMap.has(f.pointerId))for(let g of h.internal.capturedMap.get(f.pointerId).values())m.has(Sf(g.intersection))||v.push(g.intersection);return v}function r(f,d,h,m){const v=t.getState();if(f.length){const _={stopped:!1};for(const x of f){const w=Fl(x.object)||v,{raycaster:E,pointer:g,camera:S,internal:M}=w,A=new X(g.x,g.y,0).unproject(S),I=C=>{var U,K;return(U=(K=M.capturedMap.get(C))==null?void 0:K.has(x.eventObject))!=null?U:!1},N=C=>{const U={intersection:x,target:d.target};M.capturedMap.has(C)?M.capturedMap.get(C).set(x.eventObject,U):M.capturedMap.set(C,new Map([[x.eventObject,U]])),d.target.setPointerCapture(C)},L=C=>{const U=M.capturedMap.get(C);U&&N1(M.capturedMap,x.eventObject,U,C)};let O={};for(let C in d){let U=d[C];typeof U!="function"&&(O[C]=U)}let P={...x,...O,pointer:g,intersections:f,stopped:_.stopped,delta:h,unprojectedPoint:A,ray:E.ray,camera:S,stopPropagation(){const C="pointerId"in d&&M.capturedMap.get(d.pointerId);if((!C||C.has(x.eventObject))&&(P.stopped=_.stopped=!0,M.hovered.size&&Array.from(M.hovered.values()).find(U=>U.eventObject===x.eventObject))){const U=f.slice(0,f.indexOf(x));s([...U,x])}},target:{hasPointerCapture:I,setPointerCapture:N,releasePointerCapture:L},currentTarget:{hasPointerCapture:I,setPointerCapture:N,releasePointerCapture:L},nativeEvent:d};if(m(P),_.stopped===!0)break}}return f}function s(f){const{internal:d}=t.getState();for(const h of d.hovered.values())if(!f.length||!f.find(m=>m.object===h.object&&m.index===h.index&&m.instanceId===h.instanceId)){const v=h.eventObject.__r3f,_=v==null?void 0:v.handlers;if(d.hovered.delete(Sf(h)),v!=null&&v.eventCount){const x={...h,intersections:f};_.onPointerOut==null||_.onPointerOut(x),_.onPointerLeave==null||_.onPointerLeave(x)}}}function l(f,d){for(let h=0;h<d.length;h++){const m=d[h].__r3f;m==null||m.handlers.onPointerMissed==null||m.handlers.onPointerMissed(f)}}function u(f){switch(f){case"onPointerLeave":case"onPointerCancel":return()=>s([]);case"onLostPointerCapture":return d=>{const{internal:h}=t.getState();"pointerId"in d&&h.capturedMap.has(d.pointerId)&&requestAnimationFrame(()=>{h.capturedMap.has(d.pointerId)&&(h.capturedMap.delete(d.pointerId),s([]))})}}return function(h){const{onPointerMissed:m,internal:v}=t.getState();v.lastEvent.current=h;const _=f==="onPointerMove",x=f==="onClick"||f==="onContextMenu"||f==="onDoubleClick",E=i(h,_?n:void 0),g=x?e(h):0;f==="onPointerDown"&&(v.initialClick=[h.offsetX,h.offsetY],v.initialHits=E.map(M=>M.eventObject)),x&&!E.length&&g<=2&&(l(h,v.interaction),m&&m(h)),_&&s(E);function S(M){const A=M.eventObject,I=A.__r3f,N=I==null?void 0:I.handlers;if(I!=null&&I.eventCount)if(_){if(N.onPointerOver||N.onPointerEnter||N.onPointerOut||N.onPointerLeave){const L=Sf(M),O=v.hovered.get(L);O?O.stopped&&M.stopPropagation():(v.hovered.set(L,M),N.onPointerOver==null||N.onPointerOver(M),N.onPointerEnter==null||N.onPointerEnter(M))}N.onPointerMove==null||N.onPointerMove(M)}else{const L=N[f];L?(!x||v.initialHits.includes(A))&&(l(h,v.interaction.filter(O=>!v.initialHits.includes(O))),L(M)):x&&v.initialHits.includes(A)&&l(h,v.interaction.filter(O=>!v.initialHits.includes(O)))}}r(E,h,g,S)}}return{handlePointer:u}}const I1=t=>!!(t!=null&&t.render),U1=We.createContext(null),TN=(t,e)=>{const n=sN((u,f)=>{const d=new X,h=new X,m=new X;function v(g=f().camera,S=h,M=f().size){const{width:A,height:I,top:N,left:L}=M,O=A/I;S.isVector3?m.copy(S):m.set(...S);const P=g.getWorldPosition(d).distanceTo(m);if(R1(g))return{width:A/g.zoom,height:I/g.zoom,top:N,left:L,factor:1,distance:P,aspect:O};{const C=g.fov*Math.PI/180,U=2*Math.tan(C/2)*P,K=U*(A/I);return{width:K,height:U,top:N,left:L,factor:A/K,distance:P,aspect:O}}}let _;const x=g=>u(S=>({performance:{...S.performance,current:g}})),w=new nt;return{set:u,get:f,gl:null,camera:null,raycaster:null,events:{priority:1,enabled:!0,connected:!1},xr:null,scene:null,invalidate:(g=1)=>t(f(),g),advance:(g,S)=>e(g,S,f()),legacy:!1,linear:!1,flat:!1,controls:null,clock:new _2,pointer:w,mouse:w,frameloop:"always",onPointerMissed:void 0,performance:{current:1,min:.5,max:1,debounce:200,regress:()=>{const g=f();_&&clearTimeout(_),g.performance.current!==g.performance.min&&x(g.performance.min),_=setTimeout(()=>x(f().performance.max),g.performance.debounce)}},size:{width:0,height:0,top:0,left:0,updateStyle:!1},viewport:{initialDpr:0,dpr:0,width:0,height:0,top:0,left:0,aspect:0,distance:0,factor:0,getCurrentViewport:v},setEvents:g=>u(S=>({...S,events:{...S.events,...g}})),setSize:(g,S,M,A,I)=>{const N=f().camera,L={width:g,height:S,top:A||0,left:I||0,updateStyle:M};u(O=>({size:L,viewport:{...O.viewport,...v(N,h,L)}}))},setDpr:g=>u(S=>{const M=D1(g);return{viewport:{...S.viewport,dpr:M,initialDpr:S.viewport.initialDpr||M}}}),setFrameloop:(g="always")=>{const S=f().clock;S.stop(),S.elapsedTime=0,g!=="never"&&(S.start(),S.elapsedTime=0),u(()=>({frameloop:g}))},previousRoot:void 0,internal:{active:!1,priority:0,frames:0,lastEvent:We.createRef(),interaction:[],hovered:new Map,subscribers:[],initialClick:[0,0],initialHits:[],capturedMap:new Map,subscribe:(g,S,M)=>{const A=f().internal;return A.priority=A.priority+(S>0?1:0),A.subscribers.push({ref:g,priority:S,store:M}),A.subscribers=A.subscribers.sort((I,N)=>I.priority-N.priority),()=>{const I=f().internal;I!=null&&I.subscribers&&(I.priority=I.priority-(S>0?1:0),I.subscribers=I.subscribers.filter(N=>N.ref!==g))}}}}}),i=n.getState();let r=i.size,s=i.viewport.dpr,l=i.camera;return n.subscribe(()=>{const{camera:u,size:f,viewport:d,gl:h,set:m}=n.getState();if(f.width!==r.width||f.height!==r.height||d.dpr!==s){var v;r=f,s=d.dpr,xN(u,f),h.setPixelRatio(d.dpr);const _=(v=f.updateStyle)!=null?v:typeof HTMLCanvasElement<"u"&&h.domElement instanceof HTMLCanvasElement;h.setSize(f.width,f.height,_)}u!==l&&(l=u,m(_=>({viewport:{..._.viewport,..._.viewport.getCurrentViewport(u)}})))}),n.subscribe(u=>t(u)),n};let Ef,wN=new Set,AN=new Set,CN=new Set;function hm(t,e){if(t.size)for(const{callback:n}of t.values())n(e)}function Ol(t,e){switch(t){case"before":return hm(wN,e);case"after":return hm(AN,e);case"tail":return hm(CN,e)}}let pm,mm;function gm(t,e,n){let i=e.clock.getDelta();for(e.frameloop==="never"&&typeof t=="number"&&(i=t-e.clock.elapsedTime,e.clock.oldTime=e.clock.elapsedTime,e.clock.elapsedTime=t),pm=e.internal.subscribers,Ef=0;Ef<pm.length;Ef++)mm=pm[Ef],mm.ref.current(mm.store.getState(),i,n);return!e.internal.priority&&e.gl.render&&e.gl.render(e.scene,e.camera),e.internal.frames=Math.max(0,e.internal.frames-1),e.frameloop==="always"?1:e.internal.frames}function RN(t){let e=!1,n=!1,i,r,s;function l(d){r=requestAnimationFrame(l),e=!0,i=0,Ol("before",d),n=!0;for(const m of t.values()){var h;s=m.store.getState(),s.internal.active&&(s.frameloop==="always"||s.internal.frames>0)&&!((h=s.gl.xr)!=null&&h.isPresenting)&&(i+=gm(d,s))}if(n=!1,Ol("after",d),i===0)return Ol("tail",d),e=!1,cancelAnimationFrame(r)}function u(d,h=1){var m;if(!d)return t.forEach(v=>u(v.store.getState(),h));(m=d.gl.xr)!=null&&m.isPresenting||!d.internal.active||d.frameloop==="never"||(h>1?d.internal.frames=Math.min(60,d.internal.frames+h):n?d.internal.frames=2:d.internal.frames=1,e||(e=!0,requestAnimationFrame(l)))}function f(d,h=!0,m,v){if(h&&Ol("before",d),m)gm(d,m,v);else for(const _ of t.values())gm(d,_.store.getState());h&&Ol("after",d)}return{loop:l,invalidate:u,advance:f}}function b1(){const t=We.useContext(U1);if(!t)throw new Error("R3F: Hooks can only be used within the Canvas component!");return t}function Xd(t=n=>n,e){return b1()(t,e)}function y0(t,e=0){const n=b1(),i=n.getState().internal.subscribe,r=pN(t);return _0(()=>i(r,e,n),[e,i,n]),null}const _S=new WeakMap;function F1(t,e){return function(n,...i){let r=_S.get(n);return r||(r=new n,_S.set(n,r)),t&&t(r),Promise.all(i.map(s=>new Promise((l,u)=>r.load(s,f=>{f.scene&&Object.assign(f,vN(f.scene)),l(f)},e,f=>u(new Error(`Could not load ${s}: ${f==null?void 0:f.message}`))))))}}function bu(t,e,n,i){const r=Array.isArray(e)?e:[e],s=aN(F1(n,i),[t,...r],{equal:Wt.equ});return Array.isArray(e)?s:s[0]}bu.preload=function(t,e,n){const i=Array.isArray(e)?e:[e];return lN(F1(n),[t,...i])};bu.clear=function(t,e){const n=Array.isArray(e)?e:[e];return uN([t,...n])};const $a=new Map,{invalidate:yS,advance:xS}=RN($a),{reconciler:Sd,applyProps:la}=hN($a,SN),ua={objects:"shallow",strict:!1},PN=(t,e)=>{const n=typeof t=="function"?t(e):t;return I1(n)?n:new nN({powerPreference:"high-performance",canvas:e,antialias:!0,alpha:!0,...t})};function DN(t,e){const n=typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement;if(e){const{width:i,height:r,top:s,left:l,updateStyle:u=n}=e;return{width:i,height:r,top:s,left:l,updateStyle:u}}else if(typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement&&t.parentElement){const{width:i,height:r,top:s,left:l}=t.parentElement.getBoundingClientRect();return{width:i,height:r,top:s,left:l,updateStyle:n}}else if(typeof OffscreenCanvas<"u"&&t instanceof OffscreenCanvas)return{width:t.width,height:t.height,top:0,left:0,updateStyle:n};return{width:0,height:0,top:0,left:0}}function LN(t){const e=$a.get(t),n=e==null?void 0:e.fiber,i=e==null?void 0:e.store;e&&console.warn("R3F.createRoot should only be called once!");const r=typeof reportError=="function"?reportError:console.error,s=i||TN(yS,xS),l=n||Sd.createContainer(s,Ca.ConcurrentRoot,null,!1,null,"",r,null);e||$a.set(t,{fiber:l,store:s});let u,f=!1,d;return{configure(h={}){let{gl:m,size:v,scene:_,events:x,onCreated:w,shadows:E=!1,linear:g=!1,flat:S=!1,legacy:M=!1,orthographic:A=!1,frameloop:I="always",dpr:N=[1,2],performance:L,raycaster:O,camera:P,onPointerMissed:C}=h,U=s.getState(),K=U.gl;U.gl||U.set({gl:K=PN(m,t)});let Y=U.raycaster;Y||U.set({raycaster:Y=new y2});const{params:se,...le}=O||{};if(Wt.equ(le,Y,ua)||la(Y,{...le}),Wt.equ(se,Y.params,ua)||la(Y,{params:{...Y.params,...se}}),!U.camera||U.camera===d&&!Wt.equ(d,P,ua)){d=P;const q=P instanceof Vd,oe=q?P:A?new m1(0,0,0,0,.1,1e3):new fi(75,0,.1,1e3);q||(oe.position.z=5,P&&(la(oe,P),("aspect"in P||"left"in P||"right"in P||"bottom"in P||"top"in P)&&(oe.manual=!0,oe.updateProjectionMatrix())),!U.camera&&!(P!=null&&P.rotation)&&oe.lookAt(0,0,0)),U.set({camera:oe}),Y.camera=oe}if(!U.scene){let q;_!=null&&_.isScene?q=_:(q=new Jg,_&&la(q,_)),U.set({scene:da(q)})}if(!U.xr){var ie;const q=(qe,te)=>{const pe=s.getState();pe.frameloop!=="never"&&xS(qe,!0,pe,te)},oe=()=>{const qe=s.getState();qe.gl.xr.enabled=qe.gl.xr.isPresenting,qe.gl.xr.setAnimationLoop(qe.gl.xr.isPresenting?q:null),qe.gl.xr.isPresenting||yS(qe)},ye={connect(){const qe=s.getState().gl;qe.xr.addEventListener("sessionstart",oe),qe.xr.addEventListener("sessionend",oe)},disconnect(){const qe=s.getState().gl;qe.xr.removeEventListener("sessionstart",oe),qe.xr.removeEventListener("sessionend",oe)}};typeof((ie=K.xr)==null?void 0:ie.addEventListener)=="function"&&ye.connect(),U.set({xr:ye})}if(K.shadowMap){const q=K.shadowMap.enabled,oe=K.shadowMap.type;if(K.shadowMap.enabled=!!E,Wt.boo(E))K.shadowMap.type=Of;else if(Wt.str(E)){var ce;const ye={basic:LC,percentage:i0,soft:Of,variance:Er};K.shadowMap.type=(ce=ye[E])!=null?ce:Of}else Wt.obj(E)&&Object.assign(K.shadowMap,E);(q!==K.shadowMap.enabled||oe!==K.shadowMap.type)&&(K.shadowMap.needsUpdate=!0)}const b=C1();b&&("enabled"in b?b.enabled=!M:"legacyMode"in b&&(b.legacyMode=M)),f||la(K,{outputEncoding:g?3e3:3001,toneMapping:S?Pr:YM}),U.legacy!==M&&U.set(()=>({legacy:M})),U.linear!==g&&U.set(()=>({linear:g})),U.flat!==S&&U.set(()=>({flat:S})),m&&!Wt.fun(m)&&!I1(m)&&!Wt.equ(m,K,ua)&&la(K,m),x&&!U.events.handlers&&U.set({events:x(s)});const j=DN(t,v);return Wt.equ(j,U.size,ua)||U.setSize(j.width,j.height,j.updateStyle,j.top,j.left),N&&U.viewport.dpr!==D1(N)&&U.setDpr(N),U.frameloop!==I&&U.setFrameloop(I),U.onPointerMissed||U.set({onPointerMissed:C}),L&&!Wt.equ(L,U.performance,ua)&&U.set(q=>({performance:{...q.performance,...L}})),u=w,f=!0,this},render(h){return f||this.configure(),Sd.updateContainer(tt.jsx(NN,{store:s,children:h,onCreated:u,rootElement:t}),l,null,()=>{}),s},unmount(){IN(t)}}}function NN({store:t,children:e,onCreated:n,rootElement:i}){return _0(()=>{const r=t.getState();r.set(s=>({internal:{...s.internal,active:!0}})),n&&n(r),t.getState().events.connected||r.events.connect==null||r.events.connect(i)},[]),tt.jsx(U1.Provider,{value:t,children:e})}function IN(t,e){const n=$a.get(t),i=n==null?void 0:n.fiber;if(i){const r=n==null?void 0:n.store.getState();r&&(r.internal.active=!1),Sd.updateContainer(null,i,null,()=>{r&&setTimeout(()=>{try{var s,l,u,f;r.events.disconnect==null||r.events.disconnect(),(s=r.gl)==null||(l=s.renderLists)==null||l.dispose==null||l.dispose(),(u=r.gl)==null||u.forceContextLoss==null||u.forceContextLoss(),(f=r.gl)!=null&&f.xr&&r.xr.disconnect(),_N(r),$a.delete(t),e&&e(t)}catch{}},500)})}}Sd.injectIntoDevTools({bundleType:0,rendererPackageName:"@react-three/fiber",version:We.version});const vm={onClick:["click",!1],onContextMenu:["contextmenu",!1],onDoubleClick:["dblclick",!1],onWheel:["wheel",!0],onPointerDown:["pointerdown",!0],onPointerUp:["pointerup",!0],onPointerLeave:["pointerleave",!0],onPointerMove:["pointermove",!0],onPointerCancel:["pointercancel",!0],onLostPointerCapture:["lostpointercapture",!0]};function UN(t){const{handlePointer:e}=MN(t);return{priority:1,enabled:!0,compute(n,i,r){i.pointer.set(n.offsetX/i.size.width*2-1,-(n.offsetY/i.size.height)*2+1),i.raycaster.setFromCamera(i.pointer,i.camera)},connected:void 0,handlers:Object.keys(vm).reduce((n,i)=>({...n,[i]:e(i)}),{}),update:()=>{var n;const{events:i,internal:r}=t.getState();(n=r.lastEvent)!=null&&n.current&&i.handlers&&i.handlers.onPointerMove(r.lastEvent.current)},connect:n=>{var i;const{set:r,events:s}=t.getState();s.disconnect==null||s.disconnect(),r(l=>({events:{...l.events,connected:n}})),Object.entries((i=s.handlers)!=null?i:[]).forEach(([l,u])=>{const[f,d]=vm[l];n.addEventListener(f,u,{passive:d})})},disconnect:()=>{const{set:n,events:i}=t.getState();if(i.connected){var r;Object.entries((r=i.handlers)!=null?r:[]).forEach(([s,l])=>{if(i&&i.connected instanceof HTMLElement){const[u]=vm[s];i.connected.removeEventListener(u,l)}}),n(s=>({events:{...s.events,connected:void 0}}))}}}}function sv(){return sv=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)({}).hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},sv.apply(null,arguments)}let kl;function bN(){var t;if(kl!==void 0)return kl;try{let e;const n=document.createElement("canvas");return kl=!!(window.WebGL2RenderingContext&&(e=n.getContext("webgl2"))),e&&((t=e.getExtension("WEBGL_lose_context"))==null||t.loseContext()),kl}catch{return kl=!1}}function FN(t,e,n,i){const r=class extends Pn{constructor(l={}){const u=Object.entries(t);super({uniforms:u.reduce((f,[d,h])=>{const m=d1.clone({[d]:{value:h}});return{...f,...m}},{}),vertexShader:e,fragmentShader:n}),this.key="",u.forEach(([f])=>Object.defineProperty(this,f,{get:()=>this.uniforms[f].value,set:d=>this.uniforms[f].value=d})),Object.assign(this,l),i&&i(this)}};return r.key=Gf.generateUUID(),r}const _m=t=>t===Object(t)&&!Array.isArray(t)&&typeof t!="function";function x0(t,e){const n=Xd(s=>s.gl),i=bu(m0,_m(t)?Object.values(t):t);return We.useLayoutEffect(()=>{e==null||e(i)},[e]),We.useEffect(()=>{if("initTexture"in n){let s=[];Array.isArray(i)?s=i:i instanceof vn?s=[i]:_m(i)&&(s=Object.values(i)),s.forEach(l=>{l instanceof vn&&n.initTexture(l)})}},[n,i]),We.useMemo(()=>{if(_m(t)){const s={};let l=0;for(const u in t)s[u]=i[l++];return s}else return i},[t,i])}x0.preload=t=>bu.preload(m0,t);x0.clear=t=>bu.clear(m0,t);var ON=Object.defineProperty,kN=(t,e,n)=>e in t?ON(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Ft=(t,e,n)=>(kN(t,typeof e!="symbol"?e+"":e,n),n);function ym(t,e,n,i,r){let s;if(t=t.subarray||t.slice?t:t.buffer,n=n.subarray||n.slice?n:n.buffer,t=e?t.subarray?t.subarray(e,r&&e+r):t.slice(e,r&&e+r):t,n.set)n.set(t,i);else for(s=0;s<t.length;s++)n[s+i]=t[s];return n}function zN(t){return t instanceof Float32Array?t:t instanceof fr?t.getAttribute("position").array:t.map(e=>{const n=Array.isArray(e);return e instanceof X?[e.x,e.y,e.z]:e instanceof nt?[e.x,e.y,0]:n&&e.length===3?[e[0],e[1],e[2]]:n&&e.length===2?[e[0],e[1],0]:e}).flat()}class BN extends fr{constructor(){super(),Ft(this,"type","MeshLine"),Ft(this,"isMeshLine",!0),Ft(this,"positions",[]),Ft(this,"previous",[]),Ft(this,"next",[]),Ft(this,"side",[]),Ft(this,"width",[]),Ft(this,"indices_array",[]),Ft(this,"uvs",[]),Ft(this,"counters",[]),Ft(this,"widthCallback",null),Ft(this,"_attributes"),Ft(this,"_points",[]),Ft(this,"points"),Ft(this,"matrixWorld",new qt),Object.defineProperties(this,{points:{enumerable:!0,get(){return this._points},set(e){this.setPoints(e,this.widthCallback)}}})}setMatrixWorld(e){this.matrixWorld=e}setPoints(e,n){if(e=zN(e),this._points=e,this.widthCallback=n??null,this.positions=[],this.counters=[],e.length&&e[0]instanceof X)for(let i=0;i<e.length;i++){const r=e[i],s=i/(e.length-1);this.positions.push(r.x,r.y,r.z),this.positions.push(r.x,r.y,r.z),this.counters.push(s),this.counters.push(s)}else for(let i=0;i<e.length;i+=3){const r=i/(e.length-1);this.positions.push(e[i],e[i+1],e[i+2]),this.positions.push(e[i],e[i+1],e[i+2]),this.counters.push(r),this.counters.push(r)}this.process()}compareV3(e,n){const i=e*6,r=n*6;return this.positions[i]===this.positions[r]&&this.positions[i+1]===this.positions[r+1]&&this.positions[i+2]===this.positions[r+2]}copyV3(e){const n=e*6;return[this.positions[n],this.positions[n+1],this.positions[n+2]]}process(){const e=this.positions.length/6;this.previous=[],this.next=[],this.side=[],this.width=[],this.indices_array=[],this.uvs=[];let n,i;this.compareV3(0,e-1)?i=this.copyV3(e-2):i=this.copyV3(0),this.previous.push(i[0],i[1],i[2]),this.previous.push(i[0],i[1],i[2]);for(let r=0;r<e;r++){if(this.side.push(1),this.side.push(-1),this.widthCallback?n=this.widthCallback(r/(e-1)):n=1,this.width.push(n),this.width.push(n),this.uvs.push(r/(e-1),0),this.uvs.push(r/(e-1),1),r<e-1){i=this.copyV3(r),this.previous.push(i[0],i[1],i[2]),this.previous.push(i[0],i[1],i[2]);const s=r*2;this.indices_array.push(s,s+1,s+2),this.indices_array.push(s+2,s+1,s+3)}r>0&&(i=this.copyV3(r),this.next.push(i[0],i[1],i[2]),this.next.push(i[0],i[1],i[2]))}this.compareV3(e-1,0)?i=this.copyV3(1):i=this.copyV3(e-1),this.next.push(i[0],i[1],i[2]),this.next.push(i[0],i[1],i[2]),!this._attributes||this._attributes.position.count!==this.counters.length?this._attributes={position:new fn(new Float32Array(this.positions),3),previous:new fn(new Float32Array(this.previous),3),next:new fn(new Float32Array(this.next),3),side:new fn(new Float32Array(this.side),1),width:new fn(new Float32Array(this.width),1),uv:new fn(new Float32Array(this.uvs),2),index:new fn(new Uint16Array(this.indices_array),1),counters:new fn(new Float32Array(this.counters),1)}:(this._attributes.position.copyArray(new Float32Array(this.positions)),this._attributes.position.needsUpdate=!0,this._attributes.previous.copyArray(new Float32Array(this.previous)),this._attributes.previous.needsUpdate=!0,this._attributes.next.copyArray(new Float32Array(this.next)),this._attributes.next.needsUpdate=!0,this._attributes.side.copyArray(new Float32Array(this.side)),this._attributes.side.needsUpdate=!0,this._attributes.width.copyArray(new Float32Array(this.width)),this._attributes.width.needsUpdate=!0,this._attributes.uv.copyArray(new Float32Array(this.uvs)),this._attributes.uv.needsUpdate=!0,this._attributes.index.copyArray(new Uint16Array(this.indices_array)),this._attributes.index.needsUpdate=!0),this.setAttribute("position",this._attributes.position),this.setAttribute("previous",this._attributes.previous),this.setAttribute("next",this._attributes.next),this.setAttribute("side",this._attributes.side),this.setAttribute("width",this._attributes.width),this.setAttribute("uv",this._attributes.uv),this.setAttribute("counters",this._attributes.counters),this.setAttribute("position",this._attributes.position),this.setAttribute("previous",this._attributes.previous),this.setAttribute("next",this._attributes.next),this.setAttribute("side",this._attributes.side),this.setAttribute("width",this._attributes.width),this.setAttribute("uv",this._attributes.uv),this.setAttribute("counters",this._attributes.counters),this.setIndex(this._attributes.index),this.computeBoundingSphere(),this.computeBoundingBox()}advance({x:e,y:n,z:i}){const r=this._attributes.position.array,s=this._attributes.previous.array,l=this._attributes.next.array,u=r.length;ym(r,0,s,0,u),ym(r,6,r,0,u-6),r[u-6]=e,r[u-5]=n,r[u-4]=i,r[u-3]=e,r[u-2]=n,r[u-1]=i,ym(r,6,l,0,u-6),l[u-6]=e,l[u-5]=n,l[u-4]=i,l[u-3]=e,l[u-2]=n,l[u-1]=i,this._attributes.position.needsUpdate=!0,this._attributes.previous.needsUpdate=!0,this._attributes.next.needsUpdate=!0}}const HN=`
  #include <common>
  #include <logdepthbuf_pars_vertex>
  #include <fog_pars_vertex>
  #include <clipping_planes_pars_vertex>

  attribute vec3 previous;
  attribute vec3 next;
  attribute float side;
  attribute float width;
  attribute float counters;
  
  uniform vec2 resolution;
  uniform float lineWidth;
  uniform vec3 color;
  uniform float opacity;
  uniform float sizeAttenuation;
  
  varying vec2 vUV;
  varying vec4 vColor;
  varying float vCounters;
  
  vec2 fix(vec4 i, float aspect) {
    vec2 res = i.xy / i.w;
    res.x *= aspect;
    return res;
  }
  
  void main() {
    float aspect = resolution.x / resolution.y;
    vColor = vec4(color, opacity);
    vUV = uv;
    vCounters = counters;
  
    mat4 m = projectionMatrix * modelViewMatrix;
    vec4 finalPosition = m * vec4(position, 1.0) * aspect;
    vec4 prevPos = m * vec4(previous, 1.0);
    vec4 nextPos = m * vec4(next, 1.0);
  
    vec2 currentP = fix(finalPosition, aspect);
    vec2 prevP = fix(prevPos, aspect);
    vec2 nextP = fix(nextPos, aspect);
  
    float w = lineWidth * width;
  
    vec2 dir;
    if (nextP == currentP) dir = normalize(currentP - prevP);
    else if (prevP == currentP) dir = normalize(nextP - currentP);
    else {
      vec2 dir1 = normalize(currentP - prevP);
      vec2 dir2 = normalize(nextP - currentP);
      dir = normalize(dir1 + dir2);
  
      vec2 perp = vec2(-dir1.y, dir1.x);
      vec2 miter = vec2(-dir.y, dir.x);
      //w = clamp(w / dot(miter, perp), 0., 4. * lineWidth * width);
    }
  
    //vec2 normal = (cross(vec3(dir, 0.), vec3(0., 0., 1.))).xy;
    vec4 normal = vec4(-dir.y, dir.x, 0., 1.);
    normal.xy *= .5 * w;
    //normal *= projectionMatrix;
    if (sizeAttenuation == 0.) {
      normal.xy *= finalPosition.w;
      normal.xy /= (vec4(resolution, 0., 1.) * projectionMatrix).xy * aspect;
    }
  
    finalPosition.xy += normal.xy * side;
    gl_Position = finalPosition;
    #include <logdepthbuf_vertex>
    #include <fog_vertex>
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    #include <clipping_planes_vertex>
    #include <fog_vertex>
  }
`,VN=(()=>parseInt(Pu.replace(/\D+/g,"")))(),GN=VN>=154?"colorspace_fragment":"encodings_fragment",WN=`
  #include <fog_pars_fragment>
  #include <logdepthbuf_pars_fragment>
  #include <clipping_planes_pars_fragment>
  
  uniform sampler2D map;
  uniform sampler2D alphaMap;
  uniform float useGradient;
  uniform float useMap;
  uniform float useAlphaMap;
  uniform float useDash;
  uniform float dashArray;
  uniform float dashOffset;
  uniform float dashRatio;
  uniform float visibility;
  uniform float alphaTest;
  uniform vec2 repeat;
  uniform vec3 gradient[2];
  
  varying vec2 vUV;
  varying vec4 vColor;
  varying float vCounters;
  
  void main() {
    #include <logdepthbuf_fragment>
    vec4 diffuseColor = vColor;
    if (useGradient == 1.) diffuseColor = vec4(mix(gradient[0], gradient[1], vCounters), 1.0);
    if (useMap == 1.) diffuseColor *= texture2D(map, vUV * repeat);
    if (useAlphaMap == 1.) diffuseColor.a *= texture2D(alphaMap, vUV * repeat).a;
    if (diffuseColor.a < alphaTest) discard;
    if (useDash == 1.) diffuseColor.a *= ceil(mod(vCounters + dashOffset, dashArray) - (dashArray * dashRatio));
    diffuseColor.a *= step(vCounters, visibility);
    #include <clipping_planes_fragment>
    gl_FragColor = diffuseColor;     
    #include <fog_fragment>
    #include <tonemapping_fragment>
    #include <${GN}>
  }
`;class XN extends Pn{constructor(e){super({uniforms:{...we.fog,lineWidth:{value:1},map:{value:null},useMap:{value:0},alphaMap:{value:null},useAlphaMap:{value:0},color:{value:new Ct(16777215)},gradient:{value:[new Ct(16711680),new Ct(65280)]},opacity:{value:1},resolution:{value:new nt(1,1)},sizeAttenuation:{value:1},dashArray:{value:0},dashOffset:{value:0},dashRatio:{value:.5},useDash:{value:0},useGradient:{value:0},visibility:{value:1},alphaTest:{value:0},repeat:{value:new nt(1,1)}},vertexShader:HN,fragmentShader:WN}),Ft(this,"lineWidth"),Ft(this,"map"),Ft(this,"useMap"),Ft(this,"alphaMap"),Ft(this,"useAlphaMap"),Ft(this,"color"),Ft(this,"gradient"),Ft(this,"resolution"),Ft(this,"sizeAttenuation"),Ft(this,"dashArray"),Ft(this,"dashOffset"),Ft(this,"dashRatio"),Ft(this,"useDash"),Ft(this,"useGradient"),Ft(this,"visibility"),Ft(this,"repeat"),this.type="MeshLineMaterial",Object.defineProperties(this,{lineWidth:{enumerable:!0,get(){return this.uniforms.lineWidth.value},set(n){this.uniforms.lineWidth.value=n}},map:{enumerable:!0,get(){return this.uniforms.map.value},set(n){this.uniforms.map.value=n}},useMap:{enumerable:!0,get(){return this.uniforms.useMap.value},set(n){this.uniforms.useMap.value=n}},alphaMap:{enumerable:!0,get(){return this.uniforms.alphaMap.value},set(n){this.uniforms.alphaMap.value=n}},useAlphaMap:{enumerable:!0,get(){return this.uniforms.useAlphaMap.value},set(n){this.uniforms.useAlphaMap.value=n}},color:{enumerable:!0,get(){return this.uniforms.color.value},set(n){this.uniforms.color.value=n}},gradient:{enumerable:!0,get(){return this.uniforms.gradient.value},set(n){this.uniforms.gradient.value=n}},opacity:{enumerable:!0,get(){return this.uniforms.opacity.value},set(n){this.uniforms.opacity.value=n}},resolution:{enumerable:!0,get(){return this.uniforms.resolution.value},set(n){this.uniforms.resolution.value.copy(n)}},sizeAttenuation:{enumerable:!0,get(){return this.uniforms.sizeAttenuation.value},set(n){this.uniforms.sizeAttenuation.value=n}},dashArray:{enumerable:!0,get(){return this.uniforms.dashArray.value},set(n){this.uniforms.dashArray.value=n,this.useDash=n!==0?1:0}},dashOffset:{enumerable:!0,get(){return this.uniforms.dashOffset.value},set(n){this.uniforms.dashOffset.value=n}},dashRatio:{enumerable:!0,get(){return this.uniforms.dashRatio.value},set(n){this.uniforms.dashRatio.value=n}},useDash:{enumerable:!0,get(){return this.uniforms.useDash.value},set(n){this.uniforms.useDash.value=n}},useGradient:{enumerable:!0,get(){return this.uniforms.useGradient.value},set(n){this.uniforms.useGradient.value=n}},visibility:{enumerable:!0,get(){return this.uniforms.visibility.value},set(n){this.uniforms.visibility.value=n}},alphaTest:{enumerable:!0,get(){return this.uniforms.alphaTest.value},set(n){this.uniforms.alphaTest.value=n}},repeat:{enumerable:!0,get(){return this.uniforms.repeat.value},set(n){this.uniforms.repeat.value.copy(n)}}}),this.setValues(e)}copy(e){return super.copy(e),this.lineWidth=e.lineWidth,this.map=e.map,this.useMap=e.useMap,this.alphaMap=e.alphaMap,this.useAlphaMap=e.useAlphaMap,this.color.copy(e.color),this.gradient=e.gradient,this.opacity=e.opacity,this.resolution.copy(e.resolution),this.sizeAttenuation=e.sizeAttenuation,this.dashArray=e.dashArray,this.dashOffset=e.dashOffset,this.dashRatio=e.dashRatio,this.useDash=e.useDash,this.useGradient=e.useGradient,this.visibility=e.visibility,this.alphaTest=e.alphaTest,this.repeat.copy(e.repeat),this}}function jN(t,e){const n=new qt,i=new Hd,r=new Nu,s=new X,l=this.geometry;if(r.copy(l.boundingSphere),r.applyMatrix4(this.matrixWorld),!t.ray.intersectSphere(r,s))return;n.copy(this.matrixWorld).invert(),i.copy(t.ray).applyMatrix4(n);const u=new X,f=new X,d=new X,h=this instanceof l2?2:1,m=l.index,v=l.attributes;if(m!==null){const _=m.array,x=v.position.array,w=v.width.array;for(let E=0,g=_.length-1;E<g;E+=h){const S=_[E],M=_[E+1];u.fromArray(x,S*3),f.fromArray(x,M*3);const A=w[Math.floor(E/3)]!=null?w[Math.floor(E/3)]:1,I=t.params.Line.threshold+this.material.lineWidth*A/2,N=I*I;if(i.distanceSqToSegment(u,f,s,d)>N)continue;s.applyMatrix4(this.matrixWorld);const O=t.ray.origin.distanceTo(s);O<t.near||O>t.far||(e.push({distance:O,point:d.clone().applyMatrix4(this.matrixWorld),index:E,face:null,faceIndex:void 0,object:this}),E=g)}}}const YN=Object.freeze(Object.defineProperty({__proto__:null,MeshLineGeometry:BN,MeshLineMaterial:XN,raycast:jN},Symbol.toStringTag,{value:"Module"}));function SS(t,e,n=1){const i=Xd(l=>l.viewport),r=e*(i.aspect>t/e?i.width/t:i.height/e);return[t*(i.aspect>t/e?i.width/t:i.height/e)*n,r*n,1]}function qN(t,e){const n=t+"Geometry";return We.forwardRef(({args:i,children:r,...s},l)=>{const u=We.useRef(null);return We.useImperativeHandle(l,()=>u.current),We.useLayoutEffect(()=>void(e==null?void 0:e(u.current))),We.createElement("mesh",sv({ref:u},s),We.createElement(n,{attach:"geometry",args:i}),r)})}const KN=qN("plane");/**
 * postprocessing v6.37.6 build Fri Jul 04 2025
 * https://github.com/pmndrs/postprocessing
 * Copyright 2015-2025 Raoul van Rüschen
 * @license Zlib
 */var xm=1/1e3,QN=1e3,ZN=class{constructor(){this.startTime=performance.now(),this.previousTime=0,this.currentTime=0,this._delta=0,this._elapsed=0,this._fixedDelta=1e3/60,this.timescale=1,this.useFixedDelta=!1,this._autoReset=!1}get autoReset(){return this._autoReset}set autoReset(t){typeof document<"u"&&document.hidden!==void 0&&(t?document.addEventListener("visibilitychange",this):document.removeEventListener("visibilitychange",this),this._autoReset=t)}get delta(){return this._delta*xm}get fixedDelta(){return this._fixedDelta*xm}set fixedDelta(t){this._fixedDelta=t*QN}get elapsed(){return this._elapsed*xm}update(t){this.useFixedDelta?this._delta=this.fixedDelta:(this.previousTime=this.currentTime,this.currentTime=(t!==void 0?t:performance.now())-this.startTime,this._delta=this.currentTime-this.previousTime),this._delta*=this.timescale,this._elapsed+=this._delta}reset(){this._delta=0,this._elapsed=0,this.currentTime=performance.now()-this.startTime}getDelta(){return this.delta}getElapsed(){return this.elapsed}handleEvent(t){document.hidden||(this.currentTime=performance.now()-this.startTime)}dispose(){this.autoReset=!1}},$N=(()=>{const t=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),e=new Float32Array([0,0,2,0,0,2]),n=new fr;return n.setAttribute("position",new fn(t,3)),n.setAttribute("uv",new fn(e,2)),n})(),Ii=class ov{static get fullscreenGeometry(){return $N}constructor(e="Pass",n=new Jg,i=new Vd){this.name=e,this.renderer=null,this.scene=n,this.camera=i,this.screen=null,this.rtt=!0,this.needsSwap=!0,this.needsDepthTexture=!1,this.enabled=!0}get renderToScreen(){return!this.rtt}set renderToScreen(e){if(this.rtt===e){const n=this.fullscreenMaterial;n!==null&&(n.needsUpdate=!0),this.rtt=!e}}set mainScene(e){}set mainCamera(e){}setRenderer(e){this.renderer=e}isEnabled(){return this.enabled}setEnabled(e){this.enabled=e}get fullscreenMaterial(){return this.screen!==null?this.screen.material:null}set fullscreenMaterial(e){let n=this.screen;n!==null?n.material=e:(n=new ar(ov.fullscreenGeometry,e),n.frustumCulled=!1,this.scene===null&&(this.scene=new Jg),this.scene.add(n),this.screen=n)}getFullscreenMaterial(){return this.fullscreenMaterial}setFullscreenMaterial(e){this.fullscreenMaterial=e}getDepthTexture(){return null}setDepthTexture(e,n=rs){}render(e,n,i,r,s){throw new Error("Render method not implemented!")}setSize(e,n){}initialize(e,n,i){}dispose(){for(const e of Object.keys(this)){const n=this[e];(n instanceof ti||n instanceof js||n instanceof vn||n instanceof ov)&&this[e].dispose()}this.fullscreenMaterial!==null&&this.fullscreenMaterial.dispose()}},JN=class extends Ii{constructor(){super("ClearMaskPass",null,null),this.needsSwap=!1}render(t,e,n,i,r){const s=t.state.buffers.stencil;s.setLocked(!1),s.setTest(!1)}},eI=`#include <common>
#include <dithering_pars_fragment>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
uniform float opacity;varying vec2 vUv;void main(){vec4 texel=texture2D(inputBuffer,vUv);gl_FragColor=opacity*texel;
#include <colorspace_fragment>
#include <dithering_fragment>
}`,jd="varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}",O1=class extends Pn{constructor(){super({name:"CopyMaterial",uniforms:{inputBuffer:new ct(null),opacity:new ct(1)},blending:Jn,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:eI,vertexShader:jd})}set inputBuffer(t){this.uniforms.inputBuffer.value=t}setInputBuffer(t){this.uniforms.inputBuffer.value=t}getOpacity(t){return this.uniforms.opacity.value}setOpacity(t){this.uniforms.opacity.value=t}},tI=class extends Ii{constructor(t,e=!0){super("CopyPass"),this.fullscreenMaterial=new O1,this.needsSwap=!1,this.renderTarget=t,t===void 0&&(this.renderTarget=new ti(1,1,{minFilter:hi,magFilter:hi,stencilBuffer:!1,depthBuffer:!1}),this.renderTarget.texture.name="CopyPass.Target"),this.autoResize=e}get resize(){return this.autoResize}set resize(t){this.autoResize=t}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}setAutoResizeEnabled(t){this.autoResize=t}render(t,e,n,i,r){this.fullscreenMaterial.inputBuffer=e.texture,t.setRenderTarget(this.renderToScreen?null:this.renderTarget),t.render(this.scene,this.camera)}setSize(t,e){this.autoResize&&this.renderTarget.setSize(t,e)}initialize(t,e,n){n!==void 0&&(this.renderTarget.texture.type=n,n!==Rn?this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1":t!==null&&t.outputColorSpace===Ot&&(this.renderTarget.texture.colorSpace=Ot))}},ES=new Ct,k1=class extends Ii{constructor(t=!0,e=!0,n=!1){super("ClearPass",null,null),this.needsSwap=!1,this.color=t,this.depth=e,this.stencil=n,this.overrideClearColor=null,this.overrideClearAlpha=-1}setClearFlags(t,e,n){this.color=t,this.depth=e,this.stencil=n}getOverrideClearColor(){return this.overrideClearColor}setOverrideClearColor(t){this.overrideClearColor=t}getOverrideClearAlpha(){return this.overrideClearAlpha}setOverrideClearAlpha(t){this.overrideClearAlpha=t}render(t,e,n,i,r){const s=this.overrideClearColor,l=this.overrideClearAlpha,u=t.getClearAlpha(),f=s!==null,d=l>=0;f?(t.getClearColor(ES),t.setClearColor(s,d?l:u)):d&&t.setClearAlpha(l),t.setRenderTarget(this.renderToScreen?null:e),t.clear(this.color,this.depth,this.stencil),f?t.setClearColor(ES,u):d&&t.setClearAlpha(u)}},nI=class extends Ii{constructor(t,e){super("MaskPass",t,e),this.needsSwap=!1,this.clearPass=new k1(!1,!1,!0),this.inverse=!1}set mainScene(t){this.scene=t}set mainCamera(t){this.camera=t}get inverted(){return this.inverse}set inverted(t){this.inverse=t}get clear(){return this.clearPass.enabled}set clear(t){this.clearPass.enabled=t}getClearPass(){return this.clearPass}isInverted(){return this.inverted}setInverted(t){this.inverted=t}render(t,e,n,i,r){const s=t.getContext(),l=t.state.buffers,u=this.scene,f=this.camera,d=this.clearPass,h=this.inverted?0:1,m=1-h;l.color.setMask(!1),l.depth.setMask(!1),l.color.setLocked(!0),l.depth.setLocked(!0),l.stencil.setTest(!0),l.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),l.stencil.setFunc(s.ALWAYS,h,4294967295),l.stencil.setClear(m),l.stencil.setLocked(!0),this.clearPass.enabled&&(this.renderToScreen?d.render(t,null):(d.render(t,e),d.render(t,n))),this.renderToScreen?(t.setRenderTarget(null),t.render(u,f)):(t.setRenderTarget(e),t.render(u,f),t.setRenderTarget(n),t.render(u,f)),l.color.setLocked(!1),l.depth.setLocked(!1),l.stencil.setLocked(!1),l.stencil.setFunc(s.EQUAL,1,4294967295),l.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),l.stencil.setLocked(!0)}},iI=class{constructor(e=null,{depthBuffer:n=!0,stencilBuffer:i=!1,multisampling:r=0,frameBufferType:s}={}){this.renderer=null,this.inputBuffer=this.createBuffer(n,i,s,r),this.outputBuffer=this.inputBuffer.clone(),this.copyPass=new tI,this.depthTexture=null,this.passes=[],this.timer=new ZN,this.autoRenderToScreen=!0,this.setRenderer(e)}get multisampling(){return this.inputBuffer.samples||0}set multisampling(e){const n=this.inputBuffer,i=this.multisampling;i>0&&e>0?(this.inputBuffer.samples=e,this.outputBuffer.samples=e,this.inputBuffer.dispose(),this.outputBuffer.dispose()):i!==e&&(this.inputBuffer.dispose(),this.outputBuffer.dispose(),this.inputBuffer=this.createBuffer(n.depthBuffer,n.stencilBuffer,n.texture.type,e),this.inputBuffer.depthTexture=this.depthTexture,this.outputBuffer=this.inputBuffer.clone())}getTimer(){return this.timer}getRenderer(){return this.renderer}setRenderer(e){if(this.renderer=e,e!==null){const n=e.getSize(new nt),i=e.getContext().getContextAttributes().alpha,r=this.inputBuffer.texture.type;r===Rn&&e.outputColorSpace===Ot&&(this.inputBuffer.texture.colorSpace=Ot,this.outputBuffer.texture.colorSpace=Ot,this.inputBuffer.dispose(),this.outputBuffer.dispose()),e.autoClear=!1,this.setSize(n.width,n.height);for(const s of this.passes)s.initialize(e,i,r)}}replaceRenderer(e,n=!0){const i=this.renderer,r=i.domElement.parentNode;return this.setRenderer(e),n&&r!==null&&(r.removeChild(i.domElement),r.appendChild(e.domElement)),i}createDepthTexture(){const e=this.depthTexture=new d0;return this.inputBuffer.depthTexture=e,this.inputBuffer.dispose(),this.inputBuffer.stencilBuffer?(e.format=Qa,e.type=Ka):e.type=Hs,e}deleteDepthTexture(){if(this.depthTexture!==null){this.depthTexture.dispose(),this.depthTexture=null,this.inputBuffer.depthTexture=null,this.inputBuffer.dispose();for(const e of this.passes)e.setDepthTexture(null)}}createBuffer(e,n,i,r){const s=this.renderer,l=s===null?new nt:s.getDrawingBufferSize(new nt),u={minFilter:hi,magFilter:hi,stencilBuffer:n,depthBuffer:e,type:i},f=new ti(l.width,l.height,u);return r>0&&(f.ignoreDepthForMultisampleCopy=!1,f.samples=r),i===Rn&&s!==null&&s.outputColorSpace===Ot&&(f.texture.colorSpace=Ot),f.texture.name="EffectComposer.Buffer",f.texture.generateMipmaps=!1,f}setMainScene(e){for(const n of this.passes)n.mainScene=e}setMainCamera(e){for(const n of this.passes)n.mainCamera=e}addPass(e,n){const i=this.passes,r=this.renderer,s=r.getDrawingBufferSize(new nt),l=r.getContext().getContextAttributes().alpha,u=this.inputBuffer.texture.type;if(e.setRenderer(r),e.setSize(s.width,s.height),e.initialize(r,l,u),this.autoRenderToScreen&&(i.length>0&&(i[i.length-1].renderToScreen=!1),e.renderToScreen&&(this.autoRenderToScreen=!1)),n!==void 0?i.splice(n,0,e):i.push(e),this.autoRenderToScreen&&(i[i.length-1].renderToScreen=!0),e.needsDepthTexture||this.depthTexture!==null)if(this.depthTexture===null){const f=this.createDepthTexture();for(e of i)e.setDepthTexture(f)}else e.setDepthTexture(this.depthTexture)}removePass(e){const n=this.passes,i=n.indexOf(e);if(i!==-1&&n.splice(i,1).length>0){if(this.depthTexture!==null){const l=(f,d)=>f||d.needsDepthTexture;n.reduce(l,!1)||(e.getDepthTexture()===this.depthTexture&&e.setDepthTexture(null),this.deleteDepthTexture())}this.autoRenderToScreen&&i===n.length&&(e.renderToScreen=!1,n.length>0&&(n[n.length-1].renderToScreen=!0))}}removeAllPasses(){const e=this.passes;this.deleteDepthTexture(),e.length>0&&(this.autoRenderToScreen&&(e[e.length-1].renderToScreen=!1),this.passes=[])}render(e){const n=this.renderer,i=this.copyPass;let r=this.inputBuffer,s=this.outputBuffer,l=!1,u,f,d;e===void 0&&(this.timer.update(),e=this.timer.getDelta());for(const h of this.passes)h.enabled&&(h.render(n,r,s,e,l),h.needsSwap&&(l&&(i.renderToScreen=h.renderToScreen,u=n.getContext(),f=n.state.buffers.stencil,f.setFunc(u.NOTEQUAL,1,4294967295),i.render(n,r,s,e,l),f.setFunc(u.EQUAL,1,4294967295)),d=r,r=s,s=d),h instanceof nI?l=!0:h instanceof JN&&(l=!1))}setSize(e,n,i){const r=this.renderer,s=r.getSize(new nt);(e===void 0||n===void 0)&&(e=s.width,n=s.height),(s.width!==e||s.height!==n)&&r.setSize(e,n,i);const l=r.getDrawingBufferSize(new nt);this.inputBuffer.setSize(l.width,l.height),this.outputBuffer.setSize(l.width,l.height);for(const u of this.passes)u.setSize(l.width,l.height)}reset(){this.dispose(),this.autoRenderToScreen=!0}dispose(){for(const e of this.passes)e.dispose();this.passes=[],this.inputBuffer!==null&&this.inputBuffer.dispose(),this.outputBuffer!==null&&this.outputBuffer.dispose(),this.deleteDepthTexture(),this.copyPass.dispose(),this.timer.dispose(),Ii.fullscreenGeometry.dispose()}},Dr={NONE:0,DEPTH:1,CONVOLUTION:2},bt={FRAGMENT_HEAD:"FRAGMENT_HEAD",FRAGMENT_MAIN_UV:"FRAGMENT_MAIN_UV",FRAGMENT_MAIN_IMAGE:"FRAGMENT_MAIN_IMAGE",VERTEX_HEAD:"VERTEX_HEAD",VERTEX_MAIN_SUPPORT:"VERTEX_MAIN_SUPPORT"},rI=class{constructor(){this.shaderParts=new Map([[bt.FRAGMENT_HEAD,null],[bt.FRAGMENT_MAIN_UV,null],[bt.FRAGMENT_MAIN_IMAGE,null],[bt.VERTEX_HEAD,null],[bt.VERTEX_MAIN_SUPPORT,null]]),this.defines=new Map,this.uniforms=new Map,this.blendModes=new Map,this.extensions=new Set,this.attributes=Dr.NONE,this.varyings=new Set,this.uvTransformation=!1,this.readDepth=!1,this.colorSpace=Vs}},Sm=!1,MS=class{constructor(t=null){this.originalMaterials=new Map,this.material=null,this.materials=null,this.materialsBackSide=null,this.materialsDoubleSide=null,this.materialsFlatShaded=null,this.materialsFlatShadedBackSide=null,this.materialsFlatShadedDoubleSide=null,this.setMaterial(t),this.meshCount=0,this.replaceMaterial=e=>{if(e.isMesh){let n;if(e.material.flatShading)switch(e.material.side){case Ai:n=this.materialsFlatShadedDoubleSide;break;case An:n=this.materialsFlatShadedBackSide;break;default:n=this.materialsFlatShaded;break}else switch(e.material.side){case Ai:n=this.materialsDoubleSide;break;case An:n=this.materialsBackSide;break;default:n=this.materials;break}this.originalMaterials.set(e,e.material),e.isSkinnedMesh?e.material=n[2]:e.isInstancedMesh?e.material=n[1]:e.material=n[0],++this.meshCount}}}cloneMaterial(t){if(!(t instanceof Pn))return t.clone();const e=t.uniforms,n=new Map;for(const r in e){const s=e[r].value;s.isRenderTargetTexture&&(e[r].value=null,n.set(r,s))}const i=t.clone();for(const r of n)e[r[0]].value=r[1],i.uniforms[r[0]].value=r[1];return i}setMaterial(t){if(this.disposeMaterials(),this.material=t,t!==null){const e=this.materials=[this.cloneMaterial(t),this.cloneMaterial(t),this.cloneMaterial(t)];for(const n of e)n.uniforms=Object.assign({},t.uniforms),n.side=ts;e[2].skinning=!0,this.materialsBackSide=e.map(n=>{const i=this.cloneMaterial(n);return i.uniforms=Object.assign({},t.uniforms),i.side=An,i}),this.materialsDoubleSide=e.map(n=>{const i=this.cloneMaterial(n);return i.uniforms=Object.assign({},t.uniforms),i.side=Ai,i}),this.materialsFlatShaded=e.map(n=>{const i=this.cloneMaterial(n);return i.uniforms=Object.assign({},t.uniforms),i.flatShading=!0,i}),this.materialsFlatShadedBackSide=e.map(n=>{const i=this.cloneMaterial(n);return i.uniforms=Object.assign({},t.uniforms),i.flatShading=!0,i.side=An,i}),this.materialsFlatShadedDoubleSide=e.map(n=>{const i=this.cloneMaterial(n);return i.uniforms=Object.assign({},t.uniforms),i.flatShading=!0,i.side=Ai,i})}}render(t,e,n){const i=t.shadowMap.enabled;if(t.shadowMap.enabled=!1,Sm){const r=this.originalMaterials;this.meshCount=0,e.traverse(this.replaceMaterial),t.render(e,n);for(const s of r)s[0].material=s[1];this.meshCount!==r.size&&r.clear()}else{const r=e.overrideMaterial;e.overrideMaterial=this.material,t.render(e,n),e.overrideMaterial=r}t.shadowMap.enabled=i}disposeMaterials(){if(this.material!==null){const t=this.materials.concat(this.materialsBackSide).concat(this.materialsDoubleSide).concat(this.materialsFlatShaded).concat(this.materialsFlatShadedBackSide).concat(this.materialsFlatShadedDoubleSide);for(const e of t)e.dispose()}}dispose(){this.originalMaterials.clear(),this.disposeMaterials()}static get workaroundEnabled(){return Sm}static set workaroundEnabled(t){Sm=t}},Ts=-1,Ri=class extends ss{constructor(t,e=Ts,n=Ts,i=1){super(),this.resizable=t,this.baseSize=new nt(1,1),this.preferredSize=new nt(e,n),this.target=this.preferredSize,this.s=i,this.effectiveSize=new nt,this.addEventListener("change",()=>this.updateEffectiveSize()),this.updateEffectiveSize()}updateEffectiveSize(){const t=this.baseSize,e=this.preferredSize,n=this.effectiveSize,i=this.scale;e.width!==Ts?n.width=e.width:e.height!==Ts?n.width=Math.round(e.height*(t.width/Math.max(t.height,1))):n.width=Math.round(t.width*i),e.height!==Ts?n.height=e.height:e.width!==Ts?n.height=Math.round(e.width/Math.max(t.width/Math.max(t.height,1),1)):n.height=Math.round(t.height*i)}get width(){return this.effectiveSize.width}set width(t){this.preferredWidth=t}get height(){return this.effectiveSize.height}set height(t){this.preferredHeight=t}getWidth(){return this.width}getHeight(){return this.height}get scale(){return this.s}set scale(t){this.s!==t&&(this.s=t,this.preferredSize.setScalar(Ts),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getScale(){return this.scale}setScale(t){this.scale=t}get baseWidth(){return this.baseSize.width}set baseWidth(t){this.baseSize.width!==t&&(this.baseSize.width=t,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getBaseWidth(){return this.baseWidth}setBaseWidth(t){this.baseWidth=t}get baseHeight(){return this.baseSize.height}set baseHeight(t){this.baseSize.height!==t&&(this.baseSize.height=t,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getBaseHeight(){return this.baseHeight}setBaseHeight(t){this.baseHeight=t}setBaseSize(t,e){(this.baseSize.width!==t||this.baseSize.height!==e)&&(this.baseSize.set(t,e),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}get preferredWidth(){return this.preferredSize.width}set preferredWidth(t){this.preferredSize.width!==t&&(this.preferredSize.width=t,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getPreferredWidth(){return this.preferredWidth}setPreferredWidth(t){this.preferredWidth=t}get preferredHeight(){return this.preferredSize.height}set preferredHeight(t){this.preferredSize.height!==t&&(this.preferredSize.height=t,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getPreferredHeight(){return this.preferredHeight}setPreferredHeight(t){this.preferredHeight=t}setPreferredSize(t,e){(this.preferredSize.width!==t||this.preferredSize.height!==e)&&(this.preferredSize.set(t,e),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}copy(t){this.s=t.scale,this.baseSize.set(t.baseWidth,t.baseHeight),this.preferredSize.set(t.preferredWidth,t.preferredHeight),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height)}static get AUTO_SIZE(){return Ts}},wt={SKIP:9,SET:30,ADD:0,ALPHA:1,AVERAGE:2,COLOR:3,COLOR_BURN:4,COLOR_DODGE:5,DARKEN:6,DIFFERENCE:7,DIVIDE:8,DST:9,EXCLUSION:10,HARD_LIGHT:11,HARD_MIX:12,HUE:13,INVERT:14,INVERT_RGB:15,LIGHTEN:16,LINEAR_BURN:17,LINEAR_DODGE:18,LINEAR_LIGHT:19,LUMINOSITY:20,MULTIPLY:21,NEGATION:22,NORMAL:23,OVERLAY:24,PIN_LIGHT:25,REFLECT:26,SATURATION:27,SCREEN:28,SOFT_LIGHT:29,SRC:30,SUBTRACT:31,VIVID_LIGHT:32},sI="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(x.rgb+y.rgb,y.a),opacity);}",oI="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,y,y.a*opacity);}",aI="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4((x.rgb+y.rgb)*0.5,y.a),opacity);}",lI="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(yHSL.xy,xHSL.z));return mix(x,vec4(z,y.a),opacity);}",uI="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 a=x.rgb,b=y.rgb;vec3 z=mix(step(0.0,b)*(1.0-min(vec3(1.0),(1.0-a)/b)),vec3(1.0),step(1.0,a));return mix(x,vec4(z,y.a),opacity);}",cI="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 a=x.rgb,b=y.rgb;vec3 z=step(0.0,a)*mix(min(vec3(1.0),a/max(1.0-b,1e-9)),vec3(1.0),step(1.0,b));return mix(x,vec4(z,y.a),opacity);}",fI="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(min(x.rgb,y.rgb),y.a),opacity);}",dI="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(abs(x.rgb-y.rgb),y.a),opacity);}",hI="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(x.rgb/max(y.rgb,1e-12),y.a),opacity);}",pI="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4((x.rgb+y.rgb-2.0*x.rgb*y.rgb),y.a),opacity);}",mI="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 a=min(x.rgb,1.0);vec3 b=min(y.rgb,1.0);vec3 z=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,b));return mix(x,vec4(z,y.a),opacity);}",gI="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(step(1.0,x.rgb+y.rgb),y.a),opacity);}",vI="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(yHSL.x,xHSL.yz));return mix(x,vec4(z,y.a),opacity);}",_I="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(1.0-y.rgb,y.a),opacity);}",yI="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(y.rgb*(1.0-x.rgb),y.a),opacity);}",xI="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(max(x.rgb,y.rgb),y.a),opacity);}",SI="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(clamp(y.rgb+x.rgb-1.0,0.0,1.0),y.a),opacity);}",EI="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(min(x.rgb+y.rgb,1.0),y.a),opacity);}",MI="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(clamp(2.0*y.rgb+x.rgb-1.0,0.0,1.0),y.a),opacity);}",TI="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(xHSL.xy,yHSL.z));return mix(x,vec4(z,y.a),opacity);}",wI="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(x.rgb*y.rgb,y.a),opacity);}",AI="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(1.0-abs(1.0-x.rgb-y.rgb),y.a),opacity);}",CI="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,y,opacity);}",RI="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 z=mix(2.0*y.rgb*x.rgb,1.0-2.0*(1.0-y.rgb)*(1.0-x.rgb),step(0.5,x.rgb));return mix(x,vec4(z,y.a),opacity);}",PI="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 y2=2.0*y.rgb;vec3 z=mix(mix(y2,x.rgb,step(0.5*x.rgb,y.rgb)),max(y2-1.0,vec3(0.0)),step(x.rgb,y2-1.0));return mix(x,vec4(z,y.a),opacity);}",DI="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 z=mix(min(x.rgb*x.rgb/max(1.0-y.rgb,1e-12),1.0),y.rgb,step(1.0,y.rgb));return mix(x,vec4(z,y.a),opacity);}",LI="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(xHSL.x,yHSL.y,xHSL.z));return mix(x,vec4(z,y.a),opacity);}",NI="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(x.rgb+y.rgb-min(x.rgb*y.rgb,1.0),y.a),opacity);}",II="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 a=x.rgb;vec3 b=y.rgb;vec3 y2=2.0*b;vec3 w=step(0.5,b);vec3 c=a-(1.0-y2)*a*(1.0-a);vec3 d=mix(a+(y2-1.0)*(sqrt(a)-a),a+(y2-1.0)*a*((16.0*a-12.0)*a+3.0),w*(1.0-step(0.25,a)));vec3 z=mix(c,d,w);return mix(x,vec4(z,y.a),opacity);}",UI="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return y;}",bI="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(max(x.rgb+y.rgb-1.0,0.0),y.a),opacity);}",FI="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 z=mix(max(1.0-min((1.0-x.rgb)/(2.0*y.rgb),1.0),0.0),min(x.rgb/(2.0*(1.0-y.rgb)),1.0),step(0.5,y.rgb));return mix(x,vec4(z,y.a),opacity);}",OI=new Map([[wt.ADD,sI],[wt.ALPHA,oI],[wt.AVERAGE,aI],[wt.COLOR,lI],[wt.COLOR_BURN,uI],[wt.COLOR_DODGE,cI],[wt.DARKEN,fI],[wt.DIFFERENCE,dI],[wt.DIVIDE,hI],[wt.DST,null],[wt.EXCLUSION,pI],[wt.HARD_LIGHT,mI],[wt.HARD_MIX,gI],[wt.HUE,vI],[wt.INVERT,_I],[wt.INVERT_RGB,yI],[wt.LIGHTEN,xI],[wt.LINEAR_BURN,SI],[wt.LINEAR_DODGE,EI],[wt.LINEAR_LIGHT,MI],[wt.LUMINOSITY,TI],[wt.MULTIPLY,wI],[wt.NEGATION,AI],[wt.NORMAL,CI],[wt.OVERLAY,RI],[wt.PIN_LIGHT,PI],[wt.REFLECT,DI],[wt.SATURATION,LI],[wt.SCREEN,NI],[wt.SOFT_LIGHT,II],[wt.SRC,UI],[wt.SUBTRACT,bI],[wt.VIVID_LIGHT,FI]]),kI=class extends ss{constructor(t,e=1){super(),this._blendFunction=t,this.opacity=new ct(e)}getOpacity(){return this.opacity.value}setOpacity(t){this.opacity.value=t}get blendFunction(){return this._blendFunction}set blendFunction(t){this._blendFunction=t,this.dispatchEvent({type:"change"})}getBlendFunction(){return this.blendFunction}setBlendFunction(t){this.blendFunction=t}getShaderCode(){return OI.get(this.blendFunction)}},Ed=class extends ss{constructor(t,e,{attributes:n=Dr.NONE,blendFunction:i=wt.NORMAL,defines:r=new Map,uniforms:s=new Map,extensions:l=null,vertexShader:u=null}={}){super(),this.name=t,this.renderer=null,this.attributes=n,this.fragmentShader=e,this.vertexShader=u,this.defines=r,this.uniforms=s,this.extensions=l,this.blendMode=new kI(i),this.blendMode.addEventListener("change",f=>this.setChanged()),this._inputColorSpace=Vs,this._outputColorSpace=wr}get inputColorSpace(){return this._inputColorSpace}set inputColorSpace(t){this._inputColorSpace=t,this.setChanged()}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t,this.setChanged()}set mainScene(t){}set mainCamera(t){}getName(){return this.name}setRenderer(t){this.renderer=t}getDefines(){return this.defines}getUniforms(){return this.uniforms}getExtensions(){return this.extensions}getBlendMode(){return this.blendMode}getAttributes(){return this.attributes}setAttributes(t){this.attributes=t,this.setChanged()}getFragmentShader(){return this.fragmentShader}setFragmentShader(t){this.fragmentShader=t,this.setChanged()}getVertexShader(){return this.vertexShader}setVertexShader(t){this.vertexShader=t,this.setChanged()}setChanged(){this.dispatchEvent({type:"change"})}setDepthTexture(t,e=rs){}update(t,e,n){}setSize(t,e){}initialize(t,e,n){}dispose(){for(const t of Object.keys(this)){const e=this[t];(e instanceof ti||e instanceof js||e instanceof vn||e instanceof Ii)&&this[t].dispose()}}},S0={VERY_SMALL:0,SMALL:1,MEDIUM:2,LARGE:3,VERY_LARGE:4,HUGE:5},zI=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec4 sum=texture2D(inputBuffer,vUv0);sum+=texture2D(inputBuffer,vUv1);sum+=texture2D(inputBuffer,vUv2);sum+=texture2D(inputBuffer,vUv3);gl_FragColor=sum*0.25;
#include <colorspace_fragment>
}`,BI="uniform vec4 texelSize;uniform float kernel;uniform float scale;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec2 uv=position.xy*0.5+0.5;vec2 dUv=(texelSize.xy*vec2(kernel)+texelSize.zw)*scale;vUv0=vec2(uv.x-dUv.x,uv.y+dUv.y);vUv1=vec2(uv.x+dUv.x,uv.y+dUv.y);vUv2=vec2(uv.x+dUv.x,uv.y-dUv.y);vUv3=vec2(uv.x-dUv.x,uv.y-dUv.y);gl_Position=vec4(position.xy,1.0,1.0);}",HI=[new Float32Array([0,0]),new Float32Array([0,1,1]),new Float32Array([0,1,1,2]),new Float32Array([0,1,2,2,3]),new Float32Array([0,1,2,3,4,4,5]),new Float32Array([0,1,2,3,4,5,7,8,9,10])],VI=class extends Pn{constructor(t=new Jt){super({name:"KawaseBlurMaterial",uniforms:{inputBuffer:new ct(null),texelSize:new ct(new Jt),scale:new ct(1),kernel:new ct(0)},blending:Jn,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:zI,vertexShader:BI}),this.setTexelSize(t.x,t.y),this.kernelSize=S0.MEDIUM}set inputBuffer(t){this.uniforms.inputBuffer.value=t}setInputBuffer(t){this.inputBuffer=t}get kernelSequence(){return HI[this.kernelSize]}get scale(){return this.uniforms.scale.value}set scale(t){this.uniforms.scale.value=t}getScale(){return this.uniforms.scale.value}setScale(t){this.uniforms.scale.value=t}getKernel(){return null}get kernel(){return this.uniforms.kernel.value}set kernel(t){this.uniforms.kernel.value=t}setKernel(t){this.kernel=t}setTexelSize(t,e){this.uniforms.texelSize.value.set(t,e,t*.5,e*.5)}setSize(t,e){const n=1/t,i=1/e;this.uniforms.texelSize.value.set(n,i,n*.5,i*.5)}},GI=class extends Ii{constructor({kernelSize:t=S0.MEDIUM,resolutionScale:e=.5,width:n=Ri.AUTO_SIZE,height:i=Ri.AUTO_SIZE,resolutionX:r=n,resolutionY:s=i}={}){super("KawaseBlurPass"),this.renderTargetA=new ti(1,1,{depthBuffer:!1}),this.renderTargetA.texture.name="Blur.Target.A",this.renderTargetB=this.renderTargetA.clone(),this.renderTargetB.texture.name="Blur.Target.B";const l=this.resolution=new Ri(this,r,s,e);l.addEventListener("change",u=>this.setSize(l.baseWidth,l.baseHeight)),this._blurMaterial=new VI,this._blurMaterial.kernelSize=t,this.copyMaterial=new O1}getResolution(){return this.resolution}get blurMaterial(){return this._blurMaterial}set blurMaterial(t){this._blurMaterial=t}get dithering(){return this.copyMaterial.dithering}set dithering(t){this.copyMaterial.dithering=t}get kernelSize(){return this.blurMaterial.kernelSize}set kernelSize(t){this.blurMaterial.kernelSize=t}get width(){return this.resolution.width}set width(t){this.resolution.preferredWidth=t}get height(){return this.resolution.height}set height(t){this.resolution.preferredHeight=t}get scale(){return this.blurMaterial.scale}set scale(t){this.blurMaterial.scale=t}getScale(){return this.blurMaterial.scale}setScale(t){this.blurMaterial.scale=t}getKernelSize(){return this.kernelSize}setKernelSize(t){this.kernelSize=t}getResolutionScale(){return this.resolution.scale}setResolutionScale(t){this.resolution.scale=t}render(t,e,n,i,r){const s=this.scene,l=this.camera,u=this.renderTargetA,f=this.renderTargetB,d=this.blurMaterial,h=d.kernelSequence;let m=e;this.fullscreenMaterial=d;for(let v=0,_=h.length;v<_;++v){const x=v&1?f:u;d.kernel=h[v],d.inputBuffer=m.texture,t.setRenderTarget(x),t.render(s,l),m=x}this.fullscreenMaterial=this.copyMaterial,this.copyMaterial.inputBuffer=m.texture,t.setRenderTarget(this.renderToScreen?null:n),t.render(s,l)}setSize(t,e){const n=this.resolution;n.setBaseSize(t,e);const i=n.width,r=n.height;this.renderTargetA.setSize(i,r),this.renderTargetB.setSize(i,r),this.blurMaterial.setSize(t,e)}initialize(t,e,n){n!==void 0&&(this.renderTargetA.texture.type=n,this.renderTargetB.texture.type=n,n!==Rn?(this.blurMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1",this.copyMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1"):t!==null&&t.outputColorSpace===Ot&&(this.renderTargetA.texture.colorSpace=Ot,this.renderTargetB.texture.colorSpace=Ot))}static get AUTO_SIZE(){return Ri.AUTO_SIZE}},z1={RED:0,GREEN:1,BLUE:2,ALPHA:3},Yd={DISCARD:0,MULTIPLY:1,MULTIPLY_RGB_SET_ALPHA:2,MULTIPLY_RGB:3},WI=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#if PASS == 1
uniform vec4 kernel64[32];
#else
uniform vec4 kernel16[8];
#endif
uniform lowp sampler2D cocBuffer;uniform vec2 texelSize;uniform float scale;varying vec2 vUv;void main(){
#ifdef FOREGROUND
vec2 cocNearFar=texture2D(cocBuffer,vUv).rg*scale;float coc=cocNearFar.x;
#else
float coc=texture2D(cocBuffer,vUv).g*scale;
#endif
if(coc==0.0){gl_FragColor=texture2D(inputBuffer,vUv);}else{
#ifdef FOREGROUND
vec2 step=texelSize*max(cocNearFar.x,cocNearFar.y);
#else
vec2 step=texelSize*coc;
#endif
#if PASS == 1
vec4 acc=vec4(0.0);for(int i=0;i<32;++i){vec4 kernel=kernel64[i];vec2 uv=step*kernel.xy+vUv;acc+=texture2D(inputBuffer,uv);uv=step*kernel.zw+vUv;acc+=texture2D(inputBuffer,uv);}gl_FragColor=acc/64.0;
#else
vec4 maxValue=texture2D(inputBuffer,vUv);for(int i=0;i<8;++i){vec4 kernel=kernel16[i];vec2 uv=step*kernel.xy+vUv;maxValue=max(texture2D(inputBuffer,uv),maxValue);uv=step*kernel.zw+vUv;maxValue=max(texture2D(inputBuffer,uv),maxValue);}gl_FragColor=maxValue;
#endif
}}`,Mf=class extends Pn{constructor(t=!1,e=!1){super({name:"BokehMaterial",defines:{PASS:t?"2":"1"},uniforms:{inputBuffer:new ct(null),cocBuffer:new ct(null),texelSize:new ct(new nt),kernel64:new ct(null),kernel16:new ct(null),scale:new ct(1)},blending:Jn,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:WI,vertexShader:jd}),e&&(this.defines.FOREGROUND="1"),this.generateKernel()}set inputBuffer(t){this.uniforms.inputBuffer.value=t}setInputBuffer(t){this.uniforms.inputBuffer.value=t}set cocBuffer(t){this.uniforms.cocBuffer.value=t}setCoCBuffer(t){this.uniforms.cocBuffer.value=t}get scale(){return this.uniforms.scale.value}set scale(t){this.uniforms.scale.value=t}getScale(t){return this.scale}setScale(t){this.scale=t}generateKernel(){const t=2.39996323,e=new Float64Array(128),n=new Float64Array(32);let i=0,r=0;for(let s=0,l=Math.sqrt(80);s<80;++s){const u=s*t,f=Math.sqrt(s)/l,d=f*Math.cos(u),h=f*Math.sin(u);s%5===0?(n[r++]=d,n[r++]=h):(e[i++]=d,e[i++]=h)}this.uniforms.kernel64.value=e,this.uniforms.kernel16.value=n}setTexelSize(t,e){this.uniforms.texelSize.value.set(t,e)}setSize(t,e){this.uniforms.texelSize.value.set(1/t,1/e)}};function TS(t,e,n){return t*(e-n)-e}function av(t,e,n){return Math.min(Math.max((t+e)/(e-n),0),1)}var XI=`#include <common>
#include <packing>
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
uniform float focusDistance;uniform float focusRange;uniform float cameraNear;uniform float cameraFar;varying vec2 vUv;float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
float depth=unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
float depth=texture2D(depthBuffer,uv).r;
#endif
#ifdef LOG_DEPTH
float d=pow(2.0,depth*log2(cameraFar+1.0))-1.0;float a=cameraFar/(cameraFar-cameraNear);float b=cameraFar*cameraNear/(cameraNear-cameraFar);depth=a+b/d;
#endif
return depth;}void main(){float depth=readDepth(vUv);
#ifdef PERSPECTIVE_CAMERA
float viewZ=perspectiveDepthToViewZ(depth,cameraNear,cameraFar);float linearDepth=viewZToOrthographicDepth(viewZ,cameraNear,cameraFar);
#else
float linearDepth=depth;
#endif
float signedDistance=linearDepth-focusDistance;float magnitude=smoothstep(0.0,focusRange,abs(signedDistance));gl_FragColor.rg=magnitude*vec2(step(signedDistance,0.0),step(0.0,signedDistance));}`,jI=class extends Pn{constructor(t){super({name:"CircleOfConfusionMaterial",defines:{DEPTH_PACKING:"0"},uniforms:{depthBuffer:new ct(null),focusDistance:new ct(0),focusRange:new ct(0),cameraNear:new ct(.3),cameraFar:new ct(1e3)},blending:Jn,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:XI,vertexShader:jd}),this.uniforms.focalLength=this.uniforms.focusRange,this.copyCameraSettings(t)}get near(){return this.uniforms.cameraNear.value}get far(){return this.uniforms.cameraFar.value}set depthBuffer(t){this.uniforms.depthBuffer.value=t}set depthPacking(t){this.defines.DEPTH_PACKING=t.toFixed(0),this.needsUpdate=!0}setDepthBuffer(t,e=rs){this.depthBuffer=t,this.depthPacking=e}get focusDistance(){return this.uniforms.focusDistance.value}set focusDistance(t){this.uniforms.focusDistance.value=t}get worldFocusDistance(){return-TS(this.focusDistance,this.near,this.far)}set worldFocusDistance(t){this.focusDistance=av(-t,this.near,this.far)}getFocusDistance(t){this.uniforms.focusDistance.value=t}setFocusDistance(t){this.uniforms.focusDistance.value=t}get focalLength(){return this.focusRange}set focalLength(t){this.focusRange=t}get focusRange(){return this.uniforms.focusRange.value}set focusRange(t){this.uniforms.focusRange.value=t}get worldFocusRange(){return-TS(this.focusRange,this.near,this.far)}set worldFocusRange(t){this.focusRange=av(-t,this.near,this.far)}getFocalLength(t){return this.focusRange}setFocalLength(t){this.focusRange=t}adoptCameraSettings(t){this.copyCameraSettings(t)}copyCameraSettings(t){t&&(this.uniforms.cameraNear.value=t.near,this.uniforms.cameraFar.value=t.far,t instanceof fi?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}},YI=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#ifdef MASK_PRECISION_HIGH
uniform mediump sampler2D maskTexture;
#else
uniform lowp sampler2D maskTexture;
#endif
#if MASK_FUNCTION != 0
uniform float strength;
#endif
varying vec2 vUv;void main(){
#if COLOR_CHANNEL == 0
float mask=texture2D(maskTexture,vUv).r;
#elif COLOR_CHANNEL == 1
float mask=texture2D(maskTexture,vUv).g;
#elif COLOR_CHANNEL == 2
float mask=texture2D(maskTexture,vUv).b;
#else
float mask=texture2D(maskTexture,vUv).a;
#endif
#if MASK_FUNCTION == 0
#ifdef INVERTED
mask=step(mask,0.0);
#else
mask=1.0-step(mask,0.0);
#endif
#else
mask=clamp(mask*strength,0.0,1.0);
#ifdef INVERTED
mask=1.0-mask;
#endif
#endif
#if MASK_FUNCTION == 3
vec4 texel=texture2D(inputBuffer,vUv);gl_FragColor=vec4(mask*texel.rgb,texel.a);
#elif MASK_FUNCTION == 2
gl_FragColor=vec4(mask*texture2D(inputBuffer,vUv).rgb,mask);
#else
gl_FragColor=mask*texture2D(inputBuffer,vUv);
#endif
}`,qI=class extends Pn{constructor(t=null){super({name:"MaskMaterial",uniforms:{maskTexture:new ct(t),inputBuffer:new ct(null),strength:new ct(1)},blending:Jn,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:YI,vertexShader:jd}),this.colorChannel=z1.RED,this.maskFunction=Yd.DISCARD}set inputBuffer(t){this.uniforms.inputBuffer.value=t}setInputBuffer(t){this.uniforms.inputBuffer.value=t}set maskTexture(t){this.uniforms.maskTexture.value=t,delete this.defines.MASK_PRECISION_HIGH,t.type!==Rn&&(this.defines.MASK_PRECISION_HIGH="1"),this.needsUpdate=!0}setMaskTexture(t){this.maskTexture=t}set colorChannel(t){this.defines.COLOR_CHANNEL=t.toFixed(0),this.needsUpdate=!0}setColorChannel(t){this.colorChannel=t}set maskFunction(t){this.defines.MASK_FUNCTION=t.toFixed(0),this.needsUpdate=!0}setMaskFunction(t){this.maskFunction=t}get inverted(){return this.defines.INVERTED!==void 0}set inverted(t){this.inverted&&!t?delete this.defines.INVERTED:t&&(this.defines.INVERTED="1"),this.needsUpdate=!0}isInverted(){return this.inverted}setInverted(t){this.inverted=t}get strength(){return this.uniforms.strength.value}set strength(t){this.uniforms.strength.value=t}getStrength(){return this.strength}setStrength(t){this.strength=t}},ca=class extends Ii{constructor(t,e="inputBuffer"){super("ShaderPass"),this.fullscreenMaterial=t,this.input=e}setInput(t){this.input=t}render(t,e,n,i,r){const s=this.fullscreenMaterial.uniforms;e!==null&&s!==void 0&&s[this.input]!==void 0&&(s[this.input].value=e.texture),t.setRenderTarget(this.renderToScreen?null:n),t.render(this.scene,this.camera)}initialize(t,e,n){n!==void 0&&n!==Rn&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}},KI=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D nearColorBuffer;uniform mediump sampler2D farColorBuffer;
#else
uniform lowp sampler2D nearColorBuffer;uniform lowp sampler2D farColorBuffer;
#endif
uniform lowp sampler2D nearCoCBuffer;uniform lowp sampler2D farCoCBuffer;uniform float scale;void mainImage(const in vec4 inputColor,const in vec2 uv,const in float depth,out vec4 outputColor){vec4 colorNear=texture2D(nearColorBuffer,uv);vec4 colorFar=texture2D(farColorBuffer,uv);
#if MASK_FUNCTION == 1
vec2 cocNearFar=vec2(texture2D(nearCoCBuffer,uv).r,colorFar.a);cocNearFar.x=min(cocNearFar.x*scale,1.0);
#else
vec2 cocNearFar=vec2(texture2D(nearCoCBuffer,uv).r,texture2D(farCoCBuffer,uv).g);cocNearFar=min(cocNearFar*scale,1.0);
#endif
vec4 result=inputColor*(1.0-cocNearFar.y)+colorFar;result=mix(result,colorNear,cocNearFar.x);outputColor=result;}`,QI=class extends Ed{constructor(t,{blendFunction:e,worldFocusDistance:n,worldFocusRange:i,focusDistance:r=0,focalLength:s=.1,focusRange:l=s,bokehScale:u=1,resolutionScale:f=1,width:d=Ri.AUTO_SIZE,height:h=Ri.AUTO_SIZE,resolutionX:m=d,resolutionY:v=h}={}){super("DepthOfFieldEffect",KI,{blendFunction:e,attributes:Dr.DEPTH,uniforms:new Map([["nearColorBuffer",new ct(null)],["farColorBuffer",new ct(null)],["nearCoCBuffer",new ct(null)],["farCoCBuffer",new ct(null)],["scale",new ct(1)]])}),this.camera=t,this.renderTarget=new ti(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="DoF.Intermediate",this.renderTargetMasked=this.renderTarget.clone(),this.renderTargetMasked.texture.name="DoF.Masked.Far",this.renderTargetNear=this.renderTarget.clone(),this.renderTargetNear.texture.name="DoF.Bokeh.Near",this.uniforms.get("nearColorBuffer").value=this.renderTargetNear.texture,this.renderTargetFar=this.renderTarget.clone(),this.renderTargetFar.texture.name="DoF.Bokeh.Far",this.uniforms.get("farColorBuffer").value=this.renderTargetFar.texture,this.renderTargetCoC=this.renderTarget.clone(),this.renderTargetCoC.texture.name="DoF.CoC",this.uniforms.get("farCoCBuffer").value=this.renderTargetCoC.texture,this.renderTargetCoCBlurred=this.renderTargetCoC.clone(),this.renderTargetCoCBlurred.texture.name="DoF.CoC.Blurred",this.uniforms.get("nearCoCBuffer").value=this.renderTargetCoCBlurred.texture,this.cocPass=new ca(new jI(t));const _=this.cocMaterial;_.focusDistance=r,_.focusRange=l,n!==void 0&&(_.worldFocusDistance=n),i!==void 0&&(_.worldFocusRange=i),this.blurPass=new GI({resolutionScale:f,resolutionX:m,resolutionY:v,kernelSize:S0.MEDIUM}),this.maskPass=new ca(new qI(this.renderTargetCoC.texture));const x=this.maskPass.fullscreenMaterial;x.colorChannel=z1.GREEN,this.maskFunction=Yd.MULTIPLY_RGB,this.bokehNearBasePass=new ca(new Mf(!1,!0)),this.bokehNearBasePass.fullscreenMaterial.cocBuffer=this.renderTargetCoCBlurred.texture,this.bokehNearFillPass=new ca(new Mf(!0,!0)),this.bokehNearFillPass.fullscreenMaterial.cocBuffer=this.renderTargetCoCBlurred.texture,this.bokehFarBasePass=new ca(new Mf(!1,!1)),this.bokehFarBasePass.fullscreenMaterial.cocBuffer=this.renderTargetCoC.texture,this.bokehFarFillPass=new ca(new Mf(!0,!1)),this.bokehFarFillPass.fullscreenMaterial.cocBuffer=this.renderTargetCoC.texture,this.target=null;const w=this.resolution=new Ri(this,m,v,f);w.addEventListener("change",E=>this.setSize(w.baseWidth,w.baseHeight)),this.bokehScale=u}set mainCamera(t){this.camera=t,this.cocMaterial.copyCameraSettings(t)}get cocTexture(){return this.renderTargetCoC.texture}get maskFunction(){return this.maskPass.fullscreenMaterial.maskFunction}set maskFunction(t){this.maskFunction!==t&&(this.defines.set("MASK_FUNCTION",t.toFixed(0)),this.maskPass.fullscreenMaterial.maskFunction=t,this.setChanged())}get cocMaterial(){return this.cocPass.fullscreenMaterial}get circleOfConfusionMaterial(){return this.cocMaterial}getCircleOfConfusionMaterial(){return this.cocMaterial}getBlurPass(){return this.blurPass}getResolution(){return this.resolution}get bokehScale(){return this.uniforms.get("scale").value}set bokehScale(t){this.bokehNearBasePass.fullscreenMaterial.scale=t,this.bokehNearFillPass.fullscreenMaterial.scale=t,this.bokehFarBasePass.fullscreenMaterial.scale=t,this.bokehFarFillPass.fullscreenMaterial.scale=t,this.maskPass.fullscreenMaterial.strength=t,this.uniforms.get("scale").value=t}getBokehScale(){return this.bokehScale}setBokehScale(t){this.bokehScale=t}getTarget(){return this.target}setTarget(t){this.target=t}calculateFocusDistance(t){const e=this.camera,n=e.position.distanceTo(t);return av(-n,e.near,e.far)}setDepthTexture(t,e=rs){this.cocMaterial.depthBuffer=t,this.cocMaterial.depthPacking=e}update(t,e,n){const i=this.renderTarget,r=this.renderTargetCoC,s=this.renderTargetCoCBlurred,l=this.renderTargetMasked;if(this.target!==null){const u=this.calculateFocusDistance(this.target);this.cocMaterial.focusDistance=u}this.cocPass.render(t,null,r),this.blurPass.render(t,r,s),this.maskPass.render(t,e,l),this.bokehFarBasePass.render(t,l,i),this.bokehFarFillPass.render(t,i,this.renderTargetFar),this.bokehNearBasePass.render(t,e,i),this.bokehNearFillPass.render(t,i,this.renderTargetNear)}setSize(t,e){const n=this.resolution;n.setBaseSize(t,e);const i=n.width,r=n.height;this.cocPass.setSize(t,e),this.blurPass.setSize(t,e),this.maskPass.setSize(t,e),this.renderTargetFar.setSize(t,e),this.renderTargetCoC.setSize(t,e),this.renderTargetMasked.setSize(t,e),this.renderTarget.setSize(i,r),this.renderTargetNear.setSize(i,r),this.renderTargetCoCBlurred.setSize(i,r),this.bokehNearBasePass.fullscreenMaterial.setSize(t,e),this.bokehNearFillPass.fullscreenMaterial.setSize(t,e),this.bokehFarBasePass.fullscreenMaterial.setSize(t,e),this.bokehFarFillPass.fullscreenMaterial.setSize(t,e)}initialize(t,e,n){this.cocPass.initialize(t,e,n),this.maskPass.initialize(t,e,n),this.bokehNearBasePass.initialize(t,e,n),this.bokehNearFillPass.initialize(t,e,n),this.bokehFarBasePass.initialize(t,e,n),this.bokehFarFillPass.initialize(t,e,n),this.blurPass.initialize(t,e,Rn),t.capabilities.logarithmicDepthBuffer&&(this.cocPass.fullscreenMaterial.defines.LOG_DEPTH="1"),n!==void 0&&(this.renderTarget.texture.type=n,this.renderTargetNear.texture.type=n,this.renderTargetFar.texture.type=n,this.renderTargetMasked.texture.type=n,t!==null&&t.outputColorSpace===Ot&&(this.renderTarget.texture.colorSpace=Ot,this.renderTargetNear.texture.colorSpace=Ot,this.renderTargetFar.texture.colorSpace=Ot,this.renderTargetMasked.texture.colorSpace=Ot))}},B1=class extends Ii{constructor(t,e,n=null){super("RenderPass",t,e),this.needsSwap=!1,this.clearPass=new k1,this.overrideMaterialManager=n===null?null:new MS(n),this.ignoreBackground=!1,this.skipShadowMapUpdate=!1,this.selection=null}set mainScene(t){this.scene=t}set mainCamera(t){this.camera=t}get renderToScreen(){return super.renderToScreen}set renderToScreen(t){super.renderToScreen=t,this.clearPass.renderToScreen=t}get overrideMaterial(){const t=this.overrideMaterialManager;return t!==null?t.material:null}set overrideMaterial(t){const e=this.overrideMaterialManager;t!==null?e!==null?e.setMaterial(t):this.overrideMaterialManager=new MS(t):e!==null&&(e.dispose(),this.overrideMaterialManager=null)}getOverrideMaterial(){return this.overrideMaterial}setOverrideMaterial(t){this.overrideMaterial=t}get clear(){return this.clearPass.enabled}set clear(t){this.clearPass.enabled=t}getSelection(){return this.selection}setSelection(t){this.selection=t}isBackgroundDisabled(){return this.ignoreBackground}setBackgroundDisabled(t){this.ignoreBackground=t}isShadowMapDisabled(){return this.skipShadowMapUpdate}setShadowMapDisabled(t){this.skipShadowMapUpdate=t}getClearPass(){return this.clearPass}render(t,e,n,i,r){const s=this.scene,l=this.camera,u=this.selection,f=l.layers.mask,d=s.background,h=t.shadowMap.autoUpdate,m=this.renderToScreen?null:e;u!==null&&l.layers.set(u.getLayer()),this.skipShadowMapUpdate&&(t.shadowMap.autoUpdate=!1),(this.ignoreBackground||this.clearPass.overrideClearColor!==null)&&(s.background=null),this.clearPass.enabled&&this.clearPass.render(t,e),t.setRenderTarget(m),this.overrideMaterialManager!==null?this.overrideMaterialManager.render(t,s,l):t.render(s,l),l.layers.mask=f,s.background=d,t.shadowMap.autoUpdate=h}},zl={DEFAULT:0,ESKIL:1},ZI=`#include <packing>
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
#ifdef DOWNSAMPLE_NORMALS
uniform lowp sampler2D normalBuffer;
#endif
varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
return unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
return texture2D(depthBuffer,uv).r;
#endif
}int findBestDepth(const in float samples[4]){float c=(samples[0]+samples[1]+samples[2]+samples[3])*0.25;float distances[4];distances[0]=abs(c-samples[0]);distances[1]=abs(c-samples[1]);distances[2]=abs(c-samples[2]);distances[3]=abs(c-samples[3]);float maxDistance=max(max(distances[0],distances[1]),max(distances[2],distances[3]));int remaining[3];int rejected[3];int i,j,k;for(i=0,j=0,k=0;i<4;++i){if(distances[i]<maxDistance){remaining[j++]=i;}else{rejected[k++]=i;}}for(;j<3;++j){remaining[j]=rejected[--k];}vec3 s=vec3(samples[remaining[0]],samples[remaining[1]],samples[remaining[2]]);c=(s.x+s.y+s.z)/3.0;distances[0]=abs(c-s.x);distances[1]=abs(c-s.y);distances[2]=abs(c-s.z);float minDistance=min(distances[0],min(distances[1],distances[2]));for(i=0;i<3;++i){if(distances[i]==minDistance){break;}}return remaining[i];}void main(){float d[4];d[0]=readDepth(vUv0);d[1]=readDepth(vUv1);d[2]=readDepth(vUv2);d[3]=readDepth(vUv3);int index=findBestDepth(d);
#ifdef DOWNSAMPLE_NORMALS
vec3 n[4];n[0]=texture2D(normalBuffer,vUv0).rgb;n[1]=texture2D(normalBuffer,vUv1).rgb;n[2]=texture2D(normalBuffer,vUv2).rgb;n[3]=texture2D(normalBuffer,vUv3).rgb;
#else
vec3 n[4];n[0]=vec3(0.0);n[1]=vec3(0.0);n[2]=vec3(0.0);n[3]=vec3(0.0);
#endif
gl_FragColor=vec4(n[index],d[index]);}`,$I="uniform vec2 texelSize;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec2 uv=position.xy*0.5+0.5;vUv0=uv;vUv1=vec2(uv.x,uv.y+texelSize.y);vUv2=vec2(uv.x+texelSize.x,uv.y);vUv3=uv+texelSize;gl_Position=vec4(position.xy,1.0,1.0);}",JI=class extends Pn{constructor(){super({name:"DepthDownsamplingMaterial",defines:{DEPTH_PACKING:"0"},uniforms:{depthBuffer:new ct(null),normalBuffer:new ct(null),texelSize:new ct(new nt)},blending:Jn,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:ZI,vertexShader:$I})}set depthBuffer(t){this.uniforms.depthBuffer.value=t}set depthPacking(t){this.defines.DEPTH_PACKING=t.toFixed(0),this.needsUpdate=!0}setDepthBuffer(t,e=rs){this.depthBuffer=t,this.depthPacking=e}set normalBuffer(t){this.uniforms.normalBuffer.value=t,t!==null?this.defines.DOWNSAMPLE_NORMALS="1":delete this.defines.DOWNSAMPLE_NORMALS,this.needsUpdate=!0}setNormalBuffer(t){this.normalBuffer=t}setTexelSize(t,e){this.uniforms.texelSize.value.set(t,e)}setSize(t,e){this.uniforms.texelSize.value.set(1/t,1/e)}},eU=class extends Ii{constructor({normalBuffer:t=null,resolutionScale:e=.5,width:n=Ri.AUTO_SIZE,height:i=Ri.AUTO_SIZE,resolutionX:r=n,resolutionY:s=i}={}){super("DepthDownsamplingPass");const l=new JI;l.normalBuffer=t,this.fullscreenMaterial=l,this.needsDepthTexture=!0,this.needsSwap=!1,this.renderTarget=new ti(1,1,{minFilter:ei,magFilter:ei,depthBuffer:!1,type:Ar}),this.renderTarget.texture.name="DepthDownsamplingPass.Target",this.renderTarget.texture.generateMipmaps=!1;const u=this.resolution=new Ri(this,r,s,e);u.addEventListener("change",f=>this.setSize(u.baseWidth,u.baseHeight))}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}getResolution(){return this.resolution}setDepthTexture(t,e=rs){this.fullscreenMaterial.depthBuffer=t,this.fullscreenMaterial.depthPacking=e}render(t,e,n,i,r){t.setRenderTarget(this.renderToScreen?null:this.renderTarget),t.render(this.scene,this.camera)}setSize(t,e){const n=this.resolution;n.setBaseSize(t,e),this.renderTarget.setSize(n.width,n.height),this.fullscreenMaterial.setSize(t,e)}initialize(t,e,n){const i=t.getContext();if(!(i.getExtension("EXT_color_buffer_float")||i.getExtension("EXT_color_buffer_half_float")))throw new Error("Rendering to float texture is not supported.")}},tU=`uniform float offset;uniform float darkness;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){const vec2 center=vec2(0.5);vec3 color=inputColor.rgb;
#if VIGNETTE_TECHNIQUE == 0
float d=distance(uv,center);color*=smoothstep(0.8,offset*0.799,d*(darkness+offset));
#else
vec2 coord=(uv-center)*vec2(offset);color=mix(color,vec3(1.0-darkness),dot(coord,coord));
#endif
outputColor=vec4(color,inputColor.a);}`,nU=class extends Ed{constructor({blendFunction:t,eskil:e=!1,technique:n=e?zl.ESKIL:zl.DEFAULT,offset:i=.5,darkness:r=.5}={}){super("VignetteEffect",tU,{blendFunction:t,defines:new Map([["VIGNETTE_TECHNIQUE",n.toFixed(0)]]),uniforms:new Map([["offset",new ct(i)],["darkness",new ct(r)]])})}get technique(){return Number(this.defines.get("VIGNETTE_TECHNIQUE"))}set technique(t){this.technique!==t&&(this.defines.set("VIGNETTE_TECHNIQUE",t.toFixed(0)),this.setChanged())}get eskil(){return this.technique===zl.ESKIL}set eskil(t){this.technique=t?zl.ESKIL:zl.DEFAULT}getTechnique(){return this.technique}setTechnique(t){this.technique=t}get offset(){return this.uniforms.get("offset").value}set offset(t){this.uniforms.get("offset").value=t}getOffset(){return this.offset}setOffset(t){this.offset=t}get darkness(){return this.uniforms.get("darkness").value}set darkness(t){this.uniforms.get("darkness").value=t}getDarkness(){return this.darkness}setDarkness(t){this.darkness=t}},iU=`#include <common>
#include <packing>
#include <dithering_pars_fragment>
#define packFloatToRGBA(v) packDepthToRGBA(v)
#define unpackRGBAToFloat(v) unpackRGBAToDepth(v)
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#if DEPTH_PACKING == 3201
uniform lowp sampler2D depthBuffer;
#elif defined(GL_FRAGMENT_PRECISION_HIGH)
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;vec4 sRGBToLinear(const in vec4 value){return vec4(mix(pow(value.rgb*0.9478672986+vec3(0.0521327014),vec3(2.4)),value.rgb*0.0773993808,vec3(lessThanEqual(value.rgb,vec3(0.04045)))),value.a);}float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
return unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
return texture2D(depthBuffer,uv).r;
#endif
}float getViewZ(const in float depth){
#ifdef PERSPECTIVE_CAMERA
return perspectiveDepthToViewZ(depth,cameraNear,cameraFar);
#else
return orthographicDepthToViewZ(depth,cameraNear,cameraFar);
#endif
}vec3 RGBToHCV(const in vec3 RGB){vec4 P=mix(vec4(RGB.bg,-1.0,2.0/3.0),vec4(RGB.gb,0.0,-1.0/3.0),step(RGB.b,RGB.g));vec4 Q=mix(vec4(P.xyw,RGB.r),vec4(RGB.r,P.yzx),step(P.x,RGB.r));float C=Q.x-min(Q.w,Q.y);float H=abs((Q.w-Q.y)/(6.0*C+EPSILON)+Q.z);return vec3(H,C,Q.x);}vec3 RGBToHSL(const in vec3 RGB){vec3 HCV=RGBToHCV(RGB);float L=HCV.z-HCV.y*0.5;float S=HCV.y/(1.0-abs(L*2.0-1.0)+EPSILON);return vec3(HCV.x,S,L);}vec3 HueToRGB(const in float H){float R=abs(H*6.0-3.0)-1.0;float G=2.0-abs(H*6.0-2.0);float B=2.0-abs(H*6.0-4.0);return clamp(vec3(R,G,B),0.0,1.0);}vec3 HSLToRGB(const in vec3 HSL){vec3 RGB=HueToRGB(HSL.x);float C=(1.0-abs(2.0*HSL.z-1.0))*HSL.y;return(RGB-0.5)*C+HSL.z;}FRAGMENT_HEAD void main(){FRAGMENT_MAIN_UV vec4 color0=texture2D(inputBuffer,UV);vec4 color1=vec4(0.0);FRAGMENT_MAIN_IMAGE color0.a=clamp(color0.a,0.0,1.0);gl_FragColor=color0;
#ifdef ENCODE_OUTPUT
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
}`,rU="uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;VERTEX_HEAD void main(){vUv=position.xy*0.5+0.5;VERTEX_MAIN_SUPPORT gl_Position=vec4(position.xy,1.0,1.0);}",sU=class extends Pn{constructor(t,e,n,i,r=!1){super({name:"EffectMaterial",defines:{THREE_REVISION:Pu.replace(/\D+/g,""),DEPTH_PACKING:"0",ENCODE_OUTPUT:"1"},uniforms:{inputBuffer:new ct(null),depthBuffer:new ct(null),resolution:new ct(new nt),texelSize:new ct(new nt),cameraNear:new ct(.3),cameraFar:new ct(1e3),aspect:new ct(1),time:new ct(0)},blending:Jn,toneMapped:!1,depthWrite:!1,depthTest:!1,dithering:r}),t&&this.setShaderParts(t),e&&this.setDefines(e),n&&this.setUniforms(n),this.copyCameraSettings(i)}set inputBuffer(t){this.uniforms.inputBuffer.value=t}setInputBuffer(t){this.uniforms.inputBuffer.value=t}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(t){this.uniforms.depthBuffer.value=t}get depthPacking(){return Number(this.defines.DEPTH_PACKING)}set depthPacking(t){this.defines.DEPTH_PACKING=t.toFixed(0),this.needsUpdate=!0}setDepthBuffer(t,e=rs){this.depthBuffer=t,this.depthPacking=e}setShaderData(t){this.setShaderParts(t.shaderParts),this.setDefines(t.defines),this.setUniforms(t.uniforms),this.setExtensions(t.extensions)}setShaderParts(t){return this.fragmentShader=iU.replace(bt.FRAGMENT_HEAD,t.get(bt.FRAGMENT_HEAD)||"").replace(bt.FRAGMENT_MAIN_UV,t.get(bt.FRAGMENT_MAIN_UV)||"").replace(bt.FRAGMENT_MAIN_IMAGE,t.get(bt.FRAGMENT_MAIN_IMAGE)||""),this.vertexShader=rU.replace(bt.VERTEX_HEAD,t.get(bt.VERTEX_HEAD)||"").replace(bt.VERTEX_MAIN_SUPPORT,t.get(bt.VERTEX_MAIN_SUPPORT)||""),this.needsUpdate=!0,this}setDefines(t){for(const e of t.entries())this.defines[e[0]]=e[1];return this.needsUpdate=!0,this}setUniforms(t){for(const e of t.entries())this.uniforms[e[0]]=e[1];return this}setExtensions(t){this.extensions={};for(const e of t)this.extensions[e]=!0;return this}get encodeOutput(){return this.defines.ENCODE_OUTPUT!==void 0}set encodeOutput(t){this.encodeOutput!==t&&(t?this.defines.ENCODE_OUTPUT="1":delete this.defines.ENCODE_OUTPUT,this.needsUpdate=!0)}isOutputEncodingEnabled(t){return this.encodeOutput}setOutputEncodingEnabled(t){this.encodeOutput=t}get time(){return this.uniforms.time.value}set time(t){this.uniforms.time.value=t}setDeltaTime(t){this.uniforms.time.value+=t}adoptCameraSettings(t){this.copyCameraSettings(t)}copyCameraSettings(t){t&&(this.uniforms.cameraNear.value=t.near,this.uniforms.cameraFar.value=t.far,t instanceof fi?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}setSize(t,e){const n=this.uniforms;n.resolution.value.set(t,e),n.texelSize.value.set(1/t,1/e),n.aspect.value=t/e}static get Section(){return bt}};function wS(t,e,n){for(const i of e){const r="$1"+t+i.charAt(0).toUpperCase()+i.slice(1),s=new RegExp("([^\\.])(\\b"+i+"\\b)","g");for(const l of n.entries())l[1]!==null&&n.set(l[0],l[1].replace(s,r))}}function oU(t,e,n){let i=e.getFragmentShader(),r=e.getVertexShader();const s=i!==void 0&&/mainImage/.test(i),l=i!==void 0&&/mainUv/.test(i);if(n.attributes|=e.getAttributes(),i===void 0)throw new Error(`Missing fragment shader (${e.name})`);if(l&&n.attributes&Dr.CONVOLUTION)throw new Error(`Effects that transform UVs are incompatible with convolution effects (${e.name})`);if(!s&&!l)throw new Error(`Could not find mainImage or mainUv function (${e.name})`);{const u=/\w+\s+(\w+)\([\w\s,]*\)\s*{/g,f=n.shaderParts;let d=f.get(bt.FRAGMENT_HEAD)||"",h=f.get(bt.FRAGMENT_MAIN_UV)||"",m=f.get(bt.FRAGMENT_MAIN_IMAGE)||"",v=f.get(bt.VERTEX_HEAD)||"",_=f.get(bt.VERTEX_MAIN_SUPPORT)||"";const x=new Set,w=new Set;if(l&&(h+=`	${t}MainUv(UV);
`,n.uvTransformation=!0),r!==null&&/mainSupport/.test(r)){const S=/mainSupport *\([\w\s]*?uv\s*?\)/.test(r);_+=`	${t}MainSupport(`,_+=S?`vUv);
`:`);
`;for(const M of r.matchAll(/(?:varying\s+\w+\s+([\S\s]*?);)/g))for(const A of M[1].split(/\s*,\s*/))n.varyings.add(A),x.add(A),w.add(A);for(const M of r.matchAll(u))w.add(M[1])}for(const S of i.matchAll(u))w.add(S[1]);for(const S of e.defines.keys())w.add(S.replace(/\([\w\s,]*\)/g,""));for(const S of e.uniforms.keys())w.add(S);w.delete("while"),w.delete("for"),w.delete("if"),e.uniforms.forEach((S,M)=>n.uniforms.set(t+M.charAt(0).toUpperCase()+M.slice(1),S)),e.defines.forEach((S,M)=>n.defines.set(t+M.charAt(0).toUpperCase()+M.slice(1),S));const E=new Map([["fragment",i],["vertex",r]]);wS(t,w,n.defines),wS(t,w,E),i=E.get("fragment"),r=E.get("vertex");const g=e.blendMode;if(n.blendModes.set(g.blendFunction,g),s){e.inputColorSpace!==null&&e.inputColorSpace!==n.colorSpace&&(m+=e.inputColorSpace===Ot?`color0 = sRGBTransferOETF(color0);
	`:`color0 = sRGBToLinear(color0);
	`),e.outputColorSpace!==wr?n.colorSpace=e.outputColorSpace:e.inputColorSpace!==null&&(n.colorSpace=e.inputColorSpace);const S=/MainImage *\([\w\s,]*?depth[\w\s,]*?\)/;m+=`${t}MainImage(color0, UV, `,n.attributes&Dr.DEPTH&&S.test(i)&&(m+="depth, ",n.readDepth=!0),m+=`color1);
	`;const M=t+"BlendOpacity";n.uniforms.set(M,g.opacity),m+=`color0 = blend${g.blendFunction}(color0, color1, ${M});

	`,d+=`uniform float ${M};

`}if(d+=i+`
`,r!==null&&(v+=r+`
`),f.set(bt.FRAGMENT_HEAD,d),f.set(bt.FRAGMENT_MAIN_UV,h),f.set(bt.FRAGMENT_MAIN_IMAGE,m),f.set(bt.VERTEX_HEAD,v),f.set(bt.VERTEX_MAIN_SUPPORT,_),e.extensions!==null)for(const S of e.extensions)n.extensions.add(S)}}var aU=class extends Ii{constructor(t,...e){super("EffectPass"),this.fullscreenMaterial=new sU(null,null,null,t),this.listener=n=>this.handleEvent(n),this.effects=[],this.setEffects(e),this.skipRendering=!1,this.minTime=1,this.maxTime=Number.POSITIVE_INFINITY,this.timeScale=1}set mainScene(t){for(const e of this.effects)e.mainScene=t}set mainCamera(t){this.fullscreenMaterial.copyCameraSettings(t);for(const e of this.effects)e.mainCamera=t}get encodeOutput(){return this.fullscreenMaterial.encodeOutput}set encodeOutput(t){this.fullscreenMaterial.encodeOutput=t}get dithering(){return this.fullscreenMaterial.dithering}set dithering(t){const e=this.fullscreenMaterial;e.dithering=t,e.needsUpdate=!0}setEffects(t){for(const e of this.effects)e.removeEventListener("change",this.listener);this.effects=t.sort((e,n)=>n.attributes-e.attributes);for(const e of this.effects)e.addEventListener("change",this.listener)}updateMaterial(){const t=new rI;let e=0;for(const l of this.effects)if(l.blendMode.blendFunction===wt.DST)t.attributes|=l.getAttributes()&Dr.DEPTH;else{if(t.attributes&l.getAttributes()&Dr.CONVOLUTION)throw new Error(`Convolution effects cannot be merged (${l.name})`);oU("e"+e++,l,t)}let n=t.shaderParts.get(bt.FRAGMENT_HEAD),i=t.shaderParts.get(bt.FRAGMENT_MAIN_IMAGE),r=t.shaderParts.get(bt.FRAGMENT_MAIN_UV);const s=/\bblend\b/g;for(const l of t.blendModes.values())n+=l.getShaderCode().replace(s,`blend${l.blendFunction}`)+`
`;t.attributes&Dr.DEPTH?(t.readDepth&&(i=`float depth = readDepth(UV);

	`+i),this.needsDepthTexture=this.getDepthTexture()===null):this.needsDepthTexture=!1,t.colorSpace===Ot&&(i+=`color0 = sRGBToLinear(color0);
	`),t.uvTransformation?(r=`vec2 transformedUv = vUv;
`+r,t.defines.set("UV","transformedUv")):t.defines.set("UV","vUv"),t.shaderParts.set(bt.FRAGMENT_HEAD,n),t.shaderParts.set(bt.FRAGMENT_MAIN_IMAGE,i),t.shaderParts.set(bt.FRAGMENT_MAIN_UV,r);for(const[l,u]of t.shaderParts)u!==null&&t.shaderParts.set(l,u.trim().replace(/^#/,`
#`));this.skipRendering=e===0,this.needsSwap=!this.skipRendering,this.fullscreenMaterial.setShaderData(t)}recompile(){this.updateMaterial()}getDepthTexture(){return this.fullscreenMaterial.depthBuffer}setDepthTexture(t,e=rs){this.fullscreenMaterial.depthBuffer=t,this.fullscreenMaterial.depthPacking=e;for(const n of this.effects)n.setDepthTexture(t,e)}render(t,e,n,i,r){for(const s of this.effects)s.update(t,e,i);if(!this.skipRendering||this.renderToScreen){const s=this.fullscreenMaterial;s.inputBuffer=e.texture,s.time+=i*this.timeScale,t.setRenderTarget(this.renderToScreen?null:n),t.render(this.scene,this.camera)}}setSize(t,e){this.fullscreenMaterial.setSize(t,e);for(const n of this.effects)n.setSize(t,e)}initialize(t,e,n){this.renderer=t;for(const i of this.effects)i.initialize(t,e,n);this.updateMaterial(),n!==void 0&&n!==Rn&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}dispose(){super.dispose();for(const t of this.effects)t.removeEventListener("change",this.listener),t.dispose()}handleEvent(t){switch(t.type){case"change":this.recompile();break}}},lU=class extends Ii{constructor(t,e,{renderTarget:n,resolutionScale:i=1,width:r=Ri.AUTO_SIZE,height:s=Ri.AUTO_SIZE,resolutionX:l=r,resolutionY:u=s}={}){super("NormalPass"),this.needsSwap=!1,this.renderPass=new B1(t,e,new f2);const f=this.renderPass;f.ignoreBackground=!0,f.skipShadowMapUpdate=!0;const d=f.getClearPass();d.overrideClearColor=new Ct(7829503),d.overrideClearAlpha=1,this.renderTarget=n,this.renderTarget===void 0&&(this.renderTarget=new ti(1,1,{minFilter:ei,magFilter:ei}),this.renderTarget.texture.name="NormalPass.Target");const h=this.resolution=new Ri(this,l,u,i);h.addEventListener("change",m=>this.setSize(h.baseWidth,h.baseHeight))}set mainScene(t){this.renderPass.mainScene=t}set mainCamera(t){this.renderPass.mainCamera=t}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}getResolution(){return this.resolution}getResolutionScale(){return this.resolution.scale}setResolutionScale(t){this.resolution.scale=t}render(t,e,n,i,r){const s=this.renderToScreen?null:this.renderTarget;this.renderPass.render(t,s,s)}setSize(t,e){const n=this.resolution;n.setBaseSize(t,e),this.renderTarget.setSize(n.width,n.height)}};const H1=We.createContext(null),AS=t=>(t.getAttributes()&Dr.CONVOLUTION)===Dr.CONVOLUTION,uU=jf.memo(We.forwardRef(({children:t,camera:e,scene:n,resolutionScale:i,enabled:r=!0,renderPriority:s=1,autoClear:l=!0,depthBuffer:u,enableNormalPass:f,stencilBuffer:d,multisampling:h=8,frameBufferType:m=nl},v)=>{const{gl:_,scene:x,camera:w,size:E}=Xd(),g=n||x,S=e||w,[M,A,I]=We.useMemo(()=>{const O=bN(),P=new iI(_,{depthBuffer:u,stencilBuffer:d,multisampling:h>0&&O?h:0,frameBufferType:m});P.addPass(new B1(g,S));let C=null,U=null;return f&&(U=new lU(g,S),U.enabled=!1,P.addPass(U),i!==void 0&&O&&(C=new eU({normalBuffer:U.texture,resolutionScale:i}),C.enabled=!1,P.addPass(C))),[P,U,C]},[S,_,u,d,h,m,g,f,i]);We.useEffect(()=>M==null?void 0:M.setSize(E.width,E.height),[M,E]),y0((O,P)=>{if(r){const C=_.autoClear;_.autoClear=l,d&&!l&&_.clearStencil(),M.render(P),_.autoClear=C}},r?s:0);const N=We.useRef(null);We.useLayoutEffect(()=>{var O;const P=[],C=(O=N.current)==null?void 0:O.__r3f;if(C&&M){const U=C.objects;for(let K=0;K<U.length;K++){const Y=U[K];if(Y instanceof Ed){const se=[Y];if(!AS(Y)){let ie=null;for(;(ie=U[K+1])instanceof Ed&&!AS(ie);)se.push(ie),K++}const le=new aU(S,...se);P.push(le)}else Y instanceof Ii&&P.push(Y)}for(const K of P)M==null||M.addPass(K);A&&(A.enabled=!0),I&&(I.enabled=!0)}return()=>{for(const U of P)M==null||M.removePass(U);A&&(A.enabled=!1),I&&(I.enabled=!1)}},[M,t,S,A,I]),We.useEffect(()=>{const O=_.toneMapping;return _.toneMapping=Pr,()=>{_.toneMapping=O}},[_]);const L=We.useMemo(()=>({composer:M,normalPass:A,downSamplingPass:I,resolutionScale:i,camera:S,scene:g}),[M,A,I,i,S,g]);return We.useImperativeHandle(v,()=>M,[M]),tt.jsx(H1.Provider,{value:L,children:tt.jsx("group",{ref:N,children:t})})}));let cU=0;const CS=new WeakMap,fU=(t,e)=>jf.forwardRef(function({blendFunction:i=e==null?void 0:e.blendFunction,opacity:r=e==null?void 0:e.opacity,...s},l){let u=CS.get(t);if(!u){const h=`@react-three/postprocessing/${t.name}-${cU++}`;Wd({[h]:t}),CS.set(t,u=h)}const f=Xd(h=>h.camera),d=jf.useMemo(()=>{var h,m;return[...(h=e==null?void 0:e.args)!=null?h:[],...(m=s.args)!=null?m:[{...e,...s}]]},[JSON.stringify(s)]);return tt.jsx(u,{camera:f,"blendMode-blendFunction":i,"blendMode-opacity-value":r,...s,ref:l,args:d})}),dU=We.forwardRef(function({blendFunction:e,worldFocusDistance:n,worldFocusRange:i,focusDistance:r,focusRange:s,focalLength:l,bokehScale:u,resolutionScale:f,resolutionX:d,resolutionY:h,width:m,height:v,target:_,depthTexture:x,...w},E){const{camera:g}=We.useContext(H1),S=_!=null,M=We.useMemo(()=>{const A=new QI(g,{blendFunction:e,worldFocusDistance:n,worldFocusRange:i,focusDistance:r,focusRange:s,focalLength:l,bokehScale:u,resolutionScale:f,resolutionX:d,resolutionY:h,width:m,height:v});S&&(A.target=new X),x&&A.setDepthTexture(x.texture,x.packing);const I=A.maskPass;return I.maskFunction=Yd.MULTIPLY_RGB_SET_ALPHA,A},[g,e,n,i,r,s,l,u,f,d,h,m,v,S,x]);return We.useEffect(()=>()=>{M.dispose()},[M]),tt.jsx("primitive",{...w,ref:E,object:M,target:_})}),hU=fU(nU);Wd(YN);const Tf=()=>Math.max(.2,Math.random());function pU({curve:t,color:e}){const n=We.useRef();return y0((i,r)=>n.current.uniforms.dashOffset.value-=r/100),tt.jsxs("mesh",{children:[tt.jsx("meshLineGeometry",{points:t}),tt.jsx("meshLineMaterial",{ref:n,transparent:!0,lineWidth:.01,color:e,dashArray:.1,dashRatio:.99})]})}function mU({count:t,colors:e,radius:n=10}){const i=We.useMemo(()=>new Array(t).fill().map(()=>{const r=new X(Math.sin(0)*n*Tf(),Math.cos(0)*n*Tf(),0),s=new Array(30).fill().map((u,f)=>{const d=f/20*Math.PI*2;return r.add(new X(Math.sin(d)*n*Tf(),Math.cos(d)*n*Tf(),0)).clone()}),l=new c2(s).getPoints(100);return{color:e[parseInt(e.length*Math.random())],curve:l}}),[t,n,e]);return tt.jsx("group",{position:[-n*2,-n,0],children:i.map((r,s)=>tt.jsx(pU,{...r},s))})}const gU="/assets/bg-d2f10cc1.jpg",vU="/assets/stars-3a2357a5.png",_U="/assets/ground-c720b933.png",yU="/assets/beast1-f75e4457.png",xU="/assets/beast2-8077dd17.png",SU="/assets/beast3-36f98e31.png",EU="/assets/beast4-7a29e7c3.png",MU="/assets/beast5-b7c5407d.png",TU="/assets/beast6-b174d2fc.png",wU="/assets/leaves1-79336cd2.png",AU="/assets/leaves2-66610b6e.png",CU=FN({textr:null,movement:[0,0,0],scale:1,factor:0,wiggle:0,time:0},` uniform float time;
    uniform vec2 resolution;
    uniform float wiggle;
    varying vec2 vUv;
    varying vec3 vNormal;
    void main()	{
      vUv = uv;
      vec3 transformed = vec3(position);
      if (wiggle > 0.) {
        float theta = sin(time + position.y) / 2.0 * wiggle;
        float c = cos(theta);
        float s = sin(theta);
        mat3 m = mat3(c, 0, s, 0, 1, 0, -s, 0, c);
        transformed = transformed * m;
        vNormal = vNormal * m;
      }
      gl_Position = projectionMatrix * modelViewMatrix * vec4(transformed, 1.);
    }`,` uniform float time;
    uniform vec2 resolution;
    uniform float factor;
    uniform float scale;
    uniform vec3 movement;
    uniform sampler2D textr;
    varying vec2 vUv;
    void main()	{
      vec2 uv = vUv / scale + movement.xy * factor;
      vec4 color = texture2D(textr, uv);
      if (color.a < 0.1) discard;
      gl_FragColor = vec4(color.rgb, .1);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
    }`);Wd({LayerMaterial:CU});const RS=[yU,xU,SU,EU,MU,TU],RU=RS[Math.floor(Math.random()*RS.length)];function PU(){const t=SS(1600,1e3,1.05),e=SS(2200,1e3,1.05),n=x0([gU,vU,_U,RU,wU,AU]),i=We.useRef(),r=We.useRef([]),[s]=We.useState(()=>new X),[l]=We.useState(()=>new X),u=[{texture:n[0],x:0,y:0,z:0,factor:.005,scale:e},{texture:n[1],x:0,y:0,z:10,factor:.005,scale:e},{texture:n[2],x:0,y:0,z:20,scale:e},{texture:n[3],x:0,y:0,z:30,scaleFactor:.83,scale:t},{texture:n[4],x:0,y:0,z:40,factor:.03,scaleFactor:1,wiggle:.6,scale:e},{texture:n[5],x:-20,y:-20,z:49,factor:.04,scaleFactor:1.3,wiggle:1,scale:e}];return y0((f,d)=>{s.lerp(l.set(f.pointer.x,f.pointer.y*.2,0),.2),i.current.position.x=Gf.lerp(i.current.position.x,f.pointer.x*20,.05),i.current.rotation.x=Gf.lerp(i.current.rotation.x,f.pointer.y/20,.05),i.current.rotation.y=Gf.lerp(i.current.rotation.y,-f.pointer.x/2,.05),r.current[4].uniforms.time.value=r.current[5].uniforms.time.value+=d},1),tt.jsxs("group",{ref:i,children:[tt.jsx(mU,{count:20,radius:80,colors:["orange"]}),u.map(({scale:f,texture:d,ref:h,factor:m=0,scaleFactor:v=1,wiggle:_=0,x,y:w,z:E},g)=>tt.jsx(KN,{scale:f,args:[1,1,_?10:1,_?10:1],position:[x,w,E],ref:h,children:tt.jsx("layerMaterial",{movement:s,textr:d,factor:m,ref:S=>r.current[g]=S,wiggle:_,scale:v})},g))]})}function DU(){const t=We.useRef();return We.useLayoutEffect(()=>{const e=t.current.maskPass.getFullscreenMaterial();e.maskFunction=Yd.MULTIPLY_RGB_SET_ALPHA}),tt.jsxs(uU,{disableNormalPass:!0,multisampling:0,children:[tt.jsx(dU,{ref:t,target:[0,0,30],bokehScale:8,focalLength:.1,width:1024}),tt.jsx(hU,{})]})}function LU(){return tt.jsx("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#010101"},children:tt.jsx("img",{src:"/ogimage.png",alt:"El gnome d'Arpispas",style:{width:"100%",height:"100%",objectFit:"cover"}})})}function NU(){const[t,e]=We.useState(null);return t?tt.jsx(LU,{}):tt.jsxs(IU,{onError:e,children:[tt.jsx(PU,{}),tt.jsx(DU,{})]})}function IU({children:t,onError:e}){Wd({Mesh:ar,PlaneGeometry:Uu,Group:Wl});const n=We.useRef(null),i=We.useRef(null);return We.useLayoutEffect(()=>{try{i.current||(i.current=LN(n.current).configure({events:UN,orthographic:!0,gl:{antialias:!1},camera:{zoom:5,position:[0,0,200],far:300,near:50},onCreated:s=>{s.events.connect(document.getElementById("root")),s.setEvents({compute:(l,u)=>{u.pointer.set(l.clientX/u.size.width*2-1,-(l.clientY/u.size.height)*2+1),u.raycaster.setFromCamera(u.pointer,u.camera)}})}}));const r=()=>i.current.configure({width:window.innerWidth,height:window.innerHeight});return window.addEventListener("resize",r),i.current.render(t),()=>window.removeEventListener("resize",r)}catch(r){e==null||e(r)}},[t,e]),tt.jsx("canvas",{ref:n,style:{position:"relative",width:"100%",height:"100%",overflow:"hidden",display:"block"}})}const UU=CC(t=>({count:1,inc:()=>t(e=>({count:e.count+1}))}));function bU(){const{count:t,inc:e}=UU();return tt.jsxs("div",{className:"snippet-container",children:[tt.jsx("span",{children:t}),tt.jsx("button",{onClick:e,children:"one up"})]})}function FU(){return tt.jsxs(tt.Fragment,{children:[tt.jsx(NU,{}),tt.jsxs("div",{className:"main",children:[tt.jsx("div",{className:"info",children:tt.jsx("div",{className:"info-container",children:tt.jsx(bU,{})})}),tt.jsx(RC,{})]})]})}HM(document.getElementById("root")).render(tt.jsx(FU,{}));

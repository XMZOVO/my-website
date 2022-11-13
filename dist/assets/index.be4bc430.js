(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();const E={};function X(e){E.context=e}const Ve=(e,t)=>e===t,Se=Symbol("solid-proxy"),He=Symbol("solid-track"),ne={equals:Ve};let Ee=Te;const B=1,re=2,Pe={owned:null,cleanups:null,context:null,owner:null},ce={};var b=null;let _=null,w=null,C=null,q=null,de=0;function J(e,t){const n=w,r=b,s=e.length===0,o=s?Pe:{owned:null,cleanups:null,context:null,owner:t||r},l=s?e:()=>e(()=>T(()=>me(o)));b=o,w=null;try{return j(l,!0)}finally{w=n,b=r}}function k(e,t){t=t?Object.assign({},ne,t):ne;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},r=s=>(typeof s=="function"&&(s=s(n.value)),Oe(n,s));return[Le.bind(n),r]}function we(e,t,n){const r=le(e,t,!0,B);H(r)}function Y(e,t,n){const r=le(e,t,!1,B);H(r)}function We(e,t,n){Ee=et;const r=le(e,t,!1,B);r.user=!0,q?q.push(r):H(r)}function P(e,t,n){n=n?Object.assign({},ne,n):ne;const r=le(e,t,!0,0);return r.observers=null,r.observerSlots=null,r.comparator=n.equals||void 0,H(r),Le.bind(r)}function Ge(e,t,n){let r,s,o;arguments.length===2&&typeof t=="object"||arguments.length===1?(r=!0,s=e,o=t||{}):(r=e,s=t,o=n||{});let l=null,i=ce,a=null,c=!1,u="initialValue"in o,d=typeof r=="function"&&P(r);const h=new Set,[y,p]=(o.storage||k)(o.initialValue),[R,O]=k(void 0),[N,S]=k(void 0,{equals:!1}),[v,x]=k(u?"ready":"unresolved");if(E.context){a=`${E.context.id}${E.context.count++}`;let f;o.ssrLoadFrom==="initial"?i=o.initialValue:E.load&&(f=E.load(a))&&(i=f[0])}function L(f,g,A,I){return l===f&&(l=null,u=!0,(f===i||g===i)&&o.onHydrated&&queueMicrotask(()=>o.onHydrated(I,{value:g})),i=ce,D(g,A)),g}function D(f,g){j(()=>{g||p(()=>f),x(g?"errored":"ready"),O(g);for(const A of h.keys())A.decrement();h.clear()},!1)}function W(){const f=Ye,g=y(),A=R();if(A&&!l)throw A;return w&&!w.user&&f&&we(()=>{N(),l&&(f.resolved||h.has(f)||(f.increment(),h.add(f)))}),g}function m(f=!0){if(f!==!1&&c)return;c=!1;const g=d?d():r;if(g==null||g===!1){L(l,T(y));return}const A=i!==ce?i:T(()=>s(g,{value:y(),refetching:f}));return typeof A!="object"||!(A&&"then"in A)?(L(l,A),A):(l=A,c=!0,queueMicrotask(()=>c=!1),j(()=>{x(u?"refreshing":"pending"),S()},!1),A.then(I=>L(A,I,void 0,g),I=>L(A,void 0,Ne(I))))}return Object.defineProperties(W,{state:{get:()=>v()},error:{get:()=>R()},loading:{get(){const f=v();return f==="pending"||f==="refreshing"}},latest:{get(){if(!u)return W();const f=R();if(f&&!l)throw f;return y()}}}),d?we(()=>m(!1)):m(!1),[W,{refetch:m,mutate:p}]}function Kt(e){return j(e,!1)}function T(e){let t,n=w;return w=null,t=e(),w=n,t}function Ce(e,t,n){const r=Array.isArray(e);let s,o=n&&n.defer;return l=>{let i;if(r){i=Array(e.length);for(let c=0;c<e.length;c++)i[c]=e[c]()}else i=e();if(o){o=!1;return}const a=T(()=>t(i,s,l));return s=i,a}}function Mt(e){We(()=>T(e))}function pe(e){return b===null||(b.cleanups===null?b.cleanups=[e]:b.cleanups.push(e)),e}function Ft(){return w}function Xe(){return b}function Je(e,t){const n=b;b=e;try{return j(t,!0)}finally{b=n}}function Qe(e){const t=w,n=b;return Promise.resolve().then(()=>{w=t,b=n;let r;return j(e,!1),w=b=null,r?r.done:void 0})}function Re(e,t){const n=Symbol("context");return{id:n,Provider:tt(n),defaultValue:e}}function ge(e){let t;return(t=Ie(b,e.id))!==void 0?t:e.defaultValue}function ye(e){const t=P(e),n=P(()=>fe(t()));return n.toArray=()=>{const r=n();return Array.isArray(r)?r:r!=null?[r]:[]},n}let Ye;function Le(){const e=_;if(this.sources&&(this.state||e))if(this.state===B||e)H(this);else{const t=C;C=null,j(()=>oe(this),!1),C=t}if(w){const t=this.observers?this.observers.length:0;w.sources?(w.sources.push(this),w.sourceSlots.push(t)):(w.sources=[this],w.sourceSlots=[t]),this.observers?(this.observers.push(w),this.observerSlots.push(w.sources.length-1)):(this.observers=[w],this.observerSlots=[w.sources.length-1])}return this.value}function Oe(e,t,n){let r=e.value;return(!e.comparator||!e.comparator(r,t))&&(e.value=t,e.observers&&e.observers.length&&j(()=>{for(let s=0;s<e.observers.length;s+=1){const o=e.observers[s],l=_&&_.running;l&&_.disposed.has(o),(l&&!o.tState||!l&&!o.state)&&(o.pure?C.push(o):q.push(o),o.observers&&ke(o)),l||(o.state=B)}if(C.length>1e6)throw C=[],new Error},!1)),t}function H(e){if(!e.fn)return;me(e);const t=b,n=w,r=de;w=b=e,ze(e,e.value,r),w=n,b=t}function ze(e,t,n){let r;try{r=e.fn(t)}catch(s){e.pure&&(e.state=B),$e(s)}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?Oe(e,r):e.value=r,e.updatedAt=n)}function le(e,t,n,r=B,s){const o={fn:e,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:b,context:null,pure:n};return b===null||b!==Pe&&(b.owned?b.owned.push(o):b.owned=[o]),o}function se(e){const t=_;if(e.state===0||t)return;if(e.state===re||t)return oe(e);if(e.suspense&&T(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<de);)(e.state||t)&&n.push(e);for(let r=n.length-1;r>=0;r--)if(e=n[r],e.state===B||t)H(e);else if(e.state===re||t){const s=C;C=null,j(()=>oe(e,n[0]),!1),C=s}}function j(e,t){if(C)return e();let n=!1;t||(C=[]),q?n=!0:q=[],de++;try{const r=e();return Ze(n),r}catch(r){C||(q=null),$e(r)}}function Ze(e){if(C&&(Te(C),C=null),e)return;const t=q;q=null,t.length&&j(()=>Ee(t),!1)}function Te(e){for(let t=0;t<e.length;t++)se(e[t])}function et(e){let t,n=0;for(t=0;t<e.length;t++){const r=e[t];r.user?e[n++]=r:se(r)}for(E.context&&X(),t=0;t<n;t++)se(e[t])}function oe(e,t){const n=_;e.state=0;for(let r=0;r<e.sources.length;r+=1){const s=e.sources[r];s.sources&&(s.state===B||n?s!==t&&se(s):(s.state===re||n)&&oe(s,t))}}function ke(e){const t=_;for(let n=0;n<e.observers.length;n+=1){const r=e.observers[n];(!r.state||t)&&(r.state=re,r.pure?C.push(r):q.push(r),r.observers&&ke(r))}}function me(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),r=e.sourceSlots.pop(),s=n.observers;if(s&&s.length){const o=s.pop(),l=n.observerSlots.pop();r<s.length&&(o.sourceSlots[l]=r,s[r]=o,n.observerSlots[r]=l)}}if(e.owned){for(t=0;t<e.owned.length;t++)me(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function Ne(e){return e instanceof Error||typeof e=="string"?e:new Error("Unknown error")}function $e(e){throw e=Ne(e),e}function Ie(e,t){return e?e.context&&e.context[t]!==void 0?e.context[t]:Ie(e.owner,t):void 0}function fe(e){if(typeof e=="function"&&!e.length)return fe(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const r=fe(e[n]);Array.isArray(r)?t.push.apply(t,r):t.push(r)}return t}return e}function tt(e,t){return function(r){let s;return Y(()=>s=T(()=>(b.context={[e]:r.value},ye(()=>r.children))),void 0),s}}const nt=Symbol("fallback");function be(e){for(let t=0;t<e.length;t++)e[t]()}function rt(e,t,n={}){let r=[],s=[],o=[],l=0,i=t.length>1?[]:null;return pe(()=>be(o)),()=>{let a=e()||[],c,u;return a[He],T(()=>{let h=a.length,y,p,R,O,N,S,v,x,L;if(h===0)l!==0&&(be(o),o=[],r=[],s=[],l=0,i&&(i=[])),n.fallback&&(r=[nt],s[0]=J(D=>(o[0]=D,n.fallback())),l=1);else if(l===0){for(s=new Array(h),u=0;u<h;u++)r[u]=a[u],s[u]=J(d);l=h}else{for(R=new Array(h),O=new Array(h),i&&(N=new Array(h)),S=0,v=Math.min(l,h);S<v&&r[S]===a[S];S++);for(v=l-1,x=h-1;v>=S&&x>=S&&r[v]===a[x];v--,x--)R[x]=s[v],O[x]=o[v],i&&(N[x]=i[v]);for(y=new Map,p=new Array(x+1),u=x;u>=S;u--)L=a[u],c=y.get(L),p[u]=c===void 0?-1:c,y.set(L,u);for(c=S;c<=v;c++)L=r[c],u=y.get(L),u!==void 0&&u!==-1?(R[u]=s[c],O[u]=o[c],i&&(N[u]=i[c]),u=p[u],y.set(L,u)):o[c]();for(u=S;u<h;u++)u in R?(s[u]=R[u],o[u]=O[u],i&&(i[u]=N[u],i[u](u))):s[u]=J(d);s=s.slice(0,l=h),r=a.slice(0)}return s});function d(h){if(o[u]=h,i){const[y,p]=k(u);return i[u]=p,t(a[u],y)}return t(a[u])}}}function $(e,t){return T(()=>e(t||{}))}function ee(){return!0}const st={get(e,t,n){return t===Se?n:e.get(t)},has(e,t){return e.has(t)},set:ee,deleteProperty:ee,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:ee,deleteProperty:ee}},ownKeys(e){return e.keys()}};function ae(e){return(e=typeof e=="function"?e():e)==null?{}:e}function ot(...e){if(e.some(n=>n&&(Se in n||typeof n=="function")))return new Proxy({get(n){for(let r=e.length-1;r>=0;r--){const s=ae(e[r])[n];if(s!==void 0)return s}},has(n){for(let r=e.length-1;r>=0;r--)if(n in ae(e[r]))return!0;return!1},keys(){const n=[];for(let r=0;r<e.length;r++)n.push(...Object.keys(ae(e[r])));return[...new Set(n)]}},st);const t={};for(let n=e.length-1;n>=0;n--)if(e[n]){const r=Object.getOwnPropertyDescriptors(e[n]);for(const s in r)s in t||Object.defineProperty(t,s,{enumerable:!0,get(){for(let o=e.length-1;o>=0;o--){const l=(e[o]||{})[s];if(l!==void 0)return l}}})}return t}function it(e){let t,n;const r=s=>{const o=E.context;if(o){const[i,a]=k();(n||(n=e())).then(c=>{X(o),a(()=>c.default),X()}),t=i}else if(t){const i=t();if(i)return i(s)}else{const[i]=Ge(()=>(n||(n=e())).then(a=>a.default));t=i}let l;return P(()=>(l=t())&&T(()=>{if(!o)return l(s);const i=E.context;X(o);const a=l(s);return X(i),a}))};return r.preload=()=>n||((n=e()).then(s=>t=()=>s.default),n),r}function Vt(e){const t="fallback"in e&&{fallback:()=>e.fallback};return P(rt(()=>e.each,e.children,t||void 0))}function je(e){let t=!1;const n=e.keyed,r=P(()=>e.when,void 0,{equals:(s,o)=>t?s===o:!s==!o});return P(()=>{const s=r();if(s){const o=e.children,l=typeof o=="function"&&o.length>0;return t=n||l,l?T(()=>o(s)):o}return e.fallback})}function lt(e,t,n){let r=n.length,s=t.length,o=r,l=0,i=0,a=t[s-1].nextSibling,c=null;for(;l<s||i<o;){if(t[l]===n[i]){l++,i++;continue}for(;t[s-1]===n[o-1];)s--,o--;if(s===l){const u=o<r?i?n[i-1].nextSibling:n[o-i]:a;for(;i<o;)e.insertBefore(n[i++],u)}else if(o===i)for(;l<s;)(!c||!c.has(t[l]))&&t[l].remove(),l++;else if(t[l]===n[o-1]&&n[i]===t[s-1]){const u=t[--s].nextSibling;e.insertBefore(n[i++],t[l++].nextSibling),e.insertBefore(n[--o],u),t[s]=n[o]}else{if(!c){c=new Map;let d=i;for(;d<o;)c.set(n[d],d++)}const u=c.get(t[l]);if(u!=null)if(i<u&&u<o){let d=l,h=1,y;for(;++d<s&&d<o&&!((y=c.get(t[d]))==null||y!==u+h);)h++;if(h>u-i){const p=t[l];for(;i<u;)e.insertBefore(n[i++],p)}else e.replaceChild(n[i++],t[l++])}else l++;else t[l++].remove()}}}const Ae="_$DX_DELEGATE";function ut(e,t,n,r={}){let s;return J(o=>{s=o,t===document?e():at(t,e(),t.firstChild?null:void 0,n)},r.owner),()=>{s(),t.textContent=""}}function Ht(e,t,n){const r=document.createElement("template");r.innerHTML=e;let s=r.content.firstChild;return n&&(s=s.firstChild),s}function ct(e,t=window.document){const n=t[Ae]||(t[Ae]=new Set);for(let r=0,s=e.length;r<s;r++){const o=e[r];n.has(o)||(n.add(o),t.addEventListener(o,ft))}}function Wt(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function Gt(e,t){t==null?e.removeAttribute("class"):e.className=t}function at(e,t,n,r){if(n!==void 0&&!r&&(r=[]),typeof t!="function")return ie(e,t,r,n);Y(s=>ie(e,t(),s,n),r)}function ft(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),E.registry&&!E.done&&(E.done=!0,document.querySelectorAll("[id^=pl-]").forEach(r=>r.remove()));n!==null;){const r=n[t];if(r&&!n.disabled){const s=n[`${t}Data`];if(s!==void 0?r.call(n,s,e):r.call(n,e),e.cancelBubble)return}n=n.host&&n.host!==n&&n.host instanceof Node?n.host:n.parentNode}}function ie(e,t,n,r,s){for(E.context&&!n&&(n=[...e.childNodes]);typeof n=="function";)n=n();if(t===n)return n;const o=typeof t,l=r!==void 0;if(e=l&&n[0]&&n[0].parentNode||e,o==="string"||o==="number"){if(E.context)return n;if(o==="number"&&(t=t.toString()),l){let i=n[0];i&&i.nodeType===3?i.data=t:i=document.createTextNode(t),n=F(e,n,r,i)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||o==="boolean"){if(E.context)return n;n=F(e,n,r)}else{if(o==="function")return Y(()=>{let i=t();for(;typeof i=="function";)i=i();n=ie(e,i,n,r)}),()=>n;if(Array.isArray(t)){const i=[],a=n&&Array.isArray(n);if(he(i,t,n,s))return Y(()=>n=ie(e,i,n,r,!0)),()=>n;if(E.context){if(!i.length)return n;for(let c=0;c<i.length;c++)if(i[c].parentNode)return n=i}if(i.length===0){if(n=F(e,n,r),l)return n}else a?n.length===0?ve(e,i,r):lt(e,n,i):(n&&F(e),ve(e,i));n=i}else if(t instanceof Node){if(E.context&&t.parentNode)return n=l?[t]:t;if(Array.isArray(n)){if(l)return n=F(e,n,r,t);F(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function he(e,t,n,r){let s=!1;for(let o=0,l=t.length;o<l;o++){let i=t[o],a=n&&n[o];if(i instanceof Node)e.push(i);else if(!(i==null||i===!0||i===!1))if(Array.isArray(i))s=he(e,i,a)||s;else if(typeof i=="function")if(r){for(;typeof i=="function";)i=i();s=he(e,Array.isArray(i)?i:[i],Array.isArray(a)?a:[a])||s}else e.push(i),s=!0;else{const c=String(i);a&&a.nodeType===3&&a.data===c?e.push(a):e.push(document.createTextNode(c))}}return s}function ve(e,t,n=null){for(let r=0,s=t.length;r<s;r++)e.insertBefore(t[r],n)}function F(e,t,n,r){if(n===void 0)return e.textContent="";const s=r||document.createTextNode("");if(t.length){let o=!1;for(let l=t.length-1;l>=0;l--){const i=t[l];if(s!==i){const a=i.parentNode===e;!o&&!l?a?e.replaceChild(s,i):e.insertBefore(s,n):a&&i.remove()}else o=!0}}else e.insertBefore(s,n);return[s]}const ht="modulepreload",dt=function(e){return"/"+e},xe={},pt=function(t,n,r){return!n||n.length===0?t():Promise.all(n.map(s=>{if(s=dt(s),s in xe)return;xe[s]=!0;const o=s.endsWith(".css"),l=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${l}`))return;const i=document.createElement("link");if(i.rel=o?"stylesheet":ht,o||(i.as="script",i.crossOrigin=""),i.href=s,document.head.appendChild(i),o)return new Promise((a,c)=>{i.addEventListener("load",a),i.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>t())};function gt(e,t,n){return e.addEventListener(t,n),()=>e.removeEventListener(t,n)}function yt([e,t],n,r){return[n?()=>n(e()):e,r?s=>t(r(s)):t]}function mt(e){try{return document.querySelector(e)}catch{return null}}function wt(e,t){const n=mt(`#${e}`);n?n.scrollIntoView():t&&window.scrollTo(0,0)}function bt(e,t,n,r){let s=!1;const o=i=>typeof i=="string"?{value:i}:i,l=yt(k(o(e()),{equals:(i,a)=>i.value===a.value}),void 0,i=>(!s&&t(i),i));return n&&pe(n((i=e())=>{s=!0,l[1](o(i)),s=!1})),{signal:l,utils:r}}function At(e){if(e){if(Array.isArray(e))return{signal:e}}else return{signal:k({value:""})};return e}function vt(){return bt(()=>({value:window.location.pathname+window.location.search+window.location.hash,state:history.state}),({value:e,replace:t,scroll:n,state:r})=>{t?window.history.replaceState(r,"",e):window.history.pushState(r,"",e),wt(window.location.hash.slice(1),n)},e=>gt(window,"popstate",()=>e()),{go:e=>window.history.go(e)})}const xt=/^(?:[a-z0-9]+:)?\/\//i,St=/^\/+|\/+$/g;function Q(e,t=!1){const n=e.replace(St,"");return n?t||/^[?#]/.test(n)?n:"/"+n:""}function te(e,t,n){if(xt.test(t))return;const r=Q(e),s=n&&Q(n);let o="";return!s||t.startsWith("/")?o=r:s.toLowerCase().indexOf(r.toLowerCase())!==0?o=r+s:o=s,(o||"/")+Q(t,!o)}function Et(e,t){if(e==null)throw new Error(t);return e}function qe(e,t){return Q(e).replace(/\/*(\*.*)?$/g,"")+Q(t)}function Pt(e){const t={};return e.searchParams.forEach((n,r)=>{t[r]=n}),t}function V(e,t){return decodeURIComponent(t?e.replace(/\+/g," "):e)}function Ct(e,t){const[n,r]=e.split("/*",2),s=n.split("/").filter(Boolean),o=s.length;return l=>{const i=l.split("/").filter(Boolean),a=i.length-o;if(a<0||a>0&&r===void 0&&!t)return null;const c={path:o?"":"/",params:{}};for(let u=0;u<o;u++){const d=s[u],h=i[u];if(d[0]===":")c.params[d.slice(1)]=h;else if(d.localeCompare(h,void 0,{sensitivity:"base"})!==0)return null;c.path+=`/${h}`}return r&&(c.params[r]=a?i.slice(-a).join("/"):""),c}}function Rt(e){const[t,n]=e.pattern.split("/*",2),r=t.split("/").filter(Boolean);return r.reduce((s,o)=>s+(o.startsWith(":")?2:3),r.length-(n===void 0?0:1))}function Be(e){const t=new Map,n=Xe();return new Proxy({},{get(r,s){return t.has(s)||Je(n,()=>t.set(s,P(()=>e()[s]))),t.get(s)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(e())}})}function Ue(e){let t=/(\/?\:[^\/]+)\?/.exec(e);if(!t)return[e];let n=e.slice(0,t.index),r=e.slice(t.index+t[0].length);const s=[n,n+=t[1]];for(;t=/^(\/\:[^\/]+)\?/.exec(r);)s.push(n+=t[1]),r=r.slice(t[0].length);return Ue(r).reduce((o,l)=>[...o,...s.map(i=>i+l)],[])}const Lt=100,_e=Re(),ue=Re(),De=()=>Et(ge(_e),"Make sure your app is wrapped in a <Router />");let z;const Ke=()=>z||ge(ue)||De().base;function Ot(e,t="",n){const{component:r,data:s,children:o}=e,l=!o||Array.isArray(o)&&!o.length,i={key:e,element:r?()=>$(r,{}):()=>{const{element:a}=e;return a===void 0&&n?$(n,{}):a},preload:e.component?r.preload:e.preload,data:s};return Me(e.path).reduce((a,c)=>{for(const u of Ue(c)){const d=qe(t,u),h=l?d:d.split("/*",1)[0];a.push({...i,originalPath:u,pattern:h,matcher:Ct(h,!l)})}return a},[])}function Tt(e,t=0){return{routes:e,score:Rt(e[e.length-1])*1e4-t,matcher(n){const r=[];for(let s=e.length-1;s>=0;s--){const o=e[s],l=o.matcher(n);if(!l)return null;r.unshift({...l,route:o})}return r}}}function Me(e){return Array.isArray(e)?e:[e]}function Fe(e,t="",n,r=[],s=[]){const o=Me(e);for(let l=0,i=o.length;l<i;l++){const a=o[l];if(a&&typeof a=="object"&&a.hasOwnProperty("path")){const c=Ot(a,t,n);for(const u of c){if(r.push(u),a.children)Fe(a.children,u.pattern,n,r,s);else{const d=Tt([...r],s.length);s.push(d)}r.pop()}}}return r.length?s:s.sort((l,i)=>i.score-l.score)}function kt(e,t){for(let n=0,r=e.length;n<r;n++){const s=e[n].matcher(t);if(s)return s}return[]}function Nt(e,t){const n=new URL("http://sar"),r=P(a=>{const c=e();try{return new URL(c,n)}catch{return console.error(`Invalid path ${c}`),a}},n,{equals:(a,c)=>a.href===c.href}),s=P(()=>V(r().pathname)),o=P(()=>V(r().search,!0)),l=P(()=>V(r().hash)),i=P(()=>"");return{get pathname(){return s()},get search(){return o()},get hash(){return l()},get state(){return t()},get key(){return i()},query:Be(Ce(o,()=>Pt(r())))}}function $t(e,t="",n,r){const{signal:[s,o],utils:l={}}=At(e),i=l.parsePath||(m=>m),a=l.renderPath||(m=>m),c=te("",t),u=void 0;if(c===void 0)throw new Error(`${c} is not a valid base path`);c&&!s().value&&o({value:c,replace:!0,scroll:!1});const[d,h]=k(!1),y=async m=>{h(!0);try{await Qe(m)}finally{h(!1)}},[p,R]=k(s().value),[O,N]=k(s().state),S=Nt(p,O),v=[],x={pattern:c,params:{},path:()=>c,outlet:()=>null,resolvePath(m){return te(c,m)}};if(n)try{z=x,x.data=n({data:void 0,params:{},location:S,navigate:D(x)})}finally{z=void 0}function L(m,f,g){T(()=>{if(typeof f=="number"){f&&(l.go?l.go(f):console.warn("Router integration does not support relative routing"));return}const{replace:A,resolve:I,scroll:K,state:U}={replace:!1,resolve:!0,scroll:!0,...g},M=I?m.resolvePath(f):te("",f);if(M===void 0)throw new Error(`Path '${f}' is not a routable path`);if(v.length>=Lt)throw new Error("Too many redirects");const G=p();if(M!==G||U!==O()){const Z=v.push({value:G,replace:A,scroll:K,state:O()});y(()=>{R(M),N(U)}).then(()=>{v.length===Z&&W({value:M,state:U})})}})}function D(m){return m=m||ge(ue)||x,(f,g)=>L(m,f,g)}function W(m){const f=v[0];f&&((m.value!==f.value||m.state!==f.state)&&o({...m,replace:f.replace,scroll:f.scroll}),v.length=0)}Y(()=>{const{value:m,state:f}=s();T(()=>{m!==p()&&y(()=>{R(m),N(f)})})});{let m=function(f){if(f.defaultPrevented||f.button!==0||f.metaKey||f.altKey||f.ctrlKey||f.shiftKey)return;const g=f.composedPath().find(Z=>Z instanceof Node&&Z.nodeName.toUpperCase()==="A");if(!g||!g.hasAttribute("link"))return;const A=g.href;if(g.target||!A&&!g.hasAttribute("state"))return;const I=(g.getAttribute("rel")||"").split(/\s+/);if(g.hasAttribute("download")||I&&I.includes("external"))return;const K=new URL(A),U=V(K.pathname);if(K.origin!==window.location.origin||c&&U&&!U.toLowerCase().startsWith(c.toLowerCase()))return;const M=i(U+V(K.search,!0)+V(K.hash)),G=g.getAttribute("state");f.preventDefault(),L(x,M,{resolve:!1,replace:g.hasAttribute("replace"),scroll:!g.hasAttribute("noscroll"),state:G&&JSON.parse(G)})};ct(["click"]),document.addEventListener("click",m),pe(()=>document.removeEventListener("click",m))}return{base:x,out:u,location:S,isRouting:d,renderPath:a,parsePath:i,navigatorFactory:D}}function It(e,t,n,r){const{base:s,location:o,navigatorFactory:l}=e,{pattern:i,element:a,preload:c,data:u}=r().route,d=P(()=>r().path),h=Be(()=>r().params);c&&c();const y={parent:t,pattern:i,get child(){return n()},path:d,params:h,data:t.data,outlet:a,resolvePath(p){return te(s.path(),p,d())}};if(u)try{z=y,y.data=u({data:t.data,params:h,location:o,navigate:l(y)})}finally{z=void 0}return y}const jt=e=>{const{source:t,url:n,base:r,data:s,out:o}=e,l=t||vt(),i=$t(l,r,s);return $(_e.Provider,{value:i,get children(){return e.children}})},qt=e=>{const t=De(),n=Ke(),r=ye(()=>e.children),s=P(()=>Fe(r(),qe(n.pattern,e.base||""),Ut)),o=P(()=>kt(s(),t.location.pathname));t.out&&t.out.matches.push(o().map(({route:c,path:u,params:d})=>({originalPath:c.originalPath,pattern:c.pattern,path:u,params:d})));const l=[];let i;const a=P(Ce(o,(c,u,d)=>{let h=u&&c.length===u.length;const y=[];for(let p=0,R=c.length;p<R;p++){const O=u&&u[p],N=c[p];d&&O&&N.route.key===O.route.key?y[p]=d[p]:(h=!1,l[p]&&l[p](),J(S=>{l[p]=S,y[p]=It(t,y[p-1]||n,()=>a()[p+1],()=>o()[p])}))}return l.splice(c.length).forEach(p=>p()),d&&h?d:(i=y[0],y)}));return $(je,{get when(){return a()&&i},children:c=>$(ue.Provider,{value:c,get children(){return c.outlet()}})})},Bt=e=>{const t=ye(()=>e.children);return ot(e,{get children(){return t()}})},Ut=()=>{const e=Ke();return $(je,{get when(){return e.child},children:t=>$(ue.Provider,{value:t,get children(){return t.outlet()}})})},_t=it(()=>pt(()=>import("./Grammar.6b330b77.js"),[])),Dt=()=>{const[e,t]=k(0);return setInterval(()=>t(n=>n+1),1e3),$(qt,{get children(){return $(Bt,{path:"/grammar",component:_t})}})};ut(()=>$(jt,{get children(){return $(Dt,{})}}),document.getElementById("root"));export{Se as $,Vt as F,je as S,He as a,Kt as b,k as c,We as d,$ as e,Y as f,Ft as g,Gt as h,at as i,ct as j,Mt as o,Wt as s,Ht as t};

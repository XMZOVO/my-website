(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();const x={};function G(e){x.context=e}const Ve=(e,t)=>e===t,ve=Symbol("solid-proxy"),te={equals:Ve};let xe=Le;const N=1,ne=2,Ae={owned:null,cleanups:null,context:null,owner:null},ue={};var y=null;let U=null,w=null,S=null,L=null,he=0;function Se(e,t){const n=w,r=y,o=e.length===0,s=o?Ae:{owned:null,cleanups:null,context:null,owner:t||r},l=o?e:()=>e(()=>P(()=>ge(s)));y=s,w=null;try{return T(l,!0)}finally{w=n,y=r}}function E(e,t){t=t?Object.assign({},te,t):te;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},r=o=>(typeof o=="function"&&(o=o(n.value)),Oe(n,o));return[Re.bind(n),r]}function ye(e,t,n){const r=ie(e,t,!0,N);F(r)}function J(e,t,n){const r=ie(e,t,!1,N);F(r)}function Fe(e,t,n){xe=ze;const r=ie(e,t,!1,N);r.user=!0,L?L.push(r):F(r)}function A(e,t,n){n=n?Object.assign({},te,n):te;const r=ie(e,t,!0,0);return r.observers=null,r.observerSlots=null,r.comparator=n.equals||void 0,F(r),Re.bind(r)}function He(e,t,n){let r,o,s;arguments.length===2&&typeof t=="object"||arguments.length===1?(r=!0,o=e,s=t||{}):(r=e,o=t,s=n||{});let l=null,i=ue,c=null,u=!1,f="initialValue"in s,h=typeof r=="function"&&A(r);const m=new Set,[b,g]=(s.storage||E)(s.initialValue),[$,k]=E(void 0),[_,B]=E(void 0,{equals:!1}),[I,O]=E(f?"ready":"unresolved");if(x.context){c=`${x.context.id}${x.context.count++}`;let a;s.ssrLoadFrom==="initial"?i=s.initialValue:x.load&&(a=x.load(c))&&(i=a[0])}function j(a,d,v,R){return l===a&&(l=null,f=!0,(a===i||d===i)&&s.onHydrated&&queueMicrotask(()=>s.onHydrated(R,{value:d})),i=ue,Y(d,v)),d}function Y(a,d){T(()=>{d||g(()=>a),O(d?"errored":"ready"),k(d);for(const v of m.keys())v.decrement();m.clear()},!1)}function H(){const a=Je,d=b(),v=$();if(v&&!l)throw v;return w&&!w.user&&a&&ye(()=>{_(),l&&(a.resolved||m.has(a)||(a.increment(),m.add(a)))}),d}function p(a=!0){if(a!==!1&&u)return;u=!1;const d=h?h():r;if(d==null||d===!1){j(l,P(b));return}const v=i!==ue?i:P(()=>o(d,{value:b(),refetching:a}));return typeof v!="object"||!(v&&"then"in v)?(j(l,v),v):(l=v,u=!0,queueMicrotask(()=>u=!1),T(()=>{O(f?"refreshing":"pending"),B()},!1),v.then(R=>j(v,R,void 0,d),R=>j(v,void 0,Ne(R))))}return Object.defineProperties(H,{state:{get:()=>I()},error:{get:()=>$()},loading:{get(){const a=I();return a==="pending"||a==="refreshing"}},latest:{get(){if(!f)return H();const a=$();if(a&&!l)throw a;return b()}}}),h?ye(()=>p(!1)):p(!1),[H,{refetch:p,mutate:g}]}function P(e){let t,n=w;return w=null,t=e(),w=n,t}function Pe(e,t,n){const r=Array.isArray(e);let o,s=n&&n.defer;return l=>{let i;if(r){i=Array(e.length);for(let u=0;u<e.length;u++)i[u]=e[u]()}else i=e();if(s){s=!1;return}const c=P(()=>t(i,o,l));return o=i,c}}function Ut(e){Fe(()=>P(e))}function Ee(e){return y===null||(y.cleanups===null?y.cleanups=[e]:y.cleanups.push(e)),e}function We(){return y}function Ge(e,t){const n=y;y=e;try{return T(t,!0)}finally{y=n}}function Xe(e){const t=w,n=y;return Promise.resolve().then(()=>{w=t,y=n;let r;return T(e,!1),w=y=null,r?r.done:void 0})}function Ce(e,t){const n=Symbol("context");return{id:n,Provider:Ze(n),defaultValue:e}}function de(e){let t;return(t=ke(y,e.id))!==void 0?t:e.defaultValue}function pe(e){const t=A(e),n=A(()=>ae(t()));return n.toArray=()=>{const r=n();return Array.isArray(r)?r:r!=null?[r]:[]},n}let Je;function Re(){const e=U;if(this.sources&&(this.state||e))if(this.state===N||e)F(this);else{const t=S;S=null,T(()=>oe(this),!1),S=t}if(w){const t=this.observers?this.observers.length:0;w.sources?(w.sources.push(this),w.sourceSlots.push(t)):(w.sources=[this],w.sourceSlots=[t]),this.observers?(this.observers.push(w),this.observerSlots.push(w.sources.length-1)):(this.observers=[w],this.observerSlots=[w.sources.length-1])}return this.value}function Oe(e,t,n){let r=e.value;return(!e.comparator||!e.comparator(r,t))&&(e.value=t,e.observers&&e.observers.length&&T(()=>{for(let o=0;o<e.observers.length;o+=1){const s=e.observers[o],l=U&&U.running;l&&U.disposed.has(s),(l&&!s.tState||!l&&!s.state)&&(s.pure?S.push(s):L.push(s),s.observers&&Te(s)),l||(s.state=N)}if(S.length>1e6)throw S=[],new Error},!1)),t}function F(e){if(!e.fn)return;ge(e);const t=y,n=w,r=he;w=y=e,Qe(e,e.value,r),w=n,y=t}function Qe(e,t,n){let r;try{r=e.fn(t)}catch(o){e.pure&&(e.state=N),$e(o)}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?Oe(e,r):e.value=r,e.updatedAt=n)}function ie(e,t,n,r=N,o){const s={fn:e,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:y,context:null,pure:n};return y===null||y!==Ae&&(y.owned?y.owned.push(s):y.owned=[s]),s}function re(e){const t=U;if(e.state===0||t)return;if(e.state===ne||t)return oe(e);if(e.suspense&&P(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<he);)(e.state||t)&&n.push(e);for(let r=n.length-1;r>=0;r--)if(e=n[r],e.state===N||t)F(e);else if(e.state===ne||t){const o=S;S=null,T(()=>oe(e,n[0]),!1),S=o}}function T(e,t){if(S)return e();let n=!1;t||(S=[]),L?n=!0:L=[],he++;try{const r=e();return Ye(n),r}catch(r){S||(L=null),$e(r)}}function Ye(e){if(S&&(Le(S),S=null),e)return;const t=L;L=null,t.length&&T(()=>xe(t),!1)}function Le(e){for(let t=0;t<e.length;t++)re(e[t])}function ze(e){let t,n=0;for(t=0;t<e.length;t++){const r=e[t];r.user?e[n++]=r:re(r)}for(x.context&&G(),t=0;t<n;t++)re(e[t])}function oe(e,t){const n=U;e.state=0;for(let r=0;r<e.sources.length;r+=1){const o=e.sources[r];o.sources&&(o.state===N||n?o!==t&&re(o):(o.state===ne||n)&&oe(o,t))}}function Te(e){const t=U;for(let n=0;n<e.observers.length;n+=1){const r=e.observers[n];(!r.state||t)&&(r.state=ne,r.pure?S.push(r):L.push(r),r.observers&&Te(r))}}function ge(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),r=e.sourceSlots.pop(),o=n.observers;if(o&&o.length){const s=o.pop(),l=n.observerSlots.pop();r<o.length&&(s.sourceSlots[l]=r,o[r]=s,n.observerSlots[r]=l)}}if(e.owned){for(t=0;t<e.owned.length;t++)ge(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function Ne(e){return e instanceof Error||typeof e=="string"?e:new Error("Unknown error")}function $e(e){throw e=Ne(e),e}function ke(e,t){return e?e.context&&e.context[t]!==void 0?e.context[t]:ke(e.owner,t):void 0}function ae(e){if(typeof e=="function"&&!e.length)return ae(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const r=ae(e[n]);Array.isArray(r)?t.push.apply(t,r):t.push(r)}return t}return e}function Ze(e,t){return function(r){let o;return J(()=>o=P(()=>(y.context={[e]:r.value},pe(()=>r.children))),void 0),o}}function C(e,t){return P(()=>e(t||{}))}function Z(){return!0}const et={get(e,t,n){return t===ve?n:e.get(t)},has(e,t){return e.has(t)},set:Z,deleteProperty:Z,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:Z,deleteProperty:Z}},ownKeys(e){return e.keys()}};function ce(e){return(e=typeof e=="function"?e():e)==null?{}:e}function tt(...e){if(e.some(n=>n&&(ve in n||typeof n=="function")))return new Proxy({get(n){for(let r=e.length-1;r>=0;r--){const o=ce(e[r])[n];if(o!==void 0)return o}},has(n){for(let r=e.length-1;r>=0;r--)if(n in ce(e[r]))return!0;return!1},keys(){const n=[];for(let r=0;r<e.length;r++)n.push(...Object.keys(ce(e[r])));return[...new Set(n)]}},et);const t={};for(let n=e.length-1;n>=0;n--)if(e[n]){const r=Object.getOwnPropertyDescriptors(e[n]);for(const o in r)o in t||Object.defineProperty(t,o,{enumerable:!0,get(){for(let s=e.length-1;s>=0;s--){const l=(e[s]||{})[o];if(l!==void 0)return l}}})}return t}function nt(e){let t,n;const r=o=>{const s=x.context;if(s){const[i,c]=E();(n||(n=e())).then(u=>{G(s),c(()=>u.default),G()}),t=i}else if(t){const i=t();if(i)return i(o)}else{const[i]=He(()=>(n||(n=e())).then(c=>c.default));t=i}let l;return A(()=>(l=t())&&P(()=>{if(!s)return l(o);const i=x.context;G(s);const c=l(o);return G(i),c}))};return r.preload=()=>n||((n=e()).then(o=>t=()=>o.default),n),r}function Ie(e){let t=!1;const n=e.keyed,r=A(()=>e.when,void 0,{equals:(o,s)=>t?o===s:!o==!s});return A(()=>{const o=r();if(o){const s=e.children,l=typeof s=="function"&&s.length>0;return t=n||l,l?P(()=>s(o)):s}return e.fallback})}function rt(e,t,n){let r=n.length,o=t.length,s=r,l=0,i=0,c=t[o-1].nextSibling,u=null;for(;l<o||i<s;){if(t[l]===n[i]){l++,i++;continue}for(;t[o-1]===n[s-1];)o--,s--;if(o===l){const f=s<r?i?n[i-1].nextSibling:n[s-i]:c;for(;i<s;)e.insertBefore(n[i++],f)}else if(s===i)for(;l<o;)(!u||!u.has(t[l]))&&t[l].remove(),l++;else if(t[l]===n[s-1]&&n[i]===t[o-1]){const f=t[--o].nextSibling;e.insertBefore(n[i++],t[l++].nextSibling),e.insertBefore(n[--s],f),t[o]=n[s]}else{if(!u){u=new Map;let h=i;for(;h<s;)u.set(n[h],h++)}const f=u.get(t[l]);if(f!=null)if(i<f&&f<s){let h=l,m=1,b;for(;++h<o&&h<s&&!((b=u.get(t[h]))==null||b!==f+m);)m++;if(m>f-i){const g=t[l];for(;i<f;)e.insertBefore(n[i++],g)}else e.replaceChild(n[i++],t[l++])}else l++;else t[l++].remove()}}}const me="_$DX_DELEGATE";function ot(e,t,n,r={}){let o;return Se(s=>{o=s,t===document?e():it(t,e(),t.firstChild?null:void 0,n)},r.owner),()=>{o(),t.textContent=""}}function _t(e,t,n){const r=document.createElement("template");r.innerHTML=e;let o=r.content.firstChild;return n&&(o=o.firstChild),o}function st(e,t=window.document){const n=t[me]||(t[me]=new Set);for(let r=0,o=e.length;r<o;r++){const s=e[r];n.has(s)||(n.add(s),t.addEventListener(s,lt))}}function it(e,t,n,r){if(n!==void 0&&!r&&(r=[]),typeof t!="function")return se(e,t,r,n);J(o=>se(e,t(),o,n),r)}function lt(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),x.registry&&!x.done&&(x.done=!0,document.querySelectorAll("[id^=pl-]").forEach(r=>r.remove()));n!==null;){const r=n[t];if(r&&!n.disabled){const o=n[`${t}Data`];if(o!==void 0?r.call(n,o,e):r.call(n,e),e.cancelBubble)return}n=n.host&&n.host!==n&&n.host instanceof Node?n.host:n.parentNode}}function se(e,t,n,r,o){for(x.context&&!n&&(n=[...e.childNodes]);typeof n=="function";)n=n();if(t===n)return n;const s=typeof t,l=r!==void 0;if(e=l&&n[0]&&n[0].parentNode||e,s==="string"||s==="number"){if(x.context)return n;if(s==="number"&&(t=t.toString()),l){let i=n[0];i&&i.nodeType===3?i.data=t:i=document.createTextNode(t),n=M(e,n,r,i)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||s==="boolean"){if(x.context)return n;n=M(e,n,r)}else{if(s==="function")return J(()=>{let i=t();for(;typeof i=="function";)i=i();n=se(e,i,n,r)}),()=>n;if(Array.isArray(t)){const i=[],c=n&&Array.isArray(n);if(fe(i,t,n,o))return J(()=>n=se(e,i,n,r,!0)),()=>n;if(x.context){if(!i.length)return n;for(let u=0;u<i.length;u++)if(i[u].parentNode)return n=i}if(i.length===0){if(n=M(e,n,r),l)return n}else c?n.length===0?we(e,i,r):rt(e,n,i):(n&&M(e),we(e,i));n=i}else if(t instanceof Node){if(x.context&&t.parentNode)return n=l?[t]:t;if(Array.isArray(n)){if(l)return n=M(e,n,r,t);M(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function fe(e,t,n,r){let o=!1;for(let s=0,l=t.length;s<l;s++){let i=t[s],c=n&&n[s];if(i instanceof Node)e.push(i);else if(!(i==null||i===!0||i===!1))if(Array.isArray(i))o=fe(e,i,c)||o;else if(typeof i=="function")if(r){for(;typeof i=="function";)i=i();o=fe(e,Array.isArray(i)?i:[i],Array.isArray(c)?c:[c])||o}else e.push(i),o=!0;else{const u=String(i);c&&c.nodeType===3&&c.data===u?e.push(c):e.push(document.createTextNode(u))}}return o}function we(e,t,n=null){for(let r=0,o=t.length;r<o;r++)e.insertBefore(t[r],n)}function M(e,t,n,r){if(n===void 0)return e.textContent="";const o=r||document.createTextNode("");if(t.length){let s=!1;for(let l=t.length-1;l>=0;l--){const i=t[l];if(o!==i){const c=i.parentNode===e;!s&&!l?c?e.replaceChild(o,i):e.insertBefore(o,n):c&&i.remove()}else s=!0}}else e.insertBefore(o,n);return[o]}const ut="modulepreload",ct=function(e){return"/"+e},be={},at=function(t,n,r){return!n||n.length===0?t():Promise.all(n.map(o=>{if(o=ct(o),o in be)return;be[o]=!0;const s=o.endsWith(".css"),l=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${l}`))return;const i=document.createElement("link");if(i.rel=s?"stylesheet":ut,s||(i.as="script",i.crossOrigin=""),i.href=o,document.head.appendChild(i),s)return new Promise((c,u)=>{i.addEventListener("load",c),i.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t())};function ft(e,t,n){return e.addEventListener(t,n),()=>e.removeEventListener(t,n)}function ht([e,t],n,r){return[n?()=>n(e()):e,r?o=>t(r(o)):t]}function dt(e){try{return document.querySelector(e)}catch{return null}}function pt(e,t){const n=dt(`#${e}`);n?n.scrollIntoView():t&&window.scrollTo(0,0)}function gt(e,t,n,r){let o=!1;const s=i=>typeof i=="string"?{value:i}:i,l=ht(E(s(e()),{equals:(i,c)=>i.value===c.value}),void 0,i=>(!o&&t(i),i));return n&&Ee(n((i=e())=>{o=!0,l[1](s(i)),o=!1})),{signal:l,utils:r}}function yt(e){if(e){if(Array.isArray(e))return{signal:e}}else return{signal:E({value:""})};return e}function mt(){return gt(()=>({value:window.location.pathname+window.location.search+window.location.hash,state:history.state}),({value:e,replace:t,scroll:n,state:r})=>{t?window.history.replaceState(r,"",e):window.history.pushState(r,"",e),pt(window.location.hash.slice(1),n)},e=>ft(window,"popstate",()=>e()),{go:e=>window.history.go(e)})}const wt=/^(?:[a-z0-9]+:)?\/\//i,bt=/^\/+|\/+$/g;function X(e,t=!1){const n=e.replace(bt,"");return n?t||/^[?#]/.test(n)?n:"/"+n:""}function ee(e,t,n){if(wt.test(t))return;const r=X(e),o=n&&X(n);let s="";return!o||t.startsWith("/")?s=r:o.toLowerCase().indexOf(r.toLowerCase())!==0?s=r+o:s=o,(s||"/")+X(t,!s)}function vt(e,t){if(e==null)throw new Error(t);return e}function je(e,t){return X(e).replace(/\/*(\*.*)?$/g,"")+X(t)}function xt(e){const t={};return e.searchParams.forEach((n,r)=>{t[r]=n}),t}function V(e,t){return decodeURIComponent(t?e.replace(/\+/g," "):e)}function At(e,t){const[n,r]=e.split("/*",2),o=n.split("/").filter(Boolean),s=o.length;return l=>{const i=l.split("/").filter(Boolean),c=i.length-s;if(c<0||c>0&&r===void 0&&!t)return null;const u={path:s?"":"/",params:{}};for(let f=0;f<s;f++){const h=o[f],m=i[f];if(h[0]===":")u.params[h.slice(1)]=m;else if(h.localeCompare(m,void 0,{sensitivity:"base"})!==0)return null;u.path+=`/${m}`}return r&&(u.params[r]=c?i.slice(-c).join("/"):""),u}}function St(e){const[t,n]=e.pattern.split("/*",2),r=t.split("/").filter(Boolean);return r.reduce((o,s)=>o+(s.startsWith(":")?2:3),r.length-(n===void 0?0:1))}function qe(e){const t=new Map,n=We();return new Proxy({},{get(r,o){return t.has(o)||Ge(n,()=>t.set(o,A(()=>e()[o]))),t.get(o)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(e())}})}function Ue(e){let t=/(\/?\:[^\/]+)\?/.exec(e);if(!t)return[e];let n=e.slice(0,t.index),r=e.slice(t.index+t[0].length);const o=[n,n+=t[1]];for(;t=/^(\/\:[^\/]+)\?/.exec(r);)o.push(n+=t[1]),r=r.slice(t[0].length);return Ue(r).reduce((s,l)=>[...s,...o.map(i=>i+l)],[])}const Pt=100,_e=Ce(),le=Ce(),Be=()=>vt(de(_e),"Make sure your app is wrapped in a <Router />");let Q;const De=()=>Q||de(le)||Be().base;function Et(e,t="",n){const{component:r,data:o,children:s}=e,l=!s||Array.isArray(s)&&!s.length,i={key:e,element:r?()=>C(r,{}):()=>{const{element:c}=e;return c===void 0&&n?C(n,{}):c},preload:e.component?r.preload:e.preload,data:o};return Ke(e.path).reduce((c,u)=>{for(const f of Ue(u)){const h=je(t,f),m=l?h:h.split("/*",1)[0];c.push({...i,originalPath:f,pattern:m,matcher:At(m,!l)})}return c},[])}function Ct(e,t=0){return{routes:e,score:St(e[e.length-1])*1e4-t,matcher(n){const r=[];for(let o=e.length-1;o>=0;o--){const s=e[o],l=s.matcher(n);if(!l)return null;r.unshift({...l,route:s})}return r}}}function Ke(e){return Array.isArray(e)?e:[e]}function Me(e,t="",n,r=[],o=[]){const s=Ke(e);for(let l=0,i=s.length;l<i;l++){const c=s[l];if(c&&typeof c=="object"&&c.hasOwnProperty("path")){const u=Et(c,t,n);for(const f of u){if(r.push(f),c.children)Me(c.children,f.pattern,n,r,o);else{const h=Ct([...r],o.length);o.push(h)}r.pop()}}}return r.length?o:o.sort((l,i)=>i.score-l.score)}function Rt(e,t){for(let n=0,r=e.length;n<r;n++){const o=e[n].matcher(t);if(o)return o}return[]}function Ot(e,t){const n=new URL("http://sar"),r=A(c=>{const u=e();try{return new URL(u,n)}catch{return console.error(`Invalid path ${u}`),c}},n,{equals:(c,u)=>c.href===u.href}),o=A(()=>V(r().pathname)),s=A(()=>V(r().search,!0)),l=A(()=>V(r().hash)),i=A(()=>"");return{get pathname(){return o()},get search(){return s()},get hash(){return l()},get state(){return t()},get key(){return i()},query:qe(Pe(s,()=>xt(r())))}}function Lt(e,t="",n,r){const{signal:[o,s],utils:l={}}=yt(e),i=l.parsePath||(p=>p),c=l.renderPath||(p=>p),u=ee("",t),f=void 0;if(u===void 0)throw new Error(`${u} is not a valid base path`);u&&!o().value&&s({value:u,replace:!0,scroll:!1});const[h,m]=E(!1),b=async p=>{m(!0);try{await Xe(p)}finally{m(!1)}},[g,$]=E(o().value),[k,_]=E(o().state),B=Ot(g,k),I=[],O={pattern:u,params:{},path:()=>u,outlet:()=>null,resolvePath(p){return ee(u,p)}};if(n)try{Q=O,O.data=n({data:void 0,params:{},location:B,navigate:Y(O)})}finally{Q=void 0}function j(p,a,d){P(()=>{if(typeof a=="number"){a&&(l.go?l.go(a):console.warn("Router integration does not support relative routing"));return}const{replace:v,resolve:R,scroll:D,state:q}={replace:!1,resolve:!0,scroll:!0,...d},K=R?p.resolvePath(a):ee("",a);if(K===void 0)throw new Error(`Path '${a}' is not a routable path`);if(I.length>=Pt)throw new Error("Too many redirects");const W=g();if(K!==W||q!==k()){const z=I.push({value:W,replace:v,scroll:D,state:k()});b(()=>{$(K),_(q)}).then(()=>{I.length===z&&H({value:K,state:q})})}})}function Y(p){return p=p||de(le)||O,(a,d)=>j(p,a,d)}function H(p){const a=I[0];a&&((p.value!==a.value||p.state!==a.state)&&s({...p,replace:a.replace,scroll:a.scroll}),I.length=0)}J(()=>{const{value:p,state:a}=o();P(()=>{p!==g()&&b(()=>{$(p),_(a)})})});{let p=function(a){if(a.defaultPrevented||a.button!==0||a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)return;const d=a.composedPath().find(z=>z instanceof Node&&z.nodeName.toUpperCase()==="A");if(!d||!d.hasAttribute("link"))return;const v=d.href;if(d.target||!v&&!d.hasAttribute("state"))return;const R=(d.getAttribute("rel")||"").split(/\s+/);if(d.hasAttribute("download")||R&&R.includes("external"))return;const D=new URL(v),q=V(D.pathname);if(D.origin!==window.location.origin||u&&q&&!q.toLowerCase().startsWith(u.toLowerCase()))return;const K=i(q+V(D.search,!0)+V(D.hash)),W=d.getAttribute("state");a.preventDefault(),j(O,K,{resolve:!1,replace:d.hasAttribute("replace"),scroll:!d.hasAttribute("noscroll"),state:W&&JSON.parse(W)})};st(["click"]),document.addEventListener("click",p),Ee(()=>document.removeEventListener("click",p))}return{base:O,out:f,location:B,isRouting:h,renderPath:c,parsePath:i,navigatorFactory:Y}}function Tt(e,t,n,r){const{base:o,location:s,navigatorFactory:l}=e,{pattern:i,element:c,preload:u,data:f}=r().route,h=A(()=>r().path),m=qe(()=>r().params);u&&u();const b={parent:t,pattern:i,get child(){return n()},path:h,params:m,data:t.data,outlet:c,resolvePath(g){return ee(o.path(),g,h())}};if(f)try{Q=b,b.data=f({data:t.data,params:m,location:s,navigate:l(b)})}finally{Q=void 0}return b}const Nt=e=>{const{source:t,url:n,base:r,data:o,out:s}=e,l=t||mt(),i=Lt(l,r,o);return C(_e.Provider,{value:i,get children(){return e.children}})},$t=e=>{const t=Be(),n=De(),r=pe(()=>e.children),o=A(()=>Me(r(),je(n.pattern,e.base||""),It)),s=A(()=>Rt(o(),t.location.pathname));t.out&&t.out.matches.push(s().map(({route:u,path:f,params:h})=>({originalPath:u.originalPath,pattern:u.pattern,path:f,params:h})));const l=[];let i;const c=A(Pe(s,(u,f,h)=>{let m=f&&u.length===f.length;const b=[];for(let g=0,$=u.length;g<$;g++){const k=f&&f[g],_=u[g];h&&k&&_.route.key===k.route.key?b[g]=h[g]:(m=!1,l[g]&&l[g](),Se(B=>{l[g]=B,b[g]=Tt(t,b[g-1]||n,()=>c()[g+1],()=>s()[g])}))}return l.splice(u.length).forEach(g=>g()),h&&m?h:(i=b[0],b)}));return C(Ie,{get when(){return c()&&i},children:u=>C(le.Provider,{value:u,get children(){return u.outlet()}})})},kt=e=>{const t=pe(()=>e.children);return tt(e,{get children(){return t()}})},It=()=>{const e=De();return C(Ie,{get when(){return e.child},children:t=>C(le.Provider,{value:t,get children(){return t.outlet()}})})},jt=nt(()=>at(()=>import("./Grammar.416ba3d5.js"),[])),qt=()=>{const[e,t]=E(0);return setInterval(()=>t(n=>n+1),1e3),C($t,{get children(){return C(kt,{path:"/grammar",component:jt})}})};ot(()=>C(Nt,{get children(){return C(qt,{})}}),document.getElementById("root"));export{Ut as o,_t as t};
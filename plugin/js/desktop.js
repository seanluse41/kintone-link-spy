(function(){"use strict";var ir=Array.isArray,or=Array.prototype.indexOf,nr=Array.from,ar=Object.defineProperty,ti=Object.getOwnPropertyDescriptor,sr=Object.prototype,rr=Array.prototype,lr=Object.getPrototypeOf,qn=Object.isExtensible;function ur(o){for(var t=0;t<o.length;t++)o[t]()}function Yn(){var o,t,e=new Promise((i,n)=>{o=i,t=n});return{promise:e,resolve:o,reject:t}}const W=2,Fi=4,Gi=8,Zn=1<<24,at=16,st=32,Ot=64,Ao=128,Ee=512,J=1024,se=2048,rt=4096,Fe=8192,lt=16384,Lo=32768,ii=65536,Jn=1<<17,Xn=1<<18,oi=1<<19,cr=1<<20,Bt=32768,Do=1<<21,Vo=1<<22,yt=1<<23,bi=Symbol("$state"),dr=Symbol("legacy props"),ni=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"};function hr(o){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function _r(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function pr(o){throw new Error("https://svelte.dev/e/effect_in_teardown")}function fr(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function gr(o){throw new Error("https://svelte.dev/e/effect_orphan")}function br(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function mr(o){throw new Error("https://svelte.dev/e/props_invalid_value")}function vr(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function kr(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function xr(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function yr(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const wr=1,Cr=4,Er=8,Sr=16,Ir=1,Tr=2,K=Symbol();function $r(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function Qn(o){return o===this.v}function Ar(o,t){return o!=o?t==t:o!==t||o!==null&&typeof o=="object"||typeof o=="function"}function Lr(o){return!Ar(o,this.v)}let Ad=!1,pe=null;function ai(o){pe=o}function mi(o,t=!1,e){pe={p:pe,i:!1,c:null,e:null,s:o,x:null,l:null}}function vi(o){var t=pe,e=t.e;if(e!==null){t.e=null;for(var i of e)va(i)}return o!==void 0&&(t.x=o),t.i=!0,pe=t.p,o??{}}function ea(){return!0}let si=[];function Dr(){var o=si;si=[],ur(o)}function Wi(o){if(si.length===0){var t=si;queueMicrotask(()=>{t===si&&Dr()})}si.push(o)}function ta(o){var t=L;if(t===null)return S.f|=yt,o;if((t.f&Lo)===0){if((t.f&Ao)===0)throw o;t.b.error(o)}else ri(o,t)}function ri(o,t){for(;t!==null;){if((t.f&Ao)!==0)try{t.b.error(o);return}catch(e){o=e}t=t.parent}throw o}const Vr=-7169;function F(o,t){o.f=o.f&Vr|t}function Mo(o){(o.f&Ee)!==0||o.deps===null?F(o,J):F(o,rt)}function ia(o){if(o!==null)for(const t of o)(t.f&W)===0||(t.f&Bt)===0||(t.f^=Bt,ia(t.deps))}function oa(o,t,e){(o.f&se)!==0?t.add(o):(o.f&rt)!==0&&e.add(o),ia(o.deps),F(o,J)}const Ki=new Set;let H=null,Oe=null,Ge=[],Oo=null,Bo=!1;class We{committed=!1;current=new Map;previous=new Map;#t=new Set;#s=new Set;#e=0;#n=0;#a=null;#o=new Set;#i=new Set;skipped_effects=new Set;is_fork=!1;is_deferred(){return this.is_fork||this.#n>0}process(t){Ge=[],this.apply();var e=[],i=[];for(const n of t)this.#r(n,e,i);this.is_fork||this.#u(),this.is_deferred()?(this.#l(i),this.#l(e)):(H=null,na(i),na(e),this.#a?.resolve()),Oe=null}#r(t,e,i){t.f^=J;for(var n=t.first,a=null;n!==null;){var s=n.f,r=(s&(st|Ot))!==0,l=r&&(s&J)!==0,c=l||(s&Fe)!==0||this.skipped_effects.has(n);if(!c&&n.fn!==null){r?n.f^=J:a!==null&&(s&(Fi|Gi|Zn))!==0?a.b.defer_effect(n):(s&Fi)!==0?e.push(n):Ci(n)&&((s&at)!==0&&this.#o.add(n),Ei(n));var d=n.first;if(d!==null){n=d;continue}}var h=n.parent;for(n=n.next;n===null&&h!==null;)h===a&&(a=null),n=h.next,h=h.parent}}#l(t){for(var e=0;e<t.length;e+=1)oa(t[e],this.#o,this.#i)}capture(t,e){e!==K&&!this.previous.has(t)&&this.previous.set(t,e),(t.f&yt)===0&&(this.current.set(t,t.v),Oe?.set(t,t.v))}activate(){H=this,this.apply()}deactivate(){H===this&&(H=null,Oe=null)}flush(){if(this.activate(),Ge.length>0){if(Mr(),H!==null&&H!==this)return}else this.#e===0&&this.process([]);this.deactivate()}discard(){for(const t of this.#s)t(this);this.#s.clear()}#u(){if(this.#n===0){for(const t of this.#t)t();this.#t.clear()}this.#e===0&&this.#c()}#c(){if(Ki.size>1){this.previous.clear();var t=Oe,e=!0;for(const n of Ki){if(n===this){e=!1;continue}const a=[];for(const[r,l]of this.current){if(n.current.has(r))if(e&&l!==n.current.get(r))n.current.set(r,l);else continue;a.push(r)}if(a.length===0)continue;const s=[...n.current.keys()].filter(r=>!this.current.has(r));if(s.length>0){var i=Ge;Ge=[];const r=new Set,l=new Map;for(const c of a)aa(c,s,r,l);if(Ge.length>0){H=n,n.apply();for(const c of Ge)n.#r(c,[],[]);n.deactivate()}Ge=i}}H=null,Oe=t}this.committed=!0,Ki.delete(this)}increment(t){this.#e+=1,t&&(this.#n+=1)}decrement(t){this.#e-=1,t&&(this.#n-=1),this.revive()}revive(){for(const t of this.#o)this.#i.delete(t),F(t,se),ct(t);for(const t of this.#i)F(t,rt),ct(t);this.flush()}oncommit(t){this.#t.add(t)}ondiscard(t){this.#s.add(t)}settled(){return(this.#a??=Yn()).promise}static ensure(){if(H===null){const t=H=new We;Ki.add(H),We.enqueue(()=>{H===t&&t.flush()})}return H}static enqueue(t){Wi(t)}apply(){}}function Mr(){var o=Ht;Bo=!0;var t=null;try{var e=0;for(Qi(!0);Ge.length>0;){var i=We.ensure();if(e++>1e3){var n,a;Or()}i.process(Ge),wt.clear()}}finally{Bo=!1,Qi(o),Oo=null}}function Or(){try{br()}catch(o){ri(o,Oo)}}let ut=null;function na(o){var t=o.length;if(t!==0){for(var e=0;e<t;){var i=o[e++];if((i.f&(lt|Fe))===0&&Ci(i)&&(ut=new Set,Ei(i),i.deps===null&&i.first===null&&i.nodes===null&&(i.teardown===null&&i.ac===null?Ea(i):i.fn=null),ut?.size>0)){wt.clear();for(const n of ut){if((n.f&(lt|Fe))!==0)continue;const a=[n];let s=n.parent;for(;s!==null;)ut.has(s)&&(ut.delete(s),a.push(s)),s=s.parent;for(let r=a.length-1;r>=0;r--){const l=a[r];(l.f&(lt|Fe))===0&&Ei(l)}}ut.clear()}}ut=null}}function aa(o,t,e,i){if(!e.has(o)&&(e.add(o),o.reactions!==null))for(const n of o.reactions){const a=n.f;(a&W)!==0?aa(n,t,e,i):(a&(Vo|at))!==0&&(a&se)===0&&sa(n,t,i)&&(F(n,se),ct(n))}}function sa(o,t,e){const i=e.get(o);if(i!==void 0)return i;if(o.deps!==null)for(const n of o.deps){if(t.includes(n))return!0;if((n.f&W)!==0&&sa(n,t,e))return e.set(n,!0),!0}return e.set(o,!1),!1}function ct(o){for(var t=Oo=o;t.parent!==null;){t=t.parent;var e=t.f;if(Bo&&t===L&&(e&at)!==0&&(e&Xn)===0)return;if((e&(Ot|st))!==0){if((e&J)===0)return;t.f^=J}}Ge.push(t)}function Br(o){let t=0,e=Yi(0),i;return()=>{Po()&&(z(e),xa(()=>(t===0&&(i=to(()=>o(()=>ki(e)))),t+=1,()=>{Wi(()=>{t-=1,t===0&&(i?.(),i=void 0,ki(e))})})))}}var Hr=ii|oi|Ao;function Rr(o,t,e){new Nr(o,t,e)}class Nr{parent;is_pending=!1;#t;#s=null;#e;#n;#a;#o=null;#i=null;#r=null;#l=null;#u=null;#c=0;#d=0;#_=!1;#p=new Set;#f=new Set;#h=null;#k=Br(()=>(this.#h=Yi(this.#c),()=>{this.#h=null}));constructor(t,e,i){this.#t=t,this.#e=e,this.#n=i,this.parent=L.b,this.is_pending=!!this.#e.pending,this.#a=ya(()=>{L.b=this;{var n=this.#m();try{this.#o=ht(()=>i(n))}catch(a){this.error(a)}this.#d>0?this.#b():this.is_pending=!1}return()=>{this.#u?.remove()}},Hr)}#x(){try{this.#o=ht(()=>this.#n(this.#t))}catch(t){this.error(t)}}#y(){const t=this.#e.pending;t&&(this.#i=ht(()=>t(this.#t)),We.enqueue(()=>{var e=this.#m();this.#o=this.#g(()=>(We.ensure(),ht(()=>this.#n(e)))),this.#d>0?this.#b():(yi(this.#i,()=>{this.#i=null}),this.is_pending=!1)}))}#m(){var t=this.#t;return this.is_pending&&(this.#u=xi(),this.#t.before(this.#u),t=this.#u),t}defer_effect(t){oa(t,this.#p,this.#f)}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!this.#e.pending}#g(t){var e=L,i=S,n=pe;Ke(this.#a),ue(this.#a),ai(this.#a.ctx);try{return t()}catch(a){return ta(a),null}finally{Ke(e),ue(i),ai(n)}}#b(){const t=this.#e.pending;this.#o!==null&&(this.#l=document.createDocumentFragment(),this.#l.append(this.#u),Ta(this.#o,this.#l)),this.#i===null&&(this.#i=ht(()=>t(this.#t)))}#v(t){if(!this.has_pending_snippet()){this.parent&&this.parent.#v(t);return}if(this.#d+=t,this.#d===0){this.is_pending=!1;for(const e of this.#p)F(e,se),ct(e);for(const e of this.#f)F(e,rt),ct(e);this.#p.clear(),this.#f.clear(),this.#i&&yi(this.#i,()=>{this.#i=null}),this.#l&&(this.#t.before(this.#l),this.#l=null)}}update_pending_count(t){this.#v(t),this.#c+=t,this.#h&&Zi(this.#h,this.#c)}get_effect_pending(){return this.#k(),z(this.#h)}error(t){var e=this.#e.onerror;let i=this.#e.failed;if(this.#_||!e&&!i)throw t;this.#o&&(fe(this.#o),this.#o=null),this.#i&&(fe(this.#i),this.#i=null),this.#r&&(fe(this.#r),this.#r=null);var n=!1,a=!1;const s=()=>{if(n){$r();return}n=!0,a&&yr(),We.ensure(),this.#c=0,this.#r!==null&&yi(this.#r,()=>{this.#r=null}),this.is_pending=this.has_pending_snippet(),this.#o=this.#g(()=>(this.#_=!1,ht(()=>this.#n(this.#t)))),this.#d>0?this.#b():this.is_pending=!1};var r=S;try{ue(null),a=!0,e?.(t,s),a=!1}catch(l){ri(l,this.#a&&this.#a.parent)}finally{ue(r)}i&&Wi(()=>{this.#r=this.#g(()=>{We.ensure(),this.#_=!0;try{return ht(()=>{i(this.#t,()=>t,()=>s)})}catch(l){return ri(l,this.#a.parent),null}finally{this.#_=!1}})})}}function Pr(o,t,e,i){const n=Ho;if(e.length===0&&o.length===0){i(t.map(n));return}var a=H,s=L,r=Ur();function l(){Promise.all(e.map(c=>zr(c))).then(c=>{r();try{i([...t.map(n),...c])}catch(d){(s.f&lt)===0&&ri(d,s)}a?.deactivate(),qi()}).catch(c=>{ri(c,s)})}o.length>0?Promise.all(o).then(()=>{r();try{return l()}finally{a?.deactivate(),qi()}}):l()}function Ur(){var o=L,t=S,e=pe,i=H;return function(a=!0){Ke(o),ue(t),ai(e),a&&i?.activate()}}function qi(){Ke(null),ue(null),ai(null)}function Ho(o){var t=W|se,e=S!==null&&(S.f&W)!==0?S:null;return L!==null&&(L.f|=oi),{ctx:pe,deps:null,effects:null,equals:Qn,f:t,fn:o,reactions:null,rv:0,v:K,wv:0,parent:e??L,ac:null}}function zr(o,t,e){let i=L;i===null&&_r();var n=i.b,a=void 0,s=Yi(K),r=!S,l=new Map;return el(()=>{var c=Yn();a=c.promise;try{Promise.resolve(o()).then(c.resolve,c.reject).then(()=>{d===H&&d.committed&&d.deactivate(),qi()})}catch(f){c.reject(f),qi()}var d=H;if(r){var h=n.is_rendered();n.update_pending_count(1),d.increment(h),l.get(d)?.reject(ni),l.delete(d),l.set(d,c)}const _=(f,g=void 0)=>{if(d.activate(),g)g!==ni&&(s.f|=yt,Zi(s,g));else{(s.f&yt)!==0&&(s.f^=yt),Zi(s,f);for(const[E,T]of l){if(l.delete(E),E===d)break;T.reject(ni)}}r&&(n.update_pending_count(-1),d.decrement(h))};c.promise.then(_,f=>_(null,f||"unknown"))}),Jr(()=>{for(const c of l.values())c.reject(ni)}),new Promise(c=>{function d(h){function _(){h===a?c(s):d(a)}h.then(_,_)}d(a)})}function jr(o){const t=Ho(o);return t.equals=Lr,t}function ra(o){var t=o.effects;if(t!==null){o.effects=null;for(var e=0;e<t.length;e+=1)fe(t[e])}}function Fr(o){for(var t=o.parent;t!==null;){if((t.f&W)===0)return(t.f&lt)===0?t:null;t=t.parent}return null}function Ro(o){var t,e=L;Ke(Fr(o));try{o.f&=~Bt,ra(o),t=Ma(o)}finally{Ke(e)}return t}function la(o){var t=Ro(o);if(!o.equals(t)&&(o.wv=Da(),(!H?.is_fork||o.deps===null)&&(o.v=t,o.deps===null))){F(o,J);return}Et||(Oe!==null?(Po()||H?.is_fork)&&Oe.set(o,t):Mo(o))}let No=new Set;const wt=new Map;let ua=!1;function Yi(o,t){var e={f:0,v:o,reactions:null,equals:Qn,rv:0,wv:0};return e}function re(o,t){const e=Yi(o);return al(e),e}function le(o,t,e=!1){S!==null&&(!Be||(S.f&Jn)!==0)&&ea()&&(S.f&(W|at|Vo|Jn))!==0&&!_t?.includes(o)&&xr();let i=e?Ct(t):t;return Zi(o,i)}function Zi(o,t){if(!o.equals(t)){var e=o.v;Et?wt.set(o,t):wt.set(o,e),o.v=t;var i=We.ensure();if(i.capture(o,e),(o.f&W)!==0){const n=o;(o.f&se)!==0&&Ro(n),Mo(n)}o.wv=Da(),ca(o,se),L!==null&&(L.f&J)!==0&&(L.f&(st|Ot))===0&&(Se===null?sl([o]):Se.push(o)),!i.is_fork&&No.size>0&&!ua&&Gr()}return t}function Gr(){ua=!1;var o=Ht;Qi(!0);const t=Array.from(No);try{for(const e of t)(e.f&J)!==0&&F(e,rt),Ci(e)&&Ei(e)}finally{Qi(o)}No.clear()}function Wr(o,t=1){var e=z(o),i=t===1?e++:e--;return le(o,e),i}function ki(o){le(o,o.v+1)}function ca(o,t){var e=o.reactions;if(e!==null)for(var i=e.length,n=0;n<i;n++){var a=e[n],s=a.f,r=(s&se)===0;if(r&&F(a,t),(s&W)!==0){var l=a;Oe?.delete(l),(s&Bt)===0&&(s&Ee&&(a.f|=Bt),ca(l,rt))}else r&&((s&at)!==0&&ut!==null&&ut.add(a),ct(a))}}function Ct(o){if(typeof o!="object"||o===null||bi in o)return o;const t=lr(o);if(t!==sr&&t!==rr)return o;var e=new Map,i=ir(o),n=re(0),a=Rt,s=r=>{if(Rt===a)return r();var l=S,c=Rt;ue(null),La(a);var d=r();return ue(l),La(c),d};return i&&e.set("length",re(o.length)),new Proxy(o,{defineProperty(r,l,c){(!("value"in c)||c.configurable===!1||c.enumerable===!1||c.writable===!1)&&vr();var d=e.get(l);return d===void 0?d=s(()=>{var h=re(c.value);return e.set(l,h),h}):le(d,c.value,!0),!0},deleteProperty(r,l){var c=e.get(l);if(c===void 0){if(l in r){const d=s(()=>re(K));e.set(l,d),ki(n)}}else le(c,K),ki(n);return!0},get(r,l,c){if(l===bi)return o;var d=e.get(l),h=l in r;if(d===void 0&&(!h||ti(r,l)?.writable)&&(d=s(()=>{var f=Ct(h?r[l]:K),g=re(f);return g}),e.set(l,d)),d!==void 0){var _=z(d);return _===K?void 0:_}return Reflect.get(r,l,c)},getOwnPropertyDescriptor(r,l){var c=Reflect.getOwnPropertyDescriptor(r,l);if(c&&"value"in c){var d=e.get(l);d&&(c.value=z(d))}else if(c===void 0){var h=e.get(l),_=h?.v;if(h!==void 0&&_!==K)return{enumerable:!0,configurable:!0,value:_,writable:!0}}return c},has(r,l){if(l===bi)return!0;var c=e.get(l),d=c!==void 0&&c.v!==K||Reflect.has(r,l);if(c!==void 0||L!==null&&(!d||ti(r,l)?.writable)){c===void 0&&(c=s(()=>{var _=d?Ct(r[l]):K,f=re(_);return f}),e.set(l,c));var h=z(c);if(h===K)return!1}return d},set(r,l,c,d){var h=e.get(l),_=l in r;if(i&&l==="length")for(var f=c;f<h.v;f+=1){var g=e.get(f+"");g!==void 0?le(g,K):f in r&&(g=s(()=>re(K)),e.set(f+"",g))}if(h===void 0)(!_||ti(r,l)?.writable)&&(h=s(()=>re(void 0)),le(h,Ct(c)),e.set(l,h));else{_=h.v!==K;var E=s(()=>Ct(c));le(h,E)}var T=Reflect.getOwnPropertyDescriptor(r,l);if(T?.set&&T.set.call(d,c),!_){if(i&&typeof l=="string"){var G=e.get("length"),I=Number(l);Number.isInteger(I)&&I>=G.v&&le(G,I+1)}ki(n)}return!0},ownKeys(r){z(n);var l=Reflect.ownKeys(r).filter(h=>{var _=e.get(h);return _===void 0||_.v!==K});for(var[c,d]of e)d.v!==K&&!(c in r)&&l.push(c);return l},setPrototypeOf(){kr()}})}var da,ha,_a,pa;function Kr(){if(da===void 0){da=window,ha=/Firefox/.test(navigator.userAgent);var o=Element.prototype,t=Node.prototype,e=Text.prototype;_a=ti(t,"firstChild").get,pa=ti(t,"nextSibling").get,qn(o)&&(o.__click=void 0,o.__className=void 0,o.__attributes=null,o.__style=void 0,o.__e=void 0),qn(e)&&(e.__t=void 0)}}function xi(o=""){return document.createTextNode(o)}function Ji(o){return _a.call(o)}function Xi(o){return pa.call(o)}function fa(o,t){return Ji(o)}function ga(o,t=!1){{var e=Ji(o);return e instanceof Comment&&e.data===""?Xi(e):e}}function ba(o,t=1,e=!1){let i=o;for(;t--;)i=Xi(i);return i}function qr(){return!1}function ma(o){var t=S,e=L;ue(null),Ke(null);try{return o()}finally{ue(t),Ke(e)}}function Yr(o){L===null&&(S===null&&gr(),fr()),Et&&pr()}function Zr(o,t){var e=t.last;e===null?t.last=t.first=o:(e.next=o,o.prev=e,t.last=o)}function dt(o,t,e){var i=L;i!==null&&(i.f&Fe)!==0&&(o|=Fe);var n={ctx:pe,deps:null,nodes:null,f:o|se|Ee,first:null,fn:t,last:null,next:null,parent:i,b:i&&i.b,prev:null,teardown:null,wv:0,ac:null};if(e)try{Ei(n),n.f|=Lo}catch(r){throw fe(n),r}else t!==null&&ct(n);var a=n;if(e&&a.deps===null&&a.teardown===null&&a.nodes===null&&a.first===a.last&&(a.f&oi)===0&&(a=a.first,(o&at)!==0&&(o&ii)!==0&&a!==null&&(a.f|=ii)),a!==null&&(a.parent=i,i!==null&&Zr(a,i),S!==null&&(S.f&W)!==0&&(o&Ot)===0)){var s=S;(s.effects??=[]).push(a)}return n}function Po(){return S!==null&&!Be}function Jr(o){const t=dt(Gi,null,!1);return F(t,J),t.teardown=o,t}function Xr(o){Yr();var t=L.f,e=!S&&(t&st)!==0&&(t&Lo)===0;if(e){var i=pe;(i.e??=[]).push(o)}else return va(o)}function va(o){return dt(Fi|cr,o,!1)}function Qr(o){We.ensure();const t=dt(Ot|oi,o,!0);return(e={})=>new Promise(i=>{e.outro?yi(t,()=>{fe(t),i(void 0)}):(fe(t),i(void 0))})}function ka(o){return dt(Fi,o,!1)}function el(o){return dt(Vo|oi,o,!0)}function xa(o,t=0){return dt(Gi|t,o,!0)}function tl(o,t=[],e=[],i=[]){Pr(i,t,e,n=>{dt(Gi,()=>o(...n.map(z)),!0)})}function ya(o,t=0){var e=dt(at|t,o,!0);return e}function ht(o){return dt(st|oi,o,!0)}function wa(o){var t=o.teardown;if(t!==null){const e=Et,i=S;$a(!0),ue(null);try{t.call(null)}finally{$a(e),ue(i)}}}function Ca(o,t=!1){var e=o.first;for(o.first=o.last=null;e!==null;){const n=e.ac;n!==null&&ma(()=>{n.abort(ni)});var i=e.next;(e.f&Ot)!==0?e.parent=null:fe(e,t),e=i}}function il(o){for(var t=o.first;t!==null;){var e=t.next;(t.f&st)===0&&fe(t),t=e}}function fe(o,t=!0){var e=!1;(t||(o.f&Xn)!==0)&&o.nodes!==null&&o.nodes.end!==null&&(ol(o.nodes.start,o.nodes.end),e=!0),Ca(o,t&&!e),eo(o,0),F(o,lt);var i=o.nodes&&o.nodes.t;if(i!==null)for(const a of i)a.stop();wa(o);var n=o.parent;n!==null&&n.first!==null&&Ea(o),o.next=o.prev=o.teardown=o.ctx=o.deps=o.fn=o.nodes=o.ac=null}function ol(o,t){for(;o!==null;){var e=o===t?null:Xi(o);o.remove(),o=e}}function Ea(o){var t=o.parent,e=o.prev,i=o.next;e!==null&&(e.next=i),i!==null&&(i.prev=e),t!==null&&(t.first===o&&(t.first=i),t.last===o&&(t.last=e))}function yi(o,t,e=!0){var i=[];Sa(o,i,!0);var n=()=>{e&&fe(o),t&&t()},a=i.length;if(a>0){var s=()=>--a||n();for(var r of i)r.out(s)}else n()}function Sa(o,t,e){if((o.f&Fe)===0){o.f^=Fe;var i=o.nodes&&o.nodes.t;if(i!==null)for(const r of i)(r.is_global||e)&&t.push(r);for(var n=o.first;n!==null;){var a=n.next,s=(n.f&ii)!==0||(n.f&st)!==0&&(o.f&at)!==0;Sa(n,t,s?e:!1),n=a}}}function nl(o){Ia(o,!0)}function Ia(o,t){if((o.f&Fe)!==0){o.f^=Fe,(o.f&J)===0&&(F(o,se),ct(o));for(var e=o.first;e!==null;){var i=e.next,n=(e.f&ii)!==0||(e.f&st)!==0;Ia(e,n?t:!1),e=i}var a=o.nodes&&o.nodes.t;if(a!==null)for(const s of a)(s.is_global||t)&&s.in()}}function Ta(o,t){if(o.nodes)for(var e=o.nodes.start,i=o.nodes.end;e!==null;){var n=e===i?null:Xi(e);t.append(e),e=n}}let Ht=!1;function Qi(o){Ht=o}let Et=!1;function $a(o){Et=o}let S=null,Be=!1;function ue(o){S=o}let L=null;function Ke(o){L=o}let _t=null;function al(o){S!==null&&(_t===null?_t=[o]:_t.push(o))}let ie=null,ge=0,Se=null;function sl(o){Se=o}let Aa=1,wi=0,Rt=wi;function La(o){Rt=o}function Da(){return++Aa}function Ci(o){var t=o.f;if((t&se)!==0)return!0;if(t&W&&(o.f&=~Bt),(t&rt)!==0){for(var e=o.deps,i=e.length,n=0;n<i;n++){var a=e[n];if(Ci(a)&&la(a),a.wv>o.wv)return!0}(t&Ee)!==0&&Oe===null&&F(o,J)}return!1}function Va(o,t,e=!0){var i=o.reactions;if(i!==null&&!_t?.includes(o))for(var n=0;n<i.length;n++){var a=i[n];(a.f&W)!==0?Va(a,t,!1):t===a&&(e?F(a,se):(a.f&J)!==0&&F(a,rt),ct(a))}}function Ma(o){var t=ie,e=ge,i=Se,n=S,a=_t,s=pe,r=Be,l=Rt,c=o.f;ie=null,ge=0,Se=null,S=(c&(st|Ot))===0?o:null,_t=null,ai(o.ctx),Be=!1,Rt=++wi,o.ac!==null&&(ma(()=>{o.ac.abort(ni)}),o.ac=null);try{o.f|=Do;var d=o.fn,h=d(),_=o.deps;if(ie!==null){var f;if(eo(o,ge),_!==null&&ge>0)for(_.length=ge+ie.length,f=0;f<ie.length;f++)_[ge+f]=ie[f];else o.deps=_=ie;if(Po()&&(o.f&Ee)!==0)for(f=ge;f<_.length;f++)(_[f].reactions??=[]).push(o)}else _!==null&&ge<_.length&&(eo(o,ge),_.length=ge);if(ea()&&Se!==null&&!Be&&_!==null&&(o.f&(W|rt|se))===0)for(f=0;f<Se.length;f++)Va(Se[f],o);return n!==null&&n!==o&&(wi++,Se!==null&&(i===null?i=Se:i.push(...Se))),(o.f&yt)!==0&&(o.f^=yt),h}catch(g){return ta(g)}finally{o.f^=Do,ie=t,ge=e,Se=i,S=n,_t=a,ai(s),Be=r,Rt=l}}function rl(o,t){let e=t.reactions;if(e!==null){var i=or.call(e,o);if(i!==-1){var n=e.length-1;n===0?e=t.reactions=null:(e[i]=e[n],e.pop())}}if(e===null&&(t.f&W)!==0&&(ie===null||!ie.includes(t))){var a=t;(a.f&Ee)!==0&&(a.f^=Ee,a.f&=~Bt),Mo(a),ra(a),eo(a,0)}}function eo(o,t){var e=o.deps;if(e!==null)for(var i=t;i<e.length;i++)rl(o,e[i])}function Ei(o){var t=o.f;if((t&lt)===0){F(o,J);var e=L,i=Ht;L=o,Ht=!0;try{(t&(at|Zn))!==0?il(o):Ca(o),wa(o);var n=Ma(o);o.teardown=typeof n=="function"?n:null,o.wv=Aa;var a}finally{Ht=i,L=e}}}function z(o){var t=o.f,e=(t&W)!==0;if(S!==null&&!Be){var i=L!==null&&(L.f&lt)!==0;if(!i&&!_t?.includes(o)){var n=S.deps;if((S.f&Do)!==0)o.rv<wi&&(o.rv=wi,ie===null&&n!==null&&n[ge]===o?ge++:ie===null?ie=[o]:ie.includes(o)||ie.push(o));else{(S.deps??=[]).push(o);var a=o.reactions;a===null?o.reactions=[S]:a.includes(S)||a.push(S)}}}if(Et&&wt.has(o))return wt.get(o);if(e){var s=o;if(Et){var r=s.v;return((s.f&J)===0&&s.reactions!==null||Ba(s))&&(r=Ro(s)),wt.set(s,r),r}var l=(s.f&Ee)===0&&!Be&&S!==null&&(Ht||(S.f&Ee)!==0),c=s.deps===null;Ci(s)&&(l&&(s.f|=Ee),la(s)),l&&!c&&Oa(s)}if(Oe?.has(o))return Oe.get(o);if((o.f&yt)!==0)throw o.v;return o.v}function Oa(o){if(o.deps!==null){o.f|=Ee;for(const t of o.deps)(t.reactions??=[]).push(o),(t.f&W)!==0&&(t.f&Ee)===0&&Oa(t)}}function Ba(o){if(o.v===K)return!0;if(o.deps===null)return!1;for(const t of o.deps)if(wt.has(t)||(t.f&W)!==0&&Ba(t))return!0;return!1}function to(o){var t=Be;try{return Be=!0,o()}finally{Be=t}}const ll=["touchstart","touchmove"];function ul(o){return ll.includes(o)}const cl=new Set,Ha=new Set;let Ra=null;function io(o){var t=this,e=t.ownerDocument,i=o.type,n=o.composedPath?.()||[],a=n[0]||o.target;Ra=o;var s=0,r=Ra===o&&o.__root;if(r){var l=n.indexOf(r);if(l!==-1&&(t===document||t===window)){o.__root=t;return}var c=n.indexOf(t);if(c===-1)return;l<=c&&(s=l)}if(a=n[s]||o.target,a!==t){ar(o,"currentTarget",{configurable:!0,get(){return a||e}});var d=S,h=L;ue(null),Ke(null);try{for(var _,f=[];a!==null;){var g=a.assignedSlot||a.parentNode||a.host||null;try{var E=a["__"+i];E!=null&&(!a.disabled||o.target===a)&&E.call(a,o)}catch(T){_?f.push(T):_=T}if(o.cancelBubble||g===t||g===null)break;a=g}if(_){for(let T of f)queueMicrotask(()=>{throw T});throw _}}finally{o.__root=t,delete o.currentTarget,ue(d),Ke(h)}}}function dl(o){var t=document.createElement("template");return t.innerHTML=o.replaceAll("<!>","<!---->"),t.content}function Uo(o,t){var e=L;e.nodes===null&&(e.nodes={start:o,end:t,a:null,t:null})}function zo(o,t){var e=(t&Ir)!==0,i=(t&Tr)!==0,n,a=!o.startsWith("<!>");return()=>{n===void 0&&(n=dl(a?o:"<!>"+o),e||(n=Ji(n)));var s=i||ha?document.importNode(n,!0):n.cloneNode(!0);if(e){var r=Ji(s),l=s.lastChild;Uo(r,l)}else Uo(s,s);return s}}function hl(){var o=document.createDocumentFragment(),t=document.createComment(""),e=xi();return o.append(t,e),Uo(t,e),o}function oo(o,t){o!==null&&o.before(t)}function _l(o,t){var e=t==null?"":typeof t=="object"?t+"":t;e!==(o.__t??=o.nodeValue)&&(o.__t=e,o.nodeValue=e+"")}function Na(o,t){return pl(o,t)}const li=new Map;function pl(o,{target:t,anchor:e,props:i={},events:n,context:a,intro:s=!0}){Kr();var r=new Set,l=h=>{for(var _=0;_<h.length;_++){var f=h[_];if(!r.has(f)){r.add(f);var g=ul(f);t.addEventListener(f,io,{passive:g});var E=li.get(f);E===void 0?(document.addEventListener(f,io,{passive:g}),li.set(f,1)):li.set(f,E+1)}}};l(nr(cl)),Ha.add(l);var c=void 0,d=Qr(()=>{var h=e??t.appendChild(xi());return Rr(h,{pending:()=>{}},_=>{if(a){mi({});var f=pe;f.c=a}n&&(i.$$events=n),c=o(_,i)||{},a&&vi()}),()=>{for(var _ of r){t.removeEventListener(_,io);var f=li.get(_);--f===0?(document.removeEventListener(_,io),li.delete(_)):li.set(_,f)}Ha.delete(l),h!==e&&h.parentNode?.removeChild(h)}});return fl.set(c,d),c}let fl=new WeakMap;class gl{anchor;#t=new Map;#s=new Map;#e=new Map;#n=new Set;#a=!0;constructor(t,e=!0){this.anchor=t,this.#a=e}#o=()=>{var t=H;if(this.#t.has(t)){var e=this.#t.get(t),i=this.#s.get(e);if(i)nl(i),this.#n.delete(e);else{var n=this.#e.get(e);n&&(this.#s.set(e,n.effect),this.#e.delete(e),n.fragment.lastChild.remove(),this.anchor.before(n.fragment),i=n.effect)}for(const[a,s]of this.#t){if(this.#t.delete(a),a===t)break;const r=this.#e.get(s);r&&(fe(r.effect),this.#e.delete(s))}for(const[a,s]of this.#s){if(a===e||this.#n.has(a))continue;const r=()=>{if(Array.from(this.#t.values()).includes(a)){var c=document.createDocumentFragment();Ta(s,c),c.append(xi()),this.#e.set(a,{effect:s,fragment:c})}else fe(s);this.#n.delete(a),this.#s.delete(a)};this.#a||!i?(this.#n.add(a),yi(s,r,!1)):r()}}};#i=t=>{this.#t.delete(t);const e=Array.from(this.#t.values());for(const[i,n]of this.#e)e.includes(i)||(fe(n.effect),this.#e.delete(i))};ensure(t,e){var i=H,n=qr();if(e&&!this.#s.has(t)&&!this.#e.has(t))if(n){var a=document.createDocumentFragment(),s=xi();a.append(s),this.#e.set(t,{effect:ht(()=>e(s)),fragment:a})}else this.#s.set(t,ht(()=>e(this.anchor)));if(this.#t.set(i,t),n){for(const[r,l]of this.#s)r===t?i.skipped_effects.delete(l):i.skipped_effects.add(l);for(const[r,l]of this.#e)r===t?i.skipped_effects.delete(l.effect):i.skipped_effects.add(l.effect);i.oncommit(this.#o),i.ondiscard(this.#i)}else this.#o()}}function bl(o,t,e=!1){var i=new gl(o),n=e?ii:0;function a(s,r){i.ensure(s,r)}ya(()=>{var s=!1;t((r,l=!0)=>{s=!0,a(l,r)}),s||a(!1,null)},n)}function Pa(o,t){ka(()=>{var e=o.getRootNode(),i=e.host?e:e.head??e.ownerDocument.head;if(!i.querySelector("#"+t.hash)){const n=document.createElement("style");n.id=t.hash,n.textContent=t.code,i.appendChild(n)}})}function Ua(o,t){return o===t||o?.[bi]===t}function za(o={},t,e,i){return ka(()=>{var n,a;return xa(()=>{n=a,a=[],to(()=>{o!==e(...a)&&(t(o,...a),n&&Ua(e(...n),o)&&t(null,...n))})}),()=>{Wi(()=>{a&&Ua(e(...a),o)&&t(null,...a)})}}),o}let no=!1;function ml(o){var t=no;try{return no=!1,[o(),no]}finally{no=t}}function Nt(o,t,e,i){var n=(e&Er)!==0,a=(e&Sr)!==0,s=i,r=!0,l=()=>(r&&(r=!1,s=a?to(i):i),s),c;if(n){var d=bi in o||dr in o;c=ti(o,t)?.set??(d&&t in o?I=>o[t]=I:void 0)}var h,_=!1;n?[h,_]=ml(()=>o[t]):h=o[t],h===void 0&&i!==void 0&&(h=l(),c&&(mr(),c(h)));var f;if(f=()=>{var I=o[t];return I===void 0?l():(r=!0,I)},(e&Cr)===0)return f;if(c){var g=o.$$legacy;return(function(I,te){return arguments.length>0?((!te||g||_)&&c(te?f():I),I):f()})}var E=!1,T=((e&wr)!==0?Ho:jr)(()=>(E=!1,f()));n&&z(T);var G=L;return(function(I,te){if(arguments.length>0){const ae=te?z(T):n?Ct(I):I;return le(T,ae),E=!0,s!==void 0&&(s=ae),I}return Et&&E||(G.f&lt)!==0?T.v:z(T)})}function jo(o){pe===null&&hr(),Xr(()=>{const t=to(o);if(typeof t=="function")return t})}const vl="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(vl);const w=o=>typeof o=="string",Si=()=>{let o,t;const e=new Promise((i,n)=>{o=i,t=n});return e.resolve=o,e.reject=t,e},ja=o=>o==null?"":""+o,kl=(o,t,e)=>{o.forEach(i=>{t[i]&&(e[i]=t[i])})},xl=/###/g,Fa=o=>o&&o.indexOf("###")>-1?o.replace(xl,"."):o,Ga=o=>!o||w(o),Ii=(o,t,e)=>{const i=w(t)?t.split("."):t;let n=0;for(;n<i.length-1;){if(Ga(o))return{};const a=Fa(i[n]);!o[a]&&e&&(o[a]=new e),Object.prototype.hasOwnProperty.call(o,a)?o=o[a]:o={},++n}return Ga(o)?{}:{obj:o,k:Fa(i[n])}},Wa=(o,t,e)=>{const{obj:i,k:n}=Ii(o,t,Object);if(i!==void 0||t.length===1){i[n]=e;return}let a=t[t.length-1],s=t.slice(0,t.length-1),r=Ii(o,s,Object);for(;r.obj===void 0&&s.length;)a=`${s[s.length-1]}.${a}`,s=s.slice(0,s.length-1),r=Ii(o,s,Object),r?.obj&&typeof r.obj[`${r.k}.${a}`]<"u"&&(r.obj=void 0);r.obj[`${r.k}.${a}`]=e},yl=(o,t,e,i)=>{const{obj:n,k:a}=Ii(o,t,Object);n[a]=n[a]||[],n[a].push(e)},ao=(o,t)=>{const{obj:e,k:i}=Ii(o,t);if(e&&Object.prototype.hasOwnProperty.call(e,i))return e[i]},wl=(o,t,e)=>{const i=ao(o,e);return i!==void 0?i:ao(t,e)},Ka=(o,t,e)=>{for(const i in t)i!=="__proto__"&&i!=="constructor"&&(i in o?w(o[i])||o[i]instanceof String||w(t[i])||t[i]instanceof String?e&&(o[i]=t[i]):Ka(o[i],t[i],e):o[i]=t[i]);return o},ui=o=>o.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var Cl={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const El=o=>w(o)?o.replace(/[&<>"'\/]/g,t=>Cl[t]):o;class Sl{constructor(t){this.capacity=t,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(t){const e=this.regExpMap.get(t);if(e!==void 0)return e;const i=new RegExp(t);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(t,i),this.regExpQueue.push(t),i}}const Il=[" ",",","?","!",";"],Tl=new Sl(20),$l=(o,t,e)=>{t=t||"",e=e||"";const i=Il.filter(s=>t.indexOf(s)<0&&e.indexOf(s)<0);if(i.length===0)return!0;const n=Tl.getRegExp(`(${i.map(s=>s==="?"?"\\?":s).join("|")})`);let a=!n.test(o);if(!a){const s=o.indexOf(e);s>0&&!n.test(o.substring(0,s))&&(a=!0)}return a},Fo=(o,t,e=".")=>{if(!o)return;if(o[t])return Object.prototype.hasOwnProperty.call(o,t)?o[t]:void 0;const i=t.split(e);let n=o;for(let a=0;a<i.length;){if(!n||typeof n!="object")return;let s,r="";for(let l=a;l<i.length;++l)if(l!==a&&(r+=e),r+=i[l],s=n[r],s!==void 0){if(["string","number","boolean"].indexOf(typeof s)>-1&&l<i.length-1)continue;a+=l-a+1;break}n=s}return n},Ti=o=>o?.replace("_","-"),Al={type:"logger",log(o){this.output("log",o)},warn(o){this.output("warn",o)},error(o){this.output("error",o)},output(o,t){console?.[o]?.apply?.(console,t)}};class so{constructor(t,e={}){this.init(t,e)}init(t,e={}){this.prefix=e.prefix||"i18next:",this.logger=t||Al,this.options=e,this.debug=e.debug}log(...t){return this.forward(t,"log","",!0)}warn(...t){return this.forward(t,"warn","",!0)}error(...t){return this.forward(t,"error","")}deprecate(...t){return this.forward(t,"warn","WARNING DEPRECATED: ",!0)}forward(t,e,i,n){return n&&!this.debug?null:(w(t[0])&&(t[0]=`${i}${this.prefix} ${t[0]}`),this.logger[e](t))}create(t){return new so(this.logger,{prefix:`${this.prefix}:${t}:`,...this.options})}clone(t){return t=t||this.options,t.prefix=t.prefix||this.prefix,new so(this.logger,t)}}var qe=new so;class ro{constructor(){this.observers={}}on(t,e){return t.split(" ").forEach(i=>{this.observers[i]||(this.observers[i]=new Map);const n=this.observers[i].get(e)||0;this.observers[i].set(e,n+1)}),this}off(t,e){if(this.observers[t]){if(!e){delete this.observers[t];return}this.observers[t].delete(e)}}emit(t,...e){this.observers[t]&&Array.from(this.observers[t].entries()).forEach(([n,a])=>{for(let s=0;s<a;s++)n(...e)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(([n,a])=>{for(let s=0;s<a;s++)n.apply(n,[t,...e])})}}class qa extends ro{constructor(t,e={ns:["translation"],defaultNS:"translation"}){super(),this.data=t||{},this.options=e,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(t){this.options.ns.indexOf(t)<0&&this.options.ns.push(t)}removeNamespaces(t){const e=this.options.ns.indexOf(t);e>-1&&this.options.ns.splice(e,1)}getResource(t,e,i,n={}){const a=n.keySeparator!==void 0?n.keySeparator:this.options.keySeparator,s=n.ignoreJSONStructure!==void 0?n.ignoreJSONStructure:this.options.ignoreJSONStructure;let r;t.indexOf(".")>-1?r=t.split("."):(r=[t,e],i&&(Array.isArray(i)?r.push(...i):w(i)&&a?r.push(...i.split(a)):r.push(i)));const l=ao(this.data,r);return!l&&!e&&!i&&t.indexOf(".")>-1&&(t=r[0],e=r[1],i=r.slice(2).join(".")),l||!s||!w(i)?l:Fo(this.data?.[t]?.[e],i,a)}addResource(t,e,i,n,a={silent:!1}){const s=a.keySeparator!==void 0?a.keySeparator:this.options.keySeparator;let r=[t,e];i&&(r=r.concat(s?i.split(s):i)),t.indexOf(".")>-1&&(r=t.split("."),n=e,e=r[1]),this.addNamespaces(e),Wa(this.data,r,n),a.silent||this.emit("added",t,e,i,n)}addResources(t,e,i,n={silent:!1}){for(const a in i)(w(i[a])||Array.isArray(i[a]))&&this.addResource(t,e,a,i[a],{silent:!0});n.silent||this.emit("added",t,e,i)}addResourceBundle(t,e,i,n,a,s={silent:!1,skipCopy:!1}){let r=[t,e];t.indexOf(".")>-1&&(r=t.split("."),n=i,i=e,e=r[1]),this.addNamespaces(e);let l=ao(this.data,r)||{};s.skipCopy||(i=JSON.parse(JSON.stringify(i))),n?Ka(l,i,a):l={...l,...i},Wa(this.data,r,l),s.silent||this.emit("added",t,e,i)}removeResourceBundle(t,e){this.hasResourceBundle(t,e)&&delete this.data[t][e],this.removeNamespaces(e),this.emit("removed",t,e)}hasResourceBundle(t,e){return this.getResource(t,e)!==void 0}getResourceBundle(t,e){return e||(e=this.options.defaultNS),this.getResource(t,e)}getDataByLanguage(t){return this.data[t]}hasLanguageSomeTranslations(t){const e=this.getDataByLanguage(t);return!!(e&&Object.keys(e)||[]).find(n=>e[n]&&Object.keys(e[n]).length>0)}toJSON(){return this.data}}var Ya={processors:{},addPostProcessor(o){this.processors[o.name]=o},handle(o,t,e,i,n){return o.forEach(a=>{t=this.processors[a]?.process(t,e,i,n)??t}),t}};const Za=Symbol("i18next/PATH_KEY");function Ll(){const o=[],t=Object.create(null);let e;return t.get=(i,n)=>(e?.revoke?.(),n===Za?o:(o.push(n),e=Proxy.revocable(i,t),e.proxy)),Proxy.revocable(Object.create(null),t).proxy}function Go(o,t){const{[Za]:e}=o(Ll());return e.join(t?.keySeparator??".")}const Ja={},Wo=o=>!w(o)&&typeof o!="boolean"&&typeof o!="number";class lo extends ro{constructor(t,e={}){super(),kl(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],t,this),this.options=e,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=qe.create("translator")}changeLanguage(t){t&&(this.language=t)}exists(t,e={interpolation:{}}){const i={...e};if(t==null)return!1;const n=this.resolve(t,i);if(n?.res===void 0)return!1;const a=Wo(n.res);return!(i.returnObjects===!1&&a)}extractFromKey(t,e){let i=e.nsSeparator!==void 0?e.nsSeparator:this.options.nsSeparator;i===void 0&&(i=":");const n=e.keySeparator!==void 0?e.keySeparator:this.options.keySeparator;let a=e.ns||this.options.defaultNS||[];const s=i&&t.indexOf(i)>-1,r=!this.options.userDefinedKeySeparator&&!e.keySeparator&&!this.options.userDefinedNsSeparator&&!e.nsSeparator&&!$l(t,i,n);if(s&&!r){const l=t.match(this.interpolator.nestingRegexp);if(l&&l.length>0)return{key:t,namespaces:w(a)?[a]:a};const c=t.split(i);(i!==n||i===n&&this.options.ns.indexOf(c[0])>-1)&&(a=c.shift()),t=c.join(n)}return{key:t,namespaces:w(a)?[a]:a}}translate(t,e,i){let n=typeof e=="object"?{...e}:e;if(typeof n!="object"&&this.options.overloadTranslationOptionHandler&&(n=this.options.overloadTranslationOptionHandler(arguments)),typeof n=="object"&&(n={...n}),n||(n={}),t==null)return"";typeof t=="function"&&(t=Go(t,{...this.options,...n})),Array.isArray(t)||(t=[String(t)]);const a=n.returnDetails!==void 0?n.returnDetails:this.options.returnDetails,s=n.keySeparator!==void 0?n.keySeparator:this.options.keySeparator,{key:r,namespaces:l}=this.extractFromKey(t[t.length-1],n),c=l[l.length-1];let d=n.nsSeparator!==void 0?n.nsSeparator:this.options.nsSeparator;d===void 0&&(d=":");const h=n.lng||this.language,_=n.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(h?.toLowerCase()==="cimode")return _?a?{res:`${c}${d}${r}`,usedKey:r,exactUsedKey:r,usedLng:h,usedNS:c,usedParams:this.getUsedParamsDetails(n)}:`${c}${d}${r}`:a?{res:r,usedKey:r,exactUsedKey:r,usedLng:h,usedNS:c,usedParams:this.getUsedParamsDetails(n)}:r;const f=this.resolve(t,n);let g=f?.res;const E=f?.usedKey||r,T=f?.exactUsedKey||r,G=["[object Number]","[object Function]","[object RegExp]"],I=n.joinArrays!==void 0?n.joinArrays:this.options.joinArrays,te=!this.i18nFormat||this.i18nFormat.handleAsObject,ae=n.count!==void 0&&!w(n.count),Vt=lo.hasDefaultValue(n),fi=ae?this.pluralResolver.getSuffix(h,n.count,n):"",gi=n.ordinal&&ae?this.pluralResolver.getSuffix(h,n.count,{ordinal:!1}):"",Xs=ae&&!n.ordinal&&n.count===0,Mt=Xs&&n[`defaultValue${this.options.pluralSeparator}zero`]||n[`defaultValue${fi}`]||n[`defaultValue${gi}`]||n.defaultValue;let it=g;te&&!g&&Vt&&(it=Mt);const Id=Wo(it),Td=Object.prototype.toString.apply(it);if(te&&it&&Id&&G.indexOf(Td)<0&&!(w(I)&&Array.isArray(it))){if(!n.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const ot=this.options.returnedObjectHandler?this.options.returnedObjectHandler(E,it,{...n,ns:l}):`key '${r} (${this.language})' returned an object instead of string.`;return a?(f.res=ot,f.usedParams=this.getUsedParamsDetails(n),f):ot}if(s){const ot=Array.isArray(it),je=ot?[]:{},Qs=ot?T:E;for(const nt in it)if(Object.prototype.hasOwnProperty.call(it,nt)){const xt=`${Qs}${s}${nt}`;Vt&&!g?je[nt]=this.translate(xt,{...n,defaultValue:Wo(Mt)?Mt[nt]:void 0,joinArrays:!1,ns:l}):je[nt]=this.translate(xt,{...n,joinArrays:!1,ns:l}),je[nt]===xt&&(je[nt]=it[nt])}g=je}}else if(te&&w(I)&&Array.isArray(g))g=g.join(I),g&&(g=this.extendTranslation(g,t,n,i));else{let ot=!1,je=!1;!this.isValidLookup(g)&&Vt&&(ot=!0,g=Mt),this.isValidLookup(g)||(je=!0,g=r);const nt=(n.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&je?void 0:g,xt=Vt&&Mt!==g&&this.options.updateMissing;if(je||ot||xt){if(this.logger.log(xt?"updateKey":"missingKey",h,c,r,xt?Mt:g),s){const Ce=this.resolve(r,{...n,keySeparator:!1});Ce&&Ce.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let zi=[];const $o=this.languageUtils.getFallbackCodes(this.options.fallbackLng,n.lng||this.language);if(this.options.saveMissingTo==="fallback"&&$o&&$o[0])for(let Ce=0;Ce<$o.length;Ce++)zi.push($o[Ce]);else this.options.saveMissingTo==="all"?zi=this.languageUtils.toResolveHierarchy(n.lng||this.language):zi.push(n.lng||this.language);const er=(Ce,ei,ji)=>{const tr=Vt&&ji!==g?ji:nt;this.options.missingKeyHandler?this.options.missingKeyHandler(Ce,c,ei,tr,xt,n):this.backendConnector?.saveMissing&&this.backendConnector.saveMissing(Ce,c,ei,tr,xt,n),this.emit("missingKey",Ce,c,ei,g)};this.options.saveMissing&&(this.options.saveMissingPlurals&&ae?zi.forEach(Ce=>{const ei=this.pluralResolver.getSuffixes(Ce,n);Xs&&n[`defaultValue${this.options.pluralSeparator}zero`]&&ei.indexOf(`${this.options.pluralSeparator}zero`)<0&&ei.push(`${this.options.pluralSeparator}zero`),ei.forEach(ji=>{er([Ce],r+ji,n[`defaultValue${ji}`]||Mt)})}):er(zi,r,Mt))}g=this.extendTranslation(g,t,n,f,i),je&&g===r&&this.options.appendNamespaceToMissingKey&&(g=`${c}${d}${r}`),(je||ot)&&this.options.parseMissingKeyHandler&&(g=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${c}${d}${r}`:r,ot?g:void 0,n))}return a?(f.res=g,f.usedParams=this.getUsedParamsDetails(n),f):g}extendTranslation(t,e,i,n,a){if(this.i18nFormat?.parse)t=this.i18nFormat.parse(t,{...this.options.interpolation.defaultVariables,...i},i.lng||this.language||n.usedLng,n.usedNS,n.usedKey,{resolved:n});else if(!i.skipInterpolation){i.interpolation&&this.interpolator.init({...i,interpolation:{...this.options.interpolation,...i.interpolation}});const l=w(t)&&(i?.interpolation?.skipOnVariables!==void 0?i.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let c;if(l){const h=t.match(this.interpolator.nestingRegexp);c=h&&h.length}let d=i.replace&&!w(i.replace)?i.replace:i;if(this.options.interpolation.defaultVariables&&(d={...this.options.interpolation.defaultVariables,...d}),t=this.interpolator.interpolate(t,d,i.lng||this.language||n.usedLng,i),l){const h=t.match(this.interpolator.nestingRegexp),_=h&&h.length;c<_&&(i.nest=!1)}!i.lng&&n&&n.res&&(i.lng=this.language||n.usedLng),i.nest!==!1&&(t=this.interpolator.nest(t,(...h)=>a?.[0]===h[0]&&!i.context?(this.logger.warn(`It seems you are nesting recursively key: ${h[0]} in key: ${e[0]}`),null):this.translate(...h,e),i)),i.interpolation&&this.interpolator.reset()}const s=i.postProcess||this.options.postProcess,r=w(s)?[s]:s;return t!=null&&r?.length&&i.applyPostProcessor!==!1&&(t=Ya.handle(r,t,e,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...n,usedParams:this.getUsedParamsDetails(i)},...i}:i,this)),t}resolve(t,e={}){let i,n,a,s,r;return w(t)&&(t=[t]),t.forEach(l=>{if(this.isValidLookup(i))return;const c=this.extractFromKey(l,e),d=c.key;n=d;let h=c.namespaces;this.options.fallbackNS&&(h=h.concat(this.options.fallbackNS));const _=e.count!==void 0&&!w(e.count),f=_&&!e.ordinal&&e.count===0,g=e.context!==void 0&&(w(e.context)||typeof e.context=="number")&&e.context!=="",E=e.lngs?e.lngs:this.languageUtils.toResolveHierarchy(e.lng||this.language,e.fallbackLng);h.forEach(T=>{this.isValidLookup(i)||(r=T,!Ja[`${E[0]}-${T}`]&&this.utils?.hasLoadedNamespace&&!this.utils?.hasLoadedNamespace(r)&&(Ja[`${E[0]}-${T}`]=!0,this.logger.warn(`key "${n}" for languages "${E.join(", ")}" won't get resolved as namespace "${r}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),E.forEach(G=>{if(this.isValidLookup(i))return;s=G;const I=[d];if(this.i18nFormat?.addLookupKeys)this.i18nFormat.addLookupKeys(I,d,G,T,e);else{let ae;_&&(ae=this.pluralResolver.getSuffix(G,e.count,e));const Vt=`${this.options.pluralSeparator}zero`,fi=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(_&&(e.ordinal&&ae.indexOf(fi)===0&&I.push(d+ae.replace(fi,this.options.pluralSeparator)),I.push(d+ae),f&&I.push(d+Vt)),g){const gi=`${d}${this.options.contextSeparator||"_"}${e.context}`;I.push(gi),_&&(e.ordinal&&ae.indexOf(fi)===0&&I.push(gi+ae.replace(fi,this.options.pluralSeparator)),I.push(gi+ae),f&&I.push(gi+Vt))}}let te;for(;te=I.pop();)this.isValidLookup(i)||(a=te,i=this.getResource(G,T,te,e))}))})}),{res:i,usedKey:n,exactUsedKey:a,usedLng:s,usedNS:r}}isValidLookup(t){return t!==void 0&&!(!this.options.returnNull&&t===null)&&!(!this.options.returnEmptyString&&t==="")}getResource(t,e,i,n={}){return this.i18nFormat?.getResource?this.i18nFormat.getResource(t,e,i,n):this.resourceStore.getResource(t,e,i,n)}getUsedParamsDetails(t={}){const e=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],i=t.replace&&!w(t.replace);let n=i?t.replace:t;if(i&&typeof t.count<"u"&&(n.count=t.count),this.options.interpolation.defaultVariables&&(n={...this.options.interpolation.defaultVariables,...n}),!i){n={...n};for(const a of e)delete n[a]}return n}static hasDefaultValue(t){const e="defaultValue";for(const i in t)if(Object.prototype.hasOwnProperty.call(t,i)&&e===i.substring(0,e.length)&&t[i]!==void 0)return!0;return!1}}class Xa{constructor(t){this.options=t,this.supportedLngs=this.options.supportedLngs||!1,this.logger=qe.create("languageUtils")}getScriptPartFromCode(t){if(t=Ti(t),!t||t.indexOf("-")<0)return null;const e=t.split("-");return e.length===2||(e.pop(),e[e.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(e.join("-"))}getLanguagePartFromCode(t){if(t=Ti(t),!t||t.indexOf("-")<0)return t;const e=t.split("-");return this.formatLanguageCode(e[0])}formatLanguageCode(t){if(w(t)&&t.indexOf("-")>-1){let e;try{e=Intl.getCanonicalLocales(t)[0]}catch{}return e&&this.options.lowerCaseLng&&(e=e.toLowerCase()),e||(this.options.lowerCaseLng?t.toLowerCase():t)}return this.options.cleanCode||this.options.lowerCaseLng?t.toLowerCase():t}isSupportedCode(t){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(t=this.getLanguagePartFromCode(t)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(t)>-1}getBestMatchFromCodes(t){if(!t)return null;let e;return t.forEach(i=>{if(e)return;const n=this.formatLanguageCode(i);(!this.options.supportedLngs||this.isSupportedCode(n))&&(e=n)}),!e&&this.options.supportedLngs&&t.forEach(i=>{if(e)return;const n=this.getScriptPartFromCode(i);if(this.isSupportedCode(n))return e=n;const a=this.getLanguagePartFromCode(i);if(this.isSupportedCode(a))return e=a;e=this.options.supportedLngs.find(s=>{if(s===a)return s;if(!(s.indexOf("-")<0&&a.indexOf("-")<0)&&(s.indexOf("-")>0&&a.indexOf("-")<0&&s.substring(0,s.indexOf("-"))===a||s.indexOf(a)===0&&a.length>1))return s})}),e||(e=this.getFallbackCodes(this.options.fallbackLng)[0]),e}getFallbackCodes(t,e){if(!t)return[];if(typeof t=="function"&&(t=t(e)),w(t)&&(t=[t]),Array.isArray(t))return t;if(!e)return t.default||[];let i=t[e];return i||(i=t[this.getScriptPartFromCode(e)]),i||(i=t[this.formatLanguageCode(e)]),i||(i=t[this.getLanguagePartFromCode(e)]),i||(i=t.default),i||[]}toResolveHierarchy(t,e){const i=this.getFallbackCodes((e===!1?[]:e)||this.options.fallbackLng||[],t),n=[],a=s=>{s&&(this.isSupportedCode(s)?n.push(s):this.logger.warn(`rejecting language code not found in supportedLngs: ${s}`))};return w(t)&&(t.indexOf("-")>-1||t.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&a(this.formatLanguageCode(t)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&a(this.getScriptPartFromCode(t)),this.options.load!=="currentOnly"&&a(this.getLanguagePartFromCode(t))):w(t)&&a(this.formatLanguageCode(t)),i.forEach(s=>{n.indexOf(s)<0&&a(this.formatLanguageCode(s))}),n}}const Qa={zero:0,one:1,two:2,few:3,many:4,other:5},es={select:o=>o===1?"one":"other",resolvedOptions:()=>({pluralCategories:["one","other"]})};class Dl{constructor(t,e={}){this.languageUtils=t,this.options=e,this.logger=qe.create("pluralResolver"),this.pluralRulesCache={}}clearCache(){this.pluralRulesCache={}}getRule(t,e={}){const i=Ti(t==="dev"?"en":t),n=e.ordinal?"ordinal":"cardinal",a=JSON.stringify({cleanedCode:i,type:n});if(a in this.pluralRulesCache)return this.pluralRulesCache[a];let s;try{s=new Intl.PluralRules(i,{type:n})}catch{if(!Intl)return this.logger.error("No Intl support, please use an Intl polyfill!"),es;if(!t.match(/-|_/))return es;const l=this.languageUtils.getLanguagePartFromCode(t);s=this.getRule(l,e)}return this.pluralRulesCache[a]=s,s}needsPlural(t,e={}){let i=this.getRule(t,e);return i||(i=this.getRule("dev",e)),i?.resolvedOptions().pluralCategories.length>1}getPluralFormsOfKey(t,e,i={}){return this.getSuffixes(t,i).map(n=>`${e}${n}`)}getSuffixes(t,e={}){let i=this.getRule(t,e);return i||(i=this.getRule("dev",e)),i?i.resolvedOptions().pluralCategories.sort((n,a)=>Qa[n]-Qa[a]).map(n=>`${this.options.prepend}${e.ordinal?`ordinal${this.options.prepend}`:""}${n}`):[]}getSuffix(t,e,i={}){const n=this.getRule(t,i);return n?`${this.options.prepend}${i.ordinal?`ordinal${this.options.prepend}`:""}${n.select(e)}`:(this.logger.warn(`no plural rule found for: ${t}`),this.getSuffix("dev",e,i))}}const ts=(o,t,e,i=".",n=!0)=>{let a=wl(o,t,e);return!a&&n&&w(e)&&(a=Fo(o,e,i),a===void 0&&(a=Fo(t,e,i))),a},Ko=o=>o.replace(/\$/g,"$$$$");class is{constructor(t={}){this.logger=qe.create("interpolator"),this.options=t,this.format=t?.interpolation?.format||(e=>e),this.init(t)}init(t={}){t.interpolation||(t.interpolation={escapeValue:!0});const{escape:e,escapeValue:i,useRawValueToEscape:n,prefix:a,prefixEscaped:s,suffix:r,suffixEscaped:l,formatSeparator:c,unescapeSuffix:d,unescapePrefix:h,nestingPrefix:_,nestingPrefixEscaped:f,nestingSuffix:g,nestingSuffixEscaped:E,nestingOptionsSeparator:T,maxReplaces:G,alwaysFormat:I}=t.interpolation;this.escape=e!==void 0?e:El,this.escapeValue=i!==void 0?i:!0,this.useRawValueToEscape=n!==void 0?n:!1,this.prefix=a?ui(a):s||"{{",this.suffix=r?ui(r):l||"}}",this.formatSeparator=c||",",this.unescapePrefix=d?"":h||"-",this.unescapeSuffix=this.unescapePrefix?"":d||"",this.nestingPrefix=_?ui(_):f||ui("$t("),this.nestingSuffix=g?ui(g):E||ui(")"),this.nestingOptionsSeparator=T||",",this.maxReplaces=G||1e3,this.alwaysFormat=I!==void 0?I:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const t=(e,i)=>e?.source===i?(e.lastIndex=0,e):new RegExp(i,"g");this.regexp=t(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=t(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=t(this.nestingRegexp,`${this.nestingPrefix}((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`)}interpolate(t,e,i,n){let a,s,r;const l=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},c=f=>{if(f.indexOf(this.formatSeparator)<0){const G=ts(e,l,f,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(G,void 0,i,{...n,...e,interpolationkey:f}):G}const g=f.split(this.formatSeparator),E=g.shift().trim(),T=g.join(this.formatSeparator).trim();return this.format(ts(e,l,E,this.options.keySeparator,this.options.ignoreJSONStructure),T,i,{...n,...e,interpolationkey:E})};this.resetRegExp();const d=n?.missingInterpolationHandler||this.options.missingInterpolationHandler,h=n?.interpolation?.skipOnVariables!==void 0?n.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:f=>Ko(f)},{regex:this.regexp,safeValue:f=>this.escapeValue?Ko(this.escape(f)):Ko(f)}].forEach(f=>{for(r=0;a=f.regex.exec(t);){const g=a[1].trim();if(s=c(g),s===void 0)if(typeof d=="function"){const T=d(t,a,n);s=w(T)?T:""}else if(n&&Object.prototype.hasOwnProperty.call(n,g))s="";else if(h){s=a[0];continue}else this.logger.warn(`missed to pass in variable ${g} for interpolating ${t}`),s="";else!w(s)&&!this.useRawValueToEscape&&(s=ja(s));const E=f.safeValue(s);if(t=t.replace(a[0],E),h?(f.regex.lastIndex+=s.length,f.regex.lastIndex-=a[0].length):f.regex.lastIndex=0,r++,r>=this.maxReplaces)break}}),t}nest(t,e,i={}){let n,a,s;const r=(l,c)=>{const d=this.nestingOptionsSeparator;if(l.indexOf(d)<0)return l;const h=l.split(new RegExp(`${d}[ ]*{`));let _=`{${h[1]}`;l=h[0],_=this.interpolate(_,s);const f=_.match(/'/g),g=_.match(/"/g);((f?.length??0)%2===0&&!g||g.length%2!==0)&&(_=_.replace(/'/g,'"'));try{s=JSON.parse(_),c&&(s={...c,...s})}catch(E){return this.logger.warn(`failed parsing options string in nesting for key ${l}`,E),`${l}${d}${_}`}return s.defaultValue&&s.defaultValue.indexOf(this.prefix)>-1&&delete s.defaultValue,l};for(;n=this.nestingRegexp.exec(t);){let l=[];s={...i},s=s.replace&&!w(s.replace)?s.replace:s,s.applyPostProcessor=!1,delete s.defaultValue;const c=/{.*}/.test(n[1])?n[1].lastIndexOf("}")+1:n[1].indexOf(this.formatSeparator);if(c!==-1&&(l=n[1].slice(c).split(this.formatSeparator).map(d=>d.trim()).filter(Boolean),n[1]=n[1].slice(0,c)),a=e(r.call(this,n[1].trim(),s),s),a&&n[0]===t&&!w(a))return a;w(a)||(a=ja(a)),a||(this.logger.warn(`missed to resolve ${n[1]} for nesting ${t}`),a=""),l.length&&(a=l.reduce((d,h)=>this.format(d,h,i.lng,{...i,interpolationkey:n[1].trim()}),a.trim())),t=t.replace(n[0],a),this.regexp.lastIndex=0}return t}}const Vl=o=>{let t=o.toLowerCase().trim();const e={};if(o.indexOf("(")>-1){const i=o.split("(");t=i[0].toLowerCase().trim();const n=i[1].substring(0,i[1].length-1);t==="currency"&&n.indexOf(":")<0?e.currency||(e.currency=n.trim()):t==="relativetime"&&n.indexOf(":")<0?e.range||(e.range=n.trim()):n.split(";").forEach(s=>{if(s){const[r,...l]=s.split(":"),c=l.join(":").trim().replace(/^'+|'+$/g,""),d=r.trim();e[d]||(e[d]=c),c==="false"&&(e[d]=!1),c==="true"&&(e[d]=!0),isNaN(c)||(e[d]=parseInt(c,10))}})}return{formatName:t,formatOptions:e}},os=o=>{const t={};return(e,i,n)=>{let a=n;n&&n.interpolationkey&&n.formatParams&&n.formatParams[n.interpolationkey]&&n[n.interpolationkey]&&(a={...a,[n.interpolationkey]:void 0});const s=i+JSON.stringify(a);let r=t[s];return r||(r=o(Ti(i),n),t[s]=r),r(e)}},Ml=o=>(t,e,i)=>o(Ti(e),i)(t);class Ol{constructor(t={}){this.logger=qe.create("formatter"),this.options=t,this.init(t)}init(t,e={interpolation:{}}){this.formatSeparator=e.interpolation.formatSeparator||",";const i=e.cacheInBuiltFormats?os:Ml;this.formats={number:i((n,a)=>{const s=new Intl.NumberFormat(n,{...a});return r=>s.format(r)}),currency:i((n,a)=>{const s=new Intl.NumberFormat(n,{...a,style:"currency"});return r=>s.format(r)}),datetime:i((n,a)=>{const s=new Intl.DateTimeFormat(n,{...a});return r=>s.format(r)}),relativetime:i((n,a)=>{const s=new Intl.RelativeTimeFormat(n,{...a});return r=>s.format(r,a.range||"day")}),list:i((n,a)=>{const s=new Intl.ListFormat(n,{...a});return r=>s.format(r)})}}add(t,e){this.formats[t.toLowerCase().trim()]=e}addCached(t,e){this.formats[t.toLowerCase().trim()]=os(e)}format(t,e,i,n={}){const a=e.split(this.formatSeparator);if(a.length>1&&a[0].indexOf("(")>1&&a[0].indexOf(")")<0&&a.find(r=>r.indexOf(")")>-1)){const r=a.findIndex(l=>l.indexOf(")")>-1);a[0]=[a[0],...a.splice(1,r)].join(this.formatSeparator)}return a.reduce((r,l)=>{const{formatName:c,formatOptions:d}=Vl(l);if(this.formats[c]){let h=r;try{const _=n?.formatParams?.[n.interpolationkey]||{},f=_.locale||_.lng||n.locale||n.lng||i;h=this.formats[c](r,f,{...d,...n,..._})}catch(_){this.logger.warn(_)}return h}else this.logger.warn(`there was no format function for ${c}`);return r},t)}}const Bl=(o,t)=>{o.pending[t]!==void 0&&(delete o.pending[t],o.pendingCount--)};class Hl extends ro{constructor(t,e,i,n={}){super(),this.backend=t,this.store=e,this.services=i,this.languageUtils=i.languageUtils,this.options=n,this.logger=qe.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=n.maxParallelReads||10,this.readingCalls=0,this.maxRetries=n.maxRetries>=0?n.maxRetries:5,this.retryTimeout=n.retryTimeout>=1?n.retryTimeout:350,this.state={},this.queue=[],this.backend?.init?.(i,n.backend,n)}queueLoad(t,e,i,n){const a={},s={},r={},l={};return t.forEach(c=>{let d=!0;e.forEach(h=>{const _=`${c}|${h}`;!i.reload&&this.store.hasResourceBundle(c,h)?this.state[_]=2:this.state[_]<0||(this.state[_]===1?s[_]===void 0&&(s[_]=!0):(this.state[_]=1,d=!1,s[_]===void 0&&(s[_]=!0),a[_]===void 0&&(a[_]=!0),l[h]===void 0&&(l[h]=!0)))}),d||(r[c]=!0)}),(Object.keys(a).length||Object.keys(s).length)&&this.queue.push({pending:s,pendingCount:Object.keys(s).length,loaded:{},errors:[],callback:n}),{toLoad:Object.keys(a),pending:Object.keys(s),toLoadLanguages:Object.keys(r),toLoadNamespaces:Object.keys(l)}}loaded(t,e,i){const n=t.split("|"),a=n[0],s=n[1];e&&this.emit("failedLoading",a,s,e),!e&&i&&this.store.addResourceBundle(a,s,i,void 0,void 0,{skipCopy:!0}),this.state[t]=e?-1:2,e&&i&&(this.state[t]=0);const r={};this.queue.forEach(l=>{yl(l.loaded,[a],s),Bl(l,t),e&&l.errors.push(e),l.pendingCount===0&&!l.done&&(Object.keys(l.loaded).forEach(c=>{r[c]||(r[c]={});const d=l.loaded[c];d.length&&d.forEach(h=>{r[c][h]===void 0&&(r[c][h]=!0)})}),l.done=!0,l.errors.length?l.callback(l.errors):l.callback())}),this.emit("loaded",r),this.queue=this.queue.filter(l=>!l.done)}read(t,e,i,n=0,a=this.retryTimeout,s){if(!t.length)return s(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:t,ns:e,fcName:i,tried:n,wait:a,callback:s});return}this.readingCalls++;const r=(c,d)=>{if(this.readingCalls--,this.waitingReads.length>0){const h=this.waitingReads.shift();this.read(h.lng,h.ns,h.fcName,h.tried,h.wait,h.callback)}if(c&&d&&n<this.maxRetries){setTimeout(()=>{this.read.call(this,t,e,i,n+1,a*2,s)},a);return}s(c,d)},l=this.backend[i].bind(this.backend);if(l.length===2){try{const c=l(t,e);c&&typeof c.then=="function"?c.then(d=>r(null,d)).catch(r):r(null,c)}catch(c){r(c)}return}return l(t,e,r)}prepareLoading(t,e,i={},n){if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),n&&n();w(t)&&(t=this.languageUtils.toResolveHierarchy(t)),w(e)&&(e=[e]);const a=this.queueLoad(t,e,i,n);if(!a.toLoad.length)return a.pending.length||n(),null;a.toLoad.forEach(s=>{this.loadOne(s)})}load(t,e,i){this.prepareLoading(t,e,{},i)}reload(t,e,i){this.prepareLoading(t,e,{reload:!0},i)}loadOne(t,e=""){const i=t.split("|"),n=i[0],a=i[1];this.read(n,a,"read",void 0,void 0,(s,r)=>{s&&this.logger.warn(`${e}loading namespace ${a} for language ${n} failed`,s),!s&&r&&this.logger.log(`${e}loaded namespace ${a} for language ${n}`,r),this.loaded(t,s,r)})}saveMissing(t,e,i,n,a,s={},r=()=>{}){if(this.services?.utils?.hasLoadedNamespace&&!this.services?.utils?.hasLoadedNamespace(e)){this.logger.warn(`did not save key "${i}" as the namespace "${e}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(i==null||i==="")){if(this.backend?.create){const l={...s,isUpdate:a},c=this.backend.create.bind(this.backend);if(c.length<6)try{let d;c.length===5?d=c(t,e,i,n,l):d=c(t,e,i,n),d&&typeof d.then=="function"?d.then(h=>r(null,h)).catch(r):r(null,d)}catch(d){r(d)}else c(t,e,i,n,r,l)}!t||!t[0]||this.store.addResource(t[0],e,i,n)}}}const qo=()=>({debug:!1,initAsync:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:o=>{let t={};if(typeof o[1]=="object"&&(t=o[1]),w(o[1])&&(t.defaultValue=o[1]),w(o[2])&&(t.tDescription=o[2]),typeof o[2]=="object"||typeof o[3]=="object"){const e=o[3]||o[2];Object.keys(e).forEach(i=>{t[i]=e[i]})}return t},interpolation:{escapeValue:!0,format:o=>o,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0},cacheInBuiltFormats:!0}),ns=o=>(w(o.ns)&&(o.ns=[o.ns]),w(o.fallbackLng)&&(o.fallbackLng=[o.fallbackLng]),w(o.fallbackNS)&&(o.fallbackNS=[o.fallbackNS]),o.supportedLngs?.indexOf?.("cimode")<0&&(o.supportedLngs=o.supportedLngs.concat(["cimode"])),typeof o.initImmediate=="boolean"&&(o.initAsync=o.initImmediate),o),uo=()=>{},Rl=o=>{Object.getOwnPropertyNames(Object.getPrototypeOf(o)).forEach(e=>{typeof o[e]=="function"&&(o[e]=o[e].bind(o))})};class $i extends ro{constructor(t={},e){if(super(),this.options=ns(t),this.services={},this.logger=qe,this.modules={external:[]},Rl(this),e&&!this.isInitialized&&!t.isClone){if(!this.options.initAsync)return this.init(t,e),this;setTimeout(()=>{this.init(t,e)},0)}}init(t={},e){this.isInitializing=!0,typeof t=="function"&&(e=t,t={}),t.defaultNS==null&&t.ns&&(w(t.ns)?t.defaultNS=t.ns:t.ns.indexOf("translation")<0&&(t.defaultNS=t.ns[0]));const i=qo();this.options={...i,...this.options,...ns(t)},this.options.interpolation={...i.interpolation,...this.options.interpolation},t.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=t.keySeparator),t.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=t.nsSeparator),typeof this.options.overloadTranslationOptionHandler!="function"&&(this.options.overloadTranslationOptionHandler=i.overloadTranslationOptionHandler);const n=c=>c?typeof c=="function"?new c:c:null;if(!this.options.isClone){this.modules.logger?qe.init(n(this.modules.logger),this.options):qe.init(null,this.options);let c;this.modules.formatter?c=this.modules.formatter:c=Ol;const d=new Xa(this.options);this.store=new qa(this.options.resources,this.options);const h=this.services;h.logger=qe,h.resourceStore=this.store,h.languageUtils=d,h.pluralResolver=new Dl(d,{prepend:this.options.pluralSeparator,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),this.options.interpolation.format&&this.options.interpolation.format!==i.interpolation.format&&this.logger.deprecate("init: you are still using the legacy format function, please use the new approach: https://www.i18next.com/translation-function/formatting"),c&&(!this.options.interpolation.format||this.options.interpolation.format===i.interpolation.format)&&(h.formatter=n(c),h.formatter.init&&h.formatter.init(h,this.options),this.options.interpolation.format=h.formatter.format.bind(h.formatter)),h.interpolator=new is(this.options),h.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},h.backendConnector=new Hl(n(this.modules.backend),h.resourceStore,h,this.options),h.backendConnector.on("*",(f,...g)=>{this.emit(f,...g)}),this.modules.languageDetector&&(h.languageDetector=n(this.modules.languageDetector),h.languageDetector.init&&h.languageDetector.init(h,this.options.detection,this.options)),this.modules.i18nFormat&&(h.i18nFormat=n(this.modules.i18nFormat),h.i18nFormat.init&&h.i18nFormat.init(this)),this.translator=new lo(this.services,this.options),this.translator.on("*",(f,...g)=>{this.emit(f,...g)}),this.modules.external.forEach(f=>{f.init&&f.init(this)})}if(this.format=this.options.interpolation.format,e||(e=uo),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const c=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);c.length>0&&c[0]!=="dev"&&(this.options.lng=c[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(c=>{this[c]=(...d)=>this.store[c](...d)}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(c=>{this[c]=(...d)=>(this.store[c](...d),this)});const r=Si(),l=()=>{const c=(d,h)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),r.resolve(h),e(d,h)};if(this.languages&&!this.isInitialized)return c(null,this.t.bind(this));this.changeLanguage(this.options.lng,c)};return this.options.resources||!this.options.initAsync?l():setTimeout(l,0),r}loadResources(t,e=uo){let i=e;const n=w(t)?t:this.language;if(typeof t=="function"&&(i=t),!this.options.resources||this.options.partialBundledLanguages){if(n?.toLowerCase()==="cimode"&&(!this.options.preload||this.options.preload.length===0))return i();const a=[],s=r=>{if(!r||r==="cimode")return;this.services.languageUtils.toResolveHierarchy(r).forEach(c=>{c!=="cimode"&&a.indexOf(c)<0&&a.push(c)})};n?s(n):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(l=>s(l)),this.options.preload?.forEach?.(r=>s(r)),this.services.backendConnector.load(a,this.options.ns,r=>{!r&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),i(r)})}else i(null)}reloadResources(t,e,i){const n=Si();return typeof t=="function"&&(i=t,t=void 0),typeof e=="function"&&(i=e,e=void 0),t||(t=this.languages),e||(e=this.options.ns),i||(i=uo),this.services.backendConnector.reload(t,e,a=>{n.resolve(),i(a)}),n}use(t){if(!t)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!t.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return t.type==="backend"&&(this.modules.backend=t),(t.type==="logger"||t.log&&t.warn&&t.error)&&(this.modules.logger=t),t.type==="languageDetector"&&(this.modules.languageDetector=t),t.type==="i18nFormat"&&(this.modules.i18nFormat=t),t.type==="postProcessor"&&Ya.addPostProcessor(t),t.type==="formatter"&&(this.modules.formatter=t),t.type==="3rdParty"&&this.modules.external.push(t),this}setResolvedLanguage(t){if(!(!t||!this.languages)&&!(["cimode","dev"].indexOf(t)>-1)){for(let e=0;e<this.languages.length;e++){const i=this.languages[e];if(!(["cimode","dev"].indexOf(i)>-1)&&this.store.hasLanguageSomeTranslations(i)){this.resolvedLanguage=i;break}}!this.resolvedLanguage&&this.languages.indexOf(t)<0&&this.store.hasLanguageSomeTranslations(t)&&(this.resolvedLanguage=t,this.languages.unshift(t))}}changeLanguage(t,e){this.isLanguageChangingTo=t;const i=Si();this.emit("languageChanging",t);const n=r=>{this.language=r,this.languages=this.services.languageUtils.toResolveHierarchy(r),this.resolvedLanguage=void 0,this.setResolvedLanguage(r)},a=(r,l)=>{l?this.isLanguageChangingTo===t&&(n(l),this.translator.changeLanguage(l),this.isLanguageChangingTo=void 0,this.emit("languageChanged",l),this.logger.log("languageChanged",l)):this.isLanguageChangingTo=void 0,i.resolve((...c)=>this.t(...c)),e&&e(r,(...c)=>this.t(...c))},s=r=>{!t&&!r&&this.services.languageDetector&&(r=[]);const l=w(r)?r:r&&r[0],c=this.store.hasLanguageSomeTranslations(l)?l:this.services.languageUtils.getBestMatchFromCodes(w(r)?[r]:r);c&&(this.language||n(c),this.translator.language||this.translator.changeLanguage(c),this.services.languageDetector?.cacheUserLanguage?.(c)),this.loadResources(c,d=>{a(d,c)})};return!t&&this.services.languageDetector&&!this.services.languageDetector.async?s(this.services.languageDetector.detect()):!t&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(s):this.services.languageDetector.detect(s):s(t),i}getFixedT(t,e,i){const n=(a,s,...r)=>{let l;typeof s!="object"?l=this.options.overloadTranslationOptionHandler([a,s].concat(r)):l={...s},l.lng=l.lng||n.lng,l.lngs=l.lngs||n.lngs,l.ns=l.ns||n.ns,l.keyPrefix!==""&&(l.keyPrefix=l.keyPrefix||i||n.keyPrefix);const c=this.options.keySeparator||".";let d;return l.keyPrefix&&Array.isArray(a)?d=a.map(h=>(typeof h=="function"&&(h=Go(h,{...this.options,...s})),`${l.keyPrefix}${c}${h}`)):(typeof a=="function"&&(a=Go(a,{...this.options,...s})),d=l.keyPrefix?`${l.keyPrefix}${c}${a}`:a),this.t(d,l)};return w(t)?n.lng=t:n.lngs=t,n.ns=e,n.keyPrefix=i,n}t(...t){return this.translator?.translate(...t)}exists(...t){return this.translator?.exists(...t)}setDefaultNamespace(t){this.options.defaultNS=t}hasLoadedNamespace(t,e={}){if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const i=e.lng||this.resolvedLanguage||this.languages[0],n=this.options?this.options.fallbackLng:!1,a=this.languages[this.languages.length-1];if(i.toLowerCase()==="cimode")return!0;const s=(r,l)=>{const c=this.services.backendConnector.state[`${r}|${l}`];return c===-1||c===0||c===2};if(e.precheck){const r=e.precheck(this,s);if(r!==void 0)return r}return!!(this.hasResourceBundle(i,t)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||s(i,t)&&(!n||s(a,t)))}loadNamespaces(t,e){const i=Si();return this.options.ns?(w(t)&&(t=[t]),t.forEach(n=>{this.options.ns.indexOf(n)<0&&this.options.ns.push(n)}),this.loadResources(n=>{i.resolve(),e&&e(n)}),i):(e&&e(),Promise.resolve())}loadLanguages(t,e){const i=Si();w(t)&&(t=[t]);const n=this.options.preload||[],a=t.filter(s=>n.indexOf(s)<0&&this.services.languageUtils.isSupportedCode(s));return a.length?(this.options.preload=n.concat(a),this.loadResources(s=>{i.resolve(),e&&e(s)}),i):(e&&e(),Promise.resolve())}dir(t){if(t||(t=this.resolvedLanguage||(this.languages?.length>0?this.languages[0]:this.language)),!t)return"rtl";try{const n=new Intl.Locale(t);if(n&&n.getTextInfo){const a=n.getTextInfo();if(a&&a.direction)return a.direction}}catch{}const e=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],i=this.services?.languageUtils||new Xa(qo());return t.toLowerCase().indexOf("-latn")>1?"ltr":e.indexOf(i.getLanguagePartFromCode(t))>-1||t.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(t={},e){const i=new $i(t,e);return i.createInstance=$i.createInstance,i}cloneInstance(t={},e=uo){const i=t.forkResourceStore;i&&delete t.forkResourceStore;const n={...this.options,...t,isClone:!0},a=new $i(n);if((t.debug!==void 0||t.prefix!==void 0)&&(a.logger=a.logger.clone(t)),["store","services","language"].forEach(r=>{a[r]=this[r]}),a.services={...this.services},a.services.utils={hasLoadedNamespace:a.hasLoadedNamespace.bind(a)},i){const r=Object.keys(this.store.data).reduce((l,c)=>(l[c]={...this.store.data[c]},l[c]=Object.keys(l[c]).reduce((d,h)=>(d[h]={...l[c][h]},d),l[c]),l),{});a.store=new qa(r,n),a.services.resourceStore=a.store}if(t.interpolation){const l={...qo().interpolation,...this.options.interpolation,...t.interpolation},c={...n,interpolation:l};a.services.interpolator=new is(c)}return a.translator=new lo(a.services,n),a.translator.on("*",(r,...l)=>{a.emit(r,...l)}),a.init(n,e),a.translator.options=n,a.translator.backendConnector.services.utils={hasLoadedNamespace:a.hasLoadedNamespace.bind(a)},a}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const X=$i.createInstance();X.createInstance,X.dir,X.init,X.loadResources,X.reloadResources,X.use,X.changeLanguage,X.getFixedT,X.t,X.exists,X.setDefaultNamespace,X.hasLoadedNamespace,X.loadNamespaces,X.loadLanguages;const Nl={helloKintone:"Hello kintone plugin!"},Pl={helloKintone:"ようこそ kintone プラグイン！"},Ul=async()=>{const o=await zl();return await X.init({lng:o,fallbackLng:"en",resources:{en:{translation:Nl},ja:{translation:Pl}}}),X},zl=async()=>{try{const t=await kintone.getLoginUser();if(t.language)return t.language}catch(t){console.error("Error getting user language:",t)}const o=kintone.api.url("/k/v1/records.json");return o.includes("kintone.com")?"en":(o.includes("cybozu.com"),"ja")};const co=globalThis,Yo=co.ShadowRoot&&(co.ShadyCSS===void 0||co.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,as=Symbol(),ss=new WeakMap;let jl=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==as)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Yo&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=ss.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&ss.set(e,t))}return t}toString(){return this.cssText}};const Fl=o=>new jl(typeof o=="string"?o:o+"",void 0,as),Gl=(o,t)=>{if(Yo)o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const i=document.createElement("style"),n=co.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=e.cssText,o.appendChild(i)}},rs=Yo?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return Fl(e)})(o):o;const{is:Wl,defineProperty:Kl,getOwnPropertyDescriptor:ql,getOwnPropertyNames:Yl,getOwnPropertySymbols:Zl,getPrototypeOf:Jl}=Object,ho=globalThis,ls=ho.trustedTypes,Xl=ls?ls.emptyScript:"",Ql=ho.reactiveElementPolyfillSupport,Ai=(o,t)=>o,_o={toAttribute(o,t){switch(t){case Boolean:o=o?Xl:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},Zo=(o,t)=>!Wl(o,t),us={attribute:!0,type:String,converter:_o,reflect:!1,useDefault:!1,hasChanged:Zo};Symbol.metadata??=Symbol("metadata"),ho.litPropertyMetadata??=new WeakMap;let ci=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=us){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),n=this.getPropertyDescriptor(t,i,e);n!==void 0&&Kl(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){const{get:n,set:a}=ql(this.prototype,t)??{get(){return this[e]},set(s){this[e]=s}};return{get:n,set(s){const r=n?.call(this);a?.call(this,s),this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??us}static _$Ei(){if(this.hasOwnProperty(Ai("elementProperties")))return;const t=Jl(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Ai("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ai("properties"))){const e=this.properties,i=[...Yl(e),...Zl(e)];for(const n of i)this.createProperty(n,e[n])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[i,n]of e)this.elementProperties.set(i,n)}this._$Eh=new Map;for(const[e,i]of this.elementProperties){const n=this._$Eu(e,i);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const n of i)e.unshift(rs(n))}else t!==void 0&&e.push(rs(t));return e}static _$Eu(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Gl(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,i);if(n!==void 0&&i.reflect===!0){const a=(i.converter?.toAttribute!==void 0?i.converter:_o).toAttribute(e,i.type);this._$Em=t,a==null?this.removeAttribute(n):this.setAttribute(n,a),this._$Em=null}}_$AK(t,e){const i=this.constructor,n=i._$Eh.get(t);if(n!==void 0&&this._$Em!==n){const a=i.getPropertyOptions(n),s=typeof a.converter=="function"?{fromAttribute:a.converter}:a.converter?.fromAttribute!==void 0?a.converter:_o;this._$Em=n;const r=s.fromAttribute(e,a.type);this[n]=r??this._$Ej?.get(n)??r,this._$Em=null}}requestUpdate(t,e,i,n=!1,a){if(t!==void 0){const s=this.constructor;if(n===!1&&(a=this[t]),i??=s.getPropertyOptions(t),!((i.hasChanged??Zo)(a,e)||i.useDefault&&i.reflect&&a===this._$Ej?.get(t)&&!this.hasAttribute(s._$Eu(t,i))))return;this.C(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:n,wrapped:a},s){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,s??e??this[t]),a!==!0||s!==void 0)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),n===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[n,a]of this._$Ep)this[n]=a;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[n,a]of i){const{wrapped:s}=a,r=this[n];s!==!0||this._$AL.has(n)||r===void 0||this.C(n,void 0,a,r)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(e)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};ci.elementStyles=[],ci.shadowRootOptions={mode:"open"},ci[Ai("elementProperties")]=new Map,ci[Ai("finalized")]=new Map,Ql?.({ReactiveElement:ci}),(ho.reactiveElementVersions??=[]).push("2.1.2");const Jo=globalThis,cs=o=>o,po=Jo.trustedTypes,ds=po?po.createPolicy("lit-html",{createHTML:o=>o}):void 0,hs="$lit$",St=`lit$${Math.random().toFixed(9).slice(2)}$`,_s="?"+St,eu=`<${_s}>`,Pt=document,Li=()=>Pt.createComment(""),Di=o=>o===null||typeof o!="object"&&typeof o!="function",Xo=Array.isArray,tu=o=>Xo(o)||typeof o?.[Symbol.iterator]=="function",Qo=`[ 	
\f\r]`,Vi=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ps=/-->/g,fs=/>/g,Ut=RegExp(`>|${Qo}(?:([^\\s"'>=/]+)(${Qo}*=${Qo}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),gs=/'/g,bs=/"/g,ms=/^(?:script|style|textarea|title)$/i,vs=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),p=vs(1),C=vs(2),zt=Symbol.for("lit-noChange"),R=Symbol.for("lit-nothing"),ks=new WeakMap,jt=Pt.createTreeWalker(Pt,129);function xs(o,t){if(!Xo(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return ds!==void 0?ds.createHTML(t):t}const iu=(o,t)=>{const e=o.length-1,i=[];let n,a=t===2?"<svg>":t===3?"<math>":"",s=Vi;for(let r=0;r<e;r++){const l=o[r];let c,d,h=-1,_=0;for(;_<l.length&&(s.lastIndex=_,d=s.exec(l),d!==null);)_=s.lastIndex,s===Vi?d[1]==="!--"?s=ps:d[1]!==void 0?s=fs:d[2]!==void 0?(ms.test(d[2])&&(n=RegExp("</"+d[2],"g")),s=Ut):d[3]!==void 0&&(s=Ut):s===Ut?d[0]===">"?(s=n??Vi,h=-1):d[1]===void 0?h=-2:(h=s.lastIndex-d[2].length,c=d[1],s=d[3]===void 0?Ut:d[3]==='"'?bs:gs):s===bs||s===gs?s=Ut:s===ps||s===fs?s=Vi:(s=Ut,n=void 0);const f=s===Ut&&o[r+1].startsWith("/>")?" ":"";a+=s===Vi?l+eu:h>=0?(i.push(c),l.slice(0,h)+hs+l.slice(h)+St+f):l+St+(h===-2?r:f)}return[xs(o,a+(o[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]};class Mi{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let a=0,s=0;const r=t.length-1,l=this.parts,[c,d]=iu(t,e);if(this.el=Mi.createElement(c,i),jt.currentNode=this.el.content,e===2||e===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(n=jt.nextNode())!==null&&l.length<r;){if(n.nodeType===1){if(n.hasAttributes())for(const h of n.getAttributeNames())if(h.endsWith(hs)){const _=d[s++],f=n.getAttribute(h).split(St),g=/([.?@])?(.*)/.exec(_);l.push({type:1,index:a,name:g[2],strings:f,ctor:g[1]==="."?nu:g[1]==="?"?au:g[1]==="@"?su:fo}),n.removeAttribute(h)}else h.startsWith(St)&&(l.push({type:6,index:a}),n.removeAttribute(h));if(ms.test(n.tagName)){const h=n.textContent.split(St),_=h.length-1;if(_>0){n.textContent=po?po.emptyScript:"";for(let f=0;f<_;f++)n.append(h[f],Li()),jt.nextNode(),l.push({type:2,index:++a});n.append(h[_],Li())}}}else if(n.nodeType===8)if(n.data===_s)l.push({type:2,index:a});else{let h=-1;for(;(h=n.data.indexOf(St,h+1))!==-1;)l.push({type:7,index:a}),h+=St.length-1}a++}}static createElement(t,e){const i=Pt.createElement("template");return i.innerHTML=t,i}}function di(o,t,e=o,i){if(t===zt)return t;let n=i!==void 0?e._$Co?.[i]:e._$Cl;const a=Di(t)?void 0:t._$litDirective$;return n?.constructor!==a&&(n?._$AO?.(!1),a===void 0?n=void 0:(n=new a(o),n._$AT(o,e,i)),i!==void 0?(e._$Co??=[])[i]=n:e._$Cl=n),n!==void 0&&(t=di(o,n._$AS(o,t.values),n,i)),t}class ou{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,n=(t?.creationScope??Pt).importNode(e,!0);jt.currentNode=n;let a=jt.nextNode(),s=0,r=0,l=i[0];for(;l!==void 0;){if(s===l.index){let c;l.type===2?c=new Oi(a,a.nextSibling,this,t):l.type===1?c=new l.ctor(a,l.name,l.strings,this,t):l.type===6&&(c=new ru(a,this,t)),this._$AV.push(c),l=i[++r]}s!==l?.index&&(a=jt.nextNode(),s++)}return jt.currentNode=Pt,n}p(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Oi{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,n){this.type=2,this._$AH=R,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=di(this,t,e),Di(t)?t===R||t==null||t===""?(this._$AH!==R&&this._$AR(),this._$AH=R):t!==this._$AH&&t!==zt&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):tu(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==R&&Di(this._$AH)?this._$AA.nextSibling.data=t:this.T(Pt.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,n=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=Mi.createElement(xs(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===n)this._$AH.p(e);else{const a=new ou(n,this),s=a.u(this.options);a.p(e),this.T(s),this._$AH=a}}_$AC(t){let e=ks.get(t.strings);return e===void 0&&ks.set(t.strings,e=new Mi(t)),e}k(t){Xo(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const a of t)n===e.length?e.push(i=new Oi(this.O(Li()),this.O(Li()),this,this.options)):i=e[n],i._$AI(a),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const i=cs(t).nextSibling;cs(t).remove(),t=i}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class fo{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,n,a){this.type=1,this._$AH=R,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=a,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=R}_$AI(t,e=this,i,n){const a=this.strings;let s=!1;if(a===void 0)t=di(this,t,e,0),s=!Di(t)||t!==this._$AH&&t!==zt,s&&(this._$AH=t);else{const r=t;let l,c;for(t=a[0],l=0;l<a.length-1;l++)c=di(this,r[i+l],e,l),c===zt&&(c=this._$AH[l]),s||=!Di(c)||c!==this._$AH[l],c===R?t=R:t!==R&&(t+=(c??"")+a[l+1]),this._$AH[l]=c}s&&!n&&this.j(t)}j(t){t===R?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class nu extends fo{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===R?void 0:t}}class au extends fo{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==R)}}class su extends fo{constructor(t,e,i,n,a){super(t,e,i,n,a),this.type=5}_$AI(t,e=this){if((t=di(this,t,e,0)??R)===zt)return;const i=this._$AH,n=t===R&&i!==R||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,a=t!==R&&(i===R||n);n&&this.element.removeEventListener(this.name,this,i),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class ru{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){di(this,t)}}const lu=Jo.litHtmlPolyfillSupport;lu?.(Mi,Oi),(Jo.litHtmlVersions??=[]).push("3.3.2");const uu=(o,t,e)=>{const i=e?.renderBefore??t;let n=i._$litPart$;if(n===void 0){const a=e?.renderBefore??null;i._$litPart$=n=new Oi(t.insertBefore(Li(),a),a,void 0,e??{})}return n._$AI(o),n};const en=globalThis;let Bi=class extends ci{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=uu(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return zt}};Bi._$litElement$=!0,Bi.finalized=!0,en.litElementHydrateSupport?.({LitElement:Bi});const cu=en.litElementPolyfillSupport;cu?.({LitElement:Bi}),(en.litElementVersions??=[]).push("4.2.2");const du={attribute:!0,type:String,converter:_o,reflect:!1,hasChanged:Zo},hu=(o=du,t,e)=>{const{kind:i,metadata:n}=e;let a=globalThis.litPropertyMetadata.get(n);if(a===void 0&&globalThis.litPropertyMetadata.set(n,a=new Map),i==="setter"&&((o=Object.create(o)).wrapped=!0),a.set(e.name,o),i==="accessor"){const{name:s}=e;return{set(r){const l=t.get.call(this);t.set.call(this,r),this.requestUpdate(s,l,o,!0,r)},init(r){return r!==void 0&&this.C(s,void 0,o,r),r}}}if(i==="setter"){const{name:s}=e;return function(r){const l=this[s];t.call(this,r),this.requestUpdate(s,l,o,!0,r)}}throw Error("Unsupported decorator location: "+i)};function u(o){return(t,e)=>typeof e=="object"?hu(o,t,e):((i,n,a)=>{const s=n.hasOwnProperty(a);return n.constructor.createProperty(a,i),s?Object.getOwnPropertyDescriptor(n,a):void 0})(o,t,e)}function v(o){return u({...o,state:!0,attribute:!1})}const ys=(o,t,e)=>(e.configurable=!0,e.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(o,t,e),e);function b(o,t){return(e,i,n)=>{const a=s=>s.renderRoot?.querySelector(o)??null;return ys(e,i,{get(){return a(this)}})}}let _u;function q(o){return(t,e)=>ys(t,e,{get(){return(this.renderRoot??(_u??=document.createDocumentFragment())).querySelectorAll(o)}})}const ws=1024,Cs=1048576,Es=1073741824,pu="NaN size",Ss={ATTACHMENT_BROWSE:"Browse",ATTACHMENT_DRAG_DROP_ZONE:"Drop files here."},fu={ATTACHMENT_BROWSE:"参照",ATTACHMENT_DRAG_DROP_ZONE:"ここにファイルをドロップします。"},gu={ATTACHMENT_BROWSE:"选择文件",ATTACHMENT_DRAG_DROP_ZONE:"拖动文件到此。"},bu={ATTACHMENT_BROWSE:"選擇檔案",ATTACHMENT_DRAG_DROP_ZONE:"拖曳檔案到此。"},mu={ATTACHMENT_BROWSE:"Examinar",ATTACHMENT_DRAG_DROP_ZONE:"Suelte los archivos aquí."},y={ITEMS:{IS_NOT_ARRAY:"'items' property is not array.",IS_DUPLICATED:"'value' property is not unique in items.",IS_NOT_SPECIFIED:"'value' property is not specified in items."},FILES:{IS_NOT_ARRAY:"'files' property is not array."},VALUE:{IS_NOT_ARRAY:"'value' property is not array.",IS_NOT_STRING:"'value' property is not string."},SELECTED_INDEX:{IS_NOT_ARRAY:"'selectedIndex' property is not array.",IS_NOT_NUMBER:"'selectedIndex' property is not number."},COLUMNS:{IS_NOT_ARRAY:"'columns' property is not array.",FIELD_REQUIRED:"'field' property is not specified in columns.",FIELD_UNIQUE:"'field' property is not unique in columns."},ROWS_PER_PAGE:{INVALID:"'rowsPerPage' property is not positive integer."},DATA:{IS_NOT_ARRAY:"'data' property is not array."},CONTAINER:{INVALID:"'container' property is not HTMLElement."}};const vu={CHILD:2},ku=o=>(...t)=>({_$litDirective$:o,values:t});class xu{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}let tn=class extends xu{constructor(t){if(super(t),this.it=R,t.type!==vu.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===R||t==null)return this._t=void 0,this.it=t;if(t===zt)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}};tn.directiveName="unsafeHTML",tn.resultType=1;const yu=ku(tn),Ft=60,pt=24,He=12,Ye={AM:"AM",PM:"PM"},Is='"max" must be greater than or equal to "min".',Ts="Time is out of valid range.",$s="'timeStep' property is not number.",on="00:00",As="23:59",Q={VALUE:"'value' property format is not valid.",MAX:"'max' property format is not valid.",MIN:"'min' property format is not valid.",TIME_STEP:"'timeStep' property format is not valid."},Ls={MONTH_SELECT:["JANUARY","FEBRUARY","MARCH","APRIL","MAY","JUNE","JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER"],YEAR_SELECT_POSTFIX:"",WEEK_DAYS:[{text:"SUN",abbr:"Sunday"},{text:"MON",abbr:"Monday"},{text:"TUE",abbr:"Tuesday"},{text:"WED",abbr:"Wednesday"},{text:"THU",abbr:"Thursday"},{text:"FRI",abbr:"Friday"},{text:"SAT",abbr:"Saturday"}],INVALID_FORMAT:"Format is not valid.",INVALID_TIME_FORMAT:"Format is not valid.",CALENDAR_FOOTER_TEXT:{none:"None",today:"Today",close:"Close"},TIME_IS_OUT_OF_VALID_RANGE:"Time is out of valid range."},wu={MONTH_SELECT:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],YEAR_SELECT_POSTFIX:"年",WEEK_DAYS:[{text:"日",abbr:"日"},{text:"月",abbr:"月"},{text:"火",abbr:"火"},{text:"水",abbr:"水"},{text:"木",abbr:"木"},{text:"金",abbr:"金"},{text:"土",abbr:"土"}],INVALID_FORMAT:"日付の形式が不正です。",INVALID_TIME_FORMAT:"時刻の形式が不正です。",CALENDAR_FOOTER_TEXT:{none:"選択を解除",today:"今日",close:"閉じる"},TIME_IS_OUT_OF_VALID_RANGE:"時刻が有効な範囲外です。"},Cu={MONTH_SELECT:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],YEAR_SELECT_POSTFIX:"年",WEEK_DAYS:[{text:"周日",abbr:"周日"},{text:"周一",abbr:"周一"},{text:"周二",abbr:"周二"},{text:"周三",abbr:"周三"},{text:"周四",abbr:"周四"},{text:"周五",abbr:"周五"},{text:"周六",abbr:"周六"}],INVALID_FORMAT:"日期格式不正确。",INVALID_TIME_FORMAT:"时间格式不正确。",CALENDAR_FOOTER_TEXT:{none:"清空",today:"今天",close:"关闭"},TIME_IS_OUT_OF_VALID_RANGE:"时间超出有效范围。"},Eu={MONTH_SELECT:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],YEAR_SELECT_POSTFIX:"年",WEEK_DAYS:[{text:"週日",abbr:"週日"},{text:"週一",abbr:"週一"},{text:"週二",abbr:"週二"},{text:"週三",abbr:"週三"},{text:"週四",abbr:"週四"},{text:"週五",abbr:"週五"},{text:"週六",abbr:"週六"}],INVALID_FORMAT:"日期格式錯誤。",INVALID_TIME_FORMAT:"時間格式錯誤。",CALENDAR_FOOTER_TEXT:{none:"清空",today:"今天",close:"關閉"},TIME_IS_OUT_OF_VALID_RANGE:"時間超出有效範圍。"},Su={MONTH_SELECT:["ENERO","FEBRERO","MARZO","ABRIL","MAYO","JUNIO","JULIO","AGOSTO","SEPTIEMBRE","OCTUBRE","NOVIEMBRE","DICIEMBRE"],YEAR_SELECT_POSTFIX:"",WEEK_DAYS:[{text:"Do.",abbr:"Domingo"},{text:"Lu.",abbr:"Lunes"},{text:"Ma.",abbr:"Martes"},{text:"Mi.",abbr:"Miércoles"},{text:"Ju.",abbr:"Jueves"},{text:"Vi.",abbr:"Viernes"},{text:"Sá.",abbr:"Sábado"}],INVALID_FORMAT:"Formato no válido.",INVALID_TIME_FORMAT:"Formato no válido.",CALENDAR_FOOTER_TEXT:{none:"Ninguno",today:"Hoy",close:"Cerrar"},TIME_IS_OUT_OF_VALID_RANGE:"La hora está fuera del rango válido."},Ds=(o,t)=>{const e=Mu(o,t);let i=new Date(e.start),n=[];const a=[];for(;i<=e.end;)n.push(Vu(i)),n.length===7&&(a.push(n),n=[]),i.setDate(i.getDate()+1),i=new Date(i);return a},Iu=(o,t,e,i)=>{const n=[],a=Math.round(t),s=hi(i),r=hi(e);if(a>0){const l=Math.floor((s-r)/a)+1;for(let c=0;c<l;c++){const d=Tu(r+c*a,o);n.push(d)}}return n},Tu=(o,t)=>{let e,i;e=Math.floor(o/Ft),i=o%Ft;const n=e%pt<He?Ye.AM:Ye.PM;return e=t?e%He:e%pt,e===0&&t&&(e=He),e<10&&(e="0"+e),i<10&&(i="0"+i),{label:e+":"+i+(t?" "+n:""),value:e+":"+i+(t?" "+n:"")}},hi=o=>{const t=o.split(":");let e=parseInt(t[0],10),i=parseInt(t[1],10);return isNaN(e)||isNaN(i)?0:(e<0?e=0:e>=pt&&(e=pt-1),i<0?i=0:i>=Ft&&(i=Ft-1),e*Ft+i)},It=(o,t)=>{const e=hi(o),i=hi(t);return e>i?1:e===i?0:-1},$u=(o,t)=>{const e=o.split(":"),i=parseInt(e[0],10),n=parseInt(e[1],10),a=i%pt;return isNaN(a)||isNaN(n)?{hours:"",minutes:"",suffix:""}:t?Lu(i,n):{hours:A(a),minutes:A(n),suffix:""}},Au=(o,t)=>{const e={hours:"",minutes:"",suffix:""},i=o.split(":"),n=parseInt(i[0],10),a=parseInt(i[1],10),s=n%pt;return isNaN(s)||(e.hours=A(t?Vs(s):s),e.suffix=t?Ms(s):""),isNaN(a)||(e.minutes=A(a)),e},Vs=o=>{let t=o%He;return t=t===0?He:t,t},Ms=o=>o>=He?Ye.PM:Ye.AM,Lu=(o,t)=>{const e=Ms(o),i=Vs(o);return{hours:A(i),minutes:A(t),suffix:e}},Hi=o=>{const[t,e]=o.split(" "),[i,n]=t.split(":");return e?`${Du(i,e)}:${n}`:o},Du=(o,t)=>{const e=parseInt(o,10);if(t===Ye.PM){const n=e===He?12:e+12;return A(n)}return A(e===He?0:e)},Vu=o=>{const t=new Date(o),e=t.getFullYear(),i=A(t.getMonth()+1),n=A(t.getDate()),a=`${t.getFullYear()}-${t.getMonth()+1}-${t.getDate()}`,s=`${e}-${i}-${n}`;return{text:a,attr:s}},Os=(o,t)=>{if(t&&!an(t)){const e=t.split("-");if(e.length!==3)return t;const i=e[0],n=e[1],a=e[2];return o==="en"?`${n}/${a}/${i}`:`${i}-${n}-${a}`}return t},nn=(o,t)=>{if(an(t))return t;const e=o==="en",i=e?"/":"-",n=t.split(i),a=e?n[2]:n[0],s=e?n[0]:n[1],r=e?n[1]:n[2];return`${a}-${s}-${r}`},an=o=>o==null||o.length===0||!/[^(^\s*)|(\s*$)]/.test(o),Tt=(o="ja")=>{const t=new Date,e=t.getFullYear(),i=A(t.getMonth()+1),n=A(t.getDate());return o==="ja"||o==="zh"?e+"-"+i+"-"+n:i+"/"+n+"/"+e},Bs=(o,t)=>{if(t&&!an(t)){const e=o==="en",i=e?"/":"-";if(new Date(`${t}${e?"":"T00:00:00"}`).getDate()!==parseInt(t.split(i)[e?1:2],10))return!1;const s=/^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/(\d{4})$/;if(o==="en")return t.match(s)!==null;const r=/^(\d{4})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/g;return t.match(r)!==null}return!1},A=(o,t=2)=>{const e=`0000000000${o}`;return e.substr(e.length-t)},Mu=(o,t)=>{const e=new Date(o,t);e.setDate(1);const i=new Date(e);i.setDate(i.getDate()-i.getDay());const n=new Date(o,t);n.setMonth(n.getMonth()+1,0);const a=new Date(n);a.setDate(a.getDate()+(6-a.getDay()));const s=(a.getTime()-i.getTime())/(1e3*60*60*24);return a.setDate(a.getDate()+(42-s)),{start:i,end:a}},N=o=>{switch(o){case"en":return Ls;case"zh":return Cu;case"ja":return wu;case"zh-TW":return Eu;case"es":return Su;default:return Ls}},Ou=(o=1)=>{const t=[];for(let e=0;e<=59;e+=o)t.push({value:A(e),label:A(e)});return t},Bu=(o=!1)=>o?Hs("AM").concat(Hs("PM")):Hu(),Hs=o=>{const t=[];t.push({value:`${o} 12`,label:`${o} 12`});for(let e=1;e<=11;e++)t.push({value:`${o} ${A(e)}`,label:`${o} ${A(e)}`});return t},Hu=()=>{const o=[];o.push({value:"00",label:"00"});for(let t=1;t<=23;t++)o.push({value:A(t),label:`${A(t)}`});return o},Rs=()=>C`
    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0.5V1.2764L6 7.5L12 1.2764V0.5L6 6.5L0 0.5Z" fill="#888888"/>
    </svg>
    `,Ru=()=>C`
    <svg
      class="kuc-base-datetime-calendar-header-1-23-1__group__button-icon"
      width="9"
      height="14"
      viewBox="0 0 9 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3.06077 7L8.53044 1.53033L7.46978 0.469666L0.939453 7L7.46978 13.5303L8.53044 12.4697L3.06077 7Z"
        fill="#888888"
      />
    </svg>`;function go(o,t){const e=o.querySelector(".kuc-base-datetime-listbox-1-23-1__listbox"),i=Ri(o);if(!o.parentElement||!e||!i)return;const{inputToBottom:n,inputToTop:a}=i,l=o.tagName.toLowerCase()==="kuc-base-datetime-header-month-1-23-1"?360:300,c=18,d=o.parentElement.getBoundingClientRect().height;if(e.style.maxHeight=l+"px",o.parentElement.style.position="relative",n>=l){if(e.style.height=l+"px",t==="bottom"){e.style.top=d+"px";return}e.style.bottom=d+"px";return}if(t==="bottom"){e.style.top=d+"px",e.style.height=n-c+"px";return}e.style.height=a-c+"px",e.style.top="auto",e.style.bottom=o.parentElement.getBoundingClientRect().height+"px"}const Ri=o=>{var t,e;if(!o.parentElement)return{inputToBottom:0,inputToTop:0,inputToRight:0,inputToLeft:0};const i=(t=o.closest("kuc-base-date-1-23-1"))!==null&&t!==void 0?t:o.closest("kuc-mobile-base-date-1-23-1"),a=((e=i.getElementsByClassName("kuc-base-date-1-23-1__input")[0])!==null&&e!==void 0?e:i.getElementsByClassName("kuc-mobile-base-date-1-23-1__group")[0]).getBoundingClientRect().width,s=window.innerHeight-o.parentElement.getBoundingClientRect().bottom,r=o.parentElement.getBoundingClientRect().top,l=window.innerWidth-o.parentElement.getBoundingClientRect().left,c=o.parentElement.getBoundingClientRect().left+a;return{inputToBottom:s,inputToTop:r,inputToRight:l,inputToLeft:c}},Nu=()=>C`
    <svg
      class="kuc-base-datetime-calendar-header-1-23-1__group__button-icon"
      width="9"
      height="14"
      viewBox="0 0 9 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.93923 7L0.469557 1.53033L1.53022 0.469666L8.06055 7L1.53022 13.5303L0.469557 12.4697L5.93923 7Z"
        fill="#888888"
      />
    </svg>`,V={fromAttribute(o){return o===null},toAttribute(o){return o?null:""}},Gt={fromAttribute:o=>!o||["en","ja","zh","zh-TW","es"].indexOf(o)===-1,toAttribute:o=>{const t=["en","ja","zh","zh-TW","es"];return t.indexOf(o)!==-1?o:t.indexOf(document.documentElement.lang)!==-1?document.documentElement.lang:"en"}},be=o=>o instanceof HTMLElement?o:yu(o),bo=o=>{if(o===void 0||o==="")return"";let t=[];return o.indexOf("-")>0&&(t=o.split("-")),t.length<2?`${o}-01-01`:t.length===2?`${A(t[0],4)}-${A(t[1])}-01`:t.length>2?`${A(t[0],4)}-${A(t[1])}-${A(t[2])}`:""},ft=o=>{if(o.length===5||o==="")return o;const e=o.indexOf(":"),i=o.substr(0,e),n=o.substr(e+1,5);return`${A(i)}:${A(n)}`},Y=[];for(let o=0;o<256;++o)Y.push((o+256).toString(16).slice(1));function Pu(o,t=0){return(Y[o[t+0]]+Y[o[t+1]]+Y[o[t+2]]+Y[o[t+3]]+"-"+Y[o[t+4]]+Y[o[t+5]]+"-"+Y[o[t+6]]+Y[o[t+7]]+"-"+Y[o[t+8]]+Y[o[t+9]]+"-"+Y[o[t+10]]+Y[o[t+11]]+Y[o[t+12]]+Y[o[t+13]]+Y[o[t+14]]+Y[o[t+15]]).toLowerCase()}let sn;const Uu=new Uint8Array(16);function zu(){if(!sn){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");sn=crypto.getRandomValues.bind(crypto)}return sn(Uu)}const Ns={randomUUID:typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};function ju(o,t,e){o=o||{};const i=o.random??o.rng?.()??zu();if(i.length<16)throw new Error("Random bytes length must be >= 16");return i[6]=i[6]&15|64,i[8]=i[8]&63|128,Pu(i)}function Fu(o,t,e){return Ns.randomUUID&&!o?Ns.randomUUID():ju(o)}class k extends Bi{createRenderRoot(){return this}async throwErrorAfterUpdateComplete(t){throw await this.updateComplete,new Error(t)}}const m=(o,t,e)=>{const i=new CustomEvent(t,{detail:e,bubbles:!0,composed:!0});return o.dispatchEvent(i)},x=o=>{const t="kuc-style-1-23-1";let e=document.getElementById(t);e||(e=document.createElement("style"),e.id=t,document.head.appendChild(e)),e.appendChild(document.createTextNode(o))},M=()=>Fu(),Gu=`
  kuc-base-error-1-23-1,
  kuc-base-error-1-23-1 *,
  kuc-base-error-1-23-1:lang(en),
  kuc-base-error-1-23-1:lang(en) * {
    font-family: sans-serif;
  }
  kuc-base-error-1-23-1:lang(es),
  kuc-base-error-1-23-1:lang(es) * {
    font-family: sans-serif;
  }
  kuc-base-error-1-23-1:lang(ja),
  kuc-base-error-1-23-1:lang(ja) * {
    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
      sans-serif;
  }
  kuc-base-error-1-23-1:lang(zh),
  kuc-base-error-1-23-1:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", sans-serif;
  }
  kuc-base-error-1-23-1:lang(zh-TW),
  kuc-base-error-1-23-1:lang(zh-TW) * {
    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC",sans-serif;
  }
  kuc-base-error-1-23-1 {
    width: 100%;
    font-size: 14px;
    display: inline-table;
    vertical-align: top;
  }
  kuc-base-error-1-23-1[hidden] {
    display: none;
  }
  .kuc-base-error-1-23-1__error {
    line-height: 1.5;
    padding: 4px 18px;
    box-sizing: border-box;
    background-color: #e74c3c;
    color: #ffffff;
    margin: 8px 0px;
    word-break: break-all;
    white-space: normal;
  }
  .kuc-base-error-1-23-1__error[hidden] {
    display: none;
  }
`;var rn=function(o,t,e,i){var n=arguments.length,a=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(o,t,e,i);else for(var r=o.length-1;r>=0;r--)(s=o[r])&&(a=(n<3?s(a):n>3?s(t,e,a):s(t,e))||a);return n>3&&a&&Object.defineProperty(t,e,a),a};class mo extends k{constructor(){super(...arguments),this.ariaLive="",this.guid="",this.text=""}render(){return p`
      ${this.ariaLive&&this.ariaLive!==""?p`
            <div
              class="kuc-base-error-1-23-1__error"
              .id="${this.guid}-error"
              role="alert"
              aria-live="${this.ariaLive}"
              ?hidden="${!this.text}"
            >
              ${this.text}
            </div>
          `:p`
            <div
              class="kuc-base-error-1-23-1__error"
              .id="${this.guid}-error"
              role="alert"
              ?hidden="${!this.text}"
            >
              ${this.text}
            </div>
          `}
    `}}rn([u({type:String})],mo.prototype,"ariaLive",void 0),rn([u({type:String})],mo.prototype,"guid",void 0),rn([u({type:String})],mo.prototype,"text",void 0),window.customElements.get("kuc-base-error-1-23-1")||(x(Gu),window.customElements.define("kuc-base-error-1-23-1",mo));const Wu=`
  kuc-base-label-1-23-1,
  kuc-base-label-1-23-1 *,
  kuc-base-label-1-23-1:lang(en),
  kuc-base-label-1-23-1:lang(en) * {
    font-family: sans-serif;
  }
  kuc-base-label-1-23-1:lang(es),
  kuc-base-label-1-23-1:lang(es) * {
    font-family: sans-serif;
  }
  kuc-base-label-1-23-1:lang(ja),
  kuc-base-label-1-23-1:lang(ja) * {
    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
    sans-serif;
  }
  kuc-base-label-1-23-1:lang(zh),
  kuc-base-label-1-23-1:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
    Hei, "Heiti SC", sans-serif;
  }
  kuc-base-label-1-23-1:lang(zh-TW),
  kuc-base-label-1-23-1:lang(zh-TW) * {
    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC",sans-serif;
  }
  kuc-base-label-1-23-1 {
    font-size: 14px;
    color: #333333;
    display: inline-table;
    vertical-align: top;
  }
  kuc-base-label-1-23-1[hidden] {
    display: none;
  }
  .kuc-base-label-1-23-1__required-icon {
    font-size: 20px;
    vertical-align: -3px;
    color: #e74c3c;
    margin-left: 4px;
    line-height: 1;
  }
  .kuc-base-label-1-23-1__required-icon[hidden] {
    display: none;
  }
`;var ln=function(o,t,e,i){var n=arguments.length,a=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(o,t,e,i);else for(var r=o.length-1;r>=0;r--)(s=o[r])&&(a=(n<3?s(a):n>3?s(t,e,a):s(t,e))||a);return n>3&&a&&Object.defineProperty(t,e,a),a};class vo extends k{constructor(){super(...arguments),this.requiredIcon=!1,this.guid="",this.text=""}render(){return p`
      ${this._getTextTemplate()}
      <span
        class="kuc-base-label-1-23-1__required-icon"
        ?hidden="${!this.requiredIcon}"
        >*</span
      >
    `}_getTextTemplate(){return this.guid&&this.guid!==""?p`
          <span class="kuc-base-label-1-23-1__text" .id="${this.guid}-group"
            >${this.text}</span
          >
        `:p` <span class="kuc-base-label-1-23-1__text">${this.text}</span> `}}ln([u({type:Boolean})],vo.prototype,"requiredIcon",void 0),ln([u({type:String})],vo.prototype,"guid",void 0),ln([u({type:String})],vo.prototype,"text",void 0),window.customElements.get("kuc-base-label-1-23-1")||(x(Wu),window.customElements.define("kuc-base-label-1-23-1",vo));function $(o){if(!o||typeof o!="object")return{};const t={...o};for(const e in t)Object.prototype.hasOwnProperty.call(t,e)&&t[e]===void 0&&delete t[e];return t}function Ps(o){return!!(o===""||o===void 0||/(^(\d{1,4})-(0?[1-9]|1[0-2])-(0?[1-9]|[12][0-9]|3[01])$)|(^(\d{1,4})$)|(^(\d{1,4})-(0?[1-9]|1[0-2])$)/g.test(o))}function Wt(o){return!!(o===""||/^(2[0-3]|[01]?[0-9]):([0-9]|[0-5][0-9])$/.test(o))}function Us(o,t,e){const i=Math.round(o),n=hi(t),a=hi(e);return!isNaN(i)&&i>0&&i<=n-a}function gt(o){const[t,e,i]=o.split("-"),n=new Date(`${o}T00:00:00`),a=n.getFullYear(),s=n.getMonth(),r=n.getDate();return a===Number(t)&&s===Number(e)-1&&r===Number(i)}function _i(o){return typeof o=="string"}function zs(o,t){const e=/(^(\d{4})-(0[0-9]|1[0-2])-(0[1-9]|([12][0-9]|3[01]))$)|(^(\d{4})$)|(^(\d{4})-(0[0-9]|1[0-2])$)/g,i=/(^([01][0-9]|2[0-3])$)|(^([01][0-9]|2[0-3]):([0-5][0-9]))$|(^([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9])$/;return!(!e.test(o)||!i.test(t))}function un(o){return o.length<2?!0:!o.some(t=>o.indexOf(t)!==o.lastIndexOf(t))}function cn(o){return!(o<.5||!Kt(o))}const Ku=o=>{for(let t=0;t<o.length;t++)if(!Object.prototype.hasOwnProperty.call(o[t],"field"))return!1;return!0},qu=o=>{const t=o.map(i=>i.field);return t.some(function(i,n){return t.indexOf(i)!==n})};function Yu(o){return/^[1-9]\d*$/.test(o)}function Kt(o){return typeof o=="number"&&!Number.isNaN(o)}function D(o){return Array.isArray(o)}const oe=o=>{if(o instanceof HTMLElement)return!0;const t=document.createElement("div");return t.innerHTML=o,t.childElementCount>0},Zu=`
  kuc-attachment-1-23-1,
  kuc-attachment-1-23-1 *,
  kuc-attachment-1-23-1:lang(en),
  kuc-attachment-1-23-1:lang(en) * {
    font-family: sans-serif;
  }
  kuc-attachment-1-23-1:lang(ja),
  kuc-attachment-1-23-1:lang(ja) * {
    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
        sans-serif;
  }
  kuc-attachment-1-23-1:lang(zh),
  kuc-attachment-1-23-1:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
        Hei, "Heiti SC", sans-serif;
  }
  kuc-attachment-1-23-1:lang(zh-TW),
  kuc-attachment-1-23-1:lang(zh-TW) * {
    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
        Hei,"Heiti SC",sans-serif;
  }
  kuc-attachment-1-23-1:lang(es),
  kuc-attachment-1-23-1:lang(es) * {
    font-family: sans-serif;
  }
  kuc-attachment-1-23-1 {
    font-size: 14px;
    display: inline-table;
    vertical-align: top;
    width: var(--kuc-attachment-width, 191px);
    min-width: var(--kuc-attachment-width, 191px);
  }
  kuc-attachment-1-23-1[hidden] {
    display: none;
  }
  .kuc-attachment-1-23-1__group {
    width: 100%;
    height: auto;
    box-sizing: border-box;
    position: relative;
    display: block;
  }
  .kuc-attachment-1-23-1__group__label {
    display: inline-block;
    padding: 4px 0 8px 0;
    color: #333333;
    white-space: nowrap;
  }
  .kuc-attachment-1-23-1__group__label[hidden] {
    display: none;
  }
  .kuc-attachment-1-23-1__group__files {
    border: solid 1px #e3e7e8;
    background-color: #eeeeee;
    padding: 16px 4px;
    display: block;
    font-size: 14px;
    overflow: hidden;
    position: relative;
    box-sizing: border-box;
    width: var(--kuc-attachment-width, auto);
    height: var(--kuc-attachment-height, auto);
  }
  .kuc-attachment-1-23-1__group__files--disabled {
    cursor: not-allowed;
  }
  .kuc-attachment-1-23-1__group__files__browse-button {
    border: 1px solid transparent;
    position: relative;
    display: inline-block;
    margin-right: 16px;
    padding: 8px;
    text-decoration: none;
  }
  .kuc-attachment-1-23-1__group__files__browse-button[hidden]{
    display: none;
  }
  .kuc-attachment-1-23-1__group__files__browse-button:focus-within {
    border: 1px solid #3498db;
  }
  .kuc-attachment-1-23-1__group__files__browse-button:hover
  .kuc-attachment-1-23-1__group__files__browse-button__text {
    color: #217dbb;
  }
  .kuc-attachment-1-23-1__group__files__browse-button__text {
    color: #3498db;
    font-size: 14px;
  }
  .kuc-attachment-1-23-1__group__files__browse-button__input-container {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    display: inline-block;
  }
  .kuc-attachment-1-23-1__group__files__browse-button__input-container__input {
    cursor: pointer;
    font-size: 999px;
    vertical-align: middle;
    height: 100%;
    width: 100%;
    line-height: 1.5;
  }
  .kuc-attachment-1-23-1__group__files__display-area {
    padding-inline-start: 0px;
    list-style-type: disc;
    margin-block-start: 0em;
    margin-block-end: 0em;
  }
  .kuc-attachment-1-23-1__group__files__display-area__item {
    position: relative;
    margin-bottom: 8px;
    height: auto;
    min-height: 24px;
    border: 2px solid #f1f4f5;
    background-color: #f1f4f5;
    list-style: none;
    display: flex;
    align-items: center;
  }
  .kuc-attachment-1-23-1__group__files__display-area__item__name {
    display: inline-block;
    padding: 3px calc(4.6em + 4px) 3px 26px;
    width: 100%;
    max-width: 177px;
    box-sizing: border-box;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: normal;
    font-size: var(--kuc-attachment-item-font-size, 14px);
    line-height: 1.2;
  }
  .kuc-attachment-1-23-1__group__files__display-area__item__remove-button__container {
    display: inline-block;
    position: absolute;
    top: calc(50% - 12px);
    left: 0;
    width: 24px;
    height: 24px;
  }
  .kuc-attachment-1-23-1__group__files__display-area__item__remove-button__container[hidden] {
    display: none;
  }
  .kuc-attachment-1-23-1__group__files__display-area__item__remove-button__container__button {
    background-color: #f2f4f6;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid transparent;
    padding: 0px;
    width:100%;
    height:100%;
  }
  .kuc-attachment-1-23-1__group__files__display-area__item__remove-button__container__button:hover {
    background: #d8e1e6;
  }
  .kuc-attachment-1-23-1__group__files__display-area__item__remove-button__container__button:focus-within {
    border: 1px solid #3498db;
  }
  .kuc-attachment-1-23-1__group__files__display-area__item__remove-button__container__button:focus {
    outline: none;
  }
  .kuc-attachment-1-23-1__group__files__display-area__item__size {
    display: inline-block;
    position: absolute;
    right: 0;
    color: #888888;
    padding: 0 3px 0 0;
    max-width: 4.6em;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: normal;
    font-size: var(--kuc-attachment-item-font-size, 14px);
    line-height: 1.2;
  }
  .kuc-attachment-1-23-1__group__files__droppable {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    margin: auto 0;
  }
  .kuc-attachment-1-23-1__group__files__droppable[hidden] {
    display: none;
  }
  .kuc-attachment-1-23-1__group__files__droppable__text {
    background-color: #e2f2fe;
    border: dashed 2px #3498db;
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    color: #3498db;
    font-size: 14px;
  }
  .kuc-attachment-1-23-1__group__files__browse-message {
    display: inline-block;
    color: var(--kuc-attachment-message-color, #888888);
    font-size: var(--kuc-attachment-message-font-size, 14px);
    margin: 3px 0 0;
    word-break: break-all;
  }
  .kuc-attachment-1-23-1__group__files__browse-message--disabled {
    color: #888888;
  }
  .kuc-attachment-1-23-1__group__files__browse-message[hidden] {
    display: none;
  }
  .kuc-attachment-1-23-1__group__files__not-droppable--dragenter {
    visibility: hidden;
  }
`;var Z=function(o,t,e,i){var n=arguments.length,a=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(o,t,e,i);else for(var r=o.length-1;r>=0;r--)(s=o[r])&&(a=(n<3?s(a):n>3?s(t,e,a):s(t,e))||a);return n>3&&a&&Object.defineProperty(t,e,a),a};let dn;(()=>{if(dn=window.customElements.get("kuc-attachment-1-23-1"),dn)return;class o extends k{constructor(e){super(),this.className="",this.error="",this.id="",this.label="",this.language="auto",this.message="",this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this.files=[],this._isDraging=!1,this._dragEnterCounter=0,this._locale=this._getLocale(),this._isFileOrDirectoryDrag=n=>{if(!n.dataTransfer)return!1;if(n.dataTransfer.items!==void 0){for(let a=0;a<n.dataTransfer.items.length;a++)if(n.dataTransfer.items[a].kind.toLowerCase()==="file")return!0}if(n.dataTransfer.types!==void 0){for(let a=0;a<n.dataTransfer.types.length;a++)if(n.dataTransfer.types[a].toLowerCase()==="files")return!0}return!1},this._GUID=M();const i=$(e);Object.assign(this,i)}shouldUpdate(e){return e.has("files")&&!D(this.files)?(this.throwErrorAfterUpdateComplete(y.FILES.IS_NOT_ARRAY),!1):!0}willUpdate(e){return e.has("language")&&(this._locale=this._getLocale()),!0}render(){return p`
      <div class="kuc-attachment-1-23-1__group">
        <label
          class="kuc-attachment-1-23-1__group__label"
          ?hidden="${!this.label}"
          for="${this._GUID}-input"
          @click="${this._handleClickLabel}"
        >
          <kuc-base-label-1-23-1
            .text="${this.label}"
            .requiredIcon="${this.requiredIcon}"
          ></kuc-base-label-1-23-1>
        </label>
        <div
          class="kuc-attachment-1-23-1__group__files ${this.disabled?" kuc-attachment-1-23-1__group__files--disabled":""}"
          @dragenter="${this._handleDragEnter}"
          @dragover="${this._handleDragOver}"
          @dragleave="${this._handleDragLeave}"
          @drop="${this._handleDragDrop}"
        >
          <div
            class="kuc-attachment-1-23-1__group__files__droppable"
            ?hidden="${!this._isDraging}"
          >
          <div class="kuc-attachment-1-23-1__group__files__droppable__text">${this._locale.ATTACHMENT_DRAG_DROP_ZONE}</div>
          </div>
          <ul
            class="kuc-attachment-1-23-1__group__files__display-area${this._isDraging?" kuc-attachment-1-23-1__group__files__not-droppable--dragenter":""}"
          >
          ${this.files.map((e,i)=>this._getAttachmentItemTemplate(e,i))}
          </ul>
          <div class="kuc-attachment-1-23-1__group__files__browse-button${this._isDraging?" kuc-attachment-1-23-1__group__files__not-droppable--dragenter":""}"
          ?hidden="${this.disabled}">
            <span class="kuc-attachment-1-23-1__group__files__browse-button__text">${this._locale.ATTACHMENT_BROWSE}</span>
            <div class="kuc-attachment-1-23-1__group__files__browse-button__input-container">
              <input class="kuc-attachment-1-23-1__group__files__browse-button__input-container__input" type="file" multiple 
              .id="${this._GUID}-input"
              aria-required="${this.requiredIcon}"
              aria-invalid="${this.error}"
              aria-describedby="${this._GUID}-error"
              @change="${this._handleChangeFiles}"></input>
            </div>
          </div>
          <p class="kuc-attachment-1-23-1__group__files__browse-message${this.disabled?" kuc-attachment-1-23-1__group__files__browse-message--disabled":""}"
            ?hidden="${!this.message}"
          >
            ${this.message}
          </p>
        </div>
        <kuc-base-error-1-23-1
          class="kuc-attachment-1-23-1__error"
          ?hidden="${!this.error}"
          .text="${this.error}"
          .guid="${this._GUID}"
        ></kuc-base-error-1-23-1>
      </div>
    `}_getAttachmentItemTemplate(e,i){return p`
        <li class="kuc-attachment-1-23-1__group__files__display-area__item">
          <div
            title="${e.name||""}"
            class="kuc-attachment-1-23-1__group__files__display-area__item__name"
          >
            ${e.name||""}
          </div>
          <div
            class="kuc-attachment-1-23-1__group__files__display-area__item__remove-button__container"
            ?hidden="${this.disabled}"
          >
            <button
              class="kuc-attachment-1-23-1__group__files__display-area__item__remove-button__container__button"
              type="button"
              aria-label="Cancel File"
              data-file-index="${i}"
              @click="${this._handleClickFileRemove}"
              tabindex="0"
            >
              ${this._getRemoveButtonIcon()}
            </button>
          </div>
          <span class="kuc-attachment-1-23-1__group__files__display-area__item__size">
            ${this._getFileSize(e.size)}
          </span>
        </li>
      `}async updated(e){await this.updateComplete,this._updateFileNameMaxWidth()}_updateFileNameMaxWidth(){const n=this._labelEl.getBoundingClientRect().width;this._fileItemsEl.forEach(a=>{a.style.maxWidth=`calc(var(--kuc-attachment-width, ${n<191?191:n}px) - 14px)`})}_getRemoveButtonIcon(){return C`<svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M5.93933 7.00001L1.96966 3.03034L1.43933 2.50001L2.49999 1.43935L3.03032 1.96968L6.99999 5.93935L10.9697 1.96968L11.5 1.43935L12.5607 2.50001L12.0303 3.03034L8.06065 7.00001L12.0303 10.9697L12.5607 11.5L11.5 12.5607L10.9697 12.0303L6.99999 8.06067L3.03032 12.0303L2.49999 12.5607L1.43933 11.5L1.96966 10.9697L5.93933 7.00001Z"
          fill="#a8a8a8"
        />
      </svg>`}_getLanguage(){const e=["en","ja","zh","zh-TW","es"];return e.indexOf(this.language)!==-1?this.language:e.indexOf(document.documentElement.lang)!==-1?document.documentElement.lang:"en"}_getLocale(){switch(this._getLanguage()){case"en":return Ss;case"zh":return gu;case"zh-TW":return bu;case"ja":return fu;case"es":return mu;default:return Ss}}_handleClickFileRemove(e){const i=e.currentTarget,n=parseInt(i.getAttribute("data-file-index"),10);if(this.files){n===this.files.length-1&&this._inputEl.focus();const a=[...this.files];this.files.splice(n,1);const s={oldFiles:a,files:this.files,type:"remove-file",fileIndex:[n]};m(this,"change",s),this.requestUpdate(),n<=this.files.length-1&&this._fileRemoveButtons[n].focus()}}_handleClickLabel(e){e.preventDefault()}_handleDragEnter(e){if(!this.disabled&&(this._dragEnterCounter++,this._dragEnterCounter===1&&this._isFileOrDirectoryDrag(e))){e.preventDefault();const i=2,n=1;this._groupFilesEl.style.height=this._groupFilesEl.getBoundingClientRect().height+"px",this._dragTextEl.style.width=this._groupFilesEl.getBoundingClientRect().width-n*2+"px",this._dragTextEl.style.height=this._groupFilesEl.getBoundingClientRect().height-(n+i)*2+"px",this._isDraging=!0}}_handleDragOver(e){this.disabled||(e.stopPropagation(),this._isFileOrDirectoryDrag(e)&&e.preventDefault())}_handleDragDrop(e){this.disabled||!this._isDraging||(e.preventDefault(),this._handleDragLeave(),this._isFileDrop(e)&&this._addFiles(e))}_isFileDrop(e){var i;if(e.dataTransfer&&e.dataTransfer.items){for(let n=0;n<e.dataTransfer.items.length;n++)if(typeof e.dataTransfer.items[n].webkitGetAsEntry=="function"&&(!((i=e.dataTransfer.items[n].webkitGetAsEntry())===null||i===void 0)&&i.isDirectory))return!1}return!0}_handleDragLeave(){this.disabled||(this._dragEnterCounter--,this._dragEnterCounter===0&&(this._groupFilesEl.style.height="var(--kuc-attachment-height, auto)",this._isDraging=!1))}_handleChangeFiles(e){e.preventDefault(),e.stopPropagation(),this._addFiles(e)}_addFiles(e){if(this.files){let i=e.dataTransfer?e.dataTransfer.files:e.target.files;i=Object.keys(i).map(r=>i[r]);const n=[...this.files],a=i.map((r,l)=>n.length+l);i.forEach(r=>this.files.push(r));const s={oldFiles:n,files:this.files,type:"add-file",fileIndex:a};m(this,"change",s),this.requestUpdate()}this._inputEl.value=""}_getFileSize(e){return typeof e=="number"?this._formatFileSize(e):Yu(e)?this._formatFileSize(parseInt(e,10)):pu}_formatFileSize(e){return e>=Es?Math.round(e/Es)+" GB":e>=Cs?Math.round(e/Cs)+" MB":e>=ws?Math.round(e/ws)+" KB":Math.round(e)+" bytes"}}Z([u({type:String,reflect:!0,attribute:"class"})],o.prototype,"className",void 0),Z([u({type:String})],o.prototype,"error",void 0),Z([u({type:String,reflect:!0,attribute:"id"})],o.prototype,"id",void 0),Z([u({type:String})],o.prototype,"label",void 0),Z([u({type:String,attribute:"lang",reflect:!0,converter:Gt})],o.prototype,"language",void 0),Z([u({type:String})],o.prototype,"message",void 0),Z([u({type:Boolean})],o.prototype,"disabled",void 0),Z([u({type:Boolean})],o.prototype,"requiredIcon",void 0),Z([u({type:Boolean,attribute:"hidden",reflect:!0,converter:V})],o.prototype,"visible",void 0),Z([u({type:Array})],o.prototype,"files",void 0),Z([v()],o.prototype,"_isDraging",void 0),Z([b(".kuc-attachment-1-23-1__group__files")],o.prototype,"_groupFilesEl",void 0),Z([b(".kuc-attachment-1-23-1__group__files__droppable__text")],o.prototype,"_dragTextEl",void 0),Z([b(".kuc-attachment-1-23-1__group__files__browse-button__input-container__input")],o.prototype,"_inputEl",void 0),Z([b(".kuc-attachment-1-23-1__group__label")],o.prototype,"_labelEl",void 0),Z([q(".kuc-attachment-1-23-1__group__files__display-area__item__name")],o.prototype,"_fileItemsEl",void 0),Z([q(".kuc-attachment-1-23-1__group__files__display-area__item__remove-button__container__button")],o.prototype,"_fileRemoveButtons",void 0),window.customElements.define("kuc-attachment-1-23-1",o),x(Zu),dn=o})();const Ju=`
  kuc-button-1-23-1,
  kuc-button-1-23-1 *,
  kuc-button-1-23-1:lang(en),
  kuc-button-1-23-1:lang(en) * {
    font-family: sans-serif;
  }
  kuc-button-1-23-1:lang(es),
  kuc-button-1-23-1:lang(es) * {
    font-family: sans-serif;
  }
  kuc-button-1-23-1:lang(ja),
  kuc-button-1-23-1:lang(ja) * {
    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
  }
  kuc-button-1-23-1:lang(zh),
  kuc-button-1-23-1:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti, Hei,
      "Heiti SC", sans-serif;
  }
  kuc-button-1-23-1:lang(zh-TW),
  kuc-button-1-23-1:lang(zh-TW) * {
    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC",sans-serif;
  }
  kuc-button-1-23-1 {
    display: inline-block;
    vertical-align: top;
  }
  kuc-button-1-23-1[hidden] {
    display: none;
  }
  .kuc-button-1-23-1__button {
    display: grid;
    align-items: center;
    align-content: center;
    font-size: var(--kuc-button-font-size, 16px);
    width: var(--kuc-button-width, "auto");
    height: var(--kuc-button-height, 48px);
    min-width: var(--kuc-button-width, 163px);
    padding: 0px 16px;
    user-select: none;
    white-space: nowrap;
  }
  .kuc-button-1-23-1__button--normal {
    background-color: var(--kuc-button-background-color, #f7f9fa);
    color: var(--kuc-button-text-color, #3498db);
    border: 1px solid #e3e7e8;
  }
  .kuc-button-1-23-1__button--normal:hover,
  .kuc-button-1-23-1__button--normal:focus-visible,
  .kuc-button-1-23-1__button--normal:active {
    cursor: pointer;
  }
  .kuc-button-1-23-1__button--normal:hover {
    background-color: var(--kuc-button-background-color-hover, #c8d6dd);
  }
  .kuc-button-1-23-1__button--normal:focus-visible {
    background-color: var(--kuc-button-background-color-focus, #c8d6dd);
  }
  .kuc-button-1-23-1__button--normal:active {
    background-color: var(--kuc-button-background-color-active, #c8d6dd);
  }
  .kuc-button-1-23-1__button--submit {
    background-color: var(--kuc-button-background-color, #3498db);
    color: var(--kuc-button-text-color, #ffffff);
    border: 1px solid #e3e7e8;
  }
  .kuc-button-1-23-1__button--submit:hover,
  .kuc-button-1-23-1__button--submit:focus-visible,
  .kuc-button-1-23-1__button--submit:active {
    cursor: pointer;
  }
  .kuc-button-1-23-1__button--submit:hover {
    background-color: var(--kuc-button-background-color-hover, #1d6fa5);
  }
  .kuc-button-1-23-1__button--submit:focus-visible {
    background-color: var(--kuc-button-background-color-focus, #1d6fa5);
  }
  .kuc-button-1-23-1__button--submit:active {
    background-color: var(--kuc-button-background-color-active, #1d6fa5);
  }
  .kuc-button-1-23-1__button--alert {
    background-color: var(--kuc-button-background-color, #e74c3c);
    color: var(--kuc-button-text-color, #ffffff);
    border: 1px solid #e3e7e8;
  }
  .kuc-button-1-23-1__button--alert:hover,
  .kuc-button-1-23-1__button--alert:focus-visible,
  .kuc-button-1-23-1__button--alert:active {
    cursor: pointer;
  }
  .kuc-button-1-23-1__button--alert:hover {
    background-color: var(--kuc-button-background-color-hover, #bf2718);
  }
  .kuc-button-1-23-1__button--alert:focus-visible {
    background-color: var(--kuc-button-background-color-focus, #bf2718);
  }
  .kuc-button-1-23-1__button--alert:active {
    background-color: var(--kuc-button-background-color-active, #bf2718);
  }
  .kuc-button-1-23-1__button:disabled {
    background-color: #d4d7d7;
    border: 1px solid #e3e7e8;
    color: #888888;
    cursor: not-allowed;
  }
  .kuc-button-1-23-1__button--normal:focus-visible,
  .kuc-button-1-23-1__button--submit:focus-visible,
  .kuc-button-1-23-1__button--alert:focus-visible {
    outline: 1px solid #3498db;
  }
`;var qt=function(o,t,e,i){var n=arguments.length,a=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(o,t,e,i);else for(var r=o.length-1;r>=0;r--)(s=o[r])&&(a=(n<3?s(a):n>3?s(t,e,a):s(t,e))||a);return n>3&&a&&Object.defineProperty(t,e,a),a};let ko;(()=>{if(ko=window.customElements.get("kuc-button-1-23-1"),ko)return;class o extends k{constructor(e){super(),this.className="",this.id="",this.text="",this.type="normal",this.content="",this.disabled=!1,this.visible=!0,this._content="";const i=$(e);Object.assign(this,i)}_handleClickButton(e){e.stopPropagation(),m(this,"click")}_getButtonColorType(){return this.type==="normal"||this.type==="submit"||this.type==="alert"?this.type:"normal"}willUpdate(e){(e.has("content")||e.has("text"))&&(this.content!==null&&this.content!==void 0&&this.content!==""?oe(this.content)?this._content=be(this.content):this._content=this.content:this._content=this.text)}render(){return p`
        <button
          type="button"
          class="kuc-button-1-23-1__button kuc-button-1-23-1__button--${this._getButtonColorType()}"
          ?disabled="${this.disabled}"
          @click="${this._handleClickButton}"
        >
          ${this._content}
        </button>
      `}}qt([u({type:String,reflect:!0,attribute:"class"})],o.prototype,"className",void 0),qt([u({type:String,reflect:!0,attribute:"id"})],o.prototype,"id",void 0),qt([u({type:String})],o.prototype,"text",void 0),qt([u({type:String})],o.prototype,"type",void 0),qt([u()],o.prototype,"content",void 0),qt([u({type:Boolean})],o.prototype,"disabled",void 0),qt([u({type:Boolean,attribute:"hidden",reflect:!0,converter:V})],o.prototype,"visible",void 0),window.customElements.define("kuc-button-1-23-1",o),x(Ju),ko=o})();const js=ko,Xu=`
  kuc-checkbox-1-23-1,
  kuc-checkbox-1-23-1 *,
  kuc-checkbox-1-23-1:lang(en),
  kuc-checkbox-1-23-1:lang(en) * {
    font-family: sans-serif;
  }
  kuc-checkbox-1-23-1:lang(es),
  kuc-checkbox-1-23-1:lang(es) * {
    font-family: sans-serif;
  }
  kuc-checkbox-1-23-1:lang(ja),
  kuc-checkbox-1-23-1:lang(ja) * {
    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
      sans-serif;
  }
  kuc-checkbox-1-23-1:lang(zh),
  kuc-checkbox-1-23-1:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", sans-serif;
  }
  kuc-checkbox-1-23-1:lang(zh-TW),
  kuc-checkbox-1-23-1:lang(zh-TW) * {
    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC",sans-serif;
  }
  kuc-checkbox-1-23-1 {
    font-size: 14px;
    color: #333333;
    display: inline-table;
    vertical-align: top;
    width: var(--kuc-checkbox-menu-width, 239px);
    min-width: var(--kuc-checkbox-menu-width, 239px);
    line-height: 1.5;
  }
  kuc-checkbox-1-23-1[hidden] {
    display: none;
  }
  .kuc-checkbox-1-23-1__group {
    border: none;
    padding: 0px;
    height: auto;
    display: inline-block;
    width: 100%;
    margin: 0px;
  }
  .kuc-checkbox-1-23-1__group__select-menu {
    white-space: nowrap;
    width: var(--kuc-checkbox-menu-width, auto);
    height: var(--kuc-checkbox-menu-height, auto);
    color: var(--kuc-checkbox-menu-color, #333333);
    font-size: var(--kuc-checkbox-menu-font-size, 14px);
    display: flex;
    align-items: flex-start;
  }
  .kuc-checkbox-1-23-1__group__select-menu[itemLayout="vertical"] {
    display: block;
  }
  .kuc-checkbox-1-23-1__group__label {
    display: inline-block;
    padding: 4px 0 8px 0;
    white-space: nowrap;
  }
  .kuc-checkbox-1-23-1__group__label[hidden] {
    display: none;
  }
  .kuc-checkbox-1-23-1__group__select-menu[borderVisible] {
    border-color: #e3e7e8;
    border-width: 1px;
    border-style: solid;
    padding: 4px 0 0 4px;
  }
  .kuc-checkbox-1-23-1__group__select-menu__item {
    margin-bottom: 4px;
    margin-right: 16px;
    padding: 4px;
    border: 1px solid transparent;
    position: relative;
    white-space: normal;
    word-wrap: normal;
    display: flex;
    align-items: center;
  }
  .kuc-checkbox-1-23-1__group__select-menu__item[focused] {
    border: 1px solid #3498db;
  }
  .kuc-checkbox-1-23-1__group__select-menu__item__input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }
  .kuc-checkbox-1-23-1__group__select-menu__item__input:hover
    + .kuc-checkbox-1-23-1__group__select-menu__item__label {
    color: var(--kuc-checkbox-menu-color-hover, #666666);
  }
  .kuc-checkbox-1-23-1__group__select-menu__item__label__icon {
    position: absolute;
    left: -30px;
    box-sizing: border-box;
    width: 21px;
    height: 21px;
    box-shadow: 1px 1px 3px #f5f5f5 inset, -1px -1px 3px #f5f5f5 inset;
    content: "";
  }
  .kuc-checkbox-1-23-1__group__select-menu__item__input[disabled]
    + .kuc-checkbox-1-23-1__group__select-menu__item__label {
    color: #888888;
    cursor: not-allowed;
  }
  .kuc-checkbox-1-23-1__group__select-menu__item__label {
    cursor: pointer;
    position: relative;
    margin-left: 32px;
    display: flex;
    align-items: center;
    vertical-align: middle;
    white-space: nowrap;
    min-height: 24px;
    line-height: 1.2;
  }
  `;var ce=function(o,t,e,i){var n=arguments.length,a=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(o,t,e,i);else for(var r=o.length-1;r>=0;r--)(s=o[r])&&(a=(n<3?s(a):n>3?s(t,e,a):s(t,e))||a);return n>3&&a&&Object.defineProperty(t,e,a),a};let hn;(()=>{if(hn=window.customElements.get("kuc-checkbox-1-23-1"),hn)return;class o extends k{constructor(e){super(),this.className="",this.error="",this.id="",this.itemLayout="horizontal",this.label="",this.borderVisible=!0,this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this.items=[],this.selectedIndex=[],this.value=[],this._valueMapping={},this._GUID=M();const i=$(e);this._setInitialValue(i),Object.assign(this,i)}_setInitialValue(e){const i="value"in e,n="selectedIndex"in e,a=e.selectedIndex||[];if(!i&&n){if(!D(a))return;const s=this._getValueMapping(e);this.value=this._getValidValue(s,a)}}shouldUpdate(e){return e.has("items")&&!D(this.items)?(this.throwErrorAfterUpdateComplete(y.ITEMS.IS_NOT_ARRAY),!1):e.has("value")&&!D(this.value)?(this.throwErrorAfterUpdateComplete(y.VALUE.IS_NOT_ARRAY),!1):e.has("selectedIndex")&&!D(this.selectedIndex)?(this.throwErrorAfterUpdateComplete(y.SELECTED_INDEX.IS_NOT_ARRAY),!1):!0}willUpdate(e){if(e.has("value")){if(this.value.length>0)return;this.selectedIndex=[]}}_getNewValueMapping(e,i){const n=parseInt(i,10),a=Object.keys(this._valueMapping),s={...this._valueMapping};return a.indexOf(i)>-1?(delete s[n],s):(s[n]=e,s)}_handleChangeInput(e){e.stopPropagation();const i=e.target,n=i.dataset.index||"0",a=i.value,s=this.value?[...this.value]:this.value,r=this._getNewValueMapping(a,n),l=this.items.map(_=>_.value),c=Object.values(r).filter(_=>l.indexOf(_)>-1);if(c===s)return;const d=Object.keys(r).map(_=>parseInt(_,10));this.value=c,this.selectedIndex=d,m(this,"change",{oldValue:s,value:c})}_handleFocusInput(e){e.target.parentNode.setAttribute("focused","")}_handleBlurInput(e){e.target.parentNode.removeAttribute("focused")}_getCheckboxIconSvgTemplate(e,i){return C`
    <svg
      class="kuc-checkbox-1-23-1__group__select-menu__item__label__icon"
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="1"
        y="1"
        width="19"
        height="19"
        rx="1"
        fill="white"
        stroke="${this._getSVGStrokeValue(e,i)}"
        stroke-width="2"/>
      ${i?C`<path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5 11L6.5 9L9.5 11.5L14.5 6L16 7.5L9.5 14.5L5 11Z"
            fill="${e?"#d8d8d8":"#3498db"}"/>`:""}
    </svg>
  `}_getSVGStrokeValue(e,i){return e?"#d8d8d8":i?"#3498db":"#d8d8d8"}_isCheckedItem(e,i){const n=Object.values(this._valueMapping),a=Object.keys(this._valueMapping);return n.filter((r,l)=>r===e.value&&i===parseInt(a[l],10)).length>0}_getItemTemplate(e,i){const n=this._isCheckedItem(e,i),a=e.disabled||this.disabled;return p`
        <div
          class="kuc-checkbox-1-23-1__group__select-menu__item"
          itemLayout="${this.itemLayout}"
        >
          <input
            type="checkbox"
            aria-describedby="${this._GUID}-error"
            aria-required="${this.requiredIcon}"
            data-index="${i}"
            id="${this._GUID}-item-${i}"
            class="kuc-checkbox-1-23-1__group__select-menu__item__input"
            name="${this._GUID}-group"
            value="${e.value!==void 0?e.value:""}"
            ?disabled="${a}"
            @change="${this._handleChangeInput}"
            @focus="${this._handleFocusInput}"
            @blur="${this._handleBlurInput}"
          />
          <label
            for="${this._GUID}-item-${i}"
            class="kuc-checkbox-1-23-1__group__select-menu__item__label"
            >${this._getCheckboxIconSvgTemplate(a,n)}${e.label===void 0?e.value:e.label}
          </label>
        </div>
      `}update(e){(e.has("items")||e.has("value")||e.has("selectedIndex"))&&(this._valueMapping=this._getValueMapping({items:this.items,value:this.value,selectedIndex:this.selectedIndex}),this._setValueAndSelectedIndex()),super.update(e)}render(){return p`
        <div
          class="kuc-checkbox-1-23-1__group"
          role="group"
          aria-labelledby="${this._GUID}-group"
        >
          <div class="kuc-checkbox-1-23-1__group__label" ?hidden="${!this.label}">
            <kuc-base-label-1-23-1
              .text="${this.label}"
              .guid="${this._GUID}"
              .requiredIcon="${this.requiredIcon}"
            ></kuc-base-label-1-23-1>
          </div>
          <div
            class="kuc-checkbox-1-23-1__group__select-menu"
            ?borderVisible="${this.borderVisible}"
            itemLayout="${this.itemLayout}"
          >
            ${this.items.map((e,i)=>this._getItemTemplate(e,i))}
          </div>
          <kuc-base-error-1-23-1
            .text="${this.error}"
            .guid="${this._GUID}"
            ?hidden="${!this.error}"
            ariaLive="assertive"
          ></kuc-base-error-1-23-1>
        </div>
      `}updated(){this._inputEls.forEach(e=>{e.checked=this.value.indexOf(e.value)>-1})}_getValueMapping(e){const i=e.items||[],n=e.value||[],a=e.selectedIndex||[],s=i.map(d=>d.value||""),r=Object.assign({},s),l={};if(n.length===0){const d=this._getValidValue(r,a);return a.forEach((h,_)=>l[h]=d[_]),l}return this._getValidSelectedIndex(r).forEach((d,h)=>l[d]=n[h]),l}_getValidValue(e,i){return i.filter(n=>e[n]).map(n=>e[n])}_getValidSelectedIndex(e){const i=[];for(let n=0;n<this.value.length;n++){const a=this.selectedIndex[n];if(e[a]===this.value[n]){i.push(a);continue}const s=this.items.findIndex(r=>r.value===this.value[n]);i.push(s)}return i}_setValueAndSelectedIndex(){this.value=Object.values(this._valueMapping),this.selectedIndex=Object.keys(this._valueMapping).map(e=>parseInt(e,10))}}ce([u({type:String,reflect:!0,attribute:"class"})],o.prototype,"className",void 0),ce([u({type:String})],o.prototype,"error",void 0),ce([u({type:String,reflect:!0,attribute:"id"})],o.prototype,"id",void 0),ce([u({type:String})],o.prototype,"itemLayout",void 0),ce([u({type:String})],o.prototype,"label",void 0),ce([u({type:Boolean})],o.prototype,"borderVisible",void 0),ce([u({type:Boolean})],o.prototype,"disabled",void 0),ce([u({type:Boolean})],o.prototype,"requiredIcon",void 0),ce([u({type:Boolean,attribute:"hidden",reflect:!0,converter:V})],o.prototype,"visible",void 0),ce([u({type:Array})],o.prototype,"items",void 0),ce([u({type:Array})],o.prototype,"selectedIndex",void 0),ce([u({type:Array})],o.prototype,"value",void 0),ce([q(".kuc-checkbox-1-23-1__group__select-menu__item__input")],o.prototype,"_inputEls",void 0),ce([v()],o.prototype,"_valueMapping",void 0),window.customElements.define("kuc-checkbox-1-23-1",o),x(Xu),hn=o})();const Qu=`
  kuc-combobox-1-23-1,
  kuc-combobox-1-23-1 *,
  kuc-combobox-1-23-1:lang(en),
  kuc-combobox-1-23-1:lang(en) * {
    font-family: sans-serif;
  }
  kuc-combobox-1-23-1:lang(es),
  kuc-combobox-1-23-1:lang(es) * {
    font-family: sans-serif;
  }
  kuc-combobox-1-23-1:lang(ja),
  kuc-combobox-1-23-1:lang(ja) * {
    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
      sans-serif;
  }
  kuc-combobox-1-23-1:lang(zh),
  kuc-combobox-1-23-1:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", sans-serif;
  }
  kuc-combobox-1-23-1:lang(zh-TW),
  kuc-combobox-1-23-1:lang(zh-TW) * {
    font-family: "微軟正黑體", "Microsoft JhengHei", "新宋体", NSimSun, STHeiti, Hei, "Heiti SC", sans-serif;
  }
  kuc-combobox-1-23-1 {
    position: relative;
    display: inline-table;
    font-size: 14px;
    color: #333333;
    width: var(--kuc-combobox-toggle-width, 180px);
    vertical-align: top;
    line-height: 1.5;
  }
  kuc-combobox-1-23-1[hidden] {
    display: none;
  }
  .kuc-combobox-1-23-1__group {
    border: none;
    padding: 0px;
    height: auto;
    display: inline-block;
    width: 100%;
    margin: 0px;
    position: relative;
  }
  .kuc-combobox-1-23-1__group__label {
    padding: 4px 0px 8px 0px;
    display: inline-block;
    white-space: nowrap;
  }
  .kuc-combobox-1-23-1__group__label[hidden] {
    display: none;
  }
  .kuc-combobox-1-23-1__group__toggle {
    position: relative;
    display: flex;
    width: var(--kuc-combobox-toggle-width);
  }
  input[type=text].kuc-combobox-1-23-1__group__toggle__input {
    width: 100%;
    height: var(--kuc-combobox-toggle-height, 40px);
    box-sizing: border-box;
    box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;
    border: 1px solid #e3e7e8;
    background-color: #ffffff;
    color: var(--kuc-combobox-toggle-color, #000000);
    font-size: var(--kuc-combobox-font-size, 14px);
    line-height: 1.5;
    padding: 0 40px 0 8px;
    margin: 0;
  }
  input[type=text].kuc-combobox-1-23-1__group__toggle__input:focus {
    outline: none;
    border: 1px solid #3498db;
    background-color: #e2f2fe;
    box-shadow: none;
  }
  input[type=text].kuc-combobox-1-23-1__group__toggle__input:disabled,
  .kuc-combobox-1-23-1__group__toggle__icon__button:disabled {
    background-color: #d4d7d7;
    box-shadow: none;
    cursor: not-allowed;
    color: #888888;
  }
  .kuc-combobox-1-23-1__group__toggle__icon {
    position: absolute;
    right: 0px;
    top: 2px;
    border-left: 1px solid #e3e7e8;
  }
  .kuc-combobox-1-23-1__group__toggle__icon__button {
    width: 40px;
    height: calc(var(--kuc-combobox-toggle-height, 40px) - 4px);
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
    border-style: none;
    background-color: transparent;
    cursor: pointer;
  }
  .kuc-combobox-1-23-1__group__select-menu {
    min-width: 280px;
    color: var(--kuc-combobox-menu-color);
    padding: 8px 0;
    border: 1px solid #e3e7e8;
    box-sizing: border-box;
    background-color: #ffffff;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    position: absolute;
    z-index: 2000;
    margin: 0;
    list-style: none;
  }
  .kuc-combobox-1-23-1__group__select-menu[hidden] {
    display: none;
  }
  .kuc-combobox-1-23-1__group__select-menu__item {
    font-size: var(--kuc-combobox-font-size, 14px);
    padding: 8px 16px 8px 24px;
    line-height: 1;
    position: relative;
    cursor: pointer;
    white-space: nowrap;
  }
  .kuc-combobox-1-23-1__group__select-menu__item:lang(en) b,
  .kuc-combobox-1-23-1__group__select-menu__item:lang(ja) b,
  .kuc-combobox-1-23-1__group__select-menu__item:lang(zh) b,
  .kuc-combobox-1-23-1__group__select-menu__item:lang(zh-TW) b{
    font-weight: 700;
  }
  .kuc-combobox-1-23-1__group__select-menu__item__icon {
    position: absolute;
    top: 50%;
    left: 6px;
    margin-top: -5px;
  }
  .kuc-combobox-1-23-1__group__select-menu__item[aria-selected="true"] {
    color: var(--kuc-combobox-menu-color-selected, #3498db);
  }
  .kuc-combobox-1-23-1__group__select-menu__item--disabled,
  .kuc-combobox-1-23-1__group__select-menu__item--disabled[aria-selected="true"] {
    background-color: #d4d7d7;
    cursor: not-allowed;
    color: #888888;
  }
  .kuc-combobox-1-23-1__group__select-menu__highlight[role="option"] {
    background-color: #e2f2fe;
  }
`;var B=function(o,t,e,i){var n=arguments.length,a=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(o,t,e,i);else for(var r=o.length-1;r>=0;r--)(s=o[r])&&(a=(n<3?s(a):n>3?s(t,e,a):s(t,e))||a);return n>3&&a&&Object.defineProperty(t,e,a),a};let _n;(()=>{if(_n=window.customElements.get("kuc-combobox-1-23-1"),_n)return;class o extends k{constructor(e){super(),this.className="",this.error="",this.id="",this.label="",this.placeholder="",this.value="",this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this.items=[],this._selectorVisible=!1,this._searchText="",this._DISABLED_CLASS="kuc-combobox-1-23-1__group__select-menu__item--disabled",this._query="",this._matchingItems=[],this._GUID=M();const i=$(e);this._handleClickDocument=this._handleClickDocument.bind(this),this._handleScrollMenu=this._handleScrollMenu.bind(this),Object.assign(this,i)}shouldUpdate(e){if(e.has("items")){if(!D(this.items))return this.throwErrorAfterUpdateComplete(y.ITEMS.IS_NOT_ARRAY),!1;const i=this.items.map(n=>n.value);if(!un(i))return this.throwErrorAfterUpdateComplete(y.ITEMS.IS_DUPLICATED),!1}return e.has("value")&&!_i(this.value)?(this.throwErrorAfterUpdateComplete(y.VALUE.IS_NOT_STRING),!1):!0}willUpdate(e){e.has("value")&&(this._searchText=this._getSelectedLabel()||"")}render(){return p`
        <div class="kuc-combobox-1-23-1__group">
          <div
            class="kuc-combobox-1-23-1__group__label"
            id="${this._GUID}-label"
            ?hidden="${!this.label}"
          >
            <kuc-base-label-1-23-1
              .text="${this.label}"
              .requiredIcon="${this.requiredIcon}"
            ></kuc-base-label-1-23-1>
          </div>
          <div class="kuc-combobox-1-23-1__group__toggle">
            <input
              class="kuc-combobox-1-23-1__group__toggle__input"
              role="combobox"
              type="text"
              .value="${this._searchText}"
              aria-haspopup="listbox"
              aria-autocomplete="list"
              aria-labelledby="${this._GUID}-label"
              aria-controls="${this._GUID}-listbox"
              aria-describedby="${this._GUID}-error"
              aria-expanded="${this._selectorVisible}"
              aria-required="${this.requiredIcon}"
              placeholder="${this.placeholder}"
              ?disabled="${this.disabled}"
              @change="${this._handleChangeComboboxInput}"
              @input="${this._handleInputComboboxInput}"
              @keydown="${this._handleKeyDownComboboxInput}"
              @click="${this._handleClickComboboxInput}"
              @blur="${this._handleBlurComboboxInput}"
            />
            <div class="kuc-combobox-1-23-1__group__toggle__icon">
              <button
                class="kuc-combobox-1-23-1__group__toggle__icon__button"
                tabindex="-1"
                type="button"
                aria-labelledby="${this._GUID}-label"
                aria-controls="${this._GUID}-listbox"
                aria-expanded="${this._selectorVisible}"
                ?disabled="${this.disabled}"
                @click="${this._handleClickToggleButton}"
              >
                ${this._getToggleIconSvgTemplate()}
              </button>
            </div>
          </div>
          <ul
            class="kuc-combobox-1-23-1__group__select-menu"
            role="listbox"
            id="${this._GUID}-listbox"
            aria-labelledby="${this._GUID}-label"
            aria-hidden="${!this._selectorVisible}"
            ?hidden="${!this._selectorVisible}"
            @mouseleave="${this._handleMouseLeaveMenu}"
            @mousedown="${this._handleMouseDownMenu}"
          >
            ${this._matchingItems.map((e,i)=>this._getItemTemplate(e,i))}
          </ul>
          <kuc-base-error-1-23-1
            .text="${this.error}"
            .guid="${this._GUID}"
            ?hidden="${!this.error}"
            ariaLive="assertive"
          ></kuc-base-error-1-23-1>
        </div>
      `}firstUpdated(){window.addEventListener("resize",()=>{this._actionResizeScrollWindow()}),window.addEventListener("scroll",()=>{this._actionResizeScrollWindow()})}async updated(e){super.updated(e),await this.updateComplete,this._selectorVisible?(this._menuEl.addEventListener("scroll",this._handleScrollMenu),this._setMenuPosition(),this._scrollToView(),this._selectedItemEl===null||this._selectedItemEl.classList.contains(this._DISABLED_CLASS)?this._actionClearAllHighlightMenuItem():this._setHighlightAndActiveDescendantMenu(this._selectedItemEl),setTimeout(()=>{document.addEventListener("click",this._handleClickDocument,!0)},1)):setTimeout(()=>{document.removeEventListener("click",this._handleClickDocument,!0)},1)}_getToggleIconSvgTemplate(){return C`
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M24.2122 15.6665L25 16.1392L19.7332 21.4998H18.2668L13 16.1392L13.7878 15.6665L18.765 20.6866H19.235L24.2122 15.6665Z"
          fill="#3498db"/>
      </svg>
    `}_getItemTemplate(e,i){const n=this._isCheckedItem(e),a=e.disabled,s=e.label===void 0?e.value:e.label;let r=n?p`<b>${s}</b>`:p`${s}`;const l=this._query.trim().toLowerCase();if(l&&s){const c=s.toLowerCase().indexOf(l),d=c+l.length;r=p`
          ${s.slice(0,c)}<b>${s.slice(c,d)}</b>${s.slice(d)}
        `}return p`
        <li
          class="kuc-combobox-1-23-1__group__select-menu__item ${a?this._DISABLED_CLASS:""}"
          role="option"
          aria-selected="${n?"true":"false"}"
          value="${e.value!==void 0?e.value:""}"
          id="${this._GUID}-menuitem-${i}"
          @click="${a?null:this._handleClickComboboxItem}"
          @mouseover="${a?null:this._handleMouseOverComboboxItem}"
        >
          ${this._getComboboxIconSvgTemplate(n,a)}
          ${r}
        </li>
      `}_getComboboxIconSvgTemplate(e,i){return C`
      ${e?C`<svg
          class="kuc-combobox-1-23-1__group__select-menu__item__icon"
          width="11"
          height="9"
          viewBox="0 0 11 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 5L1.5 3L4.5 5.5L9.5 0L11 1.5L4.5 8.5L0 5Z"
            fill="${i?"#888888":"#3498db"}"/>
        </svg>`:""}`}_handleClickComboboxItem(e){const n=this._getItemElementWhenMouseOverDown(e.target).getAttribute("value");this._actionUpdateValue(n)}_handleMouseOverComboboxItem(e){const i=this._getItemElementWhenMouseOverDown(e.target);this._actionHighlightMenuItem(i)}_handleMouseLeaveMenu(){this._actionClearAllHighlightMenuItem()}_handleMouseDownMenu(e){e.preventDefault()}_handleClickToggleButton(e){e.preventDefault(),this._inputEl.focus(),this._inputEl.select(),this._resetToggleInputValue(),this._actionToggleMenu()}_handleInputComboboxInput(e){e.stopPropagation(),this._searchText=this._inputEl.value,this._query=this._inputEl.value,this._setMatchingItems()}_handleClickComboboxInput(e){e.stopPropagation(),this._inputEl.select(),this._setMatchingItems()}_handleChangeComboboxInput(e){e.stopPropagation()}_handleBlurComboboxInput(e){this._resetToggleInputValue()}_handleClickDocument(e){(e.target===this._toggleEl||this._toggleEl.contains(e.target))&&(this._inputEl.focus(),e.stopPropagation()),!Array.from(this._disabledItemsEl).some(i=>i===e.target||i.contains(e.target))&&this._actionHideMenu()}_handleScrollMenu(){this._previousScrollTop=this._menuEl.scrollTop}_handleKeyDownComboboxInput(e){switch(e.key){case"Up":case"ArrowUp":{if(e.preventDefault(),!this._selectorVisible){this._actionShowMenu();break}this._actionHighlightPrevMenuItem();break}case"Tab":this._selectorVisible&&this._actionHideMenu();break;case"Down":case"ArrowDown":{if(e.preventDefault(),!this._selectorVisible){this._actionShowMenu();break}this._actionHighlightNextMenuItem();break}case"Enter":{e.preventDefault();const i=this._highlightItemEl;if(i===null)break;const n=i.getAttribute("value");this._actionUpdateValue(n),this._actionHideMenu();break}case"Escape":{e.preventDefault(),this._selectorVisible&&e.stopPropagation(),this._resetToggleInputValue(),this._actionHideMenu();break}case"Home":{this._selectorVisible&&(e.preventDefault(),this._actionHighlightFirstMenuItem());break}case"End":{this._selectorVisible&&(e.preventDefault(),this._actionHighlightLastMenuItem());break}}}_getSelectedLabel(){const e=this.items.filter((i,n)=>this._isCheckedItem(i));return e.length===0?"":e[0].label===void 0?e[0].value:e[0].label}_actionShowMenu(){this._query.trim()===""&&(this._matchingItems=this.items),!(this.items.length===0||this._matchingItems.length===0)&&(this._inputEl.focus(),this._selectorVisible=!0)}_actionHideMenu(){this._selectorVisible=!1,this._actionRemoveActiveDescendant()}_actionToggleMenu(){if(this._selectorVisible){this._actionHideMenu();return}this._actionShowMenu()}_actionHighlightFirstMenuItem(){let e=this._firstItemEl,i=!1;for(let n=0;n<this._matchingItems.length&&(i=e.classList.contains(this._DISABLED_CLASS),i);n++)e=e.nextElementSibling;!i&&this._setHighlightAndActiveDescendantMenu(e)}_actionHighlightLastMenuItem(){let e=this._lastItemEl,i=!1;for(let n=0;n<this._matchingItems.length&&(i=e.classList.contains(this._DISABLED_CLASS),i);n++)e=e.previousElementSibling;!i&&this._setHighlightAndActiveDescendantMenu(e)}_actionHighlightPrevMenuItem(){let e=null;this._highlightItemEl!==null&&(e=this._highlightItemEl.previousElementSibling),e===null&&(e=this._lastItemEl);let i=!1;for(let n=0;n<this._matchingItems.length&&(i=e.classList.contains(this._DISABLED_CLASS),i);n++)e=e.previousElementSibling,e===null&&(e=this._lastItemEl);!i&&this._setHighlightAndActiveDescendantMenu(e)}_actionHighlightNextMenuItem(){let e=null;this._highlightItemEl!==null&&(e=this._highlightItemEl.nextElementSibling),e===null&&(e=this._firstItemEl);let i=!1;for(let n=0;n<this._matchingItems.length&&(i=e.classList.contains(this._DISABLED_CLASS),i);n++)e=e.nextElementSibling,e===null&&(e=this._firstItemEl);!i&&this._setHighlightAndActiveDescendantMenu(e)}_actionClearAllHighlightMenuItem(){this._itemsEl.forEach(e=>{e.classList.remove("kuc-combobox-1-23-1__group__select-menu__highlight")}),this._actionRemoveActiveDescendant()}_setHighlightAndActiveDescendantMenu(e){this._actionHighlightMenuItem(e),this._actionSetActiveDescendant(e.id),this._scrollToView()}_actionHighlightMenuItem(e){this._actionClearAllHighlightMenuItem(),e.classList.add("kuc-combobox-1-23-1__group__select-menu__highlight")}_actionUpdateValue(e){if(this.value===e){this._resetToggleInputValue();return}const i={oldValue:this.value,value:e};this.value=e,this._query="",m(this,"change",i)}_actionSetActiveDescendant(e){e!==void 0&&this._inputEl!==null&&this._inputEl.setAttribute("aria-activedescendant",e)}_actionRemoveActiveDescendant(){this._inputEl.removeAttribute("aria-activedescendant")}_setMatchingItems(){const e=this.items.filter(i=>{const n=s=>s.replace(/[.*+?^=!:${}()|[\]/\\]/g,"\\$&"),a=new RegExp(n(this._query.trim()),"gi");return i.label?a.test(i.label):i.value?a.test(i.value):!1});e.length===0?(this._matchingItems=[],this._actionHideMenu()):(this._matchingItems=e,this._actionShowMenu())}_getScrollbarWidthHeight(){const e=document.createElement("div");e.style.cssText="overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(e);const i=e.offsetWidth-e.clientWidth,n=e.offsetHeight-e.clientHeight;return document.body.removeChild(e),{scrollbarWidth:i,scrollbarHeight:n}}_getDistanceToggleButton(){const{scrollbarWidth:e,scrollbarHeight:i}=this._getScrollbarWidthHeight(),n=document.body.scrollHeight>window.innerHeight,a=document.body.scrollWidth>window.innerWidth,s=this._toggleEl.getBoundingClientRect().top,r=window.innerHeight-this._toggleEl.getBoundingClientRect().bottom-(a?i:0),l=this._toggleEl.getBoundingClientRect().left,c=window.innerWidth-this._toggleEl.getBoundingClientRect().left-(n?e:0);return{toTop:s,toBottom:r,toLeft:l,toRight:c}}_setMenuPositionAboveOrBelow(){this._menuEl.style.height="auto",this._menuEl.style.bottom="auto",this._menuEl.style.overflowY="scroll",this._menuEl.style.maxHeight="none";const e=this._menuEl.getBoundingClientRect().height;this._menuEl.style.maxHeight="var(--kuc-combobox-menu-max-height, none)";const i=this._menuEl.getBoundingClientRect().height,n=16,a=this._getDistanceToggleButton();if(a.toBottom>=i){e>i?this._previousScrollTop&&(this._menuEl.scrollTop=this._previousScrollTop):this._menuEl.style.overflowY="";return}if(a.toBottom<a.toTop){const s=this._errorEl.offsetHeight?this._errorEl.offsetHeight+n:0;if(this._menuEl.style.bottom=`${this._toggleEl.offsetHeight+s}px`,a.toTop>=i){e>i?this._previousScrollTop&&(this._menuEl.scrollTop=this._previousScrollTop):this._menuEl.style.overflowY="";return}this._menuEl.style.height=`${a.toTop}px`}else this._menuEl.style.height=`${a.toBottom}px`;this._previousScrollTop&&(this._menuEl.scrollTop=this._previousScrollTop)}_setMenuPositionLeftOrRight(){this._menuEl.style.right="auto";const e=this._menuEl.getBoundingClientRect().width,i=this._getDistanceToggleButton();if(i.toRight>=e||i.toLeft<e||i.toRight<0)return;const n=this._toggleEl.offsetWidth-i.toRight;this._menuEl.style.right=n>0?`${n}px`:"0px"}_setMenuPosition(){this._setMenuPositionAboveOrBelow(),this._setMenuPositionLeftOrRight()}_scrollToView(){if(!this._highlightItemEl||!this._menuEl)return;const e=this._menuEl.getBoundingClientRect(),i=this._highlightItemEl.getBoundingClientRect();i.top<e.top&&(this._menuEl.scrollTop-=e.top-i.top),e.bottom<i.bottom&&(this._menuEl.scrollTop+=i.bottom-e.bottom)}_actionResizeScrollWindow(){this._timeoutID||!this._selectorVisible||(this._timeoutID=window.setTimeout(()=>{this._timeoutID=null,this._setMenuPosition()},50))}_isCheckedItem(e){return e.value===this.value}_resetToggleInputValue(){const e=this._getSelectedLabel();this._searchText!==e&&(this._searchText=e||""),this._query=""}_getItemElementWhenMouseOverDown(e){return e.classList.value.split(" ").includes("kuc-combobox-1-23-1__group__select-menu__item")?e:this._getItemElementWhenMouseOverDown(e.parentElement)}}B([u({type:String,reflect:!0,attribute:"class"})],o.prototype,"className",void 0),B([u({type:String})],o.prototype,"error",void 0),B([u({type:String,reflect:!0,attribute:"id"})],o.prototype,"id",void 0),B([u({type:String})],o.prototype,"label",void 0),B([u({type:String})],o.prototype,"placeholder",void 0),B([u({type:String})],o.prototype,"value",void 0),B([u({type:Boolean})],o.prototype,"disabled",void 0),B([u({type:Boolean})],o.prototype,"requiredIcon",void 0),B([u({type:Boolean,attribute:"hidden",reflect:!0,converter:V})],o.prototype,"visible",void 0),B([u({type:Array})],o.prototype,"items",void 0),B([v()],o.prototype,"_selectorVisible",void 0),B([b(".kuc-combobox-1-23-1__group__toggle")],o.prototype,"_toggleEl",void 0),B([b(".kuc-combobox-1-23-1__group__toggle__input")],o.prototype,"_inputEl",void 0),B([b(".kuc-combobox-1-23-1__group__select-menu")],o.prototype,"_menuEl",void 0),B([q(".kuc-combobox-1-23-1__group__select-menu__item")],o.prototype,"_itemsEl",void 0),B([b(".kuc-combobox-1-23-1__group__select-menu__item")],o.prototype,"_firstItemEl",void 0),B([b(".kuc-combobox-1-23-1__group__select-menu__item:last-child")],o.prototype,"_lastItemEl",void 0),B([b(".kuc-combobox-1-23-1__group__select-menu__item[aria-selected=true]")],o.prototype,"_selectedItemEl",void 0),B([b(".kuc-combobox-1-23-1__group__select-menu__highlight")],o.prototype,"_highlightItemEl",void 0),B([b(".kuc-base-error-1-23-1__error")],o.prototype,"_errorEl",void 0),B([q(".kuc-combobox-1-23-1__group__select-menu__item--disabled")],o.prototype,"_disabledItemsEl",void 0),B([v()],o.prototype,"_searchText",void 0),window.customElements.define("kuc-combobox-1-23-1",o),x(Qu),_n=o})();const ec=`
.kuc-base-datetime-header-year-1-23-1__toggle {
  position: relative;
  box-sizing: border-box;
  height: 32px;
  padding: 0 24px 0 8px;
  line-height: 30px;
  overflow: hidden;
  background-color: white;
  border: 1px solid transparent;
  cursor: pointer;
}
.kuc-base-datetime-header-year-1-23-1__toggle__icon {
  position: absolute;
  flex: none;
  width: 24px;
  height: 32px;
}
.kuc-base-datetime-header-year-1-23-1__toggle__label {
  font-size: 13px;
  color: #333333;
}
.kuc-base-datetime-header-year-1-23-1__toggle:focus {
  border: 1px solid #3498db;
  outline: none;
}
`;var xo=function(o,t,e,i){var n=arguments.length,a=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(o,t,e,i);else for(var r=o.length-1;r>=0;r--)(s=o[r])&&(a=(n<3?s(a):n>3?s(t,e,a):s(t,e))||a);return n>3&&a&&Object.defineProperty(t,e,a),a};class Ni extends k{constructor(){super(),this.year=new Date().getFullYear(),this.postfix="",this._listBoxVisible=!1,this._handleScrollDocument=this._handleScrollDocument.bind(this)}connectedCallback(){super.connectedCallback(),setTimeout(()=>{document.addEventListener("scroll",this._handleScrollDocument)},1)}disconnectedCallback(){document.removeEventListener("scroll",this._handleScrollDocument),super.disconnectedCallback()}update(t){this._listBoxItems=this._getYearOptions().map(e=>({value:`${e}`,label:`${e}${this.postfix}`})),super.update(t)}render(){return p`
      <button
        class="kuc-base-datetime-header-year-1-23-1__toggle"
        type="button"
        aria-haspopup="listbox"
        aria-expanded="${this._listBoxVisible}"
        tabindex="${this._listBoxVisible?"-1":"0"}"
        @mouseup="${this._handleMouseUpDropdownToggle}"
        @mousedown="${this._handleMouseDownDropdownToggle}"
        @click="${this._handleClickDropdownYearToggle}"
        @keydown="${this._handleKeyDownYearToggle}"
      >
        <span class="kuc-base-datetime-header-year-1-23-1__toggle__label"
          >${this.year}${this.postfix}</span
        >
        <span class="kuc-base-datetime-header-year-1-23-1__toggle__icon"
          >${Rs()}
        </span>
      </button>
      ${this._getListBoxTemplate()}
    `}async updated(t){await this.updateComplete,t.has("_listBoxVisible")&&this._listBoxVisible&&this._handleScrollDocument(),super.update(t)}closeListBox(){this._listBoxVisible=!1,this._toggleEl.focus()}_handleScrollDocument(){const t=Ri(this);if(t.inputToBottom>=t.inputToTop){go(this,"bottom");return}go(this,"top")}_getListBoxTemplate(){return this._listBoxVisible?p`
          <kuc-base-datetime-listbox-1-23-1
            .items="${this._listBoxItems||[]}"
            .value="${this.year.toString()}"
            class="kuc-base-datetime-header-year-1-23-1__listbox"
            @kuc:listbox-click="${this._handleChangeListBox}"
            @kuc:listbox-blur="${this._handleFocusOutListBox}"
            @kuc:listbox-escape="${this._handleListBoxEscape}"
            aria-hidden="${!this._listBoxVisible}"
          >
          </kuc-base-datetime-listbox-1-23-1>
        `:""}_handleFocusOutListBox(){this._listBoxVisible=!1,this._toggleEl.focus()}_handleListBoxEscape(){this._handleFocusOutListBox()}_handleMouseUpDropdownToggle(t){t.preventDefault()}_handleMouseDownDropdownToggle(t){t.preventDefault()}_handleClickDropdownYearToggle(t){t.stopPropagation(),t.preventDefault(),this._listBoxVisible?this.closeListBox():this._openListBox(),m(this,"kuc:year-dropdown-click",{value:this._listBoxVisible.toString(),oldValue:(!this._listBoxVisible).toString()})}_handleKeyDownYearToggle(t){t.key!=="Tab"&&(t.preventDefault(),this._openListBoxByKey(t.key))}_openListBoxByKey(t){[" ","Up","ArrowUp","Down","ArrowDown","Enter"].indexOf(t)>-1&&this._openListBox()}_handleChangeListBox(t){if(t.preventDefault(),t.stopPropagation(),this.closeListBox(),!t.detail.value)return;this.year=Number(t.detail.value);const e={value:`${this.year}`};m(this,"kuc:year-dropdown-change",e)}_openListBox(){this._listBoxVisible=!0}_getYearOptions(){const t=[];Number.isInteger(this.year)||(this.year=new Date().getFullYear());let e=this.year<100?0:this.year-100;const i=this.year>=9899?9999:this.year+100;for(e;e<=i;e++)t.push(e);return t}}xo([u({type:Number})],Ni.prototype,"year",void 0),xo([u({type:String})],Ni.prototype,"postfix",void 0),xo([v()],Ni.prototype,"_listBoxVisible",void 0),xo([b(".kuc-base-datetime-header-year-1-23-1__toggle")],Ni.prototype,"_toggleEl",void 0),window.customElements.get("kuc-base-datetime-header-year-1-23-1")||(x(ec),window.customElements.define("kuc-base-datetime-header-year-1-23-1",Ni));const tc=`
.kuc-base-datetime-header-month-1-23-1__toggle {
  position: relative;
  box-sizing: border-box;
  height: 32px;
  padding: 0 24px 0 8px;
  line-height: 30px;
  overflow: hidden;
  background-color: white;
  border: 1px solid transparent;
  cursor: pointer;
}
.kuc-base-datetime-header-month-1-23-1__toggle__icon {
  position: absolute;
  flex: none;
  width: 24px;
  height: 32px;
}
.kuc-base-datetime-header-month-1-23-1__toggle__label {
  font-size: 13px;
  color: #333333;
}
.kuc-base-datetime-header-month-1-23-1__toggle:focus {
  border: 1px solid #3498db;
  outline: none;
}
`;var yo=function(o,t,e,i){var n=arguments.length,a=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(o,t,e,i);else for(var r=o.length-1;r>=0;r--)(s=o[r])&&(a=(n<3?s(a):n>3?s(t,e,a):s(t,e))||a);return n>3&&a&&Object.defineProperty(t,e,a),a};class Pi extends k{constructor(){super(),this.language="auto",this.month=1,this._listBoxVisible=!1,this._locale=N("en"),this._monthLabel="",this._maxHeight=1e3,this._handleScrollDocument=this._handleScrollDocument.bind(this)}connectedCallback(){super.connectedCallback(),setTimeout(()=>{document.addEventListener("scroll",this._handleScrollDocument)},1)}disconnectedCallback(){document.removeEventListener("scroll",this._handleScrollDocument),super.disconnectedCallback()}update(t){t.has("language")&&(this._locale=N(this.language),this._listBoxItems=this._getListBoxItems()),t.has("month")&&(this._monthLabel=this._getMonthLabel()),super.update(t)}render(){return p`
      <button
        class="kuc-base-datetime-header-month-1-23-1__toggle"
        type="button"
        aria-haspopup="listbox"
        aria-expanded="${this._listBoxVisible}"
        tabindex="${this._listBoxVisible?"-1":"0"}"
        @mouseup="${this._handleMouseUpDropdownToggle}"
        @mousedown="${this._handleMouseDownDropdownToggle}"
        @click="${this._handleClickDropdownMonthToggle}"
        @keydown="${this._handleKeyDownMonthToggle}"
      >
        <span class="kuc-base-datetime-header-month-1-23-1__toggle__label"
          >${this._monthLabel}</span
        >
        <span class="kuc-base-datetime-header-month-1-23-1__toggle__icon"
          >${Rs()}
        </span>
      </button>
      ${this._getListBoxTemplate()}
    `}async updated(t){await this.updateComplete,t.has("_listBoxVisible")&&this._listBoxVisible&&this._handleScrollDocument(),super.update(t)}_handleScrollDocument(){const t=Ri(this);if(t.inputToBottom>=t.inputToTop){go(this,"bottom");return}go(this,"top")}closeListBox(){this._listBoxVisible=!1,this._toggleEl.focus()}_getListBoxTemplate(){return this._listBoxVisible?p`
          <kuc-base-datetime-listbox-1-23-1
            .items="${this._listBoxItems||[]}"
            .value="${this.month.toString()}"
            .maxHeight="${this._maxHeight}"
            class="kuc-base-datetime-header-month-1-23-1__listbox"
            @kuc:listbox-click="${this._handleChangeListBox}"
            @kuc:listbox-blur="${this._handleFocusOutListBox}"
            @kuc:listbox-escape="${this._handleListBoxEscape}"
            aria-hidden="${!this._listBoxVisible}"
          >
          </kuc-base-datetime-listbox-1-23-1>
        `:""}_handleFocusOutListBox(){this._listBoxVisible=!1,this._toggleEl.focus()}_handleListBoxEscape(){this._handleFocusOutListBox()}_handleClickDropdownMonthToggle(t){t.stopPropagation(),t.preventDefault(),this._listBoxVisible?this.closeListBox():this._openListBox(),m(this,"kuc:month-dropdown-click",{value:this._listBoxVisible.toString(),oldValue:(!this._listBoxVisible).toString()})}_handleMouseUpDropdownToggle(t){t.preventDefault()}_handleMouseDownDropdownToggle(t){t.preventDefault()}_handleKeyDownMonthToggle(t){this._handleTabKey(t.key)||(t.preventDefault(),this._openListBoxByKey(t.key))}_openListBoxByKey(t){[" ","Up","ArrowUp","Down","ArrowDown","Enter"].indexOf(t)>-1&&this._openListBox()}_handleTabKey(t){return t==="Tab"}_handleChangeListBox(t){if(t.preventDefault(),t.stopPropagation(),this.closeListBox(),!t.detail.value)return;this.month=Number(t.detail.value);const e={value:`${this.month}`};m(this,"kuc:month-dropdown-change",e)}_openListBox(){this._listBoxVisible=!0}_getListBoxItems(){return this._locale.MONTH_SELECT.map((t,e)=>({value:`${e+1}`,label:`${t}`}))}_getMonthLabel(){const t=this._locale.MONTH_SELECT.filter((e,i)=>this.month===i+1);return t.length>0?t[0]:"JANUARY"}}yo([u({type:String,attribute:"lang",reflect:!0})],Pi.prototype,"language",void 0),yo([u({type:Number})],Pi.prototype,"month",void 0),yo([v()],Pi.prototype,"_listBoxVisible",void 0),yo([b(".kuc-base-datetime-header-month-1-23-1__toggle")],Pi.prototype,"_toggleEl",void 0),window.customElements.get("kuc-base-datetime-header-month-1-23-1")||(x(tc),window.customElements.define("kuc-base-datetime-header-month-1-23-1",Pi));const ic=`
kuc-base-datetime-calendar-header-1-23-1,
kuc-base-datetime-calendar-header-1-23-1 *,
kuc-base-datetime-calendar-header-1-23-1:lang(en),
kuc-base-datetime-calendar-header-1-23-1:lang(en) * {
  font-family: sans-serif;
}
kuc-base-datetime-calendar-header-1-23-1:lang(ja),
kuc-base-datetime-calendar-header-1-23-1:lang(ja) * {
  font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
    sans-serif;
  font-weight: 700;
}
kuc-base-datetime-calendar-header-1-23-1:lang(zh),
kuc-base-datetime-calendar-header-1-23-1:lang(zh) * {
  font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
    Hei, "Heiti SC", sans-serif;
}
kuc-base-datetime-calendar-header-1-23-1:lang(zh-TW),
kuc-base-datetime-calendar-header-1-23-1:lang(zh-TW) * {
  font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
    Hei,"Heiti SC",sans-serif;
}
kuc-base-datetime-calendar-header-1-23-1:lang(es),
kuc-base-datetime-calendar-header-1-23-1:lang(es) * {
  font-family: sans-serif;
}
kuc-base-datetime-calendar-header-1-23-1:lang(ja) kuc-base-datetime-listbox-1-23-1 * {
  font-weight: 400;
}
.kuc-base-datetime-calendar-header-1-23-1__group {
  display: flex;
  align-items: center;
  box-sizing: border-box;
  border-bottom: 1px solid #e3e7e8;
  padding: 0;
  white-space: nowrap;
  width: 266px;
  height: 44px;
}
.kuc-base-datetime-calendar-header-1-23-1__group__button {
  background: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  width: 38px;
  height: 32px;
  margin: 0;
  text-align: center;
}
.kuc-base-datetime-calendar-header-1-23-1__group__button:focus {
  border: 1px solid #3498db;
  outline: none;
}
.kuc-base-datetime-calendar-header-1-23-1__group__button-icon {
  vertical-align: middle;
}
.kuc-base-datetime-calendar-header-1-23-1__group__center {
  width: 190px;
  text-align: center;
  display: flex;
  justify-content: center;
}
.kuc-base-datetime-calendar-header-1-23-1__month {
  margin: 0 4px 0 4px;
}
`;var Yt=function(o,t,e,i){var n=arguments.length,a=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(o,t,e,i);else for(var r=o.length-1;r>=0;r--)(s=o[r])&&(a=(n<3?s(a):n>3?s(t,e,a):s(t,e))||a);return n>3&&a&&Object.defineProperty(t,e,a),a};function oc(o){return o>0&&o<13}function nc(o){return o>=0&&o<1e4}class $t extends k{constructor(){super(...arguments),this.language="en",this.month=1,this.year=new Date().getFullYear(),this._locale=N("en")}update(t){t.has("language")&&(this._locale=N(this.language)),super.update(t)}render(){return p`
      <div class="kuc-base-datetime-calendar-header-1-23-1__group">
        <button
          aria-label="previous month"
          type="button"
          class="kuc-base-datetime-calendar-header-1-23-1__group__button kuc-base-datetime-calendar-header-1-23-1__group__button--previous-month"
          @click="${this._handleClickCalendarPrevMonthBtn}"
          @keydown="${this._handleKeyDownCalendarPrevMonthBtn}"
        >
          ${Ru()}
        </button>
        <div class="kuc-base-datetime-calendar-header-1-23-1__group__center">
          ${this._getYearMonthTemplate()}
        </div>
        <button
          aria-label="next month"
          type="button"
          class="kuc-base-datetime-calendar-header-1-23-1__group__button kuc-base-datetime-calendar-header-1-23-1__group__button--next-month"
          @click="${this._handleClickCalendarNextMonthBtn}"
        >
          ${Nu()}
        </button>
      </div>
    `}_getYearTemplate(){return p`
      <kuc-base-datetime-header-year-1-23-1
        class="kuc-base-datetime-calendar-header-1-23-1__year"
        .postfix="${this._locale.YEAR_SELECT_POSTFIX}"
        .year="${this.year}"
        @kuc:year-dropdown-change="${this._handleYearDropdownChange}"
        @kuc:year-dropdown-click="${this._handleYearDropdownClick}"
      >
      </kuc-base-datetime-header-year-1-23-1>
    `}_getMonthTemplate(){return p`
      <kuc-base-datetime-header-month-1-23-1
        class="kuc-base-datetime-calendar-header-1-23-1__month"
        .month="${this.month}"
        .language="${this.language}"
        @kuc:month-dropdown-change="${this._handleMonthDropdownChange}"
        @kuc:month-dropdown-click="${this._handleMonthDropdownClick}"
      >
      </kuc-base-datetime-header-month-1-23-1>
    `}_getYearMonthTemplate(){return this.language==="zh"||this.language==="ja"||this.language==="zh-TW"?p` ${this._getYearTemplate()}${this._getMonthTemplate()} `:p` ${this._getMonthTemplate()}${this._getYearTemplate()} `}_handleMonthDropdownChange(t){t.stopPropagation(),t.preventDefault(),this.month=parseInt(t.detail.value,10),this._dispatchCalendarHeaderChangeEvent()}_handleYearDropdownChange(t){t.stopPropagation(),t.preventDefault(),this.year=parseInt(t.detail.value,10),this._dispatchCalendarHeaderChangeEvent()}_handleYearDropdownClick(){this._listBoxMonthEl&&this._baseDateTimeHeaderMonthEl.closeListBox()}_handleMonthDropdownClick(){this._listBoxYearEl&&this._baseDateTimeHeaderYearEl.closeListBox()}_handleClickCalendarPrevMonthBtn(t){t.stopPropagation(),this.month===1?(this.month=12,this.year--):this.month-=1,this._dispatchCalendarHeaderChangeEvent()}_handleKeyDownCalendarPrevMonthBtn(t){!t.shiftKey||t.key!=="Tab"||(t.preventDefault(),m(this,"kuc:calendar-header-previous-shifttab"))}_handleClickCalendarNextMonthBtn(t){t.stopPropagation(),this.month===12?(this.month=1,this.year++):this.month+=1,this._dispatchCalendarHeaderChangeEvent()}_dispatchCalendarHeaderChangeEvent(){const t=this.year,e=this.month,i={value:`${t}-${e}`};m(this,"kuc:calendar-header-change",i)}}Yt([u({type:String,attribute:"lang",reflect:!0})],$t.prototype,"language",void 0),Yt([u({type:Number,hasChanged(o){return oc(o)}})],$t.prototype,"month",void 0),Yt([u({type:Number,hasChanged(o){return nc(o)}})],$t.prototype,"year",void 0),Yt([b(".kuc-base-datetime-calendar-header-1-23-1__month")],$t.prototype,"_baseDateTimeHeaderMonthEl",void 0),Yt([b(".kuc-base-datetime-calendar-header-1-23-1__year")],$t.prototype,"_baseDateTimeHeaderYearEl",void 0),Yt([b(".kuc-base-datetime-header-month-1-23-1__listbox")],$t.prototype,"_listBoxMonthEl",void 0),Yt([b(".kuc-base-datetime-header-year-1-23-1__listbox")],$t.prototype,"_listBoxYearEl",void 0),window.customElements.get("kuc-base-datetime-calendar-header-1-23-1")||(x(ic),window.customElements.define("kuc-base-datetime-calendar-header-1-23-1",$t));const ac=`
kuc-base-datetime-calendar-body-1-23-1,
kuc-base-datetime-calendar-body-1-23-1 *,
kuc-base-datetime-calendar-body-1-23-1:lang(en),
kuc-base-datetime-calendar-body-1-23-1:lang(en) * {
  font-family: sans-serif;
}
kuc-base-datetime-calendar-body-1-23-1:lang(ja),
kuc-base-datetime-calendar-body-1-23-1:lang(ja) * {
  font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
    sans-serif;
}
kuc-base-datetime-calendar-body-1-23-1:lang(zh),
kuc-base-datetime-calendar-body-1-23-1:lang(zh) * {
  font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
    Hei, "Heiti SC", sans-serif;
}
kuc-base-datetime-calendar-body-1-23-1:lang(zh-TW),
kuc-base-datetime-calendar-body-1-23-1:lang(zh-TW) * {
  font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
    Hei,"Heiti SC",sans-serif;
}
kuc-base-datetime-calendar-body-1-23-1:lang(es),
kuc-base-datetime-calendar-body-1-23-1:lang(es) * {
  font-family: sans-serif;
}
.kuc-base-datetime-calendar-body-1-23-1__table,
.kuc-base-datetime-calendar-body-1-23-1__table tr {
  border-collapse: separate;
  border-spacing: 0;
}
.kuc-base-datetime-calendar-body-1-23-1__table__date,
.kuc-base-datetime-calendar-body-1-23-1__table__date--selected {
  border-spacing: 1px;
  padding: 0px;
  border: 1px solid #ffffff;
}
.kuc-base-datetime-calendar-body-1-23-1__table__header {
  text-align: center;
  text-transform: uppercase;
  font-size: 10px;
  font-weight: 400;
  color: #333333;
}
:lang(ja) th.kuc-base-datetime-calendar-body-1-23-1__table__header {
  font-weight: 700;
}
:lang(es) th.kuc-base-datetime-calendar-body-1-23-1__table__header {
  text-transform: revert;
}
.kuc-base-datetime-calendar-body-1-23-1__table__date--selected,
.kuc-base-datetime-calendar-body-1-23-1__table__date,
.kuc-base-datetime-calendar-body-1-23-1__table__header {
  box-sizing: border-box;
  padding: 8px 0;
  width: 36px;
  height: 31px;
  border: 1px solid #ffffff;
  text-align: center;
  text-transform: uppercase;
  font-size: 10px;
  font-weight: 400;
  color: #333333;
  cursor: pointer;
}
.kuc-base-datetime-calendar-body-1-23-1__table__header:nth-child(1),
.kuc-base-datetime-calendar-body-1-23-1__table__header:nth-child(7) {
  color: #d4d7d7;
}
.kuc-base-datetime-calendar-body-1-23-1__table__date:focus,
.kuc-base-datetime-calendar-body-1-23-1__table__date--selected:focus {
  outline: none;
}
.kuc-base-datetime-calendar-body-1-23-1__table__date
  .kuc-base-datetime-calendar-body-1-23-1__table__date__button:hover {
  color: #000000;
}
.kuc-base-datetime-calendar-body-1-23-1__table__date--selected {
  border-color: #3498db;
}
.kuc-base-datetime-calendar-body-1-23-1__table__date--selected--today,
.kuc-base-datetime-calendar-body-1-23-1__table__date--today {
  color: #ffffff;
  background: #888888;
}
.kuc-base-datetime-calendar-body-1-23-1__table__date--today:hover {
  color: #333333;
}
.kuc-base-datetime-calendar-body-1-23-1__table__date--other-month,
.kuc-base-datetime-calendar-body-1-23-1__table__date--other-month:hover {
  color: #d4d7d7;
}
`;var bt=function(o,t,e,i){var n=arguments.length,a=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(o,t,e,i);else for(var r=o.length-1;r>=0;r--)(s=o[r])&&(a=(n<3?s(a):n>3?s(t,e,a):s(t,e))||a);return n>3&&a&&Object.defineProperty(t,e,a),a};class Ze extends k{constructor(){super(),this.month=1,this.year=2021,this.language="en",this.value="",this._month=1,this._year=2021,this._locale=N("en"),this._handleClickDocument=this._handleClickDocument.bind(this),this._handleKeyDownDocument=this._handleKeyDownDocument.bind(this)}connectedCallback(){super.connectedCallback(),setTimeout(()=>{document.addEventListener("click",this._handleClickDocument),document.addEventListener("keydown",this._handleKeyDownDocument)},1)}disconnectedCallback(){document.removeEventListener("click",this._handleClickDocument),document.removeEventListener("keydown",this._handleKeyDownDocument),super.disconnectedCallback()}update(t){if(t.forEach((e,i)=>{i==="language"&&(this._locale=N(this.language))}),t.has("month")&&(this._month=this.month),t.has("year")&&(this._year=this.year),t.has("value")){const{month:e,year:i}=this._separateDateValue();this._month=parseInt(e,10),this._year=parseInt(i,10)}super.update(t)}render(){return p`
      <table class="kuc-base-datetime-calendar-body-1-23-1__table" role="grid">
        ${this._getHeaderItemsTemplate()}<!--
        -->${this._getDateItemsTemplate()}
      </table>
    `}updated(t){t.has("value")&&this._focusDateEl(),super.update(t)}_handleClickDocument(){m(this,"kuc:calendar-body-blur",{})}_handleKeyDownDocument(t){t.key==="Escape"&&(t.preventDefault(),t.stopPropagation(),m(this,"kuc:calendar-body-blur",{}))}_handleClickDate(t){t.preventDefault(),t.stopPropagation();const e=t.target;e.setAttribute("aria-selected","true");const i=e.getAttribute("data-date")||"";this._dispatchClickEvent(i)}_handleKeyDownDate(t){let e=!1;switch(t.key){case"Up":case"ArrowUp":{e=!0,this._moveToDate(-7);break}case"Down":case"ArrowDown":{e=!0,this._moveToDate(7);break}case"Left":case"ArrowLeft":{e=!0,this._moveToDate(-1);break}case"Right":case"ArrowRight":{e=!0,this._moveToDate(1);break}case" ":case"Enter":{e=!0;const i=this._getSelectedValue();this._dispatchClickEvent(i);break}}e&&(t.stopPropagation(),t.preventDefault())}_dispatchClickEvent(t){const e={oldValue:this.value,value:t};m(this,"kuc:calendar-body-click-date",e),this.value=t}_isToday(t){const e=new Date;return parseInt(t[0],10)===e.getFullYear()&&parseInt(t[1],10)===e.getMonth()+1&&parseInt(t[2],10)===e.getDate()}_moveToDate(t){let e=this.value;const i=this._getSelectedValue(),{day:n}=this._separateDateValue(i);e=`${this._year}-${A(this._month)}-${n}`;const a=new Date(`${e||this._getValueItemFocused()}T00:00:00`);if(isNaN(a.getTime()))return;a.setDate(a.getDate()+t);const s=this._getDateString(a),r=e;this.value=s,m(this,"kuc:calendar-body-change-date",{oldValue:r,value:s})}_separateDateValue(t=this.value){const e=t.split("-");return{day:e[2],month:e[1],year:e[0]}}_getSelectedValue(){return this._highlightItem?this._highlightItem.dataset.date||"":this._selectedItem&&this._selectedItem.getAttribute("data-date")||""}_getValueItemFocused(){return this._focusedItem&&this._focusedItem.getAttribute("data-date")||""}_getDateClass(t,e){return e?this._isToday(t)?" kuc-base-datetime-calendar-body-1-23-1__table__date--selected--today":"":this._isToday(t)?" kuc-base-datetime-calendar-body-1-23-1__table__date--selected--today":" kuc-base-datetime-calendar-body-1-23-1__table__date--other-month"}_getDateString(t=new Date){const e=t.getFullYear(),i=A(t.getMonth()+1),n=A(t.getDate());return`${e}-${i}-${n}`}_isSameDayOfMoment(t){const e=parseInt(t[1],10),i=parseInt(t[2],10),n=parseInt(t[0],10);let a=new Date().getDate();if(!this.value.split("-")[2])return!1;if(this.value&&(a=new Date(`${this.value}T00:00:00`).getDate()),a===i&&e===this._month)return!0;const r=new Date(n,this._month,0).getDate();return a>r&&r===i&&e===this._month}_getHeaderItemsTemplate(){return p`
      <thead>
        <tr>
          ${this._locale.WEEK_DAYS.map(t=>p`
              <th
                class="kuc-base-datetime-calendar-body-1-23-1__table__header"
                role="columnheader"
                abbr="${t.abbr}"
              >
                ${t.text}
              </th>
            `)}
        </tr>
      </thead>
    `}_getDateItemsTemplate(){const t=Ds(this._year,this._month-1),e=this._locale.MONTH_SELECT[this._month-1];return p`
      <tbody>
        ${t.map(i=>p`
            <tr>
              ${i.map(n=>{const a=n.text.split("-"),s=this._isSameDayOfMoment(a),r=parseInt(a[1],10)===this._month,l=(this.value===n.attr||s)&&r;return p`
                  <td
                    role="gridcell"
                    class="kuc-base-datetime-calendar-body-1-23-1__table__date${l?"--selected":""}${this._getDateClass(a,r)}"
                    aria-selected="${this.value===n.attr}"
                    tabindex="${l?"0":"-1"}"
                    aria-current="${this._isToday(a)?"date":!1}"
                    aria-label="${a[2]} ${e}"
                    data-date="${n.attr}"
                    @click="${this._handleClickDate}"
                    @keydown="${this._handleKeyDownDate}"
                  >
                    ${a[2]||""}
                  </td>
                `})}
            </tr>
          `)}
      </tbody>
    `}_focusDateEl(){this._focusedItem&&this._focusedItem.focus({preventScroll:!0})}}bt([u({type:Number})],Ze.prototype,"month",void 0),bt([u({type:Number})],Ze.prototype,"year",void 0),bt([u({type:String,attribute:"lang",reflect:!0})],Ze.prototype,"language",void 0),bt([u({type:String,reflect:!0})],Ze.prototype,"value",void 0),bt([v()],Ze.prototype,"_month",void 0),bt([v()],Ze.prototype,"_year",void 0),bt([b('.kuc-base-datetime-calendar-body-1-23-1__table__date--selected[aria-selected="true"]')],Ze.prototype,"_selectedItem",void 0),bt([b(".kuc-base-datetime-calendar-body-1-23-1__table__date--selected")],Ze.prototype,"_highlightItem",void 0),bt([b('.kuc-base-datetime-calendar-body-1-23-1__table__date--selected[tabindex="0"]')],Ze.prototype,"_focusedItem",void 0),window.customElements.get("kuc-base-datetime-calendar-body-1-23-1")||(x(ac),window.customElements.define("kuc-base-datetime-calendar-body-1-23-1",Ze));const sc=`
kuc-base-datetime-calendar-footer-1-23-1,
kuc-base-datetime-calendar-footer-1-23-1 *,
kuc-base-datetime-calendar-footer-1-23-1:lang(en),
kuc-base-datetime-calendar-footer-1-23-1:lang(en) * {
  font-family: sans-serif;
}
kuc-base-datetime-calendar-footer-1-23-1:lang(ja),
kuc-base-datetime-calendar-footer-1-23-1:lang(ja) * {
  font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
    sans-serif;
}
kuc-base-datetime-calendar-footer-1-23-1:lang(zh),
kuc-base-datetime-calendar-footer-1-23-1:lang(zh) * {
  font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
    Hei, "Heiti SC", sans-serif;
}
kuc-base-datetime-calendar-footer-1-23-1:lang(zh-TW),
kuc-base-datetime-calendar-footer-1-23-1:lang(zh-TW) * {
  font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
    Hei,"Heiti SC",sans-serif;
}
kuc-base-datetime-calendar-footer-1-23-1:lang(es),
kuc-base-datetime-calendar-footer-1-23-1:lang(es) * {
  font-family: sans-serif;
}
.kuc-base-datetime-calendar-footer-1-23-1__group {
  display: flex;
  align-items: flex-end;
  box-sizing: border-box;
  padding: 0;
  height: 27px;
  white-space: nowrap;
  width: 272px;
}
.kuc-base-datetime-calendar-footer-1-23-1__group__button {
  background: transparent;
  border: 1px solid transparent;
  color: #3498db;
  cursor: pointer;
  font-size: 13px;
  outline: none;
}
.kuc-base-datetime-calendar-footer-1-23-1__group__button:hover {
  color: #217dbb;
}
.kuc-base-datetime-calendar-footer-1-23-1__group__button:focus {
  border: 1px solid #3498db;
  outline: none;
}
.kuc-base-datetime-calendar-footer-1-23-1__group__center {
  width: 100%;
}
`;var Fs=function(o,t,e,i){var n=arguments.length,a=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(o,t,e,i);else for(var r=o.length-1;r>=0;r--)(s=o[r])&&(a=(n<3?s(a):n>3?s(t,e,a):s(t,e))||a);return n>3&&a&&Object.defineProperty(t,e,a),a};class pn extends k{constructor(){super(...arguments),this.language="en",this._locale=N("en")}update(t){t.has("language")&&(this._locale=N(this.language)),super.update(t)}_handleClickCalendarFooterButtonNone(t){t.stopPropagation(),m(this,"kuc:calendar-footer-click-none")}_handleClickCalendarFooterButtonToday(t){t.stopPropagation(),m(this,"kuc:calendar-footer-click-today")}_handleKeyDownCalendarFooterButtonNone(t){t.key==="Tab"&&(t.shiftKey||(t.preventDefault(),m(this,"kuc:calendar-footer-tab-none")))}render(){return p`
      <div class="kuc-base-datetime-calendar-footer-1-23-1__group">
        <button
          type="button"
          tabindex="0"
          class="kuc-base-datetime-calendar-footer-1-23-1__group__button kuc-base-datetime-calendar-footer-1-23-1__group__button--today"
          @click="${this._handleClickCalendarFooterButtonToday}"
        >
          ${this._locale.CALENDAR_FOOTER_TEXT.today}
        </button>
        <span class="kuc-base-datetime-calendar-footer-1-23-1__group__center"></span>
        <button
          type="button"
          tabindex="0"
          class="kuc-base-datetime-calendar-footer-1-23-1__group__button kuc-base-datetime-calendar-footer-1-23-1__group__button--none"
          @click="${this._handleClickCalendarFooterButtonNone}"
          @keydown="${this._handleKeyDownCalendarFooterButtonNone}"
        >
          ${this._locale.CALENDAR_FOOTER_TEXT.none}
        </button>
      </div>
    `}}Fs([u({type:String,attribute:"lang",reflect:!0})],pn.prototype,"language",void 0),Fs([v()],pn.prototype,"_locale",void 0),window.customElements.get("kuc-base-datetime-calendar-footer-1-23-1")||(x(sc),window.customElements.define("kuc-base-datetime-calendar-footer-1-23-1",pn));const rc=`
.kuc-base-datetime-calendar-1-23-1__group {
  display: inline-block;
  box-sizing: border-box;
  width: 336px;
  padding: 32px 32px 24px;
  background: #ffffff;
  box-shadow: 0 0 8px 2px rgb(0 0 0 / 10%);
  text-align: center;
  font-size: 13px;
}
`;var mt=function(o,t,e,i){var n=arguments.length,a=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(o,t,e,i);else for(var r=o.length-1;r>=0;r--)(s=o[r])&&(a=(n<3?s(a):n>3?s(t,e,a):s(t,e))||a);return n>3&&a&&Object.defineProperty(t,e,a),a};class Je extends k{constructor(){super(...arguments),this.language="en",this.value="",this._month=1,this._year=new Date().getFullYear()}update(t){t.has("value")&&this._updateValue(),super.update(t)}render(){return p`
      <div
        class="kuc-base-datetime-calendar-1-23-1__group"
        role="dialog"
        aria-modal="true"
        aria-label="Calender"
        @click="${this._handleClickCalendarGroup}"
        @keydown="${this._handleKeyDownCalendarGroup}"
      >
        <kuc-base-datetime-calendar-header-1-23-1
          .year="${this._year}"
          .month="${this._month}"
          .language="${this.language}"
          @kuc:calendar-header-change="${this._handleCalendarHeaderChange}"
        ></kuc-base-datetime-calendar-header-1-23-1>
        <kuc-base-datetime-calendar-body-1-23-1
          .year="${this._year}"
          .month="${this._month}"
          .value="${this.value}"
          .language="${this.language}"
          @kuc:calendar-body-change-date="${this._handleCalendarBodyChangeDate}"
        ></kuc-base-datetime-calendar-body-1-23-1>
        <kuc-base-datetime-calendar-footer-1-23-1
          .language="${this.language}"
        ></kuc-base-datetime-calendar-footer-1-23-1>
      </div>
    `}async updated(t){await this.updateComplete,this._calculateBodyCalendarPosition(),super.updated(t)}_handleKeyDownCalendarGroup(t){t.key==="Escape"&&(t.preventDefault(),t.stopPropagation(),m(this,"kuc:calendar-escape",{}))}_handleClickCalendarGroup(t){t.stopPropagation(),this._listBoxMonthEl&&this._monthEl.closeListBox(),this._listBoxYearEl&&this._yearEl.closeListBox()}_calculateBodyCalendarPosition(){const{inputToBottom:t,inputToTop:e,inputToRight:i,inputToLeft:n}=Ri(this),a=this._baseCalendarGroupEl.getBoundingClientRect().height;if(t>=a){this._calculateCalendarPosition(i,n,"bottom");return}if(e<0||t>e){this._calculateCalendarPosition(i,n,"bottom");return}this._calculateCalendarPosition(i,n,"top")}_calculateCalendarPosition(t,e,i){if(!this.parentElement)return;const n=this.parentElement.getElementsByClassName("kuc-base-date-1-23-1__input")[0],a=336,s=n.getBoundingClientRect().height,r=n.getBoundingClientRect().width;if(t<a&&t<e){const h=this.parentElement.getBoundingClientRect().width,_=i==="bottom"?s:"auto",f=i==="bottom"?"auto":s,g=h>r?h-r:0;this._setCalendarPosition({top:_,bottom:f,right:g});return}const l=i==="bottom"?s:"auto",c=i==="bottom"?"auto":s;this._setCalendarPosition({bottom:c,top:l,left:0})}_setCalendarPosition({top:t="auto",left:e="auto",right:i="auto",bottom:n="auto"}){const a=this._baseCalendarGroupEl.parentElement;!this.parentElement||!a||(this.parentElement.style.position="relative",a.style.bottom=n==="auto"?n:n+"px",a.style.top=t==="auto"?t:t+"px",a.style.left=e==="auto"?e:e+"px",a.style.right=i==="auto"?i:i+"px")}_handleCalendarHeaderChange(t){const{year:e,month:i}=this._separateValue(t.detail.value);this._year=e,this._month=i}_handleCalendarBodyChangeDate(t){const{year:e,month:i}=this._separateValue(t.detail.value);this._year=e,this._month=i}_updateValue(){this.value===""&&(this.value=Tt().slice(0,7)+"-01");const{year:t,month:e}=this._separateValue(this.value);this._year=t,this._month=e}_separateValue(t){const e=t.split("-");return{year:parseInt(e[0],10),month:parseInt(e[1],10)}}}mt([u({type:String,attribute:"lang",reflect:!0})],Je.prototype,"language",void 0),mt([u({type:String,reflect:!0})],Je.prototype,"value",void 0),mt([b(".kuc-base-datetime-calendar-1-23-1__group")],Je.prototype,"_baseCalendarGroupEl",void 0),mt([b(".kuc-base-datetime-calendar-header-1-23-1__month")],Je.prototype,"_monthEl",void 0),mt([b(".kuc-base-datetime-calendar-header-1-23-1__year")],Je.prototype,"_yearEl",void 0),mt([b(".kuc-base-datetime-header-month-1-23-1__listbox")],Je.prototype,"_listBoxMonthEl",void 0),mt([b(".kuc-base-datetime-header-year-1-23-1__listbox")],Je.prototype,"_listBoxYearEl",void 0),mt([v()],Je.prototype,"_month",void 0),mt([v()],Je.prototype,"_year",void 0),window.customElements.get("kuc-base-datetime-calendar-1-23-1")||(x(rc),window.customElements.define("kuc-base-datetime-calendar-1-23-1",Je));const lc=`
kuc-base-datetime-listbox-1-23-1,
kuc-base-datetime-listbox-1-23-1 *,
kuc-base-datetime-listbox-1-23-1:lang(en),
kuc-base-datetime-listbox-1-23-1:lang(en) * {
  font-family: sans-serif;
}
kuc-base-datetime-listbox-1-23-1:lang(ja),
kuc-base-datetime-listbox-1-23-1:lang(ja) * {
  font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
    sans-serif;
}
kuc-base-datetime-listbox-1-23-1:lang(zh),
kuc-base-datetime-listbox-1-23-1:lang(zh) * {
  font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
    Hei, "Heiti SC", sans-serif;
}
kuc-base-datetime-listbox-1-23-1:lang(zh-TW),
kuc-base-datetime-listbox-1-23-1:lang(zh-TW) * {
  font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
    Hei,"Heiti SC"
}
kuc-base-datetime-listbox-1-23-1:lang(es),
kuc-base-datetime-listbox-1-23-1:lang(es) * {
  font-family: sans-serif;
}
.kuc-base-datetime-listbox-1-23-1__listbox {
  position: absolute;
  z-index: 2000;
  min-width: 280px;
  margin: 0;
  padding: 8px 0;
  border: 1px solid #e3e7e8;
  background-color: #ffffff;
  list-style: none;
  line-height: 1;
  overflow-y: auto;
  -webkit-tap-highlight-color: transparent;
  box-shadow: 0 5px 10px rgb(0 0 0 / 10%);
}
.kuc-base-datetime-listbox-1-23-1__listbox__item {
  position: relative;
  display: block;
  box-sizing: border-box;
  width: 100%;
  padding: 8px 16px 8px 25px;
  color: #333333;
  cursor: pointer;
  -webkit-tap-highlight-color: initial;
  text-align: left;
  font-size: 14px;
  user-select: none;
}
.kuc-base-datetime-listbox-1-23-1__listbox__item[aria-selected="true"] {
  color: #3498db;
}
.kuc-base-datetime-listbox-1-23-1__listbox--highlight {
  background-color: #e2f2fe;
  cursor: pointer;
}
.kuc-base-datetime-listbox-1-23-1__listbox__item__icon {
  position: absolute;
  left: 8px;
  top: 10px;
  background-color: transparent;
}
.kuc-base-datetime-listbox-1-23-1__listbox__item:focus {
  outline: none;
}
`;var Ie=function(o,t,e,i){var n=arguments.length,a=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(o,t,e,i);else for(var r=o.length-1;r>=0;r--)(s=o[r])&&(a=(n<3?s(a):n>3?s(t,e,a):s(t,e))||a);return n>3&&a&&Object.defineProperty(t,e,a),a};class me extends k{constructor(){super(),this.value="",this.items=[],this.maxHeight=300,this.doFocus=!0,this._actionKeyboard=!1,this._firstHighlight=!0,this._handleClickDocument=this._handleClickDocument.bind(this)}connectedCallback(){super.connectedCallback(),setTimeout(()=>{document.addEventListener("click",this._handleClickDocument)},1)}disconnectedCallback(){document.removeEventListener("click",this._handleClickDocument),super.disconnectedCallback()}getHighlightItemEl(){return this._highlightItemEl}render(){return p`
      <ul
        style="max-height: ${this.maxHeight}px;"
        class="kuc-base-datetime-listbox-1-23-1__listbox"
        role="listbox"
        @mousedown="${this._handleMouseDownListBox}"
        @click="${this._handleClickListBox}"
      >
        ${this.items.map(t=>this._getListBoxItemTemplate(t))}
      </ul>
    `}async updated(t){await this.updateComplete,t.has("value")&&this._highlightSelectedItem(),this._setListBoxPosition(),this._scrollToView(),super.updated(t)}_handleClickDocument(){m(this,"kuc:listbox-blur",{})}_handleClickListBox(t){t.stopPropagation()}_handleKeyDownListBox(t){switch(t.preventDefault(),t.stopPropagation(),t.key){case"Up":case"ArrowUp":this._actionKeyboard=!0,this._highlightPrevItemEl(),this._focusHighlightItemEl(),this._scrollToView();break;case"Down":case"ArrowDown":this._actionKeyboard=!0,this._highlightNextItemEl(),this._focusHighlightItemEl(),this._scrollToView();break;case"Home":this._actionKeyboard=!0,this._highlightFirstItem(),this._focusHighlightItemEl();break;case"End":this._actionKeyboard=!0,this._highlightLastItem(),this._focusHighlightItemEl();break;case"Tab":m(this,"kuc:listbox-click",{});break;case"Escape":m(this,"kuc:listbox-escape",{});break;case" ":case"Enter":{const i={value:this._highlightItemEl.getAttribute("value")||""};m(this,"kuc:listbox-click",i);break}}}_handleMouseDownListBox(t){if(t.preventDefault(),t.stopPropagation(),t.target===t.currentTarget)return;const n={value:t.target.getAttribute("value")||""};m(this,"kuc:listbox-click",n)}_handleMouseOverItem(t){if(this._actionKeyboard){this._actionKeyboard=!1;return}const e=t.target;this._setHighlightItemEl(e),this.doFocus&&this._focusHighlightItemEl(!1)}_setListBoxPosition(){const t=this._listBoxEl.getBoundingClientRect().height;if(!this._listBoxEl.parentElement||!this.parentElement)return;const i=window.innerHeight-this.parentElement.getBoundingClientRect().bottom,n=this.parentElement.offsetHeight;this._listBoxEl.style.bottom="auto",this._listBoxEl.style.left="auto",!(i>=t)&&(this.parentElement.style.position="relative",this._listBoxEl.style.bottom=n+"px",this._listBoxEl.style.left="0px")}_setHighlightItemEl(t){this._removeHighlight(),t.classList.add("kuc-base-datetime-listbox-1-23-1__listbox--highlight"),t.setAttribute("tabindex","0")}_highlightSelectedItem(){if(!this.doFocus)return;const e=Array.from(this._itemsEl).filter(i=>i.getAttribute("aria-selected")==="true")[0];e&&(this._itemSelectedEl=e,this._setHighlightItemEl(e),this._focusHighlightItemEl())}_highlightFirstItem(){this._itemSelectedEl=this._firstItemEl,this._setHighlightItemEl(this._firstItemEl)}_highlightLastItem(){this._itemSelectedEl=this._lastItemEl,this._setHighlightItemEl(this._lastItemEl)}_highlightNextItemEl(){if(this._highlightItemEl===null||this._iconChecked===null){this._highlightFirstItem();return}const t=this._getNextItemEl();if(t){this._setHighlightItemEl(t),this._firstHighlight=!1,this._itemSelectedEl=t;return}this._highlightFirstItem()}_getNextItemEl(){const t=this._iconChecked.parentElement;!this._itemSelectedEl&&t&&this._firstHighlight&&(this._itemSelectedEl=t);let e=this._highlightItemEl.nextElementSibling;return this._itemSelectedEl?this._itemSelectedEl.nextElementSibling?(e=this._itemSelectedEl.nextElementSibling,e):this._firstItemEl:e}_highlightPrevItemEl(){if(this._highlightItemEl===null||this._iconChecked===null){this._highlightLastItem();return}const t=this._getPreviousItemEl();if(t){this._setHighlightItemEl(t),this._firstHighlight=!1,this._itemSelectedEl=t;return}this._highlightLastItem()}_getPreviousItemEl(){const t=this._iconChecked.parentElement;!this._itemSelectedEl&&t&&this._firstHighlight&&(this._itemSelectedEl=t);let e=this._highlightItemEl.previousElementSibling;return this._itemSelectedEl?this._itemSelectedEl.previousElementSibling?(e=this._itemSelectedEl.previousElementSibling,e):this._lastItemEl:e}_removeHighlight(){this._highlightItemEl&&(this._highlightItemEl.setAttribute("tabindex","-1"),this._highlightItemEl.classList.remove("kuc-base-datetime-listbox-1-23-1__listbox--highlight"))}_focusHighlightItemEl(t){const e=this._highlightItemEl;e&&(e.focus({preventScroll:!0}),t!==!1&&this._dispatchListBoxFocusChange())}_dispatchListBoxFocusChange(){const e={value:this._highlightItemEl.getAttribute("value")||""};m(this,"kuc:listbox-focus-change",e)}_scrollToView(){const t=this._highlightItemEl||this._getHighlightItemByValue();if(!t||!this._listBoxEl)return;const e=t.offsetHeight,i=this._listBoxEl.clientHeight/e/2;let n=t.offsetTop-i*e;n<0&&(n=0),this._listBoxEl.scrollTop=n}_getHighlightItemByValue(){const t=Array.from(this._listBoxEl.children),e=new Date(Date.parse(`2021/01/01 ${this.value}`));let i=t.find(n=>new Date(Date.parse(`2021/01/01 ${n.title}`))>=e);return i||(i=t[t.length-1]),!this.doFocus||!i||(this._setHighlightItemEl(i),this._focusHighlightItemEl()),i}_getListBoxItemTemplate(t){const e=this.value===t.value&&this.doFocus;return p`
      <li
        class="kuc-base-datetime-listbox-1-23-1__listbox__item"
        role="option"
        tabindex="${e?"0":"-1"}"
        aria-selected="${e}"
        title="${t.label||""}"
        value="${t.value!==void 0?t.value:""}"
        @mouseover="${this._handleMouseOverItem}"
        @keydown="${this._handleKeyDownListBox}"
      >
        ${e?this._getCheckedIconSvgTemplate():""}
        ${t.label===void 0?t.value:t.label}
      </li>
    `}_getCheckedIconSvgTemplate(){return C`<svg
          class="kuc-base-datetime-listbox-1-23-1__listbox__item__icon"
          width="11"
          height="9"
          viewBox="0 0 11 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 5L1.5 3L4.5 5.5L9.5 0L11 1.5L4.5 8.5L0 5Z"
            fill="#3498db"
          />
        </svg>`}}Ie([u({type:String})],me.prototype,"value",void 0),Ie([u({type:Array})],me.prototype,"items",void 0),Ie([u({type:Number})],me.prototype,"maxHeight",void 0),Ie([u({type:Boolean})],me.prototype,"doFocus",void 0),Ie([b(".kuc-base-datetime-listbox-1-23-1__listbox")],me.prototype,"_listBoxEl",void 0),Ie([q(".kuc-base-datetime-listbox-1-23-1__listbox__item")],me.prototype,"_itemsEl",void 0),Ie([b(".kuc-base-datetime-listbox-1-23-1__listbox__item")],me.prototype,"_firstItemEl",void 0),Ie([b(".kuc-base-datetime-listbox-1-23-1__listbox__item:last-child")],me.prototype,"_lastItemEl",void 0),Ie([b(".kuc-base-datetime-listbox-1-23-1__listbox--highlight")],me.prototype,"_highlightItemEl",void 0),Ie([b(".kuc-base-datetime-listbox-1-23-1__listbox__item__icon")],me.prototype,"_iconChecked",void 0),Ie([v()],me.prototype,"_actionKeyboard",void 0),Ie([v()],me.prototype,"_firstHighlight",void 0),window.customElements.get("kuc-base-datetime-listbox-1-23-1")||(x(lc),window.customElements.define("kuc-base-datetime-listbox-1-23-1",me));const uc=`
input.kuc-base-date-1-23-1__input {
  width: 100px;
  height: 40px;
  padding: 0px;
  text-align: center;
  border: 1px solid #e3e7e8;
  color: #333333;
  box-sizing: border-box;
  font-size: 14px;
  box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;
}

input.kuc-base-date-1-23-1__input:focus {
  outline: none;
  border: 1px solid #3498db;
}
input.kuc-base-date-1-23-1__input--focus {
  box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;
  border: 1px solid #3498db;
  background-color: #ffffff;
  color: #333333;
}
.kuc-datetime-picker-1-23-1__group__inputs--date
  input.kuc-base-date-1-23-1__input--focus {
  border-color: #3498db;
}
input.kuc-base-date-1-23-1__input:disabled {
  color: #888888 !important;
  background-color: #d4d7d7;
  box-shadow: none;
  cursor: not-allowed;
}
.kuc-base-date-1-23-1__calendar {
  position: absolute;
  z-index: 2000;
  background-color: #ffffff;
  text-align: center;
  box-sizing: border-box;
}
.kuc-base-date-1-23-1__assistive-text {
  clip: rect(1px, 1px, 1px, 1px);
  overflow: hidden;
  position: absolute !important;
  padding: 0px !important;
  border: 0px !important;
  height: 1px !important;
  width: 1px !important;
}
`;var Re=function(o,t,e,i){var n=arguments.length,a=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(o,t,e,i);else for(var r=o.length-1;r>=0;r--)(s=o[r])&&(a=(n<3?s(a):n>3?s(t,e,a):s(t,e))||a);return n>3&&a&&Object.defineProperty(t,e,a),a};class Te extends k{constructor(){super(...arguments),this.inputAriaLabel="",this.inputId="",this.language="en",this.value="",this.disabled=!1,this.inputAriaInvalid=!1,this.required=!1,this._dateTimeCalendarVisible=!1,this._locale=N("en"),this._calendarValue="",this._inputValue="",this._valueForReset=""}update(t){t.has("inputId")&&(this._GUID=this.inputId),t.has("language")&&(this._locale=N(this.language),this._updateValueProp()),t.has("value")&&this._updateValueProp(),super.update(t)}render(){return p`
      <input
        class="kuc-base-date-1-23-1__input"
        id="${this._GUID}-label"
        type="text"
        text-align="center"
        .value="${this._inputValue}"
        aria-describedby="${this._GUID}-error"
        aria-invalid="${this.inputAriaInvalid}"
        aria-required="${this.required}"
        ?disabled="${this.disabled}"
        ?required="${this.required}"
        @click="${this._handleClickInput}"
        @change="${this._handleChangeInput}"
        @keydown="${this._handleKeyDownInput}"
        @input="${this._handleInputValue}"
      />
      <button
        type="button"
        aria-haspopup="dialog"
        aria-expanded="${this._dateTimeCalendarVisible}"
        class="kuc-base-date-1-23-1__assistive-text"
        @click="${this._handleClickButton}"
        @focus="${this._handleFocusButton}"
        @blur="${this._handleBlurButton}"
        ?disabled="${this.disabled}"
      >
        show date picker
      </button>
      ${this._dateTimeCalendarVisible?p`
            <kuc-base-datetime-calendar-1-23-1
              class="kuc-base-date-1-23-1__calendar"
              .language="${this.language}"
              .value="${this._calendarValue}"
              ?hidden="${!this._dateTimeCalendarVisible}"
              @kuc:calendar-header-previous-shifttab="${this._handleShiftTabCalendarPrevMonth}"
              @kuc:calendar-body-change-date="${this._handleClickCalendarChangeDate}"
              @kuc:calendar-body-click-date="${this._handleClickCalendarClickDate}"
              @kuc:calendar-footer-click-none="${this._handleClickCalendarFooterButtonNone}"
              @kuc:calendar-footer-tab-none="${this._handleTabCalendarFooterButtonNone}"
              @kuc:calendar-footer-click-today="${this._handleClickCalendarFooterButtonToday}"
              @kuc:calendar-escape="${this._handleCalendarEscape}"
              @kuc:calendar-body-blur="${this._handleCalendarBlurBody}"
            >
            </kuc-base-datetime-calendar-1-23-1>
          `:""}
    `}updated(t){t.has("inputAriaLabel")&&this.inputAriaLabel&&this._dateInput.setAttribute("aria-label",this.inputAriaLabel),super.updated(t)}_handleInputValue(t){const e=t.target.value;this._inputValue=e||""}_handleClickInput(){if(!this._dateTimeCalendarVisible){this._valueForReset=this.value,this._calendarValue=this._getNewCalendarValue(this._inputValue||""),this._openCalendar();return}this._closeCalendar()}_updateValueProp(){if(this.value){const e=this._setCalendarValueWhenInvalidValue();this._inputValue=Os(this.language,this.value),this._calendarValue=e||this.value;return}const t=Tt();this._inputValue="",this._calendarValue=this._calendarValue?this._calendarValue.slice(0,7)+"-01":t.slice(0,7)}_setCalendarValueWhenInvalidValue(){if(this.value&&!gt(this.value)){const t=Tt();return this._calendarValue||t.slice(0,7)}return""}_getNewCalendarValue(t){if(Bs(this.language,t))return nn(this.language,t);if(!this._calendarValue)return"";let e=this._calendarValue.slice(0,7);return t===""&&(e=this._calendarValue.slice(0,7)+"-01"),e}_handleChangeInput(t){t.stopPropagation();const e=(t?.target).value;if(this._calendarValue=this._getNewCalendarValue(e),this._calendarValue.length>7){this._dispathDateChangeCustomEvent(nn(this.language,e));return}const i={value:void 0,oldValue:this.value,error:this._locale.INVALID_FORMAT};this._inputValue=e,m(this,"kuc:base-date-change",i)}_handleKeyDownInput(t){t.key==="Escape"&&this._closeCalendar()}_closeCalendar(){this._dateTimeCalendarVisible=!1}_openCalendar(){this._dateTimeCalendarVisible=!0}_handleShiftTabCalendarPrevMonth(){this._footerNoneBtn.focus()}_handleClickCalendarChangeDate(t){t.detail.oldValue=this.value,this.value=t.detail.value,m(this,"kuc:base-date-change",t.detail)}_handleClickCalendarClickDate(t){this._closeCalendar(),t.detail.oldValue=this.value,this._dateInput.focus(),t.detail.oldValue!==t.detail.value&&(this.value=t.detail.value,m(this,"kuc:base-date-change",t.detail))}_handleClickCalendarFooterButtonNone(){this._closeCalendar(),this._dateInput.focus(),this._inputValue="";const t=Tt();let e=this._setCalendarValueWhenInvalidValue();e||(e=this._calendarValue?this._calendarValue.slice(0,7)+"-01":t.slice(0,7)+"-01"),this._calendarValue=e,this._dispathDateChangeCustomEvent(void 0)}_handleTabCalendarFooterButtonNone(){this._previousMonth.focus()}_handleClickCalendarFooterButtonToday(){this._closeCalendar();const t=Tt();this._dateInput.focus(),this._dispathDateChangeCustomEvent(t)}_handleCalendarEscape(){const t=this._valueForReset;if(this._closeCalendar(),this._dateInput.focus(),t===this.value)return;const e={oldValue:this.value,value:t};this.value=t,m(this,"kuc:base-date-change",e)}_handleCalendarBlurBody(t){t.preventDefault(),this._dateTimeCalendarVisible=!1}_dispathDateChangeCustomEvent(t){const e={value:t,oldValue:this.value};this.value=t===void 0?"":t,m(this,"kuc:base-date-change",e)}_handleClickButton(){if(!this._dateTimeCalendarVisible){this._valueForReset=this.value,this._calendarValue=this._getNewCalendarValue(this._inputValue||""),this._openCalendar();return}this._closeCalendar()}_handleBlurButton(){this._dateInput.classList.remove("kuc-base-date-1-23-1__input--focus")}_handleFocusButton(){this._dateInput.classList.add("kuc-base-date-1-23-1__input--focus")}}Re([u({type:String})],Te.prototype,"inputAriaLabel",void 0),Re([u({type:String})],Te.prototype,"inputId",void 0),Re([u({type:String,attribute:"lang",reflect:!0})],Te.prototype,"language",void 0),Re([u({type:String,reflect:!0})],Te.prototype,"value",void 0),Re([u({type:Boolean})],Te.prototype,"disabled",void 0),Re([u({type:Boolean})],Te.prototype,"inputAriaInvalid",void 0),Re([u({type:Boolean})],Te.prototype,"required",void 0),Re([b(".kuc-base-date-1-23-1__input")],Te.prototype,"_dateInput",void 0),Re([b(".kuc-base-datetime-calendar-header-1-23-1__group__button--previous-month")],Te.prototype,"_previousMonth",void 0),Re([b(".kuc-base-datetime-calendar-footer-1-23-1__group__button--none")],Te.prototype,"_footerNoneBtn",void 0),Re([v()],Te.prototype,"_dateTimeCalendarVisible",void 0),window.customElements.get("kuc-base-date-1-23-1")||(x(uc),window.customElements.define("kuc-base-date-1-23-1",Te));const cc=`
kuc-date-picker-1-23-1,
kuc-date-picker-1-23-1 *,
kuc-date-picker-1-23-1:lang(en),
kuc-date-picker-1-23-1:lang(en) * {
  font-family: sans-serif;
}
kuc-date-picker-1-23-1:lang(ja),
kuc-date-picker-1-23-1:lang(ja) * {
  font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
    sans-serif;
}
kuc-date-picker-1-23-1:lang(zh),
kuc-date-picker-1-23-1:lang(zh) * {
  font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
    Hei, "Heiti SC", sans-serif;
}
kuc-date-picker-1-23-1:lang(zh-TW),
kuc-date-picker-1-23-1:lang(zh-TW) * {
  font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
    Hei,"Heiti SC"
}
kuc-date-picker-1-23-1:lang(es),
kuc-date-picker-1-23-1:lang(es) * {
  font-family: sans-serif;
}
kuc-date-picker-1-23-1 {
  font-size: 14px;
  color: #333333;
  display: inline-table;
  vertical-align: top;
  max-width: var(--kuc-date-picker-input-width, 100px);
  width: var(--kuc-date-picker-input-width, 100px);
  line-height: 1.5;
}
kuc-date-picker-1-23-1[hidden] {
  display: none;
}
.kuc-date-picker-1-23-1__group {
  display: flex;
  flex-direction: column;
  border: none;
  padding: 0px;
  height: auto;
  margin: 0px;
}
.kuc-date-picker-1-23-1__group__label {
  display: inline-block;
  padding: 4px 0px 8px 0px;
  white-space: nowrap;
}
.kuc-date-picker-1-23-1__group__label[hidden] {
  display: none;
}
.kuc-date-picker-1-23-1__group input[type=text].kuc-base-date-1-23-1__input {
  width: var(--kuc-date-picker-input-width, 100px);
  height: var(--kuc-date-picker-input-height, 40px);
  padding: 0px;
  text-align: center;
  color: var(--kuc-date-picker-input-color);
  border: 1px solid #e3e7e8;
  box-sizing: border-box;
  font-size: var(--kuc-date-picker-input-font-size, 14px);
  box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;
}

.kuc-date-picker-1-23-1__group kuc-base-date-1-23-1 {
  display: inline-flex;
}

.kuc-date-picker-1-23-1__group input[type=text].kuc-base-date-1-23-1__input:focus {
  outline: none;
  border: 1px solid #3498db;
}
.kuc-date-picker-1-23-1__group input[type=text].kuc-base-date-1-23-1__input--focus {
  box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;
  border: 1px solid #3498db;
  background-color: #ffffff;
  color: var(--kuc-date-picker-input-color, #333333);
}
.kuc-date-picker-1-23-1__group input[type=text].kuc-base-date-1-23-1__input:disabled {
  color: #888888;
  background-color: #d4d7d7;
  box-shadow: none;
  cursor: not-allowed;
}
`;var Xe=function(o,t,e,i){var n=arguments.length,a=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(o,t,e,i);else for(var r=o.length-1;r>=0;r--)(s=o[r])&&(a=(n<3?s(a):n>3?s(t,e,a):s(t,e))||a);return n>3&&a&&Object.defineProperty(t,e,a),a};let fn;(()=>{if(fn=window.customElements.get("kuc-date-picker-1-23-1"),fn)return;class o extends k{constructor(e){super(),this.className="",this.error="",this.id="",this.label="",this.disabled=!1,this.requiredIcon=!1,this.language="auto",this.value="",this.visible=!0,this._errorFormat="",this._errorText="",this._inputValue="",this._invalidValue="",this._valueConverted="",this._GUID=M();const i=$(e);Object.assign(this,i)}shouldUpdate(e){return this.value===void 0||this.value===""?!0:typeof this.value!="string"||!Ps(this.value)?(this.throwErrorAfterUpdateComplete(Q.VALUE),!1):(this._valueConverted=bo(this.value),this._valueConverted&&!gt(this._valueConverted)?(this.throwErrorAfterUpdateComplete(Q.VALUE),!1):!0)}willUpdate(e){e.has("value")&&(this.value===void 0?this._inputValue=this._invalidValue:(this.value=this.value===""?this.value:this._valueConverted,this._inputValue=this.value,this._errorFormat="")),this._updateErrorText()}render(){return p`
        <div class="kuc-date-picker-1-23-1__group">
          <label
            class="kuc-date-picker-1-23-1__group__label"
            for="${this._GUID}-label"
            @click="${this._handleClickLabel}"
            ?hidden="${!this.label}"
          >
            <kuc-base-label-1-23-1
              .text="${this.label}"
              .requiredIcon="${this.requiredIcon}"
            ></kuc-base-label-1-23-1>
          </label>
          <kuc-base-date-1-23-1
            .inputId="${this._GUID}"
            .inputAriaInvalid="${this.error!==""}"
            .disabled="${this.disabled}"
            .value="${this._inputValue}"
            .required="${this.requiredIcon}"
            .language="${this._getLanguage()}"
            @kuc:base-date-change="${this._handleDateChange}"
          >
          </kuc-base-date-1-23-1>
          <kuc-base-error-1-23-1
            .text="${this._errorText}"
            .guid="${this._GUID}"
          ></kuc-base-error-1-23-1>
        </div>
      `}updated(){this._invalidValue=""}_updateErrorText(){this._errorText=this._errorFormat||this.error}_getLanguage(){const e=["en","ja","zh","zh-TW","es"];return e.indexOf(this.language)!==-1?this.language:e.indexOf(document.documentElement.lang)!==-1?document.documentElement.lang:"en"}_handleClickLabel(e){e.preventDefault()}_handleDateChange(e){e.stopPropagation(),e.preventDefault();const i={oldValue:this.value,value:""};e.detail.error?(this.value=void 0,this._invalidValue=this._dateInput.value,this._errorFormat=e.detail.error,this.error="",i.value=void 0):(this._errorFormat="",this.value=e.detail.value===void 0?"":e.detail.value,i.value=this.value),this._dispatchChangeEvent(i)}_dispatchChangeEvent(e){m(this,"change",e)}}Xe([u({type:String,reflect:!0,attribute:"class"})],o.prototype,"className",void 0),Xe([u({type:String})],o.prototype,"error",void 0),Xe([u({type:String,reflect:!0,attribute:"id"})],o.prototype,"id",void 0),Xe([u({type:String})],o.prototype,"label",void 0),Xe([u({type:Boolean})],o.prototype,"disabled",void 0),Xe([u({type:Boolean})],o.prototype,"requiredIcon",void 0),Xe([u({type:String,attribute:"lang",reflect:!0,converter:Gt})],o.prototype,"language",void 0),Xe([u({type:String})],o.prototype,"value",void 0),Xe([u({type:Boolean,attribute:"hidden",reflect:!0,converter:V})],o.prototype,"visible",void 0),Xe([b(".kuc-base-date-1-23-1__input")],o.prototype,"_dateInput",void 0),window.customElements.define("kuc-date-picker-1-23-1",o),x(cc),fn=o})();const dc=`
:lang(ja) .kuc-base-time-1-23-1__group input.kuc-base-time-1-23-1__group__hours,
:lang(ja) .kuc-base-time-1-23-1__group input.kuc-base-time-1-23-1__group__minutes {
  width: 2ch;
}
.kuc-base-time-1-23-1__group {
  display: inline-flex;
  position: relative;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  max-width: 85px;
  width: 85px;
  height: 40px;
  color: #333333;
  border: solid 1px #e3e7e8;
  box-sizing: border-box;
  padding: 0px 8px;
  box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;
  background-color: #ffffff;
  overflow: hidden;
}
.kuc-base-time-1-23-1__group input.kuc-base-time-1-23-1__group__hours {
  border: 0px;
  padding: 0px;
  width: 2ch;
  font-size: inherit;
  outline: none;
  background-color: transparent;
  color: #333333;
  caret-color: transparent;
  user-select: none;
}
.kuc-base-time-1-23-1__group input.kuc-base-time-1-23-1__group__minutes {
  border: 0px;
  padding: 0px;
  width: 2ch;
  font-size: inherit;
  outline: none;
  background-color: transparent;
  color: #333333;
  caret-color: transparent;
  user-select: none;
}
.kuc-base-time-1-23-1__group input.kuc-base-time-1-23-1__group__hours:focus {
  border: 0px;
}
.kuc-base-time-1-23-1__group input.kuc-base-time-1-23-1__group__minutes:focus {
  border: 0px;
}
.kuc-base-time-1-23-1__group__colon {
  width: auto;
  text-align: center;
}
.kuc-base-time-1-23-1__group input.kuc-base-time-1-23-1__group__suffix {
  border: 0px;
  width: 3ch;
  text-align: right;
  font-size: inherit;
  outline: none;
  appearance: none;
  margin-left: 1px;
  padding: 0px;
  background-color: transparent;
  color: #333333;
  caret-color: transparent;
  user-select: none;
}
.kuc-base-time-1-23-1__group--focus {
  box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;
  border: 1px solid #3498db;
  background-color: #ffffff;
  color: #333333;
}
.kuc-base-time-1-23-1__assistive-text {
  clip: rect(1px, 1px, 1px, 1px);
  overflow: hidden;
  position: absolute !important;
  padding: 0px !important;
  border: 0px !important;
  height: 1px !important;
  width: 1px !important;
}
.kuc-base-time-1-23-1__group--disabled {
  background-color: #d4d7d7;
  box-shadow: none;
  color: #888888;
  cursor: not-allowed;
}
.kuc-base-time-1-23-1__group--disabled input:disabled,
.kuc-base-time-1-23-1__group--disabled span {
  cursor: not-allowed;
  color: #888888;
  -webkit-text-fill-color: #888888;
}
`;var j=function(o,t,e,i){var n=arguments.length,a=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(o,t,e,i);else for(var r=o.length-1;r>=0;r--)(s=o[r])&&(a=(n<3?s(a):n>3?s(t,e,a):s(t,e))||a);return n>3&&a&&Object.defineProperty(t,e,a),a};class P extends k{constructor(){super(...arguments),this.language="en",this.max="",this.min="",this.value="",this.disabled=!1,this.hour12=!1,this.timeStep=30,this._listBoxVisible=!1,this._valueLabel="",this._doFocusListBox=!1,this._hours="",this._minutes="",this._suffix="",this._valueForReset="",this._locale=N("en")}update(t){(t.has("hour12")||t.has("timeStep")||t.has("max")||t.has("min"))&&(this._listBoxItems=Iu(this.hour12,this.timeStep,this.min,this.max),this._updateInputValue()),t.has("value")&&this._updateInputValue(),t.has("language")&&(this._locale=N(this.language)),super.update(t)}render(){return p`
      <div class="kuc-base-time-1-23-1__group" @click="${this._handleClickInputGroup}">
        <input
          type="text"
          class="kuc-base-time-1-23-1__group__hours"
          role="spinbutton"
          tabindex="${this._hours?"0":"-1"}"
          aria-label="Hour"
          @focus="${this._handleFocusInput}"
          @blur="${this._handleBlurInput}"
          @keydown="${this._handleKeyDownInput}"
          @paste="${this._handlePasteInput}"
          ?disabled="${this.disabled}"
          value="${this._hours}"
        />
        ${this._getColonTemplate()}
        <input
          type="text"
          class="kuc-base-time-1-23-1__group__minutes"
          role="spinbutton"
          tabindex="${this._minutes?"0":"-1"}"
          aria-label="Minute"
          @focus="${this._handleFocusInput}"
          @blur="${this._handleBlurInput}"
          @keydown="${this._handleKeyDownInput}"
          @paste="${this._handlePasteInput}"
          ?disabled="${this.disabled}"
          value="${this._minutes}"
        />
        ${this._getSuffixTemplate()}
      </div>
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded="${this._listBoxVisible}"
        class="kuc-base-time-1-23-1__assistive-text"
        @keydown="${this._handleKeyDownButton}"
        @focus="${this._handleFocusButton}"
        @blur="${this._handleBlurButton}"
        ?disabled="${this.disabled}"
      >
        show time picker
      </button>
      ${this._getListBoxTemplate()}
    `}updated(t){t.has("disabled")&&this._toggleDisabledGroup(),super.update(t)}_handleClickInputGroup(t){if(this.disabled)return;if(this.value===""){this._toggleEl.focus(),this._openListBox();return}const e=t.target;if(this._openListBox(),e.tagName.toUpperCase()==="INPUT"){e.select();return}this._hoursEl.select()}_handleBlurListBox(t){t.preventDefault(),!this._inputFocusEl&&(this._listBoxVisible=!1)}_toggleDisabledGroup(){return this.disabled?this._inputGroupEl.classList.add("kuc-base-time-1-23-1__group--disabled"):this._inputGroupEl.classList.remove("kuc-base-time-1-23-1__group--disabled")}_updateInputValue(){var t;const e=$u(this.value,this.hour12);this._hours=e.hours,this._minutes=e.minutes,this._suffix=e.suffix||"",this._valueLabel=this._getValueLabel(e),this._inputGroupEl&&(this._setValueToInput(e),(t=this._inputFocusEl)===null||t===void 0||t.select())}_getValueLabel(t){if(!t.hours||!t.minutes)return"";const e=`${t.hours}:${t.minutes}`;return t.suffix?e+` ${t.suffix}`:e}_setValueToInput(t){this._hoursEl.value=t.hours,this._minutesEl.value=t.minutes,this._suffixEl&&(this._suffixEl.value=t.suffix||"")}_handleKeyDownButton(t){switch(t.key){case"Tab":case"Escape":if(t.key==="Escape"&&t.preventDefault(),!this._listBoxVisible)return;this._closeListBox();break;case"Enter":case" ":case"ArrowUp":case"ArrowDown":t.preventDefault(),t.stopPropagation(),this._openListBoxByKey();break;default:t.preventDefault(),t.stopPropagation(),this._handleDefaultKeyButton(t.key);break}}_handleBlurButton(){this._inputGroupEl.classList.remove("kuc-base-time-1-23-1__group--focus")}_handleFocusButton(t){t.stopPropagation(),this._inputGroupEl.classList.add("kuc-base-time-1-23-1__group--focus")}_openListBoxByKey(){return this._listBoxVisible?!1:(this._valueForReset=this.value,this._doFocusListBox=!0,this._listBoxVisible=!0,this._inputGroupEl.classList.remove("kuc-base-time-1-23-1__group--focus"),!0)}_handleListBoxEscape(){if(this._closeListBox(),this.value=this._valueForReset,this._actionUpdateInputValue(this.value),this.value===""){this._toggleEl.focus();return}this._hoursEl.select()}_handleDefaultKeyButton(t){if(!/^[0-9]$/i.test(t)||this.value!=="")return;const i=this._computeNumberKeyValueHours(t);this._actionUpdateInputValue(i),this._hoursEl.select()}_handleChangeListBox(t){if(t.preventDefault(),t.stopPropagation(),this._closeListBox(),this._inputFocusEl=this._hoursEl,this._hoursEl.select(),!t.detail.value)return;const e=t.detail.value;this._actionUpdateInputValue(e)}_handleListBoxFocusChange(t){const e=t.detail.value,i=Hi(e);this._actionUpdateInputValue(i)}_handleFocusInput(t){this._inputFocusEl=t.target,this._inputFocusEl.select(),this._inputGroupEl.classList.add("kuc-base-time-1-23-1__group--focus")}_handleBlurInput(t){this._inputFocusEl=null;const e=t.relatedTarget;e&&e instanceof HTMLInputElement&&[this._hoursEl,this._minutesEl,this._suffixEl].indexOf(e)>-1||(this._closeListBox(),this._inputGroupEl.classList.remove("kuc-base-time-1-23-1__group--focus"))}_handleTabKey(t){return t.key==="Tab"}_handleKeyDownInput(t){this._closeListBox(),!this._handleTabKey(t)&&this._handleSupportedKey(t)}_handlePasteInput(t){t.preventDefault()}_handleSupportedKey(t){t.preventDefault();const e=t.key;let i;switch(e){case"Enter":case"ArrowRight":this._actionSelectNextRange();break;case"ArrowLeft":this._actionSelectPreviousRange();break;case"ArrowUp":i=this._computeArrowUpDownValue(1),this._actionUpdateInputValue(i);break;case"ArrowDown":i=this._computeArrowUpDownValue(-1),this._actionUpdateInputValue(i);break;case"Backspace":case"Delete":i=this._computeDeleteValue(),this._actionUpdateInputValue(i);break;default:i=this._computeDefaultKeyValue(e),this._actionUpdateInputValue(i);break}}_actionUpdateInputValue(t){const e=this.value===""?this.value:this._formatKeyDownValue(),i=Hi(e),n=Hi(t);i!==n&&(this.value=n,this._dispatchEventTimeChange(n,i))}_computeDeleteValue(){return this._inputFocusEl===this._minutesEl?this._formatKeyDownValue({minutes:"00"}):this._inputFocusEl===this._hoursEl?this._formatKeyDownValue({hours:"00"}):this._formatKeyDownValue()}_computeArrowUpDownValue(t){return this._inputFocusEl===this._hoursEl?this._computeArrowUpDownHourValue(t):this._inputFocusEl===this._minutesEl?this._computeArrowUpDownMinuteValue(t):this._computeKeyDownSuffixValue()}_computeKeyDownSuffixValue(t){if(!t){const n=this._suffix===Ye.AM?Ye.PM:Ye.AM;return this._formatKeyDownValue({suffix:n})}if(["a","A","p","P"].indexOf(t)===-1)return this._formatKeyDownValue();const i=t==="a"||t==="A"?Ye.AM:Ye.PM;return this.value===""&&this._hoursEl.select(),this._formatKeyDownValue({suffix:i})}_computeArrowUpDownHourValue(t){let i=parseInt(this._hours,10)+t;return this.hour12?(i%=He,i=i<=0?He:i):(i%=pt,i=i<0?pt-1:i),this._formatKeyDownValue({hours:i.toString()})}_computeArrowUpDownMinuteValue(t){let i=parseInt(this._minutes,10)+t;return i%=Ft,i=i<0?Ft-1:i,this._formatKeyDownValue({minutes:i.toString()})}_computeDefaultKeyValue(t){return/^[0-9]$/i.test(t)?this._computeNumberKeyValue(t):this._inputFocusEl===this._suffixEl?this._computeKeyDownSuffixValue(t):this._formatKeyDownValue()}_computeNumberKeyValue(t){return this._inputFocusEl===this._minutesEl?this._computeNumberKeyValueMinutes(t):this._inputFocusEl===this._hoursEl?this._computeNumberKeyValueHours(t):this._formatKeyDownValue()}_computeNumberKeyValueMinutes(t){const e=this._getPreviousMinutes(this._minutes),i=A(e+t);return this.value===""?(this._hoursEl.select(),this._computeNumberKeyValueHours(t)):this._formatKeyDownValue({minutes:i})}_computeNumberKeyValueHours(t){const e=this._getPreviousHours(this._hours,t),i=A(e+t);return this.value===""?this._formatKeyDownValue({hours:i,minutes:"00"}):this._formatKeyDownValue({hours:i})}_getPreviousMinutes(t){let e;return e=parseInt(t,10)>10?(""+t)[1]:""+t,e=parseInt(e,10)>5?"0":e,e}_getPreviousHours(t,e){let i;i=parseInt(t,10)>10?(""+t)[1]:""+t;const n=parseInt(i+e,10);return i=this.hour12&&n>He||!this.hour12&&n>=pt?"0":i,i}_actionSelectNextRange(){if(this._inputFocusEl===this._hoursEl){this._minutesEl.select();return}this.hour12&&this._inputFocusEl===this._minutesEl&&this._suffixEl.select()}_actionSelectPreviousRange(){if(this._inputFocusEl===this._suffixEl){this._minutesEl.select();return}this._inputFocusEl===this._minutesEl&&this._hoursEl.select()}_dispatchEventTimeChange(t,e){const i={value:t,oldValue:e};(It(t,this.min)<0||It(this.max,t)<0)&&(i.error=this._locale.TIME_IS_OUT_OF_VALID_RANGE),m(this,"kuc:base-time-change",i)}_formatKeyDownValue(t={hours:this._hours,minutes:this._minutes,suffix:this._suffix}){const e=t.hours||this._hours,i=t.minutes||this._minutes,n=t.suffix||this._suffix,a=`${A(e)}:${A(i)}`;return n?`${a} ${n}`:a}_openListBox(){this._listBoxVisible||(this._doFocusListBox=!1,this._listBoxVisible=!0)}_closeListBox(){this._doFocusListBox=!1,this._listBoxVisible=!1}_getColonTemplate(){return this._hours?p` <span class="kuc-base-time-1-23-1__group__colon">:</span> `:""}_getSuffixTemplate(){return this.hour12?p`
          <input
            class="kuc-base-time-1-23-1__group__suffix"
            role="spinbutton"
            tabindex="${this._suffix?"0":"-1"}"
            aria-label="${this._suffix||"suffix"}"
            @focus="${this._handleFocusInput}"
            @blur="${this._handleBlurInput}"
            @keydown="${this._handleKeyDownInput}"
            @paste="${this._handlePasteInput}"
            ?disabled="${this.disabled}"
            value="${this._suffix}"
          />
        `:""}_getListBoxTemplate(){return this._listBoxVisible?p`
          <kuc-base-datetime-listbox-1-23-1
            maxHeight="165"
            aria-hidden="${!this._listBoxVisible}"
            class="kuc-base-time-1-23-1__group__listbox"
            .items="${this._listBoxItems||[]}"
            .value="${this._valueLabel}"
            .doFocus="${this._doFocusListBox}"
            @kuc:listbox-click="${this._handleChangeListBox}"
            @kuc:listbox-blur="${this._handleBlurListBox}"
            @kuc:listbox-focus-change="${this._handleListBoxFocusChange}"
            @kuc:listbox-escape="${this._handleListBoxEscape}"
          ></kuc-base-datetime-listbox-1-23-1>
        `:""}}j([u({type:String,attribute:"lang",reflect:!0})],P.prototype,"language",void 0),j([u({type:String})],P.prototype,"max",void 0),j([u({type:String})],P.prototype,"min",void 0),j([u({type:String})],P.prototype,"value",void 0),j([u({type:Boolean})],P.prototype,"disabled",void 0),j([u({type:Boolean})],P.prototype,"hour12",void 0),j([u({type:Number})],P.prototype,"timeStep",void 0),j([v()],P.prototype,"_listBoxVisible",void 0),j([v()],P.prototype,"_valueLabel",void 0),j([v()],P.prototype,"_doFocusListBox",void 0),j([v()],P.prototype,"_hours",void 0),j([v()],P.prototype,"_minutes",void 0),j([v()],P.prototype,"_suffix",void 0),j([v()],P.prototype,"_inputFocusEl",void 0),j([b(".kuc-base-time-1-23-1__group__hours")],P.prototype,"_hoursEl",void 0),j([b(".kuc-base-time-1-23-1__group__minutes")],P.prototype,"_minutesEl",void 0),j([b(".kuc-base-time-1-23-1__group__suffix")],P.prototype,"_suffixEl",void 0),j([b(".kuc-base-time-1-23-1__assistive-text")],P.prototype,"_toggleEl",void 0),j([b(".kuc-base-time-1-23-1__group")],P.prototype,"_inputGroupEl",void 0),window.customElements.get("kuc-base-time-1-23-1")||(x(dc),window.customElements.define("kuc-base-time-1-23-1",P));const hc=`
kuc-datetime-picker-1-23-1,
kuc-datetime-picker-1-23-1 *,
kuc-datetime-picker-1-23-1:lang(en),
kuc-datetime-picker-1-23-1:lang(en) * {
  font-family: sans-serif;
}
kuc-datetime-picker-1-23-1:lang(ja),
kuc-datetime-picker-1-23-1:lang(ja) * {
  font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
    sans-serif;
}
kuc-datetime-picker-1-23-1:lang(zh),
kuc-datetime-picker-1-23-1:lang(zh) * {
  font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
    Hei, "Heiti SC", sans-serif;
}
kuc-datetime-picker-1-23-1:lang(zh-TW),
kuc-datetime-picker-1-23-1:lang(zh-TW) * {
  font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
    Hei,"Heiti SC"
}
kuc-datetime-picker-1-23-1:lang(es),
kuc-datetime-picker-1-23-1:lang(es) * {
  font-family: sans-serif;
}
kuc-datetime-picker-1-23-1 {
  font-size: 14px;
  display: inline-table;
  vertical-align: top;
  line-height: 1.5;
  max-width: calc(var(--kuc-date-time-picker-date-input-width, 100px) + var(--kuc-date-time-picker-time-input-width, 85px));
  width: calc(var(--kuc-date-time-picker-date-input-width, 100px) + var(--kuc-date-time-picker-time-input-width, 85px));
}
kuc-datetime-picker-1-23-1[hidden] {
  display: none;
}
.kuc-datetime-picker-1-23-1__group {
  border: none;
  padding: 0px;
  height: auto;
  display: flex;
  flex-direction: column;
  margin: 0px;
}
.kuc-datetime-picker-1-23-1__group__label {
  display: inline-block;
  padding: 4px 0px 8px 0px;
  white-space: nowrap;
}
.kuc-datetime-picker-1-23-1__group__label[hidden] {
  display: none;
}
.kuc-datetime-picker-1-23-1__group__inputs {
  display: flex;
  width: calc(var(--kuc-date-time-picker-date-input-width, 100px) + var(--kuc-date-time-picker-time-input-width, 85px));
}
.kuc-datetime-picker-1-23-1__group__inputs--time {
  position: relative;
}
.kuc-datetime-picker-1-23-1__group input[type=text].kuc-base-date-1-23-1__input {
  width: var(--kuc-date-time-picker-date-input-width, 100px);
  height: var(--kuc-date-time-picker-input-height, 40px);
  color: var(--kuc-date-time-picker-input-color, #333333);
  font-size: var(--kuc-date-time-picker-input-font-size, 14px);
}
.kuc-datetime-picker-1-23-1__group .kuc-base-time-1-23-1__group {
  max-width: var(--kuc-date-time-picker-time-input-width, 85px);
  width: var(--kuc-date-time-picker-time-input-width, 85px);
  font-size: var(--kuc-date-time-picker-input-font-size, 14px);
  height: var(--kuc-date-time-picker-input-height, 40px);
  color: var(--kuc-date-time-picker-input-color, #333333);
}
.kuc-datetime-picker-1-23-1__group .kuc-base-time-1-23-1__group input[type=text].kuc-base-time-1-23-1__group__hours,
.kuc-datetime-picker-1-23-1__group .kuc-base-time-1-23-1__group input[type=text].kuc-base-time-1-23-1__group__minutes,
.kuc-datetime-picker-1-23-1__group .kuc-base-time-1-23-1__group input.kuc-base-time-1-23-1__group__suffix,
.kuc-datetime-picker-1-23-1__group .kuc-base-time-1-23-1__group--focus  {
  color: var(--kuc-date-time-picker-input-color, #333333);
}
`;var de=function(o,t,e,i){var n=arguments.length,a=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(o,t,e,i);else for(var r=o.length-1;r>=0;r--)(s=o[r])&&(a=(n<3?s(a):n>3?s(t,e,a):s(t,e))||a);return n>3&&a&&Object.defineProperty(t,e,a),a};let gn;(()=>{if(gn=window.customElements.get("kuc-datetime-picker-1-23-1"),gn)return;class o extends k{constructor(e){super(),this.className="",this.error="",this.id="",this.label="",this.language="auto",this.max="",this.min="",this.value="",this.disabled=!1,this.hour12=!1,this.requiredIcon=!1,this.visible=!0,this.timeStep=30,this._dateValue="",this._timeValue="",this._previousTimeValue="",this._previousDateValue="",this._errorFormat="",this._errorText="",this._dateConverted="",this._changeDateByUI=!1,this._changeTimeByUI=!1,this._inputMax="",this._inputMin="",this._timeConverted="",this._errorInvalidTime="",this._inputTimeStep=30,this._GUID=M();const i=$(e);Object.assign(this,i)}shouldUpdate(e){return(e.has("max")||e.has("min"))&&!this._checkAndUpdateMaxMinProperty()||e.has("timeStep")&&!this._checkAndUpdateTimeStepProperty()?!1:this.value===void 0||this.value===""?!0:typeof this.value!="string"?(this.throwErrorAfterUpdateComplete(Q.VALUE),!1):(this._dateAndTime=this._getDateTimeValue(this.value),this._dateConverted=bo(this._dateAndTime.date),zs(this._dateAndTime.date,this._dateAndTime.time)&&gt(this._dateConverted)?(this._timeConverted=ft(this._dateAndTime.time.slice(0,5)),e.has("value")&&(It(this._timeConverted,this._inputMin)<0||It(this._inputMax,this._timeConverted)<0)?(this.throwErrorAfterUpdateComplete(Ts),!1):!0):(this.throwErrorAfterUpdateComplete(Q.VALUE),!1))}willUpdate(e){if(this._changeDateByUI||this._changeTimeByUI){this._updateValueChangeByUI();return}this._updateValueWhenSetter()}_checkAndUpdateMaxMinProperty(){let e=this._inputMin,i=this._inputMax;if(this.max===void 0||this.max==="")i=As;else{if(!Wt(this.max))return this.throwErrorAfterUpdateComplete(Q.MAX),!1;i=this.max=ft(this.max)}if(this.min===void 0||this.min==="")e=on;else{if(!Wt(this.min))return this.throwErrorAfterUpdateComplete(Q.MIN),!1;e=this.min=ft(this.min)}return It(i,e)<0?(this.throwErrorAfterUpdateComplete(Is),!1):(this._inputMin=e,this._inputMax=i,!0)}_checkAndUpdateTimeStepProperty(){return Kt(this.timeStep)?Us(this.timeStep,this._inputMax,this._inputMin)?(this._inputTimeStep=this.timeStep,!0):(this.throwErrorAfterUpdateComplete(Q.TIME_STEP),!1):(this.throwErrorAfterUpdateComplete($s),!1)}_updateValueChangeByUI(){const e=this._validateDateTimeFormat();this.value=e?this.value:void 0,e&&!this._dateValue&&!this._timeValue&&(this.value="");const i=!this._dateValue&&this._timeValue,n=this._dateValue&&!this._timeValue;if(i||n){this._errorText=this.error||this._errorFormat||this._errorInvalidTime;return}this._errorText=e?this.error:this._errorFormat||this._errorInvalidTime}_validateDateTimeFormat(){const e=!!this._timeValue&&!this._dateValue,i=!!this._dateValue&&!this._timeValue;return!this._errorFormat&&!this._errorInvalidTime&&!e&&!i}_updateValueWhenSetter(){if(this._errorText=this.error,this.value===""||this.value===void 0){this._previousTimeValue="",this._errorFormat="",this._errorInvalidTime="";return}this._setDateTimeValueSeparate(this._dateAndTime,this._dateConverted),this.value=this._getDateTimeString()}_setDateTimeValueSeparate(e,i){this._dateValue=i||this._dateInput.value,this._timeValue=this._dateValue&&gt(i)?ft(e.time.slice(0,5)):this._previousTimeValue}update(e){e.has("value")&&(this.value===void 0&&this._setUndefinedValue(),this.value===""&&this._setEmptyValue()),(e.has("max")||e.has("min")||e.has("value"))&&this.value!==void 0&&(this._errorInvalidTime=""),super.update(e)}_setUndefinedValue(){if(!this._changeTimeByUI){if(this._errorFormat){if(this._changeDateByUI){this._dateValue=this._dateInput.value;return}this._dateValue="",this._timeValue="";return}this._dateValue=this._previousDateValue,this._timeValue=this._previousTimeValue}}_setEmptyValue(){this._dateValue="",this._timeValue="",this._previousTimeValue="",this._previousDateValue="",this._errorFormat="",this._errorInvalidTime=""}render(){return p`
        <fieldset
          class="kuc-datetime-picker-1-23-1__group"
          aria-describedby="${this._GUID}-error"
        >
          <legend
            class="kuc-datetime-picker-1-23-1__group__label"
            ?hidden="${!this.label}"
          >
            <kuc-base-label-1-23-1
              .text="${this.label}"
              .requiredIcon="${this.requiredIcon}"
            ></kuc-base-label-1-23-1>
          </legend>
          <div class="kuc-datetime-picker-1-23-1__group__inputs">
            <kuc-base-date-1-23-1
              class="kuc-datetime-picker-1-23-1__group__inputs--date"
              .value="${this._dateValue}"
              .language="${this._getLanguage()}"
              .disabled="${this.disabled}"
              inputAriaLabel="date"
              @kuc:base-date-change="${this._handleDateChange}"
            ></kuc-base-date-1-23-1
            ><kuc-base-time-1-23-1
              class="kuc-datetime-picker-1-23-1__group__inputs--time"
              .value="${this._timeValue}"
              .hour12="${this.hour12}"
              .disabled="${this.disabled}"
              .timeStep="${this._inputTimeStep}"
              .min="${this._inputMin}"
              .max="${this._inputMax}"
              .language="${this._getLanguage()}"
              @kuc:base-time-change="${this._handleTimeChange}"
            ></kuc-base-time-1-23-1>
          </div>
          <kuc-base-error-1-23-1
            .text="${this._errorText}"
            .guid="${this._GUID}"
            ?hidden="${!this._errorText}"
          ></kuc-base-error-1-23-1>
        </fieldset>
      `}updated(){this._resetState()}_resetState(){this._previousTimeValue="",this._previousDateValue="",this._changeDateByUI=!1,this._changeTimeByUI=!1}_handleDateChange(e){e.stopPropagation(),e.preventDefault(),this._changeDateByUI=!0;let i=this._dateValue;e.detail.error?(this._errorFormat=e.detail.error,this.error=""):(i=e.detail.value,this._errorFormat=""),this._updateDateTimeValue(i,"date")}_handleTimeChange(e){e.preventDefault(),e.stopPropagation(),this._changeTimeByUI=!0;const i=e.detail.value;e.detail.error?(this._errorInvalidTime=e.detail.error,this.error=""):this._errorInvalidTime="",this._updateDateTimeValue(i,"time")}_updateDateTimeValue(e,i){const n=this.value;i==="date"?this._dateValue=e||"":this._timeValue=e,this._previousTimeValue=this._timeValue,this._previousDateValue=this._dateValue;const a=this._errorFormat||this._errorInvalidTime?void 0:this._getDateTimeString(),s=this._errorFormat||this._errorInvalidTime?void 0:a;this.value=s,this._validateDateTimeFormat()&&!this._dateValue&&!this._timeValue&&(this.value="");const l={value:this.value,oldValue:n,changedPart:i};m(this,"change",l)}_getDateTimeString(){if(!this._dateValue||!this._timeValue)return;if(!this.value)return`${this._dateValue}T${this._timeValue}:00`;const e=this.value.split(":");return e.length===3?`${this._dateValue}T${this._timeValue}:${e[2]}`:`${this._dateValue}T${this._timeValue}:00`}_getDateTimeValue(e){if(e===""||e===void 0)return{date:"",time:""};const i=e.split("T"),n=i[0],a=i[1];if(e.indexOf("T")===e.length-1||i.length>2)return{date:n,time:""};if(!a)return{date:n,time:on};const[s,r,l]=a.split(":");if(s===""||r===""||l==="")return{date:n,time:a};const c=`${s}:${r||"00"}`;return l?{date:n,time:`${c}:${l}`}:{date:n,time:c}}_getLanguage(){const e=["en","ja","zh","zh-TW","es"];return e.indexOf(this.language)!==-1?this.language:e.indexOf(document.documentElement.lang)!==-1?document.documentElement.lang:"en"}}de([u({type:String,reflect:!0,attribute:"class"})],o.prototype,"className",void 0),de([u({type:String})],o.prototype,"error",void 0),de([u({type:String,reflect:!0,attribute:"id"})],o.prototype,"id",void 0),de([u({type:String})],o.prototype,"label",void 0),de([u({type:String,attribute:"lang",reflect:!0,converter:Gt})],o.prototype,"language",void 0),de([u({type:String})],o.prototype,"max",void 0),de([u({type:String})],o.prototype,"min",void 0),de([u({type:String,hasChanged(t,e){return(t===""||t===void 0)&&t===e?!0:t!==e}})],o.prototype,"value",void 0),de([u({type:Boolean})],o.prototype,"disabled",void 0),de([u({type:Boolean})],o.prototype,"hour12",void 0),de([u({type:Boolean})],o.prototype,"requiredIcon",void 0),de([u({type:Boolean,attribute:"hidden",reflect:!0,converter:V})],o.prototype,"visible",void 0),de([u({type:Number})],o.prototype,"timeStep",void 0),de([b(".kuc-base-date-1-23-1__input")],o.prototype,"_dateInput",void 0),window.customElements.define("kuc-datetime-picker-1-23-1",o),x(hc),gn=o})();const _c=`
  kuc-dialog-1-23-1,
  kuc-dialog-1-23-1 *,
  kuc-dialog-1-23-1:lang(en),
  kuc-dialog-1-23-1:lang(en) * {
    font-family: sans-serif;
  }
  kuc-dialog-1-23-1:lang(es),
  kuc-dialog-1-23-1:lang(es) * {
    font-family: sans-serif;
  }
  kuc-dialog-1-23-1:lang(ja),
  kuc-dialog-1-23-1:lang(ja) * {
    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
      sans-serif;
  }
  kuc-dialog-1-23-1:lang(zh),
  kuc-dialog-1-23-1:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", sans-serif;
  }
  kuc-dialog-1-23-1:lang(zh-TW),
  kuc-dialog-1-23-1:lang(zh-TW) * {
    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC",sans-serif;
  }

  kuc-dialog-1-23-1 {
    display: none;
  }

  kuc-dialog-1-23-1[opened] {
    display: block;
  }

  .kuc-dialog-1-23-1__dialog {
    min-width: 400px;
    max-width: var(--kuc-dialog-max-width, 600px);
    width: max-content;
    font-size: 20px;
    background-color: #ffffff;
    position: fixed;
    line-height: normal;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10000;
  }
  
  .kuc-dialog-1-23-1__dialog:focus-visible {
    outline: 1px solid #3498db;
  }

  .kuc-dialog-1-23-1__dialog__header {
    min-height: 64px;
    border-bottom: 1px solid #e3e7e8;
    display: flex;
    justify-content: space-between;
  }

  .kuc-dialog-1-23-1__dialog__header__title {
    font-size: var(--kuc-dialog-header-font-size, 24px);
    color: var(--kuc-dialog-header-color);
    padding: 0 24px;
    align-self: center;
    overflow-wrap: anywhere;
    word-break: normal;
    font-weight: 400;
  }

  .kuc-dialog-1-23-1__dialog__header__close-button {
    width: 48px;
    height: 48px;
    border: none;
    background-color: #ffffff;
    margin-right: 12px;
    margin-top: 11px;
    cursor: pointer;
  }

  .kuc-dialog-1-23-1__dialog__header__close-button:focus-visible {
    outline: 1px solid #3498db;
  }

  .kuc-dialog-1-23-1__dialog__header__close-button-svg {
    vertical-align: middle;
  }

  .kuc-dialog-1-23-1__dialog__content {
    border-bottom: #e3e7e8 solid 1px;
    background-color: #f7f9fa;
    padding: 24px;
    display: flex;
    overflow: auto;
  }

  .kuc-dialog-1-23-1__dialog__content__content {
    line-height: 1.2;
    overflow-wrap: anywhere;
    word-break: normal;
  }

  .kuc-dialog-1-23-1__dialog__content__icon-info,
  .kuc-dialog-1-23-1__dialog__content__icon-success,
  .kuc-dialog-1-23-1__dialog__content__icon-error,
  .kuc-dialog-1-23-1__dialog__content__icon-warning,
  .kuc-dialog-1-23-1__dialog__content__icon-question {
    margin-right: 16px;
    width: 24px;
    height: 24px;
  }

  .kuc-dialog-1-23-1__dialog__footer {
    padding: 24px;
    overflow-wrap: anywhere;
    word-break: normal;
  }

  .kuc-dialog-1-23-1__dialog__footer[hidden] {
    display: none;
  }

  .kuc-dialog-1-23-1__mask {
    position: fixed;
    top: 0;
    right: 0;
    display: block;
    width: 100%;
    height: 100%;
    background-color: #000000;
    opacity: 0.6;
    z-index: 9999;
  }

  .kuc--has-dialog {
    overflow: hidden;
  }

  .kuc--has-dialog .kuc-dialog-1-23-1__dialog {
    overflow-x: hidden;
    overflow-y: auto;
    max-height: 80vh;
  }
`;var $e=function(o,t,e,i){var n=arguments.length,a=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(o,t,e,i);else for(var r=o.length-1;r>=0;r--)(s=o[r])&&(a=(n<3?s(a):n>3?s(t,e,a):s(t,e))||a);return n>3&&a&&Object.defineProperty(t,e,a),a};let wo;(()=>{if(wo=window.customElements.get("kuc-dialog-1-23-1"),wo)return;class o extends k{constructor(e){super(),this.className="",this.icon="",this.id="",this.title="",this.content="",this.footer="",this.header="",this.container=document.body,this.footerVisible=!0,this._isOpened=!1,this._triggeredElement=null,this._content="",this._footer="",this._header="",this._GUID=M();const i=$(e);Object.assign(this,i)}_handleFocusFirstDummy(){const e=this._focusableElements[this._focusableElements.length-2];e&&e.focus()}_handleFocusLastDummy(){this._dialogEl.focus()}_handleKeyDownDialog(e){e.key==="Escape"&&(e.preventDefault(),this.close())}_handleClickCloseButton(e){this.close()}_getCloseButtonSvgTemplate(){return C`
        <svg
          class="kuc-dialog-1-23-1__dialog__header__close-button-svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z"
            fill="#f7f9fa"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16.4765 15.7071L20.1229 12.0607L20.4765 11.7071L19.7694 11L19.4158 11.3536L15.7694 15L12.1229 11.3536L11.7694 11L11.0623 11.7071L11.4158 12.0607L15.0623 15.7071L11.3536 19.4158L11 19.7694L11.7071 20.4765L12.0607 20.1229L15.7694 16.4142L19.4781 20.1229L19.8316 20.4765L20.5387 19.7694L20.1852 19.4158L16.4765 15.7071Z"
            fill="#888888"
          />
        </svg>
      `}_getIconTemplate(){switch(this.icon){case"info":return C`
            <svg
              class="kuc-dialog-1-23-1__dialog__content__icon-info"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.09673 17.7173C13.9604 17.7173 17.9032 13.7933 17.9032 8.95287C17.9032 4.11243 13.9604 0.188477 9.09673 0.188477C4.23306 0.188477 0.290283 4.11243 0.290283 8.95287C0.290283 13.7933 4.23306 17.7173 9.09673 17.7173Z"
                fill="#448aca"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.71195 7.96235C8.81719 7.69023 8.67929 7.5524 8.5559 7.5524C7.98977 7.5524 7.24945 8.87059 6.97364 8.87059C6.86531 8.86323 6.77965 8.7783 6.77405 8.67269C6.77405 8.40057 7.44905 7.76444 7.64864 7.57007C8.25505 6.95498 9.08189 6.59163 9.95671 6.5558C10.6172 6.5558 11.3249 6.94808 10.7696 8.4147L9.66276 11.3656C9.53205 11.6338 9.44394 11.9198 9.40147 12.2138C9.3955 12.2661 9.41197 12.3186 9.44701 12.3587C9.48204 12.3988 9.53253 12.4231 9.58655 12.4258C10.0474 12.4258 10.893 11.1394 11.1107 11.1394C11.221 11.1597 11.2987 11.2565 11.2922 11.3656C11.2922 11.8038 9.49582 13.6804 7.9426 13.6804C7.38735 13.6804 7.00268 13.4224 7.00268 12.8499C7.00268 12.1219 7.52889 10.8815 7.63413 10.6235L8.71195 7.96235ZM9.53937 4.97962C9.55317 4.3095 10.114 3.77277 10.8023 3.77099C11.0868 3.75724 11.364 3.86105 11.5658 4.05686C11.7675 4.25267 11.8751 4.52229 11.862 4.79939C11.8604 5.12532 11.7247 5.43704 11.4853 5.66484C11.2459 5.89264 10.9228 6.01752 10.5882 6.01156C10.3033 6.02775 10.0251 5.92385 9.82434 5.72636C9.62362 5.52886 9.51981 5.25684 9.53937 4.97962Z"
                fill="white"
              />
            </svg>
          `;case"success":return C`
            <svg
              class="kuc-dialog-1-23-1__dialog__content__icon-success"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M9.09673 17.7173C13.9604 17.7173 17.9032 13.7933 17.9032 8.95287C17.9032 4.11243 13.9604 0.188477 9.09673 0.188477C4.23306 0.188477 0.290283 4.11243 0.290283 8.95287C0.290283 13.7933 4.23306 17.7173 9.09673 17.7173Z"
                fill="#2ecc71"
              />
              <path 
                d="M7.45159 10.3666L4.64513 7.44514L2.9032 9.32996L7.45159 13.9478L15.0967 6.59697L13.258 4.8064L7.45159 10.3666Z"
                fill="white"
              />
            </svg>
          `;case"error":return C`
            <svg
              class="kuc-dialog-1-23-1__dialog__content__icon-error"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18Z"
                fill="#e74c3c"
              />
              <path
                d="M10.1497 8.99989L12.7572 6.39244L12.9339 6.21567L12.7572 6.03889L11.9617 5.24339L11.7849 5.06661L11.6081 5.24339L9.00063 7.85084L6.39317 5.24339L6.2164 5.06661L6.03962 5.24339L5.24412 6.03889L5.06734 6.21567L5.24412 6.39244L7.85159 8.99989L5.24412 11.6074L5.06734 11.7842L5.24412 11.9609L6.03962 12.7564L6.2164 12.9332L6.39317 12.7564L9.00063 10.1489L11.6081 12.7564L11.7849 12.9332L11.9617 12.7564L12.7572 11.9609L12.9339 11.7842L12.7572 11.6074L10.1497 8.99989Z"
                fill="white"
                stroke="white"
                stroke-width="0.5"
              />
            </svg>
          `;case"warning":return C`
            <svg
              class="kuc-dialog-1-23-1__dialog__content__icon-warning"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.09673 17.7173C13.9604 17.7173 17.9032 13.7933 17.9032 8.95287C17.9032 4.11243 13.9604 0.188477 9.09673 0.188477C4.23306 0.188477 0.290283 4.11243 0.290283 8.95287C0.290283 13.7933 4.23306 17.7173 9.09673 17.7173Z"
                fill="#ffcc00"
              />
              <path
                d="M7.74182 3.76978H10.645L9.91924 9.42423H8.46763L7.74182 3.76978Z"
                fill="#333333"
              />
              <rect
                x="7.74182"
                y="11.3088"
                width="2.90323"
                height="2.82722"
                rx="1"
                fill="#333333"
              />
            </svg>
          `;case"question":return C`
            <svg
              class="kuc-dialog-1-23-1__dialog__content__icon-question"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.0933 8.87676C10.383 9.34006 10.1707 9.73991 10.1469 10.6575C10.1447 10.7581 10.0632 10.8371 9.96337 10.8371H8.08135C8.03123 10.8371 7.89783 10.7033 7.89783 10.6532V9.90432C7.89783 9.11869 8.32111 8.42752 9.1947 7.79043C9.2632 7.7432 9.91722 7.31559 9.91722 6.72573C9.91722 6.23647 9.54947 5.89467 9.022 5.89467C8.27063 5.89467 7.85168 6.27144 7.81166 6.99037C7.80589 7.08736 7.72549 7.16344 7.62815 7.16344H7.53044H5.64914C5.59902 7.16344 5.54999 7.14252 5.51574 7.10611C5.48149 7.07005 5.46274 7.02066 5.46562 6.97054C5.56802 4.97527 6.86452 3.83053 9.02416 3.83053C10.6614 3.83053 12.4248 4.71892 12.4248 6.66984C12.4248 7.97683 12.1266 8.22381 11.0933 8.87676ZM8.99982 0C4.02976 0 0 4.02948 0 9C0 13.9709 4.02976 18 8.99982 18C13.9702 18 18 13.9709 18 9C18 4.02948 13.9702 0 8.99982 0ZM10.503 14.5101C10.503 14.7124 10.3383 14.8775 10.136 14.8775H7.89742C7.69516 14.8775 7.53003 14.7124 7.53003 14.5101V12.3061C7.53003 12.1038 7.69516 11.9387 7.89742 11.9387H10.136C10.3383 11.9387 10.503 12.1038 10.503 12.3061V14.5101Z"
                fill="#666666"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.0933 8.8768C10.383 9.3401 10.1707 9.73995 10.1469 10.6575C10.1447 10.7581 10.0632 10.8371 9.96337 10.8371H8.08135C8.03123 10.8371 7.89783 10.7033 7.89783 10.6532V9.90436C7.89783 9.11872 8.32111 8.42755 9.1947 7.79047C9.2632 7.74323 9.91722 7.31562 9.91722 6.72577C9.91722 6.2365 9.54947 5.8947 9.022 5.8947C8.27063 5.8947 7.85168 6.27148 7.81166 6.99041C7.80589 7.0874 7.72549 7.16347 7.62815 7.16347H7.53044H5.64914C5.59902 7.16347 5.54999 7.14256 5.51574 7.10615C5.48149 7.07009 5.46274 7.0207 5.46562 6.97058C5.56802 4.97531 6.86452 3.83057 9.02416 3.83057C10.6614 3.83057 12.4248 4.71896 12.4248 6.66988C12.4248 7.97687 12.1266 8.22384 11.0933 8.8768V8.8768Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.503 14.5101C10.503 14.7124 10.3383 14.8775 10.136 14.8775H7.89742C7.69516 14.8775 7.53003 14.7124 7.53003 14.5101V12.3061C7.53003 12.1039 7.69516 11.9387 7.89742 11.9387H10.136C10.3383 11.9387 10.503 12.1039 10.503 12.3061V14.5101Z"
                fill="white"
              />
            </svg>
          `;default:return""}}shouldUpdate(e){if(e.has("container")){if(this.container===null||this.container===void 0)return this._isOpened&&this._close(),!1;const i=this._isValidContainerElement(),n=!i||!document.contains(this.container);if(this._isOpened&&n&&this._close(),!i)return this.throwErrorAfterUpdateComplete(y.CONTAINER.INVALID),!1}return!0}update(e){e.has("content")&&(this.content&&oe(this.content)?this._content=be(this.content):this._content=this.content),e.has("footer")&&(this.footer&&oe(this.footer)?this._footer=be(this.footer):this._footer=this.footer),(e.has("header")||e.has("title"))&&(this.header!==null&&this.header!==void 0&&this.header!==""?oe(this.header)?this._header=be(this.header):this._header=this.header:this._header=this.title),super.update(e)}_isValidContainerElement(){return this.container instanceof HTMLElement}open(){if(!this._isValidContainerElement()){document.body.appendChild(this),requestAnimationFrame(()=>{document.body.removeChild(this)}),this.performUpdate();return}this.container.appendChild(this),this.container.classList.add("kuc--has-dialog"),this.performUpdate(),this.setAttribute("opened",""),this._isOpened=!0,this._triggeredElement=document.activeElement,this._dialogEl&&this._dialogEl.focus()}close(){this._close(),m(this,"close")}_close(){this._isOpened=!1,document.getElementsByTagName("body")[0].classList.remove("kuc--has-dialog"),this.removeAttribute("opened"),this._triggeredElement instanceof HTMLElement&&this._triggeredElement.focus()}render(){return p`
        <span
          class="kuc-dialog-1-23-1__first-dummy"
          tabIndex="0"
          @focus="${this._handleFocusFirstDummy}"
        ></span>
        <div
          class="kuc-dialog-1-23-1__dialog"
          role="dialog"
          tabindex="-1"
          aria-labelledby="${this._GUID}-title"
          aria-modal="true"
          @keydown="${this._handleKeyDownDialog}"
        >
          <div class="kuc-dialog-1-23-1__dialog__header">
            <h2
              class="kuc-dialog-1-23-1__dialog__header__title"
              id="${this._GUID}-title"
            >
              ${this._header}
            </h2>
            <button
              class="kuc-dialog-1-23-1__dialog__header__close-button"
              type="button"
              aria-label="close"
              @click="${this._handleClickCloseButton}"
            >
              ${this._getCloseButtonSvgTemplate()}
            </button>
          </div>
          <div class="kuc-dialog-1-23-1__dialog__content">
            <div class="kuc-dialog-1-23-1__dialog__content__icon">
              ${this._getIconTemplate()}
            </div>
            <div class="kuc-dialog-1-23-1__dialog__content__content">
              ${this._content}
            </div>
          </div>
          <div
            class="kuc-dialog-1-23-1__dialog__footer"
            ?hidden="${!this.footerVisible}"
          >
            ${this._footer}
          </div>
        </div>
        <span
          class="kuc-dialog-1-23-1__last-dummy"
          tabIndex="0"
          @focus="${this._handleFocusLastDummy}"
        ></span>
        <div class="kuc-dialog-1-23-1__mask"></div>
      `}}$e([u({type:String,reflect:!0,attribute:"class"})],o.prototype,"className",void 0),$e([u({type:String})],o.prototype,"icon",void 0),$e([u({type:String,reflect:!0,attribute:"id"})],o.prototype,"id",void 0),$e([u({type:String})],o.prototype,"title",void 0),$e([u()],o.prototype,"content",void 0),$e([u()],o.prototype,"footer",void 0),$e([u()],o.prototype,"header",void 0),$e([u()],o.prototype,"container",void 0),$e([u({type:Boolean})],o.prototype,"footerVisible",void 0),$e([v()],o.prototype,"_isOpened",void 0),$e([b(".kuc-dialog-1-23-1__dialog")],o.prototype,"_dialogEl",void 0),$e([q("a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type='text']:not([disabled]), input[type='radio']:not([disabled]), input[type='checkbox']:not([disabled]), select:not([disabled]),[tabindex='0']")],o.prototype,"_focusableElements",void 0),window.customElements.define("kuc-dialog-1-23-1",o),x(_c),wo=o})();const pc=wo,fc=`
  kuc-dropdown-1-23-1,
  kuc-dropdown-1-23-1 *,
  kuc-dropdown-1-23-1:lang(en),
  kuc-dropdown-1-23-1:lang(en) * {
    font-family: sans-serif;
  }
  kuc-dropdown-1-23-1:lang(es),
  kuc-dropdown-1-23-1:lang(es) * {
    font-family: sans-serif;
  }
  kuc-dropdown-1-23-1:lang(ja),
  kuc-dropdown-1-23-1:lang(ja) * {
    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
      sans-serif;
  }
  kuc-dropdown-1-23-1:lang(zh),
  kuc-dropdown-1-23-1:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", sans-serif;
  }
  kuc-dropdown-1-23-1:lang(zh-TW),
  kuc-dropdown-1-23-1:lang(zh-TW) * {
    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC",sans-serif;
  }
  kuc-dropdown-1-23-1 {
    display: inline-table;
    font-size: 14px;
    color: #333333;
    vertical-align: top;
    width: var(--kuc-dropdown-toggle-width, 180px);
    min-width: var(--kuc-dropdown-toggle-width, 180px);
    line-height: 1.5;
  }
  kuc-dropdown-1-23-1[hidden] {
    display: none;
  }
  .kuc-dropdown-1-23-1__group {
    border: none;
    padding: 0px;
    height: auto;
    display: inline-block;
    width: 100%;
    margin: 0px;
    position: relative;
  }
  .kuc-dropdown-1-23-1__group__label {
    padding: 4px 0px 8px 0px;
    display: inline-block;
    white-space: nowrap;
  }
  .kuc-dropdown-1-23-1__group__label[hidden] {
    display: none;
  }
  .kuc-dropdown-1-23-1__group__toggle {
    height: var(--kuc-dropdown-toggle-height, 40px);
    box-sizing: border-box;
    box-shadow: 1px 1px 1px #ffffff inset;
    border: 1px solid #e3e7e8;
    color: var(--kuc-dropdown-toggle-color, #3498db);
    background-color: #f7f9fa;
    padding: 0 0 0 24px;
    display: grid;
    grid: auto / auto-flow;
    align-items: center;
    align-content: center;
    justify-content: space-between;
    width: var(--kuc-dropdown-toggle-width, 100%);
    cursor: pointer;
  }
  .kuc-dropdown-1-23-1__group__toggle:focus {
    outline: none;
    border: 1px solid #3498db;
  }
  .kuc-dropdown-1-23-1__group__toggle:disabled {
    background-color: #d4d7d7;
    box-shadow: none;
    cursor: not-allowed;
    color: #888888;
  }
  .kuc-dropdown-1-23-1__group__toggle__selected-item-label {
    font-size: var(--kuc-dropdown-font-size, 14px);
    text-align: left;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .kuc-dropdown-1-23-1__group__toggle__icon {
    flex: none;
    width: 38px;
    height: 38px;
  }
  .kuc-dropdown-1-23-1__group__select-menu {
    position: absolute;
    min-width: 280px;
    margin: 0;
    padding: 8px 0;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    background-color: #ffffff;
    z-index: 2000;
    list-style: none;
    box-sizing: border-box;
  }
  .kuc-dropdown-1-23-1__group__select-menu[hidden] {
    display: none;
  }
  .kuc-dropdown-1-23-1__group__select-menu__item {
    padding: 8px 16px 8px 24px;
    line-height: 1;
    position: relative;
    cursor: pointer;
    white-space: nowrap;
    color: var(--kuc-dropdown-menu-color, #333333);
    font-size: var(--kuc-dropdown-font-size, 14px);
  }
  .kuc-dropdown-1-23-1__group__select-menu__item__icon {
    position: absolute;
    top: 50%;
    left: 6px;
    margin-top: -5px;
  }
  .kuc-dropdown-1-23-1__group__select-menu__item[aria-selected="true"] {
    color: var(--kuc-dropdown-menu-color-selected, #3498db);
  }
  .kuc-dropdown-1-23-1__group__select-menu__highlight[role="option"] {
    background-color: #e2f2fe;
  }
  .kuc-dropdown-1-23-1__group__select-menu__item--disabled,
  .kuc-dropdown-1-23-1__group__select-menu__item--disabled[aria-selected="true"] {
    background-color: #d4d7d7;
    cursor: not-allowed;
    color: #888888;
  }
`;var U=function(o,t,e,i){var n=arguments.length,a=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(o,t,e,i);else for(var r=o.length-1;r>=0;r--)(s=o[r])&&(a=(n<3?s(a):n>3?s(t,e,a):s(t,e))||a);return n>3&&a&&Object.defineProperty(t,e,a),a};let bn;(()=>{if(bn=window.customElements.get("kuc-dropdown-1-23-1"),bn)return;class o extends k{constructor(e){super(),this.className="",this.error="",this.id="",this.label="",this.value="",this.selectedIndex=-1,this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this.items=[],this._selectorVisible=!1,this._DISABLED_CLASS="kuc-dropdown-1-23-1__group__select-menu__item--disabled",this._hasValueInItems=!1,this._GUID=M();const i=$(e);this._handleClickDocument=this._handleClickDocument.bind(this),this._handleScrollMenu=this._handleScrollMenu.bind(this),this._setInitialValue(i),Object.assign(this,i)}_setInitialValue(e){const i="value"in e,n="selectedIndex"in e;!i&&n&&(this.value=this._getValue(e)||"")}_getSelectedLabel(){const e=this.items.filter((i,n)=>this._isCheckedItem(i,n));return e.length===0?"":e[0].label===void 0?e[0].value:e[0].label}_getToggleIconSvgTemplate(){return C`
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M24.2122 15.6665L25 16.1392L19.7332 21.4998H18.2668L13 16.1392L13.7878 15.6665L18.765 20.6866H19.235L24.2122 15.6665Z"
          fill="#3498db"/>
      </svg>
    `}shouldUpdate(e){return e.has("items")&&!D(this.items)?(this.throwErrorAfterUpdateComplete(y.ITEMS.IS_NOT_ARRAY),!1):e.has("value")&&!_i(this.value)?(this.throwErrorAfterUpdateComplete(y.VALUE.IS_NOT_STRING),!1):e.has("selectedIndex")&&!Kt(this.selectedIndex)?(this.throwErrorAfterUpdateComplete(y.SELECTED_INDEX.IS_NOT_NUMBER),!1):!0}willUpdate(e){if((e.has("items")||e.has("value"))&&(this._hasValueInItems=this.items.some(i=>i.value===this.value)),e.has("value")){if(this.value!==""||this._hasValueInItems)return;this.selectedIndex=-1}}update(e){(e.has("items")||e.has("value")||e.has("selectedIndex"))&&(this.selectedIndex=this._getSelectedIndex(),this.value=this._getValue({items:this.items,selectedIndex:this.selectedIndex})||""),super.update(e)}_getSelectedIndex(){if(!this.value&&!this._hasValueInItems)return this.items[this.selectedIndex]?this.selectedIndex:-1;const e=this.items.findIndex(n=>n.value===this.value);if(e===-1)return-1;const i=this.items.findIndex((n,a)=>n.value===this.value&&a===this.selectedIndex);return i>-1?i:e}_getValue(e){const i=e.items||[],n=e.selectedIndex===0||e.selectedIndex?e.selectedIndex:-1,a=i[n];return a?a.value:""}render(){return p`
        <div class="kuc-dropdown-1-23-1__group">
          <div
            class="kuc-dropdown-1-23-1__group__label"
            id="${this._GUID}-label"
            ?hidden="${!this.label}"
          >
            <kuc-base-label-1-23-1
              .text="${this.label}"
              .requiredIcon="${this.requiredIcon}"
            ></kuc-base-label-1-23-1>
          </div>
          <button
            class="kuc-dropdown-1-23-1__group__toggle"
            id="${this._GUID}-toggle"
            type="button"
            aria-haspopup="true"
            aria-labelledby="${this._GUID}-label ${this._GUID}-toggle"
            aria-describedby="${this._GUID}-error"
            aria-required="${this.requiredIcon}"
            ?disabled="${this.disabled}"
            @mouseup="${this._handleMouseUpDropdownToggle}"
            @mousedown="${this._handleMouseDownDropdownToggle}"
            @click="${this._handleClickDropdownToggle}"
            @keydown="${this._handleKeyDownDropdownToggle}"
          >
            <span class="kuc-dropdown-1-23-1__group__toggle__selected-item-label"
              >${this._getSelectedLabel()}</span
            >
            <span class="kuc-dropdown-1-23-1__group__toggle__icon">
              ${this._getToggleIconSvgTemplate()}
            </span>
          </button>
          <ul
            class="kuc-dropdown-1-23-1__group__select-menu"
            role="listbox"
            aria-hidden="${!this._selectorVisible}"
            ?hidden="${!this._selectorVisible}"
            @mouseleave="${this._handleMouseLeaveMenu}"
            @mousedown="${this._handleMouseDownMenu}"
          >
            ${this.items.map((e,i)=>this._getItemTemplate(e,i))}
          </ul>
          <kuc-base-error-1-23-1
            .text="${this.error}"
            .guid="${this._GUID}"
            ?hidden="${!this.error}"
            ariaLive="assertive"
          ></kuc-base-error-1-23-1>
        </div>
      `}firstUpdated(){window.addEventListener("resize",()=>{this._actionResizeScrollWindow()}),window.addEventListener("scroll",()=>{this._actionResizeScrollWindow()})}async updated(){await this.updateComplete,this._selectorVisible?(this._menuEl.addEventListener("scroll",this._handleScrollMenu),this._setMenuPosition(),this._scrollToView(),setTimeout(()=>{document.addEventListener("click",this._handleClickDocument,!0)},1)):setTimeout(()=>{document.removeEventListener("click",this._handleClickDocument,!0)},1)}_handleMouseDownDropdownItem(e){const i=this._getItemElementWhenMouseOverDown(e.target),n=i.getAttribute("value"),a=i.dataset.index||"0";this._actionUpdateValue(n,a)}_handleMouseOverDropdownItem(e){const i=this._getItemElementWhenMouseOverDown(e.target);this._actionHighlightMenuItem(i)}_handleMouseLeaveMenu(){this._actionClearAllHighlightMenuItem()}_handleMouseDownMenu(e){e.preventDefault()}_handleMouseDownDropdownToggle(e){e.preventDefault()}_handleMouseUpDropdownToggle(e){e.preventDefault()}_handleClickDropdownToggle(e){e.stopPropagation(),this._actionToggleMenu()}_handleClickDocument(e){(e.target===this._buttonEl||this._buttonEl.contains(e.target))&&e.stopPropagation(),!Array.from(this._disabledItemsEl).some(i=>i===e.target||i.contains(e.target))&&this._actionHideMenu()}_handleScrollMenu(){this._previousScrollTop=this._menuEl.scrollTop}_handleKeyDownDropdownToggle(e){switch(e.key){case"Up":case"ArrowUp":{if(e.preventDefault(),this.items.length===0)break;if(!this._selectorVisible){this._actionShowMenu();break}this._actionHighlightPrevMenuItem();break}case"Tab":this._selectorVisible&&this._actionHideMenu();break;case"Down":case"ArrowDown":{if(e.preventDefault(),this.items.length===0)break;if(!this._selectorVisible){this._actionShowMenu();break}this._actionHighlightNextMenuItem();break}case"Enter":{if(e.preventDefault(),this.items.length===0)break;if(!this._selectorVisible){this._actionShowMenu();break}const{value:i,selectedIndex:n}=this._getInfoHighlightItem();if(i===null)break;this._actionUpdateValue(i,n),this._actionHideMenu();break}case"Escape":{e.preventDefault(),this._selectorVisible&&e.stopPropagation(),this._actionHideMenu();break}case"Home":{this._selectorVisible&&(e.preventDefault(),this._actionHighlightFirstMenuItem());break}case"End":{this._selectorVisible&&(e.preventDefault(),this._actionHighlightLastMenuItem());break}}}_getInfoHighlightItem(){const e=this._highlightItemEl;if(e===null)return{value:null,selectedIndex:"-1"};const i=e.getAttribute("value"),n=e.dataset.index||"0";return{value:i,selectedIndex:n}}_actionShowMenu(){this._buttonEl.focus(),this.items.length!==0&&(this._selectorVisible=!0,!(this._selectedItemEl===null||this._selectedItemEl.classList.contains(this._DISABLED_CLASS))&&this._setHighlightAndActiveDescendantMenu(this._selectedItemEl))}_actionHideMenu(){this._selectorVisible=!1,this._actionRemoveActiveDescendant()}_actionToggleMenu(){if(this.items.length!==0){if(this._selectorVisible){this._actionHideMenu();return}this._actionShowMenu()}}_actionHighlightFirstMenuItem(){let e=this._firstItemEl,i=!1;for(let n=0;n<this.items.length&&(i=e.classList.contains(this._DISABLED_CLASS),i);n++)e=e.nextElementSibling;!i&&this._setHighlightAndActiveDescendantMenu(e)}_actionHighlightLastMenuItem(){let e=this._lastItemEl,i=!1;for(let n=0;n<this.items.length&&(i=e.classList.contains(this._DISABLED_CLASS),i);n++)e=e.previousElementSibling;!i&&this._setHighlightAndActiveDescendantMenu(e)}_actionHighlightPrevMenuItem(){let e=null;this._highlightItemEl!==null&&(e=this._highlightItemEl.previousElementSibling),e===null&&(e=this._lastItemEl);let i=!1;for(let n=0;n<this.items.length&&(i=e.classList.contains(this._DISABLED_CLASS),i);n++)e=e.previousElementSibling,e===null&&(e=this._lastItemEl);!i&&this._setHighlightAndActiveDescendantMenu(e)}_actionHighlightNextMenuItem(){let e=null;this._highlightItemEl!==null&&(e=this._highlightItemEl.nextElementSibling),e===null&&(e=this._firstItemEl);let i=!1;for(let n=0;n<this.items.length&&(i=e.classList.contains(this._DISABLED_CLASS),i);n++)e=e.nextElementSibling,e===null&&(e=this._firstItemEl);!i&&this._setHighlightAndActiveDescendantMenu(e)}_actionClearAllHighlightMenuItem(){this._itemsEl.forEach(e=>{e.classList.remove("kuc-dropdown-1-23-1__group__select-menu__highlight")}),this._actionRemoveActiveDescendant()}_setHighlightAndActiveDescendantMenu(e){this._actionHighlightMenuItem(e),this._actionSetActiveDescendant(e.id),this._scrollToView()}_actionHighlightMenuItem(e){this._actionClearAllHighlightMenuItem(),e.classList.add("kuc-dropdown-1-23-1__group__select-menu__highlight")}_actionUpdateValue(e,i){const n=parseInt(i,10);if(this.value===e&&this.selectedIndex===n)return;const a={oldValue:this.value,value:e};this.value=e,this.selectedIndex=n,m(this,"change",a)}_actionSetActiveDescendant(e){e!==void 0&&this._buttonEl!==null&&this._buttonEl.setAttribute("aria-activedescendant",e)}_actionRemoveActiveDescendant(){this._buttonEl.removeAttribute("aria-activedescendant")}_getScrollbarWidthHeight(){const e=document.createElement("div");e.style.cssText="overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(e);const i=e.offsetWidth-e.clientWidth,n=e.offsetHeight-e.clientHeight;return document.body.removeChild(e),{scrollbarWidth:i,scrollbarHeight:n}}_getDistanceToggleButton(){const{scrollbarWidth:e,scrollbarHeight:i}=this._getScrollbarWidthHeight(),n=document.body.scrollHeight>window.innerHeight,a=document.body.scrollWidth>window.innerWidth,s=this._buttonEl.getBoundingClientRect().top,r=window.innerHeight-this._buttonEl.getBoundingClientRect().bottom-(a?i:0),l=this._buttonEl.getBoundingClientRect().left,c=window.innerWidth-this._buttonEl.getBoundingClientRect().left-(n?e:0);return{toTop:s,toBottom:r,toLeft:l,toRight:c}}_setMenuPositionAboveOrBelow(){this._menuEl.style.height="auto",this._menuEl.style.bottom="auto",this._menuEl.style.overflowY="scroll",this._menuEl.style.maxHeight="none";const e=this._menuEl.getBoundingClientRect().height;this._menuEl.style.maxHeight="var(--kuc-dropdown-menu-max-height, none)";const i=this._menuEl.getBoundingClientRect().height,n=this._getDistanceToggleButton();if(n.toBottom>=i){e>i?this._previousScrollTop&&(this._menuEl.scrollTop=this._previousScrollTop):this._menuEl.style.overflowY="";return}if(n.toBottom<n.toTop){const a=this._errorEl.offsetHeight?this._errorEl.offsetHeight+16:0;if(this._menuEl.style.bottom=`${this._buttonEl.offsetHeight+a}px`,n.toTop>=i){e>i?this._previousScrollTop&&(this._menuEl.scrollTop=this._previousScrollTop):this._menuEl.style.overflowY="";return}this._menuEl.style.height=`${n.toTop}px`}else this._menuEl.style.height=`${n.toBottom}px`;this._previousScrollTop&&(this._menuEl.scrollTop=this._previousScrollTop)}_setMenuPositionLeftOrRight(){this._menuEl.style.right="auto";const e=this._menuEl.getBoundingClientRect().width,i=this._getDistanceToggleButton();if(i.toRight>=e||i.toLeft<e||i.toRight<0)return;const n=this._buttonEl.offsetWidth-i.toRight;this._menuEl.style.right=n>0?`${n}px`:"0px"}_setMenuPosition(){this._setMenuPositionAboveOrBelow(),this._setMenuPositionLeftOrRight()}_scrollToView(){if(!this._highlightItemEl||!this._menuEl)return;const e=this._menuEl.getBoundingClientRect(),i=this._highlightItemEl.getBoundingClientRect();i.top<e.top&&(this._menuEl.scrollTop-=e.top-i.top),e.bottom<i.bottom&&(this._menuEl.scrollTop+=i.bottom-e.bottom)}_actionResizeScrollWindow(){this._timeoutID||!this._selectorVisible||(this._timeoutID=window.setTimeout(()=>{this._timeoutID=null,this._setMenuPosition()},50))}_isCheckedItem(e,i){return this.value?e.value===this.value&&this.selectedIndex===i:this.selectedIndex===i}_getItemTemplate(e,i){const n=this._isCheckedItem(e,i);return p`
        <li
          class="kuc-dropdown-1-23-1__group__select-menu__item ${e.disabled?this._DISABLED_CLASS:""}"
          role="option"
          tabindex="${!e.disabled&&n?"0":"-1"}"
          aria-selected="${n?"true":"false"}"
          data-index="${i}"
          value="${e.value!==void 0?e.value:""}"
          id="${this._GUID}-menuitem-${i}"
          @mousedown="${e.disabled?null:this._handleMouseDownDropdownItem}"
          @mouseover="${e.disabled?null:this._handleMouseOverDropdownItem}"
        >
          ${this._getDropdownIconSvgTemplate(n,!!e.disabled)}
          ${e.label===void 0?e.value:e.label}
        </li>
      `}_getDropdownIconSvgTemplate(e,i){return C`
      ${e?C`<svg
          class="kuc-dropdown-1-23-1__group__select-menu__item__icon"
          width="11"
          height="9"
          viewBox="0 0 11 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 5L1.5 3L4.5 5.5L9.5 0L11 1.5L4.5 8.5L0 5Z"
            fill="${i?"#888888":"#3498db"}"/>
        </svg>`:""}`}_getItemElementWhenMouseOverDown(e){return e.classList.value.split(" ").includes("kuc-dropdown-1-23-1__group__select-menu__item")?e:this._getItemElementWhenMouseOverDown(e.parentElement)}}U([u({type:String,reflect:!0,attribute:"class"})],o.prototype,"className",void 0),U([u({type:String})],o.prototype,"error",void 0),U([u({type:String,reflect:!0,attribute:"id"})],o.prototype,"id",void 0),U([u({type:String})],o.prototype,"label",void 0),U([u({type:String})],o.prototype,"value",void 0),U([u({type:Number})],o.prototype,"selectedIndex",void 0),U([u({type:Boolean})],o.prototype,"disabled",void 0),U([u({type:Boolean})],o.prototype,"requiredIcon",void 0),U([u({type:Boolean,attribute:"hidden",reflect:!0,converter:V})],o.prototype,"visible",void 0),U([u({type:Array})],o.prototype,"items",void 0),U([v()],o.prototype,"_selectorVisible",void 0),U([b(".kuc-dropdown-1-23-1__group__select-menu")],o.prototype,"_menuEl",void 0),U([q(".kuc-dropdown-1-23-1__group__select-menu__item")],o.prototype,"_itemsEl",void 0),U([b("button.kuc-dropdown-1-23-1__group__toggle")],o.prototype,"_buttonEl",void 0),U([b(".kuc-dropdown-1-23-1__group__select-menu__item")],o.prototype,"_firstItemEl",void 0),U([b(".kuc-dropdown-1-23-1__group__select-menu__item:last-child")],o.prototype,"_lastItemEl",void 0),U([b(".kuc-dropdown-1-23-1__group__select-menu__item[aria-selected=true]")],o.prototype,"_selectedItemEl",void 0),U([b(".kuc-dropdown-1-23-1__group__select-menu__highlight")],o.prototype,"_highlightItemEl",void 0),U([q(".kuc-dropdown-1-23-1__group__select-menu__item--disabled")],o.prototype,"_disabledItemsEl",void 0),U([b(".kuc-base-error-1-23-1__error")],o.prototype,"_errorEl",void 0),window.customElements.define("kuc-dropdown-1-23-1",o),x(fc),bn=o})();const gc=`
  kuc-field-group-1-23-1 .kuc-field-group-1-23-1__group__toggle .kuc-base-label-1-23-1__text,
  kuc-field-group-1-23-1:lang(en) .kuc-field-group-1-23-1__group__toggle .kuc-base-label-1-23-1__text {
    font-family: sans-serif;
  }
  kuc-field-group-1-23-1:lang(es) .kuc-field-group-1-23-1__group__toggle .kuc-base-label-1-23-1__text {
    font-family: sans-serif;
  }
  kuc-field-group-1-23-1:lang(ja) .kuc-field-group-1-23-1__group__toggle .kuc-base-label-1-23-1__text {
    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
      sans-serif;
  }
  kuc-field-group-1-23-1:lang(zh) .kuc-field-group-1-23-1__group__toggle .kuc-base-label-1-23-1__text {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", sans-serif;
  }
  kuc-field-group-1-23-1:lang(zh-TW) .kuc-field-group-1-23-1__group__toggle .kuc-base-label-1-23-1__text {
    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC",sans-serif;
  }
  kuc-field-group-1-23-1 {
    display: inline-table;
  }
  kuc-field-group-1-23-1[hidden] {
    display: none;
  }
  .kuc-field-group-1-23-1__group {
    min-width: 517px;
    padding: 0px 8px;
    border: 1px solid #e3e7e8;
    background-color: #f5f5f5;
  }
  .kuc-field-group-1-23-1__group h3 {
    margin: 0px;
    padding: 0px;
  }
  .kuc-field-group-1-23-1__group__toggle {
    display: flex;
    align-items: center;
    border-style: none;
    position: relative;
    outline: none;
    margin: 12px 0px 12px 8px;
    min-height: 34px;
    padding: 4px 8px 4px 24px;
    color: #333333;
    font-size: 16px;
    cursor: pointer;
    border: 1px solid transparent;
    background-color: inherit;
    line-height: 1.5;
  }
  .kuc-field-group-1-23-1__group__toggle:disabled {
    color: rgba(0, 0, 0, 0.25);
    cursor: not-allowed;
  }
  .kuc-field-group-1-23-1__group__toggle:disabled .kuc-base-label-1-23-1__text {
    color: rgba(0, 0, 0, 0.25);
    cursor: not-allowed;
  }
  .kuc-field-group-1-23-1__group__toggle .kuc-base-label-1-23-1__text {
    font-size: 16px;
  }
  .kuc-field-group-1-23-1__group__toggle:disabled:focus {
    outline: 0;
    border: 1px solid transparent;
  }
  .kuc-field-group-1-23-1__group__toggle:focus {
    outline: 0;
    border: 1px solid #3498db;
  }
  .kuc-field-group-1-23-1__group__toggle svg {
    position: absolute;
    left: 8px;
  }
  .kuc-field-group-1-23-1__group__body {
    padding: 0px 8px;
    margin-left: 0px;
    white-space: nowrap;
    word-wrap: normal;
    margin-bottom: 12px;
  }
`;var Qe=function(o,t,e,i){var n=arguments.length,a=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(o,t,e,i);else for(var r=o.length-1;r>=0;r--)(s=o[r])&&(a=(n<3?s(a):n>3?s(t,e,a):s(t,e))||a);return n>3&&a&&Object.defineProperty(t,e,a),a};const Co=517;let mn;(()=>{if(mn=window.customElements.get("kuc-field-group-1-23-1"),mn)return;class o extends k{constructor(e){super(),this.className="",this.content="",this.id="",this.label="",this.disabled=!1,this.expanded=!1,this.visible=!0,this._content="",this._GUID=M();const i=$(e);Object.assign(this,i)}update(e){e.has("content")&&(this.content&&oe(this.content)?this._content=be(this.content):this._content=this.content),super.update(e)}render(){return p`
        <div
          class="kuc-field-group-1-23-1__group"
          role="group"
          aria-labelledby="${this._GUID}-control"
        >
          <button
            type="button"
            id="${this._GUID}-control"
            class="kuc-field-group-1-23-1__group__toggle"
            aria-controls="${this._GUID}-body"
            aria-expanded="${this.expanded&&!this.disabled}"
            ?disabled="${this.disabled}"
            @click="${this._handleClickButton}"
            @keydown="${this._handleKeyDownButton}"
          >
            ${this._getSvgTemplate()}
            <kuc-base-label-1-23-1
              .text="${this.label}"
              .requiredIcon="${!1}"
            ></kuc-base-label-1-23-1>
          </button>
          <div
            id="${this._GUID}-body"
            class="kuc-field-group-1-23-1__group__body"
            ?hidden="${!this.expanded||this.disabled}"
            @change="${this._handleChangeBody}"
          >
            ${this._content}
          </div>
        </div>
      `}updated(e){e.has("content")&&(this._groupEl.style.minWidth=Co+"px",requestAnimationFrame(()=>{this._updateContainerWidth()}))}_updateContainerWidth(){if(!this._bodyEl)return;const e=this._bodyEl.hasAttribute("hidden");e&&this._bodyEl.removeAttribute("hidden");const i=this._bodyEl.offsetWidth;e&&this._bodyEl.setAttribute("hidden",""),!(i<=Co)&&(this._groupEl.style.minWidth=i+"px")}_getSvgTemplate(){return this.expanded?p`<svg
            width="13"
            height="8"
            viewBox="0 0 13 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.7122 0.5L12.5 1.03608L7.23318 7.11548L5.76682 7.11548L0.5 1.03608L1.2878 0.5L6.26504 6.19318L6.73496 6.19318L11.7122 0.5Z"
              fill="#939393"
            />
          </svg>`:p`<svg
            width="8"
            height="13"
            viewBox="0 0 8 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.5 1.2878L1.03608 0.5L7.11548 5.76682V7.23318L1.03608 12.5L0.5 11.7122L6.19318 6.73496V6.26504L0.5 1.2878Z"
              fill="#939393"
            />
          </svg> `}_handleChangeBody(e){e.stopPropagation()}_handleKeyDownButton(e){e.key!=="Tab"&&(e.preventDefault(),(e.key==="Enter"||e.key===" ")&&this._handleClickButton(e))}_handleClickButton(e){if(e.target!==document.activeElement&&this._toggle.focus(),this.expanded){const n=this._bodyEl.getBoundingClientRect().width;n>Co&&(this._groupEl.style.minWidth=n+"px")}else this._groupEl.style.minWidth=Co+"px";this.expanded=!this.expanded;const i={expanded:this.expanded};m(this,"change",i)}}Qe([u({type:String,reflect:!0,attribute:"class"})],o.prototype,"className",void 0),Qe([u()],o.prototype,"content",void 0),Qe([u({type:String,reflect:!0,attribute:"id"})],o.prototype,"id",void 0),Qe([u({type:String})],o.prototype,"label",void 0),Qe([u({type:Boolean})],o.prototype,"disabled",void 0),Qe([u({type:Boolean})],o.prototype,"expanded",void 0),Qe([u({type:Boolean,attribute:"hidden",reflect:!0,converter:V})],o.prototype,"visible",void 0),Qe([b(".kuc-field-group-1-23-1__group")],o.prototype,"_groupEl",void 0),Qe([b(".kuc-field-group-1-23-1__group__body")],o.prototype,"_bodyEl",void 0),Qe([b(".kuc-field-group-1-23-1__group__toggle")],o.prototype,"_toggle",void 0),window.customElements.define("kuc-field-group-1-23-1",o),x(gc),mn=o})();const bc=`
  kuc-multi-choice-1-23-1,
  kuc-multi-choice-1-23-1 *,
  kuc-multi-choice-1-23-1:lang(en),
  kuc-multi-choice-1-23-1:lang(en) * {
    font-family: sans-serif;
  }
  kuc-multi-choice-1-23-1:lang(es),
  kuc-multi-choice-1-23-1:lang(es) * {
    font-family: sans-serif;
  }
  kuc-multi-choice-1-23-1:lang(ja),
  kuc-multi-choice-1-23-1:lang(ja) * {
    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
      sans-serif;
  }
  kuc-multi-choice-1-23-1:lang(zh),
  kuc-multi-choice-1-23-1:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", sans-serif;
  }
  kuc-multi-choice-1-23-1:lang(zh-TW),
  kuc-multi-choice-1-23-1:lang(zh-TW) * {
    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC",sans-serif;
  }
  kuc-multi-choice-1-23-1 {
    display: inline-table;
    font-size: 14px;
    color: var(--kuc-multi-choice-menu-color, #333333);
    width: var(--kuc-multi-choice-menu-width, 180px);
    min-width: var(--kuc-multi-choice-menu-width, 180px);
    line-height: 1.5;
  }
  kuc-multi-choice-1-23-1[hidden] {
    display: none;
  }
  .kuc-multi-choice-1-23-1__group {
    border: none;
    padding: 0px;
    height: auto;
    display: inline-block;
    vertical-align: top;
    width: 100%;
    margin: 0px;
  }
  .kuc-multi-choice-1-23-1__group__label {
    padding: 4px 0px 8px 0px;
    display: inline-block;
    white-space: nowrap;
  }
  .kuc-multi-choice-1-23-1__group__label[hidden] {
    display: none;
  }
  .kuc-multi-choice-1-23-1__group__menu {
    position: relative;
    background: #ffffff;
    border: 1px solid #e3e7e8;
    box-sizing: border-box;
    box-shadow: 1px 1px 12px #f5f5f5 inset, -1px -1px 12px #f5f5f5 inset;
    padding: 6px 0;
    overflow-y: auto;
    overflow-x: hidden;
    height: var(--kuc-multi-choice-menu-height, auto);
    max-height: var(--kuc-multi-choice-menu-height, 134px);
    width: var(--kuc-multi-choice-menu-width, auto);
    font-size: var(--kuc-multi-choice-menu-font-size, 14px);
  }
  .kuc-multi-choice-1-23-1__group__menu:not([disabled]):focus {
    outline: none;
    border: 1px solid #3498db;
  }
  .kuc-multi-choice-1-23-1__group__menu[disabled] {
    background-color: #dbdcdd;
    box-shadow: none;
    cursor: not-allowed;
    color: #888888;
    outline: none;
  }
  .kuc-multi-choice-1-23-1__group__menu__item {
    padding: 4px 16px;
    margin-bottom: 2px;
    line-height: 1;
    position: relative;
    white-space: nowrap;
  }
  .kuc-multi-choice-1-23-1__group__menu__item__icon {
    position: absolute;
    top: 50%;
    left: 16px;
    margin-top: -6px;
    pointer-events: none;
  }
  .kuc-multi-choice-1-23-1__group__menu__item--disabled {
    background-color: #d4d7d7;
    cursor: not-allowed;
    color: #888888;
  }
  .kuc-multi-choice-1-23-1__group__menu__item[aria-selected="true"] {
    color: var(--kuc-multi-choice-menu-color-selected, #3498db);
    padding-left: 32px;
  }
  .kuc-multi-choice-1-23-1__group__menu__item--disabled[aria-selected="true"] {
    color: #888888;
    padding-left: 32px;
  }
  .kuc-multi-choice-1-23-1__group__menu[disabled]
    .kuc-multi-choice-1-23-1__group__menu__item[aria-selected="true"] {
    color: #888888;
  }
  .kuc-multi-choice-1-23-1__group__menu__highlight[role="option"] {
    background-color: var(--kuc-multi-choice-menu-background-color-hover, #e2f2fe);
    cursor: pointer;
  }
`;var ee=function(o,t,e,i){var n=arguments.length,a=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(o,t,e,i);else for(var r=o.length-1;r>=0;r--)(s=o[r])&&(a=(n<3?s(a):n>3?s(t,e,a):s(t,e))||a);return n>3&&a&&Object.defineProperty(t,e,a),a};let vn;(()=>{if(vn=window.customElements.get("kuc-multi-choice-1-23-1"),vn)return;class o extends k{constructor(e){super(),this.className="",this.error="",this.id="",this.label="",this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this.items=[],this.selectedIndex=[],this.value=[],this._valueMapping={},this._DISABLED_CLASS="kuc-multi-choice-1-23-1__group__menu__item--disabled",this._GUID=M();const i=$(e);this._setInitialValue(i),Object.assign(this,i)}_setInitialValue(e){const i="value"in e,n="selectedIndex"in e,a=e.selectedIndex||[];if(!i&&n){if(!D(a))return;const s=this._getValueMapping(e);this.value=this._getValidValue(s,a)}}shouldUpdate(e){return e.has("items")&&!D(this.items)?(this.throwErrorAfterUpdateComplete(y.ITEMS.IS_NOT_ARRAY),!1):e.has("value")&&!D(this.value)?(this.throwErrorAfterUpdateComplete(y.VALUE.IS_NOT_ARRAY),!1):e.has("selectedIndex")&&!D(this.selectedIndex)?(this.throwErrorAfterUpdateComplete(y.SELECTED_INDEX.IS_NOT_ARRAY),!1):!0}willUpdate(e){if(e.has("value")){if(this.value.length>0)return;this.selectedIndex=[]}}update(e){(e.has("items")||e.has("value")||e.has("selectedIndex"))&&(this._valueMapping=this._getValueMapping({items:this.items,value:this.value,selectedIndex:this.selectedIndex}),this._setValueAndSelectedIndex()),super.update(e)}render(){return p`
        <div class="kuc-multi-choice-1-23-1__group">
          <div
            class="kuc-multi-choice-1-23-1__group__label"
            id="${this._GUID}-label"
            ?hidden="${!this.label}"
          >
            <kuc-base-label-1-23-1
              .text="${this.label}"
              .requiredIcon="${this.requiredIcon}"
            ></kuc-base-label-1-23-1>
          </div>
          <div
            class="kuc-multi-choice-1-23-1__group__menu"
            role="listbox"
            aria-multiselectable="true"
            aria-describedby="${this._GUID}-error"
            aria-labelledby="${this._GUID}-label"
            ?disabled="${this.disabled}"
            tabindex="${this.disabled?"-1":"0"}"
            @keydown="${this._handleKeyDownMultiChoice}"
          >
            ${this.items.map((e,i)=>this._getMenuItemTemplate(e,i))}
          </div>
          <kuc-base-error-1-23-1
            .text="${this.error}"
            .guid="${this._GUID}"
            ?hidden="${!this.error}"
            ariaLive="assertive"
          ></kuc-base-error-1-23-1>
        </div>
      `}_getValueMapping(e){const i=e.items||[],n=e.value||[],a=e.selectedIndex||[],s=i.map(d=>d.value||""),r=Object.assign({},s),l={};if(n.length===0){const d=this._getValidValue(r,a);return a.forEach((h,_)=>l[h]=d[_]),l}return this._getValidSelectedIndex(r).forEach((d,h)=>l[d]=n[h]),l}_getValidValue(e,i){return i.filter(n=>e[n]).map(n=>e[n])}_getValidSelectedIndex(e){const i=[];for(let n=0;n<this.value.length;n++){const a=this.selectedIndex[n];if(e[a]===this.value[n]){i.push(a);continue}const s=this.items.findIndex(r=>r.value===this.value[n]);i.push(s)}return i}_setValueAndSelectedIndex(){this.value=Object.values(this._valueMapping),this.selectedIndex=Object.keys(this._valueMapping).map(e=>parseInt(e,10))}_handleMouseDownMultiChoiceItem(e){if(this.disabled)return;const i=e.target,n=i.getAttribute("value"),a=i.dataset.index||"0";this._handleChangeValue(n,a)}_handleMouseOverMultiChoiceItem(e){if(this.disabled)return;this._itemsEl.forEach(n=>{n.classList.contains("kuc-multi-choice-1-23-1__group__menu__highlight")&&n.classList.remove("kuc-multi-choice-1-23-1__group__menu__highlight")});const i=e.currentTarget;i.classList.add("kuc-multi-choice-1-23-1__group__menu__highlight"),this._setActiveDescendant(i.id)}_handleMouseLeaveMultiChoiceItem(e){if(this.disabled)return;e.currentTarget.classList.remove("kuc-multi-choice-1-23-1__group__menu__highlight"),this._setActiveDescendant()}_handleKeyDownMultiChoice(e){if(!this.disabled)switch(e.key){case"Up":case"ArrowUp":{if(e.preventDefault(),this.items.length===0)break;this._actionHighlightPrevMenuItem();break}case"Down":case"ArrowDown":{if(e.preventDefault(),this.items.length===0)break;this._actionHighlightNextMenuItem();break}case"Spacebar":case" ":{e.preventDefault(),this._actionUpdateValue();break}}}_actionHighlightPrevMenuItem(){let e=null;this._highlightItemEl!==null&&(e=this._highlightItemEl.previousElementSibling),e===null&&(e=this._lastItemEl,this._highlightItemEl===null&&(e=this._firstItemEl));let i=!1;this._actionClearAllHighlightMenuItem();for(let n=0;n<this._itemsEl.length&&(i=e.classList.contains(this._DISABLED_CLASS),i);n++)e=e.previousElementSibling,e===null&&(e=this._lastItemEl);i||(e.classList.add("kuc-multi-choice-1-23-1__group__menu__highlight"),this._setActiveDescendant(e.id))}_actionHighlightNextMenuItem(){let e=null;this._highlightItemEl!==null&&(e=this._highlightItemEl.nextElementSibling),e===null&&(e=this._firstItemEl);let i=!1;this._actionClearAllHighlightMenuItem();for(let n=0;n<this._itemsEl.length&&(i=e.classList.contains(this._DISABLED_CLASS),i);n++)e=e.nextElementSibling,e===null&&(e=this._firstItemEl);i||(e.classList.add("kuc-multi-choice-1-23-1__group__menu__highlight"),this._setActiveDescendant(e.id))}_actionClearAllHighlightMenuItem(){this._itemsEl.forEach(e=>{e.classList.remove("kuc-multi-choice-1-23-1__group__menu__highlight")})}_actionUpdateValue(){this._itemsEl.forEach(e=>{if(e.classList.contains("kuc-multi-choice-1-23-1__group__menu__highlight")){const i=e.getAttribute("value"),n=e.dataset.index||"0";this._handleChangeValue(i,n)}})}_getMultiChoiceCheckedIconSvgTemplate(e,i){return C`
        ${i?C`<svg
            class="kuc-multi-choice-1-23-1__group__menu__item__icon"
            width="11"
            height="9"
            viewBox="0 0 11 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 5L1.5 3L4.5 5.5L9.5 0L11 1.5L4.5 8.5L0 5Z"
              fill="${e?"#888888":"#3498db"}"
            />
          </svg>`:""}`}_isCheckedItem(e,i){const n=Object.values(this._valueMapping),a=Object.keys(this._valueMapping);return n.filter((r,l)=>r===e.value&&i===parseInt(a[l],10)).length>0}_getMenuItemTemplate(e,i){const n=this._isCheckedItem(e,i),a=e.disabled||this.disabled;return p`
        <div
          class="kuc-multi-choice-1-23-1__group__menu__item ${a?this._DISABLED_CLASS:""}"
          role="option"
          aria-selected="${n}"
          aria-required="${this.requiredIcon}"
          data-index="${i}"
          value="${e.value!==void 0?e.value:""}"
          id="${this._GUID}-menuitem-${i}"
          @mousedown="${a?null:this._handleMouseDownMultiChoiceItem}"
          @mouseover="${a?null:this._handleMouseOverMultiChoiceItem}"
          @mouseleave="${a?null:this._handleMouseLeaveMultiChoiceItem}"
        >
          ${this._getMultiChoiceCheckedIconSvgTemplate(a,n)}
          ${e.label===void 0?e.value:e.label}
        </div>
      `}_setActiveDescendant(e){e!==void 0&&this._menuEl!==null?this._menuEl.setAttribute("aria-activedescendant",e):this._menuEl.removeAttribute("aria-activedescendant")}_handleChangeValue(e,i){const n=this.value?[...this.value]:this.value,a=this._getNewValueMapping(e,i),s=this.items.map(d=>d.value),r=Object.values(a).filter(d=>s.indexOf(d)>-1);if(r===n)return;const l=Object.keys(a).map(d=>parseInt(d,10));this.value=r,this.selectedIndex=l,m(this,"change",{oldValue:n,value:r})}_getNewValueMapping(e,i){const n=parseInt(i,10),a=Object.keys(this._valueMapping),s={...this._valueMapping};return a.indexOf(i)>-1?(delete s[n],s):(s[n]=e,s)}}ee([u({type:String,reflect:!0,attribute:"class"})],o.prototype,"className",void 0),ee([u({type:String})],o.prototype,"error",void 0),ee([u({type:String,reflect:!0,attribute:"id"})],o.prototype,"id",void 0),ee([u({type:String})],o.prototype,"label",void 0),ee([u({type:Boolean})],o.prototype,"disabled",void 0),ee([u({type:Boolean})],o.prototype,"requiredIcon",void 0),ee([u({type:Boolean,attribute:"hidden",reflect:!0,converter:V})],o.prototype,"visible",void 0),ee([u({type:Array})],o.prototype,"items",void 0),ee([u({type:Array})],o.prototype,"selectedIndex",void 0),ee([u({type:Array})],o.prototype,"value",void 0),ee([b(".kuc-multi-choice-1-23-1__group__menu")],o.prototype,"_menuEl",void 0),ee([q(".kuc-multi-choice-1-23-1__group__menu__item")],o.prototype,"_itemsEl",void 0),ee([b(".kuc-multi-choice-1-23-1__group__menu__item")],o.prototype,"_firstItemEl",void 0),ee([b(".kuc-multi-choice-1-23-1__group__menu__item:last-child")],o.prototype,"_lastItemEl",void 0),ee([b(".kuc-multi-choice-1-23-1__group__menu__highlight")],o.prototype,"_highlightItemEl",void 0),ee([v()],o.prototype,"_valueMapping",void 0),window.customElements.define("kuc-multi-choice-1-23-1",o),x(bc),vn=o})();const mc=`
  kuc-notification-1-23-1,
  kuc-notification-1-23-1 *,
  kuc-notification-1-23-1:lang(en),
  kuc-notification-1-23-1:lang(en) * {
    font-family: sans-serif;
  }
  kuc-notification-1-23-1:lang(es),
  kuc-notification-1-23-1:lang(es) * {
    font-family: sans-serif;
  }
  kuc-notification-1-23-1:lang(ja),
  kuc-notification-1-23-1:lang(ja) * {
    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
      sans-serif;
  }
  kuc-notification-1-23-1:lang(zh),
  kuc-notification-1-23-1:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", sans-serif;
  }
  kuc-notification-1-23-1:lang(zh-TW),
  kuc-notification-1-23-1:lang(zh-TW) * {
    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC",sans-serif;
  }
  kuc-notification-1-23-1 {
    color: #ffffff;
    font-weight: 700;
    text-align: center;
    text-shadow: 1px -1px 0 rgba(0, 0, 0, 0.5);
  }
  kuc-notification-1-23-1 {
    position: fixed;
    display: inline-block;
    top: 0;
    left: 0;
    width: 100%;
    line-height: 1.5;
    z-index: 10000;
    margin-top: 16px;
    pointer-events: none;
    visibility: hidden;
    animation-fill-mode: forwards;
  }
  .kuc-notification-fadein-1-23-1 {
    animation-name: kuc-notification-fade-in-1-23-1;
    animation-duration: 250ms;
    animation-timing-function: ease-out;
  }
  .kuc-notification-fadeout-1-23-1 {
    animation-name: kuc-notification-fade-out-1-23-1;
    animation-duration: 250ms;
    animation-timing-function: ease-out;
  }
  .kuc-notification-1-23-1__notification {
    position: relative;
    display: inline-block;
    text-align: left;
    pointer-events: auto;
    padding: 16px 56px 16px 24px;
    background-color: var(--kuc-notification-background-color, #e74c3c);
  }
  .kuc-notification-1-23-1__notification--info {
    background-color: var(--kuc-notification-background-color, #3498db);
  }
  .kuc-notification-1-23-1__notification--success {
    background-color: var(--kuc-notification-background-color, #91c36c);
  }
  .kuc-notification-1-23-1__notification--danger {
    background-color: var(--kuc-notification-background-color, #e74c3c);
  }
  .kuc-notification-1-23-1__notification__title {
    display: flex;
    align-items: center;
    margin: 0;
    font-size: var(--kuc-notification-font-size, 16px);
    color: var(--kuc-notification-color, #ffffff);
    max-width: 500px;
    min-height: 24px;
    word-break: break-word;
    white-space: pre-wrap;
  }
  .kuc-notification-1-23-1__notification__title--html {
    white-space: normal;
    max-width: 500px;
  }
  .kuc-notification-1-23-1__notification__close-button {
    position: absolute;
    top: 4px;
    right: 0;
    width: 48px;
    height: 48px;
    background-color: transparent;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
  }
  .kuc-notification-1-23-1__notification__close-button__icon-background--danger {
    fill: var(--kuc-notification-close-button-background-color, #c65040);
  }
  .kuc-notification-1-23-1__notification__close-button__icon-background--info {
    fill: var(--kuc-notification-close-button-background-color, #448aca);
  }
  .kuc-notification-1-23-1__notification__close-button__icon-background--success {
    fill: var(--kuc-notification-close-button-background-color, #9bbc65);
  }
  @keyframes kuc-notification-fade-in-1-23-1 {
    0% {
      visibility: visible;
      top: -56px;
    }
    100% {
      visibility: visible;
      top: 0;
    }
  }
  @keyframes kuc-notification-fade-out-1-23-1 {
    0% {
      visibility: visible;
      top: 0;
    }
    10% {
      visibility: visible;
      top: 14px;
    }
    100% {
      top: -56px;
    }
  }
`;var At=function(o,t,e,i){var n=arguments.length,a=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(o,t,e,i);else for(var r=o.length-1;r>=0;r--)(s=o[r])&&(a=(n<3?s(a):n>3?s(t,e,a):s(t,e))||a);return n>3&&a&&Object.defineProperty(t,e,a),a};let kn;(()=>{if(kn=window.customElements.get("kuc-notification-1-23-1"),kn)return;class o extends k{constructor(e){super(),this.className="",this.id="",this.text="",this.type="danger",this.duration=-1,this.container=document.body,this.content="",this._isOpened=!1,this._content="";const i=$(e);Object.assign(this,i)}shouldUpdate(e){if(e.has("container")){if(this.container===null||this.container===void 0)return this._isOpened&&this._close(),!1;const i=this._isValidContainerElement(),n=!i||!document.contains(this.container);if(this._isOpened&&n&&this._close(),!i)return this.throwErrorAfterUpdateComplete(y.CONTAINER.INVALID),!1}return!0}willUpdate(e){(e.has("content")||e.has("text"))&&(this.content!==null&&this.content!==void 0&&this.content!==""?oe(this.content)?this._content=p`<div
              class="kuc-notification-1-23-1__notification__title--html"
            >
              ${be(this.content)}
            </div>`:this._content=this.content:this._content=this.text)}_isValidContainerElement(){return this.container instanceof HTMLElement}_handleClickCloseButton(e){this.close()}_getCloseButtonColorType(){switch(this.type){case"info":case"success":return this.type;default:return"danger"}}_getCloseButtonSvgTemplate(){return C`
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>close button</title>
          <path
            class="kuc-notification-1-23-1__notification__close-button__icon-background--${this._getCloseButtonColorType()}"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16.4765 15.7071L20.1229 12.0607L20.4765 11.7071L19.7694 11L19.4158 11.3536L15.7694 15L12.1229 11.3536L11.7694 11L11.0623 11.7071L11.4158 12.0607L15.0623 15.7071L11.3536 19.4158L11 19.7694L11.7071 20.4765L12.0607 20.1229L15.7694 16.4142L19.4781 20.1229L19.8316 20.4765L20.5387 19.7694L20.1852 19.4158L16.4765 15.7071Z"
            fill="white"
          />
        </svg>
      `}_setAutoCloseTimer(){this._clearAutoCloseTimer(),!(!Number.isFinite(this.duration)||this.duration<0)&&(this._timeoutID=window.setTimeout(()=>{this.close()},this.duration))}_clearAutoCloseTimer(){this._timeoutID&&window.clearTimeout(this._timeoutID)}open(){if(!this._isValidContainerElement()){document.body.appendChild(this),requestAnimationFrame(()=>{document.body.removeChild(this)}),this.performUpdate();return}this.container.appendChild(this),this.performUpdate(),this.classList.remove("kuc-notification-fadeout-1-23-1"),this.classList.add("kuc-notification-fadein-1-23-1"),this._isOpened=!0,this._setAutoCloseTimer()}_close(){this._isOpened=!1,this.classList.remove("kuc-notification-fadein-1-23-1"),this.classList.add("kuc-notification-fadeout-1-23-1"),this._clearAutoCloseTimer()}close(){this._close(),m(this,"close")}render(){return p`
        <div
          class="kuc-notification-1-23-1__notification kuc-notification-1-23-1__notification--${this.type}"
        >
          <pre
            class="kuc-notification-1-23-1__notification__title"
            aria-live="assertive"
            role="${this._isOpened?"alert":""}"
          ><!--
          -->${this._content}</pre>
          <button
            class="kuc-notification-1-23-1__notification__close-button"
            type="button"
            aria-label="close"
            @click="${this._handleClickCloseButton}"
          >
            ${this._getCloseButtonSvgTemplate()}
          </button>
        </div>
      `}}At([u({type:String,reflect:!0,attribute:"class"})],o.prototype,"className",void 0),At([u({type:String,reflect:!0,attribute:"id"})],o.prototype,"id",void 0),At([u({type:String})],o.prototype,"text",void 0),At([u({type:String})],o.prototype,"type",void 0),At([u({type:Number})],o.prototype,"duration",void 0),At([u()],o.prototype,"container",void 0),At([u()],o.prototype,"content",void 0),At([v()],o.prototype,"_isOpened",void 0),window.customElements.define("kuc-notification-1-23-1",o),x(mc),kn=o})();const vc=`
  kuc-radio-button-1-23-1,
  kuc-radio-button-1-23-1 *,
  kuc-radio-button-1-23-1:lang(en),
  kuc-radio-button-1-23-1:lang(en) * {
    font-family: sans-serif;
  }
  kuc-radio-button-1-23-1:lang(es),
  kuc-radio-button-1-23-1:lang(es) * {
    font-family: sans-serif;
  }
  kuc-radio-button-1-23-1:lang(ja),
  kuc-radio-button-1-23-1:lang(ja) * {
    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
      sans-serif;
  }
  kuc-radio-button-1-23-1:lang(zh),
  kuc-radio-button-1-23-1:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", sans-serif;
  }
  kuc-radio-button-1-23-1:lang(zh-TW),
  kuc-radio-button-1-23-1:lang(zh-TW) * {
    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC",sans-serif;
  }
  kuc-radio-button-1-23-1 {
    font-size: 14px;
    color: #333333;
    display: inline-table;
    width: var(--kuc-radio-button-menu-width, 239px);
    min-width: var(--kuc-radio-button-menu-width, 239px);
    vertical-align: top;
    line-height: 1.5;
  }

  kuc-radio-button-1-23-1[hidden] {
    display: none;
  }

  .kuc-radio-button-1-23-1__group {
    border: none;
    padding: 0px;
    height: auto;
    display: inline-block;
    margin: 0px;
    width: 100%;
  }

  .kuc-radio-button-1-23-1__group__label {
    display: inline-block;
    padding: 4px 0 8px 0;
    white-space: nowrap;
  }

  .kuc-radio-button-1-23-1__group__label[hidden] {
    display: none;
  }

  .kuc-radio-button-1-23-1__group__select-menu {
    display: flex;
    align-items: flex-start;
    width: var(--kuc-radio-button-menu-width, 100%);
    height: var(--kuc-radio-button-menu-height);
    color: var(--kuc-radio-button-menu-color, #333333);
    font-size: var(--kuc-radio-button-menu-font-size, 14px);
  }

  .kuc-radio-button-1-23-1__group__select-menu[itemlayout="vertical"] {
    display: block;
  }

  .kuc-radio-button-1-23-1__group__select-menu[bordervisible] {
    border-color: #e3e7e8;
    border-width: 1px;
    border-style: solid;
    padding-top: 4px;
    box-sizing: border-box;
  }

  .kuc-radio-button-1-23-1__group__select-menu__item {
    margin-left: 4px;
    margin-bottom: 4px;
    margin-right: 16px;
    padding: 4px;
    border: 1px solid transparent;
    position: relative;
    white-space: normal;
    word-wrap: normal;
    display: flex;
    align-items: center;
  }

  .kuc-radio-button-1-23-1__group__select-menu__item[focused] {
    border: 1px solid #3498db;
  }

  .kuc-radio-button-1-23-1__group__select-menu__item__input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  .kuc-radio-button-1-23-1__group__select-menu__item__input:hover
    + .kuc-radio-button-1-23-1__group__select-menu__item__label {
    color: var(--kuc-radio-button-menu-color-hover, #666666);
  }

  .kuc-radio-button-1-23-1__group__select-menu__item__label__icon {
    position: absolute;
    left: -30px;
    box-sizing: border-box;
    width: 21px;
    height: 21px;
    box-shadow: 1px 1px 3px #f5f5f5 inset, -1px -1px 3px #f5f5f5 inset;
    content: "";
    border-radius: 9px;
  }

  .kuc-radio-button-1-23-1__group__select-menu__item__input[disabled]
    + .kuc-radio-button-1-23-1__group__select-menu__item__label {
    color: #888888;
    cursor: not-allowed;
  }

  .kuc-radio-button-1-23-1__group__select-menu__item__label {
    cursor: pointer;
    position: relative;
    margin-left: 32px;
    display: flex;
    align-items: center;
    vertical-align: middle;
    white-space: nowrap;
    line-height: 1.2;
    min-height: 24px;
  }
`;var ve=function(o,t,e,i){var n=arguments.length,a=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(o,t,e,i);else for(var r=o.length-1;r>=0;r--)(s=o[r])&&(a=(n<3?s(a):n>3?s(t,e,a):s(t,e))||a);return n>3&&a&&Object.defineProperty(t,e,a),a};let xn;(()=>{if(xn=window.customElements.get("kuc-radio-button-1-23-1"),xn)return;class o extends k{constructor(e){super(),this.className="",this.error="",this.id="",this.itemLayout="horizontal",this.label="",this.value="",this.selectedIndex=-1,this.borderVisible=!0,this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this.items=[],this._GUID=M();const i=$(e);this._setInitialValue(i),Object.assign(this,i)}_setInitialValue(e){const i="value"in e,n="selectedIndex"in e;!i&&n&&(this.value=this._getValue(e)||"")}shouldUpdate(e){return e.has("items")&&!D(this.items)?(this.throwErrorAfterUpdateComplete(y.ITEMS.IS_NOT_ARRAY),!1):e.has("value")&&!_i(this.value)?(this.throwErrorAfterUpdateComplete(y.VALUE.IS_NOT_STRING),!1):e.has("selectedIndex")&&!Kt(this.selectedIndex)?(this.throwErrorAfterUpdateComplete(y.SELECTED_INDEX.IS_NOT_NUMBER),!1):!0}_findItemToFocus(){let e=-1;for(let i=0;i<this.items.length;i++){const n=this.items[i];if(!n.disabled){if(this.selectedIndex===i&&n.value===this.value){e=i;continue}e===-1&&(e=i)}}return e}willUpdate(e){if(e.has("value")){if(this.value!=="")return;this.selectedIndex=-1}}_handleChangeInput(e){e.stopPropagation();const i=e.target,n=i.value,a=i.dataset.index||"0",s=parseInt(a,10);if(this.value===n&&this.selectedIndex===s)return;const r={oldValue:this.value,value:n};this.value=n,this.selectedIndex=s,m(this,"change",r)}_handleFocusInput(e){e.target.parentNode.setAttribute("focused","")}_handleBlurInput(e){e.target.parentNode.removeAttribute("focused")}_getRadioIconSvgTemplate(e,i){return C`
    <svg
      class="kuc-radio-button-1-23-1__group__select-menu__item__label__icon"
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="10.5"
        cy="10.5"
        r="10"
        fill="white"
        stroke="#e3e7e8" stroke-width="1"/>
      ${i?C`<circle cx="10.5" cy="10.5" r="6.5" fill="${e?"#e3e7e8":"#3498db"}"/>`:""}
    </svg>
  `}_isCheckedItem(e,i){return this.value?e.value===this.value&&this.selectedIndex===i:this.selectedIndex===i}_getItemTemplate(e,i){const n=this._isCheckedItem(e,i),a=e.disabled||this.disabled,s=e.value!==void 0?e.value:"",r=i===this._findItemToFocus()?"0":"-1";return p`
        <div
          class="kuc-radio-button-1-23-1__group__select-menu__item"
          itemLayout="${this.itemLayout}"
        >
          <input
            type="radio"
            aria-checked="${n?"true":"false"}"
            aria-describedby="${this._GUID}-error"
            data-index="${i}"
            id="${this._GUID}-item-${i}"
            class="kuc-radio-button-1-23-1__group__select-menu__item__input"
            name="${this._GUID}-group"
            value="${s}"
            tabindex="${r}"
            aria-required="${this.requiredIcon}"
            ?disabled="${a}"
            @change="${this._handleChangeInput}"
            @focus="${this._handleFocusInput}"
            @blur="${this._handleBlurInput}"
          />
          <label
            class="kuc-radio-button-1-23-1__group__select-menu__item__label"
            for="${this._GUID}-item-${i}"
            >${this._getRadioIconSvgTemplate(a,n)}${e.label===void 0?e.value:e.label}
          </label>
        </div>
      `}update(e){(e.has("items")||e.has("value")||e.has("selectedIndex"))&&(this.selectedIndex=this._getSelectedIndex(),this.value=this._getValue({items:this.items,selectedIndex:this.selectedIndex})||""),super.update(e)}render(){return p`
        <div
          class="kuc-radio-button-1-23-1__group"
          role="radiogroup"
          aria-labelledby="${this._GUID}-group"
        >
          <div class="kuc-radio-button-1-23-1__group__label" ?hidden="${!this.label}">
            <kuc-base-label-1-23-1
              .text="${this.label}"
              .guid="${this._GUID}"
              .requiredIcon="${this.requiredIcon}"
            ></kuc-base-label-1-23-1>
          </div>
          <div
            class="kuc-radio-button-1-23-1__group__select-menu"
            ?borderVisible="${this.borderVisible}"
            itemLayout="${this.itemLayout}"
          >
            ${this.items.map((e,i)=>this._getItemTemplate(e,i))}
          </div>
          <kuc-base-error-1-23-1
            .text="${this.error}"
            .guid="${this._GUID}"
            ?hidden="${!this.error}"
            ariaLive="assertive"
          ></kuc-base-error-1-23-1>
        </div>
      `}updated(){this._inputEls.forEach((e,i)=>{e.checked=this.value===e.value&&i===this.selectedIndex})}_getSelectedIndex(){if(!this.value)return this.items[this.selectedIndex]?this.selectedIndex:-1;const e=this.items.findIndex(n=>n.value===this.value);if(e===-1)return-1;const i=this.items.findIndex((n,a)=>n.value===this.value&&a===this.selectedIndex);return i>-1?i:e}_getValue(e){const i=e.items||[],n=e.selectedIndex===0||e.selectedIndex?e.selectedIndex:-1,a=i[n];return a?a.value:""}}ve([u({type:String,reflect:!0,attribute:"class"})],o.prototype,"className",void 0),ve([u({type:String})],o.prototype,"error",void 0),ve([u({type:String,reflect:!0,attribute:"id"})],o.prototype,"id",void 0),ve([u({type:String})],o.prototype,"itemLayout",void 0),ve([u({type:String})],o.prototype,"label",void 0),ve([u({type:String})],o.prototype,"value",void 0),ve([u({type:Number})],o.prototype,"selectedIndex",void 0),ve([u({type:Boolean})],o.prototype,"borderVisible",void 0),ve([u({type:Boolean})],o.prototype,"disabled",void 0),ve([u({type:Boolean})],o.prototype,"requiredIcon",void 0),ve([u({type:Boolean,attribute:"hidden",reflect:!0,converter:V})],o.prototype,"visible",void 0),ve([u({type:Array})],o.prototype,"items",void 0),ve([q(".kuc-radio-button-1-23-1__group__select-menu__item__input")],o.prototype,"_inputEls",void 0),window.customElements.define("kuc-radio-button-1-23-1",o),x(vc),xn=o})();const kc=`
  .kuc-base-pagination-1-23-1__group {
    margin-top: 10px;
  }
  .kuc-base-pagination-1-23-1__group button {
    cursor: pointer;
  }
  .kuc-base-pagination-1-23-1__group__pager-prev {
    border: none;
    background-color: transparent;
    visibility: visible;
    height: 23px;
    vertical-align: middle;
  }
  .kuc-base-pagination-1-23-1__group__pager-next {
    border: none;
    background-color: transparent;
    visibility: visible;
    height: 23px;
    vertical-align: middle;
  }
  .kuc-base-pagination-1-23-1__group__pager-next:hover svg path,
  .kuc-base-pagination-1-23-1__group__pager-prev:hover svg path,
  .kuc-base-pagination-1-23-1__group__pager-next:focus-visible svg path,
  .kuc-base-pagination-1-23-1__group__pager-prev:focus-visible svg path
  {
    fill: #3498db;
  }
  .kuc-base-pagination-1-23-1__group__pager--focus,
  .kuc-base-pagination-1-23-1__group__pager-next:focus-visible,
  .kuc-base-pagination-1-23-1__group__pager-prev:focus-visible {
    outline: 1px solid #3498db;
  }
  .kuc-base-pagination-1-23-1__group__pager--horver svg path {
    fill: #3498db;
  }
  .kuc-base-pagination-1-23-1__group__pager-next svg,
  .kuc-base-pagination-1-23-1__group__pager-prev svg {
    margin-top: 3px;
  }
  .kuc-base-pagination-1-23-1__group__pager-disable {
    visibility: hidden;
  }
  .kuc-base-pagination-1-23-1__group__pager-current {
    display: inline-block;
    height: 23px;
    line-height: 23px;
    vertical-align: middle;
    font-size: 14px;
    color: #333333;
  }
`;var Lt=function(o,t,e,i){var n=arguments.length,a=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(o,t,e,i);else for(var r=o.length-1;r>=0;r--)(s=o[r])&&(a=(n<3?s(a):n>3?s(t,e,a):s(t,e))||a);return n>3&&a&&Object.defineProperty(t,e,a),a};let yn;(()=>{if(yn=window.customElements.get("kuc-base-pagination-1-23-1"),yn)return;class o extends k{constructor(){super(...arguments),this.pagePosition=1,this.rowsPerPage=5,this.total=1,this.isNext=!0,this.isPrev=!0,this.visible=!0}render(){return p`
        <div class="kuc-base-pagination-1-23-1__group" ?hidden="${!this.visible}">
          <button
            title="previous"
            class="kuc-base-pagination-1-23-1__group__pager-prev${this.isPrev?"":" kuc-base-pagination-1-23-1__group__pager-disable"}"
            type="button"
            @click="${this._handleClickPrevButton}"
            @focus="${this._handleFocusPrevButton}"
            @blur="${this._handleBlurPrevButton}"
            @mouseover="${this._handleMouseOverPrevButton}"
            @mouseleave="${this._handleMouseLeavePrevButton}"
          >
            ${this._getPrevButtonSvgTemplate()}</button
          >${this._getCurrentPageNumberTemplate()}<button
            title="next"
            class="kuc-base-pagination-1-23-1__group__pager-next${this.isNext?"":" kuc-base-pagination-1-23-1__group__pager-disable"}"
            type="button"
            @click="${this._handleClickNextButton}"
            @focus="${this._handleFocusNextButton}"
            @blur="${this._handleBlurNextButton}"
            @mouseover="${this._handleMouseOverNextButton}"
            @mouseleave="${this._handleMouseLeaveNextButton}"
          >
            ${this._getNextButtonSvgTemplate()}
          </button>
        </div>
      `}_handleClickPrevButton(e){e.stopPropagation(),m(this,"kuc:pagination-click-prev")}_handleFocusPrevButton(){this._prevButtonEl.classList.add("kuc-base-pagination-1-23-1__group__pager--focus")}_handleBlurPrevButton(){this._prevButtonEl.classList.remove("kuc-base-pagination-1-23-1__group__pager--focus")}_handleMouseOverPrevButton(){this._prevButtonEl.classList.add("kuc-base-pagination-1-23-1__group__pager--horver")}_handleMouseLeavePrevButton(){this._prevButtonEl.classList.remove("kuc-base-pagination-1-23-1__group__pager--horver")}_handleClickNextButton(e){e.stopPropagation(),m(this,"kuc:pagination-click-next")}_handleFocusNextButton(){this._nextButtonEl.classList.add("kuc-base-pagination-1-23-1__group__pager--focus")}_handleBlurNextButton(){this._nextButtonEl.classList.remove("kuc-base-pagination-1-23-1__group__pager--focus")}_handleMouseOverNextButton(){this._nextButtonEl.classList.add("kuc-base-pagination-1-23-1__group__pager--horver")}_handleMouseLeaveNextButton(){this._nextButtonEl.classList.remove("kuc-base-pagination-1-23-1__group__pager--horver")}_getPrevButtonSvgTemplate(){return C`
        <svg
          width="9"
          height="15"
          viewBox="0 0 9 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1.99061 7.5L9 0.0604158L7.06632 0L0 7.5L7.06632 15L9 14.9396L1.99061 7.5Z"
            fill="#888888"
          />
        </svg>
      `}_getNextButtonSvgTemplate(){return C`
      <svg
        width="9"
        height="15"
        viewBox="0 0 9 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7.00939 7.5L0 0.0604158L1.93368 0L9 7.5L1.93368 15L0 14.9396L7.00939 7.5Z"
          fill="#888888"
        />
      </svg>
      `}_getCurrentPageNumberTemplate(){const e=this._createCurrentPageInfo(),i=`${e.firstNum} - ${e.lastNum} / ${this.total}`;return p`<span class="kuc-base-pagination-1-23-1__group__pager-current"
        >${i}</span
      >`}_createCurrentPageInfo(){const e=(this.pagePosition-1)*this.rowsPerPage+1;let i=this.pagePosition*this.rowsPerPage;return i=i>this.total?this.total:i,{firstNum:e,lastNum:i}}}Lt([u({type:Number})],o.prototype,"pagePosition",void 0),Lt([u({type:Number})],o.prototype,"rowsPerPage",void 0),Lt([u({type:Number})],o.prototype,"total",void 0),Lt([u({type:Boolean})],o.prototype,"isNext",void 0),Lt([u({type:Boolean})],o.prototype,"isPrev",void 0),Lt([u({type:Boolean,attribute:"hidden",reflect:!0,converter:V})],o.prototype,"visible",void 0),Lt([b(".kuc-base-pagination-1-23-1__group__pager-prev")],o.prototype,"_prevButtonEl",void 0),Lt([b(".kuc-base-pagination-1-23-1__group__pager-next")],o.prototype,"_nextButtonEl",void 0),window.customElements.define("kuc-base-pagination-1-23-1",o),x(kc),yn=o})();const xc=`
  kuc-readonly-table-1-23-1 ,
  kuc-readonly-table-1-23-1  *,
  kuc-readonly-table-1-23-1:lang(en),
  kuc-readonly-table-1-23-1:lang(en) * {
    font-family: sans-serif;
  }
  kuc-readonly-table-1-23-1:lang(es),
  kuc-readonly-table-1-23-1:lang(es) * {
    font-family: sans-serif;
  }
  kuc-readonly-table-1-23-1:lang(ja),
  kuc-readonly-table-1-23-1:lang(ja) * {
      font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
      sans-serif;
  }
  kuc-readonly-table-1-23-1:lang(zh),
  kuc-readonly-table-1-23-1:lang(zh) * {
      font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", sans-serif;
  }
  kuc-readonly-table-1-23-1:lang(zh-TW),
  kuc-readonly-table-1-23-1:lang(zh-TW) * {
    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC",sans-serif;
  }
  kuc-readonly-table-1-23-1 {
    font-size: 14px;
    color: #333333;
    display: block;
  }
  kuc-readonly-table-1-23-1[hidden] {
    display: none;
  }
  .kuc-readonly-table-1-23-1__table {
    border-collapse: collapse;
    table-layout: fixed;
    width: 100%;
    display: inline-block;
  }
  .kuc-readonly-table-1-23-1__table__header {
    border-width: 0px 1px;
    border-color: var(--kuc-readonly-table-header-background-color, #3498db);
    border-style: solid;
  }
  .kuc-readonly-table-1-23-1__table__header__cell--sort.kuc-readonly-table-1-23-1__table__header__cell--first-visible:hover {
    border-left: 1px solid var(--kuc-readonly-table-header-background-color-hover, #1d6fa5);
  }
  .kuc-readonly-table-1-23-1__table__header__cell--sort.kuc-readonly-table-1-23-1__table__header__cell--last-visible:hover {
    border-right: 1px solid var(--kuc-readonly-table-header-background-color-hover, #1d6fa5);
  }
  .kuc-readonly-table-1-23-1__table__header__cell--sort.kuc-readonly-table-1-23-1__table__header__cell--first-visible:focus-visible {
    border-left: 1px solid var(--kuc-readonly-table-header-background-color-focus, #1d6fa5);
  }
  .kuc-readonly-table-1-23-1__table__header__cell--sort.kuc-readonly-table-1-23-1__table__header__cell--last-visible:focus-visible {
    border-right: 1px solid var(--kuc-readonly-table-header-background-color-focus, #1d6fa5);
  }
  .kuc-readonly-table-1-23-1__table__header__cell--sorted-asc.kuc-readonly-table-1-23-1__table__header__cell--first-visible,
  .kuc-readonly-table-1-23-1__table__header__cell--sorted-desc.kuc-readonly-table-1-23-1__table__header__cell--first-visible {
    border-left: 1px solid var(--kuc-readonly-table-header-background-color-sorted, #1d6fa5);
  }
  .kuc-readonly-table-1-23-1__table__header__cell--sorted-asc.kuc-readonly-table-1-23-1__table__header__cell--last-visible,
  .kuc-readonly-table-1-23-1__table__header__cell--sorted-desc.kuc-readonly-table-1-23-1__table__header__cell--last-visible {
    border-right: 1px solid var(--kuc-readonly-table-header-background-color-sorted, #1d6fa5);
  }
  .kuc-readonly-table-1-23-1__table__label {
    text-align: left;
    white-space: normal;
    overflow-wrap: anywhere;
    padding: 4px 0px;
  }
  .kuc-readonly-table-1-23-1__table__label[hidden] {
    display: none;
  }
  .kuc-readonly-table-1-23-1__table__label--no-column {
    overflow-wrap: break-word;
  }
  .kuc-readonly-table-1-23-1__table__header__cell {
    background-color: var(--kuc-readonly-table-header-background-color, #3498db);
    color: var(--kuc-readonly-table-header-color, #ffffff);
    height: var(--kuc-readonly-table-header-height, 40px);
    box-sizing: border-box;
    text-align: left;
    overflow: auto;
    white-space: nowrap;
    word-wrap: break-word;
    padding: 4px 8px;
    font-weight: 400;
    font-size: var(--kuc-readonly-table-header-font-size, 12px);
  }
  .kuc-readonly-table-1-23-1__table__header__cell--html {
    white-space: normal;
    overflow: unset;
  }
  .kuc-readonly-table-1-23-1__table__header__cell[hidden] {
    display: none;
  }
  .kuc-readonly-table-1-23-1__table__header__cell__wrapper {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  .kuc-readonly-table-1-23-1__table__header__cell__wrapper__title {
    flex: 1;
    min-width: 0;
  }
  .kuc-readonly-table-1-23-1__table__header__cell__wrapper__title--html {
    white-space: normal;
  }
  .kuc-readonly-table-1-23-1__table__header__cell__wrapper__sort-icon {
    flex-shrink: 0;
    margin-left: 4px;
    display: flex;
    align-items: center;
    align-self: center;
  }
  .kuc-readonly-table-1-23-1__table__body {
    vertical-align: top;
  }
  .kuc-readonly-table-1-23-1__table__body>.kuc-readonly-table-1-23-1__table__body__row:first-child>.kuc-readonly-table-1-23-1__table__body__row__cell-data {
    border-top-width: 0px;
  }
  .kuc-readonly-table-1-23-1__table__body__row__cell-data {
    box-sizing: border-box;
    padding: 4px 8px;
    white-space: pre-wrap;
    overflow-wrap: break-word;
    border-color: #e3e7e8;
    border-style: solid;
    border-width: 1px;
  }
  .kuc-readonly-table-1-23-1__table__body__row__cell-data[hidden] {
    display: none;
  }
  .kuc-readonly-table-1-23-1__table__header__cell,
  .kuc-readonly-table-1-23-1__table__body__row__cell-data {
    scrollbar-width: none; /* Firefox */
  }
  .kuc-readonly-table-1-23-1__table__header__cell::-webkit-scrollbar,
  .kuc-readonly-table-1-23-1__table__body__row__cell-data::-webkit-scrollbar {
    width: 0; /* Safari and Chrome */
    display: none
  }
  .kuc-readonly-table-1-23-1__table__body__row__cell-data--html {
    white-space: normal;
  }
  .kuc-readonly-table-1-23-1__table__header__cell--sort {
    cursor: pointer;
    user-select: none;
  }
  .kuc-readonly-table-1-23-1__table__header__cell--sort:hover {
    background-color: var(--kuc-readonly-table-header-background-color-hover, #1d6fa5);
  }
  .kuc-readonly-table-1-23-1__table__header__cell--sort:focus-visible {
    outline: none;
    background-color: var(--kuc-readonly-table-header-background-color-focus, #1d6fa5);
  }
  .kuc-readonly-table-1-23-1__table__header__cell--sorted-asc,
  .kuc-readonly-table-1-23-1__table__header__cell--sorted-desc {
    background-color: var(--kuc-readonly-table-header-background-color-sorted, #1d6fa5);
  }
`;var Ae=function(o,t,e,i){var n=arguments.length,a=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(o,t,e,i);else for(var r=o.length-1;r>=0;r--)(s=o[r])&&(a=(n<3?s(a):n>3?s(t,e,a):s(t,e))||a);return n>3&&a&&Object.defineProperty(t,e,a),a};let wn;(()=>{if(wn=window.customElements.get("kuc-readonly-table-1-23-1"),wn)return;class o extends k{constructor(e){if(super(),this.className="",this.id="",this.label="",this.columns=[],this.data=[],this.pagination=!0,this.rowsPerPage=5,this.visible=!0,this._pagePosition=1,this._columnOrder=[],this._sortField=null,this._sortDirection=null,!e)return;const i=$(e);Object.assign(this,i)}shouldUpdate(e){return e.has("columns")&&!D(this.columns)?(this.throwErrorAfterUpdateComplete(y.COLUMNS.IS_NOT_ARRAY),!1):e.has("data")&&!D(this.data)?(this.throwErrorAfterUpdateComplete(y.DATA.IS_NOT_ARRAY),!1):e.has("rowsPerPage")&&!cn(this.rowsPerPage)?(this.throwErrorAfterUpdateComplete(y.ROWS_PER_PAGE.INVALID),!1):!0}willUpdate(e){e.has("columns")&&(this._columnOrder=[],this.columns.map(i=>this._columnOrder.push(i.field?i.field:""))),e.has("rowsPerPage")&&(this.rowsPerPage=Math.round(this.rowsPerPage))}render(){const e=this._createDisplayData();return!this.columns||this.columns.length<1?p`
            <table class="kuc-readonly-table-1-23-1__table">
              <caption
                class="kuc-readonly-table-1-23-1__table__label kuc-readonly-table-1-23-1__table__label--no-column"
                ?hidden="${!this.label}"
              >
                ${this.label}
              </caption>
            </table>
          `:p`
            <table class="kuc-readonly-table-1-23-1__table">
              <caption
                class="kuc-readonly-table-1-23-1__table__label"
                ?hidden="${!this.label}"
              >
                ${this.label}
              </caption>
              <thead class="kuc-readonly-table-1-23-1__table__header">
                <tr>
                  ${this.columns.map((i,n)=>this._getColumnsTemplate(i,n))}
                </tr>
              </thead>
              <tbody class="kuc-readonly-table-1-23-1__table__body">
                ${e.map((i,n)=>this._getDataTemplate(i,n))}
              </tbody>
            </table>
            <kuc-base-pagination-1-23-1
              .pagePosition="${this._pagePosition}"
              .rowsPerPage="${this.rowsPerPage}"
              .total="${this.data.length}"
              .visible="${this.pagination}"
              .isPrev="${this._toggleDisplayPreviousButton()}"
              .isNext="${this._toggleDisplayNextButton()}"
              @kuc:pagination-click-prev=${this._handleClickPreviousButton}
              @kuc:pagination-click-next=${this._handleClickNextButton}
            ></kuc-base-pagination-1-23-1>
          `}_createDisplayData(){let e=[...this.data];if(this._sortField&&this._sortDirection&&(e=this._sortData(e,this._sortField,this._sortDirection)),!this.pagination)return e;const i=(this._pagePosition-1)*this.rowsPerPage+1,n=this._pagePosition*this.rowsPerPage;return e.filter((a,s)=>s>=i-1&&s<=n-1)}_sortData(e,i,n){return[...e].sort((a,s)=>{const r=a[i],l=s[i],c=oe(r),d=oe(l);if(c&&d)return 0;if(c)return 1;if(d)return-1;if(r==null&&l==null)return 0;if(r==null)return 1;if(l==null)return-1;if(typeof r=="number"&&typeof l=="number")return n==="asc"?r-l:l-r;if(typeof r=="string"&&typeof l=="string"&&gt(r)&&gt(l)){const g=new Date(r),E=new Date(l);if(!isNaN(g.getTime())&&!isNaN(E.getTime()))return n==="asc"?g.getTime()-E.getTime():E.getTime()-g.getTime()}const h=String(r),_=String(l),f=new Intl.Collator(void 0,{numeric:!0,sensitivity:"base"});return n==="asc"?f.compare(h,_):f.compare(_,h)})}_handleClickHeader(e){this._sortFields(e)}_handleKeyDownHeader(e,i){(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this._sortFields(i))}_sortFields(e){const i=this._columnOrder.indexOf(e);i<0||!this.columns[i].sort||(this._sortField===e?this._sortDirection=this._sortDirection==="asc"?"desc":"asc":(this._sortField=e,this._sortDirection="asc"),this._pagePosition=1)}_customWidthVariables(e){return`var(--kuc-readonly-table-header-${e}-width, var(--kuc-readonly-table-header-width, auto))`}_getColumnsTemplate(e,i){var n;const a=this._customWidthVariables(i),s=e.title?oe(e.title):!1,r=e.field||"",l=e.sort===!0,c=this._sortField===r,d=this.columns.map((g,E)=>g.visible!==!1?E:-1).filter(g=>g!==-1),h=i===d[0],_=i===d[d.length-1],f=c?` kuc-readonly-table-1-23-1__table__header__cell--sorted-${this._sortDirection}`:"";return p`
        <th
          class="kuc-readonly-table-1-23-1__table__header__cell${s?" kuc-readonly-table-1-23-1__table__header__cell--html":""}${l?" kuc-readonly-table-1-23-1__table__header__cell--sort":""}${f}${h?" kuc-readonly-table-1-23-1__table__header__cell--first-visible":""}${_?" kuc-readonly-table-1-23-1__table__header__cell--last-visible":""}"
          ?hidden="${e.visible===!1}"
          style="width: ${a}; min-width: ${a}; max-width: ${a};"
          @click="${l?()=>this._handleClickHeader(r):null}"
          tabindex="${l?0:-1}"
          aria-sort="${c?this._getSortDescription(this._sortDirection):"none"}"
          @keydown="${l?g=>this._handleKeyDownHeader(g,r):null}"
        >
          <div class="kuc-readonly-table-1-23-1__table__header__cell__wrapper">
            <div
              class="kuc-readonly-table-1-23-1__table__header__cell__wrapper__title${s?" kuc-readonly-table-1-23-1__table__header__cell__wrapper__title--html":""}"
            >
              ${s?be(e.title):(n=e.title)!==null&&n!==void 0?n:""}
            </div>
            ${l&&c?p`<div
                  class="kuc-readonly-table-1-23-1__table__header__cell__wrapper__sort-icon"
                >
                  ${this._getSortSvgIcon(this._sortDirection)}
                </div>`:""}
          </div>
        </th>
      `}_getSortDescription(e){return e==="desc"?"descending":e==="asc"?"ascending":"none"}_getSortSvgIcon(e){return e==="desc"?C`<svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align: middle;">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.99996 0H5.99996V10.6011L1.4528 5.78021L0.725342 6.46637L6.57169 12.6647L12.1902 6.45887L11.4489 5.78771L6.99996 10.7017V0Z" fill="white"/>
        </svg>
        `:e==="asc"?C`<svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align: middle;">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M6.99996 13H5.99996V2.3989L1.4528 7.21979L0.725342 6.53363L6.57169 0.3353L12.1902 6.54113L11.4489 7.21229L6.99996 2.2983V13Z" fill="white"/>
      </svg>`:""}_getDataTemplate(e,i){return p`
        <tr
          class="kuc-readonly-table-1-23-1__table__body__row kuc-readonly-table-1-23-1__table__body__row-${i}"
        >
          ${this._columnOrder.map((n,a)=>{var s;const r=(s=this.columns[a].visible)!==null&&s!==void 0?s:!0;let l=e[n];oe(l)&&(l=p`<div
                class="kuc-readonly-table-1-23-1__table__body__row__cell-data--html"
              >
                ${be(l)}
              </div>`);const c=this._customWidthVariables(a);return p`<td class="kuc-readonly-table-1-23-1__table__body__row__cell-data" ?hidden="${!r}" style="width: ${c}; min-width: ${c}; max-width: ${c}">${l}</td>`})}
        </tr>
      `}_toggleDisplayPreviousButton(){return this._pagePosition>1}_toggleDisplayNextButton(){return this._pagePosition<this.data.length/this.rowsPerPage}_handleClickPreviousButton(e){if(!(this._pagePosition<2)){if(!cn(this.rowsPerPage)){this.throwErrorAfterUpdateComplete(y.ROWS_PER_PAGE.INVALID);return}this._pagePosition-=1}}_handleClickNextButton(e){if(!cn(this.rowsPerPage)){this.throwErrorAfterUpdateComplete(y.ROWS_PER_PAGE.INVALID);return}this._toggleDisplayNextButton()!==!1&&(this._pagePosition+=1)}}Ae([u({type:String,reflect:!0,attribute:"class"})],o.prototype,"className",void 0),Ae([u({type:String,reflect:!0,attribute:"id"})],o.prototype,"id",void 0),Ae([u({type:String})],o.prototype,"label",void 0),Ae([u({type:Array})],o.prototype,"columns",void 0),Ae([u({type:Array})],o.prototype,"data",void 0),Ae([u({type:Boolean})],o.prototype,"pagination",void 0),Ae([u({type:Number})],o.prototype,"rowsPerPage",void 0),Ae([u({type:Boolean,attribute:"hidden",reflect:!0,converter:V})],o.prototype,"visible",void 0),Ae([v()],o.prototype,"_pagePosition",void 0),Ae([v()],o.prototype,"_columnOrder",void 0),Ae([v()],o.prototype,"_sortField",void 0),Ae([v()],o.prototype,"_sortDirection",void 0),window.customElements.define("kuc-readonly-table-1-23-1",o),x(xc),wn=o})();const yc=`
  kuc-spinner-1-23-1,
  kuc-spinner-1-23-1 *,
  kuc-spinner-1-23-1:lang(en),
  kuc-spinner-1-23-1:lang(en) * {
    font-family: sans-serif;
  }
  kuc-spinner-1-23-1:lang(es),
  kuc-spinner-1-23-1:lang(es) * {
    font-family: sans-serif;
  }
  kuc-spinner-1-23-1:lang(ja),
  kuc-spinner-1-23-1:lang(ja) * {
    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
      sans-serif;
  }
  kuc-spinner-1-23-1:lang(zh),
  kuc-spinner-1-23-1:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", sans-serif;
  }
  kuc-spinner-1-23-1:lang(zh-TW),
  kuc-spinner-1-23-1:lang(zh-TW) * {
    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC",sans-serif;
  }
  kuc-spinner-1-23-1 {
    font-size: 14px;
    color: #333333;
  }
  .kuc-spinner-1-23-1__spinner {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10000;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .kuc-spinner-1-23-1__spinner__loader {
    width: var(--kuc-spinner-loader-width, 50px);
    height: var(--kuc-spinner-loader-height, 50px);
    animation: rotate-loading 1s steps(12) infinite;
    fill: var(--kuc-spinner-loader-color, #99ccff);
  }
  .kuc-spinner-1-23-1__spinner__text {
    margin: 10px 0;
    font-size: var(--kuc-spinner-text-font-size, 14px);
    color: var(--kuc-spinner-text-color, #333333);
  }
  .visually-hidden {
    position: absolute;
    white-space: nowrap;
    width: 1px;
    height: 1px;
    overflow: hidden;
    border: 0;
    padding: 0;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    margin: -1px;
  }
  .kuc-spinner-1-23-1__mask {
    position: fixed;
    top: 0;
    right: 0;
    display: block;
    width: 100%;
    height: 100%;
    background-color: #666666;
    opacity: 0.6;
    z-index: 9999;
  }
  .kuc--has-spinner {
    overflow: hidden;
  }
  @keyframes rotate-loading {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;var Eo=function(o,t,e,i){var n=arguments.length,a=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(o,t,e,i);else for(var r=o.length-1;r>=0;r--)(s=o[r])&&(a=(n<3?s(a):n>3?s(t,e,a):s(t,e))||a);return n>3&&a&&Object.defineProperty(t,e,a),a};let Cn;(()=>{if(Cn=window.customElements.get("kuc-spinner-1-23-1"),Cn)return;class o extends k{constructor(e){super(),this.className="",this.id="",this.text="",this.container=document.body,this._isOpened=!1;const i=$(e);Object.assign(this,i)}_getSpinnerSvgTemplate(){return C`
        <svg
          class="kuc-spinner-1-23-1__spinner__loader"
          viewBox="0 0 50 50"
          aria-hidden="true"
        >
          <circle r="4" cx="30.43" cy="4.72" opacity="0.3" />
          <circle r="4" cx="39.85" cy="10.15" opacity="0.3" />
          <circle r="4" cx="45.28" cy="19.56" opacity="0.3" />
          <circle r="4" cx="45.28" cy="30.43" opacity="0.3" />
          <circle r="4" cx="39.85" cy="39.85" opacity="0.3" />
          <circle r="4" cx="30.44" cy="45.28" opacity="0.4" />
          <circle r="4" cx="19.56" cy="45.28" opacity="0.5" />
          <circle r="4" cx="10.15" cy="39.85" opacity="0.6" />
          <circle r="4" cx="4.7" cy="30.44" opacity="0.7" />
          <circle r="4" cx="4.7" cy="19.56" opacity="0.8" />
          <circle r="4" cx="10.15" cy="10.15" opacity="0.9" />
          <circle r="4" cx="19.56" cy="4.72" opacity="1" />
        </svg>
      `}_isValidContainerElement(){return this.container instanceof HTMLElement}open(){if(!this._isValidContainerElement()){document.body.appendChild(this),requestAnimationFrame(()=>{document.body.removeChild(this)}),this.performUpdate();return}this.parentElement&&this.parentElement.classList.remove("kuc--has-spinner"),this.container.appendChild(this),this.performUpdate(),this.container.classList.contains("kuc--has-spinner")||this.container.classList.add("kuc--has-spinner"),this._isOpened=!0}close(){this.parentElement&&this.parentElement.classList.remove("kuc--has-spinner"),this._isOpened=!1,this.parentNode&&this.parentNode.removeChild(this)}shouldUpdate(e){if(e.has("container")){if(this.container===null||this.container===void 0)return this._isOpened&&this.close(),!1;const i=this._isValidContainerElement(),n=!i||!document.contains(this.container);if(this._isOpened&&n&&this.close(),!i)return this.throwErrorAfterUpdateComplete(y.CONTAINER.INVALID),!1}return!0}render(){return p`
        <div class="kuc-spinner-1-23-1__spinner" aria-live="assertive" role="alert">
          ${this._getSpinnerSvgTemplate()}
          <div
            class="kuc-spinner-1-23-1__spinner__text${this.text?"":" visually-hidden"}"
          >
            ${this.text?this.text:"now loading…"}
          </div>
        </div>
        <div class="kuc-spinner-1-23-1__mask"></div>
      `}}Eo([u({type:String,reflect:!0,attribute:"class"})],o.prototype,"className",void 0),Eo([u({type:String,reflect:!0,attribute:"id"})],o.prototype,"id",void 0),Eo([u({type:String})],o.prototype,"text",void 0),Eo([u()],o.prototype,"container",void 0),window.customElements.define("kuc-spinner-1-23-1",o),x(yc),Cn=o})();const wc=`
  kuc-table-1-23-1,
  kuc-table-1-23-1 *,
  kuc-table-1-23-1:lang(en),
  kuc-table-1-23-1:lang(en) * {
    font-family: sans-serif;
  }
  kuc-table-1-23-1:lang(es),
  kuc-table-1-23-1:lang(es) * {
    font-family: sans-serif;
  }
  kuc-table-1-23-1:lang(ja),
  kuc-table-1-23-1:lang(ja) * {
    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
      sans-serif;
  }
  kuc-table-1-23-1:lang(zh),
  kuc-table-1-23-1:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", sans-serif;
  }
  kuc-table-1-23-1:lang(zh-TW),
  kuc-table-1-23-1:lang(zh-TW) * {
    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC",sans-serif;
  }
  kuc-table-1-23-1 {
    font-size: 14px;
    color: #333333;
    display: block;
  }
  kuc-table-1-23-1[hidden] {
    display: none;
  }
  kuc-table-1-23-1 kuc-* {
    line-height: 1;
  }
  .kuc-table-1-23-1__table {
    border-collapse: separate;
    border-spacing: 0;
  }
  .kuc-table-1-23-1__table__header {
    border-width: 0px 1px;
    border-color: var(--kuc-table-header-background-color, #3498db);
    border-style: solid;
    border-right: 0;
  }
  .kuc-table-1-23-1__table__header[hidden] {
    display: none;
  }
  .kuc-table-1-23-1__table__header__cell {
    box-sizing: border-box;
    font-size: var(--kuc-table-header-font-size, 12px);
    font-weight: 400;
    background-color: var(--kuc-table-header-background-color, #3498db);
    color: var(--kuc-table-header-color, #ffffff);
    height: var(--kuc-table-header-height, 40px);
    padding: 4px 8px;
    text-align: left;
    white-space: normal;
  }
  .kuc-table-1-23-1__table__header__cell-title {
    overflow-wrap: break-word;
    display: flex;
    align-items: center;
  }
  .kuc-table-1-23-1__table__header__cell[hidden] {
    display: none;
  }
  .kuc-table-1-23-1__table__header__cell .kuc-base-label-1-23-1__required-icon {
    font-size: var(--kuc-table-header-font-size, 20px);
    align-self: flex-start;
  }
  .kuc-table-1-23-1__table__header__cell__action--right {
    box-shadow: -2px 0 4px 0 rgba(0, 0, 0, 8%);
    position: sticky;
    right: var(--kuc-table-action-button-right, 0px);
  }
  .kuc-table-1-23-1__table__header__cell__action--left {
    box-shadow: 2px 0 4px 0 rgba(0, 0, 0, 8%);
    position: sticky;
    left: var(--kuc-table-action-button-left, 0px);
    z-index: 1;
  }
  .kuc-table-1-23-1__table__body__row__cell-data {
    box-sizing: border-box;
    overflow-wrap: break-word;
    white-space: normal;
    border-color: #e3e7e8;
    border-style: solid;
    border-width: 0 1px 1px;
    padding: 8px 8px;
    vertical-align: top;
  }
  .kuc-table-1-23-1__table__body--no-header>.kuc-table-1-23-1__table__body__row:first-child>.kuc-table-1-23-1__table__body__row__cell-data {
    border-top-width: 1px;
  }
  .kuc-table-1-23-1__table__body__row__cell-data:not(.kuc-table-1-23-1__table__body__row__cell-data[hidden])~.kuc-table-1-23-1__table__body__row__cell-data {
    border-left-width: 0px;
  }
  .kuc-table-1-23-1__table__body__row__cell-data[hidden] {
    display: none;
  }
  .kuc-table-1-23-1__table__body__row__action {
    white-space: nowrap;
    background-color: var(--kuc-table-action-button-background-color, #f5f5f5);
    vertical-align: middle;
    position: sticky;
    border-color: #e3e7e8;
    border-style: solid;
    border-width: 0 0 1px;
  }
  .kuc-table-1-23-1__table__body--no-header>.kuc-table-1-23-1__table__body__row:first-child>.kuc-table-1-23-1__table__body__row__action {
    border-top-width: 1px;
  }
  .kuc-table-1-23-1__table__body__row__action--right {
    box-shadow: -2px 0 4px 0 rgba(0, 0, 0, 8%);
    right: var(--kuc-table-action-button-right, 0px);
    border-right-width: 1px;
  }
  .kuc-table-1-23-1__table__body__row__action--left {
    box-shadow: 2px 0 4px 0 rgba(0, 0, 0, 8%);
    left: var(--kuc-table-action-button-left, 0px);
    border-left-width: 1px;
    z-index: 1;
  }
  .kuc-table-1-23-1__table__body__row__action button {
    display: inline-block;
    align-items: center;
    width: 24px;
    height: 24px;
    background: transparent;
    border: 1px solid transparent;
    padding: 2px;
    cursor: pointer;
  }
  .kuc-table-1-23-1__table__body__row__action button[hidden] {
    display: none;
  }
  .kuc-table-1-23-1__table__body__row__action-add {
    margin-left: 8px;
    margin-right: 8px;
  }
  .kuc-table-1-23-1__table__body__row__action-remove {
    margin-left: 4px;
    margin-right: 8px;
  }
  .kuc-table-1-23-1__table__body__row__action-add:focus,
  .kuc-table-1-23-1__table__body__row__action-remove:focus {
    border: 1px solid #3498db;
    outline: none;
  }
  .kuc-table-1-23-1__table__body__row__action-remove:hover path {
    fill: #e74c3c;
  }
  .kuc-table-1-23-1__table__body__row__action[hidden] {
    display: none;
  }
  .kuc-table-1-23-1__table caption {
    text-align: left;
    margin-bottom: 6px;
    overflow-wrap: anywhere;
    white-space: normal;
  }
  .kuc-table-1-23-1__table .kuc-table-1-23-1__table__label--no-column {
    overflow-wrap: break-word;
  }
`;var ke=function(o,t,e,i){var n=arguments.length,a=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(o,t,e,i);else for(var r=o.length-1;r>=0;r--)(s=o[r])&&(a=(n<3?s(a):n>3?s(t,e,a):s(t,e))||a);return n>3&&a&&Object.defineProperty(t,e,a),a};const Cc="kuc-table-1-23-1__table__body__row__cell-data",Ec="kuc-table-1-23-1__table__body__row",Sc="kuc-table-1-23-1__table__body__row__action",Gs="kuc-table-1-23-1__table__body__row__action-add",Ws="kuc-table-1-23-1__table__body__row__action-remove",Ks=o=>`var(--kuc-table-header-${o}-width, var(--kuc-table-header-width, auto))`,Ic="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM12.0355 8.49997V7.49997H8.50008V3.96454H7.50008V7.49997H3.96443V8.49997H7.50008V12.0356H8.50008V8.49997H12.0355Z",Tc="#3498db",$c="M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM12.0355 7.49997V8.49997L3.96443 8.49997V7.49997H12.0355Z",Ac="#b5b5b5";let En;(()=>{if(En=window.customElements.get("kuc-table-1-23-1"),En)return;class o extends k{constructor(e){if(super(),this.actionButtonPosition="right",this.className="",this.id="",this.label="",this.columns=[],this.data=[],this.actionButton=!0,this.headerVisible=!0,this.visible=!0,this._actionButton={add:!0,remove:!0},this._actionButtonPosition="right",!e)return;const i=$(e);Object.assign(this,i)}shouldUpdate(e){if(e.has("data")||e.has("columns")){const i=this._getErrorValidateColumnsAndData();if(i)return this.throwErrorAfterUpdateComplete(i),!1}return!0}willUpdate(e){e.has("actionButtonPosition")&&(this._actionButtonPosition=this.actionButtonPosition==="left"?"left":"right"),e.has("actionButton")&&(this._actionButton=this._getActionButtonSettings()),this._tBody&&(this._tBody.innerHTML="")}render(){return!this.columns||this.columns.length<1?p`<table class="kuc-table-1-23-1__table">
            <caption
              class="kuc-table-1-23-1__table__label kuc-table-1-23-1__table__label--no-column"
              ?hidden="${!this.label}"
            >
              ${this.label}
            </caption>
          </table>`:p`
            <table class="kuc-table-1-23-1__table">
              <caption class="kuc-table-1-23-1__table__label" ?hidden="${!this.label}">
                ${this.label}
              </caption>
              <thead
                class="kuc-table-1-23-1__table__header"
                ?hidden="${!this.headerVisible}"
              >
                ${this._getTableHeaderTemplate()}
              </thead>
              <tbody
                class="kuc-table-1-23-1__table__body${this.headerVisible?"":" kuc-table-1-23-1__table__body--no-header"}"
              ></tbody>
            </table>
          `}updated(e){if(this.columns.length!==0)for(let i=0;i<this.data.length;i++)this._addRowToTable(i,this.data[i])}_getTableHeaderTemplate(){return p`
        <tr>
          ${this._actionButtonPosition==="left"?this._getActionButtonHeaderTemplate():""}
          ${this.columns.map((e,i)=>this._getColumnHeaderTemplate(e,i))}
          ${this._actionButtonPosition==="right"?this._getActionButtonHeaderTemplate():""}
        </tr>
      `}_getActionButtonHeaderTemplate(){return!this.data||this.data.length<1||!this._actionButton.add&&!this._actionButton.remove?p``:p`
        <th
          class="kuc-table-1-23-1__table__header__cell kuc-table-1-23-1__table__header__cell__action${this._actionButtonPosition==="left"?"--left":"--right"}"
        ></th>
      `}_getColumnHeaderTemplate(e,i){const n=Ks(i);return p`
        <th
          class="kuc-table-1-23-1__table__header__cell"
          ?hidden="${e.visible===!1}"
          style="width: ${n}; min-width: ${n}; max-width: ${n}"
        >
          <div class="kuc-table-1-23-1__table__header__cell-title">
            ${e.title&&oe(e.title)?be(e.title):e.title}<!--
        --><span
              class="kuc-base-label-1-23-1__required-icon"
              ?hidden="${!e.requiredIcon}"
              >*</span
            >
          </div>
        </th>
      `}_getActionsCellWhenRemoveRow(e){let i=null,n=e;for(;this.data.length>1;){const a=this._table.rows[n];if(!a)n--;else{i=a.cells[this._actionButtonPosition==="left"?0:this.columns.length];break}}return i}_getDefaultDataRow(e){const i={};for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(Array.isArray(e[n])){i[n]=[];continue}if(typeof e[n]=="object"&&e[n]!==null){i[n]={};continue}i[n]=""}return i}_addRowToTable(e,i){var n;const a=this._tBody.insertRow(e);a.classList.add(Ec),(this._actionButton.add||this._actionButton.remove)&&this._actionButtonPosition==="left"&&this._addActionsCellToNewRow(a);for(let s=0;s<this.columns.length;s++){const r=Ks(s),l=a.insertCell(s+((this._actionButton.add||this._actionButton.remove)&&this._actionButtonPosition==="left"?1:0)),c=this.columns[s];l.classList.add(Cc),l.style.width=r,l.style.maxWidth=r,l.style.minWidth=r,l.addEventListener("change",h=>{this._handleChangeCell(h,c.field)}),l.hidden=!(!((n=c.visible)!==null&&n!==void 0)||n);const d=c.render?c.render(i[c.field],i,e):i[c.field];d&&d.nodeType?l.appendChild(d):l.innerText=d||""}!this._actionButton.add&&!this._actionButton.remove||this._actionButtonPosition==="left"||this._addActionsCellToNewRow(a)}_handleChangeCell(e,i){e.stopPropagation();const n=this._deepCloneObject(this.data),s=e.currentTarget.parentElement.rowIndex-1,r=this.data[s];if(i in r){let c=e.target.value;"detail"in e&&(c=e.detail.value),r[i]=c}const l={type:"change-cell",rowIndex:s,data:this._deepCloneObject(this.data),oldData:n,field:i};this._dispatchChangeEvent(l)}_handleAddRow(e){const i=this._deepCloneObject(this.data),n=this._getDefaultDataRow(this.data[0]);this._addRowToTable(e,n),this.data.splice(e,0,n);const a={type:"add-row",rowIndex:e,data:this._deepCloneObject(this.data),oldData:i};this._dispatchChangeEvent(a),this._toggleRemoveRowButton()}_handleRemoveRow(e){if(this.data.length===1)return;const i=e-1,n=this._deepCloneObject(this.data);this._table.deleteRow(e),this.data.splice(i,1);const a={type:"remove-row",rowIndex:i,data:this._deepCloneObject(this.data),oldData:n};this._dispatchChangeEvent(a),this._toggleRemoveRowButton(),this._focusActionsButtonWhenRemoveRow(e)}_focusActionsButtonWhenRemoveRow(e){const i=this._getActionsCellWhenRemoveRow(e);if(i){this._focusRemoveRowButton(i);return}this._focusFirstAddRowButton()}_focusRemoveRowButton(e){e.querySelector(`.${Ws}`).focus()}_focusFirstAddRowButton(){const i=this._table.rows[1].cells[this._actionButtonPosition==="left"?0:this.columns.length].querySelector(`.${Gs}`);i?.focus()}_toggleRemoveRowButton(){const e=this._actionButtonPosition==="left"?this._tBody.rows[0].firstChild:this._tBody.rows[0].lastChild,i=e.lastChild;if(this.data.length===1){i.style.display="none",this._actionButton.add||(e.style.display="none",this._hideActionHeaderCell());return}if(this.data.length===2){const a=(this._actionButtonPosition==="left"?this._tBody.rows[1].firstChild:this._tBody.rows[1].lastChild).lastChild;i.style.display=a.style.display="inline-block",e.style.removeProperty("display")}}_getSvgDOM(e,i){const n=document.createElementNS("http://www.w3.org/2000/svg","svg");n.setAttribute("fill","none"),n.setAttribute("width","18"),n.setAttribute("height","18"),n.setAttribute("viewBox","0 0 16 16"),n.setAttribute("aria-hidden","true");const a=document.createElementNS("http://www.w3.org/2000/svg","path");return a.setAttribute("d",i),a.setAttribute("fill-rule","evenodd"),a.setAttribute("clip-rule","evenodd"),a.setAttribute("fill",e),n.appendChild(a),n}_addActionsCellToNewRow(e){if(!this._actionButton.add&&!this._actionButton.remove)return;const i=e.insertCell(this._actionButtonPosition==="left"?0:this.columns.length);if(i.classList.add(Sc),this._actionButtonPosition==="left"?i.classList.add("kuc-table-1-23-1__table__body__row__action--left"):i.classList.add("kuc-table-1-23-1__table__body__row__action--right"),this._actionButton.add){const n=this._getActionButtonDOM("add",e);i.appendChild(n)}if(this._actionButton.remove){const n=this._getActionButtonDOM("remove",e);i.appendChild(n),this.data.length===1&&(n.style.display="none")}!this._actionButton.add&&this.data.length===1?(this._hideActionHeaderCell(),i.style.display="none"):(this._showActionHeaderCell(),i.style.removeProperty("display"))}_getActionButtonDOM(e,i){const n="Delete this row",a="Add row";let s=Ws,r=n;const l=e==="add";l&&(s=Gs,r=a);const c=l?Tc:Ac,d=l?Ic:$c,h=this._getSvgDOM(c,d),_=document.createElement("button");return _.classList.add(s),_.setAttribute("title",r),_.type="button",_.appendChild(h),_.addEventListener("click",()=>{const f=this._getErrorValidateColumnsAndData();if(f){this.throwErrorAfterUpdateComplete(f);return}if(l){this._handleAddRow(i.rowIndex);return}this._handleRemoveRow(i.rowIndex)}),_}_getActionButtonSettings(){const e={add:!0,remove:!0};return this.actionButton?(typeof this.actionButton=="object"&&(e.add=Object.prototype.hasOwnProperty.call(this.actionButton,"add")?!!this.actionButton.add:!0,e.remove=Object.prototype.hasOwnProperty.call(this.actionButton,"remove")?!!this.actionButton.remove:!0),e):(e.add=e.remove=!1,e)}_getErrorValidateColumnsAndData(){const e=this._getErrorMessageWhenValidateColumns();return e||(D(this.data)?"":y.DATA.IS_NOT_ARRAY)}_getErrorMessageWhenValidateColumns(){return D(this.columns)?Ku(this.columns)?qu(this.columns)?y.COLUMNS.FIELD_UNIQUE:"":y.COLUMNS.FIELD_REQUIRED:y.COLUMNS.IS_NOT_ARRAY}_deepCloneObject(e){return JSON.parse(JSON.stringify(e))}_dispatchChangeEvent(e){m(this,"change",e)}_hideActionHeaderCell(){this._actionHeaderCellRight&&(this._actionHeaderCellRight.hidden=!0),this._actionHeaderCellLeft&&(this._actionHeaderCellLeft.hidden=!0)}_showActionHeaderCell(){this._actionHeaderCellRight&&(this._actionHeaderCellRight.hidden=!1),this._actionHeaderCellLeft&&(this._actionHeaderCellLeft.hidden=!1)}}ke([u({type:String})],o.prototype,"actionButtonPosition",void 0),ke([u({type:String,reflect:!0,attribute:"class"})],o.prototype,"className",void 0),ke([u({type:String,reflect:!0,attribute:"id"})],o.prototype,"id",void 0),ke([u({type:String})],o.prototype,"label",void 0),ke([u({type:Array})],o.prototype,"columns",void 0),ke([u({type:Array})],o.prototype,"data",void 0),ke([u()],o.prototype,"actionButton",void 0),ke([u({type:Boolean})],o.prototype,"headerVisible",void 0),ke([u({type:Boolean,attribute:"hidden",reflect:!0,converter:V})],o.prototype,"visible",void 0),ke([b(".kuc-table-1-23-1__table")],o.prototype,"_table",void 0),ke([b(".kuc-table-1-23-1__table__body")],o.prototype,"_tBody",void 0),ke([b(".kuc-table-1-23-1__table__header__cell__action--right")],o.prototype,"_actionHeaderCellRight",void 0),ke([b(".kuc-table-1-23-1__table__header__cell__action--left")],o.prototype,"_actionHeaderCellLeft",void 0),window.customElements.define("kuc-table-1-23-1",o),x(wc),En=o})();const Lc=`
  kuc-tabs-1-23-1,
  kuc-tabs-1-23-1 *,
  kuc-tabs-1-23-1:lang(en),
  kuc-tabs-1-23-1:lang(en) * {
    font-family: sans-serif;
  }
  kuc-tabs-1-23-1:lang(es),
  kuc-tabs-1-23-1:lang(es) * {
    font-family: sans-serif;
  }
  kuc-tabs-1-23-1:lang(ja),
  kuc-tabs-1-23-1:lang(ja) * {
    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
      sans-serif;
  }
  kuc-tabs-1-23-1:lang(zh),
  kuc-tabs-1-23-1:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", sans-serif;
  }
  kuc-tabs-1-23-1:lang(zh-TW),
  kuc-tabs-1-23-1:lang(zh-TW) * {
    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC",sans-serif;
  }
  kuc-tabs-1-23-1 {
    display: inline-block;
  }
  kuc-tabs-1-23-1[hidden] {
    display: none;
  }
  .kuc-tabs-1-23-1__group__tabs-container {
    display: flex;
    padding: 0;
    align-items: center;
    padding-top: 16px;
  }
  .kuc-tabs-1-23-1__group__tabs-container__tab-pre-button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    margin: 0;
    background-color: #d4d7d7;
    border: none;
    cursor: pointer;
    height: var(--kuc-tabs-tab-height, 48px);
    width: 24px;
    min-width: 24px;
    margin-right: 1px;
  }
  .kuc-tabs-1-23-1__group__tabs-container__tab-pre-button[hidden] {
    visibility: hidden;
  }
  .kuc-tabs-1-23-1__group__tabs-container__tab-pre-button[disabled] {
    cursor: not-allowed;
  }
  .kuc-tabs-1-23-1__group__tabs-container__tab-next-button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    margin: 0;
    background-color: #d4d7d7;
    border: none;
    cursor: pointer;
    height: var(--kuc-tabs-tab-height, 48px);
    width: 24px;
    min-width: 24px;
    margin-left: 1px;
  }
  .kuc-tabs-1-23-1__group__tabs-container__tab-next-button[hidden] {
    visibility: hidden;
  }
  .kuc-tabs-1-23-1__group__tabs-container__tab-next-button[disabled] {
    cursor: not-allowed;
  }
  .kuc-tabs-1-23-1__group__tabs-container__tab-list-container {
    display: flex;
    flex-direction: row;
    padding: 0;
    overflow-y: hidden;
  }
  .kuc-tabs-1-23-1__group__tabs-container__tab-list-container__tab-list {
    display: flex;
    flex: 1;
    margin: 0;
    padding: 0px;
    list-style: none;
  }
  .kuc-tabs-1-23-1__group__tabs-container__tab-list-container {
    scrollbar-width: none; /* Firefox */
  }
  .kuc-tabs-1-23-1__group__tabs-container__tab-list-container::-webkit-scrollbar {
    width: 0; /* Safari and Chrome */
    display: none
  }
  .kuc-tabs-1-23-1__group__tabs-container__tab-list-container__tab-list__tab {
    min-height: var(--kuc-tabs-tab-height, 48px);
    height: var(--kuc-tabs-tab-height, 48px);
    white-space: normal;
  }
  .kuc-tabs-1-23-1__group__tabs-container__tab-list-container__tab-list__tab__button:disabled {
    color: GrayText;
    background-color: #d4d7d7;
    cursor: not-allowed;
  }
  .kuc-tabs-1-23-1__group__tabs-container__tab-list-container__tab-list__tab__button {
    height: 100%;
    margin: 0;
    padding: 0 24px;
    display: grid;
    align-items: center;
    align-content: center;
    font-size: var(--kuc-tabs-tab-font-size, 14px);
    background-color: var(--kuc-tabs-tab-background-color, #d4d7d7);
    color: var(--kuc-tabs-tab-color, #333333);
    border-style: none;
    border-top: 1px solid #c7cbcb;
    border-left: 1px solid #c7cbcb;
    box-shadow: 1px 0 3px #c7cbcb inset;
    box-sizing: border-box;
    cursor: pointer;
    line-height: 1.5;
    width: var(--kuc-tabs-tab-width, auto);
    min-width: var(--kuc-tabs-tab-width, 200px);
    word-wrap: break-word;
  }
  .kuc-tabs-1-23-1__group__tabs-container__tab-list-container__tab-list__tab__button[hidden] {
    display: none;
  }
  .kuc-tabs-1-23-1__group__tabs-container__tab-list-container__tab-list__tab__button:last-of-type {
    border-right: 1px solid #c7cbcb;
  }

  .kuc-tabs-1-23-1__group__tabs-container__tab-list-container__tab-list__tab__button:focus {
    outline: none;
    border: 1px solid #3498db;
  }
  .kuc-tabs-1-23-1__group__tabs-container__tab-list-container__tab-list__tab__button--click:focus{
    border: none;
    border-top: 1px solid #c7cbcb;
    border-left: 1px solid #c7cbcb;
    border-right: 1px solid #c7cbcb;
  }
  .kuc-tabs-1-23-1__group__tabs-container__tab-list-container__tab-list__tab__button[aria-selected="true"] {
    background-color: var(--kuc-tabs-tab-background-color-selected, #ffffff);
    color: var(--kuc-tabs-tab-color-selected, #333333);
    box-shadow: none;
  }
  .kuc-tabs-1-23-1__group__tab-panel {
    display:block;
    padding: 0;
    border-top: 0;
  }
  .kuc-tabs-1-23-1__group__tab-panel[border-visible] {
    box-shadow: 0 0 8px 2px rgb(0 0 0 / 10%);
  }
  .kuc-tabs-1-23-1__group__tab-panel__content[hidden]{
    display:none;
  }
`;var xe=function(o,t,e,i){var n=arguments.length,a=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(o,t,e,i);else for(var r=o.length-1;r>=0;r--)(s=o[r])&&(a=(n<3?s(a):n>3?s(t,e,a):s(t,e))||a);return n>3&&a&&Object.defineProperty(t,e,a),a};let Sn;(()=>{if(Sn=window.customElements.get("kuc-tabs-1-23-1"),Sn)return;const o=2;class t extends k{constructor(i){super(),this.className="",this.id="",this.value="",this.borderVisible=!0,this.scrollButtons=!1,this.visible=!0,this.items=[],this._selectedValue="",this._resizeObserver=null,this._isClick=!1,this._isAtStart=!0,this._isAtEnd=!1,this._GUID=M();const n=$(i);Object.assign(this,n),this._handleResize=this._handleResize.bind(this)}shouldUpdate(i){if(i.has("items")){if(!D(this.items))return this.throwErrorAfterUpdateComplete(y.ITEMS.IS_NOT_ARRAY),!1;for(let a=0;a<this.items.length;a++)if(this.items[a].value===void 0)return this.throwErrorAfterUpdateComplete(y.ITEMS.IS_NOT_SPECIFIED),!1;const n=this.items.map(a=>a.value);if(!un(n))return this.throwErrorAfterUpdateComplete(y.ITEMS.IS_DUPLICATED),!1}return i.has("value")&&!_i(this.value)?(this.throwErrorAfterUpdateComplete(y.VALUE.IS_NOT_STRING),!1):!0}willUpdate(i){let n=this._getMatchedTabIndex();n===-1&&(n=this._getFirstVisibleTabIndex()),n>-1&&(this._selectedValue=this.items[n].value)}render(){return p`
        <div class="kuc-tabs-1-23-1__group">
          <div class="kuc-tabs-1-23-1__group__tabs-container">
            <button
              class="kuc-tabs-1-23-1__group__tabs-container__tab-pre-button"
              type="button"
              @mousedown="${this._handleMouseDownPrevButton}"
              ?hidden="${!this.scrollButtons}"
              ?disabled="${this._isAtStart}"
              aria-hidden="true"
              tabindex="-1"
            >
              ${this._getPrevButtonSvgTemplate()}
            </button>
            <div
              class="kuc-tabs-1-23-1__group__tabs-container__tab-list-container"
              @scroll="${this._handleScroll}"
            >
              <ul
                class="kuc-tabs-1-23-1__group__tabs-container__tab-list-container__tab-list"
                role="tablist"
                @blur="${this._handleBlur}"
              >
                ${this.items.map((i,n)=>this._getTabTemplate(i,n))}
              </ul>
            </div>
            <button
              class="kuc-tabs-1-23-1__group__tabs-container__tab-next-button"
              type="button"
              @mousedown="${this._handleMouseDownNextButton}"
              ?hidden="${!this.scrollButtons}"
              ?disabled="${this._isAtEnd}"
              aria-hidden="true"
              tabindex="-1"
            >
              ${this._getNextButtonSvgTemplate()}
            </button>
          </div>
          <div
            class="kuc-tabs-1-23-1__group__tab-panel"
            ?border-visible="${this.borderVisible}"
          >
            ${this.items.map((i,n)=>this._getTabContentTemplate(i,n))}
          </div>
        </div>
      `}firstUpdated(){window.addEventListener("resize",this._handleResize),this._resizeObserver=new ResizeObserver(()=>{this.scrollButtons&&this._updatePreNextButtonState()}),this._resizeObserver.observe(this._tabListContainer),this._setScrollStyles(),this._scrollToSelectedTab(!0)}updated(i){i.has("scrollButtons")&&this._setScrollStyles(),this.scrollButtons&&this._updatePreNextButtonState()}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this._handleResize),this._resizeObserver&&(this._resizeObserver.disconnect(),this._resizeObserver=null)}_getTabTemplate(i,n){const a=i.value===this._selectedValue;return p`<li
        role="presentation"
        class="kuc-tabs-1-23-1__group__tabs-container__tab-list-container__tab-list__tab"
      >
        <button
          role="tab"
          type="button"
          ?hidden="${i.visible===!1}"
          aria-selected="${a}"
          tabindex="${a&&!i.disabled?"0":"-1"}"
          class="kuc-tabs-1-23-1__group__tabs-container__tab-list-container__tab-list__tab__button ${this._isClick?"kuc-tabs-1-23-1__group__tabs-container__tab-list-container__tab-list__tab__button--click":""}"
          id="${this._GUID}-button-${n}"
          aria-controls="${this._GUID}-tabpanel-${n}"
          value="${i.value}"
          @click="${this._handleClickTab}"
          @mousedown="${this._handleMouseDown}"
          @keydown="${this._handleKeyDownTab}"
          ?disabled="${i.disabled}"
        >
          ${i.label?i.label:""}
        </button>
      </li>`}_getTabContentTemplate(i,n){const a=i.value===this._selectedValue;return p`<div
        class="kuc-tabs-1-23-1__group__tab-panel__content"
        role="tabpanel"
        id="${this._GUID}-tabpanel-${n}"
        aria-labelledby="${this._GUID}-button-${n}"
        ?hidden="${!a||i.visible===!1}"
        @change="${this._handleChangeEvent}"
      >
        ${i.content&&oe(i.content)?be(i.content):i.content}
      </div>`}_getPrevButtonSvgTemplate(){return C`
        <svg
          width="9"
          height="15"
          viewBox="0 0 9 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1.99061 7.5L9 0.0604158L7.06632 0L0 7.5L7.06632 15L9 14.9396L1.99061 7.5Z"
            fill="${this._isAtStart?"GrayText":"#333333"}"
          />
        </svg>
      `}_getNextButtonSvgTemplate(){return C`
      <svg
        width="9"
        height="15"
        viewBox="0 0 9 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7.00939 7.5L0 0.0604158L1.93368 0L9 7.5L1.93368 15L0 14.9396L7.00939 7.5Z"
          fill="${this._isAtEnd?"GrayText":"#333333"}"
        />
      </svg>
      `}_getVisibleTab(i,n){const a=Array.from(this._tabButtons),s=a.indexOf(n),r=i==="next"?1:-1,l=i==="next"?a.length:-1;for(let c=s+r;c!==l;c+=r)if(!a[c].hidden)return a[c];return null}_handleTabScroll(i){const n=this._findVisibleTab(i);if(!n)return;const s=this._isTabPartiallyVisible(n,i)?n:this._getVisibleTab(i,n);s&&this._scrollTab(s,{direction:i,mode:"edge"}),this._updatePreNextButtonState()}_findVisibleTab(i){const n=this._tabListContainer.getBoundingClientRect(),a=Array.from(this._tabButtons),s=r=>{const l=r.getBoundingClientRect();return!(l.right<=n.left||l.left>=n.right)};return i==="next"?a.reverse().find(s):a.find(s)}_isTabPartiallyVisible(i,n){const a=this._tabListContainer.getBoundingClientRect(),s=i.getBoundingClientRect();return n==="next"?s.right>a.right+o:s.left<a.left-o}_calculateScrollPosition(i,n){const{direction:a,mode:s}=n,r=this._tabListContainer.getBoundingClientRect(),l=i.getBoundingClientRect();let c=this._tabListContainer.scrollLeft;return s==="edge"&&a?c+=a==="next"?l.right-r.right:l.left-r.left:l.width>r.width&&a?c+=a==="next"?l.left-r.left:l.right-r.right:l.left<r.left?c+=l.left-r.left:l.right>r.right&&(c+=l.right-r.right),Math.max(0,Math.min(c,this._tabListContainer.scrollWidth-this._tabListContainer.clientWidth))}_scrollTab(i,n){const a=this._calculateScrollPosition(i,n);this._tabListContainer.scrollTo({left:a,behavior:n.immediate?"auto":"smooth"})}_handleMouseDownPrevButton(i){i.preventDefault(),this._handleTabScroll("prev")}_handleMouseDownNextButton(i){i.preventDefault(),this._handleTabScroll("next")}_handleResize(){this.scrollButtons&&this._updatePreNextButtonState()}_handleScroll(){this._updatePreNextButtonState()}_isScrollToLeft(){return this._tabListContainer.scrollLeft===0}_isScrollToRight(){const{scrollWidth:i,scrollLeft:n,clientWidth:a}=this._tabListContainer;return Math.abs(i-n-a)<o}_setScrollStyles(){var i;(i=this._tabGroup.parentElement)===null||i===void 0||i.style.setProperty("max-width",this.scrollButtons?"100%":""),this._tabListContainer.style.setProperty("overflow-x",this.scrollButtons?"auto":"visible")}_updatePreNextButtonState(){const i=this._isScrollToLeft(),n=this._isScrollToRight();i!==this._isAtStart&&(this._isAtStart=i),n!==this._isAtEnd&&(this._isAtEnd=n)}_handleMouseDown(i){this._isClick=!0}_handleClickTab(i){const n=i.target;n.blur();const a=this._getCurrentTabIndex(n.getAttribute("value"));if(this._tabButtons[a].focus(),this.value===n.value)return;const s=this._generateEventDetail(n.value);m(this,"change",s)}_handleChangeEvent(i){i.stopPropagation()}_handleBlur(i){this._isClick=!1}_handleKeyDownTab(i){this._isClick=!1;let n=!1;switch(i.key){case"Left":case"ArrowLeft":{n=!0,this._moveToAdjacentTab(i.target,"prev");break}case"Right":case"ArrowRight":{n=!0,this._moveToAdjacentTab(i.target,"next");break}case"Home":{n=!0,this._moveToLastFirstTab(i.target,"first");break}case"End":{n=!0,this._moveToLastFirstTab(i.target,"last");break}}n&&(i.stopPropagation(),i.preventDefault())}_getCurrentTabIndex(i){let n=-1;for(let a=0;a<this.items.length;a++)if(this.items[a].value===i){n=a;break}return n===-1&&(n=this._getFirstVisibleTabIndex()),n}_getFirstVisibleTabIndex(){return this.items.findIndex(i=>i.visible!==!1)}_getMatchedTabIndex(){return this.items.findIndex(i=>i.visible!==!1&&i.value===this.value)}_moveToLastFirstTab(i,n){const a=this._getCurrentTabIndex(i.getAttribute("value")),s=n==="last"?-1:1;let r=n==="last"?this.items.length-1:0;for(;r!==a;){if(this.items[r].visible!==!1&&this.items[r].disabled!==!0){i.blur(),m(this,"change",this._generateEventDetail(this._tabButtons[r].getAttribute("value"))),this._tabButtons[this._getCurrentTabIndex(this.value)].focus(),this._scrollTab(this._tabButtons[this._getCurrentTabIndex(this.value)],{mode:"visible"});break}r+=s}}_moveToAdjacentTab(i,n){const a=this._getCurrentTabIndex(i.getAttribute("value")),s=n==="next"?1:-1;let r=a+s;for(;r!==a&&(r===this.items.length?r=0:r===-1&&(r=this.items.length-1),r!==a);){if(this.items[r].visible!==!1&&this.items[r].disabled!==!0){i.blur(),m(this,"change",this._generateEventDetail(this._tabButtons[r].getAttribute("value"))),this._tabButtons[this._getCurrentTabIndex(this.value)].focus(),this._scrollTab(this._tabButtons[this._getCurrentTabIndex(this.value)],{mode:"visible",direction:n});break}r+=s}}_scrollToSelectedTab(i=!1){if(!this.value||!this._tabButtons.length)return;const n=this._getCurrentTabIndex(this.value);if(n===-1)return;const a=this._tabButtons[n];a&&(a.hidden||(this._scrollTab(a,{mode:"visible",immediate:i}),this._updatePreNextButtonState()))}_generateEventDetail(i){const n=this.value;return this.value=i,{oldValue:n,value:i}}}xe([u({type:String,reflect:!0,attribute:"class"})],t.prototype,"className",void 0),xe([u({type:String,reflect:!0,attribute:"id"})],t.prototype,"id",void 0),xe([u({type:String})],t.prototype,"value",void 0),xe([u({type:Boolean})],t.prototype,"borderVisible",void 0),xe([u({type:Boolean})],t.prototype,"scrollButtons",void 0),xe([u({type:Boolean,attribute:"hidden",reflect:!0,converter:V})],t.prototype,"visible",void 0),xe([u({type:Array})],t.prototype,"items",void 0),xe([q(".kuc-tabs-1-23-1__group__tabs-container__tab-list-container__tab-list__tab__button")],t.prototype,"_tabButtons",void 0),xe([b(".kuc-tabs-1-23-1__group__tabs-container__tab-list-container")],t.prototype,"_tabListContainer",void 0),xe([b(".kuc-tabs-1-23-1__group")],t.prototype,"_tabGroup",void 0),xe([v()],t.prototype,"_isClick",void 0),xe([v()],t.prototype,"_isAtStart",void 0),xe([v()],t.prototype,"_isAtEnd",void 0),window.customElements.define("kuc-tabs-1-23-1",t),x(Lc),Sn=t})();const Dc=`
kuc-text-1-23-1,
kuc-text-1-23-1 *,
kuc-text-1-23-1:lang(en),
kuc-text-1-23-1:lang(en) * {
  font-family: sans-serif;
}
kuc-text-1-23-1:lang(es),
kuc-text-1-23-1:lang(es) * {
  font-family: sans-serif;
}
kuc-text-1-23-1:lang(ja),
kuc-text-1-23-1:lang(ja) * {
  font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
    sans-serif;
}
kuc-text-1-23-1:lang(zh),
kuc-text-1-23-1:lang(zh) * {
  font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
    Hei, "Heiti SC", sans-serif;
}
kuc-text-1-23-1:lang(zh-TW),
kuc-text-1-23-1:lang(zh-TW) * {
  font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
    Hei,"Heiti SC",sans-serif;
}
kuc-text-1-23-1 {
  font-size: 14px;
  color: #333333;
  display: inline-table;
  vertical-align: top;
  min-width: var(--kuc-text-input-width, 177px);
  width: var(--kuc-text-input-width, 177px);
  line-height: 1.5;
}
kuc-text-1-23-1[hidden] {
  display: none;
}
.kuc-text-1-23-1__group {
  border: none;
  padding: 0px;
  height: auto;
  display: inline-block;
  vertical-align: top;
  width: 100%;
  margin: 0px;
}
.kuc-text-1-23-1__group__label {
  display: inline-block;
  padding: 4px 0px 8px 0px;
  white-space: nowrap;
}
.kuc-text-1-23-1__group__label[hidden] {
  display: none;
}
.kuc-text-1-23-1__group__input-form {
  display: flex;
  align-items: center;
  width: 100%;
}
.kuc-text-1-23-1__group__input-form__prefix-outer__prefix {
  padding-right: 4px;
  white-space: nowrap;
}
.kuc-text-1-23-1__group__input-form__input-outer {
  display: flex;
  min-width: var(--kuc-text-input-width, 26px);
  width: var(--kuc-text-input-width, 100%);
}
input[type="text"].kuc-text-1-23-1__group__input-form__input-outer__input {
  width: var(--kuc-text-input-width, 100%);
  height: var(--kuc-text-input-height, 40px);
  font-size: var(--kuc-text-input-font-size, 14px);
  color: var(--kuc-text-input-color, #000000);
  padding: 0 8px;
  border: 1px solid #e3e7e8;
  box-sizing: border-box;
  box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;
}
.kuc-text-1-23-1__group__input-form__input-outer__input[textAlign="left"] {
  text-align: left;
}
.kuc-text-1-23-1__group__input-form__input-outer__input[textAlign="right"] {
  text-align: right;
}
input[type=text].kuc-text-1-23-1__group__input-form__input-outer__input:focus {
  outline: none;
  border: 1px solid #3498db;
}
input[type=text].kuc-text-1-23-1__group__input-form__input-outer__input:disabled {
  color: #888888;
  background-color: #d4d7d7;
  box-shadow: none;
  cursor: not-allowed;
}
.kuc-text-1-23-1__group__input-form__suffix-outer__suffix {
  padding-left: 4px;
  white-space: nowrap;
}
`;var Le=function(o,t,e,i){var n=arguments.length,a=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(o,t,e,i);else for(var r=o.length-1;r>=0;r--)(s=o[r])&&(a=(n<3?s(a):n>3?s(t,e,a):s(t,e))||a);return n>3&&a&&Object.defineProperty(t,e,a),a};let In;(()=>{if(In=window.customElements.get("kuc-text-1-23-1"),In)return;class o extends k{constructor(e){super(),this.className="",this.error="",this.id="",this.label="",this.placeholder="",this.prefix="",this.suffix="",this.textAlign="left",this.value="",this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this._GUID=M();const i=$(e);Object.assign(this,i)}_handleFocusInput(e){const i={value:this.value};m(this,"focus",i)}_handleChangeInput(e){e.stopPropagation();const i=e.target,n={value:"",oldValue:this.value};this.value=i.value,n.value=this.value,m(this,"change",n)}_handleInputText(e){e.stopPropagation();const n={value:e.target.value,data:e.data};m(this,"input",n)}render(){return p`
        <div class="kuc-text-1-23-1__group">
          <label
            class="kuc-text-1-23-1__group__label"
            for="${this._GUID}-label"
            ?hidden="${!this.label}"
          >
            <kuc-base-label-1-23-1
              .text="${this.label}"
              .requiredIcon="${this.requiredIcon}"
            ></kuc-base-label-1-23-1>
          </label>
          <div class="kuc-text-1-23-1__group__input-form">
            <div class="kuc-text-1-23-1__group__input-form__prefix-outer">
              <span
                class="kuc-text-1-23-1__group__input-form__prefix-outer__prefix"
                ?hidden="${!this.prefix}"
                >${this.prefix}</span
              >
            </div>
            <div class="kuc-text-1-23-1__group__input-form__input-outer">
              <input
                class="kuc-text-1-23-1__group__input-form__input-outer__input"
                id="${this._GUID}-label"
                placeholder="${this.placeholder}"
                textAlign="${this.textAlign}"
                type="text"
                .value="${this.value}"
                aria-required="${this.requiredIcon}"
                aria-invalid="${this.error!==""}"
                aria-describedby="${this._GUID}-error"
                @focus="${this._handleFocusInput}"
                @change="${this._handleChangeInput}"
                @input="${this._handleInputText}"
                ?disabled="${this.disabled}"
              />
            </div>
            <div class="kuc-text-1-23-1__group__input-form__suffix-outer">
              <span
                class="kuc-text-1-23-1__group__input-form__suffix-outer__suffix"
                ?hidden="${!this.suffix}"
                >${this.suffix}</span
              >
            </div>
          </div>
          <kuc-base-error-1-23-1
            .text="${this.error}"
            .guid="${this._GUID}"
            ?hidden="${!this.error}"
          ></kuc-base-error-1-23-1>
        </div>
      `}}Le([u({type:String,reflect:!0,attribute:"class"})],o.prototype,"className",void 0),Le([u({type:String})],o.prototype,"error",void 0),Le([u({type:String,reflect:!0,attribute:"id"})],o.prototype,"id",void 0),Le([u({type:String})],o.prototype,"label",void 0),Le([u({type:String})],o.prototype,"placeholder",void 0),Le([u({type:String})],o.prototype,"prefix",void 0),Le([u({type:String})],o.prototype,"suffix",void 0),Le([u({type:String})],o.prototype,"textAlign",void 0),Le([u({type:String})],o.prototype,"value",void 0),Le([u({type:Boolean})],o.prototype,"disabled",void 0),Le([u({type:Boolean})],o.prototype,"requiredIcon",void 0),Le([u({type:Boolean,attribute:"hidden",reflect:!0,converter:V})],o.prototype,"visible",void 0),window.customElements.define("kuc-text-1-23-1",o),x(Dc),In=o})();const Vc=`
  kuc-textarea-1-23-1,
  kuc-textarea-1-23-1 *,
  kuc-textarea-1-23-1:lang(en),
  kuc-textarea-1-23-1:lang(en) * {
    font-family: sans-serif;
  }
  kuc-textarea-1-23-1:lang(es),
  kuc-textarea-1-23-1:lang(es) * {
    font-family: sans-serif;
  }
  kuc-textarea-1-23-1:lang(ja),
  kuc-textarea-1-23-1:lang(ja) * {
    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
      sans-serif;
  }
  kuc-textarea-1-23-1:lang(zh),
  kuc-textarea-1-23-1:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", sans-serif;
  }
  kuc-textarea-1-23-1:lang(zh-TW),
  kuc-textarea-1-23-1:lang(zh-TW) * {
    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC",sans-serif;
  }
  kuc-textarea-1-23-1 {
    font-size: 14px;
    color: var(--kuc-textarea-input-color, #333333);
    display: inline-table;
    vertical-align: top;
    width: var(--kuc-textarea-input-width, 299px);
    height: var(--kuc-textarea-input-height, 125px);
    line-height: 1.5;
  }
  kuc-textarea-1-23-1[hidden] {
    display: none;
  }
  .kuc-textarea-1-23-1__group {
    border: none;
    padding: 0px;
    height: auto;
    display: inline-block;
    vertical-align: top;
    width: 100%;
    margin: 0px;
    white-space: normal;
  }
  .kuc-textarea-1-23-1__group__label {
    white-space: nowrap;
    display: inline-block;
    padding: 4px 0px 8px 0px;
  }
  .kuc-textarea-1-23-1__group__label[hidden] {
    display: none;
  }
  .kuc-textarea-1-23-1__group__container {
    position: relative;
    display: inline-table;
    width: var(--kuc-textarea-input-width, 100%);
    min-width: var(--kuc-textarea-input-width, 100%);
  }
  textarea.kuc-textarea-1-23-1__group__textarea {
    display: block;
    border: 1px solid #e3e7e8;
    box-sizing: border-box;
    font-size: var(--kuc-textarea-input-font-size, 14px);
    box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;
    min-width: var(--kuc-textarea-input-width, 299px);
    min-height: var(--kuc-textarea-input-height, 125px);
    width: var(--kuc-textarea-input-width, 299px);
    height: var(--kuc-textarea-input-height, 125px);
    padding: 8px;
    resize: none;
    width: 100%;
    background-color: #ffffff;
    color: var(--kuc-textarea-input-color, #333333);
  }
  .kuc-textarea-1-23-1__group__textarea:focus {
    outline: none;
    border-color: #3498db;
    box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;
    border: 1px solid #3498db;
    background-color: #ffffff;
    color: var(--kuc-textarea-input-color, #333333);
  }
  .kuc-textarea-1-23-1__group__textarea:disabled {
    color: #888888;
    background-color: #d4d7d7;
    box-shadow: none;
    cursor: not-allowed;
    resize: none;
  }
  .kuc-textarea-1-23-1__group__resizer {
    position: absolute;
    width: 16px;
    height: 16px;
    cursor: se-resize;
    float: right;
    margin: -16px 0px;
    right: 0px;
  }
`;var Ne=function(o,t,e,i){var n=arguments.length,a=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(o,t,e,i);else for(var r=o.length-1;r>=0;r--)(s=o[r])&&(a=(n<3?s(a):n>3?s(t,e,a):s(t,e))||a);return n>3&&a&&Object.defineProperty(t,e,a),a};let Tn;(()=>{if(Tn=window.customElements.get("kuc-textarea-1-23-1"),Tn)return;const o={MIN_WIDTH:16,MIN_HEIGHT:16};class t extends k{constructor(i){super(),this.className="",this.error="",this.id="",this.label="",this.placeholder="",this.value="",this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this._onResize=!1,this._GUID=M();const n=$(i);Object.assign(this,n)}_handleFocusTextarea(i){const n={value:this.value};m(this,"focus",n)}_handleChangeTextarea(i){i.stopPropagation();const n=i.target,a={value:"",oldValue:this.value};this.value=n.value,a.value=this.value,m(this,"change",a)}_handleInputTextArea(i){i.stopPropagation();const a={value:i.target.value,data:i.data};m(this,"input",a)}_handleMouseDownResize(){this._onResize=!0}_handleMouseUpDocument(){this._onResize=!1}_handleMouseMoveDocument(i){if(!this._onResize)return;const n=this._textarea.getBoundingClientRect();let a=i.clientX-n.left,s=i.clientY-n.top;a<o.MIN_WIDTH&&(a=o.MIN_WIDTH),s<o.MIN_HEIGHT&&(s=o.MIN_HEIGHT),this._container.style.width=a+"px",this._textarea.style.height=s+"px"}_getResizerButtonSvgTemplate(){return C`
      <svg height="16" width="16">
        <g fill="none" stroke="#b6b6b6" stroke-width="2">
          <line x1="14" x2="16" y1="15" y2="15" />
          <line x1="14" x2="16" y1="11" y2="11" />
          <line x1="14" x2="16" y1="7" y2="7" />
          <line x1="10" x2="12" y1="15" y2="15" />
          <line x1="6" x2="8" y1="15" y2="15" />
          <line x1="10" x2="12" y1="11" y2="11" />
        </g>
      </svg>
      `}firstUpdated(){document.addEventListener("mousemove",i=>this._handleMouseMoveDocument(i)),document.addEventListener("mouseup",i=>this._handleMouseUpDocument())}render(){return p`
        <div class="kuc-textarea-1-23-1__group">
          <label
            class="kuc-textarea-1-23-1__group__label"
            ?hidden="${!this.label}"
            for="${this._GUID}-label"
          >
            <kuc-base-label-1-23-1
              .text="${this.label}"
              .requiredIcon="${this.requiredIcon}"
            ></kuc-base-label-1-23-1>
          </label>
          <div class="kuc-textarea-1-23-1__group__container">
            <textarea
              id="${this._GUID}-label"
              class="kuc-textarea-1-23-1__group__textarea"
              placeholder="${this.placeholder}"
              .value="${this.value}"
              aria-describedby="${this._GUID}-error"
              aria-required="${this.requiredIcon}"
              aria-invalid="${this.error!==""}"
              @change="${this._handleChangeTextarea}"
              @focus="${this._handleFocusTextarea}"
              @input="${this._handleInputTextArea}"
              ?disabled="${this.disabled}"
            >
            </textarea>
            <div
              class="kuc-textarea-1-23-1__group__resizer"
              @mousedown="${this._handleMouseDownResize}"
              ?hidden="${this.disabled}"
            >
              ${this._getResizerButtonSvgTemplate()}
            </div>
          </div>
          <kuc-base-error-1-23-1
            .text="${this.error}"
            .guid="${this._GUID}"
            ?hidden="${!this.error}"
          ></kuc-base-error-1-23-1>
        </div>
      `}}Ne([u({type:String,reflect:!0,attribute:"class"})],t.prototype,"className",void 0),Ne([u({type:String})],t.prototype,"error",void 0),Ne([u({type:String,reflect:!0,attribute:"id"})],t.prototype,"id",void 0),Ne([u({type:String})],t.prototype,"label",void 0),Ne([u({type:String})],t.prototype,"placeholder",void 0),Ne([u({type:String})],t.prototype,"value",void 0),Ne([u({type:Boolean})],t.prototype,"disabled",void 0),Ne([u({type:Boolean})],t.prototype,"requiredIcon",void 0),Ne([u({type:Boolean,attribute:"hidden",reflect:!0,converter:V})],t.prototype,"visible",void 0),Ne([b(".kuc-textarea-1-23-1__group__container")],t.prototype,"_container",void 0),Ne([b(".kuc-textarea-1-23-1__group__textarea")],t.prototype,"_textarea",void 0),window.customElements.define("kuc-textarea-1-23-1",t),x(Vc),Tn=t})();const Mc=`
kuc-time-picker-1-23-1,
kuc-time-picker-1-23-1 *,
kuc-time-picker-1-23-1:lang(en),
kuc-time-picker-1-23-1:lang(en) * {
  font-family: sans-serif;
}
kuc-time-picker-1-23-1:lang(ja),
kuc-time-picker-1-23-1:lang(ja) * {
  font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
    sans-serif;
}
kuc-time-picker-1-23-1:lang(zh),
kuc-time-picker-1-23-1:lang(zh) * {
  font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
    Hei, "Heiti SC", sans-serif;
}
kuc-time-picker-1-23-1:lang(zh-TW),
kuc-time-picker-1-23-1:lang(zh-TW) * {
  font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
    Hei,"Heiti SC"
}
kuc-time-picker-1-23-1:lang(es),
kuc-time-picker-1-23-1:lang(es) * {
  font-family: sans-serif;
}
kuc-time-picker-1-23-1 {
  font-size: 14px;
  color: var(--kuc-time-picker-input-color, #333333);
  display: inline-table;
  max-width: var(--kuc-time-picker-input-width, 85px);
  width: var(--kuc-time-picker-input-width, 85px);
  vertical-align: top;
  line-height: 1.5;
}
.kuc-time-picker-1-23-1__group__input {
  position: relative;
}
kuc-time-picker-1-23-1[hidden] {
  display: none;
}
.kuc-time-picker-1-23-1__group {
  display: flex;
  flex-direction: column;
  border: none;
  padding: 0px;
  height: auto;
  margin: 0px;
}

.kuc-time-picker-1-23-1__group kuc-base-time-1-23-1 {
  display: inline-flex;
  flex-direction: column;
}

.kuc-time-picker-1-23-1__group .kuc-base-time-1-23-1__group {
  max-width: var(--kuc-time-picker-input-width, 85px);
  width: var(--kuc-time-picker-input-width, 85px);
  font-size: var(--kuc-time-picker-input-font-size, 14px);
  height: var(--kuc-time-picker-input-height, 40px);
  color: var(--kuc-time-picker-input-color, #333333);
}
.kuc-time-picker-1-23-1__group .kuc-base-time-1-23-1__group input[type=text].kuc-base-time-1-23-1__group__hours,
.kuc-time-picker-1-23-1__group .kuc-base-time-1-23-1__group input[type=text].kuc-base-time-1-23-1__group__minutes,
.kuc-time-picker-1-23-1__group .kuc-base-time-1-23-1__group input.kuc-base-time-1-23-1__group__suffix,
.kuc-time-picker-1-23-1__group .kuc-base-time-1-23-1__group--focus {
  color: var(--kuc-time-picker-input-color, #333333);
}
.kuc-time-picker-1-23-1__group__label {
  padding: 4px 0px 8px 0px;
  display: inline-block;
  white-space: nowrap;
}
.kuc-time-picker-1-23-1__group__label[hidden] {
  display: none;
}
`;var ye=function(o,t,e,i){var n=arguments.length,a=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(o,t,e,i);else for(var r=o.length-1;r>=0;r--)(s=o[r])&&(a=(n<3?s(a):n>3?s(t,e,a):s(t,e))||a);return n>3&&a&&Object.defineProperty(t,e,a),a};let $n;(()=>{if($n=window.customElements.get("kuc-time-picker-1-23-1"),$n)return;class o extends k{constructor(e){super(),this.className="",this.error="",this.id="",this.label="",this.language="auto",this.max="",this.min="",this.value="",this.disabled=!1,this.hour12=!1,this.requiredIcon=!1,this.visible=!0,this.timeStep=30,this._errorText="",this._inputValue="",this._errorInvalid="",this._inputMax="",this._inputMin="",this._inputTimeStep=30,this._valueConverted="",this._GUID=M();const i=$(e);Object.assign(this,i)}shouldUpdate(e){if(e.has("max")||e.has("min")){let i=this._inputMin,n=this._inputMax;if(this.max===void 0||this.max==="")n=As;else{if(!Wt(this.max))return this.throwErrorAfterUpdateComplete(Q.MAX),!1;n=this.max=ft(this.max)}if(this.min===void 0||this.min==="")i=on;else{if(!Wt(this.min))return this.throwErrorAfterUpdateComplete(Q.MIN),!1;i=this.min=ft(this.min)}if(It(n,i)<0)return this.throwErrorAfterUpdateComplete(Is),!1;this._inputMin=i,this._inputMax=n}if(e.has("timeStep")){if(!Kt(this.timeStep))return this.throwErrorAfterUpdateComplete($s),!1;if(!Us(this.timeStep,this._inputMax,this._inputMin))return this.throwErrorAfterUpdateComplete(Q.TIME_STEP),!1;this._inputTimeStep=this.timeStep}return this.value===void 0||this.value===""?!0:Wt(this.value)?(this._valueConverted=ft(this.value),e.has("value")&&(It(this._valueConverted,this._inputMin)<0||It(this._inputMax,this._valueConverted)<0)?(this.throwErrorAfterUpdateComplete(Ts),!1):!0):(this.throwErrorAfterUpdateComplete(Q.VALUE),!1)}update(e){e.has("value")&&(this.value===void 0?this._errorInvalid===""&&(this._inputValue=""):(this.value=this.value===""?this.value:this._valueConverted,this._inputValue=this.value)),(e.has("max")||e.has("min")||e.has("value"))&&this.value!==void 0&&(this._errorInvalid=""),this._errorText=this._errorInvalid||this.error,super.update(e)}render(){return p`
        <fieldset
          class="kuc-time-picker-1-23-1__group"
          aria-describedby="${this._GUID}-error"
        >
          <legend
            class="kuc-time-picker-1-23-1__group__label"
            ?hidden="${!this.label}"
          >
            <kuc-base-label-1-23-1
              .text="${this.label}"
              .requiredIcon="${this.requiredIcon}"
            ></kuc-base-label-1-23-1>
          </legend>
          <kuc-base-time-1-23-1
            class="kuc-time-picker-1-23-1__group__input"
            .value="${this._inputValue}"
            .hour12="${this.hour12}"
            .disabled="${this.disabled}"
            .timeStep="${this._inputTimeStep}"
            .min="${this._inputMin}"
            .max="${this._inputMax}"
            .language="${this._getLanguage()}"
            @kuc:base-time-change="${this._handleTimeChange}"
          >
          </kuc-base-time-1-23-1>
          <kuc-base-error-1-23-1
            .text="${this._errorText}"
            .guid="${this._GUID}"
            ?hidden="${!this._errorText}"
          ></kuc-base-error-1-23-1>
        </fieldset>
      `}_handleTimeChange(e){e.preventDefault(),e.stopPropagation();const i={value:e.detail.value,oldValue:this.value};e.detail.error?(i.value=void 0,this.value=void 0,this._errorInvalid=e.detail.error,this.error=""):(this.value=e.detail.value,this._errorInvalid=""),this._inputValue=e.detail.value,m(this,"change",i)}_getLanguage(){const e=["en","ja","zh","zh-TW","es"];return e.indexOf(this.language)!==-1?this.language:e.indexOf(document.documentElement.lang)!==-1?document.documentElement.lang:"en"}}ye([u({type:String,reflect:!0,attribute:"class"})],o.prototype,"className",void 0),ye([u({type:String})],o.prototype,"error",void 0),ye([u({type:String,reflect:!0,attribute:"id"})],o.prototype,"id",void 0),ye([u({type:String})],o.prototype,"label",void 0),ye([u({type:String,attribute:"lang",reflect:!0,converter:Gt})],o.prototype,"language",void 0),ye([u({type:String})],o.prototype,"max",void 0),ye([u({type:String})],o.prototype,"min",void 0),ye([u({type:String})],o.prototype,"value",void 0),ye([u({type:Boolean})],o.prototype,"disabled",void 0),ye([u({type:Boolean})],o.prototype,"hour12",void 0),ye([u({type:Boolean})],o.prototype,"requiredIcon",void 0),ye([u({type:Boolean,attribute:"hidden",reflect:!0,converter:V})],o.prototype,"visible",void 0),ye([u({type:Number})],o.prototype,"timeStep",void 0),window.customElements.define("kuc-time-picker-1-23-1",o),x(Mc),$n=o})();const Oc=`
  kuc-tooltip-1-23-1,
  kuc-tooltip-1-23-1 *,
  kuc-tooltip-1-23-1:lang(en),
  kuc-tooltip-1-23-1:lang(en) * {
    font-family: sans-serif;
  }
  kuc-tooltip-1-23-1:lang(es),
  kuc-tooltip-1-23-1:lang(es) * {
    font-family: sans-serif;
  }
  kuc-tooltip-1-23-1:lang(ja),
  kuc-tooltip-1-23-1:lang(ja) * {
    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
      sans-serif;
  }
  kuc-tooltip-1-23-1:lang(zh),
  kuc-tooltip-1-23-1:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", sans-serif;
  }
  kuc-tooltip-1-23-1:lang(zh-TW),
  kuc-tooltip-1-23-1:lang(zh-TW) * {
    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC",sans-serif;
  }
  .kuc-tooltip-1-23-1__group__title--hidden {
    display: none;
  }
  .kuc-tooltip-1-23-1__group {
    position: relative;
    display: inline-block;
  }
  .kuc-tooltip-1-23-1__group::after {
    position: absolute;
    right: -20%;
    top: 100%;
    left: -20%;
    display: block;
    height: calc(0.5em * 2);
  }
  .kuc-tooltip-1-23-1__group__title .kuc-tooltip-1-23-1__group__title__wrapper__text {
    max-width: var(--kuc-tooltip-width, 250px);
    width: var(--kuc-tooltip-width, auto);
    min-height: var(--kuc-tooltip-height, 32px);;
    height: var(--kuc-tooltip-height, auto);
    padding: 6px 8px;
    color: var(--kuc-tooltip-color, #ffffff);
    text-align: start;
    text-decoration: none;
    word-wrap: break-word;
    overflow: auto;
    white-space: normal;
    background-color: var(--kuc-tooltip-background-color, #000000);
    font-size: var(--kuc-tooltip-font-size);
    border-radius: 6px;
    box-shadow: 0 6px 16px 0 rgb(0 0 0 / 8%), 0 3px 6px -4px rgb(0 0 0 / 12%), 0 9px 28px 8px rgb(0 0 0 / 5%);
    box-sizing: border-box;
  }
  .kuc-tooltip-1-23-1__group__title {
    position: absolute;
    top: calc(100% + calc(0.5em * 2));
    left: 50%;
    transform: translateX(-50%);
    margin: 0;
    border-radius: 0.25em;
    color: var(--kuc-tooltip-color, #ffffff);
    width: max-content;
    z-index: 1000;
  }
  .kuc-tooltip-1-23-1__group.kuc-tooltip-1-23-1__group--top > .kuc-tooltip-1-23-1__group__title {
    top: unset;
    bottom: 100%;
  }
  .kuc-tooltip-1-23-1__group.kuc-tooltip-1-23-1__group--bottom > .kuc-tooltip-1-23-1__group__title {
    width: max-content;
    top: auto;
  }
  .kuc-tooltip-1-23-1__group.kuc-tooltip-1-23-1__group--left > .kuc-tooltip-1-23-1__group__title {
    width: max-content;
    height: fit-content;
    margin: auto 0;
    right: 100%;
    left: auto;
    top: 0;
    bottom: 0;
    transform: translateX(0);
  }
  .kuc-tooltip-1-23-1__group.kuc-tooltip-1-23-1__group--right > .kuc-tooltip-1-23-1__group__title {
    width: max-content;
    height: fit-content;
    margin: auto 0;
    left: 100%;
    top: 0;
    bottom: 0;
    transform: translateX(0);
  }
  .kuc-tooltip-1-23-1__group .kuc-tooltip-1-23-1__group__title__wrapper__arrow {
    border: 0.5em solid transparent;
    border-bottom-color: var(--kuc-tooltip-background-color, #000000);
  }
  .kuc-tooltip-1-23-1__group.kuc-tooltip-1-23-1__group--top > .kuc-tooltip-1-23-1__group__title .kuc-tooltip-1-23-1__group__title__wrapper__arrow {
    border-top-color: var(--kuc-tooltip-background-color, #000000);
    border-right-color: transparent;
    border-bottom-color: transparent;
    margin: auto 0;
  }
  .kuc-tooltip-1-23-1__group.kuc-tooltip-1-23-1__group--left > .kuc-tooltip-1-23-1__group__title .kuc-tooltip-1-23-1__group__title__wrapper__arrow {
    border-left-color: var(--kuc-tooltip-background-color, #000000);
    border-bottom-color: transparent;
  }
  .kuc-tooltip-1-23-1__group.kuc-tooltip-1-23-1__group--right > .kuc-tooltip-1-23-1__group__title .kuc-tooltip-1-23-1__group__title__wrapper__arrow {
    border-right-color: var(--kuc-tooltip-background-color, #000000);
    border-bottom-color: transparent;
    width: fit-content;
    height: fit-content;
    margin: auto 0;
    top: 0;
    bottom: 0;
    right: 100%;
    left: auto;
  }
  .kuc-tooltip-1-23-1__group .kuc-tooltip-1-23-1__group__title__wrapper {
    display: flex;
    align-items: center;
  }
  .kuc-tooltip-1-23-1__group.kuc-tooltip-1-23-1__group--top > .kuc-tooltip-1-23-1__group__title .kuc-tooltip-1-23-1__group__title__wrapper {
    flex-direction: column-reverse;
  }
  .kuc-tooltip-1-23-1__group.kuc-tooltip-1-23-1__group--bottom > .kuc-tooltip-1-23-1__group__title .kuc-tooltip-1-23-1__group__title__wrapper {
    flex-direction: column;
  }
  .kuc-tooltip-1-23-1__group.kuc-tooltip-1-23-1__group--left > .kuc-tooltip-1-23-1__group__title .kuc-tooltip-1-23-1__group__title__wrapper {
    flex-direction: row-reverse;
  }
`;var vt=function(o,t,e,i){var n=arguments.length,a=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(o,t,e,i);else for(var r=o.length-1;r>=0;r--)(s=o[r])&&(a=(n<3?s(a):n>3?s(t,e,a):s(t,e))||a);return n>3&&a&&Object.defineProperty(t,e,a),a};let An;(()=>{if(An=window.customElements.get("kuc-tooltip-1-23-1"),An)return;class o extends k{constructor(e){super(),this.className="",this.id="",this.placement="top",this.title="",this.container="",this.describeChild=!1,this._container="",this._GUID=M();const i=$(e);Object.assign(this,i),this._globalEscapeBound=this._globalEscape.bind(this)}update(e){e.has("container")&&(this.container&&oe(this.container)?this._container=be(this.container):this._container=this.container),super.update(e)}render(){return p`
        <div
          class="kuc-tooltip-1-23-1__group kuc-tooltip-1-23-1__group--${this._getPlacement()}"
        >
          <div
            class="kuc-tooltip-1-23-1__group__container"
            @focusin="${this._handleFocusinContainer}"
            @focusout="${this._handleFocusoutContainer}"
            @mouseenter="${this._handleMouseEnterContainer}"
            @mouseleave="${this._handleMouseLeaveContainer}"
            @touchstart="${this._handleTouchStartContainer}"
          >
            ${this._container}
          </div>
          ${this._getTitleTemplate()}
        </div>
      `}updated(){this._initializeFirstChildElement(),this.describeChild?this._setChildTitleAttribute():this._setChildAriaLabelAttribute()}_handleMouseEnterContainer(){this._openTooltip()}_handleTouchStartContainer(){this._openTooltip()}_handleMouseLeaveContainer(e){const i=e.relatedTarget;this._titleWrapper&&this._titleWrapper.contains(i)||this._closeTooltip()}_initializeFirstChildElement(){if(typeof this._container!="string"){const e=this._groupContainerEL.firstElementChild;e&&!e.getAttribute("aria-describedby")&&(this._firstChildEl=e)}}_setChildTitleAttribute(){this._firstChildEl&&(this._firstChildEl.setAttribute("title",this.title),this._firstChildEl.removeAttribute("aria-label"))}_setChildAriaLabelAttribute(){this._firstChildEl&&(this._firstChildEl.setAttribute("aria-label",this.title),this._firstChildEl.removeAttribute("title"))}_getTitleTemplate(){return this.title?p`
        <div
          id="${this._GUID}-title"
          class="kuc-tooltip-1-23-1__group__title kuc-tooltip-1-23-1__group__title--hidden"
          role="tooltip"
          @mouseleave="${this._handleMouseLeaveTitle}"
        >
          <div class="kuc-tooltip-1-23-1__group__title__wrapper">
            <div class="kuc-tooltip-1-23-1__group__title__wrapper__arrow"></div>
            <div class="kuc-tooltip-1-23-1__group__title__wrapper__text">
              ${this.title}
            </div>
          </div>
        </div>
      `:p``}_handleMouseLeaveTitle(e){const i=e.relatedTarget;this._groupContainerEL.contains(i)||this._closeTooltip()}_handleFocusinContainer(){this._openTooltip()}_handleFocusoutContainer(){this._closeTooltip()}_openTooltip(){this._updateChildElementAttributes(!0),this._showTooltip(),this._attachGlobalListener()}_closeTooltip(){this._updateChildElementAttributes(!1),this._hideTooltip(),this._removeGlobalListener()}_updateChildElementAttributes(e){if(!(!this._firstChildEl||!this.describeChild)){if(e){this._firstChildEl.removeAttribute("title"),this._firstChildEl.setAttribute("aria-describedby",`${this._GUID}-title`);return}this._firstChildEl.removeAttribute("aria-describedby"),this._firstChildEl.setAttribute("title",this.title)}}_showTooltip(){this._tooltips.length!==0&&this._tooltips.forEach(e=>{e.id===`${this._GUID}-title`&&e.classList.remove("kuc-tooltip-1-23-1__group__title--hidden")})}_hideTooltip(){this._tooltips.length!==0&&this._tooltips.forEach(e=>{e.id===`${this._GUID}-title`&&e.classList.add("kuc-tooltip-1-23-1__group__title--hidden")})}_attachGlobalListener(){document.addEventListener("keydown",this._globalEscapeBound)}_removeGlobalListener(){document.removeEventListener("keydown",this._globalEscapeBound)}_globalEscape(e){(e.key==="Escape"||e.key==="Esc")&&this._closeTooltip()}_getPlacement(){return["top","bottom","left","right"].includes(this.placement)?this.placement:"top"}}vt([u({type:String,reflect:!0,attribute:"class"})],o.prototype,"className",void 0),vt([u({type:String,reflect:!0,attribute:"id"})],o.prototype,"id",void 0),vt([u({type:String})],o.prototype,"placement",void 0),vt([u({type:String})],o.prototype,"title",void 0),vt([u()],o.prototype,"container",void 0),vt([u({type:Boolean})],o.prototype,"describeChild",void 0),vt([b(".kuc-tooltip-1-23-1__group__container")],o.prototype,"_groupContainerEL",void 0),vt([b(".kuc-tooltip-1-23-1__group__title__wrapper")],o.prototype,"_titleWrapper",void 0),vt([q(".kuc-tooltip-1-23-1__group__title")],o.prototype,"_tooltips",void 0),window.customElements.define("kuc-tooltip-1-23-1",o),x(Oc),An=o})();const Bc=`
  kuc-user-org-group-select-1-23-1,
  kuc-user-org-group-select-1-23-1 *,
  kuc-user-org-group-select-1-23-1:lang(en),
  kuc-user-org-group-select-1-23-1:lang(en) * {
    font-family: sans-serif;
  }
  kuc-user-org-group-select-1-23-1:lang(es),
  kuc-user-org-group-select-1-23-1:lang(es) * {
    font-family: sans-serif;
  }
  kuc-user-org-group-select-1-23-1:lang(ja),
  kuc-user-org-group-select-1-23-1:lang(ja) * {
    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
      sans-serif;
  }
  kuc-user-org-group-select-1-23-1:lang(zh),
  kuc-user-org-group-select-1-23-1:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", sans-serif;
  }
  kuc-user-org-group-select-1-23-1:lang(zh-TW),
  kuc-user-org-group-select-1-23-1:lang(zh-TW) * {
    font-family: "微軟正黑體", "Microsoft JhengHei", "新宋体", NSimSun, STHeiti, Hei, "Heiti SC", sans-serif;
  }
  kuc-user-org-group-select-1-23-1 {
    display: inline-table;
    width: var(--kuc-user-org-group-select-toggle-width, 280px);
    position: relative;
    display: inline-table;
    font-size: 14px;
    color: #333333;
    vertical-align: top;
    line-height: 1.5;
  }
  kuc-user-org-group-select-1-23-1[hidden] {
    display: none;
  }
  .kuc-user-org-group-select-1-23-1__group {
    border: none;
    padding: 0px;
    height: auto;
    display: inline-block;
    width: 100%;
    margin: 0px;
  }
  .kuc-user-org-group-select-1-23-1__group__label {
    padding: 4px 0px 8px 0px;
    display: inline-block;
    white-space: nowrap;
  }
  .kuc-user-org-group-select-1-23-1__group__label[hidden] {
    display: none;
  }
  .kuc-user-org-group-select-1-23-1__group__container {
    font-size: var(--kuc-user-org-group-select-font-size, 14px);
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: 0px;
    margin: 0px;
    align-items: start;
  }
  .kuc-user-org-group-select-1-23-1__group__container__select-area {
    width: var(--kuc-user-org-group-select-toggle-width, 280px);
    position: relative;
  }
  .kuc-user-org-group-select-1-23-1__group__container__select-area__toggle {
    position: relative;
    display: flex;
    flex-direction: row;
  }
  .kuc-user-org-group-select-1-23-1__group__container__select-area__toggle__input {
    width: calc(var(--kuc-user-org-group-select-toggle-width, 280px) - 40px);
    height: var(--kuc-user-org-group-select-toggle-height, 40px);
    box-sizing: border-box;
    box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;
    border: 1px solid #e3e7e8;
    border-right: 0;
    background-color: #ffffff;
    color: #000000;
    font-size: var(--kuc-user-org-group-select-font-size, 14px);
    line-height: 1.5;
    padding: 0 8px;
    margin: 0;
  }
  input[type=text].kuc-user-org-group-select-1-23-1__group__container__select-area__toggle__input:focus {
    outline: none;
    border: 1px solid #3498db;
    box-shadow: none;
  }
  input[type=text].kuc-user-org-group-select-1-23-1__group__container__select-area__toggle__input:disabled,
  .kuc-user-org-group-select-1-23-1__group__container__select-area__toggle__icon__button:disabled {
    background-color: #d4d7d7;
    box-shadow: none;
    cursor: not-allowed;
    color: #888888;
  }

  .kuc-user-org-group-select-1-23-1__group__container__select-area__toggle__icon__button {
    width: 40px;
    height: var(--kuc-user-org-group-select-toggle-height, 40px);
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0;
    border: none;
    border-left: 1px solid #e3e7e8;
    background-color: transparent;
    cursor: pointer;
  }
  .kuc-user-org-group-select-1-23-1__group__container__select-area__toggle__icon__button__svg {
    border: 1px solid #e3e7e8;
    border-left: none;
    background-color: #eeeeee;
  }
  .kuc-user-org-group-select-1-23-1__group__container__picker {
    margin-left: 8px;
  }
  .kuc-user-org-group-select-1-23-1__group__container__picker__button {
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
  .kuc-user-org-group-select-1-23-1__group__container__picker__button:disabled {
    cursor: not-allowed;
  }
  .kuc-user-org-group-select-1-23-1__group__container__select-area__select-menu {
    width: 100%;
    padding: 0;
    border: none;
    box-sizing: border-box;
    background-color: #ffffff;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    position: absolute;
    z-index: 2000;
    margin: 0;
    list-style: none;
  }
  .kuc-user-org-group-select-1-23-1__group__container__select-area__select-menu[hidden] {
    display: none;
  }
  .kuc-user-org-group-select-1-23-1__group__container__select-area__select-menu__item {
   border-bottom: 1px solid #e3e7e8;
   display: flex;
   background-color: #f7f9fa;
   flex-direction: row;
   cursor: pointer;
   box-sizing: border-box;
  }
  .kuc-user-org-group-select-1-23-1__group__container__select-area__select-menu__item--disabled,
  .kuc-user-org-group-select-1-23-1__group__container__select-area__select-menu__item--disabled[aria-selected="true"] {
    background-color: #d4d7d7;
    cursor: not-allowed;
    color: #888888;
  }
  .kuc-user-org-group-select-1-23-1__group__container__select-area__select-menu__item__highlight[role="option"] {
    background-color: #d8e1e6;
    flex-direction: row;
  }
  .kuc-user-org-group-select-1-23-1__group__container__select-area__select-menu__item__icon {
    min-width: 48px;
    width: 48px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-self: center;
    margin: 0;
    padding: 0;
    background-color: transparent;
    cursor: pointer;
  }
  .kuc-user-org-group-select-1-23-1__group__container__select-area__select-menu__item__icon--disabled {
    background-color: #d4d7d7;
    box-shadow: none;
    cursor: not-allowed;
    color: #888888;
  }
  .kuc-user-org-group-select-1-23-1__group__container__select-area__select-menu__item__text {
    font-size: var(--kuc-user-org-group-select-font-size, 14px);
    line-height: normal;
    width: 100%;
    padding: 2px 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #3498db;
    align-content: center;
    white-space: nowrap;
  }
  .kuc-user-org-group-select-1-23-1__group__container__select-area__selected-list {
    padding: 0;
    margin: 0;
    list-style: none;
    width: 100%;
  }
  .kuc-user-org-group-select-1-23-1__group__container__select-area__selected-list__item {
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #e3e7e8;
    justify-content: space-between;
    align-items: center;
    margin-top: 8px;
  }
  .kuc-user-org-group-select-1-23-1__group__container__select-area__selected-list__item__content {
    display: flex;
    flex-direction: row;
    flex: 1;
    min-width: 0;
  }
  .kuc-user-org-group-select-1-23-1__group__container__select-area__selected-list__item__remove-icon,
  .kuc-user-org-group-select-1-23-1__group__container__select-area__selected-list__item__content__icon {
    width: 24px;
    height: 24px;
    flex-shrink: 0; 
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: center;
  }
  .kuc-user-org-group-select-1-23-1__group__container__select-area__selected-list__item__remove-icon__button {
    border: none;
    background-color: transparent;
    width: 100%;
    height: 100%;
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    flex: 0;
    flex-shrink: 0;
  }
  .kuc-user-org-group-select-1-23-1__group__container__select-area__selected-list__item__remove-icon__button:focus-within {
    border: 1px solid #3498db;
  }
  .kuc-user-org-group-select-1-23-1__group__container__select-area__selected-list__item__remove-icon__button:focus {
    outline: none;
  }
 .kuc-user-org-group-select-1-23-1__group__container__select-area__selected-list__item__content__text{
    padding: 2px 0 2px 8px;
    line-height: normal;
    align-content: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    flex: 1;
  }
  .kuc-user-org-group-select-1-23-1__group__container__select-area__selected-list__item__content__text--disabled {
    background-color: #d4d7d7;
    color: #888888;
  }
`;var O=function(o,t,e,i){var n=arguments.length,a=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(o,t,e,i);else for(var r=o.length-1;r>=0;r--)(s=o[r])&&(a=(n<3?s(a):n>3?s(t,e,a):s(t,e))||a);return n>3&&a&&Object.defineProperty(t,e,a),a};let Ln;(()=>{if(Ln=window.customElements.get("kuc-user-org-group-select-1-23-1"),Ln)return;class o extends k{constructor(e){super(),this.className="",this.error="",this.icon="",this.id="",this.label="",this.placeholder="",this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this.items=[],this.value=[],this._selectedValues=[],this._searchText="",this._selectorVisible=!1,this._query="",this._matchingItems=[],this._DISABLED_ITEM_CLASS="kuc-user-org-group-select-1-23-1__group__container__select-area__select-menu__item--disabled",this._DISABLED_ICON_CLASS="kuc-user-org-group-select-1-23-1__group__container__select-area__select-menu__item__icon--disabled",this._SMALL_ICON_SIZE=24,this._LARGE_ICON_SIZE=48,this._GUID=M();const i=$(e);this._handleClickDocument=this._handleClickDocument.bind(this),this._handleScrollMenu=this._handleScrollMenu.bind(this),Object.assign(this,i)}shouldUpdate(e){if(e.has("items")){if(!D(this.items))return this.throwErrorAfterUpdateComplete(y.ITEMS.IS_NOT_ARRAY),!1;const i=this.items.map(n=>n.value);if(!un(i))return this.throwErrorAfterUpdateComplete(y.ITEMS.IS_DUPLICATED),!1}return e.has("value")&&!D(this.value)?(this.throwErrorAfterUpdateComplete(y.VALUE.IS_NOT_ARRAY),!1):!0}render(){const e=this._getIconType();return p`
        <div class="kuc-user-org-group-select-1-23-1__group">
          <div
            class="kuc-user-org-group-select-1-23-1__group__label"
            id="${this._GUID}-label"
            ?hidden="${!this.label}"
          >
            <kuc-base-label-1-23-1
              .text="${this.label}"
              .requiredIcon="${this.requiredIcon}"
            ></kuc-base-label-1-23-1>
          </div>
          <div class="kuc-user-org-group-select-1-23-1__group__container">
            <div
              class="kuc-user-org-group-select-1-23-1__group__container__select-area"
            >
              <div
                class="kuc-user-org-group-select-1-23-1__group__container__select-area__toggle"
              >
                <input
                  class="kuc-user-org-group-select-1-23-1__group__container__select-area__toggle__input"
                  role="combobox"
                  type="text"
                  .value="${this._searchText}"
                  aria-haspopup="listbox"
                  aria-autocomplete="list"
                  aria-labelledby="${this._GUID}-label"
                  aria-controls="${this._GUID}-listbox"
                  aria-describedby="${this._GUID}-error"
                  aria-expanded="${this._selectorVisible}"
                  aria-required="${this.requiredIcon}"
                  placeholder="${this.placeholder}"
                  ?disabled="${this.disabled}"
                  @change="${this._handleChangeUserOrgGroupInput}"
                  @input="${this._handleInputUserOrgGroupInput}"
                  @keydown="${this._handleKeyDownUserOrgGroupInput}"
                  @click="${this._handleClickUserOrgGroupInput}"
                  @blur="${this._handleBlurUserOrgGroupInput}"
                />
                <div
                  class="kuc-user-org-group-select-1-23-1__group__container__select-area__toggle__icon"
                >
                  <button
                    class="kuc-user-org-group-select-1-23-1__group__container__select-area__toggle__icon__button"
                    tabindex="-1"
                    type="button"
                    aria-label="search"
                    aria-controls="${this._GUID}-listbox"
                    aria-expanded="${this._selectorVisible}"
                    ?disabled="${this.disabled}"
                    @mousedown="${this._handleMouseDownToggleButton}"
                    @click="${this._handleClickToggleButton}"
                  >
                    ${this._getSearchPickerSvgTemplate()}
                  </button>
                </div>
              </div>
              <ul
                class="kuc-user-org-group-select-1-23-1__group__container__select-area__select-menu"
                role="listbox"
                id="${this._GUID}-listbox"
                aria-labelledby="${this._GUID}-label"
                aria-hidden="${!this._selectorVisible}"
                ?hidden="${!this._selectorVisible}"
                @mouseleave="${this._handleMouseLeaveMenu}"
                @mousedown="${this._handleMouseDownMenu}"
              >
                ${this._matchingItems.map((i,n)=>this._getMatchedItemTemplate(i,n))}
              </ul>
              <ul
                class="kuc-user-org-group-select-1-23-1__group__container__select-area__selected-list"
              >
                ${this._selectedValues.map((i,n)=>this._getSelectedItemTemplate(i,n))}
              </ul>
            </div>
            <div
              class="kuc-user-org-group-select-1-23-1__group__container__picker"
              ?hidden="${!e}"
            >
              <button
                class="kuc-user-org-group-select-1-23-1__group__container__picker__button"
                tabindex="-1"
                type="button"
                ?disabled="${this.disabled}"
                @click="${this._handleClickIconButton}"
              >
                ${this._getPickerSVGTemplateByIcon(e)}
              </button>
            </div>
          </div>
          <kuc-base-error-1-23-1
            .text="${this.error}"
            .guid="${this._GUID}"
            ?hidden="${!this.error}"
            ariaLive="assertive"
          ></kuc-base-error-1-23-1>
        </div>
      `}_getIconType(){if(this.icon==="user"||this.icon==="org"||this.icon==="group")return this.icon}firstUpdated(){this._initializeSelectedValues(),window.addEventListener("resize",()=>{this._actionResizeScrollWindow()}),window.addEventListener("scroll",()=>{this._actionResizeScrollWindow()})}_actionResizeScrollWindow(){this._timeoutID||!this._selectorVisible||(this._timeoutID=window.setTimeout(()=>{this._timeoutID=null,this._setMenuPosition()},50))}async updated(e){super.updated(e),e.has("value")&&this._initializeSelectedValues(),await this.updateComplete,this._selectorVisible?(this._menuEl.addEventListener("scroll",this._handleScrollMenu),this._setMenuPosition(),this._scrollToView(),this._actionClearAllHighlightMenuItem(),setTimeout(()=>{document.addEventListener("click",this._handleClickDocument,!0)},1)):setTimeout(()=>{document.removeEventListener("click",this._handleClickDocument,!0)},1)}_initializeSelectedValues(){Array.isArray(this.value)&&(this._selectedValues=this.value.filter(e=>this.items.some(i=>i.value===e)))}_getMatchedItemTemplate(e,i){const n=e.label===void 0||e.label===null?e.value:e.label;let a=p`${n}`;const s=e.disabled,r=this._query.trim().toLowerCase();if(r&&n){const l=n.toLowerCase().indexOf(r),c=l+r.length;a=p`
          ${n.slice(0,l)}<b>${n.slice(l,c)}</b>${n.slice(c)}
        `}return p`
        <li
          class="kuc-user-org-group-select-1-23-1__group__container__select-area__select-menu__item ${s?this._DISABLED_ITEM_CLASS:""}"
          role="option"
          value="${e.value!==void 0?e.value:""}"
          id="${this._GUID}-menuitem-${i}"
          @click="${s?null:this._handleClickUserOrgGroupItem}"
          @mouseover="${s?null:this._handleMouseOverUserOrgGroupItem}"
        >
          <div
            class="kuc-user-org-group-select-1-23-1__group__container__select-area__select-menu__item__icon ${s?this._DISABLED_ICON_CLASS:""}"
          >
            ${this._getSvgTemplateByType(e?e.type:"")}
          </div>
          <div
            class="kuc-user-org-group-select-1-23-1__group__container__select-area__select-menu__item__text"
          >
            ${a}
          </div>
        </li>
      `}_getSelectedItemTemplate(e,i){const n=this.items.filter(r=>r.value===e)[0];if(!n)return"";const a=n?.disabled,s=n.label===void 0||n.label===null?n.value:n.label;return p`
        <li
          class="kuc-user-org-group-select-1-23-1__group__container__select-area__selected-list__item"
          value="${e}"
          id="${this._GUID}-selected-item-${i}"
        >
          <div
            class="kuc-user-org-group-select-1-23-1__group__container__select-area__selected-list__item__content"
          >
            <div
              class="kuc-user-org-group-select-1-23-1__group__container__select-area__selected-list__item__content__icon"
            >
              ${this._getSvgTemplateByType(n.type||"",this._SMALL_ICON_SIZE)}
            </div>
            <div
              class="kuc-user-org-group-select-1-23-1__group__container__select-area__selected-list__item__content__text ${a?"kuc-user-org-group-select-1-23-1__group__container__select-area__selected-list__item__content__text--disabled":""}"
            >
              ${s}
            </div>
          </div>
          <div
            class="kuc-user-org-group-select-1-23-1__group__container__select-area__selected-list__item__remove-icon"
            ?hidden="${this.disabled}"
          >
            <button
              class="kuc-user-org-group-select-1-23-1__group__container__select-area__selected-list__item__remove-icon__button"
              type="button"
              aria-label="remove"
              selected-item-index="${i}"
              @click="${this._handleClickRemoveSelectedItem}"
            >
              ${this._getRemoveSVGTemplate()}
            </button>
          </div>
        </li>
      `}_handleChangeUserOrgGroupInput(e){e.stopPropagation()}_handleInputUserOrgGroupInput(e){e.stopPropagation(),this._searchText=this._inputEl.value,this._query=this._inputEl.value,this._setMatchingItems()}_handleClickUserOrgGroupInput(e){e.stopPropagation(),this._inputEl.select(),this._setMatchingItems()}_handleBlurUserOrgGroupInput(e){const n=e.relatedTarget;n&&(this._toggleEl.contains(n)||this._menuEl&&this._menuEl.contains(n))||this._resetToggleInputValue()}_handleKeyDownUserOrgGroupInput(e){switch(e.key){case"Up":case"ArrowUp":{if(e.preventDefault(),!this._selectorVisible){this._actionShowMenu();break}this._actionHighlightPrevMenuItem();break}case"Tab":this._selectorVisible&&this._actionHideMenu();break;case"Down":case"ArrowDown":{if(e.preventDefault(),!this._selectorVisible){this._actionShowMenu();break}this._actionHighlightNextMenuItem();break}case"Enter":{e.preventDefault();const i=this._highlightItemEl;if(i===null)break;const n=i.getAttribute("value");this._actionUpdateValue(n),this._actionHideMenu();break}case"Escape":{e.preventDefault(),this._selectorVisible&&e.stopPropagation(),this._resetToggleInputValue(),this._actionHideMenu();break}case"Home":{this._selectorVisible&&(e.preventDefault(),this._actionHighlightFirstMenuItem());break}case"End":{this._selectorVisible&&(e.preventDefault(),this._actionHighlightLastMenuItem());break}}}_resetToggleInputValue(){this._searchText="",this._query=""}_actionHighlightPrevMenuItem(){let e=null;this._highlightItemEl!==null&&(e=this._highlightItemEl.previousElementSibling),e===null&&(e=this._lastItemEl);let i=!1;for(let n=0;n<this._matchingItems.length&&(i=e.classList.contains(this._DISABLED_ITEM_CLASS),i);n++)e=e.previousElementSibling,e===null&&(e=this._lastItemEl);!i&&this._setHighlightAndActiveDescendantMenu(e)}_actionHighlightNextMenuItem(){let e=null;this._highlightItemEl!==null&&(e=this._highlightItemEl.nextElementSibling),e===null&&(e=this._firstItemEl);let i=!1;for(let n=0;n<this._matchingItems.length&&(i=e.classList.contains(this._DISABLED_ITEM_CLASS),i);n++)e=e.nextElementSibling,e===null&&(e=this._firstItemEl);!i&&this._setHighlightAndActiveDescendantMenu(e)}_setHighlightAndActiveDescendantMenu(e){this._actionHighlightMenuItem(e),this._actionSetActiveDescendant(e.id),this._scrollToView()}_actionSetActiveDescendant(e){e!==void 0&&this._inputEl!==null&&this._inputEl.setAttribute("aria-activedescendant",e)}_actionRemoveActiveDescendant(){this._inputEl.removeAttribute("aria-activedescendant")}_setMenuPosition(){this._setMenuPositionAboveOrBelow(),this._setMenuPositionLeftOrRight()}_handleClickRemoveSelectedItem(e){const i=e.currentTarget,n=parseInt(i.getAttribute("selected-item-index")||"-1",10),a=this._selectedValues.filter((l,c)=>c!==n),s=this.value;this._selectedValues=a,this.value=a;const r={oldValue:s,value:this.value};m(this,"change",r)}_handleClickToggleButton(e){e.preventDefault(),this._inputEl.focus();const i=this._inputEl.value.length;this._inputEl.setSelectionRange(i,i),this._setMatchingItems(),this._actionShowMenu()}_handleMouseDownToggleButton(e){e.preventDefault()}_handleClickIconButton(e){e.preventDefault();const i={value:this.value};m(this,"click-picker-icon",i)}_setMenuPositionAboveOrBelow(){this._menuEl.style.height="auto",this._menuEl.style.bottom="auto",this._menuEl.style.overflowY="scroll",this._menuEl.style.maxHeight="none";const e=this._menuEl.getBoundingClientRect().height;this._menuEl.style.maxHeight="var(--kuc-user-org-group-select-menu-max-height, none)";const i=this._menuEl.getBoundingClientRect().height,n=this._getDistanceToggleButton();if(n.toBottom>=i){e>i?this._previousScrollTop&&(this._menuEl.scrollTop=this._previousScrollTop):this._menuEl.style.overflowY="";return}if(n.toBottom<n.toTop){if(this._menuEl.style.bottom=`${this._selectAreaEl.offsetHeight}px`,n.toTop>=i){e>i?this._previousScrollTop&&(this._menuEl.scrollTop=this._previousScrollTop):this._menuEl.style.overflowY="";return}this._menuEl.style.height=`${n.toTop}px`}else this._menuEl.style.height=`${n.toBottom}px`;this._previousScrollTop&&(this._menuEl.scrollTop=this._previousScrollTop)}_setMenuPositionLeftOrRight(){this._menuEl.style.right="auto";const e=this._menuEl.getBoundingClientRect().width,i=this._getDistanceToggleButton();if(i.toRight>=e||i.toLeft<e||i.toRight<0)return;const n=this._toggleEl.offsetWidth-i.toRight;this._menuEl.style.right=n>0?`${n}px`:"0px"}_getDistanceToggleButton(){const{scrollbarWidth:e,scrollbarHeight:i}=this._getScrollbarWidthHeight(),n=document.body.scrollHeight>window.innerHeight,a=document.body.scrollWidth>window.innerWidth,s=this._toggleEl.getBoundingClientRect().top,r=window.innerHeight-this._toggleEl.getBoundingClientRect().bottom-(a?i:0),l=this._toggleEl.getBoundingClientRect().left,c=window.innerWidth-this._toggleEl.getBoundingClientRect().left-(n?e:0);return{toTop:s,toBottom:r,toLeft:l,toRight:c}}_getScrollbarWidthHeight(){const e=document.createElement("div");e.style.cssText="overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(e);const i=e.offsetWidth-e.clientWidth,n=e.offsetHeight-e.clientHeight;return document.body.removeChild(e),{scrollbarWidth:i,scrollbarHeight:n}}_scrollToView(){if(!this._highlightItemEl||!this._menuEl)return;const e=this._menuEl.getBoundingClientRect(),i=this._highlightItemEl.getBoundingClientRect();i.top<e.top&&(this._menuEl.scrollTop-=e.top-i.top),e.bottom<i.bottom&&(this._menuEl.scrollTop+=i.bottom-e.bottom)}_actionHighlightFirstMenuItem(){let e=this._firstItemEl,i=!1;for(let n=0;n<this._matchingItems.length&&(i=e.classList.contains(this._DISABLED_ITEM_CLASS),i);n++)e=e.nextElementSibling;!i&&this._setHighlightAndActiveDescendantMenu(e)}_actionHighlightLastMenuItem(){let e=this._lastItemEl,i=!1;for(let n=0;n<this._matchingItems.length&&(i=e.classList.contains(this._DISABLED_ITEM_CLASS),i);n++)e=e.previousElementSibling;!i&&this._setHighlightAndActiveDescendantMenu(e)}_setMatchingItems(){const e=this.items.filter(i=>{const n=s=>s.replace(/[.*+?^=!:${}()|[\]/\\]/g,"\\$&"),a=new RegExp(n(this._query.trim()),"gi");return i.label?a.test(i.label):i.value?a.test(i.value):!1});e.length===0?(this._matchingItems=[],this._actionHideMenu()):(this._matchingItems=e,this._actionShowMenu())}_actionShowMenu(){this._query.trim()===""&&(this._matchingItems=this.items),!(this.items.length===0||this._matchingItems.length===0)&&(this._inputEl.focus(),this._selectorVisible=!0)}_handleMouseOverUserOrgGroupItem(e){const i=this._getItemElementWhenMouseOverDown(e.target);this._actionHighlightMenuItem(i)}_actionHighlightMenuItem(e){this._actionClearAllHighlightMenuItem(),e.setAttribute("aria-selected","true"),e.classList.add("kuc-user-org-group-select-1-23-1__group__container__select-area__select-menu__item__highlight")}_handleClickUserOrgGroupItem(e){const n=this._getItemElementWhenMouseOverDown(e.target).getAttribute("value");this._actionUpdateValue(n)}_actionUpdateValue(e){if(this._selectedValues.includes(e)){this._resetToggleInputValue();return}const i=this.value,n=[...this._selectedValues,e];this._selectedValues=n,this.value=n;const a={oldValue:i,value:this.value};this._query="",m(this,"change",a),this._resetToggleInputValue()}_getItemElementWhenMouseOverDown(e){return e.classList.value.split(" ").includes("kuc-user-org-group-select-1-23-1__group__container__select-area__select-menu__item")?e:this._getItemElementWhenMouseOverDown(e.parentElement)}_handleMouseLeaveMenu(){this._actionClearAllHighlightMenuItem()}_actionClearAllHighlightMenuItem(){this._itemsEl.forEach(e=>{e.setAttribute("aria-selected","false"),e.classList.remove("kuc-user-org-group-select-1-23-1__group__container__select-area__select-menu__item__highlight")}),this._actionRemoveActiveDescendant()}_handleMouseDownMenu(e){e.preventDefault()}_handleClickDocument(e){e.target===this._toggleEl||this._toggleEl.contains(e.target)||Array.from(this._disabledItemsEl).some(i=>i===e.target||i.contains(e.target))||this._actionHideMenu()}_handleScrollMenu(){this._previousScrollTop=this._menuEl.scrollTop}_actionHideMenu(){this._selectorVisible=!1,this._actionRemoveActiveDescendant()}_getPickerSVGTemplateByIcon(e){if(!e)return"";switch(e){case"user":return this._getUserPickerSvgTemplate();case"org":return this._getOrgPickerSvgTemplate();case"group":return this._getGroupPickerSvgTemplate();default:return""}}_getSvgTemplateByType(e,i=this._LARGE_ICON_SIZE){if(!e)return"";switch(e){case"user":return this._getUserSvgTemplate(i);case"org":return this._getOrgSvgTemplate(i);case"group":return this._getGroupSvgTemplate(i);default:return""}}_getUserPickerSvgTemplate(){return C`
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_11108_7820)">
            <path d="M40 0H0V40H40V0Z" fill="#3498db"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M30.7952 29.5014C30.6103 29.1232 29.0893 28.2243 26.4523 27.2194C26.3083 27.1766 26.1685 27.121 26.0346 27.0532C24.9881 26.7068 23.9606 26.3054 22.9564 25.8507L22.8145 25.7719C22.1496 25.3286 22.0013 24.4536 22.0017 22.7937C22.0235 22.0583 22.2846 21.3509 22.7443 20.7784C23.1224 20.1551 23.3587 19.4542 23.4442 18.6661C23.5273 18.1843 23.7029 17.7231 23.923 17.3756C24.1192 16.9983 24.2545 16.5924 24.3239 16.1729L24.3601 16.0255C24.4067 15.883 24.4067 15.7294 24.3636 15.5974C24.2774 15.3437 24.2123 15.0833 24.1689 14.8188L24.1456 14.6767L24.1635 14.5338C24.2604 13.7586 24.3379 13.1224 24.4059 12.5811C24.4211 11.6974 24.0911 10.8425 23.4802 10.1922C22.6022 9.24161 21.3353 8.74834 20.0457 8.85492L19.8783 8.85466C18.5907 8.74424 17.3242 9.23383 16.4373 10.1905C15.8303 10.8294 15.5009 11.6826 15.5145 12.4708C15.5459 12.7398 15.576 13.0061 15.634 13.5218C15.6816 13.9435 15.7157 14.2344 15.7516 14.5219L15.7676 14.6495L15.7506 14.7771C15.7126 15.063 15.6424 15.3438 15.5603 15.5586C15.5129 15.7122 15.5129 15.8764 15.5603 16.03L15.5883 16.1448C15.6658 16.5693 15.8109 16.9785 16.0232 17.367C16.2479 17.789 16.3905 18.2498 16.4437 18.7267C16.5233 19.4513 16.7617 20.1491 17.1417 20.7705C17.6108 21.3382 17.8822 22.0458 17.9138 22.8232V23.1366C17.9893 23.859 17.8735 24.5889 17.5774 25.253L17.4666 25.5013L17.2451 25.6591C16.6349 26.0939 15.9497 26.4124 15.3008 26.5755L13.5299 27.1849C10.7007 28.2494 9.16333 29.179 9.1108 29.4241C9.05833 29.8816 9.02367 30.3408 9.00687 30.8007H30.8764L30.7952 29.5014ZM26.7379 25.1844L26.9153 25.2625C26.9487 25.2812 26.984 25.2961 27.0908 25.3307C30.6256 26.674 32.4548 27.7827 32.7559 29.1001L32.779 29.2601L33 32.7957H7.02157L7.00338 31.8168C6.98712 30.9416 7.02899 30.0664 7.14161 29.1148C7.4095 27.7754 9.24475 26.6656 12.8538 25.3081L14.7282 24.6661C15.1234 24.5647 15.5007 24.405 15.8479 24.1926C15.9346 23.9083 15.9615 23.6082 15.9259 23.3111L15.9187 23.1922L15.9196 22.8648C15.9065 22.551 15.787 22.251 15.5807 22.0142L15.4891 21.8909C14.9273 20.9994 14.5756 19.9919 14.4608 18.9462C14.4357 18.7217 14.3683 18.5039 14.2675 18.3144C13.967 17.765 13.754 17.1722 13.6359 16.5575C13.4886 16.0383 13.4952 15.4851 13.6727 14.9152C13.7077 14.8215 13.735 14.7251 13.7544 14.6271C13.7234 14.3744 13.6923 14.1065 13.6515 13.7459C13.5934 13.229 13.5638 12.9668 13.5264 12.6091C13.4943 11.2011 14.0208 9.83752 14.9825 8.82527C16.2601 7.44706 18.0936 6.7253 19.965 6.86029C21.8377 6.73098 23.6699 7.4573 24.94 8.83235C25.9008 9.85515 26.4248 11.2124 26.3941 12.7139C26.3238 13.3167 26.2511 13.9157 26.1624 14.6273C26.1861 14.739 26.217 14.8509 26.2561 14.9661C26.4263 15.4861 26.4344 16.0449 26.2802 16.5686C26.1732 17.1707 25.9739 17.7555 25.6547 18.3632C25.5325 18.5594 25.4495 18.7773 25.4192 18.9406C25.3084 19.9869 24.9615 20.9944 24.4046 21.887L24.321 22.002C24.1197 22.2407 24.0052 22.5405 23.9964 22.8232C23.9964 23.3728 24.0234 23.8066 24.0731 24.0998C24.953 24.5507 25.838 24.8892 26.7379 25.1844Z" fill="white"/>
          </g>
          <defs>
            <clipPath">
              <rect width="40" height="40" fill="white"/>
            </clipPath>
          </defs>
        </svg>`}_getOrgPickerSvgTemplate(){return C`
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.5" y="0.5" width="39" height="39" fill="#3498db"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M15 7V14H25V7H15ZM13 5H27V16H21V19H27V21V23H36V34H22V23H25V21H15V23H18V34H4V23H13V21V19H19V16H13V5ZM6 25V32H16V25H6ZM24 32V25H34V32H24Z" fill="white"/>
        </svg>`}_getGroupPickerSvgTemplate(){return C`
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.5" y="0.5" width="39" height="39" fill="#3498db"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M12.6551 24.1065C12.3317 23.9525 12.0125 23.7844 11.698 23.6024L11.6295 23.5538C11.3087 23.2805 11.2372 22.741 11.2374 21.7176C11.2479 21.2643 11.3739 20.8281 11.5956 20.4752C11.778 20.0909 11.892 19.6587 11.9333 19.1728C11.9734 18.8758 12.0581 18.5915 12.1643 18.3772C12.2589 18.1446 12.3242 17.8943 12.3577 17.6357L12.3751 17.5448C12.3976 17.457 12.3976 17.3623 12.3768 17.2809C12.3352 17.1245 12.3038 16.9639 12.2829 16.8009L12.2717 16.7132L12.2803 16.6251C12.3034 16.3892 12.3242 16.1742 12.3433 15.9768C12.3628 15.7742 12.3806 15.5902 12.3973 15.4212C12.4046 14.8764 12.2454 14.3493 11.9507 13.9484C11.5271 13.3623 10.9159 13.0582 10.2937 13.1239L10.213 13.1237C9.59178 13.0557 8.98076 13.3575 8.55289 13.9473C8.26007 14.3412 8.10115 14.8673 8.10773 15.3532C8.12287 15.5191 8.13739 15.6833 8.16535 16.0012C8.18835 16.2612 8.20477 16.4405 8.22211 16.6178L8.2298 16.6965L8.22163 16.7751C8.20329 16.9514 8.16943 17.1245 8.1298 17.2569C8.10695 17.3516 8.10695 17.4529 8.1298 17.5476L8.14334 17.6184C8.18073 17.8801 8.25069 18.1324 8.35314 18.3719C8.46153 18.6321 8.53033 18.9162 8.55601 19.2102C8.5944 19.6569 8.70942 20.0871 8.89274 20.4703C9.11905 20.8203 9.24997 21.2565 9.26522 21.7358V21.929C9.30165 22.3744 9.24576 22.8245 9.10291 23.2339L9.04949 23.387L8.94263 23.4843C8.64824 23.7523 8.31767 23.9487 8.00464 24.0493L7.15028 24.425C5.78535 25.0813 5.04368 25.6544 5.01834 25.8055C4.99303 26.0876 4.97631 26.3707 4.9682 26.6542H8.03855C7.71232 27.0377 7.44846 27.4499 7.2567 27.8843H4.01041L4.00163 27.2807C3.99378 26.7411 4.01399 26.2015 4.06832 25.6149C4.19756 24.789 5.08295 24.1048 6.82411 23.2679L7.72834 22.8721C7.91901 22.8096 8.10105 22.7111 8.26854 22.5802C8.31037 22.4049 8.32337 22.2198 8.30616 22.0367L8.30272 21.9633L8.30314 21.7615C8.29682 21.568 8.23916 21.3831 8.13966 21.2371L8.09543 21.1611C7.82441 20.6114 7.65474 19.9902 7.59936 19.3456C7.58726 19.2071 7.55474 19.0729 7.5061 18.956C7.36114 18.6173 7.25836 18.2518 7.2014 17.8728C7.13032 17.5527 7.13353 17.2117 7.21915 16.8603C7.23605 16.8025 7.24922 16.7431 7.25854 16.6827C7.24361 16.5269 7.22861 16.3617 7.20894 16.1394L7.20467 16.0909C7.17941 15.8037 7.16568 15.6476 7.14859 15.4385C7.1331 14.5704 7.38708 13.7297 7.85104 13.1057C8.4674 12.2559 9.35196 11.811 10.2548 11.8942C11.1582 11.8144 12.0422 12.2623 12.6549 13.11C13.1184 13.7406 13.3712 14.5774 13.3564 15.5031C13.3225 15.8748 13.2874 16.2441 13.2446 16.6828C13.2561 16.7517 13.271 16.8206 13.2898 16.8917C13.372 17.2123 13.3758 17.5568 13.3015 17.8797C13.2498 18.2509 13.1537 18.6115 12.9997 18.9861C12.9408 19.1071 12.9007 19.2414 12.8861 19.3421C12.8326 19.9872 12.6653 20.6083 12.3966 21.1587L12.3563 21.2296C12.2592 21.3768 12.2039 21.5616 12.1997 21.7358C12.1997 22.0747 12.2127 22.3422 12.2367 22.5229C12.6612 22.8009 13.0881 23.0096 13.5223 23.1916L13.6079 23.2398C13.624 23.2513 13.641 23.2605 13.6925 23.2818C14.0991 23.4793 14.4589 23.6685 14.773 23.8532C14.0381 23.873 13.328 23.9604 12.6551 24.1065Z" fill="white"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M27.3449 24.1065C27.6683 23.9525 27.9875 23.7844 28.302 23.6024L28.3705 23.5538C28.6913 23.2805 28.7628 22.741 28.7626 21.7176C28.7521 21.2643 28.6261 20.8281 28.4044 20.4752C28.222 20.0909 28.108 19.6587 28.0667 19.1728C28.0266 18.8758 27.9419 18.5915 27.8357 18.3772C27.7411 18.1446 27.6758 17.8943 27.6423 17.6357L27.6249 17.5448C27.6024 17.457 27.6024 17.3623 27.6232 17.2809C27.6648 17.1245 27.6962 16.9639 27.7171 16.8009L27.7283 16.7132L27.7197 16.6251C27.6966 16.3892 27.6758 16.1742 27.6567 15.9768C27.6372 15.7742 27.6194 15.5902 27.6027 15.4212C27.5954 14.8764 27.7546 14.3493 28.0493 13.9484C28.4729 13.3623 29.0841 13.0582 29.7063 13.1239L29.787 13.1237C30.4082 13.0557 31.0192 13.3575 31.4471 13.9473C31.7399 14.3412 31.8989 14.8673 31.8923 15.3532C31.8771 15.5191 31.8626 15.6833 31.8346 16.0012C31.8117 16.2612 31.7952 16.4405 31.7779 16.6178L31.7702 16.6965L31.7784 16.7751C31.7967 16.9514 31.8306 17.1245 31.8702 17.2569C31.8931 17.3516 31.8931 17.4529 31.8702 17.5476L31.8567 17.6184C31.8193 17.8801 31.7493 18.1324 31.6469 18.3719C31.5385 18.6321 31.4697 18.9162 31.444 19.2102C31.4056 19.6569 31.2906 20.0871 31.1073 20.4703C30.8809 20.8203 30.75 21.2565 30.7348 21.7358V21.9291C30.6983 22.3744 30.7542 22.8245 30.8971 23.2339L30.9505 23.387L31.0574 23.4843C31.3518 23.7523 31.6823 23.9487 31.9954 24.0493L32.8497 24.425C34.2146 25.0813 34.9563 25.6544 34.9817 25.8055C35.007 26.0876 35.0237 26.3707 35.0318 26.6542H31.9614C32.2877 27.0377 32.5515 27.4499 32.7433 27.8843H35.9896L35.9984 27.2807C36.0062 26.7411 35.986 26.2015 35.9317 25.6149C35.8024 24.789 34.9171 24.1048 33.1759 23.2679L32.2717 22.8721C32.081 22.8096 31.8989 22.7111 31.7315 22.5802C31.6896 22.4049 31.6766 22.2198 31.6938 22.0367L31.6973 21.9633L31.6969 21.7615C31.7032 21.568 31.7608 21.3831 31.8603 21.2371L31.9046 21.1611C32.1756 20.6114 32.3453 19.9902 32.4006 19.3456C32.4127 19.2071 32.4453 19.0729 32.4939 18.956C32.6389 18.6173 32.7416 18.2518 32.7986 17.8728C32.8697 17.5527 32.8665 17.2117 32.7809 16.8603C32.7639 16.8025 32.7508 16.7431 32.7415 16.6827C32.7564 16.5269 32.7714 16.3617 32.7911 16.1394L32.7953 16.0911C32.8206 15.8038 32.8343 15.6476 32.8514 15.4385C32.8669 14.5704 32.6129 13.7297 32.149 13.1057C31.5326 12.2559 30.648 11.811 29.7452 11.8942C28.8418 11.8144 27.9578 12.2623 27.3451 13.11C26.8816 13.7406 26.6288 14.5774 26.6436 15.5031C26.6775 15.8748 26.7126 16.2441 26.7554 16.6828C26.7439 16.7517 26.729 16.8206 26.7102 16.8917C26.628 17.2123 26.6242 17.5568 26.6985 17.8797C26.7502 18.2509 26.8463 18.6115 27.0003 18.9861C27.0592 19.1071 27.0993 19.2414 27.1139 19.3421C27.1674 19.9872 27.3347 20.6083 27.6034 21.1587L27.6437 21.2296C27.7408 21.3768 27.7961 21.5616 27.8003 21.7358C27.8003 22.0747 27.7873 22.3422 27.7633 22.5229C27.3388 22.8009 26.9119 23.0096 26.4777 23.1916L26.3921 23.2398C26.376 23.2513 26.359 23.2605 26.3075 23.2818C25.9009 23.4793 25.5411 23.6685 25.227 23.8532C25.9619 23.873 26.672 23.9604 27.3449 24.1065Z" fill="white"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M30.8186 29.5726C30.6403 29.1791 29.1727 28.2439 26.6283 27.1984C26.4894 27.1538 26.3545 27.096 26.2253 27.0255C25.2156 26.665 24.2242 26.2474 23.2552 25.7743L23.1183 25.6924C22.4767 25.2312 22.3337 24.3208 22.3341 22.5938C22.3551 21.8288 22.6071 21.0928 23.0506 20.4972C23.4154 19.8487 23.6434 19.1194 23.7259 18.2995C23.8061 17.7982 23.9756 17.3184 24.1879 16.9569C24.3772 16.5643 24.5077 16.142 24.5748 15.7056L24.6096 15.5522C24.6546 15.404 24.6546 15.2441 24.613 15.1068C24.5298 14.8429 24.467 14.5719 24.4252 14.2968L24.4027 14.1489L24.4199 14.0002C24.5134 13.1937 24.5882 12.5318 24.6538 11.9686C24.6685 11.0492 24.3501 10.1598 23.7607 9.4832C22.9135 8.49423 21.6911 7.98104 20.4468 8.09191L20.2853 8.09164C19.0429 7.97677 17.8209 8.48614 16.9651 9.48141C16.3795 10.1462 16.0616 11.0338 16.0748 11.8539C16.1051 12.1338 16.1341 12.4109 16.19 12.9474C16.236 13.3861 16.2689 13.6887 16.3036 13.9879L16.3189 14.1207L16.3026 14.2533C16.2659 14.5508 16.1982 14.8429 16.1189 15.0664C16.0732 15.2262 16.0732 15.3971 16.1189 15.5569L16.146 15.6764C16.2208 16.1179 16.3607 16.5437 16.5656 16.9479C16.7824 17.3869 16.92 17.8663 16.9714 18.3625C17.0481 19.1164 17.2782 19.8424 17.6448 20.4889C18.0975 21.0795 18.3593 21.8157 18.3898 22.6245V22.9506C18.4626 23.7022 18.3509 24.4616 18.0652 25.1525L17.9583 25.4109L17.7446 25.5751C17.1558 26.0274 16.4947 26.3587 15.8686 26.5284L14.1599 27.1625C11.43 28.27 9.94671 29.2372 9.89602 29.4921C9.8454 29.9681 9.81195 30.4459 9.79575 30.9243H30.897L30.8186 29.5726ZM26.9039 25.0812L27.0751 25.1624C27.1073 25.1818 27.1413 25.1974 27.2444 25.2334C30.6551 26.6309 32.42 27.7844 32.7105 29.155L32.7328 29.3215L32.946 33H7.88019L7.86263 31.9814C7.84694 31.071 7.88735 30.1603 7.99601 29.1703C8.25449 27.7768 10.0253 26.6222 13.5076 25.2099L15.3161 24.5419C15.6974 24.4364 16.0615 24.2702 16.3964 24.0493C16.4801 23.7535 16.5061 23.4412 16.4717 23.1322L16.4648 23.0084L16.4657 22.6678C16.453 22.3413 16.3377 22.0292 16.1387 21.7828L16.0502 21.6546C15.5082 20.7271 15.1689 19.6788 15.0581 18.5909C15.0339 18.3573 14.9689 18.1307 14.8716 17.9335C14.5817 17.3619 14.3761 16.7453 14.2622 16.1057C14.12 15.5655 14.1264 14.99 14.2977 14.3971C14.3315 14.2996 14.3578 14.1993 14.3765 14.0973C14.3466 13.8344 14.3166 13.5557 14.2773 13.1805C14.2212 12.6427 14.1926 12.37 14.1566 11.9978C14.1256 10.5328 14.6335 9.11422 15.5614 8.06107C16.7942 6.62717 18.5633 5.87626 20.369 6.0167C22.1758 5.88217 23.9437 6.63783 25.1692 8.06843C26.0962 9.13255 26.6019 10.5446 26.5722 12.1068C26.5043 12.734 26.4342 13.3572 26.3486 14.0975C26.3715 14.2138 26.4013 14.3301 26.439 14.45C26.6033 14.991 26.6111 15.5724 26.4623 16.1172C26.3591 16.7437 26.1668 17.3521 25.8588 17.9844C25.7409 18.1884 25.6608 18.4152 25.6315 18.5851C25.5247 19.6736 25.1899 20.7218 24.6526 21.6506L24.5719 21.7702C24.3777 22.0186 24.2672 22.3305 24.2587 22.6245C24.2587 23.1963 24.2848 23.6477 24.3327 23.9527C25.1817 24.4218 26.0357 24.774 26.9039 25.0812Z" fill="white"/>
        </svg>`}_getSearchPickerSvgTemplate(){return C`
        <svg width="38" height="38" viewBox="-8 -8 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" class="kuc-user-org-group-select-1-23-1__group__container__select-area__toggle__icon__button__svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M15.1034 16.5176C11.5697 19.3478 6.3971 19.125 3.12139 15.8493C-0.393328 12.3346 -0.393328 6.63611 3.12139 3.12139C6.63611 -0.393328 12.3346 -0.393328 15.8493 3.12139C18.878 6.15005 19.2968 10.8002 17.1058 14.2774L23.6275 20.7991L21.5062 22.9204L15.1034 16.5176ZM13.728 5.24271C16.0711 7.58586 16.0711 11.3848 13.728 13.728C11.3848 16.0711 7.58586 16.0711 5.24271 13.728C2.89957 11.3848 2.89957 7.58586 5.24271 5.24271C7.58586 2.89957 11.3848 2.89957 13.728 5.24271Z" fill="#888888"/>
        </svg>`}_getRemoveSVGTemplate(){return C`
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_11108_7852)">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M4.8999 5.96056L0.930232 1.99089L0.399902 1.46056L1.46056 0.399902L1.99089 0.930232L5.96056 4.8999L9.93023 0.930232L10.4606 0.399902L11.5212 1.46056L10.9909 1.99089L7.02122 5.96056L10.9909 9.93023L11.5212 10.4606L10.4606 11.5212L9.93023 10.9909L5.96056 7.02122L1.99089 10.9909L1.46056 11.5212L0.399902 10.4606L0.930233 9.93023L4.8999 5.96056Z" fill="#3498db"/>
        </g>
        <defs>
          <clipPath>
            <rect width="12" height="12" fill="white"/>
          </clipPath>
        </defs>
      </svg>
      `}_getUserSvgTemplate(e){return C`
        <svg width="${e}" height="${e}" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_11108_7825)">
            <path d="M32.5866 -0.521484H-0.586548V32.6516H32.5866V-0.521484Z" fill="#717272"/>
            <path d="M15.9413 5.64404C18.4049 5.64404 20.6468 8.02938 20.6077 11.4053C20.5686 14.7552 19.2 15.407 18.4309 16.8278C18.1442 17.3622 18.066 19.0306 18.6134 19.3565C21.1291 20.8815 23.5926 22.0416 25.6912 23.2669C26.6167 23.8143 26.747 24.9483 26.747 25.7174C25.0525 25.7174 20.4774 25.7174 15.9413 25.7174C11.4053 25.7174 6.83012 25.7174 5.13562 25.7174C5.13562 24.9483 5.26597 23.8143 6.19142 23.2669C8.29 22.0416 10.7535 20.8815 13.2692 19.3565C13.8167 19.0306 13.7385 17.3622 13.4517 16.8278C12.6827 15.407 11.314 14.7422 11.2749 11.4053C11.2358 8.02938 13.4778 5.64404 15.9413 5.64404Z" fill="white"/>
          </g>
          <defs>
            <clipPath>
              <rect width="32" height="31.9348" fill="white"/>
            </clipPath>
          </defs>
        </svg>`}_getOrgSvgTemplate(e){return C`
        <svg width="${e}" height="${e}" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_11108_7858)">
            <path d="M32 0H0V32H32V0Z" fill="#4f91c5"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M21.3335 5.3335H10.0002V14.0002H21.3335V5.3335ZM20.0002 6.66683H18.0002V8.66683H20.0002V6.66683ZM16.6668 19.3335H26.6668V27.3335H16.6668V19.3335ZM15.3335 19.3335H5.3335V27.3335H15.3335V19.3335ZM24.0002 21.3335H25.3335V22.6668H24.0002V21.3335ZM14.0002 21.3335H12.6668V22.6668H14.0002V21.3335Z" fill="#eff3f4"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.6668 14H15.3335V16H9.3335V17.3333V19.3333H10.6668V17.3333H20.6668V19.3333H22.0002V17.3333V16H16.6668V14Z" fill="#a6b2b3"/>
          </g>
          <defs>
            <clipPath>
              <rect width="32" height="32" fill="white"/>
            </clipPath>
          </defs>
        </svg>`}_getGroupSvgTemplate(e){return C`
        <svg width="${e}" height="${e}" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_11108_7756)">
            <path d="M32 0H0V31.9032H32V0Z" fill="#86bac0"/>
            <path d="M32.0005 15.6099L20.1262 3.72021L3.74902 20.0193L15.749 31.9033H32.0005V15.6099Z" fill="#6c969b"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.1141 0.0854492C24.9541 0.0854492 31.9998 7.22949 31.9998 16.0427C31.9998 24.856 24.9541 32 16.1141 32C7.27412 32 0.108398 24.856 0.108398 16.0427C0.108398 7.22949 7.27412 0.0854492 16.1141 0.0854492Z" fill="#86bac0"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M31.983 16.6751C31.6459 24.8845 25.2059 31.5329 17.0001 31.983L6.85156 21.8651L25.1487 9.78174L31.9887 16.601L31.983 16.6751Z" fill="#6c969b"/>
            <path d="M25.1487 9.78174H6.85156V21.8651H25.1487V9.78174Z" fill="#e5e5e4"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.85156 21.8653L16.0001 13.8154L25.1487 21.8653H6.85156Z" fill="#cccccc"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.85156 21.8653L16.0001 14.3794L25.1487 21.8653H6.85156Z" fill="#e5e5e4"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.85156 9.78174L16.0001 17.8202L25.1487 9.78174H6.85156Z" fill="#cccccc"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.85156 9.78174L16.0001 17.2676L25.1487 9.78174H6.85156Z" fill="white"/>
            <path d="M32 0H0V31.9032H32V0Z" fill="#9cc076"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M30.3942 24.6003H16.2011C16.192 24.1094 16.2156 23.6184 16.2717 23.1307C16.3705 22.6384 17.3704 22.0361 19.2712 21.3235L20.337 20.9579C20.6968 20.8659 21.0366 20.7085 21.3392 20.4938C21.4763 20.1873 21.5275 19.8495 21.4874 19.5164V19.2984C21.474 18.9793 21.352 18.6743 21.1415 18.4335C20.8563 17.9824 20.6777 17.4727 20.6193 16.9427C20.5961 16.7361 20.5339 16.5356 20.4358 16.3521C20.2827 16.0732 20.1755 15.7717 20.1182 15.459C20.0551 15.2552 20.0551 15.0371 20.1182 14.8332C20.1625 14.7152 20.1933 14.5925 20.2099 14.4676C20.1605 14.0738 20.1182 13.673 20.0688 13.2511C20.0533 12.5749 20.307 11.9202 20.7745 11.4298C21.4194 10.7368 22.3491 10.3787 23.2941 10.4595C24.2402 10.3816 25.1696 10.7421 25.8137 11.4369C26.278 11.9293 26.5312 12.5826 26.5195 13.2581C26.4701 13.68 26.4207 14.0808 26.3713 14.4746C26.3917 14.5988 26.4224 14.7211 26.4631 14.8402C26.5299 15.0435 26.5299 15.2628 26.4631 15.4661C26.4117 15.7751 26.3117 16.0741 26.1666 16.3521C26.0537 16.5326 25.9771 16.7332 25.9408 16.9427C25.8845 17.4721 25.7084 17.9818 25.4256 18.4335C25.2202 18.6762 25.1033 18.981 25.0939 19.2984C25.0939 20.0015 25.1644 20.4516 25.3127 20.55C25.9041 20.8168 26.5096 21.0516 27.1265 21.2532C27.1846 21.2857 27.2461 21.3116 27.31 21.3305C29.192 22.0431 30.1895 22.6455 30.3025 23.1377L30.3942 24.6003Z" fill="#d4d7d8"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.0016 24.6003H1.80856C1.79941 24.1094 1.82298 23.6184 1.87914 23.1307C1.97795 22.6384 2.97779 22.0361 4.87867 21.3235L5.94438 20.9579C6.30425 20.8659 6.644 20.7085 6.94658 20.4938C7.08374 20.1873 7.13496 19.8495 7.09479 19.5164V19.2984C7.08142 18.9793 6.95946 18.6743 6.74896 18.4335C6.46369 17.9824 6.28509 17.4727 6.22669 16.9427C6.20354 16.7361 6.14127 16.5356 6.04319 16.3521C5.89012 16.0732 5.78289 15.7717 5.7256 15.459C5.66249 15.2552 5.66249 15.0371 5.7256 14.8332C5.7699 14.7152 5.80068 14.5925 5.81735 14.4676C5.76794 14.0738 5.7256 13.673 5.67619 13.2511C5.66071 12.5749 5.91445 11.9202 6.38196 11.4298C7.02682 10.7368 7.95648 10.3787 8.90157 10.4595C9.84766 10.3816 10.777 10.7421 11.4212 11.4369C11.8854 11.9293 12.1386 12.5826 12.1269 13.2581C12.0775 13.68 12.0281 14.0808 11.9787 14.4746C11.9992 14.5988 12.0298 14.7211 12.0705 14.8402C12.1373 15.0435 12.1373 15.2628 12.0705 15.4661C12.0191 15.7751 11.9191 16.0741 11.7741 16.3521C11.6612 16.5326 11.5845 16.7332 11.5482 16.9427C11.492 17.4721 11.3158 17.9818 11.033 18.4335C10.8276 18.6762 10.7107 18.981 10.7013 19.2984C10.7013 20.0015 10.7719 20.4516 10.9201 20.55C11.5115 20.8168 12.117 21.0516 12.7339 21.2532C12.792 21.2857 12.8535 21.3116 12.9174 21.3305C14.7995 22.0431 15.797 22.6455 15.9099 23.1377L16.0016 24.6003Z" fill="#d4d7d8"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M24.6766 24.6002H7.3295C7.31831 24.0002 7.34712 23.4001 7.41576 22.804C7.53652 22.2024 8.75855 21.4661 11.0818 20.5952L12.3844 20.1483C12.8242 20.0359 13.2395 19.8436 13.6093 19.5811C13.7769 19.2065 13.8395 18.7937 13.7904 18.3865V18.12C13.7741 17.7301 13.625 17.3573 13.3678 17.0629C13.0191 16.5117 12.8008 15.8886 12.7294 15.2409C12.7011 14.9883 12.625 14.7434 12.5052 14.519C12.3181 14.1782 12.187 13.8097 12.117 13.4275C12.0399 13.1784 12.0399 12.9118 12.117 12.6626C12.1711 12.5183 12.2088 12.3684 12.2291 12.2157C12.1687 11.7344 12.117 11.2446 12.0566 10.7289C12.0377 9.90252 12.3478 9.10226 12.9192 8.50296C13.7074 7.65586 14.8436 7.21826 15.9987 7.31694C17.1551 7.22174 18.291 7.66239 19.0782 8.51156C19.6457 9.11336 19.9551 9.91193 19.9409 10.7375C19.8805 11.2532 19.8201 11.743 19.7597 12.2243C19.7847 12.3761 19.8222 12.5256 19.8718 12.6712C19.9535 12.9197 19.9535 13.1876 19.8718 13.4361C19.8091 13.8138 19.6868 14.1793 19.5095 14.519C19.3716 14.7396 19.2778 14.9848 19.2335 15.2409C19.1648 15.8879 18.9494 16.5109 18.6038 17.0629C18.3528 17.3596 18.2099 17.7322 18.1984 18.12C18.1984 18.9795 18.2846 19.5295 18.4658 19.6498C19.1887 19.9759 19.9287 20.2628 20.6827 20.5093C20.7537 20.549 20.8289 20.5807 20.907 20.6038C23.2073 21.4747 24.4264 22.211 24.5644 22.8126L24.6766 24.6002Z" fill="white"/>
          </g>
          <defs>
            <clipPath>
              <rect width="32" height="32" fill="white"/>
            </clipPath>
          </defs>
        </svg>`}}O([u({type:String,reflect:!0,attribute:"class"})],o.prototype,"className",void 0),O([u({type:String})],o.prototype,"error",void 0),O([u({type:String})],o.prototype,"icon",void 0),O([u({type:String,reflect:!0,attribute:"id"})],o.prototype,"id",void 0),O([u({type:String})],o.prototype,"label",void 0),O([u({type:String})],o.prototype,"placeholder",void 0),O([u({type:Boolean})],o.prototype,"disabled",void 0),O([u({type:Boolean})],o.prototype,"requiredIcon",void 0),O([u({type:Boolean,attribute:"hidden",reflect:!0,converter:V})],o.prototype,"visible",void 0),O([u({type:Array})],o.prototype,"items",void 0),O([u({type:Array})],o.prototype,"value",void 0),O([q(".kuc-user-org-group-select-1-23-1__group__container__select-area__select-menu__item")],o.prototype,"_itemsEl",void 0),O([b(".kuc-user-org-group-select-1-23-1__group__container__select-area__toggle__input")],o.prototype,"_inputEl",void 0),O([b(".kuc-user-org-group-select-1-23-1__group__container__select-area__toggle")],o.prototype,"_toggleEl",void 0),O([b(".kuc-user-org-group-select-1-23-1__group__container__select-area")],o.prototype,"_selectAreaEl",void 0),O([b(".kuc-user-org-group-select-1-23-1__group__container__select-area__select-menu")],o.prototype,"_menuEl",void 0),O([b(".kuc-user-org-group-select-1-23-1__group__container__select-area__select-menu__item__highlight")],o.prototype,"_highlightItemEl",void 0),O([b(".kuc-user-org-group-select-1-23-1__group__container__select-area__select-menu__item:first-child")],o.prototype,"_firstItemEl",void 0),O([b(".kuc-user-org-group-select-1-23-1__group__container__select-area__select-menu__item:last-child")],o.prototype,"_lastItemEl",void 0),O([q(".kuc-user-org-group-select-1-23-1__group__container__select-area__select-menu__item--disabled")],o.prototype,"_disabledItemsEl",void 0),O([v()],o.prototype,"_selectedValues",void 0),O([v()],o.prototype,"_searchText",void 0),O([v()],o.prototype,"_selectorVisible",void 0),window.customElements.define("kuc-user-org-group-select-1-23-1",o),x(Bc),Ln=o})();const Hc=`
  kuc-mobile-button-1-23-1,
  kuc-mobile-button-1-23-1 * {
    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
      "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",
      "Lucida Sans Unicode", Arial, Verdana, sans-serif;
  }
  kuc-mobile-button-1-23-1:lang(es),
  kuc-mobile-button-1-23-1:lang(es) * {
    font-family: sans-serif;
  }
  kuc-mobile-button-1-23-1:lang(zh),
  kuc-mobile-button-1-23-1:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
      Verdana, sans-serif;
  }
  kuc-mobile-button-1-23-1:lang(zh-TW),
  kuc-mobile-button-1-23-1:lang(zh-TW) * {
      font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,
      Verdana,sans-serif
  }
  kuc-mobile-button-1-23-1 {
    display: inline-block;
    vertical-align: top;
  }
  kuc-mobile-button-1-23-1[hidden] {
    display: none;
  }
  .kuc-mobile-button-1-23-1__button {
    min-width: var(--kuc-mobile-button-width, 100px);
    width: var(--kuc-mobile-button-width, auto);
    height: var(--kuc-mobile-button-height, 42px);
    padding: 0 12px;
    user-select: none;
    font-weight: 700;
    font-size: var(--kuc-mobile-button-font-size, 14px);
    line-height: 1;
    display: grid;
    align-items: center;
    align-content: center;
  }
  .kuc-mobile-button-1-23-1__button:focus {
    outline: none;
  }
  .kuc-mobile-button-1-23-1__button--submit {
    border: 2px solid;
    border-color: var(--kuc-mobile-button-background-color, #206694);
    background-color: var(--kuc-mobile-button-background-color, #206694);
    color: var(--kuc-mobile-button-text-color, #ffffff);
    border-radius: 6px;
  }
  .kuc-mobile-button-1-23-1__button--submit:focus {
    border-color: var(--kuc-mobile-button-background-color-focus, var(--kuc-mobile-button-background-color, #206694));
    background-color: var(--kuc-mobile-button-background-color-focus, var(--kuc-mobile-button-background-color, #206694));
  }
  .kuc-mobile-button-1-23-1__button--submit:active {
    border-color: var(--kuc-mobile-button-background-color-active, var(--kuc-mobile-button-background-color, #206694));
    background-color: var(--kuc-mobile-button-background-color-active, var(--kuc-mobile-button-background-color, #206694));
  }
  .kuc-mobile-button-1-23-1__button--submit:disabled {
    color: #ffffff;
    border-color: #a5a5a5;
    background: #a5a5a5;
  }
  .kuc-mobile-button-1-23-1__button--normal {
    border: 2px solid;
    border-color: var(--kuc-mobile-button-background-color, #206694);
    background-color: var(--kuc-mobile-button-background-color, #ffffff);
    color: var(--kuc-mobile-button-text-color, #206694);
    border-radius: 6px;
  }
  .kuc-mobile-button-1-23-1__button--normal:focus {
    border-color: var(--kuc-mobile-button-background-color-focus, var(--kuc-mobile-button-background-color, #206694));
    background-color: var(--kuc-mobile-button-background-color-focus, var(--kuc-mobile-button-background-color, #ffffff));
  }
  .kuc-mobile-button-1-23-1__button--normal:active {
    border-color: var(--kuc-mobile-button-background-color-active, var(--kuc-mobile-button-background-color, #206694));
    background-color: var(--kuc-mobile-button-background-color-active, var(--kuc-mobile-button-background-color, #ffffff));
  }
  .kuc-mobile-button-1-23-1__button--normal:disabled {
    color: #a5a5a5;
    border-color: #a5a5a5;
    background-color: #ffffff;
    cursor: default;
  }
`;var Zt=function(o,t,e,i){var n=arguments.length,a=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(o,t,e,i);else for(var r=o.length-1;r>=0;r--)(s=o[r])&&(a=(n<3?s(a):n>3?s(t,e,a):s(t,e))||a);return n>3&&a&&Object.defineProperty(t,e,a),a};let Dn;(()=>{if(Dn=window.customElements.get("kuc-mobile-button-1-23-1"),Dn)return;class o extends k{constructor(e){super(),this.className="",this.id="",this.text="",this.type="normal",this.content="",this.disabled=!1,this.visible=!0,this._content="";const i=$(e);Object.assign(this,i)}_handleClickButton(e){e.stopPropagation(),m(this,"click")}_getButtonColorType(){return this.type==="normal"||this.type==="submit"?this.type:"normal"}willUpdate(e){(e.has("content")||e.has("text"))&&(this.content!==null&&this.content!==void 0&&this.content!==""?oe(this.content)?this._content=be(this.content):this._content=this.content:this._content=this.text)}render(){return p`
        <button
          type="button"
          class="kuc-mobile-button-1-23-1__button kuc-mobile-button-1-23-1__button--${this._getButtonColorType()}"
          ?disabled="${this.disabled}"
          @click="${this._handleClickButton}"
        >
          ${this._content}
        </button>
      `}}Zt([u({type:String,reflect:!0,attribute:"class"})],o.prototype,"className",void 0),Zt([u({type:String,reflect:!0,attribute:"id"})],o.prototype,"id",void 0),Zt([u({type:String})],o.prototype,"text",void 0),Zt([u({type:String})],o.prototype,"type",void 0),Zt([u()],o.prototype,"content",void 0),Zt([u({type:Boolean})],o.prototype,"disabled",void 0),Zt([u({type:Boolean,attribute:"hidden",reflect:!0,converter:V})],o.prototype,"visible",void 0),window.customElements.define("kuc-mobile-button-1-23-1",o),x(Hc),Dn=o})();const Rc=`
  kuc-base-mobile-error-1-23-1 {
    display: block;
    font-size: 13px;
    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
      "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",
      "Lucida Sans Unicode", Arial, Verdana, sans-serif;
  }
  kuc-base-mobile-error-1-23-1:lang(es),
  kuc-base-mobile-error-1-23-1:lang(es) * {
    font-family: sans-serif;
  }
  kuc-base-mobile-error-1-23-1:lang(zh),
  kuc-base-mobile-error-1-23-1:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
      Verdana, sans-serif;
  }
  kuc-base-mobile-error-1-23-1:lang(zh-TW),
  kuc-base-mobile-error-1-23-1:lang(zh-TW) * {
      font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,
      Verdana,sans-serif
  }
  kuc-base-mobile-error-1-23-1[hidden] {
    display: none;
  }
  .kuc-base-mobile-error-1-23-1__error {
    line-height: 1.5;
    color: #000000;
    background-color: #fdffc9;
    border: 1px solid #e5db68;
    border-radius: 0.4em;
    padding: 0.4em 1em;
    margin-top: 0.3em;
    margin-left: 0.5em;
  }
  .kuc-base-mobile-error-1-23-1__error[hidden] {
    display: none;
  }
`;var Vn=function(o,t,e,i){var n=arguments.length,a=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(o,t,e,i);else for(var r=o.length-1;r>=0;r--)(s=o[r])&&(a=(n<3?s(a):n>3?s(t,e,a):s(t,e))||a);return n>3&&a&&Object.defineProperty(t,e,a),a};class So extends k{constructor(){super(...arguments),this.ariaLive="",this.guid="",this.text=""}render(){return p`
      ${this.ariaLive&&this.ariaLive!==""?p`
            <div
              class="kuc-base-mobile-error-1-23-1__error"
              .id="${this.guid}-error"
              role="alert"
              aria-live="${this.ariaLive}"
              ?hidden="${!this.text}"
            >
              ${this.text}
            </div>
          `:p`
            <div
              class="kuc-base-mobile-error-1-23-1__error"
              .id="${this.guid}-error"
              role="alert"
              ?hidden="${!this.text}"
            >
              ${this.text}
            </div>
          `}
    `}}Vn([u({type:String})],So.prototype,"ariaLive",void 0),Vn([u({type:String})],So.prototype,"guid",void 0),Vn([u({type:String})],So.prototype,"text",void 0),window.customElements.get("kuc-base-mobile-error-1-23-1")||(x(Rc),window.customElements.define("kuc-base-mobile-error-1-23-1",So));const Nc=`
  kuc-base-mobile-label-1-23-1 {
    display: inline-table;
    font-size: 13px;
    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
      "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",
      "Lucida Sans Unicode", Arial, Verdana, sans-serif;
  }
  kuc-base-mobile-label-1-23-1:lang(es) ,
  kuc-base-mobile-label-1-23-1:lang(es) * {
    font-family: sans-serif;
  }
  kuc-base-mobile-label-1-23-1:lang(zh) ,
  kuc-base-mobile-label-1-23-1:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
      Verdana, sans-serif;
  }
  kuc-base-mobile-label-1-23-1:lang(zh-TW),
  kuc-base-mobile-label-1-23-1:lang(zh-TW) * {
      font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,
      Verdana,sans-serif
  }
  kuc-base-mobile-label-1-23-1[hidden] {
    display: none;
  }
  .kuc-base-mobile-label-1-23-1__text {
    text-shadow: 0 1px 0 #ffffff;
    color: #888888;
    white-space: normal;
    font-size: 86%;
  }
  .kuc-base-mobile-label-1-23-1__required-icon {
    font-size: 86%;
    position: relative;
    left: 3px;
    color: #d01212;
  }
  .kuc-base-mobile-label-1-23-1__required-icon[hidden] {
    display: none;
  }
`;var Mn=function(o,t,e,i){var n=arguments.length,a=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(o,t,e,i);else for(var r=o.length-1;r>=0;r--)(s=o[r])&&(a=(n<3?s(a):n>3?s(t,e,a):s(t,e))||a);return n>3&&a&&Object.defineProperty(t,e,a),a};class Io extends k{constructor(){super(...arguments),this.requiredIcon=!1,this.guid="",this.text=""}render(){return p`
      ${this._getTextTemplate()}
      <span
        class="kuc-base-mobile-label-1-23-1__required-icon"
        ?hidden="${!this.requiredIcon}"
        >*</span
      >
    `}_getTextTemplate(){return this.guid&&this.guid!==""?p`
          <span class="kuc-base-mobile-label-1-23-1__text" .id="${this.guid}-group"
            >${this.text}</span
          >
        `:p` <span class="kuc-base-mobile-label-1-23-1__text">${this.text}</span> `}}Mn([u({type:Boolean})],Io.prototype,"requiredIcon",void 0),Mn([u({type:String})],Io.prototype,"guid",void 0),Mn([u({type:String})],Io.prototype,"text",void 0),window.customElements.get("kuc-base-mobile-label-1-23-1")||(x(Nc),window.customElements.define("kuc-base-mobile-label-1-23-1",Io));const Pc=`
  kuc-mobile-checkbox-1-23-1,
  kuc-mobile-checkbox-1-23-1 * {
    font-size: 13px;
    color: #333333;
    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
      "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",
      "Lucida Sans Unicode", Arial, Verdana, sans-serif;
  }
  kuc-mobile-checkbox-1-23-1:lang(es),
  kuc-mobile-checkbox-1-23-1:lang(es) * {
    font-family: sans-serif;
  }
  kuc-mobile-checkbox-1-23-1:lang(zh),
  kuc-mobile-checkbox-1-23-1:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
      Verdana, sans-serif;
  }
  kuc-mobile-checkbox-1-23-1:lang(zh-TW),
  kuc-mobile-checkbox-1-23-1:lang(zh-TW) * {
      font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,
      Verdana,sans-serif
  }
  kuc-mobile-checkbox-1-23-1 {
    width: 100%;
    display: inline-block;
  }
  kuc-mobile-checkbox-1-23-1[hidden] {
    display: none;
  }
  .kuc-mobile-checkbox-1-23-1__group {
    border: none;
    padding: 0px;
    height: auto;
    display: inline-block;
    width: 100%;
    box-sizing: border-box;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
  .kuc-mobile-checkbox-1-23-1__group__label {
    display: inline-block;
    font-size: 86%;
    font-weight: bold;
    line-height: 1.5;
    padding: 0px;
    margin: 0 0 4px 0;
    white-space: nowrap;
  }
  .kuc-mobile-checkbox-1-23-1__group__label[hidden] {
    display: none;
  }
  .kuc-mobile-checkbox-1-23-1__group__label__text {
    text-shadow: 0 1px 0 #ffffff;
    color: #888888;
    white-space: normal;
    font-size: inherit;
  }
  .kuc-mobile-checkbox-1-23-1__group__label__required-icon {
    position: relative;
    left: 3px;
    color: #d01212;
  }
  .kuc-mobile-checkbox-1-23-1__group__label__required-icon[hidden] {
    display: none;
  }
  .kuc-mobile-checkbox-1-23-1__group__select-menu {
    margin-left: 0.5em;
    margin-right: 0.5em;
  }
  .kuc-mobile-checkbox-1-23-1__group__select-menu[bordervisible] {
    border-color: #b3b3b3;
    border-width: 1px;
    border-style: solid;
    border-radius: 8px;
  }
  .kuc-mobile-checkbox-1-23-1__group__select-menu[disabled],
  .kuc-mobile-checkbox-1-23-1__group__select-menu__item--disabled {
    background-color: #d5d7d9;
    color: #999999;
    -webkit-text-fill-color: #999999;
    background-color: #d5d7d9;
    opacity: 1;
  }
  .kuc-mobile-checkbox-1-23-1__group__select-menu--required[bordervisible] {
    border-color: #cf4a38;
    border-width: 1px;
    border-style: solid;
    border-radius: 8px;
  }
  .kuc-mobile-checkbox-1-23-1__group__select-menu__item[bordervisible] {
    padding: 4px;
    border: 1px solid transparent;
    position: relative;
    white-space: normal;
    word-wrap: normal;
    height: 30px;
    display: block;
    border-bottom: 1px solid #b3b3b3;
    padding: 8px;
  }
  .kuc-mobile-checkbox-1-23-1__group__select-menu__item {
    padding: 4px;
    border: 1px solid transparent;
    position: relative;
    white-space: normal;
    word-wrap: normal;
    height: 30px;
    display: block;
    padding: 8px;
  }
  .kuc-mobile-checkbox-1-23-1__group__select-menu__item:last-child {
    border-bottom: 0px;
  }
  .kuc-mobile-checkbox-1-23-1__group__select-menu[bordervisible]
  .kuc-mobile-checkbox-1-23-1__group__select-menu__item:first-child {
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
  }
  .kuc-mobile-checkbox-1-23-1__group__select-menu[bordervisible]
  .kuc-mobile-checkbox-1-23-1__group__select-menu__item:last-child {
    border-bottom-left-radius: 7px;
    border-bottom-right-radius: 7px;
  }
  .kuc-mobile-checkbox-1-23-1__group__select-menu__item__input {
    position: absolute;
    opacity: 0;
  }
  .kuc-mobile-checkbox-1-23-1__group__select-menu__item__input[disabled]
    + .kuc-mobile-checkbox-1-23-1__group__select-menu__item__label {
    background-color: #d5d7d9;
    color: #999999;
    -webkit-text-fill-color: #999999;
    background-color: #d5d7d9;
    opacity: 1;
  }
  .kuc-mobile-checkbox-1-23-1__group__select-menu__item__label {
    position: relative;
    margin: -7px 0px 0px 34px;
    display: inline-block;
    vertical-align: middle;
    white-space: nowrap;
    padding: 11px 13px 13px 0px;
    font-size: 14.04px;
  }
  .kuc-mobile-checkbox-1-23-1__group__select-menu__item__label__icon {
    position: absolute;
    top: 50%;
    left: -30px;
    margin-top: -13px;
    box-sizing: border-box;
    width: 22px;
    height: 22px;
    background-size: 22px 17px;
    content: "";
  }
  .kuc-mobile-checkbox-1-23-1__group__error {
    line-height: 1.5;
    border: 1px solid #e5db68;
    background-color: #fdffc9;
    margin-top: 0.3em;
    margin-left: 0.5em;
    padding: 0.4em 1em;
    border-radius: 0.4em;
    color: #000000;
  }
  .kuc-mobile-checkbox-1-23-1__group__error[hidden] {
    display: none;
  }
`;var we=function(o,t,e,i){var n=arguments.length,a=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(o,t,e,i);else for(var r=o.length-1;r>=0;r--)(s=o[r])&&(a=(n<3?s(a):n>3?s(t,e,a):s(t,e))||a);return n>3&&a&&Object.defineProperty(t,e,a),a};let On;(()=>{if(On=window.customElements.get("kuc-mobile-checkbox-1-23-1"),On)return;class o extends k{constructor(e){super(),this.className="",this.error="",this.id="",this.label="",this.borderVisible=!0,this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this.items=[],this.selectedIndex=[],this.value=[],this._valueMapping={},this._GUID=M();const i=$(e);this._setInitialValue(i),Object.assign(this,i)}_setInitialValue(e){const i="value"in e,n="selectedIndex"in e,a=e.selectedIndex||[];if(!i&&n){if(!D(a))return;const s=this._getValueMapping(e);this.value=this._getValidValue(s,a)}}_getNewValueMapping(e,i){const n=parseInt(i,10),a=Object.keys(this._valueMapping),s={...this._valueMapping};return a.indexOf(i)>-1?(delete s[n],s):(s[n]=e,s)}_handleChangeInput(e){e.stopPropagation();const i=e.target,n=i.dataset.index||"0",a=i.value,s=this.value?[...this.value]:this.value,r=this._getNewValueMapping(a,n),l=this.items.map(_=>_.value),c=Object.values(r).filter(_=>l.indexOf(_)>-1);if(c===s)return;const d=Object.keys(r).map(_=>parseInt(_,10));this.value=c,this.selectedIndex=d,m(this,"change",{oldValue:s,value:c})}_getCheckboxIconSvgTemplate(e){return C`
       <svg
         class="kuc-mobile-checkbox-1-23-1__group__select-menu__item__label__icon"
         xmlns="http://www.w3.org/2000/svg"
         x="0px"
         y="0px"
         width="44px"
         height="34px"
         viewBox="0 0 44 34"
         enable-background="new 0 0 44 34"
         xml:space="preserve">
         <image width="44" height="34" x="0" y="0" href="${this._getSVGStrokeValue(e)}"/>
      </svg>
       `}_getSVGStrokeValue(e){return e?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAiCAQAAACOh/P6AAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElN RQfkCQcFITUNIbrXAAADHklEQVRIx63US2sTURQH8P9kmsykQtoMSbStreZRkRBxY3BR7EJwEyuo WQiCmy4EBXHhyi8g4qYfQCjYpRgQBK0GEoUmohYUsURjKz4WrTTNNDYzmUcz42Lymkfz0nN298z9 zeXcM0OgJeLoJxLkhTn14+P5uJJoWR3oy9Kx5xcCl6s4RybuQ2muk60PhXtmWc/xh8GL+0GBnvGu 599D/S9wwetOH51yg4UEt4H+B7jgZVKTkX0oQYUKEcNwttB9wwUvkwpFHOCg1lLEMOgZX43uE9ZY OwTdqgh3g7b12NYGG4yQ4KEYkoUD9nsnfX2NW8HLpAIRG3iLGge2/G32AweiZ1hjCUuWB8vlr6+8 gWRqBetRFljPXmiC4CaZlD+iWjRBAQeWy19bSaMACWiFCW5yKB24MpQueK3ZWHRwORRRLFke23VW hAoQTTYWpZMBFwkRPz4VT3s2zSydDLkEwyTUm8Dp2CZMxKJ0MuiqoAInSPw00Inaa/+gasEK2FnL Xi3km2wdJmJROul3lWrbnLDr6IShrg8R5bXXs5t5sJCa/wpbnT3sYiE3rkHEeIRJab1OmOqtKWjs Z2zFxSYLDGjsIVdRdxoOCsYjxGrlzNPl2AlzvR4yeI1l47K+QsJxbGnMV8Ru45vXUoKKEap8KVCi H0y4tkx1FSpkVHRsTgdTeEdOgSEstvHwU9TZUWrDkt2FaDitHkaBK2ZHThEMTFsV7MCHX5ZsFZKp CXpYhcRzxczoNMFYbWdRtWBVyBa9NZwY1TptY1R0k4CQeXtj84vxyowwoGj02LSNUTqyBCrPn93k vmPbOAlmuAeaRGVx8RbWUYrvGofPCm7QB6dtTHVPdgCCxv6JW4y1NdwFbYfYht0bRlzJSTzHLh04 Yp8wj5gDUlu2DRxGWMlJXPnrK3+ACulbSHdk28JAWMlJkFYz/qAjJDdOS0PuyHaAa7S8mg0EHSEJ KkjQEB69uN2J7QgDYTUnazQVUkCBvftyDuvYac92AbfSzhB7JzOPDZQ7sV3BDXrJkV1+gt/g4kon Vg8TbZ8kMQg7BAjogtXHX2EwhA6/OKOlAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIwLTA5LTA3VDA1 OjMzOjUzKzAwOjAwOdR5sgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMC0wOS0wN1QwNTozMzo1Mysw MDowMEiJwQ4AAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAAAAElFTkSuQmCC":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAiCAQAAACOh/P6AAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElN RQfkCQcFIRBGJW6QAAACvklEQVRIx6XWQZKbRhSA4Z8GBhACenwC5wZUypXKMlRlmUVcXrtKHMEn meQEUmWfmnHZe65ATpDcIA3MMGKEhBdgGRAaWZqnjarp94H6PTWtNWg0tPEX54fARNzwT72qed8b Ny6weqFzhbO0Fg1rHlf9Ky+CdSw5X3q/O+x4WAro0S+ADSw5T4LQw6LBRFt+5rc9LV7CeokMA1xs bOYE+MvPixfCBpb0ExkGzDDR0bFG9EVwywahzwwDAWiIPf1pcSHcZ/U90NIuHrObv+UF8DTb0hoG utKjd+qgKzSA/R9mirWlN8lCw5Yn9RT9kh4shc6VtJdXUp9ENQzs18fZmkrdR2/Sr4/QC+e1dWuG m3AdVaqeYJ3QS3zp4xxhi+jHdD//215xF84TV17xRJEWI7pl/SSQ8wl2x5a1uu+xvaW4C/3kWl4T IJGhn1jSGLCz0E+k9HC6Bhuyj2nxg0r7o92cj13aDBsXn6BHt6yXSOlhY3QFHrJ59L/KOIA/9tJ0 dGYdbUsD0WOtSbZMs0ipnMcxfDtKE+jMCJBh8K8b2rgn2DzKVM6aYbkNcG496Q7SBOAAQhpJ/cG8 8eT8BFsx7iIBRmSmBmKQJtBx8HklXy2vL2BBwK//raNNumM3umBg4xFwrGTPsV3xflZ5VKbbEa2h Y2Jhoh+w9Ql2324/HaEFYrRIsGNDedd2wjEWxNctZ5o+jB0bylX2VqniGXawCX0PvWPDwyqLFcVB gx2FITtBt2weKwoqts/+sgGcd3Q9SX9j70+yI7giR6ksKu82B/SQPVWJEVxTUaBU9rZcDelz2YNX U03TfuIGd2F29z2fnTgJbaloaCAGd2Gitewf+YfsDHbyiLWlar/EMFvobCjjfJXxcAZ75Oy26+gm 3mIuqrhYZTyexR49FLZ0wyY2/qzSkpKns1jQmrOmf398ARuVc7WA4gOtAAAAJXRFWHRkYXRlOmNy ZWF0ZQAyMDIwLTA5LTA3VDA1OjMzOjE2KzAwOjAw76ZY7wAAACV0RVh0ZGF0ZTptb2RpZnkAMjAy MC0wOS0wN1QwNTozMzoxNiswMDowMJ774FMAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVh ZHlxyWU8AAAAAElFTkSuQmCC"}_isCheckedItem(e,i){const n=Object.values(this._valueMapping),a=Object.keys(this._valueMapping);return n.filter((r,l)=>r===e.value&&i===parseInt(a[l],10)).length>0}_getItemTemplate(e,i){const n=this._isCheckedItem(e,i);return p`
        <label
          for="${this._GUID}-item-${i}"
          class="kuc-mobile-checkbox-1-23-1__group__select-menu__item${e.disabled?" kuc-mobile-checkbox-1-23-1__group__select-menu__item--disabled":""}"
          ?borderVisible="${this.borderVisible}"
        >
          <input
            type="checkbox"
            id="${this._GUID}-item-${i}"
            class="kuc-mobile-checkbox-1-23-1__group__select-menu__item__input"
            name="${this._GUID}-group"
            data-index="${i}"
            value="${e.value!==void 0?e.value:""}"
            aria-describedby="${this._GUID}-error}"
            aria-required="${this.requiredIcon}"
            aria-invalid="${this.error!==""}"
            ?disabled="${e.disabled||this.disabled}"
            @change="${this._handleChangeInput}"
          />
          <div class="kuc-mobile-checkbox-1-23-1__group__select-menu__item__label">
            ${this._getCheckboxIconSvgTemplate(n)}${e.label===void 0?e.value:e.label}
          </div>
        </label>
      `}shouldUpdate(e){return e.has("items")&&!D(this.items)?(this.throwErrorAfterUpdateComplete(y.ITEMS.IS_NOT_ARRAY),!1):e.has("value")&&!D(this.value)?(this.throwErrorAfterUpdateComplete(y.VALUE.IS_NOT_ARRAY),!1):e.has("selectedIndex")&&!D(this.selectedIndex)?(this.throwErrorAfterUpdateComplete(y.SELECTED_INDEX.IS_NOT_ARRAY),!1):!0}willUpdate(e){if(e.has("value")){if(this.value.length>0)return;this.selectedIndex=[]}}update(e){(e.has("items")||e.has("value")||e.has("selectedIndex"))&&(this._valueMapping=this._getValueMapping({items:this.items,value:this.value,selectedIndex:this.selectedIndex}),this._setValueAndSelectedIndex()),super.update(e)}render(){return p`
        <fieldset class="kuc-mobile-checkbox-1-23-1__group">
          <legend
            class="kuc-mobile-checkbox-1-23-1__group__label"
            ?hidden="${!this.label}"
          >
            <kuc-base-mobile-label-1-23-1
              .text="${this.label}"
              .requiredIcon="${this.requiredIcon}"
            ></kuc-base-mobile-label-1-23-1>
          </legend>
          <div
            class="kuc-mobile-checkbox-1-23-1__group__select-menu ${this.requiredIcon?"kuc-mobile-checkbox-1-23-1__group__select-menu--required":""}"
            ?borderVisible="${this.borderVisible}"
            ?disabled="${this.disabled}"
          >
            ${this.items.map((e,i)=>this._getItemTemplate(e,i))}
          </div>
          <kuc-base-mobile-error-1-23-1
            .text="${this.error}"
            .guid="${this._GUID}"
            ariaLive="assertive"
          >
          </kuc-base-mobile-error-1-23-1>
        </fieldset>
      `}updated(){this._inputEls.forEach(e=>{e.checked=this.value.indexOf(e.value)>-1})}_setValueAndSelectedIndex(){this.value=Object.values(this._valueMapping),this.selectedIndex=Object.keys(this._valueMapping).map(e=>parseInt(e,10))}_getValueMapping(e){const i=e.items||[],n=e.value||[],a=e.selectedIndex||[],s=i.map(d=>d.value||""),r=Object.assign({},s),l={};if(n.length===0){const d=this._getValidValue(r,a);return a.forEach((h,_)=>l[h]=d[_]),l}return this._getValidSelectedIndex(r).forEach((d,h)=>l[d]=n[h]),l}_getValidValue(e,i){return i.filter(n=>e[n]).map(n=>e[n])}_getValidSelectedIndex(e){const i=[];for(let n=0;n<this.value.length;n++){const a=this.selectedIndex[n];if(e[a]===this.value[n]){i.push(a);continue}const s=this.items.findIndex(r=>r.value===this.value[n]);i.push(s)}return i}}we([u({type:String,reflect:!0,attribute:"class"})],o.prototype,"className",void 0),we([u({type:String})],o.prototype,"error",void 0),we([u({type:String,reflect:!0,attribute:"id"})],o.prototype,"id",void 0),we([u({type:String})],o.prototype,"label",void 0),we([u({type:Boolean})],o.prototype,"borderVisible",void 0),we([u({type:Boolean})],o.prototype,"disabled",void 0),we([u({type:Boolean})],o.prototype,"requiredIcon",void 0),we([u({type:Boolean,attribute:"hidden",reflect:!0,converter:V})],o.prototype,"visible",void 0),we([u({type:Array})],o.prototype,"items",void 0),we([u({type:Array})],o.prototype,"selectedIndex",void 0),we([u({type:Array})],o.prototype,"value",void 0),we([q(".kuc-mobile-checkbox-1-23-1__group__select-menu__item__input")],o.prototype,"_inputEls",void 0),we([v()],o.prototype,"_valueMapping",void 0),window.customElements.define("kuc-mobile-checkbox-1-23-1",o),x(Pc),On=o})();const Uc=`
  kuc-mobile-dropdown-1-23-1,
  kuc-mobile-dropdown-1-23-1 * {
    font-size: 13px;
    color: #333333;
    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
      "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",
      "Lucida Sans Unicode", Arial, Verdana, sans-serif;
  }
  kuc-mobile-dropdown-1-23-1:lang(es),
  kuc-mobile-dropdown-1-23-1:lang(es) * {
    font-family: sans-serif;
  }
  kuc-mobile-dropdown-1-23-1:lang(zh),
  kuc-mobile-dropdown-1-23-1:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
      Verdana, sans-serif;
  }
  kuc-mobile-dropdown-1-23-1:lang(zh-TW),
  kuc-mobile-dropdown-1-23-1:lang(zh-TW) * {
      font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,
      Verdana,sans-serif
  }
  kuc-mobile-dropdown-1-23-1 {
    display: inline-block;
    width: 100%;
  }

  kuc-mobile-dropdown-1-23-1[hidden] {
    display: none;
  }

  .kuc-mobile-dropdown-1-23-1__label {
    display: inline-block;
    font-size: 86%;
    font-weight: bold;
    line-height: 1.5;
    padding: 0px;
    margin: 0 0 4px 0;
    white-space: nowrap;
  }

  .kuc-mobile-dropdown-1-23-1__label[hidden] {
    display: none;
  }

  .kuc-mobile-dropdown-1-23-1__input-form {
    word-wrap: break-word;
    min-height: 1em;
    padding-left: 0.5em;
    padding-right: 0.5em;
  }

  .kuc-mobile-dropdown-1-23-1__input-form__select {
    display: inline-block;
    border-radius: 0.4em;
    max-width: 100%;
  }

  .kuc-mobile-dropdown-1-23-1__input-form__select.kuc--required {
    border: 1px solid #cf4a38;
  }

  .kuc-mobile-dropdown-1-23-1__input-form__select__input {
    min-width: 100px;
    max-width: 100%;
  }

  .kuc-mobile-dropdown-1-23-1__input-form__select__input:disabled {
    color: #999999;
    -webkit-text-fill-color: #999999;
    background-color: #d5d7d9;
    opacity: 1;
  }
`;var Pe=function(o,t,e,i){var n=arguments.length,a=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(o,t,e,i);else for(var r=o.length-1;r>=0;r--)(s=o[r])&&(a=(n<3?s(a):n>3?s(t,e,a):s(t,e))||a);return n>3&&a&&Object.defineProperty(t,e,a),a};let Bn;(()=>{if(Bn=window.customElements.get("kuc-mobile-dropdown-1-23-1"),Bn)return;class o extends k{constructor(e){super(),this.className="",this.error="",this.id="",this.label="",this.value="",this.selectedIndex=-1,this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this.items=[],this._hasValueInItems=!1,this._GUID=M();const i=$(e);this._setInitialValue(i),Object.assign(this,i)}_setInitialValue(e){const i="value"in e,n="selectedIndex"in e;!i&&n&&(this.value=this._getValue(e)||"")}_handleChangeInput(e){e.stopPropagation();const i=e.target,n=i.value;if(this.value===n&&this.selectedIndex===i.selectedIndex)return;const a={oldValue:this.value,value:n};this.value=n,this.selectedIndex=i.selectedIndex,m(this,"change",a)}shouldUpdate(e){return e.has("items")&&!D(this.items)?(this.throwErrorAfterUpdateComplete(y.ITEMS.IS_NOT_ARRAY),!1):e.has("value")&&!_i(this.value)?(this.throwErrorAfterUpdateComplete(y.VALUE.IS_NOT_STRING),!1):e.has("selectedIndex")&&!Kt(this.selectedIndex)?(this.throwErrorAfterUpdateComplete(y.SELECTED_INDEX.IS_NOT_NUMBER),!1):!0}willUpdate(e){if((e.has("items")||e.has("value"))&&(this._hasValueInItems=this.items.some(i=>i.value===this.value)),e.has("value")){if(this.value!==""||this._hasValueInItems)return;this.selectedIndex=-1}}update(e){(e.has("items")||e.has("value")||e.has("selectedIndex"))&&(this.selectedIndex=this._getSelectedIndex(),this.value=this._getValue({items:this.items,selectedIndex:this.selectedIndex})||""),super.update(e)}_getSelectedIndex(){if(!this.value&&!this._hasValueInItems)return this.items[this.selectedIndex]?this.selectedIndex:-1;const e=this.items.findIndex(n=>n.value===this.value);if(e===-1)return-1;const i=this.items.findIndex((n,a)=>n.value===this.value&&a===this.selectedIndex);return i>-1?i:e}_getValue(e){const i=e.items||[],n=e.selectedIndex===0||e.selectedIndex?e.selectedIndex:-1,a=i[n];return a?a.value:""}_isCheckedItem(e,i){return this.value?e.value===this.value&&this.selectedIndex===i:this.selectedIndex===i}_getItemTemplate(e,i){const n=this._isCheckedItem(e,i);return p`
        <option
          value="${e.value||""}"
          ?selected="${n}"
          ?disabled="${e.disabled}"
        >
          ${e.label===void 0?e.value:e.label}
        </option>
      `}render(){return p`
        <label
          class="kuc-mobile-dropdown-1-23-1__label"
          for="${this._GUID}-label"
          ?hidden="${!this.label}"
        >
          <kuc-base-mobile-label-1-23-1
            .text="${this.label}"
            .requiredIcon="${this.requiredIcon}"
          ></kuc-base-mobile-label-1-23-1>
        </label>
        <div class="kuc-mobile-dropdown-1-23-1__input-form">
          <div
            class="kuc-mobile-dropdown-1-23-1__input-form__select
            ${this.requiredIcon?"kuc--required":""}"
          >
            <select
              class="kuc-mobile-dropdown-1-23-1__input-form__select__input"
              id="${this._GUID}-label"
              aria-describedby="${this._GUID}-error"
              aria-required="${this.requiredIcon}"
              aria-invalid="${this.error!==""}"
              ?disabled="${this.disabled}"
              @change="${this._handleChangeInput}"
            >
              ${this.items.map((e,i)=>this._getItemTemplate(e,i))}
            </select>
          </div>
        </div>
        <kuc-base-mobile-error-1-23-1
          .text="${this.error}"
          .guid="${this._GUID}"
          ariaLive="assertive"
        >
        </kuc-base-mobile-error-1-23-1>
      `}updated(e){e.has("selectedIndex")&&(this._selectEl.selectedIndex=this.selectedIndex),super.update(e)}}Pe([u({type:String,reflect:!0,attribute:"class"})],o.prototype,"className",void 0),Pe([u({type:String})],o.prototype,"error",void 0),Pe([u({type:String,reflect:!0,attribute:"id"})],o.prototype,"id",void 0),Pe([u({type:String})],o.prototype,"label",void 0),Pe([u({type:String})],o.prototype,"value",void 0),Pe([u({type:Number})],o.prototype,"selectedIndex",void 0),Pe([u({type:Boolean})],o.prototype,"disabled",void 0),Pe([u({type:Boolean})],o.prototype,"requiredIcon",void 0),Pe([u({type:Boolean,attribute:"hidden",reflect:!0,converter:V})],o.prototype,"visible",void 0),Pe([u({type:Array})],o.prototype,"items",void 0),Pe([b(".kuc-mobile-dropdown-1-23-1__input-form__select__input")],o.prototype,"_selectEl",void 0),window.customElements.define("kuc-mobile-dropdown-1-23-1",o),x(Uc),Bn=o})();const zc=`
  kuc-mobile-multi-choice-1-23-1,
  kuc-mobile-multi-choice-1-23-1 * {
    font-size: 13px;
    color: #333333;
    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
      "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",
      "Lucida Sans Unicode", Arial, Verdana, sans-serif;
  }
  kuc-mobile-multi-choice-1-23-1:lang(es),
  kuc-mobile-multi-choice-1-23-1:lang(es) * {
    font-family: sans-serif;
  }
  kuc-mobile-multi-choice-1-23-1:lang(zh),
  kuc-mobile-multi-choice-1-23-1:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
      Verdana, sans-serif;
  }
  kuc-mobile-multi-choice-1-23-1:lang(zh-TW),
  kuc-mobile-multi-choice-1-23-1:lang(zh-TW) * {
      font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,
      Verdana,sans-serif
  }
  kuc-mobile-multi-choice-1-23-1 {
    display: inline-block;
    width: 100%;
  }

  kuc-mobile-multi-choice-1-23-1[hidden] {
    display: none;
  }

  .kuc-mobile-multi-choice-1-23-1__label {
    display: inline-block;
    font-size: 86%;
    font-weight: bold;
    line-height: 1.5;
    padding: 0px;
    margin: 0 0 4px 0;
    white-space: nowrap;
  }

  .kuc-mobile-multi-choice-1-23-1__label[hidden] {
    display: none;
  }

  .kuc-mobile-multi-choice-1-23-1__input-form {
    word-wrap: break-word;
    min-height: 1em;
    padding-left: 0.5em;
    padding-right: 0.5em;
  }

  .kuc-mobile-multi-choice-1-23-1__input-form__select {
    display: inline-block;
    border-radius: 0.4em;
    max-width: 100%;
  }

  .kuc-mobile-multi-choice-1-23-1__input-form__select.kuc--required {
    border: 1px solid #cf4a38;
  }

  .kuc-mobile-multi-choice-1-23-1__input-form__select__input {
    min-width: 100px;
    max-width: 100%;
  }

  .kuc-mobile-multi-choice-1-23-1__input-form__select__input:disabled {
    color: #999999;
    -webkit-text-fill-color: #999999;
    background-color: #d5d7d9;
    opacity: 1;
  }

  .kuc-mobile-multi-choice-1-23-1__input-form__select__input option:disabled {
    color: #999999;
    -webkit-text-fill-color: #999999;
    background-color: #d5d7d9;
    opacity: 1;
  }

  .kuc-mobile-multi-choice-1-23-1__input-form__select__input option:disabled[selected] {
    background-color: #cecece; /* Chrome */
    background-color: -moz-cellhighlight; /* Firefox */
    opacity: 1;
  }

  .kuc-mobile-multi-choice-1-23-1__input-form__select__input:disabled option {
    color: #999999;
    -webkit-text-fill-color: #999999;
  }
`;var Ue=function(o,t,e,i){var n=arguments.length,a=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(o,t,e,i);else for(var r=o.length-1;r>=0;r--)(s=o[r])&&(a=(n<3?s(a):n>3?s(t,e,a):s(t,e))||a);return n>3&&a&&Object.defineProperty(t,e,a),a};let Hn;(()=>{if(Hn=window.customElements.get("kuc-mobile-multi-choice-1-23-1"),Hn)return;class o extends k{constructor(e){super(),this.className="",this.error="",this.id="",this.label="",this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this.items=[],this.selectedIndex=[],this.value=[],this._valueMapping={},this._GUID=M();const i=$(e);this._setInitialValue(i),Object.assign(this,i)}_setInitialValue(e){const i="value"in e,n="selectedIndex"in e,a=e.selectedIndex||[];if(!i&&n){if(!D(a))return;const s=this._getValueMapping(e);this.value=this._getValidValue(s,a)}}_handleChangeInput(e){e.stopPropagation();const i=e.target,n=this.value?[...this.value]:this.value,a=Array.from(i.selectedOptions,l=>l.value),s=Array.from(i.selectedOptions,l=>l.dataset.index),r={value:a,oldValue:n};this.value=a,this.selectedIndex=s.map(l=>l?parseInt(l,10):0),m(this,"change",r)}shouldUpdate(e){return e.has("items")&&!D(this.items)?(this.throwErrorAfterUpdateComplete(y.ITEMS.IS_NOT_ARRAY),!1):e.has("value")&&!D(this.value)?(this.throwErrorAfterUpdateComplete(y.VALUE.IS_NOT_ARRAY),!1):e.has("selectedIndex")&&!D(this.selectedIndex)?(this.throwErrorAfterUpdateComplete(y.SELECTED_INDEX.IS_NOT_ARRAY),!1):!0}willUpdate(e){if(e.has("value")){if(this.value.length>0)return;this.selectedIndex=[]}}update(e){(e.has("items")||e.has("value")||e.has("selectedIndex"))&&(this._valueMapping=this._getValueMapping({items:this.items,value:this.value,selectedIndex:this.selectedIndex}),this._setValueAndSelectedIndex()),super.update(e)}_getValueMapping(e){const i=e.items||[],n=e.value||[],a=e.selectedIndex||[],s=i.map(d=>d.value||""),r=Object.assign({},s),l={};if(n.length===0){const d=this._getValidValue(r,a);return a.forEach((h,_)=>l[h]=d[_]),l}return this._getValidSelectedIndex(r).forEach((d,h)=>l[d]=n[h]),l}_getValidValue(e,i){return i.filter(n=>e[n]).map(n=>e[n])}_getValidSelectedIndex(e){const i=[];for(let n=0;n<this.value.length;n++){const a=this.selectedIndex[n];if(e[a]===this.value[n]){i.push(a);continue}const s=this.items.findIndex(r=>r.value===this.value[n]);i.push(s)}return i}_setValueAndSelectedIndex(){this.value=Object.values(this._valueMapping),this.selectedIndex=Object.keys(this._valueMapping).map(e=>parseInt(e,10))}_isCheckedItem(e,i){const n=Object.values(this._valueMapping),a=Object.keys(this._valueMapping);return n.filter((r,l)=>r===e.value&&i===parseInt(a[l],10)).length>0}_getItemTemplate(e,i){const n=this._isCheckedItem(e,i);return p`
        <option
          value="${e.value||""}"
          data-index="${i}"
          ?selected="${e.value!==void 0?n:!1}"
          ?disabled="${e.disabled}"
        >
          ${e.label===void 0?e.value:e.label}
        </option>
      `}render(){return p`
        <label
          class="kuc-mobile-multi-choice-1-23-1__label"
          for="${this._GUID}-label"
          ?hidden="${!this.label}"
        >
          <kuc-base-mobile-label-1-23-1
            .text="${this.label}"
            .requiredIcon="${this.requiredIcon}"
          ></kuc-base-mobile-label-1-23-1>
        </label>
        <div class="kuc-mobile-multi-choice-1-23-1__input-form">
          <div
            class="kuc-mobile-multi-choice-1-23-1__input-form__select
            ${this.requiredIcon?"kuc--required":""}"
          >
            <select
              class="kuc-mobile-multi-choice-1-23-1__input-form__select__input"
              id="${this._GUID}-label"
              aria-describedby="${this._GUID}-error"
              aria-required="${this.requiredIcon}"
              aria-invalid="${this.error!==""}"
              ?disabled="${this.disabled}"
              multiple
              @change="${this._handleChangeInput}"
            >
              ${this.items.map((e,i)=>this._getItemTemplate(e,i))}
            </select>
          </div>
        </div>
        <kuc-base-mobile-error-1-23-1
          .text="${this.error}"
          .guid="${this._GUID}"
          ariaLive="assertive"
        >
        </kuc-base-mobile-error-1-23-1>
      `}}Ue([u({type:String,reflect:!0,attribute:"class"})],o.prototype,"className",void 0),Ue([u({type:String})],o.prototype,"error",void 0),Ue([u({type:String,reflect:!0,attribute:"id"})],o.prototype,"id",void 0),Ue([u({type:String})],o.prototype,"label",void 0),Ue([u({type:Boolean})],o.prototype,"disabled",void 0),Ue([u({type:Boolean})],o.prototype,"requiredIcon",void 0),Ue([u({type:Boolean,attribute:"hidden",reflect:!0,converter:V})],o.prototype,"visible",void 0),Ue([u({type:Array})],o.prototype,"items",void 0),Ue([u({type:Array})],o.prototype,"selectedIndex",void 0),Ue([u({type:Array})],o.prototype,"value",void 0),Ue([v()],o.prototype,"_valueMapping",void 0),window.customElements.define("kuc-mobile-multi-choice-1-23-1",o),x(zc),Hn=o})();const jc=`
  kuc-mobile-radio-button-1-23-1,
  kuc-mobile-radio-button-1-23-1 * {
    font-size: 13px;
    color: #333333;
    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
      "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",
      "Lucida Sans Unicode", Arial, Verdana, sans-serif;
  }
  kuc-mobile-radio-button-1-23-1:lang(es),
  kuc-mobile-radio-button-1-23-1:lang(es) * {
    font-family: sans-serif;
  }
  kuc-mobile-radio-button-1-23-1:lang(zh) ,
  kuc-mobile-radio-button-1-23-1:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
      Verdana, sans-serif;
  }
  kuc-mobile-radio-button-1-23-1:lang(zh-TW),
  kuc-mobile-radio-button-1-23-1:lang(zh-TW) * {
      font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,
      Verdana,sans-serif
  }
  kuc-mobile-radio-button-1-23-1 {
    width: 100%;
    display: inline-block;
  }

  kuc-mobile-radio-button-1-23-1[hidden] {
    display: none;
  }

  .kuc-mobile-radio-button-1-23-1__group {
    border: none;
    height: auto;
    display: inline-block;
    width: 100%;
    vertical-align: top;
  }

  .kuc-mobile-radio-button-1-23-1__group__label {
    display: inline-block;
    font-size: 86%;
    font-weight: bold;
    line-height: 1.5;
    padding: 0px;
    margin: 0 0 4px 0;
    white-space: nowrap;
  }

  .kuc-mobile-radio-button-1-23-1__group__label[hidden] {
    display: none;
  }

  .kuc-mobile-radio-button-1-23-1__group__select-menu {
    margin-right: 0.5em;
    margin-left: 0.5em;
  }

  .kuc-mobile-radio-button-1-23-1__group__select-menu[bordervisible] {
    border-color: #b3b3b3;
    border-width: 1px;
    border-style: solid;
    border-radius: 0.4em;
  }

  .kuc-mobile-radio-button-1-23-1__group__select-menu__item {
    border: 1px solid transparent;
    position: relative;
    white-space: normal;
    word-wrap: normal;
    height: 45px;
    display: block;
  }

  .kuc-mobile-radio-button-1-23-1__group__select-menu[bordervisible]
    .kuc-mobile-radio-button-1-23-1__group__select-menu__item {
    border-bottom: 1px solid #b3b3b3;
  }

  .kuc-mobile-radio-button-1-23-1__group__select-menu[bordervisible]
    .kuc-mobile-radio-button-1-23-1__group__select-menu__item:last-child {
    border-bottom: 0px;
  }

  .kuc-mobile-radio-button-1-23-1__group__select-menu__item__input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  .kuc-mobile-radio-button-1-23-1__group__select-menu__item__label__icon {
    position: absolute;
    top: 50%;
    box-sizing: border-box;
    margin-top: -11px;
    width: 21px;
    height: 21px;
    box-shadow: 1px 1px 3px #f5f5f5 inset, -1px -1px 3px #f5f5f5 inset;
    content: "";
    border-radius: 9px;
    left: 8px;
  }

  .kuc-mobile-radio-button-1-23-1__group__select-menu__item__label__value {
    height: 45px;
    line-height: 45px;
    padding-left: 35px;
  }

  .kuc-mobile-radio-button-1-23-1__group__select-menu[disabled], 
  .kuc-mobile-radio-button-1-23-1__group__select-menu__item--disabled {
    background-color: #d5d7d9;
    color: #999999;
    -webkit-text-fill-color: #999999;
    background-color: #d5d7d9;
    opacity: 1;
  }
  .kuc-mobile-radio-button-1-23-1__group__select-menu[bordervisible]
  .kuc-mobile-radio-button-1-23-1__group__select-menu__item--disabled:last-child {
    border-bottom-left-radius: 0.3em;
    border-bottom-right-radius: 0.3em;
  }
  .kuc-mobile-radio-button-1-23-1__group__select-menu[bordervisible]
  .kuc-mobile-radio-button-1-23-1__group__select-menu__item--disabled:first-child {
    border-top-left-radius: 0.3em;
    border-top-right-radius: 0.3em;
  }

  .kuc-mobile-radio-button-1-23-1__group__select-menu__item__label {
    position: absolute;
    white-space: nowrap;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
    height: 100%;
    padding: 0px;
  }
`;var De=function(o,t,e,i){var n=arguments.length,a=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(o,t,e,i);else for(var r=o.length-1;r>=0;r--)(s=o[r])&&(a=(n<3?s(a):n>3?s(t,e,a):s(t,e))||a);return n>3&&a&&Object.defineProperty(t,e,a),a};let Rn;(()=>{if(Rn=window.customElements.get("kuc-mobile-radio-button-1-23-1"),Rn)return;class o extends k{constructor(e){super(),this.className="",this.error="",this.id="",this.label="",this.value="",this.selectedIndex=-1,this.borderVisible=!0,this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this.items=[],this._GUID=M();const i=$(e);this._setInitialValue(i),Object.assign(this,i)}_setInitialValue(e){const i="value"in e,n="selectedIndex"in e;!i&&n&&(this.value=this._getValue(e)||"")}willUpdate(e){if(e.has("value")){if(this.value!=="")return;this.selectedIndex=-1}}_handleChangeInput(e){e.stopPropagation();const i=e.target,n=i.value,a=i.dataset.index||"0",s=parseInt(a,10);if(this.value===n&&this.selectedIndex===s)return;const r={oldValue:this.value,value:n};this.value=n,this.selectedIndex=s,m(this,"change",r)}_getRadioIconSvgTemplate(e,i){return C`
      <svg
        class="kuc-mobile-radio-button-1-23-1__group__select-menu__item__label__icon"
        width="21"
        height="21"
        viewBox="0 0 21 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
      <defs>
        <radialGradient id="${this._GUID}-shadow">
          <stop offset="0%" style="stop-color:#5b5b5b;stop-opacity:0" />
          <stop offset="30%" style="stop-color:#5b5b5b;stop-opacity:0" />
          <stop offset="80%" style="stop-color:#5b5b5b;stop-opacity:0.1" />
          <stop offset="90%" style="stop-color:#5b5b5b;stop-opacity:0.15" />
          <stop offset="100%" style="stop-color:#5b5b5b;stop-opacity:0.2" />
        </radialGradient>
      </defs>
        <circle
          fill="url(#shadow)"
          cx="10.5"
          cy="10.5"
          r="10.15"
          stroke="#bbbbbb" stroke-width="1"/>
        ${i?C`<circle cx="10.5" cy="10.5" r="6.5" fill="${"#5b5b5b"}"/>`:""}
      </svg>
    `}_isCheckedItem(e,i){return this.value?e.value===this.value&&this.selectedIndex===i:this.selectedIndex===i}_getItemTemplate(e,i){const n=this._isCheckedItem(e,i);return p`
        <div
          class="kuc-mobile-radio-button-1-23-1__group__select-menu__item${e.disabled?" kuc-mobile-radio-button-1-23-1__group__select-menu__item--disabled":""}"
        >
          <input
            type="radio"
            aria-describedby="${this._GUID}-error"
            id="${this._GUID}-item-${i}"
            data-index="${i}"
            class="kuc-mobile-radio-button-1-23-1__group__select-menu__item__input"
            name="${this._GUID}-group"
            value="${e.value!==void 0?e.value:""}"
            aria-invalid="${this.error!==""}"
            aria-required="${this.requiredIcon}"
            ?disabled="${this.disabled||e.disabled}"
            @change="${this._handleChangeInput}"
          />
          <label
            class="kuc-mobile-radio-button-1-23-1__group__select-menu__item__label"
            for="${this._GUID}-item-${i}"
            >${this._getRadioIconSvgTemplate(this.disabled,n)}
            <div
              class="kuc-mobile-radio-button-1-23-1__group__select-menu__item__label__value"
            >
              ${e.label===void 0?e.value:e.label}
            </div>
          </label>
        </div>
      `}shouldUpdate(e){return e.has("items")&&!D(this.items)?(this.throwErrorAfterUpdateComplete(y.ITEMS.IS_NOT_ARRAY),!1):e.has("value")&&!_i(this.value)?(this.throwErrorAfterUpdateComplete(y.VALUE.IS_NOT_STRING),!1):e.has("selectedIndex")&&!Kt(this.selectedIndex)?(this.throwErrorAfterUpdateComplete(y.SELECTED_INDEX.IS_NOT_NUMBER),!1):!0}update(e){(e.has("items")||e.has("value")||e.has("selectedIndex"))&&(this.selectedIndex=this._getSelectedIndex(),this.value=this._getValue({items:this.items,selectedIndex:this.selectedIndex})||""),super.update(e)}render(){return p`
        <div class="kuc-mobile-radio-button-1-23-1__group">
          <div
            class="kuc-mobile-radio-button-1-23-1__group__label"
            ?hidden="${!this.label}"
          >
            <kuc-base-mobile-label-1-23-1
              .text="${this.label}"
              .requiredIcon="${this.requiredIcon}"
            ></kuc-base-mobile-label-1-23-1>
          </div>
          <div
            class="kuc-mobile-radio-button-1-23-1__group__select-menu"
            ?borderVisible="${this.borderVisible}"
            ?disabled="${this.disabled}"
          >
            ${this.items.map((e,i)=>this._getItemTemplate(e,i))}
          </div>
          <kuc-base-mobile-error-1-23-1
            .text="${this.error}"
            .guid="${this._GUID}"
            ariaLive="assertive"
          >
          </kuc-base-mobile-error-1-23-1>
        </div>
      `}updated(){this._inputEls.forEach((e,i)=>{e.checked=this.value===e.value&&i===this.selectedIndex})}_getSelectedIndex(){if(!this.value)return this.items[this.selectedIndex]?this.selectedIndex:-1;const e=this.items.findIndex(n=>n.value===this.value);if(e===-1)return-1;const i=this.items.findIndex((n,a)=>n.value===this.value&&a===this.selectedIndex);return i>-1?i:e}_getValue(e){const i=e.items||[],n=e.selectedIndex===0||e.selectedIndex?e.selectedIndex:-1,a=i[n];return a?a.value:""}}De([u({type:String,reflect:!0,attribute:"class"})],o.prototype,"className",void 0),De([u({type:String})],o.prototype,"error",void 0),De([u({type:String,reflect:!0,attribute:"id"})],o.prototype,"id",void 0),De([u({type:String})],o.prototype,"label",void 0),De([u({type:String})],o.prototype,"value",void 0),De([u({type:Number})],o.prototype,"selectedIndex",void 0),De([u({type:Boolean})],o.prototype,"borderVisible",void 0),De([u({type:Boolean})],o.prototype,"disabled",void 0),De([u({type:Boolean})],o.prototype,"requiredIcon",void 0),De([u({type:Boolean,attribute:"hidden",reflect:!0,converter:V})],o.prototype,"visible",void 0),De([u({type:Array})],o.prototype,"items",void 0),De([q(".kuc-mobile-radio-button-1-23-1__group__select-menu__item__input")],o.prototype,"_inputEls",void 0),window.customElements.define("kuc-mobile-radio-button-1-23-1",o),x(jc),Rn=o})();const Fc=`
  kuc-mobile-text-1-23-1,
  kuc-mobile-text-1-23-1 * {
    font-size: 13px;
    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
      "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",
      "Lucida Sans Unicode", Arial, Verdana, sans-serif;
  }
  kuc-mobile-text-1-23-1:lang(es),
  kuc-mobile-text-1-23-1:lang(es) * {
    font-family: sans-serif;
  }
  kuc-mobile-text-1-23-1:lang(zh),
  kuc-mobile-text-1-23-1:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
      Verdana, sans-serif;
  }
  kuc-mobile-text-1-23-1:lang(zh-TW),
  kuc-mobile-text-1-23-1:lang(zh-TW) * {
      font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,
      Verdana,sans-serif
  }
  kuc-mobile-text-1-23-1 {
    display: block;
  }
  kuc-mobile-text-1-23-1[hidden] {
    display: none;
  }
  .kuc-mobile-text-1-23-1__label {
    display: inline-block;
    font-weight: bold;
    line-height: 1.5;
    padding: 0;
    margin: 0 0 4px 0;
    white-space: nowrap;
  }
  .kuc-mobile-text-1-23-1__label[hidden] {
    display: none;
  }
  .kuc-mobile-text-1-23-1__input-form {
    padding-left: 0.5em;
    padding-right: 0.5em;
    display: flex;
    align-items: center;
  }
  .kuc-mobile-text-1-23-1__input-form__prefix {
    margin-right: 4px;
    color: #888888;
  }
  .kuc-mobile-text-1-23-1__input-form__prefix[hidden] {
    display: none;
  }
  .kuc-mobile-text-1-23-1__input-form__input {
    width: 100%;
    min-width: 20px;
    padding: 0.4em;
    border: 1px solid #b3b3b3;
    outline: 0;
    box-shadow: 0 1px 0 #ffffff, inset 0 2px 3px #dadada;
    border-radius: 0.4em;
    box-sizing: border-box;
    text-align: left;
  }
  .kuc-mobile-text-1-23-1__input-form__input[aria-required="true"] {
    border: 1px solid #cf4a38;
  }
  .kuc-mobile-text-1-23-1__input-form__input[textAlign="right"] {
    text-align: right;
  }
  .kuc-mobile-text-1-23-1__input-form__input:disabled {
    color: #999999;
    background-color: #d5d7d9;
    -webkit-text-fill-color: #999999;
    opacity: 1;
    -webkit-opacity: 1;
  }
  .kuc-mobile-text-1-23-1__input-form__suffix {
    margin-left: 4px;
    color: #888888;
  }
  .kuc-mobile-text-1-23-1__input-form__suffix[hidden] {
    display: none;
  }
`;var Ve=function(o,t,e,i){var n=arguments.length,a=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(o,t,e,i);else for(var r=o.length-1;r>=0;r--)(s=o[r])&&(a=(n<3?s(a):n>3?s(t,e,a):s(t,e))||a);return n>3&&a&&Object.defineProperty(t,e,a),a};let Nn;(()=>{if(Nn=window.customElements.get("kuc-mobile-text-1-23-1"),Nn)return;class o extends k{constructor(e){super(),this.className="",this.error="",this.id="",this.label="",this.placeholder="",this.prefix="",this.suffix="",this.textAlign="left",this.value="",this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this._GUID=M();const i=$(e);Object.assign(this,i)}_handleFocusInput(e){const i={value:this.value};m(this,"focus",i)}_handleChangeInput(e){e.stopPropagation();const i=e.target,n={value:"",oldValue:this.value};this.value=i.value,n.value=this.value,m(this,"change",n)}_handleInputText(e){e.stopPropagation();const n={value:e.target.value,data:e.data};m(this,"input",n)}render(){return p`
        <label
          class="kuc-mobile-text-1-23-1__label"
          for="${this._GUID}-label"
          ?hidden="${!this.label}"
        >
          <kuc-base-mobile-label-1-23-1
            .requiredIcon="${this.requiredIcon}"
            .text="${this.label}"
          ></kuc-base-mobile-label-1-23-1>
        </label>
        <div class="kuc-mobile-text-1-23-1__input-form">
          <span
            class="kuc-mobile-text-1-23-1__input-form__prefix"
            ?hidden="${!this.prefix}"
            >${this.prefix}</span
          >
          <input
            class="kuc-mobile-text-1-23-1__input-form__input"
            id="${this._GUID}-label"
            placeholder="${this.placeholder}"
            textAlign="${this.textAlign}"
            type="text"
            .value="${this.value}"
            ?disabled="${this.disabled}"
            aria-invalid="${this.error!==""}"
            aria-describedby="${this._GUID}-error"
            aria-required="${this.requiredIcon}"
            @focus="${this._handleFocusInput}"
            @change="${this._handleChangeInput}"
            @input="${this._handleInputText}"
          />
          <span
            class="kuc-mobile-text-1-23-1__input-form__suffix"
            ?hidden="${!this.suffix}"
            >${this.suffix}</span
          >
        </div>
        <kuc-base-mobile-error-1-23-1 .guid="${this._GUID}" .text="${this.error}">
        </kuc-base-mobile-error-1-23-1>
      `}}Ve([u({type:String,reflect:!0,attribute:"class"})],o.prototype,"className",void 0),Ve([u({type:String})],o.prototype,"error",void 0),Ve([u({type:String,reflect:!0,attribute:"id"})],o.prototype,"id",void 0),Ve([u({type:String})],o.prototype,"label",void 0),Ve([u({type:String})],o.prototype,"placeholder",void 0),Ve([u({type:String})],o.prototype,"prefix",void 0),Ve([u({type:String})],o.prototype,"suffix",void 0),Ve([u({type:String})],o.prototype,"textAlign",void 0),Ve([u({type:String})],o.prototype,"value",void 0),Ve([u({type:Boolean})],o.prototype,"disabled",void 0),Ve([u({type:Boolean})],o.prototype,"requiredIcon",void 0),Ve([u({type:Boolean,attribute:"hidden",reflect:!0,converter:V})],o.prototype,"visible",void 0),window.customElements.define("kuc-mobile-text-1-23-1",o),x(Fc),Nn=o})();const Gc=`
  kuc-mobile-textarea-1-23-1,
  kuc-mobile-textarea-1-23-1 * {
    font-size: 13px;
    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
      "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",
      "Lucida Sans Unicode", Arial, Verdana, sans-serif;
  }
  kuc-mobile-textarea-1-23-1:lang(es),
  kuc-mobile-textarea-1-23-1:lang(es) * {
    font-family: sans-serif;
  }
  kuc-mobile-textarea-1-23-1:lang(zh),
  kuc-mobile-textarea-1-23-1:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
      Verdana, sans-serif;
  }
  kuc-mobile-textarea-1-23-1:lang(zh-TW),
  kuc-mobile-textarea-1-23-1:lang(zh-TW) * {
      font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,
      Verdana,sans-serif
  }
  kuc-mobile-textarea-1-23-1 {
    display: block;
  }
  kuc-mobile-textarea-1-23-1[hidden] {
    display: none;
  }
  .kuc-mobile-textarea-1-23-1__label {
    padding: 0;
    margin: 0 0 4px 0;
    display: inline-block;
    font-weight: bold;
    line-height: 1.5;
    white-space: nowrap;
  }
  .kuc-mobile-textarea-1-23-1__label[hidden] {
    display: none;
  }
  .kuc-mobile-textarea-1-23-1__form {
    padding-left: 0.5em;
    padding-right: 0.5em;
  }
  .kuc-mobile-textarea-1-23-1__form__textarea {
    width: 100%;
    height: 120px;
    padding: 0.4em;
    border: 1px solid #b3b3b3;
    outline: 0;
    box-shadow: 0 1px 0 #ffffff, inset 0 2px 3px #dadada;
    border-radius: 0.4em;
    box-sizing: border-box;
    vertical-align: top;
  }
  .kuc-mobile-textarea-1-23-1__form__textarea[aria-required="true"] {
    border: 1px solid #cf4a38;
  }
  .kuc-mobile-textarea-1-23-1__form__textarea:disabled {
    color: #999999;
    background-color: #d5d7d9;
    opacity: 1;
  }
`;var kt=function(o,t,e,i){var n=arguments.length,a=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(o,t,e,i);else for(var r=o.length-1;r>=0;r--)(s=o[r])&&(a=(n<3?s(a):n>3?s(t,e,a):s(t,e))||a);return n>3&&a&&Object.defineProperty(t,e,a),a};let Pn;(()=>{if(Pn=window.customElements.get("kuc-mobile-textarea-1-23-1"),Pn)return;class o extends k{constructor(e){super(),this.className="",this.error="",this.id="",this.label="",this.placeholder="",this.value="",this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this._GUID=M();const i=$(e);Object.assign(this,i)}_handleFocusInput(e){const i={value:this.value};m(this,"focus",i)}_handleChangeInput(e){e.stopPropagation();const i=e.target,n={value:"",oldValue:this.value};this.value=i.value,n.value=this.value,m(this,"change",n)}_handleInputTextArea(e){e.stopPropagation();const n={value:e.target.value,data:e.data};m(this,"input",n)}render(){return p`
        <label
          class="kuc-mobile-textarea-1-23-1__label"
          for="${this._GUID}-label"
          ?hidden="${!this.label}"
        >
          <kuc-base-mobile-label-1-23-1
            .requiredIcon="${this.requiredIcon}"
            .text="${this.label}"
          ></kuc-base-mobile-label-1-23-1>
        </label>
        <div class="kuc-mobile-textarea-1-23-1__form">
          <textarea
            class="kuc-mobile-textarea-1-23-1__form__textarea"
            id="${this._GUID}-label"
            placeholder="${this.placeholder}"
            ?disabled="${this.disabled}"
            .value="${this.value}"
            aria-invalid="${this.error!==""}"
            aria-describedby="${this._GUID}-error"
            aria-required="${this.requiredIcon}"
            @focus="${this._handleFocusInput}"
            @change="${this._handleChangeInput}"
            @input="${this._handleInputTextArea}"
          /></textarea>
        </div>
        <kuc-base-mobile-error-1-23-1 .guid="${this._GUID}" .text="${this.error}">
        </kuc-base-mobile-error-1-23-1>
      `}}kt([u({type:String,reflect:!0,attribute:"class"})],o.prototype,"className",void 0),kt([u({type:String})],o.prototype,"error",void 0),kt([u({type:String,reflect:!0,attribute:"id"})],o.prototype,"id",void 0),kt([u({type:String})],o.prototype,"label",void 0),kt([u({type:String})],o.prototype,"placeholder",void 0),kt([u({type:String})],o.prototype,"value",void 0),kt([u({type:Boolean})],o.prototype,"disabled",void 0),kt([u({type:Boolean})],o.prototype,"requiredIcon",void 0),kt([u({type:Boolean,attribute:"hidden",reflect:!0,converter:V})],o.prototype,"visible",void 0),window.customElements.define("kuc-mobile-textarea-1-23-1",o),x(Gc),Pn=o})();const Wc=`
  kuc-mobile-notification-1-23-1 {
    display: block;
    font-size: 13px;
    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
      "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",
      "Lucida Sans Unicode", Arial, Verdana, sans-serif;
    visibility: hidden;
    animation-fill-mode: forwards;
    position: relative;
    top: -100px;
    left: 0;
  }
  kuc-mobile-notification-1-23-1:lang(es),
  kuc-mobile-notification-1-23-1:lang(es) * {
    font-family: sans-serif;
  }
  kuc-mobile-notification-1-23-1:lang(zh),
  kuc-mobile-notification-1-23-1:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
      Verdana, sans-serif;
  }
  kuc-mobile-notification-1-23-1:lang(zh-TW),
  kuc-mobile-notification-1-23-1:lang(zh-TW) * {
      font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,
      Verdana,sans-serif
  }
  .kuc-mobile-notification-fadein-1-23-1 {
    animation-name: kuc-mobile-notification-fade-in-1-23-1;
    animation-duration: 250ms;
    animation-timing-function: ease-out;
    width: 100%;
    position: fixed;
    visibility: visible;
  }

  .kuc-mobile-notification-fadeout-1-23-1 {
    animation-name: kuc-mobile-notification-fade-out-1-23-1;
    animation-duration: 250ms;
    animation-timing-function: ease-out;
    width: 100%;
    position: fixed;
  }

  .kuc-mobile-notification-1-23-1__notification {
    background-color: #ffffcf;
    background: linear-gradient(#ffda4a, #ffc32c);
    width: 100%;
    min-height: 48px;
    z-index: 20;
    font-size: 12px;
    font-weight: 700;
    line-height: 14px;
    text-shadow: rgba(255, 255, 255, 0.5) 0 1px 0;
    color: #333333;
    text-align: center;
    vertical-align: top;
  }

  .kuc-mobile-notification-1-23-1__notification__title {
    display: inline-block;
    vertical-align: middle;
    padding: 17px 44px 11px 44px;
    margin: 0 0 0 -20px;
    text-align: left;
    font-weight: inherit;
    font-family: inherit;
    word-break: break-word;
    white-space: pre-wrap;
  }

  .kuc-mobile-notification-1-23-1__notification__title--html {
    white-space: normal;
  }

  .kuc-mobile-notification-1-23-1__notification__close-button {
    position: absolute;
    right: 0;
    top: 0;
    width: 44px;
    height: 48px;
    padding: 0;
    background-color: transparent;
    border: none;
    vertical-align: middle;
    pointer-events: auto;
    outline: none;
  }
  @keyframes kuc-mobile-notification-fade-in-1-23-1 {
    0% {
      top: -100px;
      left: 0;
    }
    50% {
      top: -50px;
      left: 0;
    }
    100% {
      top: 0;
      left: 0;
    }
  }
  @keyframes kuc-mobile-notification-fade-out-1-23-1 {
    0% {
      visibility: visible;
      top: 0;
      left: 0;
    }
    50% {
      visibility: visible;
      top: -50px;
      left: 0;
    }
    100% {
      top: -100px;
      left: 0;
    }
  }
`;var Jt=function(o,t,e,i){var n=arguments.length,a=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(o,t,e,i);else for(var r=o.length-1;r>=0;r--)(s=o[r])&&(a=(n<3?s(a):n>3?s(t,e,a):s(t,e))||a);return n>3&&a&&Object.defineProperty(t,e,a),a};let Un;(()=>{if(Un=window.customElements.get("kuc-mobile-notification-1-23-1"),Un)return;class o extends k{constructor(e){super(),this.className="",this.id="",this.text="",this.duration=-1,this.container=document.body,this.content="",this._isOpened=!1,this._content="";const i=$(e);Object.assign(this,i)}_handleClickCloseButton(e){this.close()}_getCloseButtonSvgTemplate(){return C`
      <svg
        height="12"
        width="12"
        viewBox="0 0 512.001 512.001"
        xmlns="http://www.w3.org/2000/svg">
          <g>
            <path
              d="m512.001 84.853-84.853-84.853-171.147 171.147-171.148-171.147-84.853 84.853 171.148 171.147-171.148 171.148 84.853 84.853 171.148-171.147 171.147 171.147 84.853-84.853-171.148-171.148z"/>
          </g>
        </svg>
      `}_setAutoCloseTimer(){this._clearAutoCloseTimer(),!(!Number.isFinite(this.duration)||this.duration<0)&&(this._timeoutID=window.setTimeout(()=>{this.close()},this.duration))}_clearAutoCloseTimer(){this._timeoutID&&window.clearTimeout(this._timeoutID)}open(){if(!this._isValidContainerElement()){document.body.appendChild(this),requestAnimationFrame(()=>{document.body.removeChild(this)}),this.performUpdate();return}this.container.appendChild(this),this.performUpdate(),this.classList.remove("kuc-mobile-notification-fadeout-1-23-1"),this.classList.add("kuc-mobile-notification-fadein-1-23-1"),this._isOpened=!0,this._setAutoCloseTimer()}close(){this._close(),m(this,"close")}_close(){this._isOpened=!1,this.classList.remove("kuc-mobile-notification-fadein-1-23-1"),this.classList.add("kuc-mobile-notification-fadeout-1-23-1"),this._clearAutoCloseTimer()}shouldUpdate(e){if(e.has("container")){if(this.container===null||this.container===void 0)return this._isOpened&&this._close(),!1;const i=this._isValidContainerElement(),n=!i||!document.contains(this.container);if(this._isOpened&&n&&this._close(),!i)return this.throwErrorAfterUpdateComplete(y.CONTAINER.INVALID),!1}return!0}willUpdate(e){(e.has("content")||e.has("text"))&&(this.content!==null&&this.content!==void 0&&this.content!==""?oe(this.content)?this._content=p`<div
              class="kuc-mobile-notification-1-23-1__notification__title--html"
            >
              ${be(this.content)}
            </div>`:this._content=this.content:this._content=this.text)}_isValidContainerElement(){return this.container instanceof HTMLElement}render(){return p`
        <div class="kuc-mobile-notification-1-23-1__notification">
          <pre
            class="kuc-mobile-notification-1-23-1__notification__title"
            aria-live="assertive"
            role="${this._isOpened?"alert":""}"
          ><!---->${this._content}</pre>
          <button
            class="kuc-mobile-notification-1-23-1__notification__close-button"
            type="button"
            aria-label="close"
            @click="${this._handleClickCloseButton}"
          >
            ${this._getCloseButtonSvgTemplate()}
          </button>
        </div>
      `}}Jt([u({type:String,reflect:!0,attribute:"class"})],o.prototype,"className",void 0),Jt([u({type:String,reflect:!0,attribute:"id"})],o.prototype,"id",void 0),Jt([u({type:String})],o.prototype,"text",void 0),Jt([u({type:Number})],o.prototype,"duration",void 0),Jt([u()],o.prototype,"container",void 0),Jt([u()],o.prototype,"content",void 0),Jt([v()],o.prototype,"_isOpened",void 0),window.customElements.define("kuc-mobile-notification-1-23-1",o),x(Wc),Un=o})();const Kc=o=>{const t=document.createElement("div");return t.style.cssText=`
  height: 0px;
  overflow: hidden;
  display: inline-block;
  font-size: 14px;
  font-family: ${window.getComputedStyle(o).fontFamily};
  `,t},qc=o=>{const t=Kc(o),e=o.cloneNode(!0);if(e.hasAttribute("hidden"))return 0;t.appendChild(e),document.body.appendChild(t);const i=t.getBoundingClientRect().width;return document.body.removeChild(t),i},Yc=`
kuc-base-mobile-datetime-calendar-header-1-23-1,
kuc-base-mobile-datetime-calendar-header-1-23-1 * {
    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
    "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",
    "Lucida Sans Unicode", Arial, Verdana, sans-serif;
}
kuc-base-mobile-datetime-calendar-header-1-23-1:lang(zh),
kuc-base-mobile-datetime-calendar-header-1-23-1:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
    Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
    Verdana, sans-serif;
}
kuc-base-mobile-datetime-calendar-header-1-23-1:lang(zh-TW),
kuc-base-mobile-datetime-calendar-header-1-23-1:lang(zh-TW) * {
    font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
    Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,
    Verdana,sans-serif
}
kuc-base-mobile-datetime-calendar-header-1-23-1:lang(es),
kuc-base-mobile-datetime-calendar-header-1-23-1:lang(es) * {
    font-family: sans-serif;
}
.kuc-base-mobile-datetime-calendar-header-1-23-1__group {
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    border-bottom: 1px solid #e3e7e8;
    padding: 0;
    white-space: nowrap;
}
.kuc-base-mobile-datetime-calendar-header-1-23-1__group__button {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: inherit;
    border: 0;
    margin: 0;
    padding: 0;
    min-width: 40px;
    width: 40px;
    height: 40px;
    overflow: hidden;
    text-indent: 100%;
    white-space: nowrap;
    word-wrap: normal;
    cursor: pointer;
    -webkit-appearance: button;
}
.kuc-base-mobile-datetime-calendar-header-1-23-1__group__button-icon {
    vertical-align: middle;
}
.kuc-base-mobile-datetime-calendar-header-1-23-1__group__button:focus {
    outline: none;
}
.kuc-base-mobile-datetime-calendar-header-1-23-1__group__center {
    text-align: center;
    display: flex;
    flex: 1;
    justify-content: center;
    min-width: 186px;
}
.kuc-base-mobile-datetime-calendar-header-1-23-1__group__center
    > :first-child {
    padding-left: 13px;
}
.kuc-base-mobile-datetime-calendar-header-1-23-1__group__center__month,
.kuc-base-mobile-datetime-calendar-header-1-23-1__group__center__year {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}
.kuc-base-mobile-datetime-calendar-header-1-23-1__group__center__month__select,
.kuc-base-mobile-datetime-calendar-header-1-23-1__group__center__year__select {
    font-size: 14px;
    font-weight: 700;
    padding: 0 22.4px 0 0;
    line-height: 40px;
    border: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: url("data:image/svg+xml,%3Csvg%0A%20%20%20%20width%3D%2211%22%0A%20%20%20%20height%3D%226%22%0A%20%20%20%20viewBox%3D%220%200%2011%206%22%0A%20%20%20%20fill%3D%22none%22%0A%20%20%20%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%0A%20%20%3E%0A%20%20%20%20%3Cpath%0A%20%20%20%20%20%20fill-rule%3D%22evenodd%22%0A%20%20%20%20%20%20clip-rule%3D%22evenodd%22%0A%20%20%20%20%20%20d%3D%22M5.5061%206L0%200L11%200L5.5061%206Z%22%0A%20%20%20%20%20%20fill%3D%22%234b4b4b%22%0A%20%20%20%20%2F%3E%0A%20%20%3C%2Fsvg%3E")
    no-repeat center right 0.6em #ffffff;
}
.kuc-base-mobile-datetime-calendar-header-1-23-1__group__center__month__select:focus,
.kuc-base-mobile-datetime-calendar-header-1-23-1__group__center__year__select:focus {
    outline: none;
}
.kuc-base-mobile-datetime-calendar-header-1-23-1__month {
    margin: 0 4px 0 4px;
}
`;var Xt=function(o,t,e,i){var n=arguments.length,a=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(o,t,e,i);else for(var r=o.length-1;r>=0;r--)(s=o[r])&&(a=(n<3?s(a):n>3?s(t,e,a):s(t,e))||a);return n>3&&a&&Object.defineProperty(t,e,a),a};function Zc(o){return o>0&&o<13}function Jc(o){return o>=0&&o<1e4}class Dt extends k{constructor(){super(...arguments),this.language="en",this.month=1,this.year=new Date().getFullYear(),this._locale=N("en")}update(t){t.has("language")&&(this._locale=N(this.language)),this._monthOptions=this._generateMonthOptions(),this._yearOptions=this._generateYearOptions(),super.update(t)}render(){return p`
      <div class="kuc-base-mobile-datetime-calendar-header-1-23-1__group">
        <button
          aria-label="previous month"
          type="button"
          class="kuc-base-mobile-datetime-calendar-header-1-23-1__group__button kuc-base-mobile-datetime-calendar-header-1-23-1__group__button--previous-month"
          @click="${this._handleClickCalendarPrevMonthBtn}"
        >
          ${this._getLeftArrowIconSvgTemplate()}
        </button>
        <div class="kuc-base-mobile-datetime-calendar-header-1-23-1__group__center">
          ${this._getYearMonthTemplate()}
        </div>
        <button
          aria-label="next month"
          type="button"
          class="kuc-base-mobile-datetime-calendar-header-1-23-1__group__button kuc-base-mobile-datetime-calendar-header-1-23-1__group__button--next-month"
          @click="${this._handleClickCalendarNextMonthBtn}"
        >
          ${this._getRightArrowIconSvgTemplate()}
        </button>
      </div>
    `}updated(t){t.has("month")&&this._setSelectMonthWidth(this.month),t.has("year")&&this._setYearSelectedIndex(),super.update(t)}_setSelectMonthWidth(t){const e=this._monthOptions[t-1].label;if(!e)return;const i=document.createElement("span");i.innerText=e;const n=qc(i);this._selectMonthEl.selectedIndex=this.month-1,this._selectMonthEl.style.width=n+35+"px"}_setYearSelectedIndex(){if(this.year<100){this._selectYearEl.selectedIndex=this.year;return}this._selectYearEl.selectedIndex=100}_generateMonthOptions(){return this._locale.MONTH_SELECT.map((t,e)=>({value:`${e+1}`,label:`${t}`}))}_generateYearOptions(){return this._getYearOptions().map(t=>({value:`${t}`,label:`${t}${this._locale.YEAR_SELECT_POSTFIX}`}))}_getYearOptions(){const t=[];Number.isInteger(this.year)||(this.year=new Date().getFullYear());let e=this.year<100?0:this.year-100;const i=this.year>=9899?9999:this.year+100;for(e>=i&&(e=i-100),e;e<=i;e++)t.push(e);return t}_getYearMonthTemplate(){return this.language==="zh"||this.language==="ja"||this.language==="zh-TW"?p` ${this._getYearTemplate()}${this._getMonthTemplate()} `:p` ${this._getMonthTemplate()}${this._getYearTemplate()} `}_handleChangeMonthDropdown(t){t.stopPropagation(),t.preventDefault();const e=t.target;this.month=parseInt(e.value,10),this._dispatchCalendarHeaderChangeEvent()}_handleChangeYearDropdown(t){t.stopPropagation(),t.preventDefault();const e=t.target;this.year=parseInt(e.value,10),this._dispatchCalendarHeaderChangeEvent()}_handleClickCalendarPrevMonthBtn(t){t.stopPropagation(),this.month===1?(this.month=12,this.year--):this.month-=1,this._dispatchCalendarHeaderChangeEvent()}_handleClickCalendarNextMonthBtn(t){t.stopPropagation(),this.month===12?(this.month=1,this.year++):this.month+=1,this._dispatchCalendarHeaderChangeEvent()}_dispatchCalendarHeaderChangeEvent(){const t=this.year,e=this.month,i={value:`${t}-${e}`};m(this,"kuc:mobile-calendar-header-change",i)}_getOptionsMonthTemplate(){return this._monthOptions.map(t=>p`
        <option
          ?selected="${parseInt(t.value,10)===this.month}"
          value="${t.value}"
        >
          ${t.label}
        </option>
      `)}_getOptionsYearTemplate(){return this._yearOptions.map(t=>p`
        <option
          ?selected="${parseInt(t.value,10)===this.year}"
          value="${t.value}"
        >
          ${t.label}
        </option>
      `)}_getMonthTemplate(){return p`
      <div
        class="kuc-base-mobile-datetime-calendar-header-1-23-1__group__center__month"
      >
        <select
          class="kuc-base-mobile-datetime-calendar-header-1-23-1__group__center__month__select"
          @change="${this._handleChangeMonthDropdown}"
        >
          ${this._getOptionsMonthTemplate()}
        </select>
      </div>
    `}_getYearTemplate(){return p`
      <div
        class="kuc-base-mobile-datetime-calendar-header-1-23-1__group__center__year"
      >
        <select
          class="kuc-base-mobile-datetime-calendar-header-1-23-1__group__center__year__select"
          @change="${this._handleChangeYearDropdown}"
        >
          ${this._getOptionsYearTemplate()}
        </select>
      </div>
    `}_getLeftArrowIconSvgTemplate(){return C`
    <svg
      width="16"
      height="14"
      viewBox="0 0 16 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.70788 11.9567C9.0984 12.3472 9.0984 12.9804 8.70788 13.3709C8.31735 13.7614 7.68419 13.7614 7.29366 13.3709L2.34392 8.42118L0.929703 7.00696L2.34392 5.59275L7.29366 0.643003C7.68419 0.25248 8.31735 0.25248 8.70788 0.643003C9.0984 1.03353 9.0984 1.66669 8.70788 2.05722L4.68709 6.07801L14.0718 6.07801C14.6241 6.07801 15.0718 6.52572 15.0718 7.07801C15.0718 7.63029 14.6241 8.07801 14.0718 8.07801L4.82917 8.07801L8.70788 11.9567Z"
        fill="#206694"
      />
    </svg>`}_getRightArrowIconSvgTemplate(){return C`
    <svg
      width="16"
      height="14"
      viewBox="0 0 16 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.29396 2.0572C6.90344 1.66668 6.90344 1.03351 7.29396 0.642991C7.68449 0.252466 8.31765 0.252467 8.70817 0.642991L13.6579 5.59274L15.0721 7.00695L13.6579 8.42117L8.70817 13.3709C8.31765 13.7614 7.68448 13.7614 7.29396 13.3709C6.90344 12.9804 6.90344 12.3472 7.29396 11.9567L11.3148 7.93591L1.93 7.93591C1.37772 7.93591 0.93 7.48819 0.93 6.93591C0.93 6.38362 1.37772 5.93591 1.93 5.93591L11.1727 5.93591L7.29396 2.0572Z"
        fill="#206694"
      />
    </svg>`}}Xt([u({type:String,attribute:"lang",reflect:!0})],Dt.prototype,"language",void 0),Xt([u({type:Number,hasChanged(o){return Zc(o)}})],Dt.prototype,"month",void 0),Xt([u({type:Number,hasChanged(o){return Jc(o)}})],Dt.prototype,"year",void 0),Xt([v()],Dt.prototype,"_monthOptions",void 0),Xt([v()],Dt.prototype,"_yearOptions",void 0),Xt([b(".kuc-base-mobile-datetime-calendar-header-1-23-1__group__center__month__select")],Dt.prototype,"_selectMonthEl",void 0),Xt([b(".kuc-base-mobile-datetime-calendar-header-1-23-1__group__center__year__select")],Dt.prototype,"_selectYearEl",void 0),window.customElements.get("kuc-base-mobile-datetime-calendar-header-1-23-1")||(x(Yc),window.customElements.define("kuc-base-mobile-datetime-calendar-header-1-23-1",Dt));const Xc=`
kuc-base-mobile-datetime-calendar-body-1-23-1,
kuc-base-mobile-datetime-calendar-body-1-23-1 * {
    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
    "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",
    "Lucida Sans Unicode", Arial, Verdana, sans-serif;
}

kuc-base-mobile-datetime-calendar-body-1-23-1:lang(zh),
kuc-base-mobile-datetime-calendar-body-1-23-1:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
    Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
    Verdana, sans-serif;
}

kuc-base-mobile-datetime-calendar-body-1-23-1:lang(zh-TW),
kuc-base-mobile-datetime-calendar-body-1-23-1:lang(zh-TW) * {
    font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
    Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,
    Verdana,sans-serif
}

kuc-base-mobile-datetime-calendar-body-1-23-1:lang(es),
kuc-base-mobile-datetime-calendar-body-1-23-1:lang(es) * {
    font-family: sans-serif;
}

.kuc-base-mobile-datetime-calendar-body-1-23-1__table,
.kuc-base-mobile-datetime-calendar-body-1-23-1__table tr {
    border-collapse: separate;
    border-spacing: 0;
}
.kuc-base-mobile-datetime-calendar-body-1-23-1__table__date--selected {
    border-spacing: 1px;
    padding: 0px;
}
.kuc-base-mobile-datetime-calendar-body-1-23-1__table__date {
    max-width: 40px;
    border-spacing: 1px;
    cursor: pointer;
    box-sizing: border-box;
    width: 40px;
    height: 40px;
    border: 1px solid #ffffff;
    text-align: center;
    vertical-align: middle;
    user-select: none;
    color: #333333;
    font-size: 14px;
    font-weight: 400;
}
.kuc-base-mobile-datetime-calendar-body-1-23-1__table__date
    .kuc-base-mobile-datetime-calendar-body-1-23-1__table__date__button {
    border-spacing: 1px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    vertical-align: middle;
    color: #333333;
}
.kuc-base-mobile-datetime-calendar-body-1-23-1__table__date,
.kuc-base-mobile-datetime-calendar-body-1-23-1__table__date--selected,
.kuc-base-mobile-datetime-calendar-body-1-23-1__table__header {
    box-sizing: border-box;
    height: 40px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    font-weight: 400;
    font-size: 12px;
    color: #333333;
    padding: 0;
}
.kuc-base-mobile-datetime-calendar-body-1-23-1__table__date {
    font-size: 14px;
}
th.kuc-base-mobile-datetime-calendar-body-1-23-1__table__header {
    font-weight: 700;
}
.kuc-base-mobile-datetime-calendar-body-1-23-1__table__date--selected
    .kuc-base-mobile-datetime-calendar-body-1-23-1__table__date__button,
.kuc-base-mobile-datetime-calendar-body-1-23-1__table__date
    .kuc-base-mobile-datetime-calendar-body-1-23-1__table__date__button,
.kuc-base-mobile-datetime-calendar-body-1-23-1__table__header {
    box-sizing: border-box;
    border: 1px solid #ffffff;
}
.kuc-base-mobile-datetime-calendar-body-1-23-1__table__date--selected
    .kuc-base-mobile-datetime-calendar-body-1-23-1__table__date__button,
.kuc-base-mobile-datetime-calendar-body-1-23-1__table__date
    .kuc-base-mobile-datetime-calendar-body-1-23-1__table__date__button {
    background: none;
    cursor: pointer;
    max-width: 40px;
}
.kuc-base-mobile-datetime-calendar-body-1-23-1__table__date--selected {
    border: 1px solid #206694;
    box-sizing: border-box;
    text-align: center;
    font-size: 14px;
}
.kuc-base-mobile-datetime-calendar-body-1-23-1__table__date--selected
    .kuc-base-mobile-datetime-calendar-body-1-23-1__table__date__button {
    outline: none;
}
.kuc-base-mobile-datetime-calendar-body-1-23-1__table__date
    .kuc-base-mobile-datetime-calendar-body-1-23-1__table__date__button:focus-visible {
    outline: none;
}
.kuc-base-mobile-datetime-calendar-body-1-23-1__table__date--today {
    color: #333333;
    background: #d8d8d8;
}
.kuc-base-mobile-datetime-calendar-body-1-23-1__table__date--other-month {
    color: #a5a5a5;
}
.kuc-base-mobile-datetime-calendar-body-1-23-1__table__date--selected:focus {
    outline: none;
}
`;var pi=function(o,t,e,i){var n=arguments.length,a=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(o,t,e,i);else for(var r=o.length-1;r>=0;r--)(s=o[r])&&(a=(n<3?s(a):n>3?s(t,e,a):s(t,e))||a);return n>3&&a&&Object.defineProperty(t,e,a),a};class Qt extends k{constructor(){super(),this.month=1,this.year=2021,this.language="en",this.value="",this._month=1,this._year=2021,this._locale=N("en"),this._handleClickDocument=this._handleClickDocument.bind(this)}connectedCallback(){super.connectedCallback(),setTimeout(()=>{document.addEventListener("click",this._handleClickDocument)},1)}disconnectedCallback(){document.removeEventListener("click",this._handleClickDocument),super.disconnectedCallback()}update(t){if(t.forEach((e,i)=>{i==="language"&&(this._locale=N(this.language))}),t.has("month")&&(this._month=this.month),t.has("year")&&(this._year=this.year),t.has("value")){const{month:e,year:i}=this._separateDateValue();this._month=parseInt(e,10),this._year=parseInt(i,10)}super.update(t)}render(){return p`
      <table class="kuc-base-mobile-datetime-calendar-body-1-23-1__table" role="grid">
        ${this._getHeaderItemsTemplate()}<!--
        -->${this._getDateItemsTemplate()}
      </table>
    `}_handleClickDocument(){m(this,"kuc:mobile-calendar-body-blur",{})}_handleClickDate(t){t.preventDefault(),t.stopPropagation();const e=t.target;e.setAttribute("aria-selected","true");const i=e.getAttribute("data-date");this._dispatchClickEvent(i)}_dispatchClickEvent(t){const e={oldValue:this.value,value:t};m(this,"kuc:mobile-calendar-body-click-date",e),this.value=t}_isToday(t){const e=new Date;return parseInt(t[0],10)===e.getFullYear()&&parseInt(t[1],10)===e.getMonth()+1&&parseInt(t[2],10)===e.getDate()}_separateDateValue(t=this.value){const e=t.split("-");return{day:e[2],month:e[1],year:e[0]}}_getDateClass(t,e){return e?this._isToday(t)?" kuc-base-mobile-datetime-calendar-body-1-23-1__table__date--today":"":" kuc-base-mobile-datetime-calendar-body-1-23-1__table__date--other-month"}_isSameDayOfMoment(t){const e=parseInt(t[1],10),i=parseInt(t[2],10),n=parseInt(t[0],10);let a=new Date().getDate();if(!this.value.split("-")[2])return!1;if(this.value&&(a=new Date(`${this.value}T00:00:00`).getDate()),a===i&&e===this._month)return!0;const r=new Date(n,this._month,0).getDate();return a>r&&r===i&&e===this._month}_getHeaderItemsTemplate(){return p`
      <thead>
        <tr>
          ${this._locale.WEEK_DAYS.map(t=>p`
              <th
                class="kuc-base-mobile-datetime-calendar-body-1-23-1__table__header"
                role="columnheader"
                abbr="${t.abbr}"
              >
                ${t.text}
              </th>
            `)}
        </tr>
      </thead>
    `}_getDateItemsTemplate(){const t=Ds(this._year,this._month-1),e=this._locale.MONTH_SELECT[this._month-1];return p`
      <tbody>
        ${t.map(i=>p`
            <tr>
              ${i.map(n=>{const a=n.text.split("-"),s=this._isSameDayOfMoment(a),r=parseInt(a[1],10)===this._month,l=(this.value===n.attr||s)&&r;return p`
                  <td
                    role="gridcell"
                    tabindex="${l?0:-1}"
                    aria-selected="${this.value===n.attr}"
                    aria-current="${this._isToday(a)?"date":!1}"
                    class="kuc-base-mobile-datetime-calendar-body-1-23-1__table__date${l?"--selected":""}${this._getDateClass(a,r)}"
                    data-date="${n.attr}"
                    aria-label="${a[2]} ${e}"
                    @click="${this._handleClickDate}"
                  >
                    ${a[2]||""}
                  </td>
                `})}
            </tr>
          `)}
      </tbody>
    `}}pi([u({type:Number})],Qt.prototype,"month",void 0),pi([u({type:Number})],Qt.prototype,"year",void 0),pi([u({type:String,attribute:"lang",reflect:!0})],Qt.prototype,"language",void 0),pi([u({type:String,reflect:!0})],Qt.prototype,"value",void 0),pi([v()],Qt.prototype,"_month",void 0),pi([v()],Qt.prototype,"_year",void 0),window.customElements.get("kuc-base-mobile-datetime-calendar-body-1-23-1")||(x(Xc),window.customElements.define("kuc-base-mobile-datetime-calendar-body-1-23-1",Qt));const Qc=`
kuc-base-mobile-datetime-calendar-footer-1-23-1,
kuc-base-mobile-datetime-calendar-footer-1-23-1 * {
    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
    "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",
    "Lucida Sans Unicode", Arial, Verdana, sans-serif;
}

kuc-base-mobile-datetime-calendar-footer-1-23-1:lang(zh),
kuc-base-mobile-datetime-calendar-footer-1-23-1:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
    Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
    Verdana, sans-serif;
}
kuc-base-mobile-datetime-calendar-footer-1-23-1:lang(zh-TW),
kuc-base-mobile-datetime-calendar-footer-1-23-1:lang(zh-TW) * {
    font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
    Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,
    Verdana,sans-serif
}
kuc-base-mobile-datetime-calendar-footer-1-23-1:lang(es),
kuc-base-mobile-datetime-calendar-footer-1-23-1:lang(es) * {
    font-family: sans-serif;
}
.kuc-base-mobile-datetime-calendar-footer-1-23-1__group {
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0;
    white-space: nowrap;
}
.kuc-base-mobile-datetime-calendar-footer-1-23-1__group__button {
    background: transparent;
    border: 1px solid transparent;
    color: #206694;
    height: 40px;
    cursor: pointer;
    font-size: 14px;
    outline: none;
    padding: 0;
    margin: 0;
    font-weight: 700;
}
.kuc-base-mobile-datetime-calendar-footer-1-23-1__group__center {
    width: 100%;
}
`;var qs=function(o,t,e,i){var n=arguments.length,a=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(o,t,e,i);else for(var r=o.length-1;r>=0;r--)(s=o[r])&&(a=(n<3?s(a):n>3?s(t,e,a):s(t,e))||a);return n>3&&a&&Object.defineProperty(t,e,a),a};class zn extends k{constructor(){super(...arguments),this.language="en",this._locale=N("en")}update(t){t.has("language")&&(this._locale=N(this.language)),super.update(t)}_handleClickCalendarFooterButtonClose(t){t.stopPropagation(),m(this,"kuc:mobile-calendar-footer-click-close")}_handleClickCalendarFooterButtonNone(t){t.stopPropagation(),m(this,"kuc:mobile-calendar-footer-click-none")}_handleClickCalendarFooterButtonToday(t){t.stopPropagation(),m(this,"kuc:mobile-calendar-footer-click-today")}render(){return p`
      <div class="kuc-base-mobile-datetime-calendar-footer-1-23-1__group">
        <button
          type="button"
          class="kuc-base-mobile-datetime-calendar-footer-1-23-1__group__button kuc-base-mobile-datetime-calendar-footer-1-23-1__group__button--today"
          @click="${this._handleClickCalendarFooterButtonToday}"
        >
          ${this._locale.CALENDAR_FOOTER_TEXT.today}
        </button>
        <button
          type="button"
          class="kuc-base-mobile-datetime-calendar-footer-1-23-1__group__button kuc-base-mobile-datetime-calendar-footer-1-23-1__group__button--none"
          @click="${this._handleClickCalendarFooterButtonNone}"
        >
          ${this._locale.CALENDAR_FOOTER_TEXT.none}
        </button>
        <button
          type="button"
          class="kuc-base-mobile-datetime-calendar-footer-1-23-1__group__button kuc-base-mobile-datetime-calendar-footer-1-23-1__group__button--close"
          @click="${this._handleClickCalendarFooterButtonClose}"
        >
          ${this._locale.CALENDAR_FOOTER_TEXT.close}
        </button>
      </div>
    `}}qs([u({type:String,attribute:"lang",reflect:!0})],zn.prototype,"language",void 0),qs([v()],zn.prototype,"_locale",void 0),window.customElements.get("kuc-base-mobile-datetime-calendar-footer-1-23-1")||(x(Qc),window.customElements.define("kuc-base-mobile-datetime-calendar-footer-1-23-1",zn));const ed=`
.kuc-base-mobile-datetime-calendar-1-23-1__group {
    display: inline-block;
    box-sizing: border-box;
    width: 290px;
    padding: 0 10px;
    background: #ffffff;
    text-align: center;
    font-size: 13px;
    border: 1px solid #d8d8d8;
}
`;var To=function(o,t,e,i){var n=arguments.length,a=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(o,t,e,i);else for(var r=o.length-1;r>=0;r--)(s=o[r])&&(a=(n<3?s(a):n>3?s(t,e,a):s(t,e))||a);return n>3&&a&&Object.defineProperty(t,e,a),a};class Ui extends k{constructor(){super(...arguments),this.language="en",this.value="",this._month=1,this._year=new Date().getFullYear()}update(t){t.has("value")&&this._updateValue(),super.update(t)}render(){return p`
      <div
        class="kuc-base-mobile-datetime-calendar-1-23-1__group"
        role="dialog"
        aria-modal="true"
        aria-label="Calender"
        @click="${this._handleClickCalendarGroup}"
      >
        <kuc-base-mobile-datetime-calendar-header-1-23-1
          .year="${this._year}"
          .month="${this._month}"
          .language="${this.language}"
          @kuc:mobile-calendar-header-change="${this._handleCalendarHeaderChange}"
        ></kuc-base-mobile-datetime-calendar-header-1-23-1>
        <kuc-base-mobile-datetime-calendar-body-1-23-1
          .year="${this._year}"
          .month="${this._month}"
          .value="${this.value}"
          .language="${this.language}"
        ></kuc-base-mobile-datetime-calendar-body-1-23-1>
        <kuc-base-mobile-datetime-calendar-footer-1-23-1
          .language="${this.language}"
        ></kuc-base-mobile-datetime-calendar-footer-1-23-1>
      </div>
    `}updated(t){super.updated(t)}_handleClickCalendarGroup(t){t.stopPropagation()}_handleCalendarHeaderChange(t){const{year:e,month:i}=this._separateValue(t.detail.value);this._year=e,this._month=i}_updateValue(){this.value===""&&(this.value=Tt().slice(0,7)+"-01");const{year:t,month:e}=this._separateValue(this.value);this._year=t,this._month=e}_separateValue(t){const e=t.split("-");return{year:parseInt(e[0],10),month:parseInt(e[1],10)}}}To([u({type:String,attribute:"lang",reflect:!0})],Ui.prototype,"language",void 0),To([u({type:String,reflect:!0})],Ui.prototype,"value",void 0),To([v()],Ui.prototype,"_month",void 0),To([v()],Ui.prototype,"_year",void 0),window.customElements.get("kuc-base-mobile-datetime-calendar-1-23-1")||(x(ed),window.customElements.define("kuc-base-mobile-datetime-calendar-1-23-1",Ui));const td=`
kuc-mobile-base-date-1-23-1,
kuc-mobile-base-date-1-23-1 * {
    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
    "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",
    "Lucida Sans Unicode", Arial, Verdana, sans-serif;
}
kuc-mobile-base-date-1-23-1:lang(zh),
kuc-mobile-base-date-1-23-1:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
    Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
    Verdana, sans-serif;
}
kuc-mobile-base-date-1-23-1:lang(zh-TW),
kuc-mobile-base-date-1-23-1:lang(zh-TW) * {
    font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
    Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,
    Verdana,sans-serif
}
kuc-mobile-base-date-1-23-1:lang(es),
kuc-mobile-base-date-1-23-1:lang(es) * {
    font-family: sans-serif;
}
.kuc-mobile-base-date-1-23-1__group {
    display: flex;
    align-items: center;
    position: relative;
    border-radius: 5.148px;
    background-color: #ffffff;
}
.kuc-mobile-base-date-1-23-1__group__input[aria-required="true"] {
    border-color: #cf4a38;
}
input.kuc-mobile-base-date-1-23-1__group__input {
    color: #000000;
    width: 100%;
    height: 31.28px;
    font-size: 99%;
    -webkit-flex-grow: 1;
    flex-grow: 1;
    padding: 5.148px;
    border-radius: 5.148px;
    box-shadow: 0px 1px 0px #ffffff, inset 0px 2px 3px #dadada;
    border: 1px solid #b3b3b3;
    font-weight: 400;
    -webkit-appearance: none;
    appearance: none;
    outline: 0;
    background: transparent;
    box-sizing: border-box;
}
.kuc-mobile-base-date-1-23-1__group--disabled {
    background-color: #d5d7d9;
    opacity: 1;
}
.kuc-mobile-base-date-1-23-1__group--disabled input {
    color: #999999;
    -webkit-text-fill-color: #999999;
}
.kuc-base-mobile-date-1-23-1__calendar {
    position: absolute;
    left: 0;
    top: 39px;
    z-index: 1000;
}
.kuc-mobile-base-date-1-23-1__group__button {
    position: absolute;
    display: flex;
    right: 10px;
    background-color: transparent;
    border: 0;
    padding: 0;
    height: 100%;
    align-items: center;
}
`;var et=function(o,t,e,i){var n=arguments.length,a=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(o,t,e,i);else for(var r=o.length-1;r>=0;r--)(s=o[r])&&(a=(n<3?s(a):n>3?s(t,e,a):s(t,e))||a);return n>3&&a&&Object.defineProperty(t,e,a),a};class ze extends k{constructor(){super(...arguments),this.inputId="",this.language="en",this.value="",this.disabled=!1,this.inputAriaInvalid=!1,this.required=!1,this._dateTimeCalendarVisible=!1,this._calendarValue="",this._inputValue=""}update(t){t.has("inputId")&&(this._GUID=this.inputId),(t.has("value")||t.has("language"))&&this._updateValueProp(),super.update(t)}render(){return p`
      <div class="kuc-mobile-base-date-1-23-1__group${this._getGroupClass()}">
        <input
          class="kuc-mobile-base-date-1-23-1__group__input"
          type="text"
          id="${this._GUID}-label"
          readonly="readonly"
          .value="${this._inputValue}"
          aria-label="Date"
          aria-describedby="${this._GUID}-error"
          aria-invalid="${this.inputAriaInvalid}"
          aria-required="${this.required}"
          ?disabled="${this.disabled}"
          @click="${this._handleClickOpenCalendar}"
        />
        <button
          type="button"
          class="kuc-mobile-base-date-1-23-1__group__button"
          aria-label="calendar"
          @click="${this._handleClickOpenCalendar}"
          ?disabled="${this.disabled}"
        >
          ${this._getCalendarIconTemplate()}
        </button>
        ${this._getCalendarTemplate()}
      </div>
    `}updated(t){this._dateTimeCalendarVisible&&this._setCalendarPosition(),super.updated(t)}_setCalendarPosition(){const{inputToBottom:e,inputToTop:i}=Ri(this),n=this._inputEl.getBoundingClientRect().height;e>=i||(this._calendarEl.style.bottom=n+2+"px",this._calendarEl.style.top="auto")}_getGroupClass(){let t="";return this.disabled&&(t+=" kuc-mobile-base-date-1-23-1__group--disabled"),this.required&&(t+=" kuc-mobile-base-date-1-23-1__group--required"),t}_handleClickOpenCalendar(t){if(this._dateTimeCalendarVisible){t.preventDefault(),t.stopPropagation();return}this._calendarValue=this._getNewCalendarValue(this._inputValue||""),this._openCalendar()}_updateValueProp(){if(this.value){this._inputValue=Os(this.language,this.value),this._calendarValue=this.value;return}const t=Tt();this._inputValue="",this._calendarValue=this._calendarValue?this._calendarValue.slice(0,7)+"-01":t.slice(0,7)}_getNewCalendarValue(t){if(Bs(this.language,t))return nn(this.language,t);let e=this._calendarValue.slice(0,7);return t===""&&(e=this._calendarValue.slice(0,7)+"-01"),e}_closeCalendar(){this._dateTimeCalendarVisible=!1}_openCalendar(){this._dateTimeCalendarVisible=!0}_handleClickCalendarClickDate(t){this._closeCalendar(),t.detail.oldValue=this.value,t.detail.oldValue!==t.detail.value&&(this.value=t.detail.value,m(this,"kuc:mobile-base-date-change",t.detail),this._btnToggleEl.focus())}_handleClickCalendarFooterButtonNone(){this._closeCalendar(),this._inputValue="";let t=this.value?this.value.slice(0,7)+"-01":"";t||(t=this._calendarValue.slice(0,7)+"-01"),this._calendarValue=t,this._dispathDateChangeCustomEvent("")}_handleClickCalendarFooterButtonToday(){this._closeCalendar();const t=Tt();this._dispathDateChangeCustomEvent(t)}_handleClickCalendarFooterButtonClose(){this._closeCalendar(),this._btnToggleEl.focus()}_handleCalendarBlurBody(t){t.preventDefault(),this._dateTimeCalendarVisible=!1}_dispathDateChangeCustomEvent(t){const e={value:t,oldValue:this.value};this.value=t,m(this,"kuc:mobile-base-date-change",e),this._btnToggleEl.focus()}_getCalendarTemplate(){return this._dateTimeCalendarVisible?p`
          <kuc-base-mobile-datetime-calendar-1-23-1
            class="kuc-base-mobile-date-1-23-1__calendar"
            .language="${this.language}"
            .value="${this._calendarValue}"
            ?hidden="${!this._dateTimeCalendarVisible}"
            @kuc:mobile-calendar-body-click-date="${this._handleClickCalendarClickDate}"
            @kuc:mobile-calendar-footer-click-none="${this._handleClickCalendarFooterButtonNone}"
            @kuc:mobile-calendar-footer-click-today="${this._handleClickCalendarFooterButtonToday}"
            @kuc:mobile-calendar-footer-click-close="${this._handleClickCalendarFooterButtonClose}"
            @kuc:mobile-calendar-body-blur="${this._handleCalendarBlurBody}"
          >
          </kuc-base-mobile-datetime-calendar-1-23-1>
        `:""}_getCalendarIconTemplate(){return p`
      <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M10 4C9.44772 4 9 4.44772 9 5V6H6C4.89543 6 4 6.89543 4 8V21C4 22.1046 4.89543 23 6 23H22C23.1046 23 24 22.1046 24 21V8C24 6.89543 23.1046 6 22 6H19V5C19 4.44772 18.5523 4 18 4C17.4477 4 17 4.44772 17 5V6H11V5C11 4.44772 10.5523 4 10 4ZM9 8V9C9 9.55228 9.44772 10 10 10C10.5523 10 11 9.55228 11 9V8H17V9C17 9.55228 17.4477 10 18 10C18.5523 10 19 9.55228 19 9V8H22V11H6V8H9ZM6 13V21H22V13H6Z"
          fill="#4b4b4b"
        />
      </svg>
    `}}et([u({type:String})],ze.prototype,"inputId",void 0),et([u({type:String,attribute:"lang",reflect:!0})],ze.prototype,"language",void 0),et([u({type:String,reflect:!0})],ze.prototype,"value",void 0),et([u({type:Boolean})],ze.prototype,"disabled",void 0),et([u({type:Boolean})],ze.prototype,"inputAriaInvalid",void 0),et([u({type:Boolean})],ze.prototype,"required",void 0),et([b(".kuc-mobile-base-date-1-23-1__group__button")],ze.prototype,"_btnToggleEl",void 0),et([b(".kuc-mobile-base-date-1-23-1__group__input")],ze.prototype,"_inputEl",void 0),et([b(".kuc-base-mobile-date-1-23-1__calendar")],ze.prototype,"_calendarEl",void 0),et([v()],ze.prototype,"_dateTimeCalendarVisible",void 0),window.customElements.get("kuc-mobile-base-date-1-23-1")||(x(td),window.customElements.define("kuc-mobile-base-date-1-23-1",ze));const id=`
kuc-mobile-date-picker-1-23-1,
kuc-mobile-date-picker-1-23-1 * {
  color: #333333;
  font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
    "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",
    "Lucida Sans Unicode", Arial, Verdana, sans-serif;
}
kuc-mobile-date-picker-1-23-1:lang(zh),
kuc-mobile-date-picker-1-23-1:lang(zh) * {
  font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
    Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
    Verdana, sans-serif;
}
kuc-mobile-date-picker-1-23-1:lang(zh-TW),
kuc-mobile-date-picker-1-23-1:lang(zh-TW) * {
    font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
    Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,
    Verdana,sans-serif
}
kuc-mobile-date-picker-1-23-1:lang(es),
kuc-mobile-date-picker-1-23-1:lang(es) * {
    font-family: sans-serif;
}
kuc-mobile-date-picker-1-23-1 {
  font-size: 13px;
  color: #333333;
  display: inline-table;
  vertical-align: top;
  width: 100%;
}
kuc-mobile-date-picker-1-23-1[hidden] {
  display: none;
}
.kuc-mobile-date-picker-1-23-1__group {
  display: flex;
  flex-direction: column;
  border: none;
  padding: 0px;
  height: auto;
  margin: 0px;
}
.kuc-mobile-date-picker-1-23-1__group__label {
  display: inline-block;
  font-weight: bold;
  line-height: 1.5;
  padding: 0px;
  white-space: nowrap;
  margin: 0 0 4px 0;
}
.kuc-mobile-date-picker-1-23-1__group__base__date {
  width: 130px;
  margin-right: 0.5em;
  margin-left: 0.5em;
}
.kuc-mobile-date-picker-1-23-1__group__label[hidden] {
  display: none;
}
.kuc-mobile-date-picker-1-23-1__group input.kuc-base-date-1-23-1__input {
  width: 100px;
  height: 40px;
  padding: 0px;
  text-align: center;
  border: 1px solid #e3e7e8;
  box-sizing: border-box;
  font-size: 14px;
  box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;
}

.kuc-mobile-date-picker-1-23-1__group input.kuc-base-date-1-23-1__input:focus {
  outline: none;
  border: 1px solid #3498db;
}
.kuc-mobile-date-picker-1-23-1__group input.kuc-base-date-1-23-1__input--focus {
  box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;
  border: 1px solid #3498db;
  background-color: #ffffff;
  color: #333333;
}
.kuc-mobile-date-picker-1-23-1__group input.kuc-base-date-1-23-1__input:disabled {
  color: #888888;
  background-color: #d4d7d7;
  box-shadow: none;
  cursor: not-allowed;
}
`;var tt=function(o,t,e,i){var n=arguments.length,a=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(o,t,e,i);else for(var r=o.length-1;r>=0;r--)(s=o[r])&&(a=(n<3?s(a):n>3?s(t,e,a):s(t,e))||a);return n>3&&a&&Object.defineProperty(t,e,a),a};let jn;(()=>{if(jn=window.customElements.get("kuc-mobile-date-picker-1-23-1"),jn)return;class o extends k{constructor(e){super(),this.className="",this.error="",this.id="",this.label="",this.disabled=!1,this.requiredIcon=!1,this.language="auto",this.value="",this.visible=!0,this._dateConverted="",this._inputValue="",this._GUID=M();const i=$(e);Object.assign(this,i)}shouldUpdate(e){return this.value===void 0||this.value===""?!0:Ps(this.value)?(this._dateConverted=bo(this.value),this._dateConverted!==""&&!gt(this._dateConverted)?(this.throwErrorAfterUpdateComplete(Q.VALUE),!1):!0):(this.throwErrorAfterUpdateComplete(Q.VALUE),!1)}willUpdate(e){e.has("value")&&this.value!==void 0&&this.value!==""&&(this.value=this._dateConverted)}update(e){e.has("value")&&this._updateInputValue(),super.update(e)}render(){return p`
        <div class="kuc-mobile-date-picker-1-23-1__group">
          <label
            class="kuc-mobile-date-picker-1-23-1__group__label"
            for="${this._GUID}-label"
            @click="${this._handleClickLabel}"
            ?hidden="${!this.label}"
          >
            <kuc-base-mobile-label-1-23-1
              .requiredIcon="${this.requiredIcon}"
              .text="${this.label}"
            ></kuc-base-mobile-label-1-23-1>
          </label>
          <kuc-mobile-base-date-1-23-1
            class="kuc-mobile-date-picker-1-23-1__group__base__date"
            .disabled="${this.disabled}"
            .value="${this._inputValue}"
            .inputId="${this._GUID}"
            .inputAriaInvalid="${this.error!==""}"
            .required="${this.requiredIcon}"
            .language="${this._getLanguage()}"
            @kuc:mobile-base-date-change="${this._handleDateChange}"
          >
          </kuc-mobile-base-date-1-23-1>
          <kuc-base-mobile-error-1-23-1 .guid="${this._GUID}" .text="${this.error}">
          </kuc-base-mobile-error-1-23-1>
        </div>
      `}_updateInputValue(){if(this.value===void 0||this.value===""){this._inputValue="";return}this._inputValue=this.value}_getLanguage(){const e=["en","ja","zh","zh-TW","es"];return e.indexOf(this.language)!==-1?this.language:e.indexOf(document.documentElement.lang)!==-1?document.documentElement.lang:"en"}_handleClickLabel(e){e.preventDefault()}_handleDateChange(e){e.stopPropagation(),e.preventDefault();const i={oldValue:this.value,value:""};this.value=e.detail.value,i.value=this.value,this._dispatchChangeEvent(i)}_dispatchChangeEvent(e){m(this,"change",e)}}tt([u({type:String,reflect:!0,attribute:"class"})],o.prototype,"className",void 0),tt([u({type:String})],o.prototype,"error",void 0),tt([u({type:String,reflect:!0,attribute:"id"})],o.prototype,"id",void 0),tt([u({type:String})],o.prototype,"label",void 0),tt([u({type:Boolean})],o.prototype,"disabled",void 0),tt([u({type:Boolean})],o.prototype,"requiredIcon",void 0),tt([u({type:String,attribute:"lang",reflect:!0,converter:Gt})],o.prototype,"language",void 0),tt([u({type:String})],o.prototype,"value",void 0),tt([u({type:Boolean,attribute:"hidden",reflect:!0,converter:V})],o.prototype,"visible",void 0),tt([v()],o.prototype,"_inputValue",void 0),window.customElements.define("kuc-mobile-date-picker-1-23-1",o),x(id),jn=o})();const od=`
kuc-mobile-time-picker-1-23-1,
kuc-mobile-time-picker-1-23-1 * {
  font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
  "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",
  "Lucida Sans Unicode", Arial, Verdana, sans-serif;
}
kuc-mobile-time-picker-1-23-1:lang(zh),
kuc-mobile-time-picker-1-23-1:lang(zh) * {
  font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
  Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
  Verdana, sans-serif;
}
kuc-mobile-time-picker-1-23-1:lang(zh-TW),
kuc-mobile-time-picker-1-23-1:lang(zh-TW) * {
  font-family: "微軟正黒體", "Microsoft JhengHei", "新宋体", NSimSun, STHeiti,
  Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
  Verdana, sans-serif
}
kuc-mobile-time-picker-1-23-1:lang(es),
kuc-mobile-time-picker-1-23-1:lang(es) * {
  font-family: sans-serif;
}
kuc-mobile-time-picker-1-23-1 {
  font-size: 13px;
  display: inline-block;
  vertical-align: top;
  width: 100%;
}
kuc-mobile-time-picker-1-23-1[hidden] {
  display: none;
}
.kuc-mobile-time-picker-1-23-1__group__label {
  display: inline-block;
  font-weight: bold;
  line-height: 1.5;
  padding: 0px;
  margin: 0 0 4px 0;
  white-space: nowrap;
}
.kuc-mobile-time-picker-1-23-1__group__label[hidden] {
  display: none;
}
.kuc-base-mobile-time-1-23-1__group__wrapper {
  padding-left: 0.5em;
  max-width: 10px;
}
`,nd=`
kuc-base-mobile-time-1-23-1,
kuc-base-mobile-time-1-23-1 * {
  font-size: 13px;
  font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
  "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",
  "Lucida Sans Unicode", Arial, Verdana, sans-serif;
}

kuc-base-mobile-time-1-23-1:lang(zh),
kuc-base-mobile-time-1-23-1:lang(zh) * {
  font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
  Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
  Verdana, sans-serif;
}

kuc-base-mobile-time-1-23-1:lang(zh-TW),
kuc-base-mobile-time-1-23-1:lang(zh-TW) * {
  font-family: "微軟正黒體", "Microsoft JhengHei", "新宋体", NSimSun, STHeiti,
  Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
  Verdana, sans-serif
}

kuc-base-mobile-time-1-23-1:lang(es),
kuc-base-mobile-time-1-23-1:lang(es) * {
  font-family: sans-serif;
}

kuc-base-mobile-time-1-23-1 {
  width: 100%;
  display: inline-block;
  vertical-align: top;
}

kuc-base-mobile-time-1-23-1[hidden] {
  display: none;
}

.kuc-base-mobile-time-1-23-1__group {
  padding: 0;
  margin: 0;
  height: 31.28px;
  border: 1px solid #b3b3b3;
  border-radius: 5.2px;
  box-sizing: border-box;
  background-color: #ffffff;
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
  box-shadow: 0px 1px 0px #ffffff, inset 0px 2px 3px #dadada;
}

.kuc-base-mobile-time-1-23-1__group--required {
  border-color: #cf4a38;
}

.kuc-base-mobile-time-1-23-1__group__hours {
  padding: 5.148px 7.722px;
}

.kuc-base-mobile-time-1-23-1__group__minutes {
  padding: 5.148px 7.722px;
  -webkit-flex-grow: 1;
  flex-grow: 1;
}

.kuc-base-mobile-time-1-23-1__group__hours,
.kuc-base-mobile-time-1-23-1__group__minutes {
  font-size: 99%;
  height: 100%;
  color: #000000;
  border: none;
  border-radius: 5.148px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: transparent;
}

.kuc-base-mobile-time-1-23-1__group__colon {
  color: #000000;
}

.kuc-base-mobile-time-1-23-1__group__hours:disabled
+ .kuc-base-mobile-time-1-23-1__group__colon {
  color: #999999;
  -webkit-text-fill-color: #999999;
  opacity: 1;
}

.kuc-base-mobile-time-1-23-1__group--disabled {
  color: #999999;
  -webkit-text-fill-color: #999999;
  background-color: #d5d7d9;
  opacity: 1;
}

.kuc-base-mobile-time-1-23-1__group__hours:disabled,
.kuc-base-mobile-time-1-23-1__group__minutes:disabled {
  color: #999999;
  -webkit-text-fill-color: #999999;
  opacity: 1;
}

.kuc-base-mobile-time-1-23-1__group__hours:focus {
  outline: none;
}

.kuc-base-mobile-time-1-23-1__group__minutes:focus {
  outline: none;
}
`;var he=function(o,t,e,i){var n=arguments.length,a=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(o,t,e,i);else for(var r=o.length-1;r>=0;r--)(s=o[r])&&(a=(n<3?s(a):n>3?s(t,e,a):s(t,e))||a);return n>3&&a&&Object.defineProperty(t,e,a),a};class ne extends k{constructor(t){super(),this.guid="",this.language="en",this.value="",this.disabled=!1,this.hour12=!1,this.required=!1,this._timeStep=1,this._hours="",this._minutes="",this._suffix="",this._locale=N("en");const e=$(t);Object.assign(this,e)}update(t){t.has("language")&&(this._locale=N(this.language)),t.has("hour12")&&(this._hourOptions=Bu(this.hour12)),t.has("_timeStep")&&(this._minuteOptions=Ou(this._timeStep)),super.update(t)}render(){return p`
      <fieldset
        class="kuc-base-mobile-time-1-23-1__group${this.disabled?" kuc-base-mobile-time-1-23-1__group--disabled":""}${this.required?" kuc-base-mobile-time-1-23-1__group--required":""}"
        aria-label="label-text"
      >
        <select
          class="kuc-base-mobile-time-1-23-1__group__hours"
          aria-label="Hour"
          aria-describedby="${this.guid}-error"
          ?disabled="${this.disabled}"
          @change="${this._handleChangeHours}"
        >
          <option value selected></option>
          ${this._getOptionsHourTemplate()}
        </select>
        <span class="kuc-base-mobile-time-1-23-1__group__colon">:</span>
        <select
          class="kuc-base-mobile-time-1-23-1__group__minutes"
          aria-label="Minute"
          aria-describedby="${this.guid}-error"
          ?disabled="${this.disabled}"
          @change="${this._handleChangeMinutes}"
        >
          <option value selected></option>
          ${this._getOptionsMinuteTemplate()}
        </select>
      </fieldset>
    `}updated(t){t.has("value")&&this._updateInputValue(),super.update(t)}_updateInputValue(){const t=Au(this.value,this.hour12);this._hours=t.hours,this._minutes=t.minutes,this._suffix=t.suffix||"",this._setValueToInput(t)}_setValueToInput(t){if(this._minutesEl.value=t.minutes,t.suffix){this._hoursEl.value=t.suffix+" "+t.hours;return}this._hoursEl.value=t.hours}_handleChangeMinutes(t){t.preventDefault(),t.stopPropagation();const e=this._getTimeValueString(),n=t.target.value;this._minutes=n;const a=this._getTimeValueString();this.value=a,this._dispatchEventTimeChange(a,e)}_handleChangeHours(t){t.preventDefault(),t.stopPropagation();const e=this._getTimeValueString(),n=t.target.value.split(" ");n.length===2?(this._hours=n[1],this._suffix=n[0]):(this._hours=n[0],this._suffix="");const a=this._getTimeValueString();this.value=a,this._dispatchEventTimeChange(a,e)}_getTimeValueString(){const t=`${this._hours}:${this._minutes}`;return this._suffix?Hi(`${t} ${this._suffix}`):Hi(t)}_dispatchEventTimeChange(t,e){const i=t===":"?"":t,a={value:i,oldValue:e===":"?"":e};a.error=Wt(i)?"":this._locale.INVALID_TIME_FORMAT,m(this,"kuc:base-mobile-time-change",a)}_getOptionsMinuteTemplate(){return this._minuteOptions.map(t=>p` <option value="${t.value}">${t.label}</option> `)}_getOptionsHourTemplate(){return this._hourOptions.map(t=>p` <option value="${t.value}">${t.label}</option> `)}}he([u({type:String})],ne.prototype,"guid",void 0),he([u({type:String,attribute:"lang",reflect:!0})],ne.prototype,"language",void 0),he([u({type:String})],ne.prototype,"value",void 0),he([u({type:Boolean})],ne.prototype,"disabled",void 0),he([u({type:Boolean})],ne.prototype,"hour12",void 0),he([u({type:Boolean})],ne.prototype,"required",void 0),he([v()],ne.prototype,"_timeStep",void 0),he([v()],ne.prototype,"_hours",void 0),he([v()],ne.prototype,"_minutes",void 0),he([v()],ne.prototype,"_suffix",void 0),he([v()],ne.prototype,"_hourOptions",void 0),he([v()],ne.prototype,"_minuteOptions",void 0),he([b(".kuc-base-mobile-time-1-23-1__group__hours")],ne.prototype,"_hoursEl",void 0),he([b(".kuc-base-mobile-time-1-23-1__group__minutes")],ne.prototype,"_minutesEl",void 0),window.customElements.get("kuc-base-mobile-time-1-23-1")||(x(nd),window.customElements.define("kuc-base-mobile-time-1-23-1",ne));var Me=function(o,t,e,i){var n=arguments.length,a=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(o,t,e,i);else for(var r=o.length-1;r>=0;r--)(s=o[r])&&(a=(n<3?s(a):n>3?s(t,e,a):s(t,e))||a);return n>3&&a&&Object.defineProperty(t,e,a),a};let Fn;(()=>{if(Fn=window.customElements.get("kuc-mobile-time-picker-1-23-1"),Fn)return;class o extends k{constructor(e){super(),this.className="",this.error="",this.id="",this.label="",this.language="auto",this.value="",this.disabled=!1,this.hour12=!1,this.requiredIcon=!1,this.visible=!0,this._inputValue="",this._errorFormat="",this._isSelectError=!1,this._GUID=M();const i=$(e);Object.assign(this,i)}shouldUpdate(e){return this.value===void 0||this.value===""||Wt(this.value)?!0:(this.throwErrorAfterUpdateComplete(Q.VALUE),!1)}willUpdate(){this.value===void 0||this.value===""||(this.value=ft(this.value))}update(e){e.has("value")&&!this._isSelectError&&(this.value===void 0?this._inputValue="":this._inputValue=this.value||"",this._errorFormat=""),super.update(e)}render(){return p`
        <div class="kuc-mobile-time-picker-1-23-1__group">
          <label
            class="kuc-mobile-time-picker-1-23-1__group__label"
            ?hidden="${!this.label}"
          >
            <kuc-base-mobile-label-1-23-1
              .guid="${this._GUID}"
              .text="${this.label}"
              .requiredIcon="${this.requiredIcon}"
            ></kuc-base-mobile-label-1-23-1>
          </label>
          <div class="kuc-base-mobile-time-1-23-1__group__wrapper">
            <kuc-base-mobile-time-1-23-1
              .value="${this._inputValue}"
              .disabled="${this.disabled}"
              .hour12="${this.hour12}"
              .guid="${this._GUID}"
              .language="${this._getLanguage()}"
              .required="${this.requiredIcon}"
              @kuc:base-mobile-time-change="${this._handleTimeChange}"
            ></kuc-base-mobile-time-1-23-1>
          </div>
          <kuc-base-mobile-error-1-23-1
            .guid="${this._GUID}"
            .text="${this._errorFormat||this.error}"
            ariaLive="assertive"
          ></kuc-base-mobile-error-1-23-1>
        </div>
      `}updated(){this._isSelectError=!1}_handleTimeChange(e){e.preventDefault(),e.stopPropagation();const i={value:e.detail.value,oldValue:this.value};if(this._inputValue=e.detail.value,e.detail.error){this._isSelectError=!0,this._errorFormat=e.detail.error,this.value=void 0,i.value=void 0,this.error="",m(this,"change",i);return}this._isSelectError=!1,this._errorFormat="",this.value=e.detail.value,m(this,"change",i)}_getLanguage(){const e=["en","ja","zh","zh-TW","es"];return e.indexOf(this.language)!==-1?this.language:e.indexOf(document.documentElement.lang)!==-1?document.documentElement.lang:"en"}}Me([u({type:String,reflect:!0,attribute:"class"})],o.prototype,"className",void 0),Me([u({type:String})],o.prototype,"error",void 0),Me([u({type:String,reflect:!0,attribute:"id"})],o.prototype,"id",void 0),Me([u({type:String})],o.prototype,"label",void 0),Me([u({type:String,attribute:"lang",reflect:!0,converter:Gt})],o.prototype,"language",void 0),Me([u({type:String,hasChanged(t,e){return(t===""||t===void 0)&&t===e?!0:t!==e}})],o.prototype,"value",void 0),Me([u({type:Boolean})],o.prototype,"disabled",void 0),Me([u({type:Boolean})],o.prototype,"hour12",void 0),Me([u({type:Boolean})],o.prototype,"requiredIcon",void 0),Me([u({type:Boolean,attribute:"hidden",reflect:!0,converter:V})],o.prototype,"visible",void 0),Me([v()],o.prototype,"_inputValue",void 0),Me([v()],o.prototype,"_errorFormat",void 0),window.customElements.define("kuc-mobile-time-picker-1-23-1",o),x(od),Fn=o})();const ad=`
kuc-mobile-datetime-picker-1-23-1,
kuc-mobile-datetime-picker-1-23-1 * {
color: #333333;
font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
    "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",
    "Lucida Sans Unicode", Arial, Verdana, sans-serif;
}
kuc-mobile-datetime-picker-1-23-1:lang(zh),
kuc-mobile-datetime-picker-1-23-1:lang(zh) * {
font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
    Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
    Verdana, sans-serif;
}
kuc-mobile-datetime-picker-1-23-1:lang(zh-TW),
kuc-mobile-datetime-picker-1-23-1:lang(zh-TW) * {
    font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
    Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,
    Verdana,sans-serif
}
kuc-mobile-datetime-picker-1-23-1:lang(es),
kuc-mobile-datetime-picker-1-23-1:lang(es) * {
    font-family: sans-serif;
}
kuc-mobile-datetime-picker-1-23-1 {
font-size: 13px;
color: #333333;
display: inline-table;
vertical-align: top;
width: 100%;
}
kuc-mobile-datetime-picker-1-23-1[hidden] {
display: none;
}
.kuc-mobile-datetime-picker-1-23-1__group {
border: 0;
padding: 0;
}
.kuc-mobile-datetime-picker-1-23-1__group__label {
display: inline-block;
font-weight: bold;
line-height: 1.5;
padding: 0px;
white-space: nowrap;
margin: 0 0 4px 0;
}
.kuc-mobile-datetime-picker-1-23-1__group__label[hidden] {
display: none;
}
.kuc-mobile-datetime-picker-1-23-1__group__input {
display: flex;
align-items: center;
margin-right: 0.5em;
margin-left: 0.5em;
}
.kuc-mobile-datetime-picker-1-23-1__group__input--date {
width: 130px;
margin-right: 10px;
}
.kuc-mobile-datetime-picker-1-23-1__group__input--time {
max-width: 10px;
}
`;var _e=function(o,t,e,i){var n=arguments.length,a=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(o,t,e,i);else for(var r=o.length-1;r>=0;r--)(s=o[r])&&(a=(n<3?s(a):n>3?s(t,e,a):s(t,e))||a);return n>3&&a&&Object.defineProperty(t,e,a),a};let Gn;(()=>{if(Gn=window.customElements.get("kuc-mobile-datetime-picker-1-23-1"),Gn)return;class o extends k{constructor(e){super(),this.className="",this.error="",this.id="",this.label="",this.language="auto",this.value="",this.disabled=!1,this.hour12=!1,this.requiredIcon=!1,this.visible=!0,this._dateConverted="",this._changeDateByUI=!1,this._changeTimeByUI=!1,this._previousTimeValue="",this._previousDateValue="",this._dateValue="",this._timeValue="",this._errorFormat="",this._errorText="",this._GUID=M();const i=$(e);Object.assign(this,i)}shouldUpdate(e){return this.value===void 0||this.value===""?!0:typeof this.value!="string"?(this.throwErrorAfterUpdateComplete(Q.VALUE),!1):(this._dateAndTime=this._getDateTimeValue(this.value),this._dateConverted=bo(this._dateAndTime.date),zs(this._dateAndTime.date,this._dateAndTime.time)&&gt(this._dateConverted)?!0:(this.throwErrorAfterUpdateComplete(Q.VALUE),!1))}willUpdate(e){if(this._changeDateByUI||this._changeTimeByUI){this._updateValueAndErrorWhenUIChange();return}this._errorFormat="",this._updateErrorText(),this._updateValueWhenSetter()}update(e){e.has("value")&&(this.value===void 0&&this._setUndefinedValue(),this.value===""&&this._setEmptyValue()),super.update(e)}_updateValueWhenSetter(){if(this._errorFormat="",this.value===""||this.value===void 0){this._previousTimeValue="";return}this._setDateTimeValueSeparate(this._dateAndTime,this._dateConverted),this.value=this._getDateTimeString()}_setDateTimeValueSeparate(e,i){this._dateValue=i,this._timeValue=this._dateValue&&gt(i)?ft(e.time.slice(0,5)):this._previousTimeValue}_updateValueAndErrorWhenUIChange(){const e=this._checkDateTimeFormat();this.value=e?this.value:void 0,this._updateErrorText()}_checkDateTimeFormat(){const e=!!this._timeValue&&!this._dateValue,i=!!this._dateValue&&!this._timeValue;return!this._errorFormat&&!e&&!i}_setUndefinedValue(){if(!this._changeTimeByUI){if(this._errorFormat){if(this._changeDateByUI)return;this._dateValue="",this._timeValue="";return}this._dateValue=this._previousDateValue,this._timeValue=this._previousTimeValue}}_setEmptyValue(){this._dateValue="",this._timeValue="",this._previousTimeValue="",this._previousDateValue=""}_getDateTimeValue(e){if(e===""||e===void 0)return{date:"",time:""};const i=e.split("T"),n=i[0],a=i[1];if(e.indexOf("T")===e.length-1||i.length>2)return{date:n,time:""};if(!a)return{date:n,time:"00:00"};const[s,r,l]=a.split(":"),c=`${s}:${r||"00"}`;return l?{date:n,time:`${c}:${l}`}:{date:n,time:c}}render(){return p`
        <fieldset
          class="kuc-mobile-datetime-picker-1-23-1__group"
          aria-describedby="${this._GUID}-error"
        >
          <legend
            class="kuc-mobile-datetime-picker-1-23-1__group__label"
            ?hidden="${!this.label}"
          >
            <kuc-base-mobile-label-1-23-1
              .requiredIcon="${this.requiredIcon}"
              .text="${this.label}"
            ></kuc-base-mobile-label-1-23-1>
          </legend>
          <div class="kuc-mobile-datetime-picker-1-23-1__group__input">
            <kuc-mobile-base-date-1-23-1
              class="kuc-mobile-datetime-picker-1-23-1__group__input--date"
              .disabled="${this.disabled}"
              .value="${this._dateValue}"
              .inputId="${this._GUID}"
              .inputAriaInvalid="${this.error!==""}"
              .required="${this.requiredIcon}"
              .language="${this._getLanguage()}"
              @kuc:mobile-base-date-change="${this._handleDateChange}"
            >
            </kuc-mobile-base-date-1-23-1>
            <kuc-base-mobile-time-1-23-1
              class="kuc-mobile-datetime-picker-1-23-1__group__input--time"
              .value="${this._timeValue}"
              .disabled="${this.disabled}"
              .hour12="${this.hour12}"
              .guid="${this._GUID}"
              .language="${this._getLanguage()}"
              .required="${this.requiredIcon}"
              @kuc:base-mobile-time-change="${this._handleTimeChange}"
            ></kuc-base-mobile-time-1-23-1>
          </div>
          <kuc-base-mobile-error-1-23-1
            .guid="${this._GUID}"
            .text="${this._errorText}"
          >
          </kuc-base-mobile-error-1-23-1>
        </fieldset>
      `}updated(){this._resetState()}_resetState(){this._previousTimeValue="",this._previousDateValue="",this._changeDateByUI=!1,this._changeTimeByUI=!1}_updateErrorText(){this._errorText=this._errorFormat||this.error}_getLanguage(){const e=["en","ja","zh","zh-TW","es"];return e.indexOf(this.language)!==-1?this.language:e.indexOf(document.documentElement.lang)!==-1?document.documentElement.lang:"en"}_handleDateChange(e){if(e.stopPropagation(),e.preventDefault(),e.detail.value===this._dateValue)return;this._changeDateByUI=!0;let i=this._dateValue;e.detail.error?(this._errorFormat=e.detail.error,this.error=""):i=e.detail.value,this._updateDateTimeValue(i,"date")}_handleTimeChange(e){e.preventDefault(),e.stopPropagation(),this._changeTimeByUI=!0;let i=this._timeValue;e.detail.error?(this._errorFormat=e.detail.error,this.error=""):this._errorFormat="",i=e.detail.value,this._updateDateTimeValue(i,"time")}_updateDateTimeValue(e,i){const n=this.value;i==="date"?this._dateValue=e||"":this._timeValue=e,this._previousTimeValue=this._timeValue,this._previousDateValue=this._dateValue;const a=this._errorFormat?void 0:this._getDateTimeString(),s=this._errorFormat?void 0:a;this.value=s;const r=this._errorFormat?void 0:a;this.value=r,m(this,"change",{value:s,oldValue:n,changedPart:i})}_getDateTimeString(){if(this._dateValue===""&&this._timeValue==="")return"";if(!this._dateValue||!this._timeValue)return;if(!this.value)return`${this._dateValue}T${this._timeValue}:00`;const e=this.value.split(":");return e.length===3?`${this._dateValue}T${this._timeValue}:${e[2]}`:`${this._dateValue}T${this._timeValue}:00`}}_e([u({type:String,reflect:!0,attribute:"class"})],o.prototype,"className",void 0),_e([u({type:String})],o.prototype,"error",void 0),_e([u({type:String,reflect:!0,attribute:"id"})],o.prototype,"id",void 0),_e([u({type:String})],o.prototype,"label",void 0),_e([u({type:String,attribute:"lang",reflect:!0,converter:Gt})],o.prototype,"language",void 0),_e([u({type:String,hasChanged(t,e){return(t===""||t===void 0)&&t===e?!0:t!==e}})],o.prototype,"value",void 0),_e([u({type:Boolean})],o.prototype,"disabled",void 0),_e([u({type:Boolean})],o.prototype,"hour12",void 0),_e([u({type:Boolean})],o.prototype,"requiredIcon",void 0),_e([u({type:Boolean,attribute:"hidden",reflect:!0,converter:V})],o.prototype,"visible",void 0),_e([v()],o.prototype,"_dateValue",void 0),_e([v()],o.prototype,"_timeValue",void 0),_e([v()],o.prototype,"_errorFormat",void 0),_e([v()],o.prototype,"_errorText",void 0),window.customElements.define("kuc-mobile-datetime-picker-1-23-1",o),x(ad),Gn=o})();var Wn={d:(o,t)=>{for(var e in t)Wn.o(t,e)&&!Wn.o(o,e)&&Object.defineProperty(o,e,{enumerable:!0,get:t[e]})},o:(o,t)=>Object.prototype.hasOwnProperty.call(o,t)},Ys={};Wn.d(Ys,{r:()=>sd});const sd="1.23.1";Ys.r;var Kn={d:(o,t)=>{for(var e in t)Kn.o(t,e)&&!Kn.o(o,e)&&Object.defineProperty(o,e,{enumerable:!0,get:t[e]})},o:(o,t)=>Object.prototype.hasOwnProperty.call(o,t)},Zs={};Kn.d(Zs,{$:()=>rd});const rd=void 0;Zs.$;var ld=zo("<div></div>");function Js(o,t){mi(t,!0);let e=Nt(t,"type",3,"normal"),i=Nt(t,"disabled",3,!1),n=Nt(t,"visible",3,!0),a;jo(()=>{const r=new js({text:t.text,type:e(),content:t.content,className:t.className,id:t.id,disabled:i(),visible:n()});a.appendChild(r),t.onclick&&r.addEventListener("click",t.onclick)});var s=ld();za(s,r=>a=r,()=>a),oo(o,s),vi()}function ud(o,t){mi(t,!0);let e=Nt(t,"container",19,()=>typeof document<"u"?document.body:void 0),i=Nt(t,"footerVisible",3,!0),n=Nt(t,"buttons",19,()=>[]),a;jo(()=>{let c=t.footer;if(n().length>0){const d=document.createElement("div");n().forEach(h=>{const _=new js({text:h.text,type:h.type||"normal"});h.onclick&&_.addEventListener("click",h.onclick),d.appendChild(_)}),c=d}a=new pc({title:t.title,content:t.content,footer:c,header:t.header,icon:t.icon,className:t.className,id:t.id,container:e(),footerVisible:i()}),t.onclose&&a.addEventListener("close",t.onclose)});function s(){a?.open()}function r(){a?.close()}var l={open:s,close:r};return vi(l)}async function cd(o){try{return await kintone.api(kintone.api.url("/k/v1/records",!0),"DELETE",{app:74,ids:[o]}),!0}catch(e){return console.error("Error deleting repository record:",e),!1}}var dd=zo('<div class="header svelte-oiwvqb"><!> <!></div> <!>',1);const hd={hash:"svelte-oiwvqb",code:".header.svelte-oiwvqb {display:flex;gap:3%;}"};function _d(o,t){mi(t,!0),Pa(o,hd);let e;const i=74;function n(){const _=`https://sean.cybozu.com/k/${i}/show#record=${t.recordId}`;window.open(_,"_blank")}function a(){e.open()}async function s(){e.close(),await cd(t.recordId)?(alert("Stats deleted successfully"),location.reload()):alert("Failed to delete stats")}var r=dd(),l=ga(r),c=fa(l);Js(c,{text:"View This App's Stats",type:"normal",onclick:n});var d=ba(c,2);Js(d,{text:"Remove this App's Stats",type:"normal",onclick:a});var h=ba(l,2);za(ud(h,{title:"Confirm Delete",content:"Are you sure you want to delete this app's statistics?",icon:"question",buttons:[{text:"Cancel",type:"normal",onclick:()=>e.close()},{text:"Delete",type:"submit",onclick:s}]}),_=>e=_,()=>e),oo(o,r),vi()}function pd(o){const t=Array.from(document.querySelectorAll(".control-link-field-gaia"));return o?t.find(e=>e.querySelector(".control-label-text-gaia")?.textContent===o):t}function fd(o){const t=Array.from(document.querySelectorAll(".control-file-field-gaia"));return o?t.find(e=>e.querySelector(".control-label-text-gaia")?.textContent===o):t}function gd(o,t){const e=[];return Object.entries(o.record).forEach(([i,n])=>{if(n.type==="LINK"||n.type==="FILE"){const a=t[i]?.label,s=n.type==="LINK"?pd(a):fd(a);e.push({code:i,type:n.type,element:s,value:n.value})}else if(n.type==="SUBTABLE"){const a=t[i]?.label,r=Array.from(document.querySelectorAll(".subtable-row-gaia")).find(l=>l.querySelector(".subtable-row-label-text-gaia")?.textContent===a);if(r){const l=r.querySelector("table");n.value.forEach(c=>{Object.entries(c.value).forEach(([d,h])=>{if(h.type==="LINK"||h.type==="FILE"){const _=t[i]?.fields?.[d]?.label,g=Array.from(l.querySelectorAll(".subtable-label-inner-gaia")).findIndex(E=>E.textContent===_);if(g>=0){const T=l.querySelectorAll(`tbody tr td:nth-child(${g+1})`)[0]?.querySelector(".control-link-field-gaia, .control-file-field-gaia");e.push({code:d,type:h.type,element:T,value:h.value,inTable:i})}else e.push({code:d,type:h.type,value:h.value,inTable:i})}})})}}}),e}var bd=zo('<span class="badge svelte-1fmrh5r"> </span>');const md={hash:"svelte-1fmrh5r",code:".badge.svelte-1fmrh5r {position:absolute;bottom:2px;right:2px;background:#3498db;color:white;font-size:10px;border-radius:10px;min-width:16px;text-align:center;font-weight:500;}"};function vd(o,t){Pa(o,md);let e=Nt(t,"count",3,0);var i=bd(),n=fa(i);tl(()=>_l(n,e())),oo(o,i)}async function kd(o,t,e){try{const i=o.linkTable.value,n=i.findIndex(h=>h.value.linkField.value===t);if(n===-1)return console.error(`Field ${t} not found in subtable`),!1;const a=i[n],s=parseInt(a.value.clicks.value)||0,r=a.value.users.value||[];if(r.some(h=>h.code===e.code))return!1;a.value.clicks.value=String(s+1),a.value.users.value=[...r,{code:e.code,name:e.name}];const d=await kintone.api(kintone.api.url("/k/v1/record",!0),"PUT",{app:74,id:o.$id.value,record:{linkTable:{value:i}}});return!0}catch(i){return console.error("Error updating repository link:",i),!1}}function xd(o,t){o.forEach(e=>{if(!e.element)return;const i=e.element.querySelector(".control-value-gaia");if(!i)return;i.style.position="relative";const n=document.createElement("div");i.appendChild(n);let a=re(Ct(e.clicks));const l=t.linkTable.value.find(h=>h.value.linkField.value===e.code)?.value.users.value.some(h=>h.code===e.currentUser.code)||!1;let c=re(Ct(l));Na(vd,{target:n,props:{get count(){return z(a)}}});const d=e.type==="LINK"?i.querySelector("a"):i;d&&d.addEventListener("click",async()=>{z(c)||(Wr(a),le(c,!0),console.log("Clicked:",e.code,"Count:",z(a)),await kd(t,e.code,e.currentUser))})})}async function yd(o){try{const e=await kintone.api(kintone.api.url("/k/v1/records",!0),"GET",{app:74,query:`appID = "${o}"`});return e.records&&e.records.length>0?e.records[0]:null}catch(e){return console.error("Error fetching repository record:",e),null}}async function wd(o,t){if(!o)return!1;try{const e=o.appViewers.value||[];if(e.some(s=>s.code===t.code))return!1;const n=[...e,{code:t.code,name:t.name}];return await kintone.api(kintone.api.url("/k/v1/record",!0),"PUT",{app:74,id:o.$id.value,record:{appViewers:{value:n}}}),!0}catch(e){return console.error("Error updating app viewers:",e),!1}}function Cd(o){const t=new Map;if(!o?.linkTable?.value)return t;for(const e of o.linkTable.value){const i=e.value.linkField?.value,n=parseInt(e.value.clicks?.value)||0;i&&t.set(i,n)}return t}function Ed(o,t){mi(t,!0);let e=re(""),i=re(""),n=re(!1),a=re(null);jo(async()=>{const c=await Ul(),d=kintone.plugin.app.getConfig(t.pluginId),h=await kintone.app.getPermissions();le(n,h.editApp,!0),le(e,c.t("helloKintone"),!0),le(i,d.message,!0);const _=kintone.getLoginUser(),f=kintone.app.getId(),g=await yd(f);if(g){le(a,g.$id.value,!0),await wd(g,_);const E=Cd(g),T=kintone.app.record.get(),G=await kintone.app.getFormFields(),I=gd(T,G);I.forEach(te=>{te.clicks=E.get(te.code),te.currentUser=_}),xd(I,g)}});var s=hl(),r=ga(s);{var l=c=>{_d(c,{get heading(){return z(e)},get message(){return z(i)},get recordId(){return z(a)}})};bl(r,c=>{z(n)&&z(a)&&c(l)})}oo(o,s),vi()}const Sd=kintone.$PLUGIN_ID;kintone.events.on("app.record.detail.show",async()=>{const o=kintone.app.record.getHeaderMenuSpaceElement();if(!o)throw new Error("The header element is unavailable on this page");Na(Ed,{target:o,props:{pluginId:Sd}})})})();

(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1131:function(c,b,a){"use strict";a.d(b,{KO:function(){return r},cn:function(){return q}});var d=a(7294);let e=Symbol(),f=a=>!!a[e],g=a=>!a[e].c,h=c=>{var a,b;null==(b=(a=c[e]).c)||b.call(a)},i=(b,c)=>{let a=b[e].o,d=c[e].o;return a===d||b===d||f(a)&&i(a,c)},j=b=>{let c={o:b,c:null},a=new Promise(a=>{c.c=()=>{c.c=null,a()},b.then(c.c,c.c)});return a[e]=c,a},k=a=>"init"in a,l=b=>{let d=new WeakMap,o=new WeakMap,p=new Map,e,l;if(e=new Set,l=new Set,b)for(let[a,m]of b){let c={v:m,r:0,d:new Map};Object.freeze(c),k(a)||console.warn("Found initial value for derived atom which can cause unexpected behavior",a),d.set(a,c)}let q=new WeakMap,r=(d,b,c)=>{let a=q.get(b);a||(a=new Map,q.set(b,a)),c.then(()=>{a.get(d)!==c||(a.delete(d),a.size||q.delete(b))}),a.set(d,c)},s=a=>{let c=new Set,b=q.get(a);return b&&(q.delete(a),b.forEach((a,b)=>{h(a),c.add(b)})),c},t=new WeakMap,u=b=>{let a=t.get(b);return a||(a=new Map,t.set(b,a)),a},v=(c,a)=>{if(c){let e=u(c),b=e.get(a);return!b&&(b=v(c.p,a))&&e.set(a,b),b}return d.get(a)},w=(c,a,b)=>{if(Object.freeze(b),c){let e=u(c);e.set(a,b)}else{let f=d.get(a);d.set(a,b),p.has(a)||p.set(a,f)}},x=(e,a=new Map,b)=>{if(!b)return a;let c=new Map,d=!1;return(b.forEach(b=>{var f;let g=(null==(f=v(e,b))?void 0:f.r)||0;c.set(b,g),a.get(b)!==g&&(d=!0)}),a.size!==c.size||d)?c:a},y=(d,c,f,j,g)=>{let a=v(d,c);if(a){if(g&&(!("p"in a)||!i(a.p,g)))return a;"p"in a&&h(a.p)}let b={v:f,r:(null==a?void 0:a.r)||0,d:x(d,null==a?void 0:a.d,j)},e=!1;return(a&&"v"in a&&Object.is(a.v,f)?("i"in a||b.d!==a.d&&(b.d.size!==a.d.size||!Array.from(b.d.keys()).every(b=>a.d.has(b))))&&(e=!0,Promise.resolve().then(()=>{N(d)})):(e=!0,++b.r,b.d.has(c)&&(b.d=new Map(b.d).set(c,b.r))),a&&!e)?a:(w(d,c,b),b)},z=(b,c,f,g,d)=>{let a=v(b,c);if(a){if(d&&(!("p"in a)||!i(a.p,d)))return a;"p"in a&&h(a.p)}let e={e:f,r:(null==a?void 0:a.r)||0,d:x(b,null==a?void 0:a.d,g)};return w(b,c,e),e},A=(b,c,d,f)=>{let a=v(b,c);if(a&&"p"in a){if(i(a.p,d))return a;h(a.p)}r(b,c,d);let e={p:d,r:(null==a?void 0:a.r)||0,d:x(b,null==a?void 0:a.d,f)};return w(b,c,e),e},B=(b,c,a,d)=>{if(a instanceof Promise){let e=j(a.then(a=>{y(b,c,a,d,e)}).catch(a=>{if(a instanceof Promise)return f(a)?a.then(()=>{D(b,c,!0)}):a;z(b,c,a,d,e)}));return A(b,c,e,d)}return y(b,c,a,d)},C=(c,a)=>{let b=v(c,a);if(b){let d={...b,i:b.r};w(c,a,d)}else console.warn("[Bug] could not invalidate non existing atom",a)},D=(c,b,f)=>{if(!f){let a=v(c,b);if(a&&(a.r!==a.i&&"p"in a&&!g(a.p)||(a.d.forEach((e,a)=>{if(a!==b){if(o.has(a)){let d=v(c,a);d&&d.r===d.i&&D(c,a)}else D(c,a)}}),Array.from(a.d).every(([b,d])=>{let a=v(c,b);return a&&"v"in a&&a.r===d}))))return a}let d=new Set;try{let h=b.read(a=>{d.add(a);let e=a===b?v(c,a):D(c,a);if(e){if("e"in e)throw e.e;if("p"in e)throw e.p;return e.v}if(k(a))return a.init;throw Error("no atom init")});return B(c,b,h,d)}catch(e){if(e instanceof Promise){let i=j(e);return A(c,b,i,d)}return z(c,b,e,d)}},E=(c,b)=>{let a=o.get(b);return a||(a=K(c,b)),a},F=(b,a)=>!a.l.size&&(!a.t.size||1===a.t.size&&a.t.has(b)),G=(c,a)=>{let b=o.get(a);b&&F(a,b)&&L(c,a)},H=(c,b)=>{let a=o.get(b);null==a||a.t.forEach(a=>{a!==b&&(C(c,a),H(c,a))})},I=(g,a,b)=>{let c=!0,d=(b,c)=>{let a=D(g,b);if("e"in a)throw a.e;if("p"in a){if(null==c?void 0:c.unstable_promise)return a.p.then(()=>d(b,c));throw console.info("Reading pending atom state in write operation. We throw a promise for now.",b),a.p}if("v"in a)return a.v;throw console.warn("[Bug] no value found while reading atom in write operation. This is probably a bug.",b),Error("no value found")},e=(b,d)=>{let e;if(b===a){if(!k(b))throw Error("atom not writable");let f=s(b);f.forEach(a=>{a!==g&&B(a,b,d)});let h=v(g,b),i=B(g,b,d);h!==i&&H(g,b)}else e=I(g,b,d);return c||N(g),e},f=a.write(d,e,b);return c=!1,f},n=(b,c,a)=>{let d=I(a,b,c);return N(a),d},J=a=>!!a.write,K=(e,a,c)=>{let b={t:new Set(c&&[c]),l:new Set};o.set(a,b),l.add(a);let f=D(void 0,a);if(f.d.forEach((d,b)=>{let c=o.get(b);c?c.t.add(a):b!==a&&K(e,b,a)}),J(a)&&a.onMount){let g=b=>n(a,b,e),d=a.onMount(g);e=void 0,d&&(b.u=d)}return b},L=(e,a)=>{var b;let c=null==(b=o.get(a))?void 0:b.u;c&&c(),o.delete(a),l.delete(a);let d=v(e,a);d?d.d.forEach((d,b)=>{if(b!==a){let c=o.get(b);c&&(c.t.delete(a),F(b,c)&&L(e,b))}}):console.warn("[Bug] could not find atom state to unmount",a)},M=(d,e,b,a)=>{let c=new Set(b.d.keys());null==a||a.forEach((f,a)=>{if(c.has(a)){c.delete(a);return}let b=o.get(a);b&&(b.t.delete(e),F(a,b)&&L(d,a))}),c.forEach(a=>{let b=o.get(a);b?b.t.add(e):o.has(e)&&K(d,a,e)})},N=a=>{if(a){let b=u(a);b.forEach((e,b)=>{let f=d.get(b);if(e!==f){let c=o.get(b);null==c||c.l.forEach(b=>b(a))}});return}for(;p.size;){let c=Array.from(p);p.clear(),c.forEach(([c,a])=>{let b=v(void 0,c);if(b&&b.d!==(null==a?void 0:a.d)&&M(void 0,c,b,null==a?void 0:a.d),a&&"i"in a&&b&&!("i"in b))return;let d=o.get(c);null==d||d.l.forEach(a=>a())})}e.forEach(a=>a())},O=a=>{let b=u(a);b.forEach((c,e)=>{let b=d.get(e);(!b||c.r>b.r||"v"in c&&c.r===b.r&&c.d!==b.d)&&(d.set(e,c),c.d!==(null==b?void 0:b.d)&&M(a,e,c,null==b?void 0:b.d))})};return{r(a,b){let c=D(b,a);return c},w:n,c(b,a){a&&O(a),N(void 0)},s(a,b,c){let d=E(c,a),e=d.l;return e.add(b),()=>{e.delete(b),G(c,a)}},h(c,a){for(let[b,d]of c)k(b)&&(B(a,b,d),H(a,b));N(a)},n:a=>(e.add(a),()=>{e.delete(a)}),l:()=>l.values(),a:a=>d.get(a),m:a=>o.get(a)}},m=(a,b)=>{let c=b?b(a).SECRET_INTERNAL_store:l(a);return{s:c}},n=new Map,o=a=>(n.has(a)||n.set(a,(0,d.createContext)(m())),n.get(a)),p=0;function q(b,c){let d=`atom${++p}`,a={toString:()=>d};return"function"==typeof b?a.read=b:(a.init=b,a.read=b=>b(a),a.write=(c,d,b)=>d(a,"function"==typeof b?b(c(a)):b)),c&&(a.write=c),a}function r(a,b){return"scope"in a&&(console.warn("atom.scope is deprecated. Please do useAtom(atom, scope) instead."),b=a.scope),[function(b,f){let g=o(f),c=(0,d.useContext)(g),{s:h,v:i}=c,j=c=>{let a=h.r(b,c);if("e"in a)throw a.e;if("p"in a)throw a.p;if("v"in a)return a.v;throw Error("no atom value")},[[e,k,l],m]=(0,d.useReducer)((a,c)=>{let d=j(c);return Object.is(a[1],d)&&a[2]===b?a:[c,d,b]},i,a=>{let c=j(a);return[a,c,b]}),a=k;return l!==b&&(m(e),a=j(e)),(0,d.useEffect)(()=>{let{v:a}=c;a&&h.c(b,a);let d=h.s(b,m,a);return m(a),d},[h,b,c]),(0,d.useEffect)(()=>{h.c(b,e)}),(0,d.useDebugValue)(a),a}(a,b),function(a,b){let c=o(b),{s:e,w:f}=(0,d.useContext)(c),g=(0,d.useCallback)(c=>{if(!("write"in a))throw Error("not writable atom");let b=b=>e.w(a,c,b);return f?f(b):b()},[e,f,a]);return g}(a,b)]}},6840:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return c(8651)}])},8651:function(c,b,a){"use strict";function d(c,a){(null==a||a>c.length)&&(a=c.length);for(var b=0,d=Array(a);b<a;b++)d[b]=c[b];return d}function e(a,b){return function(a){if(Array.isArray(a))return a}(a)||function(a){if("undefined"!=typeof Symbol&&null!=a[Symbol.iterator]||null!=a["@@iterator"])return Array.from(a)}(a,b)||function(a,c){if(a){if("string"==typeof a)return d(a,c);var b=Object.prototype.toString.call(a).slice(8,-1);if("Object"===b&&a.constructor&&(b=a.constructor.name),"Map"===b||"Set"===b)return Array.from(b);if("Arguments"===b||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b))return d(a,c)}}(a,b)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}a.r(b),a.d(b,{default:function(){return i}});var f=a(5893);a(7294);var g=a(1131),h=a(8421);a(7542);var i=function(){var o=function(){r(function(a){return a+1});var a=Math.random();a<.01?s(function(a){return a+1}):.01<=a&&a<.06?t(function(a){return a+1}):.06<=a&&a<.36?u(function(a){return a+1}):v(function(a){return a+1})},p=function(){t(function(a){return a+1}),r(function(a){return a+1});for(var a=0;a<9;a++)o()},q=function(){s(function(a){return 0}),t(function(a){return 0}),u(function(a){return 0}),v(function(a){return 0}),r(function(a){return 0})},a=e((0,g.KO)(h.Pr),2),j=a[0],r=a[1],b=e((0,g.KO)(h.LP),2),k=b[0],s=b[1],c=e((0,g.KO)(h.dK),2),l=c[0],t=c[1],d=e((0,g.KO)(h.a9),2),m=d[0],u=d[1],i=e((0,g.KO)(h.t1),2),n=i[0],v=i[1];return(0,f.jsxs)("div",{className:"centered",children:[(0,f.jsx)("h1",{className:"hStyle",children:"RPG Kit Gacha"}),(0,f.jsx)("p",{className:"pStyle",children:"Your adventurer awaits but it seems are you are ill-equipped. Brave it without help if you wish or accept these gifts, however utilizing these gifts will take finesse. Roll the gacha for your skills and gear. 10 rolls will guarentee a super rare drop."}),(0,f.jsx)("table",{className:"tableRate",children:(0,f.jsxs)("tbody",{children:[(0,f.jsxs)("tr",{children:[(0,f.jsx)("th",{children:"Rarity"}),(0,f.jsx)("th",{children:"Rates"})]}),(0,f.jsxs)("tr",{children:[(0,f.jsx)("td",{children:"Ultra rare"}),(0,f.jsx)("td",{children:"1%"})]}),(0,f.jsxs)("tr",{children:[(0,f.jsx)("td",{children:"Super rare"}),(0,f.jsx)("td",{children:"5%"})]}),(0,f.jsxs)("tr",{children:[(0,f.jsx)("td",{children:"Rare"}),(0,f.jsx)("td",{children:"30%"})]}),(0,f.jsxs)("tr",{children:[(0,f.jsx)("td",{children:"Normal"}),(0,f.jsx)("td",{children:"64%"})]})]})}),(0,f.jsx)("button",{className:"buttonA",type:"submit",onClick:function(){return o()},children:"Roll 1"}),(0,f.jsx)("button",{className:"buttonB",type:"submit",onClick:function(){return p()},children:"Roll 10"}),(0,f.jsx)("button",{className:"buttonC",type:"submit",onClick:function(){return q()},children:"Reset"}),(0,f.jsx)("table",{className:"tableRolls",children:(0,f.jsxs)("tbody",{children:[(0,f.jsx)("tr",{children:(0,f.jsx)("th",{children:"Results"})}),(0,f.jsxs)("tr",{children:[(0,f.jsx)("td",{children:"Ultra rare"}),(0,f.jsx)("td",{children:k})]}),(0,f.jsxs)("tr",{children:[(0,f.jsx)("td",{children:"Super rare"}),(0,f.jsx)("td",{children:l})]}),(0,f.jsxs)("tr",{children:[(0,f.jsx)("td",{children:"Rare"}),(0,f.jsx)("td",{children:m})]}),(0,f.jsxs)("tr",{children:[(0,f.jsx)("td",{children:"Normal"}),(0,f.jsx)("td",{children:n})]}),(0,f.jsxs)("tr",{children:[(0,f.jsx)("td",{children:"Rolls"}),(0,f.jsx)("td",{children:j})]})]})}),(0,f.jsx)("table",{className:"tableInventory",children:(0,f.jsxs)("tbody",{children:[(0,f.jsxs)("tr",{children:[(0,f.jsx)("th",{children:"Inventory"}),(0,f.jsx)("th",{children:"Item count"}),(0,f.jsx)("th",{children:"Item type"})]}),(0,f.jsx)("tr",{children:(0,f.jsx)("td",{children:"Feature coming soon"})})]})}),(0,f.jsx)("table",{className:"tableSkills",children:(0,f.jsxs)("tbody",{children:[(0,f.jsxs)("tr",{children:[(0,f.jsx)("th",{children:"Skill"}),(0,f.jsx)("th",{children:"Rank"}),(0,f.jsx)("th",{children:"Skill type"})]}),(0,f.jsx)("tr",{children:(0,f.jsx)("td",{children:"Feature coming soon"})})]})}),(0,f.jsx)("table",{className:"tableLoot",children:(0,f.jsxs)("tbody",{children:[(0,f.jsxs)("tr",{children:[(0,f.jsx)("th",{children:"Rarity"}),(0,f.jsx)("th",{children:"Roll"}),(0,f.jsx)("th",{children:"Type"})]}),(0,f.jsx)("tr",{children:(0,f.jsx)("td",{children:"Feature coming soon"})})]})})]})}},8421:function(d,c,b){"use strict";b.d(c,{LP:function(){return e},Pr:function(){return i},a9:function(){return g},dK:function(){return f},t1:function(){return h}});var a=b(1131);(0,a.cn)(0),(0,a.cn)(0),(0,a.cn)(0),(0,a.cn)(0),(0,a.cn)(0);var e=(0,a.cn)(0),f=(0,a.cn)(0),g=(0,a.cn)(0),h=(0,a.cn)(0),i=(0,a.cn)(0)},7542:function(){}},function(a){var b=function(b){return a(a.s=b)};a.O(0,[774,179],function(){return b(6840),b(387)}),_N_E=a.O()}])
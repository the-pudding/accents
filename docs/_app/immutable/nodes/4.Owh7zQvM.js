import{C as e,D as t,E as n,I as r,J as i,M as a,N as o,O as s,Q as c,S as l,T as u,U as d,W as f,X as p,Y as m,a as h,b as g,c as _,et as v,f as y,gt as b,h as x,ht as S,j as C,lt as w,mt as T,nt as E,o as ee,p as D,q as O,s as k,tt as te,u as A,ut as j,v as M,w as N,x as P,y as F}from"../chunks/Cimgqpqq.js";import{i as I}from"../chunks/Do_Fl4gw.js";import"../chunks/CT0T0Gak.js";import"../chunks/DnsWOCDb.js";import{t as L}from"../chunks/DbxqsBPC.js";var R={},z={},B=34,V=10,H=13;function U(e){return Function(`d`,`return {`+e.map(function(e,t){return JSON.stringify(e)+`: d[`+t+`] || ""`}).join(`,`)+`}`)}function W(e,t){var n=U(e);return function(r,i){return t(n(r),i,e)}}function G(e){var t=Object.create(null),n=[];return e.forEach(function(e){for(var r in e)r in t||n.push(t[r]=r)}),n}function K(e,t){var n=e+``,r=n.length;return r<t?Array(t-r+1).join(0)+n:n}function q(e){return e<0?`-`+K(-e,6):e>9999?`+`+K(e,6):K(e,4)}function J(e){var t=e.getUTCHours(),n=e.getUTCMinutes(),r=e.getUTCSeconds(),i=e.getUTCMilliseconds();return isNaN(e)?`Invalid Date`:q(e.getUTCFullYear(),4)+`-`+K(e.getUTCMonth()+1,2)+`-`+K(e.getUTCDate(),2)+(i?`T`+K(t,2)+`:`+K(n,2)+`:`+K(r,2)+`.`+K(i,3)+`Z`:r?`T`+K(t,2)+`:`+K(n,2)+`:`+K(r,2)+`Z`:n||t?`T`+K(t,2)+`:`+K(n,2)+`Z`:``)}function Y(e){var t=RegExp(`["`+e+`
\r]`),n=e.charCodeAt(0);function r(e,t){var n,r,a=i(e,function(e,i){if(n)return n(e,i-1);r=e,n=t?W(e,t):U(e)});return a.columns=r||[],a}function i(e,t){var r=[],i=e.length,a=0,o=0,s,c=i<=0,l=!1;e.charCodeAt(i-1)===V&&--i,e.charCodeAt(i-1)===H&&--i;function u(){if(c)return z;if(l)return l=!1,R;var t,r=a,o;if(e.charCodeAt(r)===B){for(;a++<i&&e.charCodeAt(a)!==B||e.charCodeAt(++a)===B;);return(t=a)>=i?c=!0:(o=e.charCodeAt(a++))===V?l=!0:o===H&&(l=!0,e.charCodeAt(a)===V&&++a),e.slice(r+1,t-1).replace(/""/g,`"`)}for(;a<i;){if((o=e.charCodeAt(t=a++))===V)l=!0;else if(o===H)l=!0,e.charCodeAt(a)===V&&++a;else if(o!==n)continue;return e.slice(r,t)}return c=!0,e.slice(r,i)}for(;(s=u())!==z;){for(var d=[];s!==R&&s!==z;)d.push(s),s=u();t&&(d=t(d,o++))==null||r.push(d)}return r}function a(t,n){return t.map(function(t){return n.map(function(e){return u(t[e])}).join(e)})}function o(t,n){return n??=G(t),[n.map(u).join(e)].concat(a(t,n)).join(`
`)}function s(e,t){return t??=G(e),a(e,t).join(`
`)}function c(e){return e.map(l).join(`
`)}function l(t){return t.map(u).join(e)}function u(e){return e==null?``:e instanceof Date?J(e):t.test(e+=``)?`"`+e.replace(/"/g,`""`)+`"`:e}return{parse:r,parseRows:i,format:o,formatBody:s,formatRows:c,formatRow:l,formatValue:u}}var X=Y(`,`),Z=X.parse;X.parseRows,X.format,X.formatBody,X.formatRows,X.formatRow,X.formatValue;var Q=s(`<section id="demo-link"><h2>Link</h2> <p><a href="elements">Default element styles demo</a></p> <p><a href="fonts">Pudding-hosted font previews</a></p> <p><a href="ui">BitsUI styled components</a></p></section>`);function ne(e){n(e,Q())}var re=s(`<section id="demo-image"><h2>Image</h2> <p>img tag</p> <img src="../assets/demo/test.jpg" alt="cat" class="svelte-b56t42"/> <p>background image</p> <div class="svelte-b56t42"></div></section>`);function ie(e){n(e,re())}var ae=s(`<section id="demo-element"><h2>Dynamic Svelte Element</h2> <!></section>`);function oe(a){let o=[{tag:`h3`,text:`I am a h3 tag.`},{tag:`p`,text:`I am p tag.`}];var s=ae();l(m(O(s),2),17,()=>o,e,(e,a)=>{let o=()=>r(a).tag,s=()=>r(a).text;var c=t();M(i(c),o,!1,(e,t)=>{var r=C();d(()=>u(r,s())),n(t,r)}),n(e,c)}),S(s),n(a,s)}var se=s(`<p> </p>`);function ce(e,t){var r=se(),i=O(r);S(r),d(()=>u(i,`I am component A and my favorite number is ${t.number??``}.`)),n(e,r)}var le=s(`<p> </p>`);function ue(e,t){var r=le(),i=O(r);S(r),d(()=>u(i,`I am component B and my name is ${t.name??``}.`)),n(e,r)}var de=s(`<section id="demo-component"><h2>Dynamic Svelte Component</h2> <!></section>`);function fe(a){let o={A:ce,B:ue},s=[{component:`A`,number:42},{component:`B`,name:`Russell`}];var c=de();l(m(O(c),2),17,()=>s,e,(e,a)=>{let s=E(()=>o[r(a).component]);var c=t();F(i(c),()=>r(s),(e,t)=>{t(e,k(()=>r(a)))}),n(e,c)}),S(c),n(a,c)}var pe=s(`<div><!></div>`);function me(e,t){j(t,!0);let r=h(t,`root`,3,null),i=h(t,`top`,3,0),a=h(t,`bottom`,3,0),o=h(t,`increments`,3,100),s=h(t,`value`,15,void 0),c=[],l=[],u=[],d=[],p;function m(){let e=0,t=0;for(let n=0;n<c.length;n++)c[n]>e&&(e=c[n],t=n);s(e>0?t:void 0)}function v(e,t){let n=e=>{e[0].isIntersecting,c[t]=e[0].intersectionRatio,m()},o=`${i()?i()*-1:0}px 0px ${a()?a()*-1:0}px 0px`,s={root:r(),rootMargin:o,threshold:l};d[t]&&d[t].disconnect();let u=new IntersectionObserver(n,s);u.observe(e),d[t]=u}function y(){u.length&&u.forEach(v)}f(()=>{for(let e=0;e<o()+1;e++)l.push(e/o());u=p.querySelectorAll(`:scope > *:not(iframe)`),y()}),f(()=>{i(),a(),y()});var x=pe();g(O(x),()=>t.children??b),S(x),_(x,e=>p=e,()=>p),n(e,x),w()}var he=s(`<div><p class="svelte-1sxgmm9"> </p></div>`),ge=s(`<section id="scrolly"><h2 class="svelte-1sxgmm9">Scrolly <span> </span></h2> <div class="spacer svelte-1sxgmm9"></div> <!> <div class="spacer svelte-1sxgmm9"></div></section>`);function _e(a){let o=v(void 0);var s=ge(),f=O(s),p=m(O(f)),h=O(p,!0);S(p),S(f),me(m(f,4),{get value(){return r(o)},set value(e){c(o,e,!0)},children:(a,s)=>{var c=t();l(i(c),16,()=>[0,1,2,3,4],e,(e,t,i)=>{let a=E(()=>r(o)===i);var s=he();let c;var l=O(s),f=O(l,!0);S(l),S(s),d(()=>{c=x(s,1,`step svelte-1sxgmm9`,null,c,{active:r(a)}),u(f,t)}),n(e,s)}),n(a,c)},$$slots:{default:!0}}),T(2),S(s),d(()=>u(h,r(o)||`-`)),n(a,s)}var ve=`{
  "levels": [
    {
      "pre": [
        {
          "type": "text",
          "value": "Let’s start with an easy one."
        },
        {
          "type": "text",
          "value": "Where do you think this speaker is from?"
        }
      ],
      "speaker": "Oh, I’m going up to the lake for the long weekend, don’t ya know.",
      "answer": {
        "type": "state",
        "value": "Minnesota"
      },
      "post": [
        {
          "type": "text",
          "value": "The biggest tell is the way they say the vowel in “boat.”"
        }
      ],
      "deepDive": [
        {
          "type": "text",
          "value": "Tk deep dive"
        }
      ]
    },
    {
      "pre": [
        {
          "type": "text",
          "value": "Next one."
        },
        {
          "type": "text",
          "value": "Where do you think this speaker is from?"
        }
      ],
      "speaker": "I don’t have the cot-caught merger!",
      "answer": {
        "type": "region",
        "value": "Eastern US"
      },
      "post": [
        {
          "type": "text",
          "value": "The biggest tell is the way they say cot and caught."
        }
      ],
      "deepDive": [
        {
          "type": "text",
          "value": "Tk deep dive"
        }
      ]
    },
    {
      "pre": [
        {
          "type": "text",
          "value": "Next one."
        },
        {
          "type": "text",
          "value": "Where do you think this speaker is from?"
        }
      ],
      "speaker": "SoCal is the best, bruh.",
      "answer": {
        "type": "city",
        "value": "Los Angeles",
        "lat": "34.0522",
        "lng": "-118.2437"
      },
      "post": [
        {
          "type": "text",
          "value": "The biggest tell is the way they say _."
        }
      ],
      "deepDive": [
        {
          "type": "text",
          "value": "Tk deep dive"
        }
      ]
    }
  ]
}`,ye=s(`<p></p>`),be=s(`<details><summary></summary> <div class="content"><!></div></details>`);function xe(a,o){let s=E(()=>typeof o.content==`string`),c=E(()=>o.open===`true`);var u=be(),f=O(u);P(f,()=>o.summary,!0),S(f);var p=m(f,2),h=O(p),g=e=>{var r=t();P(i(r),()=>o.content),n(e,r)},_=a=>{var s=t();l(i(s),17,()=>o.content,e,(e,t)=>{let i=()=>r(t).value;var a=ye();P(a,i,!0),S(a),n(e,a)}),n(a,s)};N(h,e=>{r(s)?e(g):e(_,-1)}),S(p),S(u),d(()=>{u.open=r(c),y(u,`name`,o.name)}),n(a,u)}var Se=s(`<li></li>`),Ce=s(`<ul></ul>`);function we(t,i){var a=Ce();l(a,21,()=>i.li,e,(e,t)=>{var i=Se();P(i,()=>r(t),!0),S(i),n(e,i)}),S(a),n(t,a)}var Te=s(`<li></li>`),Ee=s(`<ol></ol>`);function De(t,i){var a=Ee();l(a,21,()=>i.li,e,(e,t)=>{var i=Te();P(i,()=>r(t),!0),S(i),n(e,i)}),S(a),n(t,a)}var Oe=s(`<p></p>`),ke=s(`<section><!></section>`);function Ae(a,o){j(o,!0);let s={details:xe,ul:we,ol:De},c=h(o,`components`,19,()=>({})),u=h(o,`body`,19,()=>[]);var f=t();l(i(f),17,u,e,(a,o)=>{let u=()=>r(o).section,f=()=>r(o).content,p=E(()=>u().toLowerCase().replace(/[^a-z0-9]/g,``)),m=E(()=>c()[u()]);var h=ke(),g=O(h),_=e=>{var a=t();F(i(a),()=>r(m),(e,t)=>{t(e,k(f))}),n(e,a)},v=a=>{var o=t();l(i(o),17,f,e,(e,a,o,l)=>{let u=()=>r(a).type,d=()=>r(a).value,f=E(()=>c()[u()]||s[u()]),p=E(()=>typeof d()==`string`);var m=t(),h=i(m),g=e=>{var a=t();F(i(a),()=>r(f),(e,t)=>{t(e,k(d))}),n(e,a)},_=e=>{var t=Oe();P(t,d,!0),S(t),n(e,t)},v=e=>{var r=t();M(i(r),u,!1,(e,r)=>{var a=t();P(i(a),d),n(r,a)}),n(e,r)},y=e=>{var r=t();M(i(r),u,!1,(e,t)=>{A(e,()=>({...d()}))}),n(e,r)};N(h,e=>{r(f)?e(g):u()===`text`?e(_,1):r(p)?e(v,2):e(y,-1)}),n(e,m)}),n(a,o)};N(g,e=>{r(m)?e(_):e(v,-1)}),S(h),d(()=>y(h,`id`,r(p))),n(a,h)}),n(a,f),w()}var je=s(`<p> </p> <progress max="100"></progress>`,1);function Me(e,t){let r=h(t,`label`,3,`A`),a=h(t,`value`,3,0);var o=je(),s=i(o),c=O(s,!0);S(s);var l=m(s,2);d(()=>{u(c,r()),D(l,a())}),n(e,o)}var Ne=s(`<section id="cms"><h2>MicroCMS</h2> <code><pre> </pre></code> <!></section>`);function Pe(e,t){j(t,!0);let{body:r}=L,i={Test:Me};var a=Ne(),o=m(O(a),2),s=O(o),c=O(s,!0);S(s),S(o),Ae(m(o,2),{get components(){return i},get body(){return r}}),S(a),d(e=>u(c,e),[()=>ve.replace(/\t/g,` `)]),n(e,a),w()}var Fe=(e,t=b)=>{var r=Ie(),i=O(r),a=O(i,!0);S(i);var o=m(i,2),s=O(o,!0);S(o),S(r),d(()=>{u(a,t().name),u(s,t().age)}),n(e,r)},Ie=s(`<div class="person svelte-q3gttf"><p class="svelte-q3gttf"> </p> <p class="svelte-q3gttf"> </p></div>`),$=s(`<h2>Svelte5</h2> <h3>Reactive variables 3 ways:</h3> <button class="svelte-q3gttf">count++</button> <p class="svelte-q3gttf"> </p> <p class="svelte-q3gttf"> </p> <p class="svelte-q3gttf"> </p> <h3>Children (previously slots):</h3> <div class="children"><!></div> <h3>Dispatch Event</h3> <button class="svelte-q3gttf">Random</button>  <h3>Snippets</h3> <div class="people svelte-q3gttf"></div>`,1);function Le(t,a){j(a,!0),h(a,`age`,3,30),ee(a,[`$$slots`,`$$events`,`$$legacy`,`name`,`age`,`renamed`,`value`,`children`,`random`]);let s=[{name:`John`,age:30},{name:`Jill`,age:45}],p=v(0),_=E(()=>r(p)*2),y=E(()=>r(p)*2),x=v(0);f(()=>{c(x,r(p)*2)});var C=$(),T=m(i(C),4),D=m(T,2),k=O(D);S(D);var A=m(D,2),M=O(A);S(A);var N=m(A,2),P=O(N);S(N);var F=m(N,4);g(O(F),()=>a.children??b),S(F);var I=m(F,4),L=m(I,4);l(L,21,()=>s,e,(e,t)=>{Fe(e,()=>r(t))}),S(L),d(()=>{u(k,`${r(p)??``} doubled is ${r(_)??``} (derived)`),u(M,`${r(p)??``} doubled is ${r(y)??``} (derived by)`),u(P,`${r(p)??``} doubled is ${r(x)??``} ($effect)`)}),o(`click`,T,()=>te(p)),o(`click`,I,()=>a.random(Math.floor(Math.random()*10))),n(t,C),w()}a([`click`]);var Re=(e,t)=>{let n=v(p(e)),i=v(null),a=v(!0),o=v(void 0),s=(e=!0)=>{c(a,e,!0),e===!0&&(c(o,null),c(i,null))},l=async()=>{try{let e=await fetch(r(n),t);if(!e.ok)throw Error(`Unexpected error occurred (status ${e.status})`);let i;return i=r(n).includes(`.csv`)?Z(await e.text()):await e.json(),[null,i]}catch(e){let{errorMessage:t=`Unexpected error eccurred`}=e;return[t,null]}},u=async e=>{s(!0);let[t,a]=await l();if(e===r(n)){if(t){s(!1),c(o,t,!0);return}s(!1),c(i,a,!0)}};return f(()=>{u(r(n))}),{get data(){return r(i)},get loading(){return r(a)},get error(){return r(o)},get url(){return r(n)},set url(e){r(n)!==e&&c(n,e,!0)}}},ze=s(`<p>loading data...</p>`),Be=s(`<p> </p>`),Ve=s(`<p>data loaded</p> <pre> </pre>`,1),He=s(`<div class="c"><h2>Load Data</h2> <div class="response"><!></div></div>`);function Ue(e,t){j(t,!0);let r=Re(`${I}/assets/demo/test.csv`);f(()=>{});var a=He(),o=m(O(a),2),s=O(o),c=e=>{n(e,ze())},l=e=>{var t=Be(),i=O(t);S(t),d(()=>u(i,`error: ${r.error??``}`)),n(e,t)},p=e=>{var t=Ve(),a=m(i(t),2),o=O(a,!0);S(a),d(e=>u(o,e),[()=>JSON.stringify(r.data,null,2)]),n(e,t)};N(s,e=>{r.loading?e(c):r.error?e(l,1):e(p,-1)}),S(o),S(a),n(e,a),w()}var We=s(`<div id="demo" class="svelte-15aotx7"><h1>Demo</h1> <!> <!> <!> <!> <!> <!> <!> <!></div>`);function Ge(e){let t=v(0);function i(e){console.log(e)}var a=We(),o=m(O(a),2);ne(o,{});var s=m(o,2);ie(s,{});var l=m(s,2);oe(l,{});var u=m(l,2);fe(u,{});var d=m(u,2);Pe(d,{});var f=m(d,2);Ue(f,{});var p=m(f,2);_e(p,{}),Le(m(p,2),{random:i,get value(){return r(t)},set value(e){c(t,e,!0)}}),S(a),n(e,a)}function Ke(e){Ge(e,{})}export{Ke as component};
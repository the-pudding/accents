import{$ as e,C as t,D as n,E as r,G as i,J as a,L as o,M as s,N as c,O as l,P as u,S as d,T as f,W as p,X as m,Y as h,Z as g,_t as _,a as v,b as y,c as b,d as x,dt as S,g as C,gt as w,ht as T,k as E,m as D,nt as ee,o as O,p as k,rt as A,s as j,tt as M,ut as N,w as P,x as F,y as I}from"../chunks/Ch76CtI5.js";import{i as L}from"../chunks/GenMKTzr.js";import"../chunks/CT0T0Gak.js";import"../chunks/DnsWOCDb.js";import{t as R}from"../chunks/DJhqYVm-.js";var z={},B={},V=34,H=10,U=13;function W(e){return Function(`d`,`return {`+e.map(function(e,t){return JSON.stringify(e)+`: d[`+t+`] || ""`}).join(`,`)+`}`)}function te(e,t){var n=W(e);return function(r,i){return t(n(r),i,e)}}function G(e){var t=Object.create(null),n=[];return e.forEach(function(e){for(var r in e)r in t||n.push(t[r]=r)}),n}function K(e,t){var n=e+``,r=n.length;return r<t?Array(t-r+1).join(0)+n:n}function q(e){return e<0?`-`+K(-e,6):e>9999?`+`+K(e,6):K(e,4)}function J(e){var t=e.getUTCHours(),n=e.getUTCMinutes(),r=e.getUTCSeconds(),i=e.getUTCMilliseconds();return isNaN(e)?`Invalid Date`:q(e.getUTCFullYear(),4)+`-`+K(e.getUTCMonth()+1,2)+`-`+K(e.getUTCDate(),2)+(i?`T`+K(t,2)+`:`+K(n,2)+`:`+K(r,2)+`.`+K(i,3)+`Z`:r?`T`+K(t,2)+`:`+K(n,2)+`:`+K(r,2)+`Z`:n||t?`T`+K(t,2)+`:`+K(n,2)+`Z`:``)}function Y(e){var t=RegExp(`["`+e+`
\r]`),n=e.charCodeAt(0);function r(e,t){var n,r,a=i(e,function(e,i){if(n)return n(e,i-1);r=e,n=t?te(e,t):W(e)});return a.columns=r||[],a}function i(e,t){var r=[],i=e.length,a=0,o=0,s,c=i<=0,l=!1;e.charCodeAt(i-1)===H&&--i,e.charCodeAt(i-1)===U&&--i;function u(){if(c)return B;if(l)return l=!1,z;var t,r=a,o;if(e.charCodeAt(r)===V){for(;a++<i&&e.charCodeAt(a)!==V||e.charCodeAt(++a)===V;);return(t=a)>=i?c=!0:(o=e.charCodeAt(a++))===H?l=!0:o===U&&(l=!0,e.charCodeAt(a)===H&&++a),e.slice(r+1,t-1).replace(/""/g,`"`)}for(;a<i;){if((o=e.charCodeAt(t=a++))===H)l=!0;else if(o===U)l=!0,e.charCodeAt(a)===H&&++a;else if(o!==n)continue;return e.slice(r,t)}return c=!0,e.slice(r,i)}for(;(s=u())!==B;){for(var d=[];s!==z&&s!==B;)d.push(s),s=u();t&&(d=t(d,o++))==null||r.push(d)}return r}function a(t,n){return t.map(function(t){return n.map(function(e){return u(t[e])}).join(e)})}function o(t,n){return n??=G(t),[n.map(u).join(e)].concat(a(t,n)).join(`
`)}function s(e,t){return t??=G(e),a(e,t).join(`
`)}function c(e){return e.map(l).join(`
`)}function l(t){return t.map(u).join(e)}function u(e){return e==null?``:e instanceof Date?J(e):t.test(e+=``)?`"`+e.replace(/"/g,`""`)+`"`:e}return{parse:r,parseRows:i,format:o,formatBody:s,formatRows:c,formatRow:l,formatValue:u}}var X=Y(`,`),Z=X.parse;X.parseRows,X.format,X.formatBody,X.formatRows,X.formatRow,X.formatValue;var Q=E(`<section id="demo-link"><h2>Link</h2> <p><a href="elements">Default element styles demo</a></p> <p><a href="fonts">Pudding-hosted font previews</a></p> <p><a href="ui">BitsUI styled components</a></p></section>`);function ne(e){n(e,Q())}var re=E(`<section id="demo-image"><h2>Image</h2> <p>img tag</p> <img src="../assets/demo/test.jpg" alt="cat" class="svelte-b56t42"/> <p>background image</p> <div class="svelte-b56t42"></div></section>`);function ie(e){n(e,re())}var ae=E(`<section id="demo-element"><h2>Dynamic Svelte Element</h2> <!></section>`);function oe(e){let i=[{tag:`h3`,text:`I am a h3 tag.`},{tag:`p`,text:`I am p tag.`}];var c=ae();t(m(a(c),2),17,()=>i,P,(e,t)=>{let i=()=>o(t).tag,a=()=>o(t).text;var c=l();I(h(c),i,!1,(e,t)=>{var i=s();p(()=>r(i,a())),n(t,i)}),n(e,c)}),w(c),n(e,c)}var se=E(`<p> </p>`);function ce(e,t){var i=se(),o=a(i);w(i),p(()=>r(o,`I am component A and my favorite number is ${t.number??``}.`)),n(e,i)}var le=E(`<p> </p>`);function ue(e,t){var i=le(),o=a(i);w(i),p(()=>r(o,`I am component B and my name is ${t.name??``}.`)),n(e,i)}var de=E(`<section id="demo-component"><h2>Dynamic Svelte Component</h2> <!></section>`);function fe(e){let r={A:ce,B:ue},i=[{component:`A`,number:42},{component:`B`,name:`Russell`}];var s=de();t(m(a(s),2),17,()=>i,P,(e,t)=>{let i=A(()=>r[o(t).component]);var a=l();y(h(a),()=>o(i),(e,n)=>{n(e,j(()=>o(t)))}),n(e,a)}),w(s),n(e,s)}var pe=E(`<div><!></div>`);function me(e,t){S(t,!0);let r=v(t,`root`,3,null),o=v(t,`top`,3,0),s=v(t,`bottom`,3,0),c=v(t,`increments`,3,100),l=v(t,`value`,15,void 0),u=[],d=[],f=[],p=[],m;function h(){let e=0,t=0;for(let n=0;n<u.length;n++)u[n]>e&&(e=u[n],t=n);l(e>0?t:void 0)}function g(e,t){let n=e=>{e[0].isIntersecting,u[t]=e[0].intersectionRatio,h()},i=`${o()?o()*-1:0}px 0px ${s()?s()*-1:0}px 0px`,a={root:r(),rootMargin:i,threshold:d};p[t]&&p[t].disconnect();let c=new IntersectionObserver(n,a);c.observe(e),p[t]=c}function y(){f.length&&f.forEach(g)}i(()=>{for(let e=0;e<c()+1;e++)d.push(e/c());f=m.querySelectorAll(`:scope > *:not(iframe)`),y()}),i(()=>{o(),s(),y()});var x=pe();F(a(x),()=>t.children??_),w(x),b(x,e=>m=e,()=>m),n(e,x),N()}var he=E(`<div><p class="svelte-1sxgmm9"> </p></div>`),ge=E(`<section id="scrolly"><h2 class="svelte-1sxgmm9">Scrolly <span> </span></h2> <div class="spacer svelte-1sxgmm9"></div> <!> <div class="spacer svelte-1sxgmm9"></div></section>`);function _e(i){let s=M(void 0);var c=ge(),u=a(c),d=m(a(u)),f=a(d,!0);w(d),w(u),me(m(u,4),{get value(){return o(s)},set value(t){e(s,t,!0)},children:(e,i)=>{var c=l();t(h(c),16,()=>[0,1,2,3,4],P,(e,t,i)=>{let c=A(()=>o(s)===i);var l=he();let u;var d=a(l),f=a(d,!0);w(d),w(l),p(()=>{u=C(l,1,`step svelte-1sxgmm9`,null,u,{active:o(c)}),r(f,t)}),n(e,l)}),n(e,c)},$$slots:{default:!0}}),T(2),w(c),p(()=>r(f,o(s)||`-`)),n(i,c)}var ve=`{
  "intro": [
    {
      "type": "text",
      "value": "Everyone has an accent, even you!"
    },
    {
      "type": "text",
      "value": "Your speech is riddled with variations. For folks with a trained ear, it’s a clue into the community in which you grew up."
    },
    {
      "type": "text",
      "value": "Here are speakers who have variations associated with particular regions.  Can you guess where everyone is from?"
    }
  ],
  "levels": [
    {
      "pre": [
        {
          "type": "text",
          "value": "Let’s start with an easy one."
        }
      ],
      "speaker": "Oh, I’m going up to the lake for the long weekend, don’t ya know.",
      "answer": {
        "type": "state",
        "value": "Minnesota"
      },
      "hints": [
        "Listen to how they say <i>going</i> and <i>know</i>.",
        "That vowel is an artifact of Scandinavian settlement.",
        "Narrow the guess: Minnesota or Texas."
      ],
      "post": [
        {
          "type": "text",
          "value": "The regional indicator is in the way they pronounce <strong>going</strong> and <strong>know</strong>."
        },
        {
          "type": "text",
          "value": "This is known to linguists as the <strong>monophthongal GOAT vowel<strong>."
        }
      ],
      "deepDive": [
        {
          "type": "text",
          "value": "Both of these words share a vowel, like the vowel in GOAT."
        },
        {
          "type": "text",
          "value": "See how you say it. Try saying <strong>“oh”</strong> a few times, very slowly. Does your vowel have 1 sound, like the example on the left, or 2 sounds?"
        },
        {
          "type": "text",
          "value": "[1 sound vs. 2 sounds]"
        },
        {
          "type": "text",
          "value": "A vowel with 1 sound is called a <strong>monophthong</strong>. Your lips and tongue don’t move, and the vowel stays completely the same while you say it."
        },
        {
          "type": "text",
          "value": "[1 sound demos]"
        },
        {
          "type": "text",
          "value": "If the vowel contains 2 sounds, it’s called a <strong>diphthong</strong>."
        },
        {
          "type": "text",
          "value": "[2 sound demos]"
        },
        {
          "type": "text",
          "value": "A hallmark of the stereotypical Minnesota accent is that monophthongal GOAT vowel."
        },
        {
          "type": "text",
          "value": "And it’s no coincidence. Swedish and Norwegian both have lots of monophthongal vowels. The way English was spoken in those regions was established by those immigrants settling in the Upper Midwest in the 19th and 20th centuries. Linguists believe that this contributed to this region standing out as an exception in a sea of diphthongal GOAT pronunciation."
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
}`,ye=E(`<p></p>`),be=E(`<details><summary></summary> <div class="content"><!></div></details>`);function xe(e,r){let i=A(()=>typeof r.content==`string`),s=A(()=>r.open===`true`);var c=be(),u=a(c);d(u,()=>r.summary,!0),w(u);var g=m(u,2),_=a(g),v=e=>{var t=l();d(h(t),()=>r.content),n(e,t)},y=e=>{var i=l();t(h(i),17,()=>r.content,P,(e,t)=>{let r=()=>o(t).value;var i=ye();d(i,r,!0),w(i),n(e,i)}),n(e,i)};f(_,e=>{o(i)?e(v):e(y,-1)}),w(g),w(c),p(()=>{c.open=o(s),k(c,`name`,r.name)}),n(e,c)}var Se=E(`<li></li>`),Ce=E(`<ul></ul>`);function we(e,r){var i=Ce();t(i,21,()=>r.li,P,(e,t)=>{var r=Se();d(r,()=>o(t),!0),w(r),n(e,r)}),w(i),n(e,i)}var Te=E(`<li></li>`),Ee=E(`<ol></ol>`);function De(e,r){var i=Ee();t(i,21,()=>r.li,P,(e,t)=>{var r=Te();d(r,()=>o(t),!0),w(r),n(e,r)}),w(i),n(e,i)}var Oe=E(`<p></p>`),ke=E(`<section><!></section>`);function Ae(e,r){S(r,!0);let i={details:xe,ul:we,ol:De},s=v(r,`components`,19,()=>({})),c=v(r,`body`,19,()=>[]);var u=l();t(h(u),17,c,P,(e,r)=>{let c=()=>o(r).section,u=()=>o(r).content,m=A(()=>c().toLowerCase().replace(/[^a-z0-9]/g,``)),g=A(()=>s()[c()]);var _=ke(),v=a(_),b=e=>{var t=l();y(h(t),()=>o(g),(e,t)=>{t(e,j(u))}),n(e,t)},S=e=>{var r=l();t(h(r),17,u,P,(e,t,r,a)=>{let c=()=>o(t).type,u=()=>o(t).value,p=A(()=>s()[c()]||i[c()]),m=A(()=>typeof u()==`string`);var g=l(),_=h(g),v=e=>{var t=l();y(h(t),()=>o(p),(e,t)=>{t(e,j(u))}),n(e,t)},b=e=>{var t=Oe();d(t,u,!0),w(t),n(e,t)},S=e=>{var t=l();I(h(t),c,!1,(e,t)=>{var r=l();d(h(r),u),n(t,r)}),n(e,t)},C=e=>{var t=l();I(h(t),c,!1,(e,t)=>{x(e,()=>({...u()}))}),n(e,t)};f(_,e=>{o(p)?e(v):c()===`text`?e(b,1):o(m)?e(S,2):e(C,-1)}),n(e,g)}),n(e,r)};f(v,e=>{o(g)?e(b):e(S,-1)}),w(_),p(()=>k(_,`id`,o(m))),n(e,_)}),n(e,u),N()}var je=E(`<p> </p> <progress max="100"></progress>`,1);function Me(e,t){let i=v(t,`label`,3,`A`),o=v(t,`value`,3,0);var s=je(),c=h(s),l=a(c,!0);w(c);var u=m(c,2);p(()=>{r(l,i()),D(u,o())}),n(e,s)}var Ne=E(`<section id="cms"><h2>MicroCMS</h2> <code><pre> </pre></code> <!></section>`);function Pe(e,t){S(t,!0);let{body:i}=R,o={Test:Me};var s=Ne(),c=m(a(s),2),l=a(c),u=a(l,!0);w(l),w(c),Ae(m(c,2),{get components(){return o},get body(){return i}}),w(s),p(e=>r(u,e),[()=>ve.replace(/\t/g,` `)]),n(e,s),N()}var Fe=(e,t=_)=>{var i=Ie(),o=a(i),s=a(o,!0);w(o);var c=m(o,2),l=a(c,!0);w(c),w(i),p(()=>{r(s,t().name),r(l,t().age)}),n(e,i)},Ie=E(`<div class="person svelte-q3gttf"><p class="svelte-q3gttf"> </p> <p class="svelte-q3gttf"> </p></div>`),Le=E(`<h2>Svelte5</h2> <h3>Reactive variables 3 ways:</h3> <button class="svelte-q3gttf">count++</button> <p class="svelte-q3gttf"> </p> <p class="svelte-q3gttf"> </p> <p class="svelte-q3gttf"> </p> <h3>Children (previously slots):</h3> <div class="children"><!></div> <h3>Dispatch Event</h3> <button class="svelte-q3gttf">Random</button>  <h3>Snippets</h3> <div class="people svelte-q3gttf"></div>`,1);function Re(s,c){S(c,!0),v(c,`age`,3,30),O(c,[`$$slots`,`$$events`,`$$legacy`,`name`,`age`,`renamed`,`value`,`children`,`random`]);let l=[{name:`John`,age:30},{name:`Jill`,age:45}],d=M(0),f=A(()=>o(d)*2),g=A(()=>o(d)*2),y=M(0);i(()=>{e(y,o(d)*2)});var b=Le(),x=m(h(b),4),C=m(x,2),T=a(C);w(C);var E=m(C,2),D=a(E);w(E);var k=m(E,2),j=a(k);w(k);var I=m(k,4);F(a(I),()=>c.children??_),w(I);var L=m(I,4),R=m(L,4);t(R,21,()=>l,P,(e,t)=>{Fe(e,()=>o(t))}),w(R),p(()=>{r(T,`${o(d)??``} doubled is ${o(f)??``} (derived)`),r(D,`${o(d)??``} doubled is ${o(g)??``} (derived by)`),r(j,`${o(d)??``} doubled is ${o(y)??``} ($effect)`)}),u(`click`,x,()=>ee(d)),u(`click`,L,()=>c.random(Math.floor(Math.random()*10))),n(s,b),N()}c([`click`]);var ze=(t,n)=>{let r=M(g(t)),a=M(null),s=M(!0),c=M(void 0),l=(t=!0)=>{e(s,t,!0),t===!0&&(e(c,null),e(a,null))},u=async()=>{try{let e=await fetch(o(r),n);if(!e.ok)throw Error(`Unexpected error occurred (status ${e.status})`);let t;return t=o(r).includes(`.csv`)?Z(await e.text()):await e.json(),[null,t]}catch(e){let{errorMessage:t=`Unexpected error eccurred`}=e;return[t,null]}},d=async t=>{l(!0);let[n,i]=await u();if(t===o(r)){if(n){l(!1),e(c,n,!0);return}l(!1),e(a,i,!0)}};return i(()=>{d(o(r))}),{get data(){return o(a)},get loading(){return o(s)},get error(){return o(c)},get url(){return o(r)},set url(t){o(r)!==t&&e(r,t,!0)}}},Be=E(`<p>loading data...</p>`),$=E(`<p> </p>`),Ve=E(`<p>data loaded</p> <pre> </pre>`,1),He=E(`<div class="c"><h2>Load Data</h2> <div class="response"><!></div></div>`);function Ue(e,t){S(t,!0);let o=ze(`${L}/assets/demo/test.csv`);i(()=>{});var s=He(),c=m(a(s),2),l=a(c),u=e=>{n(e,Be())},d=e=>{var t=$(),i=a(t);w(t),p(()=>r(i,`error: ${o.error??``}`)),n(e,t)},g=e=>{var t=Ve(),i=m(h(t),2),s=a(i,!0);w(i),p(e=>r(s,e),[()=>JSON.stringify(o.data,null,2)]),n(e,t)};f(l,e=>{o.loading?e(u):o.error?e(d,1):e(g,-1)}),w(c),w(s),n(e,s),N()}var We=E(`<div id="demo" class="svelte-15aotx7"><h1>Demo</h1> <!> <!> <!> <!> <!> <!> <!> <!></div>`);function Ge(t){let r=M(0);function i(e){console.log(e)}var s=We(),c=m(a(s),2);ne(c,{});var l=m(c,2);ie(l,{});var u=m(l,2);oe(u,{});var d=m(u,2);fe(d,{});var f=m(d,2);Pe(f,{});var p=m(f,2);Ue(p,{});var h=m(p,2);_e(h,{}),Re(m(h,2),{random:i,get value(){return o(r)},set value(t){e(r,t,!0)}}),w(s),n(t,s)}function Ke(e){Ge(e,{})}export{Ke as component};
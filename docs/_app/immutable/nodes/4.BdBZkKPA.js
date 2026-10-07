import{$ as e,A as t,C as n,D as r,E as i,F as a,K as o,N as s,O as c,P as l,Q as u,S as d,T as f,X as p,Z as m,_ as h,_t as g,a as _,at as v,b as y,c as b,f as x,ft as S,h as C,it as w,k as T,m as E,o as ee,pt as D,q as O,rt as k,s as A,tt as j,vt as M,w as N,x as P,yt as F,z as I}from"../chunks/BP03BvXA.js";import{i as L}from"../chunks/CskKHIVr.js";import"../chunks/CT0T0Gak.js";import"../chunks/DnsWOCDb.js";import{t as R}from"../chunks/iZSdrsKD.js";var z={},B={},V=34,H=10,U=13;function W(e){return Function(`d`,`return {`+e.map(function(e,t){return JSON.stringify(e)+`: d[`+t+`] || ""`}).join(`,`)+`}`)}function te(e,t){var n=W(e);return function(r,i){return t(n(r),i,e)}}function G(e){var t=Object.create(null),n=[];return e.forEach(function(e){for(var r in e)r in t||n.push(t[r]=r)}),n}function K(e,t){var n=e+``,r=n.length;return r<t?Array(t-r+1).join(0)+n:n}function q(e){return e<0?`-`+K(-e,6):e>9999?`+`+K(e,6):K(e,4)}function J(e){var t=e.getUTCHours(),n=e.getUTCMinutes(),r=e.getUTCSeconds(),i=e.getUTCMilliseconds();return isNaN(e)?`Invalid Date`:q(e.getUTCFullYear(),4)+`-`+K(e.getUTCMonth()+1,2)+`-`+K(e.getUTCDate(),2)+(i?`T`+K(t,2)+`:`+K(n,2)+`:`+K(r,2)+`.`+K(i,3)+`Z`:r?`T`+K(t,2)+`:`+K(n,2)+`:`+K(r,2)+`Z`:n||t?`T`+K(t,2)+`:`+K(n,2)+`Z`:``)}function Y(e){var t=RegExp(`["`+e+`
\r]`),n=e.charCodeAt(0);function r(e,t){var n,r,a=i(e,function(e,i){if(n)return n(e,i-1);r=e,n=t?te(e,t):W(e)});return a.columns=r||[],a}function i(e,t){var r=[],i=e.length,a=0,o=0,s,c=i<=0,l=!1;e.charCodeAt(i-1)===H&&--i,e.charCodeAt(i-1)===U&&--i;function u(){if(c)return B;if(l)return l=!1,z;var t,r=a,o;if(e.charCodeAt(r)===V){for(;a++<i&&e.charCodeAt(a)!==V||e.charCodeAt(++a)===V;);return(t=a)>=i?c=!0:(o=e.charCodeAt(a++))===H?l=!0:o===U&&(l=!0,e.charCodeAt(a)===H&&++a),e.slice(r+1,t-1).replace(/""/g,`"`)}for(;a<i;){if((o=e.charCodeAt(t=a++))===H)l=!0;else if(o===U)l=!0,e.charCodeAt(a)===H&&++a;else if(o!==n)continue;return e.slice(r,t)}return c=!0,e.slice(r,i)}for(;(s=u())!==B;){for(var d=[];s!==z&&s!==B;)d.push(s),s=u();t&&(d=t(d,o++))==null||r.push(d)}return r}function a(t,n){return t.map(function(t){return n.map(function(e){return u(t[e])}).join(e)})}function o(t,n){return n??=G(t),[n.map(u).join(e)].concat(a(t,n)).join(`
`)}function s(e,t){return t??=G(e),a(e,t).join(`
`)}function c(e){return e.map(l).join(`
`)}function l(t){return t.map(u).join(e)}function u(e){return e==null?``:e instanceof Date?J(e):t.test(e+=``)?`"`+e.replace(/"/g,`""`)+`"`:e}return{parse:r,parseRows:i,format:o,formatBody:s,formatRows:c,formatRow:l,formatValue:u}}var X=Y(`,`),Z=X.parse;X.parseRows,X.format,X.formatBody,X.formatRows,X.formatRow,X.formatValue;var Q=t(`<section id="demo-link"><h2>Link</h2> <p><a href="elements">Default element styles demo</a></p> <p><a href="fonts">Pudding-hosted font previews</a></p> <p><a href="ui">BitsUI styled components</a></p></section>`);function ne(e){c(e,Q())}var re=t(`<section id="demo-image"><h2>Image</h2> <p>img tag</p> <img src="../assets/demo/test.jpg" alt="cat" class="svelte-b56t42"/> <p>background image</p> <div class="svelte-b56t42"></div></section>`);function ie(e){c(e,re())}var ae=t(`<section id="demo-element"><h2>Dynamic Svelte Element</h2> <!></section>`);function oe(e){let t=[{tag:`h3`,text:`I am a h3 tag.`},{tag:`p`,text:`I am p tag.`}];var n=ae();N(u(p(n),2),17,()=>t,f,(e,t)=>{let n=()=>I(t).tag,i=()=>I(t).text;var a=T();y(m(a),n,!1,(e,t)=>{var n=s();o(()=>r(n,i())),c(t,n)}),c(e,a)}),M(n),c(e,n)}var se=t(`<p> </p>`);function ce(e,t){var n=se(),i=p(n);M(n),o(()=>r(i,`I am component A and my favorite number is ${t.number??``}.`)),c(e,n)}var le=t(`<p> </p>`);function ue(e,t){var n=le(),i=p(n);M(n),o(()=>r(i,`I am component B and my name is ${t.name??``}.`)),c(e,n)}var de=t(`<section id="demo-component"><h2>Dynamic Svelte Component</h2> <!></section>`);function fe(e){let t={A:ce,B:ue},n=[{component:`A`,number:42},{component:`B`,name:`Russell`}];var r=de();N(u(p(r),2),17,()=>n,f,(e,n)=>{let r=v(()=>t[I(n).component]);var i=T();P(m(i),()=>I(r),(e,t)=>{t(e,A(()=>I(n)))}),c(e,i)}),M(r),c(e,r)}var pe=t(`<div><!></div>`);function me(e,t){D(t,!0);let n=_(t,`root`,3,null),r=_(t,`top`,3,0),i=_(t,`bottom`,3,0),a=_(t,`increments`,3,100),o=_(t,`value`,15,void 0),s=[],l=[],u=[],f=[],m;function h(){let e=0,t=0;for(let n=0;n<s.length;n++)s[n]>e&&(e=s[n],t=n);o(e>0?t:void 0)}function g(e,t){let a=e=>{e[0].isIntersecting,s[t]=e[0].intersectionRatio,h()},o=`${r()?r()*-1:0}px 0px ${i()?i()*-1:0}px 0px`,c={root:n(),rootMargin:o,threshold:l};f[t]&&f[t].disconnect();let u=new IntersectionObserver(a,c);u.observe(e),f[t]=u}function v(){u.length&&u.forEach(g)}O(()=>{for(let e=0;e<a()+1;e++)l.push(e/a());u=m.querySelectorAll(`:scope > *:not(iframe)`),v()}),O(()=>{r(),i(),v()});var y=pe();d(p(y),()=>t.children??F),M(y),b(y,e=>m=e,()=>m),c(e,y),S()}var he=t(`<div><p class="svelte-1sxgmm9"> </p></div>`),ge=t(`<section id="scrolly"><h2 class="svelte-1sxgmm9">Scrolly <span> </span></h2> <div class="spacer svelte-1sxgmm9"></div> <!> <div class="spacer svelte-1sxgmm9"></div></section>`);function _e(e){let t=k(void 0);var n=ge(),i=p(n),a=u(p(i)),s=p(a,!0);M(a),M(i),me(u(i,4),{get value(){return I(t)},set value(e){j(t,e,!0)},children:(e,n)=>{var i=T();N(m(i),16,()=>[0,1,2,3,4],f,(e,n,i)=>{let a=v(()=>I(t)===i);var s=he();let l;var u=p(s),d=p(u,!0);M(u),M(s),o(()=>{l=h(s,1,`step svelte-1sxgmm9`,null,l,{active:I(a)}),r(d,n)}),c(e,s)}),c(e,i)},$$slots:{default:!0}}),g(2),M(n),o(()=>r(s,I(t)||`-`)),c(e,n)}var ve=`{
  "title": "The American Accent Quiz",
  "intro": [
    {
      "type": "text",
      "value": "We’ve assembled 9 speakers who have unique regional pronunciations that indicate where they grew up."
    },
    {
      "type": "text",
      "value": "Can you guess where they’re from?"
    }
  ],
  "levels": [
    {
      "id": "monophthongal-goat"
    },
    {
      "id": "cot-caught",
      "pre": [
        {
          "type": "text",
          "value": "This one is more subtle, so you’ll only need to select between two regions of the US."
        }
      ],
      "speaker": "His name is Don. Her name is Dawn.",
      "post": [
        {
          "type": "text",
          "value": "That was Matt, 41 years-old, who spent his entire childhood in this region of the US."
        }
      ],
      "answer": {
        "type": "region",
        "value": "Eastern US"
      },
      "hints": [
        "Listen to the way they say Don vs. Dawn.",
        "Out West, these vowels have collapsed into one sound, while much of the East keeps them distinct.",
        "For this speaker, they’re actually subtly different."
      ],
      "explanation": [
        {
          "type": "text",
          "value": "The clue is in the vowel sounds of <strong>Don</strong> and <strong>Dawn</strong>."
        },
        {
          "type": "Speaker",
          "value": {}
        },
        {
          "type": "Expert",
          "value": {
            "id": "nicole",
            "content": [
              {
                "type": "text",
                "value": "Did this pronunciation of “Don” and “Dawn” sound familiar?"
              },
              {
                "type": "text",
                "value": "Many people say these two words identically."
              }
            ]
          }
        },
        {
          "type": "Expert",
          "value": {
            "id": "erik",
            "content": [
              {
                "type": "text",
                "value": "<span class=label>Indistinguishable!</span>"
              },
              {
                "type": "text",
                "value": "<button class=word>Don.</button> <button class=word>Dawn.</button>"
              }
            ]
          }
        },
        {
          "type": "text",
          "value": "Let’s have Erik demonstrate this with other vowel pairs."
        },
        {
          "type": "Comparison",
          "value": {
            "content": [
              {
                "type": "Buttons",
                "value": {
                  "words": [
                    "Caught",
                    "Cot"
                  ]
                }
              },
              {
                "type": "Buttons",
                "value": {
                  "words": [
                    "Stock",
                    "Stalk"
                  ]
                }
              },
              {
                "type": "text",
                "value": "Here’s another example with the phrase “hot dog”."
              }
            ]
          }
        }
      ],
      "tease": [
        {
          "type": "text",
          "value": "The US has several regional and demographic divides when it comes to pronouncing the vowels in lot and thought (so everyone has an accent!)."
        },
        {
          "type": "text",
          "value": "Linguists call this the <strong>Cot-Caught merger</strong>."
        }
      ],
      "scroll": "<strong>Scroll down</strong> for a linguistics breakdown of the cot-caught merger",
      "deep": [
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
      "id": "lamp"
    },
    {
      "id": "non-rhodic"
    },
    {
      "id": "trap-raising"
    },
    {
      "id": "pin-pen"
    },
    {
      "id": "northern-cities-shift"
    },
    {
      "id": "reprise-goat"
    },
    {
      "id": "socal-multiethnolect"
    }
  ]
}`,ye=t(`<p></p>`),be=t(`<details><summary></summary> <div class="content"><!></div></details>`);function xe(e,t){let r=v(()=>typeof t.content==`string`),a=v(()=>t.open===`true`);var s=be(),l=p(s);n(l,()=>t.summary,!0),M(l);var d=u(l,2),h=p(d),g=e=>{var r=T();n(m(r),()=>t.content),c(e,r)},_=e=>{var r=T();N(m(r),17,()=>t.content,f,(e,t)=>{let r=()=>I(t).value;var i=ye();n(i,r,!0),M(i),c(e,i)}),c(e,r)};i(h,e=>{I(r)?e(g):e(_,-1)}),M(d),M(s),o(()=>{s.open=I(a),E(s,`name`,t.name)}),c(e,s)}var Se=t(`<li></li>`),Ce=t(`<ul></ul>`);function we(e,t){var r=Ce();N(r,21,()=>t.li,f,(e,t)=>{var r=Se();n(r,()=>I(t),!0),M(r),c(e,r)}),M(r),c(e,r)}var Te=t(`<li></li>`),Ee=t(`<ol></ol>`);function De(e,t){var r=Ee();N(r,21,()=>t.li,f,(e,t)=>{var r=Te();n(r,()=>I(t),!0),M(r),c(e,r)}),M(r),c(e,r)}var Oe=t(`<p></p>`),ke=t(`<section><!></section>`);function Ae(e,t){D(t,!0);let r={details:xe,ul:we,ol:De},a=_(t,`components`,19,()=>({})),s=_(t,`body`,19,()=>[]);var l=T();N(m(l),17,s,f,(e,t)=>{let s=()=>I(t).section,l=()=>I(t).content,u=v(()=>s().toLowerCase().replace(/[^a-z0-9]/g,``)),d=v(()=>a()[s()]);var h=ke(),g=p(h),_=e=>{var t=T();P(m(t),()=>I(d),(e,t)=>{t(e,A(l))}),c(e,t)},b=e=>{var t=T();N(m(t),17,l,f,(e,t,o,s)=>{let l=()=>I(t).type,u=()=>I(t).value,d=v(()=>a()[l()]||r[l()]),f=v(()=>typeof u()==`string`);var p=T(),h=m(p),g=e=>{var t=T();P(m(t),()=>I(d),(e,t)=>{t(e,A(u))}),c(e,t)},_=e=>{var t=Oe();n(t,u,!0),M(t),c(e,t)},b=e=>{var t=T();y(m(t),l,!1,(e,t)=>{var r=T();n(m(r),u),c(t,r)}),c(e,t)},S=e=>{var t=T();y(m(t),l,!1,(e,t)=>{x(e,()=>({...u()}))}),c(e,t)};i(h,e=>{I(d)?e(g):l()===`text`?e(_,1):I(f)?e(b,2):e(S,-1)}),c(e,p)}),c(e,t)};i(g,e=>{I(d)?e(_):e(b,-1)}),M(h),o(()=>E(h,`id`,I(u))),c(e,h)}),c(e,l),S()}var je=t(`<p> </p> <progress max="100"></progress>`,1);function Me(e,t){let n=_(t,`label`,3,`A`),i=_(t,`value`,3,0);var a=je(),s=m(a),l=p(s,!0);M(s);var d=u(s,2);o(()=>{r(l,n()),C(d,i())}),c(e,a)}var Ne=t(`<section id="cms"><h2>MicroCMS</h2> <code><pre> </pre></code> <!></section>`);function Pe(e,t){D(t,!0);let{body:n}=R,i={Test:Me};var a=Ne(),s=u(p(a),2),l=p(s),d=p(l,!0);M(l),M(s),Ae(u(s,2),{get components(){return i},get body(){return n}}),M(a),o(e=>r(d,e),[()=>ve.replace(/\t/g,` `)]),c(e,a),S()}var Fe=(e,t=F)=>{var n=Ie(),i=p(n),a=p(i,!0);M(i);var s=u(i,2),l=p(s,!0);M(s),M(n),o(()=>{r(a,t().name),r(l,t().age)}),c(e,n)},Ie=t(`<div class="person svelte-q3gttf"><p class="svelte-q3gttf"> </p> <p class="svelte-q3gttf"> </p></div>`),Le=t(`<h2>Svelte5</h2> <h3>Reactive variables 3 ways:</h3> <button class="svelte-q3gttf">count++</button> <p class="svelte-q3gttf"> </p> <p class="svelte-q3gttf"> </p> <p class="svelte-q3gttf"> </p> <h3>Children (previously slots):</h3> <div class="children"><!></div> <h3>Dispatch Event</h3> <button class="svelte-q3gttf">Random</button>  <h3>Snippets</h3> <div class="people svelte-q3gttf"></div>`,1);function Re(e,t){D(t,!0),_(t,`age`,3,30),ee(t,[`$$slots`,`$$events`,`$$legacy`,`name`,`age`,`renamed`,`value`,`children`,`random`]);let n=[{name:`John`,age:30},{name:`Jill`,age:45}],i=k(0),s=v(()=>I(i)*2),l=v(()=>I(i)*2),h=k(0);O(()=>{j(h,I(i)*2)});var g=Le(),y=u(m(g),4),b=u(y,2),x=p(b);M(b);var C=u(b,2),T=p(C);M(C);var E=u(C,2),A=p(E);M(E);var P=u(E,4);d(p(P),()=>t.children??F),M(P);var L=u(P,4),R=u(L,4);N(R,21,()=>n,f,(e,t)=>{Fe(e,()=>I(t))}),M(R),o(()=>{r(x,`${I(i)??``} doubled is ${I(s)??``} (derived)`),r(T,`${I(i)??``} doubled is ${I(l)??``} (derived by)`),r(A,`${I(i)??``} doubled is ${I(h)??``} ($effect)`)}),a(`click`,y,()=>w(i)),a(`click`,L,()=>t.random(Math.floor(Math.random()*10))),c(e,g),S()}l([`click`]);var ze=(t,n)=>{let r=k(e(t)),i=k(null),a=k(!0),o=k(void 0),s=(e=!0)=>{j(a,e,!0),e===!0&&(j(o,null),j(i,null))},c=async()=>{try{let e=await fetch(I(r),n);if(!e.ok)throw Error(`Unexpected error occurred (status ${e.status})`);let t;return t=I(r).includes(`.csv`)?Z(await e.text()):await e.json(),[null,t]}catch(e){let{errorMessage:t=`Unexpected error eccurred`}=e;return[t,null]}},l=async e=>{s(!0);let[t,n]=await c();if(e===I(r)){if(t){s(!1),j(o,t,!0);return}s(!1),j(i,n,!0)}};return O(()=>{l(I(r))}),{get data(){return I(i)},get loading(){return I(a)},get error(){return I(o)},get url(){return I(r)},set url(e){I(r)!==e&&j(r,e,!0)}}},Be=t(`<p>loading data...</p>`),$=t(`<p> </p>`),Ve=t(`<p>data loaded</p> <pre> </pre>`,1),He=t(`<div class="c"><h2>Load Data</h2> <div class="response"><!></div></div>`);function Ue(e,t){D(t,!0);let n=ze(`${L}/assets/demo/test.csv`);O(()=>{});var a=He(),s=u(p(a),2),l=p(s),d=e=>{c(e,Be())},f=e=>{var t=$(),i=p(t);M(t),o(()=>r(i,`error: ${n.error??``}`)),c(e,t)},h=e=>{var t=Ve(),i=u(m(t),2),a=p(i,!0);M(i),o(e=>r(a,e),[()=>JSON.stringify(n.data,null,2)]),c(e,t)};i(l,e=>{n.loading?e(d):n.error?e(f,1):e(h,-1)}),M(s),M(a),c(e,a),S()}var We=t(`<div id="demo" class="svelte-15aotx7"><h1>Demo</h1> <!> <!> <!> <!> <!> <!> <!> <!></div>`);function Ge(e){let t=k(0);function n(e){console.log(e)}var r=We(),i=u(p(r),2);ne(i,{});var a=u(i,2);ie(a,{});var o=u(a,2);oe(o,{});var s=u(o,2);fe(s,{});var l=u(s,2);Pe(l,{});var d=u(l,2);Ue(d,{});var f=u(d,2);_e(f,{}),Re(u(f,2),{random:n,get value(){return I(t)},set value(e){j(t,e,!0)}}),M(r),c(e,r)}function Ke(e){Ge(e,{})}export{Ke as component};
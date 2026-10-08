import{$ as e,A as t,B as n,C as r,D as i,E as a,F as o,I as s,J as c,O as l,P as u,Q as d,S as f,T as p,Z as m,a as h,at as g,bt as _,c as v,et as y,g as b,h as x,it as S,j as C,k as w,mt as T,nt as E,o as D,ot as O,p as k,pt as A,q as j,s as M,v as N,vt as P,w as F,x as I,yt as L}from"../chunks/Ggqnhcqv.js";import{i as R}from"../chunks/B1HFDAm2.js";import"../chunks/CT0T0Gak.js";import"../chunks/DnsWOCDb.js";import{t as z}from"../chunks/I96W4Mgz.js";var B={},V={},H=34,U=10,W=13;function G(e){return Function(`d`,`return {`+e.map(function(e,t){return JSON.stringify(e)+`: d[`+t+`] || ""`}).join(`,`)+`}`)}function ee(e,t){var n=G(e);return function(r,i){return t(n(r),i,e)}}function K(e){var t=Object.create(null),n=[];return e.forEach(function(e){for(var r in e)r in t||n.push(t[r]=r)}),n}function q(e,t){var n=e+``,r=n.length;return r<t?Array(t-r+1).join(0)+n:n}function te(e){return e<0?`-`+q(-e,6):e>9999?`+`+q(e,6):q(e,4)}function J(e){var t=e.getUTCHours(),n=e.getUTCMinutes(),r=e.getUTCSeconds(),i=e.getUTCMilliseconds();return isNaN(e)?`Invalid Date`:te(e.getUTCFullYear(),4)+`-`+q(e.getUTCMonth()+1,2)+`-`+q(e.getUTCDate(),2)+(i?`T`+q(t,2)+`:`+q(n,2)+`:`+q(r,2)+`.`+q(i,3)+`Z`:r?`T`+q(t,2)+`:`+q(n,2)+`:`+q(r,2)+`Z`:n||t?`T`+q(t,2)+`:`+q(n,2)+`Z`:``)}function Y(e){var t=RegExp(`["`+e+`
\r]`),n=e.charCodeAt(0);function r(e,t){var n,r,a=i(e,function(e,i){if(n)return n(e,i-1);r=e,n=t?ee(e,t):G(e)});return a.columns=r||[],a}function i(e,t){var r=[],i=e.length,a=0,o=0,s,c=i<=0,l=!1;e.charCodeAt(i-1)===U&&--i,e.charCodeAt(i-1)===W&&--i;function u(){if(c)return V;if(l)return l=!1,B;var t,r=a,o;if(e.charCodeAt(r)===H){for(;a++<i&&e.charCodeAt(a)!==H||e.charCodeAt(++a)===H;);return(t=a)>=i?c=!0:(o=e.charCodeAt(a++))===U?l=!0:o===W&&(l=!0,e.charCodeAt(a)===U&&++a),e.slice(r+1,t-1).replace(/""/g,`"`)}for(;a<i;){if((o=e.charCodeAt(t=a++))===U)l=!0;else if(o===W)l=!0,e.charCodeAt(a)===U&&++a;else if(o!==n)continue;return e.slice(r,t)}return c=!0,e.slice(r,i)}for(;(s=u())!==V;){for(var d=[];s!==B&&s!==V;)d.push(s),s=u();t&&(d=t(d,o++))==null||r.push(d)}return r}function a(t,n){return t.map(function(t){return n.map(function(e){return u(t[e])}).join(e)})}function o(t,n){return n??=K(t),[n.map(u).join(e)].concat(a(t,n)).join(`
`)}function s(e,t){return t??=K(e),a(e,t).join(`
`)}function c(e){return e.map(l).join(`
`)}function l(t){return t.map(u).join(e)}function u(e){return e==null?``:e instanceof Date?J(e):t.test(e+=``)?`"`+e.replace(/"/g,`""`)+`"`:e}return{parse:r,parseRows:i,format:o,formatBody:s,formatRows:c,formatRow:l,formatValue:u}}var X=Y(`,`),Z=X.parse;X.parseRows,X.format,X.formatBody,X.formatRows,X.formatRow,X.formatValue;var Q=C(`<section id="demo-link"><h2>Link</h2> <p><a href="elements">Default element styles demo</a></p> <p><a href="fonts">Pudding-hosted font previews</a></p> <p><a href="ui">BitsUI styled components</a></p></section>`);function ne(e){w(e,Q())}var re=C(`<section id="demo-image"><h2>Image</h2> <p>img tag</p> <img src="../assets/demo/test.jpg" alt="cat" class="svelte-b56t42"/> <p>background image</p> <div class="svelte-b56t42"></div></section>`);function ie(e){w(e,re())}var ae=C(`<section id="demo-element"><h2>Dynamic Svelte Element</h2> <!></section>`);function oe(r){let i=[{tag:`h3`,text:`I am a h3 tag.`},{tag:`p`,text:`I am p tag.`}];var o=ae();p(e(m(o),2),17,()=>i,a,(e,r)=>{let i=()=>n(r).tag,a=()=>n(r).text;var o=t();I(d(o),i,!1,(e,t)=>{var n=u();j(()=>l(n,a())),w(t,n)}),w(e,o)}),L(o),w(r,o)}var se=C(`<p> </p>`);function ce(e,t){var n=se(),r=m(n);L(n),j(()=>l(r,`I am component A and my favorite number is ${t.number??``}.`)),w(e,n)}var le=C(`<p> </p>`);function ue(e,t){var n=le(),r=m(n);L(n),j(()=>l(r,`I am component B and my name is ${t.name??``}.`)),w(e,n)}var de=C(`<section id="demo-component"><h2>Dynamic Svelte Component</h2> <!></section>`);function fe(r){let i={A:ce,B:ue},o=[{component:`A`,number:42},{component:`B`,name:`Russell`}];var s=de();p(e(m(s),2),17,()=>o,a,(e,r)=>{let a=O(()=>i[n(r).component]);var o=t();f(d(o),()=>n(a),(e,t)=>{t(e,M(()=>n(r)))}),w(e,o)}),L(s),w(r,s)}var pe=C(`<div><!></div>`);function me(e,t){T(t,!0);let n=h(t,`root`,3,null),i=h(t,`top`,3,0),a=h(t,`bottom`,3,0),o=h(t,`increments`,3,100),s=h(t,`value`,15,void 0),l=[],u=[],d=[],f=[],p;function g(){let e=0,t=0;for(let n=0;n<l.length;n++)l[n]>e&&(e=l[n],t=n);s(e>0?t:void 0)}function y(e,t){let r=e=>{e[0].isIntersecting,l[t]=e[0].intersectionRatio,g()},o=`${i()?i()*-1:0}px 0px ${a()?a()*-1:0}px 0px`,s={root:n(),rootMargin:o,threshold:u};f[t]&&f[t].disconnect();let c=new IntersectionObserver(r,s);c.observe(e),f[t]=c}function b(){d.length&&d.forEach(y)}c(()=>{for(let e=0;e<o()+1;e++)u.push(e/o());d=p.querySelectorAll(`:scope > *:not(iframe)`),b()}),c(()=>{i(),a(),b()});var x=pe();r(m(x),()=>t.children??_),L(x),v(x,e=>p=e,()=>p),w(e,x),A()}var he=C(`<div><p class="svelte-1sxgmm9"> </p></div>`),ge=C(`<section id="scrolly"><h2 class="svelte-1sxgmm9">Scrolly <span> </span></h2> <div class="spacer svelte-1sxgmm9"></div> <!> <div class="spacer svelte-1sxgmm9"></div></section>`);function _e(r){let i=S(void 0);var o=ge(),s=m(o),c=e(m(s)),u=m(c,!0);L(c),L(s),me(e(s,4),{get value(){return n(i)},set value(e){E(i,e,!0)},children:(e,r)=>{var o=t();p(d(o),16,()=>[0,1,2,3,4],a,(e,t,r)=>{let a=O(()=>n(i)===r);var o=he();let s;var c=m(o),u=m(c,!0);L(c),L(o),j(()=>{s=N(o,1,`step svelte-1sxgmm9`,null,s,{active:n(a)}),l(u,t)}),w(e,o)}),w(e,o)},$$slots:{default:!0}}),P(2),L(o),j(()=>l(u,n(i)||`-`)),w(r,o)}var ve=`{
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
      "id": "1-monophthongal-goat"
    },
    {
      "id": "2-cot-caught",
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
                "value": "<button class=word data-sound-id=don-merged>Don.</button> <button class=word data-sound-id=dawn-merged>Dawn.</button>"
              }
            ]
          }
        },
        {
          "type": "text",
          "value": "But Matt says them slightly differently."
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
      "id": "3-lamp"
    },
    {
      "id": "4-non-rhodic"
    },
    {
      "id": "5-trap-raising"
    },
    {
      "id": "6-pin-pen"
    },
    {
      "id": "7-northern-cities-shift"
    },
    {
      "id": "8-reprise-goat"
    },
    {
      "id": "9-socal-multiethnolect"
    }
  ]
}`,ye=C(`<p></p>`),be=C(`<details><summary></summary> <div class="content"><!></div></details>`);function xe(r,o){let s=O(()=>typeof o.content==`string`),c=O(()=>o.open===`true`);var l=be(),u=m(l);F(u,()=>o.summary,!0),L(u);var f=e(u,2),h=m(f),g=e=>{var n=t();F(d(n),()=>o.content),w(e,n)},_=e=>{var r=t();p(d(r),17,()=>o.content,a,(e,t)=>{let r=()=>n(t).value;var i=ye();F(i,r,!0),L(i),w(e,i)}),w(e,r)};i(h,e=>{n(s)?e(g):e(_,-1)}),L(f),L(l),j(()=>{l.open=n(c),x(l,`name`,o.name)}),w(r,l)}var Se=C(`<li></li>`),Ce=C(`<ul></ul>`);function we(e,t){var r=Ce();p(r,21,()=>t.li,a,(e,t)=>{var r=Se();F(r,()=>n(t),!0),L(r),w(e,r)}),L(r),w(e,r)}var Te=C(`<li></li>`),Ee=C(`<ol></ol>`);function De(e,t){var r=Ee();p(r,21,()=>t.li,a,(e,t)=>{var r=Te();F(r,()=>n(t),!0),L(r),w(e,r)}),L(r),w(e,r)}var Oe=C(`<p></p>`),ke=C(`<section><!></section>`);function Ae(e,r){T(r,!0);let o={details:xe,ul:we,ol:De},s=h(r,`components`,19,()=>({})),c=h(r,`body`,19,()=>[]);var l=t();p(d(l),17,c,a,(e,r)=>{let c=()=>n(r).section,l=()=>n(r).content,u=O(()=>c().toLowerCase().replace(/[^a-z0-9]/g,``)),h=O(()=>s()[c()]);var g=ke(),_=m(g),v=e=>{var r=t();f(d(r),()=>n(h),(e,t)=>{t(e,M(l))}),w(e,r)},y=e=>{var r=t();p(d(r),17,l,a,(e,r,a,c)=>{let l=()=>n(r).type,u=()=>n(r).value,p=O(()=>s()[l()]||o[l()]),m=O(()=>typeof u()==`string`);var h=t(),g=d(h),_=e=>{var r=t();f(d(r),()=>n(p),(e,t)=>{t(e,M(u))}),w(e,r)},v=e=>{var t=Oe();F(t,u,!0),L(t),w(e,t)},y=e=>{var n=t();I(d(n),l,!1,(e,n)=>{var r=t();F(d(r),u),w(n,r)}),w(e,n)},b=e=>{var n=t();I(d(n),l,!1,(e,t)=>{k(e,()=>({...u()}))}),w(e,n)};i(g,e=>{n(p)?e(_):l()===`text`?e(v,1):n(m)?e(y,2):e(b,-1)}),w(e,h)}),w(e,r)};i(_,e=>{n(h)?e(v):e(y,-1)}),L(g),j(()=>x(g,`id`,n(u))),w(e,g)}),w(e,l),A()}var je=C(`<p> </p> <progress max="100"></progress>`,1);function Me(t,n){let r=h(n,`label`,3,`A`),i=h(n,`value`,3,0);var a=je(),o=d(a),s=m(o,!0);L(o);var c=e(o,2);j(()=>{l(s,r()),b(c,i())}),w(t,a)}var Ne=C(`<section id="cms"><h2>MicroCMS</h2> <code><pre> </pre></code> <!></section>`);function Pe(t,n){T(n,!0);let{body:r}=z,i={Test:Me};var a=Ne(),o=e(m(a),2),s=m(o),c=m(s,!0);L(s),L(o),Ae(e(o,2),{get components(){return i},get body(){return r}}),L(a),j(e=>l(c,e),[()=>ve.replace(/\t/g,` `)]),w(t,a),A()}var Fe=(t,n=_)=>{var r=Ie(),i=m(r),a=m(i,!0);L(i);var o=e(i,2),s=m(o,!0);L(o),L(r),j(()=>{l(a,n().name),l(s,n().age)}),w(t,r)},Ie=C(`<div class="person svelte-q3gttf"><p class="svelte-q3gttf"> </p> <p class="svelte-q3gttf"> </p></div>`),Le=C(`<h2>Svelte5</h2> <h3>Reactive variables 3 ways:</h3> <button class="svelte-q3gttf">count++</button> <p class="svelte-q3gttf"> </p> <p class="svelte-q3gttf"> </p> <p class="svelte-q3gttf"> </p> <h3>Children (previously slots):</h3> <div class="children"><!></div> <h3>Dispatch Event</h3> <button class="svelte-q3gttf">Random</button>  <h3>Snippets</h3> <div class="people svelte-q3gttf"></div>`,1);function Re(t,i){T(i,!0),h(i,`age`,3,30),D(i,[`$$slots`,`$$events`,`$$legacy`,`name`,`age`,`renamed`,`value`,`children`,`random`]);let o=[{name:`John`,age:30},{name:`Jill`,age:45}],u=S(0),f=O(()=>n(u)*2),v=O(()=>n(u)*2),y=S(0);c(()=>{E(y,n(u)*2)});var b=Le(),x=e(d(b),4),C=e(x,2),k=m(C);L(C);var M=e(C,2),N=m(M);L(M);var P=e(M,2),F=m(P);L(P);var I=e(P,4);r(m(I),()=>i.children??_),L(I);var R=e(I,4),z=e(R,4);p(z,21,()=>o,a,(e,t)=>{Fe(e,()=>n(t))}),L(z),j(()=>{l(k,`${n(u)??``} doubled is ${n(f)??``} (derived)`),l(N,`${n(u)??``} doubled is ${n(v)??``} (derived by)`),l(F,`${n(u)??``} doubled is ${n(y)??``} ($effect)`)}),s(`click`,x,()=>g(u)),s(`click`,R,()=>i.random(Math.floor(Math.random()*10))),w(t,b),A()}o([`click`]);var ze=(e,t)=>{let r=S(y(e)),i=S(null),a=S(!0),o=S(void 0),s=(e=!0)=>{E(a,e,!0),e===!0&&(E(o,null),E(i,null))},l=async()=>{try{let e=await fetch(n(r),t);if(!e.ok)throw Error(`Unexpected error occurred (status ${e.status})`);let i;return i=n(r).includes(`.csv`)?Z(await e.text()):await e.json(),[null,i]}catch(e){let{errorMessage:t=`Unexpected error eccurred`}=e;return[t,null]}},u=async e=>{s(!0);let[t,a]=await l();if(e===n(r)){if(t){s(!1),E(o,t,!0);return}s(!1),E(i,a,!0)}};return c(()=>{u(n(r))}),{get data(){return n(i)},get loading(){return n(a)},get error(){return n(o)},get url(){return n(r)},set url(e){n(r)!==e&&E(r,e,!0)}}},Be=C(`<p>loading data...</p>`),Ve=C(`<p> </p>`),$=C(`<p>data loaded</p> <pre> </pre>`,1),He=C(`<div class="c"><h2>Load Data</h2> <div class="response"><!></div></div>`);function Ue(t,n){T(n,!0);let r=ze(`${R}/assets/demo/test.csv`);c(()=>{});var a=He(),o=e(m(a),2),s=m(o),u=e=>{w(e,Be())},f=e=>{var t=Ve(),n=m(t);L(t),j(()=>l(n,`error: ${r.error??``}`)),w(e,t)},p=t=>{var n=$(),i=e(d(n),2),a=m(i,!0);L(i),j(e=>l(a,e),[()=>JSON.stringify(r.data,null,2)]),w(t,n)};i(s,e=>{r.loading?e(u):r.error?e(f,1):e(p,-1)}),L(o),L(a),w(t,a),A()}var We=C(`<div id="demo" class="svelte-15aotx7"><h1>Demo</h1> <!> <!> <!> <!> <!> <!> <!> <!></div>`);function Ge(t){let r=S(0);function i(e){console.log(e)}var a=We(),o=e(m(a),2);ne(o,{});var s=e(o,2);ie(s,{});var c=e(s,2);oe(c,{});var l=e(c,2);fe(l,{});var u=e(l,2);Pe(u,{});var d=e(u,2);Ue(d,{});var f=e(d,2);_e(f,{}),Re(e(f,2),{random:i,get value(){return n(r)},set value(e){E(r,e,!0)}}),L(a),w(t,a)}function Ke(e){Ge(e,{})}export{Ke as component};
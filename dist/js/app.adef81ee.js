(function(t){function e(e){for(var c,i,a=e[0],s=e[1],u=e[2],l=0,b=[];l<a.length;l++)i=a[l],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&b.push(r[i][0]),r[i]=0;for(c in s)Object.prototype.hasOwnProperty.call(s,c)&&(t[c]=s[c]);d&&d(e);while(b.length)b.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],c=!0,i=1;i<n.length;i++){var a=n[i];0!==r[a]&&(c=!1)}c&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var c={},i={app:0},r={app:0},o=[];function a(t){return s.p+"js/"+({about:"about",characteristics:"characteristics",contacts:"contacts",drone:"drone",questions:"questions"}[t]||t)+"."+{about:"5bc74897",characteristics:"44c5e2a6",contacts:"da4cc19a",drone:"b2ec7fdc",questions:"17e07995"}[t]+".js"}function s(e){if(c[e])return c[e].exports;var n=c[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={about:1,characteristics:1,contacts:1,drone:1,questions:1};i[t]?e.push(i[t]):0!==i[t]&&n[t]&&e.push(i[t]=new Promise((function(e,n){for(var c="css/"+({about:"about",characteristics:"characteristics",contacts:"contacts",drone:"drone",questions:"questions"}[t]||t)+"."+{about:"0f95cb0a",characteristics:"848f6ab7",contacts:"4ae8b650",drone:"e1c67cef",questions:"67ac8222"}[t]+".css",r=s.p+c,o=document.getElementsByTagName("link"),a=0;a<o.length;a++){var u=o[a],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===c||l===r))return e()}var b=document.getElementsByTagName("style");for(a=0;a<b.length;a++){u=b[a],l=u.getAttribute("data-href");if(l===c||l===r)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var c=e&&e.target&&e.target.src||r,o=new Error("Loading CSS chunk "+t+" failed.\n("+c+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=c,delete i[t],d.parentNode.removeChild(d),n(o)},d.href=r;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){i[t]=0})));var c=r[t];if(0!==c)if(c)e.push(c[2]);else{var o=new Promise((function(e,n){c=r[t]=[e,n]}));e.push(c[2]=o);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=a(t);var b=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(d);var n=r[t];if(0!==n){if(n){var c=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;b.message="Loading chunk "+t+" failed.\n("+c+": "+i+")",b.name="ChunkLoadError",b.type=c,b.request=i,n[1](b)}r[t]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=c,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var c in t)s.d(n,c,function(e){return t[e]}.bind(null,c));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/mo/",s.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var b=0;b<u.length;b++)e(u[b]);var d=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},1269:function(t,e,n){},"185e":function(t,e,n){"use strict";var c=n("7a23"),i={width:"40",height:"40",viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r=Object(c["i"])("path",{d:"M40 20C40 8.95599 31.044 0 20 0C8.95599 0 0 8.95599 0 20C0 31.044 8.95599 40 20 40C20.1175 40 20.2344 39.9976 20.3516 39.9954V24.4263H16.0547V19.4186H20.3516V15.7336C20.3516 11.46 22.9605 9.13391 26.7728 9.13391C28.5983 9.13391 30.1675 9.27002 30.625 9.33075V13.7973H27.9962C25.9222 13.7973 25.5206 14.783 25.5206 16.2292V19.4186H30.4797L29.8334 24.4263H25.5206V39.2273C33.8803 36.8307 40 29.129 40 20Z",fill:"white"},null,-1);function o(t,e,n,o,a,s){return Object(c["r"])(),Object(c["e"])("svg",i,[r])}var a={name:"Facebook"};a.render=o;e["a"]=a},"2a77":function(t,e,n){"use strict";var c=n("7a23"),i={width:"40",height:"40",viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r=Object(c["i"])("path",{d:"M23.8281 20C23.8281 22.1143 22.1143 23.8281 20 23.8281C17.8857 23.8281 16.1719 22.1143 16.1719 20C16.1719 17.8857 17.8857 16.1719 20 16.1719C22.1143 16.1719 23.8281 17.8857 23.8281 20Z",fill:"white","fill-opacity":"0.5"},null,-1),o=Object(c["i"])("path",{d:"M28.9526 13.2269C28.7686 12.7283 28.475 12.2769 28.0936 11.9064C27.7231 11.525 27.272 11.2314 26.7731 11.0474C26.3684 10.8902 25.7605 10.7031 24.6408 10.6522C23.4296 10.5969 23.0664 10.585 20 10.585C16.9333 10.585 16.5701 10.5966 15.3592 10.6519C14.2395 10.7031 13.6313 10.8902 13.2269 11.0474C12.728 11.2314 12.2766 11.525 11.9064 11.9064C11.525 12.2769 11.2314 12.728 11.0471 13.2269C10.8899 13.6316 10.7028 14.2398 10.6519 15.3595C10.5966 16.5704 10.5847 16.9336 10.5847 20.0003C10.5847 23.0667 10.5966 23.4299 10.6519 24.6411C10.7028 25.7608 10.8899 26.3687 11.0471 26.7734C11.2314 27.2723 11.5247 27.7234 11.9061 28.0939C12.2766 28.4753 12.7277 28.7689 13.2266 28.9529C13.6313 29.1104 14.2395 29.2975 15.3592 29.3484C16.5701 29.4037 16.933 29.4153 19.9997 29.4153C23.0667 29.4153 23.4299 29.4037 24.6405 29.3484C25.7602 29.2975 26.3684 29.1104 26.7731 28.9529C27.7747 28.5666 28.5663 27.775 28.9526 26.7734C29.1098 26.3687 29.2969 25.7608 29.3481 24.6411C29.4034 23.4299 29.415 23.0667 29.415 20.0003C29.415 16.9336 29.4034 16.5704 29.3481 15.3595C29.2972 14.2398 29.1101 13.6316 28.9526 13.2269ZM20 25.8972C16.7429 25.8972 14.1025 23.2571 14.1025 20C14.1025 16.7429 16.7429 14.1028 20 14.1028C23.2568 14.1028 25.8972 16.7429 25.8972 20C25.8972 23.2571 23.2568 25.8972 20 25.8972ZM26.1304 15.2478C25.3693 15.2478 24.7522 14.6307 24.7522 13.8696C24.7522 13.1085 25.3693 12.4915 26.1304 12.4915C26.8915 12.4915 27.5085 13.1085 27.5085 13.8696C27.5082 14.6307 26.8915 15.2478 26.1304 15.2478Z",fill:"white","fill-opacity":"0.5"},null,-1),a=Object(c["i"])("path",{d:"M20 0C8.95599 0 0 8.95599 0 20C0 31.044 8.95599 40 20 40C31.044 40 40 31.044 40 20C40 8.95599 31.044 0 20 0ZM31.4151 24.7348C31.3596 25.9573 31.1652 26.792 30.8813 27.5226C30.2847 29.0652 29.0652 30.2847 27.5226 30.8813C26.7923 31.1652 25.9573 31.3593 24.7351 31.4151C23.5104 31.4709 23.1192 31.4844 20.0003 31.4844C16.8811 31.4844 16.4902 31.4709 15.2652 31.4151C14.043 31.3593 13.208 31.1652 12.4777 30.8813C11.7111 30.593 11.0172 30.141 10.4434 29.5566C9.85931 28.9832 9.40735 28.2889 9.11896 27.5226C8.83514 26.7923 8.64075 25.9573 8.58521 24.7351C8.52875 23.5101 8.51562 23.1189 8.51562 20C8.51562 16.8811 8.52875 16.4899 8.5849 15.2652C8.64044 14.0427 8.83453 13.208 9.11835 12.4774C9.40674 11.7111 9.85901 11.0168 10.4434 10.4434C11.0168 9.85901 11.7111 9.40704 12.4774 9.11865C13.208 8.83484 14.0427 8.64075 15.2652 8.5849C16.4899 8.52905 16.8811 8.51562 20 8.51562C23.1189 8.51562 23.5101 8.52905 24.7348 8.58521C25.9573 8.64075 26.792 8.83484 27.5226 9.11835C28.2889 9.40674 28.9832 9.85901 29.5569 10.4434C30.141 11.0172 30.5933 11.7111 30.8813 12.4774C31.1655 13.208 31.3596 14.0427 31.4154 15.2652C31.4713 16.4899 31.4844 16.8811 31.4844 20C31.4844 23.1189 31.4713 23.5101 31.4151 24.7348Z",fill:"white","fill-opacity":"0.5"},null,-1);function s(t,e,n,s,u,l){return Object(c["r"])(),Object(c["e"])("svg",i,[r,o,a])}var u={name:"Instogram"};u.render=s;e["a"]=u},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23"),i=n("e8b8"),r=n.n(i),o={id:"nav"},a={class:"nav__logo"},s=Object(c["i"])("img",{src:r.a},null,-1),u={class:"nav__menu"},l=Object(c["h"])("MAVIC 2 PRO"),b=Object(c["h"])("О ДРОНЕ"),d=Object(c["h"])("ПРЕИМУЩЕСТВА"),f=Object(c["h"])("ХАРАКТЕРИСТИКИ"),h=Object(c["h"])("ВОПРОСЫ"),O=Object(c["h"])("КОНТАКТЫ"),j={class:"nav__phone"},p=Object(c["i"])("a",{href:"tel:80505676767"},"8 (050) 567 67 67",-1),m={class:"mobile"},C={class:"mobile__menu"},v={class:"mobile__logo"},_=Object(c["i"])("img",{src:r.a},null,-1),g=Object(c["i"])("div",{class:" mobile__btn"},null,-1),w=Object(c["i"])("div",{class:" mobile__btn"},null,-1),y=Object(c["i"])("div",{class:" mobile__btn"},null,-1),k=Object(c["h"])("MAVIC 2 PRO"),B=Object(c["h"])("О ДРОНЕ"),x=Object(c["h"])("ПРЕИМУЩЕСТВА"),M=Object(c["h"])("ХАРАКТЕРИСТИКИ"),P=Object(c["h"])("ВОПРОСЫ"),q=Object(c["h"])("КОНТАКТЫ");function H(t,e,n,i,r,H){var Z=Object(c["w"])("router-link"),A=Object(c["w"])("Button"),E=Object(c["w"])("router-view");return Object(c["r"])(),Object(c["e"])(c["a"],null,[Object(c["i"])("div",o,[Object(c["i"])("div",a,[Object(c["i"])(Z,{to:"/"},{default:Object(c["B"])((function(){return[s]})),_:1})]),Object(c["i"])("div",u,[Object(c["i"])(Z,{to:"/",class:"nav__left"},{default:Object(c["B"])((function(){return[l]})),_:1}),Object(c["i"])(Z,{to:"/drone"},{default:Object(c["B"])((function(){return[b]})),_:1}),Object(c["i"])(Z,{to:"/advantages"},{default:Object(c["B"])((function(){return[d]})),_:1}),Object(c["i"])(Z,{to:"/characteristics"},{default:Object(c["B"])((function(){return[f]})),_:1}),Object(c["i"])(Z,{to:"/questions"},{default:Object(c["B"])((function(){return[h]})),_:1}),Object(c["i"])(Z,{to:"/contacts"},{default:Object(c["B"])((function(){return[O]})),_:1})]),Object(c["i"])("div",j,[Object(c["i"])(A),p])]),Object(c["i"])("div",m,[Object(c["i"])("div",C,[Object(c["i"])("div",v,[Object(c["i"])(Z,{to:"/"},{default:Object(c["B"])((function(){return[_]})),_:1})]),Object(c["i"])(A),Object(c["i"])("div",{class:"mobile__show",onClick:e[1]||(e[1]=function(t){return r.show=!r.show})},[g,w,y])]),Object(c["i"])(c["b"],{name:"fade"},{default:Object(c["B"])((function(){return[r.show?(Object(c["r"])(),Object(c["e"])("div",{key:0,class:"mobile__nav",onClick:e[2]||(e[2]=function(t){return r.show=!1})},[Object(c["i"])(Z,{to:"/",class:"mobile__link"},{default:Object(c["B"])((function(){return[k]})),_:1}),Object(c["i"])(Z,{to:"/drone",class:"mobile__link"},{default:Object(c["B"])((function(){return[B]})),_:1}),Object(c["i"])(Z,{to:"/advantages",class:"mobile__link"},{default:Object(c["B"])((function(){return[x]})),_:1}),Object(c["i"])(Z,{to:"/characteristics",class:"mobile__link"},{default:Object(c["B"])((function(){return[M]})),_:1}),Object(c["i"])(Z,{to:"/questions",class:"mobile__link"},{default:Object(c["B"])((function(){return[P]})),_:1}),Object(c["i"])(Z,{to:"/contacts",class:"mobile__link"},{default:Object(c["B"])((function(){return[q]})),_:1})])):Object(c["f"])("",!0)]})),_:1})]),Object(c["i"])(E)],64)}var Z={class:"button"},A=Object(c["i"])("a",{href:"https://4vision.ru/products/mavic-2-pro.html",class:"button__buy"},"КУПИТЬ",-1);function E(t,e,n,i,r,o){return Object(c["r"])(),Object(c["e"])("div",Z,[A])}var S={name:"Button"};n("7d5e");S.render=E;var V=S,L={name:"Home",components:{Button:V},data:function(){return{show:!1}},props:{msg:Object}};n("64ee");L.render=H;var T=L,I=(n("d3b7"),n("6c02")),F=n("cd53"),N=n.n(F),D=n("936d"),R=n.n(D),J=N.a,Y={class:"home"},K={class:"home__title"},Q=Object(c["i"])("div",{class:"home__img"},[Object(c["i"])("picture",null,[Object(c["i"])("source",{media:"(min-width: 36em)",srcset:J}),Object(c["i"])("img",{src:R.a,alt:"drone"})])],-1),U={class:"home__text"},z={class:""},G={class:""},W={class:"home__icons"},X={href:"https://4vision.ru/products/mavic-2-pro.html",class:"home__link"},$={href:"https://4vision.ru/products/mavic-2-pro.html",class:"home__link"},tt={href:"https://4vision.ru/products/mavic-2-pro.html",class:"home__link"};function et(t,e,n,i,r,o){var a=Object(c["w"])("Facebook"),s=Object(c["w"])("Youtube"),u=Object(c["w"])("Instogram");return Object(c["r"])(),Object(c["e"])("section",Y,[Object(c["i"])("h1",K,Object(c["y"])(r.title),1),Q,Object(c["i"])("p",U,Object(c["y"])(r.text),1),Object(c["i"])("p",z,Object(c["y"])(r.text2),1),Object(c["i"])("p",G,Object(c["y"])(r.text3),1),Object(c["i"])("div",W,[Object(c["i"])("a",X,[Object(c["i"])(a)]),Object(c["i"])("a",$,[Object(c["i"])(s)]),Object(c["i"])("a",tt,[Object(c["i"])(u)])])])}var nt=n("185e"),ct=n("d758"),it=n("2a77"),rt={name:"Home",components:{Facebook:nt["a"],Youtube:ct["a"],Instogram:it["a"]},data:function(){return{title:"Mavic 2 PRO",text:"Квадрокоптер Dji Mavic 2 Pro",text2:"с профессиональной камерой ",text3:"Hasselblad"}}};n("80ed");rt.render=et;var ot=rt,at=[{path:"/",name:"Home",component:ot},{path:"/drone",name:"Drone",component:function(){return n.e("drone").then(n.bind(null,"4c27"))}},{path:"/advantages",name:"Advantages",component:function(){return n.e("about").then(n.bind(null,"77c3"))}},{path:"/characteristics",name:"Characteristics",component:function(){return n.e("characteristics").then(n.bind(null,"275c"))}},{path:"/questions",name:"Questions",component:function(){return n.e("questions").then(n.bind(null,"66ba"))}},{path:"/contacts",name:"Contacts",component:function(){return n.e("contacts").then(n.bind(null,"c93c"))}}],st=Object(I["a"])({history:Object(I["b"])(),routes:at}),ut=st,lt=n("5502"),bt=Object(lt["a"])({state:{},mutations:{},actions:{},modules:{}});Object(c["d"])(T).use(bt).use(ut).mount("#app")},"64ee":function(t,e,n){"use strict";n("762e")},"762e":function(t,e,n){},"7d5e":function(t,e,n){"use strict";n("1269")},"80ed":function(t,e,n){"use strict";n("fd6c")},"936d":function(t,e,n){t.exports=n.p+"img/dronemobile.a20491dd.png"},cd53:function(t,e,n){t.exports=n.p+"img/drone.479177eb.png"},d758:function(t,e,n){"use strict";var c=n("7a23"),i={href:"#"},r=Object(c["i"])("svg",{width:"40",height:"40",viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[Object(c["i"])("path",{d:"M17.5089 23.4939L24.0146 19.7469L17.5089 16V23.4939Z",fill:"white","fill-opacity":"0.5"}),Object(c["i"])("path",{d:"M20 0C8.95599 0 0 8.95599 0 20C0 31.044 8.95599 40 20 40C31.044 40 40 31.044 40 20C40 8.95599 31.044 0 20 0ZM32.4969 20.0204C32.4969 20.0204 32.4969 24.0765 31.9824 26.0324C31.694 27.103 30.8499 27.9471 29.7794 28.2352C27.8235 28.75 20 28.75 20 28.75C20 28.75 12.197 28.75 10.2206 28.2147C9.15009 27.9266 8.30597 27.0822 8.01758 26.0117C7.50275 24.0765 7.50275 20 7.50275 20C7.50275 20 7.50275 15.9442 8.01758 13.9883C8.30566 12.9178 9.17053 12.0529 10.2206 11.7648C12.1765 11.25 20 11.25 20 11.25C20 11.25 27.8235 11.25 29.7794 11.7853C30.8499 12.0734 31.694 12.9178 31.9824 13.9883C32.5177 15.9442 32.4969 20.0204 32.4969 20.0204Z",fill:"white","fill-opacity":"0.5"})],-1);function o(t,e,n,o,a,s){return Object(c["r"])(),Object(c["e"])("a",i,[r])}var a={name:"Facebook"};a.render=o;e["a"]=a},e8b8:function(t,e,n){t.exports=n.p+"img/loggray.ac0f08cc.svg"},fd6c:function(t,e,n){}});
//# sourceMappingURL=app.adef81ee.js.map
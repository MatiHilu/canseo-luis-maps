(function(){"use strict";var e={6639:function(e,t,n){var r=n(9963),a=n(6252);function o(e,t,n,r,o,i){const c=(0,a.up)("router-view"),l=(0,a.up)("footerr");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(c),(0,a.Wm)(l)])}const i=(0,a._)("span",null,"© CanSeo 2023 ",-1),c=[i];function l(e,t){return(0,a.wg)(),(0,a.iD)("footer",null,c)}var s=n(3744);const u={},d=(0,s.Z)(u,[["render",l]]);var m=d,f={name:"App",components:{footerr:m}};const p=(0,s.Z)(f,[["render",o]]);var h=p,b=(n(3734),n(2201)),g=n(9560);const v=[{path:"/lista-paseadores",name:"paseadores",component:()=>Promise.all([n.e(658),n.e(381),n.e(680)]).then(n.bind(n,680)),meta:{requiresAuth:!0}},{path:"/login/clientes",name:"login-cliente",component:()=>Promise.all([n.e(658),n.e(337)]).then(n.bind(n,3337))},{path:"/login/paseadores",name:"login-paseadores",component:()=>Promise.all([n.e(658),n.e(431)]).then(n.bind(n,2431))},{path:"/registro/paseador",name:"add-paseador",component:()=>Promise.all([n.e(658),n.e(130)]).then(n.bind(n,1583))},{path:"/registro/cliente",name:"add-cliente",component:()=>Promise.all([n.e(658),n.e(179)]).then(n.bind(n,5179))},{path:"/reservas-cliente",name:"reservas-cliente",component:()=>Promise.all([n.e(658),n.e(381),n.e(18)]).then(n.bind(n,5018)),meta:{requiresAuth:!0}},{path:"/",alias:"/reservar",name:"add-reserva",component:()=>Promise.all([n.e(658),n.e(381),n.e(12)]).then(n.bind(n,8012)),meta:{requiresAuth:!0}},{path:"/reservas-paseador",name:"reservas-paseador",component:()=>Promise.all([n.e(658),n.e(381),n.e(322)]).then(n.bind(n,1322)),meta:{requiresAuth:!0}},{path:"/paseador/:id",name:"PaseadorIndividual",component:()=>Promise.all([n.e(658),n.e(381),n.e(838)]).then(n.bind(n,1838)),meta:{requiresAuth:!0}},{path:"/perfil/paseador",name:"PerfilPaseador",component:()=>Promise.all([n.e(658),n.e(619)]).then(n.bind(n,7619)),meta:{requiresAuth:!0}},{path:"/perfil/cliente",name:"PerfilCliente",component:()=>Promise.all([n.e(658),n.e(298)]).then(n.bind(n,1298)),meta:{requiresAuth:!0}},{path:"/editar-cliente",name:"EditarCliente",component:()=>Promise.all([n.e(658),n.e(240)]).then(n.bind(n,6240)),meta:{requiresAuth:!0}},{path:"/editar-paseador",name:"EditarPaseador",component:()=>Promise.all([n.e(658),n.e(467)]).then(n.bind(n,7467)),meta:{requiresAuth:!0}},{path:"/cambiar-contrasena/cliente",name:"CambiarContrasenaCliente",component:()=>Promise.all([n.e(658),n.e(234)]).then(n.bind(n,234)),meta:{requiresAuth:!0}},{path:"/cambiar-contrasena/paseador",name:"CambiarContrasenaPaseador",component:()=>Promise.all([n.e(658),n.e(800)]).then(n.bind(n,4800)),meta:{requiresAuth:!0}},{path:"/:catchAll(.*)",name:"NotFound",component:()=>n.e(481).then(n.bind(n,7481))}],y=(0,b.p7)({history:(0,b.PO)(),routes:v});y.beforeEach(((e,t,n)=>{e.meta.requiresAuth&&!g.Z.isAuthenticated()?n({name:"login-cliente"}):n()}));var A=y,P=n(7239);(0,r.ri)(h).use(A).use(P.Z).mount("#app")},9560:function(e,t,n){var r=n(9669),a=n.n(r);class o{static isAuthenticated(){const e=localStorage.getItem("Authorization");return!!e}static setAuthHeader(){const e=localStorage.getItem("Authorization");e&&(a().defaults.headers.common["Authorization"]=`${e}`)}}t.Z=o},7239:function(e,t,n){var r=n(3907);const a=(0,r.MT)({state:{clientId:null,notification:null,message:null,selectedDate:null,selectedTime:null},mutations:{setClientId(e,t){e.clientId=t},clearClientId(e){e.clientId=null},setNotification(e,t){e.notification=t},setMessage(e,t){e.message=t},clearNotification(e){e.notification=null},clearMessage(e){e.message=null},setSelectedDate(e,t){e.selectedDate=t},setSelectedTime(e,t){e.selectedTime=t},clearSelectedDateTime(e){e.selectedDate=null,e.selectedTime=null}},actions:{updateClientId({commit:e},t){e("setClientId",t),setTimeout((()=>{e("clearClientId")}),2592e5)},logout({commit:e}){e("clearClientId"),localStorage.removeItem("Authorization")},setNotification({commit:e},t){e("setNotification",t),setTimeout((()=>{e("clearNotification")}),5e3)},setMessage({commit:e},t){e("setMessage",t),setTimeout((()=>{e("clearMessage")}),5e3)},clearNotification({commit:e}){e("clearNotification")},clearMessage({commit:e}){e("clearMessage")},updateSelectedDateTime({commit:e},{date:t,time:n}){e("setSelectedDate",t),e("setSelectedTime",n)},clearSelectedDateTime({commit:e}){e("clearSelectedDateTime")}},getters:{getClientId(e){return e.clientId},getNotification(e){return e.notification},getMessage(e){return e.message},getSelectedDate(e){return e.selectedDate},getSelectedTime(e){return e.selectedTime}}});t.Z=a}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={id:r,loaded:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}n.m=e,function(){var e=[];n.O=function(t,r,a,o){if(!r){var i=1/0;for(u=0;u<e.length;u++){r=e[u][0],a=e[u][1],o=e[u][2];for(var c=!0,l=0;l<r.length;l++)(!1&o||i>=o)&&Object.keys(n.O).every((function(e){return n.O[e](r[l])}))?r.splice(l--,1):(c=!1,o<i&&(i=o));if(c){e.splice(u--,1);var s=a();void 0!==s&&(t=s)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[r,a,o]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{12:"aaceb704",18:"0d1539b7",130:"b68d84b9",179:"f51fb4b3",234:"ecf67939",240:"c8e3d3f0",298:"cb90f3c4",322:"e83aebce",337:"c4a2aa40",381:"3ba2c0e8",431:"b8c6c4c3",467:"9599a5c6",481:"523f7e00",619:"62fda020",658:"80b25b40",680:"301be7cf",800:"c13238cd",838:"fa1d5382"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{12:"c58e71f1",18:"74eda5ab",130:"1634600f",179:"ecd1356f",234:"ed539910",240:"ac0d66f1",298:"1809d3aa",322:"a4a92a46",337:"9b6b52ce",431:"0e8f47c7",467:"30d2297e",481:"f5f2fade",619:"c586baf1",680:"660e2d69",800:"3a30c0f6",838:"637a8baf"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="canseo:";n.l=function(r,a,o,i){if(e[r])e[r].push(a);else{var c,l;if(void 0!==o)for(var s=document.getElementsByTagName("script"),u=0;u<s.length;u++){var d=s[u];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+o){c=d;break}}c||(l=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,n.nc&&c.setAttribute("nonce",n.nc),c.setAttribute("data-webpack",t+o),c.src=r),e[r]=[a];var m=function(t,n){c.onerror=c.onload=null,clearTimeout(f);var a=e[r];if(delete e[r],c.parentNode&&c.parentNode.removeChild(c),a&&a.forEach((function(e){return e(n)})),t)return t(n)},f=setTimeout(m.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=m.bind(null,c.onerror),c.onload=m.bind(null,c.onload),l&&document.head.appendChild(c)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){n.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,r,a){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var i=function(n){if(o.onerror=o.onload=null,"load"===n.type)r();else{var i=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=i,l.request=c,o.parentNode&&o.parentNode.removeChild(o),a(l)}};return o.onerror=o.onload=i,o.href=t,n?n.parentNode.insertBefore(o,n.nextSibling):document.head.appendChild(o),o},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var a=n[r],o=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(o===e||o===t))return a}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){a=i[r],o=a.getAttribute("data-href");if(o===e||o===t)return a}},r=function(r){return new Promise((function(a,o){var i=n.miniCssF(r),c=n.p+i;if(t(i,c))return a();e(r,c,null,a,o)}))},a={143:0};n.f.miniCss=function(e,t){var n={12:1,18:1,130:1,179:1,234:1,240:1,298:1,322:1,337:1,431:1,467:1,481:1,619:1,680:1,800:1,838:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=r(e).then((function(){a[e]=0}),(function(t){throw delete a[e],t})))}}}(),function(){var e={143:0};n.f.j=function(t,r){var a=n.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else{var o=new Promise((function(n,r){a=e[t]=[n,r]}));r.push(a[2]=o);var i=n.p+n.u(t),c=new Error,l=function(r){if(n.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var o=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;c.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",c.name="ChunkLoadError",c.type=o,c.request=i,a[1](c)}};n.l(i,l,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var a,o,i=r[0],c=r[1],l=r[2],s=0;if(i.some((function(t){return 0!==e[t]}))){for(a in c)n.o(c,a)&&(n.m[a]=c[a]);if(l)var u=l(n)}for(t&&t(r);s<i.length;s++)o=i[s],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(u)},r=self["webpackChunkcanseo"]=self["webpackChunkcanseo"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(6639)}));r=n.O(r)})();
//# sourceMappingURL=app.72a3562f.js.map
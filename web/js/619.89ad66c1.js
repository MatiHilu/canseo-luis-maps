"use strict";(self["webpackChunkcanseo"]=self["webpackChunkcanseo"]||[]).push([[619],{7209:function(e,a,s){var n=s(9669),t=s.n(n);const r=t().create({baseURL:"https://canseo.site/api/api",headers:{"Content-type":"application/json"}});r.interceptors.request.use((e=>{const a=localStorage.getItem("Authorization");return a&&(e.headers.common["Authorization"]=`${a}`),e}),(e=>Promise.reject(e))),a.Z=r},1677:function(e,a,s){var n=s(7209),t=s(9560);const r={getAll(){return t.Z.setAuthHeader(),n.Z.get("/paseadores")},getByBarrio(e,a,s,r){return t.Z.setAuthHeader(),n.Z.get(`/paseadores/by-barrio/${e}?diaSemana=${a}&fecha=${s}&hora=${r}`,{params:{dia_semana:a}})},login(e){return t.Z.setAuthHeader(),n.Z.post("/paseadores/login",e)},get(e){return t.Z.setAuthHeader(),n.Z.get(`/paseadores/${e}`)},create(e){return t.Z.setAuthHeader(),n.Z.post("/paseadores/register",e)},update(e,a){return t.Z.setAuthHeader(),n.Z.put(`/paseadores/${e}`,a)},changePassword(e,a){return t.Z.setAuthHeader(),n.Z.put(`/paseadores/${e}/change-password`,a)},delete(e){return t.Z.setAuthHeader(),n.Z.delete(`/paseadores/${e}`)},deleteAll(){return t.Z.setAuthHeader(),n.Z.delete("/paseadores")}};a.Z=r},4360:function(e,a,s){s.d(a,{Z:function(){return $}});var n=s(6252),t=s(3577);const r=e=>((0,n.dD)("data-v-c2526fdc"),e=e(),(0,n.Cn)(),e),o={key:0},i={class:"menu-mobile-box"},l=r((()=>(0,n._)("img",{src:"https://canseo-vue.vercel.app/uploads/CanSeo-Paseador.png",alt:"CanSeo Paseador"},null,-1))),d=r((()=>(0,n._)("img",{class:"icon",src:"https://canseo-vue.vercel.app/uploads/imagen-hamburguesa.png",alt:"Menú Hamburguesa"},null,-1))),c=[d],u=r((()=>(0,n._)("img",{class:"icon",src:"https://canseo-vue.vercel.app/uploads/imagen-cerrar.png",alt:"Cerrar Menú"},null,-1))),p=[u],m={class:"navbar-nav mr-auto"},g={class:"nav-item"},v={class:"nav-item"},b={class:"navbar-nav"},_={class:"nav-item"},f={key:1,class:"navbar navbar-expand navbar-light"},h=r((()=>(0,n._)("img",{src:"https://canseo-vue.vercel.app/uploads/CanSeo-Paseador.png",alt:"CanSeo"},null,-1))),w={class:"navbar-nav mr-auto mtop-10"},k={class:"nav-item"},Z={class:"nav-item"},M={class:"navbar-nav mtop-10"},C={class:"nav-item"};function z(e,a,s,r,d,u){const z=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("div",null,[d.isMobile?((0,n.wg)(),(0,n.iD)("div",o,[(0,n._)("div",i,[(0,n.Wm)(z,{to:"/reservas-paseador",class:"navbar-brand img-canseo-mobile"},{default:(0,n.w5)((()=>[l])),_:1}),(0,n._)("div",{onClick:a[0]||(a[0]=(...e)=>u.toggleMobileMenu&&u.toggleMobileMenu(...e)),class:"menu-button"},c)]),(0,n._)("div",{class:(0,t.C_)({"mobile-menu":!0,open:d.isMobileMenuOpen})},[(0,n._)("div",{onClick:a[1]||(a[1]=(...e)=>u.toggleMobileMenu&&u.toggleMobileMenu(...e)),class:"close-button"},p),(0,n._)("div",m,[(0,n._)("li",g,[(0,n.Wm)(z,{to:"/reservas-paseador",class:"nav-link"},{default:(0,n.w5)((()=>[(0,n.Uk)("Mis paseos")])),_:1})]),(0,n._)("li",v,[(0,n.Wm)(z,{to:"/perfil/paseador",class:"nav-link"},{default:(0,n.w5)((()=>[(0,n.Uk)("Perfil")])),_:1})])]),(0,n._)("div",b,[(0,n._)("li",_,[(0,n._)("a",{class:"nav-link",onClick:a[2]||(a[2]=(...e)=>u.logout&&u.logout(...e))},"Cerrar sesión")])])],2)])):((0,n.wg)(),(0,n.iD)("nav",f,[(0,n.Wm)(z,{to:"/reservas-paseador",class:"navbar-brand"},{default:(0,n.w5)((()=>[h])),_:1}),(0,n._)("div",w,[(0,n._)("li",k,[(0,n.Wm)(z,{to:"/reservas-paseador",class:"nav-link"},{default:(0,n.w5)((()=>[(0,n.Uk)("Mis paseos")])),_:1})]),(0,n._)("li",Z,[(0,n.Wm)(z,{to:"/perfil/paseador",class:"nav-link"},{default:(0,n.w5)((()=>[(0,n.Uk)("Perfil")])),_:1})])]),(0,n._)("div",M,[(0,n._)("li",C,[(0,n._)("a",{class:"nav-link",onClick:a[3]||(a[3]=(...e)=>u.logout&&u.logout(...e))},"Cerrar sesión")])])]))])}s(7658);var D=s(7239),P={name:"NavPaseador",data(){return{isMobileMenuOpen:!1,isMobile:window.innerWidth<=768}},created(){window.addEventListener("resize",this.handleResize)},unmounted(){window.removeEventListener("resize",this.handleResize)},methods:{logout(){D.Z.dispatch("logout"),D.Z.commit("setNotification","success"),D.Z.commit("setMessage","Sesión cerrada correctamente"),this.$router.push("/login/paseadores"),setTimeout((()=>{D.Z.commit("setNotification",null),D.Z.commit("setMessage",null)}),1e4)},handleResize(){this.isMobile=window.innerWidth<=768},toggleMobileMenu(){this.isMobileMenuOpen=!this.isMobileMenuOpen}}},A=s(3744);const H=(0,A.Z)(P,[["render",z],["__scopeId","data-v-c2526fdc"]]);var $=H},7619:function(e,a,s){s.r(a),s.d(a,{default:function(){return Z}});var n=s(6252),t=s(3577);const r=e=>((0,n.dD)("data-v-41d3fd92"),e=e(),(0,n.Cn)(),e),o={class:"general"},i=r((()=>(0,n._)("h1",null,"Mi perfil",-1))),l={class:"img-usuario"},d=["src"],c={key:0},u=r((()=>(0,n._)("br",null,null,-1))),p={key:0},m=r((()=>(0,n._)("button",null,"Editar perfil",-1))),g=r((()=>(0,n._)("button",null,"Cambiar contraseña",-1)));function v(e,a,s,r,v,b){const _=(0,n.up)("NavPaseador"),f=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(_),(0,n._)("div",o,[b.notification?((0,n.wg)(),(0,n.iD)("div",{key:0,class:(0,t.C_)(["notification",b.notificationClass])},(0,t.zw)(b.message),3)):(0,n.kq)("",!0),i,(0,n._)("div",null,[(0,n._)("div",l,[(0,n._)("p",null,"Nombre: "+(0,t.zw)(v.paseador.nombre)+" "+(0,t.zw)(v.paseador.apellido),1),(0,n._)("img",{class:"img-perfil",src:b.getImageUrl(v.paseador.foto_perfil||"/uploads/default-profile.png"),alt:"Foto de perfil"},null,8,d)]),(0,n._)("p",null,"Email: "+(0,t.zw)(v.paseador.email),1),(0,n._)("p",null,"Teléfono: "+(0,t.zw)(v.paseador.telefono),1),(0,n._)("p",null,"Dirección: "+(0,t.zw)(v.paseador.direccion)+", "+(0,t.zw)(v.paseador.nombre_barrio),1),(0,n._)("p",null,"Descripción: "+(0,t.zw)(v.paseador.descripcion),1),(0,n._)("p",null,[(0,n.Uk)("Días de trabajo: "),0==v.paseador.dias_disponibles?((0,n.wg)(),(0,n.iD)("span",c,[(0,n.Uk)("No seleccionado"),u,(0,n.Uk)("(Para poder aparecer en las busquedas tenés que tener al menos 1 día disponible para trabajar)")])):((0,n.wg)(!0),(0,n.iD)(n.HY,{key:1},(0,n.Ko)(v.paseador.dias_disponibles,((e,a)=>((0,n.wg)(),(0,n.iD)("span",{key:a},[(0,n.Uk)((0,t.zw)("domingo"===e?"Domingo":"lunes"===e?"Lunes":"martes"===e?"Martes":"miercoles"===e?"Miércoles":"jueves"===e?"Jueves":"viernes"===e?"Viernes":"sabado"===e?"Sábado":e)+" ",1),a!==v.paseador.dias_disponibles.length-1?((0,n.wg)(),(0,n.iD)("span",p,"| ")):(0,n.kq)("",!0)])))),128))])]),(0,n.Wm)(f,{to:"/editar-paseador/"},{default:(0,n.w5)((()=>[m])),_:1}),(0,n.Wm)(f,{class:"cambiar-contrasena",to:"/cambiar-contrasena/paseador"},{default:(0,n.w5)((()=>[g])),_:1})])],64)}var b=s(1677),_=s(7239),f=s(4360),h={name:"PerfilPaseador",components:{NavPaseador:f.Z},data(){return{paseador:{}}},mounted(){const e=_.Z.getters.getClientId;this.fetchPaseador(e)},computed:{notification(){return _.Z.getters.getNotification},message(){return _.Z.getters.getMessage},notificationClass(){return{error:"error"===this.notification,success:"success"===this.notification}}},methods:{fetchPaseador(e){b.Z.get(e).then((e=>{this.paseador=e.data})).catch((e=>{console.log("Error al obtener el perfil del paseador: ",e)}))},getImageUrl(e){if(e){const a=e.replace("vue","").replace("public",""),s=window.location.origin;return`${s}/${a}`}}}},w=s(3744);const k=(0,w.Z)(h,[["render",v],["__scopeId","data-v-41d3fd92"]]);var Z=k}}]);
//# sourceMappingURL=619.89ad66c1.js.map
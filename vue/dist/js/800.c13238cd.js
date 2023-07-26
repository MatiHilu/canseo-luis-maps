"use strict";(self["webpackChunkcanseo"]=self["webpackChunkcanseo"]||[]).push([[800],{7209:function(e,s,a){var r=a(9669),o=a.n(r);const t=o().create({baseURL:"https://canseo.site/api/api",headers:{"Content-type":"application/json"}});t.interceptors.request.use((e=>{const s=localStorage.getItem("Authorization");return s&&(e.headers.common["Authorization"]=`${s}`),e}),(e=>Promise.reject(e))),s.Z=t},1677:function(e,s,a){var r=a(7209),o=a(9560);const t={getAll(){return o.Z.setAuthHeader(),r.Z.get("/paseadores")},getByBarrio(e,s,a,t){return o.Z.setAuthHeader(),r.Z.get(`/paseadores/by-barrio/${e}?diaSemana=${s}&fecha=${a}&hora=${t}`,{params:{dia_semana:s}})},login(e){return o.Z.setAuthHeader(),r.Z.post("/paseadores/login",e)},get(e){return o.Z.setAuthHeader(),r.Z.get(`/paseadores/${e}`)},create(e){return o.Z.setAuthHeader(),r.Z.post("/paseadores/register",e)},update(e,s){return o.Z.setAuthHeader(),r.Z.put(`/paseadores/${e}`,s)},changePassword(e,s){return o.Z.setAuthHeader(),r.Z.put(`/paseadores/${e}/change-password`,s)},delete(e){return o.Z.setAuthHeader(),r.Z.delete(`/paseadores/${e}`)},deleteAll(){return o.Z.setAuthHeader(),r.Z.delete("/paseadores")}};s.Z=t},4360:function(e,s,a){a.d(s,{Z:function(){return $}});var r=a(6252),o=a(3577);const t=e=>((0,r.dD)("data-v-c2526fdc"),e=e(),(0,r.Cn)(),e),i={key:0},n={class:"menu-mobile-box"},l=t((()=>(0,r._)("img",{src:"https://canseo-vue.vercel.app/uploads/CanSeo-Paseador.png",alt:"CanSeo Paseador"},null,-1))),d=t((()=>(0,r._)("img",{class:"icon",src:"https://canseo-vue.vercel.app/uploads/imagen-hamburguesa.png",alt:"Menú Hamburguesa"},null,-1))),c=[d],u=t((()=>(0,r._)("img",{class:"icon",src:"https://canseo-vue.vercel.app/uploads/imagen-cerrar.png",alt:"Cerrar Menú"},null,-1))),p=[u],w={class:"navbar-nav mr-auto"},m={class:"nav-item"},g={class:"nav-item"},h={class:"navbar-nav"},v={class:"nav-item"},f={key:1,class:"navbar navbar-expand navbar-light"},b=t((()=>(0,r._)("img",{src:"https://canseo-vue.vercel.app/uploads/CanSeo-Paseador.png",alt:"CanSeo"},null,-1))),P={class:"navbar-nav mr-auto mtop-10"},C={class:"nav-item"},_={class:"nav-item"},Z={class:"navbar-nav mtop-10"},y={class:"nav-item"};function M(e,s,a,t,d,u){const M=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",null,[d.isMobile?((0,r.wg)(),(0,r.iD)("div",i,[(0,r._)("div",n,[(0,r.Wm)(M,{to:"/reservas-paseador",class:"navbar-brand img-canseo-mobile"},{default:(0,r.w5)((()=>[l])),_:1}),(0,r._)("div",{onClick:s[0]||(s[0]=(...e)=>u.toggleMobileMenu&&u.toggleMobileMenu(...e)),class:"menu-button"},c)]),(0,r._)("div",{class:(0,o.C_)({"mobile-menu":!0,open:d.isMobileMenuOpen})},[(0,r._)("div",{onClick:s[1]||(s[1]=(...e)=>u.toggleMobileMenu&&u.toggleMobileMenu(...e)),class:"close-button"},p),(0,r._)("div",w,[(0,r._)("li",m,[(0,r.Wm)(M,{to:"/reservas-paseador",class:"nav-link"},{default:(0,r.w5)((()=>[(0,r.Uk)("Mis paseos")])),_:1})]),(0,r._)("li",g,[(0,r.Wm)(M,{to:"/perfil/paseador",class:"nav-link"},{default:(0,r.w5)((()=>[(0,r.Uk)("Perfil")])),_:1})])]),(0,r._)("div",h,[(0,r._)("li",v,[(0,r._)("a",{class:"nav-link",onClick:s[2]||(s[2]=(...e)=>u.logout&&u.logout(...e))},"Cerrar sesión")])])],2)])):((0,r.wg)(),(0,r.iD)("nav",f,[(0,r.Wm)(M,{to:"/reservas-paseador",class:"navbar-brand"},{default:(0,r.w5)((()=>[b])),_:1}),(0,r._)("div",P,[(0,r._)("li",C,[(0,r.Wm)(M,{to:"/reservas-paseador",class:"nav-link"},{default:(0,r.w5)((()=>[(0,r.Uk)("Mis paseos")])),_:1})]),(0,r._)("li",_,[(0,r.Wm)(M,{to:"/perfil/paseador",class:"nav-link"},{default:(0,r.w5)((()=>[(0,r.Uk)("Perfil")])),_:1})])]),(0,r._)("div",Z,[(0,r._)("li",y,[(0,r._)("a",{class:"nav-link",onClick:s[3]||(s[3]=(...e)=>u.logout&&u.logout(...e))},"Cerrar sesión")])])]))])}a(7658);var k=a(7239),N={name:"NavPaseador",data(){return{isMobileMenuOpen:!1,isMobile:window.innerWidth<=768}},created(){window.addEventListener("resize",this.handleResize)},unmounted(){window.removeEventListener("resize",this.handleResize)},methods:{logout(){k.Z.dispatch("logout"),k.Z.commit("setNotification","success"),k.Z.commit("setMessage","Sesión cerrada correctamente"),this.$router.push("/login/paseadores"),setTimeout((()=>{k.Z.commit("setNotification",null),k.Z.commit("setMessage",null)}),1e4)},handleResize(){this.isMobile=window.innerWidth<=768},toggleMobileMenu(){this.isMobileMenuOpen=!this.isMobileMenuOpen}}},A=a(3744);const D=(0,A.Z)(N,[["render",M],["__scopeId","data-v-c2526fdc"]]);var $=D},4800:function(e,s,a){a.r(s),a.d(s,{default:function(){return z}});var r=a(6252),o=a(3577),t=a(9963);const i=e=>((0,r.dD)("data-v-50bf5091"),e=e(),(0,r.Cn)(),e),n={class:"general"},l={class:"password-form"},d=i((()=>(0,r._)("h2",null,"Cambiar Contraseña",-1))),c={class:"form-group password-input"},u=i((()=>(0,r._)("label",{for:"current-password"},"Contraseña Actual:",-1))),p=["type"],w={key:0,src:"https://canseo-vue.vercel.app/uploads/show-password.png",alt:"Mostrar contraseña"},m={key:1,src:"https://canseo-vue.vercel.app/uploads/hide-password.png",alt:"Ocultar contraseña"},g={class:"form-group password-input"},h=i((()=>(0,r._)("label",{for:"new-password"},"Nueva Contraseña:",-1))),v=["type"],f={key:0,src:"https://canseo-vue.vercel.app/uploads/show-password.png",alt:"Mostrar contraseña"},b={key:1,src:"https://canseo-vue.vercel.app/uploads/hide-password.png",alt:"Ocultar contraseña"},P={class:"form-group password-input"},C=i((()=>(0,r._)("label",{for:"confirm-password"},"Confirmar Contraseña:",-1))),_=["type"],Z={key:0,src:"https://canseo-vue.vercel.app/uploads/show-password.png",alt:"Mostrar contraseña"},y={key:1,src:"https://canseo-vue.vercel.app/uploads/hide-password.png",alt:"Ocultar contraseña"},M=i((()=>(0,r._)("button",{type:"submit"},"Guardar Cambios",-1))),k={key:0,class:"error-message"};function N(e,s,a,i,N,A){const D=(0,r.up)("NavPaseador");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(D),(0,r._)("div",n,[A.notification?((0,r.wg)(),(0,r.iD)("div",{key:0,class:(0,o.C_)(["notification",A.notificationClass])},(0,o.zw)(A.message),3)):(0,r.kq)("",!0),(0,r._)("div",l,[d,(0,r._)("form",{onSubmit:s[6]||(s[6]=(0,t.iM)(((...e)=>A.submitForm&&A.submitForm(...e)),["prevent"]))},[(0,r._)("div",c,[u,(0,r.wy)((0,r._)("input",{id:"current-password","onUpdate:modelValue":s[0]||(s[0]=e=>N.currentPassword=e),type:A.currentPasswordFieldType,required:"",placeholder:"Contraseña actual"},null,8,p),[[t.YZ,N.currentPassword]]),(0,r._)("span",{type:"button",onClick:s[1]||(s[1]=(...e)=>A.toggleCurrentPasswordVisibility&&A.toggleCurrentPasswordVisibility(...e))},[N.showCurrentPassword?((0,r.wg)(),(0,r.iD)("img",w)):((0,r.wg)(),(0,r.iD)("img",m))])]),(0,r._)("div",g,[h,(0,r.wy)((0,r._)("input",{id:"new-password","onUpdate:modelValue":s[2]||(s[2]=e=>N.newPassword=e),type:A.newPasswordFieldType,required:"",placeholder:"Nueva contraseña"},null,8,v),[[t.YZ,N.newPassword]]),(0,r._)("span",{type:"button",onClick:s[3]||(s[3]=(...e)=>A.toggleNewPasswordVisibility&&A.toggleNewPasswordVisibility(...e))},[N.showNewPassword?((0,r.wg)(),(0,r.iD)("img",f)):((0,r.wg)(),(0,r.iD)("img",b))])]),(0,r._)("div",P,[C,(0,r.wy)((0,r._)("input",{id:"confirm-password","onUpdate:modelValue":s[4]||(s[4]=e=>N.confirmPassword=e),type:A.confirmPasswordFieldType,required:"",placeholder:"Confirmar contraseña"},null,8,_),[[t.YZ,N.confirmPassword]]),(0,r._)("span",{type:"button",onClick:s[5]||(s[5]=(...e)=>A.toggleConfirmPasswordVisibility&&A.toggleConfirmPasswordVisibility(...e))},[N.showConfirmPassword?((0,r.wg)(),(0,r.iD)("img",Z)):((0,r.wg)(),(0,r.iD)("img",y))])]),M,N.errorMessage?((0,r.wg)(),(0,r.iD)("p",k,(0,o.zw)(N.errorMessage),1)):(0,r.kq)("",!0)],32)])])],64)}a(7658);var A=a(1677),D=a(7239),$=a(4360),V={name:"CambiarContrasenalPaseador",components:{NavPaseador:$.Z},data(){return{currentPassword:"",newPassword:"",confirmPassword:"",errorMessage:"",showCurrentPassword:!1,showNewPassword:!1,showConfirmPassword:!1}},computed:{notification(){return D.Z.getters.getNotification},message(){return D.Z.getters.getMessage},notificationClass(){return{error:"error"===this.notification,success:"success"===this.notification}},currentPasswordFieldType(){return this.showCurrentPassword?"text":"password"},newPasswordFieldType(){return this.showNewPassword?"text":"password"},confirmPasswordFieldType(){return this.showConfirmPassword?"text":"password"}},methods:{submitForm(){if(this.newPassword!==this.confirmPassword)return D.Z.commit("setNotification","error"),D.Z.commit("setMessage","Las contraseñas no coinciden"),this.$router.push("/cambiar-contrasena/paseador"),void setTimeout((()=>{D.Z.commit("setNotification",null),D.Z.commit("setMessage",null)}),5e3);const e=D.Z.getters.getClientId,s={currentPassword:this.currentPassword,newPassword:this.newPassword,confirmPassword:this.confirmPassword};A.Z.changePassword(e,s).then((()=>{D.Z.commit("setNotification","success"),D.Z.commit("setMessage","Contraseña cambiada con éxito"),this.$router.push("/perfil/paseador"),setTimeout((()=>{D.Z.commit("setNotification",null),D.Z.commit("setMessage",null)}),5e3)})).catch((e=>{console.log("Error al cambiar la contraseña del paseador: ",e),D.Z.commit("setNotification","error"),D.Z.commit("setMessage","Error al cambiar la contraseña"),this.$router.push("/cambiar-contrasena/paseador"),setTimeout((()=>{D.Z.commit("setNotification",null),D.Z.commit("setMessage",null)}),5e3)}))},toggleCurrentPasswordVisibility(){this.showCurrentPassword=!this.showCurrentPassword},toggleNewPasswordVisibility(){this.showNewPassword=!this.showNewPassword},toggleConfirmPasswordVisibility(){this.showConfirmPassword=!this.showConfirmPassword}}},H=a(3744);const T=(0,H.Z)(V,[["render",N],["__scopeId","data-v-50bf5091"]]);var z=T}}]);
//# sourceMappingURL=800.c13238cd.js.map
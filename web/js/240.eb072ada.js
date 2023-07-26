"use strict";(self["webpackChunkcanseo"]=self["webpackChunkcanseo"]||[]).push([[240],{7209:function(e,t,a){var i=a(9669),n=a.n(i);const l=n().create({baseURL:"https://canseo.site/api",headers:{"Content-type":"application/json"}});l.interceptors.request.use((e=>{const t=localStorage.getItem("Authorization");return t&&(e.headers.common["Authorization"]=`${t}`),e}),(e=>Promise.reject(e))),t.Z=l},2498:function(e,t,a){var i=a(7209);const n={getAll(){return i.Z.get("/barrios")},get(e){return i.Z.get(`/barrios/${e}`)}};t.Z=n},5712:function(e,t,a){var i=a(7209),n=a(9560);const l={getAll(){return n.Z.setAuthHeader(),i.Z.get("/clientes")},login(e){return n.Z.setAuthHeader(),i.Z.post("/clientes/login",e)},get(e){return n.Z.setAuthHeader(),i.Z.get(`/clientes/${e}`)},create(e){return n.Z.setAuthHeader(),i.Z.post("/clientes/register",e)},update(e,t){return n.Z.setAuthHeader(),i.Z.put(`/clientes/${e}`,t)},changePassword(e,t){return n.Z.setAuthHeader(),i.Z.put(`/clientes/${e}/change-password`,t)},delete(e){return n.Z.setAuthHeader(),i.Z.delete(`/clientes/${e}`)},deleteAll(){return n.Z.setAuthHeader(),i.Z.delete("/clientes")}};t.Z=l},8541:function(e,t,a){var i=a(7209);const n={getAll(){return i.Z.get("/razas")},get(e){return i.Z.get(`/razas/${e}`)}};t.Z=n},6240:function(e,t,a){a.r(t),a.d(t,{default:function(){return V}});var i=a(6252),n=a(3577),l=a(9963);const o=e=>((0,i.dD)("data-v-3daa7ddf"),e=e(),(0,i.Cn)(),e),r={class:"general"},s=o((()=>(0,i._)("h1",null,"Editar perfil",-1))),d={class:"form-group"},u=o((()=>(0,i._)("label",{for:"nombre"},"Nombre:",-1))),c={class:"form-group"},p=o((()=>(0,i._)("label",{for:"apellido"},"Apellido:",-1))),m={class:"form-group"},f=o((()=>(0,i._)("label",{for:"email"},"Email:",-1))),g={class:"form-group"},v=o((()=>(0,i._)("label",{for:"telefono"},"Teléfono:",-1))),b={class:"form-group"},_=o((()=>(0,i._)("label",{for:"direccion"},"Dirección:",-1))),h={class:"form-group"},C=o((()=>(0,i._)("label",{for:"barrio"},"Barrio:",-1))),Z=["value"],w={class:"form-group"},D=o((()=>(0,i._)("label",{for:"nombre_perro"},"Nombre del Perro:",-1))),k={class:"form-group"},M=o((()=>(0,i._)("label",{for:"barrio"},"Raza:",-1))),z=["value"],y={class:"form-group"},U=o((()=>(0,i._)("label",{for:"foto_perfil"},"Foto de perfil:",-1))),A=o((()=>(0,i._)("div",{class:"caja-flex"},[(0,i._)("button",{type:"submit"},"Guardar cambios")],-1)));function H(e,t,a,o,H,N){const W=(0,i.up)("NavCliente"),$=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(W),(0,i._)("div",r,[N.notification?((0,i.wg)(),(0,i.iD)("div",{key:0,class:(0,n.C_)(["notification",N.notificationClass])},(0,n.zw)(N.message),3)):(0,i.kq)("",!0),s,(0,i._)("form",{onSubmit:t[9]||(t[9]=(0,l.iM)(((...e)=>N.updateProfile&&N.updateProfile(...e)),["prevent"]))},[(0,i._)("div",d,[u,(0,i.wy)((0,i._)("input",{type:"text",id:"nombre","onUpdate:modelValue":t[0]||(t[0]=e=>H.updatedClienteData.nombre=e),required:""},null,512),[[l.nr,H.updatedClienteData.nombre]])]),(0,i._)("div",c,[p,(0,i.wy)((0,i._)("input",{type:"text",id:"apellido","onUpdate:modelValue":t[1]||(t[1]=e=>H.updatedClienteData.apellido=e),required:""},null,512),[[l.nr,H.updatedClienteData.apellido]])]),(0,i._)("div",m,[f,(0,i.wy)((0,i._)("input",{type:"email",id:"email","onUpdate:modelValue":t[2]||(t[2]=e=>H.updatedClienteData.email=e),required:""},null,512),[[l.nr,H.updatedClienteData.email]])]),(0,i._)("div",g,[v,(0,i.wy)((0,i._)("input",{type:"text",id:"telefono","onUpdate:modelValue":t[3]||(t[3]=e=>H.updatedClienteData.telefono=e),required:""},null,512),[[l.nr,H.updatedClienteData.telefono]])]),(0,i._)("div",b,[_,(0,i.wy)((0,i._)("input",{type:"text",id:"direccion","onUpdate:modelValue":t[4]||(t[4]=e=>H.updatedClienteData.direccion=e),required:""},null,512),[[l.nr,H.updatedClienteData.direccion]])]),(0,i._)("div",h,[C,(0,i.wy)((0,i._)("select",{id:"barrio","onUpdate:modelValue":t[5]||(t[5]=e=>H.updatedClienteData.id_barrio=e),required:""},[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(H.barrios,(e=>((0,i.wg)(),(0,i.iD)("option",{value:e.id,key:e.id},(0,n.zw)(e.nombre),9,Z)))),128))],512),[[l.bM,H.updatedClienteData.id_barrio]])]),(0,i._)("div",w,[D,(0,i.wy)((0,i._)("input",{type:"text",id:"nombre_perro","onUpdate:modelValue":t[6]||(t[6]=e=>H.updatedClienteData.nombre_perro=e),required:""},null,512),[[l.nr,H.updatedClienteData.nombre_perro]])]),(0,i._)("div",k,[M,(0,i.wy)((0,i._)("select",{id:"barrio","onUpdate:modelValue":t[7]||(t[7]=e=>H.updatedClienteData.id_raza=e),required:""},[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(H.razas,(e=>((0,i.wg)(),(0,i.iD)("option",{value:e.id,key:e.id},(0,n.zw)(e.nombre),9,z)))),128))],512),[[l.bM,H.updatedClienteData.id_raza]])]),(0,i._)("div",y,[U,(0,i._)("input",{type:"file",id:"foto_perfil",onChange:t[8]||(t[8]=(...e)=>N.handleFileUpload&&N.handleFileUpload(...e))},null,32)]),A,(0,i._)("span",null,[(0,i.Wm)($,{to:"/perfil/cliente",class:"nav-link"},{default:(0,i.w5)((()=>[(0,i.Uk)("Cancelar")])),_:1})])],32)])],64)}a(7658);var N=a(5712),W=a(2498),$=a(8541),E=a(7239),R=a(1012),q={name:"PerfilCliente",components:{NavCliente:R.Z},data(){return{cliente:{},updatedClienteData:{},barrios:[],razas:[],file:null}},mounted(){const e=E.Z.getters.getClientId;this.fetchCliente(e),this.fetchBarrios(),this.fetchRazas()},computed:{notification(){return E.Z.getters.getNotification},message(){return E.Z.getters.getMessage},notificationClass(){return{error:"error"===this.notification,success:"success"===this.notification}}},methods:{handleFileUpload(e){this.updatedClienteData.foto_perfil=e.target.files[0]},fetchCliente(e){N.Z.get(e).then((e=>{this.cliente=e.data,this.updatedClienteData={...this.cliente}})).catch((e=>{console.log("Error al obtener el perfil del cliente: ",e)}))},fetchBarrios(){W.Z.getAll().then((e=>{this.barrios=e.data})).catch((e=>{console.log("Error al obtener la lista de barrios: ",e)}))},fetchRazas(){$.Z.getAll().then((e=>{this.razas=e.data})).catch((e=>{console.log("Error al obtener la lista de razas: ",e)}))},updateProfile(){const e=E.Z.getters.getClientId,t=new FormData;t.append("nombre",this.updatedClienteData.nombre),t.append("apellido",this.updatedClienteData.apellido),t.append("email",this.updatedClienteData.email),t.append("telefono",this.updatedClienteData.telefono),t.append("direccion",this.updatedClienteData.direccion),t.append("id_barrio",this.updatedClienteData.id_barrio),t.append("nombre_perro",this.updatedClienteData.nombre_perro),t.append("id_raza",this.updatedClienteData.id_raza),t.append("foto_perfil",this.updatedClienteData.foto_perfil),console.log("Datos enviados al backend:",Object.fromEntries(t)),N.Z.update(e,t).then((()=>{const e=this.updatedClienteData.id_barrio,t=this.barrios.find((t=>t.id===e));this.cliente.nombre_barrio=t?t.nombre:"",this.$router.push("/perfil/cliente"),E.Z.commit("setNotification","success"),E.Z.commit("setMessage","Perfil Editado con éxito"),setTimeout((()=>{E.Z.commit("setNotification",null),E.Z.commit("setMessage",null)}),5e3)})).catch((e=>{console.log("Error al actualizar el perfil del cliente: ",e),E.Z.commit("setNotification","error"),E.Z.commit("setMessage","Error al editar el perfil"),this.$router.push("/editar-cliente/"),setTimeout((()=>{E.Z.commit("setNotification",null),E.Z.commit("setMessage",null)}),5e3)}))},getImageUrl(e){if(e){const t=e.replace("vue","").replace("public",""),a=window.location.origin;return`${a}/${t}`}}}},P=a(3744);const x=(0,P.Z)(q,[["render",H],["__scopeId","data-v-3daa7ddf"]]);var V=x},1012:function(e,t,a){a.d(t,{Z:function(){return W}});var i=a(6252),n=a(3577);const l=e=>((0,i.dD)("data-v-2293848b"),e=e(),(0,i.Cn)(),e),o={key:0},r={class:"menu-mobile-box"},s=l((()=>(0,i._)("img",{src:"https://canseo-vue.vercel.app/uploads/CanSeo.png",alt:"CanSeo"},null,-1))),d=l((()=>(0,i._)("img",{class:"icon",src:"https://canseo-vue.vercel.app/uploads/imagen-hamburguesa.png",alt:"Menú Hamburguesa"},null,-1))),u=[d],c=l((()=>(0,i._)("img",{class:"icon",src:"https://canseo-vue.vercel.app/uploads/imagen-cerrar.png",alt:"Cerrar Menú"},null,-1))),p=[c],m={class:"navbar-nav mr-auto"},f={class:"nav-item"},g={class:"nav-item"},v={class:"nav-item"},b={class:"navbar-nav"},_={class:"nav-item"},h={key:1,class:"navbar navbar-expand navbar-light"},C=l((()=>(0,i._)("img",{src:"https://canseo-vue.vercel.app/uploads/CanSeo.png",alt:"CanSeo"},null,-1))),Z={class:"navbar-nav mr-auto mtop-10"},w={class:"nav-item"},D={class:"nav-item"},k={class:"nav-item"},M={class:"navbar-nav mtop-10"},z={class:"nav-item"};function y(e,t,a,l,d,c){const y=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("div",null,[d.isMobile?((0,i.wg)(),(0,i.iD)("div",o,[(0,i._)("div",r,[(0,i.Wm)(y,{to:"/",class:"navbar-brand img-canseo-mobile"},{default:(0,i.w5)((()=>[s])),_:1}),(0,i._)("div",{onClick:t[0]||(t[0]=(...e)=>c.toggleMobileMenu&&c.toggleMobileMenu(...e)),class:"menu-button"},u)]),(0,i._)("div",{class:(0,n.C_)({"mobile-menu":!0,open:d.isMobileMenuOpen})},[(0,i._)("div",{onClick:t[1]||(t[1]=(...e)=>c.toggleMobileMenu&&c.toggleMobileMenu(...e)),class:"close-button"},p),(0,i._)("div",m,[(0,i._)("li",f,[(0,i.Wm)(y,{to:"/",class:"nav-link"},{default:(0,i.w5)((()=>[(0,i.Uk)("Reservar")])),_:1})]),(0,i._)("li",g,[(0,i.Wm)(y,{to:"/reservas-cliente",class:"nav-link"},{default:(0,i.w5)((()=>[(0,i.Uk)("Reservas")])),_:1})]),(0,i._)("li",v,[(0,i.Wm)(y,{to:"/perfil/cliente",class:"nav-link"},{default:(0,i.w5)((()=>[(0,i.Uk)("Perfil")])),_:1})])]),(0,i._)("div",b,[(0,i._)("li",_,[(0,i._)("a",{class:"nav-link",onClick:t[2]||(t[2]=(...e)=>c.logout&&c.logout(...e))},"Cerrar sesión")])])],2)])):((0,i.wg)(),(0,i.iD)("nav",h,[(0,i.Wm)(y,{to:"/",class:"navbar-brand"},{default:(0,i.w5)((()=>[C])),_:1}),(0,i._)("div",Z,[(0,i._)("li",w,[(0,i.Wm)(y,{to:"/",class:"nav-link"},{default:(0,i.w5)((()=>[(0,i.Uk)("Reservar")])),_:1})]),(0,i._)("li",D,[(0,i.Wm)(y,{to:"/reservas-cliente",class:"nav-link"},{default:(0,i.w5)((()=>[(0,i.Uk)("Reservas")])),_:1})]),(0,i._)("li",k,[(0,i.Wm)(y,{to:"/perfil/cliente",class:"nav-link"},{default:(0,i.w5)((()=>[(0,i.Uk)("Perfil")])),_:1})])]),(0,i._)("div",M,[(0,i._)("li",z,[(0,i._)("a",{class:"nav-link",onClick:t[3]||(t[3]=(...e)=>c.logout&&c.logout(...e))},"Cerrar sesión")])])]))])}a(7658);var U=a(7239),A={name:"NavCliente",data(){return{isMobileMenuOpen:!1,isMobile:window.innerWidth<=768}},created(){window.addEventListener("resize",this.handleResize)},unmounted(){window.removeEventListener("resize",this.handleResize)},methods:{logout(){U.Z.dispatch("logout"),U.Z.commit("setNotification","success"),U.Z.commit("setMessage","Sesión cerrada correctamente"),this.$router.push("/login/clientes"),setTimeout((()=>{U.Z.commit("setNotification",null),U.Z.commit("setMessage",null)}),1e4)},handleResize(){this.isMobile=window.innerWidth<=768},toggleMobileMenu(){this.isMobileMenuOpen=!this.isMobileMenuOpen}}},H=a(3744);const N=(0,H.Z)(A,[["render",y],["__scopeId","data-v-2293848b"]]);var W=N}}]);
//# sourceMappingURL=240.eb072ada.js.map
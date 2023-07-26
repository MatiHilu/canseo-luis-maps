"use strict";(self["webpackChunkcanseo"]=self["webpackChunkcanseo"]||[]).push([[337],{7209:function(e,t,s){var o=s(9669),a=s.n(o);const i=a().create({baseURL:"https://canseo.site/api/api",headers:{"Content-type":"application/json"}});i.interceptors.request.use((e=>{const t=localStorage.getItem("Authorization");return t&&(e.headers.common["Authorization"]=`${t}`),e}),(e=>Promise.reject(e))),t.Z=i},5712:function(e,t,s){var o=s(7209),a=s(9560);const i={getAll(){return a.Z.setAuthHeader(),o.Z.get("/clientes")},login(e){return a.Z.setAuthHeader(),o.Z.post("/clientes/login",e)},get(e){return a.Z.setAuthHeader(),o.Z.get(`/clientes/${e}`)},create(e){return a.Z.setAuthHeader(),o.Z.post("/clientes/register",e)},update(e,t){return a.Z.setAuthHeader(),o.Z.put(`/clientes/${e}`,t)},changePassword(e,t){return a.Z.setAuthHeader(),o.Z.put(`/clientes/${e}/change-password`,t)},delete(e){return a.Z.setAuthHeader(),o.Z.delete(`/clientes/${e}`)},deleteAll(){return a.Z.setAuthHeader(),o.Z.delete("/clientes")}};t.Z=i},3337:function(e,t,s){s.r(t),s.d(t,{default:function(){return A}});var o=s(6252),a=s(3577),i=s(9963);const r=e=>((0,o.dD)("data-v-097bd72c"),e=e(),(0,o.Cn)(),e),n={class:"general"},l={class:"login"},c=r((()=>(0,o._)("img",{class:"canseo-img",src:"https://canseo-vue.vercel.app/uploads/Canseo-login.png",alt:"CanSeo"},null,-1))),u={class:"form-group"},d={class:"form-group password-input"},p=["type"],g={key:0,src:"https://canseo-vue.vercel.app/uploads/show-password.png",alt:"Mostrar contraseña"},m={key:1,src:"https://canseo-vue.vercel.app/uploads/hide-password.png",alt:"Ocultar contraseña"},h=r((()=>(0,o._)("button",{type:"submit"},"Iniciar",-1))),w=r((()=>(0,o._)("span",{class:"boton-registro"},"Registrate",-1)));function Z(e,t,s,r,Z,f){const v=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",n,[f.notification?((0,o.wg)(),(0,o.iD)("div",{key:0,class:(0,a.C_)(["notification",f.notificationClass])},(0,a.zw)(f.message),3)):(0,o.kq)("",!0),(0,o._)("div",l,[c,(0,o._)("form",{onSubmit:t[3]||(t[3]=(0,i.iM)(((...e)=>f.login&&f.login(...e)),["prevent"]))},[(0,o._)("div",u,[(0,o.wy)((0,o._)("input",{type:"email",id:"email","onUpdate:modelValue":t[0]||(t[0]=e=>Z.email=e),required:"",placeholder:"Email",autocomplete:"username"},null,512),[[i.nr,Z.email]])]),(0,o._)("div",d,[(0,o.wy)((0,o._)("input",{id:"password","onUpdate:modelValue":t[1]||(t[1]=e=>Z.password=e),type:f.passwordFieldType,required:"",placeholder:"Contraseña",autocomplete:"current-password"},null,8,p),[[i.YZ,Z.password]]),(0,o._)("span",{type:"button",onClick:t[2]||(t[2]=(...e)=>f.togglePasswordVisibility&&f.togglePasswordVisibility(...e))},[Z.showPassword?((0,o.wg)(),(0,o.iD)("img",g)):((0,o.wg)(),(0,o.iD)("img",m))])]),h],32),(0,o._)("span",null,[(0,o.Wm)(v,{to:"/registro/cliente",class:"nav-link"},{default:(0,o.w5)((()=>[(0,o.Uk)("¿Aún no tenés una cuenta? "),w])),_:1})]),(0,o._)("span",null,[(0,o.Wm)(v,{to:"/login/paseadores",class:"nav-link soy-paseador"},{default:(0,o.w5)((()=>[(0,o.Uk)("Soy Paseador")])),_:1})])])])}s(7658);var f=s(5712),v=s(7239),y={name:"LoginCliente",data(){return{email:"",password:"",showPassword:!1}},computed:{notification(){return v.Z.getters.getNotification},message(){return v.Z.getters.getMessage},notificationClass(){return{error:"error"===this.notification,success:"success"===this.notification}},passwordFieldType(){return this.showPassword?"text":"password"}},methods:{login(){const e={email:this.email,password:this.password};f.Z.login(e).then((e=>{const t=e.data.clientId;v.Z.commit("setClientId",t),localStorage.setItem("Authorization","Bearer "+e.data.token),this.$router.push("/reservar"),v.Z.commit("setNotification","success"),v.Z.commit("setMessage","Inicio de sesión exitoso")})).catch((e=>{console.log("Error al iniciar sesión como cliente: ",e),v.Z.commit("setNotification","error"),v.Z.commit("setMessage","Error al iniciar sesión email o contraseña incorrectas"),this.$router.push("/login/clientes"),setTimeout((()=>{v.Z.commit("setNotification",null),v.Z.commit("setMessage",null)}),5e3)}))},togglePasswordVisibility(){this.showPassword=!this.showPassword}}},_=s(3744);const k=(0,_.Z)(y,[["render",Z],["__scopeId","data-v-097bd72c"]]);var A=k}}]);
//# sourceMappingURL=337.c4a2aa40.js.map
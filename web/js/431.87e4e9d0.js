"use strict";(self["webpackChunkcanseo"]=self["webpackChunkcanseo"]||[]).push([[431],{7209:function(e,s,t){var a=t(9669),o=t.n(a);const r=o().create({baseURL:"https://canseo.site/api/api",headers:{"Content-type":"application/json"}});r.interceptors.request.use((e=>{const s=localStorage.getItem("Authorization");return s&&(e.headers.common["Authorization"]=`${s}`),e}),(e=>Promise.reject(e))),s.Z=r},1677:function(e,s,t){var a=t(7209),o=t(9560);const r={getAll(){return o.Z.setAuthHeader(),a.Z.get("/paseadores")},getByBarrio(e,s,t,r){return o.Z.setAuthHeader(),a.Z.get(`/paseadores/by-barrio/${e}?diaSemana=${s}&fecha=${t}&hora=${r}`,{params:{dia_semana:s}})},login(e){return o.Z.setAuthHeader(),a.Z.post("/paseadores/login",e)},get(e){return o.Z.setAuthHeader(),a.Z.get(`/paseadores/${e}`)},create(e){return o.Z.setAuthHeader(),a.Z.post("/paseadores/register",e)},update(e,s){return o.Z.setAuthHeader(),a.Z.put(`/paseadores/${e}`,s)},changePassword(e,s){return o.Z.setAuthHeader(),a.Z.put(`/paseadores/${e}/change-password`,s)},delete(e){return o.Z.setAuthHeader(),a.Z.delete(`/paseadores/${e}`)},deleteAll(){return o.Z.setAuthHeader(),a.Z.delete("/paseadores")}};s.Z=r},2431:function(e,s,t){t.r(s),t.d(s,{default:function(){return C}});var a=t(6252),o=t(3577),r=t(9963);const i=e=>((0,a.dD)("data-v-48aafa53"),e=e(),(0,a.Cn)(),e),n={class:"general"},l={class:"login"},c=i((()=>(0,a._)("img",{class:"canseo-img",src:"https://canseo-vue.vercel.app/uploads/Canseo-login.png",alt:"CanSeo Pasedores"},null,-1))),d=i((()=>(0,a._)("span",{class:"paseadores"},"Paseadores",-1))),u={class:"form-group"},p={class:"form-group"},g={class:"password-input"},m=["type"],h={key:0,src:"https://canseo-vue.vercel.app/uploads/show-password.png",alt:"Mostrar contraseña"},w={key:1,src:"https://canseo-vue.vercel.app/uploads/hide-password.png",alt:"Ocultar contraseña"},Z=i((()=>(0,a._)("button",{type:"submit"},"Iniciar",-1))),f=i((()=>(0,a._)("span",{class:"boton-registro"},"Registrate",-1)));function v(e,s,t,i,v,y){const _=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("div",n,[y.notification?((0,a.wg)(),(0,a.iD)("div",{key:0,class:(0,o.C_)(["notification",y.notificationClass])},(0,o.zw)(y.message),3)):(0,a.kq)("",!0),(0,a._)("div",l,[c,d,(0,a._)("form",{onSubmit:s[3]||(s[3]=(0,r.iM)(((...e)=>y.login&&y.login(...e)),["prevent"]))},[(0,a._)("div",u,[(0,a.wy)((0,a._)("input",{type:"email",id:"email","onUpdate:modelValue":s[0]||(s[0]=e=>v.email=e),required:"",placeholder:"Email",autocomplete:"username"},null,512),[[r.nr,v.email]])]),(0,a._)("div",p,[(0,a._)("div",g,[(0,a.wy)((0,a._)("input",{id:"password","onUpdate:modelValue":s[1]||(s[1]=e=>v.password=e),type:y.passwordFieldType,required:"",placeholder:"Contraseña",autocomplete:"current-password"},null,8,m),[[r.YZ,v.password]]),(0,a._)("span",{type:"button",onClick:s[2]||(s[2]=(...e)=>y.togglePasswordVisibility&&y.togglePasswordVisibility(...e))},[v.showPassword?((0,a.wg)(),(0,a.iD)("img",h)):((0,a.wg)(),(0,a.iD)("img",w))])])]),Z],32),(0,a._)("span",null,[(0,a.Wm)(_,{to:"/registro/paseador",class:"nav-link"},{default:(0,a.w5)((()=>[(0,a.Uk)("¿Aún no tenés una cuenta? "),f])),_:1})]),(0,a._)("span",null,[(0,a.Wm)(_,{to:"/login/clientes",class:"nav-link soy-paseador"},{default:(0,a.w5)((()=>[(0,a.Uk)("Soy Cliente")])),_:1})])])])}t(7658);var y=t(1677),_=t(7239),k={name:"LoginPaseador",data(){return{email:"",password:"",showPassword:!1}},computed:{notification(){return _.Z.getters.getNotification},message(){return _.Z.getters.getMessage},notificationClass(){return{error:"error"===this.notification,success:"success"===this.notification}},passwordFieldType(){return this.showPassword?"text":"password"}},methods:{login(){const e={email:this.email,password:this.password};y.Z.login(e).then((e=>{const s=e.data.clientId;_.Z.dispatch("updateClientId",s),localStorage.setItem("Authorization","Bearer "+e.data.token),this.$router.push("/reservas-paseador"),_.Z.commit("setNotification","success"),_.Z.commit("setMessage","Inicio de sesión exitoso"),setTimeout((()=>{_.Z.commit("setNotification",null),_.Z.commit("setMessage",null)}),5e3)})).catch((e=>{console.log("Error al iniciar sesión como paseador: ",e),_.Z.commit("setNotification","error"),_.Z.commit("setMessage","Error al iniciar sesión email o contraseña incorrectas"),this.$router.push("/login/paseadores"),setTimeout((()=>{_.Z.commit("setNotification",null),_.Z.commit("setMessage",null)}),5e3)}))},togglePasswordVisibility(){this.showPassword=!this.showPassword}}},A=t(3744);const b=(0,A.Z)(k,[["render",v],["__scopeId","data-v-48aafa53"]]);var C=b}}]);
//# sourceMappingURL=431.87e4e9d0.js.map
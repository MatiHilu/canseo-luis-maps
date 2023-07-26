"use strict";(self["webpackChunkcanseo"]=self["webpackChunkcanseo"]||[]).push([[179],{7209:function(e,t,o){var r=o(9669),a=o.n(r);const i=a().create({baseURL:"https://canseo.site/api/api",headers:{"Content-type":"application/json"}});i.interceptors.request.use((e=>{const t=localStorage.getItem("Authorization");return t&&(e.headers.common["Authorization"]=`${t}`),e}),(e=>Promise.reject(e))),t.Z=i},2498:function(e,t,o){var r=o(7209);const a={getAll(){return r.Z.get("/barrios")},get(e){return r.Z.get(`/barrios/${e}`)}};t.Z=a},5712:function(e,t,o){var r=o(7209),a=o(9560);const i={getAll(){return a.Z.setAuthHeader(),r.Z.get("/clientes")},login(e){return a.Z.setAuthHeader(),r.Z.post("/clientes/login",e)},get(e){return a.Z.setAuthHeader(),r.Z.get(`/clientes/${e}`)},create(e){return a.Z.setAuthHeader(),r.Z.post("/clientes/register",e)},update(e,t){return a.Z.setAuthHeader(),r.Z.put(`/clientes/${e}`,t)},changePassword(e,t){return a.Z.setAuthHeader(),r.Z.put(`/clientes/${e}/change-password`,t)},delete(e){return a.Z.setAuthHeader(),r.Z.delete(`/clientes/${e}`)},deleteAll(){return a.Z.setAuthHeader(),r.Z.delete("/clientes")}};t.Z=i},8541:function(e,t,o){var r=o(7209);const a={getAll(){return r.Z.get("/razas")},get(e){return r.Z.get(`/razas/${e}`)}};t.Z=a},5179:function(e,t,o){o.r(t),o.d(t,{default:function(){return S}});var r=o(6252),a=o(3577),i=o(9963);const s=e=>((0,r.dD)("data-v-3763a1a0"),e=e(),(0,r.Cn)(),e),n={class:"general"},l={class:"registro"},d=s((()=>(0,r._)("h1",null,"Registro",-1))),c=s((()=>(0,r._)("img",{class:"canseo-img",src:"https://canseo-vue.vercel.app/uploads/Canseo-registro.png",alt:"CanSeo "},null,-1))),p={class:"form-group"},u={class:"form-group"},g={class:"form-group"},m={class:"form-group"},h={class:"password-input"},f=["type"],w={key:0,src:"https://canseo-vue.vercel.app/uploads/show-password.png",alt:"Mostrar contraseña"},_={key:1,src:"https://canseo-vue.vercel.app/uploads/hide-password.png",alt:"Ocultar contraseña"},b={class:"form-group"},v={class:"form-group"},Z={class:"form-group"},y=s((()=>(0,r._)("option",{value:""},"Seleccioná tu barrio",-1))),z=["value"],A={class:"form-group"},C={class:"form-group"},k=s((()=>(0,r._)("option",{value:""},"Seleccioná la raza de tu perro",-1))),P=["value"],U={class:"form-group"},D=s((()=>(0,r._)("label",{for:"foto_perfil"},"Foto de perfil",-1))),V=s((()=>(0,r._)("button",{type:"submit"},"Registrarme",-1))),q=s((()=>(0,r._)("span",{class:"boton-registro"},"Iniciar sesión",-1)));function H(e,t,o,s,H,R){const $=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",n,[R.notification?((0,r.wg)(),(0,r.iD)("div",{key:0,class:(0,a.C_)(["notification",R.notificationClass])},(0,a.zw)(R.message),3)):(0,r.kq)("",!0),(0,r._)("div",l,[d,c,(0,r._)("form",{onSubmit:t[11]||(t[11]=(0,i.iM)(((...e)=>R.agregarCliente&&R.agregarCliente(...e)),["prevent"]))},[(0,r._)("div",p,[(0,r.wy)((0,r._)("input",{type:"text",id:"nombre","onUpdate:modelValue":t[0]||(t[0]=e=>H.nombre=e),required:"",placeholder:"Nombre"},null,512),[[i.nr,H.nombre]])]),(0,r._)("div",u,[(0,r.wy)((0,r._)("input",{type:"text",id:"apellido","onUpdate:modelValue":t[1]||(t[1]=e=>H.apellido=e),required:"",placeholder:"Apellido"},null,512),[[i.nr,H.apellido]])]),(0,r._)("div",g,[(0,r.wy)((0,r._)("input",{type:"email",id:"email","onUpdate:modelValue":t[2]||(t[2]=e=>H.email=e),required:"",placeholder:"Email"},null,512),[[i.nr,H.email]])]),(0,r._)("div",m,[(0,r._)("div",h,[(0,r.wy)((0,r._)("input",{id:"password","onUpdate:modelValue":t[3]||(t[3]=e=>H.password=e),type:R.passwordFieldType,required:"",placeholder:"Contraseña"},null,8,f),[[i.YZ,H.password]]),(0,r._)("span",{type:"button",onClick:t[4]||(t[4]=(...e)=>R.togglePasswordVisibility&&R.togglePasswordVisibility(...e))},[H.showPassword?((0,r.wg)(),(0,r.iD)("img",w)):((0,r.wg)(),(0,r.iD)("img",_))])])]),(0,r._)("div",b,[(0,r.wy)((0,r._)("input",{type:"text",id:"telefono","onUpdate:modelValue":t[5]||(t[5]=e=>H.telefono=e),required:"",placeholder:"Teléfono"},null,512),[[i.nr,H.telefono]])]),(0,r._)("div",v,[(0,r.wy)((0,r._)("input",{type:"text",id:"direccion","onUpdate:modelValue":t[6]||(t[6]=e=>H.direccion=e),required:"",placeholder:"Dirección"},null,512),[[i.nr,H.direccion]])]),(0,r._)("div",Z,[(0,r.wy)((0,r._)("select",{id:"id_barrio","onUpdate:modelValue":t[7]||(t[7]=e=>H.idBarrio=e),required:""},[y,((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(H.barrios,(e=>((0,r.wg)(),(0,r.iD)("option",{key:e.id,value:e.id},(0,a.zw)(e.nombre),9,z)))),128))],512),[[i.bM,H.idBarrio]])]),(0,r._)("div",A,[(0,r.wy)((0,r._)("input",{type:"text",id:"nombre_perro","onUpdate:modelValue":t[8]||(t[8]=e=>H.nombrePerro=e),required:"",placeholder:"Nombre de su perro"},null,512),[[i.nr,H.nombrePerro]])]),(0,r._)("div",C,[(0,r.wy)((0,r._)("select",{id:"id_raza","onUpdate:modelValue":t[9]||(t[9]=e=>H.idRaza=e),required:""},[k,((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(H.razas,(e=>((0,r.wg)(),(0,r.iD)("option",{key:e.id,value:e.id},(0,a.zw)(e.nombre),9,P)))),128))],512),[[i.bM,H.idRaza]])]),(0,r._)("div",U,[D,(0,r._)("input",{type:"file",id:"foto_perfil",onChange:t[10]||(t[10]=(...e)=>R.handleFileUpload&&R.handleFileUpload(...e))},null,32)]),V],32),(0,r._)("span",null,[(0,r.Wm)($,{to:"/login/clientes",class:"nav-link"},{default:(0,r.w5)((()=>[(0,r.Uk)("¿Ya tenés una cuenta? "),q])),_:1})])])])}o(7658);var R=o(5712),$=o(2498),x=o(8541),M=o(7239),F={name:"AddCliente",data(){return{nombre:"",apellido:"",email:"",telefono:"",direccion:"",password:"",foto_perfil:"",idBarrio:"",nombrePerro:"",idRaza:"",barrios:[],razas:[],showPassword:!1}},computed:{notification(){return M.Z.getters.getNotification},message(){return M.Z.getters.getMessage},notificationClass(){return{error:"error"===this.notification,success:"success"===this.notification}},passwordFieldType(){return this.showPassword?"text":"password"}},mounted(){this.fetchBarrios(),this.fetchRazas()},methods:{handleFileUpload(e){this.foto_perfil=e.target.files[0]},fetchBarrios(){$.Z.getAll().then((e=>{this.barrios=e.data})).catch((e=>{console.log(e)}))},fetchRazas(){x.Z.getAll().then((e=>{this.razas=e.data})).catch((e=>{console.log(e)}))},agregarCliente(){const e=new FormData;e.append("nombre",this.nombre),e.append("apellido",this.apellido),e.append("email",this.email),e.append("telefono",this.telefono),e.append("direccion",this.direccion),e.append("password",this.password),e.append("id_barrio",this.idBarrio),e.append("foto_perfil",this.foto_perfil),e.append("nombre_perro",this.nombrePerro),e.append("id_raza",this.idRaza),console.log("Datos enviados al backend:",Object.fromEntries(e)),R.Z.create(e).then((e=>{console.log("Cliente agregado exitosamente: ",e.data),this.$router.push("/login/clientes"),M.Z.commit("setNotification","success"),M.Z.commit("setMessage","Registro exitoso")})).catch((e=>{console.log("Error al agregar el cliente: ",e),M.Z.commit("setNotification","error"),M.Z.commit("setMessage","Error al realizar el registro"),this.$router.push("/registro/cliente"),setTimeout((()=>{M.Z.commit("setNotification",null),M.Z.commit("setMessage",null)}),5e3)}))},togglePasswordVisibility(){this.showPassword=!this.showPassword}}},B=o(3744);const N=(0,B.Z)(F,[["render",H],["__scopeId","data-v-3763a1a0"]]);var S=N}}]);
//# sourceMappingURL=179.f51fb4b3.js.map
(function(e){function t(t){for(var a,r,s=t[0],c=t[1],l=t[2],u=0,d=[];u<s.length;u++)r=s[u],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);h&&h(t);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,r=1;r<n.length;r++){var s=n[r];0!==o[s]&&(a=!1)}a&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},r={app:0},o={app:0},i=[];function s(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-2d221da8":"5c650465","chunk-5f93378c":"dc5f44dc","chunk-64a29c58":"7861310a","chunk-0be5ab9b":"03e5f0cf","chunk-01967c99":"2c6886dc","chunk-14a9643d":"bbed2a78","chunk-25b36a61":"d6b31b55","chunk-2977c324":"4ee2fe2b","chunk-424b0b18":"7158237e","chunk-5233a3d2":"4dd19818","chunk-5c653b9c":"ed089e90","chunk-5df37e9b":"fff315d6","chunk-6423cd5c":"a3e2c09b","chunk-b3643f76":"a77c86bb","chunk-2c4fbb8a":"16acb35e","chunk-7e1e2c0f":"4de82b37","chunk-66ebedfb":"ec36c896","chunk-b51bb3f6":"e2628268"}[e]+".js"}function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-5f93378c":1,"chunk-64a29c58":1,"chunk-0be5ab9b":1,"chunk-01967c99":1,"chunk-14a9643d":1,"chunk-25b36a61":1,"chunk-2977c324":1,"chunk-424b0b18":1,"chunk-5233a3d2":1,"chunk-5c653b9c":1,"chunk-5df37e9b":1,"chunk-6423cd5c":1,"chunk-b3643f76":1,"chunk-2c4fbb8a":1,"chunk-7e1e2c0f":1,"chunk-66ebedfb":1,"chunk-b51bb3f6":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-2d221da8":"31d6cfe0","chunk-5f93378c":"06d3ec3e","chunk-64a29c58":"0340be02","chunk-0be5ab9b":"969d4fd0","chunk-01967c99":"06d3ec3e","chunk-14a9643d":"55a444ee","chunk-25b36a61":"aaa6519a","chunk-2977c324":"3c67262e","chunk-424b0b18":"ed30b961","chunk-5233a3d2":"d648e3c6","chunk-5c653b9c":"0a9943eb","chunk-5df37e9b":"3a4474f1","chunk-6423cd5c":"e3005b93","chunk-b3643f76":"be1ab225","chunk-2c4fbb8a":"61818f13","chunk-7e1e2c0f":"a5c6108a","chunk-66ebedfb":"06d3ec3e","chunk-b51bb3f6":"06d3ec3e"}[e]+".css",o=c.p+a,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var l=i[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===o))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){l=d[s],u=l.getAttribute("data-href");if(u===a||u===o)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var a=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete r[e],h.parentNode.removeChild(h),n(i)},h.href=o;var m=document.getElementsByTagName("head")[0];m.appendChild(h)})).then((function(){r[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var i=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(e);var d=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(h);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}o[e]=void 0}};var h=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var h=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-content",[n("v-snackbar",{attrs:{color:e.snackbar.color,top:"",timeout:5e3},model:{value:e.snackbar.showing,callback:function(t){e.$set(e.snackbar,"showing",t)},expression:"snackbar.showing"}},[e._v(" "+e._s(e.snackbar.text)+" "),n("v-btn",{attrs:{text:""},on:{click:function(t){e.snackbar.showing=!1}}},[e._v("Close")])],1),n("router-view")],1)],1)},o=[],i=(n("b0c0"),n("d3b7"),n("5530")),s=n("2f62"),c={computed:Object(i["a"])({isLoggedIn:function(){return this.$store.getters.isLoggedIn}},Object(s["b"])(["snackbar"])),methods:{isAuth:function(){var e="login"==this.$route.name||"register"==this.$route.name;return e}},created:function(){this.$http.interceptors.response.use(void 0,(function(e){return new Promise((function(){throw 401===e.status&&e.config&&!e.config.__isRetryRequest&&this.$store.dispatch("logout"),e}))}))}},l=c,u=n("2877"),d=n("6544"),h=n.n(d),m=n("7496"),f=n("8336"),b=n("a75b"),v=n("2db4"),p=Object(u["a"])(l,r,o,!1,null,null,null),g=p.exports;h()(p,{VApp:m["a"],VBtn:f["a"],VContent:b["a"],VSnackbar:v["a"]});n("a623"),n("c975"),n("45fc");var k=n("bc3a"),_=n.n(k),A=n("5a50"),S=n("bfa9");a["a"].use(s["a"]);var E=new S["a"]({key:"vuex",storage:window.localStorage,reducer:function(e){return{status:e.status,token:e.token,user:e.user}}}),O=new s["a"].Store({plugins:[E.plugin],state:{status:"",token:localStorage.getItem("token")||"",user:{},snackbar:{}},mutations:{auth_request:function(e){e.status="loading"},auth_success:function(e,t){e.status="success",e.token=t.token,e.user=t.user},auth_error:function(e){e.status="error"},logout:function(e){e.status="",e.token=""},airlineJoined:function(e,t){e.user.airlineIcao=t},SET_SNACKBAR:function(e,t){e.snackbar=t},SET_CAN_BOOK:function(e,t){e.user.numberOfBookings=t}},actions:{login:function(e,t){var n=e.commit;return new Promise((function(e,a){n("auth_request"),_()({url:A["a"].API_BASE+"auth",data:t,method:"POST"}).then((function(t){var a=t.data.token;localStorage.setItem("token",a);var r={username:t.data.username,roles:t.data.roles,airlineName:t.data.airlineName,airlineIcao:t.data.airlineIcao,numberOfBookings:t.data.numberOfBookings};localStorage.setItem("username",r.username),localStorage.setItem("roles",r.roles),localStorage.setItem("airlineName",r.airlineName),localStorage.setItem("airlineIcao",r.airlineIcao),localStorage.setItem("numberOfBookings",r.numberOfBookings),_.a.defaults.headers.common["Authorization"]=a,n("auth_success",{token:a,user:r}),e(t)})).catch((function(e){n("auth_error"),localStorage.removeItem("token"),a(e)}))}))},register:function(e,t){var n=e.commit;return new Promise((function(e,a){n("auth_request"),_()({url:A["a"].API_BASE+"auth/register",data:t,method:"POST"}).then((function(e){console.log(e),window.location="/login"})).catch((function(e){n("auth_error",e),localStorage.removeItem("token"),a(e)}))}))},logout:function(e){var t=e.commit;return new Promise((function(e){t("logout"),localStorage.removeItem("token"),localStorage.removeItem("username"),localStorage.removeItem("roles"),localStorage.removeItem("airlineName"),localStorage.removeItem("airlineIcao"),localStorage.removeItem("numberOfBookings"),window.localStorage.clear(),localStorage.clear(),delete _.a.defaults.headers.common["Authorization"],e()}))},joinedAirline:function(e,t){var n=e.commit;n("airlineJoined",t)},setSnackbar:function(e,t){var n=e.commit;n("SET_SNACKBAR",t)},setCanBook:function(e,t){var n=e.commit;n("SET_CAN_BOOK",t)}},getters:{isLoggedIn:function(e){return!!e.token},authStatus:function(e){return e.status},getRoles:function(e){return e.user.roles},getUsername:function(e){return e.user.username},getAirlineName:function(e){return e.user.airlineName},getAirlineIcao:function(e){return e.user.airlineIcao},canBook:function(e){return e.user.numberOfBookings<1&&null!=e.user.airlineIcao}}}),R=n("8c4f"),I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login"},[n("LoginComponent")],1)},w=[],C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-flex",{attrs:{id:"app"}},[n("v-app",{attrs:{id:"inspire"}},[n("v-content",[n("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-col",{attrs:{cols:"12",sm:"8",md:"4"}},[n("v-form",{staticClass:"login",on:{submit:function(t){return t.preventDefault(),e.login(t)}}},[n("v-card",{staticClass:"elevation-12"},[n("v-toolbar",{attrs:{color:"info",dark:"",flat:""}},[n("v-toolbar-title",[e._v("Login")]),n("v-spacer")],1),n("v-card-text",[n("v-text-field",{attrs:{outlined:"",rounded:"",label:"Login",name:"login",type:"text"},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}}),n("v-text-field",{attrs:{outlined:"",rounded:"",id:"password",label:"Password",name:"password",type:"password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),n("v-card-actions",[n("v-btn",{attrs:{type:"submit",rounded:"",block:"",large:"",color:"success"}},[e._v("Login")])],1)],1)],1)],1)],1)],1)],1)],1)],1)},y=[],L={data:function(){return{username:"",password:""}},methods:{redirect:function(){var e=this.$store.getters.getRoles;"ROLE_SYSTEM_ADMIN"==e?this.$router.push("/users"):"ROLE_USER"==e?this.$router.push("/profile"):this.$router.push("/airline-details")},login:function(){var e=this,t=this.username,n=this.password;this.$store.dispatch("login",{username:t,password:n}).then((function(){return e.redirect()})).catch((function(t){return e.sendError(t)}))},sendError:function(e){this.$store.dispatch("setSnackbar",{showing:!0,text:"Bad credentials",color:"error"})}}},B=L,x=n("b0af"),M=n("99d9"),N=n("62ad"),$=n("a523"),P=n("0e8f"),T=n("4bd4"),V=n("0fd9"),D=n("2fa4"),j=n("8654"),q=n("71d9"),U=n("2a7f"),F=Object(u["a"])(B,C,y,!1,null,null,null),Y=F.exports;h()(F,{VApp:m["a"],VBtn:f["a"],VCard:x["a"],VCardActions:M["a"],VCardText:M["b"],VCol:N["a"],VContainer:$["a"],VContent:b["a"],VFlex:P["a"],VForm:T["a"],VRow:V["a"],VSpacer:D["a"],VTextField:j["a"],VToolbar:q["a"],VToolbarTitle:U["a"]});var z={name:"Login",components:{LoginComponent:Y}},J=z,K=Object(u["a"])(J,I,w,!1,null,null,null),G=K.exports,H=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"dashboard"},[n("Dashboard")],1)},W=[],Q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("v-app",{attrs:{id:"inspire"}},[n("v-navigation-drawer",{attrs:{app:"",color:"info",dark:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[n("v-list",{staticClass:"py-0",attrs:{nav:""}},[n("div",{staticClass:"metar"},[n("v-text-field",{attrs:{label:"ICAO",name:"login",type:"text"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.getMetar(t)}},scopedSlots:e._u([{key:"append",fn:function(){return[n("v-btn",{staticClass:"ma-0",attrs:{tile:"",color:"success"},on:{click:e.getMetar}},[e._v("Get metar")])]},proxy:!0}]),model:{value:e.icao,callback:function(t){e.icao=t},expression:"icao"}}),n("span",{staticClass:"font-weight-bold caption"},[e._v(e._s(this.metar.raw))])],1),e.$store.getters.getRoles.every((function(e){return["ROLE_USER","ROLE_ADMIN"].indexOf(e)>-1}))?n("router-link",{staticClass:"link",attrs:{to:"profile"}},[n("v-list-item",{staticClass:"dashboardBtn"},[n("v-list-item-action",[n("v-icon",[e._v("perm_identity")])],1),n("v-list-item-content",[n("v-list-item-title",[e._v("Profile")])],1)],1)],1):e._e(),"ROLE_USER"==e.$store.getters.getRoles&&null!=e.$store.getters.getAirlineIcao?n("router-link",{staticClass:"link",attrs:{to:"fleet"}},[n("v-list-item",{staticClass:"dashboardBtn"},[n("v-list-item-action",[n("v-icon",[e._v("airplanemode_active")])],1),n("v-list-item-content",[n("v-list-item-title",[e._v("Fleet")])],1)],1)],1):e._e(),"ROLE_SYSTEM_ADMIN"==e.$store.getters.getRoles?n("router-link",{staticClass:"link",attrs:{to:"users"}},[n("v-list-item",{staticClass:"dashboardBtn"},[n("v-list-item-action",[n("v-icon",[e._v("perm_identity")])],1),n("v-list-item-content",[n("v-list-item-title",[e._v("Users")])],1)],1)],1):e._e(),"ROLE_SYSTEM_ADMIN"==e.$store.getters.getRoles?n("router-link",{staticClass:"link",attrs:{to:"admin-aircrafts"}},[n("v-list-item",{staticClass:"dashboardBtn"},[n("v-list-item-action",[n("v-icon",[e._v("airplanemode_active")])],1),n("v-list-item-content",[n("v-list-item-title",[e._v("Aircrafts")])],1)],1)],1):e._e(),"ROLE_SYSTEM_ADMIN"==e.$store.getters.getRoles?n("router-link",{staticClass:"link",attrs:{to:"flights"}},[n("v-list-item",{staticClass:"dashboardBtn"},[n("v-list-item-action",[n("v-icon",[e._v("flight_takeoff")])],1),n("v-list-item-content",[n("v-list-item-title",[e._v("All flights")])],1)],1)],1):e._e(),null==e.$store.getters.getAirlineIcao&&"ROLE_SYSTEM_ADMIN"!=e.$store.getters.getRoles?n("router-link",{staticClass:"link",attrs:{to:"create-airline"}},[n("v-list-item",{staticClass:"dashboardBtn"},[n("v-list-item-action",[n("v-icon",[e._v("create")])],1),n("v-list-item-content",[n("v-list-item-title",[e._v("Create airline")])],1)],1)],1):e._e(),null==e.$store.getters.getAirlineIcao&&"ROLE_SYSTEM_ADMIN"!=e.$store.getters.getRoles?n("router-link",{staticClass:"link",attrs:{to:"join-airline"}},[n("v-list-item",{staticClass:"dashboardBtn"},[n("v-list-item-action",[n("v-icon",[e._v("airplanemode_active")])],1),n("v-list-item-content",[n("v-list-item-title",[e._v("Join airline")])],1)],1)],1):e._e(),"ROLE_ADMIN"==e.$store.getters.getRoles?n("router-link",{staticClass:"link",attrs:{to:"airline-details"}},[n("v-list-item",{staticClass:"dashboardBtn"},[n("v-list-item-action",[n("v-icon",[e._v("airplanemode_active")])],1),n("v-list-item-content",[n("v-list-item-title",[e._v("Airline details")])],1)],1)],1):e._e(),"ROLE_ADMIN"==e.$store.getters.getRoles?n("router-link",{staticClass:"link",attrs:{to:"routes"}},[n("v-list-item",{staticClass:"dashboardBtn"},[n("v-list-item-action",[n("v-icon",[e._v("language")])],1),n("v-list-item-content",[n("v-list-item-title",[e._v("Routes")])],1)],1)],1):e._e(),e.$store.getters.getRoles.every((function(e){return["ROLE_USER","ROLE_ADMIN"].indexOf(e)>-1}))?n("router-link",{staticClass:"link",attrs:{to:"bookings"}},[n("v-list-item",{staticClass:"dashboardBtn"},[n("v-list-item-action",[n("v-icon",[e._v("flight_takeoff")])],1),n("v-list-item-content",[n("v-list-item-title",[e._v("Bookings")])],1)],1)],1):e._e(),"ROLE_SYSTEM_ADMIN"==e.$store.getters.getRoles?n("router-link",{staticClass:"link",attrs:{to:"admin-special-cargo"}},[n("v-list-item",{staticClass:"dashboardBtn"},[n("v-list-item-action",[n("v-icon",[e._v("archive")])],1),n("v-list-item-content",[n("v-list-item-title",[e._v("Special Cargo")])],1)],1)],1):e._e()],1)],1),n("v-app-bar",{attrs:{app:"",color:"info",dark:""}},[n("v-app-bar-nav-icon",{on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}}),n("v-toolbar-title",[e._v("Real VA")]),n("v-spacer"),e._v("Logout "),n("v-btn",{attrs:{icon:""},on:{click:e.logout}},[n("v-icon",[e._v("mdi-export")])],1)],1),n("router-view")],1)],1)},X=[],Z={name:"Dashboard",data:function(){return{drawer:null,icao:"",metar:""}},methods:{getMetar:function(){var e=this,t=_.a.defaults.headers.common["Authorization"];delete _.a.defaults.headers.common["Authorization"],_.a.get("https://avwx.rest/api/metar/"+this.icao+"?token=AduMGyDf-aOdLLthklnQ-WGWCwE8RLfaxGRZBBOX3hI",{Headers:{Authorization:null}}).then((function(t){e.metar=t.data})),_.a.defaults.headers.common["Authorization"]=t},checkLogin:function(){void 0===this.$store.getters.getUsername&&this.$router.push("/login")},logout:function(){var e=this;this.$store.dispatch("logout").then((function(){e.$router.push("/login")}))}},beforeMount:function(){this.checkLogin()}},ee=Z,te=(n("8360"),n("40dc")),ne=n("5bc1"),ae=n("132d"),re=n("8860"),oe=n("da13"),ie=n("1800"),se=n("5d23"),ce=n("f774"),le=Object(u["a"])(ee,Q,X,!1,null,null,null),ue=le.exports;h()(le,{VApp:m["a"],VAppBar:te["a"],VAppBarNavIcon:ne["a"],VBtn:f["a"],VIcon:ae["a"],VList:re["a"],VListItem:oe["a"],VListItemAction:ie["a"],VListItemContent:se["a"],VListItemTitle:se["b"],VNavigationDrawer:ce["a"],VSpacer:D["a"],VTextField:j["a"],VToolbarTitle:U["a"]});var de={name:"Layout",components:{Dashboard:ue}},he=de,me=Object(u["a"])(he,H,W,!1,null,null,null),fe=me.exports;a["a"].use(R["a"]);var be=[{path:"/",name:"Layout",component:fe,children:[{path:"home",name:"Home",component:function(){return n.e("chunk-b51bb3f6").then(n.bind(null,"82ce"))},meta:{requiresAuth:!0,role:"ROLE_USER"}},{path:"profile",name:"Profile",component:function(){return Promise.all([n.e("chunk-64a29c58"),n.e("chunk-0be5ab9b"),n.e("chunk-5233a3d2")]).then(n.bind(null,"4334"))},meta:{requiresAuth:!0,roles:["ROLE_USER","ROLE_ADMIN"]}},{path:"create-airline",name:"CreateAirline",component:function(){return Promise.all([n.e("chunk-64a29c58"),n.e("chunk-2c4fbb8a")]).then(n.bind(null,"0253"))},meta:{requiresAuth:!0,role:"ROLE_USER"}},{path:"join-airline",name:"JoinAirline",component:function(){return Promise.all([n.e("chunk-64a29c58"),n.e("chunk-7e1e2c0f")]).then(n.bind(null,"7c24"))},meta:{requiresAuth:!0,role:"ROLE_USER"}},{path:"fleet",name:"Fleet",component:function(){return Promise.all([n.e("chunk-64a29c58"),n.e("chunk-0be5ab9b"),n.e("chunk-6423cd5c")]).then(n.bind(null,"1586"))},meta:{requiresAuth:!0,role:"ROLE_USER"}},{path:"airline-details",name:"AirlineDetails",component:function(){return Promise.all([n.e("chunk-64a29c58"),n.e("chunk-0be5ab9b"),n.e("chunk-b3643f76")]).then(n.bind(null,"169e"))},meta:{requiresAuth:!0,role:"ROLE_ADMIN"}},{path:"routes",name:"Routes",component:function(){return Promise.all([n.e("chunk-64a29c58"),n.e("chunk-0be5ab9b"),n.e("chunk-14a9643d")]).then(n.bind(null,"1a22"))},meta:{requiresAuth:!0,role:"ROLE_ADMIN"}},{path:"bookings",name:"Bookings",component:function(){return Promise.all([n.e("chunk-64a29c58"),n.e("chunk-0be5ab9b"),n.e("chunk-424b0b18")]).then(n.bind(null,"d6ea"))},meta:{requiresAuth:!0,roles:["ROLE_USER","ROLE_ADMIN"]}},{path:"buy-aircraft",name:"BuyAircraft",component:function(){return Promise.all([n.e("chunk-64a29c58"),n.e("chunk-0be5ab9b"),n.e("chunk-25b36a61")]).then(n.bind(null,"ca99"))},meta:{requiresAuth:!0,role:"ROLE_ADMIN"}},{path:"users",name:"Users",component:function(){return Promise.all([n.e("chunk-64a29c58"),n.e("chunk-0be5ab9b"),n.e("chunk-01967c99")]).then(n.bind(null,"3841"))},meta:{requiresAuth:!0,role:"ROLE_SYSTEM_ADMIN"}},{path:"admin-aircrafts",name:"AdminAircrafts",component:function(){return Promise.all([n.e("chunk-64a29c58"),n.e("chunk-0be5ab9b"),n.e("chunk-5c653b9c")]).then(n.bind(null,"6641"))},meta:{requiresAuth:!0,role:"ROLE_SYSTEM_ADMIN"}},{path:"flights",name:"Flights",component:function(){return Promise.all([n.e("chunk-64a29c58"),n.e("chunk-0be5ab9b"),n.e("chunk-5df37e9b")]).then(n.bind(null,"affa"))},meta:{requiresAuth:!0,role:"ROLE_SYSTEM_ADMIN"}},{path:"admin-special-cargo",name:"SpecialCargo",component:function(){return Promise.all([n.e("chunk-64a29c58"),n.e("chunk-0be5ab9b"),n.e("chunk-2977c324")]).then(n.bind(null,"20c0"))},meta:{requiresAuth:!0,role:"ROLE_SYSTEM_ADMIN"}},{path:"about",name:"About",component:function(){return n.e("chunk-5f93378c").then(n.bind(null,"1b5a"))}},{path:"contact",name:"Contact",component:function(){return n.e("chunk-66ebedfb").then(n.bind(null,"9fa0"))}}]},{path:"/login",name:"Login",component:G},{path:"/register",name:"Register",component:function(){return n.e("chunk-2d221da8").then(n.bind(null,"cbb5"))}}],ve=new R["a"]({mode:"history",base:"/",routes:be});ve.beforeEach((function(e,t,n){if(e.matched.some((function(e){return e.meta.requiresAuth}))){if(O.getters.isLoggedIn){if(console.log(O.getters.getRoles),O.getters.getRoles==e.meta.role)return console.log("success"),void n();if(O.getters.getRoles.every((function(t){return e.meta.roles.indexOf(t)>-1})))return void n();console.log(e.meta.roles)}n("/login")}else n()}));var pe=ve,ge=n("f309");a["a"].use(ge["a"]);var ke=new ge["a"]({theme:{themes:{light:{primary:"#7ed321",secondary:"#f9fbfc",accent:"#82B1FF",error:"#FF5252",info:"#4b5f6a",success:"#7ed321",warning:"#e65411",danger:"#d9534f "}}}}),_e=ke;n("d1e78");a["a"].config.productionTip=!1,a["a"].prototype.$http=_.a;var Ae=localStorage.getItem("token");Ae&&(a["a"].prototype.$http.defaults.headers.common["Authorization"]=Ae),new a["a"]({router:pe,store:O,vuetify:_e,render:function(e){return e(g)}}).$mount("#app")},"5a50":function(e,t,n){"use strict";n("dca8");t["a"]=Object.freeze({API_BASE:"https://realva-backend.herokuapp.com/"})},8360:function(e,t,n){"use strict";var a=n("8da5"),r=n.n(a);r.a},"8da5":function(e,t,n){}});
//# sourceMappingURL=app.b192453c.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-424b0b18"],{"169a":function(t,e,n){"use strict";n("caad"),n("45fc"),n("a9e3"),n("2532"),n("498a");var i=n("5530"),a=n("ade3"),o=(n("368e"),n("480e")),s=n("4ad4"),r=n("b848"),l=n("75eb"),c=n("e707"),u=n("e4d3"),d=n("21be"),h=n("f2e7"),f=n("a293"),v=n("58df"),g=n("d9bd"),m=n("80d2"),p=Object(v["a"])(s["a"],r["a"],l["a"],c["a"],u["a"],d["a"],h["a"]);e["a"]=p.extend({name:"v-dialog",directives:{ClickOutside:f["a"]},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200}},computed:{classes:function(){var t;return t={},Object(a["a"])(t,"v-dialog ".concat(this.contentClass).trim(),!0),Object(a["a"])(t,"v-dialog--active",this.isActive),Object(a["a"])(t,"v-dialog--persistent",this.persistent),Object(a["a"])(t,"v-dialog--fullscreen",this.fullscreen),Object(a["a"])(t,"v-dialog--scrollable",this.scrollable),Object(a["a"])(t,"v-dialog--animated",this.animate),t},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(t){t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind())},fullscreen:function(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(g["d"])("full-width",this)},beforeMount:function(){var t=this;this.$nextTick((function(){t.isBooted=t.isActive,t.isActive&&t.show()}))},beforeDestroy:function(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick:function(){var t=this;this.animate=!1,this.$nextTick((function(){t.animate=!0,window.clearTimeout(t.animateTimeout),t.animateTimeout=window.setTimeout((function(){return t.animate=!1}),150)}))},closeConditional:function(t){var e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):c["a"].options.methods.hideScroll.call(this)},show:function(){var t=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){t.$refs.content.focus(),t.bind()}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(t){if(t.keyCode===m["u"].esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var e=this.getActivator();this.$nextTick((function(){return e&&e.focus()}))}this.$emit("keydown",t)},onFocusin:function(t){if(t&&this.retainFocus){var e=t.target;if(e&&![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(t){return t.contains(e)}))){var n=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');n.length&&n[0].focus()}}},genContent:function(){var t=this;return this.showLazyContent((function(){return[t.$createElement(o["a"],{props:{root:!0,light:t.light,dark:t.dark}},[t.$createElement("div",{class:t.contentClasses,attrs:Object(i["a"])({role:"document",tabindex:t.isActive?0:void 0},t.getScopeIdAttrs()),on:{keydown:t.onKeydown},style:{zIndex:t.activeZIndex},ref:"content"},[t.genTransition()])])]}))},genTransition:function(){var t=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[t]):t},genInnerContent:function(){var t={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:this.onClickOutside,args:{closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(t.style=Object(i["a"])({},t.style,{maxWidth:"none"===this.maxWidth?void 0:Object(m["g"])(this.maxWidth),width:"auto"===this.width?void 0:Object(m["g"])(this.width)})),this.$createElement("div",t,this.getContentSlot())}},render:function(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},[this.genActivator(),this.genContent()])}})},"35f3":function(t,e,n){"use strict";n.d(e,"a",(function(){return b}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-card",[n("v-card-title",[t._v("Flights")]),n("v-data-table",{attrs:{headers:t.headers,items:t.flights,"items-per-page":10},scopedSlots:t._u([{key:"item.fuelSpent",fn:function(e){var i=e.item;return[n("td",[t._v(t._s(i.fuelSpent.toFixed(2))+" kg")])]}},{key:"item.actions",fn:function(e){var i=e.item;return["true"==t.all?n("td",[t._v(t._s(i.user))]):n("td",[n("v-icon",{attrs:{color:"red"},on:{click:function(e){return t.deleteFlight(i.id)}}},[t._v("delete")])],1)]}}])})],1)],1)},a=[],o=n("bc3a"),s=n.n(o),r=n("5a50"),l={name:"FlightsComponent",data:function(){return{flights:[],headers:[{text:"Departure",value:"departure"},{text:"Arrival",value:"arrival"},{text:"Departure time",value:"startTime"},{text:"Arrival time",value:"endTime"},{text:"Length",value:"length"},{text:"Aircraft",value:"aircraft"},{text:"Fuel spent",value:"fuelSpent"},{text:"Fuel cost $",value:"fuelCost"},{text:"Earning $",value:"earning"},{text:"Profit $",value:"profit"},{text:"",value:"actions"}]}},props:["username","all"],methods:{loadFlights:function(){var t=this,e="flight/all/"+this.username;void 0!==this.username&&"undefined"!==this.username&&null!==this.username&&""!=this.username||(e="flight/all"),s.a.get(r["a"].API_BASE+e).then((function(e){t.flights=e.data}))},deleteFlight:function(t){var e=this;confirm("Are you sure you want to delete")&&s.a.delete(r["a"].API_BASE+"flight/"+t).then((function(t){e.loadFlights()}))}},beforeMount:function(){this.loadFlights()}},c=l,u=n("2877"),d=n("6544"),h=n.n(d),f=n("b0af"),v=n("99d9"),g=n("8fea"),m=n("132d"),p=Object(u["a"])(c,i,a,!1,null,null,null),b=p.exports;h()(p,{VCard:f["a"],VCardTitle:v["c"],VDataTable:g["a"],VIcon:m["a"]})},"368e":function(t,e,n){},"4b1b":function(t,e,n){"use strict";n.d(e,"a",(function(){return B}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-card",[n("v-card-title",[t._v(" Routes "),n("v-spacer"),n("v-text-field",{attrs:{outlined:"",rounded:"","append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),n("v-data-table",{attrs:{headers:t.headers,items:t.routes,"items-per-page":10,search:t.search},scopedSlots:t._u([t.booking&&t.$store.getters.canBook?{key:"item.book",fn:function(e){var i=e.item;return[n("v-icon",{attrs:{color:"success"},nativeOn:{click:function(e){e.stopPropagation(),t.dialog=!0,t.bookingReq.routeId=i.id}}},[t._v("airplanemode_active")])]}}:null],null,!0)})],1),n("v-dialog",{attrs:{"max-width":"600"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-card-title",[n("span",{staticClass:"headline"},[t._v("Book flight")])]),n("v-card-text",[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"6"}},[n("v-select",{attrs:{outlined:"",rounded:"","item-text":"name","item-value":"id",items:t.planes,label:"Select airplane"},model:{value:t.bookingReq.aircraftId,callback:function(e){t.$set(t.bookingReq,"aircraftId",e)},expression:"bookingReq.aircraftId"}})],1)],1)],1)],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"darken-1",rounded:"",outlined:""},on:{click:function(e){t.dialog=!1}}},[t._v("Close")]),n("v-btn",{attrs:{color:"success darken-1",rounded:"",outlined:""},on:{click:t.bookFlight}},[t._v("Book flight")])],1)],1)],1)],1)},a=[],o=n("bc3a"),s=n.n(o),r=n("5a50"),l={name:"RoutesComponent",props:["booking"],data:function(){return{bookingReq:{routeId:0,aircraftId:0},dialog:!1,routes:[],search:"",planes:[],headers:[{text:"Flight number",value:"flightNumber"},{text:"Departure",value:"departure"},{text:"Arrival",value:"arrival"},{text:"Price",value:"ticketPrice"},{text:"Book",value:"book"}]}},methods:{loadRoutes:function(){var t=this,e="route/user/all";this.booking&&(e="route/user/all/location"),s.a.get(r["a"].API_BASE+e).then((function(e){t.routes=e.data}))},loadPlanes:function(){var t=this,e="booking/user/booking/aircrafts";s.a.get(r["a"].API_BASE+e).then((function(e){t.planes=e.data}))},bookFlight:function(){var t=this,e="booking/user/book";s()({url:r["a"].API_BASE+e,data:this.bookingReq,method:"POST"}).then((function(e){t.dialog=!1,t.$store.dispatch("setSnackbar",{showing:!0,text:"Flight booked",color:"success"}),t.$emit("flightBooked")})).catch((function(e){return t.$store.dispatch("setSnackbar",{showing:!0,text:e.response.data.message,color:"error"})}))}},beforeMount:function(){this.loadRoutes(),this.loadPlanes()}},c=l,u=n("2877"),d=n("6544"),h=n.n(d),f=n("8336"),v=n("b0af"),g=n("99d9"),m=n("62ad"),p=n("a523"),b=n("8fea"),k=n("169a"),x=n("132d"),C=n("0fd9"),w=n("b974"),y=n("2fa4"),A=n("8654"),_=Object(u["a"])(c,i,a,!1,null,null,null),B=_.exports;h()(_,{VBtn:f["a"],VCard:v["a"],VCardActions:g["a"],VCardText:g["b"],VCardTitle:g["c"],VCol:m["a"],VContainer:p["a"],VDataTable:b["a"],VDialog:k["a"],VIcon:x["a"],VRow:C["a"],VSelect:w["a"],VSpacer:y["a"],VTextField:A["a"]})},"786c":function(t,e,n){"use strict";var i=n("afbd"),a=n.n(i);a.a},afbd:function(t,e,n){},b604:function(t,e,n){"use strict";var i=n("e0c9"),a=n.n(i);a.a},d6ea:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return x}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{staticClass:"holder"},[n("BookingsComponent")],1)])},a=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app"},[n("FlightsComponent",{attrs:{all:"true"}}),t._v(" "),n("br"),n("RoutesComponent",{key:t.componentKey,attrs:{booking:"true"},on:{flightBooked:t.flightBooked}})],1)},s=[],r=n("4b1b"),l=n("35f3"),c=n("5a50"),u=n("bc3a"),d=n.n(u),h={name:"BookingsComponent",components:{RoutesComponent:r["a"],FlightsComponent:l["a"]},data:function(){return{componentKey:0}},methods:{flightBooked:function(){this.componentKey+=1,this.$store.dispatch("setCanBook",1),this.$router.push("profile")},getBooked:function(){var t=this;d.a.get(c["a"].API_BASE+"booking/user/all").then((function(e){e.data.length<1&&(t.componentKey+=1,t.$store.dispatch("setCanBook",0))}))}},beforeMount:function(){this.getBooked()}},f=h,v=(n("b604"),n("2877")),g=Object(v["a"])(f,o,s,!1,null,null,null),m=g.exports,p={name:"AirlineRoutes",components:{BookingsComponent:m}},b=p,k=(n("786c"),Object(v["a"])(b,i,a,!1,null,"2618870a",null)),x=k.exports},e0c9:function(t,e,n){}}]);
//# sourceMappingURL=chunk-424b0b18.7158237e.js.map
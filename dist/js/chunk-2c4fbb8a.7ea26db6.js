(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2c4fbb8a"],{"0253":function(e,a,i){"use strict";i.r(a),i.d(a,"default",(function(){return $}));var n=function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("div",{staticClass:"home"},[i("div",{staticClass:"holder"},[i("CreateAirlineComponent")],1)])},t=[],l=function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("div",{staticClass:"app"},[i("h2",[e._v("Create airline")]),i("div",{staticClass:"col-sm-3"},[i("v-form",{ref:"form"},[i("v-text-field",{attrs:{label:"Airline name"},model:{value:e.airline.airlineName,callback:function(a){e.$set(e.airline,"airlineName",a)},expression:"airline.airlineName"}}),i("v-text-field",{staticClass:"icao-input",attrs:{label:"Airlane icao"},model:{value:e.airline.airlineIcao,callback:function(a){e.$set(e.airline,"airlineIcao",a)},expression:"airline.airlineIcao"}}),i("v-text-field",{staticClass:"icao-input",attrs:{label:"Airline base icao"},model:{value:e.airline.airlineBaseIcao,callback:function(a){e.$set(e.airline,"airlineBaseIcao",a)},expression:"airline.airlineBaseIcao"}}),i("v-select",{attrs:{items:e.prices,label:"Starting balance"},model:{value:e.airline.startingBalance,callback:function(a){e.$set(e.airline,"startingBalance",a)},expression:"airline.startingBalance"}}),i("v-btn",{attrs:{color:"primary"},on:{click:e.createAirline}},[e._v("Create airline")])],1)],1)])},r=[],c=i("5a50"),s=i("bc3a"),o=i.n(s),u={name:"CreateAirlineComponent",data:function(){return{airline:{airlineName:"",airlineIcao:"",airlineBaseIcao:"",startingBalance:""},prices:[1e8,5e8,1e9,1e10]}},methods:{createAirline:function(){var e=this;o()({url:c["a"].API_BASE+"airline/user/create",data:this.airline,method:"POST"}).then((function(a){e.$router.push("profile")})).catch((function(e){console.log(e)}))}}},f=u,m=(i("115e"),i("2877")),p=i("6544"),d=i.n(p),v=i("8336"),b=i("4bd4"),C=i("b974"),h=i("8654"),A=Object(m["a"])(f,l,r,!1,null,null,null),x=A.exports;d()(A,{VBtn:v["a"],VForm:b["a"],VSelect:C["a"],VTextField:h["a"]});var B={name:"CreateAirline",components:{CreateAirlineComponent:x}},I=B,k=(i("890a"),Object(m["a"])(I,n,t,!1,null,"3e0d078e",null)),$=k.exports},"115e":function(e,a,i){"use strict";var n=i("7e68"),t=i.n(n);t.a},"7e68":function(e,a,i){},"890a":function(e,a,i){"use strict";var n=i("b79f"),t=i.n(n);t.a},b79f:function(e,a,i){}}]);
//# sourceMappingURL=chunk-2c4fbb8a.7ea26db6.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4957b47e"],{"169e":function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return D}));var i=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"home"},[t("div",{staticClass:"holder"},[t("AirlineDetailsComponent")],1)])},l=[],n=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"app"},[t("v-card",[t("v-card-title",[e._v("Airline details")]),t("v-card-text",[t("v-form",{ref:"form"},[t("v-text-field",{attrs:{outlined:"",rounded:"",label:"Airline name",readonly:""},model:{value:e.airline.name,callback:function(a){e.$set(e.airline,"name",a)},expression:"airline.name"}}),t("v-text-field",{attrs:{outlined:"",rounded:"",label:"Airline icao",readonly:""},model:{value:e.airline.icao,callback:function(a){e.$set(e.airline,"icao",a)},expression:"airline.icao"}}),t("v-text-field",{attrs:{outlined:"",rounded:"",label:"Airline base",readonly:""},model:{value:e.airline.base,callback:function(a){e.$set(e.airline,"base",a)},expression:"airline.base"}}),t("v-text-field",{attrs:{outlined:"",rounded:"",label:"Current balance in $",readonly:""},model:{value:e.airline.balance,callback:function(a){e.$set(e.airline,"balance",a)},expression:"airline.balance"}})],1)],1)],1),t("v-row",[t("v-col",{attrs:{cols:"12",sm:"5"}},[t("v-card",[t("v-card-title",[e._v("Pilots")]),t("v-data-table",{attrs:{headers:e.headersPilots,items:e.airline.pilots,"items-per-page":10}})],1)],1),t("v-col",{attrs:{cols:"12",sm:"7"}},[t("v-card",[t("v-card-title",[e._v("Pilots")]),t("v-data-table",{attrs:{headers:e.headersPlanes,items:e.airline.aircrafts,"items-per-page":10}})],1),t("router-link",{attrs:{to:"buy-aircraft"}},[t("v-btn",{attrs:{fixed:"",dark:"",fab:"",bottom:"",right:"",color:"success"}},[t("v-icon",[e._v("mdi-plus")])],1)],1)],1)],1)],1)},r=[],s=t("5a50"),o=t("bc3a"),c=t.n(o),d={name:"AirlineDetailsComponent",data:function(){return{airline:{name:"",icao:"",base:"",balance:0,aircrafts:[],pilots:[]},headersPilots:[{text:"Full name",value:"fullName"},{text:"Username",value:"userName"},{text:"Email",value:"email"}],headersPlanes:[{text:"Name",value:"name"},{text:"Type",value:"type"},{text:"Location",value:"location"},{text:"Registration",value:"registration"},{text:"Capacity",value:"capacity"}]}},methods:{load:function(){var e=this;c.a.get(s["a"].API_BASE+"airline/admin/details").then((function(a){e.airline=a.data}))}},beforeMount:function(){this.load()}},u=d,v=(t("746c"),t("2877")),b=t("6544"),m=t.n(b),f=t("8336"),p=t("b0af"),x=t("99d9"),h=t("62ad"),C=t("8fea"),A=t("4bd4"),V=t("132d"),k=t("0fd9"),y=t("8654"),_=Object(v["a"])(u,n,r,!1,null,null,null),w=_.exports;m()(_,{VBtn:f["a"],VCard:p["a"],VCardText:x["b"],VCardTitle:x["c"],VCol:h["a"],VDataTable:C["a"],VForm:A["a"],VIcon:V["a"],VRow:k["a"],VTextField:y["a"]});var P={name:"AirlineDetails",components:{AirlineDetailsComponent:w}},$=P,g=(t("e3de"),Object(v["a"])($,i,l,!1,null,"e61b7db8",null)),D=g.exports},"2d7b":function(e,a,t){},"746c":function(e,a,t){"use strict";var i=t("2d7b"),l=t.n(i);l.a},"85a6":function(e,a,t){},e3de:function(e,a,t){"use strict";var i=t("85a6"),l=t.n(i);l.a}}]);
//# sourceMappingURL=chunk-4957b47e.6e850b73.js.map
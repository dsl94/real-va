(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5df37e9b"],{"0b5f":function(t,e,a){"use strict";var n=a("a989"),i=a.n(n);i.a},"35f3":function(t,e,a){"use strict";a.d(e,"a",(function(){return b}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-card",[a("v-card-title",[t._v("Flights")]),a("v-data-table",{attrs:{headers:t.headers,items:t.flights,"items-per-page":10},scopedSlots:t._u([{key:"item.fuelSpent",fn:function(e){var n=e.item;return[a("td",[t._v(t._s(n.fuelSpent.toFixed(2))+" kg")])]}},{key:"item.actions",fn:function(e){var n=e.item;return["true"==t.all?a("td",[t._v(t._s(n.user))]):a("td",[a("v-icon",{attrs:{color:"red"},on:{click:function(e){return t.deleteFlight(n.id)}}},[t._v("delete")])],1)]}}])})],1)],1)},i=[],r=a("bc3a"),l=a.n(r),s=a("5a50"),u={name:"FlightsComponent",data:function(){return{flights:[],headers:[{text:"Departure",value:"departure"},{text:"Arrival",value:"arrival"},{text:"Departure time",value:"startTime"},{text:"Arrival time",value:"endTime"},{text:"Length",value:"length"},{text:"Aircraft",value:"aircraft"},{text:"Fuel spent",value:"fuelSpent"},{text:"",value:"actions"}]}},props:["username","all"],methods:{loadFlights:function(){var t=this,e="flight/all/"+this.username;void 0!==this.username&&"undefined"!==this.username&&null!==this.username&&""!=this.username||(e="flight/all"),l.a.get(s["a"].API_BASE+e).then((function(e){t.flights=e.data}))},deleteFlight:function(t){var e=this;confirm("Are you sure you want to delete")&&l.a.delete(s["a"].API_BASE+"flight/"+t).then((function(t){e.loadFlights()}))}},beforeMount:function(){this.loadFlights()}},o=u,c=a("2877"),f=a("6544"),d=a.n(f),h=a("b0af"),v=a("99d9"),m=a("8fea"),p=a("132d"),g=Object(c["a"])(o,n,i,!1,null,null,null),b=g.exports;d()(g,{VCard:h["a"],VCardTitle:v["c"],VDataTable:m["a"],VIcon:p["a"]})},a989:function(t,e,a){},affa:function(t,e,a){"use strict";a.r(e),a.d(e,"default",(function(){return c}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("div",{staticClass:"holder"},[a("FlightsComponent",{attrs:{all:"true"}})],1)])},i=[],r=a("35f3"),l={name:"Flights",components:{FlightsComponent:r["a"]}},s=l,u=(a("0b5f"),a("2877")),o=Object(u["a"])(s,n,i,!1,null,"36bfe905",null),c=o.exports}}]);
//# sourceMappingURL=chunk-5df37e9b.b49e3c85.js.map
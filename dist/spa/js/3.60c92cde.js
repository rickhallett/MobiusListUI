(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{a9c3:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-layout",{attrs:{view:"lHh Lpr lFf"}},[a("q-header",{attrs:{elevated:""}},[a("q-toolbar",[a("q-btn",{attrs:{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu"},on:{click:function(e){t.leftDrawerOpen=!t.leftDrawerOpen}}}),a("q-toolbar-title",[t._v("\n        MobiusList\n      ")])],1)],1),a("q-drawer",{attrs:{"show-if-above":"",bordered:"","content-class":"bg-grey-2",width:250},model:{value:t.leftDrawerOpen,callback:function(e){t.leftDrawerOpen=e},expression:"leftDrawerOpen"}},[a("q-list",[a("q-icon",{staticClass:"nav-icon",attrs:{name:"fas fa-infinity",color:"primary"}}),a("q-item-label",{attrs:{header:""}},[t._v("Mobius Navigation")]),a("q-item",{attrs:{clickable:""},on:{click:function(e){return t.navTo("/")}}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"home"}})],1),a("q-item-section",[a("q-item-label",[t._v("Homepage")]),a("q-item-label",{attrs:{caption:""}},[t._v("Your Dashboard")])],1)],1),a("q-item",{attrs:{clickable:""},on:{click:function(e){return t.navTo("/products")}}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"view_list"}})],1),a("q-item-section",[a("q-item-label",[t._v("Products")]),a("q-item-label",{attrs:{caption:""}},[t._v("View & Add Products")])],1)],1)],1)],1),a("q-page-container",[a("router-view")],1)],1)},o=[],r=(a("28a5"),a("a18c")),i={name:"MyLayout",data:function(){return{leftDrawerOpen:!1}},methods:{navTo:function(t){this.$router.push({path:t}).catch((function(t){return t}))}},beforeCreate:function(){"//localhost"===window.location.href.split(":")[1]?r["a"].$domain="https://localhost:5001":r["a"].$domain="https://mobiuscore222.azurewebsites.net",console.log(r["a"].$domain)},created:function(){}},c=i,l=(a("c430"),a("2877")),s=a("eebe"),u=a.n(s),f=a("4d5a"),d=a("e359"),m=a("65c6"),b=a("9c40"),p=a("6ac5"),w=a("9404"),q=a("1c1c"),v=a("0016"),h=a("0170"),Q=a("66e5"),_=a("4074"),k=a("09e3"),D=Object(l["a"])(c,n,o,!1,null,null,null);e["default"]=D.exports;u()(D,"components",{QLayout:f["a"],QHeader:d["a"],QToolbar:m["a"],QBtn:b["a"],QToolbarTitle:p["a"],QDrawer:w["a"],QList:q["a"],QIcon:v["a"],QItemLabel:h["a"],QItem:Q["a"],QItemSection:_["a"],QPageContainer:k["a"]})},c430:function(t,e,a){"use strict";var n=a("f76d"),o=a.n(n);o.a},f76d:function(t,e,a){}}]);
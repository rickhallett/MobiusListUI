(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"66bd":function(t,e,a){"use strict";var o=a("9ee9"),c=a.n(o);c.a},"6eb0":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{staticClass:"q-ma-md page"},[a("div",{staticClass:"row justify-around"},[a("div",{staticClass:"col-8"},[a("q-card",{staticClass:"bg-grey-2 q-mr-md"},[a("q-card-section",{attrs:{align:"right"}},[a("div",{staticClass:"row justify-end"},[a("div",{staticClass:"text-h6 text-primary"},[t._v("Product")]),a("q-icon",{attrs:{name:"add",size:"sm",color:"secondary"}})],1)]),a("q-card-section",{staticClass:"q-gutter-y-md"},[a("q-input",{attrs:{dense:"",label:"Name",placeholer:"Name"},model:{value:t.newProduct.name,callback:function(e){t.$set(t.newProduct,"name",e)},expression:"newProduct.name"}}),a("q-input",{attrs:{dense:"",label:"Description",placeholder:"Description",type:"textarea",autogrow:""},model:{value:t.newProduct.description,callback:function(e){t.$set(t.newProduct,"description",e)},expression:"newProduct.description"}}),a("q-input",{attrs:{dense:"",label:"Price",type:"number",prefix:"£"},model:{value:t.newProduct.price,callback:function(e){t.$set(t.newProduct,"price",e)},expression:"newProduct.price"}}),a("q-select",{attrs:{dense:"",label:"Category",options:t.categories},model:{value:t.newProduct.categoryId,callback:function(e){t.$set(t.newProduct,"categoryId",e)},expression:"newProduct.categoryId"}})],1),a("q-card-section",{staticClass:"row justify-end"},[a("q-btn",{staticClass:"submit-button",attrs:{flat:"",size:"20px",icon:"backup",color:"secondary"},on:{click:t.createProduct}}),a("q-btn",{staticClass:"submit-button",attrs:{flat:"",size:"20px",icon:"cancel",color:"negative"},on:{click:t.clearProduct}})],1)],1)],1),a("div",{staticClass:"col-4"},[a("q-card",{staticClass:"bg-grey-2 full-height"},[a("q-card-section",{attrs:{align:"right"}},[a("div",{staticClass:"row justify-end"},[a("div",{staticClass:"text-h6 text-primary"},[t._v("Category")]),a("q-icon",{attrs:{name:"add",size:"sm",color:"secondary"}})],1)]),a("q-card-section",{staticClass:"q-gutter-y-md"},[a("q-input",{attrs:{dense:"",label:"Name",placeholer:"Name"},model:{value:t.newCategory.name,callback:function(e){t.$set(t.newCategory,"name",e)},expression:"newCategory.name"}})],1),a("q-card-section",{staticClass:"row justify-end"},[a("q-btn",{staticClass:"submit-button",attrs:{flat:"",size:"20px",icon:"backup",color:"secondary"},on:{click:t.createCategory}}),a("q-btn",{staticClass:"submit-button",attrs:{flat:"",size:"20px",icon:"cancel",color:"negative"},on:{click:t.clearCategory}})],1)],1)],1)]),a("div",{staticClass:"row q-mt-md"},[a("div",{staticClass:"col-12"},[a("q-card",{},[a("q-table",{attrs:{title:"Products",data:t.products,columns:t.productColumns,"row-key":"productNumber","table-class":"text-grey-8","table-style":"padding: 0 40px",loading:t.tableLoading}},[a("template",{slot:"top"},[a("q-select",{staticStyle:{width:"200px"},attrs:{dense:"",label:"Filter Category",options:t.categories,clearable:""},model:{value:t.productFilter,callback:function(e){t.productFilter=e},expression:"productFilter"}})],1)],2)],1)],1)])])},c=[],r=(a("04ff"),a("c5f6"),a("5df2"),a("7f7f"),a("28a5"),a("a18c")),n={name:"Products",data:function(){return{tableLoading:!1,newProduct:{name:null,description:null,price:null,categoryId:null},newCategory:{name:null},categories:[],products:[],productColumns:[{name:"productNumber",label:"Product Number",field:"productNumber",align:"left",sortable:!0},{name:"name",label:"Name",field:"name",align:"left",sortable:!0},{name:"description",label:"Description",field:"description",align:"left",sortable:!1},{name:"price",label:"Price",field:"price",sortable:!1}],productFilter:null}},watch:{productFilter:function(t){t?this.getAllProductsByCategory(t.label):this.getAllProducts()}},methods:{createProduct:function(){var t=this;function e(t){var e=t.split("");return e[0]=e[0].toUpperCase(),e.join("")}console.log("newProduct1",this.newProduct);var a=!0;for(var o in this.newProduct)this.newProduct[o]||(a=!1,this.$q.notify({message:"".concat(e(o)," cannot be blank"),color:"negative",classes:"notification"}));if(a){var c={name:this.newProduct.name,description:this.newProduct.description,price:Number.parseFloat(this.newProduct.price),categoryId:Number.parseInt(this.newProduct.categoryId.value)};console.log("newProduct",c),this.$axios.post("".concat(r["a"].$domain,"/api/v1/products"),c).then((function(e){if(console.log(e),201===e.status){if(t.$q.notify({message:"Product Number: ".concat(e.data.productNumber,", '").concat(e.data.name,"' created"),color:"positive",classes:"notification"}),t.clearProduct(),t.productFilter)return void t.getAllProductsByCategory(t.productFilter);t.getAllProducts()}})).catch((function(e){console.log(e.response),"One or more validation errors occurred."===e.response.data.title&&t.$q.notify({message:"One or more validation errors occurred",color:"warning",classes:"notification"})}))}},clearProduct:function(){this.newProduct={name:null,description:null,price:null,categoryId:null}},createCategory:function(){var t=this;this.$axios.post("".concat(r["a"].$domain,"/api/v1/category"),this.newCategory).then((function(e){console.log(e),201===e.status&&(t.$q.notify({message:"".concat(e.data.name," category created"),color:"positive",classes:"notification"}),t.clearCategory(),t.getAllCategories())})).catch((function(e){console.log(e.response),400===e.response.status&&"Category already exists"===e.response.data&&(t.$q.notify({message:"Category already exists",color:"warning",classes:"notification"}),t.clearCategory())}))},clearCategory:function(){this.newCategory.name=null},getAllProductsByCategory:function(t){var e=this;this.tableLoading=!0,this.$axios.get("".concat(r["a"].$domain,"/api/v1/products?category=").concat(t)).then((function(t){e.products=t.data,e.tableLoading=!1})).catch((function(t){console.log(t),e.tableLoading=!1,e.createServerErrorMessage()}))},getAllProducts:function(){var t=this;this.tableLoading=!0,this.$axios.get("".concat(r["a"].$domain,"/api/v1/products")).then((function(e){t.tableLoading=!1,t.products=e.data,console.log(t.products)})).catch((function(e){console.log(e),t.tableLoading=!1,t.createServerErrorMessage()}))},getAllCategories:function(){var t=this;this.$axios.get("".concat(r["a"].$domain,"/api/v1/category")).then((function(e){t.categories=e.data.map((function(t){return{label:t.name,value:t.id}}))})).catch((function(e){console.log(e),t.tableLoading=!1,t.createServerErrorMessage()}))},createServerErrorMessage:function(){this.$q.notify({message:"Error contacting server",color:"negative",classes:"notification"})}},created:function(){this.getAllProducts(),this.getAllCategories()}},s=n,i=(a("66bd"),a("2877")),l=a("eebe"),d=a.n(l),u=a("9989"),g=a("f09f"),p=a("a370"),m=a("0016"),f=a("27f9"),b=a("ddd8"),y=a("9c40"),h=a("eaac"),v=Object(i["a"])(s,o,c,!1,null,"c68ea1f6",null);e["default"]=v.exports;d()(v,"components",{QPage:u["a"],QCard:g["a"],QCardSection:p["a"],QIcon:m["a"],QInput:f["a"],QSelect:b["a"],QBtn:y["a"],QTable:h["a"]})},"9ee9":function(t,e,a){}}]);
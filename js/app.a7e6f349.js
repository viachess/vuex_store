(function(t){function e(e){for(var a,o,i=e[0],s=e[1],u=e[2],l=0,p=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&p.push(n[o][0]),n[o]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);d&&d(e);while(p.length)p.shift()();return c.push.apply(c,u||[]),r()}function r(){for(var t,e=0;e<c.length;e++){for(var r=c[e],a=!0,i=1;i<r.length;i++){var s=r[i];0!==n[s]&&(a=!1)}a&&(c.splice(e--,1),t=o(o.s=r[0]))}return t}var a={},n={app:0},c=[];function o(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=a,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(r,a,function(e){return t[e]}.bind(null,a));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var d=s;c.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"0cd2":function(t,e,r){t.exports=r.p+"img/Untitled1.0ea61576.png"},4602:function(t,e,r){t.exports=r.p+"img/Untitled.a3ecc5f8.png"},"558c":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("v-main",[r("v-app-bar",{staticClass:"align-center",attrs:{elevation:"1"}},[r("v-toolbar-title",{staticClass:"mr-5"},[t._v("Test Shop")]),t._l(t.routeLinks,(function(e){return r("router-link",{key:e.name,staticClass:"nav-link",attrs:{to:e.path}},[t._v(t._s(e.name))])}))],2),r("router-view")],1)],1)},c=[],o=r("8c4f"),i={root:"/",cart:"/cart",favorites:"/favorites"},s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-row",[r("v-col",{staticClass:"cart-container"},[r("h2",{staticClass:"cart-container__title my-3"},[t._v("Корзина")]),t.length>0?r("div",{staticClass:"cart-list__container"},t._l(t.cart,(function(t){return r("cart-card",{key:t.uid,attrs:{product:t}})})),1):t._e(),t.length>0?r("div",{staticClass:"order-section"},[r("v-btn",{staticClass:"order-section__btn",attrs:{color:"success"},on:{click:t.submitProducts}},[t._v("Перейти к оформлению")]),r("div",{staticClass:"order-section__info"},[r("h4",[t._v("Ваша корзина")]),r("div",{staticClass:"order-section__info-details"},[r("p",[t._v("Товары ("+t._s(t.length)+")")]),r("h4",[t._v(t._s(t.cartTotal)+" ₽")])]),r("div",{staticClass:"order-section__info-total"},[r("h3",[t._v("Общая стоимость")]),r("h3",[t._v(t._s(t.cartTotal)+"₽")])])])],1):r("h4",[t._v("Корзина пуста")])])],1)],1)},u=[],d=r("5530"),l=(r("a15b"),r("d81d"),r("99af"),r("2f62")),p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cart-card"},[a("img",{staticClass:"cart-card__image",attrs:{src:r("7584")("./"+t.product.image)}}),a("div",{staticClass:"cart-card__info"},[a("h3",{staticClass:"cart-card__info-title"},[t._v(t._s(t.product.title))]),a("h4",{staticClass:"cart-card__info-price"},[t._v(t._s(t.product.price)+" ₽")]),a("div",{staticClass:"cart-card__info-buttons"},[a("button",{staticClass:"cart-card__info-action",attrs:{type:"button"},on:{click:t.addToFavorites}},[t._v(" "+t._s(t.isFavorited?"Удалить из избранного":"В избранное")+" ")]),a("button",{staticClass:"cart-card__info-action",attrs:{type:"button"},on:{click:t.removeFromCartMethod}},[t._v(" Удалить ")])])]),a("div",{staticClass:"cart-card__amount-wrapper"},[a("v-select",{staticClass:"cart-card__amount",attrs:{items:t.amountSelectValues,label:"Select","return-object":"","single-line":"",outlined:"",dense:""},model:{value:t.amountSelectCurrentValue,callback:function(e){t.amountSelectCurrentValue=e},expression:"amountSelectCurrentValue"}})],1)])},f=[],m={data:function(){return{}},props:{product:{type:Object}},components:{},mounted:function(){},methods:Object(d["a"])(Object(d["a"])(Object(d["a"])({},Object(l["b"])("cart",{removeFromCart:"removeFromCart",setItemAmount:"setItemAmount"})),Object(l["b"])("products",{toggleFavorite:"toggleFavorite"})),{},{addToFavorites:function(){this.toggleFavorite(this.product.uid)},removeFromCartMethod:function(){this.removeFromCart({uid:this.product.uid})}}),watch:{},computed:Object(d["a"])(Object(d["a"])({},Object(l["c"])("cart",{getCartItem:"getCartItem"})),{},{selectedProduct:function(){return this.select},isFavorited:function(){return this.product.favorited},amountSelectValues:function(){for(var t=[],e=1;e<=10;e++)t.push(e);return t},amountSelectCurrentValue:{get:function(){var t=this.getCartItem({uid:this.product.uid});return t},set:function(t){this.setItemAmount({uid:this.product.uid,newAmount:t})}}})},v=m,b=(r("bf9c"),r("2877")),_=r("6544"),g=r.n(_),h=r("b974"),C=Object(b["a"])(v,p,f,!1,null,"1b8945f2",null),O=C.exports;g()(C,{VSelect:h["a"]});var w={components:{CartCard:O},methods:Object(d["a"])(Object(d["a"])({},Object(l["b"])("cart",{updateCartTotal:"updateCartTotal"})),{},{submitProducts:function(){var t=this.cart.map((function(t){return"{\n          Название: ".concat(t.title,",\n          Цена: ").concat(t.price,",\n          Количество: ").concat(t.amount,"\n        }")})).join("\n");alert(t)}}),created:function(){this.updateCartTotal()},computed:Object(d["a"])(Object(d["a"])({},Object(l["d"])("cart",{cartTotal:"total"})),Object(l["c"])("cart",{cart:"getCart",length:"getCartLength",getCartTotal:"getCartTotal"}))},j=w,x=(r("ad2d"),r("8336")),y=r("62ad"),T=r("a523"),V=r("0fd9"),S=Object(b["a"])(j,s,u,!1,null,"238b506d",null),F=S.exports;g()(S,{VBtn:x["a"],VCol:y["a"],VContainer:T["a"],VRow:V["a"]});var k=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-row",[r("v-col",[r("h2",{staticClass:"my-3 ml-4"},[t._v("Каталог товаров")]),r("div",{staticClass:"product-list__container"},t._l(t.products,(function(t){return r("product-card",{key:t.uid,attrs:{product:t}})})),1)])],1)],1)},P=[],M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"product-list__card mb-2",attrs:{"max-width":"344",elevation:"0",product_id:t.product.id}},[a("HeartSVG",{class:[t.isFavorited?"favorited":""],attrs:{id:"heart-icon"},on:{click:t.addToFavorites}}),a("v-list-item",{attrs:{"three-line":""}},[a("v-list-item-content",[a("v-img",{attrs:{src:r("7584")("./"+t.product.image)}}),a("v-list-item-title",{staticClass:"text-h5 my-2"},[t._v(" "+t._s(t.product.price)+" ₽ ")]),a("v-list-item-title",{staticClass:"text-h6 mb-2"},[t._v(" "+t._s(t.product.title)+" ")]),a("v-list-item-subtitle",[t._v(t._s(t.product.description))])],1)],1),a("v-card-actions",{staticClass:"product-card__actions"},[a("v-btn",{staticClass:"add-to-cart-btn px-4 py-5 ml-2 mb-2",attrs:{elevation:"0"},on:{click:t.addToCartMethod}},[t._v(" В корзину ")]),a("div",{staticClass:"product-card__amount-wrapper"},[a("v-select",{staticClass:"ml-2",attrs:{items:t.amountSelectValues,label:"Select","return-object":"","single-line":"",outlined:"",dense:""},model:{value:t.amountSelectCurrentValue,callback:function(e){t.amountSelectCurrentValue=e},expression:"amountSelectCurrentValue"}})],1)],1)],1)},A=[],E=r("7d16"),I=r.n(E),L={data:function(){return{amountSelectCurrentValue:1}},props:{product:{type:Object}},components:{HeartSVG:I.a},created:function(){},methods:Object(d["a"])(Object(d["a"])(Object(d["a"])({},Object(l["b"])("cart",{addToCart:"addToCart"})),Object(l["b"])("products",{toggleFavorite:"toggleFavorite"})),{},{addToCartMethod:function(){this.addToCart({product:this.product,amount:this.amountSelectCurrentValue})},addToFavorites:function(){this.toggleFavorite(this.product.uid)}}),computed:{isFavorited:function(){return this.product.favorited},amountSelectValues:function(){for(var t=[],e=1;e<=10;e++)t.push(e);return t}}},R=L,U=(r("b755"),r("b0af")),$=r("99d9"),D=r("adda"),B=r("da13"),G=r("5d23"),N=Object(b["a"])(R,M,A,!1,null,"7657d7fe",null),z=N.exports;g()(N,{VBtn:x["a"],VCard:U["a"],VCardActions:$["a"],VImg:D["a"],VListItem:B["a"],VListItemContent:G["a"],VListItemSubtitle:G["b"],VListItemTitle:G["c"],VSelect:h["a"]});var H={name:"ProductsList",data:function(){return{}},components:{ProductCard:z},methods:Object(d["a"])({},Object(l["b"])("products",{setProducts:"setProducts"})),created:function(){this.setProducts()},computed:Object(d["a"])({},Object(l["c"])("products",{products:"getProducts"}))},J=H,q=(r("60df"),Object(b["a"])(J,k,P,!1,null,null,null)),K=q.exports;g()(q,{VCol:y["a"],VContainer:T["a"],VRow:V["a"]});var Q=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-row",[r("v-col",[r("h2",{staticClass:"my-3 ml-4"},[t._v("Избранное")]),t.favorites.length>0?r("div",{staticClass:"product-list__container"},t._l(t.favorites,(function(t){return r("product-card",{key:t.uid,attrs:{product:t}})})),1):r("h3",{staticClass:"my-3 ml-4"},[t._v("Список пуст")])])],1)],1)},W=[],X=(r("4de4"),r("d3b7"),{components:{ProductCard:z},computed:Object(d["a"])(Object(d["a"])({},Object(l["c"])("products",{products:"getProducts"})),{},{favorites:function(){var t=this.products.filter((function(t){var e=t.favorited;return!0===e}));return t}})}),Y=X,Z=Object(b["a"])(Y,Q,W,!1,null,null,null),tt=Z.exports;g()(Z,{VCol:y["a"],VContainer:T["a"],VRow:V["a"]});var et=[{path:i.root,name:"Товары",component:K},{path:i.cart,name:"Корзина",component:F},{path:i.favorites,name:"Избранное",component:tt}];a["a"].use(o["a"]);var rt=new o["a"]({routes:et}),at={name:"App",components:{},data:function(){return{}},computed:{routeLinks:function(){return et}}},nt=at,ct=(r("a8de"),r("7496")),ot=r("40dc"),it=r("f6c4"),st=r("2a7f"),ut=Object(b["a"])(nt,n,c,!1,null,"92631a12",null),dt=ut.exports;g()(ut,{VApp:ct["a"],VAppBar:ot["a"],VMain:it["a"],VToolbarTitle:st["a"]});var lt=r("f309");a["a"].use(lt["a"]);var pt=new lt["a"]({}),ft={products:[]},mt=ft;function vt(t){return t.products}var bt,_t={getProducts:vt},gt=r("ade3"),ht=(r("a4d3"),r("e01a"),r("7db0"),"products/SET_PRODUCTS"),Ct="products/TOGGLE_FAVORITE",Ot=(bt={},Object(gt["a"])(bt,ht,(function(t,e){var r=e.map((function(t){var e=Math.floor(12*Math.random())+1,r=Math.floor(150*Math.random())+1,a={id:t.id,uid:t.uid,title:t.dish,description:t.description,image:"img_".concat(e,".webp"),price:"".concat(r),favorited:!1};return a}));t.products=r})),Object(gt["a"])(bt,Ct,(function(t,e){var r=t.products.find((function(t){return t.uid===e}));r.favorited=!r.favorited})),bt),wt=r("1da1"),jt=(r("96cf"),"https://random-data-api.com/api/food/random_food?size=30");function xt(t){return yt.apply(this,arguments)}function yt(){return yt=Object(wt["a"])(regeneratorRuntime.mark((function t(e){var r,a,n,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r=e.state,a=e.commit,!(r.products.length>0)){t.next=3;break}return t.abrupt("return");case 3:return t.prev=3,t.next=6,fetch(jt);case 6:return n=t.sent,t.next=9,n.json();case 9:c=t.sent,a(ht,c),t.next=16;break;case 13:t.prev=13,t.t0=t["catch"](3),console.error(t.t0);case 16:case"end":return t.stop()}}),t,null,[[3,13]])}))),yt.apply(this,arguments)}function Tt(t,e){var r=t.commit;r(Ct,e)}var Vt={setProducts:xt,toggleFavorite:Tt},St={namespaced:!0,state:mt,getters:_t,mutations:Ot,actions:Vt},Ft={cart:[],total:0},kt=Ft;function Pt(t){var e=t.cart;return e}function Mt(t){var e=t.cart;return e.length}function At(t){var e=t.cart;return e.reduce((function(t,e){return t+e.amount*e.price}),0)}var Et,It=function(t){var e=t.cart;return function(t){var r=t.uid,a=e.find((function(t){return t.uid===r}));return a.amount}},Lt={getCart:Pt,getCartLength:Mt,getCartTotal:At,getCartItem:It},Rt=(r("c740"),"cart/ADD_TO_CART"),Ut="cart/SET_ITEM_AMOUNT",$t="cart/UPDATE_CART_TOTAL",Dt="cart/REMOVE_FROM_CART",Bt=(Et={},Object(gt["a"])(Et,Rt,(function(t,e){var r=t.cart,a=e.product,n=e.amount,c=r.find((function(t){return t.uid===a.uid}));void 0===c?(a.amount=n,r.push(a)):c.amount+=n})),Object(gt["a"])(Et,Ut,(function(t,e){var r=e.uid,a=e.newAmount,n=t.cart.findIndex((function(t){return t.uid===r}));t.cart[n]["amount"]=a})),Object(gt["a"])(Et,Dt,(function(t,e){var r=e.uid;t.cart=t.cart.filter((function(t){return t.uid!==r}))})),Object(gt["a"])(Et,$t,(function(t){t.total=t.cart.reduce((function(t,e){return t+e.amount*e.price}),0)})),Et);function Gt(t,e){var r=t.commit;r(Rt,e)}function Nt(t,e){var r=t.commit;r(Dt,e),r($t)}function zt(t,e){var r=t.commit;r(Ut,e),r($t)}function Ht(t){var e=t.commit;e($t)}var Jt={addToCart:Gt,removeFromCart:Nt,setItemAmount:zt,updateCartTotal:Ht},qt={namespaced:!0,state:kt,getters:Lt,mutations:Bt,actions:Jt};a["a"].use(l["a"]);var Kt=new l["a"].Store({state:{},modules:{products:St,cart:qt}}),Qt=Kt;a["a"].config.productionTip=!1,new a["a"]({vuetify:pt,router:rt,store:Qt,render:function(t){return t(dt)}}).$mount("#app")},"5bfa":function(t,e,r){t.exports=r.p+"img/img_1.b9c62da8.webp"},"60df":function(t,e,r){"use strict";r("f758")},"660b":function(t,e,r){t.exports=r.p+"img/img_10.94e5d44a.webp"},7584:function(t,e,r){var a={"./img_1.webp":"5bfa","./img_10.webp":"660b","./img_11.webp":"9469","./img_12.webp":"ce43","./img_2.webp":"ab4b","./img_3.webp":"b4fe","./img_4.webp":"d7dc","./img_5.webp":"927d","./img_6.webp":"d5b7","./img_7.webp":"f476","./img_8.webp":"86e9","./img_9.webp":"c850","./readme/Untitled.png":"4602","./readme/Untitled1.png":"0cd2"};function n(t){var e=c(t);return r(e)}function c(t){if(!r.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}n.keys=function(){return Object.keys(a)},n.resolve=c,t.exports=n,n.id="7584"},"7d16":function(t,e,r){var a=r("ded3").default,n=r("4082").default,c=["class","staticClass","style","staticStyle","attrs"];r("99af"),t.exports={functional:!0,render:function(t,e){var r=e._c,o=(e._v,e.data),i=e.children,s=void 0===i?[]:i,u=o.class,d=o.staticClass,l=o.style,p=o.staticStyle,f=o.attrs,m=void 0===f?{}:f,v=n(o,c);return r("svg",a({class:[u,d],style:[l,p],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 241.597 220.057",version:"1.0"},m)},v),s.concat([r("path",{attrs:{d:"M68.13 12.502c-26.934.231-51.58 21.477-55.082 48.294-3.113 23.844 7.33 47.4 23.969 64.214 27.514 27.806 61.226 49.794 83.446 82.547 4.391-4.688 9.279-12.065 14.228-17.529 25.23-27.85 58.165-48.013 80.864-78.154 17.176-22.807 19.103-58.114-.538-80.405-18.25-20.713-51.76-25.171-74.37-9.254-8.225 5.79-15.274 13.37-19.932 22.312-10.053-19.32-30.534-32.214-52.585-32.025z",opacity:".98"}})]))}}},"86e9":function(t,e,r){t.exports=r.p+"img/img_8.02483227.webp"},"927d":function(t,e,r){t.exports=r.p+"img/img_5.e221420e.webp"},9469:function(t,e,r){t.exports=r.p+"img/img_11.dcfe58c4.webp"},a8de:function(t,e,r){"use strict";r("bde0")},ab4b:function(t,e,r){t.exports=r.p+"img/img_2.0e55ed9b.webp"},ad2d:function(t,e,r){"use strict";r("558c")},b4fe:function(t,e,r){t.exports=r.p+"img/img_3.b9c0ee9d.webp"},b755:function(t,e,r){"use strict";r("e071")},bde0:function(t,e,r){},bf9c:function(t,e,r){"use strict";r("de99")},c850:function(t,e,r){t.exports=r.p+"img/img_9.6e1a82f2.webp"},ce43:function(t,e,r){t.exports=r.p+"img/img_12.eb35127a.webp"},d5b7:function(t,e,r){t.exports=r.p+"img/img_6.f85662d8.webp"},d7dc:function(t,e,r){t.exports=r.p+"img/img_4.67fcc8cc.webp"},de99:function(t,e,r){},e071:function(t,e,r){},f476:function(t,e,r){t.exports=r.p+"img/img_7.01d663f0.webp"},f758:function(t,e,r){}});
//# sourceMappingURL=app.a7e6f349.js.map
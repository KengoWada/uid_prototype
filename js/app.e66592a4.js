(function(t){function e(e){for(var r,a,s=e[0],u=e[1],i=e[2],l=0,d=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);p&&p(e);while(d.length)d.shift()();return c.push.apply(c,i||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],r=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(r=!1)}r&&(c.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},a={app:0},o={app:0},c=[];function s(t){return u.p+"js/"+({}[t]||t)+"."+{"chunk-2d0e95df":"430e3dc0","chunk-3f36ceda":"24f348fa","chunk-67c14738":"063c7975"}[t]+".js"}function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={"chunk-3f36ceda":1,"chunk-67c14738":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-2d0e95df":"31d6cfe0","chunk-3f36ceda":"68e89983","chunk-67c14738":"df453583"}[t]+".css",o=u.p+r,c=document.getElementsByTagName("link"),s=0;s<c.length;s++){var i=c[s],l=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(l===r||l===o))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){i=d[s],l=i.getAttribute("data-href");if(l===r||l===o)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var r=e&&e.target&&e.target.src||o,c=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[t],p.parentNode.removeChild(p),n(c)},p.href=o;var m=document.getElementsByTagName("head")[0];m.appendChild(p)})).then((function(){a[t]=0})));var r=o[t];if(0!==r)if(r)e.push(r[2]);else{var c=new Promise((function(e,n){r=o[t]=[e,n]}));e.push(r[2]=c);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=s(t);var d=new Error;i=function(e){l.onerror=l.onload=null,clearTimeout(p);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[t]=void 0}};var p=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(e)},u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/uid_prototype/",u.oe=function(t){throw console.error(t),t};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var d=0;d<i.length;d++)e(i[d]);var p=l;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"1d9f":function(t,e,n){"use strict";n("2d44")},"2d44":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);var r=n("b85c"),a=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("4de4"),n("99af"),n("ac1f"),n("5319"),n("d3b7"),n("25f0"),n("2b0e")),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("nav-bar"),n("router-view")],1)},c=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[n("div",{staticClass:"container-fluid"},[n("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[t._v("ONF")]),t._m(0),n("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[n("div",{staticClass:"navbar-nav"}),n("div",{staticClass:"navbar-nav ms-auto"},[n("router-link",{staticClass:"nav-item nav-link",attrs:{to:"/"}},[t._v("Market")]),n("router-link",{staticClass:"nav-item nav-link",attrs:{to:"/cart"}},[t._v("Cart")])],1)])])])},u=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[n("span",{staticClass:"navbar-toggler-icon"})])}],i={name:"NavBar"},l=i,d=n("2877"),p=Object(d["a"])(l,s,u,!1,null,null,null),m=p.exports,f={name:"App",components:{NavBar:m}},h=f,g=(n("034f"),Object(d["a"])(h,o,c,!1,null,null,null)),v=g.exports,b=(n("3ca3"),n("ddb0"),n("8c4f")),y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home container"},[n("h1",[t._v("MARKET")]),n("div",{staticClass:"row align-items-start"},t._l(t.getProducts,(function(t,e){return n("div",{key:e,staticClass:"col-md-4 col-sm-6 d-flex align-items-stretch"},[n("home-card",{attrs:{product:t,index:e}})],1)})),0)])},C=[],k=n("5530"),_=n("2f62"),A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card mb-4",staticStyle:{width:"18rem"}},[n("img",{staticClass:"card-img-top",attrs:{src:t.product.image,alt:t.product.name}}),n("div",{staticClass:"card-body"},[n("h5",{staticClass:"card-title",on:{click:function(e){return e.preventDefault(),t.moreDetails(e)}}},[t._v(" "+t._s(t.product.name)+" ")]),n("p",{staticClass:"card-text"},[t._v(" Cost Per "+t._s(t.product.unit)+": "+t._s(t.product.cost)+" "),n("br"),t._v(" Best Before Date: "+t._s(t._f("dos")(t.product.dos))+" ")]),n("button",{staticClass:"btn btn-success",on:{click:function(e){return e.preventDefault(),t.addToCart(e)}}},[t._v(" ADD TO CART ")])])])},E=[],x=(n("b0c0"),n("c740"),n("a9e3"),{name:"HomeCard",computed:{},methods:Object(k["a"])(Object(k["a"])({},Object(_["b"])(["getCart"])),{},{moreDetails:function(){this.$store.commit("setProduct",null),this.$store.commit("setProduct",this.product),this.$store.commit("setProductIndex",this.index),this.$router.push("/product/".concat(this.product.name))},addToCart:function(){var t=this,e=this.getCart(),n=e.findIndex((function(e){return e.product.name===t.product.name}));-1===n?e.push({product:this.product,quantity:1}):e[n].quantity+=1,this.$store.commit("setCart",e)}}),props:{product:Object,index:Number}}),M=x,O=(n("1d9f"),Object(d["a"])(M,A,E,!1,null,"5292102c",null)),S=O.exports,w={name:"Home",components:{HomeCard:S},computed:Object(k["a"])({},Object(_["b"])(["getProducts","getCart"]))},I=w,P=Object(d["a"])(I,y,C,!1,null,null,null),T=P.exports;a["a"].use(b["a"]);var j=[{path:"/",name:"Home",component:T},{path:"/product/:productName",name:"SingleProduct",component:function(){return n.e("chunk-3f36ceda").then(n.bind(null,"d2f1"))}},{path:"/cart",name:"Cart",component:function(){return n.e("chunk-67c14738").then(n.bind(null,"b789"))}},{path:"*",name:"404",component:function(){return n.e("chunk-2d0e95df").then(n.bind(null,"8cdb"))}}],K=new b["a"]({mode:"history",base:"/uid_prototype/",routes:j}),U=K,D={cart:[]},G={getCart:function(t){return t.cart}},B={},N={setCart:function(t,e){t.cart=e}},$={state:D,getters:G,actions:B,mutations:N},H=[{name:"Apples",cost:"UGX 8,500/=",price:8500,unit:"KG",image:"https://source.unsplash.com/Su1GqBGEk3c/",dos:15,comments:[{name:"MUKASA MIKE",comment:"Try to keep the apples in a cool place. I recommend a glass door fridge."}]},{name:"Yellow Bananas",cost:"UGX 1,500/=",price:1500,unit:"BUNCH",image:"https://source.unsplash.com/fczCr7MdE7U/",dos:8,comments:[{name:"MUKASA MIKE",comment:"Try to keep the apples in a cool place. I recommend a glass door fridge."}]},{name:"Oranges",cost:"UGX 10,000/=",price:1e4,unit:"KG",image:"https://source.unsplash.com/M3iwnCxuCwE/",dos:20,comments:[{name:"MUKASA MIKE",comment:"Try to keep the apples in a cool place. I recommend a glass door fridge."}]},{name:"Mangoes",cost:"UGX 6,000/=",price:6e3,unit:"KG",image:"https://source.unsplash.com/biK3YJHhBfM/",dos:12,comments:[{name:"MUKASA MIKE",comment:"Try to keep the apples in a cool place. I recommend a glass door fridge."}]},{name:"Avocado",cost:"UGX 13,500/=",price:13500,unit:"KG",image:"https://source.unsplash.com/EUEWT74ImEU/",dos:32,comments:[{name:"MUKASA MIKE",comment:"Try to keep the apples in a cool place. I recommend a glass door fridge."}]},{name:"Pineapples",cost:"UGX 4,500/=",price:4500,unit:"KG",image:"https://source.unsplash.com/kLSEH5vZESA/",dos:17,comments:[{name:"MUKASA MIKE",comment:"Try to keep the apples in a cool place. I recommend a glass door fridge."}]},{name:"Watermelon",cost:"UGX 2,000/=",price:3e3,unit:"Piece",image:"https://source.unsplash.com/izi5AnlbRIA/",dos:18,comments:[{name:"MUKASA MIKE",comment:"Try to keep the apples in a cool place. I recommend a glass door fridge."}]}],X={products:H},q={products:X.products,product:null,productIndex:null},J={getProducts:function(t){return t.products},getProduct:function(t){return t.product},getProductIndex:function(t){return t.productIndex}},L={},F={setProduct:function(t,e){t.product=e},setProductIndex:function(t,e){t.productIndex=e},addComment:function(t,e){var n=e.product,r=e.fruitIndex;t.products[r]=n}},R={state:q,getters:J,actions:L,mutations:F};a["a"].use(_["a"]);var Y=new _["a"].Store({modules:{cart:$,products:R}});a["a"].config.productionTip=!1;var z=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"];a["a"].filter("dos",(function(t){var e=new Date,n=new Date(e.getTime()+24*t*60*60*1e3),r=n.getDate()<10?"0"+n.getDate():n.getDate(),a=z[n.getMonth()],o=n.getFullYear();return"".concat(r," ").concat(a," ").concat(o)})),a["a"].filter("cartTotal",(function(t){var e,n=0,a=Object(r["a"])(t);try{for(a.s();!(e=a.n()).done;){var o=e.value,c=o.quantity*o.product.price;n+=c}}catch(s){a.e(s)}finally{a.f()}return n})),a["a"].filter("money",(function(t){return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")})),new a["a"]({router:U,store:Y,render:function(t){return t(v)}}).$mount("#app")},"85ec":function(t,e,n){}});
//# sourceMappingURL=app.e66592a4.js.map
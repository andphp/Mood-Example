!function(t){var e={};function i(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=491)}({0:function(t,e,i){"use strict";function n(t,e,i,n,r,a,o,s,u,l){var c,d="function"==typeof t?t.options:t;if(u){d.components||(d.components={});var p=Object.prototype.hasOwnProperty;for(var f in u)p.call(u,f)&&!p.call(d.components,f)&&(d.components[f]=u[f])}if(l&&("function"==typeof l.beforeCreate&&(l.beforeCreate=[l.beforeCreate]),(l.beforeCreate||(l.beforeCreate=[])).unshift((function(){this[l.__module]=this})),(d.mixins||(d.mixins=[])).push(l)),e&&(d.render=e,d.staticRenderFns=i,d._compiled=!0),n&&(d.functional=!0),a&&(d._scopeId="data-v-"+a),o?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},d._ssrRegister=c):r&&(c=s?function(){r.call(this,this.$root.$options.shadowRoot)}:r),c)if(d.functional){d._injectStyles=c;var _=d.render;d.render=function(t,e){return c.call(e),_(t,e)}}else{var y=d.beforeCreate;d.beforeCreate=y?[].concat(y,c):[c]}return{exports:t,options:d}}i.d(e,"a",(function(){return n}))},1:function(t,e){t.exports={"@VERSION":2}},10:function(t,e,i){Vue.prototype.__$appStyle__={},Vue.prototype.__merge_style&&Vue.prototype.__merge_style(i(11).default,Vue.prototype.__$appStyle__)},11:function(t,e,i){"use strict";i.r(e);var n=i(1),r=i.n(n);for(var a in n)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e.default=r.a},12:function(t,e){if("undefined"==typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then((function(i){return e.resolve(t()).then((function(){return i}))}),(function(i){return e.resolve(t()).then((function(){throw i}))}))}),"undefined"!=typeof uni&&uni&&uni.requireGlobal){var i=uni.requireGlobal();ArrayBuffer=i.ArrayBuffer,Int8Array=i.Int8Array,Uint8Array=i.Uint8Array,Uint8ClampedArray=i.Uint8ClampedArray,Int16Array=i.Int16Array,Uint16Array=i.Uint16Array,Int32Array=i.Int32Array,Uint32Array=i.Uint32Array,Float32Array=i.Float32Array,Float64Array=i.Float64Array,BigInt64Array=i.BigInt64Array,BigUint64Array=i.BigUint64Array}},14:function(t,e,i){"use strict";i.r(e);var n=i(4),r=i.n(n);for(var a in n)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e.default=r.a},2:function(t,e,i){"use strict";i.r(e);var n=i(3),r=i.n(n);for(var a in n)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e.default=r.a},20:function(t,e,i){"use strict";i.r(e);var n=i(8),r=i.n(n);for(var a in n)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e.default=r.a},21:function(t,e,i){"use strict";i.r(e);var n=i(5),r=i(2);for(var a in r)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return r[t]}))}(a);var o=i(0);var s=Object(o.a)(r.default,n.b,n.c,!1,null,null,"e0c756fe",!1,n.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(i(14).default,this.options.style):Object.assign(this.options.style,i(14).default)}).call(s),e.default=s.exports},23:function(t,e,i){"use strict";i.r(e);var n=i(9),r=i(6);for(var a in r)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return r[t]}))}(a);var o=i(0);var s=Object(o.a)(r.default,n.b,n.c,!1,null,null,"546b2efe",!1,n.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(i(20).default,this.options.style):Object.assign(this.options.style,i(20).default)}).call(s),e.default=s.exports},3:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"UniSection",emits:["click"],props:{type:{type:String,default:""},title:{type:String,default:""},color:{type:String,default:"#333"},subTitle:{type:String,default:""},padding:{type:Boolean,default:!1},overflow:{type:Boolean,default:!1}},data:function(){return{}},watch:{title:function(t){uni.report&&""!==t&&uni.report("title",t)}},methods:{onClick:function(){this.$emit("click")}}};e.default=n},4:function(t,e){t.exports={".uni-section":{"":{backgroundColor:["#ffffff",0,0,16],marginTop:["10",0,0,16]}},".uni-section-header":{"":{position:["relative",0,0,17],flexDirection:["row",0,0,17],alignItems:["center",0,0,17],paddingTop:["12",0,0,17],paddingRight:["10",0,0,17],paddingBottom:["12",0,0,17],paddingLeft:["10",0,0,17],fontWeight:["normal",0,0,17]}},".uni-section__head":{"":{flexDirection:["row",0,0,18],justifyContent:["center",0,0,18],alignItems:["center",0,0,18],marginRight:["10",0,0,18]}},".line":{"":{height:["12",0,0,19],backgroundColor:["#2979ff",0,0,19],borderRadius:["10",0,0,19],width:["4",0,0,19]}},".circle":{"":{width:["8",0,0,20],height:["8",0,0,20],borderTopRightRadius:["50",0,0,20],borderTopLeftRadius:["50",0,0,20],borderBottomLeftRadius:["50",0,0,20],borderBottomRightRadius:["50",0,0,20],backgroundColor:["#2979ff",0,0,20]}},".uni-section__content":{"":{flexDirection:["column",0,0,21],flex:[1,0,0,21],color:["#333333",0,0,21]}},".uni-section__content-title":{"":{fontSize:["14",0,0,22],color:["#2979ff",0,0,22]}},".distraction":{"":{flexDirection:["row",0,0,23],alignItems:["center",0,0,23]}},".uni-section__content-sub":{"":{fontSize:["12",0,0,24],color:["#999999",0,0,24],lineHeight:["16",0,0,24],marginTop:["2",0,0,24]}},".is--hidden":{"":{overflow:["hidden",0,0,25]}},"@VERSION":2}},491:function(t,e,i){"use strict";i.r(e);i(10),i(12);var n={uniCard:i(23).default,uniSection:i(21).default},r=i(0);var a=Object(r.a)({},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("scroll-view",{staticStyle:{flexDirection:"column"},attrs:{scrollY:!0,showScrollbar:!0,enableBackToTop:!0,bubble:"true"}},[i("view",{staticClass:["container"]},[i("uni-card",{attrs:{isShadow:!1,isFull:!0}},[i("u-text",{staticClass:["uni-h6"],appendAsTree:!0,attrs:{append:"tree"}},[t._v("\u5b57\u4f53\u8f85\u52a9\u6837\u5f0f\u63d0\u4f9b\u4e86\u5e38\u89c1\u7684\u5b57\u4f53\u6837\u5f0f\u7c7b")])]),i("uni-section",{attrs:{title:".uni-h1",type:"line"}},[i("view",{staticClass:["uni-ma-5","uni-mb-5","uni-pl-10"]},[i("u-text",{staticClass:["uni-h1"],appendAsTree:!0,attrs:{append:"tree"}},[t._v("\u4e00\u7ea7\u6807\u9898")])])]),i("uni-section",{attrs:{title:".uni-h2",type:"line"}},[i("view",{staticClass:["uni-mx-5","uni-mb-5","uni-pl-10"]},[i("u-text",{staticClass:["uni-h2"],appendAsTree:!0,attrs:{append:"tree"}},[t._v("\u4e8c\u7ea7\u6807\u9898")])])]),i("uni-section",{attrs:{title:".uni-h3",type:"line"}},[i("view",{staticClass:["uni-mx-5","uni-mb-5","uni-pl-10"]},[i("u-text",{staticClass:["uni-h3"],appendAsTree:!0,attrs:{append:"tree"}},[t._v("\u4e09\u7ea7\u6807\u9898")])])]),i("uni-section",{attrs:{title:".uni-h4",type:"line"}},[i("view",{staticClass:["uni-mx-5","uni-mb-5","uni-pl-10"]},[i("u-text",{staticClass:["uni-h4"],appendAsTree:!0,attrs:{append:"tree"}},[t._v("\u56db\u7ea7\u6807\u9898")])])]),i("uni-section",{attrs:{title:".uni-h5",type:"line"}},[i("view",{staticClass:["uni-mx-5","uni-mb-5","uni-pl-10"]},[i("u-text",{staticClass:["uni-h5"],appendAsTree:!0,attrs:{append:"tree"}},[t._v("\u4e94\u7ea7\u6807\u9898")])])]),i("uni-section",{attrs:{title:".uni-h6",type:"line"}},[i("view",{staticClass:["uni-mx-5","uni-mb-5","uni-pl-10"]},[i("u-text",{staticClass:["uni-h6"],appendAsTree:!0,attrs:{append:"tree"}},[t._v("\u516d\u7ea7\u6807\u9898")])])]),i("uni-section",{attrs:{title:".uni-subtitle",type:"line"}},[i("view",{staticClass:["uni-mx-5","uni-mb-5","uni-pl-10"]},[i("u-text",{staticClass:["uni-subtitle"],appendAsTree:!0,attrs:{append:"tree"}},[t._v("\u526f\u6807\u9898")])])]),i("uni-section",{attrs:{title:".uni-body",type:"line"}},[i("view",{staticClass:["uni-mx-5","uni-mb-5","uni-pl-10"]},[i("u-text",{staticClass:["uni-body"],appendAsTree:!0,attrs:{append:"tree"}},[t._v("uni-ui \u662f DCloud \u5b98\u65b9\u9762\u5411 uni-app \u5f00\u53d1\u8005\u63d0\u4f9b\u7684\u4e00\u5957 ui \u89e3\u51b3\u65b9\u6848")])])]),i("uni-section",{attrs:{title:".uni-caption",type:"line"}},[i("view",{staticClass:["uni-mx-5","uni-mb-5","uni-pl-10"]},[i("u-text",{staticClass:["uni-caption"],appendAsTree:!0,attrs:{append:"tree"}},[t._v("\u6807\u6ce8\u8bf4\u660e\u6587\u5b57")])])])],1)])}),[],!1,null,null,"91075018",!1,n,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style)}).call(a);var o=a.exports;o.mpType="page",o.route="pages/extUI/font/font",o.el="#root",new Vue(o)},5:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:["uni-section"]},[i("view",{staticClass:["uni-section-header"],attrs:{nvue:!0}},[t.type?i("view",{staticClass:["uni-section__head"]},[i("view",{staticClass:["uni-section__head-tag"],class:t.type})]):t._e(),i("view",{staticClass:["uni-section__content"]},[i("u-text",{staticClass:["uni-section__content-title"],class:{distraction:!t.subTitle},style:{color:t.color},appendAsTree:!0,attrs:{append:"tree"}},[t._v(t._s(t.title))]),t.subTitle?i("u-text",{staticClass:["uni-section__content-sub"],appendAsTree:!0,attrs:{append:"tree"}},[t._v(t._s(t.subTitle))]):t._e()]),i("view",[t._t("right")],2)]),i("view",{class:{"is--hidden":t.overflow},style:{padding:t.padding?"10px":""}},[t._t("default")],2)])},r=[]},6:function(t,e,i){"use strict";i.r(e);var n=i(7),r=i.n(n);for(var a in n)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e.default=r.a},7:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"UniCard",emits:["click"],props:{title:{type:String,default:""},subTitle:{type:String,default:""},padding:{type:String,default:"10px"},margin:{type:String,default:"15px"},spacing:{type:String,default:"0 10px"},extra:{type:String,default:""},cover:{type:String,default:""},thumbnail:{type:String,default:""},isFull:{type:Boolean,default:!1},isShadow:{type:Boolean,default:!0},shadow:{type:String,default:"0px 0px 3px 1px rgba(0, 0, 0, 0.08)"},border:{type:Boolean,default:!0}},methods:{onClick:function(t){this.$emit("click",t)}}};e.default=n},8:function(t,e){t.exports={".uni-card":{"":{marginTop:["10",0,0,16],marginRight:["10",0,0,16],marginBottom:["10",0,0,16],marginLeft:["10",0,0,16],paddingTop:[0,0,0,16],paddingRight:["8",0,0,16],paddingBottom:[0,0,0,16],paddingLeft:["8",0,0,16],borderRadius:["4",0,0,16],overflow:["hidden",0,0,16],fontFamily:["Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif",0,0,16],backgroundColor:["#ffffff",0,0,16],flex:[1,0,0,16]}},".uni-card__cover":{".uni-card ":{position:["relative",0,1,17],marginTop:["10",0,1,17],flexDirection:["row",0,1,17],overflow:["hidden",0,1,17],borderRadius:["4",0,1,17]}},".uni-card__cover-image":{".uni-card .uni-card__cover ":{flex:[1,0,2,18]}},".uni-card__header":{".uni-card ":{display:["flex",0,1,19],borderBottomWidth:["1",0,1,19],borderBottomStyle:["solid",0,1,19],borderBottomColor:["#EBEEF5",0,1,19],flexDirection:["row",0,1,19],alignItems:["center",0,1,19],paddingTop:["10",0,1,19],paddingRight:["10",0,1,19],paddingBottom:["10",0,1,19],paddingLeft:["10",0,1,19],overflow:["hidden",0,1,19]}},".uni-card__header-box":{".uni-card .uni-card__header ":{flex:[1,0,2,20],flexDirection:["row",0,2,20],alignItems:["center",0,2,20],overflow:["hidden",0,2,20]}},".uni-card__header-avatar":{".uni-card .uni-card__header ":{width:["40",0,2,21],height:["40",0,2,21],overflow:["hidden",0,2,21],borderRadius:["5",0,2,21],marginRight:["10",0,2,21]}},".uni-card__header-avatar-image":{".uni-card .uni-card__header .uni-card__header-avatar ":{flex:[1,0,3,22],width:["40",0,3,22],height:["40",0,3,22]}},".uni-card__header-content":{".uni-card .uni-card__header ":{flexDirection:["column",0,2,23],justifyContent:["center",0,2,23],flex:[1,0,2,23],overflow:["hidden",0,2,23]}},".uni-card__header-content-title":{".uni-card .uni-card__header .uni-card__header-content ":{fontSize:["15",0,3,24],color:["#3a3a3a",0,3,24]}},".uni-card__header-content-subtitle":{".uni-card .uni-card__header .uni-card__header-content ":{fontSize:["12",0,3,25],marginTop:["5",0,3,25],color:["#909399",0,3,25]}},".uni-card__header-extra":{".uni-card .uni-card__header ":{lineHeight:["12",0,2,26]}},".uni-card__header-extra-text":{".uni-card .uni-card__header .uni-card__header-extra ":{fontSize:["12",0,3,27],color:["#909399",0,3,27]}},".uni-card__content":{".uni-card ":{paddingTop:["10",0,1,28],paddingRight:["10",0,1,28],paddingBottom:["10",0,1,28],paddingLeft:["10",0,1,28],fontSize:["14",0,1,28],color:["#6a6a6a",0,1,28],lineHeight:["22",0,1,28]}},".uni-card__actions":{".uni-card ":{fontSize:["12",0,1,29]}},".uni-card--border":{"":{borderWidth:["1",0,0,30],borderStyle:["solid",0,0,30],borderColor:["#EBEEF5",0,0,30]}},".uni-card--shadow":{"":{position:["relative",0,0,31]}},".uni-card--full":{"":{marginTop:[0,0,0,32],marginRight:[0,0,0,32],marginBottom:[0,0,0,32],marginLeft:[0,0,0,32],borderLeftWidth:[0,0,0,32],borderRadius:[0,0,0,32]}},".uni-ellipsis":{"":{lines:[1,0,0,33]}},"@VERSION":2}},9:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:["uni-card"],class:{"uni-card--full":t.isFull,"uni-card--shadow":t.isShadow,"uni-card--border":t.border},style:{margin:t.isFull?0:t.margin,padding:t.spacing,"box-shadow":t.isShadow?t.shadow:""}},[t._t("cover",[t.cover?i("view",{staticClass:["uni-card__cover"]},[i("u-image",{staticClass:["uni-card__cover-image"],attrs:{mode:"widthFix",src:t.cover},on:{click:function(e){t.onClick("cover")}}})],1):t._e()]),t._t("title",[t.title||t.extra?i("view",{staticClass:["uni-card__header"]},[i("view",{staticClass:["uni-card__header-box"],on:{click:function(e){t.onClick("title")}}},[t.thumbnail?i("view",{staticClass:["uni-card__header-avatar"]},[i("u-image",{staticClass:["uni-card__header-avatar-image"],attrs:{src:t.thumbnail,mode:"aspectFit"}})],1):t._e(),i("view",{staticClass:["uni-card__header-content"]},[i("u-text",{staticClass:["uni-card__header-content-title","uni-ellipsis"],appendAsTree:!0,attrs:{append:"tree"}},[t._v(t._s(t.title))]),t.title&&t.subTitle?i("u-text",{staticClass:["uni-card__header-content-subtitle","uni-ellipsis"],appendAsTree:!0,attrs:{append:"tree"}},[t._v(t._s(t.subTitle))]):t._e()])]),i("view",{staticClass:["uni-card__header-extra"],on:{click:function(e){t.onClick("extra")}}},[i("u-text",{staticClass:["uni-card__header-extra-text"],appendAsTree:!0,attrs:{append:"tree"}},[t._v(t._s(t.extra))])])]):t._e()]),i("view",{staticClass:["uni-card__content"],style:{padding:t.padding},on:{click:function(e){t.onClick("content")}}},[t._t("default")],2),i("view",{staticClass:["uni-card__actions"],on:{click:function(e){t.onClick("actions")}}},[t._t("actions")],2)],2)},r=[]}});
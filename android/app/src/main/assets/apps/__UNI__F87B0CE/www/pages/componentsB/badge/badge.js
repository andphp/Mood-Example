!function(e){var t={};function o(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(r,a,function(t){return e[t]}.bind(null,a));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=1033)}({0:function(e,t,o){"use strict";function r(e,t,o,r,a,i,n,u,l,s){var d,c="function"==typeof e?e.options:e;if(l){c.components||(c.components={});var f=Object.prototype.hasOwnProperty;for(var p in l)f.call(l,p)&&!f.call(c.components,p)&&(c.components[p]=l[p])}if(s&&("function"==typeof s.beforeCreate&&(s.beforeCreate=[s.beforeCreate]),(s.beforeCreate||(s.beforeCreate=[])).unshift((function(){this[s.__module]=this})),(c.mixins||(c.mixins=[])).push(s)),t&&(c.render=t,c.staticRenderFns=o,c._compiled=!0),r&&(c.functional=!0),i&&(c._scopeId="data-v-"+i),n?(d=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),a&&a.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(n)},c._ssrRegister=d):a&&(d=u?function(){a.call(this,this.$root.$options.shadowRoot)}:a),d)if(c.functional){c._injectStyles=d;var b=c.render;c.render=function(e,t){return d.call(t),b(e,t)}}else{var g=c.beforeCreate;c.beforeCreate=g?[].concat(g,d):[d]}return{exports:e,options:c}}o.d(t,"a",(function(){return r}))},1:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports},10:function(e,t,o){Vue.prototype.__$appStyle__={},Vue.prototype.__merge_style&&Vue.prototype.__merge_style(o(11).default,Vue.prototype.__$appStyle__)},1033:function(e,t,o){"use strict";o.r(t);o(10),o(12);var r=o(338);r.default.mpType="page",r.default.route="pages/componentsB/badge/badge",r.default.el="#root",new Vue(r.default)},11:function(e,t,o){"use strict";o.r(t);var r=o(2),a=o.n(r);for(var i in r)["default"].indexOf(i)<0&&function(e){o.d(t,e,(function(){return r[e]}))}(i);t.default=a.a},12:function(e,t){if("undefined"==typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(e){var t=this.constructor;return this.then((function(o){return t.resolve(e()).then((function(){return o}))}),(function(o){return t.resolve(e()).then((function(){throw o}))}))}),"undefined"!=typeof uni&&uni&&uni.requireGlobal){var o=uni.requireGlobal();ArrayBuffer=o.ArrayBuffer,Int8Array=o.Int8Array,Uint8Array=o.Uint8Array,Uint8ClampedArray=o.Uint8ClampedArray,Int16Array=o.Int16Array,Uint16Array=o.Uint16Array,Int32Array=o.Int32Array,Uint32Array=o.Uint32Array,Float32Array=o.Float32Array,Float64Array=o.Float64Array,BigInt64Array=o.BigInt64Array,BigUint64Array=o.BigUint64Array}},142:function(e,t,o){"use strict";o.r(t);var r=o(143),a=o.n(r);for(var i in r)["default"].indexOf(i)<0&&function(e){o.d(t,e,(function(){return r[e]}))}(i);t.default=a.a},143:function(e,t,o){"use strict";var r=o(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(o(280)),i={name:"u-badge",mixins:[uni.$u.mpMixin,a.default,uni.$u.mixin],computed:{boxStyle:function(){return{}},badgeStyle:function(){var e={};if(this.color&&(e.color=this.color),this.bgColor&&!this.inverted&&(e.backgroundColor=this.bgColor),this.absolute&&(e.position="absolute",this.offset.length)){var t=this.offset[0],o=this.offset[1]||t;e.top=uni.$u.addUnit(t),e.right=uni.$u.addUnit(o)}return e},showValue:function(){switch(this.numberType){case"overflow":return Number(this.value)>Number(this.max)?this.max+"+":this.value;case"ellipsis":return Number(this.value)>Number(this.max)?"...":this.value;case"limit":return Number(this.value)>999?Number(this.value)>=9999?Math.floor(this.value/1e4*100)/100+"w":Math.floor(this.value/1e3*100)/100+"k":this.value;default:return Number(this.value)}}}};t.default=i},144:function(e,t){e.exports={"u-badge":{borderTopRightRadius:"100",borderTopLeftRadius:"100",borderBottomLeftRadius:"100",borderBottomRightRadius:"100",flexDirection:"row",lineHeight:"11",textAlign:"center",fontSize:"11",color:"#FFFFFF"},"u-badge--dot":{height:"8",width:"8"},"u-badge--inverted":{fontSize:"13"},"u-badge--not-dot":{paddingTop:"2",paddingRight:"5",paddingBottom:"2",paddingLeft:"5"},"u-badge--horn":{borderBottomLeftRadius:0},"u-badge--primary":{backgroundColor:"#3c9cff"},"u-badge--primary--inverted":{color:"#3c9cff"},"u-badge--error":{backgroundColor:"#f56c6c"},"u-badge--error--inverted":{color:"#f56c6c"},"u-badge--success":{backgroundColor:"#5ac725"},"u-badge--success--inverted":{color:"#5ac725"},"u-badge--info":{backgroundColor:"#909399"},"u-badge--info--inverted":{color:"#909399"},"u-badge--warning":{backgroundColor:"#f9ae3d"},"u-badge--warning--inverted":{color:"#f9ae3d"},"@VERSION":2}},161:function(e,t,o){"use strict";o.d(t,"b",(function(){return r})),o.d(t,"c",(function(){return a})),o.d(t,"a",(function(){}));var r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return e.show&&(0!==Number(e.value)||e.showZero||e.isDot)?o("u-text",{staticClass:["u-badge"],class:[e.isDot?"u-badge--dot":"u-badge--not-dot",e.inverted&&"u-badge--inverted","horn"===e.shape&&"u-badge--horn","u-badge--"+e.type+(e.inverted?"--inverted":"")],style:[e.$u.addStyle(e.customStyle),e.badgeStyle],appendAsTree:!0,attrs:{append:"tree"}},[e._v(e._s(e.isDot?"":e.showValue))]):e._e()},a=[]},2:function(e,t){e.exports={"u-line-1":{lines:1,textOverflow:"ellipsis",overflow:"hidden",flex:1},"u-line-2":{lines:2,textOverflow:"ellipsis",overflow:"hidden",flex:1},"u-line-3":{lines:3,textOverflow:"ellipsis",overflow:"hidden",flex:1},"u-line-4":{lines:4,textOverflow:"ellipsis",overflow:"hidden",flex:1},"u-line-5":{lines:5,textOverflow:"ellipsis",overflow:"hidden",flex:1},"u-border":{borderWidth:"0.5",borderColor:"#dadbde",borderStyle:"solid"},"u-border-top":{borderTopWidth:"0.5",borderColor:"#dadbde",borderTopStyle:"solid"},"u-border-left":{borderLeftWidth:"0.5",borderColor:"#dadbde",borderLeftStyle:"solid"},"u-border-right":{borderRightWidth:"0.5",borderColor:"#dadbde",borderRightStyle:"solid"},"u-border-bottom":{borderBottomWidth:"0.5",borderColor:"#dadbde",borderBottomStyle:"solid"},"u-border-top-bottom":{borderTopWidth:"0.5",borderBottomWidth:"0.5",borderColor:"#dadbde",borderTopStyle:"solid",borderBottomStyle:"solid"},"u-reset-button":{paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0,backgroundColor:"rgba(0,0,0,0)",borderWidth:0},"u-hover-class":{opacity:.7},"u-primary-light":{color:"#ecf5ff"},"u-warning-light":{color:"#fdf6ec"},"u-success-light":{color:"#f5fff0"},"u-error-light":{color:"#fef0f0"},"u-info-light":{color:"#f4f4f5"},"u-primary-light-bg":{backgroundColor:"#ecf5ff"},"u-warning-light-bg":{backgroundColor:"#fdf6ec"},"u-success-light-bg":{backgroundColor:"#f5fff0"},"u-error-light-bg":{backgroundColor:"#fef0f0"},"u-info-light-bg":{backgroundColor:"#f4f4f5"},"u-primary-dark":{color:"#398ade"},"u-warning-dark":{color:"#f1a532"},"u-success-dark":{color:"#53c21d"},"u-error-dark":{color:"#e45656"},"u-info-dark":{color:"#767a82"},"u-primary-dark-bg":{backgroundColor:"#398ade"},"u-warning-dark-bg":{backgroundColor:"#f1a532"},"u-success-dark-bg":{backgroundColor:"#53c21d"},"u-error-dark-bg":{backgroundColor:"#e45656"},"u-info-dark-bg":{backgroundColor:"#767a82"},"u-primary-disabled":{color:"#9acafc"},"u-warning-disabled":{color:"#f9d39b"},"u-success-disabled":{color:"#a9e08f"},"u-error-disabled":{color:"#f7b2b2"},"u-info-disabled":{color:"#c4c6c9"},"u-primary":{color:"#3c9cff"},"u-warning":{color:"#f9ae3d"},"u-success":{color:"#5ac725"},"u-error":{color:"#f56c6c"},"u-info":{color:"#909399"},"u-primary-bg":{backgroundColor:"#3c9cff"},"u-warning-bg":{backgroundColor:"#f9ae3d"},"u-success-bg":{backgroundColor:"#5ac725"},"u-error-bg":{backgroundColor:"#f56c6c"},"u-info-bg":{backgroundColor:"#909399"},"u-main-color":{color:"#303133"},"u-content-color":{color:"#606266"},"u-tips-color":{color:"#909193"},"u-light-color":{color:"#c0c4cc"},"u-block":{paddingTop:"14",paddingRight:"14",paddingBottom:"14",paddingLeft:"14"},"u-block__section":{marginBottom:"10"},"u-block__title":{marginTop:"10",fontSize:"15",color:"#606266",marginBottom:"10"},"u-cell-icon":{width:"36rpx",height:"36rpx",marginRight:"8rpx"},"u-page":{paddingTop:"15",paddingRight:"15",paddingBottom:"40",paddingLeft:"15"},"u-demo-block":{flex:1,marginBottom:"23"},"u-demo-block__content":{flexDirection:"column"},"u-demo-block__title":{fontSize:"14",color:"#8f9ca2",marginBottom:"8",flexDirection:"row"},"@VERSION":2}},255:function(e,t,o){"use strict";o.r(t);var r=o(144),a=o.n(r);for(var i in r)["default"].indexOf(i)<0&&function(e){o.d(t,e,(function(){return r[e]}))}(i);t.default=a.a},279:function(e,t,o){"use strict";o.r(t);var r=o(161),a=o(142);for(var i in a)["default"].indexOf(i)<0&&function(e){o.d(t,e,(function(){return a[e]}))}(i);var n=o(0);var u=Object(n.a)(a.default,r.b,r.c,!1,null,"361197e0","5856d750",!1,r.a,void 0);(function(e){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(o(255).default,this.options.style):Object.assign(this.options.style,o(255).default)}).call(u),t.default=u.exports},280:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={props:{isDot:{type:Boolean,default:uni.$u.props.badge.isDot},value:{type:[Number,String],default:uni.$u.props.badge.value},show:{type:Boolean,default:uni.$u.props.badge.show},max:{type:[Number,String],default:uni.$u.props.badge.max},type:{type:String,default:uni.$u.props.badge.type},showZero:{type:Boolean,default:uni.$u.props.badge.showZero},bgColor:{type:[String,null],default:uni.$u.props.badge.bgColor},color:{type:[String,null],default:uni.$u.props.badge.color},shape:{type:String,default:uni.$u.props.badge.shape},numberType:{type:String,default:uni.$u.props.badge.numberType},offset:{type:Array,default:uni.$u.props.badge.offset},inverted:{type:Boolean,default:uni.$u.props.badge.inverted},absolute:{type:Boolean,default:uni.$u.props.badge.absolute}}};t.default=r},338:function(e,t,o){"use strict";var r=o(741),a=o(511),i=o(0);var n=Object(i.a)(a.default,r.b,r.c,!1,null,null,"504bc90e",!1,r.a,void 0);(function(e){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(o(907).default,this.options.style):Object.assign(this.options.style,o(907).default)}).call(n),t.default=n.exports},511:function(e,t,o){"use strict";var r=o(512),a=o.n(r);t.default=a.a},512:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={data:function(){return{}}}},513:function(e,t){e.exports={box:{justifyContent:"space-between"},"u-page__tag-item":{marginRight:"40",marginTop:"10"},"badge-box":{width:"45",height:"45",borderTopLeftRadius:"3",borderTopRightRadius:"3",borderBottomLeftRadius:"3",borderBottomRightRadius:"3",backgroundColor:"#E6E6E6"},"u-demo-block__content":{flexDirection:"row",flexWrap:"wrap",alignItems:"center"},"@VERSION":2}},741:function(e,t,o){"use strict";o.d(t,"b",(function(){return a})),o.d(t,"c",(function(){return i})),o.d(t,"a",(function(){return r}));var r={uBadge:o(279).default},a=function(){var e=this.$createElement,t=this._self._c||e;return t("scroll-view",{staticStyle:{flexDirection:"column"},attrs:{scrollY:!0,showScrollbar:!0,enableBackToTop:!0,bubble:"true"}},[t("view",{staticClass:["u-page"]},[t("view",{staticClass:["u-demo-block"]},[t("u-text",{staticClass:["u-demo-block__title"],appendAsTree:!0,attrs:{append:"tree"}},[this._v("\u76f4\u89d2\u8fb9\u5f62\u72b6")]),t("view",{staticClass:["u-demo-block__content"]},[t("view",{staticClass:["u-page__tag-item"]},[t("u-badge",{attrs:{value:1500,shape:"horn"}})],1)])]),t("view",{staticClass:["u-demo-block"]},[t("u-text",{staticClass:["u-demo-block__title"],appendAsTree:!0,attrs:{append:"tree"}},[this._v("\u5fbd\u6807\u6570\u663e\u793a\u65b9\u5f0f")]),t("view",{staticClass:["u-demo-block__content"]},[t("view",{staticClass:["u-page__tag-item"]},[t("u-badge",{attrs:{value:5132,numberType:"ellipsis"}})],1),t("view",{staticClass:["u-page__tag-item"]},[t("u-badge",{attrs:{value:1011,numberType:"overflow"}})],1),t("view",{staticClass:["u-page__tag-item"]},[t("u-badge",{attrs:{value:1500,numberType:"limit"}})],1),t("view",{staticClass:["u-page__tag-item"]},[t("u-badge",{attrs:{value:45187,numberType:"limit"}})],1)])]),t("view",{staticClass:["u-demo-block"]},[t("u-text",{staticClass:["u-demo-block__title"],appendAsTree:!0,attrs:{append:"tree"}},[this._v("\u663e\u793a\u5706\u70b9")]),t("view",{staticClass:["u-demo-block__content"]},[t("view",{staticClass:["u-page__tag-item"]},[t("u-badge",{attrs:{value:1011,numberType:"overflow",isDot:!0}})],1)])]),t("view",{staticClass:["u-demo-block"]},[t("u-text",{staticClass:["u-demo-block__title"],appendAsTree:!0,attrs:{append:"tree"}},[this._v("\u81ea\u5b9a\u4e49\u4e3b\u9898")]),t("view",{staticClass:["u-demo-block__content"]},[t("view",{staticClass:["u-page__tag-item"]},[t("u-badge",{attrs:{value:9,type:"error"}})],1),t("view",{staticClass:["u-page__tag-item"]},[t("u-badge",{attrs:{value:9,type:"warning"}})],1),t("view",{staticClass:["u-page__tag-item"]},[t("u-badge",{attrs:{value:9,type:"success"}})],1),t("view",{staticClass:["u-page__tag-item"]},[t("u-badge",{attrs:{value:9,type:"primary"}})],1)])]),t("view",{staticClass:["u-demo-block"]},[t("u-text",{staticClass:["u-demo-block__title"],appendAsTree:!0,attrs:{append:"tree"}},[this._v("\u53cd\u8f6c\u8272")]),t("view",{staticClass:["u-demo-block__content"]},[t("view",{staticClass:["u-page__tag-item"]},[t("u-badge",{attrs:{value:9,type:"error",inverted:!0}})],1),t("view",{staticClass:["u-page__tag-item"]},[t("u-badge",{attrs:{value:1532,inverted:!0,type:"warning"}})],1),t("view",{staticClass:["u-page__tag-item"]},[t("u-badge",{attrs:{value:12,inverted:!0,type:"success"}})],1),t("view",{staticClass:["u-page__tag-item"]},[t("u-badge",{attrs:{value:999,inverted:!0,type:"primary"}})],1)])])])])},i=[]},907:function(e,t,o){"use strict";o.r(t);var r=o(513),a=o.n(r);for(var i in r)["default"].indexOf(i)<0&&function(e){o.d(t,e,(function(){return r[e]}))}(i);t.default=a.a}});
(function(t){function e(e){for(var n,s,i=e[0],c=e[1],u=e[2],l=0,f=[];l<i.length;l++)s=i[l],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&f.push(o[s][0]),o[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);p&&p(e);while(f.length)f.shift()();return r.push.apply(r,u||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,i=1;i<a.length;i++){var c=a[i];0!==o[c]&&(n=!1)}n&&(r.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},o={app:0},r=[];function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var p=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("85ec"),o=a.n(n);o.a},"08d3":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("7844");var n=a("5596"),o=(a("4b0a"),a("2bb1")),r=(a("66cf"),a("343b")),s=(a("4d48"),a("d1e1")),i=(a("81e6"),a("9ffb")),c=(a("4056"),a("44bf")),u=(a("3647"),a("ea47")),p=(a("3df5"),a("2830")),l=(a("0ec5"),a("21ab")),f=(a("0209"),a("7d5e")),d=(a("66b9"),a("b650")),h=(a("5246"),a("6b41")),m=(a("e7e5"),a("d399")),g=(a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("2b0e")),v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},b=[],y={name:"App",components:{}},_=y,w=(a("034f"),a("2877")),k=Object(w["a"])(_,v,b,!1,null,null,null),j=k.exports,F=a("8c4f"),O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("van-row",[a("van-col",{attrs:{span:"24"}},[a("van-swipe",{attrs:{autoplay:3e3}},t._l(t.images,(function(t,e){return a("van-swipe-item",{key:e},[a("van-image",{attrs:{"lazy-load":"",src:t}},[a("img",{attrs:{lazy:t,alt:"提示"}})])],1)})),1)],1)],1),a("van-row",{attrs:{gutter:"10"}},t._l(t.books,(function(e){return a("van-col",{key:e,attrs:{id:"book-panel",span:"8"},on:{click:t.toDetail}},[a("van-image",{attrs:{id:"book-image",width:"100",height:"100",src:e.image}}),a("p",{attrs:{id:"bookName"}},[t._v(t._s(e.title))]),a("p",{attrs:{id:"bookAvatar"}},[t._v(t._s(e.avatar))])],1)})),1)],1)},x=[],H=(a("d3b7"),a("bc3a")),S=a.n(H),P=a("4328"),E=a.n(P);function T(t,e){return new Promise((function(a,n){S.a.get(t,{params:e}).then((function(t){a(t)}),(function(t){n(t)})).catch((function(t){n(t)}))}))}S.a.defaults.timeout=5e3,S.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded;charset=UTF-8",S.a.defaults.baseURL=Object({NODE_ENV:"production",VUE_APP_CURRENTMODE:"dev",BASE_URL:"/"}).BASE_API,S.a.interceptors.request.use((function(t){return"post"===t.method&&(t.data=E.a.stringify(t.data)),t}),(function(t){return window.console.log("错误的传参"),Promise.reject(t)})),S.a.interceptors.response.use((function(t){return t.data.success?t:Promise.resolve(t)}),(function(t){return window.console.log("网络异常"),Promise.reject(t)}));var A=function(){return T("/petsCategory/list")},C={name:"Home",data:function(){return{images:["https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573916504237&di=d9365d6117ee594dd7cb53cfd7130f0d&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn%2Fw640h480%2F20180114%2Ff69c-fyqrewh9918851.jpg"],books:[{title:"道德经",avatar:"老子",image:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1122844215,532756123&fm=26&gp=0.jpg"},{title:"道德经",avatar:"老子",image:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1122844215,532756123&fm=26&gp=0.jpg"},{title:"道德经",avatar:"老子",image:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1122844215,532756123&fm=26&gp=0.jpg"},{title:"道德经",avatar:"老子",image:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1122844215,532756123&fm=26&gp=0.jpg"},{title:"道德经",avatar:"老子",image:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1122844215,532756123&fm=26&gp=0.jpg"},{title:"道德经",avatar:"老子",image:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1122844215,532756123&fm=26&gp=0.jpg"}]}},created:function(){var t=this;window.console.log("创建实例"),A().then((function(e){window.console.log("类别列表："+JSON.stringify(e)),0===e.data.code?t.categories=e.data.data:t.$message.error(e.data.msg)})),this.getSpeciesList()},methods:{toDetail:function(){this.$router.push({path:"/detail"})}}},G=C,K=(a("8aaa"),Object(w["a"])(G,O,x,!1,null,"111dd044",null)),Q=K.exports,W=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"detail"},[a("van-row",{staticClass:"book",attrs:{gutter:"20"}},[a("van-col",{staticClass:"left",attrs:{span:"8"}},[a("van-image",{attrs:{fit:"full",src:t.book.image}})],1),a("van-col",{attrs:{span:"16"}},[a("p",[t._v(t._s(t.book.name))]),a("p",[t._v(t._s(t.book.author))])]),a("van-col",{attrs:{span:"24"}},[a("van-button",{attrs:{plain:"",type:"primary"}},[t._v("TXT下载")])],1)],1),a("van-row",{staticClass:"intro"},[a("van-col",{attrs:{span:"24"}},[a("div",{domProps:{innerHTML:t._s(t.book.intro)}})])],1)],1)},Y=[],D={name:"Detail",props:{msg:String},data:function(){return{book:{name:"道德经",author:"老子（李耳）",intro:"《道德经》，春秋时期老子（李耳）的哲学作品，又称《道德真经》、《老子》、《五千言》、《老子五千文》，是中国古代先秦诸子分家前的一部著作，是道家哲学思想的重要来源。道德经分上下两篇，原文上篇《德经》、下篇《道经》，不分章，后改为《道经》37章在前，第38章之后为《德经》，并分为81章。《道德经》文本以哲学意义之“道德”为纲宗，论述修身、治国、用兵、养生之道，而多以政治为旨归，乃所谓“内圣外王”之学，文意深奥，包涵广博，被誉为万经之王。 [1-2]《道德经》是中国历史上最伟大的名著之一，对传统哲学、科学、政治、宗教等产生了深刻影响 [3]  。据联合国教科文组织统计，《道德经》是除了《圣经》以外被译成外国文字发布量最多的文化名著。",image:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1122844215,532756123&fm=26&gp=0.jpg"}}},methods:{}},M=D,$=(a("7938"),Object(w["a"])(M,W,Y,!1,null,"6ee8766d",null)),N=$.exports;g["a"].use(F["a"]);var U=F["a"].prototype.push;F["a"].prototype.push=function(t){return U.call(this,t).catch((function(t){return t}))};var L=new F["a"]({routes:[{path:"/",name:"默认",redirect:"/home"},{path:"/home",name:"Home",component:Q},{path:"/detail",name:"Detail",component:N}]});g["a"].config.productionTip=!1,g["a"].use(n["a"]).use(o["a"]).use(r["a"]).use(s["a"]).use(i["a"]).use(c["a"]).use(u["a"]).use(p["a"]).use(l["a"]).use(f["a"]).use(d["a"]).use(h["a"]).use(m["a"]),new g["a"]({render:function(t){return t(j)},router:L}).$mount("#app")},7938:function(t,e,a){"use strict";var n=a("08d3"),o=a.n(n);o.a},"85ec":function(t,e,a){},"8aaa":function(t,e,a){"use strict";var n=a("c086"),o=a.n(n);o.a},c086:function(t,e,a){}});
//# sourceMappingURL=app.043c1054.js.map
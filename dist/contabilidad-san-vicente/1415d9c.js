(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{310:function(t,e,r){var content=r(314);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(54).default)("cc046dac",content,!0,{sourceMap:!1})},313:function(t,e,r){"use strict";r(310)},314:function(t,e,r){var n=r(53)((function(i){return i[1]}));n.push([t.i,".trick:hover{background-color:#f8f9f9;color:#000;transition:all .3s ease-in-out}",""]),n.locals={},t.exports=n},316:function(t,e,r){"use strict";r.r(e);r(37),r(31),r(43);var n=r(10),o=(r(44),r(15),{data:function(){return{servicios:""}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/datos.json");case 2:return r=e.sent,e.next=5,r.json();case 5:n=e.sent,t.servicios=n.servicios;case 7:case"end":return e.stop()}}),e)})))()}}),l=(r(313),r(26)),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto"},[t._m(0),t._v(" "),e("div",{staticClass:"grid sm:grid-cols-2 lg:grid-cols-3 gap-6"},t._l(t.servicios,(function(r){return e("nuxt-link",{key:r,staticClass:"group trick overflow-hidden border px-4",attrs:{to:r.url}},[e("div",{staticClass:"mt-7"},[e("h3",{staticClass:"text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-200"},[t._v("\n                    "+t._s(r.name)+"\n                ")]),t._v(" "),e("p",{staticClass:"mt-3 text-gray-800 dark:text-gray-200"},[t._v("\n                    "+t._s(r.description)+"\n                ")]),t._v(" "),e("span",{staticClass:"mt-5 inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 font-medium"},[t._v(" Ver más\n                    "),e("svg",{staticClass:"bi bi-box-arrow-up-right",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"}}),t._v(" "),e("path",{attrs:{"fill-rule":"evenodd",d:"M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"}})])])])])})),1)])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"py-10"},[e("h2",{staticClass:"text-2xl font-bold md:text-4xl md:leading-tight dark:text-white"},[t._v("Nuestros Servicios")]),t._v(" "),e("p",{staticClass:"text-gray-500"},[t._v("Nos distinguimos por nuestro enfoque en soluciones contables integrales, respaldadas\n            por tecnología avanzada y análisis de datos detallado. "),e("strong",[t._v("En un mercado cada vez más competitivo y desafiante,\n            transformamos datos crudos en insights valiosos")]),t._v(" que impulsan su toma de decisiones estratégicas.")])])}],!1,null,null,null);e.default=component.exports}}]);
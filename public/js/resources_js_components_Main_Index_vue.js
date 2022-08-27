"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Main_Index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Main/Index.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Main/Index.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
// import 'vue3-carousel/dist/carousel.css';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Index",
  // components: {
  //     Carousel,
  //     Slide,
  //     Pagination,
  //     Navigation,
  // },
  data: function data() {
    return {
      images: null,
      details: null,
      // carousel settings
      settings: {
        itemsToShow: 1,
        snapAlign: 'center'
      }
    };
  },
  mounted: function mounted() {
    this.getNoveltiesMovies();
  },
  methods: {
    getNoveltiesMovies: function getNoveltiesMovies() {
      var _this = this;

      axios.get('/api/get-parse-movies').then(function (res) {
        _this.images = res.data.images;
        _this.details = res.data.details;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Main/Index.vue?vue&type=template&id=59a3f387&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Main/Index.vue?vue&type=template&id=59a3f387&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-59a3f387"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};

var _hoisted_1 = {
  "class": "bg-dark py-5"
};
var _hoisted_2 = {
  "class": "container px-5"
};
var _hoisted_3 = {
  "class": "row gx-5 justify-content-center"
};
var _hoisted_4 = {
  "class": "col-lg-6"
};
var _hoisted_5 = {
  "class": "text-center my-5"
};

var _hoisted_6 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
    "class": "display-5 fw-bolder text-white mb-2"
  }, "Добро пожаловать на MovieNotes!", -1
  /* HOISTED */
  );
});

var _hoisted_7 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    "class": "lead text-white-50 mb-4"
  }, "Сайт для создание собственной коллекции фильмов", -1
  /* HOISTED */
  );
});

var _hoisted_8 = {
  "class": "d-grid gap-3 d-sm-flex justify-content-sm-center"
};

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Начать ");

var _hoisted_10 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    "class": "btn btn-outline-light btn-lg px-4",
    href: "#features"
  }, "Подробнее", -1
  /* HOISTED */
  );
});

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<section class=\"py-5 border-bottom\" id=\"features\" data-v-59a3f387><h2 class=\"text-center fw-bold pb-4\" data-v-59a3f387>Как это работает?</h2><hr data-v-59a3f387><div class=\"container px-5 my-5\" data-v-59a3f387><div class=\"row gx-5\" data-v-59a3f387><div class=\"col-lg-4 mb-5 mb-lg-0\" data-v-59a3f387><div class=\"feature bg-primary bg-gradient text-white rounded-3 mb-3\" data-v-59a3f387><i class=\"bi bi-collection\" data-v-59a3f387></i></div><h2 class=\"h4 fw-bolder\" data-v-59a3f387>Шаг 1</h2><p data-v-59a3f387><b data-v-59a3f387>Зарегистрируйтесь</b> или <b data-v-59a3f387>войдите</b> в аккаунт, при добавлении фильмов заполняйте как можно детальней и больше полей. </p></div><div class=\"col-lg-4 mb-5 mb-lg-0\" data-v-59a3f387><div class=\"feature bg-primary bg-gradient text-white rounded-3 mb-3\" data-v-59a3f387><i class=\"bi bi-building\" data-v-59a3f387></i></div><h2 class=\"h4 fw-bolder\" data-v-59a3f387>Шаг 2</h2><p data-v-59a3f387> Если вы узнали новую информацию о фильме, вы можете <b data-v-59a3f387>отредактировать</b> уже добавленный фильм в вашей коллекции, это поможет работать <b data-v-59a3f387>поиску</b> и <b data-v-59a3f387>фильтру</b> корректней </p></div><div class=\"col-lg-4\" data-v-59a3f387><div class=\"feature bg-primary bg-gradient text-white rounded-3 mb-3\" data-v-59a3f387><i class=\"bi bi-toggles2\" data-v-59a3f387></i></div><h2 class=\"h4 fw-bolder\" data-v-59a3f387>Шаг 3</h2><p data-v-59a3f387> После просмотра фильма, измените статус фильма на <b data-v-59a3f387>&quot;Просмотрено&quot;</b> и добавите свой рейтинг, это нужно для правильной работы фильтра со статусом, а так же для отображения актуальной статистики в вашем профиле. </p></div></div></div></section>", 1);

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<section class=\"py-5 border-bottom\" data-v-59a3f387><div class=\"container px-5 my-5 px-5\" data-v-59a3f387><div class=\"text-center mb-5\" data-v-59a3f387><h2 class=\"fw-bolder\" data-v-59a3f387>Последнии Новинки</h2><p class=\"lead mb-0\" data-v-59a3f387>Фильмы, Сериалы, Мультфильмы и Аниме</p></div><div class=\"row gx-5 justify-content-center\" data-v-59a3f387><!--                &lt;div class=&quot;col-lg-6&quot; v-if=&quot;images&quot;&gt;--><!--                    &lt;carousel :itemsToShow=&quot;4&quot; :wrapAround=&quot;true&quot;&gt;--><!--                        &lt;slide v-for=&quot;image in images&quot; :key=&quot;image&quot;&gt;--><!--                            &lt;img :src=&quot;image&quot; alt=&quot;movie-img&quot;&gt;--><!--                            &lt;br&gt;--><!--                        &lt;/slide&gt;--><!--                        &lt;template #addons&gt;--><!--                            &lt;div&gt;--><!--                                ds--><!--                            &lt;/div&gt;--><!--                            &lt;navigation /&gt;--><!--                            &lt;pagination /&gt;--><!--                        &lt;/template&gt;--><!--                    &lt;/carousel&gt;--><!--                &lt;/div&gt;--></div></div></section>", 1);

var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<section class=\"bg-light py-5\" data-v-59a3f387><div class=\"container px-5 my-5 px-5\" data-v-59a3f387><div class=\"text-center mb-5\" data-v-59a3f387><div class=\"feature bg-primary bg-gradient text-white rounded-3 mb-3\" data-v-59a3f387><i class=\"bi bi-envelope\" data-v-59a3f387></i></div><h2 class=\"fw-bolder\" data-v-59a3f387>Get in touch</h2><p class=\"lead mb-0\" data-v-59a3f387>We&#39;d love to hear from you</p></div><div class=\"row gx-5 justify-content-center\" data-v-59a3f387><div class=\"col-lg-6\" data-v-59a3f387><!-- * * * * * * * * * * * * * * *--><!-- * * SB Forms Contact Form * *--><!-- * * * * * * * * * * * * * * *--><form id=\"contactForm\" data-sb-form-api-token=\"API_TOKEN\" data-v-59a3f387><!-- Name input--><div class=\"form-floating mb-3\" data-v-59a3f387><input class=\"form-control\" id=\"name\" type=\"text\" placeholder=\"Enter your name...\" data-sb-validations=\"required\" data-v-59a3f387><label for=\"name\" data-v-59a3f387>Full name</label><div class=\"invalid-feedback\" data-sb-feedback=\"name:required\" data-v-59a3f387>A name is required.</div></div><!-- Email address input--><div class=\"form-floating mb-3\" data-v-59a3f387><input class=\"form-control\" id=\"email\" type=\"email\" placeholder=\"name@example.com\" data-sb-validations=\"required,email\" data-v-59a3f387><label for=\"email\" data-v-59a3f387>Email address</label><div class=\"invalid-feedback\" data-sb-feedback=\"email:required\" data-v-59a3f387>An email is required.</div><div class=\"invalid-feedback\" data-sb-feedback=\"email:email\" data-v-59a3f387>Email is not valid.</div></div><!-- Phone number input--><div class=\"form-floating mb-3\" data-v-59a3f387><input class=\"form-control\" id=\"phone\" type=\"tel\" placeholder=\"(123) 456-7890\" data-sb-validations=\"required\" data-v-59a3f387><label for=\"phone\" data-v-59a3f387>Phone number</label><div class=\"invalid-feedback\" data-sb-feedback=\"phone:required\" data-v-59a3f387>A phone number is required.</div></div><!-- Message input--><div class=\"form-floating mb-3\" data-v-59a3f387><textarea class=\"form-control\" id=\"message\" type=\"text\" placeholder=\"Enter your message here...\" style=\"height:10rem;\" data-sb-validations=\"required\" data-v-59a3f387></textarea><label for=\"message\" data-v-59a3f387>Message</label><div class=\"invalid-feedback\" data-sb-feedback=\"message:required\" data-v-59a3f387>A message is required.</div></div><!-- Submit success message--><!----><!-- This is what your users will see when the form--><!-- has successfully submitted--><div class=\"d-none\" id=\"submitSuccessMessage\" data-v-59a3f387><div class=\"text-center mb-3\" data-v-59a3f387><div class=\"fw-bolder\" data-v-59a3f387>Form submission successful!</div> To activate this form, sign up at <br data-v-59a3f387><a href=\"https://startbootstrap.com/solution/contact-forms\" data-v-59a3f387>https://startbootstrap.com/solution/contact-forms</a></div></div><!-- Submit error message--><!----><!-- This is what your users will see when there is--><!-- an error submitting the form--><div class=\"d-none\" id=\"submitErrorMessage\" data-v-59a3f387><div class=\"text-center text-danger mb-3\" data-v-59a3f387>Error sending message!</div></div><!-- Submit Button--><div class=\"d-grid\" data-v-59a3f387><button class=\"btn btn-primary btn-lg disabled\" id=\"submitButton\" type=\"submit\" data-v-59a3f387>Submit</button></div></form></div></div></div></section>", 1);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Header"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("header", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [_hoisted_6, _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: {
      name: 'movie.index'
    },
    "class": "btn btn-primary btn-lg px-4 me-sm-3"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_9];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["to"]), _hoisted_10])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Header"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Features section"), _hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Features section"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Testimonials section"), _hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Testimonials section"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Contact section"), _hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Contact section")], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Main/Index.vue?vue&type=style&index=0&id=59a3f387&scoped=true&lang=css":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Main/Index.vue?vue&type=style&index=0&id=59a3f387&scoped=true&lang=css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.carousel__prev--in-active[data-v-59a3f387],\n    .carousel__next--in-active[data-v-59a3f387] {\n        display: none;\n}\n.carousel__slide > .carousel__item[data-v-59a3f387] {\n        transform: scale(1);\n        opacity: 0.5;\n        transition: 0.5s;\n}\n.carousel__slide--visible > .carousel__item[data-v-59a3f387] {\n        opacity: 1;\n        transform: rotateY(0);\n}\n.carousel__slide--next > .carousel__item[data-v-59a3f387] {\n        transform: scale(0.9) translate(-10px);\n}\n.carousel__slide--prev > .carousel__item[data-v-59a3f387] {\n        transform: scale(0.9) translate(10px);\n}\n.carousel__slide--active > .carousel__item[data-v-59a3f387] {\n        transform: scale(1.1);\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Main/Index.vue?vue&type=style&index=0&id=59a3f387&scoped=true&lang=css":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Main/Index.vue?vue&type=style&index=0&id=59a3f387&scoped=true&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_style_index_0_id_59a3f387_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Index.vue?vue&type=style&index=0&id=59a3f387&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Main/Index.vue?vue&type=style&index=0&id=59a3f387&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_style_index_0_id_59a3f387_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_style_index_0_id_59a3f387_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/Main/Index.vue":
/*!************************************************!*\
  !*** ./resources/js/components/Main/Index.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_59a3f387_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=59a3f387&scoped=true */ "./resources/js/components/Main/Index.vue?vue&type=template&id=59a3f387&scoped=true");
/* harmony import */ var _Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js */ "./resources/js/components/Main/Index.vue?vue&type=script&lang=js");
/* harmony import */ var _Index_vue_vue_type_style_index_0_id_59a3f387_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Index.vue?vue&type=style&index=0&id=59a3f387&scoped=true&lang=css */ "./resources/js/components/Main/Index.vue?vue&type=style&index=0&id=59a3f387&scoped=true&lang=css");
/* harmony import */ var _var_www_movie_notice_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_var_www_movie_notice_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Index_vue_vue_type_template_id_59a3f387_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-59a3f387"],['__file',"resources/js/components/Main/Index.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/Main/Index.vue?vue&type=script&lang=js":
/*!************************************************************************!*\
  !*** ./resources/js/components/Main/Index.vue?vue&type=script&lang=js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Main/Index.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/Main/Index.vue?vue&type=template&id=59a3f387&scoped=true":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/Main/Index.vue?vue&type=template&id=59a3f387&scoped=true ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_template_id_59a3f387_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_template_id_59a3f387_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Index.vue?vue&type=template&id=59a3f387&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Main/Index.vue?vue&type=template&id=59a3f387&scoped=true");


/***/ }),

/***/ "./resources/js/components/Main/Index.vue?vue&type=style&index=0&id=59a3f387&scoped=true&lang=css":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/Main/Index.vue?vue&type=style&index=0&id=59a3f387&scoped=true&lang=css ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_style_index_0_id_59a3f387_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Index.vue?vue&type=style&index=0&id=59a3f387&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Main/Index.vue?vue&type=style&index=0&id=59a3f387&scoped=true&lang=css");


/***/ })

}]);
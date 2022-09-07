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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Index",
  data: function data() {
    return {
      movies: null,
      // carousel settings
      settings: {
        itemsToShow: 3,
        itemsToScroll: 3,
        // autoplay: 3000,
        wrapAround: 'true',
        snapAlign: 'center'
      },
      // breakpoints are mobile first
      breakpoints: {
        1024: {
          itemsToShow: 3,
          snapAlign: 'center'
        }
      }
    };
  },
  mounted: function mounted() {
    this.getNewMovies();
  },
  methods: {
    getNewMovies: function getNewMovies() {
      var _this = this;

      axios.get('api/parse/movies').then(function (res) {
        _this.movies = res.data;
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

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<section class=\"py-5 border-bottom\" id=\"features\" data-v-59a3f387><h2 class=\"text-center fw-bold pb-4\" data-v-59a3f387>Как это работает?</h2><hr data-v-59a3f387><div class=\"container px-5 my-5\" data-v-59a3f387><div class=\"row gx-5\" data-v-59a3f387><div class=\"col-lg-4 mb-5 mb-lg-0\" data-v-59a3f387><div class=\"feature bg-primary bg-gradient text-white rounded-3 mb-3\" data-v-59a3f387><i class=\"bi bi-collection\" data-v-59a3f387></i></div><h2 class=\"h4 fw-bolder\" data-v-59a3f387>Шаг 1</h2><p data-v-59a3f387><b data-v-59a3f387>Зарегистрируйтесь</b> или <b data-v-59a3f387>войдите</b> в аккаунт, при добавлении фильмов заполняйте как можно детальней и больше полей. </p></div><div class=\"col-lg-4 mb-5 mb-lg-0\" data-v-59a3f387><div class=\"feature bg-primary bg-gradient text-white rounded-3 mb-3\" data-v-59a3f387><i class=\"bi bi-building\" data-v-59a3f387></i></div><h2 class=\"h4 fw-bolder\" data-v-59a3f387>Шаг 2</h2><p data-v-59a3f387> Если вы хотите добавить новую информацию о фильме, вы можете <b data-v-59a3f387>отредактировать</b> уже добавленный фильм в вашей коллекции, это поможет работать <b data-v-59a3f387>поиску</b> и <b data-v-59a3f387>фильтру</b> корректней </p></div><div class=\"col-lg-4\" data-v-59a3f387><div class=\"feature bg-primary bg-gradient text-white rounded-3 mb-3\" data-v-59a3f387><i class=\"bi bi-toggles2\" data-v-59a3f387></i></div><h2 class=\"h4 fw-bolder\" data-v-59a3f387>Шаг 3</h2><p data-v-59a3f387> После просмотра фильма, измените статус фильма на <b data-v-59a3f387>&quot;Просмотрено&quot;</b> и добавите свой рейтинг, это нужно для правильной работы фильтра по статусам, а так же для отображения актуальной статистики в вашем профиле. </p></div></div></div></section>", 1);

var _hoisted_12 = {
  "class": "py-5 border-bottom"
};
var _hoisted_13 = {
  "class": "container px-5 my-5 px-5"
};

var _hoisted_14 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "text-center mb-5"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", {
    "class": "fw-bolder"
  }, "Последнии Новинки"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    "class": "lead mb-0"
  }, "Фильмов, Сериалов, Мультфильмов и Аниме")], -1
  /* HOISTED */
  );
});

var _hoisted_15 = {
  "class": "new-movies-slider"
};
var _hoisted_16 = {
  "class": "container"
};
var _hoisted_17 = {
  "class": "row"
};
var _hoisted_18 = {
  "class": "col-lg-12 mb-4"
};
var _hoisted_19 = {
  "class": "carousel__item"
};
var _hoisted_20 = ["src"];
var _hoisted_21 = {
  "class": "new-movie-title mt-2 fw-bold"
};
var _hoisted_22 = {
  "class": "new-movie-details mt-2"
};

var _hoisted_23 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<section class=\"bg-light py-5\" data-v-59a3f387><div class=\"container px-5 my-5 px-5\" data-v-59a3f387><div class=\"text-center mb-5\" data-v-59a3f387><div class=\"feature bg-primary bg-gradient text-white rounded-3 mb-3\" data-v-59a3f387><i class=\"bi bi-envelope\" data-v-59a3f387></i></div><h2 class=\"fw-bolder\" data-v-59a3f387>Get in touch</h2><p class=\"lead mb-0\" data-v-59a3f387>We&#39;d love to hear from you</p></div><div class=\"row gx-5 justify-content-center\" data-v-59a3f387><div class=\"col-lg-6\" data-v-59a3f387><!-- * * * * * * * * * * * * * * *--><!-- * * SB Forms Contact Form * *--><!-- * * * * * * * * * * * * * * *--><form id=\"contactForm\" data-sb-form-api-token=\"API_TOKEN\" data-v-59a3f387><!-- Name input--><div class=\"form-floating mb-3\" data-v-59a3f387><input class=\"form-control\" id=\"name\" type=\"text\" placeholder=\"Enter your name...\" data-sb-validations=\"required\" data-v-59a3f387><label for=\"name\" data-v-59a3f387>Full name</label><div class=\"invalid-feedback\" data-sb-feedback=\"name:required\" data-v-59a3f387>A name is required.</div></div><!-- Email address input--><div class=\"form-floating mb-3\" data-v-59a3f387><input class=\"form-control\" id=\"email\" type=\"email\" placeholder=\"name@example.com\" data-sb-validations=\"required,email\" data-v-59a3f387><label for=\"email\" data-v-59a3f387>Email address</label><div class=\"invalid-feedback\" data-sb-feedback=\"email:required\" data-v-59a3f387>An email is required.</div><div class=\"invalid-feedback\" data-sb-feedback=\"email:email\" data-v-59a3f387>Email is not valid.</div></div><!-- Phone number input--><div class=\"form-floating mb-3\" data-v-59a3f387><input class=\"form-control\" id=\"phone\" type=\"tel\" placeholder=\"(123) 456-7890\" data-sb-validations=\"required\" data-v-59a3f387><label for=\"phone\" data-v-59a3f387>Phone number</label><div class=\"invalid-feedback\" data-sb-feedback=\"phone:required\" data-v-59a3f387>A phone number is required.</div></div><!-- Message input--><div class=\"form-floating mb-3\" data-v-59a3f387><textarea class=\"form-control\" id=\"message\" type=\"text\" placeholder=\"Enter your message here...\" style=\"height:10rem;\" data-sb-validations=\"required\" data-v-59a3f387></textarea><label for=\"message\" data-v-59a3f387>Message</label><div class=\"invalid-feedback\" data-sb-feedback=\"message:required\" data-v-59a3f387>A message is required.</div></div><!-- Submit success message--><!----><!-- This is what your users will see when the form--><!-- has successfully submitted--><div class=\"d-none\" id=\"submitSuccessMessage\" data-v-59a3f387><div class=\"text-center mb-3\" data-v-59a3f387><div class=\"fw-bolder\" data-v-59a3f387>Form submission successful!</div> To activate this form, sign up at <br data-v-59a3f387><a href=\"https://startbootstrap.com/solution/contact-forms\" data-v-59a3f387>https://startbootstrap.com/solution/contact-forms</a></div></div><!-- Submit error message--><!----><!-- This is what your users will see when there is--><!-- an error submitting the form--><div class=\"d-none\" id=\"submitErrorMessage\" data-v-59a3f387><div class=\"text-center text-danger mb-3\" data-v-59a3f387>Error sending message!</div></div><!-- Submit Button--><div class=\"d-grid\" data-v-59a3f387><button class=\"btn btn-primary btn-lg disabled\" id=\"submitButton\" type=\"submit\" data-v-59a3f387>Submit</button></div></form></div></div></div></section>", 1);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");

  var _component_CarouselSlide = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("CarouselSlide");

  var _component_navigation = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("navigation");

  var _component_pagination = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("pagination");

  var _component_Carousel = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Carousel");

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
  , ["to"]), _hoisted_10])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Header"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Features section"), _hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Features section"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Slider section"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [_hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [$data.movies ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Carousel, {
    key: 0,
    settings: $data.settings,
    breakpoints: $data.breakpoints
  }, {
    addons: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_navigation), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_pagination, {
        "class": "mt-2"
      })];
    }),
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.movies, function (movie, index) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_CarouselSlide, {
          key: movie.id
        }, {
          "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
            return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
              "class": "show-new-movie-link",
              to: {
                name: 'main.show',
                params: {
                  link: movie.link,
                  metaTitle: "MovieNotes|\u0424\u0438\u043B\u044C\u043C ".concat(movie.title)
                }
              }
            }, {
              "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
                  src: movie.image,
                  alt: "movie-img",
                  width: "185"
                }, null, 8
                /* PROPS */
                , _hoisted_20), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(movie.title), 1
                /* TEXT */
                ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_22, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(movie.year) + ", " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(movie.country) + ", " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(movie.genre), 1
                /* TEXT */
                )])];
              }),
              _: 2
              /* DYNAMIC */

            }, 1032
            /* PROPS, DYNAMIC_SLOTS */
            , ["to"])];
          }),
          _: 2
          /* DYNAMIC */

        }, 1024
        /* DYNAMIC_SLOTS */
        );
      }), 128
      /* KEYED_FRAGMENT */
      ))];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["settings", "breakpoints"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Slider section"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Contact section"), _hoisted_23, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Contact section")], 64
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.show-new-movie-link[data-v-59a3f387]{\n        text-decoration: none;\n        color: black;\n}\n.carousel__item[data-v-59a3f387] {\n        padding: 1.5rem;\n}\n.carousel__item[data-v-59a3f387]:hover{\n        background: gray;\n        color: white;\n}\n\n", ""]);
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
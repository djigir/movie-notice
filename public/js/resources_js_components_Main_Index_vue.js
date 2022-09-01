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
/* harmony import */ var vue3_carousel_dist_carousel_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue3-carousel/dist/carousel.css */ "./node_modules/vue3-carousel/dist/carousel.css");
/* harmony import */ var vue3_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue3-carousel */ "./node_modules/vue3-carousel/dist/carousel.es.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Index",
  components: {
    Carousel: vue3_carousel__WEBPACK_IMPORTED_MODULE_1__.Carousel,
    Slide: vue3_carousel__WEBPACK_IMPORTED_MODULE_1__.Slide,
    Pagination: vue3_carousel__WEBPACK_IMPORTED_MODULE_1__.Pagination,
    Navigation: vue3_carousel__WEBPACK_IMPORTED_MODULE_1__.Navigation
  },
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

  var _component_slide = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("slide");

  var _component_navigation = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("navigation");

  var _component_pagination = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("pagination");

  var _component_carousel = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("carousel");

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
  , ["to"]), _hoisted_10])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Header"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Features section"), _hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Features section"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Slider section"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [_hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [$data.movies ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_carousel, {
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
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_slide, {
          key: movie.id
        }, {
          "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
            return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
              "class": "show-new-movie-link",
              to: "/"
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

            }, 1024
            /* DYNAMIC_SLOTS */
            )];
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

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue3-carousel/dist/carousel.css":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue3-carousel/dist/carousel.css ***!
  \**************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  /* Color */\n  --vc-clr-primary: #642afb;\n  --vc-clr-secondary: #8e98f3;\n  --vc-clr-white: #ffffff;\n\n  /* Icon */\n  --vc-icn-width: 1.2em;\n\n  /* Navigation */\n  --vc-nav-width: 30px;\n  --vc-nav-color: #ffffff;\n  --vc-nav-background-color: var(--vc-clr-primary);\n\n  /* Pagination */\n  --vc-pgn-width: 10px;\n  --vc-pgn-height: 5px;\n  --vc-pgn-margin: 5px;\n  --vc-pgn-border-radius: 0;\n  --vc-pgn-background-color: var(--vc-clr-secondary);\n  --vc-pgn-active-color: var(--vc-clr-primary);\n}\n.carousel__prev,\n.carousel__next {\n  background-color: var(--vc-nav-background-color);\n  border-radius: var(--vc-nav-width);\n  width: var(--vc-nav-width);\n  height: var(--vc-nav-width);\n  text-align: center;\n  font-size: calc(var(--vc-nav-width) * 2 / 3);\n  padding: 0;\n  color: var(--vc-nav-color);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  border: 0;\n  cursor: pointer;\n}\n\n.carousel__prev {\n  top: 50%;\n  left: 0;\n  transform: translate(-50%, -50%);\n}\n\n.carousel__next {\n  top: 50%;\n  right: 0;\n  transform: translate(50%, -50%);\n}\n\n.carousel--rtl .carousel__prev {\n  left: auto;\n  right: 0;\n  transform: translate(50%, -50%);\n}\n\n.carousel--rtl .carousel__next {\n  right: auto;\n  left: 0;\n  transform: translate(-50%, -50%);\n}\n.carousel__pagination {\n  display: flex;\n  justify-content: center;\n  list-style: none;\n}\n.carousel__pagination-button {\n  margin: var(--vc-pgn-margin);\n  width: var(--vc-pgn-width);\n  height: var(--vc-pgn-height);\n  border-radius: var(--vc-pgn-height);\n  border: 0;\n  cursor: pointer;\n  background-color: var(--vc-pgn-background-color);\n}\n\n.carousel__pagination-button--active {\n  background-color: var(--vc-pgn-active-color);\n}\n.carousel__slide {\n  scroll-snap-stop: auto;\n  flex-shrink: 0;\n  margin: 0;\n  position: relative;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.carousel {\n  position: relative;\n  text-align: center;\n  box-sizing: border-box;\n}\n\n.carousel * {\n  box-sizing: border-box;\n}\n\n.carousel__track {\n  display: flex;\n  margin: 0;\n  padding: 0;\n  position: relative;\n}\n\n.carousel__viewport {\n  overflow: hidden;\n}\n.carousel__icon {\n  width: var(--vc-icn-width);\n  height: var(--vc-icn-width);\n  fill: currentColor;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


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

/***/ "./node_modules/vue3-carousel/dist/carousel.css":
/*!******************************************************!*\
  !*** ./node_modules/vue3-carousel/dist/carousel.css ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_cjs_js_clonedRuleSet_9_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_carousel_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./carousel.css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue3-carousel/dist/carousel.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_carousel_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_carousel_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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


/***/ }),

/***/ "./node_modules/vue3-carousel/dist/carousel.es.js":
/*!********************************************************!*\
  !*** ./node_modules/vue3-carousel/dist/carousel.es.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Carousel": () => (/* binding */ Carousel),
/* harmony export */   "Icon": () => (/* binding */ Icon),
/* harmony export */   "Navigation": () => (/* binding */ Navigation),
/* harmony export */   "Pagination": () => (/* binding */ Pagination),
/* harmony export */   "Slide": () => (/* binding */ Slide)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/**
 * Vue 3 Carousel 0.1.46
 * (c) 2022
 * @license MIT
 */


const defaultConfigs = {
    itemsToShow: 1,
    itemsToScroll: 1,
    modelValue: 0,
    transition: 300,
    autoplay: 0,
    snapAlign: 'center',
    wrapAround: false,
    pauseAutoplayOnHover: false,
    mouseDrag: true,
    touchDrag: true,
    dir: 'ltr',
    breakpoints: undefined,
};

const carouselProps = {
    // count of items to showed per view
    itemsToShow: {
        default: defaultConfigs.itemsToShow,
        type: Number,
    },
    // count of items to be scrolled
    itemsToScroll: {
        default: defaultConfigs.itemsToScroll,
        type: Number,
    },
    // control infinite scrolling mode
    wrapAround: {
        default: defaultConfigs.wrapAround,
        type: Boolean,
    },
    // control snap position alignment
    snapAlign: {
        default: defaultConfigs.snapAlign,
        validator(value) {
            // The value must match one of these strings
            return ['start', 'end', 'center', 'center-even', 'center-odd'].includes(value);
        },
    },
    // sliding transition time in ms
    transition: {
        default: defaultConfigs.transition,
        type: Number,
    },
    // an object to store breakpoints
    breakpoints: {
        default: defaultConfigs.breakpoints,
        type: Object,
    },
    // time to auto advance slides in ms
    autoplay: {
        default: defaultConfigs.autoplay,
        type: Number,
    },
    // pause autoplay when mouse hover over the carousel
    pauseAutoplayOnHover: {
        default: defaultConfigs.pauseAutoplayOnHover,
        type: Boolean,
    },
    // slide number number of initial slide
    modelValue: {
        default: undefined,
        type: Number,
    },
    // toggle mouse dragging.
    mouseDrag: {
        default: defaultConfigs.mouseDrag,
        type: Boolean,
    },
    // toggle mouse dragging.
    touchDrag: {
        default: defaultConfigs.touchDrag,
        type: Boolean,
    },
    // control snap position alignment
    dir: {
        default: defaultConfigs.dir,
        validator(value) {
            // The value must match one of these strings
            return ['rtl', 'ltr'].includes(value);
        },
    },
    // an object to pass all settings
    settings: {
        default() {
            return {};
        },
        type: Object,
    },
};

/**
 * return a debounced version of the function
 * @param fn
 * @param delay
 */
// eslint-disable-next-line no-unused-vars
function debounce(fn, delay) {
    let timerId;
    return function (...args) {
        if (timerId) {
            clearTimeout(timerId);
        }
        timerId = setTimeout(() => {
            fn(...args);
            timerId = null;
        }, delay);
    };
}
/**
 * return a throttle version of the function
 * Throttling
 *
 */
// eslint-disable-next-line no-unused-vars
function throttle(fn, limit) {
    let inThrottle;
    return function (...args) {
        const self = this;
        if (!inThrottle) {
            fn.apply(self, args);
            inThrottle = true;
            setTimeout(() => (inThrottle = false), limit);
        }
    };
}
function getSlidesVNodes(vNode) {
    var _a, _b, _c;
    // Return empty array if there's any node
    if (!vNode)
        return [];
    // Check if the Slides components are added directly without v-for (#72)
    if (((_b = (_a = vNode[0]) === null || _a === void 0 ? void 0 : _a.type) === null || _b === void 0 ? void 0 : _b.name) === 'CarouselSlide')
        return vNode;
    return ((_c = vNode[0]) === null || _c === void 0 ? void 0 : _c.children) || [];
}
function getMaxSlideIndex(config, slidesCount) {
    if (config.wrapAround) {
        return slidesCount - 1;
    }
    switch (config.snapAlign) {
        case 'start':
            return slidesCount - config.itemsToShow;
        case 'end':
            return slidesCount - 1;
        case 'center':
        case 'center-odd':
            return slidesCount - Math.ceil(config.itemsToShow / 2);
        case 'center-even':
            return slidesCount - Math.ceil(config.itemsToShow / 2);
        default:
            return 0;
    }
}
function getMinSlideIndex(config) {
    if (config.wrapAround) {
        return 0;
    }
    switch (config.snapAlign) {
        case 'start':
            return 0;
        case 'end':
            return config.itemsToShow - 1;
        case 'center':
        case 'center-odd':
            return Math.floor((config.itemsToShow - 1) / 2);
        case 'center-even':
            return Math.floor((config.itemsToShow - 2) / 2);
        default:
            return 0;
    }
}
function getCurrentSlideIndex(config, val, max, min) {
    if (config.wrapAround) {
        return val;
    }
    return Math.min(Math.max(val, min), max);
}
function getSlidesToScroll({ slidesBuffer, currentSlide, snapAlign, itemsToShow, wrapAround, slidesCount, }) {
    let output = slidesBuffer.indexOf(currentSlide);
    if (output === -1) {
        output = slidesBuffer.indexOf(Math.ceil(currentSlide));
    }
    if (snapAlign === 'center' || snapAlign === 'center-odd') {
        output -= (itemsToShow - 1) / 2;
    }
    else if (snapAlign === 'center-even') {
        output -= (itemsToShow - 2) / 2;
    }
    else if (snapAlign === 'end') {
        output -= itemsToShow - 1;
    }
    if (!wrapAround) {
        const max = slidesCount - itemsToShow;
        const min = 0;
        output = Math.max(Math.min(output, max), min);
    }
    return output;
}

var Carousel = (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    name: 'Carousel',
    props: carouselProps,
    setup(props, { slots, emit, expose }) {
        var _a;
        const root = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
        const slides = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
        const slidesBuffer = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
        const slideWidth = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(0);
        const slidesCount = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(1);
        let autoplayTimer;
        let transitionTimer;
        let breakpoints = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)({});
        // generate carousel configs
        let __defaultConfig = Object.assign({}, defaultConfigs);
        // current config
        const config = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)(Object.assign({}, __defaultConfig));
        // slides
        const currentSlideIndex = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)((_a = config.modelValue) !== null && _a !== void 0 ? _a : 0);
        const prevSlideIndex = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(0);
        const middleSlideIndex = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(0);
        const maxSlideIndex = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(0);
        const minSlideIndex = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(0);
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.provide)('config', config);
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.provide)('slidesBuffer', slidesBuffer);
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.provide)('slidesCount', slidesCount);
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.provide)('currentSlide', currentSlideIndex);
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.provide)('maxSlide', maxSlideIndex);
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.provide)('minSlide', minSlideIndex);
        /**
         * Configs
         */
        function initDefaultConfigs() {
            // generate carousel configs
            const mergedConfigs = Object.assign(Object.assign({}, props), props.settings);
            // Set breakpoints
            breakpoints = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(Object.assign({}, mergedConfigs.breakpoints));
            // remove extra values
            __defaultConfig = Object.assign(Object.assign({}, mergedConfigs), { settings: undefined, breakpoints: undefined });
            bindConfigs(__defaultConfig);
        }
        function updateBreakpointsConfigs() {
            const breakpointsArray = Object.keys(breakpoints.value)
                .map((key) => Number(key))
                .sort((a, b) => +b - +a);
            let newConfig = Object.assign({}, __defaultConfig);
            breakpointsArray.some((breakpoint) => {
                const isMatched = window.matchMedia(`(min-width: ${breakpoint}px)`).matches;
                if (isMatched) {
                    newConfig = Object.assign(Object.assign({}, newConfig), breakpoints.value[breakpoint]);
                    return true;
                }
                return false;
            });
            bindConfigs(newConfig);
        }
        function bindConfigs(newConfig) {
            for (let key in newConfig) {
                // @ts-ignore
                config[key] = newConfig[key];
            }
        }
        const handleWindowResize = debounce(() => {
            if (breakpoints.value) {
                updateBreakpointsConfigs();
                updateSlidesData();
            }
            updateSlideWidth();
        }, 16);
        /**
         * Setup functions
         */
        function updateSlideWidth() {
            if (!root.value)
                return;
            const rect = root.value.getBoundingClientRect();
            slideWidth.value = rect.width / config.itemsToShow;
        }
        function updateSlidesData() {
            slidesCount.value = Math.max(slides.value.length, 1);
            if (slidesCount.value <= 0)
                return;
            middleSlideIndex.value = Math.ceil((slidesCount.value - 1) / 2);
            maxSlideIndex.value = getMaxSlideIndex(config, slidesCount.value);
            minSlideIndex.value = getMinSlideIndex(config);
            currentSlideIndex.value = getCurrentSlideIndex(config, currentSlideIndex.value, maxSlideIndex.value, minSlideIndex.value);
        }
        function updateSlidesBuffer() {
            const slidesArray = [...Array(slidesCount.value).keys()];
            const shouldShiftSlides = config.wrapAround && config.itemsToShow + 1 <= slidesCount.value;
            if (shouldShiftSlides) {
                const buffer = config.itemsToShow !== 1
                    ? Math.round((slidesCount.value - config.itemsToShow) / 2)
                    : 0;
                let shifts = buffer - currentSlideIndex.value;
                if (config.snapAlign === 'end') {
                    shifts += Math.floor(config.itemsToShow - 1);
                }
                else if (config.snapAlign === 'center' || config.snapAlign === 'center-odd') {
                    shifts++;
                }
                // Check shifting directions
                if (shifts < 0) {
                    for (let i = shifts; i < 0; i++) {
                        slidesArray.push(Number(slidesArray.shift()));
                    }
                }
                else {
                    for (let i = 0; i < shifts; i++) {
                        slidesArray.unshift(Number(slidesArray.pop()));
                    }
                }
            }
            slidesBuffer.value = slidesArray;
        }
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(() => {
            if (breakpoints.value) {
                updateBreakpointsConfigs();
                updateSlidesData();
            }
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.nextTick)(() => setTimeout(updateSlideWidth, 16));
            initAutoplay();
            window.addEventListener('resize', handleWindowResize, { passive: true });
        });
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.onUnmounted)(() => {
            if (transitionTimer) {
                clearTimeout(transitionTimer);
            }
            if (autoplayTimer) {
                clearInterval(autoplayTimer);
            }
        });
        /**
         * Carousel Event listeners
         */
        let isTouch = false;
        const startPosition = { x: 0, y: 0 };
        const endPosition = { x: 0, y: 0 };
        const dragged = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({ x: 0, y: 0 });
        const isHover = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
        const handleMouseEnter = () => {
            isHover.value = true;
        };
        const handleMouseLeave = () => {
            isHover.value = false;
        };
        function handleDragStart(event) {
            isTouch = event.type === 'touchstart';
            if ((!isTouch && event.button !== 0) || isSliding.value) {
                return;
            }
            if (!isTouch) {
                event.preventDefault();
            }
            startPosition.x = isTouch ? event.touches[0].clientX : event.clientX;
            startPosition.y = isTouch ? event.touches[0].clientY : event.clientY;
            document.addEventListener(isTouch ? 'touchmove' : 'mousemove', handleDragging, true);
            document.addEventListener(isTouch ? 'touchend' : 'mouseup', handleDragEnd, true);
        }
        const handleDragging = throttle((event) => {
            endPosition.x = isTouch ? event.touches[0].clientX : event.clientX;
            endPosition.y = isTouch ? event.touches[0].clientY : event.clientY;
            const deltaX = endPosition.x - startPosition.x;
            const deltaY = endPosition.y - startPosition.y;
            dragged.y = deltaY;
            dragged.x = deltaX;
        }, 16);
        function handleDragEnd() {
            const direction = config.dir === 'rtl' ? -1 : 1;
            const tolerance = Math.sign(dragged.x) * 0.4;
            const draggedSlides = Math.round(dragged.x / slideWidth.value + tolerance) * direction;
            let newSlide = getCurrentSlideIndex(config, currentSlideIndex.value - draggedSlides, maxSlideIndex.value, minSlideIndex.value);
            // Prevent clicking if there is clicked slides
            if (draggedSlides && !isTouch) {
                const captureClick = (e) => {
                    e.stopPropagation();
                    window.removeEventListener('click', captureClick, true);
                };
                window.addEventListener('click', captureClick, true);
            }
            slideTo(newSlide);
            dragged.x = 0;
            dragged.y = 0;
            document.removeEventListener(isTouch ? 'touchmove' : 'mousemove', handleDragging, true);
            document.removeEventListener(isTouch ? 'touchend' : 'mouseup', handleDragEnd, true);
        }
        /**
         * Autoplay
         */
        function initAutoplay() {
            if (!config.autoplay || config.autoplay <= 0) {
                return;
            }
            autoplayTimer = setInterval(() => {
                if (config.pauseAutoplayOnHover && isHover.value) {
                    return;
                }
                next();
            }, config.autoplay);
        }
        function resetAutoplay() {
            if (autoplayTimer) {
                clearInterval(autoplayTimer);
                autoplayTimer = null;
            }
            initAutoplay();
        }
        /**
         * Navigation function
         */
        const isSliding = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
        function slideTo(slideIndex, mute = false) {
            if (currentSlideIndex.value === slideIndex || isSliding.value) {
                return;
            }
            resetAutoplay();
            // Wrap slide index
            const lastSlideIndex = slidesCount.value - 1;
            if (slideIndex > lastSlideIndex) {
                return slideTo(slideIndex - slidesCount.value);
            }
            if (slideIndex < 0) {
                return slideTo(slideIndex + slidesCount.value);
            }
            isSliding.value = true;
            prevSlideIndex.value = currentSlideIndex.value;
            currentSlideIndex.value = slideIndex;
            if (!mute) {
                emit('update:modelValue', currentSlideIndex.value);
            }
            transitionTimer = setTimeout(() => {
                if (config.wrapAround)
                    updateSlidesBuffer();
                isSliding.value = false;
            }, config.transition);
        }
        function next() {
            let nextSlide = currentSlideIndex.value + config.itemsToScroll;
            if (!config.wrapAround) {
                nextSlide = Math.min(nextSlide, maxSlideIndex.value);
            }
            slideTo(nextSlide);
        }
        function prev() {
            let prevSlide = currentSlideIndex.value - config.itemsToScroll;
            if (!config.wrapAround) {
                prevSlide = Math.max(prevSlide, minSlideIndex.value);
            }
            slideTo(prevSlide);
        }
        const nav = { slideTo, next, prev };
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.provide)('nav', nav);
        /**
         * Track style
         */
        const slidesToScroll = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => getSlidesToScroll({
            slidesBuffer: slidesBuffer.value,
            itemsToShow: config.itemsToShow,
            snapAlign: config.snapAlign,
            wrapAround: Boolean(config.wrapAround),
            currentSlide: currentSlideIndex.value,
            slidesCount: slidesCount.value,
        }));
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.provide)('slidesToScroll', slidesToScroll);
        const trackStyle = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
            const direction = config.dir === 'rtl' ? -1 : 1;
            const xScroll = slidesToScroll.value * slideWidth.value * direction;
            return {
                transform: `translateX(${dragged.x - xScroll}px)`,
                transition: `${isSliding.value ? config.transition : 0}ms`,
            };
        });
        function initCarousel() {
            initDefaultConfigs();
        }
        function restartCarousel() {
            initDefaultConfigs();
            updateBreakpointsConfigs();
            updateSlidesData();
            updateSlidesBuffer();
            updateSlideWidth();
            resetAutoplay();
        }
        function updateCarousel() {
            updateSlidesData();
            updateSlidesBuffer();
        }
        // Update the carousel on props change
        Object.keys(carouselProps).forEach((prop) => {
            if (['modelValue'].includes(prop))
                return;
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(() => props[prop], restartCarousel);
        });
        // Init carousel
        initCarousel();
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.watchEffect)(() => {
            // Handel when slides added/removed
            const needToUpdate = slidesCount.value !== slides.value.length;
            const currentSlideUpdated = props.modelValue !== undefined && currentSlideIndex.value !== props.modelValue;
            if (currentSlideUpdated) {
                slideTo(Number(props.modelValue), true);
            }
            if (needToUpdate) {
                updateCarousel();
            }
        });
        const data = {
            config,
            slidesBuffer,
            slidesCount,
            slideWidth,
            currentSlide: currentSlideIndex,
            maxSlide: maxSlideIndex,
            minSlide: minSlideIndex,
            middleSlide: middleSlideIndex,
        };
        expose({
            updateBreakpointsConfigs,
            updateSlidesData,
            updateSlideWidth,
            updateSlidesBuffer,
            initCarousel,
            restartCarousel,
            updateCarousel,
            slideTo,
            next,
            prev,
            nav,
            data,
        });
        const slotSlides = slots.default || slots.slides;
        const slotAddons = slots.addons;
        const slotsProps = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)(data);
        return () => {
            const slidesElements = getSlidesVNodes(slotSlides === null || slotSlides === void 0 ? void 0 : slotSlides(slotsProps));
            const addonsElements = (slotAddons === null || slotAddons === void 0 ? void 0 : slotAddons(slotsProps)) || [];
            slides.value = slidesElements;
            // Bind slide order
            slidesElements.forEach((el, index) => (el.props.index = index));
            const trackEl = (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)('ol', {
                class: 'carousel__track',
                style: trackStyle.value,
                onMousedown: config.mouseDrag
                    ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(handleDragStart, ['capture'])
                    : null,
                onTouchstart: config.touchDrag
                    ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(handleDragStart, ['capture'])
                    : null,
            }, slidesElements);
            const viewPortEl = (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)('div', { class: 'carousel__viewport' }, trackEl);
            return (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)('section', {
                ref: root,
                class: {
                    carousel: true,
                    'carousel--rtl': config.dir === 'rtl',
                },
                dir: config.dir,
                'aria-label': 'Gallery',
                onMouseenter: handleMouseEnter,
                onMouseleave: handleMouseLeave,
            }, [viewPortEl, addonsElements]);
        };
    },
});

const icons = {
    arrowUp: 'M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z',
    arrowDown: 'M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z',
    arrowRight: 'M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z',
    arrowLeft: 'M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z',
};

const Icon = (props) => {
    const iconName = props.name;
    if (!iconName || typeof iconName !== 'string') {
        return;
    }
    const path = icons[iconName];
    const pathEl = (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)('path', { d: path });
    const iconTitle = (props.title || iconName);
    const titleEl = (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)('title', iconTitle);
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)('svg', {
        class: 'carousel__icon',
        viewBox: '0 0 24 24',
        role: 'img',
        ariaLabel: iconTitle,
    }, [titleEl, pathEl]);
};
Icon.props = { name: String, title: String };

const Navigation = (props, { slots, attrs }) => {
    const { next: slotNext, prev: slotPrev } = slots || {};
    const config = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)('config', (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)(Object.assign({}, defaultConfigs)));
    const maxSlide = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)('maxSlide', (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(1));
    const minSlide = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)('minSlide', (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(1));
    const currentSlide = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)('currentSlide', (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(1));
    const nav = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)('nav', {});
    const isRTL = config.dir === 'rtl';
    const prevButton = (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)('button', {
        type: 'button',
        class: [
            'carousel__prev',
            !config.wrapAround &&
                currentSlide.value <= minSlide.value &&
                'carousel__prev--in-active',
            attrs === null || attrs === void 0 ? void 0 : attrs.class,
        ],
        'aria-label': `Navigate to previous slide`,
        onClick: nav.prev,
    }, (slotPrev === null || slotPrev === void 0 ? void 0 : slotPrev()) || (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(Icon, { name: isRTL ? 'arrowRight' : 'arrowLeft' }));
    const nextButton = (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)('button', {
        type: 'button',
        class: [
            'carousel__next',
            !config.wrapAround &&
                currentSlide.value >= maxSlide.value &&
                'carousel__next--in-active',
            attrs === null || attrs === void 0 ? void 0 : attrs.class,
        ],
        'aria-label': `Navigate to next slide`,
        onClick: nav.next,
    }, (slotNext === null || slotNext === void 0 ? void 0 : slotNext()) || (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(Icon, { name: isRTL ? 'arrowLeft' : 'arrowRight' }));
    return [prevButton, nextButton];
};

var Slide = (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    name: 'CarouselSlide',
    props: {
        index: {
            type: Number,
            default: 1,
        },
    },
    setup(props, { slots }) {
        const config = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)('config', (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)(Object.assign({}, defaultConfigs)));
        const slidesBuffer = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)('slidesBuffer', (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]));
        const currentSlide = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)('currentSlide', (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(0));
        const slidesToScroll = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)('slidesToScroll', (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(0));
        const wrapOrder = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(props.index);
        if (config.wrapAround) {
            updateOrder();
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(slidesBuffer, updateOrder);
        }
        function updateOrder() {
            wrapOrder.value = slidesBuffer.value.indexOf(props.index);
        }
        const slideStyle = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
            const items = config.itemsToShow;
            const width = `${(1 / items) * 100}%`;
            return {
                width,
                order: wrapOrder.value.toString(),
            };
        });
        const isActive = () => props.index === currentSlide.value;
        const isVisible = () => {
            const min = Math.ceil(slidesToScroll.value);
            const max = Math.floor(slidesToScroll.value + config.itemsToShow);
            const current = slidesBuffer.value.slice(min, max);
            return current.includes(props.index);
        };
        const isPrev = () => props.index === slidesBuffer.value[Math.ceil(slidesToScroll.value) - 1];
        const isNext = () => props.index ===
            slidesBuffer.value[Math.floor(slidesToScroll.value + config.itemsToShow)];
        return () => {
            var _a;
            return (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)('li', {
                style: slideStyle.value,
                class: {
                    carousel__slide: true,
                    'carousel__slide--active': isActive(),
                    'carousel__slide--visible': isVisible(),
                    'carousel__slide--prev': isPrev(),
                    'carousel__slide--next': isNext(),
                },
            }, (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots));
        };
    },
});

const Pagination = () => {
    const maxSlide = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)('maxSlide', (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(1));
    const minSlide = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)('minSlide', (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(1));
    const currentSlide = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)('currentSlide', (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(1));
    const nav = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)('nav', {});
    function handleButtonClick(slideNumber) {
        nav.slideTo(slideNumber);
    }
    const isActive = (slide) => {
        const val = currentSlide.value;
        return (val === slide ||
            (val > maxSlide.value && slide >= maxSlide.value) ||
            (val < minSlide.value && slide <= minSlide.value));
    };
    const children = [];
    for (let slide = minSlide.value; slide < maxSlide.value + 1; slide++) {
        const button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)('button', {
            type: 'button',
            class: {
                'carousel__pagination-button': true,
                'carousel__pagination-button--active': isActive(slide),
            },
            'aria-label': `Navigate to slide ${slide + 1}`,
            onClick: () => handleButtonClick(slide),
        });
        const item = (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)('li', { class: 'carousel__pagination-item', key: slide }, button);
        children.push(item);
    }
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)('ol', { class: 'carousel__pagination' }, children);
};




/***/ })

}]);
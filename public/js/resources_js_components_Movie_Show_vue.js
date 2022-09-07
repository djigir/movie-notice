"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Movie_Show_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Movie/Show.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Movie/Show.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var DEFAULT_IMAGE = 'https://mizez.com/custom/mizez/img/general/no-image-available.png';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Show",
  data: function data() {
    return {
      movie: null
    };
  },
  mounted: function mounted() {
    this.getMovie();
  },
  methods: {
    getMovie: function getMovie() {
      var _this = this;

      axios.get("/api/movie/".concat(this.$route.params.id)).then(function (res) {
        _this.movie = res.data.data;
      });
    },
    deleteMovie: function deleteMovie(id) {
      var _this2 = this;

      this.$swal.fire({
        title: "\u0412\u044B \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0445\u043E\u0442\u0438\u0442\u0438\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u0444\u0438\u043B\u044C\u043C \"".concat(this.movie.title, "\"?"),
        icon: 'question',
        showCloseButton: true,
        showConfirmButton: true,
        confirmButtonText: 'Да',
        confirmButtonColor: '#dc3545',
        showCancelButton: true,
        cancelButtonText: 'Отмена'
      }).then(function (res) {
        if (res.isConfirmed) {
          var Toast = _this2.$swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: function didOpen(toast) {
              toast.addEventListener('mouseenter', _this2.$swal.stopTimer);
              toast.addEventListener('mouseleave', _this2.$swal.resumeTimer);
            }
          });

          Toast.fire({
            icon: 'success',
            title: "\u0424\u0438\u043B\u044C\u043C \"".concat(_this2.movie.title, "\" \u0431\u044B\u043B \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0443\u0434\u0430\u043B\u0435\u043D!")
          });
          axios["delete"]("/api/movie/".concat(id)).then(function (res) {
            _this2.$router.push({
              name: 'movie.index'
            });
          });
        }
      });
    },
    isViewedText: function isViewedText(is_viewed) {
      return is_viewed === 1 ? 'Просмотрено' : 'Не просмотрено';
    },
    isViewedClass: function isViewedClass(is_viewed) {
      return is_viewed === 1 ? 'text-success' : 'text-danger';
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Movie/Show.vue?vue&type=template&id=48c25d47&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Movie/Show.vue?vue&type=template&id=48c25d47&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-48c25d47"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};

var _hoisted_1 = {
  key: 0,
  "class": "movie-details"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Назад к списку");

var _hoisted_3 = {
  "class": "container mt-5 mb-5"
};
var _hoisted_4 = {
  "class": "row"
};
var _hoisted_5 = {
  "class": "col-md-7"
};
var _hoisted_6 = ["src"];
var _hoisted_7 = {
  "class": "project-info-box"
};

var _hoisted_8 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Тип информации: ", -1
  /* HOISTED */
  );
});

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Мои данные");

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("HD rezka");

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("КиноПоиск");

var _hoisted_12 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "additional-info project-info-box mt-0"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Тип информации: "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" kdflksdlkflkd ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Тип информации: "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" kdflksdlkflkd ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "dksakds"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "dksakds"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "dksakds"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "dksakds")], -1
  /* HOISTED */
  );
});

var _hoisted_13 = {
  "class": "col-md-5"
};
var _hoisted_14 = {
  "class": "project-info-box mt-0"
};

var _hoisted_15 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Название: ", -1
  /* HOISTED */
  );
});

var _hoisted_16 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Год выхода: ", -1
  /* HOISTED */
  );
});

var _hoisted_17 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Жанры: ", -1
  /* HOISTED */
  );
});

var _hoisted_18 = {
  "class": "genre"
};

var _hoisted_19 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Актеры: ", -1
  /* HOISTED */
  );
});

var _hoisted_20 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Статус: ", -1
  /* HOISTED */
  );
});

var _hoisted_21 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Рейтинг: ", -1
  /* HOISTED */
  );
});

var _hoisted_22 = {
  "class": "mb-0"
};

var _hoisted_23 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Добавлено: ", -1
  /* HOISTED */
  );
});

var _hoisted_24 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fa-regular fa-clock"
  }, null, -1
  /* HOISTED */
  );
});

var _hoisted_25 = {
  "class": "project-info-box mt-0"
};

var _hoisted_26 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
    style: {
      "color": "#686c6d"
    }
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Описание:")], -1
  /* HOISTED */
  );
});

var _hoisted_27 = {
  "class": "mb-0"
};
var _hoisted_28 = {
  "class": "project-info-box mt-0 mb-0"
};
var _hoisted_29 = {
  "class": "mb-0"
};

var _hoisted_30 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "fw-bold mr-10 va-middle hide-mobile"
  }, "Действия:", -1
  /* HOISTED */
  );
});

var _hoisted_31 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Редактировать ");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_PageHeader = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("PageHeader");

  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");

  var _component_VueStarRating = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("VueStarRating");

  return $data.movie ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("section", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_PageHeader, {
    "class": "mt-5",
    title: $data.movie.title,
    description: 'Вы находитесь на странице просмотра фильма здесь вы можете посмотреть все данные о фильме, а так же почитать отзывы',
    isButton: true,
    to: {
      name: 'movie.index'
    }
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default", {}, function () {
        return [_hoisted_2];
      }, true)];
    }),
    _: 3
    /* FORWARDED */

  }, 8
  /* PROPS */
  , ["title", "to"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: $data.movie.image,
    alt: "project-image",
    "class": "rounded",
    style: {
      "max-height": "425px"
    }
  }, null, 8
  /* PROPS */
  , _hoisted_6), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [_hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: "/",
    "class": "ms-1"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_9];
    }),
    _: 1
    /* STABLE */

  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: {
      name: 'movie.info'
    },
    "class": "ms-1"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_10];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["to"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: "/",
    "class": "ms-1"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_11];
    }),
    _: 1
    /* STABLE */

  })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" / project-info-box "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" доделать таб тут и парсить данныке "), _hoisted_12]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" / column "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [_hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.movie.title), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [_hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.movie.release_year), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [_hoisted_17, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.movie.genres, function (genre) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(genre.title), 1
    /* TEXT */
    )]);
  }), 256
  /* UNKEYED_FRAGMENT */
  ))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [_hoisted_19, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.movie.actors), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [_hoisted_20, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)($options.isViewedClass($data.movie.is_viewed))
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.isViewedText($data.movie.is_viewed)), 3
  /* TEXT, CLASS */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [_hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_VueStarRating, {
    id: "rating",
    "class": "rating-stars d-inline-block",
    rating: $data.movie.rating,
    "onUpdate:rating": _cache[0] || (_cache[0] = function ($event) {
      return $data.movie.rating = $event;
    }),
    increment: 0.5,
    "read-only": true,
    "max-rating": 10,
    "star-size": 16
  }, null, 8
  /* PROPS */
  , ["rating", "increment"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_22, [_hoisted_23, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(new Date(this.movie.created_at).toLocaleDateString()) + " : " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(new Date($data.movie.created_at).toLocaleTimeString([], {
    timeStyle: 'short'
  })) + " ", 1
  /* TEXT */
  ), _hoisted_24])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" / project-info-box "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, [_hoisted_26, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_27, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.movie.description), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" / project-info-box "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_28, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_29, [_hoisted_30, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    "class": "btn btn-block btn-warning ms-2",
    to: {
      name: 'movie.edit',
      params: {
        id: this.movie.id,
        metaTitle: "MovieNotes|\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0444\u0438\u043B\u044C\u043C\u0430 ".concat($data.movie.title)
      }
    }
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_31];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["to"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return $options.deleteMovie($data.movie.id);
    }),
    "class": "btn btn-block btn-danger ms-3"
  }, "Удалить")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" / project-info-box ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" / column ")])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Movie/Show.vue?vue&type=style&index=0&id=48c25d47&scoped=true&lang=css":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Movie/Show.vue?vue&type=style&index=0&id=48c25d47&scoped=true&lang=css ***!
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.project[data-v-48c25d47] {\n        margin: 15px 0;\n}\n.no-gutter .project[data-v-48c25d47] {\n        margin: 0 !important;\n        padding: 0 !important;\n}\n.has-spacer[data-v-48c25d47] {\n        margin-left: 30px;\n        margin-right: 30px;\n        margin-bottom: 30px;\n}\n.has-spacer-extra-space[data-v-48c25d47] {\n        margin-left: 30px;\n        margin-right: 30px;\n        margin-bottom: 30px;\n}\n.has-side-spacer[data-v-48c25d47] {\n        margin-left: 30px;\n        margin-right: 30px;\n}\n.project-title[data-v-48c25d47] {\n        font-size: 1.25rem;\n}\n.project-skill[data-v-48c25d47] {\n        font-size: 0.9rem;\n        font-weight: 400;\n        letter-spacing: 0.06rem;\n}\n.project-info-box[data-v-48c25d47] {\n        margin: 15px 0;\n        background-color: #fff;\n        padding: 30px 40px;\n        border-radius: 5px;\n}\n.project-info-box p[data-v-48c25d47] {\n        margin-bottom: 15px;\n        padding-bottom: 15px;\n        border-bottom: 1px solid #d5dadb;\n}\n.project-info-box p[data-v-48c25d47]:last-child {\n        margin-bottom: 0;\n        padding-bottom: 0;\n        border-bottom: none;\n}\nimg[data-v-48c25d47] {\n        width: 100%;\n        max-width: 100%;\n        height: auto;\n        -webkit-backface-visibility: hidden;\n}\n.rounded[data-v-48c25d47] {\n        border-radius: 5px !important;\n}\n.btn-xs.btn-icon[data-v-48c25d47] {\n        width: 34px;\n        height: 34px;\n        max-width: 34px !important;\n        max-height: 34px !important;\n        font-size: 10px;\n        line-height: 34px;\n}\n    /* facebook button */\n.btn-facebook[data-v-48c25d47], .btn-facebook[data-v-48c25d47]:active, .btn-facebook[data-v-48c25d47]:focus {\n        color: #fff !important;\n        background: #4e68a1;\n        border: 2px solid #4e68a1;\n}\n.btn-facebook[data-v-48c25d47]:hover {\n        color: #fff !important;\n        background: #3b4f7a;\n        border: 2px solid #3b4f7a;\n}\n.btn-facebook-link[data-v-48c25d47], .btn-facebook-link[data-v-48c25d47]:active, .btn-facebook-link[data-v-48c25d47]:focus {\n        color: #4e68a1 !important;\n        background: transparent;\n        border: none;\n}\n.btn-facebook-link[data-v-48c25d47]:hover {\n        color: #3b4f7a !important;\n}\n.btn-outline-facebook[data-v-48c25d47], .btn-outline-facebook[data-v-48c25d47]:active, .btn-outline-facebook[data-v-48c25d47]:focus {\n        color: #4e68a1 !important;\n        background: transparent;\n        border: 2px solid #4e68a1;\n}\n.btn-outline-facebook[data-v-48c25d47]:hover {\n        color: #fff !important;\n        background: #4e68a1;\n        border: 2px solid #4e68a1;\n}\n\n    /* twitter button */\n.btn-twitter[data-v-48c25d47], .btn-twitter[data-v-48c25d47]:active, .btn-twitter[data-v-48c25d47]:focus {\n        color: #fff !important;\n        background: #65b5f2;\n        border: 2px solid #65b5f2;\n}\n.btn-twitter[data-v-48c25d47]:hover {\n        color: #fff !important;\n        background: #5294c6;\n        border: 2px solid #5294c6;\n}\n.btn-twitter[data-v-48c25d47]:hover {\n        color: #fff !important;\n        background: #5294c6;\n        border: 2px solid #5294c6;\n}\n.btn-twitter-link[data-v-48c25d47], .btn-twitter-link[data-v-48c25d47]:active, .btn-twitter-link[data-v-48c25d47]:focus {\n        color: #65b5f2 !important;\n        background: transparent;\n        border: none;\n}\n.btn-twitter-link[data-v-48c25d47]:hover {\n        color: #5294c6 !important;\n}\n.btn-outline-twitter[data-v-48c25d47], .btn-outline-twitter[data-v-48c25d47]:active, .btn-outline-twitter[data-v-48c25d47]:focus {\n        color: #65b5f2 !important;\n        background: transparent;\n        border: 2px solid #65b5f2;\n}\n.btn-outline-twitter[data-v-48c25d47]:hover {\n        color: #fff !important;\n        background: #65b5f2;\n        border: 2px solid #65b5f2;\n}\n\n    /* google button */\n.btn-google[data-v-48c25d47], .btn-google[data-v-48c25d47]:active, .btn-google[data-v-48c25d47]:focus {\n        color: #fff !important;\n        background: #e05d4b;\n        border: 2px solid #e05d4b;\n}\n.btn-google[data-v-48c25d47]:hover {\n        color: #fff !important;\n        background: #b94c3d;\n        border: 2px solid #b94c3d;\n}\n.btn-google-link[data-v-48c25d47], .btn-google-link[data-v-48c25d47]:active, .btn-google-link[data-v-48c25d47]:focus {\n        color: #e05d4b !important;\n        background: transparent;\n        border: none;\n}\n.btn-google-link[data-v-48c25d47]:hover {\n        color: #b94c3d !important;\n}\n.btn-outline-google[data-v-48c25d47], .btn-outline-google[data-v-48c25d47]:active, .btn-outline-google[data-v-48c25d47]:focus {\n        color: #e05d4b !important;\n        background: transparent;\n        border: 2px solid #e05d4b;\n}\n.btn-outline-google[data-v-48c25d47]:hover {\n        color: #fff !important;\n        background: #e05d4b;\n        border: 2px solid #e05d4b;\n}\n\n    /* linkedin button */\n.btn-linkedin[data-v-48c25d47], .btn-linkedin[data-v-48c25d47]:active, .btn-linkedin[data-v-48c25d47]:focus {\n        color: #fff !important;\n        background: #2083bc;\n        border: 2px solid #2083bc;\n}\n.btn-linkedin[data-v-48c25d47]:hover {\n        color: #fff !important;\n        background: #186592;\n        border: 2px solid #186592;\n}\n.btn-linkedin-link[data-v-48c25d47], .btn-linkedin-link[data-v-48c25d47]:active, .btn-linkedin-link[data-v-48c25d47]:focus {\n        color: #2083bc !important;\n        background: transparent;\n        border: none;\n}\n.btn-linkedin-link[data-v-48c25d47]:hover {\n        color: #186592 !important;\n}\n.btn-outline-linkedin[data-v-48c25d47], .btn-outline-linkedin[data-v-48c25d47]:active, .btn-outline-linkedin[data-v-48c25d47]:focus {\n        color: #2083bc !important;\n        background: transparent;\n        border: 2px solid #2083bc;\n}\n.btn-outline-linkedin[data-v-48c25d47]:hover {\n        color: #fff !important;\n        background: #2083bc;\n        border: 2px solid #2083bc;\n}\n\n    /* pinterest button */\n.btn-pinterest[data-v-48c25d47], .btn-pinterest[data-v-48c25d47]:active, .btn-pinterest[data-v-48c25d47]:focus {\n        color: #fff !important;\n        background: #d2373b;\n        border: 2px solid #d2373b;\n}\n.btn-pinterest[data-v-48c25d47]:hover {\n        color: #fff !important;\n        background: #ad2c2f;\n        border: 2px solid #ad2c2f;\n}\n.btn-pinterest-link[data-v-48c25d47], .btn-pinterest-link[data-v-48c25d47]:active, .btn-pinterest-link[data-v-48c25d47]:focus {\n        color: #d2373b !important;\n        background: transparent;\n        border: none;\n}\n.btn-pinterest-link[data-v-48c25d47]:hover {\n        color: #ad2c2f !important;\n}\n.btn-outline-pinterest[data-v-48c25d47], .btn-outline-pinterest[data-v-48c25d47]:active, .btn-outline-pinterest[data-v-48c25d47]:focus {\n        color: #d2373b !important;\n        background: transparent;\n        border: 2px solid #d2373b;\n}\n.btn-outline-pinterest[data-v-48c25d47]:hover {\n        color: #fff !important;\n        background: #d2373b;\n        border: 2px solid #d2373b;\n}\n\n    /* dribble button */\n.btn-dribbble[data-v-48c25d47], .btn-dribbble[data-v-48c25d47]:active, .btn-dribbble[data-v-48c25d47]:focus {\n        color: #fff !important;\n        background: #ec5f94;\n        border: 2px solid #ec5f94;\n}\n.btn-dribbble[data-v-48c25d47]:hover {\n        color: #fff !important;\n        background: #b4446e;\n        border: 2px solid #b4446e;\n}\n.btn-dribbble-link[data-v-48c25d47], .btn-dribbble-link[data-v-48c25d47]:active, .btn-dribbble-link[data-v-48c25d47]:focus {\n        color: #ec5f94 !important;\n        background: transparent;\n        border: none;\n}\n.btn-dribbble-link[data-v-48c25d47]:hover {\n        color: #b4446e !important;\n}\n.btn-outline-dribbble[data-v-48c25d47], .btn-outline-dribbble[data-v-48c25d47]:active, .btn-outline-dribbble[data-v-48c25d47]:focus {\n        color: #ec5f94 !important;\n        background: transparent;\n        border: 2px solid #ec5f94;\n}\n.btn-outline-dribbble[data-v-48c25d47]:hover {\n        color: #fff !important;\n        background: #ec5f94;\n        border: 2px solid #ec5f94;\n}\n\n    /* instagram button */\n.btn-instagram[data-v-48c25d47], .btn-instagram[data-v-48c25d47]:active, .btn-instagram[data-v-48c25d47]:focus {\n        color: #fff !important;\n        background: #4c5fd7;\n        border: 2px solid #4c5fd7;\n}\n.btn-instagram[data-v-48c25d47]:hover {\n        color: #fff !important;\n        background: #4252ba;\n        border: 2px solid #4252ba;\n}\n.btn-instagram-link[data-v-48c25d47], .btn-instagram-link[data-v-48c25d47]:active, .btn-instagram-link[data-v-48c25d47]:focus {\n        color: #4c5fd7 !important;\n        background: transparent;\n        border: none;\n}\n.btn-instagram-link[data-v-48c25d47]:hover {\n        color: #4252ba !important;\n}\n.btn-outline-instagram[data-v-48c25d47], .btn-outline-instagram[data-v-48c25d47]:active, .btn-outline-instagram[data-v-48c25d47]:focus {\n        color: #4c5fd7 !important;\n        background: transparent;\n        border: 2px solid #4c5fd7;\n}\n.btn-outline-instagram[data-v-48c25d47]:hover {\n        color: #fff !important;\n        background: #4c5fd7;\n        border: 2px solid #4c5fd7;\n}\n\n    /* youtube button */\n.btn-youtube[data-v-48c25d47], .btn-youtube[data-v-48c25d47]:active, .btn-youtube[data-v-48c25d47]:focus {\n        color: #fff !important;\n        background: #e52d27;\n        border: 2px solid #e52d27;\n}\n.btn-youtube[data-v-48c25d47]:hover {\n        color: #fff !important;\n        background: #b31217;\n        border: 2px solid #b31217;\n}\n.btn-youtube-link[data-v-48c25d47], .btn-youtube-link[data-v-48c25d47]:active, .btn-youtube-link[data-v-48c25d47]:focus {\n        color: #e52d27 !important;\n        background: transparent;\n        border: none;\n}\n.btn-youtube-link[data-v-48c25d47]:hover {\n        color: #b31217 !important;\n}\n.btn-outline-youtube[data-v-48c25d47], .btn-outline-youtube[data-v-48c25d47]:active, .btn-outline-youtube[data-v-48c25d47]:focus {\n        color: #e52d27 !important;\n        background: transparent;\n        border: 2px solid #e52d27;\n}\n.btn-outline-youtube[data-v-48c25d47]:hover {\n        color: #fff !important;\n        background: #e52d27;\n        border: 2px solid #e52d27;\n}\n.btn-xs.btn-icon span[data-v-48c25d47], .btn-xs.btn-icon i[data-v-48c25d47] {\n        line-height: 34px;\n}\n.btn-icon.btn-circle span[data-v-48c25d47], .btn-icon.btn-circle i[data-v-48c25d47] {\n        margin-top: -1px;\n        margin-right: -1px;\n}\n.btn-icon i[data-v-48c25d47] {\n        margin-top: -1px;\n}\n.btn-icon span[data-v-48c25d47], .btn-icon i[data-v-48c25d47] {\n        display: block;\n        line-height: 50px;\n}\na.btn[data-v-48c25d47], a.btn-social[data-v-48c25d47] {\n        display: inline-block;\n}\n.mr-5[data-v-48c25d47] {\n        margin-right: 5px !important;\n}\n.mb-0[data-v-48c25d47] {\n        margin-bottom: 0 !important;\n}\n.btn-facebook[data-v-48c25d47], .btn-facebook[data-v-48c25d47]:active, .btn-facebook[data-v-48c25d47]:focus {\n        color: #fff !important;\n        background: #4e68a1;\n        border: 2px solid #4e68a1;\n}\n.btn-circle[data-v-48c25d47] {\n        border-radius: 50% !important;\n}\n.project-info-box p[data-v-48c25d47] {\n        margin-bottom: 15px;\n        padding-bottom: 15px;\n        border-bottom: 1px solid #d5dadb;\n}\np[data-v-48c25d47] {\n        font-family: \"Barlow\", sans-serif !important;\n        font-weight: 300;\n        font-size: 1rem;\n        color: #686c6d;\n        letter-spacing: 0.03rem;\n        margin-bottom: 10px;\n}\nb[data-v-48c25d47], strong[data-v-48c25d47] {\n        font-weight: 700 !important;\n}\n\n    /* add comma after genre title */\n.genre + .genre[data-v-48c25d47]:before {\n        content: \", \";\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Movie/Show.vue?vue&type=style&index=0&id=48c25d47&scoped=true&lang=css":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Movie/Show.vue?vue&type=style&index=0&id=48c25d47&scoped=true&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Show_vue_vue_type_style_index_0_id_48c25d47_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Show.vue?vue&type=style&index=0&id=48c25d47&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Movie/Show.vue?vue&type=style&index=0&id=48c25d47&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Show_vue_vue_type_style_index_0_id_48c25d47_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Show_vue_vue_type_style_index_0_id_48c25d47_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/Movie/Show.vue":
/*!************************************************!*\
  !*** ./resources/js/components/Movie/Show.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Show_vue_vue_type_template_id_48c25d47_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Show.vue?vue&type=template&id=48c25d47&scoped=true */ "./resources/js/components/Movie/Show.vue?vue&type=template&id=48c25d47&scoped=true");
/* harmony import */ var _Show_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Show.vue?vue&type=script&lang=js */ "./resources/js/components/Movie/Show.vue?vue&type=script&lang=js");
/* harmony import */ var _Show_vue_vue_type_style_index_0_id_48c25d47_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Show.vue?vue&type=style&index=0&id=48c25d47&scoped=true&lang=css */ "./resources/js/components/Movie/Show.vue?vue&type=style&index=0&id=48c25d47&scoped=true&lang=css");
/* harmony import */ var _var_www_movie_notice_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_var_www_movie_notice_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Show_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Show_vue_vue_type_template_id_48c25d47_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-48c25d47"],['__file',"resources/js/components/Movie/Show.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/Movie/Show.vue?vue&type=script&lang=js":
/*!************************************************************************!*\
  !*** ./resources/js/components/Movie/Show.vue?vue&type=script&lang=js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Show_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Show_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Show.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Movie/Show.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/Movie/Show.vue?vue&type=template&id=48c25d47&scoped=true":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/Movie/Show.vue?vue&type=template&id=48c25d47&scoped=true ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Show_vue_vue_type_template_id_48c25d47_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Show_vue_vue_type_template_id_48c25d47_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Show.vue?vue&type=template&id=48c25d47&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Movie/Show.vue?vue&type=template&id=48c25d47&scoped=true");


/***/ }),

/***/ "./resources/js/components/Movie/Show.vue?vue&type=style&index=0&id=48c25d47&scoped=true&lang=css":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/Movie/Show.vue?vue&type=style&index=0&id=48c25d47&scoped=true&lang=css ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Show_vue_vue_type_style_index_0_id_48c25d47_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Show.vue?vue&type=style&index=0&id=48c25d47&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Movie/Show.vue?vue&type=style&index=0&id=48c25d47&scoped=true&lang=css");


/***/ })

}]);
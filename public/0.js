(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/posts/comments/components/DataRow.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/posts/comments/components/DataRow.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    data: {
      type: Object,
      "default": {
        name: "",
        message: "",
        created_at: ""
      }
    }
  },
  computed: {
    isCommentLoaded: function isCommentLoaded() {
      return this.isReply ? this.$store.state.viewer.loadedReplies.includes(this.data.id) : this.$store.state.viewer.loadedComments.includes(this.data.id);
    },
    isReply: function isReply() {
      return !!this.data.comment_id;
    }
  },
  methods: {
    unloadComment: function unloadComment() {
      var action = this.isReply ? "unloadReply" : "unloadComment";
      this.$store.dispatch("viewer/".concat(action), this.data.id);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/posts/comments/components/DataRow.vue?vue&type=template&id=3c455f46&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/posts/comments/components/DataRow.vue?vue&type=template&id=3c455f46& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("section", [
    _c("img", {
      staticClass: "inline-block w-12 h-12 rounded-full",
      attrs: { src: _vm.defaultAvatar }
    }),
    _vm._v(" "),
    _c("div", { staticClass: "inline-block align-top" }, [
      _c("div", { staticClass: "block" }, [
        _c("p", { staticClass: "inline-block" }, [
          _vm._v(_vm._s(_vm.data.name))
        ]),
        _vm._v(" "),
        _c("p", { staticClass: "inline-block text-gray-600 text-sm ml-1" }, [
          _vm._v(_vm._s(_vm._f("moment")(_vm.data.created_at, "from", "now")))
        ]),
        _vm._v(" "),
        _c(
          "a",
          {
            class: [
              "inline-block cursor-pointer ml-2",
              _vm.isCommentLoaded ? "visible" : "hidden"
            ],
            attrs: { href: "" },
            on: {
              click: function($event) {
                $event.stopPropagation()
                $event.preventDefault()
                return _vm.unloadComment($event)
              }
            }
          },
          [_c("i", { staticClass: "fa fa-angle-up" })]
        )
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "block mt-1 text-gray-700" }, [
        _vm._v(_vm._s(_vm.data.message))
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/posts/comments/components/DataRow.vue":
/*!******************************************************************!*\
  !*** ./resources/js/pages/posts/comments/components/DataRow.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DataRow_vue_vue_type_template_id_3c455f46___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DataRow.vue?vue&type=template&id=3c455f46& */ "./resources/js/pages/posts/comments/components/DataRow.vue?vue&type=template&id=3c455f46&");
/* harmony import */ var _DataRow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DataRow.vue?vue&type=script&lang=js& */ "./resources/js/pages/posts/comments/components/DataRow.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DataRow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DataRow_vue_vue_type_template_id_3c455f46___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DataRow_vue_vue_type_template_id_3c455f46___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/posts/comments/components/DataRow.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/posts/comments/components/DataRow.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/pages/posts/comments/components/DataRow.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DataRow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DataRow.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/posts/comments/components/DataRow.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DataRow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/posts/comments/components/DataRow.vue?vue&type=template&id=3c455f46&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/pages/posts/comments/components/DataRow.vue?vue&type=template&id=3c455f46& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DataRow_vue_vue_type_template_id_3c455f46___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DataRow.vue?vue&type=template&id=3c455f46& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/posts/comments/components/DataRow.vue?vue&type=template&id=3c455f46&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DataRow_vue_vue_type_template_id_3c455f46___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DataRow_vue_vue_type_template_id_3c455f46___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
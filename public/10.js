(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/posts/comments/components/Replies.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/posts/comments/components/Replies.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    DataRow: function DataRow() {
      return __webpack_require__.e(/*! import() */ 11).then(__webpack_require__.bind(null, /*! ./DataRow */ "./resources/js/pages/posts/comments/components/DataRow.vue"));
    },
    SubReplies: function SubReplies() {
      return __webpack_require__.e(/*! import() */ 9).then(__webpack_require__.bind(null, /*! ./SubReplies */ "./resources/js/pages/posts/comments/components/SubReplies.vue"));
    }
  },
  props: {
    data: {
      type: Array,
      "default": []
    }
  },
  methods: {
    loadReply: function loadReply(replyId) {
      this.$store.dispatch("viewer/addLoadedReply", replyId);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/posts/comments/components/Replies.vue?vue&type=template&id=a6f2e8d6&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/posts/comments/components/Replies.vue?vue&type=template&id=a6f2e8d6& ***!
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
  return _c(
    "section",
    [
      _vm.data.length === 0
        ? _c("h1", { staticClass: "text-center text-sm text-gray-500 pb-3" }, [
            _vm._v("No replies.")
          ])
        : _vm._l(_vm.data, function(reply, index) {
            return _c(
              "div",
              { key: index },
              [
                _c("data-row", { staticClass: "py-4", attrs: { data: reply } }),
                _vm._v(" "),
                _vm.$store.state.viewer.loadedReplies.includes(reply.id)
                  ? _c("sub-replies", {
                      staticClass: "w-11/12 ml-auto",
                      attrs: { "comment-reply-id": reply.id }
                    })
                  : _c(
                      "p",
                      {
                        staticClass:
                          "block text-center pb-3 mt-1 text-blue-500 text-sm font-bold cursor-pointer",
                        on: {
                          click: function($event) {
                            return _vm.loadReply(reply.id)
                          }
                        }
                      },
                      [_vm._v("Reply")]
                    )
              ],
              1
            )
          })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/posts/comments/components/Replies.vue":
/*!******************************************************************!*\
  !*** ./resources/js/pages/posts/comments/components/Replies.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Replies_vue_vue_type_template_id_a6f2e8d6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Replies.vue?vue&type=template&id=a6f2e8d6& */ "./resources/js/pages/posts/comments/components/Replies.vue?vue&type=template&id=a6f2e8d6&");
/* harmony import */ var _Replies_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Replies.vue?vue&type=script&lang=js& */ "./resources/js/pages/posts/comments/components/Replies.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Replies_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Replies_vue_vue_type_template_id_a6f2e8d6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Replies_vue_vue_type_template_id_a6f2e8d6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/posts/comments/components/Replies.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/posts/comments/components/Replies.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/pages/posts/comments/components/Replies.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Replies_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Replies.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/posts/comments/components/Replies.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Replies_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/posts/comments/components/Replies.vue?vue&type=template&id=a6f2e8d6&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/pages/posts/comments/components/Replies.vue?vue&type=template&id=a6f2e8d6& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Replies_vue_vue_type_template_id_a6f2e8d6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Replies.vue?vue&type=template&id=a6f2e8d6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/posts/comments/components/Replies.vue?vue&type=template&id=a6f2e8d6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Replies_vue_vue_type_template_id_a6f2e8d6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Replies_vue_vue_type_template_id_a6f2e8d6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
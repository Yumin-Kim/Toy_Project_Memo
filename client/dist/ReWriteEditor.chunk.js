(self.webpackChunkReact_client=self.webpackChunkReact_client||[]).push([[894],{7941:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6156);\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4699);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7294);\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1749);\n/* harmony import */ var react_markdown_editor_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3110);\n/* harmony import */ var react_markdown_editor_lite__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_markdown_editor_lite__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8456);\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_markdown_editor_lite_lib_index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(765);\n/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7835);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9226);\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2318);\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(282);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2487);\n/* harmony import */ var _actions_post__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9818);\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar ReWriteEditor = function ReWriteEditor() {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),\n      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)(_useState, 2),\n      value = _useState2[0],\n      setValue = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),\n      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)(_useState3, 2),\n      titleSValue = _useState4[0],\n      setTitleValue = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),\n      _useState6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)(_useState5, 2),\n      userUpdateInfo = _useState6[0],\n      setUserUpdateInfo = _useState6[1];\n\n  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__/* .useDispatch */ .I0)();\n  var mdEditor = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n\n  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__/* .useSelector */ .v9)(function (state) {\n    return state.post;\n  }),\n      detailCateogoryInfo = _useSelector.detailCateogoryInfo,\n      detailSubCateogoryInfo = _useSelector.detailSubCateogoryInfo,\n      updateDetailInfo = _useSelector.updateDetailInfo,\n      prevPathname = _useSelector.prevPathname;\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    if (detailCateogoryInfo) {\n      setUserUpdateInfo(_objectSpread({}, detailCateogoryInfo));\n    }\n\n    if (detailSubCateogoryInfo) {\n      setUserUpdateInfo(_objectSpread({}, detailSubCateogoryInfo));\n    }\n  }, [detailCateogoryInfo, detailSubCateogoryInfo]);\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    if (userUpdateInfo) {\n      setValue(userUpdateInfo.description);\n      setTitleValue(userUpdateInfo.title);\n    }\n  }, [userUpdateInfo]);\n\n  var handleEditorChange = function handleEditorChange(_ref) {\n    var html = _ref.html,\n        text = _ref.text;\n    // console.log(newValue.replaceAll("\\n", "__"));\n    setValue(text);\n  };\n\n  var onChangeHeadLine = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (e) {\n    setTitleValue(e.target.value);\n  }, [titleSValue]);\n  var onClickUpdateDescription = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function () {\n    //비동기요청으로 메모한것들 수정할 수 있게\n    if (titleSValue.trim() === "") {\n      alert("타이틀을 입력해주세요");\n      return;\n    }\n\n    if (userUpdateInfo) {\n      dispatch(_actions_post__WEBPACK_IMPORTED_MODULE_6__/* .RewritePostingAction.ACTION.REQUEST */ .Th.ACTION.REQUEST({\n        title: titleSValue,\n        description: value,\n        postingid: String(userUpdateInfo.id)\n      }));\n    }\n  }, [value, titleSValue]);\n\n  if (updateDetailInfo && !detailCateogoryInfo && !detailSubCateogoryInfo) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__/* .Redirect */ .l_, {\n      to: "".concat(prevPathname)\n    });\n  } else {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, userUpdateInfo && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, {\n      item: true,\n      xs: 12,\n      sm: 12,\n      md: 12\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z, {\n      variant: "h3",\n      color: "initial",\n      style: {\n        marginBottom: "20px"\n      }\n    }, "\\uC81C\\uBAA9 : ", userUpdateInfo.M_Topics[0].title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z, {\n      variant: "h4",\n      color: "initial",\n      style: {\n        marginBottom: "20px"\n      }\n    }, "\\uC218\\uC815 \\uD574\\uC8FC\\uC138\\uC694!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11__/* .default */ .Z, {\n      id: "asd",\n      label: "\\uD0C0\\uC774\\uBE14\\uC744 \\uBCC0\\uACBD\\uD574\\uC8FC\\uC138\\uC694",\n      value: titleSValue,\n      onChange: onChangeHeadLine,\n      style: {\n        marginBottom: "20px"\n      }\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12__/* .default */ .Z, {\n      onClick: onClickUpdateDescription,\n      variant: "contained",\n      color: "primary"\n    }, "\\uC218\\uC815"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement((react_markdown_editor_lite__WEBPACK_IMPORTED_MODULE_2___default()), {\n      ref: mdEditor,\n      value: value,\n      style: {\n        height: "500px"\n      },\n      onChange: handleEditorChange,\n      renderHTML: function renderHTML(text) {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement((react_markdown__WEBPACK_IMPORTED_MODULE_3___default()), {\n          children: text\n        });\n      }\n    })));\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReWriteEditor);\n\n//# sourceURL=webpack://React_client/./src/pages/ReWriteEditor/index.tsx?')}}]);
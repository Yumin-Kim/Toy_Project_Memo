(self.webpackChunkReact_client=self.webpackChunkReact_client||[]).push([[13],{5320:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval('/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7835);\n/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5639);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);\n\n\n\n\nvar SelectInputComponent = function SelectInputComponent(_ref) {\n  var onChangeText = _ref.onChangeText,\n      selectInfo = _ref.selectInfo,\n      text = _ref.text;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {\n    select: true,\n    style: {\n      width: "65%"\n    },\n    label: "\\uD0C0\\uC774\\uD2C0\\uC744 \\uC120\\uD0DD\\uD574\\uC8FC\\uC138\\uC694",\n    value: text,\n    name: "select title",\n    onChange: onChangeText,\n    required: true\n  }, selectInfo.map(function (option) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {\n      key: option.value,\n      value: option.value\n    }, option.label);\n  })));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SelectInputComponent);\n\n//# sourceURL=webpack://React_client/./src/components/UtilComponent/SelectInputComponent.tsx?')},641:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval('/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "G": () => (/* binding */ useInput)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4699);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);\n\n\nvar useInput = function useInput() {\n  var initVal = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initVal),\n      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)(_useState, 2),\n      value = _useState2[0],\n      setValue = _useState2[1];\n\n  var handler = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (e) {\n    setValue(e.target.value);\n  }, []);\n  return [value, handler];\n};\n\n//# sourceURL=webpack://React_client/./src/hooks/useInput.ts?')},6460:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7329);\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4699);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);\n/* harmony import */ var react_markdown_editor_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3110);\n/* harmony import */ var react_markdown_editor_lite__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_markdown_editor_lite__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8456);\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_markdown_editor_lite_lib_index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(765);\n/* harmony import */ var _components_UtilComponent_SelectInputComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5320);\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2318);\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1749);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7835);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(4837);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(282);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9226);\n/* harmony import */ var _actions_post__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9818);\n/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(641);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar WriteEditor = function WriteEditor() {\n  var mdEditor = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),\n      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z)(_useState, 2),\n      value = _useState2[0],\n      setValue = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),\n      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z)(_useState3, 2),\n      subCategory = _useState4[0],\n      setSubCategory = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),\n      _useState6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z)(_useState5, 2),\n      selectInfo = _useState6[0],\n      setSelectInfo = _useState6[1];\n\n  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),\n      _useState8 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z)(_useState7, 2),\n      selectInfoList = _useState8[0],\n      setSelectInfoList = _useState8[1];\n\n  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),\n      _useState10 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z)(_useState9, 2),\n      selectCateogoryName = _useState10[0],\n      setSelectCateogoryName = _useState10[1];\n\n  var _useInput = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_7__/* .useInput */ .G)(""),\n      _useInput2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z)(_useInput, 2),\n      headline = _useInput2[0],\n      onChangeHeadLine = _useInput2[1];\n\n  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__/* .useSelector */ .v9)(function (state) {\n    return state.post;\n  }),\n      sideBarCategoryInfos = _useSelector.sideBarCategoryInfos,\n      selectSubCategoryListInfos = _useSelector.selectSubCategoryListInfos,\n      writePosingMessage = _useSelector.writePosingMessage;\n\n  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__/* .useDispatch */ .I0)();\n\n  var handleEditorChange = function handleEditorChange(_ref) {\n    var html = _ref.html,\n        text = _ref.text;\n    var newValue = text.replace(/\\d/g, ""); // console.log(newValue.replaceAll("\\n", "__"));\n\n    setValue(newValue);\n  }; //서버 전송후 replaceAll할지 안할지 결정\n\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    if (selectSubCategoryListInfos) {\n      if ((selectSubCategoryListInfos === null || selectSubCategoryListInfos === void 0 ? void 0 : selectSubCategoryListInfos.length) !== 0) {\n        setSelectInfoList((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z)(selectSubCategoryListInfos.reduce(function (prev, cur, index) {\n          var obj = {};\n          obj.value = String(cur.id);\n          obj.label = cur.title;\n          prev.push(obj);\n          return prev;\n        }, [])));\n      } else {\n        setSubCategory("");\n      }\n    } else {\n      setSubCategory("");\n    }\n  }, [selectSubCategoryListInfos]);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    if (!sideBarCategoryInfos) {\n      dispatch(_actions_post__WEBPACK_IMPORTED_MODULE_6__/* .getTopicListSiderBarAction.ACTION.REQUEST */ .I6.ACTION.REQUEST());\n    } else {\n      setSelectInfo((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z)(sideBarCategoryInfos.reduce(function (prev, cur, index) {\n        var obj = {};\n        obj.value = String(cur.id);\n        obj.label = cur.title;\n        prev.push(obj);\n        return prev;\n      }, [])));\n    }\n  }, [sideBarCategoryInfos]);\n  var onClickSubmit = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {\n    var createdAt = new Date().toISOString().match(/[^T]*/g);\n\n    if (createdAt) {\n      if (String(value).trim() !== "") {\n        if (selectCateogoryName) {\n          if (headline) {\n            if (subCategory) {\n              dispatch(_actions_post__WEBPACK_IMPORTED_MODULE_6__/* .writePostingInfoAction.ACTION.REQUEST */ .yk.ACTION.REQUEST({\n                title: String(headline),\n                description: value,\n                createdAt: String(createdAt[0]),\n                topicId: Number(selectCateogoryName),\n                subTopicId: Number(subCategory)\n              }));\n            } else {\n              dispatch(_actions_post__WEBPACK_IMPORTED_MODULE_6__/* .writePostingInfoAction.ACTION.REQUEST */ .yk.ACTION.REQUEST({\n                title: String(headline),\n                description: value,\n                createdAt: String(createdAt[0]),\n                topicId: Number(selectCateogoryName)\n              }));\n            }\n          } else {\n            alert("타이틀을 적어주세요");\n          }\n        } else {\n          alert("카테고리 선정해주세요");\n        }\n      } else {\n        alert("내용을 입력해주세요");\n      }\n    }\n  }, [subCategory, value, selectCateogoryName, headline]);\n  var onChangeSelectBox = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (e) {\n    // console.log();\n    setSelectCateogoryName(e.target.value);\n    dispatch(_actions_post__WEBPACK_IMPORTED_MODULE_6__/* .getSubTopicListAction.ACTION.REQUEST */ .pY.ACTION.REQUEST(Number(e.target.value)));\n  }, []);\n  var onChangeSubSelect = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (e) {\n    setSubCategory(e.target.value);\n  }, []);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    if (writePosingMessage === "sucess") {\n      dispatch((0,_actions_post__WEBPACK_IMPORTED_MODULE_6__/* .resetWritePostingAction */ .qM)());\n      alert("등록 완료");\n    }\n\n    if (writePosingMessage === "idle...") {\n      dispatch(_actions_post__WEBPACK_IMPORTED_MODULE_6__/* .getTopicListSiderBarAction.ACTION.REQUEST */ .I6.ACTION.REQUEST());\n    }\n\n    if (writePosingMessage === "Failure") alert("등록 실패했습니다");\n  }, [writePosingMessage]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z, {\n    item: true,\n    xs: 12,\n    sm: 12,\n    md: 12\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__/* .default */ .Z, {\n    variant: "h3",\n    color: "inherit"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_UtilComponent_SelectInputComponent__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {\n    onChangeText: onChangeSelectBox,\n    selectInfo: selectInfo\n  })), selectSubCategoryListInfos && selectSubCategoryListInfos.length !== 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_UtilComponent_SelectInputComponent__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {\n    onChangeText: onChangeSubSelect,\n    selectInfo: selectInfoList\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__/* .default */ .Z, {\n    variant: "h6",\n    color: "initial"\n  }, "\\uD0C0\\uC774\\uD2C0 :", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__/* .default */ .Z, {\n    id: "asd",\n    label: "",\n    value: headline,\n    onChange: onChangeHeadLine,\n    style: {\n      marginRight: "20px"\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__/* .default */ .Z, {\n    variant: "contained",\n    color: "default",\n    "aria-label": ""\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__/* .default */ .Z, {\n    variant: "contained",\n    color: "primary",\n    onClick: onClickSubmit\n  }, "\\uAC8C\\uC2DC"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_markdown_editor_lite__WEBPACK_IMPORTED_MODULE_1___default()), {\n    ref: mdEditor,\n    value: value,\n    style: {\n      height: "500px"\n    },\n    onChange: handleEditorChange,\n    renderHTML: function renderHTML(text) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_markdown__WEBPACK_IMPORTED_MODULE_2___default()), {\n        children: text\n      });\n    }\n  })));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WriteEditor);\n\n//# sourceURL=webpack://React_client/./src/pages/WriteEditor/index.tsx?')}}]);
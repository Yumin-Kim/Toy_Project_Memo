(self.webpackChunkReact_client=self.webpackChunkReact_client||[]).push([[429],{2959:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval('// ESM COMPAT FLAG\n__webpack_require__.r(__webpack_exports__);\n\n// EXPORTS\n__webpack_require__.d(__webpack_exports__, {\n  "default": () => (/* binding */ NestedList)\n});\n\n// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js\nvar defineProperty = __webpack_require__(6156);\n// EXTERNAL MODULE: ./node_modules/react/index.js\nvar react = __webpack_require__(7294);\n// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/useTheme.js\nvar useTheme = __webpack_require__(8920);\n// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/List/List.js\nvar List = __webpack_require__(2822);\n// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Drawer/Drawer.js + 3 modules\nvar Drawer = __webpack_require__(7159);\n// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Divider/Divider.js\nvar Divider = __webpack_require__(5517);\n// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/IconButton/IconButton.js\nvar IconButton = __webpack_require__(7812);\n// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js\nvar clsx_m = __webpack_require__(6010);\n// EXTERNAL MODULE: ./node_modules/@material-ui/icons/ChevronRight.js\nvar ChevronRight = __webpack_require__(6735);\n// EXTERNAL MODULE: ./node_modules/@material-ui/icons/ChevronLeft.js\nvar ChevronLeft = __webpack_require__(9875);\n// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 3 modules\nvar slicedToArray = __webpack_require__(4699);\n// EXTERNAL MODULE: ./node_modules/@material-ui/icons/MoveToInbox.js\nvar MoveToInbox = __webpack_require__(8497);\n// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js\nvar esm_extends = __webpack_require__(2122);\n// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/ListItemText/ListItemText.js\nvar ListItemText = __webpack_require__(5757);\n// EXTERNAL MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js + 1 modules\nvar react_router_dom = __webpack_require__(5513);\n// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/ListItem/ListItem.js\nvar ListItem = __webpack_require__(998);\n;// CONCATENATED MODULE: ./src/components/ListComponent/BlogLinkItem.tsx\n\n\n\n\n\n\nfunction BlogLinkItem(props) {\n  var icon = props.icon,\n      primary = props.primary,\n      to = props.to,\n      classes = props.classes;\n  var renderLink = react.useMemo(function () {\n    return /*#__PURE__*/react.forwardRef(function (itemProps, ref) {\n      return /*#__PURE__*/react.createElement(react_router_dom/* Link */.rU, (0,esm_extends/* default */.Z)({\n        to: to,\n        ref: ref\n      }, itemProps));\n    });\n  }, [to]);\n  return /*#__PURE__*/react.createElement("li", null, /*#__PURE__*/react.createElement(ListItem/* default */.Z, {\n    button: true,\n    component: renderLink\n  }, /*#__PURE__*/react.createElement(ListItemText/* default */.Z, {\n    classes: {\n      primary: classes.listItemText\n    },\n    primary: primary\n  })));\n}\n\n/* harmony default export */ const ListComponent_BlogLinkItem = (BlogLinkItem);\n;// CONCATENATED MODULE: ./src/components/ListComponent/BasicListItem.tsx\n\n\n\n\n\nvar BasicListItem = function BasicListItem(_ref) {\n  var categoryData = _ref.categoryList,\n      index = _ref.index,\n      classes = _ref.classes;\n\n  var _useState = (0,react.useState)(true),\n      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),\n      toggleList = _useState2[0],\n      setToggleList = _useState2[1];\n\n  var onClickSideCategory = (0,react.useCallback)(function () {\n    setToggleList(function (prev) {\n      return !prev;\n    });\n  }, [toggleList]);\n  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(ListComponent_BlogLinkItem, {\n    to: categoryData.pathname,\n    primary: "".concat(categoryData.title, " (").concat(!categoryData.counter ? 0 : categoryData.counter, ")"),\n    classes: classes,\n    icon: /*#__PURE__*/react.createElement(MoveToInbox/* default */.Z, null)\n  }));\n};\n\n/* harmony default export */ const ListComponent_BasicListItem = (BasicListItem);\n// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 17 modules\nvar es = __webpack_require__(9226);\n// EXTERNAL MODULE: ./src/actions/post/index.ts + 2 modules\nvar post = __webpack_require__(9818);\n// EXTERNAL MODULE: ./src/layouts/BasicUI/style.tsx + 3 modules\nvar style = __webpack_require__(1771);\n;// CONCATENATED MODULE: ./src/layouts/Sider/index.tsx\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction NestedList() {\n  var _clsx;\n\n  var classes = (0,style/* siderStyles */.kN)();\n  var theme = (0,useTheme/* default */.Z)();\n\n  var _useSelector = (0,es/* useSelector */.v9)(function (state) {\n    return state.post;\n  }),\n      sideBarCategoryInfos = _useSelector.sideBarCategoryInfos;\n\n  var dispatch = (0,es/* useDispatch */.I0)();\n  (0,react.useEffect)(function () {\n    if (!sideBarCategoryInfos) {\n      dispatch(post/* getTopicListSiderBarAction.ACTION.REQUEST */.I6.ACTION.REQUEST());\n    }\n  }, [sideBarCategoryInfos]);\n  return /*#__PURE__*/react.createElement(Drawer/* default */.ZP, {\n    variant: "permanent",\n    className: (0,clsx_m/* default */.Z)(classes.drawer),\n    classes: {\n      paper: (0,clsx_m/* default */.Z)((_clsx = {}, (0,defineProperty/* default */.Z)(_clsx, classes.drawerOpen, true), (0,defineProperty/* default */.Z)(_clsx, classes.drawerClose, !true), _clsx))\n    }\n  }, /*#__PURE__*/react.createElement("div", {\n    className: classes.toolbar\n  }, /*#__PURE__*/react.createElement(IconButton/* default */.Z, null, theme.direction === "rtl" ? /*#__PURE__*/react.createElement(ChevronRight/* default */.Z, null) : /*#__PURE__*/react.createElement(ChevronLeft/* default */.Z, null))), /*#__PURE__*/react.createElement(Divider/* default */.Z, null), /*#__PURE__*/react.createElement(List/* default */.Z, {\n    className: classes.root\n  }, sideBarCategoryInfos && sideBarCategoryInfos.length !== 0 ? sideBarCategoryInfos.map(function (value, index) {\n    return /*#__PURE__*/react.createElement(ListComponent_BasicListItem, {\n      categoryList: value,\n      index: index,\n      classes: classes\n    });\n  }) : "준비중입니다"), /*#__PURE__*/react.createElement(Divider/* default */.Z, null));\n}\n\n//# sourceURL=webpack://React_client/./src/layouts/Sider/index.tsx_+_2_modules?')}}]);
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/ads/new/page",{

/***/ "(app-pages-browser)/./app/ads/new/page.tsx":
/*!******************************!*\
  !*** ./app/ads/new/page.tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ NewAdPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _components_layout_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/layout/Header */ \"(app-pages-browser)/./components/layout/Header.tsx\");\n/* harmony import */ var _components_layout_HomeFooter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/layout/HomeFooter */ \"(app-pages-browser)/./components/layout/HomeFooter.tsx\");\n/* harmony import */ var _components_admin_AdFormWrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/admin/AdFormWrapper */ \"(app-pages-browser)/./components/admin/AdFormWrapper.tsx\");\n/* harmony import */ var _components_admin_AdFormWrapper__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_admin_AdFormWrapper__WEBPACK_IMPORTED_MODULE_5__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction NewAdPage() {\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [isSubmitting, setIsSubmitting] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleSubmit = async (formData)=>{\n        try {\n            setIsSubmitting(true);\n            const response = await fetch(\"/api/ads\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify(formData)\n            });\n            if (!response.ok) {\n                throw new Error(\"Failed to create advertisement\");\n            }\n            router.push(\"/ads\");\n        } catch (error) {\n            console.error(\"Error creating ad:\", error);\n        } finally{\n            setIsSubmitting(false);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout_Header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/ahmedsalem/saudiamoving.com/app/ads/new/page.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"container mx-auto px-4 py-8\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"max-w-4xl mx-auto\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-3xl font-bold mb-8 text-right\",\n                            children: \"إضافة إعلان جديد\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ahmedsalem/saudiamoving.com/app/ads/new/page.tsx\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_components_admin_AdFormWrapper__WEBPACK_IMPORTED_MODULE_5___default()), {\n                            onSubmit: handleSubmit,\n                            isSubmitting: isSubmitting\n                        }, void 0, false, {\n                            fileName: \"/Users/ahmedsalem/saudiamoving.com/app/ads/new/page.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ahmedsalem/saudiamoving.com/app/ads/new/page.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/ahmedsalem/saudiamoving.com/app/ads/new/page.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout_HomeFooter__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/ahmedsalem/saudiamoving.com/app/ads/new/page.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(NewAdPage, \"quThQfjHK28jXxCNxtLq7M4iJbw=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = NewAdPage;\nvar _c;\n$RefreshReg$(_c, \"NewAdPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9hZHMvbmV3L3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBRWdDO0FBQ1c7QUFDSTtBQUNRO0FBQ0s7QUFFN0MsU0FBU0s7O0lBQ3RCLE1BQU1DLFNBQVNMLDBEQUFTQTtJQUN4QixNQUFNLENBQUNNLGNBQWNDLGdCQUFnQixHQUFHUiwrQ0FBUUEsQ0FBQztJQUVqRCxNQUFNUyxlQUFlLE9BQU9DO1FBQzFCLElBQUk7WUFDRkYsZ0JBQWdCO1lBQ2hCLE1BQU1HLFdBQVcsTUFBTUMsTUFBTSxZQUFZO2dCQUN2Q0MsUUFBUTtnQkFDUkMsU0FBUztvQkFDUCxnQkFBZ0I7Z0JBQ2xCO2dCQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUNQO1lBQ3ZCO1lBRUEsSUFBSSxDQUFDQyxTQUFTTyxFQUFFLEVBQUU7Z0JBQ2hCLE1BQU0sSUFBSUMsTUFBTTtZQUNsQjtZQUVBYixPQUFPYyxJQUFJLENBQUM7UUFDZCxFQUFFLE9BQU9DLE9BQU87WUFDZEMsUUFBUUQsS0FBSyxDQUFDLHNCQUFzQkE7UUFDdEMsU0FBVTtZQUNSYixnQkFBZ0I7UUFDbEI7SUFDRjtJQUVBLHFCQUNFOzswQkFDRSw4REFBQ04saUVBQU1BOzs7OzswQkFDUCw4REFBQ3FCO2dCQUFLQyxXQUFVOzBCQUNkLDRFQUFDQztvQkFBSUQsV0FBVTs7c0NBQ2IsOERBQUNFOzRCQUFHRixXQUFVO3NDQUFxQzs7Ozs7O3NDQUNuRCw4REFBQ3BCLHdFQUFhQTs0QkFDWnVCLFVBQVVsQjs0QkFDVkYsY0FBY0E7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUlwQiw4REFBQ0oscUVBQVVBOzs7Ozs7O0FBR2pCO0dBMUN3QkU7O1FBQ1BKLHNEQUFTQTs7O0tBREZJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9hZHMvbmV3L3BhZ2UudHN4PzBiMTUiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5cbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L25hdmlnYXRpb24nXG5pbXBvcnQgSGVhZGVyIGZyb20gJ0AvY29tcG9uZW50cy9sYXlvdXQvSGVhZGVyJ1xuaW1wb3J0IEhvbWVGb290ZXIgZnJvbSAnQC9jb21wb25lbnRzL2xheW91dC9Ib21lRm9vdGVyJ1xuaW1wb3J0IEFkRm9ybVdyYXBwZXIgZnJvbSAnQC9jb21wb25lbnRzL2FkbWluL0FkRm9ybVdyYXBwZXInXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5ld0FkUGFnZSgpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgW2lzU3VibWl0dGluZywgc2V0SXNTdWJtaXR0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChmb3JtRGF0YTogYW55KSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIHNldElzU3VibWl0dGluZyh0cnVlKVxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9hZHMnLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZm9ybURhdGEpLFxuICAgICAgfSlcblxuICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBjcmVhdGUgYWR2ZXJ0aXNlbWVudCcpXG4gICAgICB9XG5cbiAgICAgIHJvdXRlci5wdXNoKCcvYWRzJylcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgY3JlYXRpbmcgYWQ6JywgZXJyb3IpXG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHNldElzU3VibWl0dGluZyhmYWxzZSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZGVyIC8+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC00IHB5LThcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy00eGwgbXgtYXV0b1wiPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGQgbWItOCB0ZXh0LXJpZ2h0XCI+2KXYttin2YHYqSDYpdi52YTYp9mGINis2K/ZitivPC9oMT5cbiAgICAgICAgICA8QWRGb3JtV3JhcHBlciBcbiAgICAgICAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9XG4gICAgICAgICAgICBpc1N1Ym1pdHRpbmc9e2lzU3VibWl0dGluZ31cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cbiAgICAgIDxIb21lRm9vdGVyIC8+XG4gICAgPC8+XG4gIClcbn0gIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlUm91dGVyIiwiSGVhZGVyIiwiSG9tZUZvb3RlciIsIkFkRm9ybVdyYXBwZXIiLCJOZXdBZFBhZ2UiLCJyb3V0ZXIiLCJpc1N1Ym1pdHRpbmciLCJzZXRJc1N1Ym1pdHRpbmciLCJoYW5kbGVTdWJtaXQiLCJmb3JtRGF0YSIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJvayIsIkVycm9yIiwicHVzaCIsImVycm9yIiwiY29uc29sZSIsIm1haW4iLCJjbGFzc05hbWUiLCJkaXYiLCJoMSIsIm9uU3VibWl0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/ads/new/page.tsx\n"));

/***/ }),

/***/ "(app-pages-browser)/./components/admin/AdFormWrapper.tsx":
/*!********************************************!*\
  !*** ./components/admin/AdFormWrapper.tsx ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports signature on update so we can compare the boundary
                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)
                module.hot.dispose(function (data) {
                    data.prevSignature =
                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevSignature !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevSignature !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ })

});
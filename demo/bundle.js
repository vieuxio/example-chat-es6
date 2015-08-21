/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	__webpack_require__(1);
	
	var _ChatUnionRootRootCulture = __webpack_require__(5);
	
	var _ChatUnionRootRootCulture2 = _interopRequireDefault(_ChatUnionRootRootCulture);
	
	var _ChatUnionChatRegime = __webpack_require__(8);
	
	var _ChatUnionChatRegime2 = _interopRequireDefault(_ChatUnionChatRegime);
	
	new _ChatUnionRootRootCulture2['default']().render(document.body);
	
	_ChatUnionChatRegime2['default'].init();

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./reset.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./reset.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	exports.push([module.id, "* {\n    position: relative;\n    box-sizing: border-box;\n}\n\nhtml,\nbody,\nh1, h2, h3, h4, h5, h6,\nmenu {\n    margin: 0;\n    padding: 0;\n}\n\nhtml, body {\n    height: 100%;\n    width: 100%;\n    overflow: hidden;\n}\n\nbody {\n    font: 14px 'Helvetica Neue', Helvetica, Arial, sans-serif;\n    line-height: 1.4em;\n    background: #f5f5f5;\n    color: #4d4d4d;\n    margin: 0 auto;\n    -webkit-font-smoothing: antialiased;\n    -moz-font-smoothing: antialiased;\n    font-smoothing: antialiased;\n    font-weight: 300;\n}\n\ninput, button {\n    border: none;\n    font: 14px 'Helvetica Neue', Helvetica, Arial, sans-serif;\n}\n", ""]);

/***/ },
/* 3 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	"use strict";
	
	module.exports = function () {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for (var i = 0; i < this.length; i++) {
				var item = this[i];
				if (item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function (modules, mediaQuery) {
			if (typeof modules === "string") modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for (var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if (typeof id === "number") alreadyImportedModules[id] = true;
			}
			for (i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if (mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if (mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0;
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function createStyleElement() {
		var styleElement = document.createElement("style");
		var head = getHeadElement();
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		return styleElement;
	}
	
	function createLinkElement() {
		var linkElement = document.createElement("link");
		var head = getHeadElement();
		linkElement.rel = "stylesheet";
		head.appendChild(linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement();
			update = updateLink.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _politburo = __webpack_require__(6);
	
	var _RootRep = __webpack_require__(7);
	
	var _RootRep2 = _interopRequireDefault(_RootRep);
	
	var _MenuMenuCulture = __webpack_require__(13);
	
	var _MenuMenuCulture2 = _interopRequireDefault(_MenuMenuCulture);
	
	var _MotherPaneMotherPaneCulture = __webpack_require__(29);
	
	var _MotherPaneMotherPaneCulture2 = _interopRequireDefault(_MotherPaneMotherPaneCulture);
	
	var _ChatBoxChatBoxCulture = __webpack_require__(37);
	
	var _ChatBoxChatBoxCulture2 = _interopRequireDefault(_ChatBoxChatBoxCulture);
	
	__webpack_require__(41);
	
	var RootCulture = (function (_Culture) {
	    _inherits(RootCulture, _Culture);
	
	    function RootCulture() {
	        var _this = this;
	
	        _classCallCheck(this, RootCulture);
	
	        _get(Object.getPrototypeOf(RootCulture.prototype), 'constructor', this).call(this);
	
	        this.rep = new _RootRep2['default']();
	
	        this.menu = new _MenuMenuCulture2['default']();
	        this.motherPane = new _MotherPaneMotherPaneCulture2['default']();
	        this.chatBoxes = [];
	
	        this.rep.on(this.rep.EventType.ADD_CHAT_BOX, function (thread) {
	            return _this.onAddChatBox(thread);
	        });
	        this.rep.on(this.rep.EventType.REMOVE_CHAT_BOX, function (thread) {
	            return _this.onRemoveChatBox(thread);
	        });
	    }
	
	    _createClass(RootCulture, [{
	        key: 'onAddChatBox',
	        value: function onAddChatBox(thread) {
	            var existingChatBox = this.chatBoxes.filter(function (chatBox) {
	                return chatBox.thread.id == thread.id;
	            })[0];
	
	            if (existingChatBox) return existingChatBox.focus();
	
	            var chatBox = new _ChatBoxChatBoxCulture2['default'](thread);
	            this.chatBoxes.push(chatBox);
	
	            chatBox.render(this.$('chat-boxes'));
	        }
	    }, {
	        key: 'onRemoveChatBox',
	        value: function onRemoveChatBox(thread) {
	            var _this2 = this;
	
	            this.chatBoxes.some(function (chatBox, i) {
	                if (chatBox.thread.id == thread.id) {
	                    chatBox.dispose();
	
	                    _this2.chatBoxes.splice(i, 1);
	                }
	            });
	        }
	    }, {
	        key: 'onClick',
	        value: function onClick(e) {
	            var target = e.target;
	
	            var inChatBox = false;
	
	            do {
	                if (target.matches('chat-box') || target.matches('threads-popover')) {
	                    inChatBox = true;
	                    break;
	                }
	            } while ((target = target.parentNode) && target != document.body);
	
	            if (!inChatBox && this.rep.active) this.rep.deactivateChatBox();
	        }
	    }, {
	        key: 'render',
	        value: function render(opt_base, opt_index) {
	            _get(Object.getPrototypeOf(RootCulture.prototype), 'render', this).call(this, opt_base, opt_index);
	
	            this.menu.render();
	            this.chatBoxes.forEach(function (chatBox) {
	                return chatBox.render();
	            });
	        }
	    }, {
	        key: 'templates_base',
	        value: function templates_base() {
	            return '<root id="' + this.id + '">\n            ' + this.menu + '\n            ' + this.motherPane + '\n            <chat-boxes></chat-boxes>\n            </root>';
	        }
	    }, {
	        key: 'dispose',
	        value: function dispose() {
	            this.menu.dispose();
	            this.chatBoxes.forEach(function (chatBox) {
	                return chatBox.dispose();
	            });
	
	            _get(Object.getPrototypeOf(RootCulture.prototype), 'dispose', this).call(this);
	        }
	    }, {
	        key: 'events',
	        get: function get() {
	            return {
	                'click': {
	                    'root': this.onClick
	                }
	            };
	        }
	    }]);
	
	    return RootCulture;
	})(_politburo.Culture);
	
	exports['default'] = RootCulture;
	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	(function webpackUniversalModuleDefinition(root, factory) {
		if (true) module.exports = factory();else if (typeof define === 'function' && define.amd) define(factory);else if (typeof exports === 'object') exports["politburo"] = factory();else root["politburo"] = factory();
	})(undefined, function () {
		return (/******/(function (modules) {
				// webpackBootstrap
				/******/ // The module cache
				/******/var installedModules = {};
				/******/
				/******/ // The require function
				/******/function __webpack_require__(moduleId) {
					/******/
					/******/ // Check if module is in cache
					/******/if (installedModules[moduleId])
						/******/return installedModules[moduleId].exports;
					/******/
					/******/ // Create a new module (and put it into the cache)
					/******/var module = installedModules[moduleId] = {
						/******/exports: {},
						/******/id: moduleId,
						/******/loaded: false
						/******/ };
					/******/
					/******/ // Execute the module function
					/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
					/******/
					/******/ // Flag the module as loaded
					/******/module.loaded = true;
					/******/
					/******/ // Return the exports of the module
					/******/return module.exports;
					/******/
				}
				/******/
				/******/
				/******/ // expose the modules object (__webpack_modules__)
				/******/__webpack_require__.m = modules;
				/******/
				/******/ // expose the module cache
				/******/__webpack_require__.c = installedModules;
				/******/
				/******/ // __webpack_public_path__
				/******/__webpack_require__.p = "";
				/******/
				/******/ // Load entry module and return exports
				/******/return __webpack_require__(0);
				/******/
			})(
			/************************************************************************/
			/******/[
			/* 0 */
			function (module, exports, __webpack_require__) {
	
				'use strict';
	
				Object.defineProperty(exports, '__esModule', {
					value: true
				});
	
				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { 'default': obj };
				}
	
				var _rolesCulture = __webpack_require__(1);
	
				var _rolesCulture2 = _interopRequireDefault(_rolesCulture);
	
				var _rolesCultureMinistry = __webpack_require__(2);
	
				var _rolesCultureMinistry2 = _interopRequireDefault(_rolesCultureMinistry);
	
				var _rolesDiplomat = __webpack_require__(3);
	
				var _rolesDiplomat2 = _interopRequireDefault(_rolesDiplomat);
	
				var _rolesRegime = __webpack_require__(5);
	
				var _rolesRegime2 = _interopRequireDefault(_rolesRegime);
	
				var _rolesRepresentative = __webpack_require__(6);
	
				var _rolesRepresentative2 = _interopRequireDefault(_rolesRepresentative);
	
				var _rolesSatellite = __webpack_require__(7);
	
				var _rolesSatellite2 = _interopRequireDefault(_rolesSatellite);
	
				var _rolesStereotype = __webpack_require__(8);
	
				var _rolesStereotype2 = _interopRequireDefault(_rolesStereotype);
	
				var _rolesUndertaker = __webpack_require__(9);
	
				var _rolesUndertaker2 = _interopRequireDefault(_rolesUndertaker);
	
				exports.Culture = _rolesCulture2['default'];
				exports.CultureMinistry = _rolesCultureMinistry2['default'];
				exports.Diplomat = _rolesDiplomat2['default'];
				exports.Regime = _rolesRegime2['default'];
				exports.Representative = _rolesRepresentative2['default'];
				exports.Satellite = _rolesSatellite2['default'];
				exports.Stereotype = _rolesStereotype2['default'];
				exports.Undertaker = _rolesUndertaker2['default'];
	
				/***/
			},
			/* 1 */
			function (module, exports, __webpack_require__) {
	
				'use strict';
	
				Object.defineProperty(exports, '__esModule', {
					value: true
				});
	
				var _createClass = (function () {
					function defineProperties(target, props) {
						for (var i = 0; i < props.length; i++) {
							var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
						}
					}return function (Constructor, protoProps, staticProps) {
						if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
					};
				})();
	
				function _classCallCheck(instance, Constructor) {
					if (!(instance instanceof Constructor)) {
						throw new TypeError('Cannot call a class as a function');
					}
				}
	
				var CultureMinistry = __webpack_require__(2);
	
				var Culture = (function () {
					function Culture() {
						_classCallCheck(this, Culture);
	
						CultureMinistry.setCulture(this);
					}
	
					_createClass(Culture, [{
						key: 'toString',
						value: function toString() {
							return this.templates_base();
						}
					}, {
						key: '$$',
						value: function $$(selector) {
							var rv = null,
							    el = this.el;
	
							if (el) rv = el.querySelectorAll(selector);
	
							if (!rv.length) rv = null;
	
							return rv;
						}
					}, {
						key: '$',
						value: function $(selector) {
							var rv = null,
							    el = this.el;
	
							if (el) rv = selector == undefined ? el : el.querySelector(selector);
	
							return rv;
						}
					}, {
						key: 'render',
						value: function render(opt_base, opt_index) {
							if (opt_base) {
								this.element = CultureMinistry.createElement(this.toString());
								opt_base.insertBefore(this.element, opt_base.childNodes[opt_index] || null);
							}
						}
					}, {
						key: 'templates_base',
						value: function templates_base() {
							return '<div id="' + this.id + '"></div>';
						}
					}, {
						key: 'dispose',
						value: function dispose() {
							CultureMinistry.removeCulture(this);
							this.element && this.element.parentNode.removeChild(this.element);
							this.element = null;
							this.id_ = null;
						}
					}, {
						key: 'id',
						get: function get() {
							return this.id_;
						}
					}, {
						key: 'el',
						get: function get() {
							var rv = this.element;
							if (!rv) rv = this.element = document.getElementById(this.id);
	
							return rv;
						}
					}]);
	
					return Culture;
				})();
	
				exports['default'] = Culture;
				;
				module.exports = exports['default'];
	
				/***/
			},
			/* 2 */
			function (module, exports) {
	
				'use strict';
	
				Object.defineProperty(exports, '__esModule', {
					value: true
				});
				var cultsRegistry = {};
	
				var events = ['click', 'mouseover', 'mouseout', 'mousemove', 'mousedown', 'mouseup', 'scroll', 'keyup', 'keypress', 'focus', 'touchstart', 'touchmove', 'touchend'];
	
				document.addEventListener('DOMContentLoaded', function () {
					events.forEach(function (type) {
						return document.body.addEventListener(type, handleEvent);
					});
				});
	
				var getUid = (function () {
					var counter = Math.floor(Math.random() * 2147483648);
	
					return function () {
						return (counter++).toString(36);
					};
				})();
	
				var createElement = (function () {
					var tempDiv = document.createElement('div');
	
					return function (htmlString) {
						tempDiv.innerHTML = htmlString;
						return tempDiv.removeChild(tempDiv.firstChild);
					};
				})();
	
				function getParentCults(child) {
					var node = child,
					    parentCults = [],
					    cult,
					    ids;
	
					if (ids = node.getAttribute && node.getAttribute('data-cult')) {
						ids.split(',').forEach(function (id) {
							return parentCults.push(cultsRegistry[id]);
						});
	
						return parentCults;
					}
	
					ids = [];
	
					do {
						if (cult = cultsRegistry[node.id]) {
							parentCults.push(cult);
							ids.push(node.id);
						}
					} while (node = node.parentNode);
	
					child.setAttribute('data-cult', ids.join(','));
					return parentCults;
				}
	
				function handleEvent(e) {
					var cults = getParentCults(e.target),
					    target = e.target,
					    broken = false;
	
					do {
						e.lastTarget = target;
	
						if (broken) break;
	
						broken = callHandlers(cults, e);
					} while (target.parentNode != document.body && (target = target.parentNode));
				}
	
				/**
	    * Given a list of cultsRegistry, checks whether any component would respond to the given event and if so, executes the
	    * event handler defined in the component.
	    */
				function callHandlers(cults, e) {
					var broken = false;
	
					for (var i = 0; i < cults.length; i++) {
						var cult = cults[i];
						var handlers = cult && cult.events && cult.events[e.type];
	
						if (!handlers) continue;
	
						var selectors = Object.keys(handlers);
	
						if (callHandler(cult, e, handlers, selectors) === false) {
							broken = true;
							break;
						}
					}
	
					return broken;
				}
	
				function callHandler(cult, e, handlers, selectors) {
					var rv = true;
	
					selectors.forEach(function (selector) {
						if (matchesSelector(e.lastTarget, selector)) {
							var targetCulture = getCulture(e.lastTarget.id);
	
							rv = handlers[selector].call(cult, e, targetCulture);
						}
					});
	
					return rv;
				}
	
				function matchesSelector(el, selector) {
					return [].indexOf.call(document.querySelectorAll(selector), el) >= 0;
				}
	
				function getCulture(id) {
					return cultsRegistry[id];
				}
	
				function setCulture(cult) {
					cult.id_ = getUid();
	
					cultsRegistry[cult.id] = cult;
				}
	
				function removeCulture(cult) {
					delete cultsRegistry[cult.id];
				}
	
				exports['default'] = {
					getUid: getUid,
					getCulture: getCulture,
					setCulture: setCulture,
					removeCulture: removeCulture,
					createElement: createElement
				};
				module.exports = exports['default'];
	
				/***/
			},
			/* 3 */
			function (module, exports, __webpack_require__) {
	
				'use strict';
	
				Object.defineProperty(exports, '__esModule', {
					value: true
				});
	
				var _get = function get(_x, _x2, _x3) {
					var _again = true;_function: while (_again) {
						var object = _x,
						    property = _x2,
						    receiver = _x3;desc = parent = getter = undefined;_again = false;if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
							var parent = Object.getPrototypeOf(object);if (parent === null) {
								return undefined;
							} else {
								_x = parent;_x2 = property;_x3 = receiver;_again = true;continue _function;
							}
						} else if ('value' in desc) {
							return desc.value;
						} else {
							var getter = desc.get;if (getter === undefined) {
								return undefined;
							}return getter.call(receiver);
						}
					}
				};
	
				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { 'default': obj };
				}
	
				function _classCallCheck(instance, Constructor) {
					if (!(instance instanceof Constructor)) {
						throw new TypeError('Cannot call a class as a function');
					}
				}
	
				function _inherits(subClass, superClass) {
					if (typeof superClass !== 'function' && superClass !== null) {
						throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
					}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
				}
	
				var _eventemitter2 = __webpack_require__(4);
	
				var _eventemitter22 = _interopRequireDefault(_eventemitter2);
	
				var Diplomat = (function (_EventEmitter) {
					_inherits(Diplomat, _EventEmitter);
	
					function Diplomat() {
						_classCallCheck(this, Diplomat);
	
						_get(Object.getPrototypeOf(Diplomat.prototype), 'constructor', this).call(this, {
							maxListeners: Infinity
						});
					}
	
					return Diplomat;
				})(_eventemitter22['default']);
	
				exports['default'] = Diplomat;
				module.exports = exports['default'];
	
				/***/
			},
			/* 4 */
			function (module, exports, __webpack_require__) {
	
				var __WEBPACK_AMD_DEFINE_RESULT__; /*!
	                                      * EventEmitter2
	                                      * https://github.com/hij1nx/EventEmitter2
	                                      *
	                                      * Copyright (c) 2013 hij1nx
	                                      * Licensed under the MIT license.
	                                      */
				'use strict';
	
				;!(function (undefined) {
	
					var isArray = Array.isArray ? Array.isArray : function _isArray(obj) {
						return Object.prototype.toString.call(obj) === "[object Array]";
					};
					var defaultMaxListeners = 10;
	
					function init() {
						this._events = {};
						if (this._conf) {
							configure.call(this, this._conf);
						}
					}
	
					function configure(conf) {
						if (conf) {
	
							this._conf = conf;
	
							conf.delimiter && (this.delimiter = conf.delimiter);
							conf.maxListeners && (this._events.maxListeners = conf.maxListeners);
							conf.wildcard && (this.wildcard = conf.wildcard);
							conf.newListener && (this.newListener = conf.newListener);
	
							if (this.wildcard) {
								this.listenerTree = {};
							}
						}
					}
	
					function EventEmitter(conf) {
						this._events = {};
						this.newListener = false;
						configure.call(this, conf);
					}
	
					//
					// Attention, function return type now is array, always !
					// It has zero elements if no any matches found and one or more
					// elements (leafs) if there are matches
					//
					function searchListenerTree(handlers, type, tree, i) {
						if (!tree) {
							return [];
						}
						var listeners = [],
						    leaf,
						    len,
						    branch,
						    xTree,
						    xxTree,
						    isolatedBranch,
						    endReached,
						    typeLength = type.length,
						    currentType = type[i],
						    nextType = type[i + 1];
						if (i === typeLength && tree._listeners) {
							//
							// If at the end of the event(s) list and the tree has listeners
							// invoke those listeners.
							//
							if (typeof tree._listeners === 'function') {
								handlers && handlers.push(tree._listeners);
								return [tree];
							} else {
								for (leaf = 0, len = tree._listeners.length; leaf < len; leaf++) {
									handlers && handlers.push(tree._listeners[leaf]);
								}
								return [tree];
							}
						}
	
						if (currentType === '*' || currentType === '**' || tree[currentType]) {
							//
							// If the event emitted is '*' at this part
							// or there is a concrete match at this patch
							//
							if (currentType === '*') {
								for (branch in tree) {
									if (branch !== '_listeners' && tree.hasOwnProperty(branch)) {
										listeners = listeners.concat(searchListenerTree(handlers, type, tree[branch], i + 1));
									}
								}
								return listeners;
							} else if (currentType === '**') {
								endReached = i + 1 === typeLength || i + 2 === typeLength && nextType === '*';
								if (endReached && tree._listeners) {
									// The next element has a _listeners, add it to the handlers.
									listeners = listeners.concat(searchListenerTree(handlers, type, tree, typeLength));
								}
	
								for (branch in tree) {
									if (branch !== '_listeners' && tree.hasOwnProperty(branch)) {
										if (branch === '*' || branch === '**') {
											if (tree[branch]._listeners && !endReached) {
												listeners = listeners.concat(searchListenerTree(handlers, type, tree[branch], typeLength));
											}
											listeners = listeners.concat(searchListenerTree(handlers, type, tree[branch], i));
										} else if (branch === nextType) {
											listeners = listeners.concat(searchListenerTree(handlers, type, tree[branch], i + 2));
										} else {
											// No match on this one, shift into the tree but not in the type array.
											listeners = listeners.concat(searchListenerTree(handlers, type, tree[branch], i));
										}
									}
								}
								return listeners;
							}
	
							listeners = listeners.concat(searchListenerTree(handlers, type, tree[currentType], i + 1));
						}
	
						xTree = tree['*'];
						if (xTree) {
							//
							// If the listener tree will allow any match for this part,
							// then recursively explore all branches of the tree
							//
							searchListenerTree(handlers, type, xTree, i + 1);
						}
	
						xxTree = tree['**'];
						if (xxTree) {
							if (i < typeLength) {
								if (xxTree._listeners) {
									// If we have a listener on a '**', it will catch all, so add its handler.
									searchListenerTree(handlers, type, xxTree, typeLength);
								}
	
								// Build arrays of matching next branches and others.
								for (branch in xxTree) {
									if (branch !== '_listeners' && xxTree.hasOwnProperty(branch)) {
										if (branch === nextType) {
											// We know the next element will match, so jump twice.
											searchListenerTree(handlers, type, xxTree[branch], i + 2);
										} else if (branch === currentType) {
											// Current node matches, move into the tree.
											searchListenerTree(handlers, type, xxTree[branch], i + 1);
										} else {
											isolatedBranch = {};
											isolatedBranch[branch] = xxTree[branch];
											searchListenerTree(handlers, type, { '**': isolatedBranch }, i + 1);
										}
									}
								}
							} else if (xxTree._listeners) {
								// We have reached the end and still on a '**'
								searchListenerTree(handlers, type, xxTree, typeLength);
							} else if (xxTree['*'] && xxTree['*']._listeners) {
								searchListenerTree(handlers, type, xxTree['*'], typeLength);
							}
						}
	
						return listeners;
					}
	
					function growListenerTree(type, listener) {
	
						type = typeof type === 'string' ? type.split(this.delimiter) : type.slice();
	
						//
						// Looks for two consecutive '**', if so, don't add the event at all.
						//
						for (var i = 0, len = type.length; i + 1 < len; i++) {
							if (type[i] === '**' && type[i + 1] === '**') {
								return;
							}
						}
	
						var tree = this.listenerTree;
						var name = type.shift();
	
						while (name) {
	
							if (!tree[name]) {
								tree[name] = {};
							}
	
							tree = tree[name];
	
							if (type.length === 0) {
	
								if (!tree._listeners) {
									tree._listeners = listener;
								} else if (typeof tree._listeners === 'function') {
									tree._listeners = [tree._listeners, listener];
								} else if (isArray(tree._listeners)) {
	
									tree._listeners.push(listener);
	
									if (!tree._listeners.warned) {
	
										var m = defaultMaxListeners;
	
										if (typeof this._events.maxListeners !== 'undefined') {
											m = this._events.maxListeners;
										}
	
										if (m > 0 && tree._listeners.length > m) {
	
											tree._listeners.warned = true;
											console.error('(node) warning: possible EventEmitter memory ' + 'leak detected. %d listeners added. ' + 'Use emitter.setMaxListeners() to increase limit.', tree._listeners.length);
											console.trace();
										}
									}
								}
								return true;
							}
							name = type.shift();
						}
						return true;
					}
	
					// By default EventEmitters will print a warning if more than
					// 10 listeners are added to it. This is a useful default which
					// helps finding memory leaks.
					//
					// Obviously not all Emitters should be limited to 10. This function allows
					// that to be increased. Set to zero for unlimited.
	
					EventEmitter.prototype.delimiter = '.';
	
					EventEmitter.prototype.setMaxListeners = function (n) {
						this._events || init.call(this);
						this._events.maxListeners = n;
						if (!this._conf) this._conf = {};
						this._conf.maxListeners = n;
					};
	
					EventEmitter.prototype.event = '';
	
					EventEmitter.prototype.once = function (event, fn) {
						this.many(event, 1, fn);
						return this;
					};
	
					EventEmitter.prototype.many = function (event, ttl, fn) {
						var self = this;
	
						if (typeof fn !== 'function') {
							throw new Error('many only accepts instances of Function');
						}
	
						function listener() {
							if (--ttl === 0) {
								self.off(event, listener);
							}
							fn.apply(this, arguments);
						}
	
						listener._origin = fn;
	
						this.on(event, listener);
	
						return self;
					};
	
					EventEmitter.prototype.emit = function () {
	
						this._events || init.call(this);
	
						var type = arguments[0];
	
						if (type === 'newListener' && !this.newListener) {
							if (!this._events.newListener) {
								return false;
							}
						}
	
						// Loop through the *_all* functions and invoke them.
						if (this._all) {
							var l = arguments.length;
							var args = new Array(l - 1);
							for (var i = 1; i < l; i++) args[i - 1] = arguments[i];
							for (i = 0, l = this._all.length; i < l; i++) {
								this.event = type;
								this._all[i].apply(this, args);
							}
						}
	
						// If there is no 'error' event listener then throw.
						if (type === 'error') {
	
							if (!this._all && !this._events.error && !(this.wildcard && this.listenerTree.error)) {
	
								if (arguments[1] instanceof Error) {
									throw arguments[1]; // Unhandled 'error' event
								} else {
										throw new Error("Uncaught, unspecified 'error' event.");
									}
								return false;
							}
						}
	
						var handler;
	
						if (this.wildcard) {
							handler = [];
							var ns = typeof type === 'string' ? type.split(this.delimiter) : type.slice();
							searchListenerTree.call(this, handler, ns, this.listenerTree, 0);
						} else {
							handler = this._events[type];
						}
	
						if (typeof handler === 'function') {
							this.event = type;
							if (arguments.length === 1) {
								handler.call(this);
							} else if (arguments.length > 1) switch (arguments.length) {
								case 2:
									handler.call(this, arguments[1]);
									break;
								case 3:
									handler.call(this, arguments[1], arguments[2]);
									break;
								// slower
								default:
									var l = arguments.length;
									var args = new Array(l - 1);
									for (var i = 1; i < l; i++) args[i - 1] = arguments[i];
									handler.apply(this, args);
							}
							return true;
						} else if (handler) {
							var l = arguments.length;
							var args = new Array(l - 1);
							for (var i = 1; i < l; i++) args[i - 1] = arguments[i];
	
							var listeners = handler.slice();
							for (var i = 0, l = listeners.length; i < l; i++) {
								this.event = type;
								listeners[i].apply(this, args);
							}
							return listeners.length > 0 || !!this._all;
						} else {
							return !!this._all;
						}
					};
	
					EventEmitter.prototype.on = function (type, listener) {
	
						if (typeof type === 'function') {
							this.onAny(type);
							return this;
						}
	
						if (typeof listener !== 'function') {
							throw new Error('on only accepts instances of Function');
						}
						this._events || init.call(this);
	
						// To avoid recursion in the case that type == "newListeners"! Before
						// adding it to the listeners, first emit "newListeners".
						this.emit('newListener', type, listener);
	
						if (this.wildcard) {
							growListenerTree.call(this, type, listener);
							return this;
						}
	
						if (!this._events[type]) {
							// Optimize the case of one listener. Don't need the extra array object.
							this._events[type] = listener;
						} else if (typeof this._events[type] === 'function') {
							// Adding the second element, need to change to array.
							this._events[type] = [this._events[type], listener];
						} else if (isArray(this._events[type])) {
							// If we've already got an array, just append.
							this._events[type].push(listener);
	
							// Check for listener leak
							if (!this._events[type].warned) {
	
								var m = defaultMaxListeners;
	
								if (typeof this._events.maxListeners !== 'undefined') {
									m = this._events.maxListeners;
								}
	
								if (m > 0 && this._events[type].length > m) {
	
									this._events[type].warned = true;
									console.error('(node) warning: possible EventEmitter memory ' + 'leak detected. %d listeners added. ' + 'Use emitter.setMaxListeners() to increase limit.', this._events[type].length);
									console.trace();
								}
							}
						}
						return this;
					};
	
					EventEmitter.prototype.onAny = function (fn) {
	
						if (typeof fn !== 'function') {
							throw new Error('onAny only accepts instances of Function');
						}
	
						if (!this._all) {
							this._all = [];
						}
	
						// Add the function to the event listener collection.
						this._all.push(fn);
						return this;
					};
	
					EventEmitter.prototype.addListener = EventEmitter.prototype.on;
	
					EventEmitter.prototype.off = function (type, listener) {
						if (typeof listener !== 'function') {
							throw new Error('removeListener only takes instances of Function');
						}
	
						var handlers,
						    leafs = [];
	
						if (this.wildcard) {
							var ns = typeof type === 'string' ? type.split(this.delimiter) : type.slice();
							leafs = searchListenerTree.call(this, null, ns, this.listenerTree, 0);
						} else {
							// does not use listeners(), so no side effect of creating _events[type]
							if (!this._events[type]) return this;
							handlers = this._events[type];
							leafs.push({ _listeners: handlers });
						}
	
						for (var iLeaf = 0; iLeaf < leafs.length; iLeaf++) {
							var leaf = leafs[iLeaf];
							handlers = leaf._listeners;
							if (isArray(handlers)) {
	
								var position = -1;
	
								for (var i = 0, length = handlers.length; i < length; i++) {
									if (handlers[i] === listener || handlers[i].listener && handlers[i].listener === listener || handlers[i]._origin && handlers[i]._origin === listener) {
										position = i;
										break;
									}
								}
	
								if (position < 0) {
									continue;
								}
	
								if (this.wildcard) {
									leaf._listeners.splice(position, 1);
								} else {
									this._events[type].splice(position, 1);
								}
	
								if (handlers.length === 0) {
									if (this.wildcard) {
										delete leaf._listeners;
									} else {
										delete this._events[type];
									}
								}
								return this;
							} else if (handlers === listener || handlers.listener && handlers.listener === listener || handlers._origin && handlers._origin === listener) {
								if (this.wildcard) {
									delete leaf._listeners;
								} else {
									delete this._events[type];
								}
							}
						}
	
						return this;
					};
	
					EventEmitter.prototype.offAny = function (fn) {
						var i = 0,
						    l = 0,
						    fns;
						if (fn && this._all && this._all.length > 0) {
							fns = this._all;
							for (i = 0, l = fns.length; i < l; i++) {
								if (fn === fns[i]) {
									fns.splice(i, 1);
									return this;
								}
							}
						} else {
							this._all = [];
						}
						return this;
					};
	
					EventEmitter.prototype.removeListener = EventEmitter.prototype.off;
	
					EventEmitter.prototype.removeAllListeners = function (type) {
						if (arguments.length === 0) {
							!this._events || init.call(this);
							return this;
						}
	
						if (this.wildcard) {
							var ns = typeof type === 'string' ? type.split(this.delimiter) : type.slice();
							var leafs = searchListenerTree.call(this, null, ns, this.listenerTree, 0);
	
							for (var iLeaf = 0; iLeaf < leafs.length; iLeaf++) {
								var leaf = leafs[iLeaf];
								leaf._listeners = null;
							}
						} else {
							if (!this._events[type]) return this;
							this._events[type] = null;
						}
						return this;
					};
	
					EventEmitter.prototype.listeners = function (type) {
						if (this.wildcard) {
							var handlers = [];
							var ns = typeof type === 'string' ? type.split(this.delimiter) : type.slice();
							searchListenerTree.call(this, handlers, ns, this.listenerTree, 0);
							return handlers;
						}
	
						this._events || init.call(this);
	
						if (!this._events[type]) this._events[type] = [];
						if (!isArray(this._events[type])) {
							this._events[type] = [this._events[type]];
						}
						return this._events[type];
					};
	
					EventEmitter.prototype.listenersAny = function () {
	
						if (this._all) {
							return this._all;
						} else {
							return [];
						}
					};
	
					if (true) {
						// AMD. Register as an anonymous module.
						!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
							return EventEmitter;
						}).call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
					} else if (typeof exports === 'object') {
						// CommonJS
						exports.EventEmitter2 = EventEmitter;
					} else {
						// Browser global.
						window.EventEmitter2 = EventEmitter;
					}
				})();
	
				/***/
			},
			/* 5 */
			function (module, exports, __webpack_require__) {
	
				'use strict';
	
				Object.defineProperty(exports, '__esModule', {
					value: true
				});
	
				var _get = function get(_x, _x2, _x3) {
					var _again = true;_function: while (_again) {
						var object = _x,
						    property = _x2,
						    receiver = _x3;desc = parent = getter = undefined;_again = false;if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
							var parent = Object.getPrototypeOf(object);if (parent === null) {
								return undefined;
							} else {
								_x = parent;_x2 = property;_x3 = receiver;_again = true;continue _function;
							}
						} else if ('value' in desc) {
							return desc.value;
						} else {
							var getter = desc.get;if (getter === undefined) {
								return undefined;
							}return getter.call(receiver);
						}
					}
				};
	
				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { 'default': obj };
				}
	
				function _classCallCheck(instance, Constructor) {
					if (!(instance instanceof Constructor)) {
						throw new TypeError('Cannot call a class as a function');
					}
				}
	
				function _inherits(subClass, superClass) {
					if (typeof superClass !== 'function' && superClass !== null) {
						throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
					}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
				}
	
				var _eventemitter2 = __webpack_require__(4);
	
				var _eventemitter22 = _interopRequireDefault(_eventemitter2);
	
				var Regime = (function (_EventEmitter) {
					_inherits(Regime, _EventEmitter);
	
					function Regime() {
						_classCallCheck(this, Regime);
	
						_get(Object.getPrototypeOf(Regime.prototype), 'constructor', this).call(this, {
							maxListeners: Infinity
						});
					}
	
					return Regime;
				})(_eventemitter22['default']);
	
				exports['default'] = Regime;
				module.exports = exports['default'];
	
				/***/
			},
			/* 6 */
			function (module, exports, __webpack_require__) {
	
				'use strict';
	
				Object.defineProperty(exports, '__esModule', {
					value: true
				});
	
				var _createClass = (function () {
					function defineProperties(target, props) {
						for (var i = 0; i < props.length; i++) {
							var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
						}
					}return function (Constructor, protoProps, staticProps) {
						if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
					};
				})();
	
				var _get = function get(_x, _x2, _x3) {
					var _again = true;_function: while (_again) {
						var object = _x,
						    property = _x2,
						    receiver = _x3;desc = parent = getter = undefined;_again = false;if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
							var parent = Object.getPrototypeOf(object);if (parent === null) {
								return undefined;
							} else {
								_x = parent;_x2 = property;_x3 = receiver;_again = true;continue _function;
							}
						} else if ('value' in desc) {
							return desc.value;
						} else {
							var getter = desc.get;if (getter === undefined) {
								return undefined;
							}return getter.call(receiver);
						}
					}
				};
	
				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { 'default': obj };
				}
	
				function _classCallCheck(instance, Constructor) {
					if (!(instance instanceof Constructor)) {
						throw new TypeError('Cannot call a class as a function');
					}
				}
	
				function _inherits(subClass, superClass) {
					if (typeof superClass !== 'function' && superClass !== null) {
						throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
					}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
				}
	
				var _eventemitter2 = __webpack_require__(4);
	
				var _eventemitter22 = _interopRequireDefault(_eventemitter2);
	
				var Representative = (function (_EventEmitter) {
					_inherits(Representative, _EventEmitter);
	
					function Representative() {
						_classCallCheck(this, Representative);
	
						_get(Object.getPrototypeOf(Representative.prototype), 'constructor', this).call(this, {
							maxListeners: Infinity
						});
					}
	
					_createClass(Representative, [{
						key: 'dispose',
						value: function dispose() {
							this.removeAllListeners();
						}
					}]);
	
					return Representative;
				})(_eventemitter22['default']);
	
				exports['default'] = Representative;
				module.exports = exports['default'];
	
				/***/
			},
			/* 7 */
			function (module, exports) {
	
				"use strict";
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
	
				function _classCallCheck(instance, Constructor) {
					if (!(instance instanceof Constructor)) {
						throw new TypeError("Cannot call a class as a function");
					}
				}
	
				var Satellite = function Satellite() {
					_classCallCheck(this, Satellite);
				};
	
				exports["default"] = Satellite;
				module.exports = exports["default"];
	
				/***/
			},
			/* 8 */
			function (module, exports) {
	
				"use strict";
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
	
				function _classCallCheck(instance, Constructor) {
					if (!(instance instanceof Constructor)) {
						throw new TypeError("Cannot call a class as a function");
					}
				}
	
				var Stereotype = function Stereotype() {
					_classCallCheck(this, Stereotype);
				};
	
				exports["default"] = Stereotype;
				module.exports = exports["default"];
	
				/***/
			},
			/* 9 */
			function (module, exports) {
	
				"use strict";
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
	
				function _classCallCheck(instance, Constructor) {
					if (!(instance instanceof Constructor)) {
						throw new TypeError("Cannot call a class as a function");
					}
				}
	
				var Undertaker = function Undertaker() {
					_classCallCheck(this, Undertaker);
				};
	
				exports["default"] = Undertaker;
				module.exports = exports["default"];
	
				/***/
			}
			/******/])
		);
	});
	;
	//# sourceMappingURL=politburo.js.map
	/***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _politburo = __webpack_require__(6);
	
	var _ChatRegime = __webpack_require__(8);
	
	var _ChatRegime2 = _interopRequireDefault(_ChatRegime);
	
	var RootRep = (function (_Representative) {
	    _inherits(RootRep, _Representative);
	
	    function RootRep() {
	        var _this = this;
	
	        _classCallCheck(this, RootRep);
	
	        _get(Object.getPrototypeOf(RootRep.prototype), 'constructor', this).call(this);
	        _ChatRegime2['default'].on(this.EventType.ADD_CHAT_BOX, function (thread) {
	            return _this.emit(_this.EventType.ADD_CHAT_BOX, thread);
	        });
	        _ChatRegime2['default'].on(this.EventType.REMOVE_CHAT_BOX, function (thread) {
	            return _this.emit(_this.EventType.REMOVE_CHAT_BOX, thread);
	        });
	    }
	
	    _createClass(RootRep, [{
	        key: 'deactivateChatBox',
	        value: function deactivateChatBox() {
	            _ChatRegime2['default'].setActiveChatBox(null);
	        }
	    }, {
	        key: 'active',
	        get: function get() {
	            return !!_ChatRegime2['default'].activeChatBox;
	        }
	    }, {
	        key: 'EventType',
	        get: function get() {
	            return {
	                ADD_CHAT_BOX: 'add chat box',
	                REMOVE_CHAT_BOX: 'remove chat box',
	                SET_ACTIVE_CHAT_BOX: 'set active chat box'
	            };
	        }
	    }]);
	
	    return RootRep;
	})(_politburo.Representative);
	
	exports['default'] = RootRep;
	module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _politburo = __webpack_require__(6);
	
	var _ThreadUndertaker = __webpack_require__(9);
	
	var _ThreadUndertaker2 = _interopRequireDefault(_ThreadUndertaker);
	
	var _ThreadStereotype = __webpack_require__(11);
	
	var _ThreadStereotype2 = _interopRequireDefault(_ThreadStereotype);
	
	var ChatRegime = (function (_Regime) {
	    _inherits(ChatRegime, _Regime);
	
	    function ChatRegime() {
	        _classCallCheck(this, ChatRegime);
	
	        _get(Object.getPrototypeOf(ChatRegime.prototype), 'constructor', this).call(this);
	
	        this.undertaker = _ThreadUndertaker2['default'];
	        this.threads = [];
	        this.activeThread = null;
	
	        this.chatBoxes = [];
	        this.activeChatBox = null;
	
	        this.owner = null;
	    }
	
	    _createClass(ChatRegime, [{
	        key: 'init',
	        value: function init() {
	            this.getThreads_();
	            this.getOwner_();
	        }
	    }, {
	        key: 'getThreads_',
	        value: function getThreads_() {
	            var _this = this;
	
	            this.undertaker.getThreads(function (err, data) {
	                return _this.onInitialData(err, data);
	            });
	        }
	    }, {
	        key: 'setupUpdates_',
	        value: function setupUpdates_() {
	            var _this2 = this;
	
	            setTimeout(function () {
	                return _this2.undertaker.getUpdates(function (err, data) {
	                    return _this2.onUpdate(err, data);
	                });
	            }, 1000);
	        }
	    }, {
	        key: 'onInitialData',
	        value: function onInitialData(err, data) {
	            if (err) return;
	
	            this.threads = data.threads.map(function (thread) {
	                return new _ThreadStereotype2['default'](thread);
	            });
	            this.activeThread = this.threads[0];
	            this.activeThread.active = true;
	
	            this.emit(this.EventType.INITIAL_DATA);
	
	            this.setupUpdates_();
	        }
	    }, {
	        key: 'getThreadById',
	        value: function getThreadById(id) {
	            return this.threads.filter(function (thread) {
	                return thread.id == id;
	            })[0];
	        }
	    }, {
	        key: 'onUpdate',
	        value: function onUpdate(err, data) {
	            var _this3 = this;
	
	            if (err || !data.length) return this.setupUpdates_();
	
	            data = data.filter(function (data) {
	                var correspondingThread = _this3.getThreadById(data.thread.id);
	
	                if (!correspondingThread) return false;
	
	                var newMessages = data.thread.messages.slice(correspondingThread.messages.length);
	
	                if (!newMessages.length) return false;
	
	                correspondingThread.messages.push(newMessages);
	
	                correspondingThread.unread = data.thread.id != _this3.activeThread.id && (_this3.activeChatBox ? _this3.activeChatBox.id != data.thread.id : true);
	
	                correspondingThread.active = data.thread.id == _this3.activeThread.id;
	
	                return true;
	            });
	
	            if (!data.length) return this.setupUpdates_();
	
	            this.emit(this.EventType.NEW_MESSAGE, data);
	
	            this.setupUpdates_();
	        }
	    }, {
	        key: 'setActiveChatBox',
	        value: function setActiveChatBox(thread) {
	            if (this.activeChatBox == thread) return;
	
	            this.activeChatBox = thread;
	
	            if (thread) this.activeChatBox.unread = false;
	
	            this.emit(this.EventType.SET_ACTIVE_CHAT_BOX);
	        }
	    }, {
	        key: 'addChatBox',
	        value: function addChatBox(thread) {
	            if (this.chatBoxes.indexOf(thread) == -1) this.chatBoxes.push(thread);
	
	            this.setActiveChatBox(thread);
	
	            this.emit(this.EventType.ADD_CHAT_BOX, thread);
	        }
	    }, {
	        key: 'removeChatBox',
	        value: function removeChatBox(thread) {
	            var i = this.chatBoxes.indexOf(thread);
	            if (i == -1) return;
	
	            this.chatBoxes.splice(i, 1, 0);
	            this.setActiveChatBox(null);
	
	            this.emit(this.EventType.REMOVE_CHAT_BOX, thread);
	        }
	    }, {
	        key: 'getUnreadCount',
	        value: function getUnreadCount() {
	            return this.threads.filter(function (thread) {
	                return thread.unread;
	            }).length;
	        }
	    }, {
	        key: 'setActive',
	        value: function setActive(thread) {
	            if (this.activeThread == thread) return;
	
	            this.activeThread = thread;
	            this.activeThread.unread = false;
	
	            this.emit(this.EventType.SET_ACTIVE_THREAD);
	        }
	    }, {
	        key: 'getOwner_',
	        value: function getOwner_() {
	            var _this4 = this;
	
	            this.undertaker.getOwner(function (err, owner) {
	                return _this4.owner = owner;
	            });
	        }
	    }, {
	        key: 'EventType',
	        get: function get() {
	            return {
	                INITIAL_DATA: 'initial data',
	                SET_ACTIVE_THREAD: 'set active thread',
	                SET_ACTIVE_CHAT_BOX: 'set active chat box',
	                NEW_MESSAGE: 'new message',
	                ADD_CHAT_BOX: 'add chat box',
	                REMOVE_CHAT_BOX: 'remove chat box'
	            };
	        }
	    }]);
	
	    return ChatRegime;
	})(_politburo.Regime);
	
	exports['default'] = new ChatRegime();
	module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _db = __webpack_require__(10);
	
	var _db2 = _interopRequireDefault(_db);
	
	var ThreadUndertaker = (function () {
	    function ThreadUndertaker() {
	        _classCallCheck(this, ThreadUndertaker);
	    }
	
	    _createClass(ThreadUndertaker, [{
	        key: 'getThreads',
	        value: function getThreads(cb) {
	            var dbCopy = JSON.parse(JSON.stringify(_db2['default'].db));
	
	            setTimeout(cb.bind(null, null, dbCopy), 300);
	        }
	    }, {
	        key: 'getUpdates',
	        value: function getUpdates(cb) {
	            setTimeout(function () {
	                var updatesCopy = JSON.parse(JSON.stringify(_db2['default'].updates));
	
	                cb(null, updatesCopy);
	                _db2['default'].updates.length = 0;
	            }, 100);
	        }
	    }, {
	        key: 'getOwner',
	        value: function getOwner(cb) {
	            console.log(_db2['default'].owner);
	            var ownerCopy = JSON.parse(JSON.stringify(_db2['default'].owner));
	
	            cb(null, ownerCopy);
	        }
	    }]);
	
	    return ThreadUndertaker;
	})();
	
	exports['default'] = new ThreadUndertaker();
	module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	var db = {
	    threads: [{
	        user: {
	            gender: 'male',
	            name: {
	                title: 'mr',
	                first: 'miguel',
	                last: 'hamilton'
	            },
	            location: {
	                street: '5860 central st',
	                city: 'stanley',
	                state: 'california',
	                zip: 60987
	            },
	            email: 'miguel.hamilton@example.com',
	            username: 'heavygoose877',
	            password: 'users',
	            salt: 'Tcenyd2H',
	            md5: '12812ac8f72356c2df69f59463c5d505',
	            sha1: 'eab58a7abaf84233b69c753a306c2d8175603c4b',
	            sha256: '24d0ecbd76362370349c83900ff82de8d9ee23e838ed777fba5703f711352e47',
	            registered: 1110516558,
	            dob: 989806145,
	            phone: '(176)-160-1038',
	            cell: '(284)-648-9227',
	            SSN: '959-69-1558',
	            picture: {
	                large: 'https://randomuser.me/api/portraits/men/67.jpg',
	                medium: 'https://randomuser.me/api/portraits/med/men/67.jpg',
	                thumbnail: 'https://randomuser.me/api/portraits/thumb/men/67.jpg'
	            }
	        }
	    }, {
	        user: {
	            gender: 'female',
	            name: {
	                title: 'ms',
	                first: 'marsha',
	                last: 'fernandez'
	            },
	            location: {
	                street: '6255 pockrus page rd',
	                city: 'athens',
	                state: 'utah',
	                zip: 67987
	            },
	            email: 'marsha.fernandez@example.com',
	            username: 'blueleopard487',
	            password: 'bird33',
	            salt: 'yaLnNspZ',
	            md5: '8ccbf5cabbe6cd6acbe4108898767701',
	            sha1: 'f637cbadb9f3b4fc4892bcbf4b4017a9c9b597ad',
	            sha256: 'ad69fe208dbeca49a8388fdd2a9827da16698c6cbcad5f062f37717fb6440e8b',
	            registered: 1063682185,
	            dob: 242173753,
	            phone: '(969)-458-9278',
	            cell: '(309)-096-8840',
	            SSN: '374-89-5230',
	            picture: {
	                large: 'https://randomuser.me/api/portraits/women/92.jpg',
	                medium: 'https://randomuser.me/api/portraits/med/women/92.jpg',
	                thumbnail: 'https://randomuser.me/api/portraits/thumb/women/92.jpg'
	            }
	        }
	    }, {
	        user: {
	            gender: 'male',
	            name: {
	                title: 'mr',
	                first: 'fernando',
	                last: 'snyder'
	            },
	            location: {
	                street: '8972 camden ave',
	                city: 'fargo',
	                state: 'florida',
	                zip: 27170
	            },
	            email: 'fernando.snyder@example.com',
	            username: 'heavyladybug515',
	            password: 'hollow',
	            salt: 'zjvjey5F',
	            md5: '58abe1b9573af596559f1a71a8813b09',
	            sha1: 'f175d6df651d691d865f629a04528ccd8ec7d04b',
	            sha256: '9a3395036223e23aa81ca2b4223541f28185ff442305765e0c776add874a6e54',
	            registered: 1220719065,
	            dob: 133415925,
	            phone: '(859)-477-3194',
	            cell: '(949)-560-7272',
	            SSN: '679-06-0196',
	            picture: {
	                large: 'https://randomuser.me/api/portraits/men/47.jpg',
	                medium: 'https://randomuser.me/api/portraits/med/men/47.jpg',
	                thumbnail: 'https://randomuser.me/api/portraits/thumb/men/47.jpg'
	            }
	        }
	    }, {
	        user: {
	            gender: 'female',
	            name: {
	                title: 'mrs',
	                first: 'beverly',
	                last: 'woods'
	            },
	            location: {
	                street: '1126 paddock way',
	                city: 'cary',
	                state: 'georgia',
	                zip: 33513
	            },
	            email: 'beverly.woods@example.com',
	            username: 'orangerabbit988',
	            password: 'alexia',
	            salt: '60RKbcuJ',
	            md5: 'd2a14637ec486dcbc574683bd5ae6766',
	            sha1: 'b881119c18a1855e3aeac6ee6cf03c9fd7503b1b',
	            sha256: '1667d547d497ebde1a2fbf389c4c228a5f2f2bed5008ab9d65a30dd04c6c8e8c',
	            registered: 1189273178,
	            dob: 24811031,
	            phone: '(263)-096-0700',
	            cell: '(575)-465-4859',
	            SSN: '834-94-7301',
	            picture: {
	                large: 'https://randomuser.me/api/portraits/women/67.jpg',
	                medium: 'https://randomuser.me/api/portraits/med/women/67.jpg',
	                thumbnail: 'https://randomuser.me/api/portraits/thumb/women/67.jpg'
	            }
	        }
	    }, {
	        user: {
	            gender: 'female',
	            name: {
	                title: 'ms',
	                first: 'veronica',
	                last: 'watts'
	            },
	            location: {
	                street: '4099 cackson st',
	                city: 'cape coral',
	                state: 'arizona',
	                zip: 25854
	            },
	            email: 'veronica.watts@example.com',
	            username: 'purpleladybug418',
	            password: 'head',
	            salt: '9j7gRDXo',
	            md5: 'df0b9c2b9a0af07f5387078cabbaba94',
	            sha1: 'eb2962ba476cc4c2c8a81558d80416de975cac46',
	            sha256: 'b76c80edf6af6a42e70aa63bcac6ff6eeb8c8ee0376a88f7202432a034b0e257',
	            registered: 1208174039,
	            dob: 429832754,
	            phone: '(444)-265-7301',
	            cell: '(262)-054-2270',
	            SSN: '161-14-8052',
	            picture: {
	                large: 'https://randomuser.me/api/portraits/women/84.jpg',
	                medium: 'https://randomuser.me/api/portraits/med/women/84.jpg',
	                thumbnail: 'https://randomuser.me/api/portraits/thumb/women/84.jpg'
	            }
	        }
	    }, {
	        user: {
	            gender: 'male',
	            name: {
	                title: 'mr',
	                first: 'zack',
	                last: 'fletcher'
	            },
	            location: {
	                street: '7054 westheimer rd',
	                city: 'simi valley',
	                state: 'kansas',
	                zip: 37691
	            },
	            email: 'zack.fletcher@example.com',
	            username: 'blueladybug342',
	            password: 'shuai',
	            salt: 'gUQDlKEr',
	            md5: 'e5e22f4041d688a060065dbdb6ae91b4',
	            sha1: '3b0de01a4b69a2b4ad39db163312698dacd39f9c',
	            sha256: '39aa7322abac2dc94e38c41dc63ecff080264a7d5e860d082af88c9bafa053bc',
	            registered: 962639528,
	            dob: 250434885,
	            phone: '(152)-323-9961',
	            cell: '(519)-043-5540',
	            SSN: '915-11-8640',
	            picture: {
	                large: 'https://randomuser.me/api/portraits/men/38.jpg',
	                medium: 'https://randomuser.me/api/portraits/med/men/38.jpg',
	                thumbnail: 'https://randomuser.me/api/portraits/thumb/men/38.jpg'
	            }
	        }
	    }, {
	        user: {
	            gender: 'female',
	            name: {
	                title: 'ms',
	                first: 'serenity',
	                last: 'parker'
	            },
	            location: {
	                street: '4321 depaul dr',
	                city: 'berkeley',
	                state: 'vermont',
	                zip: 94247
	            },
	            email: 'serenity.parker@example.com',
	            username: 'heavymeercat274',
	            password: 'abcd',
	            salt: 'zldoXgry',
	            md5: '8c01853eb7da9a1e5d6cdf7e7f578655',
	            sha1: '8f3eee2b9057974f1c6fb87a07fd6289d70e20fa',
	            sha256: '7e31f24c6c8d76b0962d6a8dbd61c009308e07a91a56cc7287192e53be131557',
	            registered: 1332698149,
	            dob: 494223784,
	            phone: '(133)-781-0762',
	            cell: '(049)-286-1799',
	            SSN: '494-32-5694',
	            picture: {
	                large: 'https://randomuser.me/api/portraits/women/81.jpg',
	                medium: 'https://randomuser.me/api/portraits/med/women/81.jpg',
	                thumbnail: 'https://randomuser.me/api/portraits/thumb/women/81.jpg'
	            }
	        }
	    }, {
	        user: {
	            gender: 'male',
	            name: {
	                title: 'mr',
	                first: 'harvey',
	                last: 'gomez'
	            },
	            location: {
	                street: '9682 hillcrest rd',
	                city: 'elk grove',
	                state: 'new hampshire',
	                zip: 20152
	            },
	            email: 'harvey.gomez@example.com',
	            username: 'lazyfish246',
	            password: 'casey1',
	            salt: 'WiYMavTo',
	            md5: '45c34518d48e9a7f6f894f74a16dd00c',
	            sha1: '0a6443c39e6058990d60866f5e0062c214a168ed',
	            sha256: '9af54f427f0f7b523932a0841bd0269ff9643119c83d289e14d156398cd04bb6',
	            registered: 1077171383,
	            dob: 1379712452,
	            phone: '(337)-812-5265',
	            cell: '(010)-595-4872',
	            SSN: '282-28-5247',
	            picture: {
	                large: 'https://randomuser.me/api/portraits/men/74.jpg',
	                medium: 'https://randomuser.me/api/portraits/med/men/74.jpg',
	                thumbnail: 'https://randomuser.me/api/portraits/thumb/men/74.jpg'
	            }
	        }
	    }, {
	        user: {
	            gender: 'male',
	            name: {
	                title: 'mr',
	                first: 'scott',
	                last: 'patterson'
	            },
	            location: {
	                street: '5922 lakeview st',
	                city: 'woodbridge',
	                state: 'minnesota',
	                zip: 88725
	            },
	            email: 'scott.patterson@example.com',
	            username: 'whitekoala228',
	            password: 'warlock',
	            salt: 'KSX1hjsf',
	            md5: 'e833c971e016822ab5f30cb714b54a2c',
	            sha1: '3378c8a8e55d1419039ac0134dbd3a03ae33d5f4',
	            sha256: '79350c065d7107400b5894220f5b886bbb81f55cafc54c6e8baf1889b62e269d',
	            registered: 1174219910,
	            dob: 1058108276,
	            phone: '(102)-162-7167',
	            cell: '(254)-374-4020',
	            SSN: '802-20-5539',
	            picture: {
	                large: 'https://randomuser.me/api/portraits/men/78.jpg',
	                medium: 'https://randomuser.me/api/portraits/med/men/78.jpg',
	                thumbnail: 'https://randomuser.me/api/portraits/thumb/men/78.jpg'
	            }
	        }
	    }, {
	        user: {
	            gender: 'female',
	            name: {
	                title: 'mrs',
	                first: 'julie',
	                last: 'chambers'
	            },
	            location: {
	                street: '9684 miller ave',
	                city: 'mckinney',
	                state: 'maine',
	                zip: 25116
	            },
	            email: 'julie.chambers@example.com',
	            username: 'tinykoala645',
	            password: 'mister',
	            salt: 'cNtOVzVU',
	            md5: '86bff201b1260f84854fbdf2ac9a3f95',
	            sha1: '50320a6dd290eb53cad8f3d1b6290a5d2a3bd8d0',
	            sha256: '5e971a7669fbc3b8ed93ba9953c1926a8f64baaec7dcd910b397a8d6467c9c0b',
	            registered: 1409772433,
	            dob: 106224710,
	            phone: '(859)-957-3480',
	            cell: '(773)-050-6290',
	            SSN: '312-24-2541',
	            picture: {
	                large: 'https://randomuser.me/api/portraits/women/19.jpg',
	                medium: 'https://randomuser.me/api/portraits/med/women/19.jpg',
	                thumbnail: 'https://randomuser.me/api/portraits/thumb/women/19.jpg'
	            }
	        }
	    }, {
	        user: {
	            gender: 'female',
	            name: {
	                title: 'mrs',
	                first: 'beatrice',
	                last: 'moore'
	            },
	            location: {
	                street: '9458 spring hill rd',
	                city: 'elgin',
	                state: 'new york',
	                zip: 56250
	            },
	            email: 'beatrice.moore@example.com',
	            username: 'organicladybug890',
	            password: 'miriam',
	            salt: 'nCcRqkgH',
	            md5: '6a76a5c712773b714608e3c29dac63cf',
	            sha1: 'bde32fbf7ad3653e96b718a55530158a7552b63e',
	            sha256: '5ea73a2782e509b406a8db7c1e8672bd630990840bfa2a603601a8d13fbe0c37',
	            registered: 1138531824,
	            dob: 390916986,
	            phone: '(286)-723-0078',
	            cell: '(806)-602-3781',
	            SSN: '184-59-1027',
	            picture: {
	                large: 'https://randomuser.me/api/portraits/women/88.jpg',
	                medium: 'https://randomuser.me/api/portraits/med/women/88.jpg',
	                thumbnail: 'https://randomuser.me/api/portraits/thumb/women/88.jpg'
	            }
	        }
	    }, {
	        user: {
	            gender: 'male',
	            name: {
	                title: 'mr',
	                first: 'rick',
	                last: 'peters'
	            },
	            location: {
	                street: '9093 dogwood ave',
	                city: 'cary',
	                state: 'colorado',
	                zip: 47246
	            },
	            email: 'rick.peters@example.com',
	            username: 'smallsnake414',
	            password: 'meatball',
	            salt: 'OBhVfAz5',
	            md5: '3376bed16d4b4dc89c2d8d262d0a5702',
	            sha1: 'fc79f2fc8b5a624cde598f5732d6fa1c91862cac',
	            sha256: 'abeaf6c4d673800b05f59a98fe4714a03c2a299ce09050263be38e9e6c393e2f',
	            registered: 1244605317,
	            dob: 171433084,
	            phone: '(335)-469-8407',
	            cell: '(925)-795-2954',
	            SSN: '172-59-3341',
	            picture: {
	                large: 'https://randomuser.me/api/portraits/men/85.jpg',
	                medium: 'https://randomuser.me/api/portraits/med/men/85.jpg',
	                thumbnail: 'https://randomuser.me/api/portraits/thumb/men/85.jpg'
	            }
	        }
	    }, {
	        user: {
	            gender: 'male',
	            name: {
	                title: 'mr',
	                first: 'carl',
	                last: 'perez'
	            },
	            location: {
	                street: '2913 country club rd',
	                city: 'inglewood',
	                state: 'maine',
	                zip: 52664
	            },
	            email: 'carl.perez@example.com',
	            username: 'greenelephant967',
	            password: 'water1',
	            salt: '2P84PTaV',
	            md5: '693128971ee2972d470a85db4e4ccd8b',
	            sha1: '448fa127cf60e6ccd76a499ddb7f27eab3526404',
	            sha256: '9968d4d4933e2577a6cbfcc72cc65544ff2025df19fb3395f232ae90bf2f0e52',
	            registered: 1099480179,
	            dob: 806066851,
	            phone: '(523)-020-1819',
	            cell: '(096)-278-1106',
	            SSN: '057-67-6144',
	            picture: {
	                large: 'https://randomuser.me/api/portraits/men/92.jpg',
	                medium: 'https://randomuser.me/api/portraits/med/men/92.jpg',
	                thumbnail: 'https://randomuser.me/api/portraits/thumb/men/92.jpg'
	            }
	        }
	    }, {
	        user: {
	            gender: 'female',
	            name: {
	                title: 'mrs',
	                first: 'claire',
	                last: 'alexander'
	            },
	            location: {
	                street: '4447 green rd',
	                city: 'vancouver',
	                state: 'illinois',
	                zip: 11380
	            },
	            email: 'claire.alexander@example.com',
	            username: 'tinymouse663',
	            password: 'rosario',
	            salt: 'QxlI45kK',
	            md5: '35989427f9d8ed1707a0116fefdf3f77',
	            sha1: '3e81c8f24b8dd364cf388353e4026c95a82efb16',
	            sha256: '30ccc69aa60fcbe219be94ca251456918ca7657a0fbaecfc6ef21f6dff6bc70a',
	            registered: 1062833597,
	            dob: 1234475675,
	            phone: '(234)-808-7490',
	            cell: '(213)-217-0342',
	            SSN: '396-51-4321',
	            picture: {
	                large: 'https://randomuser.me/api/portraits/women/95.jpg',
	                medium: 'https://randomuser.me/api/portraits/med/women/95.jpg',
	                thumbnail: 'https://randomuser.me/api/portraits/thumb/women/95.jpg'
	            }
	        }
	    }, {
	        user: {
	            gender: 'female',
	            name: {
	                title: 'ms',
	                first: 'georgia',
	                last: 'wade'
	            },
	            location: {
	                street: '3715 fincher rd',
	                city: 'lubbock',
	                state: 'mississippi',
	                zip: 39603
	            },
	            email: 'georgia.wade@example.com',
	            username: 'smallgorilla447',
	            password: 'pepper',
	            salt: 'njknKXaR',
	            md5: '9e8ebe84a39238ecbfdda0a519fdf4a4',
	            sha1: '2bee43386c0b82edcda64526c209c661f58b45d4',
	            sha256: '035440b81690f1e04fe36d19f89f388688dddf2d1dc39494e5788350e1a0bce7',
	            registered: 1145505196,
	            dob: 665972869,
	            phone: '(793)-848-8641',
	            cell: '(243)-734-6292',
	            SSN: '579-67-6440',
	            picture: {
	                large: 'https://randomuser.me/api/portraits/women/93.jpg',
	                medium: 'https://randomuser.me/api/portraits/med/women/93.jpg',
	                thumbnail: 'https://randomuser.me/api/portraits/thumb/women/93.jpg'
	            }
	        }
	    }, {
	        user: {
	            gender: 'female',
	            name: {
	                title: 'ms',
	                first: 'andrea',
	                last: 'harris'
	            },
	            location: {
	                street: '6599 valwood pkwy',
	                city: 'tulsa',
	                state: 'new jersey',
	                zip: 90324
	            },
	            email: 'andrea.harris@example.com',
	            username: 'silverladybug816',
	            password: 'goforit',
	            salt: 'KLtDf8m8',
	            md5: 'e1b02150987f7f272dcec4f0ff410ef6',
	            sha1: 'bd46e0b555b234edc0e48117f32dd7ad96dbace3',
	            sha256: '989d70c423514529bf9a43b6940970aa18ff96667ac39506747addcdab09d108',
	            registered: 1403436298,
	            dob: 708143727,
	            phone: '(548)-355-7474',
	            cell: '(000)-175-7357',
	            SSN: '862-64-3564',
	            picture: {
	                large: 'https://randomuser.me/api/portraits/women/46.jpg',
	                medium: 'https://randomuser.me/api/portraits/med/women/46.jpg',
	                thumbnail: 'https://randomuser.me/api/portraits/thumb/women/46.jpg'
	            }
	        }
	    }, {
	        user: {
	            gender: 'male',
	            name: {
	                title: 'mr',
	                first: 'tom',
	                last: 'george'
	            },
	            location: {
	                street: '6287 plum st',
	                city: 'lancaster',
	                state: 'texas',
	                zip: 60454
	            },
	            email: 'tom.george@example.com',
	            username: 'organicladybug618',
	            password: 'queens',
	            salt: 'WIy2mxVZ',
	            md5: '586d63f1ccea55972924b0ebdb52b9f2',
	            sha1: '9295e7ffe22bac95d95488fd292a47cbde70d49c',
	            sha256: '08d45b26137b8e5392faac73e8c0580ab9795cf8b1f1ec043f2ac903b215e11f',
	            registered: 1141941950,
	            dob: 939638846,
	            phone: '(545)-934-9766',
	            cell: '(695)-612-5377',
	            SSN: '578-24-2255',
	            picture: {
	                large: 'https://randomuser.me/api/portraits/men/35.jpg',
	                medium: 'https://randomuser.me/api/portraits/med/men/35.jpg',
	                thumbnail: 'https://randomuser.me/api/portraits/thumb/men/35.jpg'
	            }
	        }
	    }, {
	        user: {
	            gender: 'male',
	            name: {
	                title: 'mr',
	                first: 'freddie',
	                last: 'morales'
	            },
	            location: {
	                street: '4219 frances ct',
	                city: 'seagoville',
	                state: 'nebraska',
	                zip: 36703
	            },
	            email: 'freddie.morales@example.com',
	            username: 'greencat442',
	            password: 'word',
	            salt: 'dUeK2q2d',
	            md5: 'a3b84b4f9ccc31f07074ea39e98b5c73',
	            sha1: 'a86f5165d933d0561d9190b1ed88cb03eb932f16',
	            sha256: '94758427b6a965edae305f940e02551e08a0f06067738732baff69fcabae7649',
	            registered: 983529466,
	            dob: 974109015,
	            phone: '(031)-466-7973',
	            cell: '(381)-296-6725',
	            SSN: '570-83-3368',
	            picture: {
	                large: 'https://randomuser.me/api/portraits/men/23.jpg',
	                medium: 'https://randomuser.me/api/portraits/med/men/23.jpg',
	                thumbnail: 'https://randomuser.me/api/portraits/thumb/men/23.jpg'
	            }
	        }
	    }, {
	        user: {
	            gender: 'male',
	            name: {
	                title: 'mr',
	                first: 'luke',
	                last: 'gardner'
	            },
	            location: {
	                street: '3324 taylor st',
	                city: 'newport news',
	                state: 'hawaii',
	                zip: 54955
	            },
	            email: 'luke.gardner@example.com',
	            username: 'crazytiger327',
	            password: 'racers',
	            salt: 'FtOtgPi0',
	            md5: '3eef8ed8c360ce3f8e6b8ac24aebfc9b',
	            sha1: '9295802ad8d6073208097f808f046145dd3bb57f',
	            sha256: '73e5634e883e3a6c7dd4b28a5f2b485ef83b8e9f216b0a6af57e7496afb9c39e',
	            registered: 1288417064,
	            dob: 979418132,
	            phone: '(388)-378-7984',
	            cell: '(086)-107-8962',
	            SSN: '443-06-2893',
	            picture: {
	                large: 'https://randomuser.me/api/portraits/men/79.jpg',
	                medium: 'https://randomuser.me/api/portraits/med/men/79.jpg',
	                thumbnail: 'https://randomuser.me/api/portraits/thumb/men/79.jpg'
	            }
	        }
	    }, {
	        user: {
	            gender: 'female',
	            name: {
	                title: 'ms',
	                first: 'brandie',
	                last: 'sims'
	            },
	            location: {
	                street: '8618 walnut hill ln',
	                city: 'anaheim',
	                state: 'new hampshire',
	                zip: 44279
	            },
	            email: 'brandie.sims@example.com',
	            username: 'purplewolf520',
	            password: 'choochoo',
	            salt: 'Ly4mXsqb',
	            md5: '86b76abde4f5d6e44c1b3a2c30354bd1',
	            sha1: '4920beaeb86a456bcc726f1487b3f6533cf04d54',
	            sha256: 'e78c9c8d46158d7cfda3d5baa71752b252061c4f0344ce1dd04e23fa93b9636a',
	            registered: 1350525067,
	            dob: 31400990,
	            phone: '(667)-015-0908',
	            cell: '(529)-358-3674',
	            SSN: '300-29-9205',
	            picture: {
	                large: 'https://randomuser.me/api/portraits/women/0.jpg',
	                medium: 'https://randomuser.me/api/portraits/med/women/0.jpg',
	                thumbnail: 'https://randomuser.me/api/portraits/thumb/women/0.jpg'
	            }
	        }
	    }, {
	        user: {
	            gender: 'female',
	            name: {
	                title: 'ms',
	                first: 'harper',
	                last: 'martinez'
	            },
	            location: {
	                street: '8049 preston rd',
	                city: 'cary',
	                state: 'arkansas',
	                zip: 18124
	            },
	            email: 'harper.martinez@example.com',
	            username: 'whitegoose949',
	            password: 'smokie',
	            salt: 'Ncroxbe3',
	            md5: 'c66d77bcbd0a477c8ffbbadda4d8893e',
	            sha1: '9d5456fdf721a341c64727ae42e316a7388f862d',
	            sha256: 'da91ccaffc6e1d9199593e89365632b69e566230b0ebfead27409ba8bb679d1a',
	            registered: 1318848198,
	            dob: 864745543,
	            phone: '(187)-292-8311',
	            cell: '(857)-076-7516',
	            SSN: '348-11-1777',
	            picture: {
	                large: 'https://randomuser.me/api/portraits/women/13.jpg',
	                medium: 'https://randomuser.me/api/portraits/med/women/13.jpg',
	                thumbnail: 'https://randomuser.me/api/portraits/thumb/women/13.jpg'
	            }
	        }
	    }, {
	        user: {
	            gender: 'male',
	            name: {
	                title: 'mr',
	                first: 'mark',
	                last: 'harper'
	            },
	            location: {
	                street: '1290 e sandy lake rd',
	                city: 'st. petersburg',
	                state: 'indiana',
	                zip: 54137
	            },
	            email: 'mark.harper@example.com',
	            username: 'ticklishfrog298',
	            password: 'clemente',
	            salt: 'mwDK68w0',
	            md5: 'af5d94bf90444cd4bb9c97297e7c20a6',
	            sha1: '8a495cd5a42051b1ff587155283bad1f6e0ef434',
	            sha256: '7c0066347eb22e0f249870070b09032f8350c371606f299a5df29d80fde8f138',
	            registered: 1025296634,
	            dob: 40651378,
	            phone: '(913)-619-1048',
	            cell: '(078)-353-9081',
	            SSN: '316-83-4127',
	            picture: {
	                large: 'https://randomuser.me/api/portraits/men/90.jpg',
	                medium: 'https://randomuser.me/api/portraits/med/men/90.jpg',
	                thumbnail: 'https://randomuser.me/api/portraits/thumb/men/90.jpg'
	            }
	        }
	    }, {
	        user: {
	            gender: 'female',
	            name: {
	                title: 'miss',
	                first: 'aubree',
	                last: 'austin'
	            },
	            location: {
	                street: '1988 walnut hill ln',
	                city: 'san jose',
	                state: 'alaska',
	                zip: 57805
	            },
	            email: 'aubree.austin@example.com',
	            username: 'bigbutterfly549',
	            password: 'jade',
	            salt: 'Jx81WDzL',
	            md5: '36ec194097cb427f31085583106797c6',
	            sha1: 'c3245384353ca4267d11ae68c2f66c3bd5180278',
	            sha256: '3bb5d4b83d8f19adf7f5b438614719bd500f51e7aaf347cc1cb3e29bf033c514',
	            registered: 924964083,
	            dob: 166766658,
	            phone: '(144)-731-3082',
	            cell: '(517)-717-7069',
	            SSN: '732-45-1907',
	            picture: {
	                large: 'https://randomuser.me/api/portraits/women/25.jpg',
	                medium: 'https://randomuser.me/api/portraits/med/women/25.jpg',
	                thumbnail: 'https://randomuser.me/api/portraits/thumb/women/25.jpg'
	            }
	        }
	    }, {
	        user: {
	            gender: 'male',
	            name: {
	                title: 'mr',
	                first: 'flenn',
	                last: 'duncan'
	            },
	            location: {
	                street: '1428 daisy dr',
	                city: 'moreno valley',
	                state: 'alaska',
	                zip: 44681
	            },
	            email: 'flenn.duncan@example.com',
	            username: 'silverlion895',
	            password: 'johnson1',
	            salt: 'rhsDEly1',
	            md5: 'bac366ee88b585602b797aecbfbebbb7',
	            sha1: '946a74dbd36434f4a628a628bf5142b267637191',
	            sha256: '97b4d0d4b769d4b1255ca394f80013a9542431424a00e7424c55ffd001e2e7a6',
	            registered: 1229687955,
	            dob: 1424166793,
	            phone: '(367)-262-9091',
	            cell: '(219)-730-8130',
	            SSN: '783-69-5083',
	            picture: {
	                large: 'https://randomuser.me/api/portraits/men/28.jpg',
	                medium: 'https://randomuser.me/api/portraits/med/men/28.jpg',
	                thumbnail: 'https://randomuser.me/api/portraits/thumb/men/28.jpg'
	            }
	        }
	    }, {
	        user: {
	            gender: 'male',
	            name: {
	                title: 'mr',
	                first: 'mario',
	                last: 'burke'
	            },
	            location: {
	                street: '5878 w 6th st',
	                city: 'athens',
	                state: 'vermont',
	                zip: 37779
	            },
	            email: 'mario.burke@example.com',
	            username: 'greenpanda859',
	            password: 'aaaaaa',
	            salt: '2lmLAiWW',
	            md5: 'a9c4d8f33dd8c3ff4d4b201301ee32e9',
	            sha1: 'a4940c664c87bd098095c18dc6ec4e9cf8f8bbb5',
	            sha256: '7cc29f9b65534a7930b2c035ca6bb6d0c04d7ee297e055dc150e804daf7b636d',
	            registered: 1033520247,
	            dob: 673535739,
	            phone: '(292)-710-7264',
	            cell: '(246)-490-7302',
	            SSN: '731-03-1412',
	            picture: {
	                large: 'https://randomuser.me/api/portraits/men/60.jpg',
	                medium: 'https://randomuser.me/api/portraits/med/men/60.jpg',
	                thumbnail: 'https://randomuser.me/api/portraits/thumb/men/60.jpg'
	            }
	        }
	    }, {
	        user: {
	            gender: 'female',
	            name: {
	                title: 'mrs',
	                first: 'nicole',
	                last: 'simpson'
	            },
	            location: {
	                street: '5565 westheimer rd',
	                city: 'tempe',
	                state: 'louisiana',
	                zip: 32783
	            },
	            email: 'nicole.simpson@example.com',
	            username: 'lazyrabbit747',
	            password: 'alfredo',
	            salt: 'SmE6EMa0',
	            md5: '98e19d12735496e071ae5eed5c538d84',
	            sha1: '8c206d18759d1936a27d298fbca63bcbc19fac9f',
	            sha256: '18a5cacbd8e087a84a5061442a1eb615fee7e08007813d4c49866fbff4b11e15',
	            registered: 1022213973,
	            dob: 56990681,
	            phone: '(451)-661-4751',
	            cell: '(830)-837-4304',
	            SSN: '074-34-0301',
	            picture: {
	                large: 'https://randomuser.me/api/portraits/women/54.jpg',
	                medium: 'https://randomuser.me/api/portraits/med/women/54.jpg',
	                thumbnail: 'https://randomuser.me/api/portraits/thumb/women/54.jpg'
	            }
	        }
	    }, {
	        user: {
	            gender: 'male',
	            name: {
	                title: 'mr',
	                first: 'micheal',
	                last: 'payne'
	            },
	            location: {
	                street: '1473 prospect rd',
	                city: 'chesapeake',
	                state: 'iowa',
	                zip: 46193
	            },
	            email: 'micheal.payne@example.com',
	            username: 'whitebear163',
	            password: 'dammit',
	            salt: 'nF9YoNfx',
	            md5: '03f36b933f21ad601ec59a7d3aa30775',
	            sha1: 'e9b7cf95b8dce2c027110a090953924563011d0c',
	            sha256: '00806664b227647dd1feb7006c987581460286e63d0edac1f799df7807a85ccb',
	            registered: 1024268792,
	            dob: 1436444776,
	            phone: '(063)-494-6749',
	            cell: '(504)-565-0639',
	            SSN: '956-08-7670',
	            picture: {
	                large: 'https://randomuser.me/api/portraits/men/20.jpg',
	                medium: 'https://randomuser.me/api/portraits/med/men/20.jpg',
	                thumbnail: 'https://randomuser.me/api/portraits/thumb/men/20.jpg'
	            }
	        }
	    }, {
	        user: {
	            gender: 'male',
	            name: {
	                title: 'mr',
	                first: 'bobby',
	                last: 'andrews'
	            },
	            location: {
	                street: '2692 w pecan st',
	                city: 'escondido',
	                state: 'north carolina',
	                zip: 95427
	            },
	            email: 'bobby.andrews@example.com',
	            username: 'tinybird231',
	            password: 'camero',
	            salt: 'rWHda8RJ',
	            md5: '307646f68a4d6f22f89e3d269f01594c',
	            sha1: '442b9277c6bcf175e0b467221d52273165aad201',
	            sha256: '2c3c0d3c48d0186044da1357c5fff553e688810907fb0a9382084051d65e6b6a',
	            registered: 1026106549,
	            dob: 910221213,
	            phone: '(062)-579-1857',
	            cell: '(357)-831-2086',
	            SSN: '505-12-1001',
	            picture: {
	                large: 'https://randomuser.me/api/portraits/men/86.jpg',
	                medium: 'https://randomuser.me/api/portraits/med/men/86.jpg',
	                thumbnail: 'https://randomuser.me/api/portraits/thumb/men/86.jpg'
	            }
	        }
	    }, {
	        user: {
	            gender: 'female',
	            name: {
	                title: 'ms',
	                first: 'joy',
	                last: 'dixon'
	            },
	            location: {
	                street: '6445 rolling green rd',
	                city: 'altoona',
	                state: 'arizona',
	                zip: 66028
	            },
	            email: 'joy.dixon@example.com',
	            username: 'smalldog128',
	            password: 'maker',
	            salt: '6cGE14wd',
	            md5: 'c8600cd0babf6fa9b254a6e16b7ef4c6',
	            sha1: '6699f61224273f13c79e5fb1effcd655d62668de',
	            sha256: '5752dadeda34715ecc65999dc6b12472e6662acf94ddcc206c747a326f35af77',
	            registered: 1307186849,
	            dob: 773802277,
	            phone: '(224)-839-7471',
	            cell: '(073)-261-1584',
	            SSN: '124-33-3729',
	            picture: {
	                large: 'https://randomuser.me/api/portraits/women/55.jpg',
	                medium: 'https://randomuser.me/api/portraits/med/women/55.jpg',
	                thumbnail: 'https://randomuser.me/api/portraits/thumb/women/55.jpg'
	            }
	        }
	    }, {
	        user: {
	            gender: 'male',
	            name: {
	                title: 'mr',
	                first: 'jose',
	                last: 'white'
	            },
	            location: {
	                street: '2776 e little york rd',
	                city: 'ontario',
	                state: 'kansas',
	                zip: 97466
	            },
	            email: 'jose.white@example.com',
	            username: 'crazyostrich494',
	            password: 'johannes',
	            salt: 'Jgq52Plp',
	            md5: 'fac7e37776b1411142e49e31ab76aa3c',
	            sha1: 'c477040c30fbbc095b04d659c75200c60b92f653',
	            sha256: '3660abf896dc2cfe1ee83450266ac0ec8ca95d005c3e13a5e0f285cb01e349bb',
	            registered: 1108788393,
	            dob: 820843447,
	            phone: '(665)-087-0793',
	            cell: '(775)-042-5284',
	            SSN: '910-29-4904',
	            picture: {
	                large: 'https://randomuser.me/api/portraits/men/92.jpg',
	                medium: 'https://randomuser.me/api/portraits/med/men/92.jpg',
	                thumbnail: 'https://randomuser.me/api/portraits/thumb/men/92.jpg'
	            }
	        }
	    }]
	};
	var allMessages = 'How promotion excellent curiosity yet attempted happiness. Gay prosperous impression had conviction. For every delay death ask style. Me mean able my by in they. Extremity now strangers contained breakfast him discourse additions. Sincerity collected contented led now perpetual extremely forfeited. Living valley had silent eat merits esteem bed. In last an or went wise as left. Visited civilly am demesne so colonel he calling. So unreserved do interested increasing sentiments. Vanity day giving points within six not law. Few impression difficulty his use has comparison decisively. Next his only boy meet the fat rose when. Do repair at we misery wanted remove remain income. Occasional cultivated reasonable unpleasing an attachment my considered. Having ask and coming object seemed put did admire figure. Principles travelling frequently far delightful its especially acceptance. Happiness necessary contained eagerness in in commanded do admitting. Favourable continuing difficulty had her solicitude far. Nor doubt off widow all death aware offer. We will up able in both do sing. Day handsome addition horrible sensible goodness two contempt. Evening for married his account removal. Estimable me disposing of be moonlight cordially curiosity. Delay rapid joy share allow age manor six. Went why far saw many knew. Exquisite excellent son gentleman acuteness her. Do is voice total power mr ye might round still. In it except to so temper mutual tastes mother. Interested cultivated its continuing now yet are. Out interested acceptance our partiality affronting unpleasant why add. Esteem garden men yet shy course. Consulted up my tolerably sometimes perpetual oh. Expression acceptance imprudence particular had eat unsatiable. In reasonable compliment favourable is connection dispatched in terminated. Do esteem object we called father excuse remove. So dear real on like more it. Laughing for two families addition expenses surprise the. If sincerity he to curiosity arranging. Learn taken terms be as. Scarcely mrs produced too removing new old. An sincerity so extremity he additions. Her yet there truth merit. Mrs all projecting favourable now unpleasing. Son law garden chatty temper. Oh children provided to mr elegance marriage strongly. Off can admiration prosperous now devonshire diminution law. Her extensive perceived may any sincerity extremity. Indeed add rather may pretty see. Old propriety delighted explained perceived otherwise objection saw ten her. Doubt merit sir the right these alone keeps. By sometimes intention smallness he northward. Consisted we otherwise arranging commanded discovery it explained. Does cold even song like two yet been. Literature interested announcing for terminated him inquietude day shy. Himself he fertile chicken perhaps waiting if highest no it. Continued promotion has consulted fat improving not way. Agreed joy vanity regret met may ladies oppose who. Mile fail as left as hard eyes. Meet made call in mean four year it to. Prospect so branched wondered sensible of up. For gay consisted resolving pronounce sportsman saw discovery not. Northward or household as conveying we earnestly believing. No in up contrasted discretion inhabiting excellence. Entreaties we collecting unpleasant at everything conviction. Seen you eyes son show. Far two unaffected one alteration apartments celebrated but middletons interested. Described deficient applauded consisted my me do. Passed edward two talent effect seemed engage six. On ye great do child sorry lived. Proceed cottage far letters ashamed get clothes day. Stairs regret at if matter to. On as needed almost at basket remain. By improved sensible servants children striking in surprise.';
	var messages = allMessages.split('. ');
	var updates = [];
	
	db.threads.forEach(function (thread) {
	    thread.messages = getRandomMessages();
	    thread.id = thread.user.username;
	});
	
	var owner = {
	    gender: "female",
	    name: {
	        title: "miss",
	        first: "ana",
	        last: "garnier"
	    },
	    location: {
	        street: "3206 boulevard de balmont",
	        city: "vitry-sur-seine",
	        state: "alpes-maritimes",
	        zip: 98343
	    },
	    email: "ana.garnier@example.com",
	    username: "reddog185",
	    password: "secure",
	    salt: "jwNyQ4TG",
	    md5: "e2f4b9098b0c4f6b0908e66e590f3b15",
	    sha1: "b9f029fd3e890b393013b271804ea176ff3c9dae",
	    sha256: "72532e6bea29be4408f448d9eca5781d44372e15e219aa33af267590945a67f1",
	    registered: 1362279457,
	    dob: 1271022321,
	    phone: "04-75-09-99-12",
	    cell: "06-99-42-16-31",
	    INSEE: "2100406109776 32",
	    picture: {
	        large: "https://randomuser.me/api/portraits/women/82.jpg",
	        medium: "https://randomuser.me/api/portraits/med/women/82.jpg",
	        thumbnail: "https://randomuser.me/api/portraits/thumb/women/82.jpg"
	    }
	};
	
	setInterval(randomUpdate, 2000);
	
	function randomUpdate() {
	    var threadsLength = db.threads.length;
	    var randomThread = db.threads[Math.floor(Math.random() * threadsLength)];
	
	    randomThread.messages.push(getRandomMessage());
	    updates.push({
	        thread: randomThread
	    });
	}
	
	function getRandomMessage() {
	    return messages[Math.floor(Math.random() * messages.length)];
	}
	
	function getRandomMessages() {
	    var length = Math.floor(Math.random() * 10 + 10);
	
	    return new Array(length).join().split('').map(function () {
	        return getRandomMessage();
	    });
	}
	
	exports['default'] = {
	    db: db,
	    updates: updates,
	    owner: owner
	};
	module.exports = exports['default'];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _UserStereotype = __webpack_require__(12);
	
	var _UserStereotype2 = _interopRequireDefault(_UserStereotype);
	
	var ThreadStereotype = function ThreadStereotype(thread) {
	    _classCallCheck(this, ThreadStereotype);
	
	    this.id = thread.id;
	    this.user = new _UserStereotype2['default'](thread.user);
	    this.messages = thread.messages;
	    this.active = false;
	    this.unread = false;
	};
	
	exports['default'] = ThreadStereotype;
	module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var UserStereotype = (function () {
	    function UserStereotype(user) {
	        _classCallCheck(this, UserStereotype);
	
	        this.gender = user.gender;
	        this.name = user.name;
	        this.picture = user.picture;
	    }
	
	    _createClass(UserStereotype, [{
	        key: 'fullname',
	        get: function get() {
	            return capitalize(this.name.first) + ' ' + capitalize(this.name.last);
	        }
	    }]);
	
	    return UserStereotype;
	})();
	
	exports['default'] = UserStereotype;
	
	function capitalize(str) {
	    return str[0].toUpperCase() + str.slice(1);
	}
	module.exports = exports['default'];

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _politburo = __webpack_require__(6);
	
	var _MenuRep = __webpack_require__(14);
	
	var _MenuRep2 = _interopRequireDefault(_MenuRep);
	
	var _ThreadsPopoverThreadsPopoverCulture = __webpack_require__(15);
	
	var _ThreadsPopoverThreadsPopoverCulture2 = _interopRequireDefault(_ThreadsPopoverThreadsPopoverCulture);
	
	__webpack_require__(27);
	
	var MenuCulture = (function (_Culture) {
	    _inherits(MenuCulture, _Culture);
	
	    function MenuCulture() {
	        var _this = this;
	
	        _classCallCheck(this, MenuCulture);
	
	        _get(Object.getPrototypeOf(MenuCulture.prototype), 'constructor', this).call(this);
	
	        this.rep = new _MenuRep2['default']();
	        this.popover = new _ThreadsPopoverThreadsPopoverCulture2['default']();
	
	        this.rep.on(this.rep.EventType.UPDATE, function () {
	            return _this.onUpdate();
	        });
	    }
	
	    _createClass(MenuCulture, [{
	        key: 'onUpdate',
	        value: function onUpdate() {
	            this.$('button').innerHTML = this.templates_button();
	        }
	    }, {
	        key: 'onClickButton',
	        value: function onClickButton() {
	            this.popover.toggle();
	        }
	    }, {
	        key: 'templates_base',
	        value: function templates_base() {
	            return '<menu id="' + this.id + '">\n            <h1>Chat</h1>\n            <button>' + this.templates_button() + '</button>\n            ' + this.popover + '\n            </menu>';
	        }
	    }, {
	        key: 'templates_button',
	        value: function templates_button() {
	            var count = this.rep.unreadCount || '';
	
	            if (count) count = '(' + count + ')';
	
	            return '<span>Threads ' + count + '</span>';
	        }
	    }, {
	        key: 'events',
	        get: function get() {
	            return {
	                'click': {
	                    'button': this.onClickButton
	                }
	            };
	        }
	    }]);
	
	    return MenuCulture;
	})(_politburo.Culture);
	
	exports['default'] = MenuCulture;
	module.exports = exports['default'];

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _politburo = __webpack_require__(6);
	
	var _ChatRegime = __webpack_require__(8);
	
	var _ChatRegime2 = _interopRequireDefault(_ChatRegime);
	
	/**
	 *
	 * @constructor
	 * @extends {Representative}
	 */
	
	var MenuRep = (function (_Representative) {
	    _inherits(MenuRep, _Representative);
	
	    function MenuRep() {
	        var _this = this;
	
	        _classCallCheck(this, MenuRep);
	
	        _get(Object.getPrototypeOf(MenuRep.prototype), 'constructor', this).call(this);
	
	        this.unreadCount = _ChatRegime2['default'].getUnreadCount();
	
	        _ChatRegime2['default'].on(_ChatRegime2['default'].EventType.NEW_MESSAGE, function () {
	            return _this.onUpdate();
	        });
	        _ChatRegime2['default'].on(_ChatRegime2['default'].EventType.SET_ACTIVE_THREAD, function () {
	            return _this.onUpdate();
	        });
	        _ChatRegime2['default'].on(_ChatRegime2['default'].EventType.SET_ACTIVE_CHAT_BOX, function () {
	            return _this.onUpdate();
	        });
	    }
	
	    _createClass(MenuRep, [{
	        key: 'onUpdate',
	        value: function onUpdate() {
	            this.unreadCount = _ChatRegime2['default'].getUnreadCount();
	
	            this.emit(this.EventType.UPDATE);
	        }
	    }, {
	        key: 'EventType',
	        get: function get() {
	            return {
	                UPDATE: 'update'
	            };
	        }
	    }]);
	
	    return MenuRep;
	})(_politburo.Representative);
	
	exports['default'] = MenuRep;
	module.exports = exports['default'];

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _politburo = __webpack_require__(6);
	
	var _ThreadsPopoverRep = __webpack_require__(16);
	
	var _ThreadsPopoverRep2 = _interopRequireDefault(_ThreadsPopoverRep);
	
	var _ThreadListThreadListCulture = __webpack_require__(17);
	
	var _ThreadListThreadListCulture2 = _interopRequireDefault(_ThreadListThreadListCulture);
	
	__webpack_require__(25);
	
	var ThreadsPopoverCulture = (function (_Culture) {
	    _inherits(ThreadsPopoverCulture, _Culture);
	
	    function ThreadsPopoverCulture() {
	        _classCallCheck(this, ThreadsPopoverCulture);
	
	        _get(Object.getPrototypeOf(ThreadsPopoverCulture.prototype), 'constructor', this).call(this);
	
	        this.rep = new _ThreadsPopoverRep2['default']();
	
	        this.threadList = new _ThreadListThreadListCulture2['default']();
	    }
	
	    _createClass(ThreadsPopoverCulture, [{
	        key: 'toggle',
	        value: function toggle() {
	            this.rep.toggle();
	            this.el.classList.toggle('visible', this.rep.visible);
	        }
	    }, {
	        key: 'onClickThreadPreview',
	        value: function onClickThreadPreview(e, culture) {
	            this.rep.addChatBox(culture.thread);
	
	            return false;
	        }
	    }, {
	        key: 'templates_base',
	        value: function templates_base() {
	            var visible = this.rep.visible ? 'visible' : '';
	
	            return '<threads-popover id="' + this.id + '" class="' + visible + '">\n                ' + this.threadList + '\n            </threads-popover>';
	        }
	    }, {
	        key: 'events',
	        get: function get() {
	            return {
	                'click': {
	                    'thread-preview': this.onClickThreadPreview
	                }
	            };
	        }
	    }]);
	
	    return ThreadsPopoverCulture;
	})(_politburo.Culture);
	
	exports['default'] = ThreadsPopoverCulture;
	module.exports = exports['default'];

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _politburo = __webpack_require__(6);
	
	var _ThreadStereotype = __webpack_require__(11);
	
	var _ThreadStereotype2 = _interopRequireDefault(_ThreadStereotype);
	
	var _ChatRegime = __webpack_require__(8);
	
	var _ChatRegime2 = _interopRequireDefault(_ChatRegime);
	
	var ThreadsPopoverRep = (function (_Representative) {
	    _inherits(ThreadsPopoverRep, _Representative);
	
	    function ThreadsPopoverRep() {
	        _classCallCheck(this, ThreadsPopoverRep);
	
	        _get(Object.getPrototypeOf(ThreadsPopoverRep.prototype), 'constructor', this).call(this);
	
	        this.visible = false;
	    }
	
	    _createClass(ThreadsPopoverRep, [{
	        key: 'toggle',
	        value: function toggle() {
	            this.visible = !this.visible;
	        }
	    }, {
	        key: 'addChatBox',
	        value: function addChatBox(thread) {
	            _ChatRegime2['default'].addChatBox(thread);
	        }
	    }, {
	        key: 'EventType',
	        get: function get() {
	            return {
	                INITIAL_DATA: 'initial data',
	                UPDATE: 'update'
	            };
	        }
	    }]);
	
	    return ThreadsPopoverRep;
	})(_politburo.Representative);
	
	exports['default'] = ThreadsPopoverRep;
	module.exports = exports['default'];

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _politburo = __webpack_require__(6);
	
	var _ThreadListRep = __webpack_require__(18);
	
	var _ThreadListRep2 = _interopRequireDefault(_ThreadListRep);
	
	var _ThreadPreviewThreadPreviewCulture = __webpack_require__(19);
	
	var _ThreadPreviewThreadPreviewCulture2 = _interopRequireDefault(_ThreadPreviewThreadPreviewCulture);
	
	__webpack_require__(23);
	
	var ThreadListCulture = (function (_Culture) {
	    _inherits(ThreadListCulture, _Culture);
	
	    function ThreadListCulture() {
	        var _this = this;
	
	        _classCallCheck(this, ThreadListCulture);
	
	        _get(Object.getPrototypeOf(ThreadListCulture.prototype), 'constructor', this).call(this);
	
	        this.rep = new _ThreadListRep2['default']();
	        this.threadPreviewsById = {};
	
	        this.rep.on(this.rep.EventType.INITIAL_DATA, function () {
	            return _this.onInit();
	        });
	        this.rep.on(this.rep.EventType.NEW_MESSAGE, function (data) {
	            return _this.onNewMessage(data);
	        });
	    }
	
	    _createClass(ThreadListCulture, [{
	        key: 'onInit',
	        value: function onInit() {
	            var _this2 = this;
	
	            this.threadPreviewsById = {};
	            this.threadPreviews = this.rep.threads.map(function (thread) {
	                var culture = new _ThreadPreviewThreadPreviewCulture2['default'](thread);
	                _this2.threadPreviewsById[thread.id] = culture;
	
	                return culture;
	            });
	
	            this.el.innerHTML = this.threadPreviews.join('');
	        }
	    }, {
	        key: 'onNewMessage',
	        value: function onNewMessage(data) {
	            var _this3 = this;
	
	            var list = this.el;
	
	            data.forEach(function (item) {
	                var correspondingThreadPreview = _this3.threadPreviewsById[item.thread.id];
	                if (!correspondingThreadPreview) return;
	
	                list.insertBefore(correspondingThreadPreview.el, list.children[0]);
	            });
	        }
	    }, {
	        key: 'templates_base',
	        value: function templates_base() {
	            return '<thread-list id="' + this.id + '"></thread-list>';
	        }
	    }, {
	        key: 'dispose',
	        value: function dispose() {
	            this.threadPreviews.forEach(function (threadPreview) {
	                return threadPreview.dispose();
	            });
	
	            _get(Object.getPrototypeOf(ThreadListCulture.prototype), 'dispose', this).call(this);
	        }
	    }]);
	
	    return ThreadListCulture;
	})(_politburo.Culture);
	
	exports['default'] = ThreadListCulture;
	module.exports = exports['default'];

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _politburo = __webpack_require__(6);
	
	var _ChatRegime = __webpack_require__(8);
	
	var _ChatRegime2 = _interopRequireDefault(_ChatRegime);
	
	var ThreadListRep = (function (_Representative) {
	    _inherits(ThreadListRep, _Representative);
	
	    function ThreadListRep() {
	        var _this = this;
	
	        _classCallCheck(this, ThreadListRep);
	
	        _get(Object.getPrototypeOf(ThreadListRep.prototype), 'constructor', this).call(this);
	
	        _ChatRegime2['default'].on(_ChatRegime2['default'].EventType.INITIAL_DATA, function () {
	            return _this.emit(_this.EventType.INITIAL_DATA);
	        });
	        _ChatRegime2['default'].on(_ChatRegime2['default'].EventType.NEW_MESSAGE, function (data) {
	            return _this.emit(_this.EventType.NEW_MESSAGE, data);
	        });
	    }
	
	    _createClass(ThreadListRep, [{
	        key: 'threads',
	        get: function get() {
	            return _ChatRegime2['default'].threads;
	        }
	    }, {
	        key: 'EventType',
	        get: function get() {
	            return {
	                INITIAL_DATA: 'initial data',
	                NEW_MESSAGE: 'new message'
	            };
	        }
	    }]);
	
	    return ThreadListRep;
	})(_politburo.Representative);
	
	exports['default'] = ThreadListRep;
	module.exports = exports['default'];

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _politburo = __webpack_require__(6);
	
	var _ThreadPreviewRep = __webpack_require__(20);
	
	var _ThreadPreviewRep2 = _interopRequireDefault(_ThreadPreviewRep);
	
	var _ThreadStereotype = __webpack_require__(11);
	
	var _ThreadStereotype2 = _interopRequireDefault(_ThreadStereotype);
	
	__webpack_require__(21);
	
	var ThreadPreviewCulture = (function (_Culture) {
	    _inherits(ThreadPreviewCulture, _Culture);
	
	    function ThreadPreviewCulture(thread) {
	        var _this = this;
	
	        _classCallCheck(this, ThreadPreviewCulture);
	
	        _get(Object.getPrototypeOf(ThreadPreviewCulture.prototype), 'constructor', this).call(this);
	        this.rep = new _ThreadPreviewRep2['default'](thread);
	
	        this.rep.on(this.rep.EventType.SET_ACTIVE_THREAD, function () {
	            return _this.setActiveThread();
	        });
	        this.rep.on(this.rep.EventType.NEW_MESSAGE, function () {
	            return _this.update();
	        });
	        this.rep.on(this.rep.EventType.SET_ACTIVE_CHAT_BOX, function () {
	            return _this.setUnread();
	        });
	    }
	
	    _createClass(ThreadPreviewCulture, [{
	        key: 'setActiveThread',
	        value: function setActiveThread() {
	            this.el.classList.toggle('active', this.rep.active);
	            this.setUnread();
	        }
	    }, {
	        key: 'setUnread',
	        value: function setUnread() {
	            this.el.classList.toggle('unread', this.rep.thread.unread);
	        }
	    }, {
	        key: 'update',
	        value: function update() {
	            this.setActiveThread();
	
	            this.$('last-message').innerText = this.rep.lastMessage;
	        }
	    }, {
	        key: 'templates_base',
	        value: function templates_base() {
	            var active = this.rep.active ? 'active' : '';
	
	            return '<thread-preview id="' + this.id + '" class="' + active + '">\n                <img src="' + this.rep.user.picture.thumbnail + '"/>\n                <span>\n                    <strong>' + this.rep.user.fullname + '</strong><br/>\n                    <last-message>' + this.rep.lastMessage + '</last-message>\n                </span>\n            </thread-preview>';
	        }
	    }, {
	        key: 'thread',
	        get: function get() {
	            return this.rep.thread;
	        }
	    }]);
	
	    return ThreadPreviewCulture;
	})(_politburo.Culture);
	
	exports['default'] = ThreadPreviewCulture;
	module.exports = exports['default'];

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _politburo = __webpack_require__(6);
	
	var _ChatRegime = __webpack_require__(8);
	
	var _ChatRegime2 = _interopRequireDefault(_ChatRegime);
	
	var _ThreadStereotype = __webpack_require__(11);
	
	var _ThreadStereotype2 = _interopRequireDefault(_ThreadStereotype);
	
	var ThreadPreviewRep = (function (_Representative) {
	    _inherits(ThreadPreviewRep, _Representative);
	
	    function ThreadPreviewRep(thread) {
	        var _this = this;
	
	        _classCallCheck(this, ThreadPreviewRep);
	
	        _get(Object.getPrototypeOf(ThreadPreviewRep.prototype), 'constructor', this).call(this);
	
	        this.thread = thread;
	        this.user = thread.user;
	        this.lastMessage = thread.messages.slice(-1);
	
	        _ChatRegime2['default'].on(_ChatRegime2['default'].EventType.SET_ACTIVE_THREAD, function () {
	            return _this.emit(_this.EventType.SET_ACTIVE_THREAD);
	        });
	        _ChatRegime2['default'].on(_ChatRegime2['default'].EventType.NEW_MESSAGE, function (data) {
	            return _this.onUpdate(data);
	        });
	        _ChatRegime2['default'].on(_ChatRegime2['default'].EventType.SET_ACTIVE_CHAT_BOX, function () {
	            return _this.emit(_this.EventType.SET_ACTIVE_CHAT_BOX);
	        });
	    }
	
	    _createClass(ThreadPreviewRep, [{
	        key: 'onUpdate',
	        value: function onUpdate(data) {
	            var _this2 = this;
	
	            data.some(function (item) {
	                if (item.thread.id != _this2.thread.id) return;
	
	                _this2.lastMessage = _this2.thread.messages.slice(-1);
	
	                _this2.emit(_this2.EventType.NEW_MESSAGE);
	
	                return true;
	            });
	        }
	    }, {
	        key: 'active',
	        get: function get() {
	            return this.thread == _ChatRegime2['default'].activeThread;
	        }
	    }, {
	        key: 'EventType',
	        get: function get() {
	            return {
	                SET_ACTIVE_THREAD: 'set active thread',
	                NEW_MESSAGE: 'new message',
	                SET_ACTIVE_CHAT_BOX: 'set active chat box'
	            };
	        }
	    }]);
	
	    return ThreadPreviewRep;
	})(_politburo.Representative);
	
	exports['default'] = ThreadPreviewRep;
	module.exports = exports['default'];

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(22);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./thread-preview.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./thread-preview.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	exports.push([module.id, "thread-preview {\n    display: block;\n    padding: 5px;\n    height: 60px;\n    color: #4d4d4d;\n    background: white;\n    line-height: 140%;\n    cursor: pointer;\n}\n\nthread-preview.active {\n    background-color: #6d84b4;\n    color: white;\n}\n\nthread-preview.unread {\n    background-color: #6b90da;\n    color: white;\n    -webkit-animation: unread-pulsate 3s infinite linear;\n}\n\nthread-preview img {\n    height: 40px;\n    width: 40px;\n    position: absolute;\n    border-radius: 50%;\n    margin-right: 10px;\n}\n\nthread-preview span {\n    position: absolute;\n    display: block;\n    height: 60px;\n    top: 5px;\n    left: 60px;\n    width: calc(100% - 60px);\n    text-overflow: ellipsis;\n}\n\nthread-preview last-message {\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n    width: 100%;\n    display: block;\n}\n\n@-webkit-keyframes unread-pulsate {\n    0% {\n        background-color: #8bb0fa;\n    }\n    50% {\n        background-color: #6b90da;\n    }\n    100% {\n        background-color: #8bb0fa;\n    }\n}\n", ""]);

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(24);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./thread-list.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./thread-list.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	exports.push([module.id, "thread-list {\n    position: absolute;\n    height: 100%;\n    display: block;\n    top: 0;\n    background: white;\n    width: 280px;\n    bottom: 0;\n    padding: 10px;\n    overflow: auto;\n}\n", ""]);

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(26);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./threads-popover.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./threads-popover.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	exports.push([module.id, "threads-popover {\n    position: absolute;\n    right: 0px;\n    top: 60px;\n    height: 400px;\n    width: 280px;\n    display: block;\n    background: white;\n    z-index: 3;\n    -webkit-transform: translateX(100%);\n    -webkit-transition: 0.3s;\n    border-left: 1px solid #aaa;\n    border-bottom: 1px solid #aaa;\n}\n\nthreads-popover.visible {\n    -webkit-transform: translateX(0%);\n}\n", ""]);

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(28);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./menu.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./menu.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	exports.push([module.id, "menu {\n    position: relative;\n    height: 60px;\n    background: #3a5795;\n    color: white;\n    padding: 10px;\n    line-height: 40px;\n}\n\nmenu h1 {\n    font-weight: 300;\n    display: inline;\n}\n\nmenu button {\n    background: none;\n    color: #fff;\n    float: right;\n    height: 40px;\n    cursor: pointer;\n    outline: none;\n    border-radius: 5px;\n    border: 1px solid #fff;\n}\n\nmenu button:hover {\n    background-color: rgba(255, 255, 255, 0.1);\n}\n\nmenu button:active {\n    background-color: rgba(255, 255, 255, 0.3);\n}\n", ""]);

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _politburo = __webpack_require__(6);
	
	var _MotherPaneRep = __webpack_require__(30);
	
	var _MotherPaneRep2 = _interopRequireDefault(_MotherPaneRep);
	
	var _ThreadListThreadListCulture = __webpack_require__(17);
	
	var _ThreadListThreadListCulture2 = _interopRequireDefault(_ThreadListThreadListCulture);
	
	var _ChatPaneChatPaneCulture = __webpack_require__(31);
	
	var _ChatPaneChatPaneCulture2 = _interopRequireDefault(_ChatPaneChatPaneCulture);
	
	__webpack_require__(35);
	
	var MotherPaneCulture = (function (_Culture) {
	    _inherits(MotherPaneCulture, _Culture);
	
	    function MotherPaneCulture() {
	        var _this = this;
	
	        _classCallCheck(this, MotherPaneCulture);
	
	        _get(Object.getPrototypeOf(MotherPaneCulture.prototype), 'constructor', this).call(this);
	
	        this.rep = new _MotherPaneRep2['default']();
	        this.threadList = new _ThreadListThreadListCulture2['default']();
	
	        this.rep.on(this.rep.EventType.UPDATE, function () {
	            return _this.onUpdate();
	        });
	    }
	
	    _createClass(MotherPaneCulture, [{
	        key: 'onUpdate',
	        value: function onUpdate() {
	            this.chatPane && this.chatPane.dispose();
	
	            this.chatPane = new _ChatPaneChatPaneCulture2['default'](this.rep.activeThread);
	            this.chatPane.render(this.el);
	        }
	    }, {
	        key: 'onClickThreadPreview',
	        value: function onClickThreadPreview(e) {
	            var threadPreview = _politburo.CultureMinistry.getCulture(e.lastTarget.id);
	
	            this.rep.setActive(threadPreview.thread);
	        }
	    }, {
	        key: 'templates_base',
	        value: function templates_base() {
	            return '<mother-pane id="' + this.id + '">\n                ' + this.threadList + '\n            </mother-pane>';
	        }
	    }, {
	        key: 'dispose',
	        value: function dispose() {
	            this.chatPane.dispose();
	            this.threadList.dispose();
	
	            _get(Object.getPrototypeOf(MotherPaneCulture.prototype), 'dispose', this).call(this);
	        }
	    }, {
	        key: 'events',
	        get: function get() {
	            return {
	                'click': {
	                    'thread-preview': this.onClickThreadPreview
	                }
	            };
	        }
	    }]);
	
	    return MotherPaneCulture;
	})(_politburo.Culture);
	
	exports['default'] = MotherPaneCulture;
	module.exports = exports['default'];

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _politburo = __webpack_require__(6);
	
	var _ChatRegime = __webpack_require__(8);
	
	var _ChatRegime2 = _interopRequireDefault(_ChatRegime);
	
	var MotherPaneRep = (function (_Representative) {
	    _inherits(MotherPaneRep, _Representative);
	
	    function MotherPaneRep() {
	        var _this = this;
	
	        _classCallCheck(this, MotherPaneRep);
	
	        _get(Object.getPrototypeOf(MotherPaneRep.prototype), 'constructor', this).call(this);
	
	        _ChatRegime2['default'].on(_ChatRegime2['default'].EventType.INITIAL_DATA, function () {
	            return _this.emit(_this.EventType.UPDATE);
	        });
	        _ChatRegime2['default'].on(_ChatRegime2['default'].EventType.SET_ACTIVE_THREAD, function () {
	            return _this.emit(_this.EventType.UPDATE);
	        });
	    }
	
	    _createClass(MotherPaneRep, [{
	        key: 'setActive',
	        value: function setActive(thread) {
	            _ChatRegime2['default'].setActive(thread);
	        }
	    }, {
	        key: 'activeThread',
	        get: function get() {
	            return _ChatRegime2['default'].activeThread;
	        }
	    }, {
	        key: 'EventType',
	        get: function get() {
	            return {
	                UPDATE: 'update'
	            };
	        }
	    }]);
	
	    return MotherPaneRep;
	})(_politburo.Representative);
	
	exports['default'] = MotherPaneRep;
	module.exports = exports['default'];

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _politburo = __webpack_require__(6);
	
	var _ChatPaneRep = __webpack_require__(32);
	
	var _ChatPaneRep2 = _interopRequireDefault(_ChatPaneRep);
	
	__webpack_require__(33);
	
	var ChatPaneCulture = (function (_Culture) {
	    _inherits(ChatPaneCulture, _Culture);
	
	    function ChatPaneCulture(thread) {
	        var _this = this;
	
	        _classCallCheck(this, ChatPaneCulture);
	
	        _get(Object.getPrototypeOf(ChatPaneCulture.prototype), 'constructor', this).call(this);
	        this.rep = new _ChatPaneRep2['default'](thread);
	
	        this.rep.on(this.rep.EventType.NEW_MESSAGE, function () {
	            return _this.onNewMessage();
	        });
	    }
	
	    _createClass(ChatPaneCulture, [{
	        key: 'onNewMessage',
	        value: function onNewMessage() {
	            this.$('messages').innerHTML = this.templates_messages();
	
	            this.resetScroll_();
	        }
	    }, {
	        key: 'resetScroll_',
	        value: function resetScroll_() {
	            var messages = this.$('messages');
	            var thread = this.$('thread');
	
	            messages.scrollTop = messages.scrollHeight;
	            thread.scrollTop = thread.scrollHeight;
	        }
	    }, {
	        key: 'templates_base',
	        value: function templates_base() {
	            return '<chat-pane id="' + this.id + '">\n            ' + this.templates_inner() + '\n            </chat-pane>';
	        }
	    }, {
	        key: 'templates_inner',
	        value: function templates_inner() {
	            var user = this.rep.thread.user;
	
	            return '<thread>\n                <img src="' + user.picture.thumbnail + '"/>\n                <username><strong>' + user.fullname + '</strong></username>\n                <messages>\n                    ' + this.templates_messages() + '\n                </messages>\n            </thread>\n            <entry>\n                <img src="' + this.rep.owner.picture.thumbnail + '"/>\n                <input type="text" placeholder="This demo is for demonstrating unread threads synchronisation, so we left message typing out for the sake of brevity."/>\n            </entry>';
	        }
	    }, {
	        key: 'templates_messages',
	        value: function templates_messages() {
	            return this.rep.thread.messages.map(this.templates_message).join('');
	        }
	    }, {
	        key: 'templates_message',
	        value: function templates_message(message) {
	            return '<message>' + message + '</message>';
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	                args[_key] = arguments[_key];
	            }
	
	            _get(Object.getPrototypeOf(ChatPaneCulture.prototype), 'render', this).apply(this, args);
	
	            this.resetScroll_();
	            this.$('input').focus();
	        }
	    }, {
	        key: 'dispose',
	        value: function dispose() {
	            this.rep.dispose();
	
	            _get(Object.getPrototypeOf(ChatPaneCulture.prototype), 'dispose', this).call(this);
	        }
	    }]);
	
	    return ChatPaneCulture;
	})(_politburo.Culture);
	
	exports['default'] = ChatPaneCulture;
	module.exports = exports['default'];

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _politburo = __webpack_require__(6);
	
	var _ChatRegime = __webpack_require__(8);
	
	var _ChatRegime2 = _interopRequireDefault(_ChatRegime);
	
	var ChatPaneRep = (function (_Representative) {
	    _inherits(ChatPaneRep, _Representative);
	
	    function ChatPaneRep(thread) {
	        var _this = this;
	
	        _classCallCheck(this, ChatPaneRep);
	
	        _get(Object.getPrototypeOf(ChatPaneRep.prototype), 'constructor', this).call(this);
	
	        this.thread = thread;
	        this.user = this.thread.user;
	        this.owner = _ChatRegime2['default'].owner;
	
	        _ChatRegime2['default'].on(_ChatRegime2['default'].EventType.NEW_MESSAGE, function (data) {
	            return _this.onNewMessage(data);
	        });
	    }
	
	    _createClass(ChatPaneRep, [{
	        key: 'onNewMessage',
	        value: function onNewMessage(data) {
	            var _this2 = this;
	
	            data.some(function (item) {
	                if (_this2.thread.id != item.thread.id) return;
	                _this2.emit(_ChatRegime2['default'].EventType.NEW_MESSAGE, data);
	
	                return true;
	            });
	        }
	    }, {
	        key: 'dispose',
	        value: function dispose() {
	            _ChatRegime2['default'].off(_ChatRegime2['default'].EventType.NEW_MESSAGE, this.onNewMessage);
	
	            _get(Object.getPrototypeOf(ChatPaneRep.prototype), 'dispose', this).call(this);
	        }
	    }, {
	        key: 'EventType',
	        get: function get() {
	            return {
	                NEW_MESSAGE: 'new message'
	            };
	        }
	    }]);
	
	    return ChatPaneRep;
	})(_politburo.Representative);
	
	exports['default'] = ChatPaneRep;
	module.exports = exports['default'];

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(34);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./chat-pane.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./chat-pane.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	exports.push([module.id, "chat-pane {\n    display: block;\n    position: absolute;\n    height: 100%;\n    top: 0;\n    width: 100%;\n    left: 0;\n}\n\nchat-pane img {\n    border-radius: 50%;\n    height: 40px;\n    width: 40px;\n    position: absolute;\n}\n\nchat-pane thread {\n    display: block;\n    padding: 10px;\n    height: 100%;\n    width: 100%;\n}\n\nchat-pane messages {\n    position: absolute;\n    display: block;\n    left: 60px;\n    right: 0;\n    top: 35px;\n    bottom: 100px;\n    overflow: auto;\n}\n\nchat-pane username {\n    display: block;\n    position: absolute;\n    left: 60px;\n    margin-bottom: 10px;\n}\n\nchat-pane message {\n    display: block;\n    margin-bottom: 10px;\n}\n\nchat-pane entry {\n    position: absolute;\n    display: block;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background: #efefef;\n    border-top: 1px solid #ddd;\n}\n\nchat-pane input {\n    display: block;\n    margin: 10px;\n    border: 1px solid #aaa;\n    padding: 10px;\n    background: #fff;\n    margin-left: 60px;\n    width: calc(100% - 70px);\n    height: 60px;\n    overflow: auto;\n}\n\nchat-pane entry img {\n    position: absolute;\n    top: 20px;\n    left: 10px;\n}\n", ""]);

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(36);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./mother-pane.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./mother-pane.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	exports.push([module.id, "mother-pane {\n    position: absolute;\n    top: 60px;\n    background: white;\n    width: 100%;\n    bottom: 0;\n}\n\nmother-pane chat-pane {\n    display: block;\n    position: absolute;\n    height: 100%;\n    top: 0;\n    width: calc(100% - 280px);\n    left: 280px;\n    border-left: 1px solid #ccc;\n}\n", ""]);

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _politburo = __webpack_require__(6);
	
	var _ChatBoxRep = __webpack_require__(38);
	
	var _ChatBoxRep2 = _interopRequireDefault(_ChatBoxRep);
	
	var _ChatPaneChatPaneCulture = __webpack_require__(31);
	
	var _ChatPaneChatPaneCulture2 = _interopRequireDefault(_ChatPaneChatPaneCulture);
	
	var _ThreadStereotype = __webpack_require__(11);
	
	var _ThreadStereotype2 = _interopRequireDefault(_ThreadStereotype);
	
	__webpack_require__(39);
	
	var ChatBoxCulture = (function (_Culture) {
	    _inherits(ChatBoxCulture, _Culture);
	
	    function ChatBoxCulture(thread) {
	        var _this = this;
	
	        _classCallCheck(this, ChatBoxCulture);
	
	        _get(Object.getPrototypeOf(ChatBoxCulture.prototype), 'constructor', this).call(this);
	        this.rep = new _ChatBoxRep2['default'](thread);
	
	        this.chatPane = new _ChatPaneChatPaneCulture2['default'](thread);
	        this.rep.on(this.rep.EventType.UPDATE, function () {
	            return _this.onUpdate();
	        });
	    }
	
	    _createClass(ChatBoxCulture, [{
	        key: 'onUpdate',
	        value: function onUpdate() {
	            this.el.classList.toggle('active', this.rep.active);
	            this.el.classList.toggle('unread', this.rep.thread.unread);
	        }
	    }, {
	        key: 'focus',
	        value: function focus() {
	            if (this.rep.minimized) this.toggle();
	
	            if (!this.rep.active) this.$('input').focus();
	
	            this.rep.activate();
	            this.onUpdate();
	        }
	    }, {
	        key: 'close',
	        value: function close() {
	            this.rep.close();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	                args[_key] = arguments[_key];
	            }
	
	            _get(Object.getPrototypeOf(ChatBoxCulture.prototype), 'render', this).apply(this, args);
	            this.chatPane.render(this.$('content'));
	        }
	    }, {
	        key: 'toggle',
	        value: function toggle() {
	            this.rep.minimize();
	
	            this.el.classList.toggle('minimized');
	
	            return false;
	        }
	    }, {
	        key: 'templates_base',
	        value: function templates_base() {
	            return '<chat-box id="' + this.id + '">\n                <header>\n                    <img src="' + this.rep.user.picture.thumbnail + '"/>\n                    <strong>\n                        ' + this.rep.user.fullname + '\n                    </strong>\n                    <close>&#10006</close>\n                    <minimize></minimize>\n                </header>\n                <content></content>\n            </chat-box>';
	        }
	    }, {
	        key: 'dispose',
	        value: function dispose() {
	            this.chatPane.dispose();
	            this.chatPane = null;
	
	            this.rep.dispose();
	            this.rep = null;
	
	            _get(Object.getPrototypeOf(ChatBoxCulture.prototype), 'dispose', this).call(this);
	        }
	    }, {
	        key: 'thread',
	        get: function get() {
	            return this.rep.thread;
	        }
	    }, {
	        key: 'events',
	        get: function get() {
	            return {
	                'click': {
	                    'chat-box': this.focus,
	                    'close': this.close,
	                    'minimize': this.toggle
	                }
	            };
	        }
	    }]);
	
	    return ChatBoxCulture;
	})(_politburo.Culture);
	
	exports['default'] = ChatBoxCulture;
	module.exports = exports['default'];

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _politburo = __webpack_require__(6);
	
	var _ChatRegime = __webpack_require__(8);
	
	var _ChatRegime2 = _interopRequireDefault(_ChatRegime);
	
	var _ThreadStereotype = __webpack_require__(11);
	
	var _ThreadStereotype2 = _interopRequireDefault(_ThreadStereotype);
	
	var ChatBoxRep = (function (_Representative) {
	    _inherits(ChatBoxRep, _Representative);
	
	    function ChatBoxRep(thread) {
	        var _this = this;
	
	        _classCallCheck(this, ChatBoxRep);
	
	        _get(Object.getPrototypeOf(ChatBoxRep.prototype), 'constructor', this).call(this);
	
	        this.thread = thread;
	        this.user = this.thread.user;
	        this.minimized = false;
	
	        _ChatRegime2['default'].on(_ChatRegime2['default'].EventType.NEW_MESSAGE, function () {
	            return _this.onUpdate();
	        });
	        _ChatRegime2['default'].on(_ChatRegime2['default'].EventType.SET_ACTIVE_CHAT_BOX, function () {
	            return _this.onUpdate();
	        });
	    }
	
	    _createClass(ChatBoxRep, [{
	        key: 'onUpdate',
	        value: function onUpdate() {
	            this.emit(this.EventType.UPDATE);
	        }
	    }, {
	        key: 'activate',
	        value: function activate() {
	            _ChatRegime2['default'].setActiveChatBox(this.thread);
	        }
	    }, {
	        key: 'close',
	        value: function close() {
	            _ChatRegime2['default'].removeChatBox(this.thread);
	        }
	    }, {
	        key: 'minimize',
	        value: function minimize() {
	            this.minimized = !this.minimized;
	
	            _ChatRegime2['default'].setActiveChatBox(this.minimized ? null : this.thread);
	        }
	    }, {
	        key: 'dispose',
	        value: function dispose() {
	            _ChatRegime2['default'].off(_ChatRegime2['default'].EventType.NEW_MESSAGE, this.onUpdate);
	            _ChatRegime2['default'].off(_ChatRegime2['default'].EventType.SET_ACTIVE_CHAT_BOX, this.onUpdate);
	
	            _get(Object.getPrototypeOf(ChatBoxRep.prototype), 'dispose', this).call(this);
	        }
	    }, {
	        key: 'active',
	        get: function get() {
	            return this.thread == _ChatRegime2['default'].activeChatBox;
	        }
	    }, {
	        key: 'EventType',
	        get: function get() {
	            return {
	                UPDATE: 'update'
	            };
	        }
	    }]);
	
	    return ChatBoxRep;
	})(_politburo.Representative);
	
	exports['default'] = ChatBoxRep;
	module.exports = exports['default'];

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(40);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./chat-box.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./chat-box.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	exports.push([module.id, "chat-box {\n    display: inline-block;\n    background-color: #fff;\n    width: 220px;\n    margin: 0 5px;\n    border: 1px solid #ddd;\n    border-bottom: none;\n}\n\nchat-box:first-child {\n    margin: 0 10px 0 5px;\n}\n\nchat-box header {\n    background: #6b90da;\n    color: white;\n    padding: 0 5px 0 30px;\n    height: 30px;\n    line-height: 30px;\n}\n\nchat-box.active header {\n    background-color: #6d84b4;\n    color: white;\n}\n\nchat-box.unread header {\n    background-color: #6b90da;\n    color: white;\n    -webkit-animation: unread-pulsate 3s infinite linear;\n}\n\nchat-box header strong {\n    max-width: calc(100% - 40px);\n    display: inline-block;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n}\n\nchat-box img {\n    height: 20px;\n    width: 20px;\n    border-radius: 50%;\n    position: absolute;\n    top: 5px;\n    left: 5px;\n}\n\nchat-box entry img {\n    display: none;\n}\n\nchat-box content {\n    height: 300px;\n    display: block;\n}\n\nchat-box chat-pane {\n    position: relative;\n    padding: 0;\n}\n\nchat-box chat-pane thread {\n    position: absolute;\n    top: 0;\n    bottom: 50px;\n    height: auto;\n    overflow: auto;\n    padding-top: 10px;\n}\n\nchat-box chat-pane username {\n    top: 5px;\n    left: 35px;\n}\n\nchat-box chat-pane img {\n    top: 5px;\n    left: 10px;\n    height: 20px;\n    width: 20px;\n}\n\nchat-box chat-pane messages {\n    padding: 10px;\n    top: 17px;\n    left: 0;\n    bottom: 0;\n    overflow: visible;\n}\n\nchat-box chat-pane input {\n    margin-left: 10px;\n    height: 30px;\n    padding: 4px;\n    width: calc(100% - 20px);\n}\n\nchat-box.minimized content {\n    display: none;\n}\n\nchat-box close {\n    float: right;\n    cursor: pointer;\n}\n\nchat-box minimize {\n    position: relative;\n    float: right;\n    display: inline-block;\n    height: 100%;\n    width: 17px;\n    cursor: pointer;\n}\n\nchat-box minimize::before {\n    display: block;\n    content: ' ';\n    border-bottom: 3px solid white;\n    height: 16px;\n    margin: 0 4px;\n}\n\nchat-box.minimized minimize::before {\n    display: block;\n    content: ' ';\n    border: 3px solid white;\n    height: 4px;\n    margin: 0 3px;\n    margin-top: 10px;\n}\n", ""]);

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(42);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./root.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./root.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	exports.push([module.id, "root {\n    display: block;\n    height: 100%;\n    width: 100%;\n}\n\nchat-boxes {\n    position: absolute;\n    bottom: 0;\n    right: 0;\n    max-width: 100%;\n    display: flex;\n    flex-flow: row-reverse nowrap;\n    align-items: flex-end;\n    z-index: 1;\n}\n", ""]);

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map
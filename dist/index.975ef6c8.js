// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"1RB6v":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "890e741a975ef6c8";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, importScripts */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else if ("reload" in location) location.reload();
            else {
                // Web extension context
                var ext = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
                if (ext && ext.runtime && ext.runtime.reload) ext.runtime.reload();
            }
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                if (asset.type === "js") {
                    if (typeof document !== "undefined") {
                        let script = document.createElement("script");
                        script.src = asset.url;
                        return new Promise((resolve, reject)=>{
                            var _document$head;
                            script.onload = ()=>resolve(script);
                            script.onerror = reject;
                            (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
                        });
                    } else if (typeof importScripts === "function") return new Promise((resolve, reject)=>{
                        try {
                            importScripts(asset.url);
                        } catch (err) {
                            reject(err);
                        }
                    });
                }
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id1][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"8lqZg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _simplelightbox = require("simplelightbox");
var _simplelightboxDefault = parcelHelpers.interopDefault(_simplelightbox);
var _simpleLightboxMinCss = require("simplelightbox/dist/simple-lightbox.min.css");
var _notiflixNotifyAio = require("notiflix/build/notiflix-notify-aio");
var _newsService = require("./news-service");
var _newsServiceDefault = parcelHelpers.interopDefault(_newsService);
var _articlesHbs = require("./templates/articles.hbs");
var _articlesHbsDefault = parcelHelpers.interopDefault(_articlesHbs);
var _loadMoreBtn = require("./components/load-more.btn");
var _loadMoreBtnDefault = parcelHelpers.interopDefault(_loadMoreBtn);
const refs = {
    formRefs: document.querySelector(".search-form"),
    button: document.querySelector("button"),
    gallery: document.querySelector(".gallery")
};
const loadMoreBtn = new (0, _loadMoreBtnDefault.default)({
    selector: '[data-action = "load-more"]',
    hidden: true
});
let totalPages = 0;
const newsApiService = new (0, _newsServiceDefault.default)();
const lightbox = {
    init () {
        this.lightbox = new (0, _simplelightboxDefault.default)(".gallery a", {
            captionsData: "alt",
            captionDelay: 250,
            close: true
        });
    },
    refresh () {
        this.lightbox.refresh();
    }
};
refs.formRefs.addEventListener("submit", onSearch);
loadMoreBtn.refs.button.addEventListener("click", fetchHits);
function onSearch(evt) {
    evt.preventDefault();
    clearArticleContainer();
    loadMoreBtn.show();
    newsApiService.resetPage();
    newsApiService.query = evt.currentTarget.elements.searchQuery.value;
    fetchHits();
}
function fetchHits() {
    loadMoreBtn.enable();
    newsApiService.myApi().then(({ hits , totalHits  })=>{
        if (newsApiService.query === "") {
            (0, _notiflixNotifyAio.Notify).failure("Sorry, there are no images matching your search query. Please try again.");
            clearArticleContainer();
            return loadMoreBtn.hide();
        }
        totalPages = totalHits;
        if (hits < 1) {
            (0, _notiflixNotifyAio.Notify).warning("Sorry, there are no images matching your search query. Please try again.");
            return loadMoreBtn.hide();
        }
        (0, _notiflixNotifyAio.Notify).success(`Hooray! We found ${totalHits} images.`);
        createResultMarkup(hits);
        lightbox.init();
        if (totalPages < 1) {
            (0, _notiflixNotifyAio.Notify).warning("Sorry, there are no images matching your search query. Please try again.");
            clearArticleContainer();
        }
        newsApiService.incrimentPage();
        if (totalPages > totalHits) {
            (0, _notiflixNotifyAio.Notify).info(`We're sorry, but you've reached the end of search results.`);
            return loadMoreBtn.hide();
        }
    });
}
function clearArticleContainer() {
    refs.gallery.innerHTML = "";
}
function createResultMarkup(hits) {
    refs.gallery.insertAdjacentHTML("beforeend", (0, _articlesHbsDefault.default)(hits));
}

},{"simplelightbox":"9ydBq","simplelightbox/dist/simple-lightbox.min.css":"kaxSc","notiflix/build/notiflix-notify-aio":"eXQLZ","./news-service":"bCOOF","./templates/articles.hbs":"ac3Sz","./components/load-more.btn":"A6Vfe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9ydBq":[function(require,module,exports) {
/*!
	By André Rinas, www.andrerinas.de
	Documentation, www.simplelightbox.de
	Available for use under the MIT License
	Version 2.10.4
*/ "use strict";
var global = arguments[3];
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
function _typeof(obj1) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj1);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it["return"] != null) it["return"]();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
        writable: false
    });
    return Constructor;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
var SimpleLightbox = /*#__PURE__*/ function() {
    function SimpleLightbox1(elements, options) {
        var _this = this;
        _classCallCheck(this, SimpleLightbox1);
        _defineProperty(this, "defaultOptions", {
            sourceAttr: "href",
            overlay: true,
            overlayOpacity: 0.7,
            spinner: true,
            nav: true,
            navText: [
                "&lsaquo;",
                "&rsaquo;"
            ],
            captions: true,
            captionDelay: 0,
            captionSelector: "img",
            captionType: "attr",
            captionsData: "title",
            captionPosition: "bottom",
            captionClass: "",
            close: true,
            closeText: "&times;",
            swipeClose: true,
            showCounter: true,
            fileExt: "png|jpg|jpeg|gif|webp",
            animationSlide: true,
            animationSpeed: 250,
            preloading: true,
            enableKeyboard: true,
            loop: true,
            rel: false,
            docClose: true,
            swipeTolerance: 50,
            className: "simple-lightbox",
            widthRatio: 0.8,
            heightRatio: 0.9,
            scaleImageToRatio: false,
            disableRightClick: false,
            disableScroll: true,
            alertError: true,
            alertErrorMessage: "Image not found, next image will be loaded",
            additionalHtml: false,
            history: true,
            throttleInterval: 0,
            doubleTapZoom: 2,
            maxZoom: 10,
            htmlClass: "has-lightbox",
            rtl: false,
            fixedClass: "sl-fixed",
            fadeSpeed: 300,
            uniqueImages: true,
            focus: true,
            scrollZoom: true,
            scrollZoomFactor: 0.5
        });
        _defineProperty(this, "transitionPrefix", void 0);
        _defineProperty(this, "isPassiveEventsSupported", void 0);
        _defineProperty(this, "transitionCapable", false);
        _defineProperty(this, "isTouchDevice", "ontouchstart" in window);
        _defineProperty(this, "isAppleDevice", /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform));
        _defineProperty(this, "initialLocationHash", void 0);
        _defineProperty(this, "pushStateSupport", "pushState" in history);
        _defineProperty(this, "isOpen", false);
        _defineProperty(this, "isAnimating", false);
        _defineProperty(this, "isClosing", false);
        _defineProperty(this, "isFadeIn", false);
        _defineProperty(this, "urlChangedOnce", false);
        _defineProperty(this, "hashReseted", false);
        _defineProperty(this, "historyHasChanges", false);
        _defineProperty(this, "historyUpdateTimeout", null);
        _defineProperty(this, "currentImage", void 0);
        _defineProperty(this, "eventNamespace", "simplelightbox");
        _defineProperty(this, "domNodes", {});
        _defineProperty(this, "loadedImages", []);
        _defineProperty(this, "initialImageIndex", 0);
        _defineProperty(this, "currentImageIndex", 0);
        _defineProperty(this, "initialSelector", null);
        _defineProperty(this, "globalScrollbarWidth", 0);
        _defineProperty(this, "controlCoordinates", {
            swipeDiff: 0,
            swipeYDiff: 0,
            swipeStart: 0,
            swipeEnd: 0,
            swipeYStart: 0,
            swipeYEnd: 0,
            mousedown: false,
            imageLeft: 0,
            zoomed: false,
            containerHeight: 0,
            containerWidth: 0,
            containerOffsetX: 0,
            containerOffsetY: 0,
            imgHeight: 0,
            imgWidth: 0,
            capture: false,
            initialOffsetX: 0,
            initialOffsetY: 0,
            initialPointerOffsetX: 0,
            initialPointerOffsetY: 0,
            initialPointerOffsetX2: 0,
            initialPointerOffsetY2: 0,
            initialScale: 1,
            initialPinchDistance: 0,
            pointerOffsetX: 0,
            pointerOffsetY: 0,
            pointerOffsetX2: 0,
            pointerOffsetY2: 0,
            targetOffsetX: 0,
            targetOffsetY: 0,
            targetScale: 0,
            pinchOffsetX: 0,
            pinchOffsetY: 0,
            limitOffsetX: 0,
            limitOffsetY: 0,
            scaleDifference: 0,
            targetPinchDistance: 0,
            touchCount: 0,
            doubleTapped: false,
            touchmoveCount: 0
        });
        this.options = Object.assign(this.defaultOptions, options);
        this.isPassiveEventsSupported = this.checkPassiveEventsSupport();
        if (typeof elements === "string") {
            this.initialSelector = elements;
            this.elements = Array.from(document.querySelectorAll(elements));
        } else this.elements = typeof elements.length !== "undefined" && elements.length > 0 ? Array.from(elements) : [
            elements
        ];
        this.relatedElements = [];
        this.transitionPrefix = this.calculateTransitionPrefix();
        this.transitionCapable = this.transitionPrefix !== false;
        this.initialLocationHash = this.hash;
        // this should be handled by attribute selector IMHO! => 'a[rel=bla]'...
        if (this.options.rel) this.elements = this.getRelated(this.options.rel);
        if (this.options.uniqueImages) {
            var imgArr = [];
            this.elements = Array.from(this.elements).filter(function(element) {
                var src = element.getAttribute(_this.options.sourceAttr);
                if (imgArr.indexOf(src) === -1) {
                    imgArr.push(src);
                    return true;
                }
                return false;
            });
        }
        this.createDomNodes();
        if (this.options.close) this.domNodes.wrapper.appendChild(this.domNodes.closeButton);
        if (this.options.nav) this.domNodes.wrapper.appendChild(this.domNodes.navigation);
        if (this.options.spinner) this.domNodes.wrapper.appendChild(this.domNodes.spinner);
        this.addEventListener(this.elements, "click." + this.eventNamespace, function(event) {
            if (_this.isValidLink(event.currentTarget)) {
                event.preventDefault();
                if (_this.isAnimating) return false;
                _this.initialImageIndex = _this.elements.indexOf(event.currentTarget);
                _this.openImage(event.currentTarget);
            }
        });
        // close addEventListener click addEventListener doc
        if (this.options.docClose) this.addEventListener(this.domNodes.wrapper, [
            "click." + this.eventNamespace,
            "touchstart." + this.eventNamespace
        ], function(event) {
            if (_this.isOpen && event.target === event.currentTarget) _this.close();
        });
        // disable rightclick
        if (this.options.disableRightClick) this.addEventListener(document.body, "contextmenu." + this.eventNamespace, function(event) {
            if (event.target.parentElement.classList.contains("sl-image")) event.preventDefault();
        });
        // keyboard-control
        if (this.options.enableKeyboard) this.addEventListener(document.body, "keyup." + this.eventNamespace, this.throttle(function(event) {
            _this.controlCoordinates.swipeDiff = 0;
            // keyboard control only if lightbox is open
            if (_this.isAnimating && event.key === "Escape") {
                _this.currentImage.setAttribute("src", "");
                _this.isAnimating = false;
                return _this.close();
            }
            if (_this.isOpen) {
                event.preventDefault();
                if (event.key === "Escape") _this.close();
                if (!_this.isAnimating && [
                    "ArrowLeft",
                    "ArrowRight"
                ].indexOf(event.key) > -1) _this.loadImage(event.key === "ArrowRight" ? 1 : -1);
            }
        }, this.options.throttleInterval));
        this.addEvents();
    }
    _createClass(SimpleLightbox1, [
        {
            key: "checkPassiveEventsSupport",
            value: function checkPassiveEventsSupport() {
                // https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md#feature-detection
                // Test via a getter in the options object to see if the passive property is accessed
                var supportsPassive = false;
                try {
                    var opts = Object.defineProperty({}, "passive", {
                        get: function get() {
                            supportsPassive = true;
                        }
                    });
                    window.addEventListener("testPassive", null, opts);
                    window.removeEventListener("testPassive", null, opts);
                } catch (e) {}
                return supportsPassive;
            }
        },
        {
            key: "createDomNodes",
            value: function createDomNodes() {
                this.domNodes.overlay = document.createElement("div");
                this.domNodes.overlay.classList.add("sl-overlay");
                this.domNodes.overlay.dataset.opacityTarget = this.options.overlayOpacity;
                this.domNodes.closeButton = document.createElement("button");
                this.domNodes.closeButton.classList.add("sl-close");
                this.domNodes.closeButton.innerHTML = this.options.closeText;
                this.domNodes.spinner = document.createElement("div");
                this.domNodes.spinner.classList.add("sl-spinner");
                this.domNodes.spinner.innerHTML = "<div></div>";
                this.domNodes.navigation = document.createElement("div");
                this.domNodes.navigation.classList.add("sl-navigation");
                this.domNodes.navigation.innerHTML = '<button class="sl-prev">'.concat(this.options.navText[0], '</button><button class="sl-next">').concat(this.options.navText[1], "</button>");
                this.domNodes.counter = document.createElement("div");
                this.domNodes.counter.classList.add("sl-counter");
                this.domNodes.counter.innerHTML = '<span class="sl-current"></span>/<span class="sl-total"></span>';
                this.domNodes.caption = document.createElement("div");
                this.domNodes.caption.classList.add("sl-caption", "pos-" + this.options.captionPosition);
                if (this.options.captionClass) this.domNodes.caption.classList.add(this.options.captionClass);
                this.domNodes.image = document.createElement("div");
                this.domNodes.image.classList.add("sl-image");
                this.domNodes.wrapper = document.createElement("div");
                this.domNodes.wrapper.classList.add("sl-wrapper");
                this.domNodes.wrapper.setAttribute("tabindex", -1);
                this.domNodes.wrapper.setAttribute("role", "dialog");
                this.domNodes.wrapper.setAttribute("aria-hidden", false);
                if (this.options.className) this.domNodes.wrapper.classList.add(this.options.className);
                if (this.options.rtl) this.domNodes.wrapper.classList.add("sl-dir-rtl");
            }
        },
        {
            key: "throttle",
            value: function throttle(func, limit) {
                var inThrottle;
                return function() {
                    if (!inThrottle) {
                        func.apply(this, arguments);
                        inThrottle = true;
                        setTimeout(function() {
                            return inThrottle = false;
                        }, limit);
                    }
                };
            }
        },
        {
            key: "isValidLink",
            value: function isValidLink(element) {
                return !this.options.fileExt || element.getAttribute(this.options.sourceAttr) && new RegExp("(" + this.options.fileExt + ")$", "i").test(element.getAttribute(this.options.sourceAttr));
            }
        },
        {
            key: "calculateTransitionPrefix",
            value: function calculateTransitionPrefix() {
                var s = (document.body || document.documentElement).style;
                return "transition" in s ? "" : "WebkitTransition" in s ? "-webkit-" : "MozTransition" in s ? "-moz-" : "OTransition" in s ? "-o" : false;
            }
        },
        {
            key: "toggleScrollbar",
            value: function toggleScrollbar(type) {
                var scrollbarWidth = 0;
                var fixedElements = [].slice.call(document.querySelectorAll("." + this.options.fixedClass));
                if (type === "hide") {
                    var fullWindowWidth = window.innerWidth;
                    if (!fullWindowWidth) {
                        var documentElementRect = document.documentElement.getBoundingClientRect();
                        fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left);
                    }
                    if (document.body.clientWidth < fullWindowWidth || this.isAppleDevice) {
                        var scrollDiv = document.createElement("div"), paddingRight = parseInt(document.body.style.paddingRight || 0, 10);
                        scrollDiv.classList.add("sl-scrollbar-measure");
                        document.body.appendChild(scrollDiv);
                        scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
                        document.body.removeChild(scrollDiv);
                        document.body.dataset.originalPaddingRight = paddingRight;
                        if (scrollbarWidth > 0 || scrollbarWidth == 0 && this.isAppleDevice) {
                            document.body.classList.add("hidden-scroll");
                            document.body.style.paddingRight = paddingRight + scrollbarWidth + "px";
                            fixedElements.forEach(function(element) {
                                var actualPadding = element.style.paddingRight;
                                var calculatedPadding = window.getComputedStyle(element)["padding-right"];
                                element.dataset.originalPaddingRight = actualPadding;
                                element.style.paddingRight = "".concat(parseFloat(calculatedPadding) + scrollbarWidth, "px");
                            });
                        }
                    }
                } else {
                    document.body.classList.remove("hidden-scroll");
                    document.body.style.paddingRight = document.body.dataset.originalPaddingRight;
                    fixedElements.forEach(function(element) {
                        var padding = element.dataset.originalPaddingRight;
                        if (typeof padding !== "undefined") element.style.paddingRight = padding;
                    });
                }
                return scrollbarWidth;
            }
        },
        {
            key: "close",
            value: function close() {
                var _this2 = this;
                if (!this.isOpen || this.isAnimating || this.isClosing) return false;
                this.isClosing = true;
                var element = this.relatedElements[this.currentImageIndex];
                element.dispatchEvent(new Event("close.simplelightbox"));
                if (this.options.history) {
                    this.historyHasChanges = false;
                    if (!this.hashReseted) this.resetHash();
                }
                this.removeEventListener(document, "focusin." + this.eventNamespace);
                this.fadeOut(this.domNodes.overlay, this.options.fadeSpeed);
                this.fadeOut(document.querySelectorAll(".sl-image img,  .sl-close, .sl-navigation, .sl-image .sl-caption, .sl-counter"), this.options.fadeSpeed, function() {
                    if (_this2.options.disableScroll) _this2.toggleScrollbar("show");
                    if (_this2.options.htmlClass && _this2.options.htmlClass !== "") document.querySelector("html").classList.remove(_this2.options.htmlClass);
                    document.body.removeChild(_this2.domNodes.wrapper);
                    document.body.removeChild(_this2.domNodes.overlay);
                    _this2.domNodes.additionalHtml = null;
                    element.dispatchEvent(new Event("closed.simplelightbox"));
                    _this2.isClosing = false;
                });
                this.currentImage = null;
                this.isOpen = false;
                this.isAnimating = false;
                // reset touchcontrol coordinates
                for(var key in this.controlCoordinates)this.controlCoordinates[key] = 0;
                this.controlCoordinates.mousedown = false;
                this.controlCoordinates.zoomed = false;
                this.controlCoordinates.capture = false;
                this.controlCoordinates.initialScale = this.minMax(1, 1, this.options.maxZoom);
                this.controlCoordinates.doubleTapped = false;
            }
        },
        {
            key: "hash",
            get: function get() {
                return window.location.hash.substring(1);
            }
        },
        {
            key: "preload",
            value: function preload() {
                var _this3 = this;
                var index = this.currentImageIndex, length = this.relatedElements.length, next = index + 1 < 0 ? length - 1 : index + 1 >= length - 1 ? 0 : index + 1, prev = index - 1 < 0 ? length - 1 : index - 1 >= length - 1 ? 0 : index - 1, nextImage = new Image(), prevImage = new Image();
                nextImage.addEventListener("load", function(event) {
                    var src = event.target.getAttribute("src");
                    if (_this3.loadedImages.indexOf(src) === -1) //is this condition even required... setting multiple times will not change usage...
                    _this3.loadedImages.push(src);
                    _this3.relatedElements[index].dispatchEvent(new Event("nextImageLoaded." + _this3.eventNamespace));
                });
                nextImage.setAttribute("src", this.relatedElements[next].getAttribute(this.options.sourceAttr));
                prevImage.addEventListener("load", function(event) {
                    var src = event.target.getAttribute("src");
                    if (_this3.loadedImages.indexOf(src) === -1) _this3.loadedImages.push(src);
                    _this3.relatedElements[index].dispatchEvent(new Event("prevImageLoaded." + _this3.eventNamespace));
                });
                prevImage.setAttribute("src", this.relatedElements[prev].getAttribute(this.options.sourceAttr));
            }
        },
        {
            key: "loadImage",
            value: function loadImage(direction) {
                var _this4 = this;
                var slideDirection = direction;
                if (this.options.rtl) direction = -direction;
                this.relatedElements[this.currentImageIndex].dispatchEvent(new Event("change." + this.eventNamespace));
                this.relatedElements[this.currentImageIndex].dispatchEvent(new Event((direction === 1 ? "next" : "prev") + "." + this.eventNamespace));
                var newIndex = this.currentImageIndex + direction;
                if (this.isAnimating || (newIndex < 0 || newIndex >= this.relatedElements.length) && this.options.loop === false) return false;
                this.currentImageIndex = newIndex < 0 ? this.relatedElements.length - 1 : newIndex > this.relatedElements.length - 1 ? 0 : newIndex;
                this.domNodes.counter.querySelector(".sl-current").innerHTML = this.currentImageIndex + 1;
                if (this.options.animationSlide) this.slide(this.options.animationSpeed / 1000, -100 * slideDirection - this.controlCoordinates.swipeDiff + "px");
                this.fadeOut(this.domNodes.image, this.options.fadeSpeed, function() {
                    _this4.isAnimating = true;
                    if (!_this4.isClosing) setTimeout(function() {
                        var element = _this4.relatedElements[_this4.currentImageIndex];
                        _this4.currentImage.setAttribute("src", element.getAttribute(_this4.options.sourceAttr));
                        if (_this4.loadedImages.indexOf(element.getAttribute(_this4.options.sourceAttr)) === -1) _this4.show(_this4.domNodes.spinner);
                        if (_this4.domNodes.image.contains(_this4.domNodes.caption)) _this4.domNodes.image.removeChild(_this4.domNodes.caption);
                        _this4.adjustImage(slideDirection);
                        if (_this4.options.preloading) _this4.preload();
                    }, 100);
                    else _this4.isAnimating = false;
                });
            }
        },
        {
            key: "adjustImage",
            value: function adjustImage(direction) {
                var _this5 = this;
                if (!this.currentImage) return false;
                var tmpImage = new Image(), windowWidth = window.innerWidth * this.options.widthRatio, windowHeight = window.innerHeight * this.options.heightRatio;
                tmpImage.setAttribute("src", this.currentImage.getAttribute("src"));
                this.currentImage.dataset.scale = 1;
                this.currentImage.dataset.translateX = 0;
                this.currentImage.dataset.translateY = 0;
                this.zoomPanElement(0, 0, 1);
                tmpImage.addEventListener("error", function(event) {
                    _this5.relatedElements[_this5.currentImageIndex].dispatchEvent(new Event("error." + _this5.eventNamespace));
                    _this5.isAnimating = false;
                    _this5.isOpen = true;
                    _this5.domNodes.spinner.style.display = "none";
                    var dirIsDefined = direction === 1 || direction === -1;
                    if (_this5.initialImageIndex === _this5.currentImageIndex && dirIsDefined) return _this5.close();
                    if (_this5.options.alertError) alert(_this5.options.alertErrorMessage);
                    _this5.loadImage(dirIsDefined ? direction : 1);
                });
                tmpImage.addEventListener("load", function(event) {
                    if (typeof direction !== "undefined") {
                        _this5.relatedElements[_this5.currentImageIndex].dispatchEvent(new Event("changed." + _this5.eventNamespace));
                        _this5.relatedElements[_this5.currentImageIndex].dispatchEvent(new Event((direction === 1 ? "nextDone" : "prevDone") + "." + _this5.eventNamespace));
                    }
                    // history
                    if (_this5.options.history) _this5.updateURL();
                    if (_this5.loadedImages.indexOf(_this5.currentImage.getAttribute("src")) === -1) _this5.loadedImages.push(_this5.currentImage.getAttribute("src"));
                    var imageWidth = event.target.width, imageHeight = event.target.height;
                    if (_this5.options.scaleImageToRatio || imageWidth > windowWidth || imageHeight > windowHeight) {
                        var ratio = imageWidth / imageHeight > windowWidth / windowHeight ? imageWidth / windowWidth : imageHeight / windowHeight;
                        imageWidth /= ratio;
                        imageHeight /= ratio;
                    }
                    _this5.domNodes.image.style.top = (window.innerHeight - imageHeight) / 2 + "px";
                    _this5.domNodes.image.style.left = (window.innerWidth - imageWidth - _this5.globalScrollbarWidth) / 2 + "px";
                    _this5.domNodes.image.style.width = imageWidth + "px";
                    _this5.domNodes.image.style.height = imageHeight + "px";
                    _this5.domNodes.spinner.style.display = "none";
                    if (_this5.options.focus) _this5.forceFocus();
                    _this5.fadeIn(_this5.currentImage, _this5.options.fadeSpeed, function() {
                        if (_this5.options.focus) _this5.domNodes.wrapper.focus();
                    });
                    _this5.isOpen = true;
                    var captionContainer, captionText;
                    if (typeof _this5.options.captionSelector === "string") captionContainer = _this5.options.captionSelector === "self" ? _this5.relatedElements[_this5.currentImageIndex] : _this5.relatedElements[_this5.currentImageIndex].querySelector(_this5.options.captionSelector);
                    else if (typeof _this5.options.captionSelector === "function") captionContainer = _this5.options.captionSelector(_this5.relatedElements[_this5.currentImageIndex]);
                    if (_this5.options.captions && captionContainer) {
                        if (_this5.options.captionType === "data") captionText = captionContainer.dataset[_this5.options.captionsData];
                        else if (_this5.options.captionType === "text") captionText = captionContainer.innerHTML;
                        else captionText = captionContainer.getAttribute(_this5.options.captionsData);
                    }
                    if (!_this5.options.loop) {
                        if (_this5.currentImageIndex === 0) _this5.hide(_this5.domNodes.navigation.querySelector(".sl-prev"));
                        if (_this5.currentImageIndex >= _this5.relatedElements.length - 1) _this5.hide(_this5.domNodes.navigation.querySelector(".sl-next"));
                        if (_this5.currentImageIndex > 0) _this5.show(_this5.domNodes.navigation.querySelector(".sl-prev"));
                        if (_this5.currentImageIndex < _this5.relatedElements.length - 1) _this5.show(_this5.domNodes.navigation.querySelector(".sl-next"));
                    } else if (_this5.relatedElements.length === 1) _this5.hide(_this5.domNodes.navigation.querySelectorAll(".sl-prev, .sl-next"));
                    else _this5.show(_this5.domNodes.navigation.querySelectorAll(".sl-prev, .sl-next"));
                    if (direction === 1 || direction === -1) {
                        if (_this5.options.animationSlide) {
                            _this5.slide(0, 100 * direction + "px");
                            setTimeout(function() {
                                _this5.slide(_this5.options.animationSpeed / 1000, "0px");
                            }, 50);
                        }
                        _this5.fadeIn(_this5.domNodes.image, _this5.options.fadeSpeed, function() {
                            _this5.isAnimating = false;
                            _this5.setCaption(captionText, imageWidth);
                        });
                    } else {
                        _this5.isAnimating = false;
                        _this5.setCaption(captionText, imageWidth);
                    }
                    if (_this5.options.additionalHtml && !_this5.domNodes.additionalHtml) {
                        _this5.domNodes.additionalHtml = document.createElement("div");
                        _this5.domNodes.additionalHtml.classList.add("sl-additional-html");
                        _this5.domNodes.additionalHtml.innerHTML = _this5.options.additionalHtml;
                        _this5.domNodes.image.appendChild(_this5.domNodes.additionalHtml);
                    }
                });
            }
        },
        {
            key: "zoomPanElement",
            value: function zoomPanElement(targetOffsetX, targetOffsetY, targetScale) {
                this.currentImage.style[this.transitionPrefix + "transform"] = "translate(" + targetOffsetX + "," + targetOffsetY + ") scale(" + targetScale + ")";
            }
        },
        {
            key: "minMax",
            value: function minMax(value, min, max) {
                return value < min ? min : value > max ? max : value;
            }
        },
        {
            key: "setZoomData",
            value: function setZoomData(initialScale, targetOffsetX, targetOffsetY) {
                this.currentImage.dataset.scale = initialScale;
                this.currentImage.dataset.translateX = targetOffsetX;
                this.currentImage.dataset.translateY = targetOffsetY;
            }
        },
        {
            key: "hashchangeHandler",
            value: function hashchangeHandler() {
                if (this.isOpen && this.hash === this.initialLocationHash) {
                    this.hashReseted = true;
                    this.close();
                }
            }
        },
        {
            key: "addEvents",
            value: function addEvents() {
                var _this6 = this;
                // resize/responsive
                this.addEventListener(window, "resize." + this.eventNamespace, function(event) {
                    //this.adjustImage.bind(this)
                    if (_this6.isOpen) _this6.adjustImage();
                });
                this.addEventListener(this.domNodes.closeButton, [
                    "click." + this.eventNamespace,
                    "touchstart." + this.eventNamespace
                ], this.close.bind(this));
                if (this.options.history) setTimeout(function() {
                    _this6.addEventListener(window, "hashchange." + _this6.eventNamespace, function(event) {
                        if (_this6.isOpen) _this6.hashchangeHandler();
                    });
                }, 40);
                this.addEventListener(this.domNodes.navigation.getElementsByTagName("button"), "click." + this.eventNamespace, function(event) {
                    if (!event.currentTarget.tagName.match(/button/i)) return true;
                    event.preventDefault();
                    _this6.controlCoordinates.swipeDiff = 0;
                    _this6.loadImage(event.currentTarget.classList.contains("sl-next") ? 1 : -1);
                });
                if (this.options.scrollZoom) {
                    var scale = 1;
                    this.addEventListener(this.domNodes.image, [
                        "mousewheel",
                        "DOMMouseScroll"
                    ], function(event) {
                        if (_this6.controlCoordinates.mousedown || _this6.isAnimating || _this6.isClosing || !_this6.isOpen) return true;
                        if (_this6.controlCoordinates.containerHeight == 0) {
                            _this6.controlCoordinates.containerHeight = _this6.getDimensions(_this6.domNodes.image).height;
                            _this6.controlCoordinates.containerWidth = _this6.getDimensions(_this6.domNodes.image).width;
                            _this6.controlCoordinates.imgHeight = _this6.getDimensions(_this6.currentImage).height;
                            _this6.controlCoordinates.imgWidth = _this6.getDimensions(_this6.currentImage).width;
                            _this6.controlCoordinates.containerOffsetX = _this6.domNodes.image.offsetLeft;
                            _this6.controlCoordinates.containerOffsetY = _this6.domNodes.image.offsetTop;
                            _this6.controlCoordinates.initialOffsetX = parseFloat(_this6.currentImage.dataset.translateX);
                            _this6.controlCoordinates.initialOffsetY = parseFloat(_this6.currentImage.dataset.translateY);
                        }
                        event.preventDefault();
                        var delta = event.delta || event.wheelDelta;
                        if (delta === undefined) //we are on firefox
                        delta = event.detail;
                        delta = Math.max(-1, Math.min(1, delta)); // cap the delta to [-1,1] for cross browser consistency
                        // apply zoom
                        scale += delta * _this6.options.scrollZoomFactor * scale;
                        scale = Math.max(1, Math.min(_this6.options.maxZoom, scale));
                        _this6.controlCoordinates.targetScale = scale;
                        var scrollTopPos = document.documentElement.scrollTop || document.body.scrollTop;
                        _this6.controlCoordinates.pinchOffsetX = event.pageX;
                        _this6.controlCoordinates.pinchOffsetY = event.pageY - scrollTopPos || 0; // need to substract the scroll position
                        _this6.controlCoordinates.limitOffsetX = (_this6.controlCoordinates.imgWidth * _this6.controlCoordinates.targetScale - _this6.controlCoordinates.containerWidth) / 2;
                        _this6.controlCoordinates.limitOffsetY = (_this6.controlCoordinates.imgHeight * _this6.controlCoordinates.targetScale - _this6.controlCoordinates.containerHeight) / 2;
                        _this6.controlCoordinates.scaleDifference = _this6.controlCoordinates.targetScale - _this6.controlCoordinates.initialScale;
                        _this6.controlCoordinates.targetOffsetX = _this6.controlCoordinates.imgWidth * _this6.controlCoordinates.targetScale <= _this6.controlCoordinates.containerWidth ? 0 : _this6.minMax(_this6.controlCoordinates.initialOffsetX - (_this6.controlCoordinates.pinchOffsetX - _this6.controlCoordinates.containerOffsetX - _this6.controlCoordinates.containerWidth / 2 - _this6.controlCoordinates.initialOffsetX) / (_this6.controlCoordinates.targetScale - _this6.controlCoordinates.scaleDifference) * _this6.controlCoordinates.scaleDifference, _this6.controlCoordinates.limitOffsetX * -1, _this6.controlCoordinates.limitOffsetX);
                        _this6.controlCoordinates.targetOffsetY = _this6.controlCoordinates.imgHeight * _this6.controlCoordinates.targetScale <= _this6.controlCoordinates.containerHeight ? 0 : _this6.minMax(_this6.controlCoordinates.initialOffsetY - (_this6.controlCoordinates.pinchOffsetY - _this6.controlCoordinates.containerOffsetY - _this6.controlCoordinates.containerHeight / 2 - _this6.controlCoordinates.initialOffsetY) / (_this6.controlCoordinates.targetScale - _this6.controlCoordinates.scaleDifference) * _this6.controlCoordinates.scaleDifference, _this6.controlCoordinates.limitOffsetY * -1, _this6.controlCoordinates.limitOffsetY);
                        _this6.zoomPanElement(_this6.controlCoordinates.targetOffsetX + "px", _this6.controlCoordinates.targetOffsetY + "px", _this6.controlCoordinates.targetScale);
                        if (_this6.controlCoordinates.targetScale > 1) {
                            _this6.controlCoordinates.zoomed = true;
                            if ((!_this6.domNodes.caption.style.opacity || _this6.domNodes.caption.style.opacity > 0) && _this6.domNodes.caption.style.display !== "none") _this6.fadeOut(_this6.domNodes.caption, _this6.options.fadeSpeed);
                        } else {
                            if (_this6.controlCoordinates.initialScale === 1) {
                                _this6.controlCoordinates.zoomed = false;
                                if (_this6.domNodes.caption.style.display === "none") _this6.fadeIn(_this6.domNodes.caption, _this6.options.fadeSpeed);
                            }
                            _this6.controlCoordinates.initialPinchDistance = null;
                            _this6.controlCoordinates.capture = false;
                        }
                        _this6.controlCoordinates.initialPinchDistance = _this6.controlCoordinates.targetPinchDistance;
                        _this6.controlCoordinates.initialScale = _this6.controlCoordinates.targetScale;
                        _this6.controlCoordinates.initialOffsetX = _this6.controlCoordinates.targetOffsetX;
                        _this6.controlCoordinates.initialOffsetY = _this6.controlCoordinates.targetOffsetY;
                        _this6.setZoomData(_this6.controlCoordinates.targetScale, _this6.controlCoordinates.targetOffsetX, _this6.controlCoordinates.targetOffsetY);
                        _this6.zoomPanElement(_this6.controlCoordinates.targetOffsetX + "px", _this6.controlCoordinates.targetOffsetY + "px", _this6.controlCoordinates.targetScale);
                    });
                }
                this.addEventListener(this.domNodes.image, [
                    "touchstart." + this.eventNamespace,
                    "mousedown." + this.eventNamespace
                ], function(event) {
                    if (event.target.tagName === "A" && event.type === "touchstart") return true;
                    if (event.type === "mousedown") {
                        event.preventDefault();
                        _this6.controlCoordinates.initialPointerOffsetX = event.clientX;
                        _this6.controlCoordinates.initialPointerOffsetY = event.clientY;
                        _this6.controlCoordinates.containerHeight = _this6.getDimensions(_this6.domNodes.image).height;
                        _this6.controlCoordinates.containerWidth = _this6.getDimensions(_this6.domNodes.image).width;
                        _this6.controlCoordinates.imgHeight = _this6.getDimensions(_this6.currentImage).height;
                        _this6.controlCoordinates.imgWidth = _this6.getDimensions(_this6.currentImage).width;
                        _this6.controlCoordinates.containerOffsetX = _this6.domNodes.image.offsetLeft;
                        _this6.controlCoordinates.containerOffsetY = _this6.domNodes.image.offsetTop;
                        _this6.controlCoordinates.initialOffsetX = parseFloat(_this6.currentImage.dataset.translateX);
                        _this6.controlCoordinates.initialOffsetY = parseFloat(_this6.currentImage.dataset.translateY);
                        _this6.controlCoordinates.capture = true;
                    } else {
                        _this6.controlCoordinates.touchCount = event.touches.length;
                        _this6.controlCoordinates.initialPointerOffsetX = event.touches[0].clientX;
                        _this6.controlCoordinates.initialPointerOffsetY = event.touches[0].clientY;
                        _this6.controlCoordinates.containerHeight = _this6.getDimensions(_this6.domNodes.image).height;
                        _this6.controlCoordinates.containerWidth = _this6.getDimensions(_this6.domNodes.image).width;
                        _this6.controlCoordinates.imgHeight = _this6.getDimensions(_this6.currentImage).height;
                        _this6.controlCoordinates.imgWidth = _this6.getDimensions(_this6.currentImage).width;
                        _this6.controlCoordinates.containerOffsetX = _this6.domNodes.image.offsetLeft;
                        _this6.controlCoordinates.containerOffsetY = _this6.domNodes.image.offsetTop;
                        if (_this6.controlCoordinates.touchCount === 1) /* Single touch */ {
                            if (!_this6.controlCoordinates.doubleTapped) {
                                _this6.controlCoordinates.doubleTapped = true;
                                setTimeout(function() {
                                    _this6.controlCoordinates.doubleTapped = false;
                                }, 300);
                            } else {
                                _this6.currentImage.classList.add("sl-transition");
                                if (!_this6.controlCoordinates.zoomed) {
                                    _this6.controlCoordinates.initialScale = _this6.options.doubleTapZoom;
                                    _this6.setZoomData(_this6.controlCoordinates.initialScale, 0, 0);
                                    _this6.zoomPanElement("0px", "0px", _this6.controlCoordinates.initialScale);
                                    if ((!_this6.domNodes.caption.style.opacity || _this6.domNodes.caption.style.opacity > 0) && _this6.domNodes.caption.style.display !== "none") _this6.fadeOut(_this6.domNodes.caption, _this6.options.fadeSpeed);
                                    _this6.controlCoordinates.zoomed = true;
                                } else {
                                    _this6.controlCoordinates.initialScale = 1;
                                    _this6.setZoomData(_this6.controlCoordinates.initialScale, 0, 0);
                                    _this6.zoomPanElement("0px", "0px", _this6.controlCoordinates.initialScale);
                                    _this6.controlCoordinates.zoomed = false;
                                }
                                setTimeout(function() {
                                    if (_this6.currentImage) _this6.currentImage.classList.remove("sl-transition");
                                }, 200);
                                return false;
                            }
                            _this6.controlCoordinates.initialOffsetX = parseFloat(_this6.currentImage.dataset.translateX);
                            _this6.controlCoordinates.initialOffsetY = parseFloat(_this6.currentImage.dataset.translateY);
                        } else if (_this6.controlCoordinates.touchCount === 2) /* Pinch */ {
                            _this6.controlCoordinates.initialPointerOffsetX2 = event.touches[1].clientX;
                            _this6.controlCoordinates.initialPointerOffsetY2 = event.touches[1].clientY;
                            _this6.controlCoordinates.initialOffsetX = parseFloat(_this6.currentImage.dataset.translateX);
                            _this6.controlCoordinates.initialOffsetY = parseFloat(_this6.currentImage.dataset.translateY);
                            _this6.controlCoordinates.pinchOffsetX = (_this6.controlCoordinates.initialPointerOffsetX + _this6.controlCoordinates.initialPointerOffsetX2) / 2;
                            _this6.controlCoordinates.pinchOffsetY = (_this6.controlCoordinates.initialPointerOffsetY + _this6.controlCoordinates.initialPointerOffsetY2) / 2;
                            _this6.controlCoordinates.initialPinchDistance = Math.sqrt((_this6.controlCoordinates.initialPointerOffsetX - _this6.controlCoordinates.initialPointerOffsetX2) * (_this6.controlCoordinates.initialPointerOffsetX - _this6.controlCoordinates.initialPointerOffsetX2) + (_this6.controlCoordinates.initialPointerOffsetY - _this6.controlCoordinates.initialPointerOffsetY2) * (_this6.controlCoordinates.initialPointerOffsetY - _this6.controlCoordinates.initialPointerOffsetY2));
                        }
                        _this6.controlCoordinates.capture = true;
                    }
                    if (_this6.controlCoordinates.mousedown) return true;
                    if (_this6.transitionCapable) _this6.controlCoordinates.imageLeft = parseInt(_this6.domNodes.image.style.left, 10);
                    _this6.controlCoordinates.mousedown = true;
                    _this6.controlCoordinates.swipeDiff = 0;
                    _this6.controlCoordinates.swipeYDiff = 0;
                    _this6.controlCoordinates.swipeStart = event.pageX || event.touches[0].pageX;
                    _this6.controlCoordinates.swipeYStart = event.pageY || event.touches[0].pageY;
                    return false;
                });
                this.addEventListener(this.domNodes.image, [
                    "touchmove." + this.eventNamespace,
                    "mousemove." + this.eventNamespace,
                    "MSPointerMove"
                ], function(event) {
                    if (!_this6.controlCoordinates.mousedown) return true;
                    if (event.type === "touchmove") {
                        if (_this6.controlCoordinates.capture === false) return false;
                        _this6.controlCoordinates.pointerOffsetX = event.touches[0].clientX;
                        _this6.controlCoordinates.pointerOffsetY = event.touches[0].clientY;
                        _this6.controlCoordinates.touchCount = event.touches.length;
                        _this6.controlCoordinates.touchmoveCount++;
                        if (_this6.controlCoordinates.touchCount > 1) /* Pinch */ {
                            _this6.controlCoordinates.pointerOffsetX2 = event.touches[1].clientX;
                            _this6.controlCoordinates.pointerOffsetY2 = event.touches[1].clientY;
                            _this6.controlCoordinates.targetPinchDistance = Math.sqrt((_this6.controlCoordinates.pointerOffsetX - _this6.controlCoordinates.pointerOffsetX2) * (_this6.controlCoordinates.pointerOffsetX - _this6.controlCoordinates.pointerOffsetX2) + (_this6.controlCoordinates.pointerOffsetY - _this6.controlCoordinates.pointerOffsetY2) * (_this6.controlCoordinates.pointerOffsetY - _this6.controlCoordinates.pointerOffsetY2));
                            if (_this6.controlCoordinates.initialPinchDistance === null) _this6.controlCoordinates.initialPinchDistance = _this6.controlCoordinates.targetPinchDistance;
                            if (Math.abs(_this6.controlCoordinates.initialPinchDistance - _this6.controlCoordinates.targetPinchDistance) >= 1) {
                                /* Initialize helpers */ _this6.controlCoordinates.targetScale = _this6.minMax(_this6.controlCoordinates.targetPinchDistance / _this6.controlCoordinates.initialPinchDistance * _this6.controlCoordinates.initialScale, 1, _this6.options.maxZoom);
                                _this6.controlCoordinates.limitOffsetX = (_this6.controlCoordinates.imgWidth * _this6.controlCoordinates.targetScale - _this6.controlCoordinates.containerWidth) / 2;
                                _this6.controlCoordinates.limitOffsetY = (_this6.controlCoordinates.imgHeight * _this6.controlCoordinates.targetScale - _this6.controlCoordinates.containerHeight) / 2;
                                _this6.controlCoordinates.scaleDifference = _this6.controlCoordinates.targetScale - _this6.controlCoordinates.initialScale;
                                _this6.controlCoordinates.targetOffsetX = _this6.controlCoordinates.imgWidth * _this6.controlCoordinates.targetScale <= _this6.controlCoordinates.containerWidth ? 0 : _this6.minMax(_this6.controlCoordinates.initialOffsetX - (_this6.controlCoordinates.pinchOffsetX - _this6.controlCoordinates.containerOffsetX - _this6.controlCoordinates.containerWidth / 2 - _this6.controlCoordinates.initialOffsetX) / (_this6.controlCoordinates.targetScale - _this6.controlCoordinates.scaleDifference) * _this6.controlCoordinates.scaleDifference, _this6.controlCoordinates.limitOffsetX * -1, _this6.controlCoordinates.limitOffsetX);
                                _this6.controlCoordinates.targetOffsetY = _this6.controlCoordinates.imgHeight * _this6.controlCoordinates.targetScale <= _this6.controlCoordinates.containerHeight ? 0 : _this6.minMax(_this6.controlCoordinates.initialOffsetY - (_this6.controlCoordinates.pinchOffsetY - _this6.controlCoordinates.containerOffsetY - _this6.controlCoordinates.containerHeight / 2 - _this6.controlCoordinates.initialOffsetY) / (_this6.controlCoordinates.targetScale - _this6.controlCoordinates.scaleDifference) * _this6.controlCoordinates.scaleDifference, _this6.controlCoordinates.limitOffsetY * -1, _this6.controlCoordinates.limitOffsetY);
                                _this6.zoomPanElement(_this6.controlCoordinates.targetOffsetX + "px", _this6.controlCoordinates.targetOffsetY + "px", _this6.controlCoordinates.targetScale);
                                if (_this6.controlCoordinates.targetScale > 1) {
                                    _this6.controlCoordinates.zoomed = true;
                                    if ((!_this6.domNodes.caption.style.opacity || _this6.domNodes.caption.style.opacity > 0) && _this6.domNodes.caption.style.display !== "none") _this6.fadeOut(_this6.domNodes.caption, _this6.options.fadeSpeed);
                                }
                                _this6.controlCoordinates.initialPinchDistance = _this6.controlCoordinates.targetPinchDistance;
                                _this6.controlCoordinates.initialScale = _this6.controlCoordinates.targetScale;
                                _this6.controlCoordinates.initialOffsetX = _this6.controlCoordinates.targetOffsetX;
                                _this6.controlCoordinates.initialOffsetY = _this6.controlCoordinates.targetOffsetY;
                            }
                        } else {
                            _this6.controlCoordinates.targetScale = _this6.controlCoordinates.initialScale;
                            _this6.controlCoordinates.limitOffsetX = (_this6.controlCoordinates.imgWidth * _this6.controlCoordinates.targetScale - _this6.controlCoordinates.containerWidth) / 2;
                            _this6.controlCoordinates.limitOffsetY = (_this6.controlCoordinates.imgHeight * _this6.controlCoordinates.targetScale - _this6.controlCoordinates.containerHeight) / 2;
                            _this6.controlCoordinates.targetOffsetX = _this6.controlCoordinates.imgWidth * _this6.controlCoordinates.targetScale <= _this6.controlCoordinates.containerWidth ? 0 : _this6.minMax(_this6.controlCoordinates.pointerOffsetX - (_this6.controlCoordinates.initialPointerOffsetX - _this6.controlCoordinates.initialOffsetX), _this6.controlCoordinates.limitOffsetX * -1, _this6.controlCoordinates.limitOffsetX);
                            _this6.controlCoordinates.targetOffsetY = _this6.controlCoordinates.imgHeight * _this6.controlCoordinates.targetScale <= _this6.controlCoordinates.containerHeight ? 0 : _this6.minMax(_this6.controlCoordinates.pointerOffsetY - (_this6.controlCoordinates.initialPointerOffsetY - _this6.controlCoordinates.initialOffsetY), _this6.controlCoordinates.limitOffsetY * -1, _this6.controlCoordinates.limitOffsetY);
                            if (Math.abs(_this6.controlCoordinates.targetOffsetX) === Math.abs(_this6.controlCoordinates.limitOffsetX)) {
                                _this6.controlCoordinates.initialOffsetX = _this6.controlCoordinates.targetOffsetX;
                                _this6.controlCoordinates.initialPointerOffsetX = _this6.controlCoordinates.pointerOffsetX;
                            }
                            if (Math.abs(_this6.controlCoordinates.targetOffsetY) === Math.abs(_this6.controlCoordinates.limitOffsetY)) {
                                _this6.controlCoordinates.initialOffsetY = _this6.controlCoordinates.targetOffsetY;
                                _this6.controlCoordinates.initialPointerOffsetY = _this6.controlCoordinates.pointerOffsetY;
                            }
                            _this6.setZoomData(_this6.controlCoordinates.initialScale, _this6.controlCoordinates.targetOffsetX, _this6.controlCoordinates.targetOffsetY);
                            _this6.zoomPanElement(_this6.controlCoordinates.targetOffsetX + "px", _this6.controlCoordinates.targetOffsetY + "px", _this6.controlCoordinates.targetScale);
                        }
                    }
                    /* Mouse Move implementation */ if (event.type === "mousemove" && _this6.controlCoordinates.mousedown) {
                        if (event.type == "touchmove") return true;
                        event.preventDefault();
                        if (_this6.controlCoordinates.capture === false) return false;
                        _this6.controlCoordinates.pointerOffsetX = event.clientX;
                        _this6.controlCoordinates.pointerOffsetY = event.clientY;
                        _this6.controlCoordinates.targetScale = _this6.controlCoordinates.initialScale;
                        _this6.controlCoordinates.limitOffsetX = (_this6.controlCoordinates.imgWidth * _this6.controlCoordinates.targetScale - _this6.controlCoordinates.containerWidth) / 2;
                        _this6.controlCoordinates.limitOffsetY = (_this6.controlCoordinates.imgHeight * _this6.controlCoordinates.targetScale - _this6.controlCoordinates.containerHeight) / 2;
                        _this6.controlCoordinates.targetOffsetX = _this6.controlCoordinates.imgWidth * _this6.controlCoordinates.targetScale <= _this6.controlCoordinates.containerWidth ? 0 : _this6.minMax(_this6.controlCoordinates.pointerOffsetX - (_this6.controlCoordinates.initialPointerOffsetX - _this6.controlCoordinates.initialOffsetX), _this6.controlCoordinates.limitOffsetX * -1, _this6.controlCoordinates.limitOffsetX);
                        _this6.controlCoordinates.targetOffsetY = _this6.controlCoordinates.imgHeight * _this6.controlCoordinates.targetScale <= _this6.controlCoordinates.containerHeight ? 0 : _this6.minMax(_this6.controlCoordinates.pointerOffsetY - (_this6.controlCoordinates.initialPointerOffsetY - _this6.controlCoordinates.initialOffsetY), _this6.controlCoordinates.limitOffsetY * -1, _this6.controlCoordinates.limitOffsetY);
                        if (Math.abs(_this6.controlCoordinates.targetOffsetX) === Math.abs(_this6.controlCoordinates.limitOffsetX)) {
                            _this6.controlCoordinates.initialOffsetX = _this6.controlCoordinates.targetOffsetX;
                            _this6.controlCoordinates.initialPointerOffsetX = _this6.controlCoordinates.pointerOffsetX;
                        }
                        if (Math.abs(_this6.controlCoordinates.targetOffsetY) === Math.abs(_this6.controlCoordinates.limitOffsetY)) {
                            _this6.controlCoordinates.initialOffsetY = _this6.controlCoordinates.targetOffsetY;
                            _this6.controlCoordinates.initialPointerOffsetY = _this6.controlCoordinates.pointerOffsetY;
                        }
                        _this6.setZoomData(_this6.controlCoordinates.initialScale, _this6.controlCoordinates.targetOffsetX, _this6.controlCoordinates.targetOffsetY);
                        _this6.zoomPanElement(_this6.controlCoordinates.targetOffsetX + "px", _this6.controlCoordinates.targetOffsetY + "px", _this6.controlCoordinates.targetScale);
                    }
                    if (!_this6.controlCoordinates.zoomed) {
                        _this6.controlCoordinates.swipeEnd = event.pageX || event.touches[0].pageX;
                        _this6.controlCoordinates.swipeYEnd = event.pageY || event.touches[0].pageY;
                        _this6.controlCoordinates.swipeDiff = _this6.controlCoordinates.swipeStart - _this6.controlCoordinates.swipeEnd;
                        _this6.controlCoordinates.swipeYDiff = _this6.controlCoordinates.swipeYStart - _this6.controlCoordinates.swipeYEnd;
                        if (_this6.options.animationSlide) _this6.slide(0, -_this6.controlCoordinates.swipeDiff + "px");
                    }
                });
                this.addEventListener(this.domNodes.image, [
                    "touchend." + this.eventNamespace,
                    "mouseup." + this.eventNamespace,
                    "touchcancel." + this.eventNamespace,
                    "mouseleave." + this.eventNamespace,
                    "pointerup",
                    "pointercancel",
                    "MSPointerUp",
                    "MSPointerCancel"
                ], function(event) {
                    if (_this6.isTouchDevice && event.type === "touchend") {
                        _this6.controlCoordinates.touchCount = event.touches.length;
                        if (_this6.controlCoordinates.touchCount === 0) /* No touch */ {
                            /* Set attributes */ if (_this6.currentImage) _this6.setZoomData(_this6.controlCoordinates.initialScale, _this6.controlCoordinates.targetOffsetX, _this6.controlCoordinates.targetOffsetY);
                            if (_this6.controlCoordinates.initialScale === 1) {
                                _this6.controlCoordinates.zoomed = false;
                                if (_this6.domNodes.caption.style.display === "none") _this6.fadeIn(_this6.domNodes.caption, _this6.options.fadeSpeed);
                            }
                            _this6.controlCoordinates.initialPinchDistance = null;
                            _this6.controlCoordinates.capture = false;
                        } else if (_this6.controlCoordinates.touchCount === 1) /* Single touch */ {
                            _this6.controlCoordinates.initialPointerOffsetX = event.touches[0].clientX;
                            _this6.controlCoordinates.initialPointerOffsetY = event.touches[0].clientY;
                        } else if (_this6.controlCoordinates.touchCount > 1) _this6.controlCoordinates.initialPinchDistance = null;
                    }
                    if (_this6.controlCoordinates.mousedown) {
                        _this6.controlCoordinates.mousedown = false;
                        var possibleDir = true;
                        if (!_this6.options.loop) {
                            if (_this6.currentImageIndex === 0 && _this6.controlCoordinates.swipeDiff < 0) possibleDir = false;
                            if (_this6.currentImageIndex >= _this6.relatedElements.length - 1 && _this6.controlCoordinates.swipeDiff > 0) possibleDir = false;
                        }
                        if (Math.abs(_this6.controlCoordinates.swipeDiff) > _this6.options.swipeTolerance && possibleDir) _this6.loadImage(_this6.controlCoordinates.swipeDiff > 0 ? 1 : -1);
                        else if (_this6.options.animationSlide) _this6.slide(_this6.options.animationSpeed / 1000, "0px");
                        if (_this6.options.swipeClose && Math.abs(_this6.controlCoordinates.swipeYDiff) > 50 && Math.abs(_this6.controlCoordinates.swipeDiff) < _this6.options.swipeTolerance) _this6.close();
                    }
                });
                this.addEventListener(this.domNodes.image, [
                    "dblclick"
                ], function(event) {
                    if (_this6.isTouchDevice) return;
                    _this6.controlCoordinates.initialPointerOffsetX = event.clientX;
                    _this6.controlCoordinates.initialPointerOffsetY = event.clientY;
                    _this6.controlCoordinates.containerHeight = _this6.getDimensions(_this6.domNodes.image).height;
                    _this6.controlCoordinates.containerWidth = _this6.getDimensions(_this6.domNodes.image).width;
                    _this6.controlCoordinates.imgHeight = _this6.getDimensions(_this6.currentImage).height;
                    _this6.controlCoordinates.imgWidth = _this6.getDimensions(_this6.currentImage).width;
                    _this6.controlCoordinates.containerOffsetX = _this6.domNodes.image.offsetLeft;
                    _this6.controlCoordinates.containerOffsetY = _this6.domNodes.image.offsetTop;
                    _this6.currentImage.classList.add("sl-transition");
                    if (!_this6.controlCoordinates.zoomed) {
                        _this6.controlCoordinates.initialScale = _this6.options.doubleTapZoom;
                        _this6.setZoomData(_this6.controlCoordinates.initialScale, 0, 0);
                        _this6.zoomPanElement("0px", "0px", _this6.controlCoordinates.initialScale);
                        if ((!_this6.domNodes.caption.style.opacity || _this6.domNodes.caption.style.opacity > 0) && _this6.domNodes.caption.style.display !== "none") _this6.fadeOut(_this6.domNodes.caption, _this6.options.fadeSpeed);
                        _this6.controlCoordinates.zoomed = true;
                    } else {
                        _this6.controlCoordinates.initialScale = 1;
                        _this6.setZoomData(_this6.controlCoordinates.initialScale, 0, 0);
                        _this6.zoomPanElement("0px", "0px", _this6.controlCoordinates.initialScale);
                        _this6.controlCoordinates.zoomed = false;
                        if (_this6.domNodes.caption.style.display === "none") _this6.fadeIn(_this6.domNodes.caption, _this6.options.fadeSpeed);
                    }
                    setTimeout(function() {
                        if (_this6.currentImage) {
                            _this6.currentImage.classList.remove("sl-transition");
                            _this6.currentImage.style[_this6.transitionPrefix + "transform-origin"] = null;
                        }
                    }, 200);
                    _this6.controlCoordinates.capture = true;
                    return false;
                });
            }
        },
        {
            key: "getDimensions",
            value: function getDimensions(element) {
                var styles = window.getComputedStyle(element), height = element.offsetHeight, width = element.offsetWidth, borderTopWidth = parseFloat(styles.borderTopWidth), borderBottomWidth = parseFloat(styles.borderBottomWidth), paddingTop = parseFloat(styles.paddingTop), paddingBottom = parseFloat(styles.paddingBottom), borderLeftWidth = parseFloat(styles.borderLeftWidth), borderRightWidth = parseFloat(styles.borderRightWidth), paddingLeft = parseFloat(styles.paddingLeft), paddingRight = parseFloat(styles.paddingRight);
                return {
                    height: height - borderBottomWidth - borderTopWidth - paddingTop - paddingBottom,
                    width: width - borderLeftWidth - borderRightWidth - paddingLeft - paddingRight
                };
            }
        },
        {
            key: "updateHash",
            value: function updateHash() {
                var newHash = "pid=" + (this.currentImageIndex + 1), newURL = window.location.href.split("#")[0] + "#" + newHash;
                this.hashReseted = false;
                if (this.pushStateSupport) window.history[this.historyHasChanges ? "replaceState" : "pushState"]("", document.title, newURL);
                else // what is the browser target of this?
                if (this.historyHasChanges) window.location.replace(newURL);
                else window.location.hash = newHash;
                if (!this.historyHasChanges) this.urlChangedOnce = true;
                this.historyHasChanges = true;
            }
        },
        {
            key: "resetHash",
            value: function resetHash() {
                this.hashReseted = true;
                if (this.urlChangedOnce) history.back();
                else if (this.pushStateSupport) history.pushState("", document.title, window.location.pathname + window.location.search);
                else window.location.hash = "";
                //
                //in case an history operation is still pending
                clearTimeout(this.historyUpdateTimeout);
            }
        },
        {
            key: "updateURL",
            value: function updateURL() {
                clearTimeout(this.historyUpdateTimeout);
                if (!this.historyHasChanges) this.updateHash(); // first time
                else this.historyUpdateTimeout = setTimeout(this.updateHash.bind(this), 800);
            }
        },
        {
            key: "setCaption",
            value: function setCaption(captionText, imageWidth) {
                var _this7 = this;
                if (this.options.captions && captionText && captionText !== "" && typeof captionText !== "undefined") {
                    this.hide(this.domNodes.caption);
                    this.domNodes.caption.style.width = imageWidth + "px";
                    this.domNodes.caption.innerHTML = captionText;
                    this.domNodes.image.appendChild(this.domNodes.caption);
                    setTimeout(function() {
                        _this7.fadeIn(_this7.domNodes.caption, _this7.options.fadeSpeed);
                    }, this.options.captionDelay);
                }
            }
        },
        {
            key: "slide",
            value: function slide(speed, pos) {
                if (!this.transitionCapable) return this.domNodes.image.style.left = pos;
                this.domNodes.image.style[this.transitionPrefix + "transform"] = "translateX(" + pos + ")";
                this.domNodes.image.style[this.transitionPrefix + "transition"] = this.transitionPrefix + "transform " + speed + "s linear";
            }
        },
        {
            key: "getRelated",
            value: function getRelated(rel) {
                var elems;
                if (rel && rel !== false && rel !== "nofollow") elems = Array.from(this.elements).filter(function(element) {
                    return element.getAttribute("rel") === rel;
                });
                else elems = this.elements;
                return elems;
            }
        },
        {
            key: "openImage",
            value: function openImage(element) {
                var _this8 = this;
                element.dispatchEvent(new Event("show." + this.eventNamespace));
                if (this.options.disableScroll) this.globalScrollbarWidth = this.toggleScrollbar("hide");
                if (this.options.htmlClass && this.options.htmlClass !== "") document.querySelector("html").classList.add(this.options.htmlClass);
                document.body.appendChild(this.domNodes.wrapper);
                this.domNodes.wrapper.appendChild(this.domNodes.image);
                if (this.options.overlay) document.body.appendChild(this.domNodes.overlay);
                this.relatedElements = this.getRelated(element.rel);
                if (this.options.showCounter) {
                    if (this.relatedElements.length == 1 && this.domNodes.wrapper.contains(this.domNodes.counter)) this.domNodes.wrapper.removeChild(this.domNodes.counter);
                    else if (this.relatedElements.length > 1 && !this.domNodes.wrapper.contains(this.domNodes.counter)) this.domNodes.wrapper.appendChild(this.domNodes.counter);
                }
                this.isAnimating = true;
                this.currentImageIndex = this.relatedElements.indexOf(element);
                var targetURL = element.getAttribute(this.options.sourceAttr);
                this.currentImage = document.createElement("img");
                this.currentImage.style.display = "none";
                this.currentImage.setAttribute("src", targetURL);
                this.currentImage.dataset.scale = 1;
                this.currentImage.dataset.translateX = 0;
                this.currentImage.dataset.translateY = 0;
                if (this.loadedImages.indexOf(targetURL) === -1) this.loadedImages.push(targetURL);
                this.domNodes.image.innerHTML = "";
                this.domNodes.image.setAttribute("style", "");
                this.domNodes.image.appendChild(this.currentImage);
                this.fadeIn(this.domNodes.overlay, this.options.fadeSpeed);
                this.fadeIn([
                    this.domNodes.counter,
                    this.domNodes.navigation,
                    this.domNodes.closeButton
                ], this.options.fadeSpeed);
                this.show(this.domNodes.spinner);
                this.domNodes.counter.querySelector(".sl-current").innerHTML = this.currentImageIndex + 1;
                this.domNodes.counter.querySelector(".sl-total").innerHTML = this.relatedElements.length;
                this.adjustImage();
                if (this.options.preloading) this.preload();
                setTimeout(function() {
                    element.dispatchEvent(new Event("shown." + _this8.eventNamespace));
                }, this.options.animationSpeed);
            }
        },
        {
            key: "forceFocus",
            value: function forceFocus() {
                var _this9 = this;
                this.removeEventListener(document, "focusin." + this.eventNamespace);
                this.addEventListener(document, "focusin." + this.eventNamespace, function(event) {
                    if (document !== event.target && _this9.domNodes.wrapper !== event.target && !_this9.domNodes.wrapper.contains(event.target)) _this9.domNodes.wrapper.focus();
                });
            }
        },
        {
            key: "addEventListener",
            value: function addEventListener(elements, events, callback, opts) {
                elements = this.wrap(elements);
                events = this.wrap(events);
                var _iterator = _createForOfIteratorHelper(elements), _step;
                try {
                    for(_iterator.s(); !(_step = _iterator.n()).done;){
                        var element = _step.value;
                        if (!element.namespaces) element.namespaces = {};
                         // save the namespaces addEventListener the DOM element itself
                        var _iterator2 = _createForOfIteratorHelper(events), _step2;
                        try {
                            for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
                                var event = _step2.value;
                                var options = opts || false;
                                var needsPassiveFix = [
                                    "touchstart",
                                    "touchmove",
                                    "mousewheel",
                                    "DOMMouseScroll"
                                ].indexOf(event.split(".")[0]) >= 0;
                                if (needsPassiveFix && this.isPassiveEventsSupported) {
                                    if (_typeof(options) === "object") options.passive = true;
                                    else options = {
                                        passive: true
                                    };
                                }
                                element.namespaces[event] = callback;
                                element.addEventListener(event.split(".")[0], callback, options);
                            }
                        } catch (err) {
                            _iterator2.e(err);
                        } finally{
                            _iterator2.f();
                        }
                    }
                } catch (err) {
                    _iterator.e(err);
                } finally{
                    _iterator.f();
                }
            }
        },
        {
            key: "removeEventListener",
            value: function removeEventListener(elements, events) {
                elements = this.wrap(elements);
                events = this.wrap(events);
                var _iterator3 = _createForOfIteratorHelper(elements), _step3;
                try {
                    for(_iterator3.s(); !(_step3 = _iterator3.n()).done;){
                        var element = _step3.value;
                        var _iterator4 = _createForOfIteratorHelper(events), _step4;
                        try {
                            for(_iterator4.s(); !(_step4 = _iterator4.n()).done;){
                                var event = _step4.value;
                                if (element.namespaces && element.namespaces[event]) {
                                    element.removeEventListener(event.split(".")[0], element.namespaces[event]);
                                    delete element.namespaces[event];
                                }
                            }
                        } catch (err) {
                            _iterator4.e(err);
                        } finally{
                            _iterator4.f();
                        }
                    }
                } catch (err) {
                    _iterator3.e(err);
                } finally{
                    _iterator3.f();
                }
            }
        },
        {
            key: "fadeOut",
            value: function fadeOut(elements, duration, callback) {
                var _this10 = this;
                elements = this.wrap(elements);
                var _iterator5 = _createForOfIteratorHelper(elements), _step5;
                try {
                    for(_iterator5.s(); !(_step5 = _iterator5.n()).done;){
                        var element = _step5.value;
                        element.style.opacity = parseFloat(element) || window.getComputedStyle(element).getPropertyValue("opacity");
                    }
                } catch (err1) {
                    _iterator5.e(err1);
                } finally{
                    _iterator5.f();
                }
                this.isFadeIn = false;
                var step = 16.66666 / (duration || this.options.fadeSpeed), fade1 = function fade() {
                    var currentOpacity = parseFloat(elements[0].style.opacity);
                    if ((currentOpacity -= step) < 0) {
                        var _iterator6 = _createForOfIteratorHelper(elements), _step6;
                        try {
                            for(_iterator6.s(); !(_step6 = _iterator6.n()).done;){
                                var element = _step6.value;
                                element.style.display = "none";
                                // element.style.opacity = '';
                                element.style.opacity = 1;
                            }
                        } catch (err) {
                            _iterator6.e(err);
                        } finally{
                            _iterator6.f();
                        }
                        callback && callback.call(_this10, elements);
                    } else {
                        var _iterator7 = _createForOfIteratorHelper(elements), _step7;
                        try {
                            for(_iterator7.s(); !(_step7 = _iterator7.n()).done;){
                                var _element = _step7.value;
                                _element.style.opacity = currentOpacity;
                            }
                        } catch (err) {
                            _iterator7.e(err);
                        } finally{
                            _iterator7.f();
                        }
                        requestAnimationFrame(fade);
                    }
                };
                fade1();
            }
        },
        {
            key: "fadeIn",
            value: function fadeIn(elements, duration, callback, display) {
                var _this11 = this;
                elements = this.wrap(elements);
                var _iterator8 = _createForOfIteratorHelper(elements), _step8;
                try {
                    for(_iterator8.s(); !(_step8 = _iterator8.n()).done;){
                        var element = _step8.value;
                        element.style.opacity = 0;
                        element.style.display = display || "block";
                    }
                } catch (err2) {
                    _iterator8.e(err2);
                } finally{
                    _iterator8.f();
                }
                this.isFadeIn = true;
                var opacityTarget = parseFloat(elements[0].dataset.opacityTarget || 1), step = 16.66666 * opacityTarget / (duration || this.options.fadeSpeed), fade2 = function fade() {
                    var currentOpacity = parseFloat(elements[0].style.opacity);
                    if (!((currentOpacity += step) > opacityTarget)) {
                        var _iterator9 = _createForOfIteratorHelper(elements), _step9;
                        try {
                            for(_iterator9.s(); !(_step9 = _iterator9.n()).done;){
                                var element = _step9.value;
                                element.style.opacity = currentOpacity;
                            }
                        } catch (err) {
                            _iterator9.e(err);
                        } finally{
                            _iterator9.f();
                        }
                        if (!_this11.isFadeIn) return;
                        requestAnimationFrame(fade);
                    } else {
                        var _iterator10 = _createForOfIteratorHelper(elements), _step10;
                        try {
                            for(_iterator10.s(); !(_step10 = _iterator10.n()).done;){
                                var _element2 = _step10.value;
                                _element2.style.opacity = opacityTarget;
                            }
                        } catch (err) {
                            _iterator10.e(err);
                        } finally{
                            _iterator10.f();
                        }
                        callback && callback.call(_this11, elements);
                    }
                };
                fade2();
            }
        },
        {
            key: "hide",
            value: function hide(elements) {
                elements = this.wrap(elements);
                var _iterator11 = _createForOfIteratorHelper(elements), _step11;
                try {
                    for(_iterator11.s(); !(_step11 = _iterator11.n()).done;){
                        var element = _step11.value;
                        if (element.style.display != "none") element.dataset.initialDisplay = element.style.display;
                        element.style.display = "none";
                    }
                } catch (err) {
                    _iterator11.e(err);
                } finally{
                    _iterator11.f();
                }
            }
        },
        {
            key: "show",
            value: function show(elements, display) {
                elements = this.wrap(elements);
                var _iterator12 = _createForOfIteratorHelper(elements), _step12;
                try {
                    for(_iterator12.s(); !(_step12 = _iterator12.n()).done;){
                        var element = _step12.value;
                        element.style.display = element.dataset.initialDisplay || display || "block";
                    }
                } catch (err) {
                    _iterator12.e(err);
                } finally{
                    _iterator12.f();
                }
            }
        },
        {
            key: "wrap",
            value: function wrap(input) {
                return typeof input[Symbol.iterator] === "function" && typeof input !== "string" ? input : [
                    input
                ];
            }
        },
        {
            key: "on",
            value: function on(events, callback) {
                events = this.wrap(events);
                var _iterator13 = _createForOfIteratorHelper(this.elements), _step13;
                try {
                    for(_iterator13.s(); !(_step13 = _iterator13.n()).done;){
                        var element = _step13.value;
                        if (!element.fullyNamespacedEvents) element.fullyNamespacedEvents = {};
                        var _iterator14 = _createForOfIteratorHelper(events), _step14;
                        try {
                            for(_iterator14.s(); !(_step14 = _iterator14.n()).done;){
                                var event = _step14.value;
                                element.fullyNamespacedEvents[event] = callback;
                                element.addEventListener(event, callback);
                            }
                        } catch (err) {
                            _iterator14.e(err);
                        } finally{
                            _iterator14.f();
                        }
                    }
                } catch (err) {
                    _iterator13.e(err);
                } finally{
                    _iterator13.f();
                }
                return this;
            }
        },
        {
            key: "off",
            value: function off(events) {
                events = this.wrap(events);
                var _iterator15 = _createForOfIteratorHelper(this.elements), _step15;
                try {
                    for(_iterator15.s(); !(_step15 = _iterator15.n()).done;){
                        var element = _step15.value;
                        var _iterator16 = _createForOfIteratorHelper(events), _step16;
                        try {
                            for(_iterator16.s(); !(_step16 = _iterator16.n()).done;){
                                var event = _step16.value;
                                if (typeof element.fullyNamespacedEvents !== "undefined" && event in element.fullyNamespacedEvents) element.removeEventListener(event, element.fullyNamespacedEvents[event]);
                            }
                        } catch (err) {
                            _iterator16.e(err);
                        } finally{
                            _iterator16.f();
                        }
                    }
                } catch (err) {
                    _iterator15.e(err);
                } finally{
                    _iterator15.f();
                }
                return this;
            }
        },
        {
            key: "open",
            value: function open(elem) {
                elem = elem || this.elements[0];
                if (typeof jQuery !== "undefined" && elem instanceof jQuery) elem = elem.get(0);
                this.initialImageIndex = this.elements.indexOf(elem);
                if (this.initialImageIndex > -1) this.openImage(elem);
            }
        },
        {
            key: "next",
            value: function next() {
                this.loadImage(1);
            }
        },
        {
            key: "prev",
            value: function prev() {
                this.loadImage(-1);
            }
        },
        {
            key: "getLighboxData",
            value: function getLighboxData() {
                return {
                    currentImageIndex: this.currentImageIndex,
                    currentImage: this.currentImage,
                    globalScrollbarWidth: this.globalScrollbarWidth
                };
            }
        },
        {
            key: "destroy",
            value: function destroy() {
                //remove all custom event listeners from elements
                this.off([
                    "close." + this.eventNamespace,
                    "closed." + this.eventNamespace,
                    "nextImageLoaded." + this.eventNamespace,
                    "prevImageLoaded." + this.eventNamespace,
                    "change." + this.eventNamespace,
                    "nextDone." + this.eventNamespace,
                    "prevDone." + this.eventNamespace,
                    "error." + this.eventNamespace,
                    "changed." + this.eventNamespace,
                    "next." + this.eventNamespace,
                    "prev." + this.eventNamespace,
                    "show." + this.eventNamespace,
                    "shown." + this.eventNamespace
                ]);
                this.removeEventListener(this.elements, "click." + this.eventNamespace);
                this.removeEventListener(document, "focusin." + this.eventNamespace);
                this.removeEventListener(document.body, "contextmenu." + this.eventNamespace);
                this.removeEventListener(document.body, "keyup." + this.eventNamespace);
                this.removeEventListener(this.domNodes.navigation.getElementsByTagName("button"), "click." + this.eventNamespace);
                this.removeEventListener(this.domNodes.closeButton, "click." + this.eventNamespace);
                this.removeEventListener(window, "resize." + this.eventNamespace);
                this.removeEventListener(window, "hashchange." + this.eventNamespace);
                this.close();
                if (this.isOpen) {
                    document.body.removeChild(this.domNodes.wrapper);
                    document.body.removeChild(this.domNodes.overlay);
                }
                this.elements = null;
            }
        },
        {
            key: "refresh",
            value: function refresh() {
                if (!this.initialSelector) throw "refreshing only works when you initialize using a selector!";
                var options = this.options, selector = this.initialSelector;
                this.destroy();
                this.constructor(selector, options);
                return this;
            }
        }
    ]);
    return SimpleLightbox1;
}();
var _default = SimpleLightbox;
exports["default"] = _default;
global.SimpleLightbox = SimpleLightbox;

},{}],"kaxSc":[function() {},{}],"eXQLZ":[function(require,module,exports) {
var global = arguments[3];
/*
* Notiflix Notify AIO (https://notiflix.github.io)
* Description: This file has been created automatically that using "notiflix.js", and "notiflix.css" files.
* Version: 3.2.5
* Author: Furkan MT (https://github.com/furcan)
* Copyright 2019 - 2022 Notiflix, MIT Licence (https://opensource.org/licenses/MIT)
*/ /* global define */ (function(root, factory) {
    if (typeof define === "function" && define.amd) define([], function() {
        return factory(root);
    });
    else if (typeof module.exports === "object") module.exports = factory(root);
    else root.Notiflix = factory(root);
})(typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : this, function(window) {
    "use strict";
    // COMMON: SSR check: begin
    if (typeof window === "undefined" && typeof window.document === "undefined") return false;
    // COMMON: SSR check: end
    // COMMON: Variables: begin
    var notiflixNamespace = "Notiflix";
    var notiflixConsoleDocs = "\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation";
    var defaultFontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif';
    // COMMON: Variables: end
    // NOTIFY: Default Settings: begin
    var typesNotify = {
        Success: "Success",
        Failure: "Failure",
        Warning: "Warning",
        Info: "Info"
    };
    var newNotifySettings;
    var notifySettings = {
        wrapID: "NotiflixNotifyWrap",
        overlayID: "NotiflixNotifyOverlay",
        width: "280px",
        position: "right-top",
        distance: "10px",
        opacity: 1,
        borderRadius: "5px",
        rtl: false,
        timeout: 3000,
        messageMaxLength: 110,
        backOverlay: false,
        backOverlayColor: "rgba(0,0,0,0.5)",
        plainText: true,
        showOnlyTheLastOne: false,
        clickToClose: false,
        pauseOnHover: true,
        ID: "NotiflixNotify",
        className: "notiflix-notify",
        zindex: 4001,
        fontFamily: "Quicksand",
        fontSize: "13px",
        cssAnimation: true,
        cssAnimationDuration: 400,
        cssAnimationStyle: "fade",
        closeButton: false,
        useIcon: true,
        useFontAwesome: false,
        fontAwesomeIconStyle: "basic",
        fontAwesomeIconSize: "34px",
        success: {
            background: "#32c682",
            textColor: "#fff",
            childClassName: "notiflix-notify-success",
            notiflixIconColor: "rgba(0,0,0,0.2)",
            fontAwesomeClassName: "fas fa-check-circle",
            fontAwesomeIconColor: "rgba(0,0,0,0.2)",
            backOverlayColor: "rgba(50,198,130,0.2)"
        },
        failure: {
            background: "#ff5549",
            textColor: "#fff",
            childClassName: "notiflix-notify-failure",
            notiflixIconColor: "rgba(0,0,0,0.2)",
            fontAwesomeClassName: "fas fa-times-circle",
            fontAwesomeIconColor: "rgba(0,0,0,0.2)",
            backOverlayColor: "rgba(255,85,73,0.2)"
        },
        warning: {
            background: "#eebf31",
            textColor: "#fff",
            childClassName: "notiflix-notify-warning",
            notiflixIconColor: "rgba(0,0,0,0.2)",
            fontAwesomeClassName: "fas fa-exclamation-circle",
            fontAwesomeIconColor: "rgba(0,0,0,0.2)",
            backOverlayColor: "rgba(238,191,49,0.2)"
        },
        info: {
            background: "#26c0d3",
            textColor: "#fff",
            childClassName: "notiflix-notify-info",
            notiflixIconColor: "rgba(0,0,0,0.2)",
            fontAwesomeClassName: "fas fa-info-circle",
            fontAwesomeIconColor: "rgba(0,0,0,0.2)",
            backOverlayColor: "rgba(38,192,211,0.2)"
        }
    };
    // NOTIFY: Default Settings: end
    // COMMON: Console Error: begin
    var commonConsoleError = function(message) {
        return console.error("%c " + notiflixNamespace + " Error ", "padding:2px;border-radius:20px;color:#fff;background:#ff5549", "\n" + message + notiflixConsoleDocs);
    };
    // COMMON: Console Error: end
    // COMMON: Check Head or Body: begin
    var commonCheckHeadOrBody = function(element) {
        if (!element) element = "head";
        if (window.document[element] === null) {
            commonConsoleError('\nNotiflix needs to be appended to the "<' + element + '>" element, but you called it before the "<' + element + '>" element has been created.');
            return false;
        }
        return true;
    };
    // COMMON: Check Head or Body: end
    // COMMON: Set Internal CSS Codes: begin
    var commonSetInternalCSSCodes = function(getInternalCSSCodes, styleElementId) {
        // check doc head
        if (!commonCheckHeadOrBody("head")) return false;
        // internal css
        if (getInternalCSSCodes() !== null && !window.document.getElementById(styleElementId)) {
            var internalCSS = window.document.createElement("style");
            internalCSS.id = styleElementId;
            internalCSS.innerHTML = getInternalCSSCodes();
            window.document.head.appendChild(internalCSS);
        }
    };
    // COMMON: Set Internal CSS Codes: end
    // COMMON: Extend Options: begin
    var commonExtendOptions = function() {
        // variables
        var extended = {};
        var deep = false;
        var i = 0;
        // check if a deep merge
        if (Object.prototype.toString.call(arguments[0]) === "[object Boolean]") {
            deep = arguments[0];
            i++;
        }
        // merge the object into the extended object
        var merge = function(obj) {
            for(var prop in obj)if (Object.prototype.hasOwnProperty.call(obj, prop)) {
                // if property is an object, merge properties
                if (deep && Object.prototype.toString.call(obj[prop]) === "[object Object]") extended[prop] = commonExtendOptions(extended[prop], obj[prop]);
                else extended[prop] = obj[prop];
            }
        };
        // loop through each object and conduct a merge
        for(; i < arguments.length; i++)merge(arguments[i]);
        return extended;
    };
    // COMMON: Extend Options: end
    // COMMON: Get Plaintext: begin
    var commonGetPlaintext = function(html) {
        var htmlPool = window.document.createElement("div");
        htmlPool.innerHTML = html;
        return htmlPool.textContent || htmlPool.innerText || "";
    };
    // COMMON: Get Plaintext: end
    // NOTIFY: Get Internal CSS Codes: begin
    var notifyGetInternalCSSCodes = function() {
        var notifyCSS = '[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}';
        return notifyCSS || null;
    };
    // NOTIFY: Get Internal CSS Codes: end
    // NOTIFY: Create: begin
    var notifyCreateCounter = 0;
    var notifyCreate = function(notifyType, message, callbackOrOptions, options) {
        // check doc body
        if (!commonCheckHeadOrBody("body")) return false;
        // if not initialized pretend like init
        if (!newNotifySettings) Notiflix.Notify.init({});
        // create a backup for new settings
        var newNotifySettingsBackup = commonExtendOptions(true, newNotifySettings, {});
        // check callbackOrOptions and options: begin
        if (typeof callbackOrOptions === "object" && !Array.isArray(callbackOrOptions) || typeof options === "object" && !Array.isArray(options)) {
            // new options
            var newOptions = {};
            if (typeof callbackOrOptions === "object") newOptions = callbackOrOptions;
            else if (typeof options === "object") newOptions = options;
            // extend new settings with the new options
            newNotifySettings = commonExtendOptions(true, newNotifySettings, newOptions);
        }
        // check callbackOrOptions and options: end
        // notify type
        var theType = newNotifySettings[notifyType.toLocaleLowerCase("en")];
        // notify counter
        notifyCreateCounter++;
        // check the message: begin
        if (typeof message !== "string") message = "Notiflix " + notifyType;
        // check the message: end
        // if plainText is true => HTML tags not allowed: begin
        if (newNotifySettings.plainText) message = commonGetPlaintext(message); // message plain text
        // if plainText is true => HTML tags not allowed: end
        // if plainText is false but the message length more than messageMaxLength => Possible HTML tags error: begin
        if (!newNotifySettings.plainText && message.length > newNotifySettings.messageMaxLength) {
            // extend settings for error massege
            newNotifySettings = commonExtendOptions(true, newNotifySettings, {
                closeButton: true,
                messageMaxLength: 150
            });
            // error message
            message = 'Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.';
        }
        // if plainText is false but the message length more than messageMaxLength => Possible HTML tags error: end
        // check message max length: begin
        if (message.length > newNotifySettings.messageMaxLength) message = message.substring(0, newNotifySettings.messageMaxLength) + "...";
        // check message max length: end
        // font awesome icon style: begin
        if (newNotifySettings.fontAwesomeIconStyle === "shadow") theType.fontAwesomeIconColor = theType.background;
        // font awesome icon style: end
        // if cssAnimaion is false => duration: begin
        if (!newNotifySettings.cssAnimation) newNotifySettings.cssAnimationDuration = 0;
        // if cssAnimaion is false => duration: end
        // notify wrap: begin
        var ntflxNotifyWrap = window.document.getElementById(notifySettings.wrapID) || window.document.createElement("div");
        ntflxNotifyWrap.id = notifySettings.wrapID;
        ntflxNotifyWrap.style.width = newNotifySettings.width;
        ntflxNotifyWrap.style.zIndex = newNotifySettings.zindex;
        ntflxNotifyWrap.style.opacity = newNotifySettings.opacity;
        // wrap position: begin
        if (newNotifySettings.position === "center-center") {
            ntflxNotifyWrap.style.left = newNotifySettings.distance;
            ntflxNotifyWrap.style.top = newNotifySettings.distance;
            ntflxNotifyWrap.style.right = newNotifySettings.distance;
            ntflxNotifyWrap.style.bottom = newNotifySettings.distance;
            ntflxNotifyWrap.style.margin = "auto";
            ntflxNotifyWrap.classList.add("nx-flex-center-center");
            ntflxNotifyWrap.style.maxHeight = "calc((100vh - " + newNotifySettings.distance + ") - " + newNotifySettings.distance + ")";
            ntflxNotifyWrap.style.display = "flex";
            ntflxNotifyWrap.style.flexWrap = "wrap";
            ntflxNotifyWrap.style.flexDirection = "column";
            ntflxNotifyWrap.style.justifyContent = "center";
            ntflxNotifyWrap.style.alignItems = "center";
            ntflxNotifyWrap.style.pointerEvents = "none";
        } else if (newNotifySettings.position === "center-top") {
            ntflxNotifyWrap.style.left = newNotifySettings.distance;
            ntflxNotifyWrap.style.right = newNotifySettings.distance;
            ntflxNotifyWrap.style.top = newNotifySettings.distance;
            ntflxNotifyWrap.style.bottom = "auto";
            ntflxNotifyWrap.style.margin = "auto";
        } else if (newNotifySettings.position === "center-bottom") {
            ntflxNotifyWrap.style.left = newNotifySettings.distance;
            ntflxNotifyWrap.style.right = newNotifySettings.distance;
            ntflxNotifyWrap.style.bottom = newNotifySettings.distance;
            ntflxNotifyWrap.style.top = "auto";
            ntflxNotifyWrap.style.margin = "auto";
        } else if (newNotifySettings.position === "right-bottom") {
            ntflxNotifyWrap.style.right = newNotifySettings.distance;
            ntflxNotifyWrap.style.bottom = newNotifySettings.distance;
            ntflxNotifyWrap.style.top = "auto";
            ntflxNotifyWrap.style.left = "auto";
        } else if (newNotifySettings.position === "left-top") {
            ntflxNotifyWrap.style.left = newNotifySettings.distance;
            ntflxNotifyWrap.style.top = newNotifySettings.distance;
            ntflxNotifyWrap.style.right = "auto";
            ntflxNotifyWrap.style.bottom = "auto";
        } else if (newNotifySettings.position === "left-bottom") {
            ntflxNotifyWrap.style.left = newNotifySettings.distance;
            ntflxNotifyWrap.style.bottom = newNotifySettings.distance;
            ntflxNotifyWrap.style.top = "auto";
            ntflxNotifyWrap.style.right = "auto";
        } else {
            ntflxNotifyWrap.style.right = newNotifySettings.distance;
            ntflxNotifyWrap.style.top = newNotifySettings.distance;
            ntflxNotifyWrap.style.left = "auto";
            ntflxNotifyWrap.style.bottom = "auto";
        }
        // wrap position: end
        // if background overlay is true: begin
        if (newNotifySettings.backOverlay) {
            var ntflxNotifyOverlay = window.document.getElementById(notifySettings.overlayID) || window.document.createElement("div");
            ntflxNotifyOverlay.id = notifySettings.overlayID;
            ntflxNotifyOverlay.style.width = "100%";
            ntflxNotifyOverlay.style.height = "100%";
            ntflxNotifyOverlay.style.position = "fixed";
            ntflxNotifyOverlay.style.zIndex = newNotifySettings.zindex - 1;
            ntflxNotifyOverlay.style.left = 0;
            ntflxNotifyOverlay.style.top = 0;
            ntflxNotifyOverlay.style.right = 0;
            ntflxNotifyOverlay.style.bottom = 0;
            ntflxNotifyOverlay.style.background = theType.backOverlayColor || newNotifySettings.backOverlayColor;
            ntflxNotifyOverlay.className = newNotifySettings.cssAnimation ? "nx-with-animation" : "";
            ntflxNotifyOverlay.style.animationDuration = newNotifySettings.cssAnimation ? newNotifySettings.cssAnimationDuration + "ms" : "";
            if (!window.document.getElementById(notifySettings.overlayID)) window.document.body.appendChild(ntflxNotifyOverlay);
        }
        // if background overlay is true: end
        if (!window.document.getElementById(notifySettings.wrapID)) window.document.body.appendChild(ntflxNotifyWrap);
        // notify wrap: end
        // notify content: begin
        var ntflxNotify = window.document.createElement("div");
        ntflxNotify.id = newNotifySettings.ID + "-" + notifyCreateCounter;
        ntflxNotify.className = newNotifySettings.className + " " + theType.childClassName + " " + (newNotifySettings.cssAnimation ? "nx-with-animation" : "") + " " + (newNotifySettings.useIcon ? "nx-with-icon" : "") + " nx-" + newNotifySettings.cssAnimationStyle + " " + (newNotifySettings.closeButton && typeof callbackOrOptions !== "function" ? "nx-with-close-button" : "") + " " + (typeof callbackOrOptions === "function" ? "nx-with-callback" : "") + " " + (newNotifySettings.clickToClose ? "nx-notify-click-to-close" : "");
        ntflxNotify.style.fontSize = newNotifySettings.fontSize;
        ntflxNotify.style.color = theType.textColor;
        ntflxNotify.style.background = theType.background;
        ntflxNotify.style.borderRadius = newNotifySettings.borderRadius;
        ntflxNotify.style.pointerEvents = "all";
        // rtl: begin
        if (newNotifySettings.rtl) {
            ntflxNotify.setAttribute("dir", "rtl");
            ntflxNotify.classList.add("nx-rtl-on");
        }
        // rtl: end
        // font-family: begin
        ntflxNotify.style.fontFamily = '"' + newNotifySettings.fontFamily + '", ' + defaultFontFamily;
        // font-family: end
        // use css animation: begin
        if (newNotifySettings.cssAnimation) ntflxNotify.style.animationDuration = newNotifySettings.cssAnimationDuration + "ms";
        // use css animation: end
        // close button element: begin
        var closeButtonHTML = "";
        if (newNotifySettings.closeButton && typeof callbackOrOptions !== "function") closeButtonHTML = '<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="' + theType.notiflixIconColor + '" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>';
        // close buttpon element: end
        // use icon: begin
        if (newNotifySettings.useIcon) {
            // use font awesome
            if (newNotifySettings.useFontAwesome) ntflxNotify.innerHTML = '<i style="color:' + theType.fontAwesomeIconColor + "; font-size:" + newNotifySettings.fontAwesomeIconSize + ';" class="nx-message-icon nx-message-icon-fa ' + theType.fontAwesomeClassName + " " + (newNotifySettings.fontAwesomeIconStyle === "shadow" ? "nx-message-icon-fa-shadow" : "nx-message-icon-fa-basic") + '"></i><span class="nx-message nx-with-icon">' + message + "</span>" + (newNotifySettings.closeButton ? closeButtonHTML : "");
            else {
                var svgIcon = "";
                if (notifyType === typesNotify.Success) svgIcon = '<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="' + theType.notiflixIconColor + '" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>';
                else if (notifyType === typesNotify.Failure) svgIcon = '<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="' + theType.notiflixIconColor + '" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>';
                else if (notifyType === typesNotify.Warning) svgIcon = '<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="' + theType.notiflixIconColor + '" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>';
                else if (notifyType === typesNotify.Info) svgIcon = '<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="' + theType.notiflixIconColor + '" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>';
                ntflxNotify.innerHTML = svgIcon + '<span class="nx-message nx-with-icon">' + message + "</span>" + (newNotifySettings.closeButton ? closeButtonHTML : "");
            }
        } else ntflxNotify.innerHTML = '<span class="nx-message">' + message + "</span>" + (newNotifySettings.closeButton ? closeButtonHTML : "");
        // use icon: end
        // notify content: end
        // notify append or prepend: begin
        if (newNotifySettings.position === "left-bottom" || newNotifySettings.position === "right-bottom") {
            var notifyWrap = window.document.getElementById(notifySettings.wrapID);
            notifyWrap.insertBefore(ntflxNotify, notifyWrap.firstChild);
        } else window.document.getElementById(notifySettings.wrapID).appendChild(ntflxNotify);
        // notify append or prepend: end
        // remove by timeout or click: begin
        var eachNotifyElement = window.document.getElementById(ntflxNotify.id);
        if (eachNotifyElement) {
            // timeout variables
            var timeoutHide;
            var timeoutRemove;
            // hide notify elm and hide overlay: begin
            var hideNotifyElementsAndOverlay = function() {
                eachNotifyElement.classList.add("nx-remove");
                var removeOverlay = window.document.getElementById(notifySettings.overlayID);
                if (removeOverlay && ntflxNotifyWrap.childElementCount <= 0) removeOverlay.classList.add("nx-remove");
                clearTimeout(timeoutHide);
            };
            // hide notify elm and hide overlay: end
            // remove notify elm and wrapper: begin
            var removeNotifyElmentsAndWrapper = function() {
                if (eachNotifyElement && eachNotifyElement.parentNode !== null) eachNotifyElement.parentNode.removeChild(eachNotifyElement);
                if (ntflxNotifyWrap.childElementCount <= 0 && ntflxNotifyWrap.parentNode !== null) {
                    ntflxNotifyWrap.parentNode.removeChild(ntflxNotifyWrap);
                    var removeOverlay = window.document.getElementById(notifySettings.overlayID);
                    if (removeOverlay && removeOverlay.parentNode !== null) removeOverlay.parentNode.removeChild(removeOverlay);
                }
                clearTimeout(timeoutRemove);
            };
            // remove notify elm and wrapper: end
            // if has close button and callbackOrOptions is not a function: begin
            if (newNotifySettings.closeButton && typeof callbackOrOptions !== "function") {
                var closeButtonElm = window.document.getElementById(ntflxNotify.id).querySelector("span.nx-close-button");
                closeButtonElm.addEventListener("click", function() {
                    hideNotifyElementsAndOverlay();
                    var clickToCloseTimeout = setTimeout(function() {
                        removeNotifyElmentsAndWrapper();
                        clearTimeout(clickToCloseTimeout);
                    }, newNotifySettings.cssAnimationDuration);
                });
            }
            // if has close button and callbackOrOptions is not a function: end
            // if callbackOrOptions or click to close: begin
            if (typeof callbackOrOptions === "function" || newNotifySettings.clickToClose) eachNotifyElement.addEventListener("click", function() {
                if (typeof callbackOrOptions === "function") callbackOrOptions();
                hideNotifyElementsAndOverlay();
                var callbackTimeout = setTimeout(function() {
                    removeNotifyElmentsAndWrapper();
                    clearTimeout(callbackTimeout);
                }, newNotifySettings.cssAnimationDuration);
            });
            // if callbackOrOptions or click to close: end
            // else auto remove: begin
            if (!newNotifySettings.closeButton && typeof callbackOrOptions !== "function") {
                // auto remove: begin
                var autoRemove = function() {
                    timeoutHide = setTimeout(function() {
                        hideNotifyElementsAndOverlay();
                    }, newNotifySettings.timeout);
                    timeoutRemove = setTimeout(function() {
                        removeNotifyElmentsAndWrapper();
                    }, newNotifySettings.timeout + newNotifySettings.cssAnimationDuration);
                };
                autoRemove();
                // auto remove: end
                // pause auto remove: begin
                if (newNotifySettings.pauseOnHover) {
                    eachNotifyElement.addEventListener("mouseenter", function() {
                        eachNotifyElement.classList.add("nx-paused");
                        clearTimeout(timeoutHide);
                        clearTimeout(timeoutRemove);
                    });
                    eachNotifyElement.addEventListener("mouseleave", function() {
                        eachNotifyElement.classList.remove("nx-paused");
                        autoRemove();
                    });
                }
            // pause auto remove: end
            }
        // else auto remove: end
        }
        // remove by timeout or click: end
        // notify - show only the last one: begin
        if (newNotifySettings.showOnlyTheLastOne && notifyCreateCounter > 0) {
            var allNotifyElmNotTheLastOne = window.document.querySelectorAll("[id^=" + newNotifySettings.ID + "-]:not([id=" + newNotifySettings.ID + "-" + notifyCreateCounter + "])");
            for(var i = 0; i < allNotifyElmNotTheLastOne.length; i++){
                var eachNotifyElmNotLastOne = allNotifyElmNotTheLastOne[i];
                if (eachNotifyElmNotLastOne.parentNode !== null) eachNotifyElmNotLastOne.parentNode.removeChild(eachNotifyElmNotLastOne);
            }
        }
        // notify - show only the last one: end
        // extend new settings with the backup settings
        newNotifySettings = commonExtendOptions(true, newNotifySettings, newNotifySettingsBackup);
    };
    // NOTIFY: Create: end
    var Notiflix = {
        Notify: {
            // Init
            init: function(userNotifyOptions) {
                // extend options
                newNotifySettings = commonExtendOptions(true, notifySettings, userNotifyOptions);
                // internal css if exist
                commonSetInternalCSSCodes(notifyGetInternalCSSCodes, "NotiflixNotifyInternalCSS");
            },
            // Merge First Init
            merge: function(userNotifyExtendOptions) {
                // if initialized already
                if (newNotifySettings) newNotifySettings = commonExtendOptions(true, newNotifySettings, userNotifyExtendOptions);
                else {
                    commonConsoleError("You have to initialize the Notify module before call Merge function.");
                    return false;
                }
            },
            // Success
            success: function(message, callbackOrOptions, options) {
                notifyCreate(typesNotify.Success, message, callbackOrOptions, options);
            },
            // Failure
            failure: function(message, callbackOrOptions, options) {
                notifyCreate(typesNotify.Failure, message, callbackOrOptions, options);
            },
            // Warning
            warning: function(message, callbackOrOptions, options) {
                notifyCreate(typesNotify.Warning, message, callbackOrOptions, options);
            },
            // Info
            info: function(message, callbackOrOptions, options) {
                notifyCreate(typesNotify.Info, message, callbackOrOptions, options);
            }
        }
    };
    if (typeof window.Notiflix === "object") return commonExtendOptions(true, window.Notiflix, {
        Notify: Notiflix.Notify
    });
    else return {
        Notify: Notiflix.Notify
    };
});

},{}],"bCOOF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _axios = require("axios");
var _axiosDefault = parcelHelpers.interopDefault(_axios);
class NewsApiService {
    constructor(){
        this.searchQuery = "";
        this.page = 1;
        this.API_KEY = "31322734-692d0c8f8a819df0edc128403";
        this.SITE = "https://pixabay.com/api";
        this.PER_PAGE = 40;
    }
    async myApi() {
        const url = await (0, _axiosDefault.default).get(`
    https://pixabay.com/api/?key=${this.API_KEY}&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${this.page}`);
        return url.data;
    }
    incrimentPage() {
        this.page += 1;
    }
    resetPage() {
        this.page = 1;
    }
    get query() {
        return this.searchQuery;
    }
    set query(newQuery) {
        this.searchQuery = newQuery;
    }
}
exports.default = NewsApiService;

},{"axios":"jo6P5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jo6P5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Axios", ()=>Axios);
parcelHelpers.export(exports, "AxiosError", ()=>AxiosError);
parcelHelpers.export(exports, "CanceledError", ()=>CanceledError);
parcelHelpers.export(exports, "isCancel", ()=>isCancel);
parcelHelpers.export(exports, "CancelToken", ()=>CancelToken);
parcelHelpers.export(exports, "VERSION", ()=>VERSION);
parcelHelpers.export(exports, "all", ()=>all);
parcelHelpers.export(exports, "Cancel", ()=>Cancel);
parcelHelpers.export(exports, "isAxiosError", ()=>isAxiosError);
parcelHelpers.export(exports, "spread", ()=>spread);
parcelHelpers.export(exports, "toFormData", ()=>toFormData);
var _axiosJs = require("./lib/axios.js");
var _axiosJsDefault = parcelHelpers.interopDefault(_axiosJs);
// Keep top-level export same with static properties
// so that it can keep same with es module or cjs
const { Axios , AxiosError , CanceledError , isCancel , CancelToken , VERSION , all , Cancel , isAxiosError , spread , toFormData  } = (0, _axiosJsDefault.default);
exports.default = (0, _axiosJsDefault.default);

},{"./lib/axios.js":"63MyY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"63MyY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("./utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _bindJs = require("./helpers/bind.js");
var _bindJsDefault = parcelHelpers.interopDefault(_bindJs);
var _axiosJs = require("./core/Axios.js");
var _axiosJsDefault = parcelHelpers.interopDefault(_axiosJs);
var _mergeConfigJs = require("./core/mergeConfig.js");
var _mergeConfigJsDefault = parcelHelpers.interopDefault(_mergeConfigJs);
var _indexJs = require("./defaults/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _formDataToJSONJs = require("./helpers/formDataToJSON.js");
var _formDataToJSONJsDefault = parcelHelpers.interopDefault(_formDataToJSONJs);
var _canceledErrorJs = require("./cancel/CanceledError.js");
var _canceledErrorJsDefault = parcelHelpers.interopDefault(_canceledErrorJs);
var _cancelTokenJs = require("./cancel/CancelToken.js");
var _cancelTokenJsDefault = parcelHelpers.interopDefault(_cancelTokenJs);
var _isCancelJs = require("./cancel/isCancel.js");
var _isCancelJsDefault = parcelHelpers.interopDefault(_isCancelJs);
var _dataJs = require("./env/data.js");
var _toFormDataJs = require("./helpers/toFormData.js");
var _toFormDataJsDefault = parcelHelpers.interopDefault(_toFormDataJs);
var _axiosErrorJs = require("./core/AxiosError.js");
var _axiosErrorJsDefault = parcelHelpers.interopDefault(_axiosErrorJs);
var _spreadJs = require("./helpers/spread.js");
var _spreadJsDefault = parcelHelpers.interopDefault(_spreadJs);
var _isAxiosErrorJs = require("./helpers/isAxiosError.js");
var _isAxiosErrorJsDefault = parcelHelpers.interopDefault(_isAxiosErrorJs);
"use strict";
/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 *
 * @returns {Axios} A new instance of Axios
 */ function createInstance(defaultConfig) {
    const context = new (0, _axiosJsDefault.default)(defaultConfig);
    const instance = (0, _bindJsDefault.default)((0, _axiosJsDefault.default).prototype.request, context);
    // Copy axios.prototype to instance
    (0, _utilsJsDefault.default).extend(instance, (0, _axiosJsDefault.default).prototype, context, {
        allOwnKeys: true
    });
    // Copy context to instance
    (0, _utilsJsDefault.default).extend(instance, context, null, {
        allOwnKeys: true
    });
    // Factory for creating new instances
    instance.create = function create(instanceConfig) {
        return createInstance((0, _mergeConfigJsDefault.default)(defaultConfig, instanceConfig));
    };
    return instance;
}
// Create the default instance to be exported
const axios = createInstance((0, _indexJsDefault.default));
// Expose Axios class to allow class inheritance
axios.Axios = (0, _axiosJsDefault.default);
// Expose Cancel & CancelToken
axios.CanceledError = (0, _canceledErrorJsDefault.default);
axios.CancelToken = (0, _cancelTokenJsDefault.default);
axios.isCancel = (0, _isCancelJsDefault.default);
axios.VERSION = (0, _dataJs.VERSION);
axios.toFormData = (0, _toFormDataJsDefault.default);
// Expose AxiosError class
axios.AxiosError = (0, _axiosErrorJsDefault.default);
// alias for CanceledError for backward compatibility
axios.Cancel = axios.CanceledError;
// Expose all/spread
axios.all = function all(promises) {
    return Promise.all(promises);
};
axios.spread = (0, _spreadJsDefault.default);
// Expose isAxiosError
axios.isAxiosError = (0, _isAxiosErrorJsDefault.default);
axios.formToJSON = (thing)=>{
    return (0, _formDataToJSONJsDefault.default)((0, _utilsJsDefault.default).isHTMLForm(thing) ? new FormData(thing) : thing);
};
exports.default = axios;

},{"./utils.js":"5By4s","./helpers/bind.js":"haRQb","./core/Axios.js":"cpqD8","./core/mergeConfig.js":"b85oP","./defaults/index.js":"hXfHM","./helpers/formDataToJSON.js":"01RfH","./cancel/CanceledError.js":"9PwCG","./cancel/CancelToken.js":"45wzn","./cancel/isCancel.js":"a0VmF","./env/data.js":"h29L9","./helpers/toFormData.js":"ajoez","./core/AxiosError.js":"3u8Tl","./helpers/spread.js":"dyQ8N","./helpers/isAxiosError.js":"eyiLq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5By4s":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _bindJs = require("./helpers/bind.js");
var _bindJsDefault = parcelHelpers.interopDefault(_bindJs);
"use strict";
// utils is a library of generic helper functions non-specific to axios
const { toString  } = Object.prototype;
const { getPrototypeOf  } = Object;
const kindOf = ((cache)=>(thing)=>{
        const str = toString.call(thing);
        return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
    })(Object.create(null));
const kindOfTest = (type)=>{
    type = type.toLowerCase();
    return (thing)=>kindOf(thing) === type;
};
const typeOfTest = (type)=>(thing)=>typeof thing === type;
/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 *
 * @returns {boolean} True if value is an Array, otherwise false
 */ const { isArray  } = Array;
/**
 * Determine if a value is undefined
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if the value is undefined, otherwise false
 */ const isUndefined = typeOfTest("undefined");
/**
 * Determine if a value is a Buffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Buffer, otherwise false
 */ function isBuffer(val) {
    return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && isFunction(val.constructor.isBuffer) && val.constructor.isBuffer(val);
}
/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */ const isArrayBuffer = kindOfTest("ArrayBuffer");
/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */ function isArrayBufferView(val) {
    let result;
    if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) result = ArrayBuffer.isView(val);
    else result = val && val.buffer && isArrayBuffer(val.buffer);
    return result;
}
/**
 * Determine if a value is a String
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a String, otherwise false
 */ const isString = typeOfTest("string");
/**
 * Determine if a value is a Function
 *
 * @param {*} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */ const isFunction = typeOfTest("function");
/**
 * Determine if a value is a Number
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Number, otherwise false
 */ const isNumber = typeOfTest("number");
/**
 * Determine if a value is an Object
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an Object, otherwise false
 */ const isObject = (thing)=>thing !== null && typeof thing === "object";
/**
 * Determine if a value is a Boolean
 *
 * @param {*} thing The value to test
 * @returns {boolean} True if value is a Boolean, otherwise false
 */ const isBoolean = (thing)=>thing === true || thing === false;
/**
 * Determine if a value is a plain Object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a plain Object, otherwise false
 */ const isPlainObject = (val)=>{
    if (kindOf(val) !== "object") return false;
    const prototype = getPrototypeOf(val);
    return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in val) && !(Symbol.iterator in val);
};
/**
 * Determine if a value is a Date
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Date, otherwise false
 */ const isDate = kindOfTest("Date");
/**
 * Determine if a value is a File
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */ const isFile = kindOfTest("File");
/**
 * Determine if a value is a Blob
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Blob, otherwise false
 */ const isBlob = kindOfTest("Blob");
/**
 * Determine if a value is a FileList
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */ const isFileList = kindOfTest("FileList");
/**
 * Determine if a value is a Stream
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Stream, otherwise false
 */ const isStream = (val)=>isObject(val) && isFunction(val.pipe);
/**
 * Determine if a value is a FormData
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an FormData, otherwise false
 */ const isFormData = (thing)=>{
    const pattern = "[object FormData]";
    return thing && (typeof FormData === "function" && thing instanceof FormData || toString.call(thing) === pattern || isFunction(thing.toString) && thing.toString() === pattern);
};
/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */ const isURLSearchParams = kindOfTest("URLSearchParams");
/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 *
 * @returns {String} The String freed of excess whitespace
 */ const trim = (str)=>str.trim ? str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 *
 * @param {Boolean} [allOwnKeys = false]
 * @returns {void}
 */ function forEach(obj, fn, { allOwnKeys =false  } = {}) {
    // Don't bother if no value provided
    if (obj === null || typeof obj === "undefined") return;
    let i;
    let l;
    // Force an array if not already something iterable
    if (typeof obj !== "object") /*eslint no-param-reassign:0*/ obj = [
        obj
    ];
    if (isArray(obj)) // Iterate over array values
    for(i = 0, l = obj.length; i < l; i++)fn.call(null, obj[i], i, obj);
    else {
        // Iterate over object keys
        const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
        const len = keys.length;
        let key;
        for(i = 0; i < len; i++){
            key = keys[i];
            fn.call(null, obj[key], key, obj);
        }
    }
}
/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 *
 * @returns {Object} Result of all merge properties
 */ function merge() {
    const result = {};
    const assignValue = (val, key)=>{
        if (isPlainObject(result[key]) && isPlainObject(val)) result[key] = merge(result[key], val);
        else if (isPlainObject(val)) result[key] = merge({}, val);
        else if (isArray(val)) result[key] = val.slice();
        else result[key] = val;
    };
    for(let i = 0, l = arguments.length; i < l; i++)arguments[i] && forEach(arguments[i], assignValue);
    return result;
}
/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 *
 * @param {Boolean} [allOwnKeys]
 * @returns {Object} The resulting value of object a
 */ const extend = (a, b, thisArg, { allOwnKeys  } = {})=>{
    forEach(b, (val, key)=>{
        if (thisArg && isFunction(val)) a[key] = (0, _bindJsDefault.default)(val, thisArg);
        else a[key] = val;
    }, {
        allOwnKeys
    });
    return a;
};
/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 *
 * @returns {string} content value without BOM
 */ const stripBOM = (content)=>{
    if (content.charCodeAt(0) === 0xFEFF) content = content.slice(1);
    return content;
};
/**
 * Inherit the prototype methods from one constructor into another
 * @param {function} constructor
 * @param {function} superConstructor
 * @param {object} [props]
 * @param {object} [descriptors]
 *
 * @returns {void}
 */ const inherits = (constructor, superConstructor, props, descriptors)=>{
    constructor.prototype = Object.create(superConstructor.prototype, descriptors);
    constructor.prototype.constructor = constructor;
    Object.defineProperty(constructor, "super", {
        value: superConstructor.prototype
    });
    props && Object.assign(constructor.prototype, props);
};
/**
 * Resolve object with deep prototype chain to a flat object
 * @param {Object} sourceObj source object
 * @param {Object} [destObj]
 * @param {Function|Boolean} [filter]
 * @param {Function} [propFilter]
 *
 * @returns {Object}
 */ const toFlatObject = (sourceObj, destObj, filter, propFilter)=>{
    let props;
    let i;
    let prop;
    const merged = {};
    destObj = destObj || {};
    // eslint-disable-next-line no-eq-null,eqeqeq
    if (sourceObj == null) return destObj;
    do {
        props = Object.getOwnPropertyNames(sourceObj);
        i = props.length;
        while(i-- > 0){
            prop = props[i];
            if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
                destObj[prop] = sourceObj[prop];
                merged[prop] = true;
            }
        }
        sourceObj = filter !== false && getPrototypeOf(sourceObj);
    }while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);
    return destObj;
};
/**
 * Determines whether a string ends with the characters of a specified string
 *
 * @param {String} str
 * @param {String} searchString
 * @param {Number} [position= 0]
 *
 * @returns {boolean}
 */ const endsWith = (str, searchString, position)=>{
    str = String(str);
    if (position === undefined || position > str.length) position = str.length;
    position -= searchString.length;
    const lastIndex = str.indexOf(searchString, position);
    return lastIndex !== -1 && lastIndex === position;
};
/**
 * Returns new array from array like object or null if failed
 *
 * @param {*} [thing]
 *
 * @returns {?Array}
 */ const toArray = (thing)=>{
    if (!thing) return null;
    if (isArray(thing)) return thing;
    let i = thing.length;
    if (!isNumber(i)) return null;
    const arr = new Array(i);
    while(i-- > 0)arr[i] = thing[i];
    return arr;
};
/**
 * Checking if the Uint8Array exists and if it does, it returns a function that checks if the
 * thing passed in is an instance of Uint8Array
 *
 * @param {TypedArray}
 *
 * @returns {Array}
 */ // eslint-disable-next-line func-names
const isTypedArray = ((TypedArray)=>{
    // eslint-disable-next-line func-names
    return (thing)=>{
        return TypedArray && thing instanceof TypedArray;
    };
})(typeof Uint8Array !== "undefined" && getPrototypeOf(Uint8Array));
/**
 * For each entry in the object, call the function with the key and value.
 *
 * @param {Object<any, any>} obj - The object to iterate over.
 * @param {Function} fn - The function to call for each entry.
 *
 * @returns {void}
 */ const forEachEntry = (obj, fn)=>{
    const generator = obj && obj[Symbol.iterator];
    const iterator = generator.call(obj);
    let result;
    while((result = iterator.next()) && !result.done){
        const pair = result.value;
        fn.call(obj, pair[0], pair[1]);
    }
};
/**
 * It takes a regular expression and a string, and returns an array of all the matches
 *
 * @param {string} regExp - The regular expression to match against.
 * @param {string} str - The string to search.
 *
 * @returns {Array<boolean>}
 */ const matchAll = (regExp, str)=>{
    let matches;
    const arr = [];
    while((matches = regExp.exec(str)) !== null)arr.push(matches);
    return arr;
};
/* Checking if the kindOfTest function returns true when passed an HTMLFormElement. */ const isHTMLForm = kindOfTest("HTMLFormElement");
const toCamelCase = (str)=>{
    return str.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g, function replacer(m, p1, p2) {
        return p1.toUpperCase() + p2;
    });
};
/* Creating a function that will check if an object has a property. */ const hasOwnProperty = (({ hasOwnProperty: hasOwnProperty1  })=>(obj, prop)=>hasOwnProperty1.call(obj, prop))(Object.prototype);
/**
 * Determine if a value is a RegExp object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a RegExp object, otherwise false
 */ const isRegExp = kindOfTest("RegExp");
const reduceDescriptors = (obj, reducer)=>{
    const descriptors = Object.getOwnPropertyDescriptors(obj);
    const reducedDescriptors = {};
    forEach(descriptors, (descriptor, name)=>{
        if (reducer(descriptor, name, obj) !== false) reducedDescriptors[name] = descriptor;
    });
    Object.defineProperties(obj, reducedDescriptors);
};
/**
 * Makes all methods read-only
 * @param {Object} obj
 */ const freezeMethods = (obj)=>{
    reduceDescriptors(obj, (descriptor, name)=>{
        const value = obj[name];
        if (!isFunction(value)) return;
        descriptor.enumerable = false;
        if ("writable" in descriptor) {
            descriptor.writable = false;
            return;
        }
        if (!descriptor.set) descriptor.set = ()=>{
            throw Error("Can not read-only method '" + name + "'");
        };
    });
};
const toObjectSet = (arrayOrString, delimiter)=>{
    const obj = {};
    const define = (arr)=>{
        arr.forEach((value)=>{
            obj[value] = true;
        });
    };
    isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));
    return obj;
};
const noop = ()=>{};
const toFiniteNumber = (value, defaultValue)=>{
    value = +value;
    return Number.isFinite(value) ? value : defaultValue;
};
exports.default = {
    isArray,
    isArrayBuffer,
    isBuffer,
    isFormData,
    isArrayBufferView,
    isString,
    isNumber,
    isBoolean,
    isObject,
    isPlainObject,
    isUndefined,
    isDate,
    isFile,
    isBlob,
    isRegExp,
    isFunction,
    isStream,
    isURLSearchParams,
    isTypedArray,
    isFileList,
    forEach,
    merge,
    extend,
    trim,
    stripBOM,
    inherits,
    toFlatObject,
    kindOf,
    kindOfTest,
    endsWith,
    toArray,
    forEachEntry,
    matchAll,
    isHTMLForm,
    hasOwnProperty,
    hasOwnProp: hasOwnProperty,
    reduceDescriptors,
    freezeMethods,
    toObjectSet,
    toCamelCase,
    noop,
    toFiniteNumber
};

},{"./helpers/bind.js":"haRQb","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"haRQb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
"use strict";
function bind(fn, thisArg) {
    return function wrap() {
        return fn.apply(thisArg, arguments);
    };
}
exports.default = bind;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"cpqD8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("./../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _buildURLJs = require("../helpers/buildURL.js");
var _buildURLJsDefault = parcelHelpers.interopDefault(_buildURLJs);
var _interceptorManagerJs = require("./InterceptorManager.js");
var _interceptorManagerJsDefault = parcelHelpers.interopDefault(_interceptorManagerJs);
var _dispatchRequestJs = require("./dispatchRequest.js");
var _dispatchRequestJsDefault = parcelHelpers.interopDefault(_dispatchRequestJs);
var _mergeConfigJs = require("./mergeConfig.js");
var _mergeConfigJsDefault = parcelHelpers.interopDefault(_mergeConfigJs);
var _buildFullPathJs = require("./buildFullPath.js");
var _buildFullPathJsDefault = parcelHelpers.interopDefault(_buildFullPathJs);
var _validatorJs = require("../helpers/validator.js");
var _validatorJsDefault = parcelHelpers.interopDefault(_validatorJs);
var _axiosHeadersJs = require("./AxiosHeaders.js");
var _axiosHeadersJsDefault = parcelHelpers.interopDefault(_axiosHeadersJs);
"use strict";
const validators = (0, _validatorJsDefault.default).validators;
/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 *
 * @return {Axios} A new instance of Axios
 */ class Axios {
    constructor(instanceConfig){
        this.defaults = instanceConfig;
        this.interceptors = {
            request: new (0, _interceptorManagerJsDefault.default)(),
            response: new (0, _interceptorManagerJsDefault.default)()
        };
    }
    /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */ request(configOrUrl, config) {
        /*eslint no-param-reassign:0*/ // Allow for axios('example/url'[, config]) a la fetch API
        if (typeof configOrUrl === "string") {
            config = config || {};
            config.url = configOrUrl;
        } else config = configOrUrl || {};
        config = (0, _mergeConfigJsDefault.default)(this.defaults, config);
        const { transitional , paramsSerializer  } = config;
        if (transitional !== undefined) (0, _validatorJsDefault.default).assertOptions(transitional, {
            silentJSONParsing: validators.transitional(validators.boolean),
            forcedJSONParsing: validators.transitional(validators.boolean),
            clarifyTimeoutError: validators.transitional(validators.boolean)
        }, false);
        if (paramsSerializer !== undefined) (0, _validatorJsDefault.default).assertOptions(paramsSerializer, {
            encode: validators.function,
            serialize: validators.function
        }, true);
        // Set config.method
        config.method = (config.method || this.defaults.method || "get").toLowerCase();
        // Flatten headers
        const defaultHeaders = config.headers && (0, _utilsJsDefault.default).merge(config.headers.common, config.headers[config.method]);
        defaultHeaders && (0, _utilsJsDefault.default).forEach([
            "delete",
            "get",
            "head",
            "post",
            "put",
            "patch",
            "common"
        ], function cleanHeaderConfig(method) {
            delete config.headers[method];
        });
        config.headers = new (0, _axiosHeadersJsDefault.default)(config.headers, defaultHeaders);
        // filter out skipped interceptors
        const requestInterceptorChain = [];
        let synchronousRequestInterceptors = true;
        this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
            if (typeof interceptor.runWhen === "function" && interceptor.runWhen(config) === false) return;
            synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
            requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
        });
        const responseInterceptorChain = [];
        this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
            responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
        });
        let promise;
        let i = 0;
        let len;
        if (!synchronousRequestInterceptors) {
            const chain = [
                (0, _dispatchRequestJsDefault.default).bind(this),
                undefined
            ];
            chain.unshift.apply(chain, requestInterceptorChain);
            chain.push.apply(chain, responseInterceptorChain);
            len = chain.length;
            promise = Promise.resolve(config);
            while(i < len)promise = promise.then(chain[i++], chain[i++]);
            return promise;
        }
        len = requestInterceptorChain.length;
        let newConfig = config;
        i = 0;
        while(i < len){
            const onFulfilled = requestInterceptorChain[i++];
            const onRejected = requestInterceptorChain[i++];
            try {
                newConfig = onFulfilled(newConfig);
            } catch (error) {
                onRejected.call(this, error);
                break;
            }
        }
        try {
            promise = (0, _dispatchRequestJsDefault.default).call(this, newConfig);
        } catch (error) {
            return Promise.reject(error);
        }
        i = 0;
        len = responseInterceptorChain.length;
        while(i < len)promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
        return promise;
    }
    getUri(config) {
        config = (0, _mergeConfigJsDefault.default)(this.defaults, config);
        const fullPath = (0, _buildFullPathJsDefault.default)(config.baseURL, config.url);
        return (0, _buildURLJsDefault.default)(fullPath, config.params, config.paramsSerializer);
    }
}
// Provide aliases for supported request methods
(0, _utilsJsDefault.default).forEach([
    "delete",
    "get",
    "head",
    "options"
], function forEachMethodNoData(method) {
    /*eslint func-names:0*/ Axios.prototype[method] = function(url, config) {
        return this.request((0, _mergeConfigJsDefault.default)(config || {}, {
            method,
            url,
            data: (config || {}).data
        }));
    };
});
(0, _utilsJsDefault.default).forEach([
    "post",
    "put",
    "patch"
], function forEachMethodWithData(method) {
    /*eslint func-names:0*/ function generateHTTPMethod(isForm) {
        return function httpMethod(url, data, config) {
            return this.request((0, _mergeConfigJsDefault.default)(config || {}, {
                method,
                headers: isForm ? {
                    "Content-Type": "multipart/form-data"
                } : {},
                url,
                data
            }));
        };
    }
    Axios.prototype[method] = generateHTTPMethod();
    Axios.prototype[method + "Form"] = generateHTTPMethod(true);
});
exports.default = Axios;

},{"./../utils.js":"5By4s","../helpers/buildURL.js":"3bwC2","./InterceptorManager.js":"1VRIM","./dispatchRequest.js":"6sjJ6","./mergeConfig.js":"b85oP","./buildFullPath.js":"1I5TW","../helpers/validator.js":"9vgkY","./AxiosHeaders.js":"cgSSx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3bwC2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _axiosURLSearchParamsJs = require("../helpers/AxiosURLSearchParams.js");
var _axiosURLSearchParamsJsDefault = parcelHelpers.interopDefault(_axiosURLSearchParamsJs);
"use strict";
/**
 * It replaces all instances of the characters `:`, `$`, `,`, `+`, `[`, and `]` with their
 * URI encoded counterparts
 *
 * @param {string} val The value to be encoded.
 *
 * @returns {string} The encoded value.
 */ function encode(val) {
    return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function buildURL(url, params, options) {
    /*eslint no-param-reassign:0*/ if (!params) return url;
    const _encode = options && options.encode || encode;
    const serializeFn = options && options.serialize;
    let serializedParams;
    if (serializeFn) serializedParams = serializeFn(params, options);
    else serializedParams = (0, _utilsJsDefault.default).isURLSearchParams(params) ? params.toString() : new (0, _axiosURLSearchParamsJsDefault.default)(params, options).toString(_encode);
    if (serializedParams) {
        const hashmarkIndex = url.indexOf("#");
        if (hashmarkIndex !== -1) url = url.slice(0, hashmarkIndex);
        url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
    }
    return url;
}
exports.default = buildURL;

},{"../utils.js":"5By4s","../helpers/AxiosURLSearchParams.js":"hz84m","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hz84m":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _toFormDataJs = require("./toFormData.js");
var _toFormDataJsDefault = parcelHelpers.interopDefault(_toFormDataJs);
"use strict";
/**
 * It encodes a string by replacing all characters that are not in the unreserved set with
 * their percent-encoded equivalents
 *
 * @param {string} str - The string to encode.
 *
 * @returns {string} The encoded string.
 */ function encode(str) {
    const charMap = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+",
        "%00": "\0"
    };
    return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer(match) {
        return charMap[match];
    });
}
/**
 * It takes a params object and converts it to a FormData object
 *
 * @param {Object<string, any>} params - The parameters to be converted to a FormData object.
 * @param {Object<string, any>} options - The options object passed to the Axios constructor.
 *
 * @returns {void}
 */ function AxiosURLSearchParams(params, options) {
    this._pairs = [];
    params && (0, _toFormDataJsDefault.default)(params, this, options);
}
const prototype = AxiosURLSearchParams.prototype;
prototype.append = function append(name, value) {
    this._pairs.push([
        name,
        value
    ]);
};
prototype.toString = function toString(encoder) {
    const _encode = encoder ? function(value) {
        return encoder.call(this, value, encode);
    } : encode;
    return this._pairs.map(function each(pair) {
        return _encode(pair[0]) + "=" + _encode(pair[1]);
    }, "").join("&");
};
exports.default = AxiosURLSearchParams;

},{"./toFormData.js":"ajoez","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ajoez":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _axiosErrorJs = require("../core/AxiosError.js");
var _axiosErrorJsDefault = parcelHelpers.interopDefault(_axiosErrorJs);
var _formDataJs = require("../env/classes/FormData.js");
var _formDataJsDefault = parcelHelpers.interopDefault(_formDataJs);
"use strict";
var Buffer = require("buffer").Buffer;
/**
 * Determines if the given thing is a array or js object.
 *
 * @param {string} thing - The object or array to be visited.
 *
 * @returns {boolean}
 */ function isVisitable(thing) {
    return (0, _utilsJsDefault.default).isPlainObject(thing) || (0, _utilsJsDefault.default).isArray(thing);
}
/**
 * It removes the brackets from the end of a string
 *
 * @param {string} key - The key of the parameter.
 *
 * @returns {string} the key without the brackets.
 */ function removeBrackets(key) {
    return (0, _utilsJsDefault.default).endsWith(key, "[]") ? key.slice(0, -2) : key;
}
/**
 * It takes a path, a key, and a boolean, and returns a string
 *
 * @param {string} path - The path to the current key.
 * @param {string} key - The key of the current object being iterated over.
 * @param {string} dots - If true, the key will be rendered with dots instead of brackets.
 *
 * @returns {string} The path to the current key.
 */ function renderKey(path, key, dots) {
    if (!path) return key;
    return path.concat(key).map(function each(token, i) {
        // eslint-disable-next-line no-param-reassign
        token = removeBrackets(token);
        return !dots && i ? "[" + token + "]" : token;
    }).join(dots ? "." : "");
}
/**
 * If the array is an array and none of its elements are visitable, then it's a flat array.
 *
 * @param {Array<any>} arr - The array to check
 *
 * @returns {boolean}
 */ function isFlatArray(arr) {
    return (0, _utilsJsDefault.default).isArray(arr) && !arr.some(isVisitable);
}
const predicates = (0, _utilsJsDefault.default).toFlatObject((0, _utilsJsDefault.default), {}, null, function filter(prop) {
    return /^is[A-Z]/.test(prop);
});
/**
 * If the thing is a FormData object, return true, otherwise return false.
 *
 * @param {unknown} thing - The thing to check.
 *
 * @returns {boolean}
 */ function isSpecCompliant(thing) {
    return thing && (0, _utilsJsDefault.default).isFunction(thing.append) && thing[Symbol.toStringTag] === "FormData" && thing[Symbol.iterator];
}
/**
 * Convert a data object to FormData
 *
 * @param {Object} obj
 * @param {?Object} [formData]
 * @param {?Object} [options]
 * @param {Function} [options.visitor]
 * @param {Boolean} [options.metaTokens = true]
 * @param {Boolean} [options.dots = false]
 * @param {?Boolean} [options.indexes = false]
 *
 * @returns {Object}
 **/ /**
 * It converts an object into a FormData object
 *
 * @param {Object<any, any>} obj - The object to convert to form data.
 * @param {string} formData - The FormData object to append to.
 * @param {Object<string, any>} options
 *
 * @returns
 */ function toFormData(obj, formData, options) {
    if (!(0, _utilsJsDefault.default).isObject(obj)) throw new TypeError("target must be an object");
    // eslint-disable-next-line no-param-reassign
    formData = formData || new ((0, _formDataJsDefault.default) || FormData)();
    // eslint-disable-next-line no-param-reassign
    options = (0, _utilsJsDefault.default).toFlatObject(options, {
        metaTokens: true,
        dots: false,
        indexes: false
    }, false, function defined(option, source) {
        // eslint-disable-next-line no-eq-null,eqeqeq
        return !(0, _utilsJsDefault.default).isUndefined(source[option]);
    });
    const metaTokens = options.metaTokens;
    // eslint-disable-next-line no-use-before-define
    const visitor = options.visitor || defaultVisitor;
    const dots = options.dots;
    const indexes = options.indexes;
    const _Blob = options.Blob || typeof Blob !== "undefined" && Blob;
    const useBlob = _Blob && isSpecCompliant(formData);
    if (!(0, _utilsJsDefault.default).isFunction(visitor)) throw new TypeError("visitor must be a function");
    function convertValue(value) {
        if (value === null) return "";
        if ((0, _utilsJsDefault.default).isDate(value)) return value.toISOString();
        if (!useBlob && (0, _utilsJsDefault.default).isBlob(value)) throw new (0, _axiosErrorJsDefault.default)("Blob is not supported. Use a Buffer instead.");
        if ((0, _utilsJsDefault.default).isArrayBuffer(value) || (0, _utilsJsDefault.default).isTypedArray(value)) return useBlob && typeof Blob === "function" ? new Blob([
            value
        ]) : Buffer.from(value);
        return value;
    }
    /**
   * Default visitor.
   *
   * @param {*} value
   * @param {String|Number} key
   * @param {Array<String|Number>} path
   * @this {FormData}
   *
   * @returns {boolean} return true to visit the each prop of the value recursively
   */ function defaultVisitor(value, key, path) {
        let arr = value;
        if (value && !path && typeof value === "object") {
            if ((0, _utilsJsDefault.default).endsWith(key, "{}")) {
                // eslint-disable-next-line no-param-reassign
                key = metaTokens ? key : key.slice(0, -2);
                // eslint-disable-next-line no-param-reassign
                value = JSON.stringify(value);
            } else if ((0, _utilsJsDefault.default).isArray(value) && isFlatArray(value) || (0, _utilsJsDefault.default).isFileList(value) || (0, _utilsJsDefault.default).endsWith(key, "[]") && (arr = (0, _utilsJsDefault.default).toArray(value))) {
                // eslint-disable-next-line no-param-reassign
                key = removeBrackets(key);
                arr.forEach(function each(el, index) {
                    !((0, _utilsJsDefault.default).isUndefined(el) || el === null) && formData.append(// eslint-disable-next-line no-nested-ternary
                    indexes === true ? renderKey([
                        key
                    ], index, dots) : indexes === null ? key : key + "[]", convertValue(el));
                });
                return false;
            }
        }
        if (isVisitable(value)) return true;
        formData.append(renderKey(path, key, dots), convertValue(value));
        return false;
    }
    const stack = [];
    const exposedHelpers = Object.assign(predicates, {
        defaultVisitor,
        convertValue,
        isVisitable
    });
    function build(value, path) {
        if ((0, _utilsJsDefault.default).isUndefined(value)) return;
        if (stack.indexOf(value) !== -1) throw Error("Circular reference detected in " + path.join("."));
        stack.push(value);
        (0, _utilsJsDefault.default).forEach(value, function each(el, key) {
            const result = !((0, _utilsJsDefault.default).isUndefined(el) || el === null) && visitor.call(formData, el, (0, _utilsJsDefault.default).isString(key) ? key.trim() : key, path, exposedHelpers);
            if (result === true) build(el, path ? path.concat(key) : [
                key
            ]);
        });
        stack.pop();
    }
    if (!(0, _utilsJsDefault.default).isObject(obj)) throw new TypeError("data must be an object");
    build(obj);
    return formData;
}
exports.default = toFormData;

},{"../utils.js":"5By4s","../core/AxiosError.js":"3u8Tl","../env/classes/FormData.js":"lSnyf","buffer":"fCgem","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3u8Tl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
"use strict";
/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [config] The config.
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 *
 * @returns {Error} The created error.
 */ function AxiosError(message, code, config, request, response) {
    Error.call(this);
    if (Error.captureStackTrace) Error.captureStackTrace(this, this.constructor);
    else this.stack = new Error().stack;
    this.message = message;
    this.name = "AxiosError";
    code && (this.code = code);
    config && (this.config = config);
    request && (this.request = request);
    response && (this.response = response);
}
(0, _utilsJsDefault.default).inherits(AxiosError, Error, {
    toJSON: function toJSON() {
        return {
            // Standard
            message: this.message,
            name: this.name,
            // Microsoft
            description: this.description,
            number: this.number,
            // Mozilla
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            // Axios
            config: this.config,
            code: this.code,
            status: this.response && this.response.status ? this.response.status : null
        };
    }
});
const prototype = AxiosError.prototype;
const descriptors = {};
[
    "ERR_BAD_OPTION_VALUE",
    "ERR_BAD_OPTION",
    "ECONNABORTED",
    "ETIMEDOUT",
    "ERR_NETWORK",
    "ERR_FR_TOO_MANY_REDIRECTS",
    "ERR_DEPRECATED",
    "ERR_BAD_RESPONSE",
    "ERR_BAD_REQUEST",
    "ERR_CANCELED",
    "ERR_NOT_SUPPORT",
    "ERR_INVALID_URL"
].forEach((code)=>{
    descriptors[code] = {
        value: code
    };
});
Object.defineProperties(AxiosError, descriptors);
Object.defineProperty(prototype, "isAxiosError", {
    value: true
});
// eslint-disable-next-line func-names
AxiosError.from = (error, code, config, request, response, customProps)=>{
    const axiosError = Object.create(prototype);
    (0, _utilsJsDefault.default).toFlatObject(error, axiosError, function filter(obj) {
        return obj !== Error.prototype;
    }, (prop)=>{
        return prop !== "isAxiosError";
    });
    AxiosError.call(axiosError, error.message, code, config, request, response);
    axiosError.cause = error;
    axiosError.name = error.name;
    customProps && Object.assign(axiosError, customProps);
    return axiosError;
};
exports.default = AxiosError;

},{"../utils.js":"5By4s","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lSnyf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _formData = require("form-data");
var _formDataDefault = parcelHelpers.interopDefault(_formData);
exports.default = (0, _formDataDefault.default);

},{"form-data":"2TZrR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2TZrR":[function(require,module,exports) {
/* eslint-env browser */ module.exports = typeof self == "object" ? self.FormData : window.FormData;

},{}],"fCgem":[function(require,module,exports) {
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */ /* eslint-disable no-proto */ "use strict";
const base64 = require("base64-js");
const ieee754 = require("ieee754");
const customInspectSymbol = typeof Symbol === "function" && typeof Symbol["for"] === "function" // eslint-disable-line dot-notation
 ? Symbol["for"]("nodejs.util.inspect.custom") // eslint-disable-line dot-notation
 : null;
exports.Buffer = Buffer;
exports.SlowBuffer = SlowBuffer;
exports.INSPECT_MAX_BYTES = 50;
const K_MAX_LENGTH = 0x7fffffff;
exports.kMaxLength = K_MAX_LENGTH;
/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */ Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport();
if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== "undefined" && typeof console.error === "function") console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
function typedArraySupport() {
    // Can typed array instances can be augmented?
    try {
        const arr = new Uint8Array(1);
        const proto = {
            foo: function() {
                return 42;
            }
        };
        Object.setPrototypeOf(proto, Uint8Array.prototype);
        Object.setPrototypeOf(arr, proto);
        return arr.foo() === 42;
    } catch (e) {
        return false;
    }
}
Object.defineProperty(Buffer.prototype, "parent", {
    enumerable: true,
    get: function() {
        if (!Buffer.isBuffer(this)) return undefined;
        return this.buffer;
    }
});
Object.defineProperty(Buffer.prototype, "offset", {
    enumerable: true,
    get: function() {
        if (!Buffer.isBuffer(this)) return undefined;
        return this.byteOffset;
    }
});
function createBuffer(length) {
    if (length > K_MAX_LENGTH) throw new RangeError('The value "' + length + '" is invalid for option "size"');
    // Return an augmented `Uint8Array` instance
    const buf = new Uint8Array(length);
    Object.setPrototypeOf(buf, Buffer.prototype);
    return buf;
}
/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */ function Buffer(arg, encodingOrOffset, length) {
    // Common case.
    if (typeof arg === "number") {
        if (typeof encodingOrOffset === "string") throw new TypeError('The "string" argument must be of type string. Received type number');
        return allocUnsafe(arg);
    }
    return from(arg, encodingOrOffset, length);
}
Buffer.poolSize = 8192 // not used by this implementation
;
function from(value, encodingOrOffset, length) {
    if (typeof value === "string") return fromString(value, encodingOrOffset);
    if (ArrayBuffer.isView(value)) return fromArrayView(value);
    if (value == null) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
    if (isInstance(value, ArrayBuffer) || value && isInstance(value.buffer, ArrayBuffer)) return fromArrayBuffer(value, encodingOrOffset, length);
    if (typeof SharedArrayBuffer !== "undefined" && (isInstance(value, SharedArrayBuffer) || value && isInstance(value.buffer, SharedArrayBuffer))) return fromArrayBuffer(value, encodingOrOffset, length);
    if (typeof value === "number") throw new TypeError('The "value" argument must not be of type number. Received type number');
    const valueOf = value.valueOf && value.valueOf();
    if (valueOf != null && valueOf !== value) return Buffer.from(valueOf, encodingOrOffset, length);
    const b = fromObject(value);
    if (b) return b;
    if (typeof Symbol !== "undefined" && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === "function") return Buffer.from(value[Symbol.toPrimitive]("string"), encodingOrOffset, length);
    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
}
/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/ Buffer.from = function(value, encodingOrOffset, length) {
    return from(value, encodingOrOffset, length);
};
// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype);
Object.setPrototypeOf(Buffer, Uint8Array);
function assertSize(size) {
    if (typeof size !== "number") throw new TypeError('"size" argument must be of type number');
    else if (size < 0) throw new RangeError('The value "' + size + '" is invalid for option "size"');
}
function alloc(size, fill, encoding) {
    assertSize(size);
    if (size <= 0) return createBuffer(size);
    if (fill !== undefined) // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpreted as a start offset.
    return typeof encoding === "string" ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
    return createBuffer(size);
}
/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/ Buffer.alloc = function(size, fill, encoding) {
    return alloc(size, fill, encoding);
};
function allocUnsafe(size) {
    assertSize(size);
    return createBuffer(size < 0 ? 0 : checked(size) | 0);
}
/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */ Buffer.allocUnsafe = function(size) {
    return allocUnsafe(size);
};
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */ Buffer.allocUnsafeSlow = function(size) {
    return allocUnsafe(size);
};
function fromString(string, encoding) {
    if (typeof encoding !== "string" || encoding === "") encoding = "utf8";
    if (!Buffer.isEncoding(encoding)) throw new TypeError("Unknown encoding: " + encoding);
    const length = byteLength(string, encoding) | 0;
    let buf = createBuffer(length);
    const actual = buf.write(string, encoding);
    if (actual !== length) // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual);
    return buf;
}
function fromArrayLike(array) {
    const length = array.length < 0 ? 0 : checked(array.length) | 0;
    const buf = createBuffer(length);
    for(let i = 0; i < length; i += 1)buf[i] = array[i] & 255;
    return buf;
}
function fromArrayView(arrayView) {
    if (isInstance(arrayView, Uint8Array)) {
        const copy = new Uint8Array(arrayView);
        return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
    }
    return fromArrayLike(arrayView);
}
function fromArrayBuffer(array, byteOffset, length) {
    if (byteOffset < 0 || array.byteLength < byteOffset) throw new RangeError('"offset" is outside of buffer bounds');
    if (array.byteLength < byteOffset + (length || 0)) throw new RangeError('"length" is outside of buffer bounds');
    let buf;
    if (byteOffset === undefined && length === undefined) buf = new Uint8Array(array);
    else if (length === undefined) buf = new Uint8Array(array, byteOffset);
    else buf = new Uint8Array(array, byteOffset, length);
    // Return an augmented `Uint8Array` instance
    Object.setPrototypeOf(buf, Buffer.prototype);
    return buf;
}
function fromObject(obj) {
    if (Buffer.isBuffer(obj)) {
        const len = checked(obj.length) | 0;
        const buf = createBuffer(len);
        if (buf.length === 0) return buf;
        obj.copy(buf, 0, 0, len);
        return buf;
    }
    if (obj.length !== undefined) {
        if (typeof obj.length !== "number" || numberIsNaN(obj.length)) return createBuffer(0);
        return fromArrayLike(obj);
    }
    if (obj.type === "Buffer" && Array.isArray(obj.data)) return fromArrayLike(obj.data);
}
function checked(length) {
    // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
    // length is NaN (which is otherwise coerced to zero.)
    if (length >= K_MAX_LENGTH) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + K_MAX_LENGTH.toString(16) + " bytes");
    return length | 0;
}
function SlowBuffer(length) {
    if (+length != length) length = 0;
    return Buffer.alloc(+length);
}
Buffer.isBuffer = function isBuffer(b) {
    return b != null && b._isBuffer === true && b !== Buffer.prototype // so Buffer.isBuffer(Buffer.prototype) will be false
    ;
};
Buffer.compare = function compare(a, b) {
    if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength);
    if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength);
    if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
    if (a === b) return 0;
    let x = a.length;
    let y = b.length;
    for(let i = 0, len = Math.min(x, y); i < len; ++i)if (a[i] !== b[i]) {
        x = a[i];
        y = b[i];
        break;
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
};
Buffer.isEncoding = function isEncoding(encoding) {
    switch(String(encoding).toLowerCase()){
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return true;
        default:
            return false;
    }
};
Buffer.concat = function concat(list, length) {
    if (!Array.isArray(list)) throw new TypeError('"list" argument must be an Array of Buffers');
    if (list.length === 0) return Buffer.alloc(0);
    let i;
    if (length === undefined) {
        length = 0;
        for(i = 0; i < list.length; ++i)length += list[i].length;
    }
    const buffer = Buffer.allocUnsafe(length);
    let pos = 0;
    for(i = 0; i < list.length; ++i){
        let buf = list[i];
        if (isInstance(buf, Uint8Array)) {
            if (pos + buf.length > buffer.length) {
                if (!Buffer.isBuffer(buf)) buf = Buffer.from(buf);
                buf.copy(buffer, pos);
            } else Uint8Array.prototype.set.call(buffer, buf, pos);
        } else if (!Buffer.isBuffer(buf)) throw new TypeError('"list" argument must be an Array of Buffers');
        else buf.copy(buffer, pos);
        pos += buf.length;
    }
    return buffer;
};
function byteLength(string, encoding) {
    if (Buffer.isBuffer(string)) return string.length;
    if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) return string.byteLength;
    if (typeof string !== "string") throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof string);
    const len = string.length;
    const mustMatch = arguments.length > 2 && arguments[2] === true;
    if (!mustMatch && len === 0) return 0;
    // Use a for loop to avoid recursion
    let loweredCase = false;
    for(;;)switch(encoding){
        case "ascii":
        case "latin1":
        case "binary":
            return len;
        case "utf8":
        case "utf-8":
            return utf8ToBytes(string).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return len * 2;
        case "hex":
            return len >>> 1;
        case "base64":
            return base64ToBytes(string).length;
        default:
            if (loweredCase) return mustMatch ? -1 : utf8ToBytes(string).length // assume utf8
            ;
            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
    }
}
Buffer.byteLength = byteLength;
function slowToString(encoding, start, end) {
    let loweredCase = false;
    // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
    // property of a typed array.
    // This behaves neither like String nor Uint8Array in that we set start/end
    // to their upper/lower bounds if the value passed is out of range.
    // undefined is handled specially as per ECMA-262 6th Edition,
    // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
    if (start === undefined || start < 0) start = 0;
    // Return early if start > this.length. Done here to prevent potential uint32
    // coercion fail below.
    if (start > this.length) return "";
    if (end === undefined || end > this.length) end = this.length;
    if (end <= 0) return "";
    // Force coercion to uint32. This will also coerce falsey/NaN values to 0.
    end >>>= 0;
    start >>>= 0;
    if (end <= start) return "";
    if (!encoding) encoding = "utf8";
    while(true)switch(encoding){
        case "hex":
            return hexSlice(this, start, end);
        case "utf8":
        case "utf-8":
            return utf8Slice(this, start, end);
        case "ascii":
            return asciiSlice(this, start, end);
        case "latin1":
        case "binary":
            return latin1Slice(this, start, end);
        case "base64":
            return base64Slice(this, start, end);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return utf16leSlice(this, start, end);
        default:
            if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
            encoding = (encoding + "").toLowerCase();
            loweredCase = true;
    }
}
// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
Buffer.prototype._isBuffer = true;
function swap(b, n, m) {
    const i = b[n];
    b[n] = b[m];
    b[m] = i;
}
Buffer.prototype.swap16 = function swap16() {
    const len = this.length;
    if (len % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
    for(let i = 0; i < len; i += 2)swap(this, i, i + 1);
    return this;
};
Buffer.prototype.swap32 = function swap32() {
    const len = this.length;
    if (len % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
    for(let i = 0; i < len; i += 4){
        swap(this, i, i + 3);
        swap(this, i + 1, i + 2);
    }
    return this;
};
Buffer.prototype.swap64 = function swap64() {
    const len = this.length;
    if (len % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
    for(let i = 0; i < len; i += 8){
        swap(this, i, i + 7);
        swap(this, i + 1, i + 6);
        swap(this, i + 2, i + 5);
        swap(this, i + 3, i + 4);
    }
    return this;
};
Buffer.prototype.toString = function toString() {
    const length = this.length;
    if (length === 0) return "";
    if (arguments.length === 0) return utf8Slice(this, 0, length);
    return slowToString.apply(this, arguments);
};
Buffer.prototype.toLocaleString = Buffer.prototype.toString;
Buffer.prototype.equals = function equals(b) {
    if (!Buffer.isBuffer(b)) throw new TypeError("Argument must be a Buffer");
    if (this === b) return true;
    return Buffer.compare(this, b) === 0;
};
Buffer.prototype.inspect = function inspect() {
    let str = "";
    const max = exports.INSPECT_MAX_BYTES;
    str = this.toString("hex", 0, max).replace(/(.{2})/g, "$1 ").trim();
    if (this.length > max) str += " ... ";
    return "<Buffer " + str + ">";
};
if (customInspectSymbol) Buffer.prototype[customInspectSymbol] = Buffer.prototype.inspect;
Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
    if (isInstance(target, Uint8Array)) target = Buffer.from(target, target.offset, target.byteLength);
    if (!Buffer.isBuffer(target)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof target);
    if (start === undefined) start = 0;
    if (end === undefined) end = target ? target.length : 0;
    if (thisStart === undefined) thisStart = 0;
    if (thisEnd === undefined) thisEnd = this.length;
    if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) throw new RangeError("out of range index");
    if (thisStart >= thisEnd && start >= end) return 0;
    if (thisStart >= thisEnd) return -1;
    if (start >= end) return 1;
    start >>>= 0;
    end >>>= 0;
    thisStart >>>= 0;
    thisEnd >>>= 0;
    if (this === target) return 0;
    let x = thisEnd - thisStart;
    let y = end - start;
    const len = Math.min(x, y);
    const thisCopy = this.slice(thisStart, thisEnd);
    const targetCopy = target.slice(start, end);
    for(let i = 0; i < len; ++i)if (thisCopy[i] !== targetCopy[i]) {
        x = thisCopy[i];
        y = targetCopy[i];
        break;
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
};
// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
    // Empty buffer means no match
    if (buffer.length === 0) return -1;
    // Normalize byteOffset
    if (typeof byteOffset === "string") {
        encoding = byteOffset;
        byteOffset = 0;
    } else if (byteOffset > 0x7fffffff) byteOffset = 0x7fffffff;
    else if (byteOffset < -2147483648) byteOffset = -2147483648;
    byteOffset = +byteOffset // Coerce to Number.
    ;
    if (numberIsNaN(byteOffset)) // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : buffer.length - 1;
    // Normalize byteOffset: negative offsets start from the end of the buffer
    if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
    if (byteOffset >= buffer.length) {
        if (dir) return -1;
        else byteOffset = buffer.length - 1;
    } else if (byteOffset < 0) {
        if (dir) byteOffset = 0;
        else return -1;
    }
    // Normalize val
    if (typeof val === "string") val = Buffer.from(val, encoding);
    // Finally, search either indexOf (if dir is true) or lastIndexOf
    if (Buffer.isBuffer(val)) {
        // Special case: looking for empty string/buffer always fails
        if (val.length === 0) return -1;
        return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
    } else if (typeof val === "number") {
        val = val & 0xFF // Search for a byte value [0-255]
        ;
        if (typeof Uint8Array.prototype.indexOf === "function") {
            if (dir) return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
            else return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
        }
        return arrayIndexOf(buffer, [
            val
        ], byteOffset, encoding, dir);
    }
    throw new TypeError("val must be string, number or Buffer");
}
function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
    let indexSize = 1;
    let arrLength = arr.length;
    let valLength = val.length;
    if (encoding !== undefined) {
        encoding = String(encoding).toLowerCase();
        if (encoding === "ucs2" || encoding === "ucs-2" || encoding === "utf16le" || encoding === "utf-16le") {
            if (arr.length < 2 || val.length < 2) return -1;
            indexSize = 2;
            arrLength /= 2;
            valLength /= 2;
            byteOffset /= 2;
        }
    }
    function read(buf, i) {
        if (indexSize === 1) return buf[i];
        else return buf.readUInt16BE(i * indexSize);
    }
    let i1;
    if (dir) {
        let foundIndex = -1;
        for(i1 = byteOffset; i1 < arrLength; i1++)if (read(arr, i1) === read(val, foundIndex === -1 ? 0 : i1 - foundIndex)) {
            if (foundIndex === -1) foundIndex = i1;
            if (i1 - foundIndex + 1 === valLength) return foundIndex * indexSize;
        } else {
            if (foundIndex !== -1) i1 -= i1 - foundIndex;
            foundIndex = -1;
        }
    } else {
        if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
        for(i1 = byteOffset; i1 >= 0; i1--){
            let found = true;
            for(let j = 0; j < valLength; j++)if (read(arr, i1 + j) !== read(val, j)) {
                found = false;
                break;
            }
            if (found) return i1;
        }
    }
    return -1;
}
Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
    return this.indexOf(val, byteOffset, encoding) !== -1;
};
Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
};
Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
};
function hexWrite(buf, string, offset, length) {
    offset = Number(offset) || 0;
    const remaining = buf.length - offset;
    if (!length) length = remaining;
    else {
        length = Number(length);
        if (length > remaining) length = remaining;
    }
    const strLen = string.length;
    if (length > strLen / 2) length = strLen / 2;
    let i;
    for(i = 0; i < length; ++i){
        const parsed = parseInt(string.substr(i * 2, 2), 16);
        if (numberIsNaN(parsed)) return i;
        buf[offset + i] = parsed;
    }
    return i;
}
function utf8Write(buf, string, offset, length) {
    return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
}
function asciiWrite(buf, string, offset, length) {
    return blitBuffer(asciiToBytes(string), buf, offset, length);
}
function base64Write(buf, string, offset, length) {
    return blitBuffer(base64ToBytes(string), buf, offset, length);
}
function ucs2Write(buf, string, offset, length) {
    return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
}
Buffer.prototype.write = function write(string, offset, length, encoding) {
    // Buffer#write(string)
    if (offset === undefined) {
        encoding = "utf8";
        length = this.length;
        offset = 0;
    // Buffer#write(string, encoding)
    } else if (length === undefined && typeof offset === "string") {
        encoding = offset;
        length = this.length;
        offset = 0;
    // Buffer#write(string, offset[, length][, encoding])
    } else if (isFinite(offset)) {
        offset = offset >>> 0;
        if (isFinite(length)) {
            length = length >>> 0;
            if (encoding === undefined) encoding = "utf8";
        } else {
            encoding = length;
            length = undefined;
        }
    } else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
    const remaining = this.length - offset;
    if (length === undefined || length > remaining) length = remaining;
    if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) throw new RangeError("Attempt to write outside buffer bounds");
    if (!encoding) encoding = "utf8";
    let loweredCase = false;
    for(;;)switch(encoding){
        case "hex":
            return hexWrite(this, string, offset, length);
        case "utf8":
        case "utf-8":
            return utf8Write(this, string, offset, length);
        case "ascii":
        case "latin1":
        case "binary":
            return asciiWrite(this, string, offset, length);
        case "base64":
            // Warning: maxLength not taken into account in base64Write
            return base64Write(this, string, offset, length);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return ucs2Write(this, string, offset, length);
        default:
            if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
    }
};
Buffer.prototype.toJSON = function toJSON() {
    return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
    };
};
function base64Slice(buf, start, end) {
    if (start === 0 && end === buf.length) return base64.fromByteArray(buf);
    else return base64.fromByteArray(buf.slice(start, end));
}
function utf8Slice(buf, start, end) {
    end = Math.min(buf.length, end);
    const res = [];
    let i = start;
    while(i < end){
        const firstByte = buf[i];
        let codePoint = null;
        let bytesPerSequence = firstByte > 0xEF ? 4 : firstByte > 0xDF ? 3 : firstByte > 0xBF ? 2 : 1;
        if (i + bytesPerSequence <= end) {
            let secondByte, thirdByte, fourthByte, tempCodePoint;
            switch(bytesPerSequence){
                case 1:
                    if (firstByte < 0x80) codePoint = firstByte;
                    break;
                case 2:
                    secondByte = buf[i + 1];
                    if ((secondByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0x1F) << 0x6 | secondByte & 0x3F;
                        if (tempCodePoint > 0x7F) codePoint = tempCodePoint;
                    }
                    break;
                case 3:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | thirdByte & 0x3F;
                        if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) codePoint = tempCodePoint;
                    }
                    break;
                case 4:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    fourthByte = buf[i + 3];
                    if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | fourthByte & 0x3F;
                        if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) codePoint = tempCodePoint;
                    }
            }
        }
        if (codePoint === null) {
            // we did not generate a valid codePoint so insert a
            // replacement char (U+FFFD) and advance only 1 byte
            codePoint = 0xFFFD;
            bytesPerSequence = 1;
        } else if (codePoint > 0xFFFF) {
            // encode to utf16 (surrogate pair dance)
            codePoint -= 0x10000;
            res.push(codePoint >>> 10 & 0x3FF | 0xD800);
            codePoint = 0xDC00 | codePoint & 0x3FF;
        }
        res.push(codePoint);
        i += bytesPerSequence;
    }
    return decodeCodePointsArray(res);
}
// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
const MAX_ARGUMENTS_LENGTH = 0x1000;
function decodeCodePointsArray(codePoints) {
    const len = codePoints.length;
    if (len <= MAX_ARGUMENTS_LENGTH) return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
    ;
    // Decode in chunks to avoid "call stack size exceeded".
    let res = "";
    let i = 0;
    while(i < len)res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
    return res;
}
function asciiSlice(buf, start, end) {
    let ret = "";
    end = Math.min(buf.length, end);
    for(let i = start; i < end; ++i)ret += String.fromCharCode(buf[i] & 0x7F);
    return ret;
}
function latin1Slice(buf, start, end) {
    let ret = "";
    end = Math.min(buf.length, end);
    for(let i = start; i < end; ++i)ret += String.fromCharCode(buf[i]);
    return ret;
}
function hexSlice(buf, start, end) {
    const len = buf.length;
    if (!start || start < 0) start = 0;
    if (!end || end < 0 || end > len) end = len;
    let out = "";
    for(let i = start; i < end; ++i)out += hexSliceLookupTable[buf[i]];
    return out;
}
function utf16leSlice(buf, start, end) {
    const bytes = buf.slice(start, end);
    let res = "";
    // If bytes.length is odd, the last 8 bits must be ignored (same as node.js)
    for(let i = 0; i < bytes.length - 1; i += 2)res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
    return res;
}
Buffer.prototype.slice = function slice(start, end) {
    const len = this.length;
    start = ~~start;
    end = end === undefined ? len : ~~end;
    if (start < 0) {
        start += len;
        if (start < 0) start = 0;
    } else if (start > len) start = len;
    if (end < 0) {
        end += len;
        if (end < 0) end = 0;
    } else if (end > len) end = len;
    if (end < start) end = start;
    const newBuf = this.subarray(start, end);
    // Return an augmented `Uint8Array` instance
    Object.setPrototypeOf(newBuf, Buffer.prototype);
    return newBuf;
};
/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */ function checkOffset(offset, ext, length) {
    if (offset % 1 !== 0 || offset < 0) throw new RangeError("offset is not uint");
    if (offset + ext > length) throw new RangeError("Trying to access beyond buffer length");
}
Buffer.prototype.readUintLE = Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength1, noAssert) {
    offset = offset >>> 0;
    byteLength1 = byteLength1 >>> 0;
    if (!noAssert) checkOffset(offset, byteLength1, this.length);
    let val = this[offset];
    let mul = 1;
    let i = 0;
    while(++i < byteLength1 && (mul *= 0x100))val += this[offset + i] * mul;
    return val;
};
Buffer.prototype.readUintBE = Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength2, noAssert) {
    offset = offset >>> 0;
    byteLength2 = byteLength2 >>> 0;
    if (!noAssert) checkOffset(offset, byteLength2, this.length);
    let val = this[offset + --byteLength2];
    let mul = 1;
    while(byteLength2 > 0 && (mul *= 0x100))val += this[offset + --byteLength2] * mul;
    return val;
};
Buffer.prototype.readUint8 = Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 1, this.length);
    return this[offset];
};
Buffer.prototype.readUint16LE = Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] | this[offset + 1] << 8;
};
Buffer.prototype.readUint16BE = Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] << 8 | this[offset + 1];
};
Buffer.prototype.readUint32LE = Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 0x1000000;
};
Buffer.prototype.readUint32BE = Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] * 0x1000000 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
};
Buffer.prototype.readBigUInt64LE = defineBigIntMethod(function readBigUInt64LE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, "offset");
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const lo = first + this[++offset] * 256 + this[++offset] * 65536 + this[++offset] * 2 ** 24;
    const hi = this[++offset] + this[++offset] * 256 + this[++offset] * 65536 + last * 2 ** 24;
    return BigInt(lo) + (BigInt(hi) << BigInt(32));
});
Buffer.prototype.readBigUInt64BE = defineBigIntMethod(function readBigUInt64BE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, "offset");
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const hi = first * 2 ** 24 + this[++offset] * 65536 + this[++offset] * 256 + this[++offset];
    const lo = this[++offset] * 2 ** 24 + this[++offset] * 65536 + this[++offset] * 256 + last;
    return (BigInt(hi) << BigInt(32)) + BigInt(lo);
});
Buffer.prototype.readIntLE = function readIntLE(offset, byteLength3, noAssert) {
    offset = offset >>> 0;
    byteLength3 = byteLength3 >>> 0;
    if (!noAssert) checkOffset(offset, byteLength3, this.length);
    let val = this[offset];
    let mul = 1;
    let i = 0;
    while(++i < byteLength3 && (mul *= 0x100))val += this[offset + i] * mul;
    mul *= 0x80;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength3);
    return val;
};
Buffer.prototype.readIntBE = function readIntBE(offset, byteLength4, noAssert) {
    offset = offset >>> 0;
    byteLength4 = byteLength4 >>> 0;
    if (!noAssert) checkOffset(offset, byteLength4, this.length);
    let i = byteLength4;
    let mul = 1;
    let val = this[offset + --i];
    while(i > 0 && (mul *= 0x100))val += this[offset + --i] * mul;
    mul *= 0x80;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength4);
    return val;
};
Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 1, this.length);
    if (!(this[offset] & 0x80)) return this[offset];
    return (0xff - this[offset] + 1) * -1;
};
Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    const val = this[offset] | this[offset + 1] << 8;
    return val & 0x8000 ? val | 0xFFFF0000 : val;
};
Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    const val = this[offset + 1] | this[offset] << 8;
    return val & 0x8000 ? val | 0xFFFF0000 : val;
};
Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
};
Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
};
Buffer.prototype.readBigInt64LE = defineBigIntMethod(function readBigInt64LE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, "offset");
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const val = this[offset + 4] + this[offset + 5] * 256 + this[offset + 6] * 65536 + (last << 24 // Overflow
    );
    return (BigInt(val) << BigInt(32)) + BigInt(first + this[++offset] * 256 + this[++offset] * 65536 + this[++offset] * 2 ** 24);
});
Buffer.prototype.readBigInt64BE = defineBigIntMethod(function readBigInt64BE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, "offset");
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const val = (first << 24) + this[++offset] * 65536 + this[++offset] * 256 + this[++offset];
    return (BigInt(val) << BigInt(32)) + BigInt(this[++offset] * 2 ** 24 + this[++offset] * 65536 + this[++offset] * 256 + last);
});
Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, true, 23, 4);
};
Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, false, 23, 4);
};
Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, true, 52, 8);
};
Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, false, 52, 8);
};
function checkInt(buf, value, offset, ext, max, min) {
    if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
    if (offset + ext > buf.length) throw new RangeError("Index out of range");
}
Buffer.prototype.writeUintLE = Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength5, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength5 = byteLength5 >>> 0;
    if (!noAssert) {
        const maxBytes = Math.pow(2, 8 * byteLength5) - 1;
        checkInt(this, value, offset, byteLength5, maxBytes, 0);
    }
    let mul = 1;
    let i = 0;
    this[offset] = value & 0xFF;
    while(++i < byteLength5 && (mul *= 0x100))this[offset + i] = value / mul & 0xFF;
    return offset + byteLength5;
};
Buffer.prototype.writeUintBE = Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength6, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength6 = byteLength6 >>> 0;
    if (!noAssert) {
        const maxBytes = Math.pow(2, 8 * byteLength6) - 1;
        checkInt(this, value, offset, byteLength6, maxBytes, 0);
    }
    let i = byteLength6 - 1;
    let mul = 1;
    this[offset + i] = value & 0xFF;
    while(--i >= 0 && (mul *= 0x100))this[offset + i] = value / mul & 0xFF;
    return offset + byteLength6;
};
Buffer.prototype.writeUint8 = Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
    this[offset] = value & 0xff;
    return offset + 1;
};
Buffer.prototype.writeUint16LE = Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    return offset + 2;
};
Buffer.prototype.writeUint16BE = Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
    return offset + 2;
};
Buffer.prototype.writeUint32LE = Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
    this[offset + 3] = value >>> 24;
    this[offset + 2] = value >>> 16;
    this[offset + 1] = value >>> 8;
    this[offset] = value & 0xff;
    return offset + 4;
};
Buffer.prototype.writeUint32BE = Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
    return offset + 4;
};
function wrtBigUInt64LE(buf, value, offset, min, max) {
    checkIntBI(value, min, max, buf, offset, 7);
    let lo = Number(value & BigInt(0xffffffff));
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    let hi = Number(value >> BigInt(32) & BigInt(0xffffffff));
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    return offset;
}
function wrtBigUInt64BE(buf, value, offset, min, max) {
    checkIntBI(value, min, max, buf, offset, 7);
    let lo = Number(value & BigInt(0xffffffff));
    buf[offset + 7] = lo;
    lo = lo >> 8;
    buf[offset + 6] = lo;
    lo = lo >> 8;
    buf[offset + 5] = lo;
    lo = lo >> 8;
    buf[offset + 4] = lo;
    let hi = Number(value >> BigInt(32) & BigInt(0xffffffff));
    buf[offset + 3] = hi;
    hi = hi >> 8;
    buf[offset + 2] = hi;
    hi = hi >> 8;
    buf[offset + 1] = hi;
    hi = hi >> 8;
    buf[offset] = hi;
    return offset + 8;
}
Buffer.prototype.writeBigUInt64LE = defineBigIntMethod(function writeBigUInt64LE(value, offset = 0) {
    return wrtBigUInt64LE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
});
Buffer.prototype.writeBigUInt64BE = defineBigIntMethod(function writeBigUInt64BE(value, offset = 0) {
    return wrtBigUInt64BE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
});
Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength7, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
        const limit = Math.pow(2, 8 * byteLength7 - 1);
        checkInt(this, value, offset, byteLength7, limit - 1, -limit);
    }
    let i = 0;
    let mul = 1;
    let sub = 0;
    this[offset] = value & 0xFF;
    while(++i < byteLength7 && (mul *= 0x100)){
        if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) sub = 1;
        this[offset + i] = (value / mul >> 0) - sub & 0xFF;
    }
    return offset + byteLength7;
};
Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength8, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
        const limit = Math.pow(2, 8 * byteLength8 - 1);
        checkInt(this, value, offset, byteLength8, limit - 1, -limit);
    }
    let i = byteLength8 - 1;
    let mul = 1;
    let sub = 0;
    this[offset + i] = value & 0xFF;
    while(--i >= 0 && (mul *= 0x100)){
        if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) sub = 1;
        this[offset + i] = (value / mul >> 0) - sub & 0xFF;
    }
    return offset + byteLength8;
};
Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -128);
    if (value < 0) value = 0xff + value + 1;
    this[offset] = value & 0xff;
    return offset + 1;
};
Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -32768);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    return offset + 2;
};
Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -32768);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
    return offset + 2;
};
Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -2147483648);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    this[offset + 2] = value >>> 16;
    this[offset + 3] = value >>> 24;
    return offset + 4;
};
Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -2147483648);
    if (value < 0) value = 0xffffffff + value + 1;
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
    return offset + 4;
};
Buffer.prototype.writeBigInt64LE = defineBigIntMethod(function writeBigInt64LE(value, offset = 0) {
    return wrtBigUInt64LE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
});
Buffer.prototype.writeBigInt64BE = defineBigIntMethod(function writeBigInt64BE(value, offset = 0) {
    return wrtBigUInt64BE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
});
function checkIEEE754(buf, value, offset, ext, max, min) {
    if (offset + ext > buf.length) throw new RangeError("Index out of range");
    if (offset < 0) throw new RangeError("Index out of range");
}
function writeFloat(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -340282346638528860000000000000000000000);
    ieee754.write(buf, value, offset, littleEndian, 23, 4);
    return offset + 4;
}
Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
    return writeFloat(this, value, offset, true, noAssert);
};
Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
    return writeFloat(this, value, offset, false, noAssert);
};
function writeDouble(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000);
    ieee754.write(buf, value, offset, littleEndian, 52, 8);
    return offset + 8;
}
Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
    return writeDouble(this, value, offset, true, noAssert);
};
Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
    return writeDouble(this, value, offset, false, noAssert);
};
// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy(target, targetStart, start, end) {
    if (!Buffer.isBuffer(target)) throw new TypeError("argument should be a Buffer");
    if (!start) start = 0;
    if (!end && end !== 0) end = this.length;
    if (targetStart >= target.length) targetStart = target.length;
    if (!targetStart) targetStart = 0;
    if (end > 0 && end < start) end = start;
    // Copy 0 bytes; we're done
    if (end === start) return 0;
    if (target.length === 0 || this.length === 0) return 0;
    // Fatal error conditions
    if (targetStart < 0) throw new RangeError("targetStart out of bounds");
    if (start < 0 || start >= this.length) throw new RangeError("Index out of range");
    if (end < 0) throw new RangeError("sourceEnd out of bounds");
    // Are we oob?
    if (end > this.length) end = this.length;
    if (target.length - targetStart < end - start) end = target.length - targetStart + start;
    const len = end - start;
    if (this === target && typeof Uint8Array.prototype.copyWithin === "function") // Use built-in when available, missing from IE11
    this.copyWithin(targetStart, start, end);
    else Uint8Array.prototype.set.call(target, this.subarray(start, end), targetStart);
    return len;
};
// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill(val, start, end, encoding) {
    // Handle string cases:
    if (typeof val === "string") {
        if (typeof start === "string") {
            encoding = start;
            start = 0;
            end = this.length;
        } else if (typeof end === "string") {
            encoding = end;
            end = this.length;
        }
        if (encoding !== undefined && typeof encoding !== "string") throw new TypeError("encoding must be a string");
        if (typeof encoding === "string" && !Buffer.isEncoding(encoding)) throw new TypeError("Unknown encoding: " + encoding);
        if (val.length === 1) {
            const code = val.charCodeAt(0);
            if (encoding === "utf8" && code < 128 || encoding === "latin1") // Fast path: If `val` fits into a single byte, use that numeric value.
            val = code;
        }
    } else if (typeof val === "number") val = val & 255;
    else if (typeof val === "boolean") val = Number(val);
    // Invalid ranges are not set to a default, so can range check early.
    if (start < 0 || this.length < start || this.length < end) throw new RangeError("Out of range index");
    if (end <= start) return this;
    start = start >>> 0;
    end = end === undefined ? this.length : end >>> 0;
    if (!val) val = 0;
    let i;
    if (typeof val === "number") for(i = start; i < end; ++i)this[i] = val;
    else {
        const bytes = Buffer.isBuffer(val) ? val : Buffer.from(val, encoding);
        const len = bytes.length;
        if (len === 0) throw new TypeError('The value "' + val + '" is invalid for argument "value"');
        for(i = 0; i < end - start; ++i)this[i + start] = bytes[i % len];
    }
    return this;
};
// CUSTOM ERRORS
// =============
// Simplified versions from Node, changed for Buffer-only usage
const errors = {};
function E(sym, getMessage, Base) {
    errors[sym] = class NodeError extends Base {
        constructor(){
            super();
            Object.defineProperty(this, "message", {
                value: getMessage.apply(this, arguments),
                writable: true,
                configurable: true
            });
            // Add the error code to the name to include it in the stack trace.
            this.name = `${this.name} [${sym}]`;
            // Access the stack to generate the error message including the error code
            // from the name.
            this.stack // eslint-disable-line no-unused-expressions
            ;
            // Reset the name to the actual name.
            delete this.name;
        }
        get code() {
            return sym;
        }
        set code(value) {
            Object.defineProperty(this, "code", {
                configurable: true,
                enumerable: true,
                value,
                writable: true
            });
        }
        toString() {
            return `${this.name} [${sym}]: ${this.message}`;
        }
    };
}
E("ERR_BUFFER_OUT_OF_BOUNDS", function(name) {
    if (name) return `${name} is outside of buffer bounds`;
    return "Attempt to access memory outside buffer bounds";
}, RangeError);
E("ERR_INVALID_ARG_TYPE", function(name, actual) {
    return `The "${name}" argument must be of type number. Received type ${typeof actual}`;
}, TypeError);
E("ERR_OUT_OF_RANGE", function(str, range, input) {
    let msg = `The value of "${str}" is out of range.`;
    let received = input;
    if (Number.isInteger(input) && Math.abs(input) > 2 ** 32) received = addNumericalSeparator(String(input));
    else if (typeof input === "bigint") {
        received = String(input);
        if (input > BigInt(2) ** BigInt(32) || input < -(BigInt(2) ** BigInt(32))) received = addNumericalSeparator(received);
        received += "n";
    }
    msg += ` It must be ${range}. Received ${received}`;
    return msg;
}, RangeError);
function addNumericalSeparator(val) {
    let res = "";
    let i = val.length;
    const start = val[0] === "-" ? 1 : 0;
    for(; i >= start + 4; i -= 3)res = `_${val.slice(i - 3, i)}${res}`;
    return `${val.slice(0, i)}${res}`;
}
// CHECK FUNCTIONS
// ===============
function checkBounds(buf, offset, byteLength9) {
    validateNumber(offset, "offset");
    if (buf[offset] === undefined || buf[offset + byteLength9] === undefined) boundsError(offset, buf.length - (byteLength9 + 1));
}
function checkIntBI(value, min, max, buf, offset, byteLength10) {
    if (value > max || value < min) {
        const n = typeof min === "bigint" ? "n" : "";
        let range;
        if (byteLength10 > 3) {
            if (min === 0 || min === BigInt(0)) range = `>= 0${n} and < 2${n} ** ${(byteLength10 + 1) * 8}${n}`;
            else range = `>= -(2${n} ** ${(byteLength10 + 1) * 8 - 1}${n}) and < 2 ** ` + `${(byteLength10 + 1) * 8 - 1}${n}`;
        } else range = `>= ${min}${n} and <= ${max}${n}`;
        throw new errors.ERR_OUT_OF_RANGE("value", range, value);
    }
    checkBounds(buf, offset, byteLength10);
}
function validateNumber(value, name) {
    if (typeof value !== "number") throw new errors.ERR_INVALID_ARG_TYPE(name, "number", value);
}
function boundsError(value, length, type) {
    if (Math.floor(value) !== value) {
        validateNumber(value, type);
        throw new errors.ERR_OUT_OF_RANGE(type || "offset", "an integer", value);
    }
    if (length < 0) throw new errors.ERR_BUFFER_OUT_OF_BOUNDS();
    throw new errors.ERR_OUT_OF_RANGE(type || "offset", `>= ${type ? 1 : 0} and <= ${length}`, value);
}
// HELPER FUNCTIONS
// ================
const INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
function base64clean(str) {
    // Node takes equal signs as end of the Base64 encoding
    str = str.split("=")[0];
    // Node strips out invalid characters like \n and \t from the string, base64-js does not
    str = str.trim().replace(INVALID_BASE64_RE, "");
    // Node converts strings with length < 2 to ''
    if (str.length < 2) return "";
    // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
    while(str.length % 4 !== 0)str = str + "=";
    return str;
}
function utf8ToBytes(string, units) {
    units = units || Infinity;
    let codePoint;
    const length = string.length;
    let leadSurrogate = null;
    const bytes = [];
    for(let i = 0; i < length; ++i){
        codePoint = string.charCodeAt(i);
        // is surrogate component
        if (codePoint > 0xD7FF && codePoint < 0xE000) {
            // last char was a lead
            if (!leadSurrogate) {
                // no lead yet
                if (codePoint > 0xDBFF) {
                    // unexpected trail
                    if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                    continue;
                } else if (i + 1 === length) {
                    // unpaired lead
                    if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                    continue;
                }
                // valid lead
                leadSurrogate = codePoint;
                continue;
            }
            // 2 leads in a row
            if (codePoint < 0xDC00) {
                if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                leadSurrogate = codePoint;
                continue;
            }
            // valid surrogate pair
            codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
        } else if (leadSurrogate) // valid bmp char, but last char was a lead
        {
            if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
        }
        leadSurrogate = null;
        // encode utf8
        if (codePoint < 0x80) {
            if ((units -= 1) < 0) break;
            bytes.push(codePoint);
        } else if (codePoint < 0x800) {
            if ((units -= 2) < 0) break;
            bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
        } else if (codePoint < 0x10000) {
            if ((units -= 3) < 0) break;
            bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
        } else if (codePoint < 0x110000) {
            if ((units -= 4) < 0) break;
            bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
        } else throw new Error("Invalid code point");
    }
    return bytes;
}
function asciiToBytes(str) {
    const byteArray = [];
    for(let i = 0; i < str.length; ++i)// Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF);
    return byteArray;
}
function utf16leToBytes(str, units) {
    let c, hi, lo;
    const byteArray = [];
    for(let i = 0; i < str.length; ++i){
        if ((units -= 2) < 0) break;
        c = str.charCodeAt(i);
        hi = c >> 8;
        lo = c % 256;
        byteArray.push(lo);
        byteArray.push(hi);
    }
    return byteArray;
}
function base64ToBytes(str) {
    return base64.toByteArray(base64clean(str));
}
function blitBuffer(src, dst, offset, length) {
    let i;
    for(i = 0; i < length; ++i){
        if (i + offset >= dst.length || i >= src.length) break;
        dst[i + offset] = src[i];
    }
    return i;
}
// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function isInstance(obj, type) {
    return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
}
function numberIsNaN(obj) {
    // For IE11 support
    return obj !== obj // eslint-disable-line no-self-compare
    ;
}
// Create lookup table for `toString('hex')`
// See: https://github.com/feross/buffer/issues/219
const hexSliceLookupTable = function() {
    const alphabet = "0123456789abcdef";
    const table = new Array(256);
    for(let i = 0; i < 16; ++i){
        const i16 = i * 16;
        for(let j = 0; j < 16; ++j)table[i16 + j] = alphabet[i] + alphabet[j];
    }
    return table;
}();
// Return not function with Error if BigInt not supported
function defineBigIntMethod(fn) {
    return typeof BigInt === "undefined" ? BufferBigIntNotDefined : fn;
}
function BufferBigIntNotDefined() {
    throw new Error("BigInt not supported");
}

},{"base64-js":"eIiSV","ieee754":"cO95r"}],"eIiSV":[function(require,module,exports) {
"use strict";
exports.byteLength = byteLength;
exports.toByteArray = toByteArray;
exports.fromByteArray = fromByteArray;
var lookup = [];
var revLookup = [];
var Arr = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
var code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for(var i = 0, len = code.length; i < len; ++i){
    lookup[i] = code[i];
    revLookup[code.charCodeAt(i)] = i;
}
// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup["-".charCodeAt(0)] = 62;
revLookup["_".charCodeAt(0)] = 63;
function getLens(b64) {
    var len1 = b64.length;
    if (len1 % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
    // Trim off extra bytes after placeholder bytes are found
    // See: https://github.com/beatgammit/base64-js/issues/42
    var validLen = b64.indexOf("=");
    if (validLen === -1) validLen = len1;
    var placeHoldersLen = validLen === len1 ? 0 : 4 - validLen % 4;
    return [
        validLen,
        placeHoldersLen
    ];
}
// base64 is 4/3 + up to two characters of the original data
function byteLength(b64) {
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function _byteLength(b64, validLen, placeHoldersLen) {
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function toByteArray(b64) {
    var tmp;
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
    var curByte = 0;
    // if there are placeholders, only get up to the last complete 4 chars
    var len2 = placeHoldersLen > 0 ? validLen - 4 : validLen;
    var i1;
    for(i1 = 0; i1 < len2; i1 += 4){
        tmp = revLookup[b64.charCodeAt(i1)] << 18 | revLookup[b64.charCodeAt(i1 + 1)] << 12 | revLookup[b64.charCodeAt(i1 + 2)] << 6 | revLookup[b64.charCodeAt(i1 + 3)];
        arr[curByte++] = tmp >> 16 & 0xFF;
        arr[curByte++] = tmp >> 8 & 0xFF;
        arr[curByte++] = tmp & 0xFF;
    }
    if (placeHoldersLen === 2) {
        tmp = revLookup[b64.charCodeAt(i1)] << 2 | revLookup[b64.charCodeAt(i1 + 1)] >> 4;
        arr[curByte++] = tmp & 0xFF;
    }
    if (placeHoldersLen === 1) {
        tmp = revLookup[b64.charCodeAt(i1)] << 10 | revLookup[b64.charCodeAt(i1 + 1)] << 4 | revLookup[b64.charCodeAt(i1 + 2)] >> 2;
        arr[curByte++] = tmp >> 8 & 0xFF;
        arr[curByte++] = tmp & 0xFF;
    }
    return arr;
}
function tripletToBase64(num) {
    return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F];
}
function encodeChunk(uint8, start, end) {
    var tmp;
    var output = [];
    for(var i2 = start; i2 < end; i2 += 3){
        tmp = (uint8[i2] << 16 & 0xFF0000) + (uint8[i2 + 1] << 8 & 0xFF00) + (uint8[i2 + 2] & 0xFF);
        output.push(tripletToBase64(tmp));
    }
    return output.join("");
}
function fromByteArray(uint8) {
    var tmp;
    var len3 = uint8.length;
    var extraBytes = len3 % 3 // if we have 1 byte left, pad 2 bytes
    ;
    var parts = [];
    var maxChunkLength = 16383 // must be multiple of 3
    ;
    // go through the array every three bytes, we'll deal with trailing stuff later
    for(var i3 = 0, len2 = len3 - extraBytes; i3 < len2; i3 += maxChunkLength)parts.push(encodeChunk(uint8, i3, i3 + maxChunkLength > len2 ? len2 : i3 + maxChunkLength));
    // pad the end with zeros, but make sure to not forget the extra bytes
    if (extraBytes === 1) {
        tmp = uint8[len3 - 1];
        parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 0x3F] + "==");
    } else if (extraBytes === 2) {
        tmp = (uint8[len3 - 2] << 8) + uint8[len3 - 1];
        parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 0x3F] + lookup[tmp << 2 & 0x3F] + "=");
    }
    return parts.join("");
}

},{}],"cO95r":[function(require,module,exports) {
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ exports.read = function(buffer, offset, isLE, mLen, nBytes) {
    var e, m;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var nBits = -7;
    var i = isLE ? nBytes - 1 : 0;
    var d = isLE ? -1 : 1;
    var s = buffer[offset + i];
    i += d;
    e = s & (1 << -nBits) - 1;
    s >>= -nBits;
    nBits += eLen;
    for(; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8);
    m = e & (1 << -nBits) - 1;
    e >>= -nBits;
    nBits += mLen;
    for(; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8);
    if (e === 0) e = 1 - eBias;
    else if (e === eMax) return m ? NaN : (s ? -1 : 1) * Infinity;
    else {
        m = m + Math.pow(2, mLen);
        e = e - eBias;
    }
    return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
};
exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
    var e, m, c;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
    var i = isLE ? 0 : nBytes - 1;
    var d = isLE ? 1 : -1;
    var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
    value = Math.abs(value);
    if (isNaN(value) || value === Infinity) {
        m = isNaN(value) ? 1 : 0;
        e = eMax;
    } else {
        e = Math.floor(Math.log(value) / Math.LN2);
        if (value * (c = Math.pow(2, -e)) < 1) {
            e--;
            c *= 2;
        }
        if (e + eBias >= 1) value += rt / c;
        else value += rt * Math.pow(2, 1 - eBias);
        if (value * c >= 2) {
            e++;
            c /= 2;
        }
        if (e + eBias >= eMax) {
            m = 0;
            e = eMax;
        } else if (e + eBias >= 1) {
            m = (value * c - 1) * Math.pow(2, mLen);
            e = e + eBias;
        } else {
            m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
            e = 0;
        }
    }
    for(; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8);
    e = e << mLen | m;
    eLen += mLen;
    for(; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8);
    buffer[offset + i - d] |= s * 128;
};

},{}],"1VRIM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("./../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
"use strict";
class InterceptorManager {
    constructor(){
        this.handlers = [];
    }
    /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */ use(fulfilled, rejected, options) {
        this.handlers.push({
            fulfilled,
            rejected,
            synchronous: options ? options.synchronous : false,
            runWhen: options ? options.runWhen : null
        });
        return this.handlers.length - 1;
    }
    /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */ eject(id) {
        if (this.handlers[id]) this.handlers[id] = null;
    }
    /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */ clear() {
        if (this.handlers) this.handlers = [];
    }
    /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */ forEach(fn) {
        (0, _utilsJsDefault.default).forEach(this.handlers, function forEachHandler(h) {
            if (h !== null) fn(h);
        });
    }
}
exports.default = InterceptorManager;

},{"./../utils.js":"5By4s","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6sjJ6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _transformDataJs = require("./transformData.js");
var _transformDataJsDefault = parcelHelpers.interopDefault(_transformDataJs);
var _isCancelJs = require("../cancel/isCancel.js");
var _isCancelJsDefault = parcelHelpers.interopDefault(_isCancelJs);
var _indexJs = require("../defaults/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _canceledErrorJs = require("../cancel/CanceledError.js");
var _canceledErrorJsDefault = parcelHelpers.interopDefault(_canceledErrorJs);
var _axiosHeadersJs = require("../core/AxiosHeaders.js");
var _axiosHeadersJsDefault = parcelHelpers.interopDefault(_axiosHeadersJs);
"use strict";
/**
 * Throws a `CanceledError` if cancellation has been requested.
 *
 * @param {Object} config The config that is to be used for the request
 *
 * @returns {void}
 */ function throwIfCancellationRequested(config) {
    if (config.cancelToken) config.cancelToken.throwIfRequested();
    if (config.signal && config.signal.aborted) throw new (0, _canceledErrorJsDefault.default)();
}
function dispatchRequest(config) {
    throwIfCancellationRequested(config);
    config.headers = (0, _axiosHeadersJsDefault.default).from(config.headers);
    // Transform request data
    config.data = (0, _transformDataJsDefault.default).call(config, config.transformRequest);
    const adapter = config.adapter || (0, _indexJsDefault.default).adapter;
    return adapter(config).then(function onAdapterResolution(response) {
        throwIfCancellationRequested(config);
        // Transform response data
        response.data = (0, _transformDataJsDefault.default).call(config, config.transformResponse, response);
        response.headers = (0, _axiosHeadersJsDefault.default).from(response.headers);
        return response;
    }, function onAdapterRejection(reason) {
        if (!(0, _isCancelJsDefault.default)(reason)) {
            throwIfCancellationRequested(config);
            // Transform response data
            if (reason && reason.response) {
                reason.response.data = (0, _transformDataJsDefault.default).call(config, config.transformResponse, reason.response);
                reason.response.headers = (0, _axiosHeadersJsDefault.default).from(reason.response.headers);
            }
        }
        return Promise.reject(reason);
    });
}
exports.default = dispatchRequest;

},{"./transformData.js":"eRqJY","../cancel/isCancel.js":"a0VmF","../defaults/index.js":"hXfHM","../cancel/CanceledError.js":"9PwCG","../core/AxiosHeaders.js":"cgSSx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eRqJY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("./../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _indexJs = require("../defaults/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _axiosHeadersJs = require("../core/AxiosHeaders.js");
var _axiosHeadersJsDefault = parcelHelpers.interopDefault(_axiosHeadersJs);
"use strict";
function transformData(fns, response) {
    const config = this || (0, _indexJsDefault.default);
    const context = response || config;
    const headers = (0, _axiosHeadersJsDefault.default).from(context.headers);
    let data = context.data;
    (0, _utilsJsDefault.default).forEach(fns, function transform(fn) {
        data = fn.call(config, data, headers.normalize(), response ? response.status : undefined);
    });
    headers.normalize();
    return data;
}
exports.default = transformData;

},{"./../utils.js":"5By4s","../defaults/index.js":"hXfHM","../core/AxiosHeaders.js":"cgSSx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hXfHM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _axiosErrorJs = require("../core/AxiosError.js");
var _axiosErrorJsDefault = parcelHelpers.interopDefault(_axiosErrorJs);
var _transitionalJs = require("./transitional.js");
var _transitionalJsDefault = parcelHelpers.interopDefault(_transitionalJs);
var _toFormDataJs = require("../helpers/toFormData.js");
var _toFormDataJsDefault = parcelHelpers.interopDefault(_toFormDataJs);
var _toURLEncodedFormJs = require("../helpers/toURLEncodedForm.js");
var _toURLEncodedFormJsDefault = parcelHelpers.interopDefault(_toURLEncodedFormJs);
var _indexJs = require("../platform/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _formDataToJSONJs = require("../helpers/formDataToJSON.js");
var _formDataToJSONJsDefault = parcelHelpers.interopDefault(_formDataToJSONJs);
var _indexJs1 = require("../adapters/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
"use strict";
var process = require("process");
const DEFAULT_CONTENT_TYPE = {
    "Content-Type": "application/x-www-form-urlencoded"
};
/**
 * If the browser has an XMLHttpRequest object, use the XHR adapter, otherwise use the HTTP
 * adapter
 *
 * @returns {Function}
 */ function getDefaultAdapter() {
    let adapter;
    if (typeof XMLHttpRequest !== "undefined") // For browsers use XHR adapter
    adapter = (0, _indexJsDefault1.default).getAdapter("xhr");
    else if (typeof process !== "undefined" && (0, _utilsJsDefault.default).kindOf(process) === "process") // For node use HTTP adapter
    adapter = (0, _indexJsDefault1.default).getAdapter("http");
    return adapter;
}
/**
 * It takes a string, tries to parse it, and if it fails, it returns the stringified version
 * of the input
 *
 * @param {any} rawValue - The value to be stringified.
 * @param {Function} parser - A function that parses a string into a JavaScript object.
 * @param {Function} encoder - A function that takes a value and returns a string.
 *
 * @returns {string} A stringified version of the rawValue.
 */ function stringifySafely(rawValue, parser, encoder) {
    if ((0, _utilsJsDefault.default).isString(rawValue)) try {
        (parser || JSON.parse)(rawValue);
        return (0, _utilsJsDefault.default).trim(rawValue);
    } catch (e) {
        if (e.name !== "SyntaxError") throw e;
    }
    return (encoder || JSON.stringify)(rawValue);
}
const defaults = {
    transitional: (0, _transitionalJsDefault.default),
    adapter: getDefaultAdapter(),
    transformRequest: [
        function transformRequest(data, headers) {
            const contentType = headers.getContentType() || "";
            const hasJSONContentType = contentType.indexOf("application/json") > -1;
            const isObjectPayload = (0, _utilsJsDefault.default).isObject(data);
            if (isObjectPayload && (0, _utilsJsDefault.default).isHTMLForm(data)) data = new FormData(data);
            const isFormData = (0, _utilsJsDefault.default).isFormData(data);
            if (isFormData) {
                if (!hasJSONContentType) return data;
                return hasJSONContentType ? JSON.stringify((0, _formDataToJSONJsDefault.default)(data)) : data;
            }
            if ((0, _utilsJsDefault.default).isArrayBuffer(data) || (0, _utilsJsDefault.default).isBuffer(data) || (0, _utilsJsDefault.default).isStream(data) || (0, _utilsJsDefault.default).isFile(data) || (0, _utilsJsDefault.default).isBlob(data)) return data;
            if ((0, _utilsJsDefault.default).isArrayBufferView(data)) return data.buffer;
            if ((0, _utilsJsDefault.default).isURLSearchParams(data)) {
                headers.setContentType("application/x-www-form-urlencoded;charset=utf-8", false);
                return data.toString();
            }
            let isFileList;
            if (isObjectPayload) {
                if (contentType.indexOf("application/x-www-form-urlencoded") > -1) return (0, _toURLEncodedFormJsDefault.default)(data, this.formSerializer).toString();
                if ((isFileList = (0, _utilsJsDefault.default).isFileList(data)) || contentType.indexOf("multipart/form-data") > -1) {
                    const _FormData = this.env && this.env.FormData;
                    return (0, _toFormDataJsDefault.default)(isFileList ? {
                        "files[]": data
                    } : data, _FormData && new _FormData(), this.formSerializer);
                }
            }
            if (isObjectPayload || hasJSONContentType) {
                headers.setContentType("application/json", false);
                return stringifySafely(data);
            }
            return data;
        }
    ],
    transformResponse: [
        function transformResponse(data) {
            const transitional = this.transitional || defaults.transitional;
            const forcedJSONParsing = transitional && transitional.forcedJSONParsing;
            const JSONRequested = this.responseType === "json";
            if (data && (0, _utilsJsDefault.default).isString(data) && (forcedJSONParsing && !this.responseType || JSONRequested)) {
                const silentJSONParsing = transitional && transitional.silentJSONParsing;
                const strictJSONParsing = !silentJSONParsing && JSONRequested;
                try {
                    return JSON.parse(data);
                } catch (e) {
                    if (strictJSONParsing) {
                        if (e.name === "SyntaxError") throw (0, _axiosErrorJsDefault.default).from(e, (0, _axiosErrorJsDefault.default).ERR_BAD_RESPONSE, this, null, this.response);
                        throw e;
                    }
                }
            }
            return data;
        }
    ],
    /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */ timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
        FormData: (0, _indexJsDefault.default).classes.FormData,
        Blob: (0, _indexJsDefault.default).classes.Blob
    },
    validateStatus: function validateStatus(status) {
        return status >= 200 && status < 300;
    },
    headers: {
        common: {
            "Accept": "application/json, text/plain, */*"
        }
    }
};
(0, _utilsJsDefault.default).forEach([
    "delete",
    "get",
    "head"
], function forEachMethodNoData(method) {
    defaults.headers[method] = {};
});
(0, _utilsJsDefault.default).forEach([
    "post",
    "put",
    "patch"
], function forEachMethodWithData(method) {
    defaults.headers[method] = (0, _utilsJsDefault.default).merge(DEFAULT_CONTENT_TYPE);
});
exports.default = defaults;

},{"../utils.js":"5By4s","../core/AxiosError.js":"3u8Tl","./transitional.js":"lM32f","../helpers/toFormData.js":"ajoez","../helpers/toURLEncodedForm.js":"9hjry","../platform/index.js":"7tDev","../helpers/formDataToJSON.js":"01RfH","../adapters/index.js":"aeXzy","process":"d5jf4","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lM32f":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
"use strict";
exports.default = {
    silentJSONParsing: true,
    forcedJSONParsing: true,
    clarifyTimeoutError: false
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9hjry":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _toFormDataJs = require("./toFormData.js");
var _toFormDataJsDefault = parcelHelpers.interopDefault(_toFormDataJs);
var _indexJs = require("../platform/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
"use strict";
function toURLEncodedForm(data, options) {
    return (0, _toFormDataJsDefault.default)(data, new (0, _indexJsDefault.default).classes.URLSearchParams(), Object.assign({
        visitor: function(value, key, path, helpers) {
            if ((0, _indexJsDefault.default).isNode && (0, _utilsJsDefault.default).isBuffer(value)) {
                this.append(key, value.toString("base64"));
                return false;
            }
            return helpers.defaultVisitor.apply(this, arguments);
        }
    }, options));
}
exports.default = toURLEncodedForm;

},{"../utils.js":"5By4s","./toFormData.js":"ajoez","../platform/index.js":"7tDev","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7tDev":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>(0, _indexJsDefault.default));
var _indexJs = require("./node/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);

},{"./node/index.js":"cVeqE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cVeqE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _urlsearchParamsJs = require("./classes/URLSearchParams.js");
var _urlsearchParamsJsDefault = parcelHelpers.interopDefault(_urlsearchParamsJs);
var _formDataJs = require("./classes/FormData.js");
var _formDataJsDefault = parcelHelpers.interopDefault(_formDataJs);
/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 *
 * @returns {boolean}
 */ const isStandardBrowserEnv = (()=>{
    let product;
    if (typeof navigator !== "undefined" && ((product = navigator.product) === "ReactNative" || product === "NativeScript" || product === "NS")) return false;
    return typeof window !== "undefined" && typeof document !== "undefined";
})();
exports.default = {
    isBrowser: true,
    classes: {
        URLSearchParams: (0, _urlsearchParamsJsDefault.default),
        FormData: (0, _formDataJsDefault.default),
        Blob
    },
    isStandardBrowserEnv,
    protocols: [
        "http",
        "https",
        "file",
        "blob",
        "url",
        "data"
    ]
};

},{"./classes/URLSearchParams.js":"5cIHE","./classes/FormData.js":"7i1jd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5cIHE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _axiosURLSearchParamsJs = require("../../../helpers/AxiosURLSearchParams.js");
var _axiosURLSearchParamsJsDefault = parcelHelpers.interopDefault(_axiosURLSearchParamsJs);
"use strict";
exports.default = typeof URLSearchParams !== "undefined" ? URLSearchParams : (0, _axiosURLSearchParamsJsDefault.default);

},{"../../../helpers/AxiosURLSearchParams.js":"hz84m","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7i1jd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
"use strict";
exports.default = FormData;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"01RfH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
"use strict";
/**
 * It takes a string like `foo[x][y][z]` and returns an array like `['foo', 'x', 'y', 'z']
 *
 * @param {string} name - The name of the property to get.
 *
 * @returns An array of strings.
 */ function parsePropPath(name) {
    // foo[x][y][z]
    // foo.x.y.z
    // foo-x-y-z
    // foo x y z
    return (0, _utilsJsDefault.default).matchAll(/\w+|\[(\w*)]/g, name).map((match)=>{
        return match[0] === "[]" ? "" : match[1] || match[0];
    });
}
/**
 * Convert an array to an object.
 *
 * @param {Array<any>} arr - The array to convert to an object.
 *
 * @returns An object with the same keys and values as the array.
 */ function arrayToObject(arr) {
    const obj = {};
    const keys = Object.keys(arr);
    let i;
    const len = keys.length;
    let key;
    for(i = 0; i < len; i++){
        key = keys[i];
        obj[key] = arr[key];
    }
    return obj;
}
/**
 * It takes a FormData object and returns a JavaScript object
 *
 * @param {string} formData The FormData object to convert to JSON.
 *
 * @returns {Object<string, any> | null} The converted object.
 */ function formDataToJSON(formData) {
    function buildPath(path, value, target, index) {
        let name = path[index++];
        const isNumericKey = Number.isFinite(+name);
        const isLast = index >= path.length;
        name = !name && (0, _utilsJsDefault.default).isArray(target) ? target.length : name;
        if (isLast) {
            if ((0, _utilsJsDefault.default).hasOwnProp(target, name)) target[name] = [
                target[name],
                value
            ];
            else target[name] = value;
            return !isNumericKey;
        }
        if (!target[name] || !(0, _utilsJsDefault.default).isObject(target[name])) target[name] = [];
        const result = buildPath(path, value, target[name], index);
        if (result && (0, _utilsJsDefault.default).isArray(target[name])) target[name] = arrayToObject(target[name]);
        return !isNumericKey;
    }
    if ((0, _utilsJsDefault.default).isFormData(formData) && (0, _utilsJsDefault.default).isFunction(formData.entries)) {
        const obj = {};
        (0, _utilsJsDefault.default).forEachEntry(formData, (name, value)=>{
            buildPath(parsePropPath(name), value, obj, 0);
        });
        return obj;
    }
    return null;
}
exports.default = formDataToJSON;

},{"../utils.js":"5By4s","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aeXzy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _httpJs = require("./http.js");
var _httpJsDefault = parcelHelpers.interopDefault(_httpJs);
var _xhrJs = require("./xhr.js");
var _xhrJsDefault = parcelHelpers.interopDefault(_xhrJs);
const adapters = {
    http: (0, _httpJsDefault.default),
    xhr: (0, _xhrJsDefault.default)
};
exports.default = {
    getAdapter: (nameOrAdapter)=>{
        if ((0, _utilsJsDefault.default).isString(nameOrAdapter)) {
            const adapter = adapters[nameOrAdapter];
            if (!nameOrAdapter) throw Error((0, _utilsJsDefault.default).hasOwnProp(nameOrAdapter) ? `Adapter '${nameOrAdapter}' is not available in the build` : `Can not resolve adapter '${nameOrAdapter}'`);
            return adapter;
        }
        if (!(0, _utilsJsDefault.default).isFunction(nameOrAdapter)) throw new TypeError("adapter is not a function");
        return nameOrAdapter;
    },
    adapters
};

},{"../utils.js":"5By4s","./http.js":"ldm57","./xhr.js":"ldm57","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ldm57":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("./../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _settleJs = require("./../core/settle.js");
var _settleJsDefault = parcelHelpers.interopDefault(_settleJs);
var _cookiesJs = require("./../helpers/cookies.js");
var _cookiesJsDefault = parcelHelpers.interopDefault(_cookiesJs);
var _buildURLJs = require("./../helpers/buildURL.js");
var _buildURLJsDefault = parcelHelpers.interopDefault(_buildURLJs);
var _buildFullPathJs = require("../core/buildFullPath.js");
var _buildFullPathJsDefault = parcelHelpers.interopDefault(_buildFullPathJs);
var _isURLSameOriginJs = require("./../helpers/isURLSameOrigin.js");
var _isURLSameOriginJsDefault = parcelHelpers.interopDefault(_isURLSameOriginJs);
var _transitionalJs = require("../defaults/transitional.js");
var _transitionalJsDefault = parcelHelpers.interopDefault(_transitionalJs);
var _axiosErrorJs = require("../core/AxiosError.js");
var _axiosErrorJsDefault = parcelHelpers.interopDefault(_axiosErrorJs);
var _canceledErrorJs = require("../cancel/CanceledError.js");
var _canceledErrorJsDefault = parcelHelpers.interopDefault(_canceledErrorJs);
var _parseProtocolJs = require("../helpers/parseProtocol.js");
var _parseProtocolJsDefault = parcelHelpers.interopDefault(_parseProtocolJs);
var _indexJs = require("../platform/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _axiosHeadersJs = require("../core/AxiosHeaders.js");
var _axiosHeadersJsDefault = parcelHelpers.interopDefault(_axiosHeadersJs);
var _speedometerJs = require("../helpers/speedometer.js");
var _speedometerJsDefault = parcelHelpers.interopDefault(_speedometerJs);
"use strict";
function progressEventReducer(listener, isDownloadStream) {
    let bytesNotified = 0;
    const _speedometer = (0, _speedometerJsDefault.default)(50, 250);
    return (e)=>{
        const loaded = e.loaded;
        const total = e.lengthComputable ? e.total : undefined;
        const progressBytes = loaded - bytesNotified;
        const rate = _speedometer(progressBytes);
        const inRange = loaded <= total;
        bytesNotified = loaded;
        const data = {
            loaded,
            total,
            progress: total ? loaded / total : undefined,
            bytes: progressBytes,
            rate: rate ? rate : undefined,
            estimated: rate && total && inRange ? (total - loaded) / rate : undefined
        };
        data[isDownloadStream ? "download" : "upload"] = true;
        listener(data);
    };
}
function xhrAdapter(config) {
    return new Promise(function dispatchXhrRequest(resolve, reject) {
        let requestData = config.data;
        const requestHeaders = (0, _axiosHeadersJsDefault.default).from(config.headers).normalize();
        const responseType = config.responseType;
        let onCanceled;
        function done() {
            if (config.cancelToken) config.cancelToken.unsubscribe(onCanceled);
            if (config.signal) config.signal.removeEventListener("abort", onCanceled);
        }
        if ((0, _utilsJsDefault.default).isFormData(requestData) && (0, _indexJsDefault.default).isStandardBrowserEnv) requestHeaders.setContentType(false); // Let the browser set it
        let request = new XMLHttpRequest();
        // HTTP basic authentication
        if (config.auth) {
            const username = config.auth.username || "";
            const password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : "";
            requestHeaders.set("Authorization", "Basic " + btoa(username + ":" + password));
        }
        const fullPath = (0, _buildFullPathJsDefault.default)(config.baseURL, config.url);
        request.open(config.method.toUpperCase(), (0, _buildURLJsDefault.default)(fullPath, config.params, config.paramsSerializer), true);
        // Set the request timeout in MS
        request.timeout = config.timeout;
        function onloadend() {
            if (!request) return;
            // Prepare the response
            const responseHeaders = (0, _axiosHeadersJsDefault.default).from("getAllResponseHeaders" in request && request.getAllResponseHeaders());
            const responseData = !responseType || responseType === "text" || responseType === "json" ? request.responseText : request.response;
            const response = {
                data: responseData,
                status: request.status,
                statusText: request.statusText,
                headers: responseHeaders,
                config,
                request
            };
            (0, _settleJsDefault.default)(function _resolve(value) {
                resolve(value);
                done();
            }, function _reject(err) {
                reject(err);
                done();
            }, response);
            // Clean up request
            request = null;
        }
        if ("onloadend" in request) // Use onloadend if available
        request.onloadend = onloadend;
        else // Listen for ready state to emulate onloadend
        request.onreadystatechange = function handleLoad() {
            if (!request || request.readyState !== 4) return;
            // The request errored out and we didn't get a response, this will be
            // handled by onerror instead
            // With one exception: request that using file: protocol, most browsers
            // will return status as 0 even though it's a successful request
            if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf("file:") === 0)) return;
            // readystate handler is calling before onerror or ontimeout handlers,
            // so we should call onloadend on the next 'tick'
            setTimeout(onloadend);
        };
        // Handle browser request cancellation (as opposed to a manual cancellation)
        request.onabort = function handleAbort() {
            if (!request) return;
            reject(new (0, _axiosErrorJsDefault.default)("Request aborted", (0, _axiosErrorJsDefault.default).ECONNABORTED, config, request));
            // Clean up request
            request = null;
        };
        // Handle low level network errors
        request.onerror = function handleError() {
            // Real errors are hidden from us by the browser
            // onerror should only fire if it's a network error
            reject(new (0, _axiosErrorJsDefault.default)("Network Error", (0, _axiosErrorJsDefault.default).ERR_NETWORK, config, request));
            // Clean up request
            request = null;
        };
        // Handle timeout
        request.ontimeout = function handleTimeout() {
            let timeoutErrorMessage = config.timeout ? "timeout of " + config.timeout + "ms exceeded" : "timeout exceeded";
            const transitional = config.transitional || (0, _transitionalJsDefault.default);
            if (config.timeoutErrorMessage) timeoutErrorMessage = config.timeoutErrorMessage;
            reject(new (0, _axiosErrorJsDefault.default)(timeoutErrorMessage, transitional.clarifyTimeoutError ? (0, _axiosErrorJsDefault.default).ETIMEDOUT : (0, _axiosErrorJsDefault.default).ECONNABORTED, config, request));
            // Clean up request
            request = null;
        };
        // Add xsrf header
        // This is only done if running in a standard browser environment.
        // Specifically not if we're in a web worker, or react-native.
        if ((0, _indexJsDefault.default).isStandardBrowserEnv) {
            // Add xsrf header
            const xsrfValue = (config.withCredentials || (0, _isURLSameOriginJsDefault.default)(fullPath)) && config.xsrfCookieName && (0, _cookiesJsDefault.default).read(config.xsrfCookieName);
            if (xsrfValue) requestHeaders.set(config.xsrfHeaderName, xsrfValue);
        }
        // Remove Content-Type if data is undefined
        requestData === undefined && requestHeaders.setContentType(null);
        // Add headers to the request
        if ("setRequestHeader" in request) (0, _utilsJsDefault.default).forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
            request.setRequestHeader(key, val);
        });
        // Add withCredentials to request if needed
        if (!(0, _utilsJsDefault.default).isUndefined(config.withCredentials)) request.withCredentials = !!config.withCredentials;
        // Add responseType to request if needed
        if (responseType && responseType !== "json") request.responseType = config.responseType;
        // Handle progress if needed
        if (typeof config.onDownloadProgress === "function") request.addEventListener("progress", progressEventReducer(config.onDownloadProgress, true));
        // Not all browsers support upload events
        if (typeof config.onUploadProgress === "function" && request.upload) request.upload.addEventListener("progress", progressEventReducer(config.onUploadProgress));
        if (config.cancelToken || config.signal) {
            // Handle cancellation
            // eslint-disable-next-line func-names
            onCanceled = (cancel)=>{
                if (!request) return;
                reject(!cancel || cancel.type ? new (0, _canceledErrorJsDefault.default)(null, config, request) : cancel);
                request.abort();
                request = null;
            };
            config.cancelToken && config.cancelToken.subscribe(onCanceled);
            if (config.signal) config.signal.aborted ? onCanceled() : config.signal.addEventListener("abort", onCanceled);
        }
        const protocol = (0, _parseProtocolJsDefault.default)(fullPath);
        if (protocol && (0, _indexJsDefault.default).protocols.indexOf(protocol) === -1) {
            reject(new (0, _axiosErrorJsDefault.default)("Unsupported protocol " + protocol + ":", (0, _axiosErrorJsDefault.default).ERR_BAD_REQUEST, config));
            return;
        }
        // Send the request
        request.send(requestData || null);
    });
}
exports.default = xhrAdapter;

},{"./../utils.js":"5By4s","./../core/settle.js":"dD9aC","./../helpers/cookies.js":"4WJjt","./../helpers/buildURL.js":"3bwC2","../core/buildFullPath.js":"1I5TW","./../helpers/isURLSameOrigin.js":"lxXtv","../defaults/transitional.js":"lM32f","../core/AxiosError.js":"3u8Tl","../cancel/CanceledError.js":"9PwCG","../helpers/parseProtocol.js":"7NfWU","../platform/index.js":"7tDev","../core/AxiosHeaders.js":"cgSSx","../helpers/speedometer.js":"gQeo1","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dD9aC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _axiosErrorJs = require("./AxiosError.js");
var _axiosErrorJsDefault = parcelHelpers.interopDefault(_axiosErrorJs);
"use strict";
function settle(resolve, reject, response) {
    const validateStatus = response.config.validateStatus;
    if (!response.status || !validateStatus || validateStatus(response.status)) resolve(response);
    else reject(new (0, _axiosErrorJsDefault.default)("Request failed with status code " + response.status, [
        (0, _axiosErrorJsDefault.default).ERR_BAD_REQUEST,
        (0, _axiosErrorJsDefault.default).ERR_BAD_RESPONSE
    ][Math.floor(response.status / 100) - 4], response.config, response.request, response));
}
exports.default = settle;

},{"./AxiosError.js":"3u8Tl","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4WJjt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("./../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _indexJs = require("../platform/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
"use strict";
exports.default = (0, _indexJsDefault.default).isStandardBrowserEnv ? // Standard browser envs support document.cookie
function standardBrowserEnv() {
    return {
        write: function write(name, value, expires, path, domain, secure) {
            const cookie = [];
            cookie.push(name + "=" + encodeURIComponent(value));
            if ((0, _utilsJsDefault.default).isNumber(expires)) cookie.push("expires=" + new Date(expires).toGMTString());
            if ((0, _utilsJsDefault.default).isString(path)) cookie.push("path=" + path);
            if ((0, _utilsJsDefault.default).isString(domain)) cookie.push("domain=" + domain);
            if (secure === true) cookie.push("secure");
            document.cookie = cookie.join("; ");
        },
        read: function read(name) {
            const match = document.cookie.match(new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"));
            return match ? decodeURIComponent(match[3]) : null;
        },
        remove: function remove(name) {
            this.write(name, "", Date.now() - 86400000);
        }
    };
}() : // Non standard browser env (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
    return {
        write: function write() {},
        read: function read() {
            return null;
        },
        remove: function remove() {}
    };
}();

},{"./../utils.js":"5By4s","../platform/index.js":"7tDev","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1I5TW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _isAbsoluteURLJs = require("../helpers/isAbsoluteURL.js");
var _isAbsoluteURLJsDefault = parcelHelpers.interopDefault(_isAbsoluteURLJs);
var _combineURLsJs = require("../helpers/combineURLs.js");
var _combineURLsJsDefault = parcelHelpers.interopDefault(_combineURLsJs);
"use strict";
function buildFullPath(baseURL, requestedURL) {
    if (baseURL && !(0, _isAbsoluteURLJsDefault.default)(requestedURL)) return (0, _combineURLsJsDefault.default)(baseURL, requestedURL);
    return requestedURL;
}
exports.default = buildFullPath;

},{"../helpers/isAbsoluteURL.js":"jD6NM","../helpers/combineURLs.js":"brOWK","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jD6NM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
"use strict";
function isAbsoluteURL(url) {
    // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
    // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
    // by any combination of letters, digits, plus, period, or hyphen.
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
}
exports.default = isAbsoluteURL;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"brOWK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
"use strict";
function combineURLs(baseURL, relativeURL) {
    return relativeURL ? baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
}
exports.default = combineURLs;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lxXtv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("./../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _indexJs = require("../platform/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
"use strict";
exports.default = (0, _indexJsDefault.default).isStandardBrowserEnv ? // Standard browser envs have full support of the APIs needed to test
// whether the request URL is of the same origin as current location.
function standardBrowserEnv() {
    const msie = /(msie|trident)/i.test(navigator.userAgent);
    const urlParsingNode = document.createElement("a");
    let originURL;
    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */ function resolveURL(url) {
        let href = url;
        if (msie) {
            // IE needs attribute set twice to normalize properties
            urlParsingNode.setAttribute("href", href);
            href = urlParsingNode.href;
        }
        urlParsingNode.setAttribute("href", href);
        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
            href: urlParsingNode.href,
            protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, "") : "",
            host: urlParsingNode.host,
            search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, "") : "",
            hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, "") : "",
            hostname: urlParsingNode.hostname,
            port: urlParsingNode.port,
            pathname: urlParsingNode.pathname.charAt(0) === "/" ? urlParsingNode.pathname : "/" + urlParsingNode.pathname
        };
    }
    originURL = resolveURL(window.location.href);
    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */ return function isURLSameOrigin(requestURL) {
        const parsed = (0, _utilsJsDefault.default).isString(requestURL) ? resolveURL(requestURL) : requestURL;
        return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
    };
}() : // Non standard browser envs (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
        return true;
    };
}();

},{"./../utils.js":"5By4s","../platform/index.js":"7tDev","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9PwCG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _axiosErrorJs = require("../core/AxiosError.js");
var _axiosErrorJsDefault = parcelHelpers.interopDefault(_axiosErrorJs);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
"use strict";
/**
 * A `CanceledError` is an object that is thrown when an operation is canceled.
 *
 * @param {string=} message The message.
 * @param {Object=} config The config.
 * @param {Object=} request The request.
 *
 * @returns {CanceledError} The created error.
 */ function CanceledError(message, config, request) {
    // eslint-disable-next-line no-eq-null,eqeqeq
    (0, _axiosErrorJsDefault.default).call(this, message == null ? "canceled" : message, (0, _axiosErrorJsDefault.default).ERR_CANCELED, config, request);
    this.name = "CanceledError";
}
(0, _utilsJsDefault.default).inherits(CanceledError, (0, _axiosErrorJsDefault.default), {
    __CANCEL__: true
});
exports.default = CanceledError;

},{"../core/AxiosError.js":"3u8Tl","../utils.js":"5By4s","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7NfWU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
"use strict";
function parseProtocol(url) {
    const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
    return match && match[1] || "";
}
exports.default = parseProtocol;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cgSSx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _parseHeadersJs = require("../helpers/parseHeaders.js");
var _parseHeadersJsDefault = parcelHelpers.interopDefault(_parseHeadersJs);
"use strict";
const $internals = Symbol("internals");
const $defaults = Symbol("defaults");
function normalizeHeader(header) {
    return header && String(header).trim().toLowerCase();
}
function normalizeValue(value) {
    if (value === false || value == null) return value;
    return (0, _utilsJsDefault.default).isArray(value) ? value.map(normalizeValue) : String(value);
}
function parseTokens(str) {
    const tokens = Object.create(null);
    const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let match;
    while(match = tokensRE.exec(str))tokens[match[1]] = match[2];
    return tokens;
}
function matchHeaderValue(context, value, header, filter) {
    if ((0, _utilsJsDefault.default).isFunction(filter)) return filter.call(this, value, header);
    if (!(0, _utilsJsDefault.default).isString(value)) return;
    if ((0, _utilsJsDefault.default).isString(filter)) return value.indexOf(filter) !== -1;
    if ((0, _utilsJsDefault.default).isRegExp(filter)) return filter.test(value);
}
function formatHeader(header) {
    return header.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (w, char, str)=>{
        return char.toUpperCase() + str;
    });
}
function buildAccessors(obj, header) {
    const accessorName = (0, _utilsJsDefault.default).toCamelCase(" " + header);
    [
        "get",
        "set",
        "has"
    ].forEach((methodName)=>{
        Object.defineProperty(obj, methodName + accessorName, {
            value: function(arg1, arg2, arg3) {
                return this[methodName].call(this, header, arg1, arg2, arg3);
            },
            configurable: true
        });
    });
}
function findKey(obj, key) {
    key = key.toLowerCase();
    const keys = Object.keys(obj);
    let i = keys.length;
    let _key;
    while(i-- > 0){
        _key = keys[i];
        if (key === _key.toLowerCase()) return _key;
    }
    return null;
}
function AxiosHeaders(headers, defaults) {
    headers && this.set(headers);
    this[$defaults] = defaults || null;
}
Object.assign(AxiosHeaders.prototype, {
    set: function(header, valueOrRewrite, rewrite) {
        const self = this;
        function setHeader(_value, _header, _rewrite) {
            const lHeader = normalizeHeader(_header);
            if (!lHeader) throw new Error("header name must be a non-empty string");
            const key = findKey(self, lHeader);
            if (key && _rewrite !== true && (self[key] === false || _rewrite === false)) return;
            self[key || _header] = normalizeValue(_value);
        }
        if ((0, _utilsJsDefault.default).isPlainObject(header)) (0, _utilsJsDefault.default).forEach(header, (_value, _header)=>{
            setHeader(_value, _header, valueOrRewrite);
        });
        else setHeader(valueOrRewrite, header, rewrite);
        return this;
    },
    get: function(header, parser) {
        header = normalizeHeader(header);
        if (!header) return undefined;
        const key = findKey(this, header);
        if (key) {
            const value = this[key];
            if (!parser) return value;
            if (parser === true) return parseTokens(value);
            if ((0, _utilsJsDefault.default).isFunction(parser)) return parser.call(this, value, key);
            if ((0, _utilsJsDefault.default).isRegExp(parser)) return parser.exec(value);
            throw new TypeError("parser must be boolean|regexp|function");
        }
    },
    has: function(header, matcher) {
        header = normalizeHeader(header);
        if (header) {
            const key = findKey(this, header);
            return !!(key && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
        }
        return false;
    },
    delete: function(header, matcher) {
        const self = this;
        let deleted = false;
        function deleteHeader(_header) {
            _header = normalizeHeader(_header);
            if (_header) {
                const key = findKey(self, _header);
                if (key && (!matcher || matchHeaderValue(self, self[key], key, matcher))) {
                    delete self[key];
                    deleted = true;
                }
            }
        }
        if ((0, _utilsJsDefault.default).isArray(header)) header.forEach(deleteHeader);
        else deleteHeader(header);
        return deleted;
    },
    clear: function() {
        return Object.keys(this).forEach(this.delete.bind(this));
    },
    normalize: function(format) {
        const self = this;
        const headers = {};
        (0, _utilsJsDefault.default).forEach(this, (value, header)=>{
            const key = findKey(headers, header);
            if (key) {
                self[key] = normalizeValue(value);
                delete self[header];
                return;
            }
            const normalized = format ? formatHeader(header) : String(header).trim();
            if (normalized !== header) delete self[header];
            self[normalized] = normalizeValue(value);
            headers[normalized] = true;
        });
        return this;
    },
    toJSON: function(asStrings) {
        const obj = Object.create(null);
        (0, _utilsJsDefault.default).forEach(Object.assign({}, this[$defaults] || null, this), (value, header)=>{
            if (value == null || value === false) return;
            obj[header] = asStrings && (0, _utilsJsDefault.default).isArray(value) ? value.join(", ") : value;
        });
        return obj;
    }
});
Object.assign(AxiosHeaders, {
    from: function(thing) {
        if ((0, _utilsJsDefault.default).isString(thing)) return new this((0, _parseHeadersJsDefault.default)(thing));
        return thing instanceof this ? thing : new this(thing);
    },
    accessor: function(header) {
        const internals = this[$internals] = this[$internals] = {
            accessors: {}
        };
        const accessors = internals.accessors;
        const prototype = this.prototype;
        function defineAccessor(_header) {
            const lHeader = normalizeHeader(_header);
            if (!accessors[lHeader]) {
                buildAccessors(prototype, _header);
                accessors[lHeader] = true;
            }
        }
        (0, _utilsJsDefault.default).isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);
        return this;
    }
});
AxiosHeaders.accessor([
    "Content-Type",
    "Content-Length",
    "Accept",
    "Accept-Encoding",
    "User-Agent"
]);
(0, _utilsJsDefault.default).freezeMethods(AxiosHeaders.prototype);
(0, _utilsJsDefault.default).freezeMethods(AxiosHeaders);
exports.default = AxiosHeaders;

},{"../utils.js":"5By4s","../helpers/parseHeaders.js":"kqDd5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kqDd5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("./../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
"use strict";
// RawAxiosHeaders whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
const ignoreDuplicateOf = (0, _utilsJsDefault.default).toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent"
]);
/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} rawHeaders Headers needing to be parsed
 *
 * @returns {Object} Headers parsed into an object
 */ exports.default = (rawHeaders)=>{
    const parsed = {};
    let key;
    let val;
    let i;
    rawHeaders && rawHeaders.split("\n").forEach(function parser(line) {
        i = line.indexOf(":");
        key = line.substring(0, i).trim().toLowerCase();
        val = line.substring(i + 1).trim();
        if (!key || parsed[key] && ignoreDuplicateOf[key]) return;
        if (key === "set-cookie") {
            if (parsed[key]) parsed[key].push(val);
            else parsed[key] = [
                val
            ];
        } else parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
    });
    return parsed;
};

},{"./../utils.js":"5By4s","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gQeo1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
"use strict";
/**
 * Calculate data maxRate
 * @param {Number} [samplesCount= 10]
 * @param {Number} [min= 1000]
 * @returns {Function}
 */ function speedometer(samplesCount, min) {
    samplesCount = samplesCount || 10;
    const bytes = new Array(samplesCount);
    const timestamps = new Array(samplesCount);
    let head = 0;
    let tail = 0;
    let firstSampleTS;
    min = min !== undefined ? min : 1000;
    return function push(chunkLength) {
        const now = Date.now();
        const startedAt = timestamps[tail];
        if (!firstSampleTS) firstSampleTS = now;
        bytes[head] = chunkLength;
        timestamps[head] = now;
        let i = tail;
        let bytesCount = 0;
        while(i !== head){
            bytesCount += bytes[i++];
            i = i % samplesCount;
        }
        head = (head + 1) % samplesCount;
        if (head === tail) tail = (tail + 1) % samplesCount;
        if (now - firstSampleTS < min) return;
        const passed = startedAt && now - startedAt;
        return passed ? Math.round(bytesCount * 1000 / passed) : undefined;
    };
}
exports.default = speedometer;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d5jf4":[function(require,module,exports) {
// shim for using process in browser
var process = module.exports = {};
// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var cachedSetTimeout;
var cachedClearTimeout;
function defaultSetTimout() {
    throw new Error("setTimeout has not been defined");
}
function defaultClearTimeout() {
    throw new Error("clearTimeout has not been defined");
}
(function() {
    try {
        if (typeof setTimeout === "function") cachedSetTimeout = setTimeout;
        else cachedSetTimeout = defaultSetTimout;
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === "function") cachedClearTimeout = clearTimeout;
        else cachedClearTimeout = defaultClearTimeout;
    } catch (e1) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) //normal enviroments in sane situations
    return setTimeout(fun, 0);
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) //normal enviroments in sane situations
    return clearTimeout(marker);
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
    if (!draining || !currentQueue) return;
    draining = false;
    if (currentQueue.length) queue = currentQueue.concat(queue);
    else queueIndex = -1;
    if (queue.length) drainQueue();
}
function drainQueue() {
    if (draining) return;
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while(len){
        currentQueue = queue;
        queue = [];
        while(++queueIndex < len)if (currentQueue) currentQueue[queueIndex].run();
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}
process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) for(var i = 1; i < arguments.length; i++)args[i - 1] = arguments[i];
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) runTimeout(drainQueue);
};
// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function() {
    this.fun.apply(null, this.array);
};
process.title = "browser";
process.browser = true;
process.env = {};
process.argv = [];
process.version = ""; // empty string to avoid regexp issues
process.versions = {};
function noop() {}
process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;
process.listeners = function(name) {
    return [];
};
process.binding = function(name) {
    throw new Error("process.binding is not supported");
};
process.cwd = function() {
    return "/";
};
process.chdir = function(dir) {
    throw new Error("process.chdir is not supported");
};
process.umask = function() {
    return 0;
};

},{}],"a0VmF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
"use strict";
function isCancel(value) {
    return !!(value && value.__CANCEL__);
}
exports.default = isCancel;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b85oP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
"use strict";
function mergeConfig(config1, config2) {
    // eslint-disable-next-line no-param-reassign
    config2 = config2 || {};
    const config = {};
    function getMergedValue(target, source) {
        if ((0, _utilsJsDefault.default).isPlainObject(target) && (0, _utilsJsDefault.default).isPlainObject(source)) return (0, _utilsJsDefault.default).merge(target, source);
        else if ((0, _utilsJsDefault.default).isPlainObject(source)) return (0, _utilsJsDefault.default).merge({}, source);
        else if ((0, _utilsJsDefault.default).isArray(source)) return source.slice();
        return source;
    }
    // eslint-disable-next-line consistent-return
    function mergeDeepProperties(prop) {
        if (!(0, _utilsJsDefault.default).isUndefined(config2[prop])) return getMergedValue(config1[prop], config2[prop]);
        else if (!(0, _utilsJsDefault.default).isUndefined(config1[prop])) return getMergedValue(undefined, config1[prop]);
    }
    // eslint-disable-next-line consistent-return
    function valueFromConfig2(prop) {
        if (!(0, _utilsJsDefault.default).isUndefined(config2[prop])) return getMergedValue(undefined, config2[prop]);
    }
    // eslint-disable-next-line consistent-return
    function defaultToConfig2(prop) {
        if (!(0, _utilsJsDefault.default).isUndefined(config2[prop])) return getMergedValue(undefined, config2[prop]);
        else if (!(0, _utilsJsDefault.default).isUndefined(config1[prop])) return getMergedValue(undefined, config1[prop]);
    }
    // eslint-disable-next-line consistent-return
    function mergeDirectKeys(prop) {
        if (prop in config2) return getMergedValue(config1[prop], config2[prop]);
        else if (prop in config1) return getMergedValue(undefined, config1[prop]);
    }
    const mergeMap = {
        "url": valueFromConfig2,
        "method": valueFromConfig2,
        "data": valueFromConfig2,
        "baseURL": defaultToConfig2,
        "transformRequest": defaultToConfig2,
        "transformResponse": defaultToConfig2,
        "paramsSerializer": defaultToConfig2,
        "timeout": defaultToConfig2,
        "timeoutMessage": defaultToConfig2,
        "withCredentials": defaultToConfig2,
        "adapter": defaultToConfig2,
        "responseType": defaultToConfig2,
        "xsrfCookieName": defaultToConfig2,
        "xsrfHeaderName": defaultToConfig2,
        "onUploadProgress": defaultToConfig2,
        "onDownloadProgress": defaultToConfig2,
        "decompress": defaultToConfig2,
        "maxContentLength": defaultToConfig2,
        "maxBodyLength": defaultToConfig2,
        "beforeRedirect": defaultToConfig2,
        "transport": defaultToConfig2,
        "httpAgent": defaultToConfig2,
        "httpsAgent": defaultToConfig2,
        "cancelToken": defaultToConfig2,
        "socketPath": defaultToConfig2,
        "responseEncoding": defaultToConfig2,
        "validateStatus": mergeDirectKeys
    };
    (0, _utilsJsDefault.default).forEach(Object.keys(config1).concat(Object.keys(config2)), function computeConfigValue(prop) {
        const merge = mergeMap[prop] || mergeDeepProperties;
        const configValue = merge(prop);
        (0, _utilsJsDefault.default).isUndefined(configValue) && merge !== mergeDirectKeys || (config[prop] = configValue);
    });
    return config;
}
exports.default = mergeConfig;

},{"../utils.js":"5By4s","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9vgkY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _dataJs = require("../env/data.js");
var _axiosErrorJs = require("../core/AxiosError.js");
var _axiosErrorJsDefault = parcelHelpers.interopDefault(_axiosErrorJs);
"use strict";
const validators = {};
// eslint-disable-next-line func-names
[
    "object",
    "boolean",
    "number",
    "function",
    "string",
    "symbol"
].forEach((type, i)=>{
    validators[type] = function validator(thing) {
        return typeof thing === type || "a" + (i < 1 ? "n " : " ") + type;
    };
});
const deprecatedWarnings = {};
/**
 * Transitional option validator
 *
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 *
 * @returns {function}
 */ validators.transitional = function transitional(validator, version, message) {
    function formatMessage(opt, desc) {
        return "[Axios v" + (0, _dataJs.VERSION) + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
    }
    // eslint-disable-next-line func-names
    return (value, opt, opts)=>{
        if (validator === false) throw new (0, _axiosErrorJsDefault.default)(formatMessage(opt, " has been removed" + (version ? " in " + version : "")), (0, _axiosErrorJsDefault.default).ERR_DEPRECATED);
        if (version && !deprecatedWarnings[opt]) {
            deprecatedWarnings[opt] = true;
            // eslint-disable-next-line no-console
            console.warn(formatMessage(opt, " has been deprecated since v" + version + " and will be removed in the near future"));
        }
        return validator ? validator(value, opt, opts) : true;
    };
};
/**
 * Assert object's properties type
 *
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 *
 * @returns {object}
 */ function assertOptions(options, schema, allowUnknown) {
    if (typeof options !== "object") throw new (0, _axiosErrorJsDefault.default)("options must be an object", (0, _axiosErrorJsDefault.default).ERR_BAD_OPTION_VALUE);
    const keys = Object.keys(options);
    let i = keys.length;
    while(i-- > 0){
        const opt = keys[i];
        const validator = schema[opt];
        if (validator) {
            const value = options[opt];
            const result = value === undefined || validator(value, opt, options);
            if (result !== true) throw new (0, _axiosErrorJsDefault.default)("option " + opt + " must be " + result, (0, _axiosErrorJsDefault.default).ERR_BAD_OPTION_VALUE);
            continue;
        }
        if (allowUnknown !== true) throw new (0, _axiosErrorJsDefault.default)("Unknown option " + opt, (0, _axiosErrorJsDefault.default).ERR_BAD_OPTION);
    }
}
exports.default = {
    assertOptions,
    validators
};

},{"../env/data.js":"h29L9","../core/AxiosError.js":"3u8Tl","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"h29L9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "VERSION", ()=>VERSION);
const VERSION = "1.1.3";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"45wzn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _canceledErrorJs = require("./CanceledError.js");
var _canceledErrorJsDefault = parcelHelpers.interopDefault(_canceledErrorJs);
"use strict";
/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @param {Function} executor The executor function.
 *
 * @returns {CancelToken}
 */ class CancelToken {
    constructor(executor){
        if (typeof executor !== "function") throw new TypeError("executor must be a function.");
        let resolvePromise;
        this.promise = new Promise(function promiseExecutor(resolve) {
            resolvePromise = resolve;
        });
        const token = this;
        // eslint-disable-next-line func-names
        this.promise.then((cancel)=>{
            if (!token._listeners) return;
            let i = token._listeners.length;
            while(i-- > 0)token._listeners[i](cancel);
            token._listeners = null;
        });
        // eslint-disable-next-line func-names
        this.promise.then = (onfulfilled)=>{
            let _resolve;
            // eslint-disable-next-line func-names
            const promise = new Promise((resolve)=>{
                token.subscribe(resolve);
                _resolve = resolve;
            }).then(onfulfilled);
            promise.cancel = function reject() {
                token.unsubscribe(_resolve);
            };
            return promise;
        };
        executor(function cancel(message, config, request) {
            if (token.reason) // Cancellation has already been requested
            return;
            token.reason = new (0, _canceledErrorJsDefault.default)(message, config, request);
            resolvePromise(token.reason);
        });
    }
    /**
   * Throws a `CanceledError` if cancellation has been requested.
   */ throwIfRequested() {
        if (this.reason) throw this.reason;
    }
    /**
   * Subscribe to the cancel signal
   */ subscribe(listener) {
        if (this.reason) {
            listener(this.reason);
            return;
        }
        if (this._listeners) this._listeners.push(listener);
        else this._listeners = [
            listener
        ];
    }
    /**
   * Unsubscribe from the cancel signal
   */ unsubscribe(listener) {
        if (!this._listeners) return;
        const index = this._listeners.indexOf(listener);
        if (index !== -1) this._listeners.splice(index, 1);
    }
    /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */ static source() {
        let cancel;
        const token = new CancelToken(function executor(c) {
            cancel = c;
        });
        return {
            token,
            cancel
        };
    }
}
exports.default = CancelToken;

},{"./CanceledError.js":"9PwCG","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dyQ8N":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
"use strict";
function spread(callback) {
    return function wrap(arr) {
        return callback.apply(null, arr);
    };
}
exports.default = spread;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eyiLq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("./../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
"use strict";
function isAxiosError(payload) {
    return (0, _utilsJsDefault.default).isObject(payload) && payload.isAxiosError === true;
}
exports.default = isAxiosError;

},{"./../utils.js":"5By4s","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ac3Sz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebars = require("handlebars");
var _handlebarsDefault = parcelHelpers.interopDefault(_handlebars);
const templateFunction = (0, _handlebarsDefault.default).template({
    "1": function(container, depth0, helpers, partials, data) {
        var helper, alias1 = depth0 != null ? depth0 : container.nullContext || {}, alias2 = container.hooks.helperMissing, alias3 = "function", alias4 = container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '<a class="gallery__item" href="' + alias4((helper = (helper = lookupProperty(helpers, "largeImageURL") || (depth0 != null ? lookupProperty(depth0, "largeImageURL") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "largeImageURL",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 31
                },
                "end": {
                    "line": 2,
                    "column": 48
                }
            }
        }) : helper)) + '" target="_blank" rel="noopener noreferrer">\n<div class="photo-card">\n<img class="card__image " src="' + alias4((helper = (helper = lookupProperty(helpers, "webformatURL") || (depth0 != null ? lookupProperty(depth0, "webformatURL") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "webformatURL",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 4,
                    "column": 31
                },
                "end": {
                    "line": 4,
                    "column": 47
                }
            }
        }) : helper)) + '" alt="' + alias4((helper = (helper = lookupProperty(helpers, "tags") || (depth0 != null ? lookupProperty(depth0, "tags") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "tags",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 4,
                    "column": 54
                },
                "end": {
                    "line": 4,
                    "column": 62
                }
            }
        }) : helper)) + '" loading="lazy"/>\n<div class="info">\n<p class="info_item"><b>Likes: </b>' + alias4((helper = (helper = lookupProperty(helpers, "likes") || (depth0 != null ? lookupProperty(depth0, "likes") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "likes",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 6,
                    "column": 35
                },
                "end": {
                    "line": 6,
                    "column": 44
                }
            }
        }) : helper)) + '</p>\n<p class="info_item"><b>Views: </b>' + alias4((helper = (helper = lookupProperty(helpers, "views") || (depth0 != null ? lookupProperty(depth0, "views") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "views",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 7,
                    "column": 35
                },
                "end": {
                    "line": 7,
                    "column": 44
                }
            }
        }) : helper)) + '</p>\n<p class="info_item"><b>Comments: </b>' + alias4((helper = (helper = lookupProperty(helpers, "comments") || (depth0 != null ? lookupProperty(depth0, "comments") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "comments",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 8,
                    "column": 38
                },
                "end": {
                    "line": 8,
                    "column": 50
                }
            }
        }) : helper)) + '</p>\n<p class="info_item"><b>Downloads: </b>' + alias4((helper = (helper = lookupProperty(helpers, "downloads") || (depth0 != null ? lookupProperty(depth0, "downloads") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "downloads",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 9,
                    "column": 39
                },
                "end": {
                    "line": 9,
                    "column": 52
                }
            }
        }) : helper)) + "</p>\n</div>\n</div>\n</a>\n";
    },
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return (stack1 = lookupProperty(helpers, "each").call(depth0 != null ? depth0 : container.nullContext || {}, depth0, {
            "name": "each",
            "hash": {},
            "fn": container.program(1, data, 0),
            "inverse": container.noop,
            "data": data,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 0
                },
                "end": {
                    "line": 13,
                    "column": 9
                }
            }
        })) != null ? stack1 : "";
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars":"i0QfX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i0QfX":[function(require,module,exports) {
// USAGE:
// var handlebars = require('handlebars');
/* eslint-disable no-var */ // var local = handlebars.create();
var handlebars = require("../dist/cjs/handlebars")["default"];
var printer = require("../dist/cjs/handlebars/compiler/printer");
handlebars.PrintVisitor = printer.PrintVisitor;
handlebars.print = printer.print;
module.exports = handlebars;
// Publish a Node.js require() handler for .handlebars and .hbs files
function extension(module, filename) {
    var fs = require("fs");
    var templateString = fs.readFileSync(filename, "utf8");
    module.exports = handlebars.compile(templateString);
}
/* istanbul ignore else */ if (undefined) {
    undefined[".handlebars"] = extension;
    undefined[".hbs"] = extension;
}

},{"../dist/cjs/handlebars":"56TWV","../dist/cjs/handlebars/compiler/printer":"j0OeV","fs":"jhUEF"}],"56TWV":[function(require,module,exports) {
"use strict";
exports.__esModule = true;
// istanbul ignore next
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
var _handlebarsRuntime = require("./handlebars.runtime");
var _handlebarsRuntime2 = _interopRequireDefault(_handlebarsRuntime);
// Compiler imports
var _handlebarsCompilerAst = require("./handlebars/compiler/ast");
var _handlebarsCompilerAst2 = _interopRequireDefault(_handlebarsCompilerAst);
var _handlebarsCompilerBase = require("./handlebars/compiler/base");
var _handlebarsCompilerCompiler = require("./handlebars/compiler/compiler");
var _handlebarsCompilerJavascriptCompiler = require("./handlebars/compiler/javascript-compiler");
var _handlebarsCompilerJavascriptCompiler2 = _interopRequireDefault(_handlebarsCompilerJavascriptCompiler);
var _handlebarsCompilerVisitor = require("./handlebars/compiler/visitor");
var _handlebarsCompilerVisitor2 = _interopRequireDefault(_handlebarsCompilerVisitor);
var _handlebarsNoConflict = require("./handlebars/no-conflict");
var _handlebarsNoConflict2 = _interopRequireDefault(_handlebarsNoConflict);
var _create = _handlebarsRuntime2["default"].create;
function create() {
    var hb = _create();
    hb.compile = function(input, options) {
        return _handlebarsCompilerCompiler.compile(input, options, hb);
    };
    hb.precompile = function(input, options) {
        return _handlebarsCompilerCompiler.precompile(input, options, hb);
    };
    hb.AST = _handlebarsCompilerAst2["default"];
    hb.Compiler = _handlebarsCompilerCompiler.Compiler;
    hb.JavaScriptCompiler = _handlebarsCompilerJavascriptCompiler2["default"];
    hb.Parser = _handlebarsCompilerBase.parser;
    hb.parse = _handlebarsCompilerBase.parse;
    hb.parseWithoutProcessing = _handlebarsCompilerBase.parseWithoutProcessing;
    return hb;
}
var inst = create();
inst.create = create;
_handlebarsNoConflict2["default"](inst);
inst.Visitor = _handlebarsCompilerVisitor2["default"];
inst["default"] = inst;
exports["default"] = inst;
module.exports = exports["default"];

},{"./handlebars.runtime":"48O1v","./handlebars/compiler/ast":"iOlHO","./handlebars/compiler/base":"kVun2","./handlebars/compiler/compiler":"4Udtq","./handlebars/compiler/javascript-compiler":"7iXdU","./handlebars/compiler/visitor":"fk5sS","./handlebars/no-conflict":"gyMyS"}],"48O1v":[function(require,module,exports) {
"use strict";
exports.__esModule = true;
// istanbul ignore next
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
// istanbul ignore next
function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) return obj;
    else {
        var newObj = {};
        if (obj != null) {
            for(var key in obj)if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
        newObj["default"] = obj;
        return newObj;
    }
}
var _handlebarsBase = require("./handlebars/base");
var base = _interopRequireWildcard(_handlebarsBase);
// Each of these augment the Handlebars object. No need to setup here.
// (This is done to easily share code between commonjs and browse envs)
var _handlebarsSafeString = require("./handlebars/safe-string");
var _handlebarsSafeString2 = _interopRequireDefault(_handlebarsSafeString);
var _handlebarsException = require("./handlebars/exception");
var _handlebarsException2 = _interopRequireDefault(_handlebarsException);
var _handlebarsUtils = require("./handlebars/utils");
var Utils = _interopRequireWildcard(_handlebarsUtils);
var _handlebarsRuntime = require("./handlebars/runtime");
var runtime = _interopRequireWildcard(_handlebarsRuntime);
var _handlebarsNoConflict = require("./handlebars/no-conflict");
var _handlebarsNoConflict2 = _interopRequireDefault(_handlebarsNoConflict);
// For compatibility and usage outside of module systems, make the Handlebars object a namespace
function create() {
    var hb = new base.HandlebarsEnvironment();
    Utils.extend(hb, base);
    hb.SafeString = _handlebarsSafeString2["default"];
    hb.Exception = _handlebarsException2["default"];
    hb.Utils = Utils;
    hb.escapeExpression = Utils.escapeExpression;
    hb.VM = runtime;
    hb.template = function(spec) {
        return runtime.template(spec, hb);
    };
    return hb;
}
var inst = create();
inst.create = create;
_handlebarsNoConflict2["default"](inst);
inst["default"] = inst;
exports["default"] = inst;
module.exports = exports["default"];

},{"./handlebars/base":"dt4wA","./handlebars/safe-string":"fUPg1","./handlebars/exception":"gO63O","./handlebars/utils":"1az9o","./handlebars/runtime":"lcUM0","./handlebars/no-conflict":"gyMyS"}],"dt4wA":[function(require,module,exports) {
"use strict";
exports.__esModule = true;
exports.HandlebarsEnvironment = HandlebarsEnvironment;
// istanbul ignore next
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
var _utils = require("./utils");
var _exception = require("./exception");
var _exception2 = _interopRequireDefault(_exception);
var _helpers = require("./helpers");
var _decorators = require("./decorators");
var _logger = require("./logger");
var _logger2 = _interopRequireDefault(_logger);
var _internalProtoAccess = require("./internal/proto-access");
var VERSION = "4.7.7";
exports.VERSION = VERSION;
var COMPILER_REVISION = 8;
exports.COMPILER_REVISION = COMPILER_REVISION;
var LAST_COMPATIBLE_COMPILER_REVISION = 7;
exports.LAST_COMPATIBLE_COMPILER_REVISION = LAST_COMPATIBLE_COMPILER_REVISION;
var REVISION_CHANGES = {
    1: "<= 1.0.rc.2",
    2: "== 1.0.0-rc.3",
    3: "== 1.0.0-rc.4",
    4: "== 1.x.x",
    5: "== 2.0.0-alpha.x",
    6: ">= 2.0.0-beta.1",
    7: ">= 4.0.0 <4.3.0",
    8: ">= 4.3.0"
};
exports.REVISION_CHANGES = REVISION_CHANGES;
var objectType = "[object Object]";
function HandlebarsEnvironment(helpers, partials, decorators) {
    this.helpers = helpers || {};
    this.partials = partials || {};
    this.decorators = decorators || {};
    _helpers.registerDefaultHelpers(this);
    _decorators.registerDefaultDecorators(this);
}
HandlebarsEnvironment.prototype = {
    constructor: HandlebarsEnvironment,
    logger: _logger2["default"],
    log: _logger2["default"].log,
    registerHelper: function registerHelper(name, fn) {
        if (_utils.toString.call(name) === objectType) {
            if (fn) throw new _exception2["default"]("Arg not supported with multiple helpers");
            _utils.extend(this.helpers, name);
        } else this.helpers[name] = fn;
    },
    unregisterHelper: function unregisterHelper(name) {
        delete this.helpers[name];
    },
    registerPartial: function registerPartial(name, partial) {
        if (_utils.toString.call(name) === objectType) _utils.extend(this.partials, name);
        else {
            if (typeof partial === "undefined") throw new _exception2["default"]('Attempting to register a partial called "' + name + '" as undefined');
            this.partials[name] = partial;
        }
    },
    unregisterPartial: function unregisterPartial(name) {
        delete this.partials[name];
    },
    registerDecorator: function registerDecorator(name, fn) {
        if (_utils.toString.call(name) === objectType) {
            if (fn) throw new _exception2["default"]("Arg not supported with multiple decorators");
            _utils.extend(this.decorators, name);
        } else this.decorators[name] = fn;
    },
    unregisterDecorator: function unregisterDecorator(name) {
        delete this.decorators[name];
    },
    /**
   * Reset the memory of illegal property accesses that have already been logged.
   * @deprecated should only be used in handlebars test-cases
   */ resetLoggedPropertyAccesses: function resetLoggedPropertyAccesses() {
        _internalProtoAccess.resetLoggedProperties();
    }
};
var log = _logger2["default"].log;
exports.log = log;
exports.createFrame = _utils.createFrame;
exports.logger = _logger2["default"];

},{"./utils":"1az9o","./exception":"gO63O","./helpers":"bxbLz","./decorators":"IozU1","./logger":"gqRvw","./internal/proto-access":"hJ0HO"}],"1az9o":[function(require,module,exports) {
"use strict";
exports.__esModule = true;
exports.extend = extend;
exports.indexOf = indexOf;
exports.escapeExpression = escapeExpression;
exports.isEmpty = isEmpty;
exports.createFrame = createFrame;
exports.blockParams = blockParams;
exports.appendContextPath = appendContextPath;
var escape = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#x27;",
    "`": "&#x60;",
    "=": "&#x3D;"
};
var badChars = /[&<>"'`=]/g, possible = /[&<>"'`=]/;
function escapeChar(chr) {
    return escape[chr];
}
function extend(obj /* , ...source */ ) {
    for(var i = 1; i < arguments.length; i++){
        for(var key in arguments[i])if (Object.prototype.hasOwnProperty.call(arguments[i], key)) obj[key] = arguments[i][key];
    }
    return obj;
}
var toString = Object.prototype.toString;
exports.toString = toString;
// Sourced from lodash
// https://github.com/bestiejs/lodash/blob/master/LICENSE.txt
/* eslint-disable func-style */ var isFunction = function isFunction(value) {
    return typeof value === "function";
};
// fallback for older versions of Chrome and Safari
/* istanbul ignore next */ if (isFunction(/x/)) exports.isFunction = isFunction = function(value) {
    return typeof value === "function" && toString.call(value) === "[object Function]";
};
exports.isFunction = isFunction;
/* eslint-enable func-style */ /* istanbul ignore next */ var isArray = Array.isArray || function(value) {
    return value && typeof value === "object" ? toString.call(value) === "[object Array]" : false;
};
exports.isArray = isArray;
// Older IE versions do not directly support indexOf so we must implement our own, sadly.
function indexOf(array, value) {
    for(var i = 0, len = array.length; i < len; i++){
        if (array[i] === value) return i;
    }
    return -1;
}
function escapeExpression(string) {
    if (typeof string !== "string") {
        // don't escape SafeStrings, since they're already safe
        if (string && string.toHTML) return string.toHTML();
        else if (string == null) return "";
        else if (!string) return string + "";
        // Force a string conversion as this will be done by the append regardless and
        // the regex test will do this transparently behind the scenes, causing issues if
        // an object's to string has escaped characters in it.
        string = "" + string;
    }
    if (!possible.test(string)) return string;
    return string.replace(badChars, escapeChar);
}
function isEmpty(value) {
    if (!value && value !== 0) return true;
    else if (isArray(value) && value.length === 0) return true;
    else return false;
}
function createFrame(object) {
    var frame = extend({}, object);
    frame._parent = object;
    return frame;
}
function blockParams(params, ids) {
    params.path = ids;
    return params;
}
function appendContextPath(contextPath, id) {
    return (contextPath ? contextPath + "." : "") + id;
}

},{}],"gO63O":[function(require,module,exports) {
"use strict";
exports.__esModule = true;
var errorProps = [
    "description",
    "fileName",
    "lineNumber",
    "endLineNumber",
    "message",
    "name",
    "number",
    "stack"
];
function Exception(message, node) {
    var loc = node && node.loc, line = undefined, endLineNumber = undefined, column = undefined, endColumn = undefined;
    if (loc) {
        line = loc.start.line;
        endLineNumber = loc.end.line;
        column = loc.start.column;
        endColumn = loc.end.column;
        message += " - " + line + ":" + column;
    }
    var tmp = Error.prototype.constructor.call(this, message);
    // Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.
    for(var idx = 0; idx < errorProps.length; idx++)this[errorProps[idx]] = tmp[errorProps[idx]];
    /* istanbul ignore else */ if (Error.captureStackTrace) Error.captureStackTrace(this, Exception);
    try {
        if (loc) {
            this.lineNumber = line;
            this.endLineNumber = endLineNumber;
            // Work around issue under safari where we can't directly set the column value
            /* istanbul ignore next */ if (Object.defineProperty) {
                Object.defineProperty(this, "column", {
                    value: column,
                    enumerable: true
                });
                Object.defineProperty(this, "endColumn", {
                    value: endColumn,
                    enumerable: true
                });
            } else {
                this.column = column;
                this.endColumn = endColumn;
            }
        }
    } catch (nop) {
    /* Ignore if the browser is very particular */ }
}
Exception.prototype = new Error();
exports["default"] = Exception;
module.exports = exports["default"];

},{}],"bxbLz":[function(require,module,exports) {
"use strict";
exports.__esModule = true;
exports.registerDefaultHelpers = registerDefaultHelpers;
exports.moveHelperToHooks = moveHelperToHooks;
// istanbul ignore next
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
var _helpersBlockHelperMissing = require("./helpers/block-helper-missing");
var _helpersBlockHelperMissing2 = _interopRequireDefault(_helpersBlockHelperMissing);
var _helpersEach = require("./helpers/each");
var _helpersEach2 = _interopRequireDefault(_helpersEach);
var _helpersHelperMissing = require("./helpers/helper-missing");
var _helpersHelperMissing2 = _interopRequireDefault(_helpersHelperMissing);
var _helpersIf = require("./helpers/if");
var _helpersIf2 = _interopRequireDefault(_helpersIf);
var _helpersLog = require("./helpers/log");
var _helpersLog2 = _interopRequireDefault(_helpersLog);
var _helpersLookup = require("./helpers/lookup");
var _helpersLookup2 = _interopRequireDefault(_helpersLookup);
var _helpersWith = require("./helpers/with");
var _helpersWith2 = _interopRequireDefault(_helpersWith);
function registerDefaultHelpers(instance) {
    _helpersBlockHelperMissing2["default"](instance);
    _helpersEach2["default"](instance);
    _helpersHelperMissing2["default"](instance);
    _helpersIf2["default"](instance);
    _helpersLog2["default"](instance);
    _helpersLookup2["default"](instance);
    _helpersWith2["default"](instance);
}
function moveHelperToHooks(instance, helperName, keepHelper) {
    if (instance.helpers[helperName]) {
        instance.hooks[helperName] = instance.helpers[helperName];
        if (!keepHelper) delete instance.helpers[helperName];
    }
}

},{"./helpers/block-helper-missing":"b2Nig","./helpers/each":"cxvVH","./helpers/helper-missing":"kqALW","./helpers/if":"23VdI","./helpers/log":"15jv3","./helpers/lookup":"8QG3w","./helpers/with":"f8k9w"}],"b2Nig":[function(require,module,exports) {
"use strict";
exports.__esModule = true;
var _utils = require("../utils");
exports["default"] = function(instance) {
    instance.registerHelper("blockHelperMissing", function(context, options) {
        var inverse = options.inverse, fn = options.fn;
        if (context === true) return fn(this);
        else if (context === false || context == null) return inverse(this);
        else if (_utils.isArray(context)) {
            if (context.length > 0) {
                if (options.ids) options.ids = [
                    options.name
                ];
                return instance.helpers.each(context, options);
            } else return inverse(this);
        } else {
            if (options.data && options.ids) {
                var data = _utils.createFrame(options.data);
                data.contextPath = _utils.appendContextPath(options.data.contextPath, options.name);
                options = {
                    data: data
                };
            }
            return fn(context, options);
        }
    });
};
module.exports = exports["default"];

},{"../utils":"1az9o"}],"cxvVH":[function(require,module,exports) {
"use strict";
var global = arguments[3];
exports.__esModule = true;
// istanbul ignore next
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
var _utils = require("../utils");
var _exception = require("../exception");
var _exception2 = _interopRequireDefault(_exception);
exports["default"] = function(instance) {
    instance.registerHelper("each", function(context, options) {
        if (!options) throw new _exception2["default"]("Must pass iterator to #each");
        var fn = options.fn, inverse = options.inverse, i = 0, ret = "", data = undefined, contextPath = undefined;
        if (options.data && options.ids) contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]) + ".";
        if (_utils.isFunction(context)) context = context.call(this);
        if (options.data) data = _utils.createFrame(options.data);
        function execIteration(field, index, last) {
            if (data) {
                data.key = field;
                data.index = index;
                data.first = index === 0;
                data.last = !!last;
                if (contextPath) data.contextPath = contextPath + field;
            }
            ret = ret + fn(context[field], {
                data: data,
                blockParams: _utils.blockParams([
                    context[field],
                    field
                ], [
                    contextPath + field,
                    null
                ])
            });
        }
        if (context && typeof context === "object") {
            if (_utils.isArray(context)) {
                for(var j = context.length; i < j; i++)if (i in context) execIteration(i, i, i === context.length - 1);
            } else if (global.Symbol && context[global.Symbol.iterator]) {
                var newContext = [];
                var iterator = context[global.Symbol.iterator]();
                for(var it = iterator.next(); !it.done; it = iterator.next())newContext.push(it.value);
                context = newContext;
                for(var j = context.length; i < j; i++)execIteration(i, i, i === context.length - 1);
            } else (function() {
                var priorKey = undefined;
                Object.keys(context).forEach(function(key) {
                    // We're running the iterations one step out of sync so we can detect
                    // the last iteration without have to scan the object twice and create
                    // an itermediate keys array.
                    if (priorKey !== undefined) execIteration(priorKey, i - 1);
                    priorKey = key;
                    i++;
                });
                if (priorKey !== undefined) execIteration(priorKey, i - 1, true);
            })();
        }
        if (i === 0) ret = inverse(this);
        return ret;
    });
};
module.exports = exports["default"];

},{"../utils":"1az9o","../exception":"gO63O"}],"kqALW":[function(require,module,exports) {
"use strict";
exports.__esModule = true;
// istanbul ignore next
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
var _exception = require("../exception");
var _exception2 = _interopRequireDefault(_exception);
exports["default"] = function(instance) {
    instance.registerHelper("helperMissing", function() /* [args, ]options */ {
        if (arguments.length === 1) // A missing field in a {{foo}} construct.
        return undefined;
        else // Someone is actually trying to call something, blow up.
        throw new _exception2["default"]('Missing helper: "' + arguments[arguments.length - 1].name + '"');
    });
};
module.exports = exports["default"];

},{"../exception":"gO63O"}],"23VdI":[function(require,module,exports) {
"use strict";
exports.__esModule = true;
// istanbul ignore next
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
var _utils = require("../utils");
var _exception = require("../exception");
var _exception2 = _interopRequireDefault(_exception);
exports["default"] = function(instance) {
    instance.registerHelper("if", function(conditional, options) {
        if (arguments.length != 2) throw new _exception2["default"]("#if requires exactly one argument");
        if (_utils.isFunction(conditional)) conditional = conditional.call(this);
        // Default behavior is to render the positive path if the value is truthy and not empty.
        // The `includeZero` option may be set to treat the condtional as purely not empty based on the
        // behavior of isEmpty. Effectively this determines if 0 is handled by the positive path or negative.
        if (!options.hash.includeZero && !conditional || _utils.isEmpty(conditional)) return options.inverse(this);
        else return options.fn(this);
    });
    instance.registerHelper("unless", function(conditional, options) {
        if (arguments.length != 2) throw new _exception2["default"]("#unless requires exactly one argument");
        return instance.helpers["if"].call(this, conditional, {
            fn: options.inverse,
            inverse: options.fn,
            hash: options.hash
        });
    });
};
module.exports = exports["default"];

},{"../utils":"1az9o","../exception":"gO63O"}],"15jv3":[function(require,module,exports) {
"use strict";
exports.__esModule = true;
exports["default"] = function(instance) {
    instance.registerHelper("log", function() /* message, options */ {
        var args = [
            undefined
        ], options = arguments[arguments.length - 1];
        for(var i = 0; i < arguments.length - 1; i++)args.push(arguments[i]);
        var level = 1;
        if (options.hash.level != null) level = options.hash.level;
        else if (options.data && options.data.level != null) level = options.data.level;
        args[0] = level;
        instance.log.apply(instance, args);
    });
};
module.exports = exports["default"];

},{}],"8QG3w":[function(require,module,exports) {
"use strict";
exports.__esModule = true;
exports["default"] = function(instance) {
    instance.registerHelper("lookup", function(obj, field, options) {
        if (!obj) // Note for 5.0: Change to "obj == null" in 5.0
        return obj;
        return options.lookupProperty(obj, field);
    });
};
module.exports = exports["default"];

},{}],"f8k9w":[function(require,module,exports) {
"use strict";
exports.__esModule = true;
// istanbul ignore next
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
var _utils = require("../utils");
var _exception = require("../exception");
var _exception2 = _interopRequireDefault(_exception);
exports["default"] = function(instance) {
    instance.registerHelper("with", function(context, options) {
        if (arguments.length != 2) throw new _exception2["default"]("#with requires exactly one argument");
        if (_utils.isFunction(context)) context = context.call(this);
        var fn = options.fn;
        if (!_utils.isEmpty(context)) {
            var data = options.data;
            if (options.data && options.ids) {
                data = _utils.createFrame(options.data);
                data.contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]);
            }
            return fn(context, {
                data: data,
                blockParams: _utils.blockParams([
                    context
                ], [
                    data && data.contextPath
                ])
            });
        } else return options.inverse(this);
    });
};
module.exports = exports["default"];

},{"../utils":"1az9o","../exception":"gO63O"}],"IozU1":[function(require,module,exports) {
"use strict";
exports.__esModule = true;
exports.registerDefaultDecorators = registerDefaultDecorators;
// istanbul ignore next
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
var _decoratorsInline = require("./decorators/inline");
var _decoratorsInline2 = _interopRequireDefault(_decoratorsInline);
function registerDefaultDecorators(instance) {
    _decoratorsInline2["default"](instance);
}

},{"./decorators/inline":"gLVN4"}],"gLVN4":[function(require,module,exports) {
"use strict";
exports.__esModule = true;
var _utils = require("../utils");
exports["default"] = function(instance) {
    instance.registerDecorator("inline", function(fn, props, container, options1) {
        var ret1 = fn;
        if (!props.partials) {
            props.partials = {};
            ret1 = function(context, options) {
                // Create a new partials stack frame prior to exec.
                var original = container.partials;
                container.partials = _utils.extend({}, original, props.partials);
                var ret = fn(context, options);
                container.partials = original;
                return ret;
            };
        }
        props.partials[options1.args[0]] = options1.fn;
        return ret1;
    });
};
module.exports = exports["default"];

},{"../utils":"1az9o"}],"gqRvw":[function(require,module,exports) {
"use strict";
exports.__esModule = true;
var _utils = require("./utils");
var logger = {
    methodMap: [
        "debug",
        "info",
        "warn",
        "error"
    ],
    level: "info",
    // Maps a given level value to the `methodMap` indexes above.
    lookupLevel: function lookupLevel(level) {
        if (typeof level === "string") {
            var levelMap = _utils.indexOf(logger.methodMap, level.toLowerCase());
            if (levelMap >= 0) level = levelMap;
            else level = parseInt(level, 10);
        }
        return level;
    },
    // Can be overridden in the host environment
    log: function log(level) {
        level = logger.lookupLevel(level);
        if (typeof console !== "undefined" && logger.lookupLevel(logger.level) <= level) {
            var method = logger.methodMap[level];
            // eslint-disable-next-line no-console
            if (!console[method]) method = "log";
            for(var _len = arguments.length, message = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)message[_key - 1] = arguments[_key];
            console[method].apply(console, message); // eslint-disable-line no-console
        }
    }
};
exports["default"] = logger;
module.exports = exports["default"];

},{"./utils":"1az9o"}],"hJ0HO":[function(require,module,exports) {
"use strict";
exports.__esModule = true;
exports.createProtoAccessControl = createProtoAccessControl;
exports.resultIsAllowed = resultIsAllowed;
exports.resetLoggedProperties = resetLoggedProperties;
// istanbul ignore next
function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) return obj;
    else {
        var newObj = {};
        if (obj != null) {
            for(var key in obj)if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
        newObj["default"] = obj;
        return newObj;
    }
}
var _createNewLookupObject = require("./create-new-lookup-object");
var _logger = require("../logger");
var logger = _interopRequireWildcard(_logger);
var loggedProperties = Object.create(null);
function createProtoAccessControl(runtimeOptions) {
    var defaultMethodWhiteList = Object.create(null);
    defaultMethodWhiteList["constructor"] = false;
    defaultMethodWhiteList["__defineGetter__"] = false;
    defaultMethodWhiteList["__defineSetter__"] = false;
    defaultMethodWhiteList["__lookupGetter__"] = false;
    var defaultPropertyWhiteList = Object.create(null);
    // eslint-disable-next-line no-proto
    defaultPropertyWhiteList["__proto__"] = false;
    return {
        properties: {
            whitelist: _createNewLookupObject.createNewLookupObject(defaultPropertyWhiteList, runtimeOptions.allowedProtoProperties),
            defaultValue: runtimeOptions.allowProtoPropertiesByDefault
        },
        methods: {
            whitelist: _createNewLookupObject.createNewLookupObject(defaultMethodWhiteList, runtimeOptions.allowedProtoMethods),
            defaultValue: runtimeOptions.allowProtoMethodsByDefault
        }
    };
}
function resultIsAllowed(result, protoAccessControl, propertyName) {
    if (typeof result === "function") return checkWhiteList(protoAccessControl.methods, propertyName);
    else return checkWhiteList(protoAccessControl.properties, propertyName);
}
function checkWhiteList(protoAccessControlForType, propertyName) {
    if (protoAccessControlForType.whitelist[propertyName] !== undefined) return protoAccessControlForType.whitelist[propertyName] === true;
    if (protoAccessControlForType.defaultValue !== undefined) return protoAccessControlForType.defaultValue;
    logUnexpecedPropertyAccessOnce(propertyName);
    return false;
}
function logUnexpecedPropertyAccessOnce(propertyName) {
    if (loggedProperties[propertyName] !== true) {
        loggedProperties[propertyName] = true;
        logger.log("error", 'Handlebars: Access has been denied to resolve the property "' + propertyName + '" because it is not an "own property" of its parent.\n' + "You can add a runtime option to disable the check or this warning:\n" + "See https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details");
    }
}
function resetLoggedProperties() {
    Object.keys(loggedProperties).forEach(function(propertyName) {
        delete loggedProperties[propertyName];
    });
}

},{"./create-new-lookup-object":"1UqVd","../logger":"gqRvw"}],"1UqVd":[function(require,module,exports) {
"use strict";
exports.__esModule = true;
exports.createNewLookupObject = createNewLookupObject;
var _utils = require("../utils");
/**
 * Create a new object with "null"-prototype to avoid truthy results on prototype properties.
 * The resulting object can be used with "object[property]" to check if a property exists
 * @param {...object} sources a varargs parameter of source objects that will be merged
 * @returns {object}
 */ function createNewLookupObject() {
    for(var _len = arguments.length, sources = Array(_len), _key = 0; _key < _len; _key++)sources[_key] = arguments[_key];
    return _utils.extend.apply(undefined, [
        Object.create(null)
    ].concat(sources));
}

},{"../utils":"1az9o"}],"fUPg1":[function(require,module,exports) {
// Build out our basic SafeString type
"use strict";
exports.__esModule = true;
function SafeString(string) {
    this.string = string;
}
SafeString.prototype.toString = SafeString.prototype.toHTML = function() {
    return "" + this.string;
};
exports["default"] = SafeString;
module.exports = exports["default"];

},{}],"lcUM0":[function(require,module,exports) {
"use strict";
exports.__esModule = true;
exports.checkRevision = checkRevision;
exports.template = template;
exports.wrapProgram = wrapProgram;
exports.resolvePartial = resolvePartial;
exports.invokePartial = invokePartial;
exports.noop = noop;
// istanbul ignore next
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
// istanbul ignore next
function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) return obj;
    else {
        var newObj = {};
        if (obj != null) {
            for(var key in obj)if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
        newObj["default"] = obj;
        return newObj;
    }
}
var _utils = require("./utils");
var Utils = _interopRequireWildcard(_utils);
var _exception = require("./exception");
var _exception2 = _interopRequireDefault(_exception);
var _base = require("./base");
var _helpers = require("./helpers");
var _internalWrapHelper = require("./internal/wrapHelper");
var _internalProtoAccess = require("./internal/proto-access");
function checkRevision(compilerInfo) {
    var compilerRevision = compilerInfo && compilerInfo[0] || 1, currentRevision = _base.COMPILER_REVISION;
    if (compilerRevision >= _base.LAST_COMPATIBLE_COMPILER_REVISION && compilerRevision <= _base.COMPILER_REVISION) return;
    if (compilerRevision < _base.LAST_COMPATIBLE_COMPILER_REVISION) {
        var runtimeVersions = _base.REVISION_CHANGES[currentRevision], compilerVersions = _base.REVISION_CHANGES[compilerRevision];
        throw new _exception2["default"]("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + runtimeVersions + ") or downgrade your runtime to an older version (" + compilerVersions + ").");
    } else // Use the embedded version info since the runtime doesn't know about this revision yet
    throw new _exception2["default"]("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + compilerInfo[1] + ").");
}
function template(templateSpec, env) {
    /* istanbul ignore next */ if (!env) throw new _exception2["default"]("No environment passed to template");
    if (!templateSpec || !templateSpec.main) throw new _exception2["default"]("Unknown template object: " + typeof templateSpec);
    templateSpec.main.decorator = templateSpec.main_d;
    // Note: Using env.VM references rather than local var references throughout this section to allow
    // for external users to override these as pseudo-supported APIs.
    env.VM.checkRevision(templateSpec.compiler);
    // backwards compatibility for precompiled templates with compiler-version 7 (<4.3.0)
    var templateWasPrecompiledWithCompilerV7 = templateSpec.compiler && templateSpec.compiler[0] === 7;
    function invokePartialWrapper(partial, context, options) {
        if (options.hash) {
            context = Utils.extend({}, context, options.hash);
            if (options.ids) options.ids[0] = true;
        }
        partial = env.VM.resolvePartial.call(this, partial, context, options);
        var extendedOptions = Utils.extend({}, options, {
            hooks: this.hooks,
            protoAccessControl: this.protoAccessControl
        });
        var result = env.VM.invokePartial.call(this, partial, context, extendedOptions);
        if (result == null && env.compile) {
            options.partials[options.name] = env.compile(partial, templateSpec.compilerOptions, env);
            result = options.partials[options.name](context, extendedOptions);
        }
        if (result != null) {
            if (options.indent) {
                var lines = result.split("\n");
                for(var i = 0, l = lines.length; i < l; i++){
                    if (!lines[i] && i + 1 === l) break;
                    lines[i] = options.indent + lines[i];
                }
                result = lines.join("\n");
            }
            return result;
        } else throw new _exception2["default"]("The partial " + options.name + " could not be compiled when running in runtime-only mode");
    }
    // Just add water
    var container = {
        strict: function strict(obj, name, loc) {
            if (!obj || !(name in obj)) throw new _exception2["default"]('"' + name + '" not defined in ' + obj, {
                loc: loc
            });
            return container.lookupProperty(obj, name);
        },
        lookupProperty: function lookupProperty(parent, propertyName) {
            var result = parent[propertyName];
            if (result == null) return result;
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return result;
            if (_internalProtoAccess.resultIsAllowed(result, container.protoAccessControl, propertyName)) return result;
            return undefined;
        },
        lookup: function lookup(depths, name) {
            var len = depths.length;
            for(var i = 0; i < len; i++){
                var result = depths[i] && container.lookupProperty(depths[i], name);
                if (result != null) return depths[i][name];
            }
        },
        lambda: function lambda(current, context) {
            return typeof current === "function" ? current.call(context) : current;
        },
        escapeExpression: Utils.escapeExpression,
        invokePartial: invokePartialWrapper,
        fn: function fn(i) {
            var ret = templateSpec[i];
            ret.decorator = templateSpec[i + "_d"];
            return ret;
        },
        programs: [],
        program: function program(i, data, declaredBlockParams, blockParams, depths) {
            var programWrapper = this.programs[i], fn = this.fn(i);
            if (data || depths || blockParams || declaredBlockParams) programWrapper = wrapProgram(this, i, fn, data, declaredBlockParams, blockParams, depths);
            else if (!programWrapper) programWrapper = this.programs[i] = wrapProgram(this, i, fn);
            return programWrapper;
        },
        data: function data(value, depth) {
            while(value && depth--)value = value._parent;
            return value;
        },
        mergeIfNeeded: function mergeIfNeeded(param, common) {
            var obj = param || common;
            if (param && common && param !== common) obj = Utils.extend({}, common, param);
            return obj;
        },
        // An empty object to use as replacement for null-contexts
        nullContext: Object.seal({}),
        noop: env.VM.noop,
        compilerInfo: templateSpec.compiler
    };
    function ret1(context1) {
        var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
        var data = options.data;
        ret1._setup(options);
        if (!options.partial && templateSpec.useData) data = initData(context1, data);
        var depths = undefined, blockParams = templateSpec.useBlockParams ? [] : undefined;
        if (templateSpec.useDepths) {
            if (options.depths) depths = context1 != options.depths[0] ? [
                context1
            ].concat(options.depths) : options.depths;
            else depths = [
                context1
            ];
        }
        function main(context /*, options*/ ) {
            return "" + templateSpec.main(container, context, container.helpers, container.partials, data, blockParams, depths);
        }
        main = executeDecorators(templateSpec.main, main, container, options.depths || [], data, blockParams);
        return main(context1, options);
    }
    ret1.isTop = true;
    ret1._setup = function(options) {
        if (!options.partial) {
            var mergedHelpers = Utils.extend({}, env.helpers, options.helpers);
            wrapHelpersToPassLookupProperty(mergedHelpers, container);
            container.helpers = mergedHelpers;
            if (templateSpec.usePartial) // Use mergeIfNeeded here to prevent compiling global partials multiple times
            container.partials = container.mergeIfNeeded(options.partials, env.partials);
            if (templateSpec.usePartial || templateSpec.useDecorators) container.decorators = Utils.extend({}, env.decorators, options.decorators);
            container.hooks = {};
            container.protoAccessControl = _internalProtoAccess.createProtoAccessControl(options);
            var keepHelperInHelpers = options.allowCallsToHelperMissing || templateWasPrecompiledWithCompilerV7;
            _helpers.moveHelperToHooks(container, "helperMissing", keepHelperInHelpers);
            _helpers.moveHelperToHooks(container, "blockHelperMissing", keepHelperInHelpers);
        } else {
            container.protoAccessControl = options.protoAccessControl; // internal option
            container.helpers = options.helpers;
            container.partials = options.partials;
            container.decorators = options.decorators;
            container.hooks = options.hooks;
        }
    };
    ret1._child = function(i, data, blockParams, depths) {
        if (templateSpec.useBlockParams && !blockParams) throw new _exception2["default"]("must pass block params");
        if (templateSpec.useDepths && !depths) throw new _exception2["default"]("must pass parent depths");
        return wrapProgram(container, i, templateSpec[i], data, 0, blockParams, depths);
    };
    return ret1;
}
function wrapProgram(container, i, fn, data, declaredBlockParams, blockParams, depths) {
    function prog(context) {
        var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
        var currentDepths = depths;
        if (depths && context != depths[0] && !(context === container.nullContext && depths[0] === null)) currentDepths = [
            context
        ].concat(depths);
        return fn(container, context, container.helpers, container.partials, options.data || data, blockParams && [
            options.blockParams
        ].concat(blockParams), currentDepths);
    }
    prog = executeDecorators(fn, prog, container, depths, data, blockParams);
    prog.program = i;
    prog.depth = depths ? depths.length : 0;
    prog.blockParams = declaredBlockParams || 0;
    return prog;
}
/**
 * This is currently part of the official API, therefore implementation details should not be changed.
 */ function resolvePartial(partial, context, options) {
    if (!partial) {
        if (options.name === "@partial-block") partial = options.data["partial-block"];
        else partial = options.partials[options.name];
    } else if (!partial.call && !options.name) {
        // This is a dynamic partial that returned a string
        options.name = partial;
        partial = options.partials[partial];
    }
    return partial;
}
function invokePartial(partial, context2, options1) {
    // Use the current closure context to save the partial-block if this partial
    var currentPartialBlock = options1.data && options1.data["partial-block"];
    options1.partial = true;
    if (options1.ids) options1.data.contextPath = options1.ids[0] || options1.data.contextPath;
    var partialBlock = undefined;
    if (options1.fn && options1.fn !== noop) (function() {
        options1.data = _base.createFrame(options1.data);
        // Wrapper function to get access to currentPartialBlock from the closure
        var fn = options1.fn;
        partialBlock = options1.data["partial-block"] = function partialBlockWrapper(context) {
            var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
            // Restore the partial-block from the closure for the execution of the block
            // i.e. the part inside the block of the partial call.
            options.data = _base.createFrame(options.data);
            options.data["partial-block"] = currentPartialBlock;
            return fn(context, options);
        };
        if (fn.partials) options1.partials = Utils.extend({}, options1.partials, fn.partials);
    })();
    if (partial === undefined && partialBlock) partial = partialBlock;
    if (partial === undefined) throw new _exception2["default"]("The partial " + options1.name + " could not be found");
    else if (partial instanceof Function) return partial(context2, options1);
}
function noop() {
    return "";
}
function initData(context, data) {
    if (!data || !("root" in data)) {
        data = data ? _base.createFrame(data) : {};
        data.root = context;
    }
    return data;
}
function executeDecorators(fn, prog, container, depths, data, blockParams) {
    if (fn.decorator) {
        var props = {};
        prog = fn.decorator(prog, props, container, depths && depths[0], data, blockParams, depths);
        Utils.extend(prog, props);
    }
    return prog;
}
function wrapHelpersToPassLookupProperty(mergedHelpers, container) {
    Object.keys(mergedHelpers).forEach(function(helperName) {
        var helper = mergedHelpers[helperName];
        mergedHelpers[helperName] = passLookupPropertyOption(helper, container);
    });
}
function passLookupPropertyOption(helper, container) {
    var lookupProperty = container.lookupProperty;
    return _internalWrapHelper.wrapHelper(helper, function(options) {
        return Utils.extend({
            lookupProperty: lookupProperty
        }, options);
    });
}

},{"./utils":"1az9o","./exception":"gO63O","./base":"dt4wA","./helpers":"bxbLz","./internal/wrapHelper":"bKEVr","./internal/proto-access":"hJ0HO"}],"bKEVr":[function(require,module,exports) {
"use strict";
exports.__esModule = true;
exports.wrapHelper = wrapHelper;
function wrapHelper(helper, transformOptionsFn) {
    if (typeof helper !== "function") // This should not happen, but apparently it does in https://github.com/wycats/handlebars.js/issues/1639
    // We try to make the wrapper least-invasive by not wrapping it, if the helper is not a function.
    return helper;
    var wrapper = function wrapper() /* dynamic arguments */ {
        var options = arguments[arguments.length - 1];
        arguments[arguments.length - 1] = transformOptionsFn(options);
        return helper.apply(this, arguments);
    };
    return wrapper;
}

},{}],"gyMyS":[function(require,module,exports) {
"use strict";
var global = arguments[3];
exports.__esModule = true;
exports["default"] = function(Handlebars) {
    /* istanbul ignore next */ var root = typeof global !== "undefined" ? global : window, $Handlebars = root.Handlebars;
    /* istanbul ignore next */ Handlebars.noConflict = function() {
        if (root.Handlebars === Handlebars) root.Handlebars = $Handlebars;
        return Handlebars;
    };
};
module.exports = exports["default"];

},{}],"iOlHO":[function(require,module,exports) {
"use strict";
exports.__esModule = true;
var AST = {
    // Public API used to evaluate derived attributes regarding AST nodes
    helpers: {
        // a mustache is definitely a helper if:
        // * it is an eligible helper, and
        // * it has at least one parameter or hash segment
        helperExpression: function helperExpression(node) {
            return node.type === "SubExpression" || (node.type === "MustacheStatement" || node.type === "BlockStatement") && !!(node.params && node.params.length || node.hash);
        },
        scopedId: function scopedId(path) {
            return /^\.|this\b/.test(path.original);
        },
        // an ID is simple if it only has one part, and that part is not
        // `..` or `this`.
        simpleId: function simpleId(path) {
            return path.parts.length === 1 && !AST.helpers.scopedId(path) && !path.depth;
        }
    }
};
// Must be exported as an object rather than the root of the module as the jison lexer
// must modify the object to operate properly.
exports["default"] = AST;
module.exports = exports["default"];

},{}],"kVun2":[function(require,module,exports) {
"use strict";
exports.__esModule = true;
exports.parseWithoutProcessing = parseWithoutProcessing;
exports.parse = parse;
// istanbul ignore next
function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) return obj;
    else {
        var newObj = {};
        if (obj != null) {
            for(var key in obj)if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
        newObj["default"] = obj;
        return newObj;
    }
}
// istanbul ignore next
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
var _parser = require("./parser");
var _parser2 = _interopRequireDefault(_parser);
var _whitespaceControl = require("./whitespace-control");
var _whitespaceControl2 = _interopRequireDefault(_whitespaceControl);
var _helpers = require("./helpers");
var Helpers = _interopRequireWildcard(_helpers);
var _utils = require("../utils");
exports.parser = _parser2["default"];
var yy = {};
_utils.extend(yy, Helpers);
function parseWithoutProcessing(input, options) {
    // Just return if an already-compiled AST was passed in.
    if (input.type === "Program") return input;
    _parser2["default"].yy = yy;
    // Altering the shared object here, but this is ok as parser is a sync operation
    yy.locInfo = function(locInfo) {
        return new yy.SourceLocation(options && options.srcName, locInfo);
    };
    var ast = _parser2["default"].parse(input);
    return ast;
}
function parse(input, options) {
    var ast = parseWithoutProcessing(input, options);
    var strip = new _whitespaceControl2["default"](options);
    return strip.accept(ast);
}

},{"./parser":"lu457","./whitespace-control":"7ezbr","./helpers":"aNd96","../utils":"1az9o"}],"lu457":[function(require,module,exports) {
// File ignored in coverage tests via setting in .istanbul.yml
/* Jison generated parser */ "use strict";
exports.__esModule = true;
var handlebars = function() {
    var parser = {
        trace: function trace() {},
        yy: {},
        symbols_: {
            "error": 2,
            "root": 3,
            "program": 4,
            "EOF": 5,
            "program_repetition0": 6,
            "statement": 7,
            "mustache": 8,
            "block": 9,
            "rawBlock": 10,
            "partial": 11,
            "partialBlock": 12,
            "content": 13,
            "COMMENT": 14,
            "CONTENT": 15,
            "openRawBlock": 16,
            "rawBlock_repetition0": 17,
            "END_RAW_BLOCK": 18,
            "OPEN_RAW_BLOCK": 19,
            "helperName": 20,
            "openRawBlock_repetition0": 21,
            "openRawBlock_option0": 22,
            "CLOSE_RAW_BLOCK": 23,
            "openBlock": 24,
            "block_option0": 25,
            "closeBlock": 26,
            "openInverse": 27,
            "block_option1": 28,
            "OPEN_BLOCK": 29,
            "openBlock_repetition0": 30,
            "openBlock_option0": 31,
            "openBlock_option1": 32,
            "CLOSE": 33,
            "OPEN_INVERSE": 34,
            "openInverse_repetition0": 35,
            "openInverse_option0": 36,
            "openInverse_option1": 37,
            "openInverseChain": 38,
            "OPEN_INVERSE_CHAIN": 39,
            "openInverseChain_repetition0": 40,
            "openInverseChain_option0": 41,
            "openInverseChain_option1": 42,
            "inverseAndProgram": 43,
            "INVERSE": 44,
            "inverseChain": 45,
            "inverseChain_option0": 46,
            "OPEN_ENDBLOCK": 47,
            "OPEN": 48,
            "mustache_repetition0": 49,
            "mustache_option0": 50,
            "OPEN_UNESCAPED": 51,
            "mustache_repetition1": 52,
            "mustache_option1": 53,
            "CLOSE_UNESCAPED": 54,
            "OPEN_PARTIAL": 55,
            "partialName": 56,
            "partial_repetition0": 57,
            "partial_option0": 58,
            "openPartialBlock": 59,
            "OPEN_PARTIAL_BLOCK": 60,
            "openPartialBlock_repetition0": 61,
            "openPartialBlock_option0": 62,
            "param": 63,
            "sexpr": 64,
            "OPEN_SEXPR": 65,
            "sexpr_repetition0": 66,
            "sexpr_option0": 67,
            "CLOSE_SEXPR": 68,
            "hash": 69,
            "hash_repetition_plus0": 70,
            "hashSegment": 71,
            "ID": 72,
            "EQUALS": 73,
            "blockParams": 74,
            "OPEN_BLOCK_PARAMS": 75,
            "blockParams_repetition_plus0": 76,
            "CLOSE_BLOCK_PARAMS": 77,
            "path": 78,
            "dataName": 79,
            "STRING": 80,
            "NUMBER": 81,
            "BOOLEAN": 82,
            "UNDEFINED": 83,
            "NULL": 84,
            "DATA": 85,
            "pathSegments": 86,
            "SEP": 87,
            "$accept": 0,
            "$end": 1
        },
        terminals_: {
            2: "error",
            5: "EOF",
            14: "COMMENT",
            15: "CONTENT",
            18: "END_RAW_BLOCK",
            19: "OPEN_RAW_BLOCK",
            23: "CLOSE_RAW_BLOCK",
            29: "OPEN_BLOCK",
            33: "CLOSE",
            34: "OPEN_INVERSE",
            39: "OPEN_INVERSE_CHAIN",
            44: "INVERSE",
            47: "OPEN_ENDBLOCK",
            48: "OPEN",
            51: "OPEN_UNESCAPED",
            54: "CLOSE_UNESCAPED",
            55: "OPEN_PARTIAL",
            60: "OPEN_PARTIAL_BLOCK",
            65: "OPEN_SEXPR",
            68: "CLOSE_SEXPR",
            72: "ID",
            73: "EQUALS",
            75: "OPEN_BLOCK_PARAMS",
            77: "CLOSE_BLOCK_PARAMS",
            80: "STRING",
            81: "NUMBER",
            82: "BOOLEAN",
            83: "UNDEFINED",
            84: "NULL",
            85: "DATA",
            87: "SEP"
        },
        productions_: [
            0,
            [
                3,
                2
            ],
            [
                4,
                1
            ],
            [
                7,
                1
            ],
            [
                7,
                1
            ],
            [
                7,
                1
            ],
            [
                7,
                1
            ],
            [
                7,
                1
            ],
            [
                7,
                1
            ],
            [
                7,
                1
            ],
            [
                13,
                1
            ],
            [
                10,
                3
            ],
            [
                16,
                5
            ],
            [
                9,
                4
            ],
            [
                9,
                4
            ],
            [
                24,
                6
            ],
            [
                27,
                6
            ],
            [
                38,
                6
            ],
            [
                43,
                2
            ],
            [
                45,
                3
            ],
            [
                45,
                1
            ],
            [
                26,
                3
            ],
            [
                8,
                5
            ],
            [
                8,
                5
            ],
            [
                11,
                5
            ],
            [
                12,
                3
            ],
            [
                59,
                5
            ],
            [
                63,
                1
            ],
            [
                63,
                1
            ],
            [
                64,
                5
            ],
            [
                69,
                1
            ],
            [
                71,
                3
            ],
            [
                74,
                3
            ],
            [
                20,
                1
            ],
            [
                20,
                1
            ],
            [
                20,
                1
            ],
            [
                20,
                1
            ],
            [
                20,
                1
            ],
            [
                20,
                1
            ],
            [
                20,
                1
            ],
            [
                56,
                1
            ],
            [
                56,
                1
            ],
            [
                79,
                2
            ],
            [
                78,
                1
            ],
            [
                86,
                3
            ],
            [
                86,
                1
            ],
            [
                6,
                0
            ],
            [
                6,
                2
            ],
            [
                17,
                0
            ],
            [
                17,
                2
            ],
            [
                21,
                0
            ],
            [
                21,
                2
            ],
            [
                22,
                0
            ],
            [
                22,
                1
            ],
            [
                25,
                0
            ],
            [
                25,
                1
            ],
            [
                28,
                0
            ],
            [
                28,
                1
            ],
            [
                30,
                0
            ],
            [
                30,
                2
            ],
            [
                31,
                0
            ],
            [
                31,
                1
            ],
            [
                32,
                0
            ],
            [
                32,
                1
            ],
            [
                35,
                0
            ],
            [
                35,
                2
            ],
            [
                36,
                0
            ],
            [
                36,
                1
            ],
            [
                37,
                0
            ],
            [
                37,
                1
            ],
            [
                40,
                0
            ],
            [
                40,
                2
            ],
            [
                41,
                0
            ],
            [
                41,
                1
            ],
            [
                42,
                0
            ],
            [
                42,
                1
            ],
            [
                46,
                0
            ],
            [
                46,
                1
            ],
            [
                49,
                0
            ],
            [
                49,
                2
            ],
            [
                50,
                0
            ],
            [
                50,
                1
            ],
            [
                52,
                0
            ],
            [
                52,
                2
            ],
            [
                53,
                0
            ],
            [
                53,
                1
            ],
            [
                57,
                0
            ],
            [
                57,
                2
            ],
            [
                58,
                0
            ],
            [
                58,
                1
            ],
            [
                61,
                0
            ],
            [
                61,
                2
            ],
            [
                62,
                0
            ],
            [
                62,
                1
            ],
            [
                66,
                0
            ],
            [
                66,
                2
            ],
            [
                67,
                0
            ],
            [
                67,
                1
            ],
            [
                70,
                1
            ],
            [
                70,
                2
            ],
            [
                76,
                1
            ],
            [
                76,
                2
            ]
        ],
        performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$) {
            var $0 = $$.length - 1;
            switch(yystate){
                case 1:
                    return $$[$0 - 1];
                case 2:
                    this.$ = yy.prepareProgram($$[$0]);
                    break;
                case 3:
                    this.$ = $$[$0];
                    break;
                case 4:
                    this.$ = $$[$0];
                    break;
                case 5:
                    this.$ = $$[$0];
                    break;
                case 6:
                    this.$ = $$[$0];
                    break;
                case 7:
                    this.$ = $$[$0];
                    break;
                case 8:
                    this.$ = $$[$0];
                    break;
                case 9:
                    this.$ = {
                        type: "CommentStatement",
                        value: yy.stripComment($$[$0]),
                        strip: yy.stripFlags($$[$0], $$[$0]),
                        loc: yy.locInfo(this._$)
                    };
                    break;
                case 10:
                    this.$ = {
                        type: "ContentStatement",
                        original: $$[$0],
                        value: $$[$0],
                        loc: yy.locInfo(this._$)
                    };
                    break;
                case 11:
                    this.$ = yy.prepareRawBlock($$[$0 - 2], $$[$0 - 1], $$[$0], this._$);
                    break;
                case 12:
                    this.$ = {
                        path: $$[$0 - 3],
                        params: $$[$0 - 2],
                        hash: $$[$0 - 1]
                    };
                    break;
                case 13:
                    this.$ = yy.prepareBlock($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0], false, this._$);
                    break;
                case 14:
                    this.$ = yy.prepareBlock($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0], true, this._$);
                    break;
                case 15:
                    this.$ = {
                        open: $$[$0 - 5],
                        path: $$[$0 - 4],
                        params: $$[$0 - 3],
                        hash: $$[$0 - 2],
                        blockParams: $$[$0 - 1],
                        strip: yy.stripFlags($$[$0 - 5], $$[$0])
                    };
                    break;
                case 16:
                    this.$ = {
                        path: $$[$0 - 4],
                        params: $$[$0 - 3],
                        hash: $$[$0 - 2],
                        blockParams: $$[$0 - 1],
                        strip: yy.stripFlags($$[$0 - 5], $$[$0])
                    };
                    break;
                case 17:
                    this.$ = {
                        path: $$[$0 - 4],
                        params: $$[$0 - 3],
                        hash: $$[$0 - 2],
                        blockParams: $$[$0 - 1],
                        strip: yy.stripFlags($$[$0 - 5], $$[$0])
                    };
                    break;
                case 18:
                    this.$ = {
                        strip: yy.stripFlags($$[$0 - 1], $$[$0 - 1]),
                        program: $$[$0]
                    };
                    break;
                case 19:
                    var inverse = yy.prepareBlock($$[$0 - 2], $$[$0 - 1], $$[$0], $$[$0], false, this._$), program = yy.prepareProgram([
                        inverse
                    ], $$[$0 - 1].loc);
                    program.chained = true;
                    this.$ = {
                        strip: $$[$0 - 2].strip,
                        program: program,
                        chain: true
                    };
                    break;
                case 20:
                    this.$ = $$[$0];
                    break;
                case 21:
                    this.$ = {
                        path: $$[$0 - 1],
                        strip: yy.stripFlags($$[$0 - 2], $$[$0])
                    };
                    break;
                case 22:
                    this.$ = yy.prepareMustache($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0 - 4], yy.stripFlags($$[$0 - 4], $$[$0]), this._$);
                    break;
                case 23:
                    this.$ = yy.prepareMustache($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0 - 4], yy.stripFlags($$[$0 - 4], $$[$0]), this._$);
                    break;
                case 24:
                    this.$ = {
                        type: "PartialStatement",
                        name: $$[$0 - 3],
                        params: $$[$0 - 2],
                        hash: $$[$0 - 1],
                        indent: "",
                        strip: yy.stripFlags($$[$0 - 4], $$[$0]),
                        loc: yy.locInfo(this._$)
                    };
                    break;
                case 25:
                    this.$ = yy.preparePartialBlock($$[$0 - 2], $$[$0 - 1], $$[$0], this._$);
                    break;
                case 26:
                    this.$ = {
                        path: $$[$0 - 3],
                        params: $$[$0 - 2],
                        hash: $$[$0 - 1],
                        strip: yy.stripFlags($$[$0 - 4], $$[$0])
                    };
                    break;
                case 27:
                    this.$ = $$[$0];
                    break;
                case 28:
                    this.$ = $$[$0];
                    break;
                case 29:
                    this.$ = {
                        type: "SubExpression",
                        path: $$[$0 - 3],
                        params: $$[$0 - 2],
                        hash: $$[$0 - 1],
                        loc: yy.locInfo(this._$)
                    };
                    break;
                case 30:
                    this.$ = {
                        type: "Hash",
                        pairs: $$[$0],
                        loc: yy.locInfo(this._$)
                    };
                    break;
                case 31:
                    this.$ = {
                        type: "HashPair",
                        key: yy.id($$[$0 - 2]),
                        value: $$[$0],
                        loc: yy.locInfo(this._$)
                    };
                    break;
                case 32:
                    this.$ = yy.id($$[$0 - 1]);
                    break;
                case 33:
                    this.$ = $$[$0];
                    break;
                case 34:
                    this.$ = $$[$0];
                    break;
                case 35:
                    this.$ = {
                        type: "StringLiteral",
                        value: $$[$0],
                        original: $$[$0],
                        loc: yy.locInfo(this._$)
                    };
                    break;
                case 36:
                    this.$ = {
                        type: "NumberLiteral",
                        value: Number($$[$0]),
                        original: Number($$[$0]),
                        loc: yy.locInfo(this._$)
                    };
                    break;
                case 37:
                    this.$ = {
                        type: "BooleanLiteral",
                        value: $$[$0] === "true",
                        original: $$[$0] === "true",
                        loc: yy.locInfo(this._$)
                    };
                    break;
                case 38:
                    this.$ = {
                        type: "UndefinedLiteral",
                        original: undefined,
                        value: undefined,
                        loc: yy.locInfo(this._$)
                    };
                    break;
                case 39:
                    this.$ = {
                        type: "NullLiteral",
                        original: null,
                        value: null,
                        loc: yy.locInfo(this._$)
                    };
                    break;
                case 40:
                    this.$ = $$[$0];
                    break;
                case 41:
                    this.$ = $$[$0];
                    break;
                case 42:
                    this.$ = yy.preparePath(true, $$[$0], this._$);
                    break;
                case 43:
                    this.$ = yy.preparePath(false, $$[$0], this._$);
                    break;
                case 44:
                    $$[$0 - 2].push({
                        part: yy.id($$[$0]),
                        original: $$[$0],
                        separator: $$[$0 - 1]
                    });
                    this.$ = $$[$0 - 2];
                    break;
                case 45:
                    this.$ = [
                        {
                            part: yy.id($$[$0]),
                            original: $$[$0]
                        }
                    ];
                    break;
                case 46:
                    this.$ = [];
                    break;
                case 47:
                    $$[$0 - 1].push($$[$0]);
                    break;
                case 48:
                    this.$ = [];
                    break;
                case 49:
                    $$[$0 - 1].push($$[$0]);
                    break;
                case 50:
                    this.$ = [];
                    break;
                case 51:
                    $$[$0 - 1].push($$[$0]);
                    break;
                case 58:
                    this.$ = [];
                    break;
                case 59:
                    $$[$0 - 1].push($$[$0]);
                    break;
                case 64:
                    this.$ = [];
                    break;
                case 65:
                    $$[$0 - 1].push($$[$0]);
                    break;
                case 70:
                    this.$ = [];
                    break;
                case 71:
                    $$[$0 - 1].push($$[$0]);
                    break;
                case 78:
                    this.$ = [];
                    break;
                case 79:
                    $$[$0 - 1].push($$[$0]);
                    break;
                case 82:
                    this.$ = [];
                    break;
                case 83:
                    $$[$0 - 1].push($$[$0]);
                    break;
                case 86:
                    this.$ = [];
                    break;
                case 87:
                    $$[$0 - 1].push($$[$0]);
                    break;
                case 90:
                    this.$ = [];
                    break;
                case 91:
                    $$[$0 - 1].push($$[$0]);
                    break;
                case 94:
                    this.$ = [];
                    break;
                case 95:
                    $$[$0 - 1].push($$[$0]);
                    break;
                case 98:
                    this.$ = [
                        $$[$0]
                    ];
                    break;
                case 99:
                    $$[$0 - 1].push($$[$0]);
                    break;
                case 100:
                    this.$ = [
                        $$[$0]
                    ];
                    break;
                case 101:
                    $$[$0 - 1].push($$[$0]);
                    break;
            }
        },
        table: [
            {
                3: 1,
                4: 2,
                5: [
                    2,
                    46
                ],
                6: 3,
                14: [
                    2,
                    46
                ],
                15: [
                    2,
                    46
                ],
                19: [
                    2,
                    46
                ],
                29: [
                    2,
                    46
                ],
                34: [
                    2,
                    46
                ],
                48: [
                    2,
                    46
                ],
                51: [
                    2,
                    46
                ],
                55: [
                    2,
                    46
                ],
                60: [
                    2,
                    46
                ]
            },
            {
                1: [
                    3
                ]
            },
            {
                5: [
                    1,
                    4
                ]
            },
            {
                5: [
                    2,
                    2
                ],
                7: 5,
                8: 6,
                9: 7,
                10: 8,
                11: 9,
                12: 10,
                13: 11,
                14: [
                    1,
                    12
                ],
                15: [
                    1,
                    20
                ],
                16: 17,
                19: [
                    1,
                    23
                ],
                24: 15,
                27: 16,
                29: [
                    1,
                    21
                ],
                34: [
                    1,
                    22
                ],
                39: [
                    2,
                    2
                ],
                44: [
                    2,
                    2
                ],
                47: [
                    2,
                    2
                ],
                48: [
                    1,
                    13
                ],
                51: [
                    1,
                    14
                ],
                55: [
                    1,
                    18
                ],
                59: 19,
                60: [
                    1,
                    24
                ]
            },
            {
                1: [
                    2,
                    1
                ]
            },
            {
                5: [
                    2,
                    47
                ],
                14: [
                    2,
                    47
                ],
                15: [
                    2,
                    47
                ],
                19: [
                    2,
                    47
                ],
                29: [
                    2,
                    47
                ],
                34: [
                    2,
                    47
                ],
                39: [
                    2,
                    47
                ],
                44: [
                    2,
                    47
                ],
                47: [
                    2,
                    47
                ],
                48: [
                    2,
                    47
                ],
                51: [
                    2,
                    47
                ],
                55: [
                    2,
                    47
                ],
                60: [
                    2,
                    47
                ]
            },
            {
                5: [
                    2,
                    3
                ],
                14: [
                    2,
                    3
                ],
                15: [
                    2,
                    3
                ],
                19: [
                    2,
                    3
                ],
                29: [
                    2,
                    3
                ],
                34: [
                    2,
                    3
                ],
                39: [
                    2,
                    3
                ],
                44: [
                    2,
                    3
                ],
                47: [
                    2,
                    3
                ],
                48: [
                    2,
                    3
                ],
                51: [
                    2,
                    3
                ],
                55: [
                    2,
                    3
                ],
                60: [
                    2,
                    3
                ]
            },
            {
                5: [
                    2,
                    4
                ],
                14: [
                    2,
                    4
                ],
                15: [
                    2,
                    4
                ],
                19: [
                    2,
                    4
                ],
                29: [
                    2,
                    4
                ],
                34: [
                    2,
                    4
                ],
                39: [
                    2,
                    4
                ],
                44: [
                    2,
                    4
                ],
                47: [
                    2,
                    4
                ],
                48: [
                    2,
                    4
                ],
                51: [
                    2,
                    4
                ],
                55: [
                    2,
                    4
                ],
                60: [
                    2,
                    4
                ]
            },
            {
                5: [
                    2,
                    5
                ],
                14: [
                    2,
                    5
                ],
                15: [
                    2,
                    5
                ],
                19: [
                    2,
                    5
                ],
                29: [
                    2,
                    5
                ],
                34: [
                    2,
                    5
                ],
                39: [
                    2,
                    5
                ],
                44: [
                    2,
                    5
                ],
                47: [
                    2,
                    5
                ],
                48: [
                    2,
                    5
                ],
                51: [
                    2,
                    5
                ],
                55: [
                    2,
                    5
                ],
                60: [
                    2,
                    5
                ]
            },
            {
                5: [
                    2,
                    6
                ],
                14: [
                    2,
                    6
                ],
                15: [
                    2,
                    6
                ],
                19: [
                    2,
                    6
                ],
                29: [
                    2,
                    6
                ],
                34: [
                    2,
                    6
                ],
                39: [
                    2,
                    6
                ],
                44: [
                    2,
                    6
                ],
                47: [
                    2,
                    6
                ],
                48: [
                    2,
                    6
                ],
                51: [
                    2,
                    6
                ],
                55: [
                    2,
                    6
                ],
                60: [
                    2,
                    6
                ]
            },
            {
                5: [
                    2,
                    7
                ],
                14: [
                    2,
                    7
                ],
                15: [
                    2,
                    7
                ],
                19: [
                    2,
                    7
                ],
                29: [
                    2,
                    7
                ],
                34: [
                    2,
                    7
                ],
                39: [
                    2,
                    7
                ],
                44: [
                    2,
                    7
                ],
                47: [
                    2,
                    7
                ],
                48: [
                    2,
                    7
                ],
                51: [
                    2,
                    7
                ],
                55: [
                    2,
                    7
                ],
                60: [
                    2,
                    7
                ]
            },
            {
                5: [
                    2,
                    8
                ],
                14: [
                    2,
                    8
                ],
                15: [
                    2,
                    8
                ],
                19: [
                    2,
                    8
                ],
                29: [
                    2,
                    8
                ],
                34: [
                    2,
                    8
                ],
                39: [
                    2,
                    8
                ],
                44: [
                    2,
                    8
                ],
                47: [
                    2,
                    8
                ],
                48: [
                    2,
                    8
                ],
                51: [
                    2,
                    8
                ],
                55: [
                    2,
                    8
                ],
                60: [
                    2,
                    8
                ]
            },
            {
                5: [
                    2,
                    9
                ],
                14: [
                    2,
                    9
                ],
                15: [
                    2,
                    9
                ],
                19: [
                    2,
                    9
                ],
                29: [
                    2,
                    9
                ],
                34: [
                    2,
                    9
                ],
                39: [
                    2,
                    9
                ],
                44: [
                    2,
                    9
                ],
                47: [
                    2,
                    9
                ],
                48: [
                    2,
                    9
                ],
                51: [
                    2,
                    9
                ],
                55: [
                    2,
                    9
                ],
                60: [
                    2,
                    9
                ]
            },
            {
                20: 25,
                72: [
                    1,
                    35
                ],
                78: 26,
                79: 27,
                80: [
                    1,
                    28
                ],
                81: [
                    1,
                    29
                ],
                82: [
                    1,
                    30
                ],
                83: [
                    1,
                    31
                ],
                84: [
                    1,
                    32
                ],
                85: [
                    1,
                    34
                ],
                86: 33
            },
            {
                20: 36,
                72: [
                    1,
                    35
                ],
                78: 26,
                79: 27,
                80: [
                    1,
                    28
                ],
                81: [
                    1,
                    29
                ],
                82: [
                    1,
                    30
                ],
                83: [
                    1,
                    31
                ],
                84: [
                    1,
                    32
                ],
                85: [
                    1,
                    34
                ],
                86: 33
            },
            {
                4: 37,
                6: 3,
                14: [
                    2,
                    46
                ],
                15: [
                    2,
                    46
                ],
                19: [
                    2,
                    46
                ],
                29: [
                    2,
                    46
                ],
                34: [
                    2,
                    46
                ],
                39: [
                    2,
                    46
                ],
                44: [
                    2,
                    46
                ],
                47: [
                    2,
                    46
                ],
                48: [
                    2,
                    46
                ],
                51: [
                    2,
                    46
                ],
                55: [
                    2,
                    46
                ],
                60: [
                    2,
                    46
                ]
            },
            {
                4: 38,
                6: 3,
                14: [
                    2,
                    46
                ],
                15: [
                    2,
                    46
                ],
                19: [
                    2,
                    46
                ],
                29: [
                    2,
                    46
                ],
                34: [
                    2,
                    46
                ],
                44: [
                    2,
                    46
                ],
                47: [
                    2,
                    46
                ],
                48: [
                    2,
                    46
                ],
                51: [
                    2,
                    46
                ],
                55: [
                    2,
                    46
                ],
                60: [
                    2,
                    46
                ]
            },
            {
                15: [
                    2,
                    48
                ],
                17: 39,
                18: [
                    2,
                    48
                ]
            },
            {
                20: 41,
                56: 40,
                64: 42,
                65: [
                    1,
                    43
                ],
                72: [
                    1,
                    35
                ],
                78: 26,
                79: 27,
                80: [
                    1,
                    28
                ],
                81: [
                    1,
                    29
                ],
                82: [
                    1,
                    30
                ],
                83: [
                    1,
                    31
                ],
                84: [
                    1,
                    32
                ],
                85: [
                    1,
                    34
                ],
                86: 33
            },
            {
                4: 44,
                6: 3,
                14: [
                    2,
                    46
                ],
                15: [
                    2,
                    46
                ],
                19: [
                    2,
                    46
                ],
                29: [
                    2,
                    46
                ],
                34: [
                    2,
                    46
                ],
                47: [
                    2,
                    46
                ],
                48: [
                    2,
                    46
                ],
                51: [
                    2,
                    46
                ],
                55: [
                    2,
                    46
                ],
                60: [
                    2,
                    46
                ]
            },
            {
                5: [
                    2,
                    10
                ],
                14: [
                    2,
                    10
                ],
                15: [
                    2,
                    10
                ],
                18: [
                    2,
                    10
                ],
                19: [
                    2,
                    10
                ],
                29: [
                    2,
                    10
                ],
                34: [
                    2,
                    10
                ],
                39: [
                    2,
                    10
                ],
                44: [
                    2,
                    10
                ],
                47: [
                    2,
                    10
                ],
                48: [
                    2,
                    10
                ],
                51: [
                    2,
                    10
                ],
                55: [
                    2,
                    10
                ],
                60: [
                    2,
                    10
                ]
            },
            {
                20: 45,
                72: [
                    1,
                    35
                ],
                78: 26,
                79: 27,
                80: [
                    1,
                    28
                ],
                81: [
                    1,
                    29
                ],
                82: [
                    1,
                    30
                ],
                83: [
                    1,
                    31
                ],
                84: [
                    1,
                    32
                ],
                85: [
                    1,
                    34
                ],
                86: 33
            },
            {
                20: 46,
                72: [
                    1,
                    35
                ],
                78: 26,
                79: 27,
                80: [
                    1,
                    28
                ],
                81: [
                    1,
                    29
                ],
                82: [
                    1,
                    30
                ],
                83: [
                    1,
                    31
                ],
                84: [
                    1,
                    32
                ],
                85: [
                    1,
                    34
                ],
                86: 33
            },
            {
                20: 47,
                72: [
                    1,
                    35
                ],
                78: 26,
                79: 27,
                80: [
                    1,
                    28
                ],
                81: [
                    1,
                    29
                ],
                82: [
                    1,
                    30
                ],
                83: [
                    1,
                    31
                ],
                84: [
                    1,
                    32
                ],
                85: [
                    1,
                    34
                ],
                86: 33
            },
            {
                20: 41,
                56: 48,
                64: 42,
                65: [
                    1,
                    43
                ],
                72: [
                    1,
                    35
                ],
                78: 26,
                79: 27,
                80: [
                    1,
                    28
                ],
                81: [
                    1,
                    29
                ],
                82: [
                    1,
                    30
                ],
                83: [
                    1,
                    31
                ],
                84: [
                    1,
                    32
                ],
                85: [
                    1,
                    34
                ],
                86: 33
            },
            {
                33: [
                    2,
                    78
                ],
                49: 49,
                65: [
                    2,
                    78
                ],
                72: [
                    2,
                    78
                ],
                80: [
                    2,
                    78
                ],
                81: [
                    2,
                    78
                ],
                82: [
                    2,
                    78
                ],
                83: [
                    2,
                    78
                ],
                84: [
                    2,
                    78
                ],
                85: [
                    2,
                    78
                ]
            },
            {
                23: [
                    2,
                    33
                ],
                33: [
                    2,
                    33
                ],
                54: [
                    2,
                    33
                ],
                65: [
                    2,
                    33
                ],
                68: [
                    2,
                    33
                ],
                72: [
                    2,
                    33
                ],
                75: [
                    2,
                    33
                ],
                80: [
                    2,
                    33
                ],
                81: [
                    2,
                    33
                ],
                82: [
                    2,
                    33
                ],
                83: [
                    2,
                    33
                ],
                84: [
                    2,
                    33
                ],
                85: [
                    2,
                    33
                ]
            },
            {
                23: [
                    2,
                    34
                ],
                33: [
                    2,
                    34
                ],
                54: [
                    2,
                    34
                ],
                65: [
                    2,
                    34
                ],
                68: [
                    2,
                    34
                ],
                72: [
                    2,
                    34
                ],
                75: [
                    2,
                    34
                ],
                80: [
                    2,
                    34
                ],
                81: [
                    2,
                    34
                ],
                82: [
                    2,
                    34
                ],
                83: [
                    2,
                    34
                ],
                84: [
                    2,
                    34
                ],
                85: [
                    2,
                    34
                ]
            },
            {
                23: [
                    2,
                    35
                ],
                33: [
                    2,
                    35
                ],
                54: [
                    2,
                    35
                ],
                65: [
                    2,
                    35
                ],
                68: [
                    2,
                    35
                ],
                72: [
                    2,
                    35
                ],
                75: [
                    2,
                    35
                ],
                80: [
                    2,
                    35
                ],
                81: [
                    2,
                    35
                ],
                82: [
                    2,
                    35
                ],
                83: [
                    2,
                    35
                ],
                84: [
                    2,
                    35
                ],
                85: [
                    2,
                    35
                ]
            },
            {
                23: [
                    2,
                    36
                ],
                33: [
                    2,
                    36
                ],
                54: [
                    2,
                    36
                ],
                65: [
                    2,
                    36
                ],
                68: [
                    2,
                    36
                ],
                72: [
                    2,
                    36
                ],
                75: [
                    2,
                    36
                ],
                80: [
                    2,
                    36
                ],
                81: [
                    2,
                    36
                ],
                82: [
                    2,
                    36
                ],
                83: [
                    2,
                    36
                ],
                84: [
                    2,
                    36
                ],
                85: [
                    2,
                    36
                ]
            },
            {
                23: [
                    2,
                    37
                ],
                33: [
                    2,
                    37
                ],
                54: [
                    2,
                    37
                ],
                65: [
                    2,
                    37
                ],
                68: [
                    2,
                    37
                ],
                72: [
                    2,
                    37
                ],
                75: [
                    2,
                    37
                ],
                80: [
                    2,
                    37
                ],
                81: [
                    2,
                    37
                ],
                82: [
                    2,
                    37
                ],
                83: [
                    2,
                    37
                ],
                84: [
                    2,
                    37
                ],
                85: [
                    2,
                    37
                ]
            },
            {
                23: [
                    2,
                    38
                ],
                33: [
                    2,
                    38
                ],
                54: [
                    2,
                    38
                ],
                65: [
                    2,
                    38
                ],
                68: [
                    2,
                    38
                ],
                72: [
                    2,
                    38
                ],
                75: [
                    2,
                    38
                ],
                80: [
                    2,
                    38
                ],
                81: [
                    2,
                    38
                ],
                82: [
                    2,
                    38
                ],
                83: [
                    2,
                    38
                ],
                84: [
                    2,
                    38
                ],
                85: [
                    2,
                    38
                ]
            },
            {
                23: [
                    2,
                    39
                ],
                33: [
                    2,
                    39
                ],
                54: [
                    2,
                    39
                ],
                65: [
                    2,
                    39
                ],
                68: [
                    2,
                    39
                ],
                72: [
                    2,
                    39
                ],
                75: [
                    2,
                    39
                ],
                80: [
                    2,
                    39
                ],
                81: [
                    2,
                    39
                ],
                82: [
                    2,
                    39
                ],
                83: [
                    2,
                    39
                ],
                84: [
                    2,
                    39
                ],
                85: [
                    2,
                    39
                ]
            },
            {
                23: [
                    2,
                    43
                ],
                33: [
                    2,
                    43
                ],
                54: [
                    2,
                    43
                ],
                65: [
                    2,
                    43
                ],
                68: [
                    2,
                    43
                ],
                72: [
                    2,
                    43
                ],
                75: [
                    2,
                    43
                ],
                80: [
                    2,
                    43
                ],
                81: [
                    2,
                    43
                ],
                82: [
                    2,
                    43
                ],
                83: [
                    2,
                    43
                ],
                84: [
                    2,
                    43
                ],
                85: [
                    2,
                    43
                ],
                87: [
                    1,
                    50
                ]
            },
            {
                72: [
                    1,
                    35
                ],
                86: 51
            },
            {
                23: [
                    2,
                    45
                ],
                33: [
                    2,
                    45
                ],
                54: [
                    2,
                    45
                ],
                65: [
                    2,
                    45
                ],
                68: [
                    2,
                    45
                ],
                72: [
                    2,
                    45
                ],
                75: [
                    2,
                    45
                ],
                80: [
                    2,
                    45
                ],
                81: [
                    2,
                    45
                ],
                82: [
                    2,
                    45
                ],
                83: [
                    2,
                    45
                ],
                84: [
                    2,
                    45
                ],
                85: [
                    2,
                    45
                ],
                87: [
                    2,
                    45
                ]
            },
            {
                52: 52,
                54: [
                    2,
                    82
                ],
                65: [
                    2,
                    82
                ],
                72: [
                    2,
                    82
                ],
                80: [
                    2,
                    82
                ],
                81: [
                    2,
                    82
                ],
                82: [
                    2,
                    82
                ],
                83: [
                    2,
                    82
                ],
                84: [
                    2,
                    82
                ],
                85: [
                    2,
                    82
                ]
            },
            {
                25: 53,
                38: 55,
                39: [
                    1,
                    57
                ],
                43: 56,
                44: [
                    1,
                    58
                ],
                45: 54,
                47: [
                    2,
                    54
                ]
            },
            {
                28: 59,
                43: 60,
                44: [
                    1,
                    58
                ],
                47: [
                    2,
                    56
                ]
            },
            {
                13: 62,
                15: [
                    1,
                    20
                ],
                18: [
                    1,
                    61
                ]
            },
            {
                33: [
                    2,
                    86
                ],
                57: 63,
                65: [
                    2,
                    86
                ],
                72: [
                    2,
                    86
                ],
                80: [
                    2,
                    86
                ],
                81: [
                    2,
                    86
                ],
                82: [
                    2,
                    86
                ],
                83: [
                    2,
                    86
                ],
                84: [
                    2,
                    86
                ],
                85: [
                    2,
                    86
                ]
            },
            {
                33: [
                    2,
                    40
                ],
                65: [
                    2,
                    40
                ],
                72: [
                    2,
                    40
                ],
                80: [
                    2,
                    40
                ],
                81: [
                    2,
                    40
                ],
                82: [
                    2,
                    40
                ],
                83: [
                    2,
                    40
                ],
                84: [
                    2,
                    40
                ],
                85: [
                    2,
                    40
                ]
            },
            {
                33: [
                    2,
                    41
                ],
                65: [
                    2,
                    41
                ],
                72: [
                    2,
                    41
                ],
                80: [
                    2,
                    41
                ],
                81: [
                    2,
                    41
                ],
                82: [
                    2,
                    41
                ],
                83: [
                    2,
                    41
                ],
                84: [
                    2,
                    41
                ],
                85: [
                    2,
                    41
                ]
            },
            {
                20: 64,
                72: [
                    1,
                    35
                ],
                78: 26,
                79: 27,
                80: [
                    1,
                    28
                ],
                81: [
                    1,
                    29
                ],
                82: [
                    1,
                    30
                ],
                83: [
                    1,
                    31
                ],
                84: [
                    1,
                    32
                ],
                85: [
                    1,
                    34
                ],
                86: 33
            },
            {
                26: 65,
                47: [
                    1,
                    66
                ]
            },
            {
                30: 67,
                33: [
                    2,
                    58
                ],
                65: [
                    2,
                    58
                ],
                72: [
                    2,
                    58
                ],
                75: [
                    2,
                    58
                ],
                80: [
                    2,
                    58
                ],
                81: [
                    2,
                    58
                ],
                82: [
                    2,
                    58
                ],
                83: [
                    2,
                    58
                ],
                84: [
                    2,
                    58
                ],
                85: [
                    2,
                    58
                ]
            },
            {
                33: [
                    2,
                    64
                ],
                35: 68,
                65: [
                    2,
                    64
                ],
                72: [
                    2,
                    64
                ],
                75: [
                    2,
                    64
                ],
                80: [
                    2,
                    64
                ],
                81: [
                    2,
                    64
                ],
                82: [
                    2,
                    64
                ],
                83: [
                    2,
                    64
                ],
                84: [
                    2,
                    64
                ],
                85: [
                    2,
                    64
                ]
            },
            {
                21: 69,
                23: [
                    2,
                    50
                ],
                65: [
                    2,
                    50
                ],
                72: [
                    2,
                    50
                ],
                80: [
                    2,
                    50
                ],
                81: [
                    2,
                    50
                ],
                82: [
                    2,
                    50
                ],
                83: [
                    2,
                    50
                ],
                84: [
                    2,
                    50
                ],
                85: [
                    2,
                    50
                ]
            },
            {
                33: [
                    2,
                    90
                ],
                61: 70,
                65: [
                    2,
                    90
                ],
                72: [
                    2,
                    90
                ],
                80: [
                    2,
                    90
                ],
                81: [
                    2,
                    90
                ],
                82: [
                    2,
                    90
                ],
                83: [
                    2,
                    90
                ],
                84: [
                    2,
                    90
                ],
                85: [
                    2,
                    90
                ]
            },
            {
                20: 74,
                33: [
                    2,
                    80
                ],
                50: 71,
                63: 72,
                64: 75,
                65: [
                    1,
                    43
                ],
                69: 73,
                70: 76,
                71: 77,
                72: [
                    1,
                    78
                ],
                78: 26,
                79: 27,
                80: [
                    1,
                    28
                ],
                81: [
                    1,
                    29
                ],
                82: [
                    1,
                    30
                ],
                83: [
                    1,
                    31
                ],
                84: [
                    1,
                    32
                ],
                85: [
                    1,
                    34
                ],
                86: 33
            },
            {
                72: [
                    1,
                    79
                ]
            },
            {
                23: [
                    2,
                    42
                ],
                33: [
                    2,
                    42
                ],
                54: [
                    2,
                    42
                ],
                65: [
                    2,
                    42
                ],
                68: [
                    2,
                    42
                ],
                72: [
                    2,
                    42
                ],
                75: [
                    2,
                    42
                ],
                80: [
                    2,
                    42
                ],
                81: [
                    2,
                    42
                ],
                82: [
                    2,
                    42
                ],
                83: [
                    2,
                    42
                ],
                84: [
                    2,
                    42
                ],
                85: [
                    2,
                    42
                ],
                87: [
                    1,
                    50
                ]
            },
            {
                20: 74,
                53: 80,
                54: [
                    2,
                    84
                ],
                63: 81,
                64: 75,
                65: [
                    1,
                    43
                ],
                69: 82,
                70: 76,
                71: 77,
                72: [
                    1,
                    78
                ],
                78: 26,
                79: 27,
                80: [
                    1,
                    28
                ],
                81: [
                    1,
                    29
                ],
                82: [
                    1,
                    30
                ],
                83: [
                    1,
                    31
                ],
                84: [
                    1,
                    32
                ],
                85: [
                    1,
                    34
                ],
                86: 33
            },
            {
                26: 83,
                47: [
                    1,
                    66
                ]
            },
            {
                47: [
                    2,
                    55
                ]
            },
            {
                4: 84,
                6: 3,
                14: [
                    2,
                    46
                ],
                15: [
                    2,
                    46
                ],
                19: [
                    2,
                    46
                ],
                29: [
                    2,
                    46
                ],
                34: [
                    2,
                    46
                ],
                39: [
                    2,
                    46
                ],
                44: [
                    2,
                    46
                ],
                47: [
                    2,
                    46
                ],
                48: [
                    2,
                    46
                ],
                51: [
                    2,
                    46
                ],
                55: [
                    2,
                    46
                ],
                60: [
                    2,
                    46
                ]
            },
            {
                47: [
                    2,
                    20
                ]
            },
            {
                20: 85,
                72: [
                    1,
                    35
                ],
                78: 26,
                79: 27,
                80: [
                    1,
                    28
                ],
                81: [
                    1,
                    29
                ],
                82: [
                    1,
                    30
                ],
                83: [
                    1,
                    31
                ],
                84: [
                    1,
                    32
                ],
                85: [
                    1,
                    34
                ],
                86: 33
            },
            {
                4: 86,
                6: 3,
                14: [
                    2,
                    46
                ],
                15: [
                    2,
                    46
                ],
                19: [
                    2,
                    46
                ],
                29: [
                    2,
                    46
                ],
                34: [
                    2,
                    46
                ],
                47: [
                    2,
                    46
                ],
                48: [
                    2,
                    46
                ],
                51: [
                    2,
                    46
                ],
                55: [
                    2,
                    46
                ],
                60: [
                    2,
                    46
                ]
            },
            {
                26: 87,
                47: [
                    1,
                    66
                ]
            },
            {
                47: [
                    2,
                    57
                ]
            },
            {
                5: [
                    2,
                    11
                ],
                14: [
                    2,
                    11
                ],
                15: [
                    2,
                    11
                ],
                19: [
                    2,
                    11
                ],
                29: [
                    2,
                    11
                ],
                34: [
                    2,
                    11
                ],
                39: [
                    2,
                    11
                ],
                44: [
                    2,
                    11
                ],
                47: [
                    2,
                    11
                ],
                48: [
                    2,
                    11
                ],
                51: [
                    2,
                    11
                ],
                55: [
                    2,
                    11
                ],
                60: [
                    2,
                    11
                ]
            },
            {
                15: [
                    2,
                    49
                ],
                18: [
                    2,
                    49
                ]
            },
            {
                20: 74,
                33: [
                    2,
                    88
                ],
                58: 88,
                63: 89,
                64: 75,
                65: [
                    1,
                    43
                ],
                69: 90,
                70: 76,
                71: 77,
                72: [
                    1,
                    78
                ],
                78: 26,
                79: 27,
                80: [
                    1,
                    28
                ],
                81: [
                    1,
                    29
                ],
                82: [
                    1,
                    30
                ],
                83: [
                    1,
                    31
                ],
                84: [
                    1,
                    32
                ],
                85: [
                    1,
                    34
                ],
                86: 33
            },
            {
                65: [
                    2,
                    94
                ],
                66: 91,
                68: [
                    2,
                    94
                ],
                72: [
                    2,
                    94
                ],
                80: [
                    2,
                    94
                ],
                81: [
                    2,
                    94
                ],
                82: [
                    2,
                    94
                ],
                83: [
                    2,
                    94
                ],
                84: [
                    2,
                    94
                ],
                85: [
                    2,
                    94
                ]
            },
            {
                5: [
                    2,
                    25
                ],
                14: [
                    2,
                    25
                ],
                15: [
                    2,
                    25
                ],
                19: [
                    2,
                    25
                ],
                29: [
                    2,
                    25
                ],
                34: [
                    2,
                    25
                ],
                39: [
                    2,
                    25
                ],
                44: [
                    2,
                    25
                ],
                47: [
                    2,
                    25
                ],
                48: [
                    2,
                    25
                ],
                51: [
                    2,
                    25
                ],
                55: [
                    2,
                    25
                ],
                60: [
                    2,
                    25
                ]
            },
            {
                20: 92,
                72: [
                    1,
                    35
                ],
                78: 26,
                79: 27,
                80: [
                    1,
                    28
                ],
                81: [
                    1,
                    29
                ],
                82: [
                    1,
                    30
                ],
                83: [
                    1,
                    31
                ],
                84: [
                    1,
                    32
                ],
                85: [
                    1,
                    34
                ],
                86: 33
            },
            {
                20: 74,
                31: 93,
                33: [
                    2,
                    60
                ],
                63: 94,
                64: 75,
                65: [
                    1,
                    43
                ],
                69: 95,
                70: 76,
                71: 77,
                72: [
                    1,
                    78
                ],
                75: [
                    2,
                    60
                ],
                78: 26,
                79: 27,
                80: [
                    1,
                    28
                ],
                81: [
                    1,
                    29
                ],
                82: [
                    1,
                    30
                ],
                83: [
                    1,
                    31
                ],
                84: [
                    1,
                    32
                ],
                85: [
                    1,
                    34
                ],
                86: 33
            },
            {
                20: 74,
                33: [
                    2,
                    66
                ],
                36: 96,
                63: 97,
                64: 75,
                65: [
                    1,
                    43
                ],
                69: 98,
                70: 76,
                71: 77,
                72: [
                    1,
                    78
                ],
                75: [
                    2,
                    66
                ],
                78: 26,
                79: 27,
                80: [
                    1,
                    28
                ],
                81: [
                    1,
                    29
                ],
                82: [
                    1,
                    30
                ],
                83: [
                    1,
                    31
                ],
                84: [
                    1,
                    32
                ],
                85: [
                    1,
                    34
                ],
                86: 33
            },
            {
                20: 74,
                22: 99,
                23: [
                    2,
                    52
                ],
                63: 100,
                64: 75,
                65: [
                    1,
                    43
                ],
                69: 101,
                70: 76,
                71: 77,
                72: [
                    1,
                    78
                ],
                78: 26,
                79: 27,
                80: [
                    1,
                    28
                ],
                81: [
                    1,
                    29
                ],
                82: [
                    1,
                    30
                ],
                83: [
                    1,
                    31
                ],
                84: [
                    1,
                    32
                ],
                85: [
                    1,
                    34
                ],
                86: 33
            },
            {
                20: 74,
                33: [
                    2,
                    92
                ],
                62: 102,
                63: 103,
                64: 75,
                65: [
                    1,
                    43
                ],
                69: 104,
                70: 76,
                71: 77,
                72: [
                    1,
                    78
                ],
                78: 26,
                79: 27,
                80: [
                    1,
                    28
                ],
                81: [
                    1,
                    29
                ],
                82: [
                    1,
                    30
                ],
                83: [
                    1,
                    31
                ],
                84: [
                    1,
                    32
                ],
                85: [
                    1,
                    34
                ],
                86: 33
            },
            {
                33: [
                    1,
                    105
                ]
            },
            {
                33: [
                    2,
                    79
                ],
                65: [
                    2,
                    79
                ],
                72: [
                    2,
                    79
                ],
                80: [
                    2,
                    79
                ],
                81: [
                    2,
                    79
                ],
                82: [
                    2,
                    79
                ],
                83: [
                    2,
                    79
                ],
                84: [
                    2,
                    79
                ],
                85: [
                    2,
                    79
                ]
            },
            {
                33: [
                    2,
                    81
                ]
            },
            {
                23: [
                    2,
                    27
                ],
                33: [
                    2,
                    27
                ],
                54: [
                    2,
                    27
                ],
                65: [
                    2,
                    27
                ],
                68: [
                    2,
                    27
                ],
                72: [
                    2,
                    27
                ],
                75: [
                    2,
                    27
                ],
                80: [
                    2,
                    27
                ],
                81: [
                    2,
                    27
                ],
                82: [
                    2,
                    27
                ],
                83: [
                    2,
                    27
                ],
                84: [
                    2,
                    27
                ],
                85: [
                    2,
                    27
                ]
            },
            {
                23: [
                    2,
                    28
                ],
                33: [
                    2,
                    28
                ],
                54: [
                    2,
                    28
                ],
                65: [
                    2,
                    28
                ],
                68: [
                    2,
                    28
                ],
                72: [
                    2,
                    28
                ],
                75: [
                    2,
                    28
                ],
                80: [
                    2,
                    28
                ],
                81: [
                    2,
                    28
                ],
                82: [
                    2,
                    28
                ],
                83: [
                    2,
                    28
                ],
                84: [
                    2,
                    28
                ],
                85: [
                    2,
                    28
                ]
            },
            {
                23: [
                    2,
                    30
                ],
                33: [
                    2,
                    30
                ],
                54: [
                    2,
                    30
                ],
                68: [
                    2,
                    30
                ],
                71: 106,
                72: [
                    1,
                    107
                ],
                75: [
                    2,
                    30
                ]
            },
            {
                23: [
                    2,
                    98
                ],
                33: [
                    2,
                    98
                ],
                54: [
                    2,
                    98
                ],
                68: [
                    2,
                    98
                ],
                72: [
                    2,
                    98
                ],
                75: [
                    2,
                    98
                ]
            },
            {
                23: [
                    2,
                    45
                ],
                33: [
                    2,
                    45
                ],
                54: [
                    2,
                    45
                ],
                65: [
                    2,
                    45
                ],
                68: [
                    2,
                    45
                ],
                72: [
                    2,
                    45
                ],
                73: [
                    1,
                    108
                ],
                75: [
                    2,
                    45
                ],
                80: [
                    2,
                    45
                ],
                81: [
                    2,
                    45
                ],
                82: [
                    2,
                    45
                ],
                83: [
                    2,
                    45
                ],
                84: [
                    2,
                    45
                ],
                85: [
                    2,
                    45
                ],
                87: [
                    2,
                    45
                ]
            },
            {
                23: [
                    2,
                    44
                ],
                33: [
                    2,
                    44
                ],
                54: [
                    2,
                    44
                ],
                65: [
                    2,
                    44
                ],
                68: [
                    2,
                    44
                ],
                72: [
                    2,
                    44
                ],
                75: [
                    2,
                    44
                ],
                80: [
                    2,
                    44
                ],
                81: [
                    2,
                    44
                ],
                82: [
                    2,
                    44
                ],
                83: [
                    2,
                    44
                ],
                84: [
                    2,
                    44
                ],
                85: [
                    2,
                    44
                ],
                87: [
                    2,
                    44
                ]
            },
            {
                54: [
                    1,
                    109
                ]
            },
            {
                54: [
                    2,
                    83
                ],
                65: [
                    2,
                    83
                ],
                72: [
                    2,
                    83
                ],
                80: [
                    2,
                    83
                ],
                81: [
                    2,
                    83
                ],
                82: [
                    2,
                    83
                ],
                83: [
                    2,
                    83
                ],
                84: [
                    2,
                    83
                ],
                85: [
                    2,
                    83
                ]
            },
            {
                54: [
                    2,
                    85
                ]
            },
            {
                5: [
                    2,
                    13
                ],
                14: [
                    2,
                    13
                ],
                15: [
                    2,
                    13
                ],
                19: [
                    2,
                    13
                ],
                29: [
                    2,
                    13
                ],
                34: [
                    2,
                    13
                ],
                39: [
                    2,
                    13
                ],
                44: [
                    2,
                    13
                ],
                47: [
                    2,
                    13
                ],
                48: [
                    2,
                    13
                ],
                51: [
                    2,
                    13
                ],
                55: [
                    2,
                    13
                ],
                60: [
                    2,
                    13
                ]
            },
            {
                38: 55,
                39: [
                    1,
                    57
                ],
                43: 56,
                44: [
                    1,
                    58
                ],
                45: 111,
                46: 110,
                47: [
                    2,
                    76
                ]
            },
            {
                33: [
                    2,
                    70
                ],
                40: 112,
                65: [
                    2,
                    70
                ],
                72: [
                    2,
                    70
                ],
                75: [
                    2,
                    70
                ],
                80: [
                    2,
                    70
                ],
                81: [
                    2,
                    70
                ],
                82: [
                    2,
                    70
                ],
                83: [
                    2,
                    70
                ],
                84: [
                    2,
                    70
                ],
                85: [
                    2,
                    70
                ]
            },
            {
                47: [
                    2,
                    18
                ]
            },
            {
                5: [
                    2,
                    14
                ],
                14: [
                    2,
                    14
                ],
                15: [
                    2,
                    14
                ],
                19: [
                    2,
                    14
                ],
                29: [
                    2,
                    14
                ],
                34: [
                    2,
                    14
                ],
                39: [
                    2,
                    14
                ],
                44: [
                    2,
                    14
                ],
                47: [
                    2,
                    14
                ],
                48: [
                    2,
                    14
                ],
                51: [
                    2,
                    14
                ],
                55: [
                    2,
                    14
                ],
                60: [
                    2,
                    14
                ]
            },
            {
                33: [
                    1,
                    113
                ]
            },
            {
                33: [
                    2,
                    87
                ],
                65: [
                    2,
                    87
                ],
                72: [
                    2,
                    87
                ],
                80: [
                    2,
                    87
                ],
                81: [
                    2,
                    87
                ],
                82: [
                    2,
                    87
                ],
                83: [
                    2,
                    87
                ],
                84: [
                    2,
                    87
                ],
                85: [
                    2,
                    87
                ]
            },
            {
                33: [
                    2,
                    89
                ]
            },
            {
                20: 74,
                63: 115,
                64: 75,
                65: [
                    1,
                    43
                ],
                67: 114,
                68: [
                    2,
                    96
                ],
                69: 116,
                70: 76,
                71: 77,
                72: [
                    1,
                    78
                ],
                78: 26,
                79: 27,
                80: [
                    1,
                    28
                ],
                81: [
                    1,
                    29
                ],
                82: [
                    1,
                    30
                ],
                83: [
                    1,
                    31
                ],
                84: [
                    1,
                    32
                ],
                85: [
                    1,
                    34
                ],
                86: 33
            },
            {
                33: [
                    1,
                    117
                ]
            },
            {
                32: 118,
                33: [
                    2,
                    62
                ],
                74: 119,
                75: [
                    1,
                    120
                ]
            },
            {
                33: [
                    2,
                    59
                ],
                65: [
                    2,
                    59
                ],
                72: [
                    2,
                    59
                ],
                75: [
                    2,
                    59
                ],
                80: [
                    2,
                    59
                ],
                81: [
                    2,
                    59
                ],
                82: [
                    2,
                    59
                ],
                83: [
                    2,
                    59
                ],
                84: [
                    2,
                    59
                ],
                85: [
                    2,
                    59
                ]
            },
            {
                33: [
                    2,
                    61
                ],
                75: [
                    2,
                    61
                ]
            },
            {
                33: [
                    2,
                    68
                ],
                37: 121,
                74: 122,
                75: [
                    1,
                    120
                ]
            },
            {
                33: [
                    2,
                    65
                ],
                65: [
                    2,
                    65
                ],
                72: [
                    2,
                    65
                ],
                75: [
                    2,
                    65
                ],
                80: [
                    2,
                    65
                ],
                81: [
                    2,
                    65
                ],
                82: [
                    2,
                    65
                ],
                83: [
                    2,
                    65
                ],
                84: [
                    2,
                    65
                ],
                85: [
                    2,
                    65
                ]
            },
            {
                33: [
                    2,
                    67
                ],
                75: [
                    2,
                    67
                ]
            },
            {
                23: [
                    1,
                    123
                ]
            },
            {
                23: [
                    2,
                    51
                ],
                65: [
                    2,
                    51
                ],
                72: [
                    2,
                    51
                ],
                80: [
                    2,
                    51
                ],
                81: [
                    2,
                    51
                ],
                82: [
                    2,
                    51
                ],
                83: [
                    2,
                    51
                ],
                84: [
                    2,
                    51
                ],
                85: [
                    2,
                    51
                ]
            },
            {
                23: [
                    2,
                    53
                ]
            },
            {
                33: [
                    1,
                    124
                ]
            },
            {
                33: [
                    2,
                    91
                ],
                65: [
                    2,
                    91
                ],
                72: [
                    2,
                    91
                ],
                80: [
                    2,
                    91
                ],
                81: [
                    2,
                    91
                ],
                82: [
                    2,
                    91
                ],
                83: [
                    2,
                    91
                ],
                84: [
                    2,
                    91
                ],
                85: [
                    2,
                    91
                ]
            },
            {
                33: [
                    2,
                    93
                ]
            },
            {
                5: [
                    2,
                    22
                ],
                14: [
                    2,
                    22
                ],
                15: [
                    2,
                    22
                ],
                19: [
                    2,
                    22
                ],
                29: [
                    2,
                    22
                ],
                34: [
                    2,
                    22
                ],
                39: [
                    2,
                    22
                ],
                44: [
                    2,
                    22
                ],
                47: [
                    2,
                    22
                ],
                48: [
                    2,
                    22
                ],
                51: [
                    2,
                    22
                ],
                55: [
                    2,
                    22
                ],
                60: [
                    2,
                    22
                ]
            },
            {
                23: [
                    2,
                    99
                ],
                33: [
                    2,
                    99
                ],
                54: [
                    2,
                    99
                ],
                68: [
                    2,
                    99
                ],
                72: [
                    2,
                    99
                ],
                75: [
                    2,
                    99
                ]
            },
            {
                73: [
                    1,
                    108
                ]
            },
            {
                20: 74,
                63: 125,
                64: 75,
                65: [
                    1,
                    43
                ],
                72: [
                    1,
                    35
                ],
                78: 26,
                79: 27,
                80: [
                    1,
                    28
                ],
                81: [
                    1,
                    29
                ],
                82: [
                    1,
                    30
                ],
                83: [
                    1,
                    31
                ],
                84: [
                    1,
                    32
                ],
                85: [
                    1,
                    34
                ],
                86: 33
            },
            {
                5: [
                    2,
                    23
                ],
                14: [
                    2,
                    23
                ],
                15: [
                    2,
                    23
                ],
                19: [
                    2,
                    23
                ],
                29: [
                    2,
                    23
                ],
                34: [
                    2,
                    23
                ],
                39: [
                    2,
                    23
                ],
                44: [
                    2,
                    23
                ],
                47: [
                    2,
                    23
                ],
                48: [
                    2,
                    23
                ],
                51: [
                    2,
                    23
                ],
                55: [
                    2,
                    23
                ],
                60: [
                    2,
                    23
                ]
            },
            {
                47: [
                    2,
                    19
                ]
            },
            {
                47: [
                    2,
                    77
                ]
            },
            {
                20: 74,
                33: [
                    2,
                    72
                ],
                41: 126,
                63: 127,
                64: 75,
                65: [
                    1,
                    43
                ],
                69: 128,
                70: 76,
                71: 77,
                72: [
                    1,
                    78
                ],
                75: [
                    2,
                    72
                ],
                78: 26,
                79: 27,
                80: [
                    1,
                    28
                ],
                81: [
                    1,
                    29
                ],
                82: [
                    1,
                    30
                ],
                83: [
                    1,
                    31
                ],
                84: [
                    1,
                    32
                ],
                85: [
                    1,
                    34
                ],
                86: 33
            },
            {
                5: [
                    2,
                    24
                ],
                14: [
                    2,
                    24
                ],
                15: [
                    2,
                    24
                ],
                19: [
                    2,
                    24
                ],
                29: [
                    2,
                    24
                ],
                34: [
                    2,
                    24
                ],
                39: [
                    2,
                    24
                ],
                44: [
                    2,
                    24
                ],
                47: [
                    2,
                    24
                ],
                48: [
                    2,
                    24
                ],
                51: [
                    2,
                    24
                ],
                55: [
                    2,
                    24
                ],
                60: [
                    2,
                    24
                ]
            },
            {
                68: [
                    1,
                    129
                ]
            },
            {
                65: [
                    2,
                    95
                ],
                68: [
                    2,
                    95
                ],
                72: [
                    2,
                    95
                ],
                80: [
                    2,
                    95
                ],
                81: [
                    2,
                    95
                ],
                82: [
                    2,
                    95
                ],
                83: [
                    2,
                    95
                ],
                84: [
                    2,
                    95
                ],
                85: [
                    2,
                    95
                ]
            },
            {
                68: [
                    2,
                    97
                ]
            },
            {
                5: [
                    2,
                    21
                ],
                14: [
                    2,
                    21
                ],
                15: [
                    2,
                    21
                ],
                19: [
                    2,
                    21
                ],
                29: [
                    2,
                    21
                ],
                34: [
                    2,
                    21
                ],
                39: [
                    2,
                    21
                ],
                44: [
                    2,
                    21
                ],
                47: [
                    2,
                    21
                ],
                48: [
                    2,
                    21
                ],
                51: [
                    2,
                    21
                ],
                55: [
                    2,
                    21
                ],
                60: [
                    2,
                    21
                ]
            },
            {
                33: [
                    1,
                    130
                ]
            },
            {
                33: [
                    2,
                    63
                ]
            },
            {
                72: [
                    1,
                    132
                ],
                76: 131
            },
            {
                33: [
                    1,
                    133
                ]
            },
            {
                33: [
                    2,
                    69
                ]
            },
            {
                15: [
                    2,
                    12
                ],
                18: [
                    2,
                    12
                ]
            },
            {
                14: [
                    2,
                    26
                ],
                15: [
                    2,
                    26
                ],
                19: [
                    2,
                    26
                ],
                29: [
                    2,
                    26
                ],
                34: [
                    2,
                    26
                ],
                47: [
                    2,
                    26
                ],
                48: [
                    2,
                    26
                ],
                51: [
                    2,
                    26
                ],
                55: [
                    2,
                    26
                ],
                60: [
                    2,
                    26
                ]
            },
            {
                23: [
                    2,
                    31
                ],
                33: [
                    2,
                    31
                ],
                54: [
                    2,
                    31
                ],
                68: [
                    2,
                    31
                ],
                72: [
                    2,
                    31
                ],
                75: [
                    2,
                    31
                ]
            },
            {
                33: [
                    2,
                    74
                ],
                42: 134,
                74: 135,
                75: [
                    1,
                    120
                ]
            },
            {
                33: [
                    2,
                    71
                ],
                65: [
                    2,
                    71
                ],
                72: [
                    2,
                    71
                ],
                75: [
                    2,
                    71
                ],
                80: [
                    2,
                    71
                ],
                81: [
                    2,
                    71
                ],
                82: [
                    2,
                    71
                ],
                83: [
                    2,
                    71
                ],
                84: [
                    2,
                    71
                ],
                85: [
                    2,
                    71
                ]
            },
            {
                33: [
                    2,
                    73
                ],
                75: [
                    2,
                    73
                ]
            },
            {
                23: [
                    2,
                    29
                ],
                33: [
                    2,
                    29
                ],
                54: [
                    2,
                    29
                ],
                65: [
                    2,
                    29
                ],
                68: [
                    2,
                    29
                ],
                72: [
                    2,
                    29
                ],
                75: [
                    2,
                    29
                ],
                80: [
                    2,
                    29
                ],
                81: [
                    2,
                    29
                ],
                82: [
                    2,
                    29
                ],
                83: [
                    2,
                    29
                ],
                84: [
                    2,
                    29
                ],
                85: [
                    2,
                    29
                ]
            },
            {
                14: [
                    2,
                    15
                ],
                15: [
                    2,
                    15
                ],
                19: [
                    2,
                    15
                ],
                29: [
                    2,
                    15
                ],
                34: [
                    2,
                    15
                ],
                39: [
                    2,
                    15
                ],
                44: [
                    2,
                    15
                ],
                47: [
                    2,
                    15
                ],
                48: [
                    2,
                    15
                ],
                51: [
                    2,
                    15
                ],
                55: [
                    2,
                    15
                ],
                60: [
                    2,
                    15
                ]
            },
            {
                72: [
                    1,
                    137
                ],
                77: [
                    1,
                    136
                ]
            },
            {
                72: [
                    2,
                    100
                ],
                77: [
                    2,
                    100
                ]
            },
            {
                14: [
                    2,
                    16
                ],
                15: [
                    2,
                    16
                ],
                19: [
                    2,
                    16
                ],
                29: [
                    2,
                    16
                ],
                34: [
                    2,
                    16
                ],
                44: [
                    2,
                    16
                ],
                47: [
                    2,
                    16
                ],
                48: [
                    2,
                    16
                ],
                51: [
                    2,
                    16
                ],
                55: [
                    2,
                    16
                ],
                60: [
                    2,
                    16
                ]
            },
            {
                33: [
                    1,
                    138
                ]
            },
            {
                33: [
                    2,
                    75
                ]
            },
            {
                33: [
                    2,
                    32
                ]
            },
            {
                72: [
                    2,
                    101
                ],
                77: [
                    2,
                    101
                ]
            },
            {
                14: [
                    2,
                    17
                ],
                15: [
                    2,
                    17
                ],
                19: [
                    2,
                    17
                ],
                29: [
                    2,
                    17
                ],
                34: [
                    2,
                    17
                ],
                39: [
                    2,
                    17
                ],
                44: [
                    2,
                    17
                ],
                47: [
                    2,
                    17
                ],
                48: [
                    2,
                    17
                ],
                51: [
                    2,
                    17
                ],
                55: [
                    2,
                    17
                ],
                60: [
                    2,
                    17
                ]
            }
        ],
        defaultActions: {
            4: [
                2,
                1
            ],
            54: [
                2,
                55
            ],
            56: [
                2,
                20
            ],
            60: [
                2,
                57
            ],
            73: [
                2,
                81
            ],
            82: [
                2,
                85
            ],
            86: [
                2,
                18
            ],
            90: [
                2,
                89
            ],
            101: [
                2,
                53
            ],
            104: [
                2,
                93
            ],
            110: [
                2,
                19
            ],
            111: [
                2,
                77
            ],
            116: [
                2,
                97
            ],
            119: [
                2,
                63
            ],
            122: [
                2,
                69
            ],
            135: [
                2,
                75
            ],
            136: [
                2,
                32
            ]
        },
        parseError: function parseError(str, hash) {
            throw new Error(str);
        },
        parse: function parse(input) {
            var self = this, stack = [
                0
            ], vstack = [
                null
            ], lstack = [], table = this.table, yytext = "", yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
            this.lexer.setInput(input);
            this.lexer.yy = this.yy;
            this.yy.lexer = this.lexer;
            this.yy.parser = this;
            if (typeof this.lexer.yylloc == "undefined") this.lexer.yylloc = {};
            var yyloc = this.lexer.yylloc;
            lstack.push(yyloc);
            var ranges = this.lexer.options && this.lexer.options.ranges;
            if (typeof this.yy.parseError === "function") this.parseError = this.yy.parseError;
            function popStack(n) {
                stack.length = stack.length - 2 * n;
                vstack.length = vstack.length - n;
                lstack.length = lstack.length - n;
            }
            function lex() {
                var token;
                token = self.lexer.lex() || 1;
                if (typeof token !== "number") token = self.symbols_[token] || token;
                return token;
            }
            var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
            while(true){
                state = stack[stack.length - 1];
                if (this.defaultActions[state]) action = this.defaultActions[state];
                else {
                    if (symbol === null || typeof symbol == "undefined") symbol = lex();
                    action = table[state] && table[state][symbol];
                }
                if (typeof action === "undefined" || !action.length || !action[0]) {
                    var errStr = "";
                    if (!recovering) {
                        expected = [];
                        for(p in table[state])if (this.terminals_[p] && p > 2) expected.push("'" + this.terminals_[p] + "'");
                        if (this.lexer.showPosition) errStr = "Parse error on line " + (yylineno + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + expected.join(", ") + ", got '" + (this.terminals_[symbol] || symbol) + "'";
                        else errStr = "Parse error on line " + (yylineno + 1) + ": Unexpected " + (symbol == 1 ? "end of input" : "'" + (this.terminals_[symbol] || symbol) + "'");
                        this.parseError(errStr, {
                            text: this.lexer.match,
                            token: this.terminals_[symbol] || symbol,
                            line: this.lexer.yylineno,
                            loc: yyloc,
                            expected: expected
                        });
                    }
                }
                if (action[0] instanceof Array && action.length > 1) throw new Error("Parse Error: multiple actions possible at state: " + state + ", token: " + symbol);
                switch(action[0]){
                    case 1:
                        stack.push(symbol);
                        vstack.push(this.lexer.yytext);
                        lstack.push(this.lexer.yylloc);
                        stack.push(action[1]);
                        symbol = null;
                        if (!preErrorSymbol) {
                            yyleng = this.lexer.yyleng;
                            yytext = this.lexer.yytext;
                            yylineno = this.lexer.yylineno;
                            yyloc = this.lexer.yylloc;
                            if (recovering > 0) recovering--;
                        } else {
                            symbol = preErrorSymbol;
                            preErrorSymbol = null;
                        }
                        break;
                    case 2:
                        len = this.productions_[action[1]][1];
                        yyval.$ = vstack[vstack.length - len];
                        yyval._$ = {
                            first_line: lstack[lstack.length - (len || 1)].first_line,
                            last_line: lstack[lstack.length - 1].last_line,
                            first_column: lstack[lstack.length - (len || 1)].first_column,
                            last_column: lstack[lstack.length - 1].last_column
                        };
                        if (ranges) yyval._$.range = [
                            lstack[lstack.length - (len || 1)].range[0],
                            lstack[lstack.length - 1].range[1]
                        ];
                        r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);
                        if (typeof r !== "undefined") return r;
                        if (len) {
                            stack = stack.slice(0, -1 * len * 2);
                            vstack = vstack.slice(0, -1 * len);
                            lstack = lstack.slice(0, -1 * len);
                        }
                        stack.push(this.productions_[action[1]][0]);
                        vstack.push(yyval.$);
                        lstack.push(yyval._$);
                        newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
                        stack.push(newState);
                        break;
                    case 3:
                        return true;
                }
            }
            return true;
        }
    };
    /* Jison generated lexer */ var lexer1 = function() {
        var lexer = {
            EOF: 1,
            parseError: function parseError(str, hash) {
                if (this.yy.parser) this.yy.parser.parseError(str, hash);
                else throw new Error(str);
            },
            setInput: function setInput(input) {
                this._input = input;
                this._more = this._less = this.done = false;
                this.yylineno = this.yyleng = 0;
                this.yytext = this.matched = this.match = "";
                this.conditionStack = [
                    "INITIAL"
                ];
                this.yylloc = {
                    first_line: 1,
                    first_column: 0,
                    last_line: 1,
                    last_column: 0
                };
                if (this.options.ranges) this.yylloc.range = [
                    0,
                    0
                ];
                this.offset = 0;
                return this;
            },
            input: function input() {
                var ch = this._input[0];
                this.yytext += ch;
                this.yyleng++;
                this.offset++;
                this.match += ch;
                this.matched += ch;
                var lines = ch.match(/(?:\r\n?|\n).*/g);
                if (lines) {
                    this.yylineno++;
                    this.yylloc.last_line++;
                } else this.yylloc.last_column++;
                if (this.options.ranges) this.yylloc.range[1]++;
                this._input = this._input.slice(1);
                return ch;
            },
            unput: function unput(ch) {
                var len = ch.length;
                var lines = ch.split(/(?:\r\n?|\n)/g);
                this._input = ch + this._input;
                this.yytext = this.yytext.substr(0, this.yytext.length - len - 1);
                //this.yyleng -= len;
                this.offset -= len;
                var oldLines = this.match.split(/(?:\r\n?|\n)/g);
                this.match = this.match.substr(0, this.match.length - 1);
                this.matched = this.matched.substr(0, this.matched.length - 1);
                if (lines.length - 1) this.yylineno -= lines.length - 1;
                var r = this.yylloc.range;
                this.yylloc = {
                    first_line: this.yylloc.first_line,
                    last_line: this.yylineno + 1,
                    first_column: this.yylloc.first_column,
                    last_column: lines ? (lines.length === oldLines.length ? this.yylloc.first_column : 0) + oldLines[oldLines.length - lines.length].length - lines[0].length : this.yylloc.first_column - len
                };
                if (this.options.ranges) this.yylloc.range = [
                    r[0],
                    r[0] + this.yyleng - len
                ];
                return this;
            },
            more: function more() {
                this._more = true;
                return this;
            },
            less: function less(n) {
                this.unput(this.match.slice(n));
            },
            pastInput: function pastInput() {
                var past = this.matched.substr(0, this.matched.length - this.match.length);
                return (past.length > 20 ? "..." : "") + past.substr(-20).replace(/\n/g, "");
            },
            upcomingInput: function upcomingInput() {
                var next = this.match;
                if (next.length < 20) next += this._input.substr(0, 20 - next.length);
                return (next.substr(0, 20) + (next.length > 20 ? "..." : "")).replace(/\n/g, "");
            },
            showPosition: function showPosition() {
                var pre = this.pastInput();
                var c = new Array(pre.length + 1).join("-");
                return pre + this.upcomingInput() + "\n" + c + "^";
            },
            next: function next() {
                if (this.done) return this.EOF;
                if (!this._input) this.done = true;
                var token, match, tempMatch, index, col, lines;
                if (!this._more) {
                    this.yytext = "";
                    this.match = "";
                }
                var rules = this._currentRules();
                for(var i = 0; i < rules.length; i++){
                    tempMatch = this._input.match(this.rules[rules[i]]);
                    if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                        match = tempMatch;
                        index = i;
                        if (!this.options.flex) break;
                    }
                }
                if (match) {
                    lines = match[0].match(/(?:\r\n?|\n).*/g);
                    if (lines) this.yylineno += lines.length;
                    this.yylloc = {
                        first_line: this.yylloc.last_line,
                        last_line: this.yylineno + 1,
                        first_column: this.yylloc.last_column,
                        last_column: lines ? lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + match[0].length
                    };
                    this.yytext += match[0];
                    this.match += match[0];
                    this.matches = match;
                    this.yyleng = this.yytext.length;
                    if (this.options.ranges) this.yylloc.range = [
                        this.offset,
                        this.offset += this.yyleng
                    ];
                    this._more = false;
                    this._input = this._input.slice(match[0].length);
                    this.matched += match[0];
                    token = this.performAction.call(this, this.yy, this, rules[index], this.conditionStack[this.conditionStack.length - 1]);
                    if (this.done && this._input) this.done = false;
                    if (token) return token;
                    else return;
                }
                if (this._input === "") return this.EOF;
                else return this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {
                    text: "",
                    token: null,
                    line: this.yylineno
                });
            },
            lex: function lex() {
                var r = this.next();
                if (typeof r !== "undefined") return r;
                else return this.lex();
            },
            begin: function begin(condition) {
                this.conditionStack.push(condition);
            },
            popState: function popState() {
                return this.conditionStack.pop();
            },
            _currentRules: function _currentRules() {
                return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
            },
            topState: function topState() {
                return this.conditionStack[this.conditionStack.length - 2];
            },
            pushState: function begin(condition) {
                this.begin(condition);
            }
        };
        lexer.options = {};
        lexer.performAction = function anonymous(yy, yy_, $avoiding_name_collisions, YY_START) {
            function strip(start, end) {
                return yy_.yytext = yy_.yytext.substring(start, yy_.yyleng - end + start);
            }
            var YYSTATE = YY_START;
            switch($avoiding_name_collisions){
                case 0:
                    if (yy_.yytext.slice(-2) === "\\\\") {
                        strip(0, 1);
                        this.begin("mu");
                    } else if (yy_.yytext.slice(-1) === "\\") {
                        strip(0, 1);
                        this.begin("emu");
                    } else this.begin("mu");
                    if (yy_.yytext) return 15;
                    break;
                case 1:
                    return 15;
                case 2:
                    this.popState();
                    return 15;
                case 3:
                    this.begin("raw");
                    return 15;
                case 4:
                    this.popState();
                    // Should be using `this.topState()` below, but it currently
                    // returns the second top instead of the first top. Opened an
                    // issue about it at https://github.com/zaach/jison/issues/291
                    if (this.conditionStack[this.conditionStack.length - 1] === "raw") return 15;
                    else {
                        strip(5, 9);
                        return "END_RAW_BLOCK";
                    }
                    break;
                case 5:
                    return 15;
                case 6:
                    this.popState();
                    return 14;
                case 7:
                    return 65;
                case 8:
                    return 68;
                case 9:
                    return 19;
                case 10:
                    this.popState();
                    this.begin("raw");
                    return 23;
                case 11:
                    return 55;
                case 12:
                    return 60;
                case 13:
                    return 29;
                case 14:
                    return 47;
                case 15:
                    this.popState();
                    return 44;
                case 16:
                    this.popState();
                    return 44;
                case 17:
                    return 34;
                case 18:
                    return 39;
                case 19:
                    return 51;
                case 20:
                    return 48;
                case 21:
                    this.unput(yy_.yytext);
                    this.popState();
                    this.begin("com");
                    break;
                case 22:
                    this.popState();
                    return 14;
                case 23:
                    return 48;
                case 24:
                    return 73;
                case 25:
                    return 72;
                case 26:
                    return 72;
                case 27:
                    return 87;
                case 28:
                    break;
                case 29:
                    this.popState();
                    return 54;
                case 30:
                    this.popState();
                    return 33;
                case 31:
                    yy_.yytext = strip(1, 2).replace(/\\"/g, '"');
                    return 80;
                case 32:
                    yy_.yytext = strip(1, 2).replace(/\\'/g, "'");
                    return 80;
                case 33:
                    return 85;
                case 34:
                    return 82;
                case 35:
                    return 82;
                case 36:
                    return 83;
                case 37:
                    return 84;
                case 38:
                    return 81;
                case 39:
                    return 75;
                case 40:
                    return 77;
                case 41:
                    return 72;
                case 42:
                    yy_.yytext = yy_.yytext.replace(/\\([\\\]])/g, "$1");
                    return 72;
                case 43:
                    return "INVALID";
                case 44:
                    return 5;
            }
        };
        lexer.rules = [
            /^(?:[^\x00]*?(?=(\{\{)))/,
            /^(?:[^\x00]+)/,
            /^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/,
            /^(?:\{\{\{\{(?=[^\/]))/,
            /^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/,
            /^(?:[^\x00]+?(?=(\{\{\{\{)))/,
            /^(?:[\s\S]*?--(~)?\}\})/,
            /^(?:\()/,
            /^(?:\))/,
            /^(?:\{\{\{\{)/,
            /^(?:\}\}\}\})/,
            /^(?:\{\{(~)?>)/,
            /^(?:\{\{(~)?#>)/,
            /^(?:\{\{(~)?#\*?)/,
            /^(?:\{\{(~)?\/)/,
            /^(?:\{\{(~)?\^\s*(~)?\}\})/,
            /^(?:\{\{(~)?\s*else\s*(~)?\}\})/,
            /^(?:\{\{(~)?\^)/,
            /^(?:\{\{(~)?\s*else\b)/,
            /^(?:\{\{(~)?\{)/,
            /^(?:\{\{(~)?&)/,
            /^(?:\{\{(~)?!--)/,
            /^(?:\{\{(~)?![\s\S]*?\}\})/,
            /^(?:\{\{(~)?\*?)/,
            /^(?:=)/,
            /^(?:\.\.)/,
            /^(?:\.(?=([=~}\s\/.)|])))/,
            /^(?:[\/.])/,
            /^(?:\s+)/,
            /^(?:\}(~)?\}\})/,
            /^(?:(~)?\}\})/,
            /^(?:"(\\["]|[^"])*")/,
            /^(?:'(\\[']|[^'])*')/,
            /^(?:@)/,
            /^(?:true(?=([~}\s)])))/,
            /^(?:false(?=([~}\s)])))/,
            /^(?:undefined(?=([~}\s)])))/,
            /^(?:null(?=([~}\s)])))/,
            /^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/,
            /^(?:as\s+\|)/,
            /^(?:\|)/,
            /^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/,
            /^(?:\[(\\\]|[^\]])*\])/,
            /^(?:.)/,
            /^(?:$)/
        ];
        lexer.conditions = {
            "mu": {
                "rules": [
                    7,
                    8,
                    9,
                    10,
                    11,
                    12,
                    13,
                    14,
                    15,
                    16,
                    17,
                    18,
                    19,
                    20,
                    21,
                    22,
                    23,
                    24,
                    25,
                    26,
                    27,
                    28,
                    29,
                    30,
                    31,
                    32,
                    33,
                    34,
                    35,
                    36,
                    37,
                    38,
                    39,
                    40,
                    41,
                    42,
                    43,
                    44
                ],
                "inclusive": false
            },
            "emu": {
                "rules": [
                    2
                ],
                "inclusive": false
            },
            "com": {
                "rules": [
                    6
                ],
                "inclusive": false
            },
            "raw": {
                "rules": [
                    3,
                    4,
                    5
                ],
                "inclusive": false
            },
            "INITIAL": {
                "rules": [
                    0,
                    1,
                    44
                ],
                "inclusive": true
            }
        };
        return lexer;
    }();
    parser.lexer = lexer1;
    function Parser() {
        this.yy = {};
    }
    Parser.prototype = parser;
    parser.Parser = Parser;
    return new Parser();
}();
exports["default"] = handlebars;
module.exports = exports["default"];

},{}],"7ezbr":[function(require,module,exports) {
"use strict";
exports.__esModule = true;
// istanbul ignore next
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
var _visitor = require("./visitor");
var _visitor2 = _interopRequireDefault(_visitor);
function WhitespaceControl() {
    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
    this.options = options;
}
WhitespaceControl.prototype = new _visitor2["default"]();
WhitespaceControl.prototype.Program = function(program) {
    var doStandalone = !this.options.ignoreStandalone;
    var isRoot = !this.isRootSeen;
    this.isRootSeen = true;
    var body = program.body;
    for(var i = 0, l = body.length; i < l; i++){
        var current = body[i], strip = this.accept(current);
        if (!strip) continue;
        var _isPrevWhitespace = isPrevWhitespace(body, i, isRoot), _isNextWhitespace = isNextWhitespace(body, i, isRoot), openStandalone = strip.openStandalone && _isPrevWhitespace, closeStandalone = strip.closeStandalone && _isNextWhitespace, inlineStandalone = strip.inlineStandalone && _isPrevWhitespace && _isNextWhitespace;
        if (strip.close) omitRight(body, i, true);
        if (strip.open) omitLeft(body, i, true);
        if (doStandalone && inlineStandalone) {
            omitRight(body, i);
            if (omitLeft(body, i)) // If we are on a standalone node, save the indent info for partials
            {
                if (current.type === "PartialStatement") // Pull out the whitespace from the final line
                current.indent = /([ \t]+$)/.exec(body[i - 1].original)[1];
            }
        }
        if (doStandalone && openStandalone) {
            omitRight((current.program || current.inverse).body);
            // Strip out the previous content node if it's whitespace only
            omitLeft(body, i);
        }
        if (doStandalone && closeStandalone) {
            // Always strip the next node
            omitRight(body, i);
            omitLeft((current.inverse || current.program).body);
        }
    }
    return program;
};
WhitespaceControl.prototype.BlockStatement = WhitespaceControl.prototype.DecoratorBlock = WhitespaceControl.prototype.PartialBlockStatement = function(block) {
    this.accept(block.program);
    this.accept(block.inverse);
    // Find the inverse program that is involed with whitespace stripping.
    var program = block.program || block.inverse, inverse = block.program && block.inverse, firstInverse = inverse, lastInverse = inverse;
    if (inverse && inverse.chained) {
        firstInverse = inverse.body[0].program;
        // Walk the inverse chain to find the last inverse that is actually in the chain.
        while(lastInverse.chained)lastInverse = lastInverse.body[lastInverse.body.length - 1].program;
    }
    var strip = {
        open: block.openStrip.open,
        close: block.closeStrip.close,
        // Determine the standalone candiacy. Basically flag our content as being possibly standalone
        // so our parent can determine if we actually are standalone
        openStandalone: isNextWhitespace(program.body),
        closeStandalone: isPrevWhitespace((firstInverse || program).body)
    };
    if (block.openStrip.close) omitRight(program.body, null, true);
    if (inverse) {
        var inverseStrip = block.inverseStrip;
        if (inverseStrip.open) omitLeft(program.body, null, true);
        if (inverseStrip.close) omitRight(firstInverse.body, null, true);
        if (block.closeStrip.open) omitLeft(lastInverse.body, null, true);
        // Find standalone else statments
        if (!this.options.ignoreStandalone && isPrevWhitespace(program.body) && isNextWhitespace(firstInverse.body)) {
            omitLeft(program.body);
            omitRight(firstInverse.body);
        }
    } else if (block.closeStrip.open) omitLeft(program.body, null, true);
    return strip;
};
WhitespaceControl.prototype.Decorator = WhitespaceControl.prototype.MustacheStatement = function(mustache) {
    return mustache.strip;
};
WhitespaceControl.prototype.PartialStatement = WhitespaceControl.prototype.CommentStatement = function(node) {
    /* istanbul ignore next */ var strip = node.strip || {};
    return {
        inlineStandalone: true,
        open: strip.open,
        close: strip.close
    };
};
function isPrevWhitespace(body, i, isRoot) {
    if (i === undefined) i = body.length;
    // Nodes that end with newlines are considered whitespace (but are special
    // cased for strip operations)
    var prev = body[i - 1], sibling = body[i - 2];
    if (!prev) return isRoot;
    if (prev.type === "ContentStatement") return (sibling || !isRoot ? /\r?\n\s*?$/ : /(^|\r?\n)\s*?$/).test(prev.original);
}
function isNextWhitespace(body, i, isRoot) {
    if (i === undefined) i = -1;
    var next = body[i + 1], sibling = body[i + 2];
    if (!next) return isRoot;
    if (next.type === "ContentStatement") return (sibling || !isRoot ? /^\s*?\r?\n/ : /^\s*?(\r?\n|$)/).test(next.original);
}
// Marks the node to the right of the position as omitted.
// I.e. {{foo}}' ' will mark the ' ' node as omitted.
//
// If i is undefined, then the first child will be marked as such.
//
// If mulitple is truthy then all whitespace will be stripped out until non-whitespace
// content is met.
function omitRight(body, i, multiple) {
    var current = body[i == null ? 0 : i + 1];
    if (!current || current.type !== "ContentStatement" || !multiple && current.rightStripped) return;
    var original = current.value;
    current.value = current.value.replace(multiple ? /^\s+/ : /^[ \t]*\r?\n?/, "");
    current.rightStripped = current.value !== original;
}
// Marks the node to the left of the position as omitted.
// I.e. ' '{{foo}} will mark the ' ' node as omitted.
//
// If i is undefined then the last child will be marked as such.
//
// If mulitple is truthy then all whitespace will be stripped out until non-whitespace
// content is met.
function omitLeft(body, i, multiple) {
    var current = body[i == null ? body.length - 1 : i - 1];
    if (!current || current.type !== "ContentStatement" || !multiple && current.leftStripped) return;
    // We omit the last node if it's whitespace only and not preceded by a non-content node.
    var original = current.value;
    current.value = current.value.replace(multiple ? /\s+$/ : /[ \t]+$/, "");
    current.leftStripped = current.value !== original;
    return current.leftStripped;
}
exports["default"] = WhitespaceControl;
module.exports = exports["default"];

},{"./visitor":"fk5sS"}],"fk5sS":[function(require,module,exports) {
"use strict";
exports.__esModule = true;
// istanbul ignore next
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
var _exception = require("../exception");
var _exception2 = _interopRequireDefault(_exception);
function Visitor() {
    this.parents = [];
}
Visitor.prototype = {
    constructor: Visitor,
    mutating: false,
    // Visits a given value. If mutating, will replace the value if necessary.
    acceptKey: function acceptKey(node, name) {
        var value = this.accept(node[name]);
        if (this.mutating) {
            // Hacky sanity check: This may have a few false positives for type for the helper
            // methods but will generally do the right thing without a lot of overhead.
            if (value && !Visitor.prototype[value.type]) throw new _exception2["default"]('Unexpected node type "' + value.type + '" found when accepting ' + name + " on " + node.type);
            node[name] = value;
        }
    },
    // Performs an accept operation with added sanity check to ensure
    // required keys are not removed.
    acceptRequired: function acceptRequired(node, name) {
        this.acceptKey(node, name);
        if (!node[name]) throw new _exception2["default"](node.type + " requires " + name);
    },
    // Traverses a given array. If mutating, empty respnses will be removed
    // for child elements.
    acceptArray: function acceptArray(array) {
        for(var i = 0, l = array.length; i < l; i++){
            this.acceptKey(array, i);
            if (!array[i]) {
                array.splice(i, 1);
                i--;
                l--;
            }
        }
    },
    accept: function accept(object) {
        if (!object) return;
        /* istanbul ignore next: Sanity code */ if (!this[object.type]) throw new _exception2["default"]("Unknown type: " + object.type, object);
        if (this.current) this.parents.unshift(this.current);
        this.current = object;
        var ret = this[object.type](object);
        this.current = this.parents.shift();
        if (!this.mutating || ret) return ret;
        else if (ret !== false) return object;
    },
    Program: function Program(program) {
        this.acceptArray(program.body);
    },
    MustacheStatement: visitSubExpression,
    Decorator: visitSubExpression,
    BlockStatement: visitBlock,
    DecoratorBlock: visitBlock,
    PartialStatement: visitPartial,
    PartialBlockStatement: function PartialBlockStatement(partial) {
        visitPartial.call(this, partial);
        this.acceptKey(partial, "program");
    },
    ContentStatement: function ContentStatement() /* content */ {},
    CommentStatement: function CommentStatement() /* comment */ {},
    SubExpression: visitSubExpression,
    PathExpression: function PathExpression() /* path */ {},
    StringLiteral: function StringLiteral() /* string */ {},
    NumberLiteral: function NumberLiteral() /* number */ {},
    BooleanLiteral: function BooleanLiteral() /* bool */ {},
    UndefinedLiteral: function UndefinedLiteral() /* literal */ {},
    NullLiteral: function NullLiteral() /* literal */ {},
    Hash: function Hash(hash) {
        this.acceptArray(hash.pairs);
    },
    HashPair: function HashPair(pair) {
        this.acceptRequired(pair, "value");
    }
};
function visitSubExpression(mustache) {
    this.acceptRequired(mustache, "path");
    this.acceptArray(mustache.params);
    this.acceptKey(mustache, "hash");
}
function visitBlock(block) {
    visitSubExpression.call(this, block);
    this.acceptKey(block, "program");
    this.acceptKey(block, "inverse");
}
function visitPartial(partial) {
    this.acceptRequired(partial, "name");
    this.acceptArray(partial.params);
    this.acceptKey(partial, "hash");
}
exports["default"] = Visitor;
module.exports = exports["default"];

},{"../exception":"gO63O"}],"aNd96":[function(require,module,exports) {
"use strict";
exports.__esModule = true;
exports.SourceLocation = SourceLocation;
exports.id = id;
exports.stripFlags = stripFlags;
exports.stripComment = stripComment;
exports.preparePath = preparePath;
exports.prepareMustache = prepareMustache;
exports.prepareRawBlock = prepareRawBlock;
exports.prepareBlock = prepareBlock;
exports.prepareProgram = prepareProgram;
exports.preparePartialBlock = preparePartialBlock;
// istanbul ignore next
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
var _exception = require("../exception");
var _exception2 = _interopRequireDefault(_exception);
function validateClose(open, close) {
    close = close.path ? close.path.original : close;
    if (open.path.original !== close) {
        var errorNode = {
            loc: open.path.loc
        };
        throw new _exception2["default"](open.path.original + " doesn't match " + close, errorNode);
    }
}
function SourceLocation(source, locInfo) {
    this.source = source;
    this.start = {
        line: locInfo.first_line,
        column: locInfo.first_column
    };
    this.end = {
        line: locInfo.last_line,
        column: locInfo.last_column
    };
}
function id(token) {
    if (/^\[.*\]$/.test(token)) return token.substring(1, token.length - 1);
    else return token;
}
function stripFlags(open, close) {
    return {
        open: open.charAt(2) === "~",
        close: close.charAt(close.length - 3) === "~"
    };
}
function stripComment(comment) {
    return comment.replace(/^\{\{~?!-?-?/, "").replace(/-?-?~?\}\}$/, "");
}
function preparePath(data, parts, loc) {
    loc = this.locInfo(loc);
    var original = data ? "@" : "", dig = [], depth = 0;
    for(var i = 0, l = parts.length; i < l; i++){
        var part = parts[i].part, // If we have [] syntax then we do not treat path references as operators,
        // i.e. foo.[this] resolves to approximately context.foo['this']
        isLiteral = parts[i].original !== part;
        original += (parts[i].separator || "") + part;
        if (!isLiteral && (part === ".." || part === "." || part === "this")) {
            if (dig.length > 0) throw new _exception2["default"]("Invalid path: " + original, {
                loc: loc
            });
            else if (part === "..") depth++;
        } else dig.push(part);
    }
    return {
        type: "PathExpression",
        data: data,
        depth: depth,
        parts: dig,
        original: original,
        loc: loc
    };
}
function prepareMustache(path, params, hash, open, strip, locInfo) {
    // Must use charAt to support IE pre-10
    var escapeFlag = open.charAt(3) || open.charAt(2), escaped = escapeFlag !== "{" && escapeFlag !== "&";
    var decorator = /\*/.test(open);
    return {
        type: decorator ? "Decorator" : "MustacheStatement",
        path: path,
        params: params,
        hash: hash,
        escaped: escaped,
        strip: strip,
        loc: this.locInfo(locInfo)
    };
}
function prepareRawBlock(openRawBlock, contents, close, locInfo) {
    validateClose(openRawBlock, close);
    locInfo = this.locInfo(locInfo);
    var program = {
        type: "Program",
        body: contents,
        strip: {},
        loc: locInfo
    };
    return {
        type: "BlockStatement",
        path: openRawBlock.path,
        params: openRawBlock.params,
        hash: openRawBlock.hash,
        program: program,
        openStrip: {},
        inverseStrip: {},
        closeStrip: {},
        loc: locInfo
    };
}
function prepareBlock(openBlock, program, inverseAndProgram, close, inverted, locInfo) {
    if (close && close.path) validateClose(openBlock, close);
    var decorator = /\*/.test(openBlock.open);
    program.blockParams = openBlock.blockParams;
    var inverse = undefined, inverseStrip = undefined;
    if (inverseAndProgram) {
        if (decorator) throw new _exception2["default"]("Unexpected inverse block on decorator", inverseAndProgram);
        if (inverseAndProgram.chain) inverseAndProgram.program.body[0].closeStrip = close.strip;
        inverseStrip = inverseAndProgram.strip;
        inverse = inverseAndProgram.program;
    }
    if (inverted) {
        inverted = inverse;
        inverse = program;
        program = inverted;
    }
    return {
        type: decorator ? "DecoratorBlock" : "BlockStatement",
        path: openBlock.path,
        params: openBlock.params,
        hash: openBlock.hash,
        program: program,
        inverse: inverse,
        openStrip: openBlock.strip,
        inverseStrip: inverseStrip,
        closeStrip: close && close.strip,
        loc: this.locInfo(locInfo)
    };
}
function prepareProgram(statements, loc) {
    if (!loc && statements.length) {
        var firstLoc = statements[0].loc, lastLoc = statements[statements.length - 1].loc;
        /* istanbul ignore else */ if (firstLoc && lastLoc) loc = {
            source: firstLoc.source,
            start: {
                line: firstLoc.start.line,
                column: firstLoc.start.column
            },
            end: {
                line: lastLoc.end.line,
                column: lastLoc.end.column
            }
        };
    }
    return {
        type: "Program",
        body: statements,
        strip: {},
        loc: loc
    };
}
function preparePartialBlock(open, program, close, locInfo) {
    validateClose(open, close);
    return {
        type: "PartialBlockStatement",
        name: open.path,
        params: open.params,
        hash: open.hash,
        program: program,
        openStrip: open.strip,
        closeStrip: close && close.strip,
        loc: this.locInfo(locInfo)
    };
}

},{"../exception":"gO63O"}],"4Udtq":[function(require,module,exports) {
/* eslint-disable new-cap */ "use strict";
exports.__esModule = true;
exports.Compiler = Compiler;
exports.precompile = precompile;
exports.compile = compile;
// istanbul ignore next
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
var _exception = require("../exception");
var _exception2 = _interopRequireDefault(_exception);
var _utils = require("../utils");
var _ast = require("./ast");
var _ast2 = _interopRequireDefault(_ast);
var slice = [].slice;
function Compiler() {}
// the foundHelper register will disambiguate helper lookup from finding a
// function in a context. This is necessary for mustache compatibility, which
// requires that context functions in blocks are evaluated by blockHelperMissing,
// and then proceed as if the resulting value was provided to blockHelperMissing.
Compiler.prototype = {
    compiler: Compiler,
    equals: function equals(other) {
        var len = this.opcodes.length;
        if (other.opcodes.length !== len) return false;
        for(var i = 0; i < len; i++){
            var opcode = this.opcodes[i], otherOpcode = other.opcodes[i];
            if (opcode.opcode !== otherOpcode.opcode || !argEquals(opcode.args, otherOpcode.args)) return false;
        }
        // We know that length is the same between the two arrays because they are directly tied
        // to the opcode behavior above.
        len = this.children.length;
        for(var i = 0; i < len; i++){
            if (!this.children[i].equals(other.children[i])) return false;
        }
        return true;
    },
    guid: 0,
    compile: function compile(program, options) {
        this.sourceNode = [];
        this.opcodes = [];
        this.children = [];
        this.options = options;
        this.stringParams = options.stringParams;
        this.trackIds = options.trackIds;
        options.blockParams = options.blockParams || [];
        options.knownHelpers = _utils.extend(Object.create(null), {
            helperMissing: true,
            blockHelperMissing: true,
            each: true,
            "if": true,
            unless: true,
            "with": true,
            log: true,
            lookup: true
        }, options.knownHelpers);
        return this.accept(program);
    },
    compileProgram: function compileProgram(program) {
        var childCompiler = new this.compiler(), // eslint-disable-line new-cap
        result = childCompiler.compile(program, this.options), guid = this.guid++;
        this.usePartial = this.usePartial || result.usePartial;
        this.children[guid] = result;
        this.useDepths = this.useDepths || result.useDepths;
        return guid;
    },
    accept: function accept(node) {
        /* istanbul ignore next: Sanity code */ if (!this[node.type]) throw new _exception2["default"]("Unknown type: " + node.type, node);
        this.sourceNode.unshift(node);
        var ret = this[node.type](node);
        this.sourceNode.shift();
        return ret;
    },
    Program: function Program(program) {
        this.options.blockParams.unshift(program.blockParams);
        var body = program.body, bodyLength = body.length;
        for(var i = 0; i < bodyLength; i++)this.accept(body[i]);
        this.options.blockParams.shift();
        this.isSimple = bodyLength === 1;
        this.blockParams = program.blockParams ? program.blockParams.length : 0;
        return this;
    },
    BlockStatement: function BlockStatement(block) {
        transformLiteralToPath(block);
        var program = block.program, inverse = block.inverse;
        program = program && this.compileProgram(program);
        inverse = inverse && this.compileProgram(inverse);
        var type = this.classifySexpr(block);
        if (type === "helper") this.helperSexpr(block, program, inverse);
        else if (type === "simple") {
            this.simpleSexpr(block);
            // now that the simple mustache is resolved, we need to
            // evaluate it by executing `blockHelperMissing`
            this.opcode("pushProgram", program);
            this.opcode("pushProgram", inverse);
            this.opcode("emptyHash");
            this.opcode("blockValue", block.path.original);
        } else {
            this.ambiguousSexpr(block, program, inverse);
            // now that the simple mustache is resolved, we need to
            // evaluate it by executing `blockHelperMissing`
            this.opcode("pushProgram", program);
            this.opcode("pushProgram", inverse);
            this.opcode("emptyHash");
            this.opcode("ambiguousBlockValue");
        }
        this.opcode("append");
    },
    DecoratorBlock: function DecoratorBlock(decorator) {
        var program = decorator.program && this.compileProgram(decorator.program);
        var params = this.setupFullMustacheParams(decorator, program, undefined), path = decorator.path;
        this.useDecorators = true;
        this.opcode("registerDecorator", params.length, path.original);
    },
    PartialStatement: function PartialStatement(partial) {
        this.usePartial = true;
        var program = partial.program;
        if (program) program = this.compileProgram(partial.program);
        var params = partial.params;
        if (params.length > 1) throw new _exception2["default"]("Unsupported number of partial arguments: " + params.length, partial);
        else if (!params.length) {
            if (this.options.explicitPartialContext) this.opcode("pushLiteral", "undefined");
            else params.push({
                type: "PathExpression",
                parts: [],
                depth: 0
            });
        }
        var partialName = partial.name.original, isDynamic = partial.name.type === "SubExpression";
        if (isDynamic) this.accept(partial.name);
        this.setupFullMustacheParams(partial, program, undefined, true);
        var indent = partial.indent || "";
        if (this.options.preventIndent && indent) {
            this.opcode("appendContent", indent);
            indent = "";
        }
        this.opcode("invokePartial", isDynamic, partialName, indent);
        this.opcode("append");
    },
    PartialBlockStatement: function PartialBlockStatement(partialBlock) {
        this.PartialStatement(partialBlock);
    },
    MustacheStatement: function MustacheStatement(mustache) {
        this.SubExpression(mustache);
        if (mustache.escaped && !this.options.noEscape) this.opcode("appendEscaped");
        else this.opcode("append");
    },
    Decorator: function Decorator(decorator) {
        this.DecoratorBlock(decorator);
    },
    ContentStatement: function ContentStatement(content) {
        if (content.value) this.opcode("appendContent", content.value);
    },
    CommentStatement: function CommentStatement() {},
    SubExpression: function SubExpression(sexpr) {
        transformLiteralToPath(sexpr);
        var type = this.classifySexpr(sexpr);
        if (type === "simple") this.simpleSexpr(sexpr);
        else if (type === "helper") this.helperSexpr(sexpr);
        else this.ambiguousSexpr(sexpr);
    },
    ambiguousSexpr: function ambiguousSexpr(sexpr, program, inverse) {
        var path = sexpr.path, name = path.parts[0], isBlock = program != null || inverse != null;
        this.opcode("getContext", path.depth);
        this.opcode("pushProgram", program);
        this.opcode("pushProgram", inverse);
        path.strict = true;
        this.accept(path);
        this.opcode("invokeAmbiguous", name, isBlock);
    },
    simpleSexpr: function simpleSexpr(sexpr) {
        var path = sexpr.path;
        path.strict = true;
        this.accept(path);
        this.opcode("resolvePossibleLambda");
    },
    helperSexpr: function helperSexpr(sexpr, program, inverse) {
        var params = this.setupFullMustacheParams(sexpr, program, inverse), path = sexpr.path, name = path.parts[0];
        if (this.options.knownHelpers[name]) this.opcode("invokeKnownHelper", params.length, name);
        else if (this.options.knownHelpersOnly) throw new _exception2["default"]("You specified knownHelpersOnly, but used the unknown helper " + name, sexpr);
        else {
            path.strict = true;
            path.falsy = true;
            this.accept(path);
            this.opcode("invokeHelper", params.length, path.original, _ast2["default"].helpers.simpleId(path));
        }
    },
    PathExpression: function PathExpression(path) {
        this.addDepth(path.depth);
        this.opcode("getContext", path.depth);
        var name = path.parts[0], scoped = _ast2["default"].helpers.scopedId(path), blockParamId = !path.depth && !scoped && this.blockParamIndex(name);
        if (blockParamId) this.opcode("lookupBlockParam", blockParamId, path.parts);
        else if (!name) // Context reference, i.e. `{{foo .}}` or `{{foo ..}}`
        this.opcode("pushContext");
        else if (path.data) {
            this.options.data = true;
            this.opcode("lookupData", path.depth, path.parts, path.strict);
        } else this.opcode("lookupOnContext", path.parts, path.falsy, path.strict, scoped);
    },
    StringLiteral: function StringLiteral(string) {
        this.opcode("pushString", string.value);
    },
    NumberLiteral: function NumberLiteral(number) {
        this.opcode("pushLiteral", number.value);
    },
    BooleanLiteral: function BooleanLiteral(bool) {
        this.opcode("pushLiteral", bool.value);
    },
    UndefinedLiteral: function UndefinedLiteral() {
        this.opcode("pushLiteral", "undefined");
    },
    NullLiteral: function NullLiteral() {
        this.opcode("pushLiteral", "null");
    },
    Hash: function Hash(hash) {
        var pairs = hash.pairs, i = 0, l = pairs.length;
        this.opcode("pushHash");
        for(; i < l; i++)this.pushParam(pairs[i].value);
        while(i--)this.opcode("assignToHash", pairs[i].key);
        this.opcode("popHash");
    },
    // HELPERS
    opcode: function opcode(name) {
        this.opcodes.push({
            opcode: name,
            args: slice.call(arguments, 1),
            loc: this.sourceNode[0].loc
        });
    },
    addDepth: function addDepth(depth) {
        if (!depth) return;
        this.useDepths = true;
    },
    classifySexpr: function classifySexpr(sexpr) {
        var isSimple = _ast2["default"].helpers.simpleId(sexpr.path);
        var isBlockParam = isSimple && !!this.blockParamIndex(sexpr.path.parts[0]);
        // a mustache is an eligible helper if:
        // * its id is simple (a single part, not `this` or `..`)
        var isHelper = !isBlockParam && _ast2["default"].helpers.helperExpression(sexpr);
        // if a mustache is an eligible helper but not a definite
        // helper, it is ambiguous, and will be resolved in a later
        // pass or at runtime.
        var isEligible = !isBlockParam && (isHelper || isSimple);
        // if ambiguous, we can possibly resolve the ambiguity now
        // An eligible helper is one that does not have a complex path, i.e. `this.foo`, `../foo` etc.
        if (isEligible && !isHelper) {
            var _name = sexpr.path.parts[0], options = this.options;
            if (options.knownHelpers[_name]) isHelper = true;
            else if (options.knownHelpersOnly) isEligible = false;
        }
        if (isHelper) return "helper";
        else if (isEligible) return "ambiguous";
        else return "simple";
    },
    pushParams: function pushParams(params) {
        for(var i = 0, l = params.length; i < l; i++)this.pushParam(params[i]);
    },
    pushParam: function pushParam(val) {
        var value = val.value != null ? val.value : val.original || "";
        if (this.stringParams) {
            if (value.replace) value = value.replace(/^(\.?\.\/)*/g, "").replace(/\//g, ".");
            if (val.depth) this.addDepth(val.depth);
            this.opcode("getContext", val.depth || 0);
            this.opcode("pushStringParam", value, val.type);
            if (val.type === "SubExpression") // SubExpressions get evaluated and passed in
            // in string params mode.
            this.accept(val);
        } else {
            if (this.trackIds) {
                var blockParamIndex = undefined;
                if (val.parts && !_ast2["default"].helpers.scopedId(val) && !val.depth) blockParamIndex = this.blockParamIndex(val.parts[0]);
                if (blockParamIndex) {
                    var blockParamChild = val.parts.slice(1).join(".");
                    this.opcode("pushId", "BlockParam", blockParamIndex, blockParamChild);
                } else {
                    value = val.original || value;
                    if (value.replace) value = value.replace(/^this(?:\.|$)/, "").replace(/^\.\//, "").replace(/^\.$/, "");
                    this.opcode("pushId", val.type, value);
                }
            }
            this.accept(val);
        }
    },
    setupFullMustacheParams: function setupFullMustacheParams(sexpr, program, inverse, omitEmpty) {
        var params = sexpr.params;
        this.pushParams(params);
        this.opcode("pushProgram", program);
        this.opcode("pushProgram", inverse);
        if (sexpr.hash) this.accept(sexpr.hash);
        else this.opcode("emptyHash", omitEmpty);
        return params;
    },
    blockParamIndex: function blockParamIndex(name) {
        for(var depth = 0, len = this.options.blockParams.length; depth < len; depth++){
            var blockParams = this.options.blockParams[depth], param = blockParams && _utils.indexOf(blockParams, name);
            if (blockParams && param >= 0) return [
                depth,
                param
            ];
        }
    }
};
function precompile(input, options, env) {
    if (input == null || typeof input !== "string" && input.type !== "Program") throw new _exception2["default"]("You must pass a string or Handlebars AST to Handlebars.precompile. You passed " + input);
    options = options || {};
    if (!("data" in options)) options.data = true;
    if (options.compat) options.useDepths = true;
    var ast = env.parse(input, options), environment = new env.Compiler().compile(ast, options);
    return new env.JavaScriptCompiler().compile(environment, options);
}
function compile(input, options, env) {
    if (options === undefined) options = {};
    if (input == null || typeof input !== "string" && input.type !== "Program") throw new _exception2["default"]("You must pass a string or Handlebars AST to Handlebars.compile. You passed " + input);
    options = _utils.extend({}, options);
    if (!("data" in options)) options.data = true;
    if (options.compat) options.useDepths = true;
    var compiled = undefined;
    function compileInput() {
        var ast = env.parse(input, options), environment = new env.Compiler().compile(ast, options), templateSpec = new env.JavaScriptCompiler().compile(environment, options, undefined, true);
        return env.template(templateSpec);
    }
    // Template is only compiled on first use and cached after that point.
    function ret(context, execOptions) {
        if (!compiled) compiled = compileInput();
        return compiled.call(this, context, execOptions);
    }
    ret._setup = function(setupOptions) {
        if (!compiled) compiled = compileInput();
        return compiled._setup(setupOptions);
    };
    ret._child = function(i, data, blockParams, depths) {
        if (!compiled) compiled = compileInput();
        return compiled._child(i, data, blockParams, depths);
    };
    return ret;
}
function argEquals(a, b) {
    if (a === b) return true;
    if (_utils.isArray(a) && _utils.isArray(b) && a.length === b.length) {
        for(var i = 0; i < a.length; i++){
            if (!argEquals(a[i], b[i])) return false;
        }
        return true;
    }
}
function transformLiteralToPath(sexpr) {
    if (!sexpr.path.parts) {
        var literal = sexpr.path;
        // Casting to string here to make false and 0 literal values play nicely with the rest
        // of the system.
        sexpr.path = {
            type: "PathExpression",
            data: false,
            depth: 0,
            parts: [
                literal.original + ""
            ],
            original: literal.original + "",
            loc: literal.loc
        };
    }
}

},{"../exception":"gO63O","../utils":"1az9o","./ast":"iOlHO"}],"7iXdU":[function(require,module,exports) {
"use strict";
exports.__esModule = true;
// istanbul ignore next
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
var _base = require("../base");
var _exception = require("../exception");
var _exception2 = _interopRequireDefault(_exception);
var _utils = require("../utils");
var _codeGen = require("./code-gen");
var _codeGen2 = _interopRequireDefault(_codeGen);
function Literal(value) {
    this.value = value;
}
function JavaScriptCompiler() {}
JavaScriptCompiler.prototype = {
    // PUBLIC API: You can override these methods in a subclass to provide
    // alternative compiled forms for name lookup and buffering semantics
    nameLookup: function nameLookup(parent, name /*,  type */ ) {
        return this.internalNameLookup(parent, name);
    },
    depthedLookup: function depthedLookup(name) {
        return [
            this.aliasable("container.lookup"),
            "(depths, ",
            JSON.stringify(name),
            ")"
        ];
    },
    compilerInfo: function compilerInfo() {
        var revision = _base.COMPILER_REVISION, versions = _base.REVISION_CHANGES[revision];
        return [
            revision,
            versions
        ];
    },
    appendToBuffer: function appendToBuffer(source, location, explicit) {
        // Force a source as this simplifies the merge logic.
        if (!_utils.isArray(source)) source = [
            source
        ];
        source = this.source.wrap(source, location);
        if (this.environment.isSimple) return [
            "return ",
            source,
            ";"
        ];
        else if (explicit) // This is a case where the buffer operation occurs as a child of another
        // construct, generally braces. We have to explicitly output these buffer
        // operations to ensure that the emitted code goes in the correct location.
        return [
            "buffer += ",
            source,
            ";"
        ];
        else {
            source.appendToBuffer = true;
            return source;
        }
    },
    initializeBuffer: function initializeBuffer() {
        return this.quotedString("");
    },
    // END PUBLIC API
    internalNameLookup: function internalNameLookup(parent, name) {
        this.lookupPropertyFunctionIsUsed = true;
        return [
            "lookupProperty(",
            parent,
            ",",
            JSON.stringify(name),
            ")"
        ];
    },
    lookupPropertyFunctionIsUsed: false,
    compile: function compile(environment, options, context, asObject) {
        this.environment = environment;
        this.options = options;
        this.stringParams = this.options.stringParams;
        this.trackIds = this.options.trackIds;
        this.precompile = !asObject;
        this.name = this.environment.name;
        this.isChild = !!context;
        this.context = context || {
            decorators: [],
            programs: [],
            environments: []
        };
        this.preamble();
        this.stackSlot = 0;
        this.stackVars = [];
        this.aliases = {};
        this.registers = {
            list: []
        };
        this.hashes = [];
        this.compileStack = [];
        this.inlineStack = [];
        this.blockParams = [];
        this.compileChildren(environment, options);
        this.useDepths = this.useDepths || environment.useDepths || environment.useDecorators || this.options.compat;
        this.useBlockParams = this.useBlockParams || environment.useBlockParams;
        var opcodes = environment.opcodes, opcode = undefined, firstLoc = undefined, i = undefined, l = undefined;
        for(i = 0, l = opcodes.length; i < l; i++){
            opcode = opcodes[i];
            this.source.currentLocation = opcode.loc;
            firstLoc = firstLoc || opcode.loc;
            this[opcode.opcode].apply(this, opcode.args);
        }
        // Flush any trailing content that might be pending.
        this.source.currentLocation = firstLoc;
        this.pushSource("");
        /* istanbul ignore next */ if (this.stackSlot || this.inlineStack.length || this.compileStack.length) throw new _exception2["default"]("Compile completed with content left on stack");
        if (!this.decorators.isEmpty()) {
            this.useDecorators = true;
            this.decorators.prepend([
                "var decorators = container.decorators, ",
                this.lookupPropertyFunctionVarDeclaration(),
                ";\n"
            ]);
            this.decorators.push("return fn;");
            if (asObject) this.decorators = Function.apply(this, [
                "fn",
                "props",
                "container",
                "depth0",
                "data",
                "blockParams",
                "depths",
                this.decorators.merge()
            ]);
            else {
                this.decorators.prepend("function(fn, props, container, depth0, data, blockParams, depths) {\n");
                this.decorators.push("}\n");
                this.decorators = this.decorators.merge();
            }
        } else this.decorators = undefined;
        var fn = this.createFunctionContext(asObject);
        if (!this.isChild) {
            var ret = {
                compiler: this.compilerInfo(),
                main: fn
            };
            if (this.decorators) {
                ret.main_d = this.decorators; // eslint-disable-line camelcase
                ret.useDecorators = true;
            }
            var _context = this.context;
            var programs = _context.programs;
            var decorators = _context.decorators;
            for(i = 0, l = programs.length; i < l; i++)if (programs[i]) {
                ret[i] = programs[i];
                if (decorators[i]) {
                    ret[i + "_d"] = decorators[i];
                    ret.useDecorators = true;
                }
            }
            if (this.environment.usePartial) ret.usePartial = true;
            if (this.options.data) ret.useData = true;
            if (this.useDepths) ret.useDepths = true;
            if (this.useBlockParams) ret.useBlockParams = true;
            if (this.options.compat) ret.compat = true;
            if (!asObject) {
                ret.compiler = JSON.stringify(ret.compiler);
                this.source.currentLocation = {
                    start: {
                        line: 1,
                        column: 0
                    }
                };
                ret = this.objectLiteral(ret);
                if (options.srcName) {
                    ret = ret.toStringWithSourceMap({
                        file: options.destName
                    });
                    ret.map = ret.map && ret.map.toString();
                } else ret = ret.toString();
            } else ret.compilerOptions = this.options;
            return ret;
        } else return fn;
    },
    preamble: function preamble() {
        // track the last context pushed into place to allow skipping the
        // getContext opcode when it would be a noop
        this.lastContext = 0;
        this.source = new _codeGen2["default"](this.options.srcName);
        this.decorators = new _codeGen2["default"](this.options.srcName);
    },
    createFunctionContext: function createFunctionContext(asObject) {
        // istanbul ignore next
        var _this = this;
        var varDeclarations = "";
        var locals = this.stackVars.concat(this.registers.list);
        if (locals.length > 0) varDeclarations += ", " + locals.join(", ");
        // Generate minimizer alias mappings
        //
        // When using true SourceNodes, this will update all references to the given alias
        // as the source nodes are reused in situ. For the non-source node compilation mode,
        // aliases will not be used, but this case is already being run on the client and
        // we aren't concern about minimizing the template size.
        var aliasCount = 0;
        Object.keys(this.aliases).forEach(function(alias) {
            var node = _this.aliases[alias];
            if (node.children && node.referenceCount > 1) {
                varDeclarations += ", alias" + ++aliasCount + "=" + alias;
                node.children[0] = "alias" + aliasCount;
            }
        });
        if (this.lookupPropertyFunctionIsUsed) varDeclarations += ", " + this.lookupPropertyFunctionVarDeclaration();
        var params = [
            "container",
            "depth0",
            "helpers",
            "partials",
            "data"
        ];
        if (this.useBlockParams || this.useDepths) params.push("blockParams");
        if (this.useDepths) params.push("depths");
        // Perform a second pass over the output to merge content when possible
        var source = this.mergeSource(varDeclarations);
        if (asObject) {
            params.push(source);
            return Function.apply(this, params);
        } else return this.source.wrap([
            "function(",
            params.join(","),
            ") {\n  ",
            source,
            "}"
        ]);
    },
    mergeSource: function mergeSource(varDeclarations) {
        var isSimple = this.environment.isSimple, appendOnly = !this.forceBuffer, appendFirst = undefined, sourceSeen = undefined, bufferStart = undefined, bufferEnd = undefined;
        this.source.each(function(line) {
            if (line.appendToBuffer) {
                if (bufferStart) line.prepend("  + ");
                else bufferStart = line;
                bufferEnd = line;
            } else {
                if (bufferStart) {
                    if (!sourceSeen) appendFirst = true;
                    else bufferStart.prepend("buffer += ");
                    bufferEnd.add(";");
                    bufferStart = bufferEnd = undefined;
                }
                sourceSeen = true;
                if (!isSimple) appendOnly = false;
            }
        });
        if (appendOnly) {
            if (bufferStart) {
                bufferStart.prepend("return ");
                bufferEnd.add(";");
            } else if (!sourceSeen) this.source.push('return "";');
        } else {
            varDeclarations += ", buffer = " + (appendFirst ? "" : this.initializeBuffer());
            if (bufferStart) {
                bufferStart.prepend("return buffer + ");
                bufferEnd.add(";");
            } else this.source.push("return buffer;");
        }
        if (varDeclarations) this.source.prepend("var " + varDeclarations.substring(2) + (appendFirst ? "" : ";\n"));
        return this.source.merge();
    },
    lookupPropertyFunctionVarDeclaration: function lookupPropertyFunctionVarDeclaration() {
        return "\n      lookupProperty = container.lookupProperty || function(parent, propertyName) {\n        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {\n          return parent[propertyName];\n        }\n        return undefined\n    }\n    ".trim();
    },
    // [blockValue]
    //
    // On stack, before: hash, inverse, program, value
    // On stack, after: return value of blockHelperMissing
    //
    // The purpose of this opcode is to take a block of the form
    // `{{#this.foo}}...{{/this.foo}}`, resolve the value of `foo`, and
    // replace it on the stack with the result of properly
    // invoking blockHelperMissing.
    blockValue: function blockValue(name) {
        var blockHelperMissing = this.aliasable("container.hooks.blockHelperMissing"), params = [
            this.contextName(0)
        ];
        this.setupHelperArgs(name, 0, params);
        var blockName = this.popStack();
        params.splice(1, 0, blockName);
        this.push(this.source.functionCall(blockHelperMissing, "call", params));
    },
    // [ambiguousBlockValue]
    //
    // On stack, before: hash, inverse, program, value
    // Compiler value, before: lastHelper=value of last found helper, if any
    // On stack, after, if no lastHelper: same as [blockValue]
    // On stack, after, if lastHelper: value
    ambiguousBlockValue: function ambiguousBlockValue() {
        // We're being a bit cheeky and reusing the options value from the prior exec
        var blockHelperMissing = this.aliasable("container.hooks.blockHelperMissing"), params = [
            this.contextName(0)
        ];
        this.setupHelperArgs("", 0, params, true);
        this.flushInline();
        var current = this.topStack();
        params.splice(1, 0, current);
        this.pushSource([
            "if (!",
            this.lastHelper,
            ") { ",
            current,
            " = ",
            this.source.functionCall(blockHelperMissing, "call", params),
            "}"
        ]);
    },
    // [appendContent]
    //
    // On stack, before: ...
    // On stack, after: ...
    //
    // Appends the string value of `content` to the current buffer
    appendContent: function appendContent(content) {
        if (this.pendingContent) content = this.pendingContent + content;
        else this.pendingLocation = this.source.currentLocation;
        this.pendingContent = content;
    },
    // [append]
    //
    // On stack, before: value, ...
    // On stack, after: ...
    //
    // Coerces `value` to a String and appends it to the current buffer.
    //
    // If `value` is truthy, or 0, it is coerced into a string and appended
    // Otherwise, the empty string is appended
    append: function append() {
        if (this.isInline()) {
            this.replaceStack(function(current) {
                return [
                    " != null ? ",
                    current,
                    ' : ""'
                ];
            });
            this.pushSource(this.appendToBuffer(this.popStack()));
        } else {
            var local = this.popStack();
            this.pushSource([
                "if (",
                local,
                " != null) { ",
                this.appendToBuffer(local, undefined, true),
                " }"
            ]);
            if (this.environment.isSimple) this.pushSource([
                "else { ",
                this.appendToBuffer("''", undefined, true),
                " }"
            ]);
        }
    },
    // [appendEscaped]
    //
    // On stack, before: value, ...
    // On stack, after: ...
    //
    // Escape `value` and append it to the buffer
    appendEscaped: function appendEscaped() {
        this.pushSource(this.appendToBuffer([
            this.aliasable("container.escapeExpression"),
            "(",
            this.popStack(),
            ")"
        ]));
    },
    // [getContext]
    //
    // On stack, before: ...
    // On stack, after: ...
    // Compiler value, after: lastContext=depth
    //
    // Set the value of the `lastContext` compiler value to the depth
    getContext: function getContext(depth) {
        this.lastContext = depth;
    },
    // [pushContext]
    //
    // On stack, before: ...
    // On stack, after: currentContext, ...
    //
    // Pushes the value of the current context onto the stack.
    pushContext: function pushContext() {
        this.pushStackLiteral(this.contextName(this.lastContext));
    },
    // [lookupOnContext]
    //
    // On stack, before: ...
    // On stack, after: currentContext[name], ...
    //
    // Looks up the value of `name` on the current context and pushes
    // it onto the stack.
    lookupOnContext: function lookupOnContext(parts, falsy, strict, scoped) {
        var i = 0;
        if (!scoped && this.options.compat && !this.lastContext) // The depthed query is expected to handle the undefined logic for the root level that
        // is implemented below, so we evaluate that directly in compat mode
        this.push(this.depthedLookup(parts[i++]));
        else this.pushContext();
        this.resolvePath("context", parts, i, falsy, strict);
    },
    // [lookupBlockParam]
    //
    // On stack, before: ...
    // On stack, after: blockParam[name], ...
    //
    // Looks up the value of `parts` on the given block param and pushes
    // it onto the stack.
    lookupBlockParam: function lookupBlockParam(blockParamId, parts) {
        this.useBlockParams = true;
        this.push([
            "blockParams[",
            blockParamId[0],
            "][",
            blockParamId[1],
            "]"
        ]);
        this.resolvePath("context", parts, 1);
    },
    // [lookupData]
    //
    // On stack, before: ...
    // On stack, after: data, ...
    //
    // Push the data lookup operator
    lookupData: function lookupData(depth, parts, strict) {
        if (!depth) this.pushStackLiteral("data");
        else this.pushStackLiteral("container.data(data, " + depth + ")");
        this.resolvePath("data", parts, 0, true, strict);
    },
    resolvePath: function resolvePath(type, parts, i, falsy, strict) {
        // istanbul ignore next
        var _this2 = this;
        if (this.options.strict || this.options.assumeObjects) {
            this.push(strictLookup(this.options.strict && strict, this, parts, type));
            return;
        }
        var len = parts.length;
        for(; i < len; i++)/* eslint-disable no-loop-func */ this.replaceStack(function(current) {
            var lookup = _this2.nameLookup(current, parts[i], type);
            // We want to ensure that zero and false are handled properly if the context (falsy flag)
            // needs to have the special handling for these values.
            if (!falsy) return [
                " != null ? ",
                lookup,
                " : ",
                current
            ];
            else // Otherwise we can use generic falsy handling
            return [
                " && ",
                lookup
            ];
        });
    },
    // [resolvePossibleLambda]
    //
    // On stack, before: value, ...
    // On stack, after: resolved value, ...
    //
    // If the `value` is a lambda, replace it on the stack by
    // the return value of the lambda
    resolvePossibleLambda: function resolvePossibleLambda() {
        this.push([
            this.aliasable("container.lambda"),
            "(",
            this.popStack(),
            ", ",
            this.contextName(0),
            ")"
        ]);
    },
    // [pushStringParam]
    //
    // On stack, before: ...
    // On stack, after: string, currentContext, ...
    //
    // This opcode is designed for use in string mode, which
    // provides the string value of a parameter along with its
    // depth rather than resolving it immediately.
    pushStringParam: function pushStringParam(string, type) {
        this.pushContext();
        this.pushString(type);
        // If it's a subexpression, the string result
        // will be pushed after this opcode.
        if (type !== "SubExpression") {
            if (typeof string === "string") this.pushString(string);
            else this.pushStackLiteral(string);
        }
    },
    emptyHash: function emptyHash(omitEmpty) {
        if (this.trackIds) this.push("{}"); // hashIds
        if (this.stringParams) {
            this.push("{}"); // hashContexts
            this.push("{}"); // hashTypes
        }
        this.pushStackLiteral(omitEmpty ? "undefined" : "{}");
    },
    pushHash: function pushHash() {
        if (this.hash) this.hashes.push(this.hash);
        this.hash = {
            values: {},
            types: [],
            contexts: [],
            ids: []
        };
    },
    popHash: function popHash() {
        var hash = this.hash;
        this.hash = this.hashes.pop();
        if (this.trackIds) this.push(this.objectLiteral(hash.ids));
        if (this.stringParams) {
            this.push(this.objectLiteral(hash.contexts));
            this.push(this.objectLiteral(hash.types));
        }
        this.push(this.objectLiteral(hash.values));
    },
    // [pushString]
    //
    // On stack, before: ...
    // On stack, after: quotedString(string), ...
    //
    // Push a quoted version of `string` onto the stack
    pushString: function pushString(string) {
        this.pushStackLiteral(this.quotedString(string));
    },
    // [pushLiteral]
    //
    // On stack, before: ...
    // On stack, after: value, ...
    //
    // Pushes a value onto the stack. This operation prevents
    // the compiler from creating a temporary variable to hold
    // it.
    pushLiteral: function pushLiteral(value) {
        this.pushStackLiteral(value);
    },
    // [pushProgram]
    //
    // On stack, before: ...
    // On stack, after: program(guid), ...
    //
    // Push a program expression onto the stack. This takes
    // a compile-time guid and converts it into a runtime-accessible
    // expression.
    pushProgram: function pushProgram(guid) {
        if (guid != null) this.pushStackLiteral(this.programExpression(guid));
        else this.pushStackLiteral(null);
    },
    // [registerDecorator]
    //
    // On stack, before: hash, program, params..., ...
    // On stack, after: ...
    //
    // Pops off the decorator's parameters, invokes the decorator,
    // and inserts the decorator into the decorators list.
    registerDecorator: function registerDecorator(paramSize, name) {
        var foundDecorator = this.nameLookup("decorators", name, "decorator"), options = this.setupHelperArgs(name, paramSize);
        this.decorators.push([
            "fn = ",
            this.decorators.functionCall(foundDecorator, "", [
                "fn",
                "props",
                "container",
                options
            ]),
            " || fn;"
        ]);
    },
    // [invokeHelper]
    //
    // On stack, before: hash, inverse, program, params..., ...
    // On stack, after: result of helper invocation
    //
    // Pops off the helper's parameters, invokes the helper,
    // and pushes the helper's return value onto the stack.
    //
    // If the helper is not found, `helperMissing` is called.
    invokeHelper: function invokeHelper(paramSize, name, isSimple) {
        var nonHelper = this.popStack(), helper = this.setupHelper(paramSize, name);
        var possibleFunctionCalls = [];
        if (isSimple) // direct call to helper
        possibleFunctionCalls.push(helper.name);
        // call a function from the input object
        possibleFunctionCalls.push(nonHelper);
        if (!this.options.strict) possibleFunctionCalls.push(this.aliasable("container.hooks.helperMissing"));
        var functionLookupCode = [
            "(",
            this.itemsSeparatedBy(possibleFunctionCalls, "||"),
            ")"
        ];
        var functionCall = this.source.functionCall(functionLookupCode, "call", helper.callParams);
        this.push(functionCall);
    },
    itemsSeparatedBy: function itemsSeparatedBy(items, separator) {
        var result = [];
        result.push(items[0]);
        for(var i = 1; i < items.length; i++)result.push(separator, items[i]);
        return result;
    },
    // [invokeKnownHelper]
    //
    // On stack, before: hash, inverse, program, params..., ...
    // On stack, after: result of helper invocation
    //
    // This operation is used when the helper is known to exist,
    // so a `helperMissing` fallback is not required.
    invokeKnownHelper: function invokeKnownHelper(paramSize, name) {
        var helper = this.setupHelper(paramSize, name);
        this.push(this.source.functionCall(helper.name, "call", helper.callParams));
    },
    // [invokeAmbiguous]
    //
    // On stack, before: hash, inverse, program, params..., ...
    // On stack, after: result of disambiguation
    //
    // This operation is used when an expression like `{{foo}}`
    // is provided, but we don't know at compile-time whether it
    // is a helper or a path.
    //
    // This operation emits more code than the other options,
    // and can be avoided by passing the `knownHelpers` and
    // `knownHelpersOnly` flags at compile-time.
    invokeAmbiguous: function invokeAmbiguous(name, helperCall) {
        this.useRegister("helper");
        var nonHelper = this.popStack();
        this.emptyHash();
        var helper = this.setupHelper(0, name, helperCall);
        var helperName = this.lastHelper = this.nameLookup("helpers", name, "helper");
        var lookup = [
            "(",
            "(helper = ",
            helperName,
            " || ",
            nonHelper,
            ")"
        ];
        if (!this.options.strict) {
            lookup[0] = "(helper = ";
            lookup.push(" != null ? helper : ", this.aliasable("container.hooks.helperMissing"));
        }
        this.push([
            "(",
            lookup,
            helper.paramsInit ? [
                "),(",
                helper.paramsInit
            ] : [],
            "),",
            "(typeof helper === ",
            this.aliasable('"function"'),
            " ? ",
            this.source.functionCall("helper", "call", helper.callParams),
            " : helper))"
        ]);
    },
    // [invokePartial]
    //
    // On stack, before: context, ...
    // On stack after: result of partial invocation
    //
    // This operation pops off a context, invokes a partial with that context,
    // and pushes the result of the invocation back.
    invokePartial: function invokePartial(isDynamic, name, indent) {
        var params = [], options = this.setupParams(name, 1, params);
        if (isDynamic) {
            name = this.popStack();
            delete options.name;
        }
        if (indent) options.indent = JSON.stringify(indent);
        options.helpers = "helpers";
        options.partials = "partials";
        options.decorators = "container.decorators";
        if (!isDynamic) params.unshift(this.nameLookup("partials", name, "partial"));
        else params.unshift(name);
        if (this.options.compat) options.depths = "depths";
        options = this.objectLiteral(options);
        params.push(options);
        this.push(this.source.functionCall("container.invokePartial", "", params));
    },
    // [assignToHash]
    //
    // On stack, before: value, ..., hash, ...
    // On stack, after: ..., hash, ...
    //
    // Pops a value off the stack and assigns it to the current hash
    assignToHash: function assignToHash(key) {
        var value = this.popStack(), context = undefined, type = undefined, id = undefined;
        if (this.trackIds) id = this.popStack();
        if (this.stringParams) {
            type = this.popStack();
            context = this.popStack();
        }
        var hash = this.hash;
        if (context) hash.contexts[key] = context;
        if (type) hash.types[key] = type;
        if (id) hash.ids[key] = id;
        hash.values[key] = value;
    },
    pushId: function pushId(type, name, child) {
        if (type === "BlockParam") this.pushStackLiteral("blockParams[" + name[0] + "].path[" + name[1] + "]" + (child ? " + " + JSON.stringify("." + child) : ""));
        else if (type === "PathExpression") this.pushString(name);
        else if (type === "SubExpression") this.pushStackLiteral("true");
        else this.pushStackLiteral("null");
    },
    // HELPERS
    compiler: JavaScriptCompiler,
    compileChildren: function compileChildren(environment, options) {
        var children = environment.children, child = undefined, compiler = undefined;
        for(var i = 0, l = children.length; i < l; i++){
            child = children[i];
            compiler = new this.compiler(); // eslint-disable-line new-cap
            var existing = this.matchExistingProgram(child);
            if (existing == null) {
                this.context.programs.push(""); // Placeholder to prevent name conflicts for nested children
                var index = this.context.programs.length;
                child.index = index;
                child.name = "program" + index;
                this.context.programs[index] = compiler.compile(child, options, this.context, !this.precompile);
                this.context.decorators[index] = compiler.decorators;
                this.context.environments[index] = child;
                this.useDepths = this.useDepths || compiler.useDepths;
                this.useBlockParams = this.useBlockParams || compiler.useBlockParams;
                child.useDepths = this.useDepths;
                child.useBlockParams = this.useBlockParams;
            } else {
                child.index = existing.index;
                child.name = "program" + existing.index;
                this.useDepths = this.useDepths || existing.useDepths;
                this.useBlockParams = this.useBlockParams || existing.useBlockParams;
            }
        }
    },
    matchExistingProgram: function matchExistingProgram(child) {
        for(var i = 0, len = this.context.environments.length; i < len; i++){
            var environment = this.context.environments[i];
            if (environment && environment.equals(child)) return environment;
        }
    },
    programExpression: function programExpression(guid) {
        var child = this.environment.children[guid], programParams = [
            child.index,
            "data",
            child.blockParams
        ];
        if (this.useBlockParams || this.useDepths) programParams.push("blockParams");
        if (this.useDepths) programParams.push("depths");
        return "container.program(" + programParams.join(", ") + ")";
    },
    useRegister: function useRegister(name) {
        if (!this.registers[name]) {
            this.registers[name] = true;
            this.registers.list.push(name);
        }
    },
    push: function push(expr) {
        if (!(expr instanceof Literal)) expr = this.source.wrap(expr);
        this.inlineStack.push(expr);
        return expr;
    },
    pushStackLiteral: function pushStackLiteral(item) {
        this.push(new Literal(item));
    },
    pushSource: function pushSource(source) {
        if (this.pendingContent) {
            this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent), this.pendingLocation));
            this.pendingContent = undefined;
        }
        if (source) this.source.push(source);
    },
    replaceStack: function replaceStack(callback) {
        var prefix = [
            "("
        ], stack = undefined, createdStack = undefined, usedLiteral = undefined;
        /* istanbul ignore next */ if (!this.isInline()) throw new _exception2["default"]("replaceStack on non-inline");
        // We want to merge the inline statement into the replacement statement via ','
        var top = this.popStack(true);
        if (top instanceof Literal) {
            // Literals do not need to be inlined
            stack = [
                top.value
            ];
            prefix = [
                "(",
                stack
            ];
            usedLiteral = true;
        } else {
            // Get or create the current stack name for use by the inline
            createdStack = true;
            var _name = this.incrStack();
            prefix = [
                "((",
                this.push(_name),
                " = ",
                top,
                ")"
            ];
            stack = this.topStack();
        }
        var item = callback.call(this, stack);
        if (!usedLiteral) this.popStack();
        if (createdStack) this.stackSlot--;
        this.push(prefix.concat(item, ")"));
    },
    incrStack: function incrStack() {
        this.stackSlot++;
        if (this.stackSlot > this.stackVars.length) this.stackVars.push("stack" + this.stackSlot);
        return this.topStackName();
    },
    topStackName: function topStackName() {
        return "stack" + this.stackSlot;
    },
    flushInline: function flushInline() {
        var inlineStack = this.inlineStack;
        this.inlineStack = [];
        for(var i = 0, len = inlineStack.length; i < len; i++){
            var entry = inlineStack[i];
            /* istanbul ignore if */ if (entry instanceof Literal) this.compileStack.push(entry);
            else {
                var stack = this.incrStack();
                this.pushSource([
                    stack,
                    " = ",
                    entry,
                    ";"
                ]);
                this.compileStack.push(stack);
            }
        }
    },
    isInline: function isInline() {
        return this.inlineStack.length;
    },
    popStack: function popStack(wrapped) {
        var inline = this.isInline(), item = (inline ? this.inlineStack : this.compileStack).pop();
        if (!wrapped && item instanceof Literal) return item.value;
        else {
            if (!inline) {
                /* istanbul ignore next */ if (!this.stackSlot) throw new _exception2["default"]("Invalid stack pop");
                this.stackSlot--;
            }
            return item;
        }
    },
    topStack: function topStack() {
        var stack = this.isInline() ? this.inlineStack : this.compileStack, item = stack[stack.length - 1];
        /* istanbul ignore if */ if (item instanceof Literal) return item.value;
        else return item;
    },
    contextName: function contextName(context) {
        if (this.useDepths && context) return "depths[" + context + "]";
        else return "depth" + context;
    },
    quotedString: function quotedString(str) {
        return this.source.quotedString(str);
    },
    objectLiteral: function objectLiteral(obj) {
        return this.source.objectLiteral(obj);
    },
    aliasable: function aliasable(name) {
        var ret = this.aliases[name];
        if (ret) {
            ret.referenceCount++;
            return ret;
        }
        ret = this.aliases[name] = this.source.wrap(name);
        ret.aliasable = true;
        ret.referenceCount = 1;
        return ret;
    },
    setupHelper: function setupHelper(paramSize, name, blockHelper) {
        var params = [], paramsInit = this.setupHelperArgs(name, paramSize, params, blockHelper);
        var foundHelper = this.nameLookup("helpers", name, "helper"), callContext = this.aliasable(this.contextName(0) + " != null ? " + this.contextName(0) + " : (container.nullContext || {})");
        return {
            params: params,
            paramsInit: paramsInit,
            name: foundHelper,
            callParams: [
                callContext
            ].concat(params)
        };
    },
    setupParams: function setupParams(helper, paramSize, params) {
        var options = {}, contexts = [], types = [], ids = [], objectArgs = !params, param = undefined;
        if (objectArgs) params = [];
        options.name = this.quotedString(helper);
        options.hash = this.popStack();
        if (this.trackIds) options.hashIds = this.popStack();
        if (this.stringParams) {
            options.hashTypes = this.popStack();
            options.hashContexts = this.popStack();
        }
        var inverse = this.popStack(), program = this.popStack();
        // Avoid setting fn and inverse if neither are set. This allows
        // helpers to do a check for `if (options.fn)`
        if (program || inverse) {
            options.fn = program || "container.noop";
            options.inverse = inverse || "container.noop";
        }
        // The parameters go on to the stack in order (making sure that they are evaluated in order)
        // so we need to pop them off the stack in reverse order
        var i = paramSize;
        while(i--){
            param = this.popStack();
            params[i] = param;
            if (this.trackIds) ids[i] = this.popStack();
            if (this.stringParams) {
                types[i] = this.popStack();
                contexts[i] = this.popStack();
            }
        }
        if (objectArgs) options.args = this.source.generateArray(params);
        if (this.trackIds) options.ids = this.source.generateArray(ids);
        if (this.stringParams) {
            options.types = this.source.generateArray(types);
            options.contexts = this.source.generateArray(contexts);
        }
        if (this.options.data) options.data = "data";
        if (this.useBlockParams) options.blockParams = "blockParams";
        return options;
    },
    setupHelperArgs: function setupHelperArgs(helper, paramSize, params, useRegister) {
        var options = this.setupParams(helper, paramSize, params);
        options.loc = JSON.stringify(this.source.currentLocation);
        options = this.objectLiteral(options);
        if (useRegister) {
            this.useRegister("options");
            params.push("options");
            return [
                "options=",
                options
            ];
        } else if (params) {
            params.push(options);
            return "";
        } else return options;
    }
};
(function() {
    var reservedWords = "break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield await null true false".split(" ");
    var compilerWords = JavaScriptCompiler.RESERVED_WORDS = {};
    for(var i = 0, l = reservedWords.length; i < l; i++)compilerWords[reservedWords[i]] = true;
})();
/**
 * @deprecated May be removed in the next major version
 */ JavaScriptCompiler.isValidJavaScriptVariableName = function(name) {
    return !JavaScriptCompiler.RESERVED_WORDS[name] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(name);
};
function strictLookup(requireTerminal, compiler, parts, type) {
    var stack = compiler.popStack(), i = 0, len = parts.length;
    if (requireTerminal) len--;
    for(; i < len; i++)stack = compiler.nameLookup(stack, parts[i], type);
    if (requireTerminal) return [
        compiler.aliasable("container.strict"),
        "(",
        stack,
        ", ",
        compiler.quotedString(parts[i]),
        ", ",
        JSON.stringify(compiler.source.currentLocation),
        " )"
    ];
    else return stack;
}
exports["default"] = JavaScriptCompiler;
module.exports = exports["default"];

},{"../base":"dt4wA","../exception":"gO63O","../utils":"1az9o","./code-gen":"62qpE"}],"62qpE":[function(require,module,exports) {
/* global define */ "use strict";
exports.__esModule = true;
var _utils = require("../utils");
var SourceNode = undefined;
try {
    /* istanbul ignore next */ if (typeof define !== "function" || !define.amd) {
        // We don't support this in AMD environments. For these environments, we asusme that
        // they are running on the browser and thus have no need for the source-map library.
        var SourceMap = require("source-map");
        SourceNode = SourceMap.SourceNode;
    }
} catch (err) {}
/* NOP */ /* istanbul ignore if: tested but not covered in istanbul due to dist build  */ if (!SourceNode) {
    SourceNode = function(line, column, srcFile, chunks) {
        this.src = "";
        if (chunks) this.add(chunks);
    };
    /* istanbul ignore next */ SourceNode.prototype = {
        add: function add(chunks) {
            if (_utils.isArray(chunks)) chunks = chunks.join("");
            this.src += chunks;
        },
        prepend: function prepend(chunks) {
            if (_utils.isArray(chunks)) chunks = chunks.join("");
            this.src = chunks + this.src;
        },
        toStringWithSourceMap: function toStringWithSourceMap() {
            return {
                code: this.toString()
            };
        },
        toString: function toString() {
            return this.src;
        }
    };
}
function castChunk(chunk, codeGen, loc) {
    if (_utils.isArray(chunk)) {
        var ret = [];
        for(var i = 0, len = chunk.length; i < len; i++)ret.push(codeGen.wrap(chunk[i], loc));
        return ret;
    } else if (typeof chunk === "boolean" || typeof chunk === "number") // Handle primitives that the SourceNode will throw up on
    return chunk + "";
    return chunk;
}
function CodeGen(srcFile) {
    this.srcFile = srcFile;
    this.source = [];
}
CodeGen.prototype = {
    isEmpty: function isEmpty() {
        return !this.source.length;
    },
    prepend: function prepend(source, loc) {
        this.source.unshift(this.wrap(source, loc));
    },
    push: function push(source, loc) {
        this.source.push(this.wrap(source, loc));
    },
    merge: function merge() {
        var source = this.empty();
        this.each(function(line) {
            source.add([
                "  ",
                line,
                "\n"
            ]);
        });
        return source;
    },
    each: function each(iter) {
        for(var i = 0, len = this.source.length; i < len; i++)iter(this.source[i]);
    },
    empty: function empty() {
        var loc = this.currentLocation || {
            start: {}
        };
        return new SourceNode(loc.start.line, loc.start.column, this.srcFile);
    },
    wrap: function wrap(chunk) {
        var loc = arguments.length <= 1 || arguments[1] === undefined ? this.currentLocation || {
            start: {}
        } : arguments[1];
        if (chunk instanceof SourceNode) return chunk;
        chunk = castChunk(chunk, this, loc);
        return new SourceNode(loc.start.line, loc.start.column, this.srcFile, chunk);
    },
    functionCall: function functionCall(fn, type, params) {
        params = this.generateList(params);
        return this.wrap([
            fn,
            type ? "." + type + "(" : "(",
            params,
            ")"
        ]);
    },
    quotedString: function quotedString(str) {
        return '"' + (str + "").replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\u2028/g, "\\u2028") // Per Ecma-262 7.3 + 7.8.4
        .replace(/\u2029/g, "\\u2029") + '"';
    },
    objectLiteral: function objectLiteral(obj) {
        // istanbul ignore next
        var _this = this;
        var pairs = [];
        Object.keys(obj).forEach(function(key) {
            var value = castChunk(obj[key], _this);
            if (value !== "undefined") pairs.push([
                _this.quotedString(key),
                ":",
                value
            ]);
        });
        var ret = this.generateList(pairs);
        ret.prepend("{");
        ret.add("}");
        return ret;
    },
    generateList: function generateList(entries) {
        var ret = this.empty();
        for(var i = 0, len = entries.length; i < len; i++){
            if (i) ret.add(",");
            ret.add(castChunk(entries[i], this));
        }
        return ret;
    },
    generateArray: function generateArray(entries) {
        var ret = this.generateList(entries);
        ret.prepend("[");
        ret.add("]");
        return ret;
    }
};
exports["default"] = CodeGen;
module.exports = exports["default"];

},{"../utils":"1az9o","source-map":"6klNI"}],"6klNI":[function(require,module,exports) {
/*
 * Copyright 2009-2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE.txt or:
 * http://opensource.org/licenses/BSD-3-Clause
 */ exports.SourceMapGenerator = require("./lib/source-map-generator").SourceMapGenerator;
exports.SourceMapConsumer = require("./lib/source-map-consumer").SourceMapConsumer;
exports.SourceNode = require("./lib/source-node").SourceNode;

},{"./lib/source-map-generator":"eAEEU","./lib/source-map-consumer":"29bOB","./lib/source-node":"RKG6B"}],"eAEEU":[function(require,module,exports) {
/* -*- Mode: js; js-indent-level: 2; -*- */ /*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */ var base64VLQ = require("./base64-vlq");
var util = require("./util");
var ArraySet = require("./array-set").ArraySet;
var MappingList = require("./mapping-list").MappingList;
/**
 * An instance of the SourceMapGenerator represents a source map which is
 * being built incrementally. You may pass an object with the following
 * properties:
 *
 *   - file: The filename of the generated source.
 *   - sourceRoot: A root for all relative URLs in this source map.
 */ function SourceMapGenerator(aArgs) {
    if (!aArgs) aArgs = {};
    this._file = util.getArg(aArgs, "file", null);
    this._sourceRoot = util.getArg(aArgs, "sourceRoot", null);
    this._skipValidation = util.getArg(aArgs, "skipValidation", false);
    this._sources = new ArraySet();
    this._names = new ArraySet();
    this._mappings = new MappingList();
    this._sourcesContents = null;
}
SourceMapGenerator.prototype._version = 3;
/**
 * Creates a new SourceMapGenerator based on a SourceMapConsumer
 *
 * @param aSourceMapConsumer The SourceMap.
 */ SourceMapGenerator.fromSourceMap = function SourceMapGenerator_fromSourceMap(aSourceMapConsumer) {
    var sourceRoot = aSourceMapConsumer.sourceRoot;
    var generator = new SourceMapGenerator({
        file: aSourceMapConsumer.file,
        sourceRoot: sourceRoot
    });
    aSourceMapConsumer.eachMapping(function(mapping) {
        var newMapping = {
            generated: {
                line: mapping.generatedLine,
                column: mapping.generatedColumn
            }
        };
        if (mapping.source != null) {
            newMapping.source = mapping.source;
            if (sourceRoot != null) newMapping.source = util.relative(sourceRoot, newMapping.source);
            newMapping.original = {
                line: mapping.originalLine,
                column: mapping.originalColumn
            };
            if (mapping.name != null) newMapping.name = mapping.name;
        }
        generator.addMapping(newMapping);
    });
    aSourceMapConsumer.sources.forEach(function(sourceFile) {
        var sourceRelative = sourceFile;
        if (sourceRoot !== null) sourceRelative = util.relative(sourceRoot, sourceFile);
        if (!generator._sources.has(sourceRelative)) generator._sources.add(sourceRelative);
        var content = aSourceMapConsumer.sourceContentFor(sourceFile);
        if (content != null) generator.setSourceContent(sourceFile, content);
    });
    return generator;
};
/**
 * Add a single mapping from original source line and column to the generated
 * source's line and column for this source map being created. The mapping
 * object should have the following properties:
 *
 *   - generated: An object with the generated line and column positions.
 *   - original: An object with the original line and column positions.
 *   - source: The original source file (relative to the sourceRoot).
 *   - name: An optional original token name for this mapping.
 */ SourceMapGenerator.prototype.addMapping = function SourceMapGenerator_addMapping(aArgs) {
    var generated = util.getArg(aArgs, "generated");
    var original = util.getArg(aArgs, "original", null);
    var source = util.getArg(aArgs, "source", null);
    var name = util.getArg(aArgs, "name", null);
    if (!this._skipValidation) this._validateMapping(generated, original, source, name);
    if (source != null) {
        source = String(source);
        if (!this._sources.has(source)) this._sources.add(source);
    }
    if (name != null) {
        name = String(name);
        if (!this._names.has(name)) this._names.add(name);
    }
    this._mappings.add({
        generatedLine: generated.line,
        generatedColumn: generated.column,
        originalLine: original != null && original.line,
        originalColumn: original != null && original.column,
        source: source,
        name: name
    });
};
/**
 * Set the source content for a source file.
 */ SourceMapGenerator.prototype.setSourceContent = function SourceMapGenerator_setSourceContent(aSourceFile, aSourceContent) {
    var source = aSourceFile;
    if (this._sourceRoot != null) source = util.relative(this._sourceRoot, source);
    if (aSourceContent != null) {
        // Add the source content to the _sourcesContents map.
        // Create a new _sourcesContents map if the property is null.
        if (!this._sourcesContents) this._sourcesContents = Object.create(null);
        this._sourcesContents[util.toSetString(source)] = aSourceContent;
    } else if (this._sourcesContents) {
        // Remove the source file from the _sourcesContents map.
        // If the _sourcesContents map is empty, set the property to null.
        delete this._sourcesContents[util.toSetString(source)];
        if (Object.keys(this._sourcesContents).length === 0) this._sourcesContents = null;
    }
};
/**
 * Applies the mappings of a sub-source-map for a specific source file to the
 * source map being generated. Each mapping to the supplied source file is
 * rewritten using the supplied source map. Note: The resolution for the
 * resulting mappings is the minimium of this map and the supplied map.
 *
 * @param aSourceMapConsumer The source map to be applied.
 * @param aSourceFile Optional. The filename of the source file.
 *        If omitted, SourceMapConsumer's file property will be used.
 * @param aSourceMapPath Optional. The dirname of the path to the source map
 *        to be applied. If relative, it is relative to the SourceMapConsumer.
 *        This parameter is needed when the two source maps aren't in the same
 *        directory, and the source map to be applied contains relative source
 *        paths. If so, those relative source paths need to be rewritten
 *        relative to the SourceMapGenerator.
 */ SourceMapGenerator.prototype.applySourceMap = function SourceMapGenerator_applySourceMap(aSourceMapConsumer, aSourceFile, aSourceMapPath) {
    var sourceFile1 = aSourceFile;
    // If aSourceFile is omitted, we will use the file property of the SourceMap
    if (aSourceFile == null) {
        if (aSourceMapConsumer.file == null) throw new Error('SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map\'s "file" property. Both were omitted.');
        sourceFile1 = aSourceMapConsumer.file;
    }
    var sourceRoot = this._sourceRoot;
    // Make "sourceFile" relative if an absolute Url is passed.
    if (sourceRoot != null) sourceFile1 = util.relative(sourceRoot, sourceFile1);
    // Applying the SourceMap can add and remove items from the sources and
    // the names array.
    var newSources = new ArraySet();
    var newNames = new ArraySet();
    // Find mappings for the "sourceFile"
    this._mappings.unsortedForEach(function(mapping) {
        if (mapping.source === sourceFile1 && mapping.originalLine != null) {
            // Check if it can be mapped by the source map, then update the mapping.
            var original = aSourceMapConsumer.originalPositionFor({
                line: mapping.originalLine,
                column: mapping.originalColumn
            });
            if (original.source != null) {
                // Copy mapping
                mapping.source = original.source;
                if (aSourceMapPath != null) mapping.source = util.join(aSourceMapPath, mapping.source);
                if (sourceRoot != null) mapping.source = util.relative(sourceRoot, mapping.source);
                mapping.originalLine = original.line;
                mapping.originalColumn = original.column;
                if (original.name != null) mapping.name = original.name;
            }
        }
        var source = mapping.source;
        if (source != null && !newSources.has(source)) newSources.add(source);
        var name = mapping.name;
        if (name != null && !newNames.has(name)) newNames.add(name);
    }, this);
    this._sources = newSources;
    this._names = newNames;
    // Copy sourcesContents of applied map.
    aSourceMapConsumer.sources.forEach(function(sourceFile) {
        var content = aSourceMapConsumer.sourceContentFor(sourceFile);
        if (content != null) {
            if (aSourceMapPath != null) sourceFile = util.join(aSourceMapPath, sourceFile);
            if (sourceRoot != null) sourceFile = util.relative(sourceRoot, sourceFile);
            this.setSourceContent(sourceFile, content);
        }
    }, this);
};
/**
 * A mapping can have one of the three levels of data:
 *
 *   1. Just the generated position.
 *   2. The Generated position, original position, and original source.
 *   3. Generated and original position, original source, as well as a name
 *      token.
 *
 * To maintain consistency, we validate that any new mapping being added falls
 * in to one of these categories.
 */ SourceMapGenerator.prototype._validateMapping = function SourceMapGenerator_validateMapping(aGenerated, aOriginal, aSource, aName) {
    // When aOriginal is truthy but has empty values for .line and .column,
    // it is most likely a programmer error. In this case we throw a very
    // specific error message to try to guide them the right way.
    // For example: https://github.com/Polymer/polymer-bundler/pull/519
    if (aOriginal && typeof aOriginal.line !== "number" && typeof aOriginal.column !== "number") throw new Error("original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values.");
    if (aGenerated && "line" in aGenerated && "column" in aGenerated && aGenerated.line > 0 && aGenerated.column >= 0 && !aOriginal && !aSource && !aName) // Case 1.
    return;
    else if (aGenerated && "line" in aGenerated && "column" in aGenerated && aOriginal && "line" in aOriginal && "column" in aOriginal && aGenerated.line > 0 && aGenerated.column >= 0 && aOriginal.line > 0 && aOriginal.column >= 0 && aSource) // Cases 2 and 3.
    return;
    else throw new Error("Invalid mapping: " + JSON.stringify({
        generated: aGenerated,
        source: aSource,
        original: aOriginal,
        name: aName
    }));
};
/**
 * Serialize the accumulated mappings in to the stream of base 64 VLQs
 * specified by the source map format.
 */ SourceMapGenerator.prototype._serializeMappings = function SourceMapGenerator_serializeMappings() {
    var previousGeneratedColumn = 0;
    var previousGeneratedLine = 1;
    var previousOriginalColumn = 0;
    var previousOriginalLine = 0;
    var previousName = 0;
    var previousSource = 0;
    var result = "";
    var next;
    var mapping;
    var nameIdx;
    var sourceIdx;
    var mappings = this._mappings.toArray();
    for(var i = 0, len = mappings.length; i < len; i++){
        mapping = mappings[i];
        next = "";
        if (mapping.generatedLine !== previousGeneratedLine) {
            previousGeneratedColumn = 0;
            while(mapping.generatedLine !== previousGeneratedLine){
                next += ";";
                previousGeneratedLine++;
            }
        } else if (i > 0) {
            if (!util.compareByGeneratedPositionsInflated(mapping, mappings[i - 1])) continue;
            next += ",";
        }
        next += base64VLQ.encode(mapping.generatedColumn - previousGeneratedColumn);
        previousGeneratedColumn = mapping.generatedColumn;
        if (mapping.source != null) {
            sourceIdx = this._sources.indexOf(mapping.source);
            next += base64VLQ.encode(sourceIdx - previousSource);
            previousSource = sourceIdx;
            // lines are stored 0-based in SourceMap spec version 3
            next += base64VLQ.encode(mapping.originalLine - 1 - previousOriginalLine);
            previousOriginalLine = mapping.originalLine - 1;
            next += base64VLQ.encode(mapping.originalColumn - previousOriginalColumn);
            previousOriginalColumn = mapping.originalColumn;
            if (mapping.name != null) {
                nameIdx = this._names.indexOf(mapping.name);
                next += base64VLQ.encode(nameIdx - previousName);
                previousName = nameIdx;
            }
        }
        result += next;
    }
    return result;
};
SourceMapGenerator.prototype._generateSourcesContent = function SourceMapGenerator_generateSourcesContent(aSources, aSourceRoot) {
    return aSources.map(function(source) {
        if (!this._sourcesContents) return null;
        if (aSourceRoot != null) source = util.relative(aSourceRoot, source);
        var key = util.toSetString(source);
        return Object.prototype.hasOwnProperty.call(this._sourcesContents, key) ? this._sourcesContents[key] : null;
    }, this);
};
/**
 * Externalize the source map.
 */ SourceMapGenerator.prototype.toJSON = function SourceMapGenerator_toJSON() {
    var map = {
        version: this._version,
        sources: this._sources.toArray(),
        names: this._names.toArray(),
        mappings: this._serializeMappings()
    };
    if (this._file != null) map.file = this._file;
    if (this._sourceRoot != null) map.sourceRoot = this._sourceRoot;
    if (this._sourcesContents) map.sourcesContent = this._generateSourcesContent(map.sources, map.sourceRoot);
    return map;
};
/**
 * Render the source map being generated to a string.
 */ SourceMapGenerator.prototype.toString = function SourceMapGenerator_toString() {
    return JSON.stringify(this.toJSON());
};
exports.SourceMapGenerator = SourceMapGenerator;

},{"./base64-vlq":"8tI6q","./util":"tCCrk","./array-set":"5GPwW","./mapping-list":"6uR3M"}],"8tI6q":[function(require,module,exports) {
/* -*- Mode: js; js-indent-level: 2; -*- */ /*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 *
 * Based on the Base 64 VLQ implementation in Closure Compiler:
 * https://code.google.com/p/closure-compiler/source/browse/trunk/src/com/google/debugging/sourcemap/Base64VLQ.java
 *
 * Copyright 2011 The Closure Compiler Authors. All rights reserved.
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *  * Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above
 *    copyright notice, this list of conditions and the following
 *    disclaimer in the documentation and/or other materials provided
 *    with the distribution.
 *  * Neither the name of Google Inc. nor the names of its
 *    contributors may be used to endorse or promote products derived
 *    from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */ var base64 = require("./base64");
// A single base 64 digit can contain 6 bits of data. For the base 64 variable
// length quantities we use in the source map spec, the first bit is the sign,
// the next four bits are the actual value, and the 6th bit is the
// continuation bit. The continuation bit tells us whether there are more
// digits in this value following this digit.
//
//   Continuation
//   |    Sign
//   |    |
//   V    V
//   101011
var VLQ_BASE_SHIFT = 5;
// binary: 100000
var VLQ_BASE = 1 << VLQ_BASE_SHIFT;
// binary: 011111
var VLQ_BASE_MASK = VLQ_BASE - 1;
// binary: 100000
var VLQ_CONTINUATION_BIT = VLQ_BASE;
/**
 * Converts from a two-complement value to a value where the sign bit is
 * placed in the least significant bit.  For example, as decimals:
 *   1 becomes 2 (10 binary), -1 becomes 3 (11 binary)
 *   2 becomes 4 (100 binary), -2 becomes 5 (101 binary)
 */ function toVLQSigned(aValue) {
    return aValue < 0 ? (-aValue << 1) + 1 : (aValue << 1) + 0;
}
/**
 * Converts to a two-complement value from a value where the sign bit is
 * placed in the least significant bit.  For example, as decimals:
 *   2 (10 binary) becomes 1, 3 (11 binary) becomes -1
 *   4 (100 binary) becomes 2, 5 (101 binary) becomes -2
 */ function fromVLQSigned(aValue) {
    var isNegative = (aValue & 1) === 1;
    var shifted = aValue >> 1;
    return isNegative ? -shifted : shifted;
}
/**
 * Returns the base 64 VLQ encoded value.
 */ exports.encode = function base64VLQ_encode(aValue) {
    var encoded = "";
    var digit;
    var vlq = toVLQSigned(aValue);
    do {
        digit = vlq & VLQ_BASE_MASK;
        vlq >>>= VLQ_BASE_SHIFT;
        if (vlq > 0) // There are still more digits in this value, so we must make sure the
        // continuation bit is marked.
        digit |= VLQ_CONTINUATION_BIT;
        encoded += base64.encode(digit);
    }while (vlq > 0);
    return encoded;
};
/**
 * Decodes the next base 64 VLQ value from the given string and returns the
 * value and the rest of the string via the out parameter.
 */ exports.decode = function base64VLQ_decode(aStr, aIndex, aOutParam) {
    var strLen = aStr.length;
    var result = 0;
    var shift = 0;
    var continuation, digit;
    do {
        if (aIndex >= strLen) throw new Error("Expected more digits in base 64 VLQ value.");
        digit = base64.decode(aStr.charCodeAt(aIndex++));
        if (digit === -1) throw new Error("Invalid base64 digit: " + aStr.charAt(aIndex - 1));
        continuation = !!(digit & VLQ_CONTINUATION_BIT);
        digit &= VLQ_BASE_MASK;
        result = result + (digit << shift);
        shift += VLQ_BASE_SHIFT;
    }while (continuation);
    aOutParam.value = fromVLQSigned(result);
    aOutParam.rest = aIndex;
};

},{"./base64":"1nPpB"}],"1nPpB":[function(require,module,exports) {
/* -*- Mode: js; js-indent-level: 2; -*- */ /*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */ var intToCharMap = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
/**
 * Encode an integer in the range of 0 to 63 to a single base 64 digit.
 */ exports.encode = function(number) {
    if (0 <= number && number < intToCharMap.length) return intToCharMap[number];
    throw new TypeError("Must be between 0 and 63: " + number);
};
/**
 * Decode a single base 64 character code digit to an integer. Returns -1 on
 * failure.
 */ exports.decode = function(charCode) {
    var bigA = 65; // 'A'
    var bigZ = 90; // 'Z'
    var littleA = 97; // 'a'
    var littleZ = 122; // 'z'
    var zero = 48; // '0'
    var nine = 57; // '9'
    var plus = 43; // '+'
    var slash = 47; // '/'
    var littleOffset = 26;
    var numberOffset = 52;
    // 0 - 25: ABCDEFGHIJKLMNOPQRSTUVWXYZ
    if (bigA <= charCode && charCode <= bigZ) return charCode - bigA;
    // 26 - 51: abcdefghijklmnopqrstuvwxyz
    if (littleA <= charCode && charCode <= littleZ) return charCode - littleA + littleOffset;
    // 52 - 61: 0123456789
    if (zero <= charCode && charCode <= nine) return charCode - zero + numberOffset;
    // 62: +
    if (charCode == plus) return 62;
    // 63: /
    if (charCode == slash) return 63;
    // Invalid base64 digit.
    return -1;
};

},{}],"tCCrk":[function(require,module,exports) {
/* -*- Mode: js; js-indent-level: 2; -*- */ /*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */ /**
 * This is a helper function for getting values from parameter/options
 * objects.
 *
 * @param args The object we are extracting values from
 * @param name The name of the property we are getting.
 * @param defaultValue An optional value to return if the property is missing
 * from the object. If this is not specified and the property is missing, an
 * error will be thrown.
 */ function getArg(aArgs, aName, aDefaultValue) {
    if (aName in aArgs) return aArgs[aName];
    else if (arguments.length === 3) return aDefaultValue;
    else throw new Error('"' + aName + '" is a required argument.');
}
exports.getArg = getArg;
var urlRegexp = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/;
var dataUrlRegexp = /^data:.+\,.+$/;
function urlParse(aUrl) {
    var match = aUrl.match(urlRegexp);
    if (!match) return null;
    return {
        scheme: match[1],
        auth: match[2],
        host: match[3],
        port: match[4],
        path: match[5]
    };
}
exports.urlParse = urlParse;
function urlGenerate(aParsedUrl) {
    var url = "";
    if (aParsedUrl.scheme) url += aParsedUrl.scheme + ":";
    url += "//";
    if (aParsedUrl.auth) url += aParsedUrl.auth + "@";
    if (aParsedUrl.host) url += aParsedUrl.host;
    if (aParsedUrl.port) url += ":" + aParsedUrl.port;
    if (aParsedUrl.path) url += aParsedUrl.path;
    return url;
}
exports.urlGenerate = urlGenerate;
/**
 * Normalizes a path, or the path portion of a URL:
 *
 * - Replaces consecutive slashes with one slash.
 * - Removes unnecessary '.' parts.
 * - Removes unnecessary '<dir>/..' parts.
 *
 * Based on code in the Node.js 'path' core module.
 *
 * @param aPath The path or url to normalize.
 */ function normalize(aPath) {
    var path = aPath;
    var url = urlParse(aPath);
    if (url) {
        if (!url.path) return aPath;
        path = url.path;
    }
    var isAbsolute = exports.isAbsolute(path);
    var parts = path.split(/\/+/);
    for(var part, up = 0, i = parts.length - 1; i >= 0; i--){
        part = parts[i];
        if (part === ".") parts.splice(i, 1);
        else if (part === "..") up++;
        else if (up > 0) {
            if (part === "") {
                // The first part is blank if the path is absolute. Trying to go
                // above the root is a no-op. Therefore we can remove all '..' parts
                // directly after the root.
                parts.splice(i + 1, up);
                up = 0;
            } else {
                parts.splice(i, 2);
                up--;
            }
        }
    }
    path = parts.join("/");
    if (path === "") path = isAbsolute ? "/" : ".";
    if (url) {
        url.path = path;
        return urlGenerate(url);
    }
    return path;
}
exports.normalize = normalize;
/**
 * Joins two paths/URLs.
 *
 * @param aRoot The root path or URL.
 * @param aPath The path or URL to be joined with the root.
 *
 * - If aPath is a URL or a data URI, aPath is returned, unless aPath is a
 *   scheme-relative URL: Then the scheme of aRoot, if any, is prepended
 *   first.
 * - Otherwise aPath is a path. If aRoot is a URL, then its path portion
 *   is updated with the result and aRoot is returned. Otherwise the result
 *   is returned.
 *   - If aPath is absolute, the result is aPath.
 *   - Otherwise the two paths are joined with a slash.
 * - Joining for example 'http://' and 'www.example.com' is also supported.
 */ function join(aRoot, aPath) {
    if (aRoot === "") aRoot = ".";
    if (aPath === "") aPath = ".";
    var aPathUrl = urlParse(aPath);
    var aRootUrl = urlParse(aRoot);
    if (aRootUrl) aRoot = aRootUrl.path || "/";
    // `join(foo, '//www.example.org')`
    if (aPathUrl && !aPathUrl.scheme) {
        if (aRootUrl) aPathUrl.scheme = aRootUrl.scheme;
        return urlGenerate(aPathUrl);
    }
    if (aPathUrl || aPath.match(dataUrlRegexp)) return aPath;
    // `join('http://', 'www.example.com')`
    if (aRootUrl && !aRootUrl.host && !aRootUrl.path) {
        aRootUrl.host = aPath;
        return urlGenerate(aRootUrl);
    }
    var joined = aPath.charAt(0) === "/" ? aPath : normalize(aRoot.replace(/\/+$/, "") + "/" + aPath);
    if (aRootUrl) {
        aRootUrl.path = joined;
        return urlGenerate(aRootUrl);
    }
    return joined;
}
exports.join = join;
exports.isAbsolute = function(aPath) {
    return aPath.charAt(0) === "/" || urlRegexp.test(aPath);
};
/**
 * Make a path relative to a URL or another path.
 *
 * @param aRoot The root path or URL.
 * @param aPath The path or URL to be made relative to aRoot.
 */ function relative(aRoot, aPath) {
    if (aRoot === "") aRoot = ".";
    aRoot = aRoot.replace(/\/$/, "");
    // It is possible for the path to be above the root. In this case, simply
    // checking whether the root is a prefix of the path won't work. Instead, we
    // need to remove components from the root one by one, until either we find
    // a prefix that fits, or we run out of components to remove.
    var level = 0;
    while(aPath.indexOf(aRoot + "/") !== 0){
        var index = aRoot.lastIndexOf("/");
        if (index < 0) return aPath;
        // If the only part of the root that is left is the scheme (i.e. http://,
        // file:///, etc.), one or more slashes (/), or simply nothing at all, we
        // have exhausted all components, so the path is not relative to the root.
        aRoot = aRoot.slice(0, index);
        if (aRoot.match(/^([^\/]+:\/)?\/*$/)) return aPath;
        ++level;
    }
    // Make sure we add a "../" for each component we removed from the root.
    return Array(level + 1).join("../") + aPath.substr(aRoot.length + 1);
}
exports.relative = relative;
var supportsNullProto = function() {
    var obj = Object.create(null);
    return !("__proto__" in obj);
}();
function identity(s) {
    return s;
}
/**
 * Because behavior goes wacky when you set `__proto__` on objects, we
 * have to prefix all the strings in our set with an arbitrary character.
 *
 * See https://github.com/mozilla/source-map/pull/31 and
 * https://github.com/mozilla/source-map/issues/30
 *
 * @param String aStr
 */ function toSetString(aStr) {
    if (isProtoString(aStr)) return "$" + aStr;
    return aStr;
}
exports.toSetString = supportsNullProto ? identity : toSetString;
function fromSetString(aStr) {
    if (isProtoString(aStr)) return aStr.slice(1);
    return aStr;
}
exports.fromSetString = supportsNullProto ? identity : fromSetString;
function isProtoString(s) {
    if (!s) return false;
    var length = s.length;
    if (length < 9 /* "__proto__".length */ ) return false;
    if (s.charCodeAt(length - 1) !== 95 /* '_' */  || s.charCodeAt(length - 2) !== 95 /* '_' */  || s.charCodeAt(length - 3) !== 111 /* 'o' */  || s.charCodeAt(length - 4) !== 116 /* 't' */  || s.charCodeAt(length - 5) !== 111 /* 'o' */  || s.charCodeAt(length - 6) !== 114 /* 'r' */  || s.charCodeAt(length - 7) !== 112 /* 'p' */  || s.charCodeAt(length - 8) !== 95 /* '_' */  || s.charCodeAt(length - 9) !== 95 /* '_' */ ) return false;
    for(var i = length - 10; i >= 0; i--){
        if (s.charCodeAt(i) !== 36 /* '$' */ ) return false;
    }
    return true;
}
/**
 * Comparator between two mappings where the original positions are compared.
 *
 * Optionally pass in `true` as `onlyCompareGenerated` to consider two
 * mappings with the same original source/line/column, but different generated
 * line and column the same. Useful when searching for a mapping with a
 * stubbed out mapping.
 */ function compareByOriginalPositions(mappingA, mappingB, onlyCompareOriginal) {
    var cmp = strcmp(mappingA.source, mappingB.source);
    if (cmp !== 0) return cmp;
    cmp = mappingA.originalLine - mappingB.originalLine;
    if (cmp !== 0) return cmp;
    cmp = mappingA.originalColumn - mappingB.originalColumn;
    if (cmp !== 0 || onlyCompareOriginal) return cmp;
    cmp = mappingA.generatedColumn - mappingB.generatedColumn;
    if (cmp !== 0) return cmp;
    cmp = mappingA.generatedLine - mappingB.generatedLine;
    if (cmp !== 0) return cmp;
    return strcmp(mappingA.name, mappingB.name);
}
exports.compareByOriginalPositions = compareByOriginalPositions;
/**
 * Comparator between two mappings with deflated source and name indices where
 * the generated positions are compared.
 *
 * Optionally pass in `true` as `onlyCompareGenerated` to consider two
 * mappings with the same generated line and column, but different
 * source/name/original line and column the same. Useful when searching for a
 * mapping with a stubbed out mapping.
 */ function compareByGeneratedPositionsDeflated(mappingA, mappingB, onlyCompareGenerated) {
    var cmp = mappingA.generatedLine - mappingB.generatedLine;
    if (cmp !== 0) return cmp;
    cmp = mappingA.generatedColumn - mappingB.generatedColumn;
    if (cmp !== 0 || onlyCompareGenerated) return cmp;
    cmp = strcmp(mappingA.source, mappingB.source);
    if (cmp !== 0) return cmp;
    cmp = mappingA.originalLine - mappingB.originalLine;
    if (cmp !== 0) return cmp;
    cmp = mappingA.originalColumn - mappingB.originalColumn;
    if (cmp !== 0) return cmp;
    return strcmp(mappingA.name, mappingB.name);
}
exports.compareByGeneratedPositionsDeflated = compareByGeneratedPositionsDeflated;
function strcmp(aStr1, aStr2) {
    if (aStr1 === aStr2) return 0;
    if (aStr1 === null) return 1; // aStr2 !== null
    if (aStr2 === null) return -1; // aStr1 !== null
    if (aStr1 > aStr2) return 1;
    return -1;
}
/**
 * Comparator between two mappings with inflated source and name strings where
 * the generated positions are compared.
 */ function compareByGeneratedPositionsInflated(mappingA, mappingB) {
    var cmp = mappingA.generatedLine - mappingB.generatedLine;
    if (cmp !== 0) return cmp;
    cmp = mappingA.generatedColumn - mappingB.generatedColumn;
    if (cmp !== 0) return cmp;
    cmp = strcmp(mappingA.source, mappingB.source);
    if (cmp !== 0) return cmp;
    cmp = mappingA.originalLine - mappingB.originalLine;
    if (cmp !== 0) return cmp;
    cmp = mappingA.originalColumn - mappingB.originalColumn;
    if (cmp !== 0) return cmp;
    return strcmp(mappingA.name, mappingB.name);
}
exports.compareByGeneratedPositionsInflated = compareByGeneratedPositionsInflated;
/**
 * Strip any JSON XSSI avoidance prefix from the string (as documented
 * in the source maps specification), and then parse the string as
 * JSON.
 */ function parseSourceMapInput(str) {
    return JSON.parse(str.replace(/^\)]}'[^\n]*\n/, ""));
}
exports.parseSourceMapInput = parseSourceMapInput;
/**
 * Compute the URL of a source given the the source root, the source's
 * URL, and the source map's URL.
 */ function computeSourceURL(sourceRoot, sourceURL, sourceMapURL) {
    sourceURL = sourceURL || "";
    if (sourceRoot) {
        // This follows what Chrome does.
        if (sourceRoot[sourceRoot.length - 1] !== "/" && sourceURL[0] !== "/") sourceRoot += "/";
        // The spec says:
        //   Line 4: An optional source root, useful for relocating source
        //   files on a server or removing repeated values in the
        //   “sources” entry.  This value is prepended to the individual
        //   entries in the “source” field.
        sourceURL = sourceRoot + sourceURL;
    }
    // Historically, SourceMapConsumer did not take the sourceMapURL as
    // a parameter.  This mode is still somewhat supported, which is why
    // this code block is conditional.  However, it's preferable to pass
    // the source map URL to SourceMapConsumer, so that this function
    // can implement the source URL resolution algorithm as outlined in
    // the spec.  This block is basically the equivalent of:
    //    new URL(sourceURL, sourceMapURL).toString()
    // ... except it avoids using URL, which wasn't available in the
    // older releases of node still supported by this library.
    //
    // The spec says:
    //   If the sources are not absolute URLs after prepending of the
    //   “sourceRoot”, the sources are resolved relative to the
    //   SourceMap (like resolving script src in a html document).
    if (sourceMapURL) {
        var parsed = urlParse(sourceMapURL);
        if (!parsed) throw new Error("sourceMapURL could not be parsed");
        if (parsed.path) {
            // Strip the last path component, but keep the "/".
            var index = parsed.path.lastIndexOf("/");
            if (index >= 0) parsed.path = parsed.path.substring(0, index + 1);
        }
        sourceURL = join(urlGenerate(parsed), sourceURL);
    }
    return normalize(sourceURL);
}
exports.computeSourceURL = computeSourceURL;

},{}],"5GPwW":[function(require,module,exports) {
/* -*- Mode: js; js-indent-level: 2; -*- */ /*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */ var util = require("./util");
var has = Object.prototype.hasOwnProperty;
var hasNativeMap = typeof Map !== "undefined";
/**
 * A data structure which is a combination of an array and a set. Adding a new
 * member is O(1), testing for membership is O(1), and finding the index of an
 * element is O(1). Removing elements from the set is not supported. Only
 * strings are supported for membership.
 */ function ArraySet() {
    this._array = [];
    this._set = hasNativeMap ? new Map() : Object.create(null);
}
/**
 * Static method for creating ArraySet instances from an existing array.
 */ ArraySet.fromArray = function ArraySet_fromArray(aArray, aAllowDuplicates) {
    var set = new ArraySet();
    for(var i = 0, len = aArray.length; i < len; i++)set.add(aArray[i], aAllowDuplicates);
    return set;
};
/**
 * Return how many unique items are in this ArraySet. If duplicates have been
 * added, than those do not count towards the size.
 *
 * @returns Number
 */ ArraySet.prototype.size = function ArraySet_size() {
    return hasNativeMap ? this._set.size : Object.getOwnPropertyNames(this._set).length;
};
/**
 * Add the given string to this set.
 *
 * @param String aStr
 */ ArraySet.prototype.add = function ArraySet_add(aStr, aAllowDuplicates) {
    var sStr = hasNativeMap ? aStr : util.toSetString(aStr);
    var isDuplicate = hasNativeMap ? this.has(aStr) : has.call(this._set, sStr);
    var idx = this._array.length;
    if (!isDuplicate || aAllowDuplicates) this._array.push(aStr);
    if (!isDuplicate) {
        if (hasNativeMap) this._set.set(aStr, idx);
        else this._set[sStr] = idx;
    }
};
/**
 * Is the given string a member of this set?
 *
 * @param String aStr
 */ ArraySet.prototype.has = function ArraySet_has(aStr) {
    if (hasNativeMap) return this._set.has(aStr);
    else {
        var sStr = util.toSetString(aStr);
        return has.call(this._set, sStr);
    }
};
/**
 * What is the index of the given string in the array?
 *
 * @param String aStr
 */ ArraySet.prototype.indexOf = function ArraySet_indexOf(aStr) {
    if (hasNativeMap) {
        var idx = this._set.get(aStr);
        if (idx >= 0) return idx;
    } else {
        var sStr = util.toSetString(aStr);
        if (has.call(this._set, sStr)) return this._set[sStr];
    }
    throw new Error('"' + aStr + '" is not in the set.');
};
/**
 * What is the element at the given index?
 *
 * @param Number aIdx
 */ ArraySet.prototype.at = function ArraySet_at(aIdx) {
    if (aIdx >= 0 && aIdx < this._array.length) return this._array[aIdx];
    throw new Error("No element indexed by " + aIdx);
};
/**
 * Returns the array representation of this set (which has the proper indices
 * indicated by indexOf). Note that this is a copy of the internal array used
 * for storing the members so that no one can mess with internal state.
 */ ArraySet.prototype.toArray = function ArraySet_toArray() {
    return this._array.slice();
};
exports.ArraySet = ArraySet;

},{"./util":"tCCrk"}],"6uR3M":[function(require,module,exports) {
/* -*- Mode: js; js-indent-level: 2; -*- */ /*
 * Copyright 2014 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */ var util = require("./util");
/**
 * Determine whether mappingB is after mappingA with respect to generated
 * position.
 */ function generatedPositionAfter(mappingA, mappingB) {
    // Optimized for most common case
    var lineA = mappingA.generatedLine;
    var lineB = mappingB.generatedLine;
    var columnA = mappingA.generatedColumn;
    var columnB = mappingB.generatedColumn;
    return lineB > lineA || lineB == lineA && columnB >= columnA || util.compareByGeneratedPositionsInflated(mappingA, mappingB) <= 0;
}
/**
 * A data structure to provide a sorted view of accumulated mappings in a
 * performance conscious manner. It trades a neglibable overhead in general
 * case for a large speedup in case of mappings being added in order.
 */ function MappingList() {
    this._array = [];
    this._sorted = true;
    // Serves as infimum
    this._last = {
        generatedLine: -1,
        generatedColumn: 0
    };
}
/**
 * Iterate through internal items. This method takes the same arguments that
 * `Array.prototype.forEach` takes.
 *
 * NOTE: The order of the mappings is NOT guaranteed.
 */ MappingList.prototype.unsortedForEach = function MappingList_forEach(aCallback, aThisArg) {
    this._array.forEach(aCallback, aThisArg);
};
/**
 * Add the given source mapping.
 *
 * @param Object aMapping
 */ MappingList.prototype.add = function MappingList_add(aMapping) {
    if (generatedPositionAfter(this._last, aMapping)) {
        this._last = aMapping;
        this._array.push(aMapping);
    } else {
        this._sorted = false;
        this._array.push(aMapping);
    }
};
/**
 * Returns the flat, sorted array of mappings. The mappings are sorted by
 * generated position.
 *
 * WARNING: This method returns internal data without copying, for
 * performance. The return value must NOT be mutated, and should be treated as
 * an immutable borrow. If you want to take ownership, you must make your own
 * copy.
 */ MappingList.prototype.toArray = function MappingList_toArray() {
    if (!this._sorted) {
        this._array.sort(util.compareByGeneratedPositionsInflated);
        this._sorted = true;
    }
    return this._array;
};
exports.MappingList = MappingList;

},{"./util":"tCCrk"}],"29bOB":[function(require,module,exports) {
/* -*- Mode: js; js-indent-level: 2; -*- */ /*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */ var util = require("./util");
var binarySearch = require("./binary-search");
var ArraySet = require("./array-set").ArraySet;
var base64VLQ = require("./base64-vlq");
var quickSort = require("./quick-sort").quickSort;
function SourceMapConsumer(aSourceMap, aSourceMapURL) {
    var sourceMap = aSourceMap;
    if (typeof aSourceMap === "string") sourceMap = util.parseSourceMapInput(aSourceMap);
    return sourceMap.sections != null ? new IndexedSourceMapConsumer(sourceMap, aSourceMapURL) : new BasicSourceMapConsumer(sourceMap, aSourceMapURL);
}
SourceMapConsumer.fromSourceMap = function(aSourceMap, aSourceMapURL) {
    return BasicSourceMapConsumer.fromSourceMap(aSourceMap, aSourceMapURL);
};
/**
 * The version of the source mapping spec that we are consuming.
 */ SourceMapConsumer.prototype._version = 3;
// `__generatedMappings` and `__originalMappings` are arrays that hold the
// parsed mapping coordinates from the source map's "mappings" attribute. They
// are lazily instantiated, accessed via the `_generatedMappings` and
// `_originalMappings` getters respectively, and we only parse the mappings
// and create these arrays once queried for a source location. We jump through
// these hoops because there can be many thousands of mappings, and parsing
// them is expensive, so we only want to do it if we must.
//
// Each object in the arrays is of the form:
//
//     {
//       generatedLine: The line number in the generated code,
//       generatedColumn: The column number in the generated code,
//       source: The path to the original source file that generated this
//               chunk of code,
//       originalLine: The line number in the original source that
//                     corresponds to this chunk of generated code,
//       originalColumn: The column number in the original source that
//                       corresponds to this chunk of generated code,
//       name: The name of the original symbol which generated this chunk of
//             code.
//     }
//
// All properties except for `generatedLine` and `generatedColumn` can be
// `null`.
//
// `_generatedMappings` is ordered by the generated positions.
//
// `_originalMappings` is ordered by the original positions.
SourceMapConsumer.prototype.__generatedMappings = null;
Object.defineProperty(SourceMapConsumer.prototype, "_generatedMappings", {
    configurable: true,
    enumerable: true,
    get: function() {
        if (!this.__generatedMappings) this._parseMappings(this._mappings, this.sourceRoot);
        return this.__generatedMappings;
    }
});
SourceMapConsumer.prototype.__originalMappings = null;
Object.defineProperty(SourceMapConsumer.prototype, "_originalMappings", {
    configurable: true,
    enumerable: true,
    get: function() {
        if (!this.__originalMappings) this._parseMappings(this._mappings, this.sourceRoot);
        return this.__originalMappings;
    }
});
SourceMapConsumer.prototype._charIsMappingSeparator = function SourceMapConsumer_charIsMappingSeparator(aStr, index) {
    var c = aStr.charAt(index);
    return c === ";" || c === ",";
};
/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */ SourceMapConsumer.prototype._parseMappings = function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
    throw new Error("Subclasses must implement _parseMappings");
};
SourceMapConsumer.GENERATED_ORDER = 1;
SourceMapConsumer.ORIGINAL_ORDER = 2;
SourceMapConsumer.GREATEST_LOWER_BOUND = 1;
SourceMapConsumer.LEAST_UPPER_BOUND = 2;
/**
 * Iterate over each mapping between an original source/line/column and a
 * generated line/column in this source map.
 *
 * @param Function aCallback
 *        The function that is called with each mapping.
 * @param Object aContext
 *        Optional. If specified, this object will be the value of `this` every
 *        time that `aCallback` is called.
 * @param aOrder
 *        Either `SourceMapConsumer.GENERATED_ORDER` or
 *        `SourceMapConsumer.ORIGINAL_ORDER`. Specifies whether you want to
 *        iterate over the mappings sorted by the generated file's line/column
 *        order or the original's source/line/column order, respectively. Defaults to
 *        `SourceMapConsumer.GENERATED_ORDER`.
 */ SourceMapConsumer.prototype.eachMapping = function SourceMapConsumer_eachMapping(aCallback, aContext, aOrder) {
    var context = aContext || null;
    var order = aOrder || SourceMapConsumer.GENERATED_ORDER;
    var mappings;
    switch(order){
        case SourceMapConsumer.GENERATED_ORDER:
            mappings = this._generatedMappings;
            break;
        case SourceMapConsumer.ORIGINAL_ORDER:
            mappings = this._originalMappings;
            break;
        default:
            throw new Error("Unknown order of iteration.");
    }
    var sourceRoot = this.sourceRoot;
    mappings.map(function(mapping) {
        var source = mapping.source === null ? null : this._sources.at(mapping.source);
        source = util.computeSourceURL(sourceRoot, source, this._sourceMapURL);
        return {
            source: source,
            generatedLine: mapping.generatedLine,
            generatedColumn: mapping.generatedColumn,
            originalLine: mapping.originalLine,
            originalColumn: mapping.originalColumn,
            name: mapping.name === null ? null : this._names.at(mapping.name)
        };
    }, this).forEach(aCallback, context);
};
/**
 * Returns all generated line and column information for the original source,
 * line, and column provided. If no column is provided, returns all mappings
 * corresponding to a either the line we are searching for or the next
 * closest line that has any mappings. Otherwise, returns all mappings
 * corresponding to the given line and either the column we are searching for
 * or the next closest column that has any offsets.
 *
 * The only argument is an object with the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.  The line number is 1-based.
 *   - column: Optional. the column number in the original source.
 *    The column number is 0-based.
 *
 * and an array of objects is returned, each with the following properties:
 *
 *   - line: The line number in the generated source, or null.  The
 *    line number is 1-based.
 *   - column: The column number in the generated source, or null.
 *    The column number is 0-based.
 */ SourceMapConsumer.prototype.allGeneratedPositionsFor = function SourceMapConsumer_allGeneratedPositionsFor(aArgs) {
    var line = util.getArg(aArgs, "line");
    // When there is no exact match, BasicSourceMapConsumer.prototype._findMapping
    // returns the index of the closest mapping less than the needle. By
    // setting needle.originalColumn to 0, we thus find the last mapping for
    // the given line, provided such a mapping exists.
    var needle = {
        source: util.getArg(aArgs, "source"),
        originalLine: line,
        originalColumn: util.getArg(aArgs, "column", 0)
    };
    needle.source = this._findSourceIndex(needle.source);
    if (needle.source < 0) return [];
    var mappings = [];
    var index = this._findMapping(needle, this._originalMappings, "originalLine", "originalColumn", util.compareByOriginalPositions, binarySearch.LEAST_UPPER_BOUND);
    if (index >= 0) {
        var mapping = this._originalMappings[index];
        if (aArgs.column === undefined) {
            var originalLine = mapping.originalLine;
            // Iterate until either we run out of mappings, or we run into
            // a mapping for a different line than the one we found. Since
            // mappings are sorted, this is guaranteed to find all mappings for
            // the line we found.
            while(mapping && mapping.originalLine === originalLine){
                mappings.push({
                    line: util.getArg(mapping, "generatedLine", null),
                    column: util.getArg(mapping, "generatedColumn", null),
                    lastColumn: util.getArg(mapping, "lastGeneratedColumn", null)
                });
                mapping = this._originalMappings[++index];
            }
        } else {
            var originalColumn = mapping.originalColumn;
            // Iterate until either we run out of mappings, or we run into
            // a mapping for a different line than the one we were searching for.
            // Since mappings are sorted, this is guaranteed to find all mappings for
            // the line we are searching for.
            while(mapping && mapping.originalLine === line && mapping.originalColumn == originalColumn){
                mappings.push({
                    line: util.getArg(mapping, "generatedLine", null),
                    column: util.getArg(mapping, "generatedColumn", null),
                    lastColumn: util.getArg(mapping, "lastGeneratedColumn", null)
                });
                mapping = this._originalMappings[++index];
            }
        }
    }
    return mappings;
};
exports.SourceMapConsumer = SourceMapConsumer;
/**
 * A BasicSourceMapConsumer instance represents a parsed source map which we can
 * query for information about the original file positions by giving it a file
 * position in the generated source.
 *
 * The first parameter is the raw source map (either as a JSON string, or
 * already parsed to an object). According to the spec, source maps have the
 * following attributes:
 *
 *   - version: Which version of the source map spec this map is following.
 *   - sources: An array of URLs to the original source files.
 *   - names: An array of identifiers which can be referrenced by individual mappings.
 *   - sourceRoot: Optional. The URL root from which all sources are relative.
 *   - sourcesContent: Optional. An array of contents of the original source files.
 *   - mappings: A string of base64 VLQs which contain the actual mappings.
 *   - file: Optional. The generated file this source map is associated with.
 *
 * Here is an example source map, taken from the source map spec[0]:
 *
 *     {
 *       version : 3,
 *       file: "out.js",
 *       sourceRoot : "",
 *       sources: ["foo.js", "bar.js"],
 *       names: ["src", "maps", "are", "fun"],
 *       mappings: "AA,AB;;ABCDE;"
 *     }
 *
 * The second parameter, if given, is a string whose value is the URL
 * at which the source map was found.  This URL is used to compute the
 * sources array.
 *
 * [0]: https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit?pli=1#
 */ function BasicSourceMapConsumer(aSourceMap, aSourceMapURL) {
    var sourceMap = aSourceMap;
    if (typeof aSourceMap === "string") sourceMap = util.parseSourceMapInput(aSourceMap);
    var version = util.getArg(sourceMap, "version");
    var sources = util.getArg(sourceMap, "sources");
    // Sass 3.3 leaves out the 'names' array, so we deviate from the spec (which
    // requires the array) to play nice here.
    var names = util.getArg(sourceMap, "names", []);
    var sourceRoot = util.getArg(sourceMap, "sourceRoot", null);
    var sourcesContent = util.getArg(sourceMap, "sourcesContent", null);
    var mappings = util.getArg(sourceMap, "mappings");
    var file = util.getArg(sourceMap, "file", null);
    // Once again, Sass deviates from the spec and supplies the version as a
    // string rather than a number, so we use loose equality checking here.
    if (version != this._version) throw new Error("Unsupported version: " + version);
    if (sourceRoot) sourceRoot = util.normalize(sourceRoot);
    sources = sources.map(String)// Some source maps produce relative source paths like "./foo.js" instead of
    // "foo.js".  Normalize these first so that future comparisons will succeed.
    // See bugzil.la/1090768.
    .map(util.normalize)// Always ensure that absolute sources are internally stored relative to
    // the source root, if the source root is absolute. Not doing this would
    // be particularly problematic when the source root is a prefix of the
    // source (valid, but why??). See github issue #199 and bugzil.la/1188982.
    .map(function(source) {
        return sourceRoot && util.isAbsolute(sourceRoot) && util.isAbsolute(source) ? util.relative(sourceRoot, source) : source;
    });
    // Pass `true` below to allow duplicate names and sources. While source maps
    // are intended to be compressed and deduplicated, the TypeScript compiler
    // sometimes generates source maps with duplicates in them. See Github issue
    // #72 and bugzil.la/889492.
    this._names = ArraySet.fromArray(names.map(String), true);
    this._sources = ArraySet.fromArray(sources, true);
    this._absoluteSources = this._sources.toArray().map(function(s) {
        return util.computeSourceURL(sourceRoot, s, aSourceMapURL);
    });
    this.sourceRoot = sourceRoot;
    this.sourcesContent = sourcesContent;
    this._mappings = mappings;
    this._sourceMapURL = aSourceMapURL;
    this.file = file;
}
BasicSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
BasicSourceMapConsumer.prototype.consumer = SourceMapConsumer;
/**
 * Utility function to find the index of a source.  Returns -1 if not
 * found.
 */ BasicSourceMapConsumer.prototype._findSourceIndex = function(aSource) {
    var relativeSource = aSource;
    if (this.sourceRoot != null) relativeSource = util.relative(this.sourceRoot, relativeSource);
    if (this._sources.has(relativeSource)) return this._sources.indexOf(relativeSource);
    // Maybe aSource is an absolute URL as returned by |sources|.  In
    // this case we can't simply undo the transform.
    var i;
    for(i = 0; i < this._absoluteSources.length; ++i){
        if (this._absoluteSources[i] == aSource) return i;
    }
    return -1;
};
/**
 * Create a BasicSourceMapConsumer from a SourceMapGenerator.
 *
 * @param SourceMapGenerator aSourceMap
 *        The source map that will be consumed.
 * @param String aSourceMapURL
 *        The URL at which the source map can be found (optional)
 * @returns BasicSourceMapConsumer
 */ BasicSourceMapConsumer.fromSourceMap = function SourceMapConsumer_fromSourceMap(aSourceMap, aSourceMapURL) {
    var smc = Object.create(BasicSourceMapConsumer.prototype);
    var names = smc._names = ArraySet.fromArray(aSourceMap._names.toArray(), true);
    var sources = smc._sources = ArraySet.fromArray(aSourceMap._sources.toArray(), true);
    smc.sourceRoot = aSourceMap._sourceRoot;
    smc.sourcesContent = aSourceMap._generateSourcesContent(smc._sources.toArray(), smc.sourceRoot);
    smc.file = aSourceMap._file;
    smc._sourceMapURL = aSourceMapURL;
    smc._absoluteSources = smc._sources.toArray().map(function(s) {
        return util.computeSourceURL(smc.sourceRoot, s, aSourceMapURL);
    });
    // Because we are modifying the entries (by converting string sources and
    // names to indices into the sources and names ArraySets), we have to make
    // a copy of the entry or else bad things happen. Shared mutable state
    // strikes again! See github issue #191.
    var generatedMappings = aSourceMap._mappings.toArray().slice();
    var destGeneratedMappings = smc.__generatedMappings = [];
    var destOriginalMappings = smc.__originalMappings = [];
    for(var i = 0, length = generatedMappings.length; i < length; i++){
        var srcMapping = generatedMappings[i];
        var destMapping = new Mapping;
        destMapping.generatedLine = srcMapping.generatedLine;
        destMapping.generatedColumn = srcMapping.generatedColumn;
        if (srcMapping.source) {
            destMapping.source = sources.indexOf(srcMapping.source);
            destMapping.originalLine = srcMapping.originalLine;
            destMapping.originalColumn = srcMapping.originalColumn;
            if (srcMapping.name) destMapping.name = names.indexOf(srcMapping.name);
            destOriginalMappings.push(destMapping);
        }
        destGeneratedMappings.push(destMapping);
    }
    quickSort(smc.__originalMappings, util.compareByOriginalPositions);
    return smc;
};
/**
 * The version of the source mapping spec that we are consuming.
 */ BasicSourceMapConsumer.prototype._version = 3;
/**
 * The list of original sources.
 */ Object.defineProperty(BasicSourceMapConsumer.prototype, "sources", {
    get: function() {
        return this._absoluteSources.slice();
    }
});
/**
 * Provide the JIT with a nice shape / hidden class.
 */ function Mapping() {
    this.generatedLine = 0;
    this.generatedColumn = 0;
    this.source = null;
    this.originalLine = null;
    this.originalColumn = null;
    this.name = null;
}
/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */ BasicSourceMapConsumer.prototype._parseMappings = function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
    var generatedLine = 1;
    var previousGeneratedColumn = 0;
    var previousOriginalLine = 0;
    var previousOriginalColumn = 0;
    var previousSource = 0;
    var previousName = 0;
    var length = aStr.length;
    var index = 0;
    var cachedSegments = {};
    var temp = {};
    var originalMappings = [];
    var generatedMappings = [];
    var mapping, str, segment, end, value;
    while(index < length){
        if (aStr.charAt(index) === ";") {
            generatedLine++;
            index++;
            previousGeneratedColumn = 0;
        } else if (aStr.charAt(index) === ",") index++;
        else {
            mapping = new Mapping();
            mapping.generatedLine = generatedLine;
            // Because each offset is encoded relative to the previous one,
            // many segments often have the same encoding. We can exploit this
            // fact by caching the parsed variable length fields of each segment,
            // allowing us to avoid a second parse if we encounter the same
            // segment again.
            for(end = index; end < length; end++){
                if (this._charIsMappingSeparator(aStr, end)) break;
            }
            str = aStr.slice(index, end);
            segment = cachedSegments[str];
            if (segment) index += str.length;
            else {
                segment = [];
                while(index < end){
                    base64VLQ.decode(aStr, index, temp);
                    value = temp.value;
                    index = temp.rest;
                    segment.push(value);
                }
                if (segment.length === 2) throw new Error("Found a source, but no line and column");
                if (segment.length === 3) throw new Error("Found a source and line, but no column");
                cachedSegments[str] = segment;
            }
            // Generated column.
            mapping.generatedColumn = previousGeneratedColumn + segment[0];
            previousGeneratedColumn = mapping.generatedColumn;
            if (segment.length > 1) {
                // Original source.
                mapping.source = previousSource + segment[1];
                previousSource += segment[1];
                // Original line.
                mapping.originalLine = previousOriginalLine + segment[2];
                previousOriginalLine = mapping.originalLine;
                // Lines are stored 0-based
                mapping.originalLine += 1;
                // Original column.
                mapping.originalColumn = previousOriginalColumn + segment[3];
                previousOriginalColumn = mapping.originalColumn;
                if (segment.length > 4) {
                    // Original name.
                    mapping.name = previousName + segment[4];
                    previousName += segment[4];
                }
            }
            generatedMappings.push(mapping);
            if (typeof mapping.originalLine === "number") originalMappings.push(mapping);
        }
    }
    quickSort(generatedMappings, util.compareByGeneratedPositionsDeflated);
    this.__generatedMappings = generatedMappings;
    quickSort(originalMappings, util.compareByOriginalPositions);
    this.__originalMappings = originalMappings;
};
/**
 * Find the mapping that best matches the hypothetical "needle" mapping that
 * we are searching for in the given "haystack" of mappings.
 */ BasicSourceMapConsumer.prototype._findMapping = function SourceMapConsumer_findMapping(aNeedle, aMappings, aLineName, aColumnName, aComparator, aBias) {
    // To return the position we are searching for, we must first find the
    // mapping for the given position and then return the opposite position it
    // points to. Because the mappings are sorted, we can use binary search to
    // find the best mapping.
    if (aNeedle[aLineName] <= 0) throw new TypeError("Line must be greater than or equal to 1, got " + aNeedle[aLineName]);
    if (aNeedle[aColumnName] < 0) throw new TypeError("Column must be greater than or equal to 0, got " + aNeedle[aColumnName]);
    return binarySearch.search(aNeedle, aMappings, aComparator, aBias);
};
/**
 * Compute the last column for each generated mapping. The last column is
 * inclusive.
 */ BasicSourceMapConsumer.prototype.computeColumnSpans = function SourceMapConsumer_computeColumnSpans() {
    for(var index = 0; index < this._generatedMappings.length; ++index){
        var mapping = this._generatedMappings[index];
        // Mappings do not contain a field for the last generated columnt. We
        // can come up with an optimistic estimate, however, by assuming that
        // mappings are contiguous (i.e. given two consecutive mappings, the
        // first mapping ends where the second one starts).
        if (index + 1 < this._generatedMappings.length) {
            var nextMapping = this._generatedMappings[index + 1];
            if (mapping.generatedLine === nextMapping.generatedLine) {
                mapping.lastGeneratedColumn = nextMapping.generatedColumn - 1;
                continue;
            }
        }
        // The last mapping for each line spans the entire line.
        mapping.lastGeneratedColumn = Infinity;
    }
};
/**
 * Returns the original source, line, and column information for the generated
 * source's line and column positions provided. The only argument is an object
 * with the following properties:
 *
 *   - line: The line number in the generated source.  The line number
 *     is 1-based.
 *   - column: The column number in the generated source.  The column
 *     number is 0-based.
 *   - bias: Either 'SourceMapConsumer.GREATEST_LOWER_BOUND' or
 *     'SourceMapConsumer.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'SourceMapConsumer.GREATEST_LOWER_BOUND'.
 *
 * and an object is returned with the following properties:
 *
 *   - source: The original source file, or null.
 *   - line: The line number in the original source, or null.  The
 *     line number is 1-based.
 *   - column: The column number in the original source, or null.  The
 *     column number is 0-based.
 *   - name: The original identifier, or null.
 */ BasicSourceMapConsumer.prototype.originalPositionFor = function SourceMapConsumer_originalPositionFor(aArgs) {
    var needle = {
        generatedLine: util.getArg(aArgs, "line"),
        generatedColumn: util.getArg(aArgs, "column")
    };
    var index = this._findMapping(needle, this._generatedMappings, "generatedLine", "generatedColumn", util.compareByGeneratedPositionsDeflated, util.getArg(aArgs, "bias", SourceMapConsumer.GREATEST_LOWER_BOUND));
    if (index >= 0) {
        var mapping = this._generatedMappings[index];
        if (mapping.generatedLine === needle.generatedLine) {
            var source = util.getArg(mapping, "source", null);
            if (source !== null) {
                source = this._sources.at(source);
                source = util.computeSourceURL(this.sourceRoot, source, this._sourceMapURL);
            }
            var name = util.getArg(mapping, "name", null);
            if (name !== null) name = this._names.at(name);
            return {
                source: source,
                line: util.getArg(mapping, "originalLine", null),
                column: util.getArg(mapping, "originalColumn", null),
                name: name
            };
        }
    }
    return {
        source: null,
        line: null,
        column: null,
        name: null
    };
};
/**
 * Return true if we have the source content for every source in the source
 * map, false otherwise.
 */ BasicSourceMapConsumer.prototype.hasContentsOfAllSources = function BasicSourceMapConsumer_hasContentsOfAllSources() {
    if (!this.sourcesContent) return false;
    return this.sourcesContent.length >= this._sources.size() && !this.sourcesContent.some(function(sc) {
        return sc == null;
    });
};
/**
 * Returns the original source content. The only argument is the url of the
 * original source file. Returns null if no original source content is
 * available.
 */ BasicSourceMapConsumer.prototype.sourceContentFor = function SourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
    if (!this.sourcesContent) return null;
    var index = this._findSourceIndex(aSource);
    if (index >= 0) return this.sourcesContent[index];
    var relativeSource = aSource;
    if (this.sourceRoot != null) relativeSource = util.relative(this.sourceRoot, relativeSource);
    var url;
    if (this.sourceRoot != null && (url = util.urlParse(this.sourceRoot))) {
        // XXX: file:// URIs and absolute paths lead to unexpected behavior for
        // many users. We can help them out when they expect file:// URIs to
        // behave like it would if they were running a local HTTP server. See
        // https://bugzilla.mozilla.org/show_bug.cgi?id=885597.
        var fileUriAbsPath = relativeSource.replace(/^file:\/\//, "");
        if (url.scheme == "file" && this._sources.has(fileUriAbsPath)) return this.sourcesContent[this._sources.indexOf(fileUriAbsPath)];
        if ((!url.path || url.path == "/") && this._sources.has("/" + relativeSource)) return this.sourcesContent[this._sources.indexOf("/" + relativeSource)];
    }
    // This function is used recursively from
    // IndexedSourceMapConsumer.prototype.sourceContentFor. In that case, we
    // don't want to throw if we can't find the source - we just want to
    // return null, so we provide a flag to exit gracefully.
    if (nullOnMissing) return null;
    else throw new Error('"' + relativeSource + '" is not in the SourceMap.');
};
/**
 * Returns the generated line and column information for the original source,
 * line, and column positions provided. The only argument is an object with
 * the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.  The line number
 *     is 1-based.
 *   - column: The column number in the original source.  The column
 *     number is 0-based.
 *   - bias: Either 'SourceMapConsumer.GREATEST_LOWER_BOUND' or
 *     'SourceMapConsumer.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'SourceMapConsumer.GREATEST_LOWER_BOUND'.
 *
 * and an object is returned with the following properties:
 *
 *   - line: The line number in the generated source, or null.  The
 *     line number is 1-based.
 *   - column: The column number in the generated source, or null.
 *     The column number is 0-based.
 */ BasicSourceMapConsumer.prototype.generatedPositionFor = function SourceMapConsumer_generatedPositionFor(aArgs) {
    var source = util.getArg(aArgs, "source");
    source = this._findSourceIndex(source);
    if (source < 0) return {
        line: null,
        column: null,
        lastColumn: null
    };
    var needle = {
        source: source,
        originalLine: util.getArg(aArgs, "line"),
        originalColumn: util.getArg(aArgs, "column")
    };
    var index = this._findMapping(needle, this._originalMappings, "originalLine", "originalColumn", util.compareByOriginalPositions, util.getArg(aArgs, "bias", SourceMapConsumer.GREATEST_LOWER_BOUND));
    if (index >= 0) {
        var mapping = this._originalMappings[index];
        if (mapping.source === needle.source) return {
            line: util.getArg(mapping, "generatedLine", null),
            column: util.getArg(mapping, "generatedColumn", null),
            lastColumn: util.getArg(mapping, "lastGeneratedColumn", null)
        };
    }
    return {
        line: null,
        column: null,
        lastColumn: null
    };
};
exports.BasicSourceMapConsumer = BasicSourceMapConsumer;
/**
 * An IndexedSourceMapConsumer instance represents a parsed source map which
 * we can query for information. It differs from BasicSourceMapConsumer in
 * that it takes "indexed" source maps (i.e. ones with a "sections" field) as
 * input.
 *
 * The first parameter is a raw source map (either as a JSON string, or already
 * parsed to an object). According to the spec for indexed source maps, they
 * have the following attributes:
 *
 *   - version: Which version of the source map spec this map is following.
 *   - file: Optional. The generated file this source map is associated with.
 *   - sections: A list of section definitions.
 *
 * Each value under the "sections" field has two fields:
 *   - offset: The offset into the original specified at which this section
 *       begins to apply, defined as an object with a "line" and "column"
 *       field.
 *   - map: A source map definition. This source map could also be indexed,
 *       but doesn't have to be.
 *
 * Instead of the "map" field, it's also possible to have a "url" field
 * specifying a URL to retrieve a source map from, but that's currently
 * unsupported.
 *
 * Here's an example source map, taken from the source map spec[0], but
 * modified to omit a section which uses the "url" field.
 *
 *  {
 *    version : 3,
 *    file: "app.js",
 *    sections: [{
 *      offset: {line:100, column:10},
 *      map: {
 *        version : 3,
 *        file: "section.js",
 *        sources: ["foo.js", "bar.js"],
 *        names: ["src", "maps", "are", "fun"],
 *        mappings: "AAAA,E;;ABCDE;"
 *      }
 *    }],
 *  }
 *
 * The second parameter, if given, is a string whose value is the URL
 * at which the source map was found.  This URL is used to compute the
 * sources array.
 *
 * [0]: https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit#heading=h.535es3xeprgt
 */ function IndexedSourceMapConsumer(aSourceMap, aSourceMapURL) {
    var sourceMap = aSourceMap;
    if (typeof aSourceMap === "string") sourceMap = util.parseSourceMapInput(aSourceMap);
    var version = util.getArg(sourceMap, "version");
    var sections = util.getArg(sourceMap, "sections");
    if (version != this._version) throw new Error("Unsupported version: " + version);
    this._sources = new ArraySet();
    this._names = new ArraySet();
    var lastOffset = {
        line: -1,
        column: 0
    };
    this._sections = sections.map(function(s) {
        if (s.url) // The url field will require support for asynchronicity.
        // See https://github.com/mozilla/source-map/issues/16
        throw new Error("Support for url field in sections not implemented.");
        var offset = util.getArg(s, "offset");
        var offsetLine = util.getArg(offset, "line");
        var offsetColumn = util.getArg(offset, "column");
        if (offsetLine < lastOffset.line || offsetLine === lastOffset.line && offsetColumn < lastOffset.column) throw new Error("Section offsets must be ordered and non-overlapping.");
        lastOffset = offset;
        return {
            generatedOffset: {
                // The offset fields are 0-based, but we use 1-based indices when
                // encoding/decoding from VLQ.
                generatedLine: offsetLine + 1,
                generatedColumn: offsetColumn + 1
            },
            consumer: new SourceMapConsumer(util.getArg(s, "map"), aSourceMapURL)
        };
    });
}
IndexedSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
IndexedSourceMapConsumer.prototype.constructor = SourceMapConsumer;
/**
 * The version of the source mapping spec that we are consuming.
 */ IndexedSourceMapConsumer.prototype._version = 3;
/**
 * The list of original sources.
 */ Object.defineProperty(IndexedSourceMapConsumer.prototype, "sources", {
    get: function() {
        var sources = [];
        for(var i = 0; i < this._sections.length; i++)for(var j = 0; j < this._sections[i].consumer.sources.length; j++)sources.push(this._sections[i].consumer.sources[j]);
        return sources;
    }
});
/**
 * Returns the original source, line, and column information for the generated
 * source's line and column positions provided. The only argument is an object
 * with the following properties:
 *
 *   - line: The line number in the generated source.  The line number
 *     is 1-based.
 *   - column: The column number in the generated source.  The column
 *     number is 0-based.
 *
 * and an object is returned with the following properties:
 *
 *   - source: The original source file, or null.
 *   - line: The line number in the original source, or null.  The
 *     line number is 1-based.
 *   - column: The column number in the original source, or null.  The
 *     column number is 0-based.
 *   - name: The original identifier, or null.
 */ IndexedSourceMapConsumer.prototype.originalPositionFor = function IndexedSourceMapConsumer_originalPositionFor(aArgs) {
    var needle1 = {
        generatedLine: util.getArg(aArgs, "line"),
        generatedColumn: util.getArg(aArgs, "column")
    };
    // Find the section containing the generated position we're trying to map
    // to an original position.
    var sectionIndex = binarySearch.search(needle1, this._sections, function(needle, section) {
        var cmp = needle.generatedLine - section.generatedOffset.generatedLine;
        if (cmp) return cmp;
        return needle.generatedColumn - section.generatedOffset.generatedColumn;
    });
    var section1 = this._sections[sectionIndex];
    if (!section1) return {
        source: null,
        line: null,
        column: null,
        name: null
    };
    return section1.consumer.originalPositionFor({
        line: needle1.generatedLine - (section1.generatedOffset.generatedLine - 1),
        column: needle1.generatedColumn - (section1.generatedOffset.generatedLine === needle1.generatedLine ? section1.generatedOffset.generatedColumn - 1 : 0),
        bias: aArgs.bias
    });
};
/**
 * Return true if we have the source content for every source in the source
 * map, false otherwise.
 */ IndexedSourceMapConsumer.prototype.hasContentsOfAllSources = function IndexedSourceMapConsumer_hasContentsOfAllSources() {
    return this._sections.every(function(s) {
        return s.consumer.hasContentsOfAllSources();
    });
};
/**
 * Returns the original source content. The only argument is the url of the
 * original source file. Returns null if no original source content is
 * available.
 */ IndexedSourceMapConsumer.prototype.sourceContentFor = function IndexedSourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
    for(var i = 0; i < this._sections.length; i++){
        var section = this._sections[i];
        var content = section.consumer.sourceContentFor(aSource, true);
        if (content) return content;
    }
    if (nullOnMissing) return null;
    else throw new Error('"' + aSource + '" is not in the SourceMap.');
};
/**
 * Returns the generated line and column information for the original source,
 * line, and column positions provided. The only argument is an object with
 * the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.  The line number
 *     is 1-based.
 *   - column: The column number in the original source.  The column
 *     number is 0-based.
 *
 * and an object is returned with the following properties:
 *
 *   - line: The line number in the generated source, or null.  The
 *     line number is 1-based. 
 *   - column: The column number in the generated source, or null.
 *     The column number is 0-based.
 */ IndexedSourceMapConsumer.prototype.generatedPositionFor = function IndexedSourceMapConsumer_generatedPositionFor(aArgs) {
    for(var i = 0; i < this._sections.length; i++){
        var section = this._sections[i];
        // Only consider this section if the requested source is in the list of
        // sources of the consumer.
        if (section.consumer._findSourceIndex(util.getArg(aArgs, "source")) === -1) continue;
        var generatedPosition = section.consumer.generatedPositionFor(aArgs);
        if (generatedPosition) {
            var ret = {
                line: generatedPosition.line + (section.generatedOffset.generatedLine - 1),
                column: generatedPosition.column + (section.generatedOffset.generatedLine === generatedPosition.line ? section.generatedOffset.generatedColumn - 1 : 0)
            };
            return ret;
        }
    }
    return {
        line: null,
        column: null
    };
};
/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */ IndexedSourceMapConsumer.prototype._parseMappings = function IndexedSourceMapConsumer_parseMappings(aStr, aSourceRoot) {
    this.__generatedMappings = [];
    this.__originalMappings = [];
    for(var i = 0; i < this._sections.length; i++){
        var section = this._sections[i];
        var sectionMappings = section.consumer._generatedMappings;
        for(var j = 0; j < sectionMappings.length; j++){
            var mapping = sectionMappings[j];
            var source = section.consumer._sources.at(mapping.source);
            source = util.computeSourceURL(section.consumer.sourceRoot, source, this._sourceMapURL);
            this._sources.add(source);
            source = this._sources.indexOf(source);
            var name = null;
            if (mapping.name) {
                name = section.consumer._names.at(mapping.name);
                this._names.add(name);
                name = this._names.indexOf(name);
            }
            // The mappings coming from the consumer for the section have
            // generated positions relative to the start of the section, so we
            // need to offset them to be relative to the start of the concatenated
            // generated file.
            var adjustedMapping = {
                source: source,
                generatedLine: mapping.generatedLine + (section.generatedOffset.generatedLine - 1),
                generatedColumn: mapping.generatedColumn + (section.generatedOffset.generatedLine === mapping.generatedLine ? section.generatedOffset.generatedColumn - 1 : 0),
                originalLine: mapping.originalLine,
                originalColumn: mapping.originalColumn,
                name: name
            };
            this.__generatedMappings.push(adjustedMapping);
            if (typeof adjustedMapping.originalLine === "number") this.__originalMappings.push(adjustedMapping);
        }
    }
    quickSort(this.__generatedMappings, util.compareByGeneratedPositionsDeflated);
    quickSort(this.__originalMappings, util.compareByOriginalPositions);
};
exports.IndexedSourceMapConsumer = IndexedSourceMapConsumer;

},{"./util":"tCCrk","./binary-search":"eBCh2","./array-set":"5GPwW","./base64-vlq":"8tI6q","./quick-sort":"ffK7z"}],"eBCh2":[function(require,module,exports) {
/* -*- Mode: js; js-indent-level: 2; -*- */ /*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */ exports.GREATEST_LOWER_BOUND = 1;
exports.LEAST_UPPER_BOUND = 2;
/**
 * Recursive implementation of binary search.
 *
 * @param aLow Indices here and lower do not contain the needle.
 * @param aHigh Indices here and higher do not contain the needle.
 * @param aNeedle The element being searched for.
 * @param aHaystack The non-empty array being searched.
 * @param aCompare Function which takes two elements and returns -1, 0, or 1.
 * @param aBias Either 'binarySearch.GREATEST_LOWER_BOUND' or
 *     'binarySearch.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 */ function recursiveSearch(aLow, aHigh, aNeedle, aHaystack, aCompare, aBias) {
    // This function terminates when one of the following is true:
    //
    //   1. We find the exact element we are looking for.
    //
    //   2. We did not find the exact element, but we can return the index of
    //      the next-closest element.
    //
    //   3. We did not find the exact element, and there is no next-closest
    //      element than the one we are searching for, so we return -1.
    var mid = Math.floor((aHigh - aLow) / 2) + aLow;
    var cmp = aCompare(aNeedle, aHaystack[mid], true);
    if (cmp === 0) // Found the element we are looking for.
    return mid;
    else if (cmp > 0) {
        // Our needle is greater than aHaystack[mid].
        if (aHigh - mid > 1) // The element is in the upper half.
        return recursiveSearch(mid, aHigh, aNeedle, aHaystack, aCompare, aBias);
        // The exact needle element was not found in this haystack. Determine if
        // we are in termination case (3) or (2) and return the appropriate thing.
        if (aBias == exports.LEAST_UPPER_BOUND) return aHigh < aHaystack.length ? aHigh : -1;
        else return mid;
    } else {
        // Our needle is less than aHaystack[mid].
        if (mid - aLow > 1) // The element is in the lower half.
        return recursiveSearch(aLow, mid, aNeedle, aHaystack, aCompare, aBias);
        // we are in termination case (3) or (2) and return the appropriate thing.
        if (aBias == exports.LEAST_UPPER_BOUND) return mid;
        else return aLow < 0 ? -1 : aLow;
    }
}
/**
 * This is an implementation of binary search which will always try and return
 * the index of the closest element if there is no exact hit. This is because
 * mappings between original and generated line/col pairs are single points,
 * and there is an implicit region between each of them, so a miss just means
 * that you aren't on the very start of a region.
 *
 * @param aNeedle The element you are looking for.
 * @param aHaystack The array that is being searched.
 * @param aCompare A function which takes the needle and an element in the
 *     array and returns -1, 0, or 1 depending on whether the needle is less
 *     than, equal to, or greater than the element, respectively.
 * @param aBias Either 'binarySearch.GREATEST_LOWER_BOUND' or
 *     'binarySearch.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'binarySearch.GREATEST_LOWER_BOUND'.
 */ exports.search = function search(aNeedle, aHaystack, aCompare, aBias) {
    if (aHaystack.length === 0) return -1;
    var index = recursiveSearch(-1, aHaystack.length, aNeedle, aHaystack, aCompare, aBias || exports.GREATEST_LOWER_BOUND);
    if (index < 0) return -1;
    // We have found either the exact element, or the next-closest element than
    // the one we are searching for. However, there may be more than one such
    // element. Make sure we always return the smallest of these.
    while(index - 1 >= 0){
        if (aCompare(aHaystack[index], aHaystack[index - 1], true) !== 0) break;
        --index;
    }
    return index;
};

},{}],"ffK7z":[function(require,module,exports) {
/* -*- Mode: js; js-indent-level: 2; -*- */ /*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */ // It turns out that some (most?) JavaScript engines don't self-host
// `Array.prototype.sort`. This makes sense because C++ will likely remain
// faster than JS when doing raw CPU-intensive sorting. However, when using a
// custom comparator function, calling back and forth between the VM's C++ and
// JIT'd JS is rather slow *and* loses JIT type information, resulting in
// worse generated code for the comparator function than would be optimal. In
// fact, when sorting with a comparator, these costs outweigh the benefits of
// sorting in C++. By using our own JS-implemented Quick Sort (below), we get
// a ~3500ms mean speed-up in `bench/bench.html`.
/**
 * Swap the elements indexed by `x` and `y` in the array `ary`.
 *
 * @param {Array} ary
 *        The array.
 * @param {Number} x
 *        The index of the first item.
 * @param {Number} y
 *        The index of the second item.
 */ function swap(ary, x, y) {
    var temp = ary[x];
    ary[x] = ary[y];
    ary[y] = temp;
}
/**
 * Returns a random integer within the range `low .. high` inclusive.
 *
 * @param {Number} low
 *        The lower bound on the range.
 * @param {Number} high
 *        The upper bound on the range.
 */ function randomIntInRange(low, high) {
    return Math.round(low + Math.random() * (high - low));
}
/**
 * The Quick Sort algorithm.
 *
 * @param {Array} ary
 *        An array to sort.
 * @param {function} comparator
 *        Function to use to compare two items.
 * @param {Number} p
 *        Start index of the array
 * @param {Number} r
 *        End index of the array
 */ function doQuickSort(ary, comparator, p, r) {
    // If our lower bound is less than our upper bound, we (1) partition the
    // array into two pieces and (2) recurse on each half. If it is not, this is
    // the empty array and our base case.
    if (p < r) {
        // (1) Partitioning.
        //
        // The partitioning chooses a pivot between `p` and `r` and moves all
        // elements that are less than or equal to the pivot to the before it, and
        // all the elements that are greater than it after it. The effect is that
        // once partition is done, the pivot is in the exact place it will be when
        // the array is put in sorted order, and it will not need to be moved
        // again. This runs in O(n) time.
        // Always choose a random pivot so that an input array which is reverse
        // sorted does not cause O(n^2) running time.
        var pivotIndex = randomIntInRange(p, r);
        var i = p - 1;
        swap(ary, pivotIndex, r);
        var pivot = ary[r];
        // Immediately after `j` is incremented in this loop, the following hold
        // true:
        //
        //   * Every element in `ary[p .. i]` is less than or equal to the pivot.
        //
        //   * Every element in `ary[i+1 .. j-1]` is greater than the pivot.
        for(var j = p; j < r; j++)if (comparator(ary[j], pivot) <= 0) {
            i += 1;
            swap(ary, i, j);
        }
        swap(ary, i + 1, j);
        var q = i + 1;
        // (2) Recurse on each half.
        doQuickSort(ary, comparator, p, q - 1);
        doQuickSort(ary, comparator, q + 1, r);
    }
}
/**
 * Sort the given array in-place with the given comparator function.
 *
 * @param {Array} ary
 *        An array to sort.
 * @param {function} comparator
 *        Function to use to compare two items.
 */ exports.quickSort = function(ary, comparator) {
    doQuickSort(ary, comparator, 0, ary.length - 1);
};

},{}],"RKG6B":[function(require,module,exports) {
/* -*- Mode: js; js-indent-level: 2; -*- */ /*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */ var SourceMapGenerator = require("./source-map-generator").SourceMapGenerator;
var util = require("./util");
// Matches a Windows-style `\r\n` newline or a `\n` newline used by all other
// operating systems these days (capturing the result).
var REGEX_NEWLINE = /(\r?\n)/;
// Newline character code for charCodeAt() comparisons
var NEWLINE_CODE = 10;
// Private symbol for identifying `SourceNode`s when multiple versions of
// the source-map library are loaded. This MUST NOT CHANGE across
// versions!
var isSourceNode = "$$$isSourceNode$$$";
/**
 * SourceNodes provide a way to abstract over interpolating/concatenating
 * snippets of generated JavaScript source code while maintaining the line and
 * column information associated with the original source code.
 *
 * @param aLine The original line number.
 * @param aColumn The original column number.
 * @param aSource The original source's filename.
 * @param aChunks Optional. An array of strings which are snippets of
 *        generated JS, or other SourceNodes.
 * @param aName The original identifier.
 */ function SourceNode(aLine, aColumn, aSource, aChunks, aName) {
    this.children = [];
    this.sourceContents = {};
    this.line = aLine == null ? null : aLine;
    this.column = aColumn == null ? null : aColumn;
    this.source = aSource == null ? null : aSource;
    this.name = aName == null ? null : aName;
    this[isSourceNode] = true;
    if (aChunks != null) this.add(aChunks);
}
/**
 * Creates a SourceNode from generated code and a SourceMapConsumer.
 *
 * @param aGeneratedCode The generated code
 * @param aSourceMapConsumer The SourceMap for the generated code
 * @param aRelativePath Optional. The path that relative sources in the
 *        SourceMapConsumer should be relative to.
 */ SourceNode.fromStringWithSourceMap = function SourceNode_fromStringWithSourceMap(aGeneratedCode, aSourceMapConsumer, aRelativePath) {
    // The SourceNode we want to fill with the generated code
    // and the SourceMap
    var node = new SourceNode();
    // All even indices of this array are one line of the generated code,
    // while all odd indices are the newlines between two adjacent lines
    // (since `REGEX_NEWLINE` captures its match).
    // Processed fragments are accessed by calling `shiftNextLine`.
    var remainingLines = aGeneratedCode.split(REGEX_NEWLINE);
    var remainingLinesIndex = 0;
    var shiftNextLine = function() {
        var lineContents = getNextLine();
        // The last line of a file might not have a newline.
        var newLine = getNextLine() || "";
        return lineContents + newLine;
        function getNextLine() {
            return remainingLinesIndex < remainingLines.length ? remainingLines[remainingLinesIndex++] : undefined;
        }
    };
    // We need to remember the position of "remainingLines"
    var lastGeneratedLine = 1, lastGeneratedColumn = 0;
    // The generate SourceNodes we need a code range.
    // To extract it current and last mapping is used.
    // Here we store the last mapping.
    var lastMapping = null;
    aSourceMapConsumer.eachMapping(function(mapping) {
        if (lastMapping !== null) {
            // We add the code from "lastMapping" to "mapping":
            // First check if there is a new line in between.
            if (lastGeneratedLine < mapping.generatedLine) {
                // Associate first line with "lastMapping"
                addMappingWithCode(lastMapping, shiftNextLine());
                lastGeneratedLine++;
                lastGeneratedColumn = 0;
            // The remaining code is added without mapping
            } else {
                // There is no new line in between.
                // Associate the code between "lastGeneratedColumn" and
                // "mapping.generatedColumn" with "lastMapping"
                var nextLine = remainingLines[remainingLinesIndex] || "";
                var code = nextLine.substr(0, mapping.generatedColumn - lastGeneratedColumn);
                remainingLines[remainingLinesIndex] = nextLine.substr(mapping.generatedColumn - lastGeneratedColumn);
                lastGeneratedColumn = mapping.generatedColumn;
                addMappingWithCode(lastMapping, code);
                // No more remaining code, continue
                lastMapping = mapping;
                return;
            }
        }
        // We add the generated code until the first mapping
        // to the SourceNode without any mapping.
        // Each line is added as separate string.
        while(lastGeneratedLine < mapping.generatedLine){
            node.add(shiftNextLine());
            lastGeneratedLine++;
        }
        if (lastGeneratedColumn < mapping.generatedColumn) {
            var nextLine = remainingLines[remainingLinesIndex] || "";
            node.add(nextLine.substr(0, mapping.generatedColumn));
            remainingLines[remainingLinesIndex] = nextLine.substr(mapping.generatedColumn);
            lastGeneratedColumn = mapping.generatedColumn;
        }
        lastMapping = mapping;
    }, this);
    // We have processed all mappings.
    if (remainingLinesIndex < remainingLines.length) {
        if (lastMapping) // Associate the remaining code in the current line with "lastMapping"
        addMappingWithCode(lastMapping, shiftNextLine());
        // and add the remaining lines without any mapping
        node.add(remainingLines.splice(remainingLinesIndex).join(""));
    }
    // Copy sourcesContent into SourceNode
    aSourceMapConsumer.sources.forEach(function(sourceFile) {
        var content = aSourceMapConsumer.sourceContentFor(sourceFile);
        if (content != null) {
            if (aRelativePath != null) sourceFile = util.join(aRelativePath, sourceFile);
            node.setSourceContent(sourceFile, content);
        }
    });
    return node;
    function addMappingWithCode(mapping, code) {
        if (mapping === null || mapping.source === undefined) {
            node.add(code);
        } else {
            var source = aRelativePath ? util.join(aRelativePath, mapping.source) : mapping.source;
            node.add(new SourceNode(mapping.originalLine, mapping.originalColumn, source, code, mapping.name));
        }
    }
};
/**
 * Add a chunk of generated JS to this source node.
 *
 * @param aChunk A string snippet of generated JS code, another instance of
 *        SourceNode, or an array where each member is one of those things.
 */ SourceNode.prototype.add = function SourceNode_add(aChunk) {
    if (Array.isArray(aChunk)) aChunk.forEach(function(chunk) {
        this.add(chunk);
    }, this);
    else if (aChunk[isSourceNode] || typeof aChunk === "string") {
        if (aChunk) this.children.push(aChunk);
    } else throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + aChunk);
    return this;
};
/**
 * Add a chunk of generated JS to the beginning of this source node.
 *
 * @param aChunk A string snippet of generated JS code, another instance of
 *        SourceNode, or an array where each member is one of those things.
 */ SourceNode.prototype.prepend = function SourceNode_prepend(aChunk) {
    if (Array.isArray(aChunk)) for(var i = aChunk.length - 1; i >= 0; i--)this.prepend(aChunk[i]);
    else if (aChunk[isSourceNode] || typeof aChunk === "string") this.children.unshift(aChunk);
    else throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + aChunk);
    return this;
};
/**
 * Walk over the tree of JS snippets in this node and its children. The
 * walking function is called once for each snippet of JS and is passed that
 * snippet and the its original associated source's line/column location.
 *
 * @param aFn The traversal function.
 */ SourceNode.prototype.walk = function SourceNode_walk(aFn) {
    var chunk;
    for(var i = 0, len = this.children.length; i < len; i++){
        chunk = this.children[i];
        if (chunk[isSourceNode]) chunk.walk(aFn);
        else if (chunk !== "") aFn(chunk, {
            source: this.source,
            line: this.line,
            column: this.column,
            name: this.name
        });
    }
};
/**
 * Like `String.prototype.join` except for SourceNodes. Inserts `aStr` between
 * each of `this.children`.
 *
 * @param aSep The separator.
 */ SourceNode.prototype.join = function SourceNode_join(aSep) {
    var newChildren;
    var i;
    var len = this.children.length;
    if (len > 0) {
        newChildren = [];
        for(i = 0; i < len - 1; i++){
            newChildren.push(this.children[i]);
            newChildren.push(aSep);
        }
        newChildren.push(this.children[i]);
        this.children = newChildren;
    }
    return this;
};
/**
 * Call String.prototype.replace on the very right-most source snippet. Useful
 * for trimming whitespace from the end of a source node, etc.
 *
 * @param aPattern The pattern to replace.
 * @param aReplacement The thing to replace the pattern with.
 */ SourceNode.prototype.replaceRight = function SourceNode_replaceRight(aPattern, aReplacement) {
    var lastChild = this.children[this.children.length - 1];
    if (lastChild[isSourceNode]) lastChild.replaceRight(aPattern, aReplacement);
    else if (typeof lastChild === "string") this.children[this.children.length - 1] = lastChild.replace(aPattern, aReplacement);
    else this.children.push("".replace(aPattern, aReplacement));
    return this;
};
/**
 * Set the source content for a source file. This will be added to the SourceMapGenerator
 * in the sourcesContent field.
 *
 * @param aSourceFile The filename of the source file
 * @param aSourceContent The content of the source file
 */ SourceNode.prototype.setSourceContent = function SourceNode_setSourceContent(aSourceFile, aSourceContent) {
    this.sourceContents[util.toSetString(aSourceFile)] = aSourceContent;
};
/**
 * Walk over the tree of SourceNodes. The walking function is called for each
 * source file content and is passed the filename and source content.
 *
 * @param aFn The traversal function.
 */ SourceNode.prototype.walkSourceContents = function SourceNode_walkSourceContents(aFn) {
    for(var i = 0, len = this.children.length; i < len; i++)if (this.children[i][isSourceNode]) this.children[i].walkSourceContents(aFn);
    var sources = Object.keys(this.sourceContents);
    for(var i = 0, len = sources.length; i < len; i++)aFn(util.fromSetString(sources[i]), this.sourceContents[sources[i]]);
};
/**
 * Return the string representation of this source node. Walks over the tree
 * and concatenates all the various snippets together to one string.
 */ SourceNode.prototype.toString = function SourceNode_toString() {
    var str = "";
    this.walk(function(chunk) {
        str += chunk;
    });
    return str;
};
/**
 * Returns the string representation of this source node along with a source
 * map.
 */ SourceNode.prototype.toStringWithSourceMap = function SourceNode_toStringWithSourceMap(aArgs) {
    var generated = {
        code: "",
        line: 1,
        column: 0
    };
    var map = new SourceMapGenerator(aArgs);
    var sourceMappingActive = false;
    var lastOriginalSource = null;
    var lastOriginalLine = null;
    var lastOriginalColumn = null;
    var lastOriginalName = null;
    this.walk(function(chunk, original) {
        generated.code += chunk;
        if (original.source !== null && original.line !== null && original.column !== null) {
            if (lastOriginalSource !== original.source || lastOriginalLine !== original.line || lastOriginalColumn !== original.column || lastOriginalName !== original.name) map.addMapping({
                source: original.source,
                original: {
                    line: original.line,
                    column: original.column
                },
                generated: {
                    line: generated.line,
                    column: generated.column
                },
                name: original.name
            });
            lastOriginalSource = original.source;
            lastOriginalLine = original.line;
            lastOriginalColumn = original.column;
            lastOriginalName = original.name;
            sourceMappingActive = true;
        } else if (sourceMappingActive) {
            map.addMapping({
                generated: {
                    line: generated.line,
                    column: generated.column
                }
            });
            lastOriginalSource = null;
            sourceMappingActive = false;
        }
        for(var idx = 0, length = chunk.length; idx < length; idx++)if (chunk.charCodeAt(idx) === NEWLINE_CODE) {
            generated.line++;
            generated.column = 0;
            // Mappings end at eol
            if (idx + 1 === length) {
                lastOriginalSource = null;
                sourceMappingActive = false;
            } else if (sourceMappingActive) map.addMapping({
                source: original.source,
                original: {
                    line: original.line,
                    column: original.column
                },
                generated: {
                    line: generated.line,
                    column: generated.column
                },
                name: original.name
            });
        } else generated.column++;
    });
    this.walkSourceContents(function(sourceFile, sourceContent) {
        map.setSourceContent(sourceFile, sourceContent);
    });
    return {
        code: generated.code,
        map: map
    };
};
exports.SourceNode = SourceNode;

},{"./source-map-generator":"eAEEU","./util":"tCCrk"}],"j0OeV":[function(require,module,exports) {
/* eslint-disable new-cap */ "use strict";
exports.__esModule = true;
exports.print = print;
exports.PrintVisitor = PrintVisitor;
// istanbul ignore next
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
var _visitor = require("./visitor");
var _visitor2 = _interopRequireDefault(_visitor);
function print(ast) {
    return new PrintVisitor().accept(ast);
}
function PrintVisitor() {
    this.padding = 0;
}
PrintVisitor.prototype = new _visitor2["default"]();
PrintVisitor.prototype.pad = function(string) {
    var out = "";
    for(var i = 0, l = this.padding; i < l; i++)out += "  ";
    out += string + "\n";
    return out;
};
PrintVisitor.prototype.Program = function(program) {
    var out = "", body = program.body, i = undefined, l = undefined;
    if (program.blockParams) {
        var blockParams = "BLOCK PARAMS: [";
        for(i = 0, l = program.blockParams.length; i < l; i++)blockParams += " " + program.blockParams[i];
        blockParams += " ]";
        out += this.pad(blockParams);
    }
    for(i = 0, l = body.length; i < l; i++)out += this.accept(body[i]);
    this.padding--;
    return out;
};
PrintVisitor.prototype.MustacheStatement = function(mustache) {
    return this.pad("{{ " + this.SubExpression(mustache) + " }}");
};
PrintVisitor.prototype.Decorator = function(mustache) {
    return this.pad("{{ DIRECTIVE " + this.SubExpression(mustache) + " }}");
};
PrintVisitor.prototype.BlockStatement = PrintVisitor.prototype.DecoratorBlock = function(block) {
    var out = "";
    out += this.pad((block.type === "DecoratorBlock" ? "DIRECTIVE " : "") + "BLOCK:");
    this.padding++;
    out += this.pad(this.SubExpression(block));
    if (block.program) {
        out += this.pad("PROGRAM:");
        this.padding++;
        out += this.accept(block.program);
        this.padding--;
    }
    if (block.inverse) {
        if (block.program) this.padding++;
        out += this.pad("{{^}}");
        this.padding++;
        out += this.accept(block.inverse);
        this.padding--;
        if (block.program) this.padding--;
    }
    this.padding--;
    return out;
};
PrintVisitor.prototype.PartialStatement = function(partial) {
    var content = "PARTIAL:" + partial.name.original;
    if (partial.params[0]) content += " " + this.accept(partial.params[0]);
    if (partial.hash) content += " " + this.accept(partial.hash);
    return this.pad("{{> " + content + " }}");
};
PrintVisitor.prototype.PartialBlockStatement = function(partial) {
    var content = "PARTIAL BLOCK:" + partial.name.original;
    if (partial.params[0]) content += " " + this.accept(partial.params[0]);
    if (partial.hash) content += " " + this.accept(partial.hash);
    content += " " + this.pad("PROGRAM:");
    this.padding++;
    content += this.accept(partial.program);
    this.padding--;
    return this.pad("{{> " + content + " }}");
};
PrintVisitor.prototype.ContentStatement = function(content) {
    return this.pad("CONTENT[ '" + content.value + "' ]");
};
PrintVisitor.prototype.CommentStatement = function(comment) {
    return this.pad("{{! '" + comment.value + "' }}");
};
PrintVisitor.prototype.SubExpression = function(sexpr) {
    var params = sexpr.params, paramStrings = [], hash = undefined;
    for(var i = 0, l = params.length; i < l; i++)paramStrings.push(this.accept(params[i]));
    params = "[" + paramStrings.join(", ") + "]";
    hash = sexpr.hash ? " " + this.accept(sexpr.hash) : "";
    return this.accept(sexpr.path) + " " + params + hash;
};
PrintVisitor.prototype.PathExpression = function(id) {
    var path = id.parts.join("/");
    return (id.data ? "@" : "") + "PATH:" + path;
};
PrintVisitor.prototype.StringLiteral = function(string) {
    return '"' + string.value + '"';
};
PrintVisitor.prototype.NumberLiteral = function(number) {
    return "NUMBER{" + number.value + "}";
};
PrintVisitor.prototype.BooleanLiteral = function(bool) {
    return "BOOLEAN{" + bool.value + "}";
};
PrintVisitor.prototype.UndefinedLiteral = function() {
    return "UNDEFINED";
};
PrintVisitor.prototype.NullLiteral = function() {
    return "NULL";
};
PrintVisitor.prototype.Hash = function(hash) {
    var pairs = hash.pairs, joinedPairs = [];
    for(var i = 0, l = pairs.length; i < l; i++)joinedPairs.push(this.accept(pairs[i]));
    return "HASH{" + joinedPairs.join(", ") + "}";
};
PrintVisitor.prototype.HashPair = function(pair) {
    return pair.key + "=" + this.accept(pair.value);
}; /* eslint-enable new-cap */ 

},{"./visitor":"fk5sS"}],"jhUEF":[function(require,module,exports) {
"use strict";

},{}],"A6Vfe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class LoadMoreBTN {
    constructor({ selector , hidden =false  }){
        this.refs = this.getRefs(selector);
        hidden && this.hide();
    }
    getRefs(selector) {
        const refs = {};
        refs.button = document.querySelector(selector);
        refs.label = refs.button.querySelector(".label");
        return refs;
    }
    enable() {
        this.refs.button.disabled = false;
        this.refs.label.textContent = "Load more";
    }
    disable() {
        this.refs.button.disabled = true;
        this.refs.label.textContent = "Loading...";
    }
    show() {
        this.refs.button.classList.remove("is-hidden");
    }
    hide() {
        this.refs.button.classList.add("is-hidden");
    }
}
exports.default = LoadMoreBTN;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["1RB6v","8lqZg"], "8lqZg", "parcelRequired7c6")

//# sourceMappingURL=index.975ef6c8.js.map

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var exceptions_1 = require('angular2/src/facade/exceptions');
var di_1 = require('angular2/src/core/di');
/**
 * Represents a location in a View that has an injection, change-detection and render context
 * associated with it.
 *
 * An `ElementRef` is created for each element in the Template that contains a Directive, Component
 * or data-binding.
 *
 * An `ElementRef` is backed by a render-specific element. In the browser, this is usually a DOM
 * element.
 */
var ElementRef = (function () {
    function ElementRef() {
    }
    Object.defineProperty(ElementRef.prototype, "nativeElement", {
        /**
         * The underlying native element or `null` if direct access to native elements is not supported
         * (e.g. when the application runs in a web worker).
         *
         * <div class="callout is-critical">
         *   <header>Use with caution</header>
         *   <p>
         *    Use this API as the last resort when direct access to DOM is needed. Use templating and
         *    data-binding provided by Angular instead. Alternatively you take a look at {@link Renderer}
         *    which provides API that can safely be used even when direct access to native elements is not
         *    supported.
         *   </p>
         *   <p>
         *    Relying on direct DOM access creates tight coupling between your application and rendering
         *    layers which will make it impossible to separate the two and deploy your application into a
         *    web worker.
         *   </p>
         * </div>
         */
        get: function () { return exceptions_1.unimplemented(); },
        enumerable: true,
        configurable: true
    });
    ElementRef = __decorate([
        di_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ElementRef);
    return ElementRef;
})();
exports.ElementRef = ElementRef;
var ElementRef_ = (function () {
    function ElementRef_(_appElement) {
        this._appElement = _appElement;
    }
    Object.defineProperty(ElementRef_.prototype, "internalElement", {
        get: function () { return this._appElement; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElementRef_.prototype, "nativeElement", {
        get: function () { return this._appElement.nativeElement; },
        enumerable: true,
        configurable: true
    });
    return ElementRef_;
})();
exports.ElementRef_ = ElementRef_;
//# sourceMappingURL=element_ref.js.map
System.register(['angular2/src/core/di'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var di_1;
    var RenderComponentType, RenderDebugInfo, Renderer, RootRenderer;
    return {
        setters:[
            function (di_1_1) {
                di_1 = di_1_1;
            }],
        execute: function() {
            RenderComponentType = (function () {
                function RenderComponentType(id, encapsulation, styles) {
                    this.id = id;
                    this.encapsulation = encapsulation;
                    this.styles = styles;
                }
                return RenderComponentType;
            }());
            exports_1("RenderComponentType", RenderComponentType);
            RenderDebugInfo = (function () {
                function RenderDebugInfo(injector, component, providerTokens, locals) {
                    this.injector = injector;
                    this.component = component;
                    this.providerTokens = providerTokens;
                    this.locals = locals;
                }
                return RenderDebugInfo;
            }());
            exports_1("RenderDebugInfo", RenderDebugInfo);
            Renderer = (function () {
                function Renderer() {
                }
                Renderer = __decorate([
                    di_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], Renderer);
                return Renderer;
            }());
            exports_1("Renderer", Renderer);
            /**
             * Injectable service that provides a low-level interface for modifying the UI.
             *
             * Use this service to bypass Angular's templating and make custom UI changes that can't be
             * expressed declaratively. For example if you need to set a property or an attribute whose name is
             * not statically known, use {@link #setElementProperty} or {@link #setElementAttribute}
             * respectively.
             *
             * If you are implementing a custom renderer, you must implement this interface.
             *
             * The default Renderer implementation is `DomRenderer`. Also available is `WebWorkerRenderer`.
             */
            RootRenderer = (function () {
                function RootRenderer() {
                }
                return RootRenderer;
            }());
            exports_1("RootRenderer", RootRenderer);
        }
    }
});
//# sourceMappingURL=api.js.map
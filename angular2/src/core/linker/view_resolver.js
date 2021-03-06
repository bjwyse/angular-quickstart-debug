System.register(['angular2/src/core/di', '../metadata/view', '../metadata/directives', 'angular2/src/facade/lang', 'angular2/src/facade/exceptions', 'angular2/src/facade/collection', 'angular2/src/core/reflection/reflection'], function(exports_1, context_1) {
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
    var di_1, view_1, directives_1, lang_1, exceptions_1, collection_1, reflection_1;
    var ViewResolver;
    return {
        setters:[
            function (di_1_1) {
                di_1 = di_1_1;
            },
            function (view_1_1) {
                view_1 = view_1_1;
            },
            function (directives_1_1) {
                directives_1 = directives_1_1;
            },
            function (lang_1_1) {
                lang_1 = lang_1_1;
            },
            function (exceptions_1_1) {
                exceptions_1 = exceptions_1_1;
            },
            function (collection_1_1) {
                collection_1 = collection_1_1;
            },
            function (reflection_1_1) {
                reflection_1 = reflection_1_1;
            }],
        execute: function() {
            /**
             * Resolves types to {@link ViewMetadata}.
             */
            ViewResolver = (function () {
                function ViewResolver() {
                    /** @internal */
                    this._cache = new collection_1.Map();
                }
                ViewResolver.prototype.resolve = function (component) {
                    var view = this._cache.get(component);
                    if (lang_1.isBlank(view)) {
                        view = this._resolve(component);
                        this._cache.set(component, view);
                    }
                    return view;
                };
                /** @internal */
                ViewResolver.prototype._resolve = function (component) {
                    var compMeta;
                    var viewMeta;
                    reflection_1.reflector.annotations(component).forEach(function (m) {
                        if (m instanceof view_1.ViewMetadata) {
                            viewMeta = m;
                        }
                        if (m instanceof directives_1.ComponentMetadata) {
                            compMeta = m;
                        }
                    });
                    if (lang_1.isPresent(compMeta)) {
                        if (lang_1.isBlank(compMeta.template) && lang_1.isBlank(compMeta.templateUrl) && lang_1.isBlank(viewMeta)) {
                            throw new exceptions_1.BaseException("Component '" + lang_1.stringify(component) + "' must have either 'template' or 'templateUrl' set.");
                        }
                        else if (lang_1.isPresent(compMeta.template) && lang_1.isPresent(viewMeta)) {
                            this._throwMixingViewAndComponent("template", component);
                        }
                        else if (lang_1.isPresent(compMeta.templateUrl) && lang_1.isPresent(viewMeta)) {
                            this._throwMixingViewAndComponent("templateUrl", component);
                        }
                        else if (lang_1.isPresent(compMeta.directives) && lang_1.isPresent(viewMeta)) {
                            this._throwMixingViewAndComponent("directives", component);
                        }
                        else if (lang_1.isPresent(compMeta.pipes) && lang_1.isPresent(viewMeta)) {
                            this._throwMixingViewAndComponent("pipes", component);
                        }
                        else if (lang_1.isPresent(compMeta.encapsulation) && lang_1.isPresent(viewMeta)) {
                            this._throwMixingViewAndComponent("encapsulation", component);
                        }
                        else if (lang_1.isPresent(compMeta.styles) && lang_1.isPresent(viewMeta)) {
                            this._throwMixingViewAndComponent("styles", component);
                        }
                        else if (lang_1.isPresent(compMeta.styleUrls) && lang_1.isPresent(viewMeta)) {
                            this._throwMixingViewAndComponent("styleUrls", component);
                        }
                        else if (lang_1.isPresent(viewMeta)) {
                            return viewMeta;
                        }
                        else {
                            return new view_1.ViewMetadata({
                                templateUrl: compMeta.templateUrl,
                                template: compMeta.template,
                                directives: compMeta.directives,
                                pipes: compMeta.pipes,
                                encapsulation: compMeta.encapsulation,
                                styles: compMeta.styles,
                                styleUrls: compMeta.styleUrls
                            });
                        }
                    }
                    else {
                        if (lang_1.isBlank(viewMeta)) {
                            throw new exceptions_1.BaseException("Could not compile '" + lang_1.stringify(component) + "' because it is not a component.");
                        }
                        else {
                            return viewMeta;
                        }
                    }
                    return null;
                };
                /** @internal */
                ViewResolver.prototype._throwMixingViewAndComponent = function (propertyName, component) {
                    throw new exceptions_1.BaseException("Component '" + lang_1.stringify(component) + "' cannot have both '" + propertyName + "' and '@View' set at the same time\"");
                };
                ViewResolver = __decorate([
                    di_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], ViewResolver);
                return ViewResolver;
            }());
            exports_1("ViewResolver", ViewResolver);
        }
    }
});
//# sourceMappingURL=view_resolver.js.map
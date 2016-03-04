System.register(['./constants', 'angular2/src/core/di'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var constants_1, di_1;
    var ChangeDetectorRef, ChangeDetectorRef_;
    return {
        setters:[
            function (constants_1_1) {
                constants_1 = constants_1_1;
            },
            function (di_1_1) {
                di_1 = di_1_1;
            }],
        execute: function() {
            ChangeDetectorRef = (function () {
                function ChangeDetectorRef() {
                }
                ChangeDetectorRef = __decorate([
                    di_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], ChangeDetectorRef);
                return ChangeDetectorRef;
            }());
            exports_1("ChangeDetectorRef", ChangeDetectorRef);
            ChangeDetectorRef_ = (function (_super) {
                __extends(ChangeDetectorRef_, _super);
                function ChangeDetectorRef_(_cd) {
                    _super.call(this);
                    this._cd = _cd;
                }
                ChangeDetectorRef_.prototype.markForCheck = function () { this._cd.markPathToRootAsCheckOnce(); };
                ChangeDetectorRef_.prototype.detach = function () { this._cd.mode = constants_1.ChangeDetectionStrategy.Detached; };
                ChangeDetectorRef_.prototype.detectChanges = function () { this._cd.detectChanges(); };
                ChangeDetectorRef_.prototype.checkNoChanges = function () { this._cd.checkNoChanges(); };
                ChangeDetectorRef_.prototype.reattach = function () {
                    this._cd.mode = constants_1.ChangeDetectionStrategy.CheckAlways;
                    this.markForCheck();
                };
                return ChangeDetectorRef_;
            }(ChangeDetectorRef));
            exports_1("ChangeDetectorRef_", ChangeDetectorRef_);
        }
    }
});
//# sourceMappingURL=change_detector_ref.js.map
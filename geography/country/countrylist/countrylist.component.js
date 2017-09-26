"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var geniejs_1 = require("@kgfsl/geniejs");
var countrylist_service_1 = require("./countrylist.service");
var CountryListComponent = CountryListComponent_1 = (function () {
    function CountryListComponent(logger, countryListService, presenceService) {
        this.logger = logger;
        this.countryListService = countryListService;
        this.presenceService = presenceService;
        this.propagateChange = function () { };
        this.Countryloading = false;
        this.index = 0;
        this.id = 'Country';
        this.disabled = false;
        this.valueEmitter = new core_1.EventEmitter();
    }
    CountryListComponent.prototype.ngOnInit = function () {
        var _this = this;
        try {
            var parent_1 = this;
            this.presenceService.label = 'Country';
            this.presenceService.addQueue();
            this.Countryloading = true;
            this.countryListService.getCountryList()
                .finally(function () {
                _this.Countryloading = false;
                _this.presenceService.deQueue();
            })
                .subscribe(function (data) { return _this.CountryList = data; }, function (response) {
                var error = new Error();
                error.name = response.status + "-" + response.statusText;
                parent_1.logger.error(module.id, error);
            });
        }
        catch (exception) {
            this.logger.error(module.id, exception);
        }
    };
    CountryListComponent.prototype.valueChange = function () {
        this.propagateChange(this.countryCode);
        this.valueEmitter.emit(this.countryCode);
    };
    CountryListComponent.prototype.writeValue = function (value) {
        this.countryCode = value;
    };
    CountryListComponent.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    CountryListComponent.prototype.registerOnTouched = function () { };
    return CountryListComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], CountryListComponent.prototype, "index", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], CountryListComponent.prototype, "isMandatory", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], CountryListComponent.prototype, "loadedAtParent", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], CountryListComponent.prototype, "id", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], CountryListComponent.prototype, "countryCode", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], CountryListComponent.prototype, "disabled", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], CountryListComponent.prototype, "valueEmitter", void 0);
CountryListComponent = CountryListComponent_1 = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'countrylist',
        templateUrl: './countrylist.html',
        providers: [{ provide: forms_1.NG_VALUE_ACCESSOR, useExisting: core_1.forwardRef(function () { return CountryListComponent_1; }), multi: true }, countrylist_service_1.CountryListService,
            geniejs_1.PresenceService],
    }),
    __metadata("design:paramtypes", [geniejs_1.Logger, countrylist_service_1.CountryListService, geniejs_1.PresenceService])
], CountryListComponent);
exports.CountryListComponent = CountryListComponent;
var CountryListComponent_1;
//# sourceMappingURL=countrylist.component.js.map
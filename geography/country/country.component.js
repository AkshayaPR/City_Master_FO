"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var country_service_1 = require("./country.service");
var country_model_1 = require("./country.model");
var geniejs_1 = require("@kgfsl/geniejs");
var CountryComponent = (function (_super) {
    __extends(CountryComponent, _super);
    function CountryComponent(logger, countryService, masterTemplateRef) {
        var _this = _super.call(this, countryService, logger, masterTemplateRef) || this;
        _this.countryService = countryService;
        _this.masterTemplateRef = masterTemplateRef;
        return _this;
    }
    CountryComponent.prototype.ngOnInit = function () {
        this.onResetClicked();
    };
    CountryComponent.prototype.onResetClicked = function () {
        this.model = new country_model_1.Country();
    };
    CountryComponent.prototype.getFormValidity = function () {
        return this.form.valid;
    };
    CountryComponent.prototype.getHeader = function () {
        var headers = [
            { jsonNode: "code", displayText: "Country  Code", style: JSON.parse('{"width":"170px"}'), validationClass: 'mandatory' },
            { jsonNode: "countryName", displayText: "Country Name", style: JSON.parse('{"width":"150px"}'), validationClass: 'mandatory' },
            { jsonNode: "othersystemcode", displayText: "Other System Code", style: JSON.parse('{"width":"170px"}'), validationClass: 'mandatory' },
            { jsonNode: "active", displayText: "Active", style: JSON.parse('{"width":"100px"}') }
        ];
        return headers;
    };
    return CountryComponent;
}(geniejs_1.AbstractMasterComponent));
__decorate([
    core_1.ViewChild("form"),
    __metadata("design:type", forms_1.NgForm)
], CountryComponent.prototype, "form", void 0);
CountryComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'app',
        templateUrl: './country.html',
        providers: [country_service_1.CountryService]
    }),
    __metadata("design:paramtypes", [geniejs_1.Logger, country_service_1.CountryService, geniejs_1.MasterTemplateRef])
], CountryComponent);
exports.CountryComponent = CountryComponent;
//# sourceMappingURL=country.component.js.map
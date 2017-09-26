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
var city_service_1 = require("./city.service");
var city_model_1 = require("./city.model");
var geniejs_1 = require("@kgfsl/geniejs");
var CityComponent = (function (_super) {
    __extends(CityComponent, _super);
    function CityComponent(logger, configurationService, masterTemplateRef) {
        var _this = _super.call(this, configurationService, logger, masterTemplateRef) || this;
        _this.configurationService = configurationService;
        _this.masterTemplateRef = masterTemplateRef;
        return _this;
    }
    CityComponent.prototype.ngOnInit = function () {
        this.onResetClicked();
    };
    CityComponent.prototype.onResetClicked = function () {
        this.model = new city_model_1.City();
    };
    CityComponent.prototype.getFormValidity = function () {
        return this.form.valid;
    };
    CityComponent.prototype.getHeader = function () {
        var headers = [
            { jsonNode: "country.code", displayText: "Country", style: JSON.parse('{"width":"170px"}'), validationClass: 'mandatory' },
            { jsonNode: "state.code", displayText: "State", style: JSON.parse('{"width":"170px"}'), validationClass: 'mandatory' },
            { jsonNode: "cityCode", displayText: "City Code", style: JSON.parse('{"width":"170px"}'), validationClass: 'mandatory' },
            { jsonNode: "cityName", displayText: "City Name", style: JSON.parse('{"width":"170px"}'), validationClass: 'mandatory' },
            { jsonNode: "otherSystemCode", displayText: "Other System Code", style: JSON.parse('{"width":"170px"}'), validationClass: 'mandatory' },
            { jsonNode: "active", displayText: "Active", style: JSON.parse('{"width":"100px"}') }
        ];
        return headers;
    };
    CityComponent.prototype.setCountrycode = function (event) {
        console.log(event);
        console.log(event.value);
        console.log("Country");
    };
    CityComponent.prototype.setStatecode = function (event) {
        console.log(event);
        console.log(event.value);
        console.log("State");
    };
    return CityComponent;
}(geniejs_1.AbstractMasterComponent));
__decorate([
    core_1.ViewChild("form"),
    __metadata("design:type", forms_1.NgForm)
], CityComponent.prototype, "form", void 0);
CityComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'app',
        templateUrl: './city.html',
        providers: [city_service_1.CityService]
    }),
    __metadata("design:paramtypes", [geniejs_1.Logger, city_service_1.CityService, geniejs_1.MasterTemplateRef])
], CityComponent);
exports.CityComponent = CityComponent;
//# sourceMappingURL=city.component.js.map
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
var geniejs_1 = require("@kgfsl/geniejs");
var state_model_1 = require("./state.model");
var state_service_1 = require("./state.service");
var StateComponent = (function (_super) {
    __extends(StateComponent, _super);
    function StateComponent(logger, configurationService, masterTemplateRef) {
        var _this = _super.call(this, configurationService, logger, masterTemplateRef) || this;
        _this.configurationService = configurationService;
        _this.masterTemplateRef = masterTemplateRef;
        return _this;
    }
    StateComponent.prototype.ngOnInit = function () {
        this.onResetClicked();
    };
    StateComponent.prototype.onResetClicked = function () {
        this.model = new state_model_1.State();
    };
    StateComponent.prototype.getFormValidity = function () {
        return this.form.valid;
    };
    StateComponent.prototype.getHeader = function () {
        var headers = [
            { jsonNode: "code", displayText: "State Code", style: JSON.parse('{"width":"170px"}'), validationClass: 'mandatory' },
            { jsonNode: "statename", displayText: "State Name", style: JSON.parse('{"width":"150px"}'), validationClass: 'mandatory' },
            { jsonNode: "othersystemcode", displayText: "Other System Code", style: JSON.parse('{"width":"100px"}') },
            { jsonNode: "countrycode.countryName", displayText: "Country Name", style: JSON.parse('{"width":"100px"}') },
            { jsonNode: "active", displayText: "Active", style: JSON.parse('{"width":"100px"}') }
        ];
        return headers;
    };
    StateComponent.prototype.setCountrycode = function (event) {
        console.log(event);
        console.log("Country");
    };
    return StateComponent;
}(geniejs_1.AbstractMasterComponent));
__decorate([
    core_1.ViewChild("form"),
    __metadata("design:type", forms_1.NgForm)
], StateComponent.prototype, "form", void 0);
StateComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'state',
        templateUrl: './state.html',
        providers: [state_service_1.StateService]
    }),
    __metadata("design:paramtypes", [geniejs_1.Logger, state_service_1.StateService, geniejs_1.MasterTemplateRef])
], StateComponent);
exports.StateComponent = StateComponent;
//# sourceMappingURL=state.component.js.map
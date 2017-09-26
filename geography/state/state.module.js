"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var geniejs_1 = require("@kgfsl/geniejs");
var state_component_1 = require("./state.component");
var countrylist_module_1 = require("../country/countrylist/countrylist.module");
var statelist_module_1 = require("../state/statelist/statelist.module");
var routes = geniejs_1.MasterModule.forChild(state_component_1.StateComponent);
var StateModule = (function () {
    function StateModule() {
    }
    return StateModule;
}());
StateModule = __decorate([
    core_1.NgModule({
        imports: [routes, countrylist_module_1.CountryListModule, statelist_module_1.StateListModule],
        declarations: [state_component_1.StateComponent],
    })
], StateModule);
exports.StateModule = StateModule;
//# sourceMappingURL=state.module.js.map
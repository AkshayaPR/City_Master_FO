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
var cityupload_service_1 = require("./cityupload.service");
var city_component_1 = require("./city.component");
var countrylist_module_1 = require("../country/countrylist/countrylist.module");
var statelist_module_1 = require("../state/statelist/statelist.module");
var routes = geniejs_1.MasterModule.forChild(city_component_1.CityComponent);
function uploadServiceProvider() {
    return { provide: geniejs_1.UploadService, useClass: cityupload_service_1.CityUploadService };
}
exports.uploadServiceProvider = uploadServiceProvider;
var CityModule = (function () {
    function CityModule() {
    }
    return CityModule;
}());
CityModule = __decorate([
    core_1.NgModule({
        imports: [routes, countrylist_module_1.CountryListModule, statelist_module_1.StateListModule],
        declarations: [city_component_1.CityComponent]
    })
], CityModule);
exports.CityModule = CityModule;
//# sourceMappingURL=city.module.js.map
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
var countryupload_service_1 = require("./countryupload.service");
var country_component_1 = require("./country.component");
var routes = geniejs_1.MasterModule.forChild(country_component_1.CountryComponent);
function uploadServiceProvider() {
    return { provide: geniejs_1.UploadService, useClass: countryupload_service_1.CountryUploadService };
}
exports.uploadServiceProvider = uploadServiceProvider;
var CountryModule = (function () {
    function CountryModule() {
    }
    return CountryModule;
}());
CountryModule = __decorate([
    core_1.NgModule({
        imports: [routes],
        declarations: [country_component_1.CountryComponent],
        providers: [uploadServiceProvider()]
    })
], CountryModule);
exports.CountryModule = CountryModule;
//# sourceMappingURL=country.module.js.map
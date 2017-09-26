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
var http_1 = require("@angular/http");
var geniejs_1 = require("@kgfsl/geniejs");
var CountryListService = (function (_super) {
    __extends(CountryListService, _super);
    function CountryListService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        return _this;
    }
    CountryListService.prototype.getBaseRequestPath = function () {
        return "/geography/country/countrylist";
    };
    CountryListService.prototype.setModuleId = function () {
        return module.id;
    };
    CountryListService.prototype.getCountryList = function () {
        return this.http.get(this.baseRequestPath + "/getCountryList").map(geniejs_1.getJson);
    };
    return CountryListService;
}(geniejs_1.BaseService));
CountryListService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], CountryListService);
exports.CountryListService = CountryListService;
//# sourceMappingURL=countrylist.service.js.map
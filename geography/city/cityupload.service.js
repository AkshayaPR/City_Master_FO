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
var city_model_1 = require("./city.model");
var CityUploadService = (function (_super) {
    __extends(CityUploadService, _super);
    function CityUploadService(http, sharedService) {
        return _super.call(this, http, sharedService) || this;
    }
    CityUploadService.prototype.processData = function (uploadData, modalData) {
        var cityList = new Array();
        uploadData.forEach(function (data) {
            var currentConfiguration = new city_model_1.City();
            currentConfiguration.country.code = data.country.countryCode;
            currentConfiguration.state.code = data.state.stateCode;
            currentConfiguration.cityCode = data.cityCode;
            currentConfiguration.cityName = data.cityName;
            currentConfiguration.otherSystemcode = data.othersystemcode;
            currentConfiguration.active = data.active;
            cityList.push(currentConfiguration);
        });
        return cityList;
    };
    return CityUploadService;
}(geniejs_1.UploadService));
CityUploadService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, geniejs_1.SharedService])
], CityUploadService);
exports.CityUploadService = CityUploadService;
//# sourceMappingURL=cityupload.service.js.map
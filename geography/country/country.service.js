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
var CountryService = (function (_super) {
    __extends(CountryService, _super);
    function CountryService(http, sharedService, modelProviderService) {
        return _super.call(this, http, sharedService, modelProviderService) || this;
    }
    CountryService.prototype.getBaseRequestPath = function () {
        return "/geography/country";
    };
    CountryService.prototype.setModuleId = function () {
        return module.id;
    };
    CountryService.prototype.findByCode = function (code) {
        return this.http.post(this.baseRequestPath + "/findByCode", code).toPromise();
    };
    return CountryService;
}(geniejs_1.AbstractMasterService));
CountryService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, geniejs_1.SharedService, geniejs_1.ModelProviderService])
], CountryService);
exports.CountryService = CountryService;
//# sourceMappingURL=country.service.js.map
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
Object.defineProperty(exports, "__esModule", { value: true });
var geniejs_1 = require("@kgfsl/geniejs");
var country_model_1 = require("../country/country.model");
var state_model_1 = require("../state/state.model");
var City = (function (_super) {
    __extends(City, _super);
    function City() {
        var _this = _super.call(this) || this;
        _this.country = new country_model_1.Country();
        _this.state = new state_model_1.State();
        return _this;
    }
    // for master file upload
    City.prototype.getUniqueKey = function () {
        return { "citycode": this.cityCode };
    };
    return City;
}(geniejs_1.Base4EyeAuditColumnWise));
exports.City = City;
//# sourceMappingURL=city.model.js.map
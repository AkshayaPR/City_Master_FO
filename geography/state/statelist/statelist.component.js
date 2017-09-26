"use strict";
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
var statelist_service_1 = require("./statelist.service");
var StateListComponent = StateListComponent_1 = (function () {
    function StateListComponent(logger, stateListService, presenceService) {
        this.logger = logger;
        this.stateListService = stateListService;
        this.presenceService = presenceService;
        this.propagateChange = function () { };
        this.Stateloading = false;
        this.index = 0;
        this.id = 'State';
        this.disabled = false;
        this.valueEmitter = new core_1.EventEmitter();
    }
    StateListComponent.prototype.ngOnInit = function () {
        var _this = this;
        try {
            var parent_1 = this;
            this.presenceService.label = 'State';
            this.presenceService.addQueue();
            this.Stateloading = true;
            this.stateListService.getStateList()
                .finally(function () {
                _this.Stateloading = false;
                _this.presenceService.deQueue();
            })
                .subscribe(function (data) { return _this.StateList = data; }, function (response) {
                var error = new Error();
                error.name = response.status + "-" + response.statusText;
                parent_1.logger.error(module.id, error);
            });
        }
        catch (exception) {
            this.logger.error(module.id, exception);
        }
    };
    StateListComponent.prototype.valueChange = function () {
        this.propagateChange(this.stateCode);
        this.valueEmitter.emit(this.stateCode);
    };
    StateListComponent.prototype.writeValue = function (value) {
        this.stateCode = value;
    };
    StateListComponent.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    StateListComponent.prototype.registerOnTouched = function () { };
    return StateListComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], StateListComponent.prototype, "index", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], StateListComponent.prototype, "isMandatory", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], StateListComponent.prototype, "loadedAtParent", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], StateListComponent.prototype, "id", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], StateListComponent.prototype, "stateCode", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], StateListComponent.prototype, "disabled", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], StateListComponent.prototype, "valueEmitter", void 0);
StateListComponent = StateListComponent_1 = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'statelist',
        templateUrl: './statelist.html',
        providers: [{ provide: forms_1.NG_VALUE_ACCESSOR, useExisting: core_1.forwardRef(function () { return StateListComponent_1; }), multi: true }, statelist_service_1.StateListService,
            geniejs_1.PresenceService],
    }),
    __metadata("design:paramtypes", [geniejs_1.Logger, statelist_service_1.StateListService, geniejs_1.PresenceService])
], StateListComponent);
exports.StateListComponent = StateListComponent;
var StateListComponent_1;
//# sourceMappingURL=statelist.component.js.map
import { Component, Input, Output, OnInit, EventEmitter, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { PresenceService, Logger, OnError } from '@kgfsl/geniejs';
import { StateListService } from './statelist.service';
import { State } from "../state.model";


@Component({
    moduleId: module.id,
    selector: 'statelist',
    templateUrl: './statelist.html',
    providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => StateListComponent), multi: true }, StateListService,
        PresenceService],
})
export class StateListComponent implements OnInit, ControlValueAccessor {

    StateList: Array<State>;
    propagateChange: any = () => { };

    Stateloading: boolean = false;

    @Input() index: number = 0;
    @Input() isMandatory: boolean;
    @Input() loadedAtParent: boolean;
    @Input() id: string = 'State';
    @Input() stateCode: string;
    @Input() disabled: boolean = false;
    @Output() valueEmitter: EventEmitter<string>;

    constructor(private logger: Logger, private stateListService: StateListService, public presenceService: PresenceService) {
        this.valueEmitter = new EventEmitter<string>();
    }

    ngOnInit() {
        try {
            let parent = this;
            this.presenceService.label = 'State';
            this.presenceService.addQueue();
            this.Stateloading = true;
            this.stateListService.getStateList()
                .finally(() => {
                    this.Stateloading = false;
                    this.presenceService.deQueue();
                })
                .subscribe((data) => this.StateList = data, function (response) {
                    let error: Error = new Error();
                    error.name = response.status + "-" + response.statusText;
                    parent.logger.error(module.id, error);
                });
        }
        catch (exception) {
            this.logger.error(module.id, exception);
        }
    }
    valueChange() {
        this.propagateChange(this.stateCode);
        this.valueEmitter.emit(this.stateCode);
    }

    writeValue(value) {
        this.stateCode = value;
    }

    registerOnChange(fn) {
        this.propagateChange = fn;
    }

    registerOnTouched() { }
}
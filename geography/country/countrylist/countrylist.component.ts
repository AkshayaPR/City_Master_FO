import { Component, Input, Output, OnInit, EventEmitter, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { PresenceService, Logger, OnError } from '@kgfsl/geniejs';
import { CountryListService } from './countrylist.service';
import { Country } from "../country.model";


@Component({
    moduleId: module.id,
    selector: 'countrylist',
    templateUrl: './countrylist.html',
    providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => CountryListComponent), multi: true }, CountryListService,
        PresenceService],
})
export class CountryListComponent implements OnInit,ControlValueAccessor {

    CountryList: Array<Country>;
    propagateChange: any = () => { };

    Countryloading: boolean = false;

    @Input() index: number = 0;
    @Input() isMandatory: boolean;
    @Input() loadedAtParent: boolean;
    @Input() id: string = 'Country';
    @Input() countryCode: string;
    @Input() disabled: boolean = false;
    @Output() valueEmitter: EventEmitter<string>;

    constructor(private logger: Logger, private countryListService: CountryListService, public presenceService: PresenceService) {
        this.valueEmitter = new EventEmitter<string>();
    }

    ngOnInit() {
        try {
            let parent = this;
            this.presenceService.label = 'Country';
            this.presenceService.addQueue();
            this.Countryloading = true;
            this.countryListService.getCountryList()
                .finally(() => {
                    this.Countryloading = false;
                    this.presenceService.deQueue();
                })
                .subscribe((data) => this.CountryList = data, function (response) {
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
        this.propagateChange(this.countryCode);
        this.valueEmitter.emit(this.countryCode);
    }

    writeValue(value) {
        this.countryCode = value;
    }

    registerOnChange(fn) {
        this.propagateChange = fn;
    }

    registerOnTouched() { }
}
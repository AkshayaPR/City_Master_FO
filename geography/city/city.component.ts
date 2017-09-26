import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CityService } from './city.service';
import { City } from './city.model';
import { AbstractMasterComponent, MasterTemplateRef, GridHeader, Logger } from '@kgfsl/geniejs';
import { Country } from "../country/country.model";
import { State } from "../state/state.model";
@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: './city.html',
    providers: [CityService]
})
export class CityComponent extends AbstractMasterComponent<City> implements OnInit {

    @ViewChild("form") form: NgForm;

    constructor(logger: Logger, private configurationService: CityService, private masterTemplateRef: MasterTemplateRef) {
        super(configurationService, logger, masterTemplateRef);
    }

    ngOnInit() {
        this.onResetClicked();
    }

    onResetClicked(): void {
        this.model = new City();
    }

    public getFormValidity(): boolean {
        return this.form.valid;
    }

    getHeader(): Array<GridHeader> {
        let headers = [
            { jsonNode: "country.code", displayText: "Country", style: JSON.parse('{"width":"170px"}'), validationClass: 'mandatory' },
            { jsonNode: "state.code", displayText: "State", style: JSON.parse('{"width":"170px"}'), validationClass: 'mandatory' },
            { jsonNode: "cityCode", displayText: "City Code", style: JSON.parse('{"width":"170px"}'), validationClass: 'mandatory' },
            { jsonNode: "cityName", displayText: "City Name", style: JSON.parse('{"width":"170px"}'), validationClass: 'mandatory' },
            { jsonNode: "otherSystemCode", displayText: "Other System Code", style: JSON.parse('{"width":"170px"}'), validationClass: 'mandatory' },
            { jsonNode: "active", displayText: "Active", style: JSON.parse('{"width":"100px"}') }
        ];
        return headers;
    }
    setCountrycode(event) {
        console.log(event);
        console.log(event.value);
        console.log("Country");
    }
    setStatecode(event) {
        console.log(event);
        console.log(event.value);
        console.log("State");
    }
}
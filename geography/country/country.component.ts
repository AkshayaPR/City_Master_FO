import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CountryService } from './country.service';
import { Country } from './country.model';
import { AbstractMasterComponent, MasterTemplateRef, GridHeader, Logger } from '@kgfsl/geniejs';

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: './country.html',
    providers: [CountryService]
})
export class CountryComponent extends AbstractMasterComponent<Country> implements OnInit {

    @ViewChild("form") form: NgForm;

    constructor(logger: Logger, private countryService: CountryService, private masterTemplateRef: MasterTemplateRef) {
        super(countryService, logger, masterTemplateRef);
    }

    ngOnInit() {
        this.onResetClicked();
    }

    onResetClicked(): void {
        this.model = new Country();
    }

    public getFormValidity(): boolean {
        return this.form.valid;
    }

    getHeader(): Array<GridHeader> {
        let headers = [
            { jsonNode: "code", displayText: "Country  Code", style: JSON.parse('{"width":"170px"}'), validationClass: 'mandatory' },
            { jsonNode: "countryName", displayText: "Country Name", style: JSON.parse('{"width":"150px"}'), validationClass: 'mandatory' },
            { jsonNode: "othersystemcode", displayText: "Other System Code", style: JSON.parse('{"width":"170px"}'), validationClass: 'mandatory' },
            { jsonNode: "active", displayText: "Active", style: JSON.parse('{"width":"100px"}') }
        ];
        return headers;
    }

}
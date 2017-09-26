import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AbstractMasterComponent, MasterTemplateRef, GridHeader, Logger } from '@kgfsl/geniejs';
import { State } from './state.model';
import { StateService } from './state.service';
import * as moment from 'moment';

@Component({
    moduleId: module.id,
    selector: 'state',
    templateUrl: './state.html',
    providers: [StateService]
})

export class StateComponent extends AbstractMasterComponent<State> implements OnInit {
   
    @ViewChild("form") form: NgForm;

    constructor(logger: Logger, private configurationService: StateService, private masterTemplateRef: MasterTemplateRef) {
        super(configurationService, logger, masterTemplateRef);
    }

    ngOnInit() {
        this.onResetClicked();
    }

    onResetClicked(): void {
        this.model = new State();
    }

    public getFormValidity(): boolean {
        return this.form.valid;
    }

    getHeader(): Array<GridHeader> {
        let headers = [
            { jsonNode: "code", displayText: "State Code", style: JSON.parse('{"width":"170px"}'), validationClass: 'mandatory' },
            { jsonNode: "statename", displayText: "State Name", style: JSON.parse('{"width":"150px"}'), validationClass: 'mandatory' },
            { jsonNode: "othersystemcode", displayText: "Other System Code", style: JSON.parse('{"width":"100px"}') },
            { jsonNode: "countrycode.countryName", displayText: "Country Name", style: JSON.parse('{"width":"100px"}') },
            { jsonNode: "active", displayText: "Active", style: JSON.parse('{"width":"100px"}') }
        ];
        return headers;
    }

    setCountrycode(event) {
        console.log(event);
        console.log("Country");
    }

}
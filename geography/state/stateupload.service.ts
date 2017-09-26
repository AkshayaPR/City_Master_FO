import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { SharedService, UploadService } from '@kgfsl/geniejs'
import { State } from './state.model';

@Injectable()
export class StateUploadService extends UploadService {
    constructor(http: Http, sharedService: SharedService) {
        super(http, sharedService);
    }
    processData(uploadData: Array<any>, modalData: any): any {
        let configurationList: Array<State> = new Array<State>();
        uploadData.forEach(data => {
            let currentConfiguration: State = new State();
            currentConfiguration.code = data.code;
            currentConfiguration.statename = data.description;
            currentConfiguration.othersystemcode = data.configValue;
            currentConfiguration.active = data.active;
            configurationList.push(currentConfiguration);
        });
        return configurationList;
    }
}
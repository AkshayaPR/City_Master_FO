import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { SharedService, UploadService } from '@kgfsl/geniejs'
import { Country } from './country.model';

@Injectable()
export class CountryUploadService extends UploadService {
    constructor(http: Http, sharedService: SharedService) {
        super(http, sharedService);
    }
    processData(uploadData: Array<any>, modalData: any): any {
        let configurationList: Array<Country> = new Array<Country>();
        uploadData.forEach(data => {
            let currentConfiguration: Country = new Country();
            currentConfiguration.code = data.code;
            currentConfiguration.countryName = data.description;
            currentConfiguration.othersystemcode = data.configValue;
            currentConfiguration.active = data.active;
            configurationList.push(currentConfiguration);
        });
        return configurationList;
    }
}
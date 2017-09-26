import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { SharedService, UploadService } from '@kgfsl/geniejs'
import { City } from './city.model';

@Injectable()
export class CityUploadService extends UploadService {
    constructor(http: Http, sharedService: SharedService) {
        super(http, sharedService);
    }
    processData(uploadData: Array<any>, modalData: any): any {
        let cityList: Array<City> = new Array<City>();
        uploadData.forEach(data => {
            let currentConfiguration: City = new City();
            currentConfiguration.country.code = data.country.countryCode;
            currentConfiguration.state.code = data.state.stateCode;
            currentConfiguration.cityCode = data.cityCode;
            currentConfiguration.cityName = data.cityName;
            currentConfiguration.otherSystemcode = data.othersystemcode;
            currentConfiguration.active = data.active;
            cityList.push(currentConfiguration);
        });
        return cityList;
    }
}
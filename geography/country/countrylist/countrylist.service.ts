import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { BaseService, getJson } from '@kgfsl/geniejs';
import { Country } from "../../country/country.model";



@Injectable()
export class CountryListService extends BaseService {

    constructor(private http: Http) {
        super();
    }

    getBaseRequestPath() {
        return "/geography/country/countrylist";
    }

    setModuleId(): string {
        return module.id;
    }

    getCountryList(): Observable<Country[]> {
        return this.http.get(this.baseRequestPath + "/getCountryList").map(getJson);
    }

}
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AbstractMasterService, SharedService, ModelProviderService } from '@kgfsl/geniejs';
import { City } from './index';

@Injectable()
export class CityService extends AbstractMasterService<City> {
    constructor(http: Http, sharedService: SharedService, modelProviderService: ModelProviderService) {
        super(http, sharedService, modelProviderService);
    }

    getBaseRequestPath() {
        return "/geography/city";
    }

    setModuleId(): string {
        return module.id;
    }

    public findByCityCode(CityCode: string): Promise<any> {
        return this.http.post(this.baseRequestPath + "/findByCityCode", CityCode).toPromise();
    }
}
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AbstractMasterService, SharedService, ModelProviderService } from '@kgfsl/geniejs';
import { State } from './state.model';

@Injectable()
export class StateService extends AbstractMasterService<State> {
    constructor(http: Http, sharedService: SharedService, modelProviderService: ModelProviderService) {
        super(http, sharedService, modelProviderService);
    }

    getBaseRequestPath() {
        return "/geography/state";
    }

    setModuleId(): string {
        return module.id;
    }

    public findByCode(code: string): Promise<any> {
        return this.http.post(this.baseRequestPath + "/findByCode", code).toPromise();
    }

}
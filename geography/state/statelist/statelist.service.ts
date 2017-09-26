import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { BaseService, getJson } from '@kgfsl/geniejs';
import { State } from "../../state/state.model";



@Injectable()
export class StateListService extends BaseService {

    constructor(private http: Http) {
        super();
    }

    getBaseRequestPath() {
        return "/geography/state/statelist";
    }

    setModuleId(): string {
        return module.id;
    }

    getStateList(): Observable<State[]> {
        return this.http.get(this.baseRequestPath + "/getStateList").map(getJson);
    }

}
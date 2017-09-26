import { Base4EyeAuditColumnWise } from '@kgfsl/geniejs';
import { Country } from "../country/country.model";

export class State extends Base4EyeAuditColumnWise {
    public code: string;
    public statename: string;
    public countrycode: Country;
    public othersystemcode: string;

    constructor() {
        super();
        this.countrycode = new Country();
    }
    // for master file upload
    public getUniqueKey() {
        return { "code": this.code }
    }
}
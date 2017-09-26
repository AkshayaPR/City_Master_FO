import { Base4EyeAuditColumnWise } from '@kgfsl/geniejs';

export class Country extends Base4EyeAuditColumnWise {
    public code: string;
    public countryName: string;
    public othersystemcode: string;

    // for master file upload
    public getUniqueKey() {
        return { "code": this.code }
    }
}
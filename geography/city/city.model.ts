import { Base4EyeAuditColumnWise } from '@kgfsl/geniejs';
import { Country } from "../country/country.model";
import { State } from "../state/state.model";
export class City extends Base4EyeAuditColumnWise {
	public country: Country;
	public state: State;
	public cityCode: string;
	public cityName: string;
	public otherSystemcode: string;

	constructor() {
		super();
		this.country = new Country();
		this.state = new State();
	}

	// for master file upload
	public getUniqueKey() {
		return { "citycode": this.cityCode }
	}
}
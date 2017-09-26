import { NgModule } from '@angular/core';
import { MasterModule, UploadService } from '@kgfsl/geniejs';
import { StateComponent } from './state.component';
import { CountryListModule } from "../country/countrylist/countrylist.module";
import { StateListModule } from "../state/statelist/statelist.module";

const routes = MasterModule.forChild(StateComponent);
@NgModule({
    imports: [routes, CountryListModule, StateListModule],
    declarations: [StateComponent],
})

export class StateModule {

}
import { NgModule } from '@angular/core';
import { MasterModule, UploadService } from '@kgfsl/geniejs';
import { CityUploadService } from './cityupload.service';
import { CityComponent } from './city.component';
import { CountryListModule } from "../country/countrylist/countrylist.module";
import { StateListModule } from "../state/statelist/statelist.module";
const routes = MasterModule.forChild(CityComponent);
export function uploadServiceProvider() {
    return { provide: UploadService, useClass: CityUploadService };
}

@NgModule({
    imports: [routes, CountryListModule, StateListModule],
    declarations: [CityComponent]
})

export class CityModule { }

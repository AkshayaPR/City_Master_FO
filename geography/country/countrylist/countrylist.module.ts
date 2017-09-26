import { NgModule } from '@angular/core';
import { MasterModule, Logger, PresenceService } from '@kgfsl/geniejs';
import { CountryListService } from './countrylist.service';
import { CountryListComponent } from './countrylist.component';


@NgModule({
    imports: [MasterModule],
    exports: [CountryListComponent],
    declarations: [CountryListComponent]

})
export class CountryListModule { }
import { NgModule } from '@angular/core';
import { MasterModule, UploadService } from '@kgfsl/geniejs';
import { CountryUploadService } from './countryupload.service';
import { CountryComponent } from './country.component';

const routes = MasterModule.forChild(CountryComponent);
export function uploadServiceProvider() {
    return { provide: UploadService, useClass: CountryUploadService };
}

@NgModule({
    imports: [routes],
    declarations: [CountryComponent],
    providers: [uploadServiceProvider()]
})
export class CountryModule { }

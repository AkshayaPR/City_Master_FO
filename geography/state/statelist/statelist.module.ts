import { NgModule } from '@angular/core';
import { MasterModule, Logger, PresenceService } from '@kgfsl/geniejs';
import { StateListService } from './statelist.service';
import { StateListComponent } from './statelist.component';


@NgModule({
    imports: [MasterModule],
    exports: [StateListComponent],
    declarations: [StateListComponent]

})
export class StateListModule { }
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ActivitesComponent } from './activites.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: ActivitesComponent }
    ])],
    exports: [RouterModule]
})
export class ActivitesRoutingModule { }

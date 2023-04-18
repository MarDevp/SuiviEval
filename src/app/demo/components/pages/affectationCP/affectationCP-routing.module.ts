import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AffectationCPComponent } from './affectationCP.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: AffectationCPComponent }
    ])],
    exports: [RouterModule]
})
export class AffectationCPRoutingModule { }

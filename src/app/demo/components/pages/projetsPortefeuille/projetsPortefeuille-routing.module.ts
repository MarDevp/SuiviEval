import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProjetsPortefeuilleComponent } from './projetsPortefeuille.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: ProjetsPortefeuilleComponent }
    ])],
    exports: [RouterModule]
})
export class ProjetsPortefeuilleRoutingModule { }

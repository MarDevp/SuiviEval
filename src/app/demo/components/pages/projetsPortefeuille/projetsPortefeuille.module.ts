import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjetsPortefeuilleRoutingModule } from './projetsPortefeuille-routing.module';
import { ProjetsPortefeuilleComponent } from './projetsPortefeuille.component';

@NgModule({
    imports: [
        CommonModule,
        ProjetsPortefeuilleRoutingModule
    ],
    declarations: [ProjetsPortefeuilleComponent]
})
export class ProjetsPortefeuilleModule { }

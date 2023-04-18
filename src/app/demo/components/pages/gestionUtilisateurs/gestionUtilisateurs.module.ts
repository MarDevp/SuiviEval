import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GestionUtilisateursRoutingModule } from './gestionUtilisateurs-routing.module';
import { GestionUtilisateursComponent } from './gestionUtilisateurs.component'; 

@NgModule({
    imports: [
        CommonModule,
        GestionUtilisateursRoutingModule
    ],
    declarations: [GestionUtilisateursComponent]
})
export class GestionUtilisateursModule { }

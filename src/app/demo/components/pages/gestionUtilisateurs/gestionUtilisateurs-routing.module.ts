import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GestionUtilisateursComponent } from './gestionUtilisateurs.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: GestionUtilisateursComponent }
    ])],
    exports: [RouterModule]
})
export class GestionUtilisateursRoutingModule { }

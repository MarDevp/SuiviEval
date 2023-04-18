import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'crud', loadChildren: () => import('./crud/crud.module').then(m => m.CrudModule) },
        { path: 'empty', loadChildren: () => import('./empty/emptydemo.module').then(m => m.EmptyDemoModule) },
        { path: 'timeline', loadChildren: () => import('./timeline/timelinedemo.module').then(m => m.TimelineDemoModule) },
        { path: 'cadreLogique', loadChildren: () => import('./cadreLogique/cadreLogique.module').then(m => m.CadreLogiqueModule) },
        { path: 'activites', loadChildren: () => import('./activites/activites.module').then(m => m.ActivitesModule) },
        { path: 'indicateurs', loadChildren: () => import('./indicateurs/indicateurs.module').then(m => m.IndicateursModule) },
        { path: 'gestionUtilisateurs', loadChildren: () => import('./gestionUtilisateurs/gestionUtilisateurs.module').then(m => m.GestionUtilisateursModule) },
        { path: 'projetsPortefeuille', loadChildren: () => import('./projetsPortefeuille/projetsPortefeuille.module').then(m => m.ProjetsPortefeuilleModule) },
        { path: 'affectationCP', loadChildren: () => import('./affectationCP/affectationCP.module').then(m => m.AffectationCPModule) },
        { path: 'profil', loadChildren: () => import('./profil/profil.module').then(m => m.ProfilModule) },




        { path: '**', redirectTo: '/notfound' }
    ])],
    exports: [RouterModule]
})
export class PagesRoutingModule { }

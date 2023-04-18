import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CadreLogiqueComponent } from './cadreLogique.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: CadreLogiqueComponent }
    ])],
    exports: [RouterModule]
})
export class CadreLogiqueRoutingModule { }

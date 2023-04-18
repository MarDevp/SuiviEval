import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IndicateursComponent } from './indicateurs.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: IndicateursComponent }
	])],
	exports: [RouterModule]
})
export class IndicateursRoutingModule { }

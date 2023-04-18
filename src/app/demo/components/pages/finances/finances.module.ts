import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptyDemoRoutingModule } from './finances-routing.module';
import { EmptyDemoComponent } from './finances.component';

@NgModule({
    imports: [
        CommonModule,
        EmptyDemoRoutingModule
    ],
    declarations: [FinancesComponent]
})
export class EmptyDemoModule { }

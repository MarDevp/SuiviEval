import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AffectationCPRoutingModule } from './affectationCP-routing.module';
import { AffectationCPComponent } from './affectationCP.component';

@NgModule({
    imports: [
        CommonModule,
        AffectationCPRoutingModule
    ],
    declarations: [AffectationCPComponent]
})
export class AffectationCPModule { }

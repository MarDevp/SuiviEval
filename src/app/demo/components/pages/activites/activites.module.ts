import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivitesRoutingModule } from './activites-routing.module';
import { ActivitesComponent } from './activites.component';
import { ToolbarModule } from 'primeng/toolbar';
import { DropdownModule } from "primeng/dropdown";
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';

@NgModule({
    imports: [
        CommonModule,
        ActivitesRoutingModule,
        ToolbarModule,
        DropdownModule,
        ButtonModule,
        RippleModule,
        CardModule,
        TableModule,
        DialogModule,
        InputTextModule,
        InputTextareaModule



    ],
    declarations: [ActivitesComponent]
})
export class ActivitesModule { }

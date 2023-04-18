import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CadreLogiqueRoutingModule } from './cadreLogique-routing.module';
import { CadreLogiqueComponent } from './cadreLogique.component';
import { ToolbarModule } from 'primeng/toolbar';
import { DropdownModule } from "primeng/dropdown";
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ObjectifService } from 'src/app/demo/service/objectif.service';
import { CheckboxModule } from 'primeng/checkbox';





@NgModule({
    imports: [
        CommonModule,
        CadreLogiqueRoutingModule,
        ToolbarModule,
        DropdownModule,
        ButtonModule,
        RippleModule,
        CardModule,
        TableModule,
        DialogModule,
        InputTextModule,
        InputTextareaModule,
        FormsModule,
        CheckboxModule
    ],
    declarations: [CadreLogiqueComponent],
    providers:[ObjectifService] //Add it to the import also above
})
export class CadreLogiqueModule { }

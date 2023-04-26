import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjetsPortefeuilleRoutingModule } from './projetsPortefeuille-routing.module';
import { ProjetsPortefeuilleComponent } from './projetsPortefeuille.component';
import { TableModule } from 'primeng/table';
import { FileUploadModule } from 'primeng/fileupload';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { RatingModule } from 'primeng/rating';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputNumberModule } from 'primeng/inputnumber';
import { DialogModule } from 'primeng/dialog';
import { CalendarModule } from "primeng/calendar";
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        ProjetsPortefeuilleRoutingModule,
        TableModule,
        FileUploadModule,
        FormsModule,
        ButtonModule,
        RippleModule,
        ToastModule,
        ToolbarModule,
        RatingModule,
        InputTextModule,
        InputTextareaModule,
        DropdownModule,
        RadioButtonModule,
        InputNumberModule,
        DialogModule,
        CalendarModule
    ],
    declarations: [ProjetsPortefeuilleComponent]
})
export class ProjetsPortefeuilleModule { }

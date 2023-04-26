import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilRoutingModule } from './profil-routing.module';
import { ProfilComponent } from './profil.component';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';




@NgModule({
    imports: [
        CommonModule,
        ProfilRoutingModule,
        InputTextModule,
        FormsModule,
        ButtonModule
    ],
    declarations: [ProfilComponent]
})
export class ProfilModule { }

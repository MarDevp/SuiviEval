import { Component, ElementRef, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from "./service/app.layout.service";
import { Router } from '@angular/router';

import { StorageService } from 'src/app/_services/storage.service';
import { AuthService } from 'src/app/_services/auth.service';



@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent {

    items!: MenuItem[];

    @ViewChild('menubutton') menuButton!: ElementRef;

    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

    @ViewChild('topbarmenu') menu!: ElementRef;

    constructor(public layoutService: LayoutService, private router: Router // to import the Router module 
   , private storageService: StorageService, private authService: AuthService ) { }


    redirectToProfile() {
        this.router.navigate(['/pages/profil']); // Use this code to navigate to the profile page
      }

      
      logout(): void {
        this.authService.logout().subscribe({
          next: res => {
            console.log(res);
            this.storageService.clean();
    
            window.location.reload();
          },
          error: err => {
            console.log(err);
          }
        });

        this.router.navigate(['/auth/login'])
}

}


import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { StorageService } from 'src/app/_services/storage.service';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

    private roles: string[] = [];
    isLoggedIn = false;
    showAdminBoard = false;
    showModeratorBoard = false;
    username?: string;

    constructor(private primengConfig: PrimeNGConfig , private storageService: StorageService, private authService: AuthService) { }

    ngOnInit() {
        this.primengConfig.ripple = true;

        this.isLoggedIn = this.storageService.isLoggedIn();

        if (this.isLoggedIn) {
          const user = this.storageService.getUser();
          this.roles = user.roles;
    
          this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
          this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');
    
          this.username = user.username;
        }

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
}
}

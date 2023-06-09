import { Component,OnInit  } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { AuthService } from 'src/app/_services/auth.service';
import { StorageService } from 'src/app/_services/storage.service';
import { Router } from '@angular/router';



@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [`
        :host ::ng-deep .pi-eye,
        :host ::ng-deep .pi-eye-slash {
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `]
})

export class LoginComponent implements OnInit {
    form: any = {
      username: null,
      password: null
    };
    isLoggedIn = false;
    isLoginFailed = false;
    errorMessage = '';
    roles: string[] = [];
  
    constructor(private authService: AuthService, private storageService: StorageService,public layoutService: LayoutService , private router:Router) { }
  
    ngOnInit(): void {
      if (this.storageService.isLoggedIn()) {
        this.isLoggedIn = true;
        this.roles = this.storageService.getUser().roles;
      }

      console.log("user",this.storageService.getUser());
    }
  
    onSubmit(): void {
      const { username, password } = this.form;
  
      this.authService.login(username, password).subscribe({
        next: data => {
          this.storageService.saveUser(data);
  
          this.isLoginFailed = false;
          this.isLoggedIn = true;
          this.roles = this.storageService.getUser().roles;
          /*this.reloadPage();*/

          this.redirect();

        },
        error: err => {
          this.errorMessage = err.error.message;
          this.isLoginFailed = true;
        }
      });
    }
  
    reloadPage(): void {
      window.location.reload();
    }

    redirect(){
      console.log("msg")
      this.router.navigate(['../..']);
    }
  }



/*

export class LoginComponent {

    valCheck: string[] = ['remember'];

    password!: string;

    constructor(public layoutService: LayoutService) { }
}
*/
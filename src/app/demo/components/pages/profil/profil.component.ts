import { Component , OnInit } from '@angular/core';
import { StorageService } from 'src/app/_services/storage.service';


@Component({
    templateUrl: './profil.component.html'
})

export class ProfilComponent implements OnInit {
    currentUser: any;

    name: string = "jj";
    lastName: string;
    username: string;
    email: string;
    role: string;
  
  
    constructor(private storageService: StorageService) { 
      this.name="dd";
  
      this.lastName="pdd";
      this.username="uss";
      this.email="mm";
      this.role="eole";


    }
  
    ngOnInit(): void {
      this.currentUser = this.storageService.getUser();
    }

    editing = false;

    editProfile() {
      this.editing = true;
      }

      saveProfile() {
        // Save the changes made by the user here
        this.editing = false;
      }
      


  
    

  }

 
  

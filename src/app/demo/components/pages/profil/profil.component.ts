import { Component , OnInit } from '@angular/core';
import { StorageService } from 'src/app/_services/storage.service';


@Component({
    templateUrl: './profil.component.html'
})

export class ProfilComponent implements OnInit {
    currentUser: any;
  
    constructor(private storageService: StorageService) { }
  
    ngOnInit(): void {
      this.currentUser = this.storageService.getUser();
    }
  }

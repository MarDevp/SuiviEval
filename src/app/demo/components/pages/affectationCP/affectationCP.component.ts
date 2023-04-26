import { Component,OnInit } from '@angular/core';

import { ProjectService } from 'src/app/demo/service/project.service';
import { User } from 'src/app/model/User';
import { MessageService } from 'primeng/api';

@Component({
    templateUrl: 'affectationCP.component.html',
    providers: [MessageService]

})
export class AffectationCPComponent  implements OnInit { 

    content?: string;
  
    cpDialog: boolean = false;

    
    submitted: boolean = false;

    newUser :User=new User();

    cp: User = {} ; 

    user: User = {};

    today=new Date();

    constructor(private projectservice: ProjectService ,  private messageService: MessageService) { }


    ngOnInit(): void {

        this.listOfUsers();
      }


      users:any;

      listOfUsers(): void {
      console.log('liste')
      this.projectservice.getAllUsers()
        .subscribe(res => {
          this.users = res;
        console.log("liste:",this.users)
        
        console.log("testttttttt liste");
  
  
        });
    }

    openNew() {
        this.cp = {};
        this.submitted = false;
        this.cpDialog = true;
    }

    hideDialog() {
        this.cpDialog = false;
        this.submitted = false;
    }



}

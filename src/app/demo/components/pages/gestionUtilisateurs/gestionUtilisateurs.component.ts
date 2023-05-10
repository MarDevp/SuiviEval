import { Component , OnInit  } from '@angular/core';

import { UserService } from 'src/app/_services/user.service';
import { ProjectService } from 'src/app/demo/service/project.service';
import { User } from 'src/app/model/User';
import { MessageService } from 'primeng/api';


@Component({
    templateUrl: './gestionUtilisateurs.component.html',
    providers: [MessageService]
})
export class GestionUtilisateursComponent implements OnInit {
    content?: string;
  
    userDialog: boolean = false;

    
    submitted: boolean = false;

    newUser :User=new User();

    user: User = {};

    today=new Date();


    constructor(private userService: UserService ,private projectservice: ProjectService ,  private messageService: MessageService) { }
  
    ngOnInit(): void {

      this.listOfUsers();

      this.userService.getAdminBoard().subscribe({
        next: data => {
          this.content = data;
        },
        error: err => {console.log(err)
          if (err.error) {
            this.content = JSON.parse(err.error).message;
          } else {
            this.content = "Error with status: " + err.status;
          }
        }
      });

    }

    
    users:any;
    x:any;

      listOfUsers(): void {
      console.log('liste')
      this.projectservice.getAllUsers()
        .subscribe(res => {
          this.users = res;
        console.log("liste:",this.users)
        
        console.log("testttttttt liste");
  
        if( this.users.role_user =="ROLE_MEMBRE")
        this.x="Membre Projet";

        if( this.users.role_user =="ROLE_ADMIN")
        this.x="Administrateur";

        if( this.users.role_user =="ROLE_DIRIGEANT")
        this.x="Dirigeant";
  
        });

    }


    deleteUser(userId: number) {
      this.projectservice.deleteUser(userId).subscribe(response => {
        console.log(':', response);
        // Do something with the response if needed
        this.listOfUsers();
  
  
      }, error => {
        console.error('Err', error);
        // Handle the error if needed
  
      });
    }


    openNew() {
      this.user = {};
      this.submitted = false;
      this.userDialog = true;
  }

  hideDialog() {
    this.userDialog = false;
    this.submitted = false;
}


     editUser(user: User){
      this.userDialog=true;
      this.newUser=user;
  
    }




    saveUser() {
      this.submitted = true;
  
  
      this.projectservice
      .createUser(this.newUser).subscribe(data => {
        console.log(data)
        this.newUser = new User();
  
        console.log('newUser', this.newUser);
        
        this.listOfUsers();
        
      }, 
      error => console.log(error));
    }
  
  
    // ajout 
    createUser(){
  
      console.log("start");
      this.saveUser();
      this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Utilisateur crée', life: 3000 });
     
      this.userDialog = false;
              this.user = {};   //??
  
      console.log("stop");

    }

    

  }

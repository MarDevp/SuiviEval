import { Component } from '@angular/core';

import { ProjectService } from 'src/app/demo/service/project.service';
import { Activite } from 'src/app/model/Activite';
import { MessageService } from 'primeng/api';

@Component({
    templateUrl: './activites.component.html',
    providers: [MessageService]
})
export class ActivitesComponent {

    activiteDialog: boolean = false;

    
    submitted: boolean = false;

    newActivite :Activite=new Activite();

    activite: Activite = {};

    today=new Date();

    errorMessage: string | undefined;


    constructor(private projectservice: ProjectService,  private messageService: MessageService) { }

    ngOnInit(): void {

        this.listOfActivites();
  
      }









    activites:any;

    listOfActivites(): void {
    console.log('liste')
    this.projectservice.getAllActivites()
      .subscribe(res => {
        this.activites = res;
      console.log("liste:",this.activites)
      
      console.log("testttttttt liste");


      });
  }


  deleteActivite(activiteId: number) {
    this.projectservice.deleteActivite(activiteId).subscribe(response => {
      console.log(':', response);
      // Do something with the response if needed
      this.listOfActivites();


    }, error => {
      console.error('Err', error);
      // Handle the error if needed

    });
  }


  openNew() {
    this.activite = {};
    this.submitted = false;
    this.activiteDialog = true;
      }

hideDialog() {
  this.activiteDialog = false;
  this.submitted = false;
     }


   editActivite(activite: Activite){
    this.activiteDialog=true;
    this.newActivite=activite;

  }


  saveActivite() {
    this.submitted = true;


    this.projectservice
    .createActivite(this.newActivite).subscribe(data => {
      console.log(data)
      this.newActivite = new Activite();

      console.log('newActivite', this.newActivite);
      
      this.listOfActivites();
      
    }, 
    error => console.log(error));
  }


  // ajout d'une activite 
  createActivite(){

    console.log("start");
    this.saveActivite();
    this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Activité crée', life: 3000 });
   
    this.activiteDialog = false;
            this.activite = {};   //??

    console.log("stop");


  }

    
 }

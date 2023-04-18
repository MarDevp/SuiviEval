import { Component, OnInit } from '@angular/core';
import { Objectif } from 'src/app/model/Objectif';
import { ObjectifService } from 'src/app/demo/service/objectif.service';
import { MessageService } from 'primeng/api';




@Component({
    templateUrl: './cadreLogique.component.html',
    providers: [MessageService]
})
export class CadreLogiqueComponent {

    objGlobalDialog: boolean = false;
    resultatAttDialog: boolean = false;

    submittedObjGlobal: boolean = false;
    submittedResultatAtt: boolean =false;
    errorMessage: string | undefined;
    nature_objectif = 'global';

    data = [
        { nom: 'Indicateur1', format: 'numerique', frequence: 'mensuel', statut: 'Partiellement atteint', reelVsCible: '16/30' },
        { nom: 'Indicateur2', format: 'pourcentage', frequence: 'hebdomadaire', statut: 'en retard', reelVsCible: '10%' },

      ];

      constructor(private objectifservice: ObjectifService, private messageService: MessageService) { }

      ngOnInit() { }

      openNewObjGlobal() {
       // this.project = {};
        this.submittedObjGlobal = false;
        this.objGlobalDialog = true;
    }

    openNewResultatAtt() {
      // this.project = {};
       this.submittedResultatAtt = false;
       this.resultatAttDialog = true;
   }

    hideobjGloablDialog() {
        this.objGlobalDialog = false;
        this.submittedObjGlobal = false;
    }

    hideResultatAttDialog() {
      this.resultatAttDialog = false;
      this.submittedResultatAtt = false;
  }

  

    saveObjGlobal() {
        this.submittedObjGlobal = true;


        if (!this.newObjectif.libele_objectif ) {
            this.errorMessage = "Ce champs est obligatoire";
            return; // return without creating a new project if name is not provided
        }

        this.objectifservice
        .createObjectif(this.newObjectif).subscribe(data => {
          console.log(data)
          this.newObjectif = new Objectif();
    
          console.log('newObjectif', this.newObjectif);
          
          //this.listOfProjects();
          console.log("dddd"+this.newObjectif.nature_objectif);
        }, 
        error => console.log(error));
      }

      newObjectif :Objectif=new Objectif();
  today=new Date();


  // ajout d'un objectif global
  createObjGlobal(){

   // console.log("1:newProject.intitule_projet:");
    console.log("start");
    this.saveObjGlobal();
    this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Objectif global crée', life: 3000 });
   
    this.objGlobalDialog = false;
            //this.project = {};   //??


              console.log("dddd"+this.newObjectif.nature_objectif);
    console.log("stop");

  }
}

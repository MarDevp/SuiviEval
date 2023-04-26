import { Component } from '@angular/core';

import { ProjectService } from 'src/app/demo/service/project.service';
import { Indicateur } from 'src/app/model/Indicateur';
import { IndicateurDP } from 'src/app/model/IndicateurDP';
import { MessageService } from 'primeng/api';
import { ProjectCNI } from 'src/app/model/ProjectCNI';


@Component({
    templateUrl: './indicateurs.component.html',
    providers: [MessageService]
})
export class IndicateursComponent {

   // content?: string;

  
   objresa = [
    { label: 'Objectif', value: 1 },
    { label: 'Resultat Attendu', value: 2 }
  ];
  

 // objresa = ['Objectif','Resultat Attendu'];

   projects: any
  selectedProject: any;
  
    indicateurDialog: boolean = false;

    indicateurDPDialog: boolean = false;
    submittedDP: boolean = false;



    
    submitted: boolean = false;

    newIndicateur :Indicateur=new Indicateur();

    indicateur: Indicateur = {};

    newIndicateurDP :IndicateurDP=new IndicateurDP();

    indicateurDP: IndicateurDP = {};

    today=new Date();

    errorMessage: string | undefined;


    constructor(private projectservice: ProjectService,  private messageService: MessageService) { }
  
    ngOnInit(): void {

      this.listOfIndicateurs();
      this.listOfProjects();

    }


    indicateurs:any;

      listOfIndicateurs(): void {
      console.log('liste')
      this.projectservice.getAllIndicateurs()
        .subscribe(res => {
          this.indicateurs = res;
        console.log("liste:",this.indicateurs)
        
        console.log("testttttttt liste");
  
  
        });
    }



    deleteIndicateur(indicateurId: number) {
        this.projectservice.deleteIndicateur(indicateurId).subscribe(response => {
          console.log(':', response);
          // Do something with the response if needed
          this.listOfIndicateurs();
    
    
        }, error => {
          console.error('Err', error);
          // Handle the error if needed
    
        });
      }


      openNew() {
        this.indicateur = {};
        this.submitted = false;
        this.indicateurDialog = true;
          }
  
    hideDialog() {
      this.indicateurDialog = false;
      this.submitted = false;
         }



      openNewDP() {
          this.indicateurDP = {};
          this.submittedDP = false;
          this.indicateurDPDialog = true;
            }
    
      hideDialogDP() {
        this.indicateurDPDialog = false;
        this.submittedDP = false;
           } 
  
  
       editIndicateur(indicateur: Indicateur){
        this.indicateurDialog=true;
        this.newIndicateur=indicateur;
    
      }


      


      saveIndicateur() {
        this.submitted = true;

        this.projectservice
        .createIndicateur(this.newIndicateur).subscribe(data => {
          console.log(data)
          this.newIndicateur = new Indicateur();
    
          console.log('newIndicateur', this.newIndicateur);
          
          this.listOfIndicateurs();
          
        }, 
        error => console.log(error));
      }

// ajout d'un indicateur 
  createIndicateur(){

    console.log("start");
    this.saveIndicateur();
    this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Indicateur crée', life: 3000 });
   
    this.indicateurDialog = false;
            this.indicateur = {};   //??

    console.log("stop");

  }



  saveIndicateurDP() {
    this.submittedDP = true;

    this.projectservice
    .createIndicateurDP(this.newIndicateurDP).subscribe(data => {
      console.log(data)
      this.newIndicateurDP = new IndicateurDP();

      console.log('newIndicateurDP', this.newIndicateurDP);
      
     // this.listOfIndicateursDP();
      
    }, 
    error => console.log(error));
  }


  
// ajout d'un indicateur DP
createIndicateurDP(){

  console.log("start");
  this.saveIndicateurDP();
  this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Date planification crée', life: 3000 });
 
  this.indicateurDPDialog = false;
          this.indicateurDP = {};   //??

  console.log("stop");

}


//listes des projets pour le dropdown 



  

listOfProjects(): void {

  this.projectservice.getAllProjects()
    .subscribe(res => {
      this.projects = res;
      //this.selectedProject = this.projects[0]; 
   


    });
}


selectedNameProject : any;
selectedIdProject : any;

getSelectedProject(event:any) : void {
  //console.log("msg");

  this.selectedNameProject=event.value.intitule_projet;
  this.selectedIdProject=event.value.id_projet;

  this.ajoutB=true;
  console.log("idpro", this.selectedIdProject);

  this.ObjectifByProjetId( this.selectedIdProject);

}

ajoutB=false;


selectedNature : any; 
selectedNatureNumber : any; 
getNature(event:any) : void {

  this.selectedNature=event.value;

  if(this.selectedNature == "Objectif")
    this.selectedNatureNumber=1;

  if(this.selectedNature =="Resultat Attendu")
    this.selectedNatureNumber=2;




  console.log("msg2",event.value);
  console.log("selectedNatureNumber",this.selectedNatureNumber);

}


objresLibea : any;
selectedObjresLibe: any;
selectedObjresId: any;

// liste des objectifs pour le dropdown

ObjectifByProjetId(id:number): void {

  this.projectservice.getObjectifByProjetId(id)
    .subscribe(res => {
      console.log("start");

      this.objresLibea = res;
      this.selectedObjresLibe = this.objresLibea[0];
    //  this.selectedObjresId= this.objresLibea[0].id_objectif.value;

   
      console.log("value obj",this.objresLibea);
     // console.log("selectedObjresId",this.selectedObjresId)
   


    });


}





}








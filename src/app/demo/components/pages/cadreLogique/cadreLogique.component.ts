import { Component, OnInit } from '@angular/core';
import { Objectif } from 'src/app/model/Objectif';
import { ObjectifService } from 'src/app/demo/service/objectif.service';
import { MessageService } from 'primeng/api';
import { ProjectService } from 'src/app/demo/service/project.service';





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

      constructor(private projectservice: ProjectService,private objectifservice: ObjectifService, private messageService: MessageService) { }

      ngOnInit() {
        this.listOfProjects();
       }

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


// get liste des objectifs ( pas resultats) by projet_id


objectifsAndIndi : any[] = [];
ee : any[] = [];

objectifs : any;

/*ObjectifByProjetId(id:number): void {

  this.projectservice.getObjectiffByProjetId(id)
    .subscribe(res => {
      console.log("start");

      this.objectifs = res;
     
    
      for ( let objectif of this.objectifs ) 
      {
        
        

        this.indicateurByObjectifId(objectif.idObjectif).then(res => {
          console.log("res0000",res[0]); // access first object in array
          this.ee=res[0];
          console.log("eeeeeee1",this.ee);
          this.objectifsAndIndi.push('o',objectif);
          this.objectifsAndIndi.push('i',this.ee);
        }).catch(error => {
          console.error(error);
        });

  
    }

    console.log("OBJ AND INDI",this.objectifsAndIndi);


    });

}*/


ObjectifByProjetId(id:number): void {

  this.projectservice.getObjectiffByProjetId(id)
    .subscribe(res => {
      console.log("start");

      this.objectifs = res;

      for (let objectif of this.objectifs) {

        this.indicateurByObjectifId(objectif.idObjectif).then(res => {
          console.log("res0000",res[0]); // access first object in array
          const ee = res;
          console.log("eeeeeee1",ee);

          // Push an object containing both the objectif and ee properties
          this.objectifsAndIndi.push({objectif, ee});

        }).catch(error => {
          console.error(error);
        });
      }

      console.log("OBJ AND INDI", this.objectifsAndIndi);
    });
}









//listes des projets pour le dropdown 
listOfProjects(): void {

  this.projectservice.getAllProjects()
    .subscribe(res => {
      this.projects = res;
      //this.selectedProject = this.projects[0]; 
   


    });
}


projects: any
selectedProject: any;
selectedNameProject : any;
selectedIdProject : any;

getSelectedProject(event:any) : void {
  //console.log("msg");

  this.selectedNameProject=event.value.intitule_projet;
  this.selectedIdProject=event.value.id_projet;

 // console.log("idpro", this.selectedIdProject);

  this.ObjectifByProjetId(this.selectedIdProject);

}


// get les indicateurs d'objectifs par objectif_id
indicateurs_objectif : any;
/*indicateurByObjectifId(id:number): any {

  this.projectservice.getIndicateursByObjectifId(id)
    .subscribe(res => {
      //console.log("start");
      this.indicateurs_objectif = res;
     // console.log("value obj",this.indicateurs_objectif);
     return  this.indicateurs_objectif;
  
    });

}*/

indicateurByObjectifId(id:number): Promise<any> {
  return new Promise((resolve, reject) => {
    this.projectservice.getIndicateursByObjectifId(id).subscribe(res => {
      resolve(res);
    }, err => {
      reject(err);
    });
  });
}

}

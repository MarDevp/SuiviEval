import { Component } from '@angular/core';

import { ProjectService } from 'src/app/demo/service/project.service';
import { Indicateur } from 'src/app/model/Indicateur';
import { IndicateurDP } from 'src/app/model/IndicateurDP';
import { MessageService } from 'primeng/api';
import { ProjectCNI } from 'src/app/model/ProjectCNI';
import { Location } from '@angular/common';
import { DatePipe } from '@angular/common';
import { Objectif } from 'src/app/model/Objectif';


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


    constructor(private projectservice: ProjectService,  private messageService: MessageService, private location: Location) { }
  
    ngOnInit(): void {

   //   this.listOfIndicateurs();
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


    reloadPage() {
      this.location.go('/pages/indicateurs', '');
      window.location.reload();
    }

   // get liste of indicator plan by indicator_id
   
   arrayIndicateurPlan:any;
   id_ind_ligne:any;

   IndicateurPlanByIndicateurId(id:number): void {


    this.id_ind_ligne=id;

    this.projectservice.getIndicateurPlanByIndicateurId(id)
      .subscribe(res => {
        console.log("start");
  
        this.arrayIndicateurPlan = res;
     
        console.log("arrayIndicateurPlan",this.arrayIndicateurPlan);
        console.log("id du plan ",this.arrayIndicateurPlan[0])

     
  
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

//modal plan indicateur 

      openNewDP() {
          this.indicateurDP = {};
          this.submittedDP = false;
          this.indicateurDPDialog = true;
            }
    
      hideDialogDP() {
        this.indicateurDPDialog = false;
        this.submittedDP = false;
           } 

  //modal suivi indicateur 


  indicateurSVDialog: boolean = false;
  submittedSV: boolean = false; 
 
 
  openNewSV() {
    this.indicateurDP = {};
    this.submittedSV = false;
    this.indicateurSVDialog = true;
      }


   hideDialogSV() {
    this.indicateurSVDialog = false;
    this.indicateurSVDialog = false;
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

    console.log("start create indicateur");
    console.log("objectif liée", this.objectifbyid);

    this.newIndicateur.objectif=this.objectifbyid
    this.saveIndicateur();
    this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Indicateur crée', life: 3000 });
   
    this.indicateurDialog = false;
            this.indicateur = {};   //??

    console.log("stop");

  }



  // PLANIFICATION INDICATEUR 
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



arrayLinee: any;
saveLigneIndicateurDP(){

  this.arrayLinee=this.inputLines[0];
  console.log("arrayLinee  ",this.arrayLinee);

  this.arrayLinee = { ...this.arrayLinee, id_indicateur: this.id_ind_ligne };
  //this.arrayLinee.push('id_indicateur',this.id_ind_ligne);
  console.log("idInd ",this.id_ind_ligne);
  console.log("saveLigneIndicateurDP msggg");
  console.log("input liness ",this.arrayLinee);

  this.projectservice.createIndicateurDP(this.arrayLinee).subscribe((response) => {
    console.log('New indicator created:', response);

    this.IndicateurPlanByIndicateurId(this.arrayLinee['id_indicateur']);
    this.inputLines= [{libele_DP: '', date_planification: null, valeur_cible_date: '',valeur_reele: '',date_saisie: null}];
    
  }, (error) => {
    console.error('Error creating new indicator:', error);
  });

  
  

}




deleteDatePlanInd(id: number) {
  this.projectservice.deleteIndicateurDP(id).subscribe(response => {
    console.log(':', response);
    // Do something with the response if needed
    //this.listOfUsers();
    this.reloadPage();


  }, error => {
    console.error('Err', error);
    // Handle the error if needed

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


selectedNameProject : any;
selectedIdProject : any;

getSelectedProject(event:any) : void {
  //console.log("msg");

  this.selectedNameProject=event.value.intitule_projet;
  this.selectedIdProject=event.value.id_projet;

  this.ajoutB=true;
  console.log("idpro", this.selectedIdProject);

  this.ObjectifByProjetId(this.selectedIdProject);
  this.ResultatByProjetId(this.selectedIdProject);
  this.listIndicateursObjectif(this.selectedIdProject);
  this.listIndicateursResultat(this.selectedIdProject);

}





selectedobjectif:any;
getSelectedObjectif(event:any) : void {
console.log("msg");

  this.selectedobjectif=event.value;
console.log("objectif id",this.selectedobjectif);
  this.getObjectifById(this.selectedobjectif);

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


// liste des resultats pour le dropdown 

objresLibea0 : any;
selectedObjresLibe0: any;
selectedObjresId0: any;

ResultatByProjetId(id:number): void {

  this.projectservice.getResultatByProjetId(id)
    .subscribe(res => {
      console.log("start");

      this.objresLibea0 = res;
      this.selectedObjresLibe0 = this.objresLibea0[0];
    //  this.selectedObjresId= this.objresLibea[0].id_objectif.value;

   
      console.log("value obj",this.objresLibea0);
     // console.log("selectedObjresId",this.selectedObjresId)
   

    });

}

/////////


objectifbyid: any;
getObjectifById(id: any) : void {

  this.projectservice.getObjectifById(id)
  .subscribe(res => {
    console.log("start obj");

    this.objectifbyid = res;
   
 
    console.log("obj  by id",this.objectifbyid);
 


  });

}

// Liste des indicateurs d'objectifs by project id

indicateursObj : any;
indicObjectif :Objectif[]=[];
indicResultat:Objectif[]=[];

listIndicateursObjectif(id:number): void {

  this.projectservice.getIndicateursObjectifByProjetId(id)
    .subscribe(res => {
      console.log("start");

      this.indicateursObj = res;
      console.log("liste:",this.indicateursObj)



      for(let i =0;i<this.indicateursObj.length;i++){
        if(this.indicateursObj[i].objres==1){

          this.indicObjectif.push(this.indicateursObj[i]);
        }
        else{
          this.indicResultat.push(this.indicateursObj[i]);

        }
      }
      
      console.log("liste des objectifs", this.indicObjectif);

      console.log("liste des resultats", this.indicResultat);

    });
}


// Liste des indicateurs de résultat by project id

indicateursRes : any;

listIndicateursResultat(id:number): void {

  this.projectservice.getIndicateursResultatByProjetId(id)
    .subscribe(res => {
      console.log("start");

      this.indicateursRes = res;
      console.log("liste:",this.indicateursRes)
      
      console.log("testttttttt liste");

    });
}

objective: any ;

libeleObjectif(id: number) : void {

  this.projectservice.getObjectifById(id)
  .subscribe(res => {

    this.objective = res;

    
  });

  console.log("libeleobjectifStRING",this.objective.libele_objectif)
  return this.objective.libele_objectif; 

}



// pour le bouton ajouter plan indicateur 
inputLines: any[] = [{libele_DP: '', date_planification: null, valeur_cible_date: '',valeur_reele: '',date_saisie: null}];
inputLiness: any[] = [{libele_DP: '', date_planification: null, valeur_cible_date: '',valeur_reele: '',date_saisie: null}];

addInputLine() {
  this.inputLiness.push({libele_DP: '', date_planification: null, valeur_cible_date: ''});
}




// editer valeur saisie 


editValeurDP(id_dt: number, valeurReele:number) {

  console.log('upddddd ',valeurReele );

  const date = new Date(); 
  const formattedDate = new DatePipe('en-US').transform(date, 'yyyy-MM-dd') || '';
console.log(formattedDate); // Output: "2023-05-04"

 // const updatedIndicator = { valeurReele: this.line.valeur_reele };
  this.projectservice.updateValeurSuiviIndicateur(id_dt, valeurReele,formattedDate).subscribe(
    response => console.log('Indicator updated successfully'),
    error => console.log('Error updating indicator', error)
  );
  }

  
}
 

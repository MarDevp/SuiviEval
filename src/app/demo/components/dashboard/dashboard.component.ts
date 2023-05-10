import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Project } from '../../api/project';

import { Subscription } from 'rxjs';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { ProjectService } from 'src/app/demo/service/project.service';




@Component({
    templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit, OnDestroy {

    items!: MenuItem[];

    products!: Project[];

    pieData: any;
    pieOptions: any;

    chartData: any;

    chartOptions: any;

    subscription!: Subscription;

    projects: any
   selectedProject: any;
   selectedIndicateur: any;

    constructor(private projectservice: ProjectService, public layoutService: LayoutService) {
        this.subscription = this.layoutService.configUpdate$.subscribe(() => {
           // this.initChart();
       
        });
    }

    ngOnInit() {
     
        this.projectservice.getProjectsSmall().then(data => this.products = data);

        this.items = [
            { label: 'Add New', icon: 'pi pi-fw pi-plus' },
            { label: 'Remove', icon: 'pi pi-fw pi-minus' }
        ];

        this.listOfProjects();
        
        
       // this.initChartsP();
      
    }





    initChart() {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        console.log("eeeeeeeeeeddee",this.arrayValeurCible[0]);

        this.chartData = {
            labels: this.arrayDatesCible,
            datasets: [
                {
                    label: 'Valeurs cibles',
                    data: this.arrayValeurCible,
                
                    fill: false,
                    backgroundColor: documentStyle.getPropertyValue('--bluegray-700'),
                    borderColor: documentStyle.getPropertyValue('--bluegray-700'),
                    tension: .4
                },
                {
                    label: 'Valeurs réalisées',
                    data: this.arrayValeurReel,
                    fill: false,
                    backgroundColor: documentStyle.getPropertyValue('--green-600'),
                    borderColor: documentStyle.getPropertyValue('--green-600'),
                    tension: .4
                }
            ]
        };
        
        this.chartOptions = {
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                }
            }
        };
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }




    // pour select listes projets

    listOfProjects(): void {

        this.projectservice.getAllProjects()
          .subscribe(res => {
            this.projects = res;
           // this.selectedProject=this.projects[0];
            console.log("ppp",this.projects);

          });
      }
      
      
      selectedNameProject : any;
      selectedIdProject : any;
      
      getSelectedProject(event:any) : void {
        //console.log("msg");
      
        this.selectedNameProject=event.value.intitule_projet;
        this.selectedIdProject=event.value.id_projet;
        console.log("idpro", this.selectedIdProject);
        this.getNombreObjectifsByProjetId(this.selectedIdProject);
        this.getNombreResultatsByProjetId(this.selectedIdProject);
        this.getNombreIndicateursByProjetId(this.selectedIdProject);
        this.getIndicateursByProjetId(this.selectedIdProject);
        this.ObjectifByProjetId(this.selectedIdProject);
     //   this.initChartsP();
      
      }




      selectedNameIndicateur : any;
      selectedIdIndicateur : any;

     
      planInd:any;
      getSelectedIndicateur(event:any) : void {
        //console.log("msg");
      
        
        this.selectedNameIndicateur=event.value.libele_indicateur;
        this.selectedIdIndicateur=event.value.id_indicateur;
        console.log("selectedIdIndicateur", this.selectedIdIndicateur);

        this.planInd=this.getIndicateurPlanSuivi(this.selectedIdIndicateur);
        console.log("this.planInd",this.planInd);


        //for( let pl of this.sele)

      
      }



      nb_o : any;
      // nombre d'objectifs
      getNombreObjectifsByProjetId(id:any): void {

        this.projectservice.getNombreObjectifsByProjetId(id)
          .subscribe(res => {
            this.nb_o = res;
            console.log("nb_o",this.nb_o);

          });
      }


      nb_r : any;
      // nombre resultats
      getNombreResultatsByProjetId(id:any): void {

        this.projectservice.getNombreResultatsByProjetId(id)
          .subscribe(res => {
            this.nb_r = res;
            console.log("nb_r",this.nb_r);

          });
      }


      nb_i : any;
      // nombre indicateurs
      getNombreIndicateursByProjetId(id:any): void {

        this.projectservice.getNombreIndicateursByProjetId(id)
          .subscribe(res => {
            this.nb_i = res;
            console.log("nb_i",this.nb_i);

          });
      }


       // liste des indicateur du projet selectionné
       indic: any; 
       getIndicateursByProjetId(id:any): void {

        this.projectservice.getIndicateursObjectifByProjetId(id)
          .subscribe(res => {
            this.indic = res;
            this.selectedIndicateur=this.indic[0];
            console.log("indic",this.indic);

          });
      }
      

// le plan et suivi d'un indicateur 
plansv: any; 


arrayDatesCible  : any[] = [];
arrayValeurCible:   any[] = [];
arrayValeurReel  : any[] = [];
getIndicateurPlanSuivi(id:any): void {

    this.arrayDatesCible= [];
    this.arrayValeurCible= [];
    this.arrayValeurReel= [];

 this.projectservice.getIndicateurPlanByIndicateurId(id)
   .subscribe(res => {
     this.plansv = res;
     console.log("plansv",this.plansv);

     for ( let pl of this.plansv)
     {
        this.arrayDatesCible.push(pl.date_planification);
        this.arrayValeurCible.push(pl.valeur_cible_date);
        this.arrayValeurReel.push(pl.valeurReele);

     }

     console.log("ssssssssss",this.arrayValeurReel);

     this.initChart();
  
    // this.initChart();

   });
}


initChartsP() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
    console.log("nombre des indic by obj",this.nbindByObj);
    console.log("labels  of objectifs",this.arrayObj);
   // console.log("this.arrayNombreInd[0]",this.nbindByObj[1]);

    this.pieData = {
        labels: this.arrayObj,
        datasets: [
            {
                data:  this.nbindByObj,
                backgroundColor: [
                    documentStyle.getPropertyValue('--indigo-500'),
                    documentStyle.getPropertyValue('--teal-500'),
                ],
                hoverBackgroundColor: [
                    documentStyle.getPropertyValue('--indigo-400'),
                    documentStyle.getPropertyValue('--teal-500'),
                ]
            }]
    };




    this.pieOptions = {
        plugins: {
            legend: {
                labels: {
                    usePointStyle: true,
                    color: textColor
                }
            }
        }
    }; 


    

/*
    this.pieData = {
        labels: ['A', 'B', 'C'],
        datasets: [
            {
                data: [540, 325, 702],
                backgroundColor: [
                    documentStyle.getPropertyValue('--indigo-500'),
                    documentStyle.getPropertyValue('--purple-500'),
                    documentStyle.getPropertyValue('--teal-500')
                ],
                hoverBackgroundColor: [
                    documentStyle.getPropertyValue('--indigo-400'),
                    documentStyle.getPropertyValue('--purple-400'),
                    documentStyle.getPropertyValue('--teal-400')
                ]
            }]
    };

    this.pieOptions = {
        plugins: {
            legend: {
                labels: {
                    usePointStyle: true,
                    color: textColor
                }
            }
        }
    };
*/





    
}

// get all objectifs  par projet_id et cherchons leur nombre d'indicateurs 

objectifs:any;
arrayObj:any[] = [];
arrayNombreInd:any[] = [];
ObjectifByProjetId(id:number): void {

    this.projectservice.getObjectifByProjetId(id)
      .subscribe(res => {
        console.log("start");
        this.objectifs = res;
      /*  for ( let objectif of this.objectifs)
        {
         this.arrayObj.push(objectif.libeleObjectif);  
          console.log("nbridn", this.arrayNombreInd);


        }*/



        for(let i=0; i<this.objectifs.length;i++){
this.indicateurByObjectifId2(this.objectifs[i].idObjectif);
this.arrayObj.push(this.objectifs[i].libeleObjectif);  

console.log('objectifsby id',this.objectifs[i])
        }
      //  console.log("objectifs",this.objectifs); 
      });
  }
  

  // get indicateurs by objectif_id

  indicateurso:any;
  indicateurByObjectifId(id:number): void {
  
      this.projectservice.getIndicateursByObjectifId(id)
        .subscribe(res => {
          console.log("start");
          this.indicateurso = res;
          console.log("indicateurso objectifs",this.indicateurso); 
        
          
        });
    }


    indicateursoo:any;
    nbindByObj:any[]=[];
    indicateurByObjectifId2(id:number): void {
    
        this.projectservice.getIndicateursByObjectifId(id)
          .subscribe(res => {
            console.log("start");
            this.indicateursoo = res;
            console.log("liste des indicateur by objectif",this.indicateursoo); 

this.nbindByObj.push(this.indicateursoo.length);
console.log('result', this.nbindByObj);

           // this.arrayNombreInd.push(this.indicateursoo.length);
           this.initChartsP();
            
          });      
      }


}

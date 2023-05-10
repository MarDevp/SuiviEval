import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';


import { StorageService } from 'src/app/_services/storage.service';



@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    currentUser: any;

    name: string ;
    lastName: string;
    username: string;
    email: string;
    role: string;
  

    model: any[] = [];

    constructor(public layoutService: LayoutService , private storageService: StorageService) {
        this.name="dd";
  
        this.lastName="pdd";
        this.username="uss";
        this.email="mm";
        this.role="eole";
     }

    ngOnInit() {

        console.log("aaa");

        this.currentUser = this.storageService.getUser();
        console.log(this.currentUser.role_user);

 


        if(this.currentUser.role_user=="ROLE_ADMIN")
    
    {

        this.model = [

    
    
            {
                label: 'Administration',
                icon: 'pi pi-fw pi-briefcase',
                items: [
              
            
                

                            {
                                label: 'Gestion Utilisateurs',
                                icon: 'pi pi-users',
                                routerLink: ['/pages/gestionUtilisateurs']
                              
                            },
                           
                        ]
                    }

        ];

    }

    if(this.currentUser.role_user=="ROLE_DIRIGEANT")
{
        this.model = [
    
            {
                label: 'Dashboard',
                icon: 'pi pi-fw pi-briefcase',
                items: [ 


                    {
                        label: 'Dashboard', icon: 'pi pi-home',routerLink: ['']
                      
                    }
                
                ]
            },
        
                    {
                        label: 'Portefeuille et Affectation',
                        icon: 'pi pi-fw pi-briefcase',
                        items: [    
                   

                    
                      
                            {
                                label: 'Projets', icon: 'pi pi-fw pi-bookmark',routerLink: ['/pages/projetsPortefeuille']
                              
                            },
                            {
                                label: 'Affectation Chefs Projet', icon: 'pi pi-user-plus',routerLink: ['/pages/affectationCP']
                              
                            },
                        
                        ] 
                    },
        ];

    }


    if(this.currentUser.role_user=="ROLE_MEMBRE")
{

        this.model = [

            {
                label: 'Dashboard',
                icon: 'pi pi-fw pi-briefcase',
                items: [ 


                    {
                        label: 'Dashboard', icon: 'pi pi-fw pi-bookmark',routerLink: ['']
                      
                    }
                
                ]
            },

            {
                label: 'Fiches projets et Affectation',
                icon: 'pi pi-fw pi-briefcase',
                items: [ 


                    {
                        label: 'Fiches projets', icon: 'pi pi-fw pi-bookmark',routerLink: ['/pages/crud']
                      
                    },
                    {
                        label: 'Affectation Membre Equipe', icon: 'pi pi-fw pi-bookmark'
                      
                    },

                ]
            },



            
            {
                label: 'Cadre logique et Indicateurs',
                icon: 'pi pi-fw pi-briefcase',
                items: [ 

          
                    {
                        label: 'Cadre Logique', icon: 'pi pi-fw pi-bookmark',routerLink: ['/pages/cadreLogique']
                      
                    },
                    {
                        label: 'Indicateurs', icon: 'pi pi-fw pi-bookmark',routerLink: ['/pages/indicateurs']
                      
                    },
       


            {
                label: 'Activités',
                icon: 'pi pi-fw pi-pencil',
                routerLink: ['/pages/activites']
               
            },

          
        ]
    },



];


 
    
}







    }
}

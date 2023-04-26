import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
    
            {
                label: 'Administration',
                icon: 'pi pi-fw pi-briefcase',
                items: [
              
                    /*
                    {
                        label: 'Auth',
                        icon: 'pi pi-fw pi-user',
                        items: [
                            {
                                label: 'Login',
                                icon: 'pi pi-fw pi-sign-in',
                                routerLink: ['/auth/login']
                            },
                            {
                                label: 'Error',
                                icon: 'pi pi-fw pi-times-circle',
                                routerLink: ['/auth/error']
                            },
                            {
                                label: 'Access Denied',
                                icon: 'pi pi-fw pi-lock',
                                routerLink: ['/auth/access']
                            }
                        ]
                    },*/
                 


                            {
                                label: 'Gestion Utilisateurs',
                                icon: 'pi pi-fw pi-pencil',
                                routerLink: ['/pages/gestionUtilisateurs']
                              
                            },
                           
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
                                label: 'Affectation Chefs Projet', icon: 'pi pi-fw pi-bookmark',routerLink: ['/pages/affectationCP']
                              
                            },
                        
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
                        //routerLink: ['/project-monitoring-app/pages/crud']
                    },

                  
                ]
            },



        ];
    }
}

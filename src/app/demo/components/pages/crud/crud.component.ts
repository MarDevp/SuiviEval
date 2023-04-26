import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { Project } from 'src/app/demo/api/project';
import { ProjectService } from 'src/app/demo/service/project.service';
import { ProjectCNI } from 'src/app/model/ProjectCNI';

//import { UserService } from 'src/app/_services/user.service';

@Component({
    templateUrl: './crud.component.html',
    providers: [MessageService]
})
export class CrudComponent implements OnInit {

    projectDialog: boolean = false;

    deleteProjectDialog: boolean = false;

    deleteProjectsDialog: boolean = false;

    projects: Project[] = [];

    project: Project = {};

    selectedProjects: Project[] = [];

    submitted: boolean = false;

    cols: any[] = [];

    monnaies: any[] = [];

    stades: any[] = [];

    secteurs: any[] = [];
   // content?: string;


    rowsPerPageOptions = [5, 10, 20];
    errorMessage: string | undefined;

    constructor(private projectservice: ProjectService, private messageService: MessageService) { }

    ngOnInit() {

      /*  this.userService.getPublicContent().subscribe({
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
          */

         this.projectservice.getProjects().then(data => this.projects = data);
        //this.listOfProjects();

        this.cols = [
            { field: 'project', header: 'Project' },
            { field: 'price', header: 'Price' },
            { field: 'category', header: 'Category' },
            { field: 'rating', header: 'Reviews' },
            { field: 'inventoryStatus', header: 'Status' }
        ];

        this.stades = [
            { label: 'en cours', value: 'en cours' },
            { label: 'en continuation avec difficulté', value: 'en continuation avec difficulté' },
            { label: 'clôturé', value: 'clôturé' },
           
        ];

        this.monnaies = [
            { label: 'Dinar Tunisien', value: 'TND' },
            { label: 'Euro', value: 'EUR' },
            { label: 'Dollar Américain', value: 'USD' },
            { label: 'Yen', value: 'YEN' }
        ];

        this.secteurs = [
            { label: 'Education', value: 'Education' },
            { label: 'Environnement', value: 'Environnement' },
            { label: 'Santé', value: 'Santé' },
            { label: 'Energie', value: 'Energie' },
            { label: 'IT', value: 'IT' },
            { label: 'Construction', value: 'Construction' },
            { label: 'Agriculture ', value: 'Agriculture' },
            { label: 'Arts ', value: 'Arts' }
        ];


console.log("**************************************")
        this.listOfProjects();

    }

    openNew() {
        this.project = {};
        this.submitted = false;
        this.projectDialog = true;
    }

    deleteSelectedProjects() {
        this.deleteProjectsDialog = true;
    }

    /*editProject(project: Project) {
        this.project = { ...project };
        this.projectDialog = true;
    }*/

    /*deleteProject(project: Project) {
        this.deleteProjectDialog = true;
        this.project = { ...project };
    }*/

    confirmDeleteSelected() {
        this.deleteProjectsDialog = false;
        this.projects = this.projects.filter(val => !this.selectedProjects.includes(val));
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'projects Deleted', life: 3000 });
        this.selectedProjects = [];
    }

    confirmDelete() {
        this.deleteProjectDialog = false;
        this.projects = this.projects.filter(val => val.id !== this.project.id);
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Project Deleted', life: 3000 });
        this.project = {};
    }

    hideDialog() {
        this.projectDialog = false;
        this.submitted = false;
    }

    saveProduct() {
        this.submitted = true;

        if (this.project.intitule?.trim()) {
            if (this.project.id) {
                // @ts-ignore
                this.project.inventoryStatus = this.project.inventoryStatus.value ? this.project.inventoryStatus.value : this.project.inventoryStatus;
                this.projects[this.findIndexById(this.project.id)] = this.project;
                this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Updated', life: 3000 });
            } else {
                this.project.id = this.createId();
                this.project.code = this.createId();
                //this.project.image = 'product-placeholder.svg';
                // @ts-ignore
                this.project.inventoryStatus = this.project.inventoryStatus ? this.project.inventoryStatus.value : 'INSTOCK';
                this.projects.push(this.project);
                this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Created', life: 3000 });
            }

            this.projects = [...this.projects];
            this.projectDialog = false;
            this.project = {};
        }
    }

    findIndexById(id: string): number {
        let index = -1;
        for (let i = 0; i < this.projects.length; i++) {
            if (this.projects[i].id === id) {
                index = i;
                break;
            }
        }

        return index;
    }

    createId(): string {
        let id = '';
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < 5; i++) {
            id += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return id;
    }

   /* onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
    }*/
    onGlobalFilter(table: Table, name: string) {
      table.filterGlobal(name, 'contains');
    }




    projetsCNI:any;
  



    listOfProjects(): void {
        console.log('liste')
        this.projectservice.getAllProjects()
          .subscribe(res => {
            this.projetsCNI = res;
          console.log("liste:",this.projetsCNI)
          
          console.log("testttttttt liste");
    
    
          });
      }


      saveProject() {
        this.submitted = true;


        if (!this.newProject.intitule_projet ||  !this.newProject.maitre_oeuvre || !this.newProject.maitre_ouvrage || !this.newProject.cout_total || !this.newProject.dateDeb_projet || !this.newProject.dateFin_projet ) {
            this.errorMessage = "Project name is required";
            return; // return without creating a new project if name is not provided
        }

        this.projectservice
        .createProject(this.newProject).subscribe(data => {
          console.log(data)
          this.newProject = new ProjectCNI();
    
          console.log('newProject', this.newProject);
          
          this.listOfProjects();
          
        }, 
        error => console.log(error));
      }


  newProject :ProjectCNI=new ProjectCNI();
  today=new Date();
 



// ajout d'un projet
  createProject(){

    console.log("1:newProject.intitule_projet:");
    console.log("start");
    this.saveProject();
    this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Projet modifié', life: 3000 });
   
    this.projectDialog = false;
            this.project = {};   //??

    console.log("stop");

    console.log("2:newProject.intitule_projet:");


  }

  deleteProject(projectId: number) {
    this.projectservice.deleteProject(projectId).subscribe(response => {
      console.log('Project deleted successfully:', response);
      // Do something with the response if needed
      this.listOfProjects();


    }, error => {
      console.error('Error deleting project:', error);
      // Handle the error if needed

    });
  }


  editProject(project: ProjectCNI){
    this.projectDialog=true;
    this.newProject=project;

  }

}

import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { Project } from 'src/app/demo/api/project';
import { ProjectService } from 'src/app/demo/service/project.service';
import { ProjectCNI } from 'src/app/model/ProjectCNI';

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

    statuses: any[] = [];

    rowsPerPageOptions = [5, 10, 20];

    constructor(private projectservice: ProjectService, private messageService: MessageService) { }

    ngOnInit() {

        this.projectservice.getProjects().then(data => this.projects = data);

        this.cols = [
            { field: 'project', header: 'Project' },
            { field: 'price', header: 'Price' },
            { field: 'category', header: 'Category' },
            { field: 'rating', header: 'Reviews' },
            { field: 'inventoryStatus', header: 'Status' }
        ];

        this.statuses = [
            { label: 'INSTOCK', value: 'instock' },
            { label: 'LOWSTOCK', value: 'lowstock' },
            { label: 'OUTOFSTOCK', value: 'outofstock' }
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

    editProject(project: Project) {
        this.project = { ...project };
        this.projectDialog = true;
    }

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

    onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
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
        this.projectservice
        .createProject(this.newProject).subscribe(data => {
          console.log(data)
          this.newProject = new ProjectCNI();
    
          console.log('newProject', this.newProject);
          
        }, 
        error => console.log(error));
      }


      newProject :ProjectCNI=new ProjectCNI();
  today=new Date();
 



// ajout d'un projet
  createProject(){

    console.log("start");
   // this.newProject.code_projet=12;
    //this.newProject.intitule_projet="test";
    this.saveProject();

    console.log("stop");


  }

  deleteProject(projectId: number) {
    this.projectservice.deleteProject(projectId).subscribe(response => {
      console.log('Project deleted successfully:', response);
      // Do something with the response if needed
    }, error => {
      console.error('Error deleting project:', error);
      // Handle the error if needed
    });
  }

}

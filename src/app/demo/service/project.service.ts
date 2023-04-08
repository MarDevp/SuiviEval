import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from '../api/project';
import { Observable } from 'rxjs';

const API_projet='http://localhost:8080/api/';



@Injectable()
export class ProjectService {



    constructor(private http: HttpClient) { }

    getProjectsSmall() {
        return this.http.get<any>('assets/demo/data/products-small.json')  //???
            .toPromise()
            .then(res => res.data as Project[])
            .then(data => data);
    }

    getProjects() {
        return this.http.get<any>('assets/demo/data/products.json')
            .toPromise()
            .then(res => res.data as Project[])
            .then(data => data);
    }

    getProjectsMixed() {
        return this.http.get<any>('assets/demo/data/products-mixed.json')
            .toPromise()
            .then(res => res.data as Project[])
            .then(data => data);
    }

    getProjectsWithOrdersSmall() {
        return this.http.get<any>('assets/demo/data/products-orders-small.json')
            .toPromise()
            .then(res => res.data as Project[])
            .then(data => data);
    }









    getAllProjects(){
    return this.http.get(API_projet+'projects');
}

    createProject(  project : Object) : Observable<object>
    {
            return this.http.post(API_projet+'createProject',project);
    }

    deleteProject(  id : number) : Observable<object>
    {
        console.log("iiiiddd"+id);
            return this.http.delete(API_projet+'deleteProject/'+id);
          
    }


  /*  
    updateProject(  id : number) : Observable<object>
    {
        console.log("ii2"+id);
            return this.http.put(API_projet+'updateProject/'+id);
          
    }


*/




}

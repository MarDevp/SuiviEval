import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from '../api/project';

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
}

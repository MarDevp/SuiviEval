import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Objectif } from '../api/objectif';
import { Observable } from 'rxjs';

const API_objectif='http://localhost:8080/api/';



@Injectable()
export class ObjectifService {
       

        constructor(private http: HttpClient) { }



       /* getAllObjectifs(){
         return this.http.get(API_projet+'objectifs');
         }*/
    
        createObjectif(  objectif : Object) : Observable<object>
        {
                return this.http.post(API_objectif+'createObjectif',objectif);
        }
    
      /*  deleteProject(  id : number) : Observable<object>
        {
            console.log("iiiiddd"+id);
                return this.http.delete(API_projet+'deleteProject/'+id);
              
        }
*/


}
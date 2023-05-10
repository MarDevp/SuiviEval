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



// Gestion des utilisateurs


getAllUsers(){
    return this.http.get(API_projet+'users');
}

    createUser(  user : Object) : Observable<object>
    {
            return this.http.post(API_projet+'createUser',user);
    }

    deleteUser(  id : number) : Observable<object>
    {
        console.log("iiiiddd"+id);
            return this.http.delete(API_projet+'deleteUser/'+id);
          
    }

    /*
    updateUser(  id : number) : Observable<object>
    {
        console.log("ii2"+id);
            return this.http.put(API_projet+'updateUser/'+id);


    }
    */



    //fin gestion des utilisateurs 


    // Gestion des indicateurs 

    getAllIndicateurs(){
        return this.http.get(API_projet+'indicateurs');
    }

    createIndicateur(  indicateur : Object) : Observable<object>
    {
            return this.http.post(API_projet+'createIndicateur',indicateur);
    }

    deleteIndicateur(  id : number) : Observable<object>
    {
        console.log("iiiiddd"+id);
            return this.http.delete(API_projet+'deleteIndicateur/'+id);
          
    }

    //fin gestion des indicateurs 




     // Gestion des activtes

     getAllActivites(){
        return this.http.get(API_projet+'activites');
    }

    createActivite(  activite : Object) : Observable<object>
    {
            return this.http.post(API_projet+'createActivite',activite);
    }

    deleteActivite(  id : number) : Observable<object>
    {
        console.log("iiiiddd"+id);
            return this.http.delete(API_projet+'deleteActivite/'+id);
          
    }


     //fin gestion des activites


     // Planification des indicateurs

     getAllIndicateurDP(){
        return this.http.get(API_projet+'indicateurPlan');
    }


    createIndicateurDP(  indicateurDP : Object) : Observable<object>
    {
            return this.http.post(API_projet+'createIndicateurPlan',indicateurDP);
    }

    deleteIndicateurDP(  id : number) : Observable<object>
    {
        console.log("iiiiddd"+id);
            return this.http.delete(API_projet+'deleteIndicateurPlan/'+id);
          
    }

    getIndicateurPlanByIndicateurId(  id : number) : Observable<object>
    {
            return this.http.get(API_projet+'indicateurPlanById_indicateur/'+id);
    }

    updateValeurSuiviIndicateur(  id : number , valeurReele: number,dateSaisie:String) : Observable<object>
    {
        const body = { valeurReele, dateSaisie };
        return this.http.put(API_projet+'updateIndicateurDPValeur_reele/'+id,body);
    }
    


     // Fin planification des indicateurs


     // get objectifs by project id

     getObjectifByProjetId(  id : number) : Observable<object>
     {
             return this.http.get(API_projet+'objectif_projet/'+id);
     }

       // get resultat by project id

       getResultatByProjetId(  id : number) : Observable<object>
       {
               return this.http.get(API_projet+'resultat_projet/'+id);
       }


     // get indicators d'objectifs ( tous les indicateurs ) by project id 


     getIndicateursObjectifByProjetId(  id : number) : Observable<object>
     {
             return this.http.get(API_projet+'indicateur_objectif_projet/'+id);
     }


         // get indicators de resultat by project id 


         getIndicateursResultatByProjetId(  id : number) : Observable<object>
         {
                 return this.http.get(API_projet+'indicateur_resultat_projet/'+id);
         }
    


    // get objectif by id 

    getObjectifById(  id : number) : Observable<object>
      {
        return this.http.get(API_projet+'objectif/'+id);
     }

     // get juste objectifs by projet_id

     getObjectiffByProjetId(  id : number) : Observable<object>
     {
       return this.http.get(API_projet+'objectif_projet/'+id);
    }

    
    // get indicateurs by objectif_id

    getIndicateursByObjectifId(  id : number) : Observable<object>
    {
      return this.http.get(API_projet+'indicateurByObjectifId/'+id);
   }


   // nombre d'objectifs par projet id 

   getNombreObjectifsByProjetId(  id : number) : Observable<object>
   {
     return this.http.get(API_projet+'count_objectif_projet/'+id);
  }


  // nombre de resultats attendus par projets id 

  getNombreResultatsByProjetId(  id : number) : Observable<object>
  {
    return this.http.get(API_projet+'count_resultat_projet/'+id);
 }

  // nombre des indicateurs par projet_id

  getNombreIndicateursByProjetId(  id : number) : Observable<object>
  {
    return this.http.get(API_projet+'countIndicateurByProjetId/'+id);
 }


}

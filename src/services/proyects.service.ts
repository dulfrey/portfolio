import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProyectsService {
  private proyectsData: BehaviorSubject<any> = new BehaviorSubject([]);
  public proyectsData$ = this.proyectsData.asObservable();

  getProyectById(id: string) {
    return new Promise((resolve, reject)=>{
      this.http.get('https://raw.githubusercontent.com/dulfrey/portfolio/master/src/assets/proyects.json').subscribe(data => {
        this.proyectsData.next(data);
        if(typeof data[id] === 'undefined') {
          reject('does not exist')
      }
      else {
        resolve(data[id])
      }
        return data[id];

      });
      
      
    })
  }
  
  getproyects(){
    this.http.get('https://raw.githubusercontent.com/dulfrey/portfolio/master/src/assets/proyects.json').subscribe(data => {
      this.proyectsData.next(data);
      return data;
    });
  }
  constructor(private http: HttpClient) { }
}

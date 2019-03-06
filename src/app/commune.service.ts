import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { Commune, CommuneResponse } from './model/commune';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class CommuneService {

  private communeSource = new BehaviorSubject<Commune[]>(null);
  data = this.communeSource.asObservable();
  url = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getCommune(commune:String) {
    if(commune) {
      this.http.get(`${this.url}/commune/${commune}`).subscribe((data: CommuneResponse) => {
        this.communeSource.next(data.communeList);
      });
    } else {
      this.getAllCommunes(null, null, null, null);
    }
  }

  getAllCommunes(commune:string, inseeCode:string, depCode:string, pop:string) {
    var params = new HttpParams().set('sort', 'pop')

    if(commune){
      params = params.set('commune', commune)
    }
    if(inseeCode){
      params = params.set('insee_code', inseeCode)
    }
    if(depCode){
      params = params.set('dep', depCode)
    }
    if(pop){
      params = params.set('pop', pop)
    }

    this.http.get(`${this.url}/all`, {params}).subscribe((data: CommuneResponse) => {
        this.communeSource.next(data.communeList);
    });
  }
}

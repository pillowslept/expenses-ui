import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class MovementsService {

  private url: string = "http://localhost:9000/Expenses/api/movement/all";

  constructor(private http: Http) { }

  getMovements(){
    return this.http.get(this.url)
      .map(res => res.json());
  }

  getMovement(id){
    return this.http.get(this.getMovementUrl(id))
      .map(res => res.json());
  }

  addMovement(movenent){
    return this.http.post(this.url, JSON.stringify(movenent))
      .map(res => res.json());
  }

  updateMovement(movenent){
    return this.http.put(this.getMovementUrl(movenent.id), JSON.stringify(movenent))
      .map(res => res.json());
  }

  deleteMovement(id){
    return this.http.delete(this.getMovementUrl(id))
      .map(res => res.json());
  }

  private getMovementUrl(id){
    return this.url + "/" + id;
  }
}

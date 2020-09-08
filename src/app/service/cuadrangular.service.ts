import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CuadrangularService {
  refresSubject = new BehaviorSubject({});
  refresh$ = this.refresSubject.asObservable();

  constructor(private http: HttpClient) { }

  getAllTeams(){
    const path ='http://localhost:3000/team';
    return this.http.get(path)
  }

  deleteTeam(id) {
    const path ='http://localhost:3000/team/'+id;
    return this.http.delete(path);
  }
  edit(id,team){
    const path ='http://localhost:3000/team/'+id;
    return this.http.put(path,team);
  }
  create(team){
    const path ='http://localhost:3000/team';
    return this.http.post(path,team);
  }
  createCuadrangular(){
    const path ='http://localhost:3000/fixture/cuadrangular';
    return this.http.post(path,{});
  }
  newTournament(){
    const path ='http://localhost:3000/fixture/newTournament';
    return this.http.post(path,{});
  }
  updateFixture(id, fixture){
    const path ='http://localhost:3000/fixture/' + id;
    return this.http.put(path,fixture);
  }
  getFixture(){
    const path ='http://localhost:3000/fixture';
    return this.http.get(path);
  }
  refres(){
    this.refresSubject.next({refresh: true})
  }
  
}


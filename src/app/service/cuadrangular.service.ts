import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CuadrangularService {

  constructor(private http: HttpClient) { }

  getAllTeams(){
    const path ='http://localhost:3000/team';
    return this.http.get(path)
  }
}

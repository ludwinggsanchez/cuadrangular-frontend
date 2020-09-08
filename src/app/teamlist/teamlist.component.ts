import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { CuadrangularService } from '../service/cuadrangular.service';
import * as _ from 'lodash';
export interface PeriodicElement {
  name: string;
  goals: number;
  points: number;
  position: string;
}

@Component({
  selector: 'app-teamlist',
  templateUrl: './teamlist.component.html',
  styleUrls: ['./teamlist.component.scss']
})
export class TeamlistComponent implements OnInit {
  @Input() enableList: boolean;
  enabledButtons = true;
  team = { image: '', name: '' };
  teamlist: any = [];
  enabledGenCuadrangular= false;
  tablePositions: PeriodicElement[] = [];
  displayedColumns: string[] = ['position', 'name', 'points', 'goals'];

  constructor(private teamService: CuadrangularService) { }

  ngOnInit(): void {
    this.teamService.refresh$.subscribe((data)=>{
      this.getTeams();
    })
  }

  teamEvents(event) {
    if (event.action === 'delete') {
      console.log(event);
      this.teamService.deleteTeam(event.team._id)
        .subscribe((deleted) => {
          this.getTeams();
        })
    } else {
      this.team = event.team
    }
  }
  clearForm() {
    this.team = { image: '', name: '' };
  }

  getTeams() {
    this.teamService.getAllTeams()
      .subscribe((data: any) => {

        data = _.orderBy(data, ["points"], ["desc"]);
        console.log(data);
        this.teamlist = data.map((team, key) => ({ ...{position: key +1},...team, ...{ image: team.image !== '' ? team.image : 'assets/default.jpg' } }));
        this.tablePositions = this.teamlist;
        if(this.teamlist.length === 4) {
          this.enabledGenCuadrangular = true;
        }else{ 
          this.enabledGenCuadrangular = false;
        }

      })
  }
  genCuadrangular() {
    this.teamService.createCuadrangular()
    .subscribe((response)=> {
      this.teamService.refres()
    })
  }
  save() {
    console.log(this.team);
    const teamEdit: any = this.team;
    if(teamEdit.name !== '') {
      if (typeof teamEdit._id === 'undefined') {
        if (this.teamlist.length < 4) {
          this.teamService.create({
            "name": this.team.name,
            "image": this.team.image,
            "goals": 0,
            "points": 0
          }).subscribe((data) => { this.getTeams() })
        }else {
          alert("solo puede crear 4 equipos !")
        }
      } else {
        this.teamService.edit(teamEdit._id,
          {
            ...teamEdit,
            ...{
              "name": this.team.name,
              "image": this.team.image,
            }
          }
        ).subscribe((data) => { this.getTeams() })
      }
    }else {
      alert("Nombre no puede ser vacio!")

    }

    this.clearForm();
  }

}

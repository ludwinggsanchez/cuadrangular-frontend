import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { CuadrangularService } from '../service/cuadrangular.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  team = {image: '', name:''}

  constructor(private teamService: CuadrangularService) { }

  ngOnInit(): void {
    this.teamService.getAllTeams()
    .subscribe((data)=> {
      console.log(data);
    })
  }

  save(){
    console.log(this.team);
    this.team = {image: '', name:''};
  }

}

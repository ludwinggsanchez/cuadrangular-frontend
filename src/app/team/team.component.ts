import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { CuadrangularService } from '../service/cuadrangular.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
    @Input() team: any;
    @Input() enableButtons: boolean;
    @Output() actionEvent = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }


  action(action){
    this.actionEvent.emit({action: action, team: this.team})
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { CuadrangularService } from '../service/cuadrangular.service';

@Component({
  selector: 'app-fixture',
  templateUrl: './fixture.component.html',
  styleUrls: ['./fixture.component.scss']
})
export class FixtureComponent implements OnInit {
  @Input() fixture: any;

  edited = false;
  constructor(private cs: CuadrangularService  ) { }

  ngOnInit(): void {
    if(this.fixture.score2 === -1 && this.fixture.score1 === -1) {
      this.edited = true;
    }else {
      this.edited = false;
    }
    if(this.fixture.team1.image == '') {
      this.fixture.team1.image = 'assets/default.jpg'
    }
    if(this.fixture.team2.image == '') {
      this.fixture.team2.image = 'assets/default.jpg'
    }
  }
  saveResult(){
    if (this.fixture.score1 !== -1 && this.fixture.score2  !== -1){
      this.cs.updateFixture(this.fixture._id, this.fixture)
      .subscribe((data)=>{
        console.log(data);
        this.cs.refres()
      })
    }
  }

}

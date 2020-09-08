import { Component } from '@angular/core';
import { CuadrangularService } from './service/cuadrangular.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cuadrangular-frontend';
  fixtureList: any;
  constructor(private cuandrangularService: CuadrangularService) { }
  showDataTable = true;
  ngOnInit(): void {
    this.cuandrangularService.refresh$
    .subscribe((refresh)=>{
      this.cuandrangularService.getFixture()
      .subscribe((data: any)=>{
        console.log(data);
        if(data.length > 0) {
          this.showDataTable = false;
        }
        this.fixtureList = data;
      })
    })

  }
  newCuadrangular(){
    this.cuandrangularService.newTournament()
    .subscribe((res)=>{
      this.showDataTable = true;
      this.cuandrangularService.refres();
    })
  }
}

import { WinnerPage } from './../winner/winner';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { templateVisitAll } from '@angular/compiler';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})



export class HomePage {
// Variable for Team Tembisa
  ScoreTeamA=0;

  // Variable for Team Soweto
  ScoreTeamB=0;
  constructor(public navCtrl: NavController) {

  }
// Function for team Tembisa
  teamA(value:number):void{
    this.ScoreTeamA +=value;
  }

// Function for team Soweto
teamB(value:number):void{
  this.ScoreTeamB +=value;
}

reset():void{

this.ScoreTeamA=0;
this.ScoreTeamB=0;

}

end():void{
  this.navCtrl.push(WinnerPage)
}
}

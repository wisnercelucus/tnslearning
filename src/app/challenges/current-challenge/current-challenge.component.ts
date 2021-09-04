import { Component } from "@angular/core"

@Component({
  selector:"ns-current-challenge",
  templateUrl:'./current-challenge.component.html',
  styleUrls:["./current-challenge.component.css"],
  moduleId:module.id
})
export class CurrentChallengeComponent{
  challengeTitle:string;
  currentChallenge:string;

  constructor(){}

  onSetChallenge(){
    this.currentChallenge = this.challengeTitle;
  }
}

import { Component } from '@angular/core'

@Component({
  selector: 'ns-app',
  templateUrl: './app.component.html',
  styleUrls:["./app.component.css"]
})
export class AppComponent {
  currentChallenges:string[] = [];
  onChallenEdit($event:any){
    this.currentChallenges.push($event);
  }
}

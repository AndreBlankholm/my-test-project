import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showScheduleByDate = false;
  showBarberList = false;
  



  onDateSelected() {
    
  }

  onScheduleByDateClicked() {
    this.showScheduleByDate = true;
    this.showBarberList = true;
  }

  onScheduleByBarberSchedule() {
    this.showScheduleByDate = false;
    this.showBarberList = true;
  }
}

import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
  animations: [
    trigger('counterAnimation', [
      state('start', style({ transform: 'scaleY(0)', opacity: 0 })),
      state('end', style({ transform: 'scaleY(1)', opacity: 1 })),
      transition('start => end', animate('1s ease-out')),
    ]),
  ],
})
export class CounterComponent implements OnInit {
  selectedDate: string | null = '';
  age: number = 0;
  seconds: number = 0;
  animationState: string = 'start';

  // selectedDate is in yyyy-mm-dd format

  ngOnInit() {
    this.selectedDate = localStorage.getItem('birthdate');
    if (this.selectedDate === null) {
      window.location.href = '/date-picker';
    } else {
      setInterval(() => this.updateCounter(this.selectedDate), 1000);
    }
  }

  updateCounter(birthDate: any) {
    const currentDate = new Date().toISOString().slice(0, 10);
    const currentTime = new Date().toISOString().slice(11, 19);
    console.log(currentDate, currentTime);

    const birthYear = +birthDate.slice(0, 4);
    const birthMonth = +birthDate.slice(5, 7);
    const birthDay = +birthDate.slice(8, 10);
    // minutes and seconds should be 00.00 hardcoded
    const birthHours = 0;
    const birthMinutes = 0;
    const birthSeconds = 0;

    const currentYear = +currentDate.slice(0, 4);
    const currentMonth = +currentDate.slice(5, 7);
    const currentDay = +currentDate.slice(8, 10);
    const currentHours = +currentTime.slice(0, 2);
    const currentMinutes = +currentTime.slice(3, 5);
    const currentSeconds = +currentTime.slice(6, 8);
    console.log(currentHours, currentMinutes, currentSeconds);

    // converet the birth year to seconds
    const birthYearInSeconds = birthYear * 365 * 24 * 60 * 60;
    // convert the birth month to seconds
    const birthMonthInSeconds = birthMonth * 30 * 24 * 60 * 60;
    // convert the birth day to seconds
    const birthDayInSeconds = birthDay * 24 * 60 * 60;
    const birthHoursInSeconds = 0;
    const birthMinutesInSeconds = 0;
    const birthSecondsInSeconds = 0;

    // convert the current year to seconds
    const currentYearInSeconds = currentYear * 365 * 24 * 60 * 60;
    // convert the current month to seconds
    const currentMonthInSeconds = currentMonth * 30 * 24 * 60 * 60;
    // convert the current day to seconds
    const currentDayInSeconds = currentDay * 24 * 60 * 60;
    const currentHoursInSeconds = currentHours * 60 * 60;
    const currentMinutesInSeconds = currentMinutes * 60;
    const currentSecondsInSeconds = currentSeconds;

    let birthDateInSeconds =
      birthYearInSeconds + birthMonthInSeconds + birthDayInSeconds;
    let currentDateInSeconds =
      currentYearInSeconds +
      currentMonthInSeconds +
      currentDayInSeconds +
      currentHoursInSeconds +
      currentMinutesInSeconds +
      currentSecondsInSeconds;

    // calculate the difference between the current date and the birth date
    let difference = currentDateInSeconds - birthDateInSeconds;

    // find the age in years and the rest of the seconds
    this.age = Math.floor(difference / (365 * 24 * 60 * 60));
    this.seconds = difference % (365 * 24 * 60 * 60);

    this.animationState = this.animationState === 'start' ? 'end' : 'start';
  }

  showInfoPopup = false;

  showInfo() {
    console.log('show info');
    this.showInfoPopup = !this.showInfoPopup;
  }

  reset() {
    localStorage.removeItem('birthdate');
    window.location.href = '/select-your-birthdate';
  }
}

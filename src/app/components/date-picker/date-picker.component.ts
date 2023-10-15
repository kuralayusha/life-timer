import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css'],
})
export class DatePickerComponent implements OnInit {
  ngOnInit(): void {
    const birthdate = localStorage.getItem('birthdate');
    if (birthdate !== null) {
      window.location.href = '/counter';
    }
  }
  currentDate = new Date().toISOString().slice(0, 10);
  selectedDate: string = this.currentDate;

  labelOne = true;
  labelTwo = false;
  labelThree = false;

  onStart() {
    if (this.selectedDate === this.currentDate) {
      this.labelOne = false;
      this.labelTwo = true;
      this.labelThree = false;
    } else if (this.selectedDate < this.currentDate) {
      localStorage.setItem('birthdate', this.selectedDate);
      this.labelOne = true;
      this.labelTwo = false;
      this.labelThree = false;
      window.location.href = '/counter';
    } else {
      this.labelOne = false;
      this.labelTwo = false;
      this.labelThree = true;
    }
  }
}

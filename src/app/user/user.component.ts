import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public usersData: any;

  constructor() { }

  ngOnInit(): void {
    this.usersData = [
      { name: 'Pratik', technology: 'Angular' },
      { name: 'Shahbaz', technology: 'Angular' },
      { name: 'Mitul', technology: 'Angular' },
      { name: 'Shivam', technology: 'UI' },
    ];
  }

}

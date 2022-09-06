import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  /** used to receive data from parent - Parent to Child Communication */
  @Input() userList: any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.userList);
  }

}

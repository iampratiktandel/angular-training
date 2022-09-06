import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  /** used to receive data from parent - Parent to Child Communication */
  @Input() todoList: string[];
  
  constructor() { 
    this.todoList = [];
    console.log(this.todoList);
  }

  ngOnInit(): void {
    console.log(this.todoList);
  }

}

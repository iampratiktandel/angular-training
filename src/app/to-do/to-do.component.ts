import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {

  public todoData: string[];
  
  constructor() { 
    this.todoData = [];
  }

  ngOnInit(): void {
    this.todoData = ['Wake up'];
  }

  onAddToDo(todo: string) {
    console.log(todo);
    this.todoData.push(todo);
  }
}

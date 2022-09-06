import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-to-do-form',
  templateUrl: './to-do-form.component.html',
  styleUrls: ['./to-do-form.component.css']
})
export class ToDoFormComponent implements OnInit {

  /** to get todo input reference from dom */
  @ViewChild('toDo') todoInput!: ElementRef;

  /** used to emit event from child - Child to Parent Communication */
  @Output() addToDo: EventEmitter<string>;

  constructor() { 
    this.addToDo = new EventEmitter();
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this?.todoInput?.nativeElement?.value);
    this.addToDo.emit(this?.todoInput?.nativeElement?.value);
  }
}

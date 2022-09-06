import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { ToDoComponent } from './to-do/to-do.component';
import { ToDoListComponent } from './to-do/to-do-list/to-do-list.component';
import { ToDoFormComponent } from './to-do/to-do-form/to-do-form.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserListComponent,
    ToDoComponent,
    ToDoListComponent,
    ToDoFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

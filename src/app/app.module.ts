import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { UsersComponent } from "./components/users/users.component";
import { UserComponent } from "./components/user/user.component";
import { UserDetailsComponent } from "./components/user-details/user-details.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { AppRoutingModule } from "./app-routing.module";
import { UsersService } from "./services/users.service";
import { HttpClientModule } from "@angular/common/http";
import { CustomPipe } from "./pipes/custom.pipe";
import { CustomDirective } from "./directives/custom.directive";
import { StudentsComponent } from "./components/students/students.component";
import { StudentDetailsComponent } from "./components/student-details/student-details.component";
import { EditStudentComponent } from "./components/edit-student/edit-student.component";
import { AddStudentComponent } from "./components/add-student/add-student.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    UserDetailsComponent,
    NotFoundComponent,
    CustomPipe,
    CustomDirective,
    StudentsComponent,
    StudentDetailsComponent,
    EditStudentComponent,
    AddStudentComponent,

    /**
     * main building blocks in angular
     * 1- Components
     * 2- Directives
     * 3- Pipes
     */
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
    /**
     * other modules
     * 1- Custom modules
     * 2- built-in modules
     */
  ],
  providers: [/** 4- services */ UsersService],
  bootstrap: [AppComponent /** root component */],
})
export class AppModule {}

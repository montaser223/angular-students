import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { StudentsComponent } from "./components/students/students.component";
import { StudentDetailsComponent } from "./components/student-details/student-details.component";
import { EditStudentComponent } from "./components/edit-student/edit-student.component";

const routes: Routes = [
  { path: "", redirectTo: "students", pathMatch: "full" },
  { path: "students", component: StudentsComponent },
  { path: "students/:id", component: StudentDetailsComponent },
  { path: "edit-student/:id", component: EditStudentComponent },
  { path: "**", component: NotFoundComponent },
];
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}

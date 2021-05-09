import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { StudentsService } from "src/app/services/students.service";
import { Student } from "../../models/student";

@Component({
  selector: "app-students",
  templateUrl: "./students.component.html",
})
export class StudentsComponent implements OnInit, OnDestroy {
  students: Student[] = [];
  subscriber: any;
  errMsg: string = "";
  query: string = "";
  filterdStudents: Student[] = [];
  constructor(private service: StudentsService, private router: Router) {}

  ngOnInit(): void {
    this.getStudentList();
  }

  getStudentList() {
    this.subscriber = this.service.getStudents().subscribe({
      next: (response) => {
        this.students = response;
        this.filterStudent("");
        this.errMsg = "";
      },
      error: (err) => {
        this.errMsg = err;
      },
    });
  }

  ngOnDestroy() {
    this.subscriber.unsubscribe();
  }

  updateStudentList(msg: string) {
    msg === "success"
      ? this.getStudentList()
      : (this.errMsg = "vaild to add new Student");
  }

  deleteStd(id: any) {
    confirm("are you sure") &&
      this.service.deleteStudent(id).subscribe({
        next: (res) => {
          this.getStudentList();
        },
        error: (err) => {
          this.errMsg = err;
        },
      });
  }

  editStd(id: any) {
    this.router.navigate(["edit-student", id]);
  }

  viewStd(id: any) {
    this.router.navigate(["students", id]);
  }

  filterStudent(q: any) {
    const search = new RegExp(q.toLowerCase());
    this.filterdStudents = this.students.filter((std) =>
      search.test(std.name.toLowerCase())
    );
  }
}

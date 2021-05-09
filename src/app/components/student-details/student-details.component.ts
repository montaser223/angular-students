import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Student } from "src/app/models/student";
import { StudentsService } from "src/app/services/students.service";

@Component({
  selector: "app-student-details",
  templateUrl: "./student-details.component.html",
})
export class StudentDetailsComponent implements OnInit, OnDestroy {
  student: Student = {
    id: NaN,
    name: "",
    email: "",
  };
  id: any = "";
  subscriber: any;
  constructor(private service: StudentsService, private route: ActivatedRoute) {
    this.id = this.route.snapshot.params.id;
  }

  ngOnInit(): void {
    this.subscriber = this.service.getStudentById(this.id).subscribe({
      next: (res) => {
        this.student = res;
      },
    });
  }

  ngOnDestroy() {
    this.subscriber.unsubscribe();
  }
}

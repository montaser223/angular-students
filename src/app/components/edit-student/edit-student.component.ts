import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Student } from "src/app/models/student";
import { StudentsService } from "src/app/services/students.service";

@Component({
  selector: "app-edit-student",
  templateUrl: "./edit-student.component.html",
})
export class EditStudentComponent implements OnInit {
  @Input("studentItem") student: Student = {
    id: NaN,
    name: "",
    email: "",
  };
  subscriber: any;
  myForm: FormGroup = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(3)]),
    email: new FormControl("", [
      Validators.required,
      Validators.pattern("^[a-zA-Z0-9.#$&*!_%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),
    ]),
  });
  id: any = "";
  constructor(
    private service: StudentsService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.id = this.route.snapshot.params.id;
  }

  ngOnInit(): void {
    this.subscriber = this.service.getStudentById(this.id).subscribe({
      next: (res) => {
        this.myForm.setValue({
          name: res.name,
          email: res.email,
        });
      },
    });
  }

  submit(form: any) {
    if (form.valid) {
      this.service.editStudent(this.id, form.value).subscribe({
        next: (res) => {
          this.router.navigate(["students"]);
          form.reset();
          this.myForm.setValue({
            name: "",
            email: "",
          });
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }

  ngOnDestroy() {
    this.subscriber.unsubscribe();
  }
}

import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Observable } from "rxjs";
import { StudentsService } from "src/app/services/students.service";

@Component({
  selector: "app-add-student",
  templateUrl: "./add-student.component.html",
})
export class AddStudentComponent implements OnInit {
  @Output() updateStudents = new EventEmitter<string>();
  subscriber: any;
  myForm: FormGroup = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(3)]),
    email: new FormControl("", [
      Validators.required,
      Validators.pattern("^[a-zA-Z0-9.#$&*!_%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),
    ]),
  });
  constructor(private service: StudentsService) {}

  ngOnInit(): void {}

  submit(form: any) {
    if (form.valid) {
      this.subscriber = this.service.addStudent(form.value).subscribe({
        next: (res) => {
          form.reset();
          this.myForm.setValue({
            name: "",
            email: "",
          });
          this.updateStudents.emit("success");
        },
        error: (err) => {
          this.updateStudents.emit("err");
        },
      });
    }
  }

  ngOnDestroy() {
    this.subscriber?.unsubscribe();
  }
}

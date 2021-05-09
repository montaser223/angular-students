import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Student } from "../models/student";

@Injectable({
  providedIn: "root",
})
export class StudentsService {
  hostUrl: string = "https://lit-lake-86945.herokuapp.com/";
  studentsUrl: string = this.hostUrl + "students";
  constructor(private _http: HttpClient) {}
  getStudents() {
    return this._http.get<Student[]>(this.studentsUrl);
  }

  addStudent(student: { name: string; email: string }) {
    return this._http.post<Student>(this.studentsUrl, student);
  }

  deleteStudent(id: any) {
    return this._http.delete(this.studentsUrl + `/${id}`);
  }

  getStudentById(id: any) {
    return this._http.get<Student>(this.studentsUrl + `/${id}`);
  }

  editStudent(id: any, data: { name: string; email: string }) {
    return this._http.put<Student>(this.studentsUrl + `/${id}`, data);
  }
}

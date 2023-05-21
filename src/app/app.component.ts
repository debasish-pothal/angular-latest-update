import { Component, OnInit } from "@angular/core";
import { CoursesService } from "./services/courses.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  courses = [];

  constructor(private coursesService: CoursesService) {}

  ngOnInit(): void {
    this.coursesService
      .loadCourses()
      .subscribe((res) => (this.courses = res["payload"]));
  }
}

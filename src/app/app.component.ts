import { Component } from "@angular/core";
import { COURSES } from "../db-data";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  courses = COURSES;

  handleCourseCardClick(course) {
    console.log("inside app component");
    console.log(course);
  }
}

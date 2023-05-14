import { Component, ViewChild } from "@angular/core";
import { COURSES } from "../db-data";
import { CourseCardComponent } from "./course-card/course-card.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  courses = COURSES;

  @ViewChild("course1")
  card1: CourseCardComponent;

  @ViewChild("course2")
  card2: CourseCardComponent;

  handleCourseCardClick(course) {
    console.log("inside app component");
    console.log(this.card1);
    console.log(this.card2);
    console.log(course);
  }
}

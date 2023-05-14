import {
  AfterViewInit,
  Component,
  ContentChild,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
} from "@angular/core";
import { Course } from "../model/course";

@Component({
  selector: "course-card",
  templateUrl: "./course-card.component.html",
  styleUrls: ["./course-card.component.css"],
})
export class CourseCardComponent implements AfterViewInit {
  @Input() course: Course;

  @Input() noImgTempl: TemplateRef<any>;

  @Output() onCourseClick = new EventEmitter<Course>();

  @ContentChild("myPar")
  paragraph;

  viewCourse() {
    this.onCourseClick.emit(this.course);
  }

  ngAfterViewInit(): void {
    console.log("inside course card");
    console.log(this.paragraph);
  }
}

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CourseCardComponent } from "./course-card/course-card.component";
import { HighlightedDirective } from "./directives/highlighted.directive";
import { NgxUnlessDirective } from "./directives/ngx-unless.directive";

@NgModule({
  declarations: [
    AppComponent,
    CourseCardComponent,
    HighlightedDirective,
    NgxUnlessDirective,
  ],
  imports: [BrowserModule, BrowserAnimationsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

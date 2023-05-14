import { Directive, HostBinding, HostListener, Input } from "@angular/core";

@Directive({
  selector: "[highlighted]",
  exportAs: "hl",
})
export class HighlightedDirective {
  @Input("highlighted")
  isHighlighted = false;

  constructor() {
    console.log("directive created");
  }

  @HostBinding("className")
  get addCssClass() {
    return this.isHighlighted ? "highlighted" : "";
  }

  @HostListener("mouseenter")
  onMouseEnter() {
    this.isHighlighted = true;
  }

  @HostListener("mouseleave")
  onMouseLeave() {
    this.isHighlighted = false;
  }

  toggle() {
    this.isHighlighted = !this.isHighlighted;
  }
}

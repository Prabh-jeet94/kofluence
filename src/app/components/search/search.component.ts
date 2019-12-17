import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  Renderer2
} from "@angular/core";
import { HttpServiceService } from "../../services/http-service.service";
import { NgForm } from "@angular/forms";
import $ from "jquery";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"]
})
export class SearchComponent implements OnInit {
  @ViewChild("tagsInput") tagsInput: ElementRef;
  @ViewChild("myForm") myForm: NgForm;
  searchedStrArr = [];

  constructor(
    private httpService: HttpServiceService,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    $("body").on("click", ".tags-input-pills", e => {
      let category = $(e.currentTarget).data("category");
      e.currentTarget.remove();
      this.filteredData(category);
    });
  }

  filteredData(category) {
    let filteredArr = this.searchedStrArr.indexOf(category);
    if (filteredArr > -1) {
      this.searchedStrArr.splice(filteredArr, 1);
    }
    this.httpService.$searchedString.next(this.searchedStrArr);
  }

  onSubmit(value, ngForm) {
    const searchedString = value["search"];
    this.searchedStrArr.push(value["search"]);
    this.myForm.resetForm();
    this.httpService.$searchedString.next(this.searchedStrArr);
    // adding input tags dynamically
    let tagInputSpan;
    tagInputSpan = this.renderer.createElement("span");
    let searchedStr = this.renderer.createText(searchedString + "  x");
    this.renderer.setAttribute(tagInputSpan, "data-category", searchedString);
    this.renderer.addClass(tagInputSpan, "tags-input-pills");
    this.renderer.appendChild(tagInputSpan, searchedStr);
    var element = document.getElementById("tagsInput");
    element.insertBefore(tagInputSpan, element.firstChild);
  }
}

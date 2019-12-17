import { Component, OnInit } from "@angular/core";
import { HttpServiceService } from "../../services/http-service.service";

@Component({
  selector: "app-highlights",
  templateUrl: "./highlights.component.html",
  styleUrls: ["./highlights.component.scss"]
})
export class HighlightsComponent implements OnInit {
  youMaysearchtags = ["#flatshoes", "#heel", "#redshoes", "#sportshoes"];
  searchMap = {
    sandals: ["#flatshoes", "#heel"],
    shoes: ["#redshoes", "#sportshoes"]
  };
  constructor(private http: HttpServiceService) {}

  ngOnInit() {
    this.http.$searchedString.subscribe(response => {
      if (response.length > 1 || !response.length) {
        this.youMaysearchtags = [
          "#flatshoes",
          "#heel",
          "#redshoes",
          "#sportshoes"
        ];
      } else {
        this.youMaysearchtags = this.searchMap[response[0]];
      }
    });
  }
}

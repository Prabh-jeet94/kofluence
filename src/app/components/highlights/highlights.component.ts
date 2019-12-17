import { Component, OnInit } from "@angular/core";
import { HttpServiceService } from "../../services/http-service.service";

@Component({
  selector: "app-highlights",
  templateUrl: "./highlights.component.html",
  styleUrls: ["./highlights.component.scss"]
})
export class HighlightsComponent implements OnInit {
  youMaysearchtags = ["#heels", "#flatshoes", "#redshoes", "#sportshoes"];
  searchMap = {
    sandals: ["#heels", "#flatshoes"],
    shoes: ["#redshoes", "#sportshoes"]
  };
  constructor(private http: HttpServiceService) {}

  ngOnInit() {
    this.http.$searchedString.subscribe(response => {
      console.log(response);
      var searchKeys = Object.keys(this.searchMap);
      console.log(searchKeys);
      if (response.length) {
        if (response.length > 1) {
          this.youMaysearchtags = [];
          searchKeys.forEach((eachItem, index) => {
            this.youMaysearchtags.push(this.searchMap[eachItem]);
          });
          this.youMaysearchtags = [].concat.apply([], this.youMaysearchtags);
        } else {
          this.youMaysearchtags = this.searchMap[response[0]];
        }
      } else {
        this.youMaysearchtags = [
          "#heels",
          "#flatshoes",
          "#redshoes",
          "#sportshoes"
        ];
      }
      // if (response.length > 1 || !response.length) {
      //   this.youMaysearchtags = [
      //     "#flatshoes",
      //     "#heel",
      //     "#redshoes",
      //     "#sportshoes"
      //   ];
      // } else {
      //   this.youMaysearchtags = this.searchMap[response[0]];
      // }
    });
  }
}

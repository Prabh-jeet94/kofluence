import { Component, OnInit } from "@angular/core";
import { HttpServiceService } from "../../services/http-service.service";

@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.scss"]
})
export class PostsComponent implements OnInit {
  responseData: any;
  clonedData: any;
  constructor(private httpService: HttpServiceService) {}

  ngOnInit() {
    this.httpService.getData().subscribe(resp => {
      this.responseData = resp;
      this.clonedData = JSON.parse(JSON.stringify(resp));
    });

    this.httpService.$searchedString.subscribe(responseStr => {
      let filteredData = this.clonedData.filter(item => {
        if (responseStr.length > 1) {
          return (
            item.category === responseStr[0] && item.category === responseStr[1]
          );
        } else {
          return item.category === responseStr[0];
        }
      });
      this.responseData = filteredData;
      if (!filteredData.length) {
        this.responseData = this.clonedData;
      }
    });
  }
}

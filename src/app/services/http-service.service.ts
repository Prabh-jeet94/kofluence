import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, Subject } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class HttpServiceService {
  $searchedString = new Subject<any>();
  constructor(private httpClient: HttpClient) {}

  getData(): Observable<any> {
    return this.httpClient.get("assets/data.json").pipe(
      map(response => {
        return response;
      })
    );
  }
}

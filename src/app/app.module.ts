import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { SearchComponent } from "./components/search/search.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { HighlightsComponent } from "./components/highlights/highlights.component";
import { MainComponent } from "./components/main/main.component";
import { PostsComponent } from "./components/posts/posts.component";
import { LatestPostsComponent } from './components/latest-posts/latest-posts.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    NavbarComponent,
    HighlightsComponent,
    MainComponent,
    PostsComponent,
    LatestPostsComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

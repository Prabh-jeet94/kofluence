import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PostsComponent } from "./components/posts/posts.component";
import { LatestPostsComponent } from "./components/latest-posts/latest-posts.component";

const routes: Routes = [
  {
    path: "top-posts",
    component: PostsComponent
  },
  {
    path: "latest-posts",
    component: LatestPostsComponent
  },
  { path: "", redirectTo: "/top-posts", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

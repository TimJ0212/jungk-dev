import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    loadComponent: () => import("./pages/home/home.component").then(m => m.HomeComponent)
  },
  {
    path: "moscow",
    pathMatch: "full",
    loadComponent: () => import("./pages/moscow/moscow.component").then(m => m.MoscowComponent)
  },
  {
    path: "sprint-review",
    pathMatch: "full",
    loadComponent: () => import("./pages/sprint-review/sprint-review.component").then(m => m.SprintReviewComponent)
  }
];

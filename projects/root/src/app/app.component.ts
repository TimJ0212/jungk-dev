import { Component } from '@angular/core';
import {Router, RouterLink, RouterOutlet, ROUTES} from '@angular/router';
import {MatButton} from "@angular/material/button";
import {routes} from "./app.routes";
import {MatIcon} from "@angular/material/icon";
import {MoscowComponent} from "./pages/moscow/moscow.component";
import {MatToolbar} from "@angular/material/toolbar";

type App = {
  name: string,
  link: string,
  icon: string
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatButton, RouterLink, MatIcon, MatToolbar],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  public apps: App[] = [{
    name: 'MoSCoW',
    icon: "liquor",
    link: "/moscow"
  }]

  constructor(public router: Router){
  }


}

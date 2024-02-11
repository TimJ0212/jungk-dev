import { Component } from '@angular/core';
import {CdkDropListGroup} from "@angular/cdk/drag-drop";
import {MatFabButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {MatCard, MatCardContent} from "@angular/material/card";
import {EditableCardComponent} from "../../../../../gui-lib/src/lib/editable-card/editable-card.component";
import {MatBadge} from "@angular/material/badge";

@Component({
  selector: 'app-sprint-review',
  standalone: true,
  imports: [
    CdkDropListGroup,
    MatFabButton,
    MatIcon,
    MatCardContent,
    MatCard,
    EditableCardComponent,
    MatBadge
  ],
  templateUrl: './sprint-review.component.html',
  styleUrl: './sprint-review.component.scss'
})
export class SprintReviewComponent {

  data = [
    {
      title: "Good",
      values: [] as { text: string, likes: string }[]
    },
    {
      title: "Needs improvement",
      values: [] as { text: string, likes: string }[]
    },
    {
      title: "Suggestions for improvement",
      values: [] as { text: string, likes: string }[]
    },
  ]

  addNote(title: string) {
    this.data.forEach(value => {
      if (value.title === title) {
        value.values.push({text: value.title, likes: ""})
      }
    })
  }
}

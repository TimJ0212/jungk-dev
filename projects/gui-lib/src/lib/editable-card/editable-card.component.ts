import { Component } from '@angular/core';
import {MatCard, MatCardContent} from "@angular/material/card";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'lib-editable-card',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    FormsModule
  ],
  templateUrl: './editable-card.component.html',
  styleUrl: './editable-card.component.scss'
})
export class EditableCardComponent {
  value = 'Initial text'; // Initial value for the card content
  edit = false; // Flag to toggle edit mode
}

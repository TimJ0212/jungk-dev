import {Component, Inject} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions, MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from "@angular/material/dialog";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {FormsModule} from "@angular/forms";
import {MatOption, MatSelect} from "@angular/material/select";

@Component({
  selector: 'app-add-entry-dialog',
  standalone: true,
  imports: [
    MatDialogContent,
    MatFormField,
    MatDialogActions,
    MatDialogTitle,
    MatInput,
    MatButton,
    FormsModule,
    MatSelect,
    MatOption,
    MatDialogClose,
    MatLabel
  ],
  templateUrl: './add-entry-dialog.component.html',
  styleUrl: './add-entry-dialog.component.scss'
})
export class AddEntryDialogComponent {

  data = {
    title: "must",
    value: ""
  }

  constructor(
    public dialogRef: MatDialogRef<AddEntryDialogComponent>
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

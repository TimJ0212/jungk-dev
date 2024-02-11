import {Component, OnInit} from '@angular/core';
import {
  CdkDrag, CdkDragDrop, CdkDropList, CdkDropListGroup, moveItemInArray, transferArrayItem
} from "@angular/cdk/drag-drop";
import {MatButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {MatDialog} from "@angular/material/dialog";
import {AddEntryDialogComponent} from "./add-entry-dialog/add-entry-dialog.component";

@Component({
  selector: 'app-moscow',
  standalone: true,
  imports: [CdkDropListGroup, CdkDropList, CdkDrag, MatButton, MatIcon],
  templateUrl: './moscow.component.html',
  styleUrl: './moscow.component.scss'
})
export class MoscowComponent implements OnInit {

  data = [{
    title: "must", values: [] as string[]
  }, {
    title: "should", values: [] as string[]
  }, {
    title: "could", values: [] as string[]
  }, {
    title: "wont", values: [] as string[]
  }]

  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.data.forEach(element => {
      element.values = JSON.parse(localStorage.getItem(`moscow:${element.title}`) || '[]');
    })
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex,);
    }
    this.persist()
  }

  deleteData() {
    this.data.forEach(element => {
      element.values = []
    })
    this.persist()
  }

  openAddEntryDialog() {
    const dialogRef = this.dialog.open(AddEntryDialogComponent);
    dialogRef.afterClosed().subscribe(result =>
      this.data.forEach(value => {
        if (value.title === result.title) {
          value.values.push(result.value)
        }
      }))
    }

  private persist() {
    this.data.forEach(element => localStorage.setItem(`moscow:${element.title}`, JSON.stringify(element.values)))
  }
}

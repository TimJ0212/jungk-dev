import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {MatCard, MatCardContent} from "@angular/material/card";
import {CdkDrag, CdkDragHandle} from "@angular/cdk/drag-drop";
import {NgClass, NgStyle} from "@angular/common";
export type StickyNoteColor = "yellow" | "green" | "pink"

export type StickyNote = {
  id:  string,
  text: string,
  x: number,
  y: number
  color: StickyNoteColor
}


@Component({
  selector: 'lib-sticky-note',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    CdkDrag,
    CdkDragHandle,
    NgClass,
    NgStyle
  ],
  templateUrl: './sticky-note.component.html',
  styleUrl: './sticky-note.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StickyNoteComponent {

  @Input({required: true}) stickyNote!: StickyNote;
  @Output() stickyNoteChange = new EventEmitter<StickyNote>();

  onDragEnded(event: any) {
    this.stickyNoteChange.emit({
      ...this.stickyNote,
      x: event.source.clientX,
      y: event.source.clientY
    });
  }


}

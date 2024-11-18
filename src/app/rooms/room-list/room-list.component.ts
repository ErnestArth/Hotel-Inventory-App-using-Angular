import { CommonModule } from '@angular/common';
import { RoomList } from './../rooms';
import {
  Component,
  EventEmitter,
  Input,
  Output,
  ChangeDetectionStrategy,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-room-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './room-list.component.html',
  styleUrl: './room-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomListComponent implements OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if (changes['title']) {
      this.title = changes['title'].currentValue.toUpperCase();
    }
  }
  @Input() rooms: RoomList[] = [];

  @Input() title: string = '';

  @Output() selectedRoom = new EventEmitter<RoomList>();

  selectRoom(room: RoomList) {
    this.selectedRoom.emit(room);
  }
}

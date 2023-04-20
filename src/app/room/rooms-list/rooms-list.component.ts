import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { room } from '../room';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnInit,OnChanges, OnDestroy {

  @Input() rooms: room[] = [];

  @Input() btn: string = '';

  @Output() selectedRoom = new EventEmitter<room>();

  @Output() deletedRoom = new EventEmitter<room>();

  constructor() { }
  
  ngOnInit(): void { }
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes); 
  }

  selectRoom(rooms: room) {
    this.selectedRoom.emit(rooms);
  }

  deleteRoom(rooms: room) {
    this.deletedRoom.emit(rooms);
  }
  
  ngOnDestroy(): void {
      console.log("room list is destroyed")
  }
}

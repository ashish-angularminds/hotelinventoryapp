import { Component } from '@angular/core';
import { room } from '../room';
import { JsonPipe } from '@angular/common';
import { RoomsService } from '../services/rooms.service';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-rooms-add',
  templateUrl: './rooms-add.component.html',
  styleUrls: ['./rooms-add.component.scss']
})
export class RoomsAddComponent {

  room: room = {
    roomtype:'',
    amenities:'',
    price:0,
    photos:'',
    checkinTime: new Date(),
    checkoutTime: new Date(),
    rating:0
  }

  constructor(private roomservice:RoomsService){}

  message:string ='';
  addRoom(roomForm:NgForm) {
    // console.log(this.room)
    this.roomservice.addRoom(this.room).subscribe((data) => {
      this.message = "Room added successfully."
      roomForm.reset();
    });
  }
}

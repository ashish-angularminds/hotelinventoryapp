import { AfterViewInit, Component, DoCheck, OnInit, QueryList, Self, ViewChild, ViewChildren } from '@angular/core';
import { room } from './room';
import { JsonPipe } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { AppComponent } from '../app.component';
import { RoomsService } from './services/rooms.service';
import { HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss'],
  providers: [RoomsService],
})
export class RoomComponent implements OnInit, DoCheck, AfterViewInit {
  ngDoCheck(): void {
    console.log("Changes are made/ Event is called");
  }
 

  showtext = false;
  btn = "show";
  show() {
    this.showtext = this.showtext ? false : true;
    this.btn = this.btn === "hide" ? "show" : "hide";
  }
  pagename = "Room";

  roomList!: room[];
  
  constructor(private roomsservices: RoomsService){}

  totalbytes: number =0 ;
  ngOnInit(): void {
    this.roomsservices.getRooms().subscribe(rooms => {
      this.roomList = rooms;
    });
    
    this.roomsservices.loadPhotos().subscribe((event) => {
      switch (event.type) {
        case HttpEventType.Sent:{
          console.log('Request has been made');
          break;
        }
        case HttpEventType.ResponseHeader: {
          console.log('request success!');
          break;
        }
        case HttpEventType.DownloadProgress: {
          this.totalbytes += event.loaded;
          break;
        }
        case HttpEventType.Response: {
          console.log(event.body);
          break;
        }
        
      }
    });
    
  }
  
  room!: room;
  selectRoom(rooms:room) {
    this.room = rooms;
  }

  addroom() {
    const r: room = {
      // roomid: '4',
      roomtype: 'VIP',
      amenities: 'ok',
      photos: 'ok',
      rating: 4.4,
      price: 2500,
      checkinTime: new Date(12 / 4 / 2023),
      checkoutTime: new Date(13 / 4 / 2023),
    };
    // this.roomList = [...this.roomList, r];
    // // this.roomsservices.roomList = this.roomList;
    // // // console.log(this.roomList)
    // this.roomsservices.getRooms().subscribe(rooms => console.log(rooms));

    this.roomsservices.addRoom(r).subscribe((data) => {
      this.roomList= data;
    });
  }

  editRoom() {
    const r: room = {
      roomNumber: '3',
      roomtype: 'Honeymoon Suit',
      amenities: 'toys',
      photos: 'Sensitive Information',
      rating: 9.9,
      price: 4500,
      checkinTime: new Date(12 / 4 / 2023),
      checkoutTime: new Date(13 / 4 / 2023),
    };

    this.roomsservices.editRoom(r).subscribe((data) => {
      this.roomList = data;
    })
  }

  deleteRoom(room:room) {
    this.roomsservices.deleteRoom(room).subscribe((data) => {
      this.roomList = data;
    })
  }

  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;
  
  @ViewChildren(HeaderComponent) headerComponents!: QueryList<HeaderComponent>;

  
  ngAfterViewInit(): void {
    this.headerComponent.title = "title passed from room comp to header comp";

    this.headerComponents.last.title = "viewchildern";

  }



}

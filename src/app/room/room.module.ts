import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomRoutingModule } from './room-routing.module';
import { RoomsListComponent } from './rooms-list/rooms-list.component';
import { RoomComponent } from './room.component';
import { RoomsAddComponent } from './rooms-add/rooms-add.component';
import { RoomsBookingComponent } from './rooms-booking/rooms-booking.component';
import { FormsModule } from '@angular/forms';
import { HeaderModule } from '../header/header.module';


@NgModule({
  declarations: [
    RoomsBookingComponent,
    RoomsAddComponent,
    RoomComponent,
    RoomsListComponent,
  ],
  imports: [
    CommonModule,
    RoomRoutingModule,
    FormsModule,
    HeaderModule
  ]
})
export class RoomModule { }

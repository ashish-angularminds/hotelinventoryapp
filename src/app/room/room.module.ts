import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomRoutingModule } from './room-routing.module';
import { RoomsListComponent } from './rooms-list/rooms-list.component';
import { RoomComponent } from './room.component';
import { RoomsAddComponent } from './rooms-add/rooms-add.component';
import { RoomsBookingComponent } from './rooms-booking/rooms-booking.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderModule } from '../header/header.module';
import { FilterPipe } from './filter.pipe';


@NgModule({
  declarations: [
    RoomsBookingComponent,
    RoomsAddComponent,
    RoomComponent,
    RoomsListComponent,
    FilterPipe,
  ],
  imports: [
    CommonModule,
    RoomRoutingModule,
    FormsModule,
    HeaderModule,
    ReactiveFormsModule
  ]
})
export class RoomModule { }

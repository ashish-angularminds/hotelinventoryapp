import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomComponent } from './room/room.component';
import { EmployyeComponent } from './employye/employye.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RoomsBookingComponent } from './room/rooms-booking/rooms-booking.component';
import { RoomsAddComponent } from './room/rooms-add/rooms-add.component';

const routes: Routes = [
  { path: 'rooms', component: RoomComponent },
  { path: 'rooms/add', component: RoomsAddComponent},
  { path:'rooms/:id', component: RoomsBookingComponent},
  { path: 'employee', component: EmployyeComponent },
  { path: '', redirectTo: '/rooms', pathMatch: 'full' },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }

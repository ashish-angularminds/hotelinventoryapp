import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {
    path: 'rooms',
    loadChildren: () => import('./room/room.module').then((m) => m.RoomModule),
    canActivate: [LoginGuard],
    canLoad: [LoginGuard]
  },
  {
    path: 'employee',
    loadChildren: () => import('./employye/employe.module').then((m) => m.EmployeModule),
    canLoad: [LoginGuard],
    canActivate: [LoginGuard]
  },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'booking/:roomid',
    loadChildren: () => import('./booking/booking.module').then(m => m.BookingModule),
    // canLoad: [LoginGuard],
    // canActivate: [LoginGuard]
  },
  {
    path: '**',
    loadChildren: () => import('./notfound/notfound.module').then((m) => m.NotfoundModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }

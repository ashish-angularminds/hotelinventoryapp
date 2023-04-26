import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomComponent } from './room/room.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoomsListComponent } from './room/rooms-list/rooms-list.component';
import { HeaderComponent } from './header/header.component';
import { ComponentComponent } from './component/component.component';
import { EmployyeComponent } from './employye/employye.component';
import { APP_CONFIG, APP_SERVICE_CONFIG } from './AppConfig/appconfig.service';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestInterceptor } from './request.interceptor';
import { InitService } from './init.service';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NotfoundComponent } from './notfound/notfound.component';
import { RoomsBookingComponent } from './room/rooms-booking/rooms-booking.component';
import { RoomsAddComponent } from './room/rooms-add/rooms-add.component';
import { FormsModule } from '@angular/forms';

function initFactory(initservice:InitService) {
  return () => initservice.init(); 
}

@NgModule({
  declarations: [
    AppComponent,
    RoomComponent,
    RoomsListComponent,
    HeaderComponent,
    ComponentComponent,
    EmployyeComponent,
    NavComponent,
    NotfoundComponent,
    RoomsBookingComponent,
    RoomsAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule
  ],
  providers: [
    {
      provide: APP_SERVICE_CONFIG,
      useValue: APP_CONFIG
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi:true
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initFactory,
      deps:[InitService],
      multi:true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

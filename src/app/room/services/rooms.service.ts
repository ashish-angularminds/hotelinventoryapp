import { Inject, Injectable } from '@angular/core';
import { room } from '../room';
import {} from '../../../environments/environment'
import { environment } from 'src/environments/environment.development';
import { APP_CONFIG, APP_SERVICE_CONFIG } from 'src/app/AppConfig/appconfig.service';
import { AppConfig } from 'src/app/AppConfig/appconfig.interface';
import {HttpClient, HttpRequest} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  roomList: room[] = [];
  
  constructor(@Inject(APP_SERVICE_CONFIG) private config:AppConfig, private http: HttpClient){ 
    // console.log(environment.apiEndpoint);
    console.log(config.apiEndpoint);
    console.log("Room Service is initilazated")
  }

  getRooms() {
    return this.http.get<room[]>('api/rooms');
  }

  addRoom(room:room) {
    return this.http.post<room[]>('api/rooms',room);
  }

  editRoom(room: room) {
    return this.http.put<room[]>(`api/rooms/${room.roomNumber}`,room);
  }

  deleteRoom(room: room) {
    return this.http.delete<room[]>(`api/rooms/${room.roomNumber}`);
  }

  loadPhotos() {
    const request = new HttpRequest('GET', 'https://jsonplaceholder.typicode.com/photos', {
      reportProgress:true
    })
    return this.http.request(request);
  }
}

import { AfterViewInit, Component, Inject, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { RoomComponent } from './room/room.component';
import { localstoragetoken, sessionstoragetoken } from './localstorage.token';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'hotelinventoryapp';

  // @ViewChild('user', { read: ViewContainerRef }) vcr!: ViewContainerRef;

  // ngAfterViewInit(): void {
  //   const componentRef = this.vcr.createComponent(RoomComponent);
  //   componentRef.instance.pagename = "Hotel Rajmahel";
  // }
  
  constructor(@Inject(localstoragetoken) private localstorage:any, @Inject(sessionstoragetoken) private sessionstorage:any){}

  ngOnInit(): void {
    this.localstorage.setItem('name', 'Hilton hotel');
    // this.sessionstorage.setItem('name', 'ashish');
  }
}

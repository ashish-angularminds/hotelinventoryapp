import { AfterViewInit, Component, Inject, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { RoomComponent } from './room/room.component';
import { localstoragetoken, sessionstoragetoken } from './localstorage.token';
import { InitService } from './init.service';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';

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

  constructor(@Inject(localstoragetoken) private localstorage: any, @Inject(sessionstoragetoken) private sessionstorage: any,
    private initservices: InitService,
    private router: Router) {
    console.log(initservices.config);
  }


  test: string = "from app component";

  ngOnInit(): void {

    this.router.events.pipe(
      filter((event) => event instanceof NavigationStart)).subscribe(
        (event) => {
          console.log('Loding Started')
        }
      );
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)).subscribe(
        (event) => {
          console.log('Loding Ended')
        }
      );


    this.localstorage.setItem('name', 'Hilton hotel');
    // this.sessionstorage.setItem('name', 'ashish');
  }
}

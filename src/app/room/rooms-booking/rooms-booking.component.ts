import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-rooms-booking',
  templateUrl: './rooms-booking.component.html',
  styleUrls: ['./rooms-booking.component.scss']
})
export class RoomsBookingComponent implements OnInit{

   
  id$ = this.route.paramMap.pipe(map((param => param.get('id'))));
  constructor(private route: ActivatedRoute) { }
  ngOnInit(): void {
    // this.id$ = this.route.snapshot.params['id'];
  }
  

}

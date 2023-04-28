import { AfterContentInit, Component, ContentChild, Host } from '@angular/core';
// import { EmployyeComponent } from '../employye/employye.component';
import { RoomsService } from '../room/services/rooms.service';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.scss'],
  providers: [RoomsService],
})
export class ComponentComponent implements AfterContentInit {

  // constructor(@Host() private roomservice:RoomsService) { }

  test: string = "test from component";

  // @ContentChild(EmployyeComponent) emp!: EmployyeComponent;
  ngAfterContentInit(): void {
    // this.emp.empName = "Ram";

  }

  show() {
    // console.log(this.roomservice.getRooms())
  }
}

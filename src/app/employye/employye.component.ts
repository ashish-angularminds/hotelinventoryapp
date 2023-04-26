import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-employye',
  templateUrl: './employye.component.html',
  styleUrls: ['./employye.component.scss']
})
export class EmployyeComponent implements OnInit {
  empName = "John"

  @Input() test1?:string;

  ngOnInit(): void {
    console.log(this.test1);
  }
}

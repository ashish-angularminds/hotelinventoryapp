import { Component, Inject, OnInit } from '@angular/core';
import { CommentsService } from './comments.service';
import { ActivatedRoute } from '@angular/router';
import { map, pluck } from 'rxjs';
import { testservice } from '../testservice';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  constructor(private commentservice: CommentsService, private activtedroute: ActivatedRoute) { }

  comments$ = this.commentservice.getcomments();

  // comment$ = this.activtedroute.data.pipe(map((data) => data['commment']));
  comment$ = this.activtedroute.data.pipe(pluck('commment'));


  ngOnInit(): void {
    // this.commentservice.getcomments().subscribe((data) => console.log(data));
    const test = new testservice();
    console.log(test.add(2, 2));
    
  }

}

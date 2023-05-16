import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { com } from './com';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http: HttpClient) { }

  getcomments() {
    return this.http.get<com[]>('https://jsonplaceholder.typicode.com/comments');
  }
}

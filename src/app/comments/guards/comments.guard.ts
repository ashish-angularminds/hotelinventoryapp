import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Resolve, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { com } from '../com';
import { CommentsService } from '../comments.service';

@Injectable({
  providedIn: 'root'
})
export class CommentsGuard implements Resolve<com[]> {

  constructor(private commentservice: CommentsService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): com[] | Observable<com[]> | Promise<com[]> {
    return this.commentservice.getcomments();

  }
}

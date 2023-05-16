import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentsComponent } from './comments.component';
import { CommentsGuard } from './guards/comments.guard';

const routes: Routes = [{ path: '', component: CommentsComponent, resolve: { commment: CommentsGuard } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentsRoutingModule { }

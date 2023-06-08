import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsComponent } from '../components/albums/albums.component';
import { CommentsComponent } from '../components/comments/comments.component';
import { PhotosComponent } from '../components/photos/photos.component';

const routes: Routes = [
  { path: '', component: AlbumsComponent, pathMatch: 'full' },
  { path: 'comments', component: CommentsComponent },
  { path: 'photos', component: PhotosComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AlbumsModule { }

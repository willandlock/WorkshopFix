import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { VideoDashboardComponent } from './video-dashboard/video-dashboard.component';
import { StatFiltersComponent } from './stat-filters/stat-filters.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoPreviewComponent } from './video-preview/video-preview.component';
import { VideoLoaderService } from './video-loader.service';


const routes: Routes = [
  { path: '', component: VideoDashboardComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [StatFiltersComponent, VideoDashboardComponent, VideoListComponent, VideoPlayerComponent, VideoPreviewComponent],
  providers: [VideoLoaderService]
})
export class DashboardModule { }
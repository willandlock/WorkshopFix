import { Component, OnInit, Input } from '@angular/core';

import { Video } from '../video.type';

@Component({
  selector: 'app-video-preview',
  templateUrl: './video-preview.component.html',
  styleUrls: ['./video-preview.component.css']
})
export class VideoPreviewComponent implements OnInit {
  @Input() video: Video;

  constructor() { }

  ngOnInit() {
  }

}
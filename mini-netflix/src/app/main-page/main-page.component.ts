import { Component, OnInit } from '@angular/core'
import { Video } from '../services/videos/video'
import { VideosService } from './../services/videos/videos.service'

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  videos: Video[]
  constructor (private videosService: VideosService) {}

  ngOnInit (): void {
    this.videosService
      .getVideos()
      .subscribe((data: Video[]) => (this.videos = data))
  }
}

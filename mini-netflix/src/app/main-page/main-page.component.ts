import { ShowVideoComponent } from './../show-video/show-video.component';
import { Component, OnInit, ViewChild } from '@angular/core'
import { Video } from '../services/videos/video'
import { VideosService } from './../services/videos/videos.service'

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  videos: Video[]
  openShowVideo: boolean = true
  videoId: string
  categories = [
    {
      id: 1,
      title: 'Your list'
    }, 
    {
      id: 2,
      title: 'Originals'
    },
    {
      id: 3,
      title: 'Horror'
    },
    {
      id: 4,
      title: 'Documentary'
    },
    {
      id: 5,
      title: 'Popular'
    },
  ]
  constructor (private videosService: VideosService) {}

  ngOnInit (): void {
    this.videoId = 'M9vp9lhZiqU'
    this.videosService
      .getVideos()
      .subscribe((data: Video[]) => (this.videos = data))
  }

  toggleModal ():void {
    // this.videos.forEach(video => {
    //   this.videoId = video.id.videoId
    // })
    console.log(this.videoId)
    this.openShowVideo = !this.openShowVideo
  }
}

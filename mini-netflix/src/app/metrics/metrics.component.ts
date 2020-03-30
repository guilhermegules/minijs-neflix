import { VideosService } from './../services/videos/videos.service';
import { Component, OnInit } from '@angular/core'
import { Video } from '../services/videos/video';

@Component({
  selector: 'app-metrics',
  templateUrl: './metrics.component.html',
  styleUrls: ['./metrics.component.scss']
})
export class MetricsComponent implements OnInit {
  videos: Video[]
  categories = [
    {
      id: 1,
      title: 'Most popular'
    }, 
    {
      id: 2,
      title: 'Recent'
    },
    {
      id: 3,
      title: 'Originals'
    },
  ]
  constructor(private videosService: VideosService) { }

  ngOnInit(): void {
    this.videosService
      .getVideos()
      .subscribe((data: Video[]) => this.videos = data)
  }
}

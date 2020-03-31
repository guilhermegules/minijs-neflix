import { VideosService } from './../services/videos/videos.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Video } from '../services/videos/video';
import { ShowVideoComponent } from '../show-video/show-video.component';

@Component({
  selector: 'app-metrics',
  templateUrl: './metrics.component.html',
  styleUrls: ['./metrics.component.scss']
})
export class MetricsComponent implements OnInit {
  @ViewChild(ShowVideoComponent)
  showVideoModal: ShowVideoComponent;
  videos: Video[];
  videoId: string;
  categories = [
    {
      id: 1,
      title: 'Mais populares'
    },
    {
      id: 2,
      title: 'Recentes'
    },
    {
      id: 3,
      title: 'Originals'
    },
  ];
  constructor(private videosService: VideosService) { }

  ngOnInit(): void {
    this.videosService
      .getVideos()
      .subscribe((data: Video[]) => this.videos = data);
  }

  toggleModal(id: string): void {
    this.videoId = id;
    this.showVideoModal.toggleModal();
  }
}

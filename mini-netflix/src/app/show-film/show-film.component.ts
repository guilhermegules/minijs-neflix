import { VideosService } from './../services/videos/videos.service';
import { Component, OnInit } from '@angular/core';
import { Video } from '../services/videos/video';

@Component({
  selector: 'app-show-film',
  templateUrl: './show-film.component.html',
  styleUrls: ['./show-film.component.scss']
})
export class ShowFilmComponent implements OnInit {
  videos: Video[];
  constructor(private videosService: VideosService) { }

  ngOnInit(): void {
    this.videosService
    .getVideos()
    .subscribe((data: Video[]) => this.videos = data)
  }

}

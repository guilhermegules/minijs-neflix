import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-show-video',
  templateUrl: './show-video.component.html',
  styleUrls: ['./show-video.component.scss']
})
export class ShowVideoComponent implements OnInit {
  @Input() modalState: boolean
  @Input() videoId: string
  closeModal: boolean;
  url = `https://www.youtube.com/embed/`
  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.sanitizer.bypassSecurityTrustResourceUrl(this.url)
    this.closeModal = false;
  } 

  close(): void {
    this.closeModal = true
  }
}

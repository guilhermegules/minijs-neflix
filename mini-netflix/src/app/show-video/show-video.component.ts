import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-show-video',
  templateUrl: './show-video.component.html',
  styleUrls: ['./show-video.component.scss']
})
export class ShowVideoComponent implements OnInit {
  @Input() videoId: string;
  closeModal: boolean;
  url = `https://www.youtube.com/embed/`;
  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
  }

  toggleModal(): void {
    this.closeModal = !this.closeModal;
  }

  sendUrl(videoId: string) {
    const tempUrl = this.url + videoId;
    return this.sanitizer.bypassSecurityTrustResourceUrl(tempUrl);
  }
}

import { TestBed } from '@angular/core/testing';

import { VideosService } from './videos.service';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

describe('VideosService', () => {
  let service: VideosService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [VideosService]
    });
    service = TestBed.inject(VideosService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should getVideos() have data', () => {
    service.getVideos().subscribe(res => {
      expect(res.length).toEqual(15);
    });
  });
});

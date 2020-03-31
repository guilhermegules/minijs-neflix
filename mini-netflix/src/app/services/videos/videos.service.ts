import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { Video } from './video';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VideosService {
  constructor(private http: HttpClient) {}

  getVideos(): Observable<Video[]> {
    return this.http.get<Video[]>('http://localhost:3333/videos').
      pipe(
        map((data: Video[]) => {
          return data;
        }), catchError(() => {
          return throwError('Something when wrong!');
        })
      );
  }
}

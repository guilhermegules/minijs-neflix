import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Injectable } from '@angular/core'
import { Video } from './video'

@Injectable({
  providedIn: 'root'
})
export class VideosService {
  constructor (private http: HttpClient) {}

  getVideos (): Observable<Video[]> {
    return this.http.get<Video[]>('http://localhost:3333/')
  }
}

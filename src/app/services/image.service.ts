import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';

export interface Image {
  id: number,
  fileName: string,
  originFileName: string
}

@Injectable({
  providedIn: 'root'
})
export class ImageService extends BaseService<Image> {
  constructor(http: HttpClient) {
    super('/api/image', http);
  }

  saveFile(image: File): Observable<Image> {
    const fd = new FormData();
    fd.append('image', image, image.name);

    return this.http.post<Image>(this.url, fd);
  }
}

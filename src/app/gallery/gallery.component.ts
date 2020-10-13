import { Component, Input } from '@angular/core';
import { kMaxLength } from 'buffer';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent {
  @Input() title: string = '';
  @Input() photos: string[] = [];

  currentImg: number = 0;

  next() {
    this.currentImg++;
  }
  previous() {
    this.currentImg--;
  }
  firstImg() {
    this.currentImg = 0;
  }

  finalImg() {
    this.currentImg = this.photos.length - 1;
  }
}

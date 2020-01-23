import { Component, Input } from '@angular/core';

@Component({
  selector: 'dec-markdown',
  templateUrl: './markdown.component.html',
  styleUrls: ['./markdown.component.scss'],
})
export class CustomJsMarkdownComponent {
  path: string;

  @Input()
  set src(v: string) {
    if (this.innerSrc !== v) {
      this.innerSrc = v;
      this.mountPath();
    }
  }

  get src() {
    return this.innerSrc;
  }

  private innerSrc: string;

  constructor() {}

  private mountPath() {
    const startWithSlash = this.src && this.src[0] === '/';
    this.path = this.src;
    if (this.src) {
      const startWithHttp = this.src && this.src.substring(0, 4) === 'http';
      if (!startWithHttp) {
        if (startWithSlash) {
          this.path = this.src;
        } else {
          this.path = `/${this.src}`;
        }
      }
    }
  }
}

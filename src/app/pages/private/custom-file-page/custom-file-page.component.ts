import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CustomjsFileService } from 'projects/customjs/file/src/public-api';

const JS_FILE_URL = 'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js';
const JS_FILE_POINTER = 'moment';
const CSS_FILE_URL =
  'https://cdnjs.cloudflare.com/ajax/libs/angular-material/1.2.1/angular-material.min.css';

@Component({
  selector: 'app-custom-file-page',
  templateUrl: './custom-file-page.component.html',
  styleUrls: ['./custom-file-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomFilePageComponent implements OnInit {
  constructor(private fileService: CustomjsFileService) {}

  ngOnInit() {}

  loadJsFile() {
    this.fileService.loadJs(JS_FILE_URL, JS_FILE_POINTER).then(res => {
      console.log('JS loaded', window[JS_FILE_POINTER]);
    });
  }

  loadCssFile() {
    this.fileService.loadStyle(CSS_FILE_URL).then(res => {
      console.log('CSS loaded', res);
    });
  }

  loadJsAndCss() {
    this.fileService.loadStyleAndScript(CSS_FILE_URL, JS_FILE_URL, JS_FILE_POINTER).then(res => {
      console.log('JS and CSS loaded', res);
    });
  }
}

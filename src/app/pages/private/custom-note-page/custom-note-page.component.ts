import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-custom-note-page',
  templateUrl: './custom-note-page.component.html',
  styleUrls: ['./custom-note-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomNotePageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'custom-note',
  templateUrl: './custom-note.component.html',
  styleUrls: ['./custom-note.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomjsNoteComponent {
  @Input() color: ThemePalette;

  constructor() {}
}

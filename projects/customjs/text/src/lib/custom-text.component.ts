import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'custom-text',
  templateUrl: './custom-text.component.html',
  styleUrls: ['./custom-text.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomTextComponent implements AfterViewInit {
  contentText$ = new EventEmitter<string>();

  @Input() maxLength: number;

  @Input() title: string;

  @ViewChild('customText', { static: true }) customText: ElementRef;

  constructor() {}

  ngAfterViewInit() {
    const customText = this.customText.nativeElement.textContent;
    setTimeout(() => {
      // schedule for next digest
      this.contentText$.next(customText);
    }, 0);
  }
}

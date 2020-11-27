import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CustomBreadcrumbSection } from 'projects/customjs/breadcrumb/src/public-api';

@Component({
  selector: 'app-custom-breadcrumb-page',
  templateUrl: './custom-breadcrumb-page.component.html',
  styleUrls: ['./custom-breadcrumb-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomBreadcrumbPageComponent implements OnInit {
  sections: CustomBreadcrumbSection[] = [
    { label: 'foo', path: '/' },
    { label: 'bar', path: '/' },
  ];

  constructor() {}

  ngOnInit() {}
}

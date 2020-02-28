import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

/**
 * Custom Breadcrumb Section item
 * @param label The section label presented to the reader
 * @param path The anchor path
 */
export interface CustomBreadcrumbSection {
  label: string;
  path: string;
}

@Component({
  selector: 'custom-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbComponent {
  @Input() color: ThemePalette = 'warn';

  @Input() title: string;

  @Input() sections: CustomBreadcrumbSection[] = [];

  constructor() {}
}

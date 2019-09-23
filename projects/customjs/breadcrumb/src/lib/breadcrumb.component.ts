import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ThemePalette } from '@angular/material';

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
  template: `
    <p>
      breadcrumb works!
    </p>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbComponent {
  @Input() color: ThemePalette = 'warn';

  @Input() title: string;

  @Input() sections: CustomBreadcrumbSection[] = [];

  constructor() {}
}

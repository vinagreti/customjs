import { ChangeDetectionStrategy, Component } from '@angular/core';
import { VersionService } from 'projects/customjs/version/src/public-api';

@Component({
  selector: 'app-custom-version-page',
  templateUrl: './custom-version-page.component.html',
  styleUrls: ['./custom-version-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomVersionPageComponent {
  constructor(public versionService: VersionService) {}
}

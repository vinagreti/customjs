import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GenericHttp } from 'projects/customjs/generic-http/src/public-api';
import { ReplaySubject } from 'rxjs';

const TESTING_URL = 'https://httpbin.org/get';

@Component({
  selector: 'app-custom-generic-http-page',
  templateUrl: './custom-generic-http-page.component.html',
  styleUrls: ['./custom-generic-http-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomGenericHttpPageComponent {
  resourceUrl: string;

  result$ = new ReplaySubject();

  constructor(private http: GenericHttp) {}

  call(resourceUrl: string) {
    this.http.get(resourceUrl).subscribe(res => this.result$.next(res));
  }
}

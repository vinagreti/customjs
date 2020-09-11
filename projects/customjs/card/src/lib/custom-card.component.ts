import { ChangeDetectionStrategy, Component, ContentChild, Input } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { CustomActionsComponent, CustomTitleComponent } from '@customjs/smart-layout';
import { BehaviorSubject } from 'rxjs';
import { CustomCardBadgeComponent } from './custom-card-badge/custom-card-badge.component';
import { CustomCardSelection, ICustomCardSelection } from './custom-card-selection.model';

@Component({
  selector: 'custom-card, [custom-card]',
  templateUrl: './custom-card.component.html',
  styleUrls: ['./custom-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomCardComponent {
  actions$ = new BehaviorSubject<CustomActionsComponent>(undefined);

  @Input() hiddenBorder = false;

  @Input() active: boolean;

  @Input() color: ThemePalette = 'primary';

  @Input() selection: ICustomCardSelection = new CustomCardSelection();

  @Input()
  set selectionItem(v: any) {
    this.innerSelectionItem = v;
    this.setActionsData();
  }
  get selectionItem() {
    return this.innerSelectionItem;
  }

  @Input() selectable: boolean;

  @Input() selectionDisabled: boolean;

  @ContentChild(CustomCardBadgeComponent) badge: CustomCardBadgeComponent;

  @ContentChild(CustomTitleComponent) title: CustomTitleComponent;

  @ContentChild(CustomActionsComponent)
  set actions(v: CustomActionsComponent) {
    this.actions$.next(v);
    this.setActionsData();
  }

  private innerSelectionItem: any;

  private setActionsData() {
    const actions = this.actions$.getValue();
    if (actions) {
      actions.data = this.selectionItem;
    }
  }
}

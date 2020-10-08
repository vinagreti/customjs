import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CustomListChangeEvent } from 'projects/customjs/list/src/lib/custom-list.models';
import { BehaviorSubject, of } from 'rxjs';
import { delay } from 'rxjs/operators';

function randomId() {
  return Math.random()
    .toString(36)
    .slice(2);
}

const ITEMS_MOCK = [
  {
    id: randomId(),
    name: 'Bruno',
  },
  {
    id: randomId(),
    name: 'Bernardo',
  },
  {
    id: randomId(),
    name: 'Denise',
  },
  {
    id: randomId(),
    name: 'Theo',
  },
  {
    id: randomId(),
    name: 'Isa',
  },
];

function filterSortAndPaginateLikeDjango(items: any, options: CustomListChangeEvent) {
  const initialItemIndex = (options.page - 1) * options.limit;
  const finalItemIndex = initialItemIndex + options.limit;
  const visibleItems = items.slice(initialItemIndex, finalItemIndex);
  return {
    results: visibleItems,
    count: ITEMS_MOCK.length,
  };
}

@Component({
  selector: 'app-custom-list-page',
  templateUrl: './custom-list-page.component.html',
  styleUrls: ['./custom-list-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomListPageComponent {
  stream$ = new BehaviorSubject<typeof ITEMS_MOCK>(ITEMS_MOCK);

  constructor() {}

  fetchItems(options: CustomListChangeEvent) {
    const response = filterSortAndPaginateLikeDjango(ITEMS_MOCK, options);
    const result = of(response).pipe(delay(1e3));
    return result;
  }

  onOptionSelected(selectedItems: any[]) {
    console.log('onOptionSelected', selectedItems);
  }

  onChangeItemsClicked() {
    this.stream$.next([...ITEMS_MOCK]);
  }
}

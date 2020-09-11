import { BehaviorSubject, Observable } from 'rxjs';

export interface ICustomTableSelection<T = any> {
  items$: Observable<T[]>;
  itemsSnapshot: T[];
  select: (item: T) => void;
  selectAll: (item: T[]) => void;
  unselect: (item: T) => void;
  unselectAll: () => void;
  toggle: (item: T) => void;
  areAllSelected: (item: T[]) => boolean;
}

export class CustomTableSelection<T = any> implements ICustomTableSelection {
  items$ = new BehaviorSubject<T[]>([]);

  get itemsSnapshot() {
    return this.items$.getValue();
  }

  select(item: T) {
    if (!this.isSelected(item)) {
      this.items$.next([...this.itemsSnapshot, item]);
    }
  }

  selectAll(items: T[]) {
    this.items$.next(items);
  }

  unselect(item: T) {
    if (this.isSelected(item)) {
      const itemsWithoutItem = this.itemsSnapshot.filter(itemSnapshot => itemSnapshot !== item);
      this.items$.next(itemsWithoutItem);
    }
  }

  unselectAll() {
    this.items$.next([]);
  }

  toggle(item: T) {
    if (this.isSelected(item)) {
      this.unselect(item);
    } else {
      this.select(item);
    }
  }

  isSelected(item: T) {
    return this.itemsSnapshot.includes(item);
  }

  areAllSelected(items: T[] = []) {
    const itemsSnapshot = this.itemsSnapshot;
    if (items.length) {
      return items.reduce((sum, item) => {
        return itemsSnapshot.includes(item) && sum;
      }, true);
    } else {
      return false;
    }
  }
}

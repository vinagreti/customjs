import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasksPageComponent } from './masks-page.component';

describe('MasksPageComponent', () => {
  let component: MasksPageComponent;
  let fixture: ComponentFixture<MasksPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MasksPageComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

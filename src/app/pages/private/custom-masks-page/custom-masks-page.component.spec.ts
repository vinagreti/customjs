import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomMasksPageComponent } from './custom-masks-page.component';

describe('CustomMasksPageComponent', () => {
  let component: CustomMasksPageComponent;
  let fixture: ComponentFixture<CustomMasksPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomMasksPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomMasksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomFilePageComponent } from './custom-file-page.component';

describe('CustomFilePageComponent', () => {
  let component: CustomFilePageComponent;
  let fixture: ComponentFixture<CustomFilePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomFilePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomFilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomNotePageComponent } from './custom-note-page.component';

describe('CustomNotePageComponent', () => {
  let component: CustomNotePageComponent;
  let fixture: ComponentFixture<CustomNotePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomNotePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomNotePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

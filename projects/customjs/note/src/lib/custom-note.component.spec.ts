import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomjsNoteComponent } from './custom-note.component';

describe('CustomjsNoteComponent', () => {
  let component: CustomjsNoteComponent;
  let fixture: ComponentFixture<CustomjsNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CustomjsNoteComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomjsNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

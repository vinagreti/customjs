import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MarkdownComponent } from './markdown.component';
import { CustomJsMarkdownModule } from './markdown.module';

describe('MarkdownComponent', () => {
  let component: MarkdownComponent;
  let fixture: ComponentFixture<MarkdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CustomJsMarkdownModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

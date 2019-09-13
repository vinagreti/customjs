import { TestBed } from '@angular/core/testing';
import { AskTestingModule } from './ask-testing.module';
import { AskService, DIALOG_CLASS_PREFIX } from './ask.service';

describe('AskService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [AskTestingModule],
    })
  );

  it('should be created', () => {
    const service: AskService = TestBed.get(AskService);
    expect(service).toBeTruthy();
  });

  it('should emit confirmation', () => {
    // given component
    const service: any = TestBed.get(AskService);
    const dialogRef = { componentInstance: {}, afterClosed: () => {} };
    const spy = spyOn(service.dialog, 'open').and.returnValue(dialogRef);
    // when
    service.ask({});
    // then
    expect(spy).toHaveBeenCalled();
  });

  it('should set error type class', () => {
    // given component
    const service: any = TestBed.get(AskService);
    const type = 'error';
    // when
    const dialogClass = service.getDialogClassBasedOnType(type);
    // then
    expect(dialogClass).toEqual(`${DIALOG_CLASS_PREFIX}-${type}`);
  });

  it('should set no type class', () => {
    // given component
    const service: any = TestBed.get(AskService);
    const type = '';
    // when
    const dialogClass = service.getDialogClassBasedOnType(type);
    // then
    expect(dialogClass).toEqual(`${DIALOG_CLASS_PREFIX}`);
  });
});

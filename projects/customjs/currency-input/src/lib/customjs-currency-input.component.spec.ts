import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { LOCALE_ID } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomjsCurrencyInputComponent } from './customjs-currency-input.component';
import { CustomjsCurrencyInputTestingModule } from './testing';

registerLocaleData(localePt);

describe('CustomjsCurrencyInputComponent', () => {
  let component: any;
  let fixture: ComponentFixture<CustomjsCurrencyInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CustomjsCurrencyInputTestingModule],
      providers: [{ provide: LOCALE_ID, useValue: 'pt-BR' }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomjsCurrencyInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get value', () => {
    // given
    const value = 10;
    // when
    component.value = value;
    // then
    expect(component.value).toEqual(value);
  });

  it('should set value to 0 if writeValue parameter is unfdefined', () => {
    // given
    // when
    component.writeValue();
    // then
    expect(component.value).toEqual(0);
  });

  it('should setDisabledState to true', () => {
    // given
    // when
    component.setDisabledState(true);
    // then
    expect(component.disabled).toBeTruthy();
  });

  it('should setDisabledState to false', () => {
    // given
    // when
    component.setDisabledState(false);
    // then
    expect(component.disabled).toBeFalsy();
  });

  it('should register onTouchedCallback', () => {
    // given
    const onTouchedCallbackMock = () => {};
    // when
    component.registerOnTouched(onTouchedCallbackMock);
    // then
    expect(component.onTouchedCallback).toEqual(onTouchedCallbackMock);
  });

  it('should return undefined by default onTouchedCallback function', () => {
    // given
    // when
    const result = component.onTouchedCallback();
    // then
    expect(result).toBeUndefined();
  });

  it(`should get 1,00 as masked value of '1'`, () => {
    // given
    const value = 1;
    const expected = '1,00';
    // when
    component.value = value;
    const maskedValue = component.maskedValue;
    // then
    expect(maskedValue).toEqual(expected);
  });

  it('should get 0,00 as masked value of undefined', () => {
    // given
    const value = undefined;
    const expected = '0,00';
    // when
    component.value = value;
    const maskedValue = component.maskedValue;
    // then
    expect(maskedValue).toEqual(expected);
  });

  it('should get 0,00 as masked value of 0', () => {
    // given
    const value = 0;
    const expected = '0,00';
    // when
    component.value = value;
    const maskedValue = component.maskedValue;
    // then
    expect(maskedValue).toEqual(expected);
  });

  it('should get 1.345,10 as masked value of 1345.1', () => {
    // given
    const value = 1345.1;
    const expected = '1.345,10';
    // when
    component.value = value;
    const maskedValue = component.maskedValue;
    // then
    expect(maskedValue).toEqual(expected);
  });

  it(`should return 0 from floatStringFromInputValue if inputValue is ''`, () => {
    // given
    const value = '';
    const expected = '0';
    // when
    component.inputValue = value;
    const floatString = component.floatStringFromInputValue();
    // then
    expect(floatString).toEqual(expected);
  });

  it(`should return 0.01 from floatStringFromInputValue if inputValue is '1'`, () => {
    // given
    const value = '1';
    const expected = '0.01';
    // when
    component.inputValue = value;
    const floatString = component.floatStringFromInputValue();
    // then
    expect(floatString).toEqual(expected);
  });
});

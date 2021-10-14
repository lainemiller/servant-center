import { TestBed } from '@angular/core/testing';
import { ElementRef } from '@angular/core';

import { NoSpecialSymbolsDirective } from './no-special-symbols.directive';

class MockElementRef implements ElementRef {
  nativeElement = {
    value: '10.99@'
  };
}

describe('NoSpecialSymbolsDirective', () => {
  // tslint:disable-next-line: prefer-const
  let directive: NoSpecialSymbolsDirective;
  const ele = window.document.createElement('input');
  ele.id = 'input-elemnt';
  window.document.body.appendChild(ele);
  let el: jasmine.SpyObj<ElementRef>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: ElementRef, useClass: MockElementRef }]
    }).compileComponents();
  });

  beforeEach(() => {
    el = TestBed.inject(ElementRef);
    // directive.targetElmt = el.nativeElement;
  });

  it('should create an instance', () => {
    directive = new NoSpecialSymbolsDirective(el);
    const element = document.getElementById('input-elemnt');
    element.setAttribute('customAttr', 'email');
    element.setAttribute('value', 'someValue');
    directive.targetElmt = element;
    expect(directive).toBeTruthy();
  });

  it('trigger key event', () => {
    directive = new NoSpecialSymbolsDirective(el);
    const element = document.getElementById('input-elemnt');
    element.setAttribute('customAttr', 'email');
    element.setAttribute('value', 'someValue');
    window.document.body.appendChild(element);
    directive.targetElmt = element;
    let e = new KeyboardEvent('keypress', { code: 'KeyA', bubbles: true, cancelable: true });
    directive.onKeyDown(e);
    e = new KeyboardEvent('drop', { code: 'KeyA', bubbles: true, cancelable: true });
    directive.onDrop(e);
    expect(directive).toBeTruthy();
  });

  it('trigger key event ##', () => {
    directive = new NoSpecialSymbolsDirective(el);
    const element = document.getElementById('input-elemnt');
    element.setAttribute('customAttr', 'email');
    element.setAttribute('value', null);
    directive.targetElmt = element;
    const e = new KeyboardEvent('keypress', { code: 'space', bubbles: true, cancelable: true });
    directive.onKeyDown(e);
    expect(directive).toBeTruthy();
  });

  it('trigger key event data-customAttr', () => {
    directive = new NoSpecialSymbolsDirective(el);
    const element = document.getElementById('input-elemnt');
    element.setAttribute('value', 'someValue');
    element.setAttribute('customAttr', '');
    element.setAttribute('data-customAttr', 'email');
    directive.targetElmt = element;
    const e = new KeyboardEvent('keypress', { code: 'KeyA', bubbles: true, cancelable: true });
    directive.onKeyDown(e);
    expect(directive).toBeTruthy();
  });

  it('trigger key event space and empty value', () => {
    directive = new NoSpecialSymbolsDirective(el);
    const element = document.getElementById('input-elemnt');
    element.setAttribute('customAttr', 'email');
    element.setAttribute('value', '');
    directive.targetElmt = element;
    const mockEvent: any = {
      shiftKey: false,
      keyCode: 32,
      code: 'quote',
      preventDefault: () => {
      }
    };
    directive.onKeyDown(mockEvent);
    expect(directive).toBeTruthy();
  });

  it('trigger key event Backspace', () => {
    directive = new NoSpecialSymbolsDirective(el);
    const element = document.getElementById('input-elemnt');
    element.setAttribute('customAttr', 'email');
    element.setAttribute('value', 'someValue');
    directive.targetElmt = element;
    const e = new KeyboardEvent('keydown', { code: 'Backspace', bubbles: true, cancelable: true });
    directive.onKeyDown(e);
    expect(directive).toBeTruthy();
  });

  it('trigger key event with the char \'#\'', () => {
    const element1 = document.getElementById('input-elemnt');
    directive = new NoSpecialSymbolsDirective(el);
    element1.setAttribute('customAttr', 'textWithPeriod');
    element1.setAttribute('value', 'someValue');
    directive.targetElmt = element1;
    const e = new KeyboardEvent('keydown', { code: 'Digit3', bubbles: true, cancelable: true });
    directive.onKeyDown(e);
    expect(directive).toBeTruthy();
  });

  it('covering all the customAttr', () => {
    directive = new NoSpecialSymbolsDirective(el);
    const element = document.getElementById('input-elemnt');
    element.setAttribute('customAttr', 'numbersOnly');
    element.setAttribute('value', 'someValue');
    directive.targetElmt = element;
    const e = new KeyboardEvent('keydown', { code: 'Digit3', bubbles: true, cancelable: true });
    directive.onKeyDown(e);
    element.setAttribute('customAttr', 'email');
    directive.targetElmt = element;
    directive.onKeyDown(e);
    element.setAttribute('customAttr', 'textOnly');
    directive.targetElmt = element;
    directive.onKeyDown(e);
    element.setAttribute('customAttr', 'alphaNumeric');
    directive.targetElmt = element;
    directive.onKeyDown(e);
    element.setAttribute('customAttr', 'numbersWithHyphen');
    directive.targetElmt = element;
    directive.onKeyDown(e);
    element.setAttribute('customAttr', 'numbersWithPercent');
    directive.targetElmt = element;
    directive.onKeyDown(e);
    element.setAttribute('customAttr', 'numbersWithPeriod');
    directive.targetElmt = element;
    directive.onKeyDown(e);
    element.setAttribute('customAttr', 'text');
    directive.targetElmt = element;
    directive.onKeyDown(e);

    element.setAttribute('customAttr', 'textAreaAllowedChars');
    directive.targetElmt = element;
    directive.onKeyDown(e);
    element.setAttribute('customAttr', 'numberWithPeriodAndNegative');
    directive.targetElmt = element;
    directive.onKeyDown(e);
    element.setAttribute('customAttr', 'alphaNumericWithDash');
    directive.targetElmt = element;
    directive.onKeyDown(e);
    element.setAttribute('customAttr', 'alphaNumericWithAsterisk');
    directive.targetElmt = element;
    directive.onKeyDown(e);
    expect(directive).toBeTruthy();
  });

  it('should create an instance', () => {
    const e = new KeyboardEvent('keydown', { code: 'Digit3', bubbles: true, cancelable: true });
    directive = new NoSpecialSymbolsDirective(el);
    const element = document.getElementById('input-elemnt');
    element.setAttribute('customAttr', 'email');
    element.setAttribute('value', 'someValue');
    directive.targetElmt = element;
    directive.onFocusOut(e);
    expect(directive).toBeTruthy();
  });

  it('triggering onKeyup and setting navigator to Android - numbersOnly', () => {
    directive = new NoSpecialSymbolsDirective(el);
    const element = document.getElementById('input-elemnt');
    element.setAttribute('customAttr', 'numbersOnly');
    spyOnProperty(navigator, 'userAgent').and.returnValue('Android');
    directive.targetElmt = element;
    directive.onKeyUp(element);
    expect(directive).toBeTruthy();
  });

  it('triggering onKeyup and setting navigator to Android - numbersWithPeriod', () => {
    directive = new NoSpecialSymbolsDirective(el);
    const element = document.getElementById('input-elemnt');
    element.setAttribute('customAttr', 'numbersWithPeriod');
    spyOnProperty(navigator, 'userAgent').and.returnValue('Android');
    directive.targetElmt = element;
    directive.onKeyUp(element);
    expect(directive).toBeTruthy();
  });

  it('triggering onKeyup and setting navigator to Android - numbersWithHyphen', () => {
    directive = new NoSpecialSymbolsDirective(el);
    const element = document.getElementById('input-elemnt');
    element.setAttribute('customAttr', 'numbersWithHyphen');
    spyOnProperty(navigator, 'userAgent').and.returnValue('Android');
    directive.targetElmt = element;
    directive.onKeyUp(element);
    expect(directive).toBeTruthy();
  });

  it('triggering onKeyup and setting navigator to Android - numbersWithPercent', () => {
    directive = new NoSpecialSymbolsDirective(el);
    const element = document.getElementById('input-elemnt');
    element.setAttribute('customAttr', 'numbersWithPercent');
    spyOnProperty(navigator, 'userAgent').and.returnValue('Android');
    directive.targetElmt = element;
    directive.onKeyUp(element);
    expect(directive).toBeTruthy();
  });

});

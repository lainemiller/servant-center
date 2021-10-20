import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNoSpecialSymbols]'
})

export class NoSpecialSymbolsDirective {

  private regex: RegExp = new RegExp(/^[a-zA-Z0-9",-.' @_]*$/);
  private email: RegExp = new RegExp(/^[a-zA-Z0-9-.@_‘’]*$/);
  private text: RegExp = new RegExp('^[A-Za-z0-9,\\-._ \'‘’]+$');
  private alphaNumeric: RegExp = new RegExp('^[A-Za-z0-9]+$');
  private numbers: RegExp = new RegExp(/^[0-9]*$/);
  private numbersWithHyphen: RegExp = new RegExp(/^[0-9-]*$/);
  private numbersWithPeriodPercent: RegExp = new RegExp(/^[0-9.%]*$/);
  private numbersWithPeriod: RegExp = new RegExp(/^[0-9.]*$/);
  private textOnlyRegex: RegExp = new RegExp(/^[a-zA-Z]*$/);
  private textPeriodRegex: RegExp = new RegExp(/^[a-zA-Z.]*$/);
  private textAreaAllowedChars: RegExp = new RegExp(/^[a-zA-Z0-9,-.' @$?%()_‘’]*$/);
  private startWithAlpha:RegExp= new RegExp(/^[a-zA-Z]+(.)*/);
  // tslint:disable-next-line:max-line-length
  private specialKeys: Array<string> = [ 'Backspace', 'Deconste', 'Tab', 'End', 'Home', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'Enter', 'Delete', 'Del', 'Left', 'Right'];
  private numberWithPeriodAndNegative: RegExp = new RegExp(/^[0-9.-]*$/);
  private alphaNumericWithDash: RegExp = new RegExp('^[A-Za-z0-9-]+$');
  private alphaNumericWithAsterisk: RegExp = new RegExp('^[A-Za-z0-9*]+$');
  private sharePercentage: RegExp = new RegExp(/^(([0-9]{1,3})|([0-9]{1,2}\.[0-9]{0,3})|([0-9][.][0-9]{0,3}))$/);

  constructor(private el: ElementRef) {
  }
  targetElmt = this.el.nativeElement;

  @HostListener('keydown', [ '$event' ])
  onKeyDown(event: KeyboardEvent): void {
      console.log(event);
      // prevent 1st space char
      if ((event.code && event.code.toLowerCase() === 'space') && this.targetElmt.value.length <= 0) {
        event.preventDefault();
      }
      if (event.code && event.code.toLowerCase() === 'quote') {
        if (navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 ) {
          return;
        }
      }
      // if (event.keyCode === 49 && this.targetElmt.value.length <= 0) {
        // if (navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 ) {
        //   event.preventDefault();
        // }
      // }
      // Allow Backspace, tab, end, enter, delete and home keys
      if (this.specialKeys.indexOf(event.key) !== -1) {
          return;
      }
      const attrTxt = this.targetElmt.getAttribute('customAttr') || this.targetElmt.getAttribute('data-customAttr');
      const current: string = this.targetElmt.value.replace(/\n/g, '');  // remove new line character
      const next: string = current.concat(event.key);
      console.log(attrTxt);
      
      if (next && attrTxt === 'startWithAlpha' && !String(next).match(this.startWithAlpha)) {
        event.preventDefault();
    }
      if (next && attrTxt === 'alphaNumeric' && !String(next).match(this.alphaNumeric)) {
          event.preventDefault();
      }
      if (next && attrTxt === 'textOnly' && !String(next).match(this.textOnlyRegex)) {
        event.preventDefault();
      }
      if (next && attrTxt === 'textWithPeriod' && !String(next).match(this.textPeriodRegex)) {
        event.preventDefault();
      }
      if (next && attrTxt === 'numbersOnly' && !String(next).match(this.numbers)) {
        event.preventDefault();
      }
      if (next && attrTxt === 'numbersWithHyphen' && !String(next).match(this.numbersWithHyphen)) {
        event.preventDefault();
      }
      if (next && attrTxt === 'numbersWithPeriodPercent' && !String(next).match(this.numbersWithPeriodPercent)) {
        event.preventDefault();
      }
      if (next && attrTxt === 'numbersWithPeriod' && !String(next).match(this.numbersWithPeriod)) {
        event.preventDefault();
      }
      if (next && attrTxt === 'text' && !String(next).match(this.text)) {
        event.preventDefault();
      }
      if (next && attrTxt === 'email' && !String(next).match(this.email)) {
        event.preventDefault();
      }
      if (next && attrTxt === 'textAreaAllowedChars' && !String(next).match(this.textAreaAllowedChars)) {
        event.preventDefault();
      }
      if (next && attrTxt === 'numberWithPeriodAndNegative' && !String(next).match(this.numberWithPeriodAndNegative)) {
        event.preventDefault();
      }
      if (next && attrTxt === 'alphaNumericWithDash' && !String(next).match(this.alphaNumericWithDash)) {
        event.preventDefault();
      }
      if (next && attrTxt === 'alphaNumericWithAsterisk' && !String(next).match(this.alphaNumericWithAsterisk)) {
        event.preventDefault();
      }
      if (next && attrTxt === 'sharePercentage' && !String(next).match(this.sharePercentage)) {
        event.preventDefault();
      }
    }

  @HostListener('keyup', ['$event']) onKeyUp(event: HTMLElement | null): void {
    const ua = navigator.userAgent.toLowerCase();
    const isAndroid = ua.indexOf('android') > -1;
    if (isAndroid) {
      const fieldValue = this.el.nativeElement.value;
      const attrTxt = this.targetElmt.getAttribute('customAttr');

      if (fieldValue && fieldValue.length > 0 && fieldValue.match(/[^0-9]/) && attrTxt === 'numbersOnly') {
        this.el.nativeElement.value = fieldValue.replace(/[^0-9]/g, '');
        return;
      }

      if (fieldValue && fieldValue.length > 0 && fieldValue.match(/[^0-9.]/) && attrTxt === 'numbersWithPeriod') {
        this.el.nativeElement.value = fieldValue.replace(/[^0-9.]/g, '');
        return;
      }

      if (fieldValue && fieldValue.length > 0 && fieldValue.match(/[^0-9-]/) && attrTxt === 'numbersWithHyphen') {
        this.el.nativeElement.value = fieldValue.replace(/[^0-9-]/g, '');
        return;
      }

      if (fieldValue && fieldValue.length > 0 && fieldValue.match(/[^0-9.%]/) && attrTxt === 'numbersWithPeriodPercent') {
        this.el.nativeElement.value = fieldValue.replace(/[^0-9.%]/g, '');
        return;
      }
    }
  }

  @HostListener('focusout', [ '$event' ])
  onFocusOut(event: KeyboardEvent): any {
    this.targetElmt.value = this.targetElmt.value.replace(/[‘’]/g, '\'');
    return;
  }

  @HostListener('drop', [ '$event' ])
  onDrop(ev: KeyboardEvent): void {
    ev.preventDefault();
  }

}


import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClipBoardService {

  constructor() { }

  public clipboard: { [x: string]: any; } = {};

  set(key: string, value: any) {
    if (key) {
      this.clipboard[key] = value;
    }
  }

  get(key: string) {
    if (key) {
      return this.clipboard[key];
    }
  }

  clearKey(key: string) {
    if (key) {
      delete this.clipboard[key];
    }
  }

  clearAll() {
    this.clipboard = {};
  }
}

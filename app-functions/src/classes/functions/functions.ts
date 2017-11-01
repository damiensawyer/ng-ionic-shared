import { Injectable } from '@angular/core';

@Injectable()
export class FunctionsService {
  constructor() {}

  addNumbers(first: number, second: number) {
    return first + second;
  }
}

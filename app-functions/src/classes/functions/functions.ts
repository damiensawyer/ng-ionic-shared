import { Injectable } from '@angular/core';

@Injectable()
export class FunctionsService {
  message = 'This was generated from shared service';

  constructor() {}

  addNumbers(first: number, second: number) {
    return first + second;
  }

}

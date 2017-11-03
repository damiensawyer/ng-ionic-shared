import { Injectable, Inject } from '@angular/core';
import { FunctionsService } from './classes/functions/functions';

@Injectable()
export class SampleService {

  constructor( @Inject(FunctionsService) public examples: FunctionsService ) {

  }
}

import { Component, Inject } from "@angular/core";
import { FunctionsService } from "../../classes/functions/functions";

@Component({
  selector: "sample-component",
  template: `<h1>Sample component</h1>`
})
export class SampleComponent {
  //constructor(@Inject(FunctionsService) public functions: FunctionsService) {}
  constructor(public functions: FunctionsService) {}

  useAddService(first: number, second: number) {
    return this.functions.addNumbers(first, second);
  }
}

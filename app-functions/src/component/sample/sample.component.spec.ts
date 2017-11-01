import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SampleComponent } from './sample.component';
import { FunctionsService } from 'classes/functions/functions';
// importing from jest.... https://stackoverflow.com/a/42035003

describe('Another set of tests', () => {
  it('should work...', () => {
    expect(123).toBe(123);
  });
});

describe('SampleComponent', () => {
  let comp: SampleComponent;
  let fixture: ComponentFixture<SampleComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SampleComponent], // declare the test component
      providers: [FunctionsService]
    });

    fixture = TestBed.createComponent(SampleComponent);

    comp = fixture.componentInstance; // BannerComponent test instance

    // query for the title <h1> by CSS element selector
    de = fixture.debugElement.query(By.css('h1'));
    el = de.nativeElement;
  });

  it('Should be false', () => {
    expect(false).toBe(false);
  });

  it('should use the service', () => {
    const result = comp.useAddService(10, 20);
    expect(result).toBe(30);
  });
});

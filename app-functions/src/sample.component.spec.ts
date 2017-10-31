import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SampleComponent } from './sample.component';
import {} from '@types/jest'; // Question: If I don't import this, then I don't get intellisense for the 'it' functions et al. But here I'm still getting a warning. What's best practise? Disable in TSLint? Another way?

describe('SampleComponent', () => {
  let comp: SampleComponent;
  let fixture: ComponentFixture<SampleComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SampleComponent], // declare the test component
    });

    fixture = TestBed.createComponent(SampleComponent);

    comp = fixture.componentInstance; // BannerComponent test instance

    // query for the title <h1> by CSS element selector
    de = fixture.debugElement.query(By.css('h1'));
    el = de.nativeElement;
  });

  it('Should be false', () => {
    expect(true).toBe(true);
  });

  it('Should be a number', () => {
    expect(6).toBe(6);
  });

  it('', () => {
    expect(199).toBe(199);
  });
});



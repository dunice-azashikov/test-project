import { CustomDirective } from './custom.directive';
import { inject } from '@angular/core/testing';
import { ElementRef } from '@angular/core';

describe('CustomDirective', () => {
  it('should create an instance', 
    inject([ElementRef, CustomDirective], () => {
      // const directive = new CustomDirective();
      // expect(directive).toBeTruthy();
    })
  )
});

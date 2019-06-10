import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveStylingComponent } from './directive-styling.component';

describe('DirectiveStylingComponent', () => {
  let component: DirectiveStylingComponent;
  let fixture: ComponentFixture<DirectiveStylingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectiveStylingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveStylingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

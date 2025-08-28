/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ComparaIESSComponent } from './ComparaIESS.component';

describe('ComparaIESSComponent', () => {
  let component: ComparaIESSComponent;
  let fixture: ComponentFixture<ComparaIESSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComparaIESSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparaIESSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

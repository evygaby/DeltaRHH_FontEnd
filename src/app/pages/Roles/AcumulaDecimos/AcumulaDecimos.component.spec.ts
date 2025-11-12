/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AcumulaDecimosComponent } from './AcumulaDecimos.component';

describe('AcumulaDecimosComponent', () => {
  let component: AcumulaDecimosComponent;
  let fixture: ComponentFixture<AcumulaDecimosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcumulaDecimosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcumulaDecimosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

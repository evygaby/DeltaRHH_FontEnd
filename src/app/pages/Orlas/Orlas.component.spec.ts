/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OrlasComponent } from './Orlas.component';

describe('OrlasComponent', () => {
  let component: OrlasComponent;
  let fixture: ComponentFixture<OrlasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrlasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrlasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

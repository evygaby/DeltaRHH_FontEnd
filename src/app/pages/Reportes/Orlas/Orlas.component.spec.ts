/* tslint:disable:no-unused-variable */
import { waitForAsync , ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OrlasComponent } from './Orlas.component';
import { describe, beforeEach, it } from 'node:test';

describe('OrlasComponent', () => {
  let component: OrlasComponent;
  let fixture: ComponentFixture<OrlasComponent>;

  beforeEach(waitForAsync (() => {
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

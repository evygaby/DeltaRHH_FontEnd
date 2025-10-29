/* tslint:disable:no-unused-variable */
import { waitForAsync , ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CumpleaniosPersonalComponent } from './CumpleaniosPersonal.component';

describe('CumpleaniosPersonalComponent', () => {
  let component: CumpleaniosPersonalComponent;
  let fixture: ComponentFixture<CumpleaniosPersonalComponent>;

  beforeEach(waitForAsync (() => {
    TestBed.configureTestingModule({
      declarations: [ CumpleaniosPersonalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CumpleaniosPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

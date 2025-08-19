/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PegPreceptoraComponent } from './PegPreceptora.component';

describe('PegPreceptoraComponent', () => {
  let component: PegPreceptoraComponent;
  let fixture: ComponentFixture<PegPreceptoraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PegPreceptoraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PegPreceptoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

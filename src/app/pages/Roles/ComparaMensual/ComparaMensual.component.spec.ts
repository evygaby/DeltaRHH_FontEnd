/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ComparaMensualComponent } from './ComparaMensual.component';

describe('ComparaMensualComponent', () => {
  let component: ComparaMensualComponent;
  let fixture: ComponentFixture<ComparaMensualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComparaMensualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparaMensualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

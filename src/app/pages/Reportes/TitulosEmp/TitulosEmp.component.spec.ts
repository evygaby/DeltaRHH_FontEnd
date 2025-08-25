/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TitulosEmpComponent } from './TitulosEmp.component';

describe('TitulosEmpComponent', () => {
  let component: TitulosEmpComponent;
  let fixture: ComponentFixture<TitulosEmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitulosEmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitulosEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

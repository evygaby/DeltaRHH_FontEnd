/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NumeroAlumnasComponent } from './NumeroAlumnas.component';

describe('NumeroAlumnasComponent', () => {
  let component: NumeroAlumnasComponent;
  let fixture: ComponentFixture<NumeroAlumnasComponent>;

 beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NumeroAlumnasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumeroAlumnasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

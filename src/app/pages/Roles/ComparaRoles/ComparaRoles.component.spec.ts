/* tslint:disable:no-unused-variable */
import { waitForAsync , ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ComparaRolesComponent } from './ComparaRoles.component';

describe('ComparaRolesComponent', () => {
  let component: ComparaRolesComponent;
  let fixture: ComponentFixture<ComparaRolesComponent>;

  beforeEach(waitForAsync (() => {
    TestBed.configureTestingModule({
      declarations: [ ComparaRolesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparaRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

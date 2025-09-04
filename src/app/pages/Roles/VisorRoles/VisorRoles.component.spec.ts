/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VisorRolesComponent } from './VisorRoles.component';

describe('VisorRolesComponent', () => {
  let component: VisorRolesComponent;
  let fixture: ComponentFixture<VisorRolesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisorRolesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisorRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

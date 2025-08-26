/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DistributivoMaestrasComponent } from './DistributivoMaestras.component';

describe('DistributivoMaestrasComponent', () => {
  let component: DistributivoMaestrasComponent;
  let fixture: ComponentFixture<DistributivoMaestrasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistributivoMaestrasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistributivoMaestrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

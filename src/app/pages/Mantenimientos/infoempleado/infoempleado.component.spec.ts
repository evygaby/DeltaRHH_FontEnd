import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoempleadoComponent } from './infoempleado.component';

describe('InfoempleadoComponent', () => {
  let component: InfoempleadoComponent;
  let fixture: ComponentFixture<InfoempleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoempleadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoempleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

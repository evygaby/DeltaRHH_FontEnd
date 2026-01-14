import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { MenuGuard } from './menu.guard';

describe('MenuGuard', () => {
  let guard: MenuGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MenuGuard,
        { provide: Router, useValue: { navigate: jasmine.createSpy('navigate') } }
      ]
    });
    guard = TestBed.inject(MenuGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

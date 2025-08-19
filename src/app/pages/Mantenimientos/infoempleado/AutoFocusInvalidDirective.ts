// src/app/shared/directives/auto-focus-invalid.directive.ts
import { Directive, HostListener } from '@angular/core';
import { NgForm } from '@angular/forms';

@Directive({
  selector: '[autoFocusInvalid]'
})
export class AutoFocusInvalidDirective {
  constructor(private form: NgForm) {}

  @HostListener('submit')
  onFormSubmit() {
    const invalidElements = Array.from(document.querySelectorAll('.ng-invalid')) as HTMLElement[];

    // Ordenar por data-priority si está presente
    invalidElements.sort((a, b) => {
      const pa = parseInt(a.getAttribute('data-priority') || '999', 10);
      const pb = parseInt(b.getAttribute('data-priority') || '999', 10);
      return pa - pb;
    });

    if (invalidElements.length > 0) {
      invalidElements[0].focus();
    }
  }
}

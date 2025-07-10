import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[currencyInput]'  // Usamos el selector 'currencyInput' para esta directiva
})
export class CurrencyInputDirective {
 constructor(private el: ElementRef) {}
// Detectar cuando el usuario escribe
  @HostListener('input', ['$event'])
  onInput(event: any): void {
    let value = this.el.nativeElement.value;

    // Reemplazar todo lo que no sea un número
    value = value.replace(/[^0-9]/g, ''); // Solo permite números

    // Establecer el valor de entrada
    this.el.nativeElement.value = value;
  }
  @HostListener('submit')
  onFormSubmit() {
    const firstInvalidControl: HTMLElement = document.querySelector(
      'form .ng-invalid'
    ) as HTMLElement;
    
    if (firstInvalidControl) {
      firstInvalidControl.focus();
    }
  }
}

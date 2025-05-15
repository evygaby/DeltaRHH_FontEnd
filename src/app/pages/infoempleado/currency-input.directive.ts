import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[currencyInput]'  // Usamos el selector 'currencyInput' para esta directiva
})
export class CurrencyInputDirective {
 constructor(private el: ElementRef) {}

  // Detectar cuando el usuario hace "blur" (salir del input)
  @HostListener('blur', ['$event.target.value'])
  onBlur(value: string) {
    this.el.nativeElement.value = this.formatMoney(value);
  }

  // Detectar cuando el usuario escribe
  @HostListener('input', ['$event.target.value'])
  onInput(value: string) {
    let formattedValue = value.replace(/[^0-9.]+/g, ''); // Eliminar caracteres no numéricos
    this.el.nativeElement.value = this.addCurrencySymbol(formattedValue);
  }

  // Método para agregar el símbolo "$" al valor formateado
  private addCurrencySymbol(value: string): string {
    if (value === '') return '';  // Si no hay valor, retornar vacío
    let parsedValue = parseFloat(value).toFixed(2);  // Asegurar que el valor tenga 2 decimales
    return `$ ${parsedValue}`;
  }

  // Método para formatear correctamente el valor con el símbolo "$"
  private formatMoney(value: string): string {
    if (!value) return '';
    let parsedValue = parseFloat(value).toFixed(2);
    return `$ ${parsedValue}`;
  }
}

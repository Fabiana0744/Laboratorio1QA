import { inject, TestBed } from '@angular/core/testing';
import { CalculadoraService } from './calculadora.service';
import { CalculadoraComponent } from './calculadora.component';

describe('Sumar', function () {
  it('10 + 15 debe ser 25', inject([CalculadoraService], (service: CalculadoraService) => {
    expect(service.sumar(10, 15)).toBe(25);
  }));

  it('3.5 + 2.8 debe ser 6.3', inject([CalculadoraService], (service: CalculadoraService) => {
    expect(service.sumar(3.5, 2.8)).toBeCloseTo(6.3, 1);
  }));
});


describe('Restar', function () {
  it('2 - 2 debe ser 0', inject([CalculadoraService], (service: CalculadoraService) => {
    expect(service.restar(2, 2)).toBe(0);
  }));

  it('3 - 4 debe ser -1', inject([CalculadoraService], (service: CalculadoraService) => {
    expect(service.restar(3, 4)).toBe(-1);
  }));
});


describe('Multiplicar', function () {
  it('3 * 2 debe ser 6', inject([CalculadoraService], (service: CalculadoraService) => {
    expect(service.multiplicar(3, 2)).toBe(6);
  }));
});


describe('Dividir', function () {
  it("2 dividido por 2 debe ser 1", inject([CalculadoraService], (service: CalculadoraService) => {
    expect(service.dividir(2, 2)).toBe(1);
  }));

  it("6 dividido por 0 debe generar una Excepción", inject([CalculadoraService], (service: CalculadoraService) => {
    expect(function () { service.dividir(6, 0); }).toThrowError(Error, 'División por cero');
    expect(function () { service.dividir(6, 0); 
    }).toThrowError('División por cero');
    expect(function () { service.dividir(6, 0); }).toThrowError(Error);
    expect(function () { service.dividir(6, 0); 
    }).toThrowError(/División por cero/);
  }));
});



describe('Cancatenar numero', function () {
  let component: CalculadoraComponent;
  beforeEach(() => {
    component = new CalculadoraComponent();
  });
  it("concatenar 2 + 5 = 25", function() {
    expect(component.concatenarNumero("2","5")).toBe("25");
  });
  it("concatenar Vacío + . = 0.", function() {
    expect(component.concatenarNumero("",".")).toBe("0.");
  });
  it("concatenar Decimal 5. + 5 = 5.5", function() {
    expect(component.concatenarNumero("5.","5")).toBe("5.5");
  });
  it("concatenar Más de un punto 5.5 + . = 5.5", function() {
    expect(component.concatenarNumero("5.5",".")).toBe("5.5");
  });
}); 

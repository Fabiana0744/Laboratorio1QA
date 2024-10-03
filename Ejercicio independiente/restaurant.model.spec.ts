import { TestBed } from '@angular/core/testing';
import { Restaurant } from './restaurant.model';
import { SortedListOfImmutables } from './sorted-list-of-immutables.model';
import { Food } from './food.model';

/*
describe('Restaurant', () => {
  it('should create an instance', () => {
    expect(new Restaurant()).toBeTruthy();
  });
});
*/


//Metodo addShipmentToInventory()
describe('Restaurant', () => {
  let restaurant: Restaurant;
  let foodList: SortedListOfImmutables;

  beforeEach(() => {
    restaurant = new Restaurant("Test Restaurant", 100); // 100 centavos
    foodList = new SortedListOfImmutables();
  });



   /**
   * Prueba: Costo de envio excede el efectivo devuelve false
   * 
   * Objetivo: Verificar que la función addShipmentToInventory devuelva false
   *           cuando el costo del envío excede el efectivo disponible.
   * 
   * Datos de prueba: 
   * - Bacon: costo mayorista = 89 centavos, costo minorista = 185 centavos, imagen = "Bacon.jpg"
   * - Waffle: costo mayorista = 178 centavos, costo minorista = 350 centavos, imagen = "Waffle.jpg"
   * 
   * Resultado esperado: false porque el costo total excede el efectivo (100 centavos).
   */
  it('costo de envio excede el efectivo devuelve false', () => {
    // Crea un envío que supera el efectivo
    foodList.add(new Food("Bacon", 89, 185, "Bacon.jpg"));
    foodList.add(new Food("Waffle", 178, 350, "Waffle.jpg")); // Costo total: 267 centavos

    const result = restaurant.addShipmentToInventory(foodList);

    expect(result).toBeFalse();
  });



  /**
   * Prueba: Costo de envio esta dentro del efectivo devuelve true
   * 
   * Objetivo: Verificar que la función addShipmentToInventory devuelva true
   *           cuando el costo del envío está dentro del efectivo disponible.
   * 
   * Datos de prueba: 
   * - Milk: costo mayorista = 52 centavos, costo minorista = 179 centavos, imagen = "Milk.jpg"
   * 
   * Resultado esperado: true porque el costo total está dentro del efectivo (100 centavos).
   */
  it('costo de envio esta dentro del efectivo devuelve true', () => {
    foodList.add(new Food("Milk", 52, 179, "Milk.jpg")); // Costo total: 52 centavos

    const result = restaurant.addShipmentToInventory(foodList);

    expect(result).toBeTrue();
    //expect(restaurant.getCash()).toEqual(48); // Efectivo debería ser 48 centavos después del envío
    //expect(restaurant.getInventory().getSize()).toEqual(1); // Inventario debería tener 1 item después del envío
  });
});




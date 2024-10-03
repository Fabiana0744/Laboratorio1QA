import { TestBed } from '@angular/core/testing';
import { SortedListOfImmutables } from './sorted-list-of-immutables.model';
import { Food } from './food.model';

/*
describe('SortedListOfImmutables', () => {
  it('should create an instance', () => {
    expect(new SortedListOfImmutables()).toBeTruthy();
  });
});
*/


//Metodo add()
describe('SortedListOfImmutables', () => {
  let sortedList: SortedListOfImmutables;

  beforeEach(() => {
    sortedList = new SortedListOfImmutables();
  });



  /**
   * Prueba: Agregar un item a una lista vacía
   * 
   * Objetivo: Verificar que se pueda agregar un elemento a una lista vacía.
   * 
   * Datos de prueba: 
   *  - foodItem: Pizza, costo mayorista = 200 centavos, costo minorista = 300 centavos, imagen = "Pizza.jpg"
   * 
   * Resultado esperado: La lista agrega el item por lo que debe tener 1 elemento después de agregar el foodItem.
   */
  it('agregar un item a una lista vacia', () => {
    const foodItem = new Food("Pizza", 200, 300, "Pizza.jpg");

    sortedList.add(foodItem);

    expect(sortedList.getSize()).toEqual(1); 
  });



   /**
   * Prueba: Mantener el orden al agregar items
   * 
   * Objetivo: Verificar que al agregar elementos a la lista, se mantenga el orden basado en el costo mayorista.
   * 
   * Datos de prueba: 
   *  - foodItem1: Burger, costo mayorista = 150 centavos, costo minorista = 250 centavos, imagen = "Burger.jpg"
   *  - foodItem2: Apple, costo mayorista = 100 centavos, costo minorista = 150 centavos, imagen = "Apple.jpg"
   * 
   * Resultado esperado: 
   *  - El primer elemento debe ser Apple (costo menor) y el segundo elemento debe ser Burger.
   */
  it('mantener el orden al agregar items', () => {
    const foodItem1 = new Food("Burger", 150, 250, "Burger.jpg");
    const foodItem2 = new Food("Apple", 100, 150, "Apple.jpg");

    sortedList.add(foodItem1);
    sortedList.add(foodItem2);

    expect(sortedList.get(0)).toEqual(foodItem2);
    expect(sortedList.get(1)).toEqual(foodItem1);
  });
  
});



//Metodo getWholesaleCost()


/**
 * Pruebas: Cálculo del costo mayorista total en SortedListOfImmutables
 * 
 * Objetivo: Verificar la correcta implementación del cálculo del costo mayorista total en la clase
 *           SortedListOfImmutables al agregar diferentes cantidades de artículos.
 * 
 * Casos de prueba:
 * 
 * 1. Prueba: Calcular el costo mayorista total para un solo artículo.
 *    - Datos de prueba: 
 *      - foodItem: Bacon, costo mayorista = 89 centavos, costo minorista = 185 centavos, imagen = "Bacon.jpg"
 *    - Resultado esperado: 
 *      - El costo mayorista total debe ser 89 centavos.
 * 
 * 2. Prueba: Calcular el costo mayorista total para múltiples artículos.
 *    - Datos de prueba: 
 *      - foodItem1: Egg, costo mayorista = 47 centavos, costo minorista = 89 centavos, imagen = "Egg.jpg"
 *      - foodItem2: Milk, costo mayorista = 52 centavos, costo minorista = 179 centavos, imagen = "Milk.jpg"
 *      - foodItem3: Toast, costo mayorista = 66 centavos, costo minorista = 125 centavos, imagen = "Toast.jpg"
 *    - Resultado esperado: 
 *      - El costo mayorista total debe ser 165 centavos (47 + 52 + 66).
 * 
 * 3. Prueba: Calcular el costo mayorista total cuando no hay artículos.
 *    - Datos de prueba: 
 *      - No hay artículos en la lista.
 *    - Resultado esperado: 
 *      - El costo mayorista total debe ser 0 centavos.
 */

describe('SortedListOfImmutables pruebas parametrizadas', () => {
    let sortedList: SortedListOfImmutables;

    beforeEach(() => {
        sortedList = new SortedListOfImmutables();
    });

    // Casos de prueba parametrizados
    const testCases = [
        {
            description: 'caso de prueba que calcula el costo total al por mayor de un artículo',
            items: [new Food("Bacon", 89, 185, "Bacon.jpg")],
            expectedCost: 89
        },
        {
            description: 'caso de prueba que calcula el costo total al por mayor para múltiples artículos',
            items: [
                new Food("Egg", 47, 89, "Egg.jpg"),
                new Food("Milk", 52, 179, "Milk.jpg"),
                new Food("Toast", 66, 125, "Toast.jpg")
            ],
            expectedCost: 165 // 47 + 52 + 66
        },
        {
            description: 'caso de prueba que calcula el costo total al por mayor sin articulos',
            items: [],
            expectedCost: 0
        }
    ];

    testCases.forEach(({ description, items, expectedCost }) => {
        it(description, () => {
            items.forEach(item => sortedList.add(item));
            const totalWholesaleCost = sortedList.getWholesaleCost();
            expect(totalWholesaleCost).toEqual(expectedCost);
        });
    });
});




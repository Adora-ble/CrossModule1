import { ShapesService } from './shapes.service';
import { Circle } from './circle';
import { TestBed } from '@angular/core/testing';
import { Ring } from './ring';
describe('ShapesService', () => {
  let service: ShapesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShapesService);
  });

  it('should calculate circle area correctly', () => {
    const radius = 5;
    const expectedArea = Math.PI * radius ** 2;
    expect(service.calculateCircleArea(radius)).toBeCloseTo(expectedArea);
  });

  it('should calculate circle circumference correctly', () => {
    const radius = 5;
    const expectedCircumference = 2 * Math.PI * radius;
    expect(service.calculateCircleCircumference(radius)).toBeCloseTo(expectedCircumference);
  });
  

  it('should determine if a point is inside a circle', () => {
    const circle = new Circle(5, 0, 0); // Створюємо коло з радіусом 5 і центром у (0, 0)

    // Точка в середині кола
    expect(circle.isPointInside(3, 0)).toBeTruthy();

    // Точка за межами кола
    expect(circle.isPointInside(6, 0)).toBeFalsy();
  });
  describe('Ring', () => {
    it('should calculate the area of a ring correctly', () => {
      const ring = new Ring(10, 5, 0, 0); // Зовнішній радіус 10, внутрішній радіус 5, центр у (0, 0)
      const expectedArea = Math.PI * (10 ** 2 - 5 ** 2); // Площа кільця
      expect(ring.area()).toBeCloseTo(expectedArea);
    });
  
    it('should determine if a point is inside the ring correctly', () => {
      const ring = new Ring(10, 5, 0, 0); // Кільце з центром у (0, 0), зовнішнім радіусом 10 та внутрішнім радіусом 5
  
      // Точка всередині кільця
      expect(ring.isPointInside(6, 0)).toBeTruthy(); // Точка на відстані 6 від центра, має бути всередині
  
      // Точка за межами кільця
      expect(ring.isPointInside(11, 0)).toBeFalsy(); // Точка на відстані 11 від центра, за межами кільця
  
      // Точка в межах внутрішнього радіуса кільця
      expect(ring.isPointInside(3, 0)).toBeFalsy(); // Точка на відстані 3 від центра, всередині внутрішнього радіуса, тому не вважається лежачою в кільці
    });
  });
});

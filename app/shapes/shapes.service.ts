import { Injectable } from '@angular/core';
import { Circle } from './circle';
import { Ring } from './ring';

@Injectable({
  providedIn: 'root'
})
export class ShapesService {
  private shapes: (Circle | Ring)[] = [];

  addShape(shape: Circle | Ring): void {
    this.shapes.push(shape);
  }

  calculateTotalArea(): number {
    return this.shapes.reduce((acc, shape) => acc + shape.area(), 0);
  }
  calculateCircleArea(radius: number): number {
    return Math.PI * radius ** 2;
  }

  calculateCircleCircumference(radius: number): number {
    return 2 * Math.PI * radius;
  }
}

import { Circle } from './circle';

export class Ring extends Circle {
  constructor(radius: number, public innerRadius: number, centerX: number, centerY: number) {
    super(radius, centerX, centerY);
    if (innerRadius >= radius) {
      throw new Error('Inner radius must be smaller than the outer radius.');
    }
  }

  override area(): number {
    return Math.PI * (this.radius ** 2 - this.innerRadius ** 2);
  }

  override isPointInside(x: number, y: number): boolean {
    const distance = Math.sqrt((x - this.centerX) ** 2 + (y - this.centerY) ** 2);
    return distance <= this.radius && distance >= this.innerRadius;
  }
}

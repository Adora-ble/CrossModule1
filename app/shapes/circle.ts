
export class Circle {
    constructor(public radius: number, public centerX: number, public centerY: number) {}
  
    area(): number {
      return Math.PI * this.radius ** 2;
    }
  
    circumference(): number {
      return 2 * Math.PI * this.radius;
    }
  
    isPointInside(x: number, y: number): boolean {
      const distance = Math.sqrt((x - this.centerX) ** 2 + (y - this.centerY) ** 2);
      return distance <= this.radius;
    }
  }
  
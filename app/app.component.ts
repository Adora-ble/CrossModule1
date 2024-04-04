import { Component } from '@angular/core';
import { ShapesService } from './shapes/shapes.service';
import { Circle } from './shapes/circle';
import { Ring } from './shapes/ring';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  results: string[] = [];

  constructor(private shapesService: ShapesService) {}

  onShapeData(data: any) {
    this.results = [];
  
    // Перевірка, чи внутрішній радіус задано та більше нуля для кільця
    if (data.innerRadius > 0) {
      const ring = new Ring(data.radius, data.innerRadius, data.centerX, data.centerY);
      this.results.push(`Area of Ring: ${ring.area().toFixed(2)}`);
      this.results.push(`Point inside Ring: ${ring.isPointInside(data.pointX, data.pointY) ? 'Yes' : 'No'}`);
    } else {
      //  якщо внутрішній радіус не задано або дорівнює нулю то коло!
      const circle = new Circle(data.radius, data.centerX, data.centerY);
      this.results.push(`Area of Circle: ${circle.area().toFixed(2)}`);
      this.results.push(`Circumference of Circle: ${circle.circumference().toFixed(2)}`);
      this.results.push(`Point inside Circle: ${circle.isPointInside(data.pointX, data.pointY) ? 'Yes' : 'No'}`);
    }
  }
  
}





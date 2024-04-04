import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-circle-input',
  template: `
    <form [formGroup]="circleForm" (ngSubmit)="submitForm()">
      <div>
        <label for="radius">Radius:</label>
        <input id="radius" type="number" formControlName="radius">
      </div>
      <div>
        <label for="innerRadius">Inner Radius (for Ring):</label>
        <input id="innerRadius" type="number" formControlName="innerRadius">
      </div>
      <div>
        <label for="centerX">Center X:</label>
        <input id="centerX" type="number" formControlName="centerX">
      </div>
      <div>
        <label for="centerY">Center Y:</label>
        <input id="centerY" type="number" formControlName="centerY">
      </div>
      <div>
        <label for="pointX">Point X:</label>
        <input id="pointX" type="number" formControlName="pointX">
      </div>
      <div>
        <label for="pointY">Point Y:</label>
        <input id="pointY" type="number" formControlName="pointY">
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  `,
  styles: []
})
export class CircleInputComponent {
  circleForm: FormGroup;

  @Output() shapeData = new EventEmitter<{
    radius: number, 
    innerRadius?: number,
    centerX: number, 
    centerY: number, 
    pointX: number, 
    pointY: number
  }>();

  constructor(private fb: FormBuilder) {
    this.circleForm = this.fb.group({
      radius: ['', [Validators.required, Validators.min(0)]],
      innerRadius: [0, [Validators.min(0)]],
      centerX: ['', [Validators.required]],
      centerY: ['', [Validators.required]],
      pointX: ['', [Validators.required]],
      pointY: ['', [Validators.required]]
    });
  }

  submitForm(): void {
    if (this.circleForm.valid) {
      this.shapeData.emit(this.circleForm.value);
    }
  }
}

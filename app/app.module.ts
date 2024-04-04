import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular'; // Імпортуй IonicModule
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CircleInputComponent } from './circle-input/circle-input.component';
import { ShapesService } from './shapes/shapes.service';

@NgModule({
  declarations: [
    AppComponent,
    CircleInputComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    IonicModule.forRoot(), 
  ],
  providers: [ShapesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

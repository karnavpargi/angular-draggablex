import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgDraggableModule } from 'projects/angular-draggable/src/public-api';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgDraggableModule],
  bootstrap: [AppComponent],
})
export class AppModule {}

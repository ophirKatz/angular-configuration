import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppConfigurationModule } from './configuration/app-configuration.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppConfigurationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

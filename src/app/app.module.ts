import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppConfigurationModule } from './configuration/app-configuration.module';
import { AppLocalizationModule } from './app-localization.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppConfigurationModule,
    AppLocalizationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

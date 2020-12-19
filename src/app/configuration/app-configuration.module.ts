import { NgModule } from '@angular/core';

import { Configurations, NeedleConfigurationModule } from 'needle-configuration';
import { nameof } from 'ts-simple-nameof';
import { AppConfigService } from './app-config.service';

const configurations: Configurations = [
  {
    path: 'assets/config/config.json',
    property: nameof<AppConfigService>(c => c.localization)
  }
];

@NgModule({
  imports: [
    NeedleConfigurationModule.forRoot(configurations, AppConfigService)
  ]
})
export class AppConfigurationModule { }

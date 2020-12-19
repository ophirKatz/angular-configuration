import { Injectable } from '@angular/core';

import { IAppConfig } from 'needle-configuration';
import { LoggingConfiguration } from './logging-configuration';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService implements IAppConfig {

  localization: any;
  logging: LoggingConfiguration;

}

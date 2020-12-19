import { ModuleWithProviders, NgModule, Type } from '@angular/core';

import { ILocalization, APP_LOCALIZATION } from './localization';
import { LocalizationPipe } from './localization.pipe';

@NgModule({
  declarations: [LocalizationPipe],
  exports: [LocalizationPipe]
})
export class NeedleLocalizationModule {

  public static forFactory(localizationFactory: (...args: any[]) => ILocalization, deps: any[]): ModuleWithProviders<NeedleLocalizationModule> {
    return {
      ngModule: NeedleLocalizationModule,
      providers: [
        {
          provide: APP_LOCALIZATION,
          useValue: localizationFactory,
          deps: deps
        }
      ]
    };
  }

  public static forValue(localizationImplementation: ILocalization): ModuleWithProviders<NeedleLocalizationModule> {
    return {
      ngModule: NeedleLocalizationModule,
      providers: [
        {
          provide: APP_LOCALIZATION,
          useValue: localizationImplementation
        }
      ]
    };
  }

}

import { Inject, Injectable, NgModule } from '@angular/core';

import { APP_CONFIG } from 'needle-configuration';
import { ILocalization, NeedleLocalizationModule } from 'needle-localization';

import { AppConfigService } from './configuration/app-config.service';

// A sad work around because you can't inject with @Inject into a function
@Injectable() class AppLocalizationFactoryService {
	constructor(@Inject(APP_CONFIG) private config: AppConfigService) { }

	public create(): ILocalization {
		return this.config.localization;
	}
}

function appLocalizationFactory(factory: AppLocalizationFactoryService): ILocalization {
	return factory.create;
}

@NgModule({
	providers: [AppLocalizationFactoryService],
	imports: [
		NeedleLocalizationModule.forFactory(appLocalizationFactory, [AppLocalizationFactoryService]),
	]
}) export class AppLocalizationModule { }
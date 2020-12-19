import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule, Type } from '@angular/core';
import { APP_CONFIG, IAppConfig } from './app-config';

import { createAppInitializers } from './app-initializers';
import { ConfigurationProviderService, configurationProviderServiceFactory } from './configuration-provider.service';
import { JsonFileService } from './json-file.service';
import { Configurations } from './types';

@NgModule({
	declarations: [],
	imports: [HttpClientModule],
	providers: [],
	exports: []
})
export class NeedleConfigurationModule {

	public static forRoot(configurations: Configurations, appConfigClass: Type<IAppConfig>): ModuleWithProviders<NeedleConfigurationModule> {
		return {
			ngModule: NeedleConfigurationModule,
			providers: [
				JsonFileService,
				{
					provide: APP_CONFIG,
					useClass: appConfigClass
				},
				{
					provide: ConfigurationProviderService,
					useFactory: configurationProviderServiceFactory,
					deps: [JsonFileService, APP_CONFIG]
				},
				...createAppInitializers(configurations)
			]
		};
	}

}

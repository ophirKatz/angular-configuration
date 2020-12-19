import { APP_INITIALIZER, Provider } from '@angular/core';

import { ConfigurationProviderService } from './configuration-provider.service';
import { Configuration, Configurations } from './types';
import { provideConfigurationFrom } from './utils';

const createAppInitializer = (config: Configuration) => {
	return {
		provide: APP_INITIALIZER,
		useFactory: provideConfigurationFrom(config),
		multi: true,
		deps: [ConfigurationProviderService]
	};
};

export function createAppInitializers(configurations: Configurations): Provider[] {
	return configurations.map(config => createAppInitializer(config));
}

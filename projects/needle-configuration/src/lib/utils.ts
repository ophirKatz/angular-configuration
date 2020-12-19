import { ConfigurationProviderService } from './configuration-provider.service';
import { Configuration } from './types';

declare type ConfigurationTask = () => Promise<void>;

declare type ConfigurationTaskProvider = (provider: ConfigurationProviderService) => ConfigurationTask;

export function provideConfigurationFrom(configuration: Configuration): ConfigurationTaskProvider {
	return (provider: ConfigurationProviderService) =>
		() => provider.load(configuration);
}

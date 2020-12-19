import { Inject, Injectable } from '@angular/core';

import { Configuration } from './types';
import { IAppConfig, APP_CONFIG } from './app-config';
import { JsonFileService as JsonFileService } from './json-file.service';

declare type ConfigurationCache = { [key: string]: any };

export function configurationProviderServiceFactory(jsonFileService: JsonFileService, appConfig: IAppConfig) {
	return new ConfigurationProviderService(jsonFileService, appConfig);
}

@Injectable()
export class ConfigurationProviderService {

	private configurationCache: ConfigurationCache = {};

	constructor(
		private jsonFileService: JsonFileService,
		@Inject(APP_CONFIG) private appConfig: IAppConfig
	) { }

	public load(configuration: Configuration): Promise<void> {
		if (this.trySetFromCache(configuration)) {
			return;
		}

		return new Promise<void>((resolve, reject) => {
			this.jsonFileService.read(configuration.path).then(response => {
				this.setConfiguration(configuration, response);
				this.configurationCache[configuration.path] = response;
				resolve();
			}).catch(error => {
				reject(this.createErrorMessage(configuration, error));
			});
		});
	}

	private setConfiguration(configuration: Configuration, json: any): void {
		if (configuration.setter) {
			configuration.setter(json, this.appConfig);
		} else if (configuration.property) {
			this.appConfig[configuration.property] = json;
		} else {
			return;
		}
	}

	private trySetFromCache(configuration: Configuration): boolean {
		const cachedConfig = this.configurationCache[configuration.path];
		if (cachedConfig) {
			this.setConfiguration(configuration, cachedConfig);
			return true;
		}

		return false;
	}

	private createErrorMessage(configuration: Configuration, error: string): string {
		return `Could not load file '${configuration.path}': ${JSON.stringify(error)}`;
	}

}

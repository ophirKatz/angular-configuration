import { IAppConfig } from './app-config';

declare type ConfigurationSetter = (response: any, config: IAppConfig) => void;

export interface Configuration {
	path: string;
	setter?: ConfigurationSetter;
	property?: string;
}

export declare type Configurations = Configuration[];

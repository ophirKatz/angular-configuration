import { InjectionToken } from "@angular/core";
import { nameof } from "ts-simple-nameof";

export class LoggingConfiguration {
	logLevel: string;
	errorFile: string;
}

export const loggingConfigurationToken = new InjectionToken<LoggingConfiguration>('LoggingConfiguration');

const name = nameof(LoggingConfiguration);

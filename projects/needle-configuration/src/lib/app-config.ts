import { InjectionToken } from "@angular/core";

export interface IAppConfig { }

export const APP_CONFIG = new InjectionToken<IAppConfig>('APP_CONFIG');

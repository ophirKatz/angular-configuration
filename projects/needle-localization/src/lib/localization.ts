import { InjectionToken } from "@angular/core";

export interface ILocalization { }

export const APP_LOCALIZATION = new InjectionToken<ILocalization>('APP_LOCALIZATION');

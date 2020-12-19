import { Inject, Pipe, PipeTransform } from '@angular/core';

import { ILocalization, APP_LOCALIZATION } from './localization';

@Pipe({
  name: 'localize'
})
export class LocalizationPipe implements PipeTransform {

  private readonly defaultValueIndex = 0;
  private readonly notFound = 'localized resource not found';

  constructor(@Inject(APP_LOCALIZATION) private localization: ILocalization) { }

  transform(value: string, ...args: string[]): string {
    try {
      const localizedValue = this.localization[value];
      return localizedValue ?? this._tryGetDefaultValue(...args);
    } catch (e) {
      return this._tryGetDefaultValue(...args);
    }
  }

  private _tryGetDefaultValue(...args: string[]): string {
    if (!args || args.length < 1) {
      return this.notFound;
    }

    return args[this.defaultValueIndex] as string;
  }

}

import { Component, Inject } from '@angular/core';

import { APP_CONFIG } from 'needle-configuration';
import { AppConfigService } from './configuration/app-config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'needle';

  constructor(@Inject(APP_CONFIG) public config: AppConfigService) {

  }
}

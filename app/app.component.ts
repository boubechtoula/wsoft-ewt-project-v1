import { Component } from '@angular/core';
import { AppService } from './services/app.service';
import { SidepanelService } from './services/sidepanel.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {
  constructor(
    public app: AppService,
    public sidepanel: SidepanelService
  ) {}
}

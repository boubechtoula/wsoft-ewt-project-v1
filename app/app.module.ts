import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { ServicesModule } from './services.module';
import { RouterModule } from '@angular/router';

import { PrismComponent } from './code/prism.component';
import { HostedCodeComponent } from './code/hosted-code.component';

import { AppComponent } from './app.component';
import { SidepanelComponent } from './sidepanel/sidepanel.component';
import { PanelLinkComponent } from './sidepanel/panel-link.component';
import { HomeComponent } from './routes/home.component';

const routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: '**', redirectTo: 'home' }
]

@NgModule({
  imports:      [ 
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    ServicesModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    PrismComponent,
    HostedCodeComponent,
    AppComponent,
    SidepanelComponent,
    PanelLinkComponent,
    HomeComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { FormsModule } from '@angular/forms';
import { WarningAlartComponent } from './warning-alert/warning-alert.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    TestComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    // WarningAlartComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

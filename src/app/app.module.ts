import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppInitService } from './app-init.service';

export function appInitializer(appInitService: AppInitService) {
  return (): Promise<any> => {
    return appInitService.init();
  }
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    { 
      provide: APP_INITIALIZER, 
      useFactory: appInitializer,
      deps: [AppInitService],
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

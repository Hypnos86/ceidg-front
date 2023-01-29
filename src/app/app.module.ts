import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import localePl from '@angular/common/locales/pl' // importowanie jezyka i lokalizacji do modulu 
import { registerLocaleData } from '@angular/common';

registerLocaleData(localePl);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {provide:LOCALE_ID, useValue:"pl-PL"} //wstrzykiwanie jezyka i lokalizacji
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

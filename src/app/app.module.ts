import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { LoginSectionComponent } from './components/login/login-section/login-section.component';
import { NoticesSectionComponent } from './components/login/notices-section/notices-section.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginSectionComponent,
    NoticesSectionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

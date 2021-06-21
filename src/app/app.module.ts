import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TopComponent } from './top/top.component';
import { WidgetsOneComponent } from './widgets-one/widgets-one.component';
import { WidgetsTwoComponent } from './widgets-two/widgets-two.component';
import { SideBarComponent } from './side-bar/side-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TopComponent,
    WidgetsOneComponent,
    WidgetsTwoComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

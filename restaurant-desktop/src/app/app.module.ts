import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CancelButtonComponent } from './components/cancel-button/cancel-button.component';
import { ApplyButtonComponent } from './components/apply-button/apply-button.component';
import { HttpClientModule } from '@angular/common/http';
import { ContentComponent } from './components/content/content.component';
import { FormsModule } from '@angular/forms';
import { CategoryService } from './category.service';
import { ContentCommunicationService } from './contentcommunication.service';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    SideBarComponent,
    NavbarComponent,
    CancelButtonComponent,
    ApplyButtonComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(),CategoryService,ContentCommunicationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

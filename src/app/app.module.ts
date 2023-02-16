import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { HttpClientModule } from '@angular/common/http';
import { WorkComponent } from './work/work.component';
import { AboutComponent } from './about/about.component';
import { StartComponent } from './start/start.component';
import { LottieModule, LottieCacheModule  } from 'ngx-lottie';
export function playerFactory(): any {
  return import('lottie-web');
}
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ContactMeComponent,
    WorkComponent,
    AboutComponent,
    StartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    [LottieModule.forRoot({ player: playerFactory }),LottieCacheModule.forRoot()],
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }

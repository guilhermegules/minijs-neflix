import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { LoginComponent } from './login/login.component'
import { MainPageComponent } from './main-page/main-page.component'
import { ShowFilmComponent } from './show-film/show-film.component'
import { MetricsComponent } from './metrics/metrics.component'
import { ProfileComponent } from './profile/profile.component'
import { NavigationComponent } from './navigation/navigation.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainPageComponent,
    ShowFilmComponent,
    MetricsComponent,
    ProfileComponent,
    NavigationComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

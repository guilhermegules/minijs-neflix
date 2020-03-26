import { MetricsComponent } from './metrics/metrics.component'
import { MainPageComponent } from './main-page/main-page.component'
import { ProfileComponent } from './profile/profile.component'
import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { LoginComponent } from './login/login.component'

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'main-page', component: MainPageComponent },
  { path: 'metrics', component: MetricsComponent }
  // { path: '', redirectTo: '/login', pathMatch: 'full', component: LoginComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

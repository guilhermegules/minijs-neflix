import { MetricsComponent } from './metrics/metrics.component'
import { MainPageComponent } from './main-page/main-page.component'
import { ProfileComponent } from './profile/profile.component'
import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { LoginComponent } from './login/login.component'
import { AuthGuard } from './services/auth/auth.guard'

const routes: Routes = [
  { path: '', component: MainPageComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'main-page', component: MainPageComponent },
  { path: 'metrics', component: MetricsComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

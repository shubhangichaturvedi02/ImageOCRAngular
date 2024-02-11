import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {ViewComponent} from "./view/view.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {
    path: 'auth',
    component: LoginComponent
  },
  {
    path: 'view',
    component: ViewComponent
  },
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}

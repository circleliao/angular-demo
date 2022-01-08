import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomepageComponent} from "./pages/homepage/homepage.component";
import {ListComponent} from "./pages/list/list.component";

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'prefix'},
  {path: 'home', component: HomepageComponent},
  {path: 'list', component: ListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicServiceRoutingModule {
}

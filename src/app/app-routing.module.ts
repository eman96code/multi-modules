import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontendDescriptionComponent } from './frontend-developer/frontend-description/frontend-description.component';
import { BackendDescriptionComponent } from './backend-developer/backend-description/backend-description.component';
import { FullstackDescriptionComponent } from './fullstack-developer/fullstack-description/fullstack-description.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'frontend-description', component: FrontendDescriptionComponent },
  { path: 'backend-description', component: BackendDescriptionComponent },
  { path: 'fullstack-description', component: FullstackDescriptionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

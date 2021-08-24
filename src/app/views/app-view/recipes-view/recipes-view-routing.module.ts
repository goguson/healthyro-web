import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesViewComponent } from './recipes-view.component';

const routes: Routes = [
  {
    path: '',
    component: RecipesViewComponent,
    children: [],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipesViewRoutingModule {
  static components = [RecipesViewComponent];
}

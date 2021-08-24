import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppViewComponent } from './app-view.component';
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'recipes',
  },
  {
    path: 'recipes',
    loadChildren: () =>
      import('./recipes-view/recipes-view.module').then(
        (m) => m.RecipesViewModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppViewRoutingModule {
  static components = [AppViewComponent];
}

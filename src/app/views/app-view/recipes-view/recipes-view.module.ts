import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesViewRoutingModule } from './recipes-view-routing.module';

@NgModule({
  declarations: [RecipesViewRoutingModule.components],
  imports: [CommonModule, RecipesViewRoutingModule],
})
export class RecipesViewModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppViewRoutingModule } from './app-view-routing.module';

@NgModule({
  declarations: [AppViewRoutingModule.components],
  imports: [CommonModule, AppViewRoutingModule],
})
export class AppViewModule {}

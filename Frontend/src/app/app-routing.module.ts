import { Component, NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { FinalComponent } from './final/final.component';
import { InfoComponent } from './info/info.component';
import { MarketingComponent } from './marketing/marketing.component';
import { SocialmediaComponent } from './socialmedia/socialmedia.component';

export const routes: Routes = [
  { path: '', component: InfoComponent },
  { path: 'info', component: InfoComponent },
  { path: 'marketing', component: MarketingComponent },
  { path: 'socialmedia', component: SocialmediaComponent },
  { path: 'final', component: FinalComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export const routingComponents = [];

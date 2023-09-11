import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroAdventureComponent } from './hero-adventure/components/hero-adventure.component';
import { MythicalForestComponent } from './hero-adventure/components/mythical-forest/mythical-forest.component';
import { DarkMountainsComponent } from './hero-adventure/components/dark-mountains/dark-mountains.component';
import { FortressGorgorothComponent } from './hero-adventure/components/fortress-gorgoroth/fortress-gorgoroth.component';

const routes: Routes = [
  {
    path: '',
    component: HeroAdventureComponent,
  },
  {
    path: 'mythical-forest',
    component: MythicalForestComponent,
  },
  {
    path: 'dark-mountains',
    component: DarkMountainsComponent,
  },
  {
    path: 'fortress-gorgoroth',
    component: FortressGorgorothComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroAdventureComponent } from './hero-adventure/components/hero-adventure.component';
import { MythicalForestComponent } from './hero-adventure/components/elf-forest/mythical-forest.component';

const routes: Routes = [
  {
    path: '',
    component: HeroAdventureComponent,
  },
  {
    path: 'mythical-forest',
    component: MythicalForestComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

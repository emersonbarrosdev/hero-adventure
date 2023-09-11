import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActionsBattleComponent } from './hero-adventure/components/actions-battle/actions-battle.component';
import { HeroAdventureComponent } from './hero-adventure/components/hero-adventure.component';
import { MythicalForestComponent } from './hero-adventure/components/mythical-forest/mythical-forest.component';
import { DarkMountainsComponent } from './hero-adventure/components/dark-mountains/dark-mountains.component';
import { FortressGorgorothComponent } from './hero-adventure/components/fortress-gorgoroth/fortress-gorgoroth.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroAdventureComponent,
    MythicalForestComponent,
    ActionsBattleComponent,
    DarkMountainsComponent,
    FortressGorgorothComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActionsBattleComponent } from './hero-adventure/components/actions-battle/actions-battle.component';
import { HeroAdventureComponent } from './hero-adventure/components/hero-adventure.component';
import { MythicalForestComponent } from './hero-adventure/components/elf-forest/mythical-forest.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroAdventureComponent,
    MythicalForestComponent,
    ActionsBattleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

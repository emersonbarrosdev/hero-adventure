import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfoComponent } from './hero-adventure/components/info/info.component';
import { ActionsComponent } from './hero-adventure/components/actions/actions.component';
import { HeroAdventureComponent } from './hero-adventure/components/hero-adventure.component';
import { GameStartComponent } from './hero-adventure/components/game-start/game-start.component';
import { FlorestaElficaComponent } from './hero-adventure/components/floresta-elfica/floresta-elfica.component';
import { MontanhasSombriasDComponent } from './hero-adventure/components/montanhas-sombrias-d/montanhas-sombrias-d.component';
import { FortalezaGorgorothComponent } from './hero-adventure/components/fortaleza-gorgoroth/fortaleza-gorgoroth.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    ActionsComponent,
    HeroAdventureComponent,
    GameStartComponent,
    FlorestaElficaComponent,
    MontanhasSombriasDComponent,
    FortalezaGorgorothComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

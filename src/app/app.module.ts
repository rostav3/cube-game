import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardGameComponent } from './board-game/board-game.component';
import { CubesBoardComponent } from './cubes-board/cubes-board.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardGameComponent,
    CubesBoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

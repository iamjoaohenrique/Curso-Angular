import { PokemonModule } from './pokemon/pokemon.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeiroComponent } from './primeiro/primeiro.component';
import { SegundoComponent } from './segundo/segundo.component';
import { FormsModule } from "@angular/forms";
import { UsuarioModule } from './usuario/usuario.module';
import { HttpClientModule } from "@angular/common/http";
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';


 
@NgModule({
  declarations: [
    AppComponent,
    PrimeiroComponent,
    SegundoComponent,
    MenuComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    UsuarioModule,
    PokemonModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

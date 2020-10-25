import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';

import { ContenidoComponent } from './paginas/contenido/contenido.component';
import { AcercaComponent } from './paginas/acerca/acerca.component';
import { ProductosComponent } from './paginas/productos/productos.component';
import { SearchComponent } from './paginas/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
   ContenidoComponent,
   AcercaComponent,
   ProductosComponent,
   SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

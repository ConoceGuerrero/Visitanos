import { NgModule } from '@angular/core';
import { Routes  , RouterModule} from '@angular/router';
import { ContenidoComponent } from './paginas/contenido/contenido.component';
import { AcercaComponent } from './paginas/acerca/acerca.component';
import { ProductosComponent } from './paginas/productos/productos.component';
import { SearchComponent } from './paginas/search/search.component';

const app_routes:  Routes = [
  {path: '' , component: ContenidoComponent},
  {path: 'acerca' , component: AcercaComponent},
  {path: 'productos/:id', component: ProductosComponent},
  {path: 'search/:termino', component: SearchComponent},

  {path:'**', pathMatch: 'full' , redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(app_routes, {useHash: true})
  ],
  exports: [ RouterModule

  ]

})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importe seus componentes
import { UrlListComponent } from './components/url-list/url-list.component';
import { UrlShortenerComponent } from './components/url-shortener/url-shortener.component';

const routes: Routes = [
  // Rota padrão - página inicial com o encurtador de URL
  { path: '', component: UrlShortenerComponent },

  // Rota para a lista de URLs
  { path: 'lista', component: UrlListComponent },

  // Rota de fallback - redireciona para a página inicial se nenhuma rota corresponder
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

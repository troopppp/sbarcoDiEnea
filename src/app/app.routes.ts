import { Routes } from '@angular/router';
import { RistorantePageComponent } from './pages/ristorante/ristorante-page.component';
import { StoriaPageComponent } from './pages/storia/storia-page.component';
import { MenuPageComponent } from './pages/menu/menu-page.component';
import { GalleryPageComponent } from './pages/gallery/gallery-page.component';
import { ContattiPageComponent } from './pages/contatti/contatti-page.component';
import { EventiPageComponent } from './pages/eventi/eventi-page.component';
import { PrenotaPageComponent } from './pages/prenota/prenota-page.component';

export const routes: Routes = [
  { path: '', component: RistorantePageComponent, title: 'Il Ristorante | Allo Sbarco di Enea' },
  { path: 'storia', component: StoriaPageComponent, title: 'Storia | Allo Sbarco di Enea' },
  { path: 'menu', component: MenuPageComponent, title: 'Menù | Allo Sbarco di Enea' },
  { path: 'gallery', component: GalleryPageComponent, title: 'Photo Gallery | Allo Sbarco di Enea' },
  { path: 'contatti', component: ContattiPageComponent, title: 'Contatti | Allo Sbarco di Enea' },
  { path: 'eventi', component: EventiPageComponent, title: 'Eventi | Allo Sbarco di Enea' },
  { path: 'prenota', component: PrenotaPageComponent, title: 'Prenota | Allo Sbarco di Enea' },
  { path: '**', redirectTo: '' }
];

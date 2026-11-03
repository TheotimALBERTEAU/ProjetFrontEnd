import { ResolveFn, Routes } from '@angular/router';
import { NOM_PORTAIL, trouverService } from './data/libelles';
import { Accueil } from './pages/accueil/accueil';
import { Demande } from './pages/demande/demande';
import { Espace } from './pages/espace/espace';
import { ServiceDetail } from './pages/service-detail/service-detail';
import { Services } from './pages/services/services';

/** Titre « Page · Portail des services ». */
const titre = (page: string) => `${page} · ${NOM_PORTAIL}`;

const titreService: ResolveFn<string> = (route) =>
  titre(trouverService(route.paramMap.get('id') ?? undefined)?.nom ?? 'Service introuvable');

export const routes: Routes = [
  { path: '', component: Accueil, title: NOM_PORTAIL },
  { path: 'services', component: Services, title: titre('Services') },
  { path: 'services/:id', component: ServiceDetail, title: titreService },
  { path: 'services/:id/demande', component: Demande, title: titre('Faire une demande') },
  { path: 'espace', component: Espace, title: titre('Mes demandes') },
  { path: '**', redirectTo: '' },
];

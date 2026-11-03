import { RenderMode, ServerRoute } from '@angular/ssr';
import { SERVICES } from './data/donnees';

const idsServices = async () => SERVICES.map((s) => ({ id: s.id }));

export const serverRoutes: ServerRoute[] = [
  { path: 'services/:id', renderMode: RenderMode.Prerender, getPrerenderParams: idsServices },
  { path: 'services/:id/demande', renderMode: RenderMode.Prerender, getPrerenderParams: idsServices },
  { path: '**', renderMode: RenderMode.Prerender },
];

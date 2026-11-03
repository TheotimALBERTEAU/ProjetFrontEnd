import { CATEGORIES, Demande, SERVICES, Service } from './donnees';

export const NOM_PORTAIL = 'Portail des services';

export const SERVICES_TRIES: Service[] = [...SERVICES].sort((a, b) => a.nom.localeCompare(b.nom, 'fr'));

export function trouverService(id: string | undefined): Service | undefined {
  return SERVICES.find((s) => s.id === id);
}

export function libelleCategorie(id: string): string {
  return CATEGORIES.find((c) => c.id === id)?.libelle ?? id;
}

export function libelleDelai(jours: number): string {
  return jours > 1 ? `${jours} jours ouvrés` : `${jours} jour ouvré`;
}

export const LIBELLES_CRENEAU: Record<Demande['creneau'], string> = {
  matin: 'Matin',
  'apres-midi': 'Après-midi',
};

export const LIBELLES_STATUT: Record<Demande['statut'], string> = {
  envoyee: 'Envoyée',
  acceptee: 'Acceptée',
  refusee: 'Refusée',
};

/** « 2026-10-14 » → « 14/10/2026 » */
export function formaterDate(iso: string): string {
  const [a, m, j] = iso.split('-');
  return `${j}/${m}/${a}`;
}

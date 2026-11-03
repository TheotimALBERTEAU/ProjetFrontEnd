import { Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SERVICES } from '../../data/donnees';
import { libelleCategorie, libelleDelai, trouverService } from '../../data/libelles';
import { Breadcrumb, BreadcrumbItem } from '../../shared/breadcrumb/breadcrumb';
import { ServiceCard } from '../../shared/service-card/service-card';

@Component({
  imports: [Breadcrumb, ServiceCard, RouterLink],
  selector: 'app-service-detail',
  styleUrl: './service-detail.scss',
  templateUrl: './service-detail.html',
})
export class ServiceDetail {
  /** Paramètre de route `:id` (withComponentInputBinding). */
  readonly id = input.required<string>();

  protected readonly service = computed(() => trouverService(this.id()));
  protected readonly categorie = computed(() => libelleCategorie(this.service()?.categorie ?? ''));
  protected readonly delai = computed(() => libelleDelai(this.service()?.delai ?? 0));
  protected readonly places = computed(() => {
    const places = this.service()?.places ?? 0;
    return places > 0 ? `${places} disponibles` : 'Complet';
  });

  protected readonly fil = computed<BreadcrumbItem[]>(() => [
    { label: 'Accueil', link: '/' },
    { label: 'Services', link: '/services' },
    { label: this.service()?.nom ?? 'Service introuvable' },
  ]);

  protected readonly memeCategorie = computed(() => {
    const s = this.service();
    return s ? SERVICES.filter((x) => x.categorie === s.categorie && x.id !== s.id).slice(0, 3) : [];
  });
}

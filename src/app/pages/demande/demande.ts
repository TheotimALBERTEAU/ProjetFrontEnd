import { Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { libelleDelai, SERVICES_TRIES, trouverService } from '../../data/libelles';
import { Breadcrumb, BreadcrumbItem } from '../../shared/breadcrumb/breadcrumb';

@Component({
  imports: [Breadcrumb, RouterLink],
  selector: 'app-demande',
  styleUrl: './demande.scss',
  templateUrl: './demande.html',
})
export class Demande {
  /** Paramètre de route `:id` (withComponentInputBinding). */
  readonly id = input.required<string>();

  protected readonly services = SERVICES_TRIES;
  protected readonly service = computed(() => trouverService(this.id()));
  protected readonly delai = computed(() => libelleDelai(this.service()?.delai ?? 0));

  protected readonly fil = computed<BreadcrumbItem[]>(() => [
    { label: 'Accueil', link: '/' },
    { label: this.service()?.nom ?? 'Services', link: ['/services', this.id()] },
    { label: 'Demande' },
  ]);
}

import { Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CATEGORIES, Service } from '../../data/donnees';

@Component({
  imports: [RouterLink],
  selector: 'app-service-card',
  styleUrl: './service-card.scss',
  templateUrl: './service-card.html',
})
export class ServiceCard {
  readonly service = input.required<Service>();

  protected readonly categorie = computed(
    () => CATEGORIES.find((c) => c.id === this.service().categorie)?.libelle ?? '',
  );
  protected readonly disponibilite = computed(() => {
    const places = this.service().places;
    return places > 0 ? `${places} places` : 'Complet';
  });
}

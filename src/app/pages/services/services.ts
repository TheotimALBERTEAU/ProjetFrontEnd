import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CATEGORIES, SERVICES } from '../../data/donnees';
import { SERVICES_TRIES } from '../../data/libelles';
import { Breadcrumb, BreadcrumbItem } from '../../shared/breadcrumb/breadcrumb';
import { ServiceCard } from '../../shared/service-card/service-card';

@Component({
  imports: [Breadcrumb, ServiceCard, RouterLink],
  selector: 'app-services',
  styleUrl: './services.scss',
  templateUrl: './services.html',
})
export class Services {
  protected readonly fil: BreadcrumbItem[] = [{ label: 'Accueil', link: '/' }, { label: 'Services' }];
  protected readonly total = SERVICES.length;
  protected readonly categories = CATEGORIES;
  /** Page 1 : les neuf premiers services, triés par nom. */
  protected readonly services = SERVICES_TRIES.slice(0, 9);
}

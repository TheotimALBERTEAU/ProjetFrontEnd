import { Component } from '@angular/core';
import { CATEGORIES, SERVICES } from '../../data/donnees';
import { trouverService } from '../../data/libelles';
import { ServiceCard } from '../../shared/service-card/service-card';

@Component({
  imports: [ServiceCard],
  selector: 'app-accueil',
  styleUrl: './accueil.scss',
  templateUrl: './accueil.html',
})
export class Accueil {
  protected readonly categories = CATEGORIES.map((c) => ({
    ...c,
    nombre: SERVICES.filter((s) => s.categorie === c.id).length,
  }));

  protected readonly aLaUne = ['2', '5', '11'].map((id) => trouverService(id)!);
}

import { Component } from '@angular/core';
import { DEMANDES } from '../../data/donnees';
import { formaterDate, LIBELLES_CRENEAU, LIBELLES_STATUT, trouverService } from '../../data/libelles';

@Component({
  imports: [],
  selector: 'app-espace',
  styleUrl: './espace.scss',
  templateUrl: './espace.html',
})
export class Espace {
  protected readonly demandes = DEMANDES.map((d) => ({
    id: d.id,
    service: trouverService(d.serviceId)?.nom ?? '',
    date: formaterDate(d.date),
    creneau: LIBELLES_CRENEAU[d.creneau],
    statut: LIBELLES_STATUT[d.statut],
    code: d.statut,
    annulable: d.statut === 'envoyee',
  }));
}

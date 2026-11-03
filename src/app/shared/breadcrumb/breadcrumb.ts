import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface BreadcrumbItem {
  label: string;
  /** Absent pour la page courante. */
  link?: string | unknown[];
}

@Component({
  imports: [RouterLink],
  selector: 'app-breadcrumb',
  styleUrl: './breadcrumb.scss',
  templateUrl: './breadcrumb.html',
})
export class Breadcrumb {
  readonly items = input.required<BreadcrumbItem[]>();
}

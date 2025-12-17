import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

interface GalleryItem {
  url: string;
  alt: string;
}

@Component({
  standalone: true,
  selector: 'app-gallery-page',
  imports: [NgFor],
  templateUrl: './gallery-page.component.html',
  styleUrls: ['./gallery-page.component.scss']
})
export class GalleryPageComponent {
  gallery: GalleryItem[] = [
    {
      url: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1200&q=80',
      alt: 'Tavolo apparecchiato con vino'
    },
    {
      url: 'https://images.unsplash.com/photo-1521017432506-8c749e1420e1?auto=format&fit=crop&w=1200&q=80',
      alt: 'Dettaglio cucina italiana'
    },
    {
      url: 'https://images.unsplash.com/photo-1521017432531-7c2ae83f24d5?auto=format&fit=crop&w=1200&q=80',
      alt: 'Braciere e carne alla griglia'
    },
    {
      url: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80',
      alt: 'Sala con atmosfera calda'
    }
  ];
}

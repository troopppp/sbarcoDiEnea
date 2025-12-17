import { Component, ViewEncapsulation } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet, ChildrenOutletContexts } from '@angular/router';
import { trigger, transition, style, animate, query } from '@angular/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgFor, NgIf, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('routeAnimations', [
      transition('* <=> *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(20px)' })
        ], { optional: true }),
        query(':leave', [
          animate('200ms ease-out', style({ opacity: 0, transform: 'translateY(-10px)' }))
        ], { optional: true }),
        query(':enter', [
          animate('400ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
        ], { optional: true })
      ])
    ])
  ]
})
export class AppComponent {
  mobileMenuOpen = false;

  constructor(private contexts: ChildrenOutletContexts) {}

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
    this.updateBodyScroll();
  }

  closeMobileMenu() {
    this.mobileMenuOpen = false;
    this.updateBodyScroll();
  }

  private updateBodyScroll() {
    if (this.mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  readonly priceRange = '10-20 € a persona';
  readonly address = 'Viale dei Romagnoli, 675 - 00126 Roma (Ostia Antica)';
  readonly plusCode = 'Q75X+8W Roma, Città metropolitana di Roma Capitale';
  readonly phone = '333 802 4769';
  readonly website = 'allosbarcodienea.com';

  navLinks = [
    { label: 'Il Ristorante', path: '/' },
    { label: 'Storia', path: '/storia' },
    { label: 'Menù', path: '/menu' },
    { label: 'Contatti', path: '/contatti' },
    { label: 'Eventi', path: '/eventi' }
  ];
}

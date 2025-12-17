import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-ristorante-page',
  imports: [RouterLink, NgFor],
  templateUrl: './ristorante-page.component.html',
  styleUrls: ['./ristorante-page.component.scss']
})
export class RistorantePageComponent implements OnInit, OnDestroy {
  galleryImages = [
    'assets/sala_01.jpg',
    'assets/sala_02.jpg',
    'assets/sala_03.jpg',
    'assets/sala_04.jpg',
    'assets/sala_05.jpg',
    'assets/sala_06.jpg',
    'assets/sala_07.jpg',
    'assets/sala_08.jpg'
  ];

  currentSlide = 0;
  private intervalId: any;

  ngOnInit(): void {
    this.intervalId = setInterval(() => this.nextSlide(), 4200);
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.galleryImages.length;
  }

  goToSlide(index: number): void {
    this.currentSlide = index;
  }
}

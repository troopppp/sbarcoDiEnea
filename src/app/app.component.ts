import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ServiceCard {
  title: string;
  description: string;
  category: string;
  icon: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  readonly hero = {
    name: 'Sbarco di Enea',
    tagline: 'Cucina di mare contemporanea affacciata sul Tirreno',
    address: 'Lungomare degli Eroi 12, 00042 Anzio (RM)',
    ctaBooking: 'https://www.sbarcodienea.it/prenota',
    ctaCall: 'tel:+390698765432'
  };

  readonly contacts = {
    phone: '+39 06 9876 5432',
    website: 'https://www.sbarcodienea.it',
    email: 'prenotazioni@sbarcodienea.it',
    maps: 'https://maps.google.com/?q=Sbarco+di+Enea+Anzio'
  };

  readonly hours = [
    { day: 'Lunedì - Mercoledì', time: '12:00 - 15:00' },
    { day: 'Giovedì - Domenica', time: '12:00 - 15:00 • 19:00 - 23:30' },
    { day: 'Chiusura', time: 'Martedì (solo invernale)' }
  ];

  readonly pricing = [
    { label: 'Menu degustazione mare', value: 'da 65€' },
    { label: 'Antipasti', value: 'da 12€' },
    { label: 'Primi di pasta fresca', value: 'da 16€' },
    { label: 'Secondi dal pescato del giorno', value: 'da 22€' }
  ];

  readonly proposals = [
    { icon: '🦪', title: 'Crudi e ostriche selezionate', text: 'plateau di crudi, carpacci e ostriche Fin de Claire con pairing dedicato.' },
    { icon: '🔥', title: 'Brace di mare', text: 'pescato locale alla griglia con legni profumati e contorni stagionali.' },
    { icon: '🍸', title: 'Cocktail & wine bar', text: 'mixology mediterranea e cantina con etichette naturali e bollicine italiane.' },
    { icon: '🌅', title: 'Vista tramonto', text: 'sala panoramica fronte mare con terrazza per aperitivi e after-dinner.' }
  ];

  readonly ambiance = [
    { title: 'Atmosfera', text: 'elegante ma informale, ispirata ai colori del mare e alla storia di Enea.' },
    { title: 'Clientela', text: 'coppie, famiglie e appassionati di cucina di mare contemporanea.' },
    { title: 'Dress code', text: 'smart casual; si gradisce la prenotazione nelle sere di weekend.' }
  ];

  readonly paymentAndParking = [
    { icon: '💳', title: 'Pagamenti', text: 'Carte di credito, contactless, Satispay; contanti accettati.' },
    { icon: '🅿️', title: 'Parcheggio', text: 'Parcheggio convenzionato a 150 m con servizio validazione ticket.' },
    { icon: '📱', title: 'Prenotazioni', text: 'Prenota online o via telefono; conferma immediata e reminder automatici.' }
  ];

  readonly services: ServiceCard[] = [
    { title: 'Accesso facilitato', description: 'Rampa sul fronte mare e sala principale senza gradini.', category: 'Accessibilità', icon: '🦽' },
    { title: 'Servizi igienici accessibili', description: 'Bagno attrezzato e spazioso al piano terra.', category: 'Accessibilità', icon: '🚻' },
    { title: 'Tavoli all’aperto', description: 'Dehor coperto fronte mare, riscaldato nelle sere fresche.', category: 'Comfort', icon: '🌿' },
    { title: 'Climatizzazione silenziosa', description: 'Sale interne con climatizzazione regolabile.', category: 'Comfort', icon: '❄️' },
    { title: 'Dog friendly', description: 'Acqua fresca e tappetini dedicati per cani educati.', category: 'Comfort', icon: '🐾' },
    { title: 'Opzioni gluten free', description: 'Pane e pasta gluten free dedicati, cucina separata per minimizzare le contaminazioni.', category: 'Cucina', icon: '🌾' },
    { title: 'Menu degustazione', description: 'Percorso di 6 portate con abbinamento vini su richiesta.', category: 'Cucina', icon: '🍽️' },
    { title: 'Pescato locale', description: 'Arrivi giornalieri dai pescherecci di Anzio e Nettuno.', category: 'Cucina', icon: '🐟' },
    { title: 'Wi‑Fi veloce', description: 'Fibra ottica disponibile in tutto il ristorante.', category: 'Digital', icon: '📶' },
    { title: 'Pagamento contactless', description: 'Apple Pay, Google Pay e Satispay supportati.', category: 'Digital', icon: '📲' },
    { title: 'Area bimbi', description: 'Seggioloni e kit disegno disponibili su richiesta.', category: 'Famiglie', icon: '🧸' },
    { title: 'Seggiolini auto', description: 'Custodia temporanea seggiolini in corner dedicato.', category: 'Famiglie', icon: '🚼' }
  ];

  readonly categories = ['Tutti', ...Array.from(new Set(this.services.map((s) => s.category)))];

  private readonly selectedCategorySignal = signal<string>('Tutti');
  readonly filteredServices = computed(() =>
    this.selectedCategorySignal() === 'Tutti'
      ? this.services
      : this.services.filter((service) => service.category === this.selectedCategorySignal())
  );

  selectCategory(category: string): void {
    this.selectedCategorySignal.set(category);
  }
}

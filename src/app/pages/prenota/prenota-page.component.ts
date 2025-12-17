import { Component, OnInit } from '@angular/core';
import flatpickr from 'flatpickr';
import { Italian } from 'flatpickr/dist/l10n/it';

@Component({
  standalone: true,
  selector: 'app-prenota-page',
  templateUrl: './prenota-page.component.html',
  styleUrls: ['./prenota-page.component.scss']
})
export class PrenotaPageComponent implements OnInit {
  ngOnInit() {
    this.initNumberInput();
    this.initDatePicker();
    this.initCustomSelect();
    this.initForm();
  }

  initNumberInput() {
    const input = document.getElementById('people') as HTMLInputElement;
    const minusBtn = document.querySelector('.number-btn.minus') as HTMLButtonElement;
    const plusBtn = document.querySelector('.number-btn.plus') as HTMLButtonElement;

    if (minusBtn && plusBtn && input) {
      minusBtn.addEventListener('click', () => {
        const current = parseInt(input.value);
        if (current > 1) {
          input.value = (current - 1).toString();
        }
      });

      plusBtn.addEventListener('click', () => {
        const current = parseInt(input.value);
        if (current < 20) {
          input.value = (current + 1).toString();
        }
      });
    }
  }

  initDatePicker() {
    const dateInput = document.getElementById('date') as HTMLInputElement;

    if (dateInput) {
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      const parentLabel = dateInput.closest('label');

      flatpickr(dateInput, {
        locale: Italian,
        minDate: today,
        dateFormat: 'Y-m-d',
        altInput: true,
        altFormat: 'D, j F',
        disableMobile: true,
        appendTo: parentLabel || undefined,
        positionElement: dateInput,
        static: false,
        onChange: (selectedDates) => {
          if (selectedDates.length > 0) {
            this.updateTimeOptions(selectedDates[0]);
          }
        }
      });
    }
  }

  updateTimeOptions(selectedDate: Date) {
    const timeSelect = document.getElementById('time-select');
    const allOptions = timeSelect?.querySelectorAll('.custom-select__option');

    if (!allOptions) return;

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const isToday = selectedDate.getTime() === today.getTime();

    allOptions.forEach(option => {
      const timeValue = option.getAttribute('data-value');
      if (timeValue && isToday) {
        const [hours, minutes] = timeValue.split(':').map(Number);
        const now = new Date();
        const timeInMinutes = hours * 60 + minutes;
        const currentTimeInMinutes = now.getHours() * 60 + now.getMinutes();

        if (timeInMinutes <= currentTimeInMinutes + 30) {
          option.classList.add('disabled');
          option.setAttribute('data-disabled', 'true');
        } else {
          option.classList.remove('disabled');
          option.removeAttribute('data-disabled');
        }
      } else {
        option.classList.remove('disabled');
        option.removeAttribute('data-disabled');
      }
    });
  }

  initCustomSelect() {
    const select = document.getElementById('time-select');
    const trigger = select?.querySelector('.custom-select__trigger');
    const options = select?.querySelectorAll('.custom-select__option');
    const valueSpan = select?.querySelector('.custom-select__value');
    const hiddenInput = document.getElementById('time') as HTMLInputElement;

    if (!select || !trigger || !options || !valueSpan || !hiddenInput) return;

    trigger.addEventListener('click', () => {
      select.classList.toggle('open');
    });

    options.forEach(option => {
      option.addEventListener('click', () => {
        if (option.getAttribute('data-disabled') === 'true') {
          return;
        }

        const value = option.getAttribute('data-value');
        if (value) {
          valueSpan.textContent = value;
          hiddenInput.value = value;

          options.forEach(opt => opt.classList.remove('selected'));
          option.classList.add('selected');

          select.classList.remove('open');
        }
      });
    });

    document.addEventListener('click', (e) => {
      if (!select.contains(e.target as Node)) {
        select.classList.remove('open');
      }
    });
  }

  initForm() {
    const form = document.getElementById('booking-form') as HTMLFormElement;
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();

        const people = (document.getElementById('people') as HTMLInputElement).value;
        const date = (document.getElementById('date') as HTMLInputElement).value;
        const time = (document.getElementById('time') as HTMLInputElement).value;

        if (!people || !date || !time) {
          alert('Per favore compila tutti i campi');
          return;
        }

        const quandooUrl = `https://www.quandoo.it/place/allo-sbarco-di-enea-108582?aid=2&date=${date}&time=${time}&partySize=${people}`;
        window.open(quandooUrl, '_blank');
      });
    }
  }
}

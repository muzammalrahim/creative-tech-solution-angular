import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    let elem = document.getElementById('navbar');
    document.addEventListener(
      'scroll',
      () => {
        if (window.scrollY > 170) {
          elem?.classList.add('menu-shrink');
          elem?.classList.add('fixed-top');
        } else {
          elem?.classList.remove('menu-shrink');
          elem?.classList.remove('fixed-top');
        }
      },
      { passive: true }
    );
    window.scrollTo(0, 0);
  }

  toService() {
    window.document
      .getElementById('services')
      ?.scrollIntoView({ behavior: 'smooth' });
  }

  toContact() {
    window.document
      .getElementById('contact')
      ?.scrollIntoView({ behavior: 'smooth' });
  }
  toHome() {
    window.document
      .getElementById('home')
      ?.scrollIntoView({ behavior: 'smooth' });
  }
  toTeam() {
    window.document
      .getElementById('team')
      ?.scrollIntoView({ behavior: 'smooth' });
  }
  toFaq() {
    window.document
      .getElementById('faq')
      ?.scrollIntoView({ behavior: 'smooth' });
  }

  toWork() {
    window.document
      .getElementById('work')
      ?.scrollIntoView({ behavior: 'smooth' });
  }

  toTestimonial() {
    window.document
      .getElementById('testimonial')
      ?.scrollIntoView({ behavior: 'smooth' });
  }
}

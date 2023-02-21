import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
  styleUrls: ['./scroll-to-top.component.css'],
})
export class ScrollToTopComponent implements OnInit {
  isVisible: boolean = false;
  isShow!: boolean;
  topPosToStartShowing = 300;

  constructor() {
    // window.addEventListener('scroll', this.toggleVisibility);
  }

  ngOnInit(): void {
    // this.checkScroll();
    // window.addEventListener('scroll', this.toggleVisibility);
  }

  // toggleVisibility() {
  //   if (window.pageYOffset > 100) {
  //     this.isVisible = true;
  //   } else {
  //     this.isVisible = false;
  //   }
  // }

  @HostListener('window:scroll')
  checkScroll() {
    // window의 scroll top
    // Both window.pageYOffset and document.documentElement.scrollTop returns the same result in all the cases. window.pageYOffset is not supported below IE 9.

    const scrollPosition =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    // console.log('[scroll]', scrollPosition);

    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }

  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  // scrollToTop() {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: 'smooth',
  //   });
  // }
}

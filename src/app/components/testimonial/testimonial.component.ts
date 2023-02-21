import { Component, OnInit } from '@angular/core';
import { Testimonial } from '../../models/Testimonial';
import { TestimonialService } from '../../service/testimonial.service';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css'],
})
export class TestimonialComponent implements OnInit {
  testimonials: Testimonial[] = [];
  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  constructor(private testimonialService: TestimonialService) {}

  ngOnInit(): void {
    this.testimonialService
      .getTestimonials()
      .subscribe((res: any) => (this.testimonials = res.data));
  }
}

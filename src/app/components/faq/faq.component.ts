import { Component, OnInit } from '@angular/core';
import { Faq } from '../../models/Faq';
import { FaqService } from '../../service/faq.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css'],
})
export class FaqComponent implements OnInit {
  id: any = 0;
  faqs: Faq[] = [];
  constructor(private faqService: FaqService) {}

  ngOnInit(): void {
    this.faqService.getFaqs().subscribe((res: any) => (this.faqs = res.data));
  }

  accordion(ids: any) {
    console.log('ids', ids);

    if (this.id === ids) {
      this.id = '';
    } else {
      this.id = ids;
    }
  }
}

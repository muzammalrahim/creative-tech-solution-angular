import { Component, OnInit } from '@angular/core';
import { Banner } from '../../models/Banner';
import { BannerService } from '../../service/banner.service';

@Component({
  selector: 'app-banners',
  templateUrl: './banners.component.html',
  styleUrls: ['./banners.component.css'],
})
export class BannersComponent implements OnInit {
  banners: Banner[] = [];
  toggle: number = 0;
  constructor(private bannerService: BannerService) {}

  ngOnInit(): void {
    this.bannerService
      .getBanners()
      .subscribe((res: any) => (this.banners = res.data));
  }

  toggleState = (i: any) => {
    this.toggle = i;
  };
}

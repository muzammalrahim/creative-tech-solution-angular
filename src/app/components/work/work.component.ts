import { Component, OnInit } from '@angular/core';
import { Work } from '../../models/Work';
import { WorkService } from '../../service/work.service';
import { Lightbox, LightboxConfig } from 'ngx-lightbox';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css'],
})
export class WorkComponent implements OnInit {
  works: Work[] = [];
  isShow: boolean = false;
  showMore: boolean = false;
  defaultWork: Work[] = [];
  workData: Work[] = [];
  public _albums: any = [];

  constructor(
    private _lightboxConfig: LightboxConfig,
    private _lightbox: Lightbox,
    private workService: WorkService
  ) {
    _lightboxConfig.fadeDuration = 1;
    _lightboxConfig.showImageNumberLabel = true;
    // _lightboxConfig.showZoom = true;
  }

  ngOnInit(): void {
    this.workService.getWorks().subscribe((res: any) => {
      res.data.map((ele: any, i: any) => {
        let projects = res.data.slice(0, 6);
        this.workData = projects;
        this.defaultWork = res.data;
        const src = ele.image2;
        const caption = ele.title;
        const thumb = ele.image;
        const album = {
          src: src,
          caption: caption,
          thumb: thumb,
        };
        return this._albums.push(album);
      });
    });
  }

  open(index: number): void {
    // open lightbox
    this._lightbox.open(this._albums, index);
  }

  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }

  showMoreHandler() {
    this.isShow = true;
    this.showMore = true;
  }

  showLessHandler() {
    this.isShow = false;
    this.showMore = false;
  }
}

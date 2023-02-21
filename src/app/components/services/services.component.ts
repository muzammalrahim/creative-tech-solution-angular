import { Component, OnInit } from '@angular/core';
import { Service } from '../../models/Service';
import { CrudService } from '../../service/crud.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent implements OnInit {
  defaultService: Service[] = [];
  serviceData: Service[] = [];
  isShow: boolean = false;
  showMore: boolean = false;
  constructor(private crudService: CrudService) {}

  ngOnInit(): void {
    this.crudService.getBooks().subscribe((res: any) => {
      let projects = res.data.slice(0, 6);
      this.serviceData = projects;
      this.defaultService = res.data;
    });
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

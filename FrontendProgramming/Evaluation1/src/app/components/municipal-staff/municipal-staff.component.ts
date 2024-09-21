import { Component, OnInit } from '@angular/core';
import { DataService } from './../../services/municipalStaff.service';

@Component({
  selector: 'app-municipal-staff',
  templateUrl: './municipal-staff.component.html',
  styleUrls: ['./municipal-staff.component.css'],
})
export class MunicipalStaffComponent implements OnInit {
  MunicipalStaff: any;

  ngOnInit(): void {}

  constructor(private dataService: DataService) {
    this.MunicipalStaff = this.dataService.getObject();
  }
}

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-table-page',
  templateUrl: './custom-table-page.component.html',
  styleUrls: ['./custom-table-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomTablePageComponent implements OnInit {
  items = [
    {
      name: 'Amomé',
      age: 12,
      hobby: 'Play guitar',
      gender: 'male',
      phone: '394857362820',
      country: 'Brazil',
    },
    {
      name: 'Amomé',
      age: 12,
      hobby: 'Play guitar',
      gender: 'male',
      phone: '394857362820',
      country: 'Brazil',
    },
    {
      name: 'Amomé',
      age: 12,
      hobby: 'Play guitar',
      gender: 'male',
      phone: '394857362820',
      country: 'Brazil',
    },
    {
      name: 'Amomé',
      age: 12,
      hobby: 'Play guitar',
      gender: 'male',
      phone: '394857362820',
      country: 'Brazil',
    },
    {
      name: 'Amomé',
      age: 12,
      hobby: 'Play guitar',
      gender: 'male',
      phone: '394857362820',
      country: 'Brazil',
    },
    {
      name: 'Amomé',
      age: 12,
      hobby: 'Play guitar',
      gender: 'male',
      phone: '394857362820',
      country: 'Brazil',
    },
  ];

  constructor() {}

  ngOnInit() {}
}

import { Component, OnInit } from '@angular/core';

import { DashboardSandbox } from '../../dashboard.sandbox';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(private dashboardSandbox: DashboardSandbox) {}

  ngOnInit() {}
}

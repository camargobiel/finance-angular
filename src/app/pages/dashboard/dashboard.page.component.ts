import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.component.html',
  styleUrls: ['./dashboard.page.component.scss']
})
export class DashboardPageComponent {
  public totalBalance = 1234245.30;
  public totalPayments = 4.30;

}

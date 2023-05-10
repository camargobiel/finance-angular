import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPageComponent } from './dashboard/dashboard.page.component';
import { SavingsPageComponent } from './savings/savings.page.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    DashboardPageComponent,
    SavingsPageComponent
  ],
  imports: [
    CommonModule,

    // Material
    MatIconModule,
  ],
  exports: [
    DashboardPageComponent,
    SavingsPageComponent
  ]
})
export class PagesModule { }

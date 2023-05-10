import { Component } from '@angular/core';
import { NavigationService } from './service/navigation.service';
import { NavigationItem } from './service/navigation.service.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  public NAVIGATION_ITEMS: NavigationItem[];
  public currentItem: string;

  constructor(
    private readonly navigationService: NavigationService,
    private readonly router: Router,
  ){
    this.NAVIGATION_ITEMS = this.navigationService.navigation;
    this.currentItem = this.navigationService.currentItem;
  }

  public changeNavigationItem(item: string): void {
    this.currentItem = item;
    this.navigationService.currentItem = item;
  }
}

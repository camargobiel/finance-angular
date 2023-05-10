import { Injectable } from '@angular/core';
import { NavigationItem } from './navigation.service.interface';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private _currentItem = 'dashboard';

  public get currentItem() {
    return this._currentItem;
  }

  public set currentItem(item) {
    this._currentItem = item;
  }

  public get navigation(): NavigationItem[] {
    return [
      {
        id: 'dashboard',
        icon: 'dashboard',
        title: 'Dashboard',
        url: '/'
      },
      {
        id: 'savings',
        icon: 'savings',
        title: 'Metas',
        url: '/savings'
      }
    ];
  }
}

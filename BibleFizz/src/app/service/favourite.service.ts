import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavouriteService {

  private favourites: string[] = [];

  constructor() {}

  addFavourite(favourite: string): void {
    if (!this.favourites.includes(favourite)) {
      this.favourites.push(favourite);
    }
  }

  getFavourites(): string[] {
    return this.favourites;
  }
}

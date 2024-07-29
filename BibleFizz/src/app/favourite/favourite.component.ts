import { Component } from '@angular/core';
import { FavouriteService } from '../service/favourite.service';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.scss']
})
export class FavouriteComponent {
  favourites: string[] = [];

  constructor(private favouritesService: FavouriteService) {}

  ngOnInit(): void {
    this.favourites = this.favouritesService.getFavourites();
  }
}

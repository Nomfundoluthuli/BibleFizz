import { Component, OnInit } from '@angular/core';
import { ChapterService } from 'src/app/service/chapter.service';
import { FavouriteService } from 'src/app/service/favourite.service';

@Component({
  selector: 'app-bible',
  templateUrl: './bible.component.html',
  styleUrls: ['./bible.component.scss']
})
export class BibleComponent implements OnInit {
  bible: any;
  chapter: number = 1;
  verse: number = 1;
  result: string = '';

  constructor(private chapterService: ChapterService, private favouritesService: FavouriteService) {}

  ngOnInit(): void {
    // Initialize or fetch default data if needed
  }

  findVerse() {
    this.chapterService.getVerse(this.chapter, this.verse).subscribe(
      data => {
        console.log("API Response:", data); // Debugging line
        if (data && data.verses) {
          const verse = data.verses.find((v: any) => v.chapter === this.chapter && v.verse === this.verse);
          this.result = verse ? `${verse.chapter}:${verse.verse} - ${verse.text}` : 'Verse not found';
        } else {
          this.result = 'Verse not found';
        }
      },
      error => {
        console.error("Error fetching verse:", error); // Error handling
        this.result = 'Error fetching verse';
      }
    );
  }

  favouriteVerse() {
    const favourite = `Ruth ${this.chapter}:${this.verse}`;
    this.favouritesService.addFavourite(favourite);
    alert(`${favourite} added to favourites.`);
  }
}

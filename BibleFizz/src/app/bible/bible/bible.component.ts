import { Component, OnInit } from '@angular/core';
import { ChapterService } from 'src/app/service/chapter.service';

@Component({
  selector: 'app-bible',
  templateUrl: './bible.component.html',
  styleUrls: ['./bible.component.scss']
})
export class BibleComponent implements OnInit {
  bible: any;
loginForm: any;
loginSuccess: any;
loginFailed: any;

  constructor(private chapter: ChapterService) {}

  ngOnInit(): void {
    this.chapter.getBible().subscribe(data => {
      console.log("Bible data:", data);
      this.bible = data;
    });
  }
}

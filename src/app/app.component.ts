import { Component } from '@angular/core';
import { DoiService } from './doi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  doi = '';
  articleInfo: any = null;
  searchHistory: string[] = [];

  constructor(private doiService: DoiService) { }

  searchDoi(doi: string = this.doi) {
    this.doi = doi;
    if (!this.searchHistory.includes(doi)) {
      this.searchHistory.push(doi);
    }
    this.doiService.getDoiInfo(this.doi)
      .subscribe(data => this.articleInfo = data, error => console.error(error));
  }
}

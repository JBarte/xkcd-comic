import { Component, OnInit } from '@angular/core';
import { Comic } from './comic';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  currentComic: Comic;
  history: Comic[] = [];
  isLoading = false;

  ngOnInit() {
    this.newComic();
  }

  previousComic() {
    if (this.history.length > 0) {
       this.currentComic = this.history.pop();
    }
  }

  newComic() {
    if(this.currentComic) {
      this.history.push(this.currentComic)
    }
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onloadstart = () => {
      this.isLoading = true;
    }
    xmlhttp.onloadend = () => {
      this.isLoading = false;
    }
    xmlhttp.onreadystatechange = () => {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        const data = JSON.parse(xmlhttp.responseText) as Comic;
        this.currentComic = data;
      }
    }
    xmlhttp.onerror = () => {
      this.currentComic = new Comic();
      this.currentComic.title = "Error while fetching comic :("
    }
    xmlhttp.open('GET', generateJson(), true);
    xmlhttp.send();

    function generateJson() {
      return `https://xkcd.com/${generateNumber(0, 1100)}/info.0.json`;
  
      function generateNumber(max: number, min: number) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
    }
  }
}



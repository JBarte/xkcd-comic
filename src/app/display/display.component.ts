import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent {

  @Input() imageUrl: string; /* "https://imgs.xkcd.com/comics/love.jpg" */
  
}

import { Component, Inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MultiplicationComponent } from "./multiplication/multiplication.component";
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MultiplicationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'לוח הכפל';
  selectedBackground = '';
  private images = [
    'assets/1.jpg',
    'assets/2.jpg',
    'assets/3.jpg',
    'assets/4.jpg',
    'assets/5.jpg',
    'assets/6.jpg',
    'assets/7.jpg',
    'assets/8.jpg',
    'assets/9.jpg',
    'assets/10.jpg',
  ];

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
    const idx = Math.floor(Math.random() * this.images.length);
    this.selectedBackground = this.images[idx];

    // const idx = Math.floor(Math.random() * this.images.length);
    // const imageUrl = this.images[idx];
    // this.document.body.style.backgroundImage = `url('${imageUrl}')`;
  }
}

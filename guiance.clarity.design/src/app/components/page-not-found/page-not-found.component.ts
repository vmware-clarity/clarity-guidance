import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.scss',
  standalone: true,
})
export class PageNotFoundComponent implements OnInit {
  constructor(private readonly title: Title) {}

  ngOnInit() {
    this.title.setTitle('Page Not Found | Clarity Guidance');
  }
}

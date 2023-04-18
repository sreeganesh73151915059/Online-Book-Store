import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-Author',
  templateUrl: './Author.component.html',
  styleUrls: ['./Author.component.css'],
})
export class AuthorComponent implements OnInit {
  author: any;

  constructor(private service: AuthorService) {
    this.service.getproducts().subscribe((data) => {
      this.author = data;
    });
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}

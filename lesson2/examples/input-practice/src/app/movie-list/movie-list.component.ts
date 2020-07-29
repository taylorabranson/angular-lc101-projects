import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'movie-list',
   templateUrl: './movie-list.component.html',
   styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
   movies = ['Toy Story', 'The Shining', 'Sleepless in Seattle', 'The Martian'];

   constructor() { }

   ngOnInit() {
   }

   // addMovie (newTitle: string) {
   //    if (!this.movies.includes(newTitle) && newTitle !== '') {
   //       this.movies.push(newTitle);
   //    } 
   //    return 'shoe';
   // }

   addMovie (newTitle: string) {
      let message = '';
      if (this.movies.includes(newTitle)) {
         message = 'Movie already in list';
      } else if (newTitle === '') {
         message = 'Must enter movie name';
      } else {
         this.movies.push(newTitle);
      }
      return message;
   }

}
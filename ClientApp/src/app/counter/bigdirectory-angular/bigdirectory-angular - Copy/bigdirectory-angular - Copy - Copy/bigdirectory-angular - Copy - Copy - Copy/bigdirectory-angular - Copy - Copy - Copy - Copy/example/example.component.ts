import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter, switchMap } from 'rxjs/operators';
import { BookFacade } from '../store/book.facade';
import { getAllBooks } from '../store/selectors/book.selectors';
import { Book, BookState } from '../store/state/book.state';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent implements OnInit {

  public constructor(private readonly store: Store<BookState>) {}

  ngOnInit(): void {

    /*this.bookFacade.loaded$
    .pipe(
      filter((isLoaded: boolean) => isLoaded === true),
      switchMap(() => this.bookFacade.allBooks$)
    )
    .subscribe((books: Book[]) => {

      console.log("Books in Example: " + books);
    });*/

    this.store.select(getAllBooks).subscribe(books =>{

      console.log("Books in Example: " + books[0]?.author);
    });
}



}

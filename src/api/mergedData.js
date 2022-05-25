// import axios from "axios";
import { getSingleAuthor } from './authorData';
import { getSingleBook } from './bookData';

const viewBookDetails = (bookFirebaseKey) => new Promise((resolve, reject) => {
  getSingleBook(bookFirebaseKey)
    .then((bookObject) => {
      getSingleAuthor(bookObject.author_id)
        .then((authorObject) => {
          resolve({ authorObject, ...bookObject });
        });
    }).catch((error) => reject(error));
});

const viewAuthorDetails = (authorFirebaseKey) => new Promise((resolve, reject) => {
  getSingleAuthor(authorFirebaseKey)
    .then((authorObject) => {
      getSingleBook(authorObject.author_id)
        .then((bookObject) => {
          resolve({ bookObject, ...authorObject });
        });
    }).catch((error) => reject(error));
});

export { viewBookDetails, viewAuthorDetails };

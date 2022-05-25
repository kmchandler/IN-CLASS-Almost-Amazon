import { getAuthors } from '../../api/authorData';
import { getBooks } from '../../api/bookData';
import { showAuthors } from '../components/pages/authors';

const formEvents = () => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    // TODO: CLICK EVENT FOR SUBMITTING FORM FOR ADDING A BOOK -- NOT WORKING PROPERLY!!
    if (e.target.id.includes('submit-book')) {
      const addBookFormData = document.querySelector('#submit-book').value;
      getBooks()
        .then((booksArray) => {
          booksArray.push(addBookFormData)
            .then((showAuthors(booksArray)));
        });
    }

    // TODO: CLICK EVENT FOR EDITING A BOOK
    if (e.target.id.includes('update-book')) {
      const [, firebaseKey] = e.target.id.split('--');
      console.warn('CLICKED UPDATE BOOK', e.target.id);
      console.warn(firebaseKey);
    }

    // FIXME: ADD CLICK EVENT FOR SUBMITTING FORM FOR ADDING AN AUTHOR -- NOT WORKING PROPERLY!!
    if (e.target.id.includes('submit-author')) {
      const addAuthorFormData = document.querySelector('#submit-author').value;
      getAuthors()
        .then((authorsArray) => {
          authorsArray.push(addAuthorFormData)
            .then((showAuthors(authorsArray)));
        });
    }

    // FIXME:ADD CLICK EVENT FOR EDITING AN AUTHOR
  });
};

export default formEvents;

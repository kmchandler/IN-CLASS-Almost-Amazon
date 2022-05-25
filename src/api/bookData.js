import axios from 'axios';
import firebaseConfig from './apiKeys';
// API CALLS FOR BOOKS

const dbUrl = firebaseConfig.databaseURL;

// GET BOOKS
const getBooks = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/books.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

// DELETE BOOK
const deleteBook = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/books/${firebaseKey}.json`)
    .then(() => {
      getBooks().then((booksArray) => resolve(booksArray));
    })
    .catch((error) => reject(error));
});

// GET SINGLE BOOK
const getSingleBook = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/books/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

// TODO: CREATE BOOK
const createBook = () => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/books.json`, {
    title: 'How to be Sexy?',
    sale: false,
    price: 25.99,
    image: 'https://firebasestorage.googleapis.com/v0/b/almost-1564e.appspot.com/o/books%2Fchicken.jpg?alt=media&token=77e7cf36-4f72-4ee0-a487-dd1d366ced63',
    author_id: '-MTpcli73mfiIqW0lpPe'
  })
    .then(() => {
      getBooks().then((booksArray) => resolve(booksArray));
    })
    .catch((error) => reject(error));
});

// TODO: UPDATE BOOK
const updateBook = (firebaseKey) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/books/${firebaseKey}.json`, {
    title: 'How to be Sexy?',
    sale: false,
    price: 25.99,
    image: 'https://firebasestorage.googleapis.com/v0/b/almost-1564e.appspot.com/o/books%2Fchicken.jpg?alt=media&token=77e7cf36-4f72-4ee0-a487-dd1d366ced63',
    author_id: '-MTpcli73mfiIqW0lpPe'
  })
    .then(() => {
      getBooks().then((booksArray) => resolve(booksArray));
    })
    .catch((error) => reject(error));
});

// FILTER BOOKS ON SALE
const booksOnSale = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/books.json?orderBy="sale"&equalTo=true`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

// TODO: STRETCH...SEARCH BOOKS

export {
  getBooks,
  createBook,
  booksOnSale,
  deleteBook,
  getSingleBook,
  updateBook,
};

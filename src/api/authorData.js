import axios from 'axios';
import firebaseConfig from './apiKeys';

const dbUrl = firebaseConfig.databaseURL;

// GET ALL AUTHORS
const getAuthors = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/authors.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

// FIXME: CREATE AUTHOR
const createAuthor = () => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/authors.json`, {
    author_id: '-MiBv9_aOEJQWoobjz_U',
    description: '__',
    firebaseKey: '-MiBvEFJTI3FmTzDu_3V',
    image: 'https://res.cloudinary.com/bloomsbury-atlas/image/upload/w_360,c_scale/jackets/9781526622402.jpg',
    price: '12.99',
    sale: true,
    title: 'Hood Feminism',
    uid: '__'
  })
    .then(() => {
      getAuthors().then((authorsArray) => resolve(authorsArray));
    })
    .catch((error) => reject(error));
});

// GET SINGLE AUTHOR
const getSingleAuthor = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/authors/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

// DELETE AUTHOR
const deleteSingleAuthor = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/authors/${firebaseKey}.json`)
    .then(() => {
      getAuthors().then((booksArray) => resolve(booksArray));
    })
    .catch((error) => reject(error));
});

// FIXME: UPDATE AUTHOR
const updateAuthor = (firebaseKey) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/authors/${firebaseKey}.json`, {
    title: 'How to be Sexy?'
  })
    .then(() => {
      getAuthors().then((authorsArray) => resolve(authorsArray));
    })
    .catch((error) => reject(error));
});

// GET A SINGLE AUTHOR'S BOOKS
const getAuthorBooks = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/books.json?orderBy="author_id"&equalTo="${firebaseKey}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

// GET FAVORITE AUTHOR
const favAuthors = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/authors.json?orderBy="favorite"&equalTo=true`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

export {
  getAuthors,
  createAuthor,
  getSingleAuthor,
  deleteSingleAuthor,
  updateAuthor,
  getAuthorBooks,
  favAuthors
};

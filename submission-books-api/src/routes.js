const { query } = require('@hapi/hapi/lib/validation');
const {addBooksHandler, getAllBooksHandler, getBooksByIdHandler, editBooksByIdHandler, deleteBooksByIdHandler} = require('./handler');

const routes = [
    {
        path: '/books',
        method: 'POST',
        handler: addBooksHandler,
    },
    {
        path: '/books',
        method: 'GET',
        handler: getAllBooksHandler,
    },
    {
        path: '/books/{bookId}',
        method: 'GET',
        handler: getBooksByIdHandler,
    },
    {
        path: '/books/{bookId}',
        method: 'PUT',
        handler: editBooksByIdHandler,
    },
    {
        path: '/books/{bookId}',
        method: 'DELETE',
        handler: deleteBooksByIdHandler,
    }
]

module.exports = routes;
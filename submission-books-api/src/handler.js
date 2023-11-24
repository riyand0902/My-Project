const { nanoid } = require('nanoid');
const books = require('./books');

const addBooksHandler = (request, h) => {
  const data = request.payload;
  if (!data.name) {
    return h.response({
      status: 'fail',
      message: 'Gagal menambahkan buku. Mohon isi nama buku',
    }).code(400);
  }
  if (data.readPage > data.pageCount) {
    return h.response({
      status: 'fail',
      message: 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount',
    }).code(400);
  }
  const id = nanoid(20);
  const finished = data.pageCount - data.readPage == 0;
  const insertedAt = new Date().toISOString();
  const updatedAt = insertedAt;
  books.push({
    id, ...data, finished, insertedAt, updatedAt,
  });
  const isSuccess = books.filter((note) => note.id === id).length > 0; 
  if (isSuccess) {
    return h.response({
      status: 'success',
      message: 'Buku berhasil ditambahkan',
      data: {
        bookId: id,
      },
    }).code(201);
  }
  return h.response({
    status: 'fail',
    message: 'Buku gagal ditambahkan',
  }).code(500);
};

const getAllBooksHandler = (request, h) => {
  const mapBooks = books.map((elm) => ({ id: elm.id, name: elm.name, publisher: elm.publisher }));
  return h.response({
    status: 'success',
    data: {
      books: mapBooks,
    },
  }).code(200);
};

const getBooksByIdHandler = (request, h) => {
  const { bookId } = request.params;
  const book = books.filter((n) => n.id === bookId)[0];
  if (book) {

    return h.response({
      status: 'success',
      data: {
        book,
      },
    }).code(200);
  }
  return h.response({
    status: 'fail',
    message: 'Buku tidak ditemukan',
  }).code(404);
};

const editBooksByIdHandler = (request, h) => {
  const { bookId } = request.params;
  const data = request.payload;
  const targetIndex = books.findIndex((elm) => elm.id === bookId);
  const finished = data.pageCount - data.readPage == 0;
  if (!data.name) {
    return h.response({
      status: 'fail',
      message: 'Gagal memperbarui buku. Mohon isi nama buku',
    }).code(400);
  }
  if (data.readPage > data.pageCount) {
    return h.response({
      status: 'fail',
      message: 'Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount',
    }).code(400);
  }
  if (targetIndex < 0) {
    return h.response({
      status: 'fail',
      message: 'Gagal memperbarui buku. Id tidak ditemukan',
    }).code(404);
  }
  const { insertedAt } = books[targetIndex];
  const updatedAt = new Date().toISOString();
  books.splice(targetIndex, 1);
  books.push({
    id: bookId, ...data, finished, insertedAt, updatedAt,
  });
  return h.response({
    status: 'success',
    message: 'Buku berhasil diperbarui',
  }).code(200);
};

const deleteBooksByIdHandler = (request, h) => {
  const { bookId } = request.params;
  const index = books.findIndex((note) => note.id === bookId); 
  if (index !== -1) {
    books.splice(index, 1);
    return h.response({
      status: 'success',
      message: 'Buku berhasil dihapus',
    }).code(200);
  }
  return h.response({
    status: 'fail',
    message: 'Buku gagal dihapus. Id tidak ditemukan',
  }).code(404);
};


module.exports = {
  addBooksHandler, getAllBooksHandler, getBooksByIdHandler, editBooksByIdHandler, deleteBooksByIdHandler };

import { change } from '../dbScript';

change(async (db) => {
  await db.createEnum('public.role', ['admin', 'librarian', 'user']);

  await db.createTable('book', (t) => ({
    id: t.serial().primaryKey(),
    isbn: t.string().unique(),
    title: t.string(),
    author: t.string(),
    publisher: t.string(),
    publishedYear: t.string(),
    genre: t.string(),
    quantity: t.integer(),
    available: t.boolean(),
    ...t.timestamps(),
  }));

  await db.createTable('bookBorrowData', (t) => ({
    id: t.serial().primaryKey(),
    userId: t.integer(),
    bookId: t.integer(),
    borrowDate: t.timestamp(),
    returnDate: t.date().nullable(),
    overDueDays: t.integer().nullable(),
    maxBorrowDays: t.integer().nullable().default(60),
    ...t.timestamps(),
  }));
});

change(async (db) => {
  await db.createTable('user', (t) => ({
    id: t.serial().primaryKey(),
    name: t.string(),
    email: t.string().unique(),
    password: t.string(),
    role: t.enum('role'),
    ...t.timestamps(),
  }));
});

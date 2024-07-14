import {
  adminProcedure,
  protectedProcedure,
  publicProcedure,
  router,
} from "../context.trpc";
import z from "zod";
import { db } from "../db/db.config";
import { uptime } from "process";

export const bookController = router({
  getAllBooks: publicProcedure
    .query(async ({ input, ctx }) => {
      const books = await db.books.select();
      console.log(`fetched ${books} books from db`);
      return books;
    }),
  getBooks: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(async ({ input, ctx }) => {
      const books = await db.books.where({ id: input.id }).select();
      console.log(`fetched ${books} books from db`);
      return books;
    }),
  getBooksByIsbn: publicProcedure
    .input(z.object({ isbn: z.string() }))
    .query(async ({ input, ctx }) => {
      const books = await db.books.where({ isbn: input.isbn }).select();
      console.log(`fetched ${books} books from db`);
      return books;
    }),
  getBooksByTitle: publicProcedure
    .input(z.object({ title: z.string() }))
    .query(async ({ input, ctx }) => {
      const books = await db.books.where({ title: input.title }).select();
      console.log(`fetched ${books} books from db`);
      return books;
    }),
  getBooksByAuthor: publicProcedure
    .input(z.object({ author: z.string() }))
    .query(async ({ input, ctx }) => {
      const books = await db.books.where({ author: input.author }).select();
      console.log(`fetched ${books} books from db`);
      return books;
    }),
  getBooksByPublisher: publicProcedure
    .input(z.object({ publisher: z.string() }))
    .query(async ({ input, ctx }) => {
      const books = await db.books
        .where({ publisher: input.publisher })
        .select();
      console.log(`fetched ${books} books from db`);
      return books;
    }),
  getBooksByPublishedYear: publicProcedure
    .input(z.object({ publishedYear: z.string() }))
    .query(async ({ input, ctx }) => {
      const books = await db.books
        .where({ publishedYear: input.publishedYear })
        .select();
      console.log(`fetched ${books} books from db`);
      return books;
    }),
  getBooksByGenre: publicProcedure
    .input(z.object({ genre: z.string() }))
    .query(async ({ input, ctx }) => {
      const books = await db.books.where({ genre: input.genre }).select();
      console.log(`fetched ${books} books from db`);
      return books;
    }),
  getBooksByAvailable: publicProcedure
    .input(z.object({ available: z.boolean() }))
    .query(async ({ input, ctx }) => {
      const books = await db.books
        .where({ available: input.available })
        .select();
      console.log(`fetched ${books} books from db`);
      return books;
    }),
  addBook: publicProcedure
    .input(
      z.array(
        z.object({
          isbn: z.string(),
          title: z.string(),
          author: z.string(),
          publisher: z.string(),
          publishedYear: z.string(),
          genre: z.string(),
          quantity: z.number(),
          available: z.boolean(),
          image: z.string(),
          description: z.string(),
        })
      )
    )
    .query(async ({ input, ctx }) => {
      const addBooksToDB = await db.books.insertMany(input);
      console.log(`added ${addBooksToDB} books to db`);

      return `added ${addBooksToDB} books to db`;
    }),

  deleteBook: publicProcedure
    .input(z.array(z.number()))
    .query(async ({ input, ctx }) => {
      const deleteBooksFromDB = await db.books.whereIn("id", input).delete();
      console.log(`deleted ${deleteBooksFromDB} books from db`);
      return `deleted ${deleteBooksFromDB} books from db`;
    }),
  updateBook: publicProcedure
    .input(
      z.object({
        id: z.number(),
        isbn: z.string(),
        title: z.string(),
        author: z.string(),
        publisher: z.string(),
        publishedYear: z.string(),
        genre: z.string(),
        quantity: z.number(),
        available: z.boolean(),
        image: z.string(),
        description: z.string(),
      })
    )
    .query(async ({ input, ctx }) => {
      const updateBooksInDB = await db.books
        .where({ id: input.id })
        .update(input);
      console.log(`updated ${updateBooksInDB} books in db`);
      return `updated ${updateBooksInDB} books in db`;
    }),
  getBooksBorrowedByUser: publicProcedure.query(async ({ ctx }) => {
    // @ts-ignore
    console.log(ctx.user!.user[0].id);
    const books = await db.bookBorrowDataTable
      // @ts-ignore
      .where({ userId: Number(ctx.user!.user[0].id!) })
      .select();
    console.log(`fetched ${books} books from db`);
    return books;
  }),
});

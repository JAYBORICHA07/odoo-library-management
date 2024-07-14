import { Queryable, Selectable, Updatable } from "orchid-orm";
import { BaseTable } from "./baseTable";
import { BookBorrowDataTable } from "./bookBorrowData.table";

export class BookTable extends BaseTable {
  readonly table = "book";
  columns = this.setColumns((t) => ({
    id: t.autoId(),
    isbn: t.string().trim().unique(),
    title: t.string().trim(),
    author: t.string().trim(),
    publisher: t.string().trim(),
    publishedYear: t.string().trim(),
    image: t.string().trim(),
    description: t.text(),
    genre: t.string().trim(),
    quantity: t.integer(),
    available: t.boolean(),
    createdAt: t.createdAt,
    updatedAt: t.updatedAt,
  }));

  relations = {
    bookBorrowData: this.hasMany(() => BookBorrowDataTable, {
      columns: ["id"],
      references: ["bookId"],
    }),
  };
}

export type Book = Selectable<BookTable>;
export type BookUpdate = Updatable<BookTable>;
export type BookForQuery = Queryable<BookTable>;

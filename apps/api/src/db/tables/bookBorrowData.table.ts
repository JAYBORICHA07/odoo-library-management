import { Queryable, Selectable, Updatable } from "orchid-orm";
import { BaseTable } from "./baseTable";
import { UserTable } from "./user.table";
import { BookTable } from "./book.table";

export class BookBorrowDataTable extends BaseTable {
  readonly table = "bookBorrowData";
  columns = this.setColumns((t) => ({
    id: t.autoId(),
    userId: t.integer(),
    bookId: t.integer(),
    borrowDate: t.timestamp(),
    returnDate: t.date().nullable(),
    overDueDays: t.integer().nullable(),
    maxBorrowDays: t.integer().nullable().default(60),
    createdAt: t.createdAt,
    updatedAt: t.updatedAt,
  }));

  relations = {
    user: this.belongsTo(() => UserTable, {
      required: true,
      columns: ["userId"],
      references: ["id"],
    }),
    book: this.belongsTo(() => BookTable, {
      required: true,
      columns: ["bookId"],
      references: ["id"],
    }),
  };
}

export type BookBorrowData = Selectable<BookBorrowDataTable>;
export type BookBorrowDataUpdate = Updatable<BookBorrowDataTable>;
export type BookBorrowDataForQuery = Queryable<BookBorrowDataTable>;

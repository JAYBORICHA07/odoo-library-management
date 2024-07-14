import { Queryable, Selectable, Updatable } from "orchid-orm";
import { BaseTable } from "./baseTable";
import { BookBorrowDataTable } from "./bookBorrowData.table";

export class UserTable extends BaseTable {
  readonly table = "user";
  columns = this.setColumns((t) => ({
    id: t.autoId(),
    name: t.string().trim(),
    email: t.string().trim().unique(),
    password: t.string().trim(),
    role: t.enum("role", ["admin", "librarian", "user"]),
    createdAt: t.createdAt,
    updatedAt: t.updatedAt,
  }));

  relations = {
    bookBorrowData: this.hasMany(() => BookBorrowDataTable, {
      columns: ["id"],
      references: ["userId"],
    }),
  };
}
export type User = Selectable<UserTable>;
export type UserUpdate = Updatable<UserTable>;
export type UserForQuery = Queryable<UserTable>;

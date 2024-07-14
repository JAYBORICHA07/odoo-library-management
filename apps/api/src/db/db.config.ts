import { orchidORM } from "orchid-orm";
import { env } from "../configs/env.config";
import { UserTable } from "./tables/user.table";
import { BookTable } from "./tables/book.table";
import { BookBorrowDataTable } from "./tables/bookBorrowData.table";

export const db = orchidORM(
  {
    // biome-ignore lint/style/useNamingConvention: <as needed by library>
    databaseURL: (env.DB_TEST_URL as string) ?? (env.DB_URL as string),
    max: 100,
    min: 10,
  },
  {
    user: UserTable,
    books: BookTable,
    bookBorrowDataTable: BookBorrowDataTable,
  }
);

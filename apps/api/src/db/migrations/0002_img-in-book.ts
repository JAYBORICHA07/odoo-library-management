import { change } from '../dbScript';

change(async (db) => {
  await db.changeTable('book', (t) => ({
    image: t.add(t.string()),
  }));
});

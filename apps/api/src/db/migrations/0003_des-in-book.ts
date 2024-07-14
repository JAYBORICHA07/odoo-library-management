import { change } from '../dbScript';

change(async (db) => {
  await db.changeTable('book', (t) => ({
    description: t.add(t.text()),
  }));
});

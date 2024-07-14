import { change } from '../dbScript';

change(async (db) => {
  await db.createEnum('public.role', ['admin', 'librarian', 'user']);
});

change(async (db) => {
  await db.changeTable('user', (t) => ({
    password: t.add(t.string()),
    role: t.add(t.enum('role')),
    isVerified: t.drop(t.boolean()),
    profilePicture: t.drop(t.varchar(255)),
    ...t.add(t.timestamps()),
  }));
});

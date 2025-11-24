# CRUD

The goal is to define our model’s fields once and derive every CRUD shape from that single source of truth. This avoids duplication, keeps read/write/update logic perfectly in sync, and ensures both TypeScript and Zod validate data consistently at every layer. Defaults, required fields, and read-only metadata all fall out naturally without needing separate hand-written schemas.

```ts
export const bookBaseSchema = z.object({
  title: z.string(),
  author: z.string(),
  price: z.number().default(0),
  tags: z.array(z.string()).default([]),
});

export const bookWriteSchema = bookBaseSchema;
export const bookUpdateSchema = bookBaseSchema.partial();

export const bookReadSchema = bookBaseSchema.extend({
  _id: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

type BookWrite = z.input<typeof bookWriteSchema>;
type BookUpdate = z.input<typeof bookUpdateSchema>;
type BookRead = z.input<typeof bookReadSchema>;

const createBook = (book: BookWrite) => bookBaseSchema.parse(book);
```

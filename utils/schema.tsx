import { pgTable, serial, timestamp, text, varchar } from "drizzle-orm/pg-core";

export const AIOutput = pgTable('aiOutput', {
    id: serial('id').primaryKey(),
    FormData: varchar('formData').notNull(),
    aiResponse: text('aiResponse'),
    templateSlug: varchar('templateSlug').notNull(),
    created_at: timestamp('created_at').defaultNow(),  // This remains as timestamp
    created_by: varchar('userName').notNull()
});

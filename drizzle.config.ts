import type { Config } from "drizzle-kit";

// DATABASE_URL is only needed for commands that talk to the database (migrate/push);
// `drizzle-kit generate` works offline from the schema and snapshots.
const connectionString = process.env.DATABASE_URL ?? "";

export default {
  schema: "./drizzle/schema.ts",
  out: "./drizzle",
  dialect: "mysql",
  dbCredentials: {
    url: connectionString,
  },
} satisfies Config;

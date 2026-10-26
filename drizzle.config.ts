// Plain config object so the file loads even when drizzle-kit is run via npx
// without being resolvable from the project. `generate` needs no credentials.
export default {
  schema: "./schema.ts",
  out: ".",
  dialect: "mysql",
  dbCredentials: {
    url: process.env.DATABASE_URL ?? "",
  },
};

import { boolean, index, int, mysqlEnum, mysqlTable, text, timestamp, varchar } from "drizzle-orm/mysql-core";

export const users = mysqlTable("users", {
  id: int("id").autoincrement().primaryKey(),
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

export const photoSubmissions = mysqlTable("photo_submissions", {
  id: int("id").autoincrement().primaryKey(),
  contributorName: varchar("contributorName", { length: 80 }).notNull(),
  placeName: varchar("placeName", { length: 100 }).notNull(),
  location: varchar("location", { length: 180 }).notNull(),
  caption: text("caption"),
  placeImageKey: varchar("placeImageKey", { length: 240 }).notNull(),
  profileImageKey: varchar("profileImageKey", { length: 240 }).notNull(),
  consentToPublicDisplay: boolean("consentToPublicDisplay").notNull().default(false),
  consentVersion: varchar("consentVersion", { length: 40 }).notNull(),
  consentedAt: timestamp("consentedAt").notNull(),
  status: mysqlEnum("status", ["pending", "approved", "rejected"]).default("pending").notNull(),
  isFeatured: boolean("isFeatured").default(false).notNull(),
  autoPublished: boolean("autoPublished").default(false).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  reviewedAt: timestamp("reviewedAt"),
  reviewedBy: varchar("reviewedBy", { length: 64 }),
}, table => ({ statusCreatedIdx: index("photo_status_created_idx").on(table.status, table.createdAt) }));

export const photoUploads = mysqlTable("photo_uploads", {
  key: varchar("key", { length: 240 }).primaryKey(),
  kind: mysqlEnum("kind", ["place", "profile"]).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  usedAt: timestamp("usedAt"),
}, table => ({ createdIdx: index("photo_upload_created_idx").on(table.createdAt) }));

export type PhotoSubmission = typeof photoSubmissions.$inferSelect;
export type NewPhotoSubmission = typeof photoSubmissions.$inferInsert;

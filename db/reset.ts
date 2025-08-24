// reset.ts
import { sql } from "drizzle-orm";
import { db } from "./drizzle";

if (!("DATABASE_URL" in process.env)) {
  throw new Error("DATABASE_URL not found in .env");
}

async function reset() {
  console.log("⏳ Resetting database...");
  const start = Date.now();

  const query = sql`
    DO $$ DECLARE
      r RECORD;
    BEGIN
      FOR r IN (SELECT tablename FROM pg_tables WHERE schemaname = 'public') LOOP
        EXECUTE 'DROP TABLE IF EXISTS ' || quote_ident(r.tablename) || ' CASCADE';
      END LOOP;
    END $$;
  `;

  await db.execute(query);
  const end = Date.now();
  console.log(`✅ Database reset completed in ${end - start}ms`);
  process.exit(0);
}

reset().catch((err) => {
  console.error("❌ Reset failed");
  console.error(err);
  process.exit(1);
});

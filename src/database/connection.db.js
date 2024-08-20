import { createClient } from '@libsql/client';

export const connection = createClient({
  url: process.env.TURSO_DATABASE_URL,
  authToken: process.env.TURSO_AUTH_TOKEn,
})

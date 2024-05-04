'use server';

import { auth, youtube } from '@googleapis/youtube';
import { sql } from './postgres';
import {
  unstable_cache as cache,
  unstable_noStore as noStore,
} from 'next/cache';

let googleAuth = new auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY,
  },
  scopes: ['https://www.googleapis.com/auth/youtube.readonly'],
});

let yt = youtube({
  version: 'v3',
  auth: googleAuth,
});

export async function getBlogViews() {
  if (!process.env.POSTGRES_URL) {
    return [];
  }

  noStore();
  let views = await sql`
    SELECT count
    FROM views
  `;

  return views.reduce((acc, curr) => acc + Number(curr.count), 0);
}

export async function getViewsCount(): Promise<
  { slug: string; count: number }[]
> {
  if (!process.env.POSTGRES_URL) {
    return [];
  }

  noStore();
  return sql`
    SELECT slug, count
    FROM views
  `;
}

export async function getGuestbookEntries() {
  if (!process.env.POSTGRES_URL) {
    return [];
  }

  noStore();
  return sql`
    SELECT id, body, created_by, updated_at
    FROM guestbook
    ORDER BY created_at DESC
    LIMIT 100
  `;
}

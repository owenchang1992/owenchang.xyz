'use server';

import { auth } from 'app/auth';
import { type Session } from 'next-auth';
import db from './db'
import { revalidatePath, unstable_noStore as noStore } from 'next/cache';

export async function increment(slug: string) {
  noStore();
  const views = await db.views.upsert({
    create: {
      slug,
      count: 1
    },
    update: {
      slug,
      count: { increment: 1 }
    },
    where: { slug }
  });
}

async function getSession(): Promise<Session> {
  let session = await auth();
  if (!session || !session.user) {
    throw new Error('Unauthorized');
  }

  return session;
}


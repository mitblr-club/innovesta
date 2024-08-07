'use server';

import { siteConfig } from '@/config/site';

export async function getEventPosts() {
  const res = await fetch(
    `https://notion-api.splitbee.io/v1/table/${siteConfig.eventsTableId}`,
    { next: { revalidate: 60 } }
  );
  const events = await res.json();

  return events;
}

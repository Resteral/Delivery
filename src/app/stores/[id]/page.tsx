import React from 'react';
import { businesses } from '@/lib/data';
import { notFound } from 'next/navigation';
import StoreClient from './StoreClient';

export async function generateStaticParams() {
  return businesses.map((bz) => ({ id: bz.id }));
}

export default function StorePage({ params }: { params: { id: string } }) {
  const { id } = params;
  const store = businesses.find(b => b.id === id);

  if (!store) notFound();

  return <StoreClient store={store} />;
}

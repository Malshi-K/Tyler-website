'use client'

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container mx-auto py-12 px-4 text-center">
      <h2 className="text-3xl font-bold text-navy">Page Not Found</h2>
      <p className="mt-4">Sorry, we couldn&apos;t find the page you were looking for.</p>
      <Link href="/" className="mt-6 inline-block px-6 py-2 bg-orange text-white rounded-full">
        Return to Home
      </Link>
    </div>
  );
}
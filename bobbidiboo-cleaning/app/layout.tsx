import type { Metadata } from 'next';
import './globals.css';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Bobbi Di Boo Cleaning | Residential, Commercial & Industrial',
  description: 'Professional cleaning services for residential, commercial, and industrial spaces. Book a free quote.',
  metadataBase: new URL('https://www.bobbidiboocleaning.com'),
  openGraph: {
    title: 'Bobbi Di Boo Cleaning',
    description: 'Professional cleaning services for every space',
    url: 'https://www.bobbidiboocleaning.com',
    siteName: 'Bobbi Di Boo Cleaning'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="border-b">
          <nav className="container flex h-16 items-center justify-between">
            <Link href="/" className="text-xl font-semibold">Bobbi Di Boo Cleaning</Link>
            <div className="flex items-center gap-6 text-sm">
              <Link href="/residential" className="hover:underline">Residential</Link>
              <Link href="/commercial" className="hover:underline">Commercial</Link>
              <Link href="/industrial" className="hover:underline">Industrial</Link>
              <Link href="/contact" className="btn">Get a Quote</Link>
            </div>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="mt-20 border-t py-12 text-sm">
          <div className="container flex flex-col justify-between gap-4 md:flex-row">
            <p>© {new Date().getFullYear()} Bobbi Di Boo Cleaning</p>
            <p>
              Email: <a className="underline" href="mailto:info@bobbidiboocleaning.com">info@bobbidiboocleaning.com</a>
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}


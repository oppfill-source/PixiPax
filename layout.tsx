export const metadata = {
  title: 'Pixipax Cleaning Services | RDU Triangle',
  description:
    'Residential, Airbnb, commercial & industrial cleaning across Raleigh, Durham, Cary and Chapel Hill. Eco-friendly products, vetted pros, and a 24‑hour satisfaction guarantee. Book online.',
  openGraph: {
    title: 'Pixipax Cleaning Services | RDU Triangle',
    description:
      'Fresh. Fast. Flawless. Professional cleaning for homes, offices & short‑term rentals in RDU.',
    url: 'https://pixipax.com',
    type: 'website'
  }
};

import './globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

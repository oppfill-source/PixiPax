import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-slate-50">
        <div className="container grid gap-10 py-20 md:grid-cols-2 md:items-center">
          <div>
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              Sparkling clean spaces. On time. Every time.
            </h1>
            <p className="mt-4 text-slate-600">
              Residential, commercial, and industrial cleaning tailored to your needs.
            </p>
            <div className="mt-8 flex gap-4">
              <Link href="/contact" className="btn">Get a Free Quote</Link>
              <Link href="#services" className="inline-flex items-center underline">Our Services →</Link>
            </div>
          </div>
          <div className="aspect-video w-full rounded-xl bg-slate-200"></div>
        </div>
      </section>

      <section id="services" className="container py-16">
        <h2 className="text-2xl font-semibold">Services</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <ServiceCard title="Residential" href="/residential" description="Kitchens, bathrooms, bedrooms, living areas, move-in/out." />
          <ServiceCard title="Commercial" href="/commercial" description="Offices, retail, restaurants, common areas, post-construction." />
          <ServiceCard title="Industrial" href="/industrial" description="Warehouses, plants, high-dust, equipment and floor care." />
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="container">
          <h2 className="text-2xl font-semibold">Why choose us</h2>
          <ul className="mt-6 grid gap-4 md:grid-cols-3">
            <li className="rounded-lg border bg-white p-6">Insured and vetted pros</li>
            <li className="rounded-lg border bg-white p-6">Eco-friendly supplies on request</li>
            <li className="rounded-lg border bg-white p-6">Flexible scheduling and fair pricing</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ title, description, href }: { title: string; description: string; href: string }) {
  return (
    <Link href={href} className="block rounded-lg border p-6 hover:shadow-md">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-slate-600">{description}</p>
      <span className="mt-4 inline-block text-brand">Learn more →</span>
    </Link>
  );
}


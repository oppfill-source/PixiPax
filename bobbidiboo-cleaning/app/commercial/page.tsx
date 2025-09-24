import Link from 'next/link';

export default function CommercialPage() {
  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold">Commercial Cleaning</h1>
      <p className="mt-2 text-slate-600">Offices, retail, restaurants, and common areas. Tell us your area in sq ft.</p>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <Placeholder title="Office" />
        <Placeholder title="Retail" />
        <Placeholder title="Restaurant" />
        <Placeholder title="Lobby / Common" />
        <Placeholder title="Post-construction" />
        <Placeholder title="Restrooms" />
      </div>

      <div className="mt-10">
        <Link href="/contact?service=commercial" className="btn">Request a Quote</Link>
      </div>
    </div>
  );
}

function Placeholder({ title }: { title: string }) {
  return (
    <div className="rounded-lg border bg-white">
      <div className="aspect-video w-full rounded-t-lg bg-slate-200"></div>
      <div className="p-4">
        <h3 className="font-semibold">{title}</h3>
      </div>
    </div>
  );
}


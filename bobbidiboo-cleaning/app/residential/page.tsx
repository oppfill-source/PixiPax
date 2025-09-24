import Link from 'next/link';

export default function ResidentialPage() {
  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold">Residential Cleaning</h1>
      <p className="mt-2 text-slate-600">Bedrooms, kitchens, living rooms, bathrooms, and more.</p>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <Placeholder title="Bedrooms" />
        <Placeholder title="Kitchen" />
        <Placeholder title="Living Room" />
        <Placeholder title="Bathrooms" />
        <Placeholder title="Hallways" />
        <Placeholder title="Move in/out" />
      </div>

      <div className="mt-10">
        <Link href="/contact?service=residential" className="btn">Request a Quote</Link>
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


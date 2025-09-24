import Link from 'next/link';

export default function IndustrialPage() {
  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold">Industrial Cleaning</h1>
      <p className="mt-2 text-slate-600">Warehouses, plants, and specialized equipment areas. Provide total area and scope.</p>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <Placeholder title="Warehouse" />
        <Placeholder title="Production Floor" />
        <Placeholder title="Equipment / Machinery" />
        <Placeholder title="High Dusting" />
        <Placeholder title="Floor Care" />
        <Placeholder title="Hazard-aware" />
      </div>

      <div className="mt-10">
        <Link href="/contact?service=industrial" className="btn">Request a Quote</Link>
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


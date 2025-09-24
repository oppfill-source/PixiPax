"use client";
import { useSearchParams } from 'next/navigation';
import { Suspense, useState } from 'react';

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="container py-10">Loading...</div>}>
      <ContactForm />
    </Suspense>
  );
}

function ContactForm() {
  const searchParams = useSearchParams();
  const defaultService = searchParams.get('service') ?? '';
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(formData: FormData) {
    setSubmitting(true);
    setError(null);
    setSent(false);
    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        body: formData
      });
      if (!res.ok) throw new Error('Failed to submit');
      setSent(true);
    } catch (e: any) {
      setError(e.message || 'Something went wrong');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold">Request a Quote</h1>
      <p className="mt-2 text-slate-600">Share your details and upload photos of the areas to be cleaned.</p>

      <form action={onSubmit} className="mt-8 grid max-w-2xl gap-4" encType="multipart/form-data">
        <div className="grid gap-2">
          <label className="text-sm font-medium">Name</label>
          <input required name="name" className="rounded-md border p-2" placeholder="Full name" />
        </div>
        <div className="grid gap-2 md:grid-cols-2">
          <div className="grid gap-2">
            <label className="text-sm font-medium">Email</label>
            <input required type="email" name="email" className="rounded-md border p-2" placeholder="you@email.com" />
          </div>
          <div className="grid gap-2">
            <label className="text-sm font-medium">Phone</label>
            <input name="phone" className="rounded-md border p-2" placeholder="(555) 555-5555" />
          </div>
        </div>
        <div className="grid gap-2 md:grid-cols-2">
          <div className="grid gap-2">
            <label className="text-sm font-medium">Service Type</label>
            <select name="service" defaultValue={defaultService} className="rounded-md border p-2">
              <option value="">Select one</option>
              <option value="residential">Residential</option>
              <option value="commercial">Commercial</option>
              <option value="industrial">Industrial</option>
            </select>
          </div>
          <div className="grid gap-2">
            <label className="text-sm font-medium">Area (sq ft)</label>
            <input name="area" type="number" min={0} className="rounded-md border p-2" placeholder="e.g. 1200" />
          </div>
        </div>
        <div className="grid gap-2">
          <label className="text-sm font-medium">Address</label>
          <input name="address" className="rounded-md border p-2" placeholder="Street, City, State" />
        </div>
        <div className="grid gap-2">
          <label className="text-sm font-medium">Details</label>
          <textarea name="details" className="min-h-[120px] rounded-md border p-2" placeholder="Tell us about bedrooms, kitchen, living room, or special areas."></textarea>
        </div>
        <div className="grid gap-2">
          <label className="text-sm font-medium">Upload Photos (max 5)</label>
          <input name="photos" type="file" accept="image/*" multiple className="rounded-md border p-2" />
          <p className="text-xs text-slate-500">Attach images of bedrooms, kitchen, living room, or commercial/industrial areas.</p>
        </div>

        <button className="btn" disabled={submitting}>{submitting ? 'Sending...' : 'Send Request'}</button>
        {sent && <p className="text-green-600">Thanks! We will contact you shortly.</p>}
        {error && <p className="text-red-600">{error}</p>}
      </form>
    </div>
  );
}


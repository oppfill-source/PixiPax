'use client';

export default function Page() {
  const scrollTo = (id: string) => {
    if (typeof window === 'undefined') return;
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const services = [
    { title: 'Residential Cleaning', desc: 'Standard, Deep, and Move‑In/Out for apartments & homes.', emoji: '🏠' },
    { title: 'Airbnb Turnovers', desc: 'Same‑day clean, laundry, staging & restocking for 5‑star stays.', emoji: '🛏️' },
    { title: 'Office / Commercial', desc: 'Flexible nightly/weekly schedules for offices, retail & clinics.', emoji: '🏢' },
    { title: 'Industrial', desc: 'Light industrial/warehouse janitorial with safety standards.', emoji: '🏭' }
  ];

  const pricing = [
    { plan: 'Studio / 1BR', price: '$120+', blurb: 'Standard clean • Recurring discounts' },
    { plan: '2BR / 2BA', price: '$160+', blurb: 'Great for small families • Most popular' },
    { plan: '3BR / 2BA', price: '$200+', blurb: 'Deep clean available • Pets welcome' }
  ];

  const categories = ['Industrial', 'Commercial', 'Residential', 'Airbnb'] as const;
  const sizeOptions = [
    { key: 'studio', label: 'Studio', pictures: 3, tips: ['Kitchen', 'Bathroom', 'Main room'] },
    { key: 'one', label: 'One Bedroom', pictures: 4, tips: ['Kitchen', 'Bathroom', 'Bedroom', 'Living area'] },
    { key: 'two', label: 'Two Bedrooms', pictures: 6, tips: ['Kitchen', '2x Bathroom/Areas', '2x Bedroom', 'Living area'] },
    { key: 'three', label: 'Three Bedrooms', pictures: 8, tips: ['Kitchen', '3x Bedroom', '2x Bathroom', 'Living', 'Extra/Closet'] },
    { key: 'four', label: 'Four Bedrooms', pictures: 10, tips: ['Kitchen', '4x Bedroom', '3x Bathroom/Living', 'Hall/Entry'] }
  ] as const;

  let selectedCategory: typeof categories[number] = 'Residential';
  let selectedSize: typeof sizeOptions[number]['key'] = 'studio';

  const setCategory = (c: typeof categories[number]) => {
    selectedCategory = c;
    if (typeof window !== 'undefined') {
      document.querySelectorAll('[data-cat]')?.forEach((el) => el.classList.remove('ring-2', 'ring-cyan-600'));
      document.getElementById('cat-' + c)?.classList.add('ring-2', 'ring-cyan-600');
      const f = document.getElementById('est-cat') as HTMLInputElement | null;
      if (f) f.value = c;
      updateEstimationSummary();
    }
  };
  const setSize = (k: typeof sizeOptions[number]['key']) => {
    selectedSize = k;
    if (typeof window !== 'undefined') {
      document.querySelectorAll('[data-size]')?.forEach((el) => el.classList.remove('ring-2', 'ring-cyan-600'));
      document.getElementById('size-' + k)?.classList.add('ring-2', 'ring-cyan-600');
      const f = document.getElementById('est-size') as HTMLInputElement | null;
      if (f) f.value = k;
      updateEstimationSummary();
    }
  };
  const updateEstimationSummary = () => {
    const size = sizeOptions.find((s) => s.key === selectedSize) || sizeOptions[0];
    const pics = size.pictures;
    const el = document.getElementById('est-summary');
    const list = document.getElementById('est-list');
    if (el) el.textContent = `${pics} photos required`;
    if (list) {
      list.innerHTML = '';
      (size.tips || []).forEach((t) => {
        const li = document.createElement('li');
        li.textContent = t;
        list.appendChild(li);
      });
    }
    const uploads = document.getElementById('est-uploads');
    if (uploads) uploads.setAttribute('data-max', String(pics));
  };

  if (typeof window !== 'undefined') {
    setTimeout(() => {
      updateEstimationSummary();
    }, 0);
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-cyan-100">
      <header className="sticky top-0 z-40 backdrop-blur bg-white/75 border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2" onClick={(e)=>{e.preventDefault(); document.getElementById('home')?.scrollIntoView({behavior:'smooth'})}}>
            <span className="text-2xl">✨</span>
            <span className="font-extrabold text-xl tracking-tight">Pixipax</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a className="hover:text-cyan-600" href="#services" onClick={(e)=>{e.preventDefault(); document.getElementById('services')?.scrollIntoView({behavior:'smooth'})}}>Services</a>
            <a className="hover:text-cyan-600" href="#pricing" onClick={(e)=>{e.preventDefault(); document.getElementById('pricing')?.scrollIntoView({behavior:'smooth'})}}>Pricing</a>
            <a className="hover:text-cyan-600" href="#estimation" onClick={(e)=>{e.preventDefault(); document.getElementById('estimation')?.scrollIntoView({behavior:'smooth'})}}>Estimation</a>
            <a className="hover:text-cyan-600" href="#booking" onClick={(e)=>{e.preventDefault(); document.getElementById('booking')?.scrollIntoView({behavior:'smooth'})}}>Booking</a>
            <a className="hover:text-cyan-600" href="#contact" onClick={(e)=>{e.preventDefault(); document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})}}>Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="#booking" onClick={(e)=>{e.preventDefault(); document.getElementById('booking')?.scrollIntoView({behavior:'smooth'})}} className="hidden sm:inline-flex rounded-2xl bg-cyan-600 px-4 py-2 text-white font-semibold shadow hover:bg-cyan-700 transition">Get a Free Quote</a>
            <a href="tel:+17043900138" className="inline-flex rounded-2xl border border-gray-200 px-3 py-2 font-medium hover:bg-gray-50">Call (704) 390‑0138</a>
          </div>
        </div>
      </header>

      <main className="py-16" id="home">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold">Fresh. Fast. Flawless.</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl">RDU’s trusted cleaning service for homes, offices, industrial spaces, and short‑term rentals. Eco‑friendly products, vetted pros, and a 24‑hour satisfaction guarantee.</p>
        </div>
      </main>

      <section id="services" className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold">Services</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <div key={s.title} className="rounded-3xl border border-gray-100 p-6 shadow-sm">
                <div className="text-3xl mb-3">{s.emoji}</div>
                <h3 className="font-bold text-lg">{s.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold">Pricing</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricing.map((p) => (
              <div key={p.plan} className="rounded-3xl bg-white border border-gray-100 p-6 shadow-sm">
                <h3 className="font-bold text-lg">{p.plan}</h3>
                <div className="mt-2 text-3xl font-extrabold text-cyan-700">{p.price}</div>
                <p className="mt-1 text-sm text-gray-600">{p.blurb}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="estimation" className="py-16 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold">Quick Estimation</h2>
          <p className="mt-2 text-gray-600">Choose your service category and home size. We’ll tell you how many photos to upload.</p>

          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {categories.map((c) => (
              <button key={c} id={`cat-${c}`} data-cat onClick={() => setCategory(c)} className="rounded-2xl border border-gray-200 bg-white px-4 py-3 font-semibold shadow-sm hover:shadow">
                {c}
              </button>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {sizeOptions.map((s) => (
              <button key={s.key} id={`size-${s.key}`} data-size onClick={() => setSize(s.key)} className="rounded-2xl border border-gray-200 bg-white px-4 py-3 font-medium shadow-sm hover:shadow">
                {s.label}
              </button>
            ))}
          </div>

          <div className="mt-8 rounded-3xl border border-gray-100 p-6 shadow-sm bg-gray-50">
            <div className="text-sm text-gray-500">Photos needed</div>
            <div id="est-summary" className="text-2xl font-extrabold text-cyan-700">3 photos required</div>
            <ul id="est-list" className="mt-2 text-sm text-gray-600 list-disc list-inside">
              <li>Kitchen</li>
              <li>Bathroom</li>
              <li>Main room</li>
            </ul>

            <form className="mt-6 grid grid-cols-1 gap-3" onSubmit={(e)=>{e.preventDefault(); alert('Estimation sent! Connect to a backend to receive files.')}}>
              <input id="est-cat" name="category" type="hidden" defaultValue="Residential" />
              <input id="est-size" name="size" type="hidden" defaultValue="studio" />
              <label className="text-sm font-semibold">Upload photos</label>
              <input id="est-uploads" type="file" accept="image/*" multiple className="rounded-xl border border-gray-200 px-4 py-3" />
              <textarea name="notes" className="rounded-xl border border-gray-200 px-4 py-3 h-28" placeholder="Notes (pets, parking, preferred date)"></textarea>
              <button className="rounded-2xl bg-cyan-600 px-5 py-3 text-white font-semibold shadow hover:bg-cyan-700 transition">Send Estimation</button>
            </form>
          </div>
        </div>
      </section>

      <section id="booking" className="py-16 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-gray-100 shadow-sm p-6">
            <h2 className="text-3xl font-extrabold">Book a clean</h2>
            <p className="mt-2 text-gray-600">Tell us what you need. We’ll confirm and send a quote.</p>
            <form className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4" onSubmit={(e)=>{e.preventDefault(); alert('Booking request sent!')}}>
              <input className="rounded-xl border border-gray-200 px-4 py-3" placeholder="Full name" required />
              <input className="rounded-xl border border-gray-200 px-4 py-3" placeholder="Email" type="email" required />
              <input className="rounded-xl border border-gray-200 px-4 py-3" placeholder="Phone" type="tel" defaultValue="(704) 390-0138" />
              <input className="rounded-xl border border-gray-200 px-4 py-3" placeholder="Address (City / Area)" />
              <select className="rounded-xl border border-gray-200 px-4 py-3" defaultValue="">
                <option value="" disabled>Service needed</option>
                <option>Standard clean</option>
                <option>Deep clean</option>
                <option>Move‑in / Move‑out</option>
                <option>Airbnb turnover</option>
                <option>Office / Commercial</option>
                <option>Industrial</option>
              </select>
              <select className="rounded-xl border border-gray-200 px-4 py-3" defaultValue="">
                <option value="" disabled>Home size</option>
                <option>Studio / 1BR</option>
                <option>2BR / 2BA</option>
                <option>3BR / 2BA</option>
                <option>4BR+</option>
              </select>
              <textarea className="sm:col-span-2 rounded-xl border border-gray-200 px-4 py-3 h-28" placeholder="Notes (pets, parking, preferred date/time, add‑ons)"></textarea>
              <button className="sm:col-span-2 rounded-2xl bg-cyan-600 px-5 py-3 text-white font-semibold shadow hover:bg-cyan-700 transition">Request Quote</button>
            </form>
          </div>
        </div>
      </section>

      <footer id="contact" className="border-t border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} Pixipax Cleaning Services • RDU, North Carolina</p>
          <div className="flex items-center gap-4 text-sm">
            <a className="hover:text-cyan-700" href="#">Instagram</a>
            <a className="hover:text-cyan-700" href="#">Facebook</a>
            <a className="hover:text-cyan-700" href="#">TikTok</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

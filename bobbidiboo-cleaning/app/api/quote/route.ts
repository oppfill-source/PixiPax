import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';
import { Resend } from 'resend';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const name = String(formData.get('name') || '');
    const email = String(formData.get('email') || '');
    const phone = String(formData.get('phone') || '');
    const service = String(formData.get('service') || '');
    const area = String(formData.get('area') || '');
    const address = String(formData.get('address') || '');
    const details = String(formData.get('details') || '');

    const uploadDir = path.join(process.cwd(), 'uploads');
    await fs.mkdir(uploadDir, { recursive: true });

    const photos = formData.getAll('photos');
    const savedFiles: string[] = [];
    let count = 0;
    for (const file of photos) {
      if (!(file instanceof File)) continue;
      if (count >= 5) break;
      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      const ext = path.extname(file.name) || '.jpg';
      const filename = `${Date.now()}-${Math.random().toString(36).slice(2)}${ext}`;
      const filepath = path.join(uploadDir, filename);
      await fs.writeFile(filepath, buffer);
      savedFiles.push(filename);
      count++;
    }

    // Send email notification if configured
    const resendApiKey = process.env.RESEND_API_KEY;
    const destination = process.env.QUOTE_DESTINATION_EMAIL || 'info@bobbidiboocleaning.com';
    if (resendApiKey) {
      const resend = new Resend(resendApiKey);
      const subject = `New quote request: ${service || 'Service'} from ${name}`;
      const uploadsUrlBase = process.env.SITE_BASE_URL
        ? `${process.env.SITE_BASE_URL.replace(/\/$/, '')}/uploads/`
        : null;
      const photoList = savedFiles.length
        ? savedFiles.map((f) => (uploadsUrlBase ? `${uploadsUrlBase}${f}` : f)).join('\n')
        : 'No photos uploaded';
      const text = `New quote request\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}\nArea (sq ft): ${area}\nAddress: ${address}\n\nDetails:\n${details}\n\nPhotos:\n${photoList}`;
      try {
        await resend.emails.send({
          from: 'Bobbi Di Boo <no-reply@bobbidiboocleaning.com>',
          to: [destination],
          reply_to: email || undefined,
          subject,
          text
        });
      } catch (err) {
        console.error('Resend email error', err);
      }
    } else {
      console.log('[NEW QUOTE]', { name, email, phone, service, area, address, details, savedFiles });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ ok: false, error: 'Failed to process request' }, { status: 500 });
  }
}


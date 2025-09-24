import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

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

    // In production, send an email via a provider (e.g., Resend/SMTP) with details and links
    // For now, log to server and return success
    console.log('[NEW QUOTE]', { name, email, phone, service, area, address, details, savedFiles });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ ok: false, error: 'Failed to process request' }, { status: 500 });
  }
}


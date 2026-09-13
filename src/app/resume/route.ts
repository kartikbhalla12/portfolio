import { permanentRedirect } from 'next/navigation';

export async function GET() {
	permanentRedirect('/kartik-bhalla-resume.pdf');
}

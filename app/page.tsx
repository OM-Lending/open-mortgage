import { redirect } from 'next/navigation';
import { routing } from '@/middleware';

export default function RootPage() {
  redirect(`/${routing.defaultLocale}`);
}

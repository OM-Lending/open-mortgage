import { redirect } from 'next/navigation';

export default function ServicesIndexPage() {
  // Redirect `/[locale]/services` to the main process overview for now
  redirect('../our-process');
}



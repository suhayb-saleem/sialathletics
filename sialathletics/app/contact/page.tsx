import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import ContactForm from '@/components/contact/ContactForm';
import ContactFAQ from '@/components/contact/ContactFAQ';

export const metadata: Metadata = {
  title: 'Contact SIAL Athletics — Get a Quote',
  description: 'Contact SIAL Athletics for OEM manufacturing quotes, private label inquiries, sample requests, and wholesale pricing. Factory direct from Sialkot.',
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        crumb="Contact"
        eyebrow="Let's talk"
        title="Get in touch."
        subtitle="Factory-direct quotes. Samples. Private label programs."
      />
      <ContactForm />
      <ContactFAQ />
    </main>
  );
}

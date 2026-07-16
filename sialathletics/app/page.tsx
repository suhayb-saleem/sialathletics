import Hero from '@/components/landing/Hero';
import TrustStrip from '@/components/landing/TrustStrip';
import AboutSection from '@/components/landing/AboutSection';
import { Capabilities } from '@/components/landing/Capabilities';
import ProductTeaser from '@/components/landing/ProductTeaser';
import CTABanner from '@/components/landing/CTABanner';
import { Contact } from '@/components/landing/Contact';

export default function Home() {
  return <><Hero /><TrustStrip /><AboutSection /><Capabilities /><ProductTeaser /><CTABanner /><Contact /></>;
}

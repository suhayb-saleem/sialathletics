import './home.css';
import Hero from '@/components/landing/Hero';
import CredentialMarquee from '@/components/landing/TrustStrip';
import { Range } from '@/components/landing/ProductTeaser';
import { Capabilities } from '@/components/landing/Capabilities';
import AboutSection from '@/components/landing/AboutSection';
import HomeCTA from '@/components/landing/HomeCTA';
import { Contact } from '@/components/landing/Contact';

export default function Home() {
  return (
    <div className="hp">
      <Hero />
      <CredentialMarquee />
      <Range />
      <Capabilities />
      <AboutSection />
      <HomeCTA />
      <Contact />
    </div>
  );
}

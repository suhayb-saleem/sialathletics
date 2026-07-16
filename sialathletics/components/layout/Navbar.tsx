'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import Button from '@/components/ui/Button';

const links = [
  { label: 'Home', href: '/' },
  { label: 'Padel Rackets', href: '/catalogue?filter=padel' },
  { label: 'Manufacturing', href: '/capabilities' },
  { label: 'Quality', href: '/quality' },
  { label: 'About', href: '/about' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 20);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <header className={`site-nav ${scrolled ? 'site-nav--scrolled' : ''}`}>
        <div className="site-nav__inner">
          <Link href="/" className="site-nav__brand" aria-label="SIAL Athletics home">
            <Image src="/images/logo.png" alt="SIAL Athletics" width={142} height={38} sizes="142px" priority style={{ width: '142px', height: 'auto' }} />
          </Link>

          <nav className="site-nav__links hide-mobile" aria-label="Primary navigation">
            {links.map(({ label, href }) => {
              const active = href === '/' ? pathname === '/' : pathname === href.split('?')[0];
              return <Link key={href} href={href} className={active ? 'is-active' : ''}>{label}</Link>;
            })}
          </nav>

          <div className="site-nav__actions">
            <Button href="/contact" size="sm" className="hide-mobile">Start an inquiry</Button>
            <button className="site-nav__toggle show-mobile" type="button" onClick={() => setOpen((value) => !value)} aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="mobile-navigation">
              {open ? <X size={19} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div id="mobile-navigation" className="mobile-nav" initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: .24, ease: [0.16, 1, .3, 1] }}>
            <nav aria-label="Mobile navigation">
              {links.map(({ label, href }, index) => (
                <motion.div key={href} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .04 * index }}>
                  <Link href={href} onClick={closeMenu}>{label}</Link>
                </motion.div>
              ))}
            </nav>
            <Button href="/contact" size="lg" onClick={undefined}>Start an inquiry</Button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

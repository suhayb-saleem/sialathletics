'use client';

import { motion } from 'motion/react';

// WhatsApp "click to chat": opens the app (mobile) or WhatsApp Web (desktop)
// addressed to our business number with the message pre-filled — the visitor
// only has to hit send. Number is digits-only, no "+", per the wa.me format.
const PHONE = '923005933179';
const PREFILL = "Hi SIAL Athletics, I'd like to learn more about your products and request a quote.";
const HREF = `https://wa.me/${PHONE}?text=${encodeURIComponent(PREFILL)}`;

export default function WhatsAppButton() {
  return (
    <motion.a
      href={HREF}
      target="_blank"
      rel="noopener noreferrer"
      className="wa-fab"
      aria-label="Chat with us on WhatsApp"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="wa-fab__label">Chat with us</span>
      <span className="wa-fab__icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </span>

      <style>{`
        .wa-fab {
          position: fixed;
          right: clamp(1rem, 3vw, 1.75rem);
          bottom: clamp(1rem, 3vw, 1.75rem);
          z-index: 150;
          display: inline-flex;
          align-items: center;
          gap: 0;
          height: 56px;
          padding: 0;
          border-radius: 999px;
          background: #25d366;
          color: #fff;
          text-decoration: none;
          box-shadow: 0 10px 30px -8px rgba(37, 211, 102, 0.55), 0 4px 12px -4px rgba(0, 0, 0, 0.25);
          overflow: hidden;
          transition: box-shadow 0.3s ease;
        }
        .wa-fab:hover { box-shadow: 0 14px 38px -8px rgba(37, 211, 102, 0.7), 0 6px 16px -4px rgba(0, 0, 0, 0.3); }
        .wa-fab__icon {
          display: grid;
          place-items: center;
          width: 56px;
          height: 56px;
          flex: 0 0 auto;
        }
        /* Label reveals on hover (desktop) — the icon alone reads on mobile. */
        .wa-fab__label {
          max-width: 0;
          white-space: nowrap;
          font-family: var(--hp-body);
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 0.02em;
          opacity: 0;
          overflow: hidden;
          transition: max-width 0.35s var(--hp-ease, cubic-bezier(0.16,1,0.3,1)), opacity 0.25s ease, padding 0.35s ease;
        }
        @media (hover: hover) {
          .wa-fab:hover .wa-fab__label {
            max-width: 12rem;
            opacity: 1;
            padding-left: 1.1rem;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .wa-fab__label { transition: none; }
        }
      `}</style>
    </motion.a>
  );
}

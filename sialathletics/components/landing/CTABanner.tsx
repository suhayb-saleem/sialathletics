import Link from 'next/link';

interface CTABannerProps {
  headline?: string;
  subtext?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

// The closing band on every page: the outlined SA monogram behind a heading,
// one paragraph, two actions and the email address. Server-rendered.
export default function CTABanner({
  headline = 'Have a product in mind?',
  subtext = 'Tell us the player, the price point and the volume. We reply within 24 hours with samples, specs and a quote.',
  primaryLabel = 'Start an inquiry',
  primaryHref = '/contact',
  secondaryLabel = 'Explore capabilities',
  secondaryHref = '/manufacturing',
}: CTABannerProps) {
  return (
    <section className="hp-cta">
      <span className="hp-cta__mark" aria-hidden="true">SA</span>
      <div className="hp-shell hp-cta__inner">
        <h2 className="hp-display hp-cta__title">{headline}</h2>
        <div>
          <p className="hp-cta__copy">{subtext}</p>
          <div className="hp-cta__actions">
            <Link href={primaryHref} className="hp-btn hp-btn--ink">
              {primaryLabel} <span className="hp-btn__arrow" aria-hidden="true">→</span>
            </Link>
            {secondaryLabel && secondaryHref && (
              <Link href={secondaryHref} className="hp-btn hp-btn--outline-ink">
                {secondaryLabel} <span className="hp-btn__arrow" aria-hidden="true">→</span>
              </Link>
            )}
          </div>
          <span className="hp-cta__email">
            Or write to <a href="mailto:info@sialathletics.com">info@sialathletics.com</a>
          </span>
        </div>
      </div>
    </section>
  );
}

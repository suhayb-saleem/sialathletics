// Catches mistyped email addresses on the inquiry form without making the
// visitor verify anything. A wrong address means we can never reply, so a
// likely typo ("jotmail.com", "gmial.com", "outlook.con") gets a one-click
// "did you mean …?" prompt. It is only ever a suggestion: the visitor can
// keep what they typed, because company domains we have never heard of are
// the normal case for B2B inquiries.
//
// Shared by the form (prompt) and the API route (flag in the sales email).

// Mailbox providers people actually type by hand. A domain on this list is
// never "corrected" to a neighbour (mail.com must not become gmail.com).
const KNOWN_DOMAINS = [
  'gmail.com', 'googlemail.com',
  'hotmail.com', 'hotmail.co.uk', 'hotmail.es', 'hotmail.fr', 'hotmail.it', 'hotmail.de',
  'outlook.com', 'outlook.es', 'outlook.fr', 'outlook.it', 'outlook.de',
  'live.com', 'live.co.uk', 'msn.com',
  'yahoo.com', 'yahoo.co.uk', 'yahoo.es', 'yahoo.fr', 'yahoo.it', 'yahoo.de', 'yahoo.com.br', 'yahoo.com.ar', 'yahoo.com.mx',
  'ymail.com', 'rocketmail.com',
  'icloud.com', 'me.com', 'mac.com',
  'aol.com', 'mail.com', 'email.com',
  'proton.me', 'protonmail.com',
  'gmx.com', 'gmx.de', 'gmx.net', 'web.de',
  'yandex.com', 'zoho.com',
];

// Endings that are almost always a slip of ".com" or ".net".
const TLD_FIXES: Record<string, string> = {
  con: 'com', cmo: 'com', ocm: 'com', vom: 'com', xom: 'com', comm: 'com', coom: 'com', cim: 'com', cpm: 'com',
  nte: 'net', ner: 'net',
};

/** Edit distance where swapping two neighbouring letters counts as one slip. */
function distance(a: string, b: string): number {
  const d: number[][] = Array.from({ length: a.length + 1 }, (_, i) => [i, ...new Array(b.length).fill(0)]);
  for (let j = 1; j <= b.length; j++) d[0][j] = j;
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + cost);
      if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) {
        d[i][j] = Math.min(d[i][j], d[i - 2][j - 2] + 1);
      }
    }
  }
  return d[a.length][b.length];
}

/** Returns the address we think was meant, or null when it looks fine. */
export function suggestEmail(input: string): string | null {
  const email = input.trim();
  const at = email.lastIndexOf('@');
  if (at < 1 || at === email.length - 1) return null;

  const local = email.slice(0, at);
  const domain = email.slice(at + 1).toLowerCase();
  if (!domain.includes('.') || KNOWN_DOMAINS.includes(domain)) return null;

  // 1. A known provider typed one or two keys off: jotmail.com, gmial.com.
  //    Short names get less slack so real short domains are left alone.
  let best: string | null = null;
  let bestDistance = Infinity;
  for (const known of KNOWN_DOMAINS) {
    const dist = distance(domain, known);
    const allowed = known.length <= 7 ? 1 : 2;
    if (dist <= allowed && dist < bestDistance) {
      best = known;
      bestDistance = dist;
    }
  }
  if (best) return `${local}@${best}`;

  // 2. Any domain with a slipped ending: company.con, company.cmo.
  const dot = domain.lastIndexOf('.');
  const fixedTld = TLD_FIXES[domain.slice(dot + 1)];
  if (fixedTld) return `${local}@${domain.slice(0, dot)}.${fixedTld}`;

  return null;
}

export interface FAQItem {
  q: string;
  a: string;
}

export const FAQS: FAQItem[] = [
  {
    q: 'Will End of Abyss be released on Steam?',
    a: 'Yes, End of Abyss is expected to arrive on Steam in late 2027 following its timed exclusivity period on the Epic Games Store. Because Epic Games funded and published the PC release, it is exclusive to Epic on PC at launch, typically lasting 6 to 12 months before launching on Steam.'
  },
  {
    q: 'Is End of Abyss co-op or multiplayer?',
    a: 'No, End of Abyss is currently a dedicated single-player survival horror experience. Developer Section 9 Interactive crafted the atmosphere specifically around tension, solitude, and exploration. However, the developers stated in an interview that a separate co-op survival challenge mode is being explored for post-launch updates.'
  },
  {
    q: 'Can you play End of Abyss on Steam Deck right now?',
    a: 'Yes! Even though the game is on the Epic Games Store, you can easily install and play End of Abyss on Steam Deck by installing the Heroic Games Launcher in Desktop Mode, logging into your Epic Games account, and running the game through Proton GE with solid 45-60 FPS performance.'
  },
  {
    q: 'What platforms is End of Abyss available on?',
    a: 'End of Abyss launched on October 1, 2026, for PC (Epic Games Store), PlayStation 5, and Xbox Series X/S. A specialized port for Nintendo\'s upcoming Switch successor (Switch 2) is currently reported to be in development.'
  },
  {
    q: 'Who developed End of Abyss?',
    a: 'End of Abyss was created by Section 9 Interactive, an independent studio founded in Malmö, Sweden, by former senior developers and artists from Tarsier Studios (renowned creators of Little Nightmares and Little Nightmares II).'
  },
  {
    q: 'How many endings does End of Abyss have?',
    a: 'End of Abyss features two distinct endings: The "Surface Extraction" standard ending, and the secret "Architect Symbiosis" true ending unlocked by discovering all 8 classified Section 9 Research Data Cores hidden throughout the subterranean sectors.'
  },
  {
    q: 'Is there a free demo available for End of Abyss?',
    a: 'A playable prologue demo covering Level 0 (Surface Entry) and the first weapon acquisition was featured during previous gaming events and remains occasionally downloadable via promotional showcases on the Epic Games Store.'
  }
];

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: f.a
    }
  }))
};

'use client';

import { Analytics } from '@vercel/analytics/next';
import { useEffect, useState } from 'react';
import * as CookieConsent from 'vanilla-cookieconsent';
import 'vanilla-cookieconsent/dist/cookieconsent.css';

export default function CookieConsentBanner() {
  const [analyticsEnabled, setAnalyticsEnabled] = useState(() => {
    if (typeof window === 'undefined') return false;

    return CookieConsent.acceptedCategory('analytics');
  });

  useEffect(() => {
    CookieConsent.run({
      guiOptions: {
        consentModal: {
          layout: 'box',
          position: 'bottom left',
          equalWeightButtons: true,
          flipButtons: false,
        },
        preferencesModal: {
          layout: 'box',
          position: 'left',
          equalWeightButtons: true,
          flipButtons: false,
        },
      },

      categories: {
        necessary: {
          readOnly: true,
          enabled: true,
        },
        analytics: {
          enabled: false,
        },
      },

      onConsent: () => {
        setAnalyticsEnabled(CookieConsent.acceptedCategory('analytics'));
      },

      onChange: () => {
        setAnalyticsEnabled(CookieConsent.acceptedCategory('analytics'));
      },

      language: {
        default: 'en',
        translations: {
          en: {
            consentModal: {
              title: 'Privacy preferences',
              description:
                'This website uses necessary cookies to remember your privacy choices. Optional analytics help me understand how the portfolio is used. <a href="/datenschutz" class="cc__link">Privacy Policy</a>',
              acceptAllBtn: 'Accept all',
              acceptNecessaryBtn: 'Reject optional',
              showPreferencesBtn: 'Manage preferences',
              footer:
                '<a href="/datenschutz">Privacy Policy</a><a href="/imprint">Imprint</a>',
            },

            preferencesModal: {
              title: 'Privacy preferences',
              acceptAllBtn: 'Accept all',
              acceptNecessaryBtn: 'Reject optional',
              savePreferencesBtn: 'Save preferences',
              closeIconLabel: 'Close',

              sections: [
                {
                  title: 'Cookie and analytics usage',
                  description:
                    'This website uses a necessary consent cookie to remember your privacy preferences. Analytics are optional and only load after you give consent.',
                },
                {
                  title: 'Strictly necessary cookies',
                  description:
                    'These cookies are required to remember your consent choice and keep the website functioning.',
                  linkedCategory: 'necessary',
                  cookieTable: {
                    headers: {
                      name: 'Name',
                      domain: 'Service',
                      description: 'Description',
                      expiration: 'Expiration',
                    },
                    body: [
                      {
                        name: 'cc_cookie',
                        domain: 'CookieConsent',
                        description:
                          'Stores your cookie and privacy preferences for this website.',
                        expiration: 'Usually 6 months',
                      },
                    ],
                  },
                },
                {
                  title: 'Analytics',
                  description:
                    'Vercel Web Analytics helps me understand general website usage, such as page views and referrers. It is only activated after you accept analytics.',
                  linkedCategory: 'analytics',
                  cookieTable: {
                    headers: {
                      name: 'Service',
                      domain: 'Provider',
                      description: 'Description',
                      expiration: 'Storage',
                    },
                    body: [
                      {
                        name: 'Vercel Web Analytics',
                        domain: 'Vercel Inc.',
                        description:
                          'Privacy-friendly, cookie-free analytics for general website usage.',
                        expiration:
                          'No analytics cookies are stored by this website.',
                      },
                    ],
                  },
                },
                {
                  title: 'More information',
                  description:
                    'For questions about privacy or cookie settings, please <a class="cc__link" href="/#contact">contact me</a>.',
                },
              ],
            },
          },
        },
      },
    });
  }, []);

  return analyticsEnabled ? <Analytics /> : null;
}

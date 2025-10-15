export const siteConfig = {
  site: {
    name: 'AdBliss',
    description: 'Data-Powered B2B Advertising Platform',
  },

  logo: {
    text: 'AdBliss',
    image: '/logo.svg',
    alt: 'AdBliss Logo',
  },

  images: {
    hero: '/hero-bg.jpeg',
    videos: ['/videos/marketing1.mp4', '/videos/marketing2.mp4'],
  },

  video: {
    duration: 4000,
    button: {
      text: 'Start Free Trial',
      href: '/trial',
    },
  },

  colors: {
    primary: '#7c3aed',
    secondary: '#059669',
    accent: '#f59e0b',
  },

  content: {
    hero: {
      headline: 'Data-Powered B2B\nAdvertising Platform',
      subheadline:
        'Connect with high-value prospects using deterministic data and precision targeting that drives measurable growth for B2B companies.',
    },
    features: {
      headline: 'Accelerate Your B2B Growth',
      subheadline:
        'Transform your marketing strategy with our comprehensive suite of tools designed for modern B2B companies.',
    },
    cta: {
      headline: 'Ready to Transform Your B2B Marketing?',
      subheadline:
        'Join leading companies who trust AdBliss to drive their growth. Start your free trial today.',
    },
  },

  stats: [
    { value: '500+', label: 'Enterprise Clients' },
    { value: '95%', label: 'Customer Satisfaction' },
    { value: '3.2x', label: 'Average ROI Increase' },
    { value: '24/7', label: 'Expert Support' },
  ],
} as const

export type SiteConfig = typeof siteConfig

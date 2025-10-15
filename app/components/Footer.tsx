'use client'
import { Box, Container, Typography, Grid, Stack } from '@mui/material'
import { Accessibility } from '@mui/icons-material'
import Link from 'next/link'
import { siteConfig } from '../../config'

export default function Footer() {
  return (
    <Box
      sx={{
        background: `linear-gradient(135deg, ${siteConfig.colors.secondary} 0%, ${siteConfig.colors.primary} 100%)`,
        color: 'white',
        pt: 8,
        pb: 4,
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={6}>
          <Grid item xs={12} md={3}>
            <Typography variant="h4" sx={{ fontWeight: 800, mb: 3 }}>
              {siteConfig.logo.text}
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.8, lineHeight: 1.6 }}>
              {siteConfig.site.description}
            </Typography>
          </Grid>

          {Object.entries({
            solutions: {
              title: 'Solutions',
              links: [
                { name: 'Advertising', href: '/advertising' },
                { name: 'Analytics', href: '/analytics' },
              ],
            },
            resources: {
              title: 'Resources',
              links: [
                { name: 'Blog', href: '/blog' },
                { name: 'Guides', href: '/guides' },
              ],
            },
            company: {
              title: 'Company',
              links: [
                { name: 'About Us', href: '/about' },
                { name: 'Contact', href: '/contact' },
              ],
            },
            support: {
              title: 'Support',
              links: [
                { name: 'Help Center', href: '/help' },
                { name: 'Documentation', href: '/docs' },
              ],
            },
          }).map(([key, section]) => (
            <Grid item xs={6} md={2} key={key}>
              <Typography
                variant="h6"
                sx={{ fontWeight: 600, mb: 2, color: 'white' }}
              >
                {section.title}
              </Typography>
              <Stack spacing={1}>
                {section.links.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="footer-link"
                  >
                    {link.name}
                  </Link>
                ))}
              </Stack>
            </Grid>
          ))}
        </Grid>

        <Box
          sx={{ borderTop: '1px solid rgba(255,255,255,0.2)', mt: 6, pt: 4 }}
        >
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item xs={12} md={6}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Box
                  sx={{
                    bgcolor: siteConfig.colors.secondary,
                    borderRadius: '50%',
                    p: 1,
                    display: 'flex',
                  }}
                >
                  <Accessibility sx={{ fontSize: 20, color: 'white' }} />
                </Box>
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                  © 2025 {siteConfig.site.name}. All rights reserved.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Stack
                direction="row"
                spacing={3}
                justifyContent={{ xs: 'flex-start', md: 'flex-end' }}
                sx={{ mt: { xs: 2, md: 0 } }}
              >
                {[
                  { name: 'Privacy Policy', href: '/privacy' },
                  { name: 'Terms of Service', href: '/terms' },
                  { name: 'Cookie Policy', href: '/cookies' },
                  { name: 'GDPR', href: '/gdpr' },
                ].map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="footer-legal-link"
                  >
                    {link.name}
                  </Link>
                ))}
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}

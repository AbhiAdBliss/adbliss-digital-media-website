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
        pt: { xs: 6, sm: 8 },
        pb: { xs: 4, sm: 6 },
        textAlign: { xs: 'center', md: 'left' }, 
      }}
    >
      <Container maxWidth="xl">
        <Grid
          container
          spacing={{ xs: 4, sm: 6 }}
          justifyContent={{ xs: 'center', md: 'flex-start' }} 
        >
          {/* Logo & Description */}
          <Grid item xs={12} sm={8} md={3}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 800,
                mb: 3,
                fontSize: { xs: '1.6rem', sm: '1.8rem', md: '2rem' },
              }}
            >
              {siteConfig.logo.text}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                opacity: 0.8,
                lineHeight: 1.6,
                fontSize: { xs: '0.9rem', sm: '1rem' },
                mx: { xs: 'auto', md: 0 },
                maxWidth: { xs: '80%', sm: '70%', md: '100%' },
              }}
            >
              {siteConfig.site.description}
            </Typography>
          </Grid>

          {/* Dynamic Footer Sections */}
          {Object.entries({
            solutions: {
              title: 'Advertising',
              links: [
                { name: 'Display', href: '/display' },
                { name: 'Video', href: '/video' },
                { name: 'CTV', href: '/ctv' },
                { name: 'In-game', href: '/in-game' },
                { name: 'DOOH', href: '/dooh' },
                { name: 'Native', href: '/native-advertising' },
                { name: 'Audio', href: '/audio-advertising' },
              ],
            },
            ABM: {
              title: 'ABM',
              links: [
                { name: 'ABM Display', href: '/abm-display' },
                { name: 'ABM CTV', href: '/abm-ctv' },
                { name: 'ABM Leads', href: '/abm-leads' },
                { name: 'ABM Syndication', href: '/abm-syndication' },
              ],
            },
            resources: {
              title: 'Resources',
              links: [
                { name: 'Adspecs', href: '/Adspecs' },
                { name: 'Cases', href: '/cases' },
              ],
            },
            company: {
              title: 'Company',
              links: [
                { name: 'About Us', href: '/about' },
                { name: 'Contact', href: '/contact' },
                { name: 'Documentation', href: '/docs' },
              ],
            },
          }).map(([key, section]) => (
            <Grid
              item
              xs={6}
              sm={4}
              md={2}
              key={key}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: { xs: 'center', md: 'flex-start' }, 
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  mb: 2,
                  color: 'white',
                  fontSize: { xs: '1rem', sm: '1.1rem' },
                }}
              >
                {section.title}
              </Typography>

              {/* ✅ Advertising section responsive grid */}
              {section.title === 'Advertising' ? (
                <Box
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: {
                      xs: 'repeat(2, 1fr)',
                      sm: 'repeat(2, 1fr)',
                      md: 'repeat(2, 1fr)',
                    },
                    gap: 3,
                    justifyItems: { xs: 'center', md: 'start' }, 
                  }}
                >
                  {section.links.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      style={{
                        color: 'rgba(255,255,255,0.8)',
                        textDecoration: 'none',
                        transition: 'color 0.2s ease',
                        fontSize: '0.9rem',
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = '#fff')
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color =
                          'rgba(255,255,255,0.8)')
                      }
                    >
                      {link.name}
                    </Link>
                  ))}
                </Box>
              ) : (
                <Stack
                  spacing={1}
                  alignItems={{ xs: 'center', md: 'flex-start' }}
                >
                  {section.links.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="footer-link"
                      style={{
                        color: 'rgba(255,255,255,0.8)',
                        textDecoration: 'none',
                        transition: 'color 0.2s ease',
                        fontSize: '0.9rem',
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = '#fff')
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color =
                          'rgba(255,255,255,0.8)')
                      }
                    >
                      {link.name}
                    </Link>
                  ))}
                </Stack>
              )}
            </Grid>
          ))}
        </Grid>

        {/* ✅ Bottom Section */}
        <Box
          sx={{
            borderTop: '1px solid rgba(255,255,255,0.2)',
            mt: { xs: 5, md: 6 },
            pt: { xs: 3, md: 4 },
          }}
        >
          <Grid
            container
            alignItems="center"
            justifyContent="center"
            spacing={2}
            textAlign="center"
          >
            <Grid item xs={12}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 1.5,
                  flexWrap: 'wrap',
                }}
              >
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
                <Typography
                  variant="body2"
                  sx={{
                    opacity: 0.8,
                    fontSize: { xs: '0.85rem', sm: '0.9rem' },
                  }}
                >
                  © 2025 {siteConfig.site.name}. All rights reserved.
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12}>
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={{ xs: 1.5, sm: 3 }}
                justifyContent="center"
                alignItems="center"
                sx={{ mt: { xs: 3, md: 0 } }}
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
                    style={{
                      color: 'rgba(255,255,255,0.8)',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                      fontSize: '0.9rem',
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = '#fff')
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color =
                        'rgba(255,255,255,0.8)')
                    }
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

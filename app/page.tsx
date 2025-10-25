'use client'
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Stack,
  Chip,
  Avatar,
} from '@mui/material'
import {
  GpsFixed,
  Analytics,
  TrendingUp,
  FilterList,
  Sync,
  Speed,
} from '@mui/icons-material'
import Header from './components/Header'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'

import TabbedSection from './components/TabbedSection'
import OurServices from './components/OurServices'
import FeatureGrid from './components/FeatureGrid'
import VideoCarousel from './components/VideoCarousel'
import Awards from './components/Awards'
import Footer from './components/Footer'
import { siteConfig } from '../config'
import Link from 'next/link'
import './styles/components.css'
import CaseStudies from './components/CaseStudies'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />

      {/* Features Section */}
      <Box sx={{ py: 12, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Chip
              label="Why Choose AdBliss"
              sx={{
                mb: 2,
                bgcolor: 'primary.main',
                color: 'white',
                fontWeight: 600,
                fontSize: '1.2rem',
                px: 2,
                py: 1,
              }}
            />
            <Typography variant="h2" sx={{ mb: 3, color: 'text.primary' }}>
              {siteConfig.content.features.headline}
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: 'text.secondary',
                maxWidth: '600px',
                mx: 'auto',
                fontWeight: 400,
              }}
            >
              {siteConfig.content.features.subheadline}
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {[
              {
                icon: 'Target',
                title: 'Precision Targeting',
                description:
                  'Reach the right decision-makers with advanced account-based marketing and intent data.',
                color: siteConfig.colors.primary,
              },
              {
                icon: 'Analytics',
                title: 'Data-Driven Insights',
                description:
                  'Make informed decisions with comprehensive analytics and performance tracking.',
                color: siteConfig.colors.secondary,
              },
              {
                icon: 'TrendingUp',
                title: 'Proven Results',
                description:
                  'Join thousands of B2B companies driving measurable revenue growth.',
                color: siteConfig.colors.accent,
              },
            ].map((feature, index) => {
              const IconComponent =
                feature.icon === 'Target'
                  ? GpsFixed
                  : feature.icon === 'Analytics'
                    ? Analytics
                    : TrendingUp
              return (
                <Grid item xs={12} md={4} key={index}>
                  <Card
                    sx={{
                      height: '100%',
                      textAlign: 'center',
                      border: '1px solid',
                      borderColor: 'divider',
                      bgcolor: 'background.paper',
                      position: 'relative',
                      overflow: 'visible',
                    }}
                  >
                    <Avatar
                      sx={{
                        bgcolor: feature.color,
                        width: 64,
                        height: 64,
                        position: 'absolute',
                        top: -32,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        boxShadow: 3,
                      }}
                    >
                      <IconComponent />
                    </Avatar>
                    <CardContent sx={{ pt: 6, pb: 4, px: 3 }}>
                      <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                        {feature.title}
                      </Typography>
                      <Typography
                        color="text.secondary"
                        sx={{ lineHeight: 1.7 }}
                      >
                        {feature.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              )
            })}
          </Grid>
        </Container>
      </Box>

      {/* How it works  */}
      <HowItWorks />

      {/* Content Section */}
      <TabbedSection
        items={[
          {
            id: 'content-syndication',
            label: 'Content Syndication',
            title: 'Distribute targeted content to key accounts',
            subtitle:
              'Reach decision-makers with personalized content experiences that drive engagement and pipeline growth.',
            cta: 'View Content Syndication',
            color: '#8b5cf6',
          },
          {
            id: 'connected-tv',
            label: 'Connected TV',
            title: 'Reach executives through premium TV advertising',
            subtitle:
              'Target C-suite executives and key decision-makers with high-impact video campaigns on streaming platforms.',
            cta: 'View Connected TV',
            color: '#ef4444',
          },
          {
            id: 'display-advertising',
            label: 'Display Advertising',
            title: 'Precision display campaigns for target accounts',
            subtitle:
              'Deliver personalized display ads to specific companies and decision-makers across premium websites.',
            cta: 'View Display Advertising',
            color: '#f59e0b',
          },
          {
            id: 'audio-advertising',
            label: 'Audio Advertising',
            title: 'Connect through podcast and audio platforms',
            subtitle:
              'Reach business professionals during their commute and downtime with targeted audio campaigns.',
            cta: 'View Audio Advertising',
            color: '#10b981',
          },
          {
            id: 'social-advertising',
            label: 'Social Advertising',
            title: 'Build professional connections with social ads',
            subtitle:
              'Target decision-makers where they network professionally and drive meaningful business conversations.',
            cta: 'View Social Advertising',
            color: '#3b82f6',
          },
        ]}
        defaultTab={4}
      />

      {/* Video Showcase Section */}
      <VideoCarousel />

      {/* Optimization Features Section */}
      <FeatureGrid
        features={[
          {
            icon: <FilterList />,
            title: 'Intent-based prioritization',
            description:
              'Focus on accounts showing buying signals and engagement patterns.',
            color: siteConfig.colors.primary,
          },
          {
            icon: <Sync />,
            title: 'Cross-channel alignment',
            description:
              'Coordinate messaging across all touchpoints for consistent experiences.',
            color: siteConfig.colors.secondary,
          },
          {
            icon: <Speed />,
            title: 'Real-time optimization',
            description:
              'Continuously improve campaigns based on account engagement data.',
            color: siteConfig.colors.accent,
          },
        ]}
      />

      {/* Our Services  */}
      <OurServices />

      {/* Stats Section */}
      <Box sx={{ py: 8, bgcolor: 'primary.main', color: 'white' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {siteConfig.stats.map((stat, index) => (
              <Grid item xs={6} md={3} key={index}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h3" sx={{ fontWeight: 800, mb: 1 }}>
                    {stat.value}
                  </Typography>
                  <Typography variant="body1" sx={{ opacity: 0.9 }}>
                    {stat.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Case Studies */}
      <CaseStudies />

      {/* Awards */}
      <Awards />

      {/* CTA Section */}
      <Box sx={{ py: 12, bgcolor: 'grey.50' }}>
        <Container maxWidth="md">
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h3" sx={{ mb: 3, fontWeight: 700 }}>
              {siteConfig.content.cta.headline}
            </Typography>
            <Typography
              variant="h6"
              sx={{ mb: 4, color: 'text.secondary', fontWeight: 400 }}
            >
              {siteConfig.content.cta.subheadline}
            </Typography>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              justifyContent="center"
            >
              {/*  <Button
                variant="contained"
                size="large"
                component={Link}
                href="/trial"
                endIcon={<ArrowForward />}
                sx={{
                  background: `linear-gradient(45deg, ${siteConfig.colors.primary}, ${siteConfig.colors.secondary})`,
                  '&:hover': {
                    background: `linear-gradient(45deg, ${siteConfig.colors.secondary}, ${siteConfig.colors.primary})`,
                  },
                }}
              >
                Start Free Trial
              </Button> */}
              <Button
                variant="outlined"
                size="large"
                component={Link}
                href="/contact"
                sx={{
                  borderColor: 'primary.main',
                  color: 'primary.main',
                  '&:hover': {
                    bgcolor: 'primary.main',
                    color: 'white',
                  },
                }}
              >
                Schedule Demo
              </Button>
            </Stack>
          </Box>
        </Container>
      </Box>

      <Footer />
    </main>
  )
}

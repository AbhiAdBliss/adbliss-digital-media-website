'use client'
import React from 'react'
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
  Paper,
} from '@mui/material'
import {
  VolumeUp,
  Headphones,
  Radio,
  ArrowForward,
  PlayArrow,
  MusicNote,
  Psychology,
  TrendingUp,
  CheckCircle,
  Mic,
  GraphicEq,
} from '@mui/icons-material'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { siteConfig } from '../../config'
import BrandLogo from '../components/BrandLogo'

export default function AudioAdvertisingPage() {
  return (
    <main>
      <Header />

      {/* Hero Section */}
      <Box
        sx={{
          pt: { xs: 12, md: 16 },
          pb: { xs: 8, md: 12 },
          background: `linear-gradient(135deg, ${siteConfig.colors.primary} 0%, ${siteConfig.colors.secondary} 100%)`,
          color: 'white',
          minHeight: '90vh',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} lg={6}>
              <Box sx={{ maxWidth: 600 }}>
                <Chip
                  label="AUDIO ADVERTISING"
                  sx={{
                    mb: 3,
                    bgcolor: 'rgba(255,255,255,0.2)',
                    color: 'white',
                    border: '1px solid rgba(255,255,255,0.3)',
                    fontWeight: 600,
                  }}
                />
                <Typography
                  variant="h1"
                  sx={{
                    mb: 3,
                    fontWeight: 800,
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                    lineHeight: 1.1,
                  }}
                >
                  Voice That
                  <Box
                    component="span"
                    sx={{ display: 'block', color: siteConfig.colors.accent }}
                  >
                    Drives Action
                  </Box>
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    mb: 4,
                    fontWeight: 400,
                    opacity: 0.9,
                    lineHeight: 1.6,
                  }}
                >
                  Reach Digital Marketing professionals during their commute, workout, and
                  downtime with targeted audio campaigns on podcasts, streaming
                  platforms, and digital radio.
                </Typography>
                 <Link href="/contact" passHref>
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  spacing={2}
                  sx={{ mb: 6 }}
                >
                  <Button
                    variant="contained"
                    size="large"
                    sx={{
                      bgcolor: siteConfig.colors.accent,
                      px: 4,
                      py: 1.5,
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      '&:hover': { bgcolor: '#d97706' },
                    }}
                  >
                    Get Started
                  </Button>
                </Stack>
                </Link>
                <Stack direction="row" spacing={4} sx={{ opacity: 0.8 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <CheckCircle
                      sx={{ fontSize: 20, color: siteConfig.colors.accent }}
                    />
                    <Typography variant="body2">Easy Setup</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <CheckCircle
                      sx={{ fontSize: 20, color: siteConfig.colors.accent }}
                    />
                    <Typography variant="body2">Real-time Analytics</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <CheckCircle
                      sx={{ fontSize: 20, color: siteConfig.colors.accent }}
                    />
                    <Typography variant="body2">Global Reach</Typography>
                  </Box>
                </Stack>
              </Box>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Box
                sx={{
                  position: 'relative',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: { xs: 300, md: 400 },
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    width: { xs: 250, md: 320 },
                    height: { xs: 250, md: 320 },
                    borderRadius: '50%',
                    background: `linear-gradient(135deg, rgba(124, 58, 237, 0.2) 0%, rgba(5, 150, 105, 0.2) 100%)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: `2px solid rgba(245, 158, 11, 0.3)`,
                  }}
                >
                  <VolumeUp
                    sx={{
                      fontSize: { xs: 60, md: 80 },
                      color: siteConfig.colors.accent,
                    }}
                  />

                  {/* Sound waves */}
                  {[1, 2, 3].map((wave) => (
                    <Box
                      key={wave}
                      sx={{
                        position: 'absolute',
                        width: `${100 + wave * 30}%`,
                        height: `${100 + wave * 30}%`,
                        borderRadius: '50%',
                        border: `2px solid rgba(245, 158, 11, ${0.3 - wave * 0.1})`,
                        animation: `pulse ${2 + wave * 0.5}s infinite`,
                        '@keyframes pulse': {
                          '0%, 100%': { opacity: 0.3, transform: 'scale(1)' },
                          '50%': { opacity: 0.1, transform: 'scale(1.05)' },
                        },
                      }}
                    />
                  ))}

                  <Box
                    sx={{
                      position: 'absolute',
                      top: '10%',
                      right: '10%',
                      width: 60,
                      height: 60,
                      borderRadius: '50%',
                      bgcolor: `rgba(5, 150, 105, 0.2)`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: `1px solid ${siteConfig.colors.secondary}`,
                    }}
                  >
                    <Mic
                      sx={{ fontSize: 24, color: siteConfig.colors.secondary }}
                    />
                  </Box>

                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: '15%',
                      left: '15%',
                      width: 50,
                      height: 50,
                      borderRadius: '50%',
                      bgcolor: `rgba(124, 58, 237, 0.2)`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: `1px solid ${siteConfig.colors.primary}`,
                    }}
                  >
                    <Headphones
                      sx={{ fontSize: 20, color: siteConfig.colors.primary }}
                    />
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Stats Section */}
      <Box sx={{ py: 8, bgcolor: 'primary.main', color: 'white' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {[
              { value: '4.2x', label: 'Higher Brand Recall' },
              { value: '73%', label: 'Completion Rate' },
              { value: '2.8x', label: 'Purchase Intent Lift' },
              { value: '89%', label: 'Audio Ad Acceptance' },
            ].map((stat, index) => (
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

      {/* Section-3 */}
      <BrandLogo />

      {/* Features Section */}
      <Box sx={{ py: 12, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Chip
              label="Why Audio Works"
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
              Accelerate Your Digital Marketing Growth with Audio
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
              Connect with your audience through the intimate power of sound and
              drive measurable business results.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {[
              {
                icon: <Psychology />,
                title: 'Emotional Connection',
                description:
                  'Audio creates deeper emotional bonds with your audience through voice, music, and sound effects.',
                color: siteConfig.colors.primary,
              },
              {
                icon: <Headphones />,
                title: 'Captive Audience',
                description:
                  'Reach listeners during focused activities like commuting, exercising, or working.',
                color: siteConfig.colors.secondary,
              },
              {
                icon: <TrendingUp />,
                title: 'Higher Engagement',
                description:
                  'Audio ads achieve 4.2x higher brand recall and superior completion rates vs display ads.',
                color: siteConfig.colors.accent,
              },
            ].map((feature, index) => (
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
                    {feature.icon}
                  </Avatar>
                  <CardContent sx={{ pt: 6, pb: 4, px: 3 }}>
                    <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                      {feature.title}
                    </Typography>
                    <Typography color="text.secondary" sx={{ lineHeight: 1.7 }}>
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Audio Formats Section */}
      <Box sx={{ py: 12, bgcolor: 'grey.50' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h3" sx={{ mb: 3, fontWeight: 700 }}>
              Audio Advertising Formats
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{ fontWeight: 400 }}
            >
              Choose the perfect format for your Digital Marketing campaign
            </Typography>
          </Box>
          <Grid container spacing={4}>
            {[
              {
                title: 'Podcast Advertising',
                description:
                  'Sponsor business podcasts and reach engaged professional audiences.',
                features: [
                  'Host-Read Ads',
                  'Programmatic Insertion',
                  'Branded Content',
                ],
                icon: <MusicNote sx={{ fontSize: 40, color: 'white' }} />,
                color: siteConfig.colors.primary,
              },
              {
                title: 'Streaming Audio',
                description:
                  'Target professionals on Spotify, Pandora, and other streaming platforms.',
                features: ['Music Streaming', 'Audio Books', 'News Podcasts'],
                icon: <Headphones sx={{ fontSize: 40, color: 'white' }} />,
                color: siteConfig.colors.secondary,
              },
              {
                title: 'Digital Radio',
                description:
                  'Reach commuting professionals through digital radio and talk shows.',
                features: ['Talk Radio', 'News Radio', 'Business Shows'],
                icon: <Radio sx={{ fontSize: 40, color: 'white' }} />,
                color: siteConfig.colors.accent,
              },
              {
                title: 'Voice Assistants',
                description:
                  'Advertise through smart speakers and voice-activated devices.',
                features: [
                  'Smart Speakers',
                  'Voice Search',
                  'Audio Flash Briefings',
                ],
                icon: <VolumeUp sx={{ fontSize: 40, color: 'white' }} />,
                color: '#8b5cf6',
              },
            ].map((format, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    p: 0,
                    overflow: 'hidden',
                    border: '1px solid',
                    borderColor: 'divider',
                  }}
                >
                  <Box
                    sx={{
                      bgcolor: format.color,
                      color: 'white',
                      p: 3,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2,
                    }}
                  >
                    {format.icon}
                    <Typography variant="h5" sx={{ fontWeight: 700 }}>
                      {format.title}
                    </Typography>
                  </Box>
                  <CardContent sx={{ p: 4 }}>
                    <Typography
                      color="text.secondary"
                      sx={{ mb: 3, lineHeight: 1.6 }}
                    >
                      {format.description}
                    </Typography>
                    <Stack
                      direction="row"
                      spacing={1}
                      flexWrap="wrap"
                      useFlexGap
                    >
                      {format.features.map((feature, idx) => (
                        <Chip
                          key={idx}
                          label={feature}
                          size="small"
                          sx={{
                            bgcolor: `${format.color}15`,
                            color: format.color,
                            fontWeight: 500,
                            border: `1px solid ${format.color}30`,
                          }}
                        />
                      ))}
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* How It Works Section */}
      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              variant="h2"
              sx={{ mb: 3, fontWeight: 700, color: '#1f2937' }}
            >
              How It Works
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ fontWeight: 400 }}
            >
              Launch your audio campaign in four simple steps
            </Typography>
          </Box>
          <Grid container spacing={4}>
            {[
              {
                step: '1',
                title: 'Create Your Audio',
                description:
                  'Upload your audio creative or use our studio to record professional voice-overs.',
              },
              {
                step: '2',
                title: 'Define Your Audience',
                description:
                  'Target listeners based on demographics, interests, listening habits, and location.',
              },
              {
                step: '3',
                title: 'Choose Placements',
                description:
                  'Select from podcasts, streaming services, digital radio, and smart speakers.',
              },
              {
                step: '4',
                title: 'Track Performance',
                description:
                  'Monitor completion rates, engagement metrics, and conversions in real-time.',
              },
            ].map((item, index) => (
              <Grid item xs={12} md={6} lg={3} key={index}>
                <Box sx={{ textAlign: 'center' }}>
                  <Box
                    sx={{
                      width: 64,
                      height: 64,
                      borderRadius: '50%',
                      bgcolor: '#3b82f6',
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 3,
                      fontSize: '1.5rem',
                      fontWeight: 700,
                    }}
                  >
                    {item.step}
                  </Box>
                  <Typography
                    variant="h5"
                    sx={{ mb: 2, fontWeight: 600, color: '#1f2937' }}
                  >
                    {item.title}
                  </Typography>
                  <Typography color="text.secondary" sx={{ lineHeight: 1.6 }}>
                    {item.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Targeting Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: '#f8fafc' }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                variant="h2"
                sx={{ mb: 3, fontWeight: 700, color: '#1f2937' }}
              >
                Precise Targeting
              </Typography>
              <Typography
                variant="h5"
                color="text.secondary"
                sx={{ mb: 4, fontWeight: 400 }}
              >
                Reach the right audience at the right moment with advanced
                targeting capabilities.
              </Typography>
              <Stack spacing={3}>
                {[
                  {
                    title: 'Demographic Targeting',
                    description:
                      'Target by age, gender, income, education, and occupation.',
                  },
                  {
                    title: 'Interest-Based Targeting',
                    description:
                      'Reach users based on their listening preferences and content consumption.',
                  },
                  {
                    title: 'Behavioral Targeting',
                    description:
                      'Target based on listening habits, device usage, and engagement patterns.',
                  },
                  {
                    title: 'Geographic Targeting',
                    description:
                      'Focus on specific countries, regions, cities, or custom locations.',
                  },
                ].map((option, index) => (
                  <Box key={index} sx={{ display: 'flex', gap: 2 }}>
                    <Box
                      sx={{
                        width: 8,
                        height: 8,
                        borderRadius: '50%',
                        bgcolor: '#3b82f6',
                        mt: 1,
                        flexShrink: 0,
                      }}
                    />
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{ mb: 1, fontWeight: 600, color: '#1f2937' }}
                      >
                        {option.title}
                      </Typography>
                      <Typography
                        color="text.secondary"
                        sx={{ lineHeight: 1.6 }}
                      >
                        {option.description}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper
                elevation={0}
                sx={{
                  bgcolor: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                  background:
                    'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                  borderRadius: 3,
                  p: 6,
                  color: 'white',
                  textAlign: 'center',
                }}
              >
                <Box sx={{ mb: 3 }}>
                  <GraphicEq sx={{ fontSize: 64, opacity: 0.9 }} />
                </Box>
                <Typography variant="h4" sx={{ mb: 2, fontWeight: 600 }}>
                  AI-Powered Optimization
                </Typography>
                <Typography sx={{ opacity: 0.9, lineHeight: 1.6 }}>
                  Our machine learning algorithms automatically optimize your
                  campaigns for better performance, higher engagement, and
                  improved ROI.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Benefits Section */}
      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              variant="h2"
              sx={{ mb: 3, fontWeight: 700, color: '#1f2937' }}
            >
              Why Audio Outperforms
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ fontWeight: 400 }}
            >
              Audio advertising delivers superior results compared to
              traditional formats
            </Typography>
          </Box>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  height: '100%',
                  border: '2px solid #3b82f6',
                  borderRadius: 2,
                  bgcolor: '#f8fafc',
                }}
              >
                <Typography
                  variant="h4"
                  sx={{ mb: 3, fontWeight: 600, color: '#3b82f6' }}
                >
                  Audio Advertising
                </Typography>
                <Stack spacing={2.5}>
                  {[
                    '85% completion rates',
                    '3.2x higher engagement',
                    '67% brand recall lift',
                    'Intimate listening experience',
                    'Multi-tasking friendly',
                    'Emotional connection through voice',
                    'No ad blocker interference',
                    'Growing audience reach',
                  ].map((benefit, index) => (
                    <Box
                      key={index}
                      sx={{ display: 'flex', alignItems: 'center', gap: 2 }}
                    >
                      <CheckCircle sx={{ fontSize: 20, color: '#10b981' }} />
                      <Typography sx={{ fontWeight: 500 }}>
                        {benefit}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  height: '100%',
                  border: '1px solid #e5e7eb',
                  borderRadius: 2,
                }}
              >
                <Typography
                  variant="h4"
                  sx={{ mb: 3, fontWeight: 600, color: '#6b7280' }}
                >
                  Traditional Display
                </Typography>
                <Stack spacing={2.5}>
                  {[
                    'Lower completion rates',
                    'Banner blindness effect',
                    'Visual competition',
                    'Easily ignored or skipped',
                    'Requires visual attention',
                    'Limited emotional impact',
                    'Ad blocker susceptibility',
                    'Declining effectiveness',
                  ].map((limitation, index) => (
                    <Box
                      key={index}
                      sx={{ display: 'flex', alignItems: 'center', gap: 2 }}
                    >
                      <Box
                        sx={{
                          width: 20,
                          height: 20,
                          bgcolor: '#e5e7eb',
                          borderRadius: '50%',
                        }}
                      />
                      <Typography color="text.secondary">
                        {limitation}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Success Story */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: '#f8fafc' }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Paper
                elevation={0}
                sx={{
                  bgcolor: 'white',
                  borderRadius: 3,
                  p: 5,
                  border: '1px solid #e5e7eb',
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    mb: 3,
                    fontWeight: 600,
                    color: '#1f2937',
                    lineHeight: 1.3,
                  }}
                >
                  &ldquo;Audio advertising helped us reach 2.5M professionals
                  and increased our conversion rate by 180%.&rdquo;
                </Typography>
                <Typography
                  color="text.secondary"
                  sx={{ mb: 4, lineHeight: 1.6, fontSize: '1.1rem' }}
                >
                  SaaS company CloudTech leveraged podcast advertising and
                  streaming audio to reach decision-makers in their target
                  industries.
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                  <Avatar
                    sx={{
                      bgcolor: '#3b82f6',
                      width: 56,
                      height: 56,
                      fontSize: '1.25rem',
                      fontWeight: 600,
                    }}
                  >
                    CT
                  </Avatar>
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: 600, color: '#1f2937' }}
                    >
                      Sarah Chen
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      VP Marketing, CloudTech
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h2"
                sx={{ mb: 3, fontWeight: 700, color: '#1f2937' }}
              >
                Proven Results
              </Typography>
              <Typography
                variant="h5"
                color="text.secondary"
                sx={{ mb: 6, fontWeight: 400 }}
              >
                Join thousands of brands achieving exceptional results with
                audio advertising.
              </Typography>
              <Grid container spacing={4}>
                {[
                  { metric: '2.5M', label: 'Professionals Reached' },
                  { metric: '180%', label: 'Conversion Increase' },
                  { metric: '4.2x', label: 'Better ROI' },
                  { metric: '92%', label: 'Client Satisfaction' },
                ].map((result, index) => (
                  <Grid item xs={6} key={index}>
                    <Box>
                      <Typography
                        variant="h3"
                        sx={{ fontWeight: 700, color: '#3b82f6', mb: 1 }}
                      >
                        {result.metric}
                      </Typography>
                      <Typography
                        variant="body1"
                        color="text.secondary"
                        sx={{ fontWeight: 500 }}
                      >
                        {result.label}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box sx={{ py: 12, bgcolor: 'grey.50' }}>
        <Container maxWidth="md">
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h3" sx={{ mb: 3, fontWeight: 700 }}>
              Ready to Launch Audio Campaigns?
            </Typography>
            <Typography
              variant="h6"
              sx={{ mb: 4, color: 'text.secondary', fontWeight: 400 }}
            >
              Start reaching Digital Marketing professionals with powerful audio advertising
              that drives real results
            </Typography>
             <Link href="/contact" passHref>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              justifyContent="center"
            >
              <Button
                variant="outlined"
                size="large"
                startIcon={<PlayArrow />}
                sx={{
                  borderColor: 'primary.main',
                  color: 'primary.main',
                  '&:hover': {
                    bgcolor: 'primary.main',
                    color: 'white',
                  },
                }}
              >
                Listen Demo
              </Button>
            </Stack>
            </Link>
          </Box>
        </Container>
      </Box>

      <Footer />
    </main>
  )
}

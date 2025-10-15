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
} from '@mui/material'
import {
  Tv,
  LocationOn,
  Analytics,
  TrendingUp,
  Visibility,
  Speed,
  ArrowForward,
} from '@mui/icons-material'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { siteConfig } from '../../config'
import BrandLogo from '../components/BrandLogo'
import Link from 'next/link'


export default function DOOHPage() {
  return (
    <main>
      <Header />

      {/* Hero Section */}
      <Box
        sx={{
          pt: 12,
          pb: 8,
          background: `linear-gradient(135deg, ${siteConfig.colors.primary} 0%, ${siteConfig.colors.secondary} 100%)`,
          color: 'white',
          minHeight: '80vh',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h2" sx={{ mb: 3, fontWeight: 800 }}>
                Digital Out-of-Home Advertising
              </Typography>
              <Typography
                variant="h5"
                sx={{ mb: 4, opacity: 0.9, fontWeight: 400 }}
              >
                Reach your B2B audience with premium digital billboards, transit
                displays, and interactive screens in high-traffic business
                districts.
              </Typography>
               <Link href="/contact" passHref>
              <Stack direction="row" spacing={2}>
                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    borderColor: 'white',
                    color: 'white',
                    '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' },
                  }}
                >
                  View Demo
                </Button>
              </Stack>
              </Link>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  bgcolor: 'rgba(255,255,255,0.1)',
                  borderRadius: 3,
                  p: 4,
                  textAlign: 'center',
                }}
              >
                <Tv sx={{ fontSize: 120, mb: 2, opacity: 0.8 }} />
                <Typography variant="h6">Premium Digital Displays</Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Stats Section */}
      <Box sx={{ py: 8, bgcolor: 'grey.50' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {[
              { value: '50K+', label: 'Digital Screens' },
              { value: '95%', label: 'Viewability Rate' },
              { value: '2.5M', label: 'Daily Impressions' },
              { value: '150+', label: 'Cities Covered' },
            ].map((stat, index) => (
              <Grid item xs={6} md={3} key={index}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 800,
                      mb: 1,
                      color: siteConfig.colors.primary,
                    }}
                  >
                    {stat.value}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
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
      
      <Box sx={{ py: 12 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Chip
              label="DOOH Advertising Features"
              sx={{
                mb: 2,
                bgcolor: siteConfig.colors.primary,
                color: 'white',
                fontWeight: 600,
              }}
            />
            <Typography variant="h3" sx={{ mb: 3, fontWeight: 700 }}>
              Maximize Your Brand Visibility
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{ maxWidth: '600px', mx: 'auto' }}
            >
              Leverage premium digital out-of-home inventory to reach
              decision-makers in high-impact locations.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {[
              {
                icon: <LocationOn />,
                title: 'Strategic Locations',
                description:
                  'Premium placements in business districts, airports, and high-traffic areas where your B2B audience commutes.',
                color: siteConfig.colors.primary,
              },
              {
                icon: <Visibility />,
                title: 'High Viewability',
                description:
                  'Guaranteed viewability with eye-level placements and optimal viewing angles for maximum impact.',
                color: siteConfig.colors.secondary,
              },
              {
                icon: <Analytics />,
                title: 'Real-time Analytics',
                description:
                  'Track impressions, engagement, and foot traffic data to measure campaign performance in real-time.',
                color: siteConfig.colors.accent,
              },
              {
                icon: <Speed />,
                title: 'Dynamic Content',
                description:
                  'Update creative content instantly across all screens with our cloud-based content management system.',
                color: '#e11d48',
              },
              {
                icon: <TrendingUp />,
                title: 'Audience Insights',
                description:
                  'Leverage demographic and behavioral data to optimize targeting and improve campaign ROI.',
                color: '#7c3aed',
              },
              {
                icon: <Tv />,
                title: 'Premium Inventory',
                description:
                  'Access to high-quality digital billboards, transit displays, and interactive kiosks in prime locations.',
                color: '#059669',
              },
            ].map((feature, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    textAlign: 'center',
                    border: '1px solid',
                    borderColor: 'divider',
                    position: 'relative',
                    overflow: 'visible',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: 3,
                    },
                    transition: 'all 0.3s ease',
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

      {/* How It Works Section */}
      <Box sx={{ py: 12, bgcolor: 'grey.50' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h3" sx={{ mb: 3, fontWeight: 700 }}>
              How DOOH Advertising Works
            </Typography>
            <Typography variant="h6" color="text.secondary">
              Simple steps to launch your digital out-of-home campaign
            </Typography>
          </Box>
          <Grid container spacing={4}>
            {[
              {
                step: '01',
                title: 'Choose Your Locations',
                description:
                  'Select from premium digital screens in business districts, airports, and high-traffic areas.',
              },
              {
                step: '02',
                title: 'Upload Your Creative',
                description:
                  'Upload your video or static creative content. Our team can help optimize for DOOH formats.',
              },
              {
                step: '03',
                title: 'Set Your Budget',
                description:
                  'Define your campaign budget, duration, and targeting parameters for maximum ROI.',
              },
              {
                step: '04',
                title: 'Launch & Monitor',
                description:
                  'Your campaign goes live instantly. Track performance with real-time analytics and insights.',
              },
            ].map((item, index) => (
              <Grid item xs={12} md={3} key={index}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography
                    variant="h2"
                    sx={{
                      fontWeight: 800,
                      color: siteConfig.colors.primary,
                      opacity: 0.2,
                      mb: 2,
                    }}
                  >
                    {item.step}
                  </Typography>
                  <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                    {item.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {item.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Screen Types Section */}
      <Box sx={{ py: 12 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h3" sx={{ mb: 3, fontWeight: 700 }}>
              Premium Screen Inventory
            </Typography>
            <Typography variant="h6" color="text.secondary">
              Access diverse digital out-of-home formats for maximum impact
            </Typography>
          </Box>
          <Grid container spacing={4}>
            {[
              {
                title: 'Digital Billboards',
                description:
                  'Large-format displays on highways and major roads with high visibility and reach.',
                features: [
                  '4K Resolution',
                  '24/7 Display',
                  'Weather Resistant',
                ],
                image: '📺',
              },
              {
                title: 'Transit Displays',
                description:
                  'Screens in buses, trains, and transit stations reaching commuting professionals.',
                features: ['Captive Audience', 'Dwell Time', 'Business Routes'],
                image: '🚌',
              },
              {
                title: 'Street Furniture',
                description:
                  'Interactive kiosks and displays in urban areas with high foot traffic.',
                features: ['Touch Interaction', 'Urban Locations', 'Eye Level'],
                image: '🏙️',
              },
              {
                title: 'Retail Screens',
                description:
                  'In-store and mall displays targeting shoppers and business visitors.',
                features: [
                  'Point of Sale',
                  'Targeted Audience',
                  'High Engagement',
                ],
                image: '🏬',
              },
            ].map((screen, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card sx={{ height: '100%', p: 3 }}>
                  <Box
                    sx={{ display: 'flex', alignItems: 'flex-start', gap: 3 }}
                  >
                    <Typography sx={{ fontSize: '3rem' }}>
                      {screen.image}
                    </Typography>
                    <Box>
                      <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                        {screen.title}
                      </Typography>
                      <Typography color="text.secondary" sx={{ mb: 2 }}>
                        {screen.description}
                      </Typography>
                      <Stack direction="row" spacing={1} flexWrap="wrap">
                        {screen.features.map((feature, idx) => (
                          <Chip
                            key={idx}
                            label={feature}
                            size="small"
                            sx={{ bgcolor: 'grey.100' }}
                          />
                        ))}
                      </Stack>
                    </Box>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Targeting Options */}
      <Box sx={{ py: 12, bgcolor: 'grey.50' }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h3" sx={{ mb: 3, fontWeight: 700 }}>
                Advanced Targeting Options
              </Typography>
              <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
                Reach the right audience at the right time with precision
                targeting capabilities.
              </Typography>
              <Stack spacing={3}>
                {[
                  {
                    title: 'Geographic Targeting',
                    description:
                      'Target specific cities, business districts, or custom geographic areas.',
                  },
                  {
                    title: 'Demographic Targeting',
                    description:
                      'Reach professionals based on age, income, job title, and industry.',
                  },
                  {
                    title: 'Time-based Targeting',
                    description:
                      'Schedule campaigns for peak business hours or specific days of the week.',
                  },
                  {
                    title: 'Behavioral Targeting',
                    description:
                      'Target based on commuting patterns, shopping behavior, and location history.',
                  },
                ].map((option, index) => (
                  <Box key={index}>
                    <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                      {option.title}
                    </Typography>
                    <Typography color="text.secondary">
                      {option.description}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  bgcolor: siteConfig.colors.primary,
                  borderRadius: 3,
                  p: 4,
                  color: 'white',
                  textAlign: 'center',
                }}
              >
                <LocationOn sx={{ fontSize: 80, mb: 2, opacity: 0.8 }} />
                <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                  Precision Location Targeting
                </Typography>
                <Typography sx={{ opacity: 0.9 }}>
                  Target specific business districts, airports, and high-traffic
                  areas where your B2B audience is most active.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Benefits Section */}
      <Box sx={{ py: 12 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h3" sx={{ mb: 3, fontWeight: 700 }}>
              Why Choose DOOH for B2B Marketing?
            </Typography>
          </Box>
          <Grid container spacing={4}>
            {[
              {
                title: 'Unmissable Visibility',
                description:
                  "Large-format displays ensure your message can't be skipped, blocked, or ignored.",
                stat: '95%',
                statLabel: 'Viewability Rate',
              },
              {
                title: 'Premium Brand Association',
                description:
                  'Associate your brand with premium locations and high-quality digital displays.',
                stat: '3.2x',
                statLabel: 'Brand Recall Increase',
              },
              {
                title: 'Contextual Relevance',
                description:
                  'Reach professionals during their daily commute and business activities.',
                stat: '78%',
                statLabel: 'Business Audience',
              },
            ].map((benefit, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card sx={{ height: '100%', p: 4, textAlign: 'center' }}>
                  <Typography
                    variant="h2"
                    sx={{
                      fontWeight: 800,
                      color: siteConfig.colors.primary,
                      mb: 1,
                    }}
                  >
                    {benefit.stat}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 3 }}
                  >
                    {benefit.statLabel}
                  </Typography>
                  <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                    {benefit.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {benefit.description}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Case Study Section */}
      <Box sx={{ py: 12, bgcolor: 'grey.50' }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  bgcolor: 'white',
                  borderRadius: 3,
                  p: 4,
                  boxShadow: 2,
                }}
              >
                <Typography variant="h4" sx={{ mb: 3, fontWeight: 700 }}>
                  &ldquo;DOOH campaigns delivered 40% higher brand awareness compared
                  to traditional advertising.&rdquo;
                </Typography>
                <Typography color="text.secondary" sx={{ mb: 3 }}>
                  TechCorp increased their B2B lead generation by 65% using
                  strategic DOOH placements in business districts across major
                  cities.
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Avatar sx={{ bgcolor: siteConfig.colors.primary }}>
                    TC
                  </Avatar>
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                      Sarah Johnson
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Marketing Director, TechCorp
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h3" sx={{ mb: 3, fontWeight: 700 }}>
                Proven Results for B2B Brands
              </Typography>
              <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
                See how leading B2B companies are using DOOH to drive awareness
                and generate qualified leads.
              </Typography>
              <Grid container spacing={3}>
                {[
                  { metric: '40%', label: 'Higher Brand Awareness' },
                  { metric: '65%', label: 'Increase in Lead Generation' },
                  { metric: '2.8x', label: 'Better ROI vs Traditional' },
                  { metric: '89%', label: 'Campaign Completion Rate' },
                ].map((result, index) => (
                  <Grid item xs={6} key={index}>
                    <Box sx={{ textAlign: 'center' }}>
                      <Typography
                        variant="h4"
                        sx={{
                          fontWeight: 800,
                          color: siteConfig.colors.primary,
                          mb: 1,
                        }}
                      >
                        {result.metric}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
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
      <Box sx={{ py: 12, bgcolor: siteConfig.colors.primary, color: 'white' }}>
        <Container maxWidth="md">
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h3" sx={{ mb: 3, fontWeight: 700 }}>
              Ready to Launch Your DOOH Campaign?
            </Typography>
            <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
              Connect with decision-makers through premium digital out-of-home
              advertising. Start reaching your B2B audience today.
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
                sx={{
                  borderColor: 'white',
                  color: 'white',
                  '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' },
                }}
              >
                Schedule Demo
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

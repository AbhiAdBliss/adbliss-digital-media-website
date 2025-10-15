'use client'
import React from 'react'
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  Button,
  Stack,
  Chip,
  Avatar,
} from '@mui/material'
import {
  Article,

  ArrowForward,
  PlayArrow,
  IntegrationInstructions,
  Psychology,
  CampaignOutlined,
} from '@mui/icons-material'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BrandLogo from '../components/BrandLogo'
import Link from 'next/link'

export default function NativeAdvertisingPage() {
  return (
    <main>
      <Header />

      {/* Hero Section */}
      <Box
        sx={{
          pt: 12,
          pb: 8,
          background:
            'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
          color: 'white',
          minHeight: '90vh',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              'radial-gradient(circle at 20% 30%, rgba(124, 58, 237, 0.2) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(5, 150, 105, 0.15) 0%, transparent 50%)',
            zIndex: 0,
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Grid container spacing={8} alignItems="center">
            <Grid item xs={12} md={6}>
              <Chip
                label="NATIVE ADVERTISING"
                sx={{
                  mb: 3,
                  bgcolor: 'rgba(5, 150, 105, 0.2)',
                  color: '#10b981',
                  border: '1px solid rgba(5, 150, 105, 0.3)',
                  fontWeight: 600,
                }}
              />
              <Typography
                variant="h1"
                sx={{
                  mb: 3,
                  fontWeight: 900,
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                }}
              >
                Seamless Content
                <Box
                  component="span"
                  sx={{ display: 'block', color: '#10b981' }}
                >
                  That Converts
                </Box>
              </Typography>
              <Typography
                variant="h5"
                sx={{ mb: 4, opacity: 0.8, fontWeight: 400, lineHeight: 1.6 }}
              >
                Engage B2B decision-makers with native ads that blend naturally
                into premium content environments and drive meaningful
                interactions.
              </Typography>
               <Link href="/contact" passHref>
              <Stack direction="row" spacing={3}>
                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    borderColor: 'rgba(255,255,255,0.3)',
                    color: 'white',
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                    '&:hover': {
                      bgcolor: 'rgba(255,255,255,0.1)',
                      borderColor: 'rgba(255,255,255,0.5)',
                    },
                  }}
                >
                  Get Started
                </Button>
              </Stack>
              </Link>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2,
                }}
              >
                {/* Mock Article Cards */}
                {[
                  { title: 'B2B Marketing Trends 2024', sponsored: false },
                  {
                    title: 'Transform Your Sales Process with AdBliss',
                    sponsored: true,
                  },
                  {
                    title: 'Industry Report: Digital Transformation',
                    sponsored: false,
                  },
                ].map((article, index) => (
                  <Box
                    key={index}
                    sx={{
                      bgcolor: article.sponsored
                        ? 'rgba(16, 185, 129, 0.1)'
                        : 'rgba(255,255,255,0.1)',
                      border: article.sponsored
                        ? '1px solid rgba(16, 185, 129, 0.3)'
                        : '1px solid rgba(255,255,255,0.2)',
                      borderRadius: 2,
                      p: 3,
                      backdropFilter: 'blur(10px)',
                      transform: index === 1 ? 'scale(1.05)' : 'scale(1)',
                      zIndex: index === 1 ? 2 : 1,
                    }}
                  >
                    <Stack direction="row" spacing={2} alignItems="center">
                      <Article
                        sx={{ color: article.sponsored ? '#10b981' : 'white' }}
                      />
                      <Box>
                        <Typography
                          variant="body1"
                          sx={{ fontWeight: 600, mb: 0.5 }}
                        >
                          {article.title}
                        </Typography>
                        {article.sponsored && (
                          <Chip
                            label="Sponsored"
                            size="small"
                            sx={{
                              bgcolor: 'rgba(16, 185, 129, 0.2)',
                              color: '#10b981',
                              fontSize: '0.7rem',
                            }}
                          />
                        )}
                      </Box>
                    </Stack>
                  </Box>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Stats Section */}
      <Box sx={{ py: 12, bgcolor: '#f8fafc' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h3" sx={{ mb: 2, fontWeight: 800 }}>
              Native Advertising Performance
            </Typography>
            <Typography variant="h6" color="text.secondary">
              See why leading B2B brands choose native advertising
            </Typography>
          </Box>
          <Grid container spacing={4}>
            {[
              { value: '3x', label: 'Higher Engagement', color: '#059669' },
              { value: '70%', label: 'Better Brand Recall', color: '#7c3aed' },
              { value: '2.5x', label: 'More Click-Through', color: '#f59e0b' },
              { value: '85%', label: 'Less Ad Fatigue', color: '#ef4444' },
            ].map((stat, index) => (
              <Grid item xs={6} md={3} key={index}>
                <Card
                  sx={{
                    textAlign: 'center',
                    p: 4,
                    border: 'none',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  <Typography
                    variant="h2"
                    sx={{
                      fontWeight: 900,
                      mb: 1,
                      color: stat.color,
                      fontSize: { xs: '2rem', md: '2.5rem' },
                    }}
                  >
                    {stat.value}
                  </Typography>
                  <Typography
                    variant="h6"
                    color="text.secondary"
                    sx={{ fontWeight: 600 }}
                  >
                    {stat.label}
                  </Typography>
                </Card>
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
          <Box sx={{ textAlign: 'center', mb: 10 }}>
            <Typography variant="h3" sx={{ mb: 3, fontWeight: 800 }}>
              Why Native Advertising Works
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ maxWidth: '700px', mx: 'auto' }}
            >
              Blend seamlessly into content feeds and engage audiences without
              disrupting their experience
            </Typography>
          </Box>

          <Grid container spacing={6}>
            {[
              {
                icon: <Psychology sx={{ fontSize: 40 }} />,
                title: 'Non-Disruptive',
                description:
                  'Ads that match the look, feel, and function of the content around them for better user experience.',
                color: '#059669',
              },
              {
                icon: <IntegrationInstructions sx={{ fontSize: 40 }} />,
                title: 'Seamless Integration',
                description:
                  'Native ads blend naturally into editorial content, social feeds, and premium publisher sites.',
                color: '#7c3aed',
              },
              {
                icon: <CampaignOutlined sx={{ fontSize: 40 }} />,
                title: 'Higher Performance',
                description:
                  'Generate 3x more engagement and 70% better brand recall compared to traditional display ads.',
                color: '#f59e0b',
              },
            ].map((feature, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    p: 4,
                    textAlign: 'center',
                    border: 'none',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 40px rgba(0,0,0,0.15)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  <Avatar
                    sx={{
                      bgcolor: feature.color,
                      width: 80,
                      height: 80,
                      mx: 'auto',
                      mb: 3,
                    }}
                  >
                    {feature.icon}
                  </Avatar>
                  <Typography variant="h4" sx={{ mb: 2, fontWeight: 700 }}>
                    {feature.title}
                  </Typography>
                  <Typography
                    variant="h6"
                    color="text.secondary"
                    sx={{ lineHeight: 1.6 }}
                  >
                    {feature.description}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Ad Formats Section */}
      <Box sx={{ py: 12, bgcolor: '#f8fafc' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h3" sx={{ mb: 3, fontWeight: 800 }}>
              Native Ad Formats
            </Typography>
            <Typography variant="h6" color="text.secondary">
              Choose the perfect format for your B2B campaign
            </Typography>
          </Box>
          <Grid container spacing={4}>
            {[
              {
                title: 'In-Feed Ads',
                description:
                  'Sponsored content that appears naturally in social media feeds and news streams.',
                features: [
                  'Social Media Integration',
                  'News Feed Placement',
                  'Content Matching',
                ],
              },
              {
                title: 'Content Recommendation',
                description:
                  'Promoted articles and content suggestions at the end of editorial pieces.',
                features: [
                  'Editorial Integration',
                  'Content Discovery',
                  'Publisher Networks',
                ],
              },
              {
                title: 'Sponsored Content',
                description:
                  'Branded articles and thought leadership pieces on premium publisher sites.',
                features: [
                  'Thought Leadership',
                  'Brand Authority',
                  'Premium Placement',
                ],
              },
              {
                title: 'Search Ads',
                description:
                  'Native search results that match the look and feel of organic listings.',
                features: [
                  'Search Integration',
                  'Intent Targeting',
                  'Organic Appearance',
                ],
              },
            ].map((format, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    p: 0,
                    overflow: 'hidden',
                    border: '1px solid #e5e7eb',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  <Box
                    sx={{
                      bgcolor: '#059669',
                      color: 'white',
                      p: 3,
                      textAlign: 'center',
                    }}
                  >
                    <Typography variant="h5" sx={{ fontWeight: 700 }}>
                      {format.title}
                    </Typography>
                  </Box>
                  <Box sx={{ p: 4 }}>
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
                            bgcolor: 'rgba(5, 150, 105, 0.1)',
                            color: '#059669',
                            fontWeight: 500,
                            border: '1px solid rgba(5, 150, 105, 0.2)',
                          }}
                        />
                      ))}
                    </Stack>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* How It Works Section */}
      <Box sx={{ py: 12 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h3" sx={{ mb: 3, fontWeight: 800 }}>
              How Native Advertising Works
            </Typography>
            <Typography variant="h6" color="text.secondary">
              Simple steps to launch high-performing native campaigns
            </Typography>
          </Box>
          <Grid container spacing={4}>
            {[
              {
                step: '01',
                title: 'Define Your Audience',
                description:
                  'Target B2B decision-makers based on job titles, industries, company size, and behavioral data.',
              },
              {
                step: '02',
                title: 'Create Compelling Content',
                description:
                  'Develop native ads that provide value while seamlessly blending with editorial content.',
              },
              {
                step: '03',
                title: 'Choose Premium Placements',
                description:
                  'Select from top-tier publisher networks and content discovery platforms.',
              },
              {
                step: '04',
                title: 'Optimize Performance',
                description:
                  'Monitor engagement metrics and optimize campaigns for maximum ROI and conversions.',
              },
            ].map((item, index) => (
              <Grid item xs={12} md={3} key={index}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography
                    variant="h2"
                    sx={{
                      fontWeight: 800,
                      color: '#059669',
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

      {/* Targeting Options */}
      <Box sx={{ py: 12, bgcolor: '#f8fafc' }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h3" sx={{ mb: 3, fontWeight: 800 }}>
                Advanced Targeting Capabilities
              </Typography>
              <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
                Reach the right B2B audience with precision targeting that
                drives qualified leads and conversions.
              </Typography>
              <Stack spacing={3}>
                {[
                  {
                    title: 'Behavioral Targeting',
                    description:
                      'Target users based on their content consumption patterns and online behavior.',
                  },
                  {
                    title: 'Contextual Targeting',
                    description:
                      'Place ads alongside relevant content that matches your audience interests.',
                  },
                  {
                    title: 'Lookalike Audiences',
                    description:
                      'Find new prospects similar to your best customers using AI-powered matching.',
                  },
                  {
                    title: 'Account-Based Targeting',
                    description:
                      'Target specific companies and decision-makers with personalized native content.',
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
                  bgcolor: '#059669',
                  borderRadius: 3,
                  p: 4,
                  color: 'white',
                  textAlign: 'center',
                }}
              >
                <Psychology sx={{ fontSize: 80, mb: 2, opacity: 0.8 }} />
                <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                  AI-Powered Optimization
                </Typography>
                <Typography sx={{ opacity: 0.9 }}>
                  Our machine learning algorithms continuously optimize your
                  native campaigns for better performance and higher engagement
                  rates.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Publisher Network */}
      <Box sx={{ py: 12 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h3" sx={{ mb: 3, fontWeight: 800 }}>
              Premium Publisher Network
            </Typography>
            <Typography variant="h6" color="text.secondary">
              Access top-tier publishers and content platforms where your B2B
              audience engages
            </Typography>
          </Box>
          <Grid container spacing={4}>
            {[
              {
                category: 'Business Publications',
                description:
                  'Leading business magazines, industry publications, and professional news sites.',
                reach: '25M+ Professionals',
                examples: [
                  'Forbes',
                  'Harvard Business Review',
                  'Industry Week',
                ],
              },
              {
                category: 'Content Discovery',
                description:
                  'Native content recommendation widgets on premium publisher websites.',
                reach: '50M+ Monthly Views',
                examples: ['Taboola', 'Outbrain', 'Content.ad'],
              },
              {
                category: 'Social Platforms',
                description:
                  'Professional social networks and business-focused social media platforms.',
                reach: '100M+ Business Users',
                examples: ['LinkedIn', 'Twitter', 'Facebook'],
              },
              {
                category: 'Industry Websites',
                description:
                  'Specialized websites and portals focused on specific B2B industries.',
                reach: '15M+ Decision Makers',
                examples: ['TechCrunch', 'MarTech', 'Sales Hacker'],
              },
            ].map((network, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card sx={{ height: '100%', p: 4 }}>
                  <Typography
                    variant="h5"
                    sx={{ mb: 2, fontWeight: 700, color: '#059669' }}
                  >
                    {network.category}
                  </Typography>
                  <Typography
                    color="text.secondary"
                    sx={{ mb: 2, lineHeight: 1.6 }}
                  >
                    {network.description}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{ mb: 2, fontWeight: 600, color: '#7c3aed' }}
                  >
                    {network.reach}
                  </Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap">
                    {network.examples.map((example, idx) => (
                      <Chip
                        key={idx}
                        label={example}
                        size="small"
                        sx={{ bgcolor: 'grey.100', fontWeight: 500 }}
                      />
                    ))}
                  </Stack>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Benefits Comparison */}
      <Box sx={{ py: 12, bgcolor: '#f8fafc' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h3" sx={{ mb: 3, fontWeight: 800 }}>
              Native vs Traditional Advertising
            </Typography>
            <Typography variant="h6" color="text.secondary">
              See why native advertising outperforms traditional display ads
            </Typography>
          </Box>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  p: 4,
                  height: '100%',
                  border: '1px solid #e5e7eb',
                  boxShadow: '0 4px 20px rgba(5, 150, 105, 0.1)',
                }}
              >
                <Typography
                  variant="h4"
                  sx={{ mb: 3, fontWeight: 700, color: '#059669' }}
                >
                  Native Advertising
                </Typography>
                <Stack spacing={2}>
                  {[
                    '3x higher engagement rates',
                    '70% better brand recall',
                    'Non-disruptive user experience',
                    'Seamless content integration',
                    'Higher click-through rates',
                    'Better audience targeting',
                    'Improved brand perception',
                  ].map((benefit, index) => (
                    <Box
                      key={index}
                      sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
                    >
                      <Box
                        sx={{
                          width: 8,
                          height: 8,
                          bgcolor: '#059669',
                          borderRadius: '50%',
                        }}
                      />
                      <Typography>{benefit}</Typography>
                    </Box>
                  ))}
                </Stack>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  p: 4,
                  height: '100%',
                  border: '1px solid #e5e7eb',
                  boxShadow: '0 4px 20px rgba(107, 114, 128, 0.1)',
                }}
              >
                <Typography
                  variant="h4"
                  sx={{ mb: 3, fontWeight: 700, color: '#6b7280' }}
                >
                  Traditional Display
                </Typography>
                <Stack spacing={2}>
                  {[
                    'Lower engagement rates',
                    'Ad banner blindness',
                    'Disruptive user experience',
                    'Obvious advertising format',
                    'Declining click-through rates',
                    'Limited targeting options',
                    'Ad blocker susceptibility',
                  ].map((limitation, index) => (
                    <Box
                      key={index}
                      sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
                    >
                      <Box
                        sx={{
                          width: 8,
                          height: 8,
                          bgcolor: '#e5e7eb',
                          borderRadius: '50%',
                        }}
                      />
                      <Typography>{limitation}</Typography>
                    </Box>
                  ))}
                </Stack>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Case Study */}
      <Box sx={{ py: 12 }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  bgcolor: 'white',
                  borderRadius: 3,
                  p: 4,
                  boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
                  border: '1px solid #e5e7eb',
                }}
              >
                <Typography variant="h4" sx={{ mb: 3, fontWeight: 700 }}>
                  &ldquo;Native advertising increased our lead quality by 85% while
                  reducing cost per acquisition by 40%.&rdquo;
                </Typography>
                <Typography
                  color="text.secondary"
                  sx={{ mb: 3, lineHeight: 1.6 }}
                >
                  SaaS company CloudTech used native advertising to reach IT
                  decision-makers through relevant content placements, resulting
                  in higher-quality leads and improved conversion rates.
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Avatar sx={{ bgcolor: '#059669', width: 50, height: 50 }}>
                    CT
                  </Avatar>
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                      Michael Chen
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      VP Marketing, CloudTech
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h3" sx={{ mb: 3, fontWeight: 800 }}>
                Proven Results for B2B Brands
              </Typography>
              <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
                See how leading B2B companies are using native advertising to
                drive qualified leads and revenue growth.
              </Typography>
              <Grid container spacing={3}>
                {[
                  { metric: '85%', label: 'Higher Lead Quality' },
                  { metric: '40%', label: 'Lower Cost Per Acquisition' },
                  { metric: '3.2x', label: 'Better Engagement Rate' },
                  { metric: '92%', label: 'Campaign Success Rate' },
                ].map((result, index) => (
                  <Grid item xs={6} key={index}>
                    <Box sx={{ textAlign: 'center' }}>
                      <Typography
                        variant="h4"
                        sx={{ fontWeight: 800, color: '#059669', mb: 1 }}
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

      {/* Best Practices */}
      <Box sx={{ py: 12, bgcolor: '#f8fafc' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h3" sx={{ mb: 3, fontWeight: 800 }}>
              Native Advertising Best Practices
            </Typography>
            <Typography variant="h6" color="text.secondary">
              Follow these guidelines to maximize your native campaign
              performance
            </Typography>
          </Box>
          <Grid container spacing={4}>
            {[
              {
                title: 'Focus on Value',
                description:
                  'Create content that provides genuine value to your audience rather than direct sales pitches.',
                tip: 'Educational content performs 4x better than promotional content',
              },
              {
                title: 'Match the Context',
                description:
                  'Ensure your native ads match the look, feel, and tone of the surrounding content.',
                tip: 'Contextually relevant ads see 2.5x higher engagement',
              },
              {
                title: 'Clear Disclosure',
                description:
                  'Always clearly label sponsored content to maintain trust and comply with regulations.',
                tip: 'Transparent labeling increases brand trust by 60%',
              },
              {
                title: 'Mobile Optimization',
                description:
                  'Optimize native ads for mobile devices where 70% of content consumption happens.',
                tip: 'Mobile-optimized native ads have 3x better performance',
              },
              {
                title: 'A/B Testing',
                description:
                  'Continuously test headlines, images, and content to improve performance.',
                tip: 'Regular testing can improve CTR by up to 50%',
              },
              {
                title: 'Quality Publishers',
                description:
                  'Choose reputable publishers that align with your brand values and audience.',
                tip: 'Premium publishers deliver 80% higher brand lift',
              },
            ].map((practice, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card sx={{ height: '100%', p: 3 }}>
                  <Typography
                    variant="h6"
                    sx={{ mb: 2, fontWeight: 700, color: '#059669' }}
                  >
                    {practice.title}
                  </Typography>
                  <Typography
                    color="text.secondary"
                    sx={{ mb: 2, lineHeight: 1.6 }}
                  >
                    {practice.description}
                  </Typography>
                  <Box
                    sx={{
                      bgcolor: 'rgba(5, 150, 105, 0.1)',
                      borderRadius: 1,
                      p: 2,
                      borderLeft: '3px solid #059669',
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{ fontWeight: 600, color: '#059669' }}
                    >
                      💡 {practice.tip}
                    </Typography>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        sx={{
          py: 12,
          background: 'linear-gradient(135deg, #059669 0%, #7c3aed 100%)',
          color: 'white',
        }}
      >
        <Container maxWidth="md">
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h2" sx={{ mb: 3, fontWeight: 800 }}>
              Ready to Launch Native Campaigns?
            </Typography>
            <Typography variant="h5" sx={{ mb: 6, opacity: 0.9 }}>
              Start engaging B2B audiences with seamless native advertising that
              drives real results
            </Typography>
             <Link href="/contact" passHref>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={3}
              justifyContent="center"
            >
              <Button
                variant="contained"
                size="large"
                endIcon={<ArrowForward />}
                sx={{
                  bgcolor: 'white',
                  color: '#059669',
                  px: 6,
                  py: 2,
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  '&:hover': { bgcolor: 'rgba(255,255,255,0.9)' },
                }}
              >
                Start Free Trial
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

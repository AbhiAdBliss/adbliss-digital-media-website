'use client'
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  Avatar,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  Stack,
  CardContent,
  Chip,
} from '@mui/material'
import { FaChevronRight } from 'react-icons/fa6'
import React from 'react'
import { siteConfig } from '../../config'
import Link from 'next/link'
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay'
import Header from '../components/Header'
import PublicIcon from '@mui/icons-material/Public'
import BoltIcon from '@mui/icons-material/Bolt'
import FavoriteIcon from '@mui/icons-material/Favorite'
import TvIcon from '@mui/icons-material/Tv'

import TrackChangesIcon from '@mui/icons-material/TrackChanges'
import VerifiedIcon from '@mui/icons-material/Verified'
import BubbleChartIcon from '@mui/icons-material/BubbleChart'
import DevicesIcon from '@mui/icons-material/Devices'
import QueryStatsIcon from '@mui/icons-material/QueryStats'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import BrandLogo from '../components/BrandLogo'

const Page = () => {
  const [expanded, setExpanded] = React.useState<number | null>(null)

  const handleChange =
    (panel: number) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : null)
    }

  // ✅ FAQ data
  const faqData = [
    {
      question: 'What makes Connected TV an effective ABM channel?',
      answer:
        'Connected TV (CTV) is effective for ABM because it allows marketers to deliver personalized, account-targeted ads to key decision-makers across all their digital devices capturing their attention in a high-impact format. By using CTV’s targeting capabilities, ABM campaigns can reach specific accounts with precision, enhancing engagement and brand recall.',
    },
    {
      question: 'Why use CTV in your ABM strategy?',
      answer:
        'Incorporating CTV in your ABM strategy enables you to reach Digital Marketing buyers during their off-work hours, when they are more receptive to content. With advanced targeting, CTV ensures that only relevant accounts see your ads, increasing the efficiency of your marketing spend and strengthening brand visibility.',
    },
    {
      question:
        'How do I measure the success of an ABM campaign on Connected TV?',
      answer:
        'Success in ABM CTV campaigns is measured through metrics like account reach, engagement rates, and subsequent site visits or content engagement. Integrating these metrics with your CRM can help attribute conversions or pipeline acceleration back to specific CTV campaigns.',
    },
    {
      question:
        'Can you expand on the existing market gaps in CTV and how ABM Connected TV will fill them?',
      answer:
        'A key market gap in CTV is the lack of targeting capabilities for Digital Marketing marketers, as most CTV advertising is traditionally B2C-focused. ABM Connected TV fills this gap by using intent data to target specific accounts, allowing Digital Marketing brands to reach their audience with precision and relevance, even on a traditionally broad-reaching channel like CTV.',
    },
    {
      question: 'What are Connected TV devices?',
      answer:
        'Connected TV devices are hardware platforms that enable users to stream digital content directly on their televisions over the internet, bypassing traditional cable or satellite services. Examples of CTV devices include smart TVs with built-in streaming capabilities, streaming boxes like Apple TV, Roku, and Amazon Fire TV, and gaming consoles such as PlayStation and Xbox, which allow viewers to access streaming apps and services. These devices transform traditional television screens into versatile digital platforms for both entertainment and targeted advertising.',
    },
  ]

  return (
    <Box>
      <Header />

      {/* Hero section  */}

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
                ABM CTV Advertising for Digital Marketing Growth
              </Typography>
              <Typography
                variant="h5"
                sx={{ mb: 4, opacity: 0.9, fontWeight: 400 }}
              >
                Target key decision-makers with precision through premium
                connected TV campaigns.
              </Typography>
              <Button
                component={Link}
                href="/contact"
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
                <SmartDisplayIcon sx={{ fontSize: 120, mb: 2, opacity: 0.8 }} />
                <Typography variant="h6">Premium Digital Displays</Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ==============         Engage every decision-maker in every market */}

      <Box sx={{ py: { xs: 6, md: 8 } }}>
        <Typography
          variant="h1"
          sx={{
            textAlign: 'center',
            fontWeight: 800,
            letterSpacing: 1,
            textTransform: 'uppercase',
            mt: 1,
            mb: 4,
            mx: { xs: 2, md: 25 },
            color: '#333',
            fontSize: { xs: '1.5rem', md: '2.8rem' },
            lineHeight: 1.5,
          }}
        >
          Engage All Decision-Makers
        </Typography>

        <Box sx={{ py: 3, bgcolor: 'grey.50' }}>
          <Container maxWidth="lg">
            <Grid container spacing={4}>
              {[
                { value: '#1', label: 'Buyer Intent' },
                { value: '417M', label: 'Professionals' },
                { value: '116', label: 'Functions' },
                { value: '129', label: 'Industries' },
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
      </Box>

      {/* ==============Brand Logo */}

      <BrandLogo />

      {/* section 3  */}

      <Box sx={{ py: 15 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 10 }}>
            <Typography variant="h3" sx={{ mb: 3, fontWeight: 800 }}>
              Help Buyers Pick Your Solution
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ maxWidth: '700px', mx: 'auto' }}
            >
              ABM Content Syndication drives engagement and delivers sales-ready
              audiences
            </Typography>
          </Box>

          <Grid container spacing={6}>
            {[
              {
                icon: <PublicIcon sx={{ fontSize: 40 }} />,
                title: 'Engage Key Accounts',
                description:
                  'Drive faster, more meaningful interactions with content that reinforces your brand credibility and unique value.',
                color: '#059669',
              },
              {
                icon: <BoltIcon sx={{ fontSize: 40 }} />,
                title: 'Align Buying Groups',
                description:
                  'Position your brand as the trusted choice, ensuring buying group members see your solution as the answer to their needs.',
                color: '#7c3aed',
              },
              {
                icon: <FavoriteIcon sx={{ fontSize: 40 }} />,
                title: 'Speed Decisions',
                description:
                  'Create demand and prompt timely action across your accounts with valuable insights that highlight your solution’s advantages.',
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
                    {' '}
                    {feature.icon}{' '}
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

      {/* section              The fastest path to revenue*/}

      <Box sx={{ py: 12 }}>
        <Container maxWidth={false} sx={{ maxWidth: '1220px', mx: 'auto' }}>
          <Box
            sx={{
              background: 'linear-gradient(135deg, #7655ab 30%, #7c3aed 90%)',
              color: 'white',
              padding: { xs: 4, md: 6 },
              borderRadius: 3,
              textAlign: 'center',
            }}
          >
            <Typography
              variant="h1"
              component="h1"
              fontWeight="bold"
              fontSize="50px"
              gutterBottom
            >
              The fastest path to revenue
            </Typography>
            <Typography
              variant="body1"
              sx={{
                maxWidth: '700px',
                mx: 'auto',
                mb: 4,
                opacity: 0.8,
                fontSize: 22,
              }}
            >
              From awareness to engagement to conversion, the best ABM
              strategies unify buying journeys across all media channels to
              amplify growth. See the impact.
            </Typography>
            <Grid container spacing={4} justifyContent="center" sx={{ mb: 4 }}>
              <Grid item xs={12} sm={4}>
                <Box>
                  <Typography
                    variant="h1"
                    fontWeight="bold"
                    fontSize={60}
                    color="#81C784"
                    marginTop={2}
                  >
                    32%
                  </Typography>
                  <Typography
                    variant="h4"
                    fontWeight="light"
                    fontSize={30}
                    marginTop={1}
                  >
                    lift in engagement
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box>
                  <Typography
                    variant="h1"
                    fontWeight="bold"
                    fontSize={60}
                    color="#81C784"
                    marginTop={2}
                  >
                    17%
                  </Typography>
                  <Typography
                    variant="h4"
                    fontWeight="light"
                    fontSize={30}
                    marginTop={1}
                  >
                    increase in pipeline
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box>
                  <Typography
                    variant="h1"
                    fontWeight="bold"
                    fontSize={60}
                    color="#81C784"
                    marginTop={2}
                  >
                    28%
                  </Typography>
                  <Typography
                    variant="h4"
                    fontWeight="light"
                    fontSize={30}
                    marginTop={1}
                  >
                    faster pipeline velocity
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>

      {/* section   What Do Our CTV Services Include? */}

      <Box sx={{ py: 12 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h3" sx={{ mb: 3, fontWeight: 700 }}>
              Content Syndication with ProspectBase
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{ maxWidth: '600px', mx: 'auto' }}
            >
              Distribute your content to targeted prospects with ProspectBase to
              drive engagement and generate qualified leads
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {[
              {
                icon: <TvIcon />,
                title: 'Programmatic Services',
                description:
                  'Our expert team enhances yours to design and optimize campaigns in real time',
                color: siteConfig.colors.primary,
              },
              {
                icon: <TrackChangesIcon />,
                title: 'Precise Targeting',
                description:
                  'We go beyond demographics to target audiences by habits, interests, and behavior.',
                color: siteConfig.colors.secondary,
              },
              {
                icon: <VerifiedIcon />,
                title: 'Premium Inventory',
                description:
                  'Our brand-safe inventory ensures your ads appear on the most impactful screen — the living room TV.',
                color: siteConfig.colors.accent,
              },
              {
                icon: <BubbleChartIcon />,
                title: 'Customized Attribution',
                description:
                  'Our customized attribution tools reveal how your ads influence audience behavior and conversions.',
                color: '#e11d48',
              },
              {
                icon: <DevicesIcon />,
                title: 'CTV Retargeting',
                description:
                  'We use cross-device retargeting to boost CTV awareness and convert audiences across display and audio.',
                color: '#7c3aed',
              },
              {
                icon: <QueryStatsIcon />,
                title: '24/7 Reporting',
                description:
                  'Track audience engagement, conversions, and ROI in real time with our flexible reporting dashboard.',
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

      {/* section =============    How ABM CTV Work */}

      <Box sx={{ py: 12, bgcolor: 'grey.50' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h3" sx={{ mb: 3, fontWeight: 700 }}>
              How ABM CTV Advertising Works
            </Typography>
            <Typography variant="h6" color="text.secondary">
              Simple steps to launch your account-based marketing Connected TV
              campaign
            </Typography>
          </Box>
          <Grid container spacing={4}>
            {[
              {
                step: '01',
                title: 'Select Your Target Accounts',
                description:
                  'Choose companies that fit your ideal customer profile for your CTV campaign. Use intent data and firmographics to pinpoint high-value prospects.',
              },
              {
                step: '02',
                title: 'Upload Your Video Creative',
                description:
                  'Submit your targeted CTV video ads. The creative team can help tailor content formats for maximum screen impact.',
              },
              {
                step: '03',
                title: 'Set Campaign Parameters',
                description:
                  'Define your budget, choose networks and streaming platforms, and customize audience filters for optimal reach.',
              },
              {
                step: '04',
                title: 'Launch & Measure Results',
                description:
                  'Your ABM CTV campaign goes live. Monitor performance instantly with real-time analytics—track engagement at the account level for measurable ROI.',
              },
            ].map((item, index) => (
              <Grid item xs={12} md={3} key={index}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography
                    variant="h2"
                    sx={{
                      fontWeight: 800,
                      color: siteConfig.colors.primary,
                      opacity: 0.6,
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

      {/* Benefits Comparison */}
      <Box sx={{ py: 12, bgcolor: '#f8fafc' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h3" sx={{ mb: 3, fontWeight: 800 }}>
              ABM CTV vs Traditional TV Advertising
            </Typography>
            <Typography variant="h6" color="text.secondary">
              See why account-based marketing on Connected TV (CTV) outperforms
              traditional television ads.
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
                    'Targeted to specific business accounts',
                    'Higher engagement & interactivity',
                    'Real-time reporting and optimization',
                    'Greater control over frequency & reach',
                    'Skippable & interactive ad units',
                    'Omnichannel integration (CTV + digital)',
                    'Measurable ROI and attribution',
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
                    ' Broad, non-specific audience',
                    'One-way, passive viewership',
                    ' Limited or delayed measurement',
                    'Generic message for all viewers',
                    'Fixed ad spots, no interactivity',
                    'Uncontrollable ad repetition',
                    'Limited analytics & ROI visibility',
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

      {/* Screen Types Section */}

      <Box sx={{ py: 12 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h3" sx={{ mb: 3, fontWeight: 700 }}>
              Premium ABM CTV Channels
            </Typography>
            <Typography variant="h6" color="text.secondary">
              Access diverse Connected TV and streaming platforms for
              high-impact, account-based marketing.
            </Typography>
          </Box>
          <Grid container spacing={4}>
            {[
              {
                title: 'Connected TV Networks',
                description:
                  'Reach decision-makers on top streaming networks and smart TV ecosystems.',
                features: [
                  'Prime Placement',
                  'Brand Safe',
                  'Programmatic Access',
                ],
                image: '📺',
              },
              {
                title: ' Addressable Streaming Platforms',
                description:
                  'Precisely reach audiences on streaming TV and VOD at the household or account level.',
                features: ['Custom Audience', 'On-Demand', 'Real-Time Bidding'],
                image: '🛰️',
              },
              {
                title: 'Cross-Device Video Inventory',
                description:
                  'Integrate CTV with desktop, mobile, and tablet video for seamless multi-device Digital Marketing engagement.',
                features: ['Multi-Channel', 'High Reach', 'Device Sync'],
                image: '📱',
              },
              {
                title: 'Interactive CTV Units',
                description:
                  'Engage business audiences with interactive CTV ads to drive deeper engagement and measurable actions.',
                features: [
                  'Clickable Elements',
                  'Lead Forms',
                  'Advanced Analytics',
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

      {/* section     ABM Connected TVFAQs  */}

      <Box
        sx={{
          py: 8,
          mt: 5,
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h2"
            textAlign="center"
            fontWeight="bold"
            gutterBottom
            sx={{ color: '#0D1B2A' }}
          >
            ABM Connected TVFAQs
          </Typography>

          <Box sx={{ mt: 8 }}>
            {faqData.map((faq, index) => (
              <Accordion
                key={index}
                expanded={expanded === index}
                onChange={handleChange(index)}
                sx={{
                  mb: 2,
                  mt: 3,
                  borderRadius: 1,
                  overflow: 'hidden',
                  border: '1px solid #DADADA',

                  boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                  '&:before': { display: 'none' },
                }}
              >
                <AccordionSummary
                  expandIcon={
                    expanded === index ? (
                      <RemoveIcon sx={{ color: '#0D1B2A' }} />
                    ) : (
                      <AddIcon sx={{ color: '#0D1B2A' }} />
                    )
                  }
                >
                  <Typography
                    fontWeight="bold"
                    fontSize="19px"
                    sx={{ color: '#0D1B2A' }}
                  >
                    {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={{ color: '#333', lineHeight: 1.6 }}>
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ===================================section - last  */}

      <Box
        component="section"
        sx={{
          py: { xs: 6, sm: 10 },
          background: 'linear-gradient(135deg, #059669, #8a53e7)',
          color: 'white',
        }}
      >
        <Container maxWidth="lg">
          {/* Title */}
          <Box textAlign="center">
            <Typography
              variant="h3"
              sx={{
                fontWeight: 'bold',
                fontSize: { xs: '24px', sm: '32px', lg: '55px' },
              }}
            ></Typography>
          </Box>
          {/* Subtitle */}
          <Box textAlign="center" mb={4}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 'bold',
                fontSize: { xs: '22px', sm: '30px', lg: '45px' },
                lineHeight: 1.2,
              }}
            >
             Expert ABM CTV Management for Maximum Results
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mt: 3,
                maxWidth: {
                  xs: '100%',
                  sm: '90%',
                  md: '80%',
                  textAlign: 'center',
                },
                mx: 'auto',
                fontSize: { xs: '16px', sm: '18px', lg: '20px' },
                lineHeight: 1.7,
              }}
            >
             ABM CTV uses Account-Based Marketing with Connected TV to deliver personalized ads to key decision-makers, driving engagement, brand awareness, and measurable ROI
            </Typography>
          </Box>
          {/* Button */}
          <Box display="flex" justifyContent="center" mt={6}>
            <Link href="/contact" passHref>
              <Button
                variant="outlined"
                endIcon={<FaChevronRight />}
                sx={{
                  borderColor: '#f7faf9',
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: '19px',
                  px: { xs: 3, sm: 4 },
                  py: { xs: 1.5, sm: 2 },
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: '#fdfcfd',
                    color: '#333333',
                    borderColor: '#fdfcfd',
                  },
                  '&:active': {
                    transform: 'scale(0.95)',
                    backgroundColor: '#7c3aed',
                    color: '#fff',
                  },
                }}
              >
                Get in Touch
              </Button>
            </Link>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}

export default Page

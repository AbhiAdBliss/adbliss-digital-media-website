'use client'
import {
  Box,
  Container,
  Grid,
  Card,
  Avatar,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  Stack,
  Chip,
} from '@mui/material'
import { DesktopWindows, TrackChanges, Analytics } from '@mui/icons-material'

import { FaChevronRight } from 'react-icons/fa6'
import React from 'react'

import Header from '../components/Header'

import PersonIcon from '@mui/icons-material/Person'
import MouseIcon from '@mui/icons-material/Mouse'
import GroupIcon from '@mui/icons-material/Group'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'

import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import Footer from '../components/Footer'
import Link from 'next/link'
import { siteConfig } from '../../config'
import DesktopMacOutlinedIcon from '@mui/icons-material/DesktopMacOutlined'
import BrandLogo from '../components/BrandLogo'

// FAQ Data
const faqData = [
  {
    question: 'What is ABM Display Advertising?',
    answer:
      'ABM Display Advertising is a targeted approach that delivers personalized ads to decision-makers within specific accounts. By focusing on high-value prospects rather than a broad audience, it maximizes relevance and impact.',
  },
  {
    question: 'Why use display advertising for ABM?',
    answer:
      'Display ads in ABM help keep your brand visible to target accounts on the channels where they consume content. This visibility builds awareness with key people across the buying committee, makes your brand more memorable, and increases the chances they’ll choose you when it’s time to buy.',
  },
  {
    question:
      'How do display ads fit into an account-based marketing (ABM) strategy?',
    answer:
      'In ABM, display ads provide additional touchpoints for buying committees to engage meaningfully with your brand. By customizing ads to match each stage of the buying journey, you deliver messages that resonate with what decision-makers need most, guiding them confidently toward choosing you. Integrated seamlessly with other ABM channels, these ads transform the customer journey into a highly personalized, impactful experience that builds trust and drives action.',
  },
  {
    question:
      'How does ABM display advertising differ from traditional display campaigns?',
    answer:
      'Traditional display ads cast a wide net to reach broad audiences, while ABM display ads focus only on specific high-value accounts. ABM ads use intent data to target key decision-makers, ensuring that your budget goes toward reaching the prospects most likely to convert.',
  },
  {
    question:
      'What advertising formats does Madison Logic offer, and how do they enhance ABM strategies?',
    answer: (
      <>
        Native Advertising: Ads that seamlessly integrate with the content and
        design of the host platform, enhancing user engagement by appearing as
        part of the natural content flow.
        <br />
        Video Advertising: Dynamic video ads that capture attention and convey
        complex messages effectively, suitable for platforms supporting video
        content.
        <br />
        Premium Display: Banner ads served programmatically in rich media
        formats across desktop, mobile, and tablets.
      </>
    ),
  },
]

const Page = () => {
  const [expanded, setExpanded] = React.useState<number | null>(null)

  const handleChange =
    (panel: number) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : null)
    }

  return (
    <Box>
      <Header />

      {/* section - Hero */}
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
                ABM CTV Advertising for B2B Growth
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
                <DesktopMacOutlinedIcon
                  sx={{ fontSize: 120, mb: 2, opacity: 0.8 }}
                />
                <Typography variant="h6">Premium Digital Displays</Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ==============         Engage every decision-maker in every market */}

      <Box sx={{ py: { xs: 6, md: 5 } }}>
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

      {/* BrandLogo */}
      <BrandLogo />

      {/* ========= section -Maximize Engagement with ABM Display */}

      <Box sx={{ py: 10 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 10 }}>
            <Typography variant="h3" sx={{ mb: 3, fontWeight: 800 }}>
              Maximize Engagement with ABM Display
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ maxWidth: '700px', mx: 'auto' }}
            >
              ABM Display campaigns reach target accounts with precision,
              driving awareness and measurable actions
            </Typography>
          </Box>

          <Grid container spacing={6}>
            {[
              {
                icon: <DesktopWindows sx={{ fontSize: 40 }} />,
                title: 'Target Key Accounts',
                description:
                  'Deliver display ads directly to the right decision-makers, increasing visibility and engagement at the account level.',
                color: '#059669',
              },
              {
                icon: <TrackChanges sx={{ fontSize: 40 }} />,
                title: 'Boost Brand Awareness',
                description:
                  'Reinforce your brand’s presence across multiple channels, ensuring your solution stays top-of-mind.',
                color: '#7c3aed',
              },
              {
                icon: <Analytics sx={{ fontSize: 40 }} />,
                title: 'Drive Actions',
                description:
                  'Track engagement and conversions in real-time, optimizing campaigns for maximum ROI and impact.',
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

      {/*============================= Key Metrics to Track Section */}
      <Box sx={{ py: 12, bgcolor: '#f8fafc' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h3" sx={{ mb: 2, fontWeight: 800 }}>
              Key Metrics to Track
            </Typography>
            <Typography variant="h6" color="text.secondary">
              Track the performance of your audio campaigns with clear metrics
              that measure audience reach, engagement, and conversions
              effectively.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {[
              {
                label: 'Higher Engagement',
                description:
                  'Increase meaningful audience engagement interactions.',
                color: '#059669',
                icon: <PersonIcon sx={{ fontSize: 40, color: '#059669' }} />,
              },
              {
                label: 'Better Brand Recall',
                description:
                  'Ensure your brand stays top-of-mind with decision-makers.',
                color: '#7c3aed',
                icon: <MouseIcon sx={{ fontSize: 40, color: '#7c3aed' }} />,
              },
              {
                label: 'More Click-Through',
                description:
                  'Increase the likelihood of users engaging with your content.',
                color: '#f59e0b',
                icon: <GroupIcon sx={{ fontSize: 40, color: '#f59e0b' }} />,
              },
              {
                label: 'Less Ad Fatigue',
                description:
                  'Minimize audience burnout and maintain ad effectiveness.',
                color: '#ef4444',
                icon: (
                  <TrendingUpIcon sx={{ fontSize: 40, color: '#ef4444' }} />
                ),
              },
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
                  <Box sx={{ mb: 2 }}>{stat.icon}</Box>

                  <Typography
                    variant="h6"
                    color="text.secondary"
                    sx={{ fontWeight: 600, mt: 3, fontSize: 20 }}
                  >
                    {stat.label}
                  </Typography>
                  <Typography
                    color="text.secondary"
                    sx={{ lineHeight: 1.6, mt: 1, fontWeight: 400 }}
                  >
                    {stat.description}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ========================   How ABM Display Advertising Works */}

      <Box sx={{ py: 12, bgcolor: 'grey.50' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h3" sx={{ mb: 3, fontWeight: 700 }}>
              How ABM Display Advertising Works
            </Typography>
            <Typography variant="h6" color="text.secondary">
              Simple steps to launch your account-based marketing display
              campaigns
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {[
              {
                step: '01',
                title: 'Target Key Accounts',
                description:
                  'Select target companies that align with your ideal customer profile. Focus on quality leads instead of casting a wide net.',
              },
              {
                step: '02',
                title: 'Tailor Ads',
                description:
                  'Design tailored display ads that resonate with each account. Use messaging, imagery, and offers relevant to the account’s needs.',
              },
              {
                step: '03',
                title: 'Target Precisely',
                description:
                  'Leverage IP-based, retargeting, and intent data to reach decision-makers in your chosen accounts on multiple websites and devices.',
              },
              {
                step: '04',
                title: 'Measure & Optimize',
                description:
                  'Track account-level engagement, conversions, and ROI. Use insights to refine targeting and messaging for better campaign performance.',
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

      {/* =======================================  Premium ABM Display Inventory*/}

      <Box sx={{ py: 12 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h3" sx={{ mb: 3, fontWeight: 700 }}>
              Premium ABM Display Inventory
            </Typography>
            <Typography variant="h6" color="text.secondary">
              Access diverse account-based digital inventory for maximum B2B
              impact
            </Typography>
          </Box>
          <Grid container spacing={4}>
            {[
              {
                title: 'Display Ad Networks ',
                description:
                  'Achieve wide reach across top display exchanges, programmatic platforms, and B2B networks.',
                features: ['4K Creative ', 'Real-Time Bidding', 'Brand Safe'],
                image: '🖥️',
              },
              {
                title: ' Contextual Placements',
                description:
                  'Place ads on business, tech, and trade sites to reach decision-makers.',
                features: [
                  'Industry Relevance',
                  ' Top Publishers',
                  'Native Formats',
                ],
                image: '📄',
              },
              {
                title: 'Social & Community Platforms',
                description:
                  'Targeted business buyers and influencers on LinkedIn, X (Twitter), and niche community forums.',
                features: [
                  'Professional Audience ',
                  'Custom Segments ',
                  'High Visibility',
                ],
                image: '💼',
              },
              {
                title: 'Streaming & Video Displays',
                description:
                  'Engage targeted accounts with in-stream video, webcasts, and CTV tailored by job or account.',
                features: [
                  'ABM Targeting',
                  'Interactive Video ',
                  'Measurable Engagement',
                ],
                image: '📺',
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

      {/* Best Practices */}
      <Box sx={{ py: 12, bgcolor: '#f8fafc' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h3" sx={{ mb: 3, fontWeight: 800 }}>
              ABM Display Best Practices
            </Typography>
            <Typography variant="h6" color="text.secondary">
              Follow these guidelines to maximize your account-based display
              campaign performance
            </Typography>
          </Box>
          <Grid container spacing={4}>
            {[
              {
                title: 'Precision Targeting',
                description:
                  'Ensure campaigns target specific decision-makers and buying groups at named accounts.',
                tip: 'Account-targeted ads can deliver up to 3x more qualified leads.',
              },
              {
                title: 'Personalization',
                description:
                  'Tailor creatives and messaging to address the unique needs and interests of each target account.',
                tip: 'Personalized creatives boost engagement by as much as 40%.',
              },
              {
                title: 'Clear Brand Messaging',
                description:
                  'Communicate your value proposition directly and clearly—prioritize authenticity and trust.',
                tip: 'Transparent messaging improves account trust scores by 55%.',
              },
              {
                title: 'Multi-Channel Optimization',
                description:
                  'Coordinate display ads across web, mobile, and social channels for consistent account reach.',
                tip: 'Multi-channel ABM display drives 2.5x greater pipeline lift.',
              },
              {
                title: 'Continuous Testing',
                description:
                  'Regularly A/B test headlines, creatives, and calls-to-action to improve results at the account level.',
                tip: 'Campaign optimization increases CTR and lead quality by up to 45%.',
              },
              {
                title: 'Premium Placements',
                description:
                  'Choose reputable, high-quality publisher networks that align with your audience and brand reputation.',
                tip: 'Premium ABM display placements deliver 70% higher engagement.',
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

      {/* =====================================  ABM Content Syndication FAQs */}

      <Box
        sx={{
          py: 5,
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
            ABM Content Syndication FAQs
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
              Maximize impact with expert ABM management
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
              Drive results with account-based display ads that engage
              decision-makers. Maximize impact across channels, build trust, and
              achieve measurable ROI with high-value accounts
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

      {/* ============================= */}

      <Footer />
    </Box>
  )
}

export default Page

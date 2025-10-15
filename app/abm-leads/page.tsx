'use client'

import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  Paper,
  Avatar,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  Stack,
  CardContent,
  Chip,
} from '@mui/material'
import {
  Timeline,
  ChatBubbleOutline,
  Search,
  TrendingUp,
  HourglassEmpty,
  VerifiedUser,
} from '@mui/icons-material'
import BrandLogo from '../components/BrandLogo'
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined'
import Link from 'next/link'
import { siteConfig } from '../../config'
import { FaChevronRight } from 'react-icons/fa6'
import React from 'react'
import Header from '../components/Header'
import StarIcon from '@mui/icons-material/Star'
import PersonIcon from '@mui/icons-material/Person'
import BusinessIcon from '@mui/icons-material/Business'
import DrawIcon from '@mui/icons-material/Draw'
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount'
import TuneIcon from '@mui/icons-material/Tune'
import HandshakeIcon from '@mui/icons-material/Handshake'
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects'
import BrandingWatermarkIcon from '@mui/icons-material/BrandingWatermark'
import EmailIcon from '@mui/icons-material/Email'
import ContactMailIcon from '@mui/icons-material/ContactMail'
import SearchIcon from '@mui/icons-material/Search'
import GroupWorkIcon from '@mui/icons-material/GroupWork'
import PublicIcon from '@mui/icons-material/Public'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import Footer from '../components/Footer'

// ======================

const Page = () => {
  const [expanded, setExpanded] = React.useState<number | null>(null)

  const handleChange =
    (panel: number) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : null)
    }

  // ✅ FAQ data

  const faqData = [
    {
      question: 'How quickly will you see results with Beyond Codes?',
      answer:
        'Clients typically see a significant increase in quality meetings within the first 30 days of engagement, reducing time spent on lead discovery and boosting sales efficiency.',
    },
    {
      question: 'Who does Beyond Codes serve?',
      answer: (
        <div>
          <p>
            We specialize in providing B2B lead generation and appointment
            setting services to –
          </p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
            <li>IT Services and Consulting Firms</li>
            <li>Software Product Companies</li>
            <li>SaaS Product Companies</li>
            <li>Technology & Digital Transformation Companies</li>
            <li>Data & Analytics Companies</li>
            <li>BPO/BPM</li>
          </ul>
        </div>
      ),
    },
    {
      question: 'How do we ensure lead quality?',
      answer:
        'We use a combination of data-driven insights, Sales Intelligence tools, and multi-channel outreach to engage decision-makers who are ready to move through the sales funnel.',
    },
    {
      question: 'Can our services help you expand into new markets?',
      answer:
        'Yes! We offer global lead generation campaigns, leveraging multilingual teams to engage prospects in North America, EMEA, APAC, and beyond—helping you tap into new customer segments.',
    },
    {
      question: 'How are we different from other lead generation agencies?',
      answer:
        'We focus on precision targeting and multi-channel campaigns, ensuring your team connects with high-intent decision-makers quickly and efficiently. We also provide Sales Intelligence insights to streamline your sales cycle.',
    },
  ]

  //===

  const services = [
    {
      icon: <BusinessIcon sx={{ fontSize: 48 }} />,
      label: 'B2B Communication Strategy',
    },
    { icon: <DrawIcon sx={{ fontSize: 48 }} />, label: 'Content Creation' },
    {
      icon: <SupervisorAccountIcon sx={{ fontSize: 48 }} />,
      label: 'Lead Generation',
    },
    { icon: <TuneIcon sx={{ fontSize: 48 }} />, label: 'Lead Nurturing' },
    {
      icon: <HandshakeIcon sx={{ fontSize: 48 }} />,
      label: 'Sales Enablement',
    },
    {
      icon: <EmojiObjectsIcon sx={{ fontSize: 48 }} />,
      label: 'Thought Leadership',
    },
    {
      icon: <BrandingWatermarkIcon sx={{ fontSize: 48 }} />,
      label: 'Brand Strategy',
    },
    { icon: <EmailIcon sx={{ fontSize: 48 }} />, label: 'Corporate Branding' },
    {
      icon: <ContactMailIcon sx={{ fontSize: 48 }} />,
      label: 'B2B Social Media',
    },
    {
      icon: <SearchIcon sx={{ fontSize: 48 }} />,
      label: 'Search and Display Marketing',
    },
    {
      icon: <GroupWorkIcon sx={{ fontSize: 48 }} />,
      label: 'Strategic Partnerships',
    },
    {
      icon: <PublicIcon sx={{ fontSize: 48 }} />,
      label: 'Global Customer Acquisition',
    },
  ]

  //======

  return (
    <Box>
      <Header />

      {/* ==================== */}

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
                <PersonAddOutlinedIcon
                  sx={{ fontSize: 120, mb: 2, opacity: 0.8 }}
                />
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

      {/* ==============BrandLogo */}

      <BrandLogo />

      {/* section       What are ABM Leads? */}

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
                icon: <PersonIcon sx={{ fontSize: 40 }} />,
                title: 'Engage Key Accounts',
                description:
                  'Drive faster, more meaningful interactions with content that reinforces your brand credibility and unique value.',
                color: '#059669',
              },
              {
                icon: <BusinessIcon sx={{ fontSize: 40 }} />,
                title: 'Align Buying Groups',
                description:
                  'Position your brand as the trusted choice, ensuring buying group members see your solution as the answer to their needs.',
                color: '#7c3aed',
              },
              {
                icon: <StarIcon sx={{ fontSize: 40 }} />,
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

      {/* ============  The fastest path to revenue*/}

      <Box sx={{ py: 8 }}>
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
              fontSize="60px"
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

      {/* ======= */}

      <Box sx={{ py: 12, bgcolor: 'grey.50' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h3" sx={{ mb: 3, fontWeight: 700 }}>
              How ABM Lead Generation Works
            </Typography>
            <Typography variant="h6" color="text.secondary">
              Simple steps to launch your account-based lead generation campaign
            </Typography>
          </Box>
          <Grid container spacing={4}>
            {[
              {
                step: '01',
                title: 'Identify Target Accounts',
                description:
                  'Select ideal accounts based on firmographic data, intent signals, or your strategic target list for maximum relevance.',
              },
              {
                step: '02',
                title: 'Deliver Tailored Content',
                description:
                  'Create and deploy personalized content, messaging, or offers designed to engage and educate key decision-makers at your chosen accounts.',
              },
              {
                step: '03',
                title: 'Engage & Qualify Leads',
                description:
                  'Use targeted outreach and nurturing workflows to engage prospects, assess interest, and qualify leads based on interaction, fit, and intent.',
              },
              {
                step: '04',
                title: 'Track & Optimize Results',
                description:
                  'Monitor campaign performance in real-time. Refine tactics using analytics on lead engagement to maximize conversion and sales pipeline impact.',
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

      {/* section  */}

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
                icon: <Timeline />,
                title: 'Making B2B Buying Simple',
                description:
                  'ABM Leads connect you with key decision-makers, speeding engagement and boosting conversions.',
                color: siteConfig.colors.primary,
              },
              {
                icon: <ChatBubbleOutline />,
                title: 'Clear Solution Messaging',
                description:
                  'ABM simplifies communication by tailoring messages to each account’s unique challenges.',
                color: siteConfig.colors.secondary,
              },
              {
                icon: <Search />,
                title: 'Prospect Targeting',
                description:
                  'ABM targets high-value accounts, focusing on prospects with real conversion potential.',
                color: siteConfig.colors.accent,
              },
              {
                icon: <TrendingUp />,
                title: 'Lead-to-Sales Conversions',
                description:
                  'Turn ABM leads into sales with personalized targeting for faster deals and higher revenue.',
                color: '#e11d48',
              },
              {
                icon: <HourglassEmpty />,
                title: 'Long Sales Cycles',
                description:
                  'ABM shortens B2B sales cycles by targeting decision-makers early, accelerating engagement and revenue.',
                color: '#7c3aed',
              },
              {
                icon: <VerifiedUser />,
                title: 'Loyalty & Differentiation',
                description:
                  'ABM fosters strong client relationships through personalized engagement and clear brand differentiation',
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

      {/* section   What We Do  */}

      <Box sx={{ bgcolor: '#f5f6fa', py: 8, pb: 10 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            fontWeight="bold"
            color="#0a174e"
            align="center"
            mb={2}
          >
            What We Do
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              mb: 6,
            }}
          >
            <Box
              sx={{
                height: 6,
                width: 130,
                background: 'none',
                display: 'flex',
                justifyContent: 'center',
                gap: 1,
              }}
            >
              <Box
                sx={{
                  width: 30,
                  height: 6,
                  bgcolor: '#192a56',
                  borderRadius: 8,
                }}
              />
              <Box
                sx={{
                  width: 36,
                  height: 6,
                  bgcolor: '#eb2f64',
                  borderRadius: 8,
                }}
              />
              <Box
                sx={{
                  width: 30,
                  height: 6,
                  bgcolor: '#192a56',
                  borderRadius: 8,
                }}
              />
            </Box>
          </Box>

          <Grid container spacing={0}>
            {services.map(({ icon, label }, i) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={2}
                key={label}
                sx={{
                  border: '1px solid #e0e0e0',
                  borderTop: i < 6 ? '1px solid #e0e0e0' : 'none',
                  borderLeft: i % 6 === 0 ? 'none' : '1px solid #e0e0e0',
                  borderRight: 'none',
                }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    py: 4,
                    minHeight: 190,
                    transition: 'background-color 0.25s',
                    bgcolor: 'transparent',
                    cursor: 'pointer',
                    '&:hover': {
                      bgcolor: '#3f51b5',
                      color: 'white',
                    },
                  }}
                >
                  {icon}
                  <Typography mt={2} align="center" fontWeight="500">
                    {label}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ======================== */}

      <Box sx={{ py: 12 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h3" sx={{ mb: 3, fontWeight: 800 }}>
              Premium ABM Lead Sources
            </Typography>
            <Typography variant="h6" color="text.secondary">
              Access top-quality B2B leads aggregated from trusted professional
              channels and data partners.
            </Typography>
          </Box>
          <Grid container spacing={4}>
            {[
              {
                category: 'Verified Business Decision Makers',
                description:
                  'Leading executive and decision-maker databases, curated from B2B data providers and firmographic sources.',
                reach: '18M+ Qualified Leads',
                examples: [
                  'ZoomInfo',
                  'DiscoverOrg',
                  'LinkedIn Sales Navigator',
                ],
              },
              {
                category: 'Industry-Focused Content Engagement',
                description:
                  'Capture leads from professionals who engage with industry-specific research, webinars, and reports.',
                reach: '9M+ Engaged Professionals',
                examples: ['Gartner', 'Forrester', 'TechTarget'],
              },
              {
                category: 'Targeted Social Outreach',
                description:
                  'High-value prospects contacted through personalized, account-based social campaigns on major business networks.',
                reach: '22M+ Active Business Users',
                examples: ['LinkedIn', 'Twitter', 'Facebook'],
              },
              {
                category: 'Intent & Behavioral Data Partners',
                description:
                  'Leads are sourced using real-time purchase intent and engagement signals for maximum conversion potential.',
                reach: '12M+ Intent-Driven Leads',
                examples: ['Bombora', 'G2', 'Demandbase'],
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

      {/* ==================================== FAQs */}

      <Box
        sx={{
          py: 8,
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
            FAQs
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
                  {typeof faq.answer === 'string' ? (
                    <Typography sx={{ color: '#333', lineHeight: 1.6 }}>
                      {faq.answer}
                    </Typography>
                  ) : (
                    <Box sx={{ color: '#333', lineHeight: 1.6 }}>
                      {faq.answer}
                    </Box>
                  )}
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Container>
      </Box>
      {/* ================================= section last  */}

      <Box
        component="section"
        sx={{
          py: { xs: 6, sm: 10 },
          background: 'linear-gradient(135deg, #059669, #8a53e7)',
          color: 'white',
        }}
      >
        <Container maxWidth="lg">
          <Box textAlign="center">
            <Typography
              variant="h3"
              sx={{
                fontWeight: 'bold',
                fontSize: { xs: '24px', sm: '32px', lg: '55px' },
              }}
            ></Typography>
          </Box>

          <Box textAlign="center" mb={4}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 'bold',
                fontSize: { xs: '22px', sm: '30px', lg: '45px' },
                lineHeight: 1.2,
              }}
            >
              ABM Leads Connecting You to Key Decision-Makers
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
              ABM Leads help you reach the right decision-makers, engage high-quality prospects with personalized campaigns, and accelerate your sales pipeline for maximum ROI
            </Typography>
          </Box>

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

      {/* Footer  */}

      <Footer />
    </Box>
  )
}

export default Page

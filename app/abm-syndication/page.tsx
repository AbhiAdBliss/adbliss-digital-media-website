'use client'
import React from 'react'
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  Stack,
  Avatar,
  Card,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  CardContent,
  Chip,
} from '@mui/material'
import { LocationOn } from '@mui/icons-material'
import CampaignIcon from '@mui/icons-material/Campaign'
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined'
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined'
import InsightsOutlinedIcon from '@mui/icons-material/InsightsOutlined'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import { FaChevronRight } from 'react-icons/fa6'
import Image from 'next/image'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Link from 'next/link'
import { siteConfig } from '../../config'
import BrandLogo from '../components/BrandLogo'

// =========color

//  fuelgrowth Data
const features = [
  {
    img: '/images/abm-syndication-img1.png',
    title: 'Build Awareness',
    description:
      'Attract and engage high intent accounts with personalized LinkedIn ads and landing pages.',
  },
  {
    img: '/images/abm-syndication-img2.png',
    title: 'Accelerate Pipeline',
    description:
      'Move accounts from awareness to action with data-driven LinkedIn ABM campaigns.',
  },
  {
    img: '/images/abm-syndication-img3.png',
    title: 'Influence RFP Decisions',
    description:
      'Target key accounts actively evaluating solutions with strategic LinkedIn touchpoints.',
  },
]

// Define the types for the props of the DiamondStep component

const Page = () => {
  const [expanded, setExpanded] = React.useState<number | null>(null)

  const handleChange =
    (panel: number) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : null)
    }

  // ✅ FAQ data
  const faqData = [
    {
      question: 'What is ABM Content Syndication?',
      answer:
        'ABM Content Syndication is the process of distributing targeted content to a curated list of accounts identified as high-potential prospects. By using intent data, ABM Content Syndication ensures that relevant content reaches decision-makers at key accounts, aligning with their needs and timing.',
    },
    {
      question:
        'How does ABM Content Syndication drive demand and lead generation?',
      answer:
        'ABM Content Syndication drives demand by engaging prospects with tailored content to guide them through the awareness and consideration stages of the sales funnel. By focusing on accounts with active buying signals, ABM Content Syndication also enhances lead quality, which increases the chances of conversion.',
    },
    {
      question: 'How can ABM Content Syndication maximize ROI?',
      answer:
        'Leveraging intent data within ABM Content Syndication helps ensure that only the most relevant accounts receive your content, reducing waste and maximizing ROI. It also shortens sales cycles by nurturing high-value accounts with relevant information, increasing engagement and conversion rates.',
    },
    {
      question:
        'What are the best practices for implementing content syndication in an ABM strategy?',
      answer:
        'Unlike traditional broad demand generation strategies, ABM Content Syndication includes using intent data to identify target accounts, aligning content to their current needs, and tracking engagement across multiple touchpoints. Consistent follow-up and nurturing based on account activity further enhance the impact of content syndication within an ABM approach.',
    },
    {
      question: 'How do you verify lead generation data quality?',
      answer:
        'Leads undergo a rigorous, 3-step proprietary verification process to guarantee data accuracy and quality. First, each lead is checked against client-defined parameters to confirm alignment with ideal and targeted audience. Next, we verify six key data points on every lead, both programmatically and manually, using LinkedIn and other data sources to ensure accuracy. In the final step, each lead is individually reviewed for approval, giving you the confidence that every lead is fully vetted. This entire process is completed within 45 minutes, ensuring timely delivery while maintaining full GDPR compliance as leads are opted-in to receive relevant communications from partners and clients, so you can engage with them seamlessly and confidently.',
    },
  ]

  return (
    <Box>
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
                <CampaignIcon sx={{ fontSize: 120, mb: 2, opacity: 0.8 }} />
                <Typography variant="h6">Premium Digital Displays</Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ==========================================================Section - 2 */}

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

      {/* section brand logo  */}
      <BrandLogo />

      {/*==================== Section - 3 */}

      <Box sx={{ py: 12 }}>
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
                icon: <Groups2OutlinedIcon sx={{ fontSize: 40 }} />,
                title: 'Engage Key Accounts',
                description:
                  'Drive faster, more meaningful interactions with content that reinforces your brand credibility and unique value.',
                color: '#059669',
              },
              {
                icon: <MessageOutlinedIcon sx={{ fontSize: 40 }} />,
                title: 'Align Buying Groups',
                description:
                  'Position your brand as the trusted choice, ensuring buying group members see your solution as the answer to their needs.',
                color: '#7c3aed',
              },
              {
                icon: <InsightsOutlinedIcon sx={{ fontSize: 40 }} />,
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

      {/* ================================================= section - 4 */}

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

      {/* ==================================== fuel growth section 5 */}

      <Box sx={{ py: 8, backgroundColor: '#fff', pb: 10 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            sx={{
              fontWeight: 'bolder',
              mb: 6,
              fontSize: '40px',
              textAlign: 'center',
            }}
          >
            Power Growth Across Every Customer Touchpoint
          </Typography>
          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={4} key={index} mt={3}>
                <Card
                  sx={{
                    borderRadius: 2,
                    boxShadow: 5,
                    p: '22px',
                    mt: 1,
                    textAlign: 'left',
                    height: '100%',
                    transition: 'all 0.3s ease',
                    '&:hover': { transform: 'translateY(-5px)', boxShadow: 6 },
                  }}
                >
                  <CardContent>
                    <Image
                      src={feature.img}
                      alt={feature.title}
                      width={60}
                      height={60}
                    />
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 'bold',
                        mb: 1,
                        mt: 2,
                        fontSize: '24px',
                      }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'text.secondary',
                        fontSize: '18px',
                        textAlign: 'justify',
                      }}
                    >
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ============================== */}
      <Box sx={{ py: 12, bgcolor: 'grey.50' }}>
        {' '}
        <Container maxWidth="lg">
          {' '}
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            {' '}
            <Typography variant="h3" sx={{ mb: 3, fontWeight: 700 }}>
              {' '}
              How ABM Content Syndication Works{' '}
            </Typography>{' '}
            <Typography variant="h6" color="text.secondary">
              {' '}
              Simple steps to launch your Account-Based Marketing content
              syndication campaign{' '}
            </Typography>{' '}
          </Box>{' '}
          <Grid container spacing={4}>
            {' '}
            {[
              {
                step: '01',
                title: 'Target Accounts',
                description:
                  'Choose specific companies or account lists that match your ideal customer profile. Leverage data to identify high-value prospects for your campaign.',
              },
              {
                step: '02',
                title: 'Upload Your Content',
                description:
                  'Share your whitepapers, e-books, webinars, or case studies. Our team ensures your assets are formatted for maximum engagement and compliance.',
              },
              {
                step: '03',
                title: 'Campaign Setup',
                description:
                  'Set your targeting options, engagement goals, and lead qualification rules to ensure your content reaches the right decision-makers.',
              },
              {
                step: '04',
                title: 'Launch Campaigns',
                description:
                  'Activate your campaign and monitor performance in real time. Receive qualified leads and detailed analytics for full-funnel visibility.',
              },
            ].map((item, index) => (
              <Grid item xs={12} md={3} key={index}>
                {' '}
                <Box sx={{ textAlign: 'center' }}>
                  {' '}
                  <Typography
                    variant="h2"
                    sx={{
                      fontWeight: 800,
                      color: siteConfig.colors.primary,
                      opacity: 0.6,
                      mb: 2,
                    }}
                  >
                    {' '}
                    {item.step}{' '}
                  </Typography>{' '}
                  <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                    {' '}
                    {item.title}{' '}
                  </Typography>{' '}
                  <Typography color="text.secondary">
                    {' '}
                    {item.description}{' '}
                  </Typography>{' '}
                </Box>{' '}
              </Grid>
            ))}{' '}
          </Grid>{' '}
        </Container>{' '}
      </Box>

      {/* ========================== Section - 6 ========================== */}

      <Box sx={{ py: 12, bgcolor: 'grey.50' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h3" sx={{ mb: 3, fontWeight: 700 }}>
              Content Syndication with ProspectBase
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{ fontWeight: 400 }}
            >
              Share content with targeted prospects to boost engagement and
              generate leads
            </Typography>
          </Box>
          <Grid container spacing={4}>
            {[
              {
                title: 'Verified audience',
                description:
                  'Benefit from 180M verified business professionals in 25M accounts across 142+ countries, 87 industries and 118 job functions.',
                features: [
                  'Targeted Accounts',
                  'Verified Pros',
                  'Global Reach',
                ],
                icon: <CampaignIcon sx={{ fontSize: 40, color: 'white' }} />,
                color: siteConfig.colors.primary,
              },
              {
                title: 'Multi-channel outreach',
                description:
                  'Expand reach with campaigns that leverage email, phone, social media, and digital ads to boost brand visibility and generate more leads.',
                features: ['Email Campaigns', 'Social Media', 'Digital Ads'],
                icon: (
                  <InsightsOutlinedIcon sx={{ fontSize: 40, color: 'white' }} />
                ),
                color: siteConfig.colors.secondary,
              },
              {
                title: 'In-house team',
                description:
                  'Our global team aligns with your time zone, offering 100% in-house support, multi-lingual lead gen expertise and European-based QA.',
                features: [
                  'Dedicated Support',
                  'Multi-lingual Expertise',
                  'European QA',
                ],
                icon: (
                  <Groups2OutlinedIcon sx={{ fontSize: 40, color: 'white' }} />
                ),
                color: siteConfig.colors.accent,
              },

              {
                title: 'Intent',
                description:
                  'Dedicated landing pages track content engagement for each lead. Prioritise follow-ups and gain insight into your content performance.',
                features: [
                  'Engagement Score',
                  'Interaction Tracking',
                  'Behavior Insights',
                ],
                icon: (
                  <MessageOutlinedIcon sx={{ fontSize: 40, color: 'white' }} />
                ),
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

      {/* =================== */}

      <Box sx={{ py: 10, bgcolor: 'grey.50' }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h3" sx={{ mb: 3, fontWeight: 700 }}>
                Advanced Targeting Options
              </Typography>
              <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
                Reach the right decision-makers at the right accounts with
                advanced ABM content syndication targeting features.
              </Typography>
              <Stack spacing={3}>
                {[
                  {
                    title: 'Account-Based Targeting',
                    description:
                      'Target the right companies and decision-makers with precision.',
                  },
                  {
                    title: 'Job-Role Targeting',
                    description:
                      'Focus on professionals by title or function to reach decision-makers.',
                  },
                  {
                    title: 'Intent-Based Targeting',
                    description:
                      'Identify and engage accounts showing intent in your space.',
                  },
                  {
                    title: 'Behavioral Targeting',
                    description:
                      'Reach prospects based on content engagement and digital behavior.',
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
                  Target key accounts in prime locations to increase engagement,
                  conversions, and campaign impact.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/*====================================================== section 7 */}

      <Box
        sx={{
          py: 2,
          mt: 5,
          mb: 8,
          // background: 'linear-gradient(to bottom, #cabce0 , #d7f5df)',
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h2"
            textAlign="center"
            fontWeight="bold"
            gutterBottom
            sx={{ color: '#0D1B2A', mb: 4 }}
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
                  boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                  '&:before': { display: 'none' },
                  border: '1px solid #DADADA',
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

      {/* =================================================== section-8 */}

      <Box
        component="section"
        sx={{
          py: { xs: 10, sm: 8 },
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
              Expert team management for measurable impact
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
              Our team manages ABM content syndication campaigns, delivering
              personalized multi-channel content to the right decision-makers,
              optimizing engagement, tracking performance, and ensuring
              measurable ROI.
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

      <Footer />
    </Box>
  )
}

export default Page

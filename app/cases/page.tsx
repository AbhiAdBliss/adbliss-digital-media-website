'use client'

import {
  Box,
  Button,
  Container,
  Typography,
  Grid,
  Paper,
  Card,
  CardContent,
  Avatar,
} from '@mui/material'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'
import { siteConfig } from '../../config'

// Icons
import TvIcon from '@mui/icons-material/Tv'
import SportsEsportsIcon from '@mui/icons-material/SportsEsports'
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled'
import CampaignIcon from '@mui/icons-material/Campaign'
import ShowChartIcon from '@mui/icons-material/ShowChart'
import VisibilityIcon from '@mui/icons-material/Visibility'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import BusinessIcon from '@mui/icons-material/Business'
import HeadphonesIcon from '@mui/icons-material/Headphones'

const caseStudies = [
  {
    icon: <TvIcon sx={{ fontSize: 40, color: '#fff' }} />,
    title: 'CTV Success Story',
    description:
      'A retail brand scaled conversions using AdBliss CTV campaigns — achieving 3x ROI and precise audience targeting.',
    metrics: ['3x ROI', '+72% Viewability', 'Audience Precision'],
    gradient: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
  },
  {
    icon: <SportsEsportsIcon sx={{ fontSize: 40, color: '#fff' }} />,
    title: 'In-Game Engagement Boost',
    description:
      'A sports brand achieved record engagement through immersive, non-intrusive in-game placements.',
    metrics: ['4.5M Views', '2.8x CTR', '98% Completion Rate'],
    gradient: 'linear-gradient(135deg, #10b981, #059669)',
  },
  {
    icon: <PlayCircleFilledIcon sx={{ fontSize: 40, color: '#fff' }} />,
    title: 'Video Ad Performance Case',
    description:
      'A SaaS company expanded global reach via video ads, reducing CPC by 40% and boosting conversions.',
    metrics: ['2.5x CTR', '+40% Lower CPC', 'Global Reach'],
    gradient: 'linear-gradient(135deg, #ec4899, #8b5cf6)',
  },
]

const industries = [
  { name: 'Technology', icon: <BusinessIcon />, color: '#6366f1' },
  { name: 'Gaming', icon: <SportsEsportsIcon />, color: '#10b981' },
  { name: 'Retail & E-Commerce', icon: <TvIcon />, color: '#f59e0b' },
  { name: 'Finance', icon: <ShowChartIcon />, color: '#14b8a6' },
  { name: 'Media & Entertainment', icon: <PlayCircleFilledIcon />, color: '#ec4899' },
]

const adFormats = [
  {
    icon: <CampaignIcon />,
    title: 'Display Advertising',
    desc: 'Capture attention across web and apps with retargeting and contextual ads.',
  },
  {
    icon: <TvIcon />,
    title: 'CTV & OTT',
    desc: 'Deliver personalized ads on connected TVs and streaming platforms.',
  },
  {
    icon: <SportsEsportsIcon />,
    title: 'In-Game Ads',
    desc: 'Engage gamers naturally within their environment for brand recall.',
  },
  {
    icon: <HeadphonesIcon />,
    title: 'Audio Advertising',
    desc: 'Reach users through music and podcasts with dynamic targeting.',
  },
]

export default function CasesPage() {
  return (
    <>
      <Header />

      {/* Hero */}
      <Box
        sx={{
          background: `linear-gradient(135deg, ${siteConfig.colors.primary}, ${siteConfig.colors.secondary})`,
          color: '#fff',
          py: { xs: 12, md: 16 },
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h3" fontWeight={800} mb={2}>
            Proven Success Stories 🚀
          </Typography>
          <Typography variant="h6" color="rgba(255,255,255,0.85)">
            See how AdBliss drives measurable growth and engagement for brands globally.
          </Typography>
        </Container>
      </Box>

      {/* Featured Case Studies */}
      <Container sx={{ py: 12 }}>
        <Grid container spacing={6}>
          {caseStudies.map((item, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div whileHover={{ scale: 1.03 }}>
                <Card
                  sx={{
                    borderRadius: 4,
                    boxShadow: 6,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    height: '100%',
                  }}
                >
                  <Box
                    sx={{
                      background: item.gradient,
                      py: 5,
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                  >
                    <Avatar
                      sx={{
                        width: 80,
                        height: 80,
                        bgcolor: 'rgba(255,255,255,0.15)',
                      }}
                    >
                      {item.icon}
                    </Avatar>
                  </Box>
                  <CardContent>
                    <Typography variant="h6" fontWeight={700} mb={1}>
                      {item.title}
                    </Typography>
                    <Typography color="text.secondary" mb={2}>
                      {item.description}
                    </Typography>
                    {item.metrics.map((metric, i) => (
                      <Typography
                        key={i}
                        fontWeight={600}
                        color={siteConfig.colors.primary}
                      >
                        • {metric}
                      </Typography>
                    ))}
                  </CardContent>
                  <Box textAlign="center" pb={3}>
                    <Button
                      variant="outlined"
                      sx={{
                        textTransform: 'none',
                        borderRadius: 3,
                        px: 3,
                        color: siteConfig.colors.primary,
                        borderColor: siteConfig.colors.primary,
                        '&:hover': {
                          background: siteConfig.colors.primary,
                          color: '#fff',
                        },
                      }}
                    >
                      View Case Study
                    </Button>
                  </Box>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Industry Expertise */}
      <Box sx={{ py: 12, background: '#f9fafc' }}>
        <Container>
          <Typography
            variant="h4"
            fontWeight={800}
            textAlign="center"
            mb={6}
          >
            Industry Expertise 🌎
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {industries.map((ind, i) => (
              <Grid item xs={6} md={2.4} key={i}>
                <Paper
                  elevation={4}
                  sx={{
                    py: 4,
                    textAlign: 'center',
                    borderRadius: 3,
                    transition: '0.3s',
                    '&:hover': { transform: 'translateY(-5px)' },
                  }}
                >
                  <Avatar sx={{ bgcolor: ind.color, mx: 'auto', mb: 2 }}>
                    {ind.icon}
                  </Avatar>
                  <Typography fontWeight={600}>{ind.name}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Ad Formats Section */}
      <Container sx={{ py: 12 }}>
        <Typography variant="h4" fontWeight={800} textAlign="center" mb={6}>
          Ad Formats in Action 🎯
        </Typography>
        <Grid container spacing={4}>
          {adFormats.map((f, i) => (
            <Grid item xs={12} md={3} key={i}>
              <Paper
                elevation={4}
                sx={{
                  p: 4,
                  borderRadius: 3,
                  textAlign: 'center',
                  height: '100%',
                  transition: '0.3s',
                  '&:hover': { transform: 'translateY(-5px)' },
                }}
              >
                <Avatar
                  sx={{
                    bgcolor: siteConfig.colors.primary,
                    mb: 2,
                    mx: 'auto',
                  }}
                >
                  {f.icon}
                </Avatar>
                <Typography variant="h6" fontWeight={700} mb={1}>
                  {f.title}
                </Typography>
                <Typography color="text.secondary">{f.desc}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Key Results */}
      <Box sx={{ py: 10, textAlign: 'center' }}>
        <Container>
          <Typography variant="h4" fontWeight={800} mb={6}>
            Real Impact. Real Numbers.
          </Typography>
          <Grid container spacing={4}>
            {[
              { label: 'Viewability', value: '98%' },
              { label: 'Engagement Lift', value: '+72%' },
              { label: 'Brand Recall', value: '3x' },
              { label: 'Campaign ROI', value: '+250%' },
            ].map((stat, i) => (
              <Grid item xs={6} md={3} key={i}>
                <Paper
                  elevation={4}
                  sx={{
                    py: 4,
                    borderRadius: 3,
                    background: `linear-gradient(135deg, ${siteConfig.colors.primary}, ${siteConfig.colors.secondary})`,
                    color: '#fff',
                  }}
                >
                  <Typography variant="h4" fontWeight={700}>
                    {stat.value}
                  </Typography>
                  <Typography variant="body1">{stat.label}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

 {/* Additional Section: Advertisement Trends */}
<Box sx={{ py: 12, background: '#f9fafc' }}>
  <Container>
    <Typography variant="h4" fontWeight={800} textAlign="center" mb={6}>
      Emerging Advertising Trends
    </Typography>
    <Grid container spacing={4}>
      <Grid item xs={12} md={4}>
        <Paper
          elevation={4}
          sx={{
            p: 4,
            borderRadius: 3,
            height: '100%',
            transition: '0.3s',
            '&:hover': { transform: 'translateY(-5px)', boxShadow: 6 },
          }}
        >
          <Typography variant="h6" fontWeight={700} mb={2}>
            AI-Powered Creatives
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Brands increasingly leverage AI to generate personalized creatives at scale.
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} md={4}>
        <Paper
          elevation={4}
          sx={{
            p: 4,
            borderRadius: 3,
            height: '100%',
            transition: '0.3s',
            '&:hover': { transform: 'translateY(-5px)', boxShadow: 6 },
          }}
        >
          <Typography variant="h6" fontWeight={700} mb={2}>
            Short-Form Video Ads
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Platforms like TikTok and YouTube Shorts dominate audience engagement with bite-sized content.
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} md={4}>
        <Paper
          elevation={4}
          sx={{
            p: 4,
            borderRadius: 3,
            height: '100%',
            transition: '0.3s',
            '&:hover': { transform: 'translateY(-5px)', boxShadow: 6 },
          }}
        >
          <Typography variant="h6" fontWeight={700} mb={2}>
            Data-Driven Targeting
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Sophisticated analytics and AI targeting help maximize ROI on ad spend.
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  </Container>
</Box>


      {/* CTA */}
      <Box
        sx={{
          background: '#eef2f7',
          py: 12,
          textAlign: 'center',
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="h4" fontWeight={800} mb={3}>
            Let’s Build Your Next Success Story
          </Typography>
          <Typography variant="body1" color="text.secondary" mb={4}>
            Partner with AdBliss to create data-backed campaigns that transform
            results into measurable success.
          </Typography>
          <Button
            variant="contained"
            size="large"
            href="/contact"
            sx={{
              borderRadius: 3,
              textTransform: 'none',
              px: 4,
              py: 1.5,
              background: `linear-gradient(135deg, ${siteConfig.colors.primary}, ${siteConfig.colors.secondary})`,
              '&:hover': { boxShadow: 6 },
            }}
          >
            Get in Touch
          </Button>
        </Container>
      </Box>

      <Footer />
    </>
  )
}

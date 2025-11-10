'use client'
import React from 'react'
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Paper,
  
} from '@mui/material'
import CloudDownloadIcon from '@mui/icons-material/CloudDownload'
import DescriptionIcon from '@mui/icons-material/Description'
import InsightsIcon from '@mui/icons-material/Insights'
import PublicIcon from '@mui/icons-material/Public'
import DataObjectIcon from '@mui/icons-material/DataObject'
import StarsIcon from '@mui/icons-material/Stars'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { siteConfig } from '../../config'
import AutoGraphIcon from '@mui/icons-material/AutoGraph'
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt'
import HandshakeIcon from '@mui/icons-material/Handshake'


const DocumentPage: React.FC = () => {
  return (
    <Box>
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          background: `linear-gradient(135deg, ${siteConfig.colors.primary} 0%, ${siteConfig.colors.secondary} 100%)`,
          color: 'white',
          textAlign: 'center',
          py: { xs: 10, md: 14 },
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background:
              'url(/assets/media-bg.jpg) center/cover no-repeat, rgba(0,0,0,0.2)',
            mixBlendMode: 'overlay',
            zIndex: 0,
          }}
        />
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2 }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              mb: 2,
              fontSize: { xs: '2rem', md: '3rem' },
            }}
          >
            Explore Our Media & Publisher Documents
          </Typography>

          <Typography
            variant="h6"
            sx={{
              color: 'rgba(255,255,255,0.85)',
              mb: 4,
              fontSize: { xs: '1rem', md: '1.2rem' },
            }}
          >
            Unlock exclusive insights into AdBliss’s high-impact media network, 
            audience intelligence, and data-driven strategies that empower global brands.
          </Typography>

          <Button
            variant="contained"
            sx={{
              backgroundColor: '#e2c8fa',
              color: siteConfig.colors.primary,
              px: 4,
              py: 1.2,
              borderRadius: '50px',
              fontWeight: 600,
              '&:hover': { backgroundColor: '#d1a8f7' },
            }}
            href="#documents"
          >
            View Official Documents
          </Button>
        </Container>
      </Box>

      {/* About Documents Section */}
      <Container sx={{ mt: 12, mb: 6 }}>
        <Typography
          variant="h2"
          sx={{ fontWeight: 700, textAlign: 'center', mb: 3, color: siteConfig.colors.primary }}
        >
          About These Documents
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: 'center',
            color: 'text.secondary',
            maxWidth: 800,
            mx: 'auto',
            lineHeight: 1.8,
          }}
        >
          At AdBliss, we combine data, AI, and creativity to deliver unparalleled
          media performance. Our official documents highlight the depth of our
          publisher network, audience precision, and innovative advertising
          capabilities across Connected TV (CTV), OTT, and premium digital platforms.
          Explore the documents below to discover how AdBliss helps brands achieve
          greater visibility, engagement, and measurable ROI.
        </Typography>
      </Container>

      {/* Documents Section */}
     
    <Box
      sx={{
        bgcolor: '#f5f5f5',
        width: '100%',
        py: { xs: 8, md: 12 },
        mt: 15,
      }}
    >
      <Container maxWidth="xl">
        {/* Section Heading */}
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            textAlign: 'center',
            mb: 6,
            color: siteConfig.colors.primary,
            fontSize: { xs: '2rem', md: '2.8rem' },
          }}
        >
          Our Official Documents
        </Typography>

        {/* Documents Grid */}
        <Grid container spacing={6}>
          {/* Media Deck */}
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                borderRadius: '20px',
                p: 3,
                textAlign: 'center',
                height: '100%',
                background:
                  'linear-gradient(135deg, #fafafa 0%, #f3f3f3 100%)',
                boxShadow:
                  '0 4px 20px rgba(0,0,0,0.1), inset 0 0 10px rgba(255,255,255,0.4)',
                transition: 'all 0.4s ease',
                '&:hover': {
                  transform: 'translateY(-7px)',
                
                },
              }}
            >
              <CardContent>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 2,
                  }}
                >
                  <Box
                    sx={{
                      width: 80,
                      height: 80,
                      borderRadius: '50%',
                      background:
                        'radial-gradient(circle at 40% 40%, #5c6bc0, #1a237e)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 0 20px rgba(92,107,192,0.5)',
                    }}
                  >
                    <DescriptionIcon sx={{ fontSize: 45, color: '#fff' }} />
                  </Box>
                </Box>

                <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
                  AdBliss Media Deck
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: 'text.secondary',
                    mb: 3,
                    px: 1,
                    lineHeight: 1.8,
                  }}
                >
                  Explore how AdBliss leverages data intelligence, creativity,
                  and high-impact media across CTV, OTT, and premium publishers
                  to deliver measurable growth and meaningful engagement.
                </Typography>

                <Button
                  variant="contained"
                  startIcon={<CloudDownloadIcon />}
                  sx={{
                    backgroundColor: siteConfig.colors.primary,
                    color: '#fff',
                    px: 4,
                    py: 1.2,
                    borderRadius: '50px',
                    fontWeight: 600,
                    '&:hover': { backgroundColor: siteConfig.colors.secondary },
                  }}
                  href="/Ad%20Bliss%20Media%20Deck%20-%20v2.pdf"
                  target="_blank"
                >
                  View / Download
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* Top Publishers */}
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                borderRadius: '20px',
                p: 3,
                textAlign: 'center',
                height: '100%',
                background:
                  'linear-gradient(135deg, #fafafa 0%, #f3f3f3 100%)',
                boxShadow:
                  '0 4px 20px rgba(0,0,0,0.1), inset 0 0 10px rgba(255,255,255,0.4)',
                transition: 'all 0.4s ease',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow:
                    '0 8px 35px rgba(0,0,0,0.2), 0 0 20px rgba(63,81,181,0.2)',
                },
              }}
            >
              <CardContent>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 2,
                  }}
                >
                  <Box
                    sx={{
                      width: 80,
                      height: 80,
                      borderRadius: '50%',
                      background:
                        'radial-gradient(circle at 40% 40%, #5c6bc0, #1a237e)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 0 20px rgba(92,107,192,0.5)',
                    }}
                  >
                    <DescriptionIcon sx={{ fontSize: 45, color: '#fff' }} />
                  </Box>
                </Box>

                <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
                  Top Publishers Document
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: 'text.secondary',
                    mb: 3,
                    px: 1,
                    lineHeight: 1.8,
                  }}
                >
                  Discover AdBliss’s network of 5000+ global publishers across
                  OTT, finance, technology, lifestyle, and news — a trusted
                  ecosystem built for impactful storytelling and scalable reach.
                </Typography>

                <Button
                  variant="contained"
                  startIcon={<CloudDownloadIcon />}
                  sx={{
                    backgroundColor: siteConfig.colors.primary,
                    color: '#fff',
                    px: 4,
                    py: 1.2,
                    borderRadius: '50px',
                    fontWeight: 600,
                    '&:hover': { backgroundColor: siteConfig.colors.secondary },
                  }}
                  href="/AdBliss%20Top%20Publishers.pdf"
                  target="_blank"
                >
                  View / Download
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>

      {/* Why Choose AdBliss Section */}
      {/* Why Choose AdBliss Section */}
<Container sx={{ mt: 15, mb: 10 }}>
  <Typography
    variant="h2"
    sx={{
      fontWeight: 700,
      textAlign: 'center',
      mb: 6,
      color: siteConfig.colors.primary,
    }}
  >
    Why Choose AdBliss Media?
  </Typography>

  <Grid container spacing={4}>
    {/* Data-Driven Insights */}
    <Grid item xs={12} md={3}>
      <Card
        sx={{
          textAlign: 'center',
          p: 4,
          borderRadius: '20px',
          boxShadow: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          minHeight: 280,
          transition: '0.3s',
          '&:hover': {
            transform: 'translateY(-6px)',
            boxShadow: 6,
          },
        }}
      >
        <InsightsIcon sx={{ fontSize: 60, color: '#1565c0', mb: 2 }} />
        <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
          Data-Driven Insights
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: 'text.secondary', maxWidth: 250, lineHeight: 1.6 }}
        >
          400M+ deterministic audience data points powering personalized and
          effective campaigns for precise targeting.
        </Typography>
      </Card>
    </Grid>

    {/* Global Publishers */}
    <Grid item xs={12} md={3}>
      <Card
        sx={{
          textAlign: 'center',
          p: 4,
          borderRadius: '20px',
          boxShadow: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          minHeight: 280,
          transition: '0.3s',
          '&:hover': {
            transform: 'translateY(-6px)',
            boxShadow: 6,
          },
        }}
      >
        <PublicIcon sx={{ fontSize: 60, color: '#00897b', mb: 2 }} />
        <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
          5000+ Global Publishers
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: 'text.secondary', maxWidth: 250, lineHeight: 1.6 }}
        >
          Collaborations with top-tier, brand-safe media platforms ensuring
          premium reach and high engagement.
        </Typography>
      </Card>
    </Grid>

    {/* AI-Optimized Creativity */}
    <Grid item xs={12} md={3}>
      <Card
        sx={{
          textAlign: 'center',
          p: 4,
          borderRadius: '20px',
          boxShadow: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          minHeight: 280,
          transition: '0.3s',
          '&:hover': {
            transform: 'translateY(-6px)',
            boxShadow: 6,
          },
        }}
      >
        <DataObjectIcon sx={{ fontSize: 60, color: '#f57c00', mb: 2 }} />
        <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
          AI-Optimized Creativity
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: 'text.secondary', maxWidth: 250, lineHeight: 1.6 }}
        >
          From smart visuals to dynamic videos, AdBliss uses AI to craft
          high-performing, adaptive ad experiences.
        </Typography>
      </Card>
    </Grid>

    {/* Proven Performance */}
    <Grid item xs={12} md={3}>
      <Card
        sx={{
          textAlign: 'center',
          p: 4,
          borderRadius: '20px',
          boxShadow: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          minHeight: 280,
          transition: '0.3s',
          '&:hover': {
            transform: 'translateY(-6px)',
            boxShadow: 6,
          },
        }}
      >
        <StarsIcon sx={{ fontSize: 60, color: '#d32f2f', mb: 2 }} />
        <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
          Proven Performance
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: 'text.secondary', maxWidth: 250, lineHeight: 1.6 }}
        >
          Trusted by leading brands across industries to drive awareness,
          engagement, and measurable results.
        </Typography>
      </Card>
    </Grid>
  </Grid>
</Container>


{/* section The AdBliss Promise */}

  <Box
      sx={{
        background: 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)',
        py: { xs: 8, md: 12 },
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
        mt:20
      }}
    >
      <Container maxWidth="lg">
        {/* Section Title */}
        <Typography
          variant="h4"
          sx={{
            textAlign: 'center',
            fontWeight: 700,
            mb: 2,
            fontSize: { xs: '2rem', md: '2.5rem' },
          }}
        >
          The AdBliss Promise
        </Typography>

        <Typography
          variant="body1"
          sx={{
            textAlign: 'center',
            maxWidth: 800,
            mx: 'auto',
            mb: 8,
            color: 'rgba(255,255,255,0.85)',
            lineHeight: 1.8,
          }}
        >
          At AdBliss, we transform creativity into measurable business growth. 
          Our focus is to merge technology, strategy, and emotion into every campaign — 
          building brands that inspire and perform.
        </Typography>

        {/* Content Grid */}
        <Grid container spacing={4}>
          {/* 1️⃣ Measurable Brand Growth */}
          <Grid item xs={12} md={4}>
            <Paper
              elevation={0}
              sx={{
                backgroundColor: 'rgba(255,255,255,0.08)',
                p: 5,
                borderRadius: '24px',
                textAlign: 'center',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.4s ease',
                border: '1px solid rgba(255,255,255,0.1)',
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,0.15)',
                  boxShadow: '0 0 30px 6px rgba(255, 215, 0, 0.3)',
                  border: '1px solid rgba(255,215,0,0.4)',
                  transform: 'translateY(-8px)',
                },
              }}
            >
              <Box
                sx={{
                  width: 90,
                  height: 90,
                  borderRadius: '50%',
                  background: 'radial-gradient(circle at 40% 40%, #ffca28, #f57c00)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mx: 'auto',
                  mb: 3,
                  boxShadow: '0 0 25px rgba(255, 202, 40, 0.4)',
                }}
              >
                <AutoGraphIcon sx={{ fontSize: 45, color: '#fff' }} />
              </Box>
              <Typography variant="h4" sx={{ fontWeight: 600, mb: 1 }}>
               Brand Growth
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: 'rgba(255,255,255,0.85)',
                  lineHeight: 1.8,
                }}
              >
                Every campaign we create is designed for measurable success — combining
                performance data and creative excellence to drive tangible brand outcomes.
              </Typography>
            </Paper>
          </Grid>

          {/* 2️⃣ Data with Intelligence */}
          <Grid item xs={12} md={4}>
            <Paper
              elevation={0}
              sx={{
                backgroundColor: 'rgba(255,255,255,0.08)',
                p: 5,
                borderRadius: '24px',
                textAlign: 'center',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.4s ease',
                border: '1px solid rgba(255,255,255,0.1)',
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,0.15)',
                  boxShadow: '0 0 30px 6px rgba(128,222,234,0.4)',
                  border: '1px solid rgba(128,222,234,0.5)',
                  transform: 'translateY(-8px)',
                },
              }}
            >
              <Box
                sx={{
                  width: 90,
                  height: 90,
                  borderRadius: '50%',
                  background: 'radial-gradient(circle at 40% 40%, #4fc3f7, #0288d1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mx: 'auto',
                  mb: 3,
                  boxShadow: '0 0 25px rgba(79,195,247,0.4)',
                }}
              >
                <PsychologyAltIcon sx={{ fontSize: 45, color: '#fff' }} />
              </Box>
              <Typography variant="h4" sx={{ fontWeight: 600, mb: 1 }}>
                Data with Intelligence
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: 'rgba(255,255,255,0.85)',
                  lineHeight: 1.8,
                }}
              >
                Our insights go beyond analytics — we use AI, behavioral signals, and
                creative context to build smarter, audience-first campaigns that convert.
              </Typography>
            </Paper>
          </Grid>

          {/* 3️⃣ Partnership That Lasts */}
          <Grid item xs={12} md={4}>
            <Paper
              elevation={0}
              sx={{
                backgroundColor: 'rgba(255,255,255,0.08)',
                p: 5,
                borderRadius: '24px',
                textAlign: 'center',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.4s ease',
                border: '1px solid rgba(255,255,255,0.1)',
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,0.15)',
                  boxShadow: '0 0 30px 6px rgba(255,215,64,0.3)',
                  border: '1px solid rgba(255,215,64,0.4)',
                  transform: 'translateY(-8px)',
                },
              }}
            >
              <Box
                sx={{
                  width: 90,
                  height: 90,
                  borderRadius: '50%',
                  background: 'radial-gradient(circle at 40% 40%, #ffd740, #fbc02d)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mx: 'auto',
                  mb: 3,
                  boxShadow: '0 0 25px rgba(255,215,64,0.4)',
                }}
              >
                <HandshakeIcon sx={{ fontSize: 45, color: '#fff' }} />
              </Box>
              <Typography variant="h4" sx={{ fontWeight: 600, mb: 1  }}>
                Partnership That Lasts
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: 'rgba(255,255,255,0.85)',
                  lineHeight: 1.8,

                }}
              >
                We don’t just deliver campaigns — we build partnerships based on trust, 
                transparency, and shared growth for long-term brand success.
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        {/* Closing Statement */}
        <Box sx={{ textAlign: 'center', mt: 10 }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 600,
              color: 'white',
              mb: 2,
              fontStyle: 'italic',
            }}
          >
            “We don’t just advertise — we amplify ambition.”
          </Typography>

         
        </Box>
      </Container>
    </Box>


      {/* Closing Section */}
      <Box
        sx={{
          backgroundColor: '#f5f5f5',
          py: 8,
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h5" sx={{ fontWeight: 600, color: '#3949ab', mb: 2 }}>
            “Combining Data, AI & Creativity to Power Smarter Media Decisions.”
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', mb: 6 }}>
            AdBliss transforms how brands connect with audiences through advanced
            targeting, AI-enhanced creative optimization, and strategic partnerships
            with global publishers.
          </Typography>
          
        </Container>
      </Box>

      {/* section  */}

      {/* Footer */}
      <Footer />
    </Box>
  )
}

export default DocumentPage

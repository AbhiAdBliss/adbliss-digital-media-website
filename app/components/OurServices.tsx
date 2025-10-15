'use client'

import { Box, Container, Typography, Grid, Chip } from '@mui/material'
import {
  Campaign,
  Timeline,
  Insights,
  DesignServices,
  TrendingUp,
} from '@mui/icons-material'

const services = [
  {
    icon: <Campaign sx={{ fontSize: 36, color: '#1976d2' }} />, // Blue
    title: 'Paid Media Campaigns',
    desc: 'Run optimized campaigns across Google, Meta, and LinkedIn to drive targeted engagement.',
  },
  {
    icon: <Timeline sx={{ fontSize: 36, color: '#2e7d32' }} />, // Green
    title: 'Programmatic Advertising',
    desc: 'Automate ad buying with precision targeting for maximum ROI.',
  },
  {
    icon: <Insights sx={{ fontSize: 36, color: '#ed6c02' }} />, // Orange
    title: 'Audience Targeting & Analytics',
    desc: 'Identify, reach, and measure your most valuable audiences effectively.',
  },
  {
    icon: <DesignServices sx={{ fontSize: 36, color: '#9c27b0' }} />, // Purple
    title: 'Creative & Content Marketing',
    desc: 'Engaging ad creatives and compelling content to strengthen your brand message.',
  },
  {
    icon: <TrendingUp sx={{ fontSize: 36, color: '#d32f2f' }} />, // Red
    title: 'Performance Marketing',
    desc: 'Data-driven campaigns focused on conversions, revenue, and measurable growth.',
  },
]

export default function OurServices() {
  return (
    <Box
      sx={{
        position: 'relative',
        py: 10,
        bgcolor: 'grey.100',
      }}
    >
      {/* Angled divider top */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '60px',
          backgroundColor: 'white',
          clipPath: 'polygon(0 0, 100% 0, 100% 100%)',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        {/* Section Header */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Chip
            label="Our Services"
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
          <Typography variant="body1" color="text.secondary">
            Driving growth with modern marketing strategies
          </Typography>
        </Box>

        {/* Services List */}
        <Grid container spacing={4}>
          {services.map((service, idx) => (
            <Grid
              item
              xs={12}
              md={6}
              key={idx}
              sx={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 2,
                mb: 2,
              }}
            >
              {/* Icon */}
              <Box
                sx={{
                  flexShrink: 0,
                  width: 56,
                  height: 56,
                  bgcolor: 'white',
                  borderRadius: '50%',
                  boxShadow: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {service.icon}
              </Box>

              {/* Text */}
              <Box>
                <Typography
                  variant="h6"
                  fontWeight={600}
                  gutterBottom
                  sx={{ color: 'text.primary' }}
                >
                  {service.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {service.desc}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Angled divider bottom */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '60px',
          backgroundColor: 'white',
          clipPath: 'polygon(0 0, 100% 100%, 0 100%)',
        }}
      />
    </Box>
  )
}

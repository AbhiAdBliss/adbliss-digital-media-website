'use client'
import { Box, Typography, Container, Chip, Stack } from '@mui/material'
import { TrendingUp, Security, Analytics } from '@mui/icons-material'
import { keyframes } from '@emotion/react'
import { siteConfig } from '../../config'


const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`

export default function Hero() {
  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        color: 'white',
        textAlign: 'center',
        backgroundImage: `url('${siteConfig.images.hero}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Enhanced Overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: `linear-gradient(135deg, ${siteConfig.colors.primary}CC 0%, ${siteConfig.colors.secondary}CC 100%)`,
          zIndex: 1,
        }}
      />

      {/* Animated Background Elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          width: 100,
          height: 100,
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.1)',
          animation: `${float} 6s ease-in-out infinite`,
          zIndex: 1,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '20%',
          left: '15%',
          width: 60,
          height: 60,
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.08)',
          animation: `${float} 4s ease-in-out infinite`,
          zIndex: 1,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2, py: 8 }}>
        <Box sx={{ animation: `${fadeInUp} 1s ease-out` }}>
          <Chip
            // label="🚀 New: AI-Powered Targeting"
            sx={{
              mb: 3,
              bgcolor: 'rgba(255, 255, 255, 0.15)',
              color: 'white',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
            }}
          />

          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.5rem', md: '4.5rem' },
              mb: 3,
              background: 'linear-gradient(45deg, #fff, #e0e7ff)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              animation: `${fadeInUp} 1s ease-out 0.2s both`,
              whiteSpace: 'pre-line',
            }}
          >
            {siteConfig.content.hero.headline}
          </Typography>

          <Typography
            variant="h5"
            sx={{
              mb: 4,
              maxWidth: '700px',
              mx: 'auto',
              opacity: 0.95,
              fontWeight: 400,
              animation: `${fadeInUp} 1s ease-out 0.4s both`,
            }}
          >
            {siteConfig.content.hero.subheadline}
          </Typography>

          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            justifyContent="center"
            sx={{
              mb: 6,
              animation: `${fadeInUp} 1s ease-out 0.6s both`,
            }}
          >
           
          </Stack>

          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={4}
            justifyContent="center"
            alignItems="center"
            sx={{
              animation: `${fadeInUp} 1s ease-out 0.8s both`,
            }}
          >
            {[
              { icon: 'Security', text: 'Enterprise Security' },
              { icon: 'Analytics', text: 'Real-time Analytics' },
              { icon: 'TrendingUp', text: 'Proven ROI Growth' },
            ].map((feature, index) => {
              const IconComponent =
                feature.icon === 'Security'
                  ? Security
                  : feature.icon === 'Analytics'
                    ? Analytics
                    : TrendingUp
              return (
                <Box
                  key={index}
                  sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
                >
                  <IconComponent sx={{ color: 'rgba(255, 255, 255, 0.8)' }} />
                  <Typography variant="body2" sx={{ opacity: 0.8 }}>
                    {feature.text}
                  </Typography>
                </Box>
              )
            })}
          </Stack>
        </Box>
      </Container>
    </Box>
  )
}

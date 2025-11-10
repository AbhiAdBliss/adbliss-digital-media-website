'use client'
import { Box, Typography, Button } from '@mui/material'
import { useAutoSlider } from '../hooks/useAutoSlider'
import Link from 'next/link'
import { siteConfig } from '../../config'

export default function VideoCarousel() {
  const { currentIndex } = useAutoSlider(
    siteConfig.images.videos.length,
    siteConfig.video.duration
  )

  return (
    <Box sx={{ bgcolor: 'black', position: 'relative', minHeight: '100vh' }}>
      <Box
        sx={{
          position: 'relative',
          overflow: 'hidden',
          height: '100vh',
          width: '100%',
        }}
      >
        <video
          key={currentIndex}
          src={
            siteConfig.images.videos[
              currentIndex % siteConfig.images.videos.length
            ]
          }
          autoPlay
          muted
          loop
          playsInline
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            position: 'absolute',
            top: 0,
            left: 0,
          }}
        />

        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background:
              'linear-gradient(45deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            color: 'white',
            zIndex: 2,
            pl: { xs: 4, md: 8 },
          }}
        >
          <Box sx={{ maxWidth: '500px' }}>
            <Typography variant="h3" sx={{ mb: 2, fontWeight: 700 }}>
              Transform Your Digital Marketing
            </Typography>
            <Typography variant="h6" sx={{ opacity: 0.9, mb: 3 }}>
              Drive measurable growth with data-powered advertising that reaches
              the right decision-makers at the perfect moment.
            </Typography>

            {/* ✅ Updated Contact Button */}
            <Button
              variant="contained"
              size="large"
              component={Link}
              href="/contact"
              sx={{
                background: `linear-gradient(45deg, ${siteConfig.colors.primary}, ${siteConfig.colors.secondary})`,
                color: 'white',
                fontWeight: 600,
                px: 4,
                py: 1.5,
                '&:hover': {
                  background: `linear-gradient(45deg, ${siteConfig.colors.secondary}, ${siteConfig.colors.primary})`,
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              Start Free Trial
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

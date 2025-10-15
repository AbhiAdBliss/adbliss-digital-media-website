'use client'

import { Box, Container, Typography, Grid, Chip, Paper } from '@mui/material'
import Slider from 'react-slick'
import { motion } from 'framer-motion'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const caseStudies = [
  {
    title: 'SaaS Client – +300% ROI in 90 Days',
    challenge: 'High CAC and low-quality leads from paid channels.',
    strategy:
      'Refined ICP, launched cross-channel campaigns, and optimized creatives with iterative testing.',
    results: '+300% ROI and 45% lower CAC in 3 months.',
  },
  {
    title: 'E-commerce – 5× Sales Growth',
    challenge: 'Strong traffic but poor conversion rates.',
    strategy:
      'Creative refresh, personalized retargeting, and mobile-first landing page improvements.',
    results: '5× increase in sales in 6 months with 20% lower ad spend.',
  },
  {
    title: 'FinTech – 2M+ App Installs',
    challenge: 'Needed rapid scale in a competitive market.',
    strategy:
      'Programmatic UA, geo-based targeting, and multi-step funnel messaging.',
    results: '2M installs within 8 months with strong retention.',
  },
]

export default function CaseStudies() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  }

  return (
    <Box
      sx={{
        py: 12,
        bgcolor: 'grey.50',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Animated gradient background */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(135deg, rgba(25,118,210,0.08), rgba(156,39,176,0.08))',
          animation: 'gradientShift 12s ease-in-out infinite alternate',
          zIndex: 1,
          '@keyframes gradientShift': {
            '0%': { backgroundPosition: '0% 50%' },
            '100%': { backgroundPosition: '100% 50%' },
          },
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        {/* Section Header */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Chip
            label="Case Studies"
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
          <Typography
            variant="h3"
            fontWeight={800}
            sx={{
              fontSize: '2.6rem',
              background: 'linear-gradient(90deg, #1976d2, #9c27b0)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Success Stories That Inspire
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Proof that our strategies deliver real results
          </Typography>
        </Box>

        {/* Slider */}
        <Slider {...settings}>
          {caseStudies.map((cs, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <Paper
                sx={{
                  p: { xs: 4, md: 8 },
                  borderRadius: 6,
                  background:
                    'linear-gradient(135deg, rgba(25,118,210,0.15), rgba(156,39,176,0.15))',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255,255,255,0.25)',
                  minHeight: 360,
                  transition: 'all 0.4s ease',
                  position: 'relative',
                  overflow: 'hidden',
                  '&:hover': {
                    transform: 'translateY(-8px) scale(1.02)',
                    boxShadow: '0 12px 40px rgba(0,0,0,0.12)',
                  },
                }}
              >
                <Grid container spacing={4} alignItems="center">
                  {/* Left side - storytelling */}
                  <Grid item xs={12} md={6}>
                    <Typography
                      variant="h5"
                      fontWeight={700}
                      gutterBottom
                      sx={{
                        fontSize: '1.7rem',
                        background: 'linear-gradient(90deg,#1976d2,#9c27b0)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                      }}
                    >
                      {cs.title}
                    </Typography>

                    <Box sx={{ mt: 2 }}>
                      <Typography
                        variant="subtitle1"
                        fontWeight={700}
                        sx={{ color: 'primary.main' }}
                      >
                        Challenge
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {cs.challenge}
                      </Typography>
                    </Box>

                    <Box sx={{ mt: 2 }}>
                      <Typography
                        variant="subtitle1"
                        fontWeight={700}
                        sx={{ color: 'primary.main' }}
                      >
                        Strategy
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {cs.strategy}
                      </Typography>
                    </Box>
                  </Grid>

                  {/* Right side - Results */}
                  <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textAlign: 'center',
                    }}
                  >
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      <Box>
                        <Typography
                          variant="h2"
                          fontWeight={900}
                          sx={{
                            fontSize: { xs: '2.5rem', md: '3.5rem' },
                            mb: 1,
                            background:
                              'linear-gradient(90deg,#1976d2,#9c27b0)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                          }}
                        >
                          {cs.results.split(' ')[0]}
                        </Typography>
                        <Typography
                          variant="h6"
                          sx={{ opacity: 0.9, color: 'text.primary' }}
                        >
                          {cs.results.replace(cs.results.split(' ')[0], '')}
                        </Typography>
                      </Box>
                    </motion.div>
                  </Grid>
                </Grid>
              </Paper>
            </motion.div>
          ))}
        </Slider>
      </Container>
    </Box>
  )
}

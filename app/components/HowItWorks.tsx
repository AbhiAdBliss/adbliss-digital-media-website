'use client'

import { Box, Container, Typography, Grid, Chip, Button } from '@mui/material'
import { useRouter } from 'next/navigation'
import { Lightbulb, Build, TrendingUp } from '@mui/icons-material'

const steps = [
  {
    number: 1,
    icon: <Lightbulb fontSize="large" color="primary" />,
    title: 'Understand Your Goals',
    desc: 'We begin by analyzing your business needs and campaign objectives.',
  },
  {
    number: 2,
    icon: <Build fontSize="large" color="primary" />,
    title: 'Craft Tailored Strategy',
    desc: 'Our team creates customized strategies designed for your success.',
  },
  {
    number: 3,
    icon: <TrendingUp fontSize="large" color="primary" />,
    title: 'Deliver Measurable Results',
    desc: 'We optimize campaigns continuously to maximize ROI and growth.',
  },
]

export default function HowItWorks() {
  const router = useRouter()

  return (
    <Box
      sx={{
        position: 'relative',
        py: 12,
        bgcolor: 'grey.100',
        background: (theme) =>
          `linear-gradient(135deg, ${theme.palette.grey[100]}, ${theme.palette.grey[200]})`,
      }}
    >
      {/* Decorative angled divider (top) */}
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

      <Container maxWidth="lg">
        {/* Section Header */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Chip
            label="How It Works"
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
          <Typography variant="h4" fontWeight={700} gutterBottom>
            Simple, Clear, Effective
          </Typography>
          <Typography variant="body1" color="text.secondary">
            No complex setup. Start seeing results in days, not weeks.
          </Typography>
        </Box>

        {/* Steps Grid */}
        <Grid container spacing={4}>
          {steps.map((step) => (
            <Grid item xs={12} md={4} key={step.number}>
              <Box
                sx={{
                  textAlign: 'center',
                  p: 4,
                  bgcolor: 'white',
                  borderRadius: 3,
                  boxShadow: 3,
                  position: 'relative',
                  '&:hover': { boxShadow: 8, transform: 'translateY(-6px)' },
                  transition: 'all 0.3s ease',
                }}
              >
                {/* Step Number */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: -16,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    bgcolor: 'primary.main',
                    color: 'white',
                    borderRadius: '50%',
                    width: 40,
                    height: 40,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 600,
                  }}
                >
                  {step.number}
                </Box>

                {/* Icon */}
                <Box sx={{ mb: 2 }}>{step.icon}</Box>

                {/* Title */}
                <Typography variant="h6" fontWeight={600} gutterBottom>
                  {step.title}
                </Typography>

                {/* Description */}
                <Typography variant="body2" color="text.secondary">
                  {step.desc}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* CTA Button */}
        <Box sx={{ textAlign: 'center', mt: 8 }}>
          <Button
            variant="contained"
            size="large"
            sx={{
              px: 4,
              py: 1.5,
              fontSize: '1rem',
              borderRadius: 3,
              background: (theme) =>
                `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              '&:hover': {
                background: (theme) =>
                  `linear-gradient(45deg, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
              },
            }}
            onClick={() => router.push('/contact')}
          >
            Learn More
          </Button>
        </Box>
      </Container>

      {/* Decorative angled divider (bottom) */}
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

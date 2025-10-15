'use client'
import { Box, Container, Typography, Grid, Avatar } from '@mui/material'
import { FeatureItem } from '../types'

interface FeatureGridProps {
  features: FeatureItem[]
  title?: string
  subtitle?: string
}

export default function FeatureGrid({
  features,
  title,
  subtitle,
}: FeatureGridProps) {
  return (
    <Box sx={{ py: 12, bgcolor: 'grey.50' }}>
      <Container maxWidth="lg">
        {(title || subtitle) && (
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            {title && (
              <Typography variant="h3" sx={{ mb: 3, fontWeight: 700 }}>
                {title}
              </Typography>
            )}
            {subtitle && (
              <Typography
                variant="h6"
                sx={{ color: 'text.secondary', fontWeight: 400 }}
              >
                {subtitle}
              </Typography>
            )}
          </Box>
        )}
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Box sx={{ textAlign: 'center' }}>
                <Avatar
                  sx={{
                    bgcolor: feature.color,
                    width: 64,
                    height: 64,
                    mx: 'auto',
                    mb: 2,
                  }}
                >
                  {feature.icon}
                </Avatar>
                <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                  {feature.title}
                </Typography>
                <Typography color="text.secondary">
                  {feature.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

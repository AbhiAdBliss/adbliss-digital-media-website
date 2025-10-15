'use client'
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Grid,
  Stack,
} from '@mui/material'
import { TrendingUp } from '@mui/icons-material'
import { useState } from 'react'
import { TabItem } from '../types'

interface TabbedSectionProps {
  items: TabItem[]
  defaultTab?: number
}

export default function TabbedSection({
  items,
  defaultTab = 0,
}: TabbedSectionProps) {
  const [activeTab, setActiveTab] = useState(defaultTab)
  const currentItem = items[activeTab]

  return (
    <Box
      sx={{
        py: 8,
        background: `linear-gradient(to bottom, rgba(255,255,255,0.9) 0%, ${currentItem.color} 100%)`,
        minHeight: '80vh',
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            mb: 6,
            display: 'flex',
            gap: 1,
            width: '100%',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'center',
          }}
        >
          {items.map((item, index) => (
            <Button
              key={item.id}
              onClick={() => setActiveTab(index)}
              sx={{
                flex: { xs: 'none', md: 1 },
                width: { xs: '100%', md: 'auto' },
                borderRadius: '30px',
                px: { xs: 1, md: 2 },
                py: { xs: 1, md: 1.5 },
                textTransform: 'none',
                fontWeight: 500,
                fontSize: { xs: '0.75rem', md: '0.9rem' },
                transition: 'all 0.3s ease',
                bgcolor: activeTab === index ? item.color : 'white',
                color: activeTab === index ? 'white' : '#1a1a1a',
                border: `1px solid ${activeTab === index ? item.color : '#e5e7eb'}`,
                boxShadow:
                  activeTab === index ? `0 2px 8px ${item.color}50` : 'none',
                transform: activeTab === index ? 'translateY(-1px)' : 'none',
                '&:hover': {
                  bgcolor: activeTab === index ? item.color : item.color + '20',
                  color: activeTab === index ? 'white' : item.color,
                  border: `1px solid ${item.color}`,
                  transform: 'translateY(-1px)',
                  boxShadow:
                    activeTab === index
                      ? `0 4px 12px ${item.color}60`
                      : `0 2px 4px ${item.color}30`,
                },
              }}
            >
              {item.label}
            </Button>
          ))}
        </Box>

        <Card
          sx={{
            borderRadius: 4,
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
            overflow: 'hidden',
          }}
        >
          <CardContent sx={{ p: 6 }}>
            <Grid container spacing={6} alignItems="center">
              <Grid item xs={12} md={6}>
                <Typography
                  variant="overline"
                  sx={{
                    color: currentItem.color,
                    fontWeight: 700,
                    letterSpacing: 1,
                    mb: 2,
                  }}
                >
                  {currentItem.label.toUpperCase()}
                </Typography>
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 700,
                    mb: 3,
                    fontSize: { xs: '2rem', md: '2.5rem' },
                    lineHeight: 1.2,
                  }}
                >
                  {currentItem.title}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: 'text.secondary',
                    mb: 4,
                    fontWeight: 400,
                    lineHeight: 1.6,
                  }}
                >
                  {currentItem.subtitle}
                </Typography>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    bgcolor: '#1e293b',
                    color: 'white',
                    borderRadius: 2,
                    px: 4,
                    py: 1.5,
                    textTransform: 'none',
                    fontWeight: 600,
                    '&:hover': { bgcolor: '#334155' },
                  }}
                >
                  {currentItem.cta}
                </Button>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    position: 'relative',
                    height: 400,
                    bgcolor: '#f8fafc',
                    borderRadius: 3,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '2px dashed #cbd5e1',
                  }}
                >
                  <Stack alignItems="center" spacing={2}>
                    <Box
                      sx={{
                        width: 80,
                        height: 80,
                        bgcolor: currentItem.color,
                        borderRadius: 2,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <TrendingUp sx={{ fontSize: 40, color: 'white' }} />
                    </Box>
                    <Typography
                      variant="h4"
                      sx={{ fontWeight: 700, color: currentItem.color }}
                    >
                      30x ROI
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      Performance Metrics
                    </Typography>
                  </Stack>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </Box>
  )
}

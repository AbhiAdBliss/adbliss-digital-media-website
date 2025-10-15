'use client'

import React from 'react'
import Image from 'next/image'
import { Box, Grid, Typography, Paper } from '@mui/material'

interface TeamMember {
  name: string
  role: string
  img: string
}

const teamMembers: TeamMember[] = [
  { name: 'Co-Founder', role: 'Co-Founder', img: '/Teammember-img1.jpg' },
  { name: 'CTO', role: 'CTO', img: '/Teammember-img1.jpg' },
  { name: 'General Manager', role: 'General Manager', img: '/Teammember-img1.jpg' },
  { name: 'Director of Marketing', role: 'Director of Marketing', img: '/Teammember-img1.jpg' },
  { name: 'Head of HR', role: 'Head of HR', img: '/Teammember-img1.jpg' },
  { name: 'Director of Business Development', role: 'Director of Business Development', img: '/Teammember-img1.jpg' },
  { name: 'SEM & SMM Head', role: 'SEM & SMM Head', img: '/Teammember-img1.jpg' },
  { name: 'IT Head', role: 'IT Head', img: '/Teammember-img1.jpg' },
]

const Teammembers: React.FC = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: '#fff', mt: '50px' }}>
      <Box textAlign="center" mb={6}>
        <Typography
          variant="h4"
          fontWeight="bold"
          color="text.primary"
          sx={{ fontSize: { xs: '16px', sm: '18px', md: '50px' } }}
        >
          Our
          <Box
            component="span"
            sx={{
              background: 'linear-gradient(to right, #1976d2, #9c27b0)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              pl: 1,
            }}
          >
            Team
          </Box>
        </Typography>
      </Box>

      <Grid container spacing={6} justifyContent="center" mt="20px">
        {teamMembers.map((member, idx) => (
          <Grid item xs={12} sm={6} md={3} key={idx} sx={{ mb: 4 }}>
            <Box sx={{ overflow: 'hidden', borderRadius: '16px' }}>
              <Paper
                elevation={3}
                sx={{
                  p: 2,
                  textAlign: 'center',
                  borderRadius: '16px',
               
                  '&:hover': {
                    transform: 'scale(1.03)',
                    
                  },
                }}
              >
                <Box
                  sx={{
                    width: 150,
                    height: 150,
                    mx: 'auto',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    boxShadow: 5,
                    transition: 'transform 0.3s ease',
                    '&:hover': { transform: 'scale(1.1)' },
                    position: 'relative',
                    mb: 2,
                  }}
                >
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    style={{
                      objectFit: 'cover',
                      objectPosition: 'top center',
                    }}
                    quality={100}
                  />
                </Box>

                <Typography
                  variant="subtitle1"
                  fontWeight="600"
                  mt={4}
                  sx={{
                    fontSize: { xs: '16px', sm: '18px', md: '20px' },
                    lineHeight: 1.4,
                  }}
                >
                  {member.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    fontSize: { xs: '16px', sm: '18px', md: '16px' },
                    lineHeight: 1.4,
                  }}
                >
                  {member.role}
                </Typography>
              </Paper>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default Teammembers

'use client'

import React from 'react'
import Image from 'next/image'
import { Box, Container, Divider } from '@mui/material'

const logos = [
  { src: '/Amazon-brand.png', alt: 'Amazon' },
  { src: '/Bajaj-brand.svg', alt: 'Bajaj' },
  { src: '/Cisco_logo.svg', alt: 'Cisco' },
  { src: '/Intel-logo.svg.png', alt: 'Intel' },
  { src: '/lenovo-brand.svg', alt: 'Lenovo' },
  { src: '/Taj-logo.svg', alt: 'Taj' },
  { src: '/shreeram-logo.webp', alt: 'Shreeram' },
  { src: '/Toshiba_logo.svg.png', alt: 'Toshiba' },
  { src: '/TVS_Motor_logo.svg.png', alt: 'TVS Motor' },
  { src: '/tvs_emerald_logo.webp', alt: 'TVS Emerald' },
  { src: '/Zeiss_logo.svg.png', alt: 'Zeiss' },
]

const LogosSection: React.FC = () => {
  return (
    <Box
      component="section"
      sx={{ py: 6, bgcolor: 'white', mt: 9, overflow: 'hidden' , backgroundColor:'#FAF9F6' }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative' }}>
        <Box sx={{ display: 'flex', overflow: 'hidden' }}>
          <Box
            className="animate-scroll-x"
            sx={{
              display: 'flex',
              gap: { xs: 2, sm: 3, lg: 4 },
            }}
          >
            {logos.concat(logos).map((logo, index) => (
              <Box
                key={index}
                sx={{
                  position: 'relative',
                  width: { xs: 100, sm: 130, lg: 150 },
                  height: { xs: 40, sm: 50, lg: 60 },
                  flexShrink: 0,
                }}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  sizes="(max-width: 1000px) 200px, (max-width: 1000px) 200px, 250px"
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </Box>
            ))}
          </Box>
        </Box>
        <Divider sx={{ mt: { xs: 3, sm: 4 }, borderColor: 'primary.main' }} />
      </Container>

      {/* Animation Keyframes */}
      <style jsx global>{`
        @keyframes scroll-x {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll-x {
          animation: scroll-x 20s linear infinite;
          width: max-content;
        }
        .animate-scroll-x:hover {
          animation-play-state: paused;
        }
      `}</style>
    </Box>
  )
}

export default LogosSection

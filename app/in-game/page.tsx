'use client'

import { Box, Container, Typography, Grid, Paper, Button } from '@mui/material'
import { motion } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BrandLogo from '../components/BrandLogo'
import Link from 'next/link'


export default function VideoAdvertisingPage() {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh" sx={{ overflowX: 'hidden' }}>
      <Header />

      {/* Hero Section */}
      <Box
        component="section"
        sx={{
          position: 'relative',
          height: { xs: '80vh', md: '90vh' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          textAlign: 'center',
          overflow: 'hidden',
        }}
      >
        <Box
          component="img"
          src="/images/in-game.webp"
          alt="Video Advertising"
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: -1,
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
              'linear-gradient(90deg, rgba(106,17,203,0.55), rgba(37,117,252,0.45))',
            zIndex: -1,
          }}
        />
        <Container maxWidth="md">
          <motion.div
            initial={{ opacity: 0, y: 150 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <Typography
              variant="h2"
              fontWeight={800}
              gutterBottom
              sx={{
                fontSize: { xs: '2.5rem', md: '4.2rem' },
                lineHeight: 1.2,
              }}
            >
              In-game <br /> Advertising
            </Typography>
            <Typography
              variant="h6"
              sx={{
                mb: 4,
                maxWidth: '700px',
                mx: 'auto',
                color: '#f0f0f0',
              }}
            >
              Push innovation and reach an engaged target audience with non-disruptive, high-viewability, and brand-safe in-game ads.
            </Typography>
             <Link href="/contact" passHref>
            <Button
              variant="contained"
              size="large"
              sx={{
                borderRadius: 3,
                px: 5,
                py: 1.5,
                fontWeight: 700,
                background: 'linear-gradient(90deg, #6a11cb, #2575fc)',
                boxShadow: '0px 6px 20px rgba(0,0,0,0.3)',
              }}
            >
              Book a Demo
            </Button>
            </Link>
          </motion.div>
        </Container>
      </Box>



{/* Why Brands Choose In-Game Advertising */}
<Box py={10} bgcolor="#f9f9ff">
  <Container maxWidth="lg">
    <Typography
      variant="h4"
      fontWeight={700}
      textAlign="center"
      gutterBottom
    >
      Why Brands Choose In-Game Advertising
    </Typography>
    <Typography
      textAlign="center"
      color="text.secondary"
      mb={6}
      maxWidth="700px"
      mx="auto"
    >
      Integrated natively into gameplay, in-game ads deliver immersive brand
      experiences while keeping players engaged and entertained.
    </Typography>
    <Grid container spacing={4}>
      {[
        { 
          title: 'Seamless Integration', 
          desc: 'Blend your brand naturally within the game environment without disrupting gameplay.' 
        },
        { 
          title: 'High Engagement', 
          desc: 'Capture players’ attention during peak focus moments for maximum impact.' 
        },
        { 
          title: 'Brand Safety', 
          desc: 'Appear only in premium, curated gaming environments trusted by players.' 
        },
        { 
          title: 'Global Reach', 
          desc: 'Access millions of players worldwide across mobile, PC, and console games.' 
        },
      ].map((item, i) => (
        <Grid item xs={12} md={3} key={i}>
          <Paper
            elevation={3}
            sx={{ p: 4, borderRadius: 3, textAlign: 'center', height: '100%' }}
          >
            <Typography variant="h6" fontWeight={700} gutterBottom>
              {item.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.desc}
            </Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  </Container>
</Box>

{/* Section-3 */}
      <BrandLogo />

{/* Benefits Section */}
<Box sx={{ py: 12, background: '#0f1115', color: '#fff' }}>
  <Container maxWidth="lg">
    <Typography
      variant="h4"
      mb={8}
      fontWeight={700}
      textAlign="center"
      sx={{
        background: 'linear-gradient(90deg, #6a11cb, #2575fc)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}
    >
      Benefits of In-Game Advertising
    </Typography>

    <Grid container spacing={6}>
      {[
        {
          num: '01',
          title: 'Seamless Integration',
          desc: 'Ads blend naturally into gameplay environments without disrupting the player experience.',
        },
        {
          num: '02',
          title: 'High Player Engagement',
          desc: 'Reach users at moments of peak focus, driving stronger brand attention.',
        },
        {
          num: '03',
          title: 'Immersive Brand Experience',
          desc: 'Create lasting impressions with ads that feel part of the game world.',
        },
        {
          num: '04',
          title: 'Brand Safety',
          desc: 'Appear only in premium, curated gaming environments trusted by players.',
        },
        {
          num: '05',
          title: 'Global Reach',
          desc: 'Access millions of players worldwide across mobile, PC, and console games.',
        },
        {
          num: '06',
          title: 'Non-Intrusive',
          desc: 'Deliver ads that enhance, not interrupt, the gaming journey.',
        },
        {
          num: '07',
          title: 'Measurable Results',
          desc: 'Track impressions, viewability, and engagement with transparent analytics.',
        },
        {
          num: '08',
          title: 'Scalable Campaigns',
          desc: 'Easily expand campaigns to target diverse audiences across multiple games.',
        },
      ].map((item, idx) => (
        <Grid item xs={12} sm={6} md={3} key={idx}>
          <Box>
            <Typography
              variant="h5"
              fontWeight={700}
              sx={{ color: 'rgba(255,255,255,0.2)', mb: 1 }}
            >
              {item.num}
            </Typography>
            <Typography variant="h6" fontWeight={600} mb={1}>
              {item.title}
            </Typography>
            <Typography variant="body2" color="rgba(255,255,255,0.7)">
              {item.desc}
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  </Container>
</Box>


{/* New Section: Gaming Industry Stats */}
<Box py={14} sx={{ background: 'linear-gradient(135deg, #f9f9ff, #f0f4ff)' }}>
  <Container maxWidth="lg">
    {/* Section Heading */}
    <Typography
      variant="h3"
      fontWeight={900}
      align="center"
      gutterBottom
      sx={{
        mb: 8,
        background: 'linear-gradient(90deg, #7b61ff, #9c9eff)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}
    >
      Run your banner ads on the fastest-growing digital channel
    </Typography>

    <Grid container spacing={6} justifyContent="center">
      {[
        { number: '2.9', text: 'Billion gamers worldwide' },
        { number: '29.38', text: 'Billion $ per year projected in-game ad spend in 2034' },
        { number: '7.5', text: 'Hours per week play time per gamer' },
        { number: '93%', text: 'Of media buyers intend to run in-game ads' },
        { number: '1.6', text: 'Billion daily players' },
        { number: '3.3', text: 'Billion active players worldwide' },
        { number: '95%', text: 'Viewability' },
        { number: '90%', text: 'VCR for 6 sec. video' },
      ].map((item, i) => (
        <Grid item xs={12} sm={6} md={3} key={i}>
          <Paper
            elevation={0}
            sx={{
              p: 4,
              textAlign: 'center',
              backgroundColor: 'transparent',
            }}
          >
            {/* Numbers */}
            <Typography
              variant="h4" 
              fontWeight={800}
              sx={{
                background: 'linear-gradient(90deg, #7b61ff, #9c9eff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 1,
              }}
            >
              {item.number}
            </Typography>

            {/* Descriptions */}
            <Typography variant="body1" color="text.secondary">
              {item.text}
            </Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  </Container>
</Box>


<Box
  sx={{
    position: 'relative',
    py: 12,
    backgroundImage: `url('/images/in-game-devices.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: '#fff',
    textAlign: 'center',
  }}
>
  {/* Overlay */}
  <Box
    sx={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '200%',
      height: '100%',
      bgcolor: 'rgba(0,0,0,0.55)',
      zIndex: 1,
    }}
  />

  <Container sx={{ position: 'relative', zIndex: 2 }}>
    {/* Title */}
    <Typography
      variant="h3"
      sx={{
        fontWeight: 700,
        mb: 6,
        background: 'linear-gradient(90deg, #7b61ff, #5ad7ff)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}
    >
      Multiple Devices
    </Typography>

    {/* Stats */}
    <Grid container spacing={4} justifyContent="center">
  {[
    { title: 'Mobile', desc: '47B+ ad opportunities globally' },
    { title: 'PC', desc: '1.4B+ ad opportunities globally' },
    { title: 'Console', desc: '500k+ ad opportunities globally' },
  ].map((item, index) => (
    <Grid item xs={12} sm={6} md={4} lg={3.5} key={index}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 200 }}
      >
        <Paper
          elevation={6}
          sx={{
            p: 5,
            borderRadius: '24px',
            textAlign: 'center',
            bgcolor: 'rgba(255,255,255,0.12)',
            backdropFilter: 'blur(12px)',
            color: '#fff',
            width: '100%', // full width inside grid
            maxWidth: 400, // wider cards
            margin: '0 auto',
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              mb: 1.5,
              color: '#b388ff',
              fontSize: '1.6rem',
            }}
          >
            {item.title}
          </Typography>
          <Typography variant="body1" sx={{ opacity: 0.95, fontSize: '1.1rem' }}>
            {item.desc}
          </Typography>
        </Paper>
      </motion.div>
    </Grid>
  ))}
</Grid>
  </Container>
</Box>

{/* New Section: Global Reach & Scale */}
<Box py={12} sx={{ backgroundColor: '#ecedee9b' }}>
  <Container maxWidth="lg">
    <Typography
      variant="h3"
      fontWeight={800}
      align="center"
      gutterBottom
      sx={{ mb: 6 }}
    >
      Global Reach & Scale in Gaming
    </Typography>

    <Grid container spacing={4}>
      {[
        {
          title: '1000+ Games',
          desc: 'Integrated brand placements across mobile, PC, and console titles worldwide.',
        },
        {
          title: '500M+ Monthly Players',
          desc: 'Engage active gamers across diverse demographics and regions.',
        },
        {
          title: 'High Retention & Trust',
          desc: 'Brands return for consistent, safe, and impactful in-game experiences.',
        },
        {
          title: 'Global Publisher Network',
          desc: 'Access to premium studios, esports platforms, and gaming communities.',
        },
      ].map((item, i) => (
        <Grid item xs={12} sm={6} md={3} key={i}>
          <Paper
            elevation={3}
            sx={{
              p: 4,
              borderRadius: 3,
              textAlign: 'center',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              backgroundColor: '#fff',
            }}
          >
            <Typography variant="h5" fontWeight={700} mb={1}>
              {item.title}
            </Typography>
            <Typography variant="body2" color="grey.700">
              {item.desc}
            </Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  </Container>
</Box>


{/* New Section: Ad Formats / Types of In-Game Ads */}
<Box
  py={14}
  sx={{
    position: 'relative',
    backgroundImage: `url('/images/multiple-formats.jpg')`, 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: '#fff',
    overflow: 'hidden',
  }}
>
  {/* Overlay */}
  <Box
    sx={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      bgcolor: 'rgba(0, 0, 0, 0.6)',
      zIndex: 1,
    }}
  />

  <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
    {/* Section Heading */}
    <Typography
      variant="h3"
      fontWeight={900}
      align="center"
      gutterBottom
      sx={{
        mb: 8,
        background: 'linear-gradient(90deg, #7b61ff, #5ad7ff)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}
    >
      Ad Formats Built for Immersion
    </Typography>

    <Grid container spacing={6} justifyContent="center">
      {[
        {
          title: 'Static Billboard Ads',
          desc: 'Virtual billboards and signage placed naturally in gameplay environments — ideal for high brand visibility without disrupting player immersion.',
        },
        {
          title: 'Dynamic / Programmatic Ads',
          desc: 'Real-time, data-driven ads that update dynamically across games. Enables geographic and audience targeting with scalable delivery.',
        },
        {
          title: 'Video Ads',
          desc: 'Short-form video content integrated into loading screens, reward moments, or menu pauses. Skippable or rewarded formats available.',
        },
        {
          title: '3D Branded Objects or Skins',
          desc: 'Custom branded items like vehicles, outfits, or tools that players interact with. High engagement and deep brand recall.',
        },
        {
          title: 'Sponsored Experiences',
          desc: 'Fully branded levels, game modes, or events crafted in collaboration with advertisers. Perfect for premium campaigns and event launches.',
        },
      ].map((item, i) => (
        <Grid item xs={12} sm={6} md={4} key={i}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 180 }}
          >
            <Paper
              elevation={6}
              sx={{
                p: 5,
                borderRadius: '20px',
                textAlign: 'center',
                bgcolor: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(12px)',
                color: '#fff',
                height: '100%',
                border: '1px solid rgba(255, 255, 255, 0.15)',
              }}
            >
              <Typography
                variant="h6"
                fontWeight={700}
                sx={{
                  mb: 1.5,
                  background: 'linear-gradient(90deg, #7b61ff, #9c9eff)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {item.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontSize: '1rem', opacity: 0.95 }}
              >
                {item.desc}
              </Typography>
            </Paper>
          </motion.div>
        </Grid>
      ))}
    </Grid>
  </Container>
</Box>

{/* Global Offices / Locations Section */}
      <Box py={12} sx={{ backgroundColor: '#f5f5f5', color: '#333' }}>
        <Container maxWidth="lg">
          {/* AdBliss label */}
          <Typography
            variant="subtitle1"
            fontWeight={700}
            align="center"
            gutterBottom
            sx={{ color: '#172c36', mb: 1, fontSize: 50 }}
          >
            AdBliss
          </Typography>

          {/* Main heading */}
          <Typography
            variant="h3"
            fontWeight={800}
            align="center"
            gutterBottom
            sx={{ mb: 6 }}
          >
            Global impact, local touch.
          </Typography>

          <Grid container spacing={4}>
            {[
              {
                city: 'Vilnius',
                address: 'Lvivo g. 25 09320 Vilnius\nLithuania',
              },
              {
                city: 'Jakarta',
                address:
                  'Revenue Tower, 19f. District 8, Jl. Jendral Su Senayan, Kebayoran Baru Kota Adm.\nIndonesia',
              },
              {
                city: 'Athens',
                address: 'Leof. Amarousiou 5, 141 23, Likovrisi, Greece',
              },
              {
                city: 'Tokyo',
                address:
                  'Chiyoda City, Kanda Nishikicho, 2 Chome-2-1, Kanda Square, 11F Japan',
              },
              {
                city: 'Dhaka',
                address:
                  'Suvastu Muskan Tower (Level 17), 56 Gulshan Ave, Dhaka',
              },
              {
                city: 'Lagos',
                address:
                  '3b Engineer George Enenmoh Crescent Lekki Phase 1 Lagos Nigeria',
              },
              {
                city: 'Nairobi',
                address: '9th Floor, WOJO at Mercure, Longonot Road, Nairobi',
              },
              {
                city: 'Istanbul',
                address:
                  'Vişnezade Mah Süleyman Seba Caddesi No 79 İç Kapı No: 1 Beşiktaş Turkey',
              },
            ].map((office, i) => (
              <Grid item xs={12} sm={6} md={3} key={i}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  <Typography
                    variant="h6"
                    fontWeight={700}
                    sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
                  >
                    <Box
                      component="span"
                      sx={{ color: '#8a2be2', display: 'inline-block' }}
                    >
                      📍
                    </Box>
                    {office.city}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ whiteSpace: 'pre-line', color: '#555' }}
                  >
                    {office.address}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Footer />
    </Box>
  )
}

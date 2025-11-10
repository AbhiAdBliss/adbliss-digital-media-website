'use client'

import { Box, Container, Typography, Grid, Paper, Button } from '@mui/material'
import { motion } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BrandLogo from '../components/BrandLogo'
import Link from 'next/link'


export default function VideoAdvertisingPage() {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
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
          src="/images/videoad-image.jpg"
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
              Video <br /> Advertising
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
              Grab attention and make customers return for more by delivering
              effective video ads through various channels.
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

      {/* Why Brands Choose Video Advertising */}
      <Box py={10} bgcolor="#f9f9ff">
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            fontWeight={700}
            textAlign="center"
            gutterBottom
          >
            Why Brands Choose Video Advertising
          </Typography>
          <Typography
            textAlign="center"
            color="text.secondary"
            mb={6}
            maxWidth="700px"
            mx="auto"
          >
            Trusted by leading brands for measurable results, interactive
            experiences, and scalable campaigns.
          </Typography>
          <Grid container spacing={4}>
            {[
              { title: 'Measurable', desc: 'Track performance with real-time analytics.' },
              { title: 'Scalable', desc: 'Reach millions with flexible budgets.' },
              { title: 'Interactive', desc: 'Engage users beyond passive viewing.' },
              { title: 'Cost-Efficient', desc: 'Pay for what matters most — impressions.' },
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
{/* Video Stats Section */}
<Box sx={{ py: 12, background: '#fff' }}>
  <Container maxWidth="lg">
    <Typography
      variant="h4"
      fontWeight={700}
      textAlign="center"
      gutterBottom
      sx={{
        mb: 8,
        fontSize: { xs: '2rem', md: '3rem' },
      }}
    >
      Video advertising{' '}
      <Box component="span" sx={{ background: 'linear-gradient(90deg, #6a11cb, #2575fc)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
        is booming
      </Box>
    </Typography>

    <Grid container spacing={4}>
      {[
        { value: '92%', desc: 'Of marketers say video delivers strong ROI.' },
        { value: '89%', desc: 'Of consumers say video convinced them to buy.' },
        { value: '51%', desc: 'Of people are more likely to share videos than any other content.' },
        { value: '93%', desc: 'Of Digital Marketing buyers say video is essential in building trust in a brand.' },
      ].map((stat, i) => (
        <Grid item xs={12} sm={6} md={3} key={i}>
          <Box textAlign="center">
            <Typography
              variant="h3"
              fontWeight={800}
              sx={{
                background: 'linear-gradient(90deg, #6a11cb, #2575fc)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 1,
              }}
            >
              {stat.value}
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ maxWidth: 250, mx: 'auto' }}
            >
              {stat.desc}
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  </Container>
</Box>

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
      Benefits of Video Advertising
    </Typography>

    <Grid container spacing={6}>
      {[
        {
          num: '01',
          title: 'High Engagement',
          desc: 'Video captures attention quickly and keeps viewers immersed with strong storytelling.',
        },
        {
          num: '02',
          title: 'Emotional Connection',
          desc: 'Build trust and brand recall by combining visuals, sound, and narrative.',
        },
        {
          num: '03',
          title: 'Cross-Platform Reach',
          desc: 'Distribute video ads across mobile, desktop, CTV, and social channels seamlessly.',
        },
        {
          num: '04',
          title: 'Better Recall',
          desc: 'Video ads improve brand awareness and retention compared to static ads.',
        },
        {
          num: '05',
          title: 'Measurable Performance',
          desc: 'Track impressions, views, CTRs, and conversions with transparent reporting.',
        },
        {
          num: '06',
          title: 'Cost Efficiency',
          desc: 'Optimize spend with targeted delivery and pay for real engagement, not wasted reach.',
        },
        {
          num: '07',
          title: 'Storytelling Power',
          desc: 'Tell your brand story in a way that text and static images cannot match.',
        },
        {
          num: '08',
          title: 'Boost Conversions',
          desc: 'Drive customer action by guiding them from awareness to purchase with engaging video.',
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

{/* VAST Section */}
<Box sx={{ py: 12, background: '#fff' }}>
  <Container maxWidth="lg">
    <Grid container spacing={6} alignItems="center">
      {/* Left Content */}
      <Grid item xs={12} md={6}>
        <Typography
          variant="h3"
          fontWeight={800}
          gutterBottom
          sx={{
            background: 'linear-gradient(90deg, #6a11cb, #2575fc)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          VAST
        </Typography>

        <Typography variant="body1" color="text.secondary" mb={3}>
          Engage audiences with compelling video ads across premium publishers.
        </Typography>

        <Box component="ul" sx={{ pl: 2, mb: 0 }}>
          {[
            'In-stream and out-stream formats',
            'VPAID and OMID tracking for transparency',
            'Skippable, non-skippable, rewarded, and non-rewarded options',
            'Direct publisher and global exchange access',
            'In-read, sticky, and floating placements for premium visibility',
          ].map((point, i) => (
            <Typography
              component="li"
              key={i}
              variant="body1"
              sx={{
                mb: 1,
                color: 'text.primary',
                '&::marker': {
                  color: '#6a11cb',
                  fontWeight: 'bold',
                },
              }}
            >
              {point}
            </Typography>
          ))}
        </Box>
      </Grid>

      {/* Right Visual - Browser Mockup with Video Ad */}
      <Grid item xs={12} md={6}>
        <Box
          sx={{
            borderRadius: 3,
            overflow: 'hidden',
            boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
            border: '1px solid #eee',
            background: '#fafafa',
            p: 2,
          }}
        >
          {/* Browser top bar */}
          <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
            <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#ff5f56' }} />
            <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#ffbd2e' }} />
            <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#27c93f' }} />
          </Box>

          {/* Video Ad Preview */}
          <Box
            sx={{
              borderRadius: 2,
              overflow: 'hidden',
              position: 'relative',
              bgcolor: '#000',
            }}
          >
            <Box
              component="img"
              src="/images/vodeo-Ad-Image.jpg" // 🔹 replace with your AdBliss video ad image
              alt="AdBliss VAST Ad"
              sx={{ width: '100%', display: 'block' }}
            />

            {/* Ad timer text */}
            <Typography
              variant="caption"
              sx={{
                position: 'absolute',
                top: 8,
                left: 12,
                color: '#fff',
                fontSize: 12,
                opacity: 0.9,
              }}
            >
              Ad 0:12
            </Typography>

            {/* Skip Ad Button */}
            <Box
              sx={{
                position: 'absolute',
                bottom: 28, // 🔹 moves above progress bar
                right: 16,
                bgcolor: 'rgba(0,0,0,0.6)',
                color: '#fff',
                px: 1.5,
                py: 0.5,
                borderRadius: 1,
                fontSize: 12,
              }}
            >
              Skip Ad &gt;
            </Box>

            {/* Progress Bar */}
            <Box
              sx={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                height: 4,
                bgcolor: 'rgba(255,255,255,0.3)',
              }}
            >
              <Box
                sx={{
                  width: '35%', // 🔹 simulate progress
                  height: '100%',
                  bgcolor: '#6a11cb',
                }}
              />
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  </Container>
</Box>



{/* In-Banner Video Section */}
<Box sx={{ py: 12, background: '#fff' }}>
  <Container maxWidth="lg">
    <Grid container spacing={6} alignItems="center">
      {/* Left Visual (Browser Mockup with Image Banner) */}
      <Grid item xs={12} md={6}>
        <Box
          sx={{
            borderRadius: 3,
            overflow: 'hidden',
            boxShadow: '0 8px 30px rgba(0,0,0,0.06)',
            border: '1px solid #eee',
            background: '#fafafa',
            p: 2,
          }}
        >
          {/* Browser Top Bar */}
          <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
            <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#ff5f56' }} />
            <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#ffbd2e' }} />
            <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#27c93f' }} />
          </Box>

          {/* Banner slot with image */}
          <Box
            component="img"
            src="/images/in-banner.jpg" // <-- replace with your image path
            alt="AdBliss In-Banner Video"
            sx={{
              height: 140,
              width: '100%',
              borderRadius: 2,
              objectFit: 'cover',
              mb: 2,
            }}
          />

          {/* Page content placeholders */}
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Box sx={{ height: 120, borderRadius: 1, bgcolor: '#eaeaea' }} />
            </Grid>
            <Grid item xs={6}>
              <Box sx={{ height: 120, borderRadius: 1, bgcolor: '#eaeaea' }} />
            </Grid>
          </Grid>
        </Box>
      </Grid>

      {/* Right Content */}
      <Grid item xs={12} md={6}>
        <Typography
          variant="h3"
          fontWeight={800}
          gutterBottom
          sx={{
            background: 'linear-gradient(90deg, #6a11cb, #2575fc)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          In-Banner Video
        </Typography>

        <Typography variant="body1" color="text.secondary" mb={3}>
          Deliver powerful video ads directly inside standard banner placements—combining scale, visibility, and engagement.
        </Typography>

        <Box component="ul" sx={{ pl: 2, mb: 0 }}>
          {[
            'Scale across global exchanges and premium publishers',
            'Track video engagement and viewability with precision',
            'Leverage standard display slots for maximum reach',
            'No need for special video-only placements',
          ].map((point, i) => (
            <Typography
              component="li"
              key={i}
              variant="body1"
              sx={{
                mb: 1,
                color: 'text.primary',
                '&::marker': {
                  color: '#6a11cb',
                  fontWeight: 'bold',
                },
              }}
            >
              {point}
            </Typography>
          ))}
        </Box>
      </Grid>
    </Grid>
  </Container>
</Box>



{/* Rich Media Video Ads Section */}
<Box sx={{ py: 12, backgroundColor: '#fff' }}>
  <Container maxWidth="lg">
    <Grid container spacing={8} alignItems="center">
      
      {/* Left Content */}
      <Grid item xs={12} md={6}>
        <Typography
          variant="h3"
          fontWeight={700}
          gutterBottom
          sx={{
            background: 'linear-gradient(90deg, #6a11cb, #2575fc)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Rich media
        </Typography>

        <Typography variant="h3" fontWeight={800} gutterBottom>
          video ads
        </Typography>

        <Typography variant="body1" color="text.secondary" mb={3}>
          Use interactive, high-impact video banners to grab attention and drive engagement.
        </Typography>

        <Box component="ul" sx={{ pl: 2, mb: 0 }}>
          {[
            'Ensure interaction with dynamic ad formats',
            'Measure viewability, engagement rates, and video performance',
            'Custom solutions tailored to your brand',
          ].map((point, i) => (
            <Typography
              component="li"
              key={i}
              variant="body1"
              sx={{
                mb: 1,
                color: 'text.primary',
                '&::marker': {
                  color: '#6a11cb',
                },
              }}
            >
              {point}
            </Typography>
          ))}
        </Box>
      </Grid>

      {/* Right Browser Mockup */}
      <Grid item xs={12} md={6}>
        <Box
          sx={{
            borderRadius: 3,
            overflow: 'hidden',
            boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
            border: '1px solid #eee',
            p: 2,
            background: '#fafafa',
          }}
        >
          {/* Browser top bar */}
          <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
            <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#ff5f56' }} />
            <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#ffbd2e' }} />
            <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#27c93f' }} />
          </Box>

          {/* Page layout mockup */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: '2fr 1fr',
              gap: 2,
            }}
          >
            {/* Left content placeholder */}
            <Box sx={{ height: 200, borderRadius: 2, bgcolor: '#f2f2f2' }} />

            {/* Video Ad Slot with Branded Can */}
            <Box
              sx={{
                height: 200,
                borderRadius: 2,
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'linear-gradient(135deg, #ffeb3b, #fbc02d)',
              }}
            >
              {/* Can Image */}
              <Box
                component="img"
                src="/images/Adbliss-can-image.png"
                alt="AdBliss Can"
                sx={{
                  height: '80%',
                  objectFit: 'contain',
                }}
              />
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  </Container>
</Box>

{/* Floating Video Ads Section */}
<Box sx={{ py: 12, backgroundColor: '#fff' }}>
  <Container maxWidth="lg">
    <Grid container spacing={8} alignItems="center">
      
      {/* Left Browser Mockup */}
      <Grid item xs={12} md={6}>
        <Box
          sx={{
            borderRadius: 3,
            overflow: 'hidden',
            boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
            border: '1px solid #eee',
            p: 2,
            background: '#fafafa',
          }}
        >
          {/* Browser top bar */}
          <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
            <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#ff5f56' }} />
            <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#ffbd2e' }} />
            <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#27c93f' }} />
          </Box>

          {/* Page layout placeholder */}
          <Box
            sx={{
              position: 'relative',
              height: 220,
              bgcolor: '#f2f2f2',
              borderRadius: 2,
            }}
          >
            {/* Floating Video Ad */}
            <Box
              sx={{
                position: 'absolute',
                bottom: 16,
                right: 16,
                width: 160,
                height: 100,
                borderRadius: 2,
                overflow: 'hidden',
                boxShadow: '0 6px 20px rgba(0,0,0,0.15)',
                background: 'linear-gradient(135deg, #ff1744, #f50057)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {/* AdBliss Can Creative */}
              <Box
                component="img"
                src="/images/floting-ad.png" // <- Replace with your branded can image
                alt="AdBliss Floating Ad"
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />

              {/* Close button mimic */}
              <Box
                sx={{
                  position: 'absolute',
                  top: 6,
                  right: 6,
                  width: 18,
                  height: 18,
                  borderRadius: '50%',
                  bgcolor: 'rgba(255,255,255,0.9)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 12,
                  fontWeight: 'bold',
                  color: '#333',
                  cursor: 'pointer',
                }}
              >
                ×
              </Box>
            </Box>
          </Box>
        </Box>
      </Grid>

      {/* Right Content */}
      <Grid item xs={12} md={6}>
        <Typography
          variant="h3"
          fontWeight={700}
          gutterBottom
          sx={{
            background: 'linear-gradient(90deg, #6a11cb, #2575fc)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Floating
        </Typography>

        <Typography variant="h3" fontWeight={800} gutterBottom>
          video ads
        </Typography>

        <Typography variant="body1" color="text.secondary" mb={3}>
          Enhance visibility with floating video ads that stay in view as users scroll.
        </Typography>

        <Box component="ul" sx={{ pl: 2, mb: 0 }}>
          {[
            'Tailored floating ads that reflect your brand’s identity',
            'Monitor viewability and video metrics in real-time',
            'Available exclusively through top-tier publishers',
          ].map((point, i) => (
            <Typography
              component="li"
              key={i}
              variant="body1"
              sx={{
                mb: 1,
                color: 'text.primary',
                '&::marker': {
                  color: '#6a11cb',
                },
              }}
            >
              {point}
            </Typography>
          ))}
        </Box>
      </Grid>
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

'use client'

import { Box, Container, Typography, Grid, Paper, Button } from '@mui/material'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'
import Link from 'next/link'
import ShowChartIcon from '@mui/icons-material/ShowChart'
import PeopleIcon from '@mui/icons-material/People'
import VisibilityIcon from '@mui/icons-material/Visibility'
import InsightsIcon from '@mui/icons-material/Insights'
import BrandLogo from '../components/BrandLogo'

export default function DisplayAdvertising() {
  return (
    <>
      {/* Site Header */}
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
        {/* Background Image */}
        <Box
          component="img"
          src="/images/display-mockup.jpg"
          alt="Display Advertising"
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

        {/* Overlay */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background:
              'linear-gradient(90deg, rgba(106,17,203,0.6), rgba(37,117,252,0.5))',
            zIndex: -1,
          }}
        />

        {/* Animated Hero Content */}
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
                fontSize: { xs: '2.5rem', md: '4rem' },
                lineHeight: 1.2,
              }}
            >
              Display <br /> Advertising
            </Typography>

            <Typography
              variant="h6"
              sx={{ mb: 4, maxWidth: '700px', mx: 'auto', color: '#f0f0f0' }}
            >
              Display ads that boost engagement and brand impact. Get effective
              targeting and measurable & transparent reporting with AdBliss
              display advertising.
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

      {/* Features Section */}
      <Box py={12}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            fontWeight={700}
            textAlign="center"
            gutterBottom
          >
            Why Choose Display Advertising?
          </Typography>
          <Grid container spacing={4} mt={4}>
            {[
              {
                title: 'Premium Targeting',
                desc: 'Reach the right audience with advanced targeting and data-driven insights.',
                icon: <PeopleIcon sx={{ fontSize: 40, color: '#6a11cb' }} />,
              },
              {
                title: 'Measurable Impact',
                desc: 'Track performance with transparent, real-time analytics and reporting.',
                icon: <ShowChartIcon sx={{ fontSize: 40, color: '#2575fc' }} />,
              },
              {
                title: 'Brand Visibility',
                desc: 'Boost awareness and engagement with high-impact display formats.',
                icon: (
                  <VisibilityIcon sx={{ fontSize: 40, color: '#6a11cb' }} />
                ),
              },
              {
                title: 'Actionable Insights',
                desc: 'Optimize campaigns with AI-powered recommendations.',
                icon: <InsightsIcon sx={{ fontSize: 40, color: '#2575fc' }} />,
              },
            ].map((item, i) => (
              <Grid item xs={12} md={3} key={i}>
                <Paper
                  elevation={3}
                  sx={{
                    p: 4,
                    borderRadius: 3,
                    textAlign: 'center',
                  }}
                >
                  {item.icon}
                  <Typography variant="h6" fontWeight={700} mt={2} gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="grey.600">
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
      
      {/* New Section: Visual Insights / Case Study Full Width */}
      <Box py={12} sx={{ position: 'relative', width: '100%' }}>
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            borderRadius: 0,
            overflow: 'hidden',
          }}
        >
          {/* Background Image */}
          <Box
            component="img"
            src="/images/display-case-study.jpg"
            alt="Display Advertising Case Study"
            sx={{
              width: '100%',
              height: { xs: 400, md: 600 },
              objectFit: 'cover',
            }}
          />

          {/* Overlay Content */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'rgba(0,0,0,0.5)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: { xs: 'center', md: 'flex-start' },
              px: { xs: 3, md: 12 },
            }}
          >
            <Typography
              variant="h4"
              fontWeight={800}
              color="#fff"
              gutterBottom
              sx={{ textAlign: { xs: 'center', md: 'left' } }}
            >
              Real Campaign, Real Results
            </Typography>
            <Typography
              variant="body1"
              color="#f0f0f0"
              mb={3}
              sx={{
                textAlign: { xs: 'center', md: 'left' },
                maxWidth: { xs: '100%', md: 500 },
              }}
            >
              Our clients achieved a 37% higher CTR and 25% better conversion
              rate using dynamic display creatives tailored for each audience
              segment.
            </Typography>
            <Link href="/contact" passHref>
            <Button
              variant="contained"
              sx={{
                borderRadius: 3,
                px: 5,
                py: 1.5,
                fontWeight: 700,
                background: 'linear-gradient(90deg, #6a11cb, #2575fc)',
              }}
            >
              Learn More
            </Button>
            </Link>
          </Box>
        </Box>
      </Box>

      {/* New Section: Real Results, Real Impact */}
      <Box py={12} sx={{ backgroundColor: '#f5f5f5' }}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            fontWeight={800}
            textAlign="center"
            gutterBottom
            sx={{ mb: 6 }}
          >
            Real Results, Real Impact
          </Typography>

          <Grid container spacing={4}>
            {[
              {
                title: 'Higher Engagement',
                desc: 'Brands using AdBliss display ads see up to 37% higher click-through rates compared to industry averages.',
                icon: <ShowChartIcon sx={{ fontSize: 50, color: '#6a11cb' }} />,
              },
              {
                title: 'Wider Reach',
                desc: 'Engage audiences across multiple platforms including desktop, mobile, CTV, and in-game environments.',
                icon: (
                  <VisibilityIcon sx={{ fontSize: 50, color: '#2575fc' }} />
                ),
              },
              {
                title: 'Transparent Performance',
                desc: 'Monitor campaign success with real-time reporting and actionable insights, giving full visibility into ROI.',
                icon: <InsightsIcon sx={{ fontSize: 50, color: '#6a11cb' }} />,
              },
              {
                title: 'Optimized Conversions',
                desc: 'Leverage data-driven targeting and dynamic creatives to increase conversion rates and overall campaign efficiency.',
                icon: <PeopleIcon sx={{ fontSize: 50, color: '#2575fc' }} />,
              },
            ].map((item, i) => (
              <Grid
                item
                xs={12}
                md={3}
                key={i}
                sx={{ display: 'flex' }} // Make Grid item a flex container
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  viewport={{ once: true }}
                  style={{ flex: 1 }} // Let motion.div grow to fill height
                >
                  <Paper
                    elevation={3}
                    sx={{
                      p: 4,
                      borderRadius: 3,
                      textAlign: 'center',
                      backgroundColor: '#fff',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-start',
                      transition: 'transform 0.3s, box-shadow 0.3s',
                      '&:hover': {
                        transform: 'translateY(-10px)',
                        boxShadow: '0 12px 25px rgba(0,0,0,0.15)',
                      },
                    }}
                  >
                    {item.icon}
                    <Typography
                      variant="h6"
                      fontWeight={700}
                      mt={2}
                      gutterBottom
                    >
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="grey.700">
                      {item.desc}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      {/* New Section: Core Insights / Comparison */}
      <Box py={12} sx={{ backgroundColor: '#f7fafc' }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            fontWeight={800}
            align="center"
            gutterBottom
            sx={{ mb: 6 }}
          >
            Display Advertising vs Other Channels
          </Typography>

          {/* Intro Text */}
          <Typography
            variant="body1"
            color="grey.700"
            sx={{ mb: 6, maxWidth: 900, mx: 'auto', textAlign: 'center' }}
          >
            Display advertising provides high visual engagement, precise
            targeting, and measurable ROI. Here’s a quick comparison with other
            digital channels to help you make informed decisions.
          </Typography>

          {/* Comparison Table */}
          <Box sx={{ overflowX: 'auto', mb: 8 }}>
            <TableContainer component={Paper} sx={{ borderRadius: 3 }}>
              <Table>
                <TableHead>
                  <TableRow sx={{ backgroundColor: '#6a11cb', color: '#fff' }}>
                    <TableCell sx={{ color: '#fff', fontWeight: 700 }}>
                      Feature
                    </TableCell>
                    <TableCell sx={{ color: '#fff', fontWeight: 700 }}>
                      Display Ads
                    </TableCell>
                    <TableCell sx={{ color: '#fff', fontWeight: 700 }}>
                      Social Media Ads
                    </TableCell>
                    <TableCell sx={{ color: '#fff', fontWeight: 700 }}>
                      Search Ads
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {[
                    {
                      feature: 'Visual Engagement',
                      display:
                        'High-quality banners, videos, interactive creatives',
                      social: 'Moderate, depends on platform',
                      search: 'Low, text-based only',
                    },
                    {
                      feature: 'Targeting',
                      display: 'Audience segments, behavior, location, device',
                      social: 'Audience interest, lookalike, retargeting',
                      search: 'Keyword and intent-based targeting',
                    },
                    {
                      feature: 'Conversion Tracking',
                      display: 'Easy with dynamic pixel and platform analytics',
                      social: 'Medium; depends on tracking setup',
                      search: 'High; directly linked to search queries',
                    },
                    {
                      feature: 'Brand Awareness',
                      display: 'Excellent; highly visual and shareable',
                      social: 'Good; platform dependent',
                      search: 'Low; mainly functional intent-driven ads',
                    },
                  ].map((row, i) => (
                    <TableRow key={i}>
                      <TableCell sx={{ fontWeight: 700 }}>
                        {row.feature}
                      </TableCell>
                      <TableCell>{row.display}</TableCell>
                      <TableCell>{row.social}</TableCell>
                      <TableCell>{row.search}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>

          {/* Key Takeaways in Cards */}
          <Grid container spacing={4}>
            {[
              {
                title: 'Why Display Ads Work',
                desc: 'Visual appeal grabs attention faster than text-only channels. They are ideal for retargeting and brand reinforcement.',
              },
              {
                title: 'Integration with AI',
                desc: 'Predictive insights help target the right audience, optimizing budgets and boosting conversion rates.',
              },
              {
                title: 'Cross-Platform Reach',
                desc: 'Deliver ads across mobile, desktop, CTV, and in-game environments for maximum coverage.',
              },
            ].map((item, i) => (
              <Grid item xs={12} md={4} key={i}>
                <Paper
                  elevation={4}
                  sx={{
                    p: 4,
                    borderRadius: 3,
                    textAlign: 'center',
                    background: i % 2 === 0 ? '#00b894' : '#6a11cb',
                    color: '#fff',
                    transition: 'transform 0.3s',
                    '&:hover': { transform: 'translateY(-10px)' },
                  }}
                >
                  <Typography variant="h5" fontWeight={700} gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body2">{item.desc}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>

          {/* Optional CTA */}
          <Box textAlign="center" mt={6}>
            <Button
              variant="contained"
              size="large"
              sx={{
                borderRadius: 3,
                px: 5,
                py: 1.5,
                fontWeight: 700,
                background: 'linear-gradient(90deg, #6a11cb, #00b894)',
                boxShadow: '0px 6px 20px rgba(0,0,0,0.3)',
              }}
            >
              Learn More About Display
            </Button>
          </Box>
        </Container>
      </Box>

      {/* New Section: Global Reach & Scale */}
      <Box py={12} sx={{ backgroundColor: '#f0f4f8' }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            fontWeight={800}
            align="center"
            gutterBottom
            sx={{ mb: 6 }}
          >
            Global Reach & Scale
          </Typography>

          <Grid container spacing={4}>
            {[
              {
                title: '10,000+ Campaigns',
                desc: 'Running campaigns worldwide across multiple channels and industries.',
              },
              {
                title: '500M+ Impressions',
                desc: 'Monthly impressions delivered to highly targeted audiences.',
              },
              {
                title: '95% Client Retention',
                desc: 'Trusted by clients globally for consistent performance and growth.',
              },
              {
                title: '60+ Ad Exchanges',
                desc: 'Access to a wide range of premium publishers and platforms.',
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

      {/* Display Advertising Made Easy Section */}
      <Box py={12} sx={{ backgroundColor: '#1e1e1e', color: '#fff' }}>
        <Container maxWidth="lg">
          <Typography variant="h3" fontWeight={800} align="center" gutterBottom>
            Display advertising{' '}
            <Box
              component="span"
              sx={{
                background: 'linear-gradient(90deg, #6a11cb, #2575fc)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              made easy
            </Box>
          </Typography>

          <Grid container spacing={6} sx={{ mt: 6 }}>
            {[
              {
                number: '01',
                title: 'Brand safety',
                desc: 'Keep your reputation safe with AdBliss or integrated 3rd party platforms.',
              },
              {
                number: '02',
                title: 'Advanced targeting',
                desc: 'Reach the right people at the right time with 2,500+ targeting options.',
              },
              {
                number: '03',
                title: 'Quality supply',
                desc: 'Get access to premium publishers, top-notch supply, and cut intermediaries.',
              },
              {
                number: '04',
                title: 'Multi-screen ad units',
                desc: 'Engage audiences across Display, Mobile, Native, In-Game, CTV & Video.',
              },
              {
                number: '05',
                title: 'Flexible advertising',
                desc: 'Choose self-service, managed, or DSP of choice – work with AdBliss your way.',
              },
              {
                number: '06',
                title: 'Custom rich media',
                desc: 'Dazzle your audience with interactive and creative ad formats.',
              },
              {
                number: '07',
                title: 'Partnerships',
                desc: 'Grow responsibly with 60+ ad exchanges, brand safety, and reporting tools.',
              },
              {
                number: '08',
                title: 'Real-time reporting',
                desc: 'Transparent insights throughout your entire display advertising campaign.',
              },
            ].map((item, i) => (
              <Grid item xs={12} md={3} key={i}>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Box>
                    <Typography
                      variant="h4"
                      fontWeight={700}
                      sx={{ opacity: 0.2 }}
                    >
                      {item.number}
                    </Typography>
                    <Typography variant="h6" fontWeight={700} gutterBottom>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="grey.400">
                      {item.desc}
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Industry-specific Solutions Section */}
      <Box py={12} sx={{ backgroundColor: '#eef2f7' }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            fontWeight={800}
            align="center"
            gutterBottom
            sx={{ mb: 6 }}
          >
            Industry-specific Solutions
          </Typography>

          <Grid container spacing={4}>
            {[
              {
                title: 'E-commerce',
                desc: 'Boost online sales with personalized display ads tailored to shopping behaviors and cart recovery campaigns.',
                image: '/images/industry-ecommerce.jpg',
              },
              {
                title: 'Travel & Hospitality',
                desc: 'Reach travelers at the right time with location-based and seasonal campaigns to drive bookings.',
                image: '/images/industry-travel.jpg',
              },
              {
                title: 'SaaS & Technology',
                desc: 'Generate leads and nurture potential users with dynamic creatives highlighting your product’s key benefits.',
                image: '/images/industry-saas.jpg',
              },
              {
                title: 'Finance & Insurance',
                desc: 'Target prospects with compliance-friendly messaging and increase conversions through data-driven campaigns.',
                image: '/images/industry-finance.jpg',
              },
            ].map((item, i) => (
              <Grid item xs={12} sm={6} md={3} key={i}>
                <Paper
                  elevation={3}
                  sx={{
                    borderRadius: 3,
                    overflow: 'hidden',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <Box
                    component="img"
                    src={item.image}
                    alt={item.title}
                    sx={{ width: '100%', height: 160, objectFit: 'cover' }}
                  />
                  <Box sx={{ p: 3, flexGrow: 1 }}>
                    <Typography variant="h6" fontWeight={700} gutterBottom>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="grey.700">
                      {item.desc}
                    </Typography>
                  </Box>
                </Paper>
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
                city: 'Bengaluru(Registered Office)',
                address: 'No. 426, 2nd Floor, Novel Tech Park, Kudlu Gate, Hosur Road, Bengaluru 560068 Karnataka',
              },
              {
                city: 'Patna',
                address:
                  'zircon complax 3rd floor Anishabad,  oposite bharat petroleum Anishabad, Patna 800002',
              },
              {
                city: 'Bengaluru',
                address: '2nd Floor, Ojas Building, Shop 1316, D 9th Cross, 9th Main Rd, opp. to Tirumalagiri Venkateshwara Temple, above Harleys Fine Baking, 2nd Phase, J. P. Nagar, Bengaluru, Karnataka 560078',
              },
              {
                city: 'Dubai',
                address:
                  '',
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

      {/* Site Footer */}
      <Footer />
    </>
  )
}

'use client'

import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Card,
  Stack,
  Chip
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import TvIcon from '@mui/icons-material/Tv'
import PeopleIcon from '@mui/icons-material/People'
import ShowChartIcon from '@mui/icons-material/ShowChart'
import Link from 'next/link'
import { Avatar } from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'
import BrandLogo from '../components/BrandLogo'


const statsData = [
  { label: 'Household Reach', value: '1.5M+', icon: <PeopleIcon fontSize="large" /> },
  { label: 'Ad Impressions', value: '6.2M+', icon: <VisibilityIcon fontSize="large" /> },
  { label: 'Engagement Rate', value: '4.1%', icon: <ShowChartIcon fontSize="large" /> },
]

export default function CTVPage() {
  return (
    <Box>
      <Header />

     {/* Hero Section */}
      <Box
        sx={{
          py: 16,
          background: 'linear-gradient(135deg, #6a11cb, #2575fc)',
          color: '#fff',
        }}
      >
        <Container maxWidth="lg">
          <Grid container alignItems="center" spacing={6}>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Typography variant="overline" sx={{ mb: 2, display: 'inline-block', border: '1px solid #fff', px: 2, py: 0.5, borderRadius: 2 }}>
                  CTV ADVERTISING
                </Typography>
                <Typography variant="h3" sx={{ fontWeight: 700, mb: 3 }}>
                  Connected TV Advertising
                </Typography>
                <Typography variant="body1" sx={{ mb: 6, lineHeight: 1.6 }}>
                  Maximise reach and viewability with Connected TV (CTV) advertising campaigns streamed directly to your target audiences.  
                  Unlike traditional TV, CTV is fully digital, interactive, and measurable — giving businesses more control and insights.
                </Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <Link href="/contact" passHref>
                  <Button variant="contained" color="secondary" size="large">Get Started</Button>
                  </Link>
                </Box>
              </motion.div>
            </Grid>

            {/* Animated Icon */}
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                style={{ position: 'relative', width: '100%', height: '100%' }}
              >
                <Box
                  sx={{
                    width: 260,
                    height: 260,
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto',
                    position: 'relative',
                  }}
                >
                  <TvIcon sx={{ fontSize: 100, color: '#fff' }} />
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 3 }}
                    style={{
                      border: '2px solid rgba(255,255,255,0.4)',
                      borderRadius: '50%',
                      width: 300,
                      height: 300,
                      position: 'absolute',
                    }}
                  />
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Stats Section */}
      <Box sx={{ py: 10, background: '#f9fafb' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {statsData.map((stat, idx) => (
              <Grid item xs={12} md={4} key={idx}>
                <Paper
                  sx={{
                    p: 4,
                    textAlign: 'center',
                    borderRadius: 4,
                    background: '#fff',
                    border: '1px solid #e5e7eb',
                  }}
                  elevation={0}
                >
                  <Box mb={2}>{stat.icon}</Box>
                  <Typography variant="h5" sx={{ fontWeight: 700 }}>
                    {stat.value}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    {stat.label}
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
      Benefits of CTV Advertising
    </Typography>

    <Grid container spacing={6}>
      {[
        {
          num: '01',
          title: 'Premium Inventory',
          desc: 'Access ad placements within top streaming platforms and smart TV apps.',
        },
        {
          num: '02',
          title: 'High Viewability',
          desc: 'Ads play on full screens where viewers are highly attentive.',
        },
        {
          num: '03',
          title: 'Targeted Reach',
          desc: 'Leverage household-level and audience-based targeting for precision.',
        },
        {
          num: '04',
          title: 'Brand Safety',
          desc: 'Your ads appear only in trusted, brand-safe streaming environments.',
        },
        {
          num: '05',
          title: 'Cross-Device Impact',
          desc: 'Reinforce your message across TV, mobile, desktop, and tablets.',
        },
        {
          num: '06',
          title: 'Non-Skippable Formats',
          desc: 'Ensure your brand message is always seen with unskippable ad options.',
        },
        {
          num: '07',
          title: 'Measurable Performance',
          desc: 'Track impressions, completion rates, and audience engagement in real-time.',
        },
        {
          num: '08',
          title: 'Scalable Campaigns',
          desc: 'Expand reach across multiple streaming services and OTT devices.',
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


      {/* Educational Table: CTV vs Traditional TV */}
      <Box sx={{ py: 12, background: '#fff' }}>
        <Container maxWidth="lg">
          <Typography variant="h4" mb={4} fontWeight={700} textAlign="center">
            CTV vs Traditional TV
          </Typography>
          <Typography textAlign="center" mb={6}>
            Understand how Connected TV provides more value compared to traditional TV advertising.
          </Typography>
          <Table>
            <TableHead sx={{ background: '#2575fc' }}>
              <TableRow>
                <TableCell sx={{ color: '#fff', fontWeight: 600 }}>Feature</TableCell>
                <TableCell sx={{ color: '#fff', fontWeight: 600 }}>CTV</TableCell>
                <TableCell sx={{ color: '#fff', fontWeight: 600 }}>Traditional TV</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Targeting</TableCell>
                <TableCell>Audience-based (demographics, interests)</TableCell>
                <TableCell>Broad, non-specific</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Measurement</TableCell>
                <TableCell>Real-time analytics & attribution</TableCell>
                <TableCell>Estimated reach only</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Cost Efficiency</TableCell>
                <TableCell>Pay for impressions, scalable budgets</TableCell>
                <TableCell>High fixed costs</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Engagement</TableCell>
                <TableCell>Interactive & trackable</TableCell>
                <TableCell>Passive only</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Container>
      </Box>

      {/* Publisher Network */}
<Box sx={{ py: 12 }}>
  <Container maxWidth="lg">
    <Box sx={{ textAlign: 'center', mb: 8 }}>
      <Typography variant="h3" sx={{ mb: 3, fontWeight: 800 }}>
        Premium CTV Publisher Network
      </Typography>
      <Typography variant="h6" color="text.secondary">
        Access top-tier streaming platforms and OTT apps where your audience
        is most engaged
      </Typography>
    </Box>
    <Grid container spacing={4}>
      {[
        {
          category: 'Streaming Platforms',
          description:
            'Trusted CTV environments delivering premium on-demand and live content.',
          reach: '80M+ Monthly Viewers',
          examples: ['Hulu', 'Peacock', 'Paramount+', 'Pluto TV'],
        },
        {
          category: 'OTT Apps',
          description:
            'Popular apps available on smart TVs, streaming sticks, and gaming consoles.',
          reach: '60M+ Active Users',
          examples: ['Roku Channel', 'Amazon Freevee', 'Tubi', 'Sling TV'],
        },
        {
          category: 'Smart TV Ecosystems',
          description:
            'Built-in streaming hubs from leading smart TV manufacturers.',
          reach: '120M+ Connected TVs',
          examples: ['Samsung TV Plus', 'LG Channels', 'Vizio WatchFree+'],
        },
        {
          category: 'Premium Broadcasters',
          description:
            'Network-owned apps bringing broadcast and cable content into CTV.',
          reach: '100M+ Households',
          examples: ['NBCUniversal', 'CBS', 'ABC', 'Fox'],
        },
      ].map((network, index) => (
        <Grid item xs={12} md={6} key={index}>
          <Card sx={{ height: '100%', p: 4 }}>
            <Typography
              variant="h5"
              sx={{ mb: 2, fontWeight: 700, color: '#2563eb' }}
            >
              {network.category}
            </Typography>
            <Typography
              color="text.secondary"
              sx={{ mb: 2, lineHeight: 1.6 }}
            >
              {network.description}
            </Typography>
            <Typography
              variant="h6"
              sx={{ mb: 2, fontWeight: 600, color: '#7c3aed' }}
            >
              {network.reach}
            </Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap">
              {network.examples.map((example, idx) => (
                <Chip
                  key={idx}
                  label={example}
                  size="small"
                  sx={{ bgcolor: 'grey.100', fontWeight: 500 }}
                />
              ))}
            </Stack>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
</Box>


      {/* Campaign Workflow Section */}
      <Box sx={{ py: 12, background: '#f9fafb' }}>
        <Container maxWidth="lg">
          <Typography variant="h4" mb={6} fontWeight={700} textAlign="center">
            How CTV Campaigns Work
          </Typography>
          <Grid container spacing={4}>
            {[
              { step: '1. Define Audience', desc: 'Choose household segments based on data, demographics, or behavior.' },
              { step: '2. Launch Campaign', desc: 'Distribute ads across premium apps and smart TVs at scale.' },
              { step: '3. Track & Optimize', desc: 'Analyze engagement and adjust campaigns in real time.' },
            ].map((item, idx) => (
              <Grid item xs={12} md={4} key={idx}>
                <Paper sx={{ p: 4, borderRadius: 4, background: '#fff', border: '1px solid #e5e7eb' }}>
                  <Typography variant="h6" fontWeight={600} mb={1}>
                    {item.step}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">{item.desc}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Case Study */}
<Box sx={{ py: 12 }}>
  <Container maxWidth="lg">
    <Grid container spacing={6} alignItems="center">
      {/* Left Side: Testimonial */}
      <Grid item xs={12} md={6}>
        <Box
          sx={{
            bgcolor: 'white',
            borderRadius: 3,
            p: 4,
            boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
            border: '1px solid #e5e7eb',
          }}
        >
          <Typography variant="h4" sx={{ mb: 3, fontWeight: 700 }}>
            &ldquo;CTV advertising helped us achieve a 70% completion rate while
            lowering cost per view by 35%.&rdquo;
          </Typography>
          <Typography
            color="text.secondary"
            sx={{ mb: 3, lineHeight: 1.6 }}
          >
            Streaming service StreamWave used Connected TV campaigns to reach
            cord-cutters in premium environments, driving higher engagement and
            delivering cost-efficient brand awareness.
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Avatar sx={{ bgcolor: '#2563eb', width: 50, height: 50 }}>
              SW
            </Avatar>
            <Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                Sarah Williams
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Head of Marketing, StreamWave
              </Typography>
            </Box>
          </Box>
        </Box>
      </Grid>

      {/* Right Side: Metrics */}
      <Grid item xs={12} md={6}>
        <Typography variant="h3" sx={{ mb: 3, fontWeight: 800 }}>
          Proven Results for CTV Campaigns
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
          See how leading brands are leveraging CTV to capture audience attention
          and drive measurable outcomes.
        </Typography>
        <Grid container spacing={3}>
          {[
            { metric: '70%', label: 'Ad Completion Rate' },
            { metric: '35%', label: 'Lower Cost Per View' },
            { metric: '2.8x', label: 'Stronger Brand Recall' },
            { metric: '90%', label: 'Campaign Success Rate' },
          ].map((result, index) => (
            <Grid item xs={6} key={index}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography
                  variant="h4"
                  sx={{ fontWeight: 800, color: '#2563eb', mb: 1 }}
                >
                  {result.metric}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {result.label}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  </Container>
</Box>

{/* Best Practices */}
<Box sx={{ py: 12, bgcolor: '#f8fafc' }}>
  <Container maxWidth="lg">
    <Box sx={{ textAlign: 'center', mb: 8 }}>
      <Typography variant="h3" sx={{ mb: 3, fontWeight: 800 }}>
        CTV Advertising Best Practices
      </Typography>
      <Typography variant="h6" color="text.secondary">
        Follow these guidelines to maximize your Connected TV campaign performance
      </Typography>
    </Box>
    <Grid container spacing={4}>
      {[
        {
          title: 'Leverage Audience Targeting',
          description:
            'Use first-party and household-level data to reach the right viewers at the right time.',
          tip: 'Precision targeting improves ad relevance and ROI by 2x',
        },
        {
          title: 'Prioritize Premium Inventory',
          description:
            'Place ads in trusted, brand-safe streaming platforms and apps to build credibility.',
          tip: 'Premium CTV inventory drives 75% higher brand recall',
        },
        {
          title: 'Optimize for Non-Skippable Formats',
          description:
            'Take advantage of unskippable ad formats to ensure your brand message is seen.',
          tip: 'Non-skippable ads see 90%+ completion rates',
        },
        {
          title: 'Align Creative with the Big Screen',
          description:
            'Design ads specifically for the TV screen, ensuring clear visuals and bold messaging.',
          tip: 'CTV-optimized creatives can boost engagement by 3x',
        },
        {
          title: 'Measure Beyond Impressions',
          description:
            'Track completion rates, incremental reach, and brand lift to evaluate true impact.',
          tip: 'Advanced metrics reveal up to 40% more actionable insights',
        },
        {
          title: 'Integrate Cross-Device Strategies',
          description:
            'Reinforce your message by retargeting viewers across mobile, desktop, and tablets.',
          tip: 'Cross-device campaigns drive 2.5x stronger conversions',
        },
      ].map((practice, index) => (
        <Grid item xs={12} md={4} key={index}>
          <Card sx={{ height: '100%', p: 3 }}>
            <Typography
              variant="h6"
              sx={{ mb: 2, fontWeight: 700, color: '#2563eb' }}
            >
              {practice.title}
            </Typography>
            <Typography
              color="text.secondary"
              sx={{ mb: 2, lineHeight: 1.6 }}
            >
              {practice.description}
            </Typography>
            <Box
              sx={{
                bgcolor: 'rgba(37, 99, 235, 0.1)',
                borderRadius: 1,
                p: 2,
                borderLeft: '3px solid #2563eb',
              }}
            >
              <Typography
                variant="body2"
                sx={{ fontWeight: 600, color: '#2563eb' }}
              >
                💡 {practice.tip}
              </Typography>
            </Box>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
</Box>

      {/* FAQ Section */}
      <Box sx={{ py: 12, background: '#f9fafb' }}>
        <Container maxWidth="lg">
          <Typography variant="h4" mb={6} fontWeight={700} textAlign="center">
            Frequently Asked Questions
          </Typography>
          {[
            { q: 'How is CTV different from OTT?', a: 'OTT is the broader category of streaming content, while CTV refers to ads delivered specifically on smart TVs and connected devices.' },
            { q: 'Can small businesses afford CTV?', a: 'Yes. With flexible pricing models, even modest budgets can target specific local audiences effectively.' },
            { q: 'How quickly can I see results?', a: 'Results are trackable in real time, allowing optimization within days of launching a campaign.' },
          ].map((faq, idx) => (
            <Accordion key={idx} sx={{ mb: 2 }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography fontWeight={600}>{faq.q}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2" color="text.secondary">{faq.a}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Container>
      </Box>

     {/* CTA Section */}
<Box py={12} sx={{ textAlign: 'center', background: '#e5eaf0' }}>
  <Typography variant="h4" mb={3} fontWeight={700}>
    Ready to Start Your CTV Journey?
  </Typography>
  <Typography variant="body1" mb={4}>
    Whether you’re a local brand or a global enterprise, CTV helps you maximize impact with data-driven advertising.
  </Typography>

  <Link href="/contact" passHref>
    <Button variant="contained" color="primary" size="large">
      Contact Us Today
    </Button>
  </Link>
</Box>

      <Footer />
    </Box>
  )
}

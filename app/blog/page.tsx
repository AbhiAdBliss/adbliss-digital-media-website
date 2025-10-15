'use client'

import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Stack,
  Button,
  Container,
  Chip,
} from '@mui/material'
import Image from 'next/image'
import Header from '../components/Header'
import ArticleIcon from '@mui/icons-material/Article'
import BrandLogo from '../components/BrandLogo'
import Footer from '../components/Footer'
import Link from 'next/link'
import { siteConfig } from '../../config'

const articles = [
  {
    img: '/images/blog-img1.png',
    alt: 'Don’t Fall For These Myths',
    title: 'Think PR Is Just Press Release? Let’s Bust Some Myths',
    date: 'May 20, 2025',
    subtitle: 'DON’T FALL FOR THESE MYTHS',
  },
  {
    img: '/images/blog-img2.jpg',
    alt: '5 Roadblocks to Effective Digital PR',
    title: 'The 5 roadblocks and quick fixes to effective digital PR',
    date: 'May 6, 2025',
    subtitle: '5 Roadblocks and Quick Fixes to Effective Digital PR',
  },
  {
    img: '/images/blog-img3.jpg',
    alt: 'Building Real Value PR for Bootstrapped Startups',
    title: 'How Bootstrapped Start-ups Use PR to Build Real Value',
    date: 'February 13, 2025',
    subtitle: 'Building Real Value: PR for Bootstrapped Startups',
  },
  {
    img: '/images/blog-img4.png',
    alt: 'Leading PR Tactics for Small Businesses',
    title: 'Unlocking PR Success for Small Business Growth',
    date: 'March 5, 2025',
    subtitle: 'Top PR Strategies for Small Enterprises',
  },
  {
    img: '/images/blog-img5.jpg',
    alt: 'The Power of Digital Storytelling',
    title: 'How Storytelling Transforms Your Digital Marketing',
    date: 'April 10, 2025',
    subtitle: 'Crafting Memorable Brand Narratives Online',
  },
  {
    img: '/images/blog-img6.jpg',
    alt: 'PR Trends for SaaS Startups',
    title: 'Using PR to Accelerate SaaS Start-up Success',
    date: 'May 18, 2025',
    subtitle: 'Emerging PR Trends for SaaS Brands',
  },
  {
    img: '/images/blog-img7.png',
    alt: 'Effective Influencer Partnerships',
    title: 'Building Value With Micro-Influencers in PR Campaigns',
    date: 'June 2, 2025',
    subtitle: 'Leveraging Influencers for Start-up Growth',
  },
  {
    img: '/images/blog-img8.jpg',
    alt: 'Crisis Communication for New Brands',
    title: 'Navigating Crisis: PR Essentials for Rising Brands',
    date: 'July 14, 2025',
    subtitle: 'Smart Crisis Communication Tactics',
  },
  {
    img: '/images/blog-img9.jpg',
    alt: 'Integrating PR and SEO Strategies',
    title: 'Boosting Visibility: Merging PR With SEO Effectively',
    date: 'August 9, 2025',
    subtitle: 'Practical Tips to Combine PR and SEO',
  },
  {
    img: '/images/blog-img10.png',
    alt: 'Enhancing Brand Reach with PR and SEO',
    title: 'Maximize Your Impact by Aligning PR and SEO',
    date: 'September 15, 2025',
    subtitle: 'Strategies for Integrating PR and SEO Campaigns',
  },
  {
    img: '/images/blog-img11.jpg',
    alt: 'Boosting Online Presence through PR and SEO',
    title: 'How to Combine SEO and PR for Better Visibility',
    date: 'October 10, 2025',
    subtitle: 'Effective Methods to Merge PR with SEO',
  },
  {
    img: '/images/blog-img12.jpg',
    alt: 'PR Meets SEO for Enhanced Digital Marketing',
    title: 'Unlock New Growth by Merging Public Relations and SEO',
    date: 'November 3, 2025',
    subtitle: 'Practical Approaches to PR and SEO Integration',
  },
 {
  img: '/images/blog-img13.png',
  alt: 'Leveraging PR and SEO for Brand Growth',
  title: 'Effective Strategies to Integrate PR with SEO',
  date: 'September 21, 2025',
  subtitle: 'How to Boost Your Brand Visibility through PR-SE0'
},
{
  img: '/images/blog-img14.jpg',
  alt: 'Synergy of PR and SEO in Digital Campaigns',
  title: 'Creating Synergy Between PR and SEO for Market Success',
  date: 'October 18, 2025',
  subtitle: 'Tips for Combining Public Relations and SEO'
},
{
  img: '/images/blog-img15.png',
  alt: 'Innovative PR & SEO Tactics for 2025',
  title: 'New Age Approaches to Merging PR and SEO Efforts',
  date: 'November 25, 2025',
  subtitle: 'Innovative Tactics for PR and SEO Integration'
}

]

export default function ArticleGrid() {
  return (
    <Box>
      <Header />

      {/*======================== Hero section  */}

     <Box
  sx={{
    position: 'relative',
    width: '100%',
    minHeight: { xs: 450, md: 480 }, 
    background: 'linear-gradient(135deg, #556cd6 0%, #19857b 100%)',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    mt: { xs: 6, md: 10 },
    pt: { xs: '80px', md: '0' },
    pb: { xs: 4, md: 3 }, 
  }}
>
  <Container maxWidth="lg" sx={{ zIndex: 1 }}>
    <Stack
      direction={{ xs: 'column', md: 'row' }}
      spacing={{ xs: 3, md: 4 }} 
      alignItems="center"
    >
      <Box sx={{ flex: 1, minWidth: { xs: '100%', md: 250 } }}>
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{
            fontWeight: 700,
            fontSize: { xs: '28px', sm: '34px', md: '40px' }, 
            textAlign: { xs: 'center', md: 'left' }, 
          }}
        >
          Insights & Growth: The PR Blog
        </Typography>
        <Typography
          variant="h6"
          sx={{
            mb: 3,
            fontSize: { xs: '14px', sm: '16px', md: '18px' }, // responsive text
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          Discover must-know strategies, bust industry myths, and get actionable
          tips for effective digital PR. Stay on top of trends and build your
          brand with expert advice.
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' } }}>
          
        </Box>
      </Box>

      <Box
        sx={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          mt: { xs: 4, md: 0 }, 
        }}
      >
        <Box
          sx={{
            border: '2px solid #96FD30',
            borderRadius: '50%',
            width: { xs: 140, sm: 180, md: 280 }, 
            height: { xs: 140, sm: 180, md: 280 },
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            boxShadow: '0 4px 16px rgba(0,0,0,0.4)',
          }}
        >
          <ArticleIcon
            sx={{
              fontSize: { xs: 70, sm: 100, md: 140 }, 
              color: 'white',
            }}
          />
        </Box>
      </Box>
    </Stack>
  </Container>
</Box>


      {/* Brand logo */}

      <BrandLogo />

      {/*=========================== section Elevate Your Brand with Digital Marketing */}

      <Box sx={{mt:8}}>
   <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h3" sx={{ mb: 3, fontWeight: 800 }}>
             Digital Marketing Insights
            </Typography>
            <Typography variant="h6" color="text.secondary">
              Get expert tips, trends, and strategies to grow your brand and reach your audience effectively
            </Typography>
          </Box>

  <Box
    sx={{
      mt: { xs: 5, md: 10 },
      px: { xs: 2, sm: 4, md: 12 }, 
    }}
  >
    <Grid container spacing={{ xs: 2, sm: 3 }} rowSpacing={5} >
      {articles.map((art, idx) => (
        <Grid item xs={12} sm={6} md={4} key={idx}>
          <Card
            sx={{
              transition: 'transform 0.3s, box-shadow 0.3s',
              boxShadow: 10,
              border: '2px solid transparent',
              p: '8px',
               mb: { xs: 3, md: 0 },
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              '&:hover': {
                boxShadow: 10,
                border: '2px solid #BB30F2',
              },
            }}
          >
            <Image
              src={art.img}
              alt={art.alt}
              width={400}
              height={400}
              style={{
                objectFit: 'cover',
                width: '100%',
                height: '240px', 
                borderRadius: 5,
              }}
            />

            <CardContent sx={{ flexGrow: 1 }}>
              <Typography
                variant="body2"
                color="text.secondary"
                marginTop={3}
                gutterBottom
              >
                {art.date}
              </Typography>
              <Typography variant="h6" sx={{ minHeight: 60 }}>
                {art.title}
              </Typography>
              <Typography variant="caption" sx={{fontSize:13 , color:'#602DD6'}}>{art.subtitle}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Box>
</Box>


      {/* =============================== */}

      <Box sx={{ py: 12, mt: 8 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h3" sx={{ mb: 3, fontWeight: 800 }}>
              Premium Publisher Network
            </Typography>
            <Typography variant="h6" color="text.secondary">
              Access top-tier publishers and content platforms where your B2B
              audience engages.
            </Typography>
          </Box>
          <Grid container spacing={4}>
            {[
              {
                category: 'Business Publications',
                description:
                  'Leading business magazines, industry publications, and professional news sites.',
                reach: '25M+ Professionals',
                examples: [
                  'Forbes',
                  'Harvard Business Review',
                  'Industry Week',
                ],
              },
              {
                category: 'Content Discovery',
                description:
                  'Native content recommendation widgets on premium publisher websites.',
                reach: '50M+ Monthly Views',
                examples: ['Taboola', 'Outbrain', 'Content.ad'],
              },
              {
                category: 'Social Platforms',
                description:
                  'Professional social networks and business-focused social media platforms.',
                reach: '100M+ Business Users',
                examples: ['LinkedIn', 'Twitter', 'Facebook'],
              },
              {
                category: 'Industry Websites',
                description:
                  'Specialized websites and portals focused on specific B2B industries.',
                reach: '15M+ Decision Makers',
                examples: ['TechCrunch', 'MarTech', 'Sales Hacker'],
              },
            ].map((network, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card sx={{ height: '100%', p: 4 }}>
                  <Typography
                    variant="h5"
                    sx={{ mb: 2, fontWeight: 700, color: '#059669' }}
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

      {/* ================================== section last  */}

      <Box sx={{ py: 10, bgcolor: siteConfig.colors.primary, color: 'white' , mt:4 }}>
        <Container maxWidth="md">
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h3" sx={{ mb: 3, fontWeight: 700 }}>
              Explore Expert Insights & Industry Trends
            </Typography>
            <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
              Stay informed with the latest marketing innovations, case studies,
              and data-driven strategies from our experts and partners.
            </Typography>
            <Link href="/contact" passHref>
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={2}
                justifyContent="center"
              >
                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    borderColor: 'white',
                    color: 'white',
                    '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' },
                  }}
                >
                 Schedule Demo
                </Button>
              </Stack>
            </Link>
          </Box>
        </Container>
      </Box>

      {/* ==================================== Footer  */}

      <Footer />
    </Box>
  )
}

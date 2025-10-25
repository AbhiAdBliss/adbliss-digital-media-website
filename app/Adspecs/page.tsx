import {
  Box,
  Typography,
  Grid,
  Container,
  Paper,
  Divider,
  Card,
  Chip,
  Button,
} from '@mui/material'
import Link from 'next/link'
import { FaChevronRight } from 'react-icons/fa6'
import { siteConfig } from '../../config'
import Header from '../components/Header'
import AdUnitsIcon from '@mui/icons-material/AdUnits'
import MovieIcon from '@mui/icons-material/Movie'
import TvIcon from '@mui/icons-material/Tv'
import LinkIcon from '@mui/icons-material/Link'
import YouTubeIcon from '@mui/icons-material/YouTube'
import SpeedIcon from '@mui/icons-material/Speed'
import StorageIcon from '@mui/icons-material/Storage'
import Footer from '../components/Footer'

export default function ADSpecs() {
  return (
    <Box>
      <Header />
      <Box>
        <Box
          sx={{
            background: `linear-gradient(135deg, ${siteConfig.colors.primary}, ${siteConfig.colors.secondary})`,
            color: '#fff',
            py: { xs: 12, md: 16 },
            textAlign: 'center',
          }}
        >
          <Container maxWidth="md">
            <Typography variant="h3" fontWeight={800} mb={2}>
              AdBliss – OTT & YouTube Ads
            </Typography>
            <Typography variant="h6" color="rgba(255,255,255,0.85)">
              Deliver impactful ads on Connected TV and Digital Video with
              AdBliss, ensuring premium performance and engagement
            </Typography>
          </Container>
        </Box>
        {/* ============================== section 1 */}
        <Box sx={{ py: 12, bgcolor: '#f8fafc' }}>
          <Container maxWidth="lg">
            <Box sx={{ textAlign: 'center', mb: 8 }}>
              <Typography variant="h3" sx={{ mb: 2, fontWeight: 800 }}>
                Ad Specs Performance
              </Typography>
              <Typography variant="h6" color="text.secondary">
                Key metrics to optimize your ad creatives across platforms
              </Typography>
            </Box>

            <Grid container spacing={4}>
              {[
                {
                  value: '1920x1080',
                  label: 'Full HD Resolution',
                  color: '#059669',
                },
                {
                  value: '30fps',
                  label: 'Optimal Frame Rate',
                  color: '#7c3aed',
                },
                {
                  value: '300MB',
                  label: 'Max File Size',
                  color: '#f59e0b',
                },
                {
                  value: 'VAST',
                  label: 'Tracking Enabled',
                  color: '#ef4444',
                },
              ].map((stat, index) => (
                <Grid item xs={6} md={3} key={index}>
                  <Card
                    sx={{
                      textAlign: 'center',
                      p: 4,
                      border: 'none',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <Typography
                      variant="h2"
                      sx={{
                        fontWeight: 900,
                        mb: 1,
                        color: stat.color,
                        fontSize: { xs: '2rem', md: '2.2rem' },
                      }}
                    >
                      {stat.value}
                    </Typography>
                    <Typography
                      variant="h6"
                      color="text.secondary"
                      sx={{ fontWeight: 600 }}
                    >
                      {stat.label}
                    </Typography>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
        {/* section 2 */}
        <Box
          sx={{
            // background: 'linear-gradient(180deg, #f5f8ff 0%, #ffffff 100%)',
            py: { xs: 6, md: 10 },
          }}
        >
          <Container maxWidth="lg">
            {/* Header */}
            <Box textAlign="center" mb={8}>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 700,
                  color: '#0b2559',
                  mb: 2,
                }}
              >
                Ad Specifications
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: '#5a6473',
                  maxWidth: '800px',
                  mx: 'auto',
                  lineHeight: 1.7,
                }}
              >
                Ensure your creative assets meet platform standards for optimal
                performance across
                <b> OTT, Connected TV (CTV), and YouTube </b> advertising.
                Deliver seamless viewing, accurate tracking, and engaging
                experiences for your audience.
              </Typography>
            </Box>

            {/* Three Specs Cards */}
            <Grid container spacing={5}>
              {/* OTT Video Ad Specs */}
              <Grid item xs={12} md={4}>
                <Paper
                  elevation={5}
                  sx={{
                    p: 4,
                    borderRadius: '20px',
                    backgroundColor: '#f9fbff',
                    borderTop: '5px solid #f59e0b',
                    height: '100%',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
                    },
                  }}
                >
                  <Box display="flex" alignItems="center" mb={2}>
                    <MovieIcon sx={{ fontSize: 40, color: '#f59e0b', mr: 1 }} />
                    <Typography variant="h5" fontWeight={700}>
                      OTT Video Ad Specs
                    </Typography>
                  </Box>
                  <Divider sx={{ mb: 2 }} />
                  <Typography
                    variant="body1"
                    sx={{ lineHeight: 1.9, color: '#333' }}
                  >
                    • Raw Video File: <b>.mp4, .mov, .flv</b> <br />• Size:{' '}
                    <b>10 – 30 MB</b> | Duration: <b>10–30 sec</b> <br />•
                    Resolution: <b>1920×1080 (16:9)</b> <br />• Companion
                    Banner: <b>600×500 / 1200×800</b> <br />• Includes{' '}
                    <b>click tracker or landing page URL</b>
                  </Typography>
                </Paper>
              </Grid>

              {/* CTV Ad Specs */}
              <Grid item xs={12} md={4}>
                <Paper
                  elevation={5}
                  sx={{
                    p: 4,
                    borderRadius: '20px',
                    backgroundColor: '#f9fbff',
                    borderTop: '5px solid #0b6fb3',
                    height: '100%',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
                    },
                  }}
                >
                  <Box display="flex" alignItems="center" mb={2}>
                    <TvIcon sx={{ fontSize: 40, color: '#0b6fb3', mr: 1 }} />
                    <Typography variant="h5" fontWeight={700}>
                      CTV Ad Specs
                    </Typography>
                  </Box>
                  <Divider sx={{ mb: 2 }} />
                  <Typography
                    variant="body1"
                    sx={{ lineHeight: 1.9, color: '#333' }}
                  >
                    • Ad Type: <b>CTV Video (MP4)</b> <br />• Max File Size:{' '}
                    <b>300 MB</b> <br />• Dimensions:{' '}
                    <b>1920×1080 / 1280×720 (16:9)</b> <br />• Frame Rate:{' '}
                    <b>30 fps</b> | Min Bitrate: <b>20,000 kbps</b> <br />•{' '}
                    <b>Click Trackers Required</b>
                  </Typography>
                </Paper>
              </Grid>

              {/* YouTube Video Ad Specs */}
              <Grid item xs={12} md={4}>
                <Paper
                  elevation={5}
                  sx={{
                    p: 4,
                    borderRadius: '20px',
                    backgroundColor: '#f9fbff',
                    borderTop: '5px solid #d32f2f',
                    height: '100%',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
                    },
                  }}
                >
                  <Box display="flex" alignItems="center" mb={2}>
                    <YouTubeIcon
                      sx={{ fontSize: 40, color: '#d32f2f', mr: 1 }}
                    />
                    <Typography variant="h5" fontWeight={700}>
                      YouTube Video Specs
                    </Typography>
                  </Box>
                  <Divider sx={{ mb: 2 }} />
                  <Typography
                    variant="body1"
                    sx={{ lineHeight: 1.9, color: '#333' }}
                  >
                    • Video Length: <b>Up to 20 seconds</b> <br />• Includes{' '}
                    <b>Click Tracker or Landing Page URL</b> <br />• Headline:{' '}
                    <b>Up to 15 characters</b> <br />• CTA Text:{' '}
                    <b>Up to 10 characters</b> <br />• Thumbnail:{' '}
                    <b>1280×720 (JPG/GIF/PNG)</b> <br />• Companion Banner:{' '}
                    <b>300×60 (≤150KB)</b>
                  </Typography>
                </Paper>
              </Grid>
            </Grid>

            {/* Footer Note */}
            <Box textAlign="center" mt={10}>
              <Typography
                variant="body1"
                sx={{
                  color: '#5a6473',
                  maxWidth: '850px',
                  mx: 'auto',
                  lineHeight: 1.8,
                }}
              >
                Our creative specifications are designed to maintain the highest
                quality across streaming platforms. AdBliss ensures your video
                ads meet every platform’s technical and performance standards
                for flawless playback, visibility, and measurable engagement.
              </Typography>
            </Box>
          </Container>
        </Box>
      </Box>
      {/* section 3 */}
      <Box sx={{ py: 12 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h3" sx={{ mb: 3, fontWeight: 700 }}>
              How Ad Specs Work
            </Typography>
            <Typography variant="h6" color="text.secondary">
              Simple steps to prepare your creative assets for CTV, OTT Video,
              and YouTube campaigns
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {[
              {
                step: '01',
                title: 'CTV Ad Specs',
                description:
                  'Ensure your connected TV creatives meet industry-standard formats, resolutions, and durations for maximum impact on smart TVs and streaming devices.',
              },
              {
                step: '02',
                title: 'OTT Video Ad Specs',
                description:
                  'Prepare your OTT video ads with the correct aspect ratios, file sizes, and codecs to deliver high-quality, seamless streaming experiences across platforms.',
              },
              {
                step: '03',
                title: 'YouTube Video Specs',
                description:
                  'Follow YouTube’s ad requirements, including length, resolution, and thumbnail guidelines to ensure optimal performance and engagement.',
              },
            ].map((item, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography
                    variant="h2"
                    sx={{
                      fontWeight: 800,
                      color: siteConfig.colors.primary,
                      opacity: 0.6,
                      mb: 2,
                    }}
                  >
                    {item.step}
                  </Typography>
                  <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                    {item.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {item.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      {/* ============================ section  */}
      <Box
        sx={{
          py: { xs: 6, md: 10 },
        }}
      >
        <Box textAlign="center" mb={2}>
          <Chip
            label="How OTT Video Ad Specs Works"
            sx={{
              bgcolor: 'primary.main',
              color: 'white',
              fontWeight: 600,
              fontSize: '1.2rem',
              px: 2,
              py: 1,
            }}
          />
        </Box>
        <Container maxWidth="lg">
          {/* Section Header */}
          <Box textAlign="center" mb={6}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                color: '#111',
                mb: 2,
              }}
            >
              OTT Video Ad Specifications
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: '#666',
                maxWidth: '800px',
                mx: 'auto',
              }}
            >
              Deliver impactful advertising experiences across Connected TV and
              Digital Video platforms with AdBliss. Our optimized OTT ad formats
              ensure premium quality, engagement, and reach for your brand.
            </Typography>
          </Box>

          {/* Specs Details */}
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  borderRadius: '16px',
                  height: '100%',
                }}
              >
                <Box display="flex" alignItems="center" mb={2}>
                  <MovieIcon sx={{ fontSize: 36, color: '#7c3aed', mr: 1 }} />
                  <Typography variant="h5" fontWeight={600}>
                    Video File Requirements
                  </Typography>
                </Box>
                <Divider sx={{ mb: 2 }} />
                <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                  • Accepted Formats: <b>.mp4, .mov, .flv, .avi</b> <br />• File
                  Size: <b>10 – 30 MB</b> <br />• Duration:{' '}
                  <b>10 – 30 seconds</b> <br />• Resolution:{' '}
                  <b>1920 × 1080 px (16:9 aspect ratio)</b> <br />• Frame Rate:{' '}
                  <b>24–30 fps recommended</b> <br />• Audio:{' '}
                  <b>Stereo, 44.1 kHz or higher</b>
                </Typography>
              </Paper>
            </Grid>

            <Grid item xs={12} md={6}>
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  borderRadius: '16px',
                  height: '100%',
                }}
              >
                <Box display="flex" alignItems="center" mb={2}>
                  <TvIcon sx={{ fontSize: 36, color: '#f59e0b', mr: 1 }} />
                  <Typography variant="h5" fontWeight={600}>
                    Display & Placement
                  </Typography>
                </Box>
                <Divider sx={{ mb: 2 }} />
                <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                  • Supported Platforms: <b>OTT, CTV, and Mobile</b> <br />• Ad
                  Position: <b>Pre-roll, Mid-roll, Post-roll</b> <br />•
                  Playback: <b>Auto-start with sound</b> <br />• Delivery:{' '}
                  <b>VAST, VPAID, or Direct</b>
                </Typography>
              </Paper>
            </Grid>

            <Grid item xs={12} md={6}>
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  borderRadius: '16px',
                  height: '100%',
                }}
              >
                <Box display="flex" alignItems="center" mb={2}>
                  <AdUnitsIcon sx={{ fontSize: 36, color: '#059669', mr: 1 }} />
                  <Typography variant="h5" fontWeight={600}>
                    Companion Static Banner
                  </Typography>
                </Box>
                <Divider sx={{ mb: 2 }} />
                <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                  • Sizes: <b>600 × 500 px</b> or <b>1200 × 800 px</b> <br />•
                  Format: <b>.jpg, .png</b> (under 200 KB) <br />•
                  Click-through: <b>Linked to brand landing page</b> <br />•
                  Must visually align with video creative
                </Typography>
              </Paper>
            </Grid>

            <Grid item xs={12} md={6}>
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  borderRadius: '16px',
                  height: '100%',
                }}
              >
                <Box display="flex" alignItems="center" mb={2}>
                  <LinkIcon sx={{ fontSize: 36, color: '#1976d2', mr: 1 }} />
                  <Typography variant="h5" fontWeight={600}>
                    Tracking & Reporting
                  </Typography>
                </Box>
                <Divider sx={{ mb: 2 }} />
                <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                  • Includes: <b>Click tracker or landing page URL</b> <br />
                  • Third-party tracking supported (VAST tag) <br />
                  • Impression & completion reporting available <br />•
                  Optional: <b>Interactive or shoppable overlays</b>
                </Typography>
              </Paper>
            </Grid>
          </Grid>

          {/* Footer Note */}
          <Box textAlign="center" mt={8}>
            <Typography
              variant="body1"
              sx={{
                color: '#555',
                maxWidth: '800px',
                mx: 'auto',
                lineHeight: 1.8,
              }}
            >
              These OTT Video Ad specifications are designed to deliver seamless
              playback, optimal performance, and maximum viewer engagement
              across premium CTV and OTT platforms. Ensure all creatives comply
              with these standards before submission to guarantee the best
              viewing experience.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/*======================================== section CTV Ad Specifications */}
      <Box sx={{ py: { xs: 6, md: 12 }, bgcolor: '#f8fafc' }}>
        {/* Chip Header */}
        <Box textAlign="center" mb={2}>
          <Chip
            label="How CTV Ad Specs Works"
            sx={{
              bgcolor: '#059669',
              color: 'white',
              fontWeight: 600,
              fontSize: '1.2rem',
              px: 2,
              py: 1,
            }}
          />
        </Box>

        <Container maxWidth="lg">
          {/* Section Header */}
          <Box textAlign="center" mb={8}>
            <TvIcon sx={{ fontSize: 50, color: '#1976d2', mb: 2 }} />
            <Typography
              variant="h3"
              sx={{ fontWeight: 700, color: '#111', mb: 2 }}
            >
              Connected TV (CTV) Ad Specifications
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: '#666',
                maxWidth: '800px',
                mx: 'auto',
                lineHeight: 1.8,
              }}
            >
              Our CTV ad specifications ensure premium video experiences across
              smart TVs and streaming platforms. All creatives must comply with
              these standards for seamless playback, engagement, and measurable
              performance.
            </Typography>
          </Box>

          {/* Specs Grid with New Card Design */}
          <Grid container spacing={4}>
            {[
              {
                icon: <TvIcon sx={{ fontSize: 36, color: '#1976d2', mr: 2 }} />,
                title: 'Ad Type',
                content:
                  '• CTV Video (MP4) format supported. Encode using H.264/H.265 for compatibility.',
                color: '#e0f2ff',
              },
              {
                icon: (
                  <StorageIcon sx={{ fontSize: 36, color: '#f59e0b', mr: 2 }} />
                ),
                title: 'File Size',
                content:
                  '• Max file size: 300 MB. Optimize files for smooth playback across devices.',
                color: '#fff7e6',
              },
              {
                icon: (
                  <SpeedIcon sx={{ fontSize: 36, color: '#059669', mr: 2 }} />
                ),
                title: 'Dimensions & Frame Rate',
                content:
                  '• Resolutions: 1920×1080 (Full HD) or 1280×720 (HD) with 16:9 aspect ratio.\n• Frame Rate: 30 fps recommended.\n• Minimum Bitrate: 20,000 kbps.',
                color: '#e6fff4',
              },
              {
                icon: (
                  <LinkIcon sx={{ fontSize: 36, color: '#1976d2', mr: 2 }} />
                ),
                title: 'Click Trackers',
                content:
                  '• Include click trackers or landing page URLs.\n• Supports third-party tracking tags (VAST).\n• Test tracking URLs before submission.',
                color: '#e0e7ff',
              },
            ].map((item, index) => (
              <Grid item xs={12} md={6} key={index} sx={{ display: 'flex' }}>
                <Paper
                  elevation={0}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    borderLeft: `6px solid ${item.color}`,
                    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 40px rgba(0,0,0,0.15)',
                    },
                    width: '100%',
                    height: '100%', // make Paper fill Grid item
                  }}
                >
                  <Box
                    sx={{
                      bgcolor: item.color,
                      p: 2,
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    {item.icon}
                    <Typography variant="h5" fontWeight={600}>
                      {item.title}
                    </Typography>
                  </Box>
                  <Box sx={{ p: 3, flexGrow: 1 }}>
                    <Typography
                      variant="body1"
                      sx={{ lineHeight: 1.8, whiteSpace: 'pre-line' }}
                    >
                      {item.content}
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>

          {/* Footer Note */}
          <Box textAlign="center" mt={8}>
            <Typography
              variant="body1"
              sx={{
                color: '#555',
                maxWidth: '800px',
                mx: 'auto',
                lineHeight: 1.8,
              }}
            >
              Following these CTV ad specifications guarantees smooth delivery
              of video ads across all connected TV devices, providing an
              uninterrupted and engaging viewing experience.
            </Typography>
          </Box>
        </Container>
      </Box>
      {/* ================================== YT video adspace */}
      <Box sx={{ py: { xs: 6, md: 12 } }}>
        {/* Chip Header */}
        <Box textAlign="center" mb={4}>
          <Chip
            label="How YouTube Video Specs Works"
            sx={{
              bgcolor: '#FF0000',
              color: 'white',
              fontWeight: 600,
              fontSize: '1.2rem',
              px: 2,
              py: 1,
            }}
          />
        </Box>

        <Container maxWidth="lg">
          {/* Section Header */}
          <Box textAlign="center" mb={10}>
            <YouTubeIcon sx={{ fontSize: 50, color: '#FF0000', mb: 2 }} />
            <Typography
              variant="h3"
              sx={{ fontWeight: 700, color: '#111', mb: 2 }}
            >
              YouTube Video Ad Specifications
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: '#666',
                maxWidth: '800px',
                mx: 'auto',
                lineHeight: 1.8,
              }}
            >
              Ensure your YouTube ads meet these specifications for optimal
              playback, engagement, and reach across all devices.
            </Typography>
          </Box>

          {/* Grid with New Card Design */}
          <Grid container spacing={6}>
            {[
              {
                icon: <YouTubeIcon sx={{ fontSize: 28, color: '#fff' }} />,
                iconBg: '#FF0000',
                title: 'Video Format',
                content:
                  '• Supported formats: MP4, MOV, AVI. H.264 encoding with AAC audio recommended.',
                bg: '#fff0f0',
              },
              {
                icon: <StorageIcon sx={{ fontSize: 28, color: '#fff' }} />,
                iconBg: '#f59e0b',
                title: 'File Size',
                content:
                  '• Max size: 256 MB. Optimize files to prevent buffering across all devices.',
                bg: '#fff7e6',
              },
              {
                icon: <SpeedIcon sx={{ fontSize: 28, color: '#fff' }} />,
                iconBg: '#059669',
                title: 'Resolution & Frame Rate',
                content:
                  '• Recommended: 1920×1080 (Full HD) or 1280×720 (HD), 24–60 fps, bitrate 8–20 Mbps.',
                bg: '#e6fff4',
              },
              {
                icon: <LinkIcon sx={{ fontSize: 28, color: '#fff' }} />,
                iconBg: '#1976d2',
                title: 'Tracking & CTA',
                content:
                  '• Include clickable CTA overlays or end screens. Use UTM tags for tracking.',
                bg: '#e0e7ff',
              },
            ].map((item, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Paper
                  elevation={3}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    bgcolor: item.bg,
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 16px 40px rgba(0,0,0,0.15)',
                    },
                    height: '100%',
                  }}
                >
                  {/* Icon + Title */}
                  <Box sx={{ display: 'flex', alignItems: 'center', p: 2 }}>
                    <Box
                      sx={{
                        width: 50,
                        height: 50,
                        borderRadius: '50%',
                        bgcolor: item.iconBg,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      {item.icon}
                    </Box>
                    <Typography
                      variant="h5"
                      fontWeight={600}
                      sx={{ ml: 2, lineHeight: 1.2 }}
                    >
                      {item.title}
                    </Typography>
                  </Box>

                  {/* Divider & Content */}
                  <Divider sx={{ mb: 2 }} />
                  <Box sx={{ p: 2, flexGrow: 1 }}>
                    <Typography
                      variant="body1"
                      sx={{ lineHeight: 1.8, whiteSpace: 'pre-line' }}
                    >
                      {item.content}
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>

          {/* Footer Note */}
          <Box textAlign="center" mt={10}>
            <Typography
              variant="body1"
              sx={{
                color: '#555',
                maxWidth: '800px',
                mx: 'auto',
                lineHeight: 1.8,
              }}
            >
              Following these YouTube video ad specifications ensures your ads
              play smoothly and engage viewers across desktop, mobile, and TV
              devices.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* last */}
      <Box
        component="section"
        sx={{
          py: { xs: 10, sm: 8 },
          background: 'linear-gradient(135deg, #3b82f6, #9333ea)',
          color: 'white',
        }}
      >
        <Container maxWidth="lg">
          {/* Title */}
          <Box textAlign="center">
            <Typography
              variant="h3"
              sx={{
                fontWeight: 'bold',
                fontSize: { xs: '24px', sm: '32px', lg: '55px' },
              }}
            >
              Ad Specs
            </Typography>
          </Box>

          {/* Subtitle */}
          <Box textAlign="center" mb={4}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 'bold',
                fontSize: { xs: '22px', sm: '30px', lg: '45px' },
                lineHeight: 1.2,
              }}
            >
              Premium ad formats designed for high performance
            </Typography>

            <Typography
              variant="body1"
              sx={{
                mt: 3,
                maxWidth: {
                  xs: '100%',
                  sm: '90%',
                  md: '80%',
                },
                textAlign: 'center',
                mx: 'auto',
                fontSize: { xs: '16px', sm: '18px', lg: '20px' },
                lineHeight: 1.7,
              }}
            >
              Deliver compelling branded experiences across Native, YouTube,
              OTT, and CTV. Designed for better engagement, optimal visibility,
              and measurable conversion outcomes.
            </Typography>
          </Box>

          {/* Button */}
          <Box display="flex" justifyContent="center" mt={6}>
            <Link href="/contact" passHref>
              <Button
                variant="outlined"
                endIcon={<FaChevronRight />}
                sx={{
                  borderColor: '#f7faf9',
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: '19px',
                  px: { xs: 3, sm: 4 },
                  py: { xs: 1.5, sm: 2 },
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: '#fdfcfd',
                    color: '#333333',
                    borderColor: '#fdfcfd',
                  },
                  '&:active': {
                    transform: 'scale(0.95)',
                    backgroundColor: '#7c3aed',
                    color: '#fff',
                  },
                }}
              >
                View Specs
              </Button>
            </Link>
          </Box>
        </Container>
      </Box>
      {/* Footer */}

      <Footer />
    </Box>
  )
}

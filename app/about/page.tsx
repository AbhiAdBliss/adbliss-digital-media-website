'use client'

import { motion } from 'framer-motion'
import React, { useRef, useEffect, useState } from 'react'
import Header from '../components/Header'
import { FaHeart, FaSearch } from 'react-icons/fa'
import { BsSpeedometer } from 'react-icons/bs'
import { TfiThought } from 'react-icons/tfi'
import { FaChevronRight } from 'react-icons/fa6'
import CountUp from 'react-countup'
import Footer from '../components/Footer'
import {
  Box,
  Typography,
  Card,
  Grid,
  Paper,
  CardContent,
  Button,
  Container,
} from '@mui/material'
import BrandLogo from '../components/BrandLogo'
import Teammembers from '../components/Teammembers'

// ------------------ Interfaces ------------------
interface Value {
  title: string
  description: string
}

interface AnimatedCardProps {
  value: Value
}

interface Stat {
  value: number
  label: string
  prefix?: string
}

interface Step {
  title: string
  description: string
  icon: JSX.Element
  borderColor: string
}

// ======================================================



// ------------------ AnimatedCard ------------------
const AnimatedCard: React.FC<AnimatedCardProps> = ({ value }) => {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!ref.current) return

    const currentRef = ref.current
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    observer.observe(currentRef)

    return () => {
      if (currentRef) observer.unobserve(currentRef)
    }
  }, [])

  return (
    <Paper
      ref={ref}
      elevation={6}
      sx={{
        p: 3,
        pt: 6,
        borderRadius: 4,
        textAlign: 'center',
        position: 'relative',
        bgcolor: 'white',
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        opacity: isVisible ? 1 : 0,
        transition: 'all 0.7s ease-out',
      }}
    >
      {/* Icon circle */}
      <Box
        sx={{
          position: 'absolute',
          top: -28,
          left: '50%',
          transform: 'translateX(-50%)',
          width: { xs: 48, sm: 56 },
          height: { xs: 48, sm: 56 },
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(to right, #1976d2, #9c27b0)',
          boxShadow: 3,
        }}
      >
        <FaHeart style={{ color: '#fff', fontSize: '1.5rem' }} />
      </Box>
      {/* Title */}
      <Typography
        variant="h6"
        sx={{
          fontWeight: 'bold',
          mb: 1.5,
          color: 'text.primary',
          fontSize: { xs: '1rem', sm: '1.25rem', lg: '1.5rem' },
        }}
      >
        {value.title}
      </Typography>
      {/* Description */}
      <Typography
        sx={{
          color: 'text.secondary',
          fontSize: { xs: '0.875rem', sm: '1rem', lg: '1.125rem' },
          lineHeight: 1.6,
        }}
      >
        {value.description}
      </Typography>
    </Paper>
  )
}

// =====================================



// ------------------ Page ------------------
const Page: React.FC = () => {
  const values: Value[] = [
    {
      title: 'Growth',
      description:
        'We celebrate creativity, initiative, and a desire to learn and improve continuously. When you grow as a professional, Eskimi grows with you!',
    },
    {
      title: 'Ownership',
      description:
        'We believe in accountability and reliability. Our team members take full ownership of their responsibilities and outcomes, whether they are fantastic or could be improved.',
    },
    {
      title: 'Initiative & Drive',
      description:
        'We value proactive thinkers who bring fresh ideas, take ownership of their implementation, and approach challenges with passion and drive.',
    },
    {
      title: 'Collaboration',
      description:
        'Teamwork is at the heart of what we do. We act with compassion, empathy, and care to ensure clear communication, smooth processes, and great results.',
    },
  ]

  const stats: Stat[] = [
    { value: 200000, label: 'Impactful ad campaigns' },
    { value: 2000, label: 'Happy clients', prefix: '+' },
    { value: 2500, label: 'Awesome targeting options', prefix: '+' },
    { value: 1017557, label: 'Mind-blowing creatives' },
    { value: 200, label: 'Talented people' },
    { value: 33, label: 'Countries with people on the ground' },
  ]

  const steps: Step[] = [
    {
      title: 'Research Project',
      description:
        'We start by understanding your business needs and gathering all requirements clearly.',
      icon: <FaSearch size={50} color="#6A11CB" />,
      borderColor: '#6A11CB',
    },
    {
      title: 'Strategic Planning',
      description:
        'Our team creates a tailored strategy and design, approach aligned with your goals.',
      icon: <BsSpeedometer size={50} color="#9c27b0" />,
      borderColor: '#9c27b0',
    },
    {
      title: 'Creative Execution',
      description:
        'Development and execution with continuous feedback to ensure top quality.',
      icon: <TfiThought size={50} color="#6A11CB" />,
      borderColor: '#6A11CB',
    },
    {
      title: 'Research Project',
      description:
        'We start by understanding your business needs and gathering all requirements clearly.',
      icon: <FaSearch size={50} color="#6A11CB" />,
      borderColor: '#6A11CB',
    },
  ]

  const [startCount, setStartCount] = useState(false)
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!statsRef.current) return

    const currentRef = statsRef.current // ✅ copy ref into a local variable
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStartCount(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    observer.observe(currentRef)

    return () => {
      if (currentRef) observer.unobserve(currentRef)
    }
  }, [])

  return (
    <div style={{ backgroundColor: 'white' }}>
      <Header />
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: {
            xs: '250px',
            sm: '350px',
            md: '400px',
            lg: '570px',
            xl: '600px',
          },
          backgroundImage: "url('/about-bg-img.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          overflow: 'hidden',
          backgroundAttachment: {
            xs: 'scroll',
            sm: 'fixed',
          },
        }}
      >
        {/* Gradient Overlay */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, #6c21ed 50%, #1ee6a8 100%)',
            opacity: 0.4,
          }}
        />

        {/* Centered Text */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            px: { xs: 2, sm: 4 },
          }}
        >
          <Typography
            variant="h1"
            sx={{
              color: 'white',
              fontWeight: 'bold',
              textAlign: 'center',
              fontSize: {
                xs: '1.5rem',
                sm: '1.875rem',
                md: '2.25rem',
                lg: '4rem',
                xl: '3.75rem',
              },
            }}
          >
            About Us
          </Typography>
        </Box>
      </Box>
      {/* Section 2 - Values */}
      <Box sx={{ py: { xs: 6, sm: 8, lg: 12 }, mt: 5 }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 'bold',
            textAlign: 'center',
            lineHeight: 1.3,
            fontSize: { xs: '1.875rem', sm: '2.25rem', lg: '4rem' },
          }}
        >
          Adbliss
          <Box
            component="span"
            sx={{
              background: 'linear-gradient(to right, #1976d2, #9c27b0)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            values
          </Box>
        </Typography>
        <Box
          sx={{
            maxWidth: '1600px',
            mx: 'auto',
            px: { xs: 2, sm: 3, lg: 6 },
            mt: 12,
          }}
        >
          <Grid
            container
            spacing={{ sm: 4, lg: 6 }}
            rowSpacing={{ xs: 5 }}
            alignItems="stretch"
          >
            {values.map((value, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                lg={3}
                key={index}
                sx={{ display: 'flex' }}
              >
                <Box sx={{ flex: 1, display: 'flex' }}>
                  <AnimatedCard value={value} />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
      {/* Section-3 */}
      <BrandLogo />
      {/* section-4 */}
      <Box sx={{ p: { xs: 2, sm: 4, lg: 6 } }}>
        {/* Content Above */}
        <Box
          textAlign="center"
          px={{ xs: 2, md: 10 }}
          mt={{ xs: 3, sm: 5, lg: 8 }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 'bold',
              mb: 4,
              fontSize: {
                xs: '1.25rem',
                sm: '1.75rem',
                md: '2rem',
                lg: '3.5rem',
              },
              background: 'linear-gradient(to right, #1976d2, #9c27b0)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            ABOUT OUR COMPANY
          </Typography>
          <Paper
            elevation={3}
            sx={{
              borderRadius: 4,
              p: { xs: 10, sm: 6 },
              mt: { xs: 10, sm: 5 },
              transition: '0.3s',
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: 'bold',
                fontSize: { xs: '1.25rem', sm: '1.75rem', lg: '2.1rem' },
                pt: 2,
              }}
            >
              We are a dynamic team of creative people in <br /> design &
              marketing.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'text.secondary',
                mt: 3,
                fontSize: { xs: '0.9rem', sm: '1rem', lg: '1.25rem' },
                textAlign: 'justify',
                maxWidth: { xs: '100%', sm: '720px', md: '900px' },
                mx: 'auto',
              }}
            >
              Bliss Digital Media is a leading data-driven digital marketing
              company which provides various services in Brand and Performance
              marketing for world-leading brands. We specialize in various
              models of marketing to suit our clients requirements and generate
              the best ROI.
            </Typography>
          </Paper>
        </Box>

        {/* Part 2 */}
        <Box px={{ xs: 2, sm: 4, lg: 12 }} py={{ xs: 4, sm: 8 }} mt={10}>
          <Grid container spacing={{ xs: 3, sm: 5, lg: 8 }}>
            {/* Vision */}
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, y: 60, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                viewport={{ once: true }}
              >
                <Paper
                  elevation={6}
                  sx={{
                    borderRadius: 4,
                    p: { xs: 2, sm: 4 },
                    background:
                      'linear-gradient(135deg, rgba(25, 118, 210, 0.15), rgba(156, 39, 176, 0.15))',
                    transition: '0.3s',
                    '&:hover': { transform: 'scale(1.05)' },
                  }}
                >
                  <Typography
                    sx={{
                      display: 'inline-block',
                      bgcolor: '#c695cc',
                      fontSize: { xs: '0.75rem', sm: '0.9rem' },
                      fontWeight: 600,
                      px: { xs: 2, sm: 3 },
                      py: { xs: 1, sm: 1.5 },
                      borderRadius: 4,
                      mb: 2,
                    }}
                  >
                    Vision
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ fontSize: { xs: '1rem', sm: '1.125rem' } }}
                  >
                    To be the change agent of digital transformation, empowering
                    brands to succeed in the digital age by delivering
                    high-quality, scalable marketing solutions.
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
            {/* Mission */}
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, y: 60, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Paper
                  elevation={6}
                  sx={{
                    borderRadius: 4,
                    p: { xs: 2, sm: 4 },
                    background:
                      'linear-gradient(135deg, rgba(25, 118, 210, 0.15), rgba(156, 39, 176, 0.15))',
                    transition: '0.3s',
                    '&:hover': { transform: 'scale(1.05)' },
                  }}
                >
                  <Typography
                    sx={{
                      display: 'inline-block',
                      bgcolor: '#c695cc',
                      fontSize: { xs: '0.75rem', sm: '0.9rem' },
                      fontWeight: 600,
                      px: { xs: 2, sm: 3 },
                      py: { xs: 1, sm: 1.5 },
                      borderRadius: 4,
                      mb: 2,
                    }}
                  >
                    Mission
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ fontSize: { xs: '1rem', sm: '1.125rem' } }}
                  >
                    Our mission is to emerge as a global digital marketing
                    leader by offering creative solutions that redefine the way
                    companies connect, interact, and develop.
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
            {/* Values (Full Width Below) */}
            <motion.div
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.9, ease: 'easeOut', delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Paper
                elevation={6}
                sx={{
                  borderRadius: 4,
                  p: { xs: 3, sm: 5 },
                  mt: { xs: 5, sm: 8 },
                  background:
                    'linear-gradient(135deg, rgba(25, 118, 210, 0.15), rgba(156, 39, 176, 0.15))',
                  transition: '0.3s',
                  '&:hover': { transform: 'scale(1.05)' },
                }}
              >
                <Typography
                  sx={{
                    display: 'inline-block',
                    bgcolor: '#c695cc',
                    fontSize: { xs: '0.75rem', sm: '0.9rem' },
                    fontWeight: 600,
                    px: { xs: 2, sm: 3 },
                    py: { xs: 1, sm: 1.5 },
                    borderRadius: 4,
                    mb: 2,
                  }}
                >
                  Our Values
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: '1rem', sm: '1.125rem' },
                    textAlign: 'justify',
                  }}
                >
                  At BrandStory, our values are the pulse of our success and the
                  foundation upon which everything is built. We are fueled by
                  innovation, constantly pushing boundaries in order to pioneer
                  new, daring solutions that spark real outcomes. Integrity is
                  what grounds us, prompting us to build trust and transparency
                  in every relationship, standing by our commitments. We
                  flourish through collaboration, cherishing varied ideas and
                  viewpoints that drive innovation and initiate revolutionary
                  strategies. We continuously reach higher in our pursuit of
                  excellence, producing each project better than the last one
                  and delivering exceptional outcomes. Above all, we are
                  motivated by our love for growth, enabling our clients and us
                  to grow, change, and thrive in the ever-evolving digital
                  marketing space.
                </Typography>
              </Paper>
            </motion.div>
          </Grid>
        </Box>
      </Box>
      {/* Stats Section-5 */}
      <Box ref={statsRef} sx={{ py: { xs: 6, md: 6 }, mt: 2 , backgroundColor:'#FAF9F6' }}>
        <Typography
          variant="h3"
          align="center"
          sx={{
            fontWeight: 'bold',
            fontSize: { xs: '2rem', sm: '3rem', lg: '65px' },
          }}
        >
          Adbliss
          <Box
            component="span"
            sx={{
              background: 'linear-gradient(to right, #1976d2, #9c27b0)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            in numbers
          </Box>
        </Typography>
        <Box maxWidth="lg" mx="auto" mt={14}>
          <Grid
            container
            spacing={4}
            justifyContent="center"
            alignItems="stretch"
          >
            {stats.map((stat, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Paper
                  elevation={6}
                  sx={{
                    p: { xs: 4, sm: 6 },
                    borderRadius: 4,
                    textAlign: 'center',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    transition: '0.3s',
                    '&:hover': {
                      transform: 'scale(1.05)',
                      background: 'linear-gradient(to right, #81b4e7, #e0a3eb)',
                      color: '#000',
                    },
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 'extrabold',
                      fontSize: { xs: '2rem', sm: '3rem', lg: '3.5rem' },
                      background: 'linear-gradient(to right, #8e24aa, #42a5f5)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {startCount ? (
                      <CountUp
                        start={10}
                        end={stat.value}
                        duration={3.5}
                        separator=","
                        prefix={stat.prefix || ''}
                      />
                    ) : (
                      '10'
                    )}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ mt: 2, color: 'text.secondary', fontSize: '1.1rem' }}
                  >
                    {stat.label}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
      {/* section-6 */}
      <Box mt={16} zIndex={10} position="relative" bgcolor="#FAF9F6" pt={5} pb={7}>
        {/* Heading */}
        <Typography
          variant="h3"
          align="center"
          sx={{
            fontWeight: 'bold',
            fontSize: { xs: '28px', sm: '40px', md: '50px', lg: '65px' },
            lineHeight: 1.2,
          }}
        >
          Our Working
          <Box
            component="span"
            sx={{
              background: 'linear-gradient(to right, #1976d2, #9c27b0)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              pl: 1,
            }}
          >
            Process
          </Box>
        </Typography>
        {/* Cards inside container for padding */}
        <Container
          maxWidth="xl"
          sx={{ mt: { xs: 5, sm: 12 }, px: { xs: 2, sm: 4, md: 6 } }}
        >
          <Grid container spacing={4}>
            {steps.map((step, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card
                  sx={{
                    borderRadius: 4,
                    boxShadow: 4,
                    p: { xs: 2, sm: 2 },
                    textAlign: 'center',
                    height: 300,
                    mx: 'auto',
                    transition: '0.3s',
                    '&:hover': {
                      transform: 'scale(1.05)',
                      border: `2px solid ${step.borderColor}`,
                    },
                  }}
                >
                  <CardContent>
                    <Box display="flex" justifyContent="center" mb={2}>
                      {step.icon}
                    </Box>
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      gutterBottom
                      sx={{ fontSize: { xs: '18px', sm: '24px' } }}
                      marginTop={5}
                    >
                      {step.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'text.secondary',
                        textAlign: 'justify',
                        fontSize: { sm: '16px' },
                      }}
                      marginTop={2}
                    >
                      {step.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

{/* ======================================================== */}

<Teammembers/>




      {/* section-7 */}
      <Box
        component="section"
        sx={{
          py: { xs: 6, sm: 10 },
          background: 'linear-gradient(135deg, #059669, #8a53e7)',
          color: 'white',
          mt: '100px',
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
            </Typography>
          </Box>
          {/* Subtitle */}
          <Box textAlign="center" mb={4}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 'bold',
                fontSize: { xs: '24px', sm: '32px', lg: '50px' },
                lineHeight: 1.2,
              }}
            >
              Expert Team management to make it worthy
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mt: 2,
                maxWidth: { xs: '100%', sm: '80%', md: '70%' },
                mx: 'auto',
                fontSize: { xs: '16px', sm: '18px', lg: '20px' },
                lineHeight: 1.7,
              }}
            >
              We are a team of dedicated professionals with expertise and
              passion; We turn ideas into reality. Our team deliver design and
              digital outcomes while remaining focused on client s objectives,
              brand and strategy. Our ideology is to work as business partners
              for better ROI rather than just being the delivery partners.
            </Typography>
          </Box>
          {/* Button */}
          <Box display="flex" justifyContent="center" mt={6}>
            <Button
              variant="outlined"
              endIcon={<FaChevronRight />}
              sx={{
                borderColor: '#f7faf9',
                color: 'white',
                fontSize:'19px',
                fontWeight: 'bold',
                px: { xs: 3, sm: 4 },
                py: { xs: 1.5, sm: 2 },
                borderRadius: 2,
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
              Get in Touch
            </Button>
          </Box>
        </Container>
      </Box>
      
      <Footer />
    </div>
  )
}

export default Page

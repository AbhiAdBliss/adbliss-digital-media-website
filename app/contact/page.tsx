'use client'
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  Paper,
  MenuItem,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  InputAdornment,
  Dialog,
  
} from '@mui/material'
import { useState } from 'react'
import { siteConfig } from '../../config'
import Header from '../components/Header'
import countries from '../utils/countries'

// MUI Icons
import CampaignIcon from '@mui/icons-material/Campaign'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import PersonIcon from '@mui/icons-material/Person'
import BusinessIcon from '@mui/icons-material/Business'
import EmailIcon from '@mui/icons-material/Email'
import PublicIcon from '@mui/icons-material/Public'
import CommentIcon from '@mui/icons-material/Comment'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'

import Footer from '../components/Footer'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    role: '',
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    country: '',
    comments: '',
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [openDialog, setOpenDialog] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (res.ok) {
        setFormData({
          role: '',
          firstName: '',
          lastName: '',
          company: '',
          email: '',
          country: '',
          comments: '',
        })
        setOpenDialog(true) // ✅ Open thank-you popup
      } else {
        setError(data.error || 'Something went wrong.')
      }
    } catch (err) {
      setError('Failed to send message. Please try again later.')
    } finally {
      setLoading(false)
    }
  }

  const handleCloseDialog = () => {
    setOpenDialog(false)
  }

  return (
    <>
    

    
      <Header />
      <Box sx={{ pt: 16, pb: 8, background: '#fafafa' }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            {/* Left Side */}
            <Grid item xs={12} md={6}>
              <Typography variant="h3" fontWeight={700} gutterBottom>
                Let’s Connect 🚀
              </Typography>
              <Typography variant="h6" color="text.secondary" paragraph>
                At <b>Adbliss</b>, we empower Digital Marketing companies with smarter
                advertising solutions. Reach the right audience, generate
                qualified leads, and maximize ROI.
              </Typography>

              <List>
                <ListItem>
                  <ListItemIcon>
                    <CampaignIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Smarter Campaigns"
                    secondary="Run highly targeted ad campaigns with measurable results."
                  />
                </ListItem>

                <ListItem>
                  <ListItemIcon>
                    <PeopleAltIcon color="secondary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Audience Precision"
                    secondary="Engage only with the right prospects, decision makers, and buyers."
                  />
                </ListItem>

                <ListItem>
                  <ListItemIcon>
                    <TrendingUpIcon sx={{ color: 'success.main' }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Growth & ROI"
                    secondary="Accelerate pipeline growth and maximize your return on investment."
                  />
                </ListItem>
              </List>
            </Grid>

            {/* Right Side Form */}
            <Grid item xs={12} md={6}>
              <Paper
                elevation={8}
                sx={{ p: 5, borderRadius: 4, background: '#fff' }}
              >
                <Typography
                  variant="h5"
                  fontWeight={600}
                  gutterBottom
                  textAlign="center"
                >
                  Get in Touch ✨
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  textAlign="center"
                  mb={3}
                >
                  Fill out the form and our team will reach out to help you grow
                  your business.
                </Typography>

                <form onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    {/* Role */}
                    <Grid item xs={12}>
                      <TextField
                        select
                        fullWidth
                        label="Role"
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        required
                      >
                        <MenuItem value="company">
                          I am looking for Service for my Company
                        </MenuItem>
                        <MenuItem value="client">
                          I am looking for Service on behalf of a Client
                        </MenuItem>
                      </TextField>
                    </Grid>

                    {/* First & Last Name */}
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="First Name"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <PersonIcon color="action" />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Last Name"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <PersonIcon color="action" />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Grid>

                    {/* Company */}
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Company Name"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <BusinessIcon color="action" />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Grid>

                    {/* Email */}
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        type="email"
                        label="Business Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <EmailIcon color="action" />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Grid>

                    {/* Country */}
                    <Grid item xs={12}>
                      <TextField
                        select
                        fullWidth
                        label="Country"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        required
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <PublicIcon color="action" />
                            </InputAdornment>
                          ),
                        }}
                      >
                        {countries.map((country) => (
                          <MenuItem key={country} value={country}>
                            {country}
                          </MenuItem>
                        ))}
                      </TextField>
                    </Grid>

                    {/* Comments */}
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        multiline
                        rows={3}
                        label="Additional Comments"
                        name="comments"
                        value={formData.comments}
                        onChange={handleChange}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <CommentIcon color="action" />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Grid>

                    {/* Submit */}
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        disabled={loading}
                        sx={{
                          py: 1.5,
                          fontSize: '1.1rem',
                          textTransform: 'none',
                          borderRadius: 3,
                          background: `linear-gradient(135deg, ${siteConfig.colors.primary}, ${siteConfig.colors.secondary})`,
                          transition: '0.3s',
                          '&:hover': {
                            transform: 'translateY(-2px)',
                            boxShadow: 6,
                          },
                        }}
                      >
                        {loading ? 'Sending...' : 'Submit Message'}
                      </Button>
                    </Grid>

                    {/* Error Message */}
                    {error && (
                      <Grid item xs={12}>
                        <Typography color="error.main">{error}</Typography>
                      </Grid>
                    )}
                  </Grid>
                </form>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Dialog
  open={openDialog}
  onClose={handleCloseDialog}
  PaperProps={{
    sx: {
      borderRadius: 4,
      p: 4,
      textAlign: 'center',
      maxWidth: 400,
      background: 'linear-gradient(135deg, #ffffff, #f9f9fb)',
      boxShadow: 6,
    },
  }}
>
  {/* Centered Icon */}
  <Box display="flex" justifyContent="center" mb={2}>
    <CheckCircleOutlineIcon
      sx={{ fontSize: 60, color: 'success.main' }}
    />
  </Box>

  <Typography variant="h5" fontWeight={600} gutterBottom>
    Thank You!
  </Typography>
  <Typography variant="body1" color="text.secondary" mb={3}>
    Your message has been sent successfully. Our team will get back to you shortly.
  </Typography>
  <Button
    onClick={handleCloseDialog}
    variant="contained"
    sx={{
      py: 1,
      px: 4,
      borderRadius: 3,
      background: `linear-gradient(135deg, ${siteConfig.colors.primary}, ${siteConfig.colors.secondary})`,
      textTransform: 'none',
      fontWeight: 600,
      '&:hover': { boxShadow: 6, transform: 'translateY(-1px)' },
    }}
  >
    Close
  </Button>
</Dialog>

{/* section Location  */}
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
                city: 'Bengaluru(Registered office)',
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

{/* footer */}
<Footer/>
    </>
  )
}

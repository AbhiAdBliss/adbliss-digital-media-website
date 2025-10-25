'use client'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Collapse,
  useScrollTrigger,
  Slide,
  Paper,
} from '@mui/material'
import {
  Menu as MenuIcon,
  ExpandLess,
  ExpandMore,
  DisplaySettings,
  PlayCircle,
  Tv,
  SportsEsports,
  Signpost,
  Article,
  Headphones,
  Group,
  Info,
  ContactMail,
  Book,
  ArrowDropDown,
} from '@mui/icons-material'
import Link from 'next/link'
import Image from 'next/image'
import { useState, ReactElement } from 'react'
import { siteConfig } from '../../config'

interface Props {
  children: ReactElement
}

function HideOnScroll(props: Props) {
  const { children } = props
  const trigger = useScrollTrigger()
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}

interface HeaderProps {
  minimal?: boolean
}

export default function Header({ minimal = false }: HeaderProps) {
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState<{
    [key: string]: boolean
  }>({})

  const toggleMobileMenu = (menuName: string) => {
    setMobileMenuOpen((prev) => ({
      ...prev,
      [menuName]: !prev[menuName],
    }))
  }

  const getIcon = (title: string) => {
    const iconMap: { [key: string]: any } = {
      // Advertising
      Display: DisplaySettings,
      Video: PlayCircle,
      CTV: Tv,
      'In-game': SportsEsports,
      DOOH: Signpost,
      Native: Article,
      Audio: Headphones,
      // ABM
      'ABM Display': DisplaySettings,
      'ABM CTV': Tv,
      'ABM Leads': Group,
      'ABM Syndication': Article,
      // Resources
      Adspecs: Tv,
      Cases: Book,
      // Company
      'About Us': Info,
      Contact: ContactMail,
    }
    const IconComponent = iconMap[title]
    return IconComponent ? (
      <IconComponent sx={{ fontSize: 22, color: '#8b5cf6' }} />
    ) : null
  }

  const navItems = [
    {
      name: 'Advertising',
      dropdown: [
        { title: 'Display', href: '/display' },
        { title: 'Video', href: '/video' },
        { title: 'CTV', href: '/ctv' },
        { title: 'In-game', href: '/in-game' },
        { title: 'DOOH', href: '/dooh' },
        { title: 'Native', href: '/native-advertising' },
        { title: 'Audio', href: '/audio-advertising' },
      ],
    },
    {
      name: 'ABM',
      dropdown: [
        { title: 'ABM Display', href: '/abm-display' },
        { title: 'ABM CTV', href: '/abm-ctv' },
        { title: 'ABM Leads', href: '/abm-leads' },
        { title: 'ABM Syndication', href: '/abm-syndication' },
      ],
    },
    {
      name: 'Resources',
      dropdown: [
        { title: 'Adspecs', href: '/Adspecs' },
        { title: 'Cases', href: '/cases' },
      ],
    },
    {
      name: 'Company',
      dropdown: [
        { title: 'About Us', href: '/about' },
        { title: 'Contact', href: '/contact' },
      ],
    },
  ]

  return (
    <HideOnScroll>
      <AppBar
        position="fixed"
        sx={{
          background: `linear-gradient(135deg, ${siteConfig.colors.secondary} 0%, ${siteConfig.colors.primary} 100%)`,
          backdropFilter: 'blur(10px)',
          boxShadow: '0 8px 32px rgba(31,38,135,0.37)',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            sx={{ justifyContent: 'space-between', minHeight: '80px', py: 0 }}
          >
            {/* Logo */}
            {siteConfig.logo.image ? (
              <Box
                component={Link}
                href="/"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  textDecoration: 'none',
                }}
              >
                <Image
                  src={siteConfig.logo.image}
                  alt={siteConfig.logo.alt}
                  height={90}
                  width={270}
                  style={{ height: '90px', width: 'auto', margin: '-5px 0' }}
                  priority
                />
              </Box>
            ) : (
              <Typography
                variant="h5"
                component={Link}
                href="/"
                sx={{
                  fontWeight: 800,
                  textDecoration: 'none',
                  color: 'inherit',
                  background: 'linear-gradient(45deg, #fff, #e0e7ff)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {siteConfig.logo.text}
              </Typography>
            )}

            {/* Desktop Menu */}
            {!minimal && (
              <Box
                sx={{
                  display: { xs: 'none', md: 'flex' },
                  alignItems: 'center',
                  gap: 2,
                }}
                onMouseLeave={() => setActiveMenu(null)}
              >
                {navItems.map((item) => (
                  <Box key={item.name} sx={{ position: 'relative' }}>
                    <Button
                      color="inherit"
                      onMouseEnter={() => setActiveMenu(item.name)}
                      sx={{
                        fontWeight: 500,
                        fontSize: '1.1rem',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        '&:hover': { bgcolor: 'rgba(255,255,255,0.08)' },
                        display: 'flex',
                        alignItems: 'center',
                        gap: 0.2,
                      }}
                      endIcon={item.dropdown ? <ArrowDropDown /> : null}
                    >
                      {item.name}
                    </Button>

                    {/* Dropdown */}
                    {activeMenu === item.name && (
                      <Paper
                        onMouseEnter={() => setActiveMenu(item.name)}
                        onMouseLeave={() => setActiveMenu(null)}
                        sx={{
                          position: 'absolute',
                          top: '100%',
                          left: 0,
                          zIndex: 1300,
                          minWidth: item.dropdown.length > 4 ? 480 : 320,
                          bgcolor: '#ffffff',
                          borderRadius: '20px',
                          boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
                          border: '1px solid rgba(0,0,0,0.05)',
                          overflow: 'hidden',
                          mt: 1,
                        }}
                      >
                        <Box
                          sx={{
                            display: 'grid',
                            gridTemplateColumns:
                              item.dropdown.length > 4
                                ? 'repeat(2, 1fr)'
                                : '1fr',
                            gap: 0,
                            p: 3,
                          }}
                        >
                          {item.dropdown.map((dropItem) => (
                            <Box
                              key={dropItem.title}
                              component={Link}
                              href={dropItem.href}
                              sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 2,
                                p: 2,
                                m: 0.5,
                                borderRadius: '12px',
                                textDecoration: 'none',
                                color: '#1a1a1a',
                                fontSize: '16px',
                                fontWeight: 500,
                                transition: 'all 0.2s ease',
                                '&:hover': {
                                  bgcolor: '#f8fafc',
                                  transform: 'translateY(-1px)',
                                },
                              }}
                            >
                              <Box
                                sx={{
                                  width: 40,
                                  height: 40,
                                  borderRadius: '10px',
                                  bgcolor: '#f3e8ff',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  flexShrink: 0,
                                }}
                              >
                                {getIcon(dropItem.title)}
                              </Box>
                              <Typography
                                sx={{
                                  fontSize: '15px',
                                  fontWeight: 500,
                                  color: '#1a1a1a',
                                  lineHeight: 1,
                                }}
                              >
                                {dropItem.title}
                              </Typography>
                            </Box>
                          ))}
                        </Box>
                      </Paper>
                    )}
                  </Box>
                ))}
                {/* CTA Button */}
                <Button
                  variant="contained"
                  component={Link}
                  href="/contact"
                  sx={{
                    ml: 2,
                    fontSize: '1rem',
                    background: `linear-gradient(45deg, ${siteConfig.colors.primary}, ${siteConfig.colors.secondary})`,
                    '&:hover': {
                      background: `linear-gradient(45deg, ${siteConfig.colors.secondary}, ${siteConfig.colors.primary})`,
                    },
                  }}
                >
                  Get Started
                </Button>
              </Box>
            )}

            {/* Mobile Hamburger */}
            {!minimal && (
              <IconButton
                color="inherit"
                onClick={() => setMobileOpen(true)}
                sx={{ display: { xs: 'block', md: 'none' } }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </Container>

        {/* Mobile Drawer */}
        {!minimal && (
          <Drawer
            anchor="right"
            open={mobileOpen}
            onClose={() => setMobileOpen(false)}
            sx={{
              '& .MuiDrawer-paper': {
                width: 280,
                background: `linear-gradient(135deg, ${siteConfig.colors.secondary} 0%, ${siteConfig.colors.primary} 100%)`,
                color: 'white',
              },
            }}
          >
            <Box sx={{ p: 2 }}>
              {siteConfig.logo.image ? (
                <Box sx={{ mb: 2 }}>
                  <Image
                    src={siteConfig.logo.image}
                    alt={siteConfig.logo.alt}
                    height={70}
                    width={210}
                    style={{ height: '70px', width: 'auto' }}
                    priority
                  />
                </Box>
              ) : (
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 700 }}>
                  {siteConfig.logo.text}
                </Typography>
              )}
              <List>
                {navItems.map((item) => (
                  <Box key={item.name}>
                    <ListItem
                      button
                      onClick={() => toggleMobileMenu(item.name)}
                      sx={{ borderRadius: 1, mb: 0.5 }}
                    >
                      <ListItemText primary={item.name} />
                      {mobileMenuOpen[item.name] ? (
                        <ExpandLess />
                      ) : (
                        <ExpandMore />
                      )}
                    </ListItem>
                    <Collapse in={mobileMenuOpen[item.name]}>
                      <List sx={{ pl: 2 }}>
                        {item.dropdown.map((dropItem) => (
                          <ListItem
                            key={dropItem.title}
                            button
                            component={Link}
                            href={dropItem.href}
                            sx={{ borderRadius: 1, opacity: 0.9 }}
                            onClick={() => setMobileOpen(false)}
                          >
                            <ListItemText
                              primary={
                                <Box
                                  sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 1,
                                  }}
                                >
                                  {dropItem.title}
                                </Box>
                              }
                            />
                          </ListItem>
                        ))}
                      </List>
                    </Collapse>
                  </Box>
                ))}
                <ListItem sx={{ mt: 2 }}>
                  <Button
                    variant="contained"
                    component={Link}
                    href="/signup"
                    fullWidth
                    sx={{
                      background: 'rgba(255,255,255,0.2)',
                      '&:hover': { background: 'rgba(255,255,255,0.3)' },
                    }}
                  >
                    Get Started
                  </Button>
                </ListItem>
              </List>
            </Box>
          </Drawer>
        )}
      </AppBar>
    </HideOnScroll>
  )
}

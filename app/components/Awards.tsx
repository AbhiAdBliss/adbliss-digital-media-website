// 'use client'

// import { Box, Container, Grid, Paper, Typography, Chip } from '@mui/material'
// import { EmojiEvents, MilitaryTech, Verified } from '@mui/icons-material'

// // --- Brand Color Palette ---
// const brandColors = {
//   primary: '#1E88E5', // Main website color
//   secondary: '#FFC107', // Accent color
//   accent: '#E91E63', // Optional third color
//   text: '#ffffff', // Default text color
//   background: 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)', // Section background
// }

// // --- Awards Data ---
// const awards = [
//   {
//     id: 'a1',
//     icon: <EmojiEvents sx={{ fontSize: 48, color: brandColors.secondary }} />,
//     title: 'Best B2B Marketing Agency',
//     issuer: 'AdWeek Global Awards',
//     year: 2024,
//   },
//   {
//     id: 'a2',
//     icon: <Verified sx={{ fontSize: 48, color: brandColors.primary }} />,
//     title: 'Certified Google Ads Partner',
//     issuer: 'Google',
//     year: 2025,
//   },
//   {
//     id: 'a3',
//     icon: <MilitaryTech sx={{ fontSize: 48, color: brandColors.accent }} />,
//     title: 'Top 100 MarTech Innovators',
//     issuer: 'Forbes',
//     year: 2025,
//   },
// ]

// export default function AwardsSection() {
//   return (
//     <Box
//       component="section"
//       sx={{
//         py: 12,
//         background: brandColors.background,
//         color: brandColors.text,
//       }}
//     >
//       <Container maxWidth="lg">
//         {/* Section Header */}
//         <Box sx={{ textAlign: 'center', mb: 8 }}>
//           <Chip
//             label="🏆 Awards & Certifications"
//             sx={{
//               fontWeight: 700,
//               mb: 3,
//               bgcolor: `${brandColors.secondary}20`, // 12% opacity
//               color: brandColors.secondary,
//               border: `1px solid ${brandColors.secondary}40`,
//             }}
//           />
//           <Typography
//             variant="h3"
//             fontWeight={800}
//             sx={{
//               background: `linear-gradient(90deg, ${brandColors.secondary}, ${brandColors.primary})`,
//               WebkitBackgroundClip: 'text',
//               WebkitTextFillColor: 'transparent',
//               mb: 2,
//             }}
//           >
//             Recognized Excellence
//           </Typography>
//           <Typography variant="h6" color="grey.300" mt={1}>
//             Trusted by global leaders & recognized by industry experts.
//           </Typography>
//         </Box>

//         {/* Awards Grid */}
//         <Grid container spacing={6}>
//           {awards.map((a) => (
//             <Grid item xs={12} md={4} key={a.id}>
//               <Paper
//                 elevation={0}
//                 sx={{
//                   p: 5,
//                   textAlign: 'center',
//                   borderRadius: 4,
//                   background: 'rgba(255,255,255,0.08)',
//                   backdropFilter: 'blur(12px)',
//                   border: `1px solid ${brandColors.secondary}30`,
//                   boxShadow: '0 8px 30px rgba(0,0,0,0.5)',
//                   transition: 'all 0.4s ease',
//                   '&:hover': {
//                     transform: 'translateY(-10px)',
//                     boxShadow: `0 12px 40px ${brandColors.secondary}50`,
//                     border: `1px solid ${brandColors.secondary}`,
//                   },
//                 }}
//               >
//                 {/* Icon */}
//                 <Box
//                   sx={{
//                     mb: 3,
//                     display: 'inline-flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     width: 80,
//                     height: 80,
//                     borderRadius: '50%',
//                     background: `linear-gradient(135deg, ${brandColors.secondary}, ${brandColors.primary})`,
//                     boxShadow: `0 0 20px ${brandColors.secondary}40`,
//                   }}
//                 >
//                   {a.icon}
//                 </Box>

//                 {/* Title */}
//                 <Typography
//                   variant="h6"
//                   fontWeight={700}
//                   sx={{ mb: 1, color: brandColors.text }}
//                 >
//                   {a.title}
//                 </Typography>

//                 {/* Issuer + Year */}
//                 <Typography variant="body2" color="grey.400">
//                   {a.issuer} • {a.year}
//                 </Typography>
//               </Paper>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>
//     </Box>
//   )
// }

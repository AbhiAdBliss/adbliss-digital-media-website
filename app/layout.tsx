import './globals.css'
import ClientThemeProvider from './components/ThemeProvider'

export const metadata = {
  title: 'Adbliss Digital Media',
  description: 'Official website of Adbliss Digital Media',
  icons: {
    icon: '/logo.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
      </head>
      <body>
        <ClientThemeProvider>{children}</ClientThemeProvider>
      </body>
    </html>
  )
}

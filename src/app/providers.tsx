'use client'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { theme } from '@/theme/theme'

interface ProvidersProps {
  children: React.ReactNode
}
export const Providers = ({ children }: ProvidersProps) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}

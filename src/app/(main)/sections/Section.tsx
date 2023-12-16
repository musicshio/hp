import Box from '@mui/material/Box'

interface SectionBoxProps {
  children: React.ReactNode
}
export const Section = ({ children }: SectionBoxProps) => {
  return <Box height={'100%'}>{children}</Box>
}

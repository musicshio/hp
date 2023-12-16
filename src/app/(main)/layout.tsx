import * as React from 'react';
import {Box} from "@mui/system";


export default function MainLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {

  return (
    <Box>
      {children}
    </Box>
  );
}
import React from 'react';
import { Box, Container, Typography } from '@mui/material';

interface FormLayoutProps {
  title: string;
  children: React.ReactNode;
}

export const FormLayout: React.FC<FormLayoutProps> = ({ title, children }) => {
  return (
    <Container maxWidth="sm">
      <Box mt={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          {title}
        </Typography>
        {children}
      </Box>
    </Container>
  );
};

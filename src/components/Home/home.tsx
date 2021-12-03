import React from 'react';
import { Box, Paper, Typography } from '@material-ui/core';

const Home = () => {
  return (
    <Box overflow="hidden">
      <Box display="flex" justifyContent="flex-start">
        <Paper>
          <Box p={2}>
            <Typography variant="h4">
              Test Poc For BY Dev Portal, click on the right panel navigation to switch MFE
            </Typography>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default Home;

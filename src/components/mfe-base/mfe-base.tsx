import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import { useStore } from '../../context/store';

const MfeBase = () => {
  //   const classes = useStyles();
  const { values }: any = useStore();

  return (
    <Box overflow="hidden">
      <Box minHeight={500} display="flex" justifyContent="flex-start">
        <Box>
          <iframe
            src={values.activeTabs.frameUrl}
            width="100%"
            title="mfeRenderer"
            style={{
              height: '100vh',
              width: 'calc(100vw - 60px)',
              border: 'none',
              borderTop: '1px solid',
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default MfeBase;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const useStyles = makeStyles(() => {
  return {};
});

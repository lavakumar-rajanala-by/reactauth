/*
 * ===============================================================================================================
 *                                Copyright 2021, Blue Yonder Group, Inc.
 *                                           All Rights Reserved
 *
 *                               THIS IS UNPUBLISHED PROPRIETARY SOURCE CODE OF
 *                                          BLUE YONDER GROUP, INC.
 *
 *
 *                         The copyright notice above does not evidence any actual
 *                                 or intended publication of such source code.
 *
 * ===============================================================================================================
 */
import { LuiBackground } from '@jda/lui-common-component-library';
import { Box, CssBaseline, makeStyles } from '@material-ui/core';
import React from 'react';
// import useFindOrgByRealm from '../../hook-factory/findOrgByRealm.hook';
import { AlmAppBar } from '../appbar/Appbar';
import Drawer from './AppDrawer';

export default function AppDrawer(props: any) {
  const classes = useStyles();
  // const [loading, setLoading] = useState(true);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const organizationId: any = useFindOrgByRealm(props.realmName, setLoading);

  return (
    <>
      <Box overflow="hidden">
        <LuiBackground>
          <Box minWidth="100%" display="flex" justifyContent="center" alignItems="flex-start">
            <CssBaseline />
            <Box display="flex" width="100%">
              <Box width={'65px'}>
                <Drawer />
              </Box>
              <Box className={classes.welcomeContainer}>
                <AlmAppBar logout={props.logout} />
                {props.children}
              </Box>
            </Box>
          </Box>
        </LuiBackground>
      </Box>
    </>
  );
}

const useStyles = makeStyles(() => {
  return {
    welcomeContainer: {
      width: '100%',
      height: '100vh',
      overflowY: 'scroll',
    },
  };
});

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
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
import { Box, Avatar, Typography } from '@material-ui/core';
import { getUserFallbackName, Palette } from '@jda/lui-common-component-library';
import React from 'react';
import { UIdropdown } from '../common';
import { useStore } from '../../context/store';

export const AlmAppBar = (props: any) => {
  const classes = useStyles();
  const { values }: any = useStore();
  let user: any = localStorage.getItem('auth');
  user = JSON.parse(user);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const logout = (item: string) => {
    props.logout();
  };

  return (
    <AppBar position="static" color="primary" className={classes.root}>
      <Toolbar variant="dense">
        <Box flexGrow="1">
          <Typography className={classes.title} variant="h4">
            BY DevSite {values.activeTabs ? `| ${values.activeTabs.displayName}` : null}
          </Typography>
        </Box>

        <Box display="flex" className={classes.root} flexDirection="row" alignItems="center">
          <UIdropdown
            list={['Logout']}
            dataTestId="logoutUser"
            handleClickOpen={logout}
            targetComponent={
              user && (
                <Avatar alt={user.name} className={classes.purple}>
                  {getUserFallbackName(user.name)}
                </Avatar>
              )
            }
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: '2px 0',
      },
    },
    title: {
      fontWeight: theme.typography.fontWeightBold,
      color: theme.palette.primary.contrastText,
    },
    contrastText: {
      color: theme.palette.primary.contrastText,
    },
    purple: {
      color: theme.palette.getContrastText(Palette.colors.purple['500']),
      backgroundColor: Palette.colors.purple['500'],
    },
  })
);

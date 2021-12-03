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
import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { LuiBackground, LuiCardComponent } from '@jda/lui-common-component-library';
import Box from '@material-ui/core/Box';
import { Divider, IconButton, Typography } from '@material-ui/core';

export const UITabContainer = (props: any) => {
  const classes = useStyles();

  const headerComponent = () => (
    <>
      <Box className={classes.CustomHeader}>
        <Typography variant={props.variant}>
          <Box fontWeight="fontWeightMedium">{`${props.title}  (${props.badge})`}</Box>
        </Typography>
      </Box>
      <Box>
        <IconButton
          size="small"
          aria-label="actionIconAdd"
          onClick={(event: { stopPropagation: () => void }) => {
            event.stopPropagation();
            props.invokeAction(props.title);
          }}
          onFocus={(event: { stopPropagation: () => any }) => event.stopPropagation()}
          className="headerIconbutton"
        >
          {props.actionComponent}
        </IconButton>
      </Box>
    </>
  );

  return (
    <>
      <Box overflow="hidden">
        <LuiBackground>
          <Box>
            <LuiCardComponent
              headerComponent={headerComponent}
              titleIcon={props.actionIconFront}
              minimized={false}
              collapsed={false}
              collapsedClosedByDefault={false}
              headerClass={classes.headerClass}
            >
              {props.children}
            </LuiCardComponent>
          </Box>
        </LuiBackground>
      </Box>
      <Divider />
    </>
  );
};

const useStyles = makeStyles(() => ({
  CustomHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
  },
  ActionButtonResource: {
    //   fontWeight: 'bolder',
  },
  appDetailCardBody: {
    display: 'flex',
  },
  caption: {
    opacity: '0.74',
  },
  headerClass: {},
}));

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
import { createStyles, IconButton, makeStyles } from '@material-ui/core';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import React from 'react';
import { Alert } from '@material-ui/lab';

export const UISnackbar = (props: any) => {
  const classes = useStyles();
  return (
    <>
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={props.open}
        autoHideDuration={3000}
        onClose={props.handleClose}
        className={classes.width}
      >
        <Alert
          elevation={2}
          onClose={props.handleClose}
          variant="filled"
          severity={props.status || 'success'}
          action={
            <IconButton color="inherit" aria-label="Close Icon Button" onClick={props.handleClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          }
        >
          {props.content}
        </Alert>
      </Snackbar>
    </>
  );
};

const useStyles = makeStyles(() =>
  createStyles({
    width: {
      maxWidth: '400px',
    },
  })
);

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
import React from 'react';
import { LuiModalComponent } from '@jda/lui-common-component-library';
import { Box, makeStyles } from '@material-ui/core';

export const UIModal = (props: any) => {
  const classes = useStyles();

  return (
    <div>
      <LuiModalComponent
        isOpen={props.open}
        ModalTitle={props.title}
        handleClose={props.handleClose}
        ModalAction1={null}
        ModalAction2={props.modalActionButtons()}
        modalSize={props.size || 'sm'}
        className={classes.root}
      >
        <Box minWidth={650}>{props.children}</Box>
      </LuiModalComponent>
    </div>
  );
};

const useStyles = makeStyles(
  {
    root: {},
    paperWidthSm: {
      maxWidth: '700px',
      '& > .MuiDialogActions-spacing': {
        display: 'none',
      },
    },
    paperWidthXl: {
      maxWidth: 'calc(100vw - 200px)',
      height: '100%',
      '& > .MuiDialogActions-spacing': {
        display: 'none',
      },
    },
  },
  { name: 'MuiDialog' }
);

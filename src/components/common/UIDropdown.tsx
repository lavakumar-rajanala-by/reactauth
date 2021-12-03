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
import { Box, Menu, MenuItem } from '@material-ui/core';
import React from 'react';

export const UIdropdown = (props: any) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box mx={1}>
        <Box aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} data-testid={props.dataTestId}>
          {props.targetComponent}
        </Box>

        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
          data-testid="dropdownMenu"
        >
          {props.list.map((item: any, key: number) => (
            <MenuItem
              key={item + key}
              onClick={() => {
                props.handleClickOpen(item);
                handleClose();
              }}
              data-testid={item.replace(' ', '')}
            >
              {item}
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </>
  );
};

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
import { DrawerVariants, LuiDrawer, Palette } from '@jda/lui-common-component-library';
import OtherRoutes from './RoutesSettings';
import NavHomeIcon from '@jda/lui-common-icon-library/nav/NavHome';
import { Scope, Settings } from '@jda/lui-common-icon-library';
import { DeveloperMode, MobileFriendlyOutlined, MobileOffOutlined, Web } from '@material-ui/icons';

const Drawer = () => {
  const routes = [
    {
      routeName: 'Home',
      icon: <NavHomeIcon style={{ fontSize: 32 }} htmlColor={Palette.colors.lime['A700']} />,
      mfeDetails: {
        _id: '0',
        tenant: 'JDA',
        displayName: 'MFE-1',
        description: 'BY Studio',
        showNavigation: false,
        frameUrl: '',
        headerName: 'MFE 1 Sample',
      },
    },
    {
      routeName: 'mfe',
      icon: <Web style={{ fontSize: 32 }} htmlColor={Palette.colors.teal['A700']} />,
      mfeDetails: {
        _id: '0',
        tenant: 'JDA',
        displayName: 'MFE-1',
        description: 'BY Studio',
        showNavigation: false,
        frameUrl: 'https://mfe-develop.azurewebsites.net/',
        headerName: 'MFE 1 Sample',
      },
    },
    {
      routeName: 'mfe',
      icon: <MobileFriendlyOutlined style={{ fontSize: 32 }} htmlColor={Palette.colors.teal['400']} />,
      mfeDetails: {
        _id: '1',
        tenant: 'JDA',
        displayName: 'MFE-2',
        description: 'Test Web page',
        showNavigation: true,
        frameUrl: 'https://jsonschema.net/login',
        headerName: 'MFE 2 Sample',
      },
    },
  ];

  return (
    <LuiDrawer
      drawerItems={OtherRoutes(routes)}
      drawerVariant={DrawerVariants.Collapsible}
      visible={false}
      hideBlueYonderLogo={false}
      drawerMaxWidth={250}
      leaveSpaceForToolbar={false}
      ontoggleDrawer={() => {
        return;
      }}
      collapsibleOnHover={false}
      usePopouts={false}
      maxIcons={3}
      showLabels={false}
      appBarHeight={50}
    />
  );
};

export default Drawer;

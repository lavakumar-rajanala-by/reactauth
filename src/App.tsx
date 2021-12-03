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
import { Route, Switch } from 'react-router-dom';
import { Box, Button, Card, LinearProgress, Paper, ThemeProvider } from '@material-ui/core';
import { LuiBackground, LuiEmptyComponent } from '@jda/lui-common-component-library';
import { useDomHistoryMonitor } from '@jda/lui-portal-utilities';
import AppDrawer from './components/appDrawer/AppDrawerContainer';
import { StylesProvider } from '@material-ui/core/styles';
import { LightTheme } from '@jda/lui-common-component-library';
import './App.css';
import useFindPermissionsBySubId from './hook-factory/findPermissionsBysubjectId.hook';
import { Key } from '@jda/lui-common-icon-library';
import { AlmAppBar } from './components/appbar/Appbar';
import { UISnackbar } from './components/common';
import { useStore } from './context/store';
import MfeBase from './components/mfe-base/mfe-base';
import Home from './components/Home/home';

function App(props: { logout: any; realmName: any }) {
  useDomHistoryMonitor();
  const { values, actions }: any = useStore();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { response } = useFindPermissionsBySubId();

  if (!response) {
    return <LinearProgress />;
  }

  function handlePopup() {
    actions.setpopupState({ state: false, message: '', status: '' });
  }

  if (!response.length) {
    return (
      <ThemeProvider theme={LightTheme}>
        <Box>
          <Paper>
            <AlmAppBar logout={props.logout} />
            <Card>
              <LuiEmptyComponent
                imageItem={<Key color="action" />}
                heading={'No permissions found'}
                subHeading={`You don't have enough permissions to view the Dashboard. Contact Admin`}
                actionItems={
                  <Button color="primary" variant="contained" onClick={() => window.location.reload()}>
                    Refresh
                  </Button>
                }
              />
            </Card>
          </Paper>
        </Box>
      </ThemeProvider>
    );
  }

  return (
    <div className="app">
      <ThemeProvider theme={LightTheme}>
        <StylesProvider injectFirst>
          <LuiBackground>
            <AppDrawer
              logout={() => {
                props.logout();
                localStorage.removeItem('token');
              }}
              realmName={props.realmName}
            >
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/mfe" component={MfeBase} />
              </Switch>
            </AppDrawer>
            {values.popupState.state && (
              <UISnackbar
                open={values.popupState.state}
                status={values.popupState.status}
                content={values.popupState.message}
                handleClose={handlePopup}
              />
            )}
          </LuiBackground>
        </StylesProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;

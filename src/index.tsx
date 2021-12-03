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
import ReactDOM from 'react-dom';
import App from './App';
import { AzureAD, AuthenticationState, IAzureADFunctionProps } from 'react-aad-msal';
import authProvider from './auth/authProvider';
import { BrowserRouter } from 'react-router-dom';
import LoginPage from './components/loginPage/loginPage';
import ReduxDevtoolsProvider from './context/devtools';
import { StoreProvider } from './context/store';
import { authDecode } from './auth/authGetAccessToken';

ReactDOM.render(
  <AzureAD
    provider={authProvider}
    forceLogin={false}
    accountInfoCallback={(token) => {
      if (token) {
        authDecode(token);
      }
    }}
  >
    {({ login, logout, authenticationState, accountInfo }: IAzureADFunctionProps) => {
      switch (authenticationState) {
        case AuthenticationState.Authenticated:
          return (
            <BrowserRouter>
              <ReduxDevtoolsProvider>
                <StoreProvider>
                  <App logout={logout} realmName={accountInfo?.account.idToken['by_realm']} />
                </StoreProvider>
              </ReduxDevtoolsProvider>
            </BrowserRouter>
          );
        default:
          return <LoginPage login={login} logout={logout} />;
      }
    }}
  </AzureAD>,
  document.getElementById('root')
);

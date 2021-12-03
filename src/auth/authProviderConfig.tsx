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
// import { Logger, LogLevel } from 'msal';

// Msal Configurations
const config = () => {
  const clientId = process.env.REACT_APP_CLIENT_ID;
  const tenantHost = process.env.REACT_APP_TENANT_HOST;
  const policy = process.env.REACT_APP_POLICY_NAME;
  const domainHost = process.env.REACT_APP_B2C_DOMAIN_HOST;

  return {
    auth: {
      authority: `https://${domainHost}/${tenantHost}/${policy}`,
      clientId: clientId,
      postLogoutRedirectUri: window.location.origin + '/',
      redirectUri: window.location.origin + '/',
      navigateToLoginRequestUrl: false,
      validateAuthority: false,
    },
    cache: {
      cacheLocation: 'localStorage',
      storeAuthStateInCookie: true,
    },
  } as any;
};

export default config;

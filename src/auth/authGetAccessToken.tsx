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
import { AuthenticationParameters } from 'msal';
import jwt_decode from 'jwt-decode';
import authProvider from './authProvider';

export const getAccessToken = async () => {
  const apimScope = process.env.REACT_APP_SCOPE;
  const idpPrefferedUsername = JSON.parse(localStorage.getItem('auth') as string).idp_preferred_username;
  if (authProvider.getAccount()) {
    const userRequest: AuthenticationParameters = {
      scopes: [`${apimScope}`],
      loginHint: idpPrefferedUsername,
    };
    await authProvider
      .acquireTokenSilent(userRequest)
      .then((response) => {
        console.log('msal fetched');
        localStorage.setItem('token', response.accessToken);
      })
      .catch(async (err) => {
        console.log(err);
        await authProvider.acquireTokenPopup(userRequest).then((response) => {
          localStorage.setItem('token', response.accessToken);
        });
      });
  }

  return;
};

export const authDecode = async (token: any) => {
  if (token) {
    try {
      const decodedHeader = jwt_decode(token.jwtIdToken);
      localStorage.setItem('auth', JSON.stringify(decodedHeader));
      return;
    } catch (error) {
      console.log(error);
    }
  }
};

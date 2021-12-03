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
import axios, { AxiosRequestConfig } from 'axios';
import { getAccessToken } from '../auth/authGetAccessToken';

async function request(url: string, params?: { [x: string]: string }, method?: any) {
  await getAccessToken();
  const _apiHost = `${process.env.REACT_APP_APIM_HOST}${process.env.REACT_APP_APIM_ROUTE}`;

  const options: AxiosRequestConfig = {
    method: method,
    headers: { ...getHeaders() },
    url: _apiHost,
  };

  if (params && method === 'GET') {
    url += '?' + objectToQueryString(params);
  }
  options.url += url;
  if (url.includes('searchPermissions')) {
    options.url = `${process.env.REACT_APP_APIM_HOST}/${url}`;
    options.url = options.url.replace('-dev', '-tst');
  }
  options.data = params;

  console.log(options.url);

  const response = await axios(options)
    .then(function (response: any) {
      return response;
    })
    .catch(function (error) {
      return { ...error.response.data };
    });

  if (response.status !== 200 && response.status !== 201) {
    return generateErrorResponse(response.message);
  }

  const result = await response.data;
  return { data: result, status: response.status };
}

export function getResource(url: string, params?: { [x: string]: string }) {
  return request(url, params, 'GET');
}

export function createResource(url: string, params?: { [x: string]: string }) {
  return request(url, params, 'POST');
}

export function updateResource(url: string, params?: { [x: string]: string }) {
  return request(url, params, 'PATCH');
}

export function removeResource(url: string, params?: { [x: string]: string }) {
  return request(url, params, 'DELETE');
}

function objectToQueryString(obj: { [x: string]: string }) {
  return Object.keys(obj)
    .map((key) => key + '=' + obj[key])
    .join('&');
}

function generateErrorResponse(message: string) {
  return {
    status: 'error',
    message,
  };
}

const getHeaders = () => {
  const headers = {
    Authorization: `bearer ${localStorage.getItem('token')}`,
    'Access-Control-Allow-Origin': '*',
  };
  return headers;
};

export const Fetch = {
  getResource,
  createResource,
  updateResource,
  removeResource,
};

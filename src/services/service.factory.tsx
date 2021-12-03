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
import { ApiRoutes } from './service.routes';
import { Fetch } from './service.requestHandler';
// const offsetlim = { offset: '', limit: '' };
export function findOrgIdByRealmNameService(realmName: string) {
  return Fetch.getResource(ApiRoutes.Realms + `/name/${realmName}`);
}

//-----------------------------------------WORKFLOW-ENVIRONMENTS Service Calls End
export function findUserPermissionsBySubIdService(subId: string) {
  const body: any = {
    includePermissions: true,
    includePolicies: true,
    moduleId: 2002000007,
  };
  return Fetch.createResource(ApiRoutes.searchPermissions + `${subId}/searchPermissions`, { ...body });
}

//-----------------------------------------LIAM Permissions Service Calls End

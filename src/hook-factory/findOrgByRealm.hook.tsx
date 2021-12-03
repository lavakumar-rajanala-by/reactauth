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
import { useState, useEffect } from 'react';
import { findOrgIdByRealmNameService } from '../services/service.factory';
import { useStore } from '../context/store';

function useFindOrgByRealm(realmName: any, setLoading: any) {
  const [response, setResponse]: any = useState([]);
  const { actions }: any = useStore();
  useEffect(() => {
    async function fetchData() {
      await findOrgIdByRealmNameService(realmName)
        .then((res: any) => {
          actions.setbasicSettings({
            realmId: realmName,
            organizationId: res.data.organizationId,
          });
          setLoading(false);
        })
        .catch((error: any) => error);
    }
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { response, setResponse };
}

export default useFindOrgByRealm;

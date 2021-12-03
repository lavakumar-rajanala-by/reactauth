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
import { findUserPermissionsBySubIdService } from '../services/service.factory';
import { useStore } from '../context/store';

function useFindPermissionsBySubId() {
  const subjectId = JSON.parse(localStorage.getItem('auth') as string).sub;
  const [response, setResponse]: any = useState(false);
  const { actions }: any = useStore();

  useEffect(() => {
    async function fetchData() {
      await findUserPermissionsBySubIdService(subjectId)
        .then((res: any) => {
          setResponse(res.data.permissions);
          actions.setPermissions(JSON.stringify(res.data.permissions).toLowerCase());
        })
        .catch((error: any) => error);
    }
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { response, setResponse };
}

export default useFindPermissionsBySubId;

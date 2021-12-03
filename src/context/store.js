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
import PropTypes from 'prop-types';
import React, { createContext, useMemo, useState } from 'react';
// const workFlowdata = require('./workflow.json');

const Store = createContext({ actions: {}, values: {} });

export const useStore = () => React.useContext(Store);

export const StoreProvider = ({ children }) => {
  const [basicSettings, setbasicSettings] = useState({});
  const [tabValue, setValue] = useState(0);
  const [activeTabs, setactiveTabs] = useState(false);
  const [permissions, setPermissions] = useState('');
  const [popupState, setpopupState] = useState({
    state: false,
    message: '',
    status: '',
  });

  const value = useMemo(
    () => ({
      actions: {
        setbasicSettings,
        setPermissions,
        setpopupState,
        setValue,
        setactiveTabs,
      },
      values: {
        basicSettings,
        permissions,
        popupState,
        tabValue,
        activeTabs,
      },
    }),
    [basicSettings, permissions, popupState, tabValue, activeTabs]
  );

  return <Store.Provider value={value}>{children}</Store.Provider>;
};

StoreProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
